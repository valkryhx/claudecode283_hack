/* ==========================================================================
 * m1569.Qt   [m1569_0xdceb889.js @ 58232]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
Qt = f(() => u({
  status: z(["async_launched", "remote_launched", ...(he() ? [he().RUN_OP_STATUS] : [])]),
  taskId: o(),
  taskType: z(["local_workflow", "remote_agent"]).optional().describe("TaskType of the registered background task \u2014 'local_workflow' for in-process runs, 'remote_agent' when remote:true dispatches to CCR. Set on all new writes; absent only on transcripts written before this field existed."),
  workflowName: o().optional().describe("meta.name from the workflow script \u2014 same value as task_started.workflow_name. Set on all new writes; absent only on transcripts written before this field existed."),
  runId: o().optional().describe("Local workflow run identifier for resumeFromRunId. Absent for remote_launched (the CCR session URL is the resume handle there) and on transcripts written before this field existed."),
  summary: o().optional(),
  transcriptDir: o().optional().describe("Directory where subagent transcripts are written during execution"),
  scriptPath: o().optional().describe("Path to the persisted workflow script for this invocation. Editable via Write/Edit; pass back as `scriptPath` to re-run without resending the script."),
  sessionUrl: o().optional().describe("CCR session URL when status is remote_launched"),
  warning: o().optional().describe("Non-blocking heads-up (e.g. local git state diverges from the pushed branch the cloud session will clone)"),
  error: o().optional().describe("Set if syntax check failed"),
  ...(he()?.runOpOutputFields() ?? {})
}))
