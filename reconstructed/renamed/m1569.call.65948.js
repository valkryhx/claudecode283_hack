/* ==========================================================================
 * m1569.call  ->  call   [m1569_0xdceb889.js @ 65948]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async call(input, ctx) {
  let session = resolveToolContext(e, ctx),
    {
      parentMessage: parentMessage
    } = ctx;
  if (session.agentId !== void 0 && isStopPending(session.agentId)) throw trackEvent("subagent_launch", "workflow_spawner_stop_pending"), new WorkflowError("This agent has been stopped and its stop is still completing; it cannot launch workflows or act on existing runs.");
  if (typeof input.runId === "string") {
    let D = he();
    if (!D) throw new WorkflowError("runId is not a field of this tool here.");
    await lt(session);
    let ee = await D.callRunOp(input, session);
    if (ee) return {
      data: {
        status: D.RUN_OP_STATUS,
        taskId: "",
        runId: ee.runId,
        runOp: ee.runOp
      }
    };
  }
  if (input.resumeFromRunId) {
    let D = Pr(input.resumeFromRunId, session);
    if (D) throw new WorkflowError(D);
    let ee = await H7r(input.resumeFromRunId, input.scriptPath, session.storageV5, session.signal, session.toolState.get(RUN_STATE_KEY));
    if (ee !== null) throw new WorkflowError(ee);
  }
  let resolved = await resolveScript(input, session, session.storageV5);
  if ("error" in resolved) throw new WorkflowError(resolved.error);
  let {
      script: script,
      source: source,
      resolvedScriptPath: resolvedScriptPath
    } = resolved,
    R = source === "built-in" && resolved.scriptMatchesDefinition === !0,
    parsed = parseWorkflowScript(script);
  if ("error" in parsed) throw new WorkflowError(`Invalid workflow script: ${parsed.error}`);
  let runId = input.resumeFromRunId ?? `wf_${makeId().slice(0, 12)}`,
    taskId = makeTaskId("local_workflow"),
    F = parsed.meta.description,
    O = parsed.meta.name,
    compiled = compileScript(parsed.scriptBody);
  if (!compiled.ok) return trackEvent("task_local_workflow", "compile_failed"), {
    data: {
      status: "async_launched",
      taskId: taskId,
      taskType: "local_workflow",
      workflowName: O,
      runId: runId,
      summary: F,
      error: `${compiled.error}${vr(input, session.tools)}`
    }
  };
  let transcriptDir = workflowTranscriptDir(runId),
    scriptFilePath = resolvedScriptPath ?? persistScript(O, runId, script, session.storageV5);
  persistRunState(runId, scriptFilePath, script, session.toolState.get(RUN_STATE_KEY));
  let X = input.scriptPath ? void 0 : source,
    ne = input.scriptPath ? "scriptPath" : source ?? "inline",
    ge = HKt(O, X, R),
    we = FKt(parsed.meta.description, X, R);
  if (i("tengu_workflow_launched", {
    invocation_mode: y(input.scriptPath ? "scriptPath" : input.name ? "named" : "inline"),
    workflow_source: c(ne),
    workflow_name: ge,
    workflow_description: we,
    phase_count: parsed.meta.phases?.length ?? 0,
    launched_from_subagent: session.agentId != null,
    has_args: input.args != null,
    is_resume: input.resumeFromRunId != null,
    script_size_chars: script.length
  }), input.resumeFromRunId == null) qr({
    toolState: session.toolState,
    taskRegistry: session.taskRegistry,
    name: vSt(X, R) ? xr(O) : void 0,
    runId: runId
  });
  let de = {
      workflowRunId: runId,
      script: script,
      scriptPath: scriptFilePath,
      args: input.args,
      meta: parsed.meta,
      vmScript: compiled.vmScript,
      toolUseId: session.toolUseId,
      transcriptDir: transcriptDir,
      telemetry: {
        source: ne,
        name: ge,
        description: we,
        scriptIsVerbatimBuiltIn: R
      },
      invokingRequestId: parentMessage?.requestId,
      parentPromptId: Gve(session.messages(), session.agentContext)
    },
    q = en(ctx),
    W = D => q(runBackgroundTask, D);
  if (input.resumeFromRunId) {
    let D = Pr(input.resumeFromRunId, session);
    if (D) throw trackEvent("task_local_workflow", "resume_collision"), new WorkflowError(D);
  }
  return W({
    ...de,
    taskId: taskId,
    isResume: input.resumeFromRunId != null
  }), {
    data: {
      status: "async_launched",
      taskId: taskId,
      taskType: "local_workflow",
      workflowName: O,
      runId: runId,
      summary: F,
      transcriptDir: transcriptDir,
      scriptPath: scriptFilePath
    }
  };
}
