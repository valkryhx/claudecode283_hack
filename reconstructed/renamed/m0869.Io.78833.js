/* ==========================================================================
 * m0869.Io  ->  runWorkflowMainLoop   [m0869_0xd12567a.js @ 78833]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function runWorkflowMainLoop(vmScript, engine, onProgress, opts = {}) {
  let startTime = Date.now(),
    logs = [],
    collectProgress = z => {
      if (z.type === "progress" && z.data.type === "workflow_log" && logs.length < MAX_LOGS) logs.push(z.data.message);
      opts.onProgress?.(z);
    },
    journalState = opts.journal ? await opts.journal.load() : void 0,
    ctx = buildVmContext(engine, onProgress, collectProgress, opts.workflowRunId, opts.onAgentController, opts.args, opts.seedPhaseTitles, opts.tokenBudget, opts.journal, journalState, opts.workflowName, opts.invokingRequestId, opts.parentPromptId, opts.onRateLimitWait),
    settle = makeVmErrorFormatter(ctx.vmContext),
    abortSignal = engine.abortController?.signal,
    cleanup;
  try {
    let z = vmScript.runInContext(ctx.vmContext, makeRunOptions(DEFAULT_SYNC_TIMEOUT, opts.syncTimeoutMs)),
      ge = toPromise(ctx.vmContext)(z);
    ge.catch(() => {});
    let ie = (abortSignal ? await Promise.race([ge, new Promise((u, n) => {
      let S = () => n(Error("Workflow aborted"));
      if (abortSignal.aborted) S();else abortSignal.addEventListener("abort", S), cleanup = () => abortSignal.removeEventListener("abort", S);
    })]) : await ge).v;
    if (typeof ie === "function") throw Error("workflow result cannot be a function");
    let h = ie !== null && typeof ie === "object" ? ctx.hooks.sanitizeVMValue(ie) : ie,
      o;
    try {
      o = vmSerialize(h);
    } catch (u) {
      if (h === null || typeof h !== "object") throw u;
      o = JSON.parse(stableStringify(h, (n, S) => typeof S === "function" ? void 0 : S) ?? "null");
    }
    return stableStringify(o), {
      result: o,
      agentCount: ctx.hooks.getAgentCount(),
      logs: logs,
      failures: ctx.hooks.getFailures(),
      ...(ctx.hooks.getForeignArtifactContent() && {
        foreignArtifactContent: !0
      }),
      durationMs: Date.now() - startTime
    };
  } catch (z) {
    let {
      name: ge,
      message: _e,
      stack: ie
    } = settle(z);
    if (ie) logError(`Workflow script error stack trace:
${ie}`, {
      level: "error"
    });
    return {
      result: null,
      agentCount: ctx.hooks.getAgentCount(),
      logs: logs,
      failures: ctx.hooks.getFailures(),
      ...(ctx.hooks.getForeignArtifactContent() && {
        foreignArtifactContent: !0
      }),
      durationMs: Date.now() - startTime,
      error: toErrorInfo({
        name: ge,
        message: _e,
        stack: ie
      })
    };
  } finally {
    cleanup?.();
  }
}
