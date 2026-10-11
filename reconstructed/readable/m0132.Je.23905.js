/* ==============================================================================
 * m0132.Je   [m0132_0xc24a4bb.js @ 23905]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 23905
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Je({
  handler: e,
  site: t,
  e: o
}, r) {
  let n = MNt(r, e.name),
    s = !q(e) && (t.checkArgument !== void 0 || t.restoreArgument !== void 0),
    p = s && !Object.is(n, o) ? Dt(n) : n,
    a = s ? t.restoreArgument?.(p, o) ?? p : p,
    f = s ? t.checkArgument?.(a, o) : void 0;
  if (f !== void 0) throw new De(`${e.name}: next() passed an argument with ${f}`);
  if (s && e.isHop !== !0) mFe(e.name, t.event, t.measureArgument?.(a, o));
  return Zn(a)
}
