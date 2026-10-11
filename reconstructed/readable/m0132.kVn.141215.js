/* ==============================================================================
 * m0132.kVn   [m0132_0xc24a4bb.js @ 141215]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 141215
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function kVn(e, t, o) {
  function r(s) {
    if (ddn(s)) return s;
    let {
      name: i,
      message: p
    } = e(s), a = new De(p === "" ? i : p);
    if (p !== "" && i !== a.name) a.thrownName = i;
    return a
  }

  function n(s) {
    if (ddn(s)) return t.makeError(s.name, s.message);
    if (s === null || typeof s !== "object" && typeof s !== "function" || o(s)) return s;
    let {
      name: p,
      message: a
    } = s;
    return t.makeError(typeof p === "string" ? p : "Error", typeof a === "string" ? a : l(s))
  }
  return {
    fromEnvironment: r,
    intoEnvironment: n
  }
}
