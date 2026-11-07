// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  VGt,
  zHo,
  Qvt
} from "B:/~BUN/root/chunk-bnbh68ja.js";
import {
  lIo,
  dIo,
  xn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  vt,
  zA,
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  D0,
  Azr,
  xzr,
  Pzr
} from "B:/~BUN/root/chunk-tmdrwqnv.js";
import {
  Sy,
  oin
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Cr
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Rn,
  Qi
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  OUe,
  SK,
  G5n,
  N0,
  K7,
  Cne
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Tzr,
  Lo
} from "B:/~BUN/root/chunk-npkbazqf.js";
import {
  o2t,
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  Sf
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  xFt
} from "B:/~BUN/root/chunk-sc660841.js";
import {
  Z8s,
  mhn,
  n2t,
  vd
} from "B:/~BUN/root/chunk-7g0t7h3t.js";
import {
  sZe,
  q4i
} from "B:/~BUN/root/chunk-fnf5t6te.js";
import {
  Ace,
  koe,
  Px,
  v7t,
  TDi,
  $6,
  h0e,
  AXe,
  Lft,
  Ado,
  tMn
} from "B:/~BUN/root/chunk-qk8tvzkn.js";
import {
  nzr,
  rzr,
  tI
} from "B:/~BUN/root/chunk-03yjyf4y.js";
import {
  Fi
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Jye
} from "B:/~BUN/root/chunk-nk59bmc9.js";
import {
  Jvt
} from "B:/~BUN/root/chunk-cvm7zk4p.js";
import {
  Gvt
} from "B:/~BUN/root/chunk-8n55xd0b.js";
import {
  DEt,
  P2t
} from "B:/~BUN/root/chunk-r92qsn81.js";
import {
  qHo,
  yK
} from "B:/~BUN/root/chunk-h6416p81.js";
import {
  szr,
  izr
} from "B:/~BUN/root/chunk-jmh99pxs.js";
import {
  Zot,
  k5n
} from "B:/~BUN/root/chunk-3dbnj73j.js";
import {
  Zmn
} from "B:/~BUN/root/chunk-s3ja9yx6.js";
import {
  qmn,
  Ymn,
  Vvt
} from "B:/~BUN/root/chunk-p22cr4v3.js";
import {
  Ezr
} from "B:/~BUN/root/chunk-z8bb1299.js";
import {
  FGt
} from "B:/~BUN/root/chunk-mgjkrehs.js";
import {
  Kmn,
  GWr
} from "B:/~BUN/root/chunk-qk0n7exe.js";
import {
  ne,
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  oQ
} from "B:/~BUN/root/chunk-e4dm7qmm.js";
import {
  Jt,
  ue,
  ve,
  O,
  qo,
  Zt,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
j();
j();
var ie = Jt(void 0);

function se(n) {
  let i = S(3),
    {
      getFpsMetrics: r,
      children: o
    } = n,
    l;
  if (i[0] !== o || i[1] !== r) l = e(ie.Provider, {
    value: r,
    children: o
  }), i[0] = o, i[1] = r, i[2] = l;
  else l = i[2];
  return l
}

function jWr() {
  return ve(ie)
}
j();

function He(n, r) {
  let o = r / 100 * (n.length - 1),
    i = Math.floor(o),
    l = Math.ceil(o);
  if (i === l) return n[i];
  return n[i] + (n[l] - n[i]) * (o - i)
}
var We = 1024;

function WWr() {
  let n = new Map;
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
      if (i.reservoir.length < We) i.reservoir.push(o);
      else {
        let l = Math.floor(Math.random() * i.count);
        if (l < We) i.reservoir[l] = o
      }
    },
    getAll() {
      let r = {};
      for (let [o, i] of n) {
        if (i.count === 0) continue;
        r[`${o}_count`] = i.count, r[`${o}_min`] = i.min, r[`${o}_max`] = i.max, r[`${o}_avg`] = i.sum / i.count;
        let l = [...i.reservoir].sort((x, R) => x - R);
        r[`${o}_p50`] = He(l, 50), r[`${o}_p95`] = He(l, 95), r[`${o}_p99`] = He(l, 99)
      }
      return r
    }
  }
}
var Ge = Jt(null);

function le(n) {
  let i = S(8),
    {
      store: r,
      children: o
    } = n,
    l;
  if (i[0] === w) l = WWr(), i[0] = l;
  else l = i[0];
  let R = r ?? l,
    {
      storageV5: H
    } = Fe(),
    F, W;
  if (i[1] !== H || i[2] !== R) F = () => {
    let c = !1;
    let U = X() && H !== void 0 ? zA(async () => {
      let D = R.getAll();
      if (Object.keys(D).length > 0) await Sy((d) => ({
        ...d,
        lastSessionMetrics: D
      }), H);
      c = !0
    }) : void 0;
    let _ = () => {
      if (c) {
        return
      }
      let T = R.getAll();
      if (Object.keys(T).length > 0) oin((G) => ({
        ...G,
        lastSessionMetrics: T
      }))
    };
    return process.on("exit", _), () => {
      U?.(), process.off("exit", _)
    }
  }, W = [R, H], i[1] = H, i[2] = R, i[3] = F, i[4] = W;
  else F = i[3], W = i[4];
  O(F, W);
  let K;
  if (i[5] !== o || i[6] !== R) K = e(Ge.Provider, {
    value: R,
    children: o
  }), i[5] = o, i[6] = R, i[7] = K;
  else K = i[7];
  return K
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
    this.action = n, this.sourceEvent = r?.sourceEvent ?? null, this.isChordCompletion = r?.isChordCompletion ?? !1, this.origin = r?.origin ?? "single"
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation()
  }
  get consumed() {
    return this._isPropagationStopped()
  }
}
var NGt = he(Hs({
  counts: new Map
}), (n) => n.setState(() => ({
  counts: new Map
})));

function ze(n) {
  NGt.setState((r) => {
    let o = new Map(r.counts);
    return o.set(n, (o.get(n) ?? 0) + 1), {
      counts: o
    }
  })
}

function qe(n) {
  NGt.setState((r) => {
    let o = r.counts.get(n);
    if (o === void 0) return r;
    let i = new Map(r.counts);
    if (o <= 1) i.delete(n);
    else i.set(n, o - 1);
    return {
      counts: i
    }
  })
}

function c5n(n, r) {
  return n.counts.has(r)
}
var Je = 3000;

function Yot(n) {
  let i = S(4),
    {
      children: r
    } = n;
  if (vd()) {
    let l;
    if (i[0] !== r) l = e(ne, {
      children: r
    }), i[0] = r, i[1] = l;
    else l = i[1];
    return l
  }
  let l;
  if (i[2] !== r) l = e(Ze, {
    children: r
  }), i[2] = r, i[3] = l;
  else l = i[3];
  return l
}

function Ze({
  children: n
}) {
  let [{
    bindings: r
  }, o] = y(() => {
    let v = v7t(Px);
    return t(`[keybindings] KeybindingSetup initialized with ${v.bindings.length} bindings, ${v.warnings.length} warnings`), v
  }), i = Rn(), {
    addNotification: l
  } = Lo(), x = A(null), [R, H] = y(null), F = A(null), W = A(new Map), c = A(new Set), D = A(new Set), d = A(null), [U] = y(mhn), T = ue((v) => {
    c.current.add(v), ze(v)
  }, []), G = ue((v) => {
    c.current.delete(v), qe(v)
  }, []), _ = ue(() => {
    F.current?.(), F.current = null
  }, []), K = ue((v) => {
    if (_(), v !== null) F.current = i.setTimeout(() => {
      t("[keybindings] Chord timeout - cancelling"), x.current = null, H(null);
      let s = koe(v, $6());
      l({
        key: "chord-timeout",
        kind: "feedback",
        text: `${s} cancelled \u2014 no next key within ${Je/1000}s`,
        row1Hint: `${s} timed out`,
        priority: "immediate",
        timeoutMs: 3000
      })
    }, Je);
    x.current = v, H(v)
  }, [l, _, i]);
  return O(() => {
    TDi(Px);
    let v = Px.changed.subscribe((s) => {
      o(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`)
    });
    return () => {
      v(), _()
    }
  }, [_]), e(n2t, {
    bindings: r,
    pendingChordRef: x,
    pendingChord: R,
    activeContexts: c.current,
    registerActiveContext: T,
    unregisterActiveContext: G,
    handlerRegistryRef: W,
    preDispatchRef: D,
    singleKeyEventRef: d,
    keyHandlerRegistry: U,
    children: e(Wt, {
      bindings: r,
      pendingChordRef: x,
      setPendingChord: K,
      activeContexts: c.current,
      handlerRegistryRef: W,
      preDispatchRef: D,
      singleKeyEventRef: d,
      keyHandlerRegistry: U,
      children: n
    })
  })
}

function Xe(n) {
  let r = [...n],
    o = new Set(r.filter((i) => !i.fallback).map((i) => i.action));
  return [...r.filter((i) => !i.fallback), ...r.filter((i) => i.fallback && !o.has(i.action))]
}

function et(n) {
  return !n.ctrl && !n.meta && !n.superKey
}
var _t = sZe.map((n) => Ace(n.key));

function tt(n) {
  let r = h0e(n);
  return r !== null && _t.some((o) => AXe(o, r))
}

function Wt({
  bindings: n,
  pendingChordRef: r,
  setPendingChord: o,
  activeContexts: i,
  handlerRegistryRef: l,
  preDispatchRef: x,
  singleKeyEventRef: R,
  keyHandlerRegistry: H,
  children: F
}) {
  let W = A([]),
    c = A(null),
    D = A("legacy"),
    d = ue((s, u, p, b) => {
      for (let m of x.current) try {
        if (m.handler(s, u, p) === !0) return b(), !0
      } catch (g) {
        a(g)
      }
      return !1
    }, [x]),
    U = (s, u, p, b) => {
      let m = l.current;
      if (!m) return !1;
      let g = [...m.values()].flatMap((h) => [...h]),
        E = [...new Set(g.filter((h) => !h.fallback).map((h) => h.context)), ...i, "Global"],
        f = Lft(s, E, n, u),
        M = f.type === "match" && g.some((h) => !h.fallback && h.action === f.action) ? f.action : null,
        I = M === null ? [p] : [M, p],
        C = tt(s);
      for (let h of I) {
        let [B] = Xe(m.get(h) ?? []).filter((k) => !(k.fallback && C));
        if (B) return B.handler(), tMn(h), b(), !0
      }
      return !1
    },
    T = (s, u, p, b, m, g = !1) => {
      let E = l.current,
        f = tt(s),
        M = new Set;
      if (E) {
        for (let N of E.values())
          for (let L of N)
            if (!(f && L.fallback)) M.add(L.context)
      }
      let I = [...M, ...i, "Global"],
        C = r.current,
        h = C !== null,
        B = Lft(s, I, n, C);
      switch (B.type) {
        case "chord_started":
          D.current = "legacy", o(B.pending), m();
          return;
        case "chord_cancelled":
          o(null), m();
          return;
        case "unbound":
          if (o(null), h) {
            m();
            return
          }
          break;
        case "match":
          if (o(null), h) {
            U(s, C, B.action, m);
            return
          }
          break;
        case "none":
          break
      }
      if (!E) return;
      if (!g && d(u, p, b, m)) return;
      let k = new Map,
        z = Xe([...E.values()].flatMap((N) => [...N])),
        P = et(s) || f,
        te;
      for (let N of z) {
        if (!N.singleKey || N.fallback && P) continue;
        let L;
        if (N.fallback && !i.has(N.context)) te ??= (() => {
          let Q = Lft(s, [...i, "Global"], n, null);
          return Q.type === "match" ? Q.action : null
        })(), L = te;
        else L = k.get(N.context);
        if (L === void 0) {
          let Q = Lft(s, [...i, N.context, "Global"], n, null);
          L = Q.type === "match" ? Q.action : null, k.set(N.context, L)
        }
        if (L === N.action) {
          let Q = R.current;
          R.current = s;
          let re;
          try {
            re = N.handler()
          } finally {
            R.current = Q
          }
          if (re !== !1) {
            tMn(L), m();
            return
          }
        }
      }
    },
    G = (s, u, p, b, m, g) => {
      let E = H,
        f = (B, k) => {};
      if (E.swallowAll.size > 0) {
        f(null, !0), g();
        return
      }
      if (r.current !== null && D.current === "legacy") {
        f(null, !1), T(u, p, b, m, g);
        return
      }
      let M = $t(s.target),
        I = r.current !== null && D.current === "scopeChain";
      if (M.length === 0 && E.preemptiveScopes.size === 0 && !I) {
        f(null, !1), T(u, p, b, m, g);
        return
      }
      let C = ce(s.target);
      if (E.preemptiveScopes.size > 0 && !I) {
        let B = [...E.preemptiveScopes.keys(), "Global"],
          k = Ado(u, B, n, null);
        if (k.type === "match" && C) {
          if (Te(C, s, k.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            f(k.action, !0), tMn(k.action);
            return
          }
        }
      }
      if (!I && C?.attributes.textEntry === !0 && et(u) && [...u.key].length === 1) {
        f(null, d(p, b, m, g));
        return
      }
      if (I) {
        let B = r.current,
          k = Ado(u, W.current, n, B);
        if (k.type === "chord_started") {
          D.current = "scopeChain", o(k.pending), g(), f(null, !0);
          return
        }
        if (k.type === "match") {
          o(null);
          let z = c.current;
          c.current = null, W.current = [];
          let P = z && C && SK(z, G5n(C)) ? z : C;
          if (P) {
            if (Te(P, s, k.action, !0, "chord")) {
              f(k.action, !0), tMn(k.action);
              return
            }
          }
          let te = U(u, B, k.action, g);
          f(k.action, te);
          return
        }
        c.current = null, W.current = [], f(null, !1), T(u, p, b, m, g);
        return
      }
      let h = Ado(u, M, n, null);
      switch (h.type) {
        case "chord_started":
          W.current = M, c.current = C ?? null, D.current = "scopeChain", o(h.pending), g(), f(null, !0);
          return;
        case "match": {
          if (!C) {
            f(h.action, !1), T(u, p, b, m, g);
            return
          }
          if (d(p, b, m, g)) {
            o(null), f(h.action, !0);
            return
          }
          if (Te(C, s, h.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            o(null), f(h.action, !0), tMn(h.action);
            return
          }
          f(h.action, !1), T(u, p, b, m, g, !0);
          return
        }
        case "unbound":
          if (d(p, b, m, g)) {
            o(null), f(null, !0);
            return
          }
          o(null), f(null, !1);
          return;
        default:
          f(null, !1), T(u, p, b, m, g);
          return
      }
    },
    _ = (s) => {
      let {
        input: u,
        key: p
      } = Z8s(s);
      G(s, s, u, p, s.sequence, () => ot(s))
    },
    K = (s) => {
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
      G(s, u, "", p, "", () => ot(s))
    },
    v = A(null);
  return Zt(() => {
    if (!v.current) return;
    let s = N0(v.current),
      u = () => {
        let p = v.current;
        if (!p || s.activeElement === p) return;
        if (s.activeElement === null) {
          s.focus(p);
          return
        }
        let b = p.parentNode;
        while (b) {
          if (b === s.activeElement) {
            s.focus(p);
            return
          }
          b = b.parentNode
        }
      };
    return u(), s.subscribe(u)
  }, []), e(Sf, {
    ref: v,
    keybindingScope: "Global",
    tabIndex: -1,
    flexDirection: "column",
    flexGrow: 1,
    onKeyDownCapture: _,
    onWheelCapture: K,
    children: F
  })
}

function ot(n) {
  n.preventDefault(), n.stopImmediatePropagation()
}

function Gt(n) {
  return n !== null && "attributes" in n
}

function ce(n) {
  return Gt(n) ? n : void 0
}

function Lt(n, r, o, i) {
  let l = ce(n),
    x = ce(r);
  while (l && l !== x) {
    if (l._eventHandlers?.onWheel && (o === void 0 || i === void 0 || typeof l.attributes.tabIndex === "number" || K7(l, o, i) !== null)) return !0;
    l = l.parentNode
  }
  return !1
}

function $t(n) {
  let r = [],
    o = ce(n);
  while (o) {
    let i = o.attributes.keybindingScope;
    if (typeof i === "string" && q4i(i)) r.push(i);
    o = o.parentNode
  }
  return r
}

function Te(n, r, o, i, l) {
  let x = new Gmn(o, {
    sourceEvent: r,
    isChordCompletion: i,
    origin: l
  });
  return Cne.dispatch(n, x), x.consumed
}
j();
j();
j();
var de = Jt(null);

function J(n) {
  let i = S(3),
    {
      children: r
    } = n,
    o = A(null),
    l;
  if (i[0] === w) l = {
    setHandler: (x) => {
      o.current = x
    },
    tryDelete: (R) => o.current?.(R) ?? !1
  }, i[0] = l;
  else l = i[0];
  let H = l,
    F;
  if (i[1] !== r) F = e(de.Provider, {
    value: H,
    children: r
  }), i[1] = r, i[2] = F;
  else F = i[2];
  return F
}

function Vmn() {
  let n = ve(de);
  if (!n) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)")
  }
  return n
}
j();
class pe {
  queue = [];
  waiters = [];
  changed = De();
  _revision = 0;
  get length() {
    return this.queue.length
  }
  get revision() {
    return this._revision
  }
  send(n) {
    this._revision++;
    let r = this.waiters.findIndex((o) => o.fn(n));
    if (r !== -1) {
      let o = this.waiters.splice(r, 1)[0];
      if (o) {
        o.resolve(n), this.notify();
        return
      }
    }
    this.queue.push(n), this.notify()
  }
  poll(n = () => !0) {
    let r = this.queue.findIndex(n);
    if (r === -1) return;
    return this.queue.splice(r, 1)[0]
  }
  receive(n = () => !0) {
    let r = this.queue.findIndex(n);
    if (r !== -1) {
      let o = this.queue.splice(r, 1)[0];
      if (o) return this.notify(), Promise.resolve(o)
    }
    return new Promise((o) => {
      this.waiters.push({
        fn: n,
        resolve: o
      })
    })
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit()
  }
}
var fe = Jt(void 0);

function me(n) {
  let o = S(3),
    {
      children: r
    } = n,
    i;
  if (o[0] === w) i = new pe, o[0] = i;
  else i = o[0];
  let l = i,
    x;
  if (o[1] !== r) x = e(fe.Provider, {
    value: l,
    children: r
  }), o[1] = r, o[2] = x;
  else x = o[2];
  return x
}

function yHo() {
  let n = ve(fe);
  if (!n) {
    throw Error("useMailbox must be used within a MailboxProvider")
  }
  return n
}
j();

function Xot(n) {
  let r = qo(n);
  O(() => Fi.subscribe((o, i) => {
    let l = Cr();
    r(o, l, i)
  }), [])
}
j();
var ge = Jt(null);

function ahe() {
  let n = ve(ge);
  if (!n) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return n
}

function xo(_e) {
  return _e.expandedView === "tasks" ? {
    ..._e,
    expandedView: "none"
  } : _e
}
var ye = Jt(!1),
  q = null;

function Se(n) {
  let c = S(86),
    {
      children: r,
      store: o,
      initialState: i,
      onChangeAppState: l,
      fleetNudgeStore: x,
      writesExitHandoff: R,
      sessionHooks: H
    } = n,
    F = R === void 0 ? !1 : R;
  if (ve(ye)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider")
  }
  let D;
  if (c[0] !== i || c[1] !== l || c[2] !== o) D = () => o ?? Hs(i ?? FGt(), l), c[0] = i, c[1] = l, c[2] = o, c[3] = D;
  else D = c[3];
  let [d] = y(D), U;
  if (c[4] !== H) U = () => H ?? Jye(), c[4] = H, c[5] = U;
  else U = c[5];
  let [T] = y(U), G = Qi(), _;
  if (c[6] !== G) _ = () => qHo(G), c[6] = G, c[7] = _;
  else _ = c[7];
  let [K] = y(_), [v] = y(zHo), {
    storageV5: s
  } = Fe(), u = tI(), p;
  if (c[8] !== s || c[9] !== d) p = () => new szr(s, globalThis, () => d.setState(xo)), c[8] = s, c[9] = d, c[10] = p;
  else p = c[10];
  let [b] = y(p), m;
  if (c[11] !== x || c[12] !== s) m = () => x ?? new Zot({
    storageV5: s
  }), c[11] = x, c[12] = s, c[13] = m;
  else m = c[13];
  let [g] = y(m), E;
  if (c[14] !== s) E = () => q ? new q.SessionRosterStore({
    storageV5: s
  }) : null, c[14] = s, c[15] = E;
  else E = c[15];
  let [f] = y(E), [M] = y(F), [I] = y(s), C, h;
  if (c[16] !== I || c[17] !== d || c[18] !== M) C = () => {
    let B = M ? () => Kmn(d.getState().tasks, I) : () => GWr(d.getState().tasks);
    let k = vt(B);
    return () => {
      B(), k()
    }
  }, h = [d, M, I], c[16] = I, c[17] = d, c[18] = M, c[19] = C, c[20] = h;
  else C = c[19], h = c[20];
  O(C, h);
  let z;
  if (c[21] !== d) z = () => Gvt.over(d), c[21] = d, c[22] = z;
  else z = c[22];
  let [P] = y(z), te;
  if (c[23] !== d) te = () => oQ.over(d), c[23] = d, c[24] = te;
  else te = c[24];
  let [N] = y(te), L;
  if (c[25] !== P || c[26] !== u?.mcpSessionWiring) L = () => u?.mcpSessionWiring.acquireConnections(P), c[25] = P, c[26] = u?.mcpSessionWiring, c[27] = L;
  else L = c[27];
  let Q;
  if (c[28] !== P || c[29] !== u) Q = [u, P], c[28] = P, c[29] = u, c[30] = Q;
  else Q = c[30];
  O(L, Q);
  let re;
  if (c[31] !== d) re = () => DEt.over(d), c[31] = d, c[32] = re;
  else re = c[32];
  let [be] = y(re), bt, xt;
  if (c[33] !== be || c[34] !== u) bt = () => {
    if (u === void 0) {
      return
    }
    return P2t.of(u).acquire(be)
  }, xt = [u, be], c[33] = be, c[34] = u, c[35] = bt, c[36] = xt;
  else bt = c[35], xt = c[36];
  O(bt, xt);
  let Rt, Ct;
  if (c[37] !== P) Rt = () => lIo(() => P.get().clients), Ct = [P], c[37] = P, c[38] = Rt, c[39] = Ct;
  else Rt = c[38], Ct = c[39];
  O(Rt, Ct);
  let Pt, wt;
  if (c[40] !== P) Pt = () => dIo((Do, jo, To) => P.swapServerTools(Do, jo, To)), wt = [P], c[40] = P, c[41] = Pt, c[42] = wt;
  else Pt = c[41], wt = c[42];
  O(Pt, wt);
  let kt;
  if (c[43] !== d.setState) kt = () => Zmn(d.setState), c[43] = d.setState, c[44] = kt;
  else kt = c[44];
  let Kt;
  if (c[45] !== d) Kt = [d], c[45] = d, c[46] = Kt;
  else Kt = c[46];
  O(kt, Kt);
  let Et;
  if (c[47] !== u || c[48] !== s || c[49] !== d) Et = (Bo, Ur, Io) => {
    if (qmn(u, Bo, d.setState, s, Io), !xn()) Vvt(d.getState().toolPermissionContext, d.setState, d.getState().fastMode)
  }, c[47] = u, c[48] = s, c[49] = d, c[50] = Et;
  else Et = c[50];
  let xe = qo(Et);
  Xot(xe);
  let Mt;
  if (c[51] !== xe) Mt = () => {
    Ymn(() => xe("policySettings"))
  }, c[51] = xe, c[52] = Mt;
  else Mt = c[52];
  let Nt;
  if (c[53] === w) Nt = [], c[53] = Nt;
  else Nt = c[53];
  O(Mt, Nt);
  const Ve = u ?? null;
  let Re;
  if (c[54] !== r || c[55] !== f) Re = q && f ? e(q.SessionRosterStoreContext.Provider, {
    value: f,
    children: r
  }) : r, c[54] = r, c[55] = f, c[56] = Re;
  else Re = c[56];
  let Ce;
  if (c[57] !== Re) Ce = e(VGt, {
    children: e(J, {
      children: Re
    })
  }), c[57] = Re, c[58] = Ce;
  else Ce = c[58];
  let Pe;
  if (c[59] !== g || c[60] !== Ce) Pe = e(k5n.Provider, {
    value: g,
    children: Ce
  }), c[59] = g, c[60] = Ce, c[61] = Pe;
  else Pe = c[61];
  let we;
  if (c[62] !== Pe || c[63] !== b) we = e(izr.Provider, {
    value: b,
    children: Pe
  }), c[62] = Pe, c[63] = b, c[64] = we;
  else we = c[64];
  let ke;
  if (c[65] !== v || c[66] !== we) ke = e(Qvt.Provider, {
    value: v,
    children: we
  }), c[65] = v, c[66] = we, c[67] = ke;
  else ke = c[67];
  let Ke;
  if (c[68] !== K || c[69] !== ke) Ke = e(me, {
    children: e(Ezr, {
      children: e(yK.Provider, {
        value: K,
        children: ke
      })
    })
  }), c[68] = K, c[69] = ke, c[70] = Ke;
  else Ke = c[70];
  let Ee;
  if (c[71] !== T || c[72] !== Ke) Ee = e(ge.Provider, {
    value: T,
    children: Ke
  }), c[71] = T, c[72] = Ke, c[73] = Ee;
  else Ee = c[73];
  let Me;
  if (c[74] !== Ve || c[75] !== Ee) Me = e(Azr.Provider, {
    value: Ve,
    children: Ee
  }), c[74] = Ve, c[75] = Ee, c[76] = Me;
  else Me = c[76];
  let Ne;
  if (c[77] !== N || c[78] !== Me) Ne = e(Pzr.Provider, {
    value: N,
    children: Me
  }), c[77] = N, c[78] = Me, c[79] = Ne;
  else Ne = c[79];
  let Ae;
  if (c[80] !== P || c[81] !== Ne) Ae = e(xzr.Provider, {
    value: P,
    children: Ne
  }), c[80] = P, c[81] = Ne, c[82] = Ae;
  else Ae = c[82];
  let At;
  if (c[83] !== d || c[84] !== Ae) At = e(ye.Provider, {
    value: !0,
    children: e(D0.Provider, {
      value: d,
      children: Ae
    })
  }), c[83] = d, c[84] = Ae, c[85] = At;
  else At = c[85];
  return At
}

function SS(n) {
  let K = S(32),
    {
      session: r,
      host: o,
      project: i,
      storageV5: l,
      messageQueue: x,
      store: R,
      initialState: H,
      onChangeAppState: F,
      fleetNudgeStore: W,
      sessionHooks: c,
      writesExitHandoff: D,
      getFpsMetrics: d,
      stats: U,
      keybindings: T,
      children: G
    } = n,
    _ = T === void 0 ? !0 : T,
    v;
  if (K[0] !== l) v = xFt(l), K[0] = l, K[1] = v;
  else v = K[1];
  let s = v,
    u;
  if (K[2] !== G || K[3] !== _) u = _ ? e(Yot, {
    children: G
  }) : G, K[2] = G, K[3] = _, K[4] = u;
  else u = K[4];
  let p;
  if (K[5] !== u) p = e(Tzr, {
    children: e(VGt, {
      children: e(J, {
        children: u
      })
    })
  }), K[5] = u, K[6] = p;
  else p = K[6];
  let b;
  if (K[7] !== W || K[8] !== H || K[9] !== F || K[10] !== c || K[11] !== R || K[12] !== p || K[13] !== D) b = e(Se, {
    store: R,
    initialState: H,
    onChangeAppState: F,
    fleetNudgeStore: W,
    sessionHooks: c,
    writesExitHandoff: D,
    children: p
  }), K[7] = W, K[8] = H, K[9] = F, K[10] = c, K[11] = R, K[12] = p, K[13] = D, K[14] = b;
  else b = K[14];
  let m = b,
    g;
  if (K[15] !== m || K[16] !== o || K[17] !== i || K[18] !== r) g = r !== void 0 ? e(nzr, {
    session: r,
    children: m
  }) : o !== void 0 ? e(rzr, {
    host: o,
    project: i,
    children: m
  }) : m, K[15] = m, K[16] = o, K[17] = i, K[18] = r, K[19] = g;
  else g = K[19];
  let E;
  if (K[20] !== U || K[21] !== g) E = e(le, {
    store: U,
    children: g
  }), K[20] = U, K[21] = g, K[22] = E;
  else E = K[22];
  let f;
  if (K[23] !== d || K[24] !== E) f = e(se, {
    getFpsMetrics: d,
    children: E
  }), K[23] = d, K[24] = E, K[25] = f;
  else f = K[25];
  let M = f,
    I;
  if (K[26] !== x || K[27] !== M) I = x === void 0 ? M : e(Jvt, {
    queue: x,
    children: M
  }), K[26] = x, K[27] = M, K[28] = I;
  else I = K[28];
  let C = I;
  if (l === void 0) {
    return C
  }
  let h;
  if (K[29] !== C || K[30] !== s) h = e(o2t, {
    ...s,
    children: C
  }), K[29] = C, K[30] = s, K[31] = h;
  else h = K[31];
  return h
}
export {
  jWr,
  WWr,
  Gmn,
  NGt,
  c5n,
  Yot,
  Vmn,
  yHo,
  Xot,
  ahe,
  SS
};
