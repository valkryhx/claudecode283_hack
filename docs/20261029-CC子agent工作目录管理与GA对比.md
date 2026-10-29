# CC 子 agent 工作目录管理（软提示 + 代码硬切换）与 GA 对比

日期：2026-10-29
对象：claudecode283（v2.1.283）与 claudecode303（v2.1.303）全部子 agent 生成路径
目的：回答"CC 是否用『prompt 软提示 + 代码硬管理』管理子 agent 工作目录；GA 是否对齐；要不要进一步改 GA 源码"。

## 1. 结论

CC 对所有"会产生文件的子 agent"统一采用同一套双机制：

1. 代码硬切换（硬管理）：给子 agent 建一个独立 session/project，把它的 `cwd` 硬绑定到目标目录（worktree 或显式 cwd）；之后该 agent 的所有文件/Shell 操作都在这个 cwd 下解析。
2. prompt 软提示（仅在需要翻译路径时）：只在"继承了父上下文但 cwd 变了"（isolated worktree）或"多个写能力 agent 共享同一目录"时，追加一小段自然语言，告诉模型当前目录是什么、继承上下文里的路径要怎么换算。

关键点：CC 没有把"仓库绝对路径"写进任何 prompt；绝对 cwd 只出现在代码绑定（`withProject({cwd})` / spawn `cwd` 字段）里。prompt 里的路径一律是"你的 worktree 根 / 父目录"这类语义化引用，由代码在运行时注入真实路径。

## 2. CC 证据（283 源码坐标）

### 2.1 workflow 子 agent（m0869）

- prompt 软提示（仅 worktree 时追加），readable `m0869.Bo.48492.js:193-196`：

  ```
  You are running in an isolated git worktree at `<worktreePath>` (a separate working copy of the repo).
  Changes you make here do NOT affect the main working directory (`<mainCwd>`) or other agents.
  Work normally - the worktree will be cleaned up automatically if you made no changes, or preserved for review if you did.
  ```

- 代码硬切换，readable `m0869.Bo.48492.js:541-545`：

  ```js
  function Qt(E, be, de, ue) {
    let V = D.session.withProject({ cwd: fn });      // fn = Je?.worktreePath
    return v_e(vs(V).cwd, () => qo(V, E, be, de + Dn, ue));
  }
  ```

  即：子 agent 的整个执行被包在 `cwd = worktreePath` 的 project 里。

- worktree 路径同时作为 `worktreePath` 传入子 query（`m0869.Bo.48492.js:335`），并在缓存键里用 `fn ?? oe()`（worktree 或父 cwd）参与区分。

### 2.2 Agent 工具 / Agent Team 子 agent（m0511）

- schema 直接暴露 `cwd` 参数，`m0511_0xcd25473.js:335`：

  ```
  cwd: Absolute path to run the agent in. Overrides the working directory for all filesystem and
       shell operations within this agent. Mutually exclusive with isolation: "worktree".
  ```

- 目录软提示生成函数 `Xyr(parentCwd, worktreePath)`（`m0357_0xc63ba04.js:64053-64055`）：

  ```
  You've inherited the conversation context above from a parent agent working in <parentCwd>.
  You are operating in an isolated git worktree at <worktreePath> - same repository, same relative file
  structure, separate working copy. Paths in the inherited context refer to the parent's working directory;
  translate them to your worktree root. ...
  ```

- 组装顺序（`m0511_0xcd25473.js:878-880`, `948-950`）：先按需 push 上面这段软提示，再
  `cwd_3 = cwd_2 ?? Q?.worktreePath`，最后 `session.withProject({ cwd: cwd_3 })`。二者互斥由代码保证
  （`m0511:666`：同时给 cwd 和 worktree 直接抛 `AgentPreconditionError`）。

### 2.3 共享目录并发写的软提示（m0357）

- `m0357_0xc63ba04.js:135787`（主 agent 的 Agent 工具说明）：

  ```
  When dispatching two or more agents that will write or edit files in the same repository,
  give EACH isolation: "worktree" - parallel agents sharing a working directory overwrite each other's work.
  ```

- `m0357_0xc63ba04.js:135727-135728`（运行期注入给子 agent 的 note，`Eho`/`Tho`）：

  ```
  Note: another write-capable agent is already running in this same working directory, and parallel agents
  sharing a checkout can overwrite each other's work. Edit only the files your task requires,
  re-read a file right before changing it, and do not revert or overwrite changes you did not make.
  ```

  这段的触发条件是 `Cho()`（`m0357:135741`）：当前 spawn 未隔离、且存在另一个 running 的同目录写能力 agent。
  也就是说 CC 用"目录身份 + 是否存在同目录并发写者"这个**代码事实**去决定要不要发软提示，而不是让模型自己猜。

## 3. 303 复核

同一套机制在 v2.1.303 仍在，相关字符串/符号分散到新的模块号（303 不是 283 的平移，必须按字符串/导出名复核）：

- `isolated git worktree` 提示仍存在：`claudecode303/modules/` 的 m0459 / m0645 / m0743 / m1064 / m1400。
- `withProject`（cwd 硬绑定）仍存在：m0017 / m0621 / m1064 / m1510 / m1593 / m1826 / m1864 / m2394 / m2408。
- 结论：CC 283 -> 303 没有改变"软提示 + 代码硬切换"这一模式，说明它是稳定设计而非临时补丁。

## 4. GA 现状对比

GA 的 workflow 子 agent 已经具备同构骨架：

| 能力 | CC | GA 现状 | 评价 |
| --- | --- | --- | --- |
| cwd 硬绑定到 run 工作区 | `withProject({cwd})` | `_child_cwd(job)` -> `GenericAgentHandler(cwd=...)`，`code_run` 子进程 cwd 也取自它 | 对齐 |
| worktree 隔离 + 路径翻译软提示 | 有（Xyr / m0869） | 有（`isolatedWorkspace:` 段，语义几乎逐字对应） | 对齐 |
| 共享目录并发写软提示 | 有（Eho/Tho，代码判定触发） | 有（`sharedWorkspace:` 段） | 对齐 |
| 绝对路径只出现在代码、不写进 prompt | 是 | 本次修复前**否**（主 agent 把 `D:\git_codes\GenericAgent` 写进子 prompt） | 已修 #1 |
| 子 agent 无法把产物写到 cwd 之外 | 默认靠 cwd 语义；显式 worktree 物理隔离 | 默认 `pathPolicy=unrestricted`，绝对路径可越界写；可显式 `workspace` 硬 ACL | 设计有分歧，但 CC 默认也不是全封闭（见 §5） |

结论：GA 的"代码硬管理"（cwd 绑定）本就正确；本次问题的性质与 CC 完全一致，都是**prompt 作者把绝对根写死**这一类软提示错误，不是 cwd 硬管理算错。区别只在 GA 默认 `unrestricted` 允许绝对路径越界落地，把"软提示写错"放大成了"文件真的写错地方"。

## 5. 需不需要进一步改 GA

按"性价比 -> 风险"排序，三条可选，建议只做 A/B，C 需评估兼容性：

### A（已完成，commit 13f2259）
skill 加"禁止硬编码仓库绝对根、用相对路径或 `${args.workspacePath}`"；子 agent prompt 增加 `pathRoot: workspacePath 为唯一产物根、任务文本里冲突绝对根以 workspacePath 为准`。这一步直接消除本次根因。

### B（建议做，小改、低风险、纯增益）
让"产物必须落地"变便宜、可默认。GA 其实已经有强制存在性校验，但只有 `executionContract.artifacts`（非 optional 项）会触发 `missing_artifact` 失败：

- `runtime._declared_artifact_paths` 只认 `executionContract.artifacts`（`runtime.py:1411`）；
- `scheduler._declared_write_paths` 拿 `writeScope`/`deliverables` 只做"产物归因/同路径冲突检测"，**不校验文件是否存在**（`scheduler.py:1404`）。

所以一次 run 若只写 `writeScope/deliverables`（本次真实 run 就是这样：`writeScope=['demos/primes_1_100.py']`，但 `executionContract=null`），即便产物没进工作区，job 仍 `succeeded`、run 仍 `succeeded`——这正是"不影响编排成功"的根因。

两点具体建议：
1. 文档（一句话级）：在 `references/api.md` / `artifacts.md` 说明"`writeScope`/`deliverables` 是许可与归因，不保证产物落地；要强制产物存在，用 `executionContract.artifacts`（非 optional）"。现在这块几乎没写，主 agent 不知道有这个闸。
2. 可选代码：把"产物必须落地"做成更易用的形式，例如提供 `deliverables` -> `executionContract.artifacts` 的便捷等价（带显式开关，避免把"名字型 deliverables"误当路径），让主 agent 不必懂 executionContract 也能 fail-closed。需注意 `deliverables` 文档是"paths or names"，`writeScope` 语义是"允许写"而非"必须写"，严格校验必须可 opt-in，不能无条件对二者生效。

### C（可选，跨模块，需评估）
提供"读写分离"的路径策略：默认**读放开、写限工作区**。CC 默认同样不是写死全部封闭（它靠 cwd 语义 + 隔离保证写不串），GA 若要更硬，可以对写类工具单独加 ACL 而读类放行。代价：`PathAclDecision` / `workspace_metadata` / `_path_policy` / prompt 文案 + 多处既有测试（默认 `unrestricted` 契约）都要改，属于设计级改动。按你"先 A 后看"的节奏，C 暂不建议马上做。

## 6. 一句话回答

CC 是"**代码硬切换 cwd（所有子 agent 通用）+ 仅在路径会变/并发写同目录时追加软提示**"，绝对路径从不进 prompt。GA 骨架已经一样；本次是 prompt 作者的软提示错误，被 GA 默认 `unrestricted` 放大。按 A（已修）+ B（建议）即可，C 作为后续可选。
