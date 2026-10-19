// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, Th, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { dm } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Ms } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { kae } from "B:/~BUN/root/chunk-0n2201tc.js";
import { AK, v_ } from "B:/~BUN/root/chunk-y424etr5.js";
import { randomUUID as S } from "crypto";
function WNt() {
  let t = !1;
  try {
    t = dm();
  } catch (error) {
    l(error);
  }
  if (!t) return !1;
  try {
    return AK();
  } catch (error) {
    return l(error), !0;
  }
}
function SO() {
  if (!WNt()) return !1;
  try {
    return v_() === "unanswered";
  } catch (error) {
    return l(error), !0;
  }
}
function zNt() {
  try {
    Ne().organizationAsk.hasHeld = !0;
  } catch (error) {
    l(error);
  }
}
function VVn(met, condition) {
  return {
    type: "goal_status",
    met: met,
    sentinel: !0,
    condition: condition
  };
}
function Msn(t) {
  if (!t) return null;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e];
    if (r?.type !== "attachment" || r.attachment.type !== "goal_status") continue;
    if (r.attachment.met || r.attachment.failed) return null;
    let condition_2 = r.attachment.condition;
    return typeof condition_2 === "string" && condition_2.length > 0 ? condition_2 : null;
  }
  return null;
}
function Qee(t, e) {
  i("tengu_goal_cleared", {
    reason: c(e),
    iterations: t.iterations,
    durationMs: Date.now() - t.setAt,
    origin: pe(t.origin)
  });
}
var GNt = 4000,
  y = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function nmt(t) {
  return y.has(t.toLowerCase());
}
function EAo(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e];
    if (r?.type !== "attachment" || r.attachment.type !== "goal_status") continue;
    let attachment = r.attachment;
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
var qVn = t => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function j1e(t, e) {
  let r = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let n of o.hooks) if (n.type === "prompt") r.push(n);
  }
  return r;
}
var message_3 = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  message_2 = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.",
  message = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function Dsn() {
  if (kae()) return {
    message: message,
    code: "hooks_gate"
  };
  if (SO()) return zNt(), {
    message: message_2,
    code: "hooks_held"
  };
  if (!we() && !Ms()) return {
    message: message_3,
    code: "trust_gate"
  };
  return null;
}
function SFs(t, condition_3, origin) {
  t(o => ({
    ...o,
    queuedGoalOrigin: {
      condition: condition_3,
      origin: origin
    }
  }));
}
function O(t, e) {
  let queuedGoalOrigin = e.getAppState().queuedGoalOrigin;
  if (queuedGoalOrigin === void 0 || queuedGoalOrigin.condition !== t) return "user";
  return e.setAppState(o => ({
    ...o,
    queuedGoalOrigin: void 0
  })), queuedGoalOrigin.origin;
}
function rmt(t, e, r) {
  let origin_2 = r ?? O(t, e),
    n = Dsn();
  if (n !== null) return p("goal_set", n.code, {
    origin: c(origin_2)
  }), n.message;
  let s = K(),
    activeGoal = e.getAppState().activeGoal;
  if (activeGoal !== void 0) Qee(activeGoal, "superseded");
  for (let a of j1e(e.sessionHooksRegistry, s)) e.sessionHooksRegistry.remove(s, "Stop", a);
  e.sessionHooksRegistry.add(s, "Stop", "", {
    type: "prompt",
    prompt: t
  });
  let activeGoal_2 = {
    condition: t,
    iterations: 0,
    setAt: Date.now(),
    origin: origin_2,
    tokensAtStart: Th()
  };
  return e.setAppState(a => ({
    ...a,
    activeGoal: activeGoal_2
  })), e.applyMessageOp({
    type: "append",
    messages: [COr(!1, t)]
  }), i("tengu_stop_hook_added", {
    promptLength: t.length,
    via: b("goal"),
    origin: c(origin_2)
  }), g("goal_set"), null;
}
function omt(t) {
  let e = K(),
    r = j1e(t.sessionHooksRegistry, e);
  if (r.length === 0) return null;
  let prompt = r[0].prompt;
  for (let s of r) t.sessionHooksRegistry.remove(e, "Stop", s);
  let activeGoal_3 = t.getAppState().activeGoal;
  if (activeGoal_3 !== void 0) Qee(activeGoal_3, "user_clear");
  return t.setAppState(s => s.activeGoal === void 0 ? s : {
    ...s,
    activeGoal: void 0
  }), t.applyMessageOp({
    type: "append",
    messages: [COr(!0, prompt)]
  }), i("tengu_stop_hook_removed", {
    via: b("goal")
  }), prompt;
}
function COr(t, e) {
  return {
    type: "attachment",
    uuid: S(),
    timestamp: new Date().toISOString(),
    attachment: VVn(t, e)
  };
}
export { WNt, SO, zNt, VVn, Msn, Qee, GNt, nmt, EAo, qVn, j1e, Dsn, SFs, rmt, omt, COr };