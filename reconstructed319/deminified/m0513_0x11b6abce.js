// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Gjt, NWs, GVn, g0, L_, Zm, If, H, VGs, dKs, cKs, D$r, AIo, _4e, _Ks, ns } from "B:/~BUN/root/chunk-game8aqv.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { KZi, qZi, YZi, twe, XZi, ZZi, PNr, pN, T1t, nwe, gr, to, br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { owe, FNr } from "B:/~BUN/root/chunk-44q965xg.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { xa, su, Oon, rOr, rt, MRe, v4, On, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { jD, VS, rS } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Ui, Mzn, iLr, Cpe, ubt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Xi } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Yl } from "B:/~BUN/root/chunk-ja520myc.js";
import { zo, na, tHe, f0r } from "B:/~BUN/root/chunk-5az22yft.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { Qt as name_3 } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { qW, yLe } from "B:/~BUN/root/chunk-7thhw21a.js";
import { ht, HCe, lU, wn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { co, Iee, Ka } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { Hd, ews } from "B:/~BUN/root/chunk-eak7wp7z.js";
import { Zl, y7t, _7t, sD } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { Rh, L0e, Oze } from "B:/~BUN/root/chunk-2f6ykbbh.js";
import { cl } from "B:/~BUN/root/chunk-78494p3w.js";
import { Gq, Wl, Vc, lo, lvs, EFn, DCe, QLe } from "B:/~BUN/root/chunk-detjgwj4.js";
import { dfo, cfo, Lwr, b0t, q0e } from "B:/~BUN/root/chunk-7wcc5pbk.js";
import { $$ } from "B:/~BUN/root/chunk-w179eqqe.js";
import { rm } from "B:/~BUN/root/chunk-bmb3dt02.js";
import { R_e } from "B:/~BUN/root/chunk-ymgf3kpk.js";
import { Vn } from "B:/~BUN/root/chunk-tacrdmts.js";
import { as } from "B:/~BUN/root/chunk-w4y83tgx.js";
import { Fs } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { ODr } from "B:/~BUN/root/chunk-e0q1m1z9.js";
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var A = new Je(() => ({
  ok: !1,
  kept: !1,
  failed: !1,
  resumedOnSharedKey: !1,
  serverKeyMoved: !1
}));
function P({
  mcpInfo: mcpInfo
}) {
  return mcpInfo != null && mcpInfo.standardKey === void 0 && (typeof mcpInfo.serverName !== "string" || typeof mcpInfo.toolName !== "string");
}
function q(e) {
  let n = e.filter(item => !P(item));
  return Xi(n, "name").flatMap(item => item.mcpInfo !== void 0 && item.name === br(item.mcpInfo.serverName, item.mcpInfo.toolName) ? [{
    name: item.name,
    server: item.mcpInfo,
    standardKey: item.mcpInfo.standardKey,
    denyKey: item.mcpInfo.denyKey,
    mayRecordOwner: item.mcpInfo.scope === void 0 ? void 0 : yLe(item.mcpInfo.serverName, item.mcpInfo)
  }] : []);
}
function G(e) {
  return "name" in e && typeof e.name === "string" ? {
    ...e,
    name: pN(e.name)
  } : e;
}
function w(e) {
  return typeof e === "object" && e !== null;
}
function M(e) {
  return typeof e === "string" ? pN(e) : e;
}
function D(e) {
  if (Array.isArray(e)) return e.map(D);
  if (!w(e)) return e;
  let n = {};
  for (let o of Object.keys(e)) {
    let r = e[o];
    n[o] = o === "input" ? r : o === "exclude_tools" && Array.isArray(r) ? r.map(M) : D(r);
  }
  switch (n.type) {
    case "tool_use":
      return {
        ...n,
        name: typeof n.name === "string" ? T1t(n.name) : n.name
      };
    case "tool_reference":
      return {
        ...n,
        ...("name" in n && {
          name: M(n.name)
        }),
        ...("tool_name" in n && {
          tool_name: M(n.tool_name)
        })
      };
    case "tool_definition":
      return w(n.definition) ? {
        ...n,
        definition: {
          ...n.definition,
          name: M(n.definition.name)
        }
      } : n;
    default:
      return n;
  }
}
function X(e) {
  return Array.isArray(e.content) ? {
    ...e,
    content: D(e.content)
  } : e;
}
function J() {
  let e = A.of(H());
  if (KZi() && !e.serverKeyMoved) e.serverKeyMoved = !0, c("mcp_standard_key", "server_key_moved");
  if (XZi() > 0 && !e.kept) e.kept = !0, c("mcp_standard_key", "kept_legacy_names");else if (!e.ok && !e.kept) e.ok = !0, g("mcp_standard_key");
}
function Q(e) {
  let n = A.of(H());
  if (!n.resumedOnSharedKey && YZi() && e.some(({
    content: content
  }) => Array.isArray(content) && content.some(item => w(item) && item.type === "tool_use" && typeof item.name === "string" && qZi(item.name)))) n.resumedOnSharedKey = !0, c("mcp_standard_key", "resumed_on_shared_key");
}
function B(e) {
  a(e);
  let n = A.of(H());
  if (!n.failed) n.failed = !0, m("mcp_standard_key", "translate_failed");
}
function V(e) {
  try {
    if (!e.some(P) || !qW()) return e;
    if (xa().claim("mcp_malformed_entry_withheld")) t("At least one MCP tool was not offered to the model: its entry has no server name or tool name. Other MCP tools are not affected.", {
      level: "warn"
    });
    return e.filter(item => !P(item));
  } catch (error) {
    return B(error), e;
  }
}
function tdo(e) {
  try {
    if (e.some(item => item.mcpInfo !== void 0) && qW()) ZZi(q(e)), J();
    return !0;
  } catch (error) {
    return B(error), !1;
  }
}
function NIn(e) {
  try {
    if (!qW()) return e;
    let tool_choice = e.tool_choice;
    return Q(e.messages), PNr((e.tools ?? []).flatMap(item => "name" in item && typeof item.name === "string" ? [item.name] : [])), {
      ...e,
      messages: e.messages.map(X),
      ...(e.context_management != null && {
        context_management: D(e.context_management)
      }),
      ...(e.tools !== void 0 && {
        tools: e.tools.map(G)
      }),
      ...(tool_choice !== void 0 && "name" in tool_choice && typeof tool_choice.name === "string" && {
        tool_choice: {
          ...tool_choice,
          name: pN(tool_choice.name)
        }
      })
    };
  } catch (error) {
    return B(error), e;
  }
}
function EMi(e) {
  for (let n of e.content) if (n.type === "tool_use" && n.name !== void 0) n.name = nwe(n.name);
}
var j = Symbol.for("claude-code.hostOnlyNativeTool");
function TMi(e) {
  return Object.defineProperty(e, j, {
    value: !0,
    enumerable: !0
  }), e;
}
function vq(e) {
  return j in e;
}
function tk(e, n, o) {
  let r = wn(e, n, o);
  {
    let i = o && Object.hasOwn(o, n) ? o[n] : void 0;
    if ((i !== void 0 ? i : n) === Iee && r?.name === co) return;
  }
  return r;
}
var c0e = "authenticate",
  FIn = "complete_authentication";
var zfs = "bypassPermissions not supported in restricted mode";
function CMi(e) {
  return e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions) ? zfs : void 0;
}
function RMi(e) {
  return e.some(item => item.startsWith("preset:")) ? new Set() : new Set(e);
}
function HIn(e, n) {
  let o = [...e, Vn].filter(item => !n.has(item)),
    r = [...(n.has(Me) ? [] : [owe]), ...(n.has(Vn) ? [] : [FNr])],
    i = [...[...Mzn].map(item => br(item, ODr)), ...iLr.map(item => br(zo, `${item}${ODr}`)), br(Cpe, `${ubt}${ODr}`)];
  return [...o, ...r, tHe, f0r, ...i];
}
function __r(e) {
  return new Set([...e.filter(item => item.enablesCodeExecution).map(item => item.name), kt]);
}
function ndo(e) {
  return e.filter(item => item.isEnabled()).map(item => item.name);
}
function MW(e, n) {
  let o = V(e),
    r = tdo(o) || !twe(),
    i = [...Wl(n), ...ne(o, n)],
    s = EFn(n, i);
  return o.filter(item => {
    if (K(n, item, i, s) || item.mcpInfo?.effectiveMaxPermission === "blocked" || !r && item.mcpInfo?.standardKey !== void 0) return !1;
    if (!c7t(n, item)) return !0;
    if (xa().claim(`tool_outside_launch_list:${item.name}`)) t(`${Rh(item)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, {
      level: "warn"
    }), l("tengu_tool_withheld_outside_launch_list", {
      toolName: On(Rh(item))
    });
    return !1;
  });
}
function c7t({
  toolsKeptByLaunchList: toolsKeptByLaunchList
}, n) {
  return !(toolsKeptByLaunchList === void 0 || rm(n) || n.mcpInfo !== void 0 || vq(n) || Gq(n) || toolsKeptByLaunchList.includes(n.name) || n.familyParentToolName !== void 0 && toolsKeptByLaunchList.includes(n.familyParentToolName));
}
function wXe(e, n, o = Wl(e), r) {
  return K(e, n, o, r);
}
function K(e, n, o, r) {
  let i = s => r !== void 0 ? QLe(e, r, s) : lo(e, s, o) !== null;
  if (i(n)) return !0;
  if (n.underlyingV1ToolName && i({
    name: n.underlyingV1ToolName
  })) return !0;
  if (n.mcpInfo === void 0) {
    let s = L0e(n.name);
    if (s !== void 0 && i(s) && s.isEnabled()) return !0;
  }
  if (vq(n) && Z(e, o)) return !0;
  if (n.mcpInfo === void 0 && u7t().includes(n.name) && I(e, o) !== null) return !0;
  return !1;
}
function aDt(e, n) {
  if (!VGs().has(n.name)) return !1;
  if (hs("hipaa")) return !1;
  let o = Wl(e).filter(item => item.source !== "toolsNarrowing");
  return !wXe(e, n, o);
}
function Z(e, n) {
  return n.some(item => item.ruleValue.toolName === Me);
}
function u7t() {
  return [Fs, import.meta.require("B:/~BUN/root/chunk-mh92bc27.js").APPIFACT_REPL_TOOL_NAME];
}
function I(e, n) {
  return ee(e, n.filter(item => item.source !== "toolsNarrowing"));
}
function f7t(e, n) {
  let rule = I(e, Wl(e));
  if (rule !== null) return {
    rule: rule,
    verdict: {
      behavior: "deny",
      message: `Permission to use ${n} has been denied: it runs code as ${Me} does, and a rule denies ${Me}.`,
      decisionReason: {
        type: "rule",
        rule: rule
      }
    }
  };
  let rule_2 = I(e, Vc(e));
  return rule_2 === null ? null : {
    rule: rule_2,
    verdict: {
      behavior: "ask",
      message: `${n} runs code as ${Me} does, and a rule asks before ${Me} runs.`,
      decisionReason: {
        type: "rule",
        rule: rule_2
      }
    }
  };
}
function ee(e, n) {
  let o = e.toolAliases?.[Me],
    r = [Me, ...(o !== void 0 ? [o] : [])];
  for (let name of r) {
    let s = lo(e, {
      name: name
    }, n);
    if (s !== null) return s;
  }
  return n.find(item => r.includes(item.ruleValue.toolName) && item.ruleValue.ruleContent !== void 0 && lvs(item.ruleValue.ruleContent)) ?? null;
}
function ne(e, {
  restricted: restricted,
  toolsKeptByLaunchList: toolsKeptByLaunchList_2
}) {
  if (!(restricted === !0 && toolsKeptByLaunchList_2 === void 0)) return [];
  let r = new Set([...e.filter(item => item.enablesCodeExecution).map(item => item.name), kt]);
  return HIn(r, new Set()).map(i => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: {
      toolName: i
    }
  }));
}
function rdo(e) {
  switch (e.kind) {
    case "policy_blocked":
    case "reserved_address":
    case "org_blocked":
    case "denied":
    case "disabled":
    case "switched_off":
    case "not_configured":
    case "replaced":
      return !0;
    case "reconnecting":
    case "needs_auth":
    case "disconnected":
    case "auth_completed":
    case "not_offered":
    case "withdrawn":
      return !1;
  }
}
function odo(e) {
  return rdo(e) && e.kind !== "replaced";
}
function CTe(name_2, n, o, r, i = DCe(o), s) {
  let mcpInfo_2 = r?.mcpInfo;
  if (mcpInfo_2 === void 0 && gr(name_2) === null) {
    let y = {
      ...r,
      name: name_2,
      underlyingV1ToolName: Oze(name_2),
      familyParentToolName: r?.familyParentToolName
    };
    if (wXe(o, y, i.rules, i.index) && !aDt(o, y)) return {
      kind: "denied",
      serverName: void 0
    };
    if (!ews(y)) return {
      kind: "withdrawn"
    };
    if (Hd()) return {
      kind: "replaced"
    };
    let T = {
        name: name_3
      },
      h = wXe(o, T, i.rules, i.index) && !aDt(o, T);
    return s !== void 0 && !h && oe(n, s) ? {
      kind: "replaced"
    } : {
      kind: "withdrawn"
    };
  }
  let f = mcpInfo_2 === void 0 ? QLe(o, i.index, {
      name: name_2
    }) : wXe(o, {
      name: name_2,
      mcpInfo: mcpInfo_2
    }, i.rules, i.index),
    p = U(name_2, n, mcpInfo_2).map(({
      row: row,
      upstream: upstream
    }) => re(row, upstream, f)),
    u = p.find(rdo) ?? p.find(item => item.kind === "not_offered" || item.kind === "auth_completed") ?? p[0];
  if (u) return u;
  return f ? {
    kind: "denied",
    serverName: void 0
  } : {
    kind: "not_configured"
  };
}
function oe(e, n) {
  let o = e.find(item => item.name === na);
  return o !== void 0 && Ui(o) && v4(o.config) && !R_e(o) && !n.some(item => item.name === name_3) && n.some(item => item.mcpInfo?.serverName === na);
}
function AMi(e, n) {
  return U(e, n, void 0).filter(({
    row: row_2
  }) => row_2.type === "pending").map(({
    row: row_3
  }) => row_3.name);
}
function U(e, n, o) {
  if (o !== void 0) {
    let upstream_2 = bn(o.toolName);
    return n.filter(item => item.name === o.serverName).map(d => ({
      row: d,
      upstream: upstream_2
    }));
  }
  let r = n.map(s => ({
      row: s,
      prefix: to(s.name)
    })).filter(({
      prefix: prefix
    }) => e.startsWith(prefix)),
    i = Math.max(0, ...r.map(({
      prefix: prefix_2
    }) => prefix_2.length));
  return r.filter(({
    prefix: prefix_3
  }) => prefix_3.length === i).map(({
    row: row_4,
    prefix: prefix_4
  }) => ({
    row: row_4,
    upstream: e.slice(prefix_4.length)
  }));
}
function re(e, n, o) {
  let serverName = Zl(e.name);
  if (o) return {
    kind: "denied",
    serverName: serverName
  };
  if (te(e, n)) return {
    kind: "org_blocked",
    serverName: serverName,
    ...(Yl(e.config) && {
      byClaudeCode: !0
    })
  };
  switch (e.type) {
    case "pending":
      return {
        kind: "reconnecting",
        serverName: serverName
      };
    case "needs-auth":
      return {
        kind: "needs_auth",
        serverName: serverName
      };
    case "failed":
      if (y7t(e.error)) return {
        kind: "policy_blocked",
        serverName: serverName
      };
      if (_7t(e.error)) return {
        kind: "reserved_address",
        serverName: serverName
      };
      return sD(e) ? {
        kind: "not_configured"
      } : {
        kind: "disconnected",
        serverName: serverName
      };
    case "disabled":
      return {
        kind: e.config.type === "sdk" ? "switched_off" : "disabled",
        serverName: serverName
      };
    case "connected":
    case "cached":
      if (R_e(e)) return {
        kind: "switched_off",
        serverName: serverName
      };
      return n === c0e || n === FIn ? {
        kind: "auth_completed",
        serverName: serverName
      } : {
        kind: "not_offered",
        serverName: serverName
      };
  }
}
function te(e, n) {
  if (!("toolPermissions" in e.config)) return !1;
  let toolPermissions = e.config.toolPermissions;
  if (!toolPermissions) return !1;
  return Object.entries(toolPermissions).some(([r, i]) => i === "blocked" && bn(r) === n);
}
function RTe() {
  return su();
}
class boe {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = {
    only: new Map(),
    order: []
  }) {
    this.names = n.names ?? [...e.map(item => item.name), ...n.only.keys()], this.recordedOnly = n.only, this.recordOrder = n.order, this.#e = new Map(e.map(item => [item.name, item]));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== cl;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new boe([...this.#e.values()].filter(item => !e.has(item.name)), {
      only: new Map([...this.recordedOnly].filter(([n]) => !e.has(n))),
      order: this.recordOrder.filter(item => !e.has(item)),
      names: this.names.filter(item => !e.has(item))
    });
  }
  sourceFor(e) {
    let n = this.#e.get(e),
      o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return Y(e, o);
  }
}
function Gfs(e) {
  return e ?? ns();
}
function zye(e) {
  let declaredTools = e.declaredTools;
  return declaredTools instanceof boe ? declaredTools : void 0;
}
function $In(e) {
  let noChannelTools = e.noChannelTools;
  return noChannelTools instanceof boe ? noChannelTools : void 0;
}
function Vfs(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !RTe()) return;
  let r = o();
  return e.noChannelTools = r, r;
}
function Kfs(e, n, o) {
  let r = new Set([...n, ...e].map(item => item.name)),
    only = new Map([...(o ?? [])].filter(([u]) => !r.has(u)));
  if (only.size === 0) return new boe(e);
  let s = u => u.isMcp === !0 || gr(u.name) !== null,
    d = e.findIndex(s),
    f = (u, y) => !s(u) && (u.name === cl && y === e.length - 1 || d !== -1 && y > d),
    R = [...e.filter(s).map(item => item.name), ...only.keys()].sort((u, y) => HCe({
      name: u
    }, {
      name: y
    })),
    p = [...e.filter((item, index) => !s(item) && !f(item, index)).map(item => item.name), ...R, ...e.filter(f).map(item => item.name)];
  return new boe(e, {
    only: only,
    order: p,
    names: p
  });
}
var ie = new Set(["name", "description", "input_schema", "type", ...dfo]);
async function xMi({
  recordedToolDescriptions: recordedToolDescriptions,
  recordedToolServers: recordedToolServers,
  recordedToolEntries: recordedToolEntries,
  mcpClients = [],
  getToolPermissionContext: getToolPermissionContext
}, s, d) {
  if (recordedToolDescriptions === void 0 || recordedToolDescriptions.has(as) || !RTe()) return;
  let f = new Set(s.map(item => item.name)),
    R = [];
  for (let name_4 of recordedToolDescriptions.keys()) {
    let entry = recordedToolEntries?.get(name_4),
      server = recordedToolServers?.get(name_4);
    if (!f.has(name_4) && d?.has(name_4) !== !0 && entry !== void 0 && server !== void 0 && name_4.startsWith(to(server)) && entry.name === name_4 && /^[a-zA-Z0-9_-]+$/.test(name_4) && Object.keys(entry).every(item => ie.has(item))) R.push({
      name: name_4,
      entry: entry,
      server: server
    });
  }
  if (R.length === 0) return;
  let p = await getToolPermissionContext(),
    u = new Map(),
    y;
  for (let {
    name: name_5,
    entry: entry_2,
    server: server_2
  } of R) try {
    if (y ??= DCe(p), CTe(name_5, mcpClients, p, Y(name_5, server_2), y).kind === "reconnecting") u.set(name_5, {
      entry: entry_2,
      server: server_2
    });
  } catch (error) {
    a(F(error));
  }
  return u.size === 0 ? void 0 : u;
}
async function PMi(kept, n, {
  mcpClients: mcpClients_2,
  getPermissionContext: getPermissionContext,
  byValue: byValue
}) {
  let s = S_r(kept, n, !0);
  if (s.length === 0) return {
    kept: kept,
    unread: 0
  };
  let d = hs("hipaa"),
    f = h => d && !x(h, kept.sourceFor(h)?.mcpInfo?.serverName),
    R = h => byValue?.has(h) === !0 || f(h),
    p;
  try {
    p = await getPermissionContext();
  } catch (error) {
    a(F(error));
    let O = new Set(s.filter(R));
    return {
      kept: O.size === 0 ? kept : kept.without(O),
      unread: 0
    };
  }
  let unread = 0,
    y,
    T = new Set(s.filter(item => {
      if (R(item)) return !0;
      try {
        return y ??= DCe(p), odo(CTe(item, mcpClients_2, p, kept.sourceFor(item), y));
      } catch (error) {
        return a(F(error)), unread++, !0;
      }
    }));
  return {
    kept: T.size === 0 ? kept : kept.without(T),
    unread: unread
  };
}
function kXe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return Gfs(e.stickyBetas);
}
function u0e(e) {
  let n = kXe(e);
  return n === void 0 ? void 0 : zye(n);
}
function UIn(e) {
  let n = kXe(e);
  return n === void 0 ? void 0 : $In(n);
}
function OMi(e, n) {
  if (Gjt(e), e.declaredTools !== void 0 || !RTe()) return !1;
  return GVn(e, new boe(n)), !0;
}
function se(e, n, {
  servers: servers,
  entries: entries
} = de, i) {
  let s = new Map(n.map(item => [item.name, item])),
    d,
    f = () => (d ??= lU() ?? null, d ?? void 0),
    R = _ => {
      let S = f()?.find(E => ht(E, _))?.underlyingV1ToolName;
      return S === void 0 ? void 0 : s.get(S);
    },
    p = new Map(),
    only_2 = new Map(),
    gateOff = 0,
    needsUser = 0,
    launchOmitted = 0,
    O = _ => Ka(_) ? s.get(co) : void 0,
    order = [...e];
  for (let _ of order) {
    let S = s.get(_) ?? O(_) ?? R(_);
    if (S === void 0) {
      let entry_3 = entries?.get(_),
        server_3 = servers?.get(_);
      if (entry_3 === void 0 || pe(_, server_3, f())) continue;
      if (ae(_, server_3, f(), n)) only_2.set(_, {
        entry: entry_3,
        server: server_3
      });else {
        let W = le(_, f(), i);
        if (W === "launch_omitted") only_2.set(_, {
          entry: entry_3,
          server: server_3
        }), launchOmitted++;else if (W === "gate_off") {
          if (only_2.set(_, {
            entry: entry_3,
            server: server_3
          }), gateOff++, ue(_, f())) needsUser++;
        }
      }
      continue;
    }
    p.set(S.name, S);
    let E = S.underlyingV1ToolName === void 0 ? void 0 : s.get(S.underlyingV1ToolName);
    if (E !== void 0) p.set(E.name, E);
  }
  for (let _ of n) if (_.underlyingV1ToolName !== void 0 && p.has(_.underlyingV1ToolName)) p.set(_.name, _);
  for (let _ of p.keys()) only_2.delete(_);
  return p.size === 0 && only_2.size === 0 ? void 0 : {
    held: new boe(n.filter(item => p.has(item.name)), {
      only: only_2,
      order: order
    }),
    recorded: order.length,
    gateOff: gateOff,
    needsUser: needsUser,
    launchOmitted: launchOmitted
  };
}
function p7t(e, n, o, {
  latch: latch,
  permissionContext: permissionContext
}) {
  let s = zye(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (latch) Gjt(e);
  if (e.declaredTools !== void 0 || !RTe()) return;
  let d = n(),
    f = d === void 0 ? void 0 : se(d.names, o, d, permissionContext);
  if (f === void 0 || !latch) return f?.held;
  return GVn(e, f.held), l("tengu_declared_tool_set_from_record", {
    recorded: f.recorded,
    held: f.held.names.length - f.held.recordedOnly.size,
    heldByName: f.held.recordedOnly.size,
    heldGateOff: f.gateOff,
    heldNeedsUser: f.needsUser,
    heldLaunchOmitted: f.launchOmitted
  }), f.held;
}
function sdo(tools, n) {
  if (n === void 0) return {
    tools: tools,
    redeclared: []
  };
  let o = new Set(tools.map(item => item.name)),
    r = d => o.has(d) || !n.keeps(d) ? void 0 : n.toolFor(d);
  if (n.names.every(item => r(item) === void 0)) return {
    tools: tools,
    redeclared: []
  };
  let tools_2 = [...tools],
    redeclared = [];
  return n.names.forEach((item, index) => {
    let R = r(item);
    if (!R) return;
    let p = -1;
    for (let u = index - 1; u >= 0 && p === -1; u--) {
      let y = n.names[u];
      p = tools_2.findIndex(item => item.name === y);
    }
    if (p !== -1) tools_2.splice(p + 1, 0, R);else {
      let u = tools_2.findIndex(item => n.has(item.name));
      tools_2.splice(u === -1 ? 0 : u, 0, R);
    }
    o.add(item), redeclared.push(item);
  }), redeclared.length === 0 ? {
    tools: tools,
    redeclared: redeclared
  } : {
    tools: tools_2,
    redeclared: redeclared
  };
}
function b_r(e, n) {
  let turnDeniedTools = n.turnDeniedTools;
  return sdo(e, turnDeniedTools instanceof boe ? turnDeniedTools : void 0).tools;
}
function IMi(e, n) {
  let o = zye(e);
  if (o === void 0 || n.length === 0) return;
  e.declaredTools = o.without(new Set(n)), l("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !1
  });
}
function MMi(e, n) {
  let o = e === void 0 ? void 0 : $In(e);
  return S_r(o, n, !0);
}
function DMi(e, n) {
  let o = $In(e);
  if (o === void 0 || n.length === 0) return;
  e.noChannelTools = o.without(new Set(n)), l("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !0
  });
}
function S_r(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map(item => item.name));
  return e.names.filter(item => {
    if (r.has(item) || !e.keeps(item)) return !1;
    let s = e.sourceFor(item)?.mcpInfo;
    return o || !x(item, s?.serverName);
  });
}
var de = {
  servers: void 0,
  entries: void 0
};
function ae(e, n, o, r) {
  if (e === cl) return !1;
  if (n !== void 0) return !0;
  if (gr(e) !== null) return !1;
  if (e === $$ && !r.some(item => ht(item, as))) return !0;
  return o !== void 0 && tk(o, e) === void 0;
}
function le(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === cl || e === $$ || gr(e) !== null) return;
  let r = n.find(item => item.name === e);
  if (r === void 0 || r.isMcp === !0) return;
  if (!fe() || hs("hipaa")) return;
  if (wXe(o, r)) return aDt(o, r) ? "launch_omitted" : void 0;
  if (c7t(o, r)) return o.builtInToolsDisabled === !0 || o.restricted === !0 && HIn(__r([r]), new Set()).includes(r.name) ? void 0 : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off";
}
function ue(e, n) {
  return n?.find(o => o.name === e)?.requiresUserInteraction?.() === !0;
}
var ce = "tengu_gleaming_cupcake";
function fe() {
  return v(ce, !0);
}
var me = "tengu_joyful_anchor";
function pe(e, n, o) {
  if (x(e, n)) return !1;
  let r = v(me, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let i = o?.find(s => ht(s, e));
  return r.some(item => typeof item === "string" && (item === e || i !== void 0 && ht(i, item)));
}
function Y(e, serverName_2) {
  let o = to(serverName_2);
  return {
    mcpInfo: {
      serverName: serverName_2,
      toolName: e.startsWith(o) ? e.slice(o.length) : e
    }
  };
}
function x(e, n) {
  return n !== void 0 || gr(e) !== null;
}
function LMi(e, n, {
  pool: pool,
  keptDeferred: keptDeferred,
  keepMcp: keepMcp,
  requestCarriesStructuredOutputs: s,
  requestDeclaresSearchCitations: d,
  recordedEntries: recordedEntries
}) {
  let R = new Set(qfs(n, {
    pool: pool,
    keptDeferred: keptDeferred,
    keepMcp: keepMcp
  }));
  if (R.size === 0) return [];
  let p = new Set(e.map(N)),
    recordOrder = n.recordOrder,
    y = {
      strict: s,
      eager: cfo(e),
      citations: d
    },
    T = [];
  return recordOrder.forEach((item, index) => {
    let b = n.recordedOnly.get(item);
    if (b === void 0 || p.has(item) || !R.has(item)) return;
    let _ = recordedEntries?.get(item) ?? b.entry,
      S = -1;
    for (let E = index - 1; E >= 0 && S === -1; E--) {
      let k = recordOrder[E];
      if (p.has(k)) S = e.findIndex(item => N(item) === k) + 1;
    }
    if (S === -1) {
      let E = new Set(recordOrder),
        k = e.findIndex(item => E.has(N(item) ?? ""));
      S = k === -1 ? 0 : k;
    }
    e.splice(S, 0, Lwr(_, y)), p.add(item), T.push(item);
  }), T;
}
function qfs(e, {
  pool: pool_2,
  keptDeferred: keptDeferred_2,
  keepMcp: keepMcp_2
}) {
  let i = new Set([...pool_2.map(item => item.name), ...keptDeferred_2]);
  return e.recordOrder.filter(item => {
    let d = e.recordedOnly.get(item);
    return d !== void 0 && !i.has(item) && (keepMcp_2 || !x(item, d.server));
  });
}
function N(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}
function NMi() {
  return q0e();
}
function FMi(e) {
  let n = new Set();
  for (let o of e) {
    let r = N(o);
    if (r !== void 0) n.add(r);
  }
  return n;
}
function HMi(e) {
  if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) return;
  l("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...(e.queryDepth !== void 0 && {
      queryDepth: e.queryDepth
    }),
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures
  });
}
function m7t(e, n) {
  return Aft(e) && MRe(n);
}
function Aft(e) {
  return L_(e, VS) && !L(e);
}
function L(e) {
  return If(e, jD) || dKs() || !q0e();
}
function ZWe(e, n) {
  return (L_(e, VS) || rOr() && !If(e, VS)) && !L(e) && MRe(n);
}
function $Mi(e, n) {
  return w_r(e) && m7t(e, n);
}
function w_r(e) {
  return L_(e, rS) && !D$r() && Aft(e);
}
function ido(e, n) {
  if (D$r() || If(e, rS)) return !1;
  if (L_(e, rS)) return ZWe(e, n);
  return !L_(e, VS) && Oon() && ZWe(e, n);
}
function ado(e, n, {
  toolSearchToolFilteredOut: toolSearchToolFilteredOut,
  toolPoolRefreshes: toolPoolRefreshes,
  aheadOfRequest: aheadOfRequest
}) {
  return toolSearchToolFilteredOut && (aheadOfRequest ? ZWe(e, n) : m7t(e, n)) && (zye(e) !== void 0 || toolPoolRefreshes && RTe());
}
function UMi(e, n, o) {
  let r = !L_(e, VS);
  if (n.includes(VS) && !L(e)) {
    if (g0(e, VS), r && n.includes(rS) && !D$r() && !If(e, rS)) g0(e, rS);
  }
  let i = m7t(e, o),
    s = i && w_r(e),
    d = n;
  if (i && !d.includes(VS)) d = [...d, VS];
  if (!i && d.includes(VS)) d = d.filter(item => item !== VS);
  if (s && !d.includes(rS)) d = [...d, rS];
  if (!s && d.includes(rS)) d = d.filter(item => item !== rS);
  return d;
}
function BMi(e, n, o, r) {
  if (m7t(e, o) && MRe(r)) {
    let i = n.includes(VS) ? n : [...n, VS],
      s = w_r(e);
    if (s && !i.includes(rS)) return [...i, rS];
    return s ? i : i.filter(item => item !== rS);
  }
  return n.filter(item => item !== VS && item !== rS);
}
function jMi(e, n, {
  mintModel: mintModel,
  retryModel: retryModel,
  advisorEntryMoved: i,
  deferredEntriesMoved: s,
  hasDeferredChannel: hasDeferredChannel
}) {
  try {
    if (!m7t(e, mintModel) || MRe(retryModel)) return;
    let f = {
      advisor_entry: i,
      deferred_entries: s,
      announcement_blocks: hasDeferredChannel && n.some(item => ye(e, item))
    };
    return Object.values(f).some(Boolean) ? f : void 0;
  } catch (error) {
    a(F(error));
    return;
  }
}
function ye(e, n) {
  if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) return !1;
  let surfacedNames = n.attachment.surfacedNames;
  return Array.isArray(surfacedNames) && surfacedNames.some(item => typeof item === "string" && (e.surfacedOnWire.has(item) || e.definedByValue.has(item)));
}
function WMi(e, n, o, r, i = new Set()) {
  if (!r) return;
  let s = !Aft(e);
  for (let d of n) {
    if (d.type !== "attachment" || d.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(d.uuid)) continue;
    let surfacedNames_2 = d.attachment.surfacedNames;
    if (Array.isArray(surfacedNames_2) && surfacedNames_2.length > 0 && (s || surfacedNames_2.some(item => typeof item !== "string" || !o.has(item) && !i.has(item)))) e.nameOnlyAnnouncements.add(d.uuid);
  }
}
function Yfs(e, n, o, {
  useToolSearch: useToolSearch,
  toolSearchAbsent: toolSearchAbsent,
  blocksEligible: blocksEligible,
  byValueNames = new Set(),
  byValueStaysOut: byValueStaysOut
}) {
  if (!useToolSearch && !toolSearchAbsent) return;
  if (!blocksEligible) {
    if (!Aft(e)) e.surfacedOnWire.clear(), e.definedByValue.clear();else if (byValueStaysOut) e.definedByValue.clear();
    return;
  }
  e.surfacedOnWire.clear(), e.definedByValue.clear();
  let R = new Set();
  for (let p of o) if (p.type === "api_system") {
    for (let u of p.toolRemovals ?? []) e.definedByValue.delete(u);
    for (let u of p.toolAdditions ?? []) if (b0t(p.toolDefinitions, u) !== void 0) R.add(u), e.definedByValue.add(u);else e.surfacedOnWire.add(u);
  }
  if (toolSearchAbsent) return;
  for (let p of n) {
    if (p.type !== "attachment" || p.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(p.uuid)) continue;
    let surfacedNames_3 = p.attachment.surfacedNames;
    if (Array.isArray(surfacedNames_3) && surfacedNames_3.some(item => typeof item === "string" && !e.surfacedOnWire.has(item) && !R.has(item) && !byValueNames.has(item))) e.nameOnlyAnnouncements.add(p.uuid);
  }
}
function zMi(e, n, o, r) {
  if (Xfs(e), n === "header_rejected" || n === "block_type_unknown") {
    if (cKs(), n === "header_rejected") {
      if (_4e(VS), r) AIo(), _4e(rS);
    }
  } else if (n === "model_unsupported") _Ks(rt(o));
  t(`[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, {
    level: "warn"
  }), c("mcp_late_tool_additions", `rejected_${n}`);
}
function Xfs(e) {
  if (L_(e, VS)) Zm(e, VS);
  z(e), e.surfacedOnWire.clear();
}
function z(e) {
  if (L_(e, rS)) NWs(e, rS);
  e.definedByValue.clear();
}
function GMi(e, n) {
  if (z(e), n === "header_rejected" || n === "unsupported_on_platform") {
    if (AIo(), n === "header_rejected") _4e(rS);
  }
  t(`[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, {
    level: "warn"
  }), c("mcp_inline_tools", `rejected_${n}`);
}
function VMi(text, n, cache_control, r = [], i = {}) {
  let s = [...(text ? [{
    type: "text",
    text: text
  }] : []), ...r.map(d => ({
    type: "tool_removal",
    tool: {
      type: "tool_reference",
      name: d
    }
  })), ...n.map(d => {
    let definition = b0t(i, d);
    return definition === void 0 ? {
      type: "tool_addition",
      tool: {
        type: "tool_reference",
        name: d
      }
    } : {
      type: "tool_addition",
      tool: {
        type: "tool_definition",
        definition: definition
      }
    };
  })];
  if (cache_control !== void 0 && s.length > 0) s.push({
    ...s.pop(),
    cache_control: cache_control
  });
  return s;
}
export { tdo, NIn, EMi, c0e, FIn, TMi, vq, tk, zfs, CMi, RMi, HIn, __r, ndo, MW, c7t, wXe, aDt, u7t, f7t, rdo, odo, CTe, AMi, RTe, boe, Gfs, zye, $In, Vfs, Kfs, xMi, PMi, kXe, u0e, UIn, OMi, p7t, sdo, b_r, IMi, MMi, DMi, S_r, LMi, qfs, NMi, FMi, HMi, m7t, Aft, ZWe, $Mi, w_r, ido, ado, UMi, BMi, jMi, WMi, Yfs, zMi, Xfs, GMi, VMi };