// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { hp, Nf, CW, lZ, wRt, j4, oVe } from "B:/~BUN/root/chunk-3jyp964r.js";
function s(e, t) {
  let enabled = Nf(),
    o = hp(e),
    effectiveWindow = j4(o, t),
    threshold = oVe(o, t),
    enforced = !(CW() && !lZ(o, t));
  return {
    enabled: enabled,
    effectiveWindow: effectiveWindow,
    threshold: threshold,
    enforced: enforced,
    source: wRt(o, t)
  };
}
function N3r(e) {
  let t;
  return {
    notify(c, o) {
      let n = s(c, o);
      if (t !== void 0 && aJn(t, n)) return;
      t = n, e(n);
    },
    reset() {
      t = void 0;
    }
  };
}
function aJn(e, t) {
  return e.enabled === t.enabled && e.effectiveWindow === t.effectiveWindow && e.threshold === t.threshold && e.enforced === t.enforced && e.source === t.source;
}
export { N3r, aJn };