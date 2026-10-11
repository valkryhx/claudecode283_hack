/* ==============================================================================
 * m0869.F7r   [m0869_0xd12567a.js @ 88032]
 * --------------------------------------------------------------------------
 * 作用: adopted workflow resume 入口：读脚本 → 校验 scriptSha256 内容锚 → 重新 parse+compile → 进 kSt。
 * 标识: e={taskId,workflowRunId,scriptPath,scriptSha256,…}
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 88032
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function F7r(e) {
  let {
    taskId: r,
    workflowRunId: s,
    scriptPath: g,
    argsJson: f,
    startTime: w
  } = e, A = await RAo(g);
  if ("error" in A) throw new P(A.error, "adopted workflow script read failed");
  let F = A.script;
  if (e.scriptSha256 === void 0) throw new P("workflow was checkpointed without a content pin; resume via the Workflow tool", "adopted workflow missing scriptSha256");
  if (Yr("sha256").update(F).digest("hex") !== e.scriptSha256) throw new P("script content changed since it was approved; resume via the Workflow tool to re-approve", "adopted workflow scriptSha256 mismatch");
  let R = Fy(F);
  if ("error" in R) throw new P(`Invalid workflow script: ${R.error}`, "adopted workflow script parse failed");
  let ce = t7(R.scriptBody);
  if (!ce.ok) throw new P(`Workflow script compile failed: ${ce.error}`, "adopted workflow script compile failed");
  let W = f !== void 0 ? J(f) : void 0;
  for (let H of Object.values(e.toolUseContext.taskRegistry.all()))
    if (H.type === "local_workflow" && H.workflowRunId === s && H.status === "running") {
      e.toolUseContext.taskRegistry.remove(r);
      return
    } kSt({
    taskId: r,
    workflowRunId: s,
    script: F,
    scriptPath: g,
    args: W,
    meta: R.meta,
    vmScript: ce.vmScript,
    toolUseContext: e.toolUseContext,
    canUseTool: e.canUseTool,
    toolUseId: void 0,
    transcriptDir: uO(s),
    telemetry: {
      source: "adopt",
      name: y("custom"),
      description: y(""),
      scriptIsVerbatimBuiltIn: !1
    },
    isResume: !0,
    startTime: w
  })
}
