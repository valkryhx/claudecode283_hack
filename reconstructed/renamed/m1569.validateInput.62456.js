/* ==========================================================================
 * m1569.validateInput  ->  validateInput   [m1569_0xdceb889.js @ 62456]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async validateInput(input, ctx) {
  let session = _r(e, ctx);
  if (isAborted(session.signal)) return VALID;
  let disabledReason = workflowDisabledReason();
  if (disabledReason !== void 0) {
    let k = {
      kind: "feature_disabled",
      feature: "workflows",
      cause: disabledReason
    };
    return disabledReason === "managed_settings" ? {
      result: !1,
      message: "Dynamic workflows are disabled by managed settings (`disableWorkflows`).",
      errorCode: 5,
      remedy: k
    } : {
      result: !1,
      message: 'Dynamic workflows are not enabled for this session (org policy, launch gate, or the "Dynamic workflows" setting in /config).',
      errorCode: 6,
      remedy: k
    };
  }
  if (typeof input.runId === "string") {
    let k = he();
    if (!k) return {
      result: !1,
      message: "runId is not a field of this tool here.",
      errorCode: 9
    };
    await lt(session);
    let R = await k.validateRunOp(input, session);
    if (R) return R;
  }
  if (isNameOnlySession()) {
    let k = [input.script && "script", input.scriptPath && "scriptPath", input.resumeFromRunId && "resumeFromRunId", input.remote && "remote"].filter(R => Boolean(R));
    if (k.length > 0) return {
      result: !1,
      message: `This session restricts the Workflow tool to named workflows (${q7r} is set). Not allowed here: ${k.join(", ")}. Invoke as {name, args} only.`,
      errorCode: 8
    };
  }
  if (input.scriptPath) {
    let k = checkScriptPathReadable(input.scriptPath, session);
    if (k !== null) return {
      result: !1,
      message: k,
      errorCode: 15
    };
  }
  let w;
  if (input.resumeFromRunId) {
    let k = trackEvent(input.resumeFromRunId, session);
    if (k) return {
      result: !1,
      message: k,
      errorCode: 3
    };
    let R = await validateResume(input.resumeFromRunId, input.scriptPath, session.storageV5, session.signal, session.toolState.get(wSt));
    if (isAborted(session.signal)) return VALID;
    if (R.kind === "refused") return {
      result: !1,
      message: R.message,
      errorCode: 16
    };
    if (input.scriptPath) w = rsr(R, input.scriptPath);
  }
  let parsed = await resolveScript(input, session, session.storageV5);
  if ("error" in parsed && w !== void 0) parsed = await resolveScript({
    ...input,
    script: w
  }, session, session.storageV5);
  if (isAborted(session.signal)) return VALID;
  if ("error" in parsed) {
    if (input.name && !input.scriptPath) m("workflow_resolve", "not_found");
    return {
      result: !1,
      message: parsed.error,
      errorCode: 1
    };
  }
  if (input.name && !input.scriptPath) _("workflow_resolve");
  let g = parseWorkflowScript(parsed.script);
  if ("error" in g) return {
    result: !1,
    message: `Invalid workflow script: ${g.error}${vr(input, session.tools)}`,
    errorCode: 2
  };
  if (input.script && hasNondeterminism(g.scriptBody)) return {
    result: !1,
    message: `Workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.${vr(input, session.tools)}`,
    errorCode: 4
  };
  return {
    result: !0
  };
}
