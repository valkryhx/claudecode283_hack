// annotate.mjs — prepend a header comment to each raw/ function and re-beautify into readable/.
// Usage: node annotate.mjs   (run after extract.mjs)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import beautify from "js-beautify";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// tag -> { zh, ids }
const NOTES = {
  "m0862.Fy": { zh: "Workflow 脚本解析器：强制 export const meta 为第一条语句，且 meta 必须是纯字面量；返回 {meta, scriptBody}。", ids: "e=脚本文本  n=validateBody  t=maxBytes" },
  "m0862.O":  { zh: "meta 纯字面量递归求值器：只接受 Literal / Array(禁稀疏禁spread) / Object / TemplateLiteral(禁插值) / 负数字面量。", ids: "e=AST 节点" },

  "m0869.t7": { zh: "脚本编译：先 Function() 做语法检查 → rr() 转译 → new vm.Script(filename='workflow.js')，禁用 import()。", ids: "e=scriptBody  r={bindWords}" },
  "m0869.Io": { zh: "主执行循环：建 VM 上下文 → runInContext 跑脚本 → 与 abort signal 竞速 → 序列化返回值。", ids: "e=vmScript  r=引擎  s=进度回调  g=opts(journal/budget/…)" },
  "m0869.kSt": { zh: "后台任务生命周期：注册任务 → 跑 Io() → 写 output 快照 → 完成/失败 → 发 task-notification。call() 返回 async_launched 后真正跑的就是它。", ids: "e={taskId,workflowRunId,script,vmScript,toolUseContext,…}" },
  "m0869.jo": { zh: "agent(prompt,opts)：算缓存键 → resume 命中则直接返回 → 并发信号量 No 排队 → 真实 spawn Bo → 结果写 journal。", ids: "M=prompt  U=opts  ee=AbortSignal?" },
  "m0869.Ko": { zh: "parallel(thunks)：有 barrier（Promise.allSettled 等全部完成）。单个 thunk 抛错→该项 null，调用本身不 reject。", ids: "M=thunk 数组" },
  "m0869.zo": { zh: "pipeline(items,...stages)：无 barrier。每个 item 独立走完所有 stage，item 之间并行。", ids: "M=items  U=stages" },
  "m0869.wTn": { zh: "建 VM 上下文并注入 DSL：agent/parallel/pipeline/workflow/args/budget/log/phase/console/setTimeout。codeGeneration 禁 strings/wasm。", ids: "r=引擎  s=进度回调" },
  "m0869.Oo": { zh: "引擎 hooks 工厂：维护 agent 计数 ge、failures N、phase 注册表 ye/Ft、缓存、预算检查等，返回注入 VM 的一组函数。", ids: "e=task  r=上下文  s=进度  F=journal  A=budget" },

  "m0869.Lr": { zh: "并发上限公式：min(16, max(2, CPU-2))。", ids: "e=可用 CPU 数" },
  "m0869.et": { zh: "agent 总数上限检查（1000）：超限发 tengu_workflow_agent_cap_exceeded 并抛 Mo。", ids: "ge=当前 agent 计数  xo=1000" },
  "m0869.ct": { zh: "token 预算检查：spent>=total 时发 tengu_workflow_budget_cap_exceeded 并抛 Wo。", ids: "A=budget 对象  X=已告警标志" },
  "m0869.Mo": { zh: "WorkflowAgentCapError：agent() 数量超 1000 时抛出的错误类。", ids: "Ur=错误文案常量" },
  "m0869.Wo": { zh: "WorkflowBudgetExceededError：token 预算超限时抛出的错误类。", ids: "e=spent  r=total" },

  "m0869.lo": { zh: "缓存键：链式 sha256(prevKey \\0 prompt \\0 optsSerialize)，前缀 'v2:'。改动前面任一 agent → 后面所有 key 都变（最长未变前缀命中）。", ids: "e=prompt  r=opts  s=上一个 key" },
  "m0869.mr": { zh: "opts 序列化：只取影响结果的字段白名单(schema/model/effort/isolation/agentType/disallowedTools/bashCommandClamp)，排序后稳定序列化。label/phase 不在内。", ids: "e=opts" },
  "m0869.ao": { zh: "journal 行折叠：把 [{type:result|started|failed}] 折成 {results:Map, started:Map, failed:Set}。", ids: "e=journal 行数组" },
  "m0869.Gt": { zh: "journal.jsonl 读写类：append / load / 目录就绪。", ids: "path=journal 路径" },

  "m0869.Bo": { zh: "真实 agent spawn —— 与 Claude Code 宿主耦合最深的接缝（agentDefinitions、权限规则、工具运行时、MCP）。复刻时这一段要用自己的 agent runner 替换。", ids: "M=idx  U=prompt  ee=label  Oe=phase" },
  "m0869.Zr": { zh: "进度批量上报：16ms 批量窗口 / 250ms 节流 / 10s 强制刷新，合并进 workflowProgress。", ids: "e={onBatch,onSdkEmit}" },
  "m0869.tsr": { zh: "子 workflow 拒绝桩：子 workflow 里调用 workflow() 直接 reject（只能嵌一层）。", ids: "" },
  "m0869.yo": { zh: "子 workflow 执行：加载子脚本 → 编译 → 建 childCtx → 注入 agent/parallel/pipeline/workflow(拒绝桩)/args → 跑。共享并发/计数/abort/预算。", ids: "e=childEngine  g=nameOrRef  f=args" },
  "m0869.nsr": { zh: "子 phase 命名器：同一名字第 N 次出现追加 ' #N'。", ids: "" },
  "m0869.F7r": { zh: "adopted workflow resume 入口：读脚本 → 校验 scriptSha256 内容锚 → 重新 parse+compile → 进 kSt。", ids: "e={taskId,workflowRunId,scriptPath,scriptSha256,…}" },
  "m0869.No": { zh: "agent spawn 并发信号量实例：No = Ms(Ot, Bo)，Ot = 默认并发或 CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS。", ids: "" },

  "m0242.Ms": { zh: "并发信号量：limit + 等待队列，acquire/release 包住异步函数。整个模块仅此一物。", ids: "i=limit  s=被包函数  e=在跑数  n=等待队列  o=acquire  t=release" },

  "m1569.inputSchema": { zh: "Workflow 工具入参 schema（getter，委托 Zt()）。", ids: "" },
  "m1569.validateInput": { zh: "入参校验（按序拦截）：gate → runId 校验 → named-only 限制 → scriptPath 可读性 → resume 校验 → 解析 → 确定性闸门（禁 Date.now/Math.random/new Date）。", ids: "r=input  n=ctx" },
  "m1569.checkPermissions": { zh: "权限对话框：返回 behavior:'ask'（Review dynamic workflow before running），按脚本/名字匹配 allow/deny，allow 命中直接放行。", ids: "r=input  n=ctx" },
  "m1569.call": { zh: "编译 + 落盘 + 异步启动：算 runId/taskId → 编译 → 建转录目录 → 持久化 run 状态 → 注册后台任务 kSt → 立即返回 {status:'async_launched',…}。", ids: "r=input  n=ctx" },
};

const rawDir = path.join(ROOT, "raw");
const rdDir = path.join(ROOT, "readable");
const bopts = { indent_size: 2, max_preserve_newlines: 1, brace_style: "collapse", end_with_newline: true };
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));

const line = "=".repeat(78);
for (const m of manifest) {
  const raw = fs.readFileSync(path.join(rawDir, m.base), "utf8").replace(/\n$/, "");
  const note = NOTES[m.tag] || { zh: "(no note)", ids: "" };
  const head = [
    `/* ${line}`,
    ` * ${m.tag}   [${m.file} @ ${m.offset}]`,
    ` * ${"-".repeat(74)}`,
    ` * 作用: ${note.zh}`,
    note.ids ? ` * 标识: ${note.ids}` : null,
    ` * 原文: claudecode283/modules/${m.file}  字符偏移 ${m.offset}`,
    ` * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。`,
    ` * ${line} */`,
  ].filter(Boolean).join("\n");
  const out = beautify.js(head + "\n" + raw + "\n", bopts);
  fs.writeFileSync(path.join(rdDir, m.base), out);
}
console.log(`annotated ${manifest.length} files into readable/`);
