// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { eh, _F, tye, MDe, DDe, m0 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, of } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Lhe } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Et, Jp, wn, Er } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { lEs, yMt, Uwe, byo, XZt, dEs, _Mt, fN, mEs, Vkr, gEs, G6, Ayo } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { iKe, B4t } from "B:/~BUN/root/chunk-err088rz.js";
function RRn(e) {
  let n = G6();
  if (!n.five_hour && !n.seven_day) {
    let s = Vkr(e);
    return s ? {
      utilization: s.utilization,
      source: "persisted",
      fetchedAtMs: s.fetchedAtMs
    } : null;
  }
  let o = s => s ? {
      utilization: Lhe(s.utilization),
      resets_at: new Date(s.resets_at * 1000).toISOString()
    } : void 0,
    i = z(Ayo().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: o(n.five_hour),
      seven_day: o(n.seven_day),
      ...(i && {
        limits: [i]
      })
    },
    source: "headers"
  };
}
function z(e, n) {
  if (!e) return;
  let o = Uwe();
  if (!o[0]) return;
  let i = _Mt(Vkr(n)?.utilization.limits, o),
    display_name = i.length === 1 ? i[0].displayName : o[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: Lhe(e.utilization),
    resets_at: new Date(e.resets_at * 1000).toISOString(),
    scope: {
      model: {
        display_name: display_name
      }
    }
  };
}
function f(e, rateLimitedVia) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: rateLimitedVia,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs
  };
}
var y = 200;
function g(e) {
  if (e.length <= y) return e;
  return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function War(e, n) {
  let o = await R(e, n);
  if (o.status !== "ok" && o.status !== "seeded") return o;
  if (o.status === "seeded" && o.seedSource === "headers") {
    let seven_day_overage_included = Ayo().seven_day_overage_included;
    if (seven_day_overage_included) {
      await byo();
      let s = z(seven_day_overage_included, e),
        {
          limits: limits,
          ...c
        } = o.utilization;
      return {
        ...o,
        utilization: s ? {
          ...c,
          limits: [s]
        } : c
      };
    }
  }
  if (XZt(o.utilization.limits)) await byo();
  return o;
}
async function R(e, n) {
  let o = wn()?.accountUuid;
  if (Et() && Jp()) {
    let i = gEs(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1000)}s old; endpoint not asked`), {
      status: "ok",
      utilization: i.utilization
    };
  }
  try {
    let utilization = await fN(n);
    if (!utilization) return {
      status: "empty_response"
    };
    let s = Et() && Jp(),
      a = lEs(utilization),
      c = yMt(utilization);
    if (!a || s && !c) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let u = a && "error" in utilization ? utilization.error : void 0,
        rateLimitedVia_2 = typeof u === "object" && u !== null && "type" in u && u.type === "rate_limit_error" ? "envelope" : null,
        m = RRn(e);
      if (m) return f(m, rateLimitedVia_2);
      return {
        status: "unavailable",
        rateLimitedVia: rateLimitedVia_2,
        responseBody: g(_(utilization))
      };
    }
    if (c) mEs(utilization, o, e);
    return {
      status: "ok",
      utilization: utilization
    };
  } catch (error) {
    if (of(error)) t(`Failed to load usage data: ${d(error)}`, {
      level: "error"
    });else l(error);
    let s = error,
      rateLimitedVia_3 = s.response?.status === 429 ? "http_429" : null,
      c = RRn(e);
    if (c) return f(c, rateLimitedVia_3);
    return {
      status: "unavailable",
      rateLimitedVia: rateLimitedVia_3,
      responseBody: s.response?.data ? g(_(s.response.data)) : void 0
    };
  }
}
var nJr = 10;
function h(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter(item => e.totalCost > 0 && item.cost / e.totalCost * 100 >= nJr).map(item => ({
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
async function ARn({
  includeBehaviors = !0,
  storageV5: storageV5,
  credentials: credentials
}) {
  let i = Et(),
    rate_limits_available = i && Jp(),
    [a, behaviors] = await Promise.all([rate_limits_available ? War(storageV5, credentials) : Promise.resolve(null), includeBehaviors && i && iKe().allowed ? B4t(storageV5).then(r => ({
      day: h(r.day),
      week: h(r.week)
    }), r => (l(r), null)) : Promise.resolve(null)]),
    u = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null,
    model_scoped;
  if (u !== null) try {
    model_scoped = _Mt(u.limits, Uwe()).map(item => ({
      display_name: item.displayName,
      utilization: item.limit.utilization ?? null,
      resets_at: typeof item.limit.resets_at === "number" ? new Date(item.limit.resets_at * 1000).toISOString() : item.limit.resets_at ?? null
    }));
  } catch (error) {
    t(`model_scoped projection failed: ${d(error)}`, {
      level: "error"
    });
  }
  let m = u;
  if (u !== null && a?.status === "seeded") {
    let {
      limits: limits_2,
      ...S
    } = u;
    m = S;
  }
  let v = model_scoped !== void 0 && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !dEs(a.utilization.limits);
  return {
    session: {
      total_cost_usd: eh(),
      total_api_duration_ms: _F(),
      total_duration_ms: tye(),
      total_lines_added: MDe(),
      total_lines_removed: DDe(),
      model_usage: m0()
    },
    subscription_type: Er(),
    rate_limits_available: rate_limits_available,
    rate_limits: u === null ? null : model_scoped !== void 0 && model_scoped.length > 0 ? {
      ...m,
      model_scoped: model_scoped
    } : v ? {
      ...m,
      model_scoped: []
    } : m,
    behaviors: behaviors
  };
}
export { RRn, War, nJr, ARn };