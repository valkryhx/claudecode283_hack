// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Ii } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { Vit } from "B:/~BUN/root/chunk-zr04rj0q.js";
import { C6, aa, Vo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Sie } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { gRo, GV, Ipe, vZi, DHs } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { uA } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { wQe, egt, mCs, gCs } from "B:/~BUN/root/chunk-rmd6bs96.js";
import { xBe } from "B:/~BUN/root/chunk-wv4xq162.js";
var v = 5000;
function y(e, t) {
  return t !== void 0 && !e.hasOpenReview() && bqt() === null && t();
}
class R {
  updates = new uA();
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(settings, baseline, o) {
    let owner = this.owner;
    this.owner = o, this.updates.enqueue({
      settings: settings,
      baseline: baseline
    }), owner("superseded");
  }
  settle(e) {
    this.updates.done(), this.owner(e);
  }
}
class w {
  replRequester = null;
  requesterWaiters = [];
  noConsentSurface = !1;
  stopsWhenApprovalCannotBeAsked = !1;
  standaloneDialogUnanswered = null;
  rootDrawnDialog = null;
  approvalAsks = 0;
  isApprovalWithheld = !1;
  approvalFinished = De();
  pendingReview = null;
  registerRequester(e) {
    if (this.replRequester = e, e && this.requesterWaiters.length > 0) {
      let requesterWaiters = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let o of requesterWaiters) o(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter(item => item !== e);
  }
  review(e, t, o, s) {
    return new Promise(n => {
      if (this.pendingReview) {
        this.pendingReview.supersede(t, o, n);
        return;
      }
      if (y(this, s)) {
        n("first_party_silent");
        return;
      }
      let i = new R(n);
      this.pendingReview = i, l("tengu_managed_settings_security_dialog_shown", {});
      let d;
      try {
        d = e(t, o, i.updates);
      } catch {
        d = Promise.resolve("deferred_no_consent_surface");
      }
      d.then(u => this.close(i, u), () => this.close(i, "deferred_no_consent_surface"));
    });
  }
  hasOpenReview() {
    return this.pendingReview !== null;
  }
  close(e, t) {
    if (this.pendingReview = null, t === "approved") l("tengu_managed_settings_security_dialog_accepted", {}), g("remote_managed_settings_security_check");else if (t === "rejected") l("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(t);
  }
  startupConsentRelease = null;
  fireStartupConsentRelease() {
    let startupConsentRelease = this.startupConsentRelease;
    if (startupConsentRelease) this.startupConsentRelease = null, startupConsentRelease();
  }
  consentNeededRelease = null;
  async fireConsentNeededRelease() {
    let consentNeededRelease = this.consentNeededRelease;
    if (consentNeededRelease) this.consentNeededRelease = null, await consentNeededRelease();
  }
  consentHandoffHolds = new Set();
  consentHandoffSignal = De();
  consentHandoffRevealActive = !1;
}
var C = new W(() => new w());
function r() {
  return C.of(H().host);
}
function H4o() {
  return Ii().pendingStandaloneRender !== null;
}
function mSn() {
  return r().standaloneDialogUnanswered;
}
function T6r() {
  let e = r();
  if (e.approvalAsks > 0) return "asking";
  return e.isApprovalWithheld ? "withheld" : "settled";
}
function $4o(e) {
  return r().approvalFinished.subscribe(e);
}
function D() {
  return r().rootDrawnDialog;
}
function bqt() {
  let pendingStandaloneRender = Ii().pendingStandaloneRender;
  if (pendingStandaloneRender !== null) return pendingStandaloneRender.then(() => {}, () => {});
  return D();
}
function FCt(e) {
  r().registerRequester(e);
}
function U4o(e) {
  let t = r();
  return t.startupConsentRelease = e, () => {
    if (t.startupConsentRelease === e) t.startupConsentRelease = null;
  };
}
function Rer() {
  let e = r(),
    t = Symbol("consent-handoff-hold");
  if (e.consentHandoffHolds.add(t), e.consentHandoffHolds.size === 1) e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(t) && e.consentHandoffHolds.size === 0) e.consentHandoffSignal.emit();
  };
}
function HCt() {
  return r().consentHandoffHolds.size > 0;
}
function C6r() {
  return r().consentHandoffRevealActive;
}
function B4o(e) {
  return r().consentHandoffSignal.subscribe(e);
}
function j4o(e) {
  let t = r();
  return t.consentNeededRelease = e, () => {
    if (t.consentNeededRelease === e) t.consentNeededRelease = null;
  };
}
function Sqt() {
  r().noConsentSurface = !0, DHs();
}
function W4o() {
  r().stopsWhenApprovalCannotBeAsked = !0;
}
function z4o() {
  return r().noConsentSurface;
}
async function f() {
  let e = r(),
    t,
    promise = new Promise(n => {
      t = n, e.addWaiter(n);
    }),
    s = await zt(promise, v, "managed-settings security dialog requester wait timed out").catch(() => null);
  if (s === null) e.dropWaiter(t);
  return s;
}
async function S(e, t, o) {
  let s = r(),
    n = Rer();
  try {
    for (;;) {
      if (await gCs(), s.replRequester) return await s.review(s.replRequester, e, t, o);
      if (!Ii().has(process.stdout) || (await f()) === null) return "deferred_no_consent_surface";
    }
  } finally {
    n();
  }
}
async function G4o(e, t, o, s) {
  let n = r();
  if (n.approvalAsks === 0) n.isApprovalWithheld = !1;
  if (!t || !Ipe(GV(t))) return "no_check_needed";
  if (!vZi(e, t)) return "no_check_needed";
  if (!gRo()) return n.noConsentSurface ? "deferred_no_consent_surface" : "deferred_non_interactive";
  n.approvalAsks += 1;
  let i = !0;
  try {
    let d = await A(n, e, t, o, s);
    return i = k(d), d;
  } finally {
    n.isApprovalWithheld = i, n.approvalAsks -= 1, n.approvalFinished.emit();
  }
}
function k(e) {
  switch (e) {
    case "approved":
    case "first_party_silent":
    case "superseded":
    case "no_check_needed":
      return !1;
    case "rejected":
    case "deferred_no_consent_surface":
    case "deferred_non_interactive":
      return !0;
  }
}
async function A(e, t, o, s, n) {
  let i = t.source === "consented_payload" ? t.settings : t.consentedPayload;
  if (e.replRequester) if (e.consentNeededRelease) {
    let a = null;
    try {
      a = Rer(), await e.fireConsentNeededRelease();
      let replRequester = e.replRequester;
      if (replRequester) return e.consentHandoffRevealActive = !0, await e.review(replRequester, o, i, n);
      if (Ii().has(process.stdout)) {
        let _ = await f();
        if (_) return e.consentHandoffRevealActive = !0, await e.review(_, o, i, n);
      }
      return "deferred_no_consent_surface";
    } finally {
      e.consentHandoffRevealActive = !1, a?.();
    }
  } else if (egt()) return S(o, i, n);else return e.review(e.replRequester, o, i, n);
  if (e.noConsentSurface) return "deferred_no_consent_surface";
  let d = Ii();
  if (d.has(process.stdout)) {
    e.fireStartupConsentRelease();
    let a;
    do a = await f(); while (a === null && (wQe() || mCs() < v));
    if (a) return egt() ? S(o, i, n) : e.review(a, o, i, n);
    if (egt()) return "deferred_no_consent_surface";
  }
  if (s === void 0 || e.noConsentSurface || e.stopsWhenApprovalCannotBeAsked && xBe.get().kind === "unavailable") {
    if (!e.noConsentSurface) e.standaloneDialogUnanswered = "not_asked";
    return "deferred_no_consent_surface";
  }
  if (y(e, n)) return e.standaloneDialogUnanswered = null, "first_party_silent";
  l("tengu_managed_settings_security_dialog_shown", {});
  let u = d.has(process.stdout),
    p = s(o, u, i);
  if (!u) d.claimForStandaloneRender(p);else {
    let a = p.then(() => {}, () => {});
    e.rootDrawnDialog = a, a.then(() => {
      if (e.rootDrawnDialog === a) e.rootDrawnDialog = null;
    });
  }
  let c;
  try {
    c = await p, e.standaloneDialogUnanswered = null;
  } catch (error) {
    throw e.standaloneDialogUnanswered = "closed_unanswered", m("remote_managed_settings_security_check", "dialog_unavailable"), error;
  }
  if (l(c === "approved" ? "tengu_managed_settings_security_dialog_accepted" : "tengu_managed_settings_security_dialog_rejected", {}), c === "approved") g("remote_managed_settings_security_check");
  return c;
}
var Aer = "Managed settings were not approved; exiting without applying them.",
  V4o = "Your organization's managed settings need your approval, which couldn't be asked for here. Run `claude` in a terminal and approve them, then run this command again.",
  R6r = De();
function K4o(e) {
  switch (e) {
    case "rejected":
      if (process.stderr.isTTY && !Vo()) {
        Sie();
        let t = egt() ? Vit(H()).trim() : "";
        C6(t === "" ? Aer : `${Aer}

Your message was not sent:
${t}`);
      }
      if (!Vo()) R6r.emit();
      return aa(1), !1;
    case "deferred_no_consent_surface":
      return !1;
    case "superseded":
      return !1;
    case "approved":
    case "first_party_silent":
    case "no_check_needed":
    case "deferred_non_interactive":
      return !0;
  }
}
export { H4o, mSn, T6r, $4o, bqt, FCt, U4o, Rer, HCt, C6r, B4o, j4o, Sqt, W4o, z4o, G4o, Aer, V4o, R6r, K4o };