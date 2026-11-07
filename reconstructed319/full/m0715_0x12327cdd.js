// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  Ee,
  bP,
  Oo,
  v$e
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  F,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  zt
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Yv
} from "B:/~BUN/root/chunk-15vbkr6z.js";
import {
  x5,
  Ijt,
  IHr,
  c$e,
  t,
  Mh
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  SQn
} from "B:/~BUN/root/chunk-dsgmffrq.js";
import {
  OR
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  CA,
  am,
  Mp,
  pU
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  Pqe
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  LR
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  iW,
  Fd,
  dss,
  tR,
  g9t,
  tu,
  cE,
  tWe,
  C6,
  Uoo,
  m9e,
  Pxn,
  sr,
  Vo,
  Oxn,
  Bt
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  dP
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  fU
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  Ny
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  Rze
} from "B:/~BUN/root/chunk-3v5ng1y2.js";
import {
  zc,
  g1
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  Yls
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  _Qn,
  Z_n
} from "B:/~BUN/root/chunk-nv86p234.js";
import {
  Rtr,
  Atr,
  K6e
} from "B:/~BUN/root/chunk-dqprk713.js";
import {
  yVo,
  xoi
} from "B:/~BUN/root/chunk-0dhvsb89.js";
import {
  hQn
} from "B:/~BUN/root/chunk-hbs53sn0.js";
import {
  gQn,
  yQn
} from "B:/~BUN/root/chunk-3bc3h4jr.js";
import {
  wqt,
  Per
} from "B:/~BUN/root/chunk-9katj9cn.js";
import {
  zSn,
  GSn,
  Hqt,
  VSn,
  gtr,
  ytr
} from "B:/~BUN/root/chunk-815nev8v.js";
import {
  Vp
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  spawnSync as D
} from "child_process";
import {
  stat as v
} from "fs/promises";
import {
  dirname as P
} from "path";
async function l() {
  await Promise.all([zt(c$e(), 2000, "debug flush timeout (exec)").catch(() => {}), zt(Pqe(), 2000, "diag flush timeout (exec)").catch(() => {}), zt(IHr(), 2000, "pre-exit flush timeout (exec)").catch(() => {}), zt(LR(), 2000, "write queue drain timeout (exec)").catch(() => {})])
}
import {
  isAbsolute as O
} from "path";

function T(e, r, i, n) {
  if (dP(), x() === "windows" || !O(e)) return;
  let s, c;
  try {
    if (n) c = process.cwd(), Mh(n);
    process.execve(e, r, hQn(i)), t(`execve(${e}) returned \u2014 handing back to the caller`, {
      level: "warn"
    })
  } catch (f) {
    s = F(f), t(`execReplaceProcess: ${d(f)} \u2014 handing the error back to the caller`, {
      level: "warn"
    })
  } finally {
    if (c !== void 0) try {
      Mh(c)
    } catch {}
  }
  return s
}
async function y(e) {
  let r = Fd();
  if (!r) return !1;
  return N(r, e)
}
async function N(e, r) {
  if (await v(e).then((s) => s.size > 0, () => !1)) return !0;
  let n = Vp(e, r);
  if (n === void 0) return !1;
  try {
    let s = await n.backend.statMeta(n.key);
    if (!s.ok && s.error.code !== "NotFound") t(`transcriptHasBytes: backend statMeta failed: ${s.error.code}`);
    return s.ok && s.value.size > 0
  } catch (s) {
    return a(s), !1
  }
}
async function jY(e, r, {
  responseStreaming: i = !1
} = {}, n) {
  let s = Atr(r);
  if (!s || i) return s;
  try {
    if (await tR([...e, Bt(Rtr[r], "warning")], void 0, void 0, void 0, n), r === "relaunch") await TB(e, n)
  } catch (c) {
    throw K6e(), c
  }
  return !0
}
async function f4r(e, {
  responseStreaming: r = !1
} = {}, i) {
  try {
    await jY(e, "process_exit", {
      responseStreaming: r
    }, i)
  } catch (n) {
    a(n)
  }
}
async function ROe(e, r = {}, i, n) {
  if (await f4r(e, r, i), n) await sr(0, "prompt_input_exit", {
    removeWorktree: n
  });
  else await sr(0, "prompt_input_exit")
}
var E = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)",
  _ = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`,
  p4r = "Automatic continue at the usage-limit reset was cancelled.";

function AOe(e, r) {
  return r.includes(E) || r.includes(_) || r.includes(p4r) ? `${e} ${_}` : e
}

function h8(e, r, {
  as: i = "sentence",
  exitsAfterward: n = !1
} = {}) {
  if (K6e(), !r) return e;
  if (i === "clause") return `${e} \u2014 ${E}`;
  return `${e}
${n?p4r:_}`
}

function fBe(e, r, i) {
  return g8(r, i).catch((n) => {
    if (n instanceof Error) n.message = h8(n.message, e, {
      as: "clause"
    });
    else K6e();
    throw n
  })
}
async function TB(e, r) {
  let i = vit(e)?.uuid;
  try {
    if (i) await g9t(i, void 0, r);
    else if (dss() && await y(r)) await g9t(null, void 0, r)
  } catch (n) {
    a(n)
  }
}

function vit(e) {
  return e.findLast((r) => (r.type === "user" || r.type === "assistant") && cE(r) && !iW(r.uuid))
}
var U = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.",
  H = "Claude Code couldn't restart. Start Claude Code again.";
async function Cle() {
  if (await pU()) return;
  throw m("agent_launcher", "relaunch_launcher_not_runnable"), new R(Mp() ?? `${CA}: launcher \`${am()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable")
}
async function g8(e = {}, r) {
  dP();
  let {
    cmd: i,
    prefixArgs: n
  } = OR(() => g1(e.launcher ?? zc()));
  await Cle();
  let s = e.extraArgs ?? [],
    c;
  if (e.args) c = e.args;
  else if (e.freshIfNoTranscript && !await y(r)) c = s;
  else c = ["--resume", z(), ...s];
  let f = c[0] === "--resume" && !e.args,
    g = e.failedLine ?? (f ? U : H),
    L = Vo();
  if (Oxn(), !L) e.onShutdownClaimed?.();
  tWe(), Uoo(), await Promise.all([zt(tu(), 30000, "flush timeout (relaunch)").catch(() => {}), zt(Ijt(), x5, "cleanup timeout").catch(() => {}).then(() => zt(m9e(), 1000, "analytics flush timeout").catch(() => {}))]), e.preSpawn?.();
  let o = fU(Rze(OR(() => ({
    ...process.env
  }))));
  if (yQn(o), delete o.CLAUDE_CODE_TUI_JUST_SWITCHED, delete o.CLAUDE_CODE_TUI_TRIAL, delete o.CLAUDE_CODE_TELEPORT_MOVE, delete o.CLAUDE_BRIDGE_REATTACH_SESSION, delete o.CLAUDE_BRIDGE_REATTACH_SEQ, delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete o.CLAUDE_BRIDGE_REATTACH_GROUPING, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete o[Yls], delete o.CLAUDE_BG_WORKSPACE_TRUSTED, delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256, delete o[yVo], bP() && v$e()) o.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(o, await xoi());
  delete o[wqt], delete o[Z_n];
  let A = Pxn();
  if (!e.args && A !== void 0) o[Z_n] = A;
  if (_Qn(o, c), delete o[zSn], delete o[Hqt], delete o[VSn], delete o[GSn], e.proactivity && !e.args) Object.assign(o, gtr(e.proactivity), ytr(e.proactivity));
  Object.assign(o, e.env);
  for (let p of e.dropEnv ?? []) delete o[p];
  Object.assign(o, Per());
  let h = Eit();
  await l(), SQn();
  let S = w(e.refuseAtSpawn, g);
  if (S !== void 0) return I(S);
  T(i, [i, ...n, ...c], o, h);
  for (let p of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(p), process.on(p, () => {});
  await l();
  let C = w(e.refuseAtSpawn, g);
  if (C !== void 0) return I(C);
  gQn();
  let u = D(i, [...n, ...c], {
    stdio: "inherit",
    env: o,
    cwd: h
  });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), u.error) t(`Failed to relaunch: ${u.error.message}`, {
    level: "error"
  }), await l(), C6(g), Yv("relaunch_spawn_error"), process.exit(1);
  u.signal, process.exit(u.status ?? (u.signal ? 1 : 0))
}

function w(e, r) {
  try {
    return e?.()
  } catch (i) {
    return a(i), r
  }
}
async function I(e) {
  process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), await l(), C6(e), process.exit(1)
}

function Eit() {
  let e = Fd(),
    r = Ee();
  if (e && P(e) === Ny(r)) return r;
  return Oo()
}
export {
  jY,
  f4r,
  ROe,
  p4r,
  AOe,
  h8,
  fBe,
  TB,
  vit,
  Cle,
  g8,
  Eit
};
