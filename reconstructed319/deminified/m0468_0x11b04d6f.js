// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { P, Oi, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { OE } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { Ftt } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { AA, kE, Tm, Rt, mV, hn, Yd, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { kLs, CWn, nBt, r7i } from "B:/~BUN/root/chunk-5az22yft.js";
import { rN, sj, M4, AO, U_t, QDr, ZDr, Jd, pH, hLs, G_t } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Op, yX, bw, Eue } from "B:/~BUN/root/chunk-jxvayzd7.js";
import { rG, bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { o, C, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function Dmt(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential";
}
function gGe() {
  return Rt() || ge();
}
function ge() {
  if (OE() !== "env-quad") return !1;
  try {
    return AA() && mV();
  } catch {
    return !1;
  }
}
function Nen() {
  return !Rt() && ge();
}
function yGe() {
  let {
    info: info,
    storeBearerOnly: storeBearerOnly
  } = cEr();
  if (!storeBearerOnly || info === void 0) return info;
  return kE() === "store" ? info : void 0;
}
function cEr() {
  let info_2 = hn();
  if (info_2 !== void 0) return {
    info: info_2,
    storeBearerOnly: !1
  };
  return Nen() ? {
    info: Yd(),
    storeBearerOnly: !0
  } : {
    info: void 0,
    storeBearerOnly: !1
  };
}
async function DLe(e) {
  let {
    info: info_3,
    storeBearerOnly: storeBearerOnly_2
  } = cEr();
  if (!storeBearerOnly_2 || info_3 === void 0) return info_3;
  return (await Tm(e)) === "store" ? info_3 : void 0;
}
function Tb(e) {
  return q() ? `This session could not reach Artifacts: ${e}` : `Not authenticated \u2014 run /login (${e})`;
}
function wA() {
  return v("tengu_cobalt_plinth_sedge", !1);
}
var x_e = "public_unasked",
  kNn = "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";
var A1i = "[a-z][a-z_-]{0,31}",
  regExp = new RegExp("^[a-z][a-z_-]{0,31}$");
function W2(e) {
  return e !== void 0 && e !== null && e !== !1;
}
var Nmt = "markReads";
var fR = "live-doc",
  vue = "index.html";
var Jws = 128,
  Qws = 32,
  _e = /^[A-Za-z0-9_.-]{1,128}$/,
  max_2 = 64,
  Me = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  U = `${Me}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  ve = "\u2026\u22EF\uFE19",
  regExp_2 = new RegExp(`^(?:[<>\\\\${ve}]|[${U}]|[^ \\P{Z}]|\\p{C})$`, "u");
function Ae(e) {
  let n = Array.from(e).length - 1,
    t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return t = r, i;
  };
}
function Pe(e) {
  let n = Ae(e),
    t = -1;
  return r => (t++, n(r, t) || regExp_2.test(r));
}
var Ie = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  regExp_3 = new RegExp(`^(?![${U}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${U}\\p{M}])?\\p{M}*$`, "su"),
  De = /\p{Bidi_Control}/u,
  regExp_4 = new RegExp(`\\p{M}(?:[${U}]*\\p{M}){8}`, "u"),
  regExp_5 = new RegExp(`[ ${U}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  Y = ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  regExp_6 = new RegExp(`^host[${Y}]`, "iu"),
  we = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  regExp_7 = new RegExp(`^host.*[${we}]`, "iu"),
  Ue = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  regExp_8 = new RegExp(`(?:^|[^a-z])host[${Y}]|[${Y}]host(?:$|[^a-z])`, "iu"),
  regExp_9 = new RegExp(`^[^\\p{L}]*[${Y}]host(?:$|[^a-z])`, "iu"),
  Ge = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  regExp_10 = new RegExp(`(?![${we}])[${Y}]`, "gu"),
  regExp_11 = new RegExp(`["<>\\\\\`${U}${ve}]|${rN.source}|${sj.source}`, "gu"),
  regExp_12 = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${regExp_11.source}`, "gu");
function qe(e) {
  let n = e.normalize("NFD"),
    t = Ue.test(n),
    r = n.replace(regExp_5, "");
  return he(r, t) || he(r.replace(regExp_10, ":").normalize("NFKC").replace(regExp_5, ""), t);
}
function he(e, n) {
  return regExp_6.test(e) || regExp_7.test(e) || n && regExp_8.test(e) || regExp_9.test(e);
}
function ne(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map(item => `\\u${item.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function uEr(e) {
  return Array.from(e).length <= max_2 && !e.startsWith(" ") && !e.endsWith(" ") && Ie.test(e) && regExp_3.test(e) && !De.test(e) && !Ge.test(e) && !regExp_4.test(e) && !qe(e) && !e.startsWith(rG) && !e.startsWith("mcp__") && Nt(e) === null;
}
function gg(e, n) {
  if (typeof e === "string" && uEr(e)) return Jd(e.replace(regExp_11, ne));
  let max = n?.max ?? max_2,
    text = e,
    cut = !1;
  if (typeof e === "string") ({
    text: text,
    cut: cut
  } = $e(e, Pe(e), max));
  let i = Jd(pH(NS(text, {
    ...n,
    max: max
  }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, ne) ?? "?");
  return cut ? `${i}\u2026` : i;
}
function fEr(e) {
  return Jd(Oi(e, max_2).replace(regExp_12, ne));
}
function Fmt(e) {
  return e.declarable !== !1 && uEr(e.server);
}
var Qe = ["name", "connector", "id", "display_name"];
function G() {
  return {
    ok: !1,
    unresolved: [],
    internal: [],
    malformed: [],
    oversized: [],
    serverCount: null
  };
}
function i3(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function pEr(e) {
  return Se(e, "rules");
}
function Zws(e) {
  return Se(e, "scopes");
}
function eks(e) {
  return e.every(item => typeof item === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(item));
}
function tks(e) {
  if (!i3(e)) return !1;
  let {
    scopes: scopes,
    ...t
  } = e;
  return Object.keys(t).length === 0 && (scopes === void 0 || Array.isArray(scopes) && eks(scopes));
}
function Se(e, n) {
  if (!i3(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0;
}
var Fmo = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/,
  Hmo = new Set(["view", "interact", "admin", "owner", "self"]);
function nks(e) {
  if (!i3(e)) return !1;
  let {
    rules: rules,
    wake: wake,
    ...r
  } = e;
  return Object.keys(r).length === 0 && (rules === void 0 || Array.isArray(rules) && rks(rules)) && (wake === void 0 || Array.isArray(wake) && wake.every(item => typeof item === "string" && Fmo.test(item)));
}
function rks(e) {
  return e.every(item => {
    if (!i3(item)) return !1;
    let {
      path: path,
      read: read,
      write: write,
      ...i
    } = item;
    return Object.keys(i).length === 0 && typeof path === "string" && (path === "" || Fmo.test(path)) && (read === void 0 || typeof read === "string" && Hmo.has(read)) && (write === void 0 || typeof write === "string" && Hmo.has(write));
  });
}
function B(e) {
  try {
    return i3(e) ? e : void 0;
  } catch {
    return null;
  }
}
function ke(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function Ze(e) {
  return ke(e) ? e : null;
}
function ae(e) {
  return [...e].filter(item => _e.test(item));
}
function X(e) {
  return Nt(e) === null ? e : e.toLowerCase();
}
function oks(caps, n, t, r = {}) {
  let mcp = caps.mcp;
  if (mcp === void 0) return {
    ok: !0,
    caps: caps,
    warnings: [],
    servers: [],
    renamed: []
  };
  let i = i3(mcp) ? mcp.servers : !1;
  if (i === !1 || i != null && !Array.isArray(i)) return {
    ...G(),
    malformed: [{
      kind: "not_object"
    }]
  };
  if (i3(mcp) && mcp.dynamic !== void 0 && typeof mcp.dynamic !== "boolean") return {
    ...G(),
    malformed: [{
      kind: "dynamic_not_boolean"
    }]
  };
  if (i == null || i.length === 0) {
    if (i3(mcp) && $en(mcp)) return {
      ok: !0,
      caps: {
        ...caps,
        mcp: {
          ...mcp,
          servers: []
        }
      },
      warnings: [],
      servers: [],
      renamed: []
    };
    return {
      ...G(),
      malformed: [{
        kind: "no_servers"
      }]
    };
  }
  let l = new Map(n.map(item => [X(item.toolPrefix), item])),
    c = new Map(n.map(item => [item.server, item])),
    unresolved = [],
    internal = [],
    malformed = [],
    b = [],
    y = new Map(),
    k = new Map(),
    R = [],
    I = [];
  for (let [index, h] of i.entries()) {
    let _ = Q(h),
      f = _?.startsWith("host:") ? `host:${Ftt(_.slice(5))}` : _;
    if (f === void 0) {
      let wrongKey = h !== null && typeof h === "object" ? Qe.find(item => item in h) ?? null : null;
      malformed.push({
        kind: "entry_shape",
        index: index,
        wrongKey: wrongKey
      });
      continue;
    }
    let w = l.get(X(Ftt(f))),
      j = i3(h) ? h.tools : void 0,
      x = Ze(j);
    if (j === void 0 || x?.length === 0) {
      let A = w ?? c.get(f);
      malformed.push({
        kind: "no_tools",
        server: f,
        display: w !== void 0 && Fmt(w) ? w.server : null,
        available: ae(A?.toolNames ?? [])
      });
    } else if (x === null) malformed.push({
      kind: "tools_shape",
      server: f
    });
    let F = Hmt(f),
      Z = F === void 0 ? void 0 : l.get(X(F)),
      W = F === void 0 ? null : CWn(F),
      server = null,
      pe = c.get(f);
    if (w !== void 0) {
      if (!Fmt(w)) malformed.push({
        kind: "undeclarable_name",
        server: f,
        name: w.server
      });else if (Nt(f) !== null) malformed.push({
        kind: "known_id",
        server: f,
        display: w.server
      });else if (server = w.server, f !== w.server) y.set(f, w.server);
    } else if (pe !== void 0) {
      if (Fmt(pe)) server = f;else malformed.push({
        kind: "undeclarable_name",
        server: f,
        name: f
      });
    } else if (f.startsWith(rG)) unresolved.push(f);else if (f.startsWith("mcp__")) {
      let A = l.get(X(tt(f.slice(5), "__")));
      malformed.push({
        kind: "tool_name",
        server: f,
        display: A !== void 0 && Fmt(A) ? A.server : null
      });
    } else if (Nt(f) !== null) malformed.push({
      kind: "opaque_id",
      server: f
    });else if (Z !== void 0) malformed.push(Fmt(Z) ? {
      kind: "connector_as_host",
      server: f,
      display: Z.server
    } : {
      kind: "undeclarable_name",
      server: f,
      name: Z.server
    });else if (F !== void 0 && Nt(F) !== null) malformed.push({
      kind: "opaque_id",
      server: f
    });else if (F !== void 0 && r.hostServers === !1) malformed.push({
      kind: "host_unavailable",
      server: f
    });else if (W !== null) {
      let A = S => nBt(S, W) || nBt(tt(`${bn(S)}__`, "__"), W) || nBt(Ce(S), W),
        local = t.find(A) ?? n.find(item => A(item.server))?.server;
      if (local === void 0) server = `host:${W}`;else malformed.push({
        kind: "local_server_as_first_party",
        server: f,
        local: local
      });
    } else if (r7i(F ?? "")) internal.push(f);else {
      server = f;
      let A = F === void 0 ? Xe(f, n) : void 0;
      if (A !== void 0 && !k.has(f)) k.set(f, A);
    }
    if (server !== null && _ !== f && !y.has(f)) y.set(_ ?? f, server);
    if (server !== null && x !== null && x.length > 0 && i3(h)) {
      let A = new Set(n.flatMap(item => item.server === server && Fmt(item) ? item.toolNames ?? [] : [])),
        tools = x;
      if (A.size > 0) {
        tools = x.map(item => {
          if (A.has(item)) return item;
          let J = [...A].filter(Le => bn(Le) === item);
          if (J.length !== 1 || !_e.test(J[0])) return item;
          return R.push([item, J[0]]), J[0];
        });
        let unknown = L(tools.filter(item => !A.has(item)));
        if (unknown.length > 0 && unknown.length === L(tools).length) {
          malformed.push({
            kind: "unknown_tools",
            server: f,
            display: f === server ? null : server,
            unknown: unknown,
            available: ae(A)
          });
          continue;
        }
        if (unknown.length > 0) I.push({
          server: server,
          unknown: unknown,
          known: ae(A)
        });
      }
      b.push({
        ...h,
        server: server,
        tools: tools
      });
    }
  }
  if (unresolved.length > 0 || internal.length > 0 || malformed.length > 0) return {
    ...G(),
    unresolved: unresolved,
    internal: internal,
    malformed: malformed
  };
  let servers = [],
    z = new Map();
  for (let g of b) {
    let h = z.get(g.server);
    if (h === void 0) z.set(g.server, {
      idx: servers.length,
      from: 1
    }), servers.push(g);else {
      h.from++;
      let _ = servers[h.idx];
      servers[h.idx] = {
        ..._,
        tools: L([..._.tools, ...g.tools])
      };
    }
  }
  let warnings = [];
  if (y.size > 0) {
    let g = IF([...y], 8, ([h, _]) => `"${NS(h)}" \u2192 "${gg(_)}"`).join(", ");
    warnings.push(`resolved ${P(y.size, "a connector name", "connector names")} to the display ${P(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  if (k.size > 0) {
    let g = IF([...k], 8, ([h, _]) => `"${gg(h)}" (closest here: "${gg(_)}")`).join(", ");
    warnings.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
  }
  if (R.length > 0) {
    let g = L(R.map(([h, _]) => `"${gg(h)}" \u2192 "${gg(_)}"`));
    warnings.push(`rewrote mcp tool ${P(g.length, "name")} to the upstream ${P(g.length, "spelling")} viewers call \u2014 ${IF(g, 8, h => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  for (let {
    server: server_2,
    unknown: unknown_2,
    known: known
  } of I) {
    let f = IF(unknown_2, 8, x => `"${gg(x)}"`).join(", "),
      w = unknown_2.length === 1 ? "it" : "them",
      j = known.length === 0 ? "" : ` (its tools here: ${IF(known, 12, x => `"${gg(x)}"`).join(", ")})`;
    warnings.push(`connector "${gg(server_2)}" has no ${P(unknown_2.length, "tool")} named ${f} in this session${j}, so the page's calls to ${w} fail for any viewer whose "${gg(server_2)}" lacks ${w} too \u2014 "tools" takes the connector's own top-level tool names; if ${w === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
  }
  let oversized = [];
  for (let [server_3, h] of z) {
    let toolCount = servers[h.idx].tools.length,
      f = CWn(Hmt(server_3) ?? "") !== null;
    if (h.from > 1 && !f) {
      let w = gg(server_3),
        j = Fen(server_3);
      warnings.push(`${h.from} manifest entries resolve to ${j} "${w}" and were merged into one (${toolCount} ${P(toolCount, "tool")}). A viewer with more than one ${j} named "${w}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
    }
    if (toolCount > Jws) oversized.push({
      server: server_3,
      toolCount: toolCount
    });
  }
  let serverCount = servers.length > Qws ? servers.length : null;
  if (oversized.length > 0 || serverCount !== null) return {
    ...G(),
    oversized: oversized,
    serverCount: serverCount
  };
  return {
    ok: !0,
    caps: {
      ...caps,
      mcp: {
        ...mcp,
        servers: servers
      }
    },
    warnings: warnings,
    servers: servers.map(item => item.server),
    renamed: [...y]
  };
}
function sks(e, n, t = 8) {
  let r = new Set(n),
    s = new Set(),
    i = [],
    l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let c of e) for (let d of c.matchAll(l)) {
    let m = d[1] ?? d[2];
    if (r.has(m) || s.has(m)) continue;
    if (s.add(m), i.push(m), i.length >= t) return i;
  }
  return i;
}
function ee(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}
function Xe(e, n) {
  let t = n.filter(Fmt),
    r = ee(e);
  if (t.some(item => ee(item.server) === r)) return;
  let s = a => a.replace(/[^\p{L}\p{N}]/gu, ""),
    i = a => a.split(/[^\p{L}\p{N}]+/u).filter(item => item.length >= 3),
    l = s(r);
  if (l.length < 3) return;
  let c = t.find(item => s(ee(item.server)) === l);
  if (c !== void 0) return c.server;
  let d = i(r),
    m;
  for (let a of t) {
    let b = i(ee(a.server)),
      [y, k] = b.length <= d.length ? [b, d] : [d, b];
    if (y.length > 0 && y.every(item => k.includes(item)) && (m === void 0 || y.length > m.shared)) m = {
      server: a.server,
      shared: y.length
    };
  }
  return m?.server;
}
function x1i(e, n) {
  return n.filter(([t]) => e.some(item => [`'${t}'`, `"${t}"`, `\`${t}\``].some(s => item.includes(s))));
}
function P1i(e) {
  let mcp_2 = e.mcp;
  if (!Te(mcp_2)) return [];
  return mcp_2.servers.map(Q).filter(item => item !== void 0 && item.startsWith(rG));
}
function O1i(e, n, t) {
  let mcp_3 = e.mcp,
    s = $en(mcp_3) ? [dn] : [];
  if (!Te(mcp_3)) return s;
  let i = L(mcp_3.servers.map(Q).filter(item => item !== void 0)),
    l = c => t.has(c) && !kLs.has(c) && !n.some(item => item.toolPrefix === c);
  return i.filter(item => {
    let d = Hmt(item);
    if (d !== void 0) {
      let m = CWn(d);
      return m === null ? !l(d) : ![...t].some(item => CWn(item) === m && l(item));
    }
    return !t.has(item) && !l(Ce(item)) && !n.some(m => m.server === item && t.has(m.toolPrefix));
  }).map(item => {
    let d = gg(item);
    return `This page declares ${Fen(item)} "${d}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${d}" integration is unverified.`;
  }).concat(s);
}
function Ce(e) {
  return bn(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function Q(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0;
}
function $q(e) {
  return le(e) && Object.keys(e).length > 0;
}
function le(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  let n = nn(e);
  return le(n) ? n : e;
}
function H(e, n, value) {
  Object.defineProperty(e, n, {
    value: value,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
}
function iks(e, n) {
  let t = te(e ?? {}),
    r = te(n ?? {}),
    s = {
      ...t
    },
    widened = !1,
    conflict = !1;
  for (let [c, d] of Object.entries(r)) if (Object.hasOwn(t, c)) conflict ||= !se(t[c], d);else H(s, c, d), widened = !0;
  return {
    capabilities: widened ? s : e,
    widened: widened,
    conflict: conflict
  };
}
var HLt = "0.0.0";
class Re {
  served = void 0;
}
var ce = new Je(() => new Re());
function mEr(e, n) {
  ce.of(e).served = n;
}
function I1i(e) {
  return ce.peek(e)?.served;
}
function M1i(e) {
  ce.of(e).served = void 0;
}
var hEr = "host";
function gEr(e, n, t) {
  let features = e.features;
  return features !== void 0 && Object.hasOwn(features, n) && Object.hasOwn(features[n] ?? {}, t);
}
var Oe = /^host:([A-Za-z0-9_-]{1,64})$/;
function Hmt(e) {
  return Oe.exec(e)?.[1];
}
function Fen(e) {
  return Hmt(e) === void 0 ? "connector" : "local server";
}
var aks = "CLAUDE_ARTIFACT_HOST_GRANT",
  en = p(() => u({
    v: T(1),
    servers: C(u({
      server: o().regex(Oe),
      tools: C(o())
    }))
  }));
function $mt(e) {
  if (e === void 0) return {
    kind: "absent"
  };
  let n;
  try {
    n = JSON.parse(e);
  } catch {
    return {
      kind: "unreadable"
    };
  }
  let t = en().safeParse(n);
  if (!t.success) return {
    kind: "unreadable"
  };
  let tools_2 = new Map();
  for (let s of t.data.servers) {
    let i = tools_2.get(s.server) ?? new Set();
    for (let l of s.tools) i.add(l);
    tools_2.set(s.server, i);
  }
  return {
    kind: "granted",
    tools: tools_2
  };
}
function V(e) {
  return e.flatMap(item => {
    let t = Q(item);
    return t === void 0 ? [] : [t];
  });
}
function $mo(caps_2, n) {
  let mcp_4 = caps_2.mcp;
  if (!i3(mcp_4) || !Array.isArray(mcp_4.servers)) return {
    ok: !0,
    caps: caps_2,
    dropped: [],
    servers: []
  };
  let servers_2 = mcp_4.servers;
  if (n.kind === "absent") return {
    ok: !0,
    caps: caps_2,
    dropped: [],
    servers: V(servers_2)
  };
  let refused = L(V(servers_2).filter(item => Hmt(item) !== void 0));
  if (refused.length === 0) return {
    ok: !0,
    caps: caps_2,
    dropped: [],
    servers: V(servers_2)
  };
  if (n.kind === "unreadable") return {
    ok: !1,
    refused: refused
  };
  let dropped = [],
    servers_3 = [];
  for (let c of servers_2) {
    let server_4 = Q(c);
    if (server_4 === void 0 || Hmt(server_4) === void 0) {
      servers_3.push(c);
      continue;
    }
    let m = n.tools.get(server_4);
    if (m === void 0 || !i3(c)) {
      dropped.push({
        server: server_4,
        tool: null
      });
      continue;
    }
    let tools_3 = c.tools;
    if (!ke(tools_3)) {
      dropped.push({
        server: server_4,
        tool: null
      });
      continue;
    }
    let tools_4 = tools_3.filter(item => m.has(item));
    for (let tool of tools_3) if (!m.has(tool)) dropped.push({
      server: server_4,
      tool: tool
    });
    if (tools_4.length > 0) servers_3.push({
      ...c,
      tools: tools_4
    });
  }
  if (dropped.length === 0) return {
    ok: !0,
    caps: caps_2,
    dropped: dropped,
    servers: V(servers_2)
  };
  if (servers_3.length === 0) {
    let {
      mcp: mcp_5,
      ...caps_3
    } = caps_2;
    return {
      ok: !0,
      caps: caps_3,
      dropped: dropped,
      servers: []
    };
  }
  return {
    ok: !0,
    caps: {
      ...caps_2,
      mcp: {
        ...mcp_4,
        servers: servers_3
      }
    },
    dropped: dropped,
    servers: V(servers_3)
  };
}
var dee = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function D1i(e, n) {
  if (!dee.test(e) || !dee.test(n)) return !1;
  let t = e.split(".").map(Number),
    r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++) if (t[s] !== r[s]) return t[s] > r[s];
  return !1;
}
var gX = /^[a-z][a-z0-9]{0,23}$/;
function tz(e) {
  return typeof e === "string" && e !== HLt && dee.test(e) ? e : null;
}
function L1i(e, n) {
  if (n.version === HLt) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter(item => !t.has(item));
}
var nz = "artifact",
  cee = "self";
function re(e) {
  let n = bw(e);
  if (n === Op) return;
  if (n !== void 0) {
    let t = n.map(item => re(item));
    return t.includes(void 0) ? void 0 : `[${t.join(",")}]`;
  }
  if (e !== null && typeof e === "object") {
    let t = e,
      r = Object.keys(t).sort().map(item => {
        let i = re(t[item]);
        return i === void 0 ? void 0 : `${JSON.stringify(item)}:${i}`;
      });
    return r.includes(void 0) ? void 0 : `{${r.join(",")}}`;
  }
  return JSON.stringify(e) ?? "null";
}
function se(e, n) {
  let t = re(e);
  return t !== void 0 && t === re(n);
}
function lks(e) {
  if (!Object.hasOwn(e, nz)) return e;
  if (Object.hasOwn(e, cee)) {
    if (!se(e[nz], e[cee])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e)) if (r !== nz) H(t, r, s);
    return t;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) H(n, t === nz ? cee : t, r);
  return n;
}
function nn(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let n = e;
  if (!Object.hasOwn(n, cee)) return e;
  if (Object.hasOwn(n, nz) && !se(n[nz], n[cee])) return e;
  let t = {};
  for (let [r, s] of Object.entries(n)) {
    if (r === cee) {
      if (!Object.hasOwn(n, nz)) H(t, nz, s);
      continue;
    }
    H(t, r, s);
  }
  return t;
}
function N1i(caps_4, n) {
  let t = Object.hasOwn(caps_4, nz),
    r = Object.hasOwn(caps_4, cee);
  if (!t && !r || n.version === HLt) return {
    caps: caps_4
  };
  let s = new Set(n.capabilities),
    i = s.has(nz) ? nz : s.has(cee) ? cee : null;
  if (i === null) return {
    caps: caps_4
  };
  if (t && r) {
    if (!se(caps_4[nz], caps_4[cee])) return {
      errMsg: "capabilities declares both `artifact` and `self` \u2014 two " + "spellings of the same capability \u2014 with different configs. " + "Declare it once (canonically `artifact: {}`)."
    };
  }
  let caps_5 = {};
  for (let [c, d] of Object.entries(caps_4)) {
    if (c === nz || c === cee) {
      if (!Object.hasOwn(caps_5, i)) H(caps_5, i, d);
      continue;
    }
    H(caps_5, c, d);
  }
  return {
    caps: caps_5
  };
}
function u7e(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var oe = new Set([nz, cee, "downloads", "comments", "room", "db", "assets", "user"]);
function Umo(e) {
  return de(e, oe);
}
var tn = new Set(["downloads", "room", "db", "assets", "user"]);
function Bmo(e) {
  return e !== null && Umo(e) && de(e, tn) && Object.entries(e).every(([n, t]) => {
    if (t === !0) return !0;
    if (!i3(t)) return !1;
    switch (n) {
      case "db":
        return !("wake" in t) && nks(t);
      case "user":
        return tks(t) && (Zws(t) ?? []).every(item => item === "profile");
      default:
        return Object.keys(t).length === 0;
    }
  });
}
var xe = new Set([...oe, "mcp", "flags"]);
function dks(e) {
  return de(e, xe);
}
function F1i(e) {
  return e.every(item => xe.has(item));
}
function de(e, n) {
  return e == null || le(e) && Object.keys(e).every(item => n.has(item));
}
var regExp_13 = new RegExp(`^${rN.source}$`, "u");
function sn(e) {
  return hLs.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !regExp_13.test(e) && !U_t(e.codePointAt(0) ?? 0) && !regExp_2.test(e);
}
function on(e) {
  let n = Array.from(e).slice(0, max_2 + 1),
    t = n.length,
    r = n.map(sn),
    s = n.map((item, index) => r[index] || /^\p{M}$/u.test(item) || U_t(item.codePointAt(0) ?? 0)),
    i = n.map((item, index) => !r[index] && /^[\p{L}\p{N}]$/u.test(item)),
    l = Array(t).fill(!1),
    c = Array(t).fill(!1),
    d = !1;
  for (let a = 0; a < t; a++) l[a] = d, d = i[a] || s[a] && d;
  d = !1;
  for (let a = t - 1; a >= 0; a--) c[a] = d, d = i[a] || s[a] && d;
  let m = new Set();
  for (let a = 0; a < t; a++) if (r[a] && l[a] && c[a]) m.add(a);
  return m;
}
function an(e) {
  let n = on(e),
    t = Ae(e),
    r = "none",
    s = -1;
  return i => {
    s++;
    let l = i.codePointAt(0) ?? 0;
    if (t(i, s)) return r = "none", !0;
    if (n.has(s)) return r = "none", !0;
    if (U_t(l)) {
      let c = ZDr(l, r);
      return r = c.after, !c.rides;
    }
    if (regExp_2.test(i)) return r = "none", !0;
    return r = QDr(i), !1;
  };
}
function $e(e, n, t) {
  let r = [],
    s = 0;
  for (let i of e) {
    let l = n(i) ? ne(i) : i,
      c = l === i ? 1 : l.length;
    if (s + c > t) return {
      text: r.join(""),
      cut: !0
    };
    r.push(l), s += c;
  }
  return {
    text: r.join(""),
    cut: !1
  };
}
function un(e) {
  let text_2 = e,
    cut_2 = !1;
  if (typeof e === "string") ({
    text: text_2,
    cut: cut_2
  } = $e(e, an(e), max_2));
  let r = G_t((pH(NS(text_2, {
    max: max_2
  })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return cut_2 ? `${r}\u2026` : r;
}
function jmo(e) {
  if (!e) return "";
  let n = [],
    t = [],
    r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? Fe(b) : void 0,
      k = a === "mcp" && $en(b);
    if (y === Op) r = k ? `${Hen} + ${yX}` : yX, n.unshift("mcp");else if (y !== void 0 && y.length > 0) {
      let R = IF(y, 8, I => {
        let E = B(I),
          z = E === null ? Op : bw(E?.tools),
          N = be(z) ?? 0;
        return `${un(E?.server)}[${z === Op ? "?" : N} ${P(N, "tool")}]`;
      }).join(", ");
      r = k ? `${Hen} + ${R}` : R, n.unshift("mcp");
    } else if (k) r = Hen, n.unshift("mcp");else if (oe.has(a)) {
      let R = B(b),
        I = R === null ? Op : bw(R?.rules),
        E = be(I);
      t.push(I === void 0 ? a : `${a}[${I === Op ? "?" : E} ${P(E ?? 0, "rule")}]`);
    } else n.push(gX.test(a) ? a : Ne);
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
      k = Array.from(r),
      R = k.length > y ? k.slice(0, y).join("") + "\u2026" : r;
    c = `${l}mcp: ${R}${b}${a}`;
  }
  let d = Array.from(c);
  return ` (${d.length > 400 ? d.slice(0, 400).join("") + "\u2026" : d.join("")})`;
}
function H1i(e, n) {
  let t = te(e ?? {}),
    r = Object.keys(te(n ?? {})).filter(item => !Object.hasOwn(t, item)),
    s = l => l === "mcp" ? 0 : oe.has(l) ? 2 : 1,
    i = r.sort((itemA, itemB) => s(itemA) - s(itemB)).map(item => gX.test(item) ? item : Ne);
  if (!r.includes("mcp")) {
    if ($en(n?.mcp) && !$en(e?.mcp)) i.unshift(cn);else if (fn(e?.mcp, n?.mcp)) i.unshift(ln);
  }
  return i;
}
var Ne = "invalid-name",
  ln = "mcp (more servers or tools)",
  Hen = "any connector the viewer approves",
  cn = `mcp (${Hen})`,
  dn = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function $en(e) {
  return B(e)?.dynamic === !0;
}
function fn(e, n) {
  if (n === void 0) return !1;
  let t = ye(n);
  if (t === void 0) return !0;
  let r = new Map();
  for (let s of ye(e) ?? []) {
    let i = B(s),
      l = i?.server;
    if (typeof l === "string") r.set(l, new Set(Eue(i?.tools) ?? []));
  }
  return t.some(item => {
    let i = B(item),
      l = i?.server,
      c = typeof l === "string" ? r.get(l) : void 0,
      d = Eue(i?.tools);
    return c === void 0 || d === void 0 || d.some(item => !c.has(item));
  });
}
function Fe(e) {
  let n = B(e);
  return n === null ? Op : n === void 0 ? void 0 : bw(n.servers);
}
function ye(e) {
  let n = Fe(e);
  return n === Op ? void 0 : n;
}
function be(e) {
  return e === void 0 || e === Op ? void 0 : e.length;
}
function IF(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [`[${e.length} total]`, ...e.slice(0, n).map(t)];
}
function Te(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0;
}
function NS(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64,
    r = Array.from(e.slice(0, 2 * t), s => AO(s.codePointAt(0) ?? 0) ? " " : s).slice(0, t).join("").replace(M4, " ").replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r;
}
function vNn(e, max_3) {
  let t = NS(e, {
    max: max_3
  }).replace(M4, " ").trim();
  return t !== "" && t !== "?" ? t : void 0;
}
export { Dmt, gGe, Nen, yGe, cEr, DLe, Tb, wA, x_e, kNn, A1i, regExp as Lmt, W2, Nmt, fR, vue, Jws, Qws, uEr, gg, fEr, Fmt, i3, pEr, Zws, eks, tks, Fmo, Hmo, nks, rks, oks, sks, x1i, P1i, O1i, $q, iks, HLt, mEr, I1i, M1i, hEr, gEr, Hmt, Fen, aks, $mt, $mo, dee, D1i, gX, tz, L1i, nz, cee, lks, N1i, u7e, Umo, Bmo, dks, F1i, jmo, H1i, Hen, $en, IF, NS, vNn };