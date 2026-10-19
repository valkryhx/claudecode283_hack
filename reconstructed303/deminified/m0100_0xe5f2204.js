// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { L, j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
var n = new Set(["hipaa"]);
class o {
  latched = new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = Me();
  verdict = void 0;
  replaceTaints(e) {
    this.current = L(e).sort();
    for (let r of e) if (n.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(e) {
    let r = !1;
    for (let i of e) if (n.has(i) && !this.latched.has(i)) this.latched.add(i), r = !0;
    if (!r) return !1;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints();
  }
  refreshEffectiveTaints() {
    let e = L([...this.latchedTaints, ...this.current]).sort();
    if (e.length === this.taints.length && e.every((item, index) => item === this.taints[index])) return !1;
    return this.taints = e, this.changed.emit(this.taints), !0;
  }
  registerVerdict(e) {
    this.verdict = e;
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = [];
  }
}
var a = new z(() => new o());
function t() {
  return a.of(j().host);
}
function gHr(e) {
  return t().replaceTaints(e);
}
function sVs(e) {
  return t().latchTaints(e);
}
function iVs(e) {
  return n.has(e);
}
function Ni(e) {
  return t().taints.includes(e);
}
function zD() {
  return t().taints;
}
function Wge() {
  return t().current;
}
function hHr() {
  return t().latchedTaints;
}
function f4(e) {
  return t().changed.subscribe(e);
}
function aVs() {
  t().resetForTesting();
}
function lVs(e) {
  t().registerVerdict(e);
}
function Rw(e) {
  return t().verdict?.isPolicyAllowed(e) ?? !1;
}
function dVs() {
  let verdict = t().verdict;
  return verdict ? verdict.rememberedCoreSkills() : [];
}
function C5n(e) {
  try {
    return t().verdict?.commandPolicyGateAllows(e) ?? !1;
  } catch {
    return !1;
  }
}
function nR(e) {
  let verdict_2 = t().verdict;
  if (!verdict_2) return "unregistered";
  return verdict_2.policyDenyKind(e);
}
function m4(e, r, i) {
  return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}
function zyt() {
  return t().verdict?.complianceTaintsSettled() ?? !1;
}
function IJ() {
  let verdict_3 = t().verdict;
  if (verdict_3 === void 0) return !1;
  try {
    return !verdict_3.policyLimitsCacheLoaded();
  } catch {
    return !0;
  }
}
function cVs() {
  let verdict_4 = t().verdict;
  if (verdict_4 === void 0) return "loaded";
  try {
    return verdict_4.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}
function d5() {
  let verdict_5 = t().verdict;
  if (verdict_5 === void 0) return !1;
  try {
    return verdict_5.policyVerdictAbsent();
  } catch {
    return !0;
  }
}
function uVs() {
  let verdict_6 = t().verdict;
  if (verdict_6 === void 0) return !1;
  try {
    return verdict_6.principalSeenUnderHipaa();
  } catch {
    return !0;
  }
}
export { gHr, sVs, iVs, Ni, zD, Wge, hHr, f4, aVs, lVs, Rw, dVs, C5n, nR, m4, zyt, IJ, cVs, d5, uVs };