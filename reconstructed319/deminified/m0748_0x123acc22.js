// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
function UOe(e) {
  let {
      wakes: wakes
    } = te().wakes,
    n = wakes.get(e);
  if (!n) n = {
    coalesceTimer: null,
    rescanWanted: !1,
    lastScanScheduledAt: 0,
    rescanArgs: null,
    newestKickAt: 0,
    kickSettled: !0,
    kickCount: 0,
    pendingConfirm: null,
    pendingSeed: null,
    lastWakeArgs: null,
    inFlightScan: null,
    idleRescanCancel: null,
    idleRescanUnmuted: !1,
    idlePassOwed: null,
    cancelGeneration: 0,
    readRetryTimer: null,
    readRetryAttempts: 0
  }, wakes.set(e, n);
  return n;
}
function zhe(e) {
  for (let [t, n] of te().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) clearTimeout(n.coalesceTimer), n.coalesceTimer = null;
    if (n.rescanWanted = !1, n.pendingConfirm = null, n.pendingSeed = null, n.newestKickAt = 0, n.kickSettled = !0, n.lastScanScheduledAt = 0, n.rescanArgs = null, n.idleRescanCancel?.(), n.idleRescanCancel = null, n.idleRescanUnmuted = !1, n.idlePassOwed = null, n.readRetryTimer) clearTimeout(n.readRetryTimer), n.readRetryTimer = null;
    n.readRetryAttempts = 0, n.cancelGeneration++;
  }
}
function sqt() {
  te().wakes.scanGeneration++;
}
function Ybn(e) {
  let {
    slugEpochs: slugEpochs
  } = te().wakes;
  slugEpochs.set(e, (slugEpochs.get(e) ?? 0) + 1);
}
function c(e) {
  return te().wakes.slugEpochs.get(e) ?? 0;
}
function OK(e) {
  return te().wakes.scanGeneration + c(e);
}
function lQ(e) {
  return te().wakes.stopGenerations.get(e) ?? 0;
}
function i(e) {
  let {
    stopGenerations: stopGenerations
  } = te().wakes;
  stopGenerations.set(e, (stopGenerations.get(e) ?? 0) + 1);
}
function ner(e, t) {
  let {
    latchChangedAt: latchChangedAt
  } = te().wakes;
  if (t === void 0) latchChangedAt.set(e, Date.now());else if (Number.isFinite(t)) latchChangedAt.set(e, Math.min(t, Date.now()));else latchChangedAt.delete(e);
}
var a = ner;
function e4o(e) {
  return te().wakes.latchChangedAt.get(e);
}
function Xbn(e) {
  let {
    wakes: wakes_2
  } = te();
  a(e), wakes_2.stoppedSlugs.add(e), wakes_2.sweptSlugs.delete(e), wakes_2.orphanedSweptSlugs.delete(e), i(e), wakes_2.pendingResumeDisclosure.delete(e);
}
function rer(e) {
  let {
    wakes: wakes_3
  } = te();
  if (wakes_3.stoppedSlugs.has(e)) a(e);
  wakes_3.stoppedSlugs.delete(e), wakes_3.sweptSlugs.delete(e), wakes_3.orphanedSweptSlugs.delete(e);
}
function mb(e) {
  return te().wakes.stoppedSlugs.has(e);
}
function hb(e) {
  let t = te();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function ACt(e) {
  let {
    wakes: wakes_4
  } = te();
  if (!wakes_4.stoppedSlugs.has(e)) a(e), wakes_4.stoppedSlugs.add(e), wakes_4.sweptSlugs.add(e), i(e);else {
    let n = wakes_4.yieldedSlugs.get(e);
    if (n !== void 0) n.wasPaused = !0, i(e);
  }
  wakes_4.humanTurnAtScanGeneration = null, wakes_4.liftedAtScanGeneration.delete(e), wakes_4.orphanedSweptSlugs.delete(e), wakes_4.pendingResumeDisclosure.delete(e);
}
function CS(e) {
  return te().wakes.sweptSlugs.has(e);
}
function pai() {
  return te().wakes.sweptSlugs;
}
function mai() {
  let {
    wakes: wakes_5
  } = te();
  for (let t of wakes_5.sweptSlugs) wakes_5.orphanedSweptSlugs.add(t);
}
function t4o(e, t) {
  let {
      wakes: wakes_6
    } = te(),
    o = wakes_6.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let wasPaused = wakes_6.sweptSlugs.has(e) && !wakes_6.orphanedSweptSlugs.has(e),
    s = {
      msgIds: new Set([t]),
      wasPaused: wasPaused,
      stopGeneration: -1,
      scanGeneration: wakes_6.scanGeneration,
      announced: !1,
      stoppedElsewhere: !1,
      latchClockBefore: wakes_6.latchChangedAt.get(e)
    };
  wakes_6.yieldedSlugs.set(e, s);
  let humanTurnAtScanGeneration = wakes_6.humanTurnAtScanGeneration;
  ACt(e), wakes_6.humanTurnAtScanGeneration = humanTurnAtScanGeneration, a(e, s.latchClockBefore ?? Number.NaN), s.stopGeneration = lQ(e);
}
function hai(e) {
  let t = te().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = !0;
}
function gai(e) {
  return te().wakes.yieldedSlugs.get(e)?.announced === !0;
}
function yai(e, t) {
  let {
      wakes: wakes_7
    } = te(),
    o = wakes_7.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return !1;
  if (wakes_7.yieldedSlugs.delete(e), !o.wasPaused && lQ(e) === o.stopGeneration && wakes_7.scanGeneration === o.scanGeneration) rer(e), a(e, o.latchClockBefore ?? Number.NaN);else a(e);
  return !0;
}
function _ai(e) {
  te().wakes.yieldedSlugs.delete(e);
}
function bai(e, t) {
  let n = te().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return !1;
  return n.stoppedElsewhere = !0, Xbn(e), !0;
}
function Sai(e) {
  return te().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === !0;
}
function VG(e) {
  return te().wakes.yieldedSlugs.has(e);
}
function n4o(e) {
  let {
      wakes: wakes_8
    } = te(),
    n = wakes_8.yieldedSlugs.get(e);
  return n !== void 0 && !n.wasPaused && lQ(e) === n.stopGeneration && wakes_8.scanGeneration === n.scanGeneration;
}
function vBe(e) {
  let {
    wakes: wakes_9
  } = te();
  return wakes_9.orphanedSweptSlugs.has(e) || wakes_9.yieldedSlugs.has(e);
}
function r4o(e) {
  let {
      autoReact: autoReact,
      live: live,
      builtInArtifactHiddenForMcp: builtInArtifactHiddenForMcp
    } = te(),
    r = live.supervisors.get(e);
  return autoReact.userDisarmed || hb(e) || autoReact.wakeEnabledMemo === !1 || (builtInArtifactHiddenForMcp ? r !== void 0 && !r.stopped && r.autoReactWiring === void 0 || autoReact.artifacts.get(e)?.ruleWithheldNoted === !0 : (autoReact.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null) || r !== void 0 && !r.stopped && r.armedVia === "mcp_write";
}
function u(e, t, n) {
  if (t(n), !e.summonArmOkReported) e.summonArmOkReported = !0, g("artifact_summon_arm_emit");
}
function l(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== !0) e.summonDeclared.set(t, !0), u(e, o, "arm:0");else if (!n && r === !0) e.summonDeclared.set(t, !1), u(e, o, "arm");
}
function a$(e, t) {
  l(e, t, r4o(t));
}
function xCt(e) {
  for (let t of e.activitySenders.keys()) a$(e, t);
}
function wai(e, t) {
  e.summonDeclared.delete(t), a$(e, t);
}
function kai(e, t) {
  e.summonDeclared.delete(t);
}
export { UOe, zhe, sqt, Ybn, OK, lQ, ner, e4o, Xbn, rer, mb, hb, ACt, CS, pai, mai, t4o, hai, gai, yai, _ai, bai, Sai, VG, n4o, vBe, r4o, a$, xCt, wai, kai };