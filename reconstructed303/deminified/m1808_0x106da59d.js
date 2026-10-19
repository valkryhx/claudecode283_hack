// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { sM, ni } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { tvt } from "B:/~BUN/root/chunk-ar01t015.js";
function iqr(s, o = !0) {
  let r = s.at(-1),
    a = o && r?.type === "assistant" && r.message.stop_reason === null;
  return ni(a ? s.slice(0, -1) : [...s]);
}
async function cSn({
  question: question,
  history: history,
  parentController: parentController,
  onProgress: onProgress,
  getLiveMessages: getLiveMessages,
  isTurnInProgress: isTurnInProgress,
  buildFallbackParams: buildFallbackParams
}) {
  let turnInProgress = isTurnInProgress?.() ?? !0,
    n = sM(),
    cacheSafeParams = n ? {
      ...n,
      toolUseContext: {
        ...n.toolUseContext,
        abortController: mr()
      },
      ...(getLiveMessages && {
        forkContextMessages: iqr(getLiveMessages(), turnInProgress),
        advisorModel: n.toolUseContext.getAdvisorSetting()
      })
    } : buildFallbackParams ? await buildFallbackParams() : null;
  if (cacheSafeParams === null) return {
    cancelled: !1,
    response: {
      response: null,
      synthetic: !1
    }
  };
  onProgress({
    status: "started"
  });
  let t = await tvt({
    question: question,
    cacheSafeParams: cacheSafeParams,
    parentController: parentController,
    onRetry: e => onProgress({
      status: "api_retry",
      attempt: e.retryAttempt,
      max_retries: e.maxRetries,
      retry_delay_ms: e.retryInMs,
      error_status: e.status ?? null
    }),
    threadHistory: !1,
    turnInProgress: turnInProgress,
    ...(history?.length && {
      history: history.map(item => ({
        question: item.question,
        response: item.response,
        ...(item.fallback_notice && {
          fallbackNotice: item.fallback_notice
        })
      }))
    })
  });
  if (t.aborted || parentController.signal.aborted) return {
    cancelled: !0
  };
  return {
    cancelled: !1,
    response: {
      response: t.response,
      synthetic: t.synthetic,
      ...(t.refusalFallback && {
        refusal_fallback: {
          original_model: t.refusalFallback.originalModel,
          fallback_model: t.refusalFallback.fallbackModel,
          content: t.refusalFallback.content
        }
      })
    }
  };
}
export { iqr, cSn };