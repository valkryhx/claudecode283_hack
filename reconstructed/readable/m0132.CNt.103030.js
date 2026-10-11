/* ==============================================================================
 * m0132.CNt   [m0132_0xc24a4bb.js @ 103030]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 103030
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function CNt(e, t) {
  if (typeof e === "string") return $Vn(e);
  if (!Array.isArray(e) && !gN(e)) return e;
  if (t.copies.has(e)) return t.copies.get(e);
  if (t.depth >= hFe * FVn || t.nodes >= yFe * FVn) return e;
  let r = Array.isArray(e) ? e.map((a, f) => [String(f), a]) : Object.entries(e);
  t.copies.set(e, e), t.nodes += 1, t.depth += 1;
  let n = r.map(([a, f]) => [t.isKeyed ? $Vn(a) : a, CNt(f, t)]);
  t.depth -= 1;
  let s = n.some(([a, f], m) => a !== r[m]?.[0] || f !== r[m]?.[1]),
    i = Array.isArray(e) ? n.map(([, a]) => a) : Object.fromEntries(n),
    p = s ? i : e;
  return t.copies.set(e, p), p
}
