// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ti
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  L,
  ui
} from "B:/~BUN/root/chunk-rpez7z7a.js";

function S(e) {
  return typeof e === "string" ? ti(e, {
    maxCodeUnits: 512
  }) : void 0
}

function g(e) {
  return ti(e, {
    maxCodeUnits: 64
  })
}
var b = 32,
  _ = 300000;

function gzt(e, t) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return !1;
  let s = Date.parse(o);
  return !Number.isNaN(s) && t - s > _
}
var y = ["provision", "clone", "setup_script", "start_cc"];

function W4o(e) {
  return y.includes(e)
}
var M = 60000,
  x = 5000;

function h(e, t, o) {
  let s = e.data?.timestamp;
  if (typeof s !== "string") return !1;
  let a = Date.parse(s);
  return Number.isFinite(a) && Math.abs(t - a) <= M && a >= o - x
}

function fCe(e) {
  return {
    steps: y.map((t) => ({
      id: t,
      status: "pending"
    })),
    sessionMode: null,
    startedAt: e,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    sawLiveFrame: !1,
    hadLiveCycle: !1,
    queuedCount: 0
  }
}

function cwt(e) {
  let t = e.data?.extra;
  return {
    stepId: typeof t?.step_id === "string" ? g(t.step_id) : null,
    stepStatus: typeof t?.step_status === "string" ? t.step_status : null
  }
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
      return null
  }
}

function G4o(e, t) {
  let s = e.steps.findLast((a) => a.status === "running") ?? e.steps.find((a) => a.status === "pending");
  if (s === void 0 || e.steps.some((a) => a.status === "failed")) return e;
  return {
    ...e,
    steps: e.steps.map((a) => a === s ? {
      ...a,
      status: "failed",
      completedAt: t,
      detail: void 0
    } : a)
  }
}

function P_n(e, t, o, s, a) {
  let d = t.data?.extra,
    {
      stepId: p,
      stepStatus: u
    } = cwt(t),
    n = (e.terminal || p === "provision" && u !== "failed" && e.steps.some((r) => r.status === "failed")) && p !== null && u !== null ? {
      ...fCe(s),
      dismissed: e.hadLiveCycle,
      hadLiveCycle: e.hadLiveCycle
    } : e;
  if (p !== null && u !== null && !n.sawLiveFrame && h(t, s, a)) n = {
    ...n,
    sawLiveFrame: !0
  };
  if (typeof d?.session_mode === "string") {
    let r = d.session_mode;
    if ((r === "new" || r === "resume" || r === "resume-cached" || r === "setup-only") && n.sessionMode !== r) n = {
      ...n,
      sessionMode: r
    }
  }
  if (typeof d?.expected_steps === "string") {
    let r = L(d.expected_steps.split(",").map((i) => g(i)).filter((i) => i !== "")).slice(0, b);
    if (r.length > 0) {
      let i = new Map(n.steps.map((l) => [l.id, l])),
        m = r.map((l) => i.get(l) ?? {
          id: l,
          status: "pending"
        }),
        f = n.steps.filter((l) => !r.includes(l.id) && l.status !== "pending");
      n = {
        ...n,
        steps: [...f, ...m]
      }
    }
  }
  if (p !== null && u !== null) n = A(n, {
    stepId: p,
    stepStatus: u,
    extra: d,
    line: o,
    now: s
  });
  else if (o !== "") {
    let r = n.steps.findIndex((i) => i.status === "running");
    if (r !== -1 && n.steps[r].detail !== o) {
      let i = n.steps.slice();
      i[r] = {
        ...i[r],
        detail: o
      }, n = {
        ...n,
        steps: i
      }
    }
  }
  return n
}

function A(e, {
  stepId: t,
  stepStatus: o,
  extra: s,
  line: a,
  now: d
}) {
  let p = g(t),
    u = e.steps,
    c = u.findIndex((f) => f.id === p);
  if (c === -1) {
    if (u.length >= b) return e;
    let f = S(s?.step_label) || a;
    u = [...u, {
      id: p,
      label: f,
      status: "pending"
    }], c = u.length - 1
  }
  let n = u[c],
    r = typeof s?.progress_label === "string" && a !== "" ? a : S(s?.step_detail),
    i = null;
  switch (o) {
    case "started":
      if (n.status === "pending") i = {
        ...n,
        status: "running",
        startedAt: d,
        detail: r
      };
      else if (r !== void 0 && n.detail !== r) i = {
        ...n,
        detail: r
      };
      break;
    case "completed":
      if (p === "clone" && (r || typeof s?.clone_phase === "string")) break;
      if (n.status !== "completed") i = {
        ...n,
        status: "completed",
        completedAt: d,
        detail: void 0
      };
      break;
    case "failed":
      if (n.status !== "failed" || n.error !== a) i = {
        ...n,
        status: "failed",
        completedAt: d,
        error: a || void 0
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
      break
  }
  if (i !== null) u = u === e.steps ? e.steps.slice() : u, u[c] = i;
  if (u === e.steps) return e;
  let m = {
    ...e,
    steps: u,
    hasStructuredSteps: !0
  };
  if (p === "start_cc" && o === "completed") m = MGr(m, d);
  return m
}

function MGr(e, t) {
  if (e.terminal) return e;
  let o = e.steps.map((s) => s.status === "pending" ? {
    ...s,
    status: "skipped"
  } : s.status === "running" ? {
    ...s,
    status: "completed",
    completedAt: t
  } : s);
  return {
    ...e,
    steps: o,
    terminal: !0,
    completedAt: t,
    hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
  }
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
      return e.label || e.id
  }
}

function hzt(e, t = !1) {
  let o = e === "resume" || e === "resume-cached";
  if (t) return o ? "Cloud session didn't resume" : "Cloud session didn't start";
  return o ? "Resuming remote session" : "Setting up remote session"
}

function O_n(e) {
  let o = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready",
    s = (e.completedAt ?? e.startedAt) - e.startedAt;
  return `Remote session ${o} in ${R(s)}`
}

function Yet(e, t) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${R(e.completedAt-e.startedAt)})`;
  let o = Math.max(0, t - e.startedAt);
  return e.status === "running" && o >= 5000 ? ` (${Math.round(o/1000)}s)` : ""
}

function R(e) {
  if (e < 1e4) return `${(Math.max(e,100)/1000).toFixed(1)}s`;
  let t = Math.round(e / 1000);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t/60)}m ${t%60}s`
}
export {
  gzt,
  W4o,
  fCe,
  cwt,
  z4o,
  G4o,
  P_n,
  MGr,
  ZDe,
  hzt,
  O_n,
  Yet
};
