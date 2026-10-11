/* ==========================================================================
 * m0132.pe   [m0132_0xc24a4bb.js @ 35221]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function pe(e, t, o) {
  let r = e.find(n => $n(t[n]) !== $n(o[n]));
  if (!r) return;
  return `a changed ${r} (the envelope is the engine's; a rewrite keeps ${e.join(", ")})`;
}
