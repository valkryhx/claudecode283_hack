// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Gf, uP, js } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { wt, iJ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Rr, kl } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { CPe } from "B:/~BUN/root/chunk-351qj2sm.js";
import { Vq, d5e, X6, ufe, Gct, Vct, Qwe, c5e, WMt } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { XCn } from "B:/~BUN/root/chunk-f7af67wc.js";
import { Mn } from "B:/~BUN/root/chunk-j0ghr71r.js";
function uXr(o, n = !1) {
  return `${Gct(o)} Run ${Vct(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function pot(o, n, f, u, t = !0, m = !1, s = []) {
  let remote = kl(),
    advisorModel = o === "off" ? void 0 : Mn(o),
    d = advisorModel === void 0 || d5e(advisorModel);
  if (i("tengu_advisor_command", {
    advisor: advisorModel === void 0 ? b("off") : d ? wt(o) : ufe(advisorModel) ? b("consent_pending") : b("invalid"),
    remote: remote
  }), !remote && Rr()) return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let c = remote ? " (this session only)" : t ? "" : " for this session \u2014 run /advisor in the terminal to change your default";
  if (advisorModel === void 0) {
    if (f(r => r.advisorModel === void 0 ? r : {
      ...r,
      advisorModel: void 0
    }), remote) Rr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        advisorModel: null
      }
    }).catch(l);else if (S(""), t) In("userSettings", {
      advisorModel: void 0
    }, void 0, u);
    return `Advisor disabled${c}${h(s, void 0, n)}`;
  }
  if (!d) {
    if (ufe(advisorModel)) return uXr(advisorModel, m);
    let r = [...X6(), "off"].join(", ");
    return `${pn(iJ(advisorModel))} cannot be used as an advisor. Valid options: ${r}`;
  }
  if (f(r => r.advisorModel === advisorModel ? r : {
    ...r,
    advisorModel: advisorModel
  }), remote) Rr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      advisorModel: advisorModel
    }
  }).catch(l);else if (S(advisorModel), t) In("userSettings", {
    advisorModel: advisorModel
  }, void 0, u);
  let p = pn(iJ(advisorModel)),
    v = pn(iJ(n)),
    g = `Advisor set to ${p}${c}`;
  if (!Vq(n)) g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;else if (!Qwe(n, advisorModel)) g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(s, advisorModel, n);
}
function h(o, n, f) {
  let u = js(),
    t = u.advisorHeld ?? XCn(WMt(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = CPe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== !0 && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !y(n, t.model) ? `
The current conversation keeps ${pn(iJ(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let s = WMt(o),
    a = s !== void 0 && !s.available && s.toolChange && !s.byBase,
    e = t.standby === !0 && s === void 0,
    d = a || e ? void 0 : t.model;
  if (d === n || d !== void 0 && n !== void 0 && y(n, d)) return "";
  return `
The current conversation ${d === void 0 ? "runs without the advisor" : `keeps ${pn(iJ(d))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function y(o, n) {
  return c5e(o, n);
}
function S(advisorModel_2) {
  uP({
    ...(Gf() ?? {}),
    advisorModel: advisorModel_2
  });
}
export { uXr, pot };