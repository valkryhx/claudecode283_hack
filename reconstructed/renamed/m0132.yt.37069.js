/* ==========================================================================
 * m0132.yt   [m0132_0xc24a4bb.js @ 37069]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function yt(e) {
  if (e === void 0) return;
  if (!Array.isArray(e)) return "instructionFiles that is not a list of { path, kind, content }";
  let t = new Set();
  for (let o = 0; o < e.length; o += 1) {
    let r = e[o],
      n = zo(r, o);
    if (n !== void 0) return n;
    let s = Jo(r);
    if (t.has(s)) return `two instruction files with the path ${s}`;
    t.add(s);
  }
  return;
}
