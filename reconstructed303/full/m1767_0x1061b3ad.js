// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c,
  pe
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  Wu
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Wl
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  $h,
  ir
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  _g
} from "B:/~BUN/root/chunk-8z3a373v.js";
import {
  Ho
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  D0
} from "B:/~BUN/root/chunk-62ynkm2y.js";
import {
  ej,
  Ly
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  IY
} from "B:/~BUN/root/chunk-aatsy169.js";
import {
  rv
} from "B:/~BUN/root/chunk-hdc8p5sh.js";
import {
  Fu
} from "B:/~BUN/root/chunk-97bdq2mm.js";
var R = "tengu_tranquil_fern";

function f() {
  return ir(R, !0)
}

function g3r() {
  return {
    source: "none",
    trustedMode: void 0,
    recordedMode: "absent"
  }
}

function uQo(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === !0) && e.trustedMode !== "plan" ? "declined" : "none"
}

function g(e) {
  if (e === void 0 || e === null) return "absent";
  return typeof e === "string" && _g(e) || "invalid"
}

function P(e) {
  return {
    ...D0(e.mode, "plan", e),
    mode: "plan"
  }
}

function S(e) {
  return {
    ...e,
    toolPermissionContext: P(e.toolPermissionContext)
  }
}

function _(e) {
  return f() && e.mode !== "plan" && IY.isEnabled() && !Ho(e, IY)
}

function H5s(e, n, {
  forkSession: o,
  transcript: s
} = {}) {
  if (n.recordedMode = g(e?.worker_permission_mode), n.recordedMode === "invalid") t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", {
    level: "warn"
  });
  if (n.recordedMode === "plan" && s && f()) n.recordTranscriptState = qor(s);
  return (r) => {
    if (n.trustedMode ??= r.toolPermissionContext.mode, n.recordedMode !== "plan" || o || !_(r.toolPermissionContext)) return r;
    return n.source = "internal", t(`[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`), S(r)
  }
}

function h3r(e, n, {
  planModeOnResume: o,
  restored: s,
  restartedWorker: r
}) {
  let a = Boolean(s?.external || s?.internal);
  if (r && !a) return;
  if (e.enableWorkerPermissionModeRecord(), o !== void 0 && a) e.notifyInternalMetadataChanged({
    worker_permission_mode: Wl(n)
  })
}

function pQo(e, n, o, s) {
  let r = s && n.source === "none" && (n.recordedMode === "absent" || n.recordedMode === "invalid") && f() && qor(e) === "open";
  if (r) n.transcriptOpen = !0;
  o((a) => {
    if (n.trustedMode ??= a.toolPermissionContext.mode, !r || a.toolPermissionContext.mode === "plan" || Ho(a.toolPermissionContext, IY)) return a;
    return n.source = "transcript", t(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${a.toolPermissionContext.mode})`), S(a)
  })
}

function qor(e) {
  let n = `<${Wu}>/plan</${Wu}>`,
    o = new Set,
    s = new Set,
    r = x(e),
    a = !1,
    d = () => a ? "none" : "open";
  for (let M = e.length - 1; M >= 0; M--) {
    let l = e[M];
    if (l.type === "attachment") {
      let m = l.attachment.type;
      if (m === "plan_mode" || m === "plan_mode_reentry") return d();
      if (m === "plan_mode_exit") return "exited"
    } else if (l.type === "assistant" && Array.isArray(l.message.content)) {
      let m = l.message.content;
      for (let p = m.length - 1; p >= 0; p--) {
        let u = m[p];
        if (u.type !== "tool_use") continue;
        if (u.name === Fu && s.has(u.id) && !o.has(u.id) && !r.has(u.id)) return "exited";
        if (u.name === rv && s.has(u.id) && (!o.has(u.id) || r.has(u.id))) return d()
      }
    } else if (l.type === "user" && ej(l)) {
      let m = l.message.content;
      if (Array.isArray(m)) {
        for (let p of m)
          if (p.type === "tool_result")(p.is_error || y(l, p.content) ? o : s).add(p.tool_use_id)
      }
    } else if (l.type === "user") {
      if (Ly(l)?.trimStart().startsWith(n)) return d();
      if (l.permissionMode === "plan") return d();
      if (l.permissionMode !== void 0 && !l.isMeta && $h(l.origin)) a = !0
    }
  }
  return "none"
}

function x(e) {
  let n = new Set,
    o = new Set;
  for (let s of e) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let r of s.message.content) {
      if (r.type !== "tool_use") continue;
      if (n.has(r.id)) o.add(r.id);
      else n.add(r.id)
    }
  }
  return o
}

function y(e, n) {
  let o = e.toolUseResult;
  if (o !== null && typeof o === "object" && o.awaitingLeaderApproval === !0) return !0;
  return typeof n === "string" && n.startsWith("Your plan has been submitted to the team lead")
}

function Kor({
  sdkUrl: e,
  permissionModeSuppliedOnInvocation: n,
  forkSession: o
}) {
  if (!IY.isEnabled() || o) return !1;
  return !!e || n === !1
}

function y3r(e, n, o) {
  let s = g3r();
  return pQo(e, s, o, Kor(n)), _3r(s, {
    lane: n.sdkUrl ? "sdk_url" : "print",
    hadExternal: !1,
    hadInternal: !1
  }), uQo(s)
}

function Yor(e, n, {
  lane: o,
  forkSession: s,
  transcript: r
}) {
  let a = g3r();
  if (n(H5s(e?.internal, a, {
      forkSession: s,
      transcript: r?.messages
    })), r) pQo(r.sourceRows, a, n, r.sourceAllowed);
  return _3r(a, {
    lane: o,
    hadExternal: !!e?.external,
    hadInternal: !!e?.internal
  }), uQo(a)
}

function xti(e, {
  storedPermissionMode: n,
  messages: o,
  forkSession: s,
  startupModePinned: r,
  lane: a
}) {
  let d = g3r();
  if (d.trustedMode = e.mode, d.recordedMode = g(n), !r && !s && _(e)) {
    if (d.recordedMode === "plan") {
      if (d.recordTranscriptState = qor(o), d.recordTranscriptState !== "exited") d.source = "stored"
    } else if ((d.recordedMode === "absent" || d.recordedMode === "invalid") && qor(o) === "open") d.transcriptOpen = !0, d.source = "transcript"
  }
  if (_3r(d, {
      lane: a,
      hadExternal: !1,
      hadInternal: !1
    }), d.source === "none") return;
  return t(`[planModeResume] re-entering plan mode on resume (source: ${d.source}, was ${e.mode})`), P(e)
}

function _3r(e, {
  lane: n,
  hadExternal: o,
  hadInternal: s
}) {
  let r = e.source === "none" ? e.trustedMode : "plan";
  i("tengu_worker_permission_mode_restore", {
    source: c(e.source),
    lane: c(n),
    trusted_mode: pe(e.trustedMode),
    recorded_mode: c(e.recordedMode),
    target_mode: pe(r),
    had_external: o,
    had_internal: s,
    guard_enabled: f(),
    ...e.recordTranscriptState && {
      record_transcript_state: c(e.recordTranscriptState)
    },
    ...e.transcriptOpen && {
      transcript_open: !0
    }
  })
}
export {
  g3r,
  uQo,
  H5s,
  h3r,
  pQo,
  qor,
  Kor,
  y3r,
  Yor,
  xti,
  _3r
};
