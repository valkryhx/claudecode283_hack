/* ==========================================================================
 * m1569.Ce   [m1569_0xdceb889.js @ 14842]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ce(e) {
  let r = Ot().safeParse(e);
  if (!r.success || Ge(r.data)) throw new P('a pattern must be a JSON object (nested objects as subsets, arrays exact, v("x") binds)', "world: not a pattern");
  return r.data;
}
