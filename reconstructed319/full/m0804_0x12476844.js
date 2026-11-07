// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kG,
  k7,
  Jp,
  w$e,
  B2s,
  eIo,
  FKn,
  Yxe,
  aWt,
  tIo,
  HKn,
  zwt,
  Wcn,
  E$r,
  cne,
  zcn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  R$t,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  hbr
} from "B:/~BUN/root/chunk-0jhmwh3q.js";
import {
  nQ
} from "B:/~BUN/root/chunk-2pgxjz0y.js";
import {
  pA
} from "B:/~BUN/root/chunk-p77fkpvc.js";
var A = import.meta.require("B:/~BUN/root/chunk-zgm8xzys.js"),
  k = 60,
  ait = 3600,
  D = 600000,
  P = 1200,
  O = 1;

function f_n(e, o) {
  l("tengu_loop_ended", {
    reason: f(e),
    ...o
  }), E$r(!0), Wcn()
}

function qni() {
  let e = i.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return v("tengu_kairos_loop_keepalive", !1)
}

function Yni(e, o, n, a, r) {
  return C(e, o, {
    viaKeepalive: !1,
    reason: n,
    toolUseId: a,
    owner: {
      caller: r
    }
  })
}

function Xni(e, o) {
  if (tIo() >= O) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), f_n("model_stopped", {
    via_keepalive: !0
  }), null;
  return C(P, e, {
    viaKeepalive: !0,
    owner: {
      rearmedFor: o
    }
  })
}

function KGo() {
  E$r(!1), Wcn()
}

function Jni() {
  let e = zwt(),
    o = Jp().filter((a) => a.kind === "loop"),
    n = Yxe();
  if (aWt(null), HKn(0), cne(o.map((a) => a.id)), o.length === 0) M();
  for (let a of o) FKn(a.prompt);
  if (n !== null) FKn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n!==null?", tick in flight":""})`), f_n("model_stopped", {
    via_keepalive: !1
  }), g("loop_schedule_wakeup"), o.length
}

function C(e, o, n) {
  let {
    viaKeepalive: a,
    reason: r,
    toolUseId: u,
    owner: d
  } = n;
  if (!a) HKn(0);
  let p = I(),
    m = Date.now(),
    s = B2s(o),
    E = s !== void 0 && m > s.lastScheduledFor + ait * 1000,
    _ = s === void 0 || E ? m : s.startedAt,
    b = nQ().recurringMaxAgeMs;
  if (b > 0 && m - _ >= b) {
    if (!s?.agedOut) eIo(o, {
      startedAt: _,
      lastScheduledFor: m - (ait - k) * 1000,
      agedOut: !0
    }), l("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: m - _,
      max_age_ms: b
    }), f_n("aged_out", {
      via_keepalive: a
    }), c("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null
  }
  let {
    clamped: h,
    wasClamped: L,
    targetMs: S,
    createdAt: F
  } = x(e);
  if (w({
      targetMs: S,
      createdAt: F,
      prompt: o,
      reason: r,
      chainStartedAt: _,
      viaKeepalive: a,
      toolUseId: u,
      owner: d
    }), a) return HKn(tIo() + 1), t(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`), l("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: h,
    prompt_is_sentinel: A.isLoopDefaultSentinel(o)
  }), c("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: S,
    clampedDelaySeconds: h,
    wasClamped: L
  };
  return t(`[loop] dynamic wakeup scheduled: ${h}s${L?` (clamped from ${e}s)`:""}${r!==void 0?` \u2014 ${r}`:""}`), l("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: h,
    was_clamped: L,
    reason_length: r?.length ?? 0,
    superseded_count: p
  }), g("loop_schedule_wakeup"), {
    scheduledFor: S,
    clampedDelaySeconds: h,
    wasClamped: L
  }
}

function Qni({
  scheduledFor: e,
  prompt: o,
  reason: n,
  chainStartedAt: a,
  plugin: r
}) {
  let u = Date.now();
  if (e <= u || jG()) return;
  w({
    targetMs: e,
    createdAt: Math.max(u, e - 60000),
    prompt: o,
    reason: n,
    chainStartedAt: Math.min(a, u),
    viaKeepalive: !1,
    toolUseId: void 0,
    owner: {
      rearmedFor: r
    }
  }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`)
}

function w({
  targetMs: e,
  createdAt: o,
  prompt: n,
  reason: a,
  chainStartedAt: r,
  viaKeepalive: u,
  toolUseId: d,
  owner: p
}) {
  let m = "rearmedFor" in p ? p.rearmedFor : R$t(p.caller),
    s = new Date(e);
  if (w$e({
      id: y(),
      cron: `${s.getMinutes()} ${s.getHours()} * * *`,
      prompt: n,
      createdAt: o,
      kind: "loop",
      scheduledFor: e,
      reason: a,
      ...u && {
        keepalive: !0
      },
      ...m !== void 0 && {
        plugin: m
      }
    }), eIo(n, {
      startedAt: r,
      lastScheduledFor: e
    }), k7(!0), E$r(!1), d !== void 0) zcn({
    toolUseId: d,
    scheduledFor: e,
    chainStartedAt: r
  })
}

function x(e) {
  let o;
  if (Number.isNaN(e)) o = k;
  else if (e === 1 / 0) o = ait;
  else if (e === -1 / 0) o = k;
  else o = Math.round(e);
  let n = Math.max(k, Math.min(ait, o)),
    a = !Number.isFinite(e) || o !== n,
    r = Date.now(),
    u = r + n * 1000,
    d = T(u),
    p = nQ().cacheLeadMs;
  if (p > 0 && n * 1000 <= hbr) {
    let s = hbr - p;
    while (d - r > s && d - 60000 >= r + k * 1000) d -= 60000
  }
  if (p > 0) {
    let s = kG() ?? r,
      _ = (r - s <= D ? Math.min(r, s) : r) + pA - p;
    while (d > _ && d - 60000 >= r + k * 1000) d -= 60000
  }
  let m = u < d ? u : d - 1;
  return {
    clamped: n,
    wasClamped: a,
    targetMs: d,
    createdAt: m
  }
}

function T(e) {
  return Math.ceil(e / 60000) * 60000
}

function y() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0")
}

function I() {
  let e = Jp().filter((o) => o.kind === "loop").map((o) => o.id);
  if (e.length === 0) return 0;
  return cne(e)
}

function M() {
  zcn(void 0)
}

function jG() {
  return Jp().some((e) => e.kind === "loop")
}

function bqr() {
  let e = Jp().filter((n) => n.kind === "loop"),
    o = Yxe();
  if (aWt(null), HKn(0), e.length === 0) M();
  if (e.length === 0 && o === null) return 0;
  cne(e.map((n) => n.id));
  for (let n of e) FKn(n.prompt);
  if (o !== null) FKn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o!==null?" (tick in flight)":""}`), f_n("user_abort", {
    loops_cancelled: e.length
  }), g("loop_cancel_all"), e.length
}
export {
  ait,
  f_n,
  qni,
  Yni,
  Xni,
  KGo,
  Jni,
  Qni,
  jG,
  bqr
};
