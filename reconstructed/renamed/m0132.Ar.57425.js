/* ==========================================================================
 * m0132.Ar   [m0132_0xc24a4bb.js @ 57425]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ar(e, t) {
  let o = t.props,
    r = Object.keys(e).find(n => e[n] !== o[n] && $n(e[n]) !== $n(o[n]) && (Tt(e[n], o[n], yLr) || Tt(e[n], o[n], bLr) || Tt(e[n], o[n], _Lr)));
  if (r === void 0) return;
  return `a props.${r} with a control character (an escape sequence the terminal would honour, an image placeholder, or an unpaired surrogate half out of reach); a rewrite the engine draws adds none`;
}
