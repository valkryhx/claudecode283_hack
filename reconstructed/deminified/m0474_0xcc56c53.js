// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { $Hr, zHt, xut, pDo } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { I, qr, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ox, ED, zR, qk, T$e, hfn, yfn, pc, dd, oUr, l$t } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { Bf, bz, NE, KNe } from "B:/~BUN/root/chunk-z51p19sq.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { Ld, T_e } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { xIr, ITe, VV, HWn } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { lYn, vn } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { o, C, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
var zgr = 128,
  Ggr = 32,
  me = /^[A-Za-z0-9_.-]{1,128}$/,
  max_2 = 64,
  xe = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  K = `${xe}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  he = "\u2026\u22EF\uFE19",
  regExp = new RegExp(`^(?:[<>\\\\${he}]|[${K}]|[^ \\P{Z}]|\\p{C})$`, "u");
function ye(e) {
  let n = Array.from(e).length - 1,
    t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return t = r, i;
  };
}
function $e(e) {
  let n = ye(e),
    t = -1;
  return r => (t++, n(r, t) || regExp.test(r));
}
var Ne = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  regExp_2 = new RegExp(`^(?![${K}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${K}\\p{M}])?\\p{M}*$`, "su"),
  Te = /\p{Bidi_Control}/u,
  regExp_3 = new RegExp(`\\p{M}(?:[${K}]*\\p{M}){8}`, "u"),
  regExp_4 = new RegExp(`[ ${K}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  G = ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  regExp_5 = new RegExp(`^host[${G}]`, "iu"),
  be = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  regExp_6 = new RegExp(`^host.*[${be}]`, "iu"),
  Ie = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  regExp_7 = new RegExp(`(?:^|[^a-z])host[${G}]|[${G}]host(?:$|[^a-z])`, "iu"),
  regExp_8 = new RegExp(`^[^\\p{L}]*[${G}]host(?:$|[^a-z])`, "iu"),
  He = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  regExp_9 = new RegExp(`(?![${be}])[${G}]`, "gu"),
  regExp_10 = new RegExp(`["<>\\\\\`${K}${he}]|${Ox.source}|${ED.source}`, "gu"),
  regExp_11 = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${regExp_10.source}`, "gu");
function Be(e) {
  let n = e.normalize("NFD"),
    t = Ie.test(n),
    r = n.replace(regExp_4, "");
  return fe(r, t) || fe(r.replace(regExp_9, ":").normalize("NFKC").replace(regExp_4, ""), t);
}
function fe(e, n) {
  return regExp_5.test(e) || regExp_6.test(e) || n && regExp_7.test(e) || regExp_8.test(e);
}
function X(e) {
  return e === '"' || e === "\\" ? `\\${e}` : e.split("").map(item => `\\u${item.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
function FXt(e) {
  return Array.from(e).length <= max_2 && !e.startsWith(" ") && !e.endsWith(" ") && Ne.test(e) && regExp_2.test(e) && !Te.test(e) && !He.test(e) && !regExp_3.test(e) && !Be(e) && !e.startsWith(lYn) && !e.startsWith("mcp__") && en(e) === null;
}
function Ou(e, n) {
  if (typeof e === "string" && FXt(e)) return pc(e.replace(regExp_10, X));
  let max = n?.max ?? max_2,
    text = e,
    cut = !1;
  if (typeof e === "string") ({
    text: text,
    cut: cut
  } = Ae(e, $e(e), max));
  let i = pc(dd(Sm(text, {
    ...n,
    max: max
  }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, X) ?? "?");
  return cut ? `${i}\u2026` : i;
}
function $Xt(e) {
  return pc(qr(e, max_2).replace(regExp_11, X));
}
function J0e(e) {
  return e.declarable !== !1 && FXt(e.server);
}
var Ue = ["name", "connector", "id", "display_name"];
function U() {
  return {
    ok: !1,
    unresolved: [],
    internal: [],
    malformed: [],
    oversized: [],
    serverCount: null
  };
}
function jU(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function UXt(e) {
  return ve(e, "rules");
}
function ylo(e) {
  return ve(e, "scopes");
}
function Vgr(e) {
  return e.every(item => typeof item === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(item));
}
function _lo(e) {
  if (!jU(e)) return !1;
  let {
    scopes: scopes,
    ...t
  } = e;
  return Object.keys(t).length === 0 && (scopes === void 0 || Array.isArray(scopes) && Vgr(scopes));
}
function ve(e, n) {
  if (!jU(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0;
}
var l0n = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/,
  c0n = new Set(["view", "interact", "admin", "owner"]);
function blo(e) {
  if (!jU(e)) return !1;
  let {
    rules: rules,
    wake: wake,
    ...r
  } = e;
  return Object.keys(r).length === 0 && (rules === void 0 || Array.isArray(rules) && qgr(rules)) && (wake === void 0 || Array.isArray(wake) && wake.every(item => typeof item === "string" && l0n.test(item)));
}
function qgr(e) {
  return e.every(item => {
    if (!jU(item)) return !1;
    let {
      path: path,
      read: read,
      write: write,
      ...i
    } = item;
    return Object.keys(i).length === 0 && typeof path === "string" && (path === "" || l0n.test(path)) && (read === void 0 || typeof read === "string" && c0n.has(read)) && (write === void 0 || typeof write === "string" && c0n.has(write));
  });
}
function z(e) {
  try {
    return jU(e) ? e : void 0;
  } catch {
    return null;
  }
}
function we(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function We(e) {
  return we(e) ? e : null;
}
function se(e) {
  return [...e].filter(item => me.test(item));
}
function J(e) {
  return en(e) === null ? e : e.toLowerCase();
}
function Kgr(caps, n, t, r = {}) {
  let mcp = caps.mcp;
  if (mcp === void 0) return {
    ok: !0,
    caps: caps,
    warnings: [],
    servers: [],
    renamed: []
  };
  let i = jU(mcp) ? mcp.servers : !1;
  if (i === !1 || i != null && !Array.isArray(i)) return {
    ...U(),
    malformed: [{
      kind: "not_object"
    }]
  };
  if (jU(mcp) && mcp.dynamic !== void 0 && typeof mcp.dynamic !== "boolean") return {
    ...U(),
    malformed: [{
      kind: "dynamic_not_boolean"
    }]
  };
  if (i == null || i.length === 0) {
    if (jU(mcp) && Wtt(mcp)) return {
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
      ...U(),
      malformed: [{
        kind: "no_servers"
      }]
    };
  }
  let c = new Map(n.map(item => [J(item.toolPrefix), item])),
    l = new Map(n.map(item => [item.server, item])),
    unresolved = [],
    internal = [],
    malformed = [],
    b = [],
    y = new Map(),
    S = new Map(),
    k = [],
    M = [];
  for (let [index, h] of i.entries()) {
    let d = V(h);
    if (d === void 0) {
      let wrongKey = h !== null && typeof h === "object" ? Ue.find(item => item in h) ?? null : null;
      malformed.push({
        kind: "entry_shape",
        index: index,
        wrongKey: wrongKey
      });
      continue;
    }
    let w = c.get(J(d)),
      F = jU(h) ? h.tools : void 0,
      O = We(F);
    if (F === void 0 || O?.length === 0) {
      let _ = w ?? l.get(d);
      malformed.push({
        kind: "no_tools",
        server: d,
        display: w !== void 0 && J0e(w) ? w.server : null,
        available: se(_?.toolNames ?? [])
      });
    } else if (O === null) malformed.push({
      kind: "tools_shape",
      server: d
    });
    let R = Q0e(d),
      Y = R === void 0 ? void 0 : c.get(J(R)),
      B = R === void 0 ? null : zHt(R),
      server = null,
      ce = l.get(d);
    if (w !== void 0) {
      if (!J0e(w)) malformed.push({
        kind: "undeclarable_name",
        server: d,
        name: w.server
      });else if (en(d) !== null) malformed.push({
        kind: "known_id",
        server: d,
        display: w.server
      });else if (server = w.server, d !== w.server) y.set(d, w.server);
    } else if (ce !== void 0) {
      if (J0e(ce)) server = d;else malformed.push({
        kind: "undeclarable_name",
        server: d,
        name: d
      });
    } else if (d.startsWith(lYn)) unresolved.push(d);else if (d.startsWith("mcp__")) {
      let _ = c.get(J(Ze(d.slice(5), "__")));
      malformed.push({
        kind: "tool_name",
        server: d,
        display: _ !== void 0 && J0e(_) ? _.server : null
      });
    } else if (en(d) !== null) malformed.push({
      kind: "opaque_id",
      server: d
    });else if (Y !== void 0) malformed.push(J0e(Y) ? {
      kind: "connector_as_host",
      server: d,
      display: Y.server
    } : {
      kind: "undeclarable_name",
      server: d,
      name: Y.server
    });else if (R !== void 0 && en(R) !== null) malformed.push({
      kind: "opaque_id",
      server: d
    });else if (R !== void 0 && r.hostServers === !1) malformed.push({
      kind: "host_unavailable",
      server: d
    });else if (B !== null) {
      let _ = E => xut(E, B) || xut(Ze(`${vn(E)}__`, "__"), B) || xut(Ee(E), B),
        local = t.find(_) ?? n.find(item => _(item.server))?.server;
      if (local === void 0) server = `host:${B}`;else malformed.push({
        kind: "local_server_as_first_party",
        server: d,
        local: local
      });
    } else if (pDo(R ?? "")) internal.push(d);else {
      server = d;
      let _ = R === void 0 ? Ge(d, n) : void 0;
      if (_ !== void 0 && !S.has(d)) S.set(d, _);
    }
    if (server !== null && O !== null && O.length > 0 && jU(h)) {
      let _ = new Set(n.flatMap(item => item.server === server && J0e(item) ? item.toolNames ?? [] : [])),
        tools = O;
      if (_.size > 0) {
        tools = O.map(item => {
          if (_.has(item)) return item;
          let q = [..._].filter(Oe => vn(Oe) === item);
          if (q.length !== 1 || !me.test(q[0])) return item;
          return k.push([item, q[0]]), q[0];
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
        if (unknown.length > 0) M.push({
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
    ...U(),
    unresolved: unresolved,
    internal: internal,
    malformed: malformed
  };
  let servers = [],
    D = new Map();
  for (let g of b) {
    let h = D.get(g.server);
    if (h === void 0) D.set(g.server, {
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
    let g = lR([...y], 8, ([h, d]) => `"${Sm(h)}" \u2192 "${Ou(d)}"`).join(", ");
    warnings.push(`resolved ${I(y.size, "a connector name", "connector names")} to the display ${I(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  if (S.size > 0) {
    let g = lR([...S], 8, ([h, d]) => `"${Ou(h)}" (closest here: "${Ou(d)}")`).join(", ");
    warnings.push(`no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`);
  }
  if (k.length > 0) {
    let g = L(k.map(([h, d]) => `"${Ou(h)}" \u2192 "${Ou(d)}"`));
    warnings.push(`rewrote mcp tool ${I(g.length, "name")} to the upstream ${I(g.length, "spelling")} viewers call \u2014 ${lR(g, 8, h => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`);
  }
  for (let {
    server: server_2,
    unknown: unknown_2,
    known: known
  } of M) {
    let w = lR(unknown_2, 8, R => `"${Ou(R)}"`).join(", "),
      F = unknown_2.length === 1 ? "it" : "them",
      O = known.length === 0 ? "" : ` (its tools here: ${lR(known, 12, R => `"${Ou(R)}"`).join(", ")})`;
    warnings.push(`connector "${Ou(server_2)}" has no ${I(unknown_2.length, "tool")} named ${w} in this session${O}, so the page's calls to ${F} fail for any viewer whose "${Ou(server_2)}" lacks ${F} too \u2014 "tools" takes the connector's own top-level tool names; if ${F === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`);
  }
  let oversized = [];
  for (let [server_3, h] of D) {
    let toolCount = servers[h.idx].tools.length,
      w = zHt(Q0e(server_3) ?? "") !== null;
    if (h.from > 1 && !w) {
      let F = Ou(server_3),
        O = Utt(server_3);
      warnings.push(`${h.from} manifest entries resolve to ${O} "${F}" and were merged into one (${toolCount} ${I(toolCount, "tool")}). A viewer with more than one ${O} named "${F}" gets server_ambiguous on every call until the duplicates are renamed or removed.`);
    }
    if (toolCount > zgr) oversized.push({
      server: server_3,
      toolCount: toolCount
    });
  }
  let serverCount = servers.length > Ggr ? servers.length : null;
  if (oversized.length > 0 || serverCount !== null) return {
    ...U(),
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
function Ygr(e, n, t = 8) {
  let r = new Set(n),
    s = new Set(),
    i = [],
    c = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let l of e) for (let p of l.matchAll(c)) {
    let m = p[1] ?? p[2];
    if (r.has(m) || s.has(m)) continue;
    if (s.add(m), i.push(m), i.length >= t) return i;
  }
  return i;
}
function Z(e) {
  return e.toLowerCase().replace(/[\s\p{Pd}\p{Pc}]+/gu, " ").trim();
}
function Ge(e, n) {
  let t = n.filter(J0e),
    r = Z(e);
  if (t.some(item => Z(item.server) === r)) return;
  let s = a => a.replace(/[^\p{L}\p{N}]/gu, ""),
    i = a => a.split(/[^\p{L}\p{N}]+/u).filter(item => item.length >= 3),
    c = s(r);
  if (c.length < 3) return;
  let l = t.find(item => s(Z(item.server)) === c);
  if (l !== void 0) return l.server;
  let p = i(r),
    m;
  for (let a of t) {
    let b = i(Z(a.server)),
      [y, S] = b.length <= p.length ? [b, p] : [p, b];
    if (y.length > 0 && y.every(item => S.includes(item)) && (m === void 0 || y.length > m.shared)) m = {
      server: a.server,
      shared: y.length
    };
  }
  return m?.server;
}
function Slo(e, n) {
  return n.filter(([t]) => e.some(item => [`'${t}'`, `"${t}"`, `\`${t}\``].some(s => item.includes(s))));
}
function wlo(e) {
  let mcp_2 = e.mcp;
  if (!Re(mcp_2)) return [];
  return mcp_2.servers.map(V).filter(item => item !== void 0 && item.startsWith(lYn));
}
function vlo(e, n, t) {
  let mcp_3 = e.mcp,
    s = Wtt(mcp_3) ? [sn] : [];
  if (!Re(mcp_3)) return s;
  let i = L(mcp_3.servers.map(V).filter(item => item !== void 0)),
    c = l => t.has(l) && !$Hr.has(l) && !n.some(item => item.toolPrefix === l);
  return i.filter(item => {
    let p = Q0e(item);
    if (p !== void 0) {
      let m = zHt(p);
      return m === null ? !c(p) : ![...t].some(item => zHt(item) === m && c(item));
    }
    return !t.has(item) && !c(Ee(item)) && !n.some(m => m.server === item && t.has(m.toolPrefix));
  }).map(item => {
    let p = Ou(item);
    return `This page declares ${Utt(item)} "${p}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${p}" integration is unverified.`;
  }).concat(s);
}
function Ee(e) {
  return vn(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function V(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0;
}
function vL(e) {
  return ie(e) && Object.keys(e).length > 0;
}
function ie(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Q(e) {
  let n = Ye(e);
  return ie(n) ? n : e;
}
function j(e, n, value) {
  Object.defineProperty(e, n, {
    value: value,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
}
function Xgr(e, n) {
  let t = Q(e ?? {}),
    r = Q(n ?? {}),
    s = {
      ...t
    },
    widened = !1,
    conflict = !1;
  for (let [l, p] of Object.entries(r)) if (Object.hasOwn(t, l)) conflict ||= !te(t[l], p);else j(s, l, p), widened = !0;
  return {
    capabilities: widened ? s : e,
    widened: widened,
    conflict: conflict
  };
}
var aGe = "0.0.0";
class Se {
  served = void 0;
}
var ae = new Nt(() => new Se());
function BXt(e, n) {
  ae.of(e).served = n;
}
function klo(e) {
  return ae.peek(e)?.served;
}
function Elo(e) {
  ae.of(e).served = void 0;
}
var jXt = "host";
function WXt(e, n, t) {
  let features = e.features;
  return features !== void 0 && Object.hasOwn(features, n) && Object.hasOwn(features[n] ?? {}, t);
}
var d0n = /^host:([A-Za-z0-9_-]{1,64})$/;
function Q0e(e) {
  return d0n.exec(e)?.[1];
}
function Utt(e) {
  return Q0e(e) === void 0 ? "connector" : "local server";
}
var Jgr = "CLAUDE_ARTIFACT_HOST_GRANT",
  Ve = f(() => u({
    v: A(1),
    servers: C(u({
      server: o().regex(d0n),
      tools: C(o())
    }))
  }));
function Z0e(e) {
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
  let t = Ve().safeParse(n);
  if (!t.success) return {
    kind: "unreadable"
  };
  let tools_2 = new Map();
  for (let s of t.data.servers) {
    let i = tools_2.get(s.server) ?? new Set();
    for (let c of s.tools) i.add(c);
    tools_2.set(s.server, i);
  }
  return {
    kind: "granted",
    tools: tools_2
  };
}
function W(e) {
  return e.flatMap(item => {
    let t = V(item);
    return t === void 0 ? [] : [t];
  });
}
function u0n(caps_2, n) {
  let mcp_4 = caps_2.mcp;
  if (!jU(mcp_4) || !Array.isArray(mcp_4.servers)) return {
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
    servers: W(servers_2)
  };
  let refused = L(W(servers_2).filter(item => Q0e(item) !== void 0));
  if (refused.length === 0) return {
    ok: !0,
    caps: caps_2,
    dropped: [],
    servers: W(servers_2)
  };
  if (n.kind === "unreadable") return {
    ok: !1,
    refused: refused
  };
  let dropped = [],
    servers_3 = [];
  for (let l of servers_2) {
    let server_4 = V(l);
    if (server_4 === void 0 || Q0e(server_4) === void 0) {
      servers_3.push(l);
      continue;
    }
    let m = n.tools.get(server_4);
    if (m === void 0 || !jU(l)) {
      dropped.push({
        server: server_4,
        tool: null
      });
      continue;
    }
    let tools_3 = l.tools;
    if (!we(tools_3)) {
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
      ...l,
      tools: tools_4
    });
  }
  if (dropped.length === 0) return {
    ok: !0,
    caps: caps_2,
    dropped: dropped,
    servers: W(servers_2)
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
    servers: W(servers_3)
  };
}
var gW = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function Tlo(e, n) {
  if (!gW.test(e) || !gW.test(n)) return !1;
  let t = e.split(".").map(Number),
    r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++) if (t[s] !== r[s]) return t[s] > r[s];
  return !1;
}
var WU = /^[a-z][a-z0-9]{0,23}$/;
function SM(e) {
  return typeof e === "string" && e !== aGe && gW.test(e) ? e : null;
}
function Clo(e, n) {
  if (n.version === aGe) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter(item => !t.has(item));
}
var yE = "artifact",
  xO = "self";
function Rlo(e) {
  return e !== void 0 && (Object.hasOwn(e, yE) || Object.hasOwn(e, xO));
}
function ne(e) {
  let n = NE(e);
  if (n === Bf) return;
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
function Qgr(e) {
  if (!Object.hasOwn(e, yE)) return e;
  if (Object.hasOwn(e, xO)) {
    if (!te(e[yE], e[xO])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e)) if (r !== yE) j(t, r, s);
    return t;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) j(n, t === yE ? xO : t, r);
  return n;
}
function Ye(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let n = e;
  if (!Object.hasOwn(n, xO)) return e;
  if (Object.hasOwn(n, yE) && !te(n[yE], n[xO])) return e;
  let t = {};
  for (let [r, s] of Object.entries(n)) {
    if (r === xO) {
      if (!Object.hasOwn(n, yE)) j(t, yE, s);
      continue;
    }
    j(t, r, s);
  }
  return t;
}
function Alo(caps_4, n) {
  let t = Object.hasOwn(caps_4, yE),
    r = Object.hasOwn(caps_4, xO);
  if (!t && !r || n.version === aGe) return {
    caps: caps_4
  };
  let s = new Set(n.capabilities),
    i = s.has(yE) ? yE : s.has(xO) ? xO : null;
  if (i === null) return {
    caps: caps_4
  };
  if (t && r) {
    if (!te(caps_4[yE], caps_4[xO])) return {
      errMsg: "capabilities declares both `artifact` and `self` \u2014 two " + "spellings of the same capability \u2014 with different configs. " + "Declare it once (canonically `artifact: {}`)."
    };
  }
  let caps_5 = {};
  for (let [l, p] of Object.entries(caps_4)) {
    if (l === yE || l === xO) {
      if (!Object.hasOwn(caps_5, i)) j(caps_5, i, p);
      continue;
    }
    j(caps_5, l, p);
  }
  return {
    caps: caps_5
  };
}
function Btt(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var ue = new Set([yE, xO, "downloads", "comments", "room", "db", "assets", "user"]);
function Zgr(e) {
  return e == null || ie(e) && Object.keys(e).every(item => ue.has(item));
}
var regExp_12 = new RegExp(`^${Ox.source}$`, "u");
function Je(e) {
  return oUr.test(e) && !/^[\p{P}\p{M}]$/u.test(e) && !regExp_12.test(e) && !T$e(e.codePointAt(0) ?? 0) && !regExp.test(e);
}
function Xe(e) {
  let n = Array.from(e).slice(0, max_2 + 1),
    t = n.length,
    r = n.map(Je),
    s = n.map((item, index) => r[index] || /^\p{M}$/u.test(item) || T$e(item.codePointAt(0) ?? 0)),
    i = n.map((item, index) => !r[index] && /^[\p{L}\p{N}]$/u.test(item)),
    c = Array(t).fill(!1),
    l = Array(t).fill(!1),
    p = !1;
  for (let a = 0; a < t; a++) c[a] = p, p = i[a] || s[a] && p;
  p = !1;
  for (let a = t - 1; a >= 0; a--) l[a] = p, p = i[a] || s[a] && p;
  let m = new Set();
  for (let a = 0; a < t; a++) if (r[a] && c[a] && l[a]) m.add(a);
  return m;
}
function Qe(e) {
  let n = Xe(e),
    t = ye(e),
    r = "none",
    s = -1;
  return i => {
    s++;
    let c = i.codePointAt(0) ?? 0;
    if (t(i, s)) return r = "none", !0;
    if (n.has(s)) return r = "none", !0;
    if (T$e(c)) {
      let l = yfn(c, r);
      return r = l.after, !l.rides;
    }
    if (regExp.test(i)) return r = "none", !0;
    return r = hfn(i), !1;
  };
}
function Ae(e, n, t) {
  let r = [],
    s = 0;
  for (let i of e) {
    let c = n(i) ? X(i) : i,
      l = c === i ? 1 : c.length;
    if (s + l > t) return {
      text: r.join(""),
      cut: !0
    };
    r.push(c), s += l;
  }
  return {
    text: r.join(""),
    cut: !1
  };
}
function nn(e) {
  let text_2 = e,
    cut_2 = !1;
  if (typeof e === "string") ({
    text: text_2,
    cut: cut_2
  } = Ae(e, Qe(e), max_2));
  let r = l$t((dd(Sm(text_2, {
    max: max_2
  })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return cut_2 ? `${r}\u2026` : r;
}
function p0n(e) {
  if (!e) return "";
  let n = [],
    t = [],
    r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? Ce(b) : void 0,
      S = a === "mcp" && Wtt(b);
    if (y === Bf) r = S ? `${jtt} + ${bz}` : bz, n.unshift("mcp");else if (y !== void 0 && y.length > 0) {
      let k = lR(y, 8, M => {
        let v = z(M),
          D = v === null ? Bf : NE(v?.tools),
          N = ge(D) ?? 0;
        return `${nn(v?.server)}[${D === Bf ? "?" : N} ${I(N, "tool")}]`;
      }).join(", ");
      r = S ? `${jtt} + ${k}` : k, n.unshift("mcp");
    } else if (S) r = jtt, n.unshift("mcp");else if (ue.has(a)) {
      let k = z(b),
        M = k === null ? Bf : NE(k?.rules),
        v = ge(M);
      t.push(M === void 0 ? a : `${a}[${M === Bf ? "?" : v} ${I(v ?? 0, "rule")}]`);
    } else n.push(WU.test(a) ? a : ke);
  }
  let s = n.length + t.length;
  if (s === 0) return "";
  let i = [...n, ...t.slice(0, Math.max(0, 8 - n.length))],
    c = s > 8 ? `[${s} total]; ` : "",
    l = c + i.join("; ");
  if (r !== void 0) {
    let a = i.slice(1).join("; "),
      b = a === "" ? "" : "; ",
      y = Math.max(16, 400 - Array.from(c + a + b).length - 6),
      S = Array.from(r),
      k = S.length > y ? S.slice(0, y).join("") + "\u2026" : r;
    l = `${c}mcp: ${k}${b}${a}`;
  }
  let p = Array.from(l);
  return ` (${p.length > 400 ? p.slice(0, 400).join("") + "\u2026" : p.join("")})`;
}
function xlo(e, n) {
  let t = Q(e ?? {}),
    r = Object.keys(Q(n ?? {})).filter(item => !Object.hasOwn(t, item)),
    s = c => c === "mcp" ? 0 : ue.has(c) ? 2 : 1,
    i = r.sort((itemA, itemB) => s(itemA) - s(itemB)).map(item => WU.test(item) ? item : ke);
  if (!r.includes("mcp")) {
    if (Wtt(n?.mcp) && !Wtt(e?.mcp)) i.unshift(rn);else if (on(e?.mcp, n?.mcp)) i.unshift(tn);
  }
  return i;
}
var ke = "invalid-name",
  tn = "mcp (more servers or tools)",
  jtt = "any connector the viewer approves",
  rn = `mcp (${jtt})`,
  sn = "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function Wtt(e) {
  return z(e)?.dynamic === !0;
}
function on(e, n) {
  if (n === void 0) return !1;
  let t = pe(n);
  if (t === void 0) return !0;
  let r = new Map();
  for (let s of pe(e) ?? []) {
    let i = z(s),
      c = i?.server;
    if (typeof c === "string") r.set(c, new Set(KNe(i?.tools) ?? []));
  }
  return t.some(item => {
    let i = z(item),
      c = i?.server,
      l = typeof c === "string" ? r.get(c) : void 0,
      p = KNe(i?.tools);
    return l === void 0 || p === void 0 || p.some(item => !l.has(item));
  });
}
function Ce(e) {
  let n = z(e);
  return n === null ? Bf : n === void 0 ? void 0 : NE(n.servers);
}
function pe(e) {
  let n = Ce(e);
  return n === Bf ? void 0 : n;
}
function ge(e) {
  return e === void 0 || e === Bf ? void 0 : e.length;
}
function lR(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [`[${e.length} total]`, ...e.slice(0, n).map(t)];
}
function Re(e) {
  return e != null && typeof e === "object" && "servers" in e && Array.isArray(e.servers) && e.servers.length > 0;
}
function Sm(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64,
    r = Array.from(e.slice(0, 2 * t), s => qk(s.codePointAt(0) ?? 0) ? " " : s).slice(0, t).join("").replace(zR, " ").replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r;
}
function tCt() {
  let e = Ld();
  return e ? {
    entrypoint: e.toLowerCase().slice(0, 64)
  } : {};
}
function f0n() {
  let session_id = xIr();
  return session_id && !T_e() ? {
    session_id: session_id
  } : {};
}
var an = 3600000;
function zXt() {
  let sessionHintsRefusedAt = ee().sessionHintsRefusedAt;
  if (sessionHintsRefusedAt !== void 0 && Date.now() - sessionHintsRefusedAt < an) return {};
  return {
    ...tCt(),
    ...f0n()
  };
}
function GXt() {
  ee().sessionHintsRefusedAt = Date.now();
}
var m0n = ["entrypoint", "session_id", "request_id"],
  un = new Set(m0n);
function VXt(e, n, t) {
  let r = m0n.filter(item => t[item] !== void 0);
  if (e !== 400 || r.length === 0) return [];
  let s = VV(n);
  if (!ITe.test(s)) return [];
  let i = r.filter(item => HWn(s, item));
  if (i.length > 0) return i;
  return Object.keys(t).some(item => !un.has(item) && HWn(s, item)) ? [] : r;
}
function nCt(e) {
  return e.includes("entrypoint") || e.includes("session_id");
}
function Plo(e) {
  let {
    entrypoint: entrypoint,
    session_id: session_id_2,
    request_id: request_id,
    ...s
  } = e;
  return s;
}
export { zgr, Ggr, FXt, Ou, $Xt, J0e, jU, UXt, ylo, Vgr, _lo, l0n, c0n, blo, qgr, Kgr, Ygr, Slo, wlo, vlo, vL, Xgr, aGe, BXt, klo, Elo, jXt, WXt, d0n, Q0e, Utt, Jgr, Z0e, u0n, gW, Tlo, WU, SM, Clo, yE, xO, Rlo, Qgr, Alo, Btt, Zgr, p0n, xlo, jtt, Wtt, lR, Sm, tCt, f0n, zXt, GXt, m0n, VXt, nCt, Plo };