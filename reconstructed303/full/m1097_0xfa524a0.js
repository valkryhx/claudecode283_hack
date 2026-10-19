// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  qg
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  cr,
  NW
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  yy
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  FJ
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  uHe,
  GL,
  Nue,
  qit,
  Chs,
  r_r,
  o_r
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  U4t,
  lns
} from "B:/~BUN/root/chunk-err088rz.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  sKe
} from "B:/~BUN/root/chunk-10f1f84z.js";
import {
  Tn
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";

function S7(n, s) {
  return n + " ".repeat(Math.max(0, s - ie(n)))
}

function z$(n, s) {
  return " ".repeat(Math.max(0, s - ie(n))) + n
}

function $4t(n) {
  let s = n.map((o) => ({
    context: o.listingTokens === null ? "-" : NW(o.listingTokens),
    week: o.weekTokens === null ? "-" : cr(o.weekTokens),
    lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${O(o.daysSinceUse,"day")}`
  }));
  return {
    cells: s,
    widths: {
      name: Math.max(5, ...n.map((o) => ie(o.name))),
      source: Math.max(6, ...n.map((o) => ie(o.source))),
      context: Math.max(7, ...s.map((o) => ie(o.context))),
      week: Math.max(9, ...s.map((o) => ie(o.week))),
      uses: Math.max(4, ...n.map((o) => ie(String(o.usageCount))))
    }
  }
}
class ENe extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", {
      cause: s
    });
    this.featureErrorCode = n
  }
}

function Sot(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: le(n).mode,
    storageV5: n.storageV5
  }
}
async function xRn(n) {
  let s = sKe();
  s.catch(() => {});
  let o = U4t(),
    c = o.allowed ? lns(n.storageV5).catch((e) => {
      throw new ENe("scan_failed", e)
    }) : Promise.resolve(new Map);
  c.catch(() => {});
  let {
    included: k
  } = await o_r(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
    throw new ENe("skill_set_failed", e)
  }), S = qg({
    permissionMode: n.permissionMode,
    mainLoopModel: n.mainLoopModel
  }), y = r_r(k, S, n.mainLoopModel), p = await c, r = [], l = Nue([...n.commands]), w = new Set(l.map((e) => e.name)), M = new Set(n.commands.filter((e) => qit(e) && !w.has(e.name)).map((e) => e.name)), m = new Map;
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1)
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let t = e.name.lastIndexOf(":"),
      i = t > 0 ? e.name.slice(t + 1) : void 0,
      u = i !== void 0 && e.loadedFrom !== "syncedSkills" && M.has(i) && m.get(i) === 1 ? i : void 0,
      f = Chs(e.name, u ?? uHe(e));
    r.push({
      name: e.pluginInfo ? yy(e.name) : e.name,
      source: e.pluginInfo ? yy(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? FJ : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(GL(e)) ?? (u ? p.get(u) : void 0) ?? null
    })
  }
  r.sort((e, t) => (t.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter((e) => e.usageCount === 0 && e.listingTokens !== null),
    h = a.filter((e) => e.owner === "settings"),
    b = a.filter((e) => e.owner === "synced"),
    x = new Set(r.filter((e) => e.usageCount > 0 && e.pluginKey !== void 0).map((e) => e.pluginKey)),
    C = a.filter((e) => e.owner === "plugin" && (e.pluginKey === void 0 || !x.has(e.pluginKey))),
    d = (e) => {
      let t = e.name.indexOf(":");
      return t > 0 ? e.name.slice(0, t) : void 0
    },
    I = new Set(r.filter((e) => e.owner === "mcp" && e.usageCount > 0).map(d).filter((e) => e !== void 0)),
    g = a.filter((e) => {
      if (e.owner !== "mcp") return !1;
      let t = d(e);
      return t === void 0 || !I.has(t)
    }),
    T = L(g.map(d).filter((e) => e !== void 0)).map((e) => yy(n.mcpClients.find((t) => Tn(t.name) === e)?.name ?? e));
  return {
    rows: r,
    unusedOwned: h,
    unusedFromPlugins: C,
    unusedFromMcp: g,
    unusedSynced: b,
    unusedMcpServers: T,
    disusedPlugins: await s,
    weekTokensNote: o.allowed ? null : o.reason
  }
}
export {
  S7,
  z$,
  $4t,
  ENe,
  Sot,
  xRn
};
