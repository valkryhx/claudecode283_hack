// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var n = new Set(["hipaa"]);
class o {
  latched = new Set;
  latchedTaints = [];
  taints = [];
  current = [];
  changed = De();
  verdict = void 0;
  replaceTaints(t) {
    this.current = L(t).sort();
    for (let r of t)
      if (n.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints()
  }
  latchTaints(t) {
    let r = !1;
    for (let i of t)
      if (n.has(i) && !this.latched.has(i)) this.latched.add(i), r = !0;
    if (!r) return !1;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints()
  }
  refreshEffectiveTaints() {
    let t = L([...this.latchedTaints, ...this.current]).sort();
    if (t.length === this.taints.length && t.every((r, i) => r === this.taints[i])) return !1;
    return this.taints = t, this.changed.emit(this.taints), !0
  }
  registerVerdict(t) {
    this.verdict = t
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = []
  }
}
var a = new W(() => new o);

function e() {
  return a.of(H().host)
}

function bCo(t) {
  return e().replaceTaints(t)
}

function a7i(t) {
  return e().latchTaints(t)
}

function l7i(t) {
  return n.has(t)
}

function hs(t) {
  return e().taints.includes(t)
}

function JD() {
  return e().taints
}

function Die() {
  return e().current
}

function SCo() {
  return e().latchedTaints
}

function IJ(t) {
  return e().changed.subscribe(t)
}

function d7i() {
  e().resetForTesting()
}

function c7i(t) {
  e().registerVerdict(t)
}

function bk(t) {
  return e().verdict?.isPolicyAllowed(t) ?? !1
}

function PLs(t) {
  try {
    return e().verdict?.isPolicyEnforced(t) ?? !1
  } catch {
    return !1
  }
}

function u7i() {
  let t = e().verdict;
  return t ? t.rememberedCoreSkills() : []
}

function lBt(t) {
  try {
    return e().verdict?.commandPolicyGateAllows(t) ?? !1
  } catch {
    return !1
  }
}

function OO(t) {
  let r = e().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(t)
}

function MJ(t, r, i) {
  return e().verdict?.policyDeniedReason(t, r, i) ?? null
}

function nHe() {
  return e().verdict?.complianceTaintsSettled() ?? !1
}

function oN() {
  let t = e().verdict;
  if (t === void 0) return !1;
  try {
    return !t.policyLimitsCacheLoaded()
  } catch {
    return !0
  }
}

function f7i() {
  let t = e().verdict;
  if (t === void 0) return "loaded";
  try {
    return t.autoDefaultVerdictState()
  } catch {
    return "pending"
  }
}

function nv() {
  let t = e().verdict;
  if (t === void 0) return !1;
  try {
    return t.policyVerdictAbsent()
  } catch {
    return !0
  }
}

function dBt() {
  let t = e().verdict;
  if (t === void 0) return !1;
  try {
    return t.sessionVerdictUnattributed()
  } catch {
    return !0
  }
}
var g0r = "unreadable";

function OLs() {
  try {
    return e().verdict?.rowPrincipalStamp() ?? null
  } catch {
    return g0r
  }
}

function ILs(t) {
  let r = e().verdict;
  if (r === void 0) return !1;
  try {
    return r.rowOfAnotherPrincipal(t)
  } catch {
    return !0
  }
}

function p7i() {
  let t = e().verdict;
  if (t === void 0) return !1;
  try {
    return t.principalSeenUnderHipaa()
  } catch {
    return !0
  }
}
export {
  bCo,
  a7i,
  l7i,
  hs,
  JD,
  Die,
  SCo,
  IJ,
  d7i,
  c7i,
  bk,
  PLs,
  u7i,
  lBt,
  OO,
  MJ,
  nHe,
  oN,
  f7i,
  nv,
  dBt,
  g0r,
  OLs,
  ILs,
  p7i
};
