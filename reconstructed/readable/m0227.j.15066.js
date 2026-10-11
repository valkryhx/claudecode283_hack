/* ==============================================================================
 * m0227.j   [m0227_0xc482590.js @ 15066]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 15066
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function j(e, n, r, s, E) {
  if (s <= 0 || --E.remaining < 0) return;
  if (!G(e) || Object.hasOwn(e, "$ref")) return;
  let l = $e(e),
    g = Ce(e, n, l);
  if (g !== void 0) return {
    ...g,
    scope: r ? "whole" : "subschema"
  };
  let p = S(e, "properties");
  if (Z(l, "object") && G(p)) {
    let v = S(e, "required"),
      h = new Set(Array.isArray(v) ? v.filter(V) : []),
      O = T(l, "object");
    for (let [w, me] of Object.entries(p)) {
      if (w === "__proto__") continue;
      let H = j(me, `${n}/properties/${Ve(w)}`, r && O && h.has(w), s - 1, E);
      if (H !== void 0) return H
    }
  }
  let _ = S(e, "items");
  if (Z(l, "array") && G(_)) return j(_, `${n}/items`, !1, s - 1, E);
  return
}
