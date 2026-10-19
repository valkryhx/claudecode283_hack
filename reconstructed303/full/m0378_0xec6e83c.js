// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  L,
  at,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  O,
  qs,
  nt
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  fv
} from "B:/~BUN/root/chunk-pej55jax.js";
import {
  aB,
  zC,
  Kg,
  Et,
  QIe,
  wn,
  np,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  gFo,
  Qcn,
  Nyt,
  W2s
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  qM,
  ZH,
  SW,
  yA,
  oQe,
  F3n,
  H3n,
  Rl,
  sp,
  CNo,
  fyt
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  Pf,
  FK,
  zv,
  Oke
} from "B:/~BUN/root/chunk-cw2ph5fw.js";
import {
  $0e,
  Tn
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  o,
  T,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function rXe(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential"
}

function SFt() {
  return Et() || fe()
}

function fe() {
  if (fv() !== "env-quad") return !1;
  try {
    return aB() && QIe()
  } catch {
    return !1
  }
}

function wFt() {
  return !Et() && fe()
}

function Hmt() {
  let {
    info: e,
    storeBearerOnly: n
  } = Qqn();
  if (!n || e === void 0) return e;
  return zC() === "store" ? e : void 0
}

function Qqn() {
  let e = wn();
  if (e !== void 0) return {
    info: e,
    storeBearerOnly: !1
  };
  return wFt() ? {
    info: np(),
    storeBearerOnly: !0
  } : {
    info: void 0,
    storeBearerOnly: !1
  }
}
async function xke(e) {
  let {
    info: n,
    storeBearerOnly: t
  } = Qqn();
  if (!t || n === void 0) return n;
  return await Kg(e) === "store" ? n : void 0
}

function Hh(e) {
  return de() ? `This session could not reach Artifacts: ${e}` : `Not authenticated \u2014 run /login (${e})`
}

function BE() {
  return E("tengu_cobalt_plinth_sedge", !1)
}
var Mae = "public_unasked",
  xin = "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";
var qHs = "[a-z][a-z_-]{0,31}",
  oXe = new RegExp("^[a-z][a-z_-]{0,31}$");
var BT = "live-doc",
  rte = "index.html";
var Xxo = 128,
  Jxo = 32,
  ye = /^[A-Za-z0-9_.-]{1,128}$/,
  z = 64,
  Le = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  K = `${Le}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  be = "\u2026\u22EF\uFE19",
  ie = new RegExp(`^(?:[<>\\\\${be}]|[${K}]|[^ \\P{Z}]|\\p{C})$`, "u");

function _e(e) {
  let n = Array.from(e).length - 1,
    t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return t = r, i
  }
}

function Te(e) {
  let n = _e(e),
    t = -1;
  return (r) => (t++, n(r, t) || ie.test(r))
}
var Me = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  Pe = new RegExp(`^(?![${K}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${K}\\p{M}])?\\p{M}*$`, "su"),
  Ie = /\p{Bidi_Control}/u,
  je = new RegExp(`\\p{M}(?:[${K}]*\\p{M}){8}`, "u"),
  pe = new RegExp(`[ ${K}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  V = ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  De = new RegExp(`^host[${V}]`, "iu"),
  ve = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  He = new RegExp(`^host.*[${ve}]`, "iu"),
  ze = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  Ke = new RegExp(`(?:^|[^a-z])host[${V}]|[${V}]host(?:$|[^a-z])`, "iu"),
  Ue = new RegExp(`^[^\\p{L}]*[${V}]host(?:$|[^a-z])`, "iu"),
  Be = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  We = new RegExp(`(?![${ve}])[${V}]`, "gu"),
  Ae = new RegExp(`["<>\\\\\`${K}${be}]|${qM.source}|${ZH.source}`, "gu"),
  Ge = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${Ae.source}`, "gu");

function Ve(e) {
  let n = e.normalize("NFD"),
    t = ze.test(n),
    r = n.replace(pe, "");
  return ge(r, t) || ge(r.replace(We, ":").normalize("NFKC").replace(pe, ""), t)
}

function ge(e, n) {
  return De.test(e) || He.test(e) || n && Ke.test(e) || Ue.test(e)
}

function X(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map((n) => `\\u${n.charCodeAt(0).toString(16).padStart(4,"0")}`).join("")
}

function Zqn(e) {
  return Array.from(e).length <= z && !e.startsWith(" ") && !e.endsWith(" ") && Me.test(e) && Pe.test(e) && !Ie.test(e) && !Be.test(e) && !je.test(e) && !Ve(e) && !e.startsWith($0e) && !e.startsWith("mcp__") && Vt(e) === null
}

function tm(e, n) {
  if (typeof e === "string" && Zqn(e)) return Rl(e.replace(Ae, X));
  let t = n?.max ?? z,
    r = e,
    s = !1;
  if (typeof e === "string")({
    text: r,
    cut: s
  } = Re(e, Te(e), t));
  let i = Rl(sp(gh(r, {
    ...n,
    max: t
  }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, X) ?? "?");
  return s ? `${i}\u2026` : i
}

function eKn(e) {
  return Rl(qs(e, z).replace(Ge, X))
}

function sXe(e) {
  return e.declarable !== !1 && Zqn(e.server)
}
var Ye = ["name", "connector", "id", "display_name"];

function W() {
  return {
    ok: !1,
    unresolved: [],
    internal: [],
    malformed: [],
    oversized: [],
    serverCount: null
  }
}

function LK(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e)
}

function tKn(e) {
  return we(e, "rules")
}

function KHs(e) {
  return we(e, "scopes")
}

function Qxo(e) {
  return e.every((n) => typeof n === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(n))
}

function YHs(e) {
  if (!LK(e)) return !1;
  let {
    scopes: n,
    ...t
  } = e;
  return Object.keys(t).length === 0 && (n === void 0 || Array.isArray(n) && Qxo(n))
}

function we(e, n) {
  if (!LK(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0
}
var xIr = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/,
  PIr = new Set(["view", "interact", "admin", "owner"]);

function XHs(e) {
  if (!LK(e)) return !1;
  let {
    rules: n,
    wake: t,
    ...r
  } = e;
  return Object.keys(r).length === 0 && (n === void 0 || Array.isArray(n) && Zxo(n)) && (t === void 0 || Array.isArray(t) && t.every((s) => typeof s === "string" && xIr.test(s)))
}

function Zxo(e) {
  return e.every((n) => {
    if (!LK(n)) return !1;
    let {
      path: t,
      read: r,
      write: s,
      ...i
    } = n;
    return Object.keys(i).length === 0 && typeof t === "string" && (t === "" || xIr.test(t)) && (r === void 0 || typeof r === "string" && PIr.has(r)) && (s === void 0 || typeof s === "string" && PIr.has(s))
  })
}

function U(e) {
  try {
    return LK(e) ? e : void 0
  } catch {
    return null
  }
}

function Ee(e) {
  return Array.isArray(e) && e.every((n) => typeof n === "string")
}

function qe(e) {
  return Ee(e) ? e : null
}

function se(e) {
  return [...e].filter((n) => ye.test(n))
}

function J(e) {
  return Vt(e) === null ? e : e.toLowerCase()
}

function ePo(e, n, t, r = {}) {
  let s = e.mcp;
  if (s === void 0) return {
    ok: !0,
    caps: e,
    warnings: [],
    servers: [],
    renamed: []
  };
  let i = LK(s) ? s.servers : !1;
  if (i === !1 || i != null && !Array.isArray(i)) return {
    ...W(),
    malformed: [{
      kind: "not_object"
    }]
  };
  if (LK(s) && s.dynamic !== void 0 && typeof s.dynamic !== "boolean") return {
    ...W(),
    malformed: [{
      kind: "dynamic_not_boolean"
    }]
  };
  if (i == null || i.length === 0) {
    if (LK(s) && TFt(s)) return {
      ok: !0,
      caps: {
        ...e,
        mcp: {
          ...s,
          servers: []
        }
      },
      warnings: [],
      servers: [],
      renamed: []
    };
    return {
      ...W(),
      malformed: [{
        kind: "no_servers"
      }]
    }
  }
  let l = new Map(n.map((g) => [J(g.toolPrefix), g])),
    c = new Map(n.map((g) => [g.server, g])),
    p = [],
    m = [],
    a = [],
    b = [],
    y = new Map,
    S = new Map,
    k = [],
    I = [];
  for (let [g, h] of i.entries()) {
    let d = Y(h);
    if (d === void 0) {
      let _ = h !== null && typeof h === "object" ? Ye.find((P) => (P in h)) ?? null : null;
      a.push({
        kind: "entry_shape",
        index: g,
        wrongKey: _
      });
      continue
    }
    let A = l.get(J(d)),
      M = LK(h) ? h.tools : void 0,
      x = qe(M);
    if (M === void 0 || x?.length === 0) {
      let _ = A ?? c.get(d);
      a.push({
        kind: "no_tools",
        server: d,
        display: A !== void 0 && sXe(A) ? A.server : null,
        available: se(_?.toolNames ?? [])
      })
    } else if (x === null) a.push({
      kind: "tools_shape",
      server: d
    });
    let R = iXe(d),
      q = R === void 0 ? void 0 : l.get(J(R)),
      B = R === void 0 ? null : Qcn(R),
      N = null,
      ce = c.get(d);
    if (A !== void 0) {
      if (!sXe(A)) a.push({
        kind: "undeclarable_name",
        server: d,
        name: A.server
      });
      else if (Vt(d) !== null) a.push({
        kind: "known_id",
        server: d,
        display: A.server
      });
      else if (N = A.server, d !== A.server) y.set(d, A.server)
    } else if (ce !== void 0)
      if (sXe(ce)) N = d;
      else a.push({
        kind: "undeclarable_name",
        server: d,
        name: d
      });
    else if (d.startsWith($0e)) p.push(d);
    else if (d.startsWith("mcp__")) {
      let _ = l.get(J(nt(d.slice(5), "__")));
      a.push({
        kind: "tool_name",
        server: d,
        display: _ !== void 0 && sXe(_) ? _.server : null
      })
    } else if (Vt(d) !== null) a.push({
      kind: "opaque_id",
      server: d
    });
    else if (q !== void 0) a.push(sXe(q) ? {
      kind: "connector_as_host",
      server: d,
      display: q.server
    } : {
      kind: "undeclarable_name",
      server: d,
      name: q.server
    });
    else if (R !== void 0 && Vt(R) !== null) a.push({
      kind: "opaque_id",
      server: d
    });
    else if (R !== void 0 && r.hostServers === !1) a.push({
      kind: "host_unavailable",
      server: d
    });
    else if (B !== null) {
      let _ = (w) => Nyt(w, B) || Nyt(nt(`${Tn(w)}__`, "__"), B) || Nyt(Se(w), B),
        P = t.find(_) ?? n.find((w) => _(w.server))?.server;
      if (P === void 0) N = `host:${B}`;
      else a.push({
        kind: "local_server_as_first_party",
        server: d,
        local: P
      })
    } else if (W2s(R ?? "")) m.push(d);
    else {
      N = d;
      let _ = R === void 0 ? Ze(d, n) : void 0;
      if (_ !== void 0 && !S.has(d)) S.set(d, _)
    }
    if (N !== null && x !== null && x.length > 0 && LK(h)) {
      let _ = new Set(n.flatMap((w) => w.server === N && sXe(w) ? w.toolNames ?? [] : [])),
        P = x;
      if (_.size > 0) {
        P = x.map((j) => {
          if (_.has(j)) return j;
          let Z = [..._].filter((Fe) => Tn(Fe) === j);
          if (Z.length !== 1 || !ye.test(Z[0])) return j;
          return k.push([j, Z[0]]), Z[0]
        });
        let w = L(P.filter((j) => !_.has(j)));
        if (w.length > 0 && w.length === L(P).length) {
          a.push({
            kind: "unknown_tools",
            server: d,
            display: d === N ? null : N,
            unknown: w,
            available: se(_)
          });
          continue
        }
        if (w.length > 0) I.push({
          server: N,
          unknown: w,
          known: se(_)
        })
      }
      b.push({
        ...h,
        server: N,
        tools: P
      })
    }
  }
  if (p.length > 0 || m.length > 0 || a.length > 0) return {
    ...W(),
    unresolved: p,
    internal: m,
    malformed: a
  };
  let v = [],
    H = new Map;
  for (let g of b) {
    let h = H.get(g.server);
    if (h === void 0) H.set(g.server, {
      idx: v.length,
      from: 1
    }), v.push(g);
    else {
      h.from++;
      let d = v[h.idx];
      v[h.idx] = {
        ...d,
        tools: L([...d.tools, ...g.tools])
      }
    }
  }
  let F = [];
  if (y.size > 0) {
    let g = AM([...y], 8, ([h, d]) => `"${gh(h)}" \u2192 "${tm(d)}"`).join(", ");
    F.push(`resolved ${O(y.size,"a connector name","connector names")} to the display ${O(y.size,"name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size===1?"that name":"those names"} to callTool(\u2026) / watchTool(\u2026).`)
  }
  if (S.size > 0) {
    let g = AM([...S], 8, ([h, d]) => `"${tm(h)}" (closest here: "${tm(d)}")`).join(", ");
    F.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`)
  }
  if (k.length > 0) {
    let g = L(k.map(([h, d]) => `"${tm(h)}" \u2192 "${tm(d)}"`));
    F.push(`rewrote mcp tool ${O(g.length,"name")} to the upstream ${O(g.length,"spelling")} viewers call \u2014 ${AM(g,8,(h)=>h).join(", ")}; the page must pass exactly ${g.length===1?"that name":"those names"} to callTool(\u2026) / watchTool(\u2026).`)
  }
  for (let {
      server: g,
      unknown: h,
      known: d
    }
    of I) {
    let A = AM(h, 8, (R) => `"${tm(R)}"`).join(", "),
      M = h.length === 1 ? "it" : "them",
      x = d.length === 0 ? "" : ` (its tools here: ${AM(d,12,(R)=>`"${tm(R)}"`).join(", ")})`;
    F.push(`connector "${tm(g)}" has no ${O(h.length,"tool")} named ${A} in this session${x}, so the page's calls to ${M} fail for any viewer whose "${tm(g)}" lacks ${M} too \u2014 "tools" takes the connector's own top-level tool names; if ${M==="it"?"that name is":"those names are"} wrong, fix "tools" and publish again.`)
  }
  let oe = [];
  for (let [g, h] of H) {
    let d = v[h.idx].tools.length,
      A = Qcn(iXe(g) ?? "") !== null;
    if (h.from > 1 && !A) {
      let M = tm(g),
        x = vFt(g);
      F.push(`${h.from} manifest entries resolve to ${x} "${M}" and were merged into one (${d} ${O(d,"tool")}). A viewer with more than one ${x} named "${M}" gets server_ambiguous on every call until the duplicates are renamed or removed.`)
    }
    if (d > Xxo) oe.push({
      server: g,
      toolCount: d
    })
  }
  let le = v.length > Jxo ? v.length : null;
  if (oe.length > 0 || le !== null) return {
    ...W(),
    oversized: oe,
    serverCount: le
  };
  return {
    ok: !0,
    caps: {
      ...e,
      mcp: {
        ...s,
        servers: v
      }
    },
    warnings: F,
    servers: v.map((g) => g.server),
    renamed: [...y]
  }
}

function tPo(e, n, t = 8) {
  let r = new Set(n),
    s = new Set,
    i = [],
    l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let c of e)
    for (let p of c.matchAll(l)) {
      let m = p[1] ?? p[2];
      if (r.has(m) || s.has(m)) continue;
      if (s.add(m), i.push(m), i.length >= t) return i
    }
  return i
}

function Q(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim()
}

function Ze(e, n) {
  let t = n.filter(sXe),
    r = Q(e);
  if (t.some((a) => Q(a.server) === r)) return;
  let s = (a) => a.replace(/[^\p{L}\p{N}]/gu, ""),
    i = (a) => a.split(/[^\p{L}\p{N}]+/u).filter((b) => b.length >= 3),
    l = s(r);
  if (l.length < 3) return;
  let c = t.find((a) => s(Q(a.server)) === l);
  if (c !== void 0) return c.server;
  let p = i(r),
    m;
  for (let a of t) {
    let b = i(Q(a.server)),
      [y, S] = b.length <= p.length ? [b, p] : [p, b];
    if (y.length > 0 && y.every((k) => S.includes(k)) && (m === void 0 || y.length > m.shared)) m = {
      server: a.server,
      shared: y.length
    }
  }
  return m?.server
}

function JHs(e, n) {
  return n.filter(([t]) => e.some((r) => [`'${t}'`, `"${t}"`, `\`${t}\``].some((s) => r.includes(s))))
}

function QHs(e) {
  let n = e.mcp;
  if (!Ne(n)) return [];
  return n.servers.map(Y).filter((t) => t !== void 0 && t.startsWith($0e))
}

function ZHs(e, n, t) {
  let r = e.mcp,
    s = TFt(r) ? [an] : [];
  if (!Ne(r)) return s;
  let i = L(r.servers.map(Y).filter((c) => c !== void 0)),
    l = (c) => t.has(c) && !gFo.has(c) && !n.some((p) => p.toolPrefix === c);
  return i.filter((c) => {
    let p = iXe(c);
    if (p !== void 0) {
      let m = Qcn(p);
      return m === null ? !l(p) : ![...t].some((a) => Qcn(a) === m && l(a))
    }
    return !t.has(c) && !l(Se(c)) && !n.some((m) => m.server === c && t.has(m.toolPrefix))
  }).map((c) => {
    let p = tm(c);
    return `This page declares ${vFt(c)} "${p}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${p}" integration is unverified.`
  }).concat(s)
}

function Se(e) {
  return Tn(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "")
}

function Y(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0
}

function Kj(e) {
  return ae(e) && Object.keys(e).length > 0
}

function ae(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e)
}

function ee(e) {
  let n = Qe(e);
  return ae(n) ? n : e
}

function D(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    writable: !0,
    configurable: !0
  })
}

function nPo(e, n) {
  let t = ee(e ?? {}),
    r = ee(n ?? {}),
    s = {
      ...t
    },
    i = !1,
    l = !1;
  for (let [c, p] of Object.entries(r))
    if (Object.hasOwn(t, c)) l ||= !te(t[c], p);
    else D(s, c, p), i = !0;
  return {
    capabilities: i ? s : e,
    widened: i,
    conflict: l
  }
}
var $mt = "0.0.0";
class Ce {
  served = void 0
}
var ue = new at(() => new Ce);

function nKn(e, n) {
  ue.of(e).served = n
}

function e$s(e) {
  return ue.peek(e)?.served
}

function t$s(e) {
  ue.of(e).served = void 0
}
var rKn = "host";

function oKn(e, n, t) {
  let r = e.features;
  return r !== void 0 && Object.hasOwn(r, n) && Object.hasOwn(r[n] ?? {}, t)
}
var OIr = /^host:([A-Za-z0-9_-]{1,64})$/;

function iXe(e) {
  return OIr.exec(e)?.[1]
}

function vFt(e) {
  return iXe(e) === void 0 ? "connector" : "local server"
}
var rPo = "CLAUDE_ARTIFACT_HOST_GRANT",
  Je = f(() => u({
    v: C(1),
    servers: T(u({
      server: o().regex(OIr),
      tools: T(o())
    }))
  }));

function aXe(e) {
  if (e === void 0) return {
    kind: "absent"
  };
  let n;
  try {
    n = JSON.parse(e)
  } catch {
    return {
      kind: "unreadable"
    }
  }
  let t = Je().safeParse(n);
  if (!t.success) return {
    kind: "unreadable"
  };
  let r = new Map;
  for (let s of t.data.servers) {
    let i = r.get(s.server) ?? new Set;
    for (let l of s.tools) i.add(l);
    r.set(s.server, i)
  }
  return {
    kind: "granted",
    tools: r
  }
}

function G(e) {
  return e.flatMap((n) => {
    let t = Y(n);
    return t === void 0 ? [] : [t]
  })
}

function IIr(e, n) {
  let t = e.mcp;
  if (!LK(t) || !Array.isArray(t.servers)) return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: []
  };
  let r = t.servers;
  if (n.kind === "absent") return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: G(r)
  };
  let s = L(G(r).filter((c) => iXe(c) !== void 0));
  if (s.length === 0) return {
    ok: !0,
    caps: e,
    dropped: [],
    servers: G(r)
  };
  if (n.kind === "unreadable") return {
    ok: !1,
    refused: s
  };
  let i = [],
    l = [];
  for (let c of r) {
    let p = Y(c);
    if (p === void 0 || iXe(p) === void 0) {
      l.push(c);
      continue
    }
    let m = n.tools.get(p);
    if (m === void 0 || !LK(c)) {
      i.push({
        server: p,
        tool: null
      });
      continue
    }
    let a = c.tools;
    if (!Ee(a)) {
      i.push({
        server: p,
        tool: null
      });
      continue
    }
    let b = a.filter((y) => m.has(y));
    for (let y of a)
      if (!m.has(y)) i.push({
        server: p,
        tool: y
      });
    if (b.length > 0) l.push({
      ...c,
      tools: b
    })
  }
  if (i.length === 0) return {
    ok: !0,
    caps: e,
    dropped: i,
    servers: G(r)
  };
  if (l.length === 0) {
    let {
      mcp: c,
      ...p
    } = e;
    return {
      ok: !0,
      caps: p,
      dropped: i,
      servers: []
    }
  }
  return {
    ok: !0,
    caps: {
      ...e,
      mcp: {
        ...t,
        servers: l
      }
    },
    dropped: i,
    servers: G(l)
  }
}
var P3 = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;

function n$s(e, n) {
  if (!P3.test(e) || !P3.test(n)) return !1;
  let t = e.split(".").map(Number),
    r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++)
    if (t[s] !== r[s]) return t[s] > r[s];
  return !1
}
var NK = /^[a-z][a-z0-9]{0,23}$/;

function DH(e) {
  return typeof e === "string" && e !== $mt && P3.test(e) ? e : null
}

function r$s(e, n) {
  if (n.version === $mt) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter((r) => !t.has(r))
}
var Ex = "artifact",
  LH = "self";

function o$s(e) {
  return e !== void 0 && (Object.hasOwn(e, Ex) || Object.hasOwn(e, LH))
}

function ne(e) {
  let n = zv(e);
  if (n === Pf) return;
  if (n !== void 0) {
    let t = n.map((r) => ne(r));
    return t.includes(void 0) ? void 0 : `[${t.join(",")}]`
  }
  if (e !== null && typeof e === "object") {
    let t = e,
      r = Object.keys(t).sort().map((s) => {
        let i = ne(t[s]);
        return i === void 0 ? void 0 : `${JSON.stringify(s)}:${i}`
      });
    return r.includes(void 0) ? void 0 : `{${r.join(",")}}`
  }
  return JSON.stringify(e) ?? "null"
}

function te(e, n) {
  let t = ne(e);
  return t !== void 0 && t === ne(n)
}

function oPo(e) {
  if (!Object.hasOwn(e, Ex)) return e;
  if (Object.hasOwn(e, LH)) {
    if (!te(e[Ex], e[LH])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e))
      if (r !== Ex) D(t, r, s);
    return t
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) D(n, t === Ex ? LH : t, r);
  return n
}

function Qe(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let n = e;
  if (!Object.hasOwn(n, LH)) return e;
  if (Object.hasOwn(n, Ex) && !te(n[Ex], n[LH])) return e;
  let t = {};
  for (let [r, s] of Object.entries(n)) {
    if (r === LH) {
      if (!Object.hasOwn(n, Ex)) D(t, Ex, s);
      continue
    }
    D(t, r, s)
  }
  return t
}

function s$s(e, n) {
  let t = Object.hasOwn(e, Ex),
    r = Object.hasOwn(e, LH);
  if (!t && !r || n.version === $mt) return {
    caps: e
  };
  let s = new Set(n.capabilities),
    i = s.has(Ex) ? Ex : s.has(LH) ? LH : null;
  if (i === null) return {
    caps: e
  };
  if (t && r) {
    if (!te(e[Ex], e[LH])) return {
      errMsg: "capabilities declares both `artifact` and `self` \u2014 two " + "spellings of the same capability \u2014 with different configs. " + "Declare it once (canonically `artifact: {}`)."
    }
  }
  let l = {};
  for (let [c, p] of Object.entries(e)) {
    if (c === Ex || c === LH) {
      if (!Object.hasOwn(l, i)) D(l, i, p);
      continue
    }
    D(l, c, p)
  }
  return {
    caps: l
  }
}

function kFt(e) {
  return "capabilities" in e ? e.capabilities : void 0
}
var re = new Set([Ex, LH, "downloads", "comments", "room", "db", "assets", "user"]);

function sPo(e) {
  return Oe(e, re)
}
var ke = new Set([...re, "mcp", "flags"]);

function iPo(e) {
  return Oe(e, ke)
}

function i$s(e) {
  return e.every((n) => ke.has(n))
}

function Oe(e, n) {
  return e == null || ae(e) && Object.keys(e).every((t) => n.has(t))
}
var Xe = new RegExp(`^${qM.source}$`, "u");

function en(e) {
  return CNo.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !Xe.test(e) && !oQe(e.codePointAt(0) ?? 0) && !ie.test(e)
}

function nn(e) {
  let n = Array.from(e).slice(0, z + 1),
    t = n.length,
    r = n.map(en),
    s = n.map((a, b) => r[b] || /^\p{M}$/u.test(a) || oQe(a.codePointAt(0) ?? 0)),
    i = n.map((a, b) => !r[b] && /^[\p{L}\p{N}]$/u.test(a)),
    l = Array(t).fill(!1),
    c = Array(t).fill(!1),
    p = !1;
  for (let a = 0; a < t; a++) l[a] = p, p = i[a] || s[a] && p;
  p = !1;
  for (let a = t - 1; a >= 0; a--) c[a] = p, p = i[a] || s[a] && p;
  let m = new Set;
  for (let a = 0; a < t; a++)
    if (r[a] && l[a] && c[a]) m.add(a);
  return m
}

function tn(e) {
  let n = nn(e),
    t = _e(e),
    r = "none",
    s = -1;
  return (i) => {
    s++;
    let l = i.codePointAt(0) ?? 0;
    if (t(i, s)) return r = "none", !0;
    if (n.has(s)) return r = "none", !0;
    if (oQe(l)) {
      let c = H3n(l, r);
      return r = c.after, !c.rides
    }
    if (ie.test(i)) return r = "none", !0;
    return r = F3n(i), !1
  }
}

function Re(e, n, t) {
  let r = [],
    s = 0;
  for (let i of e) {
    let l = n(i) ? X(i) : i,
      c = l === i ? 1 : l.length;
    if (s + c > t) return {
      text: r.join(""),
      cut: !0
    };
    r.push(l), s += c
  }
  return {
    text: r.join(""),
    cut: !1
  }
}

function rn(e) {
  let n = e,
    t = !1;
  if (typeof e === "string")({
    text: n,
    cut: t
  } = Re(e, tn(e), z));
  let r = fyt((sp(gh(n, {
    max: z
  })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return t ? `${r}\u2026` : r
}

function MIr(e) {
  if (!e) return "";
  let n = [],
    t = [],
    r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? $e(b) : void 0,
      S = a === "mcp" && TFt(b);
    if (y === Pf) r = S ? `${EFt} + ${FK}` : FK, n.unshift("mcp");
    else if (y !== void 0 && y.length > 0) {
      let k = AM(y, 8, (I) => {
        let v = U(I),
          H = v === null ? Pf : zv(v?.tools),
          F = he(H) ?? 0;
        return `${rn(v?.server)}[${H===Pf?"?":F} ${O(F,"tool")}]`
      }).join(", ");
      r = S ? `${EFt} + ${k}` : k, n.unshift("mcp")
    } else if (S) r = EFt, n.unshift("mcp");
    else if (re.has(a)) {
      let k = U(b),
        I = k === null ? Pf : zv(k?.rules),
        v = he(I);
      t.push(I === void 0 ? a : `${a}[${I===Pf?"?":v} ${O(v??0,"rule")}]`)
    } else n.push(NK.test(a) ? a : xe)
  }
  let s = n.length + t.length;
  if (s === 0) return "";
  let i = [...n, ...t.slice(0, Math.max(0, 8 - n.length))],
    l = s > 8 ? `[${s} total]; ` : "",
    c = l + i.join("; ");
  if (r !== void 0) {
    let a = i.slice(1).join("; "),
      b = a === "" ? "" : "; ",
      y = Math.max(16, 400 - Array.from(l + a + b).length - 6),
      S = Array.from(r),
      k = S.length > y ? S.slice(0, y).join("") + "\u2026" : r;
    c = `${l}mcp: ${k}${b}${a}`
  }
  let p = Array.from(c);
  return ` (${p.length>400?p.slice(0,400).join("")+"\u2026":p.join("")})`
}

function a$s(e, n) {
  let t = ee(e ?? {}),
    r = Object.keys(ee(n ?? {})).filter((l) => !Object.hasOwn(t, l)),
    s = (l) => l === "mcp" ? 0 : re.has(l) ? 2 : 1,
    i = r.sort((l, c) => s(l) - s(c)).map((l) => NK.test(l) ? l : xe);
  if (!r.includes("mcp")) {
    if (TFt(n?.mcp) && !TFt(e?.mcp)) i.unshift(sn);
    else if (un(e?.mcp, n?.mcp)) i.unshift(on)
  }
  return i
}
var xe = "invalid-name",
  on = "mcp (more servers or tools)",
  EFt = "any connector the viewer approves",
  sn = `mcp (${EFt})`,
  an = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";

function TFt(e) {
  return U(e)?.dynamic === !0
}

function un(e, n) {
  if (n === void 0) return !1;
  let t = me(n);
  if (t === void 0) return !0;
  let r = new Map;
  for (let s of me(e) ?? []) {
    let i = U(s),
      l = i?.server;
    if (typeof l === "string") r.set(l, new Set(Oke(i?.tools) ?? []))
  }
  return t.some((s) => {
    let i = U(s),
      l = i?.server,
      c = typeof l === "string" ? r.get(l) : void 0,
      p = Oke(i?.tools);
    return c === void 0 || p === void 0 || p.some((m) => !c.has(m))
  })
}

function $e(e) {
  let n = U(e);
  return n === null ? Pf : n === void 0 ? void 0 : zv(n.servers)
}

function me(e) {
  let n = $e(e);
  return n === Pf ? void 0 : n
}

function he(e) {
  return e === void 0 || e === Pf ? void 0 : e.length
}

function AM(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [`[${e.length} total]`, ...e.slice(0, n).map(t)]
}

function Ne(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0
}

function gh(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64,
    r = Array.from(e.slice(0, 2 * t), (s) => yA(s.codePointAt(0) ?? 0) ? " " : s).slice(0, t).join("").replace(SW, " ").replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r
}

function Pin(e, n) {
  let t = gh(e, {
    max: n
  }).replace(SW, " ").trim();
  return t !== "" && t !== "?" ? t : void 0
}
export {
  rXe,
  SFt,
  wFt,
  Hmt,
  Qqn,
  xke,
  Hh,
  BE,
  Mae,
  xin,
  qHs,
  oXe,
  BT,
  rte,
  Xxo,
  Jxo,
  Zqn,
  tm,
  eKn,
  sXe,
  LK,
  tKn,
  KHs,
  Qxo,
  YHs,
  xIr,
  PIr,
  XHs,
  Zxo,
  ePo,
  tPo,
  JHs,
  QHs,
  ZHs,
  Kj,
  nPo,
  $mt,
  nKn,
  e$s,
  t$s,
  rKn,
  oKn,
  OIr,
  iXe,
  vFt,
  rPo,
  aXe,
  IIr,
  P3,
  n$s,
  NK,
  DH,
  r$s,
  Ex,
  LH,
  o$s,
  oPo,
  s$s,
  kFt,
  sPo,
  iPo,
  i$s,
  MIr,
  a$s,
  EFt,
  TFt,
  AM,
  gh,
  Pin
};
