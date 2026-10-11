// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Kf
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  ie,
  cr,
  XN
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Nm
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  zq
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  MSt,
  tZr
} from "B:/~BUN/root/chunk-0ywn7be5.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Hve,
  HP,
  bZ,
  drt,
  Tfo,
  fLn,
  mLn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  eOe
} from "B:/~BUN/root/chunk-rnr550nz.js";
import {
  vn
} from "B:/~BUN/root/chunk-z24e0xw2.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function ZK(n, s) {
  return n + " ".repeat(Math.max(0, s - ie(n)))
}

function gM(n, s) {
  return " ".repeat(Math.max(0, s - ie(n))) + n
}

function OSt(n) {
  let s = n.map((o) => ({
    context: o.listingTokens === null ? "-" : XN(o.listingTokens),
    week: o.weekTokens === null ? "-" : cr(o.weekTokens),
    lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${I(o.daysSinceUse,"day")}`
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
class ESe extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", {
      cause: s
    });
    this.featureErrorCode = n
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
  }
}
async function JKt(n) {
  let s = eOe();
  s.catch(() => {});
  let o = MSt(),
    c = o.allowed ? tZr(n.storageV5).catch((e) => {
      throw new ESe("scan_failed", e)
    }) : Promise.resolve(new Map);
  c.catch(() => {});
  let {
    included: k
  } = await mLn(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
    throw new ESe("skill_set_failed", e)
  }), S = Kf({
    permissionMode: n.permissionMode,
    mainLoopModel: n.mainLoopModel
  }), y = fLn(k, S, n.mainLoopModel), p = await c, r = [], l = bZ([...n.commands]), w = new Set(l.map((e) => e.name)), M = new Set(n.commands.filter((e) => drt(e) && !w.has(e.name)).map((e) => e.name)), m = new Map;
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
      f = Tfo(e.name, u ?? Hve(e));
    r.push({
      name: e.pluginInfo ? Nm(e.name) : e.name,
      source: e.pluginInfo ? Nm(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? zq : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(HP(e)) ?? (u ? p.get(u) : void 0) ?? null
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
    T = new Set(r.filter((e) => e.owner === "mcp" && e.usageCount > 0).map(d).filter((e) => e !== void 0)),
    g = a.filter((e) => {
      if (e.owner !== "mcp") return !1;
      let t = d(e);
      return t === void 0 || !T.has(t)
    }),
    P = L(g.map(d).filter((e) => e !== void 0)).map((e) => Nm(n.mcpClients.find((t) => vn(t.name) === e)?.name ?? e));
  return {
    rows: r,
    unusedOwned: h,
    unusedFromPlugins: C,
    unusedFromMcp: g,
    unusedSynced: b,
    unusedMcpServers: P,
    disusedPlugins: await s,
    weekTokensNote: o.allowed ? null : o.reason
  }
}
export {
  ZK,
  gM,
  OSt,
  ESe,
  NWe,
  JKt
};
