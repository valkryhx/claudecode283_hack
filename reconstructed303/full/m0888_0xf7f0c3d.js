// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ie,
  AIe,
  Lje,
  _d
} from "B:/~BUN/root/chunk-hkh6hras.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Qn,
  PXe,
  i4n,
  Vme,
  Gk,
  _gt,
  qb,
  OM,
  Oje,
  nle,
  gBs,
  hBs,
  yBs,
  _Bs,
  Ban,
  N0r,
  FIo,
  h4n,
  kBs,
  EBs
} from "B:/~BUN/root/chunk-nw686kdq.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  Co
} from "B:/~BUN/root/chunk-d544j3ga.js";
import {
  oj
} from "B:/~BUN/root/chunk-01qdq3qc.js";
import {
  jc
} from "B:/~BUN/root/chunk-183sjefx.js";
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  lut,
  J6,
  Vbo,
  m0t,
  ATr,
  xTr,
  PTr,
  OTr,
  ITr,
  A1n,
  MTr,
  DTr,
  kfe,
  fG,
  sve,
  H1n,
  ive,
  ZTr,
  eCr,
  tCr,
  $So,
  nCr,
  rCr,
  U1n,
  wtn
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Fq
} from "B:/~BUN/root/chunk-rhpppw15.js";
import {
  gHt,
  hHt
} from "B:/~BUN/root/chunk-703q5f7c.js";
import {
  X6e
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  M8t,
  alt
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Ig
} from "B:/~BUN/root/chunk-25gtd35b.js";
import {
  aPe
} from "B:/~BUN/root/chunk-0x393xyp.js";
import {
  _s
} from "B:/~BUN/root/chunk-b4xxgr0r.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";

function YYr(r = {}) {
  let i = r.run ?? wtn,
    f = r.schedule ?? ((m) => {
      let c = setTimeout(m, Ig);
      return () => {
        clearTimeout(c)
      }
    }),
    w = r.warn ?? ((m) => {
      t(m, {
        level: "warn"
      })
    }),
    p = new Map,
    T, a = 0;

  function u() {
    T = void 0;
    let m = [...p.values()];
    p.clear();
    for (let {
        message: c,
        reply: E
      }
      of m) a += 1, i(c).then(E, (v) => {
      w(`ui.message ${c.plugin}/${c.message.element}: the chain threw (${d(v)}); no reply`)
    })
  }
  return {
    post(m, c, E) {
      p.set(m, {
        message: c,
        reply: E
      }), T ??= f(u)
    },
    cancel(m) {
      if (p.delete(m), p.size === 0 && T !== void 0) T(), T = void 0
    },
    dispatched: () => a
  }
}
var Ye = YYr();
var XYr = (r, i) => `${r}\x00client\x00${i}`;
var Ee = (r) => ({
  component: r.component,
  requestId: XYr(r.requestId, r.key),
  surface: r.surface
});
var ne = (r, i, f) => `Client ${i}: ${tCr(r,i,f)}`;
var eqe = He(_s({
  focusedId: null
}), (r) => r.setState(() => ({
  focusedId: null
})));
var tkn = (r) => eqe.setState((i) => i.focusedId === r ? i : {
  focusedId: r
});
var gJo = (r) => eqe.setState((i) => i.focusedId === r ? {
  focusedId: null
} : i);
var U = (r) => r === PXe ? 1 : 0;

function Ce(r, i) {
  let f = {
    surface: r.drawing.surface,
    component: i,
    requestId: r.requestId
  };
  return {
    site: f,
    bornAt: ive(f),
    holders: 0
  }
}
var Se = (r, i) => ({
  plugin: r,
  handle: i
});

function ke(r, i, f) {
  function w(p) {
    if (!N(p)) return p;
    let {
      props: T,
      hover: a,
      children: u,
      held: m
    } = p, c = {
      type: p.type
    };
    if (T !== void 0) c.props = T;
    if (a !== void 0) c.hover = a;
    if (gHt(p.type) && hHt(a) !== void 0) c.group = {
      plugin: r
    };
    if (typeof m === "number") c.press = Se(r, f(m));
    if ((typeof m !== "number" || p.type === "Button") && Array.isArray(u)) c.children = u.map(w);
    return c
  }
  return Lje(w(_gt(J(i))))
}
var se = (r) => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ie = 20;
var ae = 8;
var ve = 3;
var he = (r) => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});
var Re = (r, i) => ({
  id: se(r),
  plugin: r.plugin,
  module: r.module,
  element: r.key,
  drawing: Ee(r),
  requestId: r.requestId,
  clock: r.clock,
  props: r.props,
  handedProps: r.props,
  columns: 0,
  rows: 0,
  surface: void 0,
  snapshot: {
    status: "loading"
  },
  listeners: new Set,
  held: [],
  holders: 1,
  dialogHolders: U(r.component),
  rowSite: U(r.component) === 0 ? r.component : void 0,
  drawnSite: void 0,
  isOverBudget: !1,
  isDirty: !1,
  isRendering: !1,
  unpromptedRenders: 0,
  renderTimer: void 0,
  measurings: 0,
  frameOutcome: "unmeasured",
  isUnsettled: !1,
  terminal: i,
  selfDrawnTimer: void 0,
  renderedAt: i,
  thrownAt: void 0,
  toldLast: void 0,
  isDestroyed: !1,
  destroyTimer: void 0,
  mountGeneration: 0,
  heldIn: new Map,
  environmentId: void 0
});
var L = (r, i, f) => sve({
  key: [`${r.plugin}#${r.environmentId}`, `Client ${r.module}`, i].join(" "),
  lead: r.plugin,
  text: ne(r.plugin, r.module, f)
});
var Oe = {
  instance: `its region changed size on each of ${ae} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`,
  frame: `the Clients on screen were measured again in ${ie} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns`
};
var vo = (r, i) => L(r, `unsettled ${i}`, Oe[i]);

function B() {
  let r = Fq.get();
  return [r?.columns, r?.rows, r?.conversationColumns].join("x")
}

function Po(r = ZTr()) {
  return (i) => void r(i).catch((f) => {
    _d().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${d(f)})`, "warn")
  })
}

function De(r, i) {
  let {
    name: f,
    message: w
  } = Ban(r) ? r : i(r);
  return w.trim() !== "" ? w : f === "Error" ? eCr : f
}
var $e = (r) => `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
var Fe = ({
  pluginName: r,
  environmentId: i,
  owns: f
}) => M8t((w, p) => {
  if (!(f(p) || f(w))) return;
  let a = $e(kfe(h4n(w)));
  try {
    fG({
      key: `${r}#${i} Client rejection`,
      lead: r,
      text: a
    })
  } catch (u) {
    t(`${r}: the fault could not be said: ${d(u)}`, {
      level: "error"
    })
  }
  return `${r}: ${a}`
});
import * as fe from "vm";
var _e = (r) => Ban(r) && k(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var Te = 1000;
var je = 60000;
var Ue = "__surface__.run()";
var Le = (r, i) => ({
  ...r,
  timers: new Map,
  tick: i
});
async function Vo(r, i = {}) {
  let {
    pluginName: f,
    pluginRoot: w,
    environmentId: p,
    surfaceModules: T
  } = r, a = !1, {
    sandbox: u,
    context: m
  } = kBs(), c = yBs(m), E = (o) => Lje(c(o)), v = _Bs(m, w), O = hBs(m), y = nle(m), {
    intoEnvironment: M
  } = N0r(y, v, O), I = EBs(m, M);
  Object.assign(u, {
    console: gBs(I, `[${f}] surface`)
  });
  let me = Fe({
      pluginName: f,
      environmentId: p,
      owns: O
    }),
    C = new Map,
    A = 0,
    pe = 0;

  function H(o) {
    let n = C.get(o);
    if (!n) throw new Ie(`${f}: no client instance ${o}`);
    return n
  }

  function ue(o, n) {
    let s = H(o),
      l = `${f}: Client ${s.module}: post: the data`;
    if (n.length > i4n) throw new Ie(`${l} serializes to ${n.length} characters, over the ${i4n} limit; not sent`);
    let x = J(n),
      g = Vme(x);
    if (g !== void 0) throw new Ie(`${l} ${g}; not sent`);
    s.host.post(x)
  }

  function W(o, n) {
    let s = H(o),
      l = ++pe;
    return s.timers.set(l, s.host.startTimer(n, () => {
      if (C.get(o)?.timers.has(l) === !0) s.tick(l)
    })), l
  }
  let R = qb({
      schedule: OM(I((o) => {
        C.get(o)?.host.schedule()
      })),
      post: OM(I(ue)),
      startTimer: OM(I(W)),
      stopTimer: OM(I((o, n) => {
        let s = C.get(o);
        s?.timers.get(n)?.(), s?.timers.delete(n)
      })),
      fault: OM(I((o, n) => {
        let s = C.get(o);
        if (s === void 0) {
          t(`${f}: Client: a promise an instance since unmounted returned was rejected: ${kfe(n)}`, {
            level: "warn"
          });
          return
        }
        s.host.fault(new Ie(`${f}: Client ${s.module}: a promise it returned was rejected: ${n}`))
      }))
    }),
    {
      mount: ce,
      setProps: de,
      resize: q,
      stage: Y,
      dropHeld: Q,
      hasListener: G,
      unmount: Z
    } = fe.runInContext(Gk(nCr), m)(R, E(rCr())),
    le = new fe.Script(Gk(Ue), {
      filename: `${f} surface`
    }),
    xe = i.budgetMs ?? Te,
    _ = Oje(Te, i.budgetMs),
    ee = (o) => _e(o) ? `ran longer than its ${xe}ms budget` : De(o, y),
    oe = (o, n) => new Ie(`${f}: Client ${o}: ${ee(n)}`);

  function D(o, n, s) {
    if (a) throw AIe(f);
    Y(o.id, n, s === void 0 ? void 0 : E(s));
    try {
      return le.runInContext(m, _)
    } catch (l) {
      throw oe(o.module, l)
    }
  }
  let te = FIo({
      args: {
        pluginName: f,
        pluginRoot: w,
        linked: T.flatMap((o) => o.linked),
        links: T.flatMap((o) => o.links)
      },
      context: m,
      isScanned: !0,
      stamped: (o) => o(),
      evaluateOptions: _
    }),
    z = i.readyMs ?? alt,
    b = new Map;
  for (let o of T) b.set(o.module, await j(o));
  async function j(o) {
    try {
      let n = await Nt(te.load(o.modulePath, o.source), z, `its top level did not settle in ${z}ms`);
      return {
        component: o.component,
        exports: n
      }
    } catch (n) {
      return {
        error: new Ie(`${f}: Client ${o.module}: the surface module did not load: ${ee(n)}`)
      }
    }
  }

  function X(o) {
    if (!C.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if (o.timers.clear(), !a) Z(o.id)
  }

  function re(o) {
    let n = b.get(o);
    if (!n) {
      let g = [...b.keys()].join(", ") || "none";
      throw new Ie(`${f}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`)
    }
    if ("error" in n) throw n.error;
    let {
      component: s,
      exports: l
    } = n, x = Object.hasOwn(l, s) && l[s];
    if (typeof x !== "function") throw new Ie(`${f}: Client ${o}: its export ${s} is not a function (props, surface) => tree`);
    return x
  }

  function K(o) {
    if (!a) o()
  }

  function e(o) {
    let {
      props: n,
      host: s
    } = o;
    if (a) throw AIe(f);
    let l = re(o.module),
      x = ++A,
      g = Le({
        id: x,
        module: o.module,
        host: s
      }, (h) => {
        D(g, "tick", h)
      });
    return C.set(x, g), ce(x, l, E(n)), {
      id: x,
      render: () => {
        let h = D(g, "render");
        if (typeof h !== "string") throw oe(o.module, Error("the module returned no tree"));
        return h
      },
      setProps: (h) => K(() => de(x, E(h))),
      resize: (h, P) => K(() => q(x, h, P)),
      pointer: (h) => {
        D(g, "pointer", h)
      },
      key: (h) => {
        D(g, "key", h)
      },
      runHeld: (h, P) => {
        D(g, "held", {
          handle: h,
          event: P
        })
      },
      dropHeld: (h) => K(() => Q(x, E(h))),
      hasPointerListener: () => !a && G(x, "pointer"),
      hasKeyListener: () => !a && G(x, "key"),
      unmount: () => X(g)
    }
  }
  return {
    pluginName: f,
    environmentId: p,
    mount: e,
    dispose() {
      if (a) return;
      for (let o of [...C.values()]) X(o);
      setTimeout(me, je).unref(), a = !0
    },
    isDisposed: () => a
  }
}
var Ge = (r, i) => ({
  environmentId: r,
  loading: i,
  loaded: void 0
});
var ze = He(Co(), (r) => r.set(void 0));

function Xe() {
  let r = new Map,
    i = Me(),
    f;

  function w(a, u) {
    if (r.get(a) === u) r.delete(a);
    u.loading.then((c) => {
      c.dispose(), lut.forget(a), t(`surface environment of ${a} (environment ${u.environmentId}) disposed`)
    }, () => {}), queueMicrotask(() => i.emit(a))
  }

  function p() {
    let a = new Map(Ne().loadedModules.filter(jc).map((u) => [u.name, u.environmentId]));
    for (let [u, m] of [...r])
      if (a.get(u) !== m.environmentId) w(u, m)
  }

  function T(a) {
    let u = aPe(a);
    if (!u) return Promise.reject(new Ie(`${a}: Client: the plugin is not loaded`));
    let m = r.get(a);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) w(a, m);
    let {
      surfaceModules: c,
      pluginRoot: E
    } = u.args;
    if (!c || c.length === 0) return Promise.reject(new Ie(`${a}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let v = ze.get(),
      {
        environmentId: O
      } = u,
      y = Ge(O, Vo({
        pluginName: a,
        pluginRoot: E,
        environmentId: O,
        surfaceModules: c
      }, v === void 0 ? {} : {
        budgetMs: v
      }).then((M) => (y.loaded = M, t(`surface environment of ${a} (environment ${O}) loaded ` + c.map((I) => I.module).join(", ")), M)));
    return r.set(a, y), y.loading
  }
  return {
    environmentFor(a) {
      return f ??= X6e(p), T(a)
    },
    sweep: p,
    onDisposed: i.subscribe,
    disposeAll() {
      for (let [a, u] of [...r]) w(a, u);
      f?.(), f = void 0
    },
    count: () => r.size
  }
}
var Ke = Xe();

function JYr(r = {}) {
  let i = r.environments ?? Ke,
    f = r.port ?? Ye,
    w = r.raiseFault ?? Po(),
    p = new Map,
    T, a = 0,
    u = !1,
    m;

  function c(e, o) {
    e.snapshot = o;
    for (let n of e.listeners) n()
  }

  function E(e) {
    C(e, e.held), e.held = []
  }

  function v(e) {
    if (e.mountGeneration += 1, R(e), e.isDirty = !1, e.isOverBudget = !1, e.thrownAt = void 0, e.drawnSite = void 0, m0t.dropClient(H(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    clearImmediate(e.selfDrawnTimer), _(e), e.measurings = 0, e.frameOutcome = "unmeasured", e.isUnsettled = !1, J6.holdDrawing(e.plugin, e.drawing, []), E(e), e.surface?.unmount(), e.surface = void 0, f.cancel(e.id), gJo(e.id)
  }

  function O(e, o, n) {
    let s = ne(e.plugin, e.module, o),
      l = `${e.plugin}: ${s}`;
    return _d().log(`${l}; ${n}`, "warn"), oj(e.plugin, s, e.toldLast === s ? "once" : "again"), e.toldLast = s, l
  }

  function y(e, o, n) {
    let s = d(o),
      l = O(e, s, "the instance unmounted"),
      x = new Map(e.heldIn);
    v(e), c(e, {
      status: "failed",
      text: l
    }), w($So(he(e), e.drawing.surface, {
      phase: n,
      reason: s,
      sites: () => [...e.heldIn.values()].filter((g) => g.holders > 0).map((g) => ({
        site: g.site,
        bornAt: (x.get(g.site.component) ?? g).bornAt
      }))
    }))
  }
  let M = (e, o) => `${o} ${Qn({props:e.handedProps})}`;

  function I(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o()
    } catch (n) {
      y(e, n, "run")
    }
  }

  function me(e, o) {
    let n = [],
      s = [],
      l = [],
      x = 0,
      g = 0;
    try {
      let h = ke(e.plugin, o.render(), (S) => {
          let V = lut.hold(e.plugin, (ge) => {
            R(e), I(e, () => o.runHeld(S, ge))
          });
          return n.push({
            surfaceHandle: V,
            environmentHandle: S
          }), V
        }),
        P = ITr(h, void 0, {
          surface: e.drawing.surface,
          within: j(e),
          measured: (S, V) => {
            x = S, g = V
          }
        });
      if (P !== void 0) throw new Ie(`returned a tree that does not validate (${P})`);
      return [DTr(MTr(A1n(h, (S) => L(e, "borderStyle", H1n(S))), (S) => {
        s.push(S)
      }), e.drawing.surface, (S) => {
        l.push(S)
      }), n, x, s, l, g]
    } catch (h) {
      throw C(e, n), h
    }
  }

  function C(e, o) {
    lut.release(e.plugin, o.map((n) => n.surfaceHandle)), e.surface?.dropHeld(o.map((n) => n.environmentHandle))
  }

  function A(e) {
    let {
      surface: o
    } = e;
    if (!o || e.isDestroyed) return;
    e.isDirty = !1, e.isRendering = !0, e.renderedAt = B();
    let n;
    try {
      n = me(e, o)
    } catch (F) {
      y(e, F, "render");
      return
    } finally {
      e.isRendering = !1
    }
    let [s, l, x, g, h, P] = n, S = j(e) === PXe;
    if (S && !m0t.fits(H(e), x, P)) {
      e.isOverBudget = !0, C(e, l), O(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${P}`, "the frame before it kept");
      return
    }
    e.isOverBudget = !1;
    let ge = e.held;
    e.held = l;
    let Ve = Vbo(s, e.drawing);
    C(e, ge), e.drawnSite = j(e), c(e, {
      status: "drawn",
      tree: Ve
    });
    for (let F of g) L(e, ATr(F), xTr(F));
    for (let F of h) L(e, `${e.drawing.surface} ${PTr(F)}`, OTr(F));
    if (S) m0t.recordClient(H(e), x)
  }

  function pe(e) {
    for (let o of p.values())
      if (o.isOverBudget && o.requestId === e.requestId && o.drawing.surface === e.surface && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = !0, o.unpromptedRenders = 0, o.renderTimer = setImmediate(W, o)
  }
  let H = (e) => ({
    requestId: e.requestId,
    surface: e.drawing.surface,
    plugin: e.plugin,
    key: e.element
  });

  function ue(e) {
    if (e.isDirty || e.isDestroyed || !e.surface) return;
    if (e.unpromptedRenders >= ve) {
      let o = new Ie(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
      if (e.isRendering) throw o;
      y(e, o, "run");
      return
    }
    e.isDirty = !0, e.renderTimer = setImmediate(W, e)
  }

  function W(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, clearImmediate(e.selfDrawnTimer), e.selfDrawnTimer = setImmediate(_, e), A(e)
  }

  function R(e) {
    for (let o of p.values())
      if (o.plugin === e.plugin) o.unpromptedRenders = 0
  }

  function ce(e, o) {
    let n = e.mountGeneration;
    f.post(e.id, U1n(he(e), e.drawing.surface, o), (s) => {
      if (s.props !== void 0 && !e.isDestroyed && e.mountGeneration === n) Y(e, s.props)
    })
  }

  function de(e, o) {
    if (e.isDestroyed || e.surface) return;
    if (e.thrownAt !== void 0) {
      if (e.thrownAt === M(e, B())) return;
      e.thrownAt = void 0, e.props = e.handedProps;
      for (let [n, s] of e.heldIn)
        if (s.holders > 0) e.heldIn.set(n, {
          ...s,
          bornAt: ive(s.site)
        })
    }
    try {
      e.environmentId = o.environmentId, e.surface = o.mount({
        module: e.module,
        props: e.props,
        host: {
          schedule: () => ue(e),
          post: (n) => ce(e, n),
          startTimer: (n, s) => e.clock.every(n, () => {
            R(e), I(e, s)
          }),
          fault: (n) => I(e, () => {
            throw n
          })
        }
      }), e.surface.resize(e.columns, e.rows)
    } catch (n) {
      y(e, n, "load");
      return
    }
    A(e)
  }

  function q(e) {
    e.mountGeneration += 1;
    let o = e.mountGeneration,
      n = () => e.mountGeneration === o && !e.isDestroyed;
    i.environmentFor(e.plugin).then((s) => {
      if (n()) de(e, s)
    }, (s) => {
      if (n()) y(e, s, "load")
    })
  }

  function Y(e, o) {
    if (Qn(o) === Qn(e.props)) return;
    e.props = o, R(e), I(e, () => {
      e.surface?.setProps(o)
    }), A(e)
  }

  function Q(e, o) {
    e.handedProps = o, Y(e, o)
  }

  function G(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), v(e), p.get(e.id) === e) p.delete(e.id)
  }

  function Z() {
    m = void 0, a = 0;
    for (let e of p.values()) e.isUnsettled &&= e.frameOutcome !== "measured", e.measurings = 0, e.frameOutcome = "unmeasured"
  }

  function le(e) {
    let o = e.measurings >= (e.isUnsettled ? 1 : ae),
      n = e.measurings > 0 && a > ie;
    return o ? "instance" : n ? "frame" : void 0
  }

  function xe(e, o) {
    if (e.frameOutcome = "passed over", e.surface?.resize(e.columns, e.rows), !e.isUnsettled) e.isUnsettled = !0, vo(e, o)
  }

  function _(e) {
    e.selfDrawnTimer = void 0
  }

  function ee(e) {
    if (e.holders === 0) G(e)
  }

  function oe(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    let n = B(),
      s = n !== e.terminal,
      l = u && !s && e.measurings > 0;
    if (e.terminal = n, e.columns = o.columns, e.rows = o.rows, l) a += 1, u = !1;
    let x = s ? void 0 : le(e);
    if (x !== void 0) {
      xe(e, x);
      return
    }
    if (!s) e.measurings += 1;
    if (e.frameOutcome === "unmeasured") e.frameOutcome = "measured";
    if (m ??= setImmediate(Z), s || e.selfDrawnTimer === void 0) R(e);
    if (e.surface) e.surface.resize(o.columns, o.rows), A(e)
  }

  function D(e, o) {
    if (b(e, o, -1), e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - U(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(ee, 0, e);
    else if (!te(e)) z(e)
  }

  function te(e) {
    return e.surface === void 0 || e.drawnSite === j(e)
  }

  function z(e) {
    if (R(e), m0t.dropClient(H(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") c(e, {
      status: "loading"
    });
    A(e)
  }

  function b(e, o, n) {
    let s = e.heldIn.get(o) ?? Ce(e, o);
    e.heldIn.set(o, {
      ...s,
      holders: Math.max(0, s.holders + n)
    })
  }

  function j(e) {
    return e.dialogHolders > 0 ? PXe : e.rowSite ?? e.drawing.component
  }
  let X = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: (n) => (e.listeners.add(n), () => e.listeners.delete(n)),
    getSnapshot: () => e.snapshot,
    setProps: (n) => Q(e, n),
    laidOut: () => {
      u = !0
    },
    resize: (n, s) => oe(e, {
      columns: n,
      rows: s
    }),
    pointer: (n) => {
      R(e), I(e, () => e.surface?.pointer(n))
    },
    key: (n) => {
      R(e), I(e, () => e.surface?.key(n))
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    threw: (n) => {
      if (e.surface === void 0 || e.isDestroyed) return;
      y(e, n, "render"), e.thrownAt = M(e, e.renderedAt)
    },
    drawnAgain: () => e.thrownAt !== void 0 && e.thrownAt !== M(e, B()) && e.holders > 0 ? q(e) : void 0,
    release: () => D(e, o)
  });

  function re(e) {
    for (let o of p.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (v(o), o.toldLast = void 0, c(o, {
          status: "loading"
        }), o.holders > 0) q(o)
    }
  }

  function K(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, b(e, o.component, 1), e.clock = o.clock;
    let n = U(o.component);
    if (e.dialogHolders += n, e.rowSite = n === 0 ? o.component : e.rowSite, te(e)) Q(e, o.props);
    else e.handedProps = o.props, e.props = o.props, I(e, () => {
      e.surface?.setProps(o.props)
    }), z(e);
    return X(e, o.component)
  }
  return {
    acquire(e) {
      T ??= [i.onDisposed(re), m0t.onFreed(pe)];
      let o = p.get(se(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return K(o, e);
      if (o) G(o);
      let s = Re(e, B());
      return p.set(s.id, s), b(s, e.component, 1), q(s), X(s, e.component)
    },
    remountPlugin: re,
    count: () => p.size,
    dispose() {
      for (let e of T ?? []) e();
      T = void 0, clearImmediate(m), Z();
      for (let e of p.values()) clearImmediate(e.selfDrawnTimer), _(e)
    }
  }
}
var hJo = JYr();
export {
  YYr,
  XYr,
  eqe,
  tkn,
  gJo,
  JYr,
  hJo
};
