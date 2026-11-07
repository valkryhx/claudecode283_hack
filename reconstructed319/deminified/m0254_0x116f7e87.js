// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { dr, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ij } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Ei } from "B:/~BUN/root/chunk-sgy380eg.js";
import { Bp } from "B:/~BUN/root/chunk-bvb659eh.js";
var pTs = ["unrestricted", "small", "medium", "large"],
  a = "medium",
  u = "small";
function THn(e) {
  return pTs.find(item => item === e);
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
function y2i(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function _2i(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale.";
}
function b2i(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function S2i(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function _Rr() {
  return Ayo() || ij()?.settings.disableWorkflows === !0;
}
function Ayo() {
  return i.CLAUDE_CODE_DISABLE_WORKFLOWS;
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = m(), this.cached;
  }
}
var p = new W(() => new w());
function im() {
  return mTs() === void 0;
}
function mTs() {
  if (!Bp()) return "unsupported_runtime";
  let e = _Rr(),
    o = e && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && Ei("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!SRr()) return "org_policy";
  let {
    available: available,
    defaultOn: defaultOn
  } = l();
  if (!available) return "unavailable";
  if (!(ij()?.settings.enableWorkflows ?? defaultOn)) {
    let source = Ei("enableWorkflows", defaultOn).source;
    return source === "userSettings" || source === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function hTs() {
  return l().defaultOn;
}
function VCe() {
  return dr() === "pro" ? u : a;
}
function bRr() {
  return SRr() && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && l().available;
}
function CHn() {
  return ij()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function SRr() {
  return gn("allow_workflows");
}
function w2i() {
  if (!Bp() || _Rr() || !SRr()) return !0;
  if (ij()?.settings.enableWorkflows === !1) return !0;
  return i.CLAUDE_CODE_WORKFLOWS === !1 || !v("tengu_workflows_enabled", !0);
}
function l() {
  return p.of(H().host).resolve();
}
function m() {
  if (!Bp()) return {
    available: !1,
    defaultOn: !1
  };
  if (i.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = v("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    };
  }
  if (i.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!v("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: dr() !== "pro"
  };
}
function gTs() {
  return v("tengu_jade_compass", !0);
}
export { pTs, THn, y2i, _2i, b2i, S2i, _Rr, Ayo, im, mTs, hTs, VCe, bRr, CHn, SRr, w2i, gTs };