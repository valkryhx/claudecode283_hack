/* ==============================================================================
 * m0132.Dt   [m0132_0xc24a4bb.js @ 23387]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 23387
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Dt(e, t = new Map) {
  if (typeof e !== "object" || e === null) return e;
  let o = t.get(e);
  if (o !== void 0) return o;
  if (Array.isArray(e)) {
    let n = [];
    t.set(e, n);
    for (let s of e) n.push(Dt(s, t));
    return n
  }
  if (!gN(e)) return e;
  let r = {};
  t.set(e, r);
  for (let n of Object.keys(e)) Object.defineProperty(r, n, {
    value: Dt(e[n], t),
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
  return r
}
