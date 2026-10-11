/* ==========================================================================
 * m0132.Ur   [m0132_0xc24a4bb.js @ 98221]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ur(e) {
  if (!("props" in e) || e.props === void 0) return;
  let t = TNt(e.props);
  return t === void 0 ? void 0 : `props ${t}`;
}
