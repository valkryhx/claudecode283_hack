// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ON } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Gt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { c4r } from "B:/~BUN/root/chunk-t7h5ha99.js";
import { FS } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { XM, sA, Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
function tCt() {
  let CLAUDE_CODE_ENABLE_AWAY_SUMMARY = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (rs(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) return !1;
  if (Pe(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) return !0;
  if (ye()) return !1;
  if (yt()?.awaySummaryEnabled === !1) return !1;
  return !0;
}
function y() {
  let CLAUDE_CODE_ENABLE_REMOTE_RECAP = i.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (CLAUDE_CODE_ENABLE_REMOTE_RECAP !== void 0) return CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  return v("tengu_harbor_moth", !1);
}
function z_n(e, a) {
  if (!a.onMetadataChanged) return;
  if (Gt() || !c4r() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = !0, S(e, a);
}
function woi(e) {
  e.startedForTurnEnd = !0;
}
function koi(e) {
  e.startedForTurnEnd = !1;
}
function iVo(e) {
  e.reset();
}
async function S(e, a) {
  e.inFlight?.abort();
  let abortController = new AbortController();
  e.inFlight = abortController;
  let n = await G_n(abortController.signal);
  if (abortController.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") m("ccr_recap_generate", n.kind);
    return;
  }
  if (a.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (a.notifyMetadataChanged({
    recap: n.text
  }), n.capped) c("ccr_recap_generate", "capped");else g("ccr_recap_generate");
}
var content = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.",
  f = 400;
async function G_n(e, a) {
  let cacheSafeParams = XM();
  if (!cacheSafeParams && a) {
    if (e.aborted) return {
      kind: "aborted"
    };
    try {
      cacheSafeParams = await a();
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
    } = await sA({
      promptMessages: [Ie({
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
    let d = messages.find(item => item.type === "assistant" && item.isApiErrorMessage);
    if (d) return {
      kind: "api-error",
      text: l([d], !0)
    };
    let text = l(messages, !1),
      capped = text.length > f;
    if (capped) {
      let u = ON(text, f);
      t(`[awaySummary] recap capped from ${text.length} to ${u.length} chars`), text = u;
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
function l(e, a) {
  return FS(e.flatMap(item => item.type === "assistant" && (a || !item.isApiErrorMessage) ? item.message.content : []).filter(item => item.type === "text").map(item => "text" in item ? item.text : "").join("")).trim();
}
export { tCt, z_n, woi, koi, iVo, G_n };