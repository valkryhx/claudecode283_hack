# Claude Code `rewind`（检查点 / 撤销）实现剖析

> 坐标格式 `m0357_0xc63ba04.js @ 4087607` = **原文模块**（`claudecode283/modules/`）内第 4087607 个字符偏移。
> m0357 是 4.1MB 大 chunk，`deminify` 的 “>1MB 跳过” 规则跳过了它，所以 `reconstructed/deminified/` 里它仍是压缩名；
> 因此本文的 `@offset` 一律以**原文**为准。另有一套**改名后**的可读副本 `reconstructed/deminified-rewind/m0357_0xc63ba04.js`，
> 本文所有符号都给了它在那个文件里的**行号**（见 §12）。
> 本文基于 `reconstructed/deminified-rewind/`（rewind 已改名）对照 `claudecode283/modules/`（原文）写出。
> **`rewind` 不是"时间机器"，是"文件备份 + 消息历史回滚"两套机制的组合。**

---

## 0. 一句话结论

Claude Code 的 `rewind` 由**两层**组成：

1. **文件检查点（file-history）**：在**每次编辑前**把被改的文件备份到 `<configDir>/file-history/<sessionId>/`，
   按"消息 id"打成快照；`rewind` 时把文件恢复（或删除）到指定消息点。
2. **会话回滚（conversation）**：把消息历史截断到某个 `user_message_id`。

`/rewind`（别名 `checkpoint` / `undo`，快捷键 Esc-Esc）把这两者组合起来，让用户"回到之前某个点重来"。

**核心实现集中在 `m0357_0xc63ba04.js`（4.1MB 的大共享 chunk）**——它同时是 file-history 的实现体和
`/rewind` 命令的注册处。

---

## 1. 模块地图

| 模块 | 角色 |
| --- | --- |
| **`m0357_0xc63ba04.js`** | **file-history 核心实现**（track / snapshot / rewind / link-safety）+ `/rewind` 命令注册 |
| **`reconstructed/deminified-rewind/m0357_0xc63ba04.js`** | **上面这个模块的 rewind 可读化副本**（20 个 rewind 符号已改真名，见 §13） |
| `m1497_0xdb3b427.js` | file-history 公共 API 的 **re-export 桶**（只 `import` 再 `export`，无实现） |
| `m0025_0xbf5baa8.js` | 常量 **`fmt = 100`**（快照保留上限） |
| `m0094_0xc0d9ae5.js` | `rewindFiles` 结果的 **zod schema + 长描述**（最权威的字段语义） |
| `m0562_0xcdc0b22.js` | **SDK 侧 `rewindFiles()`**：gate → canRestore → dryRun / 真实执行 |
| `m1246_0xd50bcf5.js` | **SDK 客户端** `rewindFiles(user_message_id, {dryRun})` 控制请求 |
| `m1372_0xd781293.js` | **会话/队列侧**：rewind 事件、anchor 持久化、refusal heal |
| `m1785_0xdfc230b.js` | 引导文案（"/rewind, Esc-Esc"、"Undo anything"） |
| `m1478` / `m0601` / `m0129` | rewind UI 组件（选择回滚点） |

---

## 2. 数据模型（file-history state）

```js
FileHistoryState = {
  snapshots: [ { messageId, trackedFileBackups, timestamp, preCheckpoint? } ],
  trackedFiles: Set<absolutePath>,
  trackSequence: number,     // 编辑跟踪序号
  snapshotSequence: number,  // 快照序号
}

trackedFileBackups: {
  [absolutePath]: {
    backupFileName: string | null,  // null = 该检查点时文件不存在
    version: number,                // 从 1 起，按文件单调递增
    backupTime: Date,
    realParentDir?: string,         // 真实父目录（用于恢复时定位）
  }
}
```

- **备份文件名**：`Lsr()` @4097230 → `` `${sha256(绝对路径).slice(0,16)}@v${版本号}` ``
  校验正则 `Nsr = /^[0-9a-f]{16}@v\d+$/` @4097290。
- **`backupFileName === null` 是一个有意义的标记**：表示"打这个检查点时该文件**不存在**"，
  所以 rewind 到这一点应当**删除**该文件（而不是恢复）。
- **存储路径**：`$R()` @4097758 → `<configDir>/file-history/<sessionId>/<backupFileName>`。
- **快照保留上限 100**：`reduceFileHistoryState` 里 `D.length > fmt ? D.slice(-fmt) : D`，
  `fmt = 100`（定义在 `m0025_0xbf5baa8.js`）。

---

## 3. 写入链路：编辑 → 跟踪 → 快照

### 3.1 `fileHistoryTrackEdit` — `JGe` @4090405
每次**编辑文件前**调用（入参：`getState, dispatch, filePath, messageId`）：

1. `pR()`（是否启用）为假 → 只 dispatch `{kind:"touch"}` 返回。
2. 取最新快照；该文件已在**最新快照**或**任一历史快照**里 → 只 `touch`（避免重复备份）。
3. 否则 `uXt(filePath, 1)` 备份当前内容 → dispatch：
   `{ kind:"track", trackingPath, filePath, backup, messageId, isAddingFile }`。
   `isAddingFile = backup.backupFileName === null`（即这个文件是**新文件**）。

### 3.2 `fileHistoryMakeSnapshot` — `kfe` @4091137
对每个被跟踪文件打一个"快照"（入参：`getState, dispatch, messageId, opts`）：

1. 对每个 `trackedFile`：算出 **next version**（取历史最大版本 + 1）→ `uXt(绝对路径, 版本)` 备份。
2. 文件不存在 → 记 `{ backupFileName: null, version, backupTime, realParentDir }`（"删除"标记）。
3. 组装 `trackedFileBackups`，dispatch：
   `{ kind:"snapshot", messageId, trackedFileBackups, ...(opts.preCheckpoint && {preCheckpoint:true}) }`。
   `preCheckpoint` = "这是**编辑前**的快照"。

### 3.3 `reduceFileHistoryState` — `Jse` @4087607（reducer）
处理三种 action：

| action | 行为 |
| --- | --- |
| `track` | 把备份并进**最新快照**的 `trackedFileBackups`；把路径加入 `trackedFiles`；递增 `trackSequence`；写 delta（`Vmo`） |
| `snapshot` | **追加**新快照；若超过 `fmt=100` 则 `slice(-100)`，被淘汰的旧快照交给 `Psr()` @4087875 删掉其备份文件 |
| `touch` | 只递增 `trackSequence` |

遥测：`tengu_file_history_track_edit_success/failed`、`tengu_file_history_snapshot_success/failed`、
`tengu_file_history_backup_file_created`、`tengu_file_history_backup_deleted_file`。

---

## 4. 回滚链路：`fileHistoryRewind`

### 4.1 `fRt` @4092591（对外入口，入参 `getState, messageId`）
1. `pR()` 为假 → 直接返回。
2. `snapshots.findLast(s => s.messageId === messageId)`；找不到 → 抛
   `Error("The selected snapshot was not found")` + 遥测 `tengu_file_history_rewind_failed`。
3. 调 `Isr(state, snapshot)` @4094734 → `{ filesChanged, filesFailed, skippedLinks }`。
4. **若 `filesFailed.length > 0 && filesChanged.length === 0`** → 抛
   `RewindNoFilesRestoredError`（`class SQt` @4092570）：
   > `No files were restored: N file(s) failed (backup missing, or the file could not be updated)[, and M path(s) skipped for link safety]`
5. 成功 → 遥测 `tengu_file_history_rewind_success`，返回 `{ skippedLinks }`。

### 4.2 `Isr` @4094734（真正的恢复循环）
对每个 `trackedFile`：

1. `cue(路径)` 归一成绝对路径。
2. 取备份条目：`snapshot.trackedFileBackups[路径] ?? 从 state 里找最近的`。
3. `backupFileName === undefined` → 报错并**跳过**（计一次失败）。
4. **link-safety 检查 `$sr()`** → `verdict === "refused"` → `skippedLinks++` 并跳过（见 §5）。
5. `backupFileName === null` → **删除**该文件：
   - `ENOTDIR` / `ELOOP` / `EISDIR` → 拒绝删除（计入 `skippedLinks`）；
   - `EPERM` 且目标不是常规文件 → 拒绝删除；
   - 其他错误按需抛。
6. 否则：内容不同则 `Bsr(路径, 备份名, realParentDir)` 恢复：
   - `"restored"` → 计入 `filesChanged`；
   - `"refused"` → 计入 `skippedLinks`；
   - 其他 → 计入 `filesFailed`。

### 4.3 `mRt` @4093821（`fileHistoryCanRestore`）
`pR() && snapshots.some(s => s.messageId === messageId)` —— 只是"有没有这个检查点"。

### 4.4 `Mnt` @4093903（`fileHistoryGetDiffStats`，dry-run 预览）
对每个 trackedFile 算 `{filePath, stats:{insertions,deletions}}`，汇总成
`{ filesChanged: string[], insertions, deletions }`。**不落盘**，只预览。

---

## 5. link safety（最关键的安全设计）— `$sr` @4098721

rewind 会**写文件系统**，所以每个目标路径都要先过一道"链接安全"闸门，**拒绝触碰**：

| 拒绝原因（源码原文） | 含义 |
| --- | --- |
| `"destination is a symlink"` | 目标是符号链接 |
| `"destination is not a regular file"` | 不是常规文件 |
| `"destination is hard-linked (nlink=N)"` | 硬链接数 > 1 |
| `"destination path does not resolve (ELOOP\|ENOTDIR)"` | 路径解析失败 |
| `"parent path does not resolve (...)"` | **父目录**也解析失败 |

**目的**：防止 rewind 顺着符号链接/硬链接把文件写到工作区之外（或写到别的文件上）。
被拒绝的文件**不恢复也不删除**，只计入 `skippedLinks`。

> 这一条在 schema 里有权威描述（`m0094_0xc0d9ae5.js` @7076，常量 `Fo`），原文见 §8。

---

## 6. 备份的写与恢复

### 6.1 `uXt(filePath, version)` @4098149（备份）
- `Lsr()` 生成备份文件名 → `$R()` 得到备份路径；
- 读原文件 `hU(e)`；**文件不存在**（ENOENT）→ 返回 `{ backupFileName: null, version, ... }`（删除标记）；
- 是常规文件 → 复制到备份路径 `v1e(e, s)`，并保留原文件 mode（`Rsr(s, g.mode)`）；
- 遥测 `tengu_file_history_backup_file_created`。

### 6.2 恢复：硬链接优先，失败退回复制
`jsr()` @178951 区段显示：恢复优先用**硬链接**（`xsr`）；硬链接失败（跨设备/权限）→ 退回复制
（`v1e(..., COPYFILE_EXCL)`），并校验复制后的 size 一致（不一致抛 `IncompleteBackupCopyError`）；
Windows 上 **rename 会重试**（`mXt`，退避 `[100,200,400,800]ms`），因为杀软/同步工具常临时占用新文件。

---

## 7. 会话侧（`m1372_0xd781293.js`）

- 事件 `kind === "rewind"` 时调用 `declinedRedeliveries.closeAfterRewind()`（关掉"拒绝重投"的悬挂状态）。
- 回滚结果形状：`{ rewound, prefillText, precedingAssistantUuid, ... }`。
- 持久化失败文案：`"failed to persist rewind anchor"`；有 `rewind-refusal heal` 自愈逻辑。
- **控制协议**：收到 `subtype === "rewind_files"` 的请求 →
  `yS(request.user_message_id, getState(), request.dry_run ?? false)`。
- CLI 有 `--rewind-files` 参数。

---

## 8. SDK / 控制协议（对外 API）

### 8.1 结果 schema（`m0094` @7077，`PQ`）
```js
{
  canRewind: boolean,
  error?: string,
  filesChanged?: string[],
  insertions?: number,
  deletions?: number,
  skippedLinks?: number,     // 描述见下
}   // .describe("Result of a rewindFiles operation.")
```

`skippedLinks` 的官方描述（`m0094` @7076，常量 `Fo`，原文）：

> Count of tracked files NOT restored or deleted because a symlink, hard link, or other non-regular file
> was detected at the tracked path, its parent directory no longer resolves to where it pointed when the
> checkpoint was taken, or its backup could not be safely read. Only populated by a real (non-dryRun) rewind
> — on a dryRun response the field is never set and the preview counts do not reflect link-safety refusals.
> Absent or 0 on a real rewind means no link-safety refusals occurred; other per-file failures (for example a
> missing backup file) are not counted here; they are reported in telemetry, and when every differing file
> fails to restore the rewind itself fails (canRewind: false).

### 8.2 客户端（`m1246` @1545）
```js
async rewindFiles(user_message_id, s) {
  return Or("sdk_rewind_files", async () =>
    (await this.request({ subtype: "rewind_files", user_message_id, dry_run: s?.dryRun })).response);
}
```

### 8.3 服务端处理（`m0562` @3277）
```
无 turn          -> { canRewind:false, error:"rewindFiles: no turn received yet" }
未启用 fileHistory -> { canRewind:false, error:"File rewinding is not enabled." }
无该消息检查点    -> { canRewind:false, error:"No file checkpoint found for this message." }
dryRun           -> { canRewind:true, filesChanged, insertions, deletions }
真实执行          -> { canRewind:true, skippedLinks }
异常             -> { canRewind:false, error:`Failed to rewind: ${...}` }
```

### 8.4 已知约束（`m1246` @2457）
> `enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so
> rewindFiles() fails after a store-backed resume).`

即：**备份文件不随 session store 镜像**，所以"store 恢复的会话"上 rewind 会失败。

---

## 9. `/rewind` 命令注册（`m0357` @3053804）

```js
{
  description: "Restore the code and/or conversation to a previous point",
  name: "rewind",
  aliases: ["checkpoint", "undo"],
  argumentHint: "",
  type: "local",
  supportsNonInteractive: false,
  thinClientDispatch: "control-request",
  load: () => import("B:/~BUN/root/chunk-dfmfxxhy.js")   // UI 在另一个 chunk
}
```

---

## 10. Feature gate（`pR()` @4090154）

```js
function pR() {                      // fileHistoryEnabled()
  if (Lt()) return false;            // ← 某个总开关（未展开）
  if (Te()) return Msr();            // ← 某分支：走 SDK 专用开关
  return Mo("fileCheckpointingEnabled", true).value && !env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
}
function Msr() {                     // SDK 分支
  return env.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING && !env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
}
```

环境变量：`CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING`、`CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING`。

---

## 11. 全部遥测名（11 个）

```
tengu_file_history_track_edit_success      tengu_file_history_track_edit_failed
tengu_file_history_snapshot_success        tengu_file_history_snapshot_failed
tengu_file_history_backup_file_created     tengu_file_history_backup_file_failed
tengu_file_history_backup_deleted_file
tengu_file_history_rewind_success          tengu_file_history_rewind_failed
tengu_file_history_rewind_restore_file_failed
tengu_file_history_resume_copy_failed
```

---

## 12. 回查坐标表（双基准）

- **原文偏移**：`claudecode283/modules/m0357_0xc63ba04.js @ <n>`（deminify 前的字节偏移，稳定）。
- **可读副本行号**：`reconstructed/deminified-rewind/m0357_0xc63ba04.js` 里对应定义所在行。
- 用可读名搜 `deminified-rewind/`，用偏移搜 `modules/`，两边都能落到同一段代码。

| 可读名（已改） | 原压缩名 | 原文偏移 | 可读副本行号 |
| --- | --- | --- | --- |
| `reduceFileHistoryState` | `Jse` | 4087607 | 165597 |
| `pruneSnapshotBackups` | `Psr` | 4089528 | 165685 |
| `fileHistoryEnabled` | `pR` | 4090154 | 165704 |
| `fileHistoryTrackEdit` | `JGe` | 4090411 | 165712 |
| `fileHistoryMakeSnapshot` | `kfe` | 4091143 | 165769 |
| `RewindNoFilesRestoredError` | `SQt` | 4092570 | 165832 |
| `fileHistoryRewind` | `fRt` | 4092597 | 165833 |
| `fileHistoryCanRestore` | `mRt` | 4093821 | 165870 |
| `fileHistoryGetDiffStats` | `Mnt` | 4093909 | 165874 |
| `applyFileHistoryRewind` | `Isr` | 4094740 | 165917 |
| `shouldRestoreFile` | `dXt` | 4096338 | 165991 |
| `makeBackupFileName` | `Lsr` | 4097230 | 166048 |
| `resolveBackupPath` | `$R` | 4097758 | 166068 |
| `getFileHistoryEntry` | `Fsr` | 4097832 | 166073 |
| `createFileBackup` | `uXt` | 4098155 | 166100 |
| `checkPathLinkSafety` | `$sr` | 4098727 | 166139 |
| `restoreFileFromBackup` | `Bsr` | 4099797 | 166197 |
| `normalizeTrackedPath` | `cue` | 4102748 | 166338 |
| `fileHistoryRestoreStateFromLog` | `gRt` | 4102801 | 166342 |
| `copyFileHistoryForResume` | `wQt` | 4106825 | 166532 |
| `/rewind` 命令定义 | `FVo` | 3053804 | 122417 |

> 原文偏移 = 该符号定义在 `claudecode283/modules/m0357_0xc63ba04.js` 里的字节偏移（精确）；
> 可读副本行号 = `reconstructed/deminified-rewind/m0357_0xc63ba04.js` 里对应行（精确）。

---

## 13. 命名方法：rewind 符号的可读名从哪来

**一句话**：真名不是猜的，是从**模块的 `export { 压缩名 as 真名 }` 语句**里读出来的；
读不到的部分才按行为推断，并且**每一条都标了证据等级**。

### 13.1 最硬的证据：导出别名表（`m1497_0xdb3b427.js`）

`m0357` 是共享 chunk，它把自己导出的符号在 **`m1497`（re-export 桶）** 里重新导出。
Bun 打包器**不会混淆对外导出名**，所以 `m1497` 末尾这一行就是**权威真名映射**：

```js
// m1497_0xdb3b427.js（末尾）
export {
  SQt as RewindNoFilesRestoredError,
  wQt as copyFileHistoryForResume,
  mRt as fileHistoryCanRestore,
  pR  as fileHistoryEnabled,
  Mnt as fileHistoryGetDiffStats,
  kfe as fileHistoryMakeSnapshot,
  gRt as fileHistoryRestoreStateFromLog,
  fRt as fileHistoryRewind,
  JGe as fileHistoryTrackEdit,
  Jse as reduceFileHistoryState,
};
```

这条规则可复用：**任何 `export { x as Name }` / `export const Name = x` 都直接给出真名**，
是推断压缩名时优先级最高、成本最低的证据（无需理解函数体）。

### 13.2 次硬证据：字符串 / 属性名 / 遥测名

`m0357` 里函数体**没有被压缩的是字符串字面量和属性名**（Bun 不压属性名）。例如：

- `i("tengu_file_history_backup_file_created", ...)` → 该函数就是"创建备份"。
- `t("FileHistory: [Rewind] Refusing to touch ...")` → 该函数就是 link-safety 检查。
- `"destination is a symlink"` / `"destination is hard-linked (nlink="` → 直接写出拒绝原因。

所以给压缩函数命名时，**先在函数体里 grep 遥测名 / 日志文案**，几乎都能定位职责。

### 13.3 推断证据：调用点与返回值语义

拿不到导出名、也没有字符串锚点的内部 helper，用调用点推断（下表标注为"推断"）：

| 可读名 | 压缩名 | 证据 | 等级 |
| --- | --- | --- | --- |
| `reduceFileHistoryState` | `Jse` | m1497 导出别名 | 权威 |
| `fileHistoryEnabled` | `pR` | m1497 导出别名 | 权威 |
| `fileHistoryTrackEdit` | `JGe` | m1497 导出别名 | 权威 |
| `fileHistoryMakeSnapshot` | `kfe` | m1497 导出别名 | 权威 |
| `RewindNoFilesRestoredError` | `SQt` | m1497 导出别名 | 权威 |
| `fileHistoryRewind` | `fRt` | m1497 导出别名 | 权威 |
| `fileHistoryCanRestore` | `mRt` | m1497 导出别名 | 权威 |
| `fileHistoryGetDiffStats` | `Mnt` | m1497 导出别名 | 权威 |
| `fileHistoryRestoreStateFromLog` | `gRt` | m1497 导出别名 | 权威 |
| `copyFileHistoryForResume` | `wQt` | m1497 导出别名 | 权威 |
| `applyFileHistoryRewind` | `Isr` | 被 `fRt` 调用，返回 `{filesChanged,filesFailed,skippedLinks}`，遍历 `trackedFiles` 逐文件恢复 | 推断 |
| `restoreFileFromBackup` | `Bsr` | 入参 `(path, backupName, realParentDir)`，内部 `O_NOFOLLOW` 打开备份并写回目标 | 推断 |
| `shouldRestoreFile` | `dXt` | 比较目标/备份的 stat 与内容哈希，返回 boolean，被 `Isr` 当"是否需要恢复"用 | 推断 |
| `makeBackupFileName` | `Lsr` | 返回 `${sha256(path).slice(0,16)}@v${version}` | 推断 |
| `resolveBackupPath` | `$R` | 拼 `<configDir>/file-history/<sessionId>/<name>` | 推断 |
| `createFileBackup` | `uXt` | 读原文件、复制到备份路径、返回 `backupFileName` | 推断 |
| `checkPathLinkSafety` | `$sr` | 返回 `{verdict:"refused"\|"safe"}`，检查 symlink / nlink / 父目录 | 推断 |
| `getFileHistoryEntry` | `Fsr` | 取某路径的文件历史条目 | 推断 |
| `pruneSnapshotBackups` | `Psr` | 快照超 100 条时删旧备份文件 | 推断 |
| `normalizeTrackedPath` | `cue` | 被恢复循环用来把路径归一成绝对路径 | 推断 |

### 13.4 复现"真名"的通用流程（可直接套到其他模块）

1. **先找导出桶**：`grep -l "from \"B:/~BUN/root/chunk-<该模块>\"" modules/*.js`，
   再在这些文件里找 `export { ... as ... }` → 直接得到真名。
2. **再 grep 字符串锚点**：在目标函数体里搜 `tengu_*`、日志文案、错误类名、zod `.describe(...)`。
3. **再看调用点**：谁调用它、入参形状、返回值被怎么用。
4. **改名并复验**：用 `tools/rewind-rename.mjs` 的 `scope.rename` 做**绑定级**改名
   （只改该绑定所在作用域，同名不同作用域的绑定不受影响），改名后**重新解析** + 对比
   字符串/属性名/节点类型计数（见 §14）。

---

## 14. 可读化产物与复验

- **可读副本**：`reconstructed/deminified-rewind/m0357_0xc63ba04.js`
  （166665 行，5.4MB；20 个 rewind 符号已改真名，导出别名 `reduceFileHistoryState as Jse` 等**保持对外契约不变**）。
- **改名脚本**：`reconstructed/tools/rewind-rename.mjs`（作用域安全、改名后重解析、失败回退）。
- **改名报告**：`reconstructed/rewind-rename-report.json`（`renamed=20, skipped=0, fellBack=false`）。
- **语义复验**：`reconstructed/tools/verify-rewind-semantic.mjs`
  - 结果：字符串字面量 **0 差异**、属性名/类键 **0 差异**、除 `BlockStatement` 外节点类型 **0 差异**。
  - 唯一的 `BlockStatement +35` 与改名**无关**：是 Babel 重打印时为消解**悬垂 else** 补的大括号
    （用"只解析→重打印、不改名"的基线对照，同样 `+35`），语义等价。

复现命令（Git Bash）：

```bash
cd reconstructed/tools
/g/nodejs/node --max-old-space-size=8192 rewind-rename.mjs        # 生成可读副本 + 报告
/g/nodejs/node --max-old-space-size=8192 verify-rewind-semantic.mjs  # 语义复验
```

---

## 15. 仍未确定（诚实标注）

- `pR()` 里 `Lt()` / `Te()` 的具体语义（gate 的两个前置分支，名字是压缩名，无字符串锚点）。
- `checkPathLinkSafety` 父目录检查（`n !== void 0` 分支）里"向上逐级解析"的完整边界条件。
- 会话侧 `yS()`（把 rewind 请求落到消息历史）的完整实现。
- UI 层（`chunk-dfmfxxhy.js` 对应的模块未定位；模块名与 chunk 名无现成映射表）。
- `restoreFileFromBackup` 里 `O_NOFOLLOW` 之后的 Windows rename 重试细节（`mXt`）未逐行核对。
