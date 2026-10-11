// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c, ue, Oa, bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, st, te, l, v, ao, Kg, Sre, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { ns, aE } from "B:/~BUN/root/chunk-54p0h65d.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { q, io, j, Y, fd, iQ, F$ } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { b, J, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Yyo, x$n, Cme, y3 } from "B:/~BUN/root/chunk-mmtwp5d6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { IN } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Ay } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Bo, ZN, A$, Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { CB, bge } from "B:/~BUN/root/chunk-30zp50p7.js";
import { gB } from "B:/~BUN/root/chunk-f71hcy5v.js";
import { g$t, M_ } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { JEe } from "B:/~BUN/root/chunk-rdxve5qj.js";
import { S_e } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { _ne } from "B:/~BUN/root/chunk-290k5gh5.js";
import { iPt } from "B:/~BUN/root/chunk-dt6tzt7w.js";
import { sce, Tt, WHr, QKn, hb } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Op } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Ri } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { li } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { k6e } from "B:/~BUN/root/chunk-t1afcev5.js";
import { F6e, VX } from "B:/~BUN/root/chunk-45e6pkwp.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { G5e } from "B:/~BUN/root/chunk-r833zsf7.js";
import { Fm } from "B:/~BUN/root/chunk-dfh5rt4g.js";
import { fde, o, E, M, ae, C, u, ut, $e, Qo, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { gf, rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { delimiter as xe, isAbsolute as lt } from "path";
var Ee = ["shell", "slash", "fleet", "spare", "respawn"];
function Qho(e) {
  return Ee.includes(e);
}
var proto_2 = 1,
  Jxt = 1,
  DL = /^[a-f0-9]{8}$/,
  d3 = "\x1B_cc-daemon-detach\x1B\\",
  ne = "\x1B\\",
  ze = "\x1B_cc-detach-msg;",
  jen = "\x1B_cc-daemon-hint\x1B\\";
function wqe(e) {
  return jen + e + jen;
}
var le = "\x1B_cc-d-imark;",
  ct = Buffer.from(le, "latin1");
function jFn(e) {
  return le + b(e) + ne;
}
function dkr(e, r, n) {
  let s = n?.maxPayload ?? 512,
    p = e.length > 0 ? Buffer.concat([e, r]) : r,
    marks = [],
    g = [],
    S = 0,
    w = 0,
    h = -1,
    k = !1;
  for (;;) {
    let _ = p.indexOf(le, w);
    if (_ < 0) break;
    let D = _ + le.length,
      R = k ? -1 : h >= D ? h : h = p.indexOf(ne, D);
    if (R < 0) {
      k = !0;
      let L = p.subarray(_);
      if (L.length > le.length + s) {
        w = D;
        continue;
      }
      let G = !1;
      for (let re = D; re < p.length; re++) {
        let ke = p[re];
        if (ke === 24 || ke === 26 || ke === 27 && re < p.length - 1) {
          G = !0;
          break;
        }
      }
      if (G) {
        w = D;
        continue;
      }
      return g.push(p.subarray(S, _)), {
        marks: marks,
        carry: Buffer.from(L),
        cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
      };
    }
    let N = !1;
    if (R - D <= s) try {
      let L = J(p.subarray(D, R).toString("utf8"));
      if (L !== null && typeof L === "object" && (L.kind === "content_paint" || L.kind === "prompt_idle")) {
        if (N = !0, n?.requireNonce === void 0 || L.nonce === n.requireNonce) marks.push({
          kind: L.kind,
          msgsLoaded: vqe(L.msgsLoaded),
          msgsInJsonl: vqe(L.msgsInJsonl),
          msgsRenderedAtFirstPaint: vqe(L.msgsRenderedAtFirstPaint)
        });
      }
    } catch {}
    if (N) g.push(p.subarray(S, _)), S = R + ne.length;
    w = N ? R + ne.length : D;
  }
  let O = p.subarray(w),
    F = ct,
    x = 0,
    T = Math.min(O.length, F.length - 1);
  e: for (let _ = T; _ > 0; _--) {
    let D = O.length - _;
    for (let R = 0; R < _; R++) if (O[D + R] !== F[R]) continue e;
    x = _;
    break;
  }
  return g.push(p.subarray(S, p.length - x)), {
    marks: marks,
    carry: x > 0 ? Buffer.from(O.subarray(O.length - x)) : Buffer.alloc(0),
    cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
  };
}
function vqe(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Fe ? e : void 0;
}
var Fe = 1e9,
  oe = () => E().int().nonnegative().max(Fe).optional(),
  pt = f(() => u({
    kind: z(["content_paint", "prompt_idle"]),
    msgsLoaded: oe(),
    msgsInJsonl: oe(),
    msgsRenderedAtFirstPaint: oe()
  })),
  ft = f(() => ut({
    kind: z(["content_paint", "prompt_idle"]),
    msgsLoaded: oe(),
    msgsInJsonl: oe(),
    msgsRenderedAtFirstPaint: oe()
  }));
function ukr(e) {
  let r = ft().safeParse(e);
  if (!r.success) return null;
  return {
    kind: r.data.kind,
    msgsLoaded: r.data.msgsLoaded,
    msgsInJsonl: r.data.msgsInJsonl,
    msgsRenderedAtFirstPaint: r.data.msgsRenderedAtFirstPaint
  };
}
function o9(e) {
  if (!e) return d3;
  return ze + e + ne + d3;
}
function pkr(e) {
  let r = e.indexOf(ze);
  if (r < 0) return;
  let n = r + ze.length,
    s = e.indexOf(ne, n);
  if (s < 0) return;
  return e.subarray(n, s).toString("utf8");
}
function Te(e, r) {
  let n = {};
  for (let [s, p] of Object.entries(x$n(e, r))) n[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? p.split(xe).map(item => aE(item.trim())).join(xe) : p;
  return n;
}
var Wen = f(() => u({
    proto: E().int().min(Jxt).max(proto_2),
    short: o().regex(DL),
    nonce: o().regex(DL).optional(),
    sessionId: o().transform(aE),
    createdAt: E(),
    source: z(Ee).catch("fleet"),
    cwd: o().transform(aE),
    launch: Qo("mode", [u({
      mode: A("prompt"),
      args: C(o()).transform(y3),
      restoresTranscript: M().optional()
    }), u({
      mode: A("resume"),
      sessionId: o().transform(aE),
      transcriptPath: o().transform(aE).optional(),
      fork: M(),
      flagArgs: C(o()).transform(y3),
      restoresTranscript: M().optional()
    }), u({
      mode: A("exec"),
      cmd: o().transform(aE),
      args: C(o()).transform(e => e.map(aE))
    })]),
    env: fe(o(), o()).default({}).transform(e => Te(e, "the background job's launch request")),
    reattachEnv: fe(o(), o()).transform(e => Te(e, "the launch request's reattach values")).optional(),
    worktree: u({
      path: o().transform(aE),
      ownershipToken: o()
    }).optional(),
    isolation: z(["none", "worktree"]).default("none"),
    respawnFlags: C(o()).default([]).transform(y3),
    attachStallRespawns: E().int().optional(),
    agent: o().optional(),
    routine: o().optional(),
    seed: u({
      intent: o(),
      name: o().optional()
    }).optional(),
    cols: E().int().positive().max(bge).optional(),
    rows: E().int().positive().max(bge).optional()
  })),
  Lot = /ERESPAWNING|ESTARTING/,
  Not = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/,
  kqe = "ERESPAWNING",
  Hot = "updated Claude Code",
  DDe = "stalled",
  Qxt = "legacy",
  Fot = "EHOSTDEAD",
  Tke = "terminal host process died \u2014 press Enter to restart",
  LDe = "This session's terminal host process died (the conversation is saved)",
  $ot = "terminal host process died \u2014 its output is gone; the command was not run again",
  NDe = "This command's terminal host process died \u2014 its output is gone and the command was not run again",
  Uot = /ESTALLED|EUNVERIFIED|EHOSTDEAD/,
  HDe = /^EKICKED:\s*/,
  Bot = /^E[A-Z]+:/;
function me() {
  return o().refine(IN, "remote IPC path");
}
var Be = f(() => ut({
  pid: E(),
  procStart: o().optional(),
  sessionId: o().transform(aE),
  rendezvousSock: me(),
  ptySock: me().optional(),
  messagingSock: me().optional(),
  cliVersion: o().optional(),
  startedAt: E(),
  attempt: E(),
  cwd: o().transform(aE),
  worktreePath: o().transform(aE).optional(),
  dispatch: Wen(),
  pendingRespawn: A("upgrade").optional(),
  decModes: C(E()).optional(),
  firedInteractiveMarks: C(ae()).transform(e => {
    let r = [];
    for (let n of e) {
      let s = pt().safeParse(n);
      if (s.success) r.push(s.data);
    }
    return r.slice(0, 2);
  }).optional().catch(void 0),
  rvAuth: o().optional(),
  ptyAuth: o().optional(),
  replPid: E().optional(),
  replProcStart: o().optional()
}));
function WFn(e) {
  let shape = Be().shape,
    n = {};
  for (let [s, p] of Object.entries(e)) if (!(s in shape)) n[s] = p;
  return n;
}
var Zho = f(() => ut({
    proto: E().int().min(Jxt).max(proto_2),
    supervisorPid: E().catch(0),
    updatedAt: E().catch(0),
    workers: fe(o().regex(DL), Be())
  })),
  fkr = f(() => {
    let short = o().regex(DL),
      proto = E().int().min(Jxt).max(proto_2);
    return Qo("op", [u({
      proto: proto,
      op: A("ping")
    }), u({
      proto: proto,
      op: A("nudge")
    }), u({
      proto: proto,
      op: A("yield")
    }), u({
      proto: proto,
      op: A("lease"),
      client: u({
        label: o(),
        cwd: o(),
        pid: E()
      }).optional()
    }), u({
      proto: proto,
      op: A("leases")
    }), u({
      proto: proto,
      op: A("await-ack"),
      short: short,
      nonce: short.optional(),
      timeoutMs: E()
    }), u({
      proto: proto,
      op: A("dispatch"),
      d: Wen(),
      timeoutMs: E(),
      auth: o().optional()
    }), u({
      proto: proto,
      op: A("list")
    }), u({
      proto: proto,
      op: A("has"),
      short: short
    }), u({
      proto: proto,
      op: A("kill"),
      short: short,
      signal: z(["SIGTERM", "SIGKILL"]).optional(),
      handoff: M().optional(),
      evict: M().optional()
    }), u({
      proto: proto,
      op: A("reply"),
      short: short,
      text: o(),
      auth: o().optional()
    }), u({
      proto: proto,
      op: A("subscribe"),
      short: short,
      tail: E().optional()
    }), u({
      proto: proto,
      op: A("attach"),
      short: short,
      auth: o().optional(),
      cols: E().int().min(1).max(bge),
      rows: E().int().min(1).max(bge),
      attachId: o().optional(),
      caps: u({
        imark: M().optional(),
        terminal: o().nullable(),
        mux: z(["tmux", "screen", "zellij"]).nullable(),
        ssh: M(),
        wheelFlood: M().optional(),
        hyperlinks: M().optional(),
        progressReporting: M().optional(),
        wtSession: M().optional(),
        isVscodeTerm: M().optional(),
        keyDialect: z(["st", "rxvt"]).nullable().optional().catch(void 0),
        browser: o().nullable().optional(),
        colorLevel: $e([A(0), A(1), A(2), A(3)]).optional(),
        syncOutput: M().optional(),
        editor: o().nullable().optional(),
        systemTheme: z(["dark", "light"]).optional(),
        tmuxSocket: me().refine(lt).optional().catch(void 0)
      }).optional(),
      holdingFrame: M().optional()
    }), u({
      proto: proto,
      op: A("resize"),
      short: short,
      cols: E().int().min(1).max(bge),
      rows: E().int().min(1).max(bge),
      attachId: o().optional()
    }), u({
      proto: proto,
      op: A("ensure-spare"),
      cwd: o()
    }), u({
      proto: proto,
      op: A("permission-response"),
      short: short,
      requestId: o(),
      allow: M(),
      auth: o().optional()
    }), u({
      proto: proto,
      op: A("respawn-stale"),
      short: short
    }), u({
      proto: proto,
      op: A("shutdown"),
      reapWorkers: M().optional()
    })]);
  }),
  mkr = ["cli-bg-dispatch", "claude agents"];
import { lstat as mt, mkdir as ht, readFile as bt, rename as St, rm as Je } from "fs/promises";
import { dirname as yt } from "path";
function De(e) {
  return e;
}
function Ne(e) {
  return De(new Set(e));
}
function Jho(e) {
  let r = new Set(),
    n = s => {
      if (Array.isArray(s)) s.forEach(n);else if (typeof s === "object" && s !== null) {
        let {
          properties: properties
        } = s;
        if (typeof properties === "object" && properties !== null) for (let m of Object.keys(properties)) r.add(m);
        Object.values(s).forEach(n);
      }
    };
  try {
    n(fde(e, {
      unrepresentable: "any"
    }));
  } catch {}
  return De(r);
}
function BFn(e, r) {
  let n;
  return bn((e ?? []).map(item => typeof item === "number" || typeof item === "string" && (n ??= r()).has(item) ? String(item) : "*").join("."));
}
import { lstat as gt } from "fs/promises";
async function zFn(e) {
  try {
    let r = await gt(e);
    return r.isFile() ? {
      kind: "proceed"
    } : {
      kind: "refused",
      symlink: r.isSymbolicLink()
    };
  } catch (error) {
    return B(error) ? {
      kind: "proceed"
    } : {
      kind: "error",
      error: error
    };
  }
}
function GFn(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}
var wt = Ne(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]),
  Re = 8388608;
function jot() {
  return Ae.daemon(["roster.json"]);
}
function V() {
  return {
    proto: proto_2,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {}
  };
}
async function VP(e, r) {
  if (r) {
    let {
      roster: roster,
      inspectFailed: inspectFailed
    } = await Ge(r, e);
    return inspectFailed ? {
      ...roster,
      inspectFailed: !0
    } : roster;
  }
  let n;
  try {
    let s = await mt(CB());
    if (!s.isFile() || s.size > Re) {
      if (!e?.silent) if (d(Error(`roster.json ${s.isFile() ? `too large (${s.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`)), i("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 1,
        errCode: s.isFile() ? y("E2BIG") : y("EFTYPE")
      }), s.isFile()) await ce(void 0);else await Je(CB(), {
        recursive: !0,
        force: !0
      }).catch(p => d(p));
      return {
        ...V(),
        parseFailed: !0
      };
    }
    n = J(await bt(CB(), "utf8"));
  } catch (error) {
    if (B(error)) return V();
    if (!e?.silent) d(st(te(error), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: Kg(error)
    }), await ce(void 0);
    return {
      ...V(),
      parseFailed: !0
    };
  }
  return Ue(n, e, void 0);
}
async function Ue(e, r, n) {
  let s;
  try {
    s = Zho().safeParse(e);
  } catch (error) {
    if (!r?.silent) d(error), i("tengu_bg_roster_parse_failed", {
      orphaned: Me(e),
      quarantined: 1,
      errCode: Kg(error)
    }), await ce(n);
    return {
      ...V(),
      parseFailed: !0
    };
  }
  if (s.success) {
    delete s.data.parseFailed, delete s.data.inspectFailed;
    let p = e,
      m = ["supervisorPid", "updatedAt"].filter(item => !Number.isFinite(p[item]));
    if (m.length > 0 && !r?.silent) t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, {
      level: "warn"
    }), i("tengu_bg_roster_parse_failed", {
      orphaned: 0,
      quarantined: 0,
      issuePath: Oa(m),
      issueCode: y("healed_stamp")
    });
    return s.data;
  }
  if (!r?.silent) {
    let orphaned = Me(e),
      m = s.error.issues[0];
    d(Error(`roster.json parse failed at ${Le(m?.path) || "<root>"} (orphaning ${orphaned} worker(s)): ${m?.message}`)), i("tengu_bg_roster_parse_failed", {
      orphaned: orphaned,
      quarantined: 1,
      issuePath: Le(m?.path),
      issueCode: ue(m?.code)
    }), await ce(n);
  }
  return {
    ...V(),
    parseFailed: !0
  };
}
async function ce(e) {
  if (!e) {
    await St(CB(), `${CB()}.corrupt.${Date.now()}`).catch(n => d(n));
    return;
  }
  let r = await e.move(jot(), Ae.daemon([`roster.json.corrupt.${Date.now()}`])).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) d(new P(`roster quarantine v5 move failed: ${r === void 0 ? "threw" : rt(r.error)}`, "roster quarantine v5 move failed"));
}
async function kt(e) {
  await Je(e, {
    recursive: !0,
    force: !0
  }).catch(r => d(r));
}
async function je(e, r, n, s) {
  if (!r?.silent) d(n), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 1,
    errCode: y(s)
  }), await At(e);
  return {
    ...V(),
    parseFailed: !0
  };
}
async function Ge(e, r) {
  let n = await zFn(CB());
  if (n.kind === "refused") {
    if (!r?.silent) d(Error("roster.json is not a regular file \u2014 removing")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: y("EFTYPE")
    }), await kt(CB());
    return {
      roster: {
        ...V(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  if (n.kind === "error") return He(r, st(te(n.error), "bg roster.json read/parse failed"), Kg(n.error));
  return Et(e, r);
}
function He(e, r, errCode) {
  if (!e?.silent) d(r), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 0,
    errCode: errCode
  });
  return {
    roster: {
      ...V(),
      parseFailed: !0
    },
    inspectFailed: !0
  };
}
async function Et(e, r) {
  let n = await e.read([{
    key: jot(),
    offset: 0,
    length: Re + 1
  }]).catch(() => {
    return;
  });
  if (n === void 0 || !n.ok) {
    if (n !== void 0 && GFn(n.error)) return {
      roster: await je(e, r, new P(`bg roster.json v5 read refused: ${n.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused \u2014 removing"), "EV5READ"),
      inspectFailed: !1
    };
    return He(r, new P(`bg roster.json v5 read failed: ${n?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), y("EV5READ"));
  }
  let s = n.value.items[0];
  if (!s.found) return {
    roster: V(),
    inspectFailed: !1
  };
  if (s.totalBytes > Re) return {
    roster: await je(e, r, new P(`roster.json too large (${s.totalBytes} bytes) \u2014 removing`, "roster.json too large \u2014 removing"), "E2BIG"),
    inspectFailed: !1
  };
  let p;
  try {
    p = J(Buffer.from(s.value).toString("utf8"));
  } catch (error) {
    if (!r?.silent) d(st(te(error), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: Kg(error)
    }), await ce(e);
    return {
      roster: {
        ...V(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  return {
    roster: await Ue(p, r, e),
    inspectFailed: !1
  };
}
async function At(e) {
  let r = await e.delete(jot()).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) d(new P(`roster quarantine v5 delete failed: ${r?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
}
function Le(e) {
  return BFn(e, () => wt);
}
function Sk(e) {
  return DL.test(e) ? bn(e) : y("invalid");
}
function Me(e) {
  let r = e !== null && typeof e === "object" ? e.workers : void 0;
  return r !== null && typeof r === "object" && !Array.isArray(r) ? Object.keys(r).length : 0;
}
async function zt(e, r) {
  let {
    parseFailed: parseFailed,
    inspectFailed: inspectFailed_2,
    ...p
  } = e;
  if (r) {
    let g = await r.write(jot(), b(p, null, 2), {
      mode: 384
    });
    if (!g.ok) {
      let S = g.error,
        w = "telemetryCode" in S ? S.telemetryCode : void 0;
      if (w !== void 0 && Sre.has(w)) {
        t(`[daemon] roster write failed: ${w}`, {
          level: "error"
        });
        return;
      }
      throw new P(`roster v5 write failed: ${S.code}`, "roster v5 write failed");
    }
    return;
  }
  let m = CB();
  await ht(yt(m), {
    recursive: !0,
    mode: 448
  }).catch(() => {}), await Cn(m, b(p, null, 2), 384).catch(g => {
    let S = v(g);
    if (S && Sre.has(S)) {
      t(`[daemon] roster write failed: ${S}`, {
        level: "error"
      });
      return;
    }
    throw g;
  });
}
var Rt = Fm();
function u3(e, r) {
  return Rt.run("roster", async () => {
    let n = await _t(r),
      s = e(n) ?? n;
    s.supervisorPid = process.pid, s.updatedAt = Date.now(), await zt(s, r);
  });
}
async function _t(e) {
  if (!e) return VP();
  let r = await Ge(e);
  if (r.inspectFailed) throw new P("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return r.roster;
}
import { lstat as ee, mkdir as _e, readdir as It, readFile as pe, rm as de, stat as an } from "fs/promises";
import { basename as W, dirname as Ct, isAbsolute as Qe, join as U, relative as Ft } from "path";
function We(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return !1;
  let wake = e.wake;
  if (wake === void 0) return !0;
  return wake.fires >= 1 && wake.keepalive !== !0;
}
function ODe(e) {
  if (!e || e.target <= 0) return -1;
  return Math.floor(20 * e.spent / e.target);
}
function MDe(e) {
  if (!e || e.length === 0) return "";
  return e.map(item => {
    let n = `${item.id ?? item.label}:${item.doneAt ?? "-"}:${item.failed ? "x" : ""}`;
    return item.kind === "todo" ? `${n}:${item.startedAt ?? "-"}` : n;
  }).join("|");
}
function Mot() {
  let {
    tasks: tasks,
    queued: queued,
    kinds: kinds,
    drainableMonitors: drainableMonitors,
    wake: wake_2
  } = gB().inFlightSnapshot;
  return {
    tasks: tasks,
    queued: queued,
    kinds: kinds,
    ...(drainableMonitors !== void 0 && {
      drainableMonitors: drainableMonitors
    }),
    ...(wake_2 !== void 0 && {
      wake: wake_2
    })
  };
}
function ckr(e) {
  gB().publishInFlightSnapshot(e);
}
function Dot() {
  return {
    ...gB().inFlightSnapshot
  };
}
function Xho(e) {
  return gB().inFlightSnapshotChanged.subscribe(e);
}
async function zen(e, r) {
  if (!ua(e)) return "dead_pid";
  if (!(await M_(e, r))) return "procstart_mismatch";
  if (await g$t(e)) return "zombie";
  return "live";
}
async function Zxt(e, r) {
  return (await zen(e, r)) === "live";
}
var vt = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function p3(e) {
  return !vt.test(e) && !e.includes("\x00");
}
function gkr() {
  let e = fd();
  if (e === void 0 || Ie() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (sce(Tt(e))) return;
  if (iQ()?.fallbackModel === e) return;
  if (!p3(e)) return;
  return e;
}
function Ke(e) {
  let r = e.trim().toLowerCase();
  return r === "default" || G5e(r);
}
function eyo() {
  return F$().includes("--restricted");
}
function qZ(e, r, {
  carryModel = !0
} = {}) {
  let s = he(e.additionalWorkingDirectories, ["cliArg"]),
    p = [],
    m = F$();
  for (let k = 0; k < m.length; k++) {
    let O = m[k];
    if (O === "--add-dir") k++;else if (!carryModel && O === "--fallback-model") {
      let F = (m[k + 1] ?? "").split(",").map(item => item.trim()).filter(item => Ke(item));
      if (k++, F.length > 0) p.push("--fallback-model", F.join(","));
    } else if (O !== void 0) p.push(O);
  }
  let g = k6e(r),
    S = gkr(),
    w = S !== void 0 && (carryModel || Ke(S)) ? S : void 0,
    h = e.isBypassPermissionsModeAvailable && !p.includes("--allow-dangerously-skip-permissions");
  return [...[], ...p, ...(h ? ["--allow-dangerously-skip-permissions"] : []), ...s.flatMap(item => ["--add-dir", item]), ...(w !== void 0 ? ["--model", w] : []), ...(g !== void 0 ? ["--effort", g] : []), "--permission-mode", e.mode];
}
function hkr(e) {
  let r = Op([e]);
  return r.length === 1 && r[0] === e && p3(e);
}
function f3(e, r) {
  return [...(r ? [`launch flags: ${iPt}`] : []), ...((e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? ["permission rules set for this session only"] : []), ...((e.alwaysAskRules.cliArg ?? []).length > 0 ? ["ask-before-running rules with no command-line form"] : []), ...([...(e.alwaysAllowRules.cliArg ?? []), ...(e.alwaysDenyRules.cliArg ?? [])].some(item => !hkr(item)) ? ["permission rules a command line cannot carry intact"] : []), ...(he(e.additionalWorkingDirectories, ["cliArg"]).some(item => !p3(item)) ? ["added directories a command line cannot carry intact"] : [])];
}
function KZ(e, r) {
  return [...(e.alwaysAllowRules.cliArg ?? []).flatMap(item => ["--allowed-tools", item]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap(item => ["--disallowed-tools", item]), ...hS("--agent", r.agent), ...hS("--agents", r.agents), ...hS("--append-system-prompt", r.appendSystemPrompt), ...hS("--system-prompt-snapshot", ykr(r.systemPromptSnapshot))];
}
function hS(e, r) {
  if (!r) return [];
  return p3(r) ? [e, r] : [`${e}=${r}`];
}
function ykr(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}
function he(e, r) {
  return Array.from(e.values()).filter(item => r.includes(item.source)).filter(item => !ns(item.path)).map(item => item.path);
}
function ePt(e) {
  return VX({
    ...F6e(F$()).config,
    addDir: qe(e),
    settingSources: _ne()
  });
}
function tyo(e, r) {
  return [...Ot(e), ...qe(r).flatMap(item => ["--add-dir", item])];
}
function Ot(e) {
  let r = [],
    n = !1;
  for (let s of e) if (n) n = !1;else if (s === "--add-dir") n = !0;else r.push(s);
  return r;
}
function qe(e) {
  return he(e, ["cliArg"]).filter(p3);
}
function Gen(e) {
  return he(e, ["session"]).filter(p3);
}
var _kr = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";
function Eqe(e) {
  let r = Gen(e);
  return r.length > 0 ? {
    [_kr]: b(r)
  } : {};
}
function nyo(e) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (s === "--channels") {
      n++;
      continue;
    }
    if (s.startsWith("--channels=")) continue;
    r.push(s);
  }
  return r;
}
var qP = "(ungrouped)",
  wk = "(earlier)",
  Pt = 64,
  xt = new Set(["pinned", "ungrouped", qP, "past", wk]);
function tPt(e) {
  return xt.has(e.toLowerCase());
}
function VFn(e) {
  return Ay(e).slice(0, Pt);
}
function be(e) {
  if (e === void 0) return;
  let r = VFn(e);
  return r && !tPt(r) ? r : void 0;
}
class Ve {
  #e = new Map();
  #t = new Set();
  #r = new Set();
  #n = new Set();
  #o = new Set();
  peek(e) {
    return this.#e.get(e);
  }
  invalidate(e) {
    this.#e.delete(e);
  }
  noteAbsent(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  noteRejected(e, mtimeKey) {
    this.#e.set(e, {
      mtimeKey: mtimeKey,
      state: null
    });
  }
  noteParsed(e, mtimeKey_2, state) {
    if (this.#e.size > 1000) this.#e.clear();
    this.#e.set(e, {
      mtimeKey: mtimeKey_2,
      state: state
    }), this.#t.delete(e);
  }
  noteHit(e) {
    this.#t.delete(e);
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return !1;
    return this.#t.add(e), !0;
  }
  shouldReportRecovered(e) {
    if (this.#r.has(e)) return !1;
    return this.#r.add(e), !0;
  }
  noteCleanRead(e) {
    this.#r.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#n.has(e)) return !1;
    return this.#n.add(e), !0;
  }
  notePruneCandidateLive(e) {
    this.#n.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#o.has(e)) return !1;
    return this.#o.add(e), !0;
  }
}
var Xe = new q(() => new Ve());
class Ye {
  drafts = new Map();
  pins = new Map();
}
var $Fn = new q(() => new Ye());
async function UFn(e, key, {
  cap: cap,
  screens: screens,
  screenKey: screenKey,
  heal: heal
}) {
  if (screens.get(screenKey) !== "ok") {
    let w = await e.statMeta(key);
    if (!w.ok) {
      if (w.error.code !== "NotFound") screens.set(screenKey, "refused"), await heal?.();
      return null;
    }
    if (w.value.size > cap) return screens.set(screenKey, "refused"), null;
    screens.set(screenKey, "ok");
  }
  let g = await e.readText([{
    key: key,
    offset: 0,
    length: cap + 1
  }]);
  if (!g.ok) return screens.delete(screenKey), await heal?.(), null;
  let S = g.value.items[0];
  if (!S.found) return null;
  if (S.totalBytes > cap) return screens.set(screenKey, "refused"), null;
  return S.value;
}
var ie = () => o().transform(aE),
  et = /^[a-f0-9]{8}$/,
  Bt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function se(e, r) {
  return n => {
    if (r(n)) return n;
    t(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn"
    });
    return;
  };
}
var Se = f(() => u({
    state: o(),
    detail: o(),
    tempo: z(["active", "idle", "blocked"]).optional().catch(void 0),
    inFlight: u({
      tasks: E(),
      queued: E(),
      kinds: C(o()),
      drainableMonitors: E().int().nonnegative().optional(),
      wake: u({
        at: E().optional(),
        reason: o().optional(),
        fires: E().int().nonnegative(),
        keepalive: A(!0).optional()
      }).optional().catch(void 0)
    }).optional(),
    selfWake: M().optional().catch(void 0),
    fan: C(u({
      id: o().optional(),
      kind: z(["agent", "workflow", "shell", "monitor", "mcp", "todo"]).optional().catch(void 0),
      label: o(),
      startedAt: E().optional(),
      doneAt: E().optional(),
      failed: M().optional(),
      group: o().optional()
    })).optional(),
    budget: u({
      spent: E(),
      target: E()
    }).optional(),
    tokens: E().optional(),
    needs_you: M().optional(),
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
    output: fe(o(), o()).nullable().default(null),
    structuredResult: fe(o(), ae()).optional(),
    children: C(u({
      id: o(),
      href: o(),
      kind: z(["pr", "frame"]).optional().catch(void 0),
      title: o().optional().catch(void 0)
    })).nullable().default(null),
    linkScanOffset: E().default(0),
    linkScanPath: ie().transform(se("linkScanPath", e => Qe(e) && e.endsWith(".jsonl") && en(W(e, ".jsonl")) !== null)).optional(),
    template: o(),
    routine: o().optional(),
    respawnFlags: C(o()).default([]).transform(e => y3(Cme(e))),
    bgIsolation: z(["none", "worktree"]).optional().catch(void 0),
    providerEnv: fe(o(), o()).transform(e => {
      let r = Yyo(e);
      return r && io(x$n(r, "the saved job state (state.json providerEnv)"), aE);
    }).optional(),
    sessionPermissionRules: u({
      allow: C(o()),
      deny: C(o()),
      addDirs: C(ie()).optional()
    }).optional(),
    memoryToggledOff: M().optional(),
    forkSourceAlive: M().optional(),
    forkBoundaryAt: o().optional(),
    forkSessionId: o().optional(),
    forkParentSessionId: o().optional(),
    interactiveLineage: M().optional(),
    intent: o(),
    displayIntent: o().optional(),
    initialPrompt: o().optional(),
    queuedPrompt: o().optional(),
    name: o().optional(),
    nameSource: z(["user", "auto", "collision"]).optional().catch(void 0),
    color: o().optional(),
    sessionId: ie(),
    resumeSessionId: o().transform(se("resumeSessionId", e => en(e) !== null)).optional(),
    daemonShort: o().transform(se("daemonShort", e => et.test(e))).optional(),
    cliVersion: o().optional(),
    cwd: ie(),
    createdAt: o(),
    updatedAt: o(),
    firstTerminalAt: o().nullable().default(null),
    lastTerminalAt: o().optional(),
    worktreePath: ie().optional(),
    worktreeBranch: o().optional(),
    worktreeHookBased: M().optional(),
    originCwd: ie().optional(),
    bridgeSessionId: o().transform(se("bridgeSessionId", e => Bt.test(e))).optional(),
    bridgeOwnerAccountUuid: o().optional(),
    bridgeOwnerOrganizationUuid: o().optional(),
    bridgeNoHistoryBackfill: M().optional(),
    bridgeOutboundOnly: M().optional(),
    bridgeSessionGroupingId: o().transform(se("bridgeSessionGroupingId", e => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(),
    bridgeSessionSeq: E().transform(se("bridgeSessionSeq", e => Number.isInteger(e) && e >= 0)).optional(),
    backend: z(["daemon", "peer", "remote"]).catch("daemon").default("daemon").transform(e => {
      if (e === "daemon") return e;
      return t(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, {
        level: "warn"
      }), "daemon";
    }),
    sock: o().optional(),
    pid: E().optional(),
    sortOrder: E().optional(),
    stateSortOrder: E().optional(),
    group: o().optional(),
    pinned: M().optional(),
    reapedMidWorkAt: o().optional(),
    reapedUnsettledAt: o().optional(),
    deadEpochReapedAt: o().optional(),
    sessionIdTaken: M().optional().catch(void 0)
  }).transform(({
    needs_you: needs_you,
    ...r
  }) => {
    let n = r.bridgeOwnerAccountUuid !== void 0 && !S_e(r.bridgeOwnerAccountUuid) || r.bridgeOwnerOrganizationUuid !== void 0 && !S_e(r.bridgeOwnerOrganizationUuid),
      tempo = r.tempo ?? (needs_you ? "blocked" : "idle");
    return {
      ...r,
      ...(n && {
        bridgeOwnerAccountUuid: void 0,
        bridgeOwnerOrganizationUuid: void 0
      }),
      tempo: tempo,
      ...(r.lastTerminalAt === void 0 && oy(r.state) !== null && tempo !== "active" && {
        lastTerminalAt: r.firstTerminalAt || r.updatedAt
      })
    };
  })),
  Z = "state.json",
  cap_2 = 8388608;
function WA() {
  return WHr();
}
function Pr(e) {
  return U(WA(), e);
}
function vp() {
  let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
  if (CLAUDE_JOB_DIR) return W(CLAUDE_JOB_DIR);
  let r = hb();
  if (r) return W(r.jobDir);
  return Y().slice(0, 8);
}
function tt(e, r) {
  return jn(e) ? Ae.job(e, r) : void 0;
}
function Tqe(e, r) {
  return QKn(e, r);
}
function Cqe(e) {
  return Ae.job(e, [Z]);
}
function bkr(e, r) {
  let n = U(Pr(e), Z),
    s = !1,
    p = Number.NaN;
  function m(k) {
    if (s) return;
    if (Number.isNaN(p)) {
      p = k;
      return;
    }
    if (k === p) return;
    h(), r();
  }
  function g() {
    ee(n).then(k => m(k.mtimeMs), () => m(-1));
  }
  g();
  let S = setInterval(g, 200),
    w = setTimeout(h, 1e4);
  function h() {
    if (s) return;
    s = !0, clearInterval(S), clearTimeout(w);
  }
  return h;
}
function qFn() {
  return gB().ownStateWriteDepth > 0;
}
async function ja(e, r, n) {
  let s = r.inFlight?.kinds.includes("session_cron") === !0,
    p = s && !r.selfWake && We(r.inFlight) ? {
      ...r,
      selfWake: !0
    } : !s && r.selfWake && Mi(r) ? {
      ...r,
      selfWake: void 0
    } : r,
    g = Mi(p) ? p.lastTerminalAt ? p : {
      ...p,
      lastTerminalAt: p.updatedAt
    } : p.lastTerminalAt !== void 0 ? {
      ...p,
      lastTerminalAt: void 0
    } : p,
    {
      pinned: pinned,
      sortOrder: sortOrder,
      stateSortOrder: stateSortOrder,
      group: group,
      ...O
    } = g,
    F = n ? Tqe(e, [Z]) : void 0,
    x = gB();
  x.ownStateWriteDepth++;
  try {
    if (n && F) {
      let T = await n.write(F, b(O, null, 2), {
        mode: 384,
        parent: "mustExist"
      });
      if (!T.ok) {
        let code = gf(T.error);
        throw Object.assign(new P(`[jobs] v5 state write failed: ${rt(T.error)}`, "[jobs] v5 state write failed"), code !== void 0 ? {
          code: code
        } : {});
      }
    } else await Cn(U(e, Z), b(O, null, 2), 384);
  } finally {
    x.ownStateWriteDepth--, Ju(e);
  }
}
function ml(e) {
  let r = v(e);
  if (r && (Sre.has(r) || r === "ENOENT")) {
    t(`[jobs] state write failed (${r}): ${l(e)}`, {
      level: "error"
    });
    return;
  }
  d(e);
}
function nPt(e, r) {
  let n = r !== void 0 && r.id === e?.bridgeSessionId;
  return {
    ownerAccountUuid: n ? r.ownerAccountUuid : void 0,
    ownerOrganizationUuid: n ? r.ownerOrganizationUuid : void 0,
    noHistoryBackfill: e?.noHistoryBackfill || (r !== void 0 && !n ? !0 : r?.noHistoryBackfill)
  };
}
function s9(CLAUDE_BRIDGE_REATTACH_SESSION, r, n, s, p) {
  if (!CLAUDE_BRIDGE_REATTACH_SESSION) return;
  let m = {
    CLAUDE_BRIDGE_REATTACH_SESSION: CLAUDE_BRIDGE_REATTACH_SESSION
  };
  if (r !== void 0 && r > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(r);
  if (s) m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
  if (p?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = p.ownerAccountUuid;
  if (p?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = p.ownerOrganizationUuid;
  if (p?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (n !== !1) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m;
}
function I() {
  return Xe.of(j().host);
}
function ye(e, r) {
  return r?.onReadFailure === "null" ? null : e?.state ?? null;
}
var Dt = [15, 45],
  Nt = new Set(["ELOOP", "ENXIO", "EISDIR"]);
function we(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Nt.has(e.telemetryCode) ? "non-regular" : void 0;
}
function nt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== Z;
}
var jt = new Set(["invariant", "permission", "environment"]);
function Lt(e) {
  if (e.code === "Unavailable") return !0;
  return e.code === "Failed" && !jt.has(e.failureClass) && we(e) === void 0 && !nt(e);
}
async function Mt(e, r) {
  let n = await r(),
    attempts = 1;
  for (let p of Dt) {
    if (n.ok || !Lt(n.error)) break;
    await Q(p), n = await r(), attempts++;
  }
  if (n.ok) {
    if (attempts === 1) I().noteCleanRead(e);else if (I().shouldReportRecovered(e)) i("tengu_bg_state_read_recovered", {
      attempts: attempts
    });
  }
  return n;
}
function Ze(e, r, n) {
  let s = I().peek(e);
  if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) t(`[jobs] skipping ${W(e)}: state.json is ${n}`, {
    level: "warn"
  });
  return I().noteRejected(e, `rejected:${r}`), null;
}
function Ju(e) {
  I().invalidate(e);
}
async function Jt(e, r, n) {
  let s = W(r),
    p = I().peek(r);
  if (p === void 0 || p.mtimeKey.startsWith("rejected:")) {
    let R = await e.statMeta(Cqe(s));
    if (!R.ok) {
      if (R.error.code === "NotFound") return I().noteAbsent(r), null;
      let N = we(R.error);
      if (N !== void 0) return Ze(r, N, N === "oversize" ? "too large" : "not a regular file");
    } else if (R.value.size > cap_2) {
      let N = `rejected:${R.value.mtimeMs}:${R.value.size}`;
      if (I().peek(r)?.mtimeKey !== N) t(`[jobs] skipping ${W(r)}: state.json is too large (${R.value.size} bytes)`, {
        level: "warn"
      }), I().noteRejected(r, N);
      return null;
    }
  }
  let m = Cqe(s),
    S = await Mt(r, () => e.read([m, Ae.job(s, ["order"]), Ae.job(s, ["stateOrder"]), Ae.job(s, ["group"])]));
  if (!S.ok && nt(S.error)) {
    if (I().shouldLogSidecarFallback(r)) t(`[jobs] ${W(r)}: a sidecar could not be read as a regular file; using state.json alone`);
    let R = await e.read([m]);
    S = R.ok ? {
      ok: !0,
      value: {
        items: [R.value.items[0], {
          found: !1
        }, {
          found: !1
        }, {
          found: !1
        }]
      }
    } : R;
  }
  let w = I().peek(r);
  if (!S.ok) {
    let R = we(S.error);
    if (R !== void 0) return Ze(r, R, R === "oversize" ? "too large" : "not a regular file");
    if (t(`[jobs] ${W(r)}: v5 state read failed \u2014 ${S.error.code}`, {
      level: "warn"
    }), I().shouldReportTransient(r)) i("tengu_bg_state_read_transient", {
      errno: c(S.error.code),
      had_cache: w !== void 0
    });
    return ye(w, n);
  }
  let [h, k, O, F] = S.value.items;
  if (!h.found) return I().noteAbsent(r), null;
  if (h.totalBytes > cap_2) {
    let R = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (w?.mtimeKey === R) return null;
    return t(`[jobs] skipping ${W(r)}: state.json is too large (${h.totalBytes} bytes)`, {
      level: "warn"
    }), I().noteRejected(r, R), null;
  }
  let x = R => Buffer.from(R.value.buffer, R.value.byteOffset, R.value.byteLength).toString("utf-8"),
    T = R => R.found && R.totalBytes <= cap_2 ? x(R) : null,
    _ = R => R.found && R.totalBytes <= cap_2 ? R.version : 0,
    D = `v5:${h.version}:${_(k)}:${_(O)}:${_(F)}`;
  if (w?.mtimeKey === D) return I().noteHit(r), w.state;
  return Ut(r, D, x(h), T(k), T(O), T(F), w, n);
}
function Ut(e, r, n, s, p, m, g, S) {
  try {
    let w = J(n),
      h = Se().safeParse(w);
    if (!h.success) return t(`[jobs] skipping ${W(e)}: state.json schema validation failed \u2014 ${h.error.message}`, {
      level: "warn"
    }), I().noteRejected(e, r), null;
    let sortOrder_2 = s !== null ? Number(s) : void 0,
      stateSortOrder_2 = p !== null ? Number(p) : void 0,
      shape_2 = Se().in.shape,
      x = w !== null && typeof w === "object" ? Object.entries(w).filter(([_]) => !Object.hasOwn(shape_2, _)) : [],
      T = {
        ...Object.fromEntries(x),
        ...h.data
      };
    if (Number.isFinite(sortOrder_2)) T = {
      ...T,
      sortOrder: sortOrder_2
    };
    if (Number.isFinite(stateSortOrder_2)) T = {
      ...T,
      stateSortOrder: stateSortOrder_2
    };
    if (m !== null && m.trim()) T = {
      ...T,
      group: m.trim()
    };
    if (T.group !== void 0) T = {
      ...T,
      group: be(T.group)
    };
    return I().noteParsed(e, r, T), T;
  } catch (error) {
    if (t(`[jobs] ${W(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), I().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: ao(error) ?? y("unknown"),
      had_cache: g !== void 0
    });
    return ye(g, S);
  }
}
async function Skr(e, r) {
  return ot(e, r, {
    onReadFailure: "null"
  });
}
async function Ir(e, r) {
  return ot(e, r, void 0);
}
async function ot(e, r, n) {
  if (r !== void 0 && Tqe(e, [Z]) !== void 0) return Jt(r, e, n);
  let s = U(e, Z),
    p = U(e, "order"),
    m = U(e, "stateOrder"),
    g = U(e, "group"),
    S,
    w;
  try {
    let [k, O, F, x] = await Promise.all([ee(s), ee(p).catch(() => null), ee(m).catch(() => null), ee(g).catch(() => null)]);
    if (!k.isFile() || k.size > cap_2) {
      let _ = `rejected:${k.mtimeMs}:${k.size}`;
      if (I().peek(e)?.mtimeKey === _) return null;
      return t(`[jobs] skipping ${W(e)}: state.json is ${k.isFile() ? `too large (${k.size} bytes)` : "not a regular file"}`, {
        level: "warn"
      }), I().noteRejected(e, _), null;
    }
    let T = _ => _ !== null && _.isFile() && _.size <= cap_2;
    w = {
      order: T(O),
      stateOrder: T(F),
      group: T(x)
    }, S = `${k.mtimeMs}:${w.order ? O.mtimeMs : 0}:${w.stateOrder ? F.mtimeMs : 0}:${w.group ? x.mtimeMs : 0}`;
  } catch (error) {
    if (B(error)) return I().noteAbsent(e), null;
    t(`[jobs] ${W(e)}: state.json stat failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
    let O = I().peek(e);
    if (I().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: ao(error) ?? y("unknown"),
      had_cache: O !== void 0
    });
    return ye(O, n);
  }
  let h = I().peek(e);
  if (h?.mtimeKey === S) return I().noteHit(e), h.state;
  try {
    let [k, O, F, x] = await Promise.all([pe(s, "utf-8"), w.order ? pe(p, "utf-8").catch(() => null) : Promise.resolve(null), w.stateOrder ? pe(m, "utf-8").catch(() => null) : Promise.resolve(null), w.group ? pe(g, "utf-8").catch(() => null) : Promise.resolve(null)]),
      T = J(k),
      _ = Se().safeParse(T);
    if (!_.success) return t(`[jobs] skipping ${W(e)}: state.json schema validation failed \u2014 ${_.error.message}`, {
      level: "warn"
    }), I().noteRejected(e, S), null;
    let sortOrder_3 = O !== null ? Number(O) : void 0,
      stateSortOrder_3 = F !== null ? Number(F) : void 0,
      shape_3 = Se().in.shape,
      L = T !== null && typeof T === "object" ? Object.entries(T).filter(([re]) => !Object.hasOwn(shape_3, re)) : [],
      G = {
        ...Object.fromEntries(L),
        ..._.data
      };
    if (Number.isFinite(sortOrder_3)) G = {
      ...G,
      sortOrder: sortOrder_3
    };
    if (Number.isFinite(stateSortOrder_3)) G = {
      ...G,
      stateSortOrder: stateSortOrder_3
    };
    if (x !== null && x.trim()) G = {
      ...G,
      group: x.trim()
    };
    if (G.group !== void 0) G = {
      ...G,
      group: be(G.group)
    };
    return I().noteParsed(e, S, G), G;
  } catch (error) {
    if (B(error)) return I().noteAbsent(e), null;
    if (t(`[jobs] ${W(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), I().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: ao(error) ?? y("unknown"),
      had_cache: h !== void 0
    });
    return ye(h, n);
  }
}
async function rPt(e, r) {
  Ju(e);
  let n = await Ir(e, r).catch(() => null);
  if (n !== null && n.state !== "done" && n.state !== "stopped" && n.state !== "blocked" && n.state !== "failed") await Q(50), Ju(e), n = (await Ir(e, r).catch(() => null)) ?? n;
  return n;
}
function X() {
  return U(WA(), "pins.json");
}
var stale = 5000;
async function FDe(e) {
  if (e) return Gt(e);
  try {
    let r = await ee(X());
    if (!r.isFile() || r.size > cap_2) {
      if (!r.isFile()) await heal_2();
      return new Set();
    }
    return ve(await pe(X(), "utf-8"));
  } catch (error) {
    if (B(error)) return await Cn(X(), b([])).catch(n => {
      if (!B(n)) ml(n);
    }), new Set();
    return new Set();
  }
}
async function Gt(e) {
  let r = await UFn(e, Ae.jobPins(), {
    cap: cap_2,
    screens: it(),
    screenKey: X(),
    heal: heal_2
  });
  return ve(r ?? void 0);
}
function it() {
  return $Fn.of(j().host).pins;
}
function ve(e) {
  if (e === void 0 || e.length > cap_2) return new Set();
  let r;
  try {
    r = J(e);
  } catch {
    return new Set();
  }
  if (!Array.isArray(r)) return new Set();
  return new Set(r.filter(item => typeof item === "string"));
}
async function heal_2(e) {
  let r = await ee(X()).catch(() => {
    return;
  });
  if (r === void 0 || r.isFile() && !(e?.evenRegular && r.size > cap_2)) return !1;
  return await de(X(), {
    recursive: !0,
    force: !0
  }).catch(() => {}), !0;
}
async function m3(e, name, nameSource, s, p) {
  let m = Pr(e),
    g = await Ir(m, s);
  if (!g) return !1;
  if (g.name === name) return !0;
  Ju(m);
  let S = (await Ir(m, s)) ?? g;
  if (S.name === name || nameSource === "auto" && S.name) return !0;
  if (!at(S, p)) return !1;
  return ja(m, {
    ...S,
    name: name,
    nameSource: nameSource,
    updatedAt: new Date().toISOString()
  }, s).then(() => !0, w => {
    if (!B(w)) ml(w);
    return !1;
  });
}
async function oPt(e, color, n) {
  let s = Pr(e),
    p = await Ir(s, n);
  if (!p) return !1;
  if (p.color === color) return !0;
  Ju(s);
  let m = (await Ir(s, n)) ?? p;
  if (m.color === color) return !0;
  return ja(s, {
    ...m,
    color: color,
    updatedAt: new Date().toISOString()
  }, n).then(() => !0, g => {
    if (!B(g)) ml(g);
    return !1;
  });
}
function KFn() {
  return gB().relocatedCwd;
}
async function wkr(cwd, r) {
  let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_2 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  gB().relocatedCwd = cwd, Ju(CLAUDE_JOB_DIR_2);
  let s = await Ir(CLAUDE_JOB_DIR_2, r),
    p = s?.worktreePath ? s.originCwd : cwd;
  if (!s || s.cwd === cwd && s.originCwd === p) return;
  Ju(CLAUDE_JOB_DIR_2);
  let m = (await Ir(CLAUDE_JOB_DIR_2, r)) ?? s;
  await ja(CLAUDE_JOB_DIR_2, {
    ...m,
    cwd: cwd,
    originCwd: m.worktreePath ? m.originCwd : cwd,
    updatedAt: new Date().toISOString()
  }, r).catch(g => {
    if (!B(g)) ml(g);
  });
}
async function vkr(resumeSessionId, linkScanPath, n) {
  let CLAUDE_JOB_DIR_3 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_3 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  Ju(CLAUDE_JOB_DIR_3);
  let p = await Ir(CLAUDE_JOB_DIR_3, n);
  if (!p || p.resumeSessionId === resumeSessionId && p.linkScanPath === linkScanPath) return;
  Ju(CLAUDE_JOB_DIR_3);
  let m = (await Ir(CLAUDE_JOB_DIR_3, n)) ?? p;
  await ja(CLAUDE_JOB_DIR_3, {
    ...m,
    resumeSessionId: resumeSessionId,
    linkScanPath: linkScanPath,
    linkScanOffset: 0,
    updatedAt: new Date().toISOString()
  }, n).catch(g => {
    if (!B(g)) ml(g);
  });
}
async function Cke(e, r, {
  includeSettled = !1
} = {}) {
  let CLAUDE_JOB_DIR_4 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_4 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await Rqe(async () => {
    Ju(CLAUDE_JOB_DIR_4);
    let p = await Ir(CLAUDE_JOB_DIR_4, r);
    if (!p?.inFlight || Mi(p) && !includeSettled || p.tempo === "active") return;
    let inFlight = p.inFlight;
    if (e.count === inFlight.tasks && (e.drainableMonitors ?? 0) === (inFlight.drainableMonitors ?? 0) && e.kinds.length === inFlight.kinds.length && e.kinds.every(item => inFlight.kinds.includes(item))) return;
    await ja(CLAUDE_JOB_DIR_4, {
      ...p,
      inFlight: {
        tasks: e.count,
        queued: inFlight.queued,
        kinds: [...e.kinds],
        ...(e.drainableMonitors !== void 0 && e.drainableMonitors > 0 && {
          drainableMonitors: e.drainableMonitors
        }),
        ...(inFlight.wake !== void 0 && {
          wake: inFlight.wake
        })
      },
      updatedAt: new Date().toISOString()
    }, r).catch(g => {
      if (!B(g)) ml(g);
    });
  });
}
function at(e, r) {
  if (r === void 0 || !e.name) return !0;
  if (e.nameSource === "auto" || e.nameSource === "collision") return !0;
  return r.includes(li(e.name));
}
async function WO(e, r, n, s, p, m, g) {
  let CLAUDE_JOB_DIR_5 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_5 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await Rqe(async () => {
    Ju(CLAUDE_JOB_DIR_5);
    let w = await Ir(CLAUDE_JOB_DIR_5, p);
    if (!w?.respawnFlags) return;
    if (g && !g(w.respawnFlags)) return;
    let h = [e, ...r],
      k = _ => {
        let D = [];
        for (let R = 0; R < _.length; R++) {
          let N = _[R];
          if (h.some(item => N === item || N.startsWith(`${item}=`))) {
            if (N.indexOf("=") === -1 && _[R + 1] !== void 0) R++;
            continue;
          }
          D.push(N);
        }
        if (n === null) return D;
        return [...D, ...hS(e, n)];
      },
      O = k(w.respawnFlags);
    if (O.length === w.respawnFlags.length && O.every((item, index) => item === w.respawnFlags[index])) return;
    Ju(CLAUDE_JOB_DIR_5);
    let F = (await Ir(CLAUDE_JOB_DIR_5, p)) ?? w,
      x = F.respawnFlags ?? w.respawnFlags;
    if (g && !g(x)) return;
    let T = at(F, m);
    await ja(CLAUDE_JOB_DIR_5, {
      ...F,
      ...(T ? s : {}),
      respawnFlags: k(x),
      updatedAt: new Date().toISOString()
    }, p).catch(_ => {
      if (!B(_)) ml(_);
    });
  });
}
async function kkr(e, r, n) {
  let CLAUDE_JOB_DIR_6 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_6 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await Rqe(async () => {
    Ju(CLAUDE_JOB_DIR_6);
    let p = await Ir(CLAUDE_JOB_DIR_6, n);
    if (!p?.respawnFlags) return;
    let m = hS(e, r);
    for (let S = 0; S <= p.respawnFlags.length - m.length; S++) if (m.every((item, index) => p.respawnFlags[S + index] === item)) return;
    Ju(CLAUDE_JOB_DIR_6);
    let g = (await Ir(CLAUDE_JOB_DIR_6, n)) ?? p;
    await ja(CLAUDE_JOB_DIR_6, {
      ...g,
      respawnFlags: [...(g.respawnFlags ?? []), ...m],
      updatedAt: new Date().toISOString()
    }, n).catch(S => {
      if (!B(S)) ml(S);
    });
  });
}
async function Oe(e, r) {
  await de(e, {
    force: !0
  });
  let n = await ZN(e, r);
  try {
    await Bo(n, e);
  } catch (error) {
    throw await de(n, {
      force: !0
    }).catch(() => {}), error;
  }
}
async function Pe(e, r, n) {
  let s = await e.write(r, n, {
    parent: "mustExist",
    mode: 438 & ~process.umask()
  });
  if (!s.ok) {
    let code_2 = gf(s.error);
    throw Object.assign(new P(`[jobs] v5 sidecar write failed: ${rt(s.error)}`, "[jobs] v5 sidecar write failed"), code_2 !== void 0 ? {
      code: code_2
    } : {});
  }
}
async function Ekr(e, r, n) {
  let s = H() && n ? Tqe(e, ["order"]) : void 0;
  if (n && s) await Pe(n, s, String(r));else await Oe(U(e, "order"), String(r));
  Ju(e);
}
async function Tkr(e, r, n) {
  let s = H() && n ? Tqe(e, ["stateOrder"]) : void 0;
  if (n && s) await Pe(n, s, String(r));else await Oe(U(e, "stateOrder"), String(r));
  Ju(e);
}
async function Ven(e, r, n) {
  let s = U(e, "group"),
    p = be(r),
    m = H() && n ? Tqe(e, ["group"]) : void 0;
  if (n && m) {
    if (p) await Pe(n, m, p);else {
      let g = await n.delete(m);
      if (!g.ok) throw new P(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
    }
  } else if (p) await Oe(s, p);else await de(s, {
    force: !0
  });
  Ju(e);
}
async function Ckr(e) {
  let r = U(WA(), ".order");
  await _e(WA(), {
    recursive: !0
  });
  await using n = await Ri(r, {
    realpath: !1,
    stale: 5000,
    retries: {
      retries: 5,
      minTimeout: 20
    },
    onCompromised: s => t(`jobs/.order lock compromised (likely process suspend or slow fs): ${s}`, {
      level: "error"
    })
  });
  return await e();
}
var dt = Fm();
function Rqe(e) {
  return dt.run("own-state.json", e);
}
function qen(e, r, n) {
  return dt.run("pins.json", async () => {
    if (H() && n) return Ht(e, r, n);
    let s = X();
    await _e(Ct(s), {
      recursive: !0
    });
    await using p = await Ri(s, {
      realpath: !1,
      stale: stale,
      retries: {
        retries: 5,
        minTimeout: 20
      },
      onCompromised: g => t(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, {
        level: "error"
      })
    });
    let m = await FDe();
    if (r ? m.has(e) : !m.has(e)) return;
    if (r) m.add(e);else m.delete(e), await de(U(Pr(e), "order")).catch(g => {
      if (!B(g)) throw g;
    }), Ju(Pr(e));
    await Cn(s, b([...m], null, 2));
  });
}
async function Ht(e, r, n) {
  let s = w => {
      let h = ve(w?.value);
      if (r ? h.has(e) : !h.has(e)) return {
        skip: !0,
        result: !1
      };
      if (r) h.add(e);else h.delete(e);
      return {
        write: b([...h], null, 2),
        result: !0
      };
    },
    p = it(),
    m = await n.statMeta(Ae.jobPins());
  if (m.ok && m.value.size > cap_2) await heal_2({
    evenRegular: !0
  }), p.delete(X());else if (!m.ok && we(m.error) !== void 0) await heal_2(), p.delete(X());
  let g = {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    },
    S = await n.updateText(Ae.jobPins(), s, g);
  if (!S.ok && (await heal_2())) S = await n.updateText(Ae.jobPins(), s, g);
  if (!S.ok) throw new P(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
  if (!r && S.value.result === !0) {
    let w = tt(e, ["order"]);
    if (w) {
      let h = await n.delete(w);
      if (!h.ok) t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, {
        level: "warn"
      });
    } else await de(U(Pr(e), "order")).catch(h => {
      if (!B(h)) t(`[jobs] order sidecar release failed after unpin: ${l(h)}`, {
        level: "warn"
      });
    });
    Ju(Pr(e));
  }
}
async function cv(e, r) {
  if (r) return Kt(r, e);
  let n;
  try {
    n = await It(WA(), {
      withFileTypes: !0
    });
  } catch {
    return [];
  }
  let [s, p] = await Promise.all([FDe(), Promise.all(n.filter(item => item.isDirectory()).map(async item => {
      let state_2 = await Ir(U(WA(), item.name));
      return state_2 ? {
        id: item.name,
        state: state_2
      } : null;
    }))]),
    m = p.filter(item => item !== null).map(item => s.has(item.id) ? {
      ...item,
      state: {
        ...item.state,
        pinned: !0
      }
    } : item);
  return e ? Aqe(m, e) : m;
}
async function Wt(e) {
  let ids = [],
    cursor;
  do {
    let s = await e.listEntries({
      namespace: "job"
    }, cursor === void 0 ? {
      skipScopeStats: !0
    } : {
      cursor: cursor,
      skipScopeStats: !0
    });
    if (!s.ok) return {
      ok: !1,
      error: s.error
    };
    for (let p of s.value.items) if (p.kind === "scope" && p.scope.namespace === "job" && p.scope.jobId !== void 0 && p.scope.relPath === void 0 && jn(p.scope.jobId)) ids.push(p.scope.jobId);
    cursor = s.value.cursor;
  } while (cursor !== void 0);
  return {
    ok: !0,
    ids: ids
  };
}
async function Kt(e, r) {
  let n = await Wt(e);
  if (!n.ok) return [];
  let ids_2 = n.ids,
    [p, m] = await Promise.all([FDe(e), Promise.all(ids_2.map(async S => {
      let state_3 = await Ir(Pr(S), e);
      return state_3 ? {
        id: S,
        state: state_3
      } : null;
    }))]),
    g = m.filter(item => item !== null).map(item => p.has(item.id) ? {
      ...item,
      state: {
        ...item.state,
        pinned: !0
      }
    } : item);
  return r ? Aqe(g, r) : g;
}
function Aqe(e, r) {
  let n = Date.now();
  return e.map(item => {
    if (Mi(item.state)) return item;
    if (r.has(item.id)) return item;
    if (n - Date.parse(item.state.createdAt) < qt) return item;
    return {
      ...item,
      state: Vt(item.state)
    };
  });
}
var qt = 5000;
function Vt(e) {
  if (Pqe(e)) return {
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
    detail: e.detail.replace(/; respawning$/, "")
  };
}
var xqe = "starting\u2026",
  needs = "send a prompt to start";
function $De(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}
var UDe = `(idle \u2014 ${needs})`,
  Rke = ["starting", "resuming", "adopted", "crashed"],
  Wot = 172800000,
  Xt = "ended while the background service was off";
function qie(e) {
  let r = new Date().toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? qo(e.detail) : xqe,
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
    providerEnv: e.providerEnv,
    sessionPermissionRules: e.sessionPermissionRules,
    memoryToggledOff: e.memoryToggledOff,
    forkSourceAlive: e.forkSourceAlive,
    forkBoundaryAt: e.forkBoundaryAt,
    forkSessionId: e.forkSessionId,
    forkParentSessionId: e.forkParentSessionId,
    interactiveLineage: e.interactiveLineage,
    intent: e.intent,
    displayIntent: e.displayIntent,
    name: e.name,
    nameSource: e.nameSource,
    color: JEe({
      userOverride: e.color,
      agentDefinitionColor: e.template.color
    }),
    initialPrompt: e.template.initialPrompt,
    sessionId: e.sessionId,
    resumeSessionId: e.sessionId,
    daemonShort: e.sessionId.slice(0, 8),
    cwd: e.cwd,
    createdAt: r,
    updatedAt: r,
    firstTerminalAt: null,
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.worktreeHookBased,
    originCwd: e.originCwd,
    backend: "daemon"
  };
}
async function Rkr(e, r, n) {
  if (r.length === 0) return e;
  let s = new Set(e.map(item => item.id)),
    p = r.filter(item => et.test(item.short) && !s.has(item.short) && item.source !== "spare" && !item.dying);
  if (p.length === 0) return e;
  let m = await VP({
      silent: !0
    }, n),
    g = await Promise.all(p.map(item => {
      let k = m.workers[item.short];
      return zen(item.pid, k?.pid === item.pid ? k.procStart : void 0);
    }));
  for (let [h, k] of p.entries()) if (g[h] !== "live") {
    if (t(`[adoptRosterOrphans] pruned dead record ${k.short} (${g[h]})`), I().shouldReportPruned(k.short)) i("tengu_bg_roster_orphan_pruned", {
      reason: c(g[h] ?? "dead_pid")
    });
  } else I().notePruneCandidateLive(k.short);
  let S = p.filter((item, index) => g[index] === "live");
  if (S.length === 0) return e;
  let w = S.map(item => {
    let state_4 = {
        ...qie({
          template: {
            name: item.agent ?? "bg",
            description: ""
          },
          routine: item.routine,
          intent: item.intent,
          name: item.name,
          detail: item.detail,
          ...(item.tempo === "active" && (item.state === "running" || Rke.includes(item.state)) ? item.routine ? {
            tempo: "idle"
          } : {
            tempo: "blocked",
            needs: needs
          } : {
            tempo: item.tempo,
            needs: item.needs
          }),
          sessionId: aE(item.sessionId),
          cwd: aE(item.cwd),
          worktreePath: item.worktreePath === void 0 ? void 0 : aE(item.worktreePath)
        }),
        createdAt: new Date(item.createdAt ?? item.startedAt).toISOString(),
        daemonShort: item.short,
        state: Rke.includes(item.state) ? "working" : item.state,
        ...(zA(item.state) && {
          inFlight: {
            tasks: 0,
            queued: 0,
            kinds: []
          }
        })
      },
      O = Pr(item.short),
      F = n ? tt(item.short, [Z]) : void 0;
    if (n && F) n.write(F, b(state_4), {
      precondition: {
        type: "ifAbsent"
      },
      mode: 384
    }).then(x => {
      if (x.ok) i("tengu_bg_roster_orphan_adopted", {});else if (x.error.code !== "AlreadyExists") ml(new P(`[jobs] v5 orphan seed write failed: ${x.error.code}`, "[jobs] v5 orphan seed write failed"));
    });else _e(O, {
      recursive: !0
    }).then(() => A$(U(O, "state.json"), b(state_4), 384)).then(() => i("tengu_bg_roster_orphan_adopted", {})).catch(x => {
      if (v(x) !== "EEXIST") ml(x);
    });
    return {
      id: item.short,
      state: state_4
    };
  });
  return [...e, ...w];
}
function oy(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function zA(e) {
  return oy(e) !== null;
}
function Mi(e) {
  return zA(e.state) && e.tempo !== "active";
}
function CE(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function Pqe(e) {
  return e.state === "blocked" && !CE(e);
}
function Ken(e) {
  return e.backend === "daemon" && !CE(e);
}
function i9(e) {
  let r = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return aE(r);
}
function sPt(e, r) {
  if (e.backend === "remote") return !0;
  let n = Ft(r, i9(e));
  return n.split(/[/\\]/, 1)[0] !== ".." && !Qe(n);
}
function Iqe(e) {
  let r = n => n?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return r(e.intent) || r(e.initialPrompt);
}
function qW(e) {
  return e.routine !== void 0 || e.selfWake === !0 || (e.inFlight?.kinds.includes("session_cron") ?? !1) || Iqe(e);
}
function BDe(e, r, n, s, p) {
  let m = Pr(e);
  return Ir(m, p).then(async g => {
    if (!g || Mi(g) || r === "failed" && Pqe(g)) return "none";
    let S = Date.now(),
      w = new Date(S).toISOString(),
      h = s?.resumable === "auto-resume" && r === "failed" && !CE(g) && S - Date.parse(g.updatedAt) > Wot;
    return await ja(m, {
      ...g,
      state: h ? "stopped" : r === "crashed" ? "failed" : r,
      detail: h ? Xt : r === "stopped" ? "stopped" : r === "failed" ? (g.detail || n).replace(/; respawning$/, "") : n,
      tempo: "idle",
      inFlight: void 0,
      needs: void 0,
      updatedAt: w,
      firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : w),
      lastTerminalAt: h ? g.updatedAt : w,
      ...(s?.resumable === "auto-resume" && r === "failed" && (h ? {
        deadEpochReapedAt: w
      } : {
        reapedMidWorkAt: g.updatedAt
      })),
      ...(s?.resumable === "wake-only" && r === "failed" && {
        reapedUnsettledAt: g.updatedAt
      })
    }, p), h ? "dead-epoch" : "settled";
  }).catch(g => (ml(g), "none"));
}
export { $Fn, UFn, ODe, MDe, Mot, ckr, Dot, Xho, Jho, BFn, Qho, proto_2 as Sc, Jxt, DL, d3, jen, wqe, jFn, dkr, vqe, ukr, o9, pkr, Wen, Lot, Not, kqe, Hot, DDe, Qxt, Fot, Tke, LDe, $ot, NDe, Uot, HDe, Bot, WFn, Zho, fkr, mkr, zFn, GFn, jot, VP, Sk, u3, zen, Zxt, p3, gkr, eyo, qZ, hkr, f3, KZ, hS, ykr, ePt, tyo, Gen, _kr, Eqe, nyo, qP, wk, tPt, VFn, WA, Pr, vp, Tqe, Cqe, bkr, qFn, ja, ml, nPt, s9, Ju, Skr, Ir, rPt, FDe, m3, oPt, KFn, wkr, vkr, Cke, WO, kkr, Ekr, Tkr, Ven, Ckr, Rqe, qen, cv, Aqe, xqe, needs as ry, $De, UDe, Rke, Wot, qie, Rkr, oy, zA, Mi, CE, Pqe, Ken, i9, sPt, Iqe, qW, BDe };