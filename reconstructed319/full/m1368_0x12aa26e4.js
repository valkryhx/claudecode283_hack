// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ty,
  Rj,
  Lxe,
  Nwe,
  Fwe,
  _0
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  Im
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  pxe
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Rt,
  fp,
  hn,
  dr
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  mCi,
  S9e,
  CDe,
  Eas,
  iPn,
  hCi,
  tXt,
  aL,
  gCi,
  wCi,
  Iso,
  kCi,
  cZ,
  Das
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  BOe
} from "B:/~BUN/root/chunk-gqx24fhy.js";
import {
  jit,
  R6e,
  iSn,
  zit
} from "B:/~BUN/root/chunk-7v96drnm.js";

function ger(e) {
  let r = cZ();
  if (!r.five_hour && !r.seven_day) {
    let n = Iso(e);
    return n ? {
      utilization: n.utilization,
      source: "persisted",
      fetchedAtMs: n.fetchedAtMs
    } : null
  }
  let s = (n) => n ? {
      utilization: pxe(n.utilization),
      resets_at: new Date(n.resets_at * 1000).toISOString()
    } : void 0,
    i = S(Das().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: s(r.five_hour),
      seven_day: s(r.seven_day),
      ...i && {
        limits: [i]
      }
    },
    source: "headers"
  }
}

function S(e, r) {
  if (!e) return;
  let s = CDe();
  if (!s[0]) return;
  let i = tXt(Iso(r)?.utilization.limits, s),
    n = i.length === 1 ? i[0].displayName : s[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: pxe(e.utilization),
    resets_at: new Date(e.resets_at * 1000).toISOString(),
    scope: {
      model: {
        display_name: n
      }
    }
  }
}

function g(e, r, s) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: r,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs,
    heldUntilMs: s
  }
}
var y = 200;

function h(e) {
  if (e.length <= y) return e;
  return `${e.slice(0,y).replace(/[\uD800-\uDBFF]$/,"")}\u2026`
}
async function uqt(e, r) {
  let s = await U(e, r);
  if (s.status !== "ok" && s.status !== "seeded") return s;
  if (s.status === "seeded" && s.seedSource === "headers") {
    let i = Das().seven_day_overage_included;
    if (i) {
      await Eas();
      let n = S(i, e),
        {
          limits: u,
          ...o
        } = s.utilization;
      return {
        ...s,
        utilization: n ? {
          ...o,
          limits: [n]
        } : o
      }
    }
  }
  if (iPn(s.utilization.limits)) await Eas();
  return s
}
async function U(e, r) {
  let s = hn()?.accountUuid;
  if (Rt() && fp()) {
    let i = kCi(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs/1000)}s old; endpoint not asked`), {
      status: "ok",
      utilization: i.utilization
    }
  }
  try {
    let i = await aL(r);
    if (!i) return {
      status: "empty_response"
    };
    let n = Rt() && fp(),
      u = mCi(i),
      o = S9e(i);
    if (!u || n && !o) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let c = u && "error" in i ? i.error : void 0,
        m = typeof c === "object" && c !== null && "type" in c && c.type === "rate_limit_error" ? "envelope" : null,
        p = ger(e);
      if (p) return g(p, m);
      return {
        status: "unavailable",
        rateLimitedVia: m,
        responseBody: h(_(i))
      }
    }
    if (o) wCi(i, s, e);
    return {
      status: "ok",
      utilization: i
    }
  } catch (i) {
    if (Im(i)) t(`Failed to load usage data: ${d(i)}`, {
      level: "error"
    });
    else a(i);
    let n = i,
      u = n.response?.status === 429 ? "http_429" : null,
      o = u === null ? void 0 : await gCi(r).catch((m) => {
        a(m);
        return
      }),
      c = ger(e);
    if (c) return g(c, u, o);
    return {
      status: "unavailable",
      rateLimitedVia: u,
      heldUntilMs: o,
      responseBody: n.response?.data ? h(_(n.response.data)) : void 0
    }
  }
}

function v(e, r, s) {
  let i = zit(e, r, s);
  return {
    recommendations: i.map(({
      key: n,
      pct: u,
      title: o,
      detail: c
    }) => ({
      key: n,
      pct: u,
      title: o,
      detail: c
    })),
    fix: s && iSn(i),
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter((n) => e.totalCost > 0 && n.cost / e.totalCost * 100 >= R6e).map((n) => ({
      key: n.key,
      pct: Math.round(n.cost / e.totalCost * 100),
      count: n.count
    })),
    agents: e.agents,
    skills: e.skills,
    plugins: e.plugins,
    mcp_servers: e.mcpServers
  }
}
async function yer({
  includeBehaviors: e = !0,
  storageV5: r,
  credentials: s,
  live: i
}) {
  let n = Rt(),
    u = n && fp(),
    [o, c] = await Promise.all([u ? uqt(r, s) : Promise.resolve(null), e && n && BOe().allowed ? jit(r).then((l) => ({
      day: v(l.day, l.evidence.day, i),
      week: v(l.week, l.evidence.week, i)
    }), (l) => (a(l), null)) : Promise.resolve(null)]),
    m = o?.status === "ok" || o?.status === "seeded" ? o.utilization : null,
    p;
  if (m !== null) try {
    p = tXt(m.limits, CDe()).map((l) => ({
      display_name: l.displayName,
      utilization: l.limit.utilization ?? null,
      resets_at: typeof l.limit.resets_at === "number" ? new Date(l.limit.resets_at * 1000).toISOString() : l.limit.resets_at ?? null
    }))
  } catch (l) {
    t(`model_scoped projection failed: ${d(l)}`, {
      level: "error"
    })
  }
  let f = m;
  if (m !== null && o?.status === "seeded") {
    let {
      limits: l,
      ...R
    } = m;
    f = R
  }
  let z = p !== void 0 && o?.status === "ok" && (o.utilization.five_hour != null || o.utilization.seven_day != null) && Array.isArray(o.utilization.limits) && !hCi(o.utilization.limits);
  return {
    session: {
      total_cost_usd: Ty(),
      total_api_duration_ms: Rj(),
      total_duration_ms: Lxe(),
      total_lines_added: Nwe(),
      total_lines_removed: Fwe(),
      model_usage: _0()
    },
    subscription_type: dr(),
    rate_limits_available: u,
    rate_limits: m === null ? null : p !== void 0 && p.length > 0 ? {
      ...f,
      model_scoped: p
    } : z ? {
      ...f,
      model_scoped: []
    } : f,
    behaviors: c
  }
}
export {
  ger,
  uqt,
  yer
};
