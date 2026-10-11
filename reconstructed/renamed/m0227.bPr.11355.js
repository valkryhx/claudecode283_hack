/* ==========================================================================
 * m0227.bPr   [m0227_0xc482590.js @ 11355]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bPr(e) {
  let n = [],
    r = 0;
  for (let s of e) {
    let E = s.pollEvent?.envelope ?? "",
      l = Buffer.byteLength(E, "utf8");
    if (n.length > 0 && (n.length >= hPr || r + l > ge)) break;
    n.push(s), r += l;
  }
  return n;
}
