// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { io, Y, Qd } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Bn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { nc, r2 } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { pa } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ZRe, Dv, oY } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { WRe } from "B:/~BUN/root/chunk-3hn9fzjy.js";
import { _c, _f, Yve, EZ, hSr, lZt, lDe, ySr, ru, pZt, xSr, ov, YSr, XSr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Rd } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { ee, WTe } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { o, E, ae, C, u, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { basename as J } from "path";
var ot = {
    published: "published",
    comment: "comment"
  },
  x = 64,
  F = 16,
  it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  st = "",
  at = f(() => {
    let rowsEnvelope = u({
        v: A(1),
        rows: fe(o(), ae())
      }),
      newerEnvelope = u({
        v: E().gt(1)
      }),
      stopsEnvelope = u({
        stopped: fe(o(), ae())
      }),
      i = z(ot),
      trigger_id = o().refine(g => en(g) !== null),
      orphansEnvelope = u({
        orphans: C(ae()).transform(g => g.slice(0, F).flatMap(item => {
          let c = trigger_id.safeParse(item);
          return c.success ? [c.data] : [];
        }))
      }),
      row = u({
        trigger_id: trigger_id,
        since: o().regex(it),
        events: C(o()).max(16).transform(g => L(g).flatMap(item => {
          let c = i.safeParse(item);
          return c.success ? [c.data] : [];
        })).refine(g => g.length > 0),
        unreleased: C(ae()).catch([]).transform(g => g.slice(0, F).flatMap(item => {
          let c = trigger_id.safeParse(item);
          return c.success ? [c.data] : [];
        }))
      }),
      stop = u({
        at_ms: E().refine(Number.isFinite)
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
function ano(e) {
  ee().durable.registrySink = e;
}
function lno() {
  ee().durable.registryPublished = st;
}
function gpe() {
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
  for (let c of [...durable.rows.values(), ...i].slice(0, x)) rows[c.slug] = {
    trigger_id: c.triggerId,
    since: c.since,
    events: [...c.events],
    ...(c.unreleased !== void 0 && c.unreleased.length > 0 && {
      unreleased: [...c.unreleased]
    })
  };
  let stopped = {},
    s = [...e.commentMonitorIntent.bySlug.entries()].filter(([, c]) => c.state === "stopped").sort(([, c], [, h]) => h.writtenAtMs - c.writtenAtMs).slice(0, x);
  for (let [c, h] of s) stopped[c] = {
    at_ms: h.writtenAtMs
  };
  let orphans = L([...durable.orphanTriggers, ...r]).slice(0, F),
    artifact_durable_watches = durable.rows.size + i.length === 0 && s.length === 0 && orphans.length === 0 ? null : {
      v: 1,
      rows: rows,
      stopped: stopped,
      ...(orphans.length > 0 && {
        orphans: orphans
      })
    },
    m = b(artifact_durable_watches);
  if (m === durable.registryPublished) return;
  durable.registryPublished = m, durable.registrySink({
    artifact_durable_watches: artifact_durable_watches
  });
}
function cno(e) {
  if (e === void 0 || e === null) return null;
  let t = at(),
    n = 0,
    rows_2 = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success) for (let [slug, c] of B(r.data.rows)) {
    let h = t.row.safeParse(c);
    if (!Bn.test(slug) || !h.success) {
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
    if (!Bn.test(m)) {
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
  return Object.keys(e).slice(0, x).map(item => [item, e[item]]);
}
function p7(e) {
  let {
      live: live
    } = ee(),
    n = live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0 || live.inFlightWiredIntent.has(e);
}
var R = "\x00unwritten",
  G = 256,
  H = 32,
  O = 64,
  dt = f(() => {
    let writtenAtMs = E().refine(Number.isFinite),
      record = u({
        state: z(["armed", "stopped"]),
        writtenAtMs: writtenAtMs,
        title: o().min(1).max(G).optional(),
        holder: o().optional().transform(i => i === void 0 ? void 0 : "bg"),
        holderPid: E().int().positive().optional().catch(void 0),
        holderProcStart: o().min(1).max(64).optional().catch(void 0),
        holderProcStartFt: o().min(1).max(64).optional().catch(void 0),
        holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(void 0),
        holderPidSpace: o().min(1).max(160).optional().catch(void 0)
      }),
      envelope = u({
        type: A("artifact-comment-monitor"),
        v: A(1),
        sessionId: o(),
        artifacts: fe(o(), ae()),
        crossLineMerged: A(!0).optional().catch(void 0),
        tailTorn: A(!0).optional().catch(void 0)
      });
    return {
      record: record,
      envelope: envelope
    };
  });
function K(e) {
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
  let token = ZRe.token;
  if (token === void 0) return Dv(), {};
  let t = r2();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(J(t))) return {};
  let {
    procStart: n,
    procStartFt: i
  } = oY(token);
  return K({
    holderPid: process.pid,
    holderJob: J(t),
    holderProcStart: n,
    holderProcStartFt: i,
    holderPidSpace: WRe().slice(0, 160)
  });
}
function _lr() {
  return Dv();
}
function B3t(e, t) {
  let n = dt(),
    i = n.envelope.safeParse(e);
  if (!i.success) return p("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (i.data.sessionId !== Y()) return p("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (i.data.crossLineMerged === !0) t?.onLossy?.();
  let r = i.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map(),
    s = 0,
    l = 0,
    g = 0;
  for (let [m, c] of Object.entries(i.data.artifacts)) {
    if (l++ >= 2 * O) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(c);
    if (!Bn.test(m)) {
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
    if (h.data.state === "armed" && g++ >= O) {
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
        ...(r ? {} : K(h.data))
      })
    });
  }
  if (s > 0) p("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function mvt(e) {
  let t = k(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let {
    excludeSlug: excludeSlug
  } = e;
  if (excludeSlug !== void 0) n.delete(excludeSlug);
  return v(), n;
}
function j3t() {
  return ee().commentMonitorIntent.tornStops;
}
function blr() {
  return ee().commentMonitorIntent.storageV5;
}
function pG(e) {
  k(e?.storageV5);
}
function dno(e, t) {
  if (e === void 0 && !WTe()) return;
  let commentMonitorIntent = ee().commentMonitorIntent;
  commentMonitorIntent.earlySeed = e, commentMonitorIntent.adoptPendingFor = Y(), k(t?.storageV5);
}
function W3t(e, t) {
  let n = k(t?.storageV5);
  if (ee().durable.stopLatches.isStopped(e)) return;
  let title_2 = t?.title,
    r = title_2 !== void 0 && title_2.length >= 1 && title_2.length <= G,
    title_3 = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let writtenAtMs_3 = Date.now(),
    l = nc() ? {
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
  }), tt(n, e), v(), l !== void 0 && l.holderPid === void 0) ct(e, writtenAtMs_3);
}
function ct(e, t) {
  Dv().then(() => {
    if (!WTe() || !nc()) return;
    let commentMonitorIntent_2 = ee().commentMonitorIntent,
      i = commentMonitorIntent_2.bySlug.get(e);
    if (commentMonitorIntent_2.sid !== Y() || i?.state !== "armed" || i.holder !== "bg" || i.holderPid !== void 0 || i.writtenAtMs !== t) return;
    let r = Z();
    if (r.holderPid === void 0) return;
    commentMonitorIntent_2.bySlug.set(e, {
      ...i,
      ...r
    }), v();
  }).catch(() => {
    return;
  });
}
function hze(e, t) {
  let n = k(t?.storageV5),
    i = n.bySlug.get(e);
  n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...(i?.title !== void 0 && {
      title: i.title
    })
  }), v({
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
    }, P(r, d.path, d.line, {
      durableNow: !0
    });
  }
}
function uno(e, t) {
  return k(t?.storageV5).bySlug.get(e)?.state;
}
function kOe(e, t) {
  let n = k(t?.storageV5),
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
  if (i) v({
    durableNow: !0
  });
  for (let [s, l] of n.parked) {
    let g = !1;
    for (let m of r) if (l.traveling?.has(m) && l.line[m]?.state === "armed") delete l.line[m], l.traveling.delete(m), g = !0;
    if (g) {
      if (P(s, l.path, l.line, {
        durableNow: !0
      }), !Object.values(l.line).some(item => item.state === "armed")) n.parked.delete(s);
    }
  }
}
function z3t(e, t) {
  let n = k(t?.storageV5),
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
  v();
}
function pno(e) {
  let t = k(e?.storageV5),
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
  if (r) v({
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
    if (l) P(d, s.path, s.line, {
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
  if (sid === null || sid === Y()) {
    commentMonitorIntent_3.leftWith = null;
    return;
  }
  let traveling = new Set();
  for (let [i, r] of commentMonitorIntent_3.bySlug) if (r.state === "armed" && p7(i)) traveling.add(i);
  commentMonitorIntent_3.leftWith = {
    sid: sid,
    traveling: traveling,
    unwritten: !commentMonitorIntent_3.onFile && !lDe(sid) && commentMonitorIntent_3.adoptPendingFor !== sid,
    inWindow: commentMonitorIntent_3.adoptPendingFor === sid
  };
}
function _() {
  let commentMonitorIntent_4 = ee().commentMonitorIntent;
  if (!lDe(Y())) return;
  for (let [t, n] of commentMonitorIntent_4.parked) {
    if (n.traveling === void 0 || t === Y()) continue;
    let i = !1;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") delete n.line[r], i = !0;
    if (n.traveling = void 0, i) P(t, n.path, n.line);
    if (!Object.values(n.line).some(item => item.state === "armed")) commentMonitorIntent_4.parked.delete(t);
  }
}
function N(e, t) {
  if (lDe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || _c() !== null;
}
function q(e, path, n, i, r) {
  if (path === null) return;
  let commentMonitorIntent_5 = ee().commentMonitorIntent,
    s = {
      path: path,
      line: Q(e, n)
    };
  commentMonitorIntent_5.pendingLines.set(e, s), lZt(V), commentMonitorIntent_5.writeChain = commentMonitorIntent_5.writeChain.then(async () => {
    if (await ru().catch(() => {}), commentMonitorIntent_5.pendingLines.get(e) !== s) return;
    if (commentMonitorIntent_5.exitStamped) return;
    if (commentMonitorIntent_5.pendingLines.delete(e), !i && Yve() === r) return;
    if (e === commentMonitorIntent_5.sid) {
      commentMonitorIntent_5.lastWritten = R, v();
      return;
    }
    P(e, path, n);
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
    return traveling_2 === void 0 ? artifacts : pa(artifacts, (d, s) => d.state === "armed" && traveling_2.has(s));
  }
  if (i?.leftInWindow === !0) return j(commentMonitorIntent_6, {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: sessionId,
    artifacts: artifacts
  }).artifacts;
  return artifacts;
}
function P(sessionId_2, path_2, n, i) {
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
  if (commentMonitorIntent_7.pendingLines.set(sessionId_2, g), lZt(V), i?.durableNow === !0) pZt(l, path_2, T(l));
  commentMonitorIntent_7.writeChain = commentMonitorIntent_7.writeChain.then(async () => {
    if (await ru().catch(() => {}), commentMonitorIntent_7.exitStamped) return;
    if (sessionId_2 === commentMonitorIntent_7.sid) {
      if (commentMonitorIntent_7.pendingLines.get(sessionId_2) === g) commentMonitorIntent_7.pendingLines.delete(sessionId_2);
      commentMonitorIntent_7.lastWritten = R, v();
      return;
    }
    if (await ov(path_2, l, storageV5, {
      onlyIfExists: !0,
      tornTailEntry: T(l)
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
function fno(e, t) {
  tt(k(t?.storageV5), e);
}
function tt(e, t) {
  let n = !1;
  for (let [i, r] of e.parked) {
    if (i === Y() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set()).add(t), n = !0;
  }
  if (n) _();
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
      e.lastWritten = R, n = !0;
      continue;
    }
    if (e.pendingLines.has(i)) continue;
    let s = e.parked.get(i);
    P(i, s?.path ?? path_3, s?.line ?? line);
  }
  if (n) v();
}
function k(e) {
  let commentMonitorIntent_8 = ee().commentMonitorIntent;
  if (e !== void 0) commentMonitorIntent_8.storageV5 = e;
  let n = Y(),
    i = !1,
    r = !1;
  if (commentMonitorIntent_8.sid !== n) {
    let s = commentMonitorIntent_8.leftWith !== null && commentMonitorIntent_8.leftWith.sid === commentMonitorIntent_8.sid ? commentMonitorIntent_8.leftWith : null,
      l = S => s !== null ? s.traveling.has(S) : p7(S);
    commentMonitorIntent_8.leftWith = null;
    let line_2 = I(commentMonitorIntent_8),
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
      let M = commentMonitorIntent_8.forgottenAt.get(S);
      if (w.state === "armed" && M !== void 0 && w.writtenAtMs <= M && !p7(S)) {
        r = !0;
        continue;
      }
      let y = D(commentMonitorIntent_8.bySlug.get(S), w);
      if (y.state === "armed" && stopLatches_2.isStopped(S)) y = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(y.title !== void 0 && {
          title: y.title
        })
      };
      if (commentMonitorIntent_8.bySlug.set(S, y), y.state === "stopped") stopLatches_2.confirmStop(S);
    }
    commentMonitorIntent_8.parked.delete(n);
    for (let S of [commentMonitorIntent_8.owedLines.get(n), commentMonitorIntent_8.pendingLines.get(n)]) for (let [w, M] of Object.entries(S?.line ?? {})) {
      if (M.state !== "stopped") continue;
      let y = D(commentMonitorIntent_8.bySlug.get(w), M);
      if (commentMonitorIntent_8.bySlug.set(w, y), y.state === "stopped") stopLatches_2.confirmStop(w);
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
        P(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([y, W]) => W.state !== "armed" ? [[y, W]] : w.traveling?.has(y) ? [] : [[y, {
          state: "stopped",
          writtenAtMs: writtenAtMs_6,
          ...(W.title !== void 0 && {
            title: W.title
          })
        }]])));
      }
    }
    if (commentMonitorIntent_8.sid !== null && commentMonitorIntent_8.wroteCurrentLine) q(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, commentMonitorIntent_8.lastWritten === R, commentMonitorIntent_8.failureSeqAtWrite);else if (commentMonitorIntent_8.sid !== null && s?.inWindow === !0 && nt(commentMonitorIntent_8, line_2)) q(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, !0, commentMonitorIntent_8.failureSeqAtWrite);
    if (_(), i = [...commentMonitorIntent_8.bySlug.values()].some(item => item.state === "armed"), commentMonitorIntent_8.sid = n, commentMonitorIntent_8.adoptPendingFor !== n) commentMonitorIntent_8.adoptPendingFor = null;
    commentMonitorIntent_8.lastWritten = r ? R : null, commentMonitorIntent_8.wroteCurrentLine = !1, commentMonitorIntent_8.pendingRestore = null, commentMonitorIntent_8.transcriptPath = null, commentMonitorIntent_8.tornStops.clear(), commentMonitorIntent_8.onFile = !1;
  }
  if (!commentMonitorIntent_8.onFile && lDe(n)) commentMonitorIntent_8.onFile = !0;
  if (commentMonitorIntent_8.transcriptPath = N(commentMonitorIntent_8, n) ? Rd() : _f(n), commentMonitorIntent_8.unsubscribeMaterialized === void 0) commentMonitorIntent_8.unsubscribeMaterialized = ySr(() => {
    if (commentMonitorIntent_8.sid !== null && lDe(commentMonitorIntent_8.sid)) commentMonitorIntent_8.onFile = !0;
    _();
  });
  if (commentMonitorIntent_8.unsubscribeSwitch === void 0) commentMonitorIntent_8.unregisterExitDrain = hSr(() => (X(commentMonitorIntent_8), commentMonitorIntent_8.writeChain)), lZt(V), commentMonitorIntent_8.unsubscribeSwitch = Qd((s, l) => {
    if (l === "cd" && commentMonitorIntent_8.sid === s) commentMonitorIntent_8.transcriptPath = _f(s);
    if (lt(l)) ut();
    if (l === "clear") queueMicrotask(v);
  });
  let d = commentMonitorIntent_8.earlySeed ?? XSr();
  if (commentMonitorIntent_8.earlySeed = void 0, d !== void 0) {
    let s = !1,
      l = B3t(d, {
        onLossy: () => {
          s = !0;
        },
        onTornStop: g => {
          commentMonitorIntent_8.tornStops.add(g);
        }
      });
    if (l !== null) {
      if (d.tailTorn === !0) xSr(commentMonitorIntent_8.transcriptPath ?? void 0);
      let {
          stopLatches: stopLatches_3
        } = ee().durable,
        m = new Map();
      for (let [c, h] of l) {
        let S = commentMonitorIntent_8.forgottenAt.get(c);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !p7(c)) {
          s = !0;
          continue;
        }
        let w = commentMonitorIntent_8.bySlug.get(c);
        if (commentMonitorIntent_8.tornStops.has(c) && w?.state === "armed" && p7(c)) {
          commentMonitorIntent_8.tornStops.delete(c), m.set(c, w), s = !0;
          continue;
        }
        let M = D(w, h);
        if (commentMonitorIntent_8.bySlug.set(c, M), m.set(c, M), M.state === "stopped") stopLatches_3.confirmStop(c);
      }
      if (commentMonitorIntent_8.pendingRestore = m, !s && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = U(Object.fromEntries(l)), commentMonitorIntent_8.failureSeqAtWrite = Yve();else if (s && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = R;
      gpe();
    }
  }
  if (X(commentMonitorIntent_8), i || r) v();
  return commentMonitorIntent_8;
}
function D(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function I(e) {
  return Object.fromEntries([...e.bySlug.entries()].sort(([, t], [, n]) => Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, O));
}
function et() {
  let {
    commentMonitorIntent: commentMonitorIntent_9,
    wakes: wakes
  } = ee();
  if (!commentMonitorIntent_9.wroteCurrentLine || commentMonitorIntent_9.sid !== Y() || [...commentMonitorIntent_9.bySlug.keys()].some(item => wakes.yieldedSlugs.has(item))) return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: Y(),
    artifacts: I(commentMonitorIntent_9)
  };
}
function V() {
  let commentMonitorIntent_10 = ee().commentMonitorIntent,
    sessionId_3 = Y(),
    n,
    i = () => nt(commentMonitorIntent_10, I(commentMonitorIntent_10)),
    r = !commentMonitorIntent_10.exitStamped && commentMonitorIntent_10.sid === sessionId_3;
  if (r && lDe(sessionId_3)) {
    if (commentMonitorIntent_10.wroteCurrentLine || i() || commentMonitorIntent_10.owedLines.has(sessionId_3) || commentMonitorIntent_10.pendingLines.has(sessionId_3)) _(), commentMonitorIntent_10.wroteCurrentLine = !0, EZ(et);
  } else if (r && N(commentMonitorIntent_10, sessionId_3) && commentMonitorIntent_10.transcriptPath !== null && i()) {
    let entry = j(commentMonitorIntent_10, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_3,
      artifacts: I(commentMonitorIntent_10)
    });
    n = {
      path: commentMonitorIntent_10.transcriptPath,
      entry: entry,
      tornTailEntry: T(entry)
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
      tornTailEntry: T(entry_2)
    };
  });
  return n === void 0 ? d : [...d, n];
}
function T(e) {
  let writtenAtMs_7 = Date.now();
  return {
    ...e,
    artifacts: io(e.artifacts, n => n.state === "armed" && n.holder === void 0 ? {
      state: "stopped",
      writtenAtMs: writtenAtMs_7,
      ...(n.title !== void 0 && {
        title: n.title
      })
    } : n)
  };
}
function j(e, t) {
  let n = Y(),
    i = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let s of d.traveling ?? []) if (d.line[s]?.state === "armed") i.add(s);
  }
  if (i.size === 0) return t;
  return {
    ...t,
    artifacts: pa(t.artifacts, (r, d) => r.state === "armed" && i.has(d))
  };
}
function nt(e, t) {
  return e.lastWritten !== U(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function U(e) {
  return b(Object.entries(e).map(([t, n]) => [t, n.state, n.writtenAtMs, n.title ?? null, n.holder ?? null, n.holderPid ?? null, n.holderProcStart ?? n.holderProcStartFt ?? null, n.holderJob ?? null, n.holderPidSpace ?? null]).sort());
}
function v(e) {
  let t = k();
  _(), gpe();
  let artifacts_2 = I(t),
    i = U(artifacts_2);
  if (i === t.lastWritten && Yve() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = Yve(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = i;
    return;
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: Y(),
    artifacts: artifacts_2
  };
  if (N(t, Y())) {
    if (t.lastWritten = R, e?.durableNow === !0 && t.transcriptPath !== null) {
      let d = j(t, r);
      pZt(d, t.transcriptPath, T(d));
    }
    return;
  }
  if (t.lastWritten = i, t.wroteCurrentLine = !0, EZ(et), e?.durableNow === !0) pZt(r);
  YSr(r, t.storageV5).catch(() => {
    if (t.lastWritten === i) t.lastWritten = R;
    p("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export { ano, lno, gpe, cno, p7, _lr, B3t, mvt, j3t, blr, pG, dno, W3t, hze, uno, kOe, z3t, pno, fno };