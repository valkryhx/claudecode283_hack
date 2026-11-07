// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, ab, ye, er } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Us } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { qNt, AEs, $m, Eee } from "B:/~BUN/root/chunk-79dw4seg.js";
import { fGi } from "B:/~BUN/root/chunk-9t9ygsbp.js";
import { Qb, UNt } from "B:/~BUN/root/chunk-ynpwd78y.js";
import { randomUUID as d } from "crypto";
function lCr(met, condition) {
  return {
    type: "goal_status",
    met: met,
    sentinel: !0,
    condition: condition
  };
}
function KFn(e) {
  if (!e) return null;
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    if (n.attachment.met || n.attachment.failed) return null;
    let condition_2 = n.attachment.condition;
    return typeof condition_2 === "string" && condition_2.length > 0 ? condition_2 : null;
  }
  return null;
}
function Uue(e, t) {
  l("tengu_goal_cleared", {
    reason: f(t),
    iterations: e.iterations,
    durationMs: Date.now() - e.setAt,
    origin: de(e.origin)
  });
}
var Qtn = 4000,
  m = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function FNt(e) {
  return m.has(e.toLowerCase());
}
function uEs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    let attachment = n.attachment;
    if (!attachment.met || attachment.sentinel) continue;
    return {
      condition: attachment.condition,
      iterations: attachment.iterations,
      durationMs: attachment.durationMs,
      tokens: attachment.tokens
    };
  }
  return null;
}
var dCr = e => `A session-scoped Stop hook is now active with condition: "${e}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function G7e(e, t) {
  let n = [];
  for (let o of e.get(t, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let s of o.hooks) if (s.type === "prompt") n.push(s);
  }
  return n;
}
var message_3 = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  message_2 = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.",
  message = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).",
  dGi = "This message was relayed from Slack, Teams or a project thread and may be someone else's, so /goal didn't set, clear or show the goal. To use /goal, send it yourself from the terminal, the Claude app, claude.ai/code or your own Remote Control app.";
function p() {
  return er() ? $m() || qNt() || AEs() : Eee();
}
function fEs(prompt) {
  let t = {
    type: "prompt",
    prompt: prompt
  };
  return fGi(t, () => !p()), t;
}
function qFn() {
  if (p()) return {
    message: message,
    code: "hooks_gate"
  };
  if (Qb()) return UNt(), {
    message: message_2,
    code: "hooks_held"
  };
  if (!ye() && !Us()) return {
    message: message_3,
    code: "trust_gate"
  };
  return null;
}
function cGi(e, condition_3, origin) {
  e(o => ({
    ...o,
    queuedGoalOrigin: {
      condition: condition_3,
      origin: origin
    }
  }));
}
function k(e, t) {
  let queuedGoalOrigin = t.getAppState().queuedGoalOrigin;
  if (queuedGoalOrigin === void 0 || queuedGoalOrigin.condition !== e) return "user";
  return t.setAppState(o => ({
    ...o,
    queuedGoalOrigin: void 0
  })), queuedGoalOrigin.origin;
}
function HNt(condition_4, t, n) {
  let origin_2 = n ?? k(condition_4, t),
    s = qFn();
  if (s !== null) return c("goal_set", s.code, {
    origin: f(origin_2)
  }), s.message;
  let r = z(),
    activeGoal = t.getAppState().activeGoal;
  if (activeGoal !== void 0) Uue(activeGoal, "superseded");
  for (let i of G7e(t.sessionHooksRegistry, r)) t.sessionHooksRegistry.remove(r, "Stop", i);
  t.sessionHooksRegistry.add(r, "Stop", "", fEs(condition_4));
  let activeGoal_2 = {
    condition: condition_4,
    iterations: 0,
    setAt: Date.now(),
    origin: origin_2,
    tokensAtStart: ab()
  };
  return t.setAppState(i => ({
    ...i,
    activeGoal: activeGoal_2
  })), t.applyMessageOp({
    type: "append",
    messages: [Ngo(!1, condition_4)]
  }), l("tengu_stop_hook_added", {
    promptLength: condition_4.length,
    via: b("goal"),
    origin: f(origin_2)
  }), g("goal_set"), null;
}
function $Nt(e) {
  let t = z(),
    n = G7e(e.sessionHooksRegistry, t);
  if (n.length === 0) return null;
  let prompt_2 = n[0].prompt;
  for (let r of n) e.sessionHooksRegistry.remove(t, "Stop", r);
  let activeGoal_3 = e.getAppState().activeGoal;
  if (activeGoal_3 !== void 0) Uue(activeGoal_3, "user_clear");
  return e.setAppState(r => r.activeGoal === void 0 ? r : {
    ...r,
    activeGoal: void 0
  }), e.applyMessageOp({
    type: "append",
    messages: [Ngo(!0, prompt_2)]
  }), l("tengu_stop_hook_removed", {
    via: b("goal")
  }), prompt_2;
}
function Ngo(e, t) {
  return {
    type: "attachment",
    uuid: d(),
    timestamp: new Date().toISOString(),
    attachment: lCr(e, t)
  };
}
export { lCr, KFn, Uue, Qtn, FNt, uEs, dCr, G7e, dGi, fEs, qFn, cGi, HNt, $Nt, Ngo };