// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ie, AIe, Lje, _d } from "B:/~BUN/root/chunk-hkh6hras.js";
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Qn, PXe, i4n, Vme, Gk, _gt, qb, OM, Oje, nle, gBs, hBs, yBs, _Bs, Ban, N0r, FIo, h4n, kBs, EBs } from "B:/~BUN/root/chunk-nw686kdq.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Co } from "B:/~BUN/root/chunk-d544j3ga.js";
import { oj } from "B:/~BUN/root/chunk-01qdq3qc.js";
import { jc } from "B:/~BUN/root/chunk-183sjefx.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { lut, J6, Vbo, m0t, ATr, xTr, PTr, OTr, ITr, A1n, MTr, DTr, kfe, fG, sve, H1n, ive, ZTr, eCr, tCr, $So, nCr, rCr, U1n, wtn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Fq } from "B:/~BUN/root/chunk-rhpppw15.js";
import { gHt, hHt } from "B:/~BUN/root/chunk-703q5f7c.js";
import { X6e } from "B:/~BUN/root/chunk-k382hx6g.js";
import { M8t, alt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Ig } from "B:/~BUN/root/chunk-25gtd35b.js";
import { aPe } from "B:/~BUN/root/chunk-0x393xyp.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
function YYr(r = {}) {
  let i = r.run ?? wtn,
    f = r.schedule ?? (m => {
      let c = setTimeout(m, Ig);
      return () => {
        clearTimeout(c);
      };
    }),
    w = r.warn ?? (m => {
      t(m, {
        level: "warn"
      });
    }),
    p = new Map(),
    T,
    a = 0;
  function u() {
    T = void 0;
    let m = [...p.values()];
    p.clear();
    for (let {
      message: message,
      reply: reply
    } of m) a += 1, i(message).then(reply, v => {
      w(`ui.message ${message.plugin}/${message.message.element}: the chain threw (${d(v)}); no reply`);
    });
  }
  return {
    post(m, message_2, reply_2) {
      p.set(m, {
        message: message_2,
        reply: reply_2
      }), T ??= f(u);
    },
    cancel(m) {
      if (p.delete(m), p.size === 0 && T !== void 0) T(), T = void 0;
    },
    dispatched: () => a
  };
}
var Ye = YYr();
var XYr = (r, i) => `${r}\x00client\x00${i}`;
var Ee = r => ({
  component: r.component,
  requestId: XYr(r.requestId, r.key),
  surface: r.surface
});
var ne = (r, i, f) => `Client ${i}: ${tCr(r, i, f)}`;
var eqe = He(_s({
  focusedId: null
}), r => r.setState(() => ({
  focusedId: null
})));
var tkn = focusedId => eqe.setState(i => i.focusedId === focusedId ? i : {
  focusedId: focusedId
});
var gJo = r => eqe.setState(i => i.focusedId === r ? {
  focusedId: null
} : i);
var U = r => r === PXe ? 1 : 0;
function Ce(r, component) {
  let site = {
    surface: r.drawing.surface,
    component: component,
    requestId: r.requestId
  };
  return {
    site: site,
    bornAt: ive(site),
    holders: 0
  };
}
var Se = (plugin, handle) => ({
  plugin: plugin,
  handle: handle
});
function ke(plugin_2, i, f) {
  function w(p) {
    if (!N(p)) return p;
    let {
        props: props,
        hover: hover,
        children: children,
        held: held
      } = p,
      c = {
        type: p.type
      };
    if (props !== void 0) c.props = props;
    if (hover !== void 0) c.hover = hover;
    if (gHt(p.type) && hHt(hover) !== void 0) c.group = {
      plugin: plugin_2
    };
    if (typeof held === "number") c.press = Se(plugin_2, f(held));
    if ((typeof held !== "number" || p.type === "Button") && Array.isArray(children)) c.children = children.map(w);
    return c;
  }
  return Lje(w(_gt(J(i))));
}
var se = r => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ie = 20;
var ae = 8;
var ve = 3;
var he = r => ({
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
  listeners: new Set(),
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
  heldIn: new Map(),
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
  return [r?.columns, r?.rows, r?.conversationColumns].join("x");
}
function Po(r = ZTr()) {
  return i => void r(i).catch(f => {
    _d().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${d(f)})`, "warn");
  });
}
function De(r, i) {
  let {
    name: name,
    message: message_3
  } = Ban(r) ? r : i(r);
  return message_3.trim() !== "" ? message_3 : name === "Error" ? eCr : name;
}
var $e = r => `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
var Fe = ({
  pluginName: r,
  environmentId: environmentId,
  owns: owns
}) => M8t((w, p) => {
  if (!(owns(p) || owns(w))) return;
  let text = $e(kfe(h4n(w)));
  try {
    fG({
      key: `${r}#${environmentId} Client rejection`,
      lead: r,
      text: text
    });
  } catch (error) {
    t(`${r}: the fault could not be said: ${d(error)}`, {
      level: "error"
    });
  }
  return `${r}: ${text}`;
});
import * as fe from "vm";
var _e = r => Ban(r) && k(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var Te = 1000;
var je = 60000;
var Ue = "__surface__.run()";
var Le = (r, tick) => ({
  ...r,
  timers: new Map(),
  tick: tick
});
async function Vo(r, i = {}) {
  let {
      pluginName: pluginName,
      pluginRoot: pluginRoot,
      environmentId: environmentId_2,
      surfaceModules: surfaceModules
    } = r,
    a = !1,
    {
      sandbox: sandbox,
      context: context
    } = kBs(),
    c = yBs(context),
    E = o => Lje(c(o)),
    v = _Bs(context, pluginRoot),
    owns_2 = hBs(context),
    y = nle(context),
    {
      intoEnvironment: intoEnvironment
    } = N0r(y, v, owns_2),
    I = EBs(context, intoEnvironment);
  Object.assign(sandbox, {
    console: gBs(I, `[${pluginName}] surface`)
  });
  let me = Fe({
      pluginName: pluginName,
      environmentId: environmentId_2,
      owns: owns_2
    }),
    C = new Map(),
    A = 0,
    pe = 0;
  function H(o) {
    let n = C.get(o);
    if (!n) throw new Ie(`${pluginName}: no client instance ${o}`);
    return n;
  }
  function ue(o, n) {
    let s = H(o),
      l = `${pluginName}: Client ${s.module}: post: the data`;
    if (n.length > i4n) throw new Ie(`${l} serializes to ${n.length} characters, over the ${i4n} limit; not sent`);
    let x = J(n),
      g = Vme(x);
    if (g !== void 0) throw new Ie(`${l} ${g}; not sent`);
    s.host.post(x);
  }
  function W(o, n) {
    let s = H(o),
      l = ++pe;
    return s.timers.set(l, s.host.startTimer(n, () => {
      if (C.get(o)?.timers.has(l) === !0) s.tick(l);
    })), l;
  }
  let R = qb({
      schedule: OM(I(o => {
        C.get(o)?.host.schedule();
      })),
      post: OM(I(ue)),
      startTimer: OM(I(W)),
      stopTimer: OM(I((o, n) => {
        let s = C.get(o);
        s?.timers.get(n)?.(), s?.timers.delete(n);
      })),
      fault: OM(I((o, n) => {
        let s = C.get(o);
        if (s === void 0) {
          t(`${pluginName}: Client: a promise an instance since unmounted returned was rejected: ${kfe(n)}`, {
            level: "warn"
          });
          return;
        }
        s.host.fault(new Ie(`${pluginName}: Client ${s.module}: a promise it returned was rejected: ${n}`));
      }))
    }),
    {
      mount: mount,
      setProps: setProps,
      resize: resize,
      stage: stage,
      dropHeld: dropHeld,
      hasListener: hasListener,
      unmount: unmount
    } = fe.runInContext(Gk(nCr), context)(R, E(rCr())),
    le = new fe.Script(Gk(Ue), {
      filename: `${pluginName} surface`
    }),
    xe = i.budgetMs ?? Te,
    evaluateOptions = Oje(Te, i.budgetMs),
    ee = o => _e(o) ? `ran longer than its ${xe}ms budget` : De(o, y),
    oe = (o, n) => new Ie(`${pluginName}: Client ${o}: ${ee(n)}`);
  function D(o, n, s) {
    if (a) throw AIe(pluginName);
    stage(o.id, n, s === void 0 ? void 0 : E(s));
    try {
      return le.runInContext(context, evaluateOptions);
    } catch (error) {
      throw oe(o.module, error);
    }
  }
  let te = FIo({
      args: {
        pluginName: pluginName,
        pluginRoot: pluginRoot,
        linked: surfaceModules.flatMap(item => item.linked),
        links: surfaceModules.flatMap(item => item.links)
      },
      context: context,
      isScanned: !0,
      stamped: o => o(),
      evaluateOptions: evaluateOptions
    }),
    z = i.readyMs ?? alt,
    b = new Map();
  for (let o of surfaceModules) b.set(o.module, await j(o));
  async function j(o) {
    try {
      let exports = await Nt(te.load(o.modulePath, o.source), z, `its top level did not settle in ${z}ms`);
      return {
        component: o.component,
        exports: exports
      };
    } catch (n) {
      return {
        error: new Ie(`${pluginName}: Client ${o.module}: the surface module did not load: ${ee(n)}`)
      };
    }
  }
  function X(o) {
    if (!C.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if (o.timers.clear(), !a) unmount(o.id);
  }
  function re(o) {
    let n = b.get(o);
    if (!n) {
      let g = [...b.keys()].join(", ") || "none";
      throw new Ie(`${pluginName}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`);
    }
    if ("error" in n) throw n.error;
    let {
        component: component_2,
        exports: exports_2
      } = n,
      x = Object.hasOwn(exports_2, component_2) && exports_2[component_2];
    if (typeof x !== "function") throw new Ie(`${pluginName}: Client ${o}: its export ${component_2} is not a function (props, surface) => tree`);
    return x;
  }
  function K(o) {
    if (!a) o();
  }
  function mount_2(o) {
    let {
      props: props_2,
      host: host
    } = o;
    if (a) throw AIe(pluginName);
    let l = re(o.module),
      id = ++A,
      g = Le({
        id: id,
        module: o.module,
        host: host
      }, h => {
        D(g, "tick", h);
      });
    return C.set(id, g), mount(id, l, E(props_2)), {
      id: id,
      render: () => {
        let h = D(g, "render");
        if (typeof h !== "string") throw oe(o.module, Error("the module returned no tree"));
        return h;
      },
      setProps: h => K(() => setProps(id, E(h))),
      resize: (h, P) => K(() => resize(id, h, P)),
      pointer: h => {
        D(g, "pointer", h);
      },
      key: h => {
        D(g, "key", h);
      },
      runHeld: (handle_2, event) => {
        D(g, "held", {
          handle: handle_2,
          event: event
        });
      },
      dropHeld: h => K(() => dropHeld(id, E(h))),
      hasPointerListener: () => !a && hasListener(id, "pointer"),
      hasKeyListener: () => !a && hasListener(id, "key"),
      unmount: () => X(g)
    };
  }
  return {
    pluginName: pluginName,
    environmentId: environmentId_2,
    mount: mount_2,
    dispose() {
      if (a) return;
      for (let o of [...C.values()]) X(o);
      setTimeout(me, je).unref(), a = !0;
    },
    isDisposed: () => a
  };
}
var Ge = (environmentId_3, loading) => ({
  environmentId: environmentId_3,
  loading: loading,
  loaded: void 0
});
var ze = He(Co(), r => r.set(void 0));
function Xe() {
  let r = new Map(),
    i = Me(),
    f;
  function w(a, u) {
    if (r.get(a) === u) r.delete(a);
    u.loading.then(c => {
      c.dispose(), lut.forget(a), t(`surface environment of ${a} (environment ${u.environmentId}) disposed`);
    }, () => {}), queueMicrotask(() => i.emit(a));
  }
  function sweep() {
    let a = new Map(Ne().loadedModules.filter(jc).map(item => [item.name, item.environmentId]));
    for (let [u, m] of [...r]) if (a.get(u) !== m.environmentId) w(u, m);
  }
  function T(pluginName_2) {
    let u = aPe(pluginName_2);
    if (!u) return Promise.reject(new Ie(`${pluginName_2}: Client: the plugin is not loaded`));
    let m = r.get(pluginName_2);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) w(pluginName_2, m);
    let {
      surfaceModules: surfaceModules_2,
      pluginRoot: pluginRoot_2
    } = u.args;
    if (!surfaceModules_2 || surfaceModules_2.length === 0) return Promise.reject(new Ie(`${pluginName_2}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let budgetMs = ze.get(),
      {
        environmentId: environmentId_4
      } = u,
      y = Ge(environmentId_4, Vo({
        pluginName: pluginName_2,
        pluginRoot: pluginRoot_2,
        environmentId: environmentId_4,
        surfaceModules: surfaceModules_2
      }, budgetMs === void 0 ? {} : {
        budgetMs: budgetMs
      }).then(M => (y.loaded = M, t(`surface environment of ${pluginName_2} (environment ${environmentId_4}) loaded ` + surfaceModules_2.map(item => item.module).join(", ")), M)));
    return r.set(pluginName_2, y), y.loading;
  }
  return {
    environmentFor(a) {
      return f ??= X6e(sweep), T(a);
    },
    sweep: sweep,
    onDisposed: i.subscribe,
    disposeAll() {
      for (let [a, u] of [...r]) w(a, u);
      f?.(), f = void 0;
    },
    count: () => r.size
  };
}
var Ke = Xe();
function JYr(r = {}) {
  let i = r.environments ?? Ke,
    f = r.port ?? Ye,
    w = r.raiseFault ?? Po(),
    p = new Map(),
    T,
    a = 0,
    u = !1,
    m;
  function c(e, o) {
    e.snapshot = o;
    for (let n of e.listeners) n();
  }
  function E(e) {
    C(e, e.held), e.held = [];
  }
  function v(e) {
    if (e.mountGeneration += 1, R(e), e.isDirty = !1, e.isOverBudget = !1, e.thrownAt = void 0, e.drawnSite = void 0, m0t.dropClient(H(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    clearImmediate(e.selfDrawnTimer), _(e), e.measurings = 0, e.frameOutcome = "unmeasured", e.isUnsettled = !1, J6.holdDrawing(e.plugin, e.drawing, []), E(e), e.surface?.unmount(), e.surface = void 0, f.cancel(e.id), gJo(e.id);
  }
  function O(e, o, n) {
    let s = ne(e.plugin, e.module, o),
      l = `${e.plugin}: ${s}`;
    return _d().log(`${l}; ${n}`, "warn"), oj(e.plugin, s, e.toldLast === s ? "once" : "again"), e.toldLast = s, l;
  }
  function y(e, o, phase) {
    let reason = d(o),
      text_2 = O(e, reason, "the instance unmounted"),
      x = new Map(e.heldIn);
    v(e), c(e, {
      status: "failed",
      text: text_2
    }), w($So(he(e), e.drawing.surface, {
      phase: phase,
      reason: reason,
      sites: () => [...e.heldIn.values()].filter(item => item.holders > 0).map(item => ({
        site: item.site,
        bornAt: (x.get(item.site.component) ?? item).bornAt
      }))
    }));
  }
  let M = (e, o) => `${o} ${Qn({
    props: e.handedProps
  })}`;
  function I(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o();
    } catch (error) {
      y(e, error, "run");
    }
  }
  function me(e, o) {
    let n = [],
      s = [],
      l = [],
      x = 0,
      g = 0;
    try {
      let h = ke(e.plugin, o.render(), environmentHandle => {
          let surfaceHandle = lut.hold(e.plugin, ge => {
            R(e), I(e, () => o.runHeld(environmentHandle, ge));
          });
          return n.push({
            surfaceHandle: surfaceHandle,
            environmentHandle: environmentHandle
          }), surfaceHandle;
        }),
        P = ITr(h, void 0, {
          surface: e.drawing.surface,
          within: j(e),
          measured: (S, V) => {
            x = S, g = V;
          }
        });
      if (P !== void 0) throw new Ie(`returned a tree that does not validate (${P})`);
      return [DTr(MTr(A1n(h, S => L(e, "borderStyle", H1n(S))), S => {
        s.push(S);
      }), e.drawing.surface, S => {
        l.push(S);
      }), n, x, s, l, g];
    } catch (error) {
      throw C(e, n), error;
    }
  }
  function C(e, o) {
    lut.release(e.plugin, o.map(item => item.surfaceHandle)), e.surface?.dropHeld(o.map(item => item.environmentHandle));
  }
  function A(e) {
    let {
      surface: surface
    } = e;
    if (!surface || e.isDestroyed) return;
    e.isDirty = !1, e.isRendering = !0, e.renderedAt = B();
    let n;
    try {
      n = me(e, surface);
    } catch (error) {
      y(e, error, "render");
      return;
    } finally {
      e.isRendering = !1;
    }
    let [s, l, x, g, h, P] = n,
      S = j(e) === PXe;
    if (S && !m0t.fits(H(e), x, P)) {
      e.isOverBudget = !0, C(e, l), O(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${P}`, "the frame before it kept");
      return;
    }
    e.isOverBudget = !1;
    let held_2 = e.held;
    e.held = l;
    let tree = Vbo(s, e.drawing);
    C(e, held_2), e.drawnSite = j(e), c(e, {
      status: "drawn",
      tree: tree
    });
    for (let F of g) L(e, ATr(F), xTr(F));
    for (let F of h) L(e, `${e.drawing.surface} ${PTr(F)}`, OTr(F));
    if (S) m0t.recordClient(H(e), x);
  }
  function pe(e) {
    for (let o of p.values()) if (o.isOverBudget && o.requestId === e.requestId && o.drawing.surface === e.surface && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = !0, o.unpromptedRenders = 0, o.renderTimer = setImmediate(W, o);
  }
  let H = e => ({
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
      return;
    }
    e.isDirty = !0, e.renderTimer = setImmediate(W, e);
  }
  function W(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, clearImmediate(e.selfDrawnTimer), e.selfDrawnTimer = setImmediate(_, e), A(e);
  }
  function R(e) {
    for (let o of p.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  function ce(e, o) {
    let mountGeneration = e.mountGeneration;
    f.post(e.id, U1n(he(e), e.drawing.surface, o), s => {
      if (s.props !== void 0 && !e.isDestroyed && e.mountGeneration === mountGeneration) Y(e, s.props);
    });
  }
  function de(e, o) {
    if (e.isDestroyed || e.surface) return;
    if (e.thrownAt !== void 0) {
      if (e.thrownAt === M(e, B())) return;
      e.thrownAt = void 0, e.props = e.handedProps;
      for (let [n, s] of e.heldIn) if (s.holders > 0) e.heldIn.set(n, {
        ...s,
        bornAt: ive(s.site)
      });
    }
    try {
      e.environmentId = o.environmentId, e.surface = o.mount({
        module: e.module,
        props: e.props,
        host: {
          schedule: () => ue(e),
          post: n => ce(e, n),
          startTimer: (n, s) => e.clock.every(n, () => {
            R(e), I(e, s);
          }),
          fault: n => I(e, () => {
            throw n;
          })
        }
      }), e.surface.resize(e.columns, e.rows);
    } catch (error) {
      y(e, error, "load");
      return;
    }
    A(e);
  }
  function q(e) {
    e.mountGeneration += 1;
    let mountGeneration_2 = e.mountGeneration,
      n = () => e.mountGeneration === mountGeneration_2 && !e.isDestroyed;
    i.environmentFor(e.plugin).then(s => {
      if (n()) de(e, s);
    }, s => {
      if (n()) y(e, s, "load");
    });
  }
  function Y(e, o) {
    if (Qn(o) === Qn(e.props)) return;
    e.props = o, R(e), I(e, () => {
      e.surface?.setProps(o);
    }), A(e);
  }
  function Q(e, o) {
    e.handedProps = o, Y(e, o);
  }
  function G(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), v(e), p.get(e.id) === e) p.delete(e.id);
  }
  function Z() {
    m = void 0, a = 0;
    for (let e of p.values()) e.isUnsettled &&= e.frameOutcome !== "measured", e.measurings = 0, e.frameOutcome = "unmeasured";
  }
  function le(e) {
    let o = e.measurings >= (e.isUnsettled ? 1 : ae),
      n = e.measurings > 0 && a > ie;
    return o ? "instance" : n ? "frame" : void 0;
  }
  function xe(e, o) {
    if (e.frameOutcome = "passed over", e.surface?.resize(e.columns, e.rows), !e.isUnsettled) e.isUnsettled = !0, vo(e, o);
  }
  function _(e) {
    e.selfDrawnTimer = void 0;
  }
  function ee(e) {
    if (e.holders === 0) G(e);
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
      return;
    }
    if (!s) e.measurings += 1;
    if (e.frameOutcome === "unmeasured") e.frameOutcome = "measured";
    if (m ??= setImmediate(Z), s || e.selfDrawnTimer === void 0) R(e);
    if (e.surface) e.surface.resize(o.columns, o.rows), A(e);
  }
  function D(e, o) {
    if (b(e, o, -1), e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - U(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(ee, 0, e);else if (!te(e)) z(e);
  }
  function te(e) {
    return e.surface === void 0 || e.drawnSite === j(e);
  }
  function z(e) {
    if (R(e), m0t.dropClient(H(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") c(e, {
      status: "loading"
    });
    A(e);
  }
  function b(e, o, n) {
    let s = e.heldIn.get(o) ?? Ce(e, o);
    e.heldIn.set(o, {
      ...s,
      holders: Math.max(0, s.holders + n)
    });
  }
  function j(e) {
    return e.dialogHolders > 0 ? PXe : e.rowSite ?? e.drawing.component;
  }
  let X = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: n => (e.listeners.add(n), () => e.listeners.delete(n)),
    getSnapshot: () => e.snapshot,
    setProps: n => Q(e, n),
    laidOut: () => {
      u = !0;
    },
    resize: (columns, rows) => oe(e, {
      columns: columns,
      rows: rows
    }),
    pointer: n => {
      R(e), I(e, () => e.surface?.pointer(n));
    },
    key: n => {
      R(e), I(e, () => e.surface?.key(n));
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    threw: n => {
      if (e.surface === void 0 || e.isDestroyed) return;
      y(e, n, "render"), e.thrownAt = M(e, e.renderedAt);
    },
    drawnAgain: () => e.thrownAt !== void 0 && e.thrownAt !== M(e, B()) && e.holders > 0 ? q(e) : void 0,
    release: () => D(e, o)
  });
  function remountPlugin(e) {
    for (let o of p.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (v(o), o.toldLast = void 0, c(o, {
        status: "loading"
      }), o.holders > 0) q(o);
    }
  }
  function K(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, b(e, o.component, 1), e.clock = o.clock;
    let n = U(o.component);
    if (e.dialogHolders += n, e.rowSite = n === 0 ? o.component : e.rowSite, te(e)) Q(e, o.props);else e.handedProps = o.props, e.props = o.props, I(e, () => {
      e.surface?.setProps(o.props);
    }), z(e);
    return X(e, o.component);
  }
  return {
    acquire(e) {
      T ??= [i.onDisposed(remountPlugin), m0t.onFreed(pe)];
      let o = p.get(se(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return K(o, e);
      if (o) G(o);
      let s = Re(e, B());
      return p.set(s.id, s), b(s, e.component, 1), q(s), X(s, e.component);
    },
    remountPlugin: remountPlugin,
    count: () => p.size,
    dispose() {
      for (let e of T ?? []) e();
      T = void 0, clearImmediate(m), Z();
      for (let e of p.values()) clearImmediate(e.selfDrawnTimer), _(e);
    }
  };
}
var hJo = JYr();
export { YYr, XYr, eqe, tkn, gJo, JYr, hJo };