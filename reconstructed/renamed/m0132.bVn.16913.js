/* ==========================================================================
 * m0132.bVn   [m0132_0xc24a4bb.js @ 16913]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bVn(e) {
  if (e === null || typeof e !== "object") return [];
  let t = Yn(e),
    o = [];
  for (let r = 0; r < t; r++) try {
    o[r] = e[r];
  } catch {
    o[r] = void 0;
  }
  return o;
}
