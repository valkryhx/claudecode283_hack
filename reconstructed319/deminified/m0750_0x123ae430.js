// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { z, st } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { te, CNn } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { A5, ccn, vVn, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { zi } from "B:/~BUN/root/chunk-5bb21frh.js";
import { Xt } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Hn, za, R$t, mMs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { j2 } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Sre, KK, Geo, mRn, hRn, HSi, Jcr, A8e, YRn, aA, ll, Oy } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ldo } from "B:/~BUN/root/chunk-x9bz04wf.js";
import { zh, JOn } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { dA } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { aze } from "B:/~BUN/root/chunk-j3efez3c.js";
import { _v, hlt, qfi } from "B:/~BUN/root/chunk-eahns82c.js";
import { FOe as capacity_2, HOe as refillMs_2, $Oe } from "B:/~BUN/root/chunk-eqb5w0h9.js";
import { zhe, Ybn, Xbn, hb, CS, a$ } from "B:/~BUN/root/chunk-dq64svjd.js";
import { Irr } from "B:/~BUN/root/chunk-dmmmg90e.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { TL } from "B:/~BUN/root/chunk-p3n5gp58.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { randomUUID as Z } from "crypto";
var J = 15000,
  ee = 60000,
  O = 20;
function oe(e, n, t, o) {
  return e === "auto-replied" ? mRn(n, t) : e === "auto-edited" ? hRn(n, t) : HSi(n, t, o);
}
function ne(e) {
  let noticeCoalesce = te().noticeCoalesce,
    t = noticeCoalesce.get(e);
  if (t === void 0) return;
  if (noticeCoalesce.delete(e), t.timer !== void 0) clearTimeout(t.timer);
  let o = oe(t.family, t.artifactName, t.count, t.suppressedPrior > 0),
    i = t.droppedDetails > 0 ? `

(${t.droppedDetails} earlier ${t.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${O} kept.)` : "";
  t.queue.enqueuePendingNotification({
    uuid: t.family === "artifact-changed" ? Z() : Irr(void 0, t.ownGestureEpoch === te().accountEpoch ? t.slug : void 0),
    value: zi({
      taskType: t.family === "artifact-changed" ? Geo : "artifact-auto-react",
      summary: Xt(o),
      body: `
${Xt(t.details.join(`

`) + i)}`
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
    agentId: st()
  });
}
function Gii(e) {
  let {
      queue: queue,
      slug: slug,
      family: family,
      artifactName: artifactName,
      detail: detail,
      mergeDetails: mergeDetails
    } = e,
    firstAt = (e.now ?? Date.now)(),
    p = e.settle?.settleMs ?? J,
    d = e.settle?.maxSettleMs ?? ee,
    noticeCoalesce_2 = te().noticeCoalesce,
    S = `${family}
${slug}`,
    accountEpoch = te().accountEpoch,
    l = noticeCoalesce_2.get(S);
  if (l === void 0) l = {
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
  }, noticeCoalesce_2.set(S, l);else if (!e.ownGesture || l.ownGestureEpoch !== accountEpoch) l.ownGestureEpoch = void 0;
  if (l.artifactName = artifactName, l.queue = queue, e.threadId !== void 0) l.threadIds.add(e.threadId);
  if (l.count = l.threadIds.size > 0 ? l.threadIds.size : l.count + 1, l.mergeDetails === "latest") l.details = [detail];else if (l.details.push(detail), l.details.length > O) l.details.shift(), l.droppedDetails++;
  if (l.timer !== void 0) clearTimeout(l.timer);
  let E = l.firstAt + d,
    N = Math.max(0, Math.min(p, E - firstAt)),
    k = setTimeout(ne, N, S);
  k.unref?.(), l.timer = k;
}
function L(e) {
  let noticeCoalesce_3 = te().noticeCoalesce,
    t = [];
  for (let [o, i] of noticeCoalesce_3) {
    if (e !== void 0 && i.slug !== e) continue;
    if (i.family === "artifact-changed") continue;
    if (i.timer !== void 0) clearTimeout(i.timer);
    noticeCoalesce_3.delete(o), t.push({
      slug: i.slug,
      family: i.family,
      artifactName: i.artifactName,
      count: i.count
    });
  }
  return t;
}
function B(e) {
  for (let n of te().noticeCoalesce.values()) if (n.slug === e && n.family !== "artifact-changed") return !0;
  return !1;
}
var UYr = 3600000;
var Vii = "4001",
  tqt = "4503",
  nqt = "4403",
  XZn = 900000;
var Kii = 300000,
  qii = 3;
function Yii(e) {
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
    expMs: W(transport, expUnixSeconds, receivedAtMs),
    ver: ver,
    accountEpoch: accountEpoch_2,
    opened: !1,
    failedDials: 0,
    probed: !1
  };
}
function Xii(e, n) {
  e.token = n.token, e.expMs = W(e.transport, n.expUnixSeconds, n.receivedAtMs), e.probed = !1, e.failedDials = 0;
}
function W(e, n, t) {
  let o = e === "sync" ? 900000 : 3600000,
    i = e === "sync" ? 300000 : 1800000,
    r = n === void 0 ? o : n * 1000 - t;
  return t + Math.min(o, Math.max(i, r));
}
function Yqo(e, n) {
  if (n.expired || n.refused) return !1;
  if (n.healthy) return e.failedDials = 0, !0;
  return e.failedDials++, e.failedDials < 3;
}
var ie = 60000,
  re = 60000;
function Xqo(e, n, t, o = Date.now()) {
  let i = e.transport === "sync" ? re : n.handshakeDeadlineMs + n.minUptimeMs + ie;
  return e.accountEpoch === t && e.expMs - o >= i;
}
function Jii(e) {
  let {
    timing: timing,
    consecutiveFailures: consecutiveFailures,
    leaseMode: leaseMode,
    spread: spread,
    stalled: stalled
  } = e;
  if (stalled) return se(timing, e.longStall === !0 ? "long" : "short");
  if (leaseMode && spread) return Math.round(timing.spreadMinMs + Math.random() * (timing.spreadMaxMs - timing.spreadMinMs));
  let s = Math.min(timing.capMs, timing.baseMs * 2 ** Math.min(consecutiveFailures, 5)),
    u = leaseMode ? 0.5 : 0.25;
  return Math.max(0, Math.round(s * (1 - u + Math.random() * 2 * u)));
}
function se(e, n = "short") {
  let t = n === "long" ? e.longStallMinMs : e.stallMinMs,
    o = n === "long" ? e.longStallMaxMs : e.stallMaxMs;
  return Math.round(t + Math.random() * (o - t));
}
function Qii(e) {
  return Math.round(Math.random() * e.seedDeferMaxMs);
}
import { createHmac as ae, randomUUID as ue } from "crypto";
var de = 3600000,
  ce = 64,
  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
function me(e, n, t) {
  return ae("sha256", mMs(t)).update(e + n, "utf8").digest("hex").slice(0, 16);
}
var fe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function pe(e) {
  let n = Number(e.slice(0, 4)),
    t = Number(e.slice(5, 7)),
    o = Number(e.slice(8, 10)),
    i = Number(e.slice(11, 13)),
    r = Number(e.slice(14, 16)),
    s = Number(e.slice(17, 19));
  if (t < 1 || t > 12 || o < 1 || i > 23 || r > 59 || s > 59) return !1;
  return new Date(Date.UTC(n, t - 1, o)).getUTCDate() === o;
}
function Jqo(e) {
  let n,
    t = -1 / 0;
  for (let o of e) {
    if (o == null || !hlt.test(o) || !fe.test(o) || !pe(o)) continue;
    let i = _v(o);
    if (i !== null && i > t) t = i, n = o;
  }
  return n;
}
function rqt(e) {
  let {
      handOffs: handOffs
    } = te().summonStatus,
    t = ue();
  if (handOffs.set(t, {
    ...e
  }), handOffs.size > ce) {
    let o = new Set(aA().map(item => item.uuid)),
      i;
    for (let r of handOffs.keys()) if (r !== t && !o.has(r)) {
      i = r;
      break;
    }
    if (i ??= handOffs.keys().next().value, i !== void 0) handOffs.delete(i), c("artifact_comments_autoreact", "handoff_evicted");
  }
  return t;
}
function x(e) {
  let {
    handOffs: handOffs_2
  } = te().summonStatus;
  for (let t of e) {
    if (t.uuid === void 0) continue;
    let o = handOffs_2.get(t.uuid);
    if (o === void 0) continue;
    handOffs_2.delete(t.uuid);
    let i = s_(o, {
      status: "declined",
      reason: "auto_reply_off"
    });
    c("artifact_comments_autoreact", i ? "handoff_swept" : "handoff_swept_unreported");
  }
}
function Nit(e) {
  let {
    handOffs: handOffs_3
  } = te().summonStatus;
  if (handOffs_3.size === 0) return;
  let t = new Set(aA().map(item => item.uuid));
  for (let [o, i] of handOffs_3) if (i.slug === e && !t.has(o)) handOffs_3.delete(o);
}
function Vbn(e, n) {
  let {
    queuedWakes: queuedWakes
  } = te().summonStatus;
  for (let [o, i] of queuedWakes) if (i.slug === e && i.threadId === n) queuedWakes.delete(o);
}
function s_(e, n) {
  let {
    slug: slug_2,
    threadId: threadId,
    gestureAt: i,
    suppressed: suppressed
  } = e;
  if (suppressed) return !1;
  let summonStatus = te().summonStatus;
  if (summonStatus.routeAbsentSince !== null) {
    if (Date.now() - summonStatus.routeAbsentSince < de) return !1;
    summonStatus.routeAbsentSince = null;
  }
  let sid = summonStatus.sidBySlug.get(slug_2);
  if (sid === void 0) sid = me(z(), slug_2, e.storageV5), summonStatus.sidBySlug.set(slug_2, sid);
  let reason = n.reason,
    seq = Math.max(summonStatus.seqBySid.get(sid) ?? 0, Math.floor(Date.now() / 1000) * 1000);
  if (seq > MAX_SAFE_INTEGER) return !1;
  summonStatus.seqBySid.set(sid, seq + 1);
  let d = e.coversReplyId !== void 0 && !hr.test(e.coversReplyId),
    y = {
      status: n.status,
      ...(reason !== void 0 && {
        reason: reason
      }),
      ...(e.coversReplyId !== void 0 && !d && {
        covers_reply_id: e.coversReplyId
      }),
      ...(i !== void 0 && {
        gesture_at: i
      }),
      sid: sid,
      seq: seq
    };
  return qfi(slug_2, threadId, y).then(S => {
    switch (S.kind) {
      case "accepted":
        if (d) c("artifact_summon_status_emit", "covers_id_rejected");else g("artifact_summon_status_emit");
        return;
      case "route_absent":
        summonStatus.routeAbsentSince = Date.now(), c("artifact_summon_status_emit", "route_absent");
        return;
      case "skipped":
        if (S.reason === "no-auth") c("artifact_summon_status_emit", "no_auth");
        return;
      case "unsent":
        c("artifact_summon_status_emit", "relay_unavailable", {
          status: S.status
        });
        return;
      case "failed":
        m("artifact_summon_status_emit", S.reason, {
          ...(S.status !== void 0 && {
            status: S.status
          })
        });
        return;
    }
  }, () => {
    m("artifact_summon_status_emit", "request_error");
  }), !0;
}
var Uia = 30000;
function JZn(e) {
  let {
      description: description,
      agentId: agentId,
      taskRef: taskRef
    } = e,
    i = e.now ?? Date.now,
    r = i(),
    eventsQueued = 0,
    u = 0,
    eventsSuppressed = 0,
    suppressionNoticesQueued = 0,
    d,
    y,
    S = !1;
  function v(A) {
    if (S) return;
    S = !0;
    try {
      let _ = T => U(aA(), ({
          monitorEvent: monitorEvent
        }) => monitorEvent?.kind === T && monitorEvent.watchId === taskRef.id),
        b = {
          eventsQueued: eventsQueued,
          eventsStillQueued: _("output"),
          eventsSuppressed: eventsSuppressed,
          suppressionNoticesQueued: suppressionNoticesQueued,
          noticesStillQueued: _("notice"),
          elapsedMs: i() - r
        };
      if (e.arm !== void 0) g("monitor_watch_closed", {
        arm: f(e.arm),
        closed_by: f(A),
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
      a(error);
    }
  }
  let {
      capacity: capacity,
      refillMs: refillMs
    } = e.bucket ?? {
      capacity: capacity_2,
      refillMs: refillMs_2
    },
    N = $Oe(capacity, refillMs, i);
  function k() {
    if (!N.tryConsume()) {
      if (u++, eventsSuppressed++, y = i(), d === void 0) d = i();
      return !1;
    }
    if (u > 0) {
      if (GY(description, ge(u), taskRef.id, {
        isHousekeeping: !0,
        agentId: agentId
      }), suppressionNoticesQueued++, u = 0, y !== void 0 && i() - y > refillMs * 3) d = void 0;
    }
    return eventsQueued++, !0;
  }
  let onBatch = A => {
      if (S) return;
      if (k()) {
        GY(description, A, taskRef.id, {
          agentId: agentId
        });
        return;
      }
      if (d !== void 0 && i() - d > Uia) {
        if (v("too_much_output"), e.killTask()) GY(description, `[Monitor stopped \u2014 too much output (${u} events suppressed over ${Math.round((i() - d) / 1000)}s). Restart with a more selective source.]`, taskRef.id, {
          isHousekeeping: !0,
          agentId: agentId
        });
      }
    },
    M = WYr(onBatch, e.schedule);
  function flushAndClose() {
    M.flush(!0), v("flushed");
  }
  return {
    onData: M.onData,
    onBatch: onBatch,
    isClosed: () => S,
    flush: () => M.flush(),
    eventCount: () => eventsQueued,
    flushAndClose: flushAndClose,
    dropAndClose: () => {
      M.drain(), v("dropped");
    },
    reportExit: async (A, _) => {
      let b = S ? void 0 : M.drain();
      v("exited");
      let {
          terminalNotification: terminalNotification
        } = await A.settled,
        R = b !== void 0 && k();
      if (terminalNotification !== void 0) {
        let F = [R ? b : void 0, _].filter(item => item !== void 0).join(`
`);
        BYr(F !== "" ? {
          ...terminalNotification,
          body: H(F)
        } : terminalNotification);
      } else if (R) GY(description, b, taskRef.id, {
        agentId: agentId
      });
    }
  };
}
function ge(e) {
  return `[${e} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`;
}
function BYr(e) {
  ll(YRn(e), {
    turnAttribution: "inherit"
  });
}
var I = 500,
  Q = 3000,
  Se = 200,
  q = 1048576;
function H(e, n = !1) {
  let t = !n && aze() ? `
If this event is something the user would act on now, send a ${TL}. Routine or benign output doesn't need one.` : "";
  return `
<${vVn}>${Xt(e)}</${vVn}>${t}`;
}
var ye = /^\[(?:Monitor (?:stopped|timed out|expired)|WebSocket (?:closed|error|upgrade rejected): |Dropped \d+-byte frame )/,
  C = he(new Set(), e => e.clear()),
  w = he(new Map(), e => e.clear());
function QZn(e, n, t) {
  let o = R$t(n);
  if (o === void 0) return;
  for (let i of w.keys()) {
    let r = t.get(i)?.status;
    if (r !== void 0 && Ko(r)) w.delete(i);
  }
  w.set(e, o);
}
function GY(e, n, watchId, o) {
  let i = (o?.agentId ?? st()) === st(),
    r = o?.keptFor ?? (i && watchId !== void 0 ? w.get(watchId) : void 0);
  if (r !== void 0 && Sre()) {
    if (zh(() => A8e(r)), o?.isHousekeeping && ye.test(n) && watchId !== void 0 && !C.has(watchId)) {
      let u = () => {
          C.delete(watchId);
        },
        h = () => {
          if (Sre()) {
            KK(h, void 0, u);
            return;
          }
          C.delete(watchId), GY(e, n, watchId, {
            ...o,
            keptFor: r
          });
        };
      zh(() => {
        KK(h, void 0, u), C.add(watchId);
      });
    }
    return;
  }
  ll({
    value: zi({
      taskId: watchId ? Xt(watchId) : void 0,
      summary: `${ccn}${Xt(e)}"`,
      body: H(n, o?.isHousekeeping)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: o?.agentId ?? st(),
    ...(o?.toolsUsed !== void 0 && {
      toolsUsed: o.toolsUsed
    }),
    ...(r !== void 0 && {
      scheduledByPlugin: r
    }),
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
function Qqo(e) {
  let {
      taskId: taskId,
      toolUseId: toolUseId,
      description: description_2,
      ownerAgentId: ownerAgentId,
      stopperAgentId: stopperAgentId
    } = e,
    s = `Task "${description_2}" was stopped by ${JOn(stopperAgentId)}`;
  ll({
    value: zi({
      taskId: Xt(taskId),
      toolUseId: toolUseId ? Xt(toolUseId) : void 0,
      status: "stopped",
      summary: Xt(s)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: Pr(ownerAgentId),
    taskId: taskId
  });
}
function jYr(e) {
  let {
      taskId: taskId_2,
      toolUseId: toolUseId_2,
      description: description_3,
      source: source,
      outputFile: outputFile,
      note: note
    } = e,
    u = source === "client" ? `Task "${description_3}" was stopped by the user or by the app connected to this session` : `Task "${description_3}" was stopped by the user`;
  ll({
    value: zi({
      taskId: Xt(taskId_2),
      toolUseId: toolUseId_2 ? Xt(toolUseId_2) : void 0,
      outputFile: outputFile,
      status: "killed",
      summary: Xt(note === void 0 ? u : `${u}. ${note}`)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    passive: !0,
    agentId: st(),
    taskId: taskId_2
  });
}
function WYr(e, n = t => {
  let o = setTimeout(t, Se);
  return () => clearTimeout(o);
}) {
  let t = "",
    o = [],
    i = null;
  function r(h) {
    if (i) i(), i = null;
    if (h && t.trim() && !Ldo(t.trim())) {
      let d = t.trim();
      if (d.length > I) d = d.slice(0, I) + "...(truncated)";
      o.push(d), t = "";
    }
    if (o.length === 0) return;
    let p = o.join(`
`);
    if (p.length > Q) p = p.slice(0, Q) + `
...(truncated)`;
    return o = [], p;
  }
  function flush(h) {
    let p = r(h === !0);
    if (p !== void 0) e(p);
  }
  function onData(h) {
    if (t += h, t.length > q) t = t.slice(-q);
    let p;
    while ((p = t.indexOf(`
`)) !== -1) {
      let d = t.slice(0, p).trim();
      if (t = t.slice(p + 1), Ldo(d)) continue;
      if (d) {
        if (d.length > I) d = d.slice(0, I) + "...(truncated)";
        o.push(d);
      }
    }
    if (o.length > 0 && !i) i = n(flush);
  }
  return {
    onData: onData,
    flush: flush,
    drain: () => r(!0)
  };
}
function zYr(e, n, t) {
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
  }), t?.onKilled?.(), dA(agentId_2, `monitor:${e}`, n), o !== void 0) {
    if (!t?.quiet) GY(o, "[Monitor stopped]", e, {
      isHousekeeping: !0,
      agentId: agentId_2
    });
    za(e, t?.endedAs?.status ?? "stopped", {
      toolUseId: toolUseId_3,
      summary: t?.endedAs?.summary ?? o
    });
  }
}
function j(e, n, t, o) {
  for (let [i, r] of Object.entries(n.all())) if (t(r) && r.agentId === e && r.status === "running") o(i, n);
}
var Zii = ["publish", "attach", "watch", "resume", "session_resume", "mcp_write"];
function GG(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function eai(e, n) {
  Hn().monitorSockets.set(e, n);
}
function GYr(e, n) {
  return Hn().monitorSockets.get(e) === n;
}
function VYr(e, n, t) {
  return GG(e) && e.status === "running" && e.autoReactArmed === !0 && n() && (t?.includeStopLatched === !0 || !(e.autoReactSlug !== void 0 && hb(e.autoReactSlug)));
}
function zke(e) {
  return VYr(e, () => te().autoReact.enabledMemo === !0);
}
function be(e) {
  let n = Hn().monitorSockets.get(e);
  return n !== void 0 && n.readyState <= 1;
}
var V = 300000,
  ve = UYr + V;
function RCt(e, n = Date.now()) {
  let t = e.frameLive === void 0 ? void 0 : te().live.supervisors.get(e.frameLive.slug);
  if (!be(e.id) || t?.transport !== "sync" && n - e.startTime > ve) return !1;
  let o = t?.lease?.expMs;
  return o === void 0 || n <= o + V;
}
function oqt(e) {
  let n = Hn().monitorSockets.get(e);
  return n !== void 0 && n.readyState === 1;
}
var tai = {
  name: "MonitorWsTask",
  type: "monitor_ws",
  async kill(e, n, t, o) {
    Dk(e, n, (o ?? "user") === "system" ? {} : {
      userStop: !0,
      taskStop: !0,
      modelOrigin: o === "parent"
    });
  }
};
function nai(e) {
  Hn().frameLiveUserStopObserver = e;
}
function rai(e) {
  Hn().autoReactHumanTurnObserver = e;
}
function oai(e) {
  Hn().artifactPresenceStopObserver = e;
}
function sai(e) {
  Hn().artifactRoomStopObserver?.leave(e);
}
function iai() {
  return CNn()?.conns.size ?? 0;
}
function Zqo(e) {
  let n = CNn(),
    t = Hn().artifactRoomStopObserver?.disposeAll() ?? 0,
    o = n?.consentRevoke?.() ?? 0;
  if (t <= 0 && o <= 0 || n?.consentGone?.() === !0) return t;
  let i = "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.",
    r = {
      agentId: st(),
      value: zi({
        taskType: A5,
        summary: Xt(t > 0 ? `Left the live ${P(t, "room")} of ${t} ${P(t, "artifact")} (the user stopped background activity)` : `Forgot the live-room ${P(o, "approval")} of ${o} ${P(o, "artifact")} (the user stopped background activity)`),
        body: `
<event>${Xt(t > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${i}` : `No room was open. ${i}`)}</event>`
      }),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "later",
      origin: {
        kind: "task-notification",
        source: A5,
        roomLifecycle: !0
      }
    };
  if (e !== void 0) e.enqueuePendingNotification(r);else ll(r);
  return t;
}
function aai(e) {
  Hn().autoReactDeliberateStopObserver = e;
}
function Dk(taskId_3, taskRegistry, t) {
  let o = taskRegistry.all()[taskId_3];
  if (GG(o) && o.autoReactArmed === !0) {
    if (zhe(o.autoReactSlug), o.autoReactSlug !== void 0 && t?.connectionLost !== !0) Ybn(o.autoReactSlug);
    if (t?.userStop === !0 && o.autoReactSlug !== void 0 && (o.status === "running" || !CS(o.autoReactSlug))) ZZn(o.autoReactSlug);
  }
  if (t?.userStop === !0 && GG(o) && o.frameLive !== void 0) {
    if (Hn().frameLiveUserStopObserver?.(o.frameLive.slug, {
      running: o.status === "running",
      taskId: taskId_3,
      taskStop: t?.taskStop === !0,
      modelOrigin: t?.modelOrigin === !0,
      taskRegistry: taskRegistry
    }) === !0) if (CS(o.frameLive.slug)) ZZn(o.frameLive.slug);else Hn().autoReactDeliberateStopObserver?.(o.frameLive.slug);
  }
  if (t?.userStop === !0 && GG(o) && o.frameLive === void 0 && o.autoReactArmed !== !0) Hn().liveDocUserStopObserver?.(taskId_3, {
    modelOrigin: t?.modelOrigin === !0,
    running: o.status === "running"
  }), Hn().artifactRoomStopObserver?.leaveByTaskId(taskId_3), Hn().artifactPresenceStopObserver?.closeByTaskId(taskId_3);
  zYr(taskId_3, taskRegistry, {
    quiet: t?.quiet,
    onKilled() {
      let i = Hn().monitorSockets.get(taskId_3);
      if (i) Hn().monitorSockets.delete(taskId_3), i.close();
    }
  });
}
function lai(e) {
  zhe(e), Ybn(e), ZZn(e);
}
function ZZn(e) {
  Xbn(e), Hn().autoReactDeliberateStopObserver?.(e), a$(te().live, e);
  let n = L(e);
  Hn().artifactRoomStopObserver?.leave(e);
  let t = Oy(o => o.origin?.kind === "task-notification" && o.origin.slug === e && Kbn(o));
  if (G(t, n), x(t), t.some(ke) || n.length > 0) j2(e);
  aQ(0, n);
}
function _e(e) {
  return e === "artifact-auto-react" || e === "artifact-room";
}
function G(e, n) {
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
function aQ(e, n = [], t) {
  if (e <= 0 && n.length === 0) return;
  let builtInArtifactHiddenForMcp = te().builtInArtifactHiddenForMcp,
    i = P(e, "it", "them"),
    r = P(e, "this artifact", "these artifacts"),
    s = P(e, "the watch is kept", "the watches are kept"),
    u = t?.catchUp === !1 ? "" : builtInArtifactHiddenForMcp ? ` (comments you send to Claude meanwhile reach this session ${t?.nameChordGesture === !0 ? "then" : P(e, "once the watch resumes", "once the watches resume")})` : " (comments sent to Claude meanwhile are answered then)",
    h = t?.catchUp === !1 ? "" : builtInArtifactHiddenForMcp ? ", and comments the user sent to Claude in the meantime reach you then" : ", and comments sent to Claude in the meantime are answered then",
    p = t?.catchUp === !1 ? "" : builtInArtifactHiddenForMcp ? " (comments the user sent to Claude meanwhile reach you when that turn ends)" : " (comments sent to Claude meanwhile are being answered now)",
    d = builtInArtifactHiddenForMcp ? "" : ", or resume_replies if the user asks",
    y = `publishing without being asked, while handling a notification or a wake-up, leaves ${i} paused`,
    S = builtInArtifactHiddenForMcp ? `the user can stop ${i} for good in the tasks list (/tasks, often under System tasks), and the kill-all-agents gesture stops ${i} until Claude Code restarts` : `the user can stop ${i} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`,
    v = t?.nameChordGesture === !0 ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${i}${p}, otherwise the user's next message resumes ${i} (so does a publish of ${r} the user asks for${d}; ${y})${h}; ${S}` : `when the user asks you to publish ${r} again, that publish resumes ${i}${d}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${h}; ${y}`;
  ll({
    agentId: st(),
    value: zi({
      taskType: "artifact-auto-react",
      summary: Xt(e > 0 ? `${e} artifact ${builtInArtifactHiddenForMcp ? P(e, "comment watch", "comment watches") : `auto-reply ${P(e, "subscription")}`} paused ${t?.nameChordGesture === !0 ? "until your next message" : "by the interrupt"}${u}` : "Artifact auto-reply activity stopped"),
      body: `
${Xt(n.map(Jcr).concat(e > 0 ? [`The user's interrupt paused ${i} and ${s}; ${v}. ${builtInArtifactHiddenForMcp ? `Do not republish just to resume ${i}` : "Do not republish or resume just to re-enable auto-replies"} unless the user asks.`] : []).join(`

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
function ke(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}
function Kbn(e) {
  return e.origin?.kind === "task-notification" && _e(e.origin.source);
}
function NOe(e, n) {
  let t = L();
  for (let i of t) j2(i.slug);
  if (n?.leaveArtifactRooms === !0) Zqo(e);
  let o = e.removeByFilter(Kbn);
  for (let i of o) if (i.origin?.kind === "task-notification" && i.origin.source === "artifact-auto-react" && i.origin.slug !== void 0) j2(i.origin.slug);
  return G(o, t), x(o), t;
}
function dai(e = () => !1) {
  let {
    pendingNoticeSlugs: pendingNoticeSlugs
  } = te().shareStatus;
  if (pendingNoticeSlugs.size === 0) return 0;
  let t = new Set();
  for (let i of aA()) {
    let r = i.origin?.kind === "task-notification" ? i.origin.slug : void 0;
    if (r !== void 0 && Kbn(i)) t.add(r);
  }
  let o = 0;
  for (let i of [...pendingNoticeSlugs.keys()]) {
    if (t.has(i) || B(i) || e(i)) continue;
    j2(i), o++;
  }
  return o;
}
function qbn() {
  return {
    disclosures: [],
    staleRows: [],
    watchLifecycle: []
  };
}
function eer(e) {
  x(e);
  let n = qbn();
  for (let t of e) {
    if (t.origin?.kind !== "task-notification") continue;
    if (t.origin.source === "artifact-auto-react-stop-disclosure") n.disclosures.push(t);else if (t.origin.source === "artifact-changed") n.staleRows.push(t);else if (t.origin.source === A5) n.watchLifecycle.push(t);
  }
  return n;
}
function K(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react-stop-disclosure" && e.origin.nonDurableStop === !0 && e.origin.carriesDiscardRecord !== !0;
}
function cai(e) {
  if (!te().autoReact.userDisarmed) return;
  e.removeByFilter(K);
}
function ter(e, n, t) {
  let userDisarmed = te().autoReact.userDisarmed;
  for (let i of n.disclosures) {
    let r = i.origin?.kind === "task-notification" && i.origin.carriesDiscardRecord === !0,
      s = userDisarmed && K(i);
    if (r || t === 0 && !s) e.enqueuePendingNotification(i);
  }
  for (let i of n.staleRows) e.enqueuePendingNotification(i);
  for (let i of n.watchLifecycle) e.enqueuePendingNotification(i);
}
function uai() {
  for (let [e, n] of Hn().monitorSockets) {
    try {
      n.close();
    } catch {}
    Hn().monitorSockets.delete(e);
  }
}
function fai(e, n) {
  j(e, n, GG, Dk);
}
export { Gii, UYr, Vii, tqt, nqt, XZn, Kii, qii, Yii, Xii, Yqo, Xqo, Jii, Qii, Jqo, rqt, Nit, Vbn, s_, Uia, JZn, BYr, QZn, GY, Qqo, jYr, WYr, zYr, Zii, GG, eai, GYr, VYr, zke, RCt, oqt, tai, nai, rai, oai, sai, iai, Zqo, aai, Dk, lai, ZZn, aQ, Kbn, NOe, dai, qbn, eer, cai, ter, uai, fai };