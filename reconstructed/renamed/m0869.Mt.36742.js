/* ==========================================================================
 * m0869.Mt   [m0869_0xd12567a.js @ 36742]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Mt(e) {
  if (e == null) return;
  let r = (typeof e === "string" ? e : b(e)).trim();
  if (!r) return;
  return r.length > Co ? re(r, Co) + "\u2026" : r;
}
