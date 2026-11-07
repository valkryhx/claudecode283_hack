// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  CIr,
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Zan,
  zBt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  $dn,
  fo,
  o7
} from "B:/~BUN/root/chunk-46ahshhq.js";
import {
  bk,
  OO,
  MJ
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  y_
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  uk
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  o,
  oe,
  C,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var U = 25,
  O = "public",
  B = 3,
  G = 200,
  H = 8000,
  Y = 3600000,
  q = 8388608,
  F = p(() => u({
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
    surfaces: C(o()).optional().catch(void 0),
    source: u({
      type: T("directory"),
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

function F7n(e) {
  return F().safeParse(x(e)).data
}

function N(e) {
  if (Zan(e) !== null) return !0;
  if (!e.startsWith("https://") || o7(e)) return !1;
  let n;
  try {
    n = new URL(e)
  } catch {
    return !1
  }
  return !fo(n.hostname) && !$dn(n.hostname, "ssh.github.com")
}

function E2o(e) {
  let {
    state: n,
    by: h
  } = e.checks.review;
  if (n !== "done") return !1;
  switch (h?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return zBt(e.source.repository.url);
    default:
      return !1
  }
}
var V = p(() => u({
  data: C(oe()).nullish(),
  next_page: o().nullish()
}));

function vOe() {
  return bk("allow_plugin_directory_search") && uk() === null
}

function kga() {
  let e = OO("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : MJ("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment"
}

function vga() {
  if (vOe() || uk() !== null) return null;
  return "policy-not-known"
}
async function T2o({
  query: e,
  pageToken: n,
  signal: h,
  pageSize: w = U,
  include: P,
  keepTokenWhenEmpty: I = !1
}) {
  let L = Q(e.trim(), G),
    a = L !== "",
    d = n !== void 0,
    _ = performance.now();
  if (!bk("allow_plugin_directory_search")) {
    let i = OO("allow_plugin_directory_search");
    return z("unavailable", _, a, d, {
      cause: f("policy")
    }), m("plugin_directory_search", i === "org_denied" ? "policy_denied" : i === "unregistered" ? "policy_mirror_unregistered" : i === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), {
      ok: !1,
      reason: "unavailable",
      cause: "policy",
      message: (i === "cache_miss" || i === "unregistered" ? null : MJ("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment",
      blockedBy: i === "org_denied" || i === "latched" ? "policy_limit" : void 0
    }
  }
  let M = uk();
  if (M !== null) return z("unavailable", _, a, d, {
    cause: f("policy")
  }), {
    ok: !1,
    reason: "unavailable",
    cause: "policy",
    message: "it is blocked by your organization",
    blockedBy: M
  };
  let E = [],
    v = 0,
    S = 0,
    b = n;
  try {
    do {
      let s = new URLSearchParams({
        limit: String(w),
        visibility: O
      });
      if (P !== void 0) s.set("include", P);
      if (a) s.set("q", L);
      if (b !== void 0) s.set("page", b);
      let r = await jt.get(`${CIr}?${s}`, {
        auth: "none",
        publicPluginDirectoryCatalog: !0,
        timeout: H,
        maxContentLength: q,
        signal: h,
        validateStatus: () => !0
      });
      if (S++, !r.ok) {
        let y = r.reason === "essential-traffic-only",
          R = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, a, d, {
          cause: f(R)
        }), c("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), {
          ok: !1,
          reason: "unavailable",
          cause: R
        }
      }
      if (r.status === 404) return z("not_served", _, a, d, {
        http_status: 404
      }), c("plugin_directory_search", "not_served"), {
        ok: !1,
        reason: "not-served"
      };
      if (r.status >= 400) {
        z("failed", _, a, d, {
          error_kind: f("http"),
          http_status: r.status
        }), m("plugin_directory_search", `http_${r.status}`);
        let y;
        if (r.status === 400 && d) y = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500) y = "it is temporarily unavailable; try again shortly";
        else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0,
          j = y_(typeof R === "string" ? R : void 0);
        return {
          ok: !1,
          reason: "failed",
          message: y,
          ...j !== void 0 && {
            retryAfterMs: Math.min(j, Y)
          }
        }
      }
      let A = V().safeParse(r.data);
      if (!A.success) return z("failed", _, a, d, {
        error_kind: f("invalid_schema")
      }), m("plugin_directory_search", "invalid_schema"), {
        ok: !1,
        reason: "failed",
        message: "it returned a response Claude Code could not read"
      };
      for (let y of A.data.data ?? []) {
        let R = F7n(y);
        if (R) E.push(R);
        else v++
      }
      b = A.data.next_page || void 0
    } while (E.length < w && b !== void 0 && S < B);
    let i = E.length === 0 && b !== void 0,
      k = i && !I;
    if (k) b = void 0;
    return z("success", _, a, d, {
      result_count: E.length,
      skipped_count: v,
      request_count: S,
      has_more: b !== void 0,
      chase_exhausted: i
    }), g("plugin_directory_search"), {
      ok: !0,
      page: {
        listings: E,
        nextPageToken: b,
        skippedRows: v,
        truncated: k || void 0
      }
    }
  } catch (i) {
    if (h?.aborted) return {
      ok: !1,
      reason: "aborted"
    };
    let {
      kind: k,
      status: s,
      message: r
    } = Ai(i);
    return t(`plugin directory search failed (${k}${s?` ${s}`:""}): ${r}`), z("failed", _, a, d, {
      error_kind: f(k),
      ...s !== void 0 && {
        http_status: s
      }
    }), m("plugin_directory_search", k), {
      ok: !1,
      reason: "failed",
      message: s === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed"
    }
  }
}

function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (D(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e))
      if (w !== null) n[h] = x(w);
    return n
  }
  return e
}

function z(e, n, h, w, P = {}) {
  l("tengu_plugin_directory_search", {
    outcome: f(e),
    has_query: h,
    is_continuation: w,
    duration_ms: Math.round(performance.now() - n),
    ...P
  })
}
export {
  F7n,
  E2o,
  vOe,
  kga,
  vga,
  T2o
};
