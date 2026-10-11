# 命名方法：如何从压缩代码推断出可读名字

> 目的：给后续（人或 agent）一套**可复现的流程**，把 `modules/` 里的压缩符号
> 还原成可读名字，并**标清每个名字的证据等级**。
>
> 核心前提：**原始名字已被 minify 丢弃，无法"恢复"，只能"推断 + 标注"。**
> 所以这份文档的重点不是"名字表"，而是**证据从哪来、怎么判、怎么记**。

---

## 0. 先搞清楚：Bun minify 掉了什么、留下了什么

`claude.exe` 是 Bun `--compile` 产物，**minify 但未混淆**。记住这张表，命名就有了依据：

| 对象 | 是否被压短 | 对命名的价值 |
| --- | --- | --- |
| 局部变量 / 函数参数 | **被压**（`e` `r` `M` `ge`…） | 无直接价值，只能推断 |
| 函数声明名 / 顶层绑定名 | **被压**（`Fy` `t7` `Io` `jo`…） | 无直接价值，只能推断 |
| `export{...}` 里的导出名 | **被压**（`export{Fy,K7r}`） | 无价值 |
| **字符串字面量** | **保留** | ⭐ 最高价值 |
| **属性 / 方法名**（`.foo`、对象键、类方法） | **保留**（默认不开 property mangling） | ⭐ 最高价值 |
| **解构模式里的键**（`{realName: local}`） | **保留** | ⭐⭐ 直接把压缩名↔真名对上 |
| **返回对象字面量的键** | **保留** | ⭐⭐ 同上，且暴露整个 API 面 |
| 数字 / 正则字面量 | 保留 | 辅助 |
| 注释（含 `// @bun @bytecode`） | **被删** | 无价值 |

> 结论：**能被"读"出来的名字，全部来自字符串、属性名、解构、返回对象这四类。**
> 其余一律是推断。

---

## 1. 证据分级（Ladder）

| 级别 | 名称 | 含义 | 可信度 |
| --- | --- | --- | --- |
| **S** | 直接映射 | 源码里出现 `{真名: 压缩名}` 或 `真名: 压缩名` 的键值对应 | 可当事实 |
| **A** | 字符串证据 | 函数体/常量里的字符串字面量点明语义 | 很高 |
| **B** | 属性证据 | `.getTurnSpent()`、`.childCtx` 等未压缩属性名 | 高 |
| **C** | 结构推断 | 由控制流/调用点/形态推断（信号量、解析器…） | 中，需交叉验证 |
| **D** | 文档标注 | 上游分析文档给的语义标签 | 中，二次引用需回源码验 |

命名时**取你拿到的最高级别**，并把它写进记录。

---

## 2. 标准流程（SOP）

### Step 0 · 定位
从 `dynamic-workflow-internals.md` 或 `GLOSSARY.md` 拿到 `模块 + 字符偏移`，
用 `tools/extract.mjs` 抽出函数体（AST 精确边界）。

### Step 1 · 找"直接映射"证据（S 级，优先）
```bash
# 解构模式：{realName: local}  —— 把 local 直接对上 realName
grep -aoE '\{[A-Za-z0-9_$]+:[A-Za-z0-9_$]+(,[A-Za-z0-9_$]+:[A-Za-z0-9_$]+)*\}' module.js

# 返回对象字面量：暴露整个 API 面
sed -n '/return {/,/^  }/p' readable/m0869.Oo.js
```
**这两处一旦命中，命名几乎不需要猜。** 见 §4 例 1、例 2。

### Step 2 · 找字符串证据（A 级）
```bash
# 错误文案 / 遥测 / 工具名 / DSL 键
grep -ohaE '"[^"]{8,90}"' module.js | grep -aiE 'workflow|agent|parallel|pipeline'
grep -ohaE 'tengu_[a-z_]+' *.js | sort -u
grep -ohaE '[A-Za-z0-9_$]{1,4}="(Workflow|Agent|StructuredOutput)"' *.js
```

### Step 3 · 找属性证据（B 级）
```bash
grep -ohaE '\.[a-zA-Z_$][A-Za-z0-9_$]{3,}' module.js | sort | uniq -c | sort -rn | head -30
```
高频未压缩属性名（`.abortController` `.getTurnSpent` `.reservePhase`…）能反推对象身份。

### Step 4 · 结构推断（C 级）
看调用点 / 被调用点 / 控制流形态：
- 有 `acquire/release + 队列` → 信号量
- 有 `acorn.parse(...)` → 解析器
- `class X extends Error` + `this.name="..."` → 错误类
- `Promise.allSettled` + barrier → `parallel`；逐 item 穿 stage → `pipeline`

### Step 5 · 定名 + 记录
写进 `naming-map.json`：`{tag, readable, level, evidence}`。**没有证据的必须标 C/D。**

---

## 3. 命名约定

1. **有真名就用真名**：`agent` / `parallel` / `pipeline` / `phase` / `log` / `budget` / `args`
   一律照抄字符串里的写法，不要另起。
2. **函数用 `动词+名词`**：`parseWorkflowScript` `compileScript` `foldJournal` `checkBudget`。
3. **保留原名**：记录里同时留 `原压缩名`（`jo`）和可读名（`agent`），方便回查坐标。
4. **错误类用源码里的 `this.name`**：`WorkflowAgentCapError` `WorkflowBudgetExceededError`。
5. **拿不准就不改名**，标 `[?]`，别用会与字符串矛盾的词。

---

## 4. 范例（worked examples）

### 例 1 · `jo` / `Ko` / `zo` —— 由返回对象直接定名 [S]
`m0869.Oo.js` 末尾：
```js
return {
  agent: jo,
  parallel: Ko,
  pipeline: zo,
  log: Go,
  phase: qt,
  resolvePhase: Wt,
  reservePhase: dn,
  recordFailure: (M) => Se(M, { log: !1 }),
  getAgentCount: () => ge,
  getFailures: () => N,
  getForeignArtifactContent: () => Z,
  bindVMAwait: (M) => {...},
  sanitizeVMValue: (M) => o(M),
  getVMProp: (M, U) => n(M, U)
}
```
→ `jo=agent`、`Ko=parallel`、`zo=pipeline`。**这是事实，不是推断。**
顺带把整个 hooks API 的名字都拿到了。

### 例 2 · `kSt` 的局部变量 —— 由解构模式定名 [S]
```js
function kSt(e) {
  let {
    taskId: r, workflowRunId: s, script: g, scriptPath: f, args: w,
    meta: A, vmScript: F, toolUseContext: R, canUseTool: ce,
    toolUseId: W, transcriptDir: H, telemetry: z, isResume: ge,
    invokingRequestId: _e, parentPromptId: ie
  } = e, { description: h, name: o } = A;
```
→ `r=taskId`、`s=workflowRunId`、`g=script`… **一次拿到 15 个映射。**

### 例 3 · `Fy` 的参数 —— 由默认值定名 [S]
```js
function Fy(e, { validateBody: n = !0, maxBytes: t = Nb } = {}) { ... }
```
→ `e=script`、`n=validateBody`、`t=maxBytes`。

### 例 4 · `Fd` / `ht` / `O_` / `bi` —— 由字符串常量定名 [A]
```bash
grep -ohaE '[A-Za-z0-9_$]{1,4}="(Workflow|Agent|SendUserMessage|StructuredOutput)"' *.js
# Fd="Workflow"  ht="Agent"  O_="SendUserMessage"  bi="StructuredOutput"
```

### 例 5 · `Ms` —— 无直接证据，靠行为推断 [C]
```js
function Ms(i, s) {          // i=limit, s=fn
  let e = 0, n = [];         // e=running, n=waitQueue
  function o() { if (e < i) return e++, Promise.resolve();
                 return new Promise(r => n.push(r)) }   // acquire
  function t() { let r = n.shift(); if (r) r(); else e-- } // release
  return async (...r) => { await o(); try { return await s(...r) } finally { t() } }
}
```
**没有任何字符串/属性证据**，名字 `i=limit`、`e=running` 等全部是**推断**。
→ 记录里标 `[C]`。这类是命名风险最高的，必须写清是推断。

### 例 6 · `t7` —— 字符串锚定的推断 [A+C]
函数体里 `"workflow_compile"`、`"syntax_error"`、
`"import() is not available in workflow scripts."`、`new Kt.Script(..., {filename:"workflow.js"})`
→ 可高置信定名 `compileScript`，标 `[A]`。

---

## 5. 反模式 / 陷阱

- ❌ **把推断当证据**：`Ms` 的 `i=limit` 是我的推断，别写成"源码如此"。
- ❌ **在 `export{}` 里找名字**：导出名也被压了。
- ⚠️ **property mangling 的前提**：本例**未开启**，所以属性名可信。
  换 build 要先验证（找个已知对象看键名是否正常）。
- ⚠️ **同名多义**：`call`/`et`/`ct` 等短名在文件里可能出现多次，
  用文档给的**字符偏移消歧**（取离偏移最近的 AST 节点）。
- ⚠️ **短名跨作用域复用**：`e`/`r` 在每个函数里含义不同，重命名**必须作用域感知**，
  不能全局替换。
- ❌ **与字符串矛盾的命名**：若字符串写 `parallel()`，就不要改叫 `fanOut()`。

---

## 6. 产出物

### `naming-map.json`
```jsonc
{
  "tag": "m0869.jo",          // 文件名（模块.符号）
  "original": "jo",           // 压缩名
  "readable": "agent",        // 推荐名
  "level": "S",               // S|A|B|C|D|?
  "evidence": "Oo() 返回对象 { agent: jo, ... }",
  "note": "DSL 入口，注入 VM 的键为 \"agent\""
}
```

### 与 pass 2（作用域感知重命名）的关系
`naming-map.json` 就是重命名器的**输入映射**。
重命名器只需按作用域把 `local` 换成 `readable`，不必重新推断。
**再次强调：这产出的是"标注名"，不是"Anthropic 原名"。**

---

## 7. 验证

1. 切片忠实性：`tools/verify.mjs` 确认每个 `raw/` 都是原模块精确子串。
2. 重命名后：AST 必须能重新解析（`acorn.parse` 通过）。
3. 语义 diff：重命名只改**绑定标识符**，不得改动属性名/字符串/字面量。
