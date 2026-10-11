// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Zbe, gU, VQ } from "B:/~BUN/root/chunk-4dw8761b.js";
import { Xg } from "B:/~BUN/root/chunk-cev8zjcf.js";
import { Vt, Pe, R, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var u = Vt({
  isTerminalFocused: !0,
  terminalFocusState: "unknown"
});
u.displayName = "TerminalFocusContext";
function rtr(c) {
  let l = w(6),
    {
      children: children
    } = c,
    isTerminalFocused = At(VQ, Zbe),
    terminalFocusState = At(VQ, gU),
    i;
  if (l[0] !== isTerminalFocused || l[1] !== terminalFocusState) i = {
    isTerminalFocused: isTerminalFocused,
    terminalFocusState: terminalFocusState
  }, l[0] = isTerminalFocused, l[1] = terminalFocusState, l[2] = i;else i = l[2];
  let value = i,
    a;
  if (l[3] !== children || l[4] !== value) a = e(u.Provider, {
    value: value,
    children: children
  }), l[3] = children, l[4] = value, l[5] = a;else a = l[5];
  return a;
}
var d = u;
function Dl() {
  let {
    isTerminalFocused: isTerminalFocused_2
  } = Pe(d);
  return isTerminalFocused_2;
}
function mIe() {
  let {
    terminalFocusState: terminalFocusState_2
  } = Pe(d);
  return terminalFocusState_2;
}
N();
function I() {
  return v(Xg);
}
var yP = (c, r) => {
    let t = setTimeout(c, r);
    return () => clearTimeout(t);
  },
  gIe = () => () => {},
  Qvn = () => null;
function v(c) {
  let r = new Map(),
    t = null,
    n = c,
    l = performance.now(),
    i = 0;
  function s() {
    i = performance.now() - l;
    for (let o of r.keys()) o();
  }
  function a() {
    if ([...r.values()].some(Boolean)) {
      if (t !== null) clearInterval(t);else i = performance.now() - l;
      t = setInterval(s, n);
    } else if (t !== null) clearInterval(t), t = null;
  }
  function f(o, m) {
    return r.set(o, m), a(), () => {
      r.delete(o), a();
    };
  }
  return {
    subscribeKeepAlive(o) {
      return f(o, !0);
    },
    subscribeFollower(o) {
      return f(o, !1);
    },
    now() {
      if (t !== null) return i;
      return performance.now() - l;
    },
    setTickInterval(o) {
      if (o === n) return;
      n = o, a();
    },
    setTimeout(o, m) {
      let b = setTimeout(o, m);
      return () => clearTimeout(b);
    }
  };
}
var iS = Vt(null),
  T = Xg * 2;
function otr(c) {
  let l = w(7),
    {
      children: children_2
    } = c,
    [value_2] = g(I),
    n = Dl(),
    i,
    s;
  if (l[0] !== value_2 || l[1] !== n) i = () => {
    value_2.setTickInterval(n ? Xg : T);
  }, s = [value_2, n], l[0] = value_2, l[1] = n, l[2] = i, l[3] = s;else i = l[2], s = l[3];
  R(i, s);
  let a;
  if (l[4] !== children_2 || l[5] !== value_2) a = e(iS.Provider, {
    value: value_2,
    children: children_2
  }), l[4] = children_2, l[5] = value_2, l[6] = a;else a = l[6];
  return a;
}
export { rtr, Dl, mIe, yP, gIe, Qvn, iS, otr };