/* ==============================================================================
 * m1569.qr   [m1569_0xdceb889.js @ 49052]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 49052
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function qr({
  toolState: e,
  taskRegistry: r,
  name: n,
  runId: s,
  now: a = Date.now()
}) {
  if (n === void 0) return;
  let w = e.get(Jr).byName,
    h = w.get(n);
  if (w.set(n, {
      runId: s,
      at: a
    }), !h || a - h.at > $t) return;
  let g = e.get(xe).byId.get(h.runId);
  _("workflow_relaunch_soon", {
    name: c(n),
    seconds_since_prev: Math.round((a - h.at) / 1000),
    prev_state: c(g ? g.state() : At(r, h.runId)),
    prev_was_steered: g?.wasSteered ?? !1
  })
}
