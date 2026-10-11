/* ==============================================================================
 * m0227.Ce   [m0227_0xc482590.js @ 15598]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 15598
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ce(e, n, r) {
  let s = n === "" ? "the root object" : `the sub-schema at ${Be(n)}`,
    E = S(e, "required");
  if (T(r, "object") && Array.isArray(E) && S(e, "additionalProperties") === !1 && S(e, "patternProperties") === void 0) {
    let _ = S(e, "properties"),
      v = G(_) ? _ : {};
    for (let h of E)
      if (V(h) && !Object.hasOwn(v, h)) return {
        reason: "required_property_forbidden",
        message: `${s} lists "${ie(h)}" in required but does not declare it in properties, and additionalProperties is false, so no object can satisfy it \u2014 declare the property or drop it from required`
      }
  }
  let l = S(e, "enum");
  if (r !== void 0 && Array.isArray(l) && l.length > 0) {
    if (!l.some((_) => ee(r, _))) return {
      reason: "enum_type_mismatch",
      message: `${s} declares type ${ne(r)} but none of its enum values has that type, so no value can satisfy it \u2014 change type to match the enum values or vice versa`
    }
  }
  let g = S(e, "const");
  if (g !== void 0) {
    if (r !== void 0 && !ee(r, g)) return {
      reason: "const_mismatch",
      message: `${s} declares type ${ne(r)} but its const value does not have that type, so no value can satisfy it`
    };
    if (Array.isArray(l) && l.length > 0 && je(g) && !l.some((_) => _ === g)) return {
      reason: "const_mismatch",
      message: `${s} has a const value that is not one of its enum values, so no value can satisfy it`
    }
  }
  let p = Ie(e, r);
  if (p !== void 0) return {
    reason: "crossed_bounds",
    message: `${s} has ${p}, so no value can satisfy it`
  };
  return
}
