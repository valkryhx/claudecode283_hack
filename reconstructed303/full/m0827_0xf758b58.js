// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  wjr,
  vjr,
  Bn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  bt,
  mI,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  TP,
  Gnr,
  Vnr,
  qnr
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  fg,
  oUt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  nr
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  dn,
  xa
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  qCe,
  b1,
  rvn,
  CP,
  b8,
  gY
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  jnr,
  Ro
} from "B:/~BUN/root/chunk-exdm7pa7.js";
import {
  Xvt,
  Oe
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  vc
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  Wmt
} from "B:/~BUN/root/chunk-psvhak2h.js";
import {
  y9o,
  J2t,
  Yvt,
  Zl
} from "B:/~BUN/root/chunk-ps74es0g.js";
import {
  lBe,
  jxs,
  yee,
  Rfe,
  xC,
  j0t,
  qxs,
  PU,
  mve,
  cBe,
  Z5e,
  MCr,
  Ytn
} from "B:/~BUN/root/chunk-raq9cfnw.js";
import {
  Snr,
  wnr,
  wR
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  Ca
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  Hie
} from "B:/~BUN/root/chunk-8gzvb73z.js";
import {
  Ent
} from "B:/~BUN/root/chunk-t70eh59h.js";
import {
  bnt
} from "B:/~BUN/root/chunk-gbjd0mrd.js";
import {
  znt,
  okt
} from "B:/~BUN/root/chunk-pe22710m.js";
import {
  f4r,
  Enr
} from "B:/~BUN/root/chunk-cztbaswn.js";
import {
  y4r,
  fY
} from "B:/~BUN/root/chunk-f66jfn8z.js";
import {
  vnr,
  knr
} from "B:/~BUN/root/chunk-nnc7bx19.js";
import {
  UVe,
  Lwn
} from "B:/~BUN/root/chunk-nj2k6zhp.js";
import {
  B2t
} from "B:/~BUN/root/chunk-t0dcjzj9.js";
import {
  L2t,
  N2t,
  H2t
} from "B:/~BUN/root/chunk-ynq7sbnz.js";
import {
  Unr
} from "B:/~BUN/root/chunk-275mme56.js";
import {
  Ivt
} from "B:/~BUN/root/chunk-tq0ftdgn.js";
import {
  D2t,
  dnr
} from "B:/~BUN/root/chunk-wa0v8rz4.js";
import {
  Q,
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  CY
} from "B:/~BUN/root/chunk-8n6xn43n.js";
import {
  qt,
  ae,
  Ee,
  P,
  Mo,
  Jt,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  _s
} from "B:/~BUN/root/chunk-b4xxgr0r.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var le = qt(null),
  Le = 20;

function X(o) {
  let a = w(4),
    {
      children: i
    } = o,
    r;
  if (a[0] === S) r = [], a[0] = r;
  else r = a[0];
  let n = A(r),
    c;
  if (a[1] === S) c = {
    getDenials: () => n.current,
    recordDenial: (h) => {
      n.current = [h, ...n.current.slice(0, Le - 1)]
    },
    removeDenial: (M) => {
      n.current = n.current.filter((j) => j !== M)
    }
  }, a[1] = c;
  else c = a[1];
  let _ = c,
    u;
  if (a[2] !== i) u = e(le.Provider, {
    value: _,
    children: i
  }), a[2] = i, a[3] = u;
  else u = a[3];
  return u
}

function HCe() {
  let o = Ee(le);
  if (!o) {
    throw ReferenceError("useAutoModeDenials cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)")
  }
  return o
}
B();
var ce = qt(void 0);

function ue(o) {
  let r = w(3),
    {
      getFpsMetrics: i,
      children: a
    } = o,
    n;
  if (r[0] !== a || r[1] !== i) n = e(ce.Provider, {
    value: i,
    children: a
  }), r[0] = a, r[1] = i, r[2] = n;
  else n = r[2];
  return n
}

function inr() {
  return Ee(ce)
}
B();

function Te(o, i) {
  let a = i / 100 * (o.length - 1),
    r = Math.floor(a),
    n = Math.ceil(a);
  if (r === n) return o[r];
  return o[r] + (o[n] - o[r]) * (a - r)
}
var Ue = 1024;

function anr() {
  let o = new Map,
    i = new Map,
    a = new Map;
  return {
    increment(r, n = 1) {
      o.set(r, (o.get(r) ?? 0) + n)
    },
    set(r, n) {
      o.set(r, n)
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
      if (c.reservoir.length < Ue) c.reservoir.push(n);
      else {
        let h = Math.floor(Math.random() * c.count);
        if (h < Ue) c.reservoir[h] = n
      }
    },
    add(r, n) {
      let c = a.get(r);
      if (!c) c = new Set, a.set(r, c);
      c.add(n)
    },
    getAll() {
      let r = Object.fromEntries(o);
      for (let [n, c] of i) {
        if (c.count === 0) continue;
        r[`${n}_count`] = c.count, r[`${n}_min`] = c.min, r[`${n}_max`] = c.max, r[`${n}_avg`] = c.sum / c.count;
        let h = [...c.reservoir].sort((M, j) => M - j);
        r[`${n}_p50`] = Te(h, 50), r[`${n}_p95`] = Te(h, 95), r[`${n}_p99`] = Te(h, 99)
      }
      for (let [n, c] of a) r[n] = c.size;
      return r
    }
  }
}
var ze = qt(null);

function pe(o) {
  let r = w(8),
    {
      store: i,
      children: a
    } = o,
    n;
  if (r[0] === S) n = anr(), r[0] = n;
  else n = r[0];
  let h = i ?? n,
    {
      storageV5: M
    } = Oe(),
    j, _;
  if (r[1] !== M || r[2] !== h) j = () => {
    let u = !1;
    let z = W() && M !== void 0 ? mI(async () => {
      let T = h.getAll();
      if (Object.keys(T).length > 0) await fg((p) => ({
        ...p,
        lastSessionMetrics: T
      }), M);
      u = !0
    }) : void 0;
    let G = () => {
      if (u) {
        return
      }
      let V = h.getAll();
      if (Object.keys(V).length > 0) oUt((L) => ({
        ...L,
        lastSessionMetrics: V
      }))
    };
    return process.on("exit", G), () => {
      z?.(), process.off("exit", G)
    }
  }, _ = [h, M], r[1] = M, r[2] = h, r[3] = j, r[4] = _;
  else j = r[3], _ = r[4];
  P(j, _);
  let E;
  if (r[5] !== a || r[6] !== h) E = e(ze.Provider, {
    value: h,
    children: a
  }), r[5] = a, r[6] = h, r[7] = E;
  else E = r[7];
  return E
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
    this.action = o, this.sourceEvent = i?.sourceEvent ?? null, this.isChordCompletion = i?.isChordCompletion ?? !1, this.origin = i?.origin ?? "single"
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation()
  }
  get consumed() {
    return this._isPropagationStopped()
  }
}
var Ze = 3000;

function NVe(o) {
  let r = w(4),
    {
      children: i
    } = o;
  if (Zl()) {
    let n;
    if (r[0] !== i) n = e(Q, {
      children: i
    }), r[0] = i, r[1] = n;
    else n = r[1];
    return n
  }
  let n;
  if (r[2] !== i) n = e(et, {
    children: i
  }), r[2] = i, r[3] = n;
  else n = r[3];
  return n
}

function et({
  children: o
}) {
  let [{
    bindings: i
  }, a] = y(() => {
    let x = j0t(xC);
    return t(`[keybindings] KeybindingSetup initialized with ${x.bindings.length} bindings, ${x.warnings.length} warnings`), x
  }), r = dn(), {
    addNotification: n
  } = Ro(), c = A(null), [h, M] = y(null), j = A(null), _ = A(new Map), u = A(new Set), T = A(new Set), p = A(null), [z] = y(J2t), V = ae((x) => {
    u.current.add(x)
  }, []), L = ae((x) => {
    u.current.delete(x)
  }, []), G = ae(() => {
    j.current?.(), j.current = null
  }, []), E = ae((x) => {
    if (G(), x !== null) j.current = r.setTimeout(() => {
      t("[keybindings] Chord timeout - cancelling"), c.current = null, M(null), n({
        key: "chord-timeout",
        kind: "feedback",
        text: `${Rfe(x,PU())} cancelled \u2014 no next key within ${Ze/1000}s`,
        priority: "immediate",
        timeoutMs: 3000
      })
    }, Ze);
    c.current = x, M(x)
  }, [n, G, r]);
  return P(() => {
    qxs(xC);
    let x = xC.changed.subscribe((s) => {
      a(s), t(`[keybindings] Reloaded: ${s.bindings.length} bindings, ${s.warnings.length} warnings`)
    });
    return () => {
      x(), G()
    }
  }, [G]), e(Yvt, {
    bindings: i,
    pendingChordRef: c,
    pendingChord: h,
    setPendingChord: E,
    activeContexts: u.current,
    registerActiveContext: V,
    unregisterActiveContext: L,
    handlerRegistryRef: _,
    preDispatchRef: T,
    singleKeyEventRef: p,
    keyHandlerRegistry: z,
    children: e(Yt, {
      bindings: i,
      pendingChordRef: c,
      setPendingChord: E,
      activeContexts: u.current,
      handlerRegistryRef: _,
      preDispatchRef: T,
      singleKeyEventRef: p,
      keyHandlerRegistry: z,
      children: o
    })
  })
}

function tt(o) {
  let i = [...o],
    a = new Set(i.filter((r) => !r.fallback).map((r) => r.action));
  return [...i.filter((r) => !r.fallback), ...i.filter((r) => r.fallback && !a.has(r.action))]
}

function ot(o) {
  return !o.ctrl && !o.meta && !o.superKey
}
var Qt = lBe.map((o) => yee(o.key));

function rt(o) {
  let i = mve(o);
  return i !== null && Qt.some((a) => cBe(a, i))
}

function Yt({
  bindings: o,
  pendingChordRef: i,
  setPendingChord: a,
  activeContexts: r,
  handlerRegistryRef: n,
  preDispatchRef: c,
  singleKeyEventRef: h,
  keyHandlerRegistry: M,
  children: j
}) {
  let _ = A([]),
    u = A(null),
    T = A("legacy"),
    p = ae((s, d, f, R) => {
      for (let g of c.current) try {
        if (g.handler(s, d, f) === !0) return R(), !0
      } catch (v) {
        l(v)
      }
      return !1
    }, [c]),
    z = (s, d, f, R) => {
      let g = n.current;
      if (!g) return !1;
      let v = [...g.values()].flatMap((b) => [...b]),
        D = [...new Set(v.filter((b) => !b.fallback).map((b) => b.context)), ...r, "Global"],
        m = Z5e(s, D, o, d),
        N = m.type === "match" && v.some((b) => !b.fallback && b.action === m.action) ? m.action : null,
        O = N === null ? [f] : [N, f],
        C = rt(s);
      for (let b of O) {
        let [I] = tt(g.get(b) ?? []).filter((K) => !(K.fallback && C));
        if (I) return I.handler(), Ytn(b), R(), !0
      }
      return !1
    },
    V = (s, d, f, R, g, v = !1) => {
      let D = n.current,
        m = rt(s),
        N = new Set;
      if (D) {
        for (let H of D.values())
          for (let U of H)
            if (!(m && U.fallback)) N.add(U.context)
      }
      let O = [...N, ...r, "Global"],
        C = i.current,
        b = C !== null,
        I = Z5e(s, O, o, C);
      switch (I.type) {
        case "chord_started":
          T.current = "legacy", a(I.pending), g();
          return;
        case "chord_cancelled":
          a(null), g();
          return;
        case "unbound":
          if (a(null), b) {
            g();
            return
          }
          break;
        case "match":
          if (a(null), b) {
            z(s, C, I.action, g);
            return
          }
          break;
        case "none":
          break
      }
      if (!D) return;
      if (!v && p(d, f, R, g)) return;
      let K = new Map,
        J = tt([...D.values()].flatMap((H) => [...H])),
        k = ot(s) || m,
        re;
      for (let H of J) {
        if (!H.singleKey || H.fallback && k) continue;
        let U;
        if (H.fallback && !r.has(H.context)) re ??= (() => {
          let q = Z5e(s, [...r, "Global"], o, null);
          return q.type === "match" ? q.action : null
        })(), U = re;
        else U = K.get(H.context);
        if (U === void 0) {
          let q = Z5e(s, [...r, H.context, "Global"], o, null);
          U = q.type === "match" ? q.action : null, K.set(H.context, U)
        }
        if (U === H.action) {
          let q = h.current;
          h.current = s;
          let se;
          try {
            se = H.handler()
          } finally {
            h.current = q
          }
          if (se !== !1) {
            Ytn(U), g();
            return
          }
        }
      }
    },
    L = (s, d, f, R, g, v) => {
      let D = M,
        m = (I, K) => {};
      if (D.swallowAll.size > 0) {
        m(null, !0), v();
        return
      }
      if (i.current !== null && T.current === "legacy") {
        m(null, !1), V(d, f, R, g, v);
        return
      }
      let N = eo(s.target),
        O = i.current !== null && T.current === "scopeChain";
      if (N.length === 0 && D.preemptiveScopes.size === 0 && !O) {
        m(null, !1), V(d, f, R, g, v);
        return
      }
      let C = fe(s.target);
      if (D.preemptiveScopes.size > 0 && !O) {
        let I = [...D.preemptiveScopes.keys(), "Global"],
          K = MCr(d, I, o, null);
        if (K.type === "match" && C) {
          if (Be(C, s, K.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            m(K.action, !0), Ytn(K.action);
            return
          }
        }
      }
      if (!O && C?.attributes.textEntry === !0 && ot(d) && [...d.key].length === 1) {
        m(null, p(f, R, g, v));
        return
      }
      if (O) {
        let I = i.current,
          K = MCr(d, _.current, o, I);
        if (K.type === "chord_started") {
          T.current = "scopeChain", a(K.pending), v(), m(null, !0);
          return
        }
        if (K.type === "match") {
          a(null);
          let J = u.current;
          u.current = null, _.current = [];
          let k = J && C && b1(J, rvn(C)) ? J : C;
          if (k) {
            if (Be(k, s, K.action, !0, "chord")) {
              m(K.action, !0), Ytn(K.action);
              return
            }
          }
          let re = z(d, I, K.action, v);
          m(K.action, re);
          return
        }
        u.current = null, _.current = [], m(null, !1), V(d, f, R, g, v);
        return
      }
      let b = MCr(d, N, o, null);
      switch (b.type) {
        case "chord_started":
          _.current = N, u.current = C ?? null, T.current = "scopeChain", a(b.pending), v(), m(null, !0);
          return;
        case "match": {
          if (!C) {
            m(b.action, !1), V(d, f, R, g, v);
            return
          }
          if (p(f, R, g, v)) {
            a(null), m(b.action, !0);
            return
          }
          if (Be(C, s, b.action, !1, s.type === "wheel" ? "wheel" : "single")) {
            a(null), m(b.action, !0), Ytn(b.action);
            return
          }
          m(b.action, !1), V(d, f, R, g, v, !0);
          return
        }
        case "unbound":
          if (p(f, R, g, v)) {
            a(null), m(null, !0);
            return
          }
          a(null), m(null, !1);
          return;
        default:
          m(null, !1), V(d, f, R, g, v);
          return
      }
    },
    G = (s) => {
      let {
        input: d,
        key: f
      } = y9o(s);
      L(s, s, d, f, s.sequence, () => nt(s))
    },
    E = (s) => {
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
      L(s, d, "", f, "", () => nt(s))
    },
    x = A(null);
  return Jt(() => {
    if (!x.current) return;
    let s = CP(x.current),
      d = () => {
        let f = x.current;
        if (!f || s.activeElement === f) return;
        if (s.activeElement === null) {
          s.focus(f);
          return
        }
        let R = f.parentNode;
        while (R) {
          if (R === s.activeElement) {
            s.focus(f);
            return
          }
          R = R.parentNode
        }
      };
    return d(), s.subscribe(d)
  }, []), e(vc, {
    ref: x,
    keybindingScope: "Global",
    tabIndex: -1,
    flexDirection: "column",
    flexGrow: 1,
    onKeyDownCapture: G,
    onWheelCapture: E,
    children: j
  })
}

function nt(o) {
  o.preventDefault(), o.stopImmediatePropagation()
}

function Zt(o) {
  return o !== null && "attributes" in o
}

function fe(o) {
  return Zt(o) ? o : void 0
}

function Xt(o, i, a, r) {
  let n = fe(o),
    c = fe(i);
  while (n && n !== c) {
    if (n._eventHandlers?.onWheel && (a === void 0 || r === void 0 || typeof n.attributes.tabIndex === "number" || gY(n, a, r) !== null)) return !0;
    n = n.parentNode
  }
  return !1
}

function eo(o) {
  let i = [],
    a = fe(o);
  while (a) {
    let r = a.attributes.keybindingScope;
    if (typeof r === "string" && jxs(r)) i.push(r);
    a = a.parentNode
  }
  return i
}

function Be(o, i, a, r, n) {
  let c = new I2t(a, {
    sourceEvent: i,
    isChordCompletion: r,
    origin: n
  });
  return b8.dispatch(o, c), c.consumed
}
B();
B();
B();
var me = qt(null);

function ee(o) {
  let r = w(3),
    {
      children: i
    } = o,
    a = A(null),
    n;
  if (r[0] === S) n = {
    setHandler: (c) => {
      a.current = c
    },
    tryDelete: (h) => a.current?.(h) ?? !1
  }, r[0] = n;
  else n = r[0];
  let M = n,
    j;
  if (r[1] !== i) j = e(me.Provider, {
    value: M,
    children: i
  }), r[1] = i, r[2] = j;
  else j = r[2];
  return j
}

function M2t() {
  let o = Ee(me);
  if (!o) {
    throw ReferenceError("useInputSelectionBridge cannot be called outside of an <InputSelectionBridgeProvider /> (mounted by <AppStateProvider />)")
  }
  return o
}
B();
class ge {
  queue = [];
  waiters = [];
  changed = Me();
  _revision = 0;
  get length() {
    return this.queue.length
  }
  get revision() {
    return this._revision
  }
  send(o) {
    this._revision++;
    let i = this.waiters.findIndex((a) => a.fn(o));
    if (i !== -1) {
      let a = this.waiters.splice(i, 1)[0];
      if (a) {
        a.resolve(o), this.notify();
        return
      }
    }
    this.queue.push(o), this.notify()
  }
  poll(o = () => !0) {
    let i = this.queue.findIndex(o);
    if (i === -1) return;
    return this.queue.splice(i, 1)[0]
  }
  receive(o = () => !0) {
    let i = this.queue.findIndex(o);
    if (i !== -1) {
      let a = this.queue.splice(i, 1)[0];
      if (a) return this.notify(), Promise.resolve(a)
    }
    return new Promise((a) => {
      this.waiters.push({
        fn: o,
        resolve: a
      })
    })
  }
  subscribe = this.changed.subscribe;
  notify() {
    this.changed.emit()
  }
}
var he = qt(void 0);

function ye(o) {
  let a = w(3),
    {
      children: i
    } = o,
    r;
  if (a[0] === S) r = new ge, a[0] = r;
  else r = a[0];
  let n = r,
    c;
  if (a[1] !== i) c = e(he.Provider, {
    value: n,
    children: i
  }), a[1] = i, a[2] = c;
  else c = a[2];
  return c
}

function $Kr() {
  let o = Ee(he);
  if (!o) {
    throw Error("useMailbox must be used within a MailboxProvider")
  }
  return o
}
B();

function FVe(o) {
  let i = Mo(o);
  P(() => Ca.subscribe((a, r) => {
    let n = nr();
    i(a, n, r)
  }), [])
}
B();
var Se = qt(null);

function Gre() {
  let o = Ee(Se);
  if (!o) throw ReferenceError("useSessionHooksRegistry cannot be called outside of an <AppStateProvider />");
  return o
}

function Ao(Ge) {
  return Ge.expandedView === "tasks" ? {
    ...Ge,
    expandedView: "none"
  } : Ge
}
var ve = qt(!1),
  Y = null;

function be(o) {
  let u = w(86),
    {
      children: i,
      store: a,
      initialState: r,
      onChangeAppState: n,
      fleetNudgeStore: c,
      writesExitHandoff: h,
      sessionHooks: M
    } = o,
    j = h === void 0 ? !1 : h;
  if (Ee(ve)) {
    throw Error("AppStateProvider can not be nested within another AppStateProvider")
  }
  let T;
  if (u[0] !== r || u[1] !== n || u[2] !== a) T = () => a ?? _s(r ?? Ivt(), n), u[0] = r, u[1] = n, u[2] = a, u[3] = T;
  else T = u[3];
  let [p] = y(T), z;
  if (u[4] !== M) z = () => M ?? Hie(), u[4] = M, u[5] = z;
  else z = u[5];
  let [V] = y(z), L = xa(), G;
  if (u[6] !== L) G = () => y4r(L), u[6] = L, u[7] = G;
  else G = u[7];
  let [E] = y(G), [x] = y(f4r), {
    storageV5: s
  } = Oe(), d = wR(), f;
  if (u[8] !== s || u[9] !== p) f = () => new vnr(s, globalThis, () => p.setState(Ao)), u[8] = s, u[9] = p, u[10] = f;
  else f = u[10];
  let [R] = y(f), g;
  if (u[11] !== c || u[12] !== s) g = () => c ?? new UVe({
    storageV5: s
  }), u[11] = c, u[12] = s, u[13] = g;
  else g = u[13];
  let [v] = y(g), D;
  if (u[14] !== s) D = () => Y ? new Y.SessionRosterStore({
    storageV5: s
  }) : null, u[14] = s, u[15] = D;
  else D = u[15];
  let [m] = y(D), [N] = y(j), [O] = y(s), C, b;
  if (u[16] !== O || u[17] !== p || u[18] !== N) C = () => {
    let I = N ? () => D2t(p.getState().tasks, O) : () => dnr(p.getState().tasks);
    let K = bt(I);
    return () => {
      I(), K()
    }
  }, b = [p, N, O], u[16] = O, u[17] = p, u[18] = N, u[19] = C, u[20] = b;
  else C = u[19], b = u[20];
  P(C, b);
  let J;
  if (u[21] !== p) J = () => bnt.over(p), u[21] = p, u[22] = J;
  else J = u[22];
  let [k] = y(J), re;
  if (u[23] !== p) re = () => CY.over(p), u[23] = p, u[24] = re;
  else re = u[24];
  let [H] = y(re), U;
  if (u[25] !== k || u[26] !== d?.mcpSessionWiring) U = () => d?.mcpSessionWiring.acquireConnections(k), u[25] = k, u[26] = d?.mcpSessionWiring, u[27] = U;
  else U = u[27];
  let q;
  if (u[28] !== k || u[29] !== d) q = [d, k], u[28] = k, u[29] = d, u[30] = q;
  else q = u[30];
  P(U, q);
  let se;
  if (u[31] !== p) se = () => znt.over(p), u[31] = p, u[32] = se;
  else se = u[32];
  let [Re] = y(se), xt, Pt;
  if (u[33] !== Re || u[34] !== d) xt = () => {
    if (d === void 0) {
      return
    }
    return okt.of(d).acquire(Re)
  }, Pt = [d, Re], u[33] = Re, u[34] = d, u[35] = xt, u[36] = Pt;
  else xt = u[35], Pt = u[36];
  P(xt, Pt);
  let Ct, wt;
  if (u[37] !== k) Ct = () => wjr(() => k.get().clients), wt = [k], u[37] = k, u[38] = Ct, u[39] = wt;
  else Ct = u[38], wt = u[39];
  P(Ct, wt);
  let kt, Kt;
  if (u[40] !== k) kt = () => vjr((Wo, Go, Lo) => k.swapServerTools(Wo, Go, Lo)), Kt = [k], u[40] = k, u[41] = kt, u[42] = Kt;
  else kt = u[41], Kt = u[42];
  P(kt, Kt);
  let Mt;
  if (u[43] !== p.setState) Mt = () => B2t(p.setState), u[43] = p.setState, u[44] = Mt;
  else Mt = u[44];
  let Et;
  if (u[45] !== p) Et = [p], u[45] = p, u[46] = Et;
  else Et = u[46];
  P(Mt, Et);
  let At;
  if (u[47] !== d || u[48] !== s || u[49] !== p) At = ($o, ei, Uo) => {
    if (L2t(d, $o, p.setState, s, Uo), !Bn()) H2t(p.getState().toolPermissionContext, p.setState, p.getState().fastMode)
  }, u[47] = d, u[48] = s, u[49] = p, u[50] = At;
  else At = u[50];
  let xe = Mo(At);
  FVe(xe);
  let Dt;
  if (u[51] !== xe) Dt = () => {
    N2t(() => xe("policySettings"))
  }, u[51] = xe, u[52] = Dt;
  else Dt = u[52];
  let Nt;
  if (u[53] === S) Nt = [], u[53] = Nt;
  else Nt = u[53];
  P(Dt, Nt);
  const We = d ?? null;
  let Pe;
  if (u[54] !== i || u[55] !== m) Pe = Y && m ? e(Y.SessionRosterStoreContext.Provider, {
    value: m,
    children: i
  }) : i, u[54] = i, u[55] = m, u[56] = Pe;
  else Pe = u[56];
  let Ce;
  if (u[57] !== Pe) Ce = e(X, {
    children: e(ee, {
      children: Pe
    })
  }), u[57] = Pe, u[58] = Ce;
  else Ce = u[58];
  let we;
  if (u[59] !== v || u[60] !== Ce) we = e(Lwn.Provider, {
    value: v,
    children: Ce
  }), u[59] = v, u[60] = Ce, u[61] = we;
  else we = u[61];
  let ke;
  if (u[62] !== we || u[63] !== R) ke = e(knr.Provider, {
    value: R,
    children: we
  }), u[62] = we, u[63] = R, u[64] = ke;
  else ke = u[64];
  let Ke;
  if (u[65] !== x || u[66] !== ke) Ke = e(Enr.Provider, {
    value: x,
    children: ke
  }), u[65] = x, u[66] = ke, u[67] = Ke;
  else Ke = u[67];
  let Ae;
  if (u[68] !== E || u[69] !== Ke) Ae = e(ye, {
    children: e(Unr, {
      children: e(fY.Provider, {
        value: E,
        children: Ke
      })
    })
  }), u[68] = E, u[69] = Ke, u[70] = Ae;
  else Ae = u[70];
  let De;
  if (u[71] !== V || u[72] !== Ae) De = e(Se.Provider, {
    value: V,
    children: Ae
  }), u[71] = V, u[72] = Ae, u[73] = De;
  else De = u[73];
  let Ne;
  if (u[74] !== We || u[75] !== De) Ne = e(Gnr.Provider, {
    value: We,
    children: De
  }), u[74] = We, u[75] = De, u[76] = Ne;
  else Ne = u[76];
  let He;
  if (u[77] !== H || u[78] !== Ne) He = e(qnr.Provider, {
    value: H,
    children: Ne
  }), u[77] = H, u[78] = Ne, u[79] = He;
  else He = u[79];
  let je;
  if (u[80] !== k || u[81] !== He) je = e(Vnr.Provider, {
    value: k,
    children: He
  }), u[80] = k, u[81] = He, u[82] = je;
  else je = u[82];
  let Ht;
  if (u[83] !== p || u[84] !== je) Ht = e(ve.Provider, {
    value: !0,
    children: e(TP.Provider, {
      value: p,
      children: je
    })
  }), u[83] = p, u[84] = je, u[85] = Ht;
  else Ht = u[85];
  return Ht
}

function a_(o) {
  let E = w(32),
    {
      session: i,
      host: a,
      project: r,
      storageV5: n,
      messageQueue: c,
      store: h,
      initialState: M,
      onChangeAppState: j,
      fleetNudgeStore: _,
      sessionHooks: u,
      writesExitHandoff: T,
      getFpsMetrics: p,
      stats: z,
      keybindings: V,
      children: L
    } = o,
    G = V === void 0 ? !0 : V,
    x;
  if (E[0] !== n) x = Wmt(n), E[0] = n, E[1] = x;
  else x = E[1];
  let s = x,
    d;
  if (E[2] !== L || E[3] !== G) d = G ? e(NVe, {
    children: L
  }) : L, E[2] = L, E[3] = G, E[4] = d;
  else d = E[4];
  let f;
  if (E[5] !== d) f = e(jnr, {
    children: e(X, {
      children: e(ee, {
        children: d
      })
    })
  }), E[5] = d, E[6] = f;
  else f = E[6];
  let R;
  if (E[7] !== _ || E[8] !== M || E[9] !== j || E[10] !== u || E[11] !== h || E[12] !== f || E[13] !== T) R = e(be, {
    store: h,
    initialState: M,
    onChangeAppState: j,
    fleetNudgeStore: _,
    sessionHooks: u,
    writesExitHandoff: T,
    children: f
  }), E[7] = _, E[8] = M, E[9] = j, E[10] = u, E[11] = h, E[12] = f, E[13] = T, E[14] = R;
  else R = E[14];
  let g = R,
    v;
  if (E[15] !== g || E[16] !== a || E[17] !== r || E[18] !== i) v = i !== void 0 ? e(Snr, {
    session: i,
    children: g
  }) : a !== void 0 ? e(wnr, {
    host: a,
    project: r,
    children: g
  }) : g, E[15] = g, E[16] = a, E[17] = r, E[18] = i, E[19] = v;
  else v = E[19];
  let D;
  if (E[20] !== z || E[21] !== v) D = e(pe, {
    store: z,
    children: v
  }), E[20] = z, E[21] = v, E[22] = D;
  else D = E[22];
  let m;
  if (E[23] !== p || E[24] !== D) m = e(ue, {
    getFpsMetrics: p,
    children: D
  }), E[23] = p, E[24] = D, E[25] = m;
  else m = E[25];
  let N = m,
    O;
  if (E[26] !== c || E[27] !== N) O = c === void 0 ? N : e(Ent, {
    queue: c,
    children: N
  }), E[26] = c, E[27] = N, E[28] = O;
  else O = E[28];
  let C = O;
  if (n === void 0) {
    return C
  }
  let b;
  if (E[29] !== C || E[30] !== s) b = e(Xvt, {
    ...s,
    children: C
  }), E[29] = C, E[30] = s, E[31] = b;
  else b = E[31];
  return b
}
export {
  HCe,
  inr,
  anr,
  I2t,
  NVe,
  M2t,
  $Kr,
  FVe,
  Gre,
  a_
};
