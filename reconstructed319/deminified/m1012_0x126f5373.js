// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bo } from "B:/~BUN/root/chunk-game8aqv.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, A, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var l = Jt(null),
  d = Jt(null),
  P = Jt(null),
  subscribe = () => () => {};
function nzr(i) {
  let r = S(11),
    {
      session: o,
      children: children
    } = i,
    s;
  if (r[0] !== o) s = () => ({
    subscribe: o.subscribe,
    get: () => Bo(o)
  }), r[0] = o, r[1] = s;else s = r[1];
  let [value] = y(s),
    children_2;
  if (r[2] !== children || r[3] !== value) children_2 = e(P.Provider, {
    value: value,
    children: children
  }), r[2] = children, r[3] = value, r[4] = children_2;else children_2 = r[4];
  let children_3;
  if (r[5] !== o.host || r[6] !== children_2) children_3 = e(d.Provider, {
    value: o.host,
    children: children_2
  }), r[5] = o.host, r[6] = children_2, r[7] = children_3;else children_3 = r[7];
  let h;
  if (r[8] !== o || r[9] !== children_3) h = e(l.Provider, {
    value: o,
    children: children_3
  }), r[8] = o, r[9] = children_3, r[10] = h;else h = r[10];
  return h;
}
function rzr(i) {
  let s = S(8),
    {
      host: o,
      project: project,
      children: children_4
    } = i,
    u;
  if (s[0] !== project) u = () => ({
    subscribe: subscribe,
    get: () => project
  }), s[0] = project, s[1] = u;else u = s[1];
  let [value_2] = y(u),
    children_5;
  if (s[2] !== children_4 || s[3] !== value_2) children_5 = e(P.Provider, {
    value: value_2,
    children: children_4
  }), s[2] = children_4, s[3] = value_2, s[4] = children_5;else children_5 = s[4];
  let h;
  if (s[5] !== o || s[6] !== children_5) h = e(d.Provider, {
    value: o,
    children: children_5
  }), s[5] = o, s[6] = children_5, s[7] = h;else h = s[7];
  return h;
}
function ei() {
  let i = ve(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return i;
}
function XR(i) {
  let o = ve(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return p(o, o.subscribe, o.get, i);
}
function tI() {
  return ve(l) ?? void 0;
}
function Io(i) {
  let c = S(2),
    o = ve(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;else r = c[1];
  return p(o, o.subscribe, r, i);
}
function p(owner, o, read, selector) {
  let s = A(null);
  if (s.current === null || s.current.owner !== owner) {
    let t = {
      owner: owner,
      read: read,
      selector: selector,
      get: () => {
        let n = t.read();
        return t.selector ? t.selector(n) : n;
      }
    };
    s.current = t;
  }
  s.current.read = read, s.current.selector = selector;
  let u = s.current.get;
  return At(o, u, u);
}
export { nzr, rzr, ei, XR, tI, Io };