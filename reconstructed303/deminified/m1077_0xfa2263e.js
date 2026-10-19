// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, ke, Th, yL, t_ } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { Tc, nS } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { SVs } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { VOe } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { Bit, TYe, sDn, Sgr, Pao, SHe, iDn, nms, epe, PHe, LR, V1, hdo, u6, cd, z_s, lw, rwe, dQt, Ipo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Je } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { fBe } from "B:/~BUN/root/chunk-3thbj98m.js";
import { $ce, Dar } from "B:/~BUN/root/chunk-2ym72j6h.js";
import { hae, yae, jy } from "B:/~BUN/root/chunk-th6c28ah.js";
import { v_ } from "B:/~BUN/root/chunk-y424etr5.js";
function H(n, e) {
  if (e.pluginSource !== void 0 && nS(e.pluginSource) === Tc) return !0;
  let c = $ce(n, t_());
  if (c === void 0) return !1;
  return c.kind === "server" || Dar(e.pluginSource, c);
}
function Hce() {
  return wr() ? H : void 0;
}
var D = n => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function Iar(n, e) {
  return 0;
}
async function FF(n, e, c, y = {}) {
  let u = y.applyStagedInstalls ?? !0,
    f = yL(),
    {
      changesLanded: changesLanded,
      holdsSet: holdsSet
    } = f;
  using p = {
    [Symbol.dispose]: () => {
      f.endHoldSetBefore(holdsSet);
    }
  };
  let organizationAsk = Ne().organizationAsk,
    w = u && v_() !== "unanswered" ? organizationAsk.heldReresolve : null;
  if (w) organizationAsk.heldReresolve = null, await w().catch(l);
  if (t("refreshActivePlugins: clearing all plugin caches"), u) SVs(), z_s();
  if (cd(e, c), u) nms();
  let o = await lw(e, c);
  await hdo(e), Je.refreshConfig();
  let [S, j, agentDefinitions] = await Promise.all([epe(e), PHe(e), LR(ke(), e)]),
    {
      enabled: enabled,
      disabled: disabled,
      errors: errors,
      warnings: warnings
    } = o,
    _ = [],
    warnings_2 = [],
    [B, N] = await Promise.all([Promise.all(enabled.map(async item => {
      let a = await Bit(item, _, e, {
        warnings: warnings_2
      });
      return a ? Object.keys(a).length : 0;
    })), Promise.all(enabled.map(async item => {
      if (item.lspServers) return Object.keys(item.lspServers).length;
      let a = await TYe(item, _, e);
      if (a) item.lspServers = a;
      return a ? Object.keys(a).length : 0;
    }))]),
    mcp_count = B.reduce((acc, item) => acc + item, 0),
    lsp_count = N.reduce((acc, item) => acc + item, 0);
  await Iar(enabled, _);
  let warnings_3 = [...warnings, ...warnings_2, ...sDn(enabled)],
    errors_2 = [...errors, ..._];
  n.applyRefresh({
    enabled: enabled,
    disabled: disabled,
    commands: S,
    errors: errors_2,
    warnings: warnings_3,
    agentDefinitions: agentDefinitions
  }), iDn(e, c);
  let A = !1;
  try {
    await u6(e, c);
  } catch (error) {
    A = !0, l(error), t(`refreshActivePlugins: loadPluginHooks failed: ${d(error)}`);
  }
  if (!A) await dQt(enabled, e).catch(l), f.reloaded(changesLanded);
  let hook_count = enabled.reduce((acc, item) => {
    if (!item.hooksConfig) return acc;
    return acc + Object.values(item.hooksConfig).reduce((acc, item) => acc + (item?.reduce((G, z) => G + z.hooks.length, 0) ?? 0), 0);
  }, 0);
  return V1.emit(), t(`refreshActivePlugins: ${enabled.length} enabled, ${S.length} commands, ${j.length} skills, ${agentDefinitions.allAgents.length} agents, ${hook_count} hooks, ${mcp_count} MCP, ${lsp_count} LSP`), {
    enabled_count: F(enabled, r => r.isBuiltin !== !0),
    disabled_count: F(disabled, r => r.isBuiltin !== !0),
    command_count: S.length,
    skill_count: j.length,
    agent_count: agentDefinitions.allAgents.length,
    hook_count: hook_count,
    mcp_count: mcp_count,
    lsp_count: lsp_count,
    error_count: errors_2.length + (A ? 1 : 0),
    errors: errors_2,
    warnings: warnings_3,
    agentDefinitions: agentDefinitions,
    pluginCommands: S
  };
}
async function R8(n) {
  let e = new Set(n.mcpClients.filter(item => item.config.pluginSource !== void 0).map(item => item.name)),
    c,
    y = () => c ??= rwe(n.storageV5),
    u = await Ipo(n.dynamicMcpConfig ?? {}, n.storageV5, y, Hce());
  for (let o of D(n.dynamicMcpConfig)) u.add(o);
  let mcpServersAdded = [...u].filter(item => !e.has(item)).sort(),
    mcpServersRemoved = [...e].filter(item => !u.has(item)).sort(),
    k = mcpServersAdded.length > 0 || mcpServersRemoved.length > 0,
    toolSearchEnabled = jy() && yae(n.model) && !hae(n.model),
    s = Th() > 0,
    lspToolChange = null;
  if (fBe() && !toolSearchEnabled && s && !xr("lspServers")) {
    let o = Pao() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await J(y, n.storageV5, n.credentials);
    if (!SHe()) {
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
    wouldInvalidateCache: (k || lspToolChange !== null) && !toolSearchEnabled && s
  };
}
async function J(n, e, c) {
  let {
      enabled: enabled_2,
      errors: errors_3
    } = await n(),
    hasServers = !1,
    loaderFailed = errors_3.some(VOe),
    loaderFailedApplyHealable = errors_3.some(item => VOe(item) && !(item.type === "plugin-not-installed" && item.registryReadFailed !== !0) && !(item.type === "marketplace-not-found" && item.registryReadFailed !== !0) && item.type !== "dependency-version-unsatisfied" && !(item.type === "dependency-unsatisfied" && item.reason !== "not-found")),
    derivationFailed = !1;
  for (let s of enabled_2) {
    let m = [];
    try {
      let w = await Sgr(s, m, e, c);
      if (w !== void 0 && Object.keys(w).length > 0) hasServers = !0;
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
function M4t(n, e) {
  i("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  });
}
export { Hce, Iar, FF, R8, M4t };