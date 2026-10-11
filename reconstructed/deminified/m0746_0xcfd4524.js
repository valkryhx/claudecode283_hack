// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { R_, k0, OCe, qX, uFe, OIo, MIo, DIo, ddn, kVn, A6, $n, ENt, B6e, gdn, TNt, Sdt, ALr, QIo, ZIo } from "B:/~BUN/root/chunk-0w5kpsps.js";
import { UCe, kc } from "B:/~BUN/root/chunk-n5swsemr.js";
import { De, zCe, ni } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { dt } from "B:/~BUN/root/chunk-hhgrczac.js";
import { SW, sVe, V4, ymo, Iot, _qe, Kho, ikr, HFn, FFn, Ben, Yxt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ldn, ydt } from "B:/~BUN/root/chunk-5emths66.js";
import { _$n, rEr } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Xg } from "B:/~BUN/root/chunk-cev8zjcf.js";
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
var qIe = Rt(Hs({
  focusedId: null
}), r => r.setState(() => ({
  focusedId: null
})));
var pKt = focusedId => qIe.setState(a => a.focusedId === focusedId ? a : {
  focusedId: focusedId
});
var n7r = r => qIe.setState(a => a.focusedId === r ? {
  focusedId: null
} : a);
function bor(r = {}) {
  let a = r.run ?? Yxt,
    c = r.schedule ?? (f => {
      let p = setTimeout(f, Xg);
      return () => {
        clearTimeout(p);
      };
    }),
    g = r.warn ?? (f => {
      t(f, {
        level: "warn"
      });
    }),
    d = new Map(),
    x,
    i = 0;
  function u() {
    x = void 0;
    let f = [...d.values()];
    d.clear();
    for (let {
      message: message,
      reply: reply
    } of f) i += 1, a(message).then(reply, b => {
      g(`ui.message ${message.plugin}/${message.message.element}: the chain threw (${l(b)}); no reply`);
    });
  }
  return {
    post(f, message_2, reply_2) {
      d.set(f, {
        message: message_2,
        reply: reply_2
      }), x ??= c(u);
    },
    cancel(f) {
      if (d.delete(f), d.size === 0 && x !== void 0) x(), x = void 0;
    },
    dispatched: () => i
  };
}
var $e = bor();
var Sor = (r, a) => `${r}\x00client\x00${a}`;
var ce = r => ({
  component: r.component,
  requestId: Sor(r.requestId, r.key),
  surface: r.surface
});
var fe = 500;
function le(r) {
  let a = r.replace(A6, " ");
  return a.length > fe ? `${re(a, fe)}\u2026` : a;
}
function de(r, a, c) {
  let g = `${r}: `,
    d = le(c),
    x = d.startsWith(g) ? d.slice(g.length) : d,
    i = `Client ${a}: `;
  return x.startsWith(i) ? x : `${i}${x}`;
}
var N = r => r === B6e ? 1 : 0;
var ge = (plugin, handle) => ({
  plugin: plugin,
  handle: handle
});
function xe(plugin_2, a, c) {
  function g(d) {
    if (!G(d)) return d;
    let {
        props: props,
        hover: hover,
        children: children,
        held: held
      } = d,
      p = {
        type: d.type
      };
    if (props !== void 0) p.props = props;
    if (hover !== void 0) p.hover = hover;
    if (ldn(d.type) && ydt(hover) !== void 0) p.group = {
      plugin: plugin_2
    };
    if (typeof held === "number") p.press = ge(plugin_2, c(held));else if (Array.isArray(children)) p.children = children.map(g);
    return p;
  }
  return UCe(g(Sdt(J(a))));
}
var Z = r => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ye = 3;
var Te = r => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});
var he = r => ({
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
  listeners: new Set(),
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
var Ie = r => ddn(r) && v(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var pe = 1000;
var Ee = "__surface__.run()";
var we = (r, tick) => ({
  ...r,
  timers: new Map(),
  tick: tick
});
async function ao(r, a = {}) {
  let {
      pluginName: pluginName,
      pluginRoot: pluginRoot,
      environmentId: environmentId,
      surfaceModules: surfaceModules
    } = r,
    i = !1,
    {
      sandbox: sandbox,
      context: context
    } = QIo(),
    p = uFe(context, {
      arrayLengthCap: void 0
    }),
    T = n => UCe(p(n)),
    b = DIo(context, pluginRoot),
    R = MIo(context),
    {
      fromEnvironment: fromEnvironment,
      intoEnvironment: intoEnvironment
    } = kVn(qX(context), b, R),
    S = ZIo(context, intoEnvironment);
  Object.assign(sandbox, {
    console: OIo(S, `[${pluginName}] surface`)
  });
  let D = new Map(),
    U = 0,
    P = 0;
  function z(n) {
    let m = D.get(n);
    if (!m) throw new De(`${pluginName}: no client instance ${n}`);
    return m;
  }
  function oe(n, m) {
    let h = z(n),
      w = `${pluginName}: Client ${h.module}: post: the data`;
    if (m.length > gdn) throw new De(`${w} serializes to ${m.length} characters, over the ${gdn} limit; not sent`);
    let E = J(m),
      k = TNt(E);
    if (k !== void 0) throw new De(`${w} ${k}; not sent`);
    h.host.post(E);
  }
  function K(n, m) {
    let h = z(n),
      w = ++P;
    return h.timers.set(w, h.host.startTimer(m, () => {
      if (D.get(n)?.timers.has(w) === !0) h.tick(w);
    })), w;
  }
  let L = R_({
      schedule: k0(S(n => {
        D.get(n)?.host.schedule();
      })),
      post: k0(S(oe)),
      startTimer: k0(S(K)),
      stopTimer: k0(S((n, m) => {
        let h = D.get(n);
        h?.timers.get(m)?.(), h?.timers.delete(m);
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
    } = ee.runInContext(HFn, context)(L, T(FFn())),
    V = new ee.Script(Ee, {
      filename: `${pluginName} surface`
    }),
    Y = a.budgetMs ?? pe,
    evaluateOptions = OCe(pe, a.budgetMs),
    e = n => Ie(n) ? `ran longer than its ${Y}ms budget` : fromEnvironment(n).message,
    o = (n, m) => new De(`${pluginName}: Client ${n}: ${e(m)}`);
  function s(n, m, h) {
    if (i) throw zCe(pluginName);
    stage(n.id, m, h === void 0 ? void 0 : T(h));
    try {
      return V.runInContext(context, evaluateOptions);
    } catch (error) {
      throw o(n.module, error);
    }
  }
  let y = ALr({
      args: {
        pluginName: pluginName,
        pluginRoot: pluginRoot,
        linked: surfaceModules.flatMap(item => item.linked),
        links: surfaceModules.flatMap(item => item.links)
      },
      context: context,
      intoEnvironment: intoEnvironment,
      stamped: n => n(),
      evaluateOptions: evaluateOptions
    }),
    C = a.readyMs ?? sVe,
    M = new Map();
  for (let n of surfaceModules) M.set(n.module, await H(n));
  async function H(n) {
    try {
      let exports = await Ht(y.load(n.modulePath, n.source), C, `its top level did not settle in ${C}ms`);
      return {
        component: n.component,
        exports: exports
      };
    } catch (m) {
      return {
        error: new De(`${pluginName}: Client ${n.module}: the surface module did not load: ${e(m)}`)
      };
    }
  }
  function j(n) {
    if (!D.delete(n.id)) return;
    for (let m of n.timers.values()) m();
    if (n.timers.clear(), !i) unmount(n.id);
  }
  function q(n) {
    let m = M.get(n);
    if (!m) {
      let k = [...M.keys()].join(", ") || "none";
      throw new De(`${pluginName}: Client ${n}: the plugin loaded no surface module at that path (it loaded ${k})`);
    }
    if ("error" in m) throw m.error;
    let {
        component: component,
        exports: exports_2
      } = m,
      E = Object.hasOwn(exports_2, component) && exports_2[component];
    if (typeof E !== "function") throw new De(`${pluginName}: Client ${n}: its export ${component} is not a function (props, surface) => tree`);
    return E;
  }
  function B(n) {
    if (!i) n();
  }
  function mount_2(n) {
    let {
      props: props_2,
      host: host
    } = n;
    if (i) throw zCe(pluginName);
    let w = q(n.module),
      id = ++U,
      k = we({
        id: id,
        module: n.module,
        host: host
      }, I => {
        s(k, "tick", I);
      });
    return D.set(id, k), mount(id, w, T(props_2)), {
      id: id,
      render: () => {
        let I = s(k, "render");
        if (typeof I !== "string") throw o(n.module, Error("the module returned no tree"));
        return I;
      },
      setProps: I => B(() => setProps(id, T(I))),
      resize: (I, ae) => B(() => resize(id, I, ae)),
      pointer: I => {
        s(k, "pointer", I);
      },
      key: I => {
        s(k, "key", I);
      },
      runHeld: (handle_2, event) => {
        s(k, "held", {
          handle: handle_2,
          event: event
        });
      },
      dropHeld: I => B(() => dropHeld(id, T(I))),
      hasPointerListener: () => !i && hasListener(id, "pointer"),
      hasKeyListener: () => !i && hasListener(id, "key"),
      unmount: () => j(k)
    };
  }
  return {
    pluginName: pluginName,
    environmentId: environmentId,
    mount: mount_2,
    dispose() {
      if (i) return;
      for (let n of [...D.values()]) j(n);
      i = !0;
    },
    isDisposed: () => i
  };
}
var Se = (environmentId_2, loading) => ({
  environmentId: environmentId_2,
  loading: loading,
  loaded: void 0
});
var ke = Rt(ni(), r => r.set(void 0));
function Oe() {
  let r = new Map(),
    a = Me(),
    c;
  function g(i, u) {
    if (r.get(i) === u) r.delete(i);
    u.loading.then(p => {
      p.dispose(), _qe.forget(i), t(`surface environment of ${i} (environment ${u.environmentId}) disposed`);
    }, () => {}), queueMicrotask(() => a.emit(i));
  }
  function sweep() {
    let i = new Map(dt().loadedModules.map(item => [item.name, item.environmentId]));
    for (let [u, f] of [...r]) if (i.get(u) !== f.environmentId) g(u, f);
  }
  function x(pluginName_2) {
    let u = _$n(pluginName_2);
    if (!u) return Promise.reject(new De(`${pluginName_2}: Client: the plugin is not loaded`));
    let f = r.get(pluginName_2);
    if (f?.environmentId === u.environmentId) return f.loading;
    if (f) g(pluginName_2, f);
    let {
      surfaceModules: surfaceModules_2,
      pluginRoot: pluginRoot_2
    } = u.args;
    if (!surfaceModules_2 || surfaceModules_2.length === 0) return Promise.reject(new De(`${pluginName_2}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let budgetMs = ke.get(),
      {
        environmentId: environmentId_3
      } = u,
      O = Se(environmentId_3, ao({
        pluginName: pluginName_2,
        pluginRoot: pluginRoot_2,
        environmentId: environmentId_3,
        surfaceModules: surfaceModules_2
      }, budgetMs === void 0 ? {} : {
        budgetMs: budgetMs
      }).then(A => (O.loaded = A, t(`surface environment of ${pluginName_2} (environment ${environmentId_3}) loaded ` + surfaceModules_2.map(item => item.module).join(", ")), A)));
    return r.set(pluginName_2, O), O.loading;
  }
  return {
    environmentFor(i) {
      return c ??= rEr(sweep), x(i);
    },
    sweep: sweep,
    onDisposed: a.subscribe,
    disposeAll() {
      for (let [i, u] of [...r]) g(i, u);
      c?.(), c = void 0;
    },
    count: () => r.size
  };
}
var Re = Oe();
function wor(r = {}) {
  let a = r.environments ?? Re,
    c = r.port ?? $e,
    g = new Map(),
    d;
  function x(e, o) {
    e.snapshot = o;
    for (let s of e.listeners) s();
  }
  function i(e) {
    R(e, e.held), e.held = [];
  }
  function u(e) {
    if (e.mountGeneration += 1, P(e), e.isDirty = !1, e.isOverBudget = !1, e.drawnSite = void 0, Iot.dropClient(S(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    V4.holdDrawing(e.plugin, e.drawing, []), i(e), e.surface?.unmount(), e.surface = void 0, c.cancel(e.id), n7r(e.id);
  }
  function f(e, o, s) {
    let y = de(e.plugin, e.module, o),
      C = `${e.plugin}: ${y}`;
    if (kc().log(`${C}; ${s}`, "warn"), ymo()) SW(e.plugin, y);
    return C;
  }
  function p(e, o) {
    let text = f(e, l(o), "the instance unmounted");
    u(e), x(e, {
      status: "failed",
      text: text
    });
  }
  function T(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o();
    } catch (error) {
      p(e, error);
    }
  }
  function b(e, o) {
    let s = [],
      y = 0;
    try {
      let C = xe(e.plugin, o.render(), environmentHandle => {
          let surfaceHandle = _qe.hold(e.plugin, q => {
            P(e), T(e, () => o.runHeld(environmentHandle, q));
          });
          return s.push({
            surfaceHandle: surfaceHandle,
            environmentHandle: environmentHandle
          }), surfaceHandle;
        }),
        M = ikr(C, void 0, {
          surface: e.drawing.surface,
          within: _(e),
          measured: H => {
            y = H;
          }
        });
      if (M !== void 0) throw new De(`returned a tree that does not validate (${M})`);
      return [C, s, y];
    } catch (error) {
      throw R(e, s), error;
    }
  }
  function R(e, o) {
    _qe.release(e.plugin, o.map(item => item.surfaceHandle)), e.surface?.dropHeld(o.map(item => item.environmentHandle));
  }
  function O(e) {
    let {
      surface: surface
    } = e;
    if (!surface || e.isDestroyed) return;
    e.isDirty = !1, e.isRendering = !0;
    let s;
    try {
      s = b(e, surface);
    } catch (error) {
      p(e, error);
      return;
    } finally {
      e.isRendering = !1;
    }
    let [y, C, M] = s,
      H = _(e) === B6e;
    if (H && !Iot.fits(S(e), M)) {
      e.isOverBudget = !0, R(e, C), f(e, `returned a tree of ${M} rows that, with the tree around the dialog and its other Clients, passes ${ENt}`, "the frame before it kept");
      return;
    }
    e.isOverBudget = !1;
    let held_2 = e.held;
    e.held = C;
    let tree = Kho(y, e.drawing);
    if (R(e, held_2), e.drawnSite = _(e), x(e, {
      status: "drawn",
      tree: tree
    }), H) Iot.recordClient(S(e), M);
  }
  function A(e) {
    for (let o of g.values()) if (o.isOverBudget && o.requestId === e && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = !0, o.unpromptedRenders = 0, o.renderTimer = setImmediate(U, o);
  }
  let S = e => ({
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
      return;
    }
    e.isDirty = !0, e.renderTimer = setImmediate(U, e);
  }
  function U(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, O(e);
  }
  function P(e) {
    for (let o of g.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  let z = (e, o) => c.post(e.id, Ben(Te(e), e.drawing.surface, o), s => {
    if (s.props !== void 0 && !e.isDestroyed) L(e, s.props);
  });
  function oe(e, o) {
    if (e.isDestroyed || e.surface) return;
    try {
      e.surface = o.mount({
        module: e.module,
        props: e.props,
        host: {
          schedule: () => D(e),
          post: s => z(e, s),
          startTimer: (s, y) => e.clock.every(s, () => {
            P(e), T(e, y);
          })
        }
      }), e.surface.resize(e.columns, e.rows);
    } catch (error) {
      p(e, error);
      return;
    }
    O(e);
  }
  function K(e) {
    e.mountGeneration += 1;
    let mountGeneration = e.mountGeneration,
      s = () => e.mountGeneration === mountGeneration && !e.isDestroyed;
    a.environmentFor(e.plugin).then(y => {
      if (s()) oe(e, y);
    }, y => {
      if (s()) p(e, y);
    });
  }
  function L(e, o) {
    if ($n(o) === $n(e.props)) return;
    e.props = o, P(e), T(e, () => {
      e.surface?.setProps(o);
    }), O(e);
  }
  function X(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = !0, clearTimeout(e.destroyTimer), u(e), g.get(e.id) === e) g.delete(e.id);
  }
  function te(e) {
    if (e.holders === 0) X(e);
  }
  function ne(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    if (e.columns = o.columns, e.rows = o.rows, P(e), e.surface) e.surface.resize(o.columns, o.rows), O(e);
  }
  function se(e, o) {
    if (e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - N(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(te, 0, e);else if (!W(e)) F(e);
  }
  function W(e) {
    return e.surface === void 0 || e.drawnSite === _(e);
  }
  function F(e) {
    if (P(e), Iot.dropClient(S(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") x(e, {
      status: "loading"
    });
    O(e);
  }
  function _(e) {
    return e.dialogHolders > 0 ? B6e : e.rowSite ?? e.drawing.component;
  }
  let V = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: s => (e.listeners.add(s), () => e.listeners.delete(s)),
    getSnapshot: () => e.snapshot,
    setProps: s => L(e, s),
    resize: (columns, rows) => ne(e, {
      columns: columns,
      rows: rows
    }),
    pointer: s => {
      P(e), T(e, () => e.surface?.pointer(s));
    },
    key: s => {
      P(e), T(e, () => e.surface?.key(s));
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    release: () => se(e, o)
  });
  function remountPlugin(e) {
    for (let o of g.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (u(o), x(o, {
        status: "loading"
      }), o.holders > 0) K(o);
    }
  }
  function Q(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, e.clock = o.clock;
    let s = N(o.component);
    if (e.dialogHolders += s, e.rowSite = s === 0 ? o.component : e.rowSite, W(e)) L(e, o.props);else e.props = o.props, T(e, () => {
      e.surface?.setProps(o.props);
    }), F(e);
    return V(e, o.component);
  }
  return {
    acquire(e) {
      d ??= [a.onDisposed(remountPlugin), Iot.onFreed(A)];
      let o = g.get(Z(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return Q(o, e);
      if (o) X(o);
      let y = he(e);
      return g.set(y.id, y), K(y), V(y, e.component);
    },
    remountPlugin: remountPlugin,
    count: () => g.size,
    dispose() {
      for (let e of d ?? []) e();
      d = void 0;
    }
  };
}
var r7r = wor();
export { bor, Sor, qIe, pKt, n7r, wor, r7r };