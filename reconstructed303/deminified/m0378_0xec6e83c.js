// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { L, at, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { O, qs, nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { fv } from "B:/~BUN/root/chunk-pej55jax.js";
import { aB, zC, Kg, Et, QIe, wn, np, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { gFo, Qcn, Nyt, W2s } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { qM, ZH, SW, yA, oQe, F3n, H3n, Rl, sp, CNo, fyt } from "B:/~BUN/root/chunk-qp0344nb.js";
import { Pf, FK, zv, Oke } from "B:/~BUN/root/chunk-cw2ph5fw.js";
import { $0e, Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { o, T, u, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
function rXe(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential";
}
function SFt() {
  return Et() || fe();
}
function fe() {
  if (fv() !== "env-quad") return !1;
  try {
    return aB() && QIe();
  } catch {
    return !1;
  }
}
function wFt() {
  return !Et() && fe();
}
function Hmt() {
  let {
    info: info,
    storeBearerOnly: storeBearerOnly
  } = Qqn();
  if (!storeBearerOnly || info === void 0) return info;
  return zC() === "store" ? info : void 0;
}
function Qqn() {
  let info_2 = wn();
  if (info_2 !== void 0) return {
    info: info_2,
    storeBearerOnly: !1
  };
  return wFt() ? {
    info: np(),
    storeBearerOnly: !0
  } : {
    info: void 0,
    storeBearerOnly: !1
  };
}
async function xke(e) {
  let {
    info: info_3,
    storeBearerOnly: storeBearerOnly_2
  } = Qqn();
  if (!storeBearerOnly_2 || info_3 === void 0) return info_3;
  return (await Kg(e)) === "store" ? info_3 : void 0;
}
function Hh(e) {
  return de() ? `This session could not reach Artifacts: ${e}` : `Not authenticated \u2014 run /login (${e})`;
}
function BE() {
  return E("tengu_cobalt_plinth_sedge", !1);
}
var Mae = "public_unasked",
  xin = "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";
var qHs = "[a-z][a-z_-]{0,31}",
  regExp = new RegExp("^[a-z][a-z_-]{0,31}$");
var BT = "live-doc",
  rte = "index.html";
var Xxo = 128,
  Jxo = 32,
  ye = /^[A-Za-z0-9_.-]{1,128}$/,
  max_2 = 64,
  Le = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  K = `${Le}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  be = "\u2026\u22EF\uFE19",
  regExp_2 = new RegExp(`^(?:[<>\\\\${be}]|[${K}]|[^ \\P{Z}]|\\p{C})$`, "u");
function _e(e) {
  let n = Array.from(e).length - 1,
    t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return t = r, i;
  };
}
function Te(e) {
  let n = _e(e),
    t = -1;
  return r => (t++, n(r, t) || regExp_2.test(r));
}
var Me = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  regExp_3 = new RegExp(`^(?![${K}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${K}\\p{M}])?\\p{M}*$`, "su"),
  Ie = /\p{Bidi_Control}/u,
  regExp_4 = new RegExp(`\\p{M}(?:[${K}]*\\p{M}){8}`, "u"),
  regExp_5 = new RegExp(`[ ${K}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  V = ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  regExp_6 = new RegExp(`^host[${V}]`, "iu"),
  ve = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  regExp_7 = new RegExp(`^host.*[${ve}]`, "iu"),
  ze = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  regExp_8 = new RegExp(`(?:^|[^a-z])host[${V}]|[${V}]host(?:$|[^a-z])`, "iu"),
  regExp_9 = new RegExp(`^[^\\p{L}]*[${V}]host(?:$|[^a-z])`, "iu"),
  Be = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  regExp_10 = new RegExp(`(?![${ve}])[${V}]`, "gu"),
  regExp_11 = new RegExp(`["<>\\\\\`${K}${be}]|${qM.source}|${ZH.source}`, "gu"),
  regExp_12 = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${regExp_11.source}`, "gu");
function Ve(e) {
  let n = e.normalize("NFD"),
    t = ze.test(n),
    r = n.replace(regExp_5, "");
  return ge(r, t) || ge(r.replace(regExp_10, ":").normalize("NFKC").replace(regExp_5, ""), t);
}
function ge(e, n) {
  return regExp_6.test(e) || regExp_7.test(e) || n && regExp_8.test(e) || regExp_9.test(e);
}
function X(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map(item => `\\u${item.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function Zqn(e) {
  return Array.from(e).length <= max_2 && !e.startsWith(" ") && !e.endsWith(" ") && Me.test(e) && regExp_3.test(e) && !Ie.test(e) && !Be.test(e) && !regExp_4.test(e) && !Ve(e) && !e.startsWith($0e) && !e.startsWith("mcp__") && Vt(e) === null;
}
function tm(e, n) {
  if (typeof e === "string" && Zqn(e)) return Rl(e.replace(regExp_11, X));
  let max = n?.max ?? max_2,
    text = e,
    cut = !1;
  if (typeof e === "string") ({
    text: text,
    cut: cut
  } = Re(e, Te(e), max));
  let i = Rl(sp(gh(text, {
    ...n,
    max: max
  }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, X) ?? "?");
  return cut ? `${i}\u2026` : i;
}
function eKn(e) {
  return Rl(qs(e, max_2).replace(regExp_12, X));
}
function sXe(e) {
  return e.declarable !== !1 && Zqn(e.server);
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
  };
}
function LK(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function tKn(e) {
  return we(e, "rules");
}
function KHs(e) {
  return we(e, "scopes");
}
function Qxo(e) {
  return e.every(item => typeof item === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(item));
}
function YHs(e) {
  if (!LK(e)) return !1;
  let {
    scopes: scopes,
    ...t
  } = e;
  return Object.keys(t).length === 0 && (scopes === void 0 || Array.isArray(scopes) && Qxo(scopes));
}
function we(e, n) {
  if (!LK(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0;
}
var xIr = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/,
  PIr = new Set(["view", "interact", "admin", "owner"]);
function XHs(e) {
  if (!LK(e)) return !1;
  let {
    rules: rules,
    wake: wake,
    ...r
  } = e;
  return Object.keys(r).length === 0 && (rules === void 0 || Array.isArray(rules) && Zxo(rules)) && (wake === void 0 || Array.isArray(wake) && wake.every(item => typeof item === "string" && xIr.test(item)));
}
function Zxo(e) {
  return e.every(item => {
    if (!LK(item)) return !1;
    let {
      path: path,
      read: read,
      write: write,
      ...i
    } = item;
    return Object.keys(i).length === 0 && typeof path === "string" && (path === "" || xIr.test(path)) && (read === void 0 || typeof read === "string" && PIr.has(read)) && (write === void 0 || typeof write === "string" && PIr.has(write));
  });
}
function U(e) {
  try {
    return LK(e) ? e : void 0;
  } catch {
    return null;
  }
}
function Ee(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function qe(e) {
  return Ee(e) ? e : null;
}
function se(e) {
  return [...e].filter(item => ye.test(item));
}
function J(e) {
  return Vt(e) === null ? e : e.toLowerCase();
}
function ePo(caps, n, t, r = {}) {
  let mcp = caps.mcp;
  if (mcp === void 0) return {
    ok: !0,
    caps: caps,
    warnings: [],
    servers: [],
    renamed: []
  };
  let i = LK(mcp) ? mcp.servers : !1;
  if (i === !1 || i != null && !Array.isArray(i)) return {
    ...W(),
    malformed: [{
      kind: "not_object"
    }]
  };
  if (LK(mcp) && mcp.dynamic !== void 0 && typeof mcp.dynamic !== "boolean") return {
    ...W(),
    malformed: [{
      kind: "dynamic_not_boolean"
    }]
  };
  if (i == null || i.length === 0) {
    if (LK(mcp) && TFt(mcp)) return {
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
      ...W(),
      malformed: [{
        kind: "no_servers"
      }]
    };
  }
  let l = new Map(n.map(item => [J(item.toolPrefix), item])),
    c = new Map(n.map(item => [item.server, item])),
    unresolved = [],
    internal = [],
    malformed = [],
    b = [],
    y = new Map(),
    S = new Map(),
    k = [],
    I = [];
  for (let [index, h] of i.entries()) {
    let d = Y(h);
    if (d === void 0) {
      let wrongKey = h !== null && typeof h === "object" ? Ye.find(item => item in h) ?? null : null;
      malformed.push({
        kind: "entry_shape",
        index: index,
        wrongKey: wrongKey
      });
      continue;
    }
    let A = l.get(J(d)),
      M = LK(h) ? h.tools : void 0,
      x = qe(M);
    if (M === void 0 || x?.length === 0) {
      let _ = A ?? c.get(d);
      malformed.push({
        kind: "no_tools",
        server: d,
        display: A !== void 0 && sXe(A) ? A.server : null,
        available: se(_?.toolNames ?? [])
      });
    } else if (x === null) malformed.push({
      kind: "tools_shape",
      server: d
    });
    let R = iXe(d),
      q = R === void 0 ? void 0 : l.get(J(R)),
      B = R === void 0 ? null : Qcn(R),
      server = null,
      ce = c.get(d);
    if (A !== void 0) {
      if (!sXe(A)) malformed.push({
        kind: "undeclarable_name",
        server: d,
        name: A.server
      });else if (Vt(d) !== null) malformed.push({
        kind: "known_id",
        server: d,
        display: A.server
      });else if (server = A.server, d !== A.server) y.set(d, A.server);
    } else if (ce !== void 0) {
      if (sXe(ce)) server = d;else malformed.push({
        kind: "undeclarable_name",
        server: d,
        name: d
      });
    } else if (d.startsWith($0e)) unresolved.push(d);else if (d.startsWith("mcp__")) {
      let _ = l.get(J(nt(d.slice(5), "__")));
      malformed.push({
        kind: "tool_name",
        server: d,
        display: _ !== void 0 && sXe(_) ? _.server : null
      });
    } else if (Vt(d) !== null) malformed.push({
      kind: "opaque_id",
      server: d
    });else if (q !== void 0) malformed.push(sXe(q) ? {
      kind: "connector_as_host",
      server: d,
      display: q.server
    } : {
      kind: "undeclarable_name",
      server: d,
      name: q.server
    });else if (R !== void 0 && Vt(R) !== null) malformed.push({
      kind: "opaque_id",
      server: d
    });else if (R !== void 0 && r.hostServers === !1) malformed.push({
      kind: "host_unavailable",
      server: d
    });else if (B !== null) {
      let _ = w => Nyt(w, B) || Nyt(nt(`${Tn(w)}__`, "__"), B) || Nyt(Se(w), B),
        local = t.find(_) ?? n.find(item => _(item.server))?.server;
      if (local === void 0) server = `host:${B}`;else malformed.push({
        kind: "local_server_as_first_party",
        server: d,
        local: local
      });
    } else if (W2s(R ?? "")) internal.push(d);else {
      server = d;
      let _ = R === void 0 ? Ze(d, n) : void 0;
      if (_ !== void 0 && !S.has(d)) S.set(d, _);
    }
    if (server !== null && x !== null && x.length > 0 && LK(h)) {
      let _ = new Set(n.flatMap(item => item.server === server && sXe(item) ? item.toolNames ?? [] : [])),
        tools = x;
      if (_.size > 0) {
        tools = x.map(item => {
          if (_.has(item)) return item;
          let Z = [..._].filter(Fe => Tn(Fe) === item);
          if (Z.length !== 1 || !ye.test(Z[0])) return item;
          return k.push([item, Z[0]]), Z[0];
        });
        let unknown = L(tools.filter(item => !_.has(item)));
        if (unknown.length > 0 && unknown.length === L(tools).length) {
          malformed.push({
            kind: "unknown_tools",
            server: d,
            display: d === server ? null : server,
            unknown: unknown,
            available: se(_)
          });
          continue;
        }
        if (unknown.length > 0) I.push({
          server: server,
          unknown: unknown,
          known: se(_)
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
    ...W(),
    unresolved: unresolved,
    internal: internal,
    malformed: malformed
  };
  let servers = [],
    H = new Map();
  for (let g of b) {
    let h = H.get(g.server);
    if (h === void 0) H.set(g.server, {
      idx: servers.length,
      from: 1
    }), servers.push(g);else {
      h.from++;
      let d = servers[h.idx];
      servers[h.idx] = {
        ...d,
        tools: L([...d.tools, ...g.tools])
      };
    }
  }
  let warnings = [];
  if (y.size > 0) {
    let g = AM([...y], 8, ([h, d]) => `"${gh(h)}" \u2192 "${tm(d)}"`).join(", ");
    warnings.push(`resolved ${O(y.size, "a connector name", "connector names")} to the display ${O(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  if (S.size > 0) {
    let g = AM([...S], 8, ([h, d]) => `"${tm(h)}" (closest here: "${tm(d)}")`).join(", ");
    warnings.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
  }
  if (k.length > 0) {
    let g = L(k.map(([h, d]) => `"${tm(h)}" \u2192 "${tm(d)}"`));
    warnings.push(`rewrote mcp tool ${O(g.length, "name")} to the upstream ${O(g.length, "spelling")} viewers call \u2014 ${AM(g, 8, h => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  for (let {
    server: server_2,
    unknown: unknown_2,
    known: known
  } of I) {
    let A = AM(unknown_2, 8, R => `"${tm(R)}"`).join(", "),
      M = unknown_2.length === 1 ? "it" : "them",
      x = known.length === 0 ? "" : ` (its tools here: ${AM(known, 12, R => `"${tm(R)}"`).join(", ")})`;
    warnings.push(`connector "${tm(server_2)}" has no ${O(unknown_2.length, "tool")} named ${A} in this session${x}, so the page's calls to ${M} fail for any viewer whose "${tm(server_2)}" lacks ${M} too \u2014 "tools" takes the connector's own top-level tool names; if ${M === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
  }
  let oversized = [];
  for (let [server_3, h] of H) {
    let toolCount = servers[h.idx].tools.length,
      A = Qcn(iXe(server_3) ?? "") !== null;
    if (h.from > 1 && !A) {
      let M = tm(server_3),
        x = vFt(server_3);
      warnings.push(`${h.from} manifest entries resolve to ${x} "${M}" and were merged into one (${toolCount} ${O(toolCount, "tool")}). A viewer with more than one ${x} named "${M}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
    }
    if (toolCount > Xxo) oversized.push({
      server: server_3,
      toolCount: toolCount
    });
  }
  let serverCount = servers.length > Jxo ? servers.length : null;
  if (oversized.length > 0 || serverCount !== null) return {
    ...W(),
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
function tPo(e, n, t = 8) {
  let r = new Set(n),
    s = new Set(),
    i = [],
    l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let c of e) for (let p of c.matchAll(l)) {
    let m = p[1] ?? p[2];
    if (r.has(m) || s.has(m)) continue;
    if (s.add(m), i.push(m), i.length >= t) return i;
  }
  return i;
}
function Q(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}
function Ze(e, n) {
  let t = n.filter(sXe),
    r = Q(e);
  if (t.some(item => Q(item.server) === r)) return;
  let s = a => a.replace(/[^\p{L}\p{N}]/gu, ""),
    i = a => a.split(/[^\p{L}\p{N}]+/u).filter(item => item.length >= 3),
    l = s(r);
  if (l.length < 3) return;
  let c = t.find(item => s(Q(item.server)) === l);
  if (c !== void 0) return c.server;
  let p = i(r),
    m;
  for (let a of t) {
    let b = i(Q(a.server)),
      [y, S] = b.length <= p.length ? [b, p] : [p, b];
    if (y.length > 0 && y.every(item => S.includes(item)) && (m === void 0 || y.length > m.shared)) m = {
      server: a.server,
      shared: y.length
    };
  }
  return m?.server;
}
function JHs(e, n) {
  return n.filter(([t]) => e.some(item => [`'${t}'`, `"${t}"`, `\`${t}\``].some(s => item.includes(s))));
}
function QHs(e) {
  let mcp_2 = e.mcp;
  if (!Ne(mcp_2)) return [];
  return mcp_2.servers.map(Y).filter(item => item !== void 0 && item.startsWith($0e));
}
function ZHs(e, n, t) {
  let mcp_3 = e.mcp,
    s = TFt(mcp_3) ? [an] : [];
  if (!Ne(mcp_3)) return s;
  let i = L(mcp_3.servers.map(Y).filter(item => item !== void 0)),
    l = c => t.has(c) && !gFo.has(c) && !n.some(item => item.toolPrefix === c);
  return i.filter(item => {
    let p = iXe(item);
    if (p !== void 0) {
      let m = Qcn(p);
      return m === null ? !l(p) : ![...t].some(item => Qcn(item) === m && l(item));
    }
    return !t.has(item) && !l(Se(item)) && !n.some(m => m.server === item && t.has(m.toolPrefix));
  }).map(item => {
    let p = tm(item);
    return `This page declares ${vFt(item)} "${p}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${p}" integration is unverified.`;
  }).concat(s);
}
function Se(e) {
  return Tn(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function Y(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0;
}
function Kj(e) {
  return ae(e) && Object.keys(e).length > 0;
}
function ae(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ee(e) {
  let n = Qe(e);
  return ae(n) ? n : e;
}
function D(e, n, value) {
  Object.defineProperty(e, n, {
    value: value,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
}
function nPo(e, n) {
  let t = ee(e ?? {}),
    r = ee(n ?? {}),
    s = {
      ...t
    },
    widened = !1,
    conflict = !1;
  for (let [c, p] of Object.entries(r)) if (Object.hasOwn(t, c)) conflict ||= !te(t[c], p);else D(s, c, p), widened = !0;
  return {
    capabilities: widened ? s : e,
    widened: widened,
    conflict: conflict
  };
}
var $mt = "0.0.0";
class Ce {
  served = void 0;
}
var ue = new at(() => new Ce());
function nKn(e, n) {
  ue.of(e).served = n;
}
function e$s(e) {
  return ue.peek(e)?.served;
}
function t$s(e) {
  ue.of(e).served = void 0;
}
var rKn = "host";
function oKn(e, n, t) {
  let features = e.features;
  return features !== void 0 && Object.hasOwn(features, n) && Object.hasOwn(features[n] ?? {}, t);
}
var OIr = /^host:([A-Za-z0-9_-]{1,64})$/;
function iXe(e) {
  return OIr.exec(e)?.[1];
}
function vFt(e) {
  return iXe(e) === void 0 ? "connector" : "local server";
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
    n = JSON.parse(e);
  } catch {
    return {
      kind: "unreadable"
    };
  }
  let t = Je().safeParse(n);
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
function G(e) {
  return e.flatMap(item => {
    let t = Y(item);
    return t === void 0 ? [] : [t];
  });
}
function IIr(caps_2, n) {
  let mcp_4 = caps_2.mcp;
  if (!LK(mcp_4) || !Array.isArray(mcp_4.servers)) return {
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
    servers: G(servers_2)
  };
  let refused = L(G(servers_2).filter(item => iXe(item) !== void 0));
  if (refused.length === 0) return {
    ok: !0,
    caps: caps_2,
    dropped: [],
    servers: G(servers_2)
  };
  if (n.kind === "unreadable") return {
    ok: !1,
    refused: refused
  };
  let dropped = [],
    servers_3 = [];
  for (let c of servers_2) {
    let server_4 = Y(c);
    if (server_4 === void 0 || iXe(server_4) === void 0) {
      servers_3.push(c);
      continue;
    }
    let m = n.tools.get(server_4);
    if (m === void 0 || !LK(c)) {
      dropped.push({
        server: server_4,
        tool: null
      });
      continue;
    }
    let tools_3 = c.tools;
    if (!Ee(tools_3)) {
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
    servers: G(servers_2)
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
    servers: G(servers_3)
  };
}
var P3 = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function n$s(e, n) {
  if (!P3.test(e) || !P3.test(n)) return !1;
  let t = e.split(".").map(Number),
    r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++) if (t[s] !== r[s]) return t[s] > r[s];
  return !1;
}
var NK = /^[a-z][a-z0-9]{0,23}$/;
function DH(e) {
  return typeof e === "string" && e !== $mt && P3.test(e) ? e : null;
}
function r$s(e, n) {
  if (n.version === $mt) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter(item => !t.has(item));
}
var Ex = "artifact",
  LH = "self";
function o$s(e) {
  return e !== void 0 && (Object.hasOwn(e, Ex) || Object.hasOwn(e, LH));
}
function ne(e) {
  let n = zv(e);
  if (n === Pf) return;
  if (n !== void 0) {
    let t = n.map(item => ne(item));
    return t.includes(void 0) ? void 0 : `[${t.join(",")}]`;
  }
  if (e !== null && typeof e === "object") {
    let t = e,
      r = Object.keys(t).sort().map(item => {
        let i = ne(t[item]);
        return i === void 0 ? void 0 : `${JSON.stringify(item)}:${i}`;
      });
    return r.includes(void 0) ? void 0 : `{${r.join(",")}}`;
  }
  return JSON.stringify(e) ?? "null";
}
function te(e, n) {
  let t = ne(e);
  return t !== void 0 && t === ne(n);
}
function oPo(e) {
  if (!Object.hasOwn(e, Ex)) return e;
  if (Object.hasOwn(e, LH)) {
    if (!te(e[Ex], e[LH])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e)) if (r !== Ex) D(t, r, s);
    return t;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) D(n, t === Ex ? LH : t, r);
  return n;
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
      continue;
    }
    D(t, r, s);
  }
  return t;
}
function s$s(caps_4, n) {
  let t = Object.hasOwn(caps_4, Ex),
    r = Object.hasOwn(caps_4, LH);
  if (!t && !r || n.version === $mt) return {
    caps: caps_4
  };
  let s = new Set(n.capabilities),
    i = s.has(Ex) ? Ex : s.has(LH) ? LH : null;
  if (i === null) return {
    caps: caps_4
  };
  if (t && r) {
    if (!te(caps_4[Ex], caps_4[LH])) return {
      errMsg: "capabilities declares both `artifact` and `self` \u2014 two " + "spellings of the same capability \u2014 with different configs. " + "Declare it once (canonically `artifact: {}`)."
    };
  }
  let caps_5 = {};
  for (let [c, p] of Object.entries(caps_4)) {
    if (c === Ex || c === LH) {
      if (!Object.hasOwn(caps_5, i)) D(caps_5, i, p);
      continue;
    }
    D(caps_5, c, p);
  }
  return {
    caps: caps_5
  };
}
function kFt(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var re = new Set([Ex, LH, "downloads", "comments", "room", "db", "assets", "user"]);
function sPo(e) {
  return Oe(e, re);
}
var ke = new Set([...re, "mcp", "flags"]);
function iPo(e) {
  return Oe(e, ke);
}
function i$s(e) {
  return e.every(item => ke.has(item));
}
function Oe(e, n) {
  return e == null || ae(e) && Object.keys(e).every(item => n.has(item));
}
var regExp_13 = new RegExp(`^${qM.source}$`, "u");
function en(e) {
  return CNo.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !regExp_13.test(e) && !oQe(e.codePointAt(0) ?? 0) && !regExp_2.test(e);
}
function nn(e) {
  let n = Array.from(e).slice(0, max_2 + 1),
    t = n.length,
    r = n.map(en),
    s = n.map((item, index) => r[index] || /^\p{M}$/u.test(item) || oQe(item.codePointAt(0) ?? 0)),
    i = n.map((item, index) => !r[index] && /^[\p{L}\p{N}]$/u.test(item)),
    l = Array(t).fill(!1),
    c = Array(t).fill(!1),
    p = !1;
  for (let a = 0; a < t; a++) l[a] = p, p = i[a] || s[a] && p;
  p = !1;
  for (let a = t - 1; a >= 0; a--) c[a] = p, p = i[a] || s[a] && p;
  let m = new Set();
  for (let a = 0; a < t; a++) if (r[a] && l[a] && c[a]) m.add(a);
  return m;
}
function tn(e) {
  let n = nn(e),
    t = _e(e),
    r = "none",
    s = -1;
  return i => {
    s++;
    let l = i.codePointAt(0) ?? 0;
    if (t(i, s)) return r = "none", !0;
    if (n.has(s)) return r = "none", !0;
    if (oQe(l)) {
      let c = H3n(l, r);
      return r = c.after, !c.rides;
    }
    if (regExp_2.test(i)) return r = "none", !0;
    return r = F3n(i), !1;
  };
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
    r.push(l), s += c;
  }
  return {
    text: r.join(""),
    cut: !1
  };
}
function rn(e) {
  let text_2 = e,
    cut_2 = !1;
  if (typeof e === "string") ({
    text: text_2,
    cut: cut_2
  } = Re(e, tn(e), max_2));
  let r = fyt((sp(gh(text_2, {
    max: max_2
  })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return cut_2 ? `${r}\u2026` : r;
}
function MIr(e) {
  if (!e) return "";
  let n = [],
    t = [],
    r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? $e(b) : void 0,
      S = a === "mcp" && TFt(b);
    if (y === Pf) r = S ? `${EFt} + ${FK}` : FK, n.unshift("mcp");else if (y !== void 0 && y.length > 0) {
      let k = AM(y, 8, I => {
        let v = U(I),
          H = v === null ? Pf : zv(v?.tools),
          F = he(H) ?? 0;
        return `${rn(v?.server)}[${H === Pf ? "?" : F} ${O(F, "tool")}]`;
      }).join(", ");
      r = S ? `${EFt} + ${k}` : k, n.unshift("mcp");
    } else if (S) r = EFt, n.unshift("mcp");else if (re.has(a)) {
      let k = U(b),
        I = k === null ? Pf : zv(k?.rules),
        v = he(I);
      t.push(I === void 0 ? a : `${a}[${I === Pf ? "?" : v} ${O(v ?? 0, "rule")}]`);
    } else n.push(NK.test(a) ? a : xe);
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
    c = `${l}mcp: ${k}${b}${a}`;
  }
  let p = Array.from(c);
  return ` (${p.length > 400 ? p.slice(0, 400).join("") + "\u2026" : p.join("")})`;
}
function a$s(e, n) {
  let t = ee(e ?? {}),
    r = Object.keys(ee(n ?? {})).filter(item => !Object.hasOwn(t, item)),
    s = l => l === "mcp" ? 0 : re.has(l) ? 2 : 1,
    i = r.sort((itemA, itemB) => s(itemA) - s(itemB)).map(item => NK.test(item) ? item : xe);
  if (!r.includes("mcp")) {
    if (TFt(n?.mcp) && !TFt(e?.mcp)) i.unshift(sn);else if (un(e?.mcp, n?.mcp)) i.unshift(on);
  }
  return i;
}
var xe = "invalid-name",
  on = "mcp (more servers or tools)",
  EFt = "any connector the viewer approves",
  sn = `mcp (${EFt})`,
  an = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function TFt(e) {
  return U(e)?.dynamic === !0;
}
function un(e, n) {
  if (n === void 0) return !1;
  let t = me(n);
  if (t === void 0) return !0;
  let r = new Map();
  for (let s of me(e) ?? []) {
    let i = U(s),
      l = i?.server;
    if (typeof l === "string") r.set(l, new Set(Oke(i?.tools) ?? []));
  }
  return t.some(item => {
    let i = U(item),
      l = i?.server,
      c = typeof l === "string" ? r.get(l) : void 0,
      p = Oke(i?.tools);
    return c === void 0 || p === void 0 || p.some(item => !c.has(item));
  });
}
function $e(e) {
  let n = U(e);
  return n === null ? Pf : n === void 0 ? void 0 : zv(n.servers);
}
function me(e) {
  let n = $e(e);
  return n === Pf ? void 0 : n;
}
function he(e) {
  return e === void 0 || e === Pf ? void 0 : e.length;
}
function AM(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [`[${e.length} total]`, ...e.slice(0, n).map(t)];
}
function Ne(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0;
}
function gh(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64,
    r = Array.from(e.slice(0, 2 * t), s => yA(s.codePointAt(0) ?? 0) ? " " : s).slice(0, t).join("").replace(SW, " ").replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r;
}
function Pin(e, max_3) {
  let t = gh(e, {
    max: max_3
  }).replace(SW, " ").trim();
  return t !== "" && t !== "?" ? t : void 0;
}
export { rXe, SFt, wFt, Hmt, Qqn, xke, Hh, BE, Mae, xin, qHs, regExp as oXe, BT, rte, Xxo, Jxo, Zqn, tm, eKn, sXe, LK, tKn, KHs, Qxo, YHs, xIr, PIr, XHs, Zxo, ePo, tPo, JHs, QHs, ZHs, Kj, nPo, $mt, nKn, e$s, t$s, rKn, oKn, OIr, iXe, vFt, rPo, aXe, IIr, P3, n$s, NK, DH, r$s, Ex, LH, o$s, oPo, s$s, kFt, sPo, iPo, i$s, MIr, a$s, EFt, TFt, AM, gh, Pin };