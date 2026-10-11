# Claude Code `hooks` 机制实现剖析

> 坐标格式：`m0052_0xbfaae5d.js @ 3188` = 该模块**格式化后**文件（`reconstructed/deminified/`）内的**行号**。
> m0357 是 4.1MB 的大共享 chunk，`deminify` 的 “>1MB 跳过 AST 改名” 规则跳过了它，
> 所以本文里 m0357 的符号（`s0` / `kE` / `Xxo` / `WLt` …）**仍是原始压缩名**，不是我们改过的名字。
> 其余模块（m0052 / m0094 / m0247）已走过证据驱动去混淆，函数名可能仍保留压缩名，但**字符串、属性名、
> schema 描述文本一律是原文**——本文所有语义都从这些保留物里读出来。
> 证据等级见 §12：**S=权威**（代码里直接写死的字符串/描述）、**A=强推断**、**B=推断**、**C=弱推断**。
> 不确定的地方在 §13 单独列出，不猜。

---

## 0. 一句话结论

Claude Code 的 hooks 是一套 **"事件 → matcher → 一组 handler"** 的外部可编程回调系统：

- 配置写在 settings 文件 / 插件 / 内存会话里，结构固定为 `hooks: { <事件名>: [ { matcher, hooks: [...] } ] }`；
- 每个 handler 有 5 种类型：`command`（跑 shell）、`prompt`（调 LLM 判定）、`agent`（跑一个验证 subagent）、
  `http`（POST 一个 URL）、`mcp_tool`（调一个已配置的 MCP 工具）；内部另有 `callback` / `function` / `script` 三种非用户类型；
- 触发时，宿主把该事件的 **输入 JSON 写到 handler 的 stdin**，从 **stdout 读回输出 JSON**；
- **退出码决定阻塞语义**：`0`=成功、`2`=阻塞错误（stderr 反馈给模型 / 拦截动作）、其它非零=非阻塞错误（只给用户看）；
- 输出 JSON 可以表达 `decision: approve|block`、`permissionDecision: allow|deny|ask|defer`、
  `additionalContext`、`updatedInput`、`updatedToolOutput`、`continue:false` 等控制指令；
- handler 可声明 `async`（后台跑），也可在 **stdout 首行打印 `{"async":true}`** 自我转后台；
- 一整套策略门禁（workspace trust、`disableAllHooks`、`allowManagedHooksOnly`、`allowedHttpHookUrls`、
  `strictPluginOnlyCustomization`、cloud 会话转发、MCP tool cgroup 封顶）决定哪些 hook 能跑、在哪跑。

**核心实现集中在 `m0357_0xc63ba04.js`（4.1MB 大共享 chunk）**：spawn、匹配、异步注册表、进度发射、结果分发都在那里。
**schema 集中在 `m0052`（配置）、`m0094`（输入 + system 消息）、`m0247`（输出 + 来源 + 事件分类）**。

---

## 1. 模块地图

| 模块 | 大小 | 角色 |
| --- | --- | --- |
| **`m0052_0xbfaae5d.js`** | 519 KB / 11900 行 | **Hook 配置 schema**：5 种 hook 类型、matcher、`hooks:` settings 结构、`Mm` 权威事件清单、相关 policy 键 |
| **`m0094_0xc0d9ae5.js`** | 596 KB | **Hook 输入 schema**：`Iq` 事件清单、`v()` 公共字段、各事件输入 schema；system message 子类型；SDK hook 定义 |
| **`m0247_0xc49fe84.js`** | 1.3 MB / 38949 行 | **Hook 输出 schema** + 事件分类集 + **hook 来源枚举 `cy`** + 收集函数 `dvo` |
| **`m0357_0xc63ba04.js`** | 5.4 MB | **★执行引擎**：分派、匹配、spawn、stdin/stdout、超时、异步注册表、进度/响应发射、结果分发、安全门禁 |
| `m1448_0xd946ee0.js` | 90 KB | 权限对话框里的 `runHooks` 调用点（交互式审批 UI 如何消费 hook 结果） |
| `m0625_0xce5b936.js` | — | Hook 性能分析文案（>2s per-tool-call、>10s SessionStart/Stop 告警） |
| `m0365_0xca2f238.js` | — | `session_start_hook_errors_total` 指标 |
| `m0532_0xcd70ab9.js` | — | `hook_success` / `hook_cancelled` 附件助手 |
| `m1381_0xd81c3b3.js` | — | `handleForwardedHook`（cloud 会话转发的 hook） |
| `m1437_0xd8c91e0.js` | — | `async_hook_response`、`hook_cancelled` / `hook_error_during_execution` / `hook_success` 消费 |
| `m1442_0xd909985.js` | — | UserPromptSubmit 的 `hook_cancelled`、`async_hook_response` |
| `m1450_0xd955d7a.js` | — | prompt submit hook 阻塞逻辑 |
| `m1566_0xdce3f99.js` | — | system 子类型过滤 |
| `m1655_0xdde95be.js` | — | `hook_blocked` 状态文案 |
| `m1738_0xdf03b02.js` / `m1740_0xdf07756.js` | — | `runElicitationHooks` / `runElicitationResultHooks` |

> 注：`Mm`（权威事件清单）**定义在 `m0052` @1650**，`m0247` @43 从 chunk 里 `import { Mm, ... }`。
> 也就是说 m0052 和 m0247 是同一编译 chunk 的两个模块，`Mm` 是同一个变量。`m0094` 的 `Iq` @6612 是它的副本。

---

## 2. Hook 配置 schema（settings 里的 `hooks:`）[S]

### 2.1 三层结构

`m0052 @3263`（`on()`）与 `@3268`（`_Y()`）：

```js
// 单个 matcher 条目
Matcher = {
  matcher: string?,          // 工具名 / 事件子类型；省略或 "*"/".*" 表示全部匹配
  hooks: HookSchema[],       // 匹配时执行的 handler 列表
}

// settings.json 的 hooks 字段
hooks: Record<EventName, Matcher[]>     // 键必须是 Mm 里的 33 个事件名之一
```

`_Y = () => Rft(z(Mm), C(on()))` —— 用 `Mm`（§3）作为 key 的枚举做校验。
`m0052 @3318` 还有一条校验：如果某对象里没有 `matcher` 却出现了 `Mm` 里的事件名当键，判为非法（防止把 hooks 写错层级）。

### 2.2 五种 hook 类型（`m0052 @3188 function Ru()`）

**`command`（`BashCommandHookSchema`）——最常用**

| 字段 | 类型 | 语义（原文描述） |
| --- | --- | --- |
| `type` | `"command"` | Shell command hook type |
| `command` | string | 要执行的 shell 命令 |
| `args` | string[]? | **exec 形式**：有 `args` 时 `command` 当可执行文件、直接 spawn 不经过 shell；`${CLAUDE_PLUGIN_ROOT}` 等占位符按元素替换，带引号/`$`/反引号的路径不会进 shell 解析器。无 `args` 时走 shell |
| `if` | string? | **权限规则语法**过滤（如 `"Bash(git *)"`），只在工具调用匹配时才跑，避免为非匹配命令 spawn hook |
| `shell` | `"bash"\|"powershell"`? | 解释器。`bash` 用 `$SHELL`(bash/zsh/sh)；`powershell` 用 `pwsh`。默认 bash（无 Git Bash 的 Windows 上默认 powershell） |
| `timeout` | number? | 本次命令超时（秒） |
| `statusMessage` | string? | spinner 里显示的自定义状态文案 |
| `once` | boolean? | 跑一次后移除 |
| `async` | boolean? | 后台跑、不阻塞 |
| `asyncRewake` | boolean? | 后台跑，**退出码 2 时唤醒模型**（隐含 `async`） |
| `rewakeMessage` | string? | `@internal` asyncRewake 退出码 2 时给模型看的 system-reminder 前缀 |
| `rewakeSummary` | string? | `@internal` 给用户看的一行摘要，默认 `"Stop hook feedback"` |
| `cloud` | `"device"\|"skip"`? | `@internal` cloud 会话从本机驱动时该 hook 是否可在本机跑；`device`=允许、`skip`=从不出让；无法识别读作 `skip` |

**`prompt`（`PromptHookSchema`）—— 用 LLM 判定**

| 字段 | 语义 |
| --- | --- |
| `prompt` | 用 LLM 评估的 prompt，`$ARGUMENTS` 占位符会被替换成 hook 输入 JSON |
| `if` / `timeout` / `statusMessage` / `once` | 同上 |
| `model` | 用哪个模型（如 `"claude-sonnet-5"`）；不填用默认的小快模型 |
| `continueOnBlock` | 设置 `decision:"block"`（`ok=false`）时返回的 `continue` 值，默认 false（回合结束） |

**`mcp_tool`（`McpToolHookSchema`）—— 调 MCP 工具**

| 字段 | 语义 |
| --- | --- |
| `server` | 已配置的 MCP server 名 |
| `tool` | 该 server 上的工具名 |
| `input` | 传给工具的输入对象 |
| `if` / `timeout` / `statusMessage` / `once` | 同上 |

**`http`（`HttpHookSchema`）—— POST 一个 URL**

| 字段 | 语义 |
| --- | --- |
| `url` | 把 hook 输入 JSON POST 到的地址 |
| `headers` | 额外请求头；值里可用 `$VAR` / `${VAR}` 引用环境变量，**只有 `allowedEnvVars` 列出的才会被插值** |
| `allowedEnvVars` | 允许插值的环境变量白名单；未列出的 `$VAR` 解析成空串 |
| `if` / `timeout` / `statusMessage` / `once` / `cloud` | 同上 |

**`agent`（`AgentHookSchema`）—— 跑一个验证 subagent**

| 字段 | 语义 |
| --- | --- |
| `prompt` | 描述要验证什么（如 `"Verify that unit tests ran and passed."`），支持 `$ARGUMENTS` |
| `timeout` | 默认 **60 秒** |
| `model` | 不填用 **Haiku** |
| `if` / `statusMessage` / `once` | 同上 |

**判别联合**：`xAe() = Qo("type", [command, prompt, agent, http, mcp_tool])`（`m0052 @3254`）。
**已知类型集合**：`sn()`（`m0052 @3276`）= `new Set(xAe().options.map(o => o.shape.type.value))`。

> 另有 **`script`** 类型（`{ type:"script", file|script }`）在 schema 校验与执行引擎里被处理，
> 但不在 `Ru()` 返回的 5 个 schema 里（见 `m0052` 的 `cFo` 文件路径校验、`m0247 @22340 lvo/cvo` 占位符展开、
> `m0357` 里的 `script` 分支）。它像是**内部/实验性**类型，用户在 settings 里未必能直接声明。
> `callback` / `function` 是**内置**类型（见 §11）。证据等级 [A]。

### 2.3 输出大小上限

`m0052 @3252`：`var lFo = 24576`（24 KB）。
`m0247 @22340`：`var dSe = lFo * 3`（73 KB）——用于 script hook 的某种上限。
`lFo` 被导出，是多处引用的"hook 输出上限"常量。

---

## 3. 事件清单（33 个）[S]

权威定义：`m0052 @1650`（`var Mm = [...]`）。`m0094 @6612` 的 `Iq` 是同一份列表。

```
PreToolUse          PostToolUse         PostToolUseFailure   PostToolBatch
Notification        UserPromptSubmit    UserPromptExpansion  SessionStart
SessionEnd          Stop                StopFailure          SubagentStart
SubagentStop        PreCompact          PostCompact          PreModelSwitch
PostModelSwitch     PermissionRequest   PermissionDenied     Setup
TeammateIdle        TaskCreated         TaskCompleted        Elicitation
ElicitationResult   ConfigChange        WorktreeCreate       WorktreeRemove
InstructionsLoaded  CwdChanged          FileChanged          DirectoryAdded
MessageDisplay
```

（共 33 个；`StatusLine` / `FileSuggestion` 出现在分类集里但不是 hook 事件，属于 statusLine/文件建议子系统。）

### 3.1 事件分类集

**`D2` / `I2`（`m0247 @20595`）——"本地阻塞事件"**：

```js
D2 = ["PreToolUse","PostToolUse","PostToolUseFailure","PostToolBatch","UserPromptSubmit",
      "UserPromptExpansion","Stop","StopFailure","SubagentStart","SubagentStop","PermissionDenied"]
I2 = new Set(D2)
```

**`L2`（`m0247 @20597`）——其余事件的执行位置映射**（`runs_locally | later | low_value | container_internal`）：

| 事件 | 归类 |
| --- | --- |
| SessionStart / SessionEnd / Notification | `runs_locally` |
| PermissionRequest / PreModelSwitch / PostModelSwitch | `later` |
| Setup / PreCompact / PostCompact / TeammateIdle / TaskCreated / TaskCompleted / Elicitation / ElicitationResult | `low_value` |
| ConfigChange / WorktreeCreate / WorktreeRemove / InstructionsLoaded / CwdChanged / FileChanged / DirectoryAdded / MessageDisplay | `container_internal` |

**`jIt`（`m0247 @20367`）——"不需要 tool cgroup 保护 / 走 `hooks` 分类"的事件集**：

```js
jIt = new Set(["Notification","SessionStart","SessionEnd","Setup","StopFailure","SubagentStart",
  "PostToolUseFailure","PostCompact","PostModelSwitch","PermissionDenied","WorktreeCreate",
  "WorktreeRemove","InstructionsLoaded","CwdChanged","FileChanged","DirectoryAdded",
  "MessageDisplay","StatusLine","FileSuggestion"])
```

**`Kxo`（`m0357 @100037`）——需要 await 一个微任务/让出的事件集**（用于 function-hook 链）：

```js
Kxo = new Set(["PreToolUse","PermissionRequest","UserPromptSubmit","UserPromptExpansion",
               "TaskCompleted","TeammateIdle"])
```

**`N2`（`m0247 @20627`）——文件编辑工具**：`["Write","Edit","MultiEdit","NotebookEdit"]`，用于判断某个事件是否涉及文件改动。

### 3.2 事件 → matcher 的匹配字段

`m0357 @99746 OLt()` 定义了每个事件拿输入里的哪个字段去和 `matcher` 比：

| 事件 | matcher 匹配字段 |
| --- | --- |
| PreToolUse / PostToolUse / PostToolUseFailure / PermissionRequest / PermissionDenied | `tool_name` |
| UserPromptExpansion | `command_name` |
| SessionStart | `source` |
| Setup | `trigger` |
| PreCompact / PostCompact | `trigger` |
| PreModelSwitch / PostModelSwitch | 归一化后的 `to_model` |
| Notification | `notification_type` |
| SessionEnd | `reason` |
| StopFailure | `error` |
| SubagentStart / SubagentStop | `agent_type` |
| Elicitation / ElicitationResult | `mcp_server_name` |
| ConfigChange | `source` |
| DirectoryAdded | `source` |
| InstructionsLoaded | `load_reason` |
| FileChanged | `file_path` 的基名 |
| TeammateIdle / TaskCreated / TaskCompleted | （无匹配字段，matcher 被忽略） |

**matcher 语义**（`m0357 @99902 HLt` + `@99746 GIe`）：
- 空 / `*` / `.*` → 匹配全部（`matcherIsMatchAll`）；
- 若形如 `^?(...)?\w+$?(|...)$?`（`Exo` 正则）→ 当作 **名字集合**，`|`/`,`/空格分隔（`_xo`）；
- 否则当**正则**用 `new RegExp(matcher).test(...)`，还会对 MCP 家族名 / 别名 / 前缀变体做二次匹配；
- 正则非法 → 打印 `Invalid regex pattern in hook matcher`，判为不匹配。

---

## 4. Hook 输入 schema（写进 stdin 的 JSON）[S]

定义在 `m0094_0xc0d9ae5.js @6625` 起。所有事件的输入都是 **公共字段 `v()` + 事件专属字段** 的 `and` 组合。
最终联合是 `M4n()`（`m0094 @6900` 附近）：`$e([Dq(), Lq(), xq(), ..., g0()])`。

### 4.1 公共字段 `v()`（`m0094 @6625`）

| 字段 | 类型 | 语义 |
| --- | --- | --- |
| `session_id` | string | 会话 id |
| `transcript_path` | string | transcript 文件路径 |
| `cwd` | string | 当前工作目录 |
| `prompt_id` | string? | 把一次用户输入和其后续事件关联起来的 UUID；与 OTel `prompt.id` 同值 |
| `permission_mode` | string? | 当前权限模式 |
| `agent_id` | string? | **仅当 hook 从 subagent 内触发时存在**（如 AgentTool worker 调的工具）；主线程不填 |
| `agent_type` | string? | agent 类型名；subagent 内存在，或 `--agent` 会话的主线程存在（此时无 `agent_id`） |
| `effort` | `{ level }?` | 当前回合的 effort 等级；支持 effort 的模型 + 工具上下文事件才有 |
| `scratchpad_dir` | string? | 部分场景（`yc()` 里可见） |

### 4.2 各事件专属字段（节选关键事件）

| 事件 | 专属字段 |
| --- | --- |
| **PreToolUse** (`Dq`) | `hook_event_name`, `tool_name`, `tool_input`, `tool_use_id`, `mcp_server?` |
| **PermissionRequest** (`kq`) | 同 PreToolUse + `permission_suggestions?` |
| **PostToolUse** (`Lq`) | 同 PreToolUse + `tool_response`, `duration_ms?`（**不含权限提示和 hook 耗时**） |
| **PostToolUseFailure** (`xq`) | PreToolUse + 错误信息字段 |
| **PostToolBatch** (`Vq`) | `tool_calls: ToolCall[]`（一批全部结束后**只触发一次**；PostToolUse 是每个工具触发、可能并发） |
| **PermissionDenied** (`Gq`) | `tool_name`, `tool_input`, `tool_use_id`, `reason`, `mcp_server?` |
| **Notification** (`jq`) | `message`, `title?`, `notification_type` |
| **UserPromptSubmit** (`Bq`) | `prompt`, `source?`（`user`/`sdk`/`system`/`loop_wakeup`/`schedule_wakeup`/`poll_event`）, `session_title?` |
| **UserPromptExpansion** (`Hq`) | `expansion_type`（`slash_command`/`mcp_prompt`）, `command_name`, `command_args`, `command_source?`, `prompt` |
| **SessionStart** (`qq`) | `source`（`startup`/`resume`/`clear`/`compact`/`fork`）, `agent_type?`, `model?`, `session_title?`, `seconds_since_last_response?`, `context_tokens?`, `prompt_cache_likely_expired?`, `estimated_cache_write_usd?` |
| **SessionEnd** (`f0`) | `reason`（`clear`/`resume`/`logout`/`prompt_input_exit`/`other`） |
| **Setup** (`Kq`) | `trigger`（`init`/`maintenance`） |
| **Stop** (`Fq`) | `stop_hook_active`, `last_assistant_message?`, `background_tasks?`, `session_crons?` |
| **StopFailure** (`Yq`) | `error`, `error_details?`, `last_assistant_message?` |
| **SubagentStart** (`Wq`) | `agent_id`, `agent_type` |
| **SubagentStop** (`$q`) | `stop_hook_active`, `agent_id`, `agent_transcript_path`, `agent_type`, `last_assistant_message?`, `background_tasks?`, `session_crons?` |
| **PreCompact** (`Xq`) | `trigger`（`manual`/`auto`）, `custom_instructions: string\|null` |
| **PostCompact** (`Qq`) | `trigger`, `compact_summary` |
| **PreModelSwitch / PostModelSwitch** | `from_model`, `to_model`（及若干上下文） |
| **TeammateIdle / TaskCreated / TaskCompleted** | 任务/队友相关字段 |
| **Elicitation / ElicitationResult** | `elicitation_id?`, `mode?`（`form`/`url`）, `action`（`accept`/`decline`/`cancel`）, `content?` |
| **ConfigChange** (`l0`) | `source`（`user_settings`/`project_settings`/`local_settings`/`policy_settings`/`skills`）, `file_path?` |
| **InstructionsLoaded** (`u0`) | `file_path`, `memory_type`（`User`/`Project`/`Local`/`Managed`）, `load_reason`, `globs?`, `trigger_file_path?`, `parent_file_path?` |
| **WorktreeCreate** (`h0`) | `name` |
| **WorktreeRemove** (`p0`) | `worktree_path` |
| **CwdChanged** (`_0`) | `old_cwd`, `new_cwd` |
| **FileChanged** (`m0`) | `file_path`, `event`（`change`/`add`/`unlink`） |
| **DirectoryAdded** (`E0`) | `directory`, `source`（`slash_command`/`register_repo_root`） |
| **MessageDisplay** (`g0`) | `turn_id`, `message_id`, `index`, `final`, `delta`（流式显示，**只影响展示，不改模型看到的内容**） |

> 这些 schema 的 `.describe()` 文本是**权威文档**——Claude Code 自己的 hook 字段语义就写在这里。
> 想复刻时，直接照抄字段名与含义即可，不用猜。

---

## 5. Hook 输出 schema（从 stdout 读回的 JSON）[S]

定义在 `m0247_0xc49fe84.js @20482`（`P2()`）。

### 5.1 公共字段 `P2()`

| 字段 | 类型 | 语义 |
| --- | --- | --- |
| `continue` | boolean? | hook 跑完后是否继续（默认 true） |
| `suppressOutput` | boolean? | 隐藏 stdout（不进 transcript，默认 false） |
| `stopReason` | string? | `continue:false` 时显示的消息 |
| `decision` | `"approve"\|"block"`? | 粗粒度决策 |
| `reason` | string? | 决策解释 |
| `systemMessage` | string? | 给用户看的警告消息 |
| `terminalSequence` | string? | 让 Claude Code 代发的终端转义序列（只允许 OSC 0/1/2/9/99/777 和 BEL） |
| `hookSpecificOutput` | object? | **事件专属输出**（见 §5.2），判别键是 `hookEventName` |

`O2()`（`m0247 @20481`）= `z(["allow","deny","ask","defer"])`。

### 5.2 `hookSpecificOutput` 各事件变体（`m0247 @20482` 内）

| `hookEventName` | 可用字段 |
| --- | --- |
| **PreToolUse** | `permissionDecision: allow\|deny\|ask\|defer`, `permissionDecisionReason`, `updatedInput`, `additionalContext` |
| **UserPromptSubmit** | `additionalContext`, `sessionTitle`, `suppressOriginalPrompt`（`decision:"block"` 时省略原始 prompt） |
| **UserPromptExpansion** | `additionalContext`, `suppressOriginalPrompt` |
| **SessionStart** | `additionalContext`, `initialUserMessage`, `sessionTitle`, `watchPaths`, `reloadSkills`（hook 装好的 skill 可在同一会话里立即生效） |
| **Setup** | `additionalContext` |
| **PreModelSwitch** | `permissionDecision: allow\|deny\|ask`, `permissionDecisionReason` |
| **PostModelSwitch** | `additionalContext` |
| **PostToolUse** | `additionalContext`, `classifierContext`, `updatedToolOutput`, `updatedMCPToolOutput` |
| **PostToolUseFailure** | `additionalContext` |
| **PostToolBatch** | `additionalContext` |
| **Stop** | `additionalContext` |
| **SubagentStop** | `additionalContext` |
| **PermissionDenied** | `retry` |
| **Notification** | `additionalContext` |
| **PermissionRequest** | `decision: { behavior: allow, updatedInput?, updatedPermissions? } \| { behavior: deny, message?, interrupt? }` |
| **Elicitation** | `action: accept\|decline\|cancel`, `content` |
| **ElicitationResult** | `action`, `content` |
| **CwdChanged** | `watchPaths`（要 watch 的绝对路径，触发 FileChanged hook） |
| **FileChanged** | `watchPaths` |
| **WorktreeCreate** | `worktreePath` |
| **MessageDisplay** | `displayContent`（替代 delta 显示；省略或原样返回则显示原文） |

### 5.3 async 输出标记 `P9()`

`m0247 @20582`：

```js
P9 = () => $e([ { async: true, asyncTimeout?: number }, P2() ])
```

- 首行打印 `{"async":true, "asyncTimeout": <ms>}` → handler 转后台（默认 15000ms，见 §7）。
- `tI(e)`（`m0247`）= `!("async" in e && e.async === true)` —— 判断"这是同步响应"。
- `Jme(e)`（`m0247`）= `"async" in e && e.async === true` —— 判断"这是 async 标记"。

### 5.4 输出解析与容错（`m0357`）

- `$Ve`（`m0357 @98345`）：把 stdout 解析成 hook 输出。
  - 不以 `{` 开头 → 当**纯文本**（plain text，非 JSON）；
  - 以 `{` 开头但非法 JSON → 报错并**当作纯文本**，附提示"用 JSON encoder 生成，别手工拼字符串"；
  - 多个 JSON 文档拼在一起（`ZRo`）→ 当纯文本；
  - 成功 → 走 `PLt` 做 schema 校验。
- `hq`（`m0357 @98451`）：把**已校验的 JSON**翻译成内部 hook 结果对象：
  - `continue:false` → `preventContinuation=true`（+ `stopReason`）；
  - `decision:"approve"` → `permissionBehavior="allow"`；`decision:"block"` → `permissionBehavior="deny"` + `blockingError`；
  - `hookSpecificOutput.hookEventName` 必须等于当前事件，否则抛错；
  - PreToolUse 的 `permissionDecision` 映射到 `allow/deny/ask/defer`；
  - `updatedInput` / `updatedToolOutput` / `updatedMCPToolOutput` / `additionalContext` / `classifierContext` 逐事件搬运；
  - 最终产出 `message`：有 `blockingError` → `hook_blocking_error`，否则 `hook_success`。
- `q9`（`m0357 @31480`）：输出里有**未识别键**时告警（还会提示 `additionalContext` 应该放在 `hookSpecificOutput` 里）。

### 5.5 HTTP hook 的输出解析

`eZt`（`m0357 @98415`）：HTTP hook **必须返回 JSON**；空 body 当空 JSON 对象 `{}`；非 JSON body 报错。
也就是说 http hook 与 command hook 不同——**不允许纯文本**。

### 5.6 exit code 语义（最关键的一条）

`m0357 @100898`–`@101130` 的判定（`mr.status` 是子进程退出码）：

| 退出码 | 语义 | 结果 |
| --- | --- | --- |
| **0** | 成功 | 若 stdout 是合法 JSON → 解析成控制指令；否则纯文本（成功附件） |
| **2** | **阻塞错误（blocking）** | stderr 反馈给模型 / 拦截动作（`blockingError`）；PreToolUse 上等于 deny |
| **其它非零** | **非阻塞错误** | stderr 只给用户看（`hook_non_blocking_error`），不喂模型，不拦截 |
| 超时/取消 | `hook_cancelled`（`timedOut:true`, `timeoutMs`） | 不计成功/失败 |
| spawn 失败 | `hook_error_during_execution` | 非阻塞错误 |

> 注意细节：`exit code 2 + 合法 JSON` 且 JSON 里没自带 `blockingError` 时，会用 stderr 合成一个 `blockingError`。
> 另外 `DNn`（`m0357 @99137`）特判：Stop/SubagentStop/TaskCompleted/TeammateIdle（或插件的 UserPromptSubmit）
> 退出码 2 但 stdout 为空、stderr 像 "no such file / can't open" 时，当作非阻塞（避免把"脚本找不到"误判成"故意拦截"）。

---

## 6. 执行链路（核心）[S]

全部在 `m0357_0xc63ba04.js`。调用栈（自上而下）：

```
事件发生
  └─ kE(e)                        @100044   分派：function-hook 链 还是 classic hooks
       ├─ Yxo(e,n)                @100050   function-hook 链（Tvn）→ 再跑 classic hooks
       └─ WLt(e)                  @100072   async generator 包装（Kxo 事件 await 让出）
            └─ RLt(e)             @100090   for await (Xxo) yield* NNn
                 ├─ Xxo(e)        @100160   ★主执行 generator：信任检查 / 匹配 / 跑 / 收集
                 │    └─ s0(...)  @98714   ★单个 handler 的 spawn/执行
                 └─ NNn(e,n)      @100095   agent 上下文过滤
                      └─ HNn(e,n) @100139   confined session 过滤（拒绝 hook 授 allow）
```

### 6.1 分派 `kE`（`@100044`）

```js
async function* kE(e) {
  let { hookInput: n } = e;
  if (!e.classicChainMember && !e.managedHooksOnly && !e.sessionFunctionHooksOnly
      && n.hook_event_name !== "PreToolUse" && bQe(n.hook_event_name)) {
    yield* Yxo(e, n);   // 先走 function-hook 链
    return;
  }
  yield* WLt(e);        // 直接走 classic hooks
}
```

- `bQe(e)`（`@29410`）= `v0n(e) && Vp("classic." + e)` —— 该事件是否注册了 function hook（内置函数 hook）。
- 只有非 PreToolUse、非 managedOnly、非 sessionFunctionOnly、且该事件有 function hook 时，才走 `Yxo`。
- PreToolUse 永远直接走 classic（function hook 在 PreToolUse 上有别的入口）。

### 6.2 `WLt` / `RLt` / `NNn`（`@100072`–`@100139`）

- `WLt`：如果事件属于 `Kxo`（§3.1），每 yield 一次前 `await fb()` 让出事件循环；否则直接透传。
- `RLt`：`for await (let n of Xxo(e)) yield* NNn(e, n)`。
- `NNn`：若不在 agent 上下文，原样 yield；否则**只保留**一批允许从 subagent 冒泡上去的字段
  （`permissionBehavior`、`hookPermissionDecisionReason`、`updatedInput`、`preventContinuation`、
  `stopReason`、`hookSource`、`updatedToolOutput`、`updatedMCPToolOutput`，以及 PreToolUse 的 `blockingError`）。
- `HNn`：confined session 里，把 hook 给出的 `allow` 一律丢弃（只接受命令行来的授权）。

### 6.3 主执行 `Xxo`（`@100160`）

入参（解构）：`session, hookInput, extendedHookInput, toolUseID, matchQuery, signal, timeoutMs=Na,
toolUseContext, sessionHooks, messages, forceSyncExecution, suppressPerInvocationTelemetry,
managedHooksOnly, skipSessionFunctionHooks, sessionFunctionHooksOnly, managedHooksExcluded,
storageV5, credentials, agentContext`。

流程：

1. **workspace trust 门禁**：`if (Aie()) { t("Skipping ... workspace trust not accepted"); return; }`
   （`Aie` @98299 = `!H0()`）。
2. **解析配置来源**：`ze = toolUseContext?.sessionHooksRegistry ?? sessionHooks`。
3. **cloud 会话**：若 `remoteCall` 存在，先算哪些 hook 属于本机（`Mxo`），得到 `ownSources`。
4. **匹配**：`HLt(ze, et, Le, hookInput, tools, {...})` → 得到 `{ hook, pluginRoot, pluginId, skillRoot, hookSource, matcherIsMatchAll, ... }` 列表。
5. **过滤**：`skipSessionFunctionHooks` / `sessionFunctionHooksOnly` 决定是否只留 / 去掉 `function` 类型。
6. **空匹配直接返回**。
7. **遥测**：发 `tengu_run_hook`（`numCommands`、`numMatchAllMatchers`、`numSpecificMatchers`、`hookTypeCounts`、`pluginHookCounts`）。
8. **逐个执行**：`Bt.map(async function* (...) {...})`，对每个匹配项按类型分支：
   - `callback`：直接 `await hook.callback(...)`，把返回 JSON 走 `hq` 翻译（不经子进程）；
   - `function`：`Zxo({hook, messages, ...})`（内置函数 hook，见 §11）；
   - `prompt`：`jOt(...)`（用 LLM 评估，需 conversation context）；
   - `agent`：`tDt(...)`（跑验证 subagent；**PermissionRequest 上不支持**）；
   - `http`：`K7t(...)`（POST，见 §6.5）；
   - `mcp_tool`：调 MCP 工具，返回体走 `$Ve` 解析；
   - `command` / `script`：`s0(...)` spawn 子进程（见 §6.4）。
9. **收集**：把每个 handler 的 yield 汇总，产出 attachments、system message、控制字段。
10. **遥测**：`tengu_repl_hook_finished`（`numSuccess` / `numBlocking` / `numNonBlockingError` / `numCancelled` / `totalDurationMs`）。

### 6.4 单个 command handler 的 spawn `s0`（`@98714`）

签名：`async function s0(e, n, r, s, g, h, S, w, D, F, W, V, ge, ye, ke, ve, xe, Pe, Oe)`。
按调用点（`@100860`）对应：

| 形参 | 含义 |
| --- | --- |
| `e` | hook 配置（command / args / shell / timeout / async / …） |
| `n` | hookEvent（`"PreToolUse"` …） |
| `r` | hookName（如 `"PreToolUse:command"`） |
| `s` | **hook 输入 JSON 字符串**（写 stdin 的内容） |
| `g` | envContext |
| `h` | project |
| `S` | cwd（`spawnCwd`） |
| `w` | AbortSignal |
| `D` | hookId（uuid） |
| `F` | index（第几个 hook） |
| `W` / `V` / `ge` | pluginRoot / pluginId / skillRoot |
| `ye` | `forceSyncExecution`（强制不转后台） |
| `ke` / `ve` | envExtra / envBase（base/omit/shellPrefix/spawnCwd） |
| `xe` / `Pe` / `Oe` | storageV5 / credentials / … |

关键行为：

1. **shell 选择**：`ft = e.shell ?? HB()`；`Xe = (ft === "powershell")`；`ze = (platform === "windows")`。
   - 无 `args` 且 PowerShell：把命令做 `oAo` 转义；若引用 `$CLAUDE_PROJECT_DIR` 会告警（PowerShell 读成 `$null`，应改用 `$env:CLAUDE_PROJECT_DIR` 或 `${CLAUDE_PROJECT_DIR}`）。
   - Windows 无 Git Bash 且要 bash → 抛错，提示装 Git for Windows 或加 `"shell":"powershell"`。
2. **占位符展开**（`@98740` 起）：
   - exec 形式（有 `args`）：对 `command` 和每个 `arg` **逐元素**替换
     `${CLAUDE_PROJECT_DIR}` → projectDir、`${CLAUDE_PLUGIN_ROOT}` → pluginRoot、
     `${CLAUDE_PLUGIN_DATA}` → pluginData、`${user_config.*}` → 插件用户配置；
   - shell 形式：若命令里用了 `${user_config.*}`，直接抛错（防止替换值被 shell 二次解析），要求改 exec 形式或用 `$CLAUDE_PLUGIN_OPTION_<KEY>` 环境变量。
3. **插件校验**：引用 `${CLAUDE_PLUGIN_ROOT}`/`${CLAUDE_PLUGIN_DATA}` 但没有插件上下文 → 抛错；插件目录不存在 → 抛错。
4. **spawn**（`@98820` 附近）：
   - exec 形式：`dre(command, args, { env, cwd, shell:false, detached, windowsHide:true, ...LKe(n) })`；
   - shell 形式：Windows 用 Git Bash 时 `shell = gitBashPath`（且 `gmn(kn, gitBashPath)` 把路径塞进环境），否则 `shell = true`。
5. **hook 输入写入 stdin**：`Wn.stdin.write(s + "\n", "utf8"); Wn.stdin.end()`。
   - EPIPE（子进程提前关 stdin）会被捕获，返回 `status:1` + `"Hook command closed stdin before hook input was fully written (EPIPE)"`。
   - `ABORT_ERR` → `aborted:true`，stderr=`"Hook cancelled"`。
6. **stdout/stderr 流式收集**：`Wn.stdout.on("data", Ur)` / `Wn.stderr.on("data", ls)`；同时通过 `G9` 每秒发 `hook_progress`。
7. **异步检测**（见 §7）。
8. **超时/取消**：`Ao(signal, { timeoutMs })` 组合外部 signal 与 `timeout*1000`。默认 `S = Na = 600000`（**10 分钟**，`m0357 @96183`）；单个 hook 可用配置里的 `timeout`（秒）覆盖。
9. **退出**：`Wn.on("close", ...)` 汇总 `{ stdout, stderr, output, status, aborted, exitedNormally, ... }`。
10. **收尾**：`finally` 里停 progress 轮询、kill 还在跑的 task、cleanup。

### 6.5 HTTP handler `K7t`（`@` Xxo 内 `Sn.type==="http"` 分支）

- 发 `W9(hookId, hookName, event)`（hook_started）；
- POST hook 输入 JSON 到 `url`；
- 受 `allowedHttpHookUrls` 白名单限制（`m0357 @96345`/`@96372`：URL 不匹配任何 pattern → `"HTTP hook blocked: ... does not match any pattern in allowedHttpHookUrls"`）；
- header 里 `$VAR` 插值只对 `allowedEnvVars` 生效；
- 返回体必须 JSON（`eZt`）；`ok:false`/`error`/非 2xx → `hook_non_blocking_error`；aborted → `hook_cancelled`。

### 6.6 环境变量与占位符（汇总）

| 名字 | 作用 |
| --- | --- |
| `${CLAUDE_PROJECT_DIR}` | 项目根 |
| `${CLAUDE_PLUGIN_ROOT}` | 插件根（仅插件 hook 可用） |
| `${CLAUDE_PLUGIN_DATA}` | 插件数据目录（仅插件 hook 可用） |
| `${user_config.*}` | 插件用户配置（**仅 exec 形式可用**） |
| `CLAUDE_PLUGIN_OPTION_<KEY>` | 插件选项环境变量（shell 形式也可读） |
| `CLAUDE_CODE_SHELL_PREFIX` | shell 前缀（cloud/remote 场景注入） |
| `CLAUDE_SCRIPT_HOOK_ACK` | `avr`（`m0247 @22340`），script hook 的 ack 环境变量 |
| `CLAUDE_EFFORT` | 当前 effort（与 hook 输入的 `effort.level` 同源） |

### 6.7 匹配与去重 `HLt`（`@99902`）

- 先 `d0(registry, query, event, {managedHooksOnly, ...})` 拿所有 matcher 条目；
- 对每个条目按 `OLt(event)` 取匹配字段，用 `GIe` 判断 matcher；
- 展开成 `{ hook, pluginRoot, pluginId, skillRoot, hookSource, matcherIsMatchAll }`；
- **按类型分别去重**（`Map` key 用 `t0(entry, 内容指纹)`）：command/prompt/agent/http/mcp_tool/script 各去重，callback/function 不去重；
- **`if` 过滤**：若有任何 hook 带 `if`，先 `xxo(event, tools)` 建一个判定器（解析权限规则、拿工具的 inputSchema），逐个判断；
- SessionStart / Setup 上**跳过 HTTP hook**（打印 `"HTTP hooks are not supported for ..."`）。

---

## 7. 异步 hook [S]

有两种进入后台的方式：

### 7.1 配置声明 `async`

`command` hook 配置里 `async:true`（或 `asyncRewake` 隐含）→ `s0` 在写 stdin 后立即 `wLt({...})` 注册到异步注册表，返回 `{ backgrounded:true, status:0 }`。
`asyncRewake` 额外记 `asyncRewake/rewakeMessage/rewakeSummary`：退出码 2 时唤醒模型。

### 7.2 stdout 首行 JSON 自我转后台

`s0` 监听 stdout 第一个完整 JSON（`@98918`）：

```js
let ir = xr(Go).trim();           // 首行
if (!ir.includes("}")) return;
try {
  let Wr = J(ir);                 // JSON.parse
  if (Jme(Wr) && !forceSyncExecution) {
    // 注册后台，移除 data listener，resolve 成 backgrounded
    wLt({ processId:`async_hook_${Wn.pid}`, hookId, shellCommand:Do,
          asyncResponse:Wr, hookEvent, hookName, command, pluginId });
    gr = true;
    Wn.stdout.removeListener("data", Ur);
    Wn.stderr.removeListener("data", ls);
    Cr?.({ stdout:Go, stderr:vr, output:Sn, status:0, backgrounded:true });
  }
} catch {}
```

即：hook 进程先打印 `{"async":true, "asyncTimeout": <ms>}` 再继续干活，宿主就把它转后台。

### 7.3 异步注册表

- `class OJe`（`@31535`）：`pendingHooks: Map`、`undeliveredResponses: []`，
  方法 `register/get/values/size/remove/removeAll/holdResponse/takeUndeliveredResponses`。
- `qTn = new q(() => new OJe)`；`sW()` 取当前 host 的注册表。
- `DJe({processId, hookId, asyncResponse, hookName, hookEvent, command, shellCommand, toolName, pluginId})`（`@31569`）：
  - `timeout = asyncResponse.asyncTimeout || 15000`（**默认 15 秒**）；
  - 起 `G9` 每秒发 `hook_progress`；
  - 注册到 `sW()`，记录 `responseAttachmentSent:false`、`stopProgressInterval`。
- `LSe(e, n, r)`（`@31616`）：投递异步响应——停 progress、读 stdout/stderr、`cleanup()`、`ec({..., exitCode, outcome})`。
- `LJe(e, n)`（`@31632`）：解析异步响应的 stdout（按行），供上层消费。

---

## 8. 进度 / system 消息 / 附件 / 遥测 [S]

### 8.1 system message 子类型（`m0094 @7976/@7985/@7997`）

| subtype | 字段 |
| --- | --- |
| `hook_started` | `hook_id`, `hook_name`, `hook_event` |
| `hook_progress` | 上面 + `stdout`, `stderr`, `output` |
| `hook_response` | 上面 + `exit_code?`, `outcome`（`success`/`error`/`cancelled`） |

发射器（`m0357`）：

- `j9(event)`（`@31402`）：是否发这些 system 消息。`WTn=["SessionStart","Setup"]` 恒真；其余事件需 `MJe().allHookEventsEnabled`。
- `W9(hookId, hookName, event)`（`@31407`）：发 `hook_started`。
- `zTn({hookId, hookName, hookEvent, stdout, stderr, output})`（`@31418`）：发 `hook_progress`。
- `G9({hookId, hookName, hookEvent, getOutput, intervalMs})`（`@31432`）：默认 **1000ms** 轮询 `getOutput()`，输出有变化才发 `hook_progress`。
- `ec({hookId, hookName, hookEvent, output, stdout, stderr, exitCode?, outcome})`（`@31455`）：发 `hook_response`，同时把输出打到日志。
- `$do(e)`（`@31476`）：`MJe().setAllHookEventsEnabled(e)`。

### 8.2 进度条目（UI 层）

`Xxo` 里对每个匹配的 hook 先 yield 一条 progress 消息：

```js
{ type:"progress", data:{ type:"hook_progress", hookEvent, hookName,
  command: QA(hook),                 // 展示用命令/URL/描述
  promptText?,                       // prompt 类型
  statusMessage? },                  // 配置里的 statusMessage
  parentToolUseID, toolUseID, timestamp, uuid }
```

### 8.3 附件类型（attachment）

handler 结果最终变成下列附件之一（`m0357` 多处消费，如 `@68498` 起）：

| 附件 type | 含义 |
| --- | --- |
| `hook_success` | 成功（可带 stdout/stderr/exitCode/command/durationMs） |
| `hook_non_blocking_error` | 非阻塞错误（退出码非 0/2，或 spawn/校验失败） |
| `hook_blocking_error` | 阻塞错误（退出码 2 / `decision:"block"` / PreToolUse deny） |
| `hook_cancelled` | 取消/超时（`timedOut`、`timeoutMs`） |
| `hook_error_during_execution` | 执行期错误（如 function hook 缺 messages、输入准备失败） |
| `hook_system_message` | 给用户的 systemMessage |
| `hook_additional_context` | 追加给模型的上下文 |
| `hook_stopped_continuation` | `continue:false` 导致回合停止 |
| `hook_deferred_tool` | PreToolUse `defer`（把工具调用延后到权限请求阶段） |

### 8.4 遥测事件名

- `tengu_run_hook`（匹配后、执行前）
- `tengu_repl_hook_finished`（执行后，`numSuccess`/`numBlocking`/`numNonBlockingError`/`numCancelled`/`totalDurationMs`）
- `hook_execution_start` / `hook_execution_complete`（结构化 span 风格）
- `tengu_post_tool_hooks_cancelled` / `tengu_post_tool_hook_error`
- `tengu_stop_hook_error`（`m0560`）
- `tengu_agent_stop_hook_success`（`m0357 @96125`）
- `tengu_sdk_hook_callback_timeout`
- `session_start_hook_errors_total`（`m0365`）
- `tengu_dead_probe_hook_updated_mcp_tool_output`（`m0357 @98480` 附近）
- `tengu_remote_tool_serve_hook_held`（cloud 会话里被"扣住"的 hook）

### 8.5 性能分析（`m0625_0xce5b936.js`）

- 单工具调用 hook > **2s** → 提示；
- SessionStart / Stop hook > **10s** → 告警；
- 超时用 `hook_cancelled` + `timedOut:true` + `timeoutMs` 表达。

---

## 9. Hook 来源与优先级 [S]

### 9.1 来源枚举 `cy`（`m0247 @22300`）

| key | 描述 |
| --- | --- |
| `userSettings` | 用户设置（`~/.claude/settings.json`） |
| `projectSettings` | 项目设置（`.claude/settings.json`） |
| `localSettings` | 本地设置（`.claude/settings.local.json`） |
| `policySettings` | 管理策略（managed settings） |
| `pluginHook` | 插件 hook（`~/.claude/plugins/*/hooks/hooks.json`） |
| `sessionHook` | 内存会话 hook（临时） |
| `builtinHook` | Claude Code 内部注册的内置 hook |

### 9.2 收集函数

- `dvo(e)`（`m0247 @22402`）：把 settings 各来源的 hooks + session hooks 收集成
  `{ event, config, matcher, source }` 列表；受 `allowManagedHooksOnly` 影响。
- `A2()`（`m0247 @20371`）：`yield* HMr(), yield hqr(), yield xqr(), yield* LDo()` —— 遍历所有设置来源。
- `hT()`（`m0247 @20354`）：收集非 function 类型的 hook。
- `uvo(...)`（`m0247 @22480`）：按来源优先级给事件排序，`pluginHook`/`builtinHook` 排最后（权重 999）。

### 9.3 优先级（推断）[B]

从 `uvo` 的排序权重和 `dvo` 的收集顺序看，大致是：
**policySettings > localSettings > projectSettings > userSettings > sessionHook > pluginHook ≈ builtinHook**。
但 Claude Code 对**数组**是 **union（合并）**语义——不同来源的同名事件会叠加，而不是简单覆盖。
证据：`allowedHttpHookUrls` 的描述明确说 "Arrays merge across settings sources (same semantics as allowedMcpServers)"。

---

## 10. 安全与策略门禁 [S]

| 机制 | 键 / 位置 | 语义 |
| --- | --- | --- |
| **workspace trust** | `Aie()`（`m0357 @98299`） | 未接受信任 → 跳过所有 hook 执行（`"Skipping ... workspace trust not accepted"`） |
| **全部禁用** | `disableAllHooks`（`m0052 @5586`） | 关掉 settings 与插件里的所有 hook + statusLine；内置功能不受影响 |
| **只跑 managed** | `allowManagedHooksOnly`（`m0052 @5601`） | 只跑 managed settings 和 managed 启用的插件 hook；`disableAllHooks:true` 会隐含它（`m0052 @741`） |
| **HTTP URL 白名单** | `allowedHttpHookUrls`（`m0052 @5602`） | `*` 通配；未设=全放，空数组=全禁；数组跨来源合并 |
| **HTTP header 变量白名单** | `httpHookAllowedEnvVars` | 只有列出的环境变量能在 header 插值 |
| **只允许插件定制** | `strictPluginOnlyCustomization`（`m0052 @5608`） | 数组形式锁定具体 surface（如 `["skills","hooks"]`）；`true` 锁全部；managed + 插件不受限 |
| **confined session** | `HNn`（`m0357 @100139`） | 丢弃 hook 给出的 `allow`，只接受命令行授权 |
| **cloud 会话转发** | `cloud:"device"\|"skip"` | 控制本机 hook 是否可提供给 cloud 会话；cloud 会话里 `agent`/`prompt` hook 会被跳过 |
| **MCP tool cgroup 封顶** | `T2 = 64`（`m0247 @20388`） | 限制被 hook 引用的 MCP server 进程数；`HLe`/`Hwo`/`yrn`/`x2`/`qh` |
| **shell 注入防护** | `s0`（`m0357`） | shell 形式禁止 `${user_config.*}`；exec 形式逐元素替换；PowerShell 下 `$CLAUDE_PROJECT_DIR` 告警 |
| **terminalSequence 白名单** | `OSe`（`hq` 内） | 只允许 OSC 0/1/2/9/99/777 和 BEL |
| **HTTP hook 事件限制** | `HLt` | SessionStart / Setup 上 HTTP hook 被跳过 |

---

## 11. 内置 hook 类型（function / callback / SDK）[S]

除用户可配置的 5 种外，还有 3 种**非用户**类型：

### 11.1 `function` hook（内置函数 hook）

- 由 Claude Code 内部注册（`Vp("classic.<event>")` / `x9` / `cSe`）。
- 分派入口 `Tvn`（`m0357 @29634`）：把 managed / core / classic 几段 hook 串起来，
  用 `E0({ handlers, e, site, signal })` 跑一个 hook-runner。
- `bQe(e)`（`@29410`）= 该事件是否有 function hook；`v0n` 排除 PreToolUse。
- function hook 需要 `messages`（对话上下文），否则报 `hook_error_during_execution`（`"Messages not provided for function hook"`）。
- `Zxo`（`@102055`）是 function hook 的执行器。

### 11.2 `callback` hook

- 内存里的回调函数（`hook.callback(input, ...)`），直接把返回 JSON 走 `hq` 翻译，**不经子进程**。
- `Xxo` 里单独一个循环先跑所有 callback。

### 11.3 SDK hook（`m0094 @8514 rF`）

SDK 通过 `initialize` 的 `hooks` 字段注册：

```js
rF = () => u({
  matcher: string?,
  hookCallbackIds: string[],   // 客户端为每个 matcher 注册的 hook 函数 id
  timeout: number?,
})
// initialize: hooks: Record<EventName, rF[]>
```

触发时 CLI 发一个 `hook_callback` 控制请求，带 `callback_id`；客户端把它映射回自己的函数。
`Axo(e)`（`@99272`）：`callback`/`function` 类型永远在本机跑，`deviceForwarded !== true` 的才可能转发给 cloud。

---

## 12. 命名方法与证据等级（可复用）

本文的可读名字来源与 rewind / Agent Team 文档同法：**Bun `--compile` 只做 minify，不改字符串/属性名/schema 描述**，
所以真名只能从这四类保留物里读：

1. **导出桶**：`export { X as spawnTeammate }` 这类 `as` 后是真名（本任务里 `P9`/`P2`/`Mm` 等都是模块内名，靠上下文定位）。
2. **字符串字面量**：`type: "PreToolUse"`、`subtype:"hook_started"`、`outcome:"blocking"`。
3. **属性名**：`e.asyncRewake`、`e.hookSpecificOutput.permissionDecision`、`{ continue, suppressOutput }`。
4. **schema `.describe()` 文本**：Claude Code 把字段语义直接写进描述，是最权威的"注释"。

证据分级：

| 级别 | 含义 | 例 |
| --- | --- | --- |
| **S** | 代码里直接写死，可逐字回查 | `Mm` 事件清单、`lFo=24576`、`type:"mcp_tool"` |
| **A** | 由字符串/属性/描述强推断，几乎无歧义 | `s0` = "单个 handler 的 spawn 执行" |
| **B** | 由调用点/上下文推断，可能不精确 | 来源优先级顺序 |
| **C** | 弱推断，仅作参考 | 某内部变量的业务含义 |

本文绝大部分结论是 **S/A**；只有 §9.3 优先级是 **B**；`script` 类型属于 **A**（schema 里有但不在用户联合里）。

---

## 13. 未确定项（诚实标注）

1. **默认 timeoutMs 已确认**：`Xxo` 的 `timeoutMs = Na`，而 `Na = 600000`（`m0357 @96183`）= **10 分钟**。
   单个 hook 的 `timeout`（秒）会覆盖它。`s0` 的异步超时 `Un` 走 `asyncResponse.asyncTimeout || 15000`（§7.3）。
2. **`script` hook 的完整字段与用户可见性**：schema 校验、占位符展开、执行分支都在，但不在 `Ru()` 的 5 个 schema 里。
   可能是内部/灰度类型，也可能是较新的用户类型。**未确认**。
3. **`Mm` 事件里 `StatusLine` / `FileSuggestion`**：出现在 `jIt` 分类集，但不是 hook 事件，属于 statusLine / 文件建议子系统。
   它们是否也能配 hook **未确认**。
4. **`allowedHttpHookUrls` 的匹配语义细节**（`*` 跨路径段与否）：描述说"URL patterns + `*` wildcard"，具体匹配函数未逐行确认。
5. **来源优先级的精确顺序**：§9.3 是从 `uvo` 权重推断（B 级），合并语义（union）是 S 级。
6. **`rewakeMessage` / `rewakeSummary` 的完整消费路径**：配置字段是 S 级，唤醒模型的完整链路未逐行跟完。
7. **`hook_deferred_tool` 的完整生命周期**：`defer` → 权限请求阶段的搬运逻辑未逐行跟完。

---

## 14. 给自研 agent 的复刻要点（最小实现清单）

如果你想在自己的 agent 里实现一套等价的 hook 机制，按这个顺序做：

**必做（核心闭环）**

1. **配置模型**：`hooks: Record<event, { matcher?, hooks: Handler[] }[]>`；Handler 至少支持 `command`（最重要）。
2. **事件模型**：先实现高频事件 `PreToolUse` / `PostToolUse` / `UserPromptSubmit` / `Stop` / `SessionStart`，
   其余按需扩展（本文 §3 是完整清单）。
3. **输入协议**：把 `{ ...公共字段, hook_event_name, ...事件字段 }` 序列化成 JSON，写 handler 的 **stdin**。
   公共字段至少给 `session_id` / `transcript_path` / `cwd` / `permission_mode`。
4. **输出协议**：从 handler 的 **stdout** 读 JSON，支持 `continue` / `decision` / `reason` / `systemMessage` /
   `hookSpecificOutput`（先实现 PreToolUse 的 `permissionDecision` + `updatedInput` + `additionalContext`）。
5. **退出码语义**：`0`=成功、`2`=阻塞（stderr 喂模型/拦截）、其它非零=非阻塞（stderr 给用户）。**这条是 hook 的灵魂**。
6. **超时 + 取消**：每个 handler 有 `timeout`（秒），默认一个合理值；超时发 `hook_cancelled`。
7. **匹配器**：支持 `*`/`.*`=全部、名字集合（`|`/`,`）、正则三种。
8. **并行执行**：同一事件匹配到的多个 handler **并行**跑（注意：Claude Code 的 PostToolUse hook 是并发的，
   `updatedToolOutput` 的多个改写是 last-write-wins）。

**推荐（体验/安全）**

9. **进度反馈**：handler 运行期间定期把 stdout/stderr 发成 `hook_progress`（Claude Code 是 1s 轮询）。
10. **异步 hook**：支持配置 `async:true`，以及 stdout 首行 `{"async":true,"asyncTimeout":ms}` 自我转后台（默认 15s）。
11. **来源分层**：user / project / local / policy / plugin / session 分层，数组 union 合并。
12. **安全门禁**：workspace trust、全局禁用开关、只跑 managed、HTTP URL 白名单、shell 注入防护（
    禁止 shell 形式插值用户配置、exec 形式逐元素替换占位符）。
13. **占位符**：`${PROJECT_DIR}` / `${PLUGIN_ROOT}` / `${PLUGIN_DATA}` 等。

**可延后**

14. `prompt` / `agent` / `http` / `mcp_tool` 类型的 handler；
15. function / callback / SDK hook（内置钩子）；
16. cloud 会话转发、MCP tool cgroup 封顶、terminalSequence 白名单。

---

## 15. 专项可读化副本 `deminified-hooks/`

上面 §6 引用的 `s0` / `kE` / `Xxo` / `WLt` 等压缩名，已有一套**作用域安全改名**的可读副本：

| 文件 | 角色 | 改名数 |
| --- | --- | ---: |
| `reconstructed/deminified-hooks/m0357_0xc63ba04.js` | 执行引擎 | 117 |
| `reconstructed/deminified-hooks/m0247_0xc49fe84.js` | 输出 schema + 来源 + 分类 | 43 |
| `reconstructed/deminified-hooks/m0094_0xc0d9ae5.js` | 输入 schema | 36 |
| `reconstructed/deminified-hooks/m0052_0xbfaae5d.js` | 配置 schema | 8 |

常用符号对照（完整表见 `reconstructed/deminified-hooks/README.md`）：

| 本文里的压缩名 | 可读副本里的名字 |
| --- | --- |
| `s0` | `runCommandHook` |
| `kE` | `dispatchHookEvent` |
| `Xxo` | `executeHookEvent` |
| `WLt` / `RLt` | `runClassicHooksGenerator` / `runHookGenerators` |
| `HLt` | `matchHooks` |
| `hq` | `interpretHookOutput` |
| `$Ve` | `parseHookOutput` |
| `OJe` | `AsyncHookRegistry` |
| `DJe` | `registerAsyncHook` |
| `W9` / `zTn` / `ec` | `emitHookStarted` / `emitHookProgress` / `emitHookResponse` |
| `Na` | `DEFAULT_HOOK_TIMEOUT_MS` |
| `P2` / `P9` / `O2` | `HookOutputSchema` / `HookOutputOrAsyncMarkerSchema` / `HookPermissionDecisionSchema` |
| `cy` | `HOOK_SOURCES` |
| `v` | `HookInputBaseSchema` |
| `Dq` | `PreToolUseHookInputSchema` |
| `Mm` | `HOOK_EVENT_NAMES` |
| `lFo` | `HOOK_OUTPUT_MAX_BYTES` |

- 复现：`cd reconstructed/tools && node hooks-rename.mjs && node verify-hooks-semantic.mjs`
- 语义复验 0 差异（节点类型 / 字符串 / 数字 / 属性键）。
- 注意：**函数体内的局部变量仍是短名**（Babel 只改模块级绑定）；导出名保持不变。

---

## 附：一图看懂（文字版）

```
settings.json / plugin / session
        │  hooks: { <event>: [ {matcher, hooks:[...]} ] }
        ▼
   事件触发 ──► kE 分派 ──► Xxo 主执行
        │                     │  Aie(): workspace trust?
        │                     │  HLt(): 匹配 + if 过滤 + 去重
        │                     ▼
        │            对每个 handler 并行:
        │              command → s0(): spawn, stdin=输入JSON
        │              http    → K7t(): POST 输入JSON
        │              prompt  → jOt(): LLM 判定
        │              agent   → tDt(): 验证 subagent
        │              mcp_tool→ 调 MCP
        │              callback/function → 直接调用
        │                     │
        │              stdout JSON + exit code
        │                     ▼
        │             hq(): JSON → 内部结果
        │             exit 0 / 2 / 其它
        │                     ▼
        └───────────── 附件: hook_success / hook_blocking_error /
                        hook_non_blocking_error / hook_cancelled /
                        hook_additional_context / hook_stopped_continuation ...
```

> 本文基于 `reconstructed/deminified/` 与 `claudecode283/modules/` 原文写成；
> 所有坐标可用 `grep -n` 回查。未确定项见 §13，不要当成结论使用。
