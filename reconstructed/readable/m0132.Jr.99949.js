/* ==============================================================================
 * m0132.Jr   [m0132_0xc24a4bb.js @ 99949]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 99949
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Jr(e, t) {
  let o = t.props,
    r = Object.keys(e).find((n) => e[n] !== o[n] && $n(e[n]) !== $n(o[n]) && Ot(e[n]) > xte && Ot(e[n]) > Ot(o[n]));
  if (r === void 0) return;
  return `a props.${r} of more than ${xte} characters of text, more than the engine drew`
}
