// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { qOe } from "B:/~BUN/root/chunk-0mn860zt.js";
class a {
  #t = !1;
  #o = !1;
  get autoModeCheckRan() {
    return this.#t;
  }
  get isLaunchRun() {
    return !this.#o;
  }
  claimAutoModeCheck() {
    if (this.#t) return !1;
    return this.#t = !0, !0;
  }
  rearmAutoModeCheck() {
    this.#t = !1, this.#o = !0;
  }
  reset() {
    this.#t = !1, this.#o = !1;
  }
}
var c = new q(() => new a());
function ZXe(text) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: text,
    color: "warning",
    priority: "high"
  };
}
async function eJe(t, u, f, l, n) {
  let s = c.of(t);
  if (!s.claimAutoModeCheck()) return;
  let {
    updateContext: updateContext,
    notification: notification
  } = await qOe(u, l, s.isLaunchRun);
  if (f(e => {
    let toolPermissionContext = updateContext(e.toolPermissionContext),
      i = toolPermissionContext === e.toolPermissionContext ? e : {
        ...e,
        toolPermissionContext: toolPermissionContext
      };
    if (!notification || n) return i;
    return {
      ...i,
      notifications: {
        ...i.notifications,
        queue: [...i.notifications.queue, ZXe(notification)]
      }
    };
  }), notification && n) n(ZXe(notification));
}
function T2t(t) {
  c.of(t).rearmAutoModeCheck();
}
export { ZXe, eJe, T2t };