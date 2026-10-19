// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  pi
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  T6n,
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  NBt,
  C_t
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  J1t,
  ro,
  F4
} from "B:/~BUN/root/chunk-fsp20me0.js";
import {
  Rw,
  nR,
  m4
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  zg
} from "B:/~BUN/root/chunk-7ybsx93y.js";
import {
  pb
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  o,
  oe,
  T,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var I = 25,
  U = "public",
  O = 3,
  B = 200,
  G = 8000,
  H = 3600000,
  Y = 8388608,
  q = f(() => u({
    id: o().min(1),
    name: o().min(1),
    summary: o().optional().catch(void 0),
    description: o().optional().catch(void 0),
    release: u({
      version: o()
    }).optional().catch(void 0),
    publisher: u({
      name: o()
    }).optional().catch(void 0),
    links: u({
      documentation: o().optional().catch(void 0)
    }).optional().catch(void 0),
    surfaces: T(o()).optional().catch(void 0),
    source: u({
      type: C("directory"),
      repository: u({
        url: o().min(1),
        path: o().optional(),
        reviewed_commit: o().optional()
      })
    }),
    checks: u({
      review: u({
        state: o(),
        by: u({
          type: o()
        }).optional().catch(void 0)
      })
    })
  }));

function oTn(e) {
  return q().safeParse(A(e)).data
}

function F(e) {
  if (NBt(e) !== null) return !0;
  if (!e.startsWith("https://") || F4(e)) return !1;
  let n;
  try {
    n = new URL(e)
  } catch {
    return !1
  }
  return !ro(n.hostname) && !J1t(n.hostname, "ssh.github.com")
}

function Q8r(e) {
  let {
    state: n,
    by: h
  } = e.checks.review;
  if (n !== "done") return !1;
  switch (h?.type) {
    case "partner":
      return F(e.source.repository.url);
    case "anthropic":
      return C_t(e.source.repository.url);
    default:
      return !1
  }
}
var V = f(() => u({
  data: T(oe()).nullish(),
  next_page: o().nullish()
}));

function xqe() {
  return Rw("allow_plugin_directory_search") && pb() === null
}

function Lti() {
  let e = nR("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : m4("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment"
}

function Nti() {
  if (xqe() || pb() !== null) return null;
  return "policy-not-known"
}
async function Z8r({
  query: e,
  pageToken: n,
  signal: h,
  pageSize: w = I,
  include: E,
  keepTokenWhenEmpty: j = !1
}) {
  let x = ne(e.trim(), B),
    l = x !== "",
    d = n !== void 0,
    _ = performance.now();
  if (!Rw("allow_plugin_directory_search")) {
    let s = nR("allow_plugin_directory_search");
    return z("unavailable", _, l, d, {
      cause: c("policy")
    }), m("plugin_directory_search", s === "org_denied" ? "policy_denied" : s === "unregistered" ? "policy_mirror_unregistered" : s === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), {
      ok: !1,
      reason: "unavailable",
      cause: "policy",
      message: (s === "cache_miss" || s === "unregistered" ? null : m4("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment",
      blockedBy: s === "org_denied" || s === "latched" ? "policy_limit" : void 0
    }
  }
  let L = pb();
  if (L !== null) return z("unavailable", _, l, d, {
    cause: c("policy")
  }), {
    ok: !1,
    reason: "unavailable",
    cause: "policy",
    message: "it is blocked by your organization",
    blockedBy: L
  };
  let D = [],
    P = 0,
    v = 0,
    b = n;
  try {
    do {
      let a = new URLSearchParams({
        limit: String(w),
        visibility: U
      });
      if (E !== void 0) a.set("include", E);
      if (l) a.set("q", x);
      if (b !== void 0) a.set("page", b);
      let r = await Gt.get(`${T6n}?${a}`, {
        auth: "none",
        publicPluginDirectoryCatalog: !0,
        timeout: G,
        maxContentLength: Y,
        signal: h,
        validateStatus: () => !0
      });
      if (v++, !r.ok) {
        let y = r.reason === "essential-traffic-only",
          R = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, l, d, {
          cause: c(R)
        }), p("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), {
          ok: !1,
          reason: "unavailable",
          cause: R
        }
      }
      if (r.status === 404) return z("not_served", _, l, d, {
        http_status: 404
      }), p("plugin_directory_search", "not_served"), {
        ok: !1,
        reason: "not-served"
      };
      if (r.status >= 400) {
        z("failed", _, l, d, {
          error_kind: c("http"),
          http_status: r.status
        }), m("plugin_directory_search", `http_${r.status}`);
        let y;
        if (r.status === 400 && d) y = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500) y = "it is temporarily unavailable; try again shortly";
        else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0,
          M = zg(typeof R === "string" ? R : void 0);
        return {
          ok: !1,
          reason: "failed",
          message: y,
          ...M !== void 0 && {
            retryAfterMs: Math.min(M, H)
          }
        }
      }
      let S = V().safeParse(r.data);
      if (!S.success) return z("failed", _, l, d, {
        error_kind: c("invalid_schema")
      }), m("plugin_directory_search", "invalid_schema"), {
        ok: !1,
        reason: "failed",
        message: "it returned a response Claude Code could not read"
      };
      for (let y of S.data.data ?? []) {
        let R = oTn(y);
        if (R) D.push(R);
        else P++
      }
      b = S.data.next_page || void 0
    } while (D.length < w && b !== void 0 && v < O);
    let s = D.length === 0 && b !== void 0,
      k = s && !j;
    if (k) b = void 0;
    return z("success", _, l, d, {
      result_count: D.length,
      skipped_count: P,
      request_count: v,
      has_more: b !== void 0,
      chase_exhausted: s
    }), g("plugin_directory_search"), {
      ok: !0,
      page: {
        listings: D,
        nextPageToken: b,
        skippedRows: P,
        truncated: k || void 0
      }
    }
  } catch (s) {
    if (h?.aborted) return {
      ok: !1,
      reason: "aborted"
    };
    let {
      kind: k,
      status: a,
      message: r
    } = pi(s);
    return t(`plugin directory search failed (${k}${a?` ${a}`:""}): ${r}`), z("failed", _, l, d, {
      error_kind: c(k),
      ...a !== void 0 && {
        http_status: a
      }
    }), m("plugin_directory_search", k), {
      ok: !1,
      reason: "failed",
      message: a === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed"
    }
  }
}

function A(e) {
  if (Array.isArray(e)) return e.map(A);
  if (N(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e))
      if (w !== null) n[h] = A(w);
    return n
  }
  return e
}

function z(e, n, h, w, E = {}) {
  i("tengu_plugin_directory_search", {
    outcome: c(e),
    has_query: h,
    is_continuation: w,
    duration_ms: Math.round(performance.now() - n),
    ...E
  })
}
export {
  oTn,
  Q8r,
  xqe,
  Lti,
  Nti,
  Z8r
};
