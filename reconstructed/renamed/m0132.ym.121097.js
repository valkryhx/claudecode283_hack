/* ==========================================================================
 * m0132.ym   [m0132_0xc24a4bb.js @ 121097]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ym = ({
  handler: e,
  index: t,
  below: o,
  site: r,
  budgetMs: n,
  cutAt: s,
  origin: i,
  nothingBelow: p,
  answersForEngine: a
}) => async (f, m, u) => {
  let {
      run: d,
      floors: y
    } = u,
    c = Ce(e),
    k = Ho({
      handler: e,
      tier: c,
      index: t,
      site: r,
      e: f,
      descent: u
    });
  if (k !== void 0) return o(f, m, k);
  let A = performance.now(),
    x = Qi(),
    _ = new AbortController(),
    h = Mw(m, _),
    v = new AbortController(),
    M = Mw(m, v),
    R = e.budgetMs ?? n,
    H = yo(R, m, s),
    F = No(f),
    B = rm({
      handler: e,
      below: o,
      site: r,
      e: f,
      budget: H,
      downstreamSignal: _.signal,
      state: x,
      run: d,
      floors: y,
      tier: c
    }),
    {
      call: V,
      to: z,
      runBelow: Ae
    } = B,
    ue = go({
      call: V,
      to: z,
      signal: v.signal,
      event: r.event,
      origin: i,
      run: d,
      budget: H
    });
  function we(I) {
    return kc().log(`${e.name}: its next() rejected below it (${r.event}); the rejection passes up`), I;
  }
  function X(I) {
    let D = r.settle,
      J = q(e) || D === void 0;
    try {
      let Y = J ? I : D(I),
        ne = q(e) ? Y : r.restoreResult?.(Y, x.fromBelow, f) ?? Y,
        se = q(e) || a ? ne : r.stripResult?.(ne, x.fromBelow) ?? ne,
        He = q(e) ? void 0 : r.check?.(se, f, x.fromBelow);
      if (He === void 0 && !q(e) && e.isHop !== !0) mFe(e.name, r.event, r.measure?.(se, f, x.fromBelow));
      return {
        settled: se,
        problem: He
      };
    } catch (Y) {
      let ce = `a result the site cannot read (${l(Y)})`;
      return {
        settled: I,
        problem: ce
      };
    }
  }
  let de,
    ye,
    ae = "rejected",
    ge = !1,
    Z,
    oe;
  try {
    Z = mt.run(H, () => e.run(F, ue, {
      call: V,
      floors: y,
      cutAt: s
    }));
    let D = H.expired === void 0 ? await Z : await Promise.race([Z, H.expired]);
    if (D === void 0) throw oe = "no result", new De("returned no result");
    let {
      settled: J,
      problem: Y
    } = X(D);
    if (Y !== void 0) throw oe = Y, new De(`returned ${Y}`);
    de = J, ye = J, ae = D === x.fromBelow.at(-1) ? "passed" : "returned", ge = x.inFlight === void 0 && !q(e) && e.isHop !== !0;
  } catch (I) {
    if (Ne(I, m)) throw I;
    let D = H.isExpired(),
      J = D ? void 0 : x.belowRejected;
    if (J !== void 0 && e.catch === void 0) throw we(J.error);
    let Y = Ye(e, l(I));
    if (x.settled = !0, D && Z !== void 0) v.abort(new De(Y)), Uo(Z, e, r);
    let ne = x.inFlight !== void 0,
      ce = m.aborted ? {
        answer: void 0,
        problem: void 0
      } : await hd({
        handler: e,
        e: F,
        signal: m,
        state: x,
        handle: B,
        site: r,
        origin: i,
        run: d,
        cutAt: s,
        kind: D ? "timeout" : "throw",
        error: I
      }),
      se = ce.answer === void 0 ? void 0 : X(ce.answer);
    if (se !== void 0 && se.problem === void 0) kc().log(os(e.name, I, r.event), "warn"), kc().hookFailed({
      plugin: e.name,
      environmentId: e.environmentId,
      event: r.event,
      reason: Y,
      effect: ts,
      hasOverrun: !1
    }), de = se.settled, ye = se.settled, ae = "caught";else if (J === void 0) {
      if (ns({
        error: I,
        handler: e,
        site: r,
        effect: ne ? is : ss,
        cause: {
          expiredMs: D ? R : void 0,
          lingeredMs: H.hasGraceExpired() ? Mhe : void 0,
          shape: oe,
          caught: dd(ce.problem, se?.problem)
        }
      }), x.inFlight === void 0 && p) throw I;
      de = await (x.inFlight ?? Ae(f)), ye = ne ? de : void 0, ae = D ? "expired" : ne ? "kept" : "skipped";
    } else throw we(J.error);
  } finally {
    x.settled = !0, H.clear(), M(), h();
    let I = performance.now(),
      D = I - A - x.beneathMs - (x.pendingDownstream > 0 ? I - x.beneathSince : 0);
    if (Ve(d, {
      index: t,
      plugin: e.isCore === !0 ? Ate : e.name,
      tier: c,
      event: r.event,
      outcome: ae,
      ms: D,
      received: f,
      returned: ye
    }), ge) Qn({
      plugin: e.name,
      tier: c,
      event: r.event,
      ms: D
    });
    if (x.pendingDownstream > 0) _.abort(new De(`${e.name} settled the call`));
  }
  return de;
};
