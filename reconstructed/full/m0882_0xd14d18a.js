// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  we,
  Lp
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  ghe
} from "B:/~BUN/root/chunk-j14vfkmm.js";
import {
  LG,
  AMe,
  _Qt,
  VMn,
  xyr,
  wve,
  bQt,
  epo,
  NP,
  Ofo,
  $8,
  PL,
  QVe,
  JZt,
  zp,
  Uho,
  mS,
  xen,
  Qvr
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Ge
} from "B:/~BUN/root/chunk-d8zzdckb.js";
import {
  sTe
} from "B:/~BUN/root/chunk-n3t3nbqw.js";
import {
  EX,
  TX,
  Ph
} from "B:/~BUN/root/chunk-rve7y02j.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
async function xTn(o, r) {
  return 0
}
async function pO(o, r, g, y = {}) {
  let f = y.applyStagedInstalls ?? !0;
  if (t("refreshActivePlugins: clearing all plugin caches"), f) Uho();
  if (zp(r, g), f) epo();
  let p = await mS(r, g);
  await Ofo(r), Ge.refreshConfig();
  let [m, h, c] = await Promise.all([QVe(r), JZt(r), NP(we(), r)]), {
    enabled: n,
    disabled: u,
    errors: w,
    warnings: s
  } = p, k = [], [L, F] = await Promise.all([Promise.all(n.map(async (e) => {
    if (e.mcpServers) return Object.keys(e.mcpServers).length;
    let a = await LG(e, k, r);
    if (a) e.mcpServers = a;
    return a ? Object.keys(a).length : 0
  })), Promise.all(n.map(async (e) => {
    if (e.lspServers) return Object.keys(e.lspServers).length;
    let a = await AMe(e, k, r);
    if (a) e.lspServers = a;
    return a ? Object.keys(a).length : 0
  }))]), S = L.reduce((e, a) => e + a, 0), _ = F.reduce((e, a) => e + a, 0);
  await xTn(n, k);
  let P = [...s, ..._Qt(n)],
    b = [...w, ...k];
  o.applyRefresh({
    enabled: n,
    disabled: u,
    commands: m,
    errors: b,
    warnings: P,
    agentDefinitions: c
  }), bQt(r, g);
  let A = !1;
  try {
    await $8(r, g)
  } catch (e) {
    A = !0, d(e), t(`refreshActivePlugins: loadPluginHooks failed: ${l(e)}`)
  }
  let j = n.reduce((e, a) => {
    if (!a.hooksConfig) return e;
    return e + Object.values(a.hooksConfig).reduce((R, E) => R + (E?.reduce((C, I) => C + I.hooks.length, 0) ?? 0), 0)
  }, 0);
  return PL.emit(), t(`refreshActivePlugins: ${n.length} enabled, ${m.length} commands, ${h.length} skills, ${c.allAgents.length} agents, ${j} hooks, ${S} MCP, ${_} LSP`), {
    enabled_count: U(n, (e) => e.isBuiltin !== !0),
    disabled_count: U(u, (e) => e.isBuiltin !== !0),
    command_count: m.length,
    skill_count: h.length,
    agent_count: c.allAgents.length,
    hook_count: j,
    mcp_count: S,
    lsp_count: _,
    error_count: b.length + (A ? 1 : 0),
    errors: b,
    warnings: P,
    agentDefinitions: c,
    pluginCommands: m
  }
}
async function dG(o) {
  let r = new Set(o.mcpClients.filter((s) => s.config.pluginSource !== void 0).map((s) => s.name)),
    g, y = () => g ??= xen(o.storageV5),
    f = await Qvr(o.dynamicMcpConfig ?? {}, o.storageV5, y),
    p = [...f].filter((s) => !r.has(s)).sort(),
    m = [...r].filter((s) => !f.has(s)).sort(),
    h = p.length > 0 || m.length > 0,
    c = Ph() && TX(o.model) && !EX(o.model),
    n = Lp() > 0,
    u = null;
  if (sTe() && !c && n && !Br("lspServers")) {
    let s = xyr() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await O(y, o.storageV5, o.credentials);
    if (!wve()) {
      if (s.hasServers) u = "adds";
      else if (s.loaderFailedApplyHealable) u = "may-add"
    } else if (!s.hasServers && !s.derivationFailed) {
      if (s.loaderFailedApplyHealable) u = "may-remove";
      else if (!s.loaderFailed) u = "removes"
    }
  }
  return {
    mcpServersAdded: p,
    mcpServersRemoved: m,
    toolSearchEnabled: c,
    lspToolChange: u,
    wouldInvalidateCache: (h || u !== null) && !c && n
  }
}
async function O(o, r, g) {
  let {
    enabled: y,
    errors: f
  } = await o(), p = !1, m = f.some(ghe), h = f.some((n) => ghe(n) && !(n.type === "plugin-not-installed" && n.registryReadFailed !== !0) && !(n.type === "marketplace-not-found" && n.registryReadFailed !== !0) && n.type !== "dependency-version-unsatisfied" && !(n.type === "dependency-unsatisfied" && n.reason !== "not-found")), c = !1;
  for (let n of y) {
    let u = [];
    try {
      let w = await VMn(n, u, r, g);
      if (w !== void 0 && Object.keys(w).length > 0) p = !0
    } catch {
      c = !0
    }
    if (u.length > 0) c = !0
  }
  return {
    hasServers: p,
    loaderFailed: m,
    loaderFailedApplyHealable: h,
    derivationFailed: c
  }
}

function ISt(o, r) {
  i("tengu_reload_plugins_cache_impact", {
    mcp_changed: o.mcpServersAdded.length > 0 || o.mcpServersRemoved.length > 0,
    lsp_changed: o.lspToolChange !== null,
    tool_search_on: o.toolSearchEnabled,
    warned: r.warned,
    forced: r.forced
  })
}
export {
  xTn,
  pO,
  dG,
  ISt
};
