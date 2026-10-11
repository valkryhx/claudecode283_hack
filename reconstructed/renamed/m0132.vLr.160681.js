/* ==========================================================================
 * m0132.vLr   [m0132_0xc24a4bb.js @ 160681]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function vLr(e) {
  if (!G(e)) return In;
  let {
      to: t,
      text: o
    } = e,
    r = typeof o === "string" && o.trim() !== "",
    n = typeof t === "string" ? t : Ja(t),
    s = typeof n === "string" && n.trim() !== "";
  return r && s ? void 0 : In;
}
