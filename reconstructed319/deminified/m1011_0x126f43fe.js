// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { RXe, Lft } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { Jt, ve, Zt, Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
function Z8s(n) {
  let t = ee[n.name],
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
  te = [["escape", "escape"], ["return", "return"], ["tab", "tab"], ["backspace", "backspace"], ["delete", "delete"], ["upArrow", "up"], ["downArrow", "down"], ["leftArrow", "left"], ["rightArrow", "right"], ["pageUp", "pageup"], ["pageDown", "pagedown"], ["wheelUp", "wheelup"], ["wheelDown", "wheeldown"], ["home", "home"], ["end", "end"]];
function E(key_2, t) {
  return {
    name: te.find(([i]) => t[i])?.[1] ?? (key_2 === `
` ? "enter" : ""),
    key: key_2,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  };
}
j();
function ye() {}
function ue(we) {
  return we.handler() !== !1;
}
function mhn() {
  return {
    decls: new WeakMap(),
    scopesChanged: De(),
    handlersChanged: De(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: De()
  };
}
var v = Jt(null);
function n2t(n) {
  let o = S(32),
    {
      bindings: bindings,
      pendingChordRef: pendingChordRef,
      pendingChord: pendingChord,
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
  if (o[0] !== bindings || o[1] !== pendingChordRef) resolve = (he, fe, xe) => Lft(E(he, fe), xe, bindings, pendingChordRef.current), o[0] = bindings, o[1] = pendingChordRef, o[2] = resolve;else resolve = o[2];
  let getDisplayText;
  if (o[3] !== bindings) getDisplayText = (me, be) => RXe(me, be, bindings), o[3] = bindings, o[4] = getDisplayText;else getDisplayText = o[4];
  let registerHandler;
  if (o[5] !== handlerRegistryRef || o[6] !== keyHandlerRegistry) registerHandler = c => {
    let current = handlerRegistryRef.current;
    if (!current) {
      return ye;
    }
    if (!current.has(c.action)) current.set(c.action, new Set());
    return current.get(c.action).add(c), keyHandlerRegistry.handlersChanged.emit(), () => {
      let O = current.get(c.action);
      if (O) {
        if (O.delete(c), O.size === 0) current.delete(c.action);
        keyHandlerRegistry.handlersChanged.emit();
      }
    };
  }, o[5] = handlerRegistryRef, o[6] = keyHandlerRegistry, o[7] = registerHandler;else registerHandler = o[7];
  let hasHandler, runAction;
  if (o[8] !== handlerRegistryRef) hasHandler = Re => b(handlerRegistryRef.current, Re).length > 0, runAction = Ke => {
    ;
    try {
      return b(handlerRegistryRef.current, Ke).some(ue);
    } catch (error) {
      let Ce = error;
      return a(qe(F(Ce), "Key action handler threw")), !1;
    }
  }, o[8] = handlerRegistryRef, o[9] = hasHandler, o[10] = runAction;else hasHandler = o[9], runAction = o[10];
  let registerPreDispatch;
  if (o[11] !== preDispatchRef) registerPreDispatch = J => (preDispatchRef.current.add(J), () => preDispatchRef.current.delete(J)), o[11] = preDispatchRef, o[12] = registerPreDispatch;else registerPreDispatch = o[12];
  let singleKeyEvent;
  if (o[13] !== singleKeyEventRef) singleKeyEvent = () => singleKeyEventRef.current, o[13] = singleKeyEventRef, o[14] = singleKeyEvent;else singleKeyEvent = o[14];
  let Q;
  if (o[15] !== activeContexts || o[16] !== bindings || o[17] !== keyHandlerRegistry || o[18] !== pendingChord || o[19] !== registerActiveContext || o[20] !== resolve || o[21] !== getDisplayText || o[22] !== registerHandler || o[23] !== hasHandler || o[24] !== runAction || o[25] !== registerPreDispatch || o[26] !== singleKeyEvent || o[27] !== unregisterActiveContext) Q = {
    resolve: resolve,
    getDisplayText: getDisplayText,
    bindings: bindings,
    pendingChord: pendingChord,
    activeContexts: activeContexts,
    registerActiveContext: registerActiveContext,
    unregisterActiveContext: unregisterActiveContext,
    registerHandler: registerHandler,
    hasHandler: hasHandler,
    runAction: runAction,
    registerPreDispatch: registerPreDispatch,
    singleKeyEvent: singleKeyEvent,
    keyHandlerRegistry: keyHandlerRegistry
  }, o[15] = activeContexts, o[16] = bindings, o[17] = keyHandlerRegistry, o[18] = pendingChord, o[19] = registerActiveContext, o[20] = resolve, o[21] = getDisplayText, o[22] = registerHandler, o[23] = hasHandler, o[24] = runAction, o[25] = registerPreDispatch, o[26] = singleKeyEvent, o[27] = unregisterActiveContext, o[28] = Q;else Q = o[28];
  let value = Q,
    X;
  if (o[29] !== children || o[30] !== value) X = e(v.Provider, {
    value: value,
    children: children
  }), o[29] = children, o[30] = value, o[31] = X;else X = o[31];
  return X;
}
function b(n, t) {
  return [...(n.get(t) ?? [])].filter(item => !item.fallback);
}
function vd() {
  return ve(v);
}
function zj(n, t) {
  let K = S(5),
    r = t === void 0 ? !0 : t,
    i = vd(),
    u,
    h;
  if (K[0] !== n || K[1] !== r || K[2] !== i) u = () => {
    if (!i || !r) {
      return;
    }
    return i.registerActiveContext(n), () => {
      i.unregisterActiveContext(n);
    };
  }, h = [n, i, r], K[0] = n, K[1] = r, K[2] = i, K[3] = u, K[4] = h;else u = K[3], h = K[4];
  Zt(u, h);
}
export { Z8s, mhn, n2t, vd, zj };