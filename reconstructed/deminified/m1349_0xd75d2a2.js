// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { wa } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { ktr } from "B:/~BUN/root/chunk-m2n01fyt.js";
import { _u } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Hn, Ih } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { gk, bc, Ce, eo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { mw } from "B:/~BUN/root/chunk-90zbw58x.js";
import { Tze } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { Mp as usage } from "B:/~BUN/root/chunk-504tqm4f.js";
var A = /^\/btw\b/gi,
  M = "_/btw can't run tools: any tool calls or tool output shown above were not executed and may not reflect your actual files or data. Ask in the main conversation to check._",
  _ = "(That answer wrote tool calls as text. Nothing was executed, so it is omitted here.)",
  b = "_(This answer was cut off before it finished. Ask again to retry.)_",
  E = "(That answer was cut off before it finished, so it is omitted here.)",
  content = "[No result yet \u2014 this call is still in progress in the main conversation (running, awaiting approval, or queued)]";
function skn(o) {
  let n = [],
    i = o.matchAll(A);
  for (let s of i) if (s.index !== void 0) n.push({
    word: s[0],
    start: s.index,
    end: s.index + s[0].length
  });
  return n;
}
async function sQe({
  question: o,
  cacheSafeParams: cacheSafeParams,
  parentController: parentController,
  onRetry: onRetry,
  threadHistory = !0,
  history: history,
  turnInProgress = !0
}) {
  let abortController = parentController ? Ih(parentController) : Hn(),
    p = threadHistory ? cacheSafeParams.toolUseContext.session.btwHistory : null,
    w = (history ?? p?.exchanges ?? []).flatMap(item => {
      let u = ktr(item.response) ? _ : item.response.endsWith(b) ? E : item.response;
      return [Ce({
        content: item.question
      }), bc({
        content: item.fallbackNotice ? `\u26A0 ${item.fallbackNotice}

${u}` : u
      })];
    }),
    h = turnInProgress ? x(cacheSafeParams.forkContextMessages) : void 0;
  try {
    let r = await gk({
        promptMessages: [...(h ? [h] : []), ...w, Ce({
          content: [{
            type: "text",
            text: `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.

IMPORTANT CONTEXT:
- You are a separate, lightweight agent spawned to answer this one question
- The main agent is NOT interrupted - it continues working independently in the background
- You share the conversation context but are a completely separate instance
- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect

CRITICAL CONSTRAINTS:
- You have NO tools available - you cannot read files, run commands, search, or take any actions
- Do NOT write tool calls or tool output as text (for example invoke or function_calls XML blocks) - nothing you write here is executed; if answering would need reading files, running commands, or searching, say that can't be checked from a side question and suggest asking in the main conversation
- This is a one-off response - there will be no follow-up turns
- You can ONLY provide information based on what you already know from the conversation context
- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action
- If you don't know the answer, say so - do not offer to look it up or investigate

Simply answer the question with the information you have.</system-reminder>

`
          }, {
            type: "text",
            text: o
          }]
        })],
        cacheSafeParams: cacheSafeParams,
        canUseTool: async () => ({
          behavior: "deny",
          message: "Side questions cannot use tools",
          decisionReason: {
            type: "other",
            reason: "side_question"
          }
        }),
        querySource: "side_question",
        forkLabel: "side_question",
        maxTurns: 1,
        skipCacheWrite: !0,
        skipTranscript: !0,
        overrides: {
          abortController: abortController
        },
        onMessage: onRetry ? c => {
          if (T(c)) onRetry({
            retryAttempt: c.retryAttempt,
            maxRetries: c.maxRetries,
            retryInMs: c.retryInMs,
            status: c.error.status
          });
        } : void 0
      }),
      {
        live: live,
        notice: notice
      } = Tze(r.messages),
      {
        response: response,
        synthetic: synthetic
      } = N(live),
      refusalFallback = notice && {
        originalModel: notice.originalModel,
        fallbackModel: notice.fallbackModel,
        content: notice.content
      };
    if (p && response && !synthetic) p.append(o, response, refusalFallback?.content);
    return {
      response: response,
      synthetic: synthetic,
      usage: r.totalUsage,
      ...(refusalFallback && !synthetic && {
        refusalFallback: refusalFallback
      })
    };
  } catch (error) {
    if (error instanceof _u || abortController.signal.aborted) return {
      response: null,
      synthetic: !1,
      usage: usage,
      aborted: !0
    };
    throw error;
  }
}
function x(o) {
  let n = o.filter(item => !mw(item)),
    i = n.findLast(e => e.type === "assistant");
  if (!i) return;
  let s = new Set(),
    l = [];
  for (let e of n) if (e.type === "user" && Array.isArray(e.message.content)) {
    for (let t of e.message.content) if (t.type === "tool_result") s.add(t.tool_use_id);
  } else if (e.type === "assistant" && e.message.id === i.message.id) {
    for (let t of e.message.content) if (t.type === "tool_use") l.push(t.id);
  }
  let a = l.filter(item => !s.has(item));
  if (a.length === 0) return;
  return Ce({
    content: a.map(e => ({
      type: "tool_result",
      tool_use_id: e,
      content: content
    })),
    isMeta: !0
  });
}
function N(o) {
  let n = o.flatMap(item => item.type === "assistant" && !item.isApiErrorMessage ? item.message.content : []),
    i = o.find(item => item.type === "assistant" && item.isApiErrorMessage === !0),
    s = eo(n, `

`).trim();
  if (s) {
    let t = [...(ktr(s) ? [M] : []), ...(i ? [b] : [])];
    return {
      response: [s, ...t].join(`

`),
      synthetic: !1
    };
  }
  let l = n.find(item => item.type === "tool_use");
  if (l) return {
    response: `(The model tried to call ${"name" in l ? l.name : "a tool"} instead of answering directly. Try rephrasing or ask in the main conversation.)`,
    synthetic: !0
  };
  let a = i ? eo(i.message.content, `

`).trim() : "";
  if (a) return {
    response: `(API error: ${a.startsWith(`${wa}: `) ? a.slice(wa.length + 2) : a})`,
    synthetic: !0
  };
  let e = o.find(T);
  if (e) return {
    response: `(API error: ${e.error.formatted})`,
    synthetic: !0
  };
  return {
    response: null,
    synthetic: !1
  };
}
function T(o) {
  return o.type === "system" && "subtype" in o && o.subtype === "api_error";
}
export { skn, sQe };