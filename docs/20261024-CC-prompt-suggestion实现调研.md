# Claude Code 2.1.303 输入框预测补全（prompt suggestion）实现调研 + 复刻指南

> 调研对象：`claudecode303/`（Claude Code v2.1.303，SHA256 `1787C606…AF196B`）的 2,431 个明文模块。
> 所有结论都给出 `模块文件:行号` 坐标，可直接回查。
> 本文回答：**Claude Code 怎么在每一轮结束后，预测用户接下来最可能输入什么，并以输入框占位符（ghost text）的形式给出来。**

---

## 0. 结论先行

这个功能在源码里叫 **prompt suggestion**（内部代号 `chomp` / `inflection`）。
它不是"本地模板补全"，也**不是新开一次对话**——而是：

> **在每一轮回答结束后，复用当前会话已经发出的请求前缀（命中 prompt cache），
> 追加一条固定指令让模型"扮演用户"，输出一句 2-12 词的下一条输入；
> 再经过 14 条质量规则过滤，最后塞进输入框的 placeholder。**

一句话链路：

```text
turn end
  → 门禁（开关 / 焦点 / 计划模式 / 限流 / 冷却 / 未采用退避）
  → forked query（父消息前缀 + 固定指令，deny 一切工具，不写 transcript、不写 cache）
  → 抽取 assistant 文本 → 清洗包裹 → 14 条规则过滤
  → 写进 appState.promptSuggestion {status:"generated"}
  → 输入框空时渲染为 placeholder，并标记 shown
  → 用户 Tab / → 接受（或直接按 Enter 命中）→ 记录 accepted / ignored
```

**四个关键事实**（复刻时最容易踩错的地方）：

1. **它花的是一次带缓存的模型调用**：`cacheSafeParams` 直接复用父请求的
   `systemPrompt / userContext / systemContext / toolUseContext / forkContextMessages`，
   只有当父请求前缀仍在缓存 TTL 内（`0.9 × TTL`）才会发起（`m0459:137700`）。
   前缀不热就直接放弃，不发请求（`m0664:216` 的 `cache_cold`）。
2. **它强制只输出一句**：指令里写死 "Format: 2-12 words"、"Reply with ONLY the suggestion"，
   代码侧再用 14 条规则二次过滤（`m0664:313`）。过滤是**代码兜底，不信任模型**。
3. **它有三种消费者**：终端 REPL（placeholder）、SDK/`-p` 的 stream-json（`prompt_suggestion` 帧）、
   以及 fleetview 的 peek 输入框；另外 plugin 可通过 `prompt.suggest` hook 自行提供（`m0459:7875`）。
4. **它有一套"没人用就退避"的机制**：连续 20 条建议没被采用 → 进入退避，改成每 10 轮才生成一次，
   并显示 "Showing fewer prompt suggestions · use one to bring them back"（`m0661:24-31`、`m1635:46551`）。

---

## 1. 全局数据流

```text
【终端 REPL】
  回合结束（gl() 末尾）
    → x9o()                       m0664:152
       ├─ querySource 必须是 repl_main_thread*     m0664:153
       ├─ 焦点门禁（blurred / bg 未附着）           m0664:157
       ├─ Y4r() 预检（早停条件）                    m0664:124
       └─ N() 生成 → Kfs("prompt.suggest") 交给 host m0664:296 / m0459:7887
    → host.suggestDraft(text, requestId)           m1635:78759
       └─ 仅在「输入框为空 + 不在流式中」时写入
          appState.promptSuggestion {status:"generated"}   m1635:78769
    → 渲染层：Kie() 计算 suggestion，空输入时作为 placeholder m1635:27372 / 47348
    → 用户 Tab / → 接受                            m1635:31681 / 31693
    → 提交时记录 accepted / ignored                 m1635:27441

【SDK / -p --output-format=stream-json】
  回合结束 → class mv.afterResult()                m1809:6093
    → 同样的 Y4r() 预检 + 生成
    → emit {type:"prompt_suggestion", suggestion, uuid, session_id}  m1809:6118
    → 客户端可发 control request: set_prompt_suggestions_paused      m1809:27694

【fleetview（多任务看板）】
  peek 输入框空 + Tab → onTabOnEmpty 接受            m0863:6384

【plugin 自定义】
  prompt.suggest hook 的 core 实现 = host.composer.propose()  m0459:7875 / 7887
```

三种消费者共享同一份"生成 + 过滤"代码（`m0664`），差别只在**谁来展示**和**是否做退避统计**。

---

## 2. 开关：四层，任意一层关掉就不生成

| 层 | 位置 | 行为 |
| --- | --- | --- |
| 环境变量 | `CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION` | `false/0` 强制关；`true/1` 强制开（跳过 GrowthBook） |
| GrowthBook 实验 | `tengu_chomp_inflection`（默认 `false`） | 未开实验 → 关。设置面板里的开关本身也受它控制 |
| 设置项 | `settings.promptSuggestionEnabled` | `false` → 关；缺省视为开（`!== false`） |
| CLI 参数 | `--prompt-suggestions [true/false]` | 仅 `-p` + `--output-format=stream-json` 有效 |

解析顺序（`m0664:75` `hvn()`）：

```text
env === false            → disabled(env)
env === true             → enabled(env)
!growthbook(chomp)       → disabled(growthbook)
非交互模式               → disabled(non_interactive)
swarm teammate           → disabled(swarm_teammate)
否则 settings.promptSuggestionEnabled !== false
```

另有 `yvn()`（`m0664:103`）是**只读 env + 设置**的轻量版，给 SDK 侧和设置页用。

CLI 参数定义在 `m0775:1899`：

```text
--prompt-suggestions [value]
  Enable prompt suggestions. In print/SDK mode, emits a prompt_suggestion message
  after each turn with a predicted next user prompt
```

参数校验（`m0757:5282`）：`--prompt-suggestions` 必须与 `--print` + `--output-format=stream-json` 同用，
否则直接报错退出——因为**只有 stream-json 才承载 `prompt_suggestion` 帧**。

设置页开关（`m1135:759`）在 `tengu_chomp_inflection` 打开时出现在 "Input & controls" 分组（`m2090:553`）：

```js
{ id: "promptSuggestionEnabled", label: "Prompt suggestions", type: "boolean",
  onChange(v) { setAppState(s => ({...s, promptSuggestionEnabled: v}));
                save({ promptSuggestionEnabled: v ? undefined : false });   // 默认值不落盘
                if (v && !old) resetBackoff(...); } }
```

注意它写配置时用的是"**默认值就删键**"策略：开 → 写 `undefined`（跟随默认），关 → 写 `false`。

---

## 3. 门禁：什么时候不生成

### 3.1 焦点门禁（仅终端 REPL）

`m0664:152` `x9o()`：

```js
if (!e.querySource?.startsWith("repl_main_thread")) return;   // 只对主线程
let focused = o7() === "focused";                              // 终端焦点
let bgSession = Ht();                                          // CLAUDE_CODE_SESSION_KIND === "bg"
if (bgSession ? !focused && !s : !focused) { suppress("unfocused"|"bg_unattached"); return; }
```

即：**终端失焦就不生成**；后台会话（`--bg`）必须终端聚焦才生成。

### 3.2 预检早停（`m0664:124` `Y4r()`）

按顺序短路，命中即记 `suppressed` + `reason`：

| reason | 条件 |
| --- | --- |
| `aborted` | 上一个请求被 abort |
| `early_conversation` | 历史里 assistant 消息 < 2 条（开场不猜） |
| `last_response_error` | 上一条 assistant 是 API 错误 |
| `disabled` | `promptSuggestionEnabled === false` |
| `pending_permission` | 有 pending worker / sandbox 请求 |
| `elicitation_active` | MCP 正在等用户 elicitation |
| `plan_mode` | `toolPermissionContext.mode === "plan"` |
| `rate_limit` | 限流中（`status !== "allowed"`，非 explicit-on 的 warning 也算） |
| `usage_credits` | 走的是 usage credits 计费且未获授权 |
| `cache_cold` | 父请求前缀不在缓存 TTL 内（见 §4） |
| `unused_streak` | 退避期内且未到 10 轮一次（见 §8） |

### 3.3 缓存门禁（最关键的一条）

`m0664:216` `O()`：

```js
let t = usage.input_tokens + usage.output_tokens;
if (t > 10000) return "uncached";                       // 上次请求太小，前缀不值得复用
let o = usage.cache_creation_input_tokens ?? 0;
if (t + o <= 10000) return null;                        // 没走缓存写入，跳过
return flag("tengu_chomp_thaw", false) ? null : "cache_write";
```

`m0459:137700` `FJt()` 是 SDK 侧的前缀新鲜度判断：

```js
savedAt !== null && Cwn() && Date.now() - max(savedAt, lastCacheTouch) < ttl * 0.9
```

**结论**：这个功能是"**蹭父请求的 prompt cache**"，
所以必须复用父请求前缀（`forkContextMessages`），否则既慢又贵。

---

## 4. 生成：一次"扮演用户"的 forked query

### 4.1 复用父请求前缀

`m0664:257` `M()`：

```js
await HR({
  promptMessages: [Re({ content: PROMPT })],   // 只有一条固定指令
  cacheSafeParams,                             // 父请求的 systemPrompt/userContext/toolUseContext/…
  canUseTool: async () => ({ behavior: "deny", message: "No tools needed for suggestion",
                             decisionReason: { type: "other", reason: "suggestion only" } }),
  querySource: "prompt_suggestion",
  forkLabel: "prompt_suggestion",
  overrides: { abortController },
  skipTranscript: true,                        // 不写会话 transcript
  skipCacheWrite: true                         // 不写新的 cache
});
```

`cacheSafeParams` 来自 `m0459:137728` `m6()`：

```js
{ systemPrompt, userContext, systemContext, toolUseContext,
  forkContextMessages: messages,      // ← 父会话的全部消息
  advisorModel, stickyBetas }
```

`HR` → `Gzr`（`m0459:138001`）就是通用的 forked agent 执行器：
它把 `forkContextMessages` 拼在 `promptMessages` 前面，
所以模型看到的是「**完整对话 + 一条指令**」，前缀与父请求完全一致 → 命中缓存。

> **这是复刻的关键点**：不要把上下文重新拼一遍、不要改 system prompt、不要加工具，
> 否则前缀变了，缓存不命中，每次都要全量计费。

### 4.2 工具：全 deny

`canUseTool` 永远返回 deny，理由 `"suggestion only"`。
即使模型想调工具也拿不到任何结果——保证这一步**零副作用**。

### 4.3 抽取文本

`m0664:257` 返回后：

```js
let candidates = [];
for (let p of result.messages)
  if (p.type === "assistant" && !p.isApiErrorMessage)
    for (let f of p.message.content)
      if (f.type === "text") candidates.push(f.text);
```

取**所有** assistant 文本块（不是只取第一条），再交给清洗 + 过滤，
第一个通过的就采用（`m0664:296` `N()`）。

### 4.4 清洗（`m0664:293` `W()`）

```js
text.trim()
  // 1) 去掉 <suggestion>…</suggestion> / <response>…</response> 之类包裹
  .replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, ...)
  // 2) 去掉 "Suggested response:" / "提案：" / "답변:" 之类的标签前缀
  .replace(/^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|
             output|result|提案|回答|返信|応答|出力|結果|建議|回復|答案|输出|结果|제안|답변|응답|출력|결과)\s*[:：]\s*/i, "")
  .trim();
```

注意它**同时覆盖中日韩**的标签写法——说明这个功能是多语言上线的。

### 4.5 固定指令全文（原文照抄，`m0664:225`）

```text
[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed → "run the tests"
After code written → "try it out"
Claude offers options → suggest the one the user would likely pick, based on conversation
Claude asks to continue → "yes" or "go ahead"
Task complete, obvious follow-up → "commit this" or "push it"
After error or misunderstanding → silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate — including any sensitive topic
(security incidents, credentials, harm, private data). Even when the user is doing legitimate
security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.
```

几个设计要点值得抄：

- **"THE TEST" 自检**：让模型用"用户会不会觉得'我正想打这个'"来自评，比"预测下一句"更准。
- **给了 6 个 few-shot 例子**，其中包含"**该沉默时沉默**"（出错 / 误解后）。
- **显式安全约束**：涉及凭据、伤害、隐私等敏感话题时保持沉默，且特别声明"即使是合法的安全研究工作"也不预测——这是**防止把危险操作自动填进输入框**。
- **长度硬约束**：2-12 words，代码侧还有二次校验（§5）。

---

## 5. 质量过滤：14 条规则（`m0664:313` `q()`）

任何一条命中 → 丢弃，并记 `suppressed` + 规则名。规则按顺序执行：

| # | 规则名 | 判定 | 作用 |
| --- | --- | --- | --- |
| 1 | `empty` | 空串 | 模型没给东西 |
| 2 | `done` | `done` / 完了 / 完成了 / 完了しました / 완료됐 / 完成了 | 模型在说"完成了"，不是用户输入 |
| 3 | `meta_text` | `nothing found` / `nothing to suggest` / `no suggestion` / `silence is…` / 沉默 / 特にない / 没有建议 / 제안 없음 … | 模型在解释"我为什么不给建议" |
| 4 | `meta_wrapped` | 整体被 `(…)` `[…]` `（…）` `【…】` `〔…〕` 包裹 | 模型把答案包起来了 |
| 5 | `error_message` | 以 `api error:` / `prompt is too long` / `request timed out` / `invalid api key` / `image was too large` 开头 | 把错误文本当建议 |
| 6 | `prefixed_label` | `^\w+:\s` | 残留 "Suggestion: xxx" 之类 |
| 7 | `too_few_words` | 词数 < 2；**例外**：单字白名单 `yes/yeah/yep/yea/yup/sure/ok/okay/push/commit/deploy/stop/continue/check/exit/quit/no`；以 `/` 开头（斜杠命令）放行 | 太短没信息量 |
| 8 | `too_many_words` | 词数 > 12 | 太长 |
| 9 | `too_long` | 长度 ≥ 100 字符 | 太长 |
| 10 | `multiple_sentences` | `[.!?]\s+[A-Z]` 或 `[。！？]\s*[\p{L}\p{N}]` | 超过一句 |
| 11 | `has_formatting` | 含 `\n` 或 `*` / `**` | Markdown 格式不该出现在输入框 |
| 12 | `evaluative` | thanks / looks good / sounds good / perfect / ありがとう / 谢谢 / 感谢 / 감사합니다 / 良さそう / 看起来不错 / 太好了 … | 客套话 |
| 13 | `claude_voice` | 以 `let me` / `i'll` / `i've` / `i'm` / `i can` / `here's` / `you can` / `sure,` / `certainly` / 让我 / 我来 / 我会 / 我将 开头 | 这是 Claude 的口吻，不是用户的 |
| 14 | `silence`（隐含） | 生成结果为空 | 模型选择沉默 |

### 5.1 词数怎么算：不是按空格，是按"汉字/假名权重"（`m0664:36` `w()`）

```js
function wordCount(text) {
  // 按空白切分，每段计算权重后求和，向上取整
  for (each segment) {
    if (han === 0 && phonetic === 0) weight += 1;        // 纯拉丁/其他：算 1 词
    else weight += (other + hangul > 0 ? 1 : 0) + han/2 + phonetic/4;
  }
}
```

字符分类（`m0664:26`）：

- `Han` = `\p{Script=Han}`（汉字）
- `phonetic` = 平假名 / 片假名 / ー / 泰文 / 老挝文 / 高棉文 / 缅甸文
- `hangul` = `\p{Script=Hangul}`
- 其他 = `[\p{L}\p{N}]`

**含义**：2 个汉字算 1 个"词"，4 个假名算 1 个"词"。
所以中文建议的"2-12 words"实际上约等于 **4-24 个汉字**，而不是 2-12 个汉字。
这是为多语言做的归一化，复刻时如果只按空格数词，中文建议会被大量误杀。

### 5.2 过滤顺序为什么重要

`done` / `meta_text` 必须排在 `too_few_words` 前面——
否则 `done` 会先被"单字不在白名单"杀掉，遥测里就看不到 `done` 这个更准确的归因。
同理 `evaluative` 排在 `claude_voice` 前：`thanks` 既是客套也不算 Claude 口吻，归因到前者更准。

---

## 6. 展示：placeholder + ghost text

### 6.1 状态机（`m1635:27372` `Kie()`）

`appState.promptSuggestion` 是判别联合：

```ts
{ status: "empty" }
{ status: "generated", text, generationRequestId }     // 已生成，未展示
{ status: "shown",     text, generationRequestId, shownAt }
{ status: "accepted",  text, generationRequestId, shownAt, acceptedAt }
```

- `suggestDraft()`（`m1635:78759`）只在**输入框为空 + 不在流式中**时写入 `generated`：

```js
if (!(h.trim() !== "" && D.value === "" && !turn.getSnapshot().isLoading)) return { isShown: false };
setAppState(s => ({ ...s, promptSuggestion: { status: "generated", text: h, generationRequestId: R } }));
return { isShown: true };
```

- `markShown()`：`generated → shown`，记 `shownAt`。
- 渲染层（`m1635:46719`）：

```js
NL = mode === "prompt" && !hasSuggestions && suggestion && !isInputNonEmpty;
if (NL) markShown();
```

- 传给输入框的 `placeholder`（`m1635:47348`）：

```js
let placeholder = NL && suggestion ? suggestion : defaultPlaceholder;
```

即：**建议不是"插入文本"，而是替换 placeholder**。
用户不按 Tab 就永远只是一段灰字，不会污染输入内容。

### 6.2 接受方式（三种）

| 方式 | 位置 | 条件 |
| --- | --- | --- |
| `→` 右方向键 | `m1635:31681` | 输入框为空 + 建议状态是 `shown`/`accepted` |
| `Tab` | `m1635:31693` | 同上，且没有其他补全候选（命令/文件/agent 等） |
| 直接 `Enter` | `m1635:27441` | 用户手打的文本与建议**忽略大小写完全相同** |

`Tab` 的分支顺序很重要（`m1635:31689`）：

```js
if (key.name === "tab" && !key.shift) {
  if (suggestionsStore.getState().suggestions.length > 0 || something) return;  // 补全优先
  ...
  if (isShown(suggestion) && value === "" && !someFlag) { preventDefault(); markAccepted(); setValue(suggestion.text); }
}
```

**补全菜单（斜杠命令 / 文件 / agent）永远优先于 prompt suggestion**——
避免 Tab 键语义冲突。

### 6.3 接受后

`markAccepted()`：`shown|accepted → accepted`，记 `acceptedAt`。
然后 `setValue(suggestion.text)` 把文本写进输入框（**不自动提交**），光标移到末尾。
提交时如果 `acceptedAt > shownAt` 或用户手打内容与建议相同，就算 accepted。

fleetview 的 peek 输入框是另一个消费者（`m0863:6384`）：

```js
onTabOnEmpty: () => { setQuery(suggestion); track("accepted", "fleetview_peek"); resetBackoff(true); }
```

它的 Tab 处理在通用输入组件里（`m0852:578`）：

```js
if (key.name === "tab") { preventDefault(); if (onTabOnEmpty && value === "") onTabOnEmpty(); }
```

---

## 7. 退避：没人用就少给（`m0661`）

这是产品上很值得抄的一层——**防止建议变成噪音**。

### 7.1 常量

| 常量 | 值 | 含义 |
| --- | --- | --- |
| `promptSuggestionUnusedStreak_2` | `20` | 连续 20 条未采用 → 进入退避 |
| `promptSuggestionUnusedStreak` | `21` | "已展示退避提示"的标记值（`20` 是"待提示"） |
| `Bss` | `10` | 退避期内每 10 个 eligible turn 才生成一次 |
| `_` | `1209600000` | 1209600000 ms = 14 天；安装未满 14 天不退避 |

### 7.2 流程

```text
每条建议被 ignored → unusedInARow++
unusedInARow >= 20 → 归零并把 appState.promptSuggestionUnusedStreak 置为 20
下一轮预检 → 若 streak 达到阈值 → 返回 "unused_streak"（不生成）
退避期内 → eligibleTurns % 10 === 0 才真正生成
用户提交一条输入（不是接受建议）→ q7r() 判断是否该提示：
    展示 "Showing fewer prompt suggestions · use one to bring them back"
    并把 streak 标记为 21（已提示）
用户接受任意一条建议 → f6t(true, …) → 退避立即清零
设置页手动开关 → jss() → 退避清零
```

关键代码：

- 计数与清零：`m0661:42` `f6t(accepted, storage, state)`
- 退避判定：`m0661:34` `Zdr()`（要求 `unusedInARow >= 20`、未强制开启、安装满 14 天）
- 退避提示：`m0661:55` `q7r()`；文案常量 `V7r` 在 `m0661:28-31`
- 提交时触发提示：`m1635:46551`
- 退避期生成节流：`m0664:137`（`eligibleTurns % Bss === 0`）
- 会话内计数对象：`m0017:2921` `class De { eligibleTurns, unusedInARow, askOnNextTurn() { this.eligibleTurns = 0 }, arm() }`

`askOnNextTurn()` 的作用是**把节流计数器清零**，让下一轮一定生成一次——
用于用户主动打开设置、或刚接受过建议之后"立刻再给一条"。

### 7.3 为什么要"14 天"

新用户前两周建议保持稳定曝光，避免装完就因为没点而进入低频——
这是典型的新功能采用曲线保护。

---

## 8. 遥测：只记结果，不记内容

事件名：`tengu_prompt_suggestion`（生成 / 抑制 / 接受 / 忽略都记这一个）。
另有 `tengu_prompt_suggestion_init`（开关来源）和 `tengu_prompt_suggestion_back_off_notice/end`。

### 8.1 抑制（`m0664:347` `R0()`）

```js
{ source, outcome: "suppressed", reason, cacheColdBy?, prompt_id: "user_intent" }
```

`reason` 就是 §3.2 那张表的枚举。`cacheColdBy` 进一步区分 `uncached` / `cache_write`。

### 8.2 生成成功

`m0664:303`：`track("prompt_suggestion_generate")`。
API 失败：`m0664:199` `m("prompt_suggestion_generate", "api_error")`。

### 8.3 接受 / 忽略（`m1635:27441`）

```js
{
  source: "cli",
  outcome: accepted ? "accepted" : "ignored",
  prompt_id: "user_intent",
  generationRequestId,
  acceptMethod: "tab" | "enter",              // 仅 accepted
  timeToAcceptMs: acceptedAt - shownAt,       // 仅 accepted
  timeToIgnoreMs: now - shownAt,              // 仅 ignored
  timeToFirstKeystrokeMs,                     // 建议展示后用户第一次按键的延迟
  wasFocusedWhenShown,                        // 展示时终端是否有焦点
  similarity: input.length / suggestion.length // 用户实际输入与建议的相似度
}
```

`similarity` 是"用户手打内容 ÷ 建议长度"——用来区分"完全照抄"和"部分采纳"。

### 8.4 其他来源

- SDK：`m0664:327` `P9o()`，`source: "sdk"`
- fleetview：`m0863:6385`，`source: "fleetview_peek"`
- 初始化：`m0664:77`，`source: env | growthbook | non_interactive | swarm_teammate | setting`

**注意：遥测里没有建议文本本身**，只有长度、时间、相似度和 ID。
复刻时如果要收集质量数据，也建议只记结构化指标。

---

## 9. SDK / stream-json 协议

### 9.1 开启

SDK `initialize` 请求里带 `promptSuggestions: true`（`m0120:8966`）。
`m1809:25812` 收到后把 `appState.promptSuggestionEnabled` 置 true。

CLI 等价参数：`--prompt-suggestions`，要求 `--print --output-format=stream-json`（`m0757:5282`）。

### 9.2 输出帧（`m0120:8682`）

```json
{
  "type": "prompt_suggestion",
  "suggestion": "run the tests",
  "uuid": "…",
  "session_id": "…"
}
```

schema 描述原文：

> Predicted next user prompt, emitted after each turn when promptSuggestions is enabled.

这个帧是**旁路消息**：不进 transcript（`m1635:72825` 明确 `continue` 跳过），
也不参与 `SDKResultMessage` 的组装（`m1809:7974` 的 switch 里直接 `return`）。

### 9.3 运行时暂停（`m0120:9947`）

```json
{ "subtype": "set_prompt_suggestions_paused", "paused": true }
```

用途：host 的输入框不在屏幕上时暂停生成（比如 IDE 面板切走）。
语义（源码注释原文要点）：

- 只是本进程里的一个布尔，**不改** initialize 选项、也**不改**用户设置；
- 重启 / resume 的会话从"未暂停"开始，host 必须重发；
- 两个客户端同时连着时，**任一客户端的暂停对双方都生效**；
- 空响应表示成功；未启用该功能的旧 CLI 会应答但继续生成，更旧的 CLI 返回 unknown-subtype。

处理代码：`m1809:27694` → `ns.setPaused(...)`（`ns` 即 `class mv` 实例）。
客户端封装：`m1407:1577` `setPromptSuggestionsPaused()`。

### 9.4 生命周期（`class mv`，`m1809:6064`）

| 方法 | 作用 |
| --- | --- |
| `onCommand(cmd)` | 用户发出新命令：abort 在途请求；若上一条已 emit，记 accepted/ignored |
| `afterResult(result)` | 回合结束：门禁 → 生成 → emit（或暂存） |
| `setPaused(bool)` | host 暂停 |
| `emitPending()` | 释放暂存（等结果落地后再发） |
| `settle()` / `settleInflight()` | 关闭前等生成结束，最多 30 s（`mO = 30000`） |
| `discard()` | 丢弃在途与已生成 |

`holdsResults()` 为真时，建议先放进 `pendingSuggestion`，等 `emitPending()` 才发——
保证 `prompt_suggestion` 帧不会插到本轮结果之前。

---

## 10. plugin 扩展点：`prompt.suggest` hook

`m0459:7875`：

```js
var Fre = Og("prompt.fill", Qgt);      // 写入输入框
var Hre = Og("prompt.suggest", (e) => Uao(e.text));   // 提出建议

async function Kfs({ text, origin, hookOrigin, signal, place }) {
  return await hooks("prompt.suggest", {
    origin: hookOrigin, signal,
    core: { "prompt.suggest": { name: "core", isCore: true, budgetMs: 0,
                                run: async (n) => place(n.text) } }
  })({ text, origin });
}
```

- `place` 回调就是 `Uao()` → `mDe()?.propose(text, requestId)`（`m0459:7875`），
  最终落到 REPL host 的 `suggestDraft()`（`m1635:11597`）。
- 返回 `{ isShown: true }` 表示已被某个 hook 展示，调用方不再重复处理。
- 有 plugin 接管时（`lCt() && Qp(agentContext)`）CLI 自己就不展示了（`m0664:178` `plugin_owns`）。

复刻价值：这是一个**可插拔的"下一句建议"接口**——
除了模型预测，也可以接规则（如"刚 commit 完 → push"）、团队自定义记忆、或个人偏好模板。

---

## 11. 复刻到你自己的 agent：最小改动清单

假设你已有：多轮对话 + 多模态消息 + prompt cache。

### 11.1 必做（缺一不可）

1. **回合结束钩子**：在 agent loop 每轮 `stop` 之后触发（`m0671:3188`）。
   不要在工具轮中间触发，也不要在 plan 模式触发。
2. **复用父请求前缀**：把本轮请求的 `systemPrompt / userContext / toolUseContext / 消息数组`
   原样传给 suggestion 请求（`m0459:137728`）。**不要新建 system prompt**。
3. **工具全 deny**：`canUseTool → deny`，理由随便写（`m0664:261`）。
4. **不落 transcript、不写 cache**：`skipTranscript: true, skipCacheWrite: true`。
5. **固定指令**：见 §4.5，直接照抄。特别保留"THE TEST"和安全沉默条款。
6. **代码侧过滤**：至少实现 §5 的前 6 条（`empty/done/meta_text/meta_wrapped/error_message/prefixed_label`）
   和 `too_long / multiple_sentences / has_formatting / claude_voice`。
   中文场景一定要实现 §5.1 的汉字/假名权重，否则 2-12 words 对中文不成立。
7. **placeholder 而非插入文本**：建议存在独立状态里，输入框空时才作为灰字显示；
   用户按 Tab / → 才复制进输入框。

### 11.2 建议做

8. **缓存门禁**：父请求太小（< 10 K token）或没走 cache write 时直接跳过（`m0664:216`）。
   否则每次都要付一次全量 input。
9. **焦点门禁**：终端 / 窗口失焦、或用户已经打开别的面板时不生成。
10. **退避**：连续 N 条未采用 → 降频 + 给一次提示文案（`m0661`）。
    没有退避时，高频出现的无关建议会显著干扰输入。
11. **accepted 判定**：`Tab` / `→` 接受；或用户提交的文本与建议忽略大小写相同。
    记录 `timeToAcceptMs / timeToIgnoreMs / similarity`。
12. **并发与取消**：新用户输入到来 → abort 在途 suggestion（`m1809:6086` `onCommand`）；
    建议在结果落地后再 emit（`holdsResults` / `emitPending`）。

### 11.3 不要做

- ❌ 不要每次轮结束都发一次**无缓存**的模型请求（成本会翻倍）。
- ❌ 不要在 suggestion 请求里加工具（即使只读也会污染前缀、拉长延迟）。
- ❌ 不要把 suggestion 写进会话 transcript（会改变后续缓存前缀、也会让模型"看到自己猜的话"）。
- ❌ 不要让 suggestion 参与 compaction / 摘要（`m0232:15297` 明确把 `prompt_suggestion` 归入可剥离的非实质消息）。
- ❌ 不要把建议自动填进输入框并自动提交。

---

## 12. 可直接复制的代码骨架

> 以下为按源码行为重写的**最小实现**（不是原源码，原标识符已 minify）。
> 伪后端 `callModel` 代表你已有的缓存复用的模型调用。

### 12.1 常量与指令

```ts
const SUGGESTION_PROMPT = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]
...（照抄 §4.5 全文）
`;

const CACHE_MIN_TOKENS = 10_000;        // m0664:215
const MAX_WORDS = 12;
const MIN_WORDS = 2;
const MAX_CHARS = 100;
const UNUSED_STREAK_LIMIT = 20;         // m0661:24
const BACKOFF_EVERY_N_TURNS = 10;       // m0661:26
const SINGLE_WORD_ALLOW = new Set(["yes","yeah","yep","yea","yup","sure","ok","okay",
  "push","commit","deploy","stop","continue","check","exit","quit","no"]);
```

### 12.2 词数（多语言加权，对应 `m0664:36`）

```ts
const HAN = /\p{Script=Han}/u;
const PHONETIC = /[\p{Script=Hiragana}\p{Script=Katakana}ーｰ\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u;
const HANGUL = /\p{Script=Hangul}/u;
const OTHER_LN = /[\p{L}\p{N}]/u;

export function wordCount(text: string): number {
  const s = text.trim();
  if (!s) return 0;
  let total = 0;
  for (const seg of s.split(/\s+/)) {
    let han = 0, phonetic = 0, hangul = 0, other = 0;
    for (const ch of seg) {
      if (HAN.test(ch)) han++;
      else if (PHONETIC.test(ch)) phonetic++;
      else if (HANGUL.test(ch)) hangul++;
      else if (OTHER_LN.test(ch)) other++;
    }
    total += han === 0 && phonetic === 0 ? 1 : (other + hangul > 0 ? 1 : 0) + han / 2 + phonetic / 4;
  }
  return Math.ceil(total);
}

// 单字判定用的"汉字+假名"加权（源码 y() = han + phonetic + hangul）
function weightChars(s: string): number {
  let han = 0, phonetic = 0, hangul = 0;
  for (const ch of s) {
    if (HAN.test(ch)) han++;
    else if (PHONETIC.test(ch)) phonetic++;
    else if (HANGUL.test(ch)) hangul++;
  }
  return han + phonetic + hangul;
}
```

### 12.3 过滤（对应 `m0664:313`）

```ts
type SuppressReason =
  | "empty" | "done" | "meta_text" | "meta_wrapped" | "error_message" | "prefixed_label"
  | "too_few_words" | "too_many_words" | "too_long" | "multiple_sentences"
  | "has_formatting" | "evaluative" | "claude_voice";

export function filterSuggestion(raw: string):
  { ok: true; text: string } | { ok: false; reason: SuppressReason } {
  const text = raw.trim();
  const low = text.toLowerCase();
  const words = wordCount(text);
  if (!text) return { ok: false, reason: "empty" };
  if (low === "done" || /^\P{L}*(完了(しました)?|完成了?|완료됐?)\P{L}*$/u.test(text))
    return { ok: false, reason: "done" };
  if (low === "nothing found" || low === "nothing found." || low.startsWith("nothing to suggest") ||
      low.startsWith("no suggestion") || /\bsilence is\b|\bstay(s|ing)? silent\b/.test(low) ||
      /^\W*silence\W*$/.test(low) ||
      /^\P{L}*(沈黙|沈默|静默|침묵|提案(なし|はありません)|特に(なし|ありません)|[无没沒]有?建[议議]|(제안|해당)\s*없음)\P{L}*$/u.test(text))
    return { ok: false, reason: "meta_text" };
  if (/^(\(.*\)|\[.*\]|（.*）|［.*］|【.*】|〔.*〕)$/.test(text))
    return { ok: false, reason: "meta_wrapped" };
  if (low.startsWith("api error:") || low.startsWith("prompt is too long") ||
      low.startsWith("request timed out") || low.startsWith("invalid api key") ||
      low.startsWith("image was too large")) return { ok: false, reason: "error_message" };
  if (/^\w+:\s/.test(text)) return { ok: false, reason: "prefixed_label" };
  if (words < MIN_WORDS && !text.startsWith("/")) {
    const w = weightChars(text);
    if (w > 0 ? w < MIN_WORDS : !SINGLE_WORD_ALLOW.has(low))
      return { ok: false, reason: "too_few_words" };
  }
  if (words > MAX_WORDS) return { ok: false, reason: "too_many_words" };
  if (text.length >= MAX_CHARS) return { ok: false, reason: "too_long" };
  if (/[.!?]\s+[A-Z]|[。！？]\s*[\p{L}\p{N}]/u.test(text))
    return { ok: false, reason: "multiple_sentences" };
  if (/[\n*]/.test(text)) return { ok: false, reason: "has_formatting" };
  if (/thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(low) ||
      /^\P{L}*(ありがとう(ございます|ございました)?|助かりました|[谢谢謝][谢谢謝][你您]?|感谢[你您]?|感謝します|감사합니다|고마워요?)(\P{L}|的|$)/u.test(text) ||
      /(良さそう|よさそう|いいですね|看起来不错|太好了|完璧|完美|좋네요)(です|ですね|だね)?\P{L}*$/u.test(text))
    return { ok: false, reason: "evaluative" };
  if (/^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|让我(?![们們])|我来|我会|我将)/i.test(text))
    return { ok: false, reason: "claude_voice" };
  return { ok: true, text };
}
```

> `too_few_words` 的源码语义（`m0664:318-322`）：先看加权词数 `o`，`o >= 2` 直接放行；
> 否则若含汉字/假名（`y(e) > 0`）则要求 `y(e) >= 2`，纯拉丁/韩文则查单字白名单。
> 所以「两个汉字」会被拒绝（`o=1`、`y=2` → 不满足 `y<2` 吗？——满足放行），
> 「一个汉字」会被拒绝（`y=1<2`）。骨架已按此等价实现。

### 12.4 单轮生成（对应 `m0664:124` + `m0664:257`）

```ts
export async function generateSuggestion(ctx: {
  messages: Message[]; parentParams: CacheSafeParams; signal: AbortSignal;
}): Promise<{ text: string; requestId: string | null } | null> {
  if (ctx.messages.filter(m => m.role === "assistant").length < 2) return null;  // early_conversation
  const last = [...ctx.messages].reverse().find(m => m.role === "assistant");
  if (!last || last.isApiError) return null;                                    // last_response_error

  const res = await callModel({
    ...ctx.parentParams,                    // 复用 system prompt / tools 列表 / 历史
    appendMessages: [{ role: "user", content: SUGGESTION_PROMPT }],
    tools: [],                              // 不给工具（或 canUseTool 全 deny）
    toolChoice: { type: "none" },
    signal: ctx.signal,
    persist: false, cacheWrite: false,
  });

  for (const block of res.contentBlocks) {
    if (block.type !== "text") continue;
    const cleaned = cleanWrapping(block.text);
    const f = filterSuggestion(cleaned);
    if (f.ok) return { text: f.text, requestId: res.requestId };
  }
  return null;
}
```

`cleanWrapping` = §4.4 的两条正则。

### 12.5 UI 状态（对应 `m1635:27372`）

```ts
type SuggestionState =
  | { status: "empty" }
  | { status: "generated"; text: string; requestId: string | null }
  | { status: "shown"; text: string; requestId: string | null; shownAt: number }
  | { status: "accepted"; text: string; requestId: string | null;
      shownAt: number; acceptedAt: number };

// 收到生成结果（suggestDraft 语义，m1635:78759）
function placeSuggestion(st: SuggestionState, text: string, requestId: string | null,
                          input: string, isLoading: boolean): SuggestionState {
  if (!(text.trim() !== "" && input === "" && !isLoading)) return st;   // 只在空输入、非流式时放入
  return { status: "generated", text, requestId };
}

// 渲染时（m1635:46719 / 47348）
let state: SuggestionState = getState();
const show = mode === "prompt" && input === "" && state.status !== "empty";
if (show && state.status === "generated") {
  state = { status: "shown", text: state.text, requestId: state.requestId, shownAt: Date.now() };
}
const placeholder = show ? state.text : defaultPlaceholder;

// Tab / → 接受（m1635:31681 / 31693）
function accept(state: SuggestionState, setInput: (s: string) => void): SuggestionState {
  if (state.status !== "shown" && state.status !== "accepted") return state;
  setInput(state.text);
  return { status: "accepted", text: state.text, requestId: state.requestId,
           shownAt: state.shownAt, acceptedAt: Date.now() };
}
```

### 12.6 退避（对应 `m0661`）

```ts
export class SuggestionGate {
  eligibleTurns = 0;
  unusedInARow = 0;
  constructor(private enabled: () => boolean, private installedDays: () => number) {}

  // 回合结束时调用；返回是否应该生成
  shouldGenerate(): boolean {
    if (!this.enabled()) return false;
    if (this.unusedInARow >= UNUSED_STREAK_LIMIT && this.installedDays() >= 14) {
      const due = this.eligibleTurns % BACKOFF_EVERY_N_TURNS === 0;
      this.eligibleTurns++;
      return due;
    }
    return true;
  }
  accepted()      { this.unusedInARow = 0; this.eligibleTurns = 0; }
  ignored()       { this.unusedInARow = Math.min(this.unusedInARow + 1, UNUSED_STREAK_LIMIT); }
  askOnNextTurn() { this.eligibleTurns = 0; }
}
```

---

## 13. 坑清单

| # | 坑 | 后果 | 规避 |
| --- | --- | --- | --- |
| 1 | 不复用父请求前缀 | 缓存不命中，每轮多付一次全量 input | 传同一份 system prompt + 同一份历史 |
| 2 | 给 suggestion 请求配工具 | 前缀变化、可能真的调用工具、延迟暴增 | tools 置空 + canUseTool deny |
| 3 | 把指令拼进 system prompt | 破坏缓存前缀 | 作为**最后一条 user 消息**追加 |
| 4 | 只按空格数词 | 中文建议大量被 `too_many_words` / `too_few_words` 误判 | 用汉字/假名加权（§5.1） |
| 5 | 不过滤模型输出 | 出现 "done"、"感谢"、"让我…"、整段 Markdown | 实现 §5 至少 12 条 |
| 6 | 建议直接插入输入框 | 污染用户草稿、打断输入 | placeholder-only（§6） |
| 7 | 无取消 | 用户已开始打字，旧建议迟到覆盖 | 新输入即 abort |
| 8 | 无退避 | 建议变成噪音 | §7 |
| 9 | 把 suggestion 写进 transcript | 后续请求前缀变化；模型看到自己猜的话 | `skipTranscript` |
| 10 | 在 plan 模式 / 权限等待时生成 | 建议与当前语境无关 | §3.2 门禁 |
| 11 | 结果在 result 之前 emit（SDK） | 客户端解析顺序错乱 | `holdsResults` + `emitPending` |
| 12 | 忽略安全沉默条款 | 可能把危险命令自动填进输入框 | 保留指令原文的 "Stay silent if … unsafe" |
| 13 | 每次进入退避都弹提示 | 提示本身变成噪音 | 只在 streak 从 20 → 21 的那一次弹（`m0661:55`） |
| 14 | 焦点在别处仍生成 | 浪费 token，且用户回来时建议已过期 | §3.1 焦点门禁 |

---

## 14. 源码坐标总表

| 功能 | 模块:行 |
| --- | --- |
| 开关解析 `hvn()` | `m0664_0xf5376a5.js:75` |
| 轻量开关 `yvn()` | `m0664:103` |
| 预检 + 门禁 `x()` | `m0664:108` |
| 早停 `Y4r()` | `m0664:124` |
| 入口 `x9o()`（焦点门禁） | `m0664:152` |
| 缓存判定 `O()` / 阈值 | `m0664:216` / `215` |
| 固定指令 `I` | `m0664:225` |
| forked query `M()` | `m0664:257` |
| 清洗 `W()` | `m0664:293` |
| 生成 + 取第一条 `N()` | `m0664:296` |
| 过滤 `q()` | `m0664:313` |
| 词数加权 `w()` / 字符分类 `C()` / 单字加权 `y()` | `m0664:36` / `44` / `26` |
| SDK accepted/ignored 遥测 `P9o()` | `m0664:327` |
| 抑制遥测 `R0()` | `m0664:347` |
| 退避常量 | `m0661_0xf535a52.js:24-27` |
| 退避文案 `V7r` | `m0661:28-31` |
| 退避判定 `Zdr()` | `m0661:34` |
| 计数 `f6t()` / 清零 `jss()` | `m0661:42` / `51` |
| 退避提示 `q7r()` | `m0661:55` |
| 退避节流（预检内） | `m0664:137` |
| 会话计数对象 `class De` | `m0017_0xe4565fb.js:2921` |
| CLI 参数 `--prompt-suggestions` | `m0775_0xf6ccb47.js:1899` |
| CLI 参数校验 | `m0757_0xf68612e.js:5282` |
| 回合结束触发（终端） | `m0671_0xf53ce11.js:3188` |
| 回合结束触发（SDK） | `m1809_0x106dad73.js:25059` |
| SDK 生成器 `class mv` | `m1809:6064` |
| SDK `onCommand` / `afterResult` | `m1809:6086` / `6093` |
| SDK emit 帧 | `m1809:6118` |
| SDK 帧 switch（旁路） | `m1809:7974` |
| `prompt_suggestion` schema | `m0120_0xe64eaf1.js:8682` |
| initialize `promptSuggestions` | `m0120:8966` |
| `set_prompt_suggestions_paused` schema | `m0120:9947` |
| 暂停处理 | `m1809:27694` |
| SDK 客户端 `setPromptSuggestionsPaused` | `m1407_0xfd5b0eb.js:1577` |
| initialize 时启用 | `m1809:25812` |
| 设置项 schema | `m0062_0xe4ee087.js:8111` |
| 设置页开关 | `m1135_0xfa9345a.js:759` |
| 设置分组 | `m2090_0x10bbb6f0.js:553` |
| appState 初始值 | `m0766_0xf6ba7cc.js:124` |
| REPL 状态机 `Kie()` | `m1635_0x101da730.js:27372` |
| placeholder 计算 | `m1635:47348` |
| 展示判定 `NL` | `m1635:46719` |
| `markShown` 调用 | `m1635:46721` |
| `suggestDraft()` | `m1635:78759` |
| composer 接口 `propose` | `m1635:11597` |
| host 绑定 | `m1635:89086` |
| `→` 接受 | `m1635:31681` |
| `Tab` 接受 | `m1635:31693` |
| 接受/忽略遥测 | `m1635:27441` |
| 提交时 `inputSource` | `m1635:46627` |
| 退避提示挂载 | `m1635:46551` |
| transcript 跳过该帧 | `m1635:72825` |
| `prompt.fill` / `prompt.suggest` hook | `m0459_0xecff32a.js:7873` / `7874` |
| `Uao()` 建议落盘 | `m0459:7875` |
| `Kfs()` 统一入口 | `m0459:7887` |
| `m6()` 缓存参数 | `m0459:137728` |
| 前缀新鲜度 `FJt()` | `m0459:137700` |
| forked 执行器 `HR` / `Gzr` | `m0459:138001` / `138009` |
| 输入组件 Tab 分发 | `m0852_0xf785b28.js:578` |
| fleetview 接受 | `m0863_0xf79bb6c.js:6384` |
| SDK 可剥离消息集合 | `m0232_0xe8b2b34.js:15297` |
| control request 白名单 | `m0757_0xf68612e.js:1224` |
| 设置键可热更列表 | `m0757:259` |

---

## 15. 一句话总结

**prompt suggestion = "用同一条缓存前缀，让模型扮演用户说下一句，再用代码规则把它磨成一句 2-12 词、可以一秒内点上 Tab 的灰字"。**

真正难的不是生成，而是三件事：**复用缓存**（否则贵）、**代码侧过滤**（否则脏）、
**何时不说**（门禁 + 退避 + 安全沉默，否则吵）。

> 证据等级说明：本文所有常量、正则、函数行为均为源码直读（S 级）；
> 函数名为按功能标注（原标识符已 minify），不影响行为核对。
> 文中"代码骨架"为按源码行为重写的等价实现，不是原源码摘录。
