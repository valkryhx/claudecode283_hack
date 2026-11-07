// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { kG, k7, Jp, w$e, B2s, eIo, FKn, Yxe, aWt, tIo, HKn, zwt, Wcn, E$r, cne, zcn } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { R$t, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { hbr } from "B:/~BUN/root/chunk-0jhmwh3q.js";
import { nQ } from "B:/~BUN/root/chunk-2pgxjz0y.js";
import { pA } from "B:/~BUN/root/chunk-p77fkpvc.js";
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
  }), E$r(!0), Wcn();
}
function qni() {
  let CLAUDE_CODE_LOOP_KEEPALIVE = i.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (CLAUDE_CODE_LOOP_KEEPALIVE !== void 0) return CLAUDE_CODE_LOOP_KEEPALIVE;
  return v("tengu_kairos_loop_keepalive", !1);
}
function Yni(e, o, reason, toolUseId, caller) {
  return C(e, o, {
    viaKeepalive: !1,
    reason: reason,
    toolUseId: toolUseId,
    owner: {
      caller: caller
    }
  });
}
function Xni(e, rearmedFor) {
  if (tIo() >= O) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), f_n("model_stopped", {
    via_keepalive: !0
  }), null;
  return C(P, e, {
    viaKeepalive: !0,
    owner: {
      rearmedFor: rearmedFor
    }
  });
}
function KGo() {
  E$r(!1), Wcn();
}
function Jni() {
  let e = zwt(),
    o = Jp().filter(item => item.kind === "loop"),
    n = Yxe();
  if (aWt(null), HKn(0), cne(o.map(item => item.id)), o.length === 0) M();
  for (let a of o) FKn(a.prompt);
  if (n !== null) FKn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`), f_n("model_stopped", {
    via_keepalive: !1
  }), g("loop_schedule_wakeup"), o.length;
}
function C(e, prompt, n) {
  let {
    viaKeepalive: a,
    reason: reason_2,
    toolUseId: toolUseId_2,
    owner: owner
  } = n;
  if (!a) HKn(0);
  let superseded_count = I(),
    m = Date.now(),
    s = B2s(prompt),
    E = s !== void 0 && m > s.lastScheduledFor + ait * 1000,
    _ = s === void 0 || E ? m : s.startedAt,
    b = nQ().recurringMaxAgeMs;
  if (b > 0 && m - _ >= b) {
    if (!s?.agedOut) eIo(prompt, {
      startedAt: _,
      lastScheduledFor: m - (ait - k) * 1000,
      agedOut: !0
    }), l("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: m - _,
      max_age_ms: b
    }), f_n("aged_out", {
      via_keepalive: a
    }), c("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let {
    clamped: h,
    wasClamped: L,
    targetMs: S,
    createdAt: createdAt
  } = x(e);
  if (w({
    targetMs: S,
    createdAt: createdAt,
    prompt: prompt,
    reason: reason_2,
    chainStartedAt: _,
    viaKeepalive: a,
    toolUseId: toolUseId_2,
    owner: owner
  }), a) return HKn(tIo() + 1), t(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`), l("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: h,
    prompt_is_sentinel: A.isLoopDefaultSentinel(prompt)
  }), c("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: S,
    clampedDelaySeconds: h,
    wasClamped: L
  };
  return t(`[loop] dynamic wakeup scheduled: ${h}s${L ? ` (clamped from ${e}s)` : ""}${reason_2 !== void 0 ? ` \u2014 ${reason_2}` : ""}`), l("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: h,
    was_clamped: L,
    reason_length: reason_2?.length ?? 0,
    superseded_count: superseded_count
  }), g("loop_schedule_wakeup"), {
    scheduledFor: S,
    clampedDelaySeconds: h,
    wasClamped: L
  };
}
function Qni({
  scheduledFor: e,
  prompt: prompt_2,
  reason: reason_3,
  chainStartedAt: chainStartedAt,
  plugin: r
}) {
  let u = Date.now();
  if (e <= u || jG()) return;
  w({
    targetMs: e,
    createdAt: Math.max(u, e - 60000),
    prompt: prompt_2,
    reason: reason_3,
    chainStartedAt: Math.min(chainStartedAt, u),
    viaKeepalive: !1,
    toolUseId: void 0,
    owner: {
      rearmedFor: r
    }
  }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`);
}
function w({
  targetMs: e,
  createdAt: createdAt_2,
  prompt: prompt_3,
  reason: reason_4,
  chainStartedAt: r,
  viaKeepalive: viaKeepalive,
  toolUseId: toolUseId_3,
  owner: owner_2
}) {
  let plugin = "rearmedFor" in owner_2 ? owner_2.rearmedFor : R$t(owner_2.caller),
    date = new Date(e);
  if (w$e({
    id: y(),
    cron: `${date.getMinutes()} ${date.getHours()} * * *`,
    prompt: prompt_3,
    createdAt: createdAt_2,
    kind: "loop",
    scheduledFor: e,
    reason: reason_4,
    ...(viaKeepalive && {
      keepalive: !0
    }),
    ...(plugin !== void 0 && {
      plugin: plugin
    })
  }), eIo(prompt_3, {
    startedAt: r,
    lastScheduledFor: e
  }), k7(!0), E$r(!1), toolUseId_3 !== void 0) zcn({
    toolUseId: toolUseId_3,
    scheduledFor: e,
    chainStartedAt: r
  });
}
function x(e) {
  let o;
  if (Number.isNaN(e)) o = k;else if (e === 1 / 0) o = ait;else if (e === -1 / 0) o = k;else o = Math.round(e);
  let clamped = Math.max(k, Math.min(ait, o)),
    wasClamped = !Number.isFinite(e) || o !== clamped,
    r = Date.now(),
    u = r + clamped * 1000,
    targetMs = T(u),
    cacheLeadMs = nQ().cacheLeadMs;
  if (cacheLeadMs > 0 && clamped * 1000 <= hbr) {
    let s = hbr - cacheLeadMs;
    while (targetMs - r > s && targetMs - 60000 >= r + k * 1000) targetMs -= 60000;
  }
  if (cacheLeadMs > 0) {
    let s = kG() ?? r,
      _ = (r - s <= D ? Math.min(r, s) : r) + pA - cacheLeadMs;
    while (targetMs > _ && targetMs - 60000 >= r + k * 1000) targetMs -= 60000;
  }
  let createdAt_3 = u < targetMs ? u : targetMs - 1;
  return {
    clamped: clamped,
    wasClamped: wasClamped,
    targetMs: targetMs,
    createdAt: createdAt_3
  };
}
function T(e) {
  return Math.ceil(e / 60000) * 60000;
}
function y() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}
function I() {
  let e = Jp().filter(item => item.kind === "loop").map(item => item.id);
  if (e.length === 0) return 0;
  return cne(e);
}
function M() {
  zcn(void 0);
}
function jG() {
  return Jp().some(item => item.kind === "loop");
}
function bqr() {
  let e = Jp().filter(item => item.kind === "loop"),
    o = Yxe();
  if (aWt(null), HKn(0), e.length === 0) M();
  if (e.length === 0 && o === null) return 0;
  cne(e.map(item => item.id));
  for (let n of e) FKn(n.prompt);
  if (o !== null) FKn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`), f_n("user_abort", {
    loops_cancelled: e.length
  }), g("loop_cancel_all"), e.length;
}
export { ait, f_n, qni, Yni, Xni, KGo, Jni, Qni, jG, bqr };