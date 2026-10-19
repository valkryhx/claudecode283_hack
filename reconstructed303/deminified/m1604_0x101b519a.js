// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { rn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { dn } from "B:/~BUN/root/chunk-damrp3r8.js";
import { on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { ae, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function TF(r, o, t = 1000, n = 0, a) {
  let e = dn(),
    u = () => rn(Math.max(0, (a ?? Date.now()) - r - n)),
    l = ae(f => {
      if (!o) return () => {};
      let i,
        s = () => {
          try {
            f();
          } finally {
            i = e.setTimeout(s, t);
          }
        };
      return i = e.setTimeout(s, t), () => i();
    }, [o, t, e]);
  return Dt(l, u, u);
}
function rz({
  onClose: onClose,
  onBack: onBack,
  onKill: onKill,
  onEnter: onEnter
}) {
  return on({
    "confirm:yes": onEnter ?? onClose
  }, {
    context: "Confirmation"
  }), function (e) {
    if (e.key === " ") e.preventDefault(), onClose();else if (e.key === "left" && onBack) e.preventDefault(), onBack();else if (e.key === "x" && !e.ctrl && !e.meta && onKill) e.preventDefault(), onKill();
  };
}
export { TF, rz };