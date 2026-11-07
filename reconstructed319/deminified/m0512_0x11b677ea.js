// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bt, Yl } from "B:/~BUN/root/chunk-ja520myc.js";
import { na } from "B:/~BUN/root/chunk-5az22yft.js";
import { Mtt, sqe } from "B:/~BUN/root/chunk-fjzk7kwf.js";
import { DVn, iB, LVn } from "B:/~BUN/root/chunk-09sn55yf.js";
import { Qo, Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function w(e) {
  try {
    let t = new URL(e);
    if (t.protocol !== "https:" && t.protocol !== "http:") return;
    return t.origin;
  } catch {
    return;
  }
}
function eze(e) {
  return {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound,
    authServerMetadataUrl: e.authServerMetadataUrl,
    ...(e.xaaPinned && {
      xaaPinned: !0
    })
  };
}
function P(e) {
  return e !== void 0 && e.authorizationServerUrl !== "";
}
function k_r({
  previous: previous,
  discovered: discovered,
  servedMetadataUrl: servedMetadataUrl
}) {
  if (P(previous) && previous.authServerMetadataUrl !== void 0) return {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound,
    authServerMetadataUrl: previous.authServerMetadataUrl,
    ...(previous.xaaPinned && {
      xaaPinned: !0
    })
  };
  if (!discovered.oauthMetadataFound || w(discovered.authorizationServerUrl) === void 0) return P(previous) ? {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound
  } : {
    ...discovered
  };
  if (P(previous) && previous.oauthMetadataFound !== !0 && servedMetadataUrl !== void 0) return {
    authorizationServerUrl: previous.authorizationServerUrl,
    oauthMetadataFound: previous.oauthMetadataFound
  };
  return {
    ...discovered,
    authServerMetadataUrl: servedMetadataUrl ?? null
  };
}
function ue(e, {
  servedMetadataUrl: servedMetadataUrl_2,
  interactiveSignIn: interactiveSignIn
}) {
  if (!P(e)) return e;
  let authServerMetadataUrl = servedMetadataUrl_2 ?? null;
  return (interactiveSignIn ? e.authServerMetadataUrl === authServerMetadataUrl : e.authServerMetadataUrl !== void 0) ? e : {
    ...e,
    authServerMetadataUrl: authServerMetadataUrl
  };
}
function v_r({
  previous: previous_2,
  signIn: signIn,
  servedMetadataUrl: servedMetadataUrl_3,
  interactiveSignIn: interactiveSignIn_2
}) {
  if (xZ(previous_2)) return previous_2;
  if (signIn !== void 0 && w(signIn.authorizationServerUrl) !== void 0 && (interactiveSignIn_2 || !P(previous_2))) {
    let {
      authServerMetadataUrl: authServerMetadataUrl_2,
      xaaPinned: xaaPinned,
      ...u
    } = previous_2 ?? {
      authorizationServerUrl: ""
    };
    return interactiveSignIn_2 || signIn.oauthMetadataFound ? {
      ...u,
      authorizationServerUrl: signIn.authorizationServerUrl,
      oauthMetadataFound: signIn.oauthMetadataFound,
      authServerMetadataUrl: servedMetadataUrl_3 ?? null
    } : {
      ...u,
      authorizationServerUrl: signIn.authorizationServerUrl,
      oauthMetadataFound: signIn.oauthMetadataFound
    };
  }
  if (previous_2 !== void 0 && !interactiveSignIn_2 && previous_2.oauthMetadataFound !== !0 && previous_2.authServerMetadataUrl === void 0) return signIn !== void 0 && servedMetadataUrl_3 === void 0 && signIn.oauthMetadataFound && w(signIn.authorizationServerUrl) !== void 0 ? {
    ...previous_2,
    authorizationServerUrl: signIn.authorizationServerUrl,
    oauthMetadataFound: !0,
    authServerMetadataUrl: null
  } : previous_2;
  return previous_2 && ue(previous_2, {
    servedMetadataUrl: servedMetadataUrl_3,
    interactiveSignIn: interactiveSignIn_2
  });
}
function h7t({
  previous: previous_3,
  issuedBy: issuedBy,
  interactiveSignIn: interactiveSignIn_3
}) {
  let a = previous_3?.authServerMetadataUrl;
  return {
    authorizationServerUrl: xZ(previous_3) ?? issuedBy,
    oauthMetadataFound: !0,
    authServerMetadataUrl: !interactiveSignIn_3 && a !== void 0 ? a : null,
    xaaPinned: !0
  };
}
function xZ(e) {
  return e?.xaaPinned === !0 && P(e) ? e.authorizationServerUrl : void 0;
}
function ldo(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = e;
  return typeof t.name === "string" && (t.errorCode === void 0 || typeof t.errorCode === "string") && (t.error === void 0 || typeof t.error === "string");
}
var le = 200;
function wo(e, t = 64) {
  if (typeof e !== "string") return "";
  return Zl(iB(e).replace(/['`]/g, " "), t, "none");
}
var regExp = new RegExp(`[<>";\\u2018\\u2019\\u201A\\u201C\\u201D\\u201E\\u00AB\\u00BB${[...LVn.keys()].join("")}]`, "gu");
function KMi(e, t = 1024) {
  return Zl(e, t);
}
function Zl(e, t = le, i = "all") {
  if (typeof e !== "string") return "";
  let a = DVn(iB(e)).replaceAll(regExp, " ").replaceAll(/\s+/g, " ").trim(),
    s = Math.max(k, t + oe),
    l = a.length > s,
    u = g7t(l ? Q(a, s) : a, i);
  return l || u.length > t ? `${Q(u, t)}\u2026` : u;
}
var ee = 500;
function Ev(e) {
  let t = DVn(e).replaceAll(/\s+/g, " ").trim(),
    i = g7t(t.length > k ? Q(t, k) : t);
  return i.length > ee ? `${Q(i, ee)}\u2026` : i;
}
var O = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`,
  fe = String.raw`\b${O}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${O}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`,
  ne = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${fe})|[A-Za-z0-9._~+/=%-]{8,})`,
  regExp_2 = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${O}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${ne})`, "gi"),
  regExp_3 = new RegExp(String.raw`(?:\b|(?<=\\[A-Za-z"']))(${O})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${O}=*(?![A-Za-z0-9._~+/=%-]))(${ne})`, "gi");
function te(e, t, i, a, s) {
  if (!/[0-9._~+/=%-]/.test(i)) return e;
  return /\w/.test(s[a + e.length] ?? "") ? `${t} [redacted] ` : `${t} [redacted]`;
}
function g7t(e, t = "all") {
  if (t === "none") return e;
  return e.replace(regExp_2, te).replace(regExp_3, te);
}
var ge = /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i,
  pe = /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;
function me(e) {
  let t = e.split(/[:=\uFF1A\uFF1D]+/).map(item => item.trim()),
    i = 0;
  for (let [a, s] of t.entries()) {
    if (s === "") continue;
    let l = a < t.length - 1 || s.startsWith("-");
    if (!ge.test(s) && !(l && pe.test(s))) return !1;
    i++;
  }
  return i > 0;
}
var k = 2000,
  oe = 512,
  re = k + oe,
  Se = 32,
  _e = 262144,
  Ae = 131072,
  Me = 8192,
  Re = 65536,
  Ee = /^(?:[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs})$/u;
function ddo(e) {
  let t = e.errorCode ? ` (${e.errorCode})` : "",
    i = e.error ? `: "${e.error}"` : "";
  return `${e.name}${t}${i}`;
}
var Ece = "Blocked by enterprise managed policy",
  BIn = "Disabled by disableClaudeAiConnectors setting",
  E_r = "Not approved for this project - approve it via /mcp first",
  jIn = "Refused - Claude Code reserves this address for its own use",
  T_r = "Account changed while connecting - reconnect to use it",
  tze = "Disabled in /mcp",
  qMi = "claude.ai rejected the session token \u2014 it may lack connector scopes or be invalid. Run /login.",
  C_r = "Authentication cleared",
  R_r = "Authentication could not be cleared",
  A_r = "Its connection was closed while signing in again",
  Ce = new Set([Ece, BIn]);
function y7t(e) {
  return e !== void 0 && Ce.has(e);
}
function _7t(e) {
  return e === jIn;
}
function sD(e) {
  return e.type === "failed" && e.errorCode === "UNCONFIGURED";
}
function cdo(e) {
  let {
    awaitsNextTurnRedial: awaitsNextTurnRedial,
    searchRedial: searchRedial
  } = bt();
  return a => awaitsNextTurnRedial?.(a) === !0 || e && searchRedial?.allows(a) === !0 && "on_search";
}
function DW(e) {
  return e.type === "failed" && e.errorCode === "404" && e.name === na && Yl(e.config);
}
function udo(e, t = () => !1) {
  return e.filter(item => item.type === "failed").filter(item => !sD(item)).filter(item => !DW(item)).filter(item => !0).map(item => {
    let willRetry = t(item);
    return {
      name: Zl(item.name),
      ...(item.errorCode !== void 0 && {
        errorCode: Zl(item.errorCode)
      }),
      ...((item.error !== void 0 || item.displayDetail !== void 0) && {
        error: [item.error, item.displayDetail].filter(item => Boolean(item)).map(item => Zl(item)).join(" ")
      }),
      ...(willRetry && {
        willRetry: willRetry
      })
    };
  });
}
function ve(e, t) {
  if (!e || !t || !e.includes("${")) return [];
  let i = Mtt(e);
  if (i.length < 2) return [];
  if (t.length > 2000 || i.length > 9) return [];
  let a = i.map(Qo),
    s = [];
  if (i.length === 2) {
    let [l = "", u = ""] = i;
    if (t.length >= l.length + u.length && t.startsWith(l) && t.endsWith(u)) s.push(t.slice(l.length, t.length - u.length));
  } else if (i.length === 3) {
    let [l = "", u = "", d = ""] = i;
    if (t.startsWith(l) && t.endsWith(d)) {
      let p = t.slice(l.length, t.length - d.length);
      if (u === "") s.push(p);else {
        let E = [];
        for (let M = p.indexOf(u); M !== -1 && E.length <= 64; M = p.indexOf(u, M + 1)) E.push(M);
        let D = E.length > 64 ? [E[0] ?? 0, p.lastIndexOf(u)] : E;
        for (let M of D) s.push(p.slice(0, M), p.slice(M + u.length));
      }
    }
  } else {
    for (let d = 1; d < i.length - 1; d++) if (i[d] === "") return [];
    let l = "^";
    for (let d = 0; d < a.length; d++) if (l += a[d], d < a.length - 1) {
      let p = i[d + 1] ?? "";
      if (p === "") l += "([\\s\\S]*)";else {
        let E = p.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
        l += `([^${E}]*)`;
      }
    }
    let u = t.match(new RegExp(l + "$"));
    if (u) s.push(...u.slice(1).filter(item => item !== ""));
  }
  return L(s);
}
function Fe(e, t) {
  if (!e) return [];
  let i = [],
    a = (s, l) => {
      if (typeof s === "string" && typeof l === "string") i.push(...ve(s, l));
    };
  if ("url" in e && "url" in t) a(e.url, t.url);
  if ("command" in e && "command" in t) {
    a(e.command, t.command);
    let s = Array.isArray(e.args) ? e.args : [],
      l = Array.isArray(t.args) ? t.args : [];
    for (let u = 0; u < Math.min(s.length, l.length); u++) a(s[u], l[u]);
  }
  for (let s of ["headers", "env"]) {
    let l = s in e ? e[s] : void 0,
      u = s in t ? t[s] : void 0;
    if (l && u && typeof l === "object" && typeof u === "object") for (let [d, p] of Object.entries(l)) a(p, u[d]);
  }
  return i;
}
function ye(e, t) {
  for (let i of t) {
    if (i.length <= e.length) return !1;
    if (i.startsWith(e)) return !0;
  }
  return !1;
}
function YMi(e, t, i, a) {
  let s = i ?? "[mcp-endpoint]",
    textDecoder = new TextDecoder("utf-8", {
      fatal: !1
    }),
    u = r => r.replace(/(?:%[0-9A-Fa-f]{2})+/g, n => textDecoder.decode(Uint8Array.from(n.match(/[0-9A-Fa-f]{2}/g) ?? [], o => parseInt(o, 16)))),
    d = new Map(),
    p = r => {
      if (r === `
` || r === "\t") return !1;
      if (r.length === 1) {
        let o = r.charCodeAt(0);
        if (o >= 55296 && o <= 57343) return !0;
      }
      let n = d.get(r);
      if (n === void 0) n = Ee.test(r), d.set(r, n);
      return n;
    },
    E = r => {
      let n = "",
        o = 0;
      while (o < r.length) {
        if (r[o] !== "%") {
          n += r[o], o++;
          continue;
        }
        let c = [],
          f = o + 1,
          S = !1;
        while (f < r.length && c.length < 2) {
          let m = String.fromCodePoint(r.codePointAt(f) ?? 0);
          if (/^[0-9A-Fa-f]$/.test(m)) c.push(m), f += m.length;else if (p(m) && !/[\n\t]/.test(m) || /^\p{M}$/u.test(m)) S = !0, f += m.length;else break;
        }
        if (c.length === 2 && S) n += "%" + c.join(""), o = f;else n += "%", o++;
      }
      return n;
    },
    D = 0,
    M = r => {
      let n = r,
        o = 0;
      for (let c = 0; c <= Se; c++) {
        if (o += n.length, D += c === 0 ? 0 : n.length, o > _e || D > Ae) break;
        let f = iB(u(E(n)));
        if (f === n) return n;
        n = f;
      }
      throw Error("MCP error text or config too long or too deeply encoded");
    },
    j = new Map(),
    G = r => {
      let n = j.get(r);
      if (n === void 0) n = /\p{M}/u.test(r.normalize("NFD")) ? [...r.normalize("NFD")].filter(item => !/\p{M}/u.test(item)).join("") : r, j.set(r, n);
      return n;
    },
    W = new Map(),
    K = r => {
      let n = W.get(r);
      if (n === void 0) n = [...M(r)].filter(item => !p(item)).map(G).join(""), W.set(r, n);
      return n;
    },
    T = e.length > re,
    Z = /%[%0-9A-Fa-f]{0,11}$/,
    H = T ? M(Q(e, re).replace(Z, "")).replace(Z, "").replace(/\uFFFD+$/, "") : M(e);
  if (H.length > Me) throw Error("MCP error text too long once decoded");
  let R = "",
    F = "",
    b = [];
  for (let r of H) {
    if (p(r)) {
      F += " ";
      continue;
    }
    let n = G(r);
    for (let o = 0; o < n.length; o++) b.push(F.length + Math.min(o, r.length - 1));
    R += n, F += r;
  }
  b.push(F.length);
  let y = [],
    C = (r, n, o) => {
      let c = r === void 0 ? void 0 : K(r);
      if (!c || c.length < 4) return;
      if (n !== "[redacted]" && n.includes(c)) return;
      y.push([c, n, o?.wordBoundary === !0]);
    },
    U = (r, n = s) => {
      let o = r === void 0 ? void 0 : K(r);
      if (o && (n.includes(o) || me(o.trim()))) return;
      C(o, "[redacted]");
    },
    _ = (r, n = s) => {
      if (!r) return;
      if (U(r, n), r.includes("+")) U(r.replaceAll("+", " "), n);
      if (r.includes(" ")) U(r.replaceAll(" ", "+"), n);
      for (let o of [r, r.replaceAll("+", " ")]) {
        let c = o.split(/\s+/);
        if (c.length > 1) for (let f of c) U(f, n);
      }
    },
    Y = (r, n) => {
      C(r, n);
      let o = URL.parse(r);
      if (o === null) return;
      if (C(o.href, n), o.origin !== "null") C(o.origin, n);
      C(o.host, n), C(o.hostname, n);
      let c = o.hostname.replace(/^\[|\]$/g, "");
      if (c !== o.hostname) C(c, n);
      _(o.username, n), _(o.password, n), U(o.pathname !== "/" ? o.pathname : void 0, n);
      for (let f of o.pathname.split("/")) _(f, n);
      U(o.search, n);
      for (let [f, S] of o.searchParams.entries()) _(f, n), _(S, n);
      for (let f of o.search.replace(/^\?/, "").split("&")) {
        let S = f.indexOf("=");
        if (S === -1) _(f, n);else _(f.slice(0, S), n), _(f.slice(S + 1), n);
      }
    };
  for (let r of Fe(a, t)) _(r);
  if ("url" in t && typeof t.url === "string") Y(t.url, s);
  if ("oauth" in t && typeof t.oauth?.authServerMetadataUrl === "string") {
    let authServerMetadataUrl_3 = t.oauth.authServerMetadataUrl;
    Y(authServerMetadataUrl_3, w(authServerMetadataUrl_3) ?? "[redacted]");
  }
  if ("command" in t && typeof t.command === "string") {
    let r = a && "command" in a && typeof a.command === "string" ? sqe(a.command) : void 0;
    if (C(t.command, r ?? s, {
      wordBoundary: !0
    }), Array.isArray(t.args)) for (let n of t.args) _(n);
  }
  if ("headers" in t && t.headers) for (let r of Object.values(t.headers)) _(r);
  if ("env" in t && t.env) for (let r of Object.values(t.env)) _(r);
  if ("authToken" in t && typeof t.authToken === "string") _(t.authToken);
  if (y.length === 0) return T ? `${F}\u2026` : e;
  y.sort((itemA, itemB) => itemB[0].length - itemA[0].length);
  let z = new Map();
  for (let [r, replacement, wordBoundary] of y) {
    let c = z.get(r);
    if (!c) z.set(r, {
      replacement: replacement,
      wordBoundary: wordBoundary
    });else if (c.replacement === "[redacted]" && replacement !== "[redacted]") z.set(r, {
      replacement: replacement,
      wordBoundary: c.wordBoundary && wordBoundary
    });
  }
  let int32Array = new Int32Array(R.length),
    V = [],
    X = new Set(),
    ie = 0,
    ae = R.toUpperCase();
  for (let [r, n] of z) {
    if (!ae.includes(r.toUpperCase())) continue;
    let o = n.wordBoundary && /^[\w-]+$/.test(r),
      c = `${o}:${r.replace(/[a-z]+/g, g => g.toUpperCase())}`;
    if (X.has(c)) continue;
    X.add(c);
    let f = Qo(r),
      S = o ? `(?<![\\w:.-])${f}(?![\\w:.-])` : f,
      regExp_4 = new RegExp(S, "gi");
    for (let g = regExp_4.exec(R); g !== null; g = regExp_4.exec(R)) {
      if (++ie > Re) throw Error("MCP error text repeats too much of the config");
      let h = g.index + g[0].length;
      if (h > (int32Array[g.index] ?? 0)) int32Array[g.index] = h, V[g.index] = n.replacement;
      regExp_4.lastIndex = g.index + 1;
    }
  }
  let I = [];
  for (let [start, end] of int32Array.entries()) {
    if (end === 0) continue;
    let o = I.at(-1);
    if (o && start < o.end) o.end = Math.max(o.end, end);else I.push({
      start: start,
      end: end,
      replacement: V[start] ?? ""
    });
  }
  let A = R.length;
  if (T) {
    let r = A,
      n = 12;
    while (r > 0 && A - r < n && /[%0-9A-Fa-f\uFFFD]/.test(R[r - 1] ?? "")) r--;
    if (r < A && /[%\uFFFD]/.test(R.slice(r, A))) {
      let h = R.slice(r, A).search(/[%\uFFFD]/);
      A = r + h;
    }
    let o = y[0]?.[0].length ?? 0,
      c = Math.max(0, A - (o - 1)),
      f = L(y.map(([h]) => h.toUpperCase())).sort((itemA, itemB) => itemB.length - itemA.length),
      S = R.slice(c, A),
      m = [],
      g = "";
    for (let h of S) m.push(g.length, ...(h.length === 2 ? [-1] : [])), g += h.toUpperCase();
    for (let h = 0; h < S.length; h++) {
      let x = m[h] ?? 0,
        se = x === -1 ? S.charAt(h) + g.slice(m[h + 1] ?? g.length) : g.slice(x);
      if (ye(se, f)) {
        A = c + h;
        break;
      }
    }
  }
  let q = r => r === 0 ? 0 : (b[r - 1] ?? 0) + 1,
    v = "",
    N = 0;
  for (let r of I) {
    if (r.start >= A) break;
    v += F.slice(q(N), b[r.start]) + r.replacement, N = r.end;
  }
  if (N < A) v += F.slice(q(N), b[A]);
  let J = v.charCodeAt(v.length - 1);
  if (J >= 55296 && J <= 56319) v = v.slice(0, -1);
  return T ? `${v}\u2026` : v;
}
export { eze, k_r, v_r, h7t, xZ, ldo, wo, KMi, Zl, Ev, g7t, ddo, Ece, BIn, E_r, jIn, T_r, tze, qMi, C_r, R_r, A_r, y7t, _7t, sD, cdo, DW, udo, YMi };