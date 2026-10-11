# 符号对照表（minified → 含义）

Bun `--compile` 产物是 **minify 但未混淆**：字符串、控制流、模板字面量都在，
只有标识符被压短。下表把本目录涉及的压缩名翻译回语义。

> 坐标格式 `m0869_0xd12567a.js @ 43713` = 该模块内第 43713 个字符偏移。

---

## 1. 模块地图

| 模块 | 大小 | 角色 |
| --- | --- | --- |
| `m0862_0xd11f1fb.js` | 7.9 KB | **脚本解析器**：meta 强制第一条 + 纯字面量求值 |
| `m0869_0xd12567a.js` | 89.5 KB | **workflow 任务引擎**：编译 / VM / DSL / 并发 / 预算 / journal / resume |
| `m0242_0xc49e8d9.js` | 860 B | **并发信号量**（全项目唯一实现） |
| `m1569_0xdceb889.js` | 71.6 KB | **Workflow 工具入口**：schema / 校验 / 权限 / call |
| `m1502_0xdb4a986.js` | 21.8 KB | 工具描述 + authoring reference 模板 |
| `m0567_0xcdd6311.js` | 8.7 KB | 任务注册表 + 通知投递 |
| `m0132_0xc24a4bb.js` | 185 KB | VM 沙箱加固 + 跨边界克隆器 |

---

## 2. 抽取出的函数（见 `readable/`）

| 文件 | 原名 | 含义 | 坐标 |
| --- | --- | --- | --- |
| `m0862.Fy.js` | `Fy` | 脚本解析：meta 必须第一条且纯字面量 → `{meta, scriptBody}` | @3670 |
| `m0862.O.js` | `O` | meta 纯字面量递归求值器 | @5927 |
| `m0869.t7.js` | `t7` | 编译成 `vm.Script`（禁 `import()`） | @16319 |
| `m0869.Io.js` | `Io` | 主执行循环（runInContext + abort 竞速） | @78833 |
| `m0869.kSt.js` | `kSt` | 后台任务生命周期（跑脚本 → 快照 → 通知） | @81169 |
| `m0869.jo.js` | `jo` | **`agent(prompt, opts)`** | @43713 |
| `m0869.Ko.js` | `Ko` | **`parallel(thunks)`**（有 barrier） | @74546 |
| `m0869.zo.js` | `zo` | **`pipeline(items, …stages)`**（无 barrier） | @75362 |
| `m0869.wTn.js` | `wTn` | 建 VM 上下文 + 注入 DSL | @76987 |
| `m0869.Oo.js` | `Oo` | 引擎 hooks 工厂（计数/失败/phase/缓存/预算） | @39021 |
| `m0869.Lr.js` | `Lr` | 并发上限公式 `min(16, CPU-2)` | @36012 |
| `m0869.et.js` | `et` | agent 总数上限检查（1000） | @40182 |
| `m0869.ct.js` | `ct` | token 预算检查 | @40291 |
| `m0869.Mo.js` | `Mo` | `WorkflowAgentCapError` | @36372 |
| `m0869.Wo.js` | `Wo` | `WorkflowBudgetExceededError` | @36454 |
| `m0869.lo.js` | `lo` | 缓存键：链式 sha256（`v2:` 前缀） | @20900 |
| `m0869.mr.js` | `mr` | opts 序列化（进 key 的字段白名单） | @20384 |
| `m0869.ao.js` | `ao` | journal 行折叠成 `{results, started, failed}` | @20124 |
| `m0869.Gt.js` | `Gt` | `journal.jsonl` 读写类 | @21165 |
| `m0869.Bo.js` | `Bo` | **真实 agent spawn**（宿主耦合最深） | @48492 |
| `m0869.Zr.js` | `Zr` | 进度批量上报（16/250/10000ms） | @80409 |
| `m0869.tsr.js` | `tsr` | 子 workflow 拒绝桩 | @29905 |
| `m0869.yo.js` | `yo` | 子 workflow 执行（只嵌一层） | @30215 |
| `m0869.nsr.js` | `nsr` | 子 phase 命名器（重名加 ` #N`） | @30102 |
| `m0869.F7r.js` | `F7r` | adopted workflow resume（scriptSha256 内容锚） | @88032 |
| `m0869.No.js` | `No` | `No = Ms(Ot, Bo)` —— spawn 并发信号量实例 | @41436 |
| `m0242.Ms.js` | `Ms` | **并发信号量** `Ms(limit, fn)` | @615 |
| `m1569.inputSchema.js` | `inputSchema` | 工具入参 schema（getter，委托 `Zt()`） | @61624 |
| `m1569.validateInput.js` | `validateInput` | 入参校验 + 确定性闸门 | @62456 |
| `m1569.checkPermissions.js` | `checkPermissions` | 权限对话框 / allow-deny 匹配 | @64578 |
| `m1569.call.js` | `call` | 编译 + 落盘 + 异步启动，返回 `async_launched` | @65948 |

---

## 3. 关键常量 / 跨模块符号

| 符号 | 值 / 含义 | 出现处 |
| --- | --- | --- |
| `Fd` | `"Workflow"` —— Workflow 工具名 | 子 agent `disallowedTools` |
| `ht` | `"Agent"` —— 单 subagent 工具名 | 同上 |
| `O_` | `"SendUserMessage"` | 同上 |
| `bi` | `"StructuredOutput"` —— 结构化输出工具名 | 带 schema 的 agent |
| `fr` | `"v2"` —— 缓存键版本前缀 | `lo()` |
| `xo` | `1000` —— agent 总数硬上限 | `et()` |
| `Nr` | `50` —— 另一路信号量（本 build 未启用） | `Uo=Ms(Nr,Ho)` |
| `Ot` | `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS ?? Fr` | `No=Ms(Ot,Bo)` |
| `Fr` | `Lr(availableParallelism())` | 并发默认值 |
| `Ur` | agent 上限错误文案常量 | `Mo` |
| `uh` | artifact-content-authored-by-others 标记 | 通知安全告警 |

---

## 4. 函数体内引用、但定义在**其他模块**的符号

这些在抽取片段里只出现调用点，定义不在本目录：

- `rr()` / `ne` / `or` / `Qor()` / `Qn` / `Ohe()` —— 转译与 async 包装（`t7`）
- `j()` / `M()` / `U()` / `L()` / `S()` / `I()` / `V` / `Nb` —— meta 解析辅助（`Fy`）
- `xt()` —— 给 DSL 函数套 VM 边界包装（`jo/Ko/zo/yo`）
- `tm()` / `h()` —— VM 边界克隆（`Io/Oo`）
- `ar()` / `b()` / `Yr()` —— 哈希 / 稳定序列化
- `uO()` —— 转录目录 `<projectsDir>/<sessionId>/subagents/workflows/<runId>`
- `RTn()` —— 通知投递（在 `m0567`）
- `Ms()` —— 并发信号量（本目录 `m0242.Ms.js`）

> 需要继续下钻时，用 `tools/bunpeek.py` 或直接 `grep -a` 原模块。
