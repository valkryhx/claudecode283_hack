// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ms, ore, IQ } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { vr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { dr, nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me, eTe, nr, M_, r0e } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Din } from "B:/~BUN/root/chunk-q3srk2wz.js";
import { ly } from "B:/~BUN/root/chunk-vfvzs0rk.js";
function xd(o) {
  let t = me("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(o);
  return !1;
}
var p = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function RK(o) {
  return o !== void 0 && p.has(o);
}
function a(o) {
  return o;
}
function vFs() {
  return null;
}
function kFs(o) {
  return !1;
}
function KVn(o) {
  return null;
}
var c = "cli";
class g {
  snapshotKey = () => c;
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
    let t = this.current();
    if (t.initialHooksConfig = o, ly()) t.userHooksConfig = me("userSettings")?.hooks ?? {};else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = me("policySettings")?.hooks ?? {};
    } catch {
      t.policyHooksConfig = "unreadable";
    }
  }
  evict(o) {
    if (o === c) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var k = new z(() => new g());
function e() {
  return ms(k);
}
function r() {
  let o = me("policySettings");
  if (o?.disableAllHooks === !0) return {};
  if (o?.allowManagedHooksOnly === !0 || vr()) return o?.hooks ?? {};
  if (xd("hooks")) return o?.hooks ?? {};
  let t = nr();
  if (t.disableAllHooks === !0) {
    if (!YVn()) return o?.hooks ?? {};
    return m(f.filter(nn).map(item => me(item)?.hooks));
  }
  return a(t.hooks ?? {});
}
var f = ["userSettings", "flagSettings", "policySettings"];
function m(o) {
  let t = {};
  for (let n of o) for (let [s, l] of Object.entries(n ?? {})) {
    let i = s;
    t[i] = [...(t[i] ?? []), ...(l ?? [])];
  }
  return t;
}
function YVn() {
  return d() && !nv();
}
function TAo() {
  return d() && nv();
}
function d() {
  if (!ly() || vr() || xd("hooks") || nr().disableAllHooks !== !0) return !1;
  return me("policySettings")?.allowManagedHooksOnly !== !0 && f.filter(nn).every(item => me(item)?.disableAllHooks !== !0);
}
function Nh() {
  return vr() || bme();
}
function bme() {
  let o = me("policySettings");
  if (o?.allowManagedHooksOnly === !0) return !0;
  if (nr().disableAllHooks === !0 && o?.disableAllHooks !== !0) return !0;
  return !1;
}
function ROr() {
  return vr() || me("policySettings")?.allowManagedHooksOnly === !0 || nv();
}
function nv() {
  return r0e(M_()).length > 0 || ore() && eTe();
}
function XVn() {
  return ROr() || xd("hooks");
}
function fh() {
  return me("policySettings")?.disableAllHooks === !0;
}
function kae() {
  return fh() || bme();
}
function CAo() {
  e().store(r()), IQ();
}
function Bj(o) {
  dr(o), e().store(r()), IQ();
}
async function VNt(o) {
  let t = await Din(o);
  try {
    e().store(r()), IQ();
  } finally {
    t?.();
  }
}
function* RAo() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function jj() {
  let o = e().current();
  if (o.initialHooksConfig === null) dr(), e().store(r()), IQ();
  return o.initialHooksConfig;
}
function AOr() {
  return jj(), e().current().policyHooksConfig ?? "unreadable";
}
function xOr() {
  return jj(), e().current().userHooksConfig ?? (ly() ? me("userSettings")?.hooks ?? {} : {});
}
export { xd, RK, vFs, kFs, KVn, YVn, TAo, Nh, bme, ROr, nv, XVn, fh, kae, CAo, Bj, VNt, RAo, jj, AOr, xOr };