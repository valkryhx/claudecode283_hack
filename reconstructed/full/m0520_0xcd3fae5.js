// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  VY,
  U_,
  $de,
  sqr,
  B8n,
  bjt,
  Gmt,
  M9e,
  j8n,
  Sjt,
  iqr,
  Vmt,
  qmt,
  kyn,
  $2
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  oin
} from "B:/~BUN/root/chunk-5a1m1kxy.js";
import {
  Jbe
} from "B:/~BUN/root/chunk-4jmqaaj0.js";
var C = import.meta.require("B:/~BUN/root/chunk-hjpb3cxt.js"),
  h = 60,
  L = 3600,
  D = 1200,
  F = 1;

function S(e, o) {
  i("tengu_loop_ended", {
    reason: c(e),
    ...o
  }), kyn(!0), qmt()
}

function Otr() {
  let e = U_().find((o) => o.kind === "loop");
  if (e === void 0) return;
  return {
    at: e.scheduledFor,
    reason: e.reason,
    fires: Vmt(),
    ...e.keepalive && {
      keepalive: !0
    }
  }
}

function IXr() {
  let e = a.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return x("tengu_kairos_loop_keepalive", !0)
}

function OXr(e, o, n) {
  return M(e, o, {
    viaKeepalive: !1,
    reason: n
  })
}

function MXr(e) {
  if (j8n() >= F) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), S("model_stopped", {
    via_keepalive: !0
  }), null;
  return M(D, e, {
    viaKeepalive: !0
  })
}

function Mtr() {
  kyn(!1), qmt()
}

function DXr() {
  let e = iqr(),
    o = U_().filter((l) => l.kind === "loop"),
    n = Gmt();
  M9e(null), Sjt(0), $2(o.map((l) => l.id));
  for (let l of o) bjt(l.prompt);
  if (n !== null) bjt(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n!==null?", tick in flight":""})`), S("model_stopped", {
    via_keepalive: !1
  }), _("loop_schedule_wakeup"), o.length
}

function M(e, o, n) {
  let {
    viaKeepalive: l,
    reason: s
  } = n;
  if (!l) Sjt(0);
  let f = I(),
    r = Date.now(),
    d = sqr(o),
    v = d !== void 0 && r > d.lastScheduledFor + L * 1000,
    u = d === void 0 || v ? r : d.startedAt,
    g = Jbe().recurringMaxAgeMs;
  if (g > 0 && r - u >= g) {
    if (!d?.agedOut) B8n(o, {
      startedAt: u,
      lastScheduledFor: r - (L - h) * 1000,
      agedOut: !0
    }), i("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: r - u,
      max_age_ms: g
    }), S("aged_out", {
      via_keepalive: l
    }), p("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null
  }
  let {
    clamped: m,
    wasClamped: k,
    targetMs: b,
    createdAt: A,
    target: E
  } = P(e), w = `${E.getMinutes()} ${E.getHours()} * * *`;
  if ($de({
      id: y(),
      cron: w,
      prompt: o,
      createdAt: A,
      kind: "loop",
      scheduledFor: b,
      reason: s,
      ...l && {
        keepalive: !0
      }
    }), B8n(o, {
      startedAt: u,
      lastScheduledFor: b
    }), VY(!0), kyn(!1), l) return Sjt(j8n() + 1), t(`[loop] keepalive armed (model did not reschedule): ${m}s fallback`), i("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: m,
    prompt_is_sentinel: C.isLoopDefaultSentinel(o)
  }), p("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: b,
    clampedDelaySeconds: m,
    wasClamped: k
  };
  return t(`[loop] dynamic wakeup scheduled: ${m}s${k?` (clamped from ${e}s)`:""}${s!==void 0?` \u2014 ${s}`:""}`), i("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: m,
    was_clamped: k,
    reason_length: s?.length ?? 0,
    superseded_count: f
  }), _("loop_schedule_wakeup"), {
    scheduledFor: b,
    clampedDelaySeconds: m,
    wasClamped: k
  }
}

function P(e) {
  let o;
  if (Number.isNaN(e)) o = h;
  else if (e === 1 / 0) o = L;
  else if (e === -1 / 0) o = h;
  else o = Math.round(e);
  let n = Math.max(h, Math.min(L, o)),
    l = !Number.isFinite(e) || o !== n,
    s = Date.now(),
    f = s + n * 1000,
    r = T(f),
    d = Jbe().cacheLeadMs;
  if (d > 0 && n * 1000 <= oin) {
    let g = oin - d;
    while (r - s > g && r - 60000 >= s + h * 1000) r -= 60000
  }
  let v = new Date(r),
    u = f < r ? f : r - 1;
  return {
    clamped: n,
    wasClamped: l,
    targetMs: r,
    createdAt: u,
    target: v
  }
}

function T(e) {
  let o = new Date(e);
  if (o.getSeconds() > 0 || o.getMilliseconds() > 0) o.setMinutes(o.getMinutes() + 1);
  return o.setSeconds(0, 0), o.getTime()
}

function y() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0")
}

function I() {
  let e = U_().filter((o) => o.kind === "loop").map((o) => o.id);
  if (e.length === 0) return 0;
  return $2(e)
}

function Bue() {
  return U_().some((e) => e.kind === "loop")
}

function Ukn() {
  let e = U_().filter((n) => n.kind === "loop"),
    o = Gmt();
  if (M9e(null), Sjt(0), e.length === 0 && o === null) return 0;
  $2(e.map((n) => n.id));
  for (let n of e) bjt(n.prompt);
  if (o !== null) bjt(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o!==null?" (tick in flight)":""}`), S("user_abort", {
    loops_cancelled: e.length
  }), _("loop_cancel_all"), e.length
}
export {
  Otr,
  IXr,
  OXr,
  MXr,
  Mtr,
  DXr,
  Bue,
  Ukn
};
