/* ==============================================================================
 * m0132.rm   [m0132_0xc24a4bb.js @ 27433]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 27433
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
    let x = new AbortController,
      _ = Mw(s, x),
      h = Mw(c, x),
      v = ft();
    if (!s.aborted) p.beneath = v;
    let M = t(A, x.signal, {
      run: v,
      floors: k
    }).then((R) => {
      let H = o.carry === void 0 ? R : o.carry(R, A, r);
      return i.belowRejected = void 0, i.fromBelow = [...i.fromBelow, H], H
    }, (R) => {
      throw i.belowRejected = {
        error: R
      }, R
    });
    i.inFlight = M;
    try {
      return await M
    } finally {
      _(), h(), es(i, n)
    }
  }

  function u(y) {
    let c = Je({
      handler: e,
      site: o,
      e: r
    }, y);
    if (i.settled) throw Lo(e.name);
    return c
  }
  let d = (y) => jo(a, y, {
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
  }
}
