// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { vo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, A, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var l = qt(null),
  d = qt(null),
  P = qt(null),
  subscribe = () => () => {};
function Snr(i) {
  let r = w(11),
    {
      session: o,
      children: children
    } = i,
    s;
  if (r[0] !== o) s = () => ({
    subscribe: o.subscribe,
    get: () => vo(o)
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
  let p;
  if (r[8] !== o || r[9] !== children_3) p = e(l.Provider, {
    value: o,
    children: children_3
  }), r[8] = o, r[9] = children_3, r[10] = p;else p = r[10];
  return p;
}
function wnr(i) {
  let s = w(8),
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
  let p;
  if (s[5] !== o || s[6] !== children_5) p = e(d.Provider, {
    value: o,
    children: children_5
  }), s[5] = o, s[6] = children_5, s[7] = p;else p = s[7];
  return p;
}
function gs() {
  let i = Ee(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return i;
}
function mE(i) {
  let o = Ee(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return v(o, o.subscribe, o.get, i);
}
function wR() {
  return Ee(l) ?? void 0;
}
function qr(i) {
  let c = w(2),
    o = Ee(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;else r = c[1];
  return v(o, o.subscribe, r, i);
}
function v(owner, o, read, selector) {
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
  return Dt(o, u, u);
}
export { Snr, wnr, gs, mE, wR, qr };