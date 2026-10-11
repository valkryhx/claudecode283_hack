// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { go } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ee, aDt } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { M$ } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Gk } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { er, Si, vFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { xhr, nAt, sF, oa, fS } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Bn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { _R } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Pge } from "B:/~BUN/root/chunk-p6ejqvds.js";
import { f0 } from "B:/~BUN/root/chunk-faawr4jv.js";
import { cS, x0e, nao } from "B:/~BUN/root/chunk-dty6td52.js";
import { Spe, Goe, wpe } from "B:/~BUN/root/chunk-kfsc6egp.js";
import { aI } from "B:/~BUN/root/chunk-rcvs5252.js";
import { qi } from "B:/~BUN/root/chunk-vr3kcvgy.js";
function joe(e) {
  let {
      wakes: wakes
    } = ee().wakes,
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
function f7(e) {
  for (let [t, n] of ee().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) clearTimeout(n.coalesceTimer), n.coalesceTimer = null;
    if (n.rescanWanted = !1, n.pendingConfirm = null, n.pendingSeed = null, n.newestKickAt = 0, n.kickSettled = !0, n.lastScanScheduledAt = 0, n.rescanArgs = null, n.idleRescanCancel?.(), n.idleRescanCancel = null, n.idleRescanUnmuted = !1, n.idlePassOwed = null, n.readRetryTimer) clearTimeout(n.readRetryTimer), n.readRetryTimer = null;
    n.readRetryAttempts = 0, n.cancelGeneration++;
  }
}
function yZe() {
  ee().wakes.scanGeneration++;
}
function h6t(e) {
  let {
    slugEpochs: slugEpochs
  } = ee().wakes;
  slugEpochs.set(e, (slugEpochs.get(e) ?? 0) + 1);
}
function P(e) {
  return ee().wakes.slugEpochs.get(e) ?? 0;
}
function WH(e) {
  return ee().wakes.scanGeneration + P(e);
}
function eW(e) {
  return ee().wakes.stopGenerations.get(e) ?? 0;
}
function v(e) {
  let {
    stopGenerations: stopGenerations
  } = ee().wakes;
  stopGenerations.set(e, (stopGenerations.get(e) ?? 0) + 1);
}
function y6t(e, t) {
  let {
    latchChangedAt: latchChangedAt
  } = ee().wakes;
  if (t === void 0) latchChangedAt.set(e, Date.now());else if (Number.isFinite(t)) latchChangedAt.set(e, Math.min(t, Date.now()));else latchChangedAt.delete(e);
}
var h = y6t;
function Wlr(e) {
  return ee().wakes.latchChangedAt.get(e);
}
function _6t(e) {
  let {
    wakes: wakes_2
  } = ee();
  h(e), wakes_2.stoppedSlugs.add(e), wakes_2.sweptSlugs.delete(e), wakes_2.orphanedSweptSlugs.delete(e), v(e), wakes_2.pendingResumeDisclosure.delete(e);
}
function b6t(e) {
  let {
    wakes: wakes_3
  } = ee();
  if (wakes_3.stoppedSlugs.has(e)) h(e);
  wakes_3.stoppedSlugs.delete(e), wakes_3.sweptSlugs.delete(e), wakes_3.orphanedSweptSlugs.delete(e);
}
function Zm(e) {
  return ee().wakes.stoppedSlugs.has(e);
}
function eg(e) {
  let t = ee();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function Cze(e) {
  let {
    wakes: wakes_4
  } = ee();
  if (!wakes_4.stoppedSlugs.has(e)) h(e), wakes_4.stoppedSlugs.add(e), wakes_4.sweptSlugs.add(e), v(e);else {
    let n = wakes_4.yieldedSlugs.get(e);
    if (n !== void 0) n.wasPaused = !0, v(e);
  }
  wakes_4.humanTurnAtScanGeneration = null, wakes_4.liftedAtScanGeneration.delete(e), wakes_4.orphanedSweptSlugs.delete(e), wakes_4.pendingResumeDisclosure.delete(e);
}
function bg(e) {
  return ee().wakes.sweptSlugs.has(e);
}
function dro() {
  return ee().wakes.sweptSlugs;
}
function uro() {
  let {
    wakes: wakes_5
  } = ee();
  for (let t of wakes_5.sweptSlugs) wakes_5.orphanedSweptSlugs.add(t);
}
function zlr(e, t) {
  let {
      wakes: wakes_6
    } = ee(),
    o = wakes_6.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let wasPaused = wakes_6.sweptSlugs.has(e) && !wakes_6.orphanedSweptSlugs.has(e),
    i = {
      msgIds: new Set([t]),
      wasPaused: wasPaused,
      stopGeneration: -1,
      scanGeneration: wakes_6.scanGeneration,
      announced: !1,
      stoppedElsewhere: !1,
      latchClockBefore: wakes_6.latchChangedAt.get(e)
    };
  wakes_6.yieldedSlugs.set(e, i);
  let humanTurnAtScanGeneration = wakes_6.humanTurnAtScanGeneration;
  Cze(e), wakes_6.humanTurnAtScanGeneration = humanTurnAtScanGeneration, h(e, i.latchClockBefore ?? Number.NaN), i.stopGeneration = eW(e);
}
function pro(e) {
  let t = ee().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = !0;
}
function fro(e) {
  return ee().wakes.yieldedSlugs.get(e)?.announced === !0;
}
function mro(e, t) {
  let {
      wakes: wakes_7
    } = ee(),
    o = wakes_7.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return !1;
  if (wakes_7.yieldedSlugs.delete(e), !o.wasPaused && eW(e) === o.stopGeneration && wakes_7.scanGeneration === o.scanGeneration) b6t(e), h(e, o.latchClockBefore ?? Number.NaN);else h(e);
  return !0;
}
function gro(e) {
  ee().wakes.yieldedSlugs.delete(e);
}
function hro(e, t) {
  let n = ee().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return !1;
  return n.stoppedElsewhere = !0, _6t(e), !0;
}
function yro(e) {
  return ee().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === !0;
}
function hM(e) {
  return ee().wakes.yieldedSlugs.has(e);
}
function Glr(e) {
  let {
      wakes: wakes_8
    } = ee(),
    n = wakes_8.yieldedSlugs.get(e);
  return n !== void 0 && !n.wasPaused && eW(e) === n.stopGeneration && wakes_8.scanGeneration === n.scanGeneration;
}
function bpe(e) {
  let {
    wakes: wakes_9
  } = ee();
  return wakes_9.orphanedSweptSlugs.has(e) || wakes_9.yieldedSlugs.has(e);
}
function S6t(e, t = 1) {
  return t === 1 ? `Auto-replied to comment thread on Artifact: ${e}` : `Auto-replied to ${t} comment threads on Artifact: ${e}`;
}
function w6t(e, t = 1) {
  return t === 1 ? `Auto-edited Artifact: ${e} in response to a comment thread` : `Auto-edited Artifact: ${e} in response to ${t} comment threads`;
}
function Rze(e) {
  return `Auto-edit on Artifact: ${e} needs review`;
}
function _ro(e) {
  return `Auto-replies on Artifact: ${e} are paused`;
}
function bro(e) {
  return `Auto-replies on Artifact: ${e} were re-enabled by this publish`;
}
function WRn(e) {
  return `Auto-replies on Artifact: ${e} were resumed`;
}
function M(e, t = 1, n = !1) {
  return t === 1 && !n ? `Artifact changed: ${e}` : `Artifact changed ${t}${n ? "+" : ""} times: ${e}`;
}
function v6t(e) {
  return `Comments are waiting on Artifact: ${e}`;
}
function Sro(e) {
  return `Claude needs your permission to reply to comments on ${e}`;
}
function wro(e) {
  return `Reply on ${e} not posted \u2014 Claude has your note`;
}
function vro(e) {
  return `Auto-edited Artifact: ${e} \u2014 review the change`;
}
function zRn(e) {
  let t = `${e.count} comment ${e.count === 1 ? "thread" : "threads"}`;
  return `Before the stop, ${e.family === "auto-edited" ? `Artifact: ${e.artifactName} had already been auto-edited in response to ${t}` : `automatic replies had already been posted on ${t} of Artifact: ${e.artifactName}`} (the pending notice was discarded with the stop \u2014 the artifact's thread and version history carry the record).`;
}
function kro(e, t) {
  return `Stopped watching Artifact: ${e} (${t})`;
}
function Ero(e, t) {
  return `Not watching Artifact: ${e} (${t})`;
}
import { randomUUID as G } from "crypto";
var q = 15000,
  Q = 60000,
  x = 20;
function j(e, t, n, o) {
  return e === "auto-replied" ? S6t(t, n) : e === "auto-edited" ? w6t(t, n) : M(t, n, o);
}
function H(e) {
  let noticeCoalesce = ee().noticeCoalesce,
    n = noticeCoalesce.get(e);
  if (n === void 0) return;
  if (noticeCoalesce.delete(e), n.timer !== void 0) clearTimeout(n.timer);
  let o = j(n.family, n.artifactName, n.count, n.suppressedPrior > 0),
    r = n.droppedDetails > 0 ? `

(${n.droppedDetails} earlier ${n.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${x} kept.)` : "";
  n.queue.enqueuePendingNotification({
    uuid: G(),
    value: qi({
      taskType: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      summary: qt(o),
      body: `
${qt(n.details.join(`

`) + r)}`
    }),
    mode: "task-notification",
    origin: {
      kind: "task-notification",
      source: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      slug: n.slug,
      displayName: n.artifactName,
      coalesced: {
        family: n.family,
        count: n.count
      }
    },
    agentId: qe()
  });
}
function Tro(e) {
  let {
      queue: queue,
      slug: slug,
      family: family,
      artifactName: artifactName,
      detail: detail,
      mergeDetails: mergeDetails
    } = e,
    firstAt = (e.now ?? Date.now)(),
    a = e.settle?.settleMs ?? q,
    c = e.settle?.maxSettleMs ?? Q,
    noticeCoalesce_2 = ee().noticeCoalesce,
    f = `${family}
${slug}`,
    d = noticeCoalesce_2.get(f);
  if (d === void 0) d = {
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
    queue: queue,
    timer: void 0
  }, noticeCoalesce_2.set(f, d);
  if (d.artifactName = artifactName, d.queue = queue, e.threadId !== void 0) d.threadIds.add(e.threadId);
  if (d.count = d.threadIds.size > 0 ? d.threadIds.size : d.count + 1, d.mergeDetails === "latest") d.details = [detail];else if (d.details.push(detail), d.details.length > x) d.details.shift(), d.droppedDetails++;
  if (d.timer !== void 0) clearTimeout(d.timer);
  let y = d.firstAt + c,
    k = Math.max(0, Math.min(a, y - firstAt)),
    S = setTimeout(H, k, f);
  S.unref?.(), d.timer = S;
}
function R(e) {
  let noticeCoalesce_3 = ee().noticeCoalesce,
    n = [];
  for (let [o, r] of noticeCoalesce_3) {
    if (e !== void 0 && r.slug !== e) continue;
    if (r.family === "artifact-changed") continue;
    if (r.timer !== void 0) clearTimeout(r.timer);
    noticeCoalesce_3.delete(o), n.push({
      slug: r.slug,
      family: r.family,
      artifactName: r.artifactName,
      count: r.count
    });
  }
  return n;
}
function T(e) {
  for (let t of ee().noticeCoalesce.values()) if (t.slug === e && t.family !== "artifact-changed") return !0;
  return !1;
}
function Vlr(e) {
  let {
      autoReact: autoReact,
      live: live
    } = ee(),
    o = live.supervisors.get(e);
  return autoReact.userDisarmed || eg(e) || autoReact.enabledMemo === !1 || (autoReact.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null || o !== void 0 && !o.stopped && o.armedVia === "mcp_write";
}
function C(e, t, n) {
  if (t(n), !e.summonArmOkReported) e.summonArmOkReported = !0, _("artifact_summon_arm_emit");
}
function K(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== !0) e.summonDeclared.set(t, !0), C(e, o, "arm:0");else if (!n && r === !0) e.summonDeclared.set(t, !1), C(e, o, "arm");
}
function CU(e, t) {
  K(e, t, Vlr(t));
}
function qlr(e) {
  for (let t of e.activitySenders.keys()) CU(e, t);
}
function Cro(e, t) {
  e.summonDeclared.delete(t), CU(e, t);
}
function Rro(e, t) {
  e.summonDeclared.delete(t);
}
var GRn = 3600000;
var Aro = "4001",
  _Ze = "4503",
  bZe = "4403",
  k6t = 900000;
var xro = 300000,
  Pro = 3;
function Iro(e) {
  let {
    transport: transport,
    token: token,
    ver: ver,
    accountEpoch: accountEpoch,
    expUnixSeconds: expUnixSeconds,
    receivedAtMs: receivedAtMs
  } = e;
  return {
    transport: transport,
    token: token,
    expMs: E(transport, expUnixSeconds, receivedAtMs),
    ver: ver,
    accountEpoch: accountEpoch,
    opened: !1,
    failedDials: 0,
    probed: !1
  };
}
function Oro(e, t) {
  e.token = t.token, e.expMs = E(e.transport, t.expUnixSeconds, t.receivedAtMs), e.probed = !1, e.failedDials = 0;
}
function E(e, t, n) {
  let o = e === "sync" ? 900000 : 3600000,
    r = e === "sync" ? 300000 : 1800000,
    i = t === void 0 ? o : t * 1000 - n;
  return n + Math.min(o, Math.max(r, i));
}
function Klr(e, t) {
  if (t.expired || t.refused) return !1;
  if (t.healthy) return e.failedDials = 0, !0;
  return e.failedDials++, e.failedDials < 3;
}
var V = 60000,
  X = 60000;
function Ylr(e, t, n, o = Date.now()) {
  let r = e.transport === "sync" ? X : t.handshakeDeadlineMs + t.minUptimeMs + V;
  return e.accountEpoch === n && e.expMs - o >= r;
}
function Mro(e) {
  let {
    timing: timing,
    consecutiveFailures: consecutiveFailures,
    leaseMode: leaseMode,
    spread: spread,
    stalled: stalled
  } = e;
  if (stalled) return z(timing, e.longStall === !0 ? "long" : "short");
  if (leaseMode && spread) return Math.round(timing.spreadMinMs + Math.random() * (timing.spreadMaxMs - timing.spreadMinMs));
  let s = Math.min(timing.capMs, timing.baseMs * 2 ** Math.min(consecutiveFailures, 5)),
    u = leaseMode ? 0.5 : 0.25;
  return Math.max(0, Math.round(s * (1 - u + Math.random() * 2 * u)));
}
function z(e, t = "short") {
  let n = t === "long" ? e.longStallMinMs : e.stallMinMs,
    o = t === "long" ? e.longStallMaxMs : e.stallMaxMs;
  return Math.round(n + Math.random() * (o - n));
}
function Dro(e) {
  return Math.round(Math.random() * e.seedDeferMaxMs);
}
function Woe(e) {
  if (e.agentId) return e.agentId;
  let t = Gk();
  return t ? go(t.agentId) : void 0;
}
function Tvt(e, t) {
  if (e === void 0) return !0;
  return e === t;
}
function E6t(e) {
  return e ?? "main session";
}
var Z = 30000;
function qRn(e) {
  let {
      description: description,
      agentId: agentId,
      taskRef: taskRef
    } = e,
    r = e.now ?? Date.now,
    i = 0,
    s = 0,
    u,
    l,
    a = !1,
    c = wpe(Spe, Goe, r);
  function g() {
    if (!c.tryConsume()) {
      if (s++, l = r(), u === void 0) u = r();
      return !1;
    }
    if (s > 0) {
      if (tW(description, `[${s} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`, taskRef.id, {
        isHousekeeping: !0,
        agentId: agentId
      }), s = 0, l !== void 0 && r() - l > Goe * 3) u = void 0;
    }
    return i++, !0;
  }
  let f = Qlr(y => {
    if (a) return;
    if (g()) {
      tW(description, y, taskRef.id, {
        agentId: agentId
      });
      return;
    }
    if (u !== void 0 && r() - u > Z) {
      if (a = !0, e.killTask()) tW(description, `[Monitor stopped \u2014 too much output (${s} events suppressed over ${Math.round((r() - u) / 1000)}s). Restart with a more selective source.]`, taskRef.id, {
        isHousekeeping: !0,
        agentId: agentId
      });
    }
  }, e.schedule);
  function flushAndClose() {
    f.flush(!0), a = !0;
  }
  return {
    onData: f.onData,
    isClosed: () => a,
    flush: () => f.flush(),
    eventCount: () => i,
    flushAndClose: flushAndClose,
    reportExit: async y => {
      let k = a ? void 0 : f.drain();
      a = !0;
      let {
          terminalNotification: terminalNotification
        } = await y.settled,
        w = k !== void 0 && g();
      if (terminalNotification !== void 0) Jlr(w ? {
        ...terminalNotification,
        body: N(k)
      } : terminalNotification);else if (w) tW(description, k, taskRef.id, {
        agentId: agentId
      });
    }
  };
}
function Jlr(e) {
  oa(nAt(e), {
    turnAttribution: "inherit"
  });
}
var b = 500,
  L = 3000,
  J = 200,
  D = 1048576;
function N(e, t = !1) {
  let n = !t && Pge() ? `
If this event is something the user would act on now, send a ${aI}. Routine or benign output doesn't need one.` : "";
  return `
<event>${qt(e)}</event>${n}`;
}
function tW(e, t, n, o) {
  oa({
    value: qi({
      taskId: n ? qt(n) : void 0,
      summary: `Monitor event: "${qt(e)}"`,
      body: N(t, o?.isHousekeeping)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: o?.agentId ?? qe()
  }, {
    turnAttribution: o?.turnAttribution ?? "inherit"
  });
}
function Lro(e) {
  let {
      taskId: taskId,
      toolUseId: toolUseId,
      description: description_2,
      ownerAgentId: ownerAgentId,
      stopperAgentId: stopperAgentId
    } = e,
    s = `Task "${description_2}" was stopped by ${E6t(stopperAgentId)}`;
  oa({
    value: qi({
      taskId: qt(taskId),
      toolUseId: toolUseId ? qt(toolUseId) : void 0,
      status: "stopped",
      summary: qt(s)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: go(ownerAgentId),
    taskId: taskId
  });
}
function Nro(e) {
  let {
    taskId: taskId_2,
    toolUseId: toolUseId_2,
    description: description_3
  } = e;
  oa({
    value: qi({
      taskId: qt(taskId_2),
      toolUseId: toolUseId_2 ? qt(toolUseId_2) : void 0,
      status: "killed",
      summary: qt(`Task "${description_3}" was stopped by the user`)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    passive: !0,
    agentId: qe(),
    taskId: taskId_2
  });
}
function Qlr(e, t = n => {
  let o = setTimeout(n, J);
  return () => clearTimeout(o);
}) {
  let n = "",
    o = [],
    r = null;
  function i(l) {
    if (r) r(), r = null;
    if (l && n.trim() && !xhr(n.trim())) {
      let c = n.trim();
      if (c.length > b) c = c.slice(0, b) + "...(truncated)";
      o.push(c), n = "";
    }
    if (o.length === 0) return;
    let a = o.join(`
`);
    if (a.length > L) a = a.slice(0, L) + `
...(truncated)`;
    return o = [], a;
  }
  function flush(l) {
    let a = i(l === !0);
    if (a !== void 0) e(a);
  }
  function onData(l) {
    if (n += l, n.length > D) n = n.slice(-D);
    let a;
    while ((a = n.indexOf(`
`)) !== -1) {
      let c = n.slice(0, a).trim();
      if (n = n.slice(a + 1), xhr(c)) continue;
      if (c) {
        if (c.length > b) c = c.slice(0, b) + "...(truncated)";
        o.push(c);
      }
    }
    if (o.length > 0 && !r) r = t(flush);
  }
  return {
    onData: onData,
    flush: flush,
    drain: () => i(!0)
  };
}
import { createHmac as te, randomUUID as ne } from "crypto";
var oe = 3600000,
  re = 64,
  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
function se(e, t, n) {
  return te("sha256", vFr(n)).update(e + t, "utf8").digest("hex").slice(0, 16);
}
var ae = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function ue(e) {
  let t = Number(e.slice(0, 4)),
    n = Number(e.slice(5, 7)),
    o = Number(e.slice(8, 10)),
    r = Number(e.slice(11, 13)),
    i = Number(e.slice(14, 16)),
    s = Number(e.slice(17, 19));
  if (n < 1 || n > 12 || o < 1 || r > 23 || i > 59 || s > 59) return !1;
  return new Date(Date.UTC(t, n - 1, o)).getUTCDate() === o;
}
function Xlr(e) {
  let t,
    n = -1 / 0;
  for (let o of e) {
    if (o == null || !x0e.test(o) || !ae.test(o) || !ue(o)) continue;
    let r = cS(o);
    if (r !== null && r > n) n = r, t = o;
  }
  return t;
}
function VRn(e) {
  let {
      handOffs: handOffs
    } = ee().summonStatus,
    n = ne();
  if (handOffs.set(n, {
    ...e
  }), handOffs.size > re) {
    let o = new Set(sF().map(item => item.uuid)),
      r;
    for (let i of handOffs.keys()) if (i !== n && !o.has(i)) {
      r = i;
      break;
    }
    if (r ??= handOffs.keys().next().value, r !== void 0) handOffs.delete(r), p("artifact_comments_autoreact", "handoff_evicted");
  }
  return n;
}
function A(e) {
  let {
    handOffs: handOffs_2
  } = ee().summonStatus;
  for (let n of e) {
    if (n.uuid === void 0) continue;
    let o = handOffs_2.get(n.uuid);
    if (o === void 0) continue;
    handOffs_2.delete(n.uuid);
    let r = Sg(o, {
      status: "declined",
      reason: "auto_reply_off"
    });
    p("artifact_comments_autoreact", r ? "handoff_swept" : "handoff_swept_unreported");
  }
}
function Evt(e) {
  let {
    handOffs: handOffs_3
  } = ee().summonStatus;
  if (handOffs_3.size === 0) return;
  let n = new Set(sF().map(item => item.uuid));
  for (let [o, r] of handOffs_3) if (r.slug === e && !n.has(o)) handOffs_3.delete(o);
}
function Sg(e, t) {
  let {
    slug: slug_2,
    threadId: threadId,
    gestureAt: r,
    suppressed: suppressed
  } = e;
  if (suppressed) return !1;
  let summonStatus = ee().summonStatus;
  if (summonStatus.routeAbsentSince !== null) {
    if (Date.now() - summonStatus.routeAbsentSince < oe) return !1;
    summonStatus.routeAbsentSince = null;
  }
  let sid = summonStatus.sidBySlug.get(slug_2);
  if (sid === void 0) sid = se(Y(), slug_2, e.storageV5), summonStatus.sidBySlug.set(slug_2, sid);
  let reason = t.reason,
    seq = Math.max(summonStatus.seqBySid.get(sid) ?? 0, Math.floor(Date.now() / 1000) * 1000);
  if (seq > MAX_SAFE_INTEGER) return !1;
  summonStatus.seqBySid.set(sid, seq + 1);
  let c = e.coversReplyId !== void 0 && !Bn.test(e.coversReplyId),
    g = {
      status: t.status,
      ...(reason !== void 0 && {
        reason: reason
      }),
      ...(e.coversReplyId !== void 0 && !c && {
        covers_reply_id: e.coversReplyId
      }),
      ...(r !== void 0 && {
        gesture_at: r
      }),
      sid: sid,
      seq: seq
    };
  return nao(slug_2, threadId, g).then(f => {
    switch (f.kind) {
      case "accepted":
        if (c) p("artifact_summon_status_emit", "covers_id_rejected");else _("artifact_summon_status_emit");
        return;
      case "route_absent":
        summonStatus.routeAbsentSince = Date.now(), p("artifact_summon_status_emit", "route_absent");
        return;
      case "skipped":
        if (f.reason === "no-auth") p("artifact_summon_status_emit", "no_auth");
        return;
      case "unsent":
        p("artifact_summon_status_emit", "relay_unavailable", {
          status: f.status
        });
        return;
      case "failed":
        m("artifact_summon_status_emit", f.reason, {
          ...(f.status !== void 0 && {
            status: f.status
          })
        });
        return;
    }
  }, () => {
    m("artifact_summon_status_emit", "request_error");
  }), !0;
}
function F(e, t, n) {
  let summary, toolUseId_3, agentId_2;
  if (t.update(e, s => {
    if (s.status !== "running") return s;
    if (summary = s.description, toolUseId_3 = s.toolUseId, agentId_2 = s.agentId, s.timeoutId !== void 0) clearTimeout(s.timeoutId);
    return {
      ...s,
      status: "killed",
      endTime: Date.now(),
      timeoutId: void 0,
      notified: !0,
      terminal: {
        summary: s.description
      }
    };
  }), n?.onKilled?.(), _R(agentId_2, `monitor:${e}`, t), summary !== void 0) {
    if (!n?.quiet) tW(summary, "[Monitor stopped]", e, {
      isHousekeeping: !0,
      agentId: agentId_2
    });
    Si(e, "stopped", {
      toolUseId: toolUseId_3,
      summary: summary
    });
  }
}
function O(e, t, n, o) {
  for (let [r, i] of Object.entries(t.all())) if (n(i) && i.agentId === e && i.status === "running") o(r, t);
}
var Hro = ["publish", "attach", "watch", "resume", "session_resume", "mcp_write"];
function yM(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function Fro(e, t) {
  er().monitorSockets.set(e, t);
}
function KRn(e, t) {
  return er().monitorSockets.get(e) === t;
}
function YRn(e, t, n) {
  return yM(e) && e.status === "running" && e.autoReactArmed === !0 && t() && (n?.includeStopLatched === !0 || !(e.autoReactSlug !== void 0 && eg(e.autoReactSlug)));
}
function m7(e) {
  return YRn(e, () => ee().autoReact.enabledMemo === !0);
}
function de(e) {
  let t = er().monitorSockets.get(e);
  return t !== void 0 && t.readyState <= 1;
}
var U = 300000,
  ce = GRn + U;
function Aze(e, t = Date.now()) {
  if (!de(e.id) || t - e.startTime > ce) return !1;
  let n = e.frameLive === void 0 ? void 0 : ee().live.supervisors.get(e.frameLive.slug)?.lease?.expMs;
  return n === void 0 || t <= n + U;
}
function SZe(e) {
  let t = er().monitorSockets.get(e);
  return t !== void 0 && t.readyState === 1;
}
var $ro = {
  name: "MonitorWsTask",
  type: "monitor_ws",
  async kill(e, t, n, o) {
    Sh(e, t, (o ?? "user") === "system" ? {} : {
      userStop: !0,
      taskStop: !0,
      modelOrigin: o === "parent"
    });
  }
};
function Uro(e) {
  er().frameLiveUserStopObserver = e;
}
function Bro(e) {
  er().autoReactHumanTurnObserver = e;
}
function jro(e) {
  er().artifactPresenceStopObserver = e;
}
function Wro(e) {
  er().artifactRoomStopObserver?.leave(e);
}
function zro() {
  return aDt()?.conns.size ?? 0;
}
function Zlr(e) {
  let t = aDt(),
    n = er().artifactRoomStopObserver?.disposeAll() ?? 0,
    o = t?.consentRevoke?.() ?? 0;
  if (n <= 0 && o <= 0 || t?.consentGone?.() === !0) return n;
  let r = "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.",
    i = {
      agentId: qe(),
      value: qi({
        taskType: M$,
        summary: qt(n > 0 ? `Left the live ${I(n, "room")} of ${n} ${I(n, "artifact")} (the user stopped background activity)` : `Forgot the live-room ${I(o, "approval")} of ${o} ${I(o, "artifact")} (the user stopped background activity)`),
        body: `
<event>${qt(n > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${r}` : `No room was open. ${r}`)}</event>`
      }),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "later",
      origin: {
        kind: "task-notification",
        source: M$,
        roomLifecycle: !0
      }
    };
  if (e !== void 0) e.enqueuePendingNotification(i);else oa(i);
  return n;
}
function Gro(e) {
  er().autoReactDeliberateStopObserver = e;
}
function Sh(taskId_3, taskRegistry, n) {
  let o = taskRegistry.all()[taskId_3];
  if (yM(o) && o.autoReactArmed === !0) {
    if (f7(o.autoReactSlug), o.autoReactSlug !== void 0 && n?.connectionLost !== !0) h6t(o.autoReactSlug);
    if (n?.userStop === !0 && o.autoReactSlug !== void 0 && (o.status === "running" || !bg(o.autoReactSlug))) T6t(o.autoReactSlug);
  }
  if (n?.userStop === !0 && yM(o) && o.frameLive !== void 0) {
    if (er().frameLiveUserStopObserver?.(o.frameLive.slug, {
      running: o.status === "running",
      taskId: taskId_3,
      taskStop: n?.taskStop === !0,
      modelOrigin: n?.modelOrigin === !0,
      taskRegistry: taskRegistry
    }) === !0) if (bg(o.frameLive.slug)) T6t(o.frameLive.slug);else er().autoReactDeliberateStopObserver?.(o.frameLive.slug);
  }
  if (n?.userStop === !0 && yM(o) && o.frameLive === void 0 && o.autoReactArmed !== !0) er().liveDocUserStopObserver?.(taskId_3, {
    modelOrigin: n?.modelOrigin === !0,
    running: o.status === "running"
  }), er().artifactRoomStopObserver?.leaveByTaskId(taskId_3), er().artifactPresenceStopObserver?.closeByTaskId(taskId_3);
  F(taskId_3, taskRegistry, {
    quiet: n?.quiet,
    onKilled() {
      let r = er().monitorSockets.get(taskId_3);
      if (r) er().monitorSockets.delete(taskId_3), r.close();
    }
  });
}
function Vro(e) {
  f7(e), h6t(e), T6t(e);
}
function T6t(e) {
  _6t(e), er().autoReactDeliberateStopObserver?.(e), CU(ee().live, e);
  let t = R(e);
  er().artifactRoomStopObserver?.leave(e);
  let n = fS(o => o.origin?.kind === "task-notification" && o.origin.slug === e && Cvt(o));
  if (W(n, t), A(n), n.some(me) || t.length > 0) f0(e);
  nW(0, t);
}
function le(e) {
  return e === "artifact-auto-react" || e === "artifact-room";
}
function W(e, t) {
  for (let n of e) {
    let o = n.origin;
    if (o?.kind === "task-notification" && o.coalesced !== void 0 && o.coalesced.family !== "artifact-changed" && o.slug !== void 0 && o.displayName !== void 0) t.push({
      slug: o.slug,
      family: o.coalesced.family,
      artifactName: o.displayName,
      count: o.coalesced.count
    });
  }
}
function nW(e, t = [], n) {
  if (e <= 0 && t.length === 0) return;
  let o = I(e, "it", "them"),
    r = I(e, "this artifact", "these artifacts"),
    i = I(e, "the watch is kept", "the watches are kept"),
    s = n?.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are answered then)",
    u = n?.catchUp === !1 ? "" : ", and comments sent to Claude in the meantime are answered then",
    l = ", or resume_replies if the user asks",
    a = `publishing without being asked, while handling a notification or a wake-up, leaves ${o} paused`,
    c = `the user can stop ${o} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`,
    g = n?.nameChordGesture === !0 ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${o}${n.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are being answered now)"}, otherwise the user's next message resumes ${o} (so does a publish of ${r} the user asks for${l}; ${a})${u}; ${c}` : `when the user asks you to publish ${r} again, that publish resumes ${o}${l}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${u}; ${a}`;
  oa({
    agentId: qe(),
    value: qi({
      taskType: "artifact-auto-react",
      summary: qt(e > 0 ? `${e} artifact auto-reply ${I(e, "subscription")} paused ${n?.nameChordGesture === !0 ? "until your next message" : "by the interrupt"}${s}` : "Artifact auto-reply activity stopped"),
      body: `
${qt(t.map(zRn).concat(e > 0 ? [`The user's interrupt paused ${o} and ${i}; ${g}. Do not republish or resume just to re-enable auto-replies unless the user asks.`] : []).join(`

`))}`
    }),
    mode: "task-notification",
    skipAttachments: !0,
    ...(n?.passive === !0 && {
      passive: !0,
      priority: "next"
    }),
    origin: {
      kind: "task-notification",
      source: "artifact-auto-react-stop-disclosure",
      nonDurableStop: !0,
      ...(t.length > 0 && {
        carriesDiscardRecord: !0
      })
    }
  });
}
function me(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}
function Cvt(e) {
  return e.origin?.kind === "task-notification" && le(e.origin.source);
}
function zoe(e, t) {
  let n = R();
  for (let r of n) f0(r.slug);
  if (t?.leaveArtifactRooms === !0) Zlr(e);
  let o = e.removeByFilter(Cvt);
  for (let r of o) if (r.origin?.kind === "task-notification" && r.origin.source === "artifact-auto-react" && r.origin.slug !== void 0) f0(r.origin.slug);
  return W(o, n), A(o), n;
}
function qro(e = () => !1) {
  let {
    pendingNoticeSlugs: pendingNoticeSlugs
  } = ee().shareStatus;
  if (pendingNoticeSlugs.size === 0) return 0;
  let n = new Set();
  for (let r of sF()) {
    let i = r.origin?.kind === "task-notification" ? r.origin.slug : void 0;
    if (i !== void 0 && Cvt(r)) n.add(i);
  }
  let o = 0;
  for (let r of [...pendingNoticeSlugs.keys()]) {
    if (n.has(r) || T(r) || e(r)) continue;
    f0(r), o++;
  }
  return o;
}
function Rvt() {
  return {
    disclosures: [],
    staleRows: [],
    watchLifecycle: []
  };
}
function C6t(e) {
  A(e);
  let t = Rvt();
  for (let n of e) {
    if (n.origin?.kind !== "task-notification") continue;
    if (n.origin.source === "artifact-auto-react-stop-disclosure") t.disclosures.push(n);else if (n.origin.source === "artifact-changed") t.staleRows.push(n);else if (n.origin.source === M$) t.watchLifecycle.push(n);
  }
  return t;
}
function B(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react-stop-disclosure" && e.origin.nonDurableStop === !0 && e.origin.carriesDiscardRecord !== !0;
}
function Kro(e) {
  if (!ee().autoReact.userDisarmed) return;
  e.removeByFilter(B);
}
function R6t(e, t, n) {
  let userDisarmed = ee().autoReact.userDisarmed;
  for (let r of t.disclosures) {
    let i = r.origin?.kind === "task-notification" && r.origin.carriesDiscardRecord === !0,
      s = userDisarmed && B(r);
    if (i || n === 0 && !s) e.enqueuePendingNotification(r);
  }
  for (let r of t.staleRows) e.enqueuePendingNotification(r);
  for (let r of t.watchLifecycle) e.enqueuePendingNotification(r);
}
function Yro() {
  for (let [e, t] of er().monitorSockets) {
    try {
      t.close();
    } catch {}
    er().monitorSockets.delete(e);
  }
}
function Xro(e, t) {
  O(e, t, yM, Sh);
}
export { joe, f7, yZe, h6t, WH, eW, y6t, Wlr, _6t, b6t, Zm, eg, Cze, bg, dro, uro, zlr, pro, fro, mro, gro, hro, yro, hM, Glr, bpe, S6t, w6t, Rze, _ro, bro, WRn, v6t, Sro, wro, vro, zRn, kro, Ero, Tro, Vlr, CU, qlr, Cro, Rro, GRn, Aro, _Ze, bZe, k6t, xro, Pro, Iro, Oro, Klr, Ylr, Mro, Dro, Xlr, VRn, Evt, Sg, Woe, Tvt, E6t, qRn, Jlr, tW, Lro, Nro, Qlr, Hro, yM, Fro, KRn, YRn, m7, Aze, SZe, $ro, Uro, Bro, jro, Wro, zro, Zlr, Gro, Sh, Vro, T6t, nW, Cvt, zoe, qro, Rvt, C6t, Kro, R6t, Yro, Xro };