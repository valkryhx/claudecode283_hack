// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Xn } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { Rc } from "B:/~BUN/root/chunk-rzaxm471.js";
function os(r, m) {
  let {
      signalB: signalB,
      timeoutMs: timeoutMs,
      refTimer: refTimer,
      timeoutError: timeoutError
    } = m ?? {},
    t = Xn();
  if (r?.aborted || signalB?.aborted) return t.abort(), {
    signal: t.signal,
    cleanup: () => {}
  };
  let e,
    o = () => {
      if (e !== void 0) clearTimeout(e);
      t.abort();
    };
  if (timeoutMs !== void 0) {
    let a = Math.min(timeoutMs, Rc);
    if (e = timeoutError ? setTimeout(l => l.abort(new DOMException("The operation timed out.", "TimeoutError")), a, t) : setTimeout(o, a), !refTimer) e.unref?.();
  }
  r?.addEventListener("abort", o), signalB?.addEventListener("abort", o);
  let cleanup = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", o), signalB?.removeEventListener("abort", o);
  };
  return {
    signal: t.signal,
    cleanup: cleanup
  };
}
export { os };