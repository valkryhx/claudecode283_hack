// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { d, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Can, PO } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { AD, bz } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { Jf } from "B:/~BUN/root/chunk-rr294jrm.js";
import { o, I, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { ui, cb } from "B:/~BUN/root/chunk-xwsv2hvn.js";
var y = "2023-06-01",
  bmt = "https://github.com/apps/claude/installations/new",
  T = p(() => u({
    subscription_found: I()
  }));
function sen(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var j = "ccr-byoc-2025-07-29";
async function ULn(e, r) {
  let {
      sessionId: sessionId,
      repo: repo,
      prNumber: f,
      baseUrl: baseUrl,
      getAccessToken: getAccessToken,
      getTrustedDeviceToken: getTrustedDeviceToken,
      onUnauthorized: onUnauthorized
    } = r,
    s = x(e),
    h = getAccessToken();
  if (!h) return t(`[bridge] No access token for ${e}-pr`), m(s, "no_token"), {
    ok: !1,
    reason: "no_token"
  };
  let P = `${baseUrl}/v1/code/github/${e}-pull-request`,
    w = {
      session_id: Jf(sessionId),
      repo: repo,
      pr_number: f
    },
    i;
  try {
    i = await Wt.post(P, w, {
      headers: qpo(h, {
        trustedDeviceToken: await getTrustedDeviceToken?.()
      }),
      timeout: 1e4,
      validateStatus: n => n < 500,
      skipSessionsBearerReport: !0
    });
  } catch (error) {
    return t(`[bridge] ${e}-pr request failed: ${d(error)}`), m(s, "request_failed"), {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (!(i.status >= 200 && i.status < 300 || i.status === 409)) {
    let reason = sen(i.data);
    if (i.status === 401 && !reason?.startsWith("github_")) {
      if (!PO(i.config)) onUnauthorized?.(Can(i.config?.headers?.get?.("Authorization")) ?? h).catch(() => {});
    }
    let R = AD(i.data);
    return t(`[bridge] ${e}-pr failed ${i.status}${reason ? ` [${reason}]` : ""}${R ? `: ${R}` : ""}`), m(s, reason === "github_app_not_installed" ? reason : "http_error"), {
      ok: !1,
      reason: reason,
      detail: bz(i.data)
    };
  }
  if (t(`[bridge] ${e}-pr ${repo}#${f} ok`), g(s), e === "unsubscribe") {
    let n = T().safeParse(i.data);
    if (n.success) return {
      ok: !0,
      subscriptionFound: n.data.subscription_found
    };
  }
  return {
    ok: !0
  };
}
function x(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function qpo(e, {
  orgUUID: orgUUID,
  trustedDeviceToken: trustedDeviceToken
} = {}) {
  let a = {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": y,
    "anthropic-beta": j,
    "anthropic-client-platform": cb(),
    "User-Agent": ui()
  };
  if (orgUUID !== void 0) a["x-organization-uuid"] = orgUUID;
  if (trustedDeviceToken !== void 0) a["X-Trusted-Device-Token"] = trustedDeviceToken;
  return a;
}
var zSs = "/worker/record-created-pr";
async function GBi(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${zSs}`;
  try {
    return {
      ok: !0,
      status: (await Wt.post(r, {
        owner: e.owner,
        repo: e.repo,
        pr_number: e.prNumber,
        head_ref: e.headRef
      }, {
        headers: {
          Authorization: `Bearer ${e.workerToken}`,
          "Content-Type": "application/json",
          "anthropic-version": y,
          "anthropic-client-platform": cb(),
          "User-Agent": ui()
        },
        timeout: e.timeoutMs
      })).status
    };
  } catch (error) {
    let {
      kind: kind,
      status: status
    } = Ai(error);
    return {
      ok: !1,
      kind: kind,
      status: status
    };
  }
}
var A = p(() => u({
    results: C(u({
      path: o(),
      error_reason: o().optional()
    }))
  })),
  E = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function VBi(e) {
  let {
    door: door,
    items: items,
    signal: signal
  } = e;
  if (!E.test(door.channelId)) return m("bridge_project_files_write", "invalid_channel"), {
    ok: !1,
    reason: "invalid_channel"
  };
  let f = door.getBearerToken();
  if (!f) return m("bridge_project_files_write", "no_token"), {
    ok: !1,
    reason: "no_token"
  };
  let b = `${door.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(door.sessionId)}/worker/channels/${encodeURIComponent(door.channelId)}/files:write`,
    k = {
      session_id: door.sessionId,
      channel_id: door.channelId,
      worker_epoch: door.getWorkerEpoch(),
      files: items.map(item => ({
        path: item.path,
        content: item.content.toString("base64")
      }))
    },
    l;
  try {
    l = await Wt.post(b, k, {
      headers: qpo(f),
      timeout: 90000,
      maxBodyLength: 1 / 0,
      signal: signal,
      validateStatus: s => s < 500
    });
  } catch (error) {
    if (Wt.isCancel(error)) return m("bridge_project_files_write", "aborted"), {
      ok: !1,
      reason: "aborted"
    };
    return t(`[bridge] project files write request failed: ${d(error)}`), m("bridge_project_files_write", "request_failed"), {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (l.status !== 200) {
    let code = sen(l.data);
    return t(`[bridge] project files write refused: status=${l.status}${code ? ` [${code}]` : ""}`), m("bridge_project_files_write", "http_error"), {
      ok: !1,
      reason: "http_error",
      status: l.status,
      code: code
    };
  }
  let _ = A().safeParse(l.data);
  if (!_.success) return m("bridge_project_files_write", "bad_response"), {
    ok: !1,
    reason: "bad_response"
  };
  return g("bridge_project_files_write"), {
    ok: !0,
    results: _.data.results
  };
}
export { bmt, sen, ULn, qpo, zSs, GBi, VBi };