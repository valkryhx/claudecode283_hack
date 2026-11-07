// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { VGt, zHo, Qvt } from "B:/~BUN/root/chunk-bnbh68ja.js";
import { lIo, dIo, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { vt, zA, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { D0, Azr, xzr, Pzr } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { Sy, oin } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Rn, Qi } from "B:/~BUN/root/chunk-qey16aan.js";
import { OUe, SK, G5n, N0, K7, Cne } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Tzr, Lo } from "B:/~BUN/root/chunk-npkbazqf.js";
import { o2t, Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Sf } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { xFt } from "B:/~BUN/root/chunk-sc660841.js";
import { Z8s, mhn, n2t, vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { sZe, q4i } from "B:/~BUN/root/chunk-fnf5t6te.js";
import { Ace, koe, Px, v7t, TDi, $6, h0e, AXe, Lft, Ado, tMn } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { nzr, rzr, tI } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { Fi } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Jye } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { Jvt } from "B:/~BUN/root/chunk-cvm7zk4p.js";
import { Gvt } from "B:/~BUN/root/chunk-8n55xd0b.js";
import { DEt, P2t } from "B:/~BUN/root/chunk-r92qsn81.js";
import { qHo, yK } from "B:/~BUN/root/chunk-h6416p81.js";
import { szr, izr } from "B:/~BUN/root/chunk-jmh99pxs.js";
import { Zot, k5n } from "B:/~BUN/root/chunk-3dbnj73j.js";
import { Zmn } from "B:/~BUN/root/chunk-s3ja9yx6.js";
import { qmn, Ymn, Vvt } from "B:/~BUN/root/chunk-p22cr4v3.js";
import { Ezr } from "B:/~BUN/root/chunk-z8bb1299.js";
import { FGt } from "B:/~BUN/root/chunk-mgjkrehs.js";
import { Kmn, GWr } from "B:/~BUN/root/chunk-qk0n7exe.js";
import { ne, e } from "B:/~BUN/root/chunk-t16eynda.js";
import { oQ } from "B:/~BUN/root/chunk-e4dm7qmm.js";
import { Jt, ue, ve, O, qo, Zt, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
j();
j();
var ie = Jt(void 0);
function se(n) {
  let i = S(3),
    {
      getFpsMetrics: r,
      children: children
    } = n,
    l;
  if (i[0] !== children || i[1] !== r) l = e(ie.Provider, {
    value: r,
    children: children
  }), i[0] = children, i[1] = r, i[2] = l;else l = i[2];
  return l;
}
function jWr() {
  return ve(ie);
}
j();
function He(n, r) {
  let o = r / 100 * (n.length - 1),
    i = Math.floor(o),
    l = Math.ceil(o);
  if (i === l) return n[i];
  return n[i] + (n[l] - n[i]) * (o - i);
}
var We = 1024;
function WWr() {
  let n = new Map();
  return {
    observe(r, o) {
      let i = n.get(r);
      if (!i) i = {
        reservoir: [],
        count: 0,
        sum: 0,
        min: o,
        max: o
      }, n.set(r, i);
      if (i.count++, i.sum += o, o < i.min) i.min = o;
      if (o > i.max) i.max = o;
      if (i.reservoir.length < We) i.reservoir.push(o);else {
        let l = Math.floor(Math.random() * i.count);
        if (l < We) i.reservoir[l] = o;
      }
    },
    getAll() {
      let r = {};
      for (let [o, i] of n) {
        if (i.count === 0) continue;
        r[`${o}_count`] = i.count, r[`${o}_min`] = i.min, r[`${o}_max`] = i.max, r[`${o}_avg`] = i.sum / i.count;
        let l = [...i.reservoir].sort((itemA, itemB) => itemA - itemB);
        r[`${o}_p50`] = He(l, 50), r[`${o}_p95`] = He(l, 95), r[`${o}_p99`] = He(l, 99);
      }
      return r;
    }
  };
}
var Ge = Jt(null);
function le(n) {
  let i = S(8),
    {
      store: store,
      children: children_2
    } = n,
    l;
  if (i[0] === w) l = WWr(), i[0] = l;else l = i[0];
  let value = store ?? l,
    {
      storageV5: storageV5
    } = Fe(),
    F,
    W;
  if (i[1] !== storageV5 || i[2] !== value) F = () => {
    let c = !1;
    let U = X() && storageV5 !== void 0 ? zA(async () => {
      let lastSessionMetrics = value.getAll();
      if (Object.keys(lastSessionMetrics).length > 0) await Sy(d => ({
        ...d,
        lastSessionMetrics: lastSessionMetrics
      }), storageV5);
      c = !0;
    }) : void 0;
    let _ = () => {
      if (c) {
        return;
      }
      let lastSessionMetrics_2 = value.getAll();
      if (Object.keys(lastSessionMetrics_2).length > 0) oin(G => ({
        ...G,
        lastSessionMetrics: lastSessionMetrics_2
      }));
    };
    return process.on("exit", _), () => {
      U?.(), process.off("exit", _);
    };
  }, W = [value, storageV5], i[1] = storageV5, i[2] = value, i[3] = F, i[4] = W;else F = i[3], W = i[4];
  O(F, W);
  let K;
  if (i[5] !== children_2 || i[6] !== value) K = e(Ge.Provider, {
    value: value,
    children: children_2
  }), i[5] = children_2, i[6] = value, i[7] = K;else K = i[7];
  return K;
}
j();
class Gmn extends OUe {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(n, r) {
    super("action", {
      bubbles: !0,
      cancelable: !0
    });
    this.action = n, this.sourceEvent = r?.sourceEvent ?? null, this.isChordCompletion = r?.isChordCompletion ?? !1, this.origin = r?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
}
var NGt = he(Hs({
  counts: new Map()
}), n => n.setState(() => ({
  counts: new Map()
})));
function ze(n) {
  NGt.setState(r => {
    let counts = new Map(r.counts);
    return counts.set(n, (counts.get(n) ?? 0) + 1), {
      counts: counts
    };
  });
}
function qe(n) {
  NGt.setState(r => {
    let o = r.counts.get(n);
    if (o === void 0) return r;
    let counts_2 = new Map(r.counts);
    if (o <= 1) counts_2.delete(n);else counts_2.set(n, o - 1);
    return {
      counts: counts_2
    };
  });
}
function c5n(n, r) {
  return n.counts.has(r);
}
var Je = 3000;
function Yot(n) {
  let i = S(4),
    {
      children: children_3
    } = n;
  if (vd()) {
    let l;
    if (i[0] !== children_3) l = e(ne, {
      children: children_3
    }), i[0] = children_3, i[1] = l;else l = i[1];
    return l;
  }
  let l;
  if (i[2] !== children_3) l = e(Ze, {
    children: children_3
  }), i[2] = children_3, i[3] = l;else l = i[3];
  return l;
}
function Ze({
  children: children_4
}) {
  let [{
      bindings: bindings
    }, o] = y(() => {
      let v = v7t(Px);
      return t(`[keybindings] KeybindingSetup initialized with ${v.bindings.length} bindings, ${v.warnings.length} warnings`), v;
    }),
    i = Rn(),
    {
      addNotification: addNotification
    } = Lo(),
    pendingChordRef = A(null),
    [pendingChord, H] = y(null),
    F = A(null),
    handlerRegistryRef = A(new Map()),
    c = A(new Set()),
    preDispatchRef = A(new Set()),
    singleKeyEventRef = A(null),
    [keyHandlerRegistry] = y(mhn),
    registerActiveContext = ue(v => {
      c.current.add(v), ze(v);
    }, []),
    unregisterActiveContext = ue(v => {
      c.current.delete(v), qe(v);
    }, []),
    _ = ue(() => {
      F.current?.(), F.current = null;
    }, []),
    setPendingChord = ue(v => {
      if (_(), v !== null) F.current = i.setTimeout(() => {
        t("[keybindings] Chord timeout - cancelling"), pendingChordRef.current = null, H(null);
        let s = koe(v, $6());
        addNotification({
          key: "chord-timeout",
          kind: "feedback",
          text: `${s} cancelled \u2014 no next key within ${Je / 1000}s`,
          row1Hint: `${s} timed out`,
          priority: "immediate",
          timeoutMs: 3000
        });
      }, Je);
      pendingChordRef.current = v, H(v);
    }, [addNotification, _, i]);
  return O(() => {
    TDi(Px);
    let v = Px.changed.subscribe(s => {
      o(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
    });
    return () => {
      v(), _();
    };
  }, [_]), e(n2t, {
    bindings: bindings,
    pendingChordRef: pendingChordRef,
    pendingChord: pendingChord,
    activeContexts: c.current,
    registerActiveContext: registerActiveContext,
    unregisterActiveContext: unregisterActiveContext,
    handlerRegistryRef: handlerRegistryRef,
    preDispatchRef: preDispatchRef,
    singleKeyEventRef: singleKeyEventRef,
    keyHandlerRegistry: keyHandlerRegistry,
    children: e(Wt, {
      bindings: bindings,
      pendingChordRef: pendingChordRef,
      setPendingChord: setPendingChord,
      activeContexts: c.current,
      handlerRegistryRef: handlerRegistryRef,
      preDispatchRef: preDispatchRef,
      singleKeyEventRef: singleKeyEventRef,
      keyHandlerRegistry: keyHandlerRegistry,
      children: children_4
    })
  });
}
function Xe(n) {
  let r = [...n],
    o = new Set(r.filter(item => !item.fallback).map(item => item.action));
  return [...r.filter(item => !item.fallback), ...r.filter(item => item.fallback && !o.has(item.action))];
}
function et(n) {
  return !n.ctrl && !n.meta && !n.superKey;
}
var _t = sZe.map(item => Ace(item.key));
function tt(n) {
  let r = h0e(n);
  return r !== null && _t.some(item => AXe(item, r));
}
function Wt({
  bindings: bindings_2,
  pendingChordRef: pendingChordRef_2,
  setPendingChord: setPendingChord_2,
  activeContexts: activeContexts,
  handlerRegistryRef: handlerRegistryRef_2,
  preDispatchRef: preDispatchRef_2,
  singleKeyEventRef: singleKeyEventRef_2,
  keyHandlerRegistry: keyHandlerRegistry_2,
  children: children_5
}) {
  let W = A([]),
    c = A(null),
    D = A("legacy"),
    d = ue((s, u, p, b) => {
      for (let m of preDispatchRef_2.current) try {
        if (m.handler(s, u, p) === !0) return b(), !0;
      } catch (error) {
        a(error);
      }
      return !1;
    }, [preDispatchRef_2]),
    U = (s, u, p, b) => {
      let current = handlerRegistryRef_2.current;
      if (!current) return !1;
      let g = [...current.values()].flatMap(item => [...item]),
        E = [...new Set(g.filter(item => !item.fallback).map(item => item.context)), ...activeContexts, "Global"],
        f = Lft(s, E, bindings_2, u),
        M = f.type === "match" && g.some(item => !item.fallback && item.action === f.action) ? f.action : null,
        I = M === null ? [p] : [M, p],
        C = tt(s);
      for (let h of I) {
        let [B] = Xe(current.get(h) ?? []).filter(item => !(item.fallback && C));
        if (B) return B.handler(), tMn(h), b(), !0;
      }
      return !1;
    },
    T = (s, u, p, b, m, g = !1) => {
      let current_2 = handlerRegistryRef_2.current,
        f = tt(s),
        M = new Set();
      if (current_2) {
        for (let N of current_2.values()) for (let L of N) if (!(f && L.fallback)) M.add(L.context);
      }
      let I = [...M, ...activeContexts, "Global"],
        current_3 = pendingChordRef_2.current,
        h = current_3 !== null,
        B = Lft(s, I, bindings_2, current_3);
      switch (B.type) {
        case "chord_started":
          D.current = "legacy", setPendingChord_2(B.pending), m();
          return;
        case "chord_cancelled":
          setPendingChord_2(null), m();
          return;
        case "unbound":
          if (setPendingChord_2(null), h) {
            m();
            return;
          }
          break;
        case "match":
          if (setPendingChord_2(null), h) {
            U(s, current_3, B.action, m);
            return;
          }
          break;
        case "none":
          break;
      }
      if (!current_2) return;
      if (!g && d(u, p, b, m)) return;
      let k = new Map(),
        z = Xe([...current_2.values()].flatMap(item => [...item])),
        P = et(s) || f,
        te;
      for (let N of z) {
        if (!N.singleKey || N.fallback && P) continue;
        let L;
        if (N.fallback && !activeContexts.has(N.context)) te ??= (() => {
          let Q = Lft(s, [...activeContexts, "Global"], bindings_2, null);
          return Q.type === "match" ? Q.action : null;
        })(), L = te;else L = k.get(N.context);
        if (L === void 0) {
          let Q = Lft(s, [...activeContexts, N.context, "Global"], bindings_2, null);
          L = Q.type === "match" ? Q.action : null, k.set(N.context, L);
        }
        if (L === N.action) {
          let current_4 = singleKeyEventRef_2.current;
          singleKeyEventRef_2.current = s;
          let re;
          try {
            re = N.handler();
          } finally {
            singleKeyEventRef_2.current = current_4;
          }
          if (re !== !1) {
            tMn(L), m();
            return;
          }
        }
      }
    },
    G = (s, u, p, b, m, g) => {
      let E = keyHandlerRegistry_2,
        f = (B, k) => {};
      if (E.swallowAll.size > 0) {
        f(null, !0), g();
        return;
      }
      if (pendingChordRef_2.current !== null && D.current === "legacy") {
        f(null, !1), T(u, p, b, m, g);
        return;
      }
      let M = $t(s.target),
        I = pendingChordRef_2.current !== null && D.current === "scopeChain";
      if (M.length === 0 && E.preemptiveScopes.size === 0 && !I) {
        f(null, !1), T(u, p, b, m, g);
        return;
      }
      let C = ce(s.target);
      if (E.preemptiveScopes.size > 0 && !I) {
        let B = [...E.preemptiveScopes.keys(), "Global"],
          k = Ado(u, B, bindings_2, null);
        if (k.type === "match" && C) {
          if (Te(C, s, k.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            f(k.action, !0), tMn(k.action);
            return;
          }
        }
      }
      if (!I && C?.attributes.textEntry === !0 && et(u) && [...u.key].length === 1) {
        f(null, d(p, b, m, g));
        return;
      }
      if (I) {
        let current_5 = pendingChordRef_2.current,
          k = Ado(u, W.current, bindings_2, current_5);
        if (k.type === "chord_started") {
          D.current = "scopeChain", setPendingChord_2(k.pending), g(), f(null, !0);
          return;
        }
        if (k.type === "match") {
          setPendingChord_2(null);
          let current_6 = c.current;
          c.current = null, W.current = [];
          let P = current_6 && C && SK(current_6, G5n(C)) ? current_6 : C;
          if (P) {
            if (Te(P, s, k.action, !0, "chord")) {
              f(k.action, !0), tMn(k.action);
              return;
            }
          }
          let te = U(u, current_5, k.action, g);
          f(k.action, te);
          return;
        }
        c.current = null, W.current = [], f(null, !1), T(u, p, b, m, g);
        return;
      }
      let h = Ado(u, M, bindings_2, null);
      switch (h.type) {
        case "chord_started":
          W.current = M, c.current = C ?? null, D.current = "scopeChain", setPendingChord_2(h.pending), g(), f(null, !0);
          return;
        case "match":
          {
            if (!C) {
              f(h.action, !1), T(u, p, b, m, g);
              return;
            }
            if (d(p, b, m, g)) {
              setPendingChord_2(null), f(h.action, !0);
              return;
            }
            if (Te(C, s, h.action, !1, s.type === "wheel" ? "wheel" : "single")) {
              setPendingChord_2(null), f(h.action, !0), tMn(h.action);
              return;
            }
            f(h.action, !1), T(u, p, b, m, g, !0);
            return;
          }
        case "unbound":
          if (d(p, b, m, g)) {
            setPendingChord_2(null), f(null, !0);
            return;
          }
          setPendingChord_2(null), f(null, !1);
          return;
        default:
          f(null, !1), T(u, p, b, m, g);
          return;
      }
    },
    onKeyDownCapture = s => {
      let {
        input: input,
        key: key
      } = Z8s(s);
      G(s, s, input, key, s.sequence, () => ot(s));
    },
    onWheelCapture = s => {
      if (Lt(s.target, s.currentTarget, s.col, s.row)) return;
      let u = {
          name: s.deltaY < 0 ? "wheelup" : "wheeldown",
          key: "",
          ctrl: s.ctrl,
          shift: s.shift,
          meta: s.meta,
          superKey: !1
        },
        p = {
          upArrow: !1,
          downArrow: !1,
          leftArrow: !1,
          rightArrow: !1,
          pageDown: !1,
          pageUp: !1,
          wheelUp: s.deltaY < 0,
          wheelDown: s.deltaY > 0,
          home: !1,
          end: !1,
          return: !1,
          escape: !1,
          tab: !1,
          backspace: !1,
          delete: !1,
          ctrl: s.ctrl,
          shift: s.shift,
          meta: s.meta,
          super: !1
        };
      G(s, u, "", p, "", () => ot(s));
    },
    ref = A(null);
  return Zt(() => {
    if (!ref.current) return;
    let s = N0(ref.current),
      u = () => {
        let current_7 = ref.current;
        if (!current_7 || s.activeElement === current_7) return;
        if (s.activeElement === null) {
          s.focus(current_7);
          return;
        }
        let parentNode = current_7.parentNode;
        while (parentNode) {
          if (parentNode === s.activeElement) {
            s.focus(current_7);
            return;
          }
          parentNode = parentNode.parentNode;
        }
      };
    return u(), s.subscribe(u);
  }, []), e(Sf, {
    ref: ref,
    keybindingScope: "Global",
    tabIndex: -1,
    flexDirection: "column",
    flexGrow: 1,
    onKeyDownCapture: onKeyDownCapture,
    onWheelCapture: onWheelCapture,
    children: children_5
  });
}
function ot(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Gt(n) {
  return n !== null && "attributes" in n;
}
function ce(n) {
  return Gt(n) ? n : void 0;
}
function Lt(n, r, o, i) {
  let l = ce(n),
    x = ce(r);
  while (l && l !== x) {
    if (l._eventHandlers?.onWheel && (o === void 0 || i === void 0 || typeof l.attributes.tabIndex === "number" || K7(l, o, i) !== null)) return !0;
    l = l.parentNode;
  }
  return !1;
}
function $t(n) {
  let r = [],
    o = ce(n);
  while (o) {
    let keybindingScope = o.attributes.keybindingScope;
    if (typeof keybindingScope === "string" && q4i(keybindingScope)) r.push(keybindingScope);
    o = o.parentNode;
  }
  return r;
}
function Te(n, sourceEvent, o, isChordCompletion, origin) {
  let x = new Gmn(o, {
    sourceEvent: sourceEvent,
    isChordCompletion: isChordCompletion,
    origin: origin
  });
  return Cne.dispatch(n, x), x.consumed;
}
j();
j();
j();
var de = Jt(null);
function J(n) {
  let i = S(3),
    {
      children: children_6
    } = n,
    o = A(null),
    l;
  if (i[0] === w) l = {
    setHandler: x => {
      o.current = x;
    },
    tryDelete: R => o.current?.(R) ?? !1
  }, i[0] = l;else l = i[0];
  let value_2 = l,
    F;
  if (i[1] !== children_6) F = e(de.Provider, {
    value: value_2,
    children: children_6
  }), i[1] = children_6, i[2] = F;else F = i[2];
  return F;
}
function Vmn() {
  let n = ve(de);
  if (!n) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return n;
}
j();
class pe {
  queue = [];
  waiters = [];
  changed = De();
  _revision = 0;
  get length() {
    return this.queue.length;
  }
  get revision() {
    return this._revision;
  }
  send(n) {
    this._revision++;
    let r = this.waiters.findIndex(item => item.fn(n));
    if (r !== -1) {
      let o = this.waiters.splice(r, 1)[0];
      if (o) {
        o.resolve(n), this.notify();
        return;
      }
    }
    this.queue.push(n), this.notify();
  }
  poll(n = () => !0) {
    let r = this.queue.findIndex(n);
    if (r === -1) return;
    return this.queue.splice(r, 1)[0];
  }
  receive(fn = () => !0) {
    let r = this.queue.findIndex(fn);
    if (r !== -1) {
      let o = this.queue.splice(r, 1)[0];
      if (o) return this.notify(), Promise.resolve(o);
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
var fe = Jt(void 0);
function me(n) {
  let o = S(3),
    {
      children: children_7
    } = n,
    i;
  if (o[0] === w) i = new pe(), o[0] = i;else i = o[0];
  let value_3 = i,
    x;
  if (o[1] !== children_7) x = e(fe.Provider, {
    value: value_3,
    children: children_7
  }), o[1] = children_7, o[2] = x;else x = o[2];
  return x;
}
function yHo() {
  let n = ve(fe);
  if (!n) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return n;
}
j();
function Xot(n) {
  let r = qo(n);
  O(() => Fi.subscribe((o, i) => {
    let l = Cr();
    r(o, l, i);
  }), []);
}
j();
var ge = Jt(null);
function ahe() {
  let n = ve(ge);
  if (!n) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return n;
}
function xo(_e) {
  return _e.expandedView === "tasks" ? {
    ..._e,
    expandedView: "none"
  } : _e;
}
var ye = Jt(!1),
  q = null;
function Se(n) {
  let c = S(86),
    {
      children: children_8,
      store: store_2,
      initialState: initialState,
      onChangeAppState: onChangeAppState,
      fleetNudgeStore: fleetNudgeStore,
      writesExitHandoff: writesExitHandoff,
      sessionHooks: sessionHooks
    } = n,
    F = writesExitHandoff === void 0 ? !1 : writesExitHandoff;
  if (ve(ye)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let D;
  if (c[0] !== initialState || c[1] !== onChangeAppState || c[2] !== store_2) D = () => store_2 ?? Hs(initialState ?? FGt(), onChangeAppState), c[0] = initialState, c[1] = onChangeAppState, c[2] = store_2, c[3] = D;else D = c[3];
  let [value_13] = y(D),
    U;
  if (c[4] !== sessionHooks) U = () => sessionHooks ?? Jye(), c[4] = sessionHooks, c[5] = U;else U = c[5];
  let [value_9] = y(U),
    G = Qi(),
    _;
  if (c[6] !== G) _ = () => qHo(G), c[6] = G, c[7] = _;else _ = c[7];
  let [value_8] = y(_),
    [value_7] = y(zHo),
    {
      storageV5: storageV5_2
    } = Fe(),
    u = tI(),
    p;
  if (c[8] !== storageV5_2 || c[9] !== value_13) p = () => new szr(storageV5_2, globalThis, () => value_13.setState(xo)), c[8] = storageV5_2, c[9] = value_13, c[10] = p;else p = c[10];
  let [value_6] = y(p),
    m;
  if (c[11] !== fleetNudgeStore || c[12] !== storageV5_2) m = () => fleetNudgeStore ?? new Zot({
    storageV5: storageV5_2
  }), c[11] = fleetNudgeStore, c[12] = storageV5_2, c[13] = m;else m = c[13];
  let [value_5] = y(m),
    E;
  if (c[14] !== storageV5_2) E = () => q ? new q.SessionRosterStore({
    storageV5: storageV5_2
  }) : null, c[14] = storageV5_2, c[15] = E;else E = c[15];
  let [value_4] = y(E),
    [M] = y(F),
    [I] = y(storageV5_2),
    C,
    h;
  if (c[16] !== I || c[17] !== value_13 || c[18] !== M) C = () => {
    let B = M ? () => Kmn(value_13.getState().tasks, I) : () => GWr(value_13.getState().tasks);
    let k = vt(B);
    return () => {
      B(), k();
    };
  }, h = [value_13, M, I], c[16] = I, c[17] = value_13, c[18] = M, c[19] = C, c[20] = h;else C = c[19], h = c[20];
  O(C, h);
  let z;
  if (c[21] !== value_13) z = () => Gvt.over(value_13), c[21] = value_13, c[22] = z;else z = c[22];
  let [value_12] = y(z),
    te;
  if (c[23] !== value_13) te = () => oQ.over(value_13), c[23] = value_13, c[24] = te;else te = c[24];
  let [value_11] = y(te),
    L;
  if (c[25] !== value_12 || c[26] !== u?.mcpSessionWiring) L = () => u?.mcpSessionWiring.acquireConnections(value_12), c[25] = value_12, c[26] = u?.mcpSessionWiring, c[27] = L;else L = c[27];
  let Q;
  if (c[28] !== value_12 || c[29] !== u) Q = [u, value_12], c[28] = value_12, c[29] = u, c[30] = Q;else Q = c[30];
  O(L, Q);
  let re;
  if (c[31] !== value_13) re = () => DEt.over(value_13), c[31] = value_13, c[32] = re;else re = c[32];
  let [be] = y(re),
    bt,
    xt;
  if (c[33] !== be || c[34] !== u) bt = () => {
    if (u === void 0) {
      return;
    }
    return P2t.of(u).acquire(be);
  }, xt = [u, be], c[33] = be, c[34] = u, c[35] = bt, c[36] = xt;else bt = c[35], xt = c[36];
  O(bt, xt);
  let Rt, Ct;
  if (c[37] !== value_12) Rt = () => lIo(() => value_12.get().clients), Ct = [value_12], c[37] = value_12, c[38] = Rt, c[39] = Ct;else Rt = c[38], Ct = c[39];
  O(Rt, Ct);
  let Pt, wt;
  if (c[40] !== value_12) Pt = () => dIo((Do, jo, To) => value_12.swapServerTools(Do, jo, To)), wt = [value_12], c[40] = value_12, c[41] = Pt, c[42] = wt;else Pt = c[41], wt = c[42];
  O(Pt, wt);
  let kt;
  if (c[43] !== value_13.setState) kt = () => Zmn(value_13.setState), c[43] = value_13.setState, c[44] = kt;else kt = c[44];
  let Kt;
  if (c[45] !== value_13) Kt = [value_13], c[45] = value_13, c[46] = Kt;else Kt = c[46];
  O(kt, Kt);
  let Et;
  if (c[47] !== u || c[48] !== storageV5_2 || c[49] !== value_13) Et = (Bo, Ur, Io) => {
    if (qmn(u, Bo, value_13.setState, storageV5_2, Io), !xn()) Vvt(value_13.getState().toolPermissionContext, value_13.setState, value_13.getState().fastMode);
  }, c[47] = u, c[48] = storageV5_2, c[49] = value_13, c[50] = Et;else Et = c[50];
  let xe = qo(Et);
  Xot(xe);
  let Mt;
  if (c[51] !== xe) Mt = () => {
    Ymn(() => xe("policySettings"));
  }, c[51] = xe, c[52] = Mt;else Mt = c[52];
  let Nt;
  if (c[53] === w) Nt = [], c[53] = Nt;else Nt = c[53];
  O(Mt, Nt);
  const value_10 = u ?? null;
  let children_9;
  if (c[54] !== children_8 || c[55] !== value_4) children_9 = q && value_4 ? e(q.SessionRosterStoreContext.Provider, {
    value: value_4,
    children: children_8
  }) : children_8, c[54] = children_8, c[55] = value_4, c[56] = children_9;else children_9 = c[56];
  let children_10;
  if (c[57] !== children_9) children_10 = e(VGt, {
    children: e(J, {
      children: children_9
    })
  }), c[57] = children_9, c[58] = children_10;else children_10 = c[58];
  let children_11;
  if (c[59] !== value_5 || c[60] !== children_10) children_11 = e(k5n.Provider, {
    value: value_5,
    children: children_10
  }), c[59] = value_5, c[60] = children_10, c[61] = children_11;else children_11 = c[61];
  let children_12;
  if (c[62] !== children_11 || c[63] !== value_6) children_12 = e(izr.Provider, {
    value: value_6,
    children: children_11
  }), c[62] = children_11, c[63] = value_6, c[64] = children_12;else children_12 = c[64];
  let children_13;
  if (c[65] !== value_7 || c[66] !== children_12) children_13 = e(Qvt.Provider, {
    value: value_7,
    children: children_12
  }), c[65] = value_7, c[66] = children_12, c[67] = children_13;else children_13 = c[67];
  let children_14;
  if (c[68] !== value_8 || c[69] !== children_13) children_14 = e(me, {
    children: e(Ezr, {
      children: e(yK.Provider, {
        value: value_8,
        children: children_13
      })
    })
  }), c[68] = value_8, c[69] = children_13, c[70] = children_14;else children_14 = c[70];
  let children_15;
  if (c[71] !== value_9 || c[72] !== children_14) children_15 = e(ge.Provider, {
    value: value_9,
    children: children_14
  }), c[71] = value_9, c[72] = children_14, c[73] = children_15;else children_15 = c[73];
  let children_16;
  if (c[74] !== value_10 || c[75] !== children_15) children_16 = e(Azr.Provider, {
    value: value_10,
    children: children_15
  }), c[74] = value_10, c[75] = children_15, c[76] = children_16;else children_16 = c[76];
  let children_17;
  if (c[77] !== value_11 || c[78] !== children_16) children_17 = e(Pzr.Provider, {
    value: value_11,
    children: children_16
  }), c[77] = value_11, c[78] = children_16, c[79] = children_17;else children_17 = c[79];
  let children_18;
  if (c[80] !== value_12 || c[81] !== children_17) children_18 = e(xzr.Provider, {
    value: value_12,
    children: children_17
  }), c[80] = value_12, c[81] = children_17, c[82] = children_18;else children_18 = c[82];
  let At;
  if (c[83] !== value_13 || c[84] !== children_18) At = e(ye.Provider, {
    value: !0,
    children: e(D0.Provider, {
      value: value_13,
      children: children_18
    })
  }), c[83] = value_13, c[84] = children_18, c[85] = At;else At = c[85];
  return At;
}
function SS(n) {
  let K = S(32),
    {
      session: session,
      host: host,
      project: project,
      storageV5: storageV5_3,
      messageQueue: x,
      store: store_3,
      initialState: initialState_2,
      onChangeAppState: onChangeAppState_2,
      fleetNudgeStore: fleetNudgeStore_2,
      sessionHooks: sessionHooks_2,
      writesExitHandoff: writesExitHandoff_2,
      getFpsMetrics: getFpsMetrics,
      stats: U,
      keybindings: keybindings,
      children: children_19
    } = n,
    _ = keybindings === void 0 ? !0 : keybindings,
    v;
  if (K[0] !== storageV5_3) v = xFt(storageV5_3), K[0] = storageV5_3, K[1] = v;else v = K[1];
  let s = v,
    children_20;
  if (K[2] !== children_19 || K[3] !== _) children_20 = _ ? e(Yot, {
    children: children_19
  }) : children_19, K[2] = children_19, K[3] = _, K[4] = children_20;else children_20 = K[4];
  let children_21;
  if (K[5] !== children_20) children_21 = e(Tzr, {
    children: e(VGt, {
      children: e(J, {
        children: children_20
      })
    })
  }), K[5] = children_20, K[6] = children_21;else children_21 = K[6];
  let b;
  if (K[7] !== fleetNudgeStore_2 || K[8] !== initialState_2 || K[9] !== onChangeAppState_2 || K[10] !== sessionHooks_2 || K[11] !== store_3 || K[12] !== children_21 || K[13] !== writesExitHandoff_2) b = e(Se, {
    store: store_3,
    initialState: initialState_2,
    onChangeAppState: onChangeAppState_2,
    fleetNudgeStore: fleetNudgeStore_2,
    sessionHooks: sessionHooks_2,
    writesExitHandoff: writesExitHandoff_2,
    children: children_21
  }), K[7] = fleetNudgeStore_2, K[8] = initialState_2, K[9] = onChangeAppState_2, K[10] = sessionHooks_2, K[11] = store_3, K[12] = children_21, K[13] = writesExitHandoff_2, K[14] = b;else b = K[14];
  let children_22 = b,
    children_23;
  if (K[15] !== children_22 || K[16] !== host || K[17] !== project || K[18] !== session) children_23 = session !== void 0 ? e(nzr, {
    session: session,
    children: children_22
  }) : host !== void 0 ? e(rzr, {
    host: host,
    project: project,
    children: children_22
  }) : children_22, K[15] = children_22, K[16] = host, K[17] = project, K[18] = session, K[19] = children_23;else children_23 = K[19];
  let children_24;
  if (K[20] !== U || K[21] !== children_23) children_24 = e(le, {
    store: U,
    children: children_23
  }), K[20] = U, K[21] = children_23, K[22] = children_24;else children_24 = K[22];
  let f;
  if (K[23] !== getFpsMetrics || K[24] !== children_24) f = e(se, {
    getFpsMetrics: getFpsMetrics,
    children: children_24
  }), K[23] = getFpsMetrics, K[24] = children_24, K[25] = f;else f = K[25];
  let children_25 = f,
    I;
  if (K[26] !== x || K[27] !== children_25) I = x === void 0 ? children_25 : e(Jvt, {
    queue: x,
    children: children_25
  }), K[26] = x, K[27] = children_25, K[28] = I;else I = K[28];
  let children_26 = I;
  if (storageV5_3 === void 0) {
    return children_26;
  }
  let h;
  if (K[29] !== children_26 || K[30] !== s) h = e(o2t, {
    ...s,
    children: children_26
  }), K[29] = children_26, K[30] = s, K[31] = h;else h = K[31];
  return h;
}
export { jWr, WWr, Gmn, NGt, c5n, Yot, Vmn, yHo, Xot, ahe, SS };