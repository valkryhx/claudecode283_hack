// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { aT, jD, oi } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { xt, bq } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { lr, va } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { SB, oit, sz, R3, RKe, vae, PLe, sit, t4e } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { KKt } from "B:/~BUN/root/chunk-pxgbzn64.js";
import { Ln } from "B:/~BUN/root/chunk-r833zsf7.js";
function vsr(o, n = !1) {
  return `${RKe(o)} Run /model fable${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function LWe(o, n, u, f, t = !0, m = !1, s = []) {
  let remote = va(),
    advisorModel = o === "off" ? void 0 : Ln(o),
    a = advisorModel === void 0 || oit(advisorModel);
  if (i("tengu_advisor_command", {
    advisor: advisorModel === void 0 ? y("off") : a ? xt(o) : R3(advisorModel) ? y("consent_pending") : y("invalid"),
    remote: remote
  }), !remote && lr()) return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let c = remote ? " (this session only)" : t ? "" : " for this session \u2014 run /advisor in the terminal to change your default";
  if (advisorModel === void 0) {
    if (u(r => r.advisorModel === void 0 ? r : {
      ...r,
      advisorModel: void 0
    }), remote) lr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        advisorModel: null
      }
    }).catch(d);else if (b(""), t) ln("userSettings", {
      advisorModel: void 0
    }, void 0, f);
    return `Advisor disabled${c}${h(s, void 0, n)}`;
  }
  if (!a) {
    if (R3(advisorModel)) return vsr(advisorModel, m);
    let r = [...sz(), "off"].join(", ");
    return `${wt(bq(advisorModel))} cannot be used as an advisor. Valid options: ${r}`;
  }
  if (u(r => r.advisorModel === advisorModel ? r : {
    ...r,
    advisorModel: advisorModel
  }), remote) lr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      advisorModel: advisorModel
    }
  }).catch(d);else if (b(advisorModel), t) ln("userSettings", {
    advisorModel: advisorModel
  }, void 0, f);
  let v = wt(bq(advisorModel)),
    g = wt(bq(n)),
    p = `Advisor set to ${v}${c}`;
  if (!SB(n)) p += `
Note: the current main model (${g}) does not support the advisor. It will activate when you switch to a supported main model.`;else if (!vae(n, advisorModel)) p += `
Note: ${v} is less capable than the current main model (${g}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return p + h(s, advisorModel, n);
}
function h(o, n, u) {
  let f = oi(),
    t = f.advisorHeld ?? KKt(sit(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = t4e(f, u);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== !0 && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !S(n, t.model) ? `
The current conversation keeps ${wt(bq(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let s = sit(o),
    l = s !== void 0 && !s.available && s.toolChange && !s.byBase,
    e = t.standby === !0 && s === void 0,
    a = l || e ? void 0 : t.model;
  if (a === n || a !== void 0 && n !== void 0 && S(n, a)) return "";
  return `
The current conversation ${a === void 0 ? "runs without the advisor" : `keeps ${wt(bq(a))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function S(o, n) {
  return PLe(o, n);
}
function b(advisorModel_2) {
  jD({
    ...(aT() ?? {}),
    advisorModel: advisorModel_2
  });
}
export { vsr, LWe };