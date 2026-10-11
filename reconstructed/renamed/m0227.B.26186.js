/* ==========================================================================
 * m0227.B   [m0227_0xc482590.js @ 26186]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function B(e, n) {
  let r = e;
  for (let s of n.split("/").slice(1)) {
    let E = s.replaceAll("~1", "/").replaceAll("~0", "~");
    if (Array.isArray(r)) r = r[Number(E)];else if (G(r) && Object.hasOwn(r, E)) r = r[E];else return;
  }
  return r;
}
