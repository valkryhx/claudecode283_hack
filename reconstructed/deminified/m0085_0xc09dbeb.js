// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
var n = new Set(["hipaa"]);
class o {
  latched = new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = Me();
  verdict = void 0;
  replaceTaints(t) {
    this.current = L(t).sort();
    for (let i of t) if (n.has(i)) this.latched.add(i);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(t) {
    let i = !1;
    for (let r of t) if (n.has(r) && !this.latched.has(r)) this.latched.add(r), i = !0;
    if (!i) return !1;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints();
  }
  refreshEffectiveTaints() {
    let t = L([...this.latchedTaints, ...this.current]).sort();
    if (t.length === this.taints.length && t.every((item, index) => item === this.taints[index])) return !1;
    return this.taints = t, this.changed.emit(this.taints), !0;
  }
  registerVerdict(t) {
    this.verdict = t;
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = [];
  }
}
var a = new q(() => new o());
function e() {
  return a.of(j().host);
}
function E3n(t) {
  return e().replaceTaints(t);
}
function UNo(t) {
  return e().latchTaints(t);
}
function BNo(t) {
  return n.has(t);
}
function Uc(t) {
  return e().taints.includes(t);
}
function f$() {
  return e().taints;
}
function lAe() {
  return e().current;
}
function T3n() {
  return e().latchedTaints;
}
function aY(t) {
  return e().changed.subscribe(t);
}
function jNo() {
  e().resetForTesting();
}
function WNo(t) {
  e().registerVerdict(t);
}
function z0(t) {
  return e().verdict?.isPolicyAllowed(t) ?? !1;
}
function zNo(t) {
  try {
    return e().verdict?.commandPolicyGateAllows(t) ?? !1;
  } catch {
    return !1;
  }
}
function Bq(t) {
  let verdict = e().verdict;
  if (!verdict) return "unregistered";
  return verdict.policyDenyKind(t);
}
function Aye(t, i, r) {
  return e().verdict?.policyDeniedReason(t, i, r) ?? null;
}
function x$t() {
  return e().verdict?.complianceTaintsSettled() ?? !1;
}
function GNo() {
  let verdict_2 = e().verdict;
  if (verdict_2 === void 0) return !1;
  try {
    return !verdict_2.policyLimitsCacheLoaded();
  } catch {
    return !0;
  }
}
export { E3n, UNo, BNo, Uc, f$, lAe, T3n, aY, jNo, WNo, z0, zNo, Bq, Aye, x$t, GNo };