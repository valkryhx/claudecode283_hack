// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tQ } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { vt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { sTn } from "B:/~BUN/root/chunk-mxaybm01.js";
import { jf } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { UA, gk, Ce } from "B:/~BUN/root/chunk-3jyp964r.js";
function bWe() {
  let CLAUDE_CODE_ENABLE_AWAY_SUMMARY = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (zo(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) return !1;
  if (Ne(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) return !0;
  if (Te()) return !1;
  if (Je()?.awaySummaryEnabled === !1) return !1;
  return !0;
}
function y() {
  let CLAUDE_CODE_ENABLE_REMOTE_RECAP = a.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (CLAUDE_CODE_ENABLE_REMOTE_RECAP !== void 0) return CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  return x("tengu_harbor_moth", !1);
}
function mSt(e, n) {
  if (!n.onMetadataChanged) return;
  if (vt() || !sTn() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = !0, g(e, n);
}
function Dor(e) {
  e.reset();
}
async function g(e, n) {
  e.inFlight?.abort();
  let abortController = new AbortController();
  e.inFlight = abortController;
  let o = await gSt(abortController.signal);
  if (abortController.signal.aborted) return;
  if (o.kind !== "ok") {
    if (o.kind !== "no-turn") m("ccr_recap_generate", o.kind);
    return;
  }
  if (n.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (n.notifyMetadataChanged({
    recap: o.text
  }), o.capped) p("ccr_recap_generate", "capped");else _("ccr_recap_generate");
}
var content = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.",
  f = 400;
async function gSt(e, n) {
  let cacheSafeParams = UA();
  if (!cacheSafeParams && n) {
    if (e.aborted) return {
      kind: "aborted"
    };
    try {
      cacheSafeParams = await n();
    } catch (error) {
      return t(`[awaySummary] fallback params rebuild failed: ${error}`), {
        kind: "failed"
      };
    }
    if (e.aborted) return {
      kind: "aborted"
    };
  }
  if (!cacheSafeParams) return t("[awaySummary] no CacheSafeParams saved, skipping"), {
    kind: "no-turn"
  };
  let abortController_2 = new AbortController();
  e.addEventListener("abort", () => abortController_2.abort(), {
    once: !0
  });
  try {
    let {
      messages: messages
    } = await gk({
      promptMessages: [Ce({
        content: content
      })],
      cacheSafeParams: cacheSafeParams,
      overrides: {
        abortController: abortController_2
      },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: {
          type: "other",
          reason: "away_summary"
        }
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0
    });
    if (e.aborted) return {
      kind: "aborted"
    };
    let u = messages.find(item => item.type === "assistant" && item.isApiErrorMessage);
    if (u) return {
      kind: "api-error",
      text: l([u], !0)
    };
    let text = l(messages, !1),
      capped = text.length > f;
    if (capped) {
      let c = tQ(text, f);
      t(`[awaySummary] recap capped from ${text.length} to ${c.length} chars`), text = c;
    }
    return text ? {
      kind: "ok",
      text: text,
      capped: capped
    } : {
      kind: "failed"
    };
  } catch (error) {
    if (e.aborted) return {
      kind: "aborted"
    };
    return t(`[awaySummary] generation failed: ${error}`), {
      kind: "failed"
    };
  }
}
function l(e, n) {
  return jf(e.flatMap(item => item.type === "assistant" && (n || !item.isApiErrorMessage) ? item.message.content : []).filter(item => item.type === "text").map(item => "text" in item ? item.text : "").join("")).trim();
}
export { bWe, mSt, Dor, gSt };