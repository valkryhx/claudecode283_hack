# claudecode319 — 分析输入物与源码快照

Claude Code **v2.1.319** 的输入物快照、Bun 模块提取结果与可读化产物入口。

> 本目录沿用 `claudecode283` / `claudecode303` 的既有做法：只存真实源码、不删减、不写替代实现；
> 每个阶段落盘到自己的目录，不覆盖前一阶段产物。

## 内容

| 路径 | 大小 / 数量 | 说明 |
| --- | ---: | --- |
| `claude.exe` | 344,807,072 B | 唯一必需输入物，Claude Code v2.1.319 |
| `modules/` | **2,882** 个 JS 模块 | 从 `.bun` 段按 `// @bun @bytecode` 标记切出的原文 |
| `modules/INDEX.tsv` | 2,882 行数据（+1 行表头） | `idx / off / size / wf_hits / file / tokens` |
| `../reconstructed319/full/` | 2,882 个模块 | 仅格式化，标识符仍为压缩名 |
| `../reconstructed319/deminified/` | 2,882 个模块 | 证据驱动去混淆改名 |

## 二进制溯源

| 项 | 值 |
| --- | --- |
| 来源路径 | `C:\Users\Administrator\.local\bin\claude.exe`（本机 `claude` 命令解析结果） |
| 归档路径 | `D:\git_repos\claude_hack\claudecode319\claude.exe` |
| 文件大小 | 344,807,072 B（328.8 MiB） |
| SHA256 | `2E055732C9D03D22700D9046251A8370B673607BFCC9E4D16A1B0E8FB1345CBD` |
| 版本 | Claude Code **2.1.319**（PE FileVersion / ProductVersion 均为 `2.1.319.0`） |
| BUILD_TIME | `2026-11-05T18:14:18Z` |
| GIT_SHA | `fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2` |
| 格式 | PE32+ executable (console), x86-64 |
| ImageBase | `0x140000000` |

> 复制后已用 SHA256 复核：归档副本与来源文件逐字节一致。
> `BUILD_TIME` / `GIT_SHA` 各命中 314 处（每个模块尾部各带一份构建戳），取值唯一，无歧义。

## PE 与 Bun 载荷

| 段 | VA | 文件偏移 | VirtualSize / RawSize |
| --- | ---: | ---: | ---: |
| `.text` | `0x140001000` | `0x600` | `0x74fa846 / 0x74faa00` |
| `.rdata` | `0x1474fc000` | `0x74fb000` | `0x1a31058 / 0x1a31200` |
| `.data` | `0x148f2e000` | `0x8f2c200` | `0x237380 / 0x1fe00` |
| `.pdata` | `0x149166000` | `0x8f4c000` | `0x1a5758 / 0x1a5800` |
| `.bunaot` | `0x14930c000` | `0x90f1800` | `0xea8 / 0x1000` |
| `.bunblt` | `0x14930d000` | `0x90f2800` | `0x2a297e / 0x2a2a00` |
| `.bunfeat` | `0x1495b0000` | `0x9395200` | `0x218 / 0x400` |
| `.bunid` | `0x1495b1000` | `0x9395600` | `0x20 / 0x200` |
| `.fptable` | `0x1495b2000` | `0x9395800` | `0x100 / 0x200` |
| `.tls` | `0x1495b3000` | `0x9395a00` | `0x5bd6 / 0x5c00` |
| `_RDATA` | `0x1495b9000` | `0x939b600` | `0x1f4 / 0x200` |
| `__DATA,_` | `0x1495ba000` | `0x939b800` | `0x4000 / 0x4000` |
| `__DATA,_` | `0x1495be000` | `0x939f800` | `0x4000 / 0x4000` |
| `.rsrc` | `0x1495c2000` | `0x93a3800` | `0x3102c / 0x31200` |
| `.reloc` | `0x1495f4000` | `0x93d4a00` | `0x499dc / 0x49a00` |
| **`.bun`** | `0x14963e000` | `0x941e400` | **`0xb4b48e0 / 0xb4b4a00`** |

| 项 | 值 |
| --- | ---: |
| `// @bun @bytecode` marker 数 | 2,883 |
| 有效模块数 | **2,882**（2,881 个完整 span + 1 个从非模块 span 中切出的模块头） |
| 模块总字节数 | 53,398,027 B（50.9 MiB） |
| 首模块 | `m0000_0x84910b4.js` |
| 末模块 | `m2882_0x144f842f.js`（从 marker 2882 的非模块 span 中切出，4,482 B） |
| 最大模块 | `m0591_0x11be624e.js`，5,391,418 B |

### 跳过区

| marker | 偏移 | 大小 | 处理结果 |
| ---: | --- | ---: | --- |
| 1 | `0x84910c6` | 148,355,826 B | **跳过**（超大非模块区，> 6 MiB 上限） |
| 2882 | `0x144f842f` | 4,051,569 B | **切出模块头**：保留前 4,482 B 作为 `m2882_0x144f842f.js`，其余 4,047,087 B 二进制尾归档到 `spans/` |

marker 2882 原本因"非模块尾部"规则整段跳过。2026-11-07 复查发现其头部是**完整真实模块**，
故给提取器加了 `--carve-head`，只弃二进制尾、保留源码。marker 1 经复查确认不含业务源码，仍跳过。

#### 跳过区的实际内容（2026-11-07 补齐）

两段都已在 `claudecode319/spans/` 逐字节切片存档，分析见
`extracted/20261107-被跳过span完整分析.md`。结论：

| span | 实质 | 是否含 Claude Code 源码 |
| --- | --- | --- |
| marker 1 | 从 `.rdata` 伪起点跨 **15 个 PE 段**到 `.bun` 首个真模块；内部含 Bun 运行时字符串表（MIME 表、Node flags、ZSTD 错误码、ripgrep 手册），全段 **0 个模块标记** | **否** |
| marker 2882 | 前 **4,482 B 是完整真实模块**（原子状态库 `chunk-sa45ym56.js`，含 16 个内部文件：`atom` / `derive` / `peek` / `update` / `frozen-ref` 等，并 export `jose` 的 JWT 系列），其后是 Bun chunk 索引表 | **是，且全仓唯一 → 已收入 `modules/`** |

关键点：

- **marker 数 2,883 ≠ 模块数 2,882**：其中 2 个 marker 落在 `.rdata`，是伪标记
  （marker 0 的 18 B 内容就是 `// @bun @bytecode\n` 本身；marker 1 带全盘唯一的 `@bun-cjs` 后缀）。
- `m2882_0x144f842f.js`（= `chunk-sa45ym56.js`）含 `atomValueOf` / `deepFrozen` /
  `derive` / `peek` / `update`（CAS + 64 次重试）等实现，**在其余 2,881 个模块中检索命中数为 0**。
  它被 `m1764_0x12ee5476.js` 显式 import。该模块已走完线 A / 线 B（改名 2 处）。
- 切点判定：`\\x00` 只有当其后 64 字节可打印率 < 0.95 时才视为模块结束。
  marker 2882 在偏移 422 有一个**游离 NUL**（其后仍是正常源码），靠该规则才没有提前截断。

归档完整性：`spans/` 共 48 个切片，逐一与源文件同偏移比对 **ok=48 bad=0**。

## 为什么源码可直接读

Bun `--compile` 产物保留明文 JavaScript；本样本同样是 **minify，不是混淆**。字符串、属性名、对象键、
schema 描述和导出别名仍然保留，因此可以做证据驱动的可读化。方法见：

- `../docs/bun-standalone-re.md`
- `../docs/why-source-is-readable.md`
- `../reconstructed/AUTO-NAMING.md`
- `../reconstructed/NAMING-METHOD.md`

## 产物统计（线 A / 线 B）

| 阶段 | 结果 |
| --- | --- |
| 线 A 格式化 | 2,882/2,882（2,877 成功，**5 个回退原文**） |
| 线 A 输入 → 输出 | 50.9 MB → 64.3 MB，耗时 56.2 s |
| 线 A 解析复验 | `full/ parseable: 2882/2882 (bad=0)` |
| 线 B 去混淆 | 2,882/2,882，改名 **100,496** 处 |
| 线 B 证据分布 | S 33,104 / A 35,788 / B 5,968 / C 25,636 |
| 线 B 语义复验 | `ok: 2882  bad: 0`；悬垂 else 补括号 231 处（已放行） |

### 超过 1 MiB 的模块（AST 改名跳过，`deminified` 复用 `full/`）

| 模块 | 大小 |
| --- | ---: |
| `m0591_0x11be624e.js` | 5,391,418 B |
| `m2124_0x1363573f.js` | 1,943,844 B |
| `m1764_0x12ee5476.js` | 1,566,539 B |
| `m0302_0x117cfe48.js` | 1,083,662 B |

> 这 4 个模块在 `deminified/` 里**符号仍是压缩名**，与 303 的处理一致（见 `AUTO-NAMING.md` §3 规则 5）。

### beautifier 失败并安全回退原文（5 个）

| 模块 | 报错 | 与 `modules/` 的字节差异 |
| --- | --- | --- |
| `m0769_0x124037e1.js` | Unterminated string constant (407:851) | 1 字节（结尾 `0x00` → `0x20`） |
| `m1738_0x12e7929f.js` | Unexpected token (802:12) | 1 字节（同上） |
| `m1957_0x133528ed.js` | Unterminated string constant (11601:283) | 1 字节（同上） |
| `m2041_0x134ee180.js` | Unterminated string constant (1300:94) | 1 字节（同上） |
| `m2136_0x1383a002.js` | Unexpected token (1926:43) | 1 字节（同上） |

> 已逐字节审计（`len` 相同、差异位置全在文件末字节）：这 5 个文件的 `full/` 版本与原始模块**仅差结尾
> 1 个 NUL 被写成空格**，正文没有改动。这是 beautifier 的限制，**不是模块损坏**。
>
> 这 5 个模块仍能被解析器读取（`verify-full` 2,882/2,882 全过），且**线 B 去混淆对它们正常生效**：

| 模块 | 去混淆改名数 |
| --- | ---: |
| `m1957_0x133528ed.js` | 1,565 |
| `m2136_0x1383a002.js` | 364 |
| `m2041_0x134ee180.js` | 144 |
| `m0769_0x124037e1.js` | 31 |
| `m1738_0x12e7929f.js` | 10 |

## 与 283 / 303 的规模对照

| 版本 | exe 大小 | `.bun` 段 | marker | 有效模块 | 模块字节 | 改名数 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 2.1.283 | 244,960,928 | — | — | 2,135 | — | 79,325 |
| 2.1.303 | 290,228,384 | `0xa2e3383` | 2,433 | 2,431 | 46,655,355 | 90,771 |
| **2.1.319** | **344,807,072** | **`0xb4b48e0`** | **2,883** | **2,882** | **53,398,027** | **100,496** |

> **319 不是 303 的模块平移**：模块编号、大小、共享 chunk 都变了。
> 禁止用模块号直接套用，必须用导出名、字符串、属性名或调用链复核（同 AGENTS.md §3.2 对 303 的约束）。

## 复现

### 1. 复制并校验输入物

```powershell
Copy-Item "C:\Users\Administrator\.local\bin\claude.exe" "D:\git_repos\claude_hack\claudecode319\claude.exe"
Get-FileHash "D:\git_repos\claude_hack\claudecode319\claude.exe" -Algorithm SHA256
# 期望 2E055732C9D03D22700D9046251A8370B673607BFCC9E4D16A1B0E8FB1345CBD
```

### 2. 提取模块

```bash
cd /d/git_repos/claude_hack
python tools/extract_bun_modules.py \
  "D:/git_repos/claude_hack/claudecode319/claude.exe" \
  "D:/git_repos/claude_hack/claudecode319/modules" \
  --max-size 6M --carve-head
```

> `--carve-head` 是 319 专用的开关：它让提取器在"真模块 + 二进制尾"的 span 里
> 只保留模块头。**不加这个开关会得到 2,881 个模块，少了 `m2882_0x144f842f.js`
> （原子状态库）。** 283/303 的已发布产物没有使用该开关，因此模块数保持 2,135 / 2,431 不变。

### 3. 格式化（线 A）

```bash
cd /d/git_repos/claude_hack/reconstructed/tools
export RE_ROOT="D:/git_repos/claude_hack/reconstructed319"
export RE_MODULES="D:/git_repos/claude_hack/claudecode319/modules"
export RE_FULL="D:/git_repos/claude_hack/reconstructed319/full"
node full.mjs && node verify-full.mjs
```

### 4. 去混淆（线 B）

```bash
cd /d/git_repos/claude_hack/reconstructed/tools
export RE_ROOT="D:/git_repos/claude_hack/reconstructed319"
export RE_MODULES="D:/git_repos/claude_hack/claudecode319/modules"
export RE_FULL="D:/git_repos/claude_hack/reconstructed319/full"
export RE_DEMINIFIED="D:/git_repos/claude_hack/reconstructed319/deminified"
for i in 0 1 2 3 4 5; do node deminify.mjs --shard $i/6 --quiet & done; wait
node merge-reports.mjs 6
for i in 0 1 2 3 4 5; do node verify-deminified.mjs --shard $i/6 & done; wait
node merge-reports.mjs 6
```

## 已知限制

- 行号是 `reconstructed319/deminified/` 或指定文件的当前格式化行号；重新格式化后可能漂移，
  优先同时搜索符号、字符串和行号。
- 4 个 >1 MiB 模块的 `deminified` 复用 `full/`，符号仍为压缩名。
- 5 个模块 beautifier 失败并回退原文，未丢弃。
- `m2882_0x144f842f.js`（`chunk-sa45ym56.js`，原子状态库）**已收入 `modules/` 并走完线 A/B**。
  它是从"非模块 span"中切出的，提取时必须带 `--carve-head`；不带该选项则复现不出这个模块
  （会得到 2,881 而非 2,882）。
- 分割口径：marker span ≤ 6 MiB 且带模块尾的直接整段收录；一个真模块后跟二进制尾的，
  在 `--carve-head` 下只收录模块头。当前 2,882 = 2,881 个整段 + 1 个切出的模块头。
- 本目录目前只完成**线 A / 线 B**（全量格式化 + 去混淆）。线 C（声明级精读）与各子系统专项
  可读化（rewind / Agent Team / hooks）尚未对 319 执行。
- 跨版本对照（283/303 → 319）尚未生成，须按导出名、字符串、属性名逐项人工复核后才能写成源码事实。
