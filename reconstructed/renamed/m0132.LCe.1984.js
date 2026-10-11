/* ==========================================================================
 * m0132.LCe   [m0132_0xc24a4bb.js @ 1984]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function LCe(e) {
  let {
      call: t,
      signal: o,
      event: r,
      origin: n
    } = e,
    s = k0(t);
  if (s.to = k0(e.to), s.signal = o, s.is = e.is, s.event = r, s.origin = n, e.caught !== void 0) Object.assign(s, e.caught);
  return Object.defineProperty(s, "trace", {
    get: k0(e.trace),
    enumerable: !0
  }), Object.defineProperty(s, "budget", {
    get: k0(e.budget ?? (() => Po)),
    enumerable: !0
  }), Object.freeze(s);
}
