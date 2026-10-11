/* ==========================================================================
 * m0132.vp   [m0132_0xc24a4bb.js @ 170772]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function vp({
  pluginName: e,
  wrapMethod: t
}, {
  outer: o,
  inner: r,
  pattern: n
}) {
  let s = o.matcher === void 0 || r.matcher === void 0,
    i = o.catch === void 0 && r.catch === void 0,
    p = new WeakMap();
  async function a({
    e: u,
    passed: d
  }, y) {
    p.set(u, d);
    let c = await r.run(d, y);
    if (!c) throw new De(`${e}: the on("${n}") hook returned no result`);
    return c;
  }
  let f = (u, d) => LCe({
    ...CVn(u),
    call: t(y => (d(), u(y))),
    to: t((y, ...c) => (d(), _Nt(y, u, c)))
  });
  async function m(u, d) {
    let y = !1,
      c = f(d, () => {
        y = !0;
      }),
      k = await Promise.resolve(o.catch?.(u, c)).then(x => ({
        answer: x,
        error: void 0
      }), x => ({
        answer: void 0,
        error: x
      }));
    if (k.answer !== void 0 || y) return Op(k);
    let A = await r.catch?.(p.get(u) ?? u, d);
    if (A === void 0 && k.error !== void 0) throw k.error;
    return A;
  }
  return {
    run: (u, d) => o.run(u, LCe({
      ...CVn(d),
      call: t(y => a({
        e: u,
        passed: y
      }, d)),
      to: t((y, ...c) => a({
        e: u,
        passed: y
      }, bp(t, d, c)))
    })),
    matcher: s ? void 0 : [o.matcher, r.matcher],
    ...(i ? {} : {
      catch: m
    })
  };
}
