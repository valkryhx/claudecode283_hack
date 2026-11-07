// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ty, Rj, Lxe, Nwe, Fwe, _0 } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { pxe } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Rt, fp, hn, dr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mCi, S9e, CDe, Eas, iPn, hCi, tXt, aL, gCi, wCi, Iso, kCi, cZ, Das } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { BOe } from "B:/~BUN/root/chunk-gqx24fhy.js";
import { jit, R6e, iSn, zit } from "B:/~BUN/root/chunk-7v96drnm.js";
function ger(e) {
  let r = cZ();
  if (!r.five_hour && !r.seven_day) {
    let n = Iso(e);
    return n ? {
      utilization: n.utilization,
      source: "persisted",
      fetchedAtMs: n.fetchedAtMs
    } : null;
  }
  let s = n => n ? {
      utilization: pxe(n.utilization),
      resets_at: new Date(n.resets_at * 1000).toISOString()
    } : void 0,
    i = S(Das().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: s(r.five_hour),
      seven_day: s(r.seven_day),
      ...(i && {
        limits: [i]
      })
    },
    source: "headers"
  };
}
function S(e, r) {
  if (!e) return;
  let s = CDe();
  if (!s[0]) return;
  let i = tXt(Iso(r)?.utilization.limits, s),
    display_name = i.length === 1 ? i[0].displayName : s[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: pxe(e.utilization),
    resets_at: new Date(e.resets_at * 1000).toISOString(),
    scope: {
      model: {
        display_name: display_name
      }
    }
  };
}
function g(e, rateLimitedVia, heldUntilMs) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: rateLimitedVia,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs,
    heldUntilMs: heldUntilMs
  };
}
var y = 200;
function h(e) {
  if (e.length <= y) return e;
  return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function uqt(e, r) {
  let s = await U(e, r);
  if (s.status !== "ok" && s.status !== "seeded") return s;
  if (s.status === "seeded" && s.seedSource === "headers") {
    let seven_day_overage_included = Das().seven_day_overage_included;
    if (seven_day_overage_included) {
      await Eas();
      let n = S(seven_day_overage_included, e),
        {
          limits: limits,
          ...o
        } = s.utilization;
      return {
        ...s,
        utilization: n ? {
          ...o,
          limits: [n]
        } : o
      };
    }
  }
  if (iPn(s.utilization.limits)) await Eas();
  return s;
}
async function U(e, r) {
  let s = hn()?.accountUuid;
  if (Rt() && fp()) {
    let i = kCi(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1000)}s old; endpoint not asked`), {
      status: "ok",
      utilization: i.utilization
    };
  }
  try {
    let utilization = await aL(r);
    if (!utilization) return {
      status: "empty_response"
    };
    let n = Rt() && fp(),
      u = mCi(utilization),
      o = S9e(utilization);
    if (!u || n && !o) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let c = u && "error" in utilization ? utilization.error : void 0,
        rateLimitedVia_2 = typeof c === "object" && c !== null && "type" in c && c.type === "rate_limit_error" ? "envelope" : null,
        p = ger(e);
      if (p) return g(p, rateLimitedVia_2);
      return {
        status: "unavailable",
        rateLimitedVia: rateLimitedVia_2,
        responseBody: h(_(utilization))
      };
    }
    if (o) wCi(utilization, s, e);
    return {
      status: "ok",
      utilization: utilization
    };
  } catch (error) {
    if (Im(error)) t(`Failed to load usage data: ${d(error)}`, {
      level: "error"
    });else a(error);
    let n = error,
      rateLimitedVia_3 = n.response?.status === 429 ? "http_429" : null,
      heldUntilMs_2 = rateLimitedVia_3 === null ? void 0 : await gCi(r).catch(m => {
        a(m);
        return;
      }),
      c = ger(e);
    if (c) return g(c, rateLimitedVia_3, heldUntilMs_2);
    return {
      status: "unavailable",
      rateLimitedVia: rateLimitedVia_3,
      heldUntilMs: heldUntilMs_2,
      responseBody: n.response?.data ? h(_(n.response.data)) : void 0
    };
  }
}
function v(e, r, s) {
  let i = zit(e, r, s);
  return {
    recommendations: i.map(({
      key: key,
      pct: pct,
      title: title,
      detail: detail
    }) => ({
      key: key,
      pct: pct,
      title: title,
      detail: detail
    })),
    fix: s && iSn(i),
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter(item => e.totalCost > 0 && item.cost / e.totalCost * 100 >= R6e).map(item => ({
      key: item.key,
      pct: Math.round(item.cost / e.totalCost * 100),
      count: item.count
    })),
    agents: e.agents,
    skills: e.skills,
    plugins: e.plugins,
    mcp_servers: e.mcpServers
  };
}
async function yer({
  includeBehaviors = !0,
  storageV5: storageV5,
  credentials: credentials,
  live: live
}) {
  let n = Rt(),
    rate_limits_available = n && fp(),
    [o, behaviors] = await Promise.all([rate_limits_available ? uqt(storageV5, credentials) : Promise.resolve(null), includeBehaviors && n && BOe().allowed ? jit(storageV5).then(l => ({
      day: v(l.day, l.evidence.day, live),
      week: v(l.week, l.evidence.week, live)
    }), l => (a(l), null)) : Promise.resolve(null)]),
    m = o?.status === "ok" || o?.status === "seeded" ? o.utilization : null,
    model_scoped;
  if (m !== null) try {
    model_scoped = tXt(m.limits, CDe()).map(item => ({
      display_name: item.displayName,
      utilization: item.limit.utilization ?? null,
      resets_at: typeof item.limit.resets_at === "number" ? new Date(item.limit.resets_at * 1000).toISOString() : item.limit.resets_at ?? null
    }));
  } catch (error) {
    t(`model_scoped projection failed: ${d(error)}`, {
      level: "error"
    });
  }
  let f = m;
  if (m !== null && o?.status === "seeded") {
    let {
      limits: limits_2,
      ...R
    } = m;
    f = R;
  }
  let z = model_scoped !== void 0 && o?.status === "ok" && (o.utilization.five_hour != null || o.utilization.seven_day != null) && Array.isArray(o.utilization.limits) && !hCi(o.utilization.limits);
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
    rate_limits_available: rate_limits_available,
    rate_limits: m === null ? null : model_scoped !== void 0 && model_scoped.length > 0 ? {
      ...f,
      model_scoped: model_scoped
    } : z ? {
      ...f,
      model_scoped: []
    } : f,
    behaviors: behaviors
  };
}
export { ger, uqt, yer };