/* ==========================================================================
 * m0132.yi   [m0132_0xc24a4bb.js @ 94588]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function yi(e) {
  if (!(G(e) && HCe(e.surface))) return "takes a ui.render argument (e.surface names the surface)";
  let o = String(e.component);
  return Object.hasOwn(Lhe, o) ? void 0 : `takes a ui.render argument (e.component "${o}" is not a component the engine draws)`;
}
