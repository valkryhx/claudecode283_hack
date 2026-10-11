/* ==========================================================================
 * m0567.gsr   [m0567_0xcdd6311.js @ 2356]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function gsr(e, s, r) {
  if (s.length === 0) return;
  r.update(e, o => {
    if (o.status !== "running") return o;
    let n = [...o.workflowProgress],
      a = new Map();
    for (let l = 0; l < n.length; l++) {
      let g = n[l];
      if (g.type === "workflow_agent" || g.type === "workflow_phase") a.set(`${g.type}:${g.index}`, l);
    }
    let i = o.agentCount,
      u = !1;
    for (let l of s) if (l.type === "workflow_agent" || l.type === "workflow_phase") {
      let g = `${l.type}:${l.index}`,
        d = a.get(g);
      if (d !== void 0) n[d] = l;else a.set(g, n.length), n.push(l);
      if (l.type === "workflow_agent" && l.state === "start") i = Math.max(i, l.index);
    } else n.push(l), u = !0;
    if (u && n.length > j * 2) {
      let l = n.length - j,
        g = [];
      for (let d = 0; d < n.length; d++) {
        let c = n[d];
        if (l > 0 && c.type === "workflow_log") {
          l--;
          continue;
        }
        g.push(c);
      }
      n = g;
    }
    let w = 0,
      k = 0;
    for (let l of n) if (l.type === "workflow_agent") {
      if (l.tokens) w += l.tokens;
      if (l.toolCalls) k += l.toolCalls;
    }
    return {
      ...o,
      workflowProgress: n,
      progressVersion: o.progressVersion + s.length,
      agentCount: i,
      totalTokens: w,
      totalToolCalls: k
    };
  });
}
