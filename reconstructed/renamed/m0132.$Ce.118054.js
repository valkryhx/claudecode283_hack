/* ==========================================================================
 * m0132.$Ce   [m0132_0xc24a4bb.js @ 118054]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function $Ce(e, t) {
  let r = kdt(e) ? lu[e] : K(e);
  return t ? {
    ...r,
    raiseArgument: n => $Io(t, n)
  } : r;
}
