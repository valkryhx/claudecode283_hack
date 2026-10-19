// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { H, d, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { kde, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, Fc, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I as platform } from "B:/~BUN/root/chunk-je1b1drr.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _f } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { v4, NB, FB, KQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { uF } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { cL } from "B:/~BUN/root/chunk-j8w5f307.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { qFo, AVs, Vge, ZFo, zle, ZEe, rk, Zp, Bm, M_, JO } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { hht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { f4 } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { pO } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { p8, DCe, JQ } from "B:/~BUN/root/chunk-qz3jjjax.js";
import { Qye } from "B:/~BUN/root/chunk-z4tj2tcd.js";
import { Of } from "B:/~BUN/root/chunk-7qeqkjr8.js";
import { Bc } from "B:/~BUN/root/chunk-c0j3f8cc.js";
import { Lme } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { yXe, zX } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { lfe, oee, Y6 } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { nm, han } from "B:/~BUN/root/chunk-r4y1700s.js";
import { Zqr, eKr } from "B:/~BUN/root/chunk-rdpgfzmw.js";
import { B5o } from "B:/~BUN/root/chunk-mnxqm3v0.js";
import { jM } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { MB } from "B:/~BUN/root/chunk-cr3jjat9.js";
import { lstat as $e } from "fs/promises";
import { join as Ke } from "path";
import { randomUUID as ve } from "crypto";
var se = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
  ke = 2500,
  ee = 3000,
  Re = 1024,
  Ie = 200,
  q = /^cse_[A-Za-z0-9_]{1,124}$/,
  Ae = /^env_[A-Za-z0-9_-]{1,124}$/,
  ye = new Set([...Qye, ...DCe, ...De([...ZFo, ...FB, "CLAUDE_BRIDGE_OAUTH_TOKEN"]), ...NB.filter(item => item !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR"].map(item => zle(item))),
  le = new Set([...KQe, "CLAUDE_CODE_HOST_CREDS_FILE"]),
  Ce = new Set([...le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR"]),
  Oe = new Set([...v4.filter(item => item.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"]);
function be(e, {
  unattendedGrant: unattendedGrant,
  withoutShellSecrets: withoutShellSecrets
}) {
  let p = qFo() ? AVs() : void 0;
  if (p === void 0) throw fe();
  let T = zle(p),
    R = zle(se),
    S = {
      ...e
    };
  for (let [E, v] of Object.entries(S)) {
    let f = zle(E);
    if (le.has(f) && ae(f, v, e)) throw ue();
    if (ye.has(f) || f === T || f === R || f.endsWith("_FILE_DESCRIPTOR")) delete S[E];
  }
  if (JQ(S), p8(S), S[p] = "1", withoutShellSecrets) {
    let E = new Set(kde(a));
    for (let v of ZEe(S)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(v) && E.has(v))) delete S[v];
    delete S.SSH_AGENT_PID, Object.assign(S, Vge(S).respelled);
  }
  if (unattendedGrant !== void 0) S[se] = unattendedGrant;
  return S;
}
function Ne({
  workId: workId,
  environmentId: environmentId
}, request_id) {
  let p = q.test(workId) && Ae.test(environmentId);
  if (!p) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({
    type: "control_request",
    request_id: request_id,
    request: {
      subtype: "initialize",
      ...(p && {
        attachServeRequest: {
          workId: workId,
          environmentId: environmentId
        }
      })
    }
  }) + `
`;
}
function oe(e) {
  if (!qFo()) return fe();
  if (platform() === "windows") return Error("tool host helper: not available on Windows");
  for (let [s, p] of Object.entries(e)) {
    let T = zle(s);
    if (ae(T, p, e)) return t(`[tool-host] no helper: ${T} says this process signs in or sends its traffic elsewhere`, {
      level: "error"
    }), ue();
  }
  let o = Of();
  if (o) return t(`[tool-host] ${o}`, {
    level: "error"
  }), Error("tool host helper: the process wrapper is not usable");
  return;
}
function de(e, {
  env: env,
  unattendedGrant: unattendedGrant_2,
  withoutShellSecrets: withoutShellSecrets_2,
  selfInvocation = () => Bc({
    pinToCurrentBinary: !0
  }),
  spawn = cL,
  after = Pe
}) {
  let E = oe(env);
  if (E !== void 0) throw E;
  if (!q.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let v = selfInvocation(),
    f = spawn(v.cmd, [...v.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json"], {
      cwd: e.folder,
      env: be(env, {
        unattendedGrant: unattendedGrant_2,
        withoutShellSecrets: withoutShellSecrets_2
      }),
      extendEnv: !1,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: !0,
      toolCgroupClass: "agent"
    }),
    {
      promise: D,
      resolve: resolve
    } = Promise.withResolvers(),
    A = !1,
    b = Buffer.alloc(0);
  function w(code, signal) {
    if (A) return;
    A = !0;
    let C = G(Fc(Sr(b.toString("utf8"))));
    resolve({
      code: code,
      signal: signal,
      stderrFirstLine: C === "" ? void 0 : ne(C, Ie)
    });
  }
  try {
    f.on("exit", w), f.on("error", h => {
      if (t(`[tool-host] helper process error: ${G(d(h))}`), !A) w(null, null), z(f, "SIGKILL");
    });
    for (let h of [f.stdin, f.stdout, f.stderr]) h?.on("error", () => {});
    if (f.stdout?.on("data", () => {}), f.stderr?.on("data", h => {
      let N = Re - b.length;
      if (N > 0) {
        let C = typeof h === "string" ? Buffer.from(h) : h;
        b = Buffer.concat([b, C.subarray(0, N)]);
      }
    }), f.pid === void 0 || f.stdin === null) w(null, null);else f.stdin.write(Ne(e, ve()));
  } catch (error) {
    throw z(f, "SIGKILL"), error;
  }
  let L;
  return {
    pid: f.pid,
    exited: D,
    stop(h) {
      if (A) return Promise.resolve();
      return L ??= new Promise(N => {
        t(`[tool-host] stopping helper (${h})`);
        try {
          f.stdin?.end();
        } catch {}
        z(f, "SIGTERM");
        let C = after(ke, () => z(f, "SIGKILL")),
          c = after(ee, N);
        D.then(() => {
          C(), c(), N();
        });
      }), L;
    }
  };
}
function G(e) {
  return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>");
}
function ae(e, o, s) {
  if (!o) return !1;
  if (Oe.has(e)) return Fe(o);
  return Ce.has(e) || e === "ANTHROPIC_BASE_URL" && !Le(o, s) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !ce(o);
}
function fe() {
  return Error("tool host helper: this build cannot hold a helper to the stored login");
}
function ue() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}
function De(e) {
  return e.flatMap(item => [item, `INPUT_${item}`]);
}
function Le(e, o) {
  if (_f(e)) return !0;
  return Fe(o.USE_LOCAL_OAUTH) && ce(e);
}
function ce(e) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(e).hostname);
  } catch {
    return !1;
  }
}
function Pe(e, o) {
  let s = setTimeout(o, e);
  return s.unref(), () => clearTimeout(s);
}
function z(e, o) {
  try {
    e.kill(o);
  } catch (error) {
    t(`[tool-host] ${o} not delivered: ${G(d(error))}`);
  }
}
var Ue = 4,
  pe = 30000,
  te = 600000,
  _e = 3,
  ge = 10,
  Ve = 3,
  Me = 2500,
  We = 5000,
  xe = 30000,
  Be = 64,
  Ge = 128;
function Se(e) {
  let o = e.now ?? Date.now,
    s = new Map(),
    p = new Set(),
    T = new Map(),
    R = 0,
    S = new Set(),
    E = new Map(),
    v = new Map(),
    f = [],
    {
      NEGATIVE_INFINITY: NEGATIVE_INFINITY,
      NEGATIVE_INFINITY: NEGATIVE_INFINITY_2
    } = Number;
  async function A(n, r) {
    if (r.signal.aborted) return "unsettled";
    let workId_2 = me(n, r);
    if (workId_2 === void 0) return t("[tool-host] item or environment id unusable; item left"), "unsettled";
    if (s.has(workId_2) || [...S].some(item => item.workId === workId_2)) return w(r, workId_2), "handled";
    if (p.has(workId_2)) return "unsettled";
    let sessionId = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : void 0,
      O = typeof sessionId === "string" && q.test(sessionId) ? jM(sessionId) : void 0;
    if (typeof sessionId !== "string" || O === void 0 || O === jM(workId_2)) return t("[tool-host] session id unusable; item stopped"), K(s, workId_2, !0), w(r, workId_2), "handled";
    let j = b(sessionId);
    if (j !== void 0) return L(r, workId_2, sessionId, j);
    if (o() < R) return "unsettled";
    p.add(workId_2);
    try {
      await e.api.acknowledgeWork(r.environmentId, workId_2, r.environmentSecret, Lme(workId_2));
    } catch (error) {
      if (h(error, workId_2) !== "give_up") return "unsettled";
      let Q = ie(error);
      return L(r, workId_2, sessionId, "start_failed", Q === 404 || Q === 409 || Q === 410);
    } finally {
      p.delete(workId_2);
    }
    T.delete(workId_2);
    let y = r.signal.aborted ? "start_failed" : b(sessionId);
    if (y !== void 0) return L(r, workId_2, sessionId, y);
    K(s, workId_2, !0);
    let startedAt = o(),
      handle;
    try {
      handle = e.spawnHelper({
        sessionId: sessionId,
        workId: workId_2,
        environmentId: r.environmentId,
        folder: e.folder
      });
    } catch (error) {
      return t(`[tool-host] helper not started: ${G(d(error))}`, {
        level: "error"
      }), U(sessionId), L(r, workId_2, sessionId, "start_failed");
    }
    let W = E.get(sessionId);
    if (W !== void 0) W.stoppedHere = !0, V("supersede", async () => {
      await W.handle.stop("superseded"), C(W);
    });
    let x = {
      sessionId: sessionId,
      workId: workId_2,
      startedAt: startedAt,
      handle: handle,
      stoppedHere: !1,
      startedTimer: void 0
    };
    return x.startedTimer = setTimeout(M, pe, x), x.startedTimer.unref?.(), S.add(x), E.set(sessionId, x), k(), V("exit", async () => N(x, await handle.exited)), w(r, workId_2), V("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), c({
      kind: "started"
    }), "handled";
  }
  function b(n) {
    if (!re(e.switches.gateOn)) return "gate_off";
    if (!re(e.switches.servingOn) || o() - NEGATIVE_INFINITY_2 < te) return "serving_off";
    if (!re(e.switches.folderServed)) return "not_served";
    let r = o() - te,
      i = v.get(n) ?? [];
    if (F(i, O => O > r) >= _e || F(f, O => O > r) >= ge) return "at_capacity";
    let u = E.has(n) ? 1 : 0;
    return S.size - u >= Ue ? "at_capacity" : void 0;
  }
  function w(n, r) {
    V("stop", () => e.api.stopWork(n.environmentId, r, n.environmentSecret, !0, Lme(r)));
  }
  function L(n, r, i, code_2, O = !1) {
    if (K(s, r, !0), !O) X(i, r, code_2), c({
      kind: "refused",
      code: code_2
    });
    return w(n, r), m("bridge_tool_host_work", O ? "withdrawn" : code_2), "handled";
  }
  function h(n, r) {
    let i = ie(n);
    if (t(`[tool-host] acknowledge failed (${i ?? "no response"})`), i === 429) R = o() + Math.min(Zqr(n) ?? We, xe);
    let u = (T.get(r) ?? 0) + 1;
    if (eKr(n) || u >= Ve) return T.delete(r), "give_up";
    return K(T, r, u), "retry";
  }
  function N(n, r) {
    let i = o() - n.startedAt,
      u = !n.stoppedHere && r.code !== 0,
      O = u && r.code === MB,
      j = O && o() - NEGATIVE_INFINITY < te;
    if (O) NEGATIVE_INFINITY = o();
    let code_3 = !u ? void 0 : j ? "serving_off" : i < pe ? "start_failed" : "helper_exited";
    if (code_3 === "start_failed") U(n.sessionId);
    if (code_3 === "serving_off") NEGATIVE_INFINITY_2 = o();
    if (code_3 === "start_failed" || code_3 === "serving_off") M(n, code_3);
    if (C(n), code_3 !== void 0) X(n.sessionId, n.workId, code_3);
    c({
      kind: "ended",
      code: code_3,
      stoppedHere: n.stoppedHere
    });
    let Z = r.signal ?? `exit code ${r.code ?? "none"}`,
      J = code_3 === void 0 ? "" : `, reported as ${code_3}`,
      W = u && r.stderrFirstLine !== void 0 ? `: ${r.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Z}, after ${Math.round(i / 1000)}s${J}${W})`);
  }
  function C(n) {
    M(n);
    let r = S.delete(n);
    if (E.get(n.sessionId) === n) E.delete(n.sessionId);
    if (r) k();
  }
  function c(n) {
    V("event", () => e.onEvent?.(n));
  }
  function k() {
    V("live count report", () => e.onLiveCountChange(S.size));
  }
  function M(n, r) {
    if (n.startedTimer === void 0) return;
    if (clearTimeout(n.startedTimer), n.startedTimer = void 0, r === void 0) g("bridge_tool_host_work");else m("bridge_tool_host_work", r);
  }
  function U(n) {
    let r = o();
    f = f.concat(r).slice(-ge);
    let i = v.get(n) ?? [];
    v.delete(n), K(v, n, i.concat(r).slice(-_e));
  }
  function X(n, r, i) {
    V("report", () => e.api.refuseToolHost?.(n, r, i, AbortSignal.timeout(Me)));
  }
  return {
    async handle(n, r) {
      try {
        return await A(n, r);
      } catch (error) {
        m("bridge_tool_host_work", "handler_threw"), t(`[tool-host] handling a request failed unexpectedly (${Te(error)})`, {
          level: "error"
        });
        try {
          let u = me(n, r);
          if (u !== void 0) return K(s, u, !0), w(r, u), "handled";
        } catch {}
        return "unsettled";
      }
    },
    async sweep(n) {
      let r = n === "shutdown" ? "helper_exited" : "gate_off";
      await Promise.allSettled([...S].map(async item => {
        if (!item.stoppedHere) X(item.sessionId, item.workId, r);
        item.stoppedHere = !0, await item.handle.stop(n), C(item);
      }));
    },
    liveCount: () => S.size
  };
}
function me(e, o) {
  let s = e.id;
  return typeof s === "string" && s.length <= Ge && uF(s) && uF(o.environmentId) ? s : void 0;
}
function V(e, o) {
  (async () => {
    try {
      await o();
    } catch (error) {
      t(`[tool-host] ${e} failed (${Te(error)})`);
    }
  })();
}
function Te(e) {
  let o = ie(e);
  if (o !== void 0) return `status ${o}`;
  return e instanceof Error ? e.name : "unknown";
}
function re(e) {
  try {
    return e();
  } catch (error) {
    return t(`[tool-host] a switch could not be read, taken as off: ${G(d(error))}`, {
      level: "error"
    }), !1;
  }
}
function K(e, o, s) {
  e.set(o, s);
  for (let p of e.keys()) {
    if (e.size <= Be) break;
    e.delete(p);
  }
}
function ie(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}
function Ee() {
  if (dr(), Bm().settings.disableRemoteControl === !0 || JO("disableRemoteControl").some(item => item === !0) || Zp().some(item => item.disableRemoteControl === !0)) return !0;
  return [...M_(), ...rk("flagSettings"), ...rk("userSettings")].some(item => {
    if (item.path === "") return !0;
    if (item.statusOnly) return !1;
    return item.severity !== "warning" || item.path === "disableRemoteControl";
  });
}
async function Otr(e) {
  let o = e.gate();
  if (o === !1) return {
    kind: "withdraw",
    blocker: "gate_off"
  };
  let s = e.localDeviceFlag();
  if (s === !1) return {
    kind: "withdraw",
    blocker: "flag_off"
  };
  let p = e.platform();
  if (p !== "macos" && p !== "linux") return {
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
  if (!(await e.isGitCheckoutRoot())) return {
    kind: "withdraw",
    blocker: "not_git_checkout"
  };
  if (o === "unknown" || s === "unknown") return {
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
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      platform: p === "macos" ? "darwin" : "linux"
    }
  };
}
function BSn(e, o, gate = B5o) {
  return {
    gate: gate,
    localDeviceFlag: () => han() ? !1 : nm() || "unknown",
    platform: platform,
    offReason: async () => {
      let p = Y6(e);
      if (p !== void 0) return p;
      let {
          servedToolsUnavailableReason: servedToolsUnavailableReason
        } = await import("B:/~BUN/root/chunk-8c7kzgxs.js"),
        R = servedToolsUnavailableReason();
      return R === "policy_org" && !zX() ? "unknown" : R;
    },
    signsInFromStoredLogin: () => Je(o),
    isGitCheckoutRoot: () => ze(e)
  };
}
async function Je(e) {
  if (pO() !== void 0 || !hht()) return !1;
  let o = await qn().readAsync(e);
  return Boolean(o?.claudeAiOauth?.refreshToken);
}
async function ze(e) {
  try {
    let o = await $e(Ke(e, ".git"));
    return o.isDirectory() || o.isFile();
  } catch (error) {
    if (!Wt(error)) l(H(error));
    return !1;
  }
}
var qe = 3000,
  Xe = 120000,
  Ye = {
    feature_flags: "flags_unloaded",
    policy: "policy_unloaded",
    failed_read: "error"
  },
  he = 1e4,
  He = 60000;
async function qqr({
  dir: dir,
  credentials: credentials,
  log: log,
  checks = BSn(dir, credentials),
  signals = [oee, f4, yXe],
  refuse: refuse,
  onVerdict: onVerdict
}) {
  let E = {
      kind: "unknown",
      waitingOn: "feature_flags"
    },
    v = "gate_off",
    f = !1,
    D,
    NEGATIVE_INFINITY_3 = Number.NEGATIVE_INFINITY,
    A,
    b = performance.now(),
    w;
  function L(c) {
    if (c.kind !== "unknown") return b = void 0, clearTimeout(w), w = void 0, c;
    b ??= performance.now();
    let k = Xe - (performance.now() - b);
    if (k <= 0) return {
      kind: "withdraw",
      blocker: Ye[c.waitingOn]
    };
    if (w === void 0) w = setTimeout(() => {
      w = void 0, h();
    }, k), w.unref?.();
    return c;
  }
  async function h() {
    try {
      let c;
      try {
        c = await Otr(checks);
        let blocker_2 = c.kind === "advertise" ? refuse?.() : void 0;
        if (blocker_2 !== void 0) c = {
          kind: "withdraw",
          blocker: blocker_2
        };
      } catch (error) {
        l(H(error)), c = {
          kind: "unknown",
          waitingOn: "failed_read"
        };
      }
      if (f) return;
      let k = L(c);
      if (E = k, onVerdict?.(k), k.kind === "unknown") return;
      let M = k.kind === "advertise" ? "advertised" : k.blocker;
      if (M !== v) v = M, log(`cloud sessions may use this folder: ${k.kind === "advertise" ? "yes" : `no (${k.blocker})`}`);
    } catch (error) {
      l(H(error));
    }
  }
  function N() {
    if (D !== void 0) {
      D();
      return;
    }
    if (f || A !== void 0) return;
    if (E.kind === "unknown") {
      h();
      return;
    }
    let c = Date.now() - NEGATIVE_INFINITY_3,
      k = c >= 0 && c < He ? Math.max(he, He - c) : he;
    A = setTimeout(() => {
      A = void 0, NEGATIVE_INFINITY_3 = Date.now(), h();
    }, k), A.unref?.();
  }
  await h();
  let C = signals.map(item => item(N));
  if (E.kind === "unknown" && E.waitingOn === "feature_flags") {
    let abortController = new AbortController();
    D = () => {
      h().then(() => {
        if (E.kind !== "unknown") abortController.abort();
      });
    }, await Y(qe, abortController.signal), D = void 0;
  }
  return {
    getToolHostAdvert: () => E.kind === "advertise" ? E : {
      kind: E.kind
    },
    stop: () => {
      f = !0;
      for (let c of C) c();
      clearTimeout(A), A = void 0, clearTimeout(w), w = void 0;
    }
  };
}
function Itr(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}
function Kqr({
  dir: dir_2,
  checks: checks_2,
  isOfferingFolder: isOfferingFolder,
  hasAccessToken: hasAccessToken
}) {
  function T() {
    return Y6(dir_2, {
      ignoringMute: !0
    });
  }
  return {
    gateOn: () => checks_2.gate() === !0 && checks_2.localDeviceFlag() === !0 && !lfe(),
    servingOn: () => {
      if (!hasAccessToken() || !isOfferingFolder() || jSn() !== void 0) return !1;
      let R = T();
      if (R !== void 0 && R !== "launched_from_home") return !1;
      return !Ee();
    },
    folderServed: () => T() !== "launched_from_home"
  };
}
function jSn(e = we()) {
  let o = oe(e);
  if (o === void 0) return;
  return o.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper";
}
function Yqr(e, o) {
  return Se({
    ...e,
    spawnHelper: s => de(s, {
      env: we(),
      ...o
    })
  });
}
async function Xqr(e) {
  try {
    await je(e.sweep("shutdown"), ee);
  } catch (error) {
    l(H(error));
  }
}
function we() {
  return process.env;
}
export { Otr, BSn, qqr, Itr, Kqr, jSn, Yqr, Xqr };