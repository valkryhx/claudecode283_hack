/* ==========================================================================
 * m0567.msr   [m0567_0xcdd6311.js @ 1985]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function msr(e, s) {
  let r = vm(e.taskId, "local_workflow", e.description, void 0),
    o = {
      ...r,
      startTime: e.startTime ?? r.startTime,
      type: "local_workflow",
      outputFile: ep(e.taskId),
      status: "paused",
      script: "",
      scriptPath: e.scriptPath,
      prompt: "",
      workflowRunId: e.workflowRunId,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      notified: !0
    };
  s.register(o);
}
