/* ==========================================================================
 * m0132.sn   [m0132_0xc24a4bb.js @ 108392]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function sn(e, t) {
  let o = e.ifVersion !== t.ifVersion,
    r = $n(e.previous) !== $n(t.previous);
  return vt(e, t) ?? (o ? "a changed ifVersion (the condition is the caller's)" : void 0) ?? (r ? "a changed previous (the host stamps it)" : void 0);
}
