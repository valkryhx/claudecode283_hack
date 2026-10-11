# Git 行尾策略：本机为什么总是刷 LF/CRLF 警告，以及怎么根治

本文记录本机（Windows + Git for Windows）的一个长期噪音源：**行尾（EOL）自动转换**。
它会刷大量 `LF will be replaced by CRLF` 警告、制造「其实没改、只是行尾不同」的幽灵 diff，
让 agent 反复去追行尾问题、浪费 token。本文给出三种处理方案，并记录最终选用的方案 C。

---

## 0. 症状

- `git add` 输出成千上万行：`warning: in the working copy of 'X', LF will be replaced by CRLF the next time Git touches it`
- `git status` 里出现"改了"但 `git diff` 看不出实质变化的文件（幽灵 diff）。
- 反复 `git add` / `checkout` 后，工作区文件行尾在 LF ↔ CRLF 之间来回变。
- agent 看到这些就去排查、解释、重试 —— 全是白烧 token。

## 1. 根因：三层配置里最底层的系统级开关是 `true`

Git 的配置是分层的（就近覆盖）：

```
系统级   E:\Git\etc\gitconfig      core.autocrlf = true     ← Git for Windows 安装器默认
全局级   ~/.gitconfig               (未设置)
仓库级   <repo>/.git/config         (随仓库而定)
```

诊断命令：

```bash
git config --show-origin --get-all core.autocrlf
# file:E:/Git/etc/gitconfig   true      ← 真正的元凶
```

`core.autocrlf=true` 的语义是：

- **提交时**：把工作区的 CRLF 转成 LF 存进库；
- **检出时**：把库里的 LF 转成 CRLF 写回工作区。

在 Windows 上这是 git 的"贴心默认"，但对本项目（**真实源码存档，要求字节保真**）是纯粹的破坏源：
它会在入库时改字节、在检出时改字节，还会刷警告。

## 2. 三种处理方案

| 方案 | 做法 | 影响面 | 代价 |
| --- | --- | --- | --- |
| **A. 只修本仓库** | 仓库内加 `.gitattributes` 写 `* -text` + `git config core.autocrlf false` | 仅当前仓库 | 每建一个新仓库都要重做一次；本机其它仓库不受益 |
| **B. 全局关转换** | `git config --global core.autocrlf false` | 本机所有仓库 | 想在 Windows 上保留 CRLF 的仓库（如某些 `.bat`/`.ps1` 项目）会把 CRLF 也存进库；是"隐式"行为变更 |
| **C. 全局属性文件** | 建 `~/.config/git/attributes` 写 `* -text`，并设 `core.attributesFile` 指向它 | 本机所有仓库 | 同样是全机器级行为变更，但"声明式"、可读、一处可查、易回退 |

> A 与 B/C 的区别：A 是**仓库自带**的（会跟着 clone 走，保护 CI 和别人）；
> B/C 是**本机全局**的（只保护这台机器）。两者不冲突，最终是 A + C 一起用。

## 3. 最终选用：方案 C（并保留 A）

### 为什么选 C 而不是 B

- **声明式、看得见**：`* -text` 写在一个 attributes 文件里，一眼就知道这台机器"按字节保真"，
  而不是藏在 `core.autocrlf=false` 这种需要知道语义的开关里。
- **易回退**：删文件 / `git config --global --unset core.attributesFile` 即可，不残留。
- **和 git 的原生机制一致**：`.gitattributes` 本来就是 git 用来声明"某类文件怎么处理"的正规手段，
  全局 attributes 是它的标准用法。

### 为什么还要保留 A（仓库内 `.gitattributes`）

- 全局 attributes **只在这台机器上生效**。仓库内的 `.gitattributes` 是**入库**的，
  会跟着 clone 到别的机器 / CI，保证**任何地方**都按字节保真。
- 所以本仓库是 **A + C 双保险**。

## 4. 实际改动清单

### 4.1 全局（方案 C，本机所有仓库生效）

新建文件 `C:\Users\Administrator\.config\git\attributes`（= `~/.config/git/attributes`）：

```text
# 全局 git attributes —— 本机所有仓库默认按字节保真，禁用一切 EOL 转换。
# 背景：Git for Windows 安装器把 core.autocrlf=true 写进系统级配置，
#       导致 git add 刷大量 LF/CRLF 警告、git status 出现幽灵 diff。
# 规则：* -text  =  对所有文件关闭 text/EOL 处理（按字节原样进出）。
# 生效范围：本机所有仓库（不改变任何仓库的已有内容）。
# 关闭方式：git config --global --unset core.attributesFile，或删除本文件。
* -text
```

并设置：

```bash
git config --global core.attributesFile "C:/Users/Administrator/.config/git/attributes"
```

> 说明：`~/.config/git/attributes` 本来就是 git 的**默认**全局 attributes 路径，
> 但显式设置 `core.attributesFile` 更稳（不依赖 `XDG_CONFIG_HOME` / `HOME` 的取值）。

### 4.2 本仓库（方案 A，入库）

文件 `D:\git_repos\claude_hack\.gitattributes`（已随 `06092d4` 提交）：

```text
# 本仓库是「真实源码存档」——所有文件按字节保真，禁用任何 EOL 转换。
# 与本地 core.autocrlf=false 配套使用。
* -text
```

仓库本地配置 `D:\git_repos\claude_hack\.git\config`（未跟踪）：

```text
core.autocrlf=false
core.safecrlf=false
```

### 4.3 没有改动的地方

- **系统级 `E:\Git\etc\gitconfig` 保持原样**（仍是 `core.autocrlf=true`）。
  我们只在本机用全局 attributes 覆盖它的效果，不改动系统文件。
- 没有改动任何已有仓库的**内容**（attributes 只影响**后续**的 add/checkout 处理，不重写历史）。

## 5. 验证方法（可复现）

在临时仓库里放一个带 CRLF 的文件，`git add` 后看入库 blob 是否保留 `\r\n`：

```bash
T=$(mktemp -d) && cd "$T" && git init -q -b main
printf "line1\r\nline2\r\n" > crlf.txt
git add -A 2>warn.txt
cat warn.txt                 # 期望：空（没有警告）
git show :crlf.txt | od -c   # 期望：... \r \n ...  （CRLF 被原样保留）
git check-attr text -- crlf.txt   # 期望：crlf.txt: text: unset
```

本机实测结果（2026-10-11）：

- `git add` 警告字节数 = **0**
- `crlf.txt` 入库 blob = `l i n e 1 \r \n l i n e 2 \r \n`（**CRLF 保留**）
- `lf.txt` 入库 blob = LF 保留
- `check-attr` = `text: unset`

## 6. 如何回退

```bash
# 只关全局（本机所有仓库恢复系统默认 autocrlf=true 的行为）
git config --global --unset core.attributesFile
# 如需连文件一起清掉
rm ~/.config/git/attributes
```

仓库内的 `.gitattributes` 是入库的，需要时单独处理（`git rm .gitattributes`）。

## 7. 一句话总结

**本机行尾噪音的根因是系统级 `core.autocrlf=true`；最终用「全局 attributes `* -text`（方案 C）+ 仓库内 `.gitattributes`（方案 A）」双保险，
让这台机器上所有仓库都按字节保真，git 不再转换行尾、不再刷警告、不再产生幽灵 diff。**
