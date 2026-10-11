# 自动去混淆命名（deminified/）— 方法与证据

> 本文档回答两个问题：
> 1. **`deminified/` 里的可读名字是怎么来的？**（不是猜的，每条都有源码证据）
> 2. **怎么复现 / 怎么继续扩展规则？**
>
> 手工命名那套（`NAMING-METHOD.md` + `naming-map.json`，workflow 子系统 1278 个声明）
> 是「精读 + 人工定名」；本文这套是「全量 2135 个模块、自动、证据驱动」。
> 两者共享同一套证据分级。

---

## 0. 为什么需要自动版

| | 手工版（线 C） | 自动版（本文，`deminified/`） |
| --- | --- | --- |
| 范围 | workflow 子系统 16 个模块 / 1278 个声明 | **全部 2135 个模块** |
| 命名方式 | 人工逐个判读 + 写 `naming-map.json` | 按证据规则**自动**改名 |
| 粒度 | 1 声明 = 1 文件 | 1 模块 = 1 文件（与 `full/` 对齐） |
| 可扩展 | 每加一个模块都要人工 | 规则一改，全量重跑 |

全项目顶层声明约 **77086** 个，人工不可行；但**证据是机械的**，可以自动提取。

---

## 1. 名字从哪来

Bun `--compile` **minify 但未混淆**。压缩器只压「标识符」，不碰
「字符串 / 属性名 / 解构键 / 对象键」。所以**能读出来的真名，全部来自源码里的保留物**。
自动版按证据强度分四级：

| 级别 | 证据 | 形态 | 例子 | 数量 |
| --- | --- | --- | --- | --- |
| **S** | 直接映射 | `const {realName: local} = …` | `{backend: e}` → `e` 就是 `backend` | 25466 |
| **S** | 直接映射 | `this.name = "X"` | `X$` → `ShellError` | （含上行） |
| **A** | 强证据 | 对象字面量 `{key: local}` | `{agent: u}` → `u` 就是 `agent` | 29507 |
| **B** | 属性证据 | `const x = o.PROP` | `t = o.pendingReopen` → `t` = `pendingReopen` | 5089 |
| **B** | 属性证据 | `{PROP: function(){}}` / `o.PROP = function(){}` | 匿名函数命名为 `PROP` | （含上行） |
| **C** | 结构/约定 | `catch(e)` | → `catch(error)` | 19263 |
| **C** | 结构/约定 | `.map((e)=>{})` | → `item` / `index` / `acc` | （含上行） |
| **C** | 结构/约定 | `const x = new AbortController()` | → `abortController` | （含上行） |
| **C** | 结构/约定 | `const x = readableIdent`（别名） | `n = console` → `n` = `console` | （含上行） |

> **原始标识符已被丢弃，永远无法"还原"，只能"标注"。**
> 自动版做的事：**在证据出现的地方，把压缩名就地换成证据里的真名**。

---

## 2. 四级证据的判据（`tools/deminify.mjs`）

### S 级 · 解构键 / this.name（可当事实）
- `const {backend: e} = o` → 绑定 `e` 改成 `backend`（**函数参数解构同样适用**）。
- `class X { constructor(){ this.name = "ShellError" } }` → 类 `X` 改成 `ShellError`。

### A 级 · 对象字面量键（值 = 字段）
- `return { agent: u }` → `u` 改成 `agent`。
- 依据：**字段名叫 `agent`，放进去的值 `u` 就是 agent**。

### B 级 · 属性证据
- **成员初始化**：`const t = o.pendingReopen` → `t` 改成 `pendingReopen`
  （支持 `o["pendingReopen"]` 这种字符串下标）。
  剔除内置/通用属性名（`prototype` `length` `toString` `indexOf` … 见 `GENERIC`），
  因为拿它们当变量名没有信息量。
- **函数挂属性**：`{next: function(){}}`、`o.validateStatus = function(){}`
  → 给这个**匿名函数**命名（函数表达式的名字只在函数自身作用域可见，**有遮蔽守卫**：该名字在模块里若被当变量用就不命名）。

### C 级 · 结构 / 约定推断
- **catch 参数**：`catch (e)` → `catch (error)`（业界约定）。
- **数组高阶方法回调参数**：`.map((e)=>{})` → `item`；`.map((e,i)=>{})` → `item`/`index`；
  `.reduce((a,b)=>{})` → `acc`/`item`；`.sort((a,b)=>{})` → `itemA`/`itemB`。
- **new 类**：`const e = new AbortController()` → `e` 改成 `abortController`（类名转小驼峰）。
- **别名**：`const n = console` → `n` 改成 `console`（`const x = readableIdent`）。

---

## 3. 五条安全规则（自动版的核心）

自动改名最大的风险是**改错语义**。五条规则专治这个：

### 规则 1 · 证据冲突 → 放弃
同一绑定若拿到**互相矛盾**的多个证据，直接跳过。
例：`{type: e}` 和 `{code: e}` 同时出现 → `e` 有歧义 → 不改。
（同级同名证据会合并并取更高级别。）

### 规则 2 · 只改"看起来是压缩名"的绑定
判据：长度 ≤ 3，或含 `$`，或含数字（`e` `n` `Se` `M$` `t7` `kSt`）。
已经可读的名字（`config` `error` `value`…）一律不动——避免把好名字改坏。

### 规则 3 · 新名唯一，杜绝遮蔽（shadowing）
- **默认（S/A/B/别名/new）**：新名必须在**整个模块内全局唯一**。
  因为压缩器会在不同作用域复用短名（外层 `e`、内层 `e`）。若把内层 `e` 改成外层用着的名字，
  会产生**遮蔽**，悄悄改变引用指向。全局唯一 = 语义不变。
  重名时退让成 `config_2`。
- **`scoped` 规则（catch / 回调参数）**：只要求**作用域子树内不重名**。
  这两类绑定天然各在各的小作用域里，全局唯一会逼出满屏 `error_2…error_9`。
  判据：先扫一遍该绑定作用域子树，若新名已在其中出现（说明会遮蔽别的绑定）→ 跳过。

### 规则 4 · 输出必须重新解析
改名后重新 `parse` 一遍输出；**解析不过就退回原文**。
保证 `deminified/` 里没有一个被改坏的模块。

### 规则 5 · 超大模块不做 AST 改名
单模块 > 1 MB（超长模板字面量 / 内嵌数据）直接复用 `full/` 已格式化版本。
本 build 命中 3 个：`m0357` `m1322` `m1478`。

---

## 4. 一个额外的、已验证无害的差异：悬垂 else 补括号

Babel 生成器在遇到**悬垂 else**时会给 `if` 补一对大括号：

```js
// 源（压缩）
if(i.type==="user") if(pC(i)) r||=a(i); else break; else if(...) {...}

// 输出（deminified）
if (i.type === "user") { if (pC(i)) r ||= a(i); else break; } else if (...) {...}
```

补括号**不改变语义**（只是把 else 的归属写死），但会让 `BlockStatement` 计数 +1。
全项目共 **228** 处，`verify-deminified.mjs` 已单独放行并计数。
除此之外，**所有节点类型计数、字符串、属性名都逐字节一致**。
（B 级"函数挂属性"会给匿名函数补名字，复验时对 `FunctionExpression.id` 单独放行。）

---

## 5. 结果（v2.1.283，全量）

| 项 | 值 |
| --- | --- |
| 处理模块 | **2135 / 2135** |
| 发生改名的绑定 | **79325** |
| ├ S 级（解构键 / this.name） | 25466 |
| ├ A 级（对象字面量键） | 29507 |
| ├ B 级（成员初始化 / 函数挂属性） | 5089 |
| └ C 级（catch / 回调 / new / 别名） | 19263 |
| 有改名的模块 | 1333 |
| 无证据、保持原样的模块 | 799 |
| 超大模块（复用 full/） | 3 |
| 解析失败退回原文 | **0** |
| 悬垂 else 补括号（语义不变） | 228 |
| 语义复验 | **2135/2135 通过** |

**真实例子**（都可在 `deminify-names.json` 里按 `file` 回查）：

| 模块 | 原压缩名 | 可读名 | 级别 | 证据 |
| --- | --- | --- | --- | --- |
| m0016 | `X$` | `ShellError` | S | `this.name = "ShellError"` |
| m0007 | `at` | `isRemoteControlInvocation` | S | 解构键 `{isRemoteControlInvocation: at}` |
| m0869 | `u` | `agent` | A | 对象字面量键 `{agent: u}` |
| m0015 | `t` | `pendingReopen` | B | 成员初始化 `t = ?.pendingReopen` |
| m0015 | `e` | `abortController` | C | `new AbortController()` |
| m0018 | `n` | `NODE_OPTIONS` | B | 成员初始化 `n = ?.NODE_OPTIONS` |
| m0044 | `n` | `console` | C | 别名 `n = console` |
| — | `e` | `error` | C | `catch (e)` → `catch (error)` |

---

## 6. 产物与复现

产物：

| 文件 | 内容 |
| --- | --- |
| `deminified/` | 2135 个模块，证据驱动的可读名 + 格式化 |
| `deminify-names.json` | **每一处改名的完整账本**：`{file, old, new, level, why}` |
| `deminify-report.json` | 每模块 `{in, out, renamed, skipped, fellBack, big}` |
| `deminify-verify.json` | 每模块语义校验结果 |

复现（工具在 `tools/`）：

```bash
cd tools
npm install

# 全量去混淆（6 分片并行，约 2-3 分钟）
for i in 0 1 2 3 4 5; do node deminify.mjs --shard $i/6 --quiet & done; wait
node merge-reports.mjs 6

# 语义复验
for i in 0 1 2 3 4 5; do node verify-deminified.mjs --shard $i/6 & done; wait
node merge-reports.mjs 6

# 只跑单个模块看效果
node deminify.mjs --only m0869
```

---

## 7. 怎么继续扩展规则

想加新的证据源，改 `tools/deminify.mjs` 里 `traverse(ast, {...})` 的访问器，
调用 `add(binding, 新名, 级别, 证据串[, {scoped:true}])` 即可。
`add` 会自动做**冲突检测**；后续的「压缩名判据 / 唯一性 / 重新解析」对所有证据通用。
`scoped:true` 用于"新名天然只在小作用域内出现"的规则（catch、回调参数）。

> 建议：新规则先只跑 `--only <模块>` 抽查，确认没误判再全量重跑。

**下一步可做（还没做）**：
- **参数名来自调用点**：某函数在模块内所有调用点都传同一批具名实参 → 反推形参名（C 级，需跨作用域分析）。
- **对象身份推断**：某变量高频访问 `.getTurnSpent` / `.reservePhase` 等特征属性 → 反推它是 `engine`（B 级，需要一份"属性 → 对象"词表）。
- **`.filter(Boolean)` / `.map(Number)` 之类的内置回调**：识别后不改（避免误伤）。

---

## 8. 已知限制（诚实标注）

- **只覆盖 S/A/B/C 四级证据**：纯运算、计数器、闭包状态这类**没有任何保留物线索**的局部变量**仍是压缩名**。
- **名字是"标注"不是"还原"**：`agent` / `pendingReopen` 是源码证据支持的**合理名字**，不等于 Anthropic 原始源码里的变量名。
- **A/B 级依赖"值 = 字段/属性"这一假设**：`{key: x}`、`x = o.PROP` 被当作"x 承载 key"。规则 1 的冲突检测已过滤大部分歧义，但极端情况仍可能语义偏一点。回查请以 `deminify-names.json` 的 `why` 为准。
- **C 级是约定，不是事实**：`catch(e)→error`、`.map(e→item)` 是行业惯例，读起来更顺，但不是"源码里本来就叫这个"。
- **超大模块不做 AST 改名**（§3 规则 5）。