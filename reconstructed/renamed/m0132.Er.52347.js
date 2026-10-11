/* ==========================================================================
 * m0132.Er   [m0132_0xc24a4bb.js @ 52347]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Er(e, t) {
  let {
      text: o,
      cursor: r,
      start: n,
      end: s,
      inputText: i
    } = e,
    p = $n(e.origin) === $n(t.origin),
    a = $n(e.key) === $n(t.key),
    f = typeof o === "string" && typeof i === "string",
    m = typeof o === "string" ? o.length : 0,
    u = mN(r) && mN(n) && mN(s) && r <= m && n <= s && s <= m;
  if (!p) return "a changed origin (the engine set it; next(e) passes it on)";
  if (!a) return "a changed key (what the person pressed; next(e) passes it on)";
  if (!f) return "no { text, inputText } (strings)";
  return u ? void 0 : "a { cursor, start, end } outside the text (whole offsets, ordered)";
}
