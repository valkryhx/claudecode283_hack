/* ==========================================================================
 * m0132.hd   [m0132_0xc24a4bb.js @ 120091]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function hd({
  handler: e,
  e: t,
  signal: o,
  state: r,
  handle: n,
  site: s,
  origin: i,
  run: p,
  cutAt: a,
  kind: f,
  error: m
}) {
  let u = e.catch;
  if (u === void 0) return {
    answer: void 0,
    problem: void 0
  };
  let d = r.inFlight !== void 0;
  await r.inFlight?.then(void 0, () => {
    return;
  });
  let y = Zi({
      kind: f,
      error: m,
      rejection: r.belowRejected
    }),
    c = new AbortController(),
    k = Mw(o, c),
    A = !1,
    x = `${e.name}: next() after its .catch settled`,
    _ = R => A ? Promise.reject(new De(x)) : fLr(R),
    h = yo(ze, o, a),
    v = go({
      call: (R, H, F) => _(() => n.replay(R, H, F)),
      to: (R, H) => _(() => n.replayTo(R, H)),
      signal: c.signal,
      event: s.event,
      origin: i,
      run: p,
      budget: h,
      caught: {
        error: Object.freeze({
          kind: f,
          ...(y === void 0 ? {} : {
            message: y
          }),
          budget: ze
        }),
        called: d
      }
    }),
    M = mt.run(h, () => u(t, v));
  try {
    return {
      answer: h.expired === void 0 ? await M : await Promise.race([M, h.expired]),
      problem: void 0
    };
  } catch (R) {
    if (Ne(R, o)) throw R;
    let H = Bt(ze),
      F = h.isExpired(),
      B = F ? `its .catch ran past its ${H} grace` : `its .catch threw ${Kt(R)}`;
    if (c.abort(new De(`${e.name}: ${B}`)), F) Uo(M, e, s);
    return {
      answer: void 0,
      problem: B
    };
  } finally {
    A = !0, h.clear(), k();
  }
}
