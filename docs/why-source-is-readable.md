# 为什么 claude.exe 的源码能直接读

- 记录时间：2026-10-11
- 目标样本：`C:\Users\Administrator\.local\bin\claude.exe`（Claude Code v2.1.283）
- 配套：`bun-standalone-re.md`（**怎么做**：定位/抽取/检索）；本文讲**为什么能**。

> **样本路径说明（历史记录）**：文中出现的 `C:\Users\Administrator\...` 是**原始分析机**上的路径，保留原样、仅作历史记录。
> 本机对应位置是 `C:\Users\drago\.local\bin\claude.exe`，但那是 **v2.1.296**，与本次分析对象（**v2.1.283**）不是同一文件；
> 复现时请把 **v2.1.283** 的 `claude.exe` 放回 `claudecode283/claude.exe`。

---

## 0. 一句话结论

`claude.exe` 是 **Bun `--compile` 的单文件产物**。
Bun 把整个 JS 模块图的**源码文本**当作**数据**，原样嵌进了 PE 的 `.bun` 段；
而 Anthropic 这个 build **只做了 minify、没做混淆**。

所以：**源码本来就在里面，不需要"反编译"——它只是一段能被 grep 到的明文。**

---

## 1. Bun `--compile` 把什么拼成了一个 exe

它把三样东西合成一个可执行文件：

1. **Bun 运行时** —— 原生机器码（这部分才需要 IDA）
2. **bundle 后的整个 JS 模块图** —— **源码文本**（我们要的东西）
3. 一份 **bytecode 缓存** —— 用于加速启动

关键在第 2 点：**嵌进去的是源码文本，不是只有 bytecode。**

样本里的直接证据——`// @bun @bytecode` 这个 marker 出现 **2,137 次**，
每个模块的**完整 JS 源码**就排在 marker 后面：

```
// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// ...
// Version: 2.1.283
<这里才是真正的 JS 源码>
```

即 **bytecode 与源码并存**，Bun 没有丢掉源码。

> 为什么留着源码？（**推断**，非本次验证）Bun 的 standalone exe 需要能报错、能给 stack trace、
> 能调试——这些都要源码。取向是**便利性优先，不是安全优先**。

---

## 2. 源码在文件里的位置：`.bun` 段（数据，不是代码）

| 项 | 值 |
| --- | --- |
| 总大小 | 244,960,928 字节 |
| 格式 | PE32+ x86-64，13 段 |
| 载荷段 | `.bun` @ VA `0x145B74000`（文件偏移 `0x5951400`，约 144 MB） |
| 另一特征段 | `.bunblt` |
| 模块数 | 2,137 个 marker，2,132 个有效模块 span |

**这是"数据段"**，所以：

- `grep -aob` 扫 245 MB **约 1.7 秒**就能命中——只是在文本里找字符串；
- 对 `.bun` 段做反编译**没有意义**：它是数据，不是代码。

> 这正是本项目里 IDA 只用来做**地址导航**、不做反编译的原因。
> 详见 `bun-standalone-re.md` §0 与 §2。

---

## 3. 能"直接读"是三个条件同时成立

Bun `--compile` 是**必要条件，但不是充分条件**。三个条件缺一不可：

| # | 条件 | 本样本 | 若反过来 |
| --- | --- | --- | --- |
| ① | 打包器把**源码**嵌进去 | ✅ Bun `--compile` | 只嵌 bytecode → 需反编译 bytecode |
| ② | **未做混淆** | ✅ 仅 minify | 加 javascript-obfuscator → 字符串加密 / 控制流平坦化，极难读 |
| ③ | **未压缩 / 未加密** | ✅ 明文 | 有些 packer 会压 → 需先解包 |

---

## 4. 关键区分

### minify ≠ 混淆

| | minify（Bun 默认做的） | 混淆（本样本**没做**） |
| --- | --- | --- |
| 做什么 | 删空白、压标识符名 | 字符串加密、控制流平坦化、不透明谓词、死代码 |
| 语义 | **完整保留** | 被搅乱 |
| 字符串 | 不动 | 加密 |
| 控制流 | 不变 | 变形 |
| 可读性 | 高（改名即可还原） | 极低 |

这就是为什么你能看到 `Io` / `jo` / `ge` 这类**短名**——它们只是被压短了，
字符串、属性名、控制流**原封不动**（见 `reconstructed/NAMING-METHOD.md`）。

### 源码 ≠ bytecode

Bun 同时嵌了两者。**bytecode 在、源码也在**。
若某天源码被剥离、只剩 bytecode，难度会跳一个量级（要反编译 bytecode）。

---

## 5. 对比其他打包方式

| 方式 | 里面是什么 | 可读性 |
| --- | --- | --- |
| **Bun `--compile`** | 源码文本（minified）+ bytecode | ⭐ 直接 grep |
| Node SEA / pkg / nexe | 默认也是源码文本 | 直接读（除非显式用 bytecode） |
| bytenode / V8 snapshot | 只有 bytecode | 需反编译 bytecode |
| 源码 + 混淆器 | 源码在，但被搅乱 | 很难 |
| **原生编译**（Go / Rust / C++） | 机器码，**没有 JS** | 只能 IDA 反编译 |

---

## 6. 对本项目的两个直接影响

1. **取数路径**：直接 grep 原始文件 → 拿文件偏移 → 用 `.bun` 段起点换算 VA →
   需要时才进 IDA 导航。**全程不需要反编译。**
2. **`.i64` 的定位**：对当前 Bun 样本，`.i64` 只是可选的"地址换算器"。
   它真正会当主力的场景是**最后一行**——目标若是原生编译、里面没有 JS，
   才只能靠 IDA 反编译机器码。

---

## 7. 快速判断"一个目标是否可读"（探针）

任一条命中基本实锤是 Bun 单文件（本样本命中数见右列）：

| 探针 | 本样本 |
| --- | --- |
| `Bun.isStandaloneExecutable` | 1 |
| `B:/~BUN/root/` | 161,535 |
| `/$bunfs/root/` | 1 |
| `// @bun @bytecode` | 2,137 |
| PE 段表含 `.bun` / `.bunblt` | ✅ |

```bash
python tools/bunpeek.py "C:/Users/Administrator/.local/bin/claude.exe" info
```

判读：

- 命中 → 源码多半明文可读，直接 grep；
- 是 JS 打包但**加了混淆** → 源码在，但需要反混淆（字符串解密 / 控制流还原）；
- 只有 bytecode → 需要 bytecode 反编译；
- 完全没有 JS 特征（原生） → 走 IDA 反编译路线，`.i64` 才关键。

---

## 8. 结论的边界（哪些是事实、哪些是推断）

- **事实**（本次在样本上验证）：`.bun` 段含明文 JS；`// @bun @bytecode` 2,137 处；
  minify 但未混淆（字符串/属性名保留）；grep 可直接命中。
- **推断**（未逐条验证）：Bun 保留源码的**动机**（stack trace / 调试友好）；
  Bun 内部对该段的**确切封装格式**。
- **结论**：能直接读 = **① 打包器嵌源码 + ② 未混淆 + ③ 未压缩**，Bun `--compile` 是其中一环。
