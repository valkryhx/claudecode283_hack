# GA 复刻 AskUserQuestion 实施方案

> 依据：`docs/20261113-CC-AskUserQuestion交互机制调研.md`（**已过两轮源码复核，请连同其 §3.1.0 / §18.2 一起读**）。
> 目标仓库：`D:/git_repos/GenericAgent`（本文实测时分支 `main`，`c87fe24`）。
> 本文只讲**怎么在 GA 里做**，不复述 CC 的源码细节；需要坐标时回查调研文档。
>
> **读本文前必须知道的一件事**：调研文档 §3.1.0 查明，
> CC 319 的 `admitCardAnswer` **只挂在一条没有生产者的分支上**，
> 交互式终端实际并不跑它。所以本文**不照抄 CC 的接线方式**，
> 而是抄它的**规则**、改它的**接线**。凡与调研文档冲突处，以本文为准并已注明理由。

---

## 0. 结论先行：GA 现在的 `ask_user` 与 CC 的 `AskUserQuestion` 不是同一种东西

这是整个复刻里最容易走错的一步，先说清楚。

**GA 现状**（`genericagent/core/handler.py:215`）：

```python
def ask_user(question, candidates=None):
    """question: 向用户提出的问题。candidates: 可选的候选项列表"""
    return {"status": "INTERRUPT", "intent": "HUMAN_INTERVENTION",
        "data": {"question": question, "candidates": candidates or []}}
```

`do_ask_user`（`:1065`）拿到它后返回：

```python
return StepOutcome(result, next_prompt="", should_exit=True)
```

⇒ **GA 的 `ask_user` 是「结束本回合、把问题抛给前端、等用户下一条消息」**。
它是一个**硬中断**：本轮到此为止，回答以**新的用户消息**进入下一轮。

**CC 的 `AskUserQuestion` 是「在工具调用内部阻塞、把答案作为 `tool_result` 返回」**。
模型在同一轮里就拿到了结构化答案，`call()` 只做 telemetry，真正的回答在权限层就定了。

| 维度 | GA 现状 | CC AskUserQuestion |
| --- | --- | --- |
| 阻塞点 | 回合边界 | 工具调用内部 |
| 答案回到模型的方式 | 下一条 user message | 本轮的 `tool_result` |
| 模型能否在一轮内继续 | ❌ | ✅ |
| 结构化答案 | ❌（只有文本 + 候选列表） | ✅（`answers` / `annotations` / `followUp` / `afkTimeoutMs`） |
| 与权限通道的关系 | 无关（自己一条通道） | **复用权限通道** |
| 能否多题、多选、备注、预览 | ❌ | ✅ |

**所以复刻的第一件事不是加字段，是改阻塞模型。**
`should_exit=True` 必须变成「在本工具内阻塞，拿到答案后作为 tool_result 返回」。

> ⚠️ 但**不要贸然把现有 `ask_user` 改掉**：`frontends/bots/tgapp.py` 的
> `_extract_ask_user_event` 依赖 `exit_reason.data.status == "INTERRUPT"` 且
> **候选项必须非空**（空列表时返回 `None`，菜单不出现）。
> 另有多处提示词硬编码「必须 ask_user 汇报进度」（`handler.py:2839`、`:2846`）。
> 正确做法是**新增** `ask_user_question` 工具，保留旧 `ask_user` 不动，见 §3。

---

## 1. GA 现状盘点（实测坐标）

复刻要用到的东西，GA 里大部分已经有了。先列清楚，能省的别自己造。

### 1.1 已有的

| 能力 | 位置 | 说明 |
| --- | --- | --- |
| 工具注册 | `genericagent/resources/assets/tools_schema.json`（35 个工具）+ `tools_schema_cn.json` | 两份必须同步改 |
| 工具分发 | `genericagent/core/loop.py:22` `method_name = f"do_{tool_name}"` | 加工具 = 加 schema 条目 + 加 `do_xxx` 方法 |
| 三档权限 | `genericagent/core/permissions/policy.py` | `read_only` / `ask` / `full_access`，**默认 `full_access`** |
| 只读白名单 | 同上 `_STATIC_READ_TOOLS` | 已含 `ask_user`，新工具也要登记 |
| **阻塞审批运行时** | `genericagent/core/permissions/runtime.py` | `wait_for_decision(tool_name, args, reason, stop_check)` → `ACCEPT`/`DENY`；**无 emit 时 fail-closed 返回 DENY** |
| 审批分发 | `handler.py:754` `_dispatch_impl` | capability → 权限策略 → `PermissionRequest` hook → `ask` 分支 → `runtime.wait_for_decision` |
| **Ink 前端审批面板** | `frontends/ink/bridge.py:424` 注入 emit；`:1004` `permission_response`；`ui/src/App.tsx:1386` 收 `permission_request`；`ui/src/approvalPanel.ts` | **这就是 CC「权限通道承载提问」的天然对应物** |
| 远程/机器人前端 | `frontends/bots/tgapp.py`（`_extract_ask_user_event` / 内联键盘） | 另有一条路 |
| 回合内队列 | `pending_prompts`（`handler.py:463` 附近）、loop 的 fold 点 | 「边跑边收」已有基建 |

### 1.2 缺的

1. **工具级阻塞 + 结构化 tool_result**：现在 `ask_user` 是 `should_exit=True`。
2. **卡片协议**：`permission_request` 只带 `{tool_name, args, reason}`，答 `accept|deny`；
   没有「问题数组 / 选项 / 备注 / 预览」的载荷，也没有「答了什么」的回传位。
3. **答案准入（`admitCardAnswer` 的对应物）**：GA 完全没有。
4. **六种结局话术**：没有。
5. **`unanswered` 三态 / `followUp` / `afkTimeoutMs`**：没有。
6. **提示词**：没有 AskUserQuestion 的使用规则（现在只有「卡住了就 ask_user」）。

---

## 2. 与 CC 的映射表（照这张表做）

| CC 概念 | GA 对应物 | 备注 |
| --- | --- | --- |
| Tool 声明 `requiresUserInteraction()` | 新增 `requires_user_interaction` 标记 | 让权限层知道「这个工具的卡片就是交互面」 |
| `checkPermissions() → {behavior:"ask"}` | 工具恒返回 `ask` | 走 `_dispatch_impl` 的 ask 分支 |
| 权限 `updatedInput` 回传 | **复用** `permission_response`，扩展载荷 | 见 §4 |
| `admitCardAnswer(shown, answer)` | 新增 `genericagent/core/ask_user_question/admit.py` | 四条规则照抄 |
| 引擎二次校验 | 同上，`admit()` 之后再验一遍 | **两条分支都要挂**（CC 的教训） |
| `mapToolResultToToolResultBlockParam` | `do_ask_user_question` 的返回构造 | 六种结局 |
| `shownCardInput` | `build_card_payload()` | 只给 UI 该看的 |
| `"(notes only)"` 哨兵 | 同名常量 | 必须与 `sYt`/`W` 那对配套 |
| Ink `approvalPanel` | 扩展成 `questionPanel`（或新开） | 见 §6 |
| `afkTimeoutMs` | 前端计时器 + 载荷字段 | GA 无 AFK 基建，见 §7 |

---

## 3. 工具面：schema 与新增入口

### 3.1 新增工具，不改旧工具

**决策**：新增 `ask_user_question`，**保留** `ask_user` 原样。

理由（三条，都有实码依据）：

1. `tgapp.py:_extract_ask_user_event` 只认 `INTERRUPT` + 非空 `candidates`，
   改语义会让 Telegram 菜单静默消失。
2. `handler.py:2839/2846` 的提示词硬编码「必须 ask_user 汇报进度」，
   改成阻塞语义会让这两条 DANGER 指令卡在回合中间。
3. 旧 `ask_user` 的「结束回合」语义在**长任务汇报**场景是合理的；
   新工具解决的是**决策点阻塞**，两者并存不冲突。

### 3.2 schema（两份文件都要加）

`genericagent/resources/assets/tools_schema.json` **和** `tools_schema_cn.json`。
建议插在 `ask_user` 条目之后（约 848 行处），保持同类相邻。

```json
{
  "type": "function",
  "function": {
    "name": "ask_user_question",
    "description": "Ask the user one to four structured questions and wait for the answer in this same turn. Use this only when you are blocked on a decision that is genuinely the user's to make: one you cannot resolve from the request, the code, or sensible defaults.",
    "parameters": {
      "type": "object",
      "properties": {
        "questions": {
          "type": "array",
          "minItems": 1,
          "maxItems": 4,
          "description": "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more — split into multiple calls instead.",
          "items": {
            "type": "object",
            "properties": {
              "question": {
                "type": "string",
                "description": "The complete question to ask the user. Should be clear, specific, and end with a question mark. If multiSelect is true, phrase it accordingly."
              },
              "header": {
                "type": "string",
                "description": "Very short label displayed as a chip/tag (max 12 chars). Examples: \"Auth method\", \"Library\"."
              },
              "options": {
                "type": "array",
                "minItems": 2,
                "maxItems": 4,
                "description": "The available choices. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically.",
                "items": {
                  "type": "object",
                  "properties": {
                    "label": {
                      "type": "string",
                      "description": "The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."
                    },
                    "description": {
                      "type": "string",
                      "description": "Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."
                    }
                  },
                  "required": ["label", "description"]
                }
              },
              "multiSelect": {
                "type": "boolean",
                "default": false,
                "description": "Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive."
              }
            },
            "required": ["question", "header", "options"]
          }
        },
        "metadata": {
          "type": "object",
          "description": "Optional metadata for tracking and analytics purposes. Not displayed to user.",
          "properties": {
            "source": {
              "type": "string",
              "description": "Optional identifier for the source of this question (e.g., \"remember\" for /remember command)."
            }
          }
        }
      },
      "required": ["questions"]
    }
  }
}
```

**注意三处刻意选择**（与 CC 对齐但更适合 GA）：

- `header` **不加 `maxLength`**：CC 也只写在描述里。GA 若想硬约束，自己加
  `"maxLength": 12`——但要知道**模型写超了 CC 不报错、UI 截断**，加了会更严格。
- **不带 `kind` / `preview` / `title`**：见 §3.3。
- `description` **必填**：CC 在扩展模式下才允许省略；GA 没有能力协商机制，
  直接用严格版（`Ae()` 那一支），最省事也最不容易出歧义。

### 3.3 第一版**不做**扩展题型、preview、`followUp`、AFK

这是**故意收窄**，不是遗漏。理由：

| 特性 | CC 的真实状态（复核后） | GA 第一版决策 |
| --- | --- | --- |
| `kind: text/number` | 终端主对话框**根本不读 `kind`**（调研 §10.2）；`number` 完全没有入口 | **不做**。做了也没有渲染，等于给模型一个假开关 |
| `preview` | 终端只在单选且非读屏时渲染；>2000 字符或含图则降级为占位文案 | **不做**。GA 的 Ink 没有等宽双栏布局基础，收益/成本比差 |
| `followUp` | 只在「每题都写了 `kind`」的扩展模式下被接受（调研 §8.2），而 GA 不走扩展模式 | **不做**。没有 `kind` 就没有 `extended`，做了必然被自己的准入拒绝 |
| `afkTimeoutMs` | 终端有完整计时器 + 焦点检测 + 三级退避 | **不做**（第一版）。GA 无终端焦点概念，见 §7 |

**这些不是"以后再说"，而是"没有前置条件就不能做"。** 尤其 `followUp`：
抄了它却不做 `kind`，会让准入函数永远返回 `follow_up` 拒绝——这是典型的"抄了一半"。

### 3.4 输出（tool_result 的 `data`）

```json
{
  "status": "ok",
  "questions": [ /* 原样回显 */ ],
  "answers": { "<question text>": "<answer string>" },
  "annotations": { "<question text>": { "notes": "..." } },
  "unanswered": { "<question text>": "skipped" }
}
```

**与 CC 的差异（有意）**：

- CC 的 `annotations[q].unanswered` 嵌在 annotations 里；GA 拆成独立的 `unanswered` 字典。
  理由：GA 的结果是 Python dict 直接给模型，拆开更好读；语义等价。
- CC 的 `answers` 多选用 `", "` 拼串 + 引号转义（`sYt`/`W` 一对）。
  **GA 建议存数组**（见 §5.4 的"不要照抄"），但若坚持对齐 CC，必须把 `sYt`/`W` 两个函数一起抄。

---

## 4. 核心改造：把「提问」接进 GA 的阻塞审批通道

这是整个复刻的**关键设计**，也是与 CC 最重要的差异点。

### 4.1 为什么不复用 `permission_request` 现有载荷

GA 现在的 `permission_request` 载荷是 `{tool_name, args, reason}`，应答是
`accept` / `deny` 两个词（`runtime.py` 的 `DECISIONS = frozenset({ACCEPT, DENY})`）。
而提问需要回传 **`answers` / `annotations` / `unanswered`** 三个结构。

两条路：

| 方案 | 做法 | 评价 |
| --- | --- | --- |
| A. 扩展 `permission_response` | 给 `permission_response` 加可选 `answers` 字段 | ❌ **不推荐**。会把「审批」和「作答」两种语义混在一条消息里，`normalize_decision` 会误判，且 Ink 的 `approvalPanel` 要同时管两件事 |
| B. 独立的 `question_request` / `question_response` | 新开一对消息类型，**复用同一套 Future 挂起基建** | ✅ **推荐** |

**选 B**：复用 `PermissionRuntime` 的**机制**（线程安全挂起表、`stop_check`、fail-closed），
但**不复用它的消息类型**。这样审批面板与提问卡片互不干扰。

### 4.2 新增运行时：`QuestionRuntime`

新建 `genericagent/core/ask_user_question/runtime.py`。
**结构照 `permissions/runtime.py` 抄**，把「决策」换成「答案」：

```python
"""AskUserQuestion 的阻塞运行时：requestId → Future 的挂起表。

与 permissions/runtime.py 同构，但承载的是结构化答案而不是 accept/deny。
- 无 emit（headless）→ 立即返回 unanswered（fail-closed，不猜）
- 有 emit → 发 question_request，Future 挂起，等 question_response
- /stop / cancel_all → 所有 pending 按 unanswered 收尾
"""

from __future__ import annotations

import threading
import uuid
from concurrent.futures import Future
from typing import Any, Callable

EmitFn = Callable[[dict], None]


class QuestionRuntime:
    def __init__(self) -> None:
        self._pending: dict[str, Future] = {}
        self._emit: EmitFn | None = None
        self._lock = threading.Lock()

    def set_emit(self, emit: EmitFn | None) -> None:
        self._emit = emit

    def has_emit(self) -> bool:
        return self._emit is not None

    def ask(
        self,
        card: dict,
        *,
        stop_check: Callable[[], bool] | None = None,
        poll_seconds: float = 0.1,
    ) -> dict | None:
        """阻塞直到前端作答。返回答案 dict，或 None（无 UI / 被停止）。"""
        if self._emit is None:
            return None

        request_id = uuid.uuid4().hex
        fut: Future = Future()
        with self._lock:
            self._pending[request_id] = fut

        try:
            # 载荷里必须带 requestId，前端回传时原样带回
            self._emit({"type": "question_request", "requestId": request_id, **card})
            # 轮询而不是 fut.result()，以便响应 stop
            while True:
                if stop_check is not None and stop_check():
                    return None
                try:
                    return fut.result(timeout=poll_seconds)
                except FuturesTimeout:
                    continue
        finally:
            with self._lock:
                self._pending.pop(request_id, None)

    def respond(self, request_id: str, answer: dict) -> bool:
        """前端应答入口。返回是否命中了一个挂起的请求。"""
        with self._lock:
            fut = self._pending.get(request_id)
        if fut is None or fut.done():
            return False
        fut.set_result(answer)
        return True

    def cancel_all(self) -> int:
        """/stop 时把全部挂起按 None（unanswered）收尾。"""
        with self._lock:
            pending = list(self._pending.items())
        count = 0
        for _, fut in pending:
            if not fut.done():
                fut.set_result(None)
                count += 1
        return count
```

> **关键点**：`respond` 只做「把答案投进 Future」，**不做任何校验**。
> 校验在准入层（§5）——这与 CC 的分层一致（协议层管报文形状，工具层管业务合法性）。

### 4.3 绑定到 bridge

`frontends/ink/bridge.py` 的 `_bind_*` 序列里，紧跟 `permission_runtime` 之后加一段
（约 424 行处，照现有写法）：

```python
# AskUserQuestion 卡片：同样注入 emit，使 do_ask_user_question 能发 question_request
try:
    qruntime = getattr(agent, "question_runtime", None)
    if qruntime is not None and hasattr(qruntime, "set_emit"):
        qruntime.set_emit(self.emit)
except Exception:
    pass
```

并在 command 分发（`bridge.py:3610` 附近，与 `permission_response` 并列）加：

```python
elif cmd_type == "question_response":
    bridge.question_response(
        payload.get("requestId") or "",
        payload.get("answer") or {},
    )
```

`bridge.question_response` 内含 try/except，照 `permission_response`（`bridge.py:1004`）的写法，
失败时 emit 一条 `{"type": "error", "code": "question_response_failed"}`。

### 4.4 工具实现

`genericagent/core/handler.py` 新增：

```python
def do_ask_user_question(self, args, response):
    """Ask structured questions and block this turn for the answer (CC AskUserQuestion)."""
    from genericagent.core.ask_user_question import card as _card
    from genericagent.core.ask_user_question import admit as _admit

    questions = args.get("questions")
    # 形状先由 schema 挡一层；这里再挡一次，因为 args 来自模型 JSON，不保证合法
    built = _card.build_card(questions, args.get("metadata"))
    if built.get("error"):
        return StepOutcome({"status": "error", "msg": built["error"]}, next_prompt=built["error"])

    card = built["card"]                      # 交给 UI 的那份（含补全后的默认值）
    shown = built["shown"]                    # 引擎记账用的原样输入

    qruntime = getattr(self, "question_runtime", None)
    yield "Waiting for your answer ...\n"

    answer = None
    if qruntime is not None:
        parent = getattr(self, "parent", None)
        answer = qruntime.ask(
            card,
            stop_check=lambda: bool(getattr(parent, "stop_sig", False)),
        )

    # 准入：只能回答，不能改写
    verdict = _admit.admit(shown, answer)
    if verdict["kind"] == "refused":
        return StepOutcome(
            {"status": "error", "reason": verdict["rule"]},
            next_prompt=_admit.refusal_prompt(verdict["rule"]),
        )

    data = _admit.finalize(shown, verdict["input"])
    return StepOutcome(data, next_prompt="")
```

> **注意**：这里 `return StepOutcome(..., next_prompt="")`，**不是** `should_exit=True`。
> 这就是与旧 `ask_user` 的本质区别——本回合继续，答案以 tool_result 回到模型。

### 4.5 权限层放行

`ask_user_question` 必须始终走 `ask` 分支。两种做法：

- **推荐**：在 `policy.py` 的 `_STATIC_READ_TOOLS` 里登记 `ask_user_question`
  （它不写盘、不执行），然后在 `_dispatch_impl` 里为它**强制** `ask`——
  与 CC 的 `requiresUserInteraction()` 无条件返回 `ask` 等价。
- 否则 `full_access` 档（GA 的默认档）会直接放行，卡片根本不弹。

在 `_dispatch_impl`（`handler.py:754`）capability 检查之后、策略评估之前插入：

```python
# requiresUserInteraction() 等价物：这类工具恒 ask，任何档位都不放行
if tool_name == "ask_user_question":
    ...  # 直接进入下面的阻塞卡片流程，跳过 policy 的 allow
```

> **这是 CC §2.3「四道自动旁路」里 `m0591:140842` 的对应物**：
> 权限决策阶段无条件返回 `ask`，不管当前档位。
> 少了这一步，GA 默认的 `full_access` 会把卡片吞掉。

---

## 5. 答案准入：`admit()`（本方案最该抄的一段）

对应 CC 的 `admitCardAnswer`（调研 §3.2–§3.5）。**规则照抄，接线改掉。**

### 5.1 为什么必须有它

`question_response` 的 `answer` 是**前端/宿主给的任意 JSON**。不校验有三个洞：

1. 宿主能塞进「模型没问过的问题」→ 模型以为用户答了一个不存在的问题；
2. 宿主能改掉选项文本 → 模型以为用户选了 B，其实是宿主改的；
3. 宿主能伪造 `notes` → 模型被注入任意文本。

准入函数的职责一句话：**用户只能回答，不能改写问题。**

### 5.2 四条规则

新建 `genericagent/core/ask_user_question/admit.py`。常量与 CC `m0805:68-76` 对齐：

```python
MAX_STRING = 32768          # 单字符串上限（answers / response）
MAX_NOTES = 8192            # 单条 notes 上限
MAX_ANSWERS_TOTAL = 32768   # answers 总字符上限
MAX_TOTAL_BUDGET = 48000    # answers + 问题文本的合并预算
NOTES_ONLY = "(notes only)" # 「只写备注没选选项」哨兵
ANSWER_ONLY_KEYS = frozenset({"answers", "annotations", "response"})
```

四条规则（逐条对应 CC 的 `le`，`m0805:84`）：

| 规则 | 拒绝码 | 意图 |
| --- | --- | --- |
| 宿主自带引擎事实字段 | `host_field` | 超时之类是引擎的事实，不是宿主的声明 |
| 卡片显示过的字段又被答案带上 | `changed_shown_field` | 防「先显示 A，再偷偷换成 B」 |
| 原输入里没有的字段 | `unknown_field` | 白名单外的字段一律不信 |
| 原有字段值被改 | `changed_shown_field` | 白名单式放宽以外，必须深度相等 |

> **GA 简化一处**：CC 有 `afkTimeoutMs` 这个「宿主必须不能自带」的字段（`host_field`）。
> GA 第一版不做 AFK（§3.3），所以暂时没有该字段；但**规则要留着**——
> 将来加 AFK 时直接把 `afkTimeoutMs` 加进 `ANSWER_ONLY_KEYS` 的反面即可。

```python
def admit(shown: dict, answer) -> dict:
    """shown: 卡片上显示的输入（原样）。answer: 前端交回的答案。

    返回 {"kind": "admitted", "input": {...}} 或 {"kind": "refused", "rule": "..."}。
    """
    if answer is None:
        # 无 UI / 被停止：当作「什么都没答」，交给 finalize 生成 unanswered
        return {"kind": "admitted", "input": {}}
    if not isinstance(answer, dict):
        return _refuse("not_an_object")

    shown_q = _index_questions(shown.get("questions"))

    # ---- 规则 1~4：字段级白名单 ------------------------------------------
    for key in answer:
        if key in ANSWER_ONLY_KEYS:
            if key in shown:                    # 规则 2
                return _refuse("changed_shown_field")
            continue
        if key not in shown:                    # 规则 3
            return _refuse("unknown_field")
        if answer[key] != shown[key]:           # 规则 4
            return _refuse("changed_shown_field")

    out, used = {}, 0
    answers = answer.get("answers")
    if answers is not None:
        if not isinstance(answers, dict):
            return _refuse("answers")
        clean = {}
        for q_text, val in answers.items():
            if q_text not in shown_q:
                return _refuse("answers")       # key 必须是已知问题
            q = shown_q[q_text]
            if isinstance(val, str):
                if len(val) > MAX_STRING:
                    return _refuse("answers")
                used += len(val)
                clean[q_text] = val
            elif isinstance(val, list):
                if not q["multiSelect"] or len(val) > q["optionCount"] + 1:
                    return _refuse("answers")   # +1 是 UI 造的 Other 项
                if any(not isinstance(x, str) or len(x) > MAX_STRING for x in val):
                    return _refuse("answers")
                used += sum(len(x) for x in val)
                clean[q_text] = val             # ⚠️ 存数组，不拼串（§5.4）
            else:
                return _refuse("answers")
        out["answers"] = clean

    # ---- 预算 -------------------------------------------------------------
    if used > MAX_ANSWERS_TOTAL or used + sum(len(q) for q in shown_q) > MAX_TOTAL_BUDGET:
        return _refuse("too_large")
    return {"kind": "admitted", "input": out}
```

`annotations` 单独一段，只允许 `notes` / `unanswered` 两个 key：

```python
    ann = answer.get("annotations")
    if ann is not None:
        if not isinstance(ann, dict):
            return _refuse("annotations")
        clean_ann = {}
        for q_text, item in ann.items():
            if q_text not in shown_q or not isinstance(item, dict):
                return _refuse("annotations")
            kept = {}
            for k, v in item.items():
                if k == "notes":
                    if not isinstance(v, str) or len(v) > MAX_NOTES:
                        return _refuse("annotations")
                    used += len(v); kept["notes"] = v
                elif k == "unanswered":
                    if v not in ("skipped", "replied_in_chat", "dismissed"):
                        return _refuse("annotations")
                    kept["unanswered"] = v
                else:
                    return _refuse("annotations")   # 白名单外的 key
            clean_ann[q_text] = kept
        out["annotations"] = clean_ann
```

> ⚠️ 注意 Python 的缩进陷阱：上面两段必须接在同一个 `admit()` 函数体内。
> 拼接时把 `ann` 那段插在「预算」之前，并确保 `used` 变量名一致（CC 用 `i` 和 `a` 两个计数，
> GA 合并成一个 `used`，因为 GA 不做 preview，`a` 那一半用不上）。

### 5.3 二次校验（CC 只在 `strict` 做，GA 必须无条件做）

CC 的教训（调研 §3.1.0）：`admitCardAnswer` 之后的「原输入每个字段必须原样保留」
只写在 `strict` 分支里，而 319 的 `strict` **没有生产者**。
GA 只有一条回答路径，所以这道检查**天然全挂**——这是 GA 相对 CC 的优势，不要退化。

```python
def finalize(shown: dict, admitted: dict) -> dict:
    """把准入结果与问题原样组装成 tool_result 的 data。

    这里做 CC 的第二道检查：admitter 不许改掉卡片显示过的字段。
    CC 是「不满足就整单拒绝」，GA 用 assert 更符合本仓库习惯（显式崩 > 静默错）。
    """
    for key, val in shown.items():
        if key in ANSWER_ONLY_KEYS:
            continue
        assert admitted.get(key, val) == val, (
            f"admit() changed a field the card showed: {key}"
        )
        admitted.setdefault(key, val)
    return {
        "status": "ok",
        "questions": shown.get("questions") or [],
        "answers": admitted.get("answers") or {},
        "annotations": admitted.get("annotations") or {},
        "unanswered": {
            q: a["unanswered"]
            for q, a in (admitted.get("annotations") or {}).items()
            if a.get("unanswered")
        },
    }
```

### 5.4 三处明确「不要照抄 CC」

| CC 的做法 | 为什么 GA 不该抄 | GA 的做法 |
| --- | --- | --- |
| 多选用 `", "` 拼串 + 引号转义（`sYt`/`W` 一对） | 只抄 `sYt` 不抄 `W`，标签里带逗号就错位；调研 §1.4 点名的高危点 | **`answers[q]` 存数组**（上面 `clean[q_text] = val`） |
| `admitCardAnswer` 未实现就放行（调研 §3.1 第 ② 条） | 那是向后兼容缺口；GA 没有历史包袱 | **必须实现**，不实现就不该有这个工具 |
| 准入只挂 `strict` 分支 | 319 里 `strict` 无生产者，等于没挂（调研 §3.1.0） | GA 只有一条路径，**天然全挂** |

### 5.5 拒绝后给模型的话

CC 在 `strict` 分支拒绝时只记日志 + telemetry，模型拿到通用 deny 文案。
GA 应给**可操作**的指引（照 `validationErrorSteer` 的思路，调研 §4）：

```python
def refusal_prompt(rule: str) -> str:
    if rule == "too_large":
        return ("The answer was too large for the card to carry. Ask fewer questions, or "
                "shorten the question text — do not paste long documents into a question.")
    return (f"The answer was malformed ({rule}). The person's card answered something that "
            "did not match the questions you asked. Ask again with the same questions; "
            "do not invent answers.")
```

### 5.6 必须补的测试（TDD，见 AGENTS.md §8.5）

**先写测试再写实现。** 至少五条，每条都要能“把实现 stash 掉之后变红”：

1. `admit(shown, None)` → `admitted` 且 `input == {}`（headless / stop 路径）。
2. 宿主塞 `{"extra": 1}` → `refused/unknown_field`。
3. 宿主改 `questions` 文本 → `refused/changed_shown_field`。
4. 答案 key 是不存在的问题 → `refused/answers`。
5. 多选答案长度 > `optionCount + 1` → `refused/answers`。

反向确认（AGENTS.md §8.5 强制）：

```powershell
git stash push -- genericagent/core/ask_user_question/admit.py
python -m pytest tests/test_ask_user_question_admit.py -q   # 必须重新变红
git stash pop
```

---

## 6. 结果话术：六种结局

对应 CC 的 `mapToolResultToToolResultBlockParam`（调研 §5.1）。GA 的 `data` 已经是结构化 dict，
所以**话术放在 `next_prompt`**（模型看的是 `next_prompt` 那段文本），结构留在 `data` 里。

CC 的六分支优先级（前一个命中不看后面）：

| 序 | 条件 | 话术要点 |
| --- | --- | --- |
| 1 | AFK 超时 | 「用户可能不在，你自行判断；可以稍后再问」 |
| 2 | `followUp` | 「用户要求再问一轮，别开工」 |
| 3 | `response` 非空 | 「用户直接说了：…」 |
| 4 | 有答案且全部规整 | 「已答，可以继续」 |
| 5 | 有答案但不规整 | 「仔细读，用户可能在提要求/反对」 |
| 6 | 都没有 | 「用户没有回答」 |

**GA 第一版只做 3/4/5/6**（不做 AFK 与 followUp，理由见 §3.3）：

```python
def result_prompt(data: dict) -> str:
    answers = data.get("answers") or {}
    unanswered = data.get("unanswered") or {}
    notes = {
        q: a["notes"] for q, a in (data.get("annotations") or {}).items() if a.get("notes")
    }
    if not answers and not unanswered:
        return "The user did not answer the questions."

    # 规整性：有 notes 就不规整；答案不在选项里也不规整
    irregular = bool(notes) or any(q in unanswered for q in (data.get("questions") or []))

    rendered = "; ".join(f'"{q}"={v}' for q, v in answers.items())
    if irregular:
        return (f"The user answered: {rendered}. Read the answers carefully — they may "
                "request clarification, changes, or that you not proceed — and follow "
                "what they actually say.")
    return (f"Your questions have been answered: {rendered}. You can now continue with "
            "these answers in mind.")
```

> **「规整」判定的简化说明**：CC 的判定很细（文本题 / 数字题 / 单选 / 多选各有分支，
> 见调研 §5.2），因为它要区分「用户只是选了选项」和「用户做了点别的」。
> GA 第一版没有 `kind`，所以只需要两条：**有 notes ⇒ 不规整**、
> **有题未答 ⇒ 不规整**。这保住了 CC 那个分流的核心意图，去掉了用不上的分支。
>
> 若将来加了 `kind`，把 CC 的 `questions.every(...)` 逐条搬过来即可——
> 但**注意多选那条要改成数组比较**（GA 存数组），不能照抄 `sYt(g) === y` 的往返校验。

---

## 7. 前端：Ink 卡片

### 7.1 现成可复用的部分

GA 的 Ink 已经有完整的「阻塞审批」链路，**照它加一对消息类型即可**：

| 现有（permission） | 新增（question） |
| --- | --- |
| `bridge.py:424` 注入 `permission_runtime.set_emit` | 注入 `question_runtime.set_emit` |
| `bridge.py:1004` `permission_response(request_id, decision)` | `question_response(requestId, answer)` |
| `bridge.py:3610` 命令分发 | 并列加 `question_response` |
| `ui/src/App.tsx:1386` 收 `permission_request` | 收 `question_request` |
| `ui/src/approvalPanel.ts` 审批面板 | 新建 `questionPanel.ts` |

### 7.2 不要复用 `approvalPanel`，新建 `questionPanel`

理由：`approvalPanel` 的模型是 **一条请求 → accept/deny**（`DECISIONS` 只有两个值），
而提问卡片是 **多题 × 多选 × 可输入 × 可只写备注**。硬塞进去会让
`enqueueApprovalRequest` / `approvalPanelOnSettled`（`App.tsx:1392-1395`）都得改语义，
进而影响权限审批的既有行为——这是不必要的风险面。

### 7.3 卡片必须自己造的两个 UI 元素

CC 的经验（调研 §9.2 / §9.3），这两样**不是模型给的，是 UI 造的**：

1. **「Other」行**：提示词明确要求模型不要给 Other 选项。
   GA 的卡片要自己加一行文本输入，用户输入的文本进 `answers[q]`。
   > CC 的细节：多选时 placeholder 是 `"Type something"`，单选是 `"Type something."`（带句号）。
   > 这个差异解释为「多选时这不是一句话」，可以照抄也可以统一。
2. **「Chat about this」**：CC 把它实现成 **`deny + feedback`** 而不是伪造答案。
   GA 的对应物：让 `do_ask_user_question` 返回一个 **`status: "error"` + 反馈文本**，
   而不是编一个假答案。反馈文本可直接用 CC 的措辞：

```
The user wants to clarify these questions.
This means they may have additional information, context or questions for you.
Take their response into account and then reformulate the questions if appropriate.
Start by asking them what they would like to clarify.
```

> **这是调研文档 §9.3 最值得抄的一条**：把「不选」建模成一条正式出口，
> 比「假装用户答了某个选项」干净得多。

### 7.4 多题流程：分题作答 → 确认页 → 提交

这是**整个前端最容易做错的一段**，不是「每题一提交」。
CC 的完整状态机见调研 §9.7，这里只给 GA 要落的东西。

#### 7.4.1 两条路径，二选一

```python
hide_submit_tab = (len(questions) == 1 and not questions[0].get("multiSelect", False))
```

| `hideSubmitTab` | 触发条件 | 用户体验 |
| --- | --- | --- |
| `True` | 恰好 1 题，且非多选 | **选中即提交**，无确认页 |
| `False` | ≥2 题，或 1 题多选 | 逐题作答 → 确认页 → 点 `Submit answers` |

单题快捷路径值得抄：多一次确认对单题只是摩擦。
多选不走快捷路径，因为多选状态下用户需要「我选完了」这个显式信号。

> ⚠️ **这里有两套独立判断，不要把上面这一行同时当成两件事的开关。**
>
> | 判断 | CC 依据 | 作用 |
> | --- | --- | --- |
> | `hide_submit_tab` | schema 的 `multiSelect` 字段 | 渲染不渲染 Submit 格、导航上界 |
> | 是否自动提交 | **运行时**答案是不是 `list` | 答完要不要直接发请求 |
>
> CC 用 `nt[0]?.multiSelect`（`full:69153`）决定前者、用 `Array.isArray(ds)`
> （`full:69267`）决定后者。两者在「单题单选」时恰好同时为真，但来源不同。
> GA 若只写一套，会在「单题多选但一个都没勾」这类边界上分叉。

#### 7.4.2 页索引：确认页是「第 N 格」

GA 的 `questionPanel` 建议照 CC 的模型：**页索引 `0..n-1` 是题目，索引 `n` 是确认页**。

```python
current_question = questions[idx] if idx < len(questions) else None
is_review_page = (idx == len(questions))

# 导航上界
last_index = len(questions) - 1 if hide_submit_tab else len(questions)
```

不要另造一个 `mode: "form" | "review"` 字段——CC 用索引复用这一格，
少一个状态变量就少一处不一致。

#### 7.4.3 答题只记状态，提交才发请求

| 动作 | 该做什么 | **不该做什么** |
| --- | --- | --- |
| 单选某题（多题场景） | 写入 `answers[q]`，停留 | 调用任何 runtime |
| 多选某题 | 写入 `answers[q]`（列表），停留 | 提交 |
| 多选页内的「Submit/Next」按钮 | **只是翻页**（`idx += 1`） | 提交答案 |
| 确认页「Submit answers」 | 一次性提交**全部** `answers` | 逐题提交 |
| Esc / Cancel | 走 `deny`（调研 §9.4） | 伪造答案 |

> ⚠️ **最易踩的坑**：多选控件自己的按钮文字在最后一页是 `"Submit"`，
> 但它的语义是**前往下一页**（CC：`submitButtonText: te === N.length - 1 ? "Submit" : "Next"`，
> `onSubmit: () => Mt()`，`Mt` = `nextQuestion`）。真正的提交只在确认页发生。
> GA 复刻时建议**把这个按钮改名为「Next →」/「Review →」**，避免和真正的提交混淆。

#### 7.4.4 页签条（`questionPanel` 顶部）

```
[☐ Q1] [☑ Q2] [✓ Review/Submit]
```

- 每题的勾：`bool(answers.get(q["key"]))` —— **空串也算没答**（CC 用 `!!qp(...)`）；
- 最后一格：`hide_submit_tab` 时不渲染；
- 宽度不够时降级：完整 → 截断 → 只保留当前题。GA 的 Ink 有 `columns` 可直接用。

#### 7.4.5 确认页内容

```
─────────────────────────
[☐ Q1] [☑ Q2] [✓ Submit]
Review your answers
⚠ You have not answered all questions      ← 仅未答全时
  Q1 text
    → answer1
  Q2 text
    → answer2
Ready to submit your answers?
  [ Submit answers ]  [ Cancel ]
```

- 已答列表**只列已答的题**（`filter`，不是全部）；
- 「未答完」**只警告，不阻止**（详见 §7.5）；
- `Cancel` 走 `deny`，不是「空答案提交」。

#### 7.4.6 允许未答完就提交

CC 的做法：只警告不阻断（调研 §9.7.5）。GA 同样——
卡片底部给「未答完」提示，但**允许提交**，未答的题进 `unanswered`。
强行拦住会逼出「随便选一个」的坏结果。

> **不要把 `all_answered` 接到按钮的 `disabled` 上。** CC 的
> `allQuestionsAnswered` 只用于渲染那条警告（`full:68712`），
> 提交路径 `ba("submit")` 完全不看它。接了 `disabled` 就是复刻出了 CC 没有的行为，
> 而且会让「我就有一题不想答」的用户无法提交。

#### 7.4.7 读屏器分支（可选，P2）

CC 在读屏模式下把页签条换成一句 `Questions: Q1, Q2 (answered)`。
GA 的 Ink 若不做 a11y 可跳过；要做就照这个形状——**不要渲染复选框**，
用 `(answered)` 后缀补偿。

---

## 8. 提示词

GA 的提示词里目前只有「卡住了就 ask_user」。新工具需要三段（照 CC 调研 §11）：

**① 使用条件**

```
Use ask_user_question only when you are blocked on a decision that is genuinely the
user's to make: one you cannot resolve from the request, the code, or sensible defaults.
```

**② 克制条款 + 替代动作**（这段是「不要拿提问当确认按钮」的正面表述）

```
Reserve this for decisions where the user's answer changes what you do next — not for
choices with a conventional default or facts you can verify in the codebase yourself.
In those cases pick the obvious option, mention it in your response, and proceed.
```

**③ 模态提示**（承认 UI 会遮挡上下文）

```
The user may see only the question dialog: tool results and text you wrote earlier in
this turn may not be on their screen while it is open. Make each question stand on its
own: if it depends on something you found, say so briefly, and name the items you are
asking about in the question itself.
```

**④ 不要给 Other / Skip**（写进 schema 的 `options.description` 里）
——见 §3.2 已含：`There should be no 'Other' option, that will be provided automatically.`

> **落地位置**：GA 的系统提示词在 `genericagent/resources/assets/sys_prompt.txt` /
> `sys_prompt_en.txt`（各 77 行）里拼装。
> 只需确保上面四段进了模型可见的提示词，且**只在 `ask_user_question` 工具可见时才拼**
> （CC 用 `hQr(tools)` 做这件事，调研 §11.5——「提示词按可用工具裁剪」）。

> ⚠️ **CC 的坑：`A$i`（即上面第 ② 段）只在该会话处于 lean 模式时才拼**
> （`m0805:455`，包在 `if (i)` 里；`i = bD({model, leanPrompt})`）。
> GA 没有 lean 模式二分，所以**把 ② 无条件拼进去**——这比 CC 更保守，是刻意的改进方向。
> 调研 §11.3 有详细说明。

### 8.1 系统级判据：真正决定「该不该问」的是这两段

工具提示词（上面四段）只解释了**怎么问**；「什么情况下值得阻塞用户」由**系统提示词**给判据。
CC 的两段（调研 §11.8.2）比工具提示词里那句抽象的「真正属于用户的决定」好落地得多：

**① 主动行动（`Zvr` / `YWi`）**

```
When you have enough information to act, act. Do not re-derive facts already established
in the conversation, re-litigate a decision the user has already made, or narrate options
you will not pursue. If you are weighing a choice, give a recommendation, not an
exhaustive survey.
```

**② 交付工作（`eCr` 节选）—— 这段是本方案最该进 GA 系统提示词的一条**

```
Interpret ambiguity the way a careful colleague would: make routine judgment calls
yourself, and check in only when different readings would lead to materially different work.

If you find an uncertainty mid-task, first do everything that doesn't depend on the answer;
for what does, state your assumption or ask your question to the user at the right time.
Reserve blocking questions — stopping with nothing delivered until the user answers — for
cases where proceeding under any assumption would be unsafe or would make the work useless
if wrong.
```

**为什么这段比工具提示词更重要**：它给了**四条可操作判据**（调研 §11.8.2 的表），
而工具提示词只给了一句抽象条件。模型在没看到这段时，会把「我不确定」当成「该问」；
看到这段后，判据变成「不同解读是否导致实质上不同的工作」。

> **落地建议**：把 ② 放进 GA 系统提示词的「Delivering work」等价位置。
> GA 的 `sys_prompt_en.txt` 目前 77 行，没有等价段落——这是**独立于 `ask_user_question` 的改进**，
> 即使不做新工具也值得加。

### 8.2 无人值守抑制：GA 需要自己造这一层

CC 按 `surface` 切换提示词（调研 §11.8.3）：`scheduled` / `github_action` 两个 surface
明说「没人会回答你的问题，请在明示假设下继续」。

**GA 的现状（已核对）**：

| 入口 | 有 emit？ | 当前行为 | 是否已抑制提问 |
| --- | --- | --- | --- |
| Ink 前端 | 是（`bridge.py:428` `set_emit`） | 弹卡片 | — |
| ACP 前端 | 是（`genericagent_acp_bridge.py:267`） | 弹卡片 | — |
| headless / 无 UI | **否** | `PermissionRuntime.wait_for_decision` **fail-closed → deny** | ⚠️ 形式上是「拒绝」，不是「别问」 |
| workflow 子 agent | **否**（`child_agent.py:1103-1120` 只传 `hook_runtime`，不传 `permission_runtime`） | 同上 | ⚠️ 同上 |

`runtime.py` 头部注释就写着：「无 emit（headless）→ deny（fail-closed）」。

⇒ **GA 目前不会「崩溃」，但会「白问一次」**：模型调用 → 卡住 → 立即被 deny →
模型收到拒绝话术 → 才知道问不了。这比 CC 的「提前告诉它没人回答」浪费一轮。

**要做的事**：在 GA 的系统提示词里按入口加一段等价抑制。建议措辞（照 CC 的 `scheduled`）：

```
There is no one to answer a question mid-run: this session is running unattended
(headless, a workflow sub-agent, or a scheduled job). Do not call ask_user_question;
proceed under stated assumptions and make the final message a complete record.
```

判定条件（GA 侧）：**用 `PermissionRuntime.has_emit()`**（`runtime.py:59`，已存在，无需新写）。
返回 `False` ⇒ 无人值守 ⇒ 拼抑制段、且让 `ask_user_question` 直接从工具列表里消失。

> `has_emit()` 比 `_emit is not None` 更合适——它是公开方法，不用碰私有字段。
> `runtime.py:4` 的模块注释也明确了这个语义：「无 emit（headless）→ deny（fail-closed）」。
>
> ⚠️ 但**只抑制「拼提示词」和「工具可见性」两层，不要动 `do_ask_user_question` 本身**：
> 模型仍可能凭旧习惯调用它（历史上下文里的旧提示词、或用户明确要求）。
> 那时应当让它走现有的 fail-closed → 返回一条说明性 `status: "error"`，
> 而不是抛异常——调研 §11.8.4 的「三层」里没有「硬崩」这一层。

> **注意不要用「子 agent」当唯一判据**：workflow 子 agent 借宿主的 `hook_runtime`，
> 但不需要提问通道；而 Ink/ACP 的前台会话即使被包成子 agent 也应该能问。
> 判据应当是「**有没有活的 emit**」，不是「是不是子 agent」。

### 8.3 顺手要做的一件事：调整那两条 DANGER 提示

`handler.py:2839` 和 `:2846` 现在硬编码「必须 ask_user 汇报进度」。
有了新工具后，这两处**应当改成 `ask_user_question`**：

- 它们的语义是「停下来让用户决定是否继续」→ 正是阻塞式提问的用途；
- 用旧 `ask_user` 会结束回合，模型下一轮还得重新拿上下文；
- 用新工具则在本轮内拿到「继续 / 停」的答案，更符合「汇报进度并确认」。

> ⚠️ 但要**先确认** `ask_user_question` 在多轮长任务里不会因为 `full_access` 档被吞掉
> （§4.5 那一步必须先做）。

### 8.4 提示词的落地清单（三份文件）

| 内容 | 落到哪 | 条件 |
| --- | --- | --- |
| ① 使用条件 + ③ 模态提示 + ④ 不给 Other | `ask_user_question` 的 `description` / `options.description` | 工具可见时 |
| ② 克制条款（`A$i`） | 同上 | **无条件**（CC 只在 lean 时拼，GA 全拼，更保守） |
| ⑤ 主动行动（`Zvr`） | `sys_prompt_en.txt` / `sys_prompt.txt` | 无条件 |
| ⑥ 交付判据（`eCr`） | 同上，作为独立小节 | 无条件 |
| ⑦ 无人值守抑制 | 同上，按 `has_emit()` 决定是否拼 | **仅无人值守时** |

> CC 的 `hQr` 裁剪（plan 工具缺席时去掉 plan-mode 段）GA 用不上——
> GA 没有 plan mode。但**「提示词按可用工具裁剪」这个手法值得保留**：
> 未来加任何条件段（如「GA 没有 workflow 工具时别提 workflow」）都可以照这个模式。

---

## 9. 分期实施

### P0：不做就不能用（约 1 天）

1. `tools_schema.json` + `tools_schema_cn.json` 加 `ask_user_question`（§3.2）。
2. `genericagent/core/ask_user_question/admit.py`：`admit()` + `finalize()` + `refusal_prompt()`
   （§5），**先写 5 条测试**（§5.6）。
3. `genericagent/core/ask_user_question/runtime.py`：`QuestionRuntime`（§4.2）。
4. `handler.py` 加 `do_ask_user_question`（§4.4），**不加 `should_exit`**。
5. `_dispatch_impl` 里让 `ask_user_question` 恒 ask，任何档位都不放行（§4.5）。
   **这一步漏了，GA 默认 `full_access` 会直接放行，卡片根本不弹。**
6. `policy.py` 的 `_STATIC_READ_TOOLS` 登记 `ask_user_question`。
7. 「Chat about this」返回 `status:error` + 反馈文本，不伪造答案（§7.3）。

**验收**：Ink 前端发一次提问，模型在同一轮里拿到答案并继续。

### P1：决定体验好坏（约 1 天）

8. `questionPanel.ts` + `App.tsx` 接线（§7.1）。
9. 「Other」行 + 多选 + 只写备注 → `NOTES_ONLY` 哨兵（§7.3）。
10. **多题流程两分支**（§7.4）：`hideSubmitTab` 判定、页索引复用第 N 格、
    单题自动提交、多选按钮只翻页、确认页、未答完只警告。
11. 未答完可提交 + `unanswered` 三态（§7.4.6）。
12. 六种结局里的 3/4/5/6 四段话术（§6）。
13. 提示词：四段工具提示 + **系统级判据两条**（§8）。
14. 把 `handler.py:2839/2846` 的 DANGER 提示切到新工具（§8.1）。

### P2：锦上添花（可选）

15. `header` 加不加 `maxLength: 12`——建议加，GA 没有 CC 的 UI 截断兜底。
16. `metadata.source` 的埋点（CC 用它区分 `/remember` 等来源）。
17. 多客户端会话的去重（CC 有 `supportedDialogKinds` + first-attached-wins，GA 无此概念，
    但 `frontends/acp/` 若接入多端需考虑）。
18. 页签条宽度降级 + 读屏器分支（§7.4.7）。

### 明确「不要做」的四件事

- ❌ **`kind: text/number`**：CC 终端自己不渲染，做了等于假开关（§3.3）。
- ❌ **`preview`**：GA Ink 没有等宽双栏基础，且 CC 在 >2000 字符时也要降级（§3.3）。
- ❌ **`followUp`**：绑定在「每题都有 kind」的扩展模式上，GA 不走扩展模式，做了必被自拒（§3.3）。
- ❌ **`afkTimeoutMs` / AFK 自动继续**：GA 无终端焦点概念，先做会做出「用户切到浏览器就被自动回答」的坏行为。

---

## 10. 风险与坑

| 风险 | 说明 | 规避 |
| --- | --- | --- |
| **卡片被 `full_access` 吞掉** | GA 默认档是 `full_access`，策略层直接 allow | §4.5：`ask_user_question` 恒 ask，绕开策略 |
| **旧 `ask_user` 被误改** | tgapp 依赖 `INTERRUPT` + 非空 candidates | §3.1：新工具并存，不改旧的 |
| **headless 卡死** | 无 emit 时若阻塞就永远等 | `QuestionRuntime.ask` 无 emit 时**立即返回 None**（§4.2），fail-closed |
| **`/stop` 后 Future 泄漏** | 挂起表不清理 | `ask()` 的 `finally` 里 `pop`，`cancel_all()` 兜底 |
| **多选答案格式漂移** | 存数组 vs 拼串混用 | 全链路只用数组（§5.4），话术里 `", ".join` 只在渲染时做 |
| **问题文本作主键** | 改个标点答案就丢 | 第一版接受（与 CC 同）；若将来要改，内部用 `questionId`，展示层用原文 |
| **准入被绕过** | 只在前端校验 | 校验必须在 `do_ask_user_question` 里（§4.4），前端只是 UI |

---

## 11. 与调研文档的对应关系

| 本文 | 调研文档 |
| --- | --- |
| §3.2 schema | §1.1 / §1.2 |
| §4 权限通道承载 | §2.1 / §2.3 / §2.5 |
| §5 准入 | §3.1–§3.6（**务必先读 §3.1.0**） |
| §5.5 拒绝话术 | §4 `validationErrorSteer` |
| §6 六种结局 | §5.1 / §5.2 |
| §7.3 Chat about this | §9.3 |
| §7.4 多题流程（两分支 / 页索引 / 确认页） | **§9.7 全节**（§9.7.2–§9.7.8） |
| §7.4.6 未答完可提交 | §9.7.5 |
| §8 工具提示词四段 | §11.1–§11.7 |
| §8.1 系统级判据 | **§11.8.2**（`YWi`/`Zvr`/`eCr`） |
| §8.2 无人值守抑制 | **§11.8.3**（`surface`） |
| §3.3 不做 kind/preview/followUp | §10.2 订正 / §8.2 / §7 |

**最后一句**：调研文档 §3.1.0 那条订正，是这份实施方案存在的理由。
如果照 CC 的接线方式抄，你会得到一个**看起来有准入、实际永远不会执行**的实现。
本文把准入挂到了唯一的那条路径上——这不是「比 CC 更好」，而是**GA 的架构让正确做法成为默认**。

第二个要记住的点是**§7.4 的多题流程**：它不是「每题一提交」。
单题单选走「选中即提交」，其余走「逐题作答 → 确认页 → 一次性提交」，
而多选控件上那颗写着 `Submit` 的按钮**只是翻页**。
搞错这个，用户会在第一题就提交掉一份只有一题答案的结果。
