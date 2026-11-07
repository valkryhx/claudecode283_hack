// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, ab } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { KFn, Uue, fEs, qFn } from "B:/~BUN/root/chunk-36r971cb.js";
function ijo(a, s, d, i) {
  let condition = KFn(a),
    r = condition !== null ? qFn() : null,
    n = r?.code === "hooks_held" ? null : r;
  if (n !== null) c("goal_set", n.code, {
    origin: f("restored")
  });
  let t;
  if (condition === null || n !== null) {
    if (s(o => (t = o.activeGoal, o.activeGoal === void 0 ? o : {
      ...o,
      activeGoal: void 0
    })), t !== void 0) Uue(t, "resume_swap");
    return;
  }
  if (d.add(z(), "Stop", "", fEs(condition)), s(o => (t = o.activeGoal, {
    ...o,
    activeGoal: {
      condition: condition,
      iterations: i?.iterations ?? 0,
      setAt: i?.setAt ?? Date.now(),
      ...(i?.lastReason !== void 0 && {
        lastReason: i.lastReason
      }),
      origin: "restored",
      tokensAtStart: ab()
    }
  })), t !== void 0) Uue(t, "resume_swap");
  l("tengu_goal_restored_on_resume", {
    promptLength: condition.length
  }), l("tengu_stop_hook_added", {
    promptLength: condition.length,
    via: b("goal"),
    origin: f("restored")
  });
}
export { ijo };