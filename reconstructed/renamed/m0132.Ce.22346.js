/* ==========================================================================
 * m0132.Ce   [m0132_0xc24a4bb.js @ 22346]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ce(e) {
  let t = e.isCore === !0,
    o = t ? "core" : "prepend";
  return t || e.isManaged === !0 ? o : e.tier ?? "user";
}
