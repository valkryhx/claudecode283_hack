# `deminified-agent-team/` — Agent Team 专项可读化副本

这是 Agent Team 子系统的**作用域安全重命名副本**，不是替代 `deminified/` 的版本。
原始模块仍完整保留在 `reconstructed/deminified/`；本目录只把已找到强证据的
Agent Team 关键绑定改成可读名，方便人和 agent 直接复刻。

来源剖析：`claudecode283/extracted/agent-team-internals.md`。

## 文件

| 文件 | 角色 | 本目录改名数 |
| --- | --- | ---: |
| `m1578_0xdd0c821.js` | `spawnTeammate` 实现体：路由 + tmux/iTerm2/in-process 三后端 + 身份预留 | 11 |
| `m0511_0xcd25473.js` | `Agent` 工具本体：schema、权限、`team_name` 分支 | 4 |
| `m0527_0xcd4a41f.js` | `InProcessTeammateTask`：任务类型、查询、kill | 7 |

## 改名表

### `m1578_0xdd0c821.js`

| 原压缩名 | 可读名 | 证据等级 |
| --- | --- | --- |
| `Ot` | `spawnTeammate` | 权威：`export{Ot as spawnTeammate}` |
| `ge` | `handleSpawn` | 推断：`Ot` 直接转发；按 pane/in-process 路由 |
| `j` | `reserveTeammateIdentity` | 推断：CAS 更新 team 文件并分配 agentId/color |
| `pe` | `sanitizeTeammateName` | 推断：保留名检查 + 重名 `-2` |
| `ce` | `handleSpawnSplitPane` | 推断：tmux new-window / iTerm2 分屏 |
| `ue` | `handleSpawnSplitPaneAlt` | 推断：tmux split-window 分支 |
| `z` | `handleSpawnInProcess` | 权威（源码日志）：`[handleSpawnInProcess]` |
| `te` | `registerInProcessTeammateTask` | 推断：构造 `type:"in_process_teammate"` 任务 |
| `K` | `updateTeammatePane` | 推断：把 `tmuxPaneId` / `backendType` 写回 team 文件 |
| `_e` | `showTeammateAutoFallback` | 权威（源码 key）：`teammate-auto-fallback` |
| `ne` | `TeammateFallbackNotice` | 推断：`shown` 状态类，只让回退提示弹一次 |

### `m0511_0xcd25473.js`

| 原压缩名 | 可读名 | 证据等级 |
| --- | --- | --- |
| `tool_2` | `agentTool` | 权威：工具对象 `name: agentToolName`，导出 `tool_2 as nqt` |
| `name_2` | `agentToolName` | 权威：`import { ht as name_2 }`，`ht="Agent"` |
| `Ftr` | `getAgentToolInputSchema` | 权威（对象键）：`get inputSchema() { return Ftr(); }` |
| `Wkn` | `validateAgentToolInput` | 推断：校验 `subagent_type` 是否已注册 |

### `m0527_0xcd4a41f.js`

| 原压缩名 | 可读名 | 证据等级 |
| --- | --- | --- |
| `Hbt` | `inProcessTeammateTask` | 权威（源码字面量）：`name:"InProcessTeammateTask"` |
| `Oqt` | `killInProcessTeammate` | 权威（源码日志）：`[killInProcessTeammate]` |
| `Gue` | `findTaskByAgentId` | 推断：按 `identity.agentId` 查任务 |
| `KJr` | `findTaskByAgentName` | 推断：按 `identity.agentName` 查任务并处理重名 |
| `YJr` | `getRunningAgentIds` | 推断：过滤 `status==="running"` 并取 agentId |
| `eWe` | `getTeammateTasks` | 推断：`Object.values(...).filter(Qu)` |
| `p` | `PANE_TEARDOWN_TIMEOUT_MS` | 推断：`1e4` 作为 pane teardown 超时 |

## 复现与复验

```bash
cd reconstructed/tools
node agent-team-rename.mjs
node verify-agent-team-semantic.mjs
```

- 改名只动**绑定标识符**，不改字符串、属性名、导出名、控制流。
- `verify-agent-team-semantic.mjs` 对三个文件做 AST 级对比：
  节点类型、字符串/数字字面量、对象/类属性键全部零差异。
- 改名报告：`reconstructed/agent-team-rename-report.json`。