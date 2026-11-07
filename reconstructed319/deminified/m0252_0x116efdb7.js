// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { DH } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { cr, tQe, DL } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { kee as tool_host_interface, Jtn, NNt, GGe } from "B:/~BUN/root/chunk-pdtjaehv.js";
import { Oln, Er, Iu } from "B:/~BUN/root/chunk-pc24rkga.js";
import { uz, Hht } from "B:/~BUN/root/chunk-2fbpqb1a.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { PJ } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
import { o, E, I, oe, C, u, Be, Dr, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { hae } from "B:/~BUN/root/chunk-0mf55a06.js";
import { AT } from "B:/~BUN/root/chunk-mzfrv3wm.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function He(e, n) {
  var r = {};
  return n = AT(n, 3), Oln(e, function (a, s, d) {
    hae(r, n(a, s, d), a);
  }), r;
}
var uO = He;
function Sgo(e) {
  if (e === void 0) return {
    kind: "none"
  };
  let range = NNt(e);
  return range === void 0 ? {
    kind: "unreadable"
  } : {
    kind: "stated",
    range: range
  };
}
var Ve = {
  version: 1,
  min_version: 1
};
function jTr(e, n) {
  return GGe(e, n.kind === "stated" ? n.range : Ve);
}
function Sht(e) {
  return e === "self_too_old" ? "computer_too_old" : "session_too_old";
}
function Wtn(e) {
  return e.kind === "agreed" ? void 0 : e.kind;
}
function WTr(e, n) {
  return {
    session_interface: f(e.kind),
    ...(e.kind === "stated" && {
      session_interface_version: e.range.version,
      session_interface_min_version: e.range.min_version
    }),
    interface_fit: f(n.kind),
    ...(n.kind === "agreed" && {
      interface_agreed_version: n.version
    })
  };
}
var v_2 = 1,
  wht = [1],
  UFn = 1,
  zTr = "spilledOutputBytes";
function Vzi(e) {
  return `
(output truncated on ${e})`;
}
var nEs = /\n\(output truncated on [^\n()]*\)$/,
  max = 2147483647,
  jGe = {
    progress_interval_ms: 20000,
    progress_misses: 2,
    max_ask_ms: 120000,
    reconcile_ms: 30000
  },
  BFn = {
    caller_sessions_max: {
      min: 1,
      max: 256
    },
    pending_asks_max: {
      min: 1,
      max: 64
    },
    progress_interval_ms: {
      min: 1000,
      max: 120000
    },
    progress_misses: {
      min: 1,
      max: 10
    },
    reconcile_ms: {
      min: 5000,
      max: 120000
    },
    max_queue_ms: {
      min: 0,
      max: max
    },
    queue_depth: {
      min: 0,
      max: 256
    },
    max_ask_ms: {
      min: 1e4,
      max: max
    }
  };
var GTr = "sleeping",
  VTr = "says_still_here",
  KTr = "still_here",
  U = {
    idle: "left_idle",
    released: "left_released"
  },
  qTr = "released";
function jFn(e) {
  return U[e];
}
function Kzi(e) {
  if (e === void 0) return;
  if (e.includes(U.idle)) return "idle";
  if (e.includes(U.released)) return "released";
  return;
}
var YTr = "still_here",
  XTr = 1e4,
  JTr = 2000,
  de = /^[a-z][a-z0-9_]{0,47}$/,
  le = 32;
function qzi(e, n) {
  if (n === void 0) return;
  let {
    min: min,
    max: max_2
  } = BFn[e];
  return Math.min(Math.max(n, min), max_2);
}
var wgo = /^[a-z0-9][a-z0-9+._-]{0,31}(@[0-9][0-9A-Za-z.+_-]{0,23})?$/,
  kgo = 96,
  vgo = 1e6,
  Ego = 2048;
function ztn(e) {
  switch (e) {
    case void 0:
    case "darwin":
    case "linux":
    case "win32":
      return e;
    default:
      return "other";
  }
}
var $Ce = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,
  j = /^[A-Za-z0-9][A-Za-z0-9._[\]-]{0,63}$/,
  ue = ["default", "acceptEdits", "plan", "auto", "bypassPermissions", "dontAsk"];
var Tgo = ["invalid_request", "unsupported_protocol", "not_served", "no_session", "unbound", "session_mismatch", "too_many_in_flight", "refused_field", "sandbox_unavailable", "unknown_call", "no_approval", "stale", "unattested_request", "queue_full", "rate_limited", "duplicate_call", "withdrawn", "result_lost", "tool_host_no_live_grant", "unrecognized"],
  QTr = ["evicted", "tool_withdrawn", "host_unbound", "host_stopped", "stale_answer", "record_evicted", "replaced_by_retry", "unrecognized"],
  Ue = ["no_answer", "host_withdrawn", "superseded"],
  je = [...QTr, ...Ue];
function Gtn(e) {
  return (e === "displaced" ? "superseded" : e === "withdrawn" ? "host_withdrawn" : void 0) ?? je.find(item => item === e) ?? "unrecognized";
}
var ce = ["in_flight", "queue", "sessions", "unrecognized"],
  Cgo = ["tool_error", "internal_error", "cancelled", "timed_out", "unrecognized"],
  Vtn = ["ran", "denied_by_rule", "denied_by_user", "ask_refused_no_surface", "hook_blocked", "validation_failed", "duplicate_call", "asked_in_session", "approved_by_session", "denied_by_session", "ask_expired", "unrecognized"];
function OL(e) {
  switch (e) {
    case void 0:
    case "ran":
    case "approved_by_session":
      return !0;
    case "duplicate_call":
    case "hook_blocked":
    case "denied_by_rule":
    case "denied_by_user":
    case "ask_refused_no_surface":
    case "validation_failed":
    case "asked_in_session":
    case "denied_by_session":
    case "ask_expired":
    case "unrecognized":
      return !1;
  }
}
var kht = {
  ran: {
    kind: "completed",
    wire: {
      completed: ["ran"]
    },
    bucket: "ok",
    sessionDenial: !1,
    phase: "call"
  },
  approved_by_session: {
    kind: "completed",
    wire: {
      completed: ["approved_by_session"]
    },
    bucket: "ok",
    sessionDenial: !1,
    phase: "call"
  },
  denied_by_rule: {
    kind: "completed",
    wire: {
      completed: ["denied_by_rule"]
    },
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !1,
    phase: "call"
  },
  hook_blocked: {
    kind: "completed",
    wire: {
      completed: ["hook_blocked"]
    },
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !1,
    phase: "call"
  },
  denied_by_user: {
    kind: "completed",
    wire: {
      completed: ["denied_by_user"]
    },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call"
  },
  ask_refused_no_surface: {
    kind: "completed",
    wire: {
      completed: ["ask_refused_no_surface"]
    },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call"
  },
  denied_by_session: {
    kind: "completed",
    wire: {
      completed: ["denied_by_session"]
    },
    bucket: "sad",
    denialKind: "user-rejected",
    sessionDenial: !1,
    phase: "call"
  },
  ask_expired: {
    kind: "completed",
    wire: {
      completed: ["ask_expired"]
    },
    bucket: "sad",
    sessionDenial: !0,
    phase: "call"
  },
  validation_failed: {
    kind: "completed",
    wire: {
      completed: ["validation_failed"]
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  duplicate_call: {
    kind: "completed",
    wire: {
      completed: ["duplicate_call"]
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  asked_in_session: {
    kind: "completed",
    wire: {
      completed: ["asked_in_session"]
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  unknown_host: {
    kind: "route",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  host_offline: {
    kind: "route",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route"
  },
  gate_off: {
    kind: "route",
    bucket: "none",
    sessionDenial: !1,
    phase: "route"
  },
  incompatible: {
    kind: "route",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  invalid_input: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  declined_spelling: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  declined_magic_link: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  not_served: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  denied_by_session_rule: {
    kind: "error",
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !0,
    phase: "route"
  },
  denied_by_session_read_deny: {
    kind: "error",
    bucket: "sad",
    denialKind: "permission-rule",
    sessionDenial: !0,
    phase: "route"
  },
  approval_no_longer_covers: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !0,
    phase: "route"
  },
  request_too_large: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "route"
  },
  sync_failed: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route"
  },
  stalled: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route"
  },
  stalled_unsent: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route"
  },
  unreachable: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "route"
  },
  cancelled: {
    kind: "error",
    bucket: "none",
    denialKind: "cancelled",
    sessionDenial: !1,
    phase: "route"
  },
  refused_by_host: {
    kind: "error",
    wire: {
      refused: ["invalid_request", "unsupported_protocol", "not_served", "no_session", "unbound", "session_mismatch", "too_many_in_flight", "queue_full", "rate_limited", "refused_field", "sandbox_unavailable", "unknown_call", "duplicate_call", "result_lost", "unattested_request", "tool_host_no_live_grant"]
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  stale: {
    kind: "error",
    wire: {
      refused: ["stale"]
    },
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  approval_unverified: {
    kind: "error",
    wire: {
      refused: ["no_approval"]
    },
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  withdrawn: {
    kind: "error",
    wire: {
      refused: ["withdrawn"]
    },
    bucket: "sad",
    sessionDenial: !0,
    phase: "call"
  },
  no_answer: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !0,
    phase: "call"
  },
  failed_on_host: {
    kind: "error",
    wire: {
      failed: ["tool_error", "internal_error", "cancelled", "timed_out"]
    },
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  timed_out: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  dropped: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  host_gone: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  host_withdrawn: {
    kind: "error",
    bucket: "sad",
    sessionDenial: !1,
    phase: "call"
  },
  host_unresponsive: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  still_running: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  host_restarted: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  not_received: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  approval_not_received: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  transport_error: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  },
  interrupted: {
    kind: "error",
    bucket: "none",
    denialKind: "interrupted",
    sessionDenial: !1,
    phase: "call"
  },
  rejected_in_session: {
    kind: "error",
    bucket: "none",
    denialKind: "user-rejected",
    sessionDenial: !0,
    phase: "call"
  },
  prompt_failed: {
    kind: "error",
    bucket: "bad",
    sessionDenial: !1,
    phase: "call"
  }
};
function Ktn(e) {
  return e.kind === "dropped" && e.why === "unverified_refusal";
}
function Rgo(e, n) {
  let r = typeof e === "string" ? e : "";
  if (typeof e === "string" && n.includes(e)) return;
  return {
    length: r.length,
    hash: kn(r),
    variantOfListed: n.includes(r.trim().toLowerCase())
  };
}
var WFn = "server_verdict",
  Fe = p(() => u({
    v: T(1),
    status: B(["matched", "mismatch", "by_id", "id_split", "none"]),
    outcome: B(["flagged", "not_flagged", "unavailable"]).optional(),
    by: T("input").optional(),
    context: T("container_supplied").optional(),
    age_ms: E().optional()
  }));
function pe(e) {
  let n = Fe().safeParse(e);
  if (!n.success || _e(n.data) === void 0) return {
    kind: "unreadable"
  };
  return {
    kind: "stamp",
    stamp: n.data
  };
}
function Yzi(e) {
  switch (e.kind) {
    case "absent":
    case "unmarked":
    case "unreadable":
      return e.kind;
    case "stamp":
      return _e(e.stamp) ?? "unreadable";
  }
}
function _e({
  status: status,
  outcome: outcome
}) {
  if (status === "none" || status === "id_split") return outcome === void 0 ? status : void 0;
  if (outcome === void 0) return status === "mismatch" ? "mismatch" : void 0;
  return `${status}_${outcome}`;
}
var F = ["anyOf", "oneOf", "allOf"],
  Ago = /^[a-zA-Z0-9_.-]{1,64}$/,
  Ke = ["$defs", "definitions", "$schema", "additionalProperties", "description", "title"];
function K(e, n) {
  let $ref = e.$ref;
  if (typeof $ref !== "string") return e;
  let a = /^#\/(\$defs|definitions)\/([^/]+)$/.exec($ref);
  if (a === null) return e;
  let s = n[a[1]];
  if (!D(s)) return e;
  let d = s[a[2]];
  return D(d) ? d : e;
}
function q(e, n) {
  return L(e.map(item => D(item) ? K(item, n) : item));
}
function Xe(e) {
  if (!D(e)) return null;
  let required = e.required;
  if (Array.isArray(required) && required.length > 0 && required.every(item => typeof item === "string")) return required.join(", ");
  let properties = e.properties;
  if (D(properties)) {
    let a = Object.keys(properties);
    if (a.length > 0) return a.join(", ");
  }
  return null;
}
function Xzi(e) {
  if (!D(e)) return {
    outcome: "unchanged"
  };
  let combinators = F.filter(item => item in e);
  if (combinators.length === 0) return {
    outcome: "unchanged"
  };
  try {
    let properties_2 = Object.create(null),
      a = l => {
        if (!D(l)) return;
        for (let [b, x] of Object.entries(l)) if (Ago.test(b) && !(b in properties_2) && D(x)) properties_2[b] = x;
      };
    a(e.properties);
    for (let l of combinators) {
      let b = e[l];
      if (!Array.isArray(b)) return {
        outcome: "drop",
        reason: `input schema has top-level ${l} that is not an array`
      };
      for (let x of q(b, e)) if (D(x)) a(x.properties);
    }
    let s = new Set(),
      d = l => {
        if (!Array.isArray(l)) return;
        for (let b of l) if (typeof b === "string" && b in properties_2) s.add(b);
      };
    d(e.required);
    let allOf = e.allOf;
    if (Array.isArray(allOf)) {
      for (let l of q(allOf, e)) if (D(l)) d(l.required);
    }
    let g = combinators.includes("anyOf") || combinators.includes("oneOf"),
      schema = {
        type: "object",
        properties: properties_2,
        required: [...s]
      };
    for (let l of Ke) if (l in e) schema[l] = e[l];
    let note = Ye(combinators, e, g);
    if (!("additionalProperties" in e)) schema.additionalProperties = !0;
    return {
      outcome: "normalized",
      schema: schema,
      note: note,
      combinators: combinators
    };
  } catch {
    return {
      outcome: "drop",
      reason: `input schema uses top-level ${combinators.join("/")} and could not be normalized`
    };
  }
}
function Ye(e, n, r) {
  if (!r) return "Input constraint: all listed parameters apply together (flattened from a JSON Schema allOf).";
  let a = e.includes("oneOf") ? "oneOf" : "anyOf",
    s = n[a],
    d = Array.isArray(s) ? L(q(s, n).map(Xe).filter(item => item !== null)) : [],
    m = a === "oneOf" ? "Provide parameters for exactly one of" : "Provide parameters for at least one of";
  if (d.length === 0) return `Input constraint: ${m} the documented parameter groups (flattened from a JSON Schema ${a}).`;
  let g = d.map(item => `(${item})`).join(" or ");
  return `Input constraint: ${m}: ${g}.`;
}
function qtn(e, n) {
  return n ? `${e}

${n}` : e;
}
var W7e = "__remote_tool_call",
  Ytn = "2.1",
  rEs = ["session_id", "trigger_id", "ccr_card_approval"],
  zFn = [...rEs, "device", cr, W7e],
  x1 = "anthropic/remoteToolExecution",
  Jzi = "claudecode/remoteToolCall",
  Qzi = "claudecode/toolUseId",
  $e = 8192,
  Ge = 6,
  rNe = 8192,
  xgo = 32,
  oEs = 8192,
  be = 4,
  We = 1024,
  INt = "sender_below_floor";
function ZTr(e) {
  return M(e) && e[INt] === !0;
}
var Xtn = 300,
  sEs = 64,
  J = 16,
  Pgo = 200,
  MNt = 4063232,
  WGe = "mcp_result_meta",
  eCr = new Map([[Me, new Set(["stdout", "stderr", "interrupted", "timedOutAfterMs", "noOutputExpected"])], [kt, new Set(["stdout", "stderr", "interrupted", "timedOutAfterMs"])], [dt, new Set(["structuredPatch", "staged", "stagedWording"])], [Yt, new Set(["type", "structuredPatch", "staged", "stagedWording"])]]),
  Ogo = 32,
  he = 16,
  Ee = 256;
function Hu(e, n = rNe) {
  let r = Hht(e);
  return r.length <= n ? r : `${Q(r, n - 1)}\u2026`;
}
var S = 64,
  Re = 1024,
  Qe = /^[A-Za-z0-9_-]{8,64}$/,
  ne = 128;
function Ze(e) {
  return {
    name: Hu(e.name, S),
    working_dir: Hu(e.working_dir, Re)
  };
}
var te = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,255}$/,
  k = p(() => o().regex(te)),
  X = p(() => o().regex($Ce).optional().catch(void 0)),
  Je = p(() => u({
    v: T(v_2),
    op: T("call").optional(),
    call_id: k(),
    caller: u({
      kind: B(["ccr_container", "local_process"]),
      permission_mode: B(ue).optional(),
      is_bypass_available: I().optional(),
      instance_id: X(),
      model: o().regex(j).optional().catch(void 0),
      conversation_id: X(),
      compaction_id: X(),
      tool_host_interface: Jtn().optional().catch(void 0)
    }).transform(V),
    expires_in_ms: E().int().positive(),
    approval: u({
      ask_id: N(),
      decision: B(["allow", "deny"]),
      updated_input: me(o(), oe()).optional(),
      feedback: o().max(rNe).optional(),
      permission_updates: C(oe()).max(Ogo).optional(),
      attested: I().optional()
    }).optional(),
    read_baseline: u({
      sha256: o().regex(/^[0-9a-f]{64}$/),
      bytes: E().int().nonnegative().max(1073741824)
    }).optional().catch(void 0)
  })),
  N = p(() => o().regex(te)),
  P = p(() => o().regex(te)),
  H = 8640000000000000,
  Y = () => ({
    replayed: I().optional(),
    served_at: E().int().nonnegative().max(H).optional()
  }),
  en = p(() => u({
    v: T(v_2),
    op: T("outcome_of"),
    call_id: k()
  }));
function O(e = 1) {
  return oe().transform(n => typeof n === "number" && Number.isInteger(n) && n >= e && n <= max ? n : void 0).optional();
}
var nn = p(() => u({
  max_call_ms: E().int().positive(),
  max_command_ms: O(),
  max_request_bytes: E().int().positive(),
  max_in_flight: E().int().positive(),
  caller_sessions_max: O(),
  pending_asks_max: O(),
  progress_interval_ms: O(),
  progress_misses: O(),
  reconcile_ms: O(),
  max_queue_ms: O(BFn.max_queue_ms.min),
  queue_depth: O(BFn.queue_depth.min),
  max_ask_ms: O()
}).transform(V));
function V(e) {
  let n = {
    ...e
  };
  for (let r of Object.keys(n)) if (n[r] === void 0) delete n[r];
  return n;
}
var on = p(() => o().regex(tQe).refine(e => !DL(e))),
  v = p(() => u({
    name: o().min(1).max(S),
    working_dir: o().max(Re)
  }));
function G() {
  return E().int().nonnegative().max(vgo).optional();
}
var tn = p(() => u({
    tools: C(o().regex(wgo)).max(kgo),
    incomplete: I().optional(),
    cpus: G(),
    memory_gb: G(),
    disk_free_gb: G()
  }).refine(e => _(e).length <= Ego)),
  xe = p(() => u({
    name: on(),
    kind: B(["personal_machine", "sandbox"]),
    platform: o().max(64),
    os_version: o().max(64).optional(),
    arch: o().max(64).optional(),
    shell: o().max(sEs).optional(),
    home_dir: o().max(1024).optional(),
    working_dir: o().max(1024),
    project_sync: B(["two_way", "upload_only", "off", "unknown"]).optional(),
    sync_root: o().max(1024).optional(),
    folder_relation: oe().transform(e => e === "separate_copy" ? e : void 0).optional(),
    copy_of: u({
      platform: o().max(64),
      dir: o().max(1024),
      home_dir: o().max(1024).optional()
    }).optional().catch({
      platform: "",
      dir: ""
    }),
    limits: nn(),
    claude_code_version: o().max(64).optional(),
    tool_host_interface: Jtn().optional().catch(void 0),
    notes: o().max(Xtn).optional(),
    epoch: P().optional(),
    device_id: oe().transform(e => typeof e === "string" && Qe.test(e) ? e : void 0).optional(),
    inventory: tn().optional().catch(void 0),
    capabilities: oe().transform(e => Array.isArray(e) ? L(e.filter(item => typeof item === "string" && de.test(item))).slice(0, le) : void 0).optional()
  })),
  ke = p(() => xe().transform(V)),
  rn = p(() => u({
    v: T(UFn),
    tool: o().min(1).max(128),
    refused_input_fields: C(o().max(64)).max(32),
    target: ke(),
    protocol_versions: oe().transform(e => e === void 0 ? void 0 : re(e)).optional()
  })),
  w = p(() => C(o().min(1).max(Pgo)).max(J).optional()),
  an = p(() => u({
    allow: w(),
    soft_deny: w(),
    hard_deny: w(),
    environment: w()
  })),
  sn = p(() => u({
    mode: T("form").optional(),
    message: o().max(rNe),
    requestedSchema: u({
      type: T("object"),
      properties: u({
        decision: u({
          type: T("string"),
          enum: C(o().max(64)).max(8),
          description: o().max(256).optional()
        }),
        feedback: u({
          type: T("string"),
          description: o().max(256).optional()
        })
      }),
      required: C(o().max(64)).max(8).optional()
    }),
    _meta: u({
      [x1]: u({
        ask_id: N(),
        call_id: k().optional(),
        input_fingerprint: o().regex(/^[a-f0-9]{64}$/),
        classifier_eligible: I().optional(),
        prior_answer_ok: I().optional()
      })
    })
  })),
  Se = ["image/jpeg", "image/png", "image/gif", "image/webp"],
  iEs = 4,
  tCr = "(a PDF read on ",
  dn = ["application/pdf"],
  ln = p(() => u({
    at: E().int().nonnegative(),
    media_type: B(dn),
    data: o().regex(/^[A-Za-z0-9+/]+={0,2}$/)
  })),
  un = p(() => oe().transform(e => Array.isArray(e) ? e.slice(0, iEs).flatMap(item => {
    let r = ln().safeParse(item);
    return r.success ? [r.data] : [];
  }) : [])),
  ye = p(() => Be([o(), C(Be([u({
    type: T("text"),
    text: o()
  }), u({
    type: T("image"),
    source: u({
      type: T("base64"),
      media_type: B(Se),
      data: o()
    })
  })]))]));
function Te(e) {
  return oe().transform(n => Array.isArray(n) ? n.filter(item => typeof item === "string").slice(0, e) : void 0).optional();
}
var W = p(() => Te(xgo)),
  cn = p(() => Te(be));
function fe(e) {
  return o().max(64).transform(n => e.includes(n) ? n : "unrecognized");
}
function Z(e, n = "dropped") {
  return oe().transform(r => typeof r === "string" ? e.includes(r) ? r : "unrecognized" : n === "unrecognized" && r !== void 0 ? "unrecognized" : void 0).optional();
}
var pn = p(() => Dr("outcome", [u({
  v: T(v_2),
  outcome: T("completed"),
  call_id: k().optional(),
  target: v(),
  is_error: I(),
  content: ye(),
  documents: un().optional(),
  output: oe().optional(),
  truncated: I().optional(),
  disposition: Z(Vtn, "unrecognized"),
  notes: W(),
  ...Y()
}), u({
  v: T(v_2),
  outcome: T("refused"),
  call_id: k().optional(),
  target: v(),
  code: fe(Tgo),
  reason: Z(QTr),
  limit: Z(ce),
  message: o().max(rNe),
  host_epoch: P().optional(),
  notes: W(),
  ...Y()
}), u({
  v: T(v_2),
  outcome: T("failed"),
  call_id: k().optional(),
  target: v(),
  code: fe(Cgo),
  message: o().max(rNe),
  content: ye().optional(),
  output: oe().optional(),
  truncated: I().optional(),
  notes: W(),
  ...Y()
}), u({
  v: T(v_2),
  outcome: T("in_progress"),
  call_id: k().optional(),
  target: v(),
  state: B(["admitting", "running", "awaiting_approval"]),
  since_ms: E().int().nonnegative().max(H),
  host_epoch: P().optional(),
  output_tail: u({
    text: o().refine(e => Buffer.byteLength(e) <= oEs),
    truncated_head: I(),
    total_bytes: E().int().nonnegative()
  }).optional().catch(void 0)
}), u({
  v: T(v_2),
  outcome: T("needs_approval"),
  call_id: k().optional(),
  target: v(),
  ask_id: N(),
  tool: o().min(1).max(ne),
  input: me(o(), oe()),
  message: o().max(rNe),
  decision_reason: o().max(rNe).optional(),
  suggestions: C(o().max(Ee)).max(he).optional(),
  classifier_eligible: I().optional(),
  prior_answer_ok: I().optional(),
  unreadable_line_only: I().optional(),
  auto_mode: an().optional().catch(() => {
    t("[remote-tools] dropped an unreadable auto_mode block from a needs_approval answer; the ask is judged without it");
    return;
  }),
  elicitation: sn().optional().catch(() => {
    t("[remote-tools] dropped an unreadable elicitation block from a needs_approval answer; its own fields stand");
    return;
  }),
  notes: cn()
}), u({
  v: T(v_2),
  outcome: T("acknowledged"),
  call_id: k().optional(),
  target: v(),
  ask_id: N()
})]));
function aEs({
  callId: e,
  expiresInMs: expiresInMs,
  permissionMode: r,
  isBypassAvailable: a,
  callerInstanceId: s,
  model: model,
  conversationId: m,
  compactionId: g,
  approval: approval,
  readBaseline: y
}) {
  return {
    v: v_2,
    call_id: e,
    caller: {
      kind: i.CLAUDE_CODE_REMOTE ? "ccr_container" : "local_process",
      tool_host_interface: tool_host_interface,
      ...(r !== void 0 && {
        permission_mode: r
      }),
      ...(a !== void 0 && {
        is_bypass_available: a
      }),
      ...(s !== void 0 && {
        instance_id: s
      }),
      ...mn(model),
      ...(m !== void 0 && {
        conversation_id: m
      }),
      ...(g !== void 0 && {
        compaction_id: g
      })
    },
    expires_in_ms: Yq(expiresInMs),
    ...(approval !== void 0 && {
      approval: _n(approval)
    }),
    ...(y !== void 0 && approval === void 0 && {
      read_baseline: y
    })
  };
}
function mn(model_2) {
  if (model_2 === void 0) return {};
  if (j.test(model_2)) return {
    model: model_2
  };
  return t(`remote tools: this session's model id is not one the call envelope can carry; the serving machine will not key its model safeguards on it (length ${model_2.length})`), {};
}
function _n(e) {
  let {
    attested: attested,
    feedback: feedback,
    permission_updates: permission_updates,
    ...s
  } = e;
  return {
    ...s,
    ...(feedback !== void 0 && {
      feedback: Hu(feedback)
    }),
    ...(permission_updates !== void 0 && {
      permission_updates: permission_updates.slice(0, Ogo)
    })
  };
}
function Zzi(e) {
  switch (e) {
    case "bubble":
      return "default";
    case "bypassPermissions":
      return "auto";
    default:
      return e;
  }
}
var yn = ["call", "outcome_of"];
function Oe(e) {
  let n = R(e)?.op;
  if (n !== "outcome_of") {
    let a = Igo(e);
    if (a.ok) return {
      ...a,
      kind: "call"
    };
    let unlistedOp = a.why === "malformed" && n !== void 0 ? Rgo(n, yn) : void 0;
    return unlistedOp === void 0 ? a : {
      ...a,
      unlistedOp: unlistedOp
    };
  }
  if (Ce(e)) return {
    ok: !1,
    why: "unsupported_protocol"
  };
  let r = en().safeParse(e);
  return r.success ? {
    ok: !0,
    kind: "outcome_query",
    value: {
      v: r.data.v,
      op: "outcome_of",
      call_id: r.data.call_id
    },
    ...Ae(e)
  } : {
    ok: !1,
    why: "malformed"
  };
}
function Ae(e) {
  let sessionInterface = Sgo(R(R(e)?.caller)?.tool_host_interface);
  return sessionInterface.kind === "none" ? {} : {
    sessionInterface: sessionInterface
  };
}
function z7e(call_id) {
  return {
    v: v_2,
    op: "outcome_of",
    call_id: call_id,
    caller: {
      tool_host_interface: tool_host_interface
    }
  };
}
var version = 1;
function nCr(e) {
  if (e === void 0) return {
    kind: "compatible",
    version: version
  };
  let n = e.filter(item => wht.includes(item));
  return n.length > 0 ? {
    kind: "compatible",
    version: Math.max(...n)
  } : {
    kind: "incompatible",
    announced: [...e]
  };
}
function eGi(e) {
  let n = "approval" in e && e.approval !== void 0 ? {
    ...e,
    elicit_result: gn(e.approval)
  } : {
    ...e
  };
  return zGe(n, Ge) && HS(n) <= $e ? n : void 0;
}
var DNt = "withdrawn";
function gn(e) {
  let _meta = {
    [x1]: {
      ask_id: e.ask_id
    }
  };
  return e.decision === "deny" && e.feedback === DNt ? {
    action: "cancel",
    _meta: _meta
  } : {
    action: "accept",
    content: {
      decision: e.decision,
      ...(e.feedback !== void 0 && {
        feedback: e.feedback
      })
    },
    _meta: _meta
  };
}
function zGe(e, n) {
  let r = Array.isArray(e) ? e : M(e) ? Object.values(e) : void 0;
  if (r === void 0) return !0;
  return n >= 1 && r.every(item => zGe(item, n - 1));
}
function Igo(e) {
  if (e === void 0 || e === null) return {
    ok: !1,
    why: "missing"
  };
  if (Ce(e)) return {
    ok: !1,
    why: "unsupported_protocol"
  };
  let n = Je().safeParse(e);
  if (!n.success) return {
    ok: !1,
    why: "malformed"
  };
  let {
      approval: approval_2
    } = n.data,
    a = R(R(e)?.caller);
  return {
    ok: !0,
    value: approval_2?.feedback === void 0 ? n.data : {
      ...n.data,
      approval: {
        ...approval_2,
        feedback: Hu(approval_2.feedback)
      }
    },
    ...(a !== void 0 && Object.hasOwn(a, WFn) && {
      serverVerdict: pe(a[WFn])
    }),
    ...Ae(e)
  };
}
function hn(e) {
  let auto_mode = lEs(e);
  return auto_mode === void 0 ? {} : {
    auto_mode: auto_mode
  };
}
function lEs(e) {
  if (e === void 0) return;
  let n = (m, g) => {
      let c = (m ?? []).flatMap(item => item.split(/\r?\n/)).map(item => Hu(item.replace(/\s+/g, " "), Pgo).trim()).filter(item => item.length > 0 && item !== Iu),
        y = g === "last" ? c.slice(-J) : c.slice(0, J);
      return y.length > 0 ? y : void 0;
    },
    allow = n(e.allow, "first"),
    soft_deny = n(e.soft_deny, "last"),
    hard_deny = n(e.hard_deny, "last"),
    environment = n(e.environment, "first");
  return [allow, soft_deny, hard_deny, environment].some(item => item !== void 0) ? {
    ...(allow && {
      allow: allow
    }),
    ...(soft_deny && {
      soft_deny: soft_deny
    }),
    ...(hard_deny && {
      hard_deny: hard_deny
    }),
    ...(environment && {
      environment: environment
    })
  } : void 0;
}
function dEs(e) {
  let n = P().safeParse(e);
  return n.success ? n.data : void 0;
}
function rCr(e) {
  let n = ke().safeParse(e);
  return n.success ? h(n.data) : void 0;
}
function re(e) {
  return Array.isArray(e) && e.length <= 64 && e.every(item => Number.isInteger(item)) ? e : [];
}
function tGi(e) {
  if (e === void 0) return;
  let n = R(e);
  if (n === void 0) return [];
  if (n.v === UFn) return;
  return "protocol_versions" in n ? re(n.protocol_versions) : [];
}
function nGi(e) {
  let n = R(e);
  return n !== void 0 && n.v === UFn && "protocol_versions" in n ? re(n.protocol_versions) : void 0;
}
function oCr(e) {
  let n = rn().safeParse(e);
  return n.success ? h(n.data) : void 0;
}
function h(e) {
  if (typeof e === "string") return uz(e);
  if (Array.isArray(e)) return e.map(h);
  if (e !== null && typeof e === "object") return Er(uO(e, (n, r) => h(r)), h);
  return e;
}
function En(e) {
  let n = pn().safeParse(e);
  return n.success ? Ie(n.data) : void 0;
}
function rGi(e) {
  let {
    [W7e]: n,
    ...toolInput
  } = e;
  return {
    request: Oe(n),
    toolInput: toolInput
  };
}
var ze = 16,
  Mgo = 256,
  Rn = 4 * Mgo,
  cEs = 107,
  sCr = 1048576,
  ve = 2048,
  iCr = 4096,
  ee = 256,
  xn = 65536,
  aCr = 16,
  we = p(() => me(o(), oe()).refine(e => zGe(e, aCr) && HS(e) <= xn)),
  Sn = p(() => u({
    name: o().min(1).max(ne),
    refused_input_fields: C(o().max(64)).max(32),
    protocol_versions: C(E().int().positive()).max(16),
    description: o().max(ve).optional(),
    input_schema: we().optional()
  })),
  Ne = 512,
  Pe = 256,
  Tn = p(() => u({
    name: o().min(1).max(ee),
    local_name: o().min(1).max(ee),
    description: o().max(iCr).optional(),
    input_schema: we(),
    annotations: u({
      title: o().max(4 * Pe).optional(),
      readOnlyHint: I().optional(),
      destructiveHint: I().optional(),
      openWorldHint: I().optional()
    }).optional(),
    hints: u({
      search_hint: o().max(4 * Ne).optional(),
      always_load: I().optional(),
      max_result_size_chars: E().positive().optional(),
      requires_user_interaction: I().optional()
    }).optional()
  })),
  On = p(() => xe().required({
    epoch: !0
  }).transform(V)),
  An = p(() => u({
    host: On(),
    tools: C(oe()).max(ze),
    passthrough: C(oe()).max(Rn),
    plumbing: C(o().min(1).max(64)).max(8)
  }));
function oGi(e, n) {
  let r = An().safeParse(e);
  if (!r.success) return;
  let ignored = [],
    s = new Set(),
    d = (c, y, l, b) => y.reduce((acc, item, Le) => {
      let z = acc.length < l ? b(item) : void 0,
        se = z?.name ?? R(item)?.name,
        ie = typeof se === "string" ? Hu(h(se), S) : "",
        De = ie !== "" ? ie : `${c}[${Le}]`;
      if (z === void 0 || z.name === "" || s.has(z.name)) return ignored.push(De), acc;
      return s.add(z.name), acc.push(z), acc;
    }, []),
    tools = d("tools", r.data.tools, ze, c => {
      let y = Sn().safeParse(c);
      return y.success ? Mn(y.data) : void 0;
    }),
    passthrough = d("passthrough", r.data.passthrough, Mgo, c => {
      let y = Tn().safeParse(c);
      return y.success && zn(y.data.name, n) ? vn(wn(y.data), n) : void 0;
    });
  return {
    host: h(r.data.host),
    tools: tools,
    passthrough: passthrough,
    plumbing: L(h(r.data.plumbing)).filter(item => item !== ""),
    ignored: ignored
  };
}
function zn(e, n) {
  let r = e.indexOf("__");
  return bn(e) === e && e.length <= cEs && r > 0 && r + 2 < e.length && n.admitsName(e);
}
function vn(e, n) {
  let r = {
    ...e,
    input_schema: DH(e.input_schema)
  };
  if (r.input_schema.type !== "object") return;
  let a = n.judgeSchema(r.input_schema);
  if (a.verdict === "drop") return;
  let s = a.normalized?.schema ?? r.input_schema,
    d = Ln(r.input_schema);
  if (d === void 0) return;
  let m = [...Object.keys(R(s.properties) ?? {}), ...d],
    g = a.normalized?.note ?? "";
  if (zFn.some(item => m.includes(item) || Dn(g, item))) return;
  return a.normalized === void 0 ? r : {
    ...r,
    input_schema: a.normalized.schema,
    description: qtn(a.normalized.note, r.description)
  };
}
function Mn(e) {
  return {
    name: h(e.name),
    refused_input_fields: h(e.refused_input_fields),
    protocol_versions: e.protocol_versions,
    ...(e.description !== void 0 && {
      description: Hu(e.description, ve)
    }),
    ...(e.input_schema !== void 0 && {
      input_schema: h(e.input_schema)
    })
  };
}
function wn(e) {
  let title = e.annotations?.title !== void 0 ? Hu(h(e.annotations.title), Pe) : void 0,
    annotations = e.annotations === void 0 ? void 0 : {
      ...e.annotations,
      ...(title !== void 0 && {
        title: title
      })
    },
    search_hint = e.hints?.search_hint !== void 0 ? Hu(h(e.hints.search_hint), Ne) : void 0,
    max_result_size_chars = e.hints?.max_result_size_chars !== void 0 ? Math.min(Math.max(1, Math.floor(e.hints.max_result_size_chars)), PJ) : void 0,
    hints = e.hints === void 0 ? void 0 : {
      ...e.hints,
      ...(search_hint !== void 0 && {
        search_hint: search_hint
      }),
      ...(max_result_size_chars !== void 0 && {
        max_result_size_chars: max_result_size_chars
      })
    };
  return {
    name: h(e.name),
    local_name: h(e.local_name),
    ...(e.description !== void 0 && {
      description: Hu(e.description, iCr)
    }),
    input_schema: h(e.input_schema),
    ...(annotations !== void 0 && {
      annotations: annotations
    }),
    ...(hints !== void 0 && {
      hints: hints
    })
  };
}
var Nn = p(() => u({
  instance_id: o().regex($Ce),
  host: o().max(S),
  name: o().min(1).max(ee),
  input: me(o(), oe()),
  envelope: oe().optional(),
  tool_use_id: k(),
  issued_at: E().int().nonnegative().max(H),
  deadline_ms: E().int().positive().max(max)
}));
function Dgo(e, n = Oe) {
  let r = Nn().safeParse(e);
  if (!r.success) return;
  let {
      envelope: envelope,
      input: input,
      host: host,
      name: name,
      ...g
    } = r.data,
    {
      [W7e]: c,
      ...input_2
    } = input,
    name_2 = h(name);
  if (name_2 === "") return;
  let b = n(envelope, g);
  return {
    ...g,
    host: Hu(host, S),
    name: name_2,
    input: input_2,
    request: b.ok && b.value.call_id !== g.tool_use_id ? {
      ok: !1,
      why: "malformed"
    } : b
  };
}
function sGi({
  instanceId: e,
  host: host_2,
  name: name_3,
  input: input_3,
  envelope: envelope_2,
  toolUseId: d,
  issuedAt: issuedAt,
  deadlineMs: deadlineMs
}) {
  let {
      [W7e]: c,
      ...input_4
    } = input_3,
    envelope_3 = envelope_2;
  if (!("op" in envelope_2) && "caller" in envelope_2) {
    let {
      [WFn]: b,
      ...caller
    } = envelope_2.caller;
    envelope_3 = {
      ...envelope_2,
      caller: caller
    };
  }
  return {
    instance_id: e,
    host: Hu(host_2, S),
    name: name_3,
    input: input_4,
    envelope: envelope_3,
    tool_use_id: d,
    issued_at: Math.max(0, Math.trunc(issuedAt)),
    deadline_ms: Yq(deadlineMs)
  };
}
var Pn = p(() => u({
  instance_id: o().regex($Ce),
  host: o().max(S),
  name: o().min(1).max(64),
  args: me(o(), oe()),
  issued_at: E().int().nonnegative().max(H),
  deadline_ms: E().int().positive().max(max)
}));
function iGi(e) {
  let n = Pn().safeParse(e),
    name_4 = n.success ? h(n.data.name) : "";
  return n.success && name_4 !== "" ? {
    ...n.data,
    host: Hu(n.data.host, S),
    name: name_4
  } : void 0;
}
function aGi({
  instanceId: e,
  host: host_3,
  name: name_5,
  args: args,
  issuedAt: issuedAt_2,
  deadlineMs: deadlineMs_2
}) {
  return {
    instance_id: e,
    host: Hu(host_3, S),
    name: name_5,
    args: args,
    issued_at: Math.max(0, Math.trunc(issuedAt_2)),
    deadline_ms: Yq(deadlineMs_2)
  };
}
function qq(e) {
  let n = R(e);
  if (!n) return {
    content: [],
    isError: !0,
    envelope: {
      status: "malformed"
    }
  };
  return {
    content: Un(n.content),
    isError: n.isError === !0,
    envelope: In(ge(n.structuredContent) ?? ge(n._meta))
  };
}
function ge(e) {
  let n = R(e);
  return n && x1 in n ? n : void 0;
}
function In(e) {
  if (!e) return {
    status: "absent"
  };
  let envelope_4 = En(e[x1]);
  return envelope_4 ? {
    status: "present",
    envelope: envelope_4
  } : {
    status: "malformed"
  };
}
function GFn(e) {
  if (typeof e === "string") return e;
  return e.map(item => {
    switch (item.type) {
      case "text":
        return {
          type: "text",
          text: item.text
        };
      case "image":
        return item.source.type === "base64" ? {
          type: "image",
          source: {
            type: "base64",
            media_type: item.source.media_type,
            data: item.source.data
          }
        } : {
          type: "text",
          text: _(item)
        };
      default:
        return {
          type: "text",
          text: _(item)
        };
    }
  });
}
function P1({
  envelope: envelope_5,
  content: content
}) {
  let isError = envelope_5.outcome === "refused" || envelope_5.outcome === "failed" || envelope_5.outcome === "completed" && envelope_5.is_error,
    a = Ie(envelope_5);
  return {
    content: jn(GFn(content)),
    structuredContent: {
      [x1]: a
    },
    isError: isError,
    ...(isError && {
      _meta: {
        [x1]: a
      }
    })
  };
}
function Ie(e) {
  let target = Ze(e.target),
    r = "notes" in e && e.notes !== void 0 && {
      notes: e.notes.slice(0, xgo).map(item => Hu(item))
    };
  switch (e.outcome) {
    case "completed":
      return {
        ...e,
        target: target,
        ...r
      };
    case "refused":
    case "failed":
      return {
        ...e,
        target: target,
        message: Hu(e.message),
        ...r
      };
    case "needs_approval":
      {
        let {
          auto_mode: auto_mode_2,
          ...s
        } = e;
        return {
          ...s,
          target: target,
          tool: Hu(e.tool, ne),
          message: Hu(e.message),
          ...(e.decision_reason !== void 0 && {
            decision_reason: Hu(e.decision_reason)
          }),
          ...(e.suggestions !== void 0 && {
            suggestions: e.suggestions.slice(0, he).map(item => Hu(item, Ee))
          }),
          ...hn(auto_mode_2),
          ...(e.elicitation !== void 0 && {
            elicitation: h({
              ...e.elicitation,
              message: Hu(e.elicitation.message)
            })
          }),
          ...(e.notes !== void 0 && {
            notes: e.notes.slice(0, be).map(item => Hu(item, We))
          })
        };
      }
    case "acknowledged":
    case "in_progress":
      return {
        ...e,
        target: target
      };
  }
}
function Yq(e) {
  if (Number.isNaN(e) || e < 1) return 1;
  return Math.min(Math.floor(e), max);
}
function HS(e) {
  return Buffer.byteLength(_(e), "utf8");
}
function Ce(e) {
  let n = R(e)?.v;
  return typeof n === "number" && n !== v_2;
}
function M(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function R(e) {
  return M(e) ? e : void 0;
}
var Cn = 2048;
function Ln(e) {
  let n = new Set(),
    r = s => Array.isArray(s) ? s.filter(item => typeof item === "string") : [],
    a = (s, d) => {
      if (n.has(s)) return [];
      if (d > aCr || n.size >= Cn) return;
      n.add(s);
      let m = K(s, e),
        g = [s.dependentRequired, s.dependentSchemas, s.dependencies].filter(M).flatMap(item => Object.values(item)),
        y = [...(m !== s ? [m] : []), ...F.flatMap(item => {
          let b = s[item];
          return Array.isArray(b) ? b : [];
        }), s.if, s.then, s.else, ...g].filter(M).map(item => a(item, d + 1));
      return y.some(item => item === void 0) ? void 0 : [...r(s.required), ...g.flatMap(r), ...y.flatMap(item => item ?? [])];
    };
  return a(e, 0);
}
function Dn(e, n) {
  return e.split(/[^A-Za-z0-9_.-]+/).includes(n);
}
var Hn = p(() => u({
    type: T("text"),
    text: o()
  })),
  Vn = p(() => u({
    type: T("image"),
    data: o(),
    mimeType: B(Se)
  }));
function Un(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return [];
  return e.map(item => {
    let r = Hn().safeParse(item);
    if (r.success) return {
      type: "text",
      text: r.data.text
    };
    let a = Vn().safeParse(item);
    if (a.success) return {
      type: "image",
      source: {
        type: "base64",
        media_type: a.data.mimeType,
        data: a.data.data
      }
    };
    let s = R(item)?.type;
    return {
      type: "text",
      text: `[${typeof s === "string" ? Hu(h(s), S) : s === void 0 ? "unknown" : typeof s} content omitted]`
    };
  });
}
function jn(text) {
  if (typeof text === "string") return [{
    type: "text",
    text: text
  }];
  return text.map(item => item.type === "text" ? {
    type: "text",
    text: item.text
  } : {
    type: "image",
    data: item.source.data,
    mimeType: item.source.media_type
  });
}
export { uO, Sgo, jTr, Sht, Wtn, WTr, v_2 as vf, wht, UFn, zTr, Vzi, nEs, jGe, BFn, GTr, VTr, KTr, qTr, jFn, Kzi, YTr, XTr, JTr, qzi, wgo, kgo, vgo, Ego, ztn, $Ce, Tgo, QTr, Gtn, Cgo, Vtn, OL, kht, Ktn, Rgo, WFn, Yzi, Ago, Xzi, qtn, W7e, Ytn, rEs, zFn, x1, Jzi, Qzi, rNe, xgo, oEs, INt, ZTr, Xtn, sEs, Pgo, MNt, WGe, eCr, Ogo, Hu, iEs, tCr, aEs, Zzi, z7e, nCr, eGi, DNt, zGe, Igo, lEs, dEs, rCr, tGi, nGi, oCr, rGi, Mgo, cEs, sCr, iCr, aCr, oGi, Dgo, sGi, iGi, aGi, qq, GFn, P1, Yq, HS };