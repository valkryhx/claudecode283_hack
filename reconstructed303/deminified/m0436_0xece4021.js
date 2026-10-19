// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Gr, j, K, gc, JW, v$, e2o, Gf, Mde, Tm, Kjt, Ygn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c, pe, fl, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, Ye, H, d, k, Fr, Tg, bye, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, Ds, FA } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, Fc, Jbt, ps, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Z2 } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { O6 } from "B:/~BUN/root/chunk-2wpqgvtg.js";
import { Cr, Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { ns, cF, KB, An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { aK, fOe } from "B:/~BUN/root/chunk-7qatwz9y.js";
import { nvs, rvs, Fvr, oPe, zZ } from "B:/~BUN/root/chunk-ks90p42g.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ZN } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Lge, ek } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { CBe } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { iDe } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { Qge } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { yv } from "B:/~BUN/root/chunk-5ygt6t95.js";
import { rZt } from "B:/~BUN/root/chunk-45m7jrth.js";
import { bte, It, SDo, yNr, A_ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { dl } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { Eu } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { bmt } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { mgt, ele } from "B:/~BUN/root/chunk-fck2jn8z.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { the } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { U7e, o, v, M, oe, T, u, _t, $e, Jr, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Qg } from "B:/~BUN/root/chunk-q9dtdza4.js";
import { um, yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
var pt = new Set(["EBUSY", "EMFILE", "ENFILE", "EAGAIN", "EINTR"]);
function M6(e) {
  if (e === void 0) return !1;
  return pt.has(e) || e === "EPERM" && I() === "windows";
}
function AIt(e) {
  return e.code === "Unavailable" || "telemetryCode" in e && M6(e.telemetryCode);
}
var mt = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";
function Zws() {
  return !1;
}
function Bgo(e) {
  let n = "Error: ",
    r = "--cloud",
    s = `
${mt}`;
  if (e.hasPool || e.hasEnvironmentQuery) {
    let p = y3e(e.isChosenByNoMonorepo === !0);
    n = p.prefix, r = p.flag, s = "";
  }
  if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${UIt(e.loneWordValue)} is not a cloud session ID or URL.
With --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
    return `Error: ${r} cannot be combined with --print.
Starting a new cloud session with ${r} is interactive only: drop --print, or drop ${r} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`;
  }
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${UIt(e.loneWordValue)} is not a cloud session ID or URL.
Without an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run from a TTY.`;
    return `Error: ${r} requires an interactive terminal.
Non-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${r}. Drop ${r}, or run from a TTY.`;
  }
  if (e.continue) return `${n}${r} cannot be combined with --continue.${s}`;
  if (e.hasConnect || e.hasSSH || e.hasAssistant || e.hasTeleport) {
    let p = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : e.hasAssistant ? "`claude assistant`" : "--teleport";
    return `${n}${r} cannot be combined with ${p} \u2014 both select a remote backend; pick one.`;
  }
  if (e.resume || e.fromPr) {
    let p = e.resume ? "--resume" : "--from-pr";
    return `${n}${r} cannot be combined with ${p}.${s}`;
  }
  return null;
}
function evs(e) {
  return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json";
}
function tvs(e) {
  return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json";
}
function jgo(e) {
  if (e.some(item => item === "--environment" || item.startsWith("--environment=") || item === "--pool" || item.startsWith("--pool="))) return "--bg and --environment are different backends. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
  return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session.";
}
function y3e(e) {
  return {
    prefix: "Error: ",
    flag: "--environment"
  };
}
function Wgo(e) {
  if (e.some(item => item === "--environment" || item.startsWith("--environment=") || item === "--pool" || item.startsWith("--pool="))) return !0;
  return e.some(item => item === "--cloud" || item.startsWith("--cloud=") || item === "--remote" || item.startsWith("--remote="));
}
function Kdt(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--") {
      for (let p = r; p < e.length; p++) n.push(e[p]);
      break;
    }
    if (s.startsWith("--environment=") || s.startsWith("--pool=")) continue;
    if (s === "--environment" || s === "--pool") {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
      continue;
    }
    n.push(s);
  }
  return n;
}
var gt = 100;
function UIt(e) {
  let n = ne(e, gt);
  return Jbt(_(n.length < e.length ? `${n}\u2026` : n));
}
import { lstat as re, mkdir as Oe, readdir as Gt, readFile as ge, rm as ue, stat as Vr } from "fs/promises";
import { basename as X, dirname as Ht, isAbsolute as it, join as V, relative as Kt } from "path";
function Fe(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return !1;
  let wake = e.wake;
  if (wake === void 0) return !0;
  return wake.fires >= 1 && wake.keepalive !== !0;
}
function i3e(e) {
  if (!e || e.length === 0) return "";
  return e.map(item => {
    let r = `${item.id ?? item.label}:${item.doneAt ?? "-"}:${item.failed ? "x" : ""}`;
    return item.kind === "todo" ? `${r}:${item.startedAt ?? "-"}` : r;
  }).join("|");
}
function xIt() {
  let {
    tasks: tasks,
    queued: queued,
    kinds: kinds,
    drainableMonitors: drainableMonitors,
    wake: wake_2
  } = Fdt();
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
function wgo(e) {
  O6().publishInFlightSnapshot(e);
}
function Fdt() {
  let inFlightSnapshot = O6().inFlightSnapshot,
    n = Tm().length;
  if (n === 0) return {
    ...inFlightSnapshot
  };
  let wake_3 = ht();
  return {
    ...inFlightSnapshot,
    tasks: inFlightSnapshot.tasks + n,
    kinds: [...inFlightSnapshot.kinds, "session_cron"],
    ...(wake_3 !== void 0 && {
      wake: wake_3
    })
  };
}
function ht() {
  let e = Tm().find(item => item.kind === "loop");
  if (e === void 0) return;
  return {
    at: e.scheduledFor,
    reason: e.reason,
    fires: Kjt(),
    ...(e.keepalive && {
      keepalive: !0
    })
  };
}
function zws(e) {
  let n = O6().inFlightSnapshotChanged.subscribe(e),
    r = Ygn(() => {
      try {
        e();
      } catch {}
    });
  return () => {
    n(), r();
  };
}
import { lstat as zt, mkdir as Ot, readFile as Pt, rename as Tt, rm as Ve } from "fs/promises";
import { dirname as xt } from "path";
function Le(e) {
  return e;
}
function Ne(e) {
  return Le(new Set(e));
}
function Gws(e) {
  let n = new Set(),
    r = s => {
      if (Array.isArray(s)) s.forEach(r);else if (typeof s === "object" && s !== null) {
        let {
          properties: properties
        } = s;
        if (typeof properties === "object" && properties !== null) for (let m of Object.keys(properties)) n.add(m);
        Object.values(s).forEach(r);
      }
    };
  try {
    r(U7e(e, {
      unrepresentable: "any"
    }));
  } catch {}
  return Le(n);
}
function xvr(e, n) {
  let r;
  return xn((e ?? []).map(item => typeof item === "number" || typeof item === "string" && (r ??= n()).has(item) ? String(item) : "*").join("."));
}
import { delimiter as Me, isAbsolute as bt } from "path";
var Re = ["shell", "slash", "fleet", "spare", "respawn"];
function Vws(e) {
  return Re.includes(e);
}
var proto_2 = 1,
  V7t = 1,
  Z0 = /^[a-f0-9]{8}$/,
  qws = /^[a-f0-9]{32}$/,
  St = ["failed", "taken", "ended"],
  wt = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;
function Ue(e) {
  return !Z2.test(e);
}
var $Z = "\x1B_cc-daemon-detach\x1B\\",
  ae = "\x1B\\",
  ve = "\x1B_cc-detach-msg;",
  N$n = "\x1B_cc-daemon-hint\x1B\\";
function Hdt(e) {
  return N$n + e + N$n;
}
var ce = "\x1B_cc-d-imark;",
  Et = Buffer.from(ce, "latin1");
function Pvr(e) {
  return ce + _(e) + ae;
}
function vgo(e, n, r) {
  let s = r?.maxPayload ?? 512,
    p = e.length > 0 ? Buffer.concat([e, n]) : n,
    marks = [],
    g = [],
    S = 0,
    y = 0,
    h = -1,
    w = !1;
  for (;;) {
    let A = p.indexOf(ce, y);
    if (A < 0) break;
    let L = A + ce.length,
      E = w ? -1 : h >= L ? h : h = p.indexOf(ae, L);
    if (E < 0) {
      w = !0;
      let B = p.subarray(A);
      if (B.length > ce.length + s) {
        y = L;
        continue;
      }
      let q = !1;
      for (let ie = L; ie < p.length; ie++) {
        let Ae = p[ie];
        if (Ae === 24 || Ae === 26 || Ae === 27 && ie < p.length - 1) {
          q = !0;
          break;
        }
      }
      if (q) {
        y = L;
        continue;
      }
      return g.push(p.subarray(S, A)), {
        marks: marks,
        carry: Buffer.from(B),
        cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
      };
    }
    let N = !1;
    if (E - L <= s) try {
      let B = J(p.subarray(L, E).toString("utf8"));
      if (B !== null && typeof B === "object" && (B.kind === "content_paint" || B.kind === "prompt_idle")) {
        if (N = !0, r?.requireNonce === void 0 || B.nonce === r.requireNonce) marks.push({
          kind: B.kind,
          msgsLoaded: $dt(B.msgsLoaded),
          msgsInJsonl: $dt(B.msgsInJsonl),
          msgsRenderedAtFirstPaint: $dt(B.msgsRenderedAtFirstPaint)
        });
      }
    } catch {}
    if (N) g.push(p.subarray(S, A)), S = E + ae.length;
    y = N ? E + ae.length : L;
  }
  let P = p.subarray(y),
    D = Et,
    R = 0,
    O = Math.min(P.length, D.length - 1);
  e: for (let A = O; A > 0; A--) {
    let L = P.length - A;
    for (let E = 0; E < A; E++) if (P[L + E] !== D[E]) continue e;
    R = A;
    break;
  }
  return g.push(p.subarray(S, p.length - R)), {
    marks: marks,
    carry: R > 0 ? Buffer.from(P.subarray(P.length - R)) : Buffer.alloc(0),
    cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
  };
}
function $dt(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= Je ? e : void 0;
}
var Je = 1e9,
  se = () => v().int().nonnegative().max(Je).optional(),
  kt = f(() => u({
    kind: U(["content_paint", "prompt_idle"]),
    msgsLoaded: se(),
    msgsInJsonl: se(),
    msgsRenderedAtFirstPaint: se()
  })),
  At = f(() => _t({
    kind: U(["content_paint", "prompt_idle"]),
    msgsLoaded: se(),
    msgsInJsonl: se(),
    msgsRenderedAtFirstPaint: se()
  }));
function kgo(e) {
  let n = At().safeParse(e);
  if (!n.success) return null;
  return {
    kind: n.data.kind,
    msgsLoaded: n.data.msgsLoaded,
    msgsInJsonl: n.data.msgsInJsonl,
    msgsRenderedAtFirstPaint: n.data.msgsRenderedAtFirstPaint
  };
}
function nie(e) {
  if (!e) return $Z;
  return ve + e + ae + $Z;
}
function Ego(e) {
  let n = e.indexOf(ve);
  if (n < 0) return;
  let r = n + ve.length,
    s = e.indexOf(ae, r);
  if (s < 0) return;
  return e.subarray(r, s).toString("utf8");
}
function je(e, n) {
  let r = {};
  for (let [s, p] of Object.entries(Fvr(e, n))) r[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? p.split(Me).map(item => FA(item.trim())).join(Me) : p;
  return r;
}
var F$n = f(() => u({
    proto: v().int().min(V7t).max(proto_2),
    short: o().regex(Z0),
    nonce: o().regex(Z0).optional(),
    sessionId: o().transform(FA),
    createdAt: v(),
    source: U(Re).catch("fleet"),
    cwd: o().transform(FA),
    launch: Jr("mode", [u({
      mode: C("prompt"),
      args: T(o()).transform(zZ),
      restoresTranscript: M().optional()
    }), u({
      mode: C("resume"),
      sessionId: o().transform(FA),
      transcriptPath: o().transform(FA).optional(),
      fork: M(),
      flagArgs: T(o()).transform(zZ),
      restoresTranscript: M().optional()
    }), u({
      mode: C("exec"),
      cmd: o().transform(FA),
      args: T(o()).transform(e => e.map(FA))
    })]),
    env: fe(o(), o()).default({}).transform(e => je(e, "the background job's launch request")),
    reattachEnv: fe(o(), o()).transform(e => je(e, "the launch request's reattach values")).optional(),
    worktree: u({
      path: o().transform(FA),
      ownershipToken: o()
    }).optional(),
    isolation: U(["none", "worktree"]).default("none"),
    respawnFlags: T(o()).default([]).transform(zZ),
    attachStallRespawns: v().int().optional(),
    agent: o().optional(),
    routine: o().optional(),
    seed: u({
      intent: o(),
      name: o().optional()
    }).optional(),
    cols: v().int().positive().max(fOe).optional(),
    rows: v().int().positive().max(fOe).optional()
  })),
  PIt = /ERESPAWNING|ESTARTING/,
  OIt = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/,
  Udt = "ERESPAWNING",
  IIt = "updated Claude Code",
  a3e = "stalled",
  q7t = "legacy",
  MIt = "EHOSTDEAD",
  tUe = "terminal host process died \u2014 press Enter to restart",
  l3e = "This session's terminal host process died (the conversation is saved)",
  DIt = "terminal host process died \u2014 its output is gone; the command was not run again",
  d3e = "This command's terminal host process died \u2014 its output is gone and the command was not run again",
  LIt = /ESTALLED|EUNVERIFIED|EHOSTDEAD/,
  c3e = /^EKICKED:\s*/,
  Tgo = "Session opened in another window";
function H$n(e, n, r) {
  return n !== void 0 && qws.test(n) ? `${e}:${n}: ${r}` : `${e}: ${r}`;
}
var NIt = /^E[A-Z]+:/;
function be() {
  return o().refine(ZN, "remote IPC path");
}
var We = f(() => _t({
  pid: v(),
  procStart: o().optional(),
  sessionId: o().transform(FA),
  rendezvousSock: be(),
  ptySock: be().optional(),
  messagingSock: be().optional(),
  cliVersion: o().optional(),
  startedAt: v(),
  attempt: v(),
  cwd: o().transform(FA),
  worktreePath: o().transform(FA).optional(),
  dispatch: F$n(),
  pendingRespawn: C("upgrade").optional(),
  decModes: T(v()).optional(),
  firedInteractiveMarks: T(oe()).transform(e => {
    let n = [];
    for (let r of e) {
      let s = kt().safeParse(r);
      if (s.success) n.push(s.data);
    }
    return n.slice(0, 2);
  }).optional().catch(void 0),
  rvAuth: o().optional(),
  ptyAuth: o().optional(),
  replPid: v().optional(),
  replProcStart: o().optional()
}));
function Ovr(e) {
  let shape = We().shape,
    r = {};
  for (let [s, p] of Object.entries(e)) if (!(s in shape)) r[s] = p;
  return r;
}
var Kws = f(() => _t({
    proto: v().int().min(V7t).max(proto_2),
    supervisorPid: v().catch(0),
    updatedAt: v().catch(0),
    workers: fe(o().regex(Z0), We())
  })),
  Cgo = f(() => {
    let short = o().regex(Z0),
      proto = v().int().min(V7t).max(proto_2);
    return Jr("op", [u({
      proto: proto,
      op: C("ping")
    }), u({
      proto: proto,
      op: C("nudge")
    }), u({
      proto: proto,
      op: C("yield")
    }), u({
      proto: proto,
      op: C("lease"),
      client: nUe().optional()
    }), u({
      proto: proto,
      op: C("leases")
    }), u({
      proto: proto,
      op: C("await-ack"),
      short: short,
      nonce: short.optional(),
      timeoutMs: v()
    }), u({
      proto: proto,
      op: C("dispatch"),
      d: F$n(),
      timeoutMs: v(),
      auth: o().optional()
    }), u({
      proto: proto,
      op: C("list")
    }), u({
      proto: proto,
      op: C("has"),
      short: short
    }), u({
      proto: proto,
      op: C("kill"),
      short: short,
      signal: U(["SIGTERM", "SIGKILL"]).optional(),
      handoff: M().optional(),
      evict: M().optional()
    }), u({
      proto: proto,
      op: C("reply"),
      short: short,
      text: o(),
      auth: o().optional(),
      nextTurn: M().optional()
    }), u({
      proto: proto,
      op: C("subscribe"),
      short: short,
      tail: v().optional()
    }), u({
      proto: proto,
      op: C("attach"),
      short: short,
      auth: o().optional(),
      cols: v().int().min(1).max(fOe),
      rows: v().int().min(1).max(fOe),
      attachId: o().optional(),
      caps: u({
        imark: M().optional(),
        terminal: o().nullable(),
        mux: U(["tmux", "screen", "zellij"]).nullable(),
        ssh: M(),
        wheelFlood: M().optional(),
        hyperlinks: M().optional(),
        progressReporting: M().optional(),
        printsUnknownSequences: M().optional(),
        wtSession: M().optional(),
        isVscodeTerm: M().optional(),
        keyDialect: U(["st", "rxvt"]).nullable().optional().catch(void 0),
        browser: o().nullable().optional(),
        colorLevel: $e([C(0), C(1), C(2), C(3)]).optional(),
        syncOutput: M().optional(),
        editor: o().nullable().optional(),
        systemTheme: U(["dark", "light"]).optional(),
        tmuxSocket: be().refine(bt).optional().catch(void 0),
        sessionTabs: o().regex(qws).optional().catch(void 0),
        tabsLanding: u({
          why: U(St),
          from: o().regex(Z0)
        }).optional().catch(void 0)
      }).optional(),
      holdingFrame: M().optional()
    }), u({
      proto: proto,
      op: C("resize"),
      short: short,
      cols: v().int().min(1).max(fOe),
      rows: v().int().min(1).max(fOe),
      attachId: o().optional()
    }), u({
      proto: proto,
      op: C("ensure-spare"),
      cwd: o()
    }), u({
      proto: proto,
      op: C("permission-response"),
      short: short,
      requestId: o(),
      allow: M(),
      auth: o().optional()
    }), u({
      proto: proto,
      op: C("respawn-stale"),
      short: short
    }), u({
      proto: proto,
      op: C("shutdown"),
      reapWorkers: M().optional()
    })]);
  }),
  nUe = f(() => u({
    label: o().max(64).refine(Ue),
    cwd: o().max(4096).refine(Ue).catch("(not shown)"),
    pid: v().int().positive().catch(0),
    cloudSessionId: o().regex(wt).optional().catch(void 0)
  })),
  Rgo = f(() => u({
    ok: C(!0),
    op: C("lease")
  })),
  Rt = ["upgrade", "service_recall", "displaced", "yield", "shutdown_op", "idle_exit", "bg_manager_failed", "signal", "unknown"],
  Ago = f(() => u({
    op: C("lease"),
    closing: U(Rt)
  })),
  u3e = "cloud session",
  $$n = ["cli-bg-dispatch", "claude agents", u3e];
import { lstat as vt } from "fs/promises";
async function Ivr(e) {
  try {
    let n = await vt(e);
    return n.isFile() ? {
      kind: "proceed"
    } : {
      kind: "refused",
      symlink: n.isSymbolicLink()
    };
  } catch (error) {
    return G(error) ? {
      kind: "proceed"
    } : {
      kind: "error",
      error: error
    };
  }
}
function Mvr(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}
var Ct = Ne(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]),
  ze = 8388608;
function FIt() {
  return Be.daemon(["roster.json"]);
}
function Q() {
  return {
    proto: proto_2,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {}
  };
}
async function lN(e, n) {
  if (n) {
    let {
      roster: roster,
      inspectFailed: inspectFailed
    } = await Xe(n, e);
    return inspectFailed ? {
      ...roster,
      inspectFailed: !0
    } : roster;
  }
  let r;
  try {
    let s = await zt(aK());
    if (!s.isFile() || s.size > ze) {
      if (!e?.silent) if (l(Error(`roster.json ${s.isFile() ? `too large (${s.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`)), i("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 1,
        errCode: s.isFile() ? b("E2BIG") : b("EFTYPE")
      }), s.isFile()) await me(void 0);else await Ve(aK(), {
        recursive: !0,
        force: !0
      }).catch(p => l(p));
      return {
        ...Q(),
        parseFailed: !0
      };
    }
    r = J(await Pt(aK(), "utf8"));
  } catch (error) {
    if (G(error)) return Q();
    if (!e?.silent) l(Ye(H(error), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: Tg(error)
    }), await me(void 0);
    return {
      ...Q(),
      parseFailed: !0
    };
  }
  return qe(r, e, void 0);
}
async function qe(e, n, r) {
  let s;
  try {
    s = Kws().safeParse(e);
  } catch (error) {
    if (!n?.silent) l(error), i("tengu_bg_roster_parse_failed", {
      orphaned: Ke(e),
      quarantined: 1,
      errCode: Tg(error)
    }), await me(r);
    return {
      ...Q(),
      parseFailed: !0
    };
  }
  if (s.success) {
    delete s.data.parseFailed, delete s.data.inspectFailed;
    let p = e,
      m = ["supervisorPid", "updatedAt"].filter(item => !Number.isFinite(p[item]));
    if (m.length > 0 && !n?.silent) t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, {
      level: "warn"
    }), i("tengu_bg_roster_parse_failed", {
      orphaned: 0,
      quarantined: 0,
      issuePath: fl(m),
      issueCode: b("healed_stamp")
    });
    return s.data;
  }
  if (!n?.silent) {
    let orphaned = Ke(e),
      m = s.error.issues[0];
    l(Error(`roster.json parse failed at ${He(m?.path) || "<root>"} (orphaning ${orphaned} worker(s)): ${m?.message}`)), i("tengu_bg_roster_parse_failed", {
      orphaned: orphaned,
      quarantined: 1,
      issuePath: He(m?.path),
      issueCode: pe(m?.code)
    }), await me(r);
  }
  return {
    ...Q(),
    parseFailed: !0
  };
}
async function me(e) {
  if (!e) {
    await Tt(aK(), `${aK()}.corrupt.${Date.now()}`).catch(r => l(r));
    return;
  }
  let n = await e.move(FIt(), Be.daemon([`roster.json.corrupt.${Date.now()}`])).catch(() => {
    return;
  });
  if (n === void 0 || !n.ok) l(new x(`roster quarantine v5 move failed: ${n === void 0 ? "threw" : yt(n.error)}`, "roster quarantine v5 move failed"));
}
async function Ft(e) {
  await Ve(e, {
    recursive: !0,
    force: !0
  }).catch(n => l(n));
}
async function Ge(e, n, r, s) {
  if (!n?.silent) l(r), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 1,
    errCode: b(s)
  }), await Lt(e);
  return {
    ...Q(),
    parseFailed: !0
  };
}
async function Xe(e, n) {
  let r = await Ivr(aK());
  if (r.kind === "refused") {
    if (!n?.silent) l(Error("roster.json is not a regular file \u2014 removing")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: b("EFTYPE")
    }), await Ft(aK());
    return {
      roster: {
        ...Q(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  if (r.kind === "error") return Ze(n, Ye(H(r.error), "bg roster.json read/parse failed"), Tg(r.error));
  return Dt(e, n);
}
function Ze(e, n, errCode) {
  if (!e?.silent) l(n), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 0,
    errCode: errCode
  });
  return {
    roster: {
      ...Q(),
      parseFailed: !0
    },
    inspectFailed: !0
  };
}
async function Dt(e, n) {
  let r = await e.read([{
    key: FIt(),
    offset: 0,
    length: ze + 1
  }]).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) {
    if (r !== void 0 && Mvr(r.error)) return {
      roster: await Ge(e, n, new x(`bg roster.json v5 read refused: ${r.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused \u2014 removing"), "EV5READ"),
      inspectFailed: !1
    };
    return Ze(n, new x(`bg roster.json v5 read failed: ${r?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), b("EV5READ"));
  }
  let s = r.value.items[0];
  if (!s.found) return {
    roster: Q(),
    inspectFailed: !1
  };
  if (s.totalBytes > ze) return {
    roster: await Ge(e, n, new x(`roster.json too large (${s.totalBytes} bytes) \u2014 removing`, "roster.json too large \u2014 removing"), "E2BIG"),
    inspectFailed: !1
  };
  let p;
  try {
    p = J(Buffer.from(s.value).toString("utf8"));
  } catch (error) {
    if (!n?.silent) l(Ye(H(error), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: Tg(error)
    }), await me(e);
    return {
      roster: {
        ...Q(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  return {
    roster: await qe(p, n, e),
    inspectFailed: !1
  };
}
async function Lt(e) {
  let n = await e.delete(FIt()).catch(() => {
    return;
  });
  if (n === void 0 || !n.ok) l(new x(`roster quarantine v5 delete failed: ${n?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
}
function He(e) {
  return xvr(e, () => Ct);
}
function jR(e) {
  return Z0.test(e) ? xn(e) : b("invalid");
}
function Ke(e) {
  let n = e !== null && typeof e === "object" ? e.workers : void 0;
  return n !== null && typeof n === "object" && !Array.isArray(n) ? Object.keys(n).length : 0;
}
async function Nt(e, n) {
  let {
    parseFailed: parseFailed,
    inspectFailed: inspectFailed_2,
    ...p
  } = e;
  if (n) {
    let g = await n.write(FIt(), _(p, null, 2), {
      mode: 384
    });
    if (!g.ok) {
      let S = g.error,
        y = "telemetryCode" in S ? S.telemetryCode : void 0;
      if (y !== void 0 && bye.has(y)) {
        t(`[daemon] roster write failed: ${y}`, {
          level: "error"
        });
        return;
      }
      throw new x(`roster v5 write failed: ${S.code}`, "roster v5 write failed");
    }
    return;
  }
  let m = aK();
  await Ot(xt(m), {
    recursive: !0,
    mode: 448
  }).catch(() => {}), await An(m, _(p, null, 2), 384).catch(g => {
    let S = k(g);
    if (S && bye.has(S)) {
      t(`[daemon] roster write failed: ${S}`, {
        level: "error"
      });
      return;
    }
    throw g;
  });
}
var Bt = Qg();
function UZ(e, n) {
  return Bt.run("roster", async () => {
    let r = await Mt(n),
      s = e(r) ?? r;
    s.supervisorPid = process.pid, s.updatedAt = Date.now(), await Nt(s, n);
  });
}
async function Mt(e) {
  if (!e) return lN();
  let n = await Xe(e);
  if (n.inspectFailed) throw new x("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return n.roster;
}
async function U$n(e, n) {
  if (!Ia(e)) return "dead_pid";
  if (!(await ek(e, n))) return "procstart_mismatch";
  if (await Lge(e)) return "zombie";
  return "live";
}
async function K7t(e, n) {
  return (await U$n(e, n)) === "live";
}
function tPe() {
  return null;
}
function Yws() {
  return null;
}
var Ut = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function BZ(e) {
  return !Ut.test(e) && !e.includes("\x00");
}
function xgo() {
  let e = gc();
  if (e === void 0 || xe() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (bte(It(e))) return;
  if (JW()?.fallbackModel === e) return;
  if (!BZ(e)) return;
  return e;
}
function Qe(e) {
  let n = e.trim().toLowerCase();
  return n === "default" || the(n);
}
function Xws() {
  return v$().includes("--restricted");
}
function jpe(e, n, {
  carryModel = !0
} = {}) {
  let s = Se(e.additionalWorkingDirectories, ["cliArg"]),
    p = [],
    m = v$();
  for (let R = 0; R < m.length; R++) {
    let O = m[R];
    if (O === "--add-dir") R++;else if (!carryModel && O === "--fallback-model") {
      let A = (m[R + 1] ?? "").split(",").map(item => item.trim()).filter(item => Qe(item));
      if (R++, A.length > 0) p.push("--fallback-model", A.join(","));
    } else if (O !== void 0) p.push(O);
  }
  let g = bmt(n),
    S = jt(),
    y = xgo(),
    h = y !== void 0 && (carryModel || Qe(y)) ? y : void 0,
    w = e.isBypassPermissionsModeAvailable && !p.includes("--allow-dangerously-skip-permissions"),
    P = e2o(),
    D = Mde();
  return [...[], ...[], ...[], ...p, ...(D === void 0 ? [] : [D ? "--chrome" : "--no-chrome"]), ...(w ? ["--allow-dangerously-skip-permissions"] : []), ...s.flatMap(item => ["--add-dir", item]), ...(h !== void 0 ? ["--model", h] : []), ...(g !== void 0 ? ["--effort", g] : []), ...(S !== void 0 ? ["--fast-mode", S] : []), "--permission-mode", e.mode];
}
function jt() {
  let e = yv("--fast-mode");
  if (e !== "on" && e !== "off") return;
  let n = Gf()?.fastMode;
  return typeof n === "boolean" ? n ? "on" : "off" : e;
}
function Pgo(e) {
  let n = Eu([e]);
  return n.length === 1 && n[0] === e && BZ(e);
}
function jZ(e, n) {
  return [...(n ? [`launch flags: ${rZt}`] : []), ...((e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? ["permission rules set for this session only"] : []), ...((e.alwaysAskRules.cliArg ?? []).length > 0 ? ["ask-before-running rules with no command-line form"] : []), ...([...(e.alwaysAllowRules.cliArg ?? []), ...(e.alwaysDenyRules.cliArg ?? [])].some(item => !Pgo(item)) ? ["permission rules a command line cannot carry intact"] : []), ...(Se(e.additionalWorkingDirectories, ["cliArg"]).some(item => !BZ(item)) ? ["added directories a command line cannot carry intact"] : [])];
}
function Wpe(e, n) {
  return [...(e.alwaysAllowRules.cliArg ?? []).flatMap(item => ["--allowed-tools", item]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap(item => ["--disallowed-tools", item]), ...Lk("--agent", n.agent), ...Lk("--agents", n.agents), ...Lk("--append-system-prompt", n.appendSystemPrompt), ...Lk("--system-prompt-snapshot", Y7t(n.systemPromptSnapshot))];
}
function Lk(e, n) {
  if (!n) return [];
  return BZ(n) ? [e, n] : [`${e}=${n}`];
}
function Y7t(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}
function Se(e, n) {
  return Array.from(e.values()).filter(item => n.includes(item.source)).filter(item => !Ds(item.path)).map(item => item.path);
}
function X7t(e) {
  return ele({
    ...mgt(v$()).config,
    addDir: et(e),
    settingSources: Qge()
  });
}
function Jws(e, n) {
  return [...$t(e), ...et(n).flatMap(item => ["--add-dir", item])];
}
function $t(e) {
  let n = [],
    r = !1;
  for (let s of e) if (r) r = !1;else if (s === "--add-dir") r = !0;else n.push(s);
  return n;
}
function et(e) {
  return Se(e, ["cliArg"]).filter(BZ);
}
function B$n(e) {
  return Se(e, ["session"]).filter(BZ);
}
var Ogo = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";
function Bdt(e) {
  let n = B$n(e);
  return n.length > 0 ? {
    [Ogo]: _(n)
  } : {};
}
function Qws(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--channels") {
      r++;
      continue;
    }
    if (s.startsWith("--channels=")) continue;
    n.push(s);
  }
  return n;
}
var eD = "(ungrouped)",
  WR = "(earlier)",
  Jt = 64,
  Wt = new Set(["pinned", "ungrouped", eD, "past", WR]);
function J7t(e) {
  return Wt.has(e.toLowerCase());
}
function Dvr(e) {
  return Fc(e).slice(0, Jt);
}
function ye(e) {
  if (e === void 0) return;
  let n = Dvr(e);
  return n && !J7t(n) ? n : void 0;
}
class tt {
  #e = new Map();
  #t = new Set();
  #n = new Set();
  #r = new Set();
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
    if (this.#n.has(e)) return !1;
    return this.#n.add(e), !0;
  }
  noteCleanRead(e) {
    this.#n.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#r.has(e)) return !1;
    return this.#r.add(e), !0;
  }
  notePruneCandidateLive(e) {
    this.#r.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#o.has(e)) return !1;
    return this.#o.add(e), !0;
  }
}
var nt = new z(() => new tt());
class rt {
  drafts = new Map();
  pins = new Map();
}
var Rvr = new z(() => new rt());
async function Avr(e, key, {
  cap: cap,
  screens: screens,
  screenKey: screenKey,
  heal: heal
}) {
  if (screens.get(screenKey) !== "ok") {
    let y = await e.statMeta(key);
    if (!y.ok) {
      if (y.error.code !== "NotFound") screens.set(screenKey, "refused"), await heal?.();
      return null;
    }
    if (y.value.size > cap) return screens.set(screenKey, "refused"), null;
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
var le = () => o().transform(FA),
  at = /^[a-f0-9]{8}$/,
  qt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function de(e, n) {
  return r => {
    if (n(r)) return r;
    t(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn"
    });
    return;
  };
}
var we = f(() => u({
    state: o(),
    detail: o(),
    tempo: U(["active", "idle", "blocked"]).optional().catch(void 0),
    inFlight: u({
      tasks: v(),
      queued: v(),
      kinds: T(o()),
      drainableMonitors: v().int().nonnegative().optional(),
      wake: u({
        at: v().optional(),
        reason: o().optional(),
        fires: v().int().nonnegative(),
        keepalive: C(!0).optional()
      }).optional().catch(void 0)
    }).optional(),
    selfWake: M().optional().catch(void 0),
    fan: T(u({
      id: o().optional(),
      kind: U(["agent", "workflow", "shell", "monitor", "mcp", "todo"]).optional().catch(void 0),
      label: o(),
      startedAt: v().optional(),
      doneAt: v().optional(),
      failed: M().optional(),
      group: o().optional()
    })).optional(),
    tokens: v().optional(),
    needs_you: M().optional(),
    needs: o().optional(),
    block: u({
      questions: T(u({
        question: o(),
        options: T(u({
          label: o(),
          description: o()
        }))
      }))
    }).optional(),
    suggestedReply: o().optional(),
    needsOverlay: o().optional(),
    output: fe(o(), o()).nullable().default(null),
    structuredResult: fe(o(), oe()).optional(),
    children: T(u({
      id: o(),
      href: o(),
      kind: U(["pr", "frame"]).optional().catch(void 0),
      title: o().optional().catch(void 0)
    })).nullable().default(null),
    linkScanOffset: v().default(0),
    linkScanPath: le().transform(de("linkScanPath", e => it(e) && e.endsWith(".jsonl") && Vt(X(e, ".jsonl")) !== null)).optional(),
    template: o(),
    routine: o().optional(),
    respawnFlags: T(o()).default([]).transform(e => zZ(oPe(e))),
    bgIsolation: U(["none", "worktree"]).optional().catch(void 0),
    providerEnv: fe(o(), o()).transform(e => {
      let n = rvs(Gr(e, FA));
      return n && Fvr(n, "the saved job state (state.json providerEnv)");
    }).optional(),
    sessionPermissionRules: u({
      allow: T(o()),
      deny: T(o()),
      addDirs: T(le()).optional()
    }).optional(),
    memoryToggledOff: M().optional(),
    autoMemoryOffThisSession: M().optional(),
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
    nameSource: U(["user", "auto", "collision"]).optional().catch(void 0),
    color: o().optional(),
    sessionId: le(),
    resumeSessionId: o().transform(de("resumeSessionId", e => Vt(e) !== null)).optional(),
    daemonShort: o().transform(de("daemonShort", e => at.test(e))).optional(),
    cliVersion: o().optional(),
    cwd: le(),
    createdAt: o(),
    updatedAt: o(),
    firstTerminalAt: o().nullable().default(null),
    lastTerminalAt: o().optional(),
    worktreePath: le().optional(),
    worktreeBranch: o().optional(),
    worktreeHookBased: M().optional(),
    originCwd: le().optional(),
    bridgeSessionId: o().transform(de("bridgeSessionId", e => qt.test(e))).optional(),
    bridgeOwnerAccountUuid: o().optional(),
    bridgeOwnerOrganizationUuid: o().optional(),
    bridgeNoHistoryBackfill: M().optional(),
    bridgeOutboundOnly: M().optional(),
    bridgeSessionGroupingId: o().transform(de("bridgeSessionGroupingId", e => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(),
    bridgeSessionSeq: v().transform(de("bridgeSessionSeq", e => Number.isInteger(e) && e >= 0)).optional(),
    backend: U(["daemon", "peer", "remote"]).catch("daemon").default("daemon").transform(e => {
      if (e === "daemon") return e;
      return t(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, {
        level: "warn"
      }), "daemon";
    }),
    sock: o().optional(),
    pid: v().optional(),
    keptBy: u({
      pid: v().int().positive(),
      procStart: o().max(64).optional()
    }).optional(),
    sortOrder: v().optional(),
    stateSortOrder: v().optional(),
    group: o().optional(),
    pinned: M().optional(),
    reapedMidWorkAt: o().optional(),
    reapedUnsettledAt: o().optional(),
    deadEpochReapedAt: o().optional(),
    sessionIdTaken: M().optional().catch(void 0),
    replayOwed: M().optional().catch(void 0)
  }).transform(({
    needs_you: needs_you,
    ...n
  }) => {
    let r = n.bridgeOwnerAccountUuid !== void 0 && !iDe(n.bridgeOwnerAccountUuid) || n.bridgeOwnerOrganizationUuid !== void 0 && !iDe(n.bridgeOwnerOrganizationUuid),
      tempo = n.tempo ?? (needs_you ? "blocked" : "idle");
    return {
      ...n,
      ...(r && {
        bridgeOwnerAccountUuid: void 0,
        bridgeOwnerOrganizationUuid: void 0
      }),
      tempo: tempo,
      ...(n.lastTerminalAt === void 0 && h_(n.state) !== null && tempo !== "active" && {
        lastTerminalAt: n.firstTerminalAt || n.updatedAt
      })
    };
  })),
  te = "state.json",
  cap_2 = 8388608;
function tD() {
  return SDo();
}
function io(e) {
  return V(tD(), e);
}
function Om() {
  let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
  if (CLAUDE_JOB_DIR) return X(CLAUDE_JOB_DIR);
  let n = A_();
  if (n) return X(n.jobDir);
  return K().slice(0, 8);
}
function st(e, n) {
  return Cr(e) ? Be.job(e, n) : void 0;
}
function jdt(e, n) {
  return yNr(e, n);
}
function Wdt(e) {
  return Be.job(e, [te]);
}
function Igo(e, n) {
  let r = V(io(e), te),
    s = !1,
    p = Number.NaN;
  function m(w) {
    if (s) return;
    if (Number.isNaN(p)) {
      p = w;
      return;
    }
    if (w === p) return;
    h(), n();
  }
  function g() {
    re(r).then(w => m(w.mtimeMs), () => m(-1));
  }
  g();
  let S = setInterval(g, 200),
    y = setTimeout(h, 1e4);
  function h() {
    if (s) return;
    s = !0, clearInterval(S), clearTimeout(y);
  }
  return h;
}
function Lvr() {
  return O6().ownStateWriteDepth > 0;
}
async function $l(e, n, r) {
  let s = n.inFlight?.kinds.includes("session_cron") === !0,
    p = s && !n.selfWake && Fe(n.inFlight) ? {
      ...n,
      selfWake: !0
    } : !s && n.selfWake && Ta(n) ? {
      ...n,
      selfWake: void 0
    } : n,
    g = Ta(p) ? p.lastTerminalAt ? p : {
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
      ...P
    } = g,
    D = r ? jdt(e, [te]) : void 0,
    R = O6();
  R.ownStateWriteDepth++;
  try {
    if (r && D) {
      let O = await r.write(D, _(P, null, 2), {
        mode: 384,
        parent: "mustExist"
      });
      if (!O.ok) {
        let code = um(O.error);
        throw Object.assign(new x(`[jobs] v5 state write failed: ${yt(O.error)}`, "[jobs] v5 state write failed"), code !== void 0 ? {
          code: code
        } : {});
      }
    } else await An(V(e, te), _(P, null, 2), 384);
  } finally {
    R.ownStateWriteDepth--, qp(e);
  }
}
function hl(e) {
  let n = k(e);
  if (n && (bye.has(n) || n === "ENOENT")) {
    t(`[jobs] state write failed (${n}): ${d(e)}`, {
      level: "error"
    });
    return;
  }
  l(e);
}
function Q7t(e, n) {
  let r = n !== void 0 && n.id === e?.bridgeSessionId;
  return {
    ownerAccountUuid: r ? n.ownerAccountUuid : void 0,
    ownerOrganizationUuid: r ? n.ownerOrganizationUuid : void 0,
    noHistoryBackfill: e?.noHistoryBackfill || (n !== void 0 && !r ? !0 : n?.noHistoryBackfill)
  };
}
function rie(CLAUDE_BRIDGE_REATTACH_SESSION, n, r, s, p) {
  if (!CLAUDE_BRIDGE_REATTACH_SESSION) return;
  let m = {
    CLAUDE_BRIDGE_REATTACH_SESSION: CLAUDE_BRIDGE_REATTACH_SESSION
  };
  if (n !== void 0 && n > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(n);
  if (s) m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
  if (p?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = p.ownerAccountUuid;
  if (p?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = p.ownerOrganizationUuid;
  if (p?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (r !== !1) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m;
}
function F() {
  return nt.of(j().host);
}
function Ee(e, n) {
  return n?.onReadFailure === "null" ? null : e?.state ?? null;
}
var Yt = [15, 45],
  Xt = new Set(["ELOOP", "ENXIO", "EISDIR"]);
function ke(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Xt.has(e.telemetryCode) ? "non-regular" : void 0;
}
function lt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== te;
}
var Zt = new Set(["invariant", "permission", "environment"]);
function Qt(e) {
  if (e.code === "Unavailable") return !0;
  return e.code === "Failed" && !Zt.has(e.failureClass) && ke(e) === void 0 && !lt(e);
}
async function en(e, n) {
  let r = await n(),
    attempts = 1;
  for (let p of Yt) {
    if (r.ok || !Qt(r.error)) break;
    await Y(p), r = await n(), attempts++;
  }
  if (r.ok) {
    if (attempts === 1) F().noteCleanRead(e);else if (F().shouldReportRecovered(e)) i("tengu_bg_state_read_recovered", {
      attempts: attempts
    });
  }
  return r;
}
function ot(e, n, r) {
  let s = F().peek(e);
  if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) t(`[jobs] skipping ${X(e)}: state.json is ${r}`, {
    level: "warn"
  });
  return F().noteRejected(e, `rejected:${n}`), null;
}
function qp(e) {
  F().invalidate(e);
}
async function tn(e, n, r) {
  let s = X(n),
    p = F().peek(n);
  if (p === void 0 || p.mtimeKey.startsWith("rejected:")) {
    let E = await e.statMeta(Wdt(s));
    if (!E.ok) {
      if (E.error.code === "NotFound") return _e(n, r);
      let N = ke(E.error);
      if (N !== void 0) return ot(n, N, N === "oversize" ? "too large" : "not a regular file");
    } else if (E.value.size > cap_2) {
      let N = `rejected:${E.value.mtimeMs}:${E.value.size}`;
      if (F().peek(n)?.mtimeKey !== N) t(`[jobs] skipping ${X(n)}: state.json is too large (${E.value.size} bytes)`, {
        level: "warn"
      }), F().noteRejected(n, N);
      return null;
    }
  }
  let m = Wdt(s),
    S = await en(n, () => e.read([m, Be.job(s, ["order"]), Be.job(s, ["stateOrder"]), Be.job(s, ["group"])]));
  if (!S.ok && lt(S.error)) {
    if (F().shouldLogSidecarFallback(n)) t(`[jobs] ${X(n)}: a sidecar could not be read as a regular file; using state.json alone`);
    let E = await e.read([m]);
    S = E.ok ? {
      ok: !0,
      value: {
        items: [E.value.items[0], {
          found: !1
        }, {
          found: !1
        }, {
          found: !1
        }]
      }
    } : E;
  }
  let y = F().peek(n);
  if (!S.ok) {
    let E = ke(S.error);
    if (E !== void 0) return ot(n, E, E === "oversize" ? "too large" : "not a regular file");
    if (t(`[jobs] ${X(n)}: v5 state read failed \u2014 ${S.error.code}`, {
      level: "warn"
    }), F().shouldReportTransient(n)) i("tengu_bg_state_read_transient", {
      errno: c(S.error.code),
      had_cache: y !== void 0
    });
    return Ee(y, r);
  }
  let [h, w, P, D] = S.value.items;
  if (!h.found) return _e(n, r);
  if (h.totalBytes > cap_2) {
    let E = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (y?.mtimeKey === E) return null;
    return t(`[jobs] skipping ${X(n)}: state.json is too large (${h.totalBytes} bytes)`, {
      level: "warn"
    }), F().noteRejected(n, E), null;
  }
  let R = E => Buffer.from(E.value.buffer, E.value.byteOffset, E.value.byteLength).toString("utf-8"),
    O = E => E.found && E.totalBytes <= cap_2 ? R(E) : null,
    A = E => E.found && E.totalBytes <= cap_2 ? E.version : 0,
    L = `v5:${h.version}:${A(w)}:${A(P)}:${A(D)}`;
  if (y?.mtimeKey === L) return F().noteHit(n), y.state;
  return nn(n, L, R(h), O(w), O(P), O(D), y, r);
}
function nn(e, n, r, s, p, m, g, S) {
  try {
    let y = J(r),
      h = we().safeParse(y);
    if (!h.success) return t(`[jobs] skipping ${X(e)}: state.json schema validation failed \u2014 ${h.error.message}`, {
      level: "warn"
    }), F().noteRejected(e, n), null;
    let sortOrder_2 = s !== null ? Number(s) : void 0,
      stateSortOrder_2 = p !== null ? Number(p) : void 0,
      shape_2 = we().in.shape,
      R = y !== null && typeof y === "object" ? Object.entries(y).filter(([A]) => !Object.hasOwn(shape_2, A)) : [],
      O = {
        ...Object.fromEntries(R),
        ...h.data
      };
    if (Number.isFinite(sortOrder_2)) O = {
      ...O,
      sortOrder: sortOrder_2
    };
    if (Number.isFinite(stateSortOrder_2)) O = {
      ...O,
      stateSortOrder: stateSortOrder_2
    };
    if (m !== null && m.trim()) O = {
      ...O,
      group: m.trim()
    };
    if (O.group !== void 0) O = {
      ...O,
      group: ye(O.group)
    };
    return F().noteParsed(e, n, O), O;
  } catch (error) {
    if (t(`[jobs] ${X(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: Fr(error) ?? b("unknown"),
      had_cache: g !== void 0
    });
    return Ee(g, S);
  }
}
function _e(e, n) {
  return F().noteAbsent(e), n?.onAbsent?.(), null;
}
async function Mgo(e, n) {
  return Pe(e, n, {
    onReadFailure: "null"
  });
}
async function Zr(e, n) {
  return Pe(e, n, void 0);
}
async function Dgo(e, n) {
  let r = {
      absent: !1
    },
    s = await Pe(e, n, {
      onAbsent: () => {
        r.absent = !0;
      }
    });
  return r.absent ? "absent" : s;
}
async function Pe(e, n, r) {
  if (n !== void 0 && jdt(e, [te]) !== void 0) return tn(n, e, r);
  let s = V(e, te),
    p = V(e, "order"),
    m = V(e, "stateOrder"),
    g = V(e, "group"),
    S,
    y;
  try {
    let [w, P, D, R] = await Promise.all([re(s), re(p).catch(() => null), re(m).catch(() => null), re(g).catch(() => null)]);
    if (!w.isFile() || w.size > cap_2) {
      let A = `rejected:${w.mtimeMs}:${w.size}`;
      if (F().peek(e)?.mtimeKey === A) return null;
      return t(`[jobs] skipping ${X(e)}: state.json is ${w.isFile() ? `too large (${w.size} bytes)` : "not a regular file"}`, {
        level: "warn"
      }), F().noteRejected(e, A), null;
    }
    let O = A => A !== null && A.isFile() && A.size <= cap_2;
    y = {
      order: O(P),
      stateOrder: O(D),
      group: O(R)
    }, S = `${w.mtimeMs}:${y.order ? P.mtimeMs : 0}:${y.stateOrder ? D.mtimeMs : 0}:${y.group ? R.mtimeMs : 0}`;
  } catch (error) {
    if (G(error)) return _e(e, r);
    t(`[jobs] ${X(e)}: state.json stat failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
    let P = F().peek(e);
    if (F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: Fr(error) ?? b("unknown"),
      had_cache: P !== void 0
    });
    return Ee(P, r);
  }
  let h = F().peek(e);
  if (h?.mtimeKey === S) return F().noteHit(e), h.state;
  try {
    let [w, P, D, R] = await Promise.all([ge(s, "utf-8"), y.order ? ge(p, "utf-8").catch(() => null) : Promise.resolve(null), y.stateOrder ? ge(m, "utf-8").catch(() => null) : Promise.resolve(null), y.group ? ge(g, "utf-8").catch(() => null) : Promise.resolve(null)]),
      O = J(w),
      A = we().safeParse(O);
    if (!A.success) return t(`[jobs] skipping ${X(e)}: state.json schema validation failed \u2014 ${A.error.message}`, {
      level: "warn"
    }), F().noteRejected(e, S), null;
    let sortOrder_3 = P !== null ? Number(P) : void 0,
      stateSortOrder_3 = D !== null ? Number(D) : void 0,
      shape_3 = we().in.shape,
      B = O !== null && typeof O === "object" ? Object.entries(O).filter(([ie]) => !Object.hasOwn(shape_3, ie)) : [],
      q = {
        ...Object.fromEntries(B),
        ...A.data
      };
    if (Number.isFinite(sortOrder_3)) q = {
      ...q,
      sortOrder: sortOrder_3
    };
    if (Number.isFinite(stateSortOrder_3)) q = {
      ...q,
      stateSortOrder: stateSortOrder_3
    };
    if (R !== null && R.trim()) q = {
      ...q,
      group: R.trim()
    };
    if (q.group !== void 0) q = {
      ...q,
      group: ye(q.group)
    };
    return F().noteParsed(e, S, q), q;
  } catch (error) {
    if (G(error)) return _e(e, r);
    if (t(`[jobs] ${X(e)}: state.json read/parse failed \u2014 ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: Fr(error) ?? b("unknown"),
      had_cache: h !== void 0
    });
    return Ee(h, r);
  }
}
async function Z7t(e, n) {
  qp(e);
  let r = await Zr(e, n).catch(() => null);
  if (r !== null && r.state !== "done" && r.state !== "stopped" && r.state !== "blocked" && r.state !== "failed") await Y(50), qp(e), r = (await Zr(e, n).catch(() => null)) ?? r;
  return r;
}
function ee() {
  return V(tD(), "pins.json");
}
var stale = 5000;
async function p3e(e) {
  if (e) return on(e);
  try {
    let n = await re(ee());
    if (!n.isFile() || n.size > cap_2) {
      if (!n.isFile()) await heal_2();
      return new Set();
    }
    return Te(await ge(ee(), "utf-8"));
  } catch (error) {
    if (G(error)) return await An(ee(), _([])).catch(r => {
      if (!G(r)) hl(r);
    }), new Set();
    return new Set();
  }
}
async function on(e) {
  let n = await Avr(e, Be.jobPins(), {
    cap: cap_2,
    screens: dt(),
    screenKey: ee(),
    heal: heal_2
  });
  return Te(n ?? void 0);
}
function dt() {
  return Rvr.of(j().host).pins;
}
function Te(e) {
  if (e === void 0 || e.length > cap_2) return new Set();
  let n;
  try {
    n = J(e);
  } catch {
    return new Set();
  }
  if (!Array.isArray(n)) return new Set();
  return new Set(n.filter(item => typeof item === "string"));
}
async function heal_2(e) {
  let n = await re(ee()).catch(() => {
    return;
  });
  if (n === void 0 || n.isFile() && !(e?.evenRegular && n.size > cap_2)) return !1;
  return await ue(ee(), {
    recursive: !0,
    force: !0
  }).catch(() => {}), !0;
}
async function WZ(e, name, nameSource, s, p) {
  let m = io(e),
    g = await Zr(m, s);
  if (!g) return !1;
  if (g.name === name) return !0;
  qp(m);
  let S = (await Zr(m, s)) ?? g;
  if (S.name === name || nameSource === "auto" && S.name) return !0;
  if (!ut(S, p)) return !1;
  return $l(m, {
    ...S,
    name: name,
    nameSource: nameSource,
    updatedAt: new Date().toISOString()
  }, s).then(() => !0, y => {
    if (!G(y)) hl(y);
    return !1;
  });
}
async function eZt(e, color, r) {
  let s = io(e),
    p = await Zr(s, r);
  if (!p) return !1;
  if (p.color === color) return !0;
  qp(s);
  let m = (await Zr(s, r)) ?? p;
  if (m.color === color) return !0;
  return $l(s, {
    ...m,
    color: color,
    updatedAt: new Date().toISOString()
  }, r).then(() => !0, g => {
    if (!G(g)) hl(g);
    return !1;
  });
}
function Nvr() {
  return O6().relocatedCwd;
}
async function tZt(cwd, n) {
  let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_2 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  O6().relocatedCwd = cwd, qp(CLAUDE_JOB_DIR_2);
  let s = await Zr(CLAUDE_JOB_DIR_2, n),
    p = s?.worktreePath ? s.originCwd : cwd;
  if (!s || s.cwd === cwd && s.originCwd === p) return;
  qp(CLAUDE_JOB_DIR_2);
  let m = (await Zr(CLAUDE_JOB_DIR_2, n)) ?? s;
  await $l(CLAUDE_JOB_DIR_2, {
    ...m,
    cwd: cwd,
    originCwd: m.worktreePath ? m.originCwd : cwd,
    updatedAt: new Date().toISOString()
  }, n).catch(g => {
    if (!G(g)) hl(g);
  });
}
async function Lgo(resumeSessionId, linkScanPath, r) {
  let CLAUDE_JOB_DIR_3 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_3 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  qp(CLAUDE_JOB_DIR_3);
  let p = await Zr(CLAUDE_JOB_DIR_3, r);
  if (!p || p.resumeSessionId === resumeSessionId && p.linkScanPath === linkScanPath) return;
  qp(CLAUDE_JOB_DIR_3);
  let m = (await Zr(CLAUDE_JOB_DIR_3, r)) ?? p;
  await $l(CLAUDE_JOB_DIR_3, {
    ...m,
    resumeSessionId: resumeSessionId,
    linkScanPath: linkScanPath,
    linkScanOffset: 0,
    updatedAt: new Date().toISOString()
  }, r).catch(g => {
    if (!G(g)) hl(g);
  });
}
async function f3e(e, n, {
  includeSettled = !1
} = {}) {
  let CLAUDE_JOB_DIR_4 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_4 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await m3e(async () => {
    qp(CLAUDE_JOB_DIR_4);
    let p = await Zr(CLAUDE_JOB_DIR_4, n);
    if (!p?.inFlight || Ta(p) && !includeSettled || p.tempo === "active") return;
    let inFlight = p.inFlight;
    if (e.count === inFlight.tasks && (e.drainableMonitors ?? 0) === (inFlight.drainableMonitors ?? 0) && e.kinds.length === inFlight.kinds.length && e.kinds.every(item => inFlight.kinds.includes(item))) return;
    await $l(CLAUDE_JOB_DIR_4, {
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
    }, n).catch(g => {
      if (!G(g)) hl(g);
    });
  });
}
function ut(e, n) {
  if (n === void 0 || !e.name) return !0;
  if (e.nameSource === "auto" || e.nameSource === "collision") return !0;
  return n.includes(Ti(e.name));
}
async function XP(e, n, r, s, p, m, g) {
  let CLAUDE_JOB_DIR_5 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_5 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await m3e(async () => {
    qp(CLAUDE_JOB_DIR_5);
    let y = await Zr(CLAUDE_JOB_DIR_5, p);
    if (!y?.respawnFlags) return;
    if (g && !g(y.respawnFlags)) return;
    let h = [e, ...n],
      w = A => {
        let L = [];
        for (let E = 0; E < A.length; E++) {
          let N = A[E];
          if (h.some(item => N === item || N.startsWith(`${item}=`))) {
            if (N.indexOf("=") === -1 && A[E + 1] !== void 0) E++;
            continue;
          }
          L.push(N);
        }
        if (r === null) return L;
        return [...L, ...Lk(e, r)];
      },
      P = w(y.respawnFlags);
    if (P.length === y.respawnFlags.length && P.every((item, index) => item === y.respawnFlags[index])) return;
    qp(CLAUDE_JOB_DIR_5);
    let D = (await Zr(CLAUDE_JOB_DIR_5, p)) ?? y,
      R = D.respawnFlags ?? y.respawnFlags;
    if (g && !g(R)) return;
    let O = ut(D, m);
    await $l(CLAUDE_JOB_DIR_5, {
      ...D,
      ...(O ? s : {}),
      respawnFlags: w(R),
      updatedAt: new Date().toISOString()
    }, p).catch(A => {
      if (!G(A)) hl(A);
    });
  });
}
async function Ngo(e, n, r) {
  let CLAUDE_JOB_DIR_6 = a.CLAUDE_JOB_DIR;
  if (!CLAUDE_JOB_DIR_6 || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await m3e(async () => {
    qp(CLAUDE_JOB_DIR_6);
    let p = await Zr(CLAUDE_JOB_DIR_6, r);
    if (!p?.respawnFlags) return;
    let m = Lk(e, n);
    for (let S = 0; S <= p.respawnFlags.length - m.length; S++) if (m.every((item, index) => p.respawnFlags[S + index] === item)) return;
    qp(CLAUDE_JOB_DIR_6);
    let g = (await Zr(CLAUDE_JOB_DIR_6, r)) ?? p;
    await $l(CLAUDE_JOB_DIR_6, {
      ...g,
      respawnFlags: [...(g.respawnFlags ?? []), ...m],
      updatedAt: new Date().toISOString()
    }, r).catch(S => {
      if (!G(S)) hl(S);
    });
  });
}
async function Ie(e, n) {
  await ue(e, {
    force: !0
  });
  let r = await cF(e, n);
  try {
    await ns(r, e);
  } catch (error) {
    throw await ue(r, {
      force: !0
    }).catch(() => {}), error;
  }
}
async function Ce(e, n, r) {
  let s = await e.write(n, r, {
    parent: "mustExist",
    mode: 438 & ~process.umask()
  });
  if (!s.ok) {
    let code_2 = um(s.error);
    throw Object.assign(new x(`[jobs] v5 sidecar write failed: ${yt(s.error)}`, "[jobs] v5 sidecar write failed"), code_2 !== void 0 ? {
      code: code_2
    } : {});
  }
}
async function Fgo(e, n, r) {
  let s = W() && r ? jdt(e, ["order"]) : void 0;
  if (r && s) await Ce(r, s, String(n));else await Ie(V(e, "order"), String(n));
  qp(e);
}
async function Hgo(e, n, r) {
  let s = W() && r ? jdt(e, ["stateOrder"]) : void 0;
  if (r && s) await Ce(r, s, String(n));else await Ie(V(e, "stateOrder"), String(n));
  qp(e);
}
async function j$n(e, n, r) {
  let s = V(e, "group"),
    p = ye(n),
    m = W() && r ? jdt(e, ["group"]) : void 0;
  if (r && m) {
    if (p) await Ce(r, m, p);else {
      let g = await r.delete(m);
      if (!g.ok) throw new x(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
    }
  } else if (p) await Ie(s, p);else await ue(s, {
    force: !0
  });
  qp(e);
}
async function $go(e) {
  let n = V(tD(), ".order");
  await Oe(tD(), {
    recursive: !0
  });
  await using r = await dl(n, {
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
var ct = Qg();
function m3e(e) {
  return ct.run("own-state.json", e);
}
function W$n(e, n, r) {
  return ct.run("pins.json", async () => {
    if (W() && r) return an(e, n, r);
    let s = ee();
    await Oe(Ht(s), {
      recursive: !0
    });
    await using p = await dl(s, {
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
    let m = await p3e();
    if (n ? m.has(e) : !m.has(e)) return;
    if (n) m.add(e);else m.delete(e), await ue(V(io(e), "order")).catch(g => {
      if (!G(g)) throw g;
    }), qp(io(e));
    await An(s, _([...m], null, 2));
  });
}
async function an(e, n, r) {
  let s = y => {
      let h = Te(y?.value);
      if (n ? h.has(e) : !h.has(e)) return {
        skip: !0,
        result: !1
      };
      if (n) h.add(e);else h.delete(e);
      return {
        write: _([...h], null, 2),
        result: !0
      };
    },
    p = dt(),
    m = await r.statMeta(Be.jobPins());
  if (m.ok && m.value.size > cap_2) await heal_2({
    evenRegular: !0
  }), p.delete(ee());else if (!m.ok && ke(m.error) !== void 0) await heal_2(), p.delete(ee());
  let g = {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    },
    S = await r.updateText(Be.jobPins(), s, g);
  if (!S.ok && (await heal_2())) S = await r.updateText(Be.jobPins(), s, g);
  if (!S.ok) throw new x(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
  if (!n && S.value.result === !0) {
    let y = st(e, ["order"]);
    if (y) {
      let h = await r.delete(y);
      if (!h.ok) t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, {
        level: "warn"
      });
    } else await ue(V(io(e), "order")).catch(h => {
      if (!G(h)) t(`[jobs] order sidecar release failed after unpin: ${d(h)}`, {
        level: "warn"
      });
    });
    qp(io(e));
  }
}
async function zR(e, n, r) {
  if (n) return ln(n, e, r);
  let s;
  try {
    s = await Gt(tD(), {
      withFileTypes: !0
    });
  } catch (error) {
    if (M6(k(error))) r?.();
    return [];
  }
  let [p, m] = await Promise.all([p3e(), Promise.all(s.filter(item => item.isDirectory()).map(async item => {
      let state_2 = await Zr(V(tD(), item.name));
      return state_2 ? {
        id: item.name,
        state: state_2
      } : null;
    }))]),
    g = m.filter(item => item !== null).map(item => p.has(item.id) ? {
      ...item,
      state: {
        ...item.state,
        pinned: !0
      }
    } : item);
  return e ? zdt(g, e) : g;
}
async function sn(e) {
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
    for (let p of s.value.items) if (p.kind === "scope" && p.scope.namespace === "job" && p.scope.jobId !== void 0 && p.scope.relPath === void 0 && Cr(p.scope.jobId)) ids.push(p.scope.jobId);
    cursor = s.value.cursor;
  } while (cursor !== void 0);
  return {
    ok: !0,
    ids: ids
  };
}
async function ln(e, n, r) {
  let s = await sn(e);
  if (!s.ok) {
    if (AIt(s.error)) r?.();
    return [];
  }
  let ids_2 = s.ids,
    [m, g] = await Promise.all([p3e(e), Promise.all(ids_2.map(async y => {
      let state_3 = await Zr(io(y), e);
      return state_3 ? {
        id: y,
        state: state_3
      } : null;
    }))]),
    S = g.filter(item => item !== null).map(item => m.has(item.id) ? {
      ...item,
      state: {
        ...item.state,
        pinned: !0
      }
    } : item);
  return n ? zdt(S, n) : S;
}
function zdt(e, n) {
  let r = Date.now();
  return e.map(item => {
    if (Ta(item.state)) return item;
    if (n.has(item.id)) return item;
    if (item.state.keptBy !== void 0 && pn(item.state)) return item;
    if (r - Date.parse(item.state.createdAt) < dn) return item;
    return {
      ...item,
      state: un(item.state)
    };
  });
}
var dn = 5000;
function un(e) {
  if (Vdt(e)) return {
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
var zpe = "starting\u2026",
  needs = "send a prompt to start";
function Gdt(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}
var g3e = `(idle \u2014 ${needs})`,
  rUe = ["starting", "resuming", "adopted", "crashed"],
  HIt = 172800000,
  cn = "ended while the background service was off";
function xwe(e) {
  let n = new Date().toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? ps(e.detail) : zpe,
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
    providerEnv: e.providerEnv && nvs(e.providerEnv, e.cwd),
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
    color: CBe({
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
  };
}
async function Ugo(e, n, r) {
  if (n.length === 0) return e;
  let s = new Set(e.map(item => item.id)),
    p = n.filter(item => at.test(item.short) && !s.has(item.short) && item.source !== "spare" && !item.dying);
  if (p.length === 0) return e;
  let m = await lN({
      silent: !0
    }, r),
    g = await Promise.all(p.map(item => {
      let w = m.workers[item.short];
      return U$n(item.pid, w?.pid === item.pid ? w.procStart : void 0);
    }));
  for (let [h, w] of p.entries()) if (g[h] !== "live") {
    if (t(`[adoptRosterOrphans] pruned dead record ${w.short} (${g[h]})`), F().shouldReportPruned(w.short)) i("tengu_bg_roster_orphan_pruned", {
      reason: c(g[h] ?? "dead_pid")
    });
  } else F().notePruneCandidateLive(w.short);
  let S = p.filter((item, index) => g[index] === "live");
  if (S.length === 0) return e;
  let y = S.map(item => {
    let state_4 = {
        ...xwe({
          template: {
            name: item.agent ?? "bg",
            description: ""
          },
          routine: item.routine,
          intent: item.intent,
          name: item.name,
          detail: item.detail,
          ...(item.tempo === "active" && (item.state === "running" || rUe.includes(item.state)) ? item.routine ? {
            tempo: "idle"
          } : {
            tempo: "blocked",
            needs: needs
          } : {
            tempo: item.tempo,
            needs: item.needs
          }),
          sessionId: FA(item.sessionId),
          cwd: FA(item.cwd),
          worktreePath: item.worktreePath === void 0 ? void 0 : FA(item.worktreePath)
        }),
        createdAt: new Date(item.createdAt ?? item.startedAt).toISOString(),
        daemonShort: item.short,
        state: rUe.includes(item.state) ? "working" : item.state,
        ...(kC(item.state) && {
          inFlight: {
            tasks: 0,
            queued: 0,
            kinds: []
          }
        })
      },
      P = io(item.short),
      D = r ? st(item.short, [te]) : void 0;
    if (r && D) r.write(D, _(state_4), {
      precondition: {
        type: "ifAbsent"
      },
      mode: 384
    }).then(R => {
      if (R.ok) i("tengu_bg_roster_orphan_adopted", {});else if (R.error.code !== "AlreadyExists") hl(new x(`[jobs] v5 orphan seed write failed: ${R.error.code}`, "[jobs] v5 orphan seed write failed"));
    });else Oe(P, {
      recursive: !0
    }).then(() => KB(V(P, "state.json"), _(state_4), 384)).then(() => i("tengu_bg_roster_orphan_adopted", {})).catch(R => {
      if (k(R) !== "EEXIST") hl(R);
    });
    return {
      id: item.short,
      state: state_4
    };
  });
  return [...e, ...y];
}
function h_(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function kC(e) {
  return h_(e) !== null;
}
function Ta(e) {
  return kC(e.state) && e.tempo !== "active";
}
function pn(e) {
  return e.intent === "" && e.needs === needs && e.tempo === "blocked" && !Ta(e);
}
function Iv(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function Vdt(e) {
  return e.state === "blocked" && !Iv(e);
}
function $It(e) {
  return e.backend === "daemon" && !Iv(e);
}
function oie(e) {
  let n = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return FA(n);
}
function nZt(e, n) {
  if (e.backend === "remote") return !0;
  let r = Kt(n, oie(e));
  return r.split(/[/\\]/, 1)[0] !== ".." && !it(r);
}
function qdt(e) {
  let n = r => r?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return n(e.intent) || n(e.initialPrompt);
}
function D6(e) {
  return e.routine !== void 0 || e.selfWake === !0 || (e.inFlight?.kinds.includes("session_cron") ?? !1) || qdt(e);
}
function h3e(e, n, r, s, p) {
  let m = io(e);
  return Zr(m, p).then(async g => {
    if (!g || Ta(g) || n === "failed" && Vdt(g)) return "none";
    let S = Date.now(),
      y = new Date(S).toISOString(),
      h = s?.resumable === "auto-resume" && n === "failed" && !Iv(g) && S - Date.parse(g.updatedAt) > HIt;
    return await $l(m, {
      ...g,
      state: h ? "stopped" : n === "crashed" ? "failed" : n,
      detail: h ? cn : n === "stopped" ? "stopped" : n === "failed" ? (g.detail || r).replace(/; respawning$/, "") : r,
      tempo: "idle",
      inFlight: void 0,
      needs: void 0,
      updatedAt: y,
      firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y),
      lastTerminalAt: h ? g.updatedAt : y,
      ...(s?.resumable === "auto-resume" && n === "failed" && (h ? {
        deadEpochReapedAt: y
      } : {
        reapedMidWorkAt: g.updatedAt
      })),
      ...(s?.resumable === "wake-only" && n === "failed" && {
        reapedUnsettledAt: g.updatedAt
      })
    }, p), h ? "dead-epoch" : "settled";
  }).catch(g => (hl(g), "none"));
}
export { M6, AIt, Rvr, Avr, i3e, xIt, wgo, Fdt, zws, Gws, xvr, Vws, proto_2 as ac, V7t, Z0, qws, $Z, N$n, Hdt, Pvr, vgo, $dt, kgo, nie, Ego, F$n, PIt, OIt, Udt, IIt, a3e, q7t, MIt, tUe, l3e, DIt, d3e, LIt, c3e, Tgo, H$n, NIt, Ovr, Kws, Cgo, nUe, Rgo, Ago, u3e, $$n, Ivr, Mvr, FIt, lN, jR, UZ, U$n, K7t, tPe, Yws, BZ, xgo, Xws, jpe, Pgo, jZ, Wpe, Lk, Y7t, X7t, Jws, B$n, Ogo, Bdt, Qws, eD, WR, J7t, Dvr, tD, io, Om, jdt, Wdt, Igo, Lvr, $l, hl, Q7t, rie, qp, Mgo, Zr, Dgo, Z7t, p3e, WZ, eZt, Nvr, tZt, Lgo, f3e, XP, Ngo, Fgo, Hgo, j$n, $go, m3e, W$n, zR, zdt, zpe, needs as Hb, Gdt, g3e, rUe, HIt, xwe, Ugo, h_, kC, Ta, Iv, Vdt, $It, oie, nZt, qdt, D6, h3e, Zws, Bgo, evs, tvs, jgo, y3e, Wgo, Kdt, UIt };