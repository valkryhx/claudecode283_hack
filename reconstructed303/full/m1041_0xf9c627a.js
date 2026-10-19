// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  Hc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c,
  pe
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  Hwe,
  _ct,
  jZt,
  B9,
  uN,
  Rkr,
  bUe,
  bct,
  yks,
  _ks,
  bks,
  dH,
  fa
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  ybe,
  qV,
  Y$,
  rst
} from "B:/~BUN/root/chunk-qc6mvzn1.js";
import {
  iTt,
  Zqe,
  eKe,
  uot
} from "B:/~BUN/root/chunk-pe8p3pbg.js";
import {
  IC
} from "B:/~BUN/root/chunk-46bqx6b8.js";
var l = new z(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1
}));

function n() {
  return l.of(j().host)
}

function Qqe(t, e = Date.now()) {
  return Zqe(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1000 > e && !Rkr(e) && bUe(e) === void 0 && !uN() && _ct()
}

function a(t, e = Date.now()) {
  let o = _ks(e);
  return iTt() && t.status !== "rejected" && o !== void 0 && !u(o) && !Rkr(e) && bUe(e) === void 0 && _ct()
}

function u(t) {
  let e = ybe();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0
  }
}

function vts(t) {
  if (t.lowPriorityOffer === void 0 || !Zqe(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = n();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, i("tengu_lowpri_offer_capable", {
    arm: c(t.lowPriorityOffer),
    tier: c(eKe()),
    limit_type: pe(t.rateLimitType) ?? void 0,
    auto_armed: qV(),
    client_enabled: _ct(),
    config_version: jZt()
  });
  if (t.lowPriorityOffer === "treatment" && bUe() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, i("tengu_lowpri_offer_withheld", {
    arm: c(t.lowPriorityOffer),
    reason: c("cooloff"),
    client_enabled: _ct(),
    config_version: jZt()
  })
}

function b4t(t, e) {
  let o = t.resetsAt ?? null,
    r = n();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, i("tengu_lowpri_offer_shown", {
    arm: pe(t.lowPriorityOffer) ?? void 0,
    surface: c(e),
    config_version: jZt()
  })
}

function S4t(t) {
  let e = fa();
  if (Qqe(e) && e.resetsAt !== void 0) {
    if (Y$("low_priority"), s(), !yks({
        resetsAtSeconds: e.resetsAt,
        arm: e.lowPriorityOffer,
        entry: t,
        retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
        maxWaitSeconds: e.lowPriorityMaxWaitSeconds
      })) return "unavailable";
    return uot(), "accepted"
  }
  if (a(e)) {
    let o = qV();
    if (o) Y$("low_priority");
    if (s(), !bks(t)) return "unavailable";
    if (o) uot();
    return "resumed"
  }
  return "unavailable"
}

function w4t(t) {
  let e = bct(),
    o = e.phase === "active" ? IC(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t==="resumed"?`Lower-priority mode is back on ${r}`:`Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${Hwe} to stop.`
}

function v4t(t = Date.now()) {
  if (Rkr(t)) return `${B9().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = bUe(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${IC(Math.ceil(e/1000))??"later"}, after waiting too long for spare capacity. Try /${Hwe} again then.`;
  return "Lower-priority mode isn't available right now."
}

function kts() {
  let t = fa();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${Qqe(t)||a(t)?`; run /${Hwe} again to turn it back on`:""}.`
}

function s() {
  let t = n();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = !0, Hc((e, o) => {
    if (rst(o)) dH("conversation_reset")
  })
}
export {
  Qqe,
  vts,
  b4t,
  S4t,
  w4t,
  v4t,
  kts
};
