// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { qg } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { cr, NW } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { yy } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { FJ } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { uHe, GL, Nue, qit, Chs, r_r, o_r } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { U4t, lns } from "B:/~BUN/root/chunk-err088rz.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { sKe } from "B:/~BUN/root/chunk-10f1f84z.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
function S7(n, s) {
  return n + " ".repeat(Math.max(0, s - ie(n)));
}
function z$(n, s) {
  return " ".repeat(Math.max(0, s - ie(n))) + n;
}
function $4t(n) {
  let cells = n.map(item => ({
    context: item.listingTokens === null ? "-" : NW(item.listingTokens),
    week: item.weekTokens === null ? "-" : cr(item.weekTokens),
    lastUsed: item.daysSinceUse === null ? "never" : item.daysSinceUse === 0 ? "today" : `${item.daysSinceUse} ${O(item.daysSinceUse, "day")}`
  }));
  return {
    cells: cells,
    widths: {
      name: Math.max(5, ...n.map(item => ie(item.name))),
      source: Math.max(6, ...n.map(item => ie(item.source))),
      context: Math.max(7, ...cells.map(item => ie(item.context))),
      week: Math.max(9, ...cells.map(item => ie(item.week))),
      uses: Math.max(4, ...n.map(item => ie(String(item.usageCount))))
    }
  };
}
class ENe extends Error {
  featureErrorCode;
  constructor(n, cause) {
    super("skill-doctor stage failed", {
      cause: cause
    });
    this.featureErrorCode = n;
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
  };
}
async function xRn(n) {
  let s = sKe();
  s.catch(() => {});
  let o = U4t(),
    c = o.allowed ? lns(n.storageV5).catch(e => {
      throw new ENe("scan_failed", e);
    }) : Promise.resolve(new Map());
  c.catch(() => {});
  let {
      included: included
    } = await o_r(n.mcpCommands, n.agentId, n.storageV5).catch(e => {
      throw new ENe("skill_set_failed", e);
    }),
    S = qg({
      permissionMode: n.permissionMode,
      mainLoopModel: n.mainLoopModel
    }),
    y = r_r(included, S, n.mainLoopModel),
    p = await c,
    rows = [],
    l = Nue([...n.commands]),
    w = new Set(l.map(item => item.name)),
    M = new Set(n.commands.filter(item => qit(item) && !w.has(item.name)).map(item => item.name)),
    m = new Map();
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
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
    rows.push({
      name: e.pluginInfo ? yy(e.name) : e.name,
      source: e.pluginInfo ? yy(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? FJ : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(GL(e)) ?? (u ? p.get(u) : void 0) ?? null
    });
  }
  rows.sort((itemA, itemB) => (itemB.daysSinceUse ?? 1 / 0) - (itemA.daysSinceUse ?? 1 / 0));
  let a = rows.filter(item => item.usageCount === 0 && item.listingTokens !== null),
    unusedOwned = a.filter(item => item.owner === "settings"),
    unusedSynced = a.filter(item => item.owner === "synced"),
    x = new Set(rows.filter(item => item.usageCount > 0 && item.pluginKey !== void 0).map(item => item.pluginKey)),
    unusedFromPlugins = a.filter(item => item.owner === "plugin" && (item.pluginKey === void 0 || !x.has(item.pluginKey))),
    d = e => {
      let t = e.name.indexOf(":");
      return t > 0 ? e.name.slice(0, t) : void 0;
    },
    I = new Set(rows.filter(item => item.owner === "mcp" && item.usageCount > 0).map(d).filter(item => item !== void 0)),
    unusedFromMcp = a.filter(item => {
      if (item.owner !== "mcp") return !1;
      let t = d(item);
      return t === void 0 || !I.has(t);
    }),
    unusedMcpServers = L(unusedFromMcp.map(d).filter(item => item !== void 0)).map(item => yy(n.mcpClients.find(t => Tn(t.name) === item)?.name ?? item));
  return {
    rows: rows,
    unusedOwned: unusedOwned,
    unusedFromPlugins: unusedFromPlugins,
    unusedFromMcp: unusedFromMcp,
    unusedSynced: unusedSynced,
    unusedMcpServers: unusedMcpServers,
    disusedPlugins: await s,
    weekTokensNote: o.allowed ? null : o.reason
  };
}
export { S7, z$, $4t, ENe, Sot, xRn };