// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee,
  ab,
  HH,
  dv
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Fr
} from "B:/~BUN/root/chunk-ge2k1jpp.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ur
} from "B:/~BUN/root/chunk-y5gyn2hc.js";
import {
  hp,
  ob
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  g7i
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  Q_,
  VGe
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  wxt,
  Cdt,
  ddr,
  vQr,
  NZo,
  G5e,
  cdr,
  D_i,
  Zve,
  J5e,
  IP,
  XK,
  Ots,
  eZ,
  Qfr,
  Lc,
  Pos,
  gEi,
  soo,
  dE,
  ki,
  gW,
  txn,
  Yos
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  q_e,
  Y_e,
  lh
} from "B:/~BUN/root/chunk-gezr7m08.js";
import {
  DXe
} from "B:/~BUN/root/chunk-6h5p2dxf.js";
import {
  Ge
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  Bke,
  P4r
} from "B:/~BUN/root/chunk-4zrrye7q.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";

function K(n, e) {
  if (e.pluginSource !== void 0 && ob(e.pluginSource) === hp) return !0;
  let u = Bke(n, dv());
  if (u === void 0) return !1;
  return u.kind === "server" || P4r(e.pluginSource, u)
}

function Uke() {
  return Nr() ? K : void 0
}
var N = (n) => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function R4r(n, e) {
  return 0
}
async function Qj(n, e, u, y = {}) {
  let f = y.applyStagedInstalls ?? !0,
    g = HH(),
    {
      changesLanded: w,
      holdsSet: S
    } = g;
  using h = {
    [Symbol.dispose]: () => {
      g.endHoldSetBefore(S)
    }
  };
  let s = Ae().organizationAsk,
    k = f && Q_() !== "unanswered" ? s.heldReresolve : null;
  if (k) s.heldReresolve = null, await k().catch(a);
  if (t("refreshActivePlugins: clearing all plugin caches"), f) g7i(), gEi();
  let o = i.CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD && !i.CLAUDE_CODE_SYNC_PLUGIN_INSTALL && !soo() && Ae().pluginLoadsRunning === 0;
  if (Lc(e, u, o ? "caller" : "clear"), f) D_i();
  if (o) Qfr(e, u).catch(a);
  let P;
  if (o) {
    let r = ki(e, u),
      c = await r.catch((R) => {
        a(R);
        return
      });
    if (Ae().pluginLoadCacheOnly === r && !soo()) P = c
  }
  P ??= await dE(e, u), Pos();
  let j = Ae().pluginLoadCacheOnly;
  await Ots(e), Ge.refreshConfig();
  let [A, C, b] = await Promise.all([Zve(e), J5e(e), IP(Ee(), e)]), {
    enabled: p,
    disabled: F,
    errors: T,
    warnings: x
  } = P, _ = [], O = [], [G, z] = await Promise.all([Promise.all(p.map(async (r) => {
    let c = await wxt(r, _, e, {
      warnings: O
    });
    return c ? Object.keys(c).length : 0
  })), Promise.all(p.map(async (r) => {
    if (r.lspServers) return Object.keys(r.lspServers).length;
    let c = await Cdt(r, _, e);
    if (c) r.lspServers = c;
    return c ? Object.keys(c).length : 0
  }))]), I = G.reduce((r, c) => r + c, 0), D = z.reduce((r, c) => r + c, 0);
  await R4r(p, _);
  let M = [...x, ...O, ...ddr(p)],
    L = [...T, ..._];
  n.applyRefresh({
    enabled: p,
    disabled: F,
    commands: A,
    errors: L,
    warnings: M,
    agentDefinitions: b
  }), cdr(e, u);
  let E = !1;
  try {
    await eZ(e, u)
  } catch (r) {
    E = !0, a(r), t(`refreshActivePlugins: loadPluginHooks failed: ${d(r)}`)
  }
  if (!E) await txn(p, e).catch(a), g.reloaded(w);
  let v = p.reduce((r, c) => {
      if (!c.hooksConfig) return r;
      return r + Object.values(c.hooksConfig).reduce((R, H) => R + (H?.reduce((J, W) => J + W.hooks.length, 0) ?? 0), 0)
    }, 0),
    B = Fr();
  B.isAnnouncingFreshLoad = j !== void 0 && Ae().pluginLoadCacheOnly === j;
  try {
    XK.emit()
  } finally {
    B.isAnnouncingFreshLoad = !1
  }
  return t(`refreshActivePlugins: ${p.length} enabled, ${A.length} commands, ${C.length} skills, ${b.allAgents.length} agents, ${v} hooks, ${I} MCP, ${D} LSP`), {
    enabled_count: U(p, (r) => r.isBuiltin !== !0),
    disabled_count: U(F, (r) => r.isBuiltin !== !0),
    command_count: A.length,
    skill_count: C.length,
    agent_count: b.allAgents.length,
    hook_count: v,
    mcp_count: I,
    lsp_count: D,
    error_count: L.length + (E ? 1 : 0),
    errors: L,
    warnings: M,
    agentDefinitions: b
  }
}
async function Hne(n) {
  let e = new Set(n.mcpClients.filter((o) => o.config.pluginSource !== void 0).map((o) => o.name)),
    u, y = () => u ??= gW(n.storageV5),
    f = await Yos(n.dynamicMcpConfig ?? {}, n.storageV5, y, Uke());
  for (let o of N(n.dynamicMcpConfig)) f.add(o);
  let g = [...f].filter((o) => !e.has(o)).sort(),
    w = [...e].filter((o) => !f.has(o)).sort(),
    S = g.length > 0 || w.length > 0,
    h = lh() && Y_e(n.model) && !q_e(n.model),
    s = ab() > 0,
    m = null;
  if (DXe() && !h && s && !ur("lspServers")) {
    let o = NZo() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await X(y, n.storageV5, n.credentials);
    if (!G5e()) {
      if (o.hasServers) m = "adds";
      else if (o.loaderFailedApplyHealable) m = "may-add"
    } else if (!o.hasServers && !o.derivationFailed) {
      if (o.loaderFailedApplyHealable) m = "may-remove";
      else if (!o.loaderFailed) m = "removes"
    }
  }
  return {
    mcpServersAdded: g,
    mcpServersRemoved: w,
    toolSearchEnabled: h,
    lspToolChange: m,
    wouldInvalidateCache: (S || m !== null) && !h && s
  }
}
async function X(n, e, u) {
  let {
    enabled: y,
    errors: f
  } = await n(), g = !1, w = f.some(VGe), S = f.some((s) => VGe(s) && !(s.type === "plugin-not-installed" && s.registryReadFailed !== !0) && !(s.type === "marketplace-not-found" && s.registryReadFailed !== !0) && s.type !== "dependency-version-unsatisfied" && !(s.type === "dependency-unsatisfied" && s.reason !== "not-found")), h = !1;
  for (let s of y) {
    let m = [];
    try {
      let k = await vQr(s, m, e, u);
      if (k !== void 0 && Object.keys(k).length > 0) g = !0
    } catch {
      h = !0
    }
    if (m.length > 0) h = !0
  }
  return {
    hasServers: g,
    loaderFailed: w,
    loaderFailedApplyHealable: S,
    derivationFailed: h
  }
}

function dbn(n, e) {
  l("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  })
}
export {
  Uke,
  R4r,
  Qj,
  Hne,
  dbn
};
