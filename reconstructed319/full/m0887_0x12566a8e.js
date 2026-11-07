// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Uc,
  lB,
  Wwt,
  IKn,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Ke,
  F,
  k,
  db,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J,
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  yf,
  Twe,
  TN,
  OT
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  MIs,
  v,
  rn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  OH,
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  xf
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  cT,
  tc
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  El
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  Kmi,
  A6t,
  h$,
  Xlt,
  qmi,
  Ymi,
  tQo,
  Jlt,
  Qlt,
  hJr,
  Nar,
  xQ,
  gJr,
  yJr,
  Mve,
  Dve,
  Zlt,
  x6t,
  $1e,
  PQ,
  VK,
  nQo,
  Lve,
  bJr,
  SJr,
  wJr,
  Xmi,
  P6t,
  oTn,
  kJr,
  rQo,
  Far,
  sTn,
  iTn,
  Jmi,
  Qmi,
  y5e,
  _5e,
  vJr,
  O6t,
  t7r,
  _Tn,
  bTn,
  n7r,
  r7r,
  kxt,
  STn,
  wTn,
  dlr,
  o7r,
  Uve,
  clr,
  ulr,
  lgi,
  cMe,
  flr,
  ugi,
  fgi,
  pgi,
  mgi,
  ggi,
  s7r,
  i7r,
  Sgi,
  aW,
  Hdt,
  Hes,
  XK,
  Zp,
  NP,
  Zxn,
  kW,
  ias
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  kf,
  $ue
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  cU,
  cyo,
  QNt,
  Dht,
  Cse,
  Q7e,
  Ree,
  Aee,
  eFt,
  $F,
  Z7e,
  ED,
  wnn
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  WAi
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  sU
} from "B:/~BUN/root/chunk-wss0tnsx.js";
import {
  xms,
  Hbr,
  J0i,
  Q0i,
  Lce,
  Poe,
  Xft,
  _L,
  BXe
} from "B:/~BUN/root/chunk-nk59bmc9.js";
import {
  Fpt,
  Yys
} from "B:/~BUN/root/chunk-5gm1xyqv.js";
import {
  RIn
} from "B:/~BUN/root/chunk-ex2shtaj.js";
import {
  eRs
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  afe,
  zFt
} from "B:/~BUN/root/chunk-r1gg0qbg.js";
import {
  c3o,
  bwn,
  Zdi
} from "B:/~BUN/root/chunk-1mn6d96v.js";
import {
  kwn
} from "B:/~BUN/root/chunk-kak11zak.js";
import {
  war
} from "B:/~BUN/root/chunk-mvd8n96a.js";
import {
  jg
} from "B:/~BUN/root/chunk-28zr9ymz.js";
import {
  Ja,
  FBi
} from "B:/~BUN/root/chunk-v91d7hbv.js";
import {
  o,
  E,
  hN,
  oe,
  C,
  xt
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  mS
} from "B:/~BUN/root/chunk-x3gsqe09.js";
import {
  lstat as Ye,
  lutimes as ni,
  mkdir as ti,
  readdir as _t,
  readFile as ii,
  rename as si,
  rm as pe,
  rmdir as gn,
  stat as we,
  writeFile as ri
} from "fs/promises";
import {
  basename as te,
  dirname as oi,
  join as W,
  relative as kt,
  sep as ai
} from "path";
import {
  lstat as Ot
} from "fs/promises";
async function Gn(e, n, t) {
  let s = new Set(n.map((u) => u.skillId)),
    d = e.filter((u) => u.backingPluginId !== void 0 && u.updatedAt !== Lce && !s.has(u.skillId) && Hes(t, u.backingPluginId));
  if (d.length === 0) return [];
  let S = d,
    w = "another_session";
  try {
    if (await Yys((b) => b.pid !== process.pid && b.kind !== "daemon" && b.asksForConvertedSkills !== !0 && b.asksForConvertedSkills !== null) === void 0) {
      let b = await Sgi(t, new Set(d.flatMap((h) => h.backingPluginId ?? [])));
      if (b === null) w = "plugins_bucket_unread";
      else w = "no_plugin_folder", S = d.filter((h) => h.backingPluginId !== void 0 && !b.has(h.backingPluginId))
    }
  } catch (u) {
    if (w = "registry_unreadable", !(u instanceof Fpt)) w = "read_failed", a(F(u))
  }
  if (S.length > 0) V("info", "skills_sync_converted_copies_kept", {
    count: S.length,
    reason: w
  });
  return S
}
async function un(e) {
  let n = Hdt(),
    t = (Wwt() ?? []).filter(({
      pluginId: R
    }) => R !== void 0 && n.get(R)?.heldBack === !1),
    s = await Promise.all(t.map(({
      folder: R
    }) => Ot(R).then(() => !0, (M) => !K(M)))),
    d = t.filter((R, M) => !s[M]),
    S = kf(),
    w = d.filter(({
      folder: R
    }) => S.hidingFoldersGone.has(R)),
    u = d.filter(({
      folder: R
    }) => !S.hidingFoldersGone.has(R)),
    b = u.length > 0 ? await e() : [],
    h = new Set(b.flatMap((R) => R.updatedAt === Lce ? [] : R.backingPluginId ?? [])),
    L = u.filter(({
      pluginId: R
    }) => R !== void 0 && h.has(R));
  if (S.hidingFoldersGone = new Set([...w, ...L].map(({
      folder: R
    }) => R)), L.length === 0) return !1;
  return V("info", "skills_sync_hiding_plugin_folder_gone", {
    count: L.length
  }), !0
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
  jn = 180000,
  xe = 45000;

function re() {
  let e = v(Ut, $n);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return Bt;
  return Math.min(Math.max(e, Ht), Wt) * 60000
}

function qn() {
  let e = re();
  return Be() > e && eRs(e) && !afe()
}

function Be() {
  let e = v(Kt, Yn),
    n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Gt) : Yn,
    t = re();
  return Math.max(t, Math.min(t * n, Yt))
}

function Zn() {
  return jt + Math.floor(Math.random() * Xt)
}

function ze(e) {
  let n = re();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * zt)
}

function Qn(e) {
  let n = kf();
  if (n.resyncTimer) return;
  n.resyncRunRound = e, De(n, e, ze(n.consecutiveFailedRounds), "resync", !1)
}

function fn(e) {
  let n = kf();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  clearTimeout(n.resyncTimer), De(n, n.resyncRunRound, e, "resync", !1)
}

function Jn() {
  let e = kf();
  if (e.stopAwaitingActivity) return;
  let n = [lB, zFt].map((t) => t(() => {
    if (e.stopAwaitingActivity?.(), e.syncPromise) e.syncPromise.catch(() => {}).then(() => Xn(e));
    else Xn(e)
  }));
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let t of n) t()
  }
}

function Vn() {
  return kf().stopAwaitingActivity !== null
}

function mn() {
  kf().stopAwaitingActivity?.()
}

function Xn(e) {
  try {
    let n = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !n || n.trigger === "wake_settle") return;
    let t = Math.round(Date.now() - n.wallMs - (performance.now() - n.monotonicMs));
    if (t > xe && e.consecutiveFailedRounds === 0) {
      clearTimeout(e.resyncTimer), nt(e, e.resyncRunRound, n.trigger, t, !0);
      return
    }
    let s = e.consecutiveFailedRounds > 0 ? ze(e.consecutiveFailedRounds) : 0;
    if (n.wallMs + n.delayMs - Date.now() > s) clearTimeout(e.resyncTimer), De(e, e.resyncRunRound, s, "resync", !0)
  } catch (n) {
    a(n)
  }
}

function et() {
  fn(ze(kf().consecutiveFailedRounds))
}

function De(e, n, t, s, d) {
  let S = Date.now() + t;
  e.resyncArmed = {
    trigger: s,
    delayMs: t,
    wallMs: Date.now(),
    monotonicMs: performance.now()
  }, e.resyncTimer = setTimeout($t, t, e, n, S, s, d), e.resyncTimer.unref?.()
}

function $t(e, n, t, s, d) {
  let S = e.resyncTimer,
    w = Math.max(0, Date.now() - t);
  if (w > xe) {
    nt(e, n, s, w, !1);
    return
  }
  n({
    trigger: s,
    tickLateMs: w,
    ...d && {
      woken: d
    }
  }).catch(() => {}).then(() => {
    if (e.resyncTimer !== S) return;
    De(e, n, ze(e.consecutiveFailedRounds), "resync", !1)
  })
}

function nt(e, n, t, s, d) {
  V("info", "skills_sync_resync_skipped_after_sleep", {
    late_ms: s,
    woken: d
  }), De(e, n, jn, "wake_settle", d);
  try {
    if (!q() && (d || war())) l("tengu_skills_sync_resync_skipped", {
      trigger: f(t),
      tick_late_ms: s,
      settle_ms: jn,
      woken: d
    })
  } catch (S) {
    a(S)
  }
}
var qt = 60000;

function Se(e) {
  let n = yf() ?? "none";
  return e ? `${n}${_n}` : n
}
var _n = ".converted-skills";

function tt(e) {
  return {
    ...e,
    listedFor: e.listedFor.filter((n) => n.endsWith(_n))
  }
}
async function it({
  syncedRoot: e,
  bucket: n,
  root: t,
  trigger: s,
  pinned: d,
  lastGeneration: S,
  holdsPlaceholders: w,
  idle: u,
  convertedSkillsAsPlugins: b
}) {
  let h = !d && n === wnn(),
    L = d ? void 0 : Zt(s, h, u);
  if (L === void 0) return {
    list: !0,
    shared: h
  };
  if (h && u) Jn();
  let R = await o7r(t, L);
  if (!R.reuse || !await y5e(e, n)) return mn(), {
    list: !0,
    shared: h
  };
  let M = await STn(t),
    P = !1;
  if (h) {
    if (M === null || w || !M.listedFor.includes(Se(b))) return mn(), {
      list: !0,
      shared: h
    };
    let z = u && Vn();
    if (u && !z && R.ageMs >= re()) return {
      list: !0,
      shared: h
    };
    P = M.token !== S && s !== "startup";
    let Y = z ? Be() : re();
    if (R.ageMs < Y) fn(Y - R.ageMs + Zn())
  } else {
    let z = M?.listedFor ?? [];
    if (!(b ? z.includes(Se(!0)) : z.includes(Se(!1)) || !z.some((U) => U.endsWith(_n)))) return {
      list: !0,
      shared: h
    }
  }
  return V("info", "skills_sync_round_reused", {
    age_ms: R.ageMs,
    within_ms: R.withinMs
  }), {
    list: !1,
    generation: M?.token ?? null,
    reload: P
  }
}

function Zt(e, n, t) {
  let s = e === "startup" ? r7r() : void 0;
  if (!n || e === "reload") return s;
  if (t) return Be();
  let d = e === "startup" && (!OT() || Twe() && TN()) ? Math.min(qt, re()) : re();
  return Math.max(d, s ?? 0)
}
var Qt = "tengu_placid_noether",
  Jt = 21600000,
  st = 3600000;

function rt(e) {
  return _([e.updatedAt, e.requestedVersion, e.name])
}

function ot(e, n) {
  let t = rt(n),
    s = e.get(n.skillId);
  e.set(n.skillId, {
    version: t,
    failures: s?.version === t ? s.failures + 1 : 1,
    failedAtMs: Date.now()
  })
}
async function at(e, n, t) {
  let s = new Map(n.map(({
    item: u
  }) => [u.skillId, rt(u)]));
  for (let [u, {
      version: b
    }] of e)
    if (s.get(u) !== b) e.delete(u);
  let d = v(Qt, !0) !== !1,
    S = [],
    w = [];
  for (let u of n) {
    let b = e.get(u.item.skillId);
    if (!d || b === void 0) {
      S.push(u);
      continue
    }
    let h = re() * 2 ** (b.failures - 1);
    if (h > st) h = await t(u) ? Math.min(h, Jt) : st;
    if (sU(b.failedAtMs, h)) w.push(u);
    else S.push(u)
  }
  return {
    due: S,
    heldBack: w
  }
}
var Vt = "tengu_jaunty_alpaca";

function lt() {
  return rn(Vt, !0) !== !1
}
var ei = "tengu_quizzical_wirth";

function He() {
  return v(ei, !0) !== !1
}
var kn = 15,
  li = c3o + 60000;

function di() {
  let e = i.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return e && e > 0 ? e : 5000
}

function s7s() {
  let e = i.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return e && e > 0 ? e : 30000
}

function Sn() {
  let e = kf();
  if (!e.firstListDeferred) {
    let n, t = new Promise((s) => {
      n = s
    });
    e.firstListDeferred = {
      promise: t,
      resolve: n
    }
  }
  return e.firstListDeferred
}

function jUe(e, n, t) {
  kf().firstSyncPromise ??= pt(e, n, t), Qn((s) => vn(e, n, t, s))
}

function i7s(e, n, t, s) {
  if (!i.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !clr(e) || s()) return !1;
  if (h$(), !ulr(e) || !Xlt() || Ymi()) return !1;
  return jUe(e, n, t), !0
}

function a7s(e, n, t) {
  let s = Sn();
  return kf().firstSyncPromise ??= pt(e, n, t), s.promise
}
async function l7s(e, n) {
  let t = di() - (performance.now() - n),
    s = await Promise.race([e.then(() => "listed"), J(Math.max(0, t)).then(() => "timed_out")]);
  if (s === "timed_out") l("tengu_skills_sync_wait_timeout", {});
  return s
}
async function m9n(e, n, t, {
  keepLandingWaits: s = !1
} = {}) {
  if (BXe.of(e).discardInflight(), await kf().syncPromise?.catch(() => {}), !s) kf().failedLandings.clear();
  return vn(e, n, t, {
    trigger: "reload"
  })
}

function pt(e, n, t) {
  let s = kf();
  return vn(e, n, t, {
    trigger: "startup"
  }).finally(() => {
    s.firstRoundSettled = !0
  })
}

function wn() {
  let e = kf();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0
}

function gle() {
  wn(), kW(), XK.emit()
}

function dt(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    gle();
    return
  }
  kf().bucketGeneration = e.token
}

function ae() {
  return W(Ue(), $F)
}

function yt(e) {
  return W(ae(), e)
}

function gt(e) {
  return Ve.userConfigDir("skills", kt(W(Ue(), "skills"), e).split(ai))
}
async function St(e) {
  let n = ae();
  if (await VK(n, Ue(), {
      event: "skills_sync_root_refused",
      phase: "prune",
      rootLabel: $F
    }, {
      storageV5: e
    }).catch(() => null) !== "real") return null;
  let s;
  try {
    s = await _t(n, {
      withFileTypes: !0
    })
  } catch {
    return null
  }
  let d = [],
    S = [],
    w = [];
  for (let u of s) {
    let b = u.isDirectory() && Q7e(u.name) ? await _5e(n, u.name) : "unmarked";
    if (b === "marked") d.push(u.name);
    else if (typeof b === "object") w.push(u.name), V("warn", "skills_sync_bucket_marker_unreadable", {
      code: b.unreadable
    });
    else if (!Ree(u.name)) S.push(u.name)
  }
  return {
    buckets: d,
    strays: S,
    unreadable: w
  }
}
async function wt(e, n) {
  let t = 0;
  for (let s of e)
    if (await Mn(W(ae(), s), n)) t++;
  if (t > 0) V("info", "skills_sync_stray_entry_trashed", {
    count: t
  });
  return t
}
async function ci(e) {
  let n = await St(e);
  if (n === null || n.strays.length === 0) return !1;
  return await wt(n.strays, e) > 0
}

function Mn(e, n) {
  return Lve(ht(e, n))
}

function ht(e, n) {
  return {
    dir: e,
    trashRoot: je(),
    configHome: Ue(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: n
  }
}
async function h9n(e) {
  if (!tQo()) return !1;
  let n = await VK(ae(), Ue(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: $F
  }, {
    storageV5: e
  });
  if (n !== "real" && n !== "absent") return !1;
  let t = null,
    s = n === "real" ? await St(e) : null;
  if (s !== null) {
    t = 0;
    for (let S of s.buckets) {
      let w = yt(S);
      await pe(kxt(w), {
        force: !0
      }).catch(() => {});
      let u = await Di(w, e).catch(() => null);
      if (u !== null) t += u, await gn(w).then(() => O6t(ae(), S), () => {})
    }
    t += await wt([...s.strays, ...s.unreadable], e), await gn(ae()).catch(() => {})
  }
  V("info", "skills_sync_pruned_for_closed_gate", {
    moved: t ?? 0
  });
  let d = t !== null && t > 0;
  if (d) NP(), kW(), XK.emit();
  return d
}

function je() {
  return W(Ue(), Z7e)
}

function Xe(e) {
  return W(e, cU)
}
var ct = new Set,
  ut = [],
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
  return gt(Xe(e))
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
      return null
    }
    let L = h.value.items[0];
    if (!L.found) return null;
    if (L.totalBytes > Jlt || L.value.byteLength > Jlt) {
      if (t) V("warn", "skills_sync_manifest_unreadable", {
        code: "parse_or_size"
      });
      return null
    }
    s = Buffer.from(L.value).toString("utf8")
  } catch (h) {
    if (t) V("warn", "skills_sync_manifest_unreadable", {
      code: k(h) ?? "backend_read_failed"
    });
    return null
  } else if (s = await Mve(Xe(n.root), t ? "skills_sync_manifest_unreadable" : null), s === null) return null;
  let d = Dve(s, x6t(), t ? "skills_sync_manifest_unreadable" : null);
  if (d === null) return null;
  let {
    skills: S,
    staleDirs: w,
    pendingClaims: u,
    ...b
  } = d;
  return {
    ...b,
    skills: xQ(Zlt(), S),
    staleDirs: Qlt(w),
    pendingClaims: Qlt(u)
  }
}
async function pn(e, n, t, s) {
  let d = s.guard.refusedReason();
  if (d !== null) throw SJr(d);
  await Dt(t, s.root);
  let S = await ke(t, s);
  if (S === null && n.onlyOverReadable) return;
  let w = hJr(xQ(Zlt(), e.skills), S?.skills, (b) => b.skillId, n.removedSkillIds, xQ(Zlt(), n.deferredRows)),
    u = _({
      ...yJr(S, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
      ...e,
      skills: w,
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
    return
  }
  await zn(Xe(s.root), u)
}

function Le(e) {
  return W(e, Cse, String(process.pid))
}

function Z(e, n) {
  return Aee(n, e)
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
      return Buffer.from(u.value).toString("utf8")
    }
    let d = W(s, "SKILL.md"),
      S = await we(d);
    if (!S.isFile() || S.size > jg) return null;
    return await ii(d, "utf8")
  } catch {
    return null
  }
}

function Rn(e) {
  return gt(W(e, "SKILL.md"))
}
async function ft(e, n, t) {
  try {
    let s = Z(e, n);
    if (t) return (await t.statMeta(Rn(s))).ok;
    return (await we(W(s, "SKILL.md"))).isFile()
  } catch {
    return !1
  }
}
async function _i(e, n) {
  try {
    if (n) {
      let t = await n.statMeta(Rn(e));
      return !t.ok && t.error.code === "NotFound"
    }
    return await we(W(e, "SKILL.md")), !1
  } catch (t) {
    return K(t) || k(t) === "ENOTDIR"
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
  }
}

function Rt(e, n) {
  return {
    ...e,
    backingPluginId: n.backingPluginId
  }
}
var pi = {
  idOf: (e) => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};

function yi(e, n, t) {
  return i7r(n, t, {
    ...pi,
    dirFor: (s) => Z(e, s),
    carry: Rt,
    ...lt() && {
      markCollisionLoser: gi
    }
  })
}

function gi(e) {
  return {
    ...e,
    updatedAt: Lce
  }
}

function Si(e, n, t) {
  let s = Zxn({
    skillName: e,
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
    baseDir: t,
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
    let w = await Ao(cMe(e), S.abortController.signal, () => new Ke);
    if (w.ok) {
      let h = (await Zp(Uc(), S.storageV5)).find((L) => L.loadedFrom === "syncedSkills" && aW(L) === aW(s) && L.name === s.name && L.type === "prompt" && L.getPromptForCommand !== s.getPromptForCommand);
      if (h && h.type === "prompt") return s.source = h.source, s.skillRoot = h.skillRoot, s.skillFile = h.skillFile, s.contentLength = h.contentLength, s.progressMessage = h.progressMessage, s.userInvocable = h.userInvocable, h.getPromptForCommand(d, S)
    }
    let u = w.ok ? "skill not found after download" : w.reason;
    return [{
      type: "text",
      text: !w.ok && w.withheld ? `${flr(s.name)} Proceed without it.` : `Skill ${e} could not be downloaded (${u}). Proceed without it.`
    }]
  };
  return s
}
var wi = {
  landed: "landed",
  anotherSkills: "another_skills",
  claimLapsed: "claim_lapsed",
  unattributed: "unattributed"
};

function hi(e, n) {
  return wJr({
    root: () => n,
    configHome: Ue,
    rootLabel: $F,
    event: "skills_sync_root_refused",
    storageV5: e
  })
}
var vt = kJr("zip fetch failed"),
  yn = oTn("skill archive holds no usable skill", "validate"),
  Mi = oTn("skill archive could not be unpacked", "unpack"),
  mt = new Set(["ENOSPC", "EDQUOT", "EIO", "EROFS", "EACCES", "EPERM"]);

function We(e, n) {
  let t = k(n) ?? "unknown";
  return V("warn", "skills_sync_local_disk_failed", {
    step: e,
    code: t
  }), {
    ok: !1,
    cause: "local",
    reason: "the skill could not be saved or unpacked",
    step: e,
    code: t
  }
}
async function Ge(e, n) {
  try {
    return await si(e, n), null
  } catch (t) {
    return k(t) ?? "unknown"
  }
}
async function hn(e, {
  round: n,
  credentials: t,
  storageV5: s,
  replacesAttributedCopy: d,
  targetHeldSkillFile: S,
  classifyOccupant: w,
  markTargetDestroyed: u,
  noteDownloadedBytes: b
}, h) {
  let L = n.root,
    R = Z(L, e.name),
    M = W(Le(L), kt(L, R)),
    P = W(xf(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (n.guard.refused()) return P6t;
    if (h !== void 0) await ri(P, h);
    else {
      if (!d && S && await w(te(R)) === "inFlight") return V("info", "skills_sync_target_in_flight_elsewhere"), rQo;
      let D;
      try {
        D = await Zdi(e.skillId, P, e.requestedVersion, {
          isBackground: !0,
          credentials: t
        })
      } catch (I) {
        return We("save_zip", I)
      }
      if (!D) return vt;
      b((await Ye(P).catch(() => null))?.size ?? 0)
    }
    if (!await n.guard.verify()) return P6t;
    try {
      await pe(M, {
        recursive: !0,
        force: !0
      }), await ti(Le(L), {
        recursive: !0
      })
    } catch (D) {
      return We("staging", D)
    }
    let z;
    try {
      await t7r(P, M, {
        skipEntry: (D) => D.split(/[\\/]/).some((I) => Ree(I))
      }), z = await _t(M, {
        withFileTypes: !0
      })
    } catch (D) {
      if (!mt.has(k(D) ?? "")) throw D;
      return We("unpack", D)
    }
    let Y = M;
    if (!z.some((D) => D.name === "SKILL.md") && z.length === 1 && z[0].isDirectory()) Y = W(M, z[0].name);
    try {
      if (!(await we(W(Y, "SKILL.md"))).isFile()) return V("warn", "skills_sync_extracted_zip_unusable"), yn
    } catch (D) {
      if (mt.has(k(D) ?? "")) return We("unpack", D);
      return V("warn", "skills_sync_extracted_zip_unusable"), yn
    }
    if (await n7r(Y)) return V("warn", "skills_sync_extracted_zip_unusable"), yn;
    if (!await n.guard.verify()) return P6t;
    let U = d ? "own" : void 0,
      N = null;
    if (!d) {
      if (N = await Ge(Y, R), N !== null && Far(N)) {
        let D = await w(te(R));
        if (D === "inFlight") return V("info", "skills_sync_target_in_flight_elsewhere"), rQo;
        U = wi[D]
      }
    }
    let H = null,
      ce = !1,
      he = U === "claim_lapsed" || U === "unattributed";
    if (U !== void 0) {
      let D;
      if (he) {
        let I = await nQo(ht(R, s));
        D = I.moved ? null : I.code, H = I.moved ? I.to : null
      } else {
        let I = W(Le(L), `.replaced-${process.pid}-${Math.random().toString(36).slice(2)}`);
        D = await Ge(R, I);
        let j = D === "EXDEV" ? await Promise.all([we(L), we(Le(L))]).then(([O, Ee]) => O.dev === Ee.dev, () => !1) : x() === "windows" && D !== null && OH.has(D);
        if (D === null) H = I;
        else if (D === "ENOENT") D = null;
        else if (j) ce = !0, u(), D = await pe(R, {
          recursive: !0,
          force: !0
        }).then(() => null, (O) => k(O) ?? "unknown");
        if (D !== null) V("warn", "skills_sync_occupant_displace_failed", {
          code: D
        })
      }
      if (D !== null) return {
        ...sTn,
        code: D,
        occupant: U
      };
      N = await Ge(Y, R)
    }
    if (N !== null) {
      let D = H !== null && U !== "another_skills" && await Ge(H, R) === null;
      if (D) kW(), NP();
      else if (H !== null) u();
      if (D && he && H !== null) await gn(oi(H)).catch(() => {});
      let I = H !== null || ce;
      return V("warn", "skills_sync_promotion_failed", {
        code: N,
        ...I && {
          restored: D
        }
      }), {
        ...iTn(N),
        occupant: I ? U : void 0
      }
    }
    return Xmi
  } finally {
    if (await pe(P, {
        force: !0
      }).catch(() => {}), !n.guard.refused() && await VK(L, Ue(), {
        event: "skills_sync_root_refused",
        phase: "sweep",
        rootLabel: $F
      }, {
        checkStagingLeaf: !0,
        storageV5: s
      }).catch(() => null) === "real") await pe(M, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
var Ri = 500;
async function vi(e, n) {
  try {
    return await hn(e, n, void 0)
  } catch {
    return V("warn", "skills_sync_extract_retry"), await J(Ri), hn(e, n, void 0)
  }
}
async function bi(e, n) {
  let {
    fromHostMount: t
  } = n;
  if (t !== void 0) {
    let s = await hn(e, n, t.zip).catch(() => null);
    if (s?.ok) n.markLandedFromHostMount();
    if (s !== null && (s.ok || s.cause !== "extract")) return s;
    xms(t.kind, {
      reason: s === null ? "landing_threw" : "zip_unusable"
    }, n.hostMountMissCounts)
  }
  return vi(e, n)
}
async function vn(e, n, t, s) {
  let d = kf();
  if (d.syncPromise) return d.syncPromise;
  return d.syncPromise = Li(e, n, t, s).finally(() => {
    d.syncPromise = null
  }), d.syncPromise
}
async function Di(e, n) {
  let t = W(e, cU),
    s, d, S;
  try {
    d = (await mS(t, Jlt)).content, S = ee(d)
  } catch {
    return null
  }
  let w = ui().safeParse(S);
  if (w.success) {
    let {
      lastUpdated: M,
      skills: P,
      staleDirs: z,
      pendingClaims: Y,
      ...U
    } = w.data;
    s = {
      ...U,
      lastUpdated: M,
      skills: xQ(fi(), P),
      staleDirs: Qlt(z),
      pendingClaims: Qlt(Y)
    }
  } else return null;
  let u = [...s.skills.map((M) => ({
      row: M,
      syntheticListName: null
    })), ...["staleDirs", "pendingClaims"].flatMap((M) => (s[M] ?? []).map((P) => ({
      row: {
        name: M === "pendingClaims" ? QNt(P).name : P
      },
      syntheticListName: M,
      entry: P
    })))],
    b = 0,
    h = [],
    L = [],
    R = [];
  for (let M of u) {
    let P = M.row;
    if (M.syntheticListName === "pendingClaims" && await bn(M.entry)) {
      R.push(M.entry);
      continue
    }
    try {
      let z = eFt(P.name, e);
      if (await _Tn(z, ae())) {
        V("info", "skills_sync_sibling_root_row_skipped");
        continue
      }
      if (await _Tn(z, je())) {
        V("info", "skills_sync_trash_root_row_skipped");
        continue
      }
      if (await Mn(z, n)) b++;
      else if (M.syntheticListName === "staleDirs") L.push(M.entry);
      else if (M.syntheticListName === "pendingClaims") R.push(M.entry);
      else h.push(M.row)
    } catch (z) {
      if (z instanceof Dht) {
        if (M.syntheticListName === "staleDirs") L.push(M.entry);
        else if (M.syntheticListName === "pendingClaims") R.push(M.entry);
        else h.push(M.row);
        continue
      }
    }
  }
  if (h.length > 0 || L.length > 0 || R.length > 0) {
    let M = _({
      ...s,
      skills: h,
      staleDirs: L.length > 0 ? L : void 0,
      pendingClaims: R.length > 0 ? R : void 0
    }, null, 2);
    if (M !== d) await zn(t, M).catch(() => {})
  } else await pe(t, {
    force: !0
  }).catch(() => {});
  return b
}
async function Li(e, n, t, s) {
  let d = Date.now(),
    S = performance.now(),
    w = !1,
    u = !1,
    b = !1,
    h = !1,
    L = 0,
    R = 0,
    M = 0,
    P = () => {
      let I = Date.now() - d;
      return {
        account_opt_in: b,
        idle: h,
        woken: "woken" in s,
        trigger: f(s.trigger),
        ..."tickLateMs" in s && {
          tick_late_ms: s.tickLateMs
        },
        ...L > 0 && {
          kept: L
        },
        ...M > 0 && {
          held_back: M
        },
        ...R > 0 && {
          approx_downloaded_bytes: Number(R.toPrecision(2))
        },
        duration_ms: I,
        suspended_ms: Math.max(0, Math.round(I - (performance.now() - S)))
      }
    },
    z = new Map,
    Y = !1,
    U = null,
    N = kf(),
    H = !1,
    ce = null,
    he = new Set,
    D = !1;
  try {
    if (b = IKn(), A6t()) b = !0;
    if (!Uve(e) || !Xlt()) {
      V("info", "skills_sync_gate_closed");
      let {
        placeholders: r,
        listedOwnerships: y,
        failedLandings: T
      } = kf();
      if (y.clear(), T.clear(), r.size > 0) r.clear(), gle();
      c("skills_sync_round", "gate_closed", P());
      return
    }
    if (qmi()) {
      V("info", "skills_sync_policy_verdict_pending"), c("skills_sync_round", "policy_verdict_pending", P());
      return
    }
    let I = await ED(t);
    if (I === null) {
      V("info", "skills_sync_bucket_unresolved"), c("skills_sync_round", "bucket_unresolved", P());
      return
    }
    let j = hi(n, yt(I));
    U = j;
    let O = j.root;
    h = s.trigger === "resync" && !("woken" in s) && N.consecutiveFailedRounds === 0 && !clr(e) && qn();
    let Ee = ggi(e);
    if (Ee !== void 0) await Ee;
    let de = mgi(e);
    MIs(de, n);
    let Me = await it({
      syncedRoot: ae(),
      bucket: I,
      root: O,
      trigger: s.trigger,
      pinned: _L(e),
      lastGeneration: N.bucketGeneration,
      holdsPlaceholders: N.placeholders.size > 0,
      idle: h,
      convertedSkillsAsPlugins: de
    });
    if (!Me.list) {
      N.bucketGeneration = Me.generation;
      let r = await un(async () => (await ke(n, j))?.skills ?? []);
      if (Me.reload) {
        let y = await ke(n, j);
        if (y) {
          let T = new Set;
          for (let B of y.skills) try {
            T.add(te(Z(O, B.name)))
          } catch {}
          ias(T)
        }
        ce = new Set, gle()
      } else if (r) gle();
      g("skills_sync_round", {
        ...P(),
        reused: !0,
        reloaded: Me.reload || r
      });
      return
    }
    D = !0, V("info", "skills_sync_starting");
    let G, Ie = [],
      Lt = performance.now();
    if (_L(e)) {
      let [r, y] = await Promise.all([BXe.of(e).listEntries("skills", {
        startup: s.trigger === "startup"
      }), i.CLAUDE_CODE_SYNC_SKILLS ? bwn({
        isBackground: !0,
        credentials: t,
        ...de && {
          convertedSkillsAsPlugins: !0
        }
      }) : null]);
      if (!r.success) G = r;
      else if (Ie = r.entries.map(ki), y === null) G = {
        success: !0,
        skills: Ie
      };
      else if (!y.success) G = y;
      else G = {
        success: !0,
        skills: s7r(Ie, y.skills, (T) => T.skillId, (T, B) => ({
          ...Rt(T, B),
          userInvocable: B.userInvocable,
          disableModelInvocation: B.disableModelInvocation
        }))
      }
    } else G = await bwn({
      isBackground: !0,
      credentials: t,
      ...de && {
        convertedSkillsAsPlugins: !0
      }
    });
    let Dn = Math.round(performance.now() - Lt);
    if (H = !G.success && Poe(G), H) V("warn", "skills_sync_list_refused"), N.listedOwnerships.clear(), G = {
      success: !0,
      skills: Ie
    };
    if (!G.success) {
      N.consecutiveFailedRounds++;
      let r = Xft(G),
        y = {
          ...P(),
          ...r
        };
      if (V("warn", "skills_sync_list_failed", y), l("tengu_skills_sync_list_failed", y), (G.kind === "timeout" || G.kind === "network" || G.kind === "http") && y.suspended_ms > xe) c("skills_sync_round", "suspended", y);
      else m("skills_sync_round", "list_failed", y);
      return
    }
    N.consecutiveFailedRounds = H ? N.consecutiveFailedRounds + 1 : 0;
    let Ce = await _5e(ae(), I);
    if (Ce === "unmarked" && await Ye(O).then((r) => r.isDirectory(), () => !1) && await Lve({
        dir: O,
        trashRoot: je(),
        configHome: Ue(),
        failureEvent: "skills_sync_trash_move_failed",
        storageV5: n
      }).catch(() => !1)) V("info", "skills_sync_unmarked_bucket_quarantined");
    if (await Dt(n, O), typeof Ce === "object") throw V("warn", "skills_sync_root_refused", {
      phase: "round_head",
      root: $1e(W($F, I)),
      component: "marker",
      reason: "unverified",
      code: Ce.unreadable
    }), new PQ("unverified", {
      code: Ce.unreadable
    });
    await vJr(ae(), I), Y = !0;
    let Re = await dlr(O);
    if (!H && await un(async () => (await ke(n, j))?.skills ?? []) || Me.shared && Re !== null && N.bucketGeneration !== null && Re.token !== N.bucketGeneration) gle();
    await ci(n);
    let ie = await ke(n, j),
      Ln = de && !H ? await Gn(ie?.skills ?? [], G.skills, I) : [];
    L = Ln.length;
    let En = Re !== null && de ? tt(Re) : Re,
      {
        toDownload: $e,
        toRemove: ue,
        carryover: ve,
        liveDirs: qe,
        carryoverOwningLiveDir: Et
      } = yi(O, [...G.skills, ...Ln], ie?.skills ?? []),
      It = bTn(qe),
      Ze = new Map,
      Qe = async (r) => {
        let y;
        try {
          y = eFt(r, O)
        } catch (X) {
          if (X instanceof Dht) return !1;
          return !0
        }
        let T = await It(y);
        if (T === "live") return !0;
        if (T === "indeterminate") return !1;
        he.add(y);
        let B = Ze.get(y);
        if (B !== void 0) return B;
        let A = Mn(y, n).finally(() => Ze.delete(y));
        return Ze.set(y, A), A
      }, Je = new Set(Array.from(qe, (r) => te(r))), Ct = ias(Je);
    if (pgi(Je) + Ct > 0) NP(), wn(), XK.emit();
    ce = qe;
    let Tt = await Promise.all(ve.map((r) => Et.has(r.skillId) ? ft(O, r.name, n) : null)),
      en = new Set;
    for (let [r, y] of ve.entries()) {
      let T = Tt[r];
      if (T === null) continue;
      if (!T) {
        let A = G.skills.find((X) => X.skillId === y.skillId);
        if (A) en.add(y.skillId), $e.push({
          item: A
        });
        continue
      }
      let B = te(Z(O, y.name));
      if (N.placeholders.delete(B)) N.pendingDownloads.get(B)?.resolve({
        ok: !0
      }), N.pendingDownloads.delete(B), kW(), NP(), u = !0, V("info", "skills_sync_materialized_elsewhere")
    }
    let At = ve.filter((r) => !en.has(r.skillId)),
      Te = new Map(ve.filter((r) => en.has(r.skillId)).map((r) => [r.skillId, r])),
      Q = new Set(ie?.staleDirs ?? []),
      fe = new Set,
      se = new Set,
      nn = {
        pid: process.pid,
        procStart: await tc(process.pid)
      },
      tn = [];
    if (ie?.pendingClaims) {
      let r = ie.pendingClaims,
        y = new Set;
      for (let T of r)
        if (await bn(T)) y.add(QNt(T).name);
        else tn.push(T);
      for (let T of tn) {
        let {
          name: B
        } = QNt(T);
        if (y.has(B) || Je.has(B)) continue;
        Q.add(B), se.add(T)
      }
    }
    for (let r of Q)
      if (await Qe(r)) Q.delete(r), fe.add(r);
    if (fe.size > 0 || se.size > 0) u = !0;
    let Ae = gJr(ie?.skills ?? [], [...ve, ...$e.flatMap(({
        prev: r
      }) => r ?? [])], (r) => r.skillId, (r, y) => r.backingPluginId === y.backingPluginId && r.updatedAt === Lce === (y.updatedAt === Lce)),
      {
        due: me,
        heldBack: _e
      } = await at(N.failedLandings, $e, async ({
        prev: r
      }) => r !== void 0 && await ft(O, r.name, n));
    if (M = _e.length, me.length === 0 && ue.length === 0) {
      if (u) gle();
      if ((fe.size > 0 || se.size > 0 || Ae.attributionMoved) && ie) await pn({
        lastUpdated: ie.lastUpdated,
        skills: Ae.rows,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0,
        pendingClaims: void 0
      }, {
        staleDirs: fe,
        pendingClaims: se,
        removedSkillIds: ct,
        deferredRows: ut
      }, n, j);
      if (ie) {
        let T = new Date;
        await ni(Xe(O), T, T).catch(() => {})
      }
      let r = u ? null : En;
      dt(await wTn(O, "skills", Q.size === 0 && _e.length === 0 && !H && !_L(e), r, Se(de)), r), V("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - d,
        list_ms: Dn,
        held_back: _e.length,
        ...s.trigger === "startup" && {
          first_message_gate_open_ms: Math.round(performance.now() - S)
        }
      });
      let y = {
        ...P(),
        no_changes: !0
      };
      if (H) c("skills_sync_round", "not_entitled", y);
      else if (_e.length > 0) c("skills_sync_round", "landing_held_back", y);
      else g("skills_sync_round", y);
      return
    }
    let In = 0;
    for (let {
        item: r,
        prev: y
      }
      of me)
      if (!y) {
        let T = Z(O, r.name),
          B = Si(te(T), r, T);
        if (B === void 0) continue;
        ugi(B), In++, z.set(r.skillId, lgi(te(Z(O, r.name))))
      } if (In > 0) NP(), wn(), XK.emit();
    let Cn = !0;
    try {
      let r = [];
      for (let {
          item: y
        }
        of me) try {
        r.push(cyo(te(Z(O, y.name)), nn))
      } catch {}
      if (r.length > 0) await pn({
        lastUpdated: ie?.lastUpdated ?? 0,
        skills: Ae.rows,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0,
        pendingClaims: r
      }, {
        staleDirs: fe,
        pendingClaims: se,
        removedSkillIds: ct,
        deferredRows: ut
      }, n, j)
    } catch (r) {
      if (r instanceof PQ) throw r;
      Cn = !1, V("warn", "skills_sync_pending_claims_write_failed")
    }
    Sn().resolve();
    let Ft = Math.round(performance.now() - S);
    if (!Cn) {
      if (m("skills_sync_round", "pending_claims_write_failed", P()), u) gle();
      return
    }
    let le = [],
      Tn = _e.flatMap(({
        item: r,
        prev: y
      }) => y ?? Te.get(r.skillId) ?? []),
      sn = [],
      Fe = 0,
      An = 0,
      ye = {},
      Fn = ({
        item: r,
        prev: y
      }) => y === void 0 && !Te.has(r.skillId) ? J0i(r) : void 0,
      Pn = me.flatMap((r) => Fn(r) ?? []),
      Nn = new Set(Pn),
      on = new Map,
      On = (r) => (V("warn", "skills_sync_host_mount_threw"), a(F(r)), null),
      xn = Nn.size > 0 ? Q0i(Nn, on).catch(On) : null,
      Pe = new Set,
      Bn = new Map;
    await Promise.all(me.map(Ja(kn, async ({
      item: r
    }) => {
      Bn.set(r, await mi(O, r.name, n))
    }))), await Promise.all(me.map(FBi(kn, async (r) => {
      let y = Fn(r);
      if (y === void 0) return;
      let B = await (await xn)?.readZip(y, r.item).catch(On);
      return B ? {
        kind: y,
        zip: B
      } : void 0
    }, async ({
      item: r,
      prev: y
    }, T) => {
      let B = Bn.get(r) ?? null,
        A = vt;
      try {
        A = await bi(r, {
          round: j,
          credentials: t,
          storageV5: n,
          classifyOccupant: (X) => Ei(X, n, j, r.skillId),
          markTargetDestroyed: () => {
            w = !0
          },
          replacesAttributedCopy: y !== void 0 && y.updatedAt !== Lce && await bt(O, y.name, r.name) || Te.has(r.skillId),
          targetHeldSkillFile: He() && B !== null,
          fromHostMount: T,
          markLandedFromHostMount: () => {
            Pe.add(r.skillId)
          },
          hostMountMissCounts: on,
          noteDownloadedBytes: (X) => {
            R += X
          }
        })
      } catch {
        A = Mi, V("warn", "skills_sync_extract_failed")
      }
      if (A.ok) {
        if (le.push(r), N.failedLandings.delete(r.skillId), y && y.name !== r.name) {
          if (!await Qe(y.name)) Q.add(y.name)
        }
        fgi(te(Z(O, r.name))), kW(), NP(), g("skills_sync_download", {
          landed_from_mount: Pe.has(r.skillId)
        })
      } else {
        let X = Jmi(A.cause);
        if (X === null) Fe++, V("info", "skills_sync_landing_deferred");
        else {
          ye[X] = (ye[X] ?? 0) + 1;
          let ne = db(A.code);
          m("skills_sync_download", X, {
            ...A.step !== void 0 && {
              step: f(A.step)
            },
            ...ne !== void 0 && {
              errno: ne
            },
            ...A.occupant !== void 0 && {
              occupant: f(A.occupant)
            }
          })
        }
        if (A.cause === "extract" || A.cause === "local") ot(N.failedLandings, r);
        let ge = y ?? Te.get(r.skillId);
        if (ge && A.cause === "deferred") {
          if (sn.push(ge), y && y.name !== r.name) Q.add(y.name), An++
        } else if (ge) Tn.push(ge);
        else try {
          let ne = Z(O, r.name);
          if (await Ye(ne).then(() => !1, (Nt) => K(Nt))) se.add(cyo(te(ne), nn))
        } catch {}
      }
      z.get(r.skillId)?.(A.ok ? {
        ok: !0
      } : {
        ok: !1,
        reason: Qmi(A.cause)
      })
    })));
    let be = [];
    await Promise.all(ue.map(Ja(kn, async (r) => {
      if (!await Qe(r.name)) be.push(r)
    })));
    let an = new Set(ue.map((r) => r.skillId));
    for (let r of be) an.delete(r.skillId);
    let ln = le.length > 0 || w || be.length < ue.length || fe.size > 0 || se.size > 0,
      Pt = ln || An > 0 || Ae.attributionMoved;
    if (an.size > 0) NP();
    let Un = le.length > 0 && kwn();
    if ((ln || u) && !Un) gle();
    let Ne = !1;
    if (Pt) {
      let r = [...At, ...le, ...Tn, ...be],
        y = new Set;
      for (let A of [...r, ...sn]) try {
        y.add(te(Z(O, A.name)))
      } catch {}
      for (let A of y) se.add(cyo(A, nn));
      for (let A of tn)
        if (y.has(QNt(A).name)) se.add(A);
      let T = (A, X) => pn({
        lastUpdated: Date.now(),
        skills: A,
        staleDirs: Q.size > 0 ? Array.from(Q) : void 0
      }, {
        staleDirs: fe,
        pendingClaims: se,
        removedSkillIds: an,
        deferredRows: sn,
        onlyOverReadable: X
      }, n, j);
      try {
        await T(r, !1)
      } finally {
        if (Un) NP(), gle()
      }
      let B = le.length > 0 && He() ? 2 : 0;
      for (let A = 0; A < B; A++) {
        await J(N.lostRowsRecheckMs * (1 + Math.random()));
        let X = await ke(n, j),
          ge = new Set(X?.skills.map((ne) => ne.skillId));
        if (Ne = !le.every((ne) => ge.has(ne.skillId)), !Ne) break;
        if (X === null) continue;
        V("info", "skills_sync_manifest_rows_lost");
        try {
          await T(le, !0)
        } catch (ne) {
          if (ne instanceof PQ) throw ne;
          a(F(ne));
          break
        }
      }
      if (Ne) V("warn", "skills_sync_manifest_rows_unconfirmed")
    }
    let dn = me.length - le.length - Fe,
      Hn = await xn,
      cn = {
        downloaded: le.length - Pe.size,
        from_mount: Pe.size,
        mount_eligible: Pn.length,
        mount_read_ms: Hn?.spentMs() ?? 0,
        mount_wait_ms: Hn?.waitedMs() ?? 0,
        ...Hbr(on)
      };
    V("info", "skills_sync_complete", {
      ...cn,
      removed: ue.length,
      duration_ms: Date.now() - d,
      list_ms: Dn,
      ...s.trigger === "startup" && {
        first_message_gate_open_ms: Ft
      }
    });
    let Wn = P();
    l("tengu_skills_sync_success", {
      ...Wn,
      ...cn,
      removed: ue.length,
      total: G.skills.length
    });
    let Kn = ln || u ? null : En;
    dt(await wTn(O, "skills", !H && dn === 0 && _e.length === 0 && Fe === 0 && !Ne && be.length === 0 && Q.size === 0 && !_L(e), Kn, Se(de)), Kn);
    let Oe = {
      ...Wn,
      ...cn,
      deferred: Fe,
      removed: ue.length,
      total: G.skills.length
    };
    if (dn > 0) c("skills_sync_round", "download_failed", {
      ...Oe,
      failed: dn,
      download_failed: ye.download_failed ?? 0,
      extract_failed: ye.extract_failed ?? 0,
      root_refused: ye.root_refused ?? 0,
      local_failed: ye.local_failed ?? 0
    });
    else if (H) c("skills_sync_round", "not_entitled", Oe);
    else if (_e.length > 0) c("skills_sync_round", "landing_held_back", Oe);
    else g("skills_sync_round", Oe)
  } catch (I) {
    if (u || w) gle();
    if (I instanceof PQ && Y) V("warn", "skills_sync_late_root_refusal", {
      reason: I.reason,
      duration_ms: Date.now() - d
    }), c("skills_sync_round", "root_refused", P()), Y = !1;
    else if (I instanceof PQ) V("warn", "skills_sync_root_refused_round", {
      reason: I.reason,
      duration_ms: Date.now() - d
    }), c("skills_sync_round", "root_refused", P());
    else {
      if (!H) N.consecutiveFailedRounds++;
      V("error", "skills_sync_unexpected_error", {
        duration_ms: Date.now() - d
      });
      let j = P();
      l("tengu_skills_sync_error", j), m("skills_sync_round", "unexpected_error", j)
    }
  } finally {
    if (D) et();
    for (let I of z.values()) I({
      ok: !1,
      reason: "skills sync failed"
    });
    if (Sn().resolve(), ce !== null && U !== null) await Kmi({
      bucketRoot: U.root,
      listedDirs: ce,
      removalTriedDirs: he,
      isSkillFileGone: (I) => _i(I, n)
    }).catch(() => {
      V("warn", "skills_sync_hooks_removal_failed")
    });
    if (U === null || U.guard.refused()) Y = !1;
    if (Y && U !== null) {
      if (await VK(U.root, Ue(), {
          event: "skills_sync_root_refused",
          phase: "sweep",
          rootLabel: $F
        }, {
          checkStagingLeaf: !0,
          storageV5: n
        }).catch(() => null) === "real") await pe(Le(U.root), {
        recursive: !0,
        force: !0
      }).catch(() => {})
    }
  }
}
async function bn(e) {
  let {
    ownerPid: n,
    ownerProcStart: t
  } = QNt(e);
  return n !== void 0 && n !== process.pid && El(n) && await cT(n, t)
}
async function Ei(e, n, t, s) {
  let d = await ke(n, t);
  if (!d) return "unattributed";
  let S = !1;
  for (let w of d.skills)
    if (await bt(t.root, w.name, e)) {
      if (s === void 0 || w.skillId === s && w.updatedAt !== Lce) return "landed";
      S = !0
    } if (S) return "anotherSkills";
  for (let w of d.pendingClaims ?? [])
    if (QNt(w).name === e && await bn(w)) {
      if (!He()) return "inFlight";
      let u = await Ye(W(t.root, e)).then((b) => Math.floor(b.ctimeMs), (b) => {
        if (K(b)) return -1 / 0;
        return V("warn", "skills_sync_occupant_unreadable", {
          code: k(b) ?? "unknown"
        }), 1 / 0
      });
      if (!(Date.now() - u >= li)) return "inFlight";
      return V("info", "skills_sync_live_claim_timed_out"), "claimLapsed"
    } return "unattributed"
}
async function bt(e, n, t) {
  try {
    let s = Z(e, n),
      d = Z(e, t);
    return te(s) === te(d) || await _Tn(s, d)
  } catch {
    return !1
  }
}

function Dt(e, n) {
  return bJr({
    root: n,
    trashRoot: je(),
    configHome: Ue(),
    events: {
      refused: "skills_sync_root_refused"
    },
    storageV5: e
  })
}
export {
  s7s,
  jUe,
  i7s,
  a7s,
  l7s,
  m9n,
  gle,
  h9n
};
