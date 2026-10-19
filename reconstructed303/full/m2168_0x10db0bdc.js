// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  _Jn
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  K,
  Hc,
  Qr,
  s1,
  WJn,
  X2o,
  Tm,
  Q5
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ye,
  d1,
  H,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  bt,
  _,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  lI,
  pGe,
  gZe,
  iS
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  YWe,
  ek,
  Fle,
  Hle
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  pt
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  QR,
  ZPe,
  Yjn,
  Ztn,
  svo,
  BCr,
  Xjn,
  wve,
  $Ps,
  Z6,
  tnn,
  Wut,
  UPs
} from "B:/~BUN/root/chunk-89m6ef17.js";
import {
  iT,
  DW
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  ea
} from "B:/~BUN/root/chunk-53tmhe2j.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Ia
} from "B:/~BUN/root/chunk-9xr0x7gd.js";
import {
  an
} from "B:/~BUN/root/chunk-31x8pa20.js";
import {
  o,
  v,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  ye,
  ojt
} from "B:/~BUN/root/chunk-shj1mfyk.js";
import {
  join as Me
} from "path";
import {
  mkdir as je,
  readFile as Re,
  unlink as ve,
  writeFile as ae
} from "fs/promises";
import {
  dirname as Ae,
  join as Fe
} from "path";
import {
  appendFile as Le,
  mkdir as $e,
  readFile as Be
} from "fs/promises";
import {
  join as Te
} from "path";
var Oe = ["**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json"],
  we = "# claude-code-runtime";
async function Ce(s) {
  if (!ea().claim(`claude_runtime_exclude_ensured:${s}`)) return;
  try {
    let n = await iT(s);
    if (!n) return;
    let a = await DW(n) ?? n,
      T = Te(a, "info", "exclude"),
      y = "";
    try {
      if (y = await Be(T, "utf-8"), y.includes(we)) return
    } catch (F) {
      if (k(F) !== "ENOENT") throw F;
      await $e(Te(a, "info")).catch((z) => {
        if (k(z) !== "EEXIST") throw z
      })
    }
    let c = y && !y.endsWith(`
`) ? `
` : "",
      h = [we, ...Oe, ""].join(`
`);
    await Le(T, c + h)
  } catch (n) {
    t(`ensureClaudeRuntimeFilesExcluded: ${n}`)
  }
}
var De = Fe(".claude", "scheduled_tasks.lock"),
  Ne = f(() => u({
    sessionId: o(),
    pid: v(),
    procStart: o().optional(),
    acquiredAt: v()
  }));

function G(s) {
  return Fe(s ?? Qr(), De)
}
async function _e(s) {
  let n;
  try {
    n = await Re(G(s), "utf8")
  } catch {
    return
  }
  let a = Ne().safeParse(pt(n, !1));
  return a.success ? a.data : void 0
}
async function Ie(s, n) {
  let a = G(n),
    T = _(s);
  try {
    return await ae(a, T, {
      flag: "wx"
    }), !0
  } catch (y) {
    let c = k(y);
    if (c === "EEXIST") return !1;
    if (c === "ENOENT") {
      await je(Ae(a), {
        recursive: !0
      });
      try {
        return await ae(a, T, {
          flag: "wx"
        }), !0
      } catch (h) {
        if (k(h) === "EEXIST") return !1;
        throw h
      }
    }
    throw y
  }
}

function ie(s, n) {
  s.unregisterCleanup?.(), s.unregisterCleanup = bt(async () => {
    await M(s, n)
  })
}
async function de(s, n) {
  let a = n?.dir;
  if (Yjn(a)) return !1;
  await Ce(a ?? Qr());
  let T = n?.lockIdentity ?? K(),
    y = {
      sessionId: T,
      pid: process.pid,
      procStart: Hle(),
      acquiredAt: Date.now()
    };
  if (await Ie(y, a)) return s.lastBlockedBy = void 0, ie(s, n), t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), !0;
  let c = await _e(a);
  if (c?.sessionId === T) {
    if (c.pid !== process.pid) await ae(G(a), _(y)), ie(s, n);
    return !0
  }
  if (c && Ia(c.pid) && await ek(c.pid, c.procStart)) {
    if (s.lastBlockedBy !== c.sessionId) s.lastBlockedBy = c.sessionId, t(`[ScheduledTasks] scheduler lock held by session ${c.sessionId} (PID ${c.pid})`);
    return !1
  }
  if (c) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${c.pid}`);
  if (await ve(G(a)).catch(() => {}), await Ie(y, a)) return s.lastBlockedBy = void 0, ie(s, n), !0;
  return !1
}
async function M(s, n) {
  s.reset();
  let a = n?.dir;
  try {
    a ??= Qr()
  } catch {
    return
  }
  let T = n?.lockIdentity ?? K(),
    y = await _e(a);
  if (!y || y.sessionId !== T) return;
  try {
    await ve(G(a)), t("[ScheduledTasks] released scheduler lock")
  } catch {}
}
class ce {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.lastBlockedBy = void 0
  }
}
var be = import.meta.require("B:/~BUN/root/chunk-5bmx46mc.js"),
  ze = 1000,
  We = 300,
  qe = 5000;

function He(s, n, a) {
  if (a === 0) return !1;
  return Boolean(s.recurring && !s.permanent && n - s.createdAt >= a)
}
async function Je(s, n, a) {
  let T = iS(a),
    y = se(),
    c = new Set,
    h = new Set;
  for (let {
      createdBySessionId: F
    }
    of s)
    if (F !== void 0 && F !== n) h.add(F);
  if (await Promise.all(Array.from(h, async (F) => {
      if (lI(F) === null) return;
      if (await y.lstat(Me(T, `${F}.jsonl`)).then((W) => W.isFile(), (W) => {
          let B = k(W);
          if (B !== "ENOENT" && B !== "ENOTDIR") t(`[ScheduledTasks] could not look for a transcript of task creator ${F} (${B}); treating it as not found`);
          return !1
        })) c.add(F)
    })), c.size < h.size) t(`[ScheduledTasks] found no transcript in ${T} for ${h.size-c.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return c
}

function Nzr(s) {
  let {
    onFire: n,
    isLoading: a,
    assistantMode: T = !1,
    onFireTask: y,
    onMissed: c,
    dir: h,
    lockIdentity: F,
    getJitterConfig: z,
    isKilled: W,
    filter: B,
    getExtraTasks: V,
    leaseFileTasks: Q = () => !0
  } = s, A = h || F ? {
    dir: h,
    lockIdentity: F
  } : void 0, D = new ce, X = h !== void 0 ? F : K(), Y = new Set, Z = null, ee = [], re = [], E = new Map, le = new Set, q = new Set, R = null, J = null, O = null, N = null, L = !1, x = !1, ue = new Set, fe = "", te = new Map;

  function Pe(r, S) {
    if (!Ia(r)) return te.delete(r), !0;
    if (S === void 0) return !1;
    let C = Date.now(),
      w = te.get(r);
    if (!w || C - w.at >= 60000) w = {
      at: C,
      token: YWe(r)
    }, te.set(r, w);
    return w.token !== void 0 && w.token !== S
  }

  function he(r) {
    return pGe(r, gZe())
  }

  function xe(r) {
    if (r.createdInProject !== void 0) return he(r.createdInProject) === fe;
    return r.createdBySessionId !== void 0 && ue.has(r.createdBySessionId)
  }

  function ke(r) {
    if (r.createdBySessionId === void 0) return x;
    if (r.createdBySessionId === X) return !0;
    if (Y.has(r.createdBySessionId) && r.createdByPid === process.pid && (r.createdByProcStart === void 0 ? r.createdAt >= performance.timeOrigin : r.createdByProcStart === Fle.token)) return !0;
    return x && xe(r) && (r.createdByPid === void 0 || Pe(r.createdByPid, r.createdByProcStart))
  }
  async function me(r) {
    let S = svo(h) ? [] : await Ztn(h),
      C = V ? await V().catch((d) => {
        if (ea().claim("cron_extra_tasks_load_bad")) m("routine_register_trigger", "extra_tasks_load_failed");
        return t(`[ScheduledTasks] getExtraTasks failed: ${d}`), []
      }) : [],
      w = h ?? Qr(),
      b = await Je(S.filter((d) => d.createdInProject === void 0), X, w);
    if (L) return;
    if (ee = S, re = C, ue = b, fe = he(w), !r) return;
    let e = !1;
    for (let d of S)
      if (X !== void 0 && d.createdBySessionId === X && d.createdByPid !== process.pid) d.createdByPid = process.pid, d.createdByProcStart = Hle(), e = !0;
    if (e) await Xjn(S, h).catch((d) => t(`[ScheduledTasks] failed to refresh task pids: ${d}`));
    let j = Date.now(),
      I = UPs(S, j).filter((d) => !d.recurring && !le.has(d.id) && (!B || B(d)) && ke(d));
    if (I.length > 0) {
      for (let d of I) le.add(d.id), E.set(d.id, 1 / 0);
      i("tengu_scheduled_task_missed", {
        count: I.length,
        taskIds: ojt(I.map((d) => d.id))
      });
      try {
        if (c) c(I);
        else n(Ke(I))
      } catch (d) {
        t(`[ScheduledTasks] could not surface ${I.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, {
          level: "error"
        }), l(Ee(d, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return
      }
      wve(I.map((d) => d.id), h).catch((d) => t(`[ScheduledTasks] failed to remove missed tasks: ${d}`)), t(`[ScheduledTasks] surfaced ${I.length} missed one-shot task(s)`)
    }
  }

  function ne() {
    if (W?.()) return;
    if (x && !Q()) x = !1, M(D, A);
    if (a() && !T) return;
    let r = Date.now(),
      S = new Set,
      C = [],
      w = z?.() ?? Z6;

    function b(e, j) {
      if (B && !B(e)) return;
      if (S.add(e.id), q.has(e.id)) return;
      let I = E.get(e.id);
      if (I === void 0) {
        let P = Wut(e, w);
        if (P === null) m("cron_task_fire", "next_fire_unresolvable", {
          recurring: e.recurring ?? !1
        });
        I = P ?? 1 / 0, E.set(e.id, I), t(`[ScheduledTasks] scheduled ${e.id} for ${I===1/0?"never":new Date(I).toISOString()}`)
      }
      if (r < I) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring?" (recurring)":""}`);
      let d = e.id.startsWith("routine:") ? an(e.id) : ye(e.id);
      i("tengu_scheduled_task_fire", {
        recurring: e.recurring ?? !1,
        taskId: d,
        autonomousLoopDefault: be.isLoopDefaultSentinel(e.prompt)
      });
      let ge = {
        recurring: e.recurring ?? !1,
        permanent: e.permanent ?? !1
      };
      try {
        if (y) y(e);
        else n(e.prompt);
        g("cron_task_fire", ge)
      } catch (P) {
        let U = !j && !e.recurring;
        if (U) E.set(e.id, 1 / 0);
        if (t(U ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, {
            level: "error"
          }), m("cron_task_fire", "handler_threw", ge), l(Ee(P, "scheduled task fire handler threw (message not reported: it may contain user text)")), U) return
      }
      let Se = He(e, r, w.recurringMaxAgeMs);
      if (Se) {
        let P = Math.floor((r - e.createdAt) / 1000 / 60 / 60);
        t(`[ScheduledTasks] recurring task ${e.id} aged out (${P}h since creation), deleting after final fire`), i("tengu_scheduled_task_expired", {
          taskId: d,
          ageHours: P
        })
      }
      if (e.recurring && !Se) {
        let P = tnn(e.cron, r, e.id, w);
        if (P === null) p("cron_task_fire", "reschedule_unresolvable");
        let U = P ?? 1 / 0;
        if (E.set(e.id, U), !j) C.push(e.id)
      } else if (j) Q5([e.id]), E.delete(e.id);
      else q.add(e.id), E.set(e.id, 1 / 0), wve([e.id], h).catch((P) => t(`[ScheduledTasks] failed to remove task ${e.id}: ${P}`)).finally(() => q.delete(e.id))
    }
    for (let e of ee)
      if (ke(e)) b(e, !1);
    if (C.length > 0) {
      for (let e of C) q.add(e);
      $Ps(C, r, h).catch((e) => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of C) q.delete(e)
      })
    }
    if (h === void 0)
      for (let e of Tm().slice()) {
        b(e, !0);
        let j = E.get(e.id);
        e.nextFireAt = j === 1 / 0 ? void 0 : j
      }
    for (let e of re) b(e, !0);
    if (S.size === 0) {
      E.clear();
      return
    }
    for (let e of E.keys())
      if (!S.has(e)) E.delete(e)
  }
  async function oe() {
    if (L) return;
    R?.(), R = null;
    let {
      default: r
    } = await import("B:/~BUN/root/chunk-a1nytbrf.js");
    if (L) return;
    if (x = Q() ? await de(D, A).catch(() => !1) : !1, L) {
      if (x) x = !1, M(D, A);
      return
    }
    if (!x) O = setInterval(() => {
      if (!Q()) return;
      de(D, A).then((C) => {
        if (L) {
          if (C) M(D, A);
          return
        }
        if (C) {
          if (x = !0, O) clearInterval(O), O = null
        }
      }).catch((C) => t(String(C), {
        level: "error"
      }))
    }, qe), O.unref?.();
    me(!0).then(ne);
    let S = ZPe(h);
    N = pe(() => r.watch(S, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: {
        stabilityThreshold: We
      },
      ignorePermissionErrors: !0
    })), J = setInterval(ne, ze), J.unref?.()
  }

  function pe(r) {
    let S = r();
    S.on("error", (w) => t(`[ScheduledTasks] watcher error: ${w}`, {
      level: "warn"
    }));
    let C = () => {
      if (L || N !== S) return;
      N = pe(r), N.once("ready", () => void me(!1)), S.close().catch((w) => t(`[ScheduledTasks] watcher close failed: ${w}`, {
        level: "warn"
      }))
    };
    return S.on("add", C), S.on("change", C), S.on("unlink", () => {
      if (!L) {
        ee = [];
        let w = new Set(re.map((b) => b.id));
        if (h === void 0)
          for (let b of Tm()) w.add(b.id);
        for (let b of E.keys())
          if (!w.has(b)) E.delete(b)
      }
    }), S
  }
  return {
    start() {
      if (L = !1, R?.(), R = null, h !== void 0) {
        t(`[ScheduledTasks] scheduler start() \u2014 dir=${h}, hasTasks=${BCr(h)}`), oe();
        return
      }
      if (t(`[ScheduledTasks] scheduler start() \u2014 enabled=${WJn()}, hasTasks=${BCr()}`), Y.add(K()), Z ??= Hc((r) => {
          Y.add(r)
        }), !WJn() && (T || V !== void 0 || BCr())) s1(!0);
      if (WJn()) {
        oe();
        return
      }
      R = X2o(() => void oe())
    },
    stop() {
      if (L = !0, R?.(), R = null, Z?.(), Z = null, J) clearInterval(J), J = null;
      if (O) clearInterval(O), O = null;
      if (N?.close(), N = null, x) x = !1, M(D, A)
    },
    getNextFireTime() {
      let r = 1 / 0;
      for (let S of E.values())
        if (S < r) r = S;
      return r === 1 / 0 ? null : r
    },
    checkNow() {
      ne()
    }
  }
}

function Ke(s) {
  let n = s.length > 1,
    a = `The following one-shot scheduled task${n?"s were":" was"} missed while Claude was not running. ${n?"They have":"It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${n?"these prompts":"this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${n?"each one":"it"} now. Only execute if the user confirms.`,
    T = s.map((y) => `${`[${QR(y.cron)}, created ${new Date(y.createdAt).toLocaleString()}]`}
${_Jn(y.prompt)}`);
  return `${a}

${T.join(`

`)}`
}

function Ee(s, n) {
  let a = () => Ye(Error("scheduled task handler threw (message not reported: it may contain user text)", {
    cause: s
  }), n);
  try {
    let T = Ye(H(s), n);
    return d1(T) === n ? T : a()
  } catch {
    return a()
  }
}
export {
  Nzr
};
