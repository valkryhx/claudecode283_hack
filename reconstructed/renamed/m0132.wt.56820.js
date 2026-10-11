/* ==========================================================================
 * m0132.wt   [m0132_0xc24a4bb.js @ 56820]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function wt(e) {
  let {
      keys: t,
      passed: o,
      received: r,
      explanation: n
    } = e,
    s = t.find(i => $n(o[i]) !== $n(r[i]));
  if (s === void 0) return;
  return `a changed ${s} (${n})`;
}
