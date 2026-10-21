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

- **交互命令统一走 Git Bash**。`exec_command` 的默认 shell 是 **PowerShell**，所以每次调用必须**显式**传 `shell="bash"` 与 `login=false`：

  ```text
  exec_command(cmd="<bash script>", shell="bash", login=false, workdir=...)
  ```

  - ✅ 本机实测：`shell="bash"` 命中 **Git Bash**（`0=/usr/bin/bash`、`BASH_VERSION=5.2.37`、`MINGW64`），并**自动注入** `LANG=C.UTF-8` / `LC_ALL=C.UTF-8`；不会命中 WSL。
  - ❗ 不显式传参时走的是 **PowerShell**（`PSVersion=...`）——这就是之前“嘴上说 Git Bash、实际跑 PowerShell”、以致中文与 heredoc 报错的根因。**不要依赖默认值，也不要只“声称”在 Git Bash。**
  - 🛡 兼容兜底（当某环境下 `shell="bash"` 真的命中 WSL 别名时）：用 PowerShell 包装器调**绝对路径** Git Bash。该方式实测同样可用，不依赖 PATH，最确定：

    ```powershell
    & 'D:\Git\bin\bash.exe' -lc '<script>'
    ```
- 路径映射：`D:\x` → `/d/x`。
- **路径格式不可混用**：Git Bash 内用 POSIX 路径（`/d/...` 或相对路径）；Windows 程序（`python` / `node`）**不认** `/d/...`，要传原生路径（`D:\...` 或 `D:/...`）。同一条命令里不要混用两种。
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
- **md / 文档命名**：新建 markdown 及文档时，文件名一律用 `日期-名字` 格式（日期 `YYYYMMDD`），例如 `docs/20261012-研究workflow.md`；不要用无日期的裸名字。

- **长文本写入必须分段（Windows / Codex 实测）**：
  - Windows `CreateProcessW` 的命令行硬上限是 **32767 UTF-16 code units**；本机 `bash -c` 脚本体实测最大 **32735**，32736 报 `WinError 206`。
  - 但 Codex tool-call 参数会在远低于 OS 上限时出现截断；本项目实际出现过约 3.1 万字符 / 4 万 UTF-8 字节的 heredoc 只写入前半段，末尾 `EOF` 未到达。
  - 因而禁止把整篇长文塞进一次 `exec_command`。**中文正文每段约 2K-4K 字符，ASCII/代码每段不超过 8KB；单条命令目标总长 ≤ 8KB，绝不超过 12KB。**
  - 长文第一段用 `cat > file <<'EOF'`，后续段用 `cat >> file <<'EOF'`；按 Markdown 章节边界拆，不拆 code fence、JSON object、表格行或源码片段的中间。
  - 每段独立闭合 heredoc。看到 `here-document ... delimited by end-of-file (wanted EOF)` 就是命令未完整到达：检查文件尾部，从最后完整章节继续，并缩小下一段；禁止原样重试同一大命令。
  - 完整机制、证据和模板见 `docs/20261021-Codex长文本写入边界与AGENTS约束.md`；OS 边界探针见 `docs/probes/20261021-codex-command-length-probe.py`。


---

## 2. 输入物（分析对象）

| 路径 | 说明 |
| --- | --- |
| `claudecode283/claude.exe` | **主输入物**，Claude Code v2.1.283，244,960,928 B，Bun `--compile` 产物 |
| `claudecode283/MANIFEST.md` | 输入物快照 + SHA256 + PE 事实 |
| `claudecode283/modules/` | 从 `.bun` 段抠出的 **2135 个明文 JS 模块**（minify 未混淆） |
| `claudecode283/modules/INDEX.tsv` | 模块索引：idx / 偏移 / 大小 / workflow 命中数 / 文件 / 符号 |
| `claudecode283/extracted/` | 283 上游分析产物：工具描述、authoring reference、`dynamic-workflow-internals.md` |
| `claudecode303/claude.exe` | **对照输入物**，Claude Code v2.1.303，290,228,384 B，Bun `--compile` 产物；SHA256 `1787C60619BAD78543C67E4D9D8A868869C35A904F2A85EB9EA46C4808AF196B`，BUILD_TIME `2026-10-18T20:20:57Z`，GIT_SHA `07df2aedd2d01d2f60907b8404acbda187b04072` |
| `claudecode303/MANIFEST.md` | 303 输入物快照、PE 段、Bun 载荷、模块统计、跳过区与复现命令 |
| `claudecode303/modules/` | 从 303 `.bun` 段提取的 **2,431 个有效明文 JS 模块**（6 MiB 上限；2,433 个 marker，2 个 span 跳过）。注意：2,431 是有效模块数，marker 数不等于模块数 |
| `claudecode303/modules/INDEX.tsv` | 303 模块索引：idx / off / size / wf_hits / file / tokens（2,431 条数据行） |
| `claudecode303/extracted/` | 303 总览、283→303 入口映射、hooks、mods、跨版本候选；详见 §6 |
| `claude.exe.i64` | IDA 数据库，1.1 GB，**对本任务无用**（源码不在原生代码里） |

> 为什么源码能直接读 → `docs/why-source-is-readable.md`
> 怎么从 exe 里抠出来 → `docs/bun-standalone-re.md`

---

## 3. 产物地图（283 与 303 必须分目录）

### 3.1 283：`reconstructed/`

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

### 3.2 303：`reconstructed303/`

| 目录 / 文件 | 内容 | 规模 / 状态 |
| --- | --- | --- |
| `full/` | 303 线 A：全部模块仅格式化，符号仍压缩 | 2,431 |
| `deminified/` | 303 线 B：证据驱动去混淆 ★ | 2,431 |
| `full-report.json` | 303 格式化报告 | 2,431 行 |
| `deminify-names.json` | 303 改名账本（S/A/B/C 证据） | **90,771** 条改名 |
| `deminify-report.json` | 303 去混淆执行报告 | 2,431 行 |
| `deminify-verify.json` | 303 语义复验 | 2,431/2,431 `ok:true` |

303 的已验证事实（来自 `claudecode303/MANIFEST.md` 与总览；本轮已复核 SHA256、文件数、INDEX 数据行数、full/deminified 文件数与 verify 报告）：

- `claude.exe` SHA256 与 MANIFEST 一致；
- `modules/` 有 **2,431** 个 `m*.js`；`INDEX.tsv` 共 2,432 行 = 1 行表头 + **2,431** 行数据；
- `reconstructed303/full/` 与 `reconstructed303/deminified/` 各 **2,431** 个文件；
- 改名总数 **90,771**（S 29,768 / A 32,996 / B 5,650 / C 22,357）；
- 3 个 >1 MiB 模块 `m0459_0xecff32a.js`、`m1496_0xfe682a4.js`、`m1635_0x101da730.js` 的 `deminified` 复用 `full/`，**符号仍是压缩名**；
- 4 个 beautifier 失败并安全回退原文：`m0775_0xf6ccb47.js`、`m1474_0xfe0bcdb.js`、`m1697_0x1045e023.js`、`m1777_0x10644bf2.js`；
- 303 不是 283 的模块平移：模块编号、大小、共享 chunk 都变了。**禁止用模块号直接套用**，必须用导出名、字符串、属性名或调用链复核。

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

### 5.1 303 复现（独立目录，不覆盖 283）

`full.mjs` / `deminify.mjs` / `verify-full.mjs` / `verify-deminified.mjs` / `merge-reports.mjs`
支持环境变量覆盖，默认仍指向 283。303 使用：

```bash
cd reconstructed/tools
export RE_ROOT="D:/git_codes/claudecode283_hack/reconstructed303"
export RE_MODULES="D:/git_codes/claudecode283_hack/claudecode303/modules"
export RE_FULL="D:/git_codes/claudecode283_hack/reconstructed303/full"
export RE_DEMINIFIED="D:/git_codes/claudecode283_hack/reconstructed303/deminified"
node verify-full.mjs
node verify-deminified.mjs
```

> 303 提取时使用 **6 MiB** 上限（283 用 4 MiB）。完整命令与 PE/Bun 事实见
> `claudecode303/MANIFEST.md`。

> 坑：`m0357_0xc63ba04.js` 是 4.1 MB 的超大模块，Babel 处理极慢（分钟级、GB 级内存）。
> `deminify.mjs` 对 >1MB 的模块**跳过 AST 改名**，直接复用 `full/`（规则见 `AUTO-NAMING.md` §3 规则 5）。

---

## 6. 关键文档索引（哪份文档回答什么问题）

| 问题 | 文档 |
| --- | --- |
| **怎么从 exe 抠出源码**（Bun 单文件逆向全流程） | `docs/bun-standalone-re.md` |
| **为什么源码能直接读**（Bun `--compile` 原理） | `docs/why-source-is-readable.md` |
| **Windows 上 Git Bash / 中文 UTF-8 怎么正确调用**（实测结论、兜底方案、编码坑） | `docs/20261012-codex-shell-utf8执行指引.md` + `docs/windows-git-bash-execution-note.md` |
| **Git 行尾策略**（为什么总刷 LF/CRLF 警告 / 本仓库统一 LF 的做法与验证） | `docs/git-line-endings-policy.md` |
| **自动去混淆怎么做**（四级证据 / 五条安全规则 / 怎么扩展） | `reconstructed/AUTO-NAMING.md` ★ |
| **人工命名怎么做**（SOP / 范例 / 反模式） | `reconstructed/NAMING-METHOD.md` |
| **workflow 子系统有哪些符号** | `reconstructed/GLOSSARY.md` |
| **产物线 / 目录 / 正确性保证** | `reconstructed/README.md` |
| **dynamic workflow 实现剖析**（逐条源码坐标；含 §9 执行期 UI/交互：`/workflows` 列表、详情进度树、再跑历史） | `claudecode283/extracted/dynamic-workflow-internals.md` |
| **rewind / 检查点实现剖析**（逐条源码坐标） | `claudecode283/extracted/rewind-internals.md` |
| **Agent Team / teammate / swarm 实现剖析**（逐条源码坐标） | `claudecode283/extracted/agent-team-internals.md` |
| **hooks 机制实现剖析**（5 种类型 / 33 事件 / 输入输出 schema / 执行链路 / 安全门禁 / 自研复刻清单） | `claudecode283/extracted/hooks-internals.md` |
| **rewind 可读化副本**（m0357 里 20 个符号改真名 + 命名方法/证据分级） | `reconstructed/deminified-rewind/` + `extracted/rewind-internals.md` §13 |
| **Agent Team 可读化副本**（spawnTeammate / Agent 工具 / InProcessTeammateTask） | `reconstructed/deminified-agent-team/` + `extracted/agent-team-internals.md` §10 |
| **hooks 可读化副本**（执行引擎 / 输入输出 schema / 来源 / 事件分类，204 个符号改真名） | `reconstructed/deminified-hooks/` + `extracted/hooks-internals.md` |
| **Workflow 工具描述 / DSL 参考** | `claudecode283/extracted/workflow-{tool-description,authoring-reference}.md` |
| **Dynamic Workflow 复刻指南**（面向自研 Agent / Codex 开发者的实现蓝图 + 逐 API 源码核对 + 坑清单 + §9 执行期 UI/交互与“再跑历史 workflow”） | `docs/20261012-复刻dynamic-workflow指南.md` |
| **Skill 渐进式披露 / 通用 tool_result 预算**（L1/L2/L3、Skill 正文/工具结果分通道、50K/2K/500K 阈值、持久化与截断、GA 复刻映射） | `docs/20261017-CC-skill渐进式披露调研.md` |
| **CC 的 ACP 支持与 adapter 机制**（原生 stream-json control protocol vs 外部 `claude-agent-acp`、JSON-RPC session/update、permission/cancel 映射、GA 复刻边界） | `docs/20261019-CC-ACP支持调研.md` |
| **303 输入物 / 模块 / 格式化 / 去混淆总览**（2,431 模块、90,771 改名、复验、限制、检索方法） | `claudecode303/MANIFEST.md` + `claudecode303/extracted/20261020-303源码提取与可读化总览.md` |
| **283→303 入口映射**（workflow / rewind / Agent Team / hooks / mods；含“已核对 / 候选 / 未确认”状态） | `claudecode303/extracted/20261020-283到303入口映射.md` |
| **303 hooks 全链路**（33 事件、5 类型、输入输出 schema、执行器、async/worker、安全门禁） | `claudecode303/extracted/20261020-hooks入口分析.md` |
| **本机 Claude Code 2.1.303 的 Stop beep 实例**（配置、脚本、stdin/stdout、Stop 与内部 Turn 的区别） | `docs/20261020-beep-stop-hook实施记录.md` + `claudecode303/extracted/20261020-hooks入口分析.md` §15 |
| **GA hooks 设计与实现方案**（本地 command hook、Stop beep、接入点、分阶段实施与 DoD；不含云端会话） | `docs/20261020-GA-hooks设计与实现方案.md` |
| **303 mods / plugin hooks module**（`mods` 不是独立目录 API；plugin、hooks module、内置安全 plugin、加载链） | `claudecode303/extracted/20261020-mods入口分析.md` |
| **303 跨版本候选附录**（61 个 283 模块的算法候选；相似度不是等价证明） | `claudecode303/extracted/20261020-cross-version-candidates.md` + `cross-version-candidates.json` |

**命名方法一句话**：Bun `--compile` 是 minify 不是混淆，只压标识符，
**字符串 / 属性名 / 解构键 / 对象键一律保留**——所有真名只能从这四类保留物里读出来。
证据分 **S/A/B/C** 四级，写进 `deminify-names.json`，逐条可回查。

---

## 7. 当前状态（283 全量完成；303 基础产物完成）

| 项 | 状态 |
| --- | --- |
| 283 线 A 格式化 | ✅ 2135/2135（3 个超大模块退回原文） |
| 283 线 B 去混淆 | ✅ 2135/2135，**79325** 处改名（S 25466 / A 29507 / B 5089 / C 19263） |
| 283 线 B 语义复验 | ✅ 2135/2135（字符串/属性名/节点类型不变；228 处悬垂 else 补括号已放行） |
| 283 线 C 声明级精读 | ✅ workflow 1278 声明（精确子串 + 未动字符串/属性名） |
| 283 Agent Team 专项可读化 | ✅ 3 模块 / 22 处改名，语义复验 0 差异 |
| 283 hooks 专项可读化 | ✅ 4 模块 / 204 处改名，语义复验 0 差异 |
| 303 模块提取 | ✅ 2,431 个有效模块（2,433 个 marker，2 个 span 跳过）；MANIFEST 记录逐字节对比 2,431/2,431 匹配 |
| 303 格式化 | ✅ 2,431/2,431 可解析（4 个 beautifier 回退原文） |
| 303 去混淆 | ✅ 2,431/2,431，**90,771** 处改名；3 个 >1 MiB 模块复用 full |
| 303 语义复验 | ✅ 2,431/2,431 `ok:true`，0 失败 |
| 303 专项分析 | ✅ hooks、mods、workflow / rewind / Agent Team 入口映射已落盘；跨版本候选仍需逐项人工复核 |
| 解析失败退回原文 | 283: 0；303: 4 个 beautifier 回退（不是模块损坏） |

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

- ❌ 不要依赖默认 shell（它是 PowerShell）；每次显式传 `shell="bash"`。不要只“声称”在 Git Bash 而不传参。
- ❌ 中文内容不要经 `python -c` 参数或 shell 变量往返（会损坏编码）；用单引号 heredoc 直写文件（`cat > file << 'EOF'`）。
- ❌ 反斜杠会被吃：内容**直写文件**（`cat > f << 'EOF'`）安全；但内容若**穿过 Python 字符串字面量 / 嵌套 shell 层**（如 `python - << 'EOF'` 里写 `"D:\Git\bin"`），`\b`/`\a`/`\G` 会被当转义吃掉。此时用 raw string 或 `chr(92)` 构造，源码里不出现字面反斜杠。
- ❌ 中文正确性**看字节不看终端回显**：`open(p,"rb").read().decode("utf-8")` 不报错即合法；输出中文用 `sys.stdout.buffer.write(...encode("utf-8"))`。控制台代码页 GBK 会误导。
- ❌ 跨 bash/python 传文件时不要用 `/tmp`：Git Bash 的 `/tmp` 与 Windows 版 `python` 不互通（`FileNotFoundError`）；用工作区内 Windows 路径。
- ❌ 单文件删除用 Python `os.remove()`，不用 `rm -f`；绝不递归删除。
- ❌ 不要在 IDA 里对 245MB 的 exe 跑 `db.strings.rebuild()`（会卡死 GUI 20 分钟，见主文档 §2）。
- ❌ 不要删减 / 取舍源码（铁律 §0）。
- ❌ 不要覆盖前一阶段目录；新阶段开新目录。
- ❌ 不要在没有证据的情况下改名（会污染可读性，比压缩名更糟）。
- ❌ 不要把 283 的模块号直接套到 303：跨版本必须按导出名、字符串、属性名或调用链复核。
- ❌ 不要把 `cross-version-candidates` 的相似度当成等价证明；状态不是“已核对”就不能写成源码事实。
- ❌ 不要把 303 的 `mods` 当成独立 `mods/` 目录 API；它是 installed plugins / plugin function hooks / built-in security plugin 的产品层称呼。
- ❌ 不要覆盖 `reconstructed/` 去写 303；303 只能写 `reconstructed303/`。
- ❌ 不要 `rm -rf` / 递归删除（本机安全规则）。
