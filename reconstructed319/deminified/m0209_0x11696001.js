// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pd } from "B:/~BUN/root/chunk-838fxqce.js";
import { R2e, gxr, Bse, t4i, JQe, KAs, wSo, dua, Fxr, a4i, qAs, l4i, d4i, cua, c4i, u4i, YAs, XAs, f4i, fua, _Ht, Sp, yfe, Vxr, txs, Zrn, y4i, BX, qxr, eZe, ISo, nxs, SUn, MSo, gua, wUn, Yxr, _O, gRe, b4i, DSo, vHt, D2e, yxs, Sua, _xs, P4i } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { BS, $xs } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { $e, FUn, mPr, cwo, hPr } from "B:/~BUN/root/chunk-fg0appz9.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Rxs, oPr, son } from "B:/~BUN/root/chunk-zstr1969.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var X = () => Er(Bse, (e, t) => t4i(t));
var K = "classic.PostToolUse";
var Z = "this could not be given to a hook that checks it, so it was not done";
var L = "this tool input could not be given to a hook that checks it, so the tool was not run";
function ee(e, t) {
  let o = {
      "classic.PreToolUse": {
        deny: L
      },
      "classic.PermissionRequest": {
        decision: {
          behavior: "deny",
          message: L
        }
      }
    },
    s = e === "tool.call" || e === "tool.check",
    f = e === "session.compact" || (p => e === "session.append")(t) && !_Ht(t) ? void 0 : R2e[e];
  return Object.hasOwn(R2e, e) ? f?.(s ? L : Z) : o[e];
}
var deny = "a hook that checks this result could not hand back its answer";
var te = new Set(["tool.check", "agent.offer", "plugin.register", "classic.PreToolUse", "classic.PermissionRequest"]);
function TAs(e, t) {
  if (e === K) return {
    isNoted: !0
  };
  let o = ee(e, t);
  if (o === void 0) return;
  if (te.has(e)) return {
    answer: o,
    afterNext: o
  };
  return e === "tool.call" ? {
    answer: o,
    afterNext: {
      deny: deny
    },
    isWithholding: !0
  } : {
    answer: o
  };
}
function oe(e) {
  let t = "kind" in e,
    o = "value" in e;
  return t ? "ui.input" : o ? "ui.select" : "ui.press";
}
function re(e, t) {
  let o = e.answering.getStore();
  return o !== void 0 && o.isLive && Date.now() < o.answersUntil && (o.event === "session.start" || o.environmentId === t) ? o.event : void 0;
}
var Oe = (sent, environmentId, o) => ({
  event: oe(o),
  isLive: !0,
  answersUntil: Date.now() + gRe,
  environmentId: environmentId,
  sent: sent
});
function Ae(e, t) {
  let weakMap = new WeakMap(),
    weakSet = new WeakSet();
  return i => {
    let {
      stamp: stamp,
      environments: environments
    } = e;
    if (stamp === void 0) return son(i);
    let p = stamp,
      c = Atomics.load(p, vHt),
      l = new Map(),
      S = a => Atomics.store(p, vHt, a ?? c);
    function y(a, T) {
      S(a);
      let R = T(),
        b = a !== void 0 && typeof R === "object" && R !== null;
      if (b) $xs(R, new Set((BS(R) ? Object.values(R) : []).filter(item => BS(item) && weakMap.has(item))));
      if (b && Object.isFrozen(R)) weakMap.set(R, a);
      return R;
    }
    function h(a, T) {
      if (!l.has(a)) {
        let R = [...environments].filter(([, b]) => b.name === a);
        l.set(a, R.length === 1 ? R[0]?.[0] : void 0);
      }
      return y(l.get(a), T);
    }
    try {
      return i(a => (S(a ? weakMap.get(a) : void 0), a !== void 0 && weakSet.has(a)), h, a => {
        let T = y(t, a);
        if (weakMap.has(T)) weakSet.add(T);
        return T;
      });
    } finally {
      Atomics.store(p, vHt, c);
    }
  };
}
function Y(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callers : [];
}
function ne(e, t, o) {
  let {
    result: result,
    resolver: resolver
  } = o;
  if (pd(result)) throw new $e("the ui.resolve answer is a Proxy or a vm context; a table of elements is a plain object");
  if (!D(result)) return result;
  let n = Object.create(null);
  for (let f of Reflect.ownKeys(result)) {
    if (typeof f !== "string" || f === "then" || f === "__proto__") continue;
    let p = Reflect.getOwnPropertyDescriptor(result, f);
    if (p?.enumerable !== !0) continue;
    let c = p.value,
      l = !pd(c) && typeof c === "function",
      S = l && gxr.nameOf(c) === f;
    n[f] = !l ? void 0 : S ? c : y => Sua(e.stamp, () => P4i(e.stamp, [...Y(e), resolver], () => t.invokeSync(c, y)));
  }
  return n;
}
import { AsyncLocalStorage as M } from "async_hooks";
var Ie = (hostOps, hostStreamOps, stamp_2) => ({
  environments: new Map(),
  loading: new Map(),
  dispatching: new M(),
  framing: new M(),
  serving: new M(),
  answering: new M(),
  servingLive: new Set(),
  hostOps: hostOps,
  hostStreamOps: hostStreamOps,
  presses: new Map(),
  taking: new Map(),
  resolving: new Map(),
  stamp: stamp_2
});
function W({
  environment: environment,
  name: name,
  event: event,
  e: e_2
}) {
  try {
    return environment.argumentFor(e_2);
  } catch (error) {
    throw hPr(new $e(`${name}: ${event}: could not be given its argument: ${d(error)}`));
  }
}
function G(e) {
  let weakMap_2 = new WeakMap();
  return e_3 => {
    let s = weakMap_2.get(e_3) ?? W({
      ...e,
      e: e_3
    });
    return weakMap_2.set(e_3, s), s;
  };
}
var P = (e, t) => `${e}\x00${t}`;
function Me(e, t, o) {
  let s = e.taking.get(t);
  if (e.taking.delete(t), s === void 0) return;
  let i = new Set();
  for (let {
    plugin: plugin,
    handle: handle
  } of JQe(o)) for (let [p, c] of e.environments) if (c.name === plugin) i.add(P(p, handle));
  for (let n of s) if (!i.has(n)) e.presses.delete(n);
}
function A(e, t) {
  let o = e.environments.get(t);
  if (o === void 0) throw new $e(`environment ${t} is not loaded`);
  return o;
}
function ie(e, t) {
  let o = e.framing.getStore();
  return o?.environmentId === t ? o.registration : void 0;
}
var U = (e, t) => y4i({
  next: () => t(() => e.next()),
  return: () => t(() => e.return(void 0))
});
function q(e, t, {
  event: event_2,
  raised: raised,
  leftOut: leftOut
}) {
  let {
    environment: environment_2,
    name: name_2,
    nextTo: nextTo,
    scan: scan
  } = e;
  for (let l of t) {
    if (oPr(l) && !nextTo.has(l)) throw new $e(`${name_2}: next.to("${l}") refused: its hooks module does not spell ${txs(l)} in a literal the scan reads (host rule)`);
    if (l === "user" && !(raised === void 0 ? Rxs(scan, event_2) : Vxr({
      clauses: environment_2.activation.registrations.registered.filter((item, index) => leftOut?.includes(index) !== !0),
      scan: scan,
      event: event_2,
      raised: raised
    }))) throw new $e(`${name_2}: next.to("user") refused: no hook of its module that spells it stands on this dispatch of ${event_2} (host rule)`);
  }
}
function pe(e, t, o) {
  let {
      environmentId: environmentId_2,
      name: i
    } = t,
    tree = cua(t.result, i);
  return d4i(tree) ? fua({
    tree: tree,
    plugin: i,
    seen: o.seen,
    groups: o.groups,
    parts: o.parts,
    take: (f, p) => {
      let c = P(environmentId_2, f);
      e.presses.set(c, p);
      let l = e.dispatching.getStore();
      if (l !== void 0) e.taking.get(l)?.add(c);
    }
  }) : tree;
}
function fe(e, t, o) {
  let s = cwo(o) ? TAs(e, t) : void 0;
  return s === void 0 ? o : mPr(o, s);
}
function I(e, t, o) {
  let {
      environmentId: environmentId_3,
      event: event_3,
      resolver: resolver_2,
      leftOut: leftOut_2,
      ended: ended,
      caughtAnswered: caughtAnswered,
      endedReached: endedReached,
      withheld: withheld
    } = t,
    {
      environment: environment_3,
      name: name_3,
      tier: tier,
      isPersons: isPersons,
      answersForEngine: answersForEngine
    } = A(e, environmentId_3),
    b = o ?? environment_3.activation.registrations.get(event_3, leftOut_2);
  if (!b) throw new $e(`${name_3}: no ${event_3} handler`);
  let {
    run: run,
    catch: r
  } = b;
  function m(result_2, x) {
    return resolver_2 !== void 0 ? ne(e, environment_3, {
      result: result_2,
      resolver: resolver_2
    }) : event_3 === "ui.render" ? pe(e, {
      environmentId: environmentId_3,
      name: name_3,
      result: result_2
    }, x) : environment_3.leaving(result_2, event_3);
  }
  function v(u, {
    seen: seen,
    groups: groups,
    parts: parts,
    counted: counted
  }) {
    function j(w) {
      if (event_3 === "ui.render" && d4i(w) && !counted.has(w)) {
        counted.add(w);
        for (let O of JQe(w)) seen.add(YAs(O.plugin, O.handle));
        for (let O of wSo(w)) seen.add(KAs(O));
        for (let O of f4i(w)) seen.add(XAs(O));
        for (let O of l4i(w)) seen.add(qAs(O));
        for (let O of c4i(w)) seen.add(O);
        for (let O of a4i(w)) {
          let Q = Fxr(O);
          groups.set(Q, (groups.get(Q) ?? 0) + 1);
        }
        for (let O of u4i(w)) parts.set(O, (parts.get(O) ?? 0) + 1);
      }
      return w;
    }
    return environment_3.nextFor(eZe({
      call: async w => (environment_3.freezeForNext(FUn(w, name_3)), j(await u(w))),
      to: async (w, ...V) => (environment_3.freezeForNext(FUn(w, name_3)), q(A(e, environmentId_3), V, t), j(await SUn(w, u, V))),
      signal: u.signal,
      is: u.is,
      event: u.event,
      origin: u.origin,
      trace: () => u.trace,
      budget: () => u.budget,
      caught: qxr(u)
    }), event_3);
  }
  let k = G({
    environment: environment_3,
    name: name_3,
    event: event_3
  });
  async function g(u, x, F) {
    let E = dua();
    try {
      return m(await u(k(x), v(F, E)), E);
    } catch (error) {
      throw fe(event_3, x, error);
    }
  }
  async function H(u, x, F) {
    if (endedReached?.(environmentId_3, x), u.called) await F(x).then(void 0, () => {
      return;
    });
    throw new $e(u.reason);
  }
  return {
    name: name_3,
    environmentId: environmentId_3,
    tier: tier,
    ...(isPersons === !1 && {
      isVouched: !0
    }),
    ...(answersForEngine && {
      answersForEngine: answersForEngine
    }),
    applied: environment_3.applyIn,
    ...(r && {
      catch: async (u, x) => {
        let F = await g(r, u, x);
        if (F !== void 0) caughtAnswered?.(environmentId_3);
        return F;
      }
    }),
    ...(withheld && {
      withheld: withheld
    }),
    run: (u, x) => ended === void 0 ? g(run, u, x) : H(ended, u, x)
  };
}
function ue(e, t) {
  let o = e.answering.getStore();
  return o?.event === "ui.press" && o.environmentId === t ? o.sent : void 0;
}
function ce(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callId : void 0;
}
var B = (e, environmentId_4) => ({
  environmentId: environmentId_4,
  dispatchId: e.dispatching.getStore(),
  registration: ie(e, environmentId_4),
  serving: ce(e),
  rootEvent: re(e, environmentId_4),
  pressing: ue(e, environmentId_4)
});
var mt = (e, t) => (op, args, signal) => {
  let n = () => e.hostOps({
    ...B(e, t),
    op: op,
    args: args,
    signal: signal
  });
  return D2e(op) ? n() : Yxr(n);
};
var at = (e, t) => (op_2, args_2, i) => {
  let abortController = new AbortController(),
    signal_2 = i === void 0 ? abortController.signal : AbortSignal.any([i, abortController.signal]),
    p = U(e.hostStreamOps({
      ...B(e, t),
      op: op_2,
      args: args_2,
      signal: signal_2
    }), Yxr);
  async function* c() {
    try {
      return yield* p;
    } catch (error) {
      if (abortController.signal.aborted) return;
      throw error;
    }
  }
  return b4i(BX(c), () => abortController.abort(new $e(`${op_2}: the stream was let go`)));
};
function pt(e, {
  event: event_4,
  leftOut: leftOut_3
}, [s, e_4]) {
  let {
    environment: environment_4,
    name: name_4
  } = A(e, s);
  return environment_4.activation.registrations.catches(event_4, W({
    environment: environment_4,
    name: name_4,
    event: event_4,
    e: e_4
  }), leftOut_3?.find(p => p.environmentId === s)?.registrations);
}
function ct(e, t) {
  let {
      environmentId: o,
      request: request,
      core: core
    } = t,
    e_5 = {
      surface: request.surface,
      component: request.component
    },
    f = A(e, o);
  return _O({
    e: e_5,
    handlers: request.environments.filter(item => e.environments.has(item)).map(p => I(e, {
      environmentId: p,
      event: "ui.resolve",
      resolver: o
    })),
    site: Sp["ui.resolve"],
    bottom: () => Promise.resolve(core),
    origin: {
      plugin: f.name,
      tier: f.tier
    }
  });
}
var gt = (e, t) => {
  e.delete(t);
};
var kt = () => ({
  event: "session.start",
  isLive: !0,
  answersUntil: Number.POSITIVE_INFINITY
});
function J(e, t) {
  let {
      environmentId: environmentId_5,
      event: event_5,
      leftOut: leftOut_4
    } = t,
    {
      environment: environment_5,
      name: name_5,
      tier: tier_2
    } = A(e, environmentId_5),
    c = G({
      environment: environment_5,
      name: name_5,
      event: event_5
    });
  function l(y) {
    let h = y;
    return environment_5.streamNextFor(ISo({
      ...MSo(y),
      call: a => (environment_5.freezeForNext(FUn(a, name_5)), h(a)),
      to: (a, ...T) => (environment_5.freezeForNext(FUn(a, name_5)), q(A(e, environmentId_5), T, t), nxs(a, h, T))
    }));
  }
  let S = (registration, h) => U(h, a => e.framing.run({
    environmentId: environmentId_5,
    registration: registration
  }, a));
  return environment_5.activation.registrations.streamClauses(event_5, leftOut_4).map(item => {
    if (item.kind === "value") return gua(I(e, t, item.hook));
    let {
        registration: registration_2
      } = item,
      a = R => async (b, _) => S(registration_2, await R(c(b), l(_))),
      T = item.catch;
    return {
      name: name_5,
      environmentId: environmentId_5,
      tier: tier_2,
      run: a(item.open),
      ...(T !== void 0 && {
        catch: a(T)
      })
    };
  });
}
function Et(e, {
  request: request_2,
  hostNext: hostNext,
  signal: signal_3
}) {
  let {
      event: event_6,
      leftOut: leftOut_5,
      environments: environments_2
    } = request_2,
    handlers = environments_2.flatMap(l => J(e, {
      environmentId: l,
      event: event_6,
      raised: request_2.payload,
      leftOut: leftOut_5?.find(S => S.environmentId === l)?.registrations
    })),
    bottom = (l, S, y = Zrn) => hostNext(l, S, y);
  return {
    e: request_2.payload,
    handlers: handlers,
    site: yfe(event_6, request_2.raise),
    signal: signal_3,
    isHopFold: !0,
    bottom: bottom,
    origin: request_2.origin,
    floors: request_2.floors
  };
}
function CAs({
  hostOps: hostOps_2,
  hostStreamOps: hostStreamOps_2,
  stamp: o,
  createEnvironment: createEnvironment,
  servedBudgetMs = gRe
}) {
  let n = Ie(hostOps_2, hostStreamOps_2, o),
    f = createEnvironment ?? yxs,
    {
      environments: environments_3,
      loading: loading,
      dispatching: dispatching,
      framing: framing,
      serving: serving,
      answering: answering,
      presses: presses
    } = n;
  async function within(r, m, v) {
    if (m === "ui.render") n.taking.set(r, new Set());
    let k,
      H = m === "session.start" ? kt() : void 0;
    try {
      return k = await dispatching.run(r, () => answering.run(H, v)), k;
    } finally {
      if (H !== void 0) H.isLive = !1;
      Me(n, r, k);
    }
  }
  async function dispatch(r, m, signal_4) {
    let k = new Set(),
      g = r.event === K ? {
        isGiven: !1
      } : void 0,
      H = new Map(),
      result_3;
    try {
      result_3 = await within(r.id, r.event, () => _O({
        e: r.payload,
        handlers: r.environments.map(E => I(n, {
          environmentId: E,
          event: r.event,
          raised: r.payload,
          leftOut: r.leftOut?.find(N => N.environmentId === E)?.registrations,
          ended: r.ended,
          caughtAnswered: N => k.add(N),
          ...(g && {
            withheld: () => {
              g.isGiven = !0;
            }
          }),
          endedReached: (N, j) => H.set(N, j)
        })),
        site: yfe(r.event, r.raise),
        signal: signal_4,
        isHopFold: !0,
        bottom: (E, N, j = Zrn) => m(E, N, j),
        origin: r.origin,
        floors: r.floors,
        cutAt: r.cutAt
      }));
    } catch (error) {
      throw g?.isGiven === !0 ? mPr(error, {
        isNoted: !0
      }) : error;
    }
    let x = [...H].find(([E]) => E === r.ended?.kept),
      F = x !== void 0 && !k.has(x[0]) && !pt(n, r, x);
    return {
      result: result_3,
      ...(r.ended !== void 0 && {
        answered: [...k]
      }),
      ...(F && {
        unmatched: !0
      }),
      ...(g?.isGiven === !0 && {
        withheld: !0
      })
    };
  }
  let withinSteps = (r, m) => U(m, v => dispatching.run(r, () => answering.run(void 0, v)));
  return {
    opFailureOf: r => Array.from(environments_3.values(), m => m.environment.opFailureOf(r)).find(item => item !== void 0),
    ownsValue: r => Array.from(environments_3.values()).some(item => item.environment.ownsValue(r)),
    has: r => environments_3.has(r),
    async load(environmentId_6, m) {
      let abortController_2 = new AbortController();
      loading.set(environmentId_6, abortController_2);
      let environment_6;
      try {
        environment_6 = await f(mt(n, environmentId_6), m, {
          stamp: o ? {
            view: o,
            environmentId: environmentId_6
          } : void 0,
          signal: abortController_2.signal,
          hostStream: at(n, environmentId_6),
          framed: (registration_3, H) => framing.run({
            environmentId: environmentId_6,
            registration: registration_3
          }, H),
          blamedFor: () => Y(n)[0],
          blamedWalk: Ae(n, environmentId_6)
        });
      } finally {
        loading.delete(environmentId_6);
      }
      return environments_3.set(environmentId_6, {
        environment: environment_6,
        name: m.pluginName,
        tier: m.tier,
        isPersons: m.isPersons,
        nextTo: new Set(m.scan.nextTo ?? []),
        scan: m.scan,
        answersForEngine: _xs(m.modulePath)
      }), {
        registered: environment_6.activation.registrations.registered
      };
    },
    unload(r) {
      loading.get(r)?.abort(), loading.delete(r);
      let m = environments_3.get(r);
      if (m) environments_3.delete(r), n.resolving.delete(r), m.environment.dispose();
      for (let v of presses.keys()) if (v.startsWith(P(r, 0).slice(0, -1))) presses.delete(v);
    },
    dispatch: dispatch,
    dispatchStream: (request_3, hostNext_2, signal_5) => BX(withinSteps(request_3.id, DSo(Et(n, {
      request: request_3,
      hostNext: hostNext_2,
      signal: signal_5
    })))),
    link: r => I(n, r),
    linkStreams: r => J(n, r),
    within: within,
    withinSteps: withinSteps,
    async resolveTables(environmentId_7, m) {
      let {
          environment: environment_7
        } = A(n, environmentId_7),
        k = (n.resolving.get(environmentId_7) ?? 0) + 1;
      n.resolving.set(environmentId_7, k);
      let g = X(),
        H = await Promise.all(m.map(async x => ({
          surface: x.surface,
          component: x.component,
          answer: await ct(n, {
            environmentId: environmentId_7,
            request: x,
            core: g[x.surface]
          })
        })));
      if (environments_3.get(environmentId_7)?.environment === environment_7 && n.resolving.get(environmentId_7) === k) environment_7.storeResolved(H);
    },
    build: (r, m, v) => {
      A(n, r).environment.activation.finalize(m, v);
    },
    callInterface(r, {
      name: name_6,
      method: method,
      args: args_3
    }, g) {
      let {
        environment: environment_8
      } = A(n, r);
      if (g) n.servingLive.add(g.callId);
      let x = g !== void 0 && servedBudgetMs !== Number.POSITIVE_INFINITY ? setTimeout(gt, servedBudgetMs, n.servingLive, g.callId) : void 0;
      function F() {
        if (clearTimeout(x), g) n.servingLive.delete(g.callId);
      }
      let E = () => P4i(o, g?.callers ?? [], () => environment_8.activation.callInterface(name_6, method, environment_8.cloneIn(args_3))).then(environment_8.leaving);
      try {
        return wUn.exit(() => framing.run(void 0, () => answering.run(void 0, () => serving.run(g, E)))).finally(F);
      } catch (error) {
        throw F(), error;
      }
    },
    press(r, {
      handle: handle_2,
      sent: sent_2
    }, k) {
      let {
          environment: environment_9
        } = A(n, r),
        H = presses.get(P(r, handle_2));
      if (H === void 0) return Promise.reject(new $e(`ui.press/ui.input/ui.select: no handler is held under handle ${handle_2}`));
      let u = Oe(sent_2, r, k);
      return framing.run(void 0, () => answering.run(u, () => environment_9.invoke(H, [environment_9.cloneIn(k)]).then(() => {
        return;
      }).finally(() => {
        u.isLive = !1;
      })));
    },
    releasePresses: (r, m) => {
      for (let v of m) presses.delete(P(r, v));
    }
  };
}
function J$n(e, t) {
  for (let o of e.values()) o.reject(new $e(t));
  e.clear();
}
function jee(e, t) {
  let o = e.get(t);
  return e.delete(t), o;
}
var Rbo = 0;
var tua = 3;
var RAs = 2;
var AAs = 1;
export { deny as X$n, TAs, CAs, J$n, jee, Rbo, tua, RAs, AAs };