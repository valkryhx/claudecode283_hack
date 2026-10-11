/* ==============================================================================
 * m0132.Ca   [m0132_0xc24a4bb.js @ 152405]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 152405
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ca = (e) => (t, o) => {
  if (e.isFinalized) throw new De(`${e.pluginName}: $ is already built`);
  for (let [n, s] of Object.entries(t)) e.slots[n] = Pn(e, n, s);
  for (let [n, s] of Object.entries(o ?? {}))
    if (n !== "*" && !Object.hasOwn(t, n) && !e.identity.has(n)) e.slots[n] = Pt(n, s, e.wrapMethod);
  let r = o?.["*"];
  if (r !== void 0) Object.setPrototypeOf(e.engine, Gy(r, e.wrapMethod));
  Object.freeze(e.engine), e.isFinalized = !0
};
