/* ==========================================================================
 * m0227.D   [m0227_0xc482590.js @ 17957]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function D(e, n, r) {
  let s = R(S(e, n)),
    E = R(S(e, r));
  return s !== void 0 && E !== void 0 && s > E ? `${n} ${s} greater than ${r} ${E}` : void 0;
}
