/* ==============================================================================
 * m0132.LCe   [m0132_0xc24a4bb.js @ 1984]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 1984
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function LCe(e) {
  let {
    call: t,
    signal: o,
    event: r,
    origin: n
  } = e, s = k0(t);
  if (s.to = k0(e.to), s.signal = o, s.is = e.is, s.event = r, s.origin = n, e.caught !== void 0) Object.assign(s, e.caught);
  return Object.defineProperty(s, "trace", {
    get: k0(e.trace),
    enumerable: !0
  }), Object.defineProperty(s, "budget", {
    get: k0(e.budget ?? (() => Po)),
    enumerable: !0
  }), Object.freeze(s)
}
