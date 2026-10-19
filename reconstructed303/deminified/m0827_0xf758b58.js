// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { wjr, vjr, Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { bt, mI, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { TP, Gnr, Vnr, qnr } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { fg, oUt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { nr } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { dn, xa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { qCe, b1, rvn, CP, b8, gY } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { jnr, Ro } from "B:/~BUN/root/chunk-exdm7pa7.js";
import { Xvt, Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { vc } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { Wmt } from "B:/~BUN/root/chunk-psvhak2h.js";
import { y9o, J2t, Yvt, Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { lBe, jxs, yee, Rfe, xC, j0t, qxs, PU, mve, cBe, Z5e, MCr, Ytn } from "B:/~BUN/root/chunk-raq9cfnw.js";
import { Snr, wnr, wR } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { Ca } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Hie } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { Ent } from "B:/~BUN/root/chunk-t70eh59h.js";
import { bnt } from "B:/~BUN/root/chunk-gbjd0mrd.js";
import { znt, okt } from "B:/~BUN/root/chunk-pe22710m.js";
import { f4r, Enr } from "B:/~BUN/root/chunk-cztbaswn.js";
import { y4r, fY } from "B:/~BUN/root/chunk-f66jfn8z.js";
import { vnr, knr } from "B:/~BUN/root/chunk-nnc7bx19.js";
import { UVe, Lwn } from "B:/~BUN/root/chunk-nj2k6zhp.js";
import { B2t } from "B:/~BUN/root/chunk-t0dcjzj9.js";
import { L2t, N2t, H2t } from "B:/~BUN/root/chunk-ynq7sbnz.js";
import { Unr } from "B:/~BUN/root/chunk-275mme56.js";
import { Ivt } from "B:/~BUN/root/chunk-tq0ftdgn.js";
import { D2t, dnr } from "B:/~BUN/root/chunk-wa0v8rz4.js";
import { Q, e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { CY } from "B:/~BUN/root/chunk-8n6xn43n.js";
import { qt, ae, Ee, P, Mo, Jt, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var le = qt(null),
  Le = 20;
function X(o) {
  let a = w(4),
    {
      children: children
    } = o,
    r;
  if (a[0] === S) r = [], a[0] = r;else r = a[0];
  let n = A(r),
    c;
  if (a[1] === S) c = {
    getDenials: () => n.current,
    recordDenial: h => {
      n.current = [h, ...n.current.slice(0, Le - 1)];
    },
    removeDenial: M => {
      n.current = n.current.filter(item => item !== M);
    }
  }, a[1] = c;else c = a[1];
  let value = c,
    u;
  if (a[2] !== children) u = e(le.Provider, {
    value: value,
    children: children
  }), a[2] = children, a[3] = u;else u = a[3];
  return u;
}
function HCe() {
  let o = Ee(le);
  if (!o) {
    throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
B();
var ce = qt(void 0);
function ue(o) {
  let r = w(3),
    {
      getFpsMetrics: i,
      children: children_2
    } = o,
    n;
  if (r[0] !== children_2 || r[1] !== i) n = e(ce.Provider, {
    value: i,
    children: children_2
  }), r[0] = children_2, r[1] = i, r[2] = n;else n = r[2];
  return n;
}
function inr() {
  return Ee(ce);
}
B();
function Te(o, i) {
  let a = i / 100 * (o.length - 1),
    r = Math.floor(a),
    n = Math.ceil(a);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (a - r);
}
var Ue = 1024;
function anr() {
  let o = new Map(),
    i = new Map(),
    a = new Map();
  return {
    increment(r, n = 1) {
      o.set(r, (o.get(r) ?? 0) + n);
    },
    set(r, n) {
      o.set(r, n);
    },
    observe(r, n) {
      let c = i.get(r);
      if (!c) c = {
        reservoir: [],
        count: 0,
        sum: 0,
        min: n,
        max: n
      }, i.set(r, c);
      if (c.count++, c.sum += n, n < c.min) c.min = n;
      if (n > c.max) c.max = n;
      if (c.reservoir.length < Ue) c.reservoir.push(n);else {
        let h = Math.floor(Math.random() * c.count);
        if (h < Ue) c.reservoir[h] = n;
      }
    },
    add(r, n) {
      let c = a.get(r);
      if (!c) c = new Set(), a.set(r, c);
      c.add(n);
    },
    getAll() {
      let r = Object.fromEntries(o);
      for (let [n, c] of i) {
        if (c.count === 0) continue;
        r[`${n}_count`] = c.count, r[`${n}_min`] = c.min, r[`${n}_max`] = c.max, r[`${n}_avg`] = c.sum / c.count;
        let h = [...c.reservoir].sort((itemA, itemB) => itemA - itemB);
        r[`${n}_p50`] = Te(h, 50), r[`${n}_p95`] = Te(h, 95), r[`${n}_p99`] = Te(h, 99);
      }
      for (let [n, c] of a) r[n] = c.size;
      return r;
    }
  };
}
var ze = qt(null);
function pe(o) {
  let r = w(8),
    {
      store: store,
      children: children_3
    } = o,
    n;
  if (r[0] === S) n = anr(), r[0] = n;else n = r[0];
  let value_2 = store ?? n,
    {
      storageV5: storageV5
    } = Oe(),
    j,
    _;
  if (r[1] !== storageV5 || r[2] !== value_2) j = () => {
    let u = !1;
    let z = W() && storageV5 !== void 0 ? mI(async () => {
      let lastSessionMetrics = value_2.getAll();
      if (Object.keys(lastSessionMetrics).length > 0) await fg(p => ({
        ...p,
        lastSessionMetrics: lastSessionMetrics
      }), storageV5);
      u = !0;
    }) : void 0;
    let G = () => {
      if (u) {
        return;
      }
      let lastSessionMetrics_2 = value_2.getAll();
      if (Object.keys(lastSessionMetrics_2).length > 0) oUt(L => ({
        ...L,
        lastSessionMetrics: lastSessionMetrics_2
      }));
    };
    return process.on("exit", G), () => {
      z?.(), process.off("exit", G);
    };
  }, _ = [value_2, storageV5], r[1] = storageV5, r[2] = value_2, r[3] = j, r[4] = _;else j = r[3], _ = r[4];
  P(j, _);
  let E;
  if (r[5] !== children_3 || r[6] !== value_2) E = e(ze.Provider, {
    value: value_2,
    children: children_3
  }), r[5] = children_3, r[6] = value_2, r[7] = E;else E = r[7];
  return E;
}
B();
class I2t extends qCe {
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
var Ze = 3000;
function NVe(o) {
  let r = w(4),
    {
      children: children_4
    } = o;
  if (Zl()) {
    let n;
    if (r[0] !== children_4) n = e(Q, {
      children: children_4
    }), r[0] = children_4, r[1] = n;else n = r[1];
    return n;
  }
  let n;
  if (r[2] !== children_4) n = e(et, {
    children: children_4
  }), r[2] = children_4, r[3] = n;else n = r[3];
  return n;
}
function et({
  children: children_5
}) {
  let [{
      bindings: bindings
    }, a] = y(() => {
      let x = j0t(xC);
      return t(`[keybindings] KeybindingSetup initialized with ${x.bindings.length} bindings, ${x.warnings.length} warnings`), x;
    }),
    r = dn(),
    {
      addNotification: addNotification
    } = Ro(),
    pendingChordRef = A(null),
    [pendingChord, M] = y(null),
    j = A(null),
    handlerRegistryRef = A(new Map()),
    u = A(new Set()),
    preDispatchRef = A(new Set()),
    singleKeyEventRef = A(null),
    [keyHandlerRegistry] = y(J2t),
    registerActiveContext = ae(x => {
      u.current.add(x);
    }, []),
    unregisterActiveContext = ae(x => {
      u.current.delete(x);
    }, []),
    G = ae(() => {
      j.current?.(), j.current = null;
    }, []),
    setPendingChord = ae(x => {
      if (G(), x !== null) j.current = r.setTimeout(() => {
        t("[keybindings] Chord timeout - cancelling"), pendingChordRef.current = null, M(null), addNotification({
          key: "chord-timeout",
          kind: "feedback",
          text: `${Rfe(x, PU())} cancelled \u2014 no next key within ${Ze / 1000}s`,
          priority: "immediate",
          timeoutMs: 3000
        });
      }, Ze);
      pendingChordRef.current = x, M(x);
    }, [addNotification, G, r]);
  return P(() => {
    qxs(xC);
    let x = xC.changed.subscribe(s => {
      a(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`);
    });
    return () => {
      x(), G();
    };
  }, [G]), e(Yvt, {
    bindings: bindings,
    pendingChordRef: pendingChordRef,
    pendingChord: pendingChord,
    setPendingChord: setPendingChord,
    activeContexts: u.current,
    registerActiveContext: registerActiveContext,
    unregisterActiveContext: unregisterActiveContext,
    handlerRegistryRef: handlerRegistryRef,
    preDispatchRef: preDispatchRef,
    singleKeyEventRef: singleKeyEventRef,
    keyHandlerRegistry: keyHandlerRegistry,
    children: e(Yt, {
      bindings: bindings,
      pendingChordRef: pendingChordRef,
      setPendingChord: setPendingChord,
      activeContexts: u.current,
      handlerRegistryRef: handlerRegistryRef,
      preDispatchRef: preDispatchRef,
      singleKeyEventRef: singleKeyEventRef,
      keyHandlerRegistry: keyHandlerRegistry,
      children: children_5
    })
  });
}
function tt(o) {
  let i = [...o],
    a = new Set(i.filter(item => !item.fallback).map(item => item.action));
  return [...i.filter(item => !item.fallback), ...i.filter(item => item.fallback && !a.has(item.action))];
}
function ot(o) {
  return !o.ctrl && !o.meta && !o.superKey;
}
var Qt = lBe.map(item => yee(item.key));
function rt(o) {
  let i = mve(o);
  return i !== null && Qt.some(item => cBe(item, i));
}
function Yt({
  bindings: bindings_2,
  pendingChordRef: pendingChordRef_2,
  setPendingChord: setPendingChord_2,
  activeContexts: activeContexts,
  handlerRegistryRef: handlerRegistryRef_2,
  preDispatchRef: preDispatchRef_2,
  singleKeyEventRef: singleKeyEventRef_2,
  keyHandlerRegistry: keyHandlerRegistry_2,
  children: children_6
}) {
  let _ = A([]),
    u = A(null),
    T = A("legacy"),
    p = ae((s, d, f, R) => {
      for (let g of preDispatchRef_2.current) try {
        if (g.handler(s, d, f) === !0) return R(), !0;
      } catch (error) {
        l(error);
      }
      return !1;
    }, [preDispatchRef_2]),
    z = (s, d, f, R) => {
      let current = handlerRegistryRef_2.current;
      if (!current) return !1;
      let v = [...current.values()].flatMap(item => [...item]),
        D = [...new Set(v.filter(item => !item.fallback).map(item => item.context)), ...activeContexts, "Global"],
        m = Z5e(s, D, bindings_2, d),
        N = m.type === "match" && v.some(item => !item.fallback && item.action === m.action) ? m.action : null,
        O = N === null ? [f] : [N, f],
        C = rt(s);
      for (let b of O) {
        let [I] = tt(current.get(b) ?? []).filter(item => !(item.fallback && C));
        if (I) return I.handler(), Ytn(b), R(), !0;
      }
      return !1;
    },
    V = (s, d, f, R, g, v = !1) => {
      let current_2 = handlerRegistryRef_2.current,
        m = rt(s),
        N = new Set();
      if (current_2) {
        for (let H of current_2.values()) for (let U of H) if (!(m && U.fallback)) N.add(U.context);
      }
      let O = [...N, ...activeContexts, "Global"],
        current_3 = pendingChordRef_2.current,
        b = current_3 !== null,
        I = Z5e(s, O, bindings_2, current_3);
      switch (I.type) {
        case "chord_started":
          T.current = "legacy", setPendingChord_2(I.pending), g();
          return;
        case "chord_cancelled":
          setPendingChord_2(null), g();
          return;
        case "unbound":
          if (setPendingChord_2(null), b) {
            g();
            return;
          }
          break;
        case "match":
          if (setPendingChord_2(null), b) {
            z(s, current_3, I.action, g);
            return;
          }
          break;
        case "none":
          break;
      }
      if (!current_2) return;
      if (!v && p(d, f, R, g)) return;
      let K = new Map(),
        J = tt([...current_2.values()].flatMap(item => [...item])),
        k = ot(s) || m,
        re;
      for (let H of J) {
        if (!H.singleKey || H.fallback && k) continue;
        let U;
        if (H.fallback && !activeContexts.has(H.context)) re ??= (() => {
          let q = Z5e(s, [...activeContexts, "Global"], bindings_2, null);
          return q.type === "match" ? q.action : null;
        })(), U = re;else U = K.get(H.context);
        if (U === void 0) {
          let q = Z5e(s, [...activeContexts, H.context, "Global"], bindings_2, null);
          U = q.type === "match" ? q.action : null, K.set(H.context, U);
        }
        if (U === H.action) {
          let current_4 = singleKeyEventRef_2.current;
          singleKeyEventRef_2.current = s;
          let se;
          try {
            se = H.handler();
          } finally {
            singleKeyEventRef_2.current = current_4;
          }
          if (se !== !1) {
            Ytn(U), g();
            return;
          }
        }
      }
    },
    L = (s, d, f, R, g, v) => {
      let D = keyHandlerRegistry_2,
        m = (I, K) => {};
      if (D.swallowAll.size > 0) {
        m(null, !0), v();
        return;
      }
      if (pendingChordRef_2.current !== null && T.current === "legacy") {
        m(null, !1), V(d, f, R, g, v);
        return;
      }
      let N = eo(s.target),
        O = pendingChordRef_2.current !== null && T.current === "scopeChain";
      if (N.length === 0 && D.preemptiveScopes.size === 0 && !O) {
        m(null, !1), V(d, f, R, g, v);
        return;
      }
      let C = fe(s.target);
      if (D.preemptiveScopes.size > 0 && !O) {
        let I = [...D.preemptiveScopes.keys(), "Global"],
          K = MCr(d, I, bindings_2, null);
        if (K.type === "match" && C) {
          if (Be(C, s, K.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            m(K.action, !0), Ytn(K.action);
            return;
          }
        }
      }
      if (!O && C?.attributes.textEntry === !0 && ot(d) && [...d.key].length === 1) {
        m(null, p(f, R, g, v));
        return;
      }
      if (O) {
        let current_5 = pendingChordRef_2.current,
          K = MCr(d, _.current, bindings_2, current_5);
        if (K.type === "chord_started") {
          T.current = "scopeChain", setPendingChord_2(K.pending), v(), m(null, !0);
          return;
        }
        if (K.type === "match") {
          setPendingChord_2(null);
          let current_6 = u.current;
          u.current = null, _.current = [];
          let k = current_6 && C && b1(current_6, rvn(C)) ? current_6 : C;
          if (k) {
            if (Be(k, s, K.action, !0, "chord")) {
              m(K.action, !0), Ytn(K.action);
              return;
            }
          }
          let re = z(d, current_5, K.action, v);
          m(K.action, re);
          return;
        }
        u.current = null, _.current = [], m(null, !1), V(d, f, R, g, v);
        return;
      }
      let b = MCr(d, N, bindings_2, null);
      switch (b.type) {
        case "chord_started":
          _.current = N, u.current = C ?? null, T.current = "scopeChain", setPendingChord_2(b.pending), v(), m(null, !0);
          return;
        case "match":
          {
            if (!C) {
              m(b.action, !1), V(d, f, R, g, v);
              return;
            }
            if (p(f, R, g, v)) {
              setPendingChord_2(null), m(b.action, !0);
              return;
            }
            if (Be(C, s, b.action, !1, s.type === "wheel" ? "wheel" : "single")) {
              setPendingChord_2(null), m(b.action, !0), Ytn(b.action);
              return;
            }
            m(b.action, !1), V(d, f, R, g, v, !0);
            return;
          }
        case "unbound":
          if (p(f, R, g, v)) {
            setPendingChord_2(null), m(null, !0);
            return;
          }
          setPendingChord_2(null), m(null, !1);
          return;
        default:
          m(null, !1), V(d, f, R, g, v);
          return;
      }
    },
    onKeyDownCapture = s => {
      let {
        input: input,
        key: key
      } = y9o(s);
      L(s, s, input, key, s.sequence, () => nt(s));
    },
    onWheelCapture = s => {
      if (Xt(s.target, s.currentTarget, s.col, s.row)) return;
      let d = {
          name: s.deltaY < 0 ? "wheelup" : "wheeldown",
          key: "",
          ctrl: s.ctrl,
          shift: s.shift,
          meta: s.meta,
          superKey: !1
        },
        f = {
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
      L(s, d, "", f, "", () => nt(s));
    },
    ref = A(null);
  return Jt(() => {
    if (!ref.current) return;
    let s = CP(ref.current),
      d = () => {
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
    return d(), s.subscribe(d);
  }, []), e(vc, {
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
function nt(o) {
  o.preventDefault(), o.stopImmediatePropagation();
}
function Zt(o) {
  return o !== null && "attributes" in o;
}
function fe(o) {
  return Zt(o) ? o : void 0;
}
function Xt(o, i, a, r) {
  let n = fe(o),
    c = fe(i);
  while (n && n !== c) {
    if (n._eventHandlers?.onWheel && (a === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || gY(n, a, r) !== null)) return !0;
    n = n.parentNode;
  }
  return !1;
}
function eo(o) {
  let i = [],
    a = fe(o);
  while (a) {
    let keybindingScope = a.attributes.keybindingScope;
    if (typeof keybindingScope === "string" && jxs(keybindingScope)) i.push(keybindingScope);
    a = a.parentNode;
  }
  return i;
}
function Be(o, sourceEvent, a, isChordCompletion, origin) {
  let c = new I2t(a, {
    sourceEvent: sourceEvent,
    isChordCompletion: isChordCompletion,
    origin: origin
  });
  return b8.dispatch(o, c), c.consumed;
}
B();
B();
B();
var me = qt(null);
function ee(o) {
  let r = w(3),
    {
      children: children_7
    } = o,
    a = A(null),
    n;
  if (r[0] === S) n = {
    setHandler: c => {
      a.current = c;
    },
    tryDelete: h => a.current?.(h) ?? !1
  }, r[0] = n;else n = r[0];
  let value_3 = n,
    j;
  if (r[1] !== children_7) j = e(me.Provider, {
    value: value_3,
    children: children_7
  }), r[1] = children_7, r[2] = j;else j = r[2];
  return j;
}
function M2t() {
  let o = Ee(me);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)");
  }
  return o;
}
B();
class ge {
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
      let a = this.waiters.splice(i, 1)[0];
      if (a) {
        a.resolve(o), this.notify();
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
      let a = this.queue.splice(i, 1)[0];
      if (a) return this.notify(), Promise.resolve(a);
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
var he = qt(void 0);
function ye(o) {
  let a = w(3),
    {
      children: children_8
    } = o,
    r;
  if (a[0] === S) r = new ge(), a[0] = r;else r = a[0];
  let value_4 = r,
    c;
  if (a[1] !== children_8) c = e(he.Provider, {
    value: value_4,
    children: children_8
  }), a[1] = children_8, a[2] = c;else c = a[2];
  return c;
}
function $Kr() {
  let o = Ee(he);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider");
  }
  return o;
}
B();
function FVe(o) {
  let i = Mo(o);
  P(() => Ca.subscribe((a, r) => {
    let n = nr();
    i(a, n, r);
  }), []);
}
B();
var Se = qt(null);
function Gre() {
  let o = Ee(Se);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o;
}
function Ao(Ge) {
  return Ge.expandedView === "tasks" ? {
    ...Ge,
    expandedView: "none"
  } : Ge;
}
var ve = qt(!1),
  Y = null;
function be(o) {
  let u = w(86),
    {
      children: children_9,
      store: store_2,
      initialState: initialState,
      onChangeAppState: onChangeAppState,
      fleetNudgeStore: fleetNudgeStore,
      writesExitHandoff: writesExitHandoff,
      sessionHooks: sessionHooks
    } = o,
    j = writesExitHandoff === void 0 ? !1 : writesExitHandoff;
  if (Ee(ve)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider");
  }
  let T;
  if (u[0] !== initialState || u[1] !== onChangeAppState || u[2] !== store_2) T = () => store_2 ?? _s(initialState ?? Ivt(), onChangeAppState), u[0] = initialState, u[1] = onChangeAppState, u[2] = store_2, u[3] = T;else T = u[3];
  let [value_14] = y(T),
    z;
  if (u[4] !== sessionHooks) z = () => sessionHooks ?? Hie(), u[4] = sessionHooks, u[5] = z;else z = u[5];
  let [value_10] = y(z),
    L = xa(),
    G;
  if (u[6] !== L) G = () => y4r(L), u[6] = L, u[7] = G;else G = u[7];
  let [value_9] = y(G),
    [value_8] = y(f4r),
    {
      storageV5: storageV5_2
    } = Oe(),
    d = wR(),
    f;
  if (u[8] !== storageV5_2 || u[9] !== value_14) f = () => new vnr(storageV5_2, globalThis, () => value_14.setState(Ao)), u[8] = storageV5_2, u[9] = value_14, u[10] = f;else f = u[10];
  let [value_7] = y(f),
    g;
  if (u[11] !== fleetNudgeStore || u[12] !== storageV5_2) g = () => fleetNudgeStore ?? new UVe({
    storageV5: storageV5_2
  }), u[11] = fleetNudgeStore, u[12] = storageV5_2, u[13] = g;else g = u[13];
  let [value_6] = y(g),
    D;
  if (u[14] !== storageV5_2) D = () => Y ? new Y.SessionRosterStore({
    storageV5: storageV5_2
  }) : null, u[14] = storageV5_2, u[15] = D;else D = u[15];
  let [value_5] = y(D),
    [N] = y(j),
    [O] = y(storageV5_2),
    C,
    b;
  if (u[16] !== O || u[17] !== value_14 || u[18] !== N) C = () => {
    let I = N ? () => D2t(value_14.getState().tasks, O) : () => dnr(value_14.getState().tasks);
    let K = bt(I);
    return () => {
      I(), K();
    };
  }, b = [value_14, N, O], u[16] = O, u[17] = value_14, u[18] = N, u[19] = C, u[20] = b;else C = u[19], b = u[20];
  P(C, b);
  let J;
  if (u[21] !== value_14) J = () => bnt.over(value_14), u[21] = value_14, u[22] = J;else J = u[22];
  let [value_13] = y(J),
    re;
  if (u[23] !== value_14) re = () => CY.over(value_14), u[23] = value_14, u[24] = re;else re = u[24];
  let [value_12] = y(re),
    U;
  if (u[25] !== value_13 || u[26] !== d?.mcpSessionWiring) U = () => d?.mcpSessionWiring.acquireConnections(value_13), u[25] = value_13, u[26] = d?.mcpSessionWiring, u[27] = U;else U = u[27];
  let q;
  if (u[28] !== value_13 || u[29] !== d) q = [d, value_13], u[28] = value_13, u[29] = d, u[30] = q;else q = u[30];
  P(U, q);
  let se;
  if (u[31] !== value_14) se = () => znt.over(value_14), u[31] = value_14, u[32] = se;else se = u[32];
  let [Re] = y(se),
    xt,
    Pt;
  if (u[33] !== Re || u[34] !== d) xt = () => {
    if (d === void 0) {
      return;
    }
    return okt.of(d).acquire(Re);
  }, Pt = [d, Re], u[33] = Re, u[34] = d, u[35] = xt, u[36] = Pt;else xt = u[35], Pt = u[36];
  P(xt, Pt);
  let Ct, wt;
  if (u[37] !== value_13) Ct = () => wjr(() => value_13.get().clients), wt = [value_13], u[37] = value_13, u[38] = Ct, u[39] = wt;else Ct = u[38], wt = u[39];
  P(Ct, wt);
  let kt, Kt;
  if (u[40] !== value_13) kt = () => vjr((Wo, Go, Lo) => value_13.swapServerTools(Wo, Go, Lo)), Kt = [value_13], u[40] = value_13, u[41] = kt, u[42] = Kt;else kt = u[41], Kt = u[42];
  P(kt, Kt);
  let Mt;
  if (u[43] !== value_14.setState) Mt = () => B2t(value_14.setState), u[43] = value_14.setState, u[44] = Mt;else Mt = u[44];
  let Et;
  if (u[45] !== value_14) Et = [value_14], u[45] = value_14, u[46] = Et;else Et = u[46];
  P(Mt, Et);
  let At;
  if (u[47] !== d || u[48] !== storageV5_2 || u[49] !== value_14) At = ($o, ei, Uo) => {
    if (L2t(d, $o, value_14.setState, storageV5_2, Uo), !Bn()) H2t(value_14.getState().toolPermissionContext, value_14.setState, value_14.getState().fastMode);
  }, u[47] = d, u[48] = storageV5_2, u[49] = value_14, u[50] = At;else At = u[50];
  let xe = Mo(At);
  FVe(xe);
  let Dt;
  if (u[51] !== xe) Dt = () => {
    N2t(() => xe("policySettings"));
  }, u[51] = xe, u[52] = Dt;else Dt = u[52];
  let Nt;
  if (u[53] === S) Nt = [], u[53] = Nt;else Nt = u[53];
  P(Dt, Nt);
  const value_11 = d ?? null;
  let children_10;
  if (u[54] !== children_9 || u[55] !== value_5) children_10 = Y && value_5 ? e(Y.SessionRosterStoreContext.Provider, {
    value: value_5,
    children: children_9
  }) : children_9, u[54] = children_9, u[55] = value_5, u[56] = children_10;else children_10 = u[56];
  let children_11;
  if (u[57] !== children_10) children_11 = e(X, {
    children: e(ee, {
      children: children_10
    })
  }), u[57] = children_10, u[58] = children_11;else children_11 = u[58];
  let children_12;
  if (u[59] !== value_6 || u[60] !== children_11) children_12 = e(Lwn.Provider, {
    value: value_6,
    children: children_11
  }), u[59] = value_6, u[60] = children_11, u[61] = children_12;else children_12 = u[61];
  let children_13;
  if (u[62] !== children_12 || u[63] !== value_7) children_13 = e(knr.Provider, {
    value: value_7,
    children: children_12
  }), u[62] = children_12, u[63] = value_7, u[64] = children_13;else children_13 = u[64];
  let children_14;
  if (u[65] !== value_8 || u[66] !== children_13) children_14 = e(Enr.Provider, {
    value: value_8,
    children: children_13
  }), u[65] = value_8, u[66] = children_13, u[67] = children_14;else children_14 = u[67];
  let children_15;
  if (u[68] !== value_9 || u[69] !== children_14) children_15 = e(ye, {
    children: e(Unr, {
      children: e(fY.Provider, {
        value: value_9,
        children: children_14
      })
    })
  }), u[68] = value_9, u[69] = children_14, u[70] = children_15;else children_15 = u[70];
  let children_16;
  if (u[71] !== value_10 || u[72] !== children_15) children_16 = e(Se.Provider, {
    value: value_10,
    children: children_15
  }), u[71] = value_10, u[72] = children_15, u[73] = children_16;else children_16 = u[73];
  let children_17;
  if (u[74] !== value_11 || u[75] !== children_16) children_17 = e(Gnr.Provider, {
    value: value_11,
    children: children_16
  }), u[74] = value_11, u[75] = children_16, u[76] = children_17;else children_17 = u[76];
  let children_18;
  if (u[77] !== value_12 || u[78] !== children_17) children_18 = e(qnr.Provider, {
    value: value_12,
    children: children_17
  }), u[77] = value_12, u[78] = children_17, u[79] = children_18;else children_18 = u[79];
  let children_19;
  if (u[80] !== value_13 || u[81] !== children_18) children_19 = e(Vnr.Provider, {
    value: value_13,
    children: children_18
  }), u[80] = value_13, u[81] = children_18, u[82] = children_19;else children_19 = u[82];
  let Ht;
  if (u[83] !== value_14 || u[84] !== children_19) Ht = e(ve.Provider, {
    value: !0,
    children: e(TP.Provider, {
      value: value_14,
      children: children_19
    })
  }), u[83] = value_14, u[84] = children_19, u[85] = Ht;else Ht = u[85];
  return Ht;
}
function a_(o) {
  let E = w(32),
    {
      session: session,
      host: host,
      project: project,
      storageV5: storageV5_3,
      messageQueue: c,
      store: store_3,
      initialState: initialState_2,
      onChangeAppState: onChangeAppState_2,
      fleetNudgeStore: fleetNudgeStore_2,
      sessionHooks: sessionHooks_2,
      writesExitHandoff: writesExitHandoff_2,
      getFpsMetrics: getFpsMetrics,
      stats: z,
      keybindings: keybindings,
      children: children_20
    } = o,
    G = keybindings === void 0 ? !0 : keybindings,
    x;
  if (E[0] !== storageV5_3) x = Wmt(storageV5_3), E[0] = storageV5_3, E[1] = x;else x = E[1];
  let s = x,
    children_21;
  if (E[2] !== children_20 || E[3] !== G) children_21 = G ? e(NVe, {
    children: children_20
  }) : children_20, E[2] = children_20, E[3] = G, E[4] = children_21;else children_21 = E[4];
  let children_22;
  if (E[5] !== children_21) children_22 = e(jnr, {
    children: e(X, {
      children: e(ee, {
        children: children_21
      })
    })
  }), E[5] = children_21, E[6] = children_22;else children_22 = E[6];
  let R;
  if (E[7] !== fleetNudgeStore_2 || E[8] !== initialState_2 || E[9] !== onChangeAppState_2 || E[10] !== sessionHooks_2 || E[11] !== store_3 || E[12] !== children_22 || E[13] !== writesExitHandoff_2) R = e(be, {
    store: store_3,
    initialState: initialState_2,
    onChangeAppState: onChangeAppState_2,
    fleetNudgeStore: fleetNudgeStore_2,
    sessionHooks: sessionHooks_2,
    writesExitHandoff: writesExitHandoff_2,
    children: children_22
  }), E[7] = fleetNudgeStore_2, E[8] = initialState_2, E[9] = onChangeAppState_2, E[10] = sessionHooks_2, E[11] = store_3, E[12] = children_22, E[13] = writesExitHandoff_2, E[14] = R;else R = E[14];
  let children_23 = R,
    children_24;
  if (E[15] !== children_23 || E[16] !== host || E[17] !== project || E[18] !== session) children_24 = session !== void 0 ? e(Snr, {
    session: session,
    children: children_23
  }) : host !== void 0 ? e(wnr, {
    host: host,
    project: project,
    children: children_23
  }) : children_23, E[15] = children_23, E[16] = host, E[17] = project, E[18] = session, E[19] = children_24;else children_24 = E[19];
  let children_25;
  if (E[20] !== z || E[21] !== children_24) children_25 = e(pe, {
    store: z,
    children: children_24
  }), E[20] = z, E[21] = children_24, E[22] = children_25;else children_25 = E[22];
  let m;
  if (E[23] !== getFpsMetrics || E[24] !== children_25) m = e(ue, {
    getFpsMetrics: getFpsMetrics,
    children: children_25
  }), E[23] = getFpsMetrics, E[24] = children_25, E[25] = m;else m = E[25];
  let children_26 = m,
    O;
  if (E[26] !== c || E[27] !== children_26) O = c === void 0 ? children_26 : e(Ent, {
    queue: c,
    children: children_26
  }), E[26] = c, E[27] = children_26, E[28] = O;else O = E[28];
  let children_27 = O;
  if (storageV5_3 === void 0) {
    return children_27;
  }
  let b;
  if (E[29] !== children_27 || E[30] !== s) b = e(Xvt, {
    ...s,
    children: children_27
  }), E[29] = children_27, E[30] = s, E[31] = b;else b = E[31];
  return b;
}
export { HCe, inr, anr, I2t, NVe, M2t, $Kr, FVe, Gre, a_ };