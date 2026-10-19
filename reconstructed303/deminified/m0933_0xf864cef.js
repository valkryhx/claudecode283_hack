// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { Tx, HH } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { jh, bmn, Tu, Dl } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { LFt } from "B:/~BUN/root/chunk-vjc7rbsd.js";
import { Nme } from "B:/~BUN/root/chunk-kt4s0f09.js";
import { hs, kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
var D = "2023-06-01";
function MFt(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": D,
    "anthropic-client-platform": kh(),
    "User-Agent": hs()
  };
}
function Kmt(e) {
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
async function DFt(e, n, title, timeout, tags, p, m, model, session_grouping_id, s, u) {
  let a = `${e}/v1/code/sessions`,
    config = {
      cwd: m ?? ce(),
      ...(model && {
        model: model
      })
    };
  if (p && "gitRepoUrl" in p) {
    let {
        buildGitSessionContext: buildGitSessionContext
      } = await import("B:/~BUN/root/chunk-0gaqxbnf.js"),
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
  let c;
  try {
    c = await Ct.post(a, {
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
      headers: MFt(n),
      timeout: timeout,
      validateStatus: h => h < 500
    });
  } catch (error) {
    return t(`[code-session] Session create request failed: ${d(error)}`), null;
  }
  if (c.status !== 200 && c.status !== 201) {
    let h = Tx(c.data);
    t(`[code-session] Session create failed ${c.status}${h ? `: ${h}` : ""}`);
    let detail = HH(c.data);
    if (c.status === 401) u?.();
    if (c.status >= 400 && c.status < 500 && A(c.data)) return {
      terminal: !0,
      reason: "grouping_rejected",
      status: c.status,
      detail: detail
    };
    switch (U(c.status)) {
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
          status: c.status,
          detail: detail
        };
    }
  }
  let l = c.data;
  if (!l || typeof l !== "object" || !("session" in l) || !l.session || typeof l.session !== "object" || !("id" in l.session) || typeof l.session.id !== "string" || !l.session.id.startsWith("cse_") || !bmn(l.session.id)) return t(`[code-session] No usable session.id (cse_*) in response: ${_(l).slice(0, 200)}`), {
    terminal: !0,
    reason: "malformed_response",
    status: c.status,
    detail: void 0
  };
  return l.session.id;
}
function Nae(e) {
  return e !== null && "terminal" in e && e.terminal === !0;
}
function FH(e) {
  return typeof e === "object" && e !== null && "terminal" in e && e.terminal === !1;
}
function Fae(e) {
  let n = R(e);
  if (n !== void 0 && "resource" in n) {
    let resource = n.resource;
    if (resource === "untrusted_device" || resource === "session_stale_relogin") return resource;
  }
  return;
}
function fsi(e) {
  let n = R(e);
  return n !== void 0 && "resource" in n && n.resource === "untrusted_device" && "sub_reason" in n && n.sub_reason === "bound_unattested" ? "bound_unattested" : void 0;
}
function Dme(e) {
  if (Fae(e) === "untrusted_device") {
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
        if (Nme(subReason)) return {
          kind: "unrecognized",
          subReason: subReason
        };
        return t(`[code-session] a 403's sub_reason is too long or not snake_case, so a placeholder is passed on. As sent (${subReason.length} characters; cleaned, first 64): ${Rt(subReason, 64)}`), {
          kind: "unrecognized",
          subReason: "(string, too long or not snake_case)"
        };
    }
  }
  return;
}
function Uin(e) {
  return e.kind === "token_refused";
}
function Ymt(e) {
  return e.kind !== "signature_wanted";
}
var mKn = {
  kind: "signature_wanted",
  subReason: "served_call_unsigned"
};
function IPo(e) {
  let n = R(e);
  if (n === void 0) return;
  let r = {
    ...n
  };
  return {
    reason: x(r.reason),
    resource: x(r.resource),
    subReason: x(r.sub_reason)
  };
}
function x(e) {
  if (e === void 0 || e === null || e === "") return "";
  return typeof e === "string" && Nme(e) ? e : void 0;
}
function R(e) {
  return e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object" ? e.error : void 0;
}
async function XIr(e, n, r, timeout_2, o, p, m) {
  if (!S(e, "/bridge")) return {
    terminal: !0,
    reason: "invalid_session_id"
  };
  let b = `${n}/v1/code/sessions/${e}/bridge`,
    headers = MFt(r);
  if (o) headers["X-Trusted-Device-Token"] = o;
  let s;
  try {
    s = await Ct.post(b, m === void 0 ? {} : {
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
    let i = Tx(s.data);
    if (t(`[code-session] /bridge failed ${s.status}${i ? `: ${i}` : ""}`), s.status === 401) p?.();
    if (m !== void 0 && s.status === 409) {
      let l = R(s.data),
        expectedEpoch = m.expectedEpoch,
        y = [w(l !== void 0 && "expected_epoch" in l ? l.expected_epoch : void 0), w(l !== void 0 && "actual_epoch" in l ? l.actual_epoch : void 0)];
      m.onRefused(y.includes(expectedEpoch) ? y.find(item => item !== void 0 && item > expectedEpoch) : void 0);
    }
    let source;
    if (s.status === 403) {
      let reason = Fae(s.data);
      if (reason === "untrusted_device") {
        let refusal = Dme(s.data);
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
      source = LFt(h => s.headers?.[h]), t(`[code-session] /bridge 403 source=${source}`);
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
  let worker_epoch = w(u.worker_epoch);
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
    return jh(e, "sessionId"), !0;
  } catch (error) {
    return t(`[code-session] ${n}: ${d(error)}`), !1;
  }
}
function k(e, n, r, f, o, p = "") {
  let m = o.trustedDeviceToken ? {
    "X-Trusted-Device-Token": o.trustedDeviceToken
  } : void 0;
  if (o.useV2) {
    let id = Dl(f);
    return {
      url: `${n}/v1/code/sessions/${id}${p}`,
      headers: {
        ...MFt(r),
        ...m
      },
      id: id
    };
  }
  if (!o.orgUUID) return t(`[code-session] ${e} ${f}: v1 compat path needs an org UUID`), null;
  let id_2 = Tu(f);
  return {
    url: `${n}/v1/sessions/${id_2}${p}`,
    headers: {
      ...MFt(r),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": o.orgUUID,
      ...m
    },
    id: id_2
  };
}
async function msi(e, n, r, timeout_3, o) {
  if (!S(r, "Get")) return "invalid";
  let p = k("Get", e, n, r, o);
  if (!p) return "invalid";
  let {
    url: url,
    headers: headers_2,
    id: id_3
  } = p;
  try {
    let s = await Ct.get(url, {
      headers: headers_2,
      timeout: timeout_3,
      validateStatus: i => i < 500
    });
    if (s.status !== 200) {
      let i = Tx(s.data);
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
      a = u?.response_shape ?? u?.session;
    if (a && typeof a.id === "string") return {
      ...a,
      updated_at: "last_event_at" in a && typeof a.last_event_at === "string" ? a.last_event_at : void 0
    };
    return t(`[code-session] Get ${id_3}: no session.id in 200 response`), s.status;
  } catch (error) {
    return t(`[code-session] Get ${id_3} failed: ${d(error)}`), Ct.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function gsi(e, n, r, f, timeout_4, p) {
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
    let a = p.useV2 ? await Ct.put(url_2, f, u) : await Ct.patch(url_2, f, u);
    if (a.status !== 200) {
      let i = Tx(a.data);
      t(`[code-session] Update ${id_4} failed ${a.status}${i ? `: ${i}` : ""}`);
    }
    return a.status;
  } catch (error) {
    return t(`[code-session] Update ${id_4} failed: ${d(error)}`), Ct.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
async function Bin(e, n, r, f, o) {
  return E("Archive", "/archive", e, n, r, f, o, "untrusted_device");
}
async function JIr(e, n, r, f, o) {
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
    let i = await Ct.post(url_3, {}, {
      headers: headers_4,
      timeout: timeout_5,
      validateStatus: () => !0
    });
    if (t(`[code-session] ${e} ${id_5} status=${i.status}`), i.status === 403) {
      let c = Dme(i.data);
      if (c !== void 0) return b === "elevated_auth" && !Ymt(c) ? "untrusted_device_no_enroll" : "untrusted_device";
      if (b === "elevated_auth" && Fae(i.data) === "session_stale_relogin") return "session_stale_relogin";
    }
    return i.status;
  } catch (error) {
    return t(`[code-session] ${e} ${id_5} failed: ${d(error)}`), Ct.isAxiosError(error) && error.code === "ECONNABORTED" ? "timeout" : "error";
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
function w(e) {
  let n = typeof e === "string" ? Number(e) : e;
  return typeof n === "number" && Number.isSafeInteger(n) ? n : void 0;
}
export { MFt, Kmt, DFt, Nae, FH, Fae, fsi, Dme, Uin, Ymt, mKn, IPo, XIr, msi, gsi, Bin, JIr };