/* ==========================================================================
 * m0132.cn   [m0132_0xc24a4bb.js @ 111729]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function cn(e, t) {
  let {
    isReadOnly: o,
    ...r
  } = e;
  if (r.deny !== void 0 || r.ref === void 0) return r;
  let n = t.findLast(p => p.ref === r.ref),
    s = $n(r.result);
  return n !== void 0 && n.isReadOnly === !0 && (r.result === void 0 || r.result === n.result || s !== void 0 && s === $n(n.result)) ? {
    ...r,
    isReadOnly: !0
  } : r;
}
