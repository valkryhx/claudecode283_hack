// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { fd, Fm, k$t, gp, Ote, Ky, _6n, PDo, gB, $m, En, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { wr, vr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { bc, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { nr } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { wl, NFo, FFo, fVs, qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { ufn } from "B:/~BUN/root/chunk-pej55jax.js";
import { xr } from "B:/~BUN/root/chunk-vttg4n7q.js";
import { Nh, fh } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
var GR = !0;
var m = () => wr() || fd() || Boolean(a.ANTHROPIC_API_KEY) || Boolean(nr()?.env?.ANTHROPIC_API_KEY) || k$t() !== null || Boolean(Fm()) || gp() || ufn() || !Ote({
  envBearerFallbackFor: _6n()
}).error;
function x(e) {
  return NFo(e) ?? [e];
}
async function c(e, o, r) {
  let u = [];
  for (let [O, i] of x(e).entries()) {
    let f = F(e, O, r),
      n;
    try {
      i.invalidateCache?.(), n = await (i.readAsyncStrict?.(f, {
        inaccessibleAs: "failure",
        unreadableFileAs: "failure",
        unparsableEntryAs: "failure"
      }) ?? i.readAsync(f));
    } catch (error) {
      t(`[secureStorage] strict read of ${i.name} rejected: ${d(error)}`, {
        level: "warn"
      }), n = wl;
    }
    if (n !== wl && n != null && !Dn(n)) n = wl;
    u.push({
      name: i.name,
      value: n === wl ? wl : o(bc((i.osGuarded === !0 ? n : FFo(n ?? null)) ?? {}))
    });
  }
  return u;
}
function F(e, o, r) {
  return NFo(e) === void 0 || o > 0 ? r : void 0;
}
async function p() {
  if (m()) return !1;
  let [e, o] = await Promise.all([c(qn(), r => r.claudeAiOauth !== void 0), I() !== "macos" || fVs()]);
  return o && e.every(item => item.value === !1);
}
var s = He({
  isLifted: !1,
  lifting: void 0
}, e => {
  e.isLifted = !1, e.lifting = void 0;
});
function S() {
  return s.lifting ??= p().then(e => {
    s.isLifted = e;
  }, e => {
    t(`credential stores not read strictly: ${d(e)}`);
  }), s.lifting;
}
var pZt = He({
  isFollowed: !1
}, e => {
  e.isFollowed = !1;
});
var l = new Set(["disk", "payload"]);
async function E3e() {
  let e = En(Ky, GR);
  return !pZt.isFollowed && $m() && e.value !== GR && l.has(e.source) ? S() : void 0;
}
var g = () => !s.isLifted || m();
function Gvr() {
  try {
    return PDo() || g();
  } catch (error) {
    return t(`GrowthBook: credential sources not read (${H(error).name})`), !0;
  }
}
var D = () => !pZt.isFollowed && $m() && l.has(En(Ky, GR).source) && !Gvr();
function Vvr() {
  let e = E(Ky, GR),
    o = e !== GR,
    r = o && (gB() || D());
  if (o) E3e();
  return r ? GR : e;
}
var h = () => xl();
var y_ = () => !de() && !h() && Vvr();
var fZt = () => y_() && !xr("hooks") && !vr();
var qvr = () => fZt() && !fh() && !Nh();
export { GR, pZt, E3e, Gvr, Vvr, y_, fZt, qvr };