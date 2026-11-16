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

## 1. 环境铁律（Windows：外层 PowerShell，内层 Git Bash）

- **命令内容在 Git Bash 子进程执行，但工具外层永远不是 Bash。** `exec_command` 的默认 shell 是 **PowerShell**；**禁止使用 `shell="bash"`**，本机该值可能命中 WSL 存根，并且会把下面的 PowerShell wrapper 当成 Bash 语法而报错。唯一允许的调用骨架是：

  ```text
  exec_command(
    cmd="& '<Git Bash 可执行文件绝对路径>' -lc '<bash-payload>'",
    shell="powershell",
    login=false,
    workdir=...
  )
  ```

  多行 payload 用 PowerShell 单引号 here-string 传入：

  ```text
  $script = @'
  ... bash payload ...
  '@
  & '<Git Bash 可执行文件绝对路径>' -lc $script
  ```

  `$script = @'`、`'@` 和开头的 `&` 都是 **PowerShell 语法**，不能作为 `shell="bash"` 的 `cmd`。看到 `export`、heredoc、`bash $'\r'`、`&&`、管道等 Bash 语法时，也只说明它们是 `-lc` 的内部 payload，绝不代表应把工具参数改成 `shell="bash"`。

  - ❗ 不显式传参时走的是 **PowerShell**（`PSVersion=...`）——这就是之前“嘴上说 Git Bash、实际跑 PowerShell”、以致中文与 heredoc 报错的根因。**不要依赖默认值，也不要只“声称”在 Git Bash。**
  - ⚠️ **本机实测（2026-10-19）**：`shell="bash"` 会命中 **WSL 存根**，不是 Git Bash；即使某次没有命中 WSL，也会把 PowerShell wrapper 当成 Bash 语法并报 `syntax error near unexpected token '&'`。两种情况都不得改用 `shell="bash"`。
  - 🛡 Git Bash 绝对路径兜底：先用 `where.exe bash` / `where.exe git` 确认本机安装位置，再用 PowerShell 包装器调用，最确定：

    ```powershell
    & '<Git Bash 可执行文件绝对路径>' -lc '<script>'
    ```

  - 📍 **Git Bash / gitconfig / node 的具体安装路径是机器相关的，不写进本文件**；本机路径另见 `docs/20261026-GitBash本机路径.md`（不入库），其他机器按该文档的探测方法自行确认。

  - ✅ 判定是否真的进入 Git Bash：输出应包含 `bash=/usr/bin/bash`、`MINGW64_NT-...`、`LANG=C.UTF-8`；不要只看命令是否返回 0。
- 路径映射：盘符 `X:\x` → `/x/x`（如 `D:\x` → `/d/x`）。
- **路径格式不可混用**：Git Bash 内用 POSIX 路径（`<盘符>/...` 或相对路径）；Windows 程序（`python` / `node`）**不认** POSIX 路径，要传原生路径（`X:\...` / `X:/...`）。同一条命令里不要混用两种。
- Python 用 **`python`**（不是 `python3`，后者命中 WindowsApps 存根）。
- Node 用 `node`（本机实测 v25.2.1；路径与版本因机器而异，以 `where.exe node` / `node --version` 为准）。
- Git Bash 的 `find -printf` 可能不可用；没有 `strings` 命令（用 `grep -a`）。
- 写含 `$` 的文件时，用**单引号** here-string（`@'...'@`），否则 `$` 会被 PowerShell 展开。
- **git 行尾**：系统级 gitconfig（`git config --list --show-origin` 可查位置）里 `core.autocrlf=true`（Git for Windows 安装器默认），会让 `git add` 刷 LF/CRLF 警告、`git status` 出幽灵 diff。**本仓库已用仓库内 `.gitattributes`（`* text=auto eol=lf`）统一为 LF 根治**——只影响本仓库，不动系统级 `core.autocrlf=true`。**遇到行尾/CRLF 警告不要再排查，看 `docs/git-line-endings-policy.md`。**
- **写文件一律 LF**：编辑/生成任何文本文件都直接写成 LF（`\n`），不要 CRLF。

  - 仓库已用 `.gitattributes`（`* text=auto eol=lf`）在入库时自动规范化。**看到"整文件 diff"先怀疑行尾，一步确认即可，
    不要展开排查、不要反复 checkout/重写** —— 那是纯 token 浪费。
  - 程序化写文件的坑（本机实测）：**Python `open(p,"w")` 在 Windows 会把 `\n` 翻成 `\r\n`**
    → 必须 `open(p,"w",newline="\n")`（或写二进制）；Node `fs.writeFileSync` 默认原样写，确保字符串里是 `\n`。
  - 快速校验（期望 0）：`python -c "import sys; print(open(sys.argv[1], 'rb').read().count(b'\r'))" '<file>'`
- **md / 文档命名**：新建 markdown 及文档时，文件名一律用 `日期-名字` 格式（日期 `YYYYMMDD`），例如 `docs/20261012-研究workflow.md`；不要用无日期的裸名字。

- **长文本写入必须分段（Windows / Codex 实测）**：
  - Windows `CreateProcessW` 的命令行硬上限是 **32767 UTF-16 code units**；本机 `bash -c` 脚本体实测最大 **32735**，32736 报 `WinError 206`。
  - 但 Codex tool-call 参数会在远低于 OS 上限时出现截断；本项目实际出现过约 3.1 万字符 / 4 万 UTF-8 字节的 heredoc 只写入前半段，末尾 `EOF` 未到达。
  - 因而禁止把整篇长文塞进一次 `exec_command`。**中文正文每段约 2K-4K 字符，ASCII/代码每段不超过 8KB；单条命令目标总长 ≤ 8KB，绝不超过 12KB。**
  - 长文第一段用 `cat > file <<'MDOC_20261021_A7F3'`，后续段用 `cat >> file <<'MDOC_20261021_A7F3'`；每次都使用**本次唯一的 delimiter**，并在正文结束后用完全相同的单独一行闭合。
  - **禁止在包裹长文时使用裸 `EOF`。** 引号 heredoc（`<<'EOF'`）只阻止变量展开，不能阻止正文里单独一行的 `EOF` 提前结束 heredoc；写“包含 heredoc 示例的 Markdown”时，外层 delimiter 必须不同于所有内层示例 delimiter。
  - 按 Markdown 章节边界拆，不拆 code fence、JSON object、表格行或源码片段的中间；每段独立闭合 heredoc。
  - 看到 `here-document ... delimited by end-of-file (wanted ...)` 时，先检查是命令截断还是正文中出现了同名的 delimiter 行：检查文件尾部与 delimiter 出现位置，从最后完整章节继续，换一个新的唯一 delimiter，并缩小下一段；禁止原样重试同一大命令。
  - 完整机制、证据和模板见 `docs/20261021-Codex长文本写入边界与AGENTS约束.md`；OS 边界探针见 `docs/probes/20261021-codex-command-length-probe.py`。

- **heredoc 只用于「写死内容」，不用于「跑逻辑」（2026-10-26 补充）**：
  - 判定标准只有一条：**这段内容是不是原样落盘**。是 → 可以用 heredoc；需要循环、正则、读现有文件、条件分支、多步改动 → **一律写成独立 `.py` / `.mjs` 脚本再执行**，禁止用 `python - <<'X'` 跑脚本。
  - ❌ 反面例（本仓库实际踩过）：`python - <<'PY_X' && echo done` —— 正文和闭合行都没写，bash 报 `here-document ... delimited by end-of-file`，`python -` 读到空 stdin 进入 REPL，后面的 `&& echo` 照样执行，于是**既没改文件也没报错**。
  - ✅ 正面例（插入表格行 / 改行 / 条件写入这类“要判断”的活）：

    ```bash
    cat > work/_patch.py <<'PY_PATCH_20261026_0713'
    import sys
    path = sys.argv[1]
    text = open(path, encoding="utf-8", newline="").read()
    if "已插入" in text:
        print("skip: already patched")
        sys.exit(0)
    ...  # 真实逻辑
    PY_PATCH_20261026_0713
    python work/_patch.py AGENTS.md
    ```

  - 闭合行必须**独占一行且后面不接 `&&` / `;` / `|`**；命令里出现第二个命令时，把 heredoc 段写成单独一条 `exec_command`。
  - **heredoc 正文里不要出现“单独一行的 delimiter 候选”**，尤其别写 `EOF`、`END`、`DONE`、`PY`、`PYTHON` 这类通用词；统一用 `用途_日期_随机4位`，如 `PY_PATCH_20261026_K3M9`。
  - 每条一次写入的正文 ≤ 2K-4K 中文字符 / ≤ 8KB ASCII；超了就按 Markdown 章节或函数边界拆成多条 `cat >>`，每条独立闭合。
  - 需要写“包含 heredoc 示例的 Markdown”时，**外层 delimiter 必须与正文里所有内层 delimiter 不同**，且外层不要用 `MD`、`EOF` 这类会被示例正文命中的词。
  - **自查（写完必跑一条）**：`tail -c 200 <file>` 看结尾是否完整；`grep -c $'\r' <file>` 期望 0；含中文再 `python -c "open('<file>','rb').read().decode('utf-8')"`。
  - **写坏后的恢复顺序**（不要原样重试同一条命令）：① 看 `tail -c 300 <file>` 判断是“截断”还是“正文里撞了 delimiter”；② 若是截断，从最后一个完整章节/函数边界继续，换新 delimiter、缩小下一段；③ 若是撞 delimiter，只重写被截断的那一段；④ 逻辑类命令直接删掉 heredoc，改独立脚本重做。


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
| `claudecode319/claude.exe` | **本机现行输入物**，Claude Code v2.1.319，344,807,072 B，Bun `--compile` 产物；SHA256 `2E055732C9D03D22700D9046251A8370B673607BFCC9E4D16A1B0E8FB1345CBD`，BUILD_TIME `2026-11-05T18:14:18Z`，GIT_SHA `fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2` |
| `claudecode319/MANIFEST.md` | 319 输入物快照、PE 段、Bun 载荷、产物统计、跳过区与复现命令 |
| `claudecode319/modules/` | 从 319 `.bun` 段提取的 **2,882 个有效明文 JS 模块**（6 MiB 上限 + `--carve-head`；2,883 个 marker，1 个 span 跳过、1 个 span 切出模块头） |
| `claudecode319/modules/INDEX.tsv` | 319 模块索引：idx / off / size / wf_hits / file / tokens（2,882 条数据行） |
| `claude.exe.i64` | IDA 数据库，1.1 GB，**对本任务无用**（源码不在原生代码里） |

> 为什么源码能直接读 → `docs/why-source-is-readable.md`
> 怎么从 exe 里抠出来 → `docs/bun-standalone-re.md`

---

## 3. 产物地图（283 与 303 必须分目录）

### 3.1 283：`reconstructed/`

| 目录 / 文件                                                                                | 内容                                                          | 规模     |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | -------- |
| `full/`                                                                                    | 线 A：全部模块，**只格式化**，标识符仍是压缩名                | 2135     |
| `deminified/`                                                                              | 线 B：全部模块，**证据驱动的去混淆重命名** ★                  | 2135     |
| `deminified-rewind/`                                                                       | rewind 专项可读化：m0357 里 20 个符号改真名                   | 1        |
| `deminified-agent-team/`                                                                   | Agent Team 专项可读化：m1578/m0511/m0527 共 22 个符号改真名   | 3        |
| `deminified-hooks/`                                                                        | hooks 专项可读化：m0357/m0247/m0094/m0052 共 204 个符号改真名 | 4        |
| `raw/ readable/ renamed/`                                                                  | 线 C：workflow 子系统的**声明级精读版**（人工命名）           | 1278     |
| `deminify-names.json`                                                                      | **改名账本**：每条 `{file, old, new, level, why}`             | 79325 条 |
| `deminify-report.json` / `deminify-verify.json`                                            | 线 B 的执行报告 / 语义复验结果                                | 2135 行  |
| `rewind-rename-report.json` / `agent-team-rename-report.json` / `hooks-rename-report.json` | 专项可读化改名报告                                            | 3        |
| `manifest.json`                                                                            | 线 C 抽取清单                                                 | 1278     |
| `naming-map.json`                                                                          | 线 C 人工命名映射（含证据等级）                               | —        |
| `tools/`                                                                                   | 全部可复现脚本（见 §5）                                       | —        |

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

### 3.3 319：`reconstructed319/`（2026-11-07 新增）

| 目录 / 文件 | 内容 | 规模 / 状态 |
| --- | --- | --- |
| `full/` | 319 线 A：全部模块仅格式化，符号仍压缩 | 2,882 |
| `deminified/` | 319 线 B：证据驱动去混淆 ★ | 2,882 |
| `full-report.json` | 319 格式化报告 | 2,882 行 |
| `deminify-names.json` | 319 改名账本（S/A/B/C 证据） | **100,496** 条改名 |
| `deminify-report.json` | 319 去混淆执行报告 | 2,882 行 |
| `deminify-verify.json` | 319 语义复验 | 2,882/2,882 `ok:true` |
| `spans/` | **被跳过 marker span 的逐字节归档**（48 个切片 + `REPORT.md`） | 3.62 MB |
| `extracted/` | 319 分析文档（被跳过 span 完整分析） | 1 |

319 的已验证事实（来自 `claudecode319/MANIFEST.md`；复制 exe 后已复核 SHA256、文件数、INDEX 数据行数、full/deminified 文件数与 verify 报告）：

- 本机 `claude` 命令解析到 `C:\Users\Administrator\.local\bin\claude.exe`，v2.1.319；
- `claude.exe` 344,807,072 B，SHA256 `2E055732C9D03D22700D9046251A8370B673607BFCC9E4D16A1B0E8FB1345CBD`，BUILD_TIME `2026-11-05T18:14:18Z`，GIT_SHA `fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2`；
- `.bun` 段 `0x941e400`，2,883 个 marker，**2,882** 个有效模块，模块总字节 53,398,027；
- `modules/` 有 **2,882** 个 `m*.js`；`INDEX.tsv` 共 2,883 行 = 1 行表头 + **2,882** 行数据；
- `reconstructed319/full/` 与 `reconstructed319/deminified/` 各 **2,882** 个文件；
- 改名总数 **100,496**（S 33,104 / A 35,788 / B 5,968 / C 25,636）；
- 4 个 >1 MiB 模块 `m0591_0x11be624e.js`（5.4 MB）、`m2124_0x1363573f.js`、`m1764_0x12ee5476.js`、`m0302_0x117cfe48.js` 的 `deminified` 复用 `full/`，**符号仍是压缩名**；
- 5 个 beautifier 失败并回退：`m0769_0x124037e1.js`、`m1738_0x12e7929f.js`、`m1957_0x133528ed.js`、`m2041_0x134ee180.js`、`m2136_0x1383a002.js`；已逐字节审计，与原文**仅差结尾 1 个 NUL 被写成空格**，正文未改，且线 B 对它们正常改名；
- 319 不是 303 的模块平移：模块编号、大小、共享 chunk 都变了。**禁止用模块号直接套用**；
- **1 个 span 被跳过、1 个 span 被切出模块头**，均已完整分析并逐字节归档到 `claudecode319/spans/`（详见 `claudecode319/extracted/20261107-被跳过span完整分析.md`）：
  - marker 1（141 MB）从 `.rdata` 伪起点跨 **15 个 PE 段**，内部 **0 个模块标记**，只有 Bun 运行时字符串表 → **不含业务源码，仍跳过**；
  - marker 2882 前 **4,482 B 是完整真实模块**（原子状态库 `chunk-sa45ym56.js`，16 个内部文件、导出 jose 的 JWT API），其后是 chunk 索引表 → **含独有源码，已用 `--carve-head` 收入 `modules/` 并走完线 A/B（改名 2 处）**；该模块在其余 2,881 个模块里检索命中数为 0，且被 `m1764` 显式 import；
  - 切点规则：`\x00` 只有其后 64 B 可打印率 < 0.95 才算模块结束 —— marker 2882 在偏移 422 有游离 NUL，靠此规则才没提前截断；
  - 2,883 marker 中有 2 个在 `.rdata` 是伪标记（marker 0 的 18 B 就是 `// @bun @bytecode\n` 本身）→ **marker 数 ≠ 模块数**；
  - `spans/` 48 个切片逐一比对 **ok=48 bad=0**；
- 线 C（声明级精读）与子系统专项可读化（rewind / Agent Team / hooks）**尚未对 319 执行**；跨版本对照也尚未生成。

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
export RE_ROOT="../../reconstructed303"
export RE_MODULES="../../claudecode303/modules"
export RE_FULL="../../reconstructed303/full"
export RE_DEMINIFIED="../../reconstructed303/deminified"
node verify-full.mjs
node verify-deminified.mjs
```

> 性能提示：`verify-deminified.mjs` **单进程跑全量约 2 分钟**（本机 303 实测 121.7s，2431/2431 ok）。
> 要反复跑，用 §5 那套 6 分片并行写法明显更快（每片只校验 `i % 6 == shardIdx` 的文件）：
>
> ```bash
> cd reconstructed/tools
> export RE_ROOT="../../reconstructed303"
> export RE_MODULES="../../claudecode303/modules"
> export RE_FULL="../../reconstructed303/full"
> export RE_DEMINIFIED="../../reconstructed303/deminified"
> for i in 0 1 2 3 4 5; do node verify-deminified.mjs --shard $i/6 & done; wait
> ```
>
> 单分片输出形如 `[verify shard 0/6] ok: N bad: 0 big: ...`；各片 ok 相加应等于 2431。

> 303 提取时使用 **6 MiB** 上限（283 用 4 MiB）。完整命令与 PE/Bun 事实见
> `claudecode303/MANIFEST.md`。

### 5.2 319 复现（独立目录，不覆盖 283 / 303）

同一套工具，只换 4 个环境变量。319 全量跑完实测：线 A 约 110 s，线 B 6 分片约 264 s。

```bash
cd reconstructed/tools
export RE_ROOT="D:/git_repos/claude_hack/reconstructed319"
export RE_MODULES="D:/git_repos/claude_hack/claudecode319/modules"
export RE_FULL="D:/git_repos/claude_hack/reconstructed319/full"
export RE_DEMINIFIED="D:/git_repos/claude_hack/reconstructed319/deminified"

# 线 A
node full.mjs && node verify-full.mjs

# 线 B（6 分片并行）
for i in 0 1 2 3 4 5; do node deminify.mjs --shard $i/6 --quiet & done; wait
node merge-reports.mjs 6
for i in 0 1 2 3 4 5; do node verify-deminified.mjs --shard $i/6 & done; wait
node merge-reports.mjs 6
```

模块提取（319 同样用 6 MiB 上限）：

```bash
cd /d/git_repos/claude_hack
python tools/extract_bun_modules.py \
  "D:/git_repos/claude_hack/claudecode319/claude.exe" \
  "D:/git_repos/claude_hack/claudecode319/modules" \
  --max-size 6M --carve-head
```

> ⚠️ `--carve-head` 是 319 专用：让提取器在"真模块 + 二进制尾"的 span 里只保留模块头。
> **不加会得到 2,881 个模块，少了 `m2882_0x144f842f.js`（原子状态库）。**
> 283/303 的已发布产物没用这个开关，模块数仍是 2,135 / 2,431。

> ⚠️ 本机 `claude` 是**自更新**的，`C:\Users\Administrator\.local\bin\claude.exe` 会随版本变化。
> 复现前先核对 SHA256 是否仍为 `2E055732C9D03D22700D9046251A8370B673607BFCC9E4D16A1B0E8FB1345CBD`；
> 若已升级，说明本机版本不再是 319，应新建版本目录而不是覆盖 `claudecode319/`。
> 完整命令与 PE/Bun 事实见 `claudecode319/MANIFEST.md`。

被跳过的 2 个 marker span（不进 `modules/`，但字节全部归档）：

```bash
cd /d/git_repos/claude_hack
python tools/carve_skipped_spans.py \
  "D:/git_repos/claude_hack/claudecode319/claude.exe" \
  "D:/git_repos/claude_hack/claudecode319/spans"
# 产出 48 个逐字节切片 + REPORT.md；命名里的 0xOFFSET 是源文件绝对偏移，可直接复算
```

> 该工具复用与 `extract_bun_modules.py` **完全相同**的跳过判据（6 MiB 上限 + 非模块尾部），
> 因此重跑时选中的 span 不会漂移。

> 坑：`m0357_0xc63ba04.js` 是 4.1 MB 的超大模块，Babel 处理极慢（分钟级、GB 级内存）。
> `deminify.mjs` 对 >1MB 的模块**跳过 AST 改名**，直接复用 `full/`（规则见 `AUTO-NAMING.md` §3 规则 5）。

---

## 6. 关键文档索引（哪份文档回答什么问题）

| 问题 | 文档 |
| --- | --- |
| **怎么从 exe 抠出源码**（Bun 单文件逆向全流程） | `docs/bun-standalone-re.md` |
| **为什么源码能直接读**（Bun `--compile` 原理） | `docs/why-source-is-readable.md` |
| **Windows 上 Git Bash / 中文 UTF-8 怎么正确调用**（以本文件 §1 为唯一现行契约；`docs/windows-git-bash-execution-note.md` 仅作历史说明；`docs/20261012-codex-shell-utf8执行指引.md` 中 `shell="bash"` 建议已废弃，禁止照抄） | `docs/windows-git-bash-execution-note.md` |
| **Git 行尾策略**（为什么总刷 LF/CRLF 警告 / 本仓库统一 LF 的做法与验证） | `docs/git-line-endings-policy.md` |
| **源码调研怎么复核**（为什么第一遍必然漏 / 压缩符号身份 / 断言化 / 反向确认 / SOP / 反模式）★ | `docs/20261113-源码调研复核方法.md`；与 §8.6 配套 |
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
| **CC 被外部调用面全景（303 复核）**（ACP 0 命中；8 条通道：headless / 双向 stream-json / `--sdk-url` / 后台会话 / 预热池 / `mcp serve` / 内置 SDK / hooks 与权限代答；控制子类型清单与报文；GA 复刻分期） | `docs/20261106-CC被外部调用面调研.md` |
| **CC 看图（view image）实现**（无独立 view_image 工具；用户粘贴/路径 → image block、Read 工具图片分支、magic bytes 校验、预算常量、tool_result 数组结构、OpenAI 兼容降级、复刻代码骨架） | `docs/20261024-CC-view-image实现调研.md` |
| **CC 输入框预测补全（prompt suggestion）实现**（四层开关、焦点/plan/限流/缓存门禁、复用父前缀的 forked query、固定指令全文、14 条过滤规则与中日韩词数加权、placeholder 展示、Tab/→ 接受、20 次未用的退避机制、SDK `prompt_suggestion` 帧与 `set_prompt_suggestions_paused`、复刻骨架） | `docs/20261024-CC-prompt-suggestion实现调研.md` |
| **CC 执行中继续输入（边跑边收）机理**（统一命令队列、now/next/later 优先级、prompt.submit hook 与 screeningPending、轮内 fold 的 queued_command attachment 与包装文本、drain 循环与 followers 合并、now→abort 中断、低延迟提交 background/interrupt/cancel、Esc 清队列、上箭头编辑与 queued_turn_count、复刻清单） | `docs/20261024-CC-执行中继续输入机理调研.md` |
| **303 输入物 / 模块 / 格式化 / 去混淆总览**（2,431 模块、90,771 改名、复验、限制、检索方法） | `claudecode303/MANIFEST.md` + `claudecode303/extracted/20261020-303源码提取与可读化总览.md` |
| **283→303 入口映射**（workflow / rewind / Agent Team / hooks / mods；含“已核对 / 候选 / 未确认”状态） | `claudecode303/extracted/20261020-283到303入口映射.md` |
| **303 hooks 全链路**（33 事件、5 类型、输入输出 schema、执行器、async/worker、安全门禁） | `claudecode303/extracted/20261020-hooks入口分析.md` |
| **本机 Claude Code 2.1.303 的 Stop beep 实例**（配置、脚本、stdin/stdout、Stop 与内部 Turn 的区别） | `docs/20261020-beep-stop-hook实施记录.md` + `claudecode303/extracted/20261020-hooks入口分析.md` §15 |
| **GA hooks 设计与实现方案**（本地 command hook、Stop beep、接入点、分阶段实施与 DoD；不含云端会话） | `docs/20261020-GA-hooks设计与实现方案.md` |
| **303 mods / plugin hooks module**（`mods` 不是独立目录 API；plugin、hooks module、内置安全 plugin、加载链） | `claudecode303/extracted/20261020-mods入口分析.md` |
| **303 WebFetch 调研与 GA 落地建议**（工具契约、直连/代理链路、登录与付费边界、SSRF/DNS 安全设计、Phase 1/2 计划） | `docs/20261021-CC-WebFetch功能调研.md` |
| **GA WebFetch A 方案（当前实施契约）**（透明网络出口、CC 行为对齐、基础 URL/大小/超时、GA 接入与验收） | `docs/20261021-GA-WebFetch-A方案.md`；GA 仓库实施副本 `D:/git_codes/GenericAgent/docs/superpowers/plans/2026-10-21-ga-web-fetch.md` |
| **GA WebFetch B 参考方案（A 完成后再做）**（direct SSRF、DNS rebinding、peer 复核、trusted-proxy） | `docs/20261021-GA-WebFetch设计与实现方案.md` |
| **303 跨版本候选附录**（61 个 283 模块的算法候选；相似度不是等价证明） | `claudecode303/extracted/20261020-cross-version-candidates.md` + `cross-version-candidates.json` |
| **303 resume / 会话转录机制**（JSONL 事件流、uuid/parentUuid/logicalParentUuid、按类型持久化策略、compact_boundary + preservedMessages、`cnn`/`rer`/`ter` 两种视图与 `Rx=4096` 裁剪、fork、列表轻量扫描） | `docs/20261025-CC-resume机制调研.md` |
| **GA resume 只显示部分历史的根因与优化设计**（history_replace 未重置视口、compact 无锚点、深度相等推断失效、转录 v2 uuid 事件、backend adapter、分阶段实施） | `docs/20261025-GA-resume优化设计.md` |
| **CC 子 agent 工作目录管理（软提示 + 代码硬切换）与 GA 对比**（283/303 证据坐标、workflow/Agent Team 双机制、GA 现状对齐、A/B/C 优化建议） | `docs/20261029-CC子agent工作目录管理与GA对比.md` |
| **319 输入物 / 模块 / 格式化 / 去混淆总览**（2,882 模块、100,496 改名、复验、限制、复现命令） | `claudecode319/MANIFEST.md` |
| **319 被跳过 span 的完整分析**（marker 1 跨 15 个 PE 段、只有 Bun 运行时表；marker 2882 头部是独有原子状态库 `chunk-sa45ym56.js`；marker 数 ≠ 模块数的原因；**§8 二进制尾三段解剖：141 帧 zstd 内嵌文档 7.74 MB + 2,878×2 的 chunk 名表 + 247 条资源索引；「5,756 个 chunk 名」实为 2,878×2 条目数，真正无引用仅 7 个**） | `claudecode319/extracted/20261107-被跳过span完整分析.md` |
| **subagent 异步执行 + agent 间通信四通道**（`task-notification` 推送与 fold 点、`SendMessage` 五路由与 `in_process` 分派、`SubagentHandback` 一次性上缴、`notify_when_idle` 订阅；含「不阻塞但也不抢占」的准确语义、反权限洗白三条硬规则、`sendMessagePins` 防串名、**§10.9/§10.10 两轮运行时实测**、复刻清单） | `docs/20261108-CC-subagent异步与agent间通信机制调研.md` |
| **源码结论的运行时实证核验方法**（transcript JSONL 数据源与事件类型全表；受控实验哨兵 token、负对照、五条判据、假阳性排查、版本锚定；**§4.3 用字段有无判分支的三个前提、§8 反模式表、§9 九步 SOP；§13 是内置工具文档的实测结果：3 条升为实测证实、1 条降级、1 条被推翻，并查出 Git Bash 自动检测缺陷**） | `docs/20261108-源码结论的运行时实证核验方法.md` |
| **UX/UI 结论的运行时实证核验方法**（transcript 不适用，需换 L2：路线 A PTY 抓包 / 路线 B 叶子模块直执行；**§2 ConPTY 会重排 `?2026h…?2026l` 嵌套并丢弃 `1049h`/鼠标/DECSTBM/SU —— `[未验证]` 的根因**；§4 决策表、§5 假阳性假阴性、§6 分级措辞「构造得出 ≠ 运行时发了 ≠ 用户看到了」） | `docs/20261108-UXUI结论的运行时实证核验方法.md` + `tools/ux-verify/` |
| **319 插件状态库 + 静态扫描 + 授权校验**（`atom/derive/memberOf/read/update` 5 个 API；`"claude-code"` 虚拟模块；强制 plugin/key 字面量→`{reads,writes}` 清单；`PluginState` 声明合并；`xn()` 两条硬规则；`mod` ≡ `plugin`；**外部插件与内置插件共用唯一扫描入口 `Baa()`，全链路只有 1 处按来源分流**） | `claudecode319/extracted/20261107-插件状态库与静态扫描机制.md` |
| **CC 内置工具实现调研（Bash / PowerShell / Read / Write / Edit / Glob / Grep / WebFetch / WebSearch / Todo / Task / AskUserQuestion / ToolSearch）**（Windows 不吃 PS 语法错的根因：强制 Git Bash + 平台分支提示词；shell snapshot；32767 命令行上限的分段携带 + sha256；只读证明→免权限；结果预算与 `<persisted-output>`；并发分组；路径安全层；复刻清单与常量速查；**§21 为第三方对抗式核验记录：183 条 `模块:行号` 坐标已全部复算落到实码，含 24 处符号/坐标错配与 3 处结论订正**） | `docs/20261107-CC内置工具实现调研.md` |
| **CC 执行期 UI 渲染对标（283 的字形/文案层）**（具名字形表、`⎿` 结果行、折叠组件 `Hj`、动态键位提示、spinner 帧与 190 个动词、转录模式头） | `docs/20261016-CC-UI渲染对标调研.md` |
| **CC UX/UI 设计深挖与 319 源码对标（机制层：为什么丝滑/不抖/不跳）**（帧节流 16ms/输入优先 4ms/stdout 背压；双缓冲逐格 diff；`CSI ?2026h` 同步输出包帧；DECSTBM 滚动区 + 已滚出行跳过；`ScrollBox` 与 `pendingScrollDelta` 衰减 + 滚轮加速度曲线；粘底/HWM/锚点；高度锁 `LG`；根限高 + 正文 `overflow:scroll` + 底栏 `flexShrink:0` 的三层分区；底栏单提示优先级状态机 + 三级宽度降级；折叠计数单调化；**§7 复刻清单 P0/P1/P2 + §8 反模式对照表**） | `docs/20261107-CC-UXUI设计深挖与319源码对标.md` |
| **319 上下文压缩机制（自动 / 手动 / 反应式 / 预计算 / 微型压缩）**（四档水位 `effectiveWindow−13000` 及常量 20000/13000/3000；`$f` 锚点计量；`hxr`+`Dno` 触发决策树；`nPe` 分轮阶梯 4 种步长；摘要 prompt 全文与 3 条注入防护；`aPe` 压缩后 20 项重建；`XMe` 12 项全局重置；`hOo` 6 道预计算复用校验；`preservedMessages` relink；复刻蓝图 P0–P3 + 14 个坑；**§73 用 28 个真实 boundary 实证阈值公式，并订正「`Ino` 与 `mfr` 是两套实现」「`trigger` 有三值」「这些机制是 319 新增」三处结论**） | `docs/20261108-CC319上下文压缩机制调研.md` |
| **319 压缩期 UX 指示（用户看到什么）**（**核心纠正：CC 没有百分比进度条**，只有 150ms 跳动的思考帧 `∴ ∷ ∵ ∷` + dim 文案；三阶段文案表 `Running PreCompact hooks…`/`Compacting conversation`；颜色被显式改蓝；`hintText` 是唯一的"进度语义"通道；压缩期**输入不被禁用**而是排队（`wait` 而非 `cancel`，`canDeliverOverTurn` 显式放行）；30s 心跳是外部宿主保活、不是终端 UI；`compact_end` 位置在 `.catch()` 之后等价 finally；完成提示带旧消息文件路径；GA 落地 P0–P3 与三条「明确不要做」） | `docs/20261114-CC319压缩UX指示调研.md` |
| **GA 压缩期输入与 UX 核实（第一轮）**（**GA 是 reject 不是 wait**：`submit()` 因 `_is_consuming()` 返回 `error/busy` 并**丢弃**消息；压缩在 `is_running=True` **之前**执行，所以真正命中的守卫是 `_is_consuming` 不是 `is_running`——修要改对地方；压缩全程**零事件**故界面静止；**输入框在请求发出前就被清空**（`decision('', 0, …)`），前端无 `busy` 兜底 ⇒ 字全丢，比 CC 更糟；修复 P0 两条 + 4 项待办；复现探针 4 检查全过）**⚠️ 已部分订正，见下一条** | `docs/20261114-GA压缩期输入与UX核实.md` |
| **GA 压缩期输入六路径核实（第二轮，结论以此为准）**（第一轮只查 2 条、漏了 4 条；**6 条路径全表**含每条的执行位置/相对 `emit(running)`/Ink 侧 status/输入后果；**最关键：`bridge._auto_compact_if_needed` 在 `submit()` 内同步执行，而 `run_jsonl_loop` 是单线程 `for line in stdin`** ⇒ 压缩期间整个命令循环被占，**`stop`(Esc) 也读不进来**；**已实证**——伪造压缩 3s，t=1.0s 发的 stop 到 t=3.00s 才处理（延迟 2.00s）；回合终三条路径发生在 `done` 已发、前端已判定 `idle` 之后 ⇒ 用户以为可输入、实际被拒且不还原；订正第一轮三处（含撤回「`Bhi` 是终端标题」）；修复按根因：把压缩挪出同步路径 + 发状态事件 + 前端 `busy` 兜底） | `docs/20261114-GA压缩期输入六路径核实.md` |
| **CC 压缩可取消 + 中断不丢原文**（用户记忆核验：**Esc 确实能取消压缩，记忆是对的**；CC 三层保护——①`abortController.signal` 全程贯穿、摘要器入口即查 `ke.aborted`；②**`ne.ok && aborted → ok:!1`**，摘要算完了只要按过 Esc 就作废、不替换历史；③`cyn` 用 `Promise.race` 判「压缩先完成 vs 用户先按 Esc」，后者则把请求交给 `session.precompute`（`status:"pending"`，`armTrigger:"stop"`）**继续跑完**，settled 后转 `"ready"`、失败则 `remove`；下次压缩经 `hOo` **6 条拒绝理由**（`boundary_uuid_missing`/`covered_messages_changed`/`kept_message_missing`/`unseen_reply`/`hook_rewrite`/`would_not_fit`）判定 `reuse` 还是 `refuse`；**GA 对照**：无 signal、无 abort 语义，但**失败路径安全**（`compact_agent_context` 入口 `deepcopy` + `except` 显式回滚三处，`context.py:445/458/574`），已核实原文不丢；`_take_precomputed` 仅 **3 条**校验（整段前缀 sha256，比 CC 更严格但没有 `unseen_reply`/`would_not_fit`）；**真正差距是没「中断」这条语义 + bridge 单线程让 Esc 发不出去**） | `docs/20261114-CC压缩可取消与中断不丢原文.md` |
| **319 goal 模式（`/goal` + ProposeGoal）**（**本质＝session 级 `Stop` hook，`type:"prompt"`**；`HNt` 注册 / `$Nt` 清除 / `G7e` 收集 / `qFn` 三道门禁；评估器走 `querySource:"hook_prompt"` 无工具 side query，schema `{ok,reason,impossible}`，默认小快模型 `Kk()`；`Oqr` 按组从尾裁到窗口 0.5/0.25 并注入截断横幅；`Bf()` 把终止原因分成 none/retry/pause/stop，退避 `[60s,300s,900s]×3`、`BLOCK_CAP=8`、check-in `30/60/120min×3`；ProposeGoal 500 字符上限、`modelProposedGoals` 三档、`tengu_propose_goal` 默认关；**§26 三个 Stop hook 相位（`loop_tick` 评估但丢弃阻断、`blockable_turn_end` 唯一生效、`turn_end_reactions` 只跑函数 hook）**；§10 跨版本 283 起架构稳定，差异只在 `hooks_held`/`fEs`；**§24 复刻清单 + §24.5 四处"不要照抄"**；**§30 `/compact` 不误评估 goal——不是靠 compact 门禁，而是压缩 fork 经 `_S()` 拿到新 `agentId`，按 `z()`=session id 注册的 goal hook 键不匹配；推论：配置文件的 Stop hook 会在这个隐藏 turn 里多跑一次（A 级未实证）；§30.9 十条门禁总表**） | `docs/20261109-CC-goal模式实现调研.md` |
| **AskUserQuestion 结构化提问机制**（把提问做成**权限请求**的一种：`requiresUserInteraction()` + `checkPermissions()` 恒 ask，直接复用「弹卡片→阻塞→`updatedInput` 回传」的现成管道；**答案准入 `admitCardAnswer`** 四条硬规则 + 引擎侧二次校验；五种结局话术（规整 / 不规整 / `response` / `followUp` / `afkTimeoutMs`）；`unanswered` 三态 `skipped|replied_in_chat|dismissed` 与能力协商 `ask_user_question_unanswered_v1`（**319 唯一实质新增**，283/303 都没有）；AFK 默认 `never`、只读安全层设置、终端失焦不算；「Chat about this」走 `deny + feedback` 不伪造答案；`(notes only)` 哨兵；远程 `request_user_dialog` 的 `permission_ask_user_question`；引擎内部 `confirmWithUser` 复用同一工具；**§15 复刻清单 P0/P1/P2 + 四处「不要照抄」**） | `docs/20261113-CC-AskUserQuestion交互机制调研.md` |
| **CC319 Projects / coordinator 调研**（Project = 云端工作区，含 **一个 coordinator 会话 + 多条干活的 thread**；**283 就有雏形，不是 319 新增**；三能力落点：主动汇报＝**回合末旁路 LLM 状态卡**（`m2458` 五态 `needs_reply/needs_approval/done/failed/working`，`headline≤60`/`happened≤100`/`reply≤8词`，`Fe=15000`/`Xe=5000` 节流，**迟到即丢弃**）、回答提问＝`mcp__hearthbot__reply` + **319 独有**的 `message_coordinator`/`message_thread` 两个投递目标 + `projects_thread_ask` 回执状态机 + `projects_reply_gate_policy` 四态闸门（`answered/still_silent/skip/bounce`，工具不在池/服务端挂 → 回退 `no_bounce`）、通报进展＝timeline + `projects_thread_state` + **other-thread 行**（303 起；裸 `"yes"` 清不了 SOFT BLOCK，防权限洗白）；**关键负面结论：客户端里没有一句面向 coordinator 自己的系统提示词，只有线程视角的下游规则 → coordinator 指令在服务端**；`/send-to-project`（`m2213`）319 独有；**§4 有完整三版本 token 矩阵**；注意 `CLAUDE_CODE_COORDINATOR_MODE`(本地 agent-team) 与 Projects coordinator 无代码交集） | `docs/20261115-CC319-Projects-coordinator调研.md` |
| **319 记忆系统（读＝attachment / 写＝后台 fork 子代理，都不是 hook）**（读侧 `dc(label,fn)` 附件计算器与 `tengu_attachment_compute_duration`；`nested_memory`/`memory_update`/`withheld_memory`/`late_memory_context` 四个 producer；写入侧 mcp 与 laptop **两条后端**、`CLAUDE_CODE_POST_TURN_MEMORY` 总闸、直写闸 + first look + prose 闸 + 权限闸、CJK 一字算两词；记忆根按 host 分桶、`bie()` 才是写入域、`agent-memory` 三作用域档；`nD=200`；**§6.6 压缩符号→工具名对照表（`ze`=`Read` 不是 WebFetch）；§6/§7.1 125 条可执行断言与反向确认**）**⚠️ 该文档漏了两类内容，须与 `docs/20261116-记忆调研与Projects调研交叉验证.md` 并读**：①写入点受 `Jd` 入口门禁约束（`isTerminalShutdown` / `settingsHooksOff\|\|agent_summary` / `--bare`）；②**完全没有 auto-dream 这一层**（`m0833`，读/写之外的第三类后台任务） | `docs/20261112-CC319记忆系统源码调研.md` + `docs/20261116-记忆调研与Projects调研交叉验证.md` |
| **记忆调研 × Projects/压缩调研 交叉验证（319 源码裁决）**（拉取的 10 提交里**没有**记忆调研，交集是 `m0848` 回合末：`zd`(状态卡) 与 `executeExtractMemories`(记忆写入) 是 **`Jd` 里前后相邻两步**，而 `Jd` 就是 **Stop hook 执行器** ⇒ 「记忆不是 hook」只在**派发方式**成立，**共享入口门禁**；三条漏项：`isTerminalShutdown`(`m1860:6`→`m0848:3830`)、`settingsHooksOff`/`agent_summary`(`:3834`)、`--bare`/`CLAUDE_CODE_SIMPLE`(`m0046:134`→`:3849` `!Nr()`)；283/303/319 三版同构；**`settingsHooksOff` 全仓 47 处读取 / 0 处赋值 ⇒ 恒 falsy，`Jd:3834` 的 `A\|\|B` 实际只有 `agent_summary` 生效**；**CC 自述规则「It is not a hook, so disableAllHooks does not affect it」(`m0094:7432`) ⇒ 非 hook 不受 disableAllHooks 管辖**；**§5 定性 attachment producer = 固定流程非 agent 动作**（主循环 `for await tDe`(`m0848:10518`)、`dc` 内立即 `await n()`、开关全是配置判定）；**§6 auto-dream 全文**（`m0833` 410 行：`tengu_onyx_plover` 覆盖 `minHours=24`/`minSessions=5`、10 分钟扫描节流、四道前置否决、8 条 skip reason、四阶段 prompt、`fork:"dream"` 与 extract 共用 `NGr`、`PXs`→registry runner、走官方 `/v1/dreams` beta 端点 `dreaming-2026-04-21`）；**133 条断言 + 15 用例反向确认**；**§7 运行时实证（L1）：本次会话 transcript 实测 300+ 条 `type=attachment`（`deferred_tools_record` 占九成）——`MEMORY.md` 走 `instructions` 附件的 `type=AutoMem` 档而非 `nested_memory`（`m0591:10928` 五档作用域），四个记忆 producer 实测触发 **0 次**（因从未读过记忆目录，14 次读类调用含 memory 路径 0 次）；⚠️ 判「producer 有没有触发」只能看 `attachment.type`，裸 `grep -c` 会把回显的源码片段误计（实测 70 假阳性）**；**§8 读机制（三通道：MEMORY.md 索引走 `instructions`/`AutoMem` 档；正文走 `nested_memory`，**读到才注入且无条数上限**——上限是单文件字符数 `z8e(model)`（`m0591:69725`）；`late_memory_context` 是 NO_WAIT 延迟档；另有 `relevant_memories` 检索旁路，`.slice(0,5)` 属于**它**（`m0591:153870`），**不是** `nested_memory` 的上限）**；**`nD=200` = `KEPT_MOST`（扣留保留），`pTe=20` = `SHOWN_MOST`（展示），两者不同；另有 `aXo=200` 是扫描文件数，同值不同常量**）**；**§9 写机制（轮末 `Jd` 触发 → **9 道闸**（前版只列 5 道，漏了权限/超额/两类竞态）：`!Nr()` 环境 / `!agentId` 主体 / `Nt()` 直写 / prose / `every_n_turns`（**schema 默认 5**，`m0191:2370`，不是 `m0832:959` 的 `??1` 兜底）/ 权限 `LGr` / 新轮次竞态 / 工具 hold / `when_overage=skip`；`first_look` 成本闸**默认 off**；非 sync 时 fire-and-forget）**；**⚠️ 中文可用性（第四轮挑剔自审的主要产出）：prose 闸默认 `prose_gate="legacy"` 走 `Rt`，其分词 `Pe = split(/\s+/)` **无 CJK 加权**（加权只在 `chat` 模式的 `bt`/`Tt`，`Et=2`）；中文整句 `Pe` 恒为 1~2 < 阈值 3 ⇒ **中文用户默认配置下自动写记忆几乎不触发**——对 GA 复刻有直接决策价值，照抄 `split(/\s+/)` 会让中文用户觉得记忆功能不存在**；另 `V$t()` 在总闸关闭时仍有 `tengu_passport_quail`/`tengu_slate_thimble` 旗标旁路；`U3e` 的 MEMORY.md 排除有「有/无 promptIndex」两套分支**；**§8.6.1 两条通道**去重是单向的**：`relevant_memories`(Uzr) 借 `readFileState` 间接避开 `nested_memory`，但反向不去重（`azr`/`_0n` 都不看该类型）⇒ 存在重复窗口，代码层无保证**；**§8.6.2 `.slice(0,5)` 的 5 是硬编码字面量**（Uzr 体内 0 处配置读取），不可配，与 `nD`/`pTe`/`aXo` 这些具名常量形成对比**；**§8.6.3 记忆召回 `Ivi` 的两个易误读点**：`memorySelector` 由 `Gge()` 恒构造、**不是开关**（真正门禁是 `fh() && lSe()` 或账号级 `isAccountRecallOn()`）；且 `!/\s/.test(N.trim())` 要求**当前输入含空白**，中文整句不带空格 ⇒ **连召回都不触发**（与 prose 闸同一类语言偏向问题）**；**§8.6.4 相关性判定**是**每轮一次 LLM side query**（`QGr`，prompt 明写 "up to 5"、输出被 JSON schema 锁成 `selected_memories`、`max_tokens=512`、有按单价挑备选的模型回退链）——**不是向量检索，成本真实****；**§8.6.5 `owed` 每轮清空但 `Y3e` 返回**剩余全部**⇒ **扣留通知会持续重复，不是只提示一次**；只有被正常注入（`V3e`）或超 `nD` 才消失**；**§8.6.6 并发保护分两层**：extract 只有**进程内**尾随合并（`b` 标志 + `coalesced` 遥测），**跨进程无锁**；auto-dream 有 **PID 判活 + CAS 版本号**的文件锁（`m0809:106`），是三个后台任务里**唯一**做跨进程互斥的；另记坐标口径分裂：goal 文档用**字节偏移**、其余用 `deminified` 行号，不可互抄——本轮因此误写 5 处已订正）；**§14 第七轮：前六轮漏掉的三条通道**——① **`memory` MCP 服务器**（`mH = "memory"`，`m0143:19-20` 拼出 `mcp__memory__memory_`）：模型可主动调 `memory_list/read/search/write/str_replace/append`（`m0290:6-8`、`m0191:2338-2340`），**工具身份看 MCP 服务器身份不看名字**（`m0316:8/13/15` 三档 `verified/unplaced/other_server`，`accountMemoryServer` 防第三方冒名）；② **`account_memory_recall` 账号级记忆**（`m1636:265-268`，命名空间 `anthropic/memory.`、事件 `account_memory_saved`）：**UI 层 `return null` 完全不显示**（`m2057:7171`），Remote Control 下整体扣留（`m1636:258`）；且 `relevant_memories` 会被合并进它的 `localRecall` 字段（`m0591:214958-214965`）；③ **记忆类 producer 实为 6 个不是 4 个**：`nested_memory` 有**两处**注册（`m0591:151746` 短路 + `:151783` 主路径），另有 `spawned_loop_memory_withdrawal`（`:151722`/`:151783`）；`dc()` 全表 **60 个** producer；**`memory_update` 两种 source**（`sync_unsaved` / `pendingMemoryUpdates`）带 `inContextPaths`；**`withheld_memory` 的 owed 按工作区令牌独立**（`m0591:153160` `by: BT.of(e).token`）；**记忆工具带 version 乐观并发**（`m0452`：`[version: 12位hex]` + `if_version` + read/written/last/carried 四张缓存表），过期通知原文含「用户看不见、即使被要求也不许复述」三层防御；**项目记忆 `project_memory_*` 是只读、每会话一次快照**（`m0247:227-229`），与本地自动记忆策略相反；实证：本次会话 6 条通道只有 `instructions` 在工作，四条本地 producer 全 0；**38 条断言 + 6 用例反向确认**（`docs/probes/20261116-记忆第七轮-*.py`）；本轮错误模式：手工数行 6 处差 1、把 `must_not` 误用成「整模块不含」而非「指定行不含」；**§15 第八轮：提示词层 / 引用追踪 / 多库 / 云端层**——① **记忆提示词正文**（`m0293:4569` `li()`，`si="auto memory"`；常量在 `:3857`–`:3875`）：四类型 `user/feedback/project/reference` 各含 description/when_to_save/how_to_use/examples，**`feedback` 明确要求「失败与成功都记录」**（只记纠错会让人过度保守）、**五类禁止对用户明确要求也成立**（代码模式/git 历史/调试方案/CLAUDE.md 已记/临时细节）、**`project` 要求相对日期转绝对**；`readOnly` 整段改写（`:4579`）；② **引用追踪三档 `injection`**（`m0591:69063` 类 `Pen`）：`body`（正文注入）/`surfaced`（检索露出）/`listed`（仅索引列出）/`none`，优先级 `body>surfaced>listed`（`:69119`），访问态四值含 `read_written`（`:69090`），上限 `fTe=2000`；配套 `<cc-memory filenames="...">` 标签：**6 种容错写法**（`:3304`）、所有前缀匹配未闭合（`:3306`）、属性上限 1024、展示截 300 字符、单消息最多 32 引用，引用了 `..` 路径直接拒绝（`:69104`）；③ **team memory 多库**：`CLAUDE_MEMORY_STORES` JSON（`m0293:352`，`path/mode/scope/mount/promptIndex/skillsDirs`，mount 不许重、`scope:user` 最多一个）；同步靠 `.memory-sync` 清单 + **分区号冲突检测**，遇到别家清单 **fail closed 直接抛错**（`m0452:4527`），创建用 `ifAbsent`、自身写入 atomic；④ **Projects 云端项目记忆是独立实现**（`m1968:1148` `/v1/code/memory/channel/{projectId}/memories`）：创建 `not_exists` + 409 同路径保留已有，替换 `content_sha256` 乐观并发，退避 `[1s,2s,4s,8s,12s]`、分页 100×10、超时 15s、id `cmsg_*`；与本地 `MEMORY.md` **两套实现**；⑤ **agent-memory 三作用域 + 越界防护**（`m0293:4849` `pho`）：project/local/user 三路径，目录名规范化（非字母数字下划线连字符转 `-`），**符号链接越界则整份 MEMORY.md 不读**（`:4870`），三作用域提示语不同（general / 随版本控制共享 / 不入版本控制），beta header `agent-memory-2026-07-22`；⑥ **cowork 记忆版本重放**（`m0779:6121-6132`）：`anchor`+`version`，锚点按版本把内容 splice 回消息流；**72 条断言 + 10 用例反向确认**（`docs/probes/20261116-记忆第八轮-*.py`）；本轮错误模式：**连续第三轮手工数行**（7 处差 1）+ 多份副本未指定 `nth`（6 处）——凡正文手写行号必须让脚本复算，期望值应由脚本打印后再填 | `docs/20261116-记忆调研与Projects调研交叉验证.md` + `docs/probes/20261116-记忆与Projects交叉验证.py` |

**命名方法一句话**：Bun `--compile` 是 minify 不是混淆，只压标识符，
**字符串 / 属性名 / 解构键 / 对象键一律保留**——所有真名只能从这四类保留物里读出来。
证据分 **S/A/B/C** 四级，写进 `deminify-names.json`，逐条可回查。

---

## 7. 当前状态（283 全量完成；303 基础产物完成；319 线 A/B 完成）

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
| 319 模块提取 | ✅ 2,882 个有效模块（2,883 个 marker；1 个 span 跳过、1 个 span 用 `--carve-head` 切出模块头）；复制 exe 后 SHA256 复核一致 |
| 319 格式化 | ✅ 2,882/2,882 可解析（5 个 beautifier 回退，已审计仅末字节 NUL→空格） |
| 319 去混淆 | ✅ 2,882/2,882，**100,496** 处改名；4 个 >1 MiB 模块复用 full |
| 319 语义复验 | ✅ 2,882/2,882 `ok:true`，0 失败；悬垂 else 补括号 231 处 |
| 319 专项分析 | ⬜ 未开始：线 C、rewind / Agent Team / hooks 专项可读化、跨版本对照；✅ 已完成：UX/UI 机制层对标（`docs/20261107-CC-UXUI设计深挖与319源码对标.md`） |
| 解析失败退回原文 | 283: 0；303: 4 个；319: 5 个 beautifier 回退（均不是模块损坏） |

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

## 8.5 TDD 红绿灯（修 bug / 加功能 / 改行为一律强制）

**铁律：没有先失败的测试，就不写生产代码。** 用 superpowers 的 `test-driven-development` skill：

```
RED     → 写一个最小失败测试，跑，确认它因为「功能缺失」而失败（不是笔误、不是报错）
GREEN   → 只写让该测试通过的最小实现，跑，确认全绿
REFACTOR→ 保持全绿的前提下清理
```

**先写了代码？删掉，从测试重来。** 不许“留作参考”、不许“边写测试边调整”——那是测试后补。

### 必须做反向确认（这一步抓出过两次假验收）

测试变绿**不能**证明它有效。修 bug 时必须把实现 stash 掉再跑一次：

```powershell
git stash push -- <被修改的源文件>
python -m pytest tests/test_xxx.py -q      # 必须重新变红
git stash pop
```

没经过这一步，不许说"修好了"。

### 本仓库真实踩过的假验收

| 假验收 | 为什么会绿 |
| --- | --- |
| 探针自己重新推导产品路径公式 | 探针与产品共用同一个错误假设 |
| 静态守卫用 tokenize 逐 token 拼行 | 每 token 单独成行，目标表达式永远拼不出来 → 仍有 7 处缺陷时全绿 |
| 只读 `output.txt` 判后续轮次 | 第 N 轮写 `outputN.txt`，正常投递被误判成丢消息 |

### 判定「生效 / 送达」的硬信号

只断言"没有错误行"不够——消息根本没入队时它也是绿的。让载荷带一个**只存在于该次操作**的
随机 token，要求下游复述出来。

### 静态守卫的正确写法

不要用纯文本匹配（注释里会合法提到旧写法 → 因错误原因失败 → 被下一个人删掉），
用 AST 按函数作用域限定。反面参照：`D:/git_repos/GenericAgent/tests/test_child_bus_handdown_paths.py`

---

## 8.6 源码调研必须两遍：理解一遍 + 证明一遍（强制）

**铁律：写「源码调研」类文档，不许一遍就交付。** 这不是建议——
2026-11-13 复核 `docs/20261112-CC319记忆系统源码调研.md` 时，
第一遍复核自己**新增了 1 处错**（把 `ze` 写成 WebFetch，实际是 `var ze = "Read"`），
第二遍才抓出来，并又抓出 2 处漏项。完整方法论见
`docs/20261113-源码调研复核方法.md`。

### 为什么第一遍必然漏

第一遍在做**理解**（读通、自洽、写机制），第二遍在做**证明**（每条结论钉到可复算的点）。
**自洽 ≠ 正确**：主线对的时候，细节错的地方不会「读起来别扭」，
只有强制取证据才会暴露。所以这两遍不是「检查一遍更保险」，是两种不同的认知活动。

### 四条硬规则（对应四类真实失误）

| # | 规则 | 不这么做会怎样（本仓库实测） |
| --- | --- | --- |
| 1 | **压缩符号必须查定义行，禁止全仓 grep 定名**。先解析 `import … from "chunk-X.js"` → 源 `m*.js`（`docs/probes/20261113-319-chunk映射核验.py`），再在该模块查 `= "..."`（`docs/probes/20261113-319-符号定义定位.py`） | Bun 每个模块独立压缩，`dt`/`as`/`yg`/`ze` 在别的模块是同名但完全不同的东西。全仓搜到的是「某个模块的它」，不是「目标模块的它」 |
| 2 | **「怎么注册 / 怎么触发 / 谁调用」必须 `grep -c` 数总数再逐个看完** | `dc("nested_memory")` 有 2 处（`:151783` 主路径 + `:151746` `inputMentionsOnly` 短路），只取第一处就漏了整条分支 |
| 3 | **并列列举的位置相近 ≠ 同一个函数**，往上找最近的 `function` 行 | `:76049`/`:76063` 在 `B9e()`，`:76090` 在 `_rn()`；当成「同一段逻辑三分支」会写错归属 |
| 4 | **否定结论（没有 X / 不用 Y）必须写成 `must_not` 断言，每次重跑** | 「我没搜到」≠「它不存在」。`m0832` 无 `WebFetch`/`WebSearch`、无 `embedding` 这类结论，靠一次性 grep 记在文档里，下次谁也不会重验 |

### 交付前必须跑的两步

```bash
python docs/probes/<你的>断言核验.py        # 全部关键事实 → (模块, 精确片段, 期望行号)
python docs/probes/<你的>核验反向确认.py    # 故意注入错误断言，证明引擎会变红
```

- 断言三要素：**模块名显式**（防撞名）、**精确片段抄源码原文**（不许写成「我以为的样子」）、
  **期望行号**（坐标漂移立刻暴露）。
- **反向确认必须同时包含一个「应该 PASS」的用例**——否则引擎只会返回 FAIL，
  全绿和全红都不携带信息。参照 `docs/probes/20261113-记忆调研核验反向确认.py`。
- 反向确认抓出过：断言把 `requireReadBeforeWrite` 写在 `:62`（实际 `:63`）、
  断言串与源码原文不符、把 4 处 `the pass is not skipped` 记成 1 处。

### 文档里必须写清的三件事

每条 `模块:行号` 都要能回查，且文档头部要交代清楚：
① 哪些是**订正**（原文错）；② 哪些是**补漏**（原文没有）；
③ **哪些是自己第一轮复核写错、第二轮抓出来的**——第 ③ 项不是自我批评，
是给下一个人的信息：**错误模式比正确结论更有复用价值**。

### 方法论文档自己也要自检

**方法论文档最容易腐烂**：它通篇讲「必须查证据」，但自己的举例（哪个符号是什么、
几处命中、某行是什么）却没人复核。所以：

- `docs/probes/20261113-复核方法文档自检.py`（23 条）断言本文档 §1/§2/§5.1/§9 的全部举例；
- `docs/probes/20261113-复核方法文档自检反向确认.py` 证明上一条的自检引擎会变红。

改源码后跑这两个，就知道方法文档哪句话失效了。

### 假信号：没报错 ≠ 有效信号

判定「有没有问题」前，先确认**这个信号本身是不是有效信号**。本仓库两实例：

- `python - <<'PY'` 被截断 → 读到空 stdin 进 REPL，表面无报错，实际没验证任何东西；
- `grep -c $'\r' file` 在 PowerShell here-string 里 `$'\r'` 不展开 → 退化成空模式，
  返回「等于总行数」，看着像整文件 CRLF，实际 `CR=0`。

**行尾/编码一律用字节级检查裁决**（`docs/probes/20261113-文本字节校验.py`），不要用 grep 猜。
完整分析见 `docs/20261113-源码调研复核方法.md` §10。

### 反模式速查

| 反模式 | 正确做法 |
| --- | --- |
| 全仓 `grep 'X = "'` 定符号身份 | 先 chunk→模块，再查定义行 |
| grep 第一处命中就写结论 | 先 `grep -c` 数总数 |
| 「这个符号大概是 XX」 | 身份是事实，必须拿到 `= "..."` 行；拿不到就写符号本身（对应 §0 铁律 4） |
| 否定结论靠「我没搜到」 | `must_not` 断言，每次重跑 |
| 断言全绿就交付 | 反向确认：必须能变红 |
| 只做一遍 | 理解一遍 + 证明一遍 |

---

## 9. 禁忌清单

- ❌ **禁止使用 `shell="bash"`，没有例外。** Git Bash 只能作为 PowerShell 的子进程运行：`shell="powershell"` + `cmd="& '<Git Bash 绝对路径>' -lc '<bash-payload>'"`。不要因为命令里出现 `export`、heredoc 或其他 Bash 语法就切换外层 `shell`；不要只“声称”在 Git Bash 而不验证 `$0` / `uname`。
- ❌ 中文内容不要经 `python -c` 参数或 shell 变量往返（会损坏编码）；用单引号 heredoc 直写文件（`cat > file << 'EOF'`）。
- ❌ 不要用 heredoc 跑逻辑：`python - <<'X'` / `node - <<'X'` 一旦命令被截断，正文和闭合行一起消失，程序会读到空 stdin（Python 直接进 REPL）而表面不报错；把逻辑写成 `work/_xxx.py` 再执行。
- ❌ heredoc 闭合行后不要接 `&&` / `;` / `|`；正文里不要出现 `EOF`、`END`、`PY` 这类通用 delimiter 词。
- ❌ 反斜杠会被吃：内容**直写文件**（`cat > f << 'EOF'`）安全；但内容若**穿过 Python 字符串字面量 / 嵌套 shell 层**（如 `python - << 'EOF'` 里写 `"C:\Git\bin"`），`\b`/`\a`/`\G` 会被当转义吃掉。此时用 raw string 或 `chr(92)` 构造，源码里不出现字面反斜杠。
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
- ❌ 不要先写生产代码后补测试。修 bug / 加功能一律 TDD 红绿灯，且必须做「stash 掉实现后测试重新变红」的反向确认（见 §8.5）。
- ❌ **源码调研文档不许一遍交付**：必须「理解一遍 + 证明一遍」，且关键事实要脚本化成断言、并做反向确认证明断言会变红（见 §8.6）。反面实例：2026-11-13 首轮复核把 `ze` 写成 WebFetch（实际 `var ze = "Read"`）。
- ❌ **禁止全仓 grep 压缩符号来定身份**（`dt` / `as` / `yg` / `ze` 这类）。Bun 每个模块独立压缩，跨模块同名符号指向完全不同的东西；必须先解析 `chunk → m*.js` 再查定义行（见 §8.6 规则 1）。
- ❌ 不用「我没搜到」当否定结论的证据。否定事实必须写成 `must_not` 断言并在每次复核时重跑（见 §8.6 规则 4）。
- ❌ **不用 `grep -c $'\r'` 判行尾**：在 PowerShell here-string 里 `$'\r'` 不展开，退化成空模式会返回「等于总行数」的假信号。行尾/编码一律用 `docs/probes/20261113-文本字节校验.py` 字节级裁决（见 §8.6「假信号」）。

---

## 10. 上下文预算铁律（读源码必须局部读）

背景：本机曾用第三方中转（上游上下文硬顶 256K / 262144 tokens）时，一次请求实际发出 281247 tokens，
被上游 400 拒收（`"type":"context_length","limit":262144`）。**已发给模型的工具返回结果会完整留在历史里，
之后每一轮都要重发一遍**，所以一次整文件 `Read` 的代价不是一次，而是之后每一轮都在付。

本仓库的 `reconstructed303/deminified/` 普遍是几百 KB 级文件，`m0357_*` 一类超大模块可达 4 MB，
**任何一次整文件读取都可能单独把上下文撑爆**。

### 10.1 铁律

1. **禁止对 `reconstructed/`、`reconstructed303/`、`claudecode283/modules/`、`claudecode303/modules/` 下的文件整文件 `Read`**（>1 MB 的模块绝对禁止）。
2. 一律走 **`grep 定位 → sed 取窗口`** 两步：

   ```bash
   # ① 定位：找到关键字的文件与行号
   grep -rn "关键字" reconstructed303/deminified/ --include=*.js | head -50

   # ② 取窗口：只读命中的那一段（前后各 30-40 行）
   sed -n '8000,8060p' reconstructed303/deminified/m0357_0xc63ba04.js

   # 看结构：先拿声明行号，再按行号取窗口
   grep -n "^\s*\(async \)\?function \|^\s*class " file.js
   ```

3. **先看规模再决定读法**：`wc -l file.js` / `ls -l file.js`，超过约 1000 行或 200 KB 就只准走 10.1 第 2 条。
4. **所有检索类命令都必须截断**：`grep ... | head -50`、`| wc -l`，不要裸跑 `grep -rn` 或不带 `head` 的 `cat`。
5. **大范围分析派子 agent 去做**（`Agent` 工具，`Explore` / `general-purpose`），主会话只接收结论，不接收文件内容。
6. 换任务先 `/clear`；同一任务跑长了手动 `/compact`，不要等自动压缩兜底。
7. `AGENTS.md` 自身可以整读（约 300 行），但 `docs/` 下的长文档同样遵循局部读。

### 10.2 配套的本地配置（settings.json，不在仓库内）

供参考，落到本机 `~/.claude/settings.json`；第三方中转的上游硬顶未知时按 256K 算：

```json
{
  "env": {
    "CLAUDE_CODE_AUTO_COMPACT_WINDOW": "150000",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "16000",
    "ENABLE_TOOL_SEARCH": "false",
    "BASH_MAX_OUTPUT_LENGTH": "15000"
  }
}
```

- `AUTO_COMPACT_WINDOW` 必须显著小于上游硬顶：系统提示、工具 schema、以及**上游分词器与 Anthropic 分词器的估算偏差**
  都不进这个窗口的预算，贴太近必然在压缩触发前被拒。
- 参数只能降低触发概率；**单轮峰值**（一次贴大文件 / 一次超大工具输出）靠参数救不回来，只能靠 §10.1。
