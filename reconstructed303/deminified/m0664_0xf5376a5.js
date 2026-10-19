// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Uao, Kfs, m6, HR, g_, Re } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { xte, qk, PLr, Qp, Ht, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { F, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ps } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { kU, pN, fa } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Zd } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { as } from "B:/~BUN/root/chunk-j97yjp75.js";
import { io, Om, $l, hl, qp, Zr } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { lCt, Bss, Zdr } from "B:/~BUN/root/chunk-wsa799f1.js";
import { o7 } from "B:/~BUN/root/chunk-g8583f1n.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
var T = /\p{Script=Han}/u,
  R = /[\p{Script=Hiragana}\p{Script=Katakana}\u30fc\uff70\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u,
  A = /\p{Script=Hangul}/u,
  L = /[\p{L}\p{N}]/u;
function y(e) {
  let {
    han: han,
    phonetic: phonetic,
    hangul: hangul
  } = C(e);
  return han + phonetic + hangul;
}
function w(e) {
  let n = e.trim();
  if (n === "") return 0;
  let t = 0;
  for (let o of n.split(/\s+/)) {
    let {
      han: han_2,
      phonetic: phonetic_2,
      hangul: hangul_2,
      other: other
    } = C(o);
    t += han_2 === 0 && phonetic_2 === 0 ? 1 : (other + hangul_2 > 0 ? 1 : 0) + han_2 / 2 + phonetic_2 / 4;
  }
  return Math.ceil(t);
}
function C(e) {
  let han_3 = 0,
    phonetic_3 = 0,
    hangul_3 = 0,
    other_2 = 0;
  for (let r of e) if (T.test(r)) han_3++;else if (R.test(r)) phonetic_3++;else if (A.test(r)) hangul_3++;else if (L.test(r)) other_2++;
  return {
    han: han_3,
    phonetic: phonetic_3,
    hangul: hangul_3,
    other: other_2
  };
}
function FLe(e) {
  return e.status === "shown" || e.status === "accepted";
}
function gvn(e) {
  return e.status === "empty" ? null : e.text;
}
function hvn() {
  let CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION = a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !1) return i("tengu_prompt_suggestion_init", {
    enabled: !1,
    source: b("env")
  }), !1;
  if (CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return i("tengu_prompt_suggestion_init", {
    enabled: !0,
    source: b("env")
  }), !0;
  if (!E("tengu_chomp_inflection", !1)) return i("tengu_prompt_suggestion_init", {
    enabled: !1,
    source: b("growthbook")
  }), !1;
  if (we()) return i("tengu_prompt_suggestion_init", {
    enabled: !1,
    source: b("non_interactive")
  }), !1;
  if (as() && Zd()) return i("tengu_prompt_suggestion_init", {
    enabled: !1,
    source: b("swarm_teammate")
  }), !1;
  let enabled = ut()?.promptSuggestionEnabled !== !1;
  return i("tengu_prompt_suggestion_init", {
    enabled: enabled,
    source: b("setting")
  }), enabled;
}
function yvn() {
  let CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION_2 = a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION_2 !== void 0) return CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION_2;
  return ut()?.promptSuggestionEnabled !== !1;
}
function x(e, n) {
  if (!e.promptSuggestionEnabled) return "disabled";
  if (e.pendingWorkerRequest || e.pendingSandboxRequest) return "pending_permission";
  if (e.mcp.clients.some(item => item.type === "connected" && (item.transportErrorState?.pendingElicitations ?? 0) > 0)) return "elicitation_active";
  if (e.toolPermissionContext.mode === "plan") return "plan_mode";
  {
    let {
        status: status,
        overageInUse: overageInUse
      } = fa(),
      s = status === "allowed_warning" && a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0;
    if (status !== "allowed" && !s) return "rate_limit";
    if ((n ?? overageInUse === !0) && !(pN() || kU() || xte() && PLr() === null && qk() === null)) return "usage_credits";
  }
  return null;
}
async function Y4r(e, n, t, o, s, r) {
  if (e.signal.aborted) return R0("aborted", s), null;
  if (F(n, S => S.type === "assistant") < 2) return R0("early_conversation", s), null;
  let d = g_(n);
  if (d?.isApiErrorMessage) return R0("last_response_error", s), null;
  let p = t(),
    f = x(p, o.toolUseContext.queryTracking?.billedToUsageCredits);
  if (f) return R0(f, s), null;
  let cacheColdBy = O(d);
  if (cacheColdBy) return R0("cache_cold", s, {
    cacheColdBy: cacheColdBy
  }), null;
  if (r && Zdr()) {
    let S = r.eligibleTurns % Bss === 0;
    if (r.eligibleTurns++, !S) return R0("unused_streak", s), null;
  }
  let {
    suggestion: suggestion,
    generationRequestId: generationRequestId
  } = await N(e, o);
  if (e.signal.aborted) return R0("aborted", s), null;
  if (!suggestion) return R0("empty", s), null;
  if (q(suggestion, s)) return null;
  return {
    suggestion: suggestion,
    generationRequestId: generationRequestId
  };
}
async function x9o(e, n) {
  if (!e.querySource?.startsWith("repl_main_thread")) return;
  let t = o7(),
    o = Ht(),
    s = o && n?.tempo === "blocked" && !n.block;
  if (o ? t !== "focused" && !s : t === "blurred") {
    R0(o ? "bg_unattached" : "unfocused", "cli");
    return;
  }
  let promptSuggestion = e.toolUseContext.session.promptSuggestion,
    abortController = new AbortController();
  promptSuggestion.abortController = abortController;
  let d = m6(e);
  try {
    let p = await Y4r(abortController, e.messages, e.toolUseContext.getAppState, d, "cli", s ? void 0 : promptSuggestion);
    if (!p) return;
    if (lCt() && Qp(e.toolUseContext.agentContext)) {
      R0("plugin_owns", "cli");
      return;
    }
    let f = !1,
      {
        isShown: isShown
      } = await Kfs({
        text: p.suggestion,
        origin: {
          kind: "suggestion"
        },
        signal: abortController.signal,
        place: h => {
          if (abortController.signal.aborted) return {
            isShown: !1
          };
          if (f = !0, s) v(h, n?.needs, e.toolUseContext.storageV5).catch(hl);
          return Uao(h, p.generationRequestId);
        }
      });
    if (abortController.signal.aborted) {
      R0("aborted", "cli");
      return;
    }
    if (!isShown && f) R0("timing", "cli");
  } catch (error) {
    if (error instanceof Error && (error.name === "AbortError" || error.name === "APIUserAbortError")) {
      R0("aborted", "cli");
      return;
    }
    m("prompt_suggestion_generate", "api_error"), l(H(error));
  } finally {
    if (promptSuggestion.abortController === abortController) promptSuggestion.abortController = null;
  }
}
async function v(suggestedReply, n, t) {
  if (ps(suggestedReply) !== suggestedReply) return;
  let o = io(Om());
  qp(o);
  let s = await Zr(o, t);
  if (s?.tempo !== "blocked" || s.needs !== n || s.suggestedReply === suggestedReply) return;
  await $l(o, {
    ...s,
    suggestedReply: suggestedReply
  }, t);
}
var P = 1e4;
function O(e) {
  if (!e) return null;
  let usage = e.message.usage,
    t = (usage.input_tokens ?? 0) + (usage.output_tokens ?? 0);
  if (t > P) return "uncached";
  let o = usage.cache_creation_input_tokens ?? 0;
  if (t + o <= P) return null;
  return E("tengu_chomp_thaw", !1) ? null : "cache_write";
}
var I = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed \u2192 "run the tests"
After code written \u2192 "try it out"
Claude offers options \u2192 suggest the one the user would likely pick, based on conversation
Claude asks to continue \u2192 "yes" or "go ahead"
Task complete, obvious follow-up \u2192 "commit this" or "push it"
After error or misunderstanding \u2192 silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate \u2014 including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`;
async function M(content, abortController_2, cacheSafeParams) {
  let canUseTool = async () => ({
      behavior: "deny",
      message: "No tools needed for suggestion",
      decisionReason: {
        type: "other",
        reason: "suggestion only"
      }
    }),
    s = await HR({
      promptMessages: [Re({
        content: content
      })],
      cacheSafeParams: cacheSafeParams,
      canUseTool: canUseTool,
      querySource: "prompt_suggestion",
      forkLabel: "prompt_suggestion",
      overrides: {
        abortController: abortController_2
      },
      skipTranscript: !0,
      skipCacheWrite: !0
    }),
    r = s.messages.find(item => item.type === "assistant"),
    generationRequestId_2 = r?.type === "assistant" ? r.requestId ?? null : null,
    candidates = [];
  for (let p of s.messages) {
    if (p.type !== "assistant" || p.isApiErrorMessage) continue;
    let f = p.message.content.find(item => item.type === "text");
    if (f?.type === "text") candidates.push(f.text);
  }
  return {
    candidates: candidates,
    generationRequestId: generationRequestId_2
  };
}
function W(e) {
  return e.trim().replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (n, t, o) => o.includes(`</${t.toLowerCase()}>`) || o.includes(`</${t.toUpperCase()}>`) ? n : o).replace(/^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result|\u63D0\u6848|\u56DE\u7B54|\u8FD4\u4FE1|\u5FDC\u7B54|\u51FA\u529B|\u7D50\u679C|\u5EFA\u8BAE|\u56DE\u590D|\u7B54\u6848|\u8F93\u51FA|\u7ED3\u679C|\uC81C\uC548|\uB2F5\uBCC0|\uC751\uB2F5|\uCD9C\uB825|\uACB0\uACFC)\s*[:\uFF1A]\s*/i, "").trim();
}
async function N(e, n) {
  let {
    candidates: candidates_2,
    generationRequestId: generationRequestId_3
  } = await M(I, e, n);
  for (let s of candidates_2) {
    let suggestion_2 = W(s);
    if (suggestion_2) return g("prompt_suggestion_generate"), {
      suggestion: suggestion_2,
      generationRequestId: generationRequestId_3
    };
  }
  return g("prompt_suggestion_generate"), {
    suggestion: null,
    generationRequestId: generationRequestId_3
  };
}
function q(e, n) {
  if (!e) return R0("empty", n), !0;
  let t = e.toLowerCase(),
    o = w(e),
    s = [["done", () => t === "done" || /^\P{L}*(\u5B8C\u4E86(\u3057\u307E\u3057\u305F)?|\u5B8C\u6210\u4E86?|\uC644\uB8CC\uB428?)\P{L}*$/u.test(e)], ["meta_text", () => t === "nothing found" || t === "nothing found." || t.startsWith("nothing to suggest") || t.startsWith("no suggestion") || /\bsilence is\b|\bstay(s|ing)? silent\b/.test(t) || /^\W*silence\W*$/.test(t) || /^\P{L}*(\u6C88\u9ED9|\u6C89\u9ED8|\u9759\u9ED8|\uCE68\uBB35|\u63D0\u6848(\u306A\u3057|\u306F\u3042\u308A\u307E\u305B\u3093)|\u7279\u306B(\u306A\u3057|\u3042\u308A\u307E\u305B\u3093)|[\u65E0\u6CA1\u6C92]\u6709?\u5EFA[\u8BAE\u8B70]|(\uC81C\uC548|\uD574\uB2F9)\s*\uC5C6\uC74C)\P{L}*$/u.test(e)], ["meta_wrapped", () => /^(\(.*\)|\[.*\]|\uFF08.*\uFF09|\uFF3B.*\uFF3D|\u3010.*\u3011|\u3014.*\u3015)$/.test(e)], ["error_message", () => t.startsWith("api error:") || t.startsWith("prompt is too long") || t.startsWith("request timed out") || t.startsWith("invalid api key") || t.startsWith("image was too large")], ["prefixed_label", () => /^\w+:\s/.test(e)], ["too_few_words", () => {
      if (o >= 2) return !1;
      if (e.startsWith("/")) return !1;
      let r = y(e);
      if (r > 0) return r < 2;
      return !new Set(["yes", "yeah", "yep", "yea", "yup", "sure", "ok", "okay", "push", "commit", "deploy", "stop", "continue", "check", "exit", "quit", "no"]).has(t);
    }], ["too_many_words", () => o > 12], ["too_long", () => e.length >= 100], ["multiple_sentences", () => /[.!?]\s+[A-Z]|[\u3002\uFF01\uFF1F]\s*[\p{L}\p{N}]/u.test(e)], ["has_formatting", () => /[\n*]|\*\*/.test(e)], ["evaluative", () => /thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(t) || /^\P{L}*(\u3042\u308A\u304C\u3068\u3046(\u3054\u3056\u3044\u307E\u3059|\u3054\u3056\u3044\u307E\u3057\u305F)?|\u52A9\u304B\u308A\u307E\u3057\u305F|[\u8C22\u8B1D][\u8C22\u8B1D][\u4F60\u60A8]?|\u611F\u8C22[\u4F60\u60A8]?|\u611F\u8B1D\u3057\u307E\u3059|\uAC10\uC0AC\uD569\uB2C8\uB2E4|\uACE0\uB9C8\uC6CC\uC694?)(\P{L}|\u7684|$)/u.test(e) || /(\u826F\u3055\u305D\u3046|\u3088\u3055\u305D\u3046|\u3044\u3044\u3067\u3059\u306D|\u770B\u8D77\u6765\u4E0D\u9519|\u592A\u597D\u4E86|\u5B8C\u74A7|\u5B8C\u7F8E|\uC88B\uB124\uC694)(\u3067\u3059|\u3067\u3059\u306D|\u3060\u306D)?\P{L}*$/u.test(e)], ["claude_voice", () => /^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|\u8BA9\u6211(?!\u4EEC)|\u6211\u6765|\u6211\u4F1A|\u6211\u5C06)/i.test(e)]];
  for (let [r, u] of s) if (u()) return R0(r, n), !0;
  return !1;
}
function P9o(e, n, t, o) {
  let similarity = Math.round(n.length / (e.length || 1) * 100) / 100,
    r = n.toLowerCase() === e.toLowerCase(),
    u = Math.max(0, Date.now() - t);
  i("tengu_prompt_suggestion", {
    source: b("sdk"),
    outcome: b(r ? "accepted" : "ignored"),
    prompt_id: b("user_intent"),
    ...(o && {
      generationRequestId: ye(o)
    }),
    ...(r && {
      timeToAcceptMs: u
    }),
    ...(!r && {
      timeToIgnoreMs: u
    }),
    similarity: similarity
  });
}
function R0(e, n, t) {
  i("tengu_prompt_suggestion", {
    ...(n && {
      source: c(n)
    }),
    outcome: b("suppressed"),
    reason: c(e),
    ...(t?.cacheColdBy && {
      cacheColdBy: c(t.cacheColdBy)
    }),
    prompt_id: b("user_intent")
  });
}
export { FLe, gvn, hvn, yvn, Y4r, x9o, P9o, R0 };