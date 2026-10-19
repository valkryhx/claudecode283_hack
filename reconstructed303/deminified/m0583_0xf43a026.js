// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vr } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, K, Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ee, Min } from "B:/~BUN/root/chunk-t63e78w2.js";
import { X2, ujt, Fmn, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { li } from "B:/~BUN/root/chunk-mtfk0qfd.js";
import { Ut } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Vn, _a, ZDo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { MH } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { pmr, vyr, EXt, TXt, Vgs, WLn, oJt, lx, el, Fb } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Ntn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { aM } from "B:/~BUN/root/chunk-k382hx6g.js";
import { tOe } from "B:/~BUN/root/chunk-m1mbrj05.js";
import { ow, S4e, Jls } from "B:/~BUN/root/chunk-khznyweq.js";
import { dbe as capacity_2, cbe as refillMs_2, ube } from "B:/~BUN/root/chunk-q9twqrh6.js";
import { IPn } from "B:/~BUN/root/chunk-21sxe603.js";
import { uO } from "B:/~BUN/root/chunk-bz6z3szz.js";
function abe(e) {
  let {
      wakes: wakes
    } = ee().wakes,
    t = wakes.get(e);
  if (!t) t = {
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
  }, wakes.set(e, t);
  return t;
}
function Kce(e) {
  for (let [n, t] of ee().wakes.wakes) {
    if (e !== void 0 && n !== e) continue;
    if (t.coalesceTimer) clearTimeout(t.coalesceTimer), t.coalesceTimer = null;
    if (t.rescanWanted = !1, t.pendingConfirm = null, t.pendingSeed = null, t.newestKickAt = 0, t.kickSettled = !0, t.lastScanScheduledAt = 0, t.rescanArgs = null, t.idleRescanCancel?.(), t.idleRescanCancel = null, t.idleRescanUnmuted = !1, t.idlePassOwed = null, t.readRetryTimer) clearTimeout(t.readRetryTimer), t.readRetryTimer = null;
    t.readRetryAttempts = 0, t.cancelGeneration++;
  }
}
function eCt() {
  ee().wakes.scanGeneration++;
}
function wxn(e) {
  let {
    slugEpochs: slugEpochs
  } = ee().wakes;
  slugEpochs.set(e, (slugEpochs.get(e) ?? 0) + 1);
}
function J(e) {
  return ee().wakes.slugEpochs.get(e) ?? 0;
}
function T1(e) {
  return ee().wakes.scanGeneration + J(e);
}
function MY(e) {
  return ee().wakes.stopGenerations.get(e) ?? 0;
}
function L(e) {
  let {
    stopGenerations: stopGenerations
  } = ee().wakes;
  stopGenerations.set(e, (stopGenerations.get(e) ?? 0) + 1);
}
function vxn(e, n) {
  let {
    latchChangedAt: latchChangedAt
  } = ee().wakes;
  if (n === void 0) latchChangedAt.set(e, Date.now());else if (Number.isFinite(n)) latchChangedAt.set(e, Math.min(n, Date.now()));else latchChangedAt.delete(e);
}
var A = vxn;
function I7r(e) {
  return ee().wakes.latchChangedAt.get(e);
}
function kxn(e) {
  let {
    wakes: wakes_2
  } = ee();
  A(e), wakes_2.stoppedSlugs.add(e), wakes_2.sweptSlugs.delete(e), wakes_2.orphanedSweptSlugs.delete(e), L(e), wakes_2.pendingResumeDisclosure.delete(e);
}
function Exn(e) {
  let {
    wakes: wakes_3
  } = ee();
  if (wakes_3.stoppedSlugs.has(e)) A(e);
  wakes_3.stoppedSlugs.delete(e), wakes_3.sweptSlugs.delete(e), wakes_3.orphanedSweptSlugs.delete(e);
}
function Oy(e) {
  return ee().wakes.stoppedSlugs.has(e);
}
function Kh(e) {
  let n = ee();
  return n.wakes.stoppedSlugs.has(e) || n.durable.stopLatches.isStopped(e);
}
function Yot(e) {
  let {
    wakes: wakes_4
  } = ee();
  if (!wakes_4.stoppedSlugs.has(e)) A(e), wakes_4.stoppedSlugs.add(e), wakes_4.sweptSlugs.add(e), L(e);else {
    let t = wakes_4.yieldedSlugs.get(e);
    if (t !== void 0) t.wasPaused = !0, L(e);
  }
  wakes_4.humanTurnAtScanGeneration = null, wakes_4.liftedAtScanGeneration.delete(e), wakes_4.orphanedSweptSlugs.delete(e), wakes_4.pendingResumeDisclosure.delete(e);
}
function c_(e) {
  return ee().wakes.sweptSlugs.has(e);
}
function rss() {
  return ee().wakes.sweptSlugs;
}
function oss() {
  let {
    wakes: wakes_5
  } = ee();
  for (let n of wakes_5.sweptSlugs) wakes_5.orphanedSweptSlugs.add(n);
}
function M7r(e, n) {
  let {
      wakes: wakes_6
    } = ee(),
    o = wakes_6.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(n);
    return;
  }
  let wasPaused = wakes_6.sweptSlugs.has(e) && !wakes_6.orphanedSweptSlugs.has(e),
    i = {
      msgIds: new Set([n]),
      wasPaused: wasPaused,
      stopGeneration: -1,
      scanGeneration: wakes_6.scanGeneration,
      announced: !1,
      stoppedElsewhere: !1,
      latchClockBefore: wakes_6.latchChangedAt.get(e)
    };
  wakes_6.yieldedSlugs.set(e, i);
  let humanTurnAtScanGeneration = wakes_6.humanTurnAtScanGeneration;
  Yot(e), wakes_6.humanTurnAtScanGeneration = humanTurnAtScanGeneration, A(e, i.latchClockBefore ?? Number.NaN), i.stopGeneration = MY(e);
}
function sss(e) {
  let n = ee().wakes.yieldedSlugs.get(e);
  if (n !== void 0) n.announced = !0;
}
function iss(e) {
  return ee().wakes.yieldedSlugs.get(e)?.announced === !0;
}
function ass(e, n) {
  let {
      wakes: wakes_7
    } = ee(),
    o = wakes_7.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(n) || o.msgIds.size > 0) return !1;
  if (wakes_7.yieldedSlugs.delete(e), !o.wasPaused && MY(e) === o.stopGeneration && wakes_7.scanGeneration === o.scanGeneration) Exn(e), A(e, o.latchClockBefore ?? Number.NaN);else A(e);
  return !0;
}
function lss(e) {
  ee().wakes.yieldedSlugs.delete(e);
}
function dss(e, n) {
  let t = ee().wakes.yieldedSlugs.get(e);
  if (t === void 0 || !t.msgIds.has(n)) return !1;
  return t.stoppedElsewhere = !0, kxn(e), !0;
}
function css(e) {
  return ee().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === !0;
}
function V$(e) {
  return ee().wakes.yieldedSlugs.has(e);
}
function D7r(e) {
  let {
      wakes: wakes_8
    } = ee(),
    t = wakes_8.yieldedSlugs.get(e);
  return t !== void 0 && !t.wasPaused && MY(e) === t.stopGeneration && wakes_8.scanGeneration === t.scanGeneration;
}
function JRe(e) {
  let {
    wakes: wakes_9
  } = ee();
  return wakes_9.orphanedSweptSlugs.has(e) || wakes_9.yieldedSlugs.has(e);
}
import { randomUUID as te } from "crypto";
var ne = 15000,
  oe = 60000,
  B = 20;
function re(e, n, t, o) {
  return e === "auto-replied" ? EXt(n, t) : e === "auto-edited" ? TXt(n, t) : Vgs(n, t, o);
}
function ie(e) {
  let noticeCoalesce = ee().noticeCoalesce,
    t = noticeCoalesce.get(e);
  if (t === void 0) return;
  if (noticeCoalesce.delete(e), t.timer !== void 0) clearTimeout(t.timer);
  let o = re(t.family, t.artifactName, t.count, t.suppressedPrior > 0),
    r = t.droppedDetails > 0 ? `

(${t.droppedDetails} earlier ${t.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${B} kept.)` : "";
  t.queue.enqueuePendingNotification({
    uuid: t.family === "artifact-changed" ? te() : IPn(void 0, t.ownGestureEpoch === ee().accountEpoch ? t.slug : void 0),
    value: li({
      taskType: t.family === "artifact-changed" ? vyr : "artifact-auto-react",
      summary: Ut(o),
      body: `
${Ut(t.details.join(`

`) + r)}`
    }),
    mode: "task-notification",
    origin: {
      kind: "task-notification",
      source: t.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      slug: t.slug,
      displayName: t.artifactName,
      coalesced: {
        family: t.family,
        count: t.count
      }
    },
    agentId: Ze()
  });
}
function uss(e) {
  let {
      queue: queue,
      slug: slug,
      family: family,
      artifactName: artifactName,
      detail: detail,
      mergeDetails: mergeDetails
    } = e,
    firstAt = (e.now ?? Date.now)(),
    d = e.settle?.settleMs ?? ne,
    a = e.settle?.maxSettleMs ?? oe,
    noticeCoalesce_2 = ee().noticeCoalesce,
    h = `${family}
${slug}`,
    accountEpoch = ee().accountEpoch,
    u = noticeCoalesce_2.get(h);
  if (u === void 0) u = {
    slug: slug,
    family: family,
    artifactName: artifactName,
    mergeDetails: mergeDetails,
    count: 0,
    threadIds: new Set(),
    firstAt: firstAt,
    details: [],
    droppedDetails: 0,
    suppressedPrior: 0,
    ownGestureEpoch: e.ownGesture ? accountEpoch : void 0,
    queue: queue,
    timer: void 0
  }, noticeCoalesce_2.set(h, u);else if (!e.ownGesture || u.ownGestureEpoch !== accountEpoch) u.ownGestureEpoch = void 0;
  if (u.artifactName = artifactName, u.queue = queue, e.threadId !== void 0) u.threadIds.add(e.threadId);
  if (u.count = u.threadIds.size > 0 ? u.threadIds.size : u.count + 1, u.mergeDetails === "latest") u.details = [detail];else if (u.details.push(detail), u.details.length > B) u.details.shift(), u.droppedDetails++;
  if (u.timer !== void 0) clearTimeout(u.timer);
  let x = u.firstAt + a,
    C = Math.max(0, Math.min(d, x - firstAt)),
    _ = setTimeout(ie, C, h);
  _.unref?.(), u.timer = _;
}
function N(e) {
  let noticeCoalesce_3 = ee().noticeCoalesce,
    t = [];
  for (let [o, r] of noticeCoalesce_3) {
    if (e !== void 0 && r.slug !== e) continue;
    if (r.family === "artifact-changed") continue;
    if (r.timer !== void 0) clearTimeout(r.timer);
    noticeCoalesce_3.delete(o), t.push({
      slug: r.slug,
      family: r.family,
      artifactName: r.artifactName,
      count: r.count
    });
  }
  return t;
}
function P(e) {
  for (let n of ee().noticeCoalesce.values()) if (n.slug === e && n.family !== "artifact-changed") return !0;
  return !1;
}
function L7r(e) {
  let {
      autoReact: autoReact,
      live: live
    } = ee(),
    o = live.supervisors.get(e);
  return autoReact.userDisarmed || Kh(e) || autoReact.enabledMemo === !1 || (autoReact.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null || o !== void 0 && !o.stopped && o.armedVia === "mcp_write";
}
function W(e, n, t) {
  if (n(t), !e.summonArmOkReported) e.summonArmOkReported = !0, g("artifact_summon_arm_emit");
}
function se(e, n, t) {
  let o = e.activitySenders.get(n);
  if (o === void 0) return;
  let r = e.summonDeclared.get(n);
  if (t && r !== !0) e.summonDeclared.set(n, !0), W(e, o, "arm:0");else if (!t && r === !0) e.summonDeclared.set(n, !1), W(e, o, "arm");
}
function zV(e, n) {
  se(e, n, L7r(n));
}
function N7r(e) {
  for (let n of e.activitySenders.keys()) zV(e, n);
}
function pss(e, n) {
  e.summonDeclared.delete(n), zV(e, n);
}
function fss(e, n) {
  e.summonDeclared.delete(n);
}
var $dr = 3600000;
var mss = "4001",
  tCt = "4503",
  nCt = "4403",
  Txn = 900000;
var gss = 300000,
  hss = 3;
function yss(e) {
  let {
    transport: transport,
    token: token,
    ver: ver,
    accountEpoch: accountEpoch_2,
    expUnixSeconds: expUnixSeconds,
    receivedAtMs: receivedAtMs
  } = e;
  return {
    transport: transport,
    token: token,
    expMs: G(transport, expUnixSeconds, receivedAtMs),
    ver: ver,
    accountEpoch: accountEpoch_2,
    opened: !1,
    failedDials: 0,
    probed: !1
  };
}
function _ss(e, n) {
  e.token = n.token, e.expMs = G(e.transport, n.expUnixSeconds, n.receivedAtMs), e.probed = !1, e.failedDials = 0;
}
function G(e, n, t) {
  let o = e === "sync" ? 900000 : 3600000,
    r = e === "sync" ? 300000 : 1800000,
    i = n === void 0 ? o : n * 1000 - t;
  return t + Math.min(o, Math.max(r, i));
}
function F7r(e, n) {
  if (n.expired || n.refused) return !1;
  if (n.healthy) return e.failedDials = 0, !0;
  return e.failedDials++, e.failedDials < 3;
}
var ae = 60000,
  ue = 60000;
function H7r(e, n, t, o = Date.now()) {
  let r = e.transport === "sync" ? ue : n.handshakeDeadlineMs + n.minUptimeMs + ae;
  return e.accountEpoch === t && e.expMs - o >= r;
}
function bss(e) {
  let {
    timing: timing,
    consecutiveFailures: consecutiveFailures,
    leaseMode: leaseMode,
    spread: spread,
    stalled: stalled
  } = e;
  if (stalled) return de(timing, e.longStall === !0 ? "long" : "short");
  if (leaseMode && spread) return Math.round(timing.spreadMinMs + Math.random() * (timing.spreadMaxMs - timing.spreadMinMs));
  let s = Math.min(timing.capMs, timing.baseMs * 2 ** Math.min(consecutiveFailures, 5)),
    f = leaseMode ? 0.5 : 0.25;
  return Math.max(0, Math.round(s * (1 - f + Math.random() * 2 * f)));
}
function de(e, n = "short") {
  let t = n === "long" ? e.longStallMinMs : e.stallMinMs,
    o = n === "long" ? e.longStallMaxMs : e.stallMaxMs;
  return Math.round(t + Math.random() * (o - t));
}
function Sss(e) {
  return Math.round(Math.random() * e.seedDeferMaxMs);
}
import { createHmac as ce, randomUUID as le } from "crypto";
var me = 3600000,
  pe = 64,
  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
function ge(e, n, t) {
  return ce("sha256", ZDo(t)).update(e + n, "utf8").digest("hex").slice(0, 16);
}
var Se = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function he(e) {
  let n = Number(e.slice(0, 4)),
    t = Number(e.slice(5, 7)),
    o = Number(e.slice(8, 10)),
    r = Number(e.slice(11, 13)),
    i = Number(e.slice(14, 16)),
    s = Number(e.slice(17, 19));
  if (t < 1 || t > 12 || o < 1 || r > 23 || i > 59 || s > 59) return !1;
  return new Date(Date.UTC(n, t - 1, o)).getUTCDate() === o;
}
function $7r(e) {
  let n,
    t = -1 / 0;
  for (let o of e) {
    if (o == null || !S4e.test(o) || !Se.test(o) || !he(o)) continue;
    let r = ow(o);
    if (r !== null && r > t) t = r, n = o;
  }
  return n;
}
function t6t(e) {
  let {
      handOffs: handOffs
    } = ee().summonStatus,
    t = le();
  if (handOffs.set(t, {
    ...e
  }), handOffs.size > pe) {
    let o = new Set(lx().map(item => item.uuid)),
      r;
    for (let i of handOffs.keys()) if (i !== t && !o.has(i)) {
      r = i;
      break;
    }
    if (r ??= handOffs.keys().next().value, r !== void 0) handOffs.delete(r), p("artifact_comments_autoreact", "handoff_evicted");
  }
  return t;
}
function E(e) {
  let {
    handOffs: handOffs_2
  } = ee().summonStatus;
  for (let t of e) {
    if (t.uuid === void 0) continue;
    let o = handOffs_2.get(t.uuid);
    if (o === void 0) continue;
    handOffs_2.delete(t.uuid);
    let r = Yh(o, {
      status: "declined",
      reason: "auto_reply_off"
    });
    p("artifact_comments_autoreact", r ? "handoff_swept" : "handoff_swept_unreported");
  }
}
function n6t(e) {
  let {
    handOffs: handOffs_3
  } = ee().summonStatus;
  if (handOffs_3.size === 0) return;
  let t = new Set(lx().map(item => item.uuid));
  for (let [o, r] of handOffs_3) if (r.slug === e && !t.has(o)) handOffs_3.delete(o);
}
function Yh(e, n) {
  let {
    slug: slug_2,
    threadId: threadId,
    gestureAt: r,
    suppressed: suppressed
  } = e;
  if (suppressed) return !1;
  let summonStatus = ee().summonStatus;
  if (summonStatus.routeAbsentSince !== null) {
    if (Date.now() - summonStatus.routeAbsentSince < me) return !1;
    summonStatus.routeAbsentSince = null;
  }
  let sid = summonStatus.sidBySlug.get(slug_2);
  if (sid === void 0) sid = ge(K(), slug_2, e.storageV5), summonStatus.sidBySlug.set(slug_2, sid);
  let reason = n.reason,
    seq = Math.max(summonStatus.seqBySid.get(sid) ?? 0, Math.floor(Date.now() / 1000) * 1000);
  if (seq > MAX_SAFE_INTEGER) return !1;
  summonStatus.seqBySid.set(sid, seq + 1);
  let a = e.coversReplyId !== void 0 && !ar.test(e.coversReplyId),
    k = {
      status: n.status,
      ...(reason !== void 0 && {
        reason: reason
      }),
      ...(e.coversReplyId !== void 0 && !a && {
        covers_reply_id: e.coversReplyId
      }),
      ...(r !== void 0 && {
        gesture_at: r
      }),
      sid: sid,
      seq: seq
    };
  return Jls(slug_2, threadId, k).then(h => {
    switch (h.kind) {
      case "accepted":
        if (a) p("artifact_summon_status_emit", "covers_id_rejected");else g("artifact_summon_status_emit");
        return;
      case "route_absent":
        summonStatus.routeAbsentSince = Date.now(), p("artifact_summon_status_emit", "route_absent");
        return;
      case "skipped":
        if (h.reason === "no-auth") p("artifact_summon_status_emit", "no_auth");
        return;
      case "unsent":
        p("artifact_summon_status_emit", "relay_unavailable", {
          status: h.status
        });
        return;
      case "failed":
        m("artifact_summon_status_emit", h.reason, {
          ...(h.status !== void 0 && {
            status: h.status
          })
        });
        return;
    }
  }, () => {
    m("artifact_summon_status_emit", "request_error");
  }), !0;
}
var w8s = 30000;
function Cxn(e) {
  let {
      description: description,
      agentId: agentId,
      taskRef: taskRef
    } = e,
    r = e.now ?? Date.now,
    i = r(),
    eventsQueued = 0,
    f = 0,
    eventsSuppressed = 0,
    suppressionNoticesQueued = 0,
    a,
    k,
    h = !1;
  function y(M) {
    if (h) return;
    h = !0;
    try {
      let v = w => F(lx(), ({
          monitorEvent: monitorEvent
        }) => monitorEvent?.kind === w && monitorEvent.watchId === taskRef.id),
        b = {
          eventsQueued: eventsQueued,
          eventsStillQueued: v("output"),
          eventsSuppressed: eventsSuppressed,
          suppressionNoticesQueued: suppressionNoticesQueued,
          noticesStillQueued: v("notice"),
          elapsedMs: r() - i
        };
      if (e.arm !== void 0) g("monitor_watch_closed", {
        arm: c(e.arm),
        closed_by: c(M),
        events_queued: b.eventsQueued,
        events_still_queued: b.eventsStillQueued,
        events_suppressed: b.eventsSuppressed,
        suppression_notices_queued: b.suppressionNoticesQueued,
        notices_still_queued: b.noticesStillQueued,
        elapsed_ms: b.elapsedMs,
        subagent_owned: agentId !== void 0
      });
      e.onClosed?.(b);
    } catch (error) {
      l(error);
    }
  }
  let {
      capacity: capacity,
      refillMs: refillMs
    } = e.bucket ?? {
      capacity: capacity_2,
      refillMs: refillMs_2
    },
    C = ube(capacity, refillMs, r);
  function _() {
    if (!C.tryConsume()) {
      if (f++, eventsSuppressed++, k = r(), a === void 0) a = r();
      return !1;
    }
    if (f > 0) {
      if (GV(description, be(f), taskRef.id, {
        isHousekeeping: !0,
        agentId: agentId
      }), suppressionNoticesQueued++, f = 0, k !== void 0 && r() - k > refillMs * 3) a = void 0;
    }
    return eventsQueued++, !0;
  }
  let onBatch = M => {
      if (h) return;
      if (_()) {
        GV(description, M, taskRef.id, {
          agentId: agentId
        });
        return;
      }
      if (a !== void 0 && r() - a > w8s) {
        if (y("too_much_output"), e.killTask()) GV(description, `[Monitor stopped \u2014 too much output (${f} events suppressed over ${Math.round((r() - a) / 1000)}s). Restart with a more selective source.]`, taskRef.id, {
          isHousekeeping: !0,
          agentId: agentId
        });
      }
    },
    R = jdr(onBatch, e.schedule);
  function flushAndClose() {
    R.flush(!0), y("flushed");
  }
  return {
    onData: R.onData,
    onBatch: onBatch,
    isClosed: () => h,
    flush: () => R.flush(),
    eventCount: () => eventsQueued,
    flushAndClose: flushAndClose,
    dropAndClose: () => {
      R.drain(), y("dropped");
    },
    reportExit: async (M, v) => {
      let b = h ? void 0 : R.drain();
      y("exited");
      let {
          terminalNotification: terminalNotification
        } = await M.settled,
        T = b !== void 0 && _();
      if (terminalNotification !== void 0) {
        let U = [T ? b : void 0, v].filter(item => item !== void 0).join(`
`);
        Udr(U !== "" ? {
          ...terminalNotification,
          body: j(U)
        } : terminalNotification);
      } else if (T) GV(description, b, taskRef.id, {
        agentId: agentId
      });
    }
  };
}
function be(e) {
  return `[${e} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`;
}
function Udr(e) {
  el(oJt(e), {
    turnAttribution: "inherit"
  });
}
var I = 500,
  Q = 3000,
  ke = 200,
  q = 1048576;
function j(e, n = !1) {
  let t = !n && tOe() ? `
If this event is something the user would act on now, send a ${uO}. Routine or benign output doesn't need one.` : "";
  return `
<${Fmn}>${Ut(e)}</${Fmn}>${t}`;
}
function GV(e, n, watchId, o) {
  el({
    value: li({
      taskId: watchId ? Ut(watchId) : void 0,
      summary: `${ujt}${Ut(e)}"`,
      body: j(n, o?.isHousekeeping)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: o?.agentId ?? Ze(),
    ...(watchId !== void 0 && {
      monitorEvent: {
        watchId: watchId,
        kind: o?.isHousekeeping ? "notice" : "output"
      }
    })
  }, {
    turnAttribution: o?.turnAttribution ?? "inherit"
  });
}
function U7r(e) {
  let {
      taskId: taskId,
      toolUseId: toolUseId,
      description: description_2,
      ownerAgentId: ownerAgentId,
      stopperAgentId: stopperAgentId
    } = e,
    s = `Task "${description_2}" was stopped by ${Ntn(stopperAgentId)}`;
  el({
    value: li({
      taskId: Ut(taskId),
      toolUseId: toolUseId ? Ut(toolUseId) : void 0,
      status: "stopped",
      summary: Ut(s)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: Vr(ownerAgentId),
    taskId: taskId
  });
}
function Bdr(e) {
  let {
    taskId: taskId_2,
    toolUseId: toolUseId_2,
    description: description_3,
    note: note
  } = e;
  el({
    value: li({
      taskId: Ut(taskId_2),
      toolUseId: toolUseId_2 ? Ut(toolUseId_2) : void 0,
      status: "killed",
      summary: Ut(note === void 0 ? `Task "${description_3}" was stopped by the user` : `Task "${description_3}" was stopped by the user. ${note}`)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    passive: !0,
    agentId: Ze(),
    taskId: taskId_2
  });
}
function jdr(e, n = t => {
  let o = setTimeout(t, ke);
  return () => clearTimeout(o);
}) {
  let t = "",
    o = [],
    r = null;
  function i(S) {
    if (r) r(), r = null;
    if (S && t.trim() && !pmr(t.trim())) {
      let a = t.trim();
      if (a.length > I) a = a.slice(0, I) + "...(truncated)";
      o.push(a), t = "";
    }
    if (o.length === 0) return;
    let d = o.join(`
`);
    if (d.length > Q) d = d.slice(0, Q) + `
...(truncated)`;
    return o = [], d;
  }
  function flush(S) {
    let d = i(S === !0);
    if (d !== void 0) e(d);
  }
  function onData(S) {
    if (t += S, t.length > q) t = t.slice(-q);
    let d;
    while ((d = t.indexOf(`
`)) !== -1) {
      let a = t.slice(0, d).trim();
      if (t = t.slice(d + 1), pmr(a)) continue;
      if (a) {
        if (a.length > I) a = a.slice(0, I) + "...(truncated)";
        o.push(a);
      }
    }
    if (o.length > 0 && !r) r = n(flush);
  }
  return {
    onData: onData,
    flush: flush,
    drain: () => i(!0)
  };
}
function Wdr(e, n, t) {
  let o, toolUseId_3, agentId_2;
  if (n.update(e, s => {
    if (s.status !== "running") return s;
    if (o = s.description, toolUseId_3 = s.toolUseId, agentId_2 = s.agentId, s.timeoutId !== void 0) clearTimeout(s.timeoutId);
    return {
      ...s,
      status: t?.endedAs?.status ?? "killed",
      endTime: Date.now(),
      timeoutId: void 0,
      notified: !0,
      terminal: {
        summary: t?.endedAs?.summary ?? s.description
      }
    };
  }), t?.onKilled?.(), aM(agentId_2, `monitor:${e}`, n), o !== void 0) {
    if (!t?.quiet) GV(o, "[Monitor stopped]", e, {
      isHousekeeping: !0,
      agentId: agentId_2
    });
    _a(e, t?.endedAs?.status ?? "stopped", {
      toolUseId: toolUseId_3,
      summary: t?.endedAs?.summary ?? o
    });
  }
}
function H(e, n, t, o) {
  for (let [r, i] of Object.entries(n.all())) if (t(i) && i.agentId === e && i.status === "running") o(r, n);
}
var wss = ["publish", "attach", "watch", "resume", "session_resume", "mcp_write"];
function q$(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function vss(e, n) {
  Vn().monitorSockets.set(e, n);
}
function zdr(e, n) {
  return Vn().monitorSockets.get(e) === n;
}
function Gdr(e, n, t) {
  return q$(e) && e.status === "running" && e.autoReactArmed === !0 && n() && (t?.includeStopLatched === !0 || !(e.autoReactSlug !== void 0 && Kh(e.autoReactSlug)));
}
function Yce(e) {
  return Gdr(e, () => ee().autoReact.enabledMemo === !0);
}
function ye(e) {
  let n = Vn().monitorSockets.get(e);
  return n !== void 0 && n.readyState <= 1;
}
var Y = 300000,
  ve = $dr + Y;
function Xot(e, n = Date.now()) {
  let t = e.frameLive === void 0 ? void 0 : ee().live.supervisors.get(e.frameLive.slug);
  if (!ye(e.id) || t?.transport !== "sync" && n - e.startTime > ve) return !1;
  let o = t?.lease?.expMs;
  return o === void 0 || n <= o + Y;
}
function rCt(e) {
  let n = Vn().monitorSockets.get(e);
  return n !== void 0 && n.readyState === 1;
}
var kss = {
  name: "MonitorWsTask",
  type: "monitor_ws",
  async kill(e, n, t, o) {
    Ob(e, n, (o ?? "user") === "system" ? {} : {
      userStop: !0,
      taskStop: !0,
      modelOrigin: o === "parent"
    });
  }
};
function Ess(e) {
  Vn().frameLiveUserStopObserver = e;
}
function Tss(e) {
  Vn().autoReactHumanTurnObserver = e;
}
function Css(e) {
  Vn().artifactPresenceStopObserver = e;
}
function Rss(e) {
  Vn().artifactRoomStopObserver?.leave(e);
}
function Ass() {
  return Min()?.conns.size ?? 0;
}
function B7r(e) {
  let n = Min(),
    t = Vn().artifactRoomStopObserver?.disposeAll() ?? 0,
    o = n?.consentRevoke?.() ?? 0;
  if (t <= 0 && o <= 0 || n?.consentGone?.() === !0) return t;
  let r = "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.",
    i = {
      agentId: Ze(),
      value: li({
        taskType: X2,
        summary: Ut(t > 0 ? `Left the live ${O(t, "room")} of ${t} ${O(t, "artifact")} (the user stopped background activity)` : `Forgot the live-room ${O(o, "approval")} of ${o} ${O(o, "artifact")} (the user stopped background activity)`),
        body: `
<event>${Ut(t > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${r}` : `No room was open. ${r}`)}</event>`
      }),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "later",
      origin: {
        kind: "task-notification",
        source: X2,
        roomLifecycle: !0
      }
    };
  if (e !== void 0) e.enqueuePendingNotification(i);else el(i);
  return t;
}
function xss(e) {
  Vn().autoReactDeliberateStopObserver = e;
}
function Ob(taskId_3, taskRegistry, t) {
  let o = taskRegistry.all()[taskId_3];
  if (q$(o) && o.autoReactArmed === !0) {
    if (Kce(o.autoReactSlug), o.autoReactSlug !== void 0 && t?.connectionLost !== !0) wxn(o.autoReactSlug);
    if (t?.userStop === !0 && o.autoReactSlug !== void 0 && (o.status === "running" || !c_(o.autoReactSlug))) Rxn(o.autoReactSlug);
  }
  if (t?.userStop === !0 && q$(o) && o.frameLive !== void 0) {
    if (Vn().frameLiveUserStopObserver?.(o.frameLive.slug, {
      running: o.status === "running",
      taskId: taskId_3,
      taskStop: t?.taskStop === !0,
      modelOrigin: t?.modelOrigin === !0,
      taskRegistry: taskRegistry
    }) === !0) if (c_(o.frameLive.slug)) Rxn(o.frameLive.slug);else Vn().autoReactDeliberateStopObserver?.(o.frameLive.slug);
  }
  if (t?.userStop === !0 && q$(o) && o.frameLive === void 0 && o.autoReactArmed !== !0) Vn().liveDocUserStopObserver?.(taskId_3, {
    modelOrigin: t?.modelOrigin === !0,
    running: o.status === "running"
  }), Vn().artifactRoomStopObserver?.leaveByTaskId(taskId_3), Vn().artifactPresenceStopObserver?.closeByTaskId(taskId_3);
  Wdr(taskId_3, taskRegistry, {
    quiet: t?.quiet,
    onKilled() {
      let r = Vn().monitorSockets.get(taskId_3);
      if (r) Vn().monitorSockets.delete(taskId_3), r.close();
    }
  });
}
function Pss(e) {
  Kce(e), wxn(e), Rxn(e);
}
function Rxn(e) {
  kxn(e), Vn().autoReactDeliberateStopObserver?.(e), zV(ee().live, e);
  let n = N(e);
  Vn().artifactRoomStopObserver?.leave(e);
  let t = Fb(o => o.origin?.kind === "task-notification" && o.origin.slug === e && r6t(o));
  if (V(t, n), E(t), t.some(_e) || n.length > 0) MH(e);
  DY(0, n);
}
function Ae(e) {
  return e === "artifact-auto-react" || e === "artifact-room";
}
function V(e, n) {
  for (let t of e) {
    let o = t.origin;
    if (o?.kind === "task-notification" && o.coalesced !== void 0 && o.coalesced.family !== "artifact-changed" && o.slug !== void 0 && o.displayName !== void 0) n.push({
      slug: o.slug,
      family: o.coalesced.family,
      artifactName: o.displayName,
      count: o.coalesced.count
    });
  }
}
function DY(e, n = [], t) {
  if (e <= 0 && n.length === 0) return;
  let o = O(e, "it", "them"),
    r = O(e, "this artifact", "these artifacts"),
    i = O(e, "the watch is kept", "the watches are kept"),
    s = t?.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are answered then)",
    f = t?.catchUp === !1 ? "" : ", and comments sent to Claude in the meantime are answered then",
    S = ", or resume_replies if the user asks",
    d = `publishing without being asked, while handling a notification or a wake-up, leaves ${o} paused`,
    a = `the user can stop ${o} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`,
    k = t?.nameChordGesture === !0 ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${o}${t.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are being answered now)"}, otherwise the user's next message resumes ${o} (so does a publish of ${r} the user asks for${S}; ${d})${f}; ${a}` : `when the user asks you to publish ${r} again, that publish resumes ${o}${S}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${f}; ${d}`;
  el({
    agentId: Ze(),
    value: li({
      taskType: "artifact-auto-react",
      summary: Ut(e > 0 ? `${e} artifact auto-reply ${O(e, "subscription")} paused ${t?.nameChordGesture === !0 ? "until your next message" : "by the interrupt"}${s}` : "Artifact auto-reply activity stopped"),
      body: `
${Ut(n.map(WLn).concat(e > 0 ? [`The user's interrupt paused ${o} and ${i}; ${k}. Do not republish or resume just to re-enable auto-replies unless the user asks.`] : []).join(`

`))}`
    }),
    mode: "task-notification",
    skipAttachments: !0,
    ...(t?.passive === !0 && {
      passive: !0,
      priority: "next"
    }),
    origin: {
      kind: "task-notification",
      source: "artifact-auto-react-stop-disclosure",
      nonDurableStop: !0,
      ...(n.length > 0 && {
        carriesDiscardRecord: !0
      })
    }
  });
}
function _e(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}
function r6t(e) {
  return e.origin?.kind === "task-notification" && Ae(e.origin.source);
}
function lbe(e, n) {
  let t = N();
  for (let r of t) MH(r.slug);
  if (n?.leaveArtifactRooms === !0) B7r(e);
  let o = e.removeByFilter(r6t);
  for (let r of o) if (r.origin?.kind === "task-notification" && r.origin.source === "artifact-auto-react" && r.origin.slug !== void 0) MH(r.origin.slug);
  return V(o, t), E(o), t;
}
function Oss(e = () => !1) {
  let {
    pendingNoticeSlugs: pendingNoticeSlugs
  } = ee().shareStatus;
  if (pendingNoticeSlugs.size === 0) return 0;
  let t = new Set();
  for (let r of lx()) {
    let i = r.origin?.kind === "task-notification" ? r.origin.slug : void 0;
    if (i !== void 0 && r6t(r)) t.add(i);
  }
  let o = 0;
  for (let r of [...pendingNoticeSlugs.keys()]) {
    if (t.has(r) || P(r) || e(r)) continue;
    MH(r), o++;
  }
  return o;
}
function o6t() {
  return {
    disclosures: [],
    staleRows: [],
    watchLifecycle: []
  };
}
function Axn(e) {
  E(e);
  let n = o6t();
  for (let t of e) {
    if (t.origin?.kind !== "task-notification") continue;
    if (t.origin.source === "artifact-auto-react-stop-disclosure") n.disclosures.push(t);else if (t.origin.source === "artifact-changed") n.staleRows.push(t);else if (t.origin.source === X2) n.watchLifecycle.push(t);
  }
  return n;
}
function X(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react-stop-disclosure" && e.origin.nonDurableStop === !0 && e.origin.carriesDiscardRecord !== !0;
}
function Iss(e) {
  if (!ee().autoReact.userDisarmed) return;
  e.removeByFilter(X);
}
function xxn(e, n, t) {
  let userDisarmed = ee().autoReact.userDisarmed;
  for (let r of n.disclosures) {
    let i = r.origin?.kind === "task-notification" && r.origin.carriesDiscardRecord === !0,
      s = userDisarmed && X(r);
    if (i || t === 0 && !s) e.enqueuePendingNotification(r);
  }
  for (let r of n.staleRows) e.enqueuePendingNotification(r);
  for (let r of n.watchLifecycle) e.enqueuePendingNotification(r);
}
function Mss() {
  for (let [e, n] of Vn().monitorSockets) {
    try {
      n.close();
    } catch {}
    Vn().monitorSockets.delete(e);
  }
}
function Dss(e, n) {
  H(e, n, q$, Ob);
}
export { abe, Kce, eCt, wxn, T1, MY, vxn, I7r, kxn, Exn, Oy, Kh, Yot, c_, rss, oss, M7r, sss, iss, ass, lss, dss, css, V$, D7r, JRe, uss, L7r, zV, N7r, pss, fss, $dr, mss, tCt, nCt, Txn, gss, hss, yss, _ss, F7r, H7r, bss, Sss, $7r, t6t, n6t, Yh, w8s, Cxn, Udr, GV, U7r, Bdr, jdr, Wdr, wss, q$, vss, zdr, Gdr, Yce, Xot, rCt, kss, Ess, Tss, Css, Rss, Ass, B7r, xss, Ob, Pss, Rxn, DY, r6t, lbe, Oss, o6t, Axn, Iss, xxn, Mss, Dss };