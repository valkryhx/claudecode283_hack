// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { gm, fa, Vo, Gv, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { av } from "B:/~BUN/root/chunk-3jyp964r.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { dee } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { tue, SXe, obe, wXe, nue, Y_n, Q_n, jgt } from "B:/~BUN/root/chunk-0zh1abnx.js";
import { Ikn, Okn, ebt, Mkn, $ue, Dkn, Lkn, $je, _Xr, bXr, SXr, Nkn, zQ, Ptr, Hkn, ZVt, _Qe, eqt } from "B:/~BUN/root/chunk-gn719r3c.js";
import { $Q } from "B:/~BUN/root/chunk-rfqq8t8e.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
var J = 65536;
function H(e) {
  return Buffer.byteLength(fa(fa(e)).slice(1, -1));
}
function O(e) {
  let r = fa(e).slice(1, -1);
  return Buffer.byteLength(fa(r).slice(1, -1));
}
function x(payload) {
  let r = Y_n(payload);
  if (r <= nue) return {
    payload: payload,
    trim: null
  };
  using h = gm`fitFeedbackPayloadToBudget(${r})`;
  let u = r - (nue - J),
    s = payload.transcript.map(item => H(item) + 1),
    k = s.reduce((acc, item) => acc + item, 0),
    T = payload.rawTranscriptJsonl === void 0 ? 0 : O(payload.rawTranscriptJsonl),
    D = u <= k ? k - u : Math.max(0, k - Math.max(0, u - T)),
    {
      start: start,
      keptBytes: keptBytes,
      oversized: oversized
    } = Q_n(s, D),
    g = payload.transcript.slice(start),
    transcript = oversized.size === 0 ? g : g.filter((item, index) => !oversized.has(start + index)),
    M = u - (k - keptBytes),
    rawTranscriptJsonl = payload.rawTranscriptJsonl,
    rawTail = rawTranscriptJsonl === void 0 ? "absent" : "untouched";
  if (M > 0 && rawTranscriptJsonl !== void 0) {
    let w = T - M;
    if (w <= 0) rawTranscriptJsonl = void 0, rawTail = "omitted";else {
      let S = rawTranscriptJsonl.split(`
`),
        q = S.map(item => O(item + `
`)),
        {
          start: start_2,
          oversized: oversized_2
        } = Q_n(q, w),
        P = S.slice(start_2),
        L = (oversized_2.size === 0 ? P : P.filter((item, index) => !oversized_2.has(start_2 + index))).join(`
`);
      if (L === "") rawTranscriptJsonl = void 0, rawTail = "omitted";else rawTranscriptJsonl = L, rawTail = "reduced";
    }
  }
  let trim = {
      keptMessageCount: transcript.length,
      totalMessageCount: payload.transcript.length,
      oversizedMessageCount: oversized.size,
      rawTail: rawTail,
      rawTailKeptBytes: rawTranscriptJsonl === void 0 ? 0 : Buffer.byteLength(rawTranscriptJsonl)
    },
    b = K(trim);
  if (b === null) return {
    payload: payload,
    trim: null
  };
  let {
      rawTranscriptJsonl: rawTranscriptJsonl_2,
      ...B
    } = payload,
    payload_2 = {
      ...B,
      message_count: transcript.length,
      description: `${payload.description}
${b}`,
      transcript: transcript,
      ...(rawTranscriptJsonl !== void 0 && {
        rawTranscriptJsonl: rawTranscriptJsonl
      })
    },
    o = Y_n(payload_2);
  if (o > nue) t(`fitFeedbackPayloadToBudget: still ${o} bytes after trim (budget ${nue})`, {
    level: "error"
  });
  return {
    payload: payload_2,
    trim: trim
  };
}
function K(e) {
  let r = [];
  if (e.keptMessageCount < e.totalMessageCount) r.push(`kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`);
  if (e.rawTail === "reduced") r.push(`kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`);else if (e.rawTail === "omitted") r.push("omitted the raw session log");
  if (r.length === 0) return null;
  return `transcript_truncated: ${r.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function W(e, r = "panel") {
  let h = $je(e.request_ids),
    u = Lkn(e.area),
    s = _Xr(e.failure_mode),
    k = bXr(e.task_category),
    T = Nkn(e.effort),
    D = SXr(e.thinking_type),
    p = zQ(e.thinking_budget),
    l = zQ(e.message_count),
    f = zQ(e.assistant_turn_count),
    g = zQ(e.subagent_count);
  return [`[${e.type}] ${ebt(e.title)}`, "", Mkn(e.details), "", "---", r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...(u !== void 0 ? [`area: ${u}`] : []), ...(s !== void 0 ? [`failure_mode: ${s}`] : []), ...(k !== void 0 ? [`task_category: ${k}`] : []), `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${Dkn(e.model)}`, `cli_version: ${$ue(e.cli_version, Ikn)}`, `os: ${$ue(e.os, Okn)}`, ...(T !== void 0 ? [`effort: ${T}`] : []), ...(D !== void 0 ? [`thinking: ${D}${p !== void 0 ? ` (budget ${p})` : ""}`] : []), ...(f !== void 0 ? [`turns: ${f} assistant${l !== void 0 ? ` / ${l} messages` : ""}${g !== void 0 && g > 0 ? `, ${g} ${I(g, "subagent")}` : ""}`] : []), ...(h.length > 0 ? [`request_ids: ${h.join(", ")}`] : [])].join(`
`);
}
function V(e) {
  let r = [];
  using h = gm`parseDraftTranscriptMessages(${e.length})`;
  for (let u of e.split(`
`)) {
    if (!u) continue;
    let s;
    try {
      s = Vo(u);
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
var error_2 = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function Aje({
  draft: draft,
  includeTranscript: includeTranscript,
  currentSessionMessages: currentSessionMessages,
  surface = "cli",
  via = "panel",
  signal: signal,
  storageV5: storageV5,
  credentials: credentials
}) {
  let p = draft.source_session_id === Y(),
    transcript_2 = [],
    rawTranscriptJsonl_3;
  if (includeTranscript && draft.transcript_ref) {
    let b = await Ptr(draft);
    if (p) {
      if (transcript_2 = av($Q(currentSessionMessages)), b !== null) try {
        let {
            content: content,
            bytesRead: bytesRead,
            bytesTotal: bytesTotal
          } = await Gv(b, wXe),
          o = content;
        if (bytesRead < bytesTotal) o = o.slice(o.indexOf(`
`) + 1);
        if (tue(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = obe(o);
      } catch {}
    } else if (b !== null) try {
      let {
          content: content_2,
          bytesRead: bytesRead_2,
          bytesTotal: bytesTotal_2
        } = await Gv(b, wXe),
        o = content_2;
      if (bytesRead_2 < bytesTotal_2) o = o.slice(o.indexOf(`
`) + 1);
      if (!Hkn(o, draft)) t("draft transcript withheld from feedback submit: identity_not_corroborated");else {
        if (transcript_2 = V(o), SXe(transcript_2)) transcript_2 = [], t("draft transcript withheld from feedback submit: contains_3p_transcript_markers");
        if (tue(o)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = obe(o);
      }
    } catch {}
  }
  let latestAssistantMessageId = $je(draft.request_ids).at(-1) ?? null,
    C = {
      latestAssistantMessageId: latestAssistantMessageId,
      latestAssistantAPIMessageId: null,
      lastInterruptedAssistantAPIMessageId: null,
      message_count: transcript_2.length,
      datetime: new Date().toISOString(),
      description: W(draft, via),
      surface: surface,
      platform: a.platform,
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
    } = x(C),
    n = await jgt(payload_3, signal, void 0, credentials);
  if (n.success) {
    try {
      await ZVt(draft.draft_id, storageV5);
    } catch (error) {
      t(`feedbackDrafts: post-submit draft delete failed: ${error instanceof Error ? error.name : "unknown"}`, {
        level: "error"
      }), i("tengu_feedback_draft_delete_failed", {
        phase: y("post_submit")
      });
    }
    if (p) eqt();
    if (via !== "card_send_as_is") _Qe(draft.draft_id);
    return i("tengu_feedback_draft_submitted", {
      type: c(draft.type),
      trigger: c(draft.trigger),
      failure_mode: ue(draft.failure_mode),
      task_category: ue(draft.task_category),
      transcript_included: payload_3.transcript.length > 0 || payload_3.rawTranscriptJsonl ? y("true") : y("false"),
      transcript_trimmed: trim_2 !== null ? y("true") : y("false"),
      transcript_requested: includeTranscript ? y("true") : y("false"),
      transcript_available: draft.transcriptAvailable ? y("true") : y("false"),
      from_this_session: p ? y("true") : y("false"),
      feedback_id: _e(n.feedbackId),
      last_request_id: _e(latestAssistantMessageId)
    }), _("feedback_draft_submit"), {
      success: !0,
      feedbackId: n.feedbackId
    };
  }
  if (m("feedback_draft_submit", n.failureReason ?? "network_error", {
    from_this_session: p ? y("true") : y("false")
  }), n.isZdrOrg) return {
    success: !1,
    error: "Feedback collection is not available for organizations with custom data retention policies."
  };
  if (n.failureReason === "auth_error") return {
    success: !1,
    error: "Couldn't send feedback: not signed in. Run /login, then retry."
  };
  if (n.payloadTooLarge) return {
    success: !1,
    error: error_2,
    payloadTooLarge: !0
  };
  if (n.failureReason === "policy_blocked") return {
    success: !1,
    error: dee() ?? "Feedback is disabled by your organization's policy."
  };
  return {
    success: !1,
    error: `Couldn't send feedback${n.statusCode ? ` (server returned ${n.statusCode})` : n.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"}. The draft is still queued. Try again later.`
  };
}
async function M_t(e, r, h) {
  let u = await ZVt(e.draft_id, h);
  if (_Qe(e.draft_id), !u) return;
  if (e.source_session_id === Y()) eqt();
  i("tengu_feedback_draft_discarded", {
    type: c(e.type),
    trigger: c(e.trigger),
    discarded_via: c(r)
  });
}
export { Aje, M_t };