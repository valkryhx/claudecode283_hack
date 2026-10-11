// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { po } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function g(e) {
  return typeof e === "string" ? po(e, {
    maxCodeUnits: 512
  }) : void 0;
}
function f(e) {
  return po(e, {
    maxCodeUnits: 64
  });
}
var S = 32,
  R = 300000;
function Xgt(e, t) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return !1;
  let n = Date.parse(o);
  return !Number.isNaN(n) && t - n > R;
}
var b = ["provision", "clone", "setup_script", "start_cc"];
function W3r(e) {
  return b.includes(e);
}
var x = 60000,
  _ = 5000;
function y(e, t, o) {
  let n = e.data?.timestamp;
  if (typeof n !== "string") return !1;
  let p = Date.parse(n);
  return Number.isFinite(p) && Math.abs(t - p) <= x && p >= o - _;
}
function rue(startedAt) {
  return {
    steps: b.map(t => ({
      id: t,
      status: "pending"
    })),
    sessionMode: null,
    startedAt: startedAt,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    sawLiveFrame: !1,
    hadLiveCycle: !1,
    queuedCount: 0
  };
}
function TXe(e) {
  let t = e.data?.extra;
  return {
    stepId: typeof t?.step_id === "string" ? f(t.step_id) : null,
    stepStatus: typeof t?.step_status === "string" ? t.step_status : null
  };
}
function Rzt(e, t, o, now, p) {
  let extra = t.data?.extra,
    {
      stepId: stepId,
      stepStatus: stepStatus
    } = TXe(t),
    r = e.terminal && stepId !== null && stepStatus !== null ? {
      ...rue(now),
      dismissed: e.hadLiveCycle,
      hadLiveCycle: e.hadLiveCycle
    } : e;
  if (stepId !== null && stepStatus !== null && !r.sawLiveFrame && y(t, now, p)) r = {
    ...r,
    sawLiveFrame: !0
  };
  if (typeof extra?.session_mode === "string") {
    let s = extra.session_mode;
    if ((s === "new" || s === "resume" || s === "resume-cached" || s === "setup-only") && r.sessionMode !== s) r = {
      ...r,
      sessionMode: s
    };
  }
  if (typeof extra?.expected_steps === "string") {
    let s = L(extra.expected_steps.split(",").map(item => f(item)).filter(item => item !== "")).slice(0, S);
    if (s.length > 0) {
      let i = new Map(r.steps.map(item => [item.id, item])),
        l = s.map(u => i.get(u) ?? {
          id: u,
          status: "pending"
        }),
        m = r.steps.filter(item => !s.includes(item.id) && item.status !== "pending");
      r = {
        ...r,
        steps: [...m, ...l]
      };
    }
  }
  if (stepId !== null && stepStatus !== null) r = A(r, {
    stepId: stepId,
    stepStatus: stepStatus,
    extra: extra,
    line: o,
    now: now
  });else if (o !== "") {
    let s = r.steps.findIndex(item => item.status === "running");
    if (s !== -1 && r.steps[s].detail !== o) {
      let steps = r.steps.slice();
      steps[s] = {
        ...steps[s],
        detail: o
      }, r = {
        ...r,
        steps: steps
      };
    }
  }
  return r;
}
function A(e, {
  stepId: stepId_2,
  stepStatus: stepStatus_2,
  extra: extra_2,
  line: line,
  now: d
}) {
  let id = f(stepId_2),
    steps_2 = e.steps,
    r = steps_2.findIndex(item => item.id === id);
  if (r === -1) {
    if (steps_2.length >= S) return e;
    let label = g(extra_2?.step_label) || line;
    steps_2 = [...steps_2, {
      id: id,
      label: label,
      status: "pending"
    }], r = steps_2.length - 1;
  }
  let s = steps_2[r],
    detail = g(extra_2?.step_detail),
    l = null;
  switch (stepStatus_2) {
    case "started":
      if (s.status === "pending") l = {
        ...s,
        status: "running",
        startedAt: d,
        detail: detail
      };else if (detail !== void 0 && s.detail !== detail) l = {
        ...s,
        detail: detail
      };
      break;
    case "completed":
      if (s.status !== "completed") l = {
        ...s,
        status: "completed",
        completedAt: d,
        detail: void 0
      };
      break;
    case "failed":
      if (s.status !== "failed" || s.error !== line) l = {
        ...s,
        status: "failed",
        completedAt: d,
        error: line || void 0
      };
      break;
    case "skipped":
      if (s.status === "pending" || s.status === "running") l = {
        ...s,
        status: "skipped",
        detail: void 0
      };
      break;
    default:
      break;
  }
  if (l !== null) steps_2 = steps_2 === e.steps ? e.steps.slice() : steps_2, steps_2[r] = l;
  if (steps_2 === e.steps) return e;
  let m = {
    ...e,
    steps: steps_2,
    hasStructuredSteps: !0
  };
  if (id === "start_cc" && stepStatus_2 === "completed") m = mJn(m, d);
  return m;
}
function mJn(e, completedAt) {
  if (e.terminal) return e;
  let steps_3 = e.steps.map(item => item.status === "pending" ? {
    ...item,
    status: "skipped"
  } : item.status === "running" ? {
    ...item,
    status: "completed",
    completedAt: completedAt
  } : item);
  return {
    ...e,
    steps: steps_3,
    terminal: !0,
    completedAt: completedAt,
    hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
  };
}
function ibe(e, t) {
  let o = t === "resume" || t === "resume-cached",
    n = e.status === "completed";
  switch (e.id) {
    case "provision":
      if (o) return n ? "Resumed your cloud container" : "Resuming your cloud container";
      return n ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (o) return n ? "Refreshed repository" : "Refreshing repository";
      return n ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      return n ? "Ran setup script" : "Running setup script";
    case "start_cc":
      return n ? "Started Claude Code" : "Starting Claude Code";
    default:
      return e.label || e.id;
  }
}
function Jgt(e) {
  return e === "resume" || e === "resume-cached" ? "Resuming remote session" : "Setting up remote session";
}
function Azt(e) {
  let o = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready",
    n = (e.completedAt ?? e.startedAt) - e.startedAt;
  return `Remote session ${o} in ${M(n)}`;
}
function c1e(e, t) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${M(e.completedAt - e.startedAt)})`;
  let o = Math.max(0, t - e.startedAt);
  return e.status === "running" && o >= 5000 ? ` (${Math.round(o / 1000)}s)` : "";
}
function M(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1000).toFixed(1)}s`;
  let t = Math.round(e / 1000);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t / 60)}m ${t % 60}s`;
}
export { Xgt, W3r, rue, TXe, Rzt, mJn, ibe, Jgt, Azt, c1e };