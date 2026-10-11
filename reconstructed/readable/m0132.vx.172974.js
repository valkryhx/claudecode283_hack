/* ==============================================================================
 * m0132.vx   [m0132_0xc24a4bb.js @ 172974]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 172974
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function vx({
  pluginName: e,
  engine: t,
  interfaces: o
}, {
  invoke: r,
  iterate: n,
  streamIn: s,
  isGeneratorHook: i,
  wrapMethod: p,
  copyMatcher: a,
  stamped: f,
  framed: m
}) {
  let u = new Map,
    d = Sp({
      pluginName: e,
      engine: t,
      interfaces: o,
      clauses: [],
      once: new Set,
      registrations: {
        get registered() {
          return d.clauses.map(({
            pattern: y,
            matcher: c
          }) => c === void 0 ? {
            pattern: y
          } : {
            pattern: y,
            matcher: c
          })
        },
        get(y, c = []) {
          let k = `${y}\x00${c.join(",")}`;
          if (!u.has(k)) u.set(k, Rp(d, y, c));
          return u.get(k)
        },
        streamClauses: (y, c = []) => Pp(d, y, c)
      },
      isRegistered: !1,
      invoke: r,
      iterate: n,
      streamIn: s,
      isGeneratorHook: i,
      wrapMethod: p,
      copyMatcher: a,
      stamped: f,
      framed: m
    });
  return d
}
