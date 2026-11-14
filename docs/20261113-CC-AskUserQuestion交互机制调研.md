# Claude Code 的「结构化提问」交互机制调研（AskUserQuestion）

> 对象：Claude Code **2.1.319**（`claudecode319/claude.exe`，SHA256 `2E0557…345CBD`）
> 源码坐标格式：`模块文件名:行号`，默认指 `reconstructed319/deminified/`；
> 标 `full:` 的指 `reconstructed319/full/`（同一模块的未改名格式化版，行号与 deminified **不同**）。
> 例外：`m2124_0x1363573f.js` 超过 1 MiB，线 B 直接复用 `full/`，所以它的 deminified 与 full
> **逐字节相同**，行号等价——文中统一写 `full:` 只是为了让读者知道该去哪个目录看。
> 结论分级：**【S】** 源码逐字可见 / **【A】** 由多处源码共同确定 / **【B】** 单点推断 / **【C】** 未验证。
> 本文只写 319 实码；283 / 303 的差异单列 §16。

---

## 0. 一句话结论

用户在 CC 里看到的「几个选项 + 自己输入点什么」是**一个普通内置工具** `AskUserQuestion`，
但它把三件事同时做到了：

1. **走权限通道而不是走工具执行通道** —— 它声明 `requiresUserInteraction() === true`
   并让 `checkPermissions()` 永远返回 `behavior: "ask"`，于是它天然获得
   「弹卡片 → 阻塞等用户 → 把用户的回答当作 `updatedInput` 回传」这条**已存在的**权限管道，
   不需要为它新造一套 UI↔引擎的通信协议。**这是整个机制最核心的设计复用。**
2. **答案要过一道「只能回答、不能篡改」的白名单校验**（`admitCardAnswer`），
   由工具自己实现、引擎在**特定的答案策略分支上**调用。用户/宿主改不了模型看到的题目、选项、预览。
   > ⚠️ **复核订正（2026-11-14）**：这条**不是**无条件成立的。`admitCardAnswer` 只在
   > 答案策略 `kind === "strict"` 时被调用（`m2132:173-178`）；而 319 全库**没有任何地方产出
   > `kind:"strict"`**（唯一的内置策略常量是 `Z8 = {kind:"launcher"}`）。交互式终端走的正是
   > `launcher`。详见 §3.1「可达性」与 §18.1 第 1 条。
   > 在 `launcher` 路径上，实际守住形状的是另外两道：`updatedInput` 的 **inputSchema 校验**
   > （`m0591:181780-181790`）和 **hook 侧 `K1e` 深比较**（`m0591:138051` 等）。
3. **把「没答」也建模成一等状态**（`unanswered: skipped|replied_in_chat|dismissed`、
   `afkTimeoutMs`、`followUp`），所以模型能区分「用户选了 A」/「用户没选但写了话」/
   「用户要求再问几个」/「用户走开了」。**这是它比大多数 agent 框架的 ask_user 更成熟的地方。**

复刻时的最小必要件：**工具声明（隔离）+ 权限旁路（承载）+ 答案准入（安全）+ 结局分支（表达）**。
少任何一环都会退化成「问了但答不清楚」或「模型被用户输入劫持」。

---

## 1. 交付面：输入 / 输出 schema 全貌

### 1.1 输入（`inputSchema`，三个变体按能力选择）【S】

`m0805_0x12477c99.js:470`

```js
get inputSchema() {
  if (_$e()) return Oe();       // 扩展模式：支持 title + kind + 三种题型
  return XGs() ? ke() : Ae();   // 普通模式：选项描述可省略 / 必填
}
```

| 变体 | 构造函数 | 行号 | 触发条件 |
| --- | --- | --- | --- |
| `Ae()` | `ne(j())` | `:391` | 默认（老客户端） |
| `ke()` | `ne(fe())` | `:392` | `questionOptionDescriptionsOptional() === true` |
| `Oe()` | 带 `title` + `kind` | `:393` | `extendedQuestionsEnabled() === true` |

**基础题型**（`G`，`:269`）：

```
question   string  必填；提示词要求「完整、具体、以问号结尾」
header     string  必填；提示词说「最多 12 字符的 chip」，但 **schema 不卡长度**
options    array   min(2).max(4)           ← 硬约束
multiSelect boolean 默认 false
```

> ⚠️ 容易看错的一处：`header` 的 **12 字符上限只写在 `.describe()` 里**（`m0403:8` `k$i = 12`
> 被拼进 schema 描述，`m0805:272`），**没有 `.max(12)`**。所以模型写超了不会报错，
> UI 会截断。复刻时若想强约束，要自己加 `.max()`。

**扩展题型**（`J`，`:280` + `ye()` 的 `superRefine`，`:294`）：

```
kind       "choice" | "text" | "number"   （可省略 = choice）
description  可选，单行说明
options      仅 choice 用；文本/数字题必须为空数组
placeholder  仅 text
min / max    仅 number，且必填、必须 min < max
step         仅 number，正数
defaultValue 仅 number，必须在 [min, max] 内
unit         仅 number，如 "px" / "%"
title        顶层可选，一行标题
```

`superRefine`（`:294`）逐条给**可读错误**而不是笼统的 invalid：

```
`${h} applies only to "${c}" questions.`
'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
`A "${n}" question takes no options; remove them or omit kind to ask a choice question.`
`multiSelect applies only to choice questions, not "${n}".`
"A number question needs numeric min and max with min < max."
"defaultValue must lie within min..max."
```

**这一层值得抄的是「错误消息即教学」**：每条都在告诉模型「该怎么改」，而不是只说「你错了」。

### 1.2 数量上限【S】

| 约束 | 值 | 位置 |
| --- | --- | --- |
| 每轮问题数 | **1–4** | `m0805:385` `.min(1).max(4)` |
| 每题选项数 | **2–4** | `m0805:273` `.min(2).max(4)`；扩展版 `:285` `.max(4)` + superRefine 要求 choice ≥ 2 |
| 问题文本唯一 | 必须 | `m0805:350` `P.check` |
| 同题内选项 label 唯一 | 必须 | 同上 |

超出上限时的提示词**明确要求拆成多次调用**而不是硬塞（`m0805:385`）：

```
The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them
even if the user requests more — split into multiple calls instead.
```

### 1.3 输出（`outputSchema`）【S】

`m0805:400`（基础）/ `:407`（扩展）

```js
{
  questions: Question[],        // 原样回显，便于模型对上号
  answers: Record<questionText, string>,   // 多选用 ", " 连接
  response?: string,            // 「用户直接说话而不是选」的通道
  annotations?: Record<questionText, {
    preview?: string,           // 用户选中项携带的预览正文（回给模型）
    notes?: string,             // 用户加的备注
    unanswered?: "skipped" | "replied_in_chat" | "dismissed"
  }>,
  afkTimeoutMs?: number,        // 仅「用户走开导致自动继续」时出现
  followUp?: boolean            // 仅「用户要求再问一轮」时出现
}
```

**`answers` 的 key 是问题原文**（`question`），不是 id。所以「问题文本必须唯一」是硬约束——
否则答案会串。这是它选择「文本即主键」的直接代价，也是复刻时的第一个坑。

### 1.4 三个「特殊值」与一个常量【S】

```js
var Ikn = "(notes only)";                        // m0805:411
```

- 用户**只写了备注、没选选项**时，`answers[question]` 被写成 `"(notes only)"`
  （写点在 `full:68024` `else if (rn.trim()) Ye(po, Ikn)`）。
- 于是「有答案」和「有备注」在数据层是分开的两件事：
  `m0805:627` 判「是否真答了」时，`w !== Ikn` 才算答。
- 工具结果渲染时 `R = w && w !== Ikn`，为假则写 `"${question}"=(no option selected)`
  并单独带 `notes: ...`（`m0805:676-682`）。

`multiSelect` 的答案编码（`sYt`，`m0805:22`）：label 含 `", "` 或 `"` 时**加引号转义**；
反解析用 `W()`（`m0805:25`）按引号状态机切分。**这是一对配套的序列化/反序列化，
抄一半就会在「选项标签里带逗号」时错位。**

---

## 2. 核心设计复用：把提问做成「权限请求」

### 2.1 三个声明就够了【S】

工具定义（`L8`，`m0805:429`）里三个字段决定了它的整个生命周期：

```js
var L8 = dn({
  name: "AskUserQuestion",
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",          // ① 永不被后台化
  maxResultSizeChars: 1e5,         // ② 结果上限 10 万字符
  ...
  requiresUserInteraction() { return !0; },   // ③ 我就是用户交互面
  ...
  async checkPermissions(e) {                 // ④ 永远 ask
    return { behavior: "ask", message: "Answer questions?", updatedInput: shownCardInput(e) };
  },
```

### 2.2 ② `backgrounding: "never"` 的真实作用【S】

默认值就是 `"never"`（`m0268_0x1170eeec.js:917` `Gzi`：`e.backgrounding ?? "never"`），
真正会被读的地方只有一处——**能不能被「丢到后台」**（`m0591:179004`）：

```js
if (Gzi(e) !== "detach" || ...) return !1;    // 只有 detach 才允许后台化
```

CC 里声明 `backgrounding: "detach"` 的**只有两个内置工具**（全库 grep 确认）：
`WebFetch`（`m0591:107215`）与 `WebSearch`（`m0816_0x124876ec.js:2188`）。
其余内置工具全部 `"never"`（`m0591` 内 9 处，全库 89 处）。

> **复核补充（2026-11-14）**：全库还有 **4 个工具声明 `backgrounding: "self"`**
> （`m0591:222555`、`m0795:2238`、`m1531:3841`、`m2043:44`）。
> 原文说"其余内置工具全部 never"**不准确**。不过 `"self"` 没有任何读取点：
> 唯一读 `backgrounding` 的地方是 `Gzi(e) !== "detach"`（`m0591:179004`）
> 和 `e?.backgrounding === "detach"`（`m0591:105547`），**两者都只认 `"detach"`**，
> 所以 `"self"` 是死值（在当前版本里不影响行为，但说明这个字段还有未接线的一档）。
> 对 AskUserQuestion 的结论不变：它是 `"never"`，行为等价于「永不后台化」。

`AskUserQuestion` 从设计上**不允许被移出前台**：一个正在等用户回答的卡片如果被后台化，
用户就再也看不到它了。

同理 `isConcurrencySafe() { return !0 }`（`m0805:507`）**不代表可以并发弹多个**——
见 §2.4 的排队模型。

### 2.3 ③ `requiresUserInteraction()` 带来的四道自动旁路【S】

这个布尔在 `m0591` 内出现 **14 次**，其中 **11 次是调用** `requiresUserInteraction?.()`
（另 3 次是定义/导出）。关键几处：

| 位置 | 作用 |
| --- | --- |
| `m0591:66872`（`KCn`） | **禁止生成「总是允许」规则**：`requiresUserInteraction()` 为真的工具，`allow` 规则不能把它静默放行 |
| `m0591:140361`（`eRn`） | **hook 不能替它做决定**（`JZ(e)` 或 `requiresUserInteraction` 且非豁免名单） |
| `m0591:140842` | 权限决策阶段：无条件返回 `{behavior:"ask", decisionReason:{type:"other", reason:"requiresUserInteraction"}}` |
| `m0591:179590` | PreToolUse hook 若给了 `updatedInput`，普通工具会被 hook 直接满足；**但对它，hook 只是「满足了交互」，仍要它自己走一遍** |

`m0591:179611` 那句日志把它说得很直白：

```js
t(n.requiresUserInteraction?.()
  ? `Hook satisfied user interaction for ${n.name} via updatedInput`
  : `Hook approved tool use for ${n.name}, bypassing permission prompt`)
```

以及 `m0591:140361` 的豁免名单 `gHr = new Set([ec, cs])`（`ExitPlanMode`, `AskUserQuestion`）
+ `hHr` 的例外（MCP 工具除外）：

```js
function eRn(e, n) { return JZ(e) || Boolean(e.requiresUserInteraction?.()) && !hHr(e, n) }
function hHr(e, n) { return n !== void 0 && e.mcpInfo === void 0 && gHr.has(e.name) }
```

> 读法：`n` 是 hook 给的 `updatedInput`。**内置的 AskUserQuestion / ExitPlanMode 若被 hook
> 填了 `updatedInput`，就算 hook「替用户答了」**；MCP 工具则不享受这个豁免。

### 2.4 `isConcurrencySafe` 之所以为 true：它不并发弹窗

它被放进「可并发」分组，是因为一个纯读、纯等待的动作**不需要独占工具槽**。
真正防止弹两个卡片的是**权限请求排队器**（`lE.openAsk` / `closeAsk`）：

- `m1980_0x13438c9a.js:2469` `lE.openAsk({...}, { order, onTop })`
- `m1980:2514` `lE.closeAsk(ctx_6.toolUseID)`
- 排队位置由 `place: eo ? "under" : onTop ? void 0 : "queue"` 决定（`m1980:2494`）

也就是：**并发是允许的，但展示是串行的**（`order` 决定先后，`onTop` 决定是否插队）。
插队的条件是「不是 personOnly 且设了超时」——见 §7 的 AFK。

### 2.5 完整时序（一次提问从模型到模型）【A】

```
模型输出 tool_use(AskUserQuestion, {questions:[...]})
  ↓
[引擎] inputSchema 校验（m0591:181187 附近；失败走 validationErrorSteer）
  ↓ 失败 → tool_result(is_error) 带 steering 文本，本轮结束，模型重试
[引擎] 权限决策：requiresUserInteraction ⇒ 强制 {behavior:"ask"}
  ↓
[引擎] 按工具名匹配 permission dialog 描述符
        ni 表里 { matches: e => e === L8, dialog: dialog_4 }   (m1980:1900)
        dialog_4.kind = "permission_ask_user_question"          (m1980:132)
  ↓
[UI]   request_user_dialog / 本地渲染  → 用户在卡片上选/打字
  ↓
[UI]   组装 updatedInput = { questions(回显), answers, annotations, response?, followUp?, afkTimeoutMs? }
  ↓
[引擎] admitCardAnswer(shownInput, answer)  ← 白名单准入（§3）
  ↓ 拒绝 → deny + "the permission answer changed the call"（m0591:48919 起）
  ↓ 通过
[引擎] canUseTool 获得 {behavior:"allow", updatedInput}
  ↓
[工具] call() 只做 telemetry，不改数据（m0805:609）
  ↓
[工具] mapToolResultToToolResultBlockParam() 把结构化答案转成**自然语言**（§5）
  ↓
模型看到 tool_result 文本
```

**关键点：`call()` 是空的。** 真正的「回答」在权限层就已经确定，
`call()` 只是把结果原样搬出来 + 打点（`m0805:629-641`）。
这是「提问不是业务逻辑」的直接体现。

---

## 3. 答案准入：`admitCardAnswer`（最值得抄的一段）

### 3.1 为什么需要它【S】

权限通道的 `updatedInput` 是**任意 JSON**。如果不校验，
宿主/客户端可以塞进「模型没问过的问题」「改过的选项」「伪造的 preview」，
于是模型会以为「用户选了 B」，其实是宿主改的。
`admitCardAnswer` 的作用是：**用户只能回答，不能改写问题。**

#### 3.1.0 ⚠️ 可达性（复核订正，2026-11-14）：这道闸只在 `kind:"strict"` 上生效，而终端不是

**这是本文最重要的一条订正，直接改变复刻结论。**

`admitCardAnswer` **不是无条件调用**。引擎侧的调用点 `Ggi` 只有一个调用者——
`m2132_0x138210f6.js:173-178` 的 `eTt`，而它位于 `switch (r.kind)` 的 **`case "strict"`** 分支里：

```js
switch (r.kind) {
  case "launcher": {                       // ← 交互式终端走这条
    let updatedInput = toolResult.updatedInput && Object.keys(toolResult.updatedInput).length > 0
      ? toolResult.updatedInput
      : i2(s.name, e);
    return { ...toolResult, updatedInput, ... };   // 直接采信，不调 admitCardAnswer
  }
  case "strict": {                         // ← 只有这条调
    let k = Ggi(toolResult.updatedInput, e, s, r.onAnswerNotAdmitted),
        P = k === void 0 ? Vgi(r, toolResult.updatedInput, e, s) : void 0,
        updatedInput_2 = k ?? P?.input;
    ...
}
```

而 `r.kind` 的取值来自「答案策略」对象。全库检索（raw 模块，字符串未被 minify 破坏）结果：

| 检索 | 结果 |
| --- | --- |
| `Object.freeze({kind:"launcher"})` | **1 处**：`m0591:48905` 的 `Z8` |
| `kind:"strict"` / `kind = "strict"` / `.kind = "strict"` | **0 处**（283 / 303 / 319 三版都是 0） |
| `Z8`（`launcher`）的消费者 | `Kw`（主 `canUseTool`，`m0591:138300`）、`S$`、`m1982:53`、`m2124:86712`、`m2159` 的 `answers_3` |

**结论：319 里没有任何代码路径会构造出 `kind:"strict"`。** 所有内置入口——
交互式终端（`m2124:86712` 走 `Z8`）、teammate 车道（`m1982:53` 走 `Z8`）、
headless / SDK 的 `--permission-prompt-tool` 与 `createCanUseTool`（`m2159` 里 `answers_3 === Z8`）、
`createSandboxAskCallback`（`m2139:1775`）——传的都是同一个 `launcher` 策略。

**于是必须区分两件事：**

1. **`admitCardAnswer` 本身的规则设计是真实且完整的**（§3.2–§3.5 全部逐字可查，值得抄）；
2. **但在 319 的交互式终端里它根本不会被调用**。终端上的 `updatedInput` 走 `launcher` 分支
   被直接采信，随后由**另两道校验**兜底：
   - **`updatedInput` 的 inputSchema 校验**（`m0591:181780`）：
     ```js
     Uo.updatedInput !== void 0 && !Ufe(Uo.updatedInput)) {
       let xs = rus(e.inputSchema, Uo.updatedInput);
       if (xs !== null) { /* 拒绝：permission_updated_input_invalid */ }
     ```
     `rus` 只过滤 `unrecognized_keys` 类错误（`m0591:181068`），所以「多塞字段」会被放行，
     「字段类型错 / 缺必填」会被拒。
   - **hook 侧 `K1e` 深比较**（`m0591:138051`、`138169`、`138184`、`m2132:841`）：
     只在 PermissionRequest hook 参与时用，且语义是「hook 有没有改调用」，
     不是「用户的答案有没有改题目」。

**这对复刻意味着什么（重要）：**

- 如果你要的是「终端里也一样安全」，那 **CC 319 做不到**，不能照抄成"引擎强制调用"。
- `launcher` 与 `strict` 的差别是**信任模型不同**：`launcher` 假定交互式宿主可信
  （终端 UI 是 CC 自己的），`strict` 假定宿主不可信（SDK / 远程 / `--permission-prompt-tool`
  这类外部进程给的 `updatedInput` 必须逐字段核对）。
- 复刻时**应当把 `admitCardAnswer` 挂到所有分支上**——这正是 §15「不要照抄」里该补的一条。
  CC 之所以敢只在 `strict` 上挂，是因为它对自家终端 UI 有绝对控制权；这在你自己的实现里通常不成立。

> 读法：**§3 余下各节讲的是"这道闸内部怎么设计"，请当作设计参考而不是 319 的运行时行为事实。**
> 是否被调用、在哪条分支上被调用，以本节为准。

#### 3.1.1 这道闸本身的实现

引擎调用点（`m0591:48917` `Ggi`，下面按语义改写、省略了日志与 telemetry）：

```js
function Ggi(e, n, r, s) {                    // e=答案  n=原输入  r=tool  s=拒绝回调
  if (K1e(e, n)) return m2t(e) ? i2(r.name, n) : n;   // ① 完全相等 / 宿主的 cardForms
  if (e === void 0 || r.admitCardAnswer === void 0) return;   // ② 没实现就放行（老工具）
  let h;
  try { h = r.admitCardAnswer(n, e) }
  catch { /* 抛异常 = 拒绝 */ }
  switch (h.kind) {
    case "refused":  /* 记 rule，拒绝 */ return;
    case "admitted": /* 双重校验：原输入每个字段必须在结果里原样存在 */ return y;
  }
}
```

第 ① 条 `K1e(e,n)`（`m0591:48913`）：

```js
function K1e(e, n) { return m2t(e) || (e !== void 0 && d6(e, n)) }
```

- `d6(e, n)`（`m0591:48862`）是**带预算的深度相等**：先 `Mxt` 量一遍
  （`values / depth / chars` 三项，超过 `nZo` / `tZo` / `rZo = 1048576` 就放弃并 warn），
  再 `vGo(ee(_(e)), ee(_(n)))` 比对。**它是防 DoS 的**：一个超深的答案对象不会把引擎卡死。
- `m2t(e)`（`m0591:49231`）判「答案是不是**空对象**」——注意不是"宿主的 `cardForms` 形状"：

  ```js
  function m2t(e) { return e === void 0 || Object.keys(e).length === 0 }
  ```

  > **复核订正（2026-11-14）**：原文把它写成「判是不是宿主的 `cardForms` 那一类形状」，**错**。
  > 它判的是「空 == 用户什么都没改」。所以第 ① 条 `K1e(e,n)` 的整体含义是：
  > **「答案为空」或「答案与原输入深度相等」⇒ 视为未改动**。
  > 空答案时走 `i2(r.name, n)`——`i2`（`m0591:48759`）按 `bGo` 表剥掉 plan 模式专属字段
  > （`bGo = new Map([[ec, new Set(["plan","planFilePath"])]])`，`m0591:48747`），
  > **这是「进 plan 模式时不受理的字段要剥掉」的处理，与 cardForms 无关。**
  > 真正的 `cardForms` 在 `Vgi`（`m0591:48951`）里，且**只对 MCP 工具**
  > （`if (s.mcpInfo === void 0) return;`）生效。两者被原文混成一条了。

所以第 ① 条的真实含义是：**「用户什么都没改」也要先付一次有界的深比较成本**。
第 ② 条：**没实现 `admitCardAnswer` 的工具不受此约束**——这是向后兼容的缺口，
复刻时若要求「绝对安全」应该反过来（没实现就拒绝）。CC 选择兼容。

第二个关卡（`m0591:48939`，`admitted` 分支里）：

```js
if (!Object.keys(n).every((S) => Object.hasOwn(y, S) && y[S] === n[S])) {
  t(`${r.name}'s card-answer admitter changed a field the card showed: the answer is refused`);
  kYe(s, r.name, "changed_by_admitter");   // 记 telemetry
  return;
}
```

**这叫「二次确认」**：即使工具自己的 admitter 返回了 `admitted`，
引擎还要检查「原输入的每个字段是否原样保留」。防的是工具作者自己写错。
**这条是我最推荐抄的：不信任被检查方自己报的 ok。**

### 3.2 AskUserQuestion 自己的准入实现【S】

`m0805:77` `admitCardAnswer` → `:84` `le`（真正逻辑）。逐段：

```js
function le(e, t) {                     // e=原输入(卡片上显示的)  t=宿主交回的答案
  if (!N(t)) return A("not_an_object");  // 必须纯对象（原型只允许 Object.prototype / null）

  for (let d of Object.keys(t)) {
    if (d === ce) return A("host_field");            // ① 禁止宿主自带 afkTimeoutMs
    if (ue.has(d)) {                                  // ② answers/annotations/response/followUp
      if (Object.hasOwn(e, d)) return A("changed_shown_field");  //    卡片显示过就不许再带
      continue;
    }
    if (!Object.hasOwn(e, d)) return A("unknown_field");         // ③ 其它字段必须是原有字段
    if (!d6(t[d], e[d]) && !(d === "questions" && !Object.hasOwn(e, "title") && pe(t[d], e[d])))
      return A("changed_shown_field");                            // ④ 原有字段不许改值
  }
  ...
```

四条规则各自的意图：

| 规则 | 拒绝码 | 意图 |
| --- | --- | --- |
| ① `afkTimeoutMs` 由宿主提供 | `host_field` | **超时是引擎的事实，不是宿主的声明**。宿主不能假装「用户走开了」来换取自动继续 |
| ② 卡片上已显示的字段又被答案带上 | `changed_shown_field` | 防止「先显示 A，再偷偷换成 B」 |
| ③ 出现原输入里没有的字段 | `unknown_field` | 白名单外的字段一律不信 |
| ④ 原有字段值被改 | `changed_shown_field` | 除了 `questions` 的**白名单式放宽**（见下） |

### 3.3 `questions` 的唯一放宽：`pe()`【S】

`m0805:217` `pe(e, t)`：允许重写把「省略的默认值」显式补上——
即 `kind` 省略 ⇒ `"choice"`，`multiSelect` 省略 ⇒ `false`，`options[].preview` 省略 ⇒ 去掉。
除此之外，**问题数组必须深度相等**。

```js
if (q(item, "kind") === "choice" && !Object.hasOwn(a, "kind")) delete h.kind;
if (q(item, "multiSelect") === !1 && !Object.hasOwn(a, "multiSelect")) delete h.multiSelect;
```

> 为什么需要：`shownCardInput()`（`m0805:415`）在扩展模式下**会把 `kind` 补成 `"choice"`**
> 再交给 UI，所以 UI 交回来的答案带 `kind: "choice"`，而原输入没有。
> 不放宽就会自己拒自己。

### 3.4 答案体校验（长度 / 结构 / 枚举）【S】

```
L  = 32768   // 单字符串上限（answers / response）
oe = 8192    // 单条 notes 上限
se = 32768   // answers 总字符上限
ie = 2000    // re = mT - ie = 50000 - 2000 = 48000（总预算）
ae = 2000    // preview 原文长度上限（超过则只能精确匹配，见 he()）
M  = ["skipped", "replied_in_chat", "dismissed"]   // unanswered 三态
```

校验细则（`m0805:107-178`）：

- `answers` 的 key **必须是已知问题**，否则 `A("answers")`；
- 字符串答案长度 ≤ 32768；
- 多选答案必须是数组，且 `length <= optionCount + 1`（**+1 就是「Other」自己输入的那一项**）；
- `annotations` 只允许 `preview` / `notes` / `unanswered` 三个 key，其余 `A("annotations")`；
- `preview` 必须是 `he(O, g)` 通过的值（见 §3.5）；
- **`followUp` 只在扩展模式（`extended`）下接受**，否则 `A("follow_up")`；
- 总长 `i > 32768 || i + a > 48000` ⇒ `A("too_large")`（`i` 是答案字符数，`a` 是 preview + 问题文本字符数）。

`de()`（`m0805:184`）顺带判「是否扩展模式」：

```js
let extended_2 = e.length > 0;
for (let s of e) {
  if (!N(s)) { extended_2 = !1; continue; }
  if (typeof q(s, "kind") !== "string") extended_2 = !1;   // 每题都有 kind 才算扩展
  ...
}
```

**读法：`extended` 不是能力开关，而是「这批问题里每道都写了 kind」这个事实。**
所以 `followUp` 的可用性跟着**这一轮问题的形状**走，不跟宿主能力走——很反直觉，但源码就是这样。

### 3.5 preview 的「防伪」：`he()`【S】

`m0805:242`：

```js
function he(e, t) {                        // e=该问题的元信息  t=交回的 preview 字符串
  if (e.previews.has(t)) return !0;        // ① 和原样一字不差
  for (let n of e.previews)
    if (n.length <= ae && tHt(n) === t && !hU(n)) return !0;   // ② 允许「归一化后相等」
  return !1;
}
```

- ① **精确白名单**：只接受原样字符串；
- ② 才允许归一化：`n.length <= 2000`（`ae`）**且** `tHt(n) === t`（同样的 markdown 归一化）
  **且** `!hU(n)`（`hU` = 内容里含图片/无法渲染的东西，`m0236_0x116cf709.js:375` 用的是
  `vqe.test(dc(n)) || k(...)`）。

> 意图：preview 是**卡片上显示过的**，模型需要知道用户看到的是哪一段。
> 但如果预览太长（>2000）或含图，归一化可能损失信息，于是只认精确匹配。

### 3.6 `shownCardInput`：交给 UI 的那份 vs 交给引擎的那份【S】

`m0805:415`：

```js
function shownCardInput(e) {
  return {
    ...("title" in e && e.title && { title: e.title }),
    questions: _$e()
      ? e.questions.map(item => ({ ...item, kind: "kind" in item && item.kind ? item.kind : "choice" }))
      : e.questions,
    ...(e.metadata && { metadata: e.metadata }),
  };
}
```

**这是「显示契约」**：`checkPermissions` 返回的就是它（`m0805:606`）。
它做两件事：① 丢掉非显示字段；② 扩展模式下补齐 `kind`。

由此产生一个**必须理解的连锁**：`updatedInput` 里的 `questions` 是**补齐后的版本**，
而原 `tool_use.input.questions` 是**补齐前的**。所以 §3.3 的 `pe()` 放宽是必需的。

---

## 4. 校验失败时的「转向」：`validationErrorSteer`

### 4.1 机制【S】

引擎在 zod 校验失败后（`m0591:181187`）：

```js
let kl = e.validationErrorSteer?.(Ze, Mt.error);
if (kl) xs = `${kl}\n\n${xs}`;     // 把 steering 文本拼在常规错误前面
```

工具实现（`m0805:480`）：只在「选项数 < 2」时给话：

```js
if (_$e())
  return 'This call included a choice question with fewer than 2 options, so it was rejected and the
person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options;
if there is really only one path, state it as the approach you are taking and continue with the task.
Do not invent a filler second option.';
```

非扩展模式更严格（`:502`）：

```
... Do not retry this call and do not invent a filler second option. Instead, state the one path you
were going to offer as the approach you are taking, then continue with the task. If this call also
contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions
alone in a new call.
```

### 4.2 为什么这段值得单独一节

它处理的是**agent 用工具时最典型的坏行为**：为了凑 schema 编一个假选项。
提示词里连「Do not invent a filler second option」都说出来了，还给替代动作
（「把那一条路当作你的方案继续做」）。**复刻时这段几乎是逐字可用的。**

---

## 5. 答案回给模型的形态：`mapToolResultToToolResultBlockParam`

### 5.1 六种结局，六段话术【S】

`m0805:663`。按优先级判定（前一个命中就不看后面）：

> **复核订正（2026-11-14）**：原文标题写「五种结局，五段话术」，但同一张表列了 6 行，
> 源码也是 6 个分支（`if(afk)/else if(followUp)/else if(response)/else if(c)` 再在 `c` 里二分
> + 最后的 else）。已改为六。

| 序 | 条件 | 回给模型的文本 |
| --- | --- | --- |
| 1 | `afkTimeoutMs` 存在 | `No response after Ns — the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.` + （若有选区）`Before going idle the user had selected: …` |
| 2 | `followUp === true` | `The user asked for more questions before you proceed. So far they answered: … Call AskUserQuestion again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` |
| 3 | `response` 非空 | `The user responded: ${response}` |
| 4 | 有答案且**全部「规整」** | `Your questions have been answered: … You can now continue with these answers in mind.` |
| 5 | 有答案但**不规整** | `The user answered: … Read the answers carefully — they may request clarification, changes, or that you not proceed — and follow what they actually say.` |
| 6 | 都没有 | `The user did not answer the questions.` |

### 5.2 「规整」的判定（第 4/5 分支的分界）【S】

`m0805:690-715`，`questions.every(...)`：

- 该题有 `notes` ⇒ **不规整**（用户写了别的）；
- `kind === "text"`：答案为空 ⇒ 规整；答案必须是字符串且能 `Number()` 且落在 `[min,max]`（`number` 时）；
- `kind === "number"`：同上，用 `/^-?\d+(\.\d+)?$/` 校验；
- `choice` 单选：答案必须在题面 `options` 的 label 集合里，或为空 ⇒ 规整；否则**不规整**；
- `choice` 多选：数组且每个元素都在 label 集合里 ⇒ 规整；
  否则尝试 `W(y)` 解析成数组，要求 `sYt(g) === y`（能原样重新序列化）且每个都在集合里。

> **这一段是整个机制里最精巧的地方**：它区分了「用户只是选了我们给的选项」和
> 「用户做了点别的（写了备注 / 自己敲了一段）」。前者告诉模型「放心继续」，
> 后者告诉模型「先读清楚再动」。**这就是防止模型无视用户真实意图的关键分流。**

### 5.3 为什么不直接把 JSON 丢给模型

因为它用的是「自然语言 tool_result」而不是结构化字段。
好处：模型对自然语言的理解更稳，且能塞进指令（"do not start the task yet"）。
代价：解析靠模型，程序侧不好做断言。

**复刻建议**：两者都给——正文自然语言 + 结构化 `structuredContent`。
CC 这里只给了文本，是 319 的选择。

---

## 6. 「没答」被建模成三种状态 + 一条能力协商

### 6.1 三态枚举【S】

```js
M = ["skipped", "replied_in_chat", "dismissed"]     // m0805:74
```

| 值 | 含义（schema 描述原文，`m0805:348`） |
| --- | --- |
| `skipped` | 用户跳过了这道题 |
| `replied_in_chat` | 用户改为在对话里发消息 |
| `dismissed` | 用户关掉了卡片 |

语义非常明确的一条：**「模型看不到这个字段；要它读的文本放在 `answers` 里」**
（`The model does not see this field; put the text it should read in answers`）。
也就是说 `annotations.unanswered` 是**给宿主/客户端/遥测用的**，不是给模型的。
但 `mapToolResultToToolResultBlockParam` 里 `notes` 会进文本，`unanswered` 不进。

### 6.2 能力协商：`ask_user_question_unanswered_v1`【S】

`m0818_0x124b30c8.js:103`：

```js
jgn = "ask_user_question_unanswered_v1";
var FQs = [B1o, A, W1o, S, j1o, y, jgn];   // 能力清单
```

协议里的完整说明（`m0165_0x1145c609.js`，capability 列表处的描述）：

```
'ask_user_question_unanswered_v1' = an AskUserQuestion answer may set
annotations[question].unanswered ('skipped' | 'replied_in_chat' | 'dismissed'),
which the tool result echoes; send it only to a session that advertises this,
since an older CLI on a strict host refuses the whole answer.
```

**这套「能力名字符串 + 旧端拒绝整份答案」的做法很值得抄**：
它不是「静默丢字段」（那会让模型以为用户直接没答），而是**整份拒绝**，
让宿主立刻知道自己发错了。

### 6.3 读不到时的兜底【S】

schema 描述（`m0805:348`）：

```
Absent when the question was answered, and also when the answering client did not report it
(in a session that does not advertise ask_user_question_unanswered_v1, from an older client,
or in an older transcript): then only the text in `answers` says how it ended.
Treat any other value as absent.
```

- `.catch(void 0)`（`:348`）保证**任何非法值都退化成 absent**，不炸；
- 「三者都可能是 absent 的原因」被明说出来，避免模型把 absent 误解成「用户没答」。

---

## 7. AFK（走开）自动继续：唯一允许「无回答推进」的通道

### 7.1 设置项【S】

`m0094_0x112cc57f.js:7542`：

```js
askUserQuestionTimeout: () => B(["60s", "5m", "10m", "never"]).optional().catch(void 0)
  .describe("Idle time before Claude's questions auto-continue with any answers selected so far. " +
            "Defaults to never — auto-continue only runs when explicitly set to 60s/5m/10m.")
```

- **默认 never**，必须显式开；
- 读取链 `kBt()`（`m0126:4656`）→ `n0("askUserQuestionTimeout")[0]`；
- `n0` 只从**安全层**读（`m0126:4614` `jfa = ["policySettings","flagSettings","userSettings"]`，
  取值器 `vte` 在 `:4615`），
  **不读仓库里的 `.claude/settings.json`**——否则一个仓库就能让你「自动同意一切」。

  > **复核补充（2026-11-14）**：`vte` 的过滤条件比"只读这三个来源"更严格。它不是无条件读，
  > 而是每个来源还要过一次 `Kt(source)` **或** `UJ()` 里的 restrictive 声明
  > （`m0126:4620-4621`）：
  >
  > ```js
  > if (value_7 !== void 0 && (Kt(source_3) ||
  >     UJ().some(item => item.path.length === 1 && item.path[0] === e &&
  >        hHe(item.restrictive).some(h => h === zSe(item, s))))) n.push(...)
  > ```
  >
  > 也就是说：来源固定为 `policySettings / flagSettings / userSettings` 三者，
  > **在此之上**还要么该来源可信（`Kt`），要么这一项被显式标成了 restrictive。
  > 结论（仓库不能设置）不变，但机制比原文描述的「只从这三个来源读」多一层开关。
- 映射成毫秒（`m0349_0x1193beaf.js:11762`）：`{"60s":60000,"5m":300000,"10m":600000}`（`Pbs`）。

### 7.2 计时器【S】

`full:68795` `qPe`（m2124 的 deminified 与 full 逐字节相同，行号等价）：

```js
function qPe({ enabled, timeoutMs, countdownThresholdMs, onTimeout }) {
  M = i.CLAUDE_AFK_TIMEOUT_MS ?? M ?? qLo;                    // full:68801, qLo = znt = 60000
  D = Math.min(D ?? i.CLAUDE_AFK_COUNTDOWN_MS ?? $Lo, M);     // 同一行, $Lo = 20000
  ...
  sl(() => {                                    // 每 1000ms
    if ($e.current) return;
    Nae();                                      // flush 交互记录
    let Xe = Date.now();
    if (f4e() === !0) Qe.current = Xe;          // 终端有焦点 ⇒ 认为人还在
    let nt = Xe - Math.max(pm(), Qe.current);   // 距「最后一次交互」
    let wt = nt >= M - D ? Math.max(0, Math.ceil((M - nt) / 1000)) : xe;
    if (je(wt), nt >= M) { /* 触发 onTimeout */ }
  }, h ? 1000 : null);
  return { remainingSeconds: Oe, showCountdown: Oe * 1000 <= D, timeoutMs: M };
}
```

三个关键量：

```js
var znt = 60000;      // m0040:4783  默认 AFK 超时 = 60s（qLo = znt，full:68792）
var $Lo = 20000;      // 倒计时显示阈值 = 20s
```

- **默认 60 秒**（`qLo = znt = 60000`），但**只有 `enabled` 为真时才跑**；
- `enabled` 的判定（`full:69353`）：

```js
nl = !qr && !M.hasExternalRacer && !Gt() && (Oe !== null || i.CLAUDE_AFK_TIMEOUT_MS !== void 0)
```

  ⇒ 排除：读屏器（`qr`）、有外部竞争应答者（`hasExternalRacer`）、某模式下禁用（`Gt()`），
  且必须「设置里开了」或「环境变量强制指定」。
- **终端焦点即视为人在场**（`f4e()`/`terminalFocus`，`m0040:4787`）：切走的终端不算「人看着」，
  **切回来（有焦点）就重置计时**。这防的是「用户切到浏览器看东西，结果问题被自动回答」。
- 显示：剩余 ≤ 20s 才显示倒计时，文案 `auto-continue in ${Oe}s · any key to stay`
  （`full:69479`，`iAe`）。**"any key to stay" 是真的**：任何按键都会刷新交互时间。

### 7.3 自动继续提交的是什么【S】

`full:69365` 附近（AFK 分支）：

```js
CZ({ questions, answersToSubmit, questionStates, input, imageAttachments, imageLimits,
     afkTimeoutMs: bc, isScreenReader }).then(...)
```

`CZ`（`:69523`）组装：

```js
let Oe = { ...input, answers: D, annotations: xe, ...(h.afkTimeoutMs && { afkTimeoutMs: h.afkTimeoutMs }) };
return { behavior: "allow", updatedInput: Oe, ...(je && je.length>0 && { contentBlocks: je }) };
```

也就是说：**AFK 自动继续 = 用「当前已选的部分答案」当作完整答案提交，并打上 `afkTimeoutMs`**。
模型收到的是 §5.1 第 1 种话术，即「用户可能不在，你自己判断；可以稍后再问」。

几个护栏：

- 触发前再确认一次 `pm() >= ld || f4e() === !0`（期间用户动过就放弃）；
- `N(ol) === !1`（提交被拒）就复位，不重试；
- 打点 `tengu_ask_user_question_afk_auto_advance`（`questionCount` / `hadPartialAnswers` / `isInPlanMode`）。

### 7.4 另一个超时：对话框截止时间（不是 AFK）【A】

`m0349:11761`：

```js
var Pw = 300000;                               // 默认 5 分钟（m0349:11761）
function nGe() { return i.CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS ?? Iw(azn()) ?? Pw }
```

对应设置 `dialogExpiry`，读到它的函数是 `nGe()`（`m0349:11784`，实际读 env 在 `:11785`）。
它管的是**「远端/宿主卡片挂了多久算过期」**，与「人是否走开」是两件事：

- AFK：人还在、只是没动 → 自动继续（答案带 `afkTimeoutMs`）；
- 对话框截止：**没人接手** → `default` 结果，通常是 `{behavior:"cancelled"}`（`m1980:139`）。

协议文档明说二者的区别（`m0165` `dialog_kind` 描述）：

```
An unanswered dialog is cancelled by the CLI after its dialog deadline; the CLI may send one
that has no deadline, which stays up until it is answered or the CLI withdraws it with a
control_cancel_request.
```

---

## 8. 「再来一轮」协议：`followUp`

### 8.1 契约【S】

```js
kZt = "The user asked for more questions";                                        // m0403:9
v$i = `${kZt} before answering; this is a request for another round, not an answer.`;  // m0403:10
```

提示词侧（`m0403:57`，`R$i` 里）：

```
The user can also ask you for more questions; when the result says so,
call this tool again with follow-up questions before doing the task.
```

结果侧（`m0805:689`）给两套话术：

- **已有部分答案**：
  `${kZt} before you proceed. So far they answered: ${c}.${r} Call ${name} again with follow-up
   questions that build on these answers (do not repeat these); do not start the task yet.`
- **什么都没答**：
  `${kZt} before answering.${r} Call ${name} again now with further questions about this decision
   (do not repeat these); do not proceed with the task yet.`

两句都显式带「**do not repeat these**」和「**do not start the task yet**」。
前者防重复提问，后者防模型误以为可以开工。

### 8.2 约束：只在扩展模式下有效【S】

`m0805:174`：

```js
if (typeof R !== "boolean" || !extended) return A("follow_up");
```

`extended` 来自本轮问题是否**每题都写了 `kind`**（§3.4）。所以：
**一个用老格式（省略 kind）提问的调用，其答案不能带 `followUp`，会被准入层拒绝。**
这是复刻时最容易踩的坑——「我以为 followUp 是全局能力」。

输出版 schema 也印证（`m0805:409`）：

```js
followUp: I().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
```

### 8.3 转录层如何显示【S】

`m2057_0x1350b61e.js:1022` `fy`：

```js
let b = g ? (M ? "User asked Claude for more questions (so far):"
             : "User asked Claude for more questions")
          : "User answered Claude's questions:";
```

历史记录里会明确写「用户要求再问」，不是一个普通的答案行。

---

## 9. UI 层：选择器、Other、Chat about this、提交页

> 全部在 `m2124_0x1363573f.js`（2.7 MB，UI 大模块）。
> 下文 `full:` 前缀的行号指 `reconstructed319/full/m2124_0x1363573f.js`。

### 9.1 组件分层【A】

| 组件 | 符号 | full 行号 | 职责 |
| --- | --- | --- | --- |
| 渲染挂钩 | `lAe` | `:68906` | 注册到 `ui.render`，把引擎 payload 变成组件树 |
| 主对话框 | `sAe` | `:69028` | 状态机 + 键盘路由（Tab/←/→/Enter/Esc） |
| 单题表单 | `cZ` | `:68333` | 选项列表 + Other 行 + Chat 行 |
| 提交页 | `pZ` | `:68684` | 「Review your answers」 |
| 页签条 | `Ok` | `:67744` | 窄屏降级、已回答打勾 |
| AFK 倒计时 | `iAe` + `qPe` | `:69458` / `:68795` | 右下角 `auto-continue in Ns · any key to stay` |
| 旁注提示位 | `aAe` | `:69492` | 插件/通知的角标 |

### 9.2 「Other」不是模型给的，是 UI 造的【S】

`full:68468`（在 `cZ` 里）：

```js
let qr;
if (un[30] !== Qr || ...) qr = {
  type: "input",
  value: "__other__",
  label: "Other",
  placeholder: Qr,                      // "Type something" 或 "Type something."
  initialValue: ls,                     // 上次输入的值，切回来还在
  takesPasteFromOtherRows: !0,
  vimEditing: Ar,
  onChange: or,
}, ...
```

`Qr` 的取值（`full:68444`）：

```js
const Qr = D.multiSelect ? "Type something" : "Type something.";
```

**多选时是 `"Type something"`（句号会让人以为是完整句子），单选时是 `"Type something."`。**
这个细节说明文案被认真打磨过。

拼装顺序（`full:68489`）：

```js
let _r = [...jn, ...wr, ...rs];    // jn=真实选项  wr=[Other行](或空)  rs=[Chat about this](或空)
```

三个开关：

- `hideOtherRow`（`cZ` 的 `$e`，`full:68343`；默认化在 `full:68360` 的 `no = $e === void 0 ? !1 : $e`）：
  由上游 `sAe` 传 `M.isEngineConfirm && M.metadataSource === Hqr`（`full:69414`）
  ⇒ **引擎内部确认弹窗不给 Other 行**。
  `Hqr` 就是 `m2122_0x13630d78.js` 里 `source = "mod_hot_reload"` 的导出别名（`m2122:850` 的
  `export { source as Hqr, ... }`，`source` 定义在同一文件内）——
  **确认无误，这是热更新插件的渲染来源。**

  > **复核订正（2026-11-14）**：原文下面这一段把 `no` 说成 `isInTextInput`，**是错的。**
  > `cZ`（`full:68333`–`68684`）**整个函数体里没有任何 `isInTextInput`**
  > （`awk 'NR>=68333 && NR<=68684' | grep -c isInTextInput` → 0）。
  > `isInTextInput` 只出现在 `tZ`（状态机，`full:67638/67642/67669/67675/67683/67719`）
  > 和 `sAe` 的解构里（`full:69129`），**不属于 `cZ`**。
  >
  > `cZ` 里真正控制「Other 行去留」的**只有** `no`（= `hideOtherRow`），
  > 见 `full:68487` 的 `wr = no ? [] : [qr]`——**没有任何"光标进文本框就移除 Other 行"的逻辑**。
  > 原文那条描述在 319 源码里找不到依据。

- `no`（= `hideOtherRow`，见上）：**唯一的 Other 行开关**。
  另有一处 `vn = D.options.length + (no ? 1 : 2)`（`full:68404`）用它算「Chat about this」的编号位。
- `ao`（`ot()`，读屏器，`full:68479-68483`）：`ao && !D.multiSelect` 才给 Chat 行
  ⇒ **读屏模式下多选不给「Chat about this」**，只有单选给。

### 9.3 「Chat about this」：把「不选」变成一条正式出口【S】

`full:68480`：

```js
if (un[35] !== ao || un[36] !== D.multiSelect) pr = ao && !D.multiSelect ? [{
  type: "text",
  value: "__chat__",
  label: "Chat about this"
}] : [];
```

选它走的是 `onRespondToClaude`（`full:68657`）：

```js
if (xi === "__chat__") { Ot(); return }
```

最终落到 `Nht`（`full:69562`）：

```js
let Oe = `The user wants to clarify these questions.
    This means they may have additional information, context or questions for you.
    Take their response into account and then reformulate the questions if appropriate.
    Start by asking them what they would like to clarify.

    Questions asked:
${B0o(...)}`;
return { behavior: "deny", feedback: Oe, ... };
```

**这是重要的一手：它返回 `behavior: "deny"` 而不是 allow。**
「用户想聊聊」被建模成**拒绝这次提问 + 一段反馈**，于是：
- 工具调用记为被拒（转录里能看出来）；
- 反馈文本作为 `deny` 的 message 回到模型；
- 模型被明确要求「先问用户想澄清什么」。

**这比「假装用户答了某选项」干净得多**，复刻强烈推荐照做。

### 9.4 Esc / 取消 = 普通 deny【S】

`full:69155`（`Un`）：

```js
if (N({ behavior: "deny" }) === !1) return;
if ($e) l("tengu_ask_user_question_rejected", {...});
```

deny 之后模型收到的就是标准的
`The user doesn't want to proceed with this tool use. ...`（`m0162_0x1144f845.js:202` `Km`）。

### 9.5 键盘：一套可读的约定【S】

`full:68041` `Ar`（onKeyDown，**位于 `tZ`（`full:67897`）内**，不在 `cZ`）：

```
Esc            → 取消
↑/Ctrl+P       → 上一项
↓/Ctrl+N       → 下一项（到末尾则进提交页）
Enter          → 选中
1–9            → 直接选第 N 项
n              → add notes（仅带 preview 的题）
Tab / ← →      → 切题
Ctrl+G         → 在外部编辑器里编辑当前输入
```

底部提示条只在能力可用时显示（`full:68241-68273`）：
`enter select · ↑↓ navigate · n add notes · tab switch questions · Ctrl+G edit in X · esc cancel`。
**「提示条文案由实际可用能力生成」**——`fi` 那一项只有 `$t && ao` 才出现（`full:68261-68266`）。

> **复核补充（2026-11-14）**：`1–9` 的判定条件是 `or.key.length === 1 && or.key >= "1" && or.key <= "9"`
> （`full:68064`），然后用 `parseInt(key,10)-1` 去比 `yo.length`——**这是 9 项以内的直接选择**。
> 注意 `full:68064` 这一行紧跟 `escape` 分支之后，`n`（add notes）在它之前
> （`full:68063` `or.key === "n" && !or.ctrl && !or.meta`），所以按 `n` 不会落到数字分支。
>
> `cZ`（单题表单）自己**也有一套更简的键盘处理**（`full:68394-68407`），只有
> `up/ctrl+p`、`return`、`escape`、`up/down` 四种，**不含数字选择与 `n`**。
> 数字选择与 `n` 只在 `tZ` 的文本框/选项列表上生效。
> 原文把两者混成一节，容易让人以为单题表单也支持 `1–9`。

### 9.6 多选 vs 单选的两种控件【S】

`full:68620` 起：

- 多选走 `jj`（带 `submitButtonText`：最后一题是 `"Submit"`，否则 `"Next"`）；
- 单选走 `Ze`，`layout: "compact-vertical"`。

多选的「Other」是**把 Other 行的文本值并进数组**（`full:68627-68632`）：

```js
let ca = Vs.includes("__other__") ? (tr.current?.question === er ? tr.current.value : Oe[er]?.textInputValue) : void 0;
let vi = Vs.filter(FLo).concat(ca ? [ca] : []);     // FLo = (v) => v !== "__other__"
nt(er, vi, void 0, !1);
```

于是「多选 + 自己写一个」在数据层是**同一个字符串数组**，落地时由 `sYt` 序列化成 `"A, B, 我写的"`。

### 9.7 提交页：允许「没答完就提交」【S】

`full:68712-68724`：

```js
Xe = !te && e(s, { marginBottom: 1, children: e(Lu, {
  status: "warning",
  children: "You have not answered all questions"     // full:68717
})});
...
e(Jn, { confirmLabel: "Submit answers", cancelLabel: "Cancel", ... })   // full:68762
```

**只警告，不阻止。** 这是刻意的：有的问题用户就是不想答，
强行拦住会逼出「随便选一个」的坏结果。配合 §6 的三态，模型能知道「哪个没答」。

### 9.8 页签条的降级【A】

`full:67744` `Ok`：可用宽度算不出足够位置时：

1. 优先完整显示（含 `✓ Submit`）；
2. 放不下就**只显示当前题的 header**；
3. 再放不下就把非当前题压到 `Math.max(6, ...)` 个字符。

窄终端不会崩，只是丢信息。**这是 CC 所有 UI 的一致做法（渐进降级）。**

### 9.9 读屏器适配【S】

`iAe` / `Lht` 相关：

- 读屏模式下**禁用 preview 的旁注通道**（`Cht`/`Lht`：`!h.multiSelect && h.options.some(M => M.preview !== void 0)`）；
- `CZ` 里 `Ye = !h.isScreenReader && Lht($e)` ⇒ 读屏时 `annotations.preview` 不生成；
- `B0o` 里同样 `!te && Lht(xe)`；
- 读屏模式下不显示 AFK 倒计时（`Full:69353` 的 `!qr`）。

> 读法：**preview 是视觉等价物，读屏器用户的等价物是「描述文字」。**
> 所以读屏模式不假装有 preview，而是不做这块，避免产生「`annotations.preview` 里是空串」的假数据。

---

## 10. 三种题型的实现边界（`kind`）

### 10.1 谁支持扩展题型【S】

| 环节 | 支持 `kind` 的依据 |
| --- | --- |
| schema | `m0805:280` `J()`，`kind` 为 `B(["choice","text","number"]).optional()` |
| 校验 | `m0805:294` `ye()` 的 `superRefine` |
| 准入 | `m0805:184` `de()` 用 `typeof kind === "string"` 判 extended |
| 提示词 | `m0403:51` `R$i`，只在 `_$e()` 为真时拼进 prompt（`m0805:464`） |
| 渲染 | **终端主对话框完全不读 `kind`**（见 §10.2 订正） |

（原先我在这里写过「`full:68352` 一带能看到 `text` 的专用分支」，**那是错的**：
该行是 `onTabNext: It`。真正的 `kind === "text"` 渲染分支在 `full:57261`
（`M.kind === "text" && e(R_e, {...})`），属于 `__e` 这个**问卷（survey）组件**
（字段 `orgName` / `helperText` / `SURVEY_QUESTION_TYPE_SINGLE_SELECT`），
不是 AskUserQuestion 对话框。详见 §10.2 的订正。）

### 10.2 终端主对话框根本不读 `kind`（**订正**）

**先说结论，因为它推翻了我最初的一个判断：**
终端那套对话框（`m2124` 的 `lAe`/`sAe`/`cZ`/`tZ`/`pZ`，full `:68906`–`:69630`）
**从头到尾没有读过 `question.kind`**。用 awk 在该区间内 grep `kind`，命中的 6 处全是
`preview.kind`（`"full"` / `"withheld"`），与题型无关：

```
68074   qr = zo?.preview === void 0 ? null : zo.preview.kind === "full" ? ... : ePe
68878/68880   kind: "withheld"
68882         kind: "full"
69054   if (It.preview?.kind !== "full") { ... }
69535   wt = nt?.preview?.kind === "full" ? nt.preview.markdown : void 0
```

（上表最后一行原写 `69617`，**2026-11-14 复核订正为 `69535`**；
`69617` 那一行实际是 `function m4n({`，与 `kind` 无关。
重扫区间 `67897`–`69640` 后，命中数仍是 5 组、全部为 `preview.kind`，结论不变。）

同一区间内也**没有** `placeholder` / `step` / 数字滑块相关的处理
（命中的 `Math.max` 全是宽度/行数计算，`placeholder` 只有 Other 行与 Notes 输入框）。

**那 `kind: "text"` 的代码在哪？** 在 `full:57099` `C_e` 与 `full:57158` `__e`——
`__e` 的入参是 `{question, orgName, isLast, value, inOpenGrace, onChange, onNext}`（`full:57158-57168`），
`orgName` 只可能是问卷；再往上，调用它们的 `b8`（`full:56951`）props 里直接就有 `survey: M`
（`full:56954`），字段名 `SURVEY_QUESTION_TYPE_SINGLE_SELECT` 在 `full:56544`。
**这三者是「问卷（survey）」组件，不是 AskUserQuestion 对话框。**
两者字段名形似（都有 `question` / `kind` / `options`），非常容易误认——我第一版就是把它们当成了 AskUserQuestion。

**所以终端里传一道 `kind:"text"` 的题会发生什么？**
`cZ` 只做 `jn = D.options.map(OLo)`（`full:68423`），而 `text` 题按 superRefine
（`m0805:309-313`）**必须 `options: []`**。于是：

- `jn = []`（无真实选项）
- `_r = [...jn, ...wr, ...rs]`（`full:68489`）⇒ 列表里**只剩 Other 行**（可能还有 Chat 行）
- Other 行的 placeholder 由 `D.multiSelect` 决定（`full:68444`），**不读题目的 `placeholder` 字段**
- 用户输入的文本会走 `Ye(po, Un)` → `answers[question] = "用户输入"`
- 最终 `mapToolResultToToolResultBlockParam` 的 `kind === "text"` 分支（`m0805:699`）
  能正确识别这是文本题，判定「规整」

⇒ **终端其实「能用」一道 text 题——但它是靠「空选项列表 + Other 行」这个巧合实现的，
不是靠题型渲染。** 题目的 `placeholder` 被忽略，也不会有专门的文本框样式。

**数字题（`kind: "number"`）则真的没有入口**：`min`/`max`/`step`/`defaultValue`/`unit`
在终端 UI 里完全不读，用户只能在 Other 行里敲一个字符串。
好在 `m0805:699-705` 的结果判定会把 `"42"` 之类解析成数字并检查是否落在 `[min,max]`，
所以模型侧仍能拿到合法数字——只是**没有滑块**。

**能力开关的角度（这一条仍然成立）**：扩展题型的提示词确实不发给终端。
`m0975:947` 的 `ns` 集合（`:906`）是
`["sdk-ts","sdk-py","sdk-cli","local-agent","claude-desktop","claude-desktop-3p"]`，
本地 `cli` entrypoint 不在其中，所以 `m0975:949` 的 `CLAUDE_CODE_QUESTION_EXTENDED` 对终端不生效，
`m0805:464` 的 `S = _$e() ? R$i : ""` 也就不会把扩展题型说明拼进提示词。

⇒ **结论订正为：不是「终端不渲染 number」，而是「终端根本不按题型渲染，提示词也不引导模型用扩展题型」。**
两件事同时在，所以终端用户永远只会看到选择题——与观察到的现象一致。

### 10.3 preview 的双格式约定【S】

`m0403:20` `T$i = { markdown: ..., html: ... }`，两套提示词按 `jOo()` 选（`m0805:466`）：

| 宿主 | 允许内容 |
| --- | --- |
| `markdown` | 任意 markdown：ASCII 图、代码片段、表格；等宽框内渲染 |
| `html` | 自包含 HTML 片段，**不许 `<html>/<body>/<script>/<style>`**，只能内联 `style` |

`html` 侧的校验在 `create().validateInput`（`m0805:584`）：

```js
if (jOo() !== "html") return { result: !0 };
for (let t of questions_4) for (let n of t.options) {
  let s = xe(n.preview);
  if (s) return { result: !1, message: `Option "${n.label}" in question "${t.question}": ${s}`, errorCode: 1 };
}
```

`xe()`（`m0805:723`）三条正则：禁 `<\s*(html|body|!doctype)`、禁 `<\s*(script|style)`、
必须有至少一个 `<tag>`。

宿主格式怎么定的（`m0975:945`）：

```js
if (fmt === "markdown" || fmt === "html") WOo(fmt);
else if (!s.startsWith("sdk-") && s !== "claude-desktop" && s !== "local-agent" && s !== "remote"
         && !(s === "claude-vscode" && h)) WOo("markdown");
```

⇒ **终端（`"cli"`）默认 markdown；SDK / 桌面 / remote 默认不给（除非 env 指定）。**

### 10.4 preview 的尺寸与降级【S】

| 常量 | 值 | 用途 |
| --- | --- | --- |
| `Aft` | 2000 | 超过就不渲染（`gZ`，`full:67485`） |
| `wr = pr - 30 - 4` | 动态 | 右侧预览栏宽度（`full:68079`），左侧选项栏固定 30 列 |
| `ts = Math.max(1, rs - 26 - os)` | 动态 | 预览最大行数 |

超限时显示占位（`full:67486`）：

```
"(preview cannot be shown in full — compare the option labels and descriptions instead)"
```

**「不能显示就明确说不能显示，并给出替代比较方式」** —— 这条比「静默截断」好得多。

---

## 11. 提示词工程：六段可组合的文本

### 11.1 组装逻辑【S】

`m0805:437` `prompt()`：

```js
async prompt({ model, leanPrompt, leanRewrite, tools }) {
  let i = bD({ model, leanPrompt }),           // 是否 lean 模式
      a = hQr(tools),                          // 工具列表里是否含 EnterPlanMode / ExitPlanMode
      h = i && p3({ model, leanRewrite })
            ? (a ? Svs : TWi)                  // lean + 新提示词
            : (a ? X_s : C$i),                 // 完整提示词
      c = "";
  if (i) {
    let x = v("tengu_cinder_plover", "").trim();
    c = x ? `\n${x}\n` : A$i;                  // 可被 feature flag 覆盖的「克制使用」段
  }
  let m = v("tengu_cinder_wren", ""),
      r = typeof m === "string" ? m.trim() : "",
      w = r ? `\n${r}\n` : "",
      S = _$e() ? R$i : "";                    // 扩展题型说明
  let R = h + c + x$i + w + S;
  let d = jOo();                               // preview 格式
  if (d === void 0) return R;
  return R + T$i[d];                           // 追加 markdown/html 版 preview 说明
}
```

六段（都在 `m0403_0x119fe322.js`）：

| 变量 | 行 | 内容 |
| --- | --- | --- |
| `X_s` / `C$i` | `:41` / `:48` | 核心使用规则（完整版 / 带 plan-mode 版） |
| `Svs` / `TWi` | 外部（`m0274:370` / `:377`） | lean 版规则 |
| `A$i` | `:59` | 「克制使用」段（可被 flag `tengu_cinder_plover` 覆盖） |
| `x$i` | `:62` | 「模态 UI」段 |
| `R$i` | `:51` | 扩展题型说明（仅扩展模式） |
| `T$i[d]` | `:20` | preview 说明（按 markdown/html） |

### 11.2 核心规则原文（`X_s`，`m0403:41`）【S】

```
Use this tool only when you are blocked on a decision that is genuinely the user's to make:
one you cannot resolve from the request, the code, or sensible defaults.

Usage notes:
- Users will always be able to select "Other" to provide custom text input
- Use multiSelect: true to allow multiple answers to be selected for a question
- If you recommend a specific option, make that the first option in the list and add
  "(Recommended)" at the end of the label
```

### 11.3 「克制使用」段（`A$i`，`m0403:59`）【S】

```
Reserve this for decisions where the user's answer changes what you do next — not for choices with a
conventional default or facts you can verify in the codebase yourself. In those cases pick the obvious
option, mention it in your response, and proceed.
```

**这一段是「不要拿提问当确认按钮」的正面表述，并给了替代动作。**
配上 §4 的 `validationErrorSteer`（防凑数选项），
以及「单选项提问直接拒绝」的规则，构成三重防线。

### 11.4 「模态 UI」段（`x$i`，`m0403:62`）【S】

```
The user may see only the question dialog: tool results and text you wrote earlier in this turn may not
be on their screen while it is open. Make each question stand on its own: if it depends on something you
found, say so briefly, and name the items you are asking about in the question itself.
```

**它承认 UI 是模态遮挡的**，并据此要求每个问题自包含。
这是「工具提示词与 UI 现实对齐」的教科书例子 ——
绝大多数 agent 在这里会问出「上面那个要改吗？」这种脱离上下文的问题。

### 11.5 plan-mode 段（`C$i`，`m0403:48`）【S】

```js
C$i = `${X_s}
Plan mode note: To switch into plan mode, use ${$S} (not this tool). Once in plan mode, use this tool
to clarify requirements or choose between approaches BEFORE finalizing your plan. Do NOT use this tool
to ask "Is my plan ready?", "Should I proceed?", or otherwise reference "the plan" in questions —
the user cannot see the plan until you call ${Vg} for approval.
`;
```

- `$S = "EnterPlanMode"`（`m0272_0x117327f5.js:5`）
- `Vg = "ExitPlanMode"`（`m0273_0x117328d8.js:5`）

**注意 `hQr(tools)` 的判定**（`m0591:74373`）：

```js
function hQr(e) { return Xlr($S, e) || Xlr(ec, e) }   // "EnterPlanMode" or "ExitPlanMode" 在工具列表里
```

⇒ **只有当前会话真的有 plan 模式工具时，plan-mode 那段提示词才出现。**
这是「提示词按可用工具裁剪」的标准做法，值得抄。

### 11.6 扩展题型段（`R$i`，`m0403:51`）【S】

```
Extended questions (this host renders them):
- Put the most important question first.
- Omit "kind" for an ordinary choice question. Use "kind": "text" for an open-ended question (a text
  box, no options) and "kind": "number" with "min"/"max" (optionally "step", "defaultValue", "unit")
  for a quantity. Prefer choices whenever the likely answers can be listed.
- Set multiSelect: true on choice questions unless the options are mutually exclusive (people answering
  are often still exploring).
- Optional "title" is one short line above the questions; optional per-question "description" is one
  helper line. Option descriptions are optional here too: add one only when the label alone would be ambiguous.
- Do not add "Other" or "Skip" options: the user can always type their own answer or leave a question
  unanswered. The user can also ask you for more questions; when the result says so, call this tool
  again with follow-up questions before doing the task.
```

**`Set multiSelect: true ... unless the options are mutually exclusive`** 与基础版
`multiSelect` 的 schema 描述（默认 false，`m0805:274`）口径不同：
提示词引导「倾向于开多选」，schema 默认却是单选。这是刻意的——**默认值保守，提示词鼓励**。

### 11.7 为什么不给模型「Other」和「Skip」【S】

`R$i` 与 `J().options.describe()`（`m0805:285`）都说：

```
There should be no 'Other' or 'Skip' option; the form lets the user type their own answer
or leave a question unanswered.
```

因为这两个**由 UI 无条件提供**（`full:68468` 的 Other 行、提交页允许未答完）。
模型再加就会重复，且会让「Other 里的 Other」这种荒谬结构出现在屏幕上。

---

## 12. 能力开关与宿主差异

### 12.1 三个 launchOption【S】

`m0040_0x11239205.js`（`launchOptions` 类）：

| 方法 | 行 | 默认 | 语义 |
| --- | --- | --- | --- |
| `questionPreviewFormat()` | `:2953` | `null` | `"markdown"` / `"html"` / `null`(不提供 preview 说明) |
| `extendedQuestionsEnabled()` | `:2959` | `false` | 是否支持 kind/title/description |
| `questionOptionDescriptionsOptional()` | `:2965` | `null` | 选项 description 是否可省略 |

读取器各自是 `jOo()`(`:5399`)、`_$e()`(`:5405`)、`XGs()`(`:5411`)。

### 12.2 在哪里被设置【S】

`m0975_0x1267ad81.js:944`（启动时，entrypoint 定型之后）：

```js
let s = (() => { ... return "cli" | "sdk-typescript" | "sdk-python" | "sdk-cli" | "claude-vscode"
                        | "local-agent" | "claude-desktop" | "remote" | "github-action" })();
OGs(s);
let fmt = i.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT;
if (fmt === "markdown" || fmt === "html") WOo(fmt);
else if (!s.startsWith("sdk-") && s !== "claude-desktop" && s !== "local-agent" && s !== "remote"
         && !(s === "claude-vscode" && h)) WOo("markdown");

let I = ns.has(i.CLAUDE_CODE_ENTRYPOINT ?? "") || s === "remote";
if (I && i.CLAUDE_CODE_QUESTION_EXTENDED) YGs(!0);
if (I && i.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS) JGs(!0);
```

`ns = new Set(["sdk-ts","sdk-py","sdk-cli","local-agent","claude-desktop","claude-desktop-3p"])`（`:906`）

**读法（重要）：**

- `preview` 是**默认开**的（终端也开，格式 markdown）；
- `extended` 与 `optionalDescriptions` 是**默认关**的，且**只有 SDK/桌面/remote 才允许开**
  （即便设了 env，本地 `cli` 也不会开，因为 `I` 为假）。

### 12.3 环境变量汇总【S】

| 变量 | 作用 | 位置 |
| --- | --- | --- |
| `CLAUDE_CODE_QUESTION_PREVIEW_FORMAT` | 强制 `markdown` / `html` | `m0975:946` |
| `CLAUDE_CODE_QUESTION_EXTENDED` | 允许扩展题型（仅 SDK/桌面/remote） | `m0975:949` |
| `CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS` | 选项 description 可省 | `m0975:950` |
| `CLAUDE_AFK_TIMEOUT_MS` | 覆盖 AFK 超时并强制启用 AFK | `full:68801` / `:69353` |
| `CLAUDE_AFK_COUNTDOWN_MS` | 倒计时显示阈值（默认 20000） | `full:68801` |
| `CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS` | 对话框截止（默认 300000） | `m0349:11768` |
| `CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS` | 关掉「需要权限」通知 | `m2132:63` |

### 12.4 设置项【S】

`askUserQuestionTimeout`（§7.1）、`dialogExpiry`（`m0126:4659` `azn()`）。
两者都只从 `policySettings` / `flagSettings` / `userSettings` 读（`jfa`，`m0126:4614`），
**仓库/项目 settings 不能设置它们** —— 这是安全设计：不能让一个仓库决定「自动同意」。

---

## 13. 远程 / SDK 通道：`request_user_dialog`

### 13.1 为什么不是普通工具调用【S】

当会话跑在 SDK / 桌面端 / remote 时，卡片不在本地终端，而在**宿主进程**里。
CC 没有为它开新协议，而是复用权限线的 control protocol：

`m0165_0x1145c609.js:11906`（`dialog_kind` 字段描述）：

```
Identifier for the dialog the host should render. Open string union — new kinds may be added without
bumping the protocol. A kind is only sent in sessions where some attached client declared it in
initialize.supportedDialogKinds (declare exactly the kinds you can render); on multi-client transports
the request still reaches every attached client. A host that receives a kind it did not declare must
not answer it (an error-subtype response is discarded and the dialog stays pending) — never with
{behavior: "cancelled"}, which is a real settlement treated as the user dismissing the dialog.
An unanswered dialog is cancelled by the CLI after its dialog deadline; the CLI may send one that has
no deadline, which stays up until it is answered or the CLI withdraws it with a control_cancel_request.
```

三条硬规则：

1. **必须先在 `initialize.supportedDialogKinds` 里声明**才能收到该 kind；
2. 收到没声明的 kind，**必须不答**（答 `cancelled` 会被当成用户真的关掉了）；
3. CLI 可能发**没有截止时间**的对话框，靠 `control_cancel_request` 撤回。

### 13.2 AskUserQuestion 的 dialog kind【S】

`m1980_0x13438c9a.js:132`：

```js
var dialog_4 = Wo({
  kind: "permission_ask_user_question",
  payload: p(() => Yy(e => typeof e === "object" && e !== null
      && "requestId" in e && "toolName" in e && "permissionResult" in e && "questions" in e)),
  result: p(() => Yy(e => typeof e === "object" && e !== null && "behavior" in e)),
  default: { behavior: "cancelled" },
});
```

匹配表（`m1980:1900`）：

```js
ce({ matches: e => e === L8, dialog: dialog_4, build: build_3 })
```

`build_3`（`m1980:430`）产出 payload：

```js
function build_3(e) {
  let r = build_4(e),                                   // 通用部分（requestId / toolName / permissionResult / ...）
      n = L8.inputSchema.safeParse(e.input),
      questions = n.success ? n.data.questions ?? [] : [],
      metadataSource = n.success ? n.data.metadata?.source : void 0,
      isEngineConfirm = e.permissionResult.forcedByCaller === !0
                     && e.requestSource === void 0 && Io(e.toolUseID);
  return { ...r, questions, metadataSource, isEngineConfirm };
}
```

`Io`（`m1980:192`）：`e => typeof e === "string" && e.startsWith("confirm_")`
⇒ **引擎内部的 `confirmWithUser` 调用（§14）会被标记 `isEngineConfirm`**，
在 UI 上隐藏 Other 行（§9.2）。

### 13.3 发送与结算【S】

`m0349_0x1193beaf.js:9965` `kbs()`：

```js
let requestId = IS(), S = !1,
    w = bridge.onResponse(requestId, dialog.kind, A => {
      switch (A.behavior) {
        case "completed": { S = !0;
          let I = dialog.result().safeParse(A.result);
          onSettled(I.success ? { kind: "answered", result: FZt(I.data) } : { kind: "malformed" });
          return; }
        case "cancelled": S = !0, onSettled({ kind: "cancelled" }); return;
        case "detached":  onSettled({ kind: "detached" }); return;
      }
    });
if (!bridge.sendRequest(requestId, dialog.kind, payload, toolUseId)) {
  bridge.cancelRequest(requestId), w(); return;
}
```

`lpo()`（`:10014`）把三种结局都收敛到 `{ result, source }`：

- `answered` → 用宿主结果；
- `malformed` → **回落 `dialog.default`**（并 warn）；
- `cancelled` → 回落 `dialog.default`。

`dialog.default = {behavior:"cancelled"}`，于是在引擎侧就等价于「用户没答」。
**「宿主给了看不懂的东西」与「宿主取消了」在这里被合并处理** ——
这是刻意的保守选择：宁可当作没答，也不猜。

### 13.4 结果校验的边界【S】

宿主返回的 `result` 必须通过 `dialog.result()` 的 zod schema（`{behavior: ...}` 起底）。
再往外，`admitCardAnswer`（§3）继续管 `updatedInput` 的形状。
**两道校验各管一段**：协议层管「报文形状」，工具层管「业务合法性」。

### 13.5 `requires_user_interaction` 的线上含义【S】

`m0165:10780`（权限请求报文里的字段）：

```
True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction
surface (Tool.requiresUserInteraction(): the user responds on the card itself), OR the pending ask is
localDisplayOnly ... OR the auto-mode classifier blocked the call and it was handed to a person ...
```

⇒ 宿主看到这个字段为 true，就**不能显示「一键允许/拒绝」按钮**，
必须渲染真正的卡片。这是 §2.3 的 `requiresUserInteraction()` 在协议上的投影。

---

## 14. 引擎内部也在用它：`confirmWithUser`

### 14.1 场景【S】

CC 自己需要「是/否」确认时，没有另造 UI，而是**复用 AskUserQuestion**：

`m0836_0x124d0f19.js:26` `uge` / `:64` `T`：

```js
let h = L8.inputSchema.safeParse({
  questions: [{
    question, header,
    options: choices.map(({label, description}) => ({ label, description: description ?? "" })),
    multiSelect: !1,
  }],
  metadata: { source },
});
if (!h.success) throw new R(`confirmWithUser(${source}): the question does not satisfy the AskUserQuestion schema: ...`);
let C = await L8.checkPermissions(h.data, toolUseContext_2);
if (C.behavior !== "ask") throw new R(`confirmWithUser(${source}): AskUserQuestion.checkPermissions answered ${C.behavior}, not ask`);
let W = { ...C, forcedByCaller: !0, ...(personOnly === !0 && { personOnly: !0 }) },
    U = `confirm_${randomUUID()}`;
```

三个要点：

1. **借 schema 校验**：内部调用也走 `L8.inputSchema`，保证形状一致；
2. **断言 `checkPermissions` 必须返回 ask**——把「工具契约变了」变成**显式崩溃**而不是静默错行为；
3. **`forcedByCaller: !0`** + id 前缀 `confirm_` ⇒ 引擎侧 `Io()` 判定为 engine confirm（§13.2）。

### 14.2 结果映射【S】

`m0836:115` `E()`：

| 引擎输入 | 内部结论 |
| --- | --- |
| `behavior: "allow"` 且 `updatedInput` 解析失败 | `unanswered / no_selection` |
| `allow` 且 `followUp === true` | `declined` |
| `allow` 且 `answers[q]` 为空 | `unanswered / no_selection` |
| `allow` 且答案匹配某选项 label | `chose` + 该选项的 `value` |
| `allow` 但答案不匹配 | `declined` + `typedAnswer`（用户自己写的） |
| `deny` 且 reason 是「host 关掉了」 | `unanswered / host_closed` |
| `deny` 且 reason 是 asyncAgent | `unanswered / no_one_to_ask` |
| 其它 `deny` / `ask` | `declined` |
| 信号已 abort | `aborted` |

最外层 `uge`（`:26`）**先判前提**：

```js
if (!Kat(toolUseContext)) return { kind: "unanswered", reason: "no_one_to_ask" };
```

`Kat`（`:22`）：

```js
function Kat(e) {
  let r = se(e);
  return nee() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk";
}
```

`nee()`（`m0589:40`）综合：没被策略禁掉（`tee()`）+ 交互可用（`XSs()`）。

### 14.3 值得抄的一点

**「内部确认」和「模型提问」共用同一个工具、同一套 schema、同一个准入函数。**
代价是内部调用要 `forcedByCaller` + 隐藏 Other；收益是**永远只有一条交互管道要维护**。
如果复刻时另造一套「确认对话框」，这两条路径的分歧会成为长期 bug 源。

> ⚠️ 这里说"同一个准入函数"指的是**代码只有一份**（`m0805` 的 `admitCardAnswer`），
> 但**它是否被调用取决于答案策略**，而内部确认与终端提问都走 `launcher`（`Z8`），
> 所以实际上**两边都没有跑这道闸**（§3.1.0）。"共用"是架构上的，不是运行时的。

---

## 15. 复刻清单（按优先级）

### P0：不做就不能用的

1. **把 ask 做成「权限请求」的一种**，而不是一个新的执行原语。
   最小接口：`requiresUserInteraction() -> true` + `checkPermissions() -> {behavior:"ask", updatedInput}`。
2. **`admitCardAnswer(shown, answer)` 准入函数**，四条规则逐条实现：
   禁宿主字段、禁重带已显示字段、禁未知字段、禁改已显示值。
   **并且必须挂到所有答案路径上**——319 只挂在 `kind:"strict"` 上，而那条分支没有生产者（§3.1.0）。
3. **引擎侧二次校验**（§3.1 末段）：每个原字段都要在结果里原样存在。
   不信任 admitter 自己报的 ok。**同样只存在于 `strict` 分支**，复刻时要自己接全。
4. **`answers` 的 key 用问题原文**，并且**强制问题文本唯一**（否则答案串）。
5. **六种结局分支**都要有独立话术（§5.1），尤其是「有答案但不规整」那一支。

### P1：决定体验好坏的

6. **「Chat about this」用 `deny + feedback` 实现**，不要伪造答案（§9.3）。
7. **允许未答完就提交**，只警告不阻断（§9.7）；配合 `unanswered` 三态。
8. **提示词三段式**：
   - 使用条件（"blocked on a decision that is genuinely the user's"）
   - 克制条款 + 替代动作（"pick the obvious option, mention it, proceed"）
   - 模态提示（"make each question stand on its own"）
9. **`validationErrorSteer`**：选项数不足时明说「不要编假选项」，并给替代动作。
10. **`"(notes only)"` 哨兵**：把「只写备注」与「选了选项」分开（§1.4），
    并配套 `W()` / `sYt()` 那对序列化/反序列化。

### P2：锦上添花

11. `followUp` 再来一轮协议（§8），注意它绑在「每题都有 kind」上。
12. AFK 自动继续（§7）：默认关、只读安全层设置、终端失焦不算、任何按键刷新。
13. preview 双格式 + 三条 HTML 校验 + 超长占位文案（§10.3/10.4）。
14. 页签条三级宽度降级（§9.8）。
15. 读屏器不做 preview 假数据（§9.9）。
16. 内部确认复用同一工具（§14）。

### 明确「不要照抄」的五处

- ❌ **`header` 的 12 字符上限只写在描述里**，schema 没卡（§1.1）。要强约束就自己加 `.max()`。
- ❌ **`admitCardAnswer` 未实现时直接放行**（§3.1 第 ② 条）。安全优先应反过来。
- ❌ **`admitCardAnswer` 只挂在 `kind:"strict"` 分支上**（§3.1.0）。
  319 里这条分支**没有生产者**，交互式终端走的是 `launcher`，答案被直接采信。
  CC 敢这么做是因为终端 UI 是它自己的、宿主可信；**你的实现里通常没有这个前提**，
  所以应当把准入函数挂到**所有**分支上，只保留"空答案/深度相等"这一条快路径。
- ❌ **`multiSelect` 答案用 `", "` 拼串**。标签里带逗号时必须靠引号转义（§1.4），
  一旦你的下游不用 `W()` 反解就会错位。建议直接存数组。
- ❌ **`answers` 以问题原文为主键**。问题一改（哪怕加个标点）答案就全丢。
  建议内部用 `questionId`，只在展示层用原文。

---

## 16. 跨版本：283 → 303 → 319

### 16.1 已核对的差异【S】

用「关键字符串是否命中」做的粗对比（每项都已复算，命令见 §17）：

| 特性 | 283 | 303 | 319 |
| --- | --- | --- | --- |
| 工具定义模块 | `m0521_0xcd40e06.js` | `m0635_0xf4ebc74.js` | `m0805_0x12477c99.js` |
| 提示词模块 | `m0254_0xc591222.js` | `m0317_0xeb20b80.js` | `m0403_0x119fe322.js` |
| UI / 对话框模块 | `m1478_0xd9951de.js` | `m1635_0x101da730.js` | `m2124_0x1363573f.js` |
| 核心 schema（1–4 问 / 2–4 选项） | ✅ | ✅ | ✅ |
| preview（markdown / html 双格式） | ✅ | ✅ | ✅ |
| 扩展题型 `kind: choice\|text\|number` | ✅ `["choice","text","number"]` | ✅ | ✅ |
| 顶层 `title` | ✅ "Optional single-line heading…" | ✅ | ✅ |
| `followUp` 再来一轮 | ✅ | ✅ | ✅ |
| AFK `afkTimeoutMs` | ✅ | ✅ | ✅ |
| `"(notes only)"` 哨兵 | ✅（1 处） | ✅（1 处） | ✅ |
| `CLAUDE_CODE_QUESTION_*` env | ✅（7 个文件） | ✅（7 个文件） | ✅（`m0975:946`） |
| `annotations.unanswered` 三态 | ❌ **无** | ❌ **无** | ✅ |
| `ask_user_question_unanswered_v1` 能力名 | ❌ 0 命中 | ❌ 0 命中 | ✅ |

**逐项复算结论：**

- `grep -rlaF "extendedQuestionsEnabled" claudecode283/modules/` → 只 1 个文件
  `m0015_0xbf29c82.js`（`launchOptions` 类，含 `extendedQuestionsEnabled(){return this.#k}` 与
  `replaceExtendedQuestionsEnabled`）。⇒ **283 已有扩展题型能力，不是 303 才加的**。
- `grep -rhao "CLAUDE_CODE_QUESTION_[A-Z_]*" claudecode283/modules/*.js | sort | uniq -c`
  → `EXTENDED` 9 次 / `OPTIONAL_DESCRIPTIONS` 9 次 / `PREVIEW_FORMAT` 4 次，
  分布在 7 个模块里。⇒ **三个 env 在 283 就存在，且计数与 303 完全一致**。
- `grep -rlaF "replied_in_chat" claudecode283/modules/` → **0 个**；
  `claudecode303/modules/` → **0 个**；319 → 2 个（`m0165`、`m0805`）。
- `grep -rlaF "ask_user_question_unanswered_v1"` → 283: 0、303: 0、319: 3。
- 283 的 `annotations` schema 只有 `preview` + `notes` 两个字段（`m0521` 里
  `preview:o().optional().describe("The preview content of the selected option…")` 紧跟
  `notes:o().optional().describe("Free-text notes…")`），**没有 `unanswered` 的 `.extend()`**。

⇒ **唯一实质性的跨版本新增是 `unanswered` 三态 + 对应的能力协商 `ask_user_question_unanswered_v1`，
版本是 319。** 其余（扩展题型、preview、followUp、AFK、notes-only 哨兵）283 起就有。

### 16.2 三版本共有的稳定骨架【A】

同一套分层在三个版本里完全一致，只有符号名与模块号变了：

| 层 | 283 | 303 | 319 |
| --- | --- | --- | --- |
| 引擎侧准入调用 | `m0357` 里 `Apo`（`if(e===void 0||r.admitCardAnswer===void 0)return;`） | 同构 | `m0591:48917` `Ggi` |
| 引擎侧二次校验 | 同 `m0357` | 同构 | `m0591:48939` |
| 工具侧准入 | `m0521` 内 | `m0635` 内 | `m0805:77` `admitCardAnswer` |
| `requiresUserInteraction()` | ✅ | ✅ | ✅ |
| `checkPermissions()` 恒 ask | ✅ | ✅ | ✅ |
| `"prompt the user"` searchHint | ✅ | ✅ | ✅ |

> 读法：**机制在 283 就已经定形**，319 只加了「没答」的表达力。
> 复刻时按 319 的完整形态做即可，不必担心「这是新特性、可能不稳」。

> ⚠️ 仍然只做了字符串层对比，**没有逐行 diff**。若要当源码事实用，
> 需按 §17 的方法对 `m0521` / `m0635` / `m0805` 三份逐函数比对。

### 16.3 为什么不能直接套模块号

319 的模块编号与 283/303 完全不同（303 是 `m0317`，319 是 `m0403`）。
本文的定位方法见 §17。

---

## 17. 定位方法（可复现）

### 17.1 本文所有坐标是怎么找到的

```bash
# ① 找工具定义模块（唯一含 isEnabled + admitCardAnswer + checkPermissions 的）
cd /d/git_repos/claude_hack
grep -rla "AskUserQuestion" claudecode319/modules/          # 16 个
grep -rla "admitCardAnswer" reconstructed319/deminified/     # 3 个 → 唯一工具是 m0805

# ② 找提示词模块（工具名常量所在）
grep -rlF 'k$i' claudecode319/modules/                       # m0403 + m0805

# ③ 找 UI（"Type something" 是关键字符串，全库唯一）
grep -rla "Type something" claudecode319/modules/            # 只有 m2124

# ④ 找协议字段
grep -rla "request_user_dialog" claudecode319/modules/
grep -rla "ask_user_question_unanswered_v1" claudecode319/modules/

# ⑤ chunk 名 → 模块文件（模块体内的 import 是 chunk 名）
python work/_chunkmap.py who work/_chunkmap319.json chunk-kfm993xq.js
```

### 17.2 本文引用的「关键坐标速查」

| 主题 | 坐标 |
| --- | --- |
| 工具名/常量 | `reconstructed319/deminified/m0403_0x119fe322.js:7-10` |
| 六段提示词 | 同上 `:19-64`（`E$i`/`T$i`/`X_s`/`C$i`/`R$i`/`A$i`/`x$i`） |
| 工具定义 | `reconstructed319/deminified/m0805_0x12477c99.js:429` |
| 准入 `admitCardAnswer`/`le` | 同上 `:77-183` |
| questions 放宽 `pe` | 同上 `:217` |
| preview 校验 `he` | 同上 `:242` |
| 长度常量 | 同上 `:68-76` |
| `"(notes only)"` | 同上 `:411` |
| `shownCardInput` | 同上 `:415` |
| `checkPermissions` | 同上 `:602` |
| `validationErrorSteer` | 同上 `:480` |
| 结果话术 | 同上 `:663-721` |
| HTML preview 校验 `xe` | 同上 `:723` |
| UI 主对话框 | `reconstructed319/full/m2124_0x1363573f.js:69028` |
| UI 单题表单 | 同上 `:68333` |
| 「Other」行 | 同上 `:68468` |
| 「Chat about this」 | 同上 `:68481` + `Rht` 式 deny：`:69562` |
| 提交页 | 同上 `:68684` |
| AFK 计时器 `qPe` | 同上 `:68795` |
| AFK 倒计时条 `iAe` | 同上 `:69458` |
| 对话框描述符 `dialog_4` | `reconstructed319/deminified/m1980_0x13438c9a.js:132` |
| 渲染 payload `build_3` | 同上 `:430`（`build_4` 在 `:258`；`hasExternalRacer` 传递在 `:318`） |
| 权限对话匹配表 | 同上 `:1888-1930` |
| 远程对话框发送 `kbs` | `reconstructed319/deminified/m0349_0x1193beaf.js:9965` |
| AFK 设置常量 `Pbs` | 同上 `:11762` |
| 对话框截止 `nGe` | 同上 `:11768` |
| 能力开关读取 | `reconstructed319/deminified/m0040_0x11239205.js:5399-5415` |
| 能力设置时机 | `reconstructed319/deminified/m0975_0x1267ad81.js:944-951` |
| 设置项 schema | `reconstructed319/deminified/m0094_0x112cc57f.js:7542` |
| 设置项读取 | `reconstructed319/deminified/m0126_0x1139c145.js:4614-4659`（`jfa` 在 `:4614`，`vte` 在 `:4615`，`kBt` 在 `:4655`，`azn` 在 `:4658`） |
| 引擎准入调用 `Ggi` | `reconstructed319/deminified/m0591_0x11be624e.js:48917` |
| 引擎二次校验 | 同上 `:48930` |
| `requiresUserInteraction` 强制 ask | 同上 `:140842` |
| `requiresUserInteraction` 禁 allow 规则 | 同上 `:66872` |
| hook 满足交互 | 同上 `:179611` |
| plan 工具判定 `hQr` | 同上 `:74373` |
| 内部确认 `uge`/`T` | `reconstructed319/deminified/m0836_0x124d0f19.js:26` / `:64` |
| 内部确认结果映射 `E` | 同上 `:115` |
| `validationErrorSteer` 拼接点 | `reconstructed319/deminified/m0591_0x11be624e.js:181187` |
| 转录渲染 `fy` | `reconstructed319/deminified/m2057_0x1350b61e.js:1022` |
| 能力名 `ask_user_question_unanswered_v1` | `reconstructed319/deminified/m0818_0x124b30c8.js:103` |
| `requires_user_interaction` 协议字段 | `reconstructed319/deminified/m0165_0x1145c609.js:10780` |
| `dialog_kind` 协议字段 | 同上 `:11906` |
| `supportedDialogKinds` | 同上 `:10661` |
| render-site 注册 | `reconstructed319/deminified/m0430_0x11a350b6.js:41` |
| render component 映射 | `reconstructed319/deminified/m0206_0x1164caa2.js:1621` |

---

## 18. 已知缺口（诚实清单）

下面这些**没有查实**，不要当结论用：

1. ~~**主 TUI 的 `kind: "number"` 渲染没找到**~~ → **已核实为「不按题型渲染」**，见 §10.2 订正。
   未查实的只剩：若将来某个宿主真的渲染 `number`，它的控件形态无从得知（终端里没有）。
2. **`response`（用户在卡片上直接说话）的 UI 入口没找到。**
   `answers`/`annotations` 的组装在 `CZ`（`full:69523`）里很清楚，
   但 `response` 字段在哪里被写进 `updatedInput` 没定位到。
   可能是远端/SDK 宿主专有字段（`afkTimeoutMs`/`followUp` 都有明确来源，`response` 没有）。

   > **复核更新（2026-11-14）**：这一条**再验一次仍然成立**，而且证据更硬了：
   > 用 `grep -n 'response:'` 扫 `full` 的整个 AUQ 对话框区间（`67700`–`69700`）**零命中**；
   > 全库唯一一处 `response: f(wr.answer.response)`（`full:55618`）属于 **feedback survey**
   > （外层 `function LCe({...})` 在 `full:55322`），与 AskUserQuestion 无关。
   > AUQ 的 UI 只有 `onRespondToClaude`（"Chat about this"），它走的是
   > **`deny + feedback`**（§9.3），**不是** `response` 字段。
   > 所以 `response` 在当前版本里是**只读不写**的字段：schema 认它、结果映射用它，
   > 但 319 自身没有任何生产点。复刻时可以直接把它当"宿主扩展位"。
3. **`unanswered: "replied_in_chat"` 的实际写入点在引擎侧没找到。**
   只在 schema 描述与能力名里出现；UI 侧的 `Ci(lo, "afk_timeout")`
   （`full:69397`）是「跳过统计」，不是写 `unanswered`。
   推测由远端宿主在 `admitCardAnswer` 之前的答案体里给出，未验证。

   > **复核更新（2026-11-14）**：行号已订正 `full:69385` → **`full:69397`**
   > （`69385` 那一行是 `if (N(ol) === !1) {`）。
   > 另外，"推测由远端宿主给出"这一步现在有了旁证：`replied_in_chat` 在 319 全库只出现在
   > **2 个文件**里——`m0805`（工具 schema/校验）与 `m0165`（协议能力描述）。
   > **UI 模块 `m2124` 完全不含这个字面量**，所以终端确实不产出它。
4. **`hasExternalRacer`（外部竞争应答者）的完整语义没追。**
   只在 `full:14460` 见到置 true 的一处，与 AFK 的互斥关系是读代码推断的。

   > **复核更新（2026-11-14）**：置 true 的位置追到了——它在
   > **`async function iz(h)`（`full:14451`）** 里，而这个函数是
   > **"工具参数渲染失败"的兜底卡片**路径（同函数内 `toolUseRenderFailed: !0`）。
   > 两个调用点：`full:14750` 与 `full:88053`（后者是 served-call / 设备桥路径）。
   > 语义即：**兜底卡片已经由另一条通道确认在展示**，所以 AFK 自动继续必须让位
   > （与 `full:69353` 的 `!M.hasExternalRacer` 互斥）。
   > 传递链已确认：`build_4`（`m1980:258`）末尾 `hasExternalRacer: e.hasExternalRacer ?? !1`。
   > 这已从"推断"升级为"A 级"。
5. ~~**`Gt()`（AFK 禁用的那个模式判定）没定位到定义。**~~ → **已定位（2026-11-14）**：
   `m0191_0x1155a4cc.js:36090`：

   ```js
   function E4() {
     let CLAUDE_CODE_SESSION_KIND = i.CLAUDE_CODE_SESSION_KIND;
     if (CLAUDE_CODE_SESSION_KIND === "bg" || CLAUDE_CODE_SESSION_KIND === "daemon" ||
         CLAUDE_CODE_SESSION_KIND === "daemon-worker") return CLAUDE_CODE_SESSION_KIND;
     return;
   }
   function Gt() { return E4() === "bg"; }
   ```

   ⇒ **`Gt()` 只在 `CLAUDE_CODE_SESSION_KIND === "bg"` 时为真**，
   即「后台会话」里不给 AFK 倒计时（没有人在前台看它）。
   注意它**只认 `"bg"`**，不认 `daemon` / `daemon-worker`（那两个值能被 `E4()` 返回，
   但 `Gt()` 显式比 `"bg"`）——这是个容易抄错的细节。
   m2124 通过 `chunk-1ks9vs37.js` 引入同一个 `Gt`。
6. **283 → 319 的逐行 diff 没做**，§16 只是关键字符串命中对比。
7. **`preview` 在 html 宿主下的实际渲染**没看到（终端只有 markdown 路径）。
8. **多客户端会话下 `supportedDialogKinds` 的「first-attached-client-wins」**
   是按协议描述写的，没找实现点。

### 18.1 本次自查中修掉的错误（留档，便于判断这份文档的可信度）

用户要求做独立复核后，我把全文 **142 条 `模块:行号` 引用逐条解析回源码**重算了一遍
（脚本 `tools/audit_doc_citations.py`，把引用解析成「文档描述 → 源码该行实际内容」两列对照；
任何调研文档都可以用它复算：

```bash
python tools/audit_doc_citations.py docs/20261113-CC-AskUserQuestion交互机制调研.md
# 支持 m0591:48917 / m0805_0x12477c99.js:470 / full:69479 / 完整相对路径 四种写法
```）。
结果：

| # | 问题 | 性质 |
| --- | --- | --- |
| 1 | §10.1/10.2 称「`m2124` 里只有 `text` 与 `choice` 被显式处理」，并称 `full:68352` 有 `kind==="text"` 分支 | **实质性内容错误**。`full:68352` 是 `onTabNext: It`；`kind==="text"` 的分支属于 `b8`/`C_e`/`__e` 这组**问卷（survey）组件**（`survey: M` 在 `full:56954`）。AskUserQuestion 主对话框根本不读 `kind`。已在 §10.2 整节订正 |
| 2 | §2.2 说 `m0591` 内 `backgrounding:"never"` 有 8 处 | 计数错误，实际 **9 处**，已改 |
| 3 | 倒计时文案引 `m2124:69475` | 行号偏差，实际 `full:69479` |
| 4 | `CLAUDE_AFK_TIMEOUT_MS`/`COUNTDOWN_MS` 引 `m2124:68800` | 差 1 行，实际 `full:68801` |
| 5 | `d6` 定义引 `m0591:48863` | 差 1 行，实际 `:48862` |
| 6 | `Gzi` 引 `m0268:916` | 差 1 行，实际 `:917` |
| 7 | Chat 行引 `full:68478` | 差 1 行，实际 `:68479` |
| 8 | Ctrl+G 提示引 `full:68248-68251` | 偏差数行，实际 `:68261-68266` |
| 9 | `wr = pr - 30 - 4` 引 `full:68077` | 差 2 行，实际 `:68079` |

第 1 条是唯一会直接误导复刻的。其余 8 条是行号偏移，描述本身没错。
**教训**：行号引用必须机器复算，人工记忆在 2.7 MB 的模块里误差普遍在 1–5 行。

### 18.2 第二轮独立复核（2026-11-14，为「复现到 GA」而做）

第二轮针对「这些结论能不能照着重写」而做，不复算排版，只查**语义**是否站得住。
方法：把 188 条引用重新解析到源码（`work/_rev_audit.py` → `work/_rev_citations.tsv`），
再对每个非平凡断言回读原文窗口；对「有没有生产者/消费者」这类问题，
直接在**未改名的 raw 模块**上检索字符串（minify 保留了所有字符串字面量，这是最硬的证据）。

修正 **1 条会直接写错实现的**、**5 条语义错误**、**4 处行号/计数**：

| # | 位置 | 原文问题 | 订正 |
| --- | --- | --- | --- |
| **1** | §0.2 / §3.1 / §15 | 称 `admitCardAnswer`「**引擎强制调用**」，是安全保证 | **最重要的一条错误**。它只在答案策略 `kind:"strict"` 分支被调（`m2132:173-178`）；而 **283/303/319 三版都没有任何 `kind:"strict"` 的生产者**（raw 检索 0 命中），唯一内置策略是 `Z8 = {kind:"launcher"}`（`m0591:48905`）。交互式终端（`m2124:86712`）、teammate 车道（`m1982:53`）、headless/SDK（`m2159` 的 `answers_3`）、sandbox ask（`m2139:1775`）**传的全是 `Z8`**。新增 §3.1.0 专节说明可达性，并补进 §15「不要照抄」 |
| 2 | §3.1 | `m2t(e)` 判「是不是宿主 `cardForms` 那一类形状」 | **错**。`m2t(e){return e===void 0\|\|Object.keys(e).length===0}` 是**判空**。真正的 `cardForms` 在 `Vgi`（`m0591:48951`），且**只对 MCP 工具**（`if(s.mcpInfo===void 0)return`）。两者是不同机制，原文混成一条 |
| 3 | §9.2 | `no` 变量是 `isInTextInput`，「光标进 Other 文本框就移除 Other 行」 | **错**。`cZ` 整个函数体（`full:68333`–`68684`）**零处 `isInTextInput`**（`grep -c` → 0）。`no = $e === void 0 ? !1 : $e`（`full:68360`），其中 `$e` 是 `hideOtherRow`。`isInTextInput` 只在 `tZ` 与 `sAe` 里。「光标进文本框移除 Other 行」在 319 里**没有依据** |
| 4 | §9.5 | 「`full:68041` `Ar`」当成主对话框的键盘约定，暗示单题表单也支持 `1–9` | **错位**。`Ar` 在 `tZ`（`full:67897`）内。`cZ` 有自己更简的一套（`full:68394-68407`），**只有 up/ctrl+p/return/escape，没有数字选择与 `n`** |
| 5 | §2.2 | 「其余内置工具**全部** `"never"`」 | **不准确**。全库另有 **4 个工具声明 `"self"`**（`m0591:222555`、`m0795:2238`、`m1531:3841`、`m2043:44`）。不过 `"self"` 是**死值**（唯一两个读取点都只比 `"detach"`：`m0591:179004`、`m0591:105547`）。
| 6 | §5.1 | 标题「五种结局，五段话术」，表里 6 行 | 源码确是 **6 个分支**，标题已改 |
| 7 | §2.3 | 「读了 **14 处**」 | m0591 内出现 14 次，其中 **11 次是调用** `requiresUserInteraction?.()`，另 3 次是定义/导出 |
| 8 | §12.4 | `jfa` 引 `m0126:4626` | 实际 **`:4614`**（`vte` 在 `:4615`） |
| 9 | §18.3 | `Ci(lo,"afk_timeout")` 引 `full:69385` | 实际 **`full:69397`**（69385 是 `if (N(ol) === !1) {`） |
| 10 | §7.1 | 「只从三个来源读」 | 不完整：`vte` 每个来源还要过 `Kt(source) \|\| UJ().some(...restrictive...)`（`m0126:4620-4621`）。结论不变，机制多一层 |

**同时把 3 条「已知缺口」推进了：**

- `Gt()` 定位到 `m0191:36090`（`return E4()==="bg"`，`E4()` 读 `CLAUDE_CODE_SESSION_KIND`）。
  **注意它只认 `"bg"`，不认 `daemon`/`daemon-worker`**，尽管 `E4()` 会返回后两者。
- `hasExternalRacer` 的生产点追到 `iz()`（`full:14451`）——**工具参数渲染失败的兜底卡片**路径，
  传递链经 `build_4`（`m1980:318`）的 `hasExternalRacer: e.hasExternalRacer ?? !1`。从推断升为 A 级。
- `response` **再验仍无生产者**：`full` 的 AUQ 区间（`67700`–`69700`）`grep "response:"` 零命中；
  全库唯一 `response: f(wr.answer.response)`（`full:55618`）属于 feedback survey（外层 `LCe`，`full:55322`）。
  AUQ 的「Chat about this」走 `deny + feedback`，**不是** `response`。⇒ `response` 在 319 是**只读不写**字段。

**复算脚本**（可重跑，均为独立 `.py`，符合 AGENTS.md「heredoc 不跑逻辑」）：

```bash
python work/_rev_audit.py        # 188 条引用 → work/_rev_citations.tsv
python work/_rev_kind_scan.py    # 扫 kind:"strict"/"launcher"/"composer" 的生产者
python work/_rev_strict_ctx.py   # 7 个相关模块里所有 "strict" 字面量的上下文
```

**教训（比 §18.1 更值得记）**：上一轮只查了「行号对不对」，所以第 1 条这种
**「函数存在、行号正确、但根本不会被调用」**的错误查不出来。
**复算行号 ≠ 核实语义。** 对每条「机制 X 保证了 Y」的断言，
必须额外追问一句：**X 在这个版本里到底有没有被调用？调用点在哪条分支上？**

---

## 19. 一句话复刻建议

> **把「提问」实现成权限请求的一个特例，用准入函数守住「只能答不能改」，
> 再把「没答完 / 只写备注 / 想聊聊 / 要求再问 / 人走开了」这五种非标准结局
> 各自建模成显式状态，而不是让模型去猜。**

> ⚠️ 但前半句要按 §3.1.0 修正：CC 319 自己**只在 `strict` 分支上**挂准入，
> 而交互式终端走 `launcher`，实际并没有挂。**照抄它的接线方式会得到一个没有准入的实现。**
> 抄它的**规则**（§3.2–§3.5 那四条 + 二次确认），把准入挂到**所有**分支上。

这就是 CC 这套机制能长期稳定工作的全部秘密：
**它把不确定性收进了枚举，而不是留给提示词。**
