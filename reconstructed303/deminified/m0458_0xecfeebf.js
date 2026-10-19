// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
function As(r, a) {
  let {
      signalB: signalB,
      timeoutMs: timeoutMs,
      refTimer: refTimer
    } = a ?? {},
    n = mr();
  if (r?.aborted || signalB?.aborted) return n.abort(), {
    signal: n.signal,
    cleanup: () => {}
  };
  let e,
    t = () => {
      if (e !== void 0) clearTimeout(e);
      n.abort();
    };
  if (timeoutMs !== void 0) {
    if (e = setTimeout(t, timeoutMs), !refTimer) e.unref?.();
  }
  r?.addEventListener("abort", t), signalB?.addEventListener("abort", t);
  let cleanup = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", t), signalB?.removeEventListener("abort", t);
  };
  return {
    signal: n.signal,
    cleanup: cleanup
  };
}
export { As };