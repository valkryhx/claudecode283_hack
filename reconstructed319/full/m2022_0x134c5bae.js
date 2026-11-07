// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  ef
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  hr
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Md
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Pg
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  xb,
  rn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  lo
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  wW,
  Hg
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  c$
} from "B:/~BUN/root/chunk-x12sgt91.js";
import {
  b8
} from "B:/~BUN/root/chunk-3kg80bh2.js";
import {
  $S
} from "B:/~BUN/root/chunk-bmcb2qbs.js";
import {
  ec
} from "B:/~BUN/root/chunk-jjs9d8eg.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var b = "tengu_tranquil_fern";

function P() {
  return rn(b, !0)
}
var E = p(() => u({
  id: o().regex(hr)
}));

function ajo() {
  return {
    source: "none",
    trustedMode: void 0,
    recordedMode: "absent"
  }
}

function GQs(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === !0) && e.trustedMode !== "plan" ? "declined" : "none"
}

function S(e) {
  if (e === void 0 || e === null) return "absent";
  return typeof e === "string" && Pg(e) || "invalid"
}

function R(e) {
  return {
    ...c$(e.mode, "plan", e),
    mode: "plan"
  }
}

function x(e) {
  return {
    ...e,
    toolPermissionContext: R(e.toolPermissionContext)
  }
}

function y(e) {
  return P() && e.mode !== "plan" && b8.isEnabled() && !lo(e, b8)
}

function eia(e, n, {
  forkSession: r,
  transcript: a
} = {}) {
  if (n.recordedMode = S(e?.worker_permission_mode), n.recordedMode === "invalid") t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", {
    level: "warn"
  });
  if (n.recordedMode === "plan" && a && P()) n.recordTranscriptState = yXn(a);
  return (s) => {
    if (n.trustedMode ??= s.toolPermissionContext.mode, n.recordedMode !== "plan" || r) return s;
    let i = s;
    if (y(s.toolPermissionContext)) n.source = "internal", t(`[planModeResume] re-entering plan mode from the prior worker's record (was ${s.toolPermissionContext.mode})`), i = x(s);
    let d = E().safeParse(e?.plan_doc);
    return i.toolPermissionContext.mode === "plan" && d.success && P() ? {
      ...i,
      toolPermissionContext: {
        ...i.toolPermissionContext,
        planDoc: {
          id: d.data.id,
          title: void 0
        }
      }
    } : i
  }
}

function ljo(e, n, {
  planModeOnResume: r,
  restored: a,
  restartedWorker: s
}) {
  let i = Boolean(a?.external || a?.internal);
  if (s && !i) return;
  if (e.enableWorkerPermissionModeRecord(), r !== void 0 && i) e.notifyInternalMetadataChanged({
    worker_permission_mode: Md(n),
    ...(n !== "plan" || a?.internal?.worker_permission_mode !== "plan") && {
      plan_doc: null
    }
  })
}

function VQs(e, n, r, a) {
  let s = a && n.source === "none" && (n.recordedMode === "absent" || n.recordedMode === "invalid") && P() && yXn(e) === "open";
  if (s) n.transcriptOpen = !0;
  r((i) => {
    if (n.trustedMode ??= i.toolPermissionContext.mode, !s || i.toolPermissionContext.mode === "plan" || lo(i.toolPermissionContext, b8)) return i;
    return n.source = "transcript", t(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${i.toolPermissionContext.mode})`), x(i)
  })
}

function djo(e, n, r) {
  if (n.mode === "plan" || yXn(e) !== "open") return !1;
  return !r || !P() || Boolean(lo(n, b8))
}

function yXn(e) {
  let n = `<${ef}>/plan</${ef}>`,
    r = new Set,
    a = new Set,
    s = k(e),
    i = !1,
    d = () => i ? "none" : "open";
  for (let _ = e.length - 1; _ >= 0; _--) {
    let m = e[_];
    if (m.type === "attachment") {
      let M = m.attachment.type;
      if (M === "plan_mode" || M === "plan_mode_reentry") return d();
      if (M === "plan_mode_exit") return "exited"
    } else if (m.type === "assistant" && Array.isArray(m.message.content)) {
      let M = m.message.content;
      for (let g = M.length - 1; g >= 0; g--) {
        let c = M[g];
        if (c.type !== "tool_use") continue;
        if (c.name === ec && a.has(c.id) && !r.has(c.id) && !s.has(c.id)) return "exited";
        if (c.name === $S && a.has(c.id) && (!r.has(c.id) || s.has(c.id))) return d()
      }
    } else if (m.type === "user" && wW(m)) {
      let M = m.message.content;
      if (Array.isArray(M)) {
        for (let g of M)
          if (g.type === "tool_result")(g.is_error || T(m, g.content) ? r : a).add(g.tool_use_id)
      }
    } else if (m.type === "user") {
      if (Hg(m)?.trimStart().startsWith(n)) return d();
      if (m.permissionMode === "plan") return d();
      if (m.permissionMode !== void 0 && !m.isMeta && xb(m.origin)) i = !0
    }
  }
  return "none"
}

function k(e) {
  let n = new Set,
    r = new Set;
  for (let a of e) {
    if (a.type !== "assistant" || !Array.isArray(a.message.content)) continue;
    for (let s of a.message.content) {
      if (s.type !== "tool_use") continue;
      if (n.has(s.id)) r.add(s.id);
      else n.add(s.id)
    }
  }
  return r
}

function T(e, n) {
  let r = e.toolUseResult;
  if (r !== null && typeof r === "object" && r.awaitingLeaderApproval === !0) return !0;
  return typeof n === "string" && n.startsWith("Your plan has been submitted to the team lead")
}

function _Xn({
  sdkUrl: e,
  permissionModeSuppliedOnInvocation: n,
  forkSession: r
}) {
  if (!b8.isEnabled() || r) return !1;
  return !!e || n === !1
}

function cjo(e, n, r) {
  let a = ajo();
  return VQs(e, a, r, _Xn(n)), ujo(a, {
    lane: n.sdkUrl ? "sdk_url" : "print",
    hadExternal: !1,
    hadInternal: !1
  }), GQs(a)
}

function aVr(e, n, {
  lane: r,
  forkSession: a,
  transcript: s
}) {
  let i = ajo();
  if (n(eia(e?.internal, i, {
      forkSession: a,
      transcript: s?.messages
    })), s) VQs(s.sourceRows, i, n, s.sourceAllowed);
  return ujo(i, {
    lane: r,
    hadExternal: !!e?.external,
    hadInternal: !!e?.internal
  }), GQs(i)
}

function iga(e, {
  storedPermissionMode: n,
  messages: r,
  forkSession: a,
  startupModePinned: s,
  lane: i
}) {
  let d = ajo();
  if (d.trustedMode = e.mode, d.recordedMode = S(n), !s && !a && y(e)) {
    if (d.recordedMode === "plan") {
      if (d.recordTranscriptState = yXn(r), d.recordTranscriptState !== "exited") d.source = "stored"
    } else if ((d.recordedMode === "absent" || d.recordedMode === "invalid") && yXn(r) === "open") d.transcriptOpen = !0, d.source = "transcript"
  }
  if (ujo(d, {
      lane: i,
      hadExternal: !1,
      hadInternal: !1
    }), d.source === "none") return;
  return t(`[planModeResume] re-entering plan mode on resume (source: ${d.source}, was ${e.mode})`), R(e)
}

function ujo(e, {
  lane: n,
  hadExternal: r,
  hadInternal: a
}) {
  let s = e.source === "none" ? e.trustedMode : "plan";
  l("tengu_worker_permission_mode_restore", {
    source: f(e.source),
    lane: f(n),
    trusted_mode: de(e.trustedMode),
    recorded_mode: f(e.recordedMode),
    target_mode: de(s),
    had_external: r,
    had_internal: a,
    guard_enabled: P(),
    ...e.recordTranscriptState && {
      record_transcript_state: f(e.recordTranscriptState)
    },
    ...e.transcriptOpen && {
      transcript_open: !0
    }
  })
}
export {
  ajo,
  GQs,
  eia,
  ljo,
  VQs,
  djo,
  yXn,
  _Xn,
  cjo,
  aVr,
  iga,
  ujo
};
