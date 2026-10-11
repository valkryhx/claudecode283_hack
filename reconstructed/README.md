# reconstructed — Claude Code 真实源码（可读化存档）

把 `claudecode283/modules/`（Bun `--compile` 的明文 JS，minify 未混淆）**全部**抽出来、
格式化、加注、做**证据驱动的去混淆重命名**。

**用途：完整存档 + 可读化 Claude Code 的真实源码。**
不做删减、不做取舍——复刻/裁剪是别的项目的事。

---

## 三条产物线

| 线 | 粒度 | 范围 | 目录 | 说明 |
| --- | --- | --- | --- | --- |
| **A. 模块级格式化** | 1 模块 = 1 文件 | **全部 2135 个模块** | `full/` | 只格式化，标识符仍是压缩名 |
| **B. 模块级去混淆** | 1 模块 = 1 文件 | **全部 2135 个模块** | `deminified/` | 格式化 + **证据驱动的可读名**（自动） |
| **C. 声明级精读** | 1 声明 = 1 文件 | workflow 子系统（16 模块 / 1278 声明） | `raw/ readable/ renamed/` | 逐函数精读 + 人工命名深挖 |

- `full/` 保证「一个字节都不丢」；
- `deminified/` 在 `full/` 基础上**按源码证据**把压缩名换成可读名（自动，全量）；
- `renamed/` 是 workflow 子系统的**人工精读版**（命名证据见 `naming-map.json`）。
- `deminified-rewind/` / `deminified-agent-team/` / `deminified-hooks/` 是**专项可读化副本**：只改已找到强证据的绑定名，不覆盖 `deminified/`。

---

## 线 A：模块级格式化（全部）

| 项 | 值 |
| --- | --- |
| 模块数 | **2135** |
| 输入 / 输出 | 38.0 MB → 48.5 MB |
| 格式化成功 | 2132 |
| 退回原文（verbatim） | 3（模板字面量嵌套过重，beautify 会弄坏 → 保留原样） |
| 复验 | **2135/2135 全部可解析** |

**安全阀**：格式化后**重新解析**，解析不过就退回原文。保证 `full/` 里没有任何被 beautify 损坏的代码。

---

## 线 B：模块级去混淆（全部）★

在 `full/` 之上，用**源码里保留的真名**（解构键 / `this.name` / 对象字面量键 / 成员初始化 / 回调约定）自动替换压缩名。

| 项 | 值 |
| --- | --- |
| 模块数 | **2135** |
| 改名的绑定 | **79325**（S 25466 + A 29507 + B 5089 + C 19263） |
| 有改名的模块 | 1333 |
| 无证据保持原样 | 799 |
| 超大模块（>1MB，复用 full/） | 3 |
| 解析失败退回原文 | 0 |
| 语义复验 | **2135/2135 通过** |

方法与证据分级、四条安全规则、复现命令、已知限制 → **`AUTO-NAMING.md`**。
每一处改名都记在 `deminify-names.json`（`{file, old, new, level, why}`），可逐条回查。

---

## 线 C：声明级精读（workflow 子系统）

| 项 | 值 |
| --- | --- |
| 模块数 | 16 |
| 抽取声明数 | **1278** |
| 复验 | 1278/1278 精确子串 + 可解析；1278/1278 字符串/属性名不变 |

模块清单：`m0869` 引擎 · `m0862` 解析器 · `m1569` 工具入口 · `m1502` 工具描述 ·
`m0242` 信号量 · `m0567` 任务表 · `m0352` 通知 · `m0025` 常量 · `m0571` 转录目录 ·
`m0227` schema lint · `m0153` feature gate · `m0855` effort · `m1996` 再导出 ·
`m0868` 加载 · `m1460` 保存/采纳 · `m0573` adopted · `m0132` VM 沙箱加固

### 文件命名

`<模块>.<符号>.<字符偏移>.js`，例如 `m0869.lo.20900.js`。

带偏移是**必需的**：压缩代码里大量存在只差大小写的名字（`lo`/`Lo`、`et`/`Et`、`ao`/`Ao`），
而 Windows 文件系统**大小写不敏感**，不加偏移会互相覆盖。

---

## 目录结构

```
reconstructed/
├─ full/                 # 线 A：全部 2135 个模块的完整格式化源码
├─ deminified/           # 线 B：全部 2135 个模块（格式化 + 证据驱动可读名）★
├─ deminified-rewind/    # rewind 专项可读化：m0357 里 20 个 rewind 符号改真名（见 extracted/rewind-internals.md §13）★
├─ deminified-agent-team/ # Agent Team 专项可读化：m1578/m0511/m0527 关键绑定改真名（见 extracted/agent-team-internals.md §10）★
├─ deminified-hooks/     # hooks 专项可读化：m0357/m0247/m0094/m0052 共 204 个符号改真名（见 extracted/hooks-internals.md §15）★
├─ raw/                  # 线 C ①：忠实原文的函数切片（workflow）
├─ readable/             # 线 C ②：格式化 + 头部注释（标识符仍是压缩名）
├─ renamed/              # 线 C ③：人工作用域感知重命名后的可读源码
├─ tools/
│  ├─ full.mjs           # 全部模块 -> full/（含"解析不过则退回原文"安全阀）
│  ├─ deminify.mjs       # 全部模块 -> deminified/（证据驱动自动去混淆）★
│  ├─ verify-deminified.mjs # 语义复验（字符串/属性名/节点类型不变）
│  ├─ rewind-rename.mjs  # rewind 专项：m0357 里 20 个符号作用域安全改名 -> deminified-rewind/
│  ├─ verify-rewind-semantic.mjs # rewind 专项语义复验
│  ├─ agent-team-rename.mjs # Agent Team 专项：3 个模块作用域安全改名 -> deminified-agent-team/
│  ├─ verify-agent-team-semantic.mjs # Agent Team 专项语义复验
│  ├─ hooks-rename.mjs   # hooks 专项：4 个模块作用域安全改名 -> deminified-hooks/
│  ├─ verify-hooks-semantic.mjs # hooks 专项语义复验
│  ├─ extract.mjs        # acorn 解析 -> 按 AST 节点切出精确函数体（raw/）
│  ├─ annotate.mjs       # raw/ -> readable/
│  ├─ rename.mjs         # raw/ + rename-map.json -> renamed/
│  ├─ count-all.mjs      # 统计全部模块的顶层声明数
│  ├─ analyze-naming.mjs # 度量全量模块里有多少名字带证据
│  ├─ verify.mjs / verify-renamed.mjs / verify-full.mjs
│  ├─ merge-reports.mjs  # 合并分片报告
│  └─ rename-map.json    # 人工重命名输入映射
├─ manifest.json         # 线 C 抽取清单
├─ full-report.json      # 线 A 报告
├─ deminify-report.json  # 线 B 报告（每模块 renamed/big/fellBack）
├─ deminify-names.json   # 线 B 账本：每一处改名的证据 ★
├─ deminify-verify.json  # 线 B 语义复验结果
├─ rewind-rename-report.json # rewind 专项改名报告（renamed=20, skipped=0）
├─ agent-team-rename-report.json # Agent Team 专项改名报告（renamed=22, skipped=0）
├─ hooks-rename-report.json # hooks 专项改名报告（renamed=204, skipped=0）
├─ renamed-report.json / renamed-verify.json
├─ GLOSSARY.md           # 符号对照表（minified -> 含义）
├─ NAMING-METHOD.md      # 人工命名方法：证据分级 + SOP + 范例
├─ AUTO-NAMING.md        # ★ 自动去混淆：证据 + 四条安全规则 + 复现
├─ naming-map.json       # 人工命名映射
└─ README.md
```

---

## 阶段链（每阶段产出到独立目录，可追溯）

```
modules/ ──full.mjs────────────────────▶ full/        (2135 模块，仅格式化)
   │
   └─deminify.mjs──────────────────────▶ deminified/  (2135 模块，证据驱动可读名) ★
   │
   └─extract──▶ raw/ ──annotate──▶ readable/ ──rename──▶ renamed/   (workflow 1278 声明，人工)
```

**约定：每个阶段落盘到自己的目录，后续阶段只读前一阶段产物，不覆盖。**

---

## 正确性保证

| 检查 | 脚本 | 结果 |
| --- | --- | --- |
| 模块级格式化后仍可解析 | `verify-full.mjs` | 2135/2135 |
| 去混淆后**字符串/属性名/节点类型不变** | `verify-deminified.mjs` | **2135/2135** |
| 声明级切片是原模块精确子串 | `verify.mjs` | 1278/1278 |
| 人工重命名未动字符串/属性名/控制流 | `verify-renamed.mjs` | 1278/1278 |
| Agent Team 专项重命名未动字符串/属性名/控制流 | `verify-agent-team-semantic.mjs` | 3/3（0 differing keys） |
| hooks 专项重命名未动字符串/属性名/控制流 | `verify-hooks-semantic.mjs` | 4/4（0 differing keys） |

`deminify.mjs` 只改**绑定标识符**（参数 / `let`/`const`/`var` / 函数名 / 类名），
且新名在模块内**全局唯一**（杜绝遮蔽），解析不过则退回原文。

---

## 已知限制（诚实标注）

- **命名是"标注"不是"还原"**：原始标识符已被 minify 丢弃。`agent`/`parallel` 来自源码字符串/键（S 级），
  `config`/`error` 来自对象字面量键（A 级）。详见 `AUTO-NAMING.md` 与 `NAMING-METHOD.md`。
- **自动去混淆只覆盖 S / A 证据**：没有解构/对象键证据的局部变量仍是压缩名。
- **超大模块（3 个）不做 AST 改名**：直接复用 `full/` 的格式化结果。
- **悬垂 else 会被补括号**（228 处）：语义不变，见 `AUTO-NAMING.md` §4。
- **3 个模块在 `full/` 未格式化**（`m1305` / `m1544` / `m1655`）：模板字面量嵌套过重，保留原样。

---

## 重新生成

```bash
cd reconstructed/tools
npm install

# 线 A：全部模块格式化
node full.mjs && node verify-full.mjs

# 线 B：全部模块去混淆（分片并行）
for i in 0 1 2 3 4 5; do node deminify.mjs --shard $i/6 --quiet & done; wait
node merge-reports.mjs 6
for i in 0 1 2 3 4 5; do node verify-deminified.mjs --shard $i/6 & done; wait
node merge-reports.mjs 6

# 线 C：workflow 子系统（声明级）
node extract.mjs && node annotate.mjs && node rename.mjs
node verify.mjs && node verify-renamed.mjs

# 专项可读化：rewind / Agent Team / hooks
node rewind-rename.mjs && node verify-rewind-semantic.mjs
node agent-team-rename.mjs && node verify-agent-team-semantic.mjs
node hooks-rename.mjs && node verify-hooks-semantic.mjs
```

改抽取范围：`extract.mjs` 顶部的 `TARGETS` / `MODULES_ALL`。
改注释文案：`annotate.mjs` 顶部的 `NOTES`。
改自动命名规则：`deminify.mjs` 里的 `traverse(ast, {...})` 证据访问器（见 `AUTO-NAMING.md` §8）。
改人工重命名：`rename-map.json`。