// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, sn, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { bLe, SLe } from "B:/~BUN/root/chunk-y355pc11.js";
N();
function N8r(n) {
  let t = z[n.name],
    key = {
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
    key: key
  };
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
  Y = [["escape", "escape"], ["return", "return"], ["tab", "tab"], ["backspace", "backspace"], ["delete", "delete"], ["upArrow", "up"], ["downArrow", "down"], ["leftArrow", "left"], ["rightArrow", "right"], ["pageUp", "pageup"], ["pageDown", "pagedown"], ["wheelUp", "wheelup"], ["wheelDown", "wheeldown"], ["home", "home"], ["end", "end"]];
function v(key_2, t) {
  return {
    name: Y.find(([r]) => t[r])?.[1] ?? (key_2 === `
` ? "enter" : ""),
    key: key_2,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  };
}
function re() {}
function l_t() {
  return {
    decls: new WeakMap(),
    scopesChanged: Me(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: Me()
  };
}
var u = Vt(null);
function XJe(n) {
  let d = w(24),
    {
      bindings: bindings,
      pendingChordRef: pendingChordRef,
      pendingChord: pendingChord,
      setPendingChord: setPendingChord,
      activeContexts: activeContexts,
      registerActiveContext: registerActiveContext,
      unregisterActiveContext: unregisterActiveContext,
      handlerRegistryRef: handlerRegistryRef,
      preDispatchRef: preDispatchRef,
      keyHandlerRegistry: keyHandlerRegistry,
      children: children
    } = n,
    resolve;
  if (d[0] !== bindings || d[1] !== pendingChordRef) resolve = (ie, oe, ae) => SLe(v(ie, oe), ae, bindings, pendingChordRef.current), d[0] = bindings, d[1] = pendingChordRef, d[2] = resolve;else resolve = d[2];
  let getDisplayText;
  if (d[3] !== bindings) getDisplayText = (se, de) => bLe(se, de, bindings), d[3] = bindings, d[4] = getDisplayText;else getDisplayText = d[4];
  let registerHandler;
  if (d[5] !== handlerRegistryRef) registerHandler = a => {
    let current = handlerRegistryRef.current;
    if (!current) {
      return re;
    }
    if (!current.has(a.action)) current.set(a.action, new Set());
    return current.get(a.action).add(a), () => {
      let E = current.get(a.action);
      if (E) {
        if (E.delete(a), E.size === 0) current.delete(a.action);
      }
    };
  }, d[5] = handlerRegistryRef, d[6] = registerHandler;else registerHandler = d[6];
  let registerPreDispatch;
  if (d[7] !== preDispatchRef) registerPreDispatch = q => (preDispatchRef.current.add(q), () => preDispatchRef.current.delete(q)), d[7] = preDispatchRef, d[8] = registerPreDispatch;else registerPreDispatch = d[8];
  let G;
  if (d[9] !== activeContexts || d[10] !== bindings || d[11] !== keyHandlerRegistry || d[12] !== pendingChord || d[13] !== registerActiveContext || d[14] !== setPendingChord || d[15] !== resolve || d[16] !== getDisplayText || d[17] !== registerHandler || d[18] !== registerPreDispatch || d[19] !== unregisterActiveContext) G = {
    resolve: resolve,
    setPendingChord: setPendingChord,
    getDisplayText: getDisplayText,
    bindings: bindings,
    pendingChord: pendingChord,
    activeContexts: activeContexts,
    registerActiveContext: registerActiveContext,
    unregisterActiveContext: unregisterActiveContext,
    registerHandler: registerHandler,
    registerPreDispatch: registerPreDispatch,
    keyHandlerRegistry: keyHandlerRegistry
  }, d[9] = activeContexts, d[10] = bindings, d[11] = keyHandlerRegistry, d[12] = pendingChord, d[13] = registerActiveContext, d[14] = setPendingChord, d[15] = resolve, d[16] = getDisplayText, d[17] = registerHandler, d[18] = registerPreDispatch, d[19] = unregisterActiveContext, d[20] = G;else G = d[20];
  let value = G,
    W;
  if (d[21] !== children || d[22] !== value) W = e(u.Provider, {
    value: value,
    children: children
  }), d[21] = children, d[22] = value, d[23] = W;else W = d[23];
  return W;
}
function Ya() {
  return Pe(u);
}
function lO(n, t) {
  let h = w(5),
    i = t === void 0 ? !0 : t,
    r = Ya(),
    p,
    c;
  if (h[0] !== n || h[1] !== i || h[2] !== r) p = () => {
    if (!r || !i) {
      return;
    }
    return r.registerActiveContext(n), () => {
      r.unregisterActiveContext(n);
    };
  }, c = [n, r, i], h[0] = n, h[1] = i, h[2] = r, h[3] = p, h[4] = c;else p = h[3], c = h[4];
  sn(p, c);
}
export { N8r, l_t, XJe, Ya, lO };