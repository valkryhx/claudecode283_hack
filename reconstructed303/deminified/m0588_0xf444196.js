// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Gr, L, K, Hc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Qd, FM } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Da } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Fle, O_, tne } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { Dge } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { rd, Tf, k6, Rpe, hQt, XFn, R6e, Ypo, Mu, tHn, cfo, yC, Pfo, Ofo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Lu } from "B:/~BUN/root/chunk-9080897a.js";
import { ee, nje } from "B:/~BUN/root/chunk-t63e78w2.js";
import { o, v, oe, T, u, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { basename as J } from "path";
var ot = {
    published: "published",
    comment: "comment"
  },
  W = 64,
  x = 16,
  it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  st = "",
  at = f(() => {
    let rowsEnvelope = u({
        v: C(1),
        rows: fe(o(), oe())
      }),
      newerEnvelope = u({
        v: v().gt(1)
      }),
      stopsEnvelope = u({
        stopped: fe(o(), oe())
      }),
      i = U(ot),
      trigger_id = o().refine(g => Vt(g) !== null),
      orphansEnvelope = u({
        orphans: T(oe()).transform(g => g.slice(0, x).flatMap(item => {
          let c = trigger_id.safeParse(item);
          return c.success ? [c.data] : [];
        }))
      }),
      row = u({
        trigger_id: trigger_id,
        since: o().regex(it),
        events: T(o()).max(16).transform(g => L(g).flatMap(item => {
          let c = i.safeParse(item);
          return c.success ? [c.data] : [];
        })).refine(g => g.length > 0),
        unreleased: T(oe()).catch([]).transform(g => g.slice(0, x).flatMap(item => {
          let c = trigger_id.safeParse(item);
          return c.success ? [c.data] : [];
        }))
      }),
      stop = u({
        at_ms: v().refine(Number.isFinite)
      });
    return {
      rowsEnvelope: rowsEnvelope,
      newerEnvelope: newerEnvelope,
      stopsEnvelope: stopsEnvelope,
      orphansEnvelope: orphansEnvelope,
      row: row,
      stop: stop
    };
  });
function Prs(e) {
  ee().durable.registrySink = e;
}
function Ors() {
  ee().durable.registryPublished = st;
}
function zRe() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  let e = ee(),
    {
      durable: durable
    } = e;
  if (durable.registrySink === null) return;
  let rows = {},
    i = [],
    r = new Set();
  for (let c of durable.pendingRestoredRows.values()) {
    let h = durable.rows.get(c.slug);
    if (h === void 0 && !durable.unwatchedSlugs.has(c.slug)) {
      i.push(c);
      continue;
    }
    for (let S of [c.triggerId, ...(c.unreleased ?? [])]) if (S !== h?.triggerId) r.add(S);
  }
  for (let c of [...durable.rows.values(), ...i].slice(0, W)) rows[c.slug] = {
    trigger_id: c.triggerId,
    since: c.since,
    events: [...c.events],
    ...(c.unreleased !== void 0 && c.unreleased.length > 0 && {
      unreleased: [...c.unreleased]
    })
  };
  let stopped = {},
    s = [...e.commentMonitorIntent.bySlug.entries()].filter(([, c]) => c.state === "stopped").sort(([, c], [, h]) => h.writtenAtMs - c.writtenAtMs).slice(0, W);
  for (let [c, h] of s) stopped[c] = {
    at_ms: h.writtenAtMs
  };
  let orphans = L([...durable.orphanTriggers, ...r]).slice(0, x),
    artifact_durable_watches = durable.rows.size + i.length === 0 && s.length === 0 && orphans.length === 0 ? null : {
      v: 1,
      rows: rows,
      stopped: stopped,
      ...(orphans.length > 0 && {
        orphans: orphans
      })
    },
    m = _(artifact_durable_watches);
  if (m === durable.registryPublished) return;
  durable.registryPublished = m, durable.registrySink({
    artifact_durable_watches: artifact_durable_watches
  });
}
function Irs(e) {
  if (e === void 0 || e === null) return null;
  let t = at(),
    n = 0,
    rows_2 = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success) for (let [slug, c] of B(r.data.rows)) {
    let h = t.row.safeParse(c);
    if (!ar.test(slug) || !h.success) {
      n++;
      continue;
    }
    rows_2.push({
      slug: slug,
      triggerId: h.data.trigger_id,
      since: h.data.since,
      events: h.data.events,
      ...(h.data.unreleased.length > 0 && {
        unreleased: h.data.unreleased
      })
    });
  }
  let stopped_2 = new Map(),
    s = t.stopsEnvelope.safeParse(e);
  if (s.success) for (let [m, c] of B(s.data.stopped)) {
    if (!ar.test(m)) {
      n++;
      continue;
    }
    let h = t.stop.safeParse(c);
    if (stopped_2.set(m, h.success ? h.data.at_ms : Date.now()), !h.success) n++;
  }
  if (!r.success || !s.success) p("artifact_durable_subscribe", s.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid");else if (n > 0) p("artifact_durable_subscribe", "registry_entry_invalid");
  let l = t.orphansEnvelope.safeParse(e),
    orphans_2 = l.success ? l.data.orphans : [];
  return {
    rows: rows_2,
    stopped: stopped_2,
    orphans: orphans_2
  };
}
function B(e) {
  return Object.keys(e).slice(0, W).map(item => [item, e[item]]);
}
function Vce(e) {
  let {
      live: live
    } = ee(),
    n = live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0 || live.inFlightWiredIntent.has(e);
}
var k = "\x00unwritten",
  G = 256,
  H = 32,
  D = 64,
  dt = f(() => {
    let writtenAtMs = v().refine(Number.isFinite),
      record = u({
        state: U(["armed", "stopped"]),
        writtenAtMs: writtenAtMs,
        title: o().min(1).max(G).optional(),
        holder: o().optional().transform(i => i === void 0 ? void 0 : "bg"),
        holderPid: v().int().positive().optional().catch(void 0),
        holderProcStart: o().min(1).max(64).optional().catch(void 0),
        holderProcStartFt: o().min(1).max(64).optional().catch(void 0),
        holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(void 0),
        holderPidSpace: o().min(1).max(160).optional().catch(void 0)
      }),
      envelope = u({
        type: C("artifact-comment-monitor"),
        v: C(1),
        sessionId: o(),
        artifacts: fe(o(), oe()),
        crossLineMerged: C(!0).optional().catch(void 0),
        tailTorn: C(!0).optional().catch(void 0)
      });
    return {
      record: record,
      envelope: envelope
    };
  });
function Y(e) {
  if (e.holderPid === void 0 || e.holderJob === void 0 || e.holderPidSpace === void 0 || e.holderProcStart === void 0 && e.holderProcStartFt === void 0) return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...(e.holderProcStart !== void 0 && {
      holderProcStart: e.holderProcStart
    }),
    ...(e.holderProcStartFt !== void 0 && {
      holderProcStartFt: e.holderProcStartFt
    }),
    holderPidSpace: e.holderPidSpace
  };
}
function Z() {
  let token = Fle.token;
  if (token === void 0) return O_(), {};
  let t = FM();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(J(t))) return {};
  let {
    procStart: n,
    procStartFt: i
  } = tne(token);
  return Y({
    holderPid: process.pid,
    holderJob: J(t),
    holderProcStart: n,
    holderProcStartFt: i,
    holderPidSpace: Dge().slice(0, 160)
  });
}
function TQr() {
  return O_();
}
function LAn(e, t) {
  let n = dt(),
    i = n.envelope.safeParse(e);
  if (!i.success) return p("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (i.data.sessionId !== K()) return p("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (i.data.crossLineMerged === !0) t?.onLossy?.();
  let r = i.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map(),
    s = 0,
    l = 0,
    g = 0;
  for (let [m, c] of Object.entries(i.data.artifacts)) {
    if (l++ >= 2 * D) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(c);
    if (!ar.test(m)) {
      s++, t?.onLossy?.();
      continue;
    }
    if (!h.success) {
      if (s++, t?.onLossy?.(), typeof c === "object" && c !== null && c.state === "stopped") d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now()
      });
      continue;
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(h.data.title !== void 0 && {
          title: h.data.title
        })
      }), t?.onTornStop?.(m);
      continue;
    }
    if (h.data.state === "armed" && g++ >= D) {
      t?.onLossy?.();
      continue;
    }
    let {
      state: state,
      writtenAtMs: writtenAtMs_2,
      title: title,
      holder: holder
    } = h.data;
    d.set(m, {
      state: state,
      writtenAtMs: writtenAtMs_2,
      ...(title !== void 0 && {
        title: title
      }),
      ...(holder !== void 0 && {
        holder: holder,
        ...(r ? {} : Y(h.data))
      })
    });
  }
  if (s > 0) p("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function IYt(e) {
  let t = A(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let {
    excludeSlug: excludeSlug
  } = e;
  if (excludeSlug !== void 0) n.delete(excludeSlug);
  return M(), n;
}
function NAn() {
  return ee().commentMonitorIntent.tornStops;
}
function CQr() {
  return ee().commentMonitorIntent.storageV5;
}
function P8(e) {
  A(e?.storageV5);
}
function Mrs(e, t) {
  if (e === void 0 && !nje()) return;
  let commentMonitorIntent = ee().commentMonitorIntent;
  commentMonitorIntent.earlySeed = e, commentMonitorIntent.adoptPendingFor = K(), A(t?.storageV5);
}
function FAn(e, t) {
  let n = A(t?.storageV5);
  if (ee().durable.stopLatches.isStopped(e)) return;
  let title_2 = t?.title,
    r = title_2 !== void 0 && title_2.length >= 1 && title_2.length <= G,
    title_3 = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let writtenAtMs_3 = Date.now(),
    l = Qd() ? {
      holder: "bg",
      ...Z()
    } : void 0;
  if (n.bySlug.set(e, {
    state: "armed",
    writtenAtMs: writtenAtMs_3,
    ...(r ? {
      title: title_2
    } : title_3 !== void 0 && {
      title: title_3
    }),
    ...l
  }), tt(n, e), M(), l !== void 0 && l.holderPid === void 0) ct(e, writtenAtMs_3);
}
function ct(e, t) {
  O_().then(() => {
    if (!nje() || !Qd()) return;
    let commentMonitorIntent_2 = ee().commentMonitorIntent,
      i = commentMonitorIntent_2.bySlug.get(e);
    if (commentMonitorIntent_2.sid !== K() || i?.state !== "armed" || i.holder !== "bg" || i.holderPid !== void 0 || i.writtenAtMs !== t) return;
    let r = Z();
    if (r.holderPid === void 0) return;
    commentMonitorIntent_2.bySlug.set(e, {
      ...i,
      ...r
    }), M();
  }).catch(() => {
    return;
  });
}
function Mot(e, t) {
  let n = A(t?.storageV5),
    i = n.bySlug.get(e);
  n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...(i?.title !== void 0 && {
      title: i.title
    })
  }), M({
    durableNow: !0
  });
  for (let [r, d] of n.parked) {
    let s = d.line[e];
    if (s?.state === "armed") d.line[e] = {
      state: "stopped",
      writtenAtMs: Date.now(),
      ...(s.title !== void 0 && {
        title: s.title
      })
    }, R(r, d.path, d.line, {
      durableNow: !0
    });
  }
}
function Drs(e, t) {
  return A(t?.storageV5).bySlug.get(e)?.state;
}
function yKe(e, t) {
  let n = A(t?.storageV5),
    i = !1,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let s of r) {
    if (i = n.bySlug.delete(s) || i, n.forgottenAt.delete(s), n.forgottenAt.size >= ft) {
      let l = n.forgottenAt.keys().next().value;
      if (l !== void 0) n.forgottenAt.delete(l);
    }
    n.forgottenAt.set(s, d);
  }
  if (i) M({
    durableNow: !0
  });
  for (let [s, l] of n.parked) {
    let g = !1;
    for (let m of r) if (l.traveling?.has(m) && l.line[m]?.state === "armed") delete l.line[m], l.traveling.delete(m), g = !0;
    if (g) {
      if (R(s, l.path, l.line, {
        durableNow: !0
      }), !Object.values(l.line).some(item => item.state === "armed")) n.parked.delete(s);
    }
  }
}
function HAn(e, t) {
  let n = A(t?.storageV5),
    {
      stopLatches: stopLatches
    } = ee().durable;
  for (let [r, writtenAtMs_4] of e) {
    if (stopLatches.wasClearedByRewatch(r)) continue;
    let s = n.bySlug.get(r);
    if (s === void 0 || s.state === "armed" || s.writtenAtMs <= writtenAtMs_4) n.bySlug.set(r, {
      state: "stopped",
      writtenAtMs: writtenAtMs_4,
      ...(s?.title !== void 0 && {
        title: s.title
      })
    });
    stopLatches.reaffirmStop(r);
  }
  M();
}
function Lrs(e) {
  let t = A(e?.storageV5),
    {
      yieldedSlugs: yieldedSlugs
    } = ee().wakes,
    writtenAtMs_5 = Date.now(),
    r = !1;
  for (let [d, s] of t.bySlug) if (s.state === "armed" && !yieldedSlugs.has(d)) t.bySlug.set(d, {
    state: "stopped",
    writtenAtMs: writtenAtMs_5,
    ...(s.title !== void 0 && {
      title: s.title
    })
  }), r = !0;
  if (r) M({
    durableNow: !0
  });
  for (let [d, s] of t.parked) {
    let l = !1;
    for (let [g, m] of Object.entries(s.line)) if (m.state === "armed") s.line[g] = {
      state: "stopped",
      writtenAtMs: writtenAtMs_5,
      ...(m.title !== void 0 && {
        title: m.title
      })
    }, l = !0;
    if (l) R(d, s.path, s.line, {
      durableNow: !0
    });
  }
}
function lt(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "fork":
    case "remote_attach":
      return !0;
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1;
  }
}
function ut() {
  let commentMonitorIntent_3 = ee().commentMonitorIntent,
    sid = commentMonitorIntent_3.sid;
  if (sid === null || sid === K()) {
    commentMonitorIntent_3.leftWith = null;
    return;
  }
  let traveling = new Set();
  for (let [i, r] of commentMonitorIntent_3.bySlug) if (r.state === "armed" && Vce(i)) traveling.add(i);
  commentMonitorIntent_3.leftWith = {
    sid: sid,
    traveling: traveling,
    unwritten: !commentMonitorIntent_3.onFile && !R6e(sid) && commentMonitorIntent_3.adoptPendingFor !== sid,
    inWindow: commentMonitorIntent_3.adoptPendingFor === sid
  };
}
function P() {
  let commentMonitorIntent_4 = ee().commentMonitorIntent;
  if (!R6e(K())) return;
  for (let [t, n] of commentMonitorIntent_4.parked) {
    if (n.traveling === void 0 || t === K()) continue;
    let i = !1;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") delete n.line[r], i = !0;
    if (n.traveling = void 0, i) R(t, n.path, n.line);
    if (!Object.values(n.line).some(item => item.state === "armed")) commentMonitorIntent_4.parked.delete(t);
  }
}
function O(e, t) {
  if (R6e(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || rd() !== null;
}
function q(e, path, n, i, r) {
  if (path === null) return;
  let commentMonitorIntent_5 = ee().commentMonitorIntent,
    s = {
      path: path,
      line: Q(e, n)
    };
  commentMonitorIntent_5.pendingLines.set(e, s), XFn(N), commentMonitorIntent_5.writeChain = commentMonitorIntent_5.writeChain.then(async () => {
    if (await Mu().catch(() => {}), commentMonitorIntent_5.pendingLines.get(e) !== s) return;
    if (commentMonitorIntent_5.exitStamped) return;
    if (commentMonitorIntent_5.pendingLines.delete(e), !i && k6() === r) return;
    if (e === commentMonitorIntent_5.sid) {
      commentMonitorIntent_5.lastWritten = k, M();
      return;
    }
    R(e, path, n);
  }), commentMonitorIntent_5.writeChain = commentMonitorIntent_5.writeChain.catch(() => {});
}
var ft = 1024;
function Q(sessionId, artifacts) {
  let commentMonitorIntent_6 = ee().commentMonitorIntent,
    i = commentMonitorIntent_6.parked.get(sessionId);
  if (i?.unwritten === !0) {
    let {
      traveling: traveling_2
    } = i;
    return traveling_2 === void 0 ? artifacts : Da(artifacts, (d, s) => d.state === "armed" && traveling_2.has(s));
  }
  if (i?.leftInWindow === !0) return V(commentMonitorIntent_6, {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: sessionId,
    artifacts: artifacts
  }).artifacts;
  return artifacts;
}
function R(sessionId_2, path_2, n, i) {
  if (path_2 === null) return;
  let commentMonitorIntent_7 = ee().commentMonitorIntent,
    {
      storageV5: storageV5
    } = commentMonitorIntent_7,
    s = Q(sessionId_2, {
      ...n
    }),
    l = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_2,
      artifacts: s
    };
  commentMonitorIntent_7.owedLines.delete(sessionId_2);
  let g = {
    path: path_2,
    line: s
  };
  if (commentMonitorIntent_7.pendingLines.set(sessionId_2, g), XFn(N), i?.durableNow === !0) tHn(l, path_2, I(l));
  commentMonitorIntent_7.writeChain = commentMonitorIntent_7.writeChain.then(async () => {
    if (await Mu().catch(() => {}), commentMonitorIntent_7.exitStamped) return;
    if (sessionId_2 === commentMonitorIntent_7.sid) {
      if (commentMonitorIntent_7.pendingLines.get(sessionId_2) === g) commentMonitorIntent_7.pendingLines.delete(sessionId_2);
      commentMonitorIntent_7.lastWritten = k, M();
      return;
    }
    if (await yC(path_2, l, storageV5, {
      onlyIfExists: !0,
      tornTailEntry: I(l)
    }), commentMonitorIntent_7.pendingLines.get(sessionId_2) === g) commentMonitorIntent_7.pendingLines.delete(sessionId_2);
  }).catch(() => {
    if (commentMonitorIntent_7.pendingLines.get(sessionId_2) !== g) {
      p("artifact_live_subscribe", "comment_monitor_intent_write_failed");
      return;
    }
    if (commentMonitorIntent_7.pendingLines.delete(sessionId_2), commentMonitorIntent_7.owedLines.size >= 2 * H) {
      let m = commentMonitorIntent_7.owedLines.keys().next().value;
      if (m !== void 0) commentMonitorIntent_7.owedLines.delete(m);
    }
    commentMonitorIntent_7.owedLines.set(sessionId_2, {
      path: path_2,
      line: s
    }), p("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
function Nrs(e, t) {
  tt(A(t?.storageV5), e);
}
function tt(e, t) {
  let n = !1;
  for (let [i, r] of e.parked) {
    if (i === K() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set()).add(t), n = !0;
  }
  if (n) P();
}
function X(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = !1;
  for (let [i, {
    path: path_3,
    line: line
  }] of t) {
    if (i === e.sid) {
      e.lastWritten = k, n = !0;
      continue;
    }
    if (e.pendingLines.has(i)) continue;
    let s = e.parked.get(i);
    R(i, s?.path ?? path_3, s?.line ?? line);
  }
  if (n) M();
}
function A(e) {
  let commentMonitorIntent_8 = ee().commentMonitorIntent;
  if (e !== void 0) commentMonitorIntent_8.storageV5 = e;
  let n = K(),
    i = !1,
    r = !1;
  if (commentMonitorIntent_8.sid !== n) {
    let s = commentMonitorIntent_8.leftWith !== null && commentMonitorIntent_8.leftWith.sid === commentMonitorIntent_8.sid ? commentMonitorIntent_8.leftWith : null,
      l = S => s !== null ? s.traveling.has(S) : Vce(S);
    commentMonitorIntent_8.leftWith = null;
    let line_2 = E(commentMonitorIntent_8),
      traveling_3 = new Set(),
      c = 0;
    for (let [S, w] of commentMonitorIntent_8.bySlug) {
      if (w.state !== "armed") continue;
      if (l(S)) traveling_3.add(S);else commentMonitorIntent_8.bySlug.delete(S), c++;
    }
    let {
      stopLatches: stopLatches_2
    } = ee().durable;
    for (let [S, w] of Object.entries(commentMonitorIntent_8.parked.get(n)?.line ?? {})) {
      let y = commentMonitorIntent_8.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !Vce(S)) {
        r = !0;
        continue;
      }
      let b = F(commentMonitorIntent_8.bySlug.get(S), w);
      if (b.state === "armed" && stopLatches_2.isStopped(S)) b = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(b.title !== void 0 && {
          title: b.title
        })
      };
      if (commentMonitorIntent_8.bySlug.set(S, b), b.state === "stopped") stopLatches_2.confirmStop(S);
    }
    commentMonitorIntent_8.parked.delete(n);
    for (let S of [commentMonitorIntent_8.owedLines.get(n), commentMonitorIntent_8.pendingLines.get(n)]) for (let [w, y] of Object.entries(S?.line ?? {})) {
      if (y.state !== "stopped") continue;
      let b = F(commentMonitorIntent_8.bySlug.get(w), y);
      if (commentMonitorIntent_8.bySlug.set(w, b), b.state === "stopped") stopLatches_2.confirmStop(w);
    }
    if (commentMonitorIntent_8.sid !== null && (c > 0 || traveling_3.size > 0)) {
      commentMonitorIntent_8.parked.set(commentMonitorIntent_8.sid, {
        path: commentMonitorIntent_8.transcriptPath,
        line: line_2,
        ...(traveling_3.size > 0 && {
          traveling: traveling_3
        }),
        ...(s?.unwritten === !0 && {
          unwritten: !0
        }),
        ...(s?.inWindow === !0 && {
          leftInWindow: !0
        })
      });
      while (commentMonitorIntent_8.parked.size > H) {
        let [S, w] = commentMonitorIntent_8.parked.entries().next().value;
        commentMonitorIntent_8.parked.delete(S);
        let writtenAtMs_6 = Date.now();
        R(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, z]) => z.state !== "armed" ? [[b, z]] : w.traveling?.has(b) ? [] : [[b, {
          state: "stopped",
          writtenAtMs: writtenAtMs_6,
          ...(z.title !== void 0 && {
            title: z.title
          })
        }]])));
      }
    }
    if (commentMonitorIntent_8.sid !== null && commentMonitorIntent_8.wroteCurrentLine) q(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, commentMonitorIntent_8.lastWritten === k, commentMonitorIntent_8.failureSeqAtWrite);else if (commentMonitorIntent_8.sid !== null && s?.inWindow === !0 && nt(commentMonitorIntent_8, line_2)) q(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, !0, commentMonitorIntent_8.failureSeqAtWrite);
    if (P(), i = [...commentMonitorIntent_8.bySlug.values()].some(item => item.state === "armed"), commentMonitorIntent_8.sid = n, commentMonitorIntent_8.adoptPendingFor !== n) commentMonitorIntent_8.adoptPendingFor = null;
    commentMonitorIntent_8.lastWritten = r ? k : null, commentMonitorIntent_8.wroteCurrentLine = !1, commentMonitorIntent_8.pendingRestore = null, commentMonitorIntent_8.transcriptPath = null, commentMonitorIntent_8.tornStops.clear(), commentMonitorIntent_8.onFile = !1;
  }
  if (!commentMonitorIntent_8.onFile && R6e(n)) commentMonitorIntent_8.onFile = !0;
  if (commentMonitorIntent_8.transcriptPath = O(commentMonitorIntent_8, n) ? Lu() : Tf(n), commentMonitorIntent_8.unsubscribeMaterialized === void 0) commentMonitorIntent_8.unsubscribeMaterialized = Ypo(() => {
    if (commentMonitorIntent_8.sid !== null && R6e(commentMonitorIntent_8.sid)) commentMonitorIntent_8.onFile = !0;
    P();
  });
  if (commentMonitorIntent_8.unsubscribeSwitch === void 0) commentMonitorIntent_8.unregisterExitDrain = hQt(() => (X(commentMonitorIntent_8), commentMonitorIntent_8.writeChain)), XFn(N), commentMonitorIntent_8.unsubscribeSwitch = Hc((s, l) => {
    if (l === "cd" && commentMonitorIntent_8.sid === s) commentMonitorIntent_8.transcriptPath = Tf(s);
    if (lt(l)) ut();
    if (l === "clear") queueMicrotask(M);
  });
  let d = commentMonitorIntent_8.earlySeed ?? Ofo();
  if (commentMonitorIntent_8.earlySeed = void 0, d !== void 0) {
    let s = !1,
      l = LAn(d, {
        onLossy: () => {
          s = !0;
        },
        onTornStop: g => {
          commentMonitorIntent_8.tornStops.add(g);
        }
      });
    if (l !== null) {
      if (d.tailTorn === !0) cfo(commentMonitorIntent_8.transcriptPath ?? void 0);
      let {
          stopLatches: stopLatches_3
        } = ee().durable,
        m = new Map();
      for (let [c, h] of l) {
        let S = commentMonitorIntent_8.forgottenAt.get(c);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !Vce(c)) {
          s = !0;
          continue;
        }
        let w = commentMonitorIntent_8.bySlug.get(c);
        if (commentMonitorIntent_8.tornStops.has(c) && w?.state === "armed" && Vce(c)) {
          commentMonitorIntent_8.tornStops.delete(c), m.set(c, w), s = !0;
          continue;
        }
        let y = F(w, h);
        if (commentMonitorIntent_8.bySlug.set(c, y), m.set(c, y), y.state === "stopped") stopLatches_3.confirmStop(c);
      }
      if (commentMonitorIntent_8.pendingRestore = m, !s && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = j(Object.fromEntries(l)), commentMonitorIntent_8.failureSeqAtWrite = k6();else if (s && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = k;
      zRe();
    }
  }
  if (X(commentMonitorIntent_8), i || r) M();
  return commentMonitorIntent_8;
}
function F(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function E(e) {
  return Object.fromEntries([...e.bySlug.entries()].sort(([, t], [, n]) => Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, D));
}
function et() {
  let {
    commentMonitorIntent: commentMonitorIntent_9,
    wakes: wakes
  } = ee();
  if (!commentMonitorIntent_9.wroteCurrentLine || commentMonitorIntent_9.sid !== K() || [...commentMonitorIntent_9.bySlug.keys()].some(item => wakes.yieldedSlugs.has(item))) return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: K(),
    artifacts: E(commentMonitorIntent_9)
  };
}
function N() {
  let commentMonitorIntent_10 = ee().commentMonitorIntent,
    sessionId_3 = K(),
    n,
    i = () => nt(commentMonitorIntent_10, E(commentMonitorIntent_10)),
    r = !commentMonitorIntent_10.exitStamped && commentMonitorIntent_10.sid === sessionId_3;
  if (r && R6e(sessionId_3)) {
    if (commentMonitorIntent_10.wroteCurrentLine || i() || commentMonitorIntent_10.owedLines.has(sessionId_3) || commentMonitorIntent_10.pendingLines.has(sessionId_3)) P(), commentMonitorIntent_10.wroteCurrentLine = !0, Rpe(et);
  } else if (r && O(commentMonitorIntent_10, sessionId_3) && commentMonitorIntent_10.transcriptPath !== null && i()) {
    let entry = V(commentMonitorIntent_10, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_3,
      artifacts: E(commentMonitorIntent_10)
    });
    n = {
      path: commentMonitorIntent_10.transcriptPath,
      entry: entry,
      tornTailEntry: I(entry)
    };
    for (let l of [commentMonitorIntent_10.owedLines, commentMonitorIntent_10.pendingLines]) if (l.get(sessionId_3)?.path === n.path) l.delete(sessionId_3);
  }
  commentMonitorIntent_10.exitStamped = !0;
  let d = [...commentMonitorIntent_10.owedLines, ...commentMonitorIntent_10.pendingLines].map(([sessionId_4, {
    path: path_4,
    line: g
  }]) => {
    let entry_2 = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_4,
      artifacts: g
    };
    return {
      path: path_4,
      entry: entry_2,
      tornTailEntry: I(entry_2)
    };
  });
  return n === void 0 ? d : [...d, n];
}
function I(e) {
  let writtenAtMs_7 = Date.now();
  return {
    ...e,
    artifacts: Gr(e.artifacts, n => n.state === "armed" && n.holder === void 0 ? {
      state: "stopped",
      writtenAtMs: writtenAtMs_7,
      ...(n.title !== void 0 && {
        title: n.title
      })
    } : n)
  };
}
function V(e, t) {
  let n = K(),
    i = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let s of d.traveling ?? []) if (d.line[s]?.state === "armed") i.add(s);
  }
  if (i.size === 0) return t;
  return {
    ...t,
    artifacts: Da(t.artifacts, (r, d) => r.state === "armed" && i.has(d))
  };
}
function nt(e, t) {
  return e.lastWritten !== j(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function j(e) {
  return _(Object.entries(e).map(([t, n]) => [t, n.state, n.writtenAtMs, n.title ?? null, n.holder ?? null, n.holderPid ?? null, n.holderProcStart ?? n.holderProcStartFt ?? null, n.holderJob ?? null, n.holderPidSpace ?? null]).sort());
}
function M(e) {
  let t = A();
  P(), zRe();
  let artifacts_2 = E(t),
    i = j(artifacts_2);
  if (i === t.lastWritten && k6() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = k6(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = i;
    return;
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: K(),
    artifacts: artifacts_2
  };
  if (O(t, K())) {
    if (t.lastWritten = k, e?.durableNow === !0 && t.transcriptPath !== null) {
      let d = V(t, r);
      tHn(d, t.transcriptPath, I(d));
    }
    return;
  }
  if (t.lastWritten = i, t.wroteCurrentLine = !0, Rpe(et), e?.durableNow === !0) tHn(r);
  Pfo(r, t.storageV5).catch(() => {
    if (t.lastWritten === i) t.lastWritten = k;
    p("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export { Prs, Ors, zRe, Irs, Vce, TQr, LAn, IYt, NAn, CQr, P8, Mrs, FAn, Mot, Drs, yKe, HAn, Lrs, Nrs };