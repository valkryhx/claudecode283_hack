// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { aA, mjt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Se as configHome } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { x, qs } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Iy } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Ld, DY } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { M_, $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { QXt, C0n, qtt, uCt, R0n, kL, pCt, _8, YH, X7, A0n, x0n, P0n, Jlo, Ktt, rJt, I0n, Qlo, oJt, fCt, Ytt, Zlo, eco, NG, O0n, Xtt, cMe, _Ge, M0n, sJt, J7, D0n, L0n, Zwe, eve, N0n, bGe, H0n, mCt, iJt, F0n, $0n, U0n, _E, ove, wco, _Jt, kco, Eco, Tco, bJt, vCt, Cco, Rco, SJt, q0n, PL, Sxt, LZ, zwr, Sp, MT } from "B:/~BUN/root/chunk-3jyp964r.js";
import { rD, x2n, u6e, NHe, rq, dCe, Mz, p6e, f6e, u6 as rootLabel, FHe } from "B:/~BUN/root/chunk-gj0n7q1s.js";
import { Oee, Gsn, fz, nTe, Cat as updatedAt } from "B:/~BUN/root/chunk-r6m7remx.js";
import { _kt, kso } from "B:/~BUN/root/chunk-gpp54h0e.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { Yin } from "B:/~BUN/root/chunk-h7t9e2fk.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { ug } from "B:/~BUN/root/chunk-t1t358ee.js";
import { o, E, ae, C, ut } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { lstat as sn, lutimes as Wn, mkdir as jn, readdir as fn, rename as rn, rm as X, rmdir as on, stat as mn } from "fs/promises";
import { basename as U, join as A, relative as yn, sep as Xn } from "path";
var qe = 10,
  Nn = qe * 60000,
  Fn = 4,
  An = "tengu_claudeai_skills_sync_interval_minutes",
  On = 5,
  xn = 1440,
  Bn = "tengu_claudeai_skills_sync_shared_round",
  zn = 30000,
  Un = 60000,
  settle_ms = 180000,
  Te = 45000;
function oe() {
  let e = x(An, qe);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return Nn;
  return Math.min(Math.max(e, On), xn) * 60000;
}
function Je() {
  return x(Bn, !1) === !0;
}
function Qe() {
  return zn + Math.floor(Math.random() * Un);
}
function Ie(e) {
  let n = oe();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * Fn);
}
function Ve(e) {
  let n = _E();
  if (n.resyncTimer) return;
  n.resyncRunRound = e, me(n, e, Ie(n.consecutiveFailedRounds), "resync");
}
function Pe(e) {
  let n = _E();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  clearTimeout(n.resyncTimer), me(n, n.resyncRunRound, e, "resync");
}
function en() {
  Pe(Ie(_E().consecutiveFailedRounds));
}
function me(e, n, r, t) {
  let l = Date.now() + r;
  e.resyncTimer = setTimeout(Hn, r, e, n, l, t), e.resyncTimer.unref?.();
}
function Hn(e, n, r, trigger) {
  let resyncTimer = e.resyncTimer,
    w = Math.max(0, Date.now() - r);
  if (w > Te) {
    K("info", "skills_sync_resync_skipped_after_sleep", {
      late_ms: w
    }), i("tengu_skills_sync_resync_skipped", {
      trigger: c(trigger),
      tick_late_ms: w,
      settle_ms: settle_ms
    }), me(e, n, settle_ms, "wake_settle");
    return;
  }
  n({
    trigger: trigger,
    tickLateMs: w
  }).catch(() => {}).then(() => {
    if (e.resyncTimer !== resyncTimer) return;
    me(e, n, Ie(e.consecutiveFailedRounds), "resync");
  });
}
var Kn = 60000;
function ye() {
  return Ld() ?? "none";
}
async function nn({
  syncedRoot: syncedRoot,
  bucket: bucket,
  root: root,
  trigger: trigger_2,
  pinned: pinned,
  lastGeneration: lastGeneration,
  holdsPlaceholders: holdsPlaceholders
}) {
  let shared = !pinned && Je() && bucket === pCt(),
    R = pinned ? void 0 : Yn(trigger_2, shared);
  if (R === void 0) return {
    list: !0,
    shared: shared
  };
  let u = await F0n(root, R);
  if (!u.reuse || !(await NG(syncedRoot, bucket))) return {
    list: !0,
    shared: shared
  };
  let h = await H0n(root),
    reload = !1;
  if (shared) {
    if (h === null || holdsPlaceholders || !h.listedFor.includes(ye())) return {
      list: !0,
      shared: shared
    };
    reload = h.token !== lastGeneration && trigger_2 !== "startup";
    let y = oe();
    if (u.ageMs < y) Pe(y - u.ageMs + Qe());
  }
  return K("info", "skills_sync_round_reused", {
    age_ms: u.ageMs,
    within_ms: u.withinMs
  }), {
    list: !1,
    generation: h?.token ?? null,
    reload: reload
  };
}
function Yn(e, n) {
  let r = e === "startup" ? N0n() : void 0;
  if (!n || e === "reload") return r;
  let t = e === "startup" && !DY() ? Math.min(Kn, oe()) : oe();
  return Math.max(t, r ?? 0);
}
var Gn = "tengu_jaunty_alpaca";
function tn() {
  return qs(Gn, !0) !== !1;
}
var an = 15;
function Zn() {
  let CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS : 5000;
}
function O4r() {
  let CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS && CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS > 0 ? CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS : 30000;
}
function Fe() {
  let e = _E();
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
function gWt(e, n, r) {
  _E().firstSyncPromise ??= _n(e, n, r), Ve(t => Be(e, n, r, t));
}
function M4r(e, n, r) {
  let t = Fe();
  return _E().firstSyncPromise ??= _n(e, n, r), t.promise;
}
async function D4r(e, n) {
  let r = Zn() - (performance.now() - n),
    t = await Promise.race([e.then(() => "listed"), Q(Math.max(0, r)).then(() => "timed_out")]);
  if (t === "timed_out") i("tengu_skills_sync_wait_timeout", {});
  return t;
}
async function L4r(e, n, r) {
  return nTe.of(e).discardInflight(), await _E().syncPromise?.catch(() => {}), Be(e, n, r, {
    trigger: "reload"
  });
}
function _n(e, n, r) {
  let t = _E();
  return Be(e, n, r, {
    trigger: "startup"
  }).finally(() => {
    t.firstRoundSettled = !0;
  });
}
function Oe() {
  let e = _E();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0;
}
function j() {
  Oe(), LZ(), PL.emit();
}
function ln(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    j();
    return;
  }
  _E().bucketGeneration = e.token;
}
function G() {
  return A(configHome(), rootLabel);
}
function kn(e) {
  return A(G(), e);
}
function gn(e) {
  return Ae.userConfigDir("skills", yn(A(configHome(), "skills"), e).split(Xn));
}
async function Sn(storageV5) {
  let n = G();
  if ((await YH(n, configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5
  }).catch(() => null)) !== "real") return null;
  let t;
  try {
    t = await fn(n, {
      withFileTypes: !0
    });
  } catch {
    return null;
  }
  let buckets = [],
    strays = [];
  for (let S of t) if (S.isDirectory() && dCe(S.name) && (await NG(n, S.name))) buckets.push(S.name);else if (!Mz(S.name)) strays.push(S.name);
  return {
    buckets: buckets,
    strays: strays
  };
}
async function pn(e, n) {
  let count = 0;
  for (let t of e) if (await ge(A(G(), t), n)) count++;
  if (count > 0) K("info", "skills_sync_stray_entry_trashed", {
    count: count
  });
  return count;
}
async function $n(e) {
  let n = await Sn(e);
  if (n === null || n.strays.length === 0) return !1;
  return (await pn(n.strays, e)) > 0;
}
function ge(dir, storageV5_2) {
  return X7({
    dir: dir,
    trashRoot: pe(),
    configHome: configHome(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: storageV5_2
  });
}
async function hWt(storageV5_3) {
  if (!Rco()) return !1;
  let n = await YH(G(), configHome(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: rootLabel
  }, {
    storageV5: storageV5_3
  });
  if (n !== "real" && n !== "absent") return !1;
  let r = null,
    t = n === "real" ? await Sn(storageV5_3) : null;
  if (t !== null) {
    r = 0;
    for (let w of t.buckets) {
      let S = kn(w);
      await X(bGe(S), {
        force: !0
      }).catch(() => {});
      let g = await lt(S, storageV5_3).catch(() => null);
      if (g !== null) r += g, await on(S).then(() => Xtt(G(), w), () => {});
    }
    r += await pn(t.strays, storageV5_3), await on(G()).catch(() => {});
  }
  K("info", "skills_sync_pruned_for_closed_gate", {
    moved: r ?? 0
  });
  let l = r !== null && r > 0;
  if (l) MT(), LZ(), PL.emit();
  return l;
}
function pe() {
  return A(configHome(), FHe);
}
function we(e) {
  return A(e, rD);
}
var removedSkillIds = new Set(),
  deferredRows = [],
  qn = f(() => ut({
    lastUpdated: E().catch(0),
    skills: C(ae()),
    staleDirs: ae().optional(),
    pendingClaims: ae().optional()
  })),
  Jn = f(() => ut({
    name: o(),
    skillId: o().catch(""),
    description: o().catch(""),
    source: o().catch(""),
    updatedAt: o().nullable().catch(null)
  }));
function wn(e) {
  return gn(we(e));
}
async function ke(e, n) {
  let r = !n.manifestRead;
  n.manifestRead = !0;
  let t;
  if (e) try {
    let u = await e.read([{
      key: wn(n.root),
      offset: 0,
      length: cMe + 1
    }]);
    if (!u.ok) {
      if (r) K("warn", "skills_sync_manifest_unreadable", {
        code: "backend_read_failed"
      });
      return null;
    }
    let h = u.value.items[0];
    if (!h.found) return null;
    if (h.totalBytes > cMe || h.value.byteLength > cMe) {
      if (r) K("warn", "skills_sync_manifest_unreadable", {
        code: "parse_or_size"
      });
      return null;
    }
    t = Buffer.from(h.value).toString("utf8");
  } catch (error) {
    if (r) K("warn", "skills_sync_manifest_unreadable", {
      code: v(error) ?? "backend_read_failed"
    });
    return null;
  } else if (t = await Zwe(we(n.root), r ? "skills_sync_manifest_unreadable" : null), t === null) return null;
  let l = eve(t, q0n(), r ? "skills_sync_manifest_unreadable" : null);
  if (l === null) return null;
  let {
    skills: skills,
    staleDirs: staleDirs,
    pendingClaims: pendingClaims,
    ...R
  } = l;
  return {
    ...R,
    skills: J7(SJt(), skills),
    staleDirs: _Ge(staleDirs),
    pendingClaims: _Ge(pendingClaims)
  };
}
async function Ne(e, n, r, t) {
  let l = t.guard.refusedReason();
  if (l !== null) throw x0n(l);
  await Mn(r, t.root);
  let w = await ke(r, t),
    skills_2 = M0n(J7(SJt(), e.skills), w?.skills, R => R.skillId, n.removedSkillIds, n.deferredRows),
    g = b({
      ...L0n(w, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
      ...e,
      skills: skills_2,
      staleDirs: sJt(e.staleDirs, w?.staleDirs, n.staleDirs),
      pendingClaims: sJt(e.pendingClaims, w?.pendingClaims, n.pendingClaims)
    }, null, 2);
  if (r) {
    let R = await r.write(wn(t.root), g, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic"
    });
    if (!R.ok) throw K("error", "skills_sync_manifest_write_failed", {
      code: R.error.code
    }), Error("skillsSync: manifest write failed");
    return;
  }
  await Cn(we(t.root), g);
}
function xe(e) {
  return A(e, rq, String(process.pid));
}
function z(e, n) {
  return p6e(n, e);
}
function Qn(e) {
  return gn(A(e, "SKILL.md"));
}
async function Vn(e, n, r) {
  try {
    let t = z(e, n);
    if (r) return (await r.statMeta(Qn(t))).ok;
    return (await mn(A(t, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}
function et(e) {
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
var nt = {
  idOf: e => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};
function tt(e, n, r) {
  return U0n(n, r, {
    ...nt,
    dirFor: t => z(e, t),
    carry: carry,
    ...(tn() && {
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
function st(skillName, n, baseDir) {
  let t = Sxt({
    skillName: skillName,
    displayName: void 0,
    description: Yin(n.description),
    hasUserSpecifiedDescription: !0,
    markdownContent: "",
    allowedTools: [],
    argumentHint: void 0,
    argumentNames: [],
    whenToUse: void 0,
    version: void 0,
    model: void 0,
    disableModelInvocation: !1,
    userInvocable: !0,
    source: "userSettings",
    baseDir: baseDir,
    serverAttribution: QXt(n.skillId, n.backingPluginId),
    loadedFrom: "syncedSkills",
    hooks: void 0,
    executionContext: void 0,
    agent: void 0,
    paths: void 0,
    effort: void 0,
    shell: void 0
  });
  if (t.type === "prompt") t.getPromptForCommand = async (l, w) => {
    let S = await _Jt(skillName);
    if (S.ok) {
      let u = (await Sp(aA(), w.storageV5)).find(item => item.loadedFrom === "syncedSkills" && item.name === t.name && item.type === "prompt" && item.getPromptForCommand !== t.getPromptForCommand);
      if (u && u.type === "prompt") return t.source = u.source, t.skillRoot = u.skillRoot, t.contentLength = u.contentLength, t.progressMessage = u.progressMessage, t.userInvocable = u.userInvocable, u.getPromptForCommand(l, w);
    }
    let g = S.ok ? "skill not found after download" : S.reason;
    return [{
      type: "text",
      text: `Skill ${skillName} could not be downloaded (${g}). Proceed without it.`
    }];
  };
  return t;
}
function rt(storageV5_4, n) {
  return P0n({
    root: () => n,
    configHome: configHome,
    rootLabel: rootLabel,
    event: "skills_sync_root_refused",
    storageV5: storageV5_4
  });
}
var Rn = I0n("zip fetch failed"),
  _e = rJt("skill archive unusable or landing obstructed");
async function un(e, {
  round: round,
  credentials: credentials,
  storageV5: storageV5_5,
  replacesAttributedCopy: replacesAttributedCopy,
  classifyOccupant: classifyOccupant,
  markTargetDestroyed: markTargetDestroyed
}) {
  let g = round.root,
    R = z(g, e.name),
    u = A(xe(g), yn(g, R)),
    h = A(Iy(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (round.guard.refused()) return Ktt;
    if (!(await kso(e.skillId, h, e.requestedVersion, {
      isBackground: !0,
      credentials: credentials
    }))) return Rn;
    if (!(await round.guard.verify())) return Ktt;
    await X(u, {
      recursive: !0,
      force: !0
    }), await jn(xe(g), {
      recursive: !0
    }), await C0n(h, u, {
      skipEntry: M => M.split(/[\\/]/).some(item => Mz(item))
    });
    let y = u,
      D = await fn(u, {
        withFileTypes: !0
      });
    if (!D.some(item => item.name === "SKILL.md") && D.length === 1 && D[0].isDirectory()) y = A(u, D[0].name);
    try {
      if (!(await mn(A(y, "SKILL.md"))).isFile()) return K("warn", "skills_sync_extracted_zip_unusable"), _e;
    } catch {
      return K("warn", "skills_sync_extracted_zip_unusable"), _e;
    }
    if (await R0n(y)) return K("warn", "skills_sync_extracted_zip_unusable"), _e;
    if (!(await round.guard.verify())) return Ktt;
    if (replacesAttributedCopy) await X(R, {
      recursive: !0,
      force: !0
    });
    try {
      await rn(y, R);
    } catch (error) {
      let H = v(error);
      if (replacesAttributedCopy || !oJt(H)) {
        if (replacesAttributedCopy) markTargetDestroyed();
        return K("warn", "skills_sync_promotion_failed", {
          code: H ?? "unknown"
        }), Ytt(H);
      }
      let T = await classifyOccupant(U(R));
      if (T === "inFlight") return K("info", "skills_sync_target_in_flight_elsewhere"), Qlo;
      if (T === "landed") await X(R, {
        recursive: !0,
        force: !0
      });else if (!(await ge(R, storageV5_5))) return fCt;
      try {
        await rn(y, R);
      } catch (error) {
        markTargetDestroyed();
        let L = v(error);
        return K("warn", "skills_sync_promotion_failed", {
          code: L ?? "unknown"
        }), Ytt(L);
      }
    }
    return Jlo;
  } finally {
    if (await X(h, {
      force: !0
    }).catch(() => {}), !round.guard.refused() && (await YH(g, configHome(), {
      event: "skills_sync_root_refused",
      phase: "sweep",
      rootLabel: rootLabel
    }, {
      checkStagingLeaf: !0,
      storageV5: storageV5_5
    }).catch(() => null)) === "real") await X(u, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var ot = 500;
async function at(e, n) {
  try {
    return await un(e, n);
  } catch {
    return K("warn", "skills_sync_extract_retry"), await Q(ot), un(e, n);
  }
}
async function Be(e, n, r, t) {
  let l = _E();
  if (l.syncPromise) return l.syncPromise;
  return l.syncPromise = ct(e, n, r, t).finally(() => {
    l.syncPromise = null;
  }), l.syncPromise;
}
async function lt(e, n) {
  let r = A(e, rD),
    t,
    l,
    w;
  try {
    l = (await ug(r, cMe)).content, w = J(l);
  } catch {
    return null;
  }
  let S = qn().safeParse(w);
  if (S.success) {
    let {
      lastUpdated: lastUpdated,
      skills: skills_3,
      staleDirs: staleDirs_2,
      pendingClaims: pendingClaims_2,
      ...T
    } = S.data;
    t = {
      ...T,
      lastUpdated: lastUpdated,
      skills: J7(Jn(), skills_3),
      staleDirs: _Ge(staleDirs_2),
      pendingClaims: _Ge(pendingClaims_2)
    };
  } else return null;
  let g = [...t.skills.map(y => ({
      row: y,
      syntheticListName: null
    })), ...["staleDirs", "pendingClaims"].flatMap(y => (t[y] ?? []).map(D => ({
      row: {
        name: y === "pendingClaims" ? u6e(D).name : D
      },
      syntheticListName: y,
      entry: D
    })))],
    R = 0,
    skills_4 = [],
    h = [],
    P = [];
  for (let y of g) {
    let row = y.row;
    if (y.syntheticListName === "pendingClaims" && (await ze(y.entry))) {
      P.push(y.entry);
      continue;
    }
    try {
      let M = f6e(row.name, e);
      if (await qtt(M, G())) {
        K("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await qtt(M, pe())) {
        K("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await ge(M, n)) R++;else if (y.syntheticListName === "staleDirs") h.push(y.entry);else if (y.syntheticListName === "pendingClaims") P.push(y.entry);else skills_4.push(y.row);
    } catch (error) {
      if (error instanceof NHe) {
        if (y.syntheticListName === "staleDirs") h.push(y.entry);else if (y.syntheticListName === "pendingClaims") P.push(y.entry);else skills_4.push(y.row);
        continue;
      }
    }
  }
  if (skills_4.length > 0 || h.length > 0 || P.length > 0) {
    let y = b({
      ...t,
      skills: skills_4,
      staleDirs: h.length > 0 ? h : void 0,
      pendingClaims: P.length > 0 ? P : void 0
    }, null, 2);
    if (y !== l) await Cn(r, y).catch(() => {});
  } else await X(r, {
    force: !0
  }).catch(() => {});
  return R;
}
async function ct(e, storageV5_6, credentials_2, t) {
  let l = Date.now(),
    w = performance.now(),
    S = !1,
    g = !1,
    account_opt_in = !1,
    u = () => {
      let duration_ms = Date.now() - l;
      return {
        account_opt_in: account_opt_in,
        trigger: c(t.trigger),
        ...("tickLateMs" in t && {
          tick_late_ms: t.tickLateMs
        }),
        duration_ms: duration_ms,
        suspended_ms: Math.max(0, Math.round(duration_ms - (performance.now() - w)))
      };
    },
    h = new Map(),
    P = !1,
    y = null,
    D = _E(),
    M = !1,
    H = !1;
  try {
    if (account_opt_in = mjt(), bJt()) account_opt_in = !0;
    if (!ove(e) || !vCt()) {
      K("info", "skills_sync_gate_closed");
      let {
        placeholders: placeholders
      } = _E();
      if (placeholders.size > 0) placeholders.clear(), j();
      p("skills_sync_round", "gate_closed", u());
      return;
    }
    if (Cco()) {
      K("info", "skills_sync_policy_verdict_pending"), p("skills_sync_round", "policy_verdict_pending", u());
      return;
    }
    let bucket_2 = await kL(credentials_2);
    if (bucket_2 === null) {
      K("info", "skills_sync_bucket_unresolved"), p("skills_sync_round", "bucket_unresolved", u());
      return;
    }
    let round_2 = rt(storageV5_6, kn(bucket_2));
    y = round_2;
    let L = round_2.root,
      ie = await nn({
        syncedRoot: G(),
        bucket: bucket_2,
        root: L,
        trigger: t.trigger,
        pinned: fz(e),
        lastGeneration: D.bucketGeneration,
        holdsPlaceholders: D.placeholders.size > 0
      });
    if (!ie.list) {
      if (D.bucketGeneration = ie.generation, ie.reload) {
        let s = await ke(storageV5_6, round_2);
        if (s) {
          let d = new Set();
          for (let k of s.skills) try {
            d.add(U(z(L, k.name)));
          } catch {}
          zwr(d);
        }
        j();
      }
      _("skills_sync_round", {
        ...u(),
        reused: !0,
        reloaded: ie.reload
      });
      return;
    }
    H = !0, K("info", "skills_sync_starting");
    let I,
      skills_5 = [];
    if (fz(e)) {
      let [s, d] = await Promise.all([nTe.of(e).listEntries("skills"), a.CLAUDE_CODE_SYNC_SKILLS ? _kt({
        isBackground: !0,
        credentials: credentials_2
      }) : null]);
      if (!s.success) I = s;else if (skills_5 = s.entries.map(et), d === null) I = {
        success: !0,
        skills: skills_5
      };else if (!d.success) I = d;else I = {
        success: !0,
        skills: $0n(skills_5, d.skills, k => k.skillId, carry)
      };
    } else I = await _kt({
      isBackground: !0,
      credentials: credentials_2
    });
    if (M = !I.success && Oee(I), M) K("warn", "skills_sync_list_refused"), I = {
      success: !0,
      skills: skills_5
    };
    if (!I.success) {
      D.consecutiveFailedRounds++;
      let s = Gsn(I),
        d = {
          ...u(),
          ...s
        };
      if (K("warn", "skills_sync_list_failed", d), i("tengu_skills_sync_list_failed", d), (I.kind === "timeout" || I.kind === "network" || I.kind === "http") && d.suspended_ms > Te) p("skills_sync_round", "suspended", d);else m("skills_sync_round", "list_failed", d);
      return;
    }
    if (D.consecutiveFailedRounds = M ? D.consecutiveFailedRounds + 1 : 0, !(await NG(G(), bucket_2)) && (await sn(L).then(s => s.isDirectory(), () => !1)) && (await X7({
      dir: L,
      trashRoot: pe(),
      configHome: configHome(),
      failureEvent: "skills_sync_trash_move_failed",
      storageV5: storageV5_6
    }).catch(() => !1))) K("info", "skills_sync_unmarked_bucket_quarantined");
    await Mn(storageV5_6, L), await O0n(G(), bucket_2), P = !0;
    let ce = await iJt(L);
    if (ie.shared && ce !== null && D.bucketGeneration !== null && ce.token !== D.bucketGeneration) j();
    await $n(storageV5_6);
    let W = await ke(storageV5_6, round_2),
      {
        toDownload: toDownload,
        toRemove: toRemove,
        carryover: carryover,
        liveDirs: liveDirs,
        carryoverOwningLiveDir: carryoverOwningLiveDir
      } = tt(L, I.skills, W?.skills ?? []),
      Ln = uCt(liveDirs),
      he = async s => {
        let d;
        try {
          d = f6e(s, L);
        } catch (error) {
          if (error instanceof NHe) return !1;
          return !0;
        }
        let k = await Ln(d);
        if (k === "live") return !0;
        if (k === "indeterminate") return !1;
        return ge(d, storageV5_6);
      },
      Re = new Set(Array.from(liveDirs, s => U(s))),
      En = zwr(Re);
    if (Tco(Re) + En > 0) MT(), Oe(), PL.emit();
    let bn = await Promise.all(carryover.map(item => carryoverOwningLiveDir.has(item.skillId) ? Vn(L, item.name, storageV5_6) : null)),
      De = new Set();
    for (let [s, d] of carryover.entries()) {
      let k = bn[s];
      if (k === null) continue;
      if (!k) {
        let item_2 = I.skills.find(item => item.skillId === d.skillId);
        if (item_2) De.add(d.skillId), toDownload.push({
          item: item_2
        });
        continue;
      }
      let N = U(z(L, d.name));
      if (D.placeholders.delete(N)) D.pendingDownloads.get(N)?.resolve({
        ok: !0
      }), D.pendingDownloads.delete(N), LZ(), MT(), g = !0, K("info", "skills_sync_materialized_elsewhere");
    }
    let Tn = carryover.filter(item => !De.has(item.skillId)),
      He = new Map(carryover.filter(item => De.has(item.skillId)).map(item => [item.skillId, item])),
      O = new Set(W?.staleDirs ?? []),
      staleDirs_3 = new Set(),
      pendingClaims_4 = new Set(),
      Me = {
        pid: process.pid,
        procStart: await $c(process.pid)
      },
      ve = [];
    if (W?.pendingClaims) {
      let pendingClaims_3 = W.pendingClaims,
        d = new Set();
      for (let k of pendingClaims_3) if (await ze(k)) d.add(u6e(k).name);else ve.push(k);
      for (let k of ve) {
        let {
          name: name
        } = u6e(k);
        if (d.has(name) || Re.has(name)) continue;
        O.add(name), pendingClaims_4.add(k);
      }
    }
    for (let s of O) if (await he(s)) O.delete(s), staleDirs_3.add(s);
    if (staleDirs_3.size > 0 || pendingClaims_4.size > 0) g = !0;
    let de = D0n(W?.skills ?? [], [...carryover, ...toDownload.flatMap(({
      prev: prev
    }) => prev ?? [])], s => s.skillId, (s, d) => s.backingPluginId === d.backingPluginId && s.updatedAt === updatedAt === (d.updatedAt === updatedAt));
    if (toDownload.length === 0 && toRemove.length === 0) {
      if (g) j();
      if ((staleDirs_3.size > 0 || pendingClaims_4.size > 0 || de.attributionMoved) && W) await Ne({
        lastUpdated: W.lastUpdated,
        skills: de.rows,
        staleDirs: O.size > 0 ? Array.from(O) : void 0,
        pendingClaims: void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
      if (W) {
        let date = new Date();
        await Wn(we(L), date, date).catch(() => {});
      }
      let s = g ? null : ce;
      ln(await mCt(L, "skills", O.size === 0 && !M && !fz(e), s, ye()), s), K("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - l
      });
      let d = {
        ...u(),
        no_changes: !0
      };
      if (M) p("skills_sync_round", "not_entitled", d);else _("skills_sync_round", d);
      return;
    }
    let Ke = 0;
    for (let {
      item: item_3,
      prev: prev_2
    } of toDownload) if (!prev_2) {
      let k = z(L, item_3.name);
      kco(st(U(k), item_3, k)), Ke++, h.set(item_3.skillId, wco(U(z(L, item_3.name))));
    }
    if (Ke > 0) MT(), Oe(), PL.emit();
    let Ye = !0;
    try {
      let pendingClaims_5 = [];
      for (let {
        item: item_4
      } of toDownload) try {
        pendingClaims_5.push(x2n(U(z(L, item_4.name)), Me));
      } catch {}
      if (pendingClaims_5.length > 0) await Ne({
        lastUpdated: W?.lastUpdated ?? 0,
        skills: de.rows,
        staleDirs: O.size > 0 ? Array.from(O) : void 0,
        pendingClaims: pendingClaims_5
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds,
        deferredRows: deferredRows
      }, storageV5_6, round_2);
    } catch (error) {
      if (error instanceof _8) throw error;
      Ye = !1, K("warn", "skills_sync_pending_claims_write_failed");
    }
    if (Fe().resolve(), !Ye) {
      if (m("skills_sync_round", "pending_claims_write_failed", u()), g) j();
      return;
    }
    let ee = [],
      Ge = [],
      deferredRows_2 = [],
      deferred = 0,
      We = 0,
      te = {};
    await Promise.all(toDownload.map(Ms(an, async ({
      item: item_5,
      prev: prev_3
    }) => {
      let k = Rn;
      try {
        k = await at(item_5, {
          round: round_2,
          credentials: credentials_2,
          storageV5: storageV5_6,
          classifyOccupant: N => dt(N, storageV5_6, round_2),
          markTargetDestroyed: () => {
            S = !0;
          },
          replacesAttributedCopy: prev_3 !== void 0 && (await Dn(L, prev_3.name, item_5.name)) || He.has(item_5.skillId)
        });
      } catch {
        k = _e, K("warn", "skills_sync_extract_failed");
      }
      if (k.ok) {
        if (ee.push(item_5), prev_3 && prev_3.name !== item_5.name) {
          if (!(await he(prev_3.name))) O.add(prev_3.name);
        }
        Eco(U(z(L, item_5.name))), LZ(), MT(), _("skills_sync_download");
      } else {
        let N = Zlo(k.cause);
        if (N === null) deferred++, K("info", "skills_sync_landing_deferred");else te[N] = (te[N] ?? 0) + 1, m("skills_sync_download", N);
        let ne = prev_3 ?? He.get(item_5.skillId);
        if (ne && k.cause === "deferred") {
          if (deferredRows_2.push(ne), prev_3 && prev_3.name !== item_5.name) O.add(prev_3.name), We++;
        } else if (ne) Ge.push(ne);else try {
          let fe = z(L, item_5.name);
          if (await sn(fe).then(() => !1, Pn => B(Pn))) pendingClaims_4.add(x2n(U(fe), Me));
        } catch {}
      }
      h.get(item_5.skillId)?.(k.ok ? {
        ok: !0
      } : {
        ok: !1,
        reason: eco(k.cause)
      });
    })));
    let re = [];
    await Promise.all(toRemove.map(Ms(an, async s => {
      if (!(await he(s.name))) re.push(s);
    })));
    let removedSkillIds_2 = new Set(toRemove.map(item => item.skillId));
    for (let s of re) removedSkillIds_2.delete(s.skillId);
    let Ce = ee.length > 0 || S || re.length < toRemove.length || staleDirs_3.size > 0 || pendingClaims_4.size > 0,
      In = Ce || We > 0 || de.attributionMoved;
    if (Ce || g) j();
    if (In) {
      let skills_6 = [...Tn, ...ee, ...Ge, ...re],
        d = new Set();
      for (let k of [...skills_6, ...deferredRows_2]) try {
        d.add(U(z(L, k.name)));
      } catch {}
      for (let k of d) pendingClaims_4.add(x2n(k, Me));
      for (let k of ve) if (d.has(u6e(k).name)) pendingClaims_4.add(k);
      await Ne({
        lastUpdated: Date.now(),
        skills: skills_6,
        staleDirs: O.size > 0 ? Array.from(O) : void 0
      }, {
        staleDirs: staleDirs_3,
        pendingClaims: pendingClaims_4,
        removedSkillIds: removedSkillIds_2,
        deferredRows: deferredRows_2
      }, storageV5_6, round_2);
    }
    let failed = toDownload.length - ee.length - deferred;
    K("info", "skills_sync_complete", {
      downloaded: ee.length,
      removed: toRemove.length,
      duration_ms: Date.now() - l
    });
    let Xe = u();
    i("tengu_skills_sync_success", {
      ...Xe,
      downloaded: ee.length,
      removed: toRemove.length,
      total: I.skills.length
    });
    let Ze = Ce || g ? null : ce;
    ln(await mCt(L, "skills", !M && failed === 0 && deferred === 0 && re.length === 0 && O.size === 0 && !fz(e), Ze, ye()), Ze);
    let be = {
      ...Xe,
      downloaded: ee.length,
      deferred: deferred,
      removed: toRemove.length,
      total: I.skills.length
    };
    if (failed > 0) p("skills_sync_round", "download_failed", {
      ...be,
      failed: failed,
      download_failed: te.download_failed ?? 0,
      extract_failed: te.extract_failed ?? 0,
      root_refused: te.root_refused ?? 0,
      local_failed: te.local_failed ?? 0
    });else if (M) p("skills_sync_round", "not_entitled", be);else _("skills_sync_round", be);
  } catch (error) {
    if (g || S) j();
    if (error instanceof _8 && P) K("warn", "skills_sync_late_root_refusal", {
      reason: error.reason,
      duration_ms: Date.now() - l
    }), p("skills_sync_round", "root_refused", u()), P = !1;else if (error instanceof _8) K("warn", "skills_sync_root_refused_round", {
      reason: error.reason,
      duration_ms: Date.now() - l
    }), p("skills_sync_round", "root_refused", u());else {
      if (!M) D.consecutiveFailedRounds++;
      K("error", "skills_sync_unexpected_error", {
        duration_ms: Date.now() - l
      });
      let F = u();
      i("tengu_skills_sync_error", F), m("skills_sync_round", "unexpected_error", F);
    }
  } finally {
    if (H) en();
    for (let T of h.values()) T({
      ok: !1,
      reason: "skills sync failed"
    });
    if (Fe().resolve(), y === null || y.guard.refused()) P = !1;
    if (P && y !== null) {
      if ((await YH(y.root, configHome(), {
        event: "skills_sync_root_refused",
        phase: "sweep",
        rootLabel: rootLabel
      }, {
        checkStagingLeaf: !0,
        storageV5: storageV5_6
      }).catch(() => null)) === "real") await X(xe(y.root), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
}
async function ze(e) {
  let {
    ownerPid: ownerPid,
    ownerProcStart: ownerProcStart
  } = u6e(e);
  return ownerPid !== void 0 && ownerPid !== process.pid && ua(ownerPid) && (await M_(ownerPid, ownerProcStart));
}
async function dt(e, n, r) {
  let t = await ke(n, r);
  if (!t) return "unattributed";
  for (let l of t.skills) if (await Dn(r.root, l.name, e)) return "landed";
  for (let l of t.pendingClaims ?? []) if (u6e(l).name === e && (await ze(l))) return "inFlight";
  return "unattributed";
}
async function Dn(e, n, r) {
  try {
    let t = z(e, n),
      l = z(e, r);
    return U(t) === U(l) || (await qtt(t, l));
  } catch {
    return !1;
  }
}
function Mn(storageV5_7, root_2) {
  return A0n({
    root: root_2,
    trashRoot: pe(),
    configHome: configHome(),
    events: {
      refused: "skills_sync_root_refused"
    },
    storageV5: storageV5_7
  });
}
export { O4r, gWt, M4r, D4r, L4r, hWt };