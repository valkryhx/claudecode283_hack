# Git 行尾策略：本仓库统一 LF

本文记录本仓库（Claude Code v2.1.283 源码存档）的行尾（EOL）策略。
结论先行：**本仓库所有文本文件统一为 LF（入库 + 检出），由仓库内 `.gitattributes` 声明，只影响本仓库。**

---

## 0. 一句话结论

- 仓库内 `.gitattributes` 写 **`* text=auto eol=lf`**（外加 `.bat`/`.cmd` 与二进制例外）。
- 入库与检出**都用 LF**，跨平台字节一致，不再有"改一行、全文件 diff"。
- **只影响本仓库**（以及它的 clone / CI）；不改任何全局或系统配置。
- 系统级 `core.autocrlf=true` 保持原样，被仓库级 `eol=lf` 覆盖。

---

## 1. 症状（为什么当初要处理）

- `git add` 刷大量 `warning: ... LF will be replaced by CRLF ...`。
- `git status` / `git diff` 里出现"其实没改、只是行尾不同"的**幽灵 diff**。
- 最恶劣的一种：一个文件整体 LF↔CRLF 翻转时，git 认为**每一行都改了** —— 全文件 diff
  （review 看不清、`git blame` 全废、合并处处冲突、agent 反复追行尾烧 token）。
- 实例：`AGENTS.md` 曾被提交成 CRLF，改动一行却产生 184/184 的全文件 diff。

## 2. 根因

Git 配置分层，最底层的系统级开关是罪魁：

```
系统级   D:\Git\etc\gitconfig      core.autocrlf = true     ← Git for Windows 安装器默认
全局级   ~/.gitconfig               (未设置)
仓库级   <repo>/.git/config         (无覆盖)
```

诊断命令：

```bash
git config --show-origin --get-all core.autocrlf
# file:D:/Git/etc/gitconfig   true      ← 真正的元凶
```

`core.autocrlf=true` 的语义：提交时 CRLF→LF，检出时 LF→CRLF。
对"真实源码存档 / 需要跨平台一致"的仓库是破坏源：改字节、刷警告、制造幽灵 diff。

## 3. 最终方案：仓库内 `.gitattributes` 统一 LF

文件 `D:\git_codes\claudecode283_hack\.gitattributes`（**入库，随 clone 走**）：

```gitattributes
# 默认：所有文件按文本处理，入库与检出统一 LF
* text=auto eol=lf

# Windows 专用脚本：必须 CRLF（老式 cmd.exe 对 LF 的 goto / 多行 if 解析异常）
*.bat text eol=crlf
*.cmd text eol=crlf

# 二进制：禁止任何转换
*.exe  binary
*.dll  binary
*.i64  binary
# ...（其余二进制扩展名见文件本身）
```

要点：

- **`eol=lf`**：入库 LF + 检出 LF，全平台工作区字节一致；并显式压过系统 `core.autocrlf=true`。
- **`text=auto`**：让 git 自动判定文本/二进制；已知二进制再用 `binary`（=`-text -diff`）显式兜底。
- **只影响本仓库**：仓库级 attributes 优先级高于全局/系统，但作用域仅限本 repo（会随 clone 传播）。
- **例外**：`.bat`/`.cmd` 保持 CRLF；二进制永不转换。

## 4. 历史：为什么放弃了旧的 `* -text` / 全局 attributes 方案

早期用的是"字节保真"路线：

- 仓库内 `.gitattributes` = `* -text`（对所有文件关闭 EOL 处理）；
- 另配一份**全局** attributes `~/.config/git/attributes`（`* -text`）+ `core.attributesFile`（文档旧称"方案 C"）。

放弃的原因：

1. **`* -text` 放任 LF/CRLF 混杂漂移**：它只是"不转换"，并不"统一"。结果仓库里既有 LF 又有 CRLF，
   且 CRLF 文件一旦被编辑就容易整文件 diff —— 正是 `AGENTS.md` 出问题的方式。
2. **全局文件在本机并未落实**：本机 `core.attributesFile` 未设置、`~/.config/git/attributes` 不存在（见 §5），
   所谓"双保险"实际只有仓库内那一层。
3. 对**文本为主的源码仓库**，LF 统一比"字节保真"更实用：既跨平台一致，又杜绝行尾 churn。

> 若将来真有某个文件必须"字节级冻结"（例如二进制 fixture），再对该路径单独写 `-text` / `binary` 即可，
> 不必全仓退回 `* -text`。

## 5. 本机实际配置（现状）

| 层级 | 文件 / 配置 | 值 | 是否改动 |
| --- | --- | --- | --- |
| 系统 | `D:\Git\etc\gitconfig` | `core.autocrlf=true` | 保持原样 |
| 系统 | `D:\Git\etc\gitattributes` | 仅 `diff=astextplain`（office 文档） | 不涉及行尾 |
| 全局 | `core.attributesFile` | **未设置** | — |
| 全局 | `~/.config/git/attributes` | **不存在** | — |
| 仓库 | `.gitattributes` | `* text=auto eol=lf`（+ 例外） | 本次改 |
| 仓库 | `.git/config` | 无 `core.autocrlf` 覆盖 | 不需要 |

> 仓库级 `.gitattributes` 优先级高于全局/系统，因此**无需**再设 `core.autocrlf=false` 或全局 attributes。

## 6. 验证方法（可复现）

```bash
# 1) 规则是否生效
git check-attr text eol -- AGENTS.md README.md
# 期望： text: auto / eol: lf
git check-attr text eol -- foo.bat foo.exe
# 期望： foo.bat -> text: set, eol: crlf ;  foo.exe -> text: unset

# 2) 把工作区改动按新规则重新入库
git add --renormalize .
git status --short        # 只会列出真正需要改的文件

# 3) 全量扫描工作区 + 暂存区是否还有 CR
#    本机实测：10309 个跟踪文件，含 CR 的文件 = 0，结论 ALL LF
```

## 7. 如何回退

只改仓库内 `.gitattributes` 即可，不影响其它仓库：

- 回到"不转"：`* -text`
- 回到"入库 LF、Windows 检出 CRLF"：`* text=auto`
- 改完执行 `git add --renormalize .` 重新规范化。

## 8. 一句话总结

**本仓库用仓库内 `.gitattributes` 的 `* text=auto eol=lf` 把文本统一成 LF（`.bat`/`.cmd` 与二进制除外）；
只影响本仓库，不动系统级 `core.autocrlf=true`，从此不再有行尾警告与幽灵 diff。**