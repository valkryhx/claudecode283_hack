# Claude Code `agent team` (Agent Teams / Swarm / Teammate) 实现剖析

> 坐标格式 `m1578_0xdd0c821.js @ 38957` = 该模块内第 38957 个字符偏移（对 `reconstructed/deminified/` 版本）。
> 与 `rewind-internals.md` 同法：先用导出桶拿权威真名，再用字符串/属性锚点补齐。
> 本文所有结论都标了证据来源；不确定的地方单独列出。

---

## 0. 一句话结论

Agent Team 在 v2.1.283 里真实存在，且是完整功能（不是只有残留字符串）。
它是「一个 lead 会话 + 若干 teammate」的模型：

- lead 通过 `Agent` 工具（传 `name` + `team_name`）把子 agent 提升为具名 teammate；
- teammate 可跑在终端分屏 pane（tmux / iTerm2）或同进程（`in_process_teammate`）；
- 队友之间用 `SendMessage` 互发消息，用 `Task*` 工具共享任务板；
- teammate 空闲时触发 `TeammateIdle` 钩子；
- 团队状态持久化在 team 文件里（`teamName` / `teamFilePath` / `leadAgentId` / `teammates{}`）。

---

## 1. 工具地图（模型可见的入口）

| 工具 | 常量/来源 | 关键参数 | 作用 |
| --- | --- | --- | --- |
| `Agent` | `ht="Agent"`；实现在 `m0511_0xcd25473.js` | `name`, `team_name`, `mode`, `subagent_type`, `prompt`, `plan_mode_required`, `use_splitpane` | 起一个 agent；带 `team_name` 时就是 spawn teammate |
| `ExitPlanMode` | `iu="ExitPlanMode"` | `launchSwarm`, `teammateCount` | 退出计划模式时批量拉起 swarm |
| `SendMessage` | `m0261` 等 | `to`, `summary`, `message` | teammate <-> lead <-> teammate 消息（`to:"main"` 回主会话） |
| `TaskCreate` / `TaskUpdate` / `TaskList` / `TaskGet` | `m0271`/`m0376`/`m0377`/`m0531`/`m1322`/`m1883` | `taskId` 等 | 共享任务板 |
| `TeamCreate` / `TeamDelete` | 仅出现在 `m0357` 的 `Tfe` 工具分类集 | - | 内置工具名（分类用，非模型直接调） |

nOn 映射（权威，`m0357`）——工具名 -> 该工具额外挂到 schema 上的字段：

```js
var nOn = new Map([
  [iu, ["launchSwarm", "teammateCount"]],   // iu = "ExitPlanMode"
  [ht, ["name", "team_name", "mode"]],      // ht = "Agent"
]);
```

> 证据：`m0357` 里该映射区段；`iu`/`ht` 的定义在对应 chunk
> （`var IS="ExitPlanMode",iu="ExitPlanMode"`；`var ht="Agent"`）。

---

## 2. Agent 工具本体（`m0511_0xcd25473.js`，68KB）

`m0511` 导出一个用 `Ft({...})` 定义的工具对象（导出名 `nqt`，另有 `userFacingName`）：

```js
var tool_2 = Ft({
  name: name_2,                 // name_2 = ht = "Agent"
  searchHint: "delegate work to a subagent",
  aliases: [xm],
  async description() { return "Launch a new agent"; },
  get inputSchema() { return Ftr(); },
  create(n) { return { call(agentInput, h) { /* -> runEngine(ho, ...) */ } }; },
});
```

### 2.1 spawn teammate 的那条分支（关键）

工具调用里，当满足「提升为 teammate」的条件时：

```js
let { spawnTeammate } = import.meta.require("B:/~BUN/root/chunk-s4zp6f5e.js"),
    D = await spawnTeammate({
      name, prompt,
      description,
      use_splitpane: !0,
      plan_mode_required: _e === "plan",
      model: model_2 ?? yo(r, Vf(e)),
      modelSource: model_2 ? "tool" : "frontmatter",
      agent_type: r?.agentType ?? subagent_type_2,
      invokingRequestId: assistantMessage?.requestId,
    }, e, onProgress);
// 返回 { status: "teammate_spawned", prompt, ...D.data }
```

`chunk-s4zp6f5e.js` = `m1578_0xdd0c821.js`（见第 6 节的映射方法）。这就是「实现体在懒加载 chunk 里」的那一块。

---

## 3. spawnTeammate 实现（`m1578_0xdd0c821.js`，39KB）

### 3.1 对外入口 `Ot` @38957

```js
async function Ot(n, e, o) { return ge(n, e, o); }
export { Ot as spawnTeammate };   // <- 权威真名
```

### 3.2 路由 `ge` @37499（handleSpawn）

```
ge(input, ctx, onProgress):
  1. input.prompt 是「协议帧」（oI(prompt)）-> 抛 subagent_teammate_protocol_frame_prompt
  2. Skt() 为真（当前就在 in-process 模式）-> z() 直接同进程 spawn
  3. input.agent_type 是运行期注册的插件 agent（oxo()）-> 拒绝
     （文案：pane teammate 跑不了 runtime-registered agent type，改用 Agent 工具或 in-process）
  4. 探测 pane 后端 JYt()：失败且 teammateMode!=="auto" -> 抛 subagent_teammate_pane_unavailable；
     失败但 auto -> 提示 "falling back to in-process" 并走 z()
  5. use_splitpane !== false -> ce()（tmux 新窗口 / iTerm2 分屏）
     否则                    -> ue()（tmux split-pane）
```

### 3.3 身份预留 `j` @22155（reserveTeammateIdentity）

```
j(name, teamName, opts, colorAssigner, run, storage):
  1. 校验 name / team_name 不含控制字符（VEo）-> 否则 subagent_teammate_control_chars
  2. 在 team 文件上做一次 CAS 更新（Bae）：
       sanitizedName = pe(name, team)               // 名字消毒/去重
       teammateId    = wD(sanitizedName, teamName)   // 由名字+团队派生的 agentId
       color         = colorAssigner.assign(teammateId)
       把 {agentId,name,color,joinedAt,tmuxPaneId:"",subscriptions:[]} 推进 team.members
  3. 调 run(identity, commit, onTeardown)：
       - 成功 -> 返回（teammate 已跑起来）
       - 失败且未 commit -> 回滚：跑 teardown + lxr(teamName, teammateId) 把成员摘掉
       - 失败但已 commit -> 保留条目（agent 已在跑）
```

名字规则 `pe` @~23100：

- `"main"` 是保留名（`SendMessage` 把它路由到主会话）-> 报错。
- `"main" / "team-lead" / "user" / "system"`（任意拼写）或「长得像 agent id」-> 报错。
- 重名 -> 自动加后缀 `name-2`、`name-3`...

### 3.4 后端一：`ce` @24321（tmux 新窗口 / iTerm2 分屏）

```
ce(input, ctx):
  - 取 teamName = getAppState().teamContext?.teamName（没有 -> subagent_teammate_no_team_name）
  - 走 j(...)，run 里：
      I = await JYt()
      若需要 iTerm2 初始化且能弹窗 -> 问用户（安装 it2 / 用 tmux / 取消）
      insideTmux = ...
      创建 tmux 窗口：tmux new-window -t <session> -n teammate-<name> -P -F '#{pane_id}'
      失败 -> subagent_teammate_tmux_window_failed
      注册 teardown：tmux kill-pane
      K(teamName, teammateId, {tmuxPaneId, backendType})
      返回 data: { teammate_id, agent_id, agent_type, model, name, color,
                   tmux_session_name, tmux_window_name, tmux_pane_id, team_name,
                   is_splitpane:false, plan_mode_required }
```

### 3.5 后端二：`ue` @28538（tmux split-pane）

与 `ce` 同构，只是用 `tmux split-window`，`is_splitpane:true`。

### 3.6 后端三：`z` @33878（in-process，无 pane）

```
z(input, ctx):
  - 同样 j(...)，run 里：
      K(teamName, teammateId, {tmuxPaneId:"in-process", backendType:"in-process"})
      找 agentDefinition（activeAgents 里 agentType 匹配且 ARt() 通过）
      k = { name, teamName, prompt, color, planModeRequired, model }
      Csn(...)                        // 记录
      D = await Pnr(k, e)             // 真正起一个 in-process agent
      失败 -> subagent_teammate_inprocess_failed
      i()                             // commit
      Inr({ identity, taskId, prompt, ... })  // 登记任务 + 启动执行
      setAppState: 把 lead（leadAgentId，名字 mi）和该 teammate 写进 teamContext.teammates
      返回 data: { teammate_id, agent_id, agent_type, model, name, color,
                   tmux_session_name:"in-process", ..., is_splitpane:false, plan_mode_required }
```

### 3.7 任务登记 `te` @32548

把 in-process teammate 注册进 taskRegistry：

```js
{
  type: "in_process_teammate",
  status: "running",
  cwd,
  identity: { agentId, agentName, teamName, color, planModeRequired, parentSessionId },
  prompt,
  abortController,
  awaitingPlanApproval: false,
  permissionMode: planModeRequired ? "plan" : "default",
  isIdle: false,
  lastReportedToolCount: 0,
  lastReportedTokenCount: 0,
  pendingUserMessages: [],
  paneTeardown,     // 若 backendType 支持 pane
}
```

### 3.8 回退提示 `_e` @~38500

```
teammateMode: "iterm2" -> 强制 iTerm2 pane（需开 iTerm2 Python API）
teammateMode: "tmux"   -> 用终端 pane
打不开 pane -> 通知 "teammate-auto-fallback"："Couldn't open a teammate pane - running in-process instead."
```

---

## 4. Teammate 任务类型与生命周期（`m0527_0xcd4a41f.js`，4.6KB）

```js
var Hbt = {
  name: "InProcessTeammateTask",
  type: "in_process_teammate",
  async kill(task, ...) {
    let { memberRemoval, osTeardown } = Oqt(...);
    await Promise.all([memberRemoval, osTeardown]);
  },
};
```

- `Gue(agentId, tasks)` / `KJr` — 按 `identity.agentId` 查 teammate 任务（`found` / `ambiguous` / `not_found`）。
- `YJr(tasks)` — 列出所有 `status==="running"` 的 teammate agentId。
- `Oqt(...)` — kill 实现：`abortController.abort()` -> 触发 `onIdleCallbacks` -> 状态置 `"killed"`，
  清空 `pendingUserMessages` / `abortController` / `paneTeardown`；pane teardown 有 10s 超时（`p=1e4`），
  超时只警告、不阻塞 stop。
- 关键字段：`awaitingPlanApproval`、`pendingUserMessages`、`isIdle`、`currentWorkAbortController`、`evictAfter`。

---

## 5. 模块地图

| 模块 | 角色 |
| --- | --- |
| `m1578_0xdd0c821.js` | spawnTeammate 实现体（`export{Ot as spawnTeammate}`）：`ge` 路由 + `ce`/`ue`/`z` 三后端 + `j` 身份预留 |
| `m0511_0xcd25473.js` | Agent 工具（`ht="Agent"`）；带 `team_name` 时调 `spawnTeammate` |
| `m0527_0xcd4a41f.js` | InProcessTeammateTask：任务类型 + kill + 查询 |
| `m0357_0xc63ba04.js` | 工具分类集 `Tfe`（含 `TeamCreate`/`TeamDelete`）+ `nOn` 工具 schema 扩展映射 + `launchSwarm` |
| `m0261_0xc59603a.js` | `SendMessage`（小模块，724B） |
| `m0271`/`m0376`/`m0377`/`m0531`/`m1322`/`m1883` | `TaskCreate`/`TaskUpdate`/`TaskList`/`TaskGet` |
| `m0052_0xbfaae5d.js` | hook 事件枚举：`TeammateIdle`、`TaskCreated`、`TaskCompleted` |
| `m0094_0xc0d9ae5.js` | zod schema（含 `teamName`） |
| `m0636_0xcec467c.js` / `m1614_0xdd7e082.js` | team 文件 / `teamFilePath` / `leadAgentId` 持久化 |
| `m0129_0xc1afed5.js` | 团队产物已读状态：`seenTeamArtifactPaths` / `hasUnseenTeamArtifacts` |
| `m1372_0xd781293.js` / `m1478_0xd9951de.js` | 会话侧 / UI（teammateColors、计划审批） |

---

## 6. 怎么把懒加载 chunk 映射回模块（关键方法）

`m0511` 里写的是 `import.meta.require("B:/~BUN/root/chunk-s4zp6f5e.js")`——
chunk 名和模块体是两套独立排序，不能按索引对齐。正确做法：

```bash
# 用 chunk 里的独有符号去 exe 里搜模块体
python tools/bunpeek.py claudecode283/claude.exe module "spawnTeammate" --max-size 2097152
# 命中 2 个模块：
#   module #0 = m0511（引用方，45KB）
#   module #1 = m1578（实现方，31KB）<- 就是 chunk-s4zp6f5e.js 的内容
```

`bunpeek.py module` 会自动「从命中点往前找最近的 `// @bun @bytecode`、往后找下一个」，
并丢掉 >`--max-size` 的荒谬大块（那些是字符串表，不是模块）。

---

## 7. 配置 / 环境 / 遥测

- 设置项：`teammateMode`（`"tmux"` / `"iterm2"` / `"auto"`）。
- 相关字段：`teamName`、`teamFilePath`、`leadAgentId`、`teammates{}`、`teammateColors`、`teammateCount`。
- 遥测/日志锚点：`subagent_launch` + 事件名
  `subagent_teammate_missing_params`、`subagent_teammate_no_team_name`、
  `subagent_teammate_control_chars`、`subagent_teammate_internal_invariant`、
  `subagent_teammate_pane_unavailable`、`subagent_teammate_tmux_window_failed`、
  `subagent_teammate_inprocess_failed`、`subagent_teammate_protocol_frame_prompt`、
  `subagent_teammate_runtime_agent_type`。
- 钩子事件：`TeammateIdle`（还有 `TaskCreated` / `TaskCompleted`）。

---

## 8. 命名方法（与 `rewind-internals.md` 第 13 节同法）

| 可读名 | 压缩名 | 证据 | 等级 |
| --- | --- | --- | --- |
| `spawnTeammate` | `Ot` | `m1578` 的 `export{Ot as spawnTeammate}` | 权威 |
| `Agent`（工具名） | `ht` | `var ht="Agent"` | 权威 |
| `ExitPlanMode`（工具名） | `iu` | `var IS="ExitPlanMode",iu="ExitPlanMode"` | 权威 |
| `Agent` 工具对象 | `tool_2` | `name: name_2`，`name_2` 由 `import{ht as name_2}` 得到 | 权威 |
| `handleSpawn` | `ge` | 被 `Ot` 直接返回；按 pane/in-process 路由 | 推断 |
| `reserveTeammateIdentity` | `j` | CAS 更新 team 文件、分配 agentId/color | 推断 |
| `handleSpawnSplitPane` | `ce` | `tmux new-window` / iTerm2 分支 | 推断 |
| `handleSpawnSplitPaneAlt` | `ue` | `tmux split-window` 分支 | 推断 |
| `handleSpawnInProcess` | `z` | 日志 `[handleSpawnInProcess]`（源码自带） | 权威（日志） |
| `registerInProcessTeammateTask` | `te` | 构造 `type:"in_process_teammate"` 任务 | 推断 |
| `sanitizeTeammateName` | `pe` | 保留名 + 去重逻辑 | 推断 |
| `killInProcessTeammate` | `Oqt` | 日志 `[killInProcessTeammate]`（源码自带） | 权威（日志） |

---

## 9. 仍未确定（诚实标注）

- `TeamCreate` / `TeamDelete` 这两个工具名只在 `m0357` 的分类集里出现；
  它们的工具定义对象未在已抽的 2135 个模块里找到（可能在更深的懒加载 chunk，
  或名字由常量拼接）。Agent Teams 的实际入口是 `Agent` 工具 + `ExitPlanMode.launchSwarm`。
- `SendMessage` 的完整分发实现（`m0261` 只有 724B，像是薄壳；真正路由在别的 chunk）。
- team 文件的确切路径与格式（`teamFilePath` 由 `m0636`/`m1614` 产出，未逐行核对）。
- `launchSwarm` / `teammateCount` 的批量拉起逻辑（只在 schema 扩展处见到，未见 spawn 循环）。
- UI 层（计划审批 `awaitingPlanApproval`、`pendingUserMessages` 的交互）未定位到具体模块。

---

## 10. 专项可读化副本（`reconstructed/deminified-agent-team/`）

本剖析对应的核心模块已经做了**作用域安全的专项重命名**，便于直接阅读/复刻：

| 文件 | 内容 | 改名数 |
| --- | --- | ---: |
| `m1578_0xdd0c821.js` | `spawnTeammate` 实现体（路由 + 三后端 + 身份预留） | 11 |
| `m0511_0xcd25473.js` | `Agent` 工具本体（schema + 权限 + `team_name` 分支） | 4 |
| `m0527_0xcd4a41f.js` | `InProcessTeammateTask`（查询 + kill） | 7 |

- 目录：`reconstructed/deminified-agent-team/`
- 改名账本与复现命令：`reconstructed/deminified-agent-team/README.md`
- 报告：`reconstructed/agent-team-rename-report.json`
- 语义复验：`node reconstructed/tools/verify-agent-team-semantic.mjs`
  （三个文件的 AST 节点类型、字符串/数字字面量、对象/类属性键零差异）