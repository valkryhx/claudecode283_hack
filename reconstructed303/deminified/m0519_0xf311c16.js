// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { HLe, o7, JCe } from "B:/~BUN/root/chunk-g8583f1n.js";
import { Ig } from "B:/~BUN/root/chunk-25gtd35b.js";
import { qt, Ee, P, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
B();
var u = qt({
  isTerminalFocused: !0,
  terminalFocusState: "unknown"
});
u.displayName = "TerminalFocusContext";
function q4r(c) {
  let l = w(6),
    {
      children: children
    } = c,
    isTerminalFocused = Dt(JCe, HLe),
    terminalFocusState = Dt(JCe, o7),
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
function oc() {
  let {
    isTerminalFocused: isTerminalFocused_2
  } = Ee(d);
  return isTerminalFocused_2;
}
function gce() {
  let {
    terminalFocusState: terminalFocusState_2
  } = Ee(d);
  return terminalFocusState_2;
}
function R() {
  return v(Ig);
}
var MI = (c, r) => {
    let t = setTimeout(c, r);
    return () => clearTimeout(t);
  },
  KVe = () => () => {},
  urr = () => null;
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
var Tk = qt(null),
  T = Ig * 2;
function K4r(c) {
  let l = w(7),
    {
      children: children_2
    } = c,
    [value_2] = y(R),
    n = oc(),
    i,
    s;
  if (l[0] !== value_2 || l[1] !== n) i = () => {
    value_2.setTickInterval(n ? Ig : T);
  }, s = [value_2, n], l[0] = value_2, l[1] = n, l[2] = i, l[3] = s;else i = l[2], s = l[3];
  P(i, s);
  let a;
  if (l[4] !== children_2 || l[5] !== value_2) a = e(Tk.Provider, {
    value: value_2,
    children: children_2
  }), l[4] = children_2, l[5] = value_2, l[6] = a;else a = l[6];
  return a;
}
export { q4r, oc, gce, MI, KVe, urr, Tk, K4r };