// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  A,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var l = Jt(null),
  d = Jt(null),
  P = Jt(null),
  T = () => () => {};

function nzr(i) {
  let r = S(11),
    {
      session: o,
      children: c
    } = i,
    s;
  if (r[0] !== o) s = () => ({
    subscribe: o.subscribe,
    get: () => Bo(o)
  }), r[0] = o, r[1] = s;
  else s = r[1];
  let [u] = y(s), t;
  if (r[2] !== c || r[3] !== u) t = e(P.Provider, {
    value: u,
    children: c
  }), r[2] = c, r[3] = u, r[4] = t;
  else t = r[4];
  let n;
  if (r[5] !== o.host || r[6] !== t) n = e(d.Provider, {
    value: o.host,
    children: t
  }), r[5] = o.host, r[6] = t, r[7] = n;
  else n = r[7];
  let h;
  if (r[8] !== o || r[9] !== n) h = e(l.Provider, {
    value: o,
    children: n
  }), r[8] = o, r[9] = n, r[10] = h;
  else h = r[10];
  return h
}

function rzr(i) {
  let s = S(8),
    {
      host: o,
      project: c,
      children: r
    } = i,
    u;
  if (s[0] !== c) u = () => ({
    subscribe: T,
    get: () => c
  }), s[0] = c, s[1] = u;
  else u = s[1];
  let [t] = y(u), n;
  if (s[2] !== r || s[3] !== t) n = e(P.Provider, {
    value: t,
    children: r
  }), s[2] = r, s[3] = t, s[4] = n;
  else n = s[4];
  let h;
  if (s[5] !== o || s[6] !== n) h = e(d.Provider, {
    value: o,
    children: n
  }), s[5] = o, s[6] = n, s[7] = h;
  else h = s[7];
  return h
}

function ei() {
  let i = ve(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />")
  }
  return i
}

function XR(i) {
  let o = ve(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />")
  }
  return p(o, o.subscribe, o.get, i)
}

function tI() {
  return ve(l) ?? void 0
}

function Io(i) {
  let c = S(2),
    o = ve(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />")
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;
  else r = c[1];
  return p(o, o.subscribe, r, i)
}

function p(i, o, c, r) {
  let s = A(null);
  if (s.current === null || s.current.owner !== i) {
    let t = {
      owner: i,
      read: c,
      selector: r,
      get: () => {
        let n = t.read();
        return t.selector ? t.selector(n) : n
      }
    };
    s.current = t
  }
  s.current.read = c, s.current.selector = r;
  let u = s.current.get;
  return At(o, u, u)
}
export {
  nzr,
  rzr,
  ei,
  XR,
  tI,
  Io
};
