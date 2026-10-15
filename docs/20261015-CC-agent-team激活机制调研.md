# Claude Code 2.1.283：agent team 的「激活机制」源码调研

> 问题：GA 复刻 agent team 时，我方的真实 e2e 要求用户输入很正规的指令
> （「先 task_create 再 spawn_agent(team_mode=true)」）。真实用户不会这样提问。
> 那么 **CC 是怎么做到「不依赖用户正规输入」就能用起来 agent team 的？**
>
> 坐标：`claudecode283/modules/<module>.js @ <字符偏移>`（模块为 Bun 明文 JS，未混淆）。
> 证据等级：全部为源码直读（字符串 / 属性名 / 函数体），非推测；不确定处单独标注。

---

## 0. 一句话结论

CC **没有任何「团队斜杠命令」**，也不要求用户写团队语法。它的激活是三层叠加：

1. **会话级实验开关**：`--agent-teams` 启动参数 **或** 环境变量 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`
   （默认关，`isAgentSwarmsEnabled` 门控）。开一次，整会话可用。
2. **模型自主 + 提示词引导**：开关打开后，**计划模式**在「用户批准计划」的 tool_result 里注入一句
   nudge：「若计划可拆成多个独立任务，考虑用 `Agent` 工具 spawn 具名 teammate 并行」。
   → 用户只需正常提需求，模型自己会想到用 team。
3. **两个模型可见入口**（schema 字段随开关挂载/剥离）：
   - `ExitPlanMode` 带 `launchSwarm` + `teammateCount` → 退出计划模式时**批量拉起 swarm**；
   - `Agent` 带 `name` + `team_name` + `mode` → **起一个 teammate**。

---

## 1. 功能开关：`isAgentSwarmsEnabled`（权威定义）

`m0283_0xc5c1f6e.js`（全文极短，直接给出门控）：

```js
function t(){ return process.argv.includes("--agent-teams") }
function _o(){
  if(!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return !1;   // 环境变量 或 启动参数
  if(!x("tengu_amber_flint",!0)) return !1;                        // 远端 feature flag，默认 true
  return !0
}
async function lkr(){ if(!_o()) return; ... captureTeammateModeSnapshot() }
export{_o,lkr}
```

- `_o` = `isAgentSwarmsEnabled`；`lkr` = `captureTeammateModeSnapshotIfEnabled`
  （由 `m0362_0xca2d6fb.js` 再导出：`export{lkr as captureTeammateModeSnapshotIfEnabled, _o as isAgentSwarmsEnabled}`）。
- 结论：**默认关闭**；开 = `--agent-teams` 或 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`，且 feature flag `tengu_amber_flint` 为真。

---

## 2. 没有团队斜杠命令

- 全模块搜 `"/team*"` / `/swarm` / `"/agents"` 之类：**只命中 `/team-onboarding`**（Claude-in-Slack 的组织上手，与 agent team 无关）。
- 结论：CC 不提供 `/team`、`/swarm` 这类「手动起团队」的命令；`/agents`（在 `m0357`）指
  `.claude/agents/*.md` **定义文件**，不是团队面板。
- 对照：**GA 反而多了** `/team`、`/agents`（只读名册面板，见 GA P10）。这是 GA 的增强，不是 CC 的机制。

---

## 3. 不依赖正规输入的核心：计划模式「批准后 nudge」

`m0503_0xccfe7a3.js` 里 `u6t(e)` 生成一段提示，**追加在「用户批准计划」的 ExitPlanMode tool_result 里**：

```js
function u6t(e){
  if(!e || M0()!=="default") return "";
  return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ht} tool (pass a \`name\`) to parallelize the work.`
}
```

- `${ht}` = `"Agent"`（工具名常量，见 `agent-team-internals.md` §1）。
- 调用点（同模块 @85767）：ExitPlanMode 成功路径——
  `content: \`User has approved your plan. You can now start coding. Start with upd...\` + u6t(Boolean(r))`。
  即：**用户点「批准计划」后，紧接着的那条 tool_result 就带着这句 nudge**。
- 门控 `M0()`：来自打包 chunk `chunk-gf53qpk6.js`（bytecode），**未在明文模块中定位其定义**；
  从用法看它返回一个 mode 字符串，只有等于 `"default"` 时才注入 nudge。**（证据不足，标注为未决）**

**这条 nudge 就是「不靠正规输入」的关键**：用户说「帮我实现 X」，模型进入计划模式写计划 →
用户批准 → 模型收到「可拆就 spawn 具名 teammate 并行」的提示 → 模型自主组队。

---

## 4. `ExitPlanMode` 的 `launchSwarm` / `teammateCount`（批量拉起）

`m0357_0xc63ba04.js` 里有一张「工具名 → 额外 schema 字段」的映射：

```js
var nOn = new Map([
  [iu, ["launchSwarm", "teammateCount"]],   // iu = "ExitPlanMode"
  [ht, ["name", "team_name", "mode"]]       // ht = "Agent"
]);

function qbe(e, n) {                        // 从 schema.properties 里删掉 n 列出的字段
  if (n.length === 0) return e;
  let r = e.properties; if (!r || typeof r !== "object") return e;
  let s = { ...r }; for (let g of n) delete s[g];
  return { ...e, properties: s };
}
function rOn(e, n) { return qbe(n, nOn.get(e) ?? []) }

function eat(e, { remoteToolForwarding: n }) {
  let s = ... e.inputSchema ...;
  if (!_o()) s = rOn(e.name, s);            // 开关关闭 → 从 schema 剥掉这些字段
  ...
}
```

- 含义：这两个工具的「团队参数」**随 `isAgentSwarmsEnabled` 挂载/剥离**——
  关掉时 `launchSwarm`/`teammateCount`/`name`/`team_name`/`mode` **不出现在模型可见 schema 里**；
  打开时出现。
- `ExitPlanMode` 的 base schema（`Bs()` = `Qe({allowedPrompts}).passthrough()`）本身不含这些字段；
  它们由打包 chunk 补全，**字段描述文本未在明文模块中定位**（bytecode）。**（标注为未决）**
- 语义：`launchSwarm=true` + `teammateCount=N` → 退出计划模式时**一次性拉起 N 个 teammate**（swarm）。

---

## 5. `Agent` 的 `name` / `team_name` / `mode`（起单个 teammate）

- 同一张 `nOn` 表：`Agent` 的团队字段 = `name` / `team_name` / `mode`。
- `agent-team-internals.md` §2.1 已证：`Agent` 工具调用里命中「提升为 teammate」分支时调
  `spawnTeammate({ name, prompt, use_splitpane:!0, plan_mode_required, agent_type, ... })`。
- 即：**模型用 `Agent` 工具 + `name` 起 teammate**，不需要用户写团队语法。

---

## 6. teammate 侧的系统提示（决定「团队怎么协作」）

`m0357_0xc63ba04.js` 里 teammate 的 role 文案（节选，直读字符串）：

- `"You are a teammate in this session's agent team."`
- `"Read the team config to discover your teammates' names."`
- `"Always refer to active teammates by their NAME (e.g., ...)"`
- `"Teammates cannot spawn other teammates — the team roster is flat."`（另见 `m0511`）

即：teammate 拿到的是「你在本会话的 agent team 里 + 用名字称呼队友 + roster 是扁平的」。

---

## 7. swarm 开启状态会传给子进程

`m1578_0xdd0c821.js @16309`：构造 teammate 子进程环境时注入

```js
let n = ["CLAUDECODE=1", "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1"];
```

→ **teammate 进程也带着「agent team 已开」的环境**，保证嵌套/恢复时一致。

---

## 8. 相关环境变量清单（agent team 周边）

| env | 证据 | 作用 |
| --- | --- | --- |
| `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` | `m0283` / `m0052` / `m1578` | 开 agent team（实验开关） |
| `--agent-teams`（CLI flag） | `m0283` | 同上，命令行开关 |
| `CLAUDE_CODE_TEAMMATE_COMMAND` | `m0093` | teammate 启动命令 |
| `CLAUDE_CODE_DISABLE_AGENT_VIEW` | `m0052` | 关 agent 视图 |
| `CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS` | `m0052` | 团队拆除的 park 超时 |
| `CLAUDE_CODE_COORDINATOR_MODE` | `m0094`（.mcp.json `comms` role 描述） | **协调者模式**（另一套：跨会话 comms，非本 team） |

> 注意：`CLAUDE_CODE_COORDINATOR_MODE` 与 agent team **不是一回事**（它是「协调者会话经 comms MCP 面向用户」的模式），别混。

---

## 9. 扁平 roster（设计约束）

- `m0511_0xcd25473.js`：`"Teammates cannot spawn other teammates — the team roster is flat."`
  → 团队是**一层**：lead + N 个 teammate；teammate 不能再起 teammate（只能起普通 subagent）。

---

## 10. 对 GA 的启示（复刻建议，落到 GA 侧）

**CC 的结论**：agent team = **会话级开关 + 模型自主（提示词 nudge）+ 两个模型入口**，**不需要用户写团队语法**。

GA 现状对照：

| 维度 | CC | GA 现状 | 差距 |
| --- | --- | --- | --- |
| 会话级开关 | `--agent-teams` / env | **无** | 缺 |
| 不靠正规输入的触发 | 计划模式批准后 nudge「可拆就 spawn teammate」 | lead hint 常驻，但**没有「何时该组队」的场景化 nudge** | 缺 |
| 批量拉起 | `ExitPlanMode(launchSwarm, teammateCount)` | 无计划模式 | 缺（GA 无 plan mode） |
| 单个 teammate | `Agent(name, team_name)` | `spawn_agent(team_mode=true)` ✅ | 已有 |
| 手动命令 | **无** | `/team`（只读名册） | GA 多 |

**建议（二选一或叠加）**：

1. **场景化 nudge（最贴 CC）**：当用户请求含「并行 / 多个独立子任务 / 调研 N 个对象」等信号时，
   在提交给模型的 user 消息尾部注入一句 CC 同款 nudge：
   「若可拆成多个独立任务，考虑先用 task_create 建板，再 spawn_agent(team_mode=true) 起 teammate 并行」。
   这样**用户自然提问即可**，无需写团队语法。
2. **简短斜杠命令（GA 增强，CC 没有）**：`/team <任务>` 或 `/team on`——
   把后续/本轮请求标记为「团队任务」，host 注入 nudge。
   好处：显式、可预测；坏处：偏离 CC（CC 无此命令）。

> 复刻优先级：**先做 (1) 场景化 nudge**（贴 CC、零用户负担）；(2) 作为可选增强。

---

## 11. 未决 / 未定位（诚实标注）

- `M0()`（`u6t` 的门控函数）定义在打包 chunk `chunk-gf53qpk6.js`（bytecode），明文模块里**未定位**。
- `ExitPlanMode` / `Agent` 团队字段的 **schema 描述文本**（模型看到的字段说明）在打包 chunk 里，**未定位**。
- `launchSwarm` 的**消费方**（真正读 `input.launchSwarm` 并拉起 swarm 的代码）在打包 chunk 里，**未定位**；
  明文模块只见到它作为 schema 字段名出现（`m0357`）。
- 上述三项如需坐实，需在有 CC283 源码的机器上用 `strings`/`grep -a` 搜 exe 里的 chunk 名或字段描述。

---

## 附：本文所有证据坐标

| 结论 | 文件 @ 偏移 |
| --- | --- |
| 功能开关 `isAgentSwarmsEnabled` | `m0283_0xc5c1f6e.js`（全文） |
| 再导出 `isAgentSwarmsEnabled` | `m0362_0xca2d6fb.js` |
| 计划批准后 nudge `u6t` | `m0503_0xccfe7a3.js @78213`（定义）/ `@85767`（调用） |
| `nOn` 工具→团队字段映射 | `m0357_0xc63ba04.js @1202378` |
| teammate 系统提示 | `m0357_0xc63ba04.js` |
| swarm env 传播 | `m1578_0xdd0c821.js @16309` |
| 扁平 roster 约束 | `m0511_0xcd25473.js` |
| `--agent-teams` flag | `m0283_0xc5c1f6e.js` |
| env 清单 | `m0052_0xbfaae5d.js @53538` |
