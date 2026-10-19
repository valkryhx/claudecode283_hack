// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ht, E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ux } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { _x, eae } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { bs } from "B:/~BUN/root/chunk-gy660jgx.js";
import { Ife } from "B:/~BUN/root/chunk-m1mbrj05.js";
var c = 3,
  f = 3,
  wZo = 20,
  vZo = "Your Claude Code session is ready \u2014 continue from your phone anytime.";
function kZo() {
  if (or.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) return {
    thresholdSec: 5,
    probability: 1,
    maxImpressions: -1,
    impressionKey: "force",
    dayStartHour: 0,
    dayEndHour: 24
  };
  let e = E("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let thresholdSec = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90,
    probability = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1,
    maxImpressions = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3,
    impressionKey = typeof e.impressionKey === "string" ? e.impressionKey : "",
    a = (i, d) => typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : d,
    dayStartHour = a(e.dayStartHour, 7),
    dayEndHour = a(e.dayEndHour, 21);
  return {
    thresholdSec: thresholdSec,
    probability: probability,
    maxImpressions: maxImpressions,
    impressionKey: impressionKey,
    dayStartHour: dayStartHour,
    dayEndHour: dayEndHour
  };
}
function EZo(e, o = new Date()) {
  if (e.dayStartHour >= e.dayEndHour) return !0;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour;
}
function m(e, o) {
  let n = (ue()[e] ?? 0) + 1;
  Ce(r => (r[e] ?? 0) >= n ? r : {
    ...r,
    [e]: n
  }, o);
}
var s = {
  afterPromptCount: 5,
  probability: 0,
  maxImpressions: 3
};
function TZo() {
  let e,
    CLAUDE_CODE_RC_PERMISSION_NUDGE = or.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (CLAUDE_CODE_RC_PERMISSION_NUDGE) try {
    e = J(CLAUDE_CODE_RC_PERMISSION_NUDGE);
  } catch {
    e = void 0;
  }
  e ??= E("tengu_rc_permission_nudge", s);
  let n = (r, t) => typeof r === "number" && Number.isFinite(r) ? r : t;
  return {
    afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)),
    probability: n(e?.probability, s.probability),
    maxImpressions: n(e?.maxImpressions, s.maxImpressions)
  };
}
function P8r() {
  if (!_x()) return !1;
  let e = ue();
  return !e.hasUsedRemoteControl && !eae() && (e.remoteControlUpsellSeenCount ?? 0) < c;
}
function CZo(e) {
  m("remoteControlUpsellSeenCount", e), g("tips_rc_upsell_show");
}
function b() {
  return ue().hasUsedRemoteControl === !0 || eae();
}
function O8r() {
  return I8r() && (ue().pushNotifUpsellSeenCount ?? 0) < f;
}
function I8r() {
  return _x() && Ife() && b() && bs("agentPushNotifEnabled", !1).value !== !0;
}
function RZo(e) {
  m("pushNotifUpsellSeenCount", e), g("tips_push_upsell_show");
}
function AZo(e) {
  if (!_x()) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let o = ue();
  return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions;
}
function xZo(e, o) {
  if (e.maxImpressions >= 0) Ce(n => {
    let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
    return {
      ...n,
      rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
      rcLongTurnNudgeSeenKey: e.impressionKey
    };
  }, o);
  g("tips_rc_long_turn_show");
}
function PZo(e) {
  if (!_x()) return !1;
  return (ue().rcPermissionNudgeSeenCount ?? 0) < e;
}
function OZo(e) {
  Ce(o => ({
    ...o,
    rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1
  }), e), g("tips_rc_permission_nudge_show");
}
function IZo() {
  if (!Ife()) return null;
  let e = E("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let probability_2 = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1,
    maxImpressions_2 = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5,
    impressionKey_2 = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return {
    probability: probability_2,
    maxImpressions: maxImpressions_2,
    impressionKey: impressionKey_2
  };
}
function MZo(e, o, n) {
  if (!o || n) return !1;
  if (Ht() || Ux() != null) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let r = ue();
  return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions;
}
function DZo(e, o) {
  if (e.maxImpressions >= 0) Ce(n => {
    let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
    return {
      ...n,
      remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1,
      remoteControlReadyPushKey: e.impressionKey
    };
  }, o);
  g("tips_rc_ready_push_send");
}
function iKt(e) {
  if (ue().hasUsedRemoteControl) return;
  Ce(o => o.hasUsedRemoteControl ? o : {
    ...o,
    hasUsedRemoteControl: !0
  }, e);
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
      return;
  }
}
function WEn(e, o) {
  let n = y(e);
  if (!n) return;
  if (u(ue()).includes(n)) return;
  Ce(r => {
    let t = u(r);
    if (t.includes(n)) return r;
    return {
      ...r,
      remoteControlSurfacesSeen: [...t, n]
    };
  }, o);
}
function M8r() {
  let e = u(ue()),
    o = e.includes("mobile"),
    n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile";
}
function u(e) {
  let remoteControlSurfacesSeen = e.remoteControlSurfacesSeen;
  return Array.isArray(remoteControlSurfacesSeen) ? remoteControlSurfacesSeen.filter(item => C.some(r => r === item)) : [];
}
export { wZo, vZo, kZo, EZo, TZo, P8r, CZo, O8r, I8r, RZo, AZo, xZo, PZo, OZo, IZo, MZo, DZo, iKt, WEn, M8r };