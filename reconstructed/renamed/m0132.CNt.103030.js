/* ==========================================================================
 * m0132.CNt   [m0132_0xc24a4bb.js @ 103030]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  return t.copies.set(e, p), p;
}
