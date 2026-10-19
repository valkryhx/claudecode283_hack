// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  eh,
  _F,
  tye,
  MDe,
  DDe,
  m0
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d,
  of
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Lhe
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Et,
  Jp,
  wn,
  Er
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  lEs,
  yMt,
  Uwe,
  byo,
  XZt,
  dEs,
  _Mt,
  fN,
  mEs,
  Vkr,
  gEs,
  G6,
  Ayo
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  iKe,
  B4t
} from "B:/~BUN/root/chunk-err088rz.js";

function RRn(e) {
  let n = G6();
  if (!n.five_hour && !n.seven_day) {
    let s = Vkr(e);
    return s ? {
      utilization: s.utilization,
      source: "persisted",
      fetchedAtMs: s.fetchedAtMs
    } : null
  }
  let o = (s) => s ? {
      utilization: Lhe(s.utilization),
      resets_at: new Date(s.resets_at * 1000).toISOString()
    } : void 0,
    i = z(Ayo().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: o(n.five_hour),
      seven_day: o(n.seven_day),
      ...i && {
        limits: [i]
      }
    },
    source: "headers"
  }
}

function z(e, n) {
  if (!e) return;
  let o = Uwe();
  if (!o[0]) return;
  let i = _Mt(Vkr(n)?.utilization.limits, o),
    s = i.length === 1 ? i[0].displayName : o[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: Lhe(e.utilization),
    resets_at: new Date(e.resets_at * 1000).toISOString(),
    scope: {
      model: {
        display_name: s
      }
    }
  }
}

function f(e, n) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: n,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs
  }
}
var y = 200;

function g(e) {
  if (e.length <= y) return e;
  return `${e.slice(0,y).replace(/[\uD800-\uDBFF]$/,"")}\u2026`
}
async function War(e, n) {
  let o = await R(e, n);
  if (o.status !== "ok" && o.status !== "seeded") return o;
  if (o.status === "seeded" && o.seedSource === "headers") {
    let i = Ayo().seven_day_overage_included;
    if (i) {
      await byo();
      let s = z(i, e),
        {
          limits: a,
          ...c
        } = o.utilization;
      return {
        ...o,
        utilization: s ? {
          ...c,
          limits: [s]
        } : c
      }
    }
  }
  if (XZt(o.utilization.limits)) await byo();
  return o
}
async function R(e, n) {
  let o = wn()?.accountUuid;
  if (Et() && Jp()) {
    let i = gEs(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs/1000)}s old; endpoint not asked`), {
      status: "ok",
      utilization: i.utilization
    }
  }
  try {
    let i = await fN(n);
    if (!i) return {
      status: "empty_response"
    };
    let s = Et() && Jp(),
      a = lEs(i),
      c = yMt(i);
    if (!a || s && !c) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let u = a && "error" in i ? i.error : void 0,
        p = typeof u === "object" && u !== null && "type" in u && u.type === "rate_limit_error" ? "envelope" : null,
        m = RRn(e);
      if (m) return f(m, p);
      return {
        status: "unavailable",
        rateLimitedVia: p,
        responseBody: g(_(i))
      }
    }
    if (c) mEs(i, o, e);
    return {
      status: "ok",
      utilization: i
    }
  } catch (i) {
    if (of(i)) t(`Failed to load usage data: ${d(i)}`, {
      level: "error"
    });
    else l(i);
    let s = i,
      a = s.response?.status === 429 ? "http_429" : null,
      c = RRn(e);
    if (c) return f(c, a);
    return {
      status: "unavailable",
      rateLimitedVia: a,
      responseBody: s.response?.data ? g(_(s.response.data)) : void 0
    }
  }
}
var nJr = 10;

function h(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter((n) => e.totalCost > 0 && n.cost / e.totalCost * 100 >= nJr).map((n) => ({
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
async function ARn({
  includeBehaviors: e = !0,
  storageV5: n,
  credentials: o
}) {
  let i = Et(),
    s = i && Jp(),
    [a, c] = await Promise.all([s ? War(n, o) : Promise.resolve(null), e && i && iKe().allowed ? B4t(n).then((r) => ({
      day: h(r.day),
      week: h(r.week)
    }), (r) => (l(r), null)) : Promise.resolve(null)]),
    u = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null,
    p;
  if (u !== null) try {
    p = _Mt(u.limits, Uwe()).map((r) => ({
      display_name: r.displayName,
      utilization: r.limit.utilization ?? null,
      resets_at: typeof r.limit.resets_at === "number" ? new Date(r.limit.resets_at * 1000).toISOString() : r.limit.resets_at ?? null
    }))
  } catch (r) {
    t(`model_scoped projection failed: ${d(r)}`, {
      level: "error"
    })
  }
  let m = u;
  if (u !== null && a?.status === "seeded") {
    let {
      limits: r,
      ...S
    } = u;
    m = S
  }
  let v = p !== void 0 && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !dEs(a.utilization.limits);
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
    rate_limits_available: s,
    rate_limits: u === null ? null : p !== void 0 && p.length > 0 ? {
      ...m,
      model_scoped: p
    } : v ? {
      ...m,
      model_scoped: []
    } : m,
    behaviors: c
  }
}
export {
  RRn,
  War,
  nJr,
  ARn
};
