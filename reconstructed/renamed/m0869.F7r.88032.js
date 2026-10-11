/* ==========================================================================
 * m0869.F7r  ->  resumeAdoptedWorkflow   [m0869_0xd12567a.js @ 88032]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function resumeAdoptedWorkflow(adopted) {
  let {
      taskId: taskId,
      workflowRunId: workflowRunId,
      scriptPath: scriptPath,
      argsJson: argsJson,
      startTime: startTime
    } = adopted,
    readResult = await readScriptFile(scriptPath);
  if ("error" in readResult) throw new WorkflowError(readResult.error, "adopted workflow script read failed");
  let script = readResult.script;
  if (adopted.scriptSha256 === void 0) throw new WorkflowError("workflow was checkpointed without a content pin; resume via the Workflow tool", "adopted workflow missing scriptSha256");
  if (createHash("sha256").update(script).digest("hex") !== adopted.scriptSha256) throw new WorkflowError("script content changed since it was approved; resume via the Workflow tool to re-approve", "adopted workflow scriptSha256 mismatch");
  let parsed = parseWorkflowScript(script);
  if ("error" in parsed) throw new WorkflowError(`Invalid workflow script: ${parsed.error}`, "adopted workflow script parse failed");
  let compiled = compileScript(parsed.scriptBody);
  if (!compiled.ok) throw new WorkflowError(`Workflow script compile failed: ${compiled.error}`, "adopted workflow script compile failed");
  let args = argsJson !== void 0 ? parseJson(argsJson) : void 0;
  for (let H of Object.values(adopted.toolUseContext.taskRegistry.all())) if (H.type === "local_workflow" && H.workflowRunId === workflowRunId && H.status === "running") {
    adopted.toolUseContext.taskRegistry.remove(taskId);
    return;
  }
  runBackgroundTask({
    taskId: taskId,
    workflowRunId: workflowRunId,
    script: script,
    scriptPath: scriptPath,
    args: args,
    meta: parsed.meta,
    vmScript: compiled.vmScript,
    toolUseContext: adopted.toolUseContext,
    canUseTool: adopted.canUseTool,
    toolUseId: void 0,
    transcriptDir: workflowTranscriptDir(workflowRunId),
    telemetry: {
      source: "adopt",
      name: gettext("custom"),
      description: gettext(""),
      scriptIsVerbatimBuiltIn: !1
    },
    isResume: !0,
    startTime: startTime
  });
}
