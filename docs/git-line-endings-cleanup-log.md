# Git 行尾统一处理记录（CRLF → LF）

> 本文是**过程记录**：一次把本仓库行尾从"混杂"统一为 LF 的完整操作、验证与实测。
> 策略结论见 `git-line-endings-policy.md`；本文记录"**怎么做的、为什么这么做、怎么验证**"。

- 处理时间：2026-10-12
- 触发原因：`AGENTS.md` 被提交成 CRLF，改动一行却产生 184/184 的**全文件 diff**
- 最终结论：**本仓库文本统一 LF**，只改**仓库内 `.gitattributes`**，不动系统/全局配置

---

## 1. 问题：一行改动 → 全文件 diff

编辑 `AGENTS.md` 的几行路径后，`git diff` 却显示**整个文件都变了**（184 增 / 184 删）。

原因：`AGENTS.md` 在 git 里的 blob 是 **CRLF**（191 行、11224 字节），而编辑工具/写文件流程产出的是 **LF**。
一个文件整体 LF↔CRLF 翻转时，git 认为**每一行都改了** —— 这就是"幽灵 diff / 全文件 diff"。

危害：review 看不清真实改动、`git blame` 全废、合并处处冲突、agent 反复追行尾**白烧 token**。

## 2. 排查：本机行尾相关的四层现状

| 层级 | 文件 / 配置 | 实测值 | 作用范围 |
| --- | --- | --- | --- |
| 系统 | `D:\Git\etc\gitconfig` | `core.autocrlf=true` | **全机器所有仓库** |
| 系统 | `D:\Git\etc\gitattributes` | 仅 `diff=astextplain`（office 文档） | 全机器，但**不涉及行尾** |
| 全局 | `core.attributesFile` | **未设置** | — |
| 全局 | `~/.config/git/attributes` | **不存在** | — |
| 仓库 | `.gitattributes`（旧） | `* -text`（字节保真、不转换） | **仅本仓库**（+ clone） |
| 仓库 | `.git/config` | 无 `core.autocrlf` 覆盖 | — |

> 关键事实：所谓"全局 attributes 双保险"在本机**并未落实**；实际只有仓库内那一层在起作用。
> 而 `* -text` 只是"**不转换**"，并不"**统一**"——它放任 LF/CRLF 混杂漂移，`AGENTS.md` 正是受害者。

## 3. 决策：仓库内 `.gitattributes` 统一 LF

放弃旧的"字节保真"路线（`* -text` + 全局 attributes），改为：

- 用**仓库内 `.gitattributes`** 声明 `* text=auto eol=lf`；
- 入库 + 检出**都用 LF**，跨平台字节一致；
- **只影响本仓库**（含 clone / CI），**不动**系统级 `core.autocrlf=true`。

原因：对文本为主的源码仓库，LF 统一比"字节保真"更实用——既跨平台一致，又杜绝行尾 churn。
（若将来真有文件必须字节级冻结，再对该路径单独写 `-text` / `binary`。）

## 4. 改动清单

| # | 文件 | 改动 |
| --- | --- | --- |
| 1 | `.gitattributes` | `* -text` → `* text=auto eol=lf`；`.bat`/`.cmd` → `eol=crlf`；二进制 → `binary` |
| 2 | `AGENTS.md` | 行尾 CRLF→LF；路径修正（`E:\Git`→`D:\Git`、`/g/nodejs/node`→`/d/nodejs/node` v22.17.0）；§1 新增"写文件一律 LF"；§6 文档索引描述同步 |
| 3 | `docs/git-line-endings-policy.md` | 末行杂散 CRLF→LF；随后**整篇重写**为"本仓库统一 LF" |
| 4 | `docs/bun-standalone-re.md` | `E:\Git\bin\bash.exe` → `D:\Git\bin\bash.exe`（5 处）；加"样本路径说明" |
| 5 | `docs/windows-git-bash-execution-note.md` | `E:\Git\...` → `D:\Git\...`（9 处，含 3 处转义写法） |
| 6 | `docs/why-source-is-readable.md` | 加"样本路径说明（历史记录）" |
| 7 | `README.md` / `claudecode283/MANIFEST.md` / `claudecode283/extracted/dynamic-workflow-internals.md` | 加"样本路径说明（历史记录）" |
| 8 | `.editorconfig`（新增） | `[*] end_of_line = lf`；`.bat/.cmd` → `crlf` |

新 `.gitattributes` 核心：

```gitattributes
* text=auto eol=lf

*.bat text eol=crlf
*.cmd text eol=crlf

*.exe  binary
*.dll  binary
*.i64  binary
```

> "样本路径说明"是**保守标注**：`C:\Users\Administrator\...` 是**原始分析机**的路径，**保留原样**仅作历史记录，
> 不改成本机的 `C:\Users\drago\...`（那是 v2.1.296，与本次分析的 v2.1.283 不是同一文件）。

## 5. 验证

```bash
# 1) 规则是否生效
git check-attr text eol -- AGENTS.md README.md
#   -> text: auto / eol: lf
git check-attr text eol -- foo.bat foo.exe
#   -> foo.bat: text set, eol crlf ;  foo.exe: text unset

# 2) 按新规则重新入库
git add --renormalize .

# 3) 全量扫描工作区 + 暂存区是否还有 CR
```

实测结果：

- 全量扫描 **10309 → 10310 个跟踪文件，含 CR 的文件 = 0 → ALL LF**；
- 工作区与暂存区一致，无残留临时文件。

## 6. 实测：新增的 AGENTS.md 指引能否指导 Codex

**方法**：派一个**全新 Codex 子 agent**（不继承上下文，只靠工作区里的 `AGENTS.md`），
给它一个**最容易踩 CRLF 坑**的任务——"用 python 生成一个三行文本文件"，**全程不提 LF/CRLF**。

**结果**：它主动写出

```python
open("probe_lf_test.txt", "w", newline="\n").write("alpha\nbeta\ngamma\n")
```

并自己解释："`newline="\n"` 阻止 Windows 把 `\n` 翻译成 `\r\n`，保证纯 LF" —— 与 AGENTS.md 措辞几乎一致。
产物核验：`bytes=17 CR=0 -> b'alpha\nbeta\ngamma\n'`（纯 LF）。

**对照**：裸写 `open(p,"w")` 在本机产出 `b'l1\r\nl2\r\n'`（CRLF）。→ **坑是真的，agent 绕开了它，用的正是新指引那一招。**

> 局限：这是单实例实测（说明"能被读到并遵循"，非统计显著性）。且 `.gitattributes` 是最终兜底——
> 即便某 agent 没读到 AGENTS.md，git 入库时也会把 CRLF 规范化掉。

## 7. 踩过的坑 / 经验

1. **`* -text` ≠ 统一**：它只是"不转换"，会放任 LF/CRLF 混杂。要"统一"就得用 `eol=lf`。
2. **Python 文本模式在 Windows 会写 CRLF**：`open(p,"w")` 把 `\n` 翻成 `\r\n` → 必须 `open(p,"w",newline="\n")`（或写二进制）。
3. **bash 里 grep 匹配 `\r` 容易转义出错**：`grep $'\r'` / 多层引号嵌套时结果不可信，**用 Python 读字节判定更稳**（`b.count(bytes([13]))`）。
4. **文档与现实会脱节**：`E:\Git`、`C:\Users\Administrator`、全局 attributes"双保险"等，都是**旧机器的记录**，在新机器上不成立。
5. **`.gitattributes` 的作用域**：仓库级只影响本仓库（但**随 clone 传播**）；它**优先级高于**系统/全局，所以改它即可，无需动系统配置。

## 8. 如何回退

只改仓库内 `.gitattributes` 即可（不影响其它仓库）：

- 回到"不转"：`* -text`
- 回到"入库 LF、Windows 检出 CRLF"：`* text=auto`
- 改完执行 `git add --renormalize .`

## 9. 一句话总结

**把本仓库行尾统一为 LF：用仓库内 `.gitattributes` 的 `* text=auto eol=lf` 声明策略（`.bat`/`.cmd` 与二进制除外），
在 AGENTS.md 加"写文件一律 LF"的行为约束、并加 `.editorconfig` 兜底；经全量扫描与"新 Codex 子 agent"实测，确认不再有 CRLF churn、指引有效。**