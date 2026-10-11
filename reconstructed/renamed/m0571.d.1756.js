/* ==========================================================================
 * m0571.d   [m0571_0xcddb07e.js @ 1756]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function d(r, a) {
  let n = r.runId ?? a;
  return {
    runId: n,
    taskId: r.taskId ?? n,
    timestamp: r.timestamp ?? new Date(0).toISOString(),
    script: r.script ?? "",
    scriptPath: r.scriptPath,
    args: r.args,
    result: r.result,
    agentCount: r.agentCount ?? 0,
    logs: r.logs ?? [],
    durationMs: r.durationMs ?? 0,
    error: r.error,
    summary: typeof r.summary === "string" ? r.summary : void 0,
    workflowName: typeof r.workflowName === "string" ? r.workflowName : void 0,
    title: r.title,
    status: r.status ?? (r.error ? "failed" : "completed"),
    startTime: r.startTime ?? (Date.parse(r.timestamp ?? "") || 0),
    phases: r.phases,
    defaultModel: r.defaultModel,
    workflowProgress: r.workflowProgress ?? [],
    totalTokens: r.totalTokens ?? 0,
    totalToolCalls: r.totalToolCalls ?? 0
  };
}
