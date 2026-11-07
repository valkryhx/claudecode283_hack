// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, ab, HH, dv } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { hp, ob } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { g7i } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { Q_, VGe } from "B:/~BUN/root/chunk-esnm3r09.js";
import { wxt, Cdt, ddr, vQr, NZo, G5e, cdr, D_i, Zve, J5e, IP, XK, Ots, eZ, Qfr, Lc, Pos, gEi, soo, dE, ki, gW, txn, Yos } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { q_e, Y_e, lh } from "B:/~BUN/root/chunk-gezr7m08.js";
import { DXe } from "B:/~BUN/root/chunk-6h5p2dxf.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Bke, P4r } from "B:/~BUN/root/chunk-4zrrye7q.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
function K(n, e) {
  if (e.pluginSource !== void 0 && ob(e.pluginSource) === hp) return !0;
  let u = Bke(n, dv());
  if (u === void 0) return !1;
  return u.kind === "server" || P4r(e.pluginSource, u);
}
function Uke() {
  return Nr() ? K : void 0;
}
var N = n => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function R4r(n, e) {
  return 0;
}
async function Qj(n, e, u, y = {}) {
  let f = y.applyStagedInstalls ?? !0,
    g = HH(),
    {
      changesLanded: changesLanded,
      holdsSet: holdsSet
    } = g;
  using h = {
    [Symbol.dispose]: () => {
      g.endHoldSetBefore(holdsSet);
    }
  };
  let organizationAsk = Ae().organizationAsk,
    k = f && Q_() !== "unanswered" ? organizationAsk.heldReresolve : null;
  if (k) organizationAsk.heldReresolve = null, await k().catch(a);
  if (t("refreshActivePlugins: clearing all plugin caches"), f) g7i(), gEi();
  let o = i.CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD && !i.CLAUDE_CODE_SYNC_PLUGIN_INSTALL && !soo() && Ae().pluginLoadsRunning === 0;
  if (Lc(e, u, o ? "caller" : "clear"), f) D_i();
  if (o) Qfr(e, u).catch(a);
  let P;
  if (o) {
    let r = ki(e, u),
      c = await r.catch(R => {
        a(R);
        return;
      });
    if (Ae().pluginLoadCacheOnly === r && !soo()) P = c;
  }
  P ??= await dE(e, u), Pos();
  let pluginLoadCacheOnly = Ae().pluginLoadCacheOnly;
  await Ots(e), Ge.refreshConfig();
  let [commands, C, agentDefinitions] = await Promise.all([Zve(e), J5e(e), IP(Ee(), e)]),
    {
      enabled: enabled,
      disabled: disabled,
      errors: errors,
      warnings: warnings
    } = P,
    _ = [],
    warnings_2 = [],
    [G, z] = await Promise.all([Promise.all(enabled.map(async item => {
      let c = await wxt(item, _, e, {
        warnings: warnings_2
      });
      return c ? Object.keys(c).length : 0;
    })), Promise.all(enabled.map(async item => {
      if (item.lspServers) return Object.keys(item.lspServers).length;
      let c = await Cdt(item, _, e);
      if (c) item.lspServers = c;
      return c ? Object.keys(c).length : 0;
    }))]),
    mcp_count = G.reduce((acc, item) => acc + item, 0),
    lsp_count = z.reduce((acc, item) => acc + item, 0);
  await R4r(enabled, _);
  let warnings_3 = [...warnings, ...warnings_2, ...ddr(enabled)],
    errors_2 = [...errors, ..._];
  n.applyRefresh({
    enabled: enabled,
    disabled: disabled,
    commands: commands,
    errors: errors_2,
    warnings: warnings_3,
    agentDefinitions: agentDefinitions
  }), cdr(e, u);
  let E = !1;
  try {
    await eZ(e, u);
  } catch (error) {
    E = !0, a(error), t(`refreshActivePlugins: loadPluginHooks failed: ${d(error)}`);
  }
  if (!E) await txn(enabled, e).catch(a), g.reloaded(changesLanded);
  let hook_count = enabled.reduce((acc, item) => {
      if (!item.hooksConfig) return acc;
      return acc + Object.values(item.hooksConfig).reduce((acc, item) => acc + (item?.reduce((J, W) => J + W.hooks.length, 0) ?? 0), 0);
    }, 0),
    B = Fr();
  B.isAnnouncingFreshLoad = pluginLoadCacheOnly !== void 0 && Ae().pluginLoadCacheOnly === pluginLoadCacheOnly;
  try {
    XK.emit();
  } finally {
    B.isAnnouncingFreshLoad = !1;
  }
  return t(`refreshActivePlugins: ${enabled.length} enabled, ${commands.length} commands, ${C.length} skills, ${agentDefinitions.allAgents.length} agents, ${hook_count} hooks, ${mcp_count} MCP, ${lsp_count} LSP`), {
    enabled_count: U(enabled, r => r.isBuiltin !== !0),
    disabled_count: U(disabled, r => r.isBuiltin !== !0),
    command_count: commands.length,
    skill_count: C.length,
    agent_count: agentDefinitions.allAgents.length,
    hook_count: hook_count,
    mcp_count: mcp_count,
    lsp_count: lsp_count,
    error_count: errors_2.length + (E ? 1 : 0),
    errors: errors_2,
    warnings: warnings_3,
    agentDefinitions: agentDefinitions
  };
}
async function Hne(n) {
  let e = new Set(n.mcpClients.filter(item => item.config.pluginSource !== void 0).map(item => item.name)),
    u,
    y = () => u ??= gW(n.storageV5),
    f = await Yos(n.dynamicMcpConfig ?? {}, n.storageV5, y, Uke());
  for (let o of N(n.dynamicMcpConfig)) f.add(o);
  let mcpServersAdded = [...f].filter(item => !e.has(item)).sort(),
    mcpServersRemoved = [...e].filter(item => !f.has(item)).sort(),
    S = mcpServersAdded.length > 0 || mcpServersRemoved.length > 0,
    toolSearchEnabled = lh() && Y_e(n.model) && !q_e(n.model),
    s = ab() > 0,
    lspToolChange = null;
  if (DXe() && !toolSearchEnabled && s && !ur("lspServers")) {
    let o = NZo() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await X(y, n.storageV5, n.credentials);
    if (!G5e()) {
      if (o.hasServers) lspToolChange = "adds";else if (o.loaderFailedApplyHealable) lspToolChange = "may-add";
    } else if (!o.hasServers && !o.derivationFailed) {
      if (o.loaderFailedApplyHealable) lspToolChange = "may-remove";else if (!o.loaderFailed) lspToolChange = "removes";
    }
  }
  return {
    mcpServersAdded: mcpServersAdded,
    mcpServersRemoved: mcpServersRemoved,
    toolSearchEnabled: toolSearchEnabled,
    lspToolChange: lspToolChange,
    wouldInvalidateCache: (S || lspToolChange !== null) && !toolSearchEnabled && s
  };
}
async function X(n, e, u) {
  let {
      enabled: enabled_2,
      errors: errors_3
    } = await n(),
    hasServers = !1,
    loaderFailed = errors_3.some(VGe),
    loaderFailedApplyHealable = errors_3.some(item => VGe(item) && !(item.type === "plugin-not-installed" && item.registryReadFailed !== !0) && !(item.type === "marketplace-not-found" && item.registryReadFailed !== !0) && item.type !== "dependency-version-unsatisfied" && !(item.type === "dependency-unsatisfied" && item.reason !== "not-found")),
    derivationFailed = !1;
  for (let s of enabled_2) {
    let m = [];
    try {
      let k = await vQr(s, m, e, u);
      if (k !== void 0 && Object.keys(k).length > 0) hasServers = !0;
    } catch {
      derivationFailed = !0;
    }
    if (m.length > 0) derivationFailed = !0;
  }
  return {
    hasServers: hasServers,
    loaderFailed: loaderFailed,
    loaderFailedApplyHealable: loaderFailedApplyHealable,
    derivationFailed: derivationFailed
  };
}
function dbn(n, e) {
  l("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  });
}
export { Uke, R4r, Qj, Hne, dbn };