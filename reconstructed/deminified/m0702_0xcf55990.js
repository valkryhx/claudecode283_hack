// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q8n, K8n } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { gt, AC, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { fP, Mvn, Dvn, Lvn } from "B:/~BUN/root/chunk-h23911wn.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { Ivn, Zr } from "B:/~BUN/root/chunk-cpg4rjtx.js";
import { JJe, ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { Bu, Vut } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Vn } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Mue, rL, lVt, mT, v5, noe } from "B:/~BUN/root/chunk-trcn2d68.js";
import { zl } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { ta } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { C6e } from "B:/~BUN/root/chunk-e9hrnhar.js";
import { N8r, l_t, XJe, Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { y9, oee, Obo, Qke, YA, Vst, Fbo, yB, qst, Zke, SLe, mUn, fIt } from "B:/~BUN/root/chunk-y355pc11.js";
import { Jwn, Qwn, jC } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { Hi } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { x9 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { cje } from "B:/~BUN/root/chunk-9ketrzpm.js";
import { sje } from "B:/~BUN/root/chunk-3ms6a7at.js";
import { Wje, wQe } from "B:/~BUN/root/chunk-xqjbapaq.js";
import { wer, mvn } from "B:/~BUN/root/chunk-1yna3b23.js";
import { Ter, Hbe } from "B:/~BUN/root/chunk-0tqg3ze0.js";
import { pvn, fvn } from "B:/~BUN/root/chunk-qx3qjw47.js";
import { ZPe, bGt, Myt, Bwn, MJe } from "B:/~BUN/root/chunk-jzh8geyk.js";
import { Dyt, Lyt, Nyt } from "B:/~BUN/root/chunk-4hj9afs7.js";
import { Pvn } from "B:/~BUN/root/chunk-rp3kg713.js";
import { V, e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Kj } from "B:/~BUN/root/chunk-fyvmz7de.js";
import { Vt, se, Pe, R, Gr, sn, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
var ie = Vt(null),
  Ge = 20;
function Y(o) {
  let s = w(4),
    {
      children: children
    } = o,
    r;
  if (s[0] === S) r = [], s[0] = r;else r = s[0];
  let n = T(r),
    l;
  if (s[1] === S) l = {
    getDenials: () => n.current,
    recordDenial: P => {
      n.current = [P, ...n.current.slice(0, Ge - 1)];
    },
    removeDenial: M => {
      n.current = n.current.filter(item => item !== M);
    }
  }, s[1] = l;else l = s[1];
  let value = l,
    c;
  if (s[2] !== children) c = e(ie.Provider, {
    value: value,
    children: children
  }), s[2] = children, s[3] = c;else c = s[3];
  return c;
}
function vue() {
  let o = Pe(ie);
  if (!o) {
    throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
N();
var ae = Vt(void 0);
function le(o) {
  let r = w(3),
    {
      getFpsMetrics: i,
      children: children_2
    } = o,
    n;
  if (r[0] !== children_2 || r[1] !== i) n = e(ae.Provider, {
    value: i,
    children: children_2
  }), r[0] = children_2, r[1] = i, r[2] = n;else n = r[2];
  return n;
}
function $wn() {
  return Pe(ae);
}
N();
function je(o, i) {
  let s = i / 100 * (o.length - 1),
    r = Math.floor(s),
    n = Math.ceil(s);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (s - r);
}
var $e = 1024;
function Uwn() {
  let o = new Map(),
    i = new Map(),
    s = new Map();
  return {
    increment(r, n = 1) {
      o.set(r, (o.get(r) ?? 0) + n);
    },
    set(r, n) {
      o.set(r, n);
    },
    observe(r, n) {
      let l = i.get(r);
      if (!l) l = {
        reservoir: [],
        count: 0,
        sum: 0,
        min: n,
        max: n
      }, i.set(r, l);
      if (l.count++, l.sum += n, n < l.min) l.min = n;
      if (n > l.max) l.max = n;
      if (l.reservoir.length < $e) l.reservoir.push(n);else {
        let P = Math.floor(Math.random() * l.count);
        if (P < $e) l.reservoir[P] = n;
      }
    },
    add(r, n) {
      let l = s.get(r);
      if (!l) l = new Set(), s.set(r, l);
      l.add(n);
    },
    getAll() {
      let r = Object.fromEntries(o);
      for (let [n, l] of i) {
        if (l.count === 0) continue;
        r[`${n}_count`] = l.count, r[`${n}_min`] = l.min, r[`${n}_max`] = l.max, r[`${n}_avg`] = l.sum / l.count;
        let P = [...l.reservoir].sort((itemA, itemB) => itemA - itemB);
        r[`${n}_p50`] = je(P, 50), r[`${n}_p95`] = je(P, 95), r[`${n}_p99`] = je(P, 99);
      }
      for (let [n, l] of s) r[n] = l.size;
      return r;
    }
  };
}
var ze = Vt(null);
function ue(o) {
  let r = w(8),
    {
      store: store,
      children: children_3
    } = o,
    n;
  if (r[0] === S) n = Uwn(), r[0] = n;else n = r[0];
  let value_2 = store ?? n,
    {
      storageV5: storageV5
    } = ke(),
    E,
    W;
  if (r[1] !== storageV5 || r[2] !== value_2) E = () => {
    let c = !1;
    let F = H() && storageV5 !== void 0 ? AC(async () => {
      let lastSessionMetrics = value_2.getAll();
      if (Object.keys(lastSessionMetrics).length > 0) await Bu(f => ({
        ...f,
        lastSessionMetrics: lastSessionMetrics
      }), storageV5);
      c = !0;
    }) : void 0;
    let z = () => {
      if (c) {
        return;
      }
      let lastSessionMetrics_2 = value_2.getAll();
      if (Object.keys(lastSessionMetrics_2).length > 0) Vut(_ => ({
        ..._,
        lastSessionMetrics: lastSessionMetrics_2
      }));
    };
    return process.on("exit", z), () => {
      F?.(), process.off("exit", z);
    };
  }, W = [value_2, storageV5], r[1] = storageV5, r[2] = value_2, r[3] = E, r[4] = W;else E = r[3], W = r[4];
  R(E, W);
  let m;
  if (r[5] !== children_3 || r[6] !== value_2) m = e(ze.Provider, {
    value: value_2,
    children: children_3
  }), r[5] = children_3, r[6] = value_2, r[7] = m;else m = r[7];
  return m;
}
N();
class Ve extends Mue {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(o, i) {
    super("action", {
      bubbles: !0,
      cancelable: !0
    });
    this.action = o, this.sourceEvent = i?.sourceEvent ?? null, this.isChordCompletion = i?.isChordCompletion ?? !1, this.origin = i?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}
var Ye = 3000;
function JPe(o) {
  let r = w(4),
    {
      children: children_4
    } = o;
  if (Ya()) {
    let n;
    if (r[0] !== children_4) n = e(V, {
      children: children_4
    }), r[0] = children_4, r[1] = n;else n = r[1];
    return n;
  }
  let n;
  if (r[2] !== children_4) n = e(Xe, {
    children: children_4
  }), r[2] = children_4, r[3] = n;else n = r[3];
  return n;
}
function Xe({
  children: children_5
}) {
  let [{
      bindings: bindings
    }, s] = g(() => {
      let m = Vst(YA);
      return t(`[keybindings] KeybindingSetup initialized with ${m.bindings.length} bindings, ${m.warnings.length} warnings`), m;
    }),
    r = Yt(),
    {
      addNotification: addNotification
    } = Zr(),
    pendingChordRef = T(null),
    [pendingChord, M] = g(null),
    E = T(null),
    handlerRegistryRef = T(new Map()),
    c = T(new Set()),
    preDispatchRef = T(new Set()),
    [keyHandlerRegistry] = g(l_t),
    registerActiveContext = se(m => {
      c.current.add(m);
    }, []),
    unregisterActiveContext = se(m => {
      c.current.delete(m);
    }, []),
    _ = se(() => {
      E.current?.(), E.current = null;
    }, []),
    setPendingChord = se(m => {
      if (_(), m !== null) E.current = r.setTimeout(() => {
        t("[keybindings] Chord timeout - cancelling"), pendingChordRef.current = null, M(null), addNotification({
          key: "chord-timeout",
          kind: "feedback",
          text: `${oee(m, yB())} cancelled \u2014 no next key within ${Ye / 1000}s`,
          priority: "immediate",
          timeoutMs: 3000
        });
      }, Ye);
      pendingChordRef.current = m, M(m);
    }, [addNotification, _, r]);
  return R(() => {
    Fbo(YA);
    let m = YA.changed.subscribe(a => {
      s(a), t(`[keybindings] Reloaded: ${a.bindings.length} bindings, ${a.warnings.length} warnings`);
    });
    return () => {
      m(), _();
    };
  }, [_]), e(XJe, {
    bindings: bindings,
    pendingChordRef: pendingChordRef,
    pendingChord: pendingChord,
    setPendingChord: setPendingChord,
    activeContexts: c.current,
    registerActiveContext: registerActiveContext,
    unregisterActiveContext: unregisterActiveContext,
    handlerRegistryRef: handlerRegistryRef,
    preDispatchRef: preDispatchRef,
    keyHandlerRegistry: keyHandlerRegistry,
    children: e(Zt, {
      bindings: bindings,
      pendingChordRef: pendingChordRef,
      setPendingChord: setPendingChord,
      activeContexts: c.current,
      handlerRegistryRef: handlerRegistryRef,
      preDispatchRef: preDispatchRef,
      keyHandlerRegistry: keyHandlerRegistry,
      children: children_5
    })
  });
}
function et(o) {
  let i = [...o],
    s = new Set(i.filter(item => !item.fallback).map(item => item.action));
  return [...i.filter(item => !item.fallback), ...i.filter(item => item.fallback && !s.has(item.action))];
}
function tt(o) {
  return !o.ctrl && !o.meta && !o.superKey;
}
var Jt = Qke.map(item => y9(item.key));
function ot(o) {
  let i = qst(o);
  return i !== null && Jt.some(item => Zke(item, i));
}
function Zt({
  bindings: bindings_2,
  pendingChordRef: pendingChordRef_2,
  setPendingChord: setPendingChord_2,
  activeContexts: activeContexts,
  handlerRegistryRef: handlerRegistryRef_2,
  preDispatchRef: preDispatchRef_2,
  keyHandlerRegistry: keyHandlerRegistry_2,
  children: children_6
}) {
  let E = T([]),
    W = T(null),
    c = T("legacy"),
    O = se((a, p, u, x) => {
      for (let v of preDispatchRef_2.current) try {
        if (v.handler(a, p, u) === !0) return x(), !0;
      } catch (error) {
        d(error);
      }
      return !1;
    }, [preDispatchRef_2]),
    f = (a, p, u, x) => {
      let current = handlerRegistryRef_2.current;
      if (!current) return !1;
      let b = [...current.values()].flatMap(item => [...item]),
        A = [...new Set(b.filter(item => !item.fallback).map(item => item.context)), ...activeContexts, "Global"],
        h = SLe(a, A, bindings_2, p),
        I = h.type === "match" && b.some(item => !item.fallback && item.action === h.action) ? h.action : null,
        j = I === null ? [u] : [I, u],
        C = ot(a);
      for (let y of j) {
        let [D] = et(current.get(y) ?? []).filter(item => !(item.fallback && C));
        if (D) return D.handler(), fIt(y), x(), !0;
      }
      return !1;
    },
    F = (a, p, u, x, v, b = !1) => {
      let current_2 = handlerRegistryRef_2.current,
        h = ot(a),
        I = new Set();
      if (current_2) {
        for (let B of current_2.values()) for (let G of B) if (!(h && G.fallback)) I.add(G.context);
      }
      let j = [...I, ...activeContexts, "Global"],
        current_3 = pendingChordRef_2.current,
        y = current_3 !== null,
        D = SLe(a, j, bindings_2, current_3);
      switch (D.type) {
        case "chord_started":
          c.current = "legacy", setPendingChord_2(D.pending), v();
          return;
        case "chord_cancelled":
          setPendingChord_2(null), v();
          return;
        case "unbound":
          if (setPendingChord_2(null), y) {
            v();
            return;
          }
          break;
        case "match":
          if (setPendingChord_2(null), y) {
            f(a, current_3, D.action, v);
            return;
          }
          break;
        case "none":
          break;
      }
      if (!current_2) return;
      if (!b && O(p, u, x, v)) return;
      let k = new Map(),
        q = et([...current_2.values()].flatMap(item => [...item])),
        oe = tt(a) || h,
        K;
      for (let B of q) {
        if (!B.singleKey || B.fallback && oe) continue;
        let G;
        if (B.fallback && !activeContexts.has(B.context)) K ??= (() => {
          let J = SLe(a, [...activeContexts, "Global"], bindings_2, null);
          return J.type === "match" ? J.action : null;
        })(), G = K;else G = k.get(B.context);
        if (G === void 0) {
          let J = SLe(a, [...activeContexts, B.context, "Global"], bindings_2, null);
          G = J.type === "match" ? J.action : null, k.set(B.context, G);
        }
        if (G === B.action) {
          if (B.handler() !== !1) {
            fIt(G), v();
            return;
          }
        }
      }
    },
    L = (a, p, u, x, v, b) => {
      let A = keyHandlerRegistry_2,
        h = (D, k) => {};
      if (A.swallowAll.size > 0) {
        h(null, !0), b();
        return;
      }
      if (pendingChordRef_2.current !== null && c.current === "legacy") {
        h(null, !1), F(p, u, x, v, b);
        return;
      }
      let I = to(a.target),
        j = pendingChordRef_2.current !== null && c.current === "scopeChain";
      if (I.length === 0 && A.preemptiveScopes.size === 0 && !j) {
        h(null, !1), F(p, u, x, v, b);
        return;
      }
      let C = de(a.target);
      if (A.preemptiveScopes.size > 0 && !j) {
        let D = [...A.preemptiveScopes.keys(), "Global"],
          k = mUn(p, D, bindings_2, null);
        if (k.type === "match" && C) {
          if (Be(C, a, k.action, !1, a.type === "wheel" ? "wheel" : "single")) {
            h(k.action, !0), fIt(k.action);
            return;
          }
        }
      }
      if (!j && C?.attributes.textEntry === !0 && tt(p) && [...p.key].length === 1) {
        h(null, O(u, x, v, b));
        return;
      }
      if (j) {
        let current_4 = pendingChordRef_2.current,
          k = mUn(p, E.current, bindings_2, current_4);
        if (k.type === "chord_started") {
          c.current = "scopeChain", setPendingChord_2(k.pending), b(), h(null, !0);
          return;
        }
        if (k.type === "match") {
          setPendingChord_2(null);
          let current_5 = W.current;
          W.current = null, E.current = [];
          let oe = current_5 && C && rL(current_5, lVt(C)) ? current_5 : C;
          if (oe) {
            if (Be(oe, a, k.action, !0, "chord")) {
              h(k.action, !0), fIt(k.action);
              return;
            }
          }
          let K = f(p, current_4, k.action, b);
          h(k.action, K);
          return;
        }
        W.current = null, E.current = [], h(null, !1), F(p, u, x, v, b);
        return;
      }
      let y = mUn(p, I, bindings_2, null);
      switch (y.type) {
        case "chord_started":
          E.current = I, W.current = C ?? null, c.current = "scopeChain", setPendingChord_2(y.pending), b(), h(null, !0);
          return;
        case "match":
          {
            if (!C) {
              h(y.action, !1), F(p, u, x, v, b);
              return;
            }
            if (O(u, x, v, b)) {
              setPendingChord_2(null), h(y.action, !0);
              return;
            }
            if (Be(C, a, y.action, !1, a.type === "wheel" ? "wheel" : "single")) {
              setPendingChord_2(null), h(y.action, !0), fIt(y.action);
              return;
            }
            h(y.action, !1), F(p, u, x, v, b, !0);
            return;
          }
        case "unbound":
          if (O(u, x, v, b)) {
            setPendingChord_2(null), h(null, !0);
            return;
          }
          setPendingChord_2(null), h(null, !1);
          return;
        default:
          h(null, !1), F(p, u, x, v, b);
          return;
      }
    },
    onKeyDownCapture = a => {
      let {
        input: input,
        key: key
      } = N8r(a);
      L(a, a, input, key, a.sequence, () => rt(a));
    },
    onWheelCapture = a => {
      if (eo(a.target, a.currentTarget, a.col, a.row)) return;
      let p = {
          name: a.deltaY < 0 ? "wheelup" : "wheeldown",
          key: "",
          ctrl: a.ctrl,
          shift: a.shift,
          meta: a.meta,
          superKey: !1
        },
        u = {
          upArrow: !1,
          downArrow: !1,
          leftArrow: !1,
          rightArrow: !1,
          pageDown: !1,
          pageUp: !1,
          wheelUp: a.deltaY < 0,
          wheelDown: a.deltaY > 0,
          home: !1,
          end: !1,
          return: !1,
          escape: !1,
          tab: !1,
          backspace: !1,
          delete: !1,
          ctrl: a.ctrl,
          shift: a.shift,
          meta: a.meta,
          super: !1
        };
      L(a, p, "", u, "", () => rt(a));
    },
    ref = T(null);
  return sn(() => {
    if (!ref.current) return;
    let a = mT(ref.current),
      p = () => {
        let current_6 = ref.current;
        if (!current_6 || a.activeElement === current_6) return;
        if (a.activeElement === null) {
          a.focus(current_6);
          return;
        }
        let parentNode = current_6.parentNode;
        while (parentNode) {
          if (parentNode === a.activeElement) {
            a.focus(current_6);
            return;
          }
          parentNode = parentNode.parentNode;
        }
      };
    return p(), a.subscribe(p);
  }, []), e(zl, {
    ref: ref,
    keybindingScope: "Global",
    tabIndex: -1,
    flexDirection: "column",
    flexGrow: 1,
    onKeyDownCapture: onKeyDownCapture,
    onWheelCapture: onWheelCapture,
    children: children_6
  });
}
function rt(o) {
  o.preventDefault(), o.stopImmediatePropagation();
}
function Xt(o) {
  return o !== null && "attributes" in o;
}
function de(o) {
  return Xt(o) ? o : void 0;
}
function eo(o, i, s, r) {
  let n = de(o),
    l = de(i);
  while (n && n !== l) {
    if (n._eventHandlers?.onWheel && (s === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || v5(n, s, r) !== null)) return !0;
    n = n.parentNode;
  }
  return !1;
}
function to(o) {
  let i = [],
    s = de(o);
  while (s) {
    let keybindingScope = s.attributes.keybindingScope;
    if (typeof keybindingScope === "string" && Obo(keybindingScope)) i.push(keybindingScope);
    s = s.parentNode;
  }
  return i;
}
function Be(o, sourceEvent, s, isChordCompletion, origin) {
  let l = new Ve(s, {
    sourceEvent: sourceEvent,
    isChordCompletion: isChordCompletion,
    origin: origin
  });
  return noe.dispatch(o, l), l.consumed;
}
N();
N();
N();
var pe = Vt(null);
function Z(o) {
  let r = w(3),
    {
      children: children_7
    } = o,
    s = T(null),
    n;
  if (r[0] === S) n = {
    setHandler: l => {
      s.current = l;
    },
    tryDelete: P => s.current?.(P) ?? !1
  }, r[0] = n;else n = r[0];
  let value_3 = n,
    E;
  if (r[1] !== children_7) E = e(pe.Provider, {
    value: value_3,
    children: children_7
  }), r[1] = children_7, r[2] = E;else E = r[2];
  return E;
}
function Oyt() {
  let o = Pe(pe);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
N();
class fe {
  queue = [];
  waiters = [];
  changed = Me();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(o) {
    this._revision++;
    let i = this.waiters.findIndex(item => item.fn(o));
    if (i !== -1) {
      let s = this.waiters.splice(i, 1)[0];
      if (s) {
        s.resolve(o), this.notify();
        return;
      }
    }
    this.queue.push(o), this.notify();
  }
  poll(o = () => !0) {
    let i = this.queue.findIndex(o);
    if (i === -1) return;
    return this.queue.splice(i, 1)[0];
  }
  receive(fn = () => !0) {
    let i = this.queue.findIndex(fn);
    if (i !== -1) {
      let s = this.queue.splice(i, 1)[0];
      if (s) return this.notify(), Promise.resolve(s);
    }
    return new Promise(resolve => {
      this.waiters.push({
        fn: fn,
        resolve: resolve
      });
    });
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit();
  }
}
var me = Vt(void 0);
function ge(o) {
  let s = w(3),
    {
      children: children_8
    } = o,
    r;
  if (s[0] === S) r = new fe(), s[0] = r;else r = s[0];
  let value_4 = r,
    l;
  if (s[1] !== children_8) l = e(me.Provider, {
    value: value_4,
    children: children_8
  }), s[1] = children_8, s[2] = l;else l = s[2];
  return l;
}
function LZn() {
  let o = Pe(me);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return o;
}
N();
function QPe(o) {
  let i = Gr(o);
  R(() => Hi.subscribe((s, r) => {
    let n = Vn();
    i(s, n, r);
  }), []);
}
N();
var he = Vt(null);
function _5() {
  let o = Pe(he);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o;
}
function Mo(We) {
  return We.expandedView === "tasks" ? {
    ...We,
    expandedView: "none"
  } : We;
}
var ye = Vt(!1),
  U = null;
function Se(o) {
  let c = w(86),
    {
      children: children_9,
      store: store_2,
      initialState: initialState,
      onChangeAppState: onChangeAppState,
      fleetNudgeStore: fleetNudgeStore,
      writesExitHandoff: writesExitHandoff,
      sessionHooks: sessionHooks
    } = o,
    E = writesExitHandoff === void 0 ? !1 : writesExitHandoff;
  if (Pe(ye)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let O;
  if (c[0] !== initialState || c[1] !== onChangeAppState || c[2] !== store_2) O = () => store_2 ?? Hs(initialState ?? MJe(), onChangeAppState), c[0] = initialState, c[1] = onChangeAppState, c[2] = store_2, c[3] = O;else O = c[3];
  let [value_14] = g(O),
    F;
  if (c[4] !== sessionHooks) F = () => sessionHooks ?? x9(), c[4] = sessionHooks, c[5] = F;else F = c[5];
  let [value_10] = g(F),
    _ = ta(),
    z;
  if (c[6] !== _) z = () => Ter(_), c[6] = _, c[7] = z;else z = c[7];
  let [value_9] = g(z),
    [value_8] = g(wer),
    {
      storageV5: storageV5_2
    } = ke(),
    u = jC(),
    x;
  if (c[8] !== storageV5_2 || c[9] !== value_14) x = () => new pvn(storageV5_2, globalThis, () => value_14.setState(Mo)), c[8] = storageV5_2, c[9] = value_14, c[10] = x;else x = c[10];
  let [value_7] = g(x),
    b;
  if (c[11] !== fleetNudgeStore || c[12] !== storageV5_2) b = () => fleetNudgeStore ?? new ZPe({
    storageV5: storageV5_2
  }), c[11] = fleetNudgeStore, c[12] = storageV5_2, c[13] = b;else b = c[13];
  let [value_6] = g(b),
    h;
  if (c[14] !== storageV5_2) h = () => U ? new U.SessionRosterStore({
    storageV5: storageV5_2
  }) : null, c[14] = storageV5_2, c[15] = h;else h = c[15];
  let [value_5] = g(h),
    [j] = g(E),
    [C] = g(storageV5_2),
    y,
    D;
  if (c[16] !== C || c[17] !== value_14 || c[18] !== j) y = () => {
    let k = j ? () => Myt(value_14.getState().tasks, C) : () => Bwn(value_14.getState().tasks);
    let q = gt(k);
    return () => {
      k(), q();
    };
  }, D = [value_14, j, C], c[16] = C, c[17] = value_14, c[18] = j, c[19] = y, c[20] = D;else y = c[19], D = c[20];
  R(y, D);
  let oe;
  if (c[21] !== value_14) oe = () => sje.over(value_14), c[21] = value_14, c[22] = oe;else oe = c[22];
  let [value_13] = g(oe),
    B;
  if (c[23] !== value_14) B = () => Kj.over(value_14), c[23] = value_14, c[24] = B;else B = c[24];
  let [value_12] = g(B),
    J;
  if (c[25] !== value_13 || c[26] !== u?.mcpSessionWiring) J = () => u?.mcpSessionWiring.acquireConnections(value_13), c[25] = value_13, c[26] = u?.mcpSessionWiring, c[27] = J;else J = c[27];
  let Rt;
  if (c[28] !== value_13 || c[29] !== u) Rt = [u, value_13], c[28] = value_13, c[29] = u, c[30] = Rt;else Rt = c[30];
  R(J, Rt);
  let xt;
  if (c[31] !== value_14) xt = () => Wje.over(value_14), c[31] = value_14, c[32] = xt;else xt = c[32];
  let [ve] = g(xt),
    Pt,
    Ct;
  if (c[33] !== ve || c[34] !== u) Pt = () => {
    if (u === void 0) {
      return;
    }
    return wQe.of(u).acquire(ve);
  }, Ct = [u, ve], c[33] = ve, c[34] = u, c[35] = Pt, c[36] = Ct;else Pt = c[35], Ct = c[36];
  R(Pt, Ct);
  let wt, kt;
  if (c[37] !== value_13) wt = () => q8n(() => value_13.get().clients), kt = [value_13], c[37] = value_13, c[38] = wt, c[39] = kt;else wt = c[38], kt = c[39];
  R(wt, kt);
  let Kt, Mt;
  if (c[40] !== value_13) Kt = () => K8n((Fo, _o) => value_13.swapServerTools(Fo, _o)), Mt = [value_13], c[40] = value_13, c[41] = Kt, c[42] = Mt;else Kt = c[41], Mt = c[42];
  R(Kt, Mt);
  let Et;
  if (c[43] !== value_14.setState) Et = () => Dyt(value_14.setState), c[43] = value_14.setState, c[44] = Et;else Et = c[44];
  let At;
  if (c[45] !== value_14) At = [value_14], c[45] = value_14, c[46] = At;else At = c[46];
  R(Et, At);
  let Dt;
  if (c[47] !== u || c[48] !== storageV5_2 || c[49] !== value_14.setState) Dt = (Wo, Yn, Go) => Lyt(u, Wo, value_14.setState, storageV5_2, Go), c[47] = u, c[48] = storageV5_2, c[49] = value_14.setState, c[50] = Dt;else Dt = c[50];
  let be = Gr(Dt);
  QPe(be);
  let Nt;
  if (c[51] !== be) Nt = () => {
    Nyt(() => be("policySettings"));
  }, c[51] = be, c[52] = Nt;else Nt = c[52];
  let Ht;
  if (c[53] === S) Ht = [], c[53] = Ht;else Ht = c[53];
  R(Nt, Ht);
  const value_11 = u ?? null;
  let children_10;
  if (c[54] !== children_9 || c[55] !== value_5) children_10 = U && value_5 ? e(U.SessionRosterStoreContext.Provider, {
    value: value_5,
    children: children_9
  }) : children_9, c[54] = children_9, c[55] = value_5, c[56] = children_10;else children_10 = c[56];
  let children_11;
  if (c[57] !== children_10) children_11 = e(Y, {
    children: e(Z, {
      children: children_10
    })
  }), c[57] = children_10, c[58] = children_11;else children_11 = c[58];
  let children_12;
  if (c[59] !== value_6 || c[60] !== children_11) children_12 = e(bGt.Provider, {
    value: value_6,
    children: children_11
  }), c[59] = value_6, c[60] = children_11, c[61] = children_12;else children_12 = c[61];
  let children_13;
  if (c[62] !== children_12 || c[63] !== value_7) children_13 = e(fvn.Provider, {
    value: value_7,
    children: children_12
  }), c[62] = children_12, c[63] = value_7, c[64] = children_13;else children_13 = c[64];
  let children_14;
  if (c[65] !== value_8 || c[66] !== children_13) children_14 = e(mvn.Provider, {
    value: value_8,
    children: children_13
  }), c[65] = value_8, c[66] = children_13, c[67] = children_14;else children_14 = c[67];
  let children_15;
  if (c[68] !== value_9 || c[69] !== children_14) children_15 = e(ge, {
    children: e(Pvn, {
      children: e(Hbe.Provider, {
        value: value_9,
        children: children_14
      })
    })
  }), c[68] = value_9, c[69] = children_14, c[70] = children_15;else children_15 = c[70];
  let children_16;
  if (c[71] !== value_10 || c[72] !== children_15) children_16 = e(he.Provider, {
    value: value_10,
    children: children_15
  }), c[71] = value_10, c[72] = children_15, c[73] = children_16;else children_16 = c[73];
  let children_17;
  if (c[74] !== value_11 || c[75] !== children_16) children_17 = e(Mvn.Provider, {
    value: value_11,
    children: children_16
  }), c[74] = value_11, c[75] = children_16, c[76] = children_17;else children_17 = c[76];
  let children_18;
  if (c[77] !== value_12 || c[78] !== children_17) children_18 = e(Lvn.Provider, {
    value: value_12,
    children: children_17
  }), c[77] = value_12, c[78] = children_17, c[79] = children_18;else children_18 = c[79];
  let children_19;
  if (c[80] !== value_13 || c[81] !== children_18) children_19 = e(Dvn.Provider, {
    value: value_13,
    children: children_18
  }), c[80] = value_13, c[81] = children_18, c[82] = children_19;else children_19 = c[82];
  let jt;
  if (c[83] !== value_14 || c[84] !== children_19) jt = e(ye.Provider, {
    value: !0,
    children: e(fP.Provider, {
      value: value_14,
      children: children_19
    })
  }), c[83] = value_14, c[84] = children_19, c[85] = jt;else jt = c[85];
  return jt;
}
function W_(o) {
  let m = w(32),
    {
      session: session,
      host: host,
      project: project,
      storageV5: storageV5_3,
      messageQueue: l,
      store: store_3,
      initialState: initialState_2,
      onChangeAppState: onChangeAppState_2,
      fleetNudgeStore: fleetNudgeStore_2,
      sessionHooks: sessionHooks_2,
      writesExitHandoff: writesExitHandoff_2,
      getFpsMetrics: getFpsMetrics,
      stats: F,
      keybindings: keybindings,
      children: children_20
    } = o,
    z = keybindings === void 0 ? !0 : keybindings,
    a;
  if (m[0] !== storageV5_3) a = C6e(storageV5_3), m[0] = storageV5_3, m[1] = a;else a = m[1];
  let p = a,
    children_21;
  if (m[2] !== children_20 || m[3] !== z) children_21 = z ? e(JPe, {
    children: children_20
  }) : children_20, m[2] = children_20, m[3] = z, m[4] = children_21;else children_21 = m[4];
  let children_22;
  if (m[5] !== children_21) children_22 = e(Ivn, {
    children: e(Y, {
      children: e(Z, {
        children: children_21
      })
    })
  }), m[5] = children_21, m[6] = children_22;else children_22 = m[6];
  let v;
  if (m[7] !== fleetNudgeStore_2 || m[8] !== initialState_2 || m[9] !== onChangeAppState_2 || m[10] !== sessionHooks_2 || m[11] !== store_3 || m[12] !== children_22 || m[13] !== writesExitHandoff_2) v = e(Se, {
    store: store_3,
    initialState: initialState_2,
    onChangeAppState: onChangeAppState_2,
    fleetNudgeStore: fleetNudgeStore_2,
    sessionHooks: sessionHooks_2,
    writesExitHandoff: writesExitHandoff_2,
    children: children_22
  }), m[7] = fleetNudgeStore_2, m[8] = initialState_2, m[9] = onChangeAppState_2, m[10] = sessionHooks_2, m[11] = store_3, m[12] = children_22, m[13] = writesExitHandoff_2, m[14] = v;else v = m[14];
  let children_23 = v,
    children_24;
  if (m[15] !== children_23 || m[16] !== host || m[17] !== project || m[18] !== session) children_24 = session !== void 0 ? e(Jwn, {
    session: session,
    children: children_23
  }) : host !== void 0 ? e(Qwn, {
    host: host,
    project: project,
    children: children_23
  }) : children_23, m[15] = children_23, m[16] = host, m[17] = project, m[18] = session, m[19] = children_24;else children_24 = m[19];
  let children_25;
  if (m[20] !== F || m[21] !== children_24) children_25 = e(ue, {
    store: F,
    children: children_24
  }), m[20] = F, m[21] = children_24, m[22] = children_25;else children_25 = m[22];
  let I;
  if (m[23] !== getFpsMetrics || m[24] !== children_25) I = e(le, {
    getFpsMetrics: getFpsMetrics,
    children: children_25
  }), m[23] = getFpsMetrics, m[24] = children_25, m[25] = I;else I = m[25];
  let children_26 = I,
    C;
  if (m[26] !== l || m[27] !== children_26) C = l === void 0 ? children_26 : e(cje, {
    queue: l,
    children: children_26
  }), m[26] = l, m[27] = children_26, m[28] = C;else C = m[28];
  let children_27 = C;
  if (storageV5_3 === void 0) {
    return children_27;
  }
  let D;
  if (m[29] !== children_27 || m[30] !== p) D = e(JJe, {
    ...p,
    children: children_27
  }), m[29] = children_27, m[30] = p, m[31] = D;else D = m[31];
  return D;
}
export { vue, $wn, Uwn, JPe, Oyt, LZn, QPe, _5, W_ };