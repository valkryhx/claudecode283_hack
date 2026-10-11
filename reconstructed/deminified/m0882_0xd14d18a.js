// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { we, Lp } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Br } from "B:/~BUN/root/chunk-3daz140w.js";
import { ghe } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { LG, AMe, _Qt, VMn, xyr, wve, bQt, epo, NP, Ofo, $8, PL, QVe, JZt, zp, Uho, mS, xen, Qvr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Ge } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { sTe } from "B:/~BUN/root/chunk-n3t3nbqw.js";
import { EX, TX, Ph } from "B:/~BUN/root/chunk-rve7y02j.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
async function xTn(o, r) {
  return 0;
}
async function pO(o, r, g, y = {}) {
  let f = y.applyStagedInstalls ?? !0;
  if (t("refreshActivePlugins: clearing all plugin caches"), f) Uho();
  if (zp(r, g), f) epo();
  let p = await mS(r, g);
  await Ofo(r), Ge.refreshConfig();
  let [m, h, agentDefinitions] = await Promise.all([QVe(r), JZt(r), NP(we(), r)]),
    {
      enabled: enabled,
      disabled: disabled,
      errors: errors,
      warnings: warnings
    } = p,
    k = [],
    [L, F] = await Promise.all([Promise.all(enabled.map(async item => {
      if (item.mcpServers) return Object.keys(item.mcpServers).length;
      let a = await LG(item, k, r);
      if (a) item.mcpServers = a;
      return a ? Object.keys(a).length : 0;
    })), Promise.all(enabled.map(async item => {
      if (item.lspServers) return Object.keys(item.lspServers).length;
      let a = await AMe(item, k, r);
      if (a) item.lspServers = a;
      return a ? Object.keys(a).length : 0;
    }))]),
    mcp_count = L.reduce((acc, item) => acc + item, 0),
    lsp_count = F.reduce((acc, item) => acc + item, 0);
  await xTn(enabled, k);
  let warnings_2 = [...warnings, ..._Qt(enabled)],
    errors_2 = [...errors, ...k];
  o.applyRefresh({
    enabled: enabled,
    disabled: disabled,
    commands: m,
    errors: errors_2,
    warnings: warnings_2,
    agentDefinitions: agentDefinitions
  }), bQt(r, g);
  let A = !1;
  try {
    await $8(r, g);
  } catch (error) {
    A = !0, d(error), t(`refreshActivePlugins: loadPluginHooks failed: ${l(error)}`);
  }
  let hook_count = enabled.reduce((acc, item) => {
    if (!item.hooksConfig) return acc;
    return acc + Object.values(item.hooksConfig).reduce((acc, item) => acc + (item?.reduce((C, I) => C + I.hooks.length, 0) ?? 0), 0);
  }, 0);
  return PL.emit(), t(`refreshActivePlugins: ${enabled.length} enabled, ${m.length} commands, ${h.length} skills, ${agentDefinitions.allAgents.length} agents, ${hook_count} hooks, ${mcp_count} MCP, ${lsp_count} LSP`), {
    enabled_count: U(enabled, e => e.isBuiltin !== !0),
    disabled_count: U(disabled, e => e.isBuiltin !== !0),
    command_count: m.length,
    skill_count: h.length,
    agent_count: agentDefinitions.allAgents.length,
    hook_count: hook_count,
    mcp_count: mcp_count,
    lsp_count: lsp_count,
    error_count: errors_2.length + (A ? 1 : 0),
    errors: errors_2,
    warnings: warnings_2,
    agentDefinitions: agentDefinitions,
    pluginCommands: m
  };
}
async function dG(o) {
  let r = new Set(o.mcpClients.filter(item => item.config.pluginSource !== void 0).map(item => item.name)),
    g,
    y = () => g ??= xen(o.storageV5),
    f = await Qvr(o.dynamicMcpConfig ?? {}, o.storageV5, y),
    mcpServersAdded = [...f].filter(item => !r.has(item)).sort(),
    mcpServersRemoved = [...r].filter(item => !f.has(item)).sort(),
    h = mcpServersAdded.length > 0 || mcpServersRemoved.length > 0,
    toolSearchEnabled = Ph() && TX(o.model) && !EX(o.model),
    n = Lp() > 0,
    lspToolChange = null;
  if (sTe() && !toolSearchEnabled && n && !Br("lspServers")) {
    let s = xyr() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await O(y, o.storageV5, o.credentials);
    if (!wve()) {
      if (s.hasServers) lspToolChange = "adds";else if (s.loaderFailedApplyHealable) lspToolChange = "may-add";
    } else if (!s.hasServers && !s.derivationFailed) {
      if (s.loaderFailedApplyHealable) lspToolChange = "may-remove";else if (!s.loaderFailed) lspToolChange = "removes";
    }
  }
  return {
    mcpServersAdded: mcpServersAdded,
    mcpServersRemoved: mcpServersRemoved,
    toolSearchEnabled: toolSearchEnabled,
    lspToolChange: lspToolChange,
    wouldInvalidateCache: (h || lspToolChange !== null) && !toolSearchEnabled && n
  };
}
async function O(o, r, g) {
  let {
      enabled: enabled_2,
      errors: errors_3
    } = await o(),
    hasServers = !1,
    loaderFailed = errors_3.some(ghe),
    loaderFailedApplyHealable = errors_3.some(item => ghe(item) && !(item.type === "plugin-not-installed" && item.registryReadFailed !== !0) && !(item.type === "marketplace-not-found" && item.registryReadFailed !== !0) && item.type !== "dependency-version-unsatisfied" && !(item.type === "dependency-unsatisfied" && item.reason !== "not-found")),
    derivationFailed = !1;
  for (let n of enabled_2) {
    let u = [];
    try {
      let w = await VMn(n, u, r, g);
      if (w !== void 0 && Object.keys(w).length > 0) hasServers = !0;
    } catch {
      derivationFailed = !0;
    }
    if (u.length > 0) derivationFailed = !0;
  }
  return {
    hasServers: hasServers,
    loaderFailed: loaderFailed,
    loaderFailedApplyHealable: loaderFailedApplyHealable,
    derivationFailed: derivationFailed
  };
}
function ISt(o, r) {
  i("tengu_reload_plugins_cache_impact", {
    mcp_changed: o.mcpServersAdded.length > 0 || o.mcpServersRemoved.length > 0,
    lsp_changed: o.lspToolChange !== null,
    tool_search_on: o.toolSearchEnabled,
    warned: r.warned,
    forced: r.forced
  });
}
export { xTn, pO, dG, ISt };