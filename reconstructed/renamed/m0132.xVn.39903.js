/* ==========================================================================
 * m0132.xVn   [m0132_0xc24a4bb.js @ 39903]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function xVn(e) {
  let t = [],
    o = [];
  for (let r of e) {
    if (r.type === "AutoMemPinned") {
      o.push(r);
      continue;
    }
    if (o.length > 0) t.push(Zo(o)), o = [];
    t.push(`Contents of ${r.path}${xs(r.type)}:

` + r.content.trim());
  }
  if (o.length > 0) t.push(Zo(o));
  return t.join(`

`);
}
