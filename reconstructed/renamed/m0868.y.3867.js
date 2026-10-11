/* ==========================================================================
 * m0868.y   [m0868_0xd1234ad.js @ 3867]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function y(o, s) {
  if (!s || K7r(o.script)) return !0;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${s.source} copy`, {
    level: "warn"
  }), !1;
}
