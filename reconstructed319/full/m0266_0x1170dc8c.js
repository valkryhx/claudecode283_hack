// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  ab,
  ye,
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Us
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  qNt,
  AEs,
  $m,
  Eee
} from "B:/~BUN/root/chunk-79dw4seg.js";
import {
  fGi
} from "B:/~BUN/root/chunk-9t9ygsbp.js";
import {
  Qb,
  UNt
} from "B:/~BUN/root/chunk-ynpwd78y.js";
import {
  randomUUID as d
} from "crypto";

function lCr(e, t) {
  return {
    type: "goal_status",
    met: e,
    sentinel: !0,
    condition: t
  }
}

function KFn(e) {
  if (!e) return null;
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    if (n.attachment.met || n.attachment.failed) return null;
    let o = n.attachment.condition;
    return typeof o === "string" && o.length > 0 ? o : null
  }
  return null
}

function Uue(e, t) {
  l("tengu_goal_cleared", {
    reason: f(t),
    iterations: e.iterations,
    durationMs: Date.now() - e.setAt,
    origin: de(e.origin)
  })
}
var Qtn = 4000,
  m = new Set(["clear", "stop", "off", "reset", "none", "cancel"]);

function FNt(e) {
  return m.has(e.toLowerCase())
}

function uEs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
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
var dCr = (e) => `A session-scoped Stop hook is now active with condition: "${e}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;

function G7e(e, t) {
  let n = [];
  for (let o of e.get(t, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let s of o.hooks)
      if (s.type === "prompt") n.push(s)
  }
  return n
}
var h = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.",
  S = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.",
  y = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).",
  dGi = "This message was relayed from Slack, Teams or a project thread and may be someone else's, so /goal didn't set, clear or show the goal. To use /goal, send it yourself from the terminal, the Claude app, claude.ai/code or your own Remote Control app.";

function p() {
  return er() ? $m() || qNt() || AEs() : Eee()
}

function fEs(e) {
  let t = {
    type: "prompt",
    prompt: e
  };
  return fGi(t, () => !p()), t
}

function qFn() {
  if (p()) return {
    message: y,
    code: "hooks_gate"
  };
  if (Qb()) return UNt(), {
    message: S,
    code: "hooks_held"
  };
  if (!ye() && !Us()) return {
    message: h,
    code: "trust_gate"
  };
  return null
}

function cGi(e, t, n) {
  e((o) => ({
    ...o,
    queuedGoalOrigin: {
      condition: t,
      origin: n
    }
  }))
}

function k(e, t) {
  let n = t.getAppState().queuedGoalOrigin;
  if (n === void 0 || n.condition !== e) return "user";
  return t.setAppState((o) => ({
    ...o,
    queuedGoalOrigin: void 0
  })), n.origin
}

function HNt(e, t, n) {
  let o = n ?? k(e, t),
    s = qFn();
  if (s !== null) return c("goal_set", s.code, {
    origin: f(o)
  }), s.message;
  let r = z(),
    a = t.getAppState().activeGoal;
  if (a !== void 0) Uue(a, "superseded");
  for (let i of G7e(t.sessionHooksRegistry, r)) t.sessionHooksRegistry.remove(r, "Stop", i);
  t.sessionHooksRegistry.add(r, "Stop", "", fEs(e));
  let u = {
    condition: e,
    iterations: 0,
    setAt: Date.now(),
    origin: o,
    tokensAtStart: ab()
  };
  return t.setAppState((i) => ({
    ...i,
    activeGoal: u
  })), t.applyMessageOp({
    type: "append",
    messages: [Ngo(!1, e)]
  }), l("tengu_stop_hook_added", {
    promptLength: e.length,
    via: b("goal"),
    origin: f(o)
  }), g("goal_set"), null
}

function $Nt(e) {
  let t = z(),
    n = G7e(e.sessionHooksRegistry, t);
  if (n.length === 0) return null;
  let o = n[0].prompt;
  for (let r of n) e.sessionHooksRegistry.remove(t, "Stop", r);
  let s = e.getAppState().activeGoal;
  if (s !== void 0) Uue(s, "user_clear");
  return e.setAppState((r) => r.activeGoal === void 0 ? r : {
    ...r,
    activeGoal: void 0
  }), e.applyMessageOp({
    type: "append",
    messages: [Ngo(!0, o)]
  }), l("tengu_stop_hook_removed", {
    via: b("goal")
  }), o
}

function Ngo(e, t) {
  return {
    type: "attachment",
    uuid: d(),
    timestamp: new Date().toISOString(),
    attachment: lCr(e, t)
  }
}
export {
  lCr,
  KFn,
  Uue,
  Qtn,
  FNt,
  uEs,
  dCr,
  G7e,
  dGi,
  fEs,
  qFn,
  cGi,
  HNt,
  $Nt,
  Ngo
};
