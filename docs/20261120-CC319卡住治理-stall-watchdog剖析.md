# CC319 如何治理「卡住」：stall watchdog 完整剖析

日期：2026-11-20
源码：`reconstructed319/deminified/m0779_0x12409ec4.js`（主体）+ `m0349` + `m0170`
可复算：`docs/probes/20261120-CC319卡住治理机制核验.py`（13 项断言）

## 0. 一句话结论

**CC 没有「整轮总时长超时」这种机制。** 它用的是**子代理级 stall watchdog**：

> 把一次**计时器**挂在「最后一次有进展」上；
> 超时触发时先看**有没有工具在飞**（有就延迟重排）；
> 再不行就 abort，并留下 `exitPath=watchdog_stall` 与 `lastChunkAgeMs`。

三处设计细节是 Hlaudz 第一版没对齐的（详见 §5）。

---

## 1. 阈值：自适应，不是常量

`m0779:7854-7860`：

```js
var Ep = 300000,        // 5 分钟：在流空闲基线之上的「额外容忍」
    Cp = 2147483647,    // 2^31-1：定时器上限
    xp = 600000;        // 10 分钟：关闭 stream watchdog 时的兜底

function qqo() {
  if (i.CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS) return i.CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS;
  if (!(i.CLAUDE_ENABLE_STREAM_WATCHDOG ?? !0)) return xp;
  return Math.min(gLn() + Ep, Cp);
}
```

`m0349:14688`：

```js
function gLn() {
  return Math.max(wg() ?? 0, 300000);       // 下限 5 分钟
}
```

所以默认阈值 = **`max(配置的流空闲超时, 5min) + 5min`**，默认 10 分钟。
`CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS` 可整体覆盖；
`CLAUDE_ENABLE_STREAM_WATCHDOG=0` 时退化成固定 10 分钟。

**关键点：阈值是「闲置容忍」的语义，不是「总时长」。** 慢但一直在产出的任务
永远不触发 —— 因为计时器每帧重置（见 §2）。

## 2. ★ 计时器：重置而非轮询

`m0779:8029-8037`：

```js
jt = 0,
dn = Math.min(stall_ms * 0.1, 1000),      // 节流窗口：阈值的 10%，上限 1 秒
un = () => {                               // ← 「有进展」回调
  let ge = Date.now();
  if (nt = ge, ge - jt < dn) return;       // 节流：1 秒内多次事件只重置一次
  jt = ge, last_message_type = b("query_progress"), Gt();   // Gt() = 重排定时器
};
...
Gt();                                      // 开始计时
for await (let Te of makeStream(St, un, Fn)) { ... }
```

`un` 是 `makeStream` 的**进展回调** —— 流里每有事件就调它。于是：

- 每来一个事件 → `nt`（last progress 时刻）更新，**定时器被 clear + 重排**
- `dn` 节流让「一秒内几百个 token 事件」只重排一次（省定时器开销）

**这是与本项目第一版最大的结构差异**：CC 用「事件驱动的定时器重排」，
第一版用「协程轮询 `idle_seconds()`」。功能等价，但定时器方案：
- 精度高（到点即触发，不用等下一次轮询）
- 开销低（无进展时完全没有唤醒）

`m0170:8-24` 是那个定时器的实现（`lan`）：它自己处理了「定时器提前醒来时
重新计算剩余时间」：

```js
function k(e) {
  e.cancel = void 0;
  let r = e.expiresAt - e.clock.monotonicNow();
  if (!(r > 1000)) { e.onExpire(); return; }   // 剩余 ≤1s 才算真到期
  l(e, r);                                      // 否则重排
}
```

## 3. ★ 有工具在飞时：延迟，不是放弃

`m0779:7986-7999`：

```js
Gt = () => {
  Ft(),                                  // 清掉旧定时器
  ee = lan(() => {                       // 排一个新的
    if (ee = null, He) return;           // 已经触发过 → 幂等退出
    if (ke()) { Y?.(); return; }         // 已被别的路径接管 → 退出
    if (Fe.size > 0) {                   // ★ Fe = 正在执行中的工具集
      t(`[AsyncAgent ${e}] stall watchdog deferred — ${Fe.size} tool(s) in flight (toolUseIds=${[...Fe].join(",")})`),
      Gt();                              // ★ 重新排一次，继续等
      return;
    }
    if (hF() && Nt()) { Y?.(); return; } // parked 路径
    He = !0;
    t(`[AsyncAgent ${e}] stall watchdog fired after ${stall_ms}ms with no progress (last message: ${last_message_type}); aborting`,
      { level: "error" });
    ...
    abortController_7.abort(), ..., gt("watchdog_stall");
  }, stall_ms, toolUseContext_5.session.host.clock);
}
```

`Fe` 的维护（`m0779:8111-8119`）：

```js
// assistant 消息里出现 tool_use → 加入
for (let Ye of Te.message.content) if (Ye.type === "tool_use") {
  if (wt = Ye.id, Fe.add(Ye.id), vp.has(Ye.name)) Ae.add(Ye.id);
  lt = !0;
}
// user 消息里出现 tool_result → 移除
else if (Te.type === "user") {
  ... if (Wt?.type === "tool_result") ve = Wt.tool_use_id, lt = Fe.delete(Wt.tool_use_id) || lt
}
```

**为什么这条至关重要**：一次 `code_run` 可以跑很久，期间**零输出帧**。
若只看「零帧太久」，这种合法执行会被砍掉 —— 而它正是干活的主力形态。

注意 `deferred` 分支是 `Gt()` **重新排一轮定时器**（不是取消 watchdog），
所以工具返回后如果仍然没进展，下一个周期照样会触发。

## 4. 触发后的收口：可诊断，不是静默

`m0779:8001-8012`：

```js
He = !0, t(`[AsyncAgent ${e}] stall watchdog fired after ${stall_ms}ms ...`, { level: "error" }),
l("tengu_async_agent_stall_timeout", {        // ← 遥测
  agent_type: Re, stall_ms, last_message_type, message_count: agentMessages_3.length
}),
abortController_7.abort(), ..., gt("watchdog_stall");   // ← 结构化 exitPath

let ge = `Agent stalled: no progress for ${stall_ms / 1000}s (stream watchdog did not recover)`;
if (m("subagent_complete", "subagent_stall_timeout"), metadata.spawnedSubagent?.failed(), ...
```

统一的结构化收口日志（`m0779:7943`）：

```js
Tt = [`agentId=${e}`, `agentType=...`, `exitPath=${ge}`, `durationMs=${Ve - turnStartTime}`,
      `turns=${xe}`, `finalStopReason=${Be}`, `lastChunkAgeMs=${Ve - nt}`,
      `lastToolUseId=${wt ?? "none"}`, `lastToolResultSeen=${ve ?? "none"}`];
```

`exitPath` 的取值集合（从源码可见）：`completed` / `error` / `parked` /
`watchdog_stall`（还有 `stall watchdog deferred` 这条中间日志）。

**`lastChunkAgeMs` 是判「卡住」的直接证据**：它把「最后一次有进展距今多久」
写进最终日志，事后不需要猜。

## 5. Hlaudz 第一版与 CC 的差距

| # | CC 的做法 | Hlaudz 第一版 | 差距性质 |
| --- | --- | --- | --- |
| 1 | 定时器**事件驱动重排**（`un` 回调 + `lan`） | 协程**轮询** `idle_seconds()` | 功能等价，精度/开销略差 —— **可接受** |
| 2 | 有 tool in flight → **deferred**（重排一轮） | **无此保护** | **必须补**：长 `code_run` 会被误杀 |
| 3 | `exitPath=watchdog_stall` + `lastChunkAgeMs` + `lastToolUseId` 结构化收口 | 只有一个 `watchdog_reason` 字符串 | **必须补**：否则事后无法与用户停止区分 |
| 4 | 阈值自适应 `max(流空闲,5min)+5min` | 固定 1800s | 可接受（Hlaudz 无 stream watchdog 概念） |
| 5 | 每次触发都打遥测 `tengu_async_agent_stall_timeout` | 无 | 可选 |
| 6 | 覆盖范围：**子代理** | 第一版做在 **turn job**（整轮） | **需要重新定位**：见 §6 |

## 6. ★ 最重要的差距：作用域选错了

CC 的 stall watchdog 挂在**子代理**上（`xle` 是 "run a subagent" 的函数）。
它监视的是「这个子代理多久没产出」。

而 Hlaudz 真机事故（`co_f49ca93ebc14`）卡的是**主轮**的前奏
（`_event_stream` 在 `add_msg` 之后、第一次 LLM 调用之前）。

两者不是同一个层级：

| 层 | CC 有超时吗 | Hlaudz 现状 |
| --- | --- | --- |
| 子代理 stall | ✅ 本 watchdog | 有 `subagent_timeout`（轮次级） |
| 主轮前奏 | ❓ 未在本次调研范围内确认 | **无任何超时** ← 事故点 |
| LLM 流空闲 | ✅ `CLAUDE_STREAM_IDLE_TIMEOUT_MS` / `CLAUDE_ENABLE_STREAM_WATCHDOG` | 未确认 |
| 单次工具执行 | ✅ `BASH_*_TIMEOUT_MS` / `MCP_TOOL_TIMEOUT` | ✅ `code_run` 有 `MAX_TIMEOUT_S` |

所以正确做法**不是**把 CC 的子代理 watchdog 照搬到 turn job 上，
而是：

1. **turn job 级**：补一个「整轮零进展」保护（事故点在这里，CC 对应的是
   stream watchdog 那一层，需要再确认）
2. **子代理级**：对齐 CC 的 stall watchdog 语义（含 deferred + 结构化收口）

## 7. ★ 补充：主循环那一层（`m0591`）—— 这才是 Hlaudz 事故的对应层

上面 §1–§6 是**子代理级**。真机事故卡的是**主轮**，所以还要看主循环。

### 7.1 `CLAUDE_ENABLE_STREAM_WATCHDOG`：在模型流的循环里

`m0591:131567-131583`：

```js
xO = i.CLAUDE_ENABLE_STREAM_WATCHDOG ?? !0,     // 默认开
iE = gLn(),                                     // 阈值 = max(流空闲配置, 5min)
_B = iE / 2,                                    // ★ 半程 = 警告线

Bw = function() {
  ...
  if (wB(), hx(), !xO) return;                  // 关闭则完全不做
  let Pu = ve.monotonicNow(), nu = ve.now();
  SB = Pu, Cfe = nu;
  let k_ = _B;                                  // 警告阈值
  WN = ve.setTimeout(() => {                    // ① 半程警告
    if (ve.monotonicNow() - Pu < k_) return;
    t(`Streaming idle warning: no chunks received for ${k_/1000}s`, { level: "warn" }),
    V("warn", "cli_streaming_idle_warning")
  }, _B);
  DO = ve.setTimeout(() => {                    // ② 全程中止
    if (Hw = mBi(ve, { armedAt: Pu, wallArmedAt: nu, idleMs: iE }), Hw !== void 0) {
      Pw();                                     // 有 rearm 条件 → 不中止
      return
    }
    jy = !0, mx = ve.monotonicNow(),
    t(`Streaming idle timeout: no chunks received for ${iE/1000}s, aborting stream`, { level: "error" }),
    V("error", "cli_streaming_idle_timeout", { rearm_slack_ms: px }),
    l("tengu_streaming_idle_timeout", { model: ..., timeout_ms: iE, tier: b("event") }),
    Pw()                                        // abort
  }, iE)
};
```

**三个设计要点**：

1. **双层**：`iE/2` 先打警告（用户能看到"正在等"），`iE` 才中止。
   不是"到点才告诉你"。
2. **`mBi(...)` 返回非 undefined 时不中止** —— 这是「重新武装」（rearm）钩子，
   与子代理 watchdog 的 `deferred` 是同一种思路：**某些状态下不该判死**。
3. 遥测 `tengu_streaming_idle_timeout` 带 `timeout_ms` 与 `rearm_slack_ms`。

### 7.2 重置点：每来一个流事件就重排

`m0591:131648-131650`：

```js
let rw = function(va) {
  k_ = 0, Bw(),                     // ★ 收到事件 → 清定时器并重排
  gB += 1 + km.count, ...
  let lp = ve.now();
  if (rE !== null) {
    let Wy = lp - rE;
    if (Wy > nu) sE++, yR += Wy,
      t(`Streaming stall detected: ${(Wy/1000).toFixed(1)}s gap between events (stall #${sE})`, { level: "warn" }),
      l("tengu_streaming_stall", { stall_duration_ms: Wy, stall_count: sE, total_stall_time_ms: yR, ... })
    ...
```

还有一条**独立的 stall 观测**：`Streaming stall detected` —— 它不打不杀，
只记录「事件之间的间隙」，用于事后分析抖动。与 watchdog 分开。

`m0591:131691`：

```js
if (k_++, k_ <= SNr) Bw();
else if (!xO || jy || Hw !== void 0) continue;
```

心跳类事件（`HEe(va)` 判定的）**也会重置计时**，但只在前 `SNr` 次；
超过之后不再靠纯心跳保活 —— 防止「一直发心跳但内容死了」蒙混过关。

### 7.3 与子代理级的分工

| 层 | 机制 | 阈值 | 有 rearm/deferred |
| --- | --- | --- | --- |
| 主循环模型流 | `Bw()` 双层闲置定时器 | `max(流空闲配置,5min)`，警告线为其一半 | ✅ `mBi()` |
| 子代理 | `Gt()` stall watchdog | `gLn()+300000` | ✅ tool in flight |
| 单次工具执行 | `BASH_*_TIMEOUT_MS` / `MCP_TOOL_TIMEOUT` | 各自配置 | — |

**两层都用同一个模式**：定时器 + 每事件重排 + 一个"不该判死"的豁免钩子。
这不是巧合，是这套机制的核心形状。

## 8. 待确认（本次未查，不猜）

1. `mBi()`（rearm 判定）的完整条件 —— 从名字与 `rearm_slack_ms` 推测是
   「刚重试过 / 刚 rearm 完，给一点宽限」，但没读实现。
2. `SNr`（心跳重置次数上限）的值。
3. `Nt()` 的 parked 路径完整条件。
4. Hlaudz 的「7 件前奏」在 CC 里对应什么、有没有超时 —— 这是事故点，
   但 CC 的前奏结构与 Hlaudz 完全不同（CC 没有 `add_msg` → runtime 构造
   这一段），可能**没有直接对应物**。

## 9. 源码坐标速查

| 事实 | 坐标 |
| --- | --- |
| 阈值常量 `Ep=300000` / `Cp` / `xp=600000` | `m0779:7854-7856` |
| 阈值计算 `qqo()` | `m0779:7857-7861` |
| 自适应基线 `gLn()` | `m0349:14688-14690` |
| 每个子代理算一次阈值 `stall_ms = qqo()` | `m0779:7909` |
| 进展回调 `un`（含 1s 节流） | `m0779:8029-8037` |
| 定时器重排 `Gt()` | `m0779:7986` |
| deferred 分支（tool in flight） | `m0779:7994-7998` |
| 触发日志 `stall watchdog fired after` | `m0779:8001` |
| 遥测 `tengu_async_agent_stall_timeout` | `m0779:8003` |
| `gt("watchdog_stall")` | `m0779:8008` |
| 结构化字段 `exitPath` / `lastChunkAgeMs` | `m0779:7943` |
| `Fe` 维护（tool_use 加入 / tool_result 移除） | `m0779:8111-8119` |
| 定时器原语 `lan` | `m0170:8-24` |
| **主循环** 双层闲置定时器 `Bw()` | `m0591:131125-131158` |
| **主循环** 警告线 `_B = iE / 2` | `m0591:131569` |
| **主循环** 中止文案 `Streaming idle timeout` | `m0591:131146` |
| **主循环** 警告文案 `Streaming idle warning` | `m0591:131134` |
| **主循环** 重排点（每事件）`k_=0, Bw()` | `m0591:131650` |
| **主循环** stall 观测 `Streaming stall detected` | `m0591:131654` |
| **主循环** 心跳重置上限 `k_ <= SNr` | `m0591:131691` |
| **主循环** 遥测 `tengu_streaming_idle_timeout` | `m0591:131150` |