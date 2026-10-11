/* ==========================================================================
 * m0573.x   [m0573_0xcde50bc.js @ 5780]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function x(e) {
  let n = nc() ? r2() : void 0;
  if (!n || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let r = ee().live;
      if (kGt(n), r.bootingWiredArms.size > 0) p("artifact_live_subscribe", "booting_consent_uncarried");
      hvt(r.inFlightSubscribes);
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: hb()?.adoptShellOutputRoot ?? xR(),
      mergeShellOutputReadRoots: A()
    };
  }
  let o = Y2(e),
    s = Object.values(e),
    h = s.filter(r => CGt(r, o)),
    u = s.filter(r => Xwn(r, o)),
    f = qwn(n),
    c = r => !ee().autoReact.userDisarmed && !eg(r.slug),
    y = kGt(n),
    S = L(Vwn([{
      entries: wGt(e),
      fallbackBasis: Date.now()
    }, {
      entries: y.filter(c),
      fallbackBasis: Date.now()
    }, {
      entries: GZn(n).filter(c),
      fallbackBasis: Date.now()
    }])),
    k = new Set(S.map(r => r.slug)),
    T = ee().live;
  if ([...T.bootingWiredArms.keys()].some(r => !k.has(r))) p("artifact_live_subscribe", "booting_consent_uncarried");
  return hvt(new Set([...k, ...T.inFlightSubscribes])), {
    shells: s.filter(r => Ywn(r, o) && r.agentId === void 0),
    workflows: h,
    agents: u,
    unresumedAgents: f.agents,
    unresumedWorkflows: f.workflows,
    frameLive: S,
    frameLiveTaskIds: Object.values(e).filter(r => Mj(r) && r.frameLive !== void 0 && k.has(r.frameLive.slug)).map(r => r.id),
    jobDir: n,
    agentTranscriptPaths: Object.fromEntries(u.map(r => [r.agentId, Ig(go(r.agentId))])),
    workflowTranscriptDirs: Object.fromEntries(h.map(r => [r.workflowRunId, uO(r.workflowRunId)])),
    projectTempDir: hb()?.adoptShellOutputRoot ?? xR(),
    mergeShellOutputReadRoots: A()
  };
}
