/* ==============================================================================
 * m1569.ot   [m1569_0xdceb889.js @ 53876]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 53876
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ot(e, r) {
  if (e.rows.length > 0) throw Error("replayWorldJournal: the world is not empty");
  let n = new Map,
    s = new Map,
    a = new Set;
  for (let h of r) switch (h.k) {
    case "put":
      n.set(h.addr, h);
      break;
    case "settled":
      s.set(h.addr, h);
      break;
    case "retracted":
      a.add(h.addr);
      break
  }
  let w = [];
  for (let h = 0; h < n.size; h++) {
    let g = n.get(h);
    if (!g) break;
    let k = {
        addr: h,
        kind: g.kind,
        fact: g.fact,
        by: g.by,
        in: g.in,
        at: g.at,
        status: g.status
      },
      R = s.get(h);
    if (R)
      if (k.status = R.status, R.status === "done") k.value = R.value;
      else k.error = R.error;
    if (a.has(h)) k.status = "retracted";
    else if (k.kind === "sub" && k.status === "live") k.status = "retracted";
    else if (k.status === "pending") k.status = "failed", k.error = "lost on resume";
    w.push(k)
  }
  return e.restore(w), w.length
}
