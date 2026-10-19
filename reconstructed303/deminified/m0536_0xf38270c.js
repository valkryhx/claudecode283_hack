// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K, ke, iP, Qr, YTe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x, H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { V_ } from "B:/~BUN/root/chunk-xf0m410v.js";
import { qne, Vbt, sJn, vg, FTe, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { iRn } from "B:/~BUN/root/chunk-mxxcv7nt.js";
import { Vv, jT, ff, Of, BN } from "B:/~BUN/root/chunk-7qeqkjr8.js";
import { rI } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Z0e } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { U4 } from "B:/~BUN/root/chunk-j8w5f307.js";
import { YF, rd, jpo, Dk, TOt, Mu, cw, Hxe, Iq, nwr, I$e, Yn, FQt, Bt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { cb } from "B:/~BUN/root/chunk-9080897a.js";
import { Bc, B6 } from "B:/~BUN/root/chunk-c0j3f8cc.js";
import { Ogo } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { Jxn, Qxn, sFe } from "B:/~BUN/root/chunk-qc6mvzn1.js";
import { _Xr, Dts } from "B:/~BUN/root/chunk-rhcs3fcg.js";
import { tRn, nRn } from "B:/~BUN/root/chunk-0s414e69.js";
import { rRn } from "B:/~BUN/root/chunk-a6sd6she.js";
import { oRn } from "B:/~BUN/root/chunk-qb4x68x7.js";
import { ETt, NRn } from "B:/~BUN/root/chunk-trxfp62p.js";
import { L6t, N6t, xCt, F6t, mPn, gPn } from "B:/~BUN/root/chunk-yp8sghfs.js";
import { Vp } from "B:/~BUN/root/chunk-k798mzph.js";
import { spawnSync as C } from "child_process";
import { stat as T } from "fs/promises";
import { dirname as y } from "path";
async function p() {
  await Promise.all([Nt(FTe(), 2000, "debug flush timeout (exec)").catch(() => {}), Nt(Z0e(), 2000, "diag flush timeout (exec)").catch(() => {}), Nt(sJn(), 2000, "pre-exit flush timeout (exec)").catch(() => {}), Nt(rI(), 2000, "write queue drain timeout (exec)").catch(() => {})]);
}
import { isAbsolute as S } from "path";
function R(e, r, i, n) {
  if (U4(), I() === "windows" || !S(e)) return;
  let a, s;
  try {
    if (n) s = process.cwd(), vg(n);
    process.execve(e, r, rRn(i)), t(`execve(${e}) returned \u2014 handing back to the caller`, {
      level: "warn"
    });
  } catch (error) {
    a = H(error), t(`execReplaceProcess: ${d(error)} \u2014 handing the error back to the caller`, {
      level: "warn"
    });
  } finally {
    if (s !== void 0) try {
      vg(s);
    } catch {}
  }
  return a;
}
async function h(e) {
  let r = rd();
  if (!r) return !1;
  return w(r, e);
}
async function w(e, r) {
  if (await T(e).then(a => a.size > 0, () => !1)) return !0;
  let n = Vp(e, r);
  if (n === void 0) return !1;
  try {
    let a = await n.backend.statMeta(n.key);
    if (!a.ok && a.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${a.error.code}`);
    return a.ok && a.value.size > 0;
  } catch (error) {
    return l(error), !1;
  }
}
async function C8(e, r, {
  responseStreaming = !1
} = {}, n) {
  let a = Qxn(r);
  if (!a || responseStreaming) return a;
  try {
    if (await Dk([...e, Bt(Jxn[r], "warning")], void 0, void 0, void 0, n), r === "relaunch") await Sz(e, n);
  } catch (error) {
    throw sFe(), error;
  }
  return !0;
}
async function _ar(e, {
  responseStreaming: responseStreaming_2 = !1
} = {}, i) {
  try {
    await C8(e, "process_exit", {
      responseStreaming: responseStreaming_2
    }, i);
  } catch (error) {
    l(error);
  }
}
async function W_e(e, r = {}, i, removeWorktree) {
  if (await _ar(e, r, i), removeWorktree) await Yn(0, "prompt_input_exit", {
    removeWorktree: removeWorktree
  });else await Yn(0, "prompt_input_exit");
}
var E = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)",
  _ = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`,
  A = "Automatic continue at the usage-limit reset was cancelled.";
function z_e(e, r) {
  return r.includes(E) || r.includes(_) || r.includes(A) ? `${e} ${_}` : e;
}
function y7(e, r, {
  as: i = "sentence",
  exitsAfterward = !1
} = {}) {
  if (sFe(), !r) return e;
  if (i === "clause") return `${e} \u2014 ${E}`;
  return `${e}
${exitsAfterward ? A : _}`;
}
function fot(e, r, i) {
  return _7(r, i).catch(n => {
    if (n instanceof Error) n.message = y7(n.message, e, {
      as: "clause"
    });else sFe();
    throw n;
  });
}
async function Sz(e, r) {
  let i = rKe(e)?.uuid;
  try {
    if (i) await TOt(i, void 0, r);else if (jpo() && (await h(r))) await TOt(null, void 0, r);
  } catch (error) {
    l(error);
  }
}
function rKe(e) {
  return e.findLast(r => (r.type === "user" || r.type === "assistant") && cw(r) && !YF(r.uuid));
}
var L = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.",
  O = "Claude Code couldn't restart. Start Claude Code again.";
async function G_e() {
  if (await BN()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new x(Of() ?? `${jT}: launcher \`${ff()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function _7(e = {}, r) {
  U4();
  let {
    cmd: cmd,
    prefixArgs: prefixArgs
  } = Vv(() => B6(e.launcher ?? Bc()));
  await G_e();
  let a = e.extraArgs ?? [],
    s;
  if (e.args) s = e.args;else if (e.freshIfNoTranscript && !(await h(r))) s = a;else s = ["--resume", K(), ...a];
  let u = s[0] === "--resume" && !e.args;
  FQt(), Hxe(), nwr(), await Promise.all([Nt(Mu(), 30000, "flush timeout (relaunch)").catch(() => {}), Nt(Vbt(), qne, "cleanup timeout").catch(() => {}).then(() => Nt(I$e(), 1000, "analytics flush timeout").catch(() => {}))]), e.preSpawn?.();
  let env = Vv(() => ({
    ...process.env
  }));
  if (nRn(env), delete env.CLAUDE_CODE_TUI_JUST_SWITCHED, delete env.CLAUDE_CODE_TUI_TRIAL, delete env.CLAUDE_BRIDGE_REATTACH_SESSION, delete env.CLAUDE_BRIDGE_REATTACH_SEQ, delete env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete env.CLAUDE_BRIDGE_REATTACH_GROUPING, delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete env.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete env[Ogo], delete env.CLAUDE_BG_WORKSPACE_TRUSTED, delete env.CLAUDE_BG_CARRIED_PROMPTS_SHA256, delete env[_Xr], iP() && YTe()) env.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(env, await Dts());
  if (delete env[ETt], oRn(env, s), delete env[L6t], delete env[xCt], delete env[F6t], delete env[N6t], e.proactivity && !e.args) Object.assign(env, mPn(e.proactivity), gPn(e.proactivity));
  Object.assign(env, e.env);
  for (let f of e.dropEnv ?? []) delete env[f];
  Object.assign(env, NRn());
  let cwd = eRn();
  await p(), iRn(), R(cmd, [cmd, ...prefixArgs, ...s], env, cwd);
  for (let f of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(f), process.on(f, () => {});
  await p(), tRn();
  let c = C(cmd, [...prefixArgs, ...s], {
    stdio: "inherit",
    env: env,
    cwd: cwd
  });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), c.error) t(`Failed to relaunch: ${c.error.message}`, {
    level: "error"
  }), await p(), Iq(e.failedLine ?? (u ? L : O)), V_("relaunch_spawn_error"), process.exit(1);
  c.signal, process.exit(c.status ?? (c.signal ? 1 : 0));
}
function eRn() {
  let e = rd(),
    r = ke();
  if (e && y(e) === cb(r)) return r;
  return Qr();
}
export { C8, _ar, W_e, z_e, y7, fot, Sz, rKe, G_e, _7, eRn };