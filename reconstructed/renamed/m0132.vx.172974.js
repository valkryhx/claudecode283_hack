/* ==========================================================================
 * m0132.vx   [m0132_0xc24a4bb.js @ 172974]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  let u = new Map(),
    d = Sp({
      pluginName: e,
      engine: t,
      interfaces: o,
      clauses: [],
      once: new Set(),
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
          });
        },
        get(y, c = []) {
          let k = `${y}\x00${c.join(",")}`;
          if (!u.has(k)) u.set(k, Rp(d, y, c));
          return u.get(k);
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
  return d;
}
