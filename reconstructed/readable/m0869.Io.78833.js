/* ==============================================================================
 * m0869.Io   [m0869_0xd12567a.js @ 78833]
 * --------------------------------------------------------------------------
 * 作用: 主执行循环：建 VM 上下文 → runInContext 跑脚本 → 与 abort signal 竞速 → 序列化返回值。
 * 标识: e=vmScript  r=引擎  s=进度回调  g=opts(journal/budget/…)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 78833
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function Io(e, r, s, g = {}) {
  let f = Date.now(),
    w = [],
    A = (z) => {
      if (z.type === "progress" && z.data.type === "workflow_log" && w.length < Gr) w.push(z.data.message);
      g.onProgress?.(z)
    },
    F = g.journal ? await g.journal.load() : void 0,
    R = wTn(r, s, A, g.workflowRunId, g.onAgentController, g.args, g.seedPhaseTitles, g.tokenBudget, g.journal, F, g.workflowName, g.invokingRequestId, g.parentPromptId, g.onRateLimitWait),
    ce = qX(R.vmContext),
    W = r.abortController?.signal,
    H;
  try {
    let z = e.runInContext(R.vmContext, OCe(bSt, g.syncTimeoutMs)),
      ge = U6e(R.vmContext)(z);
    ge.catch(() => {});
    let ie = (W ? await Promise.race([ge, new Promise((u, n) => {
      let S = () => n(Error("Workflow aborted"));
      if (W.aborted) S();
      else W.addEventListener("abort", S), H = () => W.removeEventListener("abort", S)
    })]) : await ge).v;
    if (typeof ie === "function") throw Error("workflow result cannot be a function");
    let h = ie !== null && typeof ie === "object" ? R.hooks.sanitizeVMValue(ie) : ie,
      o;
    try {
      o = tm(h)
    } catch (u) {
      if (h === null || typeof h !== "object") throw u;
      o = JSON.parse(b(h, (n, S) => typeof S === "function" ? void 0 : S) ?? "null")
    }
    return b(o), {
      result: o,
      agentCount: R.hooks.getAgentCount(),
      logs: w,
      failures: R.hooks.getFailures(),
      ...R.hooks.getForeignArtifactContent() && {
        foreignArtifactContent: !0
      },
      durationMs: Date.now() - f
    }
  } catch (z) {
    let {
      name: ge,
      message: _e,
      stack: ie
    } = ce(z);
    if (ie) t(`Workflow script error stack trace:
${ie}`, {
      level: "error"
    });
    return {
      result: null,
      agentCount: R.hooks.getAgentCount(),
      logs: w,
      failures: R.hooks.getFailures(),
      ...R.hooks.getForeignArtifactContent() && {
        foreignArtifactContent: !0
      },
      durationMs: Date.now() - f,
      error: $ut({
        name: ge,
        message: _e,
        stack: ie
      })
    }
  } finally {
    H?.()
  }
}
