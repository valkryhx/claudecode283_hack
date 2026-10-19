// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Kp, mN } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Vd, Kue, hse, t9, Uz } from "B:/~BUN/root/chunk-9grc6xh0.js";
function s(o, t) {
  let enabled = Kp(),
    e = Vd(o),
    effectiveWindow = t9(e, t),
    threshold = Uz(e, t),
    enforced = !(mN() && !Kue(e, t));
  return {
    enabled: enabled,
    effectiveWindow: effectiveWindow,
    threshold: threshold,
    enforced: enforced,
    source: hse(e, t)
  };
}
function P4o(o) {
  let t;
  return {
    notify(c, e) {
      let n = s(c, e);
      if (t !== void 0 && gGr(t, n)) return;
      t = n, o(n);
    },
    reset() {
      t = void 0;
    }
  };
}
function gGr(o, t) {
  return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source;
}
export { P4o, gGr };