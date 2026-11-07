// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Uc, lB, Wwt, IKn, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, F, k, db, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Ue as configHome } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { yf, Twe, TN, OT } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { MIs, v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { OH, zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { xf } from "B:/~BUN/root/chunk-x1xft50h.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { cT, tc } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { El } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { Kmi, A6t, h$, Xlt, qmi, Ymi, tQo, Jlt, Qlt, hJr, Nar, xQ, gJr, yJr, Mve, Dve, Zlt, x6t, $1e, PQ, VK, nQo, Lve, bJr, SJr, wJr, Xmi, P6t, oTn, kJr, rQo, Far, sTn, iTn, Jmi, Qmi, y5e, _5e, vJr, O6t, t7r, _Tn, bTn, n7r, r7r, kxt, STn, wTn, dlr, o7r, Uve, clr, ulr, lgi, cMe, flr, ugi, fgi, pgi, mgi, ggi, s7r, i7r, Sgi, aW, Hdt, Hes, XK, Zp, NP, Zxn, kW, ias } from "B:/~BUN/root/chunk-27h4st9h.js";
import { kf, $ue } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { cU, cyo, QNt, Dht, Cse, Q7e, Ree, Aee, eFt, $F as rootLabel, Z7e, ED, wnn } from "B:/~BUN/root/chunk-esnm3r09.js";
import { WAi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { sU } from "B:/~BUN/root/chunk-wss0tnsx.js";
import { xms, Hbr, J0i, Q0i, Lce as updatedAt, Poe, Xft, _L, BXe } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { Fpt, Yys } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { RIn } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { eRs } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { afe, zFt } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { c3o, bwn, Zdi } from "B:/~BUN/root/chunk-1mn6d96v.js";
import { kwn } from "B:/~BUN/root/chunk-kak11zak.js";
import { war } from "B:/~BUN/root/chunk-mvd8n96a.js";
import { jg } from "B:/~BUN/root/chunk-28zr9ymz.js";
import { Ja, FBi } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { o, E, hN, oe, C, xt } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { mS } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { lstat as Ye, lutimes as ni, mkdir as ti, readdir as _t, readFile as ii, rename as si, rm as pe, rmdir as gn, stat as we, writeFile as ri } from "fs/promises";
import { basename as te, dirname as oi, join as W, relative as kt, sep as ai } from "path";
import { lstat as Ot } from "fs/promises";
async function Gn(e, n, t) {
  let s = new Set(n.map(item => item.skillId)),
    d = e.filter(item => item.backingPluginId !== void 0 && item.updatedAt !== updatedAt && !s.has(item.skillId) && Hes(t, item.backingPluginId));
  if (d.length === 0) return [];
  let S = d,
    reason = "another_session";
  try {
    if ((await Yys(b => b.pid !== process.pid && b.kind !== "daemon" && b.asksForConvertedSkills !== !0 && b.asksForConvertedSkills !== null)) === void 0) {
      let b = await Sgi(t, new Set(d.flatMap(item => item.backingPluginId ?? [])));
      if (b === null) reason = "plugins_bucket_unread";else reason = "no_plugin_folder", S = d.filter(item => item.backingPluginId !== void 0 && !b.has(item.backingPluginId));
    }
  } catch (error) {
    if (reason = "registry_unreadable", !(error instanceof Fpt)) reason = "read_failed", a(F(error));
  }
  if (S.length > 0) V("info", "skills_sync_converted_copies_kept", {
    count: S.length,
    reason: reason
  });
  return S;
}
async function un(e) {
  let n = Hdt(),
    t = (Wwt() ?? []).filter(({
      pluginId: pluginId
    }) => pluginId !== void 0 && n.get(pluginId)?.heldBack === !1),
    s = await Promise.all(t.map(({
      folder: folder
    }) => Ot(folder).then(() => !0, M => !K(M)))),
    d = t.filter((item, index) => !s[index]),
    S = kf(),
    w = d.filter(({
      folder: folder_2
    }) => S.hidingFoldersGone.has(folder_2)),
    u = d.filter(({
      folder: folder_3
    }) => !S.hidingFoldersGone.has(folder_3)),
    b = u.length > 0 ? await e() : [],
    h = new Set(b.flatMap(item => item.updatedAt === updatedAt ? [] : item.backingPluginId ?? [])),
    L = u.filter(({
      pluginId: pluginId_2
    }) => pluginId_2 !== void 0 && h.has(pluginId_2));
  if (S.hidingFoldersGone = new Set([...w, ...L].map(({
    folder: folder_4
  }) => folder_4)), L.length === 0) return !1;
  return V("info", "skills_sync_hiding_plugin_folder_gone", {
    count: L.length
  }), !0;
}
var $n = 10,
  Bt = $n * 60000,
  zt = 4,
  Ut = "tengu_claudeai_skills_sync_interval_minutes",
  Ht = 5,
  Wt = 1440,
  Kt = "tengu_claudeai_skills_sync_idle_intervals",
  Yn = 4,
  Gt = 4,
  Yt = 3600000,
  jt = 30000,
  Xt = 60000,
  settle_ms = 180000,
  xe = 45000;
function re() {
  let e = v(Ut, $n);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return Bt;
  return Math.min(Math.max(e, Ht), Wt) * 60000;
}
function qn() {
  let e = re();
  return Be() > e && eRs(e) && !afe();
}
function Be() {
  let e = v(Kt, Yn),
    n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Gt) : Yn,
    t = re();
  return Math.max(t, Math.min(t * n, Yt));
}
function Zn() {
  return jt + Math.floor(Math.random() * Xt);
}
function ze(e) {
  let n = re();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * zt);
}
function Qn(e) {
  let n = kf();
  if (n.resyncTimer) return;
  n.resyncRunRound = e, De(n, e, ze(n.consecutiveFailedRounds), "resync", !1);
}
function fn(e) {
  let n = kf();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  clearTimeout(n.resyncTimer), De(n, n.resyncRunRound, e, "resync", !1);
}
function Jn() {
  let e = kf();
  if (e.stopAwaitingActivity) return;
  let n = [lB, zFt].map(item => item(() => {
    if (e.stopAwaitingActivity?.(), e.syncPromise) e.syncPromise.catch(() => {}).then(() => Xn(e));else Xn(e);
  }));
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let t of n) t();
  };
}
function Vn() {
  return kf().stopAwaitingActivity !== null;
}
function mn() {
  kf().stopAwaitingActivity?.();
}
function Xn(e) {
  try {
    let resyncArmed = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !resyncArmed || resyncArmed.trigger === "wake_settle") return;
    let t = Math.round(Date.now() - resyncArmed.wallMs - (performance.now() - resyncArmed.monotonicMs));
    if (t > xe && e.consecutiveFailedRounds === 0) {
      clearTimeout(e.resyncTimer), nt(e, e.resyncRunRound, resyncArmed.trigger, t, !0);
      return;
    }
    let s = e.consecutiveFailedRounds > 0 ? ze(e.consecutiveFailedRounds) : 0;
    if (resyncArmed.wallMs + resyncArmed.delayMs - Date.now() > s) clearTimeout(e.resyncTimer), De(e, e.resyncRunRound, s, "resync", !0);
  } catch (error) {
    a(error);
  }
}
function et() {
  fn(ze(kf().consecutiveFailedRounds));
}
function De(e, n, delayMs, trigger, d) {
  let S = Date.now() + delayMs;
  e.resyncArmed = {
    trigger: trigger,
    delayMs: delayMs,
    wallMs: Date.now(),
    monotonicMs: performance.now()
  }, e.resyncTimer = setTimeout($t, delayMs, e, n, S, trigger, d), e.resyncTimer.unref?.();
}
function $t(e, n, t, trigger_2, woken) {
  let resyncTimer = e.resyncTimer,
    tickLateMs = Math.max(0, Date.now() - t);
  if (tickLateMs > xe) {
    nt(e, n, trigger_2, tickLateMs, !1);
    return;
  }
  n({
    trigger: trigger_2,
    tickLateMs: tickLateMs,
    ...(woken && {
      woken: woken
    })
  }).catch(() => {}).then(() => {
    if (e.resyncTimer !== resyncTimer) return;
    De(e, n, ze(e.consecutiveFailedRounds), "resync", !1);
  });
}
function nt(e, n, t, s, woken_2) {
  V("info", "skills_sync_resync_skipped_after_sleep", {
    late_ms: s,
    woken: woken_2
  }), De(e, n, settle_ms, "wake_settle", woken_2);
  try {
    if (!q() && (woken_2 || war())) l("tengu_skills_sync_resync_skipped", {
      trigger: f(t),
      tick_late_ms: s,
      settle_ms: settle_ms,
      woken: woken_2
    });
  } catch (error) {
    a(error);
  }
}
var qt = 60000;
function Se(e) {
  let n = yf() ?? "none";
  return e ? `${n}${_n}` : n;
}
var _n = ".converted-skills";
function tt(e) {
  return {
    ...e,
    listedFor: e.listedFor.filter(item => item.endsWith(_n))
  };
}
async function it({
  syncedRoot: syncedRoot,
  bucket: bucket,
  root: root,
  trigger: trigger_3,
  pinned: pinned,
  lastGeneration: lastGeneration,
  holdsPlaceholders: holdsPlaceholders,
  idle: idle,
  convertedSkillsAsPlugins: convertedSkillsAsPlugins
}) {
  let shared = !pinned && bucket === wnn(),
    L = pinned ? void 0 : Zt(trigger_3, shared, idle);
  if (L === void 0) return {
    list: !0,
    shared: shared
  };
  if (shared && idle) Jn();
  let R = await o7r(root, L);
  if (!R.reuse || !(await y5e(syncedRoot, bucket))) return mn(), {
    list: !0,
    shared: shared
  };
  let M = await STn(root),
    reload = !1;
  if (shared) {
    if (M === null || holdsPlaceholders || !M.listedFor.includes(Se(convertedSkillsAsPlugins))) return mn(), {
      list: !0,
      shared: shared
    };
    let z = idle && Vn();
    if (idle && !z && R.ageMs >= re()) return {
      list: !0,
      shared: shared
    };
    reload = M.token !== lastGeneration && trigger_3 !== "startup";
    let Y = z ? Be() : re();
    if (R.ageMs < Y) fn(Y - R.ageMs + Zn());
  } else {
    let z = M?.listedFor ?? [];
    if (!(convertedSkillsAsPlugins ? z.includes(Se(!0)) : z.includes(Se(!1)) || !z.some(item => item.endsWith(_n)))) return {
      list: !0,
      shared: shared
    };
  }
  return V("info", "skills_sync_round_reused", {
    age_ms: R.ageMs,
    within_ms: R.withinMs
  }), {
    list: !1,
    generation: M?.token ?? null,
    reload: reload
  };
}
function Zt(e, n, t) {
  let s = e === "startup" ? r7r() : void 0;
  if (!n || e === "reload") return s;
  if (t) return Be();
  let d = e === "startup" && (!OT() || Twe() && TN()) ? Math.min(qt, re()) : re();
  return Math.max(d, s ?? 0);
}
var Qt = "tengu_placid_noether",
  Jt = 21600000,
  st = 3600000;
function rt(e) {
  return _([e.updatedAt, e.requestedVersion, e.name]);
}
function ot(e, n) {
  let version = rt(n),
    s = e.get(n.skillId);
  e.set(n.skillId, {
    version: version,
    failures: s?.version === version ? s.failures + 1 : 1,
    failedAtMs: Date.now()
  });
}
async function at(e, n, t) {
  let s = new Map(n.map(({
    item: item_2
  }) => [item_2.skillId, rt(item_2)]));
  for (let [u, {
    version: version_2
  }] of e) if (s.get(u) !== version_2) e.delete(u);
  let d = v(Qt, !0) !== !1,
    due = [],
    heldBack = [];
  for (let u of n) {
    let b = e.get(u.item.skillId);
    if (!d || b === void 0) {
      due.push(u);
      continue;
    }
    let h = re() * 2 ** (b.failures - 1);
    if (h > st) h = (await t(u)) ? Math.min(h, Jt) : st;
    if (sU(b.failedAtMs, h)) heldBack.push(u);else due.push(u);
  }
  return {
    due: due,
    heldBack: heldBack
  };
}
var Vt = "tengu_jaunty_alpaca";
function lt() {
  return rn(Vt, !0) !== !1;
}
var ei = "tengu_quizzical_wirth";
function He() {
  return v(ei, !0) !== !1;
}
var kn = 15,
  li = c3o + 60000;
function di() {
  let CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS = i.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS : 5000;
}
function s7s() {
  let CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS = i.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS : 30000;
}
function Sn() {
  let e = kf();
  if (!e.firstListDeferred) {
    let resolve,
      promise = new Promise(s => {
        resolve = s;
      });
    e.firstListDeferred = {
      promise: promise,
      resolve: resolve
    };
  }
  return e.firstListDeferred;
}
function jUe(e, n, t) {
  kf().firstSyncPromise ??= pt(e, n, t), Qn(s => vn(e, n, t, s));
}
function i7s(e, n, t, s) {
  if (!i.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !clr(e) || s()) return !1;
  if (h$(), !ulr(e) || !Xlt() || Ymi()) return !1;
  return jUe(e, n, t), !0;
}
function a7s(e, n, t) {
  let s = Sn();
  return kf().firstSyncPromise ??= pt(e, n, t), s.promise;
}
async function l7s(e, n) {
  let t = di() - (performance.now() - n),
    s = await Promise.race([e.then(() => "listed"), J(Math.max(0, t)).then(() => "timed_out")]);
  if (s === "timed_out") l("tengu_skills_sync_wait_timeout", {});
  return s;
}
async function m9n(e, n, t, {
  keepLandingWaits = !1
} = {}) {
  if (BXe.of(e).discardInflight(), await kf().syncPromise?.catch(() => {}), !keepLandingWaits) kf().failedLandings.clear();
  return vn(e, n, t, {
    trigger: "reload"
  });
}
function pt(e, n, t) {
  let s = kf();
  return vn(e, n, t, {
    trigger: "startup"
  }).finally(() => {
    s.firstRoundSettled = !0;
  });
}
function wn() {
  let e = kf();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0;
}
function gle() {
  wn(), kW(), XK.emit();
}
function dt(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    gle();
    return;
  }
  kf().bucketGeneration = e.token;
}
function ae() {
  return W(configHome(), rootLabel);
}
function yt(e) {
  return W(ae(), e);
}
function gt(e) {
  return Ve.userConfigDir("skills", kt(W(configHome(), "skills"), e).split(ai));
}
async function St(storageV5) {
  let n = ae();
  if ((await VK(n, configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5
  }).catch(() => null)) !== "real") return null;
  let s;
  try {
    s = await _t(n, {
      withFileTypes: !0
    });
  } catch {
    return null;
  }
  let buckets = [],
    strays = [],
    unreadable = [];
  for (let u of s) {
    let b = u.isDirectory() && Q7e(u.name) ? await _5e(n, u.name) : "unmarked";
    if (b === "marked") buckets.push(u.name);else if (typeof b === "object") unreadable.push(u.name), V("warn", "skills_sync_bucket_marker_unreadable", {
      code: b.unreadable
    });else if (!Ree(u.name)) strays.push(u.name);
  }
  return {
    buckets: buckets,
    strays: strays,
    unreadable: unreadable
  };
}
async function wt(e, n) {
  let count = 0;
  for (let s of e) if (await Mn(W(ae(), s), n)) count++;
  if (count > 0) V("info", "skills_sync_stray_entry_trashed", {
    count: count
  });
  return count;
}
async function ci(e) {
  let n = await St(e);
  if (n === null || n.strays.length === 0) return !1;
  return (await wt(n.strays, e)) > 0;
}
function Mn(e, n) {
  return Lve(ht(e, n));
}
function ht(dir, storageV5_2) {
  return {
    dir: dir,
    trashRoot: je(),
    configHome: configHome(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: storageV5_2
  };
}
async function h9n(storageV5_3) {
  if (!tQo()) return !1;
  let n = await VK(ae(), configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5_3
  });
  if (n !== "real" && n !== "absent") return !1;
  let t = null,
    s = n === "real" ? await St(storageV5_3) : null;
  if (s !== null) {
    t = 0;
    for (let S of s.buckets) {
      let w = yt(S);
      await pe(kxt(w), {
        force: !0
      }).catch(() => {});
      let u = await Di(w, storageV5_3).catch(() => null);
      if (u !== null) t += u, await gn(w).then(() => O6t(ae(), S), () => {});
    }
    t += await wt([...s.strays, ...s.unreadable], storageV5_3), await gn(ae()).catch(() => {});
  }
  V("info", "skills_sync_pruned_for_closed_gate", {
    moved: t ?? 0
  });
  let d = t !== null && t > 0;
  if (d) NP(), kW(), XK.emit();
  return d;
}
function je() {
  return W(configHome(), Z7e);
}
function Xe(e) {
  return W(e, cU);
}
var removedSkillIds = new Set(),
  deferredRows = [],
  ui = p(() => xt({
    lastUpdated: E().catch(0),
    skills: C(oe()),
    staleDirs: oe().optional(),
    pendingClaims: oe().optional()
  })),
  fi = p(() => xt({
    name: o(),
    skillId: o().catch(""),
    description: o().catch(""),
    source: o().catch(""),
    updatedAt: o().nullable().catch(null),
    userInvocable: hN().catch(void 0),
    disableModelInvocation: hN().catch(void 0)
  }));
function Mt(e) {
  return gt(Xe(e));
}
async function ke(e, n) {
  let t = !n.manifestRead;
  n.manifestRead = !0;
  let s;
  if (e) try {
    let h = await e.read([{
      key: Mt(n.root),
      offset: 0,
      length: Jlt + 1
    }]);
    if (!h.ok) {
      if (t) V("warn", "skills_sync_manifest_unreadable", {
        code: "backend_read_failed"
      });
      return null;
    }
    let L = h.value.items[0];
    if (!L.found) return null;
    if (L.totalBytes > Jlt || L.value.byteLength > Jlt) {
      if (t) V("warn", "skills_sync_manifest_unreadable", {
        code: "parse_or_size"
      });
      return null;
    }
    s = Buffer.from(L.value).toString("utf8");
  } catch (error) {
    if (t) V("warn", "skills_sync_manifest_unreadable", {
      code: k(error) ?? "backend_read_failed"
    });
    return null;
  } else if (s = await Mve(Xe(n.root), t ? "skills_sync_manifest_unreadable" : null), s === null) return null;
  let d = Dve(s, x6t(), t ? "skills_sync_manifest_unreadable" : null);
  if (d === null) return null;
  let {
    skills: skills,
    staleDirs: staleDirs,
    pendingClaims: pendingClaims,
    ...b
  } = d;
  return {
    ...b,
    skills: xQ(Zlt(), skills),
    staleDirs: Qlt(staleDirs),
    pendingClaims: Qlt(pendingClaims)
  };
}
async function pn(e, n, t, s) {
  let d = s.guard.refusedReason();
  if (d !== null) throw SJr(d);
  await Dt(t, s.root);
  let S = await ke(t, s);
  if (S === null && n.onlyOverReadable) return;
  let skills_2 = hJr(xQ(Zlt(), e.skills), S?.skills, b => b.skillId, n.removedSkillIds, xQ(Zlt(), n.deferredRows)),
    u = _({
      ...yJr(S, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
      ...e,
      skills: skills_2,
      staleDirs: Nar(e.staleDirs, S?.staleDirs, n.staleDirs),
      pendingClaims: Nar(e.pendingClaims, S?.pendingClaims, n.pendingClaims)
    }, null, 2);
  if (t) {
    let b = await t.write(Mt(s.root), u, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic"
    });
    if (!b.ok) throw V("error", "skills_sync_manifest_write_failed", {
      code: b.error.code
    }), Error("skillsSync: manifest write failed");
    return;
  }
  await zn(Xe(s.root), u);
}
function Le(e) {
  return W(e, Cse, String(process.pid));
}
function Z(e, n) {
  return Aee(n, e);
}
async function mi(e, n, t) {
  try {
    let s = Z(e, n);
    if (t) {
      let w = await t.read([{
          key: Rn(s),
          offset: 0,
          length: jg + 1
        }]),
        u = w.ok ? w.value.items[0] : void 0;
      if (!u?.found || u.totalBytes > jg || u.value.byteLength > jg) return null;
      return Buffer.from(u.value).toString("utf8");
    }
    let d = W(s, "SKILL.md"),
      S = await we(d);
    if (!S.isFile() || S.size > jg) return null;
    return await ii(d, "utf8");
  } catch {
    return null;
  }
}
function Rn(e) {
  return gt(W(e, "SKILL.md"));
}
async function ft(e, n, t) {
  try {
    let s = Z(e, n);
    if (t) return (await t.statMeta(Rn(s))).ok;
    return (await we(W(s, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}
async function _i(e, n) {
  try {
    if (n) {
      let t = await n.statMeta(Rn(e));
      return !t.ok && t.error.code === "NotFound";
    }
    return await we(W(e, "SKILL.md")), !1;
  } catch (error) {
    return K(error) || k(error) === "ENOTDIR";
  }
}
function ki(e) {
  return {
    skillId: e.id,
    name: e.directory || e.name || e.id,
    description: e.description,
    source: "session-refs",
    updatedAt: null,
    requestedVersion: e.version || void 0
  };
}
function carry(e, n) {
  return {
    ...e,
    backingPluginId: n.backingPluginId
  };
}
var pi = {
  idOf: e => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};
function yi(e, n, t) {
  return i7r(n, t, {
    ...pi,
    dirFor: s => Z(e, s),
    carry: carry,
    ...(lt() && {
      markCollisionLoser: markCollisionLoser
    })
  });
}
function markCollisionLoser(e) {
  return {
    ...e,
    updatedAt: updatedAt
  };
}
function Si(skillName, n, baseDir) {
  let s = Zxn({
    skillName: skillName,
    displayName: void 0,
    description: $ue(n.description),
    hasUserSpecifiedDescription: !0,
    markdownContent: "",
    allowedTools: [],
    argumentHint: void 0,
    argumentNames: [],
    whenToUse: void 0,
    version: void 0,
    model: void 0,
    disableModelInvocation: n.disableModelInvocation ?? !1,
    userInvocable: n.userInvocable ?? !0,
    source: "userSettings",
    baseDir: baseDir,
    serverAttribution: RIn(n.skillId, n.backingPluginId),
    loadedFrom: "syncedSkills",
    hooks: void 0,
    executionContext: void 0,
    agent: void 0,
    paths: void 0,
    effort: void 0,
    shell: void 0,
    skillFile: WAi("was not read: this command was listed before its file was downloaded")
  });
  if (s?.type === "prompt") s.getPromptForCommand = async (d, S) => {
    let w = await Ao(cMe(skillName), S.abortController.signal, () => new Ke());
    if (w.ok) {
      let h = (await Zp(Uc(), S.storageV5)).find(item => item.loadedFrom === "syncedSkills" && aW(item) === aW(s) && item.name === s.name && item.type === "prompt" && item.getPromptForCommand !== s.getPromptForCommand);
      if (h && h.type === "prompt") return s.source = h.source, s.skillRoot = h.skillRoot, s.skillFile = h.skillFile, s.contentLength = h.contentLength, s.progressMessage = h.progressMessage, s.userInvocable = h.userInvocable, h.getPromptForCommand(d, S);
    }
    let u = w.ok ? "skill not found after download" : w.reason;
    return [{
      type: "text",
      text: !w.ok && w.withheld ? `${flr(s.name)} Proceed without it.` : `Skill ${skillName} could not be downloaded (${u}). Proceed without it.`
    }];
  };
  return s;
}
var wi = {
  landed: "landed",
  anotherSkills: "another_skills",
  claimLapsed: "claim_lapsed",
  unattributed: "unattributed"
};
function hi(storageV5_4, n) {
  return wJr({
    root: () => n,
    configHome: configHome,
    rootLabel: rootLabel,
    event: "skills_sync_root_refused",
    storageV5: storageV5_4
  });
}
var vt = kJr("zip fetch failed"),
  yn = oTn("skill archive holds no usable skill", "validate"),
  Mi = oTn("skill archive could not be unpacked", "unpack"),
  mt = new Set(["ENOSPC", "EDQUOT", "EIO", "EROFS", "EACCES", "EPERM"]);
function We(step, n) {
  let code = k(n) ?? "unknown";
  return V("warn", "skills_sync_local_disk_failed", {
    step: step,
    code: code
  }), {
    ok: !1,
    cause: "local",
    reason: "the skill could not be saved or unpacked",
    step: step,
    code: code
  };
}
async function Ge(e, n) {
  try {
    return await si(e, n), null;
  } catch (error) {
    return k(error) ?? "unknown";
  }
}
async function hn(e, {
  round: round,
  credentials: credentials,
  storageV5: storageV5_5,
  replacesAttributedCopy: replacesAttributedCopy,
  targetHeldSkillFile: targetHeldSkillFile,
  classifyOccupant: classifyOccupant,
  markTargetDestroyed: markTargetDestroyed,
  noteDownloadedBytes: noteDownloadedBytes
}, h) {
  let L = round.root,
    R = Z(L, e.name),
    M = W(Le(L), kt(L, R)),
    P = W(xf(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (round.guard.refused()) return P6t;
    if (h !== void 0) await ri(P, h);else {
      if (!replacesAttributedCopy && targetHeldSkillFile && (await classifyOccupant(te(R))) === "inFlight") return V("info", "skills_sync_target_in_flight_elsewhere"), rQo;
      let D;
      try {
        D = await Zdi(e.skillId, P, e.requestedVersion, {
          isBackground: !0,
          credentials: credentials
        });
      } catch (error) {
        return We("save_zip", error);
      }
      if (!D) return vt;
      noteDownloadedBytes((await Ye(P).catch(() => null))?.size ?? 0);
    }
    if (!(await round.guard.verify())) return P6t;
    try {
      await pe(M, {
        recursive: !0,
        force: !0
      }), await ti(Le(L), {
        recursive: !0
      });
    } catch (error) {
      return We("staging", error);
    }
    let z;
    try {
      await t7r(P, M, {
        skipEntry: D => D.split(/[\\/]/).some(item => Ree(item))
      }), z = await _t(M, {
        withFileTypes: !0
      });
    } catch (error) {
      if (!mt.has(k(error) ?? "")) throw error;
      return We("unpack", error);
    }
    let Y = M;
    if (!z.some(item => item.name === "SKILL.md") && z.length === 1 && z[0].isDirectory()) Y = W(M, z[0].name);
    try {
      if (!(await we(W(Y, "SKILL.md"))).isFile()) return V("warn", "skills_sync_extracted_zip_unusable"), yn;
    } catch (error) {
      if (mt.has(k(error) ?? "")) return We("unpack", error);
      return V("warn", "skills_sync_extracted_zip_unusable"), yn;
    }
    if (await n7r(Y)) return V("warn", "skills_sync_extracted_zip_unusable"), yn;
    if (!(await round.guard.verify())) return P6t;
    let occupant = replacesAttributedCopy ? "own" : void 0,
      code_3 = null;
    if (!replacesAttributedCopy) {
      if (code_3 = await Ge(Y, R), code_3 !== null && Far(code_3)) {
        let D = await classifyOccupant(te(R));
        if (D === "inFlight") return V("info", "skills_sync_target_in_flight_elsewhere"), rQo;
        occupant = wi[D];
      }
    }
    let H = null,
      ce = !1,
      he = occupant === "claim_lapsed" || occupant === "unattributed";
    if (occupant !== void 0) {
      let code_2;
      if (he) {
        let I = await nQo(ht(R, storageV5_5));
        code_2 = I.moved ? null : I.code, H = I.moved ? I.to : null;
      } else {
        let I = W(Le(L), `.replaced-${process.pid}-${Math.random().toString(36).slice(2)}`);
        code_2 = await Ge(R, I);
        let j = code_2 === "EXDEV" ? await Promise.all([we(L), we(Le(L))]).then(([O, Ee]) => O.dev === Ee.dev, () => !1) : x() === "windows" && code_2 !== null && OH.has(code_2);
        if (code_2 === null) H = I;else if (code_2 === "ENOENT") code_2 = null;else if (j) ce = !0, markTargetDestroyed(), code_2 = await pe(R, {
          recursive: !0,
          force: !0
        }).then(() => null, O => k(O) ?? "unknown");
        if (code_2 !== null) V("warn", "skills_sync_occupant_displace_failed", {
          code: code_2
        });
      }
      if (code_2 !== null) return {
        ...sTn,
        code: code_2,
        occupant: occupant
      };
      code_3 = await Ge(Y, R);
    }
    if (code_3 !== null) {
      let restored = H !== null && occupant !== "another_skills" && (await Ge(H, R)) === null;
      if (restored) kW(), NP();else if (H !== null) markTargetDestroyed();
      if (restored && he && H !== null) await gn(oi(H)).catch(() => {});
      let I = H !== null || ce;
      return V("warn", "skills_sync_promotion_failed", {
        code: code_3,
        ...(I && {
          restored: restored
        })
      }), {
        ...iTn(code_3),
        occupant: I ? occupant : void 0
      };
    }
    return Xmi;
  } finally {
    if (await pe(P, {
      force: !0
    }).catch(() => {}), !round.guard.refused() && (await VK(L, configHome(), {
      event: "skills_sync_root_refused",
      phase: "sweep",
      rootLabel: rootLabel
    }, {
      checkStagingLeaf: !0,
      storageV5: storageV5_5
    }).catch(() => null)) === "real") await pe(M, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var Ri = 500;
async function vi(e, n) {
  try {
    return await hn(e, n, void 0);
  } catch {
    return V("warn", "skills_sync_extract_retry"), await J(Ri), hn(e, n, void 0);
  }
}
async function bi(e, n) {
  let {
    fromHostMount: fromHostMount
  } = n;
  if (fromHostMount !== void 0) {
    let s = await hn(e, n, fromHostMount.zip).catch(() => null);
    if (s?.ok) n.markLandedFromHostMount();
    if (s !== null && (s.ok || s.cause !== "extract")) return s;
    xms(fromHostMount.kind, {
      reason: s === null ? "landing_threw" : "zip_unusable"
    }, n.hostMountMissCounts);
  }
  return vi(e, n);
}
async function vn(e, n, t, s) {
  let d = kf();
  if (d.syncPromise) return d.syncPromise;
  return d.syncPromise = Li(e, n, t, s).finally(() => {
    d.syncPromise = null;
  }), d.syncPromise;
}
async function Di(e, n) {
  let t = W(e, cU),
    s,
    d,
    S;
  try {
    d = (await mS(t, Jlt)).content, S = ee(d);
  } catch {
    return null;
  }
  let w = ui().safeParse(S);
  if (w.success) {
    let {
      lastUpdated: lastUpdated,
      skills: skills_3,
      staleDirs: staleDirs_2,
      pendingClaims: pendingClaims_2,
      ...U
    } = w.data;
    s = {
      ...U,
      lastUpdated: lastUpdated,
      skills: xQ(fi(), skills_3),
      staleDirs: Qlt(staleDirs_2),
      pendingClaims: Qlt(pendingClaims_2)
    };
  } else return null;
  let u = [...s.skills.map(M => ({
      row: M,
      syntheticListName: null
    })), ...["staleDirs", "pendingClaims"].flatMap(M => (s[M] ?? []).map(P => ({
      row: {
        name: M === "pendingClaims" ? QNt(P).name : P
      },
      syntheticListName: M,
      entry: P
    })))],
    b = 0,
    skills_4 = [],
    L = [],
    R = [];
  for (let M of u) {
    let row = M.row;
    if (M.syntheticListName === "pendingClaims" && (await bn(M.entry))) {
      R.push(M.entry);
      continue;
    }
    try {
      let z = eFt(row.name, e);
      if (await _Tn(z, ae())) {
        V("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await _Tn(z, je())) {
        V("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await Mn(z, n)) b++;else if (M.syntheticListName === "staleDirs") L.push(M.entry);else if (M.syntheticListName === "pendingClaims") R.push(M.entry);else skills_4.push(M.row);
    } catch (error) {
      if (error instanceof Dht) {
        if (M.syntheticListName === "staleDirs") L.push(M.entry);else if (M.syntheticListName === "pendingClaims") R.push(M.entry);else skills_4.push(M.row);
        continue;
      }
    }
  }
  if (skills_4.length > 0 || L.length > 0 || R.length > 0) {
    let M = _({
      ...s,
      skills: skills_4,
      staleDirs: L.length > 0 ? L : void 0,
      pendingClaims: R.length > 0 ? R : void 0
    }, null, 2);
    if (M !== d) await zn(t, M).catch(() => {});
  } else await pe(t, {
    force: !0
  }).catch(() => {});
  return b;
}
async function Li(e, storageV5_6, credentials_2, s) {
  let d = Date.now(),
    S = performance.now(),
    w = !1,
    u = !1,
    account_opt_in = !1,
    idle_2 = !1,
    kept = 0,
    R = 0,
    held_back = 0,
    P = () => {
      let duration_ms = Date.now() - d;
      return {
        account_opt_in: account_opt_in,
        idle: idle_2,
        woken: "woken" in s,
        trigger: f(s.trigger),
        ...("tickLateMs" in s && {
          tick_late_ms: s.tickLateMs
        }),
        ...(kept > 0 && {
          kept: kept
        }),
        ...(held_back > 0 && {
          held_back: held_back
        }),
        ...(R > 0 && {
          approx_downloaded_bytes: Number(R.toPrecision(2))
        }),
        duration_ms: duration_ms,
        suspended_ms: Math.max(0, Math.round(duration_ms - (performance.now() - S)))
      };
    },
    z = new Map(),
    Y = !1,
    U = null,
    N = kf(),
    H = !1,
    listedDirs = null,
    removalTriedDirs = new Set(),
    D = !1;
  try {
    if (account_opt_in = IKn(), A6t()) account_opt_in = !0;
    if (!Uve(e) || !Xlt()) {
      V("info", "skills_sync_gate_closed");
      let {
        placeholders: placeholders,
        listedOwnerships: listedOwnerships,
        failedLandings: failedLandings
      } = kf();
      if (listedOwnerships.clear(), failedLandings.clear(), placeholders.size > 0) placeholders.clear(), gle();
      c("skills_sync_round", "gate_closed", P());
      return;
    }
    if (qmi()) {
      V("info", "skills_sync_policy_verdict_pending"), c("skills_sync_round", "policy_verdict_pending", P());
      return;
    }
    let bucket_2 = await ED(credentials_2);
    if (bucket_2 === null) {
      V("info", "skills_sync_bucket_unresolved"), c("skills_sync_round", "bucket_unresolved", P());
      return;
    }
    let round_2 = hi(storageV5_6, yt(bucket_2));
    U = round_2;
    let O = round_2.root;
    idle_2 = s.trigger === "resync" && !("woken" in s) && N.consecutiveFailedRounds === 0 && !clr(e) && qn();
    let Ee = ggi(e);
    if (Ee !== void 0) await Ee;
    let convertedSkillsAsPlugins_2 = mgi(e);
    MIs(convertedSkillsAsPlugins_2, storageV5_6);
    let Me = await it({
      syncedRoot: ae(),
      bucket: bucket_2,
      root: O,
      trigger: s.trigger,
      pinned: _L(e),
      lastGeneration: N.bucketGeneration,
      holdsPlaceholders: N.placeholders.size > 0,
      idle: idle_2,
      convertedSkillsAsPlugins: convertedSkillsAsPlugins_2
    });
    if (!Me.list) {
      N.bucketGeneration = Me.generation;
      let r = await un(async () => (await ke(storageV5_6, round_2))?.skills ?? []);
      if (Me.reload) {
        let y = await ke(storageV5_6, round_2);
        if (y) {
          let T = new Set();
          for (let B of y.skills) try {
            T.add(te(Z(O, B.name)));
          } catch {}
          ias(T);
        }
        listedDirs = new Set(), gle();
      } else if (r) gle();
      g("skills_sync_round", {
        ...P(),
        reused: !0,
        reloaded: Me.reload || r
      });
      return;
    }
    D = !0, V("info", "skills_sync_starting");
    let G,
      skills_5 = [],
      Lt = performance.now();
    if (_L(e)) {
      let [r, y] = await Promise.all([BXe.of(e).listEntries("skills", {
        startup: s.trigger === "startup"
      }), i.CLAUDE_CODE_SYNC_SKILLS ? bwn({
        isBackground: !0,
        credentials: credentials_2,
        ...(convertedSkillsAsPlugins_2 && {
          convertedSkillsAsPlugins: !0
        })
      }) : null]);
      if (!r.success) G = r;else if (skills_5 = r.entries.map(ki), y === null) G = {
        success: !0,
        skills: skills_5
      };else if (!y.success) G = y;else G = {
        success: !0,
        skills: s7r(skills_5, y.skills, T => T.skillId, (T, B) => ({
          ...carry(T, B),
          userInvocable: B.userInvocable,
          disableModelInvocation: B.disableModelInvocation
        }))
      };
    } else G = await bwn({
      isBackground: !0,
      credentials: credentials_2,
      ...(convertedSkillsAsPlugins_2 && {
        convertedSkillsAsPlugins: !0
      })
    });
    let list_ms = Math.round(performance.now() - Lt);
    if (H = !G.success && Poe(G), H) V("warn", "skills_sync_list_refused"), N.listedOwnerships.clear(), G = {
      success: !0,
      skills: skills_5
    };
    if (!G.success) {
      N.consecutiveFailedRounds++;
      let r = Xft(G),
        y = {
          ...P(),
          ...r
        };
      if (V("warn", "skills_sync_list_failed", y), l("tengu_skills_sync_list_failed", y), (G.kind === "timeout" || G.kind === "network" || G.kind === "http") && y.suspended_ms > xe) c("skills_sync_round", "suspended", y);else m("skills_sync_round", "list_failed", y);
      return;
    }
    N.consecutiveFailedRounds = H ? N.consecutiveFailedRounds + 1 : 0;
    let Ce = await _5e(ae(), bucket_2);
    if (Ce === "unmarked" && (await Ye(O).then(r => r.isDirectory(), () => !1)) && (await Lve({
      dir: O,
      trashRoot: je(),
      configHome: configHome(),
      failureEvent: "skills_sync_trash_move_failed",
      storageV5: storageV5_6
    }).catch(() => !1))) V("info", "skills_sync_unmarked_bucket_quarantined");
    if (await Dt(storageV5_6, O), typeof Ce === "object") throw V("warn", "skills_sync_root_refused", {
      phase: "round_head",
      root: $1e(W(rootLabel, bucket_2)),
      component: "marker",
      reason: "unverified",
      code: Ce.unreadable
    }), new PQ("unverified", {
      code: Ce.unreadable
    });
    await vJr(ae(), bucket_2), Y = !0;
    let Re = await dlr(O);
    if (!H && (await un(async () => (await ke(storageV5_6, round_2))?.skills ?? [])) || Me.shared && Re !== null && N.bucketGeneration !== null && Re.token !== N.bucketGeneration) gle();
    await ci(storageV5_6);
    let ie = await ke(storageV5_6, round_2),
      Ln = convertedSkillsAsPlugins_2 && !H ? await Gn(ie?.skills ?? [], G.skills, bucket_2) : [];
    kept = Ln.length;
    let En = Re !== null && convertedSkillsAsPlugins_2 ? tt(Re) : Re,
      {
        toDownload: toDownload,
        toRemove: toRemove,
        carryover: carryover,
        liveDirs: liveDirs,
        carryoverOwningLiveDir: carryoverOwningLiveDir
      } = yi(O, [...G.skills, ...Ln], ie?.skills ?? []),
      It = bTn(liveDirs),
      Ze = new Map(),
      Qe = async r => {
        let y;
        try {
          y = eFt(r, O);
        } catch (error) {
          if (error instanceof Dht) return !1;
          return !0;
        }
        let T = await It(y);
        if (T === "live") return !0;
        if (T === "indeterminate") return !1;
        removalTriedDirs.add(y);
        let B = Ze.get(y);
        if (B !== void 0) return B;
        let A = Mn(y, storageV5_6).finally(() => Ze.delete(y));
        return Ze.set(y, A), A;
      },
      Je = new Set(Array.from(liveDirs, r => te(r))),
      Ct = ias(Je);
    if (pgi(Je) + Ct > 0) NP(), wn(), XK.emit();
    listedDirs = liveDirs;
    let Tt = await Promise.all(carryover.map(item => carryoverOwningLiveDir.has(item.skillId) ? ft(O, item.name, storageV5_6) : null)),
      en = new Set();
    for (let [r, y] of carryover.entries()) {
      let T = Tt[r];
      if (T === null) continue;
      if (!T) {
        let item_3 = G.skills.find(item => item.skillId === y.skillId);
        if (item_3) en.add(y.skillId), toDownload.push({
          item: item_3
        });
        continue;
      }
      let B = te(Z(O, y.name));
      if (N.placeholders.delete(B)) N.pendingDownloads.get(B)?.resolve({
        ok: !0
      }), N.pendingDownloads.delete(B), kW(), NP(), u = !0, V("info", "skills_sync_materialized_elsewhere");
    }
    let At = carryover.filter(item => !en.has(item.skillId)),
      Te = new Map(carryover.filter(item => en.has(item.skillId)).map(item => [item.skillId, item])),
      Q = new Set(ie?.staleDirs ?? []),
      staleDirs_3 = new Set(),
      pendingClaims_4 = new Set(),
      nn = {
        pid: process.pid,
        procStart: await tc(process.pid)
      },
      tn = [];
    if (ie?.pendingClaims) {
      let pendingClaims_3 = ie.pendingClaims,
        y = new Set();
      for (let T of pendingClaims_3) if (await bn(T)) y.add(QNt(T).name);else tn.push(T);
      for (let T of tn) {
        let {
          name: name
        } = QNt(T);
        if (y.has(name) || Je.has(name)) continue;
        Q.add(name), pendingClaims_4.add(T);
      }
    }
    for (let r of Q) if (await Qe(r)) Q.delete(r), staleDirs_3.add(r);
    if (staleDirs_3.size > 0 || pendingClaims_4.size > 0) u = !0;
    let Ae = gJr(ie?.skills ?? [], [...carryover, ...toDownload.flatMap(({
        prev: prev
      }) => prev ?? [])], r => r.skillId, (r, y) => r.backingPluginId === y.backingPluginId && r.updatedAt === updatedAt === (y.updatedAt === updatedAt)),
      {
        due: due_2,
        heldBack: heldBack_2
      } = await at(N.failedLandings, toDownload, async ({
        prev: prev_2
      }) => prev_2 !== void 0 && (await ft(O, prev_2.name, storageV5_6)));
    if (held_back = heldBack_2.length, due_2.length === 0 && toRemove.length === 0) {
      if (u) gle();
      if ((staleDirs_3.size > 0 || pendingClaims_4.size > 0 || Ae.attributionMoved) && ie) await pn({
        lastUpdated: ie.lastUpdated,
        skills: Ae.rows,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0,
        pendingClaims: void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
      if (ie) {
        let date = new Date();
        await ni(Xe(O), date, date).catch(() => {});
      }
      let r = u ? null : En;
      dt(await wTn(O, "skills", Q.size === 0 && heldBack_2.length === 0 && !H && !_L(e), r, Se(convertedSkillsAsPlugins_2)), r), V("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - d,
        list_ms: list_ms,
        held_back: heldBack_2.length,
        ...(s.trigger === "startup" && {
          first_message_gate_open_ms: Math.round(performance.now() - S)
        })
      });
      let y = {
        ...P(),
        no_changes: !0
      };
      if (H) c("skills_sync_round", "not_entitled", y);else if (heldBack_2.length > 0) c("skills_sync_round", "landing_held_back", y);else g("skills_sync_round", y);
      return;
    }
    let In = 0;
    for (let {
      item: item_4,
      prev: prev_3
    } of due_2) if (!prev_3) {
      let T = Z(O, item_4.name),
        B = Si(te(T), item_4, T);
      if (B === void 0) continue;
      ugi(B), In++, z.set(item_4.skillId, lgi(te(Z(O, item_4.name))));
    }
    if (In > 0) NP(), wn(), XK.emit();
    let Cn = !0;
    try {
      let pendingClaims_5 = [];
      for (let {
        item: item_5
      } of due_2) try {
        pendingClaims_5.push(cyo(te(Z(O, item_5.name)), nn));
      } catch {}
      if (pendingClaims_5.length > 0) await pn({
        lastUpdated: ie?.lastUpdated ?? 0,
        skills: Ae.rows,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0,
        pendingClaims: pendingClaims_5
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
    } catch (error) {
      if (error instanceof PQ) throw error;
      Cn = !1, V("warn", "skills_sync_pending_claims_write_failed");
    }
    Sn().resolve();
    let first_message_gate_open_ms = Math.round(performance.now() - S);
    if (!Cn) {
      if (m("skills_sync_round", "pending_claims_write_failed", P()), u) gle();
      return;
    }
    let le = [],
      Tn = heldBack_2.flatMap(({
        item: item_6,
        prev: prev_4
      }) => prev_4 ?? Te.get(item_6.skillId) ?? []),
      deferredRows_2 = [],
      deferred = 0,
      An = 0,
      ye = {},
      Fn = ({
        item: item_7,
        prev: prev_5
      }) => prev_5 === void 0 && !Te.has(item_7.skillId) ? J0i(item_7) : void 0,
      Pn = due_2.flatMap(item => Fn(item) ?? []),
      Nn = new Set(Pn),
      hostMountMissCounts = new Map(),
      On = r => (V("warn", "skills_sync_host_mount_threw"), a(F(r)), null),
      xn = Nn.size > 0 ? Q0i(Nn, hostMountMissCounts).catch(On) : null,
      Pe = new Set(),
      Bn = new Map();
    await Promise.all(due_2.map(Ja(kn, async ({
      item: item_8
    }) => {
      Bn.set(item_8, await mi(O, item_8.name, storageV5_6));
    }))), await Promise.all(due_2.map(FBi(kn, async r => {
      let kind = Fn(r);
      if (kind === void 0) return;
      let zip = await (await xn)?.readZip(kind, r.item).catch(On);
      return zip ? {
        kind: kind,
        zip: zip
      } : void 0;
    }, async ({
      item: item_9,
      prev: prev_6
    }, fromHostMount_2) => {
      let B = Bn.get(item_9) ?? null,
        A = vt;
      try {
        A = await bi(item_9, {
          round: round_2,
          credentials: credentials_2,
          storageV5: storageV5_6,
          classifyOccupant: X => Ei(X, storageV5_6, round_2, item_9.skillId),
          markTargetDestroyed: () => {
            w = !0;
          },
          replacesAttributedCopy: prev_6 !== void 0 && prev_6.updatedAt !== updatedAt && (await bt(O, prev_6.name, item_9.name)) || Te.has(item_9.skillId),
          targetHeldSkillFile: He() && B !== null,
          fromHostMount: fromHostMount_2,
          markLandedFromHostMount: () => {
            Pe.add(item_9.skillId);
          },
          hostMountMissCounts: hostMountMissCounts,
          noteDownloadedBytes: X => {
            R += X;
          }
        });
      } catch {
        A = Mi, V("warn", "skills_sync_extract_failed");
      }
      if (A.ok) {
        if (le.push(item_9), N.failedLandings.delete(item_9.skillId), prev_6 && prev_6.name !== item_9.name) {
          if (!(await Qe(prev_6.name))) Q.add(prev_6.name);
        }
        fgi(te(Z(O, item_9.name))), kW(), NP(), g("skills_sync_download", {
          landed_from_mount: Pe.has(item_9.skillId)
        });
      } else {
        let X = Jmi(A.cause);
        if (X === null) deferred++, V("info", "skills_sync_landing_deferred");else {
          ye[X] = (ye[X] ?? 0) + 1;
          let errno = db(A.code);
          m("skills_sync_download", X, {
            ...(A.step !== void 0 && {
              step: f(A.step)
            }),
            ...(errno !== void 0 && {
              errno: errno
            }),
            ...(A.occupant !== void 0 && {
              occupant: f(A.occupant)
            })
          });
        }
        if (A.cause === "extract" || A.cause === "local") ot(N.failedLandings, item_9);
        let ge = prev_6 ?? Te.get(item_9.skillId);
        if (ge && A.cause === "deferred") {
          if (deferredRows_2.push(ge), prev_6 && prev_6.name !== item_9.name) Q.add(prev_6.name), An++;
        } else if (ge) Tn.push(ge);else try {
          let ne = Z(O, item_9.name);
          if (await Ye(ne).then(() => !1, Nt => K(Nt))) pendingClaims_4.add(cyo(te(ne), nn));
        } catch {}
      }
      z.get(item_9.skillId)?.(A.ok ? {
        ok: !0
      } : {
        ok: !1,
        reason: Qmi(A.cause)
      });
    })));
    let be = [];
    await Promise.all(toRemove.map(Ja(kn, async r => {
      if (!(await Qe(r.name))) be.push(r);
    })));
    let removedSkillIds_2 = new Set(toRemove.map(item => item.skillId));
    for (let r of be) removedSkillIds_2.delete(r.skillId);
    let ln = le.length > 0 || w || be.length < toRemove.length || staleDirs_3.size > 0 || pendingClaims_4.size > 0,
      Pt = ln || An > 0 || Ae.attributionMoved;
    if (removedSkillIds_2.size > 0) NP();
    let Un = le.length > 0 && kwn();
    if ((ln || u) && !Un) gle();
    let Ne = !1;
    if (Pt) {
      let r = [...At, ...le, ...Tn, ...be],
        y = new Set();
      for (let A of [...r, ...deferredRows_2]) try {
        y.add(te(Z(O, A.name)));
      } catch {}
      for (let A of y) pendingClaims_4.add(cyo(A, nn));
      for (let A of tn) if (y.has(QNt(A).name)) pendingClaims_4.add(A);
      let T = (skills_6, onlyOverReadable) => pn({
        lastUpdated: Date.now(),
        skills: skills_6,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds_2,
        deferredRows: deferredRows_2,
        onlyOverReadable: onlyOverReadable
      }, storageV5_6, round_2);
      try {
        await T(r, !1);
      } finally {
        if (Un) NP(), gle();
      }
      let B = le.length > 0 && He() ? 2 : 0;
      for (let A = 0; A < B; A++) {
        await J(N.lostRowsRecheckMs * (1 + Math.random()));
        let X = await ke(storageV5_6, round_2),
          ge = new Set(X?.skills.map(ne => ne.skillId));
        if (Ne = !le.every(item => ge.has(item.skillId)), !Ne) break;
        if (X === null) continue;
        V("info", "skills_sync_manifest_rows_lost");
        try {
          await T(le, !0);
        } catch (error) {
          if (error instanceof PQ) throw error;
          a(F(error));
          break;
        }
      }
      if (Ne) V("warn", "skills_sync_manifest_rows_unconfirmed");
    }
    let failed = due_2.length - le.length - deferred,
      Hn = await xn,
      cn = {
        downloaded: le.length - Pe.size,
        from_mount: Pe.size,
        mount_eligible: Pn.length,
        mount_read_ms: Hn?.spentMs() ?? 0,
        mount_wait_ms: Hn?.waitedMs() ?? 0,
        ...Hbr(hostMountMissCounts)
      };
    V("info", "skills_sync_complete", {
      ...cn,
      removed: toRemove.length,
      duration_ms: Date.now() - d,
      list_ms: list_ms,
      ...(s.trigger === "startup" && {
        first_message_gate_open_ms: first_message_gate_open_ms
      })
    });
    let Wn = P();
    l("tengu_skills_sync_success", {
      ...Wn,
      ...cn,
      removed: toRemove.length,
      total: G.skills.length
    });
    let Kn = ln || u ? null : En;
    dt(await wTn(O, "skills", !H && failed === 0 && heldBack_2.length === 0 && deferred === 0 && !Ne && be.length === 0 && Q.size === 0 && !_L(e), Kn, Se(convertedSkillsAsPlugins_2)), Kn);
    let Oe = {
      ...Wn,
      ...cn,
      deferred: deferred,
      removed: toRemove.length,
      total: G.skills.length
    };
    if (failed > 0) c("skills_sync_round", "download_failed", {
      ...Oe,
      failed: failed,
      download_failed: ye.download_failed ?? 0,
      extract_failed: ye.extract_failed ?? 0,
      root_refused: ye.root_refused ?? 0,
      local_failed: ye.local_failed ?? 0
    });else if (H) c("skills_sync_round", "not_entitled", Oe);else if (heldBack_2.length > 0) c("skills_sync_round", "landing_held_back", Oe);else g("skills_sync_round", Oe);
  } catch (error) {
    if (u || w) gle();
    if (error instanceof PQ && Y) V("warn", "skills_sync_late_root_refusal", {
      reason: error.reason,
      duration_ms: Date.now() - d
    }), c("skills_sync_round", "root_refused", P()), Y = !1;else if (error instanceof PQ) V("warn", "skills_sync_root_refused_round", {
      reason: error.reason,
      duration_ms: Date.now() - d
    }), c("skills_sync_round", "root_refused", P());else {
      if (!H) N.consecutiveFailedRounds++;
      V("error", "skills_sync_unexpected_error", {
        duration_ms: Date.now() - d
      });
      let j = P();
      l("tengu_skills_sync_error", j), m("skills_sync_round", "unexpected_error", j);
    }
  } finally {
    if (D) et();
    for (let I of z.values()) I({
      ok: !1,
      reason: "skills sync failed"
    });
    if (Sn().resolve(), listedDirs !== null && U !== null) await Kmi({
      bucketRoot: U.root,
      listedDirs: listedDirs,
      removalTriedDirs: removalTriedDirs,
      isSkillFileGone: I => _i(I, storageV5_6)
    }).catch(() => {
      V("warn", "skills_sync_hooks_removal_failed");
    });
    if (U === null || U.guard.refused()) Y = !1;
    if (Y && U !== null) {
      if ((await VK(U.root, configHome(), {
        event: "skills_sync_root_refused",
        phase: "sweep",
        rootLabel: rootLabel
      }, {
        checkStagingLeaf: !0,
        storageV5: storageV5_6
      }).catch(() => null)) === "real") await pe(Le(U.root), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
}
async function bn(e) {
  let {
    ownerPid: ownerPid,
    ownerProcStart: ownerProcStart
  } = QNt(e);
  return ownerPid !== void 0 && ownerPid !== process.pid && El(ownerPid) && (await cT(ownerPid, ownerProcStart));
}
async function Ei(e, n, t, s) {
  let d = await ke(n, t);
  if (!d) return "unattributed";
  let S = !1;
  for (let w of d.skills) if (await bt(t.root, w.name, e)) {
    if (s === void 0 || w.skillId === s && w.updatedAt !== updatedAt) return "landed";
    S = !0;
  }
  if (S) return "anotherSkills";
  for (let w of d.pendingClaims ?? []) if (QNt(w).name === e && (await bn(w))) {
    if (!He()) return "inFlight";
    let u = await Ye(W(t.root, e)).then(b => Math.floor(b.ctimeMs), b => {
      if (K(b)) return -1 / 0;
      return V("warn", "skills_sync_occupant_unreadable", {
        code: k(b) ?? "unknown"
      }), 1 / 0;
    });
    if (!(Date.now() - u >= li)) return "inFlight";
    return V("info", "skills_sync_live_claim_timed_out"), "claimLapsed";
  }
  return "unattributed";
}
async function bt(e, n, t) {
  try {
    let s = Z(e, n),
      d = Z(e, t);
    return te(s) === te(d) || (await _Tn(s, d));
  } catch {
    return !1;
  }
}
function Dt(storageV5_7, root_2) {
  return bJr({
    root: root_2,
    trashRoot: je(),
    configHome: configHome(),
    events: {
      refused: "skills_sync_root_refused"
    },
    storageV5: storageV5_7
  });
}
export { s7s, jUe, i7s, a7s, l7s, m9n, gle, h9n };