# claudecode303 — 分析输入物与源码快照

Claude Code **v2.1.303** 的输入物快照、Bun 模块提取结果与可读化产物入口。

## 内容

| 路径 | 大小 / 数量 | 说明 |
| --- | ---: | --- |
| `claude.exe` | 290,228,384 B | 唯一必需输入物，Claude Code v2.1.303 |
| `modules/` | 2,431 个 JS 模块 | 从 `.bun` 段按 `// @bun @bytecode` 标记切出的原文 |
| `modules/INDEX.tsv` | 2,431 行 | `idx / off / size / wf_hits / file / tokens` |
| `extracted/` | — | 303 总览、283→303 映射、hooks、mods 等分析文档 |
| `../reconstructed303/full/` | 2,431 个模块 | 仅格式化，标识符仍为压缩名 |
| `../reconstructed303/deminified/` | 2,431 个模块 | 证据驱动去混淆改名 |

## 二进制溯源

| 项 | 值 |
| --- | --- |
| 来源路径 | `D:\git_repos\claude_hack\claudecode303\claude.exe` |
| 文件大小 | 290,228,384 B |
| SHA256 | `1787C60619BAD78543C67E4D9D8A868869C35A904F2A85EB9EA46C4808AF196B` |
| 版本 | Claude Code 2.1.303 |
| BUILD_TIME | `2026-10-18T20:20:57Z` |
| GIT_SHA | `07df2aedd2d01d2f60907b8404acbda187b04072` |
| 格式 | PE32+ executable (console), x86-64 |
| ImageBase | `0x140000000` |

## PE 与 Bun 载荷

| 段 | VA | 文件偏移 | VirtualSize / RawSize |
| --- | ---: | ---: | ---: |
| `.text` | `0x140001000` | `0x400` | `0x572cfa2 / 0x572d000` |
| `.rdata` | `0x14572e000` | `0x572d400` | `0x1667960 / 0x1667a00` |
| `.data` | `0x146d96000` | `0x6d94e00` | `0x239f00 / 0x1da00` |
| `.bunblt` | `0x1470fb000` | `0x6edd200` | `0x286dac / 0x286e00` |
| `.bun` | `0x147404000` | `0x71e2c00` | `0xa2e3383 / 0xa2e3400` |

| 项 | 值 |
| --- | ---: |
| `// @bun @bytecode` marker 数 | 2,433 |
| 有效模块数 | 2,431 |
| 模块总字节数 | 46,655,355 B |
| 首模块 | `m0000_0x658abe3.js` |
| 末模块 | `m2431_0x110c36e1.js` |
| 最大模块 | `m0459_0xecff32a.js`，4,995,056 B |

### 跳过区

| marker | 偏移 | 大小 | 原因 |
| ---: | ---: | ---: | --- |
| 1 | `0x658abf5` | 132,884,179 B | 超大非模块区；NUL 在 181，tail printable 0.238025 |
| 2432 | `0x110c3a31` | 4,214,383 B | 前 2,813 B 是 JS，随后进入多模块/二进制区；printable 0.44757 |

这两个 span 不能当成单个源码模块，因此跳过；未对内容做删减式重写。其余 marker 全部按原始字节落盘。

## 为什么源码可直接读

Bun `--compile` 产物保留明文 JavaScript；本样本是 **minify，不是混淆**。字符串、属性名、对象键、schema 描述和导出别名仍然保留，因此可以做证据驱动的可读化。方法见：

- `../docs/bun-standalone-re.md`
- `../docs/why-source-is-readable.md`
- `../reconstructed/AUTO-NAMING.md`
- `../reconstructed/NAMING-METHOD.md`

## 复现

### 1. 提取模块

```bash
cd /d/git_repos/claude_hack
python tools/extract_bun_modules.py \
  "D:/git_repos/claude_hack/claudecode303/claude.exe" \
  "D:/git_repos/claude_hack/claudecode303/modules" \
  --max-size 6M
```

> 303 按用户指定使用 **6 MiB** 上限；283 的 4 MiB 阈值仍由同一脚本支持，可用 `--max-size 4M` 精确复现 2,135 个模块。

### 2. 格式化

```bash
cd /d/git_repos/claude_hack/reconstructed/tools
export RE_ROOT="D:/git_repos/claude_hack/reconstructed303"
export RE_MODULES="D:/git_repos/claude_hack/claudecode303/modules"
/g/nodejs/node full.mjs
/g/nodejs/node verify-full.mjs
```

### 3. 去混淆

```bash
cd /d/git_repos/claude_hack/reconstructed/tools
export RE_ROOT="D:/git_repos/claude_hack/reconstructed303"
export RE_MODULES="D:/git_repos/claude_hack/claudecode303/modules"
export RE_FULL="D:/git_repos/claude_hack/reconstructed303/full"
export RE_DEMINIFIED="D:/git_repos/claude_hack/reconstructed303/deminified"
for i in 0 1 2 3 4 5; do /g/nodejs/node deminify.mjs --shard $i/6 --quiet & done; wait
/g/nodejs/node merge-reports.mjs 6
for i in 0 1 2 3 4 5; do /g/nodejs/node verify-deminified.mjs --shard $i/6 & done; wait
/g/nodejs/node merge-reports.mjs 6
```

## 配套分析文档

| 文档 | 内容 |
| --- | --- |
| `extracted/20261020-303源码提取与可读化总览.md` | 产物目录、统计、验证、限制、检索方法 |
| `extracted/20261020-283到303入口映射.md` | 283 已分析模块在 303 的快速入口与候选表 |
| `extracted/20261020-hooks入口分析.md` | 33 事件、5 类型、输入输出 schema、执行链、worker 与安全门禁 |
| `extracted/20261020-mods入口分析.md` | `mods ≈ installed plugins / plugin function hooks`、加载链、策略与默认安全 plugin |
| `extracted/20261020-cross-version-candidates.md` | 61 个 283 模块的算法候选附录（机器生成，需人工复核） |
| `extracted/cross-version-candidates.json` | 候选映射原始数据 |

## 已知限制

- 行号是 `reconstructed303/deminified/` 或指定文件的当前格式化行号；重新格式化后可能漂移，优先同时搜索符号、字符串和行号。
- `m0459_0xecff32a.js`、`m1496_0xfe682a4.js`、`m1635_0x101da730.js` 超过 1 MiB，`deminified` 对它们复用 `full/`，符号仍为压缩名。
- 4 个模块的 beautifier 失败并安全回退原文：`m0775_0xf6ccb47.js`、`m1474_0xfe0bcdb.js`、`m1697_0x1045e023.js`、`m1777_0x10644bf2.js`。它们仍可由解析器读取，未丢弃。
- `cross-version-candidates` 是相似度排序，不是自动等价证明；正式入口表已区分“高置信”和“候选/未确认”。
