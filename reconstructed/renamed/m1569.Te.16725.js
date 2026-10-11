/* ==========================================================================
 * m1569.Te   [m1569_0xdceb889.js @ 16725]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Te(e) {
  let r = dr().safeParse(e);
  if (r.success) return r.data;
  let n = e !== null && typeof e === "object" ? Object.keys(e).find(s => Dr.has(s)) : void 0;
  if (n !== void 0) throw new P(`a fact may not carry \`${n}\` \u2014 the host sets it on the row`, "world: fact carries a reserved key");
  throw new P("a fact must be an object with a non-empty string `topic`", "world: not a fact");
}
