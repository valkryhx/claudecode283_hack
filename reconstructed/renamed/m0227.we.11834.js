/* ==========================================================================
 * m0227.we   [m0227_0xc482590.js @ 11834]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function we(e) {
  let n = [];
  for (let r of e) {
    let s = ke.exec(r);
    if (s !== null) n.push(s[1]);
  }
  return n;
}
