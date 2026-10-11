// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j,
  Qd
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  ud
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  kae,
  AKe,
  OIt,
  A3,
  WL,
  KUn,
  cEe,
  xKe,
  iwo,
  awo,
  lwo,
  GO
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  ma
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  ese,
  bG,
  _M,
  Jze
} from "B:/~BUN/root/chunk-cj9k3aj6.js";
import {
  k7e,
  r7,
  E7e,
  DWe
} from "B:/~BUN/root/chunk-kjec4t4t.js";
var l = new q(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1
}));

function n() {
  return l.of(j().host)
}

function ZIe(t, e = Date.now()) {
  return r7(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1000 > e && !KUn(e) && cEe(e) === void 0 && !WL() && AKe()
}

function a(t, e = Date.now()) {
  let o = awo(e);
  return k7e() && t.status !== "rejected" && o !== void 0 && !u(o) && !KUn(e) && cEe(e) === void 0 && AKe()
}

function u(t) {
  let e = ese();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0
  }
}

function X7r(t) {
  if (t.lowPriorityOffer === void 0 || !r7(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = n();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, i("tengu_lowpri_offer_capable", {
    arm: c(t.lowPriorityOffer),
    tier: c(E7e()),
    limit_type: ue(t.rateLimitType) ?? void 0,
    auto_armed: bG(),
    client_enabled: AKe(),
    config_version: OIt()
  });
  if (t.lowPriorityOffer === "treatment" && cEe() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, i("tengu_lowpri_offer_withheld", {
    arm: c(t.lowPriorityOffer),
    reason: c("cooloff"),
    client_enabled: AKe(),
    config_version: OIt()
  })
}

function v7e(t, e) {
  let o = t.resetsAt ?? null,
    r = n();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, i("tengu_lowpri_offer_shown", {
    arm: ue(t.lowPriorityOffer) ?? void 0,
    surface: c(e),
    config_version: OIt()
  })
}

function ASt(t) {
  let e = ma();
  if (ZIe(e) && e.resetsAt !== void 0) {
    if (_M("low_priority"), s(), !iwo({
        resetsAtSeconds: e.resetsAt,
        arm: e.lowPriorityOffer,
        entry: t,
        retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
        maxWaitSeconds: e.lowPriorityMaxWaitSeconds
      })) return "unavailable";
    return DWe(), "accepted"
  }
  if (a(e)) {
    let o = bG();
    if (o) _M("low_priority");
    if (s(), !lwo(t)) return "unavailable";
    if (o) DWe();
    return "resumed"
  }
  return "unavailable"
}

function xSt(t) {
  let e = xKe(),
    o = e.phase === "active" ? ud(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t==="resumed"?`Lower-priority mode is back on ${r}`:`Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${kae} to stop.`
}

function PSt(t = Date.now()) {
  if (KUn(t)) return `${A3().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = cEe(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${ud(Math.ceil(e/1000))??"later"}, after waiting too long for spare capacity. Try /${kae} again then.`;
  return "Lower-priority mode isn't available right now."
}

function J7r() {
  let t = ma();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${ZIe(t)||a(t)?`; run /${kae} again to turn it back on`:""}.`
}

function s() {
  let t = n();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = !0, Qd((e, o) => {
    if (Jze(o)) GO("conversation_reset")
  })
}
export {
  ZIe,
  X7r,
  v7e,
  ASt,
  xSt,
  PSt,
  J7r
};
