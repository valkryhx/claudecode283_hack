// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { l, Xs } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { rp } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { Wc } from "B:/~BUN/root/chunk-1rjcv085.js";
import { o, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { $a, jg } from "B:/~BUN/root/chunk-fwzy34jf.js";
var R = "2023-06-01",
  NTe = "https://github.com/apps/claude/installations/new";
function rlt(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var P = "ccr-byoc-2025-07-29";
async function YNe(e, r) {
  let {
      sessionId: sessionId,
      repo: repo,
      prNumber: d,
      baseUrl: baseUrl,
      getAccessToken: getAccessToken,
      getTrustedDeviceToken: getTrustedDeviceToken
    } = r,
    p = BIr(e),
    s = getAccessToken();
  if (!s) return t(`[bridge] No access token for ${e}-pr`), m(p, "no_token"), {
    ok: !1,
    reason: "no_token"
  };
  let y = `${baseUrl}/v1/code/github/${e}-pull-request`,
    w = {
      session_id: Wc(sessionId),
      repo: repo,
      pr_number: d
    },
    g;
  try {
    g = await mt.post(y, w, {
      headers: UWn(s, {
        trustedDeviceToken: await getTrustedDeviceToken?.()
      }),
      timeout: 1e4,
      validateStatus: a => a < 500
    });
  } catch (error) {
    return t(`[bridge] ${e}-pr request failed: ${l(error)}`), m(p, "request_failed"), {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (!(g.status >= 200 && g.status < 300 || g.status === 409)) {
    let reason = rlt(g.data),
      detail = rp(g.data);
    return t(`[bridge] ${e}-pr failed ${g.status}${reason ? ` [${reason}]` : ""}${detail ? `: ${detail}` : ""}`), m(p, reason === "github_app_not_installed" ? reason : "http_error"), {
      ok: !1,
      reason: reason,
      detail: detail
    };
  }
  return t(`[bridge] ${e}-pr ${repo}#${d} ok`), _(p), {
    ok: !0
  };
}
function BIr(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function UWn(e, {
  orgUUID: orgUUID,
  trustedDeviceToken: trustedDeviceToken
} = {}) {
  let n = {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": R,
    "anthropic-beta": P,
    "anthropic-client-platform": jg(),
    "User-Agent": $a()
  };
  if (orgUUID !== void 0) n["x-organization-uuid"] = orgUUID;
  if (trustedDeviceToken !== void 0) n["X-Trusted-Device-Token"] = trustedDeviceToken;
  return n;
}
var jIr = "/worker/record-created-pr";
async function PRo(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${jIr}`;
  try {
    return {
      ok: !0,
      status: (await mt.post(r, {
        owner: e.owner,
        repo: e.repo,
        pr_number: e.prNumber,
        head_ref: e.headRef
      }, {
        headers: {
          Authorization: `Bearer ${e.workerToken}`,
          "Content-Type": "application/json",
          "anthropic-version": R,
          "anthropic-client-platform": jg(),
          "User-Agent": $a()
        },
        timeout: e.timeoutMs
      })).status
    };
  } catch (error) {
    let {
      kind: kind,
      status: status
    } = Xs(error);
    return {
      ok: !1,
      kind: kind,
      status: status
    };
  }
}
var T = f(() => u({
    results: C(u({
      path: o(),
      error_reason: o().optional()
    }))
  })),
  j = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function IRo(e) {
  let {
    door: door,
    items: items,
    signal: signal
  } = e;
  if (!j.test(door.channelId)) return m("bridge_project_files_write", "invalid_channel"), {
    ok: !1,
    reason: "invalid_channel"
  };
  let d = door.getBearerToken();
  if (!d) return m("bridge_project_files_write", "no_token"), {
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
    c;
  try {
    c = await mt.post(b, k, {
      headers: UWn(d),
      timeout: 90000,
      maxBodyLength: 1 / 0,
      signal: signal,
      validateStatus: s => s < 500
    });
  } catch (error) {
    if (mt.isCancel(error)) return m("bridge_project_files_write", "aborted"), {
      ok: !1,
      reason: "aborted"
    };
    return t(`[bridge] project files write request failed: ${l(error)}`), m("bridge_project_files_write", "request_failed"), {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (c.status !== 200) {
    let code = rlt(c.data);
    return t(`[bridge] project files write refused: status=${c.status}${code ? ` [${code}]` : ""}`), m("bridge_project_files_write", "http_error"), {
      ok: !1,
      reason: "http_error",
      status: c.status,
      code: code
    };
  }
  let p = T().safeParse(c.data);
  if (!p.success) return m("bridge_project_files_write", "bad_response"), {
    ok: !1,
    reason: "bad_response"
  };
  return _("bridge_project_files_write"), {
    ok: !0,
    results: p.data.results
  };
}
export { NTe, rlt, YNe, BIr, UWn, jIr, PRo, IRo };