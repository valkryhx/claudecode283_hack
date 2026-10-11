// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y, we, sT, kr, MBe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { P, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { fh } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { lre, m9e, Vhn, mf, Pde, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { IKt } from "B:/~BUN/root/chunk-dczbgj6x.js";
import { kv, au, Eu, gI } from "B:/~BUN/root/chunk-y00rw36h.js";
import { y_e } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { wM, _c, fSr, EE, Urt, ru, sv, Qfe, bHn, mDe, Kn, ixt, $t } from "B:/~BUN/root/chunk-3jyp964r.js";
import { LN } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { xh } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { Hu, yz } from "B:/~BUN/root/chunk-ewjenbzd.js";
import { _kr } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { PYt, IYt, iwe } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { _7e, xKt } from "B:/~BUN/root/chunk-jw9a7s4e.js";
import { MKt } from "B:/~BUN/root/chunk-9t6a3qkt.js";
import { Ff } from "B:/~BUN/root/chunk-esqb9g1a.js";
import { spawnSync as S } from "child_process";
import { stat as C } from "fs/promises";
import { dirname as T } from "path";
import { isAbsolute as A } from "path";
function _(e, r, n, o) {
  if (O() === "windows" || !A(e)) return;
  let i;
  try {
    if (o) i = process.cwd(), mf(o);
    process.execve(e, r, MKt(n)), t(`execve(${e}) returned \u2014 falling back to spawn`, {
      level: "warn"
    });
  } catch (error) {
    t(`execReplaceProcess: ${l(error)} \u2014 falling back to spawn`, {
      level: "warn"
    });
  } finally {
    if (i !== void 0) try {
      mf(i);
    } catch {}
  }
}
async function R(e) {
  let r = _c();
  if (!r) return !1;
  return I(r, e);
}
async function I(e, r) {
  if (await C(e).then(i => i.size > 0, () => !1)) return !0;
  let o = Ff(e, r);
  if (o === void 0) return !1;
  try {
    let i = await o.backend.statMeta(o.key);
    if (!i.ok && i.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${i.error.code}`);
    return i.ok && i.value.size > 0;
  } catch (error) {
    return d(error), !1;
  }
}
async function cG(e, r, {
  responseStreaming = !1
} = {}, o) {
  let i = IYt(r);
  if (!i || responseStreaming) return i;
  try {
    if (await EE([...e, $t(PYt[r], "warning")], void 0, void 0, void 0, o), r === "relaunch") await SU(e, o);
  } catch (error) {
    throw iwe(), error;
  }
  return !0;
}
async function yTn(e, {
  responseStreaming: responseStreaming_2 = !1
} = {}, n) {
  try {
    await cG(e, "process_exit", {
      responseStreaming: responseStreaming_2
    }, n);
  } catch (error) {
    d(error);
  }
}
async function boe(e, r = {}, n) {
  await yTn(e, r, n), await Kn(0, "prompt_input_exit");
}
var p = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)",
  f = `${p.charAt(0).toUpperCase()}${p.slice(1)}.`,
  h = "Automatic continue at the usage-limit reset was cancelled.";
function Soe(e, r) {
  return r.includes(p) || r.includes(f) || r.includes(h) ? `${e} ${f}` : e;
}
function N5(e, r, {
  as: n = "sentence",
  exitsAfterward = !1
} = {}) {
  if (iwe(), !r) return e;
  if (n === "clause") return `${e} \u2014 ${p}`;
  return `${e}
${exitsAfterward ? h : f}`;
}
function xWe(e, r, n) {
  return woe(r, n).catch(o => {
    if (o instanceof Error) o.message = N5(o.message, e, {
      as: "clause"
    });else iwe();
    throw o;
  });
}
async function SU(e, r) {
  let n = AKt(e)?.uuid;
  try {
    if (n) await Urt(n, void 0, r);else if (fSr() && (await R(r))) await Urt(null, void 0, r);
  } catch (error) {
    d(error);
  }
}
function AKt(e) {
  return e.findLast(r => (r.type === "user" || r.type === "assistant") && sv(r) && !wM(r.uuid));
}
async function QIe() {
  if (await gI()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new P(Eu() ?? `${kv}: launcher \`${au()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function woe(e = {}, r) {
  let {
    cmd: cmd,
    prefixArgs: prefixArgs
  } = yz(e.launcher ?? Hu());
  await QIe();
  let i = e.extraArgs ?? [],
    s;
  if (e.args) s = e.args;else if (e.freshIfNoTranscript && !(await R(r))) s = i;else s = ["--resume", Y(), ...i];
  ixt(), Qfe(), bHn(), await Promise.all([Ht(ru(), 30000, "flush timeout (relaunch)").catch(() => {}), Ht(m9e(), lre, "cleanup timeout").catch(() => {}).then(() => Ht(mDe(), 1000, "analytics flush timeout").catch(() => {}))]), e.preSpawn?.();
  let env = {
    ...process.env
  };
  if (delete env.CLAUDE_CODE_TUI_JUST_SWITCHED, delete env.CLAUDE_CODE_TUI_TRIAL, delete env.CLAUDE_BRIDGE_REATTACH_SESSION, delete env.CLAUDE_BRIDGE_REATTACH_SEQ, delete env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete env.CLAUDE_BRIDGE_REATTACH_GROUPING, delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete env.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete env[_kr], delete env.CLAUDE_BG_WORKSPACE_TRUSTED, sT() && MBe()) env.CLAUDE_BG_WORKSPACE_TRUSTED = "1";
  delete env[_7e], Object.assign(env, e.env);
  for (let u of e.dropEnv ?? []) delete env[u];
  Object.assign(env, xKt());
  let cwd = Xor();
  await g(), IKt(), _(cmd, [cmd, ...prefixArgs, ...s], env, cwd);
  for (let u of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(u), process.on(u, () => {});
  await g();
  let c = S(cmd, [...prefixArgs, ...s], {
    stdio: "inherit",
    env: env,
    cwd: cwd
  });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), c.error) process.stderr.write(`Failed to relaunch Claude Code: ${c.error.message}
`), fh("relaunch_spawn_error"), process.exit(1);
  c.signal, process.exit(c.status ?? (c.signal ? 1 : 0));
}
function Xor() {
  let e = _c(),
    r = we();
  if (e && T(e) === xh(r)) return r;
  return kr();
}
async function g() {
  await Promise.all([Ht(Pde(), 2000, "debug flush timeout (relaunch)").catch(() => {}), Ht(y_e(), 2000, "diag flush timeout (relaunch)").catch(() => {}), Ht(Vhn(), 2000, "pre-exit flush timeout (relaunch)").catch(() => {}), Ht(LN(), 2000, "write queue drain timeout (relaunch)").catch(() => {})]);
}
export { cG, yTn, boe, Soe, N5, xWe, SU, AKt, QIe, woe, Xor };