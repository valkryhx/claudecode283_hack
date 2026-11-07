// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { AD, bz } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { Nb, dVn, Jf, Ld } from "B:/~BUN/root/chunk-rr294jrm.js";
import { nRe } from "B:/~BUN/root/chunk-62khcyrb.js";
import { ube } from "B:/~BUN/root/chunk-pj64ve92.js";
import { PO } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { ui, cb } from "B:/~BUN/root/chunk-xwsv2hvn.js";
var D = "2023-06-01";
function drn(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": D,
    "anthropic-client-platform": cb(),
    "User-Agent": ui()
  };
}
function BFt(e) {
  return e !== null && typeof e === "object" && "terminal" in e && e.terminal === !0;
}
function A(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || e.error === null || typeof e.error !== "object") return !1;
  let n = e.error,
    r = "type" in n ? n.type : void 0,
    f = "resource_type" in n ? n.resource_type : void 0,
    o = "reason" in n ? n.reason : void 0;
  return r === "not_found_error" && f === "session_grouping" || o === "public_grouping_hosted_only" || o === "feature_disabled";
}
function U(e) {
  if (e === 401) return "oauth_rejected";
  if (e === 408 || e === 429 || e >= 500) return "transient";
  return "rejected";
}
async function E$n(e, n, title, timeout, tags, p, m, model, session_grouping_id, s, u) {
  let c = `${e}/v1/code/sessions`,
    config = {
      cwd: m ?? pe(),
      ...(model && {
        model: model
      })
    };
  if (p && "gitRepoUrl" in p) {
    let {
        buildGitSessionContext: buildGitSessionContext
      } = await import("B:/~BUN/root/chunk-03bp4rzs.js"),
      {
        sources: sources,
        outcomes: outcomes,
        report: report
      } = await buildGitSessionContext(p.gitRepoUrl, p.branch, p.defaultBranch);
    if (report.branchDropped && report.warnMessage) {
      let j = `${report.branchDropped}:${p.gitRepoUrl}:${p.branch}`;
      if (!s || s.lastKey !== j) {
        if (s) s.lastKey = j;
        t(`[code-session] ${report.warnMessage}`);
      }
    } else if (s) s.lastKey = null;
    if (sources.length > 0 || outcomes.length > 0) config.sources = sources, config.outcomes = outcomes, config.reuse_outcome_branches = !0;
  }
  let a;
  try {
    a = await Wt.post(c, {
      title: title,
      bridge: {},
      ...(tags?.length && {
        tags: tags
      }),
      ...(session_grouping_id && {
        session_grouping_id: session_grouping_id
      }),
      config: config
    }, {
      headers: drn(n),
      timeout: timeout,
      validateStatus: h => h < 500
    });
  } catch (error) {
    return t(`[code-session] Session create request failed: ${d(error)}`), null;
  }
  if (a.status !== 200 && a.status !== 201) {
    let h = AD(a.data);
    t(`[code-session] Session create failed ${a.status}${h ? `: ${h}` : ""}`);
    let detail = bz(a.data);
    if (a.status === 401) {
      if (PO(a.config)) return null;
      u?.();
    }
    if (a.status >= 400 && a.status < 500 && A(a.data)) return {
      terminal: !0,
      reason: "grouping_rejected",
      status: a.status,
      detail: detail
    };
    switch (U(a.status)) {
      case "oauth_rejected":
        return {
          terminal: !1,
          reason: "oauth_rejected"
        };
      case "transient":
        return null;
      case "rejected":
        return {
          terminal: !0,
          reason: "request_rejected",
          status: a.status,
          detail: detail
        };
    }
  }
  let l = a.data;
  if (!l || typeof l !== "object" || !("session" in l) || !l.session || typeof l.session !== "object" || !("id" in l.session) || typeof l.session.id !== "string" || !l.session.id.startsWith("cse_") || !dVn(l.session.id)) return t(`[code-session] No usable session.id (cse_*) in response: ${_(l).slice(0, 200)}`), {
    terminal: !0,
    reason: "malformed_response",
    status: a.status,
    detail: void 0
  };
  return l.session.id;
}
function ife(e) {
  return e !== null && "terminal" in e && e.terminal === !0;
}
function _z(e) {
  return typeof e === "object" && e !== null && "terminal" in e && e.terminal === !1;
}
function cbe(e) {
  let n = R(e);
  if (n !== void 0 && "resource" in n) {
    let resource = n.resource;
    if (resource === "untrusted_device" || resource === "session_stale_relogin") return resource;
  }
  return;
}
function nwa(e) {
  let n = R(e);
  return n !== void 0 && "resource" in n && n.resource === "untrusted_device" && "sub_reason" in n && n.sub_reason === "bound_unattested" ? "bound_unattested" : void 0;
}
function Fee(e) {
  if (cbe(e) === "untrusted_device") {
    let n = R(e),
      subReason = n !== void 0 && "sub_reason" in n ? n.sub_reason : void 0;
    if (subReason === void 0 || subReason === null || subReason === "") return {
      kind: "token_refused"
    };
    if (typeof subReason !== "string") return {
      kind: "unrecognized",
      subReason: `(${typeof subReason}, not a string)`
    };
    switch (subReason) {
      case "bound_unattested":
        return {
          kind: "token_refused"
        };
      case "served_call_unsigned":
        return {
          kind: "signature_wanted",
          subReason: subReason
        };
      default:
        if (ube(subReason)) return {
          kind: "unrecognized",
          subReason: subReason
        };
        return t(`[code-session] a 403's sub_reason is too long or not snake_case, so a placeholder is passed on. As sent (${subReason.length} characters; cleaned, first 64): ${Et(subReason, 64)}`), {
          kind: "unrecognized",
          subReason: "(string, too long or not snake_case)"
        };
    }
  }
  return;
}
function T$n(e) {
  return e.kind === "token_refused";
}
function b2e(e) {
  return e.kind !== "signature_wanted";
}
var RAr = {
  kind: "signature_wanted",
  subReason: "served_call_unsigned"
};
function U_o(e) {
  let n = R(e);
  if (n === void 0) return;
  let r = {
    ...n
  };
  return {
    reason: w(r.reason),
    resource: w(r.resource),
    subReason: w(r.sub_reason)
  };
}
function w(e) {
  if (e === void 0 || e === null || e === "") return "";
  return typeof e === "string" && ube(e) ? e : void 0;
}
function R(e) {
  return e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object" ? e.error : void 0;
}
async function B_o(e, n, r, timeout_2, o, p, m) {
  if (!S(e, "/bridge")) return {
    terminal: !0,
    reason: "invalid_session_id"
  };
  let b = `${n}/v1/code/sessions/${e}/bridge`,
    headers = drn(r);
  if (o) headers["X-Trusted-Device-Token"] = o;
  let s;
  try {
    s = await Wt.post(b, m === void 0 ? {} : {
      expected_epoch: m.expectedEpoch
    }, {
      headers: headers,
      timeout: timeout_2,
      validateStatus: i => i < 500
    });
  } catch (error) {
    return t(`[code-session] /bridge request failed: ${d(error)}`), null;
  }
  if (s.status !== 200) {
    let i = AD(s.data);
    if (t(`[code-session] /bridge failed ${s.status}${i ? `: ${i}` : ""}`), s.status === 401) {
      if (PO(s.config)) return null;
      p?.();
    }
    if (m !== void 0 && s.status === 409) {
      let l = R(s.data),
        expectedEpoch = m.expectedEpoch,
        y = [x(l !== void 0 && "expected_epoch" in l ? l.expected_epoch : void 0), x(l !== void 0 && "actual_epoch" in l ? l.actual_epoch : void 0)];
      m.onRefused(y.includes(expectedEpoch) ? y.find(item => item !== void 0 && item > expectedEpoch) : void 0);
    }
    let source;
    if (s.status === 403) {
      let reason = cbe(s.data);
      if (reason === "untrusted_device") {
        let refusal = Fee(s.data);
        return {
          terminal: !0,
          reason: reason,
          ...(refusal && {
            refusal: refusal
          })
        };
      }
      if (reason) return {
        terminal: !0,
        reason: reason
      };
      if (U_o(s.data)?.resource === "session_security_tier_below_org_policy") return {
        terminal: !0,
        reason: "session_security_tier_below_org_policy",
        status: 403
      };
      source = nRe(h => s.headers?.[h]), t(`[code-session] /bridge 403 source=${source}`);
    }
    switch (U(s.status)) {
      case "oauth_rejected":
        return {
          terminal: !1,
          reason: "oauth_rejected"
        };
      case "transient":
        return null;
      case "rejected":
        return {
          terminal: !0,
          reason: "request_rejected",
          status: s.status,
          ...(source && {
            source: source
          })
        };
    }
  }
  let u = s.data;
  if (u === null || typeof u !== "object" || !("worker_jwt" in u) || typeof u.worker_jwt !== "string" || !("expires_in" in u) || typeof u.expires_in !== "number" || !("api_base_url" in u) || typeof u.api_base_url !== "string" || !("worker_epoch" in u)) return t(`[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${_(u).slice(0, 200)}`), {
    terminal: !0,
    reason: "malformed_response",
    status: 200
  };
  let worker_epoch = x(u.worker_epoch);
  if (worker_epoch === void 0) return t(`[code-session] /bridge worker_epoch invalid: ${_(u.worker_epoch)}`), {
    terminal: !0,
    reason: "malformed_response",
    status: 200
  };
  return {
    worker_jwt: u.worker_jwt,
    api_base_url: u.api_base_url,
    expires_in: u.expires_in,
    worker_epoch: worker_epoch,
    mcp_config: B(u),
    ...{}
  };
}
function S(e, n) {
  try {
    return Nb(e, "sessionId"), !0;
  } catch (error) {
    return t(`[code-session] ${n}: ${d(error)}`), !1;
  }
}
function k(e, n, r, f, o, p = "") {
  let m = o.trustedDeviceToken ? {
    "X-Trusted-Device-Token": o.trustedDeviceToken
  } : void 0;
  if (o.useV2) {
    let id = Ld(f);
    return {
      url: `${n}/v1/code/sessions/${id}${p}`,
      headers: {
        ...drn(r),
        ...m
      },
      id: id
    };
  }
  if (!o.orgUUID) return t(`[code-session] ${e} ${f}: v1 compat path needs an org UUID`), null;
  let id_2 = Jf(f);
  return {
    url: `${n}/v1/sessions/${id_2}${p}`,
    headers: {
      ...drn(r),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": o.orgUUID,
      ...m
    },
    id: id_2
  };
}
async function rwa(e, n, r, timeout_3, o) {
  if (!S(r, "Get")) return "invalid";
  let p = k("Get", e, n, r, o);
  if (!p) return "invalid";
  let {
    url: url,
    headers: headers_2,
    id: id_3
  } = p;
  try {
    let s = await Wt.get(url, {
      headers: headers_2,
      timeout: timeout_3,
      validateStatus: i => i < 500
    });
    if (s.status !== 200) {
      let i = AD(s.data);
      return t(`[code-session] Get ${id_3} failed ${s.status}${i ? `: ${i}` : ""}`), s.status;
    }
    if (!o.useV2) {
      let i = s.data;
      return {
        ...i,
        status: i?.status ?? i?.session_status,
        id: typeof i?.id === "string" ? i.id : id_3
      };
    }
    let u = s.data,
      c = u?.response_shape ?? u?.session;
    if (c && typeof c.id === "string") return {
      ...c,
      updated_at: "last_event_at" in c && typeof c.last_event_at === "string" ? c.last_event_at : void 0
    };
    return t(`[code-session] Get ${id_3}: no session.id in 200 response`), s.status;
  } catch (error) {
    return t(`[code-session] Get ${id_3} failed: ${d(error)}`), Wt.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function owa(e, n, r, f, timeout_4, p) {
  if (!S(r, "Update")) return "invalid";
  let m = k("Update", e, n, r, p);
  if (!m) return "invalid";
  let {
      url: url_2,
      headers: headers_3,
      id: id_4
    } = m,
    u = {
      headers: headers_3,
      timeout: timeout_4,
      validateStatus: () => !0
    };
  try {
    let c = p.useV2 ? await Wt.put(url_2, f, u) : await Wt.patch(url_2, f, u);
    if (c.status !== 200) {
      let i = AD(c.data);
      t(`[code-session] Update ${id_4} failed ${c.status}${i ? `: ${i}` : ""}`);
    }
    return c.status;
  } catch (error) {
    return t(`[code-session] Update ${id_4} failed: ${d(error)}`), Wt.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function C$n(e, n, r, f, o) {
  return E("Archive", "/archive", e, n, r, f, o, "untrusted_device");
}
async function j_o(e, n, r, f, o) {
  return E("Unarchive", "/unarchive", e, n, r, f, o, "elevated_auth");
}
async function E(e, n, r, f, o, timeout_5, m, b) {
  if (!S(o, e)) return "invalid";
  let g = k(e, r, f, o, m, n);
  if (!g) return "invalid";
  let {
    url: url_3,
    headers: headers_4,
    id: id_5
  } = g;
  try {
    let i = await Wt.post(url_3, {}, {
      headers: headers_4,
      timeout: timeout_5,
      validateStatus: () => !0
    });
    if (t(`[code-session] ${e} ${id_5} status=${i.status}`), i.status === 403) {
      let a = Fee(i.data);
      if (a !== void 0) return b === "elevated_auth" && !b2e(a) ? "untrusted_device_no_enroll" : "untrusted_device";
      if (b === "elevated_auth" && cbe(i.data) === "session_stale_relogin") return "session_stale_relogin";
    }
    return i.status;
  } catch (error) {
    return t(`[code-session] ${e} ${id_5} failed: ${d(error)}`), Wt.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
function B(e) {
  if (!("mcp_config" in e)) return;
  let mcp_config = e.mcp_config;
  if (mcp_config !== null && typeof mcp_config === "object" && "content" in mcp_config && typeof mcp_config.content === "string" && mcp_config.content.length > 0) return {
    content: mcp_config.content
  };
  return;
}
function x(e) {
  let n = typeof e === "string" ? Number(e) : e;
  return typeof n === "number" && Number.isSafeInteger(n) ? n : void 0;
}
export { drn, BFt, E$n, ife, _z, cbe, nwa, Fee, T$n, b2e, RAr, U_o, B_o, rwa, owa, C$n, j_o };