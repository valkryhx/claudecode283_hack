/* ==========================================================================
 * m0132.kVn   [m0132_0xc24a4bb.js @ 141215]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function kVn(e, t, o) {
  function r(s) {
    if (ddn(s)) return s;
    let {
        name: i,
        message: p
      } = e(s),
      a = new De(p === "" ? i : p);
    if (p !== "" && i !== a.name) a.thrownName = i;
    return a;
  }
  function n(s) {
    if (ddn(s)) return t.makeError(s.name, s.message);
    if (s === null || typeof s !== "object" && typeof s !== "function" || o(s)) return s;
    let {
      name: p,
      message: a
    } = s;
    return t.makeError(typeof p === "string" ? p : "Error", typeof a === "string" ? a : l(s));
  }
  return {
    fromEnvironment: r,
    intoEnvironment: n
  };
}
