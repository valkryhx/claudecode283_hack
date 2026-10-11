// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { se, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function eO(r, o, t = 1000, a = 0, e) {
  let n = Yt(),
    u = () => Zt(Math.max(0, (e ?? Date.now()) - r - a)),
    l = se(f => {
      if (!o) return () => {};
      let i,
        s = () => {
          try {
            f();
          } finally {
            i = n.setTimeout(s, t);
          }
        };
      return i = n.setTimeout(s, t), () => i();
    }, [o, t, n]);
  return At(l, u, u);
}
function kH({
  onClose: onClose,
  onBack: onBack,
  onKill: onKill
}) {
  return Wt({
    "confirm:yes": onClose
  }, {
    context: "Confirmation"
  }), function (e) {
    if (e.key === " ") e.preventDefault(), onClose();else if (e.key === "left" && onBack) e.preventDefault(), onBack();else if (e.key === "x" && !e.ctrl && !e.meta && onKill) e.preventDefault(), onKill();
  };
}
export { eO, kH };