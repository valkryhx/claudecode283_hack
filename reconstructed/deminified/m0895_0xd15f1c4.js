// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { fg, KI, mre, D_e, L_e, lA } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, Zd } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pt, Ap, An, nr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { _vo, xit, hee, fRr, oOt, bvo, Pit, nI } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { buo, zMn, Suo, $G, Cyr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { tOe, DSt } from "B:/~BUN/root/chunk-0ywn7be5.js";
function YKt(e) {
  let n = $G();
  if (!n.five_hour && !n.seven_day) {
    let s = zMn(e);
    return s ? {
      utilization: s.utilization,
      source: "persisted",
      fetchedAtMs: s.fetchedAtMs
    } : null;
  }
  let o = s => s ? {
      utilization: s.utilization * 100,
      resets_at: new Date(s.resets_at * 1000).toISOString()
    } : void 0,
    i = h(Cyr().seven_day_overage_included, e);
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
function h(e, n) {
  if (!e) return;
  let o = hee();
  if (!o[0]) return;
  let i = Pit(zMn(n)?.utilization.limits, o),
    display_name = i.length === 1 ? i[0].displayName : o[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: e.utilization * 100,
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
var _ = 200;
function y(e) {
  if (e.length <= _) return e;
  return `${e.slice(0, _).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}
async function PTn(e, n) {
  let o = await S(e, n);
  if (o.status !== "ok" && o.status !== "seeded") return o;
  if (o.status === "seeded" && o.seedSource === "headers") {
    let seven_day_overage_included = Cyr().seven_day_overage_included;
    if (seven_day_overage_included) {
      await fRr();
      let s = h(seven_day_overage_included, e),
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
  if (oOt(o.utilization.limits)) await fRr();
  return o;
}
async function S(e, n) {
  let o = An()?.accountUuid;
  if (pt() && Ap()) {
    let i = Suo(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1000)}s old; endpoint not asked`), {
      status: "ok",
      utilization: i.utilization
    };
  }
  try {
    let utilization = await nI(n);
    if (!utilization) return {
      status: "empty_response"
    };
    let s = pt() && Ap(),
      a = _vo(utilization),
      c = xit(utilization);
    if (!a || s && !c) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let u = a && "error" in utilization ? utilization.error : void 0,
        rateLimitedVia_2 = typeof u === "object" && u !== null && "type" in u && u.type === "rate_limit_error" ? "envelope" : null,
        m = YKt(e);
      if (m) return f(m, rateLimitedVia_2);
      return {
        status: "unavailable",
        rateLimitedVia: rateLimitedVia_2,
        responseBody: y(b(utilization))
      };
    }
    if (c) buo(utilization, o, e);
    return {
      status: "ok",
      utilization: utilization
    };
  } catch (error) {
    if (Zd(error)) t(`Failed to load usage data: ${l(error)}`, {
      level: "error"
    });else d(error);
    let s = error,
      rateLimitedVia_3 = s.response?.status === 429 ? "http_429" : null,
      c = YKt(e);
    if (c) return f(c, rateLimitedVia_3);
    return {
      status: "unavailable",
      rateLimitedVia: rateLimitedVia_3,
      responseBody: s.response?.data ? y(b(s.response.data)) : void 0
    };
  }
}
var ksr = 10;
function g(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter(item => e.totalCost > 0 && item.cost / e.totalCost * 100 >= ksr).map(item => ({
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
async function XKt({
  includeBehaviors = !0,
  storageV5: storageV5,
  credentials: credentials
}) {
  let i = pt(),
    rate_limits_available = i && Ap(),
    [a, behaviors] = await Promise.all([rate_limits_available ? PTn(storageV5, credentials) : Promise.resolve(null), includeBehaviors && i && tOe().allowed ? DSt(storageV5).then(r => ({
      day: g(r.day),
      week: g(r.week)
    }), r => (d(r), null)) : Promise.resolve(null)]),
    u = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null,
    model_scoped;
  if (u !== null) try {
    model_scoped = Pit(u.limits, hee()).map(item => ({
      display_name: item.displayName,
      utilization: item.limit.utilization ?? null,
      resets_at: typeof item.limit.resets_at === "number" ? new Date(item.limit.resets_at * 1000).toISOString() : item.limit.resets_at ?? null
    }));
  } catch (error) {
    t(`model_scoped projection failed: ${l(error)}`, {
      level: "error"
    });
  }
  let m = u;
  if (u !== null && a?.status === "seeded") {
    let {
      limits: limits_2,
      ...v
    } = u;
    m = v;
  }
  let z = model_scoped !== void 0 && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !bvo(a.utilization.limits);
  return {
    session: {
      total_cost_usd: fg(),
      total_api_duration_ms: KI(),
      total_duration_ms: mre(),
      total_lines_added: D_e(),
      total_lines_removed: L_e(),
      model_usage: lA()
    },
    subscription_type: nr(),
    rate_limits_available: rate_limits_available,
    rate_limits: u === null ? null : model_scoped !== void 0 && model_scoped.length > 0 ? {
      ...m,
      model_scoped: model_scoped
    } : z ? {
      ...m,
      model_scoped: []
    } : m,
    behaviors: behaviors
  };
}
export { YKt, PTn, ksr, XKt };