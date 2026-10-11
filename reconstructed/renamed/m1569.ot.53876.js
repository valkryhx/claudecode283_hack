/* ==========================================================================
 * m1569.ot   [m1569_0xdceb889.js @ 53876]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ot(e, r) {
  if (e.rows.length > 0) throw Error("replayWorldJournal: the world is not empty");
  let n = new Map(),
    s = new Map(),
    a = new Set();
  for (let h of r) switch (h.k) {
    case "put":
      n.set(h.addr, h);
      break;
    case "settled":
      s.set(h.addr, h);
      break;
    case "retracted":
      a.add(h.addr);
      break;
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
    if (R) if (k.status = R.status, R.status === "done") k.value = R.value;else k.error = R.error;
    if (a.has(h)) k.status = "retracted";else if (k.kind === "sub" && k.status === "live") k.status = "retracted";else if (k.status === "pending") k.status = "failed", k.error = "lost on resume";
    w.push(k);
  }
  return e.restore(w), w.length;
}
