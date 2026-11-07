// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { F, d, k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Awe, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Dh } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x as platform_2 } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Zz, zV, FO, wbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { SC } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { kN } from "B:/~BUN/root/chunk-rr294jrm.js";
import { d0 } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ZLs, v7i, RAe, GWn, ype, xAe, hT, kp, mh, Ob, n0 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ab, v$t, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { IJ } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { bA } from "B:/~BUN/root/chunk-q2s07yzr.js";
import { qTr as reason } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Ane, HUe, hle } from "B:/~BUN/root/chunk-sbp8fbqp.js";
import { YPe } from "B:/~BUN/root/chunk-s9kjpyrm.js";
import { Mp } from "B:/~BUN/root/chunk-ht2sp6s6.js";
import { zc } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { rRe } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { xNe, Use } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { xh, xQe } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { JTe, E0n, ZTe, tue, eX } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { K$o } from "B:/~BUN/root/chunk-36ba1zg7.js";
import { q$o } from "B:/~BUN/root/chunk-qf9ct1qb.js";
import { J$o, Q$o } from "B:/~BUN/root/chunk-ksmcy1ph.js";
import { eXs } from "B:/~BUN/root/chunk-5vdgde6t.js";
import { HV } from "B:/~BUN/root/chunk-ts69mavc.js";
import { o, E, I, oe, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { lstat as At, stat as It } from "fs/promises";
import { join as Ot } from "path";
import { randomUUID as Oe } from "crypto";
var Xe = 10080;
function Re(e) {
  let n;
  try {
    n = v("tengu_violin_sordino", e);
  } catch {
    n = e;
  }
  return typeof n === "number" && Number.isInteger(n) && n >= 1 && n <= Xe ? n : void 0;
}
import { StringDecoder as qe } from "string_decoder";
var Ye = 262144,
  Ze = 48,
  Qe = /^[A-Za-z0-9_.:-]+$/,
  et = "a tool",
  tt = 128,
  ke = p(() => o().transform(e => Qe.test(e) ? e.slice(0, Ze) : et)),
  Ae = p(() => o().min(1).max(256)),
  ot = p(() => u({
    call_id: Ae(),
    tool: ke(),
    state: B(["running", "asked"]),
    since: E(),
    classifier_eligible: I().optional().catch(void 0)
  }).transform(e => ({
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
  }).transform(e => ({
    callId: e.call_id,
    tool: e.tool,
    ended: e.ended,
    code: e.code,
    at: e.at
  })));
function ye(e) {
  return C(oe()).transform(n => n.slice(0, tt).flatMap(item => {
    let S = e.safeParse(item);
    return S.success ? [S.data] : [];
  })).catch([]);
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
    n = ds(e);
  } catch {
    return;
  }
  let s = rt().safeParse(n);
  if (!s.success) return;
  let {
    serving: serving,
    calls: calls
  } = s.data.cloud_session;
  return {
    serving: serving?.state,
    live: calls?.live ?? [],
    recent: calls?.recent ?? []
  };
}
function Ie(e) {
  let n = new qe("utf8"),
    s = "",
    S = !1;
  return function (H) {
    let b = typeof H === "string" ? H : n.write(H);
    for (;;) {
      let N = b.indexOf(`
`);
      if (N < 0) break;
      let D = s + b.slice(0, N);
      if (b = b.slice(N + 1), s = "", S) {
        S = !1;
        continue;
      }
      let A = it(D);
      if (A !== void 0) e(A);
    }
    if (S) return;
    if (s += b, s.length > Ye) s = "", S = !0;
  };
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
  ct = new Set([...YPe, ...HUe, ...Et([...GWn, ...FO, "CLAUDE_BRIDGE_OAUTH_TOKEN"]), ...zV.filter(item => item !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR"].map(item => ype(item))),
  Le = new Set([...wbt, "CLAUDE_CODE_HOST_CREDS_FILE"]),
  pt = new Set([...Le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR"]),
  _t = new Set([...Zz.filter(item => item.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"]);
function mt(e, {
  unattendedGrant: unattendedGrant,
  withoutShellSecrets: withoutShellSecrets,
  guest: guest,
  testVm: testVm
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
    if (ct.has(P) || P === b || P === N || P === D || P.endsWith("_FILE_DESCRIPTOR")) delete A[V];
  }
  if (hle(A), Ane(A), A[H] = "1", withoutShellSecrets) {
    let V = new Set(Awe(i));
    for (let c of xAe(A)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(c) && V.has(c))) delete A[c];
    delete A.SSH_AGENT_PID, Object.assign(A, RAe(A).respelled);
  }
  if (unattendedGrant !== void 0) A[be] = unattendedGrant;
  let M = Re(st);
  if (M !== void 0) A[Ce] = String(M);
  return A;
}
function gt({
  workId: workId,
  environmentId: environmentId
}, request_id) {
  let S = me.test(workId) && ft.test(environmentId);
  if (!S) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({
    type: "control_request",
    request_id: request_id,
    request: {
      subtype: "initialize",
      ...(S && {
        attachServeRequest: {
          workId: workId,
          environmentId: environmentId
        }
      })
    }
  }) + `
`;
}
function Te(e) {
  if (!ZLs()) return xe();
  for (let [s, S] of Object.entries(e)) {
    let R = ype(s);
    if (De(R, S, e)) return t(`[tool-host] no helper: ${R} says this process signs in or sends its traffic elsewhere`, {
      level: "error"
    }), Me();
  }
  let n = Mp();
  if (n) return t(`[tool-host] ${n}`, {
    level: "error"
  }), Error("tool host helper: the process wrapper is not usable");
  return;
}
function Ne(e, {
  env: env,
  unattendedGrant: unattendedGrant_2,
  withoutShellSecrets: withoutShellSecrets_2,
  guest: guest_2,
  testVm: testVm_2,
  selfInvocation = () => zc({
    pinToCurrentBinary: !0
  }),
  spawn = d0,
  after = Tt,
  killTree = Ab
}) {
  let M = Te(env);
  if (M !== void 0) throw M;
  if (!me.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let V = selfInvocation(),
    c = spawn(V.cmd, [...V.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json"], {
      cwd: e.folder,
      env: mt(env, {
        unattendedGrant: unattendedGrant_2,
        withoutShellSecrets: withoutShellSecrets_2,
        ...(guest_2 !== void 0 && {
          guest: guest_2
        }),
        ...(testVm_2 !== void 0 && {
          testVm: testVm_2
        })
      }),
      extendEnv: !1,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: !0,
      toolCgroupClass: "agent"
    }),
    {
      promise: P,
      resolve: resolve
    } = Promise.withResolvers(),
    Z = [],
    ee = !1,
    w = Buffer.alloc(0),
    O = 0,
    K,
    Y = () => {};
  function ne(code, signal) {
    if (ee) return;
    ee = !0, Y();
    let L = re(Dh(Wn(w.toString("utf8"))));
    resolve({
      code: code,
      signal: signal,
      stderrFirstLine: L === "" ? void 0 : Q(L, ut)
    });
  }
  try {
    c.on("exit", (y, L) => {
      if (K = [y, L], O <= 0) {
        ne(y, L);
        return;
      }
      Y = after(dt, () => ne(y, L));
    }), c.on("error", y => {
      if (t(`[tool-host] helper process error: ${re(d(y))}`), !ee) ne(null, null), _e(c, "SIGKILL");
    });
    for (let y of [c.stdin, c.stdout, c.stderr]) y?.on("error", () => {});
    for (let y of [c.stdout, c.stderr]) if (y !== null && !y.readableEnded) O += 1, y.once("end", () => {
      if (O -= 1, K !== void 0 && O <= 0) ne(...K);
    });
    let W = Ie(y => {
      for (let L of Z) try {
        L(y);
      } catch (error) {
        t(`[tool-host] status listener failed: ${re(d(error))}`);
      }
    });
    if (c.stdout?.on("data", y => {
      if (Z.length > 0) W(y);
    }), c.stderr?.on("data", y => {
      let L = at - w.length;
      if (L > 0) {
        let q = typeof y === "string" ? Buffer.from(y) : y;
        w = Buffer.concat([w, q.subarray(0, L)]);
      }
    }), c.pid === void 0 || c.stdin === null) ne(null, null);else c.stdin.write(gt(e, Oe()));
  } catch (error) {
    throw _e(c, "SIGKILL"), error;
  }
  let le;
  return {
    pid: c.pid,
    exited: P,
    onStatus(W) {
      Z.push(W);
    },
    stop(W) {
      if (ee) return Promise.resolve();
      return le ??= new Promise(y => {
        t(`[tool-host] stopping helper (${W})`);
        let L = platform_2() === "windows",
          q = W === "released";
        try {
          if (q) c.stdin?.write(_({
            type: "control_request",
            request_id: Oe(),
            request: {
              subtype: "end_session",
              reason: reason
            }
          }) + `
`);
          c.stdin?.end();
        } catch {}
        if (!L && !q) _e(c, "SIGTERM");
        let fe = after(lt, () => {
            if (L && c.pid !== void 0) killTree(c.pid).catch(() => {});else _e(c, "SIGKILL");
          }),
          ue = after(Se, y);
        P.then(() => {
          fe(), ue(), y();
        });
      }), le;
    }
  };
}
function re(e) {
  return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>");
}
function De(e, n, s) {
  if (!n) return !1;
  if (_t.has(e)) return Pe(n);
  return pt.has(e) || e === "ANTHROPIC_BASE_URL" && !St(n, s) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !Ue(n);
}
function xe() {
  return Error("tool host helper: this build cannot hold a helper to the stored login");
}
function Me() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}
function Et(e) {
  return e.flatMap(item => [item, `INPUT_${item}`]);
}
function St(e, n) {
  if (Od(e)) return !0;
  return Pe(n.USE_LOCAL_OAUTH) && Ue(e);
}
function Ue(e) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(e).hostname);
  } catch {
    return !1;
  }
}
function Tt(e, n) {
  let s = setTimeout(n, e);
  return s.unref(), () => clearTimeout(s);
}
function _e(e, n) {
  try {
    e.kill(n);
  } catch (error) {
    t(`[tool-host] ${n} not delivered: ${re(d(error))}`);
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
    s = new Map(),
    S = new Set(),
    R = new Map(),
    H = 0,
    b = new Set(),
    N = new Map(),
    D = new Map(),
    A = [],
    {
      NEGATIVE_INFINITY: NEGATIVE_INFINITY,
      NEGATIVE_INFINITY: NEGATIVE_INFINITY_2
    } = Number,
    c = 0,
    ordinal = 0,
    X = new Map(),
    Z = 0;
  async function ee(r, l) {
    if (l.signal.aborted) return "unsettled";
    let workId_2 = Be(r, l);
    if (workId_2 === void 0) return t("[tool-host] item or environment id unusable; item left"), "unsettled";
    if (s.has(workId_2) || [...b].some(item => item.workId === workId_2)) return O(l, workId_2), "handled";
    if (S.has(workId_2)) return "unsettled";
    let sessionId = typeof r.data === "object" && r.data !== null && "id" in r.data ? r.data.id : void 0,
      z = typeof sessionId === "string" && me.test(sessionId) ? SC(sessionId) : void 0;
    if (typeof sessionId !== "string" || z === void 0 || z === SC(workId_2)) return t("[tool-host] session id unusable; item stopped"), se(s, workId_2, !0), O(l, workId_2), "handled";
    let ce = w(sessionId);
    if (ce !== void 0) return K(l, workId_2, sessionId, ce);
    if (n() < H) return "unsettled";
    S.add(workId_2);
    try {
      await e.api.acknowledgeWork(l.environmentId, workId_2, l.environmentSecret, rRe(workId_2));
    } catch (error) {
      if (Y(error, workId_2) !== "give_up") return "unsettled";
      let Ee = ve(error);
      return K(l, workId_2, sessionId, "start_failed", Ee === 404 || Ee === 409 || Ee === 410);
    } finally {
      S.delete(workId_2);
    }
    R.delete(workId_2);
    let G = l.signal.aborted ? "start_failed" : w(sessionId);
    if (G !== void 0) return K(l, workId_2, sessionId, G);
    se(s, workId_2, !0);
    let startedAt = n(),
      handle;
    try {
      handle = e.spawnHelper({
        sessionId: sessionId,
        workId: workId_2,
        environmentId: l.environmentId,
        folder: e.folder
      });
    } catch (error) {
      return t(`[tool-host] helper not started: ${re(d(error))}`, {
        level: "error"
      }), fe(sessionId), K(l, workId_2, sessionId, "start_failed");
    }
    let ae = N.get(sessionId);
    ordinal += 1;
    let sessionOrdinal = X.get(sessionId);
    if (sessionOrdinal === void 0) Z += 1, sessionOrdinal = Z, se(X, sessionId, sessionOrdinal);
    let j = {
      ordinal: ordinal,
      sessionOrdinal: sessionOrdinal,
      sessionId: sessionId,
      workId: workId_2,
      startedAt: startedAt,
      handle: handle,
      stoppedHere: !1,
      startedTimer: void 0
    };
    if (j.startedTimer = setTimeout(q, Ve, j), j.startedTimer.unref?.(), b.add(j), N.set(sessionId, j), ae !== void 0) W(ae), ie("supersede", async () => {
      await ae.handle.stop("superseded"), le(ae);
    });
    if (L(), ie("exit", async () => ne(j, await handle.exited)), e.onEvent !== void 0) handle.onStatus(status => {
      if (!j.stoppedHere && b.has(j)) y({
        kind: "status",
        helper: j.ordinal,
        session: j.sessionOrdinal,
        status: status
      });
    });
    return O(l, workId_2), ie("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), y({
      kind: "started",
      helper: j.ordinal,
      session: j.sessionOrdinal
    }), "handled";
  }
  function w(r) {
    if (!He(e.switches.gateOn)) return "gate_off";
    if (!He(e.switches.servingOn) || n() - NEGATIVE_INFINITY_2 < he) return "serving_off";
    if (!He(e.switches.folderServed)) return "not_served";
    let l = n() - he,
      f = D.get(r) ?? [];
    if (U(f, z => z > l) >= We || U(A, z => z > l) >= Fe) return "at_capacity";
    let h = N.has(r) ? 1 : 0;
    return b.size - h >= ht ? "at_capacity" : void 0;
  }
  function O(r, l) {
    ie("stop", () => e.api.stopWork(r.environmentId, l, r.environmentSecret, !0, rRe(l)));
  }
  function K(r, l, f, code_2, z = !1) {
    if (se(s, l, !0), !z) ue(f, l, code_2), y({
      kind: "refused",
      code: code_2
    });
    return O(r, l), m("bridge_tool_host_work", z ? "withdrawn" : code_2), "handled";
  }
  function Y(r, l) {
    let f = ve(r);
    if (t(`[tool-host] acknowledge failed (${f ?? "no response"})`), f === 429) H = n() + Math.min(J$o(r) ?? vt, Rt);
    let h = (R.get(l) ?? 0) + 1;
    if (Q$o(r) || h >= Ht) return R.delete(l), "give_up";
    return se(R, l, h), "retry";
  }
  function ne(r, l) {
    let f = n() - r.startedAt,
      h = !r.stoppedHere && l.code !== 0,
      z = h && l.code === HV,
      ce = z && n() - NEGATIVE_INFINITY < he;
    if (z) NEGATIVE_INFINITY = n();
    let code_3 = !h ? void 0 : ce ? "serving_off" : f < Ve ? "start_failed" : "helper_exited";
    if (code_3 === "start_failed") fe(r.sessionId);
    if (code_3 === "serving_off") NEGATIVE_INFINITY_2 = n();
    if (code_3 === "start_failed" || code_3 === "serving_off") q(r, code_3);
    if (le(r), code_3 !== void 0) ue(r.sessionId, r.workId, code_3);
    y({
      kind: "ended",
      helper: r.ordinal,
      session: r.sessionOrdinal,
      code: code_3,
      stoppedHere: r.stoppedHere
    });
    let ge = l.signal ?? `exit code ${l.code ?? "none"}`,
      de = code_3 === void 0 ? "" : `, reported as ${code_3}`,
      ae = h && l.stderrFirstLine !== void 0 ? `: ${l.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${r.handle.pid ?? "none"}, ${ge}, after ${Math.round(f / 1000)}s${de}${ae})`);
  }
  function le(r) {
    if (q(r), b.delete(r), N.get(r.sessionId) === r) N.delete(r.sessionId);
    L();
  }
  function W(r) {
    r.stoppedHere = !0, y({
      kind: "stopping",
      helper: r.ordinal,
      session: r.sessionOrdinal
    });
  }
  function y(r) {
    ie("event", () => e.onEvent?.(r));
  }
  function L() {
    let r = 0;
    for (let l of b) if (!l.stoppedHere) r += 1;
    if (r === c) return;
    c = r, ie("live count report", () => e.onLiveCountChange(r));
  }
  function q(r, l) {
    if (r.startedTimer === void 0) return;
    if (clearTimeout(r.startedTimer), r.startedTimer = void 0, l === void 0) g("bridge_tool_host_work");else m("bridge_tool_host_work", l);
  }
  function fe(r) {
    let l = n();
    A = A.concat(l).slice(-Fe);
    let f = D.get(r) ?? [];
    D.delete(r), se(D, r, f.concat(l).slice(-We));
  }
  function ue(r, l, f) {
    ie("report", () => e.api.refuseToolHost?.(r, l, f, AbortSignal.timeout(wt)));
  }
  return {
    async handle(r, l) {
      try {
        return await ee(r, l);
      } catch (error) {
        m("bridge_tool_host_work", "handler_threw"), t(`[tool-host] handling a request failed unexpectedly (${ze(error)})`, {
          level: "error"
        });
        try {
          let h = Be(r, l);
          if (h !== void 0) return se(s, h, !0), O(l, h), "handled";
        } catch {}
        return "unsettled";
      }
    },
    async sweep(r) {
      let l = r === "gate_off" ? "gate_off" : "helper_exited";
      await Promise.allSettled([...b].map(async item => {
        if (!item.stoppedHere) ue(item.sessionId, item.workId, l), W(item), L();
        await item.handle.stop(r), le(item);
      }));
    },
    liveCount: () => b.size
  };
}
function Be(e, n) {
  let s = e.id;
  return typeof s === "string" && s.length <= kt && kN(s) && kN(n.environmentId) ? s : void 0;
}
function ie(e, n) {
  (async () => {
    try {
      await n();
    } catch (error) {
      t(`[tool-host] ${e} failed (${ze(error)})`);
    }
  })();
}
function ze(e) {
  let n = ve(e);
  if (n !== void 0) return `status ${n}`;
  return e instanceof Error ? e.name : "unknown";
}
function He(e) {
  try {
    return e();
  } catch (error) {
    return t(`[tool-host] a switch could not be read, taken as off: ${re(d(error))}`, {
      level: "error"
    }), !1;
  }
}
function se(e, n, s) {
  e.set(n, s);
  for (let S of e.keys()) {
    if (e.size <= yt) break;
    e.delete(S);
  }
}
function ve(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function $e() {
  if (ir(), mh().settings.disableRemoteControl === !0 || n0("disableRemoteControl").some(item => item === !0) || kp().some(item => item.disableRemoteControl === !0)) return !0;
  return [...Ob(), ...hT("flagSettings"), ...hT("userSettings")].some(item => {
    if (item.path === "") return !0;
    if (item.statusOnly) return !1;
    return item.severity !== "warning" || item.path === "disableRemoteControl";
  });
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
  let platform = bt[e.platform()];
  if (platform === void 0) return {
    kind: "withdraw",
    blocker: "platform"
  };
  let blocker = await e.offReason();
  if (blocker !== void 0 && blocker !== "unknown") return {
    kind: "withdraw",
    blocker: blocker
  };
  if (!(await e.signsInFromStoredLogin())) return {
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
  if (blocker === "unknown") return {
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
      platform: platform
    },
    ...(H === "absent" && {
      withoutGit: !0
    })
  };
}
function j$o(e, n, gate = eXs) {
  return {
    gate: gate,
    localDeviceFlag: () => xQe() ? !1 : xh() || "unknown",
    platform: platform_2,
    offReason: async () => {
      let S = eX(e);
      if (S === "profile_dirs_unread" || S === "profile_dirs_unreadable") await JTe(), S = eX(e);
      if (S !== void 0) return S;
      let {
          servedToolsUnavailableReason: servedToolsUnavailableReason
        } = await import("B:/~BUN/root/chunk-gxq403px.js"),
        H = servedToolsUnavailableReason();
      return H === "policy_org" && !Use() ? "unknown" : H;
    },
    signsInFromStoredLogin: () => Lt(n),
    gitEntry: () => Nt(e),
    inExcludedRepository: () => K$o(e)
  };
}
async function Lt(e) {
  if (bA() !== void 0 || !v$t()) return !1;
  let n = await Kn().readAsync(e);
  return Boolean(n?.claudeAiOauth?.refreshToken);
}
async function Nt(e) {
  try {
    let n = await At(Ot(e, ".git"));
    if (!n.isDirectory() && !n.isFile()) return "other";
    return (await q$o(e)) ? "other" : "root";
  } catch (error) {
    if (k(error) === "ENOENT") {
      if (!(await It(e).catch(R => {
        if (!qt(R)) a(F(R));
        return;
      }))?.isDirectory()) return "other";
      return (await q$o(e)) ? "other" : "absent";
    }
    if (!qt(error)) a(F(error));
    return "other";
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
  log: log,
  checks: checks,
  signals = [tue, IJ, xNe, E0n],
  refuse: refuse,
  onVerdict: onVerdict
}) {
  let H = {
      kind: "unknown",
      waitingOn: "feature_flags"
    },
    b = "gate_off",
    N = !1,
    D,
    NEGATIVE_INFINITY_3 = Number.NEGATIVE_INFINITY,
    M,
    V = performance.now(),
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
      c = void 0, X();
    }, O), c.unref?.();
    return w;
  }
  async function X() {
    try {
      let w;
      try {
        w = await Ct(checks);
        let blocker_2 = w.kind === "advertise" ? refuse?.() : void 0;
        if (blocker_2 !== void 0) w = {
          kind: "withdraw",
          blocker: blocker_2
        };
      } catch (error) {
        a(F(error)), w = {
          kind: "unknown",
          waitingOn: "failed_read"
        };
      }
      if (N) return;
      let O = P(w);
      if (H = O, onVerdict?.(O), O.kind === "unknown") return;
      let K = O.kind === "advertise" ? O.withoutGit ? "advertised_without_git" : "advertised" : O.blocker;
      if (K !== b) b = K, log(`cloud sessions may use this folder: ${O.kind === "advertise" ? O.withoutGit ? "yes (not the top folder of a git repository)" : "yes" : `no (${O.blocker})`}`);
    } catch (error) {
      a(F(error));
    }
  }
  function Z() {
    if (D !== void 0) {
      D();
      return;
    }
    if (N || M !== void 0) return;
    if (H.kind === "unknown") {
      X();
      return;
    }
    let w = Date.now() - NEGATIVE_INFINITY_3,
      O = w >= 0 && w < Ke ? Math.max(je, Ke - w) : je;
    M = setTimeout(() => {
      M = void 0, NEGATIVE_INFINITY_3 = Date.now(), X();
    }, O), M.unref?.();
  }
  await X();
  let ee = signals.map(item => item(Z));
  if (H.kind === "unknown" && H.waitingOn === "feature_flags") {
    let abortController = new AbortController();
    D = () => {
      X().then(() => {
        if (H.kind !== "unknown") abortController.abort();
      });
    }, await J(Dt, abortController.signal), D = void 0;
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
      clearTimeout(M), M = void 0, clearTimeout(c), c = void 0;
    }
  };
}
function p8n(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}
function z$o({
  dir: dir,
  checks: checks_2,
  isOfferingFolder: isOfferingFolder,
  hasAccessToken: hasAccessToken
}) {
  function R() {
    return eX(dir, {
      ignoringMute: !0
    });
  }
  return {
    gateOn: () => checks_2.gate() === !0 && checks_2.localDeviceFlag() === !0 && !ZTe(),
    servingOn: () => {
      if (!hasAccessToken() || !isOfferingFolder() || rGr() !== void 0) return !1;
      let H = R();
      if (H !== void 0 && H !== "launched_from_home") return !1;
      return !$e();
    },
    folderServed: () => R() !== "launched_from_home"
  };
}
function rGr(e = Je()) {
  let n = Te(e);
  if (n === void 0) return;
  return n.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper";
}
function G$o(e, n) {
  return Ge({
    ...e,
    spawnHelper: s => Ne(s, {
      env: Je(),
      ...n
    })
  });
}
async function V$o(e) {
  try {
    await we(e.sweep("shutdown"), Se);
  } catch (error) {
    a(F(error));
  }
}
function Je() {
  return process.env;
}
export { j$o, W$o, p8n, z$o, rGr, G$o, V$o };