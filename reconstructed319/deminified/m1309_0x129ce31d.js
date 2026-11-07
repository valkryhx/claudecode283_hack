// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, rf } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { mLe, X0t, lLn, Joe, RL, spo, LJe, J0t, mUi, hUi, gUi, VW } from "B:/~BUN/root/chunk-yhafkw66.js";
import { mi } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { QOe, YG, XG, $Be } from "B:/~BUN/root/chunk-dqprk713.js";
import { $he, wit, COe, rCt } from "B:/~BUN/root/chunk-stjhzzm3.js";
import { JT } from "B:/~BUN/root/chunk-yjr7e11x.js";
var a = new W(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1
}));
function i() {
  return a.of(H().host);
}
function Sit(t, e = Date.now()) {
  return wit(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1000 > e && !spo(e) && LJe(e) === void 0 && !RL() && X0t();
}
function s(t, e = Date.now()) {
  let o = hUi(e);
  return $he() && t.status !== "rejected" && o !== void 0 && !u(o) && !spo(e) && LJe(e) === void 0 && X0t();
}
function u(t) {
  let e = QOe();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0;
  }
}
function voi(t) {
  if (t.lowPriorityOffer === void 0 || !wit(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = i();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, l("tengu_lowpri_offer_capable", {
    arm: f(t.lowPriorityOffer),
    tier: f(COe()),
    limit_type: de(t.rateLimitType) ?? void 0,
    auto_armed: YG(),
    client_enabled: X0t(),
    config_version: lLn()
  });
  if (t.lowPriorityOffer === "treatment" && LJe() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, l("tengu_lowpri_offer_withheld", {
    arm: f(t.lowPriorityOffer),
    reason: f("cooloff"),
    client_enabled: X0t(),
    config_version: lLn()
  });
}
function K_n(t, e) {
  let o = t.resetsAt ?? null,
    r = i();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, l("tengu_lowpri_offer_shown", {
    arm: de(t.lowPriorityOffer) ?? void 0,
    surface: f(e),
    config_version: lLn()
  });
}
function q_n(entry) {
  let e = mi();
  if (Sit(e) && e.resetsAt !== void 0) {
    if (XG("low_priority"), n(), !mUi({
      resetsAtSeconds: e.resetsAt,
      arm: e.lowPriorityOffer,
      entry: entry,
      retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
      maxWaitSeconds: e.lowPriorityMaxWaitSeconds
    })) return "unavailable";
    return rCt(), "accepted";
  }
  if (s(e)) {
    let o = YG();
    if (o) XG("low_priority");
    if (n(), !gUi(entry)) return "unavailable";
    if (o) rCt();
    return "resumed";
  }
  return "unavailable";
}
function Y_n(t) {
  let e = J0t(),
    o = e.phase === "active" ? JT(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${mLe} to stop.`;
}
function X_n(t = Date.now()) {
  if (spo(t)) return `${Joe().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = LJe(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${JT(Math.ceil(e / 1000)) ?? "later"}, after waiting too long for spare capacity. Try /${mLe} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function Eoi() {
  let t = mi();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${Sit(t) || s(t) ? `; run /${mLe} again to turn it back on` : ""}.`;
}
function n() {
  let t = i();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = !0, rf((e, o) => {
    if ($Be(o)) VW("conversation_reset");
  });
}
export { Sit, voi, K_n, q_n, Y_n, X_n, Eoi };