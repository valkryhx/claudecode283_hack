# Claude Code 2.1.303 看图（view image）实现调研 + 复刻指南

> 调研对象：`claudecode303/`（Claude Code v2.1.303，SHA256 `1787C606…AF196B`）的 2,431 个明文模块。
> 所有结论都给出 `模块文件:行号` 坐标，可直接回查。
> 本文回答两个问题：
> 1. 用户在输入框里粘贴图片 / 图片路径，agent 为什么能看见；
> 2. agent 执行过程中自己知道图片路径，怎么才能看见。

---

## 0. 结论先行

**Claude Code 没有独立的 `view_image` / `ViewImage` 工具。**
全量检索 2,431 个模块，`ViewImage` / `view_image` / `viewImage` 零命中。

看图只有两条入口，而且**最终都归一到同一种数据结构**：

| # | 入口 | 触发者 | 最终产物 |
| --- | --- | --- | --- |
| 1 | 输入框粘贴（剪贴板图片数据，或粘贴文本里的图片路径） | 用户 | `user` 消息 `content` 数组里的 `image` block |
| 2 | `Read` 工具读到图片文件 | agent 自己 | `tool_result` 的 `content` 数组里的 `image` block |

两边都是 Anthropic Messages API 的原生图片块：

```json
{ "type": "image",
  "source": { "type": "base64", "media_type": "image/png", "data": "<base64>" } }
```

**这就是"agent 能不能看见"的唯一分水岭。** 只要模型收到的消息里有一个 `image` 块，
它就能看见；如果只是把路径当文本塞进 `tool_result`，模型永远看不见。

三条最关键的复刻事实：

1. **图片块必须进 `content` 数组**，不能拼进字符串。`tool_result` 的 `content` 可以是数组
   （`m0459_0xecff32a.js:172932`），CC 正是这么做的。
2. **`Read` 工具按"扩展名白名单 + magic bytes"双判定**决定走图片分支，不是只看后缀
   （`m0459:173373`、`m0144:14`、`m0359:17`）。
3. **CC 不按模型能力降级**：全仓库没有 `supportsImages` / `vision` 之类的分支。
   它默认模型就是多模态的。所以你的 agent 只要后端多模态，缺的只是上面第 1 条。

---

## 1. 全局数据流

```text
【入口 1：用户输入】
  终端粘贴事件
    ├─ 剪贴板里是图片数据 → mue() 存临时 png → 读字节 → 预算管线 → base64
    └─ 剪贴板/粘贴文本是路径 → Pds() 判后缀 → Ods() 读文件 → 预算管线 → base64
  → paste store 里存一条 {type:"image", content:<base64>, mediaType, dimensions, sourcePath}
  → 输入框插入占位符 "[Image #N] "
  → 提交时 Ln()：占位符 → image block；base64 落盘（NXo）；生成 [Image: …] 提示
  → user message { content: [ {type:"text"}, {type:"image"} ] }

【入口 2：agent 主动读图】
  Read(file_path="/x/y.png")
  → 扩展名 ∈ {png,jpg,jpeg,gif,webp} 或 magic bytes 命中
  → Bfo() 读字节 → K8e() 缩放/压缩 → 字节预算 → 尺寸/Token 预算
  → 返回 { type:"image", file:{ base64, type:"image/png", originalSize, dimensions } }
  → mapToolResultToToolResultBlockParam() 包成
     { tool_use_id, type:"tool_result", content:[ {type:"image", source:{…}} ] }
  → 另起一条 isMeta 文本消息，写 "[Image: original WxH, displayed at …]"
```

两条路径在"发给模型"这一步完全同构。差别只在**谁发起**、**权限怎么判**、**是否落盘**。

---

## 2. 入口 2：`Read` 工具（agent 主动看图）

### 2.1 工具定义坐标

| 项 | 坐标 |
| --- | --- |
| 工具对象 | `m0459_0xecff32a.js:172704`（`name: Qe`，`Qe = "Read"` 见 `m0144:12`） |
| 检索提示 | `m0459:172712` → `"read files, images, PDFs, notebooks"` |
| 工具描述文本 | `m0281_0xe9549eb.js:4180`（`ENs`）、`4184`（`CNs` 生成器） |
| 输入 schema | `m0459:172729`（`IXr()`） |
| 输出 schema | `m0459:172735`（`DXr()`） |
| `call()` | `m0459:172925` → `jXr(n, s, parentMessage)` |
| 读文件主逻辑 | `m0459:173311`（`cOn`） |
| 结果 → tool_result | `m0459:172932`（`mapToolResultToToolResultBlockParam`） |
| 图片读取器 | `m0459:173800`（`Bfo`） |

### 2.2 判定：扩展名白名单 + magic bytes 双通道

`m0459:173373` 附近：

```js
let Ae = Kl(_e.mainLoopModel()), Oe = !1;
if (h === "") try {                       // 扩展名为空时才做 magic 嗅探
  if ((await (await be()).handle.stat()).isFile()) {
    let yn = await J2((await be()).handle, 16, "file");
    Oe = Ih(yn) !== null;
  }
} catch {}
if (scn.has(h) || Oe) { … 走图片分支 … }
```

- `h` 是 `extname(file_path).toLowerCase()`。
- `scn`（图片扩展名白名单，`m0144:14`）：
  ```js
  var scn = new Set(["png", "jpg", "jpeg", "gif", "webp"]);
  ```
- `Ih()`（magic bytes 嗅探，`m0359_0xec50ce3.js:17`）：

  | 格式 | 判定字节 |
  | --- | --- |
  | PNG | `137 80 78 71` |
  | JPEG | `255 216 255` |
  | GIF | `71 73 70 56` + (`55`\|`57`) + `97`（即 `GIF87a`/`GIF89a`） |
  | WebP | `RIFF` … `WEBP`（第 8–11 字节） |

  **注意：没有 BMP、没有 AVIF、没有 HEIC、没有 SVG。**
  非白名单格式一律走文本/二进制分支，读不到图。
- `qJe()`（`m0144:15`）是"能否当图片/PDF 读"的判定，用于**绕过二进制文件拦截**
  （`m0459:172901`：`if (AOe(D) && !qJe(D)) return { result:!1, message:"This tool cannot read binary files…" }`）。
  也就是说：**白名单里的扩展名会被放行给图片分支，而不是被当成二进制拒绝。**

`Read` 的提示词里也明确写了这件事（`m0281:4206` 起）：

> - Reads images (PNG, JPG, …) and presents them visually.
> - This tool allows Claude Code to read images (eg PNG, JPG, etc).
>   When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.

以及一句对复刻很关键的运营经验（`m0281:4214`）：

> - You will regularly be asked to read screenshots. If the user provides a path to a screenshot,
>   ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.

### 2.3 读取与预算管线

`Bfo(file, maxTokens, …, maxRawBytes, allowDirectWebp)` — `m0459:173800`：

```text
读全部字节 (XXr)
  ├─ 0 字节            → 抛 "Image file is empty"
  ├─ Ih(bytes) === null → 抛 "image extension but invalid magic bytes"
  │                        并附带内容诊断 Krn()（HTML / JSON / PDF / ZIP / hex）
  ├─ K8e(bytes, size, fmt, limits)         // 尺寸缩放 + 格式/质量压缩
  ├─ 若结果 > maxRawBytes → WTo(buffer, maxRawBytes, mediaType)   // 按字节预算压 JPEG
  ├─ zTo(原图, 缩放后, 预算后, maxRawBytes, allowWebp, lossless)  // 可选 WebP 再压
  └─ mAe(buffer, mediaType, originalSize, dimensions)             // 组装 image 结果
```

关键函数：

| 函数 | 坐标 | 作用 |
| --- | --- | --- |
| `Bfo` | `m0459:173800` | 图片读取总入口，含兜底压缩 |
| `K8e` | `m0396_0xec9de37.js:350` | 尺寸缩放 + 质量压缩（sharp） |
| `Y` | `m0396:227` | 按 `maxWidth/maxHeight/maxImageTokens` 求显示尺寸 |
| `q` | `m0396:211` | 长边 ≤1568、按 28px patch 求 token 的二分缩放 |
| `WTo` | `m0396:585` | 纯按字节预算压 JPEG（质量 90→…，最多 5 轮） |
| `jb` | `m0396:609` | 输入图片块（用户粘贴图）的预算处理，返回 `{block, dimensions}` |
| `zTo` | `m0396:762` | 可选 WebP 重编码（比原结果小才采用） |
| `lLt` | `m0396:813` | 把任意 `image` content block 过一遍预算；失败降级成文本块 |
| `mAe` | `m0459:173255` | 组装 `{type:"image", file:{base64,type,originalSize,dimensions}}` |
| `Lee` | `m0396:993` | 生成 `[Image: …]` 尺寸/路径提示文本 |

### 2.4 预算常量（可直接照抄）

| 常量 | 值 | 含义 | 坐标 |
| --- | --- | --- | --- |
| `xne` | `512000`（500 KiB） | 单张图片原始字节上限（本地默认） | `m0086_0xe58fa2b.js:357` |
| `aL.maxWidth` / `maxHeight` | `2000` / `2000` | API 侧像素上限 | `m0086:388` |
| `aL.maxBase64Size` | `5242880`（5 MiB） | base64 后上限 | `m0086:390` |
| `aL.targetRawSize` | `3932160`（3.75 MiB） | 原始字节目标值 | `m0086:392` |
| `Me` / `Ce` | `1568` / `1568` | 长边缩放目标 | `m0396:205` |
| `xt` | `28` | patch 边长；`dbt(w,h)=ceil(w/28)*ceil(h/28)` 估 token | `m0086:383` |
| `JIo` | `25000` | `Read` 输出 token 上限默认值 | `m0155:16` |
| `rB()` | — | 读 `defaultFileReadingLimits`（可被环境变量覆盖） | `m0155:43` |
| 远程传输上限 | `bridge/direct: 307200`，`session/relay: 512000` | 跨机读图更严 | `m0086:359` |

兜底压缩（`m0459:173848`）：预算失败时 `resize(400,400,{fit:"inside"})` + `jpeg({quality:20})`；
再失败就原样返回（不阻断）。

### 2.5 结果 → `tool_result`

`m0459:172932`：

```js
mapToolResultToToolResultBlockParam(e, n) {
  switch (e.type) {
    case "image":
      return {
        tool_use_id: n, type: "tool_result", content: [{
          type: "image",
          source: { type: "base64", data: e.file.base64, media_type: e.file.type }
        }]
      };
    …
```

**这是整条链路的终点，也是复刻时的第一改造点。**
`content` 是数组，图片块与文本块可以混排；PDF 页也是同一机制
（`case "pdf"` 给 `document` 块，`case "parts"` 给多张 `image` 块）。

### 2.6 附带的 meta 文本（模型看到的两条信息）

`cOn` 在返回图片的同时会追加一条 `isMeta` 消息（`m0459:173383`）：

```js
let wo = yn.file.dimensions ? Lee(yn.file.dimensions) : null;
return { data: yn, ...wo && { newMessages: [Re({ content: wo, isMeta: !0 })] } };
```

`Lee`（`m0396:993`）产出：

```text
[Image: original 1920x1080, displayed at 1568x882. Multiply coordinates by 1.22 to map to original image.]
[Image: source: /abs/path.png, original … ]
[Image source: /abs/path.png]        // 只有路径、没有尺寸时
```

两个设计点值得抄：

- **坐标映射**：告诉模型缩放比例，"乘 1.22 映射回原图"。模型据此刻度做点击/裁剪类任务才准。
- **尺寸与图片本体分开发**：图片走 `tool_result`，文字说明走另一条 meta 消息。
  这样不会把文本混进图片块，也方便 UI 单独渲染。

### 2.7 失败与降级

| 情况 | 行为 | 坐标 |
| --- | --- | --- |
| 0 字节 | 抛 `Image file is empty` | `m0459:173804` |
| 后缀是图片但 magic 不符 | 抛错，并诊断实际内容（HTML/JSON/PDF/ZIP/hex），建议 `file` 或按文本读 | `m0459:173806`、`m0359:30` |
| 预算管线抛非预期错误 | 记日志，退回原始字节（不阻断） | `m0459:173836` |
| 尺寸/token 超限且压缩失败 | 400x400 + JPEG q20 兜底 | `m0459:173848` |
| 用户粘贴的图片块无法处理 | 降级成文本块 `[Image could not be processed: …]` | `m0396:840` |
| 目录 / 空文件 / 偏移越界 | 返回 system-reminder 文本 | `m0459:172999` |

---

## 3. 入口 1：输入框粘贴（用户给图）

CC 在终端里区分**两种粘贴**，都归到"图片块"：

- **A. 剪贴板里是图片数据**（截图后 Ctrl+V）→ `mue()`；
- **B. 粘贴的文本里含图片路径**（复制了一个 `/a/b.png` 或 `C:\x\y.jpg`）→ `Pds()` / `Ods()`。

这两条都在 `m0549_0xf39f1f6.js`（`chunk-tx0dq5y3.js`）。

### 3.1 A：剪贴板图片数据 `mue`（`m0549:85`）

```text
B() 构造平台命令（darwin: osascript / linux: xclip|wl-paste / win32: PowerShell + System.Windows.Forms）
  ├─ checkImage  失败 → 返回 null（剪贴板没有图）
  ├─ saveImage   把图写到 <tmp>/claude_cli_latest_screenshot.png
  ├─ 读回字节；若前两字节是 66,77（"BM"）→ 用 sharp 转 PNG
  ├─ K8e(bytes, …, "png", limits, {directWebpMaxBytes})   预算
  ├─ base64 + sft(base64) 嗅探真实 mediaType
  ├─ 删除临时文件
  └─ return { base64, mediaType, dimensions }
```

平台命令见 `m0549:48-67`；临时目录可用 `CLAUDE_CODE_TMPDIR` 覆盖（`m0549:43`）。
**BMP 只在这里被支持**——剪贴板给 BMP 时先转 PNG，因为图片白名单里没有 bmp。

### 3.2 B：粘贴文本里的图片路径 `Pds` / `_oo` / `Ods`

```js
var WRt = /\.(png|jpe?g|gif|webp)$/i;                 // m0549:129
function P(e) { /* 剥掉成对的首尾引号 '…' 或 "…" */ }  // m0549:130
function Pds(e) { return WRt.test(x(P(e.trim()))); }   // m0549:138  是不是图片路径
function _oo(e) { … 返回路径或 null … }                 // m0549:143  取出路径
async function Ods(e, limits, readFn) { … }            // m0549:149  读并转 base64
```

`Ods` 的细节（`m0549:149-186`）：

1. 剥引号 → 正则判后缀；
2. **WSL 特判**：`I() === "wsl"` 且路径形如 `C:\…` 或 `\…` → 转成 WSL 本地路径；
3. 绝对路径直接读；**相对路径**只接受"与剪贴板里的文件同名"的情况（`m0549:156-159`）——
   即 `Ods` 用剪贴板的绝对路径兜底相对文件名；
4. `readFn` 返回 `"refused"` → 原样返回 `"refused"`（权限拒绝）；
5. 空文件 / 后缀对但 magic 不符 → 警告 + `null`（不会瞎读）；
6. BMP → PNG；`K8e` 预算；返回 `{path, base64, mediaType, dimensions}`。

### 3.3 谁调用它们：`Ant` 粘贴处理器（`m0845_0xf76ba90.js:59`）

`Ant({ onPaste, handleKeyDown, onImagePaste })` 是输入框的粘贴/按键包装器。

**触发条件有三条**（`m0845:141-199`）：

1. 真正的 paste 事件（`handlePaste`，`m0845:189`）；
2. 剪贴板图片快捷键（`ne`，`m0845:99-111` → 调 `mue`）；
3. **单次按键序列长度 > `VY`（800）** 被当成粘贴（`m0845:197`）——
   因为终端会把大段粘贴拆成一次 `key` 事件。`VY = 800` 见 `m0549:26`。

核心分流逻辑 `L()`（`m0845:141`）：

```js
let oe = Q.split(/ (?=\/|[A-Za-z]:\)/).flatMap(s => s.split("\n")).filter(s => s.trim()),
    M = [], Y = [];
for (let j of oe) if (Pds(j)) M.push(j); else Y.push(j);   // M=图片路径, Y=普通文本
if (onImagePaste && M.length > 0) {
  Promise.all(M.map(item => Ods(item, model, readWithPermission)))
    .then(le => { … onImagePaste(base64, {mediaType, filename, dimensions, sourcePath}) … });
  return;                                                   // 图片路径不落进文本
}
H(Q);                                                        // 普通文本原样进输入框
```

几个容易忽略的细节：

- 分隔符是 **"空格 + (`/` 或 `C:\`)"**，再按换行拆。所以 `看一下 /tmp/a.png` 能拆出来，
  而 `foo/bar.png` 这种相对路径不会被当成独立 token。
- 混排时：图片走 `onImagePaste`，剩余文本 `H(Y.join("\n"))` 回填输入框（`m0845:175`）。
- 全部读取失败且是 macOS 截图手势（`/TemporaryItems/…screencaptureui…/Screenshot`）时，
  回退到剪贴板读图（`m0845:178`）。
- 权限拒绝（`"refused"`）时**不回显路径文本**，只打点 `input_image_drag: read_withheld`
  （`m0845:178`）——避免把用户没授权的路径泄露给模型。

### 3.4 paste store 与占位符

`onImagePaste` 的实现是 `bs()`（`m0863_0xf79bb6c.js:2144`）：

```js
function bs(getPastes, insertText, { onMinted }) {
  return (content, T) => {
    let C = getPastes(), id = hC(void 0, C);
    onMinted?.(id);
    C[id] = { id, type: "image", content, mediaType: T?.mediaType ?? "image/png",
              filename: T?.filename, dimensions: T?.dimensions, sourcePath: T?.sourcePath };
    insertText(new mce(`${K9(id)} `));      // 插入占位符
  };
}
```

占位符格式（`m0353_0xeb8bf2a.js:1396`）：

```js
function K9(e) { return `[Image #${e}]`; }
```

paste 条目的 schema 在 `m0353:1382-1390`（`type: "text" | "image"`）。
文本粘贴用 `[Pasted text #N]` / `[Pasted text #N +M lines]`（`m0353:1393`）。

**这是 UI 层与消息层的解耦点**：输入框里只有一行 `[Image #1]`，
真实 base64 存在 paste store 里，提交时才展开。

### 3.5 提交：占位符 → `image` block（`Ln`，`m0683_0xf582a39.js:2352`）

用户按回车后，`Ln()` 把文本 + 附件组装成一条 user 消息。图片处理在 `m0683:2378-2450`：

```js
// ① 入参里已经是 image block 的（IDE/程序化注入）
for (let B of e) {
  if (B.type !== "image") { x.push(B); continue; }
  let N = await lLt(B, limits);            // 预算；失败降级为文本块
  x.push(N.block);
  if (N.block.type !== "image") continue;  // 已降级
  let ft = Lee(N.dimensions ?? {}); if (ft) Be.push(ft);
  let id = hC(Ny(e) ?? void 0, pastedContents);
  if (B.source.type === "base64") Fe[id] = { id, type: "image", content: B.source.data, dimensions: N.dimensions };
}

// ② paste store 里的图片（用户粘贴）
let Ge = pastedContents ? Object.values(pastedContents).filter(iYe) : [];
let G = await NXo({ ...pastedContents, ...Fe }, storeImagePath);   // 落盘，返回 id→路径
for (let { id, resized, originalDimensions, sourcePath } of De) {
  Ce.push(resized.block);
  if (resized.block.type !== "image") continue;
  ie.push(id);
  let N = Lee(resized.dimensions, sourcePath);   // [Image: …]
  if (N) Be.push(N);
}
```

要点：

- **`jb()` 对用户图做与 `Read` 相同的预算**（尺寸 2000 / 长边 1568 / 字节 500 KiB）。
- **`Lee(dimensions, sourcePath)` 第二参数是磁盘路径**，所以提示里会带 `source: /…`。
- 尺寸/路径提示收集进 `Be`，最后 `gs(B, Be)`（`m0683:2737`）统一压成
  **一条** `isMeta: true, turnCompanion: true` 的文本消息：

  ```js
  function gs(e, s) {
    if (s.length > 0) e.messages.push(Re({
      content: s.map(r => ({ type: "text", text: r })), isMeta: !0, turnCompanion: !0
    }));
    return e;
  }
  ```

- `imagePasteIds`（`m0683:1697`）随消息一起存，用于 UI 回显 `[Image #N]` 与占位符对账。

### 3.6 图片落盘（`NXo`，`m0681_0xf57b9e8.js:114`）

CC 会把用户粘贴的图片再写一份到磁盘，并把路径告诉模型：

```js
async function NXo(e, r) {          // e: {id → paste条目}, r: 存路径的回调
  for (let [n, s] of Object.entries(e)) if (s.type === "image") {
    let d = await q(s); if (d) o.set(Number(n), d);
  }
  …
}
```

- 文件名：`<id>.<ext>`，扩展名由 **magic bytes** 决定（`sft(content.slice(0,64))` → `CGn` 映射，`m0681:105`）。
- 写入方式：`open(path,"wx",0o600)` + `datasync` + rename，**原子且 0600**（`m0681:150-165`）。
- 内存 Map 上限 **200** 条，超出按插入序淘汰（`m0681:166`，`fe = 200`）。
- 目录不可用时 `D()` 返回 null，整条"落盘"功能静默关闭（`m0681:69`）。

落盘后，模型收到的提示是（`m0459:211881`，`T6n`）：

> The attached image is also saved at "/path/x.png". Use this file path only if a task needs the image file
> itself (for example, copying it into a file you are creating) — **the image is already visible to you,
> so do not read the file just to view it.**

**这句话值得原样抄进你的系统提示。** 它同时解决两个问题：
(a) 模型知道有路径可用；(b) 模型不会为了"看图"再浪费一次 `Read` 调用。

### 3.7 旁路：`inlined_image_paths`（只给路径，不给图）

有些入口（斜杠命令 / 程序化传入）走的是另一条路：`paths` 非空时生成一个
`inlined_image_paths` 附件（`m0683:2569`、`m1592_0x10166c92.js:364`），
渲染成 meta 文本（`m0459:212125`）：

```js
inlined_image_paths: (e) => {
  let n = Array.isArray(e.paths) ? e.paths.filter(r => typeof r === "string") : [];
  if (n.length === 0) return [];
  return [Re({ content: od(T6n(n)), isMeta: !0 })];
},
```

`T6n` 就是 3.6 里那段"已保存到…不要重复读"的文本。
**这条路径不内联图片本体**，只把路径告诉模型。真正的图仍要靠 `Read`。
——所以如果你只想做最小实现，可以完全跳过 `inlined_image_paths`。

### 3.8 旁路：`edited_image_file`（读过的图被改了）

CC 会监视"本会话读过的文件"。图片文件在磁盘上变化时，重新读一遍并注入新图
（生产：`m0459:178382`，调 `Bfo` 得到新的 image 结果）。渲染端 `m0459:212363` 返回 `[]`
（即走默认的附件渲染，不再额外生成文本）。这是"上下文里的图过期"问题的解法，属进阶项。

---

## 4. 两条路径的共同终点：消息结构

### 4.1 用户消息（入口 1）

```json
{
  "role": "user",
  "content": [
    { "type": "text", "text": "帮我看下这个报错 [Image #1]" },
    { "type": "image",
      "source": { "type": "base64", "media_type": "image/png", "data": "iVBORw0KGgo…" } }
  ]
}
```

紧随其后是 CC 自己追加的 meta 消息（`isMeta`，不显示给用户）：

```json
{ "role": "user", "content": [
  { "type": "text", "text": "[Image: source: /home/u/.claude/images/1.png, original 1920x1080, displayed at 1568x882. Multiply coordinates by 1.22 to map to original image.]" }
] }
```

### 4.2 工具结果（入口 2）

```json
{
  "role": "user",
  "content": [{
    "type": "tool_result",
    "tool_use_id": "toolu_01ABC…",
    "content": [
      { "type": "image",
        "source": { "type": "base64", "media_type": "image/png", "data": "iVBORw0KGgo…" } }
    ]
  }]
}
```

**`content` 必须是数组**。写成字符串（`"content": "[image: /path/a.png]"`）模型永远看不见图。

### 4.3 如果你的后端是 OpenAI 兼容协议（如 DeepSeek）

CC 用的是 Anthropic 原生格式。多数 OpenAI 兼容网关要求换成：

```json
{ "type": "image_url",
  "image_url": { "url": "data:image/png;base64,iVBORw0KGgo…" } }
```

两者只是**编码形状不同**，语义一致：`image_url.url` 支持 `data:` URI 内联 base64。
复刻时建议在"消息序列化层"做一次转换，而不是在工具里区分后端：

```text
工具/粘贴 → 统一中间表示 {kind:"image", mediaType, base64}
         → 序列化层按后端渲染成 Anthropic image block 或 OpenAI image_url
```

⚠️ **必须实测的一点**：很多 OpenAI 兼容网关**只在 `user` 消息里接受 `image_url`，
不接受 `tool` 角色消息里的图片**。如果你的网关如此，做法是：

```text
tool 消息:   { role:"tool", tool_call_id, content: "Image loaded: /x/y.png (1568x882)" }
紧随其后的 user 消息: { role:"user", content:[
    {type:"text", text:"[Image: original 1920x1080, displayed at 1568x882 …]"},
    {type:"image_url", image_url:{url:"data:image/png;base64,…"}} ] }
```

这正是 CC 的 `newMessages`（2.6 节）思路——**图片本体与说明文本分成两条消息**。
CC 是 Anthropic 协议，不需要这个绕法，但它把"图"和"说明"分开的结构，
恰好让这种降级实现变得自然。

---

## 5. 复刻到你自己的 agent：最小改动清单

### 5.1 先定位你现在的 bug

你描述的现象是：

- 用户在输入框粘贴**路径** → 你的 agent 能看见图；
- agent 执行中**自己知道路径** → 看不见。

按 CC 的机制反推，你的"看不见"几乎只可能是下面之一：

| 可能原因 | 判定方法 |
| --- | --- |
| `Read` 工具对图片只返回了文本（如 `"binary file, 12345 bytes"`） | 看工具返回值里有没有 base64 |
| 工具结果序列化时把数组 `content` 拼成了字符串 | 抓一次实际请求体 |
| 消息构造只保留 `text` 类型的 part，把 `image` part 丢了 | 同上 |
| 网关不接受 `tool` 消息里的图片 | 换到 `user` 消息试试 |
| 图片超过后端大小/像素上限被静默丢弃 | 用一张小图对照 |

### 5.2 场景 2（agent 主动看图）——按优先级

1. **`Read` 工具加图片分支**（对应 `m0459:173373`）：
   - 后缀 ∈ `{png,jpg,jpeg,gif,webp}`，或后缀为空且 magic bytes 命中；
   - 读字节 → 校验 magic → 缩放/压缩 → base64；
   - 返回结构化结果 `{kind:"image", mediaType, base64, dimensions, originalSize}`，
     **不要返回字符串**。
2. **工具结果允许数组**：把 image part 放进 `tool_result.content`（Anthropic）
   或按 4.3 的方式转成 `user` 消息（OpenAI 兼容）。
3. **工具描述里写明能看图**（`m0281:4206`、`4214` 原话可直接用）：
   > Reads images (PNG, JPG, …) and presents them visually.
   > If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path.
4. **加一条尺寸/路径 meta 提示**（`Lee` + `T6n`）：告诉模型缩放比例、原图尺寸、文件路径，
   以及"已经看见了，不要为了看图再读一次"。
5. **降级不阻断**：magic 不符 / 压缩失败时返回可读的错误文本，而不是抛异常中断整轮。

### 5.3 场景 1（用户输入）——按优先级

你已经有"粘贴路径→解析成图"，缺的是完整性。CC 的做法：

1. **两个来源都要接**：
   - 剪贴板图片数据（截图直接粘）；
   - 粘贴文本里的路径（`/abs/a.png`、`"C:\x\y.jpg"`、多个路径混排）。
2. **分隔规则**：按 `空格 + (/ 或 盘符)` 与换行切 token，逐个用后缀白名单判定
   （`m0845:148-152`）。不要用"整段字符串是不是路径"。
3. **占位符 + 存储分离**：输入框只放 `[Image #N]`，base64 存在旁路 store，
   提交时才展开（`m0863:2144`、`m0353:1396`）。
4. **提交时统一过一遍预算**，与 `Read` 用同一套参数（`jb` / `lLt`）。
5. **权限**：粘贴路径的读取也要走权限判定；拒绝时**不要**把路径文本回显给模型
   （`m0845:178`、`m0459:59247`）。
6. **安全边界**：
   - 只认后缀白名单，且**必须校验 magic bytes**（后缀可以骗人）；
   - 剥成对引号（`m0549:130`）；
   - 相对路径不要瞎解析（CC 只接受与剪贴板同名的情况）。

### 5.4 图片预处理参数（照抄即可）

```text
1. 读字节，0 字节 → 报错
2. magic bytes 判定真实格式；不在 {png,jpeg,gif,webp} → 报错（附内容诊断）
3. 缩放：长边 ≤ 1568；同时 ≤ 2000x2000；按 28px patch 估算 token ≤ 25000
4. 编码：优先保持原格式；png 过大可转 jpeg(quality 90 起递减) 或 webp
5. 字节预算：raw ≤ 512000（500 KiB）；超了继续压；base64 ≤ 5 MiB
6. 兜底：resize(400,400, fit=inside) + jpeg(quality=20)
7. 返回 base64 + 真实 mediaType + 原始尺寸 + 显示尺寸
```

如果你的多模态后端对图片有更小的限制（常见 5 MB base64 / 2048px），
把第 3、5 步的常量换成你的值即可，**结构不用改**。

---

## 6. 可直接复制的代码骨架

> 与 CC 实现等价的最小版本。变量名按 CC 证据重命名（S/A 级：后缀正则、magic 常量、
> 尺寸常量均为源码直读；函数名为功能命名）。

### 6.1 magic bytes 嗅探（对应 `m0359:17`）

```js
const EXT_SET = new Set(["png", "jpg", "jpeg", "gif", "webp"]);
const EXT_RE  = /\.(png|jpe?g|gif|webp)$/i;

function sniffImage(buf) {
  if (buf.length < 4) return null;
  if (buf[0]===137 && buf[1]===80 && buf[2]===78 && buf[3]===71) return "image/png";
  if (buf[0]===255 && buf[1]===216 && buf[2]===255) return "image/jpeg";
  if (buf.length>=6 && buf[0]===71 && buf[1]===73 && buf[2]===70 && buf[3]===56
      && (buf[4]===55||buf[4]===57) && buf[5]===97) return "image/gif";
  if (buf.length>=12 && buf[0]===82 && buf[1]===73 && buf[2]===70 && buf[3]===70
      && buf[8]===87 && buf[9]===69 && buf[10]===66 && buf[11]===80) return "image/webp";
  return null;
}
```

### 6.2 工具：图片分支（对应 `cOn` + `Bfo`）

```js
async function readFileTool({ file_path }) {
  const ext = path.extname(file_path).toLowerCase().slice(1);
  const buf = await fs.readFile(file_path);

  let isImage = EXT_SET.has(ext);
  if (!isImage && ext === "") isImage = sniffImage(buf.subarray(0, 16)) !== null;

  if (isImage) {
    if (buf.length === 0) throw new Error(`Image file is empty: ${file_path}`);
    const realType = sniffImage(buf);
    if (realType === null) {
      throw new Error(
        `File has an image extension but its content is not a valid PNG/JPEG/GIF/WebP. ` +
        `Detected: ${diagnose(buf)}. Use file(1) on the path to confirm.`
      );
    }
    const out = await budgetImage(buf, realType);   // 见 6.4
    return {
      kind: "image",
      mediaType: out.mediaType,
      base64: out.base64,
      dimensions: out.dimensions,
      originalSize: buf.length,
      filePath: file_path,
    };
  }
  // … 文本分支 …
}
```

### 6.3 工具结果序列化（两种后端）

```js
// Anthropic Messages API
function toAnthropicResult(toolUseId, result) {
  if (result.kind === "image") {
    return {
      type: "tool_result",
      tool_use_id: toolUseId,
      content: [{
        type: "image",
        source: { type: "base64", media_type: result.mediaType, data: result.base64 },
      }],
    };
  }
  return { type: "tool_result", tool_use_id: toolUseId, content: result.text };
}

// OpenAI 兼容（图片放进紧随其后的 user 消息）
function toOpenAiResults(toolCallId, result) {
  const msgs = [];
  if (result.kind === "image") {
    msgs.push({ role: "tool", tool_call_id: toolCallId,
                content: `Image loaded: ${result.filePath} (${describeDims(result.dimensions)})` });
    msgs.push({ role: "user", content: [
      { type: "text", text: dimensionNote(result) },
      { type: "image_url",
        image_url: { url: `data:${result.mediaType};base64,${result.base64}` } },
    ]});
  } else {
    msgs.push({ role: "tool", tool_call_id: toolCallId, content: result.text });
  }
  return msgs;
}
```

### 6.4 预算管线（对应 `K8e` + `WTo` + `zTo` + `Lee`）

```js
const LIMITS = {
  maxWidth: 2000, maxHeight: 2000,
  longEdge: 1568, patch: 28, maxImageTokens: 25000,
  maxRawBytes: 512000, maxBase64Bytes: 5242880,
  targetRawSize: 3932160,
};

const estimateTokens = (w, h) => Math.ceil(w / LIMITS.patch) * Math.ceil(h / LIMITS.patch);

function fitDims(w, h, L) {
  if (w > L.maxWidth)  { h = Math.round(h * L.maxWidth / w);  w = L.maxWidth; }
  if (h > L.maxHeight) { w = Math.round(w * L.maxHeight / h); h = L.maxHeight; }
  const long = Math.max(w, h);
  if (long > L.longEdge) {
    const s = L.longEdge / long;
    w = Math.max(1, Math.round(w * s));
    h = Math.max(1, Math.round(h * s));
  }
  let scale = 1;                              // token 预算：必要时继续等比缩小
  while (estimateTokens(w, h) > L.maxImageTokens && scale > 0.05) {
    scale *= 0.9;
    w = Math.max(1, Math.round(w * scale));
    h = Math.max(1, Math.round(h * scale));
  }
  return [w, h];
}

async function budgetImage(buf, mediaType) {
  const meta = await sharp(buf).metadata();
  const [dw, dh] = fitDims(meta.width, meta.height, LIMITS);
  const resized = (dw === meta.width && dh === meta.height)
    ? buf : await sharp(buf).resize(dw, dh, { fit: "inside" }).toBuffer();

  let out = resized, type = mediaType;
  if (out.length > LIMITS.maxRawBytes) {
    for (const q of [90, 80, 70, 60, 50]) {      // 对应 WTo 的递减压缩
      const j = await sharp(resized).jpeg({ quality: q }).toBuffer();
      if (j.length < out.length) { out = j; type = "image/jpeg"; }
      if (j.length <= LIMITS.maxRawBytes) break;
    }
  }
  if (out.length > LIMITS.maxRawBytes) {          // 兜底（对应 m0459:173864）
    out = await sharp(resized).resize(400, 400, { fit: "inside" }).jpeg({ quality: 20 }).toBuffer();
    type = "image/jpeg";
  }
  return {
    base64: out.toString("base64"),
    mediaType: type,
    dimensions: { originalWidth: meta.width, originalHeight: meta.height,
                  displayWidth: dw, displayHeight: dh },
  };
}

function dimensionNote(r) {
  const d = r.dimensions;
  const scale = (d.originalWidth / d.displayWidth).toFixed(2);
  const parts = [];
  if (r.filePath) parts.push(`source: ${r.filePath}`);
  if (d.originalWidth !== d.displayWidth || d.originalHeight !== d.displayHeight) {
    parts.push(`original ${d.originalWidth}x${d.originalHeight}, ` +
               `displayed at ${d.displayWidth}x${d.displayHeight}. ` +
               `Multiply coordinates by ${scale} to map to original image.`);
  }
  return parts.length ? `[Image: ${parts.join(", ")}]` : "";
}
```

### 6.5 输入框：粘贴路径 → 图片

```js
const IMAGE_PATH_RE = /\.(png|jpe?g|gif|webp)$/i;
const stripQuotes = s =>
  ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'")))
    ? s.slice(1, -1) : s;

function isImagePath(token) { return IMAGE_PATH_RE.test(stripQuotes(token.trim())); }

async function handlePastedText(text) {
  const tokens = text
    .split(/ (?=\/|[A-Za-z]:\)/)     // 空格后紧跟 / 或盘符
    .flatMap(s => s.split("\n"))
    .filter(s => s.trim());

  const imageTokens = tokens.filter(isImagePath);
  const textTokens  = tokens.filter(t => !isImagePath(t));

  if (imageTokens.length === 0) return { text, images: [] };

  const images = [];
  for (const tok of imageTokens) {
    const p = stripQuotes(tok.trim());
    if (!path.isAbsolute(p)) continue;             // CC 只接受绝对路径
    const buf = await fs.readFile(p).catch(() => null);
    if (!buf || buf.length === 0) continue;
    const type = sniffImage(buf);
    if (!type) continue;                           // 后缀骗人，忽略
    const out = await budgetImage(buf, type);
    images.push({ ...out, sourcePath: p });
  }
  return { text: textTokens.join("\n"), images };
}
```

---

## 7. 坑清单

| 坑 | 后果 | 规避 |
| --- | --- | --- |
| `tool_result.content` 用字符串 | 模型看不见图 | 必须用数组，图片块进数组 |
| 只按后缀判图片 | 假图片（HTML 错误页）被当图发 | 必查 magic bytes |
| 不校验 magic 就转 base64 | 模型收到坏图，可能整轮报 400 | 校验后再编码 |
| 图片太大不压缩 | 400 / 静默丢弃 | 先缩放再编码 |
| 缩放后不告诉模型比例 | 模型按显示尺寸坐标去点原图，全错 | 附 `Multiply coordinates by X` |
| 用户粘贴路径时整段字符串当路径 | `看看 /tmp/a.png 这个` 解析失败 | 按分隔规则切 token |
| 相对路径瞎解析 | 读到意外文件 | 只认绝对路径 |
| 权限拒绝后回显路径文本 | 泄露用户未授权路径 | 拒绝时静默丢弃 |
| 为了看图重复 Read | 浪费一次调用 + 上下文 | 提示 "already visible, do not read" |
| 只支持剪贴板图片，不支持路径 | 用户复制路径没用 | 两条都要接 |
| 网关只接受 `user` 里的图片 | tool 消息里的图被丢弃 | 按 4.3 拆成两条消息 |
| BMP/HEIC/AVIF | CC 不支持 | 需要就自己加转换 |

---

## 8. 源码坐标总表

| 功能 | 模块:行 |
| --- | --- |
| `Read` 工具对象 | `m0459_0xecff32a.js:172704` |
| 检索提示 | `m0459:172712` |
| 工具描述文本 | `m0281_0xe9549eb.js:4180` / `4184` |
| 读文件主逻辑 `cOn` | `m0459:173311` |
| 图片分支判定 | `m0459:173373` |
| 图片读取器 `Bfo` | `m0459:173800` |
| 结果 → `tool_result` | `m0459:172932` |
| 图片结果组装 `mAe` | `m0459:173255` |
| `[Image: …]` 提示 `Lee` | `m0396_0xec9de37.js:993` |
| 尺寸缩放 `Y` / token 缩放 `q` | `m0396:227` / `211` |
| 预算主函数 `K8e` | `m0396:350` |
| 字节预算 `WTo` | `m0396:585` |
| 用户图块预算 `jb` | `m0396:609` |
| WebP 重编码 `zTo` | `m0396:762` |
| 图片块降级 `lLt` | `m0396:813` |
| magic bytes `Ih` | `m0359_0xec50ce3.js:17` |
| 内容诊断 `Krn` | `m0359:30` |
| 图片扩展名白名单 `scn` | `m0144_0xe71d3d2.js:14` |
| 预算常量 `aL` / `xne` | `m0086_0xe58fa2b.js:388` / `357` |
| 远程上限 `BUr` | `m0086:368` |
| patch 估算 `dbt` | `m0086:383` |
| 输出 token 上限 `rB` / `JIo` | `m0155_0xe7edd37.js:43` / `16` |
| 剪贴板读图 `mue` | `m0549_0xf39f1f6.js:85` |
| 平台命令表 | `m0549:48` |
| 路径后缀正则 `WRt` | `m0549:129` |
| 是否图片路径 `Pds` | `m0549:138` |
| 读粘贴路径 `Ods` | `m0549:149` |
| 粘贴处理器 `Ant` | `m0845_0xf76ba90.js:59` |
| 路径/文本分流 `L` | `m0845:141` |
| paste 存储 `bs` | `m0863_0xf79bb6c.js:2144` |
| 占位符 `K9` | `m0353_0xeb8bf2a.js:1396` |
| paste 条目 schema | `m0353:1382` |
| 用户消息组装 `Ln` | `m0683_0xf582a39.js:2352` |
| 用户图预算/提示 | `m0683:2418-2450` |
| meta 提示合并 `gs` | `m0683:2737` |
| 图片落盘 `NXo` / `q` | `m0681_0xf57b9e8.js:114` / `132` |
| "已保存，勿重复读" `T6n` | `m0459:211881` |
| `inlined_image_paths` 附件 | `m0683:2569`、`m1592_0x10166c92.js:364` |
| `inlined_image_paths` 渲染 | `m0459:212125` |
| `edited_image_file` 生产 | `m0459:178382` |
| 粘贴路径权限判定 `X8s` | `m0459:59247` |

---

## 9. 一句话总结

Claude Code 的"看图"不是一个工具，而是**两个入口 + 一个终点**：
用户粘贴和 `Read` 工具都把图片变成 Anthropic 原生 `image` content block，
塞进消息的 `content` 数组，再配一条 `[Image: …]` 的 meta 文本告诉模型尺寸和路径。

你的 agent 缺的是"终点"那一步：**让工具结果能携带结构化图片，而不是字符串**。
把 `Read` 的返回值改成 `{kind:"image", mediaType, base64}`，
序列化时按后端渲染成 `image` / `image_url` 块，场景 2 就通了；
场景 1 你已经有了，补上 magic 校验、占位符存储分离和权限拒绝静默丢弃即可。

> 证据等级说明：本文所有常量、正则、函数行为均为源码直读（S 级）；
> 函数名为按功能标注（原标识符已 minify），不影响行为核对。
