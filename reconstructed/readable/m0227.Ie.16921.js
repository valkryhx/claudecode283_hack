/* ==============================================================================
 * m0227.Ie   [m0227_0xc482590.js @ 16921]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 16921
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ie(e, n) {
  if (T(n, "number") || T(n, "integer") || De(n, "number", "integer")) {
    let r = R(S(e, "minimum")),
      s = R(S(e, "exclusiveMinimum")),
      E = R(S(e, "maximum")),
      l = R(S(e, "exclusiveMaximum")),
      g = s !== void 0 && (r === void 0 || s >= r) ? {
        value: s,
        exclusive: !0,
        keyword: "exclusiveMinimum"
      } : r !== void 0 ? {
        value: r,
        exclusive: !1,
        keyword: "minimum"
      } : void 0,
      p = l !== void 0 && (E === void 0 || l <= E) ? {
        value: l,
        exclusive: !0,
        keyword: "exclusiveMaximum"
      } : E !== void 0 ? {
        value: E,
        exclusive: !1,
        keyword: "maximum"
      } : void 0;
    if (g !== void 0 && p !== void 0 && (g.value > p.value || g.value === p.value && (g.exclusive || p.exclusive))) return `${g.keyword} ${g.value} and ${p.keyword} ${p.value}, which admit no number`
  }
  if (T(n, "string")) {
    let r = D(e, "minLength", "maxLength");
    if (r !== void 0) return r
  }
  if (T(n, "array")) {
    let r = D(e, "minItems", "maxItems");
    if (r !== void 0) return r
  }
  if (T(n, "object")) {
    let r = D(e, "minProperties", "maxProperties");
    if (r !== void 0) return r;
    let s = R(S(e, "maxProperties")),
      E = S(e, "required");
    if (s !== void 0 && Array.isArray(E)) {
      let l = U(E, V);
      if (l > s) return `${l} required properties but maxProperties ${s}`
    }
  }
  return
}
