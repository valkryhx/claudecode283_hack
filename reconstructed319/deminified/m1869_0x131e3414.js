// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { t, Hb, oi, ds, gP } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _e } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { tte } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { lue } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Y8, dxt, T5e, wv } from "B:/~BUN/root/chunk-27h4st9h.js";
import { U$e, Tfn, Cfn, rzt, ozt, B$e, TBr, j$e, RBr, Rfn } from "B:/~BUN/root/chunk-qg8vk00h.js";
import { fVr, pVr, Jgn, mVr, qUe, hVr, gVr, oTt, qQs, YQs, XQs, yVr, Rke, fjo, _Vr, CXn, pVt, RXn } from "B:/~BUN/root/chunk-zk8rd694.js";
import { kne, DPe } from "B:/~BUN/root/chunk-yc3pvkf6.js";
var J = 65536;
function K(e) {
  return Buffer.byteLength(oi(oi(e)).slice(1, -1));
}
function x(e) {
  let r = oi(e).slice(1, -1);
  return Buffer.byteLength(oi(r).slice(1, -1));
}
function O(payload) {
  let r = TBr(payload);
  if (r <= B$e) return {
    payload: payload,
    trim: null
  };
  using h = Hb`fitFeedbackPayloadToBudget(${r})`;
  let u = r - (B$e - J),
    s = payload.transcript.map(item => K(item) + 1),
    y = s.reduce((acc, item) => acc + item, 0),
    w = payload.rawTranscriptJsonl === void 0 ? 0 : x(payload.rawTranscriptJsonl),
    D = u <= y ? y - u : Math.max(0, y - Math.max(0, u - w)),
    {
      start: start,
      keptBytes: keptBytes,
      oversized: oversized
    } = RBr(s, D),
    c = payload.transcript.slice(start),
    transcript = oversized.size === 0 ? c : c.filter((item, index) => !oversized.has(start + index)),
    v = u - (y - keptBytes),
    rawTranscriptJsonl = payload.rawTranscriptJsonl,
    rawTail = rawTranscriptJsonl === void 0 ? "absent" : "untouched";
  if (v > 0 && rawTranscriptJsonl !== void 0) {
    let n = w - v;
    if (n <= 0) rawTranscriptJsonl = void 0, rawTail = "omitted";else {
      let _ = rawTranscriptJsonl.split(`
`),
        C = _.map(item => x(item + `
`)),
        {
          start: start_2,
          oversized: oversized_2
        } = RBr(C, n),
        B = _.slice(start_2),
        q = (oversized_2.size === 0 ? B : B.filter((item, index) => !oversized_2.has(start_2 + index))).join(`
`);
      if (q === "") rawTranscriptJsonl = void 0, rawTail = "omitted";else rawTranscriptJsonl = q, rawTail = "reduced";
    }
  }
  let trim = {
      keptMessageCount: transcript.length,
      totalMessageCount: payload.transcript.length,
      rawTail: rawTail,
      rawTailKeptBytes: rawTranscriptJsonl === void 0 ? 0 : Buffer.byteLength(rawTranscriptJsonl)
    },
    F = W(trim);
  if (F === null) return {
    payload: payload,
    trim: null
  };
  let {
      rawTranscriptJsonl: rawTranscriptJsonl_2,
      ...A
    } = payload,
    payload_2 = {
      ...A,
      message_count: transcript.length,
      description: `${payload.description}
${F}`,
      transcript: transcript,
      ...(rawTranscriptJsonl !== void 0 && {
        rawTranscriptJsonl: rawTranscriptJsonl
      })
    },
    L = TBr(payload_2);
  if (L > B$e) t(`fitFeedbackPayloadToBudget: still ${L} bytes after trim (budget ${B$e})`, {
    level: "error"
  });
  return {
    payload: payload_2,
    trim: trim
  };
}
function W(e) {
  let r = [];
  if (e.keptMessageCount < e.totalMessageCount) r.push(`kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`);
  if (e.rawTail === "reduced") r.push(`kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`);else if (e.rawTail === "omitted") r.push("omitted the raw session log");
  if (r.length === 0) return null;
  return `transcript_truncated: ${r.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function V(e, r = "panel") {
  let h = oTt(e.request_ids),
    u = gVr(e.area),
    s = qQs(e.failure_mode),
    y = YQs(e.task_category),
    w = yVr(e.effort),
    D = XQs(e.thinking_type),
    T = Rke(e.thinking_budget),
    k = Rke(e.message_count),
    p = Rke(e.assistant_turn_count),
    c = Rke(e.subagent_count);
  return [`[${e.type}] ${Jgn(e.title)}`, "", mVr(e.details), "", "---", r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...(u !== void 0 ? [`area: ${u}`] : []), ...(s !== void 0 ? [`failure_mode: ${s}`] : []), ...(y !== void 0 ? [`task_category: ${y}`] : []), `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${hVr(e.model)}`, `cli_version: ${qUe(e.cli_version, fVr)}`, `os: ${qUe(e.os, pVr)}`, ...(w !== void 0 ? [`effort: ${w}`] : []), ...(D !== void 0 ? [`thinking: ${D}${T !== void 0 ? ` (budget ${T})` : ""}`] : []), ...(p !== void 0 ? [`turns: ${p} assistant${k !== void 0 ? ` / ${k} messages` : ""}${c !== void 0 && c > 0 ? `, ${c} ${P(c, "subagent")}` : ""}`] : []), ...(h.length > 0 ? [`request_ids: ${h.join(", ")}`] : [])].join(`
`);
}
function Y(e) {
  let r = [];
  using h = Hb`parseDraftTranscriptMessages(${e.length})`;
  for (let u of e.split(`
`)) {
    if (!u) continue;
    let s;
    try {
      s = ds(u);
    } catch {
      continue;
    }
    if (typeof s !== "object" || s === null) continue;
    if (s.type !== "user" && s.type !== "assistant") continue;
    if (typeof s.uuid !== "string" || typeof s.timestamp !== "string" || s.isSidechain === !0 || !s.message) continue;
    r.push(s.type === "user" ? {
      type: "user",
      uuid: s.uuid,
      timestamp: s.timestamp,
      message: s.message,
      ...(s.isMeta === !0 && {
        isMeta: !0
      }),
      ...(s.toolUseResult !== void 0 && {
        toolUseResult: s.toolUseResult
      }),
      ...(s.isCompactSummary === !0 && {
        isCompactSummary: !0
      }),
      ...(s.repeatsCompactSummary === !0 && {
        repeatsCompactSummary: !0
      })
    } : {
      type: "assistant",
      uuid: s.uuid,
      timestamp: s.timestamp,
      message: s.message,
      requestId: s.requestId
    });
  }
  return r;
}
var error_3 = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function Mvt({
  draft: draft,
  includeTranscript: includeTranscript,
  currentSessionMessages: currentSessionMessages,
  surface = "cli",
  via = "panel",
  signal: signal,
  storageV5: storageV5,
  credentials: credentials,
  host: host
}) {
  let k = draft.source_session_id === z(),
    transcript_2 = [],
    rawTranscriptJsonl_3;
  if (includeTranscript && draft.transcript_ref) {
    let n = await fjo(draft);
    if (k) {
      if (transcript_2 = wv(kne(currentSessionMessages, {
        host: host
      })), n !== null) try {
        let {
            content: content,
            bytesRead: bytesRead,
            bytesTotal: bytesTotal
          } = await gP(n, ozt),
          o = content;
        if (bytesRead < bytesTotal) o = o.slice(o.indexOf(`
`) + 1);
        if (Y8(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = DPe(T5e(o), {
          host: host
        }).jsonl;
      } catch {}
    } else if (n !== null) try {
      let {
          content: content_2,
          bytesRead: bytesRead_2,
          bytesTotal: bytesTotal_2
        } = await gP(n, ozt),
        o = content_2;
      if (bytesRead_2 < bytesTotal_2) o = o.slice(o.indexOf(`
`) + 1);
      if (!_Vr(o, draft)) t("draft transcript withheld from feedback submit: identity_not_corroborated");else {
        let B = Y(o);
        if (dxt(B)) t("draft transcript withheld from feedback submit: contains_3p_transcript_markers");else transcript_2 = kne(B, {
          host: void 0
        });
        if (Y8(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = DPe(T5e(o), {
          host: void 0
        }).jsonl;
      }
    } catch {}
  }
  let latestAssistantMessageId = oTt(draft.request_ids).at(-1) ?? null,
    v = {
      latestAssistantMessageId: latestAssistantMessageId,
      latestAssistantAPIMessageId: null,
      lastInterruptedAssistantAPIMessageId: null,
      message_count: transcript_2.length,
      datetime: new Date().toISOString(),
      description: V(draft, via),
      surface: surface,
      platform: i.platform,
      gitRepo: !1,
      commitSha: null,
      version: draft.cli_version,
      transcript: transcript_2,
      ...(rawTranscriptJsonl_3 && {
        rawTranscriptJsonl: rawTranscriptJsonl_3
      })
    },
    {
      payload: payload_3,
      trim: trim_2
    } = O(v),
    a = await Rfn(payload_3, signal, void 0, credentials);
  if (a.success) {
    try {
      await CXn(draft.draft_id, storageV5);
    } catch (error) {
      t(`feedbackDrafts: post-submit draft delete failed: ${error instanceof Error ? error.name : "unknown"}`, {
        level: "error"
      }), l("tengu_feedback_draft_delete_failed", {
        phase: b("post_submit")
      });
    }
    if (k) RXn();
    if (via !== "card_send_as_is") pVt(draft.draft_id);
    return l("tengu_feedback_draft_submitted", {
      type: f(draft.type),
      trigger: f(draft.trigger),
      failure_mode: de(draft.failure_mode),
      task_category: de(draft.task_category),
      transcript_included: payload_3.transcript.length > 0 || payload_3.rawTranscriptJsonl ? b("true") : b("false"),
      transcript_trimmed: trim_2 !== null ? b("true") : b("false"),
      transcript_requested: includeTranscript ? b("true") : b("false"),
      transcript_available: draft.transcriptAvailable ? b("true") : b("false"),
      from_this_session: k ? b("true") : b("false"),
      feedback_id: _e(a.feedbackId),
      last_request_id: _e(latestAssistantMessageId)
    }), g("feedback_draft_submit"), {
      success: !0,
      feedbackId: a.feedbackId
    };
  }
  let requestId = _e(a.requestId);
  m("feedback_draft_submit", a.failureReason ?? "network_error", {
    from_this_session: k ? b("true") : b("false"),
    ...(a.statusCode !== void 0 && {
      http_status: a.statusCode
    }),
    ...(requestId !== void 0 && {
      requestId: requestId
    })
  });
  let error_2 = Tfn(a);
  if (error_2 !== void 0) return {
    success: !1,
    error: error_2,
    orgRefusalReason: U$e(a)
  };
  if (a.failureReason === "auth_error") return {
    success: !1,
    error: !tte().error && j$e() || "Couldn't send feedback: not signed in. Run /login, then retry."
  };
  if (a.payloadTooLarge) return {
    success: !1,
    error: error_3,
    payloadTooLarge: !0
  };
  if (a.failureReason === "policy_blocked") return {
    success: !1,
    error: lue() ?? "Feedback is disabled by your organization's policy."
  };
  let A = Cfn(a);
  if (A !== void 0) return {
    success: !1,
    error: `${A} The draft is still queued.`
  };
  let I = rzt(a) ?? (a.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"),
    L = a.refusal?.kind === "other" ? "" : " Try again later.";
  return {
    success: !1,
    error: `Couldn't send feedback${I}. The draft is still queued.${L}`
  };
}
async function bmn(e, r, h) {
  let u = await CXn(e.draft_id, h);
  if (pVt(e.draft_id), !u) return;
  if (e.source_session_id === z()) RXn();
  l("tengu_feedback_draft_discarded", {
    type: f(e.type),
    trigger: f(e.trigger),
    discarded_via: f(r)
  });
}
export { Mvt, bmn };