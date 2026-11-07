// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Gt,
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ar
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  g
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  qD
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  xF,
  iX,
  ZZ
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  Ei
} from "B:/~BUN/root/chunk-sgy380eg.js";
import {
  Bft
} from "B:/~BUN/root/chunk-j3efez3c.js";
import {
  zCt
} from "B:/~BUN/root/chunk-yezcbz8m.js";
var c = 3,
  f = 3,
  wri = 20,
  kri = "Your Claude Code session is ready \u2014 continue from your phone anytime.";

function vri() {
  if (Ar.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) return {
    thresholdSec: 5,
    probability: 1,
    maxImpressions: -1,
    impressionKey: "force",
    dayStartHour: 0,
    dayEndHour: 24
  };
  let e = v("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90,
    n = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1,
    r = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3,
    t = typeof e.impressionKey === "string" ? e.impressionKey : "",
    a = (i, d) => typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : d,
    l = a(e.dayStartHour, 7),
    p = a(e.dayEndHour, 21);
  return {
    thresholdSec: o,
    probability: n,
    maxImpressions: r,
    impressionKey: t,
    dayStartHour: l,
    dayEndHour: p
  }
}

function Eri(e, o = new Date) {
  if (e.dayStartHour >= e.dayEndHour) return !0;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour
}

function m(e, o) {
  let n = (fe()[e] ?? 0) + 1;
  Le((r) => (r[e] ?? 0) >= n ? r : {
    ...r,
    [e]: n
  }, o)
}
var s = {
  afterPromptCount: 5,
  probability: 0,
  maxImpressions: 3
};

function Tri() {
  let e, o = Ar.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (o) try {
    e = ee(o)
  } catch {
    e = void 0
  }
  e ??= v("tengu_rc_permission_nudge", s);
  let n = (r, t) => typeof r === "number" && Number.isFinite(r) ? r : t;
  return {
    afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)),
    probability: n(e?.probability, s.probability),
    maxImpressions: n(e?.maxImpressions, s.maxImpressions)
  }
}

function n2o() {
  if (!iX()) return !1;
  let e = fe();
  return !e.hasUsedRemoteControl && !ZZ() && (e.remoteControlUpsellSeenCount ?? 0) < c
}

function Cri(e) {
  m("remoteControlUpsellSeenCount", e), g("tips_rc_upsell_show")
}

function b() {
  return fe().hasUsedRemoteControl === !0 || ZZ()
}

function r2o() {
  return o2o() && (fe().pushNotifUpsellSeenCount ?? 0) < f
}

function o2o() {
  return iX() && b() && Ei("agentPushNotifEnabled", !1).value !== !0 && zCt()
}

function Rri(e) {
  m("pushNotifUpsellSeenCount", e), g("tips_push_upsell_show")
}

function Ari(e) {
  if (!xF()) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let o = fe();
  return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions
}

function xri(e, o) {
  if (e.maxImpressions >= 0) Le((n) => {
    let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
    return {
      ...n,
      rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
      rcLongTurnNudgeSeenKey: e.impressionKey
    }
  }, o);
  g("tips_rc_long_turn_show")
}

function Pri(e) {
  if (!xF()) return !1;
  return (fe().rcPermissionNudgeSeenCount ?? 0) < e
}

function Ori(e) {
  Le((o) => ({
    ...o,
    rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1
  }), e), g("tips_rc_permission_nudge_show")
}

function Iri() {
  if (!Bft()) return null;
  let e = v("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1,
    n = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5,
    r = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return {
    probability: o,
    maxImpressions: n,
    impressionKey: r
  }
}

function Mri(e, o, n) {
  if (!o || n) return !1;
  if (Gt() || qD() != null) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let r = fe();
  return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions
}

function Dri(e, o) {
  if (e.maxImpressions >= 0) Le((n) => {
    let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
    return {
      ...n,
      remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1,
      remoteControlReadyPushKey: e.impressionKey
    }
  }, o);
  g("tips_rc_ready_push_send")
}

function C7n(e) {
  if (fe().hasUsedRemoteControl) return;
  Le((o) => o.hasUsedRemoteControl ? o : {
    ...o,
    hasUsedRemoteControl: !0
  }, e)
}
var C = ["mobile", "web", "desktop"];

function y(e) {
  switch (e) {
    case "ios":
    case "android":
      return "mobile";
    case "web_claude_ai":
      return "web";
    case "desktop_app":
      return "desktop";
    default:
      return
  }
}

function R7n(e, o) {
  let n = y(e);
  if (!n) return;
  if (u(fe()).includes(n)) return;
  Le((r) => {
    let t = u(r);
    if (t.includes(n)) return r;
    return {
      ...r,
      remoteControlSurfacesSeen: [...t, n]
    }
  }, o)
}

function s2o() {
  let e = u(fe()),
    o = e.includes("mobile"),
    n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile"
}

function u(e) {
  let o = e.remoteControlSurfacesSeen;
  return Array.isArray(o) ? o.filter((n) => C.some((r) => r === n)) : []
}
export {
  wri,
  kri,
  vri,
  Eri,
  Tri,
  n2o,
  Cri,
  r2o,
  o2o,
  Rri,
  Ari,
  xri,
  Pri,
  Ori,
  Iri,
  Mri,
  Dri,
  C7n,
  R7n,
  s2o
};
