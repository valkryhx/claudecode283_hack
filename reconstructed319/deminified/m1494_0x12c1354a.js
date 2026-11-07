// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { CIr, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Zan, zBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { $dn, fo, o7 } from "B:/~BUN/root/chunk-46ahshhq.js";
import { bk, OO, MJ } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { uk } from "B:/~BUN/root/chunk-esnm3r09.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, oe, C, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var U = 25,
  visibility = "public",
  B = 3,
  G = 200,
  timeout = 8000,
  Y = 3600000,
  maxContentLength = 8388608,
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
  return F().safeParse(x(e)).data;
}
function N(e) {
  if (Zan(e) !== null) return !0;
  if (!e.startsWith("https://") || o7(e)) return !1;
  let n;
  try {
    n = new URL(e);
  } catch {
    return !1;
  }
  return !fo(n.hostname) && !$dn(n.hostname, "ssh.github.com");
}
function E2o(e) {
  let {
    state: state,
    by: by
  } = e.checks.review;
  if (state !== "done") return !1;
  switch (by?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return zBt(e.source.repository.url);
    default:
      return !1;
  }
}
var V = p(() => u({
  data: C(oe()).nullish(),
  next_page: o().nullish()
}));
function vOe() {
  return bk("allow_plugin_directory_search") && uk() === null;
}
function kga() {
  let e = OO("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : MJ("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}
function vga() {
  if (vOe() || uk() !== null) return null;
  return "policy-not-known";
}
async function T2o({
  query: query,
  pageToken: pageToken,
  signal: signal,
  pageSize = U,
  include: include,
  keepTokenWhenEmpty = !1
}) {
  let L = Q(query.trim(), G),
    a = L !== "",
    d = pageToken !== void 0,
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
    };
  }
  let blockedBy = uk();
  if (blockedBy !== null) return z("unavailable", _, a, d, {
    cause: f("policy")
  }), {
    ok: !1,
    reason: "unavailable",
    cause: "policy",
    message: "it is blocked by your organization",
    blockedBy: blockedBy
  };
  let listings = [],
    v = 0,
    request_count = 0,
    nextPageToken = pageToken;
  try {
    do {
      let uRLSearchParams = new URLSearchParams({
        limit: String(pageSize),
        visibility: visibility
      });
      if (include !== void 0) uRLSearchParams.set("include", include);
      if (a) uRLSearchParams.set("q", L);
      if (nextPageToken !== void 0) uRLSearchParams.set("page", nextPageToken);
      let r = await jt.get(`${CIr}?${uRLSearchParams}`, {
        auth: "none",
        publicPluginDirectoryCatalog: !0,
        timeout: timeout,
        maxContentLength: maxContentLength,
        signal: signal,
        validateStatus: () => !0
      });
      if (request_count++, !r.ok) {
        let y = r.reason === "essential-traffic-only",
          cause = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, a, d, {
          cause: f(cause)
        }), c("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), {
          ok: !1,
          reason: "unavailable",
          cause: cause
        };
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
        let message;
        if (r.status === 400 && d) message = "it could not continue this results page; search again to start from the first page";else if (r.status === 429 || r.status >= 500) message = "it is temporarily unavailable; try again shortly";else message = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0,
          j = y_(typeof R === "string" ? R : void 0);
        return {
          ok: !1,
          reason: "failed",
          message: message,
          ...(j !== void 0 && {
            retryAfterMs: Math.min(j, Y)
          })
        };
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
        if (R) listings.push(R);else v++;
      }
      nextPageToken = A.data.next_page || void 0;
    } while (listings.length < pageSize && nextPageToken !== void 0 && request_count < B);
    let chase_exhausted = listings.length === 0 && nextPageToken !== void 0,
      k = chase_exhausted && !keepTokenWhenEmpty;
    if (k) nextPageToken = void 0;
    return z("success", _, a, d, {
      result_count: listings.length,
      skipped_count: v,
      request_count: request_count,
      has_more: nextPageToken !== void 0,
      chase_exhausted: chase_exhausted
    }), g("plugin_directory_search"), {
      ok: !0,
      page: {
        listings: listings,
        nextPageToken: nextPageToken,
        skippedRows: v,
        truncated: k || void 0
      }
    };
  } catch (error) {
    if (signal?.aborted) return {
      ok: !1,
      reason: "aborted"
    };
    let {
      kind: kind,
      status: s,
      message: message_2
    } = Ai(error);
    return t(`plugin directory search failed (${kind}${s ? ` ${s}` : ""}): ${message_2}`), z("failed", _, a, d, {
      error_kind: f(kind),
      ...(s !== void 0 && {
        http_status: s
      })
    }), m("plugin_directory_search", kind), {
      ok: !1,
      reason: "failed",
      message: s === void 0 && kind !== "other" ? "it could not be reached; check your network connection" : "the request failed"
    };
  }
}
function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (D(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) n[h] = x(w);
    return n;
  }
  return e;
}
function z(e, n, has_query, is_continuation, P = {}) {
  l("tengu_plugin_directory_search", {
    outcome: f(e),
    has_query: has_query,
    is_continuation: is_continuation,
    duration_ms: Math.round(performance.now() - n),
    ...P
  });
}
export { F7n, E2o, vOe, kga, vga, T2o };