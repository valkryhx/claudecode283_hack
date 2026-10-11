// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
class De extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function qLr(e) {
  if (!(e instanceof Error)) return;
  let cause = e.cause;
  return typeof cause === "string" ? cause : void 0;
}
function Tdt(e, t = "aborted") {
  let {
    reason: reason
  } = e;
  return reason instanceof Error ? reason.message : reason === void 0 ? t : String(reason);
}
function MNt(e, t) {
  if (!G(e)) throw new De(`${t}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return e;
}
var dOo = e => typeof e === "object" && e !== null && "aborted" in e && typeof e.addEventListener === "function" && typeof e.removeEventListener === "function";
var zCe = e => new De(`${e}: its environment was unloaded`);
function ni() {
  let e;
  return {
    set: t => {
      e = t;
    },
    get: () => e
  };
}
var eqn = ni();
var DNt = () => eqn.get();
export { Tdt, De, MNt, qLr, dOo, zCe, ni, eqn, DNt };