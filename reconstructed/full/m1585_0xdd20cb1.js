// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Y,
  Lp
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  yLt,
  f6,
  _Lt
} from "B:/~BUN/root/chunk-tqj9zsrn.js";

function BJn(s, n, a) {
  let e = yLt(s),
    r = e !== null ? _Lt() : null;
  if (r !== null) p("goal_set", r.code, {
    origin: c("restored")
  });
  let t;
  if (e === null || r !== null) {
    if (n((o) => (t = o.activeGoal, o.activeGoal === void 0 ? o : {
        ...o,
        activeGoal: void 0
      })), t !== void 0) f6(t, "resume_swap");
    return
  }
  if (a.add(Y(), "Stop", "", {
      type: "prompt",
      prompt: e
    }), n((o) => (t = o.activeGoal, {
      ...o,
      activeGoal: {
        condition: e,
        iterations: 0,
        setAt: Date.now(),
        origin: "restored",
        tokensAtStart: Lp()
      }
    })), t !== void 0) f6(t, "resume_swap");
  i("tengu_goal_restored_on_resume", {
    promptLength: e.length
  }), i("tengu_stop_hook_added", {
    promptLength: e.length,
    via: y("goal"),
    origin: c("restored")
  })
}
export {
  BJn
};
