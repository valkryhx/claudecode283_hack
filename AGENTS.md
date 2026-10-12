# AGENTS.md — 本项目实施指南（后续 agent / 协作者从这里开始）

> 这份文件是**项目级交接文档**。目标：任何一个新 agent 只读本文件 + 它指向的几份文档，
> 就能在不问人的情况下继续推进。**开工前先读完本文件。**

---

## 0. 项目定位与铁律（不可违背）

**本项目 = Claude Code 真实源码的完整存档 + 可读化。**

铁律（用户明确要求，已确认多次）：

1. **全部保留，不做删减、不做取舍。** 不要建议"这个可以丢掉"。
2. **只存真实源码。** 不写自研替代、不写伪代码、不"示意性重写"。
3. **复刻 / 裁剪 / 替换发生在别的项目**，不在本仓库。
4. **命名是"标注"不是"还原"**：原始标识符已被 minify 丢弃，任何名字都要**带证据**，
   并标清证据等级。没证据就**不改名**（宁可保留压缩名）。
5. **不覆盖前一阶段产物**：每个阶段输出到自己的目录（见 §4 阶段链）。

---

## 1. 环境铁律（Windows / Git Bash）

- 交互命令统一走 Git Bash 绝对路径，且 `exec_command` 的 `shell` 参数必须是 **`powershell`**：

  ```powershell
  & 'D:\Git\bin\bash.exe' -lc '<script>'
  ```

  ❌ 把 `shell` 设成 `bash` 会命中 WSL 别名，报"没有已安装的发行版"。
- 路径映射：`D:\x` → `/d/x`。
- Python 用 **`python`**（不是 `python3`，后者命中 WindowsApps 存根）。
- Node 用 `/d/nodejs/node`（v22.17.0）。
- Git Bash 的 `find -printf` 可能不可用；没有 `strings` 命令（用 `grep -a`）。
- 写含 `$` 的文件时，用**单引号** here-string（`@'...'@`），否则 `$` 会被 PowerShell 展开。
- **git 行尾**：系统级 `D:\Git\etc\gitconfig` 里 `core.autocrlf=true`（Git for Windows 默认），会让 `git add` 刷 LF/CRLF 警告、`git status` 出幽灵 diff。**本仓库已用仓库内 `.gitattributes`（`* text=auto eol=lf`）统一为 LF 根治**——只影响本仓库，不动系统级 `core.autocrlf=true`。**遇到行尾/CRLF 警告不要再排查，看 `docs/git-line-endings-policy.md`。**
- **写文件一律 LF**：编辑/生成任何文本文件都直接写成 LF（`\n`），不要 CRLF。
  - 仓库已用 `.gitattributes`（`* text=auto eol=lf`）在入库时自动规范化。**看到"整文件 diff"先怀疑行尾，一步确认即可，
    不要展开排查、不要反复 checkout/重写** —— 那是纯 token 浪费。
  - 程序化写文件的坑（本机实测）：**Python `open(p,"w")` 在 Windows 会把 `\n` 翻成 `\r\n`**
    → 必须 `open(p,"w",newline="\n")`（或写二进制）；Node `fs.writeFileSync` 默认原样写，确保字符串里是 `\n`。
  - 快速校验（期望 0）：`grep -c $'\r' <file>`

---

## 2. 输入物（分析对象）

| 路径 | 说明 |
| --- | --- |
| `claudecode283/claude.exe` | **唯一必需输入物**，Claude Code v2.1.283，244,960,928 B，Bun `--compile` 产物 |
| `claudecode283/MANIFEST.md` | 输入物快照 + SHA256 + PE 事实 |
| `claudecode283/modules/` | 从 `.bun` 段抠出的 **2135 个明文 JS 模块**（minify 未混淆） |
| `claudecode283/modules/INDEX.tsv` | 模块索引：idx / 偏移 / 大小 / workflow 命中数 / 文件 / 符号 |
| `claudecode283/extracted/` | 上游分析产物：工具描述、authoring reference、`dynamic-workflow-internals.md` |
| `claude.exe.i64` | IDA 数据库，1.1 GB，**对本任务无用**（源码不在原生代码里） |

> 为什么源码能直接读 → `docs/why-source-is-readable.md`
> 怎么从 exe 里抠出来 → `docs/bun-standalone-re.md`

---

## 3. 产物地图（`reconstructed/`）

| 目录 / 文件 | 内容 | 规模 |
| --- | --- | --- |
| `full/` | 线 A：全部模块，**只格式化**，标识符仍是压缩名 | 2135 |
| `deminified/` | 线 B：全部模块，**证据驱动的去混淆重命名** ★ | 2135 |
| `deminified-rewind/` | rewind 专项可读化：m0357 里 20 个符号改真名 | 1 |
| `deminified-agent-team/` | Agent Team 专项可读化：m1578/m0511/m0527 共 22 个符号改真名 | 3 |
| `deminified-hooks/` | hooks 专项可读化：m0357/m0247/m0094/m0052 共 204 个符号改真名 | 4 |
| `raw/ readable/ renamed/` | 线 C：workflow 子系统的**声明级精读版**（人工命名） | 1278 |
| `deminify-names.json` | **改名账本**：每条 `{file, old, new, level, why}` | 79325 条 |
| `deminify-report.json` / `deminify-verify.json` | 线 B 的执行报告 / 语义复验结果 | 2135 行 |
| `rewind-rename-report.json` / `agent-team-rename-report.json` / `hooks-rename-report.json` | 专项可读化改名报告 | 3 |
| `manifest.json` | 线 C 抽取清单 | 1278 |
| `naming-map.json` | 线 C 人工命名映射（含证据等级） | — |
| `tools/` | 全部可复现脚本（见 §5） | — |

---

## 4. 三条产物线 + 阶段链约定

```
modules/ ──full.mjs────────────────────▶ full/        (2135 模块，仅格式化)
   │
   └─deminify.mjs──────────────────────▶ deminified/  (2135 模块，证据驱动可读名) ★
   │
   └─extract──▶ raw/ ──annotate──▶ readable/ ──rename──▶ renamed/   (workflow 1278 声明，人工)
```

**约定：每个阶段落盘到自己的目录，后续阶段只读前一阶段产物，不覆盖。**
任何一步都能单独复现、单独检查。

---

## 5. 复现命令（全部在 `reconstructed/tools/`）

```bash
cd reconstructed/tools
npm install          # 依赖：acorn, js-beautify, @babel/{parser,traverse,generator,types}

# 线 A：全部模块格式化
node full.mjs && node verify-full.mjs

# 线 B：全部模块去混淆（6 分片并行，约 2-3 分钟）
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

# 只跑单个模块看效果
node deminify.mjs --only m0869
```

> 坑：`m0357_0xc63ba04.js` 是 4.1 MB 的超大模块，Babel 处理极慢（分钟级、GB 级内存）。
> `deminify.mjs` 对 >1MB 的模块**跳过 AST 改名**，直接复用 `full/`（规则见 `AUTO-NAMING.md` §3 规则 5）。

---

## 6. 关键文档索引（哪份文档回答什么问题）

| 问题 | 文档 |
| --- | --- |
| **怎么从 exe 抠出源码**（Bun 单文件逆向全流程） | `docs/bun-standalone-re.md` |
| **为什么源码能直接读**（Bun `--compile` 原理） | `docs/why-source-is-readable.md` |
| **Windows 上 Git Bash 怎么正确调用**（`shell="bash"` 为什么可能命中 WSL） | `docs/windows-git-bash-execution-note.md` |
| **Git 行尾策略**（为什么总刷 LF/CRLF 警告 / 本仓库统一 LF 的做法与验证） | `docs/git-line-endings-policy.md` |
| **自动去混淆怎么做**（四级证据 / 五条安全规则 / 怎么扩展） | `reconstructed/AUTO-NAMING.md` ★ |
| **人工命名怎么做**（SOP / 范例 / 反模式） | `reconstructed/NAMING-METHOD.md` |
| **workflow 子系统有哪些符号** | `reconstructed/GLOSSARY.md` |
| **产物线 / 目录 / 正确性保证** | `reconstructed/README.md` |
| **dynamic workflow 实现剖析**（逐条源码坐标） | `claudecode283/extracted/dynamic-workflow-internals.md` |
| **rewind / 检查点实现剖析**（逐条源码坐标） | `claudecode283/extracted/rewind-internals.md` |
| **Agent Team / teammate / swarm 实现剖析**（逐条源码坐标） | `claudecode283/extracted/agent-team-internals.md` |
| **hooks 机制实现剖析**（5 种类型 / 33 事件 / 输入输出 schema / 执行链路 / 安全门禁 / 自研复刻清单） | `claudecode283/extracted/hooks-internals.md` |
| **rewind 可读化副本**（m0357 里 20 个符号改真名 + 命名方法/证据分级） | `reconstructed/deminified-rewind/` + `extracted/rewind-internals.md` §13 |
| **Agent Team 可读化副本**（spawnTeammate / Agent 工具 / InProcessTeammateTask） | `reconstructed/deminified-agent-team/` + `extracted/agent-team-internals.md` §10 |
| **hooks 可读化副本**（执行引擎 / 输入输出 schema / 来源 / 事件分类，204 个符号改真名） | `reconstructed/deminified-hooks/` + `extracted/hooks-internals.md` |
| **Workflow 工具描述 / DSL 参考** | `claudecode283/extracted/workflow-{tool-description,authoring-reference}.md` |

**命名方法一句话**：Bun `--compile` 是 minify 不是混淆，只压标识符，
**字符串 / 属性名 / 解构键 / 对象键一律保留**——所有真名只能从这四类保留物里读出来。
证据分 **S/A/B/C** 四级，写进 `deminify-names.json`，逐条可回查。

---

## 7. 当前状态（截至 v2.1.283 全量完成）

| 项 | 状态 |
| --- | --- |
| 线 A 格式化 | ✅ 2135/2135（3 个超大模块退回原文） |
| 线 B 去混淆 | ✅ 2135/2135，**79325** 处改名（S 25466 / A 29507 / B 5089 / C 19263） |
| 线 B 语义复验 | ✅ 2135/2135（字符串/属性名/节点类型不变；228 处悬垂 else 补括号已放行） |
| 线 C 声明级精读 | ✅ workflow 1278 声明（精确子串 + 未动字符串/属性名） |
| Agent Team 专项可读化 | ✅ 3 模块 / 22 处改名，语义复验 0 差异 |
| hooks 专项可读化 | ✅ 4 模块 / 204 处改名，语义复验 0 差异 |
| 解析失败退回原文 | 0 |

---

## 8. 下一步（roadmap，按性价比排序）

1. **属性 → 对象身份词表**（B 级）：`e.getTurnSpent()` / `e.reservePhase()` 等特征属性
   → 反推变量是 `engine` / `toolUseContext`。性价比最高。
2. **参数名来自调用点**（C 级）：某函数在模块内所有调用点都传同一批具名实参 → 反推形参名。
   需要跨作用域分析。
3. **扩展线 C 的声明范围**：目前只覆盖 16 个 workflow 模块；可按需加入更多模块。
   - ✅ 已用同法给 **rewind** 子系统做了专项可读化（`deminified-rewind/`，见 `extracted/rewind-internals.md` §13），
     可作为"大模块里挑子系统改名"的模板。
   - ✅ 已用同法给 **Agent Team** 子系统做了专项可读化（`deminified-agent-team/`，见 `extracted/agent-team-internals.md` §10）。
   - ✅ 已用同法给 **hooks** 子系统做了专项可读化（`deminified-hooks/`，见 `extracted/hooks-internals.md`）。
4. **修 3 个未格式化的超大模块**（`m1305` / `m1544` / `m1655`）：需要更强的模板字面量处理。
5. **内置回调识别**：`.filter(Boolean)` / `.map(Number)` 这类不要误改。

改规则的落点：`tools/deminify.mjs` 里 `traverse(ast, {...})` 的访问器，
调用 `add(binding, 新名, 级别, 证据串[, {scoped:true}])`。**新规则先 `--only <模块>` 抽查再全量。**

---

## 9. 禁忌清单

- ❌ 不要用 `shell="bash"`（WSL 别名）。用 `shell="powershell"` + `& 'D:\Git\bin\bash.exe' -lc ...`。
- ❌ 不要在 IDA 里对 245MB 的 exe 跑 `db.strings.rebuild()`（会卡死 GUI 20 分钟，见主文档 §2）。
- ❌ 不要删减 / 取舍源码（铁律 §0）。
- ❌ 不要覆盖前一阶段目录；新阶段开新目录。
- ❌ 不要在没有证据的情况下改名（会污染可读性，比压缩名更糟）。
- ❌ 不要 `rm -rf` / 递归删除（本机安全规则）。
