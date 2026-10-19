// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Wh, Bi, jo, mR, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ote } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ZZ } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { ase, Nit, oHe, bC } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { owt, uCe, D7n, Wet, N7n, dzt } from "B:/~BUN/root/chunk-89b325qp.js";
import { tor, nor, PVt, ror, aRe, oor, sor, Znt, qXo, KXo, YXo, ior, Sce, WYr, aor, Jvn, Rkt, Qvn } from "B:/~BUN/root/chunk-3yw4brjw.js";
import { a8, Vye } from "B:/~BUN/root/chunk-htvgnfag.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
var H = 65536;
function J(e) {
  return Buffer.byteLength(Bi(Bi(e)).slice(1, -1));
}
function E(e) {
  let r = Bi(e).slice(1, -1);
  return Buffer.byteLength(Bi(r).slice(1, -1));
}
function j(payload) {
  let r = D7n(payload);
  if (r <= uCe) return {
    payload: payload,
    trim: null
  };
  using h = Wh`fitFeedbackPayloadToBudget(${r})`;
  let o = r - (uCe - H),
    s = payload.transcript.map(item => J(item) + 1),
    p = s.reduce((acc, item) => acc + item, 0),
    w = payload.rawTranscriptJsonl === void 0 ? 0 : E(payload.rawTranscriptJsonl),
    D = o <= p ? p - o : Math.max(0, p - Math.max(0, o - w)),
    {
      start: start,
      keptBytes: keptBytes,
      oversized: oversized
    } = N7n(s, D),
    l = payload.transcript.slice(start),
    transcript = oversized.size === 0 ? l : l.filter((item, index) => !oversized.has(start + index)),
    B = o - (p - keptBytes),
    rawTranscriptJsonl = payload.rawTranscriptJsonl,
    rawTail = rawTranscriptJsonl === void 0 ? "absent" : "untouched";
  if (B > 0 && rawTranscriptJsonl !== void 0) {
    let n = w - B;
    if (n <= 0) rawTranscriptJsonl = void 0, rawTail = "omitted";else {
      let k = rawTranscriptJsonl.split(`
`),
        x = k.map(item => E(item + `
`)),
        {
          start: start_2,
          oversized: oversized_2
        } = N7n(x, n),
        P = k.slice(start_2),
        I = (oversized_2.size === 0 ? P : P.filter((item, index) => !oversized_2.has(start_2 + index))).join(`
`);
      if (I === "") rawTranscriptJsonl = void 0, rawTail = "omitted";else rawTranscriptJsonl = I, rawTail = "reduced";
    }
  }
  let trim = {
      keptMessageCount: transcript.length,
      totalMessageCount: payload.transcript.length,
      oversizedMessageCount: oversized.size,
      rawTail: rawTail,
      rawTailKeptBytes: rawTranscriptJsonl === void 0 ? 0 : Buffer.byteLength(rawTranscriptJsonl)
    },
    v = W(trim);
  if (v === null) return {
    payload: payload,
    trim: null
  };
  let {
      rawTranscriptJsonl: rawTranscriptJsonl_2,
      ...R
    } = payload,
    payload_2 = {
      ...R,
      message_count: transcript.length,
      description: `${payload.description}
${v}`,
      transcript: transcript,
      ...(rawTranscriptJsonl !== void 0 && {
        rawTranscriptJsonl: rawTranscriptJsonl
      })
    },
    C = D7n(payload_2);
  if (C > uCe) t(`fitFeedbackPayloadToBudget: still ${C} bytes after trim (budget ${uCe})`, {
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
  let h = Znt(e.request_ids),
    o = sor(e.area),
    s = qXo(e.failure_mode),
    p = KXo(e.task_category),
    w = ior(e.effort),
    D = YXo(e.thinking_type),
    T = Sce(e.thinking_budget),
    _ = Sce(e.message_count),
    f = Sce(e.assistant_turn_count),
    l = Sce(e.subagent_count);
  return [`[${e.type}] ${PVt(e.title)}`, "", ror(e.details), "", "---", r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...(o !== void 0 ? [`area: ${o}`] : []), ...(s !== void 0 ? [`failure_mode: ${s}`] : []), ...(p !== void 0 ? [`task_category: ${p}`] : []), `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${oor(e.model)}`, `cli_version: ${aRe(e.cli_version, tor)}`, `os: ${aRe(e.os, nor)}`, ...(w !== void 0 ? [`effort: ${w}`] : []), ...(D !== void 0 ? [`thinking: ${D}${T !== void 0 ? ` (budget ${T})` : ""}`] : []), ...(f !== void 0 ? [`turns: ${f} assistant${_ !== void 0 ? ` / ${_} messages` : ""}${l !== void 0 && l > 0 ? `, ${l} ${O(l, "subagent")}` : ""}`] : []), ...(h.length > 0 ? [`request_ids: ${h.join(", ")}`] : [])].join(`
`);
}
function Y(e) {
  let r = [];
  using h = Wh`parseDraftTranscriptMessages(${e.length})`;
  for (let o of e.split(`
`)) {
    if (!o) continue;
    let s;
    try {
      s = jo(o);
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
var error_2 = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function Wtt({
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
  let _ = draft.source_session_id === K(),
    transcript_2 = [],
    rawTranscriptJsonl_3;
  if (includeTranscript && draft.transcript_ref) {
    let y = await WYr(draft);
    if (_) {
      if (transcript_2 = bC(a8(currentSessionMessages, {
        host: host
      })), y !== null) try {
        let {
            content: content,
            bytesRead: bytesRead,
            bytesTotal: bytesTotal
          } = await mR(y, owt),
          n = content;
        if (bytesRead < bytesTotal) n = n.slice(n.indexOf(`
`) + 1);
        if (ase(n)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = Vye(oHe(n), {
          host: host
        }).jsonl;
      } catch {}
    } else if (y !== null) try {
      let {
          content: content_2,
          bytesRead: bytesRead_2,
          bytesTotal: bytesTotal_2
        } = await mR(y, owt),
        n = content_2;
      if (bytesRead_2 < bytesTotal_2) n = n.slice(n.indexOf(`
`) + 1);
      if (!aor(n, draft)) t("draft transcript withheld from feedback submit: identity_not_corroborated");else {
        let k = Y(n);
        if (Nit(k)) t("draft transcript withheld from feedback submit: contains_3p_transcript_markers");else transcript_2 = a8(k, {
          host: void 0
        });
        if (ase(n)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");else rawTranscriptJsonl_3 = Vye(oHe(n), {
          host: void 0
        }).jsonl;
      }
    } catch {}
  }
  let latestAssistantMessageId = Znt(draft.request_ids).at(-1) ?? null,
    B = {
      latestAssistantMessageId: latestAssistantMessageId,
      latestAssistantAPIMessageId: null,
      lastInterruptedAssistantAPIMessageId: null,
      message_count: transcript_2.length,
      datetime: new Date().toISOString(),
      description: V(draft, via),
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
    } = j(B),
    d = await dzt(payload_3, signal, void 0, credentials);
  if (d.success) {
    try {
      await Jvn(draft.draft_id, storageV5);
    } catch (error) {
      t(`feedbackDrafts: post-submit draft delete failed: ${error instanceof Error ? error.name : "unknown"}`, {
        level: "error"
      }), i("tengu_feedback_draft_delete_failed", {
        phase: b("post_submit")
      });
    }
    if (_) Qvn();
    if (via !== "card_send_as_is") Rkt(draft.draft_id);
    return i("tengu_feedback_draft_submitted", {
      type: c(draft.type),
      trigger: c(draft.trigger),
      failure_mode: pe(draft.failure_mode),
      task_category: pe(draft.task_category),
      transcript_included: payload_3.transcript.length > 0 || payload_3.rawTranscriptJsonl ? b("true") : b("false"),
      transcript_trimmed: trim_2 !== null ? b("true") : b("false"),
      transcript_requested: includeTranscript ? b("true") : b("false"),
      transcript_available: draft.transcriptAvailable ? b("true") : b("false"),
      from_this_session: _ ? b("true") : b("false"),
      feedback_id: ye(d.feedbackId),
      last_request_id: ye(latestAssistantMessageId)
    }), g("feedback_draft_submit"), {
      success: !0,
      feedbackId: d.feedbackId
    };
  }
  if (m("feedback_draft_submit", d.failureReason ?? "network_error", {
    from_this_session: _ ? b("true") : b("false")
  }), d.isZdrOrg) return {
    success: !1,
    error: "Feedback collection is not available for organizations with custom data retention policies."
  };
  if (d.failureReason === "auth_error") return {
    success: !1,
    error: !Ote().error && Wet() || "Couldn't send feedback: not signed in. Run /login, then retry."
  };
  if (d.payloadTooLarge) return {
    success: !1,
    error: error_2,
    payloadTooLarge: !0
  };
  if (d.failureReason === "policy_blocked") return {
    success: !1,
    error: ZZ() ?? "Feedback is disabled by your organization's policy."
  };
  return {
    success: !1,
    error: `Couldn't send feedback${d.statusCode ? ` (server returned ${d.statusCode})` : d.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"}. The draft is still queued. Try again later.`
  };
}
async function VGt(e, r, h) {
  let o = await Jvn(e.draft_id, h);
  if (Rkt(e.draft_id), !o) return;
  if (e.source_session_id === K()) Qvn();
  i("tengu_feedback_draft_discarded", {
    type: c(e.type),
    trigger: c(e.trigger),
    discarded_via: c(r)
  });
}
export { Wtt, VGt };