// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ti } from "B:/~BUN/root/chunk-6za2ez23.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { L, ui } from "B:/~BUN/root/chunk-rpez7z7a.js";
function S(e) {
  return typeof e === "string" ? ti(e, {
    maxCodeUnits: 512
  }) : void 0;
}
function g(e) {
  return ti(e, {
    maxCodeUnits: 64
  });
}
var b = 32,
  _ = 300000;
function gzt(e, t) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return !1;
  let s = Date.parse(o);
  return !Number.isNaN(s) && t - s > _;
}
var y = ["provision", "clone", "setup_script", "start_cc"];
function W4o(e) {
  return y.includes(e);
}
var M = 60000,
  x = 5000;
function h(e, t, o) {
  let s = e.data?.timestamp;
  if (typeof s !== "string") return !1;
  let a = Date.parse(s);
  return Number.isFinite(a) && Math.abs(t - a) <= M && a >= o - x;
}
function fCe(startedAt) {
  return {
    steps: y.map(t => ({
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
function cwt(e) {
  let t = e.data?.extra;
  return {
    stepId: typeof t?.step_id === "string" ? g(t.step_id) : null,
    stepStatus: typeof t?.step_status === "string" ? t.step_status : null
  };
}
function z4o(e, t) {
  if (e === null || !e.hasStructuredSteps || e.terminal) return null;
  switch (t.type) {
    case "system":
      return t.subtype === "init_milestone" || t.subtype === "informational" ? "notice" : null;
    case "assistant":
      return t.isApiErrorMessage === !0 && N(t.message) && t.message.model === ui ? "notice" : null;
    case "result":
      return N(t.runner_exit) && "phase" in t.runner_exit ? "failed" : null;
    default:
      return null;
  }
}
function G4o(e, completedAt) {
  let s = e.steps.findLast(a => a.status === "running") ?? e.steps.find(item => item.status === "pending");
  if (s === void 0 || e.steps.some(item => item.status === "failed")) return e;
  return {
    ...e,
    steps: e.steps.map(item => item === s ? {
      ...item,
      status: "failed",
      completedAt: completedAt,
      detail: void 0
    } : item)
  };
}
function P_n(e, t, o, now, a) {
  let extra = t.data?.extra,
    {
      stepId: stepId,
      stepStatus: stepStatus
    } = cwt(t),
    n = (e.terminal || stepId === "provision" && stepStatus !== "failed" && e.steps.some(item => item.status === "failed")) && stepId !== null && stepStatus !== null ? {
      ...fCe(now),
      dismissed: e.hadLiveCycle,
      hadLiveCycle: e.hadLiveCycle
    } : e;
  if (stepId !== null && stepStatus !== null && !n.sawLiveFrame && h(t, now, a)) n = {
    ...n,
    sawLiveFrame: !0
  };
  if (typeof extra?.session_mode === "string") {
    let r = extra.session_mode;
    if ((r === "new" || r === "resume" || r === "resume-cached" || r === "setup-only") && n.sessionMode !== r) n = {
      ...n,
      sessionMode: r
    };
  }
  if (typeof extra?.expected_steps === "string") {
    let r = L(extra.expected_steps.split(",").map(item => g(item)).filter(item => item !== "")).slice(0, b);
    if (r.length > 0) {
      let i = new Map(n.steps.map(item => [item.id, item])),
        m = r.map(l => i.get(l) ?? {
          id: l,
          status: "pending"
        }),
        f = n.steps.filter(item => !r.includes(item.id) && item.status !== "pending");
      n = {
        ...n,
        steps: [...f, ...m]
      };
    }
  }
  if (stepId !== null && stepStatus !== null) n = A(n, {
    stepId: stepId,
    stepStatus: stepStatus,
    extra: extra,
    line: o,
    now: now
  });else if (o !== "") {
    let r = n.steps.findIndex(item => item.status === "running");
    if (r !== -1 && n.steps[r].detail !== o) {
      let steps = n.steps.slice();
      steps[r] = {
        ...steps[r],
        detail: o
      }, n = {
        ...n,
        steps: steps
      };
    }
  }
  return n;
}
function A(e, {
  stepId: stepId_2,
  stepStatus: stepStatus_2,
  extra: extra_2,
  line: line,
  now: d
}) {
  let id = g(stepId_2),
    steps_2 = e.steps,
    c = steps_2.findIndex(item => item.id === id);
  if (c === -1) {
    if (steps_2.length >= b) return e;
    let label = S(extra_2?.step_label) || line;
    steps_2 = [...steps_2, {
      id: id,
      label: label,
      status: "pending"
    }], c = steps_2.length - 1;
  }
  let n = steps_2[c],
    detail = typeof extra_2?.progress_label === "string" && line !== "" ? line : S(extra_2?.step_detail),
    i = null;
  switch (stepStatus_2) {
    case "started":
      if (n.status === "pending") i = {
        ...n,
        status: "running",
        startedAt: d,
        detail: detail
      };else if (detail !== void 0 && n.detail !== detail) i = {
        ...n,
        detail: detail
      };
      break;
    case "completed":
      if (id === "clone" && (detail || typeof extra_2?.clone_phase === "string")) break;
      if (n.status !== "completed") i = {
        ...n,
        status: "completed",
        completedAt: d,
        detail: void 0
      };
      break;
    case "failed":
      if (n.status !== "failed" || n.error !== line) i = {
        ...n,
        status: "failed",
        completedAt: d,
        error: line || void 0
      };
      break;
    case "skipped":
      if (n.status === "pending" || n.status === "running") i = {
        ...n,
        status: "skipped",
        detail: void 0
      };
      break;
    default:
      break;
  }
  if (i !== null) steps_2 = steps_2 === e.steps ? e.steps.slice() : steps_2, steps_2[c] = i;
  if (steps_2 === e.steps) return e;
  let m = {
    ...e,
    steps: steps_2,
    hasStructuredSteps: !0
  };
  if (id === "start_cc" && stepStatus_2 === "completed") m = MGr(m, d);
  return m;
}
function MGr(e, completedAt_2) {
  if (e.terminal) return e;
  let steps_3 = e.steps.map(item => item.status === "pending" ? {
    ...item,
    status: "skipped"
  } : item.status === "running" ? {
    ...item,
    status: "completed",
    completedAt: completedAt_2
  } : item);
  return {
    ...e,
    steps: steps_3,
    terminal: !0,
    completedAt: completedAt_2,
    hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
  };
}
function ZDe(e, t) {
  let o = t === "resume" || t === "resume-cached",
    s = e.status === "completed";
  switch (e.id) {
    case "provision":
      if (o) return s ? "Resumed your cloud container" : "Resuming your cloud container";
      return s ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (o) return s ? "Refreshed repository" : "Refreshing repository";
      return s ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      return s ? "Ran setup script" : "Running setup script";
    case "start_cc":
      return s ? "Started Claude Code" : "Starting Claude Code";
    default:
      return e.label || e.id;
  }
}
function hzt(e, t = !1) {
  let o = e === "resume" || e === "resume-cached";
  if (t) return o ? "Cloud session didn't resume" : "Cloud session didn't start";
  return o ? "Resuming remote session" : "Setting up remote session";
}
function O_n(e) {
  let o = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready",
    s = (e.completedAt ?? e.startedAt) - e.startedAt;
  return `Remote session ${o} in ${R(s)}`;
}
function Yet(e, t) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${R(e.completedAt - e.startedAt)})`;
  let o = Math.max(0, t - e.startedAt);
  return e.status === "running" && o >= 5000 ? ` (${Math.round(o / 1000)}s)` : "";
}
function R(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1000).toFixed(1)}s`;
  let t = Math.round(e / 1000);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t / 60)}m ${t % 60}s`;
}
export { gzt, W4o, fCe, cwt, z4o, G4o, P_n, MGr, ZDe, hzt, O_n, Yet };