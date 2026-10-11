// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Fr as icon } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
var a_t = {
  success: {
    icon: Z.tick,
    color: "success",
    ariaLabel: "done:"
  },
  error: {
    icon: Z.cross,
    color: "error",
    ariaLabel: "failed:"
  },
  warning: {
    icon: Z.warning,
    color: "warning",
    ariaLabel: "warning:"
  },
  info: {
    icon: Z.info,
    color: "suggestion",
    ariaLabel: "note:"
  },
  pending: {
    icon: Z.circle,
    color: void 0,
    ariaLabel: "pending:"
  },
  loading: {
    icon: "\u2026",
    color: void 0,
    ariaLabel: "loading:"
  },
  running: {
    icon: icon,
    color: void 0,
    ariaLabel: "running:"
  },
  on: {
    icon: Z.tick,
    color: "success",
    ariaLabel: "on:"
  },
  off: {
    icon: Z.circle,
    color: void 0,
    ariaLabel: "off:"
  }
};
function Mer() {
  return Math.max(...Object.values(a_t).map(item => ie(item.icon)));
}
function et(c) {
  let u = w(8),
    {
      status: status,
      "aria-label": m,
      withSpace: withSpace
    } = c,
    S = withSpace === void 0 ? !1 : withSpace,
    o = a_t[status];
  const dimColor = !o.color,
    s = m ?? o.ariaLabel;
  let i;
  if (u[0] !== o.icon || u[1] !== s) i = e(n, {
    "aria-label": s,
    children: o.icon
  }), u[0] = o.icon, u[1] = s, u[2] = i;else i = u[2];
  const l = S && " ";
  let f;
  if (u[3] !== o.color || u[4] !== dimColor || u[5] !== i || u[6] !== l) f = r(n, {
    color: o.color,
    dimColor: dimColor,
    children: [i, l]
  }), u[3] = o.color, u[4] = dimColor, u[5] = i, u[6] = l, u[7] = f;else f = u[7];
  return f;
}
export { a_t, Mer, et };