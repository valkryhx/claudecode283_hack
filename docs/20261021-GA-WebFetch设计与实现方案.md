# 20261021-GA WebFetch 设计与实现方案

> **状态：B 路线参考方案（暂不实施）。**
>
> 当前已决定先实施 A 路线：透明网络出口优先、对齐 CC WebFetch 行为。
> A 路线实施契约见 `docs/20261021-GA-WebFetch-A方案.md`。
> 本文保留完整 direct SSRF / DNS rebinding / peer 复核 / trusted-proxy 设计，作为 A 完成后的后续增强，不要在 A 阶段按本文验收。


> 目标：为 GenericAgent（下称 GA）实现一个可上线、可审计、默认安全、能适应用户本机代理/VPN 环境的 `web_fetch` 工具。
> 本方案是实现契约，不是源码调研复述。CC 2.1.303 的关键事实、GA 的真实文件落点、分阶段任务、测试矩阵和验收标准都写在本文中。
> 适用仓库：`D:\git_codes\GenericAgent`。本文自身落在 `D:\git_codes\claudecode283_hack\docs\`，用于评审和后续实施；不要把 GA 生产代码写回 CC 源码存档仓库。

---

## 1. 结论先行

### 1.1 CC 的核心做法：传输层透明化，而不是工具层判断网络模式

结论是：**CC 的 WebFetch 工具层不判断“直连还是 VPN”，它依赖进程级网络出口。**

源码链路已经核对：

1. WebFetch 的 HTTP 请求使用全局 Axios 单例 `Ct.get(...)`，见 `reconstructed303/full/m0459_0xecff32a.js:111818-111836`。
2. Axios 默认实例由 `m0116_0xe626cb1.js:4775-4792` 导出；WebFetch 没有自建一套网络客户端。
3. 启动阶段调用 `wb()`（源码中的压缩函数名）统一配置网络，调用点见 `m0710_0xf5b3e2c.js:460`，实现见 `m0117_0xe640372.js:2470-2495`。
4. `wb()` 做了两件事：
   - 从代理环境变量读取代理，并给 Axios 安装 `httpAgent` / `httpsAgent`；
   - 调用 `undici.setGlobalDispatcher(...)`，把 Node/Bun 的全局 `fetch` 也切到代理 dispatcher。
5. 官方网络文档进一步确认：Claude Code 尊重标准代理环境变量，且在启动时读取，运行中的会话不会重新读取 shell 后续变化；WebFetch 的 domain safety check 也会走配置的 HTTP 代理。见 `https://code.claude.com/docs/en/network-config` 的 “Proxy configuration” 与 “WebFetch tool still calls api.anthropic.com” 说明。
6. 因此 CC 是“进程级网络出口统一配置”：工具拿到的是已经配置好的 Axios/undici 传输栈；Windows 系统代理属于平台网络栈的补充来源，不是 WebFetch 自己每次判断直连还是 VPN。

因此，CC 的用户体验是：

```text
WebFetch(url)
   -> tool 层只做 URL/DNS/权限/内容处理
   -> 全局 Axios 发送请求
   -> 全局 agent / dispatcher 自动走环境代理或 TUN
   -> VPN 负责最终出口
```

这不是“WebFetch 每次检查网络模式”，而是“整个进程的网络栈统一继承本机网络配置”。

### 1.2 但“能用”不等于“安全校验经过代理后仍然有效”

CC 的本地路径**没有实现完整的 SSRF 防护**。已核对的关键缺口：

- URL 校验只做基础形态检查，没有完整 scheme allowlist：`m0459:111729-111740`；
- 本地 HTTP 请求没有自定义 `lookup` 固定 DNS 结果：`m0459:111818-111836`；
- 重定向只做 host/protocol/port 关系判断，没有每跳 DNS/IP 复验：`m0459:111784-111869`；
- 若请求走 HTTPS CONNECT 代理，目标 hostname 通常由代理侧解析和连接，本地 `lookup` 不能代表最终出口；
- sandbox 不覆盖 WebFetch：`m0062_0xe4ee087.js:5515`。

所以不能把 CC 的“代理透明可用”直接当作 GA 的安全设计。GA 必须把两件事拆开：

1. **出口能力**：透明继承本机代理/VPN，保证普通网络环境下能访问目标；
2. **安全边界**：在代理无法被本地校验覆盖时，明确降级安全声明，而不是假装本地 DNS 校验仍然有效。

### 1.3 GA 推荐路线

推荐采用**传输层透明化 + 两阶段、单工具、双出口安全策略**：

- **P0：安全抓取器（传输层自动继承出口 + 安全直连基线）**
  - 默认 `https-only`；
  - 完整 URL、DNS、IP、重定向、大小、解压、超时限制；
  - 本地 DNS 只解析一次并绑定连接；
  - 进程级继承标准代理环境变量与系统代理/TUN；
  - 显式代理模式作为可选出口；
  - 自动探测系统代理/TUN/fake-IP，但探测结果只用于诊断、审计和选择“建议出口”，不能静默授权任意代理；
  - WebFetch 工具参数不暴露 `direct`/`proxy`，出口由统一网络配置决定。

- **P1：模型提炼**
  - 复用当前 GA 会话模型和凭据；
  - 独立计量、限流、超时和失败退化；
  - 网页正文始终按不可信数据处理。

### 1.4 关于“理论上 WebFetch 应该在任何网络下可用”

这个目标要拆成两个承诺：

| 承诺 | 是否可实现 | 前提 |
| --- | --- | --- |
| 在有可用系统代理/VPN 的机器上，普通公网 URL 能被抓取 | 可以 | 允许显式或可审计地继承代理/TUN |
| 在任意网络细节下都不因代理而绕过 SSRF 防护 | 不能无条件保证 | 必须有可信代理侧策略，或明确标记为“非安全直连模式” |

因此，GA 的正确产品语义是：

> **默认自动适配网络出口，默认不牺牲安全边界；当出口无法被本地验证时，降级安全声明并记录原因。**

---

## 2. 目标与非目标

### 2.1 目标

1. 提供单一工具名 `web_fetch`，输入 `url`、`prompt`、可选 `offset`。
2. 默认只允许 HTTPS，拒绝 `http:`、`file:`、`data:`、`ftp:` 等 scheme。
3. 对 URL 做长度、userinfo、hostname、IDNA、端口、控制字符校验。
4. 对目标域名做 A/AAAA 全量解析；任一地址为私网、回环、链路本地、CGNAT、云 metadata、保留地址等，整个目标拒绝。
5. 连接期只解析一次，使用已验证地址建立 socket；连接后再复核 peer 地址。
6. 每一跳重定向都重新执行 URL、DNS、IP 和 peer 校验。
7. 限制响应头、压缩前字节、解压后字节、总 deadline、单次请求超时、DNS 超时和重定向次数。
8. HTML 转 Markdown；文本按明确编码策略解码；二进制保存为受控附件，不直接进入模型上下文。
9. 与 GA 现有 capability、permission、PathACL、hooks、transcript 集成。
10. 记录可审计事件，不记录网页全文。
11. 自动探测系统代理、环境变量代理、TUN/fake-IP 和常见本地 mixed-port，输出诊断信息。
12. 支持显式“可信代理模式”，用于本机 VPN/TUN 环境；该模式必须明确标记安全边界。

### 2.2 非目标

- 不承诺登录私有站点、OAuth 页面、企业 SSO 页面。
- 不自动执行网页里的 JavaScript。
- 不绕过目标站点的 robots、WAF、登录或付费墙。
- 不把任意用户配置的代理自动当成可信出口。
- 不在 P0 做跨会话网页内容持久缓存；
- 不让模型在 `url`/`prompt` 参数里选择网络出口。
- 不在当前 CC 源码存档仓库修改 CC 源码。

---

## 3. 关键设计决策

### D1：传输层透明化，工具参数不暴露网络模式

`web_fetch` 的参数保持简单：

```json
{
  "url": "https://example.com/page",
  "prompt": "提取主要结论",
  "offset": 0
}
```

网络出口由运行环境决定，而不是由模型每次选择。原因：

- 模型不应该因为网络拓扑细节而改变工具调用；
- 出口配置应可由用户、管理员或部署方统一治理；代理变量在进程启动时读取，运行中不热切换，避免同一回合内出口漂移；
- CC 已经采用这种模型，用户体验一致；
- 避免模型通过参数切换代理来绕过安全策略。

### D2：传输层自动适配，安全层明确标注

GA 使用一个 `NetworkEgress` 抽象：

```text
direct             本地 DNS + 本地 socket + 完整 IP 校验
system-proxy       继承系统/环境代理，记录“代理侧解析”事实
trusted-proxy      显式配置的可信代理，信任代理侧 SSRF 策略
blocked            当前策略禁止联网
```

默认策略：

- 有 `GA_WEBFETCH_EGRESS` 显式配置时使用显式配置；
- 否则自动探测，但只在“可验证安全直连”时自动 direct；
- 检测到 TUN/fake-IP 或系统代理时，不静默宣称“安全直连”，而是：
  - 使用 `system-proxy`（或透明 TUN）出口保证可用性；
  - 在结果和审计中标记 `security_assurance=proxy_side_unverified`；
  - 如部署要求严格安全，可配置 `GA_WEBFETCH_REQUIRE_VERIFIED_EGRESS=1`，此时 fail-closed 并提示用户配置可信代理。

### D3：不把“检测到代理”当成“代理可信”

自动探测只负责发现和报告：

```text
proxyDetected=true
proxyType=mixed-port
systemProxy=127.0.0.1:7897
tunDetected=true
fakeIpDnsDetected=true
recommendedEgress=trusted-proxy
```

是否允许实际使用代理，由显式配置或明确的默认安全策略决定。

### D4：P0 先做确定性抓取，P1 再做模型提炼

P0 的产出是原始 Markdown/文本 + 元数据；P1 才调用当前 GA 模型根据 `prompt` 提炼。

这样在模型不可用、token 超限或 provider 异常时，仍然能完成网页读取、缓存、权限和审计。

### D5：默认不跨站自动跟随重定向

与 CC 学习一致，同站重定向可自动跟随；跨站重定向默认返回“重定向目标 + 不可信提示”，由模型决定是否再次调用 `web_fetch`。每跳都必须重新校验。

---

## 4. 模块与文件落点

所有生产代码放在 `D:\git_codes\GenericAgent`，建议新增：

```text
genericagent/tools/
  __init__.py
  web_fetch/
    __init__.py
    models.py          # WebFetchRequest, WebFetchResult, FetchError, AuditEvent
    policy.py          # URL/Host/Port/scheme/DNS/IP 策略与地址分类
    dns.py             # 可注入 DNS resolver、全量解析、超时、连接固定
    transport.py       # direct/system-proxy/trusted-proxy、peer 复核、redirect
    limits.py          # 字节、header、deadline、解压、重定向限制
    extract.py         # HTML->Markdown、编码、content-type 分流
    cache.py           # 有界 LRU、TTL、安全上下文键
    audit.py           # JSONL 审计与敏感信息脱敏
    tool.py            # 工具入口、GA handler 适配、P1 模型调用
```

需要修改的现有文件：

| 文件 | 修改 |
| --- | --- |
| `genericagent/core/handler.py` | 增加 `do_web_fetch`，接入现有 `dispatch()` 生命周期 |
| `genericagent/core/permissions/policy.py` | 把 `web_fetch` 归为只读工具 |
| `genericagent/workflow/permissions.py` | 同步只读静态工具分类，确保 workflow 子 agent 一致 |
| `assets/tools_schema.json` | 增加 `web_fetch` 工具 schema |
| `assets/tools_schema_cn.json` | 增加中文 schema |
| `genericagent/paths.py` | 增加 WebFetch 审计/缓存目录 |
| `docs/20261021-GA-WebFetch设计与实现方案.md`（GA 仓库内副本） | 若需要，可在实施后同步一份；不要把调研文档复制成代码依赖 |
| `tests/test_web_fetch_*.py` | 新增单元、集成、攻击回归测试 |

注意：`GenericAgentHandler` 的 `dispatch()` 已实现 capability、permission、PathACL、hooks 的顺序。新增工具必须走同一条链路，不能直接绕过 `dispatch()` 发网络请求。

---

## 5. 工具契约

### 5.1 输入

```json
{
  "url": "https://example.com/page",
  "prompt": "提取主要结论",
  "offset": 0
}
```

字段语义：

| 字段 | 类型 | 必需 | 约束 |
| --- | --- | --- | --- |
| `url` | string | 是 | HTTPS，长度 ≤ 2000，禁止 userinfo/控制字符/IP literal |
| `prompt` | string | 否 | P1 提炼指令；P0 可用于本地关键词筛选或仅记录 |
| `offset` | integer | 否 | 正文 Markdown 字符偏移，用于长文续读 |

### 5.2 输出

成功：

```json
{
  "status": "success",
  "url": "https://example.com/page",
  "final_url": "https://example.com/page",
  "redirects": [],
  "content_type": "text/html",
  "result": "# Example Domain\n...",
  "truncated": false,
  "encoded_bytes": 334,
  "decoded_bytes": 577,
  "duration_ms": 123,
  "egress": {
    "mode": "direct",
    "proxy_detected": false,
    "security_assurance": "verified_direct"
  },
  "warnings": []
}
```

代理/TUN 场景：

```json
{
  "egress": {
    "mode": "system-proxy",
    "proxy_detected": true,
    "proxy_endpoint": "127.0.0.1:7897",
    "tun_detected": true,
    "fake_ip_dns_detected": true,
    "security_assurance": "proxy_side_unverified"
  }
}
```

错误：

```json
{
  "status": "error",
  "code": "ADDRESS_BLOCKED",
  "message": "resolved address is not public: 10.0.0.5 (private)",
  "details": {"address": "10.0.0.5", "classification": "private"}
}
```

### 5.3 错误码

统一、稳定、可测试：

```text
URL_INVALID
URL_TOO_LONG
URL_USERINFO
SCHEME_BLOCKED
HOST_DOTLESS
HOST_BLOCKED
DNS_FAILED
DNS_EMPTY
DNS_TIMEOUT
ADDRESS_BLOCKED
PEER_BLOCKED
PEER_UNREADABLE
REDIRECT_INVALID
REDIRECT_LIMIT
REDIRECT_CROSS_SITE
HTTP_STATUS
HEADER_TOO_LARGE
BODY_TOO_LARGE
DECODED_BODY_TOO_LARGE
DECODE_FAILED
CONTENT_TYPE_UNSUPPORTED
REQUEST_TIMEOUT
DEADLINE
EGRESS_UNAVAILABLE
PROXY_UNTRUSTED
CANCELLED
```

---

## 6. 安全策略细节

### 6.1 URL

拒绝：

- 非 `https:` scheme；
- `file:`、`data:`、`ftp:`、`ws:`、`wss:`、`javascript:`、`gopher:` 等；
- userinfo（`user:pass@`）；
- 控制字符；
- URL 长度 > 2000；
- dotless hostname（除非明确开发模式）；
- IPv4/IPv6 literal；
- localhost、`*.localhost`、`metadata`、`metadata.google.internal` 等元数据主机名；
- 端口不在允许列表（默认只允许 443）。

### 6.2 DNS

- 使用可注入 `DnsResolver`；
- 查询 A 和 AAAA；
- `dns.lookup({all:true, verbatim:true})` 或等价；
- 任意结果为非公网地址 => 整个目标拒绝；
- 不只看第一个结果，避免“公网 + 私网”混合绕过；
- 对 IPv4-mapped IPv6、NAT64、6to4 等嵌入地址先还原再分类；
- DNS 超时独立于 HTTP timeout。

### 6.3 地址分类

至少拒绝：

- `0.0.0.0
/8` unspecified；
- `10/8`、`172.16/12`、`192.168/16` private；
- `127/8` loopback；
- `169.254/16` link-local；
- `100.64/10` CGNAT；
- `198.18/15` benchmarking；
- `224/4` multicast；
- `240/4` reserved；
- IPv6 `::1`、`fc00::/7` ULA、`fe80::/10` link-local、`ff00::/8` multicast；
- 云 metadata：`169.254.169.254`、`169.254.170.2`、`100.100.100.200`、`168.63.129.16` 等；
- 其他特殊用途地址。

> 当前用户环境中的 Mihomo TUN 使用 `198.18.0.0/15` fake-IP。安全直连模式会把它判定为非公网并拒绝，这是正确行为；不能为了“能访问”而放开整个保留段。TUN 场景应走显式代理/可信代理模式，或在代理侧完成地址校验。

### 6.4 DNS rebinding

正确做法不是“先查一次 DNS，再让 HTTP 客户端自行再查一次”，而是：

1. 在建立连接的自定义 `lookup` 回调里解析并校验；
2. 只把已校验的地址交给 socket；
3. 连接建立后读取 `socket.remoteAddress` 复核；
4. 不启用带旧 DNS 决策的跨请求连接池，或确保连接池 key 包含 DNS 决策/安全上下文。

### 6.5 重定向

- 关闭客户端自动重定向；
- 手动处理 301/302/303/307/308；
- 每一跳执行完整 URL/DNS/IP/peer 校验；
- 限制总跳数（建议 5）；
- 跨站默认返回 `REDIRECT_CROSS_SITE`，不自动抓取；
- 重定向响应体也必须受大小和时间限制，不能无限挂起；
- 不继承原请求的认证信息。

### 6.6 响应限制

默认值建议：

| 限制 | 默认值 |
| --- | --- |
| 总 deadline | 15 s |
| 单请求 timeout | 5 s |
| DNS timeout | 3 s |
| 最大 header | 16 KiB |
| 压缩前 body | 2 MiB |
| 解压后 body | 10 MiB |
| 最大重定向 | 5 |
| 最大 URL | 2000 字符 |

要求：

- `Content-Length` 只能做早期拒绝提示，不能替代实际流式计数；
- 解压后也必须计数；
- 压缩炸弹必须在中途中止；
- 取消/超时后销毁请求和 socket，不留下半成品缓存；
- 错误必须映射到稳定错误码。

### 6.7 HTTPS-only

- 默认拒绝 HTTP；
- 不做隐式 HTTP->HTTPS 升级；
- `rejectUnauthorized=true`；
- 生产环境禁止 `rejectUnauthorized=false`；
- HTTP/loopback 只允许显式开发开关，并在审计中标记。

---

## 7. 网络出口设计

### 7.1 为什么不能只做“安全直连”

安全直连要求本地 DNS 能拿到真实公网 IP，并在本地建立 socket。TUN + fake-IP 代理环境下：

```text
example.com -> 198.18.0.28 (fake IP)
```

安全直连会正确判定 `198.18.0.0/15` 为非公网而拒绝。用户看到的现象就是“VPN 明明开着，WebFetch 却不通”。

因此必须提供两种可用出口：

### 7.2 出口模式 A：direct

适用：

- 普通家庭/公司网络；
- 没有 TUN fake-IP；
- 本地 DNS 返回真实公网地址。

行为：

- 忽略 `HTTP_PROXY`/`HTTPS_PROXY`，防止代理侧重新解析绕过本地校验；
- 本地 DNS 全量校验；
- 连接固定；
- peer 复核；
- 安全声明：`verified_direct`。

### 7.3 出口模式 B：system-proxy / TUN / trusted-proxy

适用：

- 本机 VPN/TUN；
- 公司统一出口代理；
- 系统代理是可信基础设施。

行为：

- 优先使用显式代理端点；未配置时继承系统代理或 TUN 透明出口；
- HTTP CONNECT/SOCKS 代理模式下，目标 hostname 通常由代理侧解析和连接；TUN 模式下由 TUN DNS/路由接管；
- 本地只做 URL/端口/重定向/大小/超时限制；
- 代理侧应执行 DNS/IP deny list；如果代理侧没有该能力，安全声明必须是 `proxy_side_unverified`；
- TUN 模式下应通过代理配置/策略明确禁止访问私网与 metadata；否则同样只能标 `proxy_side_unverified`；
- 不能声称“本地已验证目标 IP”。

### 7.4 自动探测

新增 `detect_egress()`，只读检测：

- `HTTP_PROXY` / `HTTPS_PROXY` / `ALL_PROXY` / `NO_PROXY`；
- Windows `ProxyEnable`、`ProxyServer`、`AutoConfigURL`；
- 常见本地端口：`1080`、`1081`、`7890`、`7897`、`7898`、`8080`、`8888`、`3128`；
- TUN 网卡/默认路由；
- DNS 是否返回 `198.18.0.0/15` fake-IP；
- 本地代理进程名（如 `mihomo`、`clash`、`hiddify`、`v2ray`、`xray`、`sing-box`）。

输出示例：

```json
{
  "proxy_detected": true,
  "proxy_endpoint": "127.0.0.1:7897",
  "proxy_type": "mixed-port",
  "tun_detected": true,
  "fake_ip_dns_detected": true,
  "recommended_egress": "trusted-proxy"
}
```

自动探测不能：

- 自动把任意代理当成可信代理；
- 自动关闭 HTTPS 校验；
- 自动放行私网/保留地址；
- 自动把网页内容送入模型。

### 7.5 配置

建议新增 GA 配置：

```json
{
  "web_fetch": {
    "enabled": true,
    "egress": "auto",
    "proxy": null,
    "trust_proxy_ssrf_policy": false,
    "require_verified_egress": false,
    "allow_http": false,
    "allow_loopback_development": false,
    "max_url_length": 2000,
    "max_redirects": 5,
    "max_header_bytes": 16384,
    "max_encoded_bytes": 2097152,
    "max_decoded_bytes": 10485760,
    "total_deadline_ms": 15000,
    "request_timeout_ms": 5000,
    "dns_timeout_ms": 3000
  }
}
```

环境变量兼容：

```text
GA_WEBFETCH_EGRESS=auto|direct|system-proxy|trusted-proxy|blocked
GA_WEBFETCH_PROXY=http://127.0.0.1:7897
GA_WEBFETCH_TRUST_PROXY_SSRF_POLICY=1
GA_WEBFETCH_REQUIRE_VERIFIED_EGRESS=1
```

`NO_PROXY` 只决定“是否走代理”，不能决定“是否允许访问”。即使命中了 localhost、loopback 或内网地址，WebFetch 仍要先执行自己的 URL/IP 拒绝规则。

---

## 8. GA 集成设计

### 8.0 传输层抽象与 GA 现有栈的边界

GA 目前同时存在 `requests` 与标准库网络调用。P0 不应让不同工具各自决定是否继承代理，而应提供一个统一传输层：

```text
genericagent/tools/web_fetch/transport.py
  - build_session(EgressConfig)
  - request_once(validated_url, limits, session)
  - verify_peer(socket, validated_ips)
  - follow_redirects(manually)
```

传输层必须满足：

1. **代理配置启动期冻结**：代理环境变量只在构造 `EgressConfig` 时读取；运行中不热切换，避免同一请求前后使用不同出口。
2. **默认信任标准代理变量**：按官方 CC 行为尊重 `https_proxy`、`HTTPS_PROXY`、`http_proxy`、`HTTP_PROXY` 和 `NO_PROXY`，并保持大小写优先级。
3. **不支持 SOCKS**：P0 与 CC 当前文档一致，只支持 HTTP/HTTPS 代理；检测到 SOCKS 时返回 `PROXY_UNTRUSTED`，不静默降级为直连。
4. **不把代理侧 DNS 结果冒充本地 DNS 结果**：使用代理/TUN 时，`dns_decisions` 必须记录 `resolution_side=proxy`，而不是伪造本地解析记录。
5. **直连模式才使用 DNS 固定与 peer 复核**：`direct` 模式的完整性要求最高；代理模式只保证 URL/重定向/大小/超时策略，安全声明按代理侧能力分级。
6. **TLS 校验默认开启**：代理不得触发 `verify=False`；企业 TLS 检查必须通过系统 CA/显式 CA 配置解决。

### 8.1 统一网络配置（必须最先实现）

GA 推荐使用 `requests.Session` 作为 P0 的单一 HTTP 传输实现，而不是混用 `requests.get`、`urllib`、`code_run` 自写 HTTP。原因：

- `requests` 已在 GA 核心依赖中；
- `Session.merge_environment_settings()` 能在 `trust_env=True` 时继承标准代理变量与 Windows 系统代理；
- 显式 `proxies={}` 配合 `trust_env=False` 可以强制 direct；
- `stream=True` 支持流式大小限制；
- `allow_redirects=False` 支持手动逐跳校验。

实现时必须显式决定 `trust_env`，不能依赖库默认值：

```python
def build_session(config: EgressConfig) -> requests.Session:
    session = requests.Session()
    if config.mode == "direct":
        session.trust_env = False
        session.proxies = {}
    elif config.mode in {"auto", "system-proxy", "trusted-proxy"}:
        session.trust_env = True
        if config.proxy_url:
            session.proxies = {"http": config.proxy_url, "https": config.proxy_url}
    else:
        raise FetchError("network egress is blocked", "EGRESS_UNAVAILABLE")
    return session
```

补充要求：

- `auto` 不自己解析 `NO_PROXY` 规则，交给 `requests`/`urllib.request.proxy_bypass` 的平台实现；
- `direct` 必须显式关闭 `trust_env`，否则 Windows 系统代理仍会被继承；
- `system-proxy` 允许 `requests` 继承系统代理，但仍执行 URL/Host/重定向/大小/超时策略；
- 不支持 SOCKS，检测到 `socks://` 配置直接报 `PROXY_UNTRUSTED`；
- 代理模式下不伪造本地 DNS 校验结果，审计记录 `resolution_side=proxy`。

新增 `genericagent/tools/web_fetch/egress.py`：

```python
@dataclass(frozen=True)
class EgressConfig:
    mode: str  # auto | direct | system-proxy | trusted-proxy | blocked
    proxy_url: str | None
    trust_proxy_ssrf_policy: bool
    require_verified_egress: bool

def build_egress_config(env=None, settings=None) -> EgressConfig:
    ...

def detect_egress(config: EgressConfig) -> EgressDiagnostics:
    ...
```

启动时只构造一次配置并注入 WebFetch 传输层；工具调用期间不重新读取代理环境变量。

### 8.2 Handler

传输层通过 `requests.Session` 的 `stream=True` 读取响应，禁止 `response.content` 一次性读入后再判断大小。伪代码：

```python
with session.get(url, stream=True, timeout=timeout, allow_redirects=False) as response:
    check_status_and_headers(response)
    body = bytearray()
    for chunk in response.iter_content(chunk_size=64 * 1024):
        if len(body) + len(chunk) > limits.max_encoded_bytes:
            raise FetchError("response body exceeds limit", "BODY_TOO_LARGE")
        body.extend(chunk)
```

代理模式下，`requests`/`urllib3` 的公开 API 不保证暴露“CONNECT 隧道后的目标 peer”；不得把代理连接本身的 peer 当作目标 peer，也不能把读取 `response.raw` 写成跨版本安全保证。实现约束：

- `direct` 模式：执行连接固定和 peer 复核；
- `system-proxy` / `trusted-proxy`：记录 `resolution_side=proxy` 和代理端点，不宣称本地已验证目标 IP；
- 如必须验证“代理实际连接到了什么”，应实现独立的受控 CONNECT 适配器或由代理侧审计提供，而不是依赖 `requests` 的内部属性。

在 `GenericAgentHandler` 增加：

```python
def do_web_fetch(self, args, response):
    from genericagent.tools.web_fetch.tool import run_web_fetch

    yield "[Action] Fetching URL...\n"
    result = run_web_fetch(
        url=args.get("url", ""),
        prompt=args.get("prompt", ""),
        offset=args.get("offset", 0),
        stop_signal=self.code_stop_signal,
        agent=self.parent,
    )
    return StepOutcome(result, next_prompt="\n")
```

要求：

- 不绕过 `dispatch()`；
- capability、permission、PathACL、PreToolUse、PostToolUse 全部继续生效；
- `PostToolUseFailure` 能拿到稳定错误码；
- 不在 handler 里拼接 shell 命令。

### 8.3 权限

在 `genericagent/core/permissions/policy.py` 的 `_STATIC_READ_TOOLS` 加入：

```python
"web_fetch"
```

在 `genericagent/workflow/permissions.py` 同步加入 `ALLOWED_READ_ONLY_STATIC_TOOLS`，保证 workflow 子 agent 只读场景可控。

权限边界固定为：

- `read_only`：允许 `web_fetch`；
- `ask`：允许 `web_fetch`，因为它是只读工具；如部署要求每个域名审批，应通过域名级规则实现，而不是把整个工具归为 mutating；
- `full_access`：允许 `web_fetch`；
- capability 未授予时仍由 capability 层拒绝；
- `PreToolUse` hook 只能进一步拒绝或收紧，不能放宽内建 URL/IP 策略。

建议新增域名级规则（P1）：

```text
WebFetch(domain:example.com) allow
WebFetch(domain:*.internal.example.com) deny
```

规则解析不能只做字符串 `startswith`，必须按 hostname 边界匹配。

### 8.4 Hooks

现有 `dispatch()` 顺序已满足要求：

```text
capability
  -> permission
  -> PermissionRequest
  -> PreToolUse
  -> PathACL
  -> tool
  -> PostToolUse / PostToolUseFailure
```

WebFetch 接入点：

- `PreToolUse`：只允许进一步收紧 URL/域名策略，不能放宽 DNS 拒绝；
- `PostToolUse`：追加“网页内容不可信”的上下文；
- `PostToolUseFailure`：记录错误码；
- `Stop`/`StopFailure`：不需要为 WebFetch 单独加事件，复用现有生命周期。

### 8.5 审计

新增 JSONL 审计：

```json
{
  "type": "web_fetch",
  "timestamp": "2026-10-21T12:00:00Z",
  "session_id": "...",
  "tool": "web_fetch",
  "url": "https://example.com/",
  "final_url": "https://example.com/",
  "redirects": [],
  "egress_mode": "system-proxy",
  "security_assurance": "proxy_side_unverified",
  "dns_decisions": [],
  "status": "success",
  "http_status": 200,
  "encoded_bytes": 334,
  "decoded_bytes": 577,
  "duration_ms": 123,
  "cache": "miss"
}
```

不记录：

- 网页全文；
- Cookie/Authorization；
- 完整 query string（含 token 时必须脱敏）；
- 用户提示词全文；
- 代理凭据。

### 8.6 缓存

缓存键至少包含：

```text
url
egress_mode
security_assurance
allow_http
max_decoded_bytes
extractor_version
policy_version
```

要求：

- 有界 LRU；
- TTL 默认 15 分钟；
- 失败短缓存默认 5 分钟；
- 读取缓存前重新执行当前策略；
- 策略升级后旧缓存不得绕过新 deny 规则；
- 取消/超时不写半成品缓存。

---

## 9. 分阶段实施

### Phase 0：契约与测试骨架

- 新增 `genericagent/tools/web_fetch/` 目录与模型；
- 增加工具 schema；
- 增加 `tests/test_web_fetch_policy.py`，先写失败测试；
- 不改变现有 `web_scan`。

验收：

```bash
python -m unittest tests.test_web_fetch_policy -v
```

预期：新测试失败，原因是工具尚未实现。

### Phase 1：安全策略与 DNS

实现：

- URL 校验；
- hostname/IDNA；
- IP 分类；
- 可注入 DNS resolver；
- 全量 A/AAAA 校验；
- mixed public/private 拒绝；
- IP literal 拒绝；
- DNS timeout。

验收：

```bash
python -m unittest tests.test_web_fetch_policy tests.test_web_fetch_dns -v
```

### Phase 2：安全传输

实现：

- direct 出口；
- 自定义 lookup；
- 连接固定；
- peer 复核；
- 手动重定向；
- 每跳复验；
- header/body/decoded/redirect/deadline 限制；
- 取消传播。

验收：

```bash
python -m unittest tests.test_web_fetch_transport tests.test_web_fetch_limits -v
```

### Phase 3：内容处理

实现：

- HTML->Markdown；
- content-type 分流；
- UTF-8/声明 charset；
- 二进制附件；
- offset 续读；
- 不可信内容包装。

验收：

```bash
python -m unittest tests.test_web_fetch_extract -v
```

### Phase 4：GA 集成

实现：

- `do_web_fetch`；
- schema；
- permission 分类；
- hooks；
- transcript/audit；
- cache；
- 子 agent 能力过滤。

验收：

```bash
python -m unittest tests.test_web_fetch_tool tests.test_web_fetch_permissions tests.test_hooks_tool_runtime -v
```

### Phase 5：透明出口与代理/TUN 适配

实现：

- 启动期 `build_egress_config()`；
- `detect_egress()` 诊断；
- system-proxy；
- TUN 透明出口；
- trusted-proxy；
- `security_assurance`；
- `require_verified_egress`；
- 诊断输出；
- 当前 Mihomo/fake-IP 场景 E2E。

验收：

```bash
python -m unittest tests.test_web_fetch_egress -v
```

### Phase 6：P1 模型提炼

实现：

- 独立 `querySource=web_fetch_apply`；
- 当前会话模型和凭据；
- 独立 token budget/timeout/rate limit；
- 失败退化为原始 Markdown；
- 结果标注“原文/摘要”。

验收：

```bash
python -m unittest tests.test_web_fetch_summarize -v
```

---

## 10. 测试矩阵

### 10.1 安全

| 场景 | 预期 |
| --- | --- |
| `http://` | `SCHEME_BLOCKED` |
| `file:`/`data:`/`ftp:` | `SCHEME_BLOCKED` |
| userinfo | `URL_USERINFO` |
| dotless host | `HOST_DOTLESS` |
| localhost | `HOST_BLOCKED` |
| DNS 公网 + 私网 | `ADDRESS_BLOCKED`，整个目标拒绝 |
| DNS rebinding | 连接期只使用已验证地址 |
| peer 地址被替换 | `PEER_BLOCKED` |
| 跨站 302 | `REDIRECT_CROSS_SITE` |
| 同站 302 | 跟随并复验 |
| 重定向到 metadata | 拒绝 |
| 压缩炸弹 | `DECODED_BODY_TOO_LARGE` |
| 慢响应 | `REQUEST_TIMEOUT` |
| 超大 header | `HEADER_TOO_LARGE` |
| 无限重定向 | `REDIRECT_LIMIT` |

### 10.2 功能

| 场景 | 预期 |
| --- | --- |
| HTML | Markdown |
| Markdown | 直接读取 |
| UTF-8 | 正确解码 |
| 无 charset | 明确默认策略 |
| PDF/图片 | 保存附件，不进入上下文 |
| 长文 | offset 续读 |
| 重复 URL | 缓存命中 |
| 401/403 | 明确提示认证工具 |
| 模型失败 | 返回原文或明确错误 |

### 10.3 代理/TUN

| 场景 | 预期 |
| --- | --- |
| 系统代理 + fake-IP | 自动识别，`system-proxy` 可访问 |
| `require_verified_egress=1` | fail-closed，提示配置可信代理 |
| 代理不可达 | `EGRESS_UNAVAILABLE` |
| 代理 URL 非法 | `PROXY_UNTRUSTED` |
| 代理侧解析 | 标记 `security_assurance=proxy_side_unverified` |
| 显式 trusted-proxy | 标记 `security_assurance=proxy_side_trusted` |

---

## 11. 验收标准

### P0 DoD

- 启动期冻结 `EgressConfig`，运行中不重新读取代理环境变量；
- `auto` 模式能继承标准代理环境变量并适配当前系统代理/TUN；
- `direct` 模式显式 `trust_env=False`，不会被系统代理意外接管；
- `NO_PROXY` 不会绕过 WebFetch 自身的 URL/IP 拒绝规则；
- `web_fetch` 出现在中英文 schema；
- 普通公网 HTTPS 抓取成功；
- 默认拒绝 HTTP、私网、回环、链路本地、CGNAT、metadata；
- DNS 混合结果整体拒绝；
- 连接期只解析一次并绑定；
- peer 复核生效；
- 每跳重定向复验；
- 压缩前/后大小限制生效；
- 超时、取消、重定向限制生效；
- 系统代理/TUN 环境可访问普通公网 URL；
- 代理模式明确标记安全边界；
- 审计事件可落盘；
- 不记录网页全文和敏感 header；
- 现有 GA 测试不回归。

### P1 DoD

- 模型提炼复用当前会话；
- 独立超时和 token budget；
- 模型失败退化到原文；
- 结果明确标注摘要/原文；
- 不把网页指令当系统指令执行。

---

## 12. 实施顺序与提交建议

建议每次提交只完成一个可验收切片：

```text
feat(web-fetch): add URL and IP policy
feat(web-fetch): add DNS resolver and rebinding-safe lookup
feat(web-fetch): add direct transport with peer verification
feat(web-fetch): add redirect and response limits
feat(web-fetch): add HTML extraction and binary attachments
feat(web-fetch): integrate GA handler, schema and permissions
feat(web-fetch): add egress detection and trusted proxy mode
feat(web-fetch): add optional model summarization
```

不要在一次提交里同时改：

- 网络传输；
- 权限模型；
- UI；
- 模型调用；
- 缓存。

否则一旦出现回归，很难判断是哪一层导致的。

---

## 12A. 明确不在方案中做的事

为避免后续实施跑偏，以下事项明确不属于本方案：

- 不让模型在 `web_fetch(url=...)` 参数里选择 `direct`/`proxy`；
- 不把系统代理探测结果直接转换成“允许访问内网”的授权；
- 不用伪造 DNS 结果或 `peer` 校验来掩盖代理/TUN 场景；
- 不支持 SOCKS，除非后续新增独立的代理适配和安全验收；
- 不把 `web_fetch` 设计成绕过 GA 权限、hooks、PathACL 或审计的旁路；
- 不在 P0 阶段把网页内容自动注入系统提示词或工具策略；
- 不承诺“任何网络配置下都能访问私网/登录页面”；
- 不把 CC 的 `domain_info` 端点当作 GA 的可用安全服务依赖。

## 13. 源码事实与推测边界

### 已验证事实

- CC WebFetch 使用全局 Axios：`m0459:111818-111836`；
- 全局 Axios 导出：`m0116:4775-4792`；
- 启动时统一配置网络：`m0710:460`、`m0117:2470-2495`；
- 代理来自 `HTTPS_PROXY/HTTP_PROXY` 等环境变量：`m0117:2146-2199`；
- 官方文档确认标准代理环境变量、启动期读取、WebFetch domain safety check 走代理：`https://code.claude.com/docs/en/network-config`；
- 官方文档同时说明：代理变量在启动时读取，运行中不热更新；标准代理变量大小写优先级为 `https_proxy`、`HTTPS_PROXY`、`http_proxy`、`HTTP_PROXY`；当前版本不支持 SOCKS 代理。以上均为官方页面核对结果，不是从压缩源码推测；
- 代理不可用时存在错误处理；
- CC 本地 WebFetch 缺少完整 URL scheme allowlist、逐跳 DNS/IP 复验和连接固定：`m0459:111729-111869`；
- sandbox 不覆盖 WebFetch：`m0062:5515`。

### 本机实测事实（2026-10-21）

- 系统代理开启：`127.0.0.1:7897`；
- Mihomo TUN 默认路由存在；
- DNS 返回 `example.com -> 198.18.0.28`；
- `https://example.com/` 通过当前 TUN 返回 HTTP 200；
- 现有安全直连探针拒绝 `198.18.0.28`，分类为 `benchmarking`；
- 这是安全策略与 fake-IP 网络环境的真实冲突，不是探针误报。

### 不能直接断言的

- 不能断言 CC 在所有平台、所有代理类型下都能自动读取系统代理；
- 不能断言 CC 的代理路径具备完整 SSRF 防护；
- 不能断言 GA 只要继承系统代理就能获得同等安全性；
- 不能断言所有 VPN 都会使用 `198.18.0.0/15` fake-IP；
- 不能断言 `domain_info` 是 GA 可用的安全 API。

---

## 14. 最终建议

1. **先做进程级透明网络配置 + P0 安全抓取器**，不要一开始就做模型提炼。
2. **默认 auto 出口**：启动期继承标准代理环境变量，并适配系统代理/TUN；安全声明必须精确。
3. **显式 trusted-proxy 是生产环境的高安全选项**，不是自动探测后的默认授权。
4. **保留 direct 模式的完整 SSRF/DNS rebinding 防护**，适用于能取得真实公网 IP 的普通网络。
5. **不要把“能用”与“安全”混为一谈**：代理透明可用解决的是网络可达性，SSRF 防护解决的是信任边界，两者必须分别验收。

一句话：

> GA 应该像 CC 一样让 WebFetch 继承本机网络出口，但要比 CC 更明确地区分“已验证安全直连”和“代理侧未验证/可信代理”，并把这套判定写进返回值、审计和测试。

---

## 15. 可执行任务清单（实施时从这里开始）

> 以下任务按依赖顺序排列。每个任务都应独立提交、独立回归；除非任务明确要求，不要跨任务顺手重构。

### Task 1：建立 WebFetch 包与稳定错误模型

**Files:**

- Create: `genericagent/tools/__init__.py`
- Create: `genericagent/tools/web_fetch/__init__.py`
- Create: `genericagent/tools/web_fetch/models.py`
- Test: `tests/test_web_fetch_models.py`

- [ ] **Step 1: 写失败测试**

```python
import unittest

from genericagent.tools.web_fetch.models import FetchError, WebFetchRequest


class WebFetchModelsTest(unittest.TestCase):
    def test_request_requires_https_url(self):
        request = WebFetchRequest(url="https://example.com/", prompt="", offset=0)
        self.assertEqual(request.url, "https://example.com/")

    def test_error_has_stable_code_and_details(self):
        error = FetchError("blocked", "ADDRESS_BLOCKED", {"address": "10.0.0.1"})
        self.assertEqual(error.code, "ADDRESS_BLOCKED")
        self.assertEqual(error.details["address"], "10.0.0.1")
        self.assertEqual(str(error), "blocked")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_models -v
```

Expected: FAIL，模块或符号不存在。

- [ ] **Step 3: 实现最小模型**

```python
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any


class FetchError(Exception):
    def __init__(self, message: str, code: str, details: dict[str, Any] | None = None):
        super().__init__(message)
        self.code = code
        self.details = details or {}


@dataclass(frozen=True)
class WebFetchRequest:
    url: str
    prompt: str = ""
    offset: int = 0


@dataclass
class EgressDiagnostics:
    proxy_detected: bool = False
    proxy_endpoint: str | None = None
    proxy_type: str | None = None
    tun_detected: bool = False
    fake_ip_dns_detected: bool = False
    recommended_egress: str = "direct"


@dataclass
class WebFetchResult:
    status: str
    url: str
    final_url: str
    result: str
    headers: dict[str, str] = field(default_factory=dict)
    redirects: list[dict[str, Any]] = field(default_factory=list)
    encoded_bytes: int = 0
    decoded_bytes: int = 0
    duration_ms: int = 0
    egress: dict[str, Any] = field(default_factory=dict)
    warnings: list[str] = field(default_factory=list)
```

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_models -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools tests/test_web_fetch_models.py
git commit -m "feat(web-fetch): add request and error models"
```

### Task 2：URL、Host、Port 与地址分类策略

**Files:**

- Create: `genericagent/tools/web_fetch/policy.py`
- Test: `tests/test_web_fetch_policy.py`

- [ ] **Step 1: 写失败测试**

```python
import unittest

from genericagent.tools.web_fetch.models import FetchError
from genericagent.tools.web_fetch.policy import classify_ip, validate_url


class UrlPolicyTest(unittest.TestCase):
    def test_rejects_http(self):
        with self.assertRaises(FetchError) as ctx:
            validate_url("http://example.com/")
        self.assertEqual(ctx.exception.code, "SCHEME_BLOCKED")

    def test_rejects_userinfo(self):
        with self.assertRaises(FetchError) as ctx:
            validate_url("https://user:pass@example.com/")
        self.assertEqual(ctx.exception.code, "URL_USERINFO")

    def test_rejects_ip_literal(self):
        with self.assertRaises(FetchError) as ctx:
            validate_url("https://127.0.0.1/")
        self.assertEqual(ctx.exception.code, "HOST_BLOCKED")

    def test_rejects_private_mixed_ipv4(self):
        self.assertEqual(classify_ip("10.0.0.1"), "private")
        self.assertEqual(classify_ip("100.64.0.1"), "cgnat")
        self.assertEqual(classify_ip("169.254.169.254"), "cloud_metadata")
        self.assertEqual(classify_ip("198.18.0.28"), "benchmarking")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_policy -v
```

Expected: FAIL，`policy` 不存在。

- [ ] **Step 3: 实现 URL/地址策略**

必须实现：

- scheme 仅 `https:`；
- 端口仅 443；
- 禁止 userinfo、控制字符、dotless host、IP literal；
- 禁止 localhost、`*.localhost`、metadata host；
- IPv4/IPv6 全分类；
- IPv4-mapped IPv6、NAT64、6to4 嵌入地址还原；
- 返回规范化 URL。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_policy -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/policy.py tests/test_web_fetch_policy.py
git commit -m "feat(web-fetch): enforce URL and address policy"
```

### Task 3：可注入 DNS 与 rebinding-safe 解析

**Files:**

- Create: `genericagent/tools/web_fetch/dns.py`
- Test: `tests/test_web_fetch_dns.py`

- [ ] **Step 1: 写失败测试**

```python
import unittest

from genericagent.tools.web_fetch.dns import resolve_and_validate
from genericagent.tools.web_fetch.models import FetchError


def resolver_with(*addresses):
    def resolve(host, timeout_ms):
        return list(addresses)
    return resolve


class DnsPolicyTest(unittest.TestCase):
    def test_mixed_public_and_private_is_rejected(self):
        with self.assertRaises(FetchError) as ctx:
            resolve_and_validate(
                "example.com",
                resolver=resolver_with("93.184.216.34", "10.0.0.1"),
                timeout_ms=1000,
            )
        self.assertEqual(ctx.exception.code, "ADDRESS_BLOCKED")

    def test_empty_answer_is_rejected(self):
        with self.assertRaises(FetchError) as ctx:
            resolve_and_validate("example.com", resolver=resolver_with(), timeout_ms=1000)
        self.assertEqual(ctx.exception.code, "DNS_EMPTY")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_dns -v
```

Expected: FAIL。

- [ ] **Step 3: 实现 resolver 接口与超时**

接口固定为：

```python
def resolve_and_validate(host: str, *, resolver, timeout_ms: int) -> list[str]:
    ...
```

要求：全量结果参与分类；任一非公网地址拒绝；超时映射 `DNS_TIMEOUT`；空结果映射 `DNS_EMPTY`。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_dns -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/dns.py tests/test_web_fetch_dns.py
git commit -m "feat(web-fetch): add rebinding-safe DNS validation"
```

### Task 4：启动期 EgressConfig 与代理继承

**Files:**

- Create: `genericagent/tools/web_fetch/egress.py`
- Test: `tests/test_web_fetch_egress.py`

- [ ] **Step 1: 写失败测试**

```python
import os
import unittest

from genericagent.tools.web_fetch.egress import build_egress_config


class EgressConfigTest(unittest.TestCase):
    def test_prefers_lowercase_https_proxy(self):
        env = {
            "https_proxy": "http://127.0.0.1:7897",
            "HTTPS_PROXY": "http://127.0.0.1:9999",
        }
        config = build_egress_config(env=env)
        self.assertEqual(config.proxy_url, "http://127.0.0.1:7897")

    def test_direct_mode_disables_environment_proxy(self):
        config = build_egress_config(env={"HTTPS_PROXY": "http://127.0.0.1:7897"}, mode="direct")
        self.assertEqual(config.mode, "direct")
        self.assertIsNone(config.proxy_url)

    def test_socks_is_rejected(self):
        with self.assertRaises(Exception):
            build_egress_config(env={"HTTPS_PROXY": "socks5://127.0.0.1:7897"})
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_egress -v
```

Expected: FAIL。

- [ ] **Step 3: 实现 EgressConfig**

要求：

- 启动时读取一次；
- 优先级 `https_proxy`、`HTTPS_PROXY`、`http_proxy`、`HTTP_PROXY`；
- 仅支持 HTTP/HTTPS 代理；
- `direct` 模式忽略所有代理变量；
- `auto` 保留代理配置但不立即宣称可信；
- 不在此任务实现 TUN 探测。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_egress -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/egress.py tests/test_web_fetch_egress.py
git commit -m "feat(web-fetch): freeze egress configuration at startup"
```

### Task 5：安全传输与逐跳重定向

**Files:**

- Create: `genericagent/tools/web_fetch/transport.py`
- Create: `genericagent/tools/web_fetch/limits.py`
- Test: `tests/test_web_fetch_transport.py`
- Test: `tests/test_web_fetch_limits.py`

- [ ] **Step 1: 写失败测试**

必须覆盖：

- direct 模式 `trust_env=False`；
- system-proxy 模式继承代理；
- 同站重定向跟随；
- 跨站重定向返回 `REDIRECT_CROSS_SITE`；
- 每跳重新执行 URL policy；
- 代理模式不把代理 peer 当作目标 peer；
- `stream=True` 读取并在超限时中止。

测试样例：

```python
def test_cross_site_redirect_is_not_followed(self):
    response = transport.follow_once(
        "https://example.com/",
        redirect_location="https://other.example.net/",
        egress=direct_config(),
    )
    self.assertEqual(response["status"], "redirect")
    self.assertEqual(response["code"], "REDIRECT_CROSS_SITE")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_transport tests.test_web_fetch_limits -v
```

Expected: FAIL。

- [ ] **Step 3: 实现传输层**

要求：

- `requests.Session` 统一出口；
- `stream=True`；
- `allow_redirects=False`；
- `timeout=(connect, read)`；
- 最大 header/body/decode/redirect/deadline；
- direct 模式 peer 复核；
- proxy/TUN 模式记录 `resolution_side=proxy`，不依赖 `requests` 内部 socket 属性做目标 peer 断言；
- 取消信号能销毁 response 和 session。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_transport tests.test_web_fetch_limits -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/transport.py genericagent/tools/web_fetch/limits.py tests/test_web_fetch_transport.py tests/test_web_fetch_limits.py
git commit -m "feat(web-fetch): add bounded transport and redirect validation"
```

### Task 6：内容提取与二进制附件

**Files:**

- Create: `genericagent/tools/web_fetch/extract.py`
- Test: `tests/test_web_fetch_extract.py`

- [ ] **Step 1: 写失败测试**

```python
import unittest

from genericagent.tools.web_fetch.extract import extract_content


class ExtractTest(unittest.TestCase):
    def test_html_is_converted_to_markdown(self):
        result = extract_content(b"<html><body><h1>Hello</h1><script>x()</script></body></html>", "text/html")
        self.assertIn("# Hello", result.text)
        self.assertNotIn("x()", result.text)

    def test_binary_is_not_loaded_into_text(self):
        result = extract_content(b"%PDF-1.7", "application/pdf")
        self.assertTrue(result.binary_path)
        self.assertEqual(result.text, "")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_extract -v
```

Expected: FAIL。

- [ ] **Step 3: 实现提取**

要求：

- HTML 移除 script/style/noscript/iframe；
- 使用 GA 已安装的 `beautifulsoup4`；Markdown 转换若新增依赖，必须写入 `pyproject.toml`，不要隐式 import；
- UTF-8 与声明 charset；
- 二进制保存到 `paths.TEMP_DIR / "web_fetch"`；
- 正文加上不可信内容边界。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_extract -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/extract.py tests/test_web_fetch_extract.py pyproject.toml
git commit -m "feat(web-fetch): extract markdown and isolate binary content"
```

### Task 7：接入 GA Handler、Schema 与权限

**Files:**

- Modify: `genericagent/core/handler.py`
- Modify: `genericagent/core/permissions/policy.py`
- Modify: `genericagent/workflow/permissions.py`
- Modify: `assets/tools_schema.json`
- Modify: `assets/tools_schema_cn.json`
- Test: `tests/test_web_fetch_tool.py`
- Test: `tests/test_web_fetch_permissions.py`

- [ ] **Step 1: 写失败测试**

```python
from genericagent.core.permissions.policy import classify_tool

def test_web_fetch_is_read_only():
    assert classify_tool("web_fetch")[0] == "read"
```

Handler 测试要确认：

- `do_web_fetch` 存在；
- capability deny 时不发网络请求；
- permission deny 时不发网络请求；
- PreToolUse deny 时不发网络请求；
- 成功返回 `StepOutcome`；
- 失败返回稳定错误码。

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_tool tests.test_web_fetch_permissions -v
```

Expected: FAIL。

- [ ] **Step 3: 实现接入**

- 增加 `do_web_fetch`；
- schema 增加 `url`、`prompt`、`offset`；
- 只读分类加入 `web_fetch`；
- 不修改 `web_scan` 行为；
- 不绕过 `dispatch()`。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_tool tests.test_web_fetch_permissions -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/core/handler.py genericagent/core/permissions/policy.py genericagent/workflow/permissions.py assets/tools_schema.json assets/tools_schema_cn.json tests/test_web_fetch_tool.py tests/test_web_fetch_permissions.py
git commit -m "feat(web-fetch): integrate tool, schema and permissions"
```

### Task 8：审计、缓存与取消语义

**Files:**

- Create: `genericagent/tools/web_fetch/audit.py`
- Create: `genericagent/tools/web_fetch/cache.py`
- Test: `tests/test_web_fetch_audit.py`
- Test: `tests/test_web_fetch_cache.py`

- [ ] **Step 1: 写失败测试**

必须验证：

- 审计不包含网页全文；
- query 中的 token 被脱敏；
- 缓存 key 包含 `egress_mode` 和 `security_assurance`；
- 取消/超时不写缓存；
- 策略升级后旧缓存不复用。

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_audit tests.test_web_fetch_cache -v
```

Expected: FAIL。

- [ ] **Step 3: 实现**

- 审计 JSONL 落盘；
- 敏感字段脱敏；
- 有界 LRU + TTL；
- 失败短缓存；
- 半成品不写缓存。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_audit tests.test_web_fetch_cache -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/audit.py genericagent/tools/web_fetch/cache.py tests/test_web_fetch_audit.py tests/test_web_fetch_cache.py
git commit -m "feat(web-fetch): add audit and bounded cache"
```

### Task 9：TUN/fake-IP 诊断与真实网络 E2E

**Files:**

- Modify: `genericagent/tools/web_fetch/egress.py`
- Test: `tests/test_web_fetch_tun_diagnostics.py`
- Test: `tests/test_web_fetch_live_egress.py`

- [ ] **Step 1: 写失败测试**

```python
def test_198_18_is_reported_as_fake_ip_dns():
    diagnostics = classify_dns_answer(["198.18.0.28"])
    assert diagnostics["fake_ip_dns_detected"] is True
```

真实网络测试默认 skip，只有设置环境变量才运行：

```python
@unittest.skipUnless(os.environ.get("GA_RUN_NETWORK_E2E") == "1", "network E2E disabled")
def test_public_url_via_current_egress(self):
    result = run_web_fetch("https://example.com/")
    self.assertEqual(result["status"], "success")
```

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_tun_diagnostics -v
```

Expected: FAIL。

- [ ] **Step 3: 实现诊断**

只读检测系统代理环境变量、Windows Internet Settings、TUN 默认路由、fake-IP DNS 与常见代理监听端口；不自动授权代理。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_tun_diagnostics -v
GA_RUN_NETWORK_E2E=1 python -m unittest tests.test_web_fetch_live_egress -v
```

Expected: 离线测试 PASS；当前机器网络 E2E PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/egress.py tests/test_web_fetch_tun_diagnostics.py tests/test_web_fetch_live_egress.py
git commit -m "feat(web-fetch): diagnose TUN and fake-IP egress"
```

### Task 10：P1 模型提炼

**Files:**

- Modify: `genericagent/tools/web_fetch/tool.py`
- Test: `tests/test_web_fetch_summarize.py`

- [ ] **Step 1: 写失败测试**

必须验证：

- 模型调用使用当前会话；
- 结果中的 `result`、`warnings`、`encoded_bytes`、`decoded_bytes`、`egress` 字段结构不得变化；
- 模型失败返回原文；
- 模型失败时 `warnings` 包含稳定的 `SUMMARIZE_FAILED` 文本；
- 结果中增加 `summarized: true|false`，但仍不得删除上述 P0 字段；
- token budget 超限被截断；
- 摘要结果与原文有明确标记；
- 摘要失败不改变 `status`，只把 `summarized` 设为 `false` 并给出 warning。

- [ ] **Step 2: 运行并确认失败**

```bash
python -m unittest tests.test_web_fetch_summarize -v
```

Expected: FAIL。

- [ ] **Step 3: 实现最小提炼**

- 不继承 tools/MCP；
- 空 system prompt 或显式安全包装；
- 独立 timeout/token budget；
- 失败退化原文。

- [ ] **Step 4: 通过测试**

```bash
python -m unittest tests.test_web_fetch_summarize -v
```

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add genericagent/tools/web_fetch/tool.py tests/test_web_fetch_summarize.py
git commit -m "feat(web-fetch): add optional model extraction"
```

### Task 11：全量验收

- [ ] **Step 1: 运行完整测试**

```bash
python -m unittest discover -s tests
```

Expected: PASS，无新增失败。

- [ ] **Step 2: 运行静态检查**

```bash
python -m compileall -q genericagent
git diff --check
```

Expected: exit 0。

- [ ] **Step 3: 运行当前机器网络 E2E**

```bash
GA_RUN_NETWORK_E2E=1 python -m unittest tests.test_web_fetch_live_egress -v
```

Expected: `https://example.com/` 在当前代理/TUN 环境下成功；结果带 `egress.mode` 与 `security_assurance`。

- [ ] **Step 4: 人工核对审计**

确认审计事件包含：

- URL；
- 最终 URL；
- 重定向链；
- egress mode；
- security assurance；
- 状态码；
- 字节数；
- 耗时；
- 缓存命中状态。

确认审计事件不包含网页全文、Cookie、Authorization、代理凭据。

- [ ] **Step 5: 记录实施结果**

在 GA 仓库新增：

```text
docs/20261021-GA-WebFetch实施记录.md
```

记录测试命令、结果、当前代理/TUN 环境、剩余风险。
