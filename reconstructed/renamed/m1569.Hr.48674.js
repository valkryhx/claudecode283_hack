/* ==========================================================================
 * m1569.Hr   [m1569_0xdceb889.js @ 48674]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Hr(e, r) {
  let n = new Map();
  for (let a of e.rows) {
    if (!wr(a) || a.status === "pending" || typeof a.fact.runId !== "string") continue;
    let w = n.get(a.fact.runId);
    if (w) w.push(a);else n.set(a.fact.runId, [a]);
  }
  let s = 0;
  for (let [a, w] of n) {
    if (r.byId.has(a)) continue;
    let h = w.at(-1);
    r.byId.set(a, tr.lost(a, e, h.addr, w.slice(0, -1).map(g => g.addr))), s++;
  }
  return s;
}
