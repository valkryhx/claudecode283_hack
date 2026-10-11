# `deminified-hooks/` — hooks 机制专项可读化副本

这是 hooks 子系统的**作用域安全重命名副本**，不是替代 `deminified/` 的版本。
原始模块仍完整保留在 `reconstructed/deminified/`；本目录只把已找到强证据的
hooks 关键绑定改成可读名，方便人和 agent 直接复刻。

来源剖析：`claudecode283/extracted/hooks-internals.md`。

## 为什么是这 4 个模块

| 文件 | 角色 | 为什么需要改名 |
| --- | --- | --- |
| **`m0357_0xc63ba04.js`** | **执行引擎**（spawn / 匹配 / 异步 / 进度 / 分发） | 5.4MB，被 deminify 的 ">1MB 跳过" 规则跳过，**符号全是压缩名** |
| **`m0247_0xc49fe84.js`** | **输出 schema** + 来源枚举 + 事件分类 | 1.3MB，同样被跳过，**符号全是压缩名** |
| `m0094_0xc0d9ae5.js` | **输入 schema** + system 消息 | 已 deminified，但 hooks 绑定仍是短名（`v`/`Dq`/`kq`…） |
| `m0052_0xbfaae5d.js` | **配置 schema** + 事件清单 `Mm` | 已 deminified，但外层函数仍是短名（`Ru`/`xAe`/`on`…） |

## 改名统计

| 文件 | 改名数 |
| --- | ---: |
| `m0357_0xc63ba04.js` | 117 |
| `m0247_0xc49fe84.js` | 43 |
| `m0094_0xc0d9ae5.js` | 36 |
| `m0052_0xbfaae5d.js` | 8 |
| **合计** | **204** |

## 改名表（按子系统分类）

### `m0357` — 执行引擎

**分派 / generator**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `kE` | `dispatchHookEvent` | 推断：`bQe` 分流 function-hook 链 vs classic |
| `WLt` | `runClassicHooksGenerator` | 推断：`Kxo` 事件前 `await fb()` |
| `RLt` | `runHookGenerators` | 推断：`for await (Xxo) yield* NNn` |
| `NNn` | `filterAgentContextHookResult` | 推断：只放行可冒泡字段 |
| `HNn` | `enforceConfinedSessionHookResult` | 权威（日志）：`PermissionRequest allow ignored: a confined session...` |
| `Xxo` | `executeHookEvent` | 推断：主执行 generator |
| `Yxo` | `runFunctionHookChain` | 推断：`Tvn` → `WLt` |
| `BA` | `runClassicHooks` | 推断：带 `tier` 的 classic 入口 |
| `FNn` | `resolveHookCwd` | 权威（日志）：`working directory ... no longer exists; running hooks from ...` |
| `Vbr` | `runDeviceHook` | 推断：cloud 设备转发 hook |
| `CLt` | `shouldYieldBeforeHooks` | 推断 |
| `jLt` | `formatHookName` | 推断：`event:query` |
| `s0` | `runCommandHook` | 推断：单个 command/script handler 的 spawn |

**匹配**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `HLt` | `matchHooks` | 权威（日志）：`Getting matching hook commands for ...` |
| `d0` | `collectHookConfigs` | 推断：收集 managed/classic/function hooks |
| `OLt` | `getMatcherQuery` | 推断：事件 → 匹配字段 |
| `GIe` | `matcherMatches` | 推断：matcher 判定 |
| `_xo` | `parseMatcherNameSet` | 推断：`|`/`,` 名字集合 |
| `DLt` | `getMatcherFamilyNames` | 推断：MCP 家族名 |
| `Cxo` | `getMatcherFamilyParent` | 推断 |
| `jIe` | `normalizeMatcherQuery` | 推断：去掉 `[1m]`/`[2m]` |
| `xxo` | `buildIfConditionEvaluator` | 推断：`if` 权限规则判定器 |
| `LLt` | `getToolPermissionMatcherInfo` | 推断 |
| `Txo` | `warnMatcherMatchesNoTool` | 权威（日志）：`Hook matcher ... matches no tool` |
| `Kbr` | `hookMatcherMatchesInput` | 推断 |
| `qbr` | `toolInputMatchesPermissionRule` | 推断 |
| `Bmo` | `hasMatchingHookForTool` | 推断 |
| `mR` | `hookPatternForEvent` | 推断 |
| `PAt` | `hasRegisteredHookForEvent` | 推断 |
| `Lxo` | `sameHookDefinition` | 推断：hook 定义相等 |
| `Nxo` | `findHookDefinitionOwner` | 推断：反查 hook 属于哪个来源 |
| `Fxo` | `isProjectConfiguredHook` | 推断 |
| `$Lt` | `isInternalCallbackHook` | 推断 |
| `t0` | `hookDedupKey` | 推断：`pluginRoot/skillRoot + 指纹` |
| `Exo` | `MATCHER_NAME_SET_REGEX` | 推断：名字集合正则 |
| `WIe` | `TOOL_HOOK_EVENTS` | 推断：带 tool_name 的事件集 |
| `$Re` | `MCP_MATCHER_WARN_EVENTS` | 推断 |
| `kxo` | `isMcpMatcherName` | 推断 |

**输出解析**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `hq` | `interpretHookOutput` | 推断：JSON → 内部结果 |
| `$Ve` | `parseHookOutput` | 权威（日志）：`Hook output does not start with {` |
| `MLt` | `getHookResultStdout` | 推断 |
| `Z7t` | `augmentHookValidationError` | 推断 |
| `eZt` | `parseHttpHookBody` | 权威（日志）：`HTTP hook must return JSON` |
| `MNn` | `isAsyncMarkerOutput` | 推断 |
| `ZRo` | `isJsonLinesHookOutput` | 推断 |
| `hxo` | `mergeResultStdout` | 推断 |
| `vLt` | `hookRanByContract` | 推断：正常退出判定 |
| `ILt` | `scriptHookRan` | 推断 |
| `HIe` | `makeScriptHookBlockingError` | 推断 |
| `pre` | `describeHookExit` | 推断 |
| `DNn` | `isBenignMissingFileError` | 推断 |
| `ure` | `emitHookTerminalSequence` | 推断 |
| `OSe` | `sanitizeTerminalSequence` | 推断：OSC 白名单 |

**各类型 handler runner**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `jOt` | `runPromptHook` | 推断 |
| `tDt` | `runAgentHook` | 推断 |
| `K7t` | `runHttpHook` | 推断 |
| `Zxo` | `runFunctionHook` | 推断 |
| `Tvn` | `runFunctionHookChainInternal` | 推断 |
| `Pvn` | `runSessionFunctionHooks` | 推断 |
| `bQe` | `hasFunctionHook` | 推断 |
| `v0n` | `isFunctionHookEvent` | 推断 |
| `cSe` | `classicHookName` | 推断：`classic.${event}` |
| `x9` | `classicHookPattern` | 推断 |
| `yWo` | `isClassicHookLoaded` | 推断 |
| `$Qe` | `makeManagedOrCoreHookHandler` | 推断 |
| `Avn` | `mergeFunctionHookResults` | 推断 |
| `O9` | `functionHookResultToBlock` | 推断 |
| `rL` | `lastNonEmptyLine` | 推断 |
| `Cvn` | `lastLine` | 推断 |
| `FQe` | `makeBlockedHookResult` | 推断 |
| `BQe` | `makeSucceededHookResult` | 推断 |
| `Rdo` | `isHookAttributionKind` | 推断 |
| `SMe` | `truncateWithBudget` | 推断 |
| `Bvn` | `formatAttributionLabel` | 推断 |
| `Nvn` | `HOOK_ATTRIBUTION_KINDS` | 推断 |
| `Fvn` / `$vn` | `ATTRIBUTION_MIN_WIDTH` / `ATTRIBUTION_MAX_WIDTH` | 推断 |

**cloud / served call**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `Axo` | `canForwardHook` | 推断 |
| `Pxo` | `makeHeldModelHookResult` | 推断 |
| `Bxo` | `makeHeldServedCallHookResult` | 推断 |
| `NLt` | `recordHeldHookTelemetry` | 权威（遥测）：`tengu_remote_tool_serve_hook_held` |
| `Mxo` | `buildServedCallReach` | 推断 |
| `Oxo` | `judgeServedCallHook` | 推断 |
| `Uxo` | `rewriteBlockingErrorCommand` | 推断 |
| `Hxo` | `refuseUnverifiableServedCallHook` | 权威（日志）：`refusing rather than skipping that gate` |

**进度 / 异步 / 终端**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `OJe` | `AsyncHookRegistry` | 推断：`pendingHooks` Map |
| `DJe` | `registerAsyncHook` | 权威（日志）：`Registering async hook` |
| `LSe` | `deliverAsyncHookResponse` | 推断 |
| `LJe` | `parseAsyncHookResponse` | 推断 |
| `W9` | `emitHookStarted` | 权威（字面量）：`subtype:"hook_started"` |
| `zTn` | `emitHookProgress` | 权威：`subtype:"hook_progress"` |
| `G9` | `startHookProgressPolling` | 推断：1s 轮询 |
| `ec` | `emitHookResponse` | 权威：`subtype:"hook_response"` |
| `j9` | `shouldEmitHookSystemMessage` | 推断 |
| `$do` | `setAllHookEventsEnabled` | 推断 |
| `q9` | `warnUnrecognizedHookOutputKeys` | 权威（日志）：`unrecognized keys (ignored)` |
| `IJe` | `validateAsyncHookOutput` | 推断 |
| `rW` | `describeJsonValueType` | 推断 |
| `PJe` | `HookEventsSettings` | 推断 |
| `GTn` | `hookEventsSettingsStore` | 推断 |
| `MJe` | `getHookEventsSettings` | 推断 |
| `WTn` | `ALWAYS_EMITTED_HOOK_EVENTS` | 推断：`["SessionStart","Setup"]` |
| `qTn` | `asyncHookRegistryStore` | 推断 |
| `sW` | `getAsyncHookRegistry` | 推断 |
| `wLt` | `registerBackgroundHookProcess` | 推断 |
| `AJe` | `TerminalSequenceWriter` | 推断 |
| `jTn` | `terminalSequenceWriterStore` | 推断 |
| `H9` | `getTerminalSequenceWriter` | 推断 |
| `DSe` | `writeTerminalSequence` | 推断 |
| `nyr` | `setTerminalSequenceWriter` | 推断 |
| `ryr` | `unregisterTerminalSequenceWriter` | 推断 |

**常量 / 其它**

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `Na` | `DEFAULT_HOOK_TIMEOUT_MS` | 权威（值）：`600000` |
| `Kxo` | `HOOK_EVENTS_NEEDING_YIELD` | 推断：`Kxo` 事件集 |
| `Aie` | `isWorkspaceUntrusted` | 权威（日志）：`workspace trust not accepted` |
| `sxo` | `pluginDirectoryExists` | 推断 |
| `Qxo` | `WARNED_HOOK_CWD_FALLBACKS` | 推断 |
| `$xo` | `isAnchorableHookPath` | 推断 |

### `m0247` — 输出 schema / 来源 / 分类

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `P2` | `HookOutputSchema` | 推断：公共输出字段 |
| `P9` | `HookOutputOrAsyncMarkerSchema` | 推断：async 标记 ∪ 输出 |
| `O2` | `HookPermissionDecisionSchema` | 权威（枚举）：`allow/deny/ask/defer` |
| `tI` | `isSyncHookOutput` | 推断 |
| `Jme` | `isAsyncHookOutputMarker` | 推断 |
| `cy` | `HOOK_SOURCES` | 权威（描述）：`User settings (~/.claude/settings.json)` 等 |
| `dvo` | `collectAllHookConfigs` | 推断 |
| `A2` | `iterateSettingsSources` | 推断 |
| `hT` | `collectNonFunctionHooks` | 推断 |
| `jIt` | `HOOK_EVENTS_WITHOUT_TOOL_CGROUP` | 推断 |
| `LKe` | `hookToolCgroupCategory` | 推断 |
| `D2` | `LOCAL_BLOCKING_HOOK_EVENTS` | 推断 |
| `I2` | `LOCAL_BLOCKING_HOOK_EVENT_SET` | 推断 |
| `L2` | `HOOK_EVENT_EXECUTION_LOCATION` | 推断 |
| `EV` | `isLocalBlockingHookEvent` | 推断 |
| `Fwo` | `getHookEventExecutionLocation` | 推断 |
| `N2` | `FILE_EDIT_TOOL_NAMES` | 推断：`Write/Edit/MultiEdit/NotebookEdit` |
| `_T` | `FILE_EDIT_TOOL_SET` | 推断 |
| `Xh` | `isFileEditTool` | 推断 |
| `HLe` | `hasMcpHookForServer` | 推断 |
| `T2` | `MCP_TOOL_CGROUP_MAX` | 权威（值）：`64` |
| `yrn` | `trackMcpServerPid` | 推断 |
| `Hwo` | `releaseMcpServerAtHookFire` | 推断 |
| `x2` | `releaseStaleMcpServers` | 推断 |
| `qh` | `pruneDeadMcpServers` | 推断 |
| `uvo` | `sortHookEventsBySource` | 推断 |
| `XIt` | `describeHookSource` | 推断 |
| `Frn` | `hookSourceHeader` | 推断 |
| `lRr` | `hookSourceInline` | 推断 |
| `zM` | `formatHookCommand` | 推断：`zM(hook)` 展示用 |
| `aRr` | `hookDisplayInfo` | 推断 |
| `QA` | `hookStatusMessage` | 推断 |
| `jK` | `HOOK_PATH_PLACEHOLDERS` | 权威（值）：`${CLAUDE_PROJECT_DIR}` 等 |
| `lvo` | `anchorScriptHookFile` | 推断 |
| `cvo` | `expandHookPathPlaceholders` | 推断 |
| `iRr` | `unsupportedScriptHook` | 权威（日志）：`script hooks are not available in this build` |
| `avo` | `SCRIPT_HOOK_ACK_ENV` | 权威（值）：`CLAUDE_SCRIPT_HOOK_ACK` |
| `dSe` | `SCRIPT_HOOK_MAX_BYTES` | 推断：`lFo * 3` |
| `_Bn` | `formatScriptHookPreview` | 推断 |
| `GL` | `PermissionUpdateSchema` | 推断：`addRules/replaceRules/...` |
| `Ta` | `PermissionUpdateDestinationSchema` | 推断 |
| `$u` | `PermissionBehaviorSchema` | 推断：`allow/deny/ask` |
| `Hu` | `PermissionRuleSchema` | 推断 |

### `m0094` — 输入 schema

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `Iq` | `HOOK_EVENT_NAMES` | 权威（列表） |
| `DR` | `HookEventNameSchema` | 推断 |
| `v` | `HookInputBaseSchema` | 推断：公共字段 |
| `Dq` | `PreToolUseHookInputSchema` | 权威（`A("PreToolUse")`） |
| `kq` | `PermissionRequestHookInputSchema` | 权威 |
| `Lq` | `PostToolUseHookInputSchema` | 权威 |
| `xq` | `PostToolUseFailureHookInputSchema` | 权威 |
| `Vq` | `PostToolBatchHookInputSchema` | 权威 |
| `Gq` | `PermissionDeniedHookInputSchema` | 权威 |
| `jq` | `NotificationHookInputSchema` | 权威 |
| `Bq` | `UserPromptSubmitHookInputSchema` | 权威 |
| `Hq` | `UserPromptExpansionHookInputSchema` | 权威 |
| `qq` | `SessionStartHookInputSchema` | 权威 |
| `Kq` | `SetupHookInputSchema` | 权威 |
| `Fq` | `StopHookInputSchema` | 权威 |
| `Yq` | `StopFailureHookInputSchema` | 权威 |
| `Wq` | `SubagentStartHookInputSchema` | 权威 |
| `$q` | `SubagentStopHookInputSchema` | 权威 |
| `Xq` | `PreCompactHookInputSchema` | 权威 |
| `Qq` | `PostCompactHookInputSchema` | 权威 |
| `f0` | `SessionEndHookInputSchema` | 权威 |
| `l0` | `ConfigChangeHookInputSchema` | 权威 |
| `u0` | `InstructionsLoadedHookInputSchema` | 权威 |
| `h0` | `WorktreeCreateHookInputSchema` | 权威 |
| `p0` | `WorktreeRemoveHookInputSchema` | 权威 |
| `_0` | `CwdChangedHookInputSchema` | 权威 |
| `m0` | `FileChangedHookInputSchema` | 权威 |
| `E0` | `DirectoryAddedHookInputSchema` | 权威 |
| `g0` | `MessageDisplayHookInputSchema` | 权威 |
| `M4n` | `HookInputSchema` | 推断：判别联合 |
| `b0` | `AsyncHookOutputMarkerSchema` | 推断 |
| `rF` | `SdkHookConfigSchema` | 权威（描述）：`hookCallbackIds` |
| `xe` | `McpServerInfoSchema` | 推断 |
| `kR` | `BackgroundTaskSchema` | 推断 |
| `LR` | `SessionCronSchema` | 推断 |
| `ne` | `PermissionModeSchema` | 推断 |

### `m0052` — 配置 schema

| 原压缩名 | 可读名 | 证据 |
| --- | --- | --- |
| `Ru` | `defineHookSchemas` | 推断：返回 5 个 schema |
| `xAe` | `HookSchema` | 推断：判别联合 |
| `on` | `HookMatcherSchema` | 权威（描述）：`matcher` + `hooks` |
| `_Y` | `SettingsHooksSchema` | 推断：`Record<Event, Matcher[]>` |
| `sn` | `knownHookTypes` | 推断 |
| `cFo` | `validateScriptHookFilePath` | 权威（错误文案） |
| `Mm` | `HOOK_EVENT_NAMES` | 权威（列表） |
| `lFo` | `HOOK_OUTPUT_MAX_BYTES` | 权威（值）：`24576` |

## 复现与复验

```bash
cd reconstructed/tools
node hooks-rename.mjs
node verify-hooks-semantic.mjs
```

- 改名只动**绑定标识符**，不改字符串、属性名、导出名、控制流。
  导出绑定保持对外名不变（`export { HOOK_EVENT_NAMES as Mm }`）。
- `verify-hooks-semantic.mjs` 做 AST 级对比：节点类型、字符串/数字字面量、对象/类属性键全部零差异。
- 报告：`reconstructed/hooks-rename-report.json`。

> 复验基线说明：m0357 的基线用 `deminified-rewind/`（同为 Babel round-trip），
> 以隔离 Babel generator 给单语句体补花括号这一已知产物（+35 个 `BlockStatement`，
> 与改名无关——`deminified-rewind/` 有完全相同的 +35）。

## 已知的"未改名"部分

- **函数内部参数/局部变量**：Babel 只重命名**模块级绑定**，函数体内的短名（`e`/`n`/`r`…）
  保持原样。这是有意的——它们需要逐函数人工命名，风险高，留给后续专项。
- **导出名**：为了不破坏模块 API，导出名保持原样（改名只作用于本地绑定）。
