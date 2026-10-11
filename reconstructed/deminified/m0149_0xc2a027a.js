// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, di, ABe, qY } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Tr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Ss } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he, $$e, Vn, Hx, hAe } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { LLt } from "B:/~BUN/root/chunk-vrhwdtwx.js";
function bd(o) {
  let t = he("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(o);
  return !1;
}
var g = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function a1(o) {
  return o !== void 0 && g.has(o);
}
function s(o) {
  return o;
}
function HPo() {
  return null;
}
function FPo(o) {
  return !1;
}
function Ccn(o) {
  return null;
}
var i = "cli";
class l {
  snapshotKey = () => i;
  snapshotsBySessionId = new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(),
      t = this.snapshotsBySessionId.get(o);
    if (!t) t = {
      initialHooksConfig: null
    }, this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    this.current().initialHooksConfig = o;
  }
  evict(o) {
    if (o === i) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var d = new q(() => new l());
function e() {
  return di(d);
}
function n() {
  let o = he("policySettings");
  if (o?.disableAllHooks === !0) return {};
  if (o?.allowManagedHooksOnly === !0 || Tr()) return o?.hooks ?? {};
  if (bd("hooks")) return o?.hooks ?? {};
  let t = Vn();
  if (t.disableAllHooks === !0) return o?.hooks ?? {};
  return s(t.hooks ?? {});
}
function Mh() {
  return Tr() || _te();
}
function _te() {
  let o = he("policySettings");
  if (o?.allowManagedHooksOnly === !0) return !0;
  if (Vn().disableAllHooks === !0 && o?.disableAllHooks !== !0) return !0;
  return !1;
}
function y2o() {
  return Tr() || he("policySettings")?.allowManagedHooksOnly === !0 || bte();
}
function bte() {
  return hAe(Hx()).length > 0 || ABe() && $$e();
}
function LMr() {
  return y2o() || bd("hooks");
}
function Bb() {
  return he("policySettings")?.disableAllHooks === !0;
}
function khe() {
  return Bb() || _te();
}
function NMr() {
  e().store(n()), qY();
}
function $z(o) {
  Ss(o), e().store(n()), qY();
}
async function jct(o) {
  let t = await LLt(o);
  try {
    e().store(n()), qY();
  } finally {
    t?.();
  }
}
function* HMr() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function _6() {
  let o = e().current();
  if (o.initialHooksConfig === null) Ss(), o.initialHooksConfig = n(), qY();
  return o.initialHooksConfig;
}
export { bd, a1, HPo, FPo, Ccn, Mh, _te, y2o, bte, LMr, Bb, khe, NMr, $z, jct, HMr, _6 };