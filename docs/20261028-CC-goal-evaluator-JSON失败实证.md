# CC goal 求值器 JSON 失败实证（deepseek-0731）

> 日期：2026-10-28　范围：Claude Code 2.1.303 源码 + 本机真实 `/goal` 会话
> 结论先行：**用户观察成立**。goal 的 Stop-hook 求值器把模型返回当**严格 JSON** 解析，
> deepseek-0731 作为求值器时会偶发返回**对话式自由文本**（不是 JSON），CC 端 `JSON.parse`
> 失败即产生 `hook_non_blocking_error`（`JSON validation failed`），goal 判定被打断。
> 本机两个真实会话共捕获 **14 条**此类失败，stdout 全部是自然语言。
>
> 机制全貌（goal = Stop hook + 求值器）见 [20261028-CC-goal模式实现调研.md](20261028-CC-goal模式实现调研.md)。

---

## 1. 结论

1. `/goal <condition>` = 往当前会话注册一条 **session-scoped `Stop` prompt hook**，prompt 即条件文本。
2. 每次回合要结束（Stop）时，引擎对这条 hook 跑一次**独立的只读模型调用**（goal evaluator），
   要求模型只返回 `{"ok":..., "reason":..., "impossible"?:...}` 形状的 JSON。
3. 该求值器**默认用主模型**（`be = e.model ?? Yv()`；`/goal` 建的 hook 不带 `model`，故走默认模型）。
   本机 `ANTHROPIC_DEFAULT_*` 全部重定向到 `A-Deepseek-V4-Flash-0731`，所以求值器就是 deepseek-0731。
4. CC 端对返回**先文本 `JSON.parse`、再 strict schema 校验**；任一步失败 → `hook_non_blocking_error`
   （`stderr:"JSON validation failed"` / `"Schema validation failed"`）→ `goalPass="error"`。
5. **不是"差一个字符"那么微妙，而是 deepseek-0731 经常整体不按 JSON 输出**：直接以对话口吻
   "Let me verify… / 我评估这个停止条件… / I need to evaluate whether…" 作答。这与正常对话完全正常、
   但放到求值器场景就是非法 JSON。

---

## 2. 源码机制（坐标）

模块：`reconstructed303/deminified/m0459_0xecff32a.js`（求值器主函数 `URn`）

| 行 | 内容 |
| --- | --- |
| 154336 | `async function URn(e, n, r, s, h, y, S, w, D)` 求值器主体 |
| 154348 | `be = e.model ?? Yv()` → 求值器模型 = hook.model ?? **默认模型** |
| 154361 | evaluator 系统提示词：要求返回 `{ok, reason[, impossible]}` 三种 JSON 形状 |
| 154400+ | `outputFormat:{type:"json_schema", schema:{ok,reason,impossible}, required:["ok","reason"], additionalProperties:false}` |
| 154429 | `kt = await ot(Ee)` 发起模型调用 |
| 154431-154437 | `kt.isApiErrorMessage` → API 错误分支（`Hook evaluator API error`） |
| 154441-154443 | `ft = Io(kt.message.content).trim()`；`Dt = pt(jB(ft), !1)`；**失败 → `"error parsing response as JSON"` + `$H(... stderr:"JSON validation failed", stdout: ft)`** |
| 154445-154451 | `mee().safeParse(Dt)` schema 校验；失败 → `"Schema validation failed"` |

goal Stop hook 的注册：`m0274_0xe951929.js`
`sessionHooksRegistry.add(sessionId, "Stop", "", { type:"prompt", prompt: 条件 })`。

主循环落地：`m0671_0xf53ce11.js:3298-3460`（`blockable_turn_end`）
- `hook_non_blocking_error` / `hook_error_during_execution` → `goalPass="error"`、`p("goal_met","evaluator_error")`。

`goal_status` 落盘形状：`m0459:140122-140129`（`Met()`）
`{type:"goal_status", met:boolean, condition:string, reason?:string, sentinel?:boolean, iterations?, durationMs?, tokens?}`。

---

## 3. 本机会话实证

在 `~/.claude/projects/` 下检索所有真实跑过 `/goal` 的会话，两个会话出现
`attachment.type="hook_non_blocking_error"`、`hookName/hookEvent="Stop"`、`stderr="JSON validation failed"`：

| 会话 | 文件 | 失败条数 |
| --- | --- | --- |
| Aivory | `D--git-codes-Aivory/277659a1-8c74-40d0-92a6-592c135932e3.jsonl` | 4 |
| LibreChat | `D--git-codes-LibreChat/cfac2534-fd35-4e39-9141-fe80f6f850b3.jsonl` | 10 |
| **合计** | | **14** |

各条 `stdout`（= deepseek-0731 求值器的原始返回）全部是**自然语言，不是 JSON**，样本：

- `我需要根据转录证据判断停止条件是否满足。条件要求:…`
- `I'll evaluate the stopping condition against the transcript evidence.…`
- `I'm in the middle of the frontend documentation workhol…`
- `Let me verify the final state of all analysis documents before judging the condition.`
- `核验所有 7 个模块分析文档是否已全部落盘。从完成通知看，…`
- `I need to evaluate whether the stopping condition …`
- `我评估这个停止条件：「持续按照我的要求调研并落盘 你可以自己执行 不要用subagent」。\n\n让我逐项核对条件与证据：\n\n1. **…`

对照：**成功**的求值（`goal_status` 带合法 `reason`）同样大量存在——Aivory 9/9、LibreChat 4/4 的非哨兵
`goal_status` 均带 `reason`。说明 deepseek-0731 **多数时候能给出合法 `{ok,reason}`，但偶发退化成对话式文本**。
这正是"偶发中断"的来源。

---

## 4. 字段形状澄清（易混点）

| 层次 | 形状 | 说明 |
| --- | --- | --- |
| 求值器**要求模型输出** | `{ok:boolean, reason:string, impossible?:boolean}`，`required:["ok","reason"]`，`additionalProperties:false` | 见 §2 提示词 + json_schema |
| CC **落盘的附件** `goal_status` | `{type:"goal_status", met:boolean, condition:string, reason?, iterations?, durationMs?, tokens?}` | 见 §2 `Met()` |

用户记忆的 `{"met":..., "condition":..., "reason":...}` 是**后者（goal_status 落盘格式）**，
不是求值器要求模型输出的格式。两者不要混用——GA 复刻时求值器契约应按 `{ok, reason, impossible}` 设计。

---

## 5. 失败后果与"中断"感知

- 单次失败：`goalPass="error"`，记 `goal_met/evaluator_error`；**目标不被立即清除**（§8.2 仅 met/impossible 才清）。
- 目标保留后进入自动重试：`Us=[60000,300000,900000]`（1/5/15 分钟），最多 3 次；超限则提示
  `Goal paused after 3 automatic retries`。
- 因此用户感知是：**这一轮判定失败 → 回合推进被打断/停滞 → 反复重试或最终暂停**，与"goal 中断"一致。

---

## 6. 缓解方向（本机 / GA 复刻）

1. **给 evaluator 单独配强模型**：`be = e.model ?? Yv()` 说明 hook 可指定 `model`；`/goal` 默认不带，
   走默认模型。可让主会话默认模型用支持严格结构化输出的模型，或 GA 复刻时给 goal evaluator 单独指定强模型。
2. **代理层强制结构化输出**：本机 `ANTHROPIC_BASE_URL=http://127.0.0.1:15721` 是本地代理。在代理层把
   `outputFormat:{type:"json_schema"}` 转成 `response_format`/grammar-constrained decoding，或对 evaluator
   请求做 JSON 提取修复（剥 markdown 代码块、取首个 `{...}`、补闭合）。
3. **GA 复刻加容错**：不要照抄 CC 的"严格 parse 一次即失败"；应做「宽松提取 → schema 校验 → 失败重试 N 次 → 再失败才判 error」。
4. **不要改 CC 源码**（本仓库铁律：只存档不改）；缓解只能在本机配置 / 代理层 / GA 侧做。

---

## 7. 复现 / 复核命令

```bash
# ① 统计两个真实 /goal 会话里 goal 求值器的 JSON 校验失败条数
grep -c '"hook_non_blocking_error"' \
  ~/.claude/projects/D--git-codes-Aivory/277659a1-8c74-40d0-92a6-592c135932e3.jsonl    # 期望 4
grep -c '"hook_non_blocking_error"' \
  ~/.claude/projects/D--git-codes-LibreChat/cfac2534-fd35-4e39-9141-fe80f6f850b3.jsonl  # 期望 10

# ② 看这些失败的 stdout（deepseek 的原始返回，应是自然语言而非 JSON）
grep '"hook_non_blocking_error"' ~/.claude/projects/D--git-codes-LibreChat/cfac2534-*.jsonl \
  | grep -o '"stderr":"[^"]*"\|"stdout":"[^"]\{0,120\}'

# ③ 对照：成功的求值落盘为 goal_status（带 reason）
grep '"type":"goal_status"' ~/.claude/projects/D--git-codes-Aivory/277659a1-*.jsonl \
  | grep -v '"sentinel":true' | grep -c '"reason"'

# ④ 源码侧：求值器严格解析点与模型来源
sed -n '154441,154451p' reconstructed303/deminified/m0459_0xecff32a.js
sed -n '154348p'        reconstructed303/deminified/m0459_0xecff32a.js   # be = e.model ?? Yv()
```

> 会话 jsonl 在 `~/.claude/projects/<项目>/`；本机模型重定向见 `~/.claude/settings.json` 的
> `ANTHROPIC_DEFAULT_*`（全部指向 `A-Deepseek-V4-Flash-0731`）。
