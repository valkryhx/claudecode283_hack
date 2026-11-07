// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  KHr
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  z,
  rf,
  Oo,
  k7,
  v$r,
  U2s,
  Jp,
  cne
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  qe,
  aK,
  F,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  vt,
  t,
  _,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  QU,
  vwe,
  ZHe,
  iv
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  $et,
  cT,
  vSe,
  ESe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  xa
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  OI,
  v0e,
  gbr,
  hMn,
  tms,
  nms,
  L7t,
  ybr,
  E0e,
  C0i,
  DZ,
  yMn,
  kDt,
  R0i
} from "B:/~BUN/root/chunk-0jhmwh3q.js";
import {
  RC,
  YU,
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  _e,
  Zdn
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  CU
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  El
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  C6o,
  Ktr
} from "B:/~BUN/root/chunk-60mncebm.js";
import {
  _t
} from "B:/~BUN/root/chunk-3a409jmn.js";
import {
  kn
} from "B:/~BUN/root/chunk-t7d2hp9h.js";
import {
  o,
  E,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  join as Xe
} from "path";
import {
  mkdir as We,
  readFile as Ke,
  unlink as $e,
  writeFile as me
} from "fs/promises";
import {
  dirname as Ue,
  join as Be
} from "path";
import {
  appendFile as Ne,
  lstat as be,
  mkdir as Me,
  readFile as ze
} from "fs/promises";
import {
  join as U
} from "path";
var He = ["**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json"],
  fe = "# claude-code-runtime",
  xe = [fe, ...He, ""].join(`
`);
async function Le(n) {
  if (!xa().claim(`claude_runtime_exclude_ensured:${n}`)) return;
  try {
    if (!_t(C6o, {
        safe: !0
      })) {
      let N = await RC(n);
      if (!N) return;
      let M = await YU(N) ?? N,
        B = U(M, "info", "exclude"),
        H = "";
      try {
        if (H = await ze(B, "utf-8"), H.includes(fe)) return
      } catch (O) {
        if (k(O) !== "ENOENT") throw O;
        await Me(U(M, "info")).catch((R) => {
          if (k(R) !== "EEXIST") throw R
        })
      }
      let J = H && !H.endsWith(`
`) ? `
` : "";
      await Ne(B, J + xe);
      return
    }
    let s = fr(n);
    if (s === null) return;
    let i = CU(s);
    if (i === null) {
      ue(U(s, ".git", "info", "exclude"), "Claude Code could not confirm that this checkout\u2019s .git belongs to it (the .git holds a commondir file, is a symlink, or is a .git file whose git folder does not point back here, as with --separate-git-dir)");
      return
    }
    let y = i.commonDir,
      w = U(y, "info", "exclude"),
      h = await be(U(y, "HEAD")).catch(() => null),
      d = await be(U(y, "objects")).catch(() => null);
    if (!h?.isFile() || !d?.isDirectory()) {
      ue(w, "its git folder lacks a HEAD file or an objects folder of its own (a symbolic link does not count)");
      return
    }
    let v = await Ktr(y, (N) => N.toString("utf-8").includes(fe) ? null : xe);
    if (v.kind === "skipped") ue(w, v.reason)
  } catch (s) {
    t(`ensureClaudeRuntimeFilesExcluded: ${s}`)
  }
}

function ue(n, s) {
  t(`Not adding ignore rules for the files Claude Code writes under .claude/ to ${n}: ${s}. Those files may show as untracked in git status.`, {
    level: "warn"
  })
}
var Ge = Be(".claude", "scheduled_tasks.lock"),
  Je = p(() => u({
    sessionId: o(),
    pid: E(),
    procStart: o().optional(),
    acquiredAt: E()
  }));

function Y(n) {
  return Be(n ?? Oo(), Ge)
}
async function De(n) {
  let s;
  try {
    s = await Ke(Y(n), "utf8")
  } catch {
    return
  }
  let i = Je().safeParse(et(s, !1));
  return i.success ? i.data : void 0
}
async function Pe(n, s) {
  let i = Y(s),
    y = _(n);
  try {
    return await me(i, y, {
      flag: "wx"
    }), !0
  } catch (w) {
    let h = k(w);
    if (h === "EEXIST") return !1;
    if (h === "ENOENT") {
      await We(Ue(i), {
        recursive: !0
      });
      try {
        return await me(i, y, {
          flag: "wx"
        }), !0
      } catch (d) {
        if (k(d) === "EEXIST") return !1;
        throw d
      }
    }
    throw w
  }
}

function ke(n, s) {
  n.unregisterCleanup?.(), n.unregisterCleanup = vt(async () => {
    await G(n, s)
  })
}
async function pe(n, s) {
  let i = s?.dir;
  if (gbr(i)) return !1;
  await Le(i ?? Oo());
  let y = s?.lockIdentity ?? z(),
    w = {
      sessionId: y,
      pid: process.pid,
      procStart: ESe(),
      acquiredAt: Date.now()
    };
  if (await Pe(w, i)) return n.lastBlockedBy = void 0, ke(n, s), t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), !0;
  let h = await De(i);
  if (h?.sessionId === y) {
    if (h.pid !== process.pid) await me(Y(i), _(w)), ke(n, s);
    return !0
  }
  if (h && El(h.pid) && await cT(h.pid, h.procStart)) {
    if (n.lastBlockedBy !== h.sessionId) n.lastBlockedBy = h.sessionId, t(`[ScheduledTasks] scheduler lock held by session ${h.sessionId} (PID ${h.pid})`);
    return !1
  }
  if (h) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${h.pid}`);
  if (await $e(Y(i)).catch(() => {}), await Pe(w, i)) return n.lastBlockedBy = void 0, ke(n, s), !0;
  return !1
}
async function G(n, s) {
  n.reset();
  let i = s?.dir;
  try {
    i ??= Oo()
  } catch {
    return
  }
  let y = s?.lockIdentity ?? z(),
    w = await De(i);
  if (!w || w.sessionId !== y) return;
  try {
    await $e(Y(i)), t("[ScheduledTasks] released scheduler lock")
  } catch {}
}
class ge {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.lastBlockedBy = void 0
  }
}
var Re = import.meta.require("B:/~BUN/root/chunk-zgm8xzys.js"),
  Ve = 1000,
  Qe = 300,
  Ye = 5000;

function Ze(n, s, i) {
  if (i === 0) return !1;
  return Boolean(n.recurring && !n.permanent && s - n.createdAt >= i)
}
async function tt(n, s, i) {
  let y = iv(i),
    w = ie(),
    h = new Set,
    d = new Set;
  for (let {
      createdBySessionId: v
    }
    of n)
    if (v !== void 0 && v !== s) d.add(v);
  if (await Promise.all(Array.from(d, async (v) => {
      if (QU(v) === null) return;
      if (await w.lstat(Xe(y, `${v}.jsonl`)).then((M) => M.isFile(), (M) => {
          let B = k(M);
          if (B !== "ENOENT" && B !== "ENOTDIR") t(`[ScheduledTasks] could not look for a transcript of task creator ${v} (${B}); treating it as not found`);
          return !1
        })) h.add(v)
    })), h.size < d.size) t(`[ScheduledTasks] found no transcript in ${y} for ${d.size-h.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return h
}
var ee = he(new Set, (n) => n.clear());

function te(n, s) {
  return `${n??""}\x00${s}`
}

function IDo(n) {
  let {
    onFire: s,
    isLoading: i,
    assistantMode: y = !1,
    onFireTask: w,
    onMissed: h,
    dir: d,
    lockIdentity: v,
    getJitterConfig: N,
    isKilled: M,
    filter: B,
    getExtraTasks: H,
    leaseFileTasks: J = () => !0
  } = n, O = d || v ? {
    dir: d,
    lockIdentity: v
  } : void 0, R = new ge, Z = d !== void 0 ? v : z(), re = new Set, ne = null, oe = [], se = [], b = new Map, Se = new Set, X = new Set, K = null, V = null, W = null, q = null, j = !1, D = !1, ye = new Set, we = "", ae = new Map;

  function je(r, f) {
    if (!El(r)) return ae.delete(r), !0;
    if (f === void 0) return !1;
    let C = Date.now(),
      T = ae.get(r);
    if (!T || C - T.at >= 60000) T = {
      at: C,
      token: $et(r)
    }, ae.set(r, T);
    return T.token !== void 0 && T.token !== f
  }

  function Te(r) {
    return vwe(r, ZHe())
  }

  function Ae(r) {
    if (r.createdInProject !== void 0) return Te(r.createdInProject) === we;
    return r.createdBySessionId !== void 0 && ye.has(r.createdBySessionId)
  }

  function Ce(r) {
    if (r.createdBySessionId === void 0) return D;
    if (r.createdBySessionId === Z) return !0;
    if (re.has(r.createdBySessionId) && r.createdByPid === process.pid && (r.createdByProcStart === void 0 ? r.createdAt >= performance.timeOrigin : r.createdByProcStart === vSe.token)) return !0;
    return D && Ae(r) && (r.createdByPid === void 0 || je(r.createdByPid, r.createdByProcStart))
  }

  function de(r) {
    if (r.length === 0) return;
    E0e(r.map((f) => f.id), d).catch((f) => t(`[ScheduledTasks] failed to remove tasks: ${f}`))
  }
  async function Ie(r) {
    let f = tms(d) || nms(d) ? [] : await hMn(d),
      C = H ? await H().catch((S) => {
        if (xa().claim("cron_extra_tasks_load_bad")) m("routine_register_trigger", "extra_tasks_load_failed");
        return t(`[ScheduledTasks] getExtraTasks failed: ${S}`), []
      }) : [],
      T = d ?? Oo(),
      L = await tt(f.filter((S) => S.createdInProject === void 0), Z, T);
    if (j) return;
    if (oe = f, se = C, ye = L, we = Te(T), !r) return;
    let e = !1;
    for (let S of f)
      if (Z !== void 0 && S.createdBySessionId === Z && S.createdByPid !== process.pid) S.createdByPid = process.pid, S.createdByProcStart = ESe(), e = !0;
    if (e) await ybr(f, d).catch((S) => t(`[ScheduledTasks] failed to refresh task pids: ${S}`));
    let A = Date.now(),
      I = R0i(f, A).filter((S) => !S.recurring && !Se.has(S.id) && !ee.has(te(d, S.id)) && (!B || B(S)) && Ce(S));
    if (I.length > 0) {
      for (let x of I) Se.add(x.id), b.set(x.id, 1 / 0);
      l("tengu_scheduled_task_missed", {
        count: I.length,
        taskIds: Zdn(I.map((x) => x.id))
      });
      let S = new Set;
      try {
        if (h) {
          S = new Set(h(I, de) ?? []);
          for (let x of S) ee.add(te(d, x))
        } else s(eBr(I))
      } catch (x) {
        t(`[ScheduledTasks] could not surface ${I.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, {
          level: "error"
        }), a(Oe(x, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return
      }
      de(I.filter((x) => !S.has(x.id))), t(`[ScheduledTasks] surfaced ${I.length-S.size} missed one-shot task(s), kept back ${S.size}`)
    }
  }

  function ce() {
    if (M?.()) return;
    if (D && !J()) D = !1, G(R, O);
    if (i() && !y) return;
    let r = Date.now(),
      f = new Set,
      C = [],
      T = N?.() ?? DZ;

    function L(e, A) {
      if (B && !B(e)) return;
      if (f.add(e.id), X.has(e.id)) return;
      if (!A && ee.has(te(d, e.id))) return;
      let I = b.get(e.id);
      if (I === void 0) {
        let P = kDt(e, T);
        if (P === null) m("cron_task_fire", "next_fire_unresolvable", {
          recurring: e.recurring ?? !1
        });
        I = P ?? 1 / 0, b.set(e.id, I), t(`[ScheduledTasks] scheduled ${e.id} for ${I===1/0?"never":new Date(I).toISOString()}`)
      }
      if (r < I) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring?" (recurring)":""}`);
      let S = e.id.startsWith("routine:") ? kn(e.id) : _e(e.id);
      l("tengu_scheduled_task_fire", {
        recurring: e.recurring ?? !1,
        taskId: S,
        autonomousLoopDefault: Re.isLoopDefaultSentinel(e.prompt)
      });
      let x = {
          recurring: e.recurring ?? !1,
          permanent: e.permanent ?? !1
        },
        Fe = !1;
      try {
        if (w) Fe = w(e, () => de([e])) === !0;
        else s(e.prompt);
        g("cron_task_fire", x)
      } catch (P) {
        let Q = !A && !e.recurring;
        if (Q) b.set(e.id, 1 / 0);
        if (t(Q ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, {
            level: "error"
          }), m("cron_task_fire", "handler_threw", x), a(Oe(P, "scheduled task fire handler threw (message not reported: it may contain user text)")), Q) return
      }
      let Ee = Ze(e, r, T.recurringMaxAgeMs);
      if (Ee) {
        let P = Math.floor((r - e.createdAt) / 1000 / 60 / 60);
        t(`[ScheduledTasks] recurring task ${e.id} aged out (${P}h since creation), deleting after final fire`), l("tengu_scheduled_task_expired", {
          taskId: S,
          ageHours: P
        })
      }
      if (e.recurring && !Ee) {
        let P = yMn(e.cron, r, e.id, T);
        if (P === null) c("cron_task_fire", "reschedule_unresolvable");
        let Q = P ?? 1 / 0;
        if (b.set(e.id, Q), !A) C.push(e.id)
      } else if (A) cne([e.id]), b.delete(e.id);
      else if (Fe) ee.add(te(d, e.id)), b.set(e.id, 1 / 0);
      else X.add(e.id), b.set(e.id, 1 / 0), E0e([e.id], d).catch((P) => t(`[ScheduledTasks] failed to remove task ${e.id}: ${P}`)).finally(() => X.delete(e.id))
    }
    for (let e of oe)
      if (Ce(e)) L(e, !1);
    if (C.length > 0) {
      for (let e of C) X.add(e);
      C0i(C, r, d).catch((e) => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of C) X.delete(e)
      })
    }
    if (d === void 0)
      for (let e of Jp().slice()) {
        L(e, !0);
        let A = b.get(e.id);
        e.nextFireAt = A === 1 / 0 ? void 0 : A
      }
    for (let e of se) L(e, !0);
    if (f.size === 0) {
      b.clear();
      return
    }
    for (let e of b.keys())
      if (!f.has(e)) b.delete(e)
  }
  async function le() {
    if (j) return;
    K?.(), K = null;
    let {
      default: r
    } = await import("B:/~BUN/root/chunk-2s6w2xn2.js");
    if (j) return;
    if (D = J() ? await pe(R, O).catch(() => !1) : !1, j) {
      if (D) D = !1, G(R, O);
      return
    }
    if (!D) W = setInterval(() => {
      if (!J()) return;
      pe(R, O).then((C) => {
        if (j) {
          if (C) G(R, O);
          return
        }
        if (C) {
          if (D = !0, W) clearInterval(W), W = null
        }
      }).catch((C) => t(String(C), {
        level: "error"
      }))
    }, Ye), W.unref?.();
    Ie(!0).then(ce);
    let f = v0e(d);
    q = ve(() => r.watch(f, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: {
        stabilityThreshold: Qe
      },
      ignorePermissionErrors: !0
    })), V = setInterval(ce, Ve), V.unref?.()
  }

  function ve(r) {
    let f = r();
    f.on("error", (T) => t(`[ScheduledTasks] watcher error: ${T}`, {
      level: "warn"
    }));
    let C = () => {
      if (j || q !== f) return;
      q = ve(r), q.once("ready", () => void Ie(!1)), f.close().catch((T) => t(`[ScheduledTasks] watcher close failed: ${T}`, {
        level: "warn"
      }))
    };
    return f.on("add", C), f.on("change", C), f.on("unlink", () => {
      if (!j) {
        oe = [];
        let T = new Set(se.map((L) => L.id));
        if (d === void 0)
          for (let L of Jp()) T.add(L.id);
        for (let L of b.keys())
          if (!T.has(L)) b.delete(L)
      }
    }), f
  }
  return {
    start() {
      if (j = !1, K?.(), K = null, d !== void 0) {
        t(`[ScheduledTasks] scheduler start() \u2014 dir=${d}, hasTasks=${L7t(d)}`), le();
        return
      }
      if (t(`[ScheduledTasks] scheduler start() \u2014 enabled=${v$r()}, hasTasks=${L7t()}`), re.add(z()), ne ??= rf((r) => {
          re.add(r)
        }), !v$r() && (y || H !== void 0 || L7t())) k7(!0);
      if (v$r()) {
        le();
        return
      }
      K = U2s(() => void le())
    },
    stop() {
      if (j = !0, K?.(), K = null, ne?.(), ne = null, V) clearInterval(V), V = null;
      if (W) clearInterval(W), W = null;
      if (q?.close(), q = null, D) D = !1, G(R, O)
    },
    getNextFireTime() {
      let r = 1 / 0;
      for (let f of b.values())
        if (f < r) r = f;
      return r === 1 / 0 ? null : r
    },
    checkNow() {
      ce()
    }
  }
}

function eBr(n) {
  let s = n.length > 1,
    i = `The following one-shot scheduled task${s?"s were":" was"} missed while Claude was not running. ${s?"They have":"It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${s?"these prompts":"this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${s?"each one":"it"} now. Only execute if the user confirms.`,
    y = n.map((w) => `${`[${OI(w.cron)}, created ${new Date(w.createdAt).toLocaleString()}]`}
${KHr(w.prompt)}`);
  return `${i}

${y.join(`

`)}`
}

function Oe(n, s) {
  let i = () => qe(Error("scheduled task handler threw (message not reported: it may contain user text)", {
    cause: n
  }), s);
  try {
    let y = qe(F(n), s);
    return aK(y) === s ? y : i()
  } catch {
    return i()
  }
}
export {
  IDo,
  eBr
};
