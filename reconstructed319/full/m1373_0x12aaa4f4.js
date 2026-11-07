// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S_
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  FV
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Ur,
  QV
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Pm
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  $5e,
  WB,
  jve,
  Hxt,
  Mur,
  Rto,
  Ato
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  lSn,
  Vai
} from "B:/~BUN/root/chunk-gqx24fhy.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  wX
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  Git
} from "B:/~BUN/root/chunk-3b3dm3a9.js";
import {
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function Mle(n, s) {
  return n + " ".repeat(Math.max(0, s - ce(n)))
}

function KG(n, s) {
  return " ".repeat(Math.max(0, s - ce(n))) + n
}

function aSn(n) {
  let s = n.map((o) => ({
    context: o.listingTokens === null ? "-" : QV(o.listingTokens),
    week: o.weekTokens === null ? "-" : Ur(o.weekTokens),
    lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${P(o.daysSinceUse,"day")}`
  }));
  return {
    cells: s,
    widths: {
      name: Math.max(5, ...n.map((o) => ce(o.name))),
      source: Math.max(6, ...n.map((o) => ce(o.source))),
      context: Math.max(7, ...s.map((o) => ce(o.context))),
      week: Math.max(9, ...s.map((o) => ce(o.week))),
      uses: Math.max(4, ...n.map((o) => ce(String(o.usageCount))))
    }
  }
}
class A6e extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", {
      cause: s
    });
    this.featureErrorCode = n
  }
}

function DCt(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: se(n).mode,
    storageV5: n.storageV5
  }
}
async function Ser(n) {
  let s = Git();
  s.catch(() => {});
  let o = lSn(),
    c = o.allowed ? Vai(n.storageV5).catch((e) => {
      throw new A6e("scan_failed", e)
    }) : Promise.resolve(new Map);
  c.catch(() => {});
  let {
    included: k
  } = await Ato(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
    throw new A6e("skill_set_failed", e)
  }), S = S_({
    permissionMode: n.permissionMode,
    mainLoopModel: n.mainLoopModel
  }), y = Rto(k, S, n.mainLoopModel), p = await c, r = [], l = jve([...n.commands]), w = new Set(l.map((e) => e.name)), M = new Set(n.commands.filter((e) => Hxt(e) && !w.has(e.name)).map((e) => e.name)), m = new Map;
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
      f = Mur(e.name, u ?? $5e(e));
    r.push({
      name: e.pluginInfo ? Pm(e.name) : e.name,
      source: e.pluginInfo ? wX(e.pluginInfo.repository) ? FV : Pm(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? FV : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(WB(e)) ?? (u ? p.get(u) : void 0) ?? null
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
    T = L(g.map(d).filter((e) => e !== void 0)).map((e) => Pm(n.mcpClients.find((t) => bn(t.name) === e)?.name ?? e));
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
  Mle,
  KG,
  aSn,
  A6e,
  DCt,
  Ser
};
