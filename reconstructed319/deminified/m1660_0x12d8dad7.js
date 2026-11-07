// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Mw } from "B:/~BUN/root/chunk-bkfncj77.js";
import { bi, $Hr } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { Mi } from "B:/~BUN/root/chunk-game8aqv.js";
import { Fw, L } from "B:/~BUN/root/chunk-5ha2avah.js";
var y = {
  assistant: !0,
  user: !0,
  result: !0,
  system: !0,
  stream_event: !0,
  tool_progress: !0,
  tool_use_summary: !0,
  rate_limit_event: !0,
  prompt_suggestion: !0,
  conversation_reset: !0,
  command_lifecycle: !0,
  transcript_mirror: !1,
  auth_status: !1,
  active_goal: !1,
  autocompact_state: !1,
  keep_alive: !1,
  control_request: !1,
  control_response: !1,
  control_cancel_request: !1
};
function W0o(e) {
  return Object.hasOwn(y, e) ? y[e] : void 0;
}
function Brt(e) {
  return W0o(e) !== void 0;
}
var Dfn = 30000,
  Lfn = 120000;
function M(e) {
  return typeof e === "string" ? bi(e, {
    maxCodeUnits: 512
  }) : void 0;
}
function _(e) {
  return bi(e, {
    maxCodeUnits: 64
  });
}
var b = 32,
  z0o = "Starting Claude Code",
  B = 1000,
  w = 86400000,
  C = 5;
function S(e) {
  if (typeof e !== "string") return;
  let s = $Hr(e, C);
  return s.length === 0 ? void 0 : s;
}
function R(e) {
  if (typeof e === "number") return Number.isSafeInteger(e) ? e : void 0;
  return typeof e === "string" && /^-?\d{1,15}$/.test(e) ? Number(e) : void 0;
}
var E = 300000;
function Nfn(e, s) {
  let n = e.data?.timestamp;
  if (typeof n !== "string") return !1;
  let o = Date.parse(n);
  return !Number.isNaN(o) && s - o > E;
}
var h = ["provision", "clone", "setup_script", "start_cc"];
function r6s(e) {
  return h.includes(e);
}
var T = 60000,
  F = 5000;
function I(e, s, n) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return !1;
  let r = Date.parse(o);
  return Number.isFinite(r) && Math.abs(s - r) <= T && r >= n - F;
}
function V$e(startedAt, {
  wake: wake
}) {
  return {
    steps: h.map(n => ({
      id: n,
      status: "pending"
    })),
    sessionMode: null,
    setupSource: null,
    wake: wake,
    startedAt: startedAt,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    sawLiveFrame: !1,
    hadLiveCycle: !1,
    queuedCount: 0
  };
}
function H4e(e) {
  let s = e.data?.extra;
  return {
    stepId: typeof s?.step_id === "string" ? _(s.step_id) : null,
    stepStatus: typeof s?.step_status === "string" ? s.step_status : null
  };
}
function o6s(e, s) {
  if (e === null || !e.hasStructuredSteps || e.terminal) return null;
  return x(s);
}
function x(e) {
  switch (e.type) {
    case "system":
      return e.subtype === "init_milestone" || e.subtype === "informational" ? "notice" : null;
    case "assistant":
      return e.isApiErrorMessage === !0 && D(e.message) && e.message.model === Mi ? "notice" : null;
    case "result":
      return D(e.runner_exit) && "phase" in e.runner_exit ? "failed" : null;
    default:
      return null;
  }
}
function s6s(e) {
  return Brt(e.type) && x(e) === null;
}
function i6s(e, completedAt) {
  let o = e.steps.findLast(r => r.status === "running") ?? e.steps.find(item => item.status === "pending");
  if (o === void 0 || e.steps.some(item => item.status === "failed")) return e;
  return {
    ...e,
    steps: e.steps.map(item => item === o ? {
      ...item,
      status: "failed",
      completedAt: completedAt,
      detail: void 0
    } : item)
  };
}
function FYn(e, s, n, now, r) {
  let extra = s.data?.extra,
    {
      stepId: stepId,
      stepStatus: stepStatus
    } = H4e(s),
    t = (e.terminal || stepId === "provision" && stepStatus !== "failed" && e.steps.some(item => item.status === "failed")) && stepId !== null && stepStatus !== null ? {
      ...V$e(now, {
        wake: !0
      }),
      dismissed: e.hadLiveCycle,
      hadLiveCycle: e.hadLiveCycle
    } : e;
  if (stepId !== null && stepStatus !== null && !t.sawLiveFrame && I(s, now, r)) t = {
    ...t,
    sawLiveFrame: !0
  };
  if (typeof extra?.session_mode === "string") {
    let i = extra.session_mode;
    if ((i === "new" || i === "resume" || i === "resume-cached" || i === "setup-only") && t.sessionMode !== i) t = {
      ...t,
      sessionMode: i
    };
  }
  let setupSource = extra?.setup_source;
  if ((setupSource === "checkpoint" || setupSource === "building_checkpoint" || setupSource === "checkpoint_restore_failed") && t.setupSource !== setupSource) t = {
    ...t,
    setupSource: setupSource
  };
  let setupScriptDurationMs = R(extra?.setup_script_duration_ms);
  if (setupScriptDurationMs !== void 0 && setupScriptDurationMs >= B && setupScriptDurationMs <= w && t.setupScriptDurationMs !== setupScriptDurationMs && !t.steps.some(item => item.id === "setup_script" && item.status === "completed")) t = {
    ...t,
    setupScriptDurationMs: setupScriptDurationMs
  };
  if (typeof extra?.expected_steps === "string") {
    let i = L(extra.expected_steps.split(",").map(item => _(item)).filter(item => item !== "")).slice(0, b);
    if (i.length > 0) {
      let u = new Map(t.steps.map(item => [item.id, item])),
        g = i.map(m => u.get(m) ?? {
          id: m,
          status: "pending"
        }),
        A = t.steps.filter(item => !i.includes(item.id) && item.status !== "pending");
      t = {
        ...t,
        steps: [...A, ...g]
      };
    }
  }
  if (stepId !== null && stepStatus !== null) t = P(t, {
    stepId: stepId,
    stepStatus: stepStatus,
    extra: extra,
    line: n,
    now: now
  });else if (n !== "") {
    let i = t.steps.findIndex(item => item.status === "running");
    if (i !== -1 && t.steps[i].detail !== n) {
      let steps = t.steps.slice();
      steps[i] = {
        ...steps[i],
        detail: n
      }, t = {
        ...t,
        steps: steps
      };
    }
  }
  return t;
}
function P(e, {
  stepId: stepId_2,
  stepStatus: stepStatus_2,
  extra: extra_2,
  line: line,
  now: d
}) {
  let id = _(stepId_2),
    steps_2 = e.steps,
    f = steps_2.findIndex(item => item.id === id);
  if (f === -1) {
    if (steps_2.length >= b) return e;
    let label = M(extra_2?.step_label) || line;
    steps_2 = [...steps_2, {
      id: id,
      label: label,
      status: "pending"
    }], f = steps_2.length - 1;
  }
  let t = steps_2[f],
    detail = typeof extra_2?.progress_label === "string" && line !== "" ? line : M(extra_2?.step_detail),
    p = null;
  switch (stepStatus_2) {
    case "started":
      if (t.status === "pending") p = {
        ...t,
        status: "running",
        startedAt: d,
        detail: detail,
        output: S(extra_2?.output)
      };else {
        let detail_2 = detail ?? t.detail,
          output = (t.status === "running" ? S(extra_2?.output) : void 0) ?? t.output;
        if (detail_2 !== t.detail || !Fw(output, t.output)) p = {
          ...t,
          detail: detail_2,
          output: output
        };
      }
      break;
    case "completed":
      if (id === "clone" && (detail || typeof extra_2?.clone_phase === "string")) break;
      if (t.status !== "completed") p = {
        ...t,
        status: "completed",
        completedAt: d,
        completedMode: $4e(e),
        detail: void 0,
        output: void 0
      };
      break;
    case "failed":
      {
        let u = {
          ...t,
          status: "failed",
          completedAt: t.status === "failed" ? t.completedAt : d,
          error: line || void 0,
          output: S(extra_2?.output) ?? t.output,
          exitCode: R(extra_2?.exit_code) ?? t.exitCode
        };
        if (t.status !== "failed" || t.error !== u.error || t.exitCode !== u.exitCode || !Fw(t.output, u.output)) p = u;
        break;
      }
    case "skipped":
      if (t.status === "pending" || t.status === "running") p = {
        ...t,
        status: "skipped",
        detail: void 0
      };
      break;
    default:
      break;
  }
  if (p !== null) steps_2 = steps_2 === e.steps ? e.steps.slice() : steps_2, steps_2[f] = p;
  if (steps_2 === e.steps) return e;
  let i = {
    ...e,
    steps: steps_2,
    hasStructuredSteps: !0
  };
  if (id === "start_cc" && stepStatus_2 === "completed") i = G0o(i, d);
  return i;
}
function G0o(e, completedAt_2) {
  if (e.terminal) return e;
  let completedMode = $4e(e),
    steps_3 = e.steps.map(item => item.status === "pending" ? {
      ...item,
      status: "skipped"
    } : item.status === "running" ? {
      ...item,
      status: "completed",
      completedAt: completedAt_2,
      completedMode: completedMode
    } : item);
  return {
    ...e,
    steps: steps_3,
    terminal: !0,
    completedAt: completedAt_2,
    hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
  };
}
function $4e(e) {
  switch (e.sessionMode) {
    case "resume":
      return "resume";
    case "resume-cached":
      switch (e.setupSource) {
        case "checkpoint":
          return "restored";
        case "checkpoint_restore_failed":
        case "building_checkpoint":
          return "new";
        case null:
          break;
      }
      return e.wake ? "resume" : "new";
    case "new":
    case "setup-only":
    case null:
      return "new";
  }
}
function K$e(e, s) {
  let n = e.status === "completed",
    o = (n ? e.completedMode : void 0) ?? s;
  switch (e.id) {
    case "provision":
      if (o === "resume") return n ? "Resumed your cloud container" : "Resuming your cloud container";
      return n ? "Set up a cloud container" : "Setting up a cloud container";
    case "clone":
      if (o !== "new") return n ? "Refreshed repository" : "Refreshing repository";
      return n ? "Cloned repository" : "Cloning repository";
    case "setup_script":
      if (e.status === "failed") return "Setup script failed";
      if (n) return o === "restored" ? "Restored from snapshot" : "Ran setup script";
      return "Running setup script";
    case "start_cc":
      return n ? "Started Claude Code" : z0o;
    default:
      return e.label || e.id;
  }
}
function pzt(e, s = !1) {
  if (s) return e === "resume" ? "Cloud session didn't resume" : "Cloud session didn't start";
  switch (e) {
    case "new":
      return "Setting up remote session";
    case "resume":
      return "Resuming remote session";
    case "restored":
      return "Restored from snapshot of setup script";
  }
}
function V0o(e, s, n) {
  if (s.status === "completed") return (s.completedMode ?? n) === "restored" && e.setupScriptDurationMs !== void 0 ? ` \xB7 saved about ${Mw(e.setupScriptDurationMs)}` : "";
  if (s.status !== "pending" && s.status !== "running") return "";
  switch (e.setupSource) {
    case "building_checkpoint":
      return " \xB7 saving so your next session skips this";
    case "checkpoint_restore_failed":
      return " \xB7 couldn't use snapshot";
    case "checkpoint":
    case null:
      return "";
  }
}
function a6s(e) {
  let s = e.terminal ? null : e.sessionMode,
    n = $4e({
      sessionMode: s ?? (e.hadLiveCycle ? "resume" : null),
      setupSource: e.setupSource,
      wake: e.wake
    }),
    o = e.steps.findLast(r => r.status === "running");
  return o && K$e(o, n) || pzt(n);
}
function HYn(e) {
  let s = $4e(e),
    n = (e.completedAt ?? e.startedAt) - e.startedAt,
    o = k(n);
  switch (s) {
    case "new":
      return `Remote session ready in ${o}`;
    case "resume":
      return `Remote session resumed in ${o}`;
    case "restored":
      return `Remote session ready in ${o} \xB7 restored from snapshot`;
  }
}
function Pkt(e, s) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${k(e.completedAt - e.startedAt)})`;
  let n = Math.max(0, s - e.startedAt);
  return e.status === "running" && n >= 5000 ? ` (${Math.round(n / 1000)}s)` : "";
}
function k(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1000).toFixed(1)}s`;
  let s = Math.round(e / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}
export { W0o, Brt, Dfn, Lfn, z0o, Nfn, r6s, V$e, H4e, o6s, s6s, i6s, FYn, G0o, $4e, K$e, pzt, V0o, a6s, HYn, Pkt };