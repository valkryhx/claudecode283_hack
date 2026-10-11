/* ==========================================================================
 * m1569.qr   [m1569_0xdceb889.js @ 49052]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  });
}
