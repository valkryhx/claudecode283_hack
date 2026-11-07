// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  f,
  de,
  ka,
  Yn
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  qe,
  F,
  d,
  k,
  tr,
  kh,
  tPe,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Ks,
  xM
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  H,
  z,
  of,
  _Y,
  vG,
  LGs,
  Pc,
  $we,
  Jp,
  jcn,
  UKn,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  bh,
  L5
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Dh,
  wme,
  _s
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  tG,
  i1t
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  DAi,
  LAi,
  Lio,
  FDe,
  NAi,
  oce
} from "B:/~BUN/root/chunk-nw79m6g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  lAe,
  cT,
  KVe,
  nj
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  gZ
} from "B:/~BUN/root/chunk-2ys4h17s.js";
import {
  Hr,
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Is,
  qO,
  SN,
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  El
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  tX
} from "B:/~BUN/root/chunk-8qv1t8b3.js";
import {
  vae
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  OAe
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  D_
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  eOn
} from "B:/~BUN/root/chunk-wxztkjve.js";
import {
  Az,
  Vt,
  Nsn,
  Zvo,
  tb
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Er
} from "B:/~BUN/root/chunk-pc24rkga.js";
import {
  Eu
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Zd
} from "B:/~BUN/root/chunk-3vtkd50k.js";
import {
  ta
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  G_e
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  TWe
} from "B:/~BUN/root/chunk-pgm29tvd.js";
import {
  sHt,
  vbe
} from "B:/~BUN/root/chunk-7mppcgdr.js";
import {
  MAe
} from "B:/~BUN/root/chunk-zpne314q.js";
import {
  cSt,
  o,
  E,
  I,
  oe,
  C,
  u,
  xt,
  Be,
  Dr,
  me,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Qy
} from "B:/~BUN/root/chunk-tx4kppkg.js";
import {
  Qm,
  Ht
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  delimiter as Fe,
  isAbsolute as pt
} from "path";
var Re = ["shell", "slash", "fleet", "spare", "respawn"];

function TAi(e) {
  return Re.includes(e)
}
var Vu = 1,
  $Pn = 1,
  nD = /^[a-f0-9]{8}$/,
  CAi = /^[a-f0-9]{32}$/,
  ft = ["failed", "taken", "ended"],
  WIt = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;

function De(e) {
  return !L5.test(e)
}
var ece = "\x1B_cc-daemon-detach\x1B\\",
  ae = "\x1B\\",
  ze = "\x1B_cc-detach-msg;",
  Ahr = "\x1B_cc-daemon-hint\x1B\\";

function zIt(e) {
  return Ahr + e + Ahr
}
var pe = "\x1B_cc-d-imark;",
  mt = Buffer.from(pe, "latin1");

function Aio(e) {
  return pe + _(e) + ae
}

function Bls(e, n, r) {
  let s = r?.maxPayload ?? 512,
    c = e.length > 0 ? Buffer.concat([e, n]) : n,
    m = [],
    g = [],
    S = 0,
    y = 0,
    h = -1,
    w = !1;
  for (;;) {
    let v = c.indexOf(pe, y);
    if (v < 0) break;
    let L = v + pe.length,
      A = w ? -1 : h >= L ? h : h = c.indexOf(ae, L);
    if (A < 0) {
      w = !0;
      let j = c.subarray(v);
      if (j.length > pe.length + s) {
        y = L;
        continue
      }
      let G = !1;
      for (let ie = L; ie < c.length; ie++) {
        let Ae = c[ie];
        if (Ae === 24 || Ae === 26 || Ae === 27 && ie < c.length - 1) {
          G = !0;
          break
        }
      }
      if (G) {
        y = L;
        continue
      }
      return g.push(c.subarray(S, v)), {
        marks: m,
        carry: Buffer.from(j),
        cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
      }
    }
    let M = !1;
    if (A - L <= s) try {
      let j = ee(c.subarray(L, A).toString("utf8"));
      if (j !== null && typeof j === "object" && (j.kind === "content_paint" || j.kind === "prompt_idle")) {
        if (M = !0, r?.requireNonce === void 0 || j.nonce === r.requireNonce) m.push({
          kind: j.kind,
          msgsLoaded: GIt(j.msgsLoaded),
          msgsInJsonl: GIt(j.msgsInJsonl),
          msgsRenderedAtFirstPaint: GIt(j.msgsRenderedAtFirstPaint)
        })
      }
    } catch {}
    if (M) g.push(c.subarray(S, v)), S = A + ae.length;
    y = M ? A + ae.length : L
  }
  let x = c.subarray(y),
    N = mt,
    O = 0,
    P = Math.min(x.length, N.length - 1);
  e: for (let v = P; v > 0; v--) {
    let L = x.length - v;
    for (let A = 0; A < v; A++)
      if (x[L + A] !== N[A]) continue e;
    O = v;
    break
  }
  return g.push(c.subarray(S, c.length - O)), {
    marks: m,
    carry: O > 0 ? Buffer.from(x.subarray(x.length - O)) : Buffer.alloc(0),
    cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
  }
}

function GIt(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Me ? e : void 0
}
var Me = 1e9,
  se = () => E().int().nonnegative().max(Me).optional(),
  gt = p(() => u({
    kind: B(["content_paint", "prompt_idle"]),
    msgsLoaded: se(),
    msgsInJsonl: se(),
    msgsRenderedAtFirstPaint: se()
  })),
  ht = p(() => xt({
    kind: B(["content_paint", "prompt_idle"]),
    msgsLoaded: se(),
    msgsInJsonl: se(),
    msgsRenderedAtFirstPaint: se()
  }));

function jls(e) {
  let n = ht().safeParse(e);
  if (!n.success) return null;
  return {
    kind: n.data.kind,
    msgsLoaded: n.data.msgsLoaded,
    msgsInJsonl: n.data.msgsInJsonl,
    msgsRenderedAtFirstPaint: n.data.msgsRenderedAtFirstPaint
  }
}

function xye(e) {
  if (!e) return ece;
  return ze + e + ae + ece
}

function Wls(e) {
  let n = e.indexOf(ze);
  if (n < 0) return;
  let r = n + ze.length,
    s = e.indexOf(ae, r);
  if (s < 0) return;
  return e.subarray(r, s).toString("utf8")
}
var bt = new Set(["CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_DISABLE_MCP_TASKS"]);

function Ne(e, n) {
  let r = {};
  for (let [s, c] of Object.entries(Lio(e, n))) {
    if (bt.has(s.toUpperCase()) && c !== "1") continue;
    r[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? c.split(Fe).map((m) => xM(m.trim())).join(Fe) : c
  }
  return r
}
var xhr = p(() => u({
    proto: E().int().min($Pn).max(Vu),
    short: o().regex(nD),
    nonce: o().regex(nD).optional(),
    sessionId: o().transform(xM),
    createdAt: E(),
    source: B(Re).catch("fleet"),
    cwd: o().transform(xM),
    launch: Dr("mode", [u({
      mode: T("prompt"),
      args: C(o()).transform(oce),
      restoresTranscript: I().optional()
    }), u({
      mode: T("resume"),
      sessionId: o().transform(xM),
      transcriptPath: o().transform(xM).optional(),
      fork: I(),
      flagArgs: C(o()).transform(oce),
      restoresTranscript: I().optional()
    }), u({
      mode: T("exec"),
      cmd: o().transform(xM),
      args: C(o()).transform((e) => e.map(xM))
    })]),
    env: me(o(), o()).default({}).transform((e) => Ne(e, "the background job's launch request")),
    reattachEnv: me(o(), o()).transform((e) => Ne(e, "the launch request's reattach values")).optional(),
    worktree: u({
      path: o().transform(xM),
      ownershipToken: o()
    }).optional(),
    isolation: B(["none", "worktree"]).default("none"),
    respawnFlags: C(o()).default([]).transform(oce),
    attachStallRespawns: E().int().optional(),
    gatewayRouted: I().optional(),
    gatewayMarkUnreadable: o().optional(),
    agent: o().optional(),
    routine: o().optional(),
    seed: u({
      intent: o(),
      name: o().optional()
    }).optional(),
    cols: E().int().positive().max(TWe).optional(),
    rows: E().int().positive().max(TWe).optional()
  })),
  $Xt = /ERESPAWNING|ESTARTING/,
  UXt = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/,
  VIt = "ERESPAWNING",
  BXt = "updated Claude Code",
  but = "stalled",
  UPn = "legacy",
  jXt = "EHOSTDEAD",
  $9e = "terminal host process died \u2014 press Enter to restart",
  Sut = "This session's terminal host process died (the conversation is saved)",
  WXt = "terminal host process died \u2014 its output is gone; the command was not run again",
  wut = "This command's terminal host process died \u2014 its output is gone and the command was not run again",
  zXt = /ESTALLED|EUNVERIFIED|EHOSTDEAD/,
  kut = /^EKICKED:\s*/,
  zls = "Session opened in another window";

function Phr(e, n, r) {
  return n !== void 0 && CAi.test(n) ? `${e}:${n}: ${r}` : `${e}: ${r}`
}
var GXt = /^E[A-Z]+:/;

function be() {
  return o().refine(nj, "remote IPC path")
}
var je = p(() => xt({
  pid: E(),
  procStart: o().optional(),
  sessionId: o().transform(xM),
  rendezvousSock: be(),
  ptySock: be().optional(),
  messagingSock: be().optional(),
  cliVersion: o().optional(),
  startedAt: E(),
  attempt: E(),
  cwd: o().transform(xM),
  worktreePath: o().transform(xM).optional(),
  dispatch: xhr(),
  pendingRespawn: T("upgrade").optional(),
  decModes: C(E()).optional(),
  firedInteractiveMarks: C(oe()).transform((e) => {
    let n = [];
    for (let r of e) {
      let s = gt().safeParse(r);
      if (s.success) n.push(s.data)
    }
    return n.slice(0, 2)
  }).optional().catch(void 0),
  rvAuth: o().optional(),
  ptyAuth: o().optional(),
  replPid: E().optional(),
  replProcStart: o().optional()
}));

function xio(e) {
  let n = je().shape,
    r = {};
  for (let [s, c] of Object.entries(e))
    if (!(s in n)) r[s] = c;
  return r
}
var RAi = p(() => xt({
    proto: E().int().min($Pn).max(Vu),
    supervisorPid: E().catch(0),
    updatedAt: E().catch(0),
    workers: me(o().regex(nD), je())
  })),
  Gls = p(() => {
    let e = o().regex(nD),
      n = E().int().min($Pn).max(Vu);
    return Dr("op", [u({
      proto: n,
      op: T("ping")
    }), u({
      proto: n,
      op: T("nudge")
    }), u({
      proto: n,
      op: T("yield")
    }), u({
      proto: n,
      op: T("lease"),
      client: U9e().optional()
    }), u({
      proto: n,
      op: T("leases")
    }), u({
      proto: n,
      op: T("await-ack"),
      short: e,
      nonce: e.optional(),
      timeoutMs: E()
    }), u({
      proto: n,
      op: T("dispatch"),
      d: xhr(),
      timeoutMs: E(),
      auth: o().optional()
    }), u({
      proto: n,
      op: T("list")
    }), u({
      proto: n,
      op: T("has"),
      short: e
    }), u({
      proto: n,
      op: T("kill"),
      short: e,
      signal: B(["SIGTERM", "SIGKILL"]).optional(),
      handoff: I().optional(),
      evict: I().optional()
    }), u({
      proto: n,
      op: T("reply"),
      short: e,
      text: o(),
      auth: o().optional(),
      nextTurn: I().optional()
    }), u({
      proto: n,
      op: T("subscribe"),
      short: e,
      tail: E().optional()
    }), u({
      proto: n,
      op: T("attach"),
      short: e,
      auth: o().optional(),
      cols: E().int().min(1).max(TWe),
      rows: E().int().min(1).max(TWe),
      attachId: o().optional(),
      caps: u({
        imark: I().optional(),
        terminal: o().nullable(),
        mux: B(["tmux", "screen", "zellij"]).nullable(),
        ssh: I(),
        wheelFlood: I().optional(),
        hyperlinks: I().optional(),
        progressReporting: I().optional(),
        printsUnknownSequences: I().optional(),
        wtSession: I().optional(),
        isVscodeTerm: I().optional(),
        isGhosttyXtv: I().optional(),
        keyDialect: B(["st", "rxvt"]).nullable().optional().catch(void 0),
        browser: o().nullable().optional(),
        colorLevel: Be([T(0), T(1), T(2), T(3)]).optional(),
        syncOutput: I().optional(),
        editor: o().nullable().optional(),
        systemTheme: B(["dark", "light"]).optional(),
        tmuxSocket: be().refine(pt).optional().catch(void 0),
        sessionTabs: o().regex(CAi).optional().catch(void 0),
        cloudTabs: T(!0).optional().catch(void 0),
        tabsLanding: u({
          why: B(ft),
          from: o().regex(nD)
        }).optional().catch(void 0)
      }).optional(),
      holdingFrame: I().optional()
    }), u({
      proto: n,
      op: T("resize"),
      short: e,
      cols: E().int().min(1).max(TWe),
      rows: E().int().min(1).max(TWe),
      attachId: o().optional()
    }), u({
      proto: n,
      op: T("ensure-spare"),
      cwd: o()
    }), u({
      proto: n,
      op: T("permission-response"),
      short: e,
      requestId: o(),
      allow: I(),
      auth: o().optional()
    }), u({
      proto: n,
      op: T("respawn-stale"),
      short: e
    }), u({
      proto: n,
      op: T("shutdown"),
      reapWorkers: I().optional()
    })])
  }),
  U9e = p(() => u({
    label: o().max(64).refine(De),
    cwd: o().max(4096).refine(De).catch("(not shown)"),
    pid: E().int().positive().catch(0),
    cloudSessionId: o().regex(WIt).optional().catch(void 0)
  })),
  Vls = p(() => u({
    ok: T(!0),
    op: T("lease")
  })),
  St = ["upgrade", "service_recall", "displaced", "yield", "shutdown_op", "idle_exit", "bg_manager_failed", "signal", "unknown"],
  Kls = p(() => u({
    op: T("lease"),
    closing: B(St)
  })),
  vut = "cloud session",
  Ohr = ["cli-bg-dispatch", "claude agents", vut];
import {
  lstat as re,
  mkdir as Oe,
  readdir as jt,
  readFile as ge,
  rm as ce,
  stat as Nr
} from "fs/promises";
import {
  basename as V,
  dirname as Ut,
  isAbsolute as it,
  join as U,
  relative as $t
} from "path";

function Ue(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return !1;
  let n = e.wake;
  if (n === void 0) return !0;
  return n.fires >= 1 && n.keepalive !== !0
}

function _ut(e) {
  if (!e || e.length === 0) return "";
  return e.map((n) => {
    let r = `${n.id??n.label}:${n.doneAt??"-"}:${n.failed?"x":""}`;
    return n.kind === "todo" ? `${r}:${n.startedAt??"-"}` : r
  }).join("|")
}

function HXt() {
  let {
    tasks: e,
    queued: n,
    kinds: r,
    drainableMonitors: s,
    wake: c
  } = jIt();
  return {
    tasks: e,
    queued: n,
    kinds: r,
    ...s !== void 0 && {
      drainableMonitors: s
    },
    ...c !== void 0 && {
      wake: c
    }
  }
}

function Uls(e) {
  gZ().publishInFlightSnapshot(e)
}

function jIt() {
  let e = gZ().inFlightSnapshot,
    n = Jp().length;
  if (n === 0) return {
    ...e
  };
  let r = yt();
  return {
    ...e,
    tasks: e.tasks + n,
    kinds: [...e.kinds, "session_cron"],
    ...r !== void 0 && {
      wake: r
    }
  }
}

function yt() {
  let e = Jp().find((n) => n.kind === "loop");
  if (e === void 0) return;
  return {
    at: e.scheduledFor,
    reason: e.reason,
    fires: jcn(),
    ...e.keepalive && {
      keepalive: !0
    }
  }
}

function vAi(e) {
  let n = gZ().inFlightSnapshotChanged.subscribe(e),
    r = UKn(() => {
      try {
        e()
      } catch {}
    });
  return () => {
    n(), r()
  }
}
import {
  lstat as kt,
  mkdir as Et,
  readFile as _t,
  rename as At,
  rm as Ke
} from "fs/promises";
import {
  dirname as Rt
} from "path";

function $e(e) {
  return e
}

function Je(e) {
  return $e(new Set(e))
}

function EAi(e) {
  let n = new Set,
    r = (s) => {
      if (Array.isArray(s)) s.forEach(r);
      else if (typeof s === "object" && s !== null) {
        let {
          properties: c
        } = s;
        if (typeof c === "object" && c !== null)
          for (let m of Object.keys(c)) n.add(m);
        Object.values(s).forEach(r)
      }
    };
  try {
    r(cSt(e, {
      unrepresentable: "any"
    }))
  } catch {}
  return $e(n)
}

function Rio(e, n) {
  let r;
  return Yn((e ?? []).map((s) => typeof s === "number" || typeof s === "string" && (r ??= n()).has(s) ? String(s) : "*").join("."))
}
import {
  lstat as wt
} from "fs/promises";
async function Pio(e) {
  if (q()) return {
    kind: "proceed"
  };
  try {
    let n = await wt(e);
    return n.isFile() ? {
      kind: "proceed"
    } : {
      kind: "refused",
      symlink: n.isSymbolicLink()
    }
  } catch (n) {
    return K(n) ? {
      kind: "proceed"
    } : {
      kind: "error",
      error: n
    }
  }
}

function Oio(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG")
}
var zt = Je(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]),
  ve = 8388608;

function VXt() {
  return Ve.daemon(["roster.json"])
}

function Z() {
  return {
    proto: Vu,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {}
  }
}
async function t1(e, n) {
  if (n) {
    let {
      roster: s,
      inspectFailed: c
    } = await Xe(n, e);
    return c ? {
      ...s,
      inspectFailed: !0
    } : s
  }
  let r;
  try {
    let s = await kt(tX());
    if (!s.isFile() || s.size > ve) {
      if (!e?.silent)
        if (a(Error(`roster.json ${s.isFile()?`too large (${s.size} bytes) \u2014 quarantining`:"is not a regular file \u2014 removing"}`)), l("tengu_bg_roster_parse_failed", {
            orphaned: -1,
            quarantined: 1,
            errCode: s.isFile() ? b("E2BIG") : b("EFTYPE")
          }), s.isFile()) await fe(void 0);
        else await Ke(tX(), {
          recursive: !0,
          force: !0
        }).catch((c) => a(c));
      return {
        ...Z(),
        parseFailed: !0
      }
    }
    r = ee(await _t(tX(), "utf8"))
  } catch (s) {
    if (K(s)) return Z();
    if (!e?.silent) a(qe(F(s), "bg roster.json read/parse failed")), l("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: kh(s)
    }), await fe(void 0);
    return {
      ...Z(),
      parseFailed: !0
    }
  }
  return Ye(r, e, void 0)
}
async function Ye(e, n, r) {
  let s;
  try {
    s = RAi().safeParse(e)
  } catch (c) {
    if (!n?.silent) a(c), l("tengu_bg_roster_parse_failed", {
      orphaned: Ge(e),
      quarantined: 1,
      errCode: kh(c)
    }), await fe(r);
    return {
      ...Z(),
      parseFailed: !0
    }
  }
  if (s.success) {
    delete s.data.parseFailed, delete s.data.inspectFailed;
    let c = e,
      m = ["supervisorPid", "updatedAt"].filter((g) => !Number.isFinite(c[g]));
    if (m.length > 0 && !n?.silent) t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, {
      level: "warn"
    }), l("tengu_bg_roster_parse_failed", {
      orphaned: 0,
      quarantined: 0,
      issuePath: ka(m),
      issueCode: b("healed_stamp")
    });
    return s.data
  }
  if (!n?.silent) {
    let c = Ge(e),
      m = s.error.issues[0];
    a(Error(`roster.json parse failed at ${He(m?.path)||"<root>"} (orphaning ${c} worker(s)): ${m?.message}`)), l("tengu_bg_roster_parse_failed", {
      orphaned: c,
      quarantined: 1,
      issuePath: He(m?.path),
      issueCode: de(m?.code)
    }), await fe(r)
  }
  return {
    ...Z(),
    parseFailed: !0
  }
}
async function fe(e) {
  if (!e) {
    await At(tX(), `${tX()}.corrupt.${Date.now()}`).catch((r) => a(r));
    return
  }
  let n = await e.move(VXt(), Ve.daemon([`roster.json.corrupt.${Date.now()}`])).catch(() => {
    return
  });
  if (n === void 0 || !n.ok) a(new R(`roster quarantine v5 move failed: ${n===void 0?"threw":Ht(n.error)}`, "roster quarantine v5 move failed"))
}
async function vt(e) {
  await Ke(e, {
    recursive: !0,
    force: !0
  }).catch((n) => a(n))
}
async function We(e, n, r, s) {
  if (!n?.silent) a(r), l("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 1,
    errCode: b(s)
  }), await Pt(e);
  return {
    ...Z(),
    parseFailed: !0
  }
}
async function Xe(e, n) {
  let r = await Pio(tX());
  if (r.kind === "refused") {
    if (!n?.silent) a(Error("roster.json is not a regular file \u2014 removing")), l("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: b("EFTYPE")
    }), await vt(tX());
    return {
      roster: {
        ...Z(),
        parseFailed: !0
      },
      inspectFailed: !1
    }
  }
  if (r.kind === "error") return Ze(n, qe(F(r.error), "bg roster.json read/parse failed"), kh(r.error));
  return Ot(e, n)
}

function Ze(e, n, r) {
  if (!e?.silent) a(n), l("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 0,
    errCode: r
  });
  return {
    roster: {
      ...Z(),
      parseFailed: !0
    },
    inspectFailed: !0
  }
}
async function Ot(e, n) {
  let r = await e.read([{
    key: VXt(),
    offset: 0,
    length: ve + 1
  }]).catch(() => {
    return
  });
  if (r === void 0 || !r.ok) {
    if (r !== void 0 && Oio(r.error)) return {
      roster: await We(e, n, new R(`bg roster.json v5 read refused: ${r.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused \u2014 removing"), "EV5READ"),
      inspectFailed: !1
    };
    return Ze(n, new R(`bg roster.json v5 read failed: ${r?.error.code??"threw"}`, "bg roster.json v5 read failed"), b("EV5READ"))
  }
  let s = r.value.items[0];
  if (!s.found) return {
    roster: Z(),
    inspectFailed: !1
  };
  if (s.totalBytes > ve) return {
    roster: await We(e, n, new R(`roster.json too large (${s.totalBytes} bytes) \u2014 removing`, "roster.json too large \u2014 removing"), "E2BIG"),
    inspectFailed: !1
  };
  let c;
  try {
    c = ee(Buffer.from(s.value).toString("utf8"))
  } catch (m) {
    if (!n?.silent) a(qe(F(m), "bg roster.json read/parse failed")), l("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: kh(m)
    }), await fe(e);
    return {
      roster: {
        ...Z(),
        parseFailed: !0
      },
      inspectFailed: !1
    }
  }
  return {
    roster: await Ye(c, n, e),
    inspectFailed: !1
  }
}
async function Pt(e) {
  let n = await e.delete(VXt()).catch(() => {
    return
  });
  if (n === void 0 || !n.ok) a(new R(`roster quarantine v5 delete failed: ${n?.error.code??"threw"}`, "roster quarantine v5 delete failed"))
}

function He(e) {
  return Rio(e, () => zt)
}

function Ax(e) {
  return nD.test(e) ? Yn(e) : b("invalid")
}

function Ge(e) {
  let n = e !== null && typeof e === "object" ? e.workers : void 0;
  return n !== null && typeof n === "object" && !Array.isArray(n) ? Object.keys(n).length : 0
}
async function Tt(e, n) {
  let {
    parseFailed: r,
    inspectFailed: s,
    ...c
  } = e;
  if (n) {
    let g = await n.write(VXt(), _(c, null, 2), {
      mode: 384
    });
    if (!g.ok) {
      let S = g.error,
        y = "telemetryCode" in S ? S.telemetryCode : void 0;
      if (y !== void 0 && tPe.has(y)) {
        t(`[daemon] roster write failed: ${y}`, {
          level: "error"
        });
        return
      }
      throw new R(`roster v5 write failed: ${S.code}`, "roster v5 write failed")
    }
    return
  }
  let m = tX();
  await Et(Rt(m), {
    recursive: !0,
    mode: 448
  }).catch(() => {}), await zn(m, _(c, null, 2), 384).catch((g) => {
    let S = k(g);
    if (S && tPe.has(S)) {
      t(`[daemon] roster write failed: ${S}`, {
        level: "error"
      });
      return
    }
    throw g
  })
}
var It = Qy();

function tce(e, n) {
  return It.run("roster", async () => {
    let r = await Ct(n),
      s = e(r) ?? r;
    s.supervisorPid = process.pid, s.updatedAt = Date.now(), await Tt(s, n)
  })
}
async function Ct(e) {
  if (!e) return t1();
  let n = await Xe(e);
  if (n.inspectFailed) throw new R("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return n.roster
}
async function Ihr(e, n) {
  if (!El(e)) return "dead_pid";
  if (!await cT(e, n)) return "procstart_mismatch";
  if (await lAe(e)) return "zombie";
  return "live"
}
async function BPn(e, n) {
  return await Ihr(e, n) === "live"
}
var Ft = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;

function nce(e) {
  return !Ft.test(e) && !e.includes("\x00")
}

function jPn() {
  let e = of();
  if (e === void 0 || Te() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (Az(Vt(e))) return;
  if (_Y()?.fallbackModel === e) return;
  if (!nce(e)) return;
  return e
}

function Qe(e) {
  let n = e.trim().toLowerCase();
  return n === "default" || MAe(n)
}

function AAi() {
  return vG().includes("--restricted")
}

function JEe(e, n, {
  carryModel: r = !0
} = {}) {
  let s = Se(e.additionalWorkingDirectories, ["cliArg"]),
    c = [],
    m = vG();
  for (let O = 0; O < m.length; O++) {
    let P = m[O];
    if (P === "--add-dir") O++;
    else if (!r && P === "--fallback-model") {
      let v = (m[O + 1] ?? "").split(",").map((L) => L.trim()).filter((L) => Qe(L));
      if (O++, v.length > 0) c.push("--fallback-model", v.join(","))
    } else if (P !== void 0) c.push(P)
  }
  let g = G_e(n),
    S = Dt(),
    y = jPn(),
    h = y !== void 0 && (r || Qe(y)) ? y : void 0,
    w = e.isBypassPermissionsModeAvailable && !c.includes("--allow-dangerously-skip-permissions"),
    x = LGs(),
    N = $we();
  return [...[], ...[], ...[], ...c, ...N === void 0 ? [] : [N ? "--chrome" : "--no-chrome"], ...w ? ["--allow-dangerously-skip-permissions"] : [], ...s.flatMap((O) => ["--add-dir", O]), ...h !== void 0 ? ["--model", h] : [], ...g !== void 0 ? ["--effort", g] : [], ...S !== void 0 ? ["--fast-mode", S] : [], "--permission-mode", e.mode]
}

function Dt() {
  let e = D_("--fast-mode");
  if (e !== "on" && e !== "off") return;
  let n = Pc()?.fastMode;
  return typeof n === "boolean" ? n ? "on" : "off" : e
}

function qls(e) {
  let n = Eu([e]);
  return n.length === 1 && n[0] === e && nce(e)
}

function Mhr(e, n) {
  let r = n.find((s) => s.agentType === e);
  return r?.source === "built-in" && r.tools?.includes("*") === !0
}

function P9(e, n) {
  return [...n ? [`launch flags: ${eOn}`] : [], ...(e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? ["permission rules set for this session only"] : [], ...(e.alwaysAskRules.cliArg ?? []).length > 0 ? ["ask-before-running rules with no command-line form"] : [], ...[...e.alwaysAllowRules.cliArg ?? [], ...e.alwaysDenyRules.cliArg ?? []].some((r) => !qls(r)) ? ["permission rules a command line cannot carry intact"] : [], ...Se(e.additionalWorkingDirectories, ["cliArg"]).some((r) => !nce(r)) ? ["added directories a command line cannot carry intact"] : []]
}

function QEe(e, n) {
  return [...(e.alwaysAllowRules.cliArg ?? []).flatMap((r) => ["--allowed-tools", r]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap((r) => ["--disallowed-tools", r]), ...$k("--agent", n.agent), ...$k("--agents", n.agents), ...$k("--append-system-prompt", n.appendSystemPrompt), ...$k("--system-prompt-snapshot", WPn(n.systemPromptSnapshot))]
}

function $k(e, n) {
  if (!n) return [];
  return nce(n) ? [e, n] : [`${e}=${n}`]
}

function WPn(e) {
  return e === void 0 ? void 0 : e ? "on" : "off"
}

function Se(e, n) {
  return Array.from(e.values()).filter((r) => n.includes(r.source)).filter((r) => !Ks(r.path)).map((r) => r.path)
}

function zPn(e) {
  return vbe({
    ...sHt(vG()).config,
    addDir: et(e),
    settingSources: OAe()
  })
}

function xAi(e, n) {
  return [...Bt(e), ...et(n).flatMap((r) => ["--add-dir", r])]
}

function Bt(e) {
  let n = [],
    r = !1;
  for (let s of e)
    if (r) r = !1;
    else if (s === "--add-dir") r = !0;
  else n.push(s);
  return n
}

function et(e) {
  return Se(e, ["cliArg"]).filter(nce)
}

function Dhr(e) {
  return Se(e, ["session"]).filter(nce)
}
var Yls = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";

function KIt(e) {
  let n = Dhr(e);
  return n.length > 0 ? {
    [Yls]: _(n)
  } : {}
}

function PAi(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--channels") {
      r++;
      continue
    }
    if (s.startsWith("--channels=")) continue;
    n.push(s)
  }
  return n
}
var I$ = "(ungrouped)",
  rD = "(earlier)",
  Lt = 64,
  Mt = new Set(["pinned", "ungrouped", I$, "past", rD]);

function GPn(e) {
  return Mt.has(e.toLowerCase())
}

function Iio(e) {
  return Dh(e).slice(0, Lt)
}

function ye(e) {
  if (e === void 0) return;
  let n = Iio(e);
  return n && !GPn(n) ? n : void 0
}
class tt {
  #e = new Map;
  #t = new Set;
  #n = new Set;
  #r = new Set;
  #o = new Set;
  #i = new Set;
  peek(e) {
    return this.#e.get(e)
  }
  invalidate(e) {
    this.#e.delete(e)
  }
  noteAbsent(e) {
    this.#e.delete(e), this.#t.delete(e), this.#n.delete(e)
  }
  noteRejected(e, n) {
    this.#e.set(e, {
      mtimeKey: n,
      state: null
    })
  }
  noteParsed(e, n, r) {
    if (this.#e.size > 1000) this.#e.clear();
    this.#e.set(e, {
      mtimeKey: n,
      state: r
    }), this.#t.delete(e), this.#n.delete(e)
  }
  noteHit(e) {
    this.#t.delete(e)
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return !1;
    return this.#t.add(e), !0
  }
  shouldReportRejected(e) {
    if (this.#n.has(e)) return !1;
    return this.#n.add(e), !0
  }
  shouldReportRecovered(e) {
    if (this.#r.has(e)) return !1;
    return this.#r.add(e), !0
  }
  noteCleanRead(e) {
    this.#r.delete(e)
  }
  shouldReportPruned(e) {
    if (this.#o.has(e)) return !1;
    return this.#o.add(e), !0
  }
  notePruneCandidateLive(e) {
    this.#o.delete(e)
  }
  shouldLogSidecarFallback(e) {
    if (this.#i.has(e)) return !1;
    return this.#i.add(e), !0
  }
}
var nt = new W(() => new tt);
class rt {
  drafts = new Map;
  pins = new Map
}
var Tio = new W(() => new rt);
async function Cio(e, n, {
  cap: r,
  screens: s,
  screenKey: c,
  heal: m
}) {
  if (s.get(c) !== "ok") {
    let y = await e.statMeta(n);
    if (!y.ok) {
      if (y.error.code !== "NotFound") s.set(c, "refused"), await m?.();
      return null
    }
    if (y.value.size > r) return s.set(c, "refused"), null;
    s.set(c, "ok")
  }
  let g = await e.readText([{
    key: n,
    offset: 0,
    length: r + 1
  }]);
  if (!g.ok) return s.delete(c), await m?.(), null;
  let S = g.value.items[0];
  if (!S.found) return null;
  if (S.totalBytes > r) return s.set(c, "refused"), null;
  return S.value
}
var le = () => o().transform(xM),
  at = /^[a-f0-9]{8}$/,
  Jt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;

function ue(e, n) {
  return (r) => {
    if (n(r)) return r;
    t(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn"
    });
    return
  }
}
var we = p(() => u({
    state: o(),
    detail: o(),
    tempo: B(["active", "idle", "blocked"]).optional().catch(void 0),
    inFlight: u({
      tasks: E(),
      queued: E(),
      kinds: C(o()),
      drainableMonitors: E().int().nonnegative().optional(),
      wake: u({
        at: E().optional(),
        reason: o().optional(),
        fires: E().int().nonnegative(),
        keepalive: T(!0).optional()
      }).optional().catch(void 0)
    }).optional(),
    selfWake: I().optional().catch(void 0),
    fan: C(u({
      id: o().optional(),
      kind: B(["agent", "workflow", "shell", "monitor", "mcp", "todo"]).optional().catch(void 0),
      label: o(),
      startedAt: E().optional(),
      doneAt: E().optional(),
      failed: I().optional(),
      group: o().optional()
    })).optional(),
    tokens: E().optional(),
    needs_you: I().optional(),
    needs: o().optional(),
    block: u({
      questions: C(u({
        question: o(),
        options: C(u({
          label: o(),
          description: o()
        }))
      }))
    }).optional(),
    suggestedReply: o().optional(),
    needsOverlay: o().optional(),
    output: me(o(), o()).nullable().default(null),
    structuredResult: me(o(), oe()).optional(),
    children: C(u({
      id: o(),
      href: o(),
      kind: B(["pr", "frame"]).optional().catch(void 0),
      title: o().optional().catch(void 0)
    })).nullable().default(null),
    linkScanOffset: E().default(0),
    linkScanPath: le().transform(ue("linkScanPath", (e) => it(e) && e.endsWith(".jsonl") && Nt(V(e, ".jsonl")) !== null)).optional(),
    template: o(),
    routine: o().optional(),
    respawnFlags: C(o()).default([]).transform((e) => oce(NAi(FDe(e)))),
    bgIsolation: B(["none", "worktree"]).optional().catch(void 0),
    providerEnv: me(o(), o()).transform((e) => {
      let n = LAi(Er(e, xM));
      return n && Lio(n, "the saved job state (state.json providerEnv)")
    }).optional(),
    sessionPermissionRules: u({
      allow: C(o()),
      deny: C(o()),
      addDirs: C(le()).optional()
    }).optional(),
    memoryToggledOff: I().optional(),
    autoMemoryOffThisSession: I().optional(),
    forkSourceAlive: I().optional(),
    forkBoundaryAt: o().optional(),
    forkSessionId: o().optional(),
    forkParentSessionId: o().optional(),
    interactiveLineage: I().optional(),
    intent: o(),
    displayIntent: o().optional(),
    initialPrompt: o().optional(),
    queuedPrompt: o().optional(),
    name: o().optional(),
    nameSource: B(["user", "auto", "collision"]).optional().catch(void 0),
    color: o().optional(),
    sessionId: le(),
    resumeSessionId: o().transform(ue("resumeSessionId", (e) => Nt(e) !== null)).optional(),
    daemonShort: o().transform(ue("daemonShort", (e) => at.test(e))).optional(),
    cliVersion: o().optional(),
    cwd: le(),
    createdAt: o(),
    updatedAt: o(),
    firstTerminalAt: o().nullable().default(null),
    lastTerminalAt: o().optional(),
    worktreePath: le().optional(),
    worktreeBranch: o().optional(),
    worktreeHookBased: I().optional(),
    originCwd: le().optional(),
    bridgeSessionId: o().transform(ue("bridgeSessionId", (e) => Jt.test(e))).optional(),
    bridgeOwnerAccountUuid: o().optional(),
    bridgeOwnerOrganizationUuid: o().optional(),
    bridgeNoHistoryBackfill: I().optional(),
    bridgeOutboundOnly: I().optional(),
    bridgeSessionGroupingId: o().transform(ue("bridgeSessionGroupingId", (e) => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(),
    bridgeSessionSeq: E().transform(ue("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0)).optional(),
    backend: B(["daemon", "peer", "remote"]).catch("daemon").default("daemon").transform((e) => {
      if (e === "daemon") return e;
      return t(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, {
        level: "warn"
      }), "daemon"
    }),
    sock: o().optional(),
    pid: E().optional(),
    keptBy: u({
      pid: E().int().positive(),
      procStart: o().max(64).optional()
    }).optional(),
    sortOrder: E().optional(),
    stateSortOrder: E().optional(),
    group: o().optional(),
    pinned: I().optional(),
    reapedMidWorkAt: o().optional(),
    reapedUnsettledAt: o().optional(),
    deadEpochReapedAt: o().optional(),
    sessionIdTaken: I().optional().catch(void 0),
    replayOwed: I().optional().catch(void 0)
  }).transform(({
    needs_you: e,
    ...n
  }) => {
    let r = n.bridgeOwnerAccountUuid !== void 0 && !vae(n.bridgeOwnerAccountUuid) || n.bridgeOwnerOrganizationUuid !== void 0 && !vae(n.bridgeOwnerOrganizationUuid),
      s = n.tempo ?? (e ? "blocked" : "idle");
    return {
      ...n,
      ...r && {
        bridgeOwnerAccountUuid: void 0,
        bridgeOwnerOrganizationUuid: void 0
      },
      tempo: s,
      ...n.lastTerminalAt === void 0 && Yb(n.state) !== null && s !== "active" && {
        lastTerminalAt: n.firstTerminalAt || n.updatedAt
      }
    }
  })),
  ne = "state.json",
  Y = 8388608;

function M$() {
  return Nsn()
}

function No(e) {
  return U(M$(), e)
}

function my() {
  let e = i.CLAUDE_JOB_DIR;
  if (e) return V(e);
  let n = tb();
  if (n) return V(n.jobDir);
  return z().slice(0, 8)
}

function st(e, n) {
  return Hr(e) ? Ve.job(e, n) : void 0
}

function qIt(e, n) {
  return Zvo(e, n)
}

function YIt(e) {
  return Ve.job(e, [ne])
}

function Xls(e, n) {
  let r = U(No(e), ne),
    s = !1,
    c = Number.NaN;

  function m(w) {
    if (s) return;
    if (Number.isNaN(c)) {
      c = w;
      return
    }
    if (w === c) return;
    h(), n()
  }

  function g() {
    re(r).then((w) => m(w.mtimeMs), () => m(-1))
  }
  g();
  let S = setInterval(g, 200),
    y = setTimeout(h, 1e4);

  function h() {
    if (s) return;
    s = !0, clearInterval(S), clearTimeout(y)
  }
  return h
}

function Mio() {
  return gZ().ownStateWriteDepth > 0
}
async function ic(e, n, r) {
  let s = n.inFlight?.kinds.includes("session_cron") === !0,
    c = s && !n.selfWake && Ue(n.inFlight) ? {
      ...n,
      selfWake: !0
    } : !s && n.selfWake && ml(n) ? {
      ...n,
      selfWake: void 0
    } : n,
    g = ml(c) ? c.lastTerminalAt ? c : {
      ...c,
      lastTerminalAt: c.updatedAt
    } : c.lastTerminalAt !== void 0 ? {
      ...c,
      lastTerminalAt: void 0
    } : c,
    {
      pinned: S,
      sortOrder: y,
      stateSortOrder: h,
      group: w,
      ...x
    } = g,
    N = r ? qIt(e, [ne]) : void 0,
    O = gZ();
  O.ownStateWriteDepth++;
  try {
    if (r && N) {
      let P = await r.write(N, _(x, null, 2), {
        mode: 384,
        parent: "mustExist"
      });
      if (!P.ok) {
        let v = Qm(P.error);
        throw Object.assign(new R(`[jobs] v5 state write failed: ${Ht(P.error)}`, "[jobs] v5 state write failed"), v !== void 0 ? {
          code: v
        } : {})
      }
    } else await zn(U(e, ne), _(x, null, 2), 384)
  } finally {
    O.ownStateWriteDepth--, rh(e)
  }
}

function Td(e) {
  let n = k(e);
  if (n && (tPe.has(n) || n === "ENOENT")) {
    t(`[jobs] state write failed (${n}): ${d(e)}`, {
      level: "error"
    });
    return
  }
  a(e)
}

function VPn(e, n) {
  let r = n !== void 0 && n.id === e?.bridgeSessionId;
  return {
    ownerAccountUuid: r ? n.ownerAccountUuid : void 0,
    ownerOrganizationUuid: r ? n.ownerOrganizationUuid : void 0,
    noHistoryBackfill: e?.noHistoryBackfill || (n !== void 0 && !r ? !0 : n?.noHistoryBackfill)
  }
}

function Pye(e, n, r, s, c) {
  if (!e) return;
  let m = {
    CLAUDE_BRIDGE_REATTACH_SESSION: e
  };
  if (n !== void 0 && n > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(n);
  if (s) m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
  if (c?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = c.ownerAccountUuid;
  if (c?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = c.ownerOrganizationUuid;
  if (c?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (r !== !1) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m
}

function D() {
  return nt.of(H().host)
}

function ke(e, n) {
  return n?.onReadFailure === "null" ? null : e?.state ?? null
}
var Wt = [15, 45],
  Gt = new Set(["ELOOP", "ENXIO", "EISDIR"]);

function Ee(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Gt.has(e.telemetryCode) ? "non-regular" : void 0
}

function dt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== ne
}
var Kt = new Set(["invariant", "permission", "environment"]);

function qt(e) {
  if (e.code === "Unavailable") return !0;
  return e.code === "Failed" && !Kt.has(e.failureClass) && Ee(e) === void 0 && !dt(e)
}
async function Yt(e, n) {
  let r = await n(),
    s = 1;
  for (let c of Wt) {
    if (r.ok || !qt(r.error)) break;
    await J(c), r = await n(), s++
  }
  if (r.ok) {
    if (s === 1) D().noteCleanRead(e);
    else if (D().shouldReportRecovered(e)) l("tengu_bg_state_read_recovered", {
      attempts: s
    })
  }
  return r
}

function ot(e, n, r) {
  let s = D().peek(e);
  if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) t(`[jobs] skipping ${V(e)}: state.json is ${r}`, {
    level: "warn"
  });
  return D().noteRejected(e, `rejected:${n}`), null
}

function rh(e) {
  D().invalidate(e)
}
async function Xt(e, n, r) {
  let s = V(n),
    c = D().peek(n);
  if (c === void 0 || c.mtimeKey.startsWith("rejected:")) {
    let A = await e.statMeta(YIt(s));
    if (!A.ok) {
      if (A.error.code === "NotFound") return _e(n, r);
      let M = Ee(A.error);
      if (M !== void 0) return ot(n, M, M === "oversize" ? "too large" : "not a regular file")
    } else if (A.value.size > Y) {
      let M = `rejected:${A.value.mtimeMs}:${A.value.size}`;
      if (D().peek(n)?.mtimeKey !== M) t(`[jobs] skipping ${V(n)}: state.json is too large (${A.value.size} bytes)`, {
        level: "warn"
      }), D().noteRejected(n, M);
      return null
    }
  }
  let m = YIt(s),
    S = await Yt(n, () => e.read([m, Ve.job(s, ["order"]), Ve.job(s, ["stateOrder"]), Ve.job(s, ["group"])]));
  if (!S.ok && dt(S.error)) {
    if (D().shouldLogSidecarFallback(n)) t(`[jobs] ${V(n)}: a sidecar could not be read as a regular file; using state.json alone`);
    let A = await e.read([m]);
    S = A.ok ? {
      ok: !0,
      value: {
        items: [A.value.items[0], {
          found: !1
        }, {
          found: !1
        }, {
          found: !1
        }]
      }
    } : A
  }
  let y = D().peek(n);
  if (!S.ok) {
    let A = Ee(S.error);
    if (A !== void 0) return ot(n, A, A === "oversize" ? "too large" : "not a regular file");
    if (t(`[jobs] ${V(n)}: v5 state read failed \u2014 ${S.error.code}`, {
        level: "warn"
      }), D().shouldReportTransient(n)) l("tengu_bg_state_read_transient", {
      errno: f(S.error.code),
      had_cache: y !== void 0
    });
    return ke(y, r)
  }
  let [h, w, x, N] = S.value.items;
  if (!h.found) return _e(n, r);
  if (h.totalBytes > Y) {
    let A = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (y?.mtimeKey === A) return null;
    return t(`[jobs] skipping ${V(n)}: state.json is too large (${h.totalBytes} bytes)`, {
      level: "warn"
    }), D().noteRejected(n, A), null
  }
  let O = (A) => Buffer.from(A.value.buffer, A.value.byteOffset, A.value.byteLength).toString("utf-8"),
    P = (A) => A.found && A.totalBytes <= Y ? O(A) : null,
    v = (A) => A.found && A.totalBytes <= Y ? A.version : 0,
    L = `v5:${h.version}:${v(w)}:${v(x)}:${v(N)}`;
  if (y?.mtimeKey === L) return D().noteHit(n), y.state;
  return Zt(n, L, O(h), P(w), P(x), P(N), y, r)
}

function Zt(e, n, r, s, c, m, g, S) {
  try {
    let y = ee(r),
      h = we().safeParse(y);
    if (!h.success) {
      if (t(`[jobs] skipping ${V(e)}: state.json schema validation failed \u2014 ${h.error.message}`, {
          level: "warn"
        }), D().shouldReportRejected(e)) l("tengu_bg_state_read_rejected", {});
      return D().noteRejected(e, n), null
    }
    let w = s !== null ? Number(s) : void 0,
      x = c !== null ? Number(c) : void 0,
      N = we().in.shape,
      O = y !== null && typeof y === "object" ? Object.entries(y).filter(([v]) => !Object.hasOwn(N, v)) : [],
      P = {
        ...Object.fromEntries(O),
        ...h.data
      };
    if (Number.isFinite(w)) P = {
      ...P,
      sortOrder: w
    };
    if (Number.isFinite(x)) P = {
      ...P,
      stateSortOrder: x
    };
    if (m !== null && m.trim()) P = {
      ...P,
      group: m.trim()
    };
    if (P.group !== void 0) P = {
      ...P,
      group: ye(P.group)
    };
    return D().noteParsed(e, n, P), P
  } catch (y) {
    if (t(`[jobs] ${V(e)}: state.json read/parse failed \u2014 ${y instanceof Error?y.message:String(y)}`, {
        level: "warn"
      }), D().shouldReportTransient(e)) l("tengu_bg_state_read_transient", {
      errno: tr(y) ?? b("unknown"),
      had_cache: g !== void 0
    });
    return ke(g, S)
  }
}

function _e(e, n) {
  return D().noteAbsent(e), n?.onAbsent?.(), null
}
async function KPn(e, n) {
  return Pe(e, n, {
    onReadFailure: "null"
  })
}
async function Fo(e, n) {
  return Pe(e, n, void 0)
}
async function qPn(e, n) {
  let r = {
      absent: !1
    },
    s = await Pe(e, n, {
      onAbsent: () => {
        r.absent = !0
      }
    });
  return r.absent ? "absent" : s
}
async function Pe(e, n, r) {
  if (n !== void 0 && qIt(e, [ne]) !== void 0) return Xt(n, e, r);
  let s = U(e, ne),
    c = U(e, "order"),
    m = U(e, "stateOrder"),
    g = U(e, "group"),
    S, y;
  try {
    let [w, x, N, O] = await Promise.all([re(s), re(c).catch(() => null), re(m).catch(() => null), re(g).catch(() => null)]);
    if (!w.isFile() || w.size > Y) {
      let v = `rejected:${w.mtimeMs}:${w.size}`;
      if (D().peek(e)?.mtimeKey === v) return null;
      return t(`[jobs] skipping ${V(e)}: state.json is ${w.isFile()?`too large (${w.size} bytes)`:"not a regular file"}`, {
        level: "warn"
      }), D().noteRejected(e, v), null
    }
    let P = (v) => v !== null && v.isFile() && v.size <= Y;
    y = {
      order: P(x),
      stateOrder: P(N),
      group: P(O)
    }, S = `${w.mtimeMs}:${y.order?x.mtimeMs:0}:${y.stateOrder?N.mtimeMs:0}:${y.group?O.mtimeMs:0}`
  } catch (w) {
    if (K(w)) return _e(e, r);
    t(`[jobs] ${V(e)}: state.json stat failed \u2014 ${w instanceof Error?w.message:String(w)}`, {
      level: "warn"
    });
    let x = D().peek(e);
    if (D().shouldReportTransient(e)) l("tengu_bg_state_read_transient", {
      errno: tr(w) ?? b("unknown"),
      had_cache: x !== void 0
    });
    return ke(x, r)
  }
  let h = D().peek(e);
  if (h?.mtimeKey === S) return D().noteHit(e), h.state;
  try {
    let [w, x, N, O] = await Promise.all([ge(s, "utf-8"), y.order ? ge(c, "utf-8").catch(() => null) : Promise.resolve(null), y.stateOrder ? ge(m, "utf-8").catch(() => null) : Promise.resolve(null), y.group ? ge(g, "utf-8").catch(() => null) : Promise.resolve(null)]), P = ee(w), v = we().safeParse(P);
    if (!v.success) {
      if (t(`[jobs] skipping ${V(e)}: state.json schema validation failed \u2014 ${v.error.message}`, {
          level: "warn"
        }), D().shouldReportRejected(e)) l("tengu_bg_state_read_rejected", {});
      return D().noteRejected(e, S), null
    }
    let L = x !== null ? Number(x) : void 0,
      A = N !== null ? Number(N) : void 0,
      M = we().in.shape,
      j = P !== null && typeof P === "object" ? Object.entries(P).filter(([ie]) => !Object.hasOwn(M, ie)) : [],
      G = {
        ...Object.fromEntries(j),
        ...v.data
      };
    if (Number.isFinite(L)) G = {
      ...G,
      sortOrder: L
    };
    if (Number.isFinite(A)) G = {
      ...G,
      stateSortOrder: A
    };
    if (O !== null && O.trim()) G = {
      ...G,
      group: O.trim()
    };
    if (G.group !== void 0) G = {
      ...G,
      group: ye(G.group)
    };
    return D().noteParsed(e, S, G), G
  } catch (w) {
    if (K(w)) return _e(e, r);
    if (t(`[jobs] ${V(e)}: state.json read/parse failed \u2014 ${w instanceof Error?w.message:String(w)}`, {
        level: "warn"
      }), D().shouldReportTransient(e)) l("tengu_bg_state_read_transient", {
      errno: tr(w) ?? b("unknown"),
      had_cache: h !== void 0
    });
    return ke(h, r)
  }
}
async function YPn(e, n) {
  rh(e);
  let r = await Fo(e, n).catch(() => null);
  if (r !== null && r.state !== "done" && r.state !== "stopped" && r.state !== "blocked" && r.state !== "failed") await J(50), rh(e), r = await Fo(e, n).catch(() => null) ?? r;
  return r
}

function te() {
  return U(M$(), "pins.json")
}
var Qt = 5000;
async function LDe(e) {
  if (e) return en(e);
  try {
    let n = await re(te());
    if (!n.isFile() || n.size > Y) {
      if (!n.isFile()) await he();
      return new Set
    }
    return xe(await ge(te(), "utf-8"))
  } catch (n) {
    if (K(n)) return await zn(te(), _([])).catch((r) => {
      if (!K(r)) Td(r)
    }), new Set;
    return new Set
  }
}
async function en(e) {
  let n = await Cio(e, Ve.jobPins(), {
    cap: Y,
    screens: lt(),
    screenKey: te(),
    heal: he
  });
  return xe(n ?? void 0)
}

function lt() {
  return Tio.of(H().host).pins
}

function xe(e) {
  if (e === void 0 || e.length > Y) return new Set;
  let n;
  try {
    n = ee(e)
  } catch {
    return new Set
  }
  if (!Array.isArray(n)) return new Set;
  return new Set(n.filter((r) => typeof r === "string"))
}
async function he(e) {
  let n = await re(te()).catch(() => {
    return
  });
  if (n === void 0 || n.isFile() && !(e?.evenRegular && n.size > Y)) return !1;
  return await ce(te(), {
    recursive: !0,
    force: !0
  }).catch(() => {}), !0
}
async function rce(e, n, r, s, c) {
  let m = No(e),
    g = await Fo(m, s);
  if (!g) return !1;
  if (g.name === n) return !0;
  rh(m);
  let S = await Fo(m, s) ?? g;
  if (S.name === n || r === "auto" && S.name) return !0;
  if (!ut(S, c)) return !1;
  return ic(m, {
    ...S,
    name: n,
    nameSource: r,
    updatedAt: new Date().toISOString()
  }, s).then(() => !0, (y) => {
    if (!K(y)) Td(y);
    return !1
  })
}
async function XPn(e, n, r) {
  let s = No(e),
    c = await Fo(s, r);
  if (!c) return !1;
  if (c.color === n) return !0;
  rh(s);
  let m = await Fo(s, r) ?? c;
  if (m.color === n) return !0;
  return ic(s, {
    ...m,
    color: n,
    updatedAt: new Date().toISOString()
  }, r).then(() => !0, (g) => {
    if (!K(g)) Td(g);
    return !1
  })
}

function Dio() {
  return gZ().relocatedCwd
}
async function JPn(e, n) {
  let r = i.CLAUDE_JOB_DIR;
  if (!r || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  gZ().relocatedCwd = e, rh(r);
  let s = await Fo(r, n),
    c = s?.worktreePath ? s.originCwd : e;
  if (!s || s.cwd === e && s.originCwd === c) return;
  rh(r);
  let m = await Fo(r, n) ?? s;
  await ic(r, {
    ...m,
    cwd: e,
    originCwd: m.worktreePath ? m.originCwd : e,
    updatedAt: new Date().toISOString()
  }, n).catch((g) => {
    if (!K(g)) Td(g)
  })
}
async function Jls(e, n, r) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  rh(s);
  let c = await Fo(s, r);
  if (!c || c.resumeSessionId === e && c.linkScanPath === n) return;
  rh(s);
  let m = await Fo(s, r) ?? c;
  await ic(s, {
    ...m,
    resumeSessionId: e,
    linkScanPath: n,
    linkScanOffset: 0,
    updatedAt: new Date().toISOString()
  }, r).catch((g) => {
    if (!K(g)) Td(g)
  })
}
async function ZEe(e, n, {
  includeSettled: r = !1
} = {}) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await B9e(async () => {
    rh(s);
    let c = await Fo(s, n);
    if (!c?.inFlight || ml(c) && !r || c.tempo === "active") return;
    let m = c.inFlight;
    if (e.count === m.tasks && (e.drainableMonitors ?? 0) === (m.drainableMonitors ?? 0) && e.kinds.length === m.kinds.length && e.kinds.every((g) => m.kinds.includes(g))) return;
    await ic(s, {
      ...c,
      inFlight: {
        tasks: e.count,
        queued: m.queued,
        kinds: [...e.kinds],
        ...e.drainableMonitors !== void 0 && e.drainableMonitors > 0 && {
          drainableMonitors: e.drainableMonitors
        },
        ...m.wake !== void 0 && {
          wake: m.wake
        }
      },
      updatedAt: new Date().toISOString()
    }, n).catch((g) => {
      if (!K(g)) Td(g)
    })
  })
}

function ut(e, n) {
  if (n === void 0 || !e.name) return !0;
  if (e.nameSource === "auto" || e.nameSource === "collision") return !0;
  return n.includes(ta(e.name))
}
async function lL(e, n, r, s, c, m, g) {
  let S = i.CLAUDE_JOB_DIR;
  if (!S || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await B9e(async () => {
    rh(S);
    let y = await Fo(S, c);
    if (!y?.respawnFlags) return;
    if (g && !g(y.respawnFlags)) return;
    let h = [e, ...n],
      w = (v) => {
        let L = [];
        for (let A = 0; A < v.length; A++) {
          let M = v[A];
          if (h.some((j) => M === j || M.startsWith(`${j}=`))) {
            if (M.indexOf("=") === -1 && v[A + 1] !== void 0) A++;
            continue
          }
          L.push(M)
        }
        if (r === null) return L;
        return [...L, ...$k(e, r)]
      },
      x = w(y.respawnFlags);
    if (x.length === y.respawnFlags.length && x.every((v, L) => v === y.respawnFlags[L])) return;
    rh(S);
    let N = await Fo(S, c) ?? y,
      O = N.respawnFlags ?? y.respawnFlags;
    if (g && !g(O)) return;
    let P = ut(N, m);
    await ic(S, {
      ...N,
      ...P ? s : {},
      respawnFlags: w(O),
      updatedAt: new Date().toISOString()
    }, c).catch((v) => {
      if (!K(v)) Td(v)
    })
  })
}
async function Qls(e, n, r) {
  let s = i.CLAUDE_JOB_DIR;
  if (!s || i.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await B9e(async () => {
    rh(s);
    let c = await Fo(s, r);
    if (!c?.respawnFlags) return;
    let m = $k(e, n);
    for (let S = 0; S <= c.respawnFlags.length - m.length; S++)
      if (m.every((y, h) => c.respawnFlags[S + h] === y)) return;
    rh(s);
    let g = await Fo(s, r) ?? c;
    await ic(s, {
      ...g,
      respawnFlags: [...g.respawnFlags ?? [], ...m],
      updatedAt: new Date().toISOString()
    }, r).catch((S) => {
      if (!K(S)) Td(S)
    })
  })
}
async function Ie(e, n) {
  await ce(e, {
    force: !0
  });
  let r = await qO(e, n);
  try {
    await Is(r, e)
  } catch (s) {
    throw await ce(r, {
      force: !0
    }).catch(() => {}), s
  }
}
async function Ce(e, n, r) {
  let s = await e.write(n, r, {
    parent: "mustExist",
    mode: 438 & ~process.umask()
  });
  if (!s.ok) {
    let c = Qm(s.error);
    throw Object.assign(new R(`[jobs] v5 sidecar write failed: ${Ht(s.error)}`, "[jobs] v5 sidecar write failed"), c !== void 0 ? {
      code: c
    } : {})
  }
}
async function Zls(e, n, r) {
  let s = X() && r ? qIt(e, ["order"]) : void 0;
  if (r && s) await Ce(r, s, String(n));
  else await Ie(U(e, "order"), String(n));
  rh(e)
}
async function eds(e, n, r) {
  let s = X() && r ? qIt(e, ["stateOrder"]) : void 0;
  if (r && s) await Ce(r, s, String(n));
  else await Ie(U(e, "stateOrder"), String(n));
  rh(e)
}
async function Lhr(e, n, r) {
  let s = U(e, "group"),
    c = ye(n),
    m = X() && r ? qIt(e, ["group"]) : void 0;
  if (r && m)
    if (c) await Ce(r, m, c);
    else {
      let g = await r.delete(m);
      if (!g.ok) throw new R(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed")
    }
  else if (c) await Ie(s, c);
  else await ce(s, {
    force: !0
  });
  rh(e)
}
async function tds(e) {
  let n = U(M$(), ".order");
  await Oe(M$(), {
    recursive: !0
  });
  await using r = await Zd(n, {
    realpath: !1,
    stale: 5000,
    retries: {
      retries: 5,
      minTimeout: 20
    },
    onCompromised: (s) => t(`jobs/.order lock compromised (likely process suspend or slow fs): ${s}`, {
      level: "error"
    })
  });
  return await e()
}
var ct = Qy();

function B9e(e) {
  return ct.run("own-state.json", e)
}

function Nhr(e, n, r) {
  return ct.run("pins.json", async () => {
    if (X() && r) return tn(e, n, r);
    let s = te();
    await Oe(Ut(s), {
      recursive: !0
    });
    await using c = await Zd(s, {
      realpath: !1,
      stale: Qt,
      retries: {
        retries: 5,
        minTimeout: 20
      },
      onCompromised: (g) => t(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, {
        level: "error"
      })
    });
    let m = await LDe();
    if (n ? m.has(e) : !m.has(e)) return;
    if (n) m.add(e);
    else m.delete(e), await ce(U(No(e), "order")).catch((g) => {
      if (!K(g)) throw g
    }), rh(No(e));
    await zn(s, _([...m], null, 2))
  })
}
async function tn(e, n, r) {
  let s = (y) => {
      let h = xe(y?.value);
      if (n ? h.has(e) : !h.has(e)) return {
        skip: !0,
        result: !1
      };
      if (n) h.add(e);
      else h.delete(e);
      return {
        write: _([...h], null, 2),
        result: !0
      }
    },
    c = lt(),
    m = await r.statMeta(Ve.jobPins());
  if (m.ok && m.value.size > Y) await he({
    evenRegular: !0
  }), c.delete(te());
  else if (!m.ok && Ee(m.error) !== void 0) await he(), c.delete(te());
  let g = {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    },
    S = await r.updateText(Ve.jobPins(), s, g);
  if (!S.ok && await he()) S = await r.updateText(Ve.jobPins(), s, g);
  if (!S.ok) throw new R(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
  if (!n && S.value.result === !0) {
    let y = st(e, ["order"]);
    if (y) {
      let h = await r.delete(y);
      if (!h.ok) t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, {
        level: "warn"
      })
    } else await ce(U(No(e), "order")).catch((h) => {
      if (!K(h)) t(`[jobs] order sidecar release failed after unpin: ${d(h)}`, {
        level: "warn"
      })
    });
    rh(No(e))
  }
}
async function EI(e, n, r) {
  if (n) return rn(n, e, r);
  let s;
  try {
    s = await jt(M$(), {
      withFileTypes: !0
    })
  } catch (S) {
    if (tG(k(S))) r?.();
    return []
  }
  let [c, m] = await Promise.all([LDe(), Promise.all(s.filter((S) => S.isDirectory()).map(async (S) => {
    let y = await Fo(U(M$(), S.name));
    return y ? {
      id: S.name,
      state: y
    } : null
  }))]), g = m.filter((S) => S !== null).map((S) => c.has(S.id) ? {
    ...S,
    state: {
      ...S.state,
      pinned: !0
    }
  } : S);
  return e ? XIt(g, e) : g
}
async function nn(e) {
  let n = [],
    r;
  do {
    let s = await e.listEntries({
      namespace: "job"
    }, r === void 0 ? {
      skipScopeStats: !0
    } : {
      cursor: r,
      skipScopeStats: !0
    });
    if (!s.ok) return {
      ok: !1,
      error: s.error
    };
    for (let c of s.value.items)
      if (c.kind === "scope" && c.scope.namespace === "job" && c.scope.jobId !== void 0 && c.scope.relPath === void 0 && Hr(c.scope.jobId)) n.push(c.scope.jobId);
    r = s.value.cursor
  } while (r !== void 0);
  return {
    ok: !0,
    ids: n
  }
}
async function rn(e, n, r) {
  let s = await nn(e);
  if (!s.ok) {
    if (i1t(s.error)) r?.();
    return []
  }
  let c = s.ids,
    [m, g] = await Promise.all([LDe(e), Promise.all(c.map(async (y) => {
      let h = await Fo(No(y), e);
      return h ? {
        id: y,
        state: h
      } : null
    }))]),
    S = g.filter((y) => y !== null).map((y) => m.has(y.id) ? {
      ...y,
      state: {
        ...y.state,
        pinned: !0
      }
    } : y);
  return n ? XIt(S, n) : S
}

function XIt(e, n) {
  let r = Date.now();
  return e.map((s) => {
    if (ml(s.state)) return s;
    if (n.has(s.id)) return s;
    if (s.state.keptBy !== void 0 && dn(s.state)) return s;
    if (r - Date.parse(s.state.createdAt) < on) return s;
    return {
      ...s,
      state: an(s.state)
    }
  })
}
var on = 5000;

function an(e) {
  if (QIt(e)) return {
    ...e,
    tempo: "blocked",
    inFlight: void 0
  };
  return {
    ...e,
    state: "failed",
    tempo: "idle",
    needs: void 0,
    block: void 0,
    inFlight: void 0,
    detail: bh(e.detail, "; respawning")
  }
}
var eTe = "starting\u2026",
  Uk = "send a prompt to start";

function JIt(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs
}
var Eut = `(idle \u2014 ${Uk})`,
  j9e = ["starting", "resuming", "adopted", "crashed"],
  KXt = 172800000,
  sn = "ended while the background service was off";

function NDe(e) {
  let n = new Date().toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? _s(e.detail) : eTe,
    tempo: e.tempo ?? "active",
    needs: e.needs,
    inFlight: e.inFlight,
    output: null,
    children: null,
    linkScanOffset: 0,
    linkScanPath: e.linkScanPath,
    template: e.template.name,
    routine: e.routine,
    respawnFlags: e.respawnFlags ?? [],
    bgIsolation: e.bgIsolation,
    providerEnv: e.providerEnv && DAi(e.providerEnv, e.cwd),
    sessionPermissionRules: e.sessionPermissionRules,
    memoryToggledOff: e.memoryToggledOff,
    autoMemoryOffThisSession: e.autoMemoryOffThisSession,
    forkSourceAlive: e.forkSourceAlive,
    forkBoundaryAt: e.forkBoundaryAt,
    forkSessionId: e.forkSessionId,
    forkParentSessionId: e.forkParentSessionId,
    interactiveLineage: e.interactiveLineage,
    intent: e.intent,
    displayIntent: e.displayIntent,
    name: e.name,
    nameSource: e.nameSource,
    color: KVe({
      userOverride: e.color,
      agentDefinitionColor: e.template.color
    }),
    initialPrompt: e.template.initialPrompt,
    sessionId: e.sessionId,
    resumeSessionId: e.sessionId,
    daemonShort: e.sessionId.slice(0, 8),
    cwd: e.cwd,
    createdAt: n,
    updatedAt: n,
    firstTerminalAt: null,
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.worktreeHookBased,
    originCwd: e.originCwd,
    backend: "daemon"
  }
}
async function nds(e, n, r) {
  if (n.length === 0) return e;
  let s = new Set(e.map((h) => h.id)),
    c = n.filter((h) => at.test(h.short) && !s.has(h.short) && h.source !== "spare" && !h.dying);
  if (c.length === 0) return e;
  let m = await t1({
      silent: !0
    }, r),
    g = await Promise.all(c.map((h) => {
      let w = m.workers[h.short];
      return Ihr(h.pid, w?.pid === h.pid ? w.procStart : void 0)
    }));
  for (let [h, w] of c.entries())
    if (g[h] !== "live") {
      if (t(`[adoptRosterOrphans] pruned dead record ${w.short} (${g[h]})`), D().shouldReportPruned(w.short)) l("tengu_bg_roster_orphan_pruned", {
        reason: f(g[h] ?? "dead_pid")
      })
    } else D().notePruneCandidateLive(w.short);
  let S = c.filter((h, w) => g[w] === "live");
  if (S.length === 0) return e;
  let y = S.map((h) => {
    let w = {
        ...NDe({
          template: {
            name: h.agent ?? "bg",
            description: ""
          },
          routine: h.routine,
          intent: h.intent,
          name: h.name,
          detail: h.detail,
          ...h.tempo === "active" && (h.state === "running" || j9e.includes(h.state)) ? h.routine ? {
            tempo: "idle"
          } : {
            tempo: "blocked",
            needs: Uk
          } : {
            tempo: h.tempo,
            needs: h.needs
          },
          sessionId: xM(h.sessionId),
          cwd: xM(h.cwd),
          worktreePath: h.worktreePath === void 0 ? void 0 : xM(h.worktreePath)
        }),
        createdAt: new Date(h.createdAt ?? h.startedAt).toISOString(),
        daemonShort: h.short,
        state: j9e.includes(h.state) ? "working" : h.state,
        ...$P(h.state) && {
          inFlight: {
            tasks: 0,
            queued: 0,
            kinds: []
          }
        }
      },
      x = No(h.short),
      N = r ? st(h.short, [ne]) : void 0;
    if (r && N) r.write(N, _(w), {
      precondition: {
        type: "ifAbsent"
      },
      mode: 384
    }).then((O) => {
      if (O.ok) l("tengu_bg_roster_orphan_adopted", {});
      else if (O.error.code !== "AlreadyExists") Td(new R(`[jobs] v5 orphan seed write failed: ${O.error.code}`, "[jobs] v5 orphan seed write failed"))
    });
    else Oe(x, {
      recursive: !0
    }).then(() => SN(U(x, "state.json"), _(w), 384)).then(() => l("tengu_bg_roster_orphan_adopted", {})).catch((O) => {
      if (k(O) !== "EEXIST") Td(O)
    });
    return {
      id: h.short,
      state: w
    }
  });
  return [...e, ...y]
}

function Yb(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null
}

function $P(e) {
  return Yb(e) !== null
}

function ml(e) {
  return $P(e.state) && e.tempo !== "active"
}

function dn(e) {
  return e.intent === "" && e.needs === Uk && e.tempo === "blocked" && !ml(e)
}

function GE(e) {
  return e.template === "exec" && e.respawnFlags.length === 0
}

function QIt(e) {
  return e.state === "blocked" && !GE(e)
}

function Tut(e) {
  return e.backend === "daemon" && !GE(e)
}

function Oye(e) {
  let n = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return xM(n)
}

function QPn(e, n) {
  if (e.backend === "remote") return !0;
  let r = $t(n, Oye(e));
  return r.split(/[/\\]/, 1)[0] !== ".." && !it(r)
}

function ZIt(e) {
  let n = (r) => r?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return n(e.intent) || n(e.initialPrompt)
}

function hZ(e) {
  return e.routine !== void 0 || e.selfWake === !0 || (e.inFlight?.kinds.includes("session_cron") ?? !1) || ZIt(e)
}

function Cut(e, n, r, s, c) {
  let m = No(e);
  return Fo(m, c).then(async (g) => {
    if (!g || ml(g) || n === "failed" && QIt(g)) return "none";
    let S = Date.now(),
      y = new Date(S).toISOString(),
      h = s?.resumable === "auto-resume" && n === "failed" && !GE(g) && S - Date.parse(g.updatedAt) > KXt;
    return await ic(m, {
      ...g,
      state: h ? "stopped" : n === "crashed" ? "failed" : n,
      detail: h ? sn : n === "stopped" ? "stopped" : n === "failed" ? bh(g.detail || r, "; respawning") : r,
      tempo: "idle",
      inFlight: void 0,
      needs: void 0,
      updatedAt: y,
      firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y),
      lastTerminalAt: h ? g.updatedAt : y,
      ...s?.resumable === "auto-resume" && n === "failed" && (h ? {
        deadEpochReapedAt: y
      } : {
        reapedMidWorkAt: g.updatedAt
      }),
      ...s?.resumable === "wake-only" && n === "failed" && {
        reapedUnsettledAt: g.updatedAt
      }
    }, c), h ? "dead-epoch" : "settled"
  }).catch((g) => (Td(g), "none"))
}
var un = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";

function rds(e) {
  return Nt(e.trim()) !== null
}

function ods(e) {
  return `Error: ${tMt(e)} is not a cloud session ID.
For a session on this computer, run \`claude --resume ${e.trim()}\`. For a cloud session, pass its ID (session_... or cse_...) or its claude.ai/code URL.`
}

function OAi() {
  return !1
}

function sds(e) {
  let n = "Error: ",
    r = "--cloud",
    s = `
${un}`;
  if (e.hasPool || e.hasEnvironmentQuery) {
    let c = Rut(e.isChosenByNoMonorepo === !0);
    n = c.prefix, r = c.flag, s = ""
  }
  if (e.loneWordValue !== void 0 && rds(e.loneWordValue)) return ods(e.loneWordValue);
  if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${tMt(e.loneWordValue)} is not a cloud session ID or URL.
With --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
    return `Error: ${r} cannot be combined with --print.
Starting a new cloud session with ${r} is interactive only: drop --print, or drop ${r} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`
  }
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${tMt(e.loneWordValue)} is not a cloud session ID or URL.
Without an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run from a TTY.`;
    return `Error: ${r} requires an interactive terminal.
Non-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${r}. Drop ${r}, or run from a TTY.`
  }
  if (e.continue) return `${n}${r} cannot be combined with --continue.${s}`;
  if (e.hasConnect || e.hasSSH || e.hasTeleport) {
    let c = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : "--teleport";
    return `${n}${r} cannot be combined with ${c} \u2014 both select a remote backend; pick one.`
  }
  if (e.resume || e.fromPr) {
    let c = e.resume ? "--resume" : "--from-pr";
    return `${n}${r} cannot be combined with ${c}.${s}`
  }
  return null
}

function IAi(e) {
  return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json"
}

function MAi(e) {
  return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json"
}

function ids(e) {
  if (e.some((n) => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return "--bg and --environment are different backends. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
  return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session."
}

function Rut(e) {
  return {
    prefix: "Error: ",
    flag: "--environment"
  }
}

function ads(e) {
  if (e.some((n) => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return !0;
  return e.some((n) => n === "--cloud" || n.startsWith("--cloud=") || n === "--remote" || n.startsWith("--remote="))
}

function eMt(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--") {
      for (let c = r; c < e.length; c++) n.push(e[c]);
      break
    }
    if (s.startsWith("--environment=") || s.startsWith("--pool=")) continue;
    if (s === "--environment" || s === "--pool") {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
      continue
    }
    n.push(s)
  }
  return n
}
var cn = 100;

function tMt(e) {
  let n = Q(e, cn);
  return wme(_(n.length < e.length ? `${n}\u2026` : n))
}
export {
  Tio,
  Cio,
  _ut,
  HXt,
  Uls,
  jIt,
  vAi,
  EAi,
  Rio,
  TAi,
  Vu,
  $Pn,
  nD,
  CAi,
  WIt,
  ece,
  Ahr,
  zIt,
  Aio,
  Bls,
  GIt,
  jls,
  xye,
  Wls,
  xhr,
  $Xt,
  UXt,
  VIt,
  BXt,
  but,
  UPn,
  jXt,
  $9e,
  Sut,
  WXt,
  wut,
  zXt,
  kut,
  zls,
  Phr,
  GXt,
  xio,
  RAi,
  Gls,
  U9e,
  Vls,
  Kls,
  vut,
  Ohr,
  Pio,
  Oio,
  VXt,
  t1,
  Ax,
  tce,
  Ihr,
  BPn,
  nce,
  jPn,
  AAi,
  JEe,
  qls,
  Mhr,
  P9,
  QEe,
  $k,
  WPn,
  zPn,
  xAi,
  Dhr,
  Yls,
  KIt,
  PAi,
  I$,
  rD,
  GPn,
  Iio,
  M$,
  No,
  my,
  qIt,
  YIt,
  Xls,
  Mio,
  ic,
  Td,
  VPn,
  Pye,
  rh,
  KPn,
  Fo,
  qPn,
  YPn,
  LDe,
  rce,
  XPn,
  Dio,
  JPn,
  Jls,
  ZEe,
  lL,
  Qls,
  Zls,
  eds,
  Lhr,
  tds,
  B9e,
  Nhr,
  EI,
  XIt,
  eTe,
  Uk,
  JIt,
  Eut,
  j9e,
  KXt,
  NDe,
  nds,
  Yb,
  $P,
  ml,
  GE,
  QIt,
  Tut,
  Oye,
  QPn,
  ZIt,
  hZ,
  Cut,
  rds,
  ods,
  OAi,
  sds,
  IAi,
  MAi,
  ids,
  Rut,
  ads,
  eMt,
  tMt
};
