/* ==========================================================================
 * m0132.Mw   [m0132_0xc24a4bb.js @ 27232]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Mw(e, t) {
  if (e === void 0) return () => {};
  if (e.aborted) return t.abort(e.reason), () => {};
  let o = () => t.abort(e.reason);
  return e.addEventListener("abort", o, {
    once: !0
  }), () => e.removeEventListener("abort", o);
}
