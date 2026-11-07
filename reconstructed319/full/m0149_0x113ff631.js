// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jKn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Tnt
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  Oxe
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Jl
} from "B:/~BUN/root/chunk-nzh2qzgc.js";
import {
  FUt,
  Xd,
  nKe
} from "B:/~BUN/root/chunk-q8eknvfd.js";
import {
  Yl
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  eHe,
  mH,
  a0r,
  q_t,
  n5,
  QUt,
  ZUt,
  vWn,
  Kz
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  m5,
  Mtt,
  $ln,
  sqe
} from "B:/~BUN/root/chunk-fjzk7kwf.js";
import {
  Ta
} from "B:/~BUN/root/chunk-e0q1m1z9.js";
import {
  SC
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  kn
} from "B:/~BUN/root/chunk-t7d2hp9h.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  posix as _
} from "path";
var w = (e) => JSON.stringify(e);
var z = new Set(["api.anthropic.com", "api-staging.anthropic.com"]),
  ae = new Set([...z, ...Tnt.map((e) => new URL(e).hostname)]);

function ran(e) {
  return z.has(e)
}

function QXi(e) {
  let r = PV();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected" ? {
      code: r.code,
      reason: r.reason
    } : {
      code: "view_mismatch",
      reason: "the eager argv scan sees a --sdk-url value commander did not bind"
    }
  }
  if (r.status === "rejected") return {
    code: r.code,
    reason: r.reason
  };
  if (r.status === "absent" || r.url !== e) return {
    code: "view_mismatch",
    reason: "the --sdk-url value commander bound disagrees with the eager argv scan"
  };
  return null
}

function QVe(e) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return {
      code: "unparseable",
      reason: `could not parse ${w(e)} as a URL`
    }
  }
  if (ae.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:") return {
      code: "bad_scheme",
      reason: `scheme ${w(r.protocol)} is not permitted for host ${w(r.hostname)}; only wss:// and https:// are accepted`
    };
    return null
  }
  return {
    code: "not_allowlisted",
    reason: `host ${w(r.hostname)} is not an approved Anthropic endpoint`
  }
}

function PV() {
  let e = jKn();
  if (e !== void 0) return {
    status: "ok",
    url: e
  };
  let r = Oxe("--sdk-url"),
    n = r.filter(Boolean).at(-1);
  if (!n) return {
    status: "absent"
  };
  if (new Set(r).size > 1) return {
    status: "rejected",
    code: "conflicting",
    reason: "conflicting --sdk-url occurrences"
  };
  let t = QVe(n);
  if (t) return {
    status: "rejected",
    ...t
  };
  return {
    status: "ok",
    url: n
  }
}

function ZVe(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e
}
var P = [QUt, q_t, ZUt, nKe, a0r, Kz],
  IUt = [...P, vWn];
var wp = "remote-browser",
  y = "972fb542-4a76-509d-9058-f6b954ee456c",
  $jn = ["browser_click", "browser_close_file_chooser", "browser_close_window", "browser_drag", "browser_drag_to_offset", "browser_file_upload", "browser_fill_form", "browser_handle_dialog", "browser_hover", "browser_list_downloads", "browser_navigate", "browser_navigate_back", "browser_open_window", "browser_press_and_hold", "browser_press_key", "browser_resize", "browser_save_download", "browser_select_option", "browser_snapshot", "browser_tabs", "browser_take_screenshot", "browser_type", "browser_wait_for"],
  u0s = "tengu_recursive_puddle",
  x = null,
  O = he({
    on: !1
  }, (e) => {
    e.on = !1
  }),
  F = he({
    allowed: !1
  }, (e) => {
    e.allowed = !1
  });

function ZXi(e) {
  let r = x;
  return x = e, O.on = !1, r
}

function Ujn() {
  let e = x?.(u0s, !1) === !0;
  if (e) O.on = !0;
  return e
}

function R_t() {
  return F.allowed
}

function Wet() {
  return Ujn() || O.on || F.allowed
}
var ce = ["/v2/ccr-sessions/", "/v1/code/"],
  p = ["/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/", ...ce],
  ue = [/^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/mcp(?:\/[A-Za-z0-9_-]+)?$/, /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/mcp(?:\/[A-Za-z0-9_-]+)?$/, /^\/v1\/code\/mcp\/[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)?$/],
  eJi = "spent";

function f0s() {
  return Jl.bridgeCarrier ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "SESSION_INGRESS_URL", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"] : []
}

function $u(e) {
  let r = tKe(),
    n = URL.parse(e);
  if (r === null || n === null) return !1;
  if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : A_t(n)) !== r) return !1;
  return p.some((s) => n.pathname.includes(s))
}

function xSe(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return !1;
  if (!$u(r.url)) return !1;
  switch (Jl.bridgeCarrier) {
    case void 0:
      return !0;
    case "child":
      return "scope" in r && r.scope === "dynamic" && e === Xd;
    case "descendant":
      return !1
  }
}

function le(e, r) {
  let n = m(e, r);
  if (!n) return !1;
  if (n.pathname === FUt) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return p.some((s) => n.pathname.includes(s)) && t.length === 1 && t[0] === nKe
}

function tJi(e) {
  let r = tKe();
  if (r === null) return !1;
  let n = m(e, r);
  if (!n) return !1;
  let t = dpe.exec(n.pathname)?.[1];
  if (t === void 0) return !1;
  if (!Jl.ownCcrSessionIds.some((l) => jn(l) === jn(t))) return !1;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.getAll("toolbox_mcp_server_id"),
    i = n.searchParams.get("mcp_server_id"),
    a = n.searchParams.get("mcp_url");
  return new Set(s).size === s.length && s.every((l) => TDr.includes(l)) && o.length === 1 && o[0] === QUt && (i === null || X().has(i)) && (a === null || m(a, r) !== null)
}

function nJi(e) {
  if (!$u(e)) return !1;
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  let n = [...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id")];
  if (n.length === 0) return !1;
  let t;
  try {
    t = decodeURIComponent(r.pathname)
  } catch {
    return !0
  }
  let s = _.normalize(t),
    o;
  for (let u of [dpe, C, D, N])
    if (o = u.exec(r.pathname)?.[1] ?? u.exec(s)?.[1], o !== void 0) break;
  if (o === void 0 && ["/v2/ccr-sessions/", "/v1/code/sessions/", "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"].some((u) => r.pathname.includes(u) || t.includes(u) || s.includes(u))) return !0;
  if (o === re && Jl.ownCcrSessionIds.length === 0) return !0;
  let a = X(),
    l = o === void 0 ? [] : q(jn(o));
  return n.some((u) => a.has(u) || l.includes(u) || u.toLowerCase() === Ta)
}

function X() {
  let e = new Set([QUt]);
  for (let r of Jl.ownCcrSessionIds)
    for (let n of q(jn(r))) e.add(n);
  return e
}

function q(e) {
  return kDr(e, Ta)
}

function kDr(e, r) {
  return [`cse_${e}`, `session_${e}`].map((n) => n5(n, r))
}
var de = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;

function vDr(e, r) {
  if (e !== mH || r.scope !== "dynamic" || Yl(r) || !("url" in r) || typeof r.url !== "string" || !$u(r.url)) return !1;
  let n;
  try {
    n = new URL(r.url)
  } catch {
    return !1
  }
  if (n.username !== "" || n.password !== "" || n.hash !== "") return !1;
  if (de.test(n.pathname)) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return dpe.test(n.pathname) && t.length === 1 && t[0] === a0r
}

function rJi(e) {
  if (!("url" in e) || typeof e.url !== "string" || Yl(e)) return !1;
  let r = "headers" in e ? e.headers : void 0,
    n = Object.entries(typeof r === "object" && r !== null ? r : {}),
    t = n.flatMap(([s, o]) => f(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [o.trim()] : []);
  if ("headersHelper" in e && e.headersHelper) return $u(e.url);
  return fe(e.url, t, n.flat().filter((s) => typeof s === "string"))
}

function pe(e) {
  return [a0r, ...e.flatMap((r) => {
    let n = jn(r);
    return [`cse_${n}`, `session_${n}`].map((t) => n5(t, mH))
  })].map(f)
}

function b(e, r, {
  orItsName: n = !0
} = {}) {
  if (n && h(e).some((s) => s.replace(ge, "") === mH)) return !0;
  let t = e;
  for (let s = 0;; s++) {
    if (Q(t, r)) return !0;
    let o = J(t);
    if (o === t) return !1;
    if (s === 3) return !0;
    t = o
  }
}

function Q(e, r) {
  let n = [e, e.replace(/%[0-9a-f]{2}/gi, "")].map(f);
  return r.some((t) => n.some((s) => s.includes(t)))
}
var j = /[\\\p{Cc}]/u,
  v = /[%?#\\\s\p{Cc}]/u,
  Z = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;

function f(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "")
}

function fe(e, r = [], n = r) {
  if (!$u(e)) return !1;
  if (e.length > 32768) return !0;
  let t;
  try {
    t = new URL(e)
  } catch {
    return !1
  }
  if ([e, ...r].some((c) => c.includes("${"))) return !0;
  if (Ee(t.pathname)) return !0;
  let s = [...[...t.searchParams].flat(), ...[t.hash, t.username, t.password].filter((c) => c !== ""), ...n];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return !0;
  let o = L(s.flatMap(h));
  if (o.some((c) => T(c, me)) || U(t, ["mcp_url"]).some((c) => _e(c, t.hostname))) return !0;
  let i = U(t, ["mcp_server_id", "toolbox_mcp_server_id"]),
    a = [t.pathname, _.normalize(t.pathname)],
    l = E(D, a) ?? E(N, a),
    u = E(dpe, a) ?? E(C, a) ?? l,
    {
      ownCcrSessionIds: R
    } = Jl,
    M = L([...a, ...o].flatMap((c) => A.flatMap((g) => {
      let k = c.indexOf(g),
        V = k === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(c.slice(k + g.length))?.[0];
      return V === void 0 ? [] : [V]
    })));
  if (M.length > 8) return !0;
  let d = pe(L([...R, ...u === void 0 ? [] : [u], ...M]));
  if ([...o, ...h(t.pathname + t.search + t.hash)].some((c) => Q(c, d))) return !0;
  if ([...r, ...l === void 0 ? [] : [l]].some((c) => b(c, d)) || t.pathname.split("/").some((c) => b(c, d, {
      orItsName: !1
    }))) return !0;
  let S = u === re && R.length === 0;
  if (r.length > 0 && S) return !0;
  if (i.length === 0) return !1;
  if (u === void 0 ? A.some((c) => a.some((g) => g.includes(c))) : S) return !0;
  return i.some((c) => b(c, d))
}

function U(e, r) {
  let n = r.map(f);
  return [...e.searchParams].filter(([t]) => h(t).some((s) => n.includes(f(s)))).map(([, t]) => t)
}

function E(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t
  }
  return
}
var oan = ["/v2/ccr-sessions/", "/v1/code/sessions/"],
  A = [...oan, "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"],
  me = [...A, "/v1/code/local/", "/v1/code/mcp/"];

function _e(e, r) {
  return !Ce(e, r) && (v.test(e) || T(e, p))
}

function h(e) {
  if (!e.includes("%")) return [e];
  let r = [e],
    n = [e];
  for (let t = 1; t <= 3; t++) n = L(n.flatMap((s) => [W(s), W(s.replace(Re, (o, i, a) => o.length === 3 ? o : `	%${i}${a}	`))])), r.push(...n);
  return L(r)
}
var ge = /[\s\p{Cc}\ufffd+]/gu,
  Re = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;

function W(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, (r) => new TextDecoder().decode(Uint8Array.from(r.slice(1).split("%"), (n) => parseInt(n, 16))))
}

function T(e, r) {
  let n = Y(e);
  if (!n.join("").includes("memory")) return !1;
  return r.some((t) => {
    let s = Y(t).filter((o) => o !== "");
    return [
      [...s, "memory", "mcp"],
      [...s, "mcp", "memory"], ...s.includes("mcp") ? [
        [...s, "memory"]
      ] : []
    ].some((o) => Se(n, o))
  })
}

function Y(e) {
  return e.toLowerCase().split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u).flatMap((r) => [...r.split(/[\s\p{Cc}\ufffd+]+/u), ""])
}

function Se(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "",
      o = 0;
    for (let i = t;; i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (o += a.length, o === s.length) {
        n++, t = i;
        break
      }
    }
  }
  return n === r.length
}

function Ee(e) {
  if (v.test(e) || T(e, p)) return !0;
  let r = e.toLowerCase();
  return [r, _.normalize(r)].some((n) => p.some((t) => {
    let s = n.indexOf(t);
    return s !== -1 && Me(n.slice(s))
  }))
}

function Ce(e, r) {
  let n = Z.exec(e)?.[0];
  if (n === void 0 || j.test(e) || !URL.canParse(e) || G(e, r)) return !1;
  for (let t = 0; t <= 3; t++) {
    let s = J(n);
    if (s === n) return !0;
    if (j.test(s) || !Z.test(s) || s.toLowerCase().includes(I(r)) || URL.canParse(s) && G(s, r)) return !1;
    n = s
  }
  return !1
}

function G(e, r) {
  return [I(r), ""].includes(I(new URL(e).hostname))
}

function I(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r)
}

function Me(e) {
  return [e, _.normalize(e)].some((r) => {
    let n = r.split("/").filter((s) => s !== ""),
      t = n.indexOf("memory");
    return t !== -1 && n.includes("mcp", t + 1) || n.some((s, o) => s === "mcp" && n[o + 1] === "memory")
  })
}

function J(e) {
  try {
    return decodeURIComponent(e)
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, (r) => String.fromCharCode(Number.parseInt(r.slice(1), 16)))
  }
}
var dpe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/,
  C = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;

function oJi(e) {
  if (v.test(e.pathname) || _.normalize(e.pathname) !== e.pathname) return !1;
  let r = e.pathname.toLowerCase(),
    n = -1;
  for (let o of p) {
    let i = r.indexOf(o);
    if (i !== -1 && (n === -1 || i < n)) n = i
  }
  if (n === -1) return !1;
  let t = e.pathname.slice(n),
    s = e.searchParams.getAll("toolbox_mcp_server_id");
  if (!s.every((o) => P.includes(o.toLowerCase()))) return !1;
  return s.length === 1 && (dpe.test(t) || C.test(t)) || ue.some((o) => o.test(t))
}

function ee(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`
}
var we = new RegExp(`^${ee("[A-Za-z0-9_-]+")}mcp$`);

function MUt(e) {
  return $u(e) && we.test(new URL(e).pathname)
}
var Pe = new RegExp(`^${ee("[^/]+")}`);

function eKe(e) {
  if (!$u(e)) return !1;
  let r;
  try {
    r = _.normalize(decodeURIComponent(new URL(e).pathname))
  } catch {
    return !0
  }
  return Pe.test(r)
}
var D = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/,
  N = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/,
  re = "-";

function EDr(e, r, n) {
  let t = m(e, r);
  if (!t) return null;
  let s = dpe.exec(t.pathname),
    o = xe(t, r);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`
}
var TDr = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"],
  san = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function xe(e, r) {
  let n = [...e.searchParams.keys()];
  if (new Set(n).size !== n.length || n.some((i) => !TDr.includes(i)) || e.searchParams.get("toolbox_mcp_server_id") !== nKe) return null;
  let t = new URLSearchParams,
    s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let i = m(s, r);
    if (!i || i.pathname !== FUt || i.search !== "") return null;
    t.set("mcp_url", `${r}${FUt}`)
  }
  let o = e.searchParams.get("mcp_server_id");
  if (o !== null) {
    if (!san.test(o)) return null;
    t.set("mcp_server_id", o)
  }
  return t.set("toolbox_mcp_server_id", nKe), t.toString()
}

function A_t(e) {
  return e.protocol === "https:" || e.protocol === "http:" ? e.origin : null
}

function m(e, r) {
  let n;
  try {
    n = new URL(e)
  } catch {
    return null
  }
  return A_t(n) === r && n.username === "" && n.password === "" && n.hash === "" ? n : null
}

function tKe() {
  let e = Jl.atStartup;
  if (!e) return null;
  try {
    return A_t(new URL(e))
  } catch {
    return null
  }
}

function jFe(e) {
  let r = tKe(),
    n = r === null ? null : m(e, r);
  if (!n) return !1;
  let t = (dpe.exec(n.pathname) ?? C.exec(n.pathname))?.[1];
  return t !== void 0 && Jl.ownCcrSessionIds.some((s) => jn(s) === jn(t))
}

function CDr(e) {
  let r = tKe();
  return r !== null && le(e, r)
}

function J3(e) {
  let r = tKe(),
    n = r === null ? null : m(e, r),
    t = n ? dpe.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.get("mcp_server_id"),
    i = n.searchParams.get("toolbox_mcp_server_id");
  if (new Set(s).size !== s.length || s.some((a) => !TDr.includes(a)) || o === null || !san.test(o) || i === null) return null;
  return {
    sessionSegment: t,
    mcpServerId: o,
    toolboxMcpServerId: i,
    upstreamUrl: n.searchParams.get("mcp_url") ?? void 0
  }
}

function DUt(e) {
  return e !== void 0 && QVe(e) === null ? A_t(new URL(e)) : null
}
var ye = "/v1/code/mcp/hearthbot",
  Oe = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;

function RDr(e) {
  if (!$u(e)) return !1;
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === ye || Oe.test(r.pathname))
}
var be = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/email\/mcp$/;

function sJi(e, r) {
  if (e !== eHe || r.scope !== "dynamic" || Yl(r) || !("url" in r) || typeof r.url !== "string" || !$u(r.url)) return !1;
  let n;
  try {
    n = new URL(r.url)
  } catch {
    return !1
  }
  return n.username === "" && n.password === "" && n.hash === "" && n.search === "" && be.test(n.pathname)
}
var ne = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/remote-browser\/mcp$/;

function iJi(e) {
  if (!$u(e)) return !1;
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  return (r.protocol === "https:" || r.protocol === "http:") && r.username === "" && r.password === "" && r.hash === "" && r.search === "" && ne.test(r.pathname)
}

function p0s(e) {
  if (!R_t() || !jFe(e)) return !1;
  let r = new URL(e),
    n = dpe.exec(r.pathname)?.[1],
    t = r.searchParams.get("mcp_server_id");
  return n !== void 0 && [...r.searchParams.keys()].length === 2 && r.searchParams.get("toolbox_mcp_server_id") === y && kDr(jn(n), wp).some((s) => s === t)
}

function aJi(e, r) {
  if (!R_t() || !$u(r)) return !1;
  let n = new URL(r),
    t = U(n, ["mcp_server_id", "toolbox_mcp_server_id"]).flatMap(h);
  if (t.some(Ae)) return !(e === wp && p0s(r));
  let s = h(n.pathname).map((i) => _.normalize(i).replace(/\/+$/, "")),
    o = [...Jl.ownCcrSessionIds, ...[dpe, C, D, N].flatMap((i) => E(i, s) ?? [])].flatMap((i) => kDr(jn(i), wp)).map(te);
  return s.some((i) => ne.test(i)) || t.some((i) => f(i) === f(wp) || o.some((a) => B(i).includes(a)))
}
var Ue = /(?![0-9])\p{Nd}/u;

function Ae(e) {
  return R_t() && (Ue.test(e) || B(e).includes(te(y)))
}

function te(e) {
  return B(e).replace(/^0+/, "")
}

function B(e) {
  let r = SC(e)?.replaceAll("-", "") ?? "",
    n = e.toLowerCase().replaceAll("urn:", "").replaceAll("uuid:", "").replace(/[^0-9a-f]/g, "");
  return `${r}${n}`
}
var H = new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]),
  se = "/devices/mcp";

function NTo(e) {
  let r;
  try {
    r = new URL(e)
  } catch {
    return !1
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && H.has(r.hostname)
}

function hAe(e) {
  if ("url" in e && typeof e.url === "string" && $u(e.url)) return !0;
  return Yl(e)
}

function oe(e) {
  if (!$u(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0
}
var Ie = new Set(["http:", "https:", "ws:", "wss:"]);

function Bjn(e) {
  let r = oe(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Ie.has(n.protocol) ? n.hostname.toLowerCase() : void 0
}

function WFe(e) {
  let r = oe(e);
  if (!r) return !1;
  try {
    let n = new URL(r);
    return H.has(n.hostname) && n.pathname === se
  } catch {
    return !1
  }
}
var lJi = [...H].map((e) => `https://${e}${se}`);

function CJ(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return r.search = "", r.username = "", r.password = "", r.hash = "", r.toString().replace(/\/$/, "")
  } catch {
    return
  }
}

function oj(e) {
  return e ? kn(e) : void 0
}

function dJi(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e),
    n = ie(r);
  if (n === void 0) return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${n}/\u2026` : n
}

function Rie(e) {
  return "url" in e ? e.url : null
}

function x_t(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [r.command, ...r.args ?? []]
}

function m0s(e) {
  if (!URL.canParse(e)) return [];
  let r = new URL(e);
  return p.some((n) => r.href.includes(n)) ? r.searchParams.getAll("mcp_url") : []
}

function ADr(e) {
  return m0s(e)[0] || e
}

function PSe(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown")
}

function xDr(e) {
  let {
    authoredUnexpanded: r,
    expanded: n,
    cliOwned: t
  } = e, s = e.detail ?? "endpoint";
  if (r) {
    let i = Rie(r);
    if (i) {
      if (s === "endpoint") return sqe(i);
      if (!Le(i, Rie(n) ?? "")) return;
      if (ve(i)) return K(i);
      return PDr(i) ?? K(i)
    }
    let a = x_t(r);
    if (a) return s === "endpoint" ? sqe(a.join(" ")) : void 0;
    return s === "endpoint" ? PSe(r) : void 0
  }
  let o = Rie(n);
  if (o) {
    let i = t && $u(o) ? ADr(o) : o,
      a = PDr(i);
    if (a !== void 0) return a
  }
  return s === "endpoint" ? PSe(n) : void 0
}

function PDr(e) {
  let r = URL.parse(e);
  return r ? ie(r) : void 0
}

function LUt(e, r = e) {
  let n = (i) => {
      let a = e.length;
      for (let l of ["/", "?", "#", "\\"]) {
        let u = r.indexOf(l, i);
        if (u !== -1 && u < a) a = u
      }
      return a
    },
    t = r.indexOf("://"),
    s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0,
    o = n(s);
  return {
    scheme: e.slice(0, s),
    authority: e.slice(s, o),
    rest: e.slice(o)
  }
}

function ve(e) {
  return LUt(e, $ln(e)).authority.includes("${")
}

function K(e) {
  let r = $ln(e),
    {
      scheme: n,
      authority: t
    } = LUt(r),
    s = n.length,
    o = s + t.length;
  if (r.includes("@", o)) return sqe(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"),
    a = i === -1 ? s : s + i + 1,
    l = e.slice(a, o);
  if (l === "") return;
  let u = e.slice(0, s) + l;
  if (!m5(u)) return PDr(u);
  let R = r.slice(a, o);
  if (/[\u0000-\u0020\u007f]/.test(R)) return;
  let M = R.replace(/:[^:\]]*$/, "").length,
    d = Mtt(l.slice(0, M)),
    S = d.slice(0, -1);
  if (S.some((g) => /[^.]/.test(g)) || S.length > 0 && /^[^.]/.test(d.at(-1) ?? "")) return;
  let c = d.join("x");
  if (/[^!-~]/.test(c) || URL.parse(`https://${c}`)?.hostname !== c.toLowerCase()) return;
  return sqe(u)
}

function ie(e) {
  return e.origin === "null" || e.protocol === "blob:" ? void 0 : e.origin
}

function FTo(e) {
  let r = URL.parse(e)?.protocol;
  return r === "http:" || r === "https:" || r === "ws:" || r === "wss:"
}

function Le(e, r) {
  if (!FTo(r)) return !1;
  let n = LUt(r);
  if (URL.parse(n.scheme + n.authority)?.host !== URL.parse(r)?.host) return !1;
  if (URL.canParse(e) && !FTo(e)) return !1;
  let t = LUt(e, $ln(e));
  return t.scheme !== "" || Mtt(t.authority).every((s) => s === "")
}
export {
  ran,
  QXi,
  QVe,
  PV,
  ZVe,
  IUt,
  wp,
  $jn,
  u0s,
  ZXi,
  Ujn,
  R_t,
  Wet,
  eJi,
  f0s,
  $u,
  xSe,
  tJi,
  nJi,
  kDr,
  vDr,
  rJi,
  oan,
  dpe,
  oJi,
  MUt,
  eKe,
  EDr,
  TDr,
  san,
  A_t,
  tKe,
  jFe,
  CDr,
  J3,
  DUt,
  RDr,
  sJi,
  iJi,
  p0s,
  aJi,
  NTo,
  hAe,
  Bjn,
  WFe,
  lJi,
  CJ,
  oj,
  dJi,
  Rie,
  x_t,
  m0s,
  ADr,
  PSe,
  xDr,
  PDr,
  LUt,
  FTo
};
