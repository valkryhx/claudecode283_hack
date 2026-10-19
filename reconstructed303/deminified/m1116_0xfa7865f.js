// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Qpn, Zpn } from "B:/~BUN/root/chunk-a3eqgdv2.js";
import { $Ts } from "B:/~BUN/root/chunk-00v9f07q.js";
import { Np, QWe, vQe, Ule, _5n, Zcn } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { S6, Ef } from "B:/~BUN/root/chunk-9grc6xh0.js";
function m(t) {
  if (!("scope" in t)) return;
  let scope = t.scope;
  return S6.find(item => item === scope);
}
function HF(t, expanded, n) {
  let cliOwned = Np(expanded),
    authoredUnexpanded = S(t, expanded);
  if (authoredUnexpanded === void 0 && m(expanded)) return n?.detail === "origin" ? void 0 : Ule(expanded);
  return _5n({
    authoredUnexpanded: authoredUnexpanded,
    expanded: expanded,
    cliOwned: cliOwned,
    detail: n?.detail
  });
}
function S(t, e) {
  let n = m(e);
  if (n === void 0) return;
  try {
    let r = Ef(n, {
      expandVars: !1
    }).servers[t];
    return r && vJr(r, e) ? r : void 0;
  } catch {
    return;
  }
}
function M(t) {
  if (!URL.canParse(t)) return !1;
  let {
    protocol: protocol
  } = new URL(t);
  return protocol === "http:" || protocol === "https:" || protocol === "ws:" || protocol === "wss:";
}
function vJr(t, e) {
  if ((t.type ?? "stdio") !== (e.type ?? "stdio")) return !1;
  let n = QWe(t),
    r = QWe(e);
  if (n !== null || r !== null) {
    if (!(() => {
      if (n === null || r === null) return !1;
      let l = Zpn(n),
        o = Zcn(n, l),
        s = Zcn(r),
        g = C => Qpn(C).every(item => item === "");
      if (g(n)) return !0;
      if (o.scheme === "" && g(o.authority)) return f(n, r);
      let a = Zcn(l).authority.lastIndexOf("@"),
        d = s.authority.lastIndexOf("@");
      if (a === -1 !== (d === -1)) return !1;
      if (o.scheme === "") return s.scheme === "" && !M(r) && f(n, r);
      if (s.scheme === "") return !1;
      return f(o.scheme.toLowerCase(), s.scheme.toLowerCase()) && (a === -1 || f(o.authority.slice(0, a), s.authority.slice(0, d))) && f(o.authority.slice(a + 1), s.authority.slice(d + 1)) && f(o.rest, s.rest);
    })()) return !1;
  }
  let i = vQe(t),
    c = vQe(e);
  if (i !== null || c !== null) {
    if (i === null || c === null || i.length !== c.length || !i.every((item, index) => f(item, c[index] ?? ""))) return !1;
  }
  return h(p(t, "headers"), p(e, "headers")) && h(p(t, "env"), p(e, "env"));
}
function p(t, e) {
  let n = t[e];
  return n && typeof n === "object" ? n : void 0;
}
function h(t, e) {
  let n = Object.entries(t ?? {}),
    r = e ?? {};
  if (n.length !== Object.keys(r).length) return !1;
  return n.every(([i, c]) => typeof r[i] === "string" && f(c, r[i]));
}
function f(t, e) {
  let n = Qpn(t);
  if (n.length === 1) return t === e;
  let r = n[0] ?? "",
    i = n.at(-1) ?? "";
  if (!e.startsWith(r) || !e.endsWith(i)) return !1;
  let c = r.length,
    u = e.length - i.length;
  for (let l = 1; l < n.length - 1; l++) {
    let o = n[l] ?? "",
      s = e.indexOf(o, c);
    if (s === -1 || s + o.length > u) return !1;
    c = s + o.length;
  }
  return c <= u;
}
function Pc(t, e, n) {
  try {
    return $Ts(n, e, HF(t, e, {
      detail: "origin"
    }) ?? Ule(e), S(t, e));
  } catch {
    return "[mcp error detail unavailable: redaction failed]";
  }
}
export { HF, vJr, Pc };