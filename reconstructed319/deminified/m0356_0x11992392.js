// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, zt, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Bgt, GS, cEo, YRe, ea, qi, wFe, PVe, Oh, ms, pn, v, Vy, lH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { z4, Jy, Dpe, Lpe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { AI, sIn, lft, D9, wlo, iIn, Zw } from "B:/~BUN/root/chunk-sa4785jr.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { UVi } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { gL as budgetMs, xfs, wce, TTe } from "B:/~BUN/root/chunk-q82am8wz.js";
import { uM } from "B:/~BUN/root/chunk-zpne314q.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var L = o => PVe() || Bgt(o);
var ift = o => Bgt(o) && !PVe();
var A = o => o.hasHeld || ift(o);
var DMt = o => cEo.of(o).fetchHold;
function hoe() {
  return DMt(H().host);
}
var z = () => (ye() || A(hoe())) && L(hoe()) && !qi() && pn(GS, AI).source === "fallback";
var WWe = () => Oh() && pn(GS, AI).source === "disk" && wlo();
var V = () => A(hoe()) && WWe() && Zw();
var R = () => L(hoe()) && WWe() && !Zw();
var Y = () => R() && wFe();
var rIn = () => Vy(pn(GS, AI).source);
function _Te() {
  try {
    return pn(GS, AI).source === "disabled";
  } catch (error) {
    return a(error), !1;
  }
}
var i1 = () => wce() && tn() && (!rIn() || _Te());
function Fda() {
  sIn.isFollowed = !0;
}
function HJt() {
  let o = Ae();
  if (i1() && o.hooksModulesWakeBound === "ahead") o.hooksModulesWakeBound = "passed", t(`the rollout flag (${GS}) is not answered within this wake's wait: the organization's hooks modules load at what the switch reads, a person's wait for the answer`);
}
var D = 60000;
var G = "Mods you installed aren't running in this session. Your organization's settings couldn't be read, so it isn't known whether it allows them.";
var T = "the follow of the rollout switch did not end and is given up";
function j(o) {
  return o instanceof Error && o.message === T ? "timeout" : "load_failed";
}
var y = "installed mods are off for now: the rollout switch for them reads off; they load again when it reads on, and built-in mods keep running";
function S() {
  let hooksModulesSwitchRead = Ae().hooksModulesSwitchRead;
  return hooksModulesSwitchRead !== void 0 && !WWe() && !i1() && (hooksModulesSwitchRead.isLoadOwed || hooksModulesSwitchRead.isOn !== Zw());
}
function P() {
  let hooksModulesSwitchRead_2 = Ae().hooksModulesSwitchRead;
  return hooksModulesSwitchRead_2 !== void 0 && hooksModulesSwitchRead_2.isOn && S() && !Zw();
}
function pXe(o, e, s) {
  let r = Ae(),
    {
      hooksModulesSwitchRead: hooksModulesSwitchRead_3,
      hooksModulesSwitchFollowing: hooksModulesSwitchFollowing
    } = r;
  if (hooksModulesSwitchFollowing !== void 0) return hooksModulesSwitchFollowing.then(() => P() ? pXe(o, e, s) ?? void 0 : void 0).catch(a);
  if (hooksModulesSwitchRead_3 === void 0 || !S()) return null;
  let is_turned_on = Zw(),
    c = r.loadedModules.length;
  t(`installed plugins' hooks modules ${is_turned_on ? "load" : "unload"}: the rollout flag (${GS}) reads ${is_turned_on ? "on" : "off"} in a running session`);
  let p = () => {
      r.hooksModulesSwitchRead = {
        ...(r.hooksModulesSwitchRead ?? hooksModulesSwitchRead_3),
        isOn: !1
      };
    },
    h = (is_turned_on ? Promise.resolve() : Promise.resolve().then(s).then(p, a)).then(o),
    E = () => {
      r.hooksModulesSwitchRead = {
        ...(r.hooksModulesSwitchRead ?? hooksModulesSwitchRead_3),
        isLoadOwed: !0
      };
    };
  h.catch(E);
  let M = zt(h, D, T).then(() => {
    g("plugin_function_hooks_switch_followed", {
      is_turned_on: is_turned_on
    });
  }, k => {
    E(), m("plugin_function_hooks_switch_followed", j(k), {
      is_turned_on: is_turned_on
    }), t(`installed plugins' hooks modules: the load that follows the rollout flag failed: ${d(k)}`, {
      level: "error"
    });
  }).then(() => {
    if (!is_turned_on && r.loadedModules.length < c) e(y);
  }).catch(a).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = M, M;
}
function r0e() {
  let o = Ae().hooksModulesSwitchRead?.isManagedPending === !0;
  try {
    let e = !Zw() && pn(GS, AI).source === "payload";
    return o && wce() && tn() && !e;
  } catch (error) {
    return a(error), o;
  }
}
function F(o, e, s) {
  let r = Ae();
  if (_Te()) HJt();
  let n = r.hooksModulesWakeBound === "taken",
    l = r.hooksModulesWakeBound === "passed" && i1(),
    u = !(r.hooksModulesWakeBound === "ahead" && i1()) && r0e();
  if (!(r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && (l || u || n))) return null;
  if (n && !u) {
    if (r.hooksModulesWakeBound = "loaded", r.hooksModulesSwitchRead?.isPersonsOut === !0) e(G);
    return null;
  }
  let c = zt(o(), D, "the load at the end of the wake's wait did not end and is given up").then(() => {
    let hooksModulesSwitchRead_4 = r.hooksModulesSwitchRead,
      w = hooksModulesSwitchRead_4?.isManagedPending !== !0;
    if (w) r.hooksModulesWakeBound = "loaded";
    if (w && hooksModulesSwitchRead_4?.isPersonsOut === !0) e(G);
  }, p => {
    t(`the load of an organization's hooks modules at the end of the wake's wait failed: ${d(p)}`, {
      level: "error"
    });
  }).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = c, c.then(() => P() ? pXe(o, e, s) ?? void 0 : void 0).catch(a);
}
function Hda(o) {
  let {
      registry: registry
    } = o,
    s = o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0,
    r = !s && registry.hooksModulesWakeBound === "taken",
    n = s && registry.hooksModulesWakeBound === "passed" && i1() && _Te();
  if (r) registry.hooksModulesWakeBound = "passed";
  if (n) registry.hooksModulesWakeBound = "taken";
}
async function Z() {
  return await ms().catch(() => {
    return;
  }), Y() ? ms().catch(() => {
    return;
  }) : void 0;
}
function U() {
  return i1() ? i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? xfs : budgetMs;
}
var q = () => Math.max(0, U() - UVi());
function Q(o) {
  let timedOut = o.timedOut,
    s = !timedOut && qi();
  return timedOut ? `no answer within ${U()}ms` : s ? "the flag payload landed" : "the fetch settled with no payload";
}
async function _(initialize = ms) {
  let e = await TTe({
    initialize: initialize,
    budgetMs: q()
  });
  t(`installed plugins' hooks modules held ${Math.round(e.waitMs)}ms for the rollout flag (${GS}): ` + Q(e));
}
async function $da() {
  return rIn() ? void 0 : _();
}
var X = 30000;
function oo(o) {
  return ift(o) && YRe() ? o.over.promise : Promise.resolve();
}
var b = o => we(oo(o), X);
async function Uda() {
  await lft();
  let o = R(),
    e = z() || V(),
    s = (o || e) && !i1(),
    r = o ? Z : ms;
  if (s) await b(hoe());
  return s ? _(r) : void 0;
}
var eo = {
  override: "from a local override",
  payload: "from GrowthBook (this session's payload)",
  disk: "from GrowthBook (the disk cache of an earlier session)",
  disabled: "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",
  fallback: "from the default (a cold GrowthBook cache, no payload yet)"
};
var W = 60000;
function to(askedAt = Date.now()) {
  let e = Ae(),
    hooksModulesSwitchRereading = e.hooksModulesSwitchRereading;
  if (hooksModulesSwitchRereading !== void 0) return hooksModulesSwitchRereading;
  let hooksModulesSwitchRead_5 = e.hooksModulesSwitchRead;
  if (!(hooksModulesSwitchRead_5 !== void 0 && tn() && askedAt - hooksModulesSwitchRead_5.askedAt >= W)) return null;
  e.hooksModulesSwitchRead = {
    ...hooksModulesSwitchRead_5,
    askedAt: askedAt
  };
  let f = (hooksModulesSwitchRead_5.askedAt === 0 ? _() : TTe({
    initialize: () => lH().then(ms),
    budgetMs: budgetMs
  }).then(() => {
    return;
  })).finally(() => {
    e.hooksModulesSwitchRereading = void 0;
  });
  return e.hooksModulesSwitchRereading = f, f;
}
function C(o, e, s) {
  let r = () => pXe(o, e, s) ?? F(o, e, s),
    n = to();
  return n !== null ? n.catch(a).then(() => (HJt(), r() ?? void 0)) : r();
}
var oIn = 1e4;
function Bda(o) {
  if (!(WWe() && !Zw())) return;
  let s = ea(() => {
    if (!qi()) return;
    if (s(), Zw()) t(`installed plugins' hooks modules load late: the rollout flag (${GS}) answered on after the load went on over a saved off`), o();
  });
}
var aft = {
  served: "the rollout switch served off",
  saved: "the rollout switch was saved off by an earlier session and is not refreshed yet",
  unanswered: "this wake's flag fetch has not answered the rollout switch; they load at a turn start once it reads on",
  unfetched: "this wake fetches no rollout switch; an organization's load at once, a person's once the organization's settings have been read",
  unfetchedOut: "this wake fetches no rollout switch and the organization's settings could not be read; an organization's load at once, a person's stay out for this wake"
};
function ylo() {
  let o = i1() && Zw(),
    e = WWe(),
    s = o && _Te();
  if (s && Ae().hooksModulesSwitchRead?.isPersonsOut === !0) return aft.unfetchedOut;
  return s ? aft.unfetched : o ? aft.unanswered : e ? aft.saved : aft.served;
}
function ro(o, e, s) {
  let r = Ae(),
    n = r.loadedModules.length;
  return Promise.resolve().then(o).then(() => {
    if (r.loadedModules.length < n) e(y);
    s();
  });
}
function jda() {
  return eo[pn(GS, AI).source];
}
var uIi = ["NODE_ENV", "CLAUDE_CODE_DISABLE_FEATURE_FLAGS", "DISABLE_GROWTHBOOK", "DISABLE_TELEMETRY", "DO_NOT_TRACK", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_INTERNAL_FC_OVERRIDES", ...uM];
function Wda(o, e, s) {
  let r = C(o, e, s);
  return r === null ? null : we(r, oIn).then(() => {
    return;
  }).catch(a);
}
var tIn = 180000;
class so {
  busy = !1;
  running = null;
  key = null;
  edgeAt = 0;
  busySince = 0;
  idleWaiters = new Set();
  endWaiters = new Set();
  valveTimer = null;
}
var fe = new Je(() => new so());
function x() {
  return fe.of(H());
}
function io(o) {
  if (o.valveTimer !== null) clearTimeout(o.valveTimer), o.valveTimer = null;
  let e = [...o.idleWaiters];
  o.idleWaiters.clear(), no(e);
}
function no(o) {
  for (let e of o) queueMicrotask(e);
}
function nIn(o, e = null) {
  let s = x(),
    r = e === null || e === s.key;
  if (o ? s.busy && r : !s.busy || !r) return;
  if (s.busy) io(s), no([...s.endWaiters]), s.endWaiters.clear();
  s.busy = o, s.running = o ? Symbol("foreground turn") : null, s.key = o ? e : null, s.busySince = o ? performance.now() : 0, s.edgeAt = Date.now();
}
function fXe() {
  return x().busy;
}
function qus() {
  return x().running;
}
function FJt(o) {
  let e = x();
  if (e.busy) e.endWaiters.add(o);else queueMicrotask(o);
}
function lIi() {
  return x().edgeAt;
}
function glo(o = performance.now(), e = tIn) {
  let s = x();
  return s.busy && o - s.busySince < e;
}
function dIi(o = performance.now(), e = tIn) {
  let s = x();
  return s.busy && o - s.busySince >= e;
}
function cIi(o, e, s = tIn) {
  if (e.aborted) return () => {};
  let r = x(),
    n = !1,
    l = () => {
      if (e.removeEventListener("abort", u), !n && !e.aborted) o();
    },
    u = () => {
      n = !0, r.idleWaiters.delete(l), e.removeEventListener("abort", u);
    };
  if (!glo(performance.now(), s)) return queueMicrotask(l), u;
  if (r.idleWaiters.add(l), e.addEventListener("abort", u, {
    once: !0
  }), r.valveTimer === null) {
    let f = r.busySince + s - performance.now();
    r.valveTimer = setTimeout(io, Math.max(0, f), r), r.valveTimer.unref?.();
  }
  return u;
}
function zda(o) {
  let e = {
    isStopped: !1,
    isWaiting: !1
  };
  function s() {
    if (e.isWaiting = !1, !e.isStopped && S()) o();
  }
  let r = ea(() => {
    if (!e.isWaiting && S()) e.isWaiting = !0, FJt(s);
  });
  return () => {
    e.isStopped = !0, r();
  };
}
function Gda(o, e, s) {
  let r = Ae();
  if (!(r.hooksModulesWakeBound === "ahead" && r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && i1())) return null;
  let l = b(hoe()).then(() => _()).then(() => (r.hooksModulesSwitchFollowing = void 0, HJt(), pXe(o, e, s) ?? F(o, e, s) ?? void 0)).catch(a).finally(() => {
    if (r.hooksModulesSwitchFollowing === l) r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = l, l;
}
function Yus() {
  try {
    return qi() || pn(GS, AI).source === "payload";
  } catch {
    return !1;
  }
}
var _lo = () => iIn() !== v(GS, AI);
function Vda(o) {
  let hooksModulesSwitchRead_6 = o.registry.hooksModulesSwitchRead;
  if (hooksModulesSwitchRead_6?.isManagedPending !== !0) return !1;
  if (!(o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0)) return t(`the load of an organization's hooks modules stays owed: its set ${o.isSetKnown ? "is known" : "is not known yet"}, the load ${o.isLoadFaultless ? "ran" : "did not run faultless"}, ${o.unmet.length} named plugin(s) not found or not loaded`), !1;
  return o.registry.hooksModulesSwitchRead = o.isDecided ? {
    ...hooksModulesSwitchRead_6,
    isManagedPending: !1
  } : void 0, !0;
}
var Xus = "Your organization's mods could not be loaded, so this turn was not run.";
async function ao(o, e, s, r) {
  let n = Ae(),
    l = {
      isEnded: !1
    },
    u = {
      wake: () => {}
    },
    f = new Set(),
    abortController = new AbortController(),
    p = ea(() => u.wake()),
    w = n.hookRegistrationEnded.subscribe(() => u.wake()),
    h = {
      hasMoved: !1,
      passesBefore: 0
    },
    E = Lpe(() => {
      h.hasMoved = !0, h.passesBefore = n.hookRegistrationEpoch, u.wake();
    }),
    M = () => h.hasMoved && n.hookRegistrationEpoch === h.passesBefore,
    k = {
      isPassed: !1
    },
    B = {
      isMet: !1
    },
    N = () => !l.isEnded && !k.isPassed && !B.isMet && r0e(),
    mo = J(s, abortController.signal).then(() => {
      k.isPassed = !0;
    });
  e.then(() => {
    l.isEnded = !0;
  });
  try {
    while (N()) {
      let K = {
          isOver: !1
        },
        uo = J(W, abortController.signal, {
          unref: !0
        }).then(() => {
          K.isOver = !0;
        }),
        po = M(),
        I = Promise.resolve().then(() => o(po)).catch(a);
      h.hasMoved = !1;
      while (N() && !K.isOver && !(M() && f.has(I))) {
        let promise = new Promise(O => {
            u.wake = O;
          }),
          ho = [I, n.hooksModulesSwitchFollowing, ...n.hookRegistrationsInFlight].flatMap(item => item === void 0 || f.has(item) ? [] : [item]).map(item => Promise.allSettled([item]).then(() => f.add(item)));
        await Promise.race([uo, mo, e, promise, ...ho]), B.isMet = !k.isPassed && f.has(I) && !M() && r();
      }
    }
    return k.isPassed ? "limit" : B.isMet ? "dead-end" : "released";
  } finally {
    abortController.abort(), p(), w(), E();
  }
}
var lo = 300000;
var fo = "Waiting for your organization's mods to load.";
function blo(o, e) {
  let s = Ae(),
    n = `${Dpe() ? "ended" : "under way"} since reset ${z4()}`,
    standing = Jy() ?? n,
    organizationsStatusLoad = s.organizationsStatusLoad;
  if (!e && organizationsStatusLoad?.standing === standing) return organizationsStatusLoad.pass;
  let pass = Promise.resolve().then(o),
    c = {
      standing: standing,
      pass: pass
    },
    p = () => {
      if (s.organizationsStatusLoad === c) s.organizationsStatusLoad = void 0;
    };
  return s.organizationsStatusLoad = c, pass.then(p, p), pass;
}
var Slo = "Your organization's policy could not be read, so this session cannot run a turn.";
function Kda(o, e, s, r, n) {
  if (!r0e()) return null;
  let l = {
      isEnded: !1
    },
    u = {
      end: "released"
    },
    f = () => Ae().hooksModulesSwitchRead?.isManagedPending === !0,
    c = () => pXe(o, e, s) ?? F(o, e, s);
  return r.then(() => {
    l.isEnded = !0;
  }), Promise.resolve().then(() => e(fo)).catch(a).then(() => ao(p => C(p ? () => blo(o, !1) : o, e, s), r, lo, n)).then(p => {
    u.end = p;
  }).catch(a).then(() => !r0e() && f() ? we(ro(s, e, c), oIn) : void 0).catch(a).then(() => {
    let p = u.end === "dead-end";
    if (!r0e()) return {
      kind: "start"
    };
    return l.isEnded ? {
      kind: "ended"
    } : {
      kind: "failed",
      message: p ? Slo : Xus
    };
  });
}
function fIi() {
  let o = Ae();
  if (o.hooksModulesSwitchRead === void 0 && Ee()) o.hooksModulesSwitchRead = {
    isOn: !1,
    askedAt: 0,
    isLoadOwed: !0,
    isManagedPending: !0,
    isPersonsOut: !1
  };
}
function Ee() {
  try {
    return D9() === void 0 && i1();
  } catch {
    return !0;
  }
}
export { ift, tIn, nIn, fXe, qus, FJt, lIi, glo, dIi, cIi, DMt, hoe, WWe, rIn, _Te, i1, Fda, HJt, pXe, r0e, Hda, $da, Uda, oIn, Bda, aft, ylo, jda, uIi, Wda, zda, Gda, Yus, _lo, Vda, Xus, blo, Slo, Kda, fIi };