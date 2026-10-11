/* ==========================================================================
 * m0132.O2o   [m0132_0xc24a4bb.js @ 38453]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function O2o(e) {
  return {
    path: e.path,
    kind: ds(e),
    content: e.content,
    ...(e.parent !== void 0 && {
      parent: e.parent
    })
  };
}
