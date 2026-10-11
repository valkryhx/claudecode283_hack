/* ==============================================================================
 * m0132.Er   [m0132_0xc24a4bb.js @ 52347]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 52347
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Er(e, t) {
  let {
    text: o,
    cursor: r,
    start: n,
    end: s,
    inputText: i
  } = e, p = $n(e.origin) === $n(t.origin), a = $n(e.key) === $n(t.key), f = typeof o === "string" && typeof i === "string", m = typeof o === "string" ? o.length : 0, u = mN(r) && mN(n) && mN(s) && r <= m && n <= s && s <= m;
  if (!p) return "a changed origin (the engine set it; next(e) passes it on)";
  if (!a) return "a changed key (what the person pressed; next(e) passes it on)";
  if (!f) return "no { text, inputText } (strings)";
  return u ? void 0 : "a { cursor, start, end } outside the text (whole offsets, ordered)"
}
