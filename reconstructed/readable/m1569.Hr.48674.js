/* ==============================================================================
 * m1569.Hr   [m1569_0xdceb889.js @ 48674]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 48674
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Hr(e, r) {
  let n = new Map;
  for (let a of e.rows) {
    if (!wr(a) || a.status === "pending" || typeof a.fact.runId !== "string") continue;
    let w = n.get(a.fact.runId);
    if (w) w.push(a);
    else n.set(a.fact.runId, [a])
  }
  let s = 0;
  for (let [a, w] of n) {
    if (r.byId.has(a)) continue;
    let h = w.at(-1);
    r.byId.set(a, tr.lost(a, e, h.addr, w.slice(0, -1).map((g) => g.addr))), s++
  }
  return s
}
