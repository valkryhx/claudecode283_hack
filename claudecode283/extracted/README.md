# Claude Code 2.1.283 — workflow / rewind / Agent Team / hooks 实现代码

从 `claude.exe` 的 `.bun` 段直接抠出来的原文。**不需要 IDA**，也不需要 `.i64`——
这些是明文 JS，不是原生代码。

## 目录

| 文件 | 说明 |
| --- | --- |
| `workflow-tool-description.md` | **Workflow 工具的描述**（喂给模型的 tool prompt），3,018 字符 |
| `workflow-authoring-reference.md` | **Workflow 编写参考**（完整 DSL 文档），17,018 字符 |
| `dynamic-workflow-internals.md` | **实现剖析**：从触发到通知的全链路，逐条附源码坐标（模块+偏移） |
| `rewind-internals.md` | **实现剖析（rewind / 检查点）**：文件检查点 + 会话回滚全链路，逐条附源码坐标；含 §13 命名方法与证据分级 |
| `agent-team-internals.md` | **实现剖析（Agent Team / teammate / swarm）**：`Agent` 工具、`spawnTeammate`、三后端、任务板与团队文件，逐条附源码坐标；含 §10 专项可读化副本 |
| `hooks-internals.md` | **实现剖析（hooks 机制）**：5 种 hook 类型、33 个事件、输入/输出 schema、spawn 执行链路、异步注册表、来源与安全门禁，逐条附源码坐标；含 §12 命名方法与证据分级、§14 自研复刻清单、§15 专项可读化副本（`reconstructed/deminified-hooks/`） |
| `../modules/` | 全部 2,135 个模块，按索引导出 |
| `../modules/INDEX.tsv` | 索引表：idx / 偏移 / 大小 / workflow 命中数 / 符号 |

## 怎么复现的

1. 确认是 Bun 单文件：`Bun.isStandaloneExecutable` 命中
2. 用 `// @bun @bytecode` 切出 2,135 个模块（详见 `../../docs/bun-standalone-re.md`）
3. 按 `workflow` 关键字筛出 124 个相关模块
4. 从 `m1502_0xdb4a986.js` 里把两段模板字面量抽出来

## 模块地图

| 模块 | 大小 | 作用 |
| --- | --- | --- |
| `m1502_0xdb4a986.js` | 21,824 B | **Workflow 工具定义**：工具描述 `t` + 编写参考 `Anr()` |
| `m1569_0xdceb889.js` | 71,644 B | **WorkflowTool 实现**：输入校验、resume、remote、named workflow |
| `m0869_0xd12567a.js` | 89,500 B | **workflow 任务引擎**：adopted workflow、checkpoint、sha256 内容锚定 |
| `m0862_0xd11f1fb.js` | 7,946 B | **脚本解析器** `Fy()`：acorn 解析 + 强制 `meta` 是第一条语句 |
| `m1994_0xe384791.js` | 26,330 B | 权限对话框 UI（"will spin up multiple subagents across the following phases"） |
| `m1372_0xd781293.js` | 495,188 B | launch 状态机（`createWorkflowLaunchState` / `resumeWorkflowLaunch`） |
| `m1460_0xd973957.js` | 45,033 B | 保存 / 采纳（`readWorkflowAgentTranscript`、`tengu_workflow_saved`） |
| `m0567_0xcdd6311.js` | 8,719 B | task 类型定义（`task_local_workflow_*`） |
| `m0868_0xd1234ad.js` | 8,653 B | 从 `.claude/workflows/` 加载（`loadWorkflowsDir`） |
| `m0573_0xcde50bc.js` | 9,976 B | adopted workflow 相关 |

## 脚本格式

每条 workflow 脚本就是一段普通 JS，**第一条语句必须是**：

```js
export const meta = {
  name: 'review-changes',
  description: '一句话描述，显示在权限对话框里',
  phases: [{ title: 'Review' }, { title: 'Verify' }],
}
```

`meta` 必须是**纯字面量**——不能有变量、函数调用、展开或模板插值。
`phases` 里的 title 要和脚本里 `phase()` 调用**逐字匹配**。

## DSL 速查

| API | 签名 | 说明 |
| --- | --- | --- |
| `agent` | `agent(prompt, opts?) => Promise<any>` | 起一个 subagent。不带 `schema` 返回最终文本；带 `schema`（JSON Schema）强制走 StructuredOutput，返回校验过的对象。用户跳过或 agent 挂掉时返回 `null` |
| `pipeline` | `pipeline(items, stage1, stage2, ...) => Promise<any[]>` | **默认选择**。每个 item 独立走完所有 stage，stage 之间**没有 barrier**。A 可以在 stage3 时 B 还在 stage1 |
| `parallel` | `parallel(thunks) => Promise<any[]>` | **有 barrier**，等全部完成。抛错的 thunk 变成 `null`，调用本身不会 reject |
| `phase` | `phase(title) => void` | 开一个新阶段，后续 agent 归到这组 |
| `log` | `log(msg) => void` | 给用户发进度消息 |
| `args` | `any` | 工具调用传进来的 `args`，原样传入 |
| `budget` | `{total, spent(), remaining()}` | 本轮 token 预算。`total` 为 null 表示没设目标；是**硬上限**，超了 `agent()` 直接抛 |
| `workflow` | `workflow(nameOrRef, args?) => Promise<any>` | 内联跑另一个 workflow。共享并发上限/计数器/abort/预算。**只能嵌一层** |

`agent` 的 opts：`label` / `phase` / `schema` / `model` / `effort` / `isolation` / `agentType`。

## 关键约束（都是硬编码的）

| 项 | 值 | 出处 |
| --- | --- | --- |
| 单 workflow 并发 agent 上限 | `min(16, 可用CPU - 2)` | authoring reference |
| 单 workflow 生命周期 agent 总数上限 | 1000（防跑飞的兜底） | 同上 |
| 单次 `parallel()`/`pipeline()` 最多接受项数 | 见 `${Sx}` 插值（运行时注入） | 同上 |
| 脚本可用 | 标准 JS 内建（JSON / Math / Array …） | 同上 |
| 脚本**不可用** | `Date.now()` / `Math.random()` / 无参 `new Date()`（会破坏 resume）、文件系统、Node API | 同上 |
| 脚本语言 | 普通 JavaScript，**不是 TypeScript** | 解析器会明确报错提示 |

## Resume 机制

- 工具返回带 `runId`
- 暂停/被杀/改了脚本后，用 `Workflow({scriptPath, resumeFromRunId})` 重启
- **最长未变前缀**的 `agent()` 调用直接命中缓存，第一个被改动/新增的调用及其之后才真跑
- 同一脚本 + 同一 args → 100% 缓存命中
- 结果写在 `<transcriptDir>/journal.jsonl`，每个 agent 的返回值都记在里面

## 触发条件（工具描述里明确写了）

只有**用户显式 opt-in** 才能调：

1. prompt 里带了 `ultracode` 关键字
2. 会话开了 ultracode
3. 用户用自己的话直接要求（"use a workflow" / "fan out agents" / "orchestrate this with subagents"）
4. 用户调用了某个指示你调 Workflow 的 skill / slash command
5. 用户点名要跑某个已保存的 workflow

「一个任务明显能从 workflow 受益」**不算** opt-in。

## 注意

抽出的文档里还残留 `${ht}` / `${Sx}` / `${v$}` 这类插值——那是运行时注入的，
不是源码缺陷。原文如此。
