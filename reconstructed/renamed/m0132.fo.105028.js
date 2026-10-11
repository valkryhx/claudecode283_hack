/* ==========================================================================
 * m0132.fo   [m0132_0xc24a4bb.js @ 105028]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function fo(e) {
  if (!Array.isArray(e)) return "messages that are not a list";
  if (e.length === 0) return "an empty messages (a compaction leaves at least one)";
  let t = e.map(rn),
    o = t.findIndex(n => n !== void 0);
  return o === -1 ? void 0 : `messages[${o}] that ${t[o]}`;
}
