// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de, ka, xk, Yn } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { aK, db } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Zr } from "B:/~BUN/root/chunk-eev762xg.js";
import { vt, zA, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tet, bVe, mf, b8i, iT, Na, v, Le, fe, B1n } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { cLr, zie, pZi, In, ri, dm, i0, di, uc, Sd, t1t, Tbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { sp } from "B:/~BUN/root/chunk-fzefftbw.js";
import { Mht, lyo, J7e, dyo, W_e } from "B:/~BUN/root/chunk-esnm3r09.js";
import { da } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { sep as pe } from "path";
var K = new Set(["plugin command source printed a network path", "plugin command source path resolves to a network path", "plugin command source printed a path through a suspect link", "plugin command source entry traverses a suspect link", "plugin command source link escapes producer directory", "plugin command source relink entry not canonical", "plugin command source relink entry unreadable", "plugin command source relink target resolves to a network path", "plugin command source relink target traverses a suspect link", "plugin command source link marker not a small regular file", "plugin command source printed cwd or an ancestor", "plugin command source printed a relative path", "plugin command source printed nothing", "plugin command source printed multiple lines", "plugin command source exceeded the stdout cap", "plugin command source directory has no plugin content", "plugin command source directory has too many files", "plugin command source directory too large", "plugin command source link mode unsupported on windows", "plugin command source disabled by managed policy", "plugin command source held for the organization answer", "plugin command source not started by a tool server daemon", "plugin command source command changed since consent", "plugin command source never consented for an installed plugin", "plugin command source changed between display and run", "plugin command source without consent", "plugin command source declined at the prompt"]),
  AIn = "plugin update refused during cli update: ";
class z {
  nameRegistration;
  catalogEntryNames;
  reviewerMarkedEntryNames;
  isAccessAllowed;
  lastFailedWalk;
  staleCatalogFetchedAt;
  catalogLoadInFlight;
  bindingsWriteTail = Promise.resolve();
  marketplaceChoice;
  blockedLogged = new Set();
}
var Pe = new W(() => new z());
function qT() {
  return Pe.of(H().host);
}
function GIi(e) {
  qT().nameRegistration = e === void 0 ? "none" : e === "pluginDirectory" ? "built-in" : "other";
}
function e_r(e) {
  if (e !== In) return !1;
  let {
    nameRegistration: nameRegistration
  } = qT();
  return nameRegistration === "built-in" || nameRegistration === "none";
}
function A() {
  let e = qT();
  return e.nameRegistration === "built-in" && e.isAccessAllowed?.() === !0;
}
function vft(e) {
  return qT().reviewerMarkedEntryNames?.has(e) === !0;
}
function j(e) {
  return A() && qT().catalogEntryNames?.has(e) === !0;
}
var hfs = ["agent", "subagentStatusLine"];
function Y(e) {
  return hfs.includes(e);
}
function J(e, n) {
  return n ? `${e}@${n.toLowerCase()}` : e;
}
class q {
  #e = new Map();
  #n = 0;
  generation() {
    return this.#n;
  }
  register(e, n, r, s) {
    if (s !== void 0 && s !== this.#n) return;
    this.#e.set(J(e, n), r);
  }
  get(e, n) {
    if (n === void 0) return;
    return this.#e.get(J(e, n));
  }
  clear() {
    this.#e.clear(), this.#n++;
  }
}
var ke = new W(() => new q());
function k() {
  return ke.of(H().host);
}
function VIi() {
  return k().generation();
}
function KIi(e, n, r, s) {
  k().register(e, n, r, s);
}
function T(e, n) {
  return k().get(e, n);
}
function qIi() {
  k().clear();
}
var Z = /^skill_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function x(e) {
  return Z.test(e);
}
var U = "skill_id";
function RIn(e, n) {
  let r = {};
  if (typeof e === "string" && x(e)) r.skillId = e;
  if (typeof n === "string" && W_e(n)) r.pluginId = n;
  return r.skillId === void 0 && r.pluginId === void 0 ? void 0 : r;
}
var Ee = p(() => u({
    [U]: o().regex(Z).optional().catch(void 0),
    [J7e]: o().regex(dyo).optional().catch(void 0)
  })),
  Ie = 262144,
  be = () => {
    return;
  };
function XMt() {
  let CLAUDE_CODE_SKILL_ATTRIBUTION = i.CLAUDE_CODE_SKILL_ATTRIBUTION;
  if (CLAUDE_CODE_SKILL_ATTRIBUTION === void 0) return be;
  let n = lyo("CLAUDE_CODE_SKILL_ATTRIBUTION", CLAUDE_CODE_SKILL_ATTRIBUTION, Ie, Ae);
  return r => n.get(Mht(r));
}
function Ae(e) {
  let n = Ee().safeParse(e);
  if (!n.success) {
    t("Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry: not a JSON object");
    return;
  }
  let r = RIn(n.data[U], n.data[J7e]);
  if (typeof e === "object" && e !== null) {
    for (let [s, g] of [[U, r?.skillId], [J7e, r?.pluginId]]) if (s in e && g === void 0) t(`Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry field: invalid ${s}`);
  }
  return r;
}
class Q {
  pendingUsage = new Map();
  flushTimer = null;
  exitFlushesInFlight = [];
  flushStorageV5 = void 0;
}
var ee = new W(() => new Q());
class ne {
  flushers = null;
  exitFlushRegistered = !1;
}
var h = new ne();
var Te = 60000;
function te(e) {
  h.flushers = e;
  let n = S();
  if (n.pendingUsage.size > 0) ie(n, e);
}
function S() {
  return ee.of(H().host);
}
function zP(e) {
  let lastUsedAt = Date.now(),
    r = S(),
    s = r.pendingUsage.get(e);
  if (s) s.count++, s.lastUsedAt = lastUsedAt;else r.pendingUsage.set(e, {
    count: 1,
    lastUsedAt: lastUsedAt
  });
  if (h.flushers) ie(r, h.flushers);
}
function ie(e, n) {
  if (!h.exitFlushRegistered) h.exitFlushRegistered = !0, process.on("exit", n.flushAtExit);
  if (!e.flushTimer) e.flushTimer = setTimeout(n.flush, Te), e.flushTimer.unref?.();
}
function re(e) {
  S().exitFlushesInFlight.push(e);
}
function oe(e) {
  let exitFlushesInFlight = S().exitFlushesInFlight,
    r = exitFlushesInFlight.indexOf(e);
  if (r !== -1) exitFlushesInFlight.splice(r, 1);
}
function se() {
  let e = S(),
    n = e.exitFlushesInFlight.flat();
  return e.exitFlushesInFlight = [], n.length > 0 ? n : null;
}
function le(e) {
  S().flushStorageV5 = e;
}
function ae() {
  return S().flushStorageV5;
}
function E() {
  let e = S();
  if (e.flushTimer) clearTimeout(e.flushTimer), e.flushTimer = null;
  if (e.pendingUsage.size === 0) return null;
  let n = [...e.pendingUsage.entries()];
  return e.pendingUsage.clear(), n;
}
function gfs(e) {
  return S().pendingUsage.has(e);
}
function ue(e) {
  let {
    pendingUsage: pendingUsage
  } = S();
  for (let r of pendingUsage.keys()) if (e.has(r.toLowerCase())) pendingUsage.delete(r);
}
function flush() {
  let e = E();
  if (!e) return;
  Le(C(e), ae());
}
async function ge(e) {
  let n = E();
  if (!n) return;
  re(n), await Le(C(n), e), oe(n);
}
function YIi(e) {
  if (X() && e !== void 0) le(e), vt(() => ge(e)), zA(() => ge(e));
}
function flushAtExit() {
  let e = [...(se() ?? []), ...(E() ?? [])];
  if (e.length === 0) return;
  B1n(C(e));
}
te({
  flush: flush,
  flushAtExit: flushAtExit
});
function C(e) {
  return n => {
    let pluginUsage = {
      ...n.pluginUsage
    };
    for (let [s, g] of e) {
      let c = pluginUsage[s];
      pluginUsage[s] = {
        usageCount: (c?.usageCount ?? 0) + g.count,
        lastUsedAt: g.lastUsedAt,
        lastUsedNumStartups: n.numStartups
      };
    }
    return {
      ...n,
      pluginUsage: pluginUsage
    };
  };
}
function Wlo(e, n) {
  let lastUsedAt_2 = Date.now();
  Le(s => {
    let g = e.filter(item => !s.pluginUsage?.[item]);
    if (g.length === 0) return s;
    let pluginUsage_2 = {
      ...s.pluginUsage
    };
    for (let m of g) pluginUsage_2[m] = {
      usageCount: 0,
      lastUsedAt: lastUsedAt_2,
      lastUsedNumStartups: s.numStartups
    };
    return {
      ...s,
      pluginUsage: pluginUsage_2
    };
  }, n);
}
function e7t(e, n) {
  let r = new Set(e.map(item => item.toLowerCase()));
  ue(r), Le(s => {
    let c = Object.keys(s.pluginUsage ?? {}).filter(item => r.has(item.toLowerCase()));
    if (c.length === 0) return s;
    let pluginUsage_3 = {
      ...s.pluginUsage
    };
    for (let _ of c) delete pluginUsage_3[_];
    return {
      ...s,
      pluginUsage: pluginUsage_3
    };
  }, n);
}
function t_r(e) {
  let pluginUsage_4 = fe().pluginUsage;
  return [e, ...i0(e)].map(item => pluginUsage_4?.[item]).find(item => item !== void 0);
}
function XIi(e, n) {
  let lastUsedAt_3 = Date.now();
  Le(s => {
    let g = e.filter(item => s.pluginUsage?.[item]);
    if (g.length === 0) return s;
    let pluginUsage_5 = {
      ...s.pluginUsage
    };
    for (let m of g) {
      let _ = pluginUsage_5[m];
      if (!_) continue;
      pluginUsage_5[m] = {
        ..._,
        lastUsedAt: lastUsedAt_3,
        lastUsedNumStartups: s.numStartups
      };
    }
    return {
      ...s,
      pluginUsage: pluginUsage_5
    };
  }, n);
}
function ce(e, n) {
  let pluginUsageLspGraceAppliedIds = fe().pluginUsageLspGraceAppliedIds;
  if (e.every(item => pluginUsageLspGraceAppliedIds?.includes(item))) return;
  let lastUsedAt_4 = Date.now();
  Le(g => {
    let c = new Set(g.pluginUsageLspGraceAppliedIds),
      m = e.filter(item => !c.has(item));
    if (m.length === 0) return g;
    let pluginUsage_6 = {
      ...g.pluginUsage
    };
    for (let y of m) {
      let d = pluginUsage_6[y];
      if (!d || d.usageCount > 0) continue;
      pluginUsage_6[y] = {
        ...d,
        lastUsedAt: lastUsedAt_4,
        lastUsedNumStartups: g.numStartups
      };
    }
    return {
      ...g,
      pluginUsage: pluginUsage_6,
      pluginUsageLspGraceAppliedIds: [...c, ...m]
    };
  }, n);
}
function n_r(e, n, r) {
  return {
    sessionsSinceLastUse: Math.max(0, n - e.lastUsedNumStartups),
    daysSinceLastUse: Math.max(0, Math.floor((r - e.lastUsedAt) / 86400000))
  };
}
function zlo(e, n, r) {
  return {
    "plugin.name": r ? e : iT,
    ...(n && {
      "marketplace.name": r ? n : iT
    })
  };
}
function GP(e, n) {
  let r = T(e, n) ?? n,
    s = r ? `${e}@${r.toLowerCase()}` : e;
  return Yn(bVe(s));
}
function jye(e) {
  let {
    name: name,
    marketplace: marketplace
  } = uc(e);
  return t1t(marketplace) || _e(name, marketplace) ? Yn(e) : b("third-party");
}
function me(e) {
  return e === In && v("tengu_wise_kite", !1);
}
function _e(e, n) {
  return me(n) && j(e);
}
function JIi(e, n) {
  return e.length > 0 ? xk(e.map(item => n(item) ? jye(item) : b("third-party")).sort()) : void 0;
}
function JWe(e) {
  if (me(e) && A()) return b(In);
  return t1t(e) ? Yn(e.toLowerCase()) : b("third-party");
}
function yfs(e) {
  let n = new Map();
  for (let {
    pluginId: pluginId
  } of e) {
    if (!pluginId) continue;
    let {
        name: name_2,
        marketplace: marketplace_2
      } = uc(pluginId),
      c = GP(name_2, marketplace_2);
    n.set(c, (n.get(c) ?? 0) + 1);
  }
  return n.size > 0 ? tet(n) : void 0;
}
function L9(e, n, r) {
  if (n === ri) return "default-bundle";
  if (Sd(n)) return "official";
  if (n !== void 0 && cLr.has(n.toLowerCase())) return "community";
  if (r?.has(e)) return "org";
  return "user-local";
}
function Sce(e) {
  return e === "official" || e === "default-bundle";
}
function ve(e) {
  return Sce(e) || e === "community";
}
function _fs(e) {
  return Sce(e) || mf();
}
function t7t(e, n, invocation_trigger, s) {
  let g = n?.type === "prompt" ? n.source : void 0,
    c = n?.type === "prompt" ? n.pluginInfo : void 0,
    m = c ? uc(c.repository).marketplace : void 0,
    y = g === "builtin" || g === "bundled" || g === "plugin" && Sd(m) || mf();
  da("skill_activated", {
    "skill.name": y ? e : "custom_skill",
    invocation_trigger: invocation_trigger,
    ...(g && {
      "skill.source": g
    }),
    ...(n?.kind && {
      "skill.kind": n.kind
    }),
    ...(y && c && {
      "plugin.name": c.pluginManifest.name
    }),
    ...(y && m && {
      "marketplace.name": m
    })
  }, s);
}
function vTe(e, n, r, s) {
  return {
    ...(e && {
      skill_source: f(e)
    }),
    ...(n && {
      skill_loaded_from: f(n)
    }),
    ...(r && {
      skill_kind: f(r)
    }),
    ...(s && {
      skill_created_by: f(s)
    })
  };
}
function bfs(e) {
  return {
    skill_name_hash: Yn(bVe(e))
  };
}
function Sfs(e, n) {
  if (!e) return {};
  return {
    parent_skill_name_hash: Yn(bVe(e)),
    parent_command_name: wfs(e, n)
  };
}
function wfs(e, n) {
  return Yn(n ? e : "custom");
}
function RZ({
  rawName: rawName,
  canonicalName: canonicalName,
  isMcp: isMcp,
  isBuiltIn: isBuiltIn,
  isBundled: isBundled,
  isOfficial: isOfficial
}) {
  let m = isMcp ? "mcp" : isBuiltIn || isBundled || isOfficial ? rawName : "custom";
  return {
    sanitizedName: Yn(m),
    skillNameHash: m === "custom" ? bfs(canonicalName) : {}
  };
}
function yoe(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return !1;
  return Sd(uc(e.pluginInfo.repository).marketplace);
}
function xIn(e) {
  let pluginInfo = e.pluginInfo;
  if (!pluginInfo || !yoe(e)) return {
    plugin_name: b(iT),
    plugin_repository: b(iT)
  };
  return {
    plugin_name: Yn(pluginInfo.pluginManifest.name),
    plugin_repository: Yn(pluginInfo.repository)
  };
}
function kfs(e, n, r) {
  if (e.isBuiltin) return "default-enable";
  if (n?.has(e.name)) return "org-policy";
  if (e.installationPreference === "required" || e.installationPreference === "auto_install") return "admin-install";
  if (r.some(item => e.path.startsWith(item.endsWith(pe) ? item : item + pe))) return "seed-mount";
  return "user-install";
}
function JMt(e, n, r = null) {
  let s = L9(e, n, r),
    g = ve(s) || Tbt(e, n) || _e(e, n),
    c = n === ri ? pZi(e) : void 0;
  return {
    plugin_id_hash: GP(e, n),
    plugin_scope: e_r(n) ? f("directory") : f(s),
    plugin_name_redacted: g ? Yn(e) : b(iT),
    marketplace_name_redacted: g && n ? Yn(n) : b(iT),
    is_official_plugin: Sce(s),
    ...(c !== void 0 && {
      plugin_name_previous: Yn(c),
      plugin_id_hash_previous: GP(c, n)
    })
  };
}
function N9(_PROTO_plugin_name, n, r = null) {
  let _PROTO_marketplace_name = T(_PROTO_plugin_name, n) ?? n;
  return {
    _PROTO_plugin_name: _PROTO_plugin_name,
    ...(_PROTO_marketplace_name && {
      _PROTO_marketplace_name: _PROTO_marketplace_name
    }),
    ...JMt(_PROTO_plugin_name, n, r)
  };
}
function F(e) {
  if (e === void 0 || !W_e(e)) return;
  return Yn(e);
}
function Ce(e) {
  if (e === void 0 || !x(e)) return;
  return Yn(e);
}
var Re = /^[0-9a-f]{40}$/;
function Fe(e, n) {
  if (e === void 0 || !t1t(n)) return;
  let r = e.toLowerCase();
  return Re.test(r) ? Yn(r) : void 0;
}
function n7t(e, n) {
  let plugin_version_sha = Fe(n, uc(e).marketplace);
  return plugin_version_sha !== void 0 ? {
    plugin_version_sha: plugin_version_sha
  } : {};
}
function Wye(e) {
  return e.pluginSource !== void 0 ? VP(e.pluginSource, sp()) : {};
}
function Glo(e, n, r) {
  l("tengu_plugin_folder_shadowed", {
    component: f(r),
    ...N9(e, n)
  });
}
function Vlo(e, n, r) {
  l("tengu_plugin_renamed", {
    outcome: f(r.kind),
    chain_depth: r.kind === "unresolved" ? void 0 : r.chainDepth,
    reason: r.kind === "unresolved" ? f(r.reason) : void 0,
    ...N9(e, n)
  });
}
function QMt(e, n, r) {
  let s = new Map();
  for (let {
    name: name_3,
    source: source
  } of n) {
    let m = s.get(name_3);
    if (m === void 0) s.set(name_3, [source]);else m.push(source);
  }
  for (let [_PROTO_skill_name, c] of s) {
    let m = L(c);
    if (m.length < 2) continue;
    l("tengu_plugin_name_collision", {
      item_type: f(e),
      _PROTO_skill_name: _PROTO_skill_name,
      item_name_hash: GP(_PROTO_skill_name),
      source_count: m.length,
      sources: ka(m),
      ...(r.resolves && {
        winner_source: de(c.at(-1))
      })
    });
  }
}
function VP(e, n = null) {
  let {
    name: name_4,
    marketplace: marketplace_3
  } = uc(e);
  return N9(name_4, marketplace_3, n);
}
function Ne(e, n = sp()) {
  let {
      marketplace: marketplace_4
    } = uc(e.repository),
    server_plugin_id = F(e.serverPluginId);
  return {
    ...N9(e.pluginManifest.name, marketplace_4, n),
    ...(server_plugin_id !== void 0 && {
      server_plugin_id: server_plugin_id
    })
  };
}
function ETe(e, n) {
  let skill_id = Ce(e.serverAttribution?.skillId),
    server_plugin_id_2 = F(e.serverAttribution?.pluginId);
  return {
    ...(e.pluginInfo && Ne(e.pluginInfo, n)),
    ...(skill_id !== void 0 && {
      skill_id: skill_id
    }),
    ...(server_plugin_id_2 !== void 0 && {
      server_plugin_id: server_plugin_id_2
    })
  };
}
function QIi(e, n) {
  for (let r of e) try {
    let {
      marketplace: marketplace_5
    } = uc(r.repository);
    if (Sce(L9(r.name, marketplace_5, n))) b8i(r.name, marketplace_5);
  } catch (error) {
    a(error);
  }
}
function ye(e) {
  let n = di(e);
  return n === void 0 || dm(n);
}
function De(e) {
  return e.isBuiltin === !0 || ye(e.repository);
}
function vfs(e) {
  return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== void 0 && !ye(e.pluginInfo.repository);
}
function ZIi(e) {
  let n = new Map();
  for (let r of e) {
    if (!vfs(r)) continue;
    let s = n.get(r.pluginInfo.repository);
    if (s) s.push(r.name);else n.set(r.pluginInfo.repository, [r.name]);
  }
  return n;
}
function Me(e, n) {
  if (e === null) return {};
  let r = e.get(n) ?? [];
  return {
    skill_name_hash_count: r.length,
    ...(r.length > 0 && {
      skill_name_hashes: Yn(r.map(item => bVe(item)).sort().join(","))
    })
  };
}
function eMi(e, n, r, s, g) {
  let numStartups = fe().numStartups,
    m = Date.now(),
    _ = [],
    y = e.filter(item => item.lspServers && Object.keys(item.lspServers).length > 0).map(item => item.repository);
  if (y.length > 0) ce(y, g);
  for (let d of e) {
    let {
        marketplace: marketplace_6
      } = uc(d.repository),
      I = t_r(d.repository);
    if (!I) _.push(d.repository);
    let {
        sessionsSinceLastUse: Se,
        daysSinceLastUse: he
      } = I ? n_r(I, numStartups, m) : {
        sessionsSinceLastUse: 0,
        daysSinceLastUse: 0
      },
      N = L9(d.name, marketplace_6, n),
      enabled_via = kfs(d, n, r),
      skill_path_count = (d.skillsPath ? 1 : 0) + (d.skillsPaths?.length ?? 0),
      command_path_count = (d.commandsPath ? 1 : 0) + (d.commandsPaths?.length ?? 0),
      agent_path_count = (d.agentsPath ? 1 : 0) + (d.agentsPaths?.length ?? 0),
      server_plugin_id_3 = F(d.serverPluginId),
      has_hooks = d.hooksConfig !== void 0 || d.modulePath !== void 0,
      V = _fs(N);
    da("plugin_loaded", {
      ...zlo(d.name, marketplace_6, V),
      ...(V && d.manifest.version && {
        "plugin.version": d.manifest.version
      }),
      "plugin.scope": N,
      enabled_via: enabled_via,
      plugin_id_hash: GP(d.name, marketplace_6),
      has_hooks: has_hooks,
      has_mcp: !d.skipMcpDiscovery && d.mcpServers !== void 0,
      host_owned_mcp: d.skipMcpDiscovery === !0,
      skill_path_count: skill_path_count,
      command_path_count: command_path_count,
      agent_path_count: agent_path_count,
      safe_mode: String(Zr())
    }), l("tengu_plugin_enabled_for_session", {
      ...N9(d.name, marketplace_6, n),
      ...(server_plugin_id_3 !== void 0 && {
        server_plugin_id: server_plugin_id_3
      }),
      enabled_via: f(enabled_via),
      ...(d.installationPreference !== void 0 && {
        installation_preference: f(d.installationPreference)
      }),
      skill_path_count: skill_path_count,
      command_path_count: command_path_count,
      agent_path_count: agent_path_count,
      ...Me(De(d) ? null : s, d.repository),
      has_mcp: !d.skipMcpDiscovery && d.mcpServers !== void 0,
      host_owned_mcp: d.skipMcpDiscovery === !0,
      has_lsp: d.lspServers !== void 0,
      has_hooks: has_hooks,
      has_settings: d.settings !== void 0,
      sessions_since_last_use: Se,
      days_since_last_use: he,
      safe_mode: Zr(),
      ...(d.settings && {
        settings_keys: ka(Object.keys(d.settings).filter(Y))
      }),
      ...(d.manifest.version && {
        version: Na(d.manifest.version)
      }),
      ...n7t(d.repository, d.gitCommitSha)
    });
  }
  if (_.length > 0) Wlo(_, g);
}
var Oe = ["network", "not-found", "permission", "policy", "validation", "in-use", "unknown"],
  we = new Set(Oe);
function Be(e) {
  return typeof e === "string" && we.has(e);
}
function AZ(e) {
  if (typeof e === "object" && e !== null && "pluginCommandErrorCategory" in e && Be(e.pluginCommandErrorCategory)) return e.pluginCommandErrorCategory;
  let n = String(e?.message ?? e),
    r = aK(e);
  if (typeof r === "string" && (K.has(r) || r.startsWith(AIn))) return "policy";
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(n)) return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(n)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(n)) return "permission";
  if (/blocked by your organization'?s policy|required by your organization/i.test(n)) return "policy";
  if (/(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(n)) return "policy";
  if (/invalid|malformed|schema|validation|parse error/i.test(n)) return "validation";
  return "unknown";
}
function Efs(e) {
  let n = e.toLowerCase();
  return zie.has(n) ? Yn(n) : b(iT);
}
function tMi(e, n, r) {
  for (let s of e) {
    let {
        name: name_5,
        marketplace: marketplace_7
      } = uc(s.source),
      m = "plugin" in s && s.plugin ? s.plugin : name_5;
    l("tengu_plugin_load_failed", {
      error_category: f(s.type),
      cache_only: r?.cacheOnly ?? !1,
      ...("component" in s && {
        component: f(s.component)
      }),
      ...("errno" in s && {
        errno: db(s.errno)
      }),
      ...{
        is_directory: e_r(marketplace_7),
        removed_from_directory: "removedFromDirectory" in s && s.removedFromDirectory === !0
      },
      ...N9(m, marketplace_7, n),
      ...(s.type === "marketplace-load-failed" && s.untrustedReservedName === !0 && {
        plugin_name_redacted: b(iT),
        marketplace_name_redacted: Efs(s.marketplace),
        plugin_scope: f("user-local"),
        is_official_plugin: !1
      })
    });
  }
}
export { RIn, XMt, AIn, qT, GIi, e_r, vft, hfs, VIi, KIi, qIi, zP, gfs, YIi, Wlo, e7t, t_r, XIi, n_r, zlo, GP, jye, JIi, JWe, yfs, L9, Sce, _fs, t7t, vTe, bfs, Sfs, wfs, RZ, yoe, xIn, kfs, JMt, N9, n7t, Wye, Glo, Vlo, QMt, VP, ETe, QIi, vfs, ZIi, eMi, AZ, Efs, tMi };