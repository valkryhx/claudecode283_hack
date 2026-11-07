// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { z, rf } from "B:/~BUN/root/chunk-game8aqv.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Fd, tm, lq, MEe, dDe, bpr, cDe, hss, tu, Epr, Mss, Tx, ris, ois } from "B:/~BUN/root/chunk-27h4st9h.js";
import { wc, aH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Yi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { vSe, Rw, ape } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { hte } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { te, gD } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { bp } from "B:/~BUN/root/chunk-ke150ry1.js";
import { o, E, oe, C, u, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { basename as q } from "path";
var ot = {
    published: "published",
    comment: "comment"
  },
  x = 64,
  D = 16,
  it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  st = "",
  at = p(() => {
    let rowsEnvelope = u({
        v: T(1),
        rows: me(o(), oe())
      }),
      newerEnvelope = u({
        v: E().gt(1)
      }),
      stopsEnvelope = u({
        stopped: me(o(), oe())
      }),
      s = B(ot),
      trigger_id = o().refine(g => Nt(g) !== null),
      orphansEnvelope = u({
        orphans: C(oe()).transform(g => g.slice(0, D).flatMap(item => {
          let l = trigger_id.safeParse(item);
          return l.success ? [l.data] : [];
        }))
      }),
      row = u({
        trigger_id: trigger_id,
        since: o().regex(it),
        events: C(o()).max(16).transform(g => L(g).flatMap(item => {
          let l = s.safeParse(item);
          return l.success ? [l.data] : [];
        })).refine(g => g.length > 0),
        unreleased: C(oe()).catch([]).transform(g => g.slice(0, D).flatMap(item => {
          let l = trigger_id.safeParse(item);
          return l.success ? [l.data] : [];
        })),
        claude_doc: T(!0).optional().catch(void 0)
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
function xsi(e) {
  te().durable.registrySink = e;
}
function Psi() {
  te().durable.registryPublished = st;
}
function yBe() {
  if (!i.CLAUDE_CODE_REMOTE) return;
  let e = te(),
    {
      durable: durable
    } = e;
  if (durable.registrySink === null) return;
  let rows = {},
    s = [],
    r = new Set();
  for (let l of durable.pendingRestoredRows.values()) {
    let h = durable.rows.get(l.slug);
    if (h === void 0 && !durable.unwatchedSlugs.has(l.slug)) {
      s.push(l);
      continue;
    }
    for (let S of [l.triggerId, ...(l.unreleased ?? [])]) if (S !== h?.triggerId) r.add(S);
  }
  for (let l of [...durable.rows.values(), ...s].slice(0, x)) rows[l.slug] = {
    trigger_id: l.triggerId,
    since: l.since,
    events: [...l.events],
    ...(l.unreleased !== void 0 && l.unreleased.length > 0 && {
      unreleased: [...l.unreleased]
    }),
    ...((l.claudeDoc || durable.pendingRestoredRows.get(l.slug)?.claudeDoc) && {
      claude_doc: !0
    })
  };
  let stopped = {},
    a = [...e.commentMonitorIntent.bySlug.entries()].filter(([, l]) => l.state === "stopped").sort(([, l], [, h]) => h.writtenAtMs - l.writtenAtMs).slice(0, x);
  for (let [l, h] of a) stopped[l] = {
    at_ms: h.writtenAtMs
  };
  let orphans = L([...durable.orphanTriggers, ...r]).slice(0, D),
    artifact_durable_watches = durable.rows.size + s.length === 0 && a.length === 0 && orphans.length === 0 ? null : {
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
function Osi(e) {
  if (e === void 0 || e === null) return null;
  let t = at(),
    n = 0,
    rows_2 = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success) for (let [slug, l] of J(r.data.rows)) {
    let h = t.row.safeParse(l);
    if (!hr.test(slug) || !h.success) {
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
      }),
      ...(h.data.claude_doc && {
        claudeDoc: !0
      })
    });
  }
  let stopped_2 = new Map(),
    a = t.stopsEnvelope.safeParse(e);
  if (a.success) for (let [m, l] of J(a.data.stopped)) {
    if (!hr.test(m)) {
      n++;
      continue;
    }
    let h = t.stop.safeParse(l);
    if (stopped_2.set(m, h.success ? h.data.at_ms : Date.now()), !h.success) n++;
  }
  if (!r.success || !a.success) c("artifact_durable_subscribe", a.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid");else if (n > 0) c("artifact_durable_subscribe", "registry_entry_invalid");
  let f = t.orphansEnvelope.safeParse(e),
    orphans_2 = f.success ? f.data.orphans : [];
  return {
    rows: rows_2,
    stopped: stopped_2,
    orphans: orphans_2
  };
}
function J(e) {
  return Object.keys(e).slice(0, x).map(item => [item, e[item]]);
}
function Wke(e) {
  let {
      live: live
    } = te(),
    n = live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0 || live.inFlightWiredIntent.has(e);
}
var A = "\x00unwritten",
  H = 256,
  K = 32,
  O = 64,
  dt = p(() => {
    let writtenAtMs = E().refine(Number.isFinite),
      record = u({
        state: B(["armed", "stopped"]),
        writtenAtMs: writtenAtMs,
        title: o().min(1).max(H).optional(),
        holder: o().optional().transform(s => s === void 0 ? void 0 : "bg"),
        holderPid: E().int().positive().optional().catch(void 0),
        holderProcStart: o().min(1).max(64).optional().catch(void 0),
        holderProcStartFt: o().min(1).max(64).optional().catch(void 0),
        holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(void 0),
        holderPidSpace: o().min(1).max(160).optional().catch(void 0)
      }),
      envelope = u({
        type: T("artifact-comment-monitor"),
        v: T(1),
        sessionId: o(),
        artifacts: me(o(), oe()),
        crossLineMerged: T(!0).optional().catch(void 0),
        tailTorn: T(!0).optional().catch(void 0)
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
  let token = vSe.token;
  if (token === void 0) return Rw(), {};
  let t = aH();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(q(t))) return {};
  let {
    procStart: n,
    procStartFt: s
  } = ape(token);
  return Y({
    holderPid: process.pid,
    holderJob: q(t),
    holderProcStart: n,
    holderProcStartFt: s,
    holderPidSpace: hte().slice(0, 160)
  });
}
function NKo() {
  return Rw();
}
function lZn(e, t) {
  let n = dt(),
    s = n.envelope.safeParse(e);
  if (!s.success) return c("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (s.data.sessionId !== z()) return c("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (s.data.crossLineMerged === !0) t?.onLossy?.();
  let r = s.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map(),
    a = 0,
    f = 0,
    g = 0;
  for (let [m, l] of Object.entries(s.data.artifacts)) {
    if (f++ >= 2 * O) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(l);
    if (!hr.test(m)) {
      a++, t?.onLossy?.();
      continue;
    }
    if (!h.success) {
      if (a++, t?.onLossy?.(), typeof l === "object" && l !== null && l.state === "stopped") d.set(m, {
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
        ...(r ? {} : Y(h.data))
      })
    });
  }
  if (a > 0) c("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function Pbn(e) {
  let t = v(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let {
    excludeSlug: excludeSlug
  } = e;
  if (excludeSlug !== void 0) n.delete(excludeSlug);
  return M(), n;
}
function dZn() {
  return te().commentMonitorIntent.tornStops;
}
function FKo() {
  return te().commentMonitorIntent.storageV5;
}
function y8(e) {
  v(e?.storageV5);
}
function Isi(e, t) {
  if (e === void 0 && !gD()) return;
  let commentMonitorIntent = te().commentMonitorIntent;
  commentMonitorIntent.earlySeed = e, commentMonitorIntent.adoptPendingFor = z(), v(t?.storageV5);
}
function Msi(e, t) {
  let n = v(t?.storageV5);
  if (te().durable.stopLatches.isStopped(e)) return;
  let title_2 = t?.title,
    r = title_2 !== void 0 && title_2.length >= 1 && title_2.length <= H,
    title_3 = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let writtenAtMs_3 = Date.now(),
    f = wc() ? {
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
    ...f
  }), tt(n, e), M(), f !== void 0 && f.holderPid === void 0) ct(e, writtenAtMs_3);
}
function ct(e, t) {
  Rw().then(() => {
    if (!gD() || !wc()) return;
    let commentMonitorIntent_2 = te().commentMonitorIntent,
      s = commentMonitorIntent_2.bySlug.get(e);
    if (commentMonitorIntent_2.sid !== z() || s?.state !== "armed" || s.holder !== "bg" || s.holderPid !== void 0 || s.writtenAtMs !== t) return;
    let r = Z();
    if (r.holderPid === void 0) return;
    commentMonitorIntent_2.bySlug.set(e, {
      ...s,
      ...r
    }), M();
  }).catch(() => {
    return;
  });
}
function mCt(e, t) {
  let n = v(t?.storageV5),
    s = n.bySlug.get(e);
  n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...(s?.title !== void 0 && {
      title: s.title
    })
  }), M({
    durableNow: !0
  });
  for (let [r, d] of n.parked) {
    let a = d.line[e];
    if (a?.state === "armed") d.line[e] = {
      state: "stopped",
      writtenAtMs: Date.now(),
      ...(a.title !== void 0 && {
        title: a.title
      })
    }, k(r, d.path, d.line, {
      durableNow: !0
    });
  }
}
function Dsi(e, t) {
  return v(t?.storageV5).bySlug.get(e)?.state;
}
function xit(e, t) {
  let n = v(t?.storageV5),
    s = !1,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let a of r) {
    if (s = n.bySlug.delete(a) || s, n.forgottenAt.delete(a), n.forgottenAt.size >= ft) {
      let f = n.forgottenAt.keys().next().value;
      if (f !== void 0) n.forgottenAt.delete(f);
    }
    n.forgottenAt.set(a, d);
  }
  if (s) M({
    durableNow: !0
  });
  for (let [a, f] of n.parked) {
    let g = !1;
    for (let m of r) if (f.traveling?.has(m) && f.line[m]?.state === "armed") delete f.line[m], f.traveling.delete(m), g = !0;
    if (g) {
      if (k(a, f.path, f.line, {
        durableNow: !0
      }), !Object.values(f.line).some(item => item.state === "armed")) n.parked.delete(a);
    }
  }
}
function cZn(e, t) {
  let n = v(t?.storageV5),
    {
      stopLatches: stopLatches
    } = te().durable;
  for (let [r, writtenAtMs_4] of e) {
    if (stopLatches.wasClearedByRewatch(r)) continue;
    let a = n.bySlug.get(r);
    if (a === void 0 || a.state === "armed" || a.writtenAtMs <= writtenAtMs_4) n.bySlug.set(r, {
      state: "stopped",
      writtenAtMs: writtenAtMs_4,
      ...(a?.title !== void 0 && {
        title: a.title
      })
    });
    stopLatches.reaffirmStop(r);
  }
  M();
}
function Lsi(e) {
  let t = v(e?.storageV5),
    {
      yieldedSlugs: yieldedSlugs
    } = te().wakes,
    writtenAtMs_5 = Date.now(),
    r = !1;
  for (let [d, a] of t.bySlug) if (a.state === "armed" && !yieldedSlugs.has(d)) t.bySlug.set(d, {
    state: "stopped",
    writtenAtMs: writtenAtMs_5,
    ...(a.title !== void 0 && {
      title: a.title
    })
  }), r = !0;
  if (r) M({
    durableNow: !0
  });
  for (let [d, a] of t.parked) {
    let f = !1;
    for (let [g, m] of Object.entries(a.line)) if (m.state === "armed") a.line[g] = {
      state: "stopped",
      writtenAtMs: writtenAtMs_5,
      ...(m.title !== void 0 && {
        title: m.title
      })
    }, f = !0;
    if (f) k(d, a.path, a.line, {
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
  let commentMonitorIntent_3 = te().commentMonitorIntent,
    sid = commentMonitorIntent_3.sid;
  if (sid === null || sid === z()) {
    commentMonitorIntent_3.leftWith = null;
    return;
  }
  let traveling = new Set();
  for (let [s, r] of commentMonitorIntent_3.bySlug) if (r.state === "armed" && Wke(s)) traveling.add(s);
  commentMonitorIntent_3.leftWith = {
    sid: sid,
    traveling: traveling,
    unwritten: !commentMonitorIntent_3.onFile && !cDe(sid) && commentMonitorIntent_3.adoptPendingFor !== sid,
    inWindow: commentMonitorIntent_3.adoptPendingFor === sid
  };
}
function R() {
  let commentMonitorIntent_4 = te().commentMonitorIntent;
  if (!cDe(z())) return;
  for (let [t, n] of commentMonitorIntent_4.parked) {
    if (n.traveling === void 0 || t === z()) continue;
    let s = !1;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") delete n.line[r], s = !0;
    if (n.traveling = void 0, s) k(t, n.path, n.line);
    if (!Object.values(n.line).some(item => item.state === "armed")) commentMonitorIntent_4.parked.delete(t);
  }
}
function N(e, t) {
  if (cDe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || Fd() !== null;
}
function X(e, path, n, s, r) {
  if (path === null) return;
  let commentMonitorIntent_5 = te().commentMonitorIntent,
    a = {
      path: path,
      line: Q(e, n)
    };
  commentMonitorIntent_5.pendingLines.set(e, a), bpr(V), commentMonitorIntent_5.writeChain = commentMonitorIntent_5.writeChain.then(async () => {
    if (await tu().catch(() => {}), commentMonitorIntent_5.pendingLines.get(e) !== a) return;
    if (commentMonitorIntent_5.exitStamped) return;
    if (commentMonitorIntent_5.pendingLines.delete(e), !s && lq() === r) return;
    if (e === commentMonitorIntent_5.sid) {
      commentMonitorIntent_5.lastWritten = A, M();
      return;
    }
    k(e, path, n);
  }), commentMonitorIntent_5.writeChain = commentMonitorIntent_5.writeChain.catch(() => {});
}
var ft = 1024;
function Q(sessionId, artifacts) {
  let commentMonitorIntent_6 = te().commentMonitorIntent,
    s = commentMonitorIntent_6.parked.get(sessionId);
  if (s?.unwritten === !0) {
    let {
      traveling: traveling_2
    } = s;
    return traveling_2 === void 0 ? artifacts : Yi(artifacts, (d, a) => d.state === "armed" && traveling_2.has(a));
  }
  if (s?.leftInWindow === !0) return j(commentMonitorIntent_6, {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: sessionId,
    artifacts: artifacts
  }).artifacts;
  return artifacts;
}
function k(sessionId_2, path_2, n, s) {
  if (path_2 === null) return;
  let commentMonitorIntent_7 = te().commentMonitorIntent,
    {
      storageV5: storageV5
    } = commentMonitorIntent_7,
    a = Q(sessionId_2, {
      ...n
    }),
    f = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_2,
      artifacts: a
    };
  commentMonitorIntent_7.owedLines.delete(sessionId_2);
  let g = {
    path: path_2,
    line: a
  };
  if (commentMonitorIntent_7.pendingLines.set(sessionId_2, g), bpr(V), s?.durableNow === !0) Epr(f, path_2, I(f));
  commentMonitorIntent_7.writeChain = commentMonitorIntent_7.writeChain.then(async () => {
    if (await tu().catch(() => {}), commentMonitorIntent_7.exitStamped) return;
    if (sessionId_2 === commentMonitorIntent_7.sid) {
      if (commentMonitorIntent_7.pendingLines.get(sessionId_2) === g) commentMonitorIntent_7.pendingLines.delete(sessionId_2);
      commentMonitorIntent_7.lastWritten = A, M();
      return;
    }
    if (await Tx(path_2, f, storageV5, {
      onlyIfExists: !0,
      tornTailEntry: I(f)
    }), commentMonitorIntent_7.pendingLines.get(sessionId_2) === g) commentMonitorIntent_7.pendingLines.delete(sessionId_2);
  }).catch(() => {
    if (commentMonitorIntent_7.pendingLines.get(sessionId_2) !== g) {
      c("artifact_live_subscribe", "comment_monitor_intent_write_failed");
      return;
    }
    if (commentMonitorIntent_7.pendingLines.delete(sessionId_2), commentMonitorIntent_7.owedLines.size >= 2 * K) {
      let m = commentMonitorIntent_7.owedLines.keys().next().value;
      if (m !== void 0) commentMonitorIntent_7.owedLines.delete(m);
    }
    commentMonitorIntent_7.owedLines.set(sessionId_2, {
      path: path_2,
      line: a
    }), c("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
function HKo(e, t) {
  tt(v(t?.storageV5), e);
}
function tt(e, t) {
  let n = !1;
  for (let [s, r] of e.parked) {
    if (s === z() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set()).add(t), n = !0;
  }
  if (n) R();
}
function G(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = !1;
  for (let [s, {
    path: path_3,
    line: line
  }] of t) {
    if (s === e.sid) {
      e.lastWritten = A, n = !0;
      continue;
    }
    if (e.pendingLines.has(s)) continue;
    let a = e.parked.get(s);
    k(s, a?.path ?? path_3, a?.line ?? line);
  }
  if (n) M();
}
function v(e) {
  let commentMonitorIntent_8 = te().commentMonitorIntent;
  if (e !== void 0) commentMonitorIntent_8.storageV5 = e;
  let n = z(),
    s = !1,
    r = !1;
  if (commentMonitorIntent_8.sid !== n) {
    let a = commentMonitorIntent_8.leftWith !== null && commentMonitorIntent_8.leftWith.sid === commentMonitorIntent_8.sid ? commentMonitorIntent_8.leftWith : null,
      f = S => a !== null ? a.traveling.has(S) : Wke(S);
    commentMonitorIntent_8.leftWith = null;
    let line_2 = P(commentMonitorIntent_8),
      traveling_3 = new Set(),
      l = 0;
    for (let [S, w] of commentMonitorIntent_8.bySlug) {
      if (w.state !== "armed") continue;
      if (f(S)) traveling_3.add(S);else commentMonitorIntent_8.bySlug.delete(S), l++;
    }
    let {
      stopLatches: stopLatches_2
    } = te().durable;
    for (let [S, w] of Object.entries(commentMonitorIntent_8.parked.get(n)?.line ?? {})) {
      let y = commentMonitorIntent_8.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !Wke(S)) {
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
    if (commentMonitorIntent_8.sid !== null && (l > 0 || traveling_3.size > 0)) {
      commentMonitorIntent_8.parked.set(commentMonitorIntent_8.sid, {
        path: commentMonitorIntent_8.transcriptPath,
        line: line_2,
        ...(traveling_3.size > 0 && {
          traveling: traveling_3
        }),
        ...(a?.unwritten === !0 && {
          unwritten: !0
        }),
        ...(a?.inWindow === !0 && {
          leftInWindow: !0
        })
      });
      while (commentMonitorIntent_8.parked.size > K) {
        let [S, w] = commentMonitorIntent_8.parked.entries().next().value;
        commentMonitorIntent_8.parked.delete(S);
        let writtenAtMs_6 = Date.now();
        k(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, W]) => W.state !== "armed" ? [[b, W]] : w.traveling?.has(b) ? [] : [[b, {
          state: "stopped",
          writtenAtMs: writtenAtMs_6,
          ...(W.title !== void 0 && {
            title: W.title
          })
        }]])));
      }
    }
    if (commentMonitorIntent_8.sid !== null && commentMonitorIntent_8.wroteCurrentLine) X(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, commentMonitorIntent_8.lastWritten === A, commentMonitorIntent_8.failureSeqAtWrite);else if (commentMonitorIntent_8.sid !== null && a?.inWindow === !0 && nt(commentMonitorIntent_8, line_2)) X(commentMonitorIntent_8.sid, commentMonitorIntent_8.transcriptPath, line_2, !0, commentMonitorIntent_8.failureSeqAtWrite);
    if (R(), s = [...commentMonitorIntent_8.bySlug.values()].some(item => item.state === "armed"), commentMonitorIntent_8.sid = n, commentMonitorIntent_8.adoptPendingFor !== n) commentMonitorIntent_8.adoptPendingFor = null;
    commentMonitorIntent_8.lastWritten = r ? A : null, commentMonitorIntent_8.wroteCurrentLine = !1, commentMonitorIntent_8.pendingRestore = null, commentMonitorIntent_8.transcriptPath = null, commentMonitorIntent_8.tornStops.clear(), commentMonitorIntent_8.onFile = !1;
  }
  if (!commentMonitorIntent_8.onFile && cDe(n)) commentMonitorIntent_8.onFile = !0;
  if (commentMonitorIntent_8.transcriptPath = N(commentMonitorIntent_8, n) ? bp() : tm(n), commentMonitorIntent_8.unsubscribeMaterialized === void 0) commentMonitorIntent_8.unsubscribeMaterialized = hss(() => {
    if (commentMonitorIntent_8.sid !== null && cDe(commentMonitorIntent_8.sid)) commentMonitorIntent_8.onFile = !0;
    R();
  });
  if (commentMonitorIntent_8.unsubscribeSwitch === void 0) commentMonitorIntent_8.unregisterExitDrain = dDe(() => (G(commentMonitorIntent_8), commentMonitorIntent_8.writeChain)), bpr(V), commentMonitorIntent_8.unsubscribeSwitch = rf((a, f) => {
    if (f === "cd" && commentMonitorIntent_8.sid === a) commentMonitorIntent_8.transcriptPath = tm(a);
    if (lt(f)) ut();
    if (f === "clear") queueMicrotask(M);
  });
  let d = commentMonitorIntent_8.earlySeed ?? ois();
  if (commentMonitorIntent_8.earlySeed = void 0, d !== void 0) {
    let a = !1,
      f = lZn(d, {
        onLossy: () => {
          a = !0;
        },
        onTornStop: g => {
          commentMonitorIntent_8.tornStops.add(g);
        }
      });
    if (f !== null) {
      if (d.tailTorn === !0) Mss(commentMonitorIntent_8.transcriptPath ?? void 0);
      let {
          stopLatches: stopLatches_3
        } = te().durable,
        m = new Map();
      for (let [l, h] of f) {
        let S = commentMonitorIntent_8.forgottenAt.get(l);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !Wke(l)) {
          a = !0;
          continue;
        }
        let w = commentMonitorIntent_8.bySlug.get(l);
        if (commentMonitorIntent_8.tornStops.has(l) && w?.state === "armed" && Wke(l)) {
          commentMonitorIntent_8.tornStops.delete(l), m.set(l, w), a = !0;
          continue;
        }
        let y = F(w, h);
        if (commentMonitorIntent_8.bySlug.set(l, y), m.set(l, y), y.state === "stopped") stopLatches_3.confirmStop(l);
      }
      if (commentMonitorIntent_8.pendingRestore = m, !a && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = U(Object.fromEntries(f)), commentMonitorIntent_8.failureSeqAtWrite = lq();else if (a && commentMonitorIntent_8.lastWritten === null) commentMonitorIntent_8.lastWritten = A;
      yBe();
    }
  }
  if (G(commentMonitorIntent_8), s || r) M();
  return commentMonitorIntent_8;
}
function F(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function P(e) {
  return Object.fromEntries([...e.bySlug.entries()].sort(([, t], [, n]) => Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, O));
}
function et() {
  let {
    commentMonitorIntent: commentMonitorIntent_9,
    wakes: wakes
  } = te();
  if (!commentMonitorIntent_9.wroteCurrentLine || commentMonitorIntent_9.sid !== z() || [...commentMonitorIntent_9.bySlug.keys()].some(item => wakes.yieldedSlugs.has(item))) return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: z(),
    artifacts: P(commentMonitorIntent_9)
  };
}
function V() {
  let commentMonitorIntent_10 = te().commentMonitorIntent,
    sessionId_3 = z(),
    n,
    s = () => nt(commentMonitorIntent_10, P(commentMonitorIntent_10)),
    r = !commentMonitorIntent_10.exitStamped && commentMonitorIntent_10.sid === sessionId_3;
  if (r && cDe(sessionId_3)) {
    if (commentMonitorIntent_10.wroteCurrentLine || s() || commentMonitorIntent_10.owedLines.has(sessionId_3) || commentMonitorIntent_10.pendingLines.has(sessionId_3)) R(), commentMonitorIntent_10.wroteCurrentLine = !0, MEe(et);
  } else if (r && N(commentMonitorIntent_10, sessionId_3) && commentMonitorIntent_10.transcriptPath !== null && s()) {
    let entry = j(commentMonitorIntent_10, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: sessionId_3,
      artifacts: P(commentMonitorIntent_10)
    });
    n = {
      path: commentMonitorIntent_10.transcriptPath,
      entry: entry,
      tornTailEntry: I(entry)
    };
    for (let f of [commentMonitorIntent_10.owedLines, commentMonitorIntent_10.pendingLines]) if (f.get(sessionId_3)?.path === n.path) f.delete(sessionId_3);
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
    artifacts: Er(e.artifacts, n => n.state === "armed" && n.holder === void 0 ? {
      state: "stopped",
      writtenAtMs: writtenAtMs_7,
      ...(n.title !== void 0 && {
        title: n.title
      })
    } : n)
  };
}
function j(e, t) {
  let n = z(),
    s = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let a of d.traveling ?? []) if (d.line[a]?.state === "armed") s.add(a);
  }
  if (s.size === 0) return t;
  return {
    ...t,
    artifacts: Yi(t.artifacts, (r, d) => r.state === "armed" && s.has(d))
  };
}
function nt(e, t) {
  return e.lastWritten !== U(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function U(e) {
  return _(Object.entries(e).map(([t, n]) => [t, n.state, n.writtenAtMs, n.title ?? null, n.holder ?? null, n.holderPid ?? null, n.holderProcStart ?? n.holderProcStartFt ?? null, n.holderJob ?? null, n.holderPidSpace ?? null]).sort());
}
function M(e) {
  let t = v();
  R(), yBe();
  let artifacts_2 = P(t),
    s = U(artifacts_2);
  if (s === t.lastWritten && lq() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = lq(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = s;
    return;
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: z(),
    artifacts: artifacts_2
  };
  if (N(t, z())) {
    if (t.lastWritten = A, e?.durableNow === !0 && t.transcriptPath !== null) {
      let d = j(t, r);
      Epr(d, t.transcriptPath, I(d));
    }
    return;
  }
  if (t.lastWritten = s, t.wroteCurrentLine = !0, MEe(et), e?.durableNow === !0) Epr(r);
  ris(r, t.storageV5).catch(() => {
    if (t.lastWritten === s) t.lastWritten = A;
    c("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export { xsi, Psi, yBe, Osi, Wke, NKo, lZn, Pbn, dZn, FKo, y8, Isi, Msi, mCt, Dsi, xit, cZn, Lsi, HKo };