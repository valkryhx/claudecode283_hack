/* ==========================================================================
 * m0132.FIo   [m0132_0xc24a4bb.js @ 38558]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function FIo(e, t) {
  return e.length === t.length && e.every((o, r) => {
    let n = t[r];
    return n !== void 0 && o.path === n.path && o.kind === n.kind && o.content === n.content && o.parent === n.parent;
  });
}
