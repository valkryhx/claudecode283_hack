// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { o1 } from "B:/~BUN/root/chunk-aky7m4ay.js";
var d = {},
  k7r = o1("whiteboardTelemetry", d);
function E7r(i, r, e, is_first_publish) {
  _("whiteboard_publish", {
    seeded: is_first_publish && e.elCount > 0,
    el_count: e.elCount,
    is_first_publish: is_first_publish
  });
  let t;
  if (i.set(o => {
    if (t = o[r], t === void 0) return {
      ...o,
      [r]: e.pingCount
    };
    if (e.pingCount > t) return {
      ...o,
      [r]: e.pingCount
    };
    return o;
  }), t !== void 0 && e.pingCount > t) _("whiteboard_turn", {
    ping_count: e.pingCount,
    el_count: e.elCount
  });
}
export { k7r, E7r };