// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Vt,
  Pe,
  sn,
  X,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  bLe,
  SLe
} from "B:/~BUN/root/chunk-y355pc11.js";
N();

function N8r(n) {
  let t = z[n.name],
    i = {
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
    key: i
  }
}
var z = {
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
  Y = [
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

function v(n, t) {
  return {
    name: Y.find(([r]) => t[r])?.[1] ?? (n === `
` ? "enter" : ""),
    key: n,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  }
}

function re() {}

function l_t() {
  return {
    decls: new WeakMap,
    scopesChanged: Me(),
    preemptiveScopes: new Map,
    swallowAll: new Map,
    keyDispatchTrace: Me()
  }
}
var u = Vt(null);

function XJe(n) {
  let d = w(24),
    {
      bindings: t,
      pendingChordRef: i,
      pendingChord: r,
      setPendingChord: h,
      activeContexts: p,
      registerActiveContext: c,
      unregisterActiveContext: k,
      handlerRegistryRef: D,
      preDispatchRef: x,
      keyHandlerRegistry: P,
      children: H
    } = n,
    b;
  if (d[0] !== t || d[1] !== i) b = (ie, oe, ae) => SLe(v(ie, oe), ae, t, i.current), d[0] = t, d[1] = i, d[2] = b;
  else b = d[2];
  let m;
  if (d[3] !== t) m = (se, de) => bLe(se, de, t), d[3] = t, d[4] = m;
  else m = d[4];
  let C;
  if (d[5] !== D) C = (a) => {
    let g = D.current;
    if (!g) {
      return re
    }
    if (!g.has(a.action)) g.set(a.action, new Set);
    return g.get(a.action).add(a), () => {
      let E = g.get(a.action);
      if (E) {
        if (E.delete(a), E.size === 0) g.delete(a.action)
      }
    }
  }, d[5] = D, d[6] = C;
  else C = d[6];
  let f;
  if (d[7] !== x) f = (q) => (x.current.add(q), () => x.current.delete(q)), d[7] = x, d[8] = f;
  else f = d[8];
  let G;
  if (d[9] !== p || d[10] !== t || d[11] !== P || d[12] !== r || d[13] !== c || d[14] !== h || d[15] !== b || d[16] !== m || d[17] !== C || d[18] !== f || d[19] !== k) G = {
    resolve: b,
    setPendingChord: h,
    getDisplayText: m,
    bindings: t,
    pendingChord: r,
    activeContexts: p,
    registerActiveContext: c,
    unregisterActiveContext: k,
    registerHandler: C,
    registerPreDispatch: f,
    keyHandlerRegistry: P
  }, d[9] = p, d[10] = t, d[11] = P, d[12] = r, d[13] = c, d[14] = h, d[15] = b, d[16] = m, d[17] = C, d[18] = f, d[19] = k, d[20] = G;
  else G = d[20];
  let M = G,
    W;
  if (d[21] !== H || d[22] !== M) W = e(u.Provider, {
    value: M,
    children: H
  }), d[21] = H, d[22] = M, d[23] = W;
  else W = d[23];
  return W
}

function Ya() {
  return Pe(u)
}

function lO(n, t) {
  let h = w(5),
    i = t === void 0 ? !0 : t,
    r = Ya(),
    p, c;
  if (h[0] !== n || h[1] !== i || h[2] !== r) p = () => {
    if (!r || !i) {
      return
    }
    return r.registerActiveContext(n), () => {
      r.unregisterActiveContext(n)
    }
  }, c = [n, r, i], h[0] = n, h[1] = i, h[2] = r, h[3] = p, h[4] = c;
  else p = h[3], c = h[4];
  sn(p, c)
}
export {
  N8r,
  l_t,
  XJe,
  Ya,
  lO
};
