// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { yu, K4, Ugn, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Pe as configHome } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { E, ir } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Hf } from "B:/~BUN/root/chunk-wegca9zh.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ip, bde, G2, pL } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { phe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ek, ad } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { Ncs, hAt, $0, rYe, Fcs, Hcs, cio, oYe, Oit, Qfr, YMn, XY, Zfr, emr, Cue, Rue, sYe, yAt, eZ, Fz, Aue, tmr, nmr, rmr, $cs, _At, XMn, omr, uio, JMn, E8t, bAt, Ucs, Bcs, rq, smr, SAt, xmr, W8t, z8t, Pmr, Omr, jit, Imr, G8t, E0n, Mmr, oZ, T0n, C0n, Gus, dSe, R0n, Kus, Yus, Xus, Lmr, Nmr, pps, V1, Ap, nx, r7t, Mq, Tmo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { SD, UPr, Wft, L9e, RX, M1e, _3, b3, H9e, Dj as rootLabel, $9e } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { _D, gNt } from "B:/~BUN/root/chunk-472kxa0t.js";
import { _Be as updatedAt, oX, p8e, sO, SBe } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { Fxs, SN } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { uh, cp, jvo, RWn, SOs, wOs } from "B:/~BUN/root/chunk-72n790j1.js";
import { PZt } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { SKn, wKn } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { LPo } from "B:/~BUN/root/chunk-pbq7kcha.js";
import { zeo, i3t, kas } from "B:/~BUN/root/chunk-ebwq6a2e.js";
import { ha, p0s } from "B:/~BUN/root/chunk-rsysgs10.js";
import { OX } from "B:/~BUN/root/chunk-3npegs3h.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { o, v, sI, oe, T, _t } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { _y } from "B:/~BUN/root/chunk-3rzwkd15.js";
import { lstat as nn, lutimes as At, mkdir as Pt, readdir as qn, readFile as Nt, rename as Un, rm as re, rmdir as Kn, stat as Ce, writeFile as Ot } from "fs/promises";
import { basename as U, join as B, relative as $n, sep as xt } from "path";
var In = 10,
  St = In * 60000,
  gt = 4,
  pt = "tengu_claudeai_skills_sync_interval_minutes",
  wt = 5,
  ht = 1440,
  Mt = "tengu_claudeai_skills_sync_shared_round",
  Rt = "tengu_claudeai_skills_sync_idle_intervals",
  bn = 4,
  Dt = 4,
  vt = 3600000,
  bt = 30000,
  Et = 60000,
  settle_ms = 180000,
  ve = 45000;
function se() {
  let e = E(pt, In);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return St;
  return Math.min(Math.max(e, wt), ht) * 60000;
}
function Tn() {
  return E(Mt, !1) === !0;
}
function Cn() {
  let e = se();
  return be() > e && LPo(e) && !SKn();
}
function be() {
  let e = E(Rt, bn),
    n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Dt) : bn,
    r = se();
  return Math.max(r, Math.min(r * n, vt));
}
function Fn() {
  return bt + Math.floor(Math.random() * Et);
}
function Ee(e) {
  let n = se();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * gt);
}
function Pn(e) {
  let n = cp();
  if (n.resyncTimer) return;
  n.resyncRunRound = e, ye(n, e, Ee(n.consecutiveFailedRounds), "resync", !1);
}
function Je(e) {
  let n = cp();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  clearTimeout(n.resyncTimer), ye(n, n.resyncRunRound, e, "resync", !1);
}
function Nn() {
  let e = cp();
  if (e.stopAwaitingActivity) return;
  let n = [K4, wKn].map(item => item(() => {
    if (e.stopAwaitingActivity?.(), e.syncPromise) e.syncPromise.catch(() => {}).then(() => Ln(e));else Ln(e);
  }));
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let r of n) r();
  };
}
function On() {
  return cp().stopAwaitingActivity !== null;
}
function Qe() {
  cp().stopAwaitingActivity?.();
}
function Ln(e) {
  try {
    let resyncArmed = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !resyncArmed || resyncArmed.trigger === "wake_settle") return;
    let r = Math.round(Date.now() - resyncArmed.wallMs - (performance.now() - resyncArmed.monotonicMs));
    if (r > ve && e.consecutiveFailedRounds === 0) {
      clearTimeout(e.resyncTimer), Bn(e, e.resyncRunRound, resyncArmed.trigger, r, !0);
      return;
    }
    let t = e.consecutiveFailedRounds > 0 ? Ee(e.consecutiveFailedRounds) : 0;
    if (resyncArmed.wallMs + resyncArmed.delayMs - Date.now() > t) clearTimeout(e.resyncTimer), ye(e, e.resyncRunRound, t, "resync", !0);
  } catch (error) {
    l(error);
  }
}
function xn() {
  Je(Ee(cp().consecutiveFailedRounds));
}
function ye(e, n, delayMs, trigger, u) {
  let h = Date.now() + delayMs;
  e.resyncArmed = {
    trigger: trigger,
    delayMs: delayMs,
    wallMs: Date.now(),
    monotonicMs: performance.now()
  }, e.resyncTimer = setTimeout(Lt, delayMs, e, n, h, trigger, u), e.resyncTimer.unref?.();
}
function Lt(e, n, r, trigger_2, woken) {
  let resyncTimer = e.resyncTimer,
    tickLateMs = Math.max(0, Date.now() - r);
  if (tickLateMs > ve) {
    Bn(e, n, trigger_2, tickLateMs, !1);
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
    ye(e, n, Ee(e.consecutiveFailedRounds), "resync", !1);
  });
}
function Bn(e, n, r, t, woken_2) {
  X("info", "skills_sync_resync_skipped_after_sleep", {
    late_ms: t,
    woken: woken_2
  }), ye(e, n, settle_ms, "wake_settle", woken_2);
  try {
    if (!de()) i("tengu_skills_sync_resync_skipped", {
      trigger: c(r),
      tick_late_ms: t,
      settle_ms: settle_ms,
      woken: woken_2
    });
  } catch (error) {
    l(error);
  }
}
var It = 60000;
function Le() {
  return ip() ?? "none";
}
async function zn({
  syncedRoot: syncedRoot,
  bucket: bucket,
  root: root,
  trigger: trigger_3,
  pinned: pinned,
  lastGeneration: lastGeneration,
  holdsPlaceholders: holdsPlaceholders,
  idle: idle
}) {
  let shared = !pinned && Tn() && bucket === gNt(),
    R = pinned ? void 0 : Tt(trigger_3, shared, idle);
  if (R === void 0) return {
    list: !0,
    shared: shared
  };
  if (shared && idle) Nn();
  let S = await Mmr(root, R);
  if (!S.reuse || !(await rq(syncedRoot, bucket))) return Qe(), {
    list: !0,
    shared: shared
  };
  let A = await Imr(root),
    reload = !1;
  if (shared) {
    if (A === null || holdsPlaceholders || !A.listedFor.includes(Le())) return Qe(), {
      list: !0,
      shared: shared
    };
    let I = idle && On();
    if (idle && !I && S.ageMs >= se()) return {
      list: !0,
      shared: shared
    };
    reload = A.token !== lastGeneration && trigger_3 !== "startup";
    let D = I ? be() : se();
    if (S.ageMs < D) Je(D - S.ageMs + Fn());
  }
  return X("info", "skills_sync_round_reused", {
    age_ms: S.ageMs,
    within_ms: S.withinMs
  }), {
    list: !1,
    generation: A?.token ?? null,
    reload: reload
  };
}
function Tt(e, n, r) {
  let t = e === "startup" ? Omr() : void 0;
  if (!n || e === "reload") return t;
  if (r) return be();
  let u = e === "startup" && (!pL() || bde() && G2()) ? Math.min(It, se()) : se();
  return Math.max(u, t ?? 0);
}
var Ct = "tengu_jaunty_alpaca";
function Hn() {
  return ir(Ct, !0) !== !1;
}
var Ft = "tengu_quizzical_wirth";
function Ie() {
  return E(Ft, !0) !== !1;
}
var Ve = 15,
  Bt = zeo + 60000;
function zt() {
  let CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS : 5000;
}
function xXo() {
  let CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS : 30000;
}
function tn() {
  let e = cp();
  if (!e.firstListDeferred) {
    let resolve,
      promise = new Promise(t => {
        resolve = t;
      });
    e.firstListDeferred = {
      promise: promise,
      resolve: resolve
    };
  }
  return e.firstListDeferred;
}
function tRe(e, n, r) {
  cp().firstSyncPromise ??= Zn(e, n, r), Pn(t => ln(e, n, r, t));
}
function PXo(e, n, r, t) {
  if (!a.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !T0n(e) || t()) return !1;
  if ($0(), !C0n(e) || !rYe() || Hcs()) return !1;
  return tRe(e, n, r), !0;
}
function OXo(e, n, r) {
  let t = tn();
  return cp().firstSyncPromise ??= Zn(e, n, r), t.promise;
}
async function IXo(e, n) {
  let r = zt() - (performance.now() - n),
    t = await Promise.race([e.then(() => "listed"), Y(Math.max(0, r)).then(() => "timed_out")]);
  if (t === "timed_out") i("tengu_skills_sync_wait_timeout", {});
  return t;
}
async function Mvn(e, n, r) {
  return SBe.of(e).discardInflight(), await cp().syncPromise?.catch(() => {}), ln(e, n, r, {
    trigger: "reload"
  });
}
function Zn(e, n, r) {
  let t = cp();
  return ln(e, n, r, {
    trigger: "startup"
  }).finally(() => {
    t.firstRoundSettled = !0;
  });
}
function sn() {
  let e = cp();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0;
}
function yce() {
  sn(), Mq(), V1.emit();
}
function Gn(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    yce();
    return;
  }
  cp().bucketGeneration = e.token;
}
function V() {
  return B(configHome(), rootLabel);
}
function Jn(e) {
  return B(V(), e);
}
function Qn(e) {
  return Be.userConfigDir("skills", $n(B(configHome(), "skills"), e).split(xt));
}
async function Vn(storageV5) {
  let n = V();
  if ((await Fz(n, configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5
  }).catch(() => null)) !== "real") return null;
  let t;
  try {
    t = await qn(n, {
      withFileTypes: !0
    });
  } catch {
    return null;
  }
  let buckets = [],
    strays = [];
  for (let y of t) if (y.isDirectory() && M1e(y.name) && (await rq(n, y.name))) buckets.push(y.name);else if (!_3(y.name)) strays.push(y.name);
  return {
    buckets: buckets,
    strays: strays
  };
}
async function et(e, n) {
  let count = 0;
  for (let t of e) if (await Fe(B(V(), t), n)) count++;
  if (count > 0) X("info", "skills_sync_stray_entry_trashed", {
    count: count
  });
  return count;
}
async function Ht(e) {
  let n = await Vn(e);
  if (n === null || n.strays.length === 0) return !1;
  return (await et(n.strays, e)) > 0;
}
function Fe(dir, storageV5_2) {
  return Aue({
    dir: dir,
    trashRoot: Ae(),
    configHome: configHome(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: storageV5_2
  });
}
async function Dvn(storageV5_3) {
  if (!cio()) return !1;
  let n = await Fz(V(), configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5_3
  });
  if (n !== "real" && n !== "absent") return !1;
  let r = null,
    t = n === "real" ? await Vn(storageV5_3) : null;
  if (t !== null) {
    r = 0;
    for (let h of t.buckets) {
      let y = Jn(h);
      await re(jit(y), {
        force: !0
      }).catch(() => {});
      let M = await Vt(y, storageV5_3).catch(() => null);
      if (M !== null) r += M, await Kn(y).then(() => SAt(V(), h), () => {});
    }
    r += await et(t.strays, storageV5_3), await Kn(V()).catch(() => {});
  }
  X("info", "skills_sync_pruned_for_closed_gate", {
    moved: r ?? 0
  });
  let u = r !== null && r > 0;
  if (u) nx(), Mq(), V1.emit();
  return u;
}
function Ae() {
  return B(configHome(), $9e);
}
function Ne(e) {
  return B(e, SD);
}
var removedSkillIds = new Set(),
  deferredRows = [],
  Ut = f(() => _t({
    lastUpdated: v().catch(0),
    skills: T(oe()),
    staleDirs: oe().optional(),
    pendingClaims: oe().optional()
  })),
  Kt = f(() => _t({
    name: o(),
    skillId: o().catch(""),
    description: o().catch(""),
    source: o().catch(""),
    updatedAt: o().nullable().catch(null),
    userInvocable: sI().catch(void 0),
    disableModelInvocation: sI().catch(void 0)
  }));
function nt(e) {
  return Qn(Ne(e));
}
async function ke(e, n) {
  let r = !n.manifestRead;
  n.manifestRead = !0;
  let t;
  if (e) try {
    let R = await e.read([{
      key: nt(n.root),
      offset: 0,
      length: oYe + 1
    }]);
    if (!R.ok) {
      if (r) X("warn", "skills_sync_manifest_unreadable", {
        code: "backend_read_failed"
      });
      return null;
    }
    let S = R.value.items[0];
    if (!S.found) return null;
    if (S.totalBytes > oYe || S.value.byteLength > oYe) {
      if (r) X("warn", "skills_sync_manifest_unreadable", {
        code: "parse_or_size"
      });
      return null;
    }
    t = Buffer.from(S.value).toString("utf8");
  } catch (error) {
    if (r) X("warn", "skills_sync_manifest_unreadable", {
      code: k(error) ?? "backend_read_failed"
    });
    return null;
  } else if (t = await Cue(Ne(n.root), r ? "skills_sync_manifest_unreadable" : null), t === null) return null;
  let u = Rue(t, yAt(), r ? "skills_sync_manifest_unreadable" : null);
  if (u === null) return null;
  let {
    skills: skills,
    staleDirs: staleDirs,
    pendingClaims: pendingClaims,
    ...L
  } = u;
  return {
    ...L,
    skills: XY(sYe(), skills),
    staleDirs: Oit(staleDirs),
    pendingClaims: Oit(pendingClaims)
  };
}
async function en(e, n, r, t) {
  let u = t.guard.refusedReason();
  if (u !== null) throw nmr(u);
  await rt(r, t.root);
  let h = await ke(r, t);
  if (h === null && n.onlyOverReadable) return;
  let skills_2 = Qfr(XY(sYe(), e.skills), h?.skills, L => L.skillId, n.removedSkillIds, XY(sYe(), n.deferredRows)),
    M = _({
      ...emr(h, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
      ...e,
      skills: skills_2,
      staleDirs: YMn(e.staleDirs, h?.staleDirs, n.staleDirs),
      pendingClaims: YMn(e.pendingClaims, h?.pendingClaims, n.pendingClaims)
    }, null, 2);
  if (r) {
    let L = await r.write(nt(t.root), M, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic"
    });
    if (!L.ok) throw X("error", "skills_sync_manifest_write_failed", {
      code: L.error.code
    }), Error("skillsSync: manifest write failed");
    return;
  }
  await An(Ne(t.root), M);
}
function rn(e) {
  return B(e, RX, String(process.pid));
}
function K(e, n) {
  return b3(n, e);
}
async function jn(e, n, r) {
  try {
    let t = K(e, n);
    if (r) {
      let y = await r.read([{
          key: an(t),
          offset: 0,
          length: uh + 1
        }]),
        M = y.ok ? y.value.items[0] : void 0;
      if (!M?.found || M.totalBytes > uh || M.value.byteLength > uh) return null;
      return Buffer.from(M.value).toString("utf8");
    }
    let u = B(t, "SKILL.md"),
      h = await Ce(u);
    if (!h.isFile() || h.size > uh) return null;
    return await Nt(u, "utf8");
  } catch {
    return null;
  }
}
function an(e) {
  return Qn(B(e, "SKILL.md"));
}
async function Xn(e, n, r) {
  try {
    let t = K(e, n);
    if (r) return (await r.statMeta(an(t))).ok;
    return (await Ce(B(t, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}
async function Gt(e, n) {
  try {
    if (n) {
      let r = await n.statMeta(an(e));
      return !r.ok && r.error.code === "NotFound";
    }
    return await Ce(B(e, "SKILL.md")), !1;
  } catch (error) {
    return G(error) || k(error) === "ENOTDIR";
  }
}
function Wt(e) {
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
var Yt = {
  idOf: e => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};
function jt(e, n, r) {
  return Nmr(n, r, {
    ...Yt,
    dirFor: t => K(e, t),
    carry: carry,
    ...(Hn() && {
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
function qt(skillName, n, baseDir) {
  let t = r7t({
    skillName: skillName,
    displayName: void 0,
    description: OX(n.description),
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
    serverAttribution: PZt(n.skillId, n.backingPluginId),
    loadedFrom: "syncedSkills",
    hooks: void 0,
    executionContext: void 0,
    agent: void 0,
    paths: void 0,
    effort: void 0,
    shell: void 0,
    skillFile: Fxs("was not read: this command was listed before its file was downloaded")
  });
  if (t?.type === "prompt") t.getPromptForCommand = async (u, h) => {
    let y = await dSe(skillName);
    if (y.ok) {
      let R = (await Ap(yu(), h.storageV5)).find(item => item.loadedFrom === "syncedSkills" && SN(item) === SN(t) && item.name === t.name && item.type === "prompt" && item.getPromptForCommand !== t.getPromptForCommand);
      if (R && R.type === "prompt") return t.source = R.source, t.skillRoot = R.skillRoot, t.skillFile = R.skillFile, t.contentLength = R.contentLength, t.progressMessage = R.progressMessage, t.userInvocable = R.userInvocable, R.getPromptForCommand(u, h);
    }
    let M = y.ok ? "skill not found after download" : y.reason;
    return [{
      type: "text",
      text: !y.ok && y.withheld ? `${R0n(t.name)} Proceed without it.` : `Skill ${skillName} could not be downloaded (${M}). Proceed without it.`
    }];
  };
  return t;
}
function $t(storageV5_4, n) {
  return rmr({
    root: () => n,
    configHome: configHome,
    rootLabel: rootLabel,
    event: "skills_sync_root_refused",
    storageV5: storageV5_4
  });
}
var it = omr("zip fetch failed"),
  Te = XMn("skill archive unusable or landing obstructed");
async function on(e, {
  round: round,
  credentials: credentials,
  storageV5: storageV5_5,
  replacesAttributedCopy: replacesAttributedCopy,
  targetHeldSkillFile: targetHeldSkillFile,
  classifyOccupant: classifyOccupant,
  markTargetDestroyed: markTargetDestroyed
}, L) {
  let R = round.root,
    S = K(R, e.name),
    A = B(rn(R), $n(R, S)),
    w = B(Hf(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (round.guard.refused()) return _At;
    if (L !== void 0) await Ot(w, L);else {
      if (!replacesAttributedCopy && targetHeldSkillFile && (await classifyOccupant(U(S))) === "inFlight") return X("info", "skills_sync_target_in_flight_elsewhere"), uio;
      if (!(await kas(e.skillId, w, e.requestedVersion, {
        isBackground: !0,
        credentials: credentials
      }))) return it;
    }
    if (!(await round.guard.verify())) return _At;
    await re(A, {
      recursive: !0,
      force: !0
    }), await Pt(rn(R), {
      recursive: !0
    }), await xmr(w, A, {
      skipEntry: O => O.split(/[\\/]/).some(item => _3(item))
    });
    let I = A,
      D = await qn(A, {
        withFileTypes: !0
      });
    if (!D.some(item => item.name === "SKILL.md") && D.length === 1 && D[0].isDirectory()) I = B(A, D[0].name);
    try {
      if (!(await Ce(B(I, "SKILL.md"))).isFile()) return X("warn", "skills_sync_extracted_zip_unusable"), Te;
    } catch {
      return X("warn", "skills_sync_extracted_zip_unusable"), Te;
    }
    if (await Pmr(I)) return X("warn", "skills_sync_extracted_zip_unusable"), Te;
    if (!(await round.guard.verify())) return _At;
    if (replacesAttributedCopy) await re(S, {
      recursive: !0,
      force: !0
    });
    try {
      await Un(I, S);
    } catch (error) {
      let q = k(error);
      if (replacesAttributedCopy || !JMn(q)) {
        if (replacesAttributedCopy) markTargetDestroyed();
        return X("warn", "skills_sync_promotion_failed", {
          code: q ?? "unknown"
        }), bAt(q);
      }
      let ue = await classifyOccupant(U(S));
      if (ue === "inFlight") return X("info", "skills_sync_target_in_flight_elsewhere"), uio;
      if (ue === "landed") await re(S, {
        recursive: !0,
        force: !0
      });else if (!(await Fe(S, storageV5_5))) return E8t;
      try {
        await Un(I, S);
      } catch (error) {
        markTargetDestroyed();
        let N = k(error);
        return X("warn", "skills_sync_promotion_failed", {
          code: N ?? "unknown"
        }), bAt(N);
      }
    }
    return $cs;
  } finally {
    if (await re(w, {
      force: !0
    }).catch(() => {}), !round.guard.refused() && (await Fz(R, configHome(), {
      event: "skills_sync_root_refused",
      phase: "sweep",
      rootLabel: rootLabel
    }, {
      checkStagingLeaf: !0,
      storageV5: storageV5_5
    }).catch(() => null)) === "real") await re(A, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var Zt = 500;
async function Jt(e, n) {
  try {
    return await on(e, n, void 0);
  } catch {
    return X("warn", "skills_sync_extract_retry"), await Y(Zt), on(e, n, void 0);
  }
}
async function Qt(e, n) {
  let {
    fromHostMount: fromHostMount
  } = n;
  if (fromHostMount !== void 0) {
    let t = await on(e, n, fromHostMount.zip).catch(() => null);
    if (t?.ok) n.markLandedFromHostMount();
    if (t !== null && (t.ok || t.cause !== "extract")) return t;
    jvo(fromHostMount.kind, {
      reason: t === null ? "landing_threw" : "zip_unusable"
    }, n.hostMountMissCounts);
  }
  return Jt(e, n);
}
async function ln(e, n, r, t) {
  let u = cp();
  if (u.syncPromise) return u.syncPromise;
  return u.syncPromise = ei(e, n, r, t).finally(() => {
    u.syncPromise = null;
  }), u.syncPromise;
}
async function Vt(e, n) {
  let r = B(e, SD),
    t,
    u,
    h;
  try {
    u = (await _y(r, oYe)).content, h = J(u);
  } catch {
    return null;
  }
  let y = Ut().safeParse(h);
  if (y.success) {
    let {
      lastUpdated: lastUpdated,
      skills: skills_3,
      staleDirs: staleDirs_2,
      pendingClaims: pendingClaims_2,
      ...q
    } = y.data;
    t = {
      ...q,
      lastUpdated: lastUpdated,
      skills: XY(Kt(), skills_3),
      staleDirs: Oit(staleDirs_2),
      pendingClaims: Oit(pendingClaims_2)
    };
  } else return null;
  let M = [...t.skills.map(w => ({
      row: w,
      syntheticListName: null
    })), ...["staleDirs", "pendingClaims"].flatMap(w => (t[w] ?? []).map(I => ({
      row: {
        name: w === "pendingClaims" ? Wft(I).name : I
      },
      syntheticListName: w,
      entry: I
    })))],
    L = 0,
    skills_4 = [],
    S = [],
    A = [];
  for (let w of M) {
    let row = w.row;
    if (w.syntheticListName === "pendingClaims" && (await cn(w.entry))) {
      A.push(w.entry);
      continue;
    }
    try {
      let D = H9e(row.name, e);
      if (await W8t(D, V())) {
        X("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await W8t(D, Ae())) {
        X("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await Fe(D, n)) L++;else if (w.syntheticListName === "staleDirs") S.push(w.entry);else if (w.syntheticListName === "pendingClaims") A.push(w.entry);else skills_4.push(w.row);
    } catch (error) {
      if (error instanceof L9e) {
        if (w.syntheticListName === "staleDirs") S.push(w.entry);else if (w.syntheticListName === "pendingClaims") A.push(w.entry);else skills_4.push(w.row);
        continue;
      }
    }
  }
  if (skills_4.length > 0 || S.length > 0 || A.length > 0) {
    let w = _({
      ...t,
      skills: skills_4,
      staleDirs: S.length > 0 ? S : void 0,
      pendingClaims: A.length > 0 ? A : void 0
    }, null, 2);
    if (w !== u) await An(r, w).catch(() => {});
  } else await re(r, {
    force: !0
  }).catch(() => {});
  return L;
}
async function ei(e, storageV5_6, credentials_2, t) {
  let u = Date.now(),
    h = performance.now(),
    y = !1,
    M = !1,
    account_opt_in = !1,
    idle_2 = !1,
    S = () => {
      let duration_ms = Date.now() - u;
      return {
        account_opt_in: account_opt_in,
        idle: idle_2,
        woken: "woken" in t,
        trigger: c(t.trigger),
        ...("tickLateMs" in t && {
          tick_late_ms: t.tickLateMs
        }),
        duration_ms: duration_ms,
        suspended_ms: Math.max(0, Math.round(duration_ms - (performance.now() - h)))
      };
    },
    A = new Map(),
    w = !1,
    I = null,
    D = cp(),
    O = !1,
    listedDirs = null,
    removalTriedDirs = new Set(),
    Se = !1;
  try {
    if (account_opt_in = Ugn(), hAt()) account_opt_in = !0;
    if (!oZ(e) || !rYe()) {
      X("info", "skills_sync_gate_closed");
      let {
        placeholders: placeholders,
        listedOwnerships: listedOwnerships
      } = cp();
      if (listedOwnerships.clear(), placeholders.size > 0) placeholders.clear(), yce();
      p("skills_sync_round", "gate_closed", S());
      return;
    }
    if (Fcs()) {
      X("info", "skills_sync_policy_verdict_pending"), p("skills_sync_round", "policy_verdict_pending", S());
      return;
    }
    let bucket_2 = await _D(credentials_2);
    if (bucket_2 === null) {
      X("info", "skills_sync_bucket_unresolved"), p("skills_sync_round", "bucket_unresolved", S());
      return;
    }
    let round_2 = $t(storageV5_6, Jn(bucket_2));
    I = round_2;
    let F = round_2.root;
    idle_2 = t.trigger === "resync" && !("woken" in t) && D.consecutiveFailedRounds === 0 && !T0n(e) && Cn();
    let fe = await zn({
      syncedRoot: V(),
      bucket: bucket_2,
      root: F,
      trigger: t.trigger,
      pinned: sO(e),
      lastGeneration: D.bucketGeneration,
      holdsPlaceholders: D.placeholders.size > 0,
      idle: idle_2
    });
    if (!fe.list) {
      if (D.bucketGeneration = fe.generation, fe.reload) {
        let s = await ke(storageV5_6, round_2);
        if (s) {
          let d = new Set();
          for (let b of s.skills) try {
            d.add(U(K(F, b.name)));
          } catch {}
          Tmo(d);
        }
        listedDirs = new Set(), yce();
      }
      g("skills_sync_round", {
        ...S(),
        reused: !0,
        reloaded: fe.reload
      });
      return;
    }
    Se = !0, X("info", "skills_sync_starting");
    let x,
      skills_5 = [],
      ot = performance.now();
    if (sO(e)) {
      let [s, d] = await Promise.all([SBe.of(e).listEntries("skills", {
        startup: t.trigger === "startup"
      }), a.CLAUDE_CODE_SYNC_SKILLS ? i3t({
        isBackground: !0,
        credentials: credentials_2
      }) : null]);
      if (!s.success) x = s;else if (skills_5 = s.entries.map(Wt), d === null) x = {
        success: !0,
        skills: skills_5
      };else if (!d.success) x = d;else x = {
        success: !0,
        skills: Lmr(skills_5, d.skills, b => b.skillId, (b, C) => ({
          ...carry(b, C),
          userInvocable: C.userInvocable,
          disableModelInvocation: C.disableModelInvocation
        }))
      };
    } else x = await i3t({
      isBackground: !0,
      credentials: credentials_2
    });
    let list_ms = Math.round(performance.now() - ot);
    if (O = !x.success && oX(x), O) X("warn", "skills_sync_list_refused"), D.listedOwnerships.clear(), x = {
      success: !0,
      skills: skills_5
    };
    if (!x.success) {
      D.consecutiveFailedRounds++;
      let s = p8e(x),
        d = {
          ...S(),
          ...s
        };
      if (X("warn", "skills_sync_list_failed", d), i("tengu_skills_sync_list_failed", d), (x.kind === "timeout" || x.kind === "network" || x.kind === "http") && d.suspended_ms > ve) p("skills_sync_round", "suspended", d);else m("skills_sync_round", "list_failed", d);
      return;
    }
    if (D.consecutiveFailedRounds = O ? D.consecutiveFailedRounds + 1 : 0, !(await rq(V(), bucket_2)) && (await nn(F).then(s => s.isDirectory(), () => !1)) && (await Aue({
      dir: F,
      trashRoot: Ae(),
      configHome: configHome(),
      failureEvent: "skills_sync_trash_move_failed",
      storageV5: storageV5_6
    }).catch(() => !1))) X("info", "skills_sync_unmarked_bucket_quarantined");
    await rt(storageV5_6, F), await smr(V(), bucket_2), w = !0;
    let pe = await E0n(F);
    if (fe.shared && pe !== null && D.bucketGeneration !== null && pe.token !== D.bucketGeneration) yce();
    await Ht(storageV5_6);
    let ee = await ke(storageV5_6, round_2),
      {
        toDownload: toDownload,
        toRemove: toRemove,
        carryover: carryover,
        liveDirs: liveDirs,
        carryoverOwningLiveDir: carryoverOwningLiveDir
      } = jt(F, x.skills, ee?.skills ?? []),
      lt = z8t(liveDirs),
      xe = async s => {
        let d;
        try {
          d = H9e(s, F);
        } catch (error) {
          if (error instanceof L9e) return !1;
          return !0;
        }
        let b = await lt(d);
        if (b === "live") return !0;
        if (b === "indeterminate") return !1;
        return removalTriedDirs.add(d), Fe(d, storageV5_6);
      },
      ze = new Set(Array.from(liveDirs, s => U(s))),
      ct = Tmo(ze);
    if (Xus(ze) + ct > 0) nx(), sn(), V1.emit();
    listedDirs = liveDirs;
    let dt = await Promise.all(carryover.map(item => carryoverOwningLiveDir.has(item.skillId) ? Xn(F, item.name, storageV5_6) : null)),
      He = new Set();
    for (let [s, d] of carryover.entries()) {
      let b = dt[s];
      if (b === null) continue;
      if (!b) {
        let item_2 = x.skills.find(item => item.skillId === d.skillId);
        if (item_2) He.add(d.skillId), toDownload.push({
          item: item_2
        });
        continue;
      }
      let C = U(K(F, d.name));
      if (D.placeholders.delete(C)) D.pendingDownloads.get(C)?.resolve({
        ok: !0
      }), D.pendingDownloads.delete(C), Mq(), nx(), M = !0, X("info", "skills_sync_materialized_elsewhere");
    }
    let ut = carryover.filter(item => !He.has(item.skillId)),
      we = new Map(carryover.filter(item => He.has(item.skillId)).map(item => [item.skillId, item])),
      j = new Set(ee?.staleDirs ?? []),
      staleDirs_3 = new Set(),
      pendingClaims_4 = new Set(),
      Ue = {
        pid: process.pid,
        procStart: await ad(process.pid)
      },
      Ke = [];
    if (ee?.pendingClaims) {
      let pendingClaims_3 = ee.pendingClaims,
        d = new Set();
      for (let b of pendingClaims_3) if (await cn(b)) d.add(Wft(b).name);else Ke.push(b);
      for (let b of Ke) {
        let {
          name: name
        } = Wft(b);
        if (d.has(name) || ze.has(name)) continue;
        j.add(name), pendingClaims_4.add(b);
      }
    }
    for (let s of j) if (await xe(s)) j.delete(s), staleDirs_3.add(s);
    if (staleDirs_3.size > 0 || pendingClaims_4.size > 0) M = !0;
    let he = Zfr(ee?.skills ?? [], [...carryover, ...toDownload.flatMap(({
      prev: prev
    }) => prev ?? [])], s => s.skillId, (s, d) => s.backingPluginId === d.backingPluginId && s.updatedAt === updatedAt === (d.updatedAt === updatedAt));
    if (toDownload.length === 0 && toRemove.length === 0) {
      if (M) yce();
      if ((staleDirs_3.size > 0 || pendingClaims_4.size > 0 || he.attributionMoved) && ee) await en({
        lastUpdated: ee.lastUpdated,
        skills: he.rows,
        staleDirs: j.size > 0 ? Array.from(j) : void 0,
        pendingClaims: void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
      if (ee) {
        let date = new Date();
        await At(Ne(F), date, date).catch(() => {});
      }
      let s = M ? null : pe;
      Gn(await G8t(F, "skills", j.size === 0 && !O && !sO(e), s, Le()), s), X("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - u,
        list_ms: list_ms,
        ...(t.trigger === "startup" && {
          first_message_gate_open_ms: Math.round(performance.now() - h)
        })
      });
      let d = {
        ...S(),
        no_changes: !0
      };
      if (O) p("skills_sync_round", "not_entitled", d);else g("skills_sync_round", d);
      return;
    }
    let un = 0;
    for (let {
      item: item_3,
      prev: prev_2
    } of toDownload) if (!prev_2) {
      let b = K(F, item_3.name),
        C = qt(U(b), item_3, b);
      if (C === void 0) continue;
      Kus(C), un++, A.set(item_3.skillId, Gus(U(K(F, item_3.name))));
    }
    if (un > 0) nx(), sn(), V1.emit();
    let fn = !0;
    try {
      let pendingClaims_5 = [];
      for (let {
        item: item_4
      } of toDownload) try {
        pendingClaims_5.push(UPr(U(K(F, item_4.name)), Ue));
      } catch {}
      if (pendingClaims_5.length > 0) await en({
        lastUpdated: ee?.lastUpdated ?? 0,
        skills: he.rows,
        staleDirs: j.size > 0 ? Array.from(j) : void 0,
        pendingClaims: pendingClaims_5
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
    } catch (error) {
      if (error instanceof eZ) throw error;
      fn = !1, X("warn", "skills_sync_pending_claims_write_failed");
    }
    tn().resolve();
    let first_message_gate_open_ms = Math.round(performance.now() - h);
    if (!fn) {
      if (m("skills_sync_round", "pending_claims_write_failed", S()), M) yce();
      return;
    }
    let ie = [],
      Ge = [],
      mn = [],
      deferredRows_2 = [],
      deferred = 0,
      _n = 0,
      le = {},
      yn = ({
        item: item_5,
        prev: prev_3
      }) => prev_3 === void 0 && !we.has(item_5.skillId) ? SOs(item_5) : void 0,
      kn = toDownload.flatMap(item => yn(item) ?? []),
      Sn = new Set(kn),
      hostMountMissCounts = new Map(),
      gn = s => (X("warn", "skills_sync_host_mount_threw"), l(H(s)), null),
      pn = Sn.size > 0 ? wOs(Sn, hostMountMissCounts).catch(gn) : null,
      Re = new Set(),
      wn = new Map();
    await Promise.all(toDownload.map(ha(Ve, async ({
      item: item_6
    }) => {
      wn.set(item_6, await jn(F, item_6.name, storageV5_6));
    }))), await Promise.all(toDownload.map(p0s(Ve, async s => {
      let kind = yn(s);
      if (kind === void 0) return;
      let zip = await (await pn)?.readZip(kind, s.item).catch(gn);
      return zip ? {
        kind: kind,
        zip: zip
      } : void 0;
    }, async ({
      item: item_7,
      prev: prev_4
    }, fromHostMount_2) => {
      let C = wn.get(item_7) ?? null,
        P = it;
      try {
        P = await Qt(item_7, {
          round: round_2,
          credentials: credentials_2,
          storageV5: storageV5_6,
          classifyOccupant: z => ni(z, storageV5_6, round_2),
          markTargetDestroyed: () => {
            y = !0;
          },
          replacesAttributedCopy: prev_4 !== void 0 && (await st(F, prev_4.name, item_7.name)) || we.has(item_7.skillId),
          targetHeldSkillFile: Ie() && C !== null,
          fromHostMount: fromHostMount_2,
          markLandedFromHostMount: () => {
            Re.add(item_7.skillId);
          },
          hostMountMissCounts: hostMountMissCounts
        });
      } catch {
        P = Te, X("warn", "skills_sync_extract_failed");
      }
      if (P.ok) {
        ie.push(item_7);
        let z = prev_4 !== void 0 && prev_4.name !== item_7.name;
        if (z || (C === null ? prev_4 !== void 0 || we.has(item_7.skillId) : C !== (await jn(F, item_7.name, storageV5_6)))) Ge.push(item_7);
        if (z) Ge.push(prev_4);
        if (prev_4 && prev_4.name !== item_7.name) {
          if (!(await xe(prev_4.name))) j.add(prev_4.name);
        }
        Yus(U(K(F, item_7.name))), Mq(), nx(), g("skills_sync_download", {
          landed_from_mount: Re.has(item_7.skillId)
        });
      } else {
        let z = Ucs(P.cause);
        if (z === null) deferred++, X("info", "skills_sync_landing_deferred");else le[z] = (le[z] ?? 0) + 1, m("skills_sync_download", z);
        let ce = prev_4 ?? we.get(item_7.skillId);
        if (ce && P.cause === "deferred") {
          if (deferredRows_2.push(ce), prev_4 && prev_4.name !== item_7.name) j.add(prev_4.name), _n++;
        } else if (ce) mn.push(ce);else try {
          let Q = K(F, item_7.name);
          if (await nn(Q).then(() => !1, kt => G(kt))) pendingClaims_4.add(UPr(U(Q), Ue));
        } catch {}
      }
      A.get(item_7.skillId)?.(P.ok ? {
        ok: !0
      } : {
        ok: !1,
        reason: Bcs(P.cause)
      });
    })));
    let _e = [];
    await Promise.all(toRemove.map(ha(Ve, async s => {
      if (!(await xe(s.name))) _e.push(s);
    })));
    let removedSkillIds_2 = new Set(toRemove.map(item => item.skillId));
    for (let s of _e) removedSkillIds_2.delete(s.skillId);
    let Xe = ie.length > 0 || y || _e.length < toRemove.length || staleDirs_3.size > 0 || pendingClaims_4.size > 0,
      mt = Xe || _n > 0 || he.attributionMoved,
      hn = toRemove.filter(item => removedSkillIds_2.has(item.skillId)),
      yt = await Promise.all(hn.map(item => Xn(F, item.name, storageV5_6))),
      Mn = [...Ge, ...hn.filter((item, index) => !yt[index])].flatMap(item => {
        try {
          return [phe(U(H9e(item.name, F)))];
        } catch {
          return [];
        }
      });
    if (pps(Mn), Mn.length > 0) nx();
    if (Xe || M) yce();
    let De = !1;
    if (mt) {
      let s = [...ut, ...ie, ...mn, ..._e],
        d = new Set();
      for (let P of [...s, ...deferredRows_2]) try {
        d.add(U(K(F, P.name)));
      } catch {}
      for (let P of d) pendingClaims_4.add(UPr(P, Ue));
      for (let P of Ke) if (d.has(Wft(P).name)) pendingClaims_4.add(P);
      let b = (skills_6, onlyOverReadable) => en({
        lastUpdated: Date.now(),
        skills: skills_6,
        staleDirs: j.size > 0 ? Array.from(j) : void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds_2,
        deferredRows: deferredRows_2,
        onlyOverReadable: onlyOverReadable
      }, storageV5_6, round_2);
      await b(s, !1);
      let C = ie.length > 0 && Ie() ? 2 : 0;
      for (let P = 0; P < C; P++) {
        await Y(D.lostRowsRecheckMs * (1 + Math.random()));
        let z = await ke(storageV5_6, round_2),
          ce = new Set(z?.skills.map(Q => Q.skillId));
        if (De = !ie.every(item => ce.has(item.skillId)), !De) break;
        if (z === null) continue;
        X("info", "skills_sync_manifest_rows_lost");
        try {
          await b(ie, !0);
        } catch (error) {
          if (error instanceof eZ) throw error;
          l(H(error));
          break;
        }
      }
      if (De) X("warn", "skills_sync_manifest_rows_unconfirmed");
    }
    let failed = toDownload.length - ie.length - deferred,
      Rn = await pn,
      $e = {
        downloaded: ie.length - Re.size,
        from_mount: Re.size,
        mount_eligible: kn.length,
        mount_read_ms: Rn?.spentMs() ?? 0,
        mount_wait_ms: Rn?.waitedMs() ?? 0,
        ...RWn(hostMountMissCounts)
      };
    X("info", "skills_sync_complete", {
      ...$e,
      removed: toRemove.length,
      duration_ms: Date.now() - u,
      list_ms: list_ms,
      ...(t.trigger === "startup" && {
        first_message_gate_open_ms: first_message_gate_open_ms
      })
    });
    let Dn = S();
    i("tengu_skills_sync_success", {
      ...Dn,
      ...$e,
      removed: toRemove.length,
      total: x.skills.length
    });
    let vn = Xe || M ? null : pe;
    Gn(await G8t(F, "skills", !O && failed === 0 && deferred === 0 && !De && _e.length === 0 && j.size === 0 && !sO(e), vn, Le()), vn);
    let Ze = {
      ...Dn,
      ...$e,
      deferred: deferred,
      removed: toRemove.length,
      total: x.skills.length
    };
    if (failed > 0) p("skills_sync_round", "download_failed", {
      ...Ze,
      failed: failed,
      download_failed: le.download_failed ?? 0,
      extract_failed: le.extract_failed ?? 0,
      root_refused: le.root_refused ?? 0,
      local_failed: le.local_failed ?? 0
    });else if (O) p("skills_sync_round", "not_entitled", Ze);else g("skills_sync_round", Ze);
  } catch (error) {
    if (M || y) yce();
    if (error instanceof eZ && w) X("warn", "skills_sync_late_root_refusal", {
      reason: error.reason,
      duration_ms: Date.now() - u
    }), p("skills_sync_round", "root_refused", S()), w = !1;else if (error instanceof eZ) X("warn", "skills_sync_root_refused_round", {
      reason: error.reason,
      duration_ms: Date.now() - u
    }), p("skills_sync_round", "root_refused", S());else {
      if (!O) D.consecutiveFailedRounds++;
      X("error", "skills_sync_unexpected_error", {
        duration_ms: Date.now() - u
      });
      let W = S();
      i("tengu_skills_sync_error", W), m("skills_sync_round", "unexpected_error", W);
    }
  } finally {
    if (Se) xn();
    for (let N of A.values()) N({
      ok: !1,
      reason: "skills sync failed"
    });
    if (tn().resolve(), listedDirs !== null && I !== null) await Ncs({
      bucketRoot: I.root,
      listedDirs: listedDirs,
      removalTriedDirs: removalTriedDirs,
      isSkillFileGone: N => Gt(N, storageV5_6)
    }).catch(() => {
      X("warn", "skills_sync_hooks_removal_failed");
    });
    if (I === null || I.guard.refused()) w = !1;
    if (w && I !== null) {
      if ((await Fz(I.root, configHome(), {
        event: "skills_sync_root_refused",
        phase: "sweep",
        rootLabel: rootLabel
      }, {
        checkStagingLeaf: !0,
        storageV5: storageV5_6
      }).catch(() => null)) === "real") await re(rn(I.root), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
}
async function cn(e) {
  let {
    ownerPid: ownerPid,
    ownerProcStart: ownerProcStart
  } = Wft(e);
  return ownerPid !== void 0 && ownerPid !== process.pid && Ia(ownerPid) && (await ek(ownerPid, ownerProcStart));
}
async function ni(e, n, r) {
  let t = await ke(n, r);
  if (!t) return "unattributed";
  for (let u of t.skills) if (await st(r.root, u.name, e)) return "landed";
  for (let u of t.pendingClaims ?? []) if (Wft(u).name === e && (await cn(u))) {
    if (!Ie()) return "inFlight";
    let h = await nn(B(r.root, e)).then(y => Math.floor(y.ctimeMs), y => {
      if (G(y)) return -1 / 0;
      return X("warn", "skills_sync_occupant_unreadable", {
        code: k(y) ?? "unknown"
      }), 1 / 0;
    });
    if (!(Date.now() - h >= Bt)) return "inFlight";
    return X("info", "skills_sync_live_claim_timed_out"), "unattributed";
  }
  return "unattributed";
}
async function st(e, n, r) {
  try {
    let t = K(e, n),
      u = K(e, r);
    return U(t) === U(u) || (await W8t(t, u));
  } catch {
    return !1;
  }
}
function rt(storageV5_7, root_2) {
  return tmr({
    root: root_2,
    trashRoot: Ae(),
    configHome: configHome(),
    events: {
      refused: "skills_sync_root_refused"
    },
    storageV5: storageV5_7
  });
}
export { xXo, tRe, PXo, OXo, IXo, Mvn, yce, Dvn };