// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  RXe,
  Lft
} from "B:/~BUN/root/chunk-qk8tvzkn.js";
import {
  Jt,
  ve,
  Zt,
  Z,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";

function Z8s(n) {
  let t = ee[n.name],
    r = {
      upArrow: t === "upArrow",
      downArrow: t === "downArrow",
      leftArrow: t === "leftArrow",
      rightArrow: t === "rightArrow",
      pageDown: t === "pageDown",
      pageUp: t === "pageUp",
      wheelUp: !1,
      wheelDown: !1,
      home: t === "home",
      end: t === "end",
      return: t === "return",
      escape: t === "escape",
      tab: t === "tab",
      backspace: t === "backspace",
      delete: t === "delete",
      ctrl: n.ctrl,
      shift: n.shift,
      super: n.superKey,
      meta: n.meta
    };
  return {
    input: n.name === "enter" ? `
` : [...n.key].length === 1 ? n.key : "",
    key: r
  }
}
var ee = {
    up: "upArrow",
    down: "downArrow",
    left: "leftArrow",
    right: "rightArrow",
    pagedown: "pageDown",
    pageup: "pageUp",
    home: "home",
    end: "end",
    return: "return",
    escape: "escape",
    tab: "tab",
    backspace: "backspace",
    delete: "delete"
  },
  te = [
    ["escape", "escape"],
    ["return", "return"],
    ["tab", "tab"],
    ["backspace", "backspace"],
    ["delete", "delete"],
    ["upArrow", "up"],
    ["downArrow", "down"],
    ["leftArrow", "left"],
    ["rightArrow", "right"],
    ["pageUp", "pageup"],
    ["pageDown", "pagedown"],
    ["wheelUp", "wheelup"],
    ["wheelDown", "wheeldown"],
    ["home", "home"],
    ["end", "end"]
  ];

function E(n, t) {
  return {
    name: te.find(([i]) => t[i])?.[1] ?? (n === `
` ? "enter" : ""),
    key: n,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  }
}
j();

function ye() {}

function ue(we) {
  return we.handler() !== !1
}

function mhn() {
  return {
    decls: new WeakMap,
    scopesChanged: De(),
    handlersChanged: De(),
    preemptiveScopes: new Map,
    swallowAll: new Map,
    keyDispatchTrace: De()
  }
}
var v = Jt(null);

function n2t(n) {
  let o = S(32),
    {
      bindings: t,
      pendingChordRef: r,
      pendingChord: i,
      activeContexts: K,
      registerActiveContext: u,
      unregisterActiveContext: h,
      handlerRegistryRef: g,
      preDispatchRef: C,
      singleKeyEventRef: L,
      keyHandlerRegistry: d,
      children: U
    } = n,
    w;
  if (o[0] !== t || o[1] !== r) w = (he, fe, xe) => Lft(E(he, fe), xe, t, r.current), o[0] = t, o[1] = r, o[2] = w;
  else w = o[2];
  let k;
  if (o[3] !== t) k = (me, be) => RXe(me, be, t), o[3] = t, o[4] = k;
  else k = o[4];
  let A;
  if (o[5] !== g || o[6] !== d) A = (c) => {
    let p = g.current;
    if (!p) {
      return ye
    }
    if (!p.has(c.action)) p.set(c.action, new Set);
    return p.get(c.action).add(c), d.handlersChanged.emit(), () => {
      let O = p.get(c.action);
      if (O) {
        if (O.delete(c), O.size === 0) p.delete(c.action);
        d.handlersChanged.emit()
      }
    }
  }, o[5] = g, o[6] = d, o[7] = A;
  else A = o[7];
  let D, H;
  if (o[8] !== g) D = (Re) => b(g.current, Re).length > 0, H = (Ke) => {
    ;
    try {
      return b(g.current, Ke).some(ue)
    } catch (y) {
      let Ce = y;
      return a(qe(F(Ce), "Key action handler threw")), !1
    }
  }, o[8] = g, o[9] = D, o[10] = H;
  else D = o[9], H = o[10];
  let y;
  if (o[11] !== C) y = (J) => (C.current.add(J), () => C.current.delete(J)), o[11] = C, o[12] = y;
  else y = o[12];
  let P;
  if (o[13] !== L) P = () => L.current, o[13] = L, o[14] = P;
  else P = o[14];
  let Q;
  if (o[15] !== K || o[16] !== t || o[17] !== d || o[18] !== i || o[19] !== u || o[20] !== w || o[21] !== k || o[22] !== A || o[23] !== D || o[24] !== H || o[25] !== y || o[26] !== P || o[27] !== h) Q = {
    resolve: w,
    getDisplayText: k,
    bindings: t,
    pendingChord: i,
    activeContexts: K,
    registerActiveContext: u,
    unregisterActiveContext: h,
    registerHandler: A,
    hasHandler: D,
    runAction: H,
    registerPreDispatch: y,
    singleKeyEvent: P,
    keyHandlerRegistry: d
  }, o[15] = K, o[16] = t, o[17] = d, o[18] = i, o[19] = u, o[20] = w, o[21] = k, o[22] = A, o[23] = D, o[24] = H, o[25] = y, o[26] = P, o[27] = h, o[28] = Q;
  else Q = o[28];
  let V = Q,
    X;
  if (o[29] !== U || o[30] !== V) X = e(v.Provider, {
    value: V,
    children: U
  }), o[29] = U, o[30] = V, o[31] = X;
  else X = o[31];
  return X
}

function b(n, t) {
  return [...n.get(t) ?? []].filter((r) => !r.fallback)
}

function vd() {
  return ve(v)
}

function zj(n, t) {
  let K = S(5),
    r = t === void 0 ? !0 : t,
    i = vd(),
    u, h;
  if (K[0] !== n || K[1] !== r || K[2] !== i) u = () => {
    if (!i || !r) {
      return
    }
    return i.registerActiveContext(n), () => {
      i.unregisterActiveContext(n)
    }
  }, h = [n, i, r], K[0] = n, K[1] = r, K[2] = i, K[3] = u, K[4] = h;
  else u = K[3], h = K[4];
  Zt(u, h)
}
export {
  Z8s,
  mhn,
  n2t,
  vd,
  zj
};
