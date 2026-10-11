// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Kf } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ie, cr, XN } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Nm } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { zq } from "B:/~BUN/root/chunk-290k5gh5.js";
import { MSt, tZr } from "B:/~BUN/root/chunk-0ywn7be5.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Hve, HP, bZ, drt, Tfo, fLn, mLn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { eOe } from "B:/~BUN/root/chunk-rnr550nz.js";
import { vn } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function ZK(n, s) {
  return n + " ".repeat(Math.max(0, s - ie(n)));
}
function gM(n, s) {
  return " ".repeat(Math.max(0, s - ie(n))) + n;
}
function OSt(n) {
  let cells = n.map(item => ({
    context: item.listingTokens === null ? "-" : XN(item.listingTokens),
    week: item.weekTokens === null ? "-" : cr(item.weekTokens),
    lastUsed: item.daysSinceUse === null ? "never" : item.daysSinceUse === 0 ? "today" : `${item.daysSinceUse} ${I(item.daysSinceUse, "day")}`
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
class ESe extends Error {
  featureErrorCode;
  constructor(n, cause) {
    super("skill-doctor stage failed", {
      cause: cause
    });
    this.featureErrorCode = n;
  }
}
function NWe(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: me(n).mode,
    storageV5: n.storageV5
  };
}
async function JKt(n) {
  let s = eOe();
  s.catch(() => {});
  let o = MSt(),
    c = o.allowed ? tZr(n.storageV5).catch(e => {
      throw new ESe("scan_failed", e);
    }) : Promise.resolve(new Map());
  c.catch(() => {});
  let {
      included: included
    } = await mLn(n.mcpCommands, n.agentId, n.storageV5).catch(e => {
      throw new ESe("skill_set_failed", e);
    }),
    S = Kf({
      permissionMode: n.permissionMode,
      mainLoopModel: n.mainLoopModel
    }),
    y = fLn(included, S, n.mainLoopModel),
    p = await c,
    rows = [],
    l = bZ([...n.commands]),
    w = new Set(l.map(item => item.name)),
    M = new Set(n.commands.filter(item => drt(item) && !w.has(item.name)).map(item => item.name)),
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
      f = Tfo(e.name, u ?? Hve(e));
    rows.push({
      name: e.pluginInfo ? Nm(e.name) : e.name,
      source: e.pluginInfo ? Nm(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? zq : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(HP(e)) ?? (u ? p.get(u) : void 0) ?? null
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
    T = new Set(rows.filter(item => item.owner === "mcp" && item.usageCount > 0).map(d).filter(item => item !== void 0)),
    unusedFromMcp = a.filter(item => {
      if (item.owner !== "mcp") return !1;
      let t = d(item);
      return t === void 0 || !T.has(t);
    }),
    unusedMcpServers = L(unusedFromMcp.map(d).filter(item => item !== void 0)).map(item => Nm(n.mcpClients.find(t => vn(t.name) === item)?.name ?? item));
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
export { ZK, gM, OSt, ESe, NWe, JKt };