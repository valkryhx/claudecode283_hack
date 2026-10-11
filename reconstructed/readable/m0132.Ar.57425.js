/* ==============================================================================
 * m0132.Ar   [m0132_0xc24a4bb.js @ 57425]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 57425
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ar(e, t) {
  let o = t.props,
    r = Object.keys(e).find((n) => e[n] !== o[n] && $n(e[n]) !== $n(o[n]) && (Tt(e[n], o[n], yLr) || Tt(e[n], o[n], bLr) || Tt(e[n], o[n], _Lr)));
  if (r === void 0) return;
  return `a props.${r} with a control character (an escape sequence the terminal would honour, an image placeholder, or an unpaired surrogate half out of reach); a rewrite the engine draws adds none`
}
