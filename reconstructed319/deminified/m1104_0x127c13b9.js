// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $e, FNe } from "B:/~BUN/root/chunk-fg0appz9.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { x2e, mxr, pRe, bR, O2e, jse, Mxr, Dxr, Lxr, Nxr, Vrn, Krn, gHt, _Un, Hxr, $xr, pk, VF, S4i, w4i, k4i, v4i, vUn, LSo, gxs, Zxr, A4i, x4i } from "B:/~BUN/root/chunk-n98vg3jf.js";
import { aZe, qd } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Js } from "B:/~BUN/root/chunk-yr3hf5bg.js";
import { cZe, Sfe } from "B:/~BUN/root/chunk-0aq7t0nw.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { kq } from "B:/~BUN/root/chunk-0s00dkj6.js";
import { Bf } from "B:/~BUN/root/chunk-sjvfcp1z.js";
import { D6, yMt, poe, mcs, pTe, XDe, Wgr, JDe, Wao, zao, Gao, Ocs, Vao, Kao, Xgr, $On } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { zWe } from "B:/~BUN/root/chunk-05q1awc0.js";
import { W$ } from "B:/~BUN/root/chunk-6sbka0ts.js";
import { U1e, rdt, FOt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Lg } from "B:/~BUN/root/chunk-e7wx2kwq.js";
import { KWe } from "B:/~BUN/root/chunk-vxbt81wk.js";
import { go } from "B:/~BUN/root/chunk-eyrj3wyr.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var j2t = {};
Rr(j2t, {
  clientFocusStore: () => lOe,
  default: () => j2t,
  focusClient: () => fgn,
  focusedClientId: () => so,
  releaseClientFocus: () => rBo
});
function tBo(r = {}) {
  let i = r.run ?? $On,
    f = r.schedule ?? (m => {
      let c = setTimeout(m, Lg);
      return () => {
        clearTimeout(c);
      };
    }),
    T = r.warn ?? (m => {
      t(m, {
        level: "warn"
      });
    }),
    p = new Map(),
    w,
    a = 0;
  function u() {
    w = void 0;
    let m = [...p.values()];
    p.clear();
    for (let {
      message: message,
      reply: reply
    } of m) a += 1, i(message).then(reply, v => {
      T(`ui.message ${message.plugin}/${message.message.element}: the chain threw (${d(v)}); no reply`);
    });
  }
  return {
    post(m, message_2, reply_2) {
      p.set(m, {
        message: message_2,
        reply: reply_2
      }), w ??= f(u);
    },
    cancel(m) {
      if (p.delete(m), p.size === 0 && w !== void 0) w(), w = void 0;
    },
    dispatched: () => a
  };
}
var We = tBo();
var nBo = (r, i) => `${r}\x00client\x00${i}`;
var Ee = r => ({
  component: r.component,
  requestId: nBo(r.requestId, r.key),
  surface: r.surface
});
var ne = (r, i, f) => `Client ${i}: ${Gao(r, i, f)}`;
var lOe = he(Hs({
  focusedId: null
}), r => r.setState(() => ({
  focusedId: null
})));
var fgn = focusedId => lOe.setState(i => i.focusedId === focusedId ? i : {
  focusedId: focusedId
});
var so = () => lOe.getState().focusedId;
var rBo = r => lOe.setState(i => i.focusedId === r ? {
  focusedId: null
} : i);
var U = r => r === x2e ? 1 : 0;
function ye(r, component) {
  let site = {
    surface: r.drawing.surface,
    component: component,
    requestId: r.requestId
  };
  return {
    site: site,
    bornAt: JDe(site),
    holders: 0
  };
}
var Ce = (plugin, handle) => ({
  plugin: plugin,
  handle: handle
});
function Se(plugin_2, i, f) {
  function T(p) {
    if (!D(p)) return p;
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
    if (Vrn(p.type) && Krn(hover) !== void 0) c.group = {
      plugin: plugin_2
    };
    if (typeof held === "number") c.press = Ce(plugin_2, f(held));
    if ((typeof held !== "number" || p.type === "Button") && Array.isArray(children)) c.children = children.map(T);
    return c;
  }
  return aZe(T(O2e(ee(i))));
}
var se = r => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ie = 20;
var ae = 8;
var ke = 3;
var we = r => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});
var ve = (r, i) => ({
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
var L = (r, i, f) => XDe({
  key: [`${r.plugin}#${r.environmentId}`, `Client ${r.module}`, i].join(" "),
  lead: r.plugin,
  text: ne(r.plugin, r.module, f)
});
var Re = {
  instance: `its region changed size on each of ${ae} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`,
  frame: `the Clients on screen were measured again in ${ie} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns`
};
var vo = (r, i) => L(r, `unsettled ${i}`, Re[i]);
function B() {
  let r = W$.get();
  return [r?.columns, r?.rows, r?.conversationColumns].join("x");
}
function Po() {
  let r = Wao();
  return i => void r(i).catch(f => {
    qd().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${d(f)})`, "warn");
  });
}
function Me(r, i) {
  let {
    name: name,
    message: message_3
  } = vUn(r) ? r : i(r);
  return message_3.trim() !== "" ? message_3 : name === "Error" ? zao : name;
}
var be = r => `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
var Fe = ({
  pluginName: r,
  environmentId: environmentId,
  owns: owns
}) => rdt((T, p) => {
  if (![p, T].some(item => !U1e(item) && owns(item))) return;
  let text = be(pTe(Zxr(T)));
  try {
    D6({
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
var _e = r => vUn(r) && k(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var Te = 1000;
var je = 60000;
var Ne = "__surface__.run()";
var Ue = (r, tick) => ({
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
    } = A4i(),
    c = k4i(context),
    E = o => aZe(c(o)),
    v = v4i(context, pluginRoot),
    owns_2 = w4i(context),
    y = Sfe(context),
    {
      intoEnvironment: intoEnvironment
    } = LSo(y, v, owns_2),
    I = x4i(context, intoEnvironment);
  Object.assign(sandbox, {
    console: S4i(I, `[${pluginName}] surface`)
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
    if (!n) throw new $e(`${pluginName}: no client instance ${o}`);
    return n;
  }
  function ue(o, n) {
    let s = H(o),
      l = `${pluginName}: Client ${s.module}: post: the data`;
    if (n.length > mxr) throw new $e(`${l} serializes to ${n.length} characters, over the ${mxr} limit; not sent`);
    let x = ee(n),
      g = pRe(x);
    if (g !== void 0) throw new $e(`${l} ${g}; not sent`);
    s.host.post(x);
  }
  function W(o, n) {
    let s = H(o),
      l = ++pe;
    return s.timers.set(l, s.host.startTimer(n, () => {
      if (C.get(o)?.timers.has(l) === !0) s.tick(l);
    })), l;
  }
  let R = pk({
      schedule: VF(I(o => {
        C.get(o)?.host.schedule();
      })),
      post: VF(I(ue)),
      startTimer: VF(I(W)),
      stopTimer: VF(I((o, n) => {
        let s = C.get(o);
        s?.timers.get(n)?.(), s?.timers.delete(n);
      })),
      fault: VF(I((o, n) => {
        let s = C.get(o);
        if (s === void 0) {
          t(`${pluginName}: Client: a promise an instance since unmounted returned was rejected: ${pTe(n)}`, {
            level: "warn"
          });
          return;
        }
        s.host.fault(new $e(`${pluginName}: Client ${s.module}: a promise it returned was rejected: ${n}`));
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
    } = fe.runInContext(bR(Vao), context)(R, E(Kao())),
    le = new fe.Script(bR(Ne), {
      filename: `${pluginName} surface`
    }),
    xe = i.budgetMs ?? Te,
    evaluateOptions = cZe(Te, i.budgetMs),
    Z = o => _e(o) ? `ran longer than its ${xe}ms budget` : Me(o, y),
    oe = (o, n) => new $e(`${pluginName}: Client ${o}: ${Z(n)}`);
  function b(o, n, s) {
    if (a) throw FNe(pluginName);
    stage(o.id, n, s === void 0 ? void 0 : E(s));
    try {
      return le.runInContext(context, evaluateOptions);
    } catch (error) {
      throw oe(o.module, error);
    }
  }
  let te = gxs({
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
    z = i.readyMs ?? FOt,
    F = new Map();
  for (let o of surfaceModules) F.set(o.module, await N(o));
  async function N(o) {
    try {
      let exports = await zt(te.load(o.modulePath, o.source), z, `its top level did not settle in ${z}ms`);
      return {
        component: o.component,
        exports: exports
      };
    } catch (n) {
      return {
        error: new $e(`${pluginName}: Client ${o.module}: the surface module did not load: ${Z(n)}`)
      };
    }
  }
  function X(o) {
    if (!C.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if (o.timers.clear(), !a) unmount(o.id);
  }
  function re(o) {
    let n = F.get(o);
    if (!n) {
      let g = [...F.keys()].join(", ") || "none";
      throw new $e(`${pluginName}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`);
    }
    if ("error" in n) throw n.error;
    let {
        component: component_2,
        exports: exports_2
      } = n,
      x = Object.hasOwn(exports_2, component_2) && exports_2[component_2];
    if (typeof x !== "function") throw new $e(`${pluginName}: Client ${o}: its export ${component_2} is not a function (props, surface) => tree`);
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
    if (a) throw FNe(pluginName);
    let l = re(o.module),
      id = ++A,
      g = Ue({
        id: id,
        module: o.module,
        host: host
      }, h => {
        b(g, "tick", h);
      });
    return C.set(id, g), mount(id, l, E(props_2)), {
      id: id,
      render: () => {
        let h = b(g, "render");
        if (typeof h !== "string") throw oe(o.module, Error("the module returned no tree"));
        return h;
      },
      setProps: h => K(() => setProps(id, E(h))),
      resize: (h, P) => K(() => resize(id, h, P)),
      pointer: h => {
        b(g, "pointer", h);
      },
      key: h => {
        b(g, "key", h);
      },
      runHeld: (handle_2, event) => {
        b(g, "held", {
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
var qe = (environmentId_3, loading) => ({
  environmentId: environmentId_3,
  loading: loading,
  loaded: void 0
});
var Ge = he(go(), r => r.set(void 0));
function ze() {
  let r = new Map(),
    i = De(),
    f;
  function T(a, u) {
    if (r.get(a) === u) r.delete(a);
    u.loading.then(c => {
      c.dispose(), yMt.forget(a), t(`surface environment of ${a} (environment ${u.environmentId}) disposed`);
    }, () => {}), queueMicrotask(() => i.emit(a));
  }
  function sweep() {
    let a = new Map(Ae().loadedModules.filter(Bf).map(item => [item.name, item.environmentId]));
    for (let [u, m] of [...r]) if (a.get(u) !== m.environmentId) T(u, m);
  }
  function w(pluginName_2) {
    let u = KWe(pluginName_2);
    if (!u) return Promise.reject(new $e(`${pluginName_2}: Client: the plugin is not loaded`));
    let m = r.get(pluginName_2);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) T(pluginName_2, m);
    let {
      surfaceModules: surfaceModules_2,
      pluginRoot: pluginRoot_2
    } = u.args;
    if (!surfaceModules_2 || surfaceModules_2.length === 0) return Promise.reject(new $e(`${pluginName_2}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let budgetMs = Ge.get(),
      {
        environmentId: environmentId_4
      } = u,
      y = qe(environmentId_4, Vo({
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
      return f ??= zWe(sweep), w(a);
    },
    sweep: sweep,
    onDisposed: i.subscribe,
    disposeAll() {
      for (let [a, u] of [...r]) T(a, u);
      f?.(), f = void 0;
    },
    count: () => r.size
  };
}
var Xe = ze();
function oBo(r = {}) {
  let i = r.environments ?? Xe,
    f = r.port ?? We,
    T = r.raiseFault ?? Po(),
    p = new Map(),
    w,
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
    if (e.mountGeneration += 1, R(e), e.isDirty = !1, e.isOverBudget = !1, e.thrownAt = void 0, e.drawnSite = void 0, jse.dropClient(H(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    clearImmediate(e.selfDrawnTimer), j(e), e.measurings = 0, e.frameOutcome = "unmeasured", e.isUnsettled = !1, poe.holdDrawing(e.plugin, e.drawing, []), E(e), e.surface?.unmount(), e.surface = void 0, f.cancel(e.id), rBo(e.id);
  }
  function O(e, o, n) {
    let s = ne(e.plugin, e.module, o),
      l = `${e.plugin}: ${s}`;
    return qd().log(`${l}; ${n}`, "warn"), kq(e.plugin, s, e.toldLast === s ? "once" : "again"), e.toldLast = s, l;
  }
  function y(e, o, phase) {
    let reason = d(o),
      text_2 = O(e, reason, "the instance unmounted"),
      x = new Map(e.heldIn);
    v(e), c(e, {
      status: "failed",
      text: text_2
    }), T(Ocs(we(e), e.drawing.surface, {
      phase: phase,
      reason: reason,
      sites: () => [...e.heldIn.values()].filter(item => item.holders > 0).map(item => ({
        site: item.site,
        bornAt: (x.get(item.site.component) ?? item).bornAt
      }))
    }));
  }
  let M = (e, o) => `${o} ${Js({
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
      let h = Se(e.plugin, o.render(), environmentHandle => {
          let surfaceHandle = yMt.hold(e.plugin, ge => {
            R(e), I(e, () => o.runHeld(environmentHandle, ge));
          });
          return n.push({
            surfaceHandle: surfaceHandle,
            environmentHandle: environmentHandle
          }), surfaceHandle;
        }),
        P = gHt(h, void 0, {
          surface: e.drawing.surface,
          within: N(e),
          measured: (S, V) => {
            x = S, g = V;
          }
        });
      if (P !== void 0) throw new $e(`returned a tree that does not validate (${P})`);
      return [$xr(Hxr(_Un(h, S => L(e, "borderStyle", Wgr(S))), S => {
        s.push(S);
      }), e.drawing.surface, S => {
        l.push(S);
      }), n, x, s, l, g];
    } catch (error) {
      throw C(e, n), error;
    }
  }
  function C(e, o) {
    yMt.release(e.plugin, o.map(item => item.surfaceHandle)), e.surface?.dropHeld(o.map(item => item.environmentHandle));
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
      S = N(e) === x2e;
    if (S && !jse.fits(H(e), x, P)) {
      e.isOverBudget = !0, C(e, l), O(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${P}`, "the frame before it kept");
      return;
    }
    e.isOverBudget = !1;
    let held_2 = e.held;
    e.held = l;
    let tree = mcs(s, e.drawing);
    C(e, held_2), e.drawnSite = N(e), c(e, {
      status: "drawn",
      tree: tree
    });
    for (let _ of g) L(e, Mxr(_), Dxr(_));
    for (let _ of h) L(e, `${e.drawing.surface} ${Lxr(_)}`, Nxr(_));
    if (S) jse.recordClient(H(e), x);
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
    if (e.unpromptedRenders >= ke) {
      let o = new $e(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
      if (e.isRendering) throw o;
      y(e, o, "run");
      return;
    }
    e.isDirty = !0, e.renderTimer = setImmediate(W, e);
  }
  function W(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, clearImmediate(e.selfDrawnTimer), e.selfDrawnTimer = setImmediate(j, e), A(e);
  }
  function R(e) {
    for (let o of p.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  function ce(e, o) {
    let mountGeneration = e.mountGeneration;
    f.post(e.id, Xgr(we(e), e.drawing.surface, o), s => {
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
        bornAt: JDe(s.site)
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
    if (Js(o) === Js(e.props)) return;
    e.props = o, R(e), I(e, () => {
      e.surface?.setProps(o);
    }), A(e);
  }
  function J(e, o) {
    e.handedProps = o, Y(e, o);
  }
  function G(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), v(e), p.get(e.id) === e) p.delete(e.id);
  }
  function Q() {
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
  function j(e) {
    e.selfDrawnTimer = void 0;
  }
  function Z(e) {
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
    if (m ??= setImmediate(Q), s || e.selfDrawnTimer === void 0) R(e);
    if (e.surface) e.surface.resize(o.columns, o.rows), A(e);
  }
  function b(e, o) {
    if (F(e, o, -1), e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - U(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(Z, 0, e);else if (!te(e)) z(e);
  }
  function te(e) {
    return e.surface === void 0 || e.drawnSite === N(e);
  }
  function z(e) {
    if (R(e), jse.dropClient(H(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") c(e, {
      status: "loading"
    });
    A(e);
  }
  function F(e, o, n) {
    let s = e.heldIn.get(o) ?? ye(e, o);
    e.heldIn.set(o, {
      ...s,
      holders: Math.max(0, s.holders + n)
    });
  }
  function N(e) {
    return e.dialogHolders > 0 ? x2e : e.rowSite ?? e.drawing.component;
  }
  let X = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: n => (e.listeners.add(n), () => e.listeners.delete(n)),
    getSnapshot: () => e.snapshot,
    setProps: n => J(e, n),
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
    release: () => b(e, o)
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
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, F(e, o.component, 1), e.clock = o.clock;
    let n = U(o.component);
    if (e.dialogHolders += n, e.rowSite = n === 0 ? o.component : e.rowSite, te(e)) J(e, o.props);else e.handedProps = o.props, e.props = o.props, I(e, () => {
      e.surface?.setProps(o.props);
    }), z(e);
    return X(e, o.component);
  }
  return {
    acquire(e) {
      w ??= [i.onDisposed(remountPlugin), jse.onFreed(pe)];
      let o = p.get(se(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return K(o, e);
      if (o) G(o);
      let s = ve(e, B());
      return p.set(s.id, s), F(s, e.component, 1), q(s), X(s, e.component);
    },
    remountPlugin: remountPlugin,
    count: () => p.size,
    dispose() {
      for (let e of w ?? []) e();
      w = void 0, clearImmediate(m), Q();
      for (let e of p.values()) clearImmediate(e.selfDrawnTimer), j(e);
    }
  };
}
var CJs = oBo();
export { tBo, nBo, lOe, fgn, rBo, j2t, oBo, CJs };