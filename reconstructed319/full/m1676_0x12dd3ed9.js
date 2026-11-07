// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  F,
  d,
  k,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J,
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Awe,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _,
  ds
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Dh
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Od
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Zz,
  zV,
  FO,
  wbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  SC
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  kN
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  d0
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  ir
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  ZLs,
  v7i,
  RAe,
  GWn,
  ype,
  xAe,
  hT,
  kp,
  mh,
  Ob,
  n0
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Ab,
  v$t,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  IJ
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  Kn
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  bA
} from "B:/~BUN/root/chunk-q2s07yzr.js";
import {
  qTr
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  Ane,
  HUe,
  hle
} from "B:/~BUN/root/chunk-sbp8fbqp.js";
import {
  YPe
} from "B:/~BUN/root/chunk-s9kjpyrm.js";
import {
  Mp
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  zc
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  rRe
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  xNe,
  Use
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  xh,
  xQe
} from "B:/~BUN/root/chunk-psjm1gcn.js";
import {
  JTe,
  E0n,
  ZTe,
  tue,
  eX
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  K$o
} from "B:/~BUN/root/chunk-36ba1zg7.js";
import {
  q$o
} from "B:/~BUN/root/chunk-qf9ct1qb.js";
import {
  J$o,
  Q$o
} from "B:/~BUN/root/chunk-ksmcy1ph.js";
import {
  eXs
} from "B:/~BUN/root/chunk-5vdgde6t.js";
import {
  HV
} from "B:/~BUN/root/chunk-ts69mavc.js";
import {
  o,
  E,
  I,
  oe,
  C,
  u,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  lstat as At,
  stat as It
} from "fs/promises";
import {
  join as Ot
} from "path";
import {
  randomUUID as Oe
} from "crypto";
var Xe = 10080;

function Re(e) {
  let n;
  try {
    n = v("tengu_violin_sordino", e)
  } catch {
    n = e
  }
  return typeof n === "number" && Number.isInteger(n) && n >= 1 && n <= Xe ? n : void 0
}
import {
  StringDecoder as qe
} from "string_decoder";
var Ye = 262144,
  Ze = 48,
  Qe = /^[A-Za-z0-9_.:-]+$/,
  et = "a tool",
  tt = 128,
  ke = p(() => o().transform((e) => Qe.test(e) ? e.slice(0, Ze) : et)),
  Ae = p(() => o().min(1).max(256)),
  ot = p(() => u({
    call_id: Ae(),
    tool: ke(),
    state: B(["running", "asked"]),
    since: E(),
    classifier_eligible: I().optional().catch(void 0)
  }).transform((e) => ({
    callId: e.call_id,
    tool: e.tool,
    state: e.state,
    since: e.since,
    classifierEligible: e.classifier_eligible
  }))),
  nt = p(() => u({
    call_id: Ae(),
    tool: ke(),
    ended: B(["completed", "denied", "withdrawn", "refused", "failed"]),
    code: o().max(64).regex(/^[a-z0-9_]+$/).optional().catch(void 0),
    at: E()
  }).transform((e) => ({
    callId: e.call_id,
    tool: e.tool,
    ended: e.ended,
    code: e.code,
    at: e.at
  })));

function ye(e) {
  return C(oe()).transform((n) => n.slice(0, tt).flatMap((s) => {
    let S = e.safeParse(s);
    return S.success ? [S.data] : []
  })).catch([])
}
var rt = p(() => u({
  type: T("system"),
  subtype: T("cloud_session_delta"),
  cloud_session: u({
    serving: u({
      state: B(["on", "off", "pending", "revoked"])
    }).optional().catch(void 0),
    calls: u({
      live: ye(ot()),
      recent: ye(nt())
    }).optional().catch(void 0)
  })
}));

function it(e) {
  if (!e.includes("cloud_session_delta")) return;
  let n;
  try {
    n = ds(e)
  } catch {
    return
  }
  let s = rt().safeParse(n);
  if (!s.success) return;
  let {
    serving: S,
    calls: R
  } = s.data.cloud_session;
  return {
    serving: S?.state,
    live: R?.live ?? [],
    recent: R?.recent ?? []
  }
}

function Ie(e) {
  let n = new qe("utf8"),
    s = "",
    S = !1;
  return function(H) {
    let b = typeof H === "string" ? H : n.write(H);
    for (;;) {
      let N = b.indexOf(`
`);
      if (N < 0) break;
      let D = s + b.slice(0, N);
      if (b = b.slice(N + 1), s = "", S) {
        S = !1;
        continue
      }
      let A = it(D);
      if (A !== void 0) e(A)
    }
    if (S) return;
    if (s += b, s.length > Ye) s = "", S = !0
  }
}
var be = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
  Ce = "CLAUDE_CODE_REMOTE_TOOLS_HOST_IDLE_RELEASE_MINUTES",
  st = 60,
  lt = 2500,
  Se = 3000,
  dt = 200,
  at = 1024,
  ut = 320,
  me = /^cse_[A-Za-z0-9_]{1,124}$/,
  ft = /^env_[A-Za-z0-9_-]{1,124}$/,
  ct = new Set([...YPe, ...HUe, ...Et([...GWn, ...FO, "CLAUDE_BRIDGE_OAUTH_TOKEN"]), ...zV.filter((e) => e !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR"].map((e) => ype(e))),
  Le = new Set([...wbt, "CLAUDE_CODE_HOST_CREDS_FILE"]),
  pt = new Set([...Le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR"]),
  _t = new Set([...Zz.filter((e) => e.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"]);

function mt(e, {
  unattendedGrant: n,
  withoutShellSecrets: s,
  guest: S,
  testVm: R
}) {
  let H = ZLs() ? v7i() : void 0;
  if (H === void 0) throw xe();
  let b = ype(H),
    N = ype(be),
    D = ype(Ce),
    A = {
      ...e
    };
  for (let [V, c] of Object.entries(A)) {
    let P = ype(V);
    if (Le.has(P) && De(P, c, e)) throw Me();
    if (ct.has(P) || P === b || P === N || P === D || P.endsWith("_FILE_DESCRIPTOR")) delete A[V]
  }
  if (hle(A), Ane(A), A[H] = "1", s) {
    let V = new Set(Awe(i));
    for (let c of xAe(A))
      if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(c) && V.has(c))) delete A[c];
    delete A.SSH_AGENT_PID, Object.assign(A, RAe(A).respelled)
  }
  if (n !== void 0) A[be] = n;
  let M = Re(st);
  if (M !== void 0) A[Ce] = String(M);
  return A
}

function gt({
  workId: e,
  environmentId: n
}, s) {
  let S = me.test(e) && ft.test(n);
  if (!S) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({
    type: "control_request",
    request_id: s,
    request: {
      subtype: "initialize",
      ...S && {
        attachServeRequest: {
          workId: e,
          environmentId: n
        }
      }
    }
  }) + `
`
}

function Te(e) {
  if (!ZLs()) return xe();
  for (let [s, S] of Object.entries(e)) {
    let R = ype(s);
    if (De(R, S, e)) return t(`[tool-host] no helper: ${R} says this process signs in or sends its traffic elsewhere`, {
      level: "error"
    }), Me()
  }
  let n = Mp();
  if (n) return t(`[tool-host] ${n}`, {
    level: "error"
  }), Error("tool host helper: the process wrapper is not usable");
  return
}

function Ne(e, {
  env: n,
  unattendedGrant: s,
  withoutShellSecrets: S,
  guest: R,
  testVm: H,
  selfInvocation: b = () => zc({
    pinToCurrentBinary: !0
  }),
  spawn: N = d0,
  after: D = Tt,
  killTree: A = Ab
}) {
  let M = Te(n);
  if (M !== void 0) throw M;
  if (!me.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let V = b(),
    c = N(V.cmd, [...V.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json"], {
      cwd: e.folder,
      env: mt(n, {
        unattendedGrant: s,
        withoutShellSecrets: S,
        ...R !== void 0 && {
          guest: R
        },
        ...H !== void 0 && {
          testVm: H
        }
      }),
      extendEnv: !1,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: !0,
      toolCgroupClass: "agent"
    }),
    {
      promise: P,
      resolve: X
    } = Promise.withResolvers(),
    Z = [],
    ee = !1,
    w = Buffer.alloc(0),
    O = 0,
    K, Y = () => {};

  function ne(W, y) {
    if (ee) return;
    ee = !0, Y();
    let L = re(Dh(Wn(w.toString("utf8"))));
    X({
      code: W,
      signal: y,
      stderrFirstLine: L === "" ? void 0 : Q(L, ut)
    })
  }
  try {
    c.on("exit", (y, L) => {
      if (K = [y, L], O <= 0) {
        ne(y, L);
        return
      }
      Y = D(dt, () => ne(y, L))
    }), c.on("error", (y) => {
      if (t(`[tool-host] helper process error: ${re(d(y))}`), !ee) ne(null, null), _e(c, "SIGKILL")
    });
    for (let y of [c.stdin, c.stdout, c.stderr]) y?.on("error", () => {});
    for (let y of [c.stdout, c.stderr])
      if (y !== null && !y.readableEnded) O += 1, y.once("end", () => {
        if (O -= 1, K !== void 0 && O <= 0) ne(...K)
      });
    let W = Ie((y) => {
      for (let L of Z) try {
        L(y)
      } catch (q) {
        t(`[tool-host] status listener failed: ${re(d(q))}`)
      }
    });
    if (c.stdout?.on("data", (y) => {
        if (Z.length > 0) W(y)
      }), c.stderr?.on("data", (y) => {
        let L = at - w.length;
        if (L > 0) {
          let q = typeof y === "string" ? Buffer.from(y) : y;
          w = Buffer.concat([w, q.subarray(0, L)])
        }
      }), c.pid === void 0 || c.stdin === null) ne(null, null);
    else c.stdin.write(gt(e, Oe()))
  } catch (W) {
    throw _e(c, "SIGKILL"), W
  }
  let le;
  return {
    pid: c.pid,
    exited: P,
    onStatus(W) {
      Z.push(W)
    },
    stop(W) {
      if (ee) return Promise.resolve();
      return le ??= new Promise((y) => {
        t(`[tool-host] stopping helper (${W})`);
        let L = x() === "windows",
          q = W === "released";
        try {
          if (q) c.stdin?.write(_({
            type: "control_request",
            request_id: Oe(),
            request: {
              subtype: "end_session",
              reason: qTr
            }
          }) + `
`);
          c.stdin?.end()
        } catch {}
        if (!L && !q) _e(c, "SIGTERM");
        let fe = D(lt, () => {
            if (L && c.pid !== void 0) A(c.pid).catch(() => {});
            else _e(c, "SIGKILL")
          }),
          ue = D(Se, y);
        P.then(() => {
          fe(), ue(), y()
        })
      }), le
    }
  }
}

function re(e) {
  return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>")
}

function De(e, n, s) {
  if (!n) return !1;
  if (_t.has(e)) return Pe(n);
  return pt.has(e) || e === "ANTHROPIC_BASE_URL" && !St(n, s) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !Ue(n)
}

function xe() {
  return Error("tool host helper: this build cannot hold a helper to the stored login")
}

function Me() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere")
}

function Et(e) {
  return e.flatMap((n) => [n, `INPUT_${n}`])
}

function St(e, n) {
  if (Od(e)) return !0;
  return Pe(n.USE_LOCAL_OAUTH) && Ue(e)
}

function Ue(e) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(e).hostname)
  } catch {
    return !1
  }
}

function Tt(e, n) {
  let s = setTimeout(n, e);
  return s.unref(), () => clearTimeout(s)
}

function _e(e, n) {
  try {
    e.kill(n)
  } catch (s) {
    t(`[tool-host] ${n} not delivered: ${re(d(s))}`)
  }
}
var ht = 4,
  Ve = 30000,
  he = 600000,
  We = 3,
  Fe = 10,
  Ht = 3,
  wt = 2500,
  vt = 5000,
  Rt = 30000,
  yt = 64,
  kt = 128;

function Ge(e) {
  let n = e.now ?? Date.now,
    s = new Map,
    S = new Set,
    R = new Map,
    H = 0,
    b = new Set,
    N = new Map,
    D = new Map,
    A = [],
    {
      NEGATIVE_INFINITY: M,
      NEGATIVE_INFINITY: V
    } = Number,
    c = 0,
    P = 0,
    X = new Map,
    Z = 0;
  async function ee(r, l) {
    if (l.signal.aborted) return "unsettled";
    let f = Be(r, l);
    if (f === void 0) return t("[tool-host] item or environment id unusable; item left"), "unsettled";
    if (s.has(f) || [...b].some((te) => te.workId === f)) return O(l, f), "handled";
    if (S.has(f)) return "unsettled";
    let h = typeof r.data === "object" && r.data !== null && "id" in r.data ? r.data.id : void 0,
      z = typeof h === "string" && me.test(h) ? SC(h) : void 0;
    if (typeof h !== "string" || z === void 0 || z === SC(f)) return t("[tool-host] session id unusable; item stopped"), se(s, f, !0), O(l, f), "handled";
    let ce = w(h);
    if (ce !== void 0) return K(l, f, h, ce);
    if (n() < H) return "unsettled";
    S.add(f);
    try {
      await e.api.acknowledgeWork(l.environmentId, f, l.environmentSecret, rRe(f))
    } catch (te) {
      if (Y(te, f) !== "give_up") return "unsettled";
      let Ee = ve(te);
      return K(l, f, h, "start_failed", Ee === 404 || Ee === 409 || Ee === 410)
    } finally {
      S.delete(f)
    }
    R.delete(f);
    let G = l.signal.aborted ? "start_failed" : w(h);
    if (G !== void 0) return K(l, f, h, G);
    se(s, f, !0);
    let ge = n(),
      de;
    try {
      de = e.spawnHelper({
        sessionId: h,
        workId: f,
        environmentId: l.environmentId,
        folder: e.folder
      })
    } catch (te) {
      return t(`[tool-host] helper not started: ${re(d(te))}`, {
        level: "error"
      }), fe(h), K(l, f, h, "start_failed")
    }
    let ae = N.get(h);
    P += 1;
    let pe = X.get(h);
    if (pe === void 0) Z += 1, pe = Z, se(X, h, pe);
    let j = {
      ordinal: P,
      sessionOrdinal: pe,
      sessionId: h,
      workId: f,
      startedAt: ge,
      handle: de,
      stoppedHere: !1,
      startedTimer: void 0
    };
    if (j.startedTimer = setTimeout(q, Ve, j), j.startedTimer.unref?.(), b.add(j), N.set(h, j), ae !== void 0) W(ae), ie("supersede", async () => {
      await ae.handle.stop("superseded"), le(ae)
    });
    if (L(), ie("exit", async () => ne(j, await de.exited)), e.onEvent !== void 0) de.onStatus((te) => {
      if (!j.stoppedHere && b.has(j)) y({
        kind: "status",
        helper: j.ordinal,
        session: j.sessionOrdinal,
        status: te
      })
    });
    return O(l, f), ie("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), y({
      kind: "started",
      helper: j.ordinal,
      session: j.sessionOrdinal
    }), "handled"
  }

  function w(r) {
    if (!He(e.switches.gateOn)) return "gate_off";
    if (!He(e.switches.servingOn) || n() - V < he) return "serving_off";
    if (!He(e.switches.folderServed)) return "not_served";
    let l = n() - he,
      f = D.get(r) ?? [];
    if (U(f, (z) => z > l) >= We || U(A, (z) => z > l) >= Fe) return "at_capacity";
    let h = N.has(r) ? 1 : 0;
    return b.size - h >= ht ? "at_capacity" : void 0
  }

  function O(r, l) {
    ie("stop", () => e.api.stopWork(r.environmentId, l, r.environmentSecret, !0, rRe(l)))
  }

  function K(r, l, f, h, z = !1) {
    if (se(s, l, !0), !z) ue(f, l, h), y({
      kind: "refused",
      code: h
    });
    return O(r, l), m("bridge_tool_host_work", z ? "withdrawn" : h), "handled"
  }

  function Y(r, l) {
    let f = ve(r);
    if (t(`[tool-host] acknowledge failed (${f??"no response"})`), f === 429) H = n() + Math.min(J$o(r) ?? vt, Rt);
    let h = (R.get(l) ?? 0) + 1;
    if (Q$o(r) || h >= Ht) return R.delete(l), "give_up";
    return se(R, l, h), "retry"
  }

  function ne(r, l) {
    let f = n() - r.startedAt,
      h = !r.stoppedHere && l.code !== 0,
      z = h && l.code === HV,
      ce = z && n() - M < he;
    if (z) M = n();
    let G = !h ? void 0 : ce ? "serving_off" : f < Ve ? "start_failed" : "helper_exited";
    if (G === "start_failed") fe(r.sessionId);
    if (G === "serving_off") V = n();
    if (G === "start_failed" || G === "serving_off") q(r, G);
    if (le(r), G !== void 0) ue(r.sessionId, r.workId, G);
    y({
      kind: "ended",
      helper: r.ordinal,
      session: r.sessionOrdinal,
      code: G,
      stoppedHere: r.stoppedHere
    });
    let ge = l.signal ?? `exit code ${l.code??"none"}`,
      de = G === void 0 ? "" : `, reported as ${G}`,
      ae = h && l.stderrFirstLine !== void 0 ? `: ${l.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${r.handle.pid??"none"}, ${ge}, after ${Math.round(f/1000)}s${de}${ae})`)
  }

  function le(r) {
    if (q(r), b.delete(r), N.get(r.sessionId) === r) N.delete(r.sessionId);
    L()
  }

  function W(r) {
    r.stoppedHere = !0, y({
      kind: "stopping",
      helper: r.ordinal,
      session: r.sessionOrdinal
    })
  }

  function y(r) {
    ie("event", () => e.onEvent?.(r))
  }

  function L() {
    let r = 0;
    for (let l of b)
      if (!l.stoppedHere) r += 1;
    if (r === c) return;
    c = r, ie("live count report", () => e.onLiveCountChange(r))
  }

  function q(r, l) {
    if (r.startedTimer === void 0) return;
    if (clearTimeout(r.startedTimer), r.startedTimer = void 0, l === void 0) g("bridge_tool_host_work");
    else m("bridge_tool_host_work", l)
  }

  function fe(r) {
    let l = n();
    A = A.concat(l).slice(-Fe);
    let f = D.get(r) ?? [];
    D.delete(r), se(D, r, f.concat(l).slice(-We))
  }

  function ue(r, l, f) {
    ie("report", () => e.api.refuseToolHost?.(r, l, f, AbortSignal.timeout(wt)))
  }
  return {
    async handle(r, l) {
      try {
        return await ee(r, l)
      } catch (f) {
        m("bridge_tool_host_work", "handler_threw"), t(`[tool-host] handling a request failed unexpectedly (${ze(f)})`, {
          level: "error"
        });
        try {
          let h = Be(r, l);
          if (h !== void 0) return se(s, h, !0), O(l, h), "handled"
        } catch {}
        return "unsettled"
      }
    },
    async sweep(r) {
      let l = r === "gate_off" ? "gate_off" : "helper_exited";
      await Promise.allSettled([...b].map(async (f) => {
        if (!f.stoppedHere) ue(f.sessionId, f.workId, l), W(f), L();
        await f.handle.stop(r), le(f)
      }))
    },
    liveCount: () => b.size
  }
}

function Be(e, n) {
  let s = e.id;
  return typeof s === "string" && s.length <= kt && kN(s) && kN(n.environmentId) ? s : void 0
}

function ie(e, n) {
  (async () => {
    try {
      await n()
    } catch (s) {
      t(`[tool-host] ${e} failed (${ze(s)})`)
    }
  })()
}

function ze(e) {
  let n = ve(e);
  if (n !== void 0) return `status ${n}`;
  return e instanceof Error ? e.name : "unknown"
}

function He(e) {
  try {
    return e()
  } catch (n) {
    return t(`[tool-host] a switch could not be read, taken as off: ${re(d(n))}`, {
      level: "error"
    }), !1
  }
}

function se(e, n, s) {
  e.set(n, s);
  for (let S of e.keys()) {
    if (e.size <= yt) break;
    e.delete(S)
  }
}

function ve(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0
}

function $e() {
  if (ir(), mh().settings.disableRemoteControl === !0 || n0("disableRemoteControl").some((e) => e === !0) || kp().some((e) => e.disableRemoteControl === !0)) return !0;
  return [...Ob(), ...hT("flagSettings"), ...hT("userSettings")].some((e) => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    return e.severity !== "warning" || e.path === "disableRemoteControl"
  })
}
var bt = {
  macos: "darwin",
  linux: "linux",
  windows: "win32"
};
async function Ct(e) {
  let n = e.gate();
  if (n === !1) return {
    kind: "withdraw",
    blocker: "gate_off"
  };
  let s = e.localDeviceFlag();
  if (s === !1) return {
    kind: "withdraw",
    blocker: "flag_off"
  };
  let S = bt[e.platform()];
  if (S === void 0) return {
    kind: "withdraw",
    blocker: "platform"
  };
  let R = await e.offReason();
  if (R !== void 0 && R !== "unknown") return {
    kind: "withdraw",
    blocker: R
  };
  if (!await e.signsInFromStoredLogin()) return {
    kind: "withdraw",
    blocker: "not_stored_login"
  };
  let H = await e.gitEntry();
  if (H === "other") return {
    kind: "withdraw",
    blocker: "not_git_checkout"
  };
  if (await e.inExcludedRepository()) return {
    kind: "withdraw",
    blocker: "excluded_repository"
  };
  if (n === "unknown" || s === "unknown") return {
    kind: "unknown",
    waitingOn: "feature_flags"
  };
  if (R === "unknown") return {
    kind: "unknown",
    waitingOn: "policy"
  };
  return {
    kind: "advertise",
    advert: {
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      platform: S
    },
    ...H === "absent" && {
      withoutGit: !0
    }
  }
}

function j$o(e, n, s = eXs) {
  return {
    gate: s,
    localDeviceFlag: () => xQe() ? !1 : xh() || "unknown",
    platform: x,
    offReason: async () => {
      let S = eX(e);
      if (S === "profile_dirs_unread" || S === "profile_dirs_unreadable") await JTe(), S = eX(e);
      if (S !== void 0) return S;
      let {
        servedToolsUnavailableReason: R
      } = await import("B:/~BUN/root/chunk-gxq403px.js"), H = R();
      return H === "policy_org" && !Use() ? "unknown" : H
    },
    signsInFromStoredLogin: () => Lt(n),
    gitEntry: () => Nt(e),
    inExcludedRepository: () => K$o(e)
  }
}
async function Lt(e) {
  if (bA() !== void 0 || !v$t()) return !1;
  let n = await Kn().readAsync(e);
  return Boolean(n?.claudeAiOauth?.refreshToken)
}
async function Nt(e) {
  try {
    let n = await At(Ot(e, ".git"));
    if (!n.isDirectory() && !n.isFile()) return "other";
    return await q$o(e) ? "other" : "root"
  } catch (n) {
    if (k(n) === "ENOENT") {
      if (!(await It(e).catch((R) => {
          if (!qt(R)) a(F(R));
          return
        }))?.isDirectory()) return "other";
      return await q$o(e) ? "other" : "absent"
    }
    if (!qt(n)) a(F(n));
    return "other"
  }
}
var Dt = 3000,
  Pt = 120000,
  xt = {
    feature_flags: "flags_unloaded",
    policy: "policy_unloaded",
    failed_read: "error"
  },
  je = 1e4,
  Ke = 60000;
async function W$o({
  log: e,
  checks: n,
  signals: s = [tue, IJ, xNe, E0n],
  refuse: S,
  onVerdict: R
}) {
  let H = {
      kind: "unknown",
      waitingOn: "feature_flags"
    },
    b = "gate_off",
    N = !1,
    D, A = Number.NEGATIVE_INFINITY,
    M, V = performance.now(),
    c;

  function P(w) {
    if (w.kind !== "unknown") return V = void 0, clearTimeout(c), c = void 0, w;
    V ??= performance.now();
    let O = Pt - (performance.now() - V);
    if (O <= 0) return {
      kind: "withdraw",
      blocker: xt[w.waitingOn]
    };
    if (c === void 0) c = setTimeout(() => {
      c = void 0, X()
    }, O), c.unref?.();
    return w
  }
  async function X() {
    try {
      let w;
      try {
        w = await Ct(n);
        let Y = w.kind === "advertise" ? S?.() : void 0;
        if (Y !== void 0) w = {
          kind: "withdraw",
          blocker: Y
        }
      } catch (Y) {
        a(F(Y)), w = {
          kind: "unknown",
          waitingOn: "failed_read"
        }
      }
      if (N) return;
      let O = P(w);
      if (H = O, R?.(O), O.kind === "unknown") return;
      let K = O.kind === "advertise" ? O.withoutGit ? "advertised_without_git" : "advertised" : O.blocker;
      if (K !== b) b = K, e(`cloud sessions may use this folder: ${O.kind==="advertise"?O.withoutGit?"yes (not the top folder of a git repository)":"yes":`no (${O.blocker})`}`)
    } catch (w) {
      a(F(w))
    }
  }

  function Z() {
    if (D !== void 0) {
      D();
      return
    }
    if (N || M !== void 0) return;
    if (H.kind === "unknown") {
      X();
      return
    }
    let w = Date.now() - A,
      O = w >= 0 && w < Ke ? Math.max(je, Ke - w) : je;
    M = setTimeout(() => {
      M = void 0, A = Date.now(), X()
    }, O), M.unref?.()
  }
  await X();
  let ee = s.map((w) => w(Z));
  if (H.kind === "unknown" && H.waitingOn === "feature_flags") {
    let w = new AbortController;
    D = () => {
      X().then(() => {
        if (H.kind !== "unknown") w.abort()
      })
    }, await J(Dt, w.signal), D = void 0
  }
  return {
    getToolHostAdvert: () => H.kind === "advertise" ? {
      kind: "advertise",
      advert: H.advert
    } : {
      kind: H.kind
    },
    stop: () => {
      N = !0;
      for (let w of ee) w();
      clearTimeout(M), M = void 0, clearTimeout(c), c = void 0
    }
  }
}

function p8n(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted")
}

function z$o({
  dir: e,
  checks: n,
  isOfferingFolder: s,
  hasAccessToken: S
}) {
  function R() {
    return eX(e, {
      ignoringMute: !0
    })
  }
  return {
    gateOn: () => n.gate() === !0 && n.localDeviceFlag() === !0 && !ZTe(),
    servingOn: () => {
      if (!S() || !s() || rGr() !== void 0) return !1;
      let H = R();
      if (H !== void 0 && H !== "launched_from_home") return !1;
      return !$e()
    },
    folderServed: () => R() !== "launched_from_home"
  }
}

function rGr(e = Je()) {
  let n = Te(e);
  if (n === void 0) return;
  return n.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper"
}

function G$o(e, n) {
  return Ge({
    ...e,
    spawnHelper: (s) => Ne(s, {
      env: Je(),
      ...n
    })
  })
}
async function V$o(e) {
  try {
    await we(e.sweep("shutdown"), Se)
  } catch (n) {
    a(F(n))
  }
}

function Je() {
  return process.env
}
export {
  j$o,
  W$o,
  p8n,
  z$o,
  rGr,
  G$o,
  V$o
};
