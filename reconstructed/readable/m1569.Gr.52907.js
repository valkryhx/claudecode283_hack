/* ==============================================================================
 * m1569.Gr   [m1569_0xdceb889.js @ 52907]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 52907
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Gr(e) {
  let r = [],
    n = new Set,
    s = 0;
  for (let a of e) {
    if (!a) continue;
    let w;
    try {
      w = Vo(a)
    } catch {
      s++;
      continue
    }
    let h = Ut().safeParse(w);
    if (!h.success) {
      s++;
      continue
    }
    if (h.data.k === "put") {
      if (n.has(h.data.addr)) {
        s++;
        continue
      }
      n.add(h.data.addr)
    }
    r.push(h.data)
  }
  if (s > 0) t(`world journal: skipped ${s} malformed or invalid line(s)`, {
    level: "warn"
  });
  return {
    lines: r,
    skipped: s
  }
}
