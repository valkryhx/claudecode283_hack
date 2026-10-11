/* ==========================================================================
 * m0132.Hn   [m0132_0xc24a4bb.js @ 162411]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Hn(e, t, o = "store.set") {
  let r;
  try {
    r = JSON.stringify(e);
  } catch (n) {
    throw new De(`${t}: $.${o}: value is not JSON data (${l(n)})`);
  }
  if (typeof r !== "string") throw new De(`${t}: $.${o}: value is not JSON data (${e === void 0 ? "undefined" : `a ${typeof e}`})`);
  if (r.length > Pte) throw new De(`${t}: $.${o}: the value is ${r.length} characters, over the ${Pte} limit`);
  return JSON.parse(r);
}
