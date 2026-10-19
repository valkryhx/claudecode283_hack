// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  ke,
  Th,
  yL,
  t_
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  wr
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  Tc,
  nS
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  SVs
} from "B:/~BUN/root/chunk-q4sexgb0.js";
import {
  VOe
} from "B:/~BUN/root/chunk-hhgqcegv.js";
import {
  Bit,
  TYe,
  sDn,
  Sgr,
  Pao,
  SHe,
  iDn,
  nms,
  epe,
  PHe,
  LR,
  V1,
  hdo,
  u6,
  cd,
  z_s,
  lw,
  rwe,
  dQt,
  Ipo
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  Je
} from "B:/~BUN/root/chunk-r0jnxjth.js";
import {
  fBe
} from "B:/~BUN/root/chunk-3thbj98m.js";
import {
  $ce,
  Dar
} from "B:/~BUN/root/chunk-2ym72j6h.js";
import {
  hae,
  yae,
  jy
} from "B:/~BUN/root/chunk-th6c28ah.js";
import {
  v_
} from "B:/~BUN/root/chunk-y424etr5.js";

function H(n, e) {
  if (e.pluginSource !== void 0 && nS(e.pluginSource) === Tc) return !0;
  let c = $ce(n, t_());
  if (c === void 0) return !1;
  return c.kind === "server" || Dar(e.pluginSource, c)
}

function Hce() {
  return wr() ? H : void 0
}
var D = (n) => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function Iar(n, e) {
  return 0
}
async function FF(n, e, c, y = {}) {
  let u = y.applyStagedInstalls ?? !0,
    f = yL(),
    {
      changesLanded: h,
      holdsSet: k
    } = f;
  using p = {
    [Symbol.dispose]: () => {
      f.endHoldSetBefore(k)
    }
  };
  let s = Ne().organizationAsk,
    w = u && v_() !== "unanswered" ? s.heldReresolve : null;
  if (w) s.heldReresolve = null, await w().catch(l);
  if (t("refreshActivePlugins: clearing all plugin caches"), u) SVs(), z_s();
  if (cd(e, c), u) nms();
  let o = await lw(e, c);
  await hdo(e), Je.refreshConfig();
  let [S, j, b] = await Promise.all([epe(e), PHe(e), LR(ke(), e)]), {
    enabled: g,
    disabled: L,
    errors: M,
    warnings: v
  } = o, _ = [], R = [], [B, N] = await Promise.all([Promise.all(g.map(async (r) => {
    let a = await Bit(r, _, e, {
      warnings: R
    });
    return a ? Object.keys(a).length : 0
  })), Promise.all(g.map(async (r) => {
    if (r.lspServers) return Object.keys(r.lspServers).length;
    let a = await TYe(r, _, e);
    if (a) r.lspServers = a;
    return a ? Object.keys(a).length : 0
  }))]), E = B.reduce((r, a) => r + a, 0), C = N.reduce((r, a) => r + a, 0);
  await Iar(g, _);
  let I = [...v, ...R, ...sDn(g)],
    P = [...M, ..._];
  n.applyRefresh({
    enabled: g,
    disabled: L,
    commands: S,
    errors: P,
    warnings: I,
    agentDefinitions: b
  }), iDn(e, c);
  let A = !1;
  try {
    await u6(e, c)
  } catch (r) {
    A = !0, l(r), t(`refreshActivePlugins: loadPluginHooks failed: ${d(r)}`)
  }
  if (!A) await dQt(g, e).catch(l), f.reloaded(h);
  let O = g.reduce((r, a) => {
    if (!a.hooksConfig) return r;
    return r + Object.values(a.hooksConfig).reduce((T, x) => T + (x?.reduce((G, z) => G + z.hooks.length, 0) ?? 0), 0)
  }, 0);
  return V1.emit(), t(`refreshActivePlugins: ${g.length} enabled, ${S.length} commands, ${j.length} skills, ${b.allAgents.length} agents, ${O} hooks, ${E} MCP, ${C} LSP`), {
    enabled_count: F(g, (r) => r.isBuiltin !== !0),
    disabled_count: F(L, (r) => r.isBuiltin !== !0),
    command_count: S.length,
    skill_count: j.length,
    agent_count: b.allAgents.length,
    hook_count: O,
    mcp_count: E,
    lsp_count: C,
    error_count: P.length + (A ? 1 : 0),
    errors: P,
    warnings: I,
    agentDefinitions: b,
    pluginCommands: S
  }
}
async function R8(n) {
  let e = new Set(n.mcpClients.filter((o) => o.config.pluginSource !== void 0).map((o) => o.name)),
    c, y = () => c ??= rwe(n.storageV5),
    u = await Ipo(n.dynamicMcpConfig ?? {}, n.storageV5, y, Hce());
  for (let o of D(n.dynamicMcpConfig)) u.add(o);
  let f = [...u].filter((o) => !e.has(o)).sort(),
    h = [...e].filter((o) => !u.has(o)).sort(),
    k = f.length > 0 || h.length > 0,
    p = jy() && yae(n.model) && !hae(n.model),
    s = Th() > 0,
    m = null;
  if (fBe() && !p && s && !xr("lspServers")) {
    let o = Pao() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await J(y, n.storageV5, n.credentials);
    if (!SHe()) {
      if (o.hasServers) m = "adds";
      else if (o.loaderFailedApplyHealable) m = "may-add"
    } else if (!o.hasServers && !o.derivationFailed) {
      if (o.loaderFailedApplyHealable) m = "may-remove";
      else if (!o.loaderFailed) m = "removes"
    }
  }
  return {
    mcpServersAdded: f,
    mcpServersRemoved: h,
    toolSearchEnabled: p,
    lspToolChange: m,
    wouldInvalidateCache: (k || m !== null) && !p && s
  }
}
async function J(n, e, c) {
  let {
    enabled: y,
    errors: u
  } = await n(), f = !1, h = u.some(VOe), k = u.some((s) => VOe(s) && !(s.type === "plugin-not-installed" && s.registryReadFailed !== !0) && !(s.type === "marketplace-not-found" && s.registryReadFailed !== !0) && s.type !== "dependency-version-unsatisfied" && !(s.type === "dependency-unsatisfied" && s.reason !== "not-found")), p = !1;
  for (let s of y) {
    let m = [];
    try {
      let w = await Sgr(s, m, e, c);
      if (w !== void 0 && Object.keys(w).length > 0) f = !0
    } catch {
      p = !0
    }
    if (m.length > 0) p = !0
  }
  return {
    hasServers: f,
    loaderFailed: h,
    loaderFailedApplyHealable: k,
    derivationFailed: p
  }
}

function M4t(n, e) {
  i("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  })
}
export {
  Hce,
  Iar,
  FF,
  R8,
  M4t
};
