// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  Rc
} from "B:/~BUN/root/chunk-rzaxm471.js";

function os(r, m) {
  let {
    signalB: n,
    timeoutMs: i,
    refTimer: u,
    timeoutError: d
  } = m ?? {}, t = Xn();
  if (r?.aborted || n?.aborted) return t.abort(), {
    signal: t.signal,
    cleanup: () => {}
  };
  let e, o = () => {
    if (e !== void 0) clearTimeout(e);
    t.abort()
  };
  if (i !== void 0) {
    let a = Math.min(i, Rc);
    if (e = d ? setTimeout((l) => l.abort(new DOMException("The operation timed out.", "TimeoutError")), a, t) : setTimeout(o, a), !u) e.unref?.()
  }
  r?.addEventListener("abort", o), n?.addEventListener("abort", o);
  let b = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", o), n?.removeEventListener("abort", o)
  };
  return {
    signal: t.signal,
    cleanup: b
  }
}
export {
  os
};
