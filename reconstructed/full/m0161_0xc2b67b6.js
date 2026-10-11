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
  Lp,
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  ps
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  khe
} from "B:/~BUN/root/chunk-mrt797ke.js";

function Jln(t, e) {
  return {
    type: "goal_status",
    met: t,
    sentinel: !0,
    condition: e
  }
}

function yLt(t) {
  if (!t) return null;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    if (n.attachment.met || n.attachment.failed) return null;
    let o = n.attachment.condition;
    return typeof o === "string" && o.length > 0 ? o : null
  }
  return null
}

function f6(t, e) {
  i("tengu_goal_cleared", {
    reason: c(e),
    iterations: t.iterations,
    durationMs: Date.now() - t.setAt,
    origin: ue(t.origin)
  })
}
import {
  randomUUID as g
} from "crypto";
var Act = 4000,
  d = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);

function h6e(t) {
  return d.has(t.toLowerCase())
}

function W0r(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    let o = n.attachment;
    if (!o.met || o.sentinel) continue;
    return {
      condition: o.condition,
      iterations: o.iterations,
      durationMs: o.durationMs,
      tokens: o.tokens
    }
  }
  return null
}
var Qln = (t) => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;

function mCe(t, e) {
  let n = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let s of o.hooks)
      if (s.type === "prompt") n.push(s)
  }
  return n
}
var m = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  f = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";

function _Lt() {
  if (khe()) return {
    message: f,
    code: "hooks_gate"
  };
  if (!Te() && !ps()) return {
    message: m,
    code: "trust_gate"
  };
  return null
}

function qxo(t, e, n) {
  t((o) => ({
    ...o,
    queuedGoalOrigin: {
      condition: e,
      origin: n
    }
  }))
}

function S(t, e) {
  let n = e.getAppState().queuedGoalOrigin;
  if (n === void 0 || n.condition !== t) return "user";
  return e.setAppState((o) => ({
    ...o,
    queuedGoalOrigin: void 0
  })), n.origin
}

function y6e(t, e, n) {
  let o = n ?? S(t, e),
    s = _Lt();
  if (s !== null) return p("goal_set", s.code, {
    origin: c(o)
  }), s.message;
  let r = Y(),
    l = e.getAppState().activeGoal;
  if (l !== void 0) f6(l, "superseded");
  for (let a of mCe(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", a);
  e.sessionHooksRegistry.add(r, "Stop", "", {
    type: "prompt",
    prompt: t
  });
  let u = {
    condition: t,
    iterations: 0,
    setAt: Date.now(),
    origin: o,
    tokensAtStart: Lp()
  };
  return e.setAppState((a) => ({
    ...a,
    activeGoal: u
  })), e.applyMessageOp({
    type: "append",
    messages: [B2n(!1, t)]
  }), i("tengu_stop_hook_added", {
    promptLength: t.length,
    via: y("goal"),
    origin: c(o)
  }), _("goal_set"), null
}

function _6e(t) {
  let e = Y(),
    n = mCe(t.sessionHooksRegistry, e);
  if (n.length === 0) return null;
  let o = n[0].prompt;
  for (let r of n) t.sessionHooksRegistry.remove(e, "Stop", r);
  let s = t.getAppState().activeGoal;
  if (s !== void 0) f6(s, "user_clear");
  return t.setAppState((r) => r.activeGoal === void 0 ? r : {
    ...r,
    activeGoal: void 0
  }), t.applyMessageOp({
    type: "append",
    messages: [B2n(!0, o)]
  }), i("tengu_stop_hook_removed", {
    via: y("goal")
  }), o
}

function B2n(t, e) {
  return {
    type: "attachment",
    uuid: g(),
    timestamp: new Date().toISOString(),
    attachment: Jln(t, e)
  }
}
export {
  Jln,
  yLt,
  f6,
  Act,
  h6e,
  W0r,
  Qln,
  mCe,
  _Lt,
  qxo,
  y6e,
  _6e,
  B2n
};
