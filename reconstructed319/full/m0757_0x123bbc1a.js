// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  z,
  rf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  hr
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Fd,
  tm,
  lq,
  MEe,
  dDe,
  bpr,
  cDe,
  hss,
  tu,
  Epr,
  Mss,
  Tx,
  ris,
  ois
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  wc,
  aH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Yi
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Er
} from "B:/~BUN/root/chunk-pc24rkga.js";
import {
  vSe,
  Rw,
  ape
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  hte
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  te,
  gD
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  bp
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  o,
  E,
  oe,
  C,
  u,
  me,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  basename as q
} from "path";
var ot = {
    published: "published",
    comment: "comment"
  },
  x = 64,
  D = 16,
  it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  st = "",
  at = p(() => {
    let e = u({
        v: T(1),
        rows: me(o(), oe())
      }),
      t = u({
        v: E().gt(1)
      }),
      n = u({
        stopped: me(o(), oe())
      }),
      s = B(ot),
      r = o().refine((g) => Nt(g) !== null),
      d = u({
        orphans: C(oe()).transform((g) => g.slice(0, D).flatMap((m) => {
          let l = r.safeParse(m);
          return l.success ? [l.data] : []
        }))
      }),
      a = u({
        trigger_id: r,
        since: o().regex(it),
        events: C(o()).max(16).transform((g) => L(g).flatMap((m) => {
          let l = s.safeParse(m);
          return l.success ? [l.data] : []
        })).refine((g) => g.length > 0),
        unreleased: C(oe()).catch([]).transform((g) => g.slice(0, D).flatMap((m) => {
          let l = r.safeParse(m);
          return l.success ? [l.data] : []
        })),
        claude_doc: T(!0).optional().catch(void 0)
      }),
      f = u({
        at_ms: E().refine(Number.isFinite)
      });
    return {
      rowsEnvelope: e,
      newerEnvelope: t,
      stopsEnvelope: n,
      orphansEnvelope: d,
      row: a,
      stop: f
    }
  });

function xsi(e) {
  te().durable.registrySink = e
}

function Psi() {
  te().durable.registryPublished = st
}

function yBe() {
  if (!i.CLAUDE_CODE_REMOTE) return;
  let e = te(),
    {
      durable: t
    } = e;
  if (t.registrySink === null) return;
  let n = {},
    s = [],
    r = new Set;
  for (let l of t.pendingRestoredRows.values()) {
    let h = t.rows.get(l.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(l.slug)) {
      s.push(l);
      continue
    }
    for (let S of [l.triggerId, ...l.unreleased ?? []])
      if (S !== h?.triggerId) r.add(S)
  }
  for (let l of [...t.rows.values(), ...s].slice(0, x)) n[l.slug] = {
    trigger_id: l.triggerId,
    since: l.since,
    events: [...l.events],
    ...l.unreleased !== void 0 && l.unreleased.length > 0 && {
      unreleased: [...l.unreleased]
    },
    ...(l.claudeDoc || t.pendingRestoredRows.get(l.slug)?.claudeDoc) && {
      claude_doc: !0
    }
  };
  let d = {},
    a = [...e.commentMonitorIntent.bySlug.entries()].filter(([, l]) => l.state === "stopped").sort(([, l], [, h]) => h.writtenAtMs - l.writtenAtMs).slice(0, x);
  for (let [l, h] of a) d[l] = {
    at_ms: h.writtenAtMs
  };
  let f = L([...t.orphanTriggers, ...r]).slice(0, D),
    g = t.rows.size + s.length === 0 && a.length === 0 && f.length === 0 ? null : {
      v: 1,
      rows: n,
      stopped: d,
      ...f.length > 0 && {
        orphans: f
      }
    },
    m = _(g);
  if (m === t.registryPublished) return;
  t.registryPublished = m, t.registrySink({
    artifact_durable_watches: g
  })
}

function Osi(e) {
  if (e === void 0 || e === null) return null;
  let t = at(),
    n = 0,
    s = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success)
    for (let [m, l] of J(r.data.rows)) {
      let h = t.row.safeParse(l);
      if (!hr.test(m) || !h.success) {
        n++;
        continue
      }
      s.push({
        slug: m,
        triggerId: h.data.trigger_id,
        since: h.data.since,
        events: h.data.events,
        ...h.data.unreleased.length > 0 && {
          unreleased: h.data.unreleased
        },
        ...h.data.claude_doc && {
          claudeDoc: !0
        }
      })
    }
  let d = new Map,
    a = t.stopsEnvelope.safeParse(e);
  if (a.success)
    for (let [m, l] of J(a.data.stopped)) {
      if (!hr.test(m)) {
        n++;
        continue
      }
      let h = t.stop.safeParse(l);
      if (d.set(m, h.success ? h.data.at_ms : Date.now()), !h.success) n++
    }
  if (!r.success || !a.success) c("artifact_durable_subscribe", a.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid");
  else if (n > 0) c("artifact_durable_subscribe", "registry_entry_invalid");
  let f = t.orphansEnvelope.safeParse(e),
    g = f.success ? f.data.orphans : [];
  return {
    rows: s,
    stopped: d,
    orphans: g
  }
}

function J(e) {
  return Object.keys(e).slice(0, x).map((n) => [n, e[n]])
}

function Wke(e) {
  let {
    live: t
  } = te(), n = t.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0 || t.inFlightWiredIntent.has(e)
}
var A = "\x00unwritten",
  H = 256,
  K = 32,
  O = 64,
  dt = p(() => {
    let e = E().refine(Number.isFinite),
      t = u({
        state: B(["armed", "stopped"]),
        writtenAtMs: e,
        title: o().min(1).max(H).optional(),
        holder: o().optional().transform((s) => s === void 0 ? void 0 : "bg"),
        holderPid: E().int().positive().optional().catch(void 0),
        holderProcStart: o().min(1).max(64).optional().catch(void 0),
        holderProcStartFt: o().min(1).max(64).optional().catch(void 0),
        holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(void 0),
        holderPidSpace: o().min(1).max(160).optional().catch(void 0)
      }),
      n = u({
        type: T("artifact-comment-monitor"),
        v: T(1),
        sessionId: o(),
        artifacts: me(o(), oe()),
        crossLineMerged: T(!0).optional().catch(void 0),
        tailTorn: T(!0).optional().catch(void 0)
      });
    return {
      record: t,
      envelope: n
    }
  });

function Y(e) {
  if (e.holderPid === void 0 || e.holderJob === void 0 || e.holderPidSpace === void 0 || e.holderProcStart === void 0 && e.holderProcStartFt === void 0) return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...e.holderProcStart !== void 0 && {
      holderProcStart: e.holderProcStart
    },
    ...e.holderProcStartFt !== void 0 && {
      holderProcStartFt: e.holderProcStartFt
    },
    holderPidSpace: e.holderPidSpace
  }
}

function Z() {
  let e = vSe.token;
  if (e === void 0) return Rw(), {};
  let t = aH();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(q(t))) return {};
  let {
    procStart: n,
    procStartFt: s
  } = ape(e);
  return Y({
    holderPid: process.pid,
    holderJob: q(t),
    holderProcStart: n,
    holderProcStartFt: s,
    holderPidSpace: hte().slice(0, 160)
  })
}

function NKo() {
  return Rw()
}

function lZn(e, t) {
  let n = dt(),
    s = n.envelope.safeParse(e);
  if (!s.success) return c("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (s.data.sessionId !== z()) return c("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (s.data.crossLineMerged === !0) t?.onLossy?.();
  let r = s.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map,
    a = 0,
    f = 0,
    g = 0;
  for (let [m, l] of Object.entries(s.data.artifacts)) {
    if (f++ >= 2 * O) {
      t?.onLossy?.();
      break
    }
    let h = n.record.safeParse(l);
    if (!hr.test(m)) {
      a++, t?.onLossy?.();
      continue
    }
    if (!h.success) {
      if (a++, t?.onLossy?.(), typeof l === "object" && l !== null && l.state === "stopped") d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now()
      });
      continue
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...h.data.title !== void 0 && {
          title: h.data.title
        }
      }), t?.onTornStop?.(m);
      continue
    }
    if (h.data.state === "armed" && g++ >= O) {
      t?.onLossy?.();
      continue
    }
    let {
      state: S,
      writtenAtMs: w,
      title: y,
      holder: b
    } = h.data;
    d.set(m, {
      state: S,
      writtenAtMs: w,
      ...y !== void 0 && {
        title: y
      },
      ...b !== void 0 && {
        holder: b,
        ...r ? {} : Y(h.data)
      }
    })
  }
  if (a > 0) c("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d
}

function Pbn(e) {
  let t = v(e.storageV5),
    n = new Map([...t.pendingRestore ?? [], ...t.bySlug]);
  t.pendingRestore = null;
  let {
    excludeSlug: s
  } = e;
  if (s !== void 0) n.delete(s);
  return M(), n
}

function dZn() {
  return te().commentMonitorIntent.tornStops
}

function FKo() {
  return te().commentMonitorIntent.storageV5
}

function y8(e) {
  v(e?.storageV5)
}

function Isi(e, t) {
  if (e === void 0 && !gD()) return;
  let n = te().commentMonitorIntent;
  n.earlySeed = e, n.adoptPendingFor = z(), v(t?.storageV5)
}

function Msi(e, t) {
  let n = v(t?.storageV5);
  if (te().durable.stopLatches.isStopped(e)) return;
  let s = t?.title,
    r = s !== void 0 && s.length >= 1 && s.length <= H,
    d = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let a = Date.now(),
    f = wc() ? {
      holder: "bg",
      ...Z()
    } : void 0;
  if (n.bySlug.set(e, {
      state: "armed",
      writtenAtMs: a,
      ...r ? {
        title: s
      } : d !== void 0 && {
        title: d
      },
      ...f
    }), tt(n, e), M(), f !== void 0 && f.holderPid === void 0) ct(e, a)
}

function ct(e, t) {
  Rw().then(() => {
    if (!gD() || !wc()) return;
    let n = te().commentMonitorIntent,
      s = n.bySlug.get(e);
    if (n.sid !== z() || s?.state !== "armed" || s.holder !== "bg" || s.holderPid !== void 0 || s.writtenAtMs !== t) return;
    let r = Z();
    if (r.holderPid === void 0) return;
    n.bySlug.set(e, {
      ...s,
      ...r
    }), M()
  }).catch(() => {
    return
  })
}

function mCt(e, t) {
  let n = v(t?.storageV5),
    s = n.bySlug.get(e);
  n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...s?.title !== void 0 && {
      title: s.title
    }
  }), M({
    durableNow: !0
  });
  for (let [r, d] of n.parked) {
    let a = d.line[e];
    if (a?.state === "armed") d.line[e] = {
      state: "stopped",
      writtenAtMs: Date.now(),
      ...a.title !== void 0 && {
        title: a.title
      }
    }, k(r, d.path, d.line, {
      durableNow: !0
    })
  }
}

function Dsi(e, t) {
  return v(t?.storageV5).bySlug.get(e)?.state
}

function xit(e, t) {
  let n = v(t?.storageV5),
    s = !1,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let a of r) {
    if (s = n.bySlug.delete(a) || s, n.forgottenAt.delete(a), n.forgottenAt.size >= ft) {
      let f = n.forgottenAt.keys().next().value;
      if (f !== void 0) n.forgottenAt.delete(f)
    }
    n.forgottenAt.set(a, d)
  }
  if (s) M({
    durableNow: !0
  });
  for (let [a, f] of n.parked) {
    let g = !1;
    for (let m of r)
      if (f.traveling?.has(m) && f.line[m]?.state === "armed") delete f.line[m], f.traveling.delete(m), g = !0;
    if (g) {
      if (k(a, f.path, f.line, {
          durableNow: !0
        }), !Object.values(f.line).some((m) => m.state === "armed")) n.parked.delete(a)
    }
  }
}

function cZn(e, t) {
  let n = v(t?.storageV5),
    {
      stopLatches: s
    } = te().durable;
  for (let [r, d] of e) {
    if (s.wasClearedByRewatch(r)) continue;
    let a = n.bySlug.get(r);
    if (a === void 0 || a.state === "armed" || a.writtenAtMs <= d) n.bySlug.set(r, {
      state: "stopped",
      writtenAtMs: d,
      ...a?.title !== void 0 && {
        title: a.title
      }
    });
    s.reaffirmStop(r)
  }
  M()
}

function Lsi(e) {
  let t = v(e?.storageV5),
    {
      yieldedSlugs: n
    } = te().wakes,
    s = Date.now(),
    r = !1;
  for (let [d, a] of t.bySlug)
    if (a.state === "armed" && !n.has(d)) t.bySlug.set(d, {
      state: "stopped",
      writtenAtMs: s,
      ...a.title !== void 0 && {
        title: a.title
      }
    }), r = !0;
  if (r) M({
    durableNow: !0
  });
  for (let [d, a] of t.parked) {
    let f = !1;
    for (let [g, m] of Object.entries(a.line))
      if (m.state === "armed") a.line[g] = {
        state: "stopped",
        writtenAtMs: s,
        ...m.title !== void 0 && {
          title: m.title
        }
      }, f = !0;
    if (f) k(d, a.path, a.line, {
      durableNow: !0
    })
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
      return !1
  }
}

function ut() {
  let e = te().commentMonitorIntent,
    t = e.sid;
  if (t === null || t === z()) {
    e.leftWith = null;
    return
  }
  let n = new Set;
  for (let [s, r] of e.bySlug)
    if (r.state === "armed" && Wke(s)) n.add(s);
  e.leftWith = {
    sid: t,
    traveling: n,
    unwritten: !e.onFile && !cDe(t) && e.adoptPendingFor !== t,
    inWindow: e.adoptPendingFor === t
  }
}

function R() {
  let e = te().commentMonitorIntent;
  if (!cDe(z())) return;
  for (let [t, n] of e.parked) {
    if (n.traveling === void 0 || t === z()) continue;
    let s = !1;
    for (let r of n.traveling)
      if (n.line[r]?.state === "armed") delete n.line[r], s = !0;
    if (n.traveling = void 0, s) k(t, n.path, n.line);
    if (!Object.values(n.line).some((r) => r.state === "armed")) e.parked.delete(t)
  }
}

function N(e, t) {
  if (cDe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1
  }
  return e.adoptPendingFor === t || Fd() !== null
}

function X(e, t, n, s, r) {
  if (t === null) return;
  let d = te().commentMonitorIntent,
    a = {
      path: t,
      line: Q(e, n)
    };
  d.pendingLines.set(e, a), bpr(V), d.writeChain = d.writeChain.then(async () => {
    if (await tu().catch(() => {}), d.pendingLines.get(e) !== a) return;
    if (d.exitStamped) return;
    if (d.pendingLines.delete(e), !s && lq() === r) return;
    if (e === d.sid) {
      d.lastWritten = A, M();
      return
    }
    k(e, t, n)
  }), d.writeChain = d.writeChain.catch(() => {})
}
var ft = 1024;

function Q(e, t) {
  let n = te().commentMonitorIntent,
    s = n.parked.get(e);
  if (s?.unwritten === !0) {
    let {
      traveling: r
    } = s;
    return r === void 0 ? t : Yi(t, (d, a) => d.state === "armed" && r.has(a))
  }
  if (s?.leftInWindow === !0) return j(n, {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: e,
    artifacts: t
  }).artifacts;
  return t
}

function k(e, t, n, s) {
  if (t === null) return;
  let r = te().commentMonitorIntent,
    {
      storageV5: d
    } = r,
    a = Q(e, {
      ...n
    }),
    f = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: e,
      artifacts: a
    };
  r.owedLines.delete(e);
  let g = {
    path: t,
    line: a
  };
  if (r.pendingLines.set(e, g), bpr(V), s?.durableNow === !0) Epr(f, t, I(f));
  r.writeChain = r.writeChain.then(async () => {
    if (await tu().catch(() => {}), r.exitStamped) return;
    if (e === r.sid) {
      if (r.pendingLines.get(e) === g) r.pendingLines.delete(e);
      r.lastWritten = A, M();
      return
    }
    if (await Tx(t, f, d, {
        onlyIfExists: !0,
        tornTailEntry: I(f)
      }), r.pendingLines.get(e) === g) r.pendingLines.delete(e)
  }).catch(() => {
    if (r.pendingLines.get(e) !== g) {
      c("artifact_live_subscribe", "comment_monitor_intent_write_failed");
      return
    }
    if (r.pendingLines.delete(e), r.owedLines.size >= 2 * K) {
      let m = r.owedLines.keys().next().value;
      if (m !== void 0) r.owedLines.delete(m)
    }
    r.owedLines.set(e, {
      path: t,
      line: a
    }), c("artifact_live_subscribe", "comment_monitor_intent_write_failed")
  })
}

function HKo(e, t) {
  tt(v(t?.storageV5), e)
}

function tt(e, t) {
  let n = !1;
  for (let [s, r] of e.parked) {
    if (s === z() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set).add(t), n = !0
  }
  if (n) R()
}

function G(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = !1;
  for (let [s, {
      path: r,
      line: d
    }] of t) {
    if (s === e.sid) {
      e.lastWritten = A, n = !0;
      continue
    }
    if (e.pendingLines.has(s)) continue;
    let a = e.parked.get(s);
    k(s, a?.path ?? r, a?.line ?? d)
  }
  if (n) M()
}

function v(e) {
  let t = te().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let n = z(),
    s = !1,
    r = !1;
  if (t.sid !== n) {
    let a = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null,
      f = (S) => a !== null ? a.traveling.has(S) : Wke(S);
    t.leftWith = null;
    let g = P(t),
      m = new Set,
      l = 0;
    for (let [S, w] of t.bySlug) {
      if (w.state !== "armed") continue;
      if (f(S)) m.add(S);
      else t.bySlug.delete(S), l++
    }
    let {
      stopLatches: h
    } = te().durable;
    for (let [S, w] of Object.entries(t.parked.get(n)?.line ?? {})) {
      let y = t.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !Wke(S)) {
        r = !0;
        continue
      }
      let b = F(t.bySlug.get(S), w);
      if (b.state === "armed" && h.isStopped(S)) b = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...b.title !== void 0 && {
          title: b.title
        }
      };
      if (t.bySlug.set(S, b), b.state === "stopped") h.confirmStop(S)
    }
    t.parked.delete(n);
    for (let S of [t.owedLines.get(n), t.pendingLines.get(n)])
      for (let [w, y] of Object.entries(S?.line ?? {})) {
        if (y.state !== "stopped") continue;
        let b = F(t.bySlug.get(w), y);
        if (t.bySlug.set(w, b), b.state === "stopped") h.confirmStop(w)
      }
    if (t.sid !== null && (l > 0 || m.size > 0)) {
      t.parked.set(t.sid, {
        path: t.transcriptPath,
        line: g,
        ...m.size > 0 && {
          traveling: m
        },
        ...a?.unwritten === !0 && {
          unwritten: !0
        },
        ...a?.inWindow === !0 && {
          leftInWindow: !0
        }
      });
      while (t.parked.size > K) {
        let [S, w] = t.parked.entries().next().value;
        t.parked.delete(S);
        let y = Date.now();
        k(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, W]) => W.state !== "armed" ? [
          [b, W]
        ] : w.traveling?.has(b) ? [] : [
          [b, {
            state: "stopped",
            writtenAtMs: y,
            ...W.title !== void 0 && {
              title: W.title
            }
          }]
        ])))
      }
    }
    if (t.sid !== null && t.wroteCurrentLine) X(t.sid, t.transcriptPath, g, t.lastWritten === A, t.failureSeqAtWrite);
    else if (t.sid !== null && a?.inWindow === !0 && nt(t, g)) X(t.sid, t.transcriptPath, g, !0, t.failureSeqAtWrite);
    if (R(), s = [...t.bySlug.values()].some((S) => S.state === "armed"), t.sid = n, t.adoptPendingFor !== n) t.adoptPendingFor = null;
    t.lastWritten = r ? A : null, t.wroteCurrentLine = !1, t.pendingRestore = null, t.transcriptPath = null, t.tornStops.clear(), t.onFile = !1
  }
  if (!t.onFile && cDe(n)) t.onFile = !0;
  if (t.transcriptPath = N(t, n) ? bp() : tm(n), t.unsubscribeMaterialized === void 0) t.unsubscribeMaterialized = hss(() => {
    if (t.sid !== null && cDe(t.sid)) t.onFile = !0;
    R()
  });
  if (t.unsubscribeSwitch === void 0) t.unregisterExitDrain = dDe(() => (G(t), t.writeChain)), bpr(V), t.unsubscribeSwitch = rf((a, f) => {
    if (f === "cd" && t.sid === a) t.transcriptPath = tm(a);
    if (lt(f)) ut();
    if (f === "clear") queueMicrotask(M)
  });
  let d = t.earlySeed ?? ois();
  if (t.earlySeed = void 0, d !== void 0) {
    let a = !1,
      f = lZn(d, {
        onLossy: () => {
          a = !0
        },
        onTornStop: (g) => {
          t.tornStops.add(g)
        }
      });
    if (f !== null) {
      if (d.tailTorn === !0) Mss(t.transcriptPath ?? void 0);
      let {
        stopLatches: g
      } = te().durable, m = new Map;
      for (let [l, h] of f) {
        let S = t.forgottenAt.get(l);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !Wke(l)) {
          a = !0;
          continue
        }
        let w = t.bySlug.get(l);
        if (t.tornStops.has(l) && w?.state === "armed" && Wke(l)) {
          t.tornStops.delete(l), m.set(l, w), a = !0;
          continue
        }
        let y = F(w, h);
        if (t.bySlug.set(l, y), m.set(l, y), y.state === "stopped") g.confirmStop(l)
      }
      if (t.pendingRestore = m, !a && t.lastWritten === null) t.lastWritten = U(Object.fromEntries(f)), t.failureSeqAtWrite = lq();
      else if (a && t.lastWritten === null) t.lastWritten = A;
      yBe()
    }
  }
  if (G(t), s || r) M();
  return t
}

function F(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e
}

function P(e) {
  return Object.fromEntries([...e.bySlug.entries()].sort(([, t], [, n]) => Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, O))
}

function et() {
  let {
    commentMonitorIntent: e,
    wakes: t
  } = te();
  if (!e.wroteCurrentLine || e.sid !== z() || [...e.bySlug.keys()].some((n) => t.yieldedSlugs.has(n))) return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: z(),
    artifacts: P(e)
  }
}

function V() {
  let e = te().commentMonitorIntent,
    t = z(),
    n, s = () => nt(e, P(e)),
    r = !e.exitStamped && e.sid === t;
  if (r && cDe(t)) {
    if (e.wroteCurrentLine || s() || e.owedLines.has(t) || e.pendingLines.has(t)) R(), e.wroteCurrentLine = !0, MEe(et)
  } else if (r && N(e, t) && e.transcriptPath !== null && s()) {
    let a = j(e, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: t,
      artifacts: P(e)
    });
    n = {
      path: e.transcriptPath,
      entry: a,
      tornTailEntry: I(a)
    };
    for (let f of [e.owedLines, e.pendingLines])
      if (f.get(t)?.path === n.path) f.delete(t)
  }
  e.exitStamped = !0;
  let d = [...e.owedLines, ...e.pendingLines].map(([a, {
    path: f,
    line: g
  }]) => {
    let m = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: a,
      artifacts: g
    };
    return {
      path: f,
      entry: m,
      tornTailEntry: I(m)
    }
  });
  return n === void 0 ? d : [...d, n]
}

function I(e) {
  let t = Date.now();
  return {
    ...e,
    artifacts: Er(e.artifacts, (n) => n.state === "armed" && n.holder === void 0 ? {
      state: "stopped",
      writtenAtMs: t,
      ...n.title !== void 0 && {
        title: n.title
      }
    } : n)
  }
}

function j(e, t) {
  let n = z(),
    s = new Set;
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let a of d.traveling ?? [])
      if (d.line[a]?.state === "armed") s.add(a)
  }
  if (s.size === 0) return t;
  return {
    ...t,
    artifacts: Yi(t.artifacts, (r, d) => r.state === "armed" && s.has(d))
  }
}

function nt(e, t) {
  return e.lastWritten !== U(t) && !(e.lastWritten === null && Object.keys(t).length === 0)
}

function U(e) {
  return _(Object.entries(e).map(([t, n]) => [t, n.state, n.writtenAtMs, n.title ?? null, n.holder ?? null, n.holderPid ?? null, n.holderProcStart ?? n.holderProcStartFt ?? null, n.holderJob ?? null, n.holderPidSpace ?? null]).sort())
}

function M(e) {
  let t = v();
  R(), yBe();
  let n = P(t),
    s = U(n);
  if (s === t.lastWritten && lq() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = lq(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = s;
    return
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: z(),
    artifacts: n
  };
  if (N(t, z())) {
    if (t.lastWritten = A, e?.durableNow === !0 && t.transcriptPath !== null) {
      let d = j(t, r);
      Epr(d, t.transcriptPath, I(d))
    }
    return
  }
  if (t.lastWritten = s, t.wroteCurrentLine = !0, MEe(et), e?.durableNow === !0) Epr(r);
  ris(r, t.storageV5).catch(() => {
    if (t.lastWritten === s) t.lastWritten = A;
    c("artifact_live_subscribe", "comment_monitor_intent_write_failed")
  })
}
export {
  xsi,
  Psi,
  yBe,
  Osi,
  Wke,
  NKo,
  lZn,
  Pbn,
  dZn,
  FKo,
  y8,
  Isi,
  Msi,
  mCt,
  Dsi,
  xit,
  cZn,
  Lsi,
  HKo
};
