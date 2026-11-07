// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Lg
} from "B:/~BUN/root/chunk-e7wx2kwq.js";
import {
  zYe,
  _le,
  GUe
} from "B:/~BUN/root/chunk-4z0wj4qn.js";
import {
  Jt,
  ve,
  O,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
j();
var u = Jt({
  isTerminalFocused: !0,
  terminalFocusState: "unknown"
});
u.displayName = "TerminalFocusContext";

function T$o(c) {
  let l = S(6),
    {
      children: r
    } = c,
    t = At(GUe, zYe),
    n = At(GUe, _le),
    i;
  if (l[0] !== t || l[1] !== n) i = {
    isTerminalFocused: t,
    terminalFocusState: n
  }, l[0] = t, l[1] = n, l[2] = i;
  else i = l[2];
  let s = i,
    a;
  if (l[3] !== r || l[4] !== s) a = e(u.Provider, {
    value: s,
    children: r
  }), l[3] = r, l[4] = s, l[5] = a;
  else a = l[5];
  return a
}
var d = u;

function Wu() {
  let {
    isTerminalFocused: c
  } = ve(d);
  return c
}

function hke() {
  let {
    terminalFocusState: c
  } = ve(d);
  return c
}

function R() {
  return v(Lg)
}
var XN = (c, r) => {
    let t = setTimeout(c, r);
    return () => clearTimeout(t)
  },
  KPe = () => () => {},
  Yzr = () => null;

function v(c) {
  let r = new Map,
    t = null,
    n = c,
    l = performance.now(),
    i = 0;

  function s() {
    i = performance.now() - l;
    for (let o of r.keys()) o()
  }

  function a() {
    if ([...r.values()].some(Boolean)) {
      if (t !== null) clearInterval(t);
      else i = performance.now() - l;
      t = setInterval(s, n)
    } else if (t !== null) clearInterval(t), t = null
  }

  function f(o, m) {
    return r.set(o, m), a(), () => {
      r.delete(o), a()
    }
  }
  return {
    subscribeKeepAlive(o) {
      return f(o, !0)
    },
    subscribeFollower(o) {
      return f(o, !1)
    },
    now() {
      if (t !== null) return i;
      return performance.now() - l
    },
    setTickInterval(o) {
      if (o === n) return;
      n = o, a()
    },
    setTimeout(o, m) {
      let b = setTimeout(o, m);
      return () => clearTimeout(b)
    }
  }
}
var jC = Jt(null),
  T = Lg * 2;

function C$o(c) {
  let l = S(7),
    {
      children: r
    } = c,
    [t] = y(R),
    n = Wu(),
    i, s;
  if (l[0] !== t || l[1] !== n) i = () => {
    t.setTickInterval(n ? Lg : T)
  }, s = [t, n], l[0] = t, l[1] = n, l[2] = i, l[3] = s;
  else i = l[2], s = l[3];
  O(i, s);
  let a;
  if (l[4] !== r || l[5] !== t) a = e(jC.Provider, {
    value: t,
    children: r
  }), l[4] = r, l[5] = t, l[6] = a;
  else a = l[6];
  return a
}
export {
  T$o,
  Wu,
  hke,
  XN,
  KPe,
  Yzr,
  jC,
  C$o
};
