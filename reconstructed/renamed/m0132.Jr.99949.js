/* ==========================================================================
 * m0132.Jr   [m0132_0xc24a4bb.js @ 99949]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Jr(e, t) {
  let o = t.props,
    r = Object.keys(e).find(n => e[n] !== o[n] && $n(e[n]) !== $n(o[n]) && Ot(e[n]) > xte && Ot(e[n]) > Ot(o[n]));
  if (r === void 0) return;
  return `a props.${r} of more than ${xte} characters of text, more than the engine drew`;
}
