// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  s1,
  Tm,
  qTe,
  J2o,
  mjr,
  Ggn,
  mye,
  bSt,
  gjr,
  Vgn,
  qgn,
  Yjt,
  zJn,
  Q5,
  Xjt
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Kjn
} from "B:/~BUN/root/chunk-89m6ef17.js";
import {
  kY
} from "B:/~BUN/root/chunk-xq3mrr67.js";
var A = import.meta.require("B:/~BUN/root/chunk-5bmx46mc.js"),
  _ = 60,
  Rqe = 3600,
  x = 1200,
  P = 1;

function b(e, o) {
  i("tengu_loop_ended", {
    reason: c(e),
    ...o
  }), zJn(!0), Yjt()
}

function uZo() {
  let e = a.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return E("tengu_kairos_loop_keepalive", !0)
}

function pZo(e, o, n, r) {
  return C(e, o, {
    viaKeepalive: !1,
    reason: n,
    toolUseId: r
  })
}

function fZo(e) {
  if (gjr() >= P) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), b("model_stopped", {
    via_keepalive: !0
  }), null;
  return C(x, e, {
    viaKeepalive: !0
  })
}

function A8r() {
  zJn(!1), Yjt()
}

function mZo() {
  let e = qgn(),
    o = Tm().filter((r) => r.kind === "loop"),
    n = mye();
  if (bSt(null), Vgn(0), Q5(o.map((r) => r.id)), o.length === 0) M();
  for (let r of o) Ggn(r.prompt);
  if (n !== null) Ggn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n!==null?", tick in flight":""})`), b("model_stopped", {
    via_keepalive: !1
  }), g("loop_schedule_wakeup"), o.length
}

function C(e, o, n) {
  let {
    viaKeepalive: r,
    reason: l,
    toolUseId: u
  } = n;
  if (!r) Vgn(0);
  let s = y(),
    d = Date.now(),
    m = J2o(o),
    L = m !== void 0 && d > m.lastScheduledFor + Rqe * 1000,
    h = m === void 0 || L ? d : m.startedAt,
    v = kY().recurringMaxAgeMs;
  if (v > 0 && d - h >= v) {
    if (!m?.agedOut) mjr(o, {
      startedAt: h,
      lastScheduledFor: d - (Rqe - _) * 1000,
      agedOut: !0
    }), i("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: d - h,
      max_age_ms: v
    }), b("aged_out", {
      via_keepalive: r
    }), p("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null
  }
  let {
    clamped: f,
    wasClamped: k,
    targetMs: S,
    createdAt: D
  } = F(e);
  if (w({
      targetMs: S,
      createdAt: D,
      prompt: o,
      reason: l,
      chainStartedAt: h,
      viaKeepalive: r,
      toolUseId: u
    }), r) return Vgn(gjr() + 1), t(`[loop] keepalive armed (model did not reschedule): ${f}s fallback`), i("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: f,
    prompt_is_sentinel: A.isLoopDefaultSentinel(o)
  }), p("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: S,
    clampedDelaySeconds: f,
    wasClamped: k
  };
  return t(`[loop] dynamic wakeup scheduled: ${f}s${k?` (clamped from ${e}s)`:""}${l!==void 0?` \u2014 ${l}`:""}`), i("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: f,
    was_clamped: k,
    reason_length: l?.length ?? 0,
    superseded_count: s
  }), g("loop_schedule_wakeup"), {
    scheduledFor: S,
    clampedDelaySeconds: f,
    wasClamped: k
  }
}

function gZo({
  scheduledFor: e,
  prompt: o,
  reason: n,
  chainStartedAt: r
}) {
  let l = Date.now();
  if (e <= l || DV()) return;
  w({
    targetMs: e,
    createdAt: Math.max(l, e - 60000),
    prompt: o,
    reason: n,
    chainStartedAt: Math.min(r, l),
    viaKeepalive: !1,
    toolUseId: void 0
  }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`)
}

function w({
  targetMs: e,
  createdAt: o,
  prompt: n,
  reason: r,
  chainStartedAt: l,
  viaKeepalive: u,
  toolUseId: s
}) {
  let d = new Date(e);
  if (qTe({
      id: T(),
      cron: `${d.getMinutes()} ${d.getHours()} * * *`,
      prompt: n,
      createdAt: o,
      kind: "loop",
      scheduledFor: e,
      reason: r,
      ...u && {
        keepalive: !0
      }
    }), mjr(n, {
      startedAt: l,
      lastScheduledFor: e
    }), s1(!0), zJn(!1), s !== void 0) Xjt({
    toolUseId: s,
    scheduledFor: e,
    chainStartedAt: l
  })
}

function F(e) {
  let o;
  if (Number.isNaN(e)) o = _;
  else if (e === 1 / 0) o = Rqe;
  else if (e === -1 / 0) o = _;
  else o = Math.round(e);
  let n = Math.max(_, Math.min(Rqe, o)),
    r = !Number.isFinite(e) || o !== n,
    l = Date.now(),
    u = l + n * 1000,
    s = O(u),
    d = kY().cacheLeadMs;
  if (d > 0 && n * 1000 <= Kjn) {
    let L = Kjn - d;
    while (s - l > L && s - 60000 >= l + _ * 1000) s -= 60000
  }
  let m = u < s ? u : s - 1;
  return {
    clamped: n,
    wasClamped: r,
    targetMs: s,
    createdAt: m
  }
}

function O(e) {
  return Math.ceil(e / 60000) * 60000
}

function T() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0")
}

function y() {
  let e = Tm().filter((o) => o.kind === "loop").map((o) => o.id);
  if (e.length === 0) return 0;
  return Q5(e)
}

function M() {
  Xjt(void 0)
}

function DV() {
  return Tm().some((e) => e.kind === "loop")
}

function oir() {
  let e = Tm().filter((n) => n.kind === "loop"),
    o = mye();
  if (bSt(null), Vgn(0), e.length === 0) M();
  if (e.length === 0 && o === null) return 0;
  Q5(e.map((n) => n.id));
  for (let n of e) Ggn(n.prompt);
  if (o !== null) Ggn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o!==null?" (tick in flight)":""}`), b("user_abort", {
    loops_cancelled: e.length
  }), g("loop_cancel_all"), e.length
}
export {
  Rqe,
  uZo,
  pZo,
  fZo,
  A8r,
  mZo,
  gZo,
  DV,
  oir
};
