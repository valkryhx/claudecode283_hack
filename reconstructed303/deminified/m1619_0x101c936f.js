// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ve, x, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { yg } from "B:/~BUN/root/chunk-245a2x6v.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
var N = 8;
var F = /^v?\d+(?:[._-]\d+)*$/i;
var regExp = new RegExp("^[A-Za-z0-9._~+/=%-]+$"),
  regExp_2 = new RegExp("[^A-Za-z0-9._~+/=%-]+"),
  K = /^(?=.{1,32}$)(?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+)(?:[-_](?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+))*$/;
function p(t) {
  return /[a-z]/i.test(t) && (/\d/.test(t) || /[a-z]/.test(t) && /[A-Z]/.test(t));
}
function h(t) {
  return t.length >= 24 && regExp.test(t) && !F.test(t) && !K.test(t) && p(t);
}
function l(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t.replace(/%[0-9A-Fa-f]{2}/g, e => String.fromCharCode(parseInt(e.slice(1), 16)));
  }
}
var Z = /^(?:\*|application|audio|font|example|haptics|image|message|model|multipart|text|video)\/(?:\*|[a-z0-9](?:[a-z0-9!#$&^_.+-])*)(?:\s*;\s*[a-z0-9!#$&^_.-]+=[\w!#$&^_.+-]*)*$/i,
  q = /^(?:gzip|x-gzip|deflate|br|zstd|compress|identity|\*)(?:\s*;\s*q=[\d.]+)?$/i,
  G = /^charset=[\w.:-]+$/i,
  V = /(?<![;,\s])[;,\s]+$/;
function S(t) {
  let e = t.replace(V, "").split(",").map(item => item.trim()).filter(Boolean);
  if (e.length === 0) return !1;
  return e.every(item => Z.test(item) || q.test(item) || G.test(item));
}
var v = new Set(["accept", "accept-encoding", "content-length", "content-type", "user-agent"]),
  Q = /^\d+$/,
  W = /(?:^|[^A-Za-z0-9_-])[A-Za-z][A-Za-z0-9_-]{1,31}\s+[A-Za-z0-9._~+/=%-]{8,}(?![A-Za-z0-9._~+/=%-])/,
  Y = /([;,&\s]+)/,
  J = /[a-z0-9+.-]+/gi,
  X = /^(?:https?|wss?|ftp)$/i,
  tt = /[;,&=]/,
  et = /[\t\n\r]/g;
function w(t) {
  return t.length >= N && p(t) && !S(t);
}
function b(t) {
  return w(t) || t.includes("+") && t.split("+").some(w);
}
function nt(t) {
  return t.split(/\s+/).some(item => item.includes("+") && item.split("+").some(w)) || t.split(/[;,&\s]+/).some(item => {
    let n = item.indexOf("=");
    return n === -1 ? b(item) : b(item.slice(0, n)) || b(item.slice(n + 1));
  });
}
function rt(t, e) {
  if (t === "user-agent") return !W.test(e);
  return Q.test(e) || S(e) && !nt(e);
}
function Nce(t) {
  let e = {};
  for (let [n, o] of Object.entries(t)) {
    let r = n.toLowerCase();
    e[n] = v.has(r) && rt(r, o) ? o : "[REDACTED]";
  }
  return e;
}
function P(t, e = !1) {
  let n = t.replace(et, "");
  if (!n.includes(":")) return !1;
  let o = e ? -1 : n.lastIndexOf("?");
  for (let r of n.matchAll(J)) {
    let c = r.index + r[0].length;
    if (n[c] !== ":" || !/[a-z]/i.test(r[0])) continue;
    if (/[/\\]/.test(n[c + 1] ?? "") || !e && X.test(r[0]) || o > c) return !0;
  }
  return !1;
}
function R(t) {
  let e = t;
  for (let n = 0;; n++) {
    if (P(e)) return !0;
    let o = n < 3 ? l(e) : e;
    if (o === e) return !1;
    e = o;
  }
}
function _(t) {
  let e = t.length < 2 ? -1 : t.lastIndexOf("@", t.length - 2),
    n = t.indexOf(":");
  return n !== -1 && e > n + 1 ? e : -1;
}
function E(t, e = !0) {
  for (let n of L([t, t.replaceAll(" ", "+")])) {
    let o = n;
    for (let r = 0;; r++) {
      if (h(o) || P(o) || _(o) !== -1 || e && A(o)) return !0;
      let c = r < 3 ? l(o) : o;
      if (c === o) break;
      o = c;
    }
  }
  return !1;
}
function y(t, e) {
  return !e || E(t) ? "REDACTED" : t;
}
function m(t) {
  return h(t) || h(l(t));
}
function A(t) {
  return t.replace(/\s+/g, "+").split(regExp_2).some(m);
}
var ot = new Map([["state", "sensitive"], ["nonce", "sensitive"], ["code_challenge", "sensitive"], ["code_verifier", "sensitive"], ["code", "sensitive"], ["redirect_uri", "url"], ["resource", "url"], ["audience", "url"], ["scope", "judged"], ["client_id", "judged"], ["response_type", "judged"], ["response_mode", "judged"], ["code_challenge_method", "judged"], ["prompt", "judged"], ["access_type", "judged"], ["display", "judged"]]);
function FCn(t) {
  let uRLSearchParams = new URLSearchParams();
  for (let [o, r] of t.searchParams) {
    let c = y(o, r !== "");
    uRLSearchParams.append(c, c === "REDACTED" ? "REDACTED" : hT(o, r));
  }
  let n = uRLSearchParams.toString();
  return n === "" ? "" : `?${n}`;
}
function hT(t, e) {
  let n = ot.get(t);
  if (n === void 0) return "REDACTED";
  switch (n) {
    case "sensitive":
      return "[REDACTED]";
    case "url":
      return R(e) || R(e.replaceAll(" ", "+")) ? to(e) : "REDACTED";
    case "judged":
      return st(e);
  }
}
function st(t) {
  let e = [],
    n = [],
    o = () => {
      if (n.length > 0) e.push(...it(n)), n = [];
    };
  for (let r of t.split(" ")) if (R(r)) o(), e.push(to(r));else n.push(r);
  return o(), e.join(" ");
}
function it(t) {
  if (E(t.join(" "), !1)) return ["REDACTED"];
  let e = [],
    n = [],
    o = () => {
      if (n.length > 0) e.push(...(E(n.join("+")) ? ["REDACTED"] : n.map(item => E(item) ? "REDACTED" : item))), n = [];
    };
  for (let r of t) if (r === "" || regExp.test(r)) n.push(r);else o(), e.push(E(r) || A(r) ? "REDACTED" : r);
  return o(), e;
}
function to(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    return "[unparseable url]";
  }
  let n = e.host === "" && !e.href.startsWith(`${e.protocol}//`);
  if (e.username !== "") e.username = "REDACTED";
  if (e.password !== "") e.password = "REDACTED";
  let o = s => {
      let i = s.indexOf("=");
      if (i === -1 || /^=*$/.test(s.slice(i + 1))) return m(s) ? "REDACTED" : s;
      let a = s.slice(0, i);
      return `${m(a) || m(s) && p(a) ? "REDACTED" : a}=REDACTED`;
    },
    r = s => s.split(Y).map((item, index) => index % 2 === 1 ? item : o(item)).join(""),
    c = s => {
      let i = r(s);
      if (R(i) || A(i)) return "REDACTED";
      let a = i;
      for (let g = 0; g < 3; g++) {
        let u = l(a);
        if (u === a) break;
        if (r(u) !== u || _(u) !== -1 || A(u)) return "REDACTED";
        a = u;
      }
      return i;
    },
    D = `${n ? e.protocol : ""}${e.pathname}`,
    M = _(D),
    f;
  if (P(e.pathname, !0)) {
    let s = e.pathname.indexOf("/"),
      i = `${e.protocol}${s === -1 ? e.pathname : e.pathname.slice(0, s)}`;
    f = n && _(i) !== -1 ? "REDACTED" : `${n ? e.protocol : ""}${e.pathname.startsWith("/") ? "/" : ""}REDACTED`;
  } else {
    let s = e.pathname.split("/").map(c);
    if (n) s[0] = `${e.protocol}${s[0] ?? ""}`;
    if (M !== -1) {
      let i = B => $t(D.slice(0, B), "/"),
        a = i(D.indexOf(":")),
        g = i(M),
        u = s[g] ?? "",
        U = u.includes("@") ? u.slice(u.lastIndexOf("@")) : "";
      s.splice(a, g - a + 1, `REDACTED${U}`);
    }
    f = s.join("/");
  }
  if (!n) {
    if (e.pathname = f, tt.test(e.hostname)) e.hostname = "REDACTED";
  }
  let z = L(e.searchParams.keys()),
    j = new Set([...e.searchParams.entries()].filter(([, s]) => s === "").map(([s]) => s)),
    uRLSearchParams_2 = new URLSearchParams();
  for (let s of z) uRLSearchParams_2.append(y(s, !j.has(s)), "REDACTED");
  return e.search = uRLSearchParams_2.toString(), e.hash = "", n ? `${f}${e.search}` : e.href;
}
function H(t) {
  try {
    let e = new URL(t);
    return e.username !== "" || e.password !== "";
  } catch {
    return !0;
  }
}
function T(t) {
  return Ve(t) || t instanceof Error && (t.name === "TimeoutError" || t.name === "AuthenticationCancelledError") || t instanceof x;
}
function at(t, e) {
  let n = String(e);
  return H(n) && !T(t) ? `${t instanceof Error ? t.name : typeof t} fetching ${to(n)}` : d(t);
}
function ct(t) {
  try {
    return to(t) === new URL(t).href;
  } catch {
    return !1;
  }
}
function NL(t, e) {
  return k(t, String(e), "from the MCP SDK for");
}
function k(t, e, n) {
  if (T(t) || ct(e)) return d(t);
  let o = t instanceof Error ? /\bHTTP (\d{3})\b/.exec(t.message)?.[1] : void 0,
    r = yg(t)?.code;
  return `${o ? `HTTP ${o}` : t instanceof Error ? t.name : typeof t} ${n} ${to(e)}${r ? ` (${r})` : ""}`;
}
function UV(t) {
  if (T(t)) return d(t);
  let e = yg(t)?.code;
  return `${t instanceof Error ? t.name : typeof t}${e ? ` (${e})` : ""}`;
}
function Ko(t, e) {
  switch (e.type) {
    case "ws":
    case "ws-ide":
    case "sse":
    case "sse-ide":
    case "http":
    case "claudeai-proxy":
      return k(t, e.url, "dialing");
    case void 0:
    case "stdio":
    case "sdk":
      return d(t);
    default:
      return e;
  }
}
function xRe(t, e) {
  let n = Ko(t, e);
  return n === d(t) ? t : n;
}
function FL(t, e) {
  if (T(t)) throw t;
  if (H(String(e))) {
    let code = yg(t)?.code;
    throw Object.assign(TypeError(at(t, e)), code === void 0 ? {} : {
      code: code
    });
  }
  throw t;
}
export { Nce, FCn, hT, to, NL, UV, Ko, xRe, FL };