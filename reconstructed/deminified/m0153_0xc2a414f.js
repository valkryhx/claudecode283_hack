// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { nr, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { HI } from "B:/~BUN/root/chunk-290k5gh5.js";
import { Xt } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { Mo } from "B:/~BUN/root/chunk-4py062qg.js";
var tMr = ["unrestricted", "small", "medium", "large"],
  s = "medium",
  u = "small";
function kLt(e) {
  return tMr.find(item => item === e);
}
var n = {
  small: 5,
  medium: 10,
  large: 50
};
function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}
function nMr(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function iPo(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale.";
}
function aPo(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function lPo(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function acn() {
  return a.CLAUDE_CODE_DISABLE_WORKFLOWS || HI()?.settings.disableWorkflows === !0;
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = m(), this.cached;
  }
}
var p = new q(() => new w());
function Qp() {
  return rMr() === void 0;
}
function rMr() {
  let e = acn(),
    o = e && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && Mo("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!ccn()) return "org_policy";
  let {
    available: available,
    defaultOn: defaultOn
  } = i();
  if (!available) return "unavailable";
  if (!(HI()?.settings.enableWorkflows ?? defaultOn)) {
    let source = Mo("enableWorkflows", defaultOn).source;
    return source === "userSettings" || source === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function oMr() {
  return i().defaultOn;
}
function mte() {
  return nr() === "pro" ? u : s;
}
function lcn() {
  return ccn() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && i().available;
}
function ELt() {
  return HI()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function ccn() {
  return Xt("allow_workflows");
}
function cPo() {
  if (acn() || !ccn()) return !0;
  if (HI()?.settings.enableWorkflows === !1) return !0;
  return a.CLAUDE_CODE_WORKFLOWS === !1 || !x("tengu_workflows_enabled", !0);
}
function i() {
  return p.of(j().host).resolve();
}
function m() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = x("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!x("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: nr() !== "pro"
  };
}
function sMr() {
  return x("tengu_jade_compass", !0);
}
export { tMr, kLt, nMr, iPo, aPo, lPo, acn, Qp, rMr, oMr, mte, lcn, ELt, ccn, cPo, sMr };