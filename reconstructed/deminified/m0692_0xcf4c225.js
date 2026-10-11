// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { vs } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, T, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var l = Vt(null),
  d = Vt(null),
  P = Vt(null),
  subscribe = () => () => {};
function Jwn(i) {
  let r = w(11),
    {
      session: o,
      children: children
    } = i,
    s;
  if (r[0] !== o) s = () => ({
    subscribe: o.subscribe,
    get: () => vs(o)
  }), r[0] = o, r[1] = s;else s = r[1];
  let [value] = g(s),
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
function Qwn(i) {
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
  let [value_2] = g(u),
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
function Gs() {
  let i = Pe(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return i;
}
function G_(i) {
  let o = Pe(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return v(o, o.subscribe, o.get, i);
}
function jC() {
  return Pe(l) ?? void 0;
}
function ir(i) {
  let c = w(2),
    o = Pe(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;else r = c[1];
  return v(o, o.subscribe, r, i);
}
function v(owner, o, read, selector) {
  let s = T(null);
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
export { Jwn, Qwn, Gs, G_, jC, ir };