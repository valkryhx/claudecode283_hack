// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  XM
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Es
} from "B:/~BUN/root/chunk-jmt91fq8.js";
import {
  dfn
} from "B:/~BUN/root/chunk-4pa8d63y.js";

function zFo(s, o = !0) {
  let r = s.at(-1),
    a = o && r?.type === "assistant" && r.message.stop_reason === null;
  return Es(a ? s.slice(0, -1) : [...s])
}
async function F3n({
  question: s,
  history: o,
  parentController: r,
  onProgress: a,
  getLiveMessages: l,
  isTurnInProgress: p,
  buildFallbackParams: i
}) {
  let u = p?.() ?? !0,
    n = XM(),
    c = n ? {
      ...n,
      toolUseContext: {
        ...n.toolUseContext,
        abortController: Xn()
      },
      ...l && {
        forkContextMessages: zFo(l(), u),
        advisorModel: n.toolUseContext.getAdvisorSetting()
      }
    } : i ? await i() : null;
  if (c === null) return {
    cancelled: !1,
    response: {
      response: null,
      synthetic: !1
    }
  };
  a({
    status: "started"
  });
  let t = await dfn({
    question: s,
    cacheSafeParams: c,
    parentController: r,
    onRetry: (e) => a({
      status: "api_retry",
      attempt: e.retryAttempt,
      max_retries: e.maxRetries,
      retry_delay_ms: e.retryInMs,
      error_status: e.status ?? null
    }),
    threadHistory: !1,
    turnInProgress: u,
    ...o?.length && {
      history: o.map((e) => ({
        question: e.question,
        response: e.response,
        ...e.fallback_notice && {
          fallbackNotice: e.fallback_notice
        }
      }))
    }
  });
  if (t.aborted || r.signal.aborted) return {
    cancelled: !0
  };
  return {
    cancelled: !1,
    response: {
      response: t.response,
      synthetic: t.synthetic,
      ...t.refusalFallback && {
        refusal_fallback: {
          original_model: t.refusalFallback.originalModel,
          fallback_model: t.refusalFallback.fallbackModel,
          content: t.refusalFallback.content
        }
      }
    }
  }
}
export {
  zFo,
  F3n
};
