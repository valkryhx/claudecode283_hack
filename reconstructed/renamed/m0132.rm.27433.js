/* ==========================================================================
 * m0132.rm   [m0132_0xc24a4bb.js @ 27433]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function rm({
  handler: e,
  below: t,
  site: o,
  e: r,
  budget: n,
  downstreamSignal: s,
  state: i,
  run: p,
  floors: a,
  tier: f
}) {
  async function m(y, c, k = a) {
    let A = o.raiseArgument?.(y) ?? y;
    if (i.pendingDownstream++ === 0) n.pause(), i.beneathSince = performance.now();
    let x = new AbortController(),
      _ = Mw(s, x),
      h = Mw(c, x),
      v = ft();
    if (!s.aborted) p.beneath = v;
    let M = t(A, x.signal, {
      run: v,
      floors: k
    }).then(R => {
      let H = o.carry === void 0 ? R : o.carry(R, A, r);
      return i.belowRejected = void 0, i.fromBelow = [...i.fromBelow, H], H;
    }, R => {
      throw i.belowRejected = {
        error: R
      }, R;
    });
    i.inFlight = M;
    try {
      return await M;
    } finally {
      _(), h(), es(i, n);
    }
  }
  function u(y) {
    let c = Je({
      handler: e,
      site: o,
      e: r
    }, y);
    if (i.settled) throw Lo(e.name);
    return c;
  }
  let d = y => jo(a, y, {
    plugin: e.name,
    tier: f
  });
  return {
    runBelow: m,
    call: async (y, c, k) => m(u(y), c, k),
    to: async (y, c) => m(u(y), void 0, d(c)),
    replay: async (y, c, k) => i.inFlight ?? m(Je({
      handler: e,
      site: o,
      e: r
    }, y), c, k),
    replayTo: async (y, c) => i.inFlight ?? m(Je({
      handler: e,
      site: o,
      e: r
    }, y), void 0, d(c))
  };
}
