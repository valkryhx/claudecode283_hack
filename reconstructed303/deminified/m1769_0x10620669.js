// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, Th } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Msn, Qee, Dsn } from "B:/~BUN/root/chunk-stjjr4k8.js";
function m3r(l, n, a) {
  let e = Msn(l),
    s = e !== null ? Dsn() : null,
    r = s?.code === "hooks_held" ? null : s;
  if (r !== null) p("goal_set", r.code, {
    origin: c("restored")
  });
  let t;
  if (e === null || r !== null) {
    if (n(o => (t = o.activeGoal, o.activeGoal === void 0 ? o : {
      ...o,
      activeGoal: void 0
    })), t !== void 0) Qee(t, "resume_swap");
    return;
  }
  if (a.add(K(), "Stop", "", {
    type: "prompt",
    prompt: e
  }), n(o => (t = o.activeGoal, {
    ...o,
    activeGoal: {
      condition: e,
      iterations: 0,
      setAt: Date.now(),
      origin: "restored",
      tokensAtStart: Th()
    }
  })), t !== void 0) Qee(t, "resume_swap");
  i("tengu_goal_restored_on_resume", {
    promptLength: e.length
  }), i("tengu_stop_hook_added", {
    promptLength: e.length,
    via: b("goal"),
    origin: c("restored")
  });
}
export { m3r };