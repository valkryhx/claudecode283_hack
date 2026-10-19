// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, Jt, Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { Q5e, Z5e } from "B:/~BUN/root/chunk-raq9cfnw.js";
function y9o(n) {
  let t = J[n.name],
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
var J = {
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
  Q = [["escape", "escape"], ["return", "return"], ["tab", "tab"], ["backspace", "backspace"], ["delete", "delete"], ["upArrow", "up"], ["downArrow", "down"], ["leftArrow", "left"], ["rightArrow", "right"], ["pageUp", "pageup"], ["pageDown", "pagedown"], ["wheelUp", "wheelup"], ["wheelDown", "wheeldown"], ["home", "home"], ["end", "end"]];
function C(key_2, t) {
  return {
    name: Q.find(([r]) => t[r])?.[1] ?? (key_2 === `
` ? "enter" : ""),
    key: key_2,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  };
}
B();
function ae() {}
function J2t() {
  return {
    decls: new WeakMap(),
    scopesChanged: Me(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: Me()
  };
}
var u = qt(null);
function Yvt(n) {
  let a = w(27),
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
      singleKeyEventRef: singleKeyEventRef,
      keyHandlerRegistry: keyHandlerRegistry,
      children: children
    } = n,
    resolve;
  if (a[0] !== bindings || a[1] !== pendingChordRef) resolve = (se, de, ge) => Z5e(C(se, de), ge, bindings, pendingChordRef.current), a[0] = bindings, a[1] = pendingChordRef, a[2] = resolve;else resolve = a[2];
  let getDisplayText;
  if (a[3] !== bindings) getDisplayText = (ce, pe) => Q5e(ce, pe, bindings), a[3] = bindings, a[4] = getDisplayText;else getDisplayText = a[4];
  let registerHandler;
  if (a[5] !== handlerRegistryRef) registerHandler = s => {
    let current = handlerRegistryRef.current;
    if (!current) {
      return ae;
    }
    if (!current.has(s.action)) current.set(s.action, new Set());
    return current.get(s.action).add(s), () => {
      let M = current.get(s.action);
      if (M) {
        if (M.delete(s), M.size === 0) current.delete(s.action);
      }
    };
  }, a[5] = handlerRegistryRef, a[6] = registerHandler;else registerHandler = a[6];
  let registerPreDispatch;
  if (a[7] !== preDispatchRef) registerPreDispatch = z => (preDispatchRef.current.add(z), () => preDispatchRef.current.delete(z)), a[7] = preDispatchRef, a[8] = registerPreDispatch;else registerPreDispatch = a[8];
  let singleKeyEvent;
  if (a[9] !== singleKeyEventRef) singleKeyEvent = () => singleKeyEventRef.current, a[9] = singleKeyEventRef, a[10] = singleKeyEvent;else singleKeyEvent = a[10];
  let Y;
  if (a[11] !== activeContexts || a[12] !== bindings || a[13] !== keyHandlerRegistry || a[14] !== pendingChord || a[15] !== registerActiveContext || a[16] !== setPendingChord || a[17] !== resolve || a[18] !== getDisplayText || a[19] !== registerHandler || a[20] !== registerPreDispatch || a[21] !== singleKeyEvent || a[22] !== unregisterActiveContext) Y = {
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
    singleKeyEvent: singleKeyEvent,
    keyHandlerRegistry: keyHandlerRegistry
  }, a[11] = activeContexts, a[12] = bindings, a[13] = keyHandlerRegistry, a[14] = pendingChord, a[15] = registerActiveContext, a[16] = setPendingChord, a[17] = resolve, a[18] = getDisplayText, a[19] = registerHandler, a[20] = registerPreDispatch, a[21] = singleKeyEvent, a[22] = unregisterActiveContext, a[23] = Y;else Y = a[23];
  let value = Y,
    I;
  if (a[24] !== children || a[25] !== value) I = e(u.Provider, {
    value: value,
    children: children
  }), a[24] = children, a[25] = value, a[26] = I;else I = a[26];
  return I;
}
function Zl() {
  return Ee(u);
}
function DF(n, t) {
  let h = w(5),
    i = t === void 0 ? !0 : t,
    r = Zl(),
    c,
    p;
  if (h[0] !== n || h[1] !== i || h[2] !== r) c = () => {
    if (!r || !i) {
      return;
    }
    return r.registerActiveContext(n), () => {
      r.unregisterActiveContext(n);
    };
  }, p = [n, r, i], h[0] = n, h[1] = i, h[2] = r, h[3] = c, h[4] = p;else c = h[3], p = h[4];
  Jt(c, p);
}
export { y9o, J2t, Yvt, Zl, DF };