// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  R_,
  k0,
  OCe,
  qX,
  uFe,
  OIo,
  MIo,
  DIo,
  ddn,
  kVn,
  A6,
  $n,
  ENt,
  B6e,
  gdn,
  TNt,
  Sdt,
  ALr,
  QIo,
  ZIo
} from "B:/~BUN/root/chunk-0w5kpsps.js";
import {
  UCe,
  kc
} from "B:/~BUN/root/chunk-n5swsemr.js";
import {
  De,
  zCe,
  ni
} from "B:/~BUN/root/chunk-5dk9zqaz.js";
import {
  l,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Rt
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  G
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
import {
  SW,
  sVe,
  V4,
  ymo,
  Iot,
  _qe,
  Kho,
  ikr,
  HFn,
  FFn,
  Ben,
  Yxt
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  ldn,
  ydt
} from "B:/~BUN/root/chunk-5emths66.js";
import {
  _$n,
  rEr
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  Xg
} from "B:/~BUN/root/chunk-cev8zjcf.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
var qIe = Rt(Hs({
  focusedId: null
}), (r) => r.setState(() => ({
  focusedId: null
})));
var pKt = (r) => qIe.setState((a) => a.focusedId === r ? a : {
  focusedId: r
});
var n7r = (r) => qIe.setState((a) => a.focusedId === r ? {
  focusedId: null
} : a);

function bor(r = {}) {
  let a = r.run ?? Yxt,
    c = r.schedule ?? ((f) => {
      let p = setTimeout(f, Xg);
      return () => {
        clearTimeout(p)
      }
    }),
    g = r.warn ?? ((f) => {
      t(f, {
        level: "warn"
      })
    }),
    d = new Map,
    x, i = 0;

  function u() {
    x = void 0;
    let f = [...d.values()];
    d.clear();
    for (let {
        message: p,
        reply: T
      }
      of f) i += 1, a(p).then(T, (b) => {
      g(`ui.message ${p.plugin}/${p.message.element}: the chain threw (${l(b)}); no reply`)
    })
  }
  return {
    post(f, p, T) {
      d.set(f, {
        message: p,
        reply: T
      }), x ??= c(u)
    },
    cancel(f) {
      if (d.delete(f), d.size === 0 && x !== void 0) x(), x = void 0
    },
    dispatched: () => i
  }
}
var $e = bor();
var Sor = (r, a) => `${r}\x00client\x00${a}`;
var ce = (r) => ({
  component: r.component,
  requestId: Sor(r.requestId, r.key),
  surface: r.surface
});
var fe = 500;

function le(r) {
  let a = r.replace(A6, " ");
  return a.length > fe ? `${re(a,fe)}\u2026` : a
}

function de(r, a, c) {
  let g = `${r}: `,
    d = le(c),
    x = d.startsWith(g) ? d.slice(g.length) : d,
    i = `Client ${a}: `;
  return x.startsWith(i) ? x : `${i}${x}`
}
var N = (r) => r === B6e ? 1 : 0;
var ge = (r, a) => ({
  plugin: r,
  handle: a
});

function xe(r, a, c) {
  function g(d) {
    if (!G(d)) return d;
    let {
      props: x,
      hover: i,
      children: u,
      held: f
    } = d, p = {
      type: d.type
    };
    if (x !== void 0) p.props = x;
    if (i !== void 0) p.hover = i;
    if (ldn(d.type) && ydt(i) !== void 0) p.group = {
      plugin: r
    };
    if (typeof f === "number") p.press = ge(r, c(f));
    else if (Array.isArray(u)) p.children = u.map(g);
    return p
  }
  return UCe(g(Sdt(J(a))))
}
var Z = (r) => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ye = 3;
var Te = (r) => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});
var he = (r) => ({
  id: Z(r),
  plugin: r.plugin,
  module: r.module,
  element: r.key,
  drawing: ce(r),
  requestId: r.requestId,
  clock: r.clock,
  props: r.props,
  columns: 0,
  rows: 0,
  surface: void 0,
  snapshot: {
    status: "loading"
  },
  listeners: new Set,
  held: [],
  holders: 1,
  dialogHolders: N(r.component),
  rowSite: N(r.component) === 0 ? r.component : void 0,
  drawnSite: void 0,
  isOverBudget: !1,
  isDirty: !1,
  isRendering: !1,
  unpromptedRenders: 0,
  renderTimer: void 0,
  isDestroyed: !1,
  destroyTimer: void 0,
  mountGeneration: 0
});
import * as ee from "vm";
var Ie = (r) => ddn(r) && v(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var pe = 1000;
var Ee = "__surface__.run()";
var we = (r, a) => ({
  ...r,
  timers: new Map,
  tick: a
});
async function ao(r, a = {}) {
  let {
    pluginName: c,
    pluginRoot: g,
    environmentId: d,
    surfaceModules: x
  } = r, i = !1, {
    sandbox: u,
    context: f
  } = QIo(), p = uFe(f, {
    arrayLengthCap: void 0
  }), T = (n) => UCe(p(n)), b = DIo(f, g), R = MIo(f), {
    fromEnvironment: O,
    intoEnvironment: A
  } = kVn(qX(f), b, R), S = ZIo(f, A);
  Object.assign(u, {
    console: OIo(S, `[${c}] surface`)
  });
  let D = new Map,
    U = 0,
    P = 0;

  function z(n) {
    let m = D.get(n);
    if (!m) throw new De(`${c}: no client instance ${n}`);
    return m
  }

  function oe(n, m) {
    let h = z(n),
      w = `${c}: Client ${h.module}: post: the data`;
    if (m.length > gdn) throw new De(`${w} serializes to ${m.length} characters, over the ${gdn} limit; not sent`);
    let E = J(m),
      k = TNt(E);
    if (k !== void 0) throw new De(`${w} ${k}; not sent`);
    h.host.post(E)
  }

  function K(n, m) {
    let h = z(n),
      w = ++P;
    return h.timers.set(w, h.host.startTimer(m, () => {
      if (D.get(n)?.timers.has(w) === !0) h.tick(w)
    })), w
  }
  let L = R_({
      schedule: k0(S((n) => {
        D.get(n)?.host.schedule()
      })),
      post: k0(S(oe)),
      startTimer: k0(S(K)),
      stopTimer: k0(S((n, m) => {
        let h = D.get(n);
        h?.timers.get(m)?.(), h?.timers.delete(m)
      }))
    }),
    {
      mount: X,
      setProps: te,
      resize: ne,
      stage: se,
      dropHeld: W,
      hasListener: F,
      unmount: _
    } = ee.runInContext(HFn, f)(L, T(FFn())),
    V = new ee.Script(Ee, {
      filename: `${c} surface`
    }),
    Y = a.budgetMs ?? pe,
    Q = OCe(pe, a.budgetMs),
    e = (n) => Ie(n) ? `ran longer than its ${Y}ms budget` : O(n).message,
    o = (n, m) => new De(`${c}: Client ${n}: ${e(m)}`);

  function s(n, m, h) {
    if (i) throw zCe(c);
    se(n.id, m, h === void 0 ? void 0 : T(h));
    try {
      return V.runInContext(f, Q)
    } catch (w) {
      throw o(n.module, w)
    }
  }
  let y = ALr({
      args: {
        pluginName: c,
        pluginRoot: g,
        linked: x.flatMap((n) => n.linked),
        links: x.flatMap((n) => n.links)
      },
      context: f,
      intoEnvironment: A,
      stamped: (n) => n(),
      evaluateOptions: Q
    }),
    C = a.readyMs ?? sVe,
    M = new Map;
  for (let n of x) M.set(n.module, await H(n));
  async function H(n) {
    try {
      let m = await Ht(y.load(n.modulePath, n.source), C, `its top level did not settle in ${C}ms`);
      return {
        component: n.component,
        exports: m
      }
    } catch (m) {
      return {
        error: new De(`${c}: Client ${n.module}: the surface module did not load: ${e(m)}`)
      }
    }
  }

  function j(n) {
    if (!D.delete(n.id)) return;
    for (let m of n.timers.values()) m();
    if (n.timers.clear(), !i) _(n.id)
  }

  function q(n) {
    let m = M.get(n);
    if (!m) {
      let k = [...M.keys()].join(", ") || "none";
      throw new De(`${c}: Client ${n}: the plugin loaded no surface module at that path (it loaded ${k})`)
    }
    if ("error" in m) throw m.error;
    let {
      component: h,
      exports: w
    } = m, E = Object.hasOwn(w, h) && w[h];
    if (typeof E !== "function") throw new De(`${c}: Client ${n}: its export ${h} is not a function (props, surface) => tree`);
    return E
  }

  function B(n) {
    if (!i) n()
  }

  function ie(n) {
    let {
      props: m,
      host: h
    } = n;
    if (i) throw zCe(c);
    let w = q(n.module),
      E = ++U,
      k = we({
        id: E,
        module: n.module,
        host: h
      }, (I) => {
        s(k, "tick", I)
      });
    return D.set(E, k), X(E, w, T(m)), {
      id: E,
      render: () => {
        let I = s(k, "render");
        if (typeof I !== "string") throw o(n.module, Error("the module returned no tree"));
        return I
      },
      setProps: (I) => B(() => te(E, T(I))),
      resize: (I, ae) => B(() => ne(E, I, ae)),
      pointer: (I) => {
        s(k, "pointer", I)
      },
      key: (I) => {
        s(k, "key", I)
      },
      runHeld: (I, ae) => {
        s(k, "held", {
          handle: I,
          event: ae
        })
      },
      dropHeld: (I) => B(() => W(E, T(I))),
      hasPointerListener: () => !i && F(E, "pointer"),
      hasKeyListener: () => !i && F(E, "key"),
      unmount: () => j(k)
    }
  }
  return {
    pluginName: c,
    environmentId: d,
    mount: ie,
    dispose() {
      if (i) return;
      for (let n of [...D.values()]) j(n);
      i = !0
    },
    isDisposed: () => i
  }
}
var Se = (r, a) => ({
  environmentId: r,
  loading: a,
  loaded: void 0
});
var ke = Rt(ni(), (r) => r.set(void 0));

function Oe() {
  let r = new Map,
    a = Me(),
    c;

  function g(i, u) {
    if (r.get(i) === u) r.delete(i);
    u.loading.then((p) => {
      p.dispose(), _qe.forget(i), t(`surface environment of ${i} (environment ${u.environmentId}) disposed`)
    }, () => {}), queueMicrotask(() => a.emit(i))
  }

  function d() {
    let i = new Map(dt().loadedModules.map((u) => [u.name, u.environmentId]));
    for (let [u, f] of [...r])
      if (i.get(u) !== f.environmentId) g(u, f)
  }

  function x(i) {
    let u = _$n(i);
    if (!u) return Promise.reject(new De(`${i}: Client: the plugin is not loaded`));
    let f = r.get(i);
    if (f?.environmentId === u.environmentId) return f.loading;
    if (f) g(i, f);
    let {
      surfaceModules: p,
      pluginRoot: T
    } = u.args;
    if (!p || p.length === 0) return Promise.reject(new De(`${i}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let b = ke.get(),
      {
        environmentId: R
      } = u,
      O = Se(R, ao({
        pluginName: i,
        pluginRoot: T,
        environmentId: R,
        surfaceModules: p
      }, b === void 0 ? {} : {
        budgetMs: b
      }).then((A) => (O.loaded = A, t(`surface environment of ${i} (environment ${R}) loaded ` + p.map((S) => S.module).join(", ")), A)));
    return r.set(i, O), O.loading
  }
  return {
    environmentFor(i) {
      return c ??= rEr(d), x(i)
    },
    sweep: d,
    onDisposed: a.subscribe,
    disposeAll() {
      for (let [i, u] of [...r]) g(i, u);
      c?.(), c = void 0
    },
    count: () => r.size
  }
}
var Re = Oe();

function wor(r = {}) {
  let a = r.environments ?? Re,
    c = r.port ?? $e,
    g = new Map,
    d;

  function x(e, o) {
    e.snapshot = o;
    for (let s of e.listeners) s()
  }

  function i(e) {
    R(e, e.held), e.held = []
  }

  function u(e) {
    if (e.mountGeneration += 1, P(e), e.isDirty = !1, e.isOverBudget = !1, e.drawnSite = void 0, Iot.dropClient(S(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    V4.holdDrawing(e.plugin, e.drawing, []), i(e), e.surface?.unmount(), e.surface = void 0, c.cancel(e.id), n7r(e.id)
  }

  function f(e, o, s) {
    let y = de(e.plugin, e.module, o),
      C = `${e.plugin}: ${y}`;
    if (kc().log(`${C}; ${s}`, "warn"), ymo()) SW(e.plugin, y);
    return C
  }

  function p(e, o) {
    let s = f(e, l(o), "the instance unmounted");
    u(e), x(e, {
      status: "failed",
      text: s
    })
  }

  function T(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o()
    } catch (s) {
      p(e, s)
    }
  }

  function b(e, o) {
    let s = [],
      y = 0;
    try {
      let C = xe(e.plugin, o.render(), (H) => {
          let j = _qe.hold(e.plugin, (q) => {
            P(e), T(e, () => o.runHeld(H, q))
          });
          return s.push({
            surfaceHandle: j,
            environmentHandle: H
          }), j
        }),
        M = ikr(C, void 0, {
          surface: e.drawing.surface,
          within: _(e),
          measured: (H) => {
            y = H
          }
        });
      if (M !== void 0) throw new De(`returned a tree that does not validate (${M})`);
      return [C, s, y]
    } catch (C) {
      throw R(e, s), C
    }
  }

  function R(e, o) {
    _qe.release(e.plugin, o.map((s) => s.surfaceHandle)), e.surface?.dropHeld(o.map((s) => s.environmentHandle))
  }

  function O(e) {
    let {
      surface: o
    } = e;
    if (!o || e.isDestroyed) return;
    e.isDirty = !1, e.isRendering = !0;
    let s;
    try {
      s = b(e, o)
    } catch (ie) {
      p(e, ie);
      return
    } finally {
      e.isRendering = !1
    }
    let [y, C, M] = s, H = _(e) === B6e;
    if (H && !Iot.fits(S(e), M)) {
      e.isOverBudget = !0, R(e, C), f(e, `returned a tree of ${M} rows that, with the tree around the dialog and its other Clients, passes ${ENt}`, "the frame before it kept");
      return
    }
    e.isOverBudget = !1;
    let q = e.held;
    e.held = C;
    let B = Kho(y, e.drawing);
    if (R(e, q), e.drawnSite = _(e), x(e, {
        status: "drawn",
        tree: B
      }), H) Iot.recordClient(S(e), M)
  }

  function A(e) {
    for (let o of g.values())
      if (o.isOverBudget && o.requestId === e && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = !0, o.unpromptedRenders = 0, o.renderTimer = setImmediate(U, o)
  }
  let S = (e) => ({
    requestId: e.requestId,
    plugin: e.plugin,
    key: e.element
  });

  function D(e) {
    if (e.isDirty || e.isDestroyed || !e.surface) return;
    if (e.unpromptedRenders >= ye) {
      let o = new De(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
      if (e.isRendering) throw o;
      p(e, o);
      return
    }
    e.isDirty = !0, e.renderTimer = setImmediate(U, e)
  }

  function U(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, O(e)
  }

  function P(e) {
    for (let o of g.values())
      if (o.plugin === e.plugin) o.unpromptedRenders = 0
  }
  let z = (e, o) => c.post(e.id, Ben(Te(e), e.drawing.surface, o), (s) => {
    if (s.props !== void 0 && !e.isDestroyed) L(e, s.props)
  });

  function oe(e, o) {
    if (e.isDestroyed || e.surface) return;
    try {
      e.surface = o.mount({
        module: e.module,
        props: e.props,
        host: {
          schedule: () => D(e),
          post: (s) => z(e, s),
          startTimer: (s, y) => e.clock.every(s, () => {
            P(e), T(e, y)
          })
        }
      }), e.surface.resize(e.columns, e.rows)
    } catch (s) {
      p(e, s);
      return
    }
    O(e)
  }

  function K(e) {
    e.mountGeneration += 1;
    let o = e.mountGeneration,
      s = () => e.mountGeneration === o && !e.isDestroyed;
    a.environmentFor(e.plugin).then((y) => {
      if (s()) oe(e, y)
    }, (y) => {
      if (s()) p(e, y)
    })
  }

  function L(e, o) {
    if ($n(o) === $n(e.props)) return;
    e.props = o, P(e), T(e, () => {
      e.surface?.setProps(o)
    }), O(e)
  }

  function X(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), u(e), g.get(e.id) === e) g.delete(e.id)
  }

  function te(e) {
    if (e.holders === 0) X(e)
  }

  function ne(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    if (e.columns = o.columns, e.rows = o.rows, P(e), e.surface) e.surface.resize(o.columns, o.rows), O(e)
  }

  function se(e, o) {
    if (e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - N(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(te, 0, e);
    else if (!W(e)) F(e)
  }

  function W(e) {
    return e.surface === void 0 || e.drawnSite === _(e)
  }

  function F(e) {
    if (P(e), Iot.dropClient(S(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") x(e, {
      status: "loading"
    });
    O(e)
  }

  function _(e) {
    return e.dialogHolders > 0 ? B6e : e.rowSite ?? e.drawing.component
  }
  let V = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: (s) => (e.listeners.add(s), () => e.listeners.delete(s)),
    getSnapshot: () => e.snapshot,
    setProps: (s) => L(e, s),
    resize: (s, y) => ne(e, {
      columns: s,
      rows: y
    }),
    pointer: (s) => {
      P(e), T(e, () => e.surface?.pointer(s))
    },
    key: (s) => {
      P(e), T(e, () => e.surface?.key(s))
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    release: () => se(e, o)
  });

  function Y(e) {
    for (let o of g.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (u(o), x(o, {
          status: "loading"
        }), o.holders > 0) K(o)
    }
  }

  function Q(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, e.clock = o.clock;
    let s = N(o.component);
    if (e.dialogHolders += s, e.rowSite = s === 0 ? o.component : e.rowSite, W(e)) L(e, o.props);
    else e.props = o.props, T(e, () => {
      e.surface?.setProps(o.props)
    }), F(e);
    return V(e, o.component)
  }
  return {
    acquire(e) {
      d ??= [a.onDisposed(Y), Iot.onFreed(A)];
      let o = g.get(Z(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return Q(o, e);
      if (o) X(o);
      let y = he(e);
      return g.set(y.id, y), K(y), V(y, e.component)
    },
    remountPlugin: Y,
    count: () => g.size,
    dispose() {
      for (let e of d ?? []) e();
      d = void 0
    }
  }
}
var r7r = wor();
export {
  bor,
  Sor,
  qIe,
  pKt,
  n7r,
  wor,
  r7r
};
