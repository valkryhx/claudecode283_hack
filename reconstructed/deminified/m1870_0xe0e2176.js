// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { eyn } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Y, kr, VY, _jt, U_, $2 } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { st, hQ, te, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { gt, b, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { WI, exe, VUe, gu } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { QRe, M_, _J } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { Ck, xge, sin, F0t, oPr, wjn, iin, Vae, UTo, $V, U0t, ain, BTo } from "B:/~BUN/root/chunk-5a1m1kxy.js";
import { eT, cj } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { o, E, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e, omt } from "B:/~BUN/root/chunk-batgyebn.js";
import { join as Ne } from "path";
import { mkdir as $e, readFile as Oe, unlink as Se, writeFile as ne } from "fs/promises";
import { dirname as Re, join as Te } from "path";
import { appendFile as Pe, mkdir as be, readFile as xe } from "fs/promises";
import { join as ke } from "path";
var Le = ["**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json"],
  pe = "# claude-code-runtime";
async function ge(n) {
  if (!Ga().claim(`claude_runtime_exclude_ensured:${n}`)) return;
  try {
    let r = await eT(n);
    if (!r) return;
    let a = (await cj(r)) ?? r,
      g = ke(a, "info", "exclude"),
      k = "";
    try {
      if (k = await xe(g, "utf-8"), k.includes(pe)) return;
    } catch (error) {
      if (v(error) !== "ENOENT") throw error;
      await be(ke(a, "info")).catch(B => {
        if (v(B) !== "EEXIST") throw B;
      });
    }
    let l = k && !k.endsWith(`
`) ? `
` : "",
      h = [pe, ...Le, ""].join(`
`);
    await Pe(g, l + h);
  } catch (error) {
    t(`ensureClaudeRuntimeFilesExcluded: ${error}`);
  }
}
var Ae = Te(".claude", "scheduled_tasks.lock"),
  Be = f(() => u({
    sessionId: o(),
    pid: E(),
    procStart: o().optional(),
    acquiredAt: E()
  }));
function J(n) {
  return Te(n ?? kr(), Ae);
}
async function we(n) {
  let r;
  try {
    r = await Oe(J(n), "utf8");
  } catch {
    return;
  }
  let a = Be().safeParse(ct(r, !1));
  return a.success ? a.data : void 0;
}
async function ye(n, r) {
  let a = J(r),
    g = b(n);
  try {
    return await ne(a, g, {
      flag: "wx"
    }), !0;
  } catch (error) {
    let l = v(error);
    if (l === "EEXIST") return !1;
    if (l === "ENOENT") {
      await $e(Re(a), {
        recursive: !0
      });
      try {
        return await ne(a, g, {
          flag: "wx"
        }), !0;
      } catch (error) {
        if (v(error) === "EEXIST") return !1;
        throw error;
      }
    }
    throw error;
  }
}
function re(n, r) {
  n.unregisterCleanup?.(), n.unregisterCleanup = gt(async () => {
    await K(n, r);
  });
}
async function oe(n, r) {
  let a = r?.dir;
  if (sin(a)) return !1;
  await ge(a ?? kr());
  let sessionId = r?.lockIdentity ?? Y(),
    k = {
      sessionId: sessionId,
      pid: process.pid,
      procStart: _J(),
      acquiredAt: Date.now()
    };
  if (await ye(k, a)) return n.lastBlockedBy = void 0, re(n, r), t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), !0;
  let l = await we(a);
  if (l?.sessionId === sessionId) {
    if (l.pid !== process.pid) await ne(J(a), b(k)), re(n, r);
    return !0;
  }
  if (l && ua(l.pid) && (await M_(l.pid, l.procStart))) {
    if (n.lastBlockedBy !== l.sessionId) n.lastBlockedBy = l.sessionId, t(`[ScheduledTasks] scheduler lock held by session ${l.sessionId} (PID ${l.pid})`);
    return !1;
  }
  if (l) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${l.pid}`);
  if (await Se(J(a)).catch(() => {}), await ye(k, a)) return n.lastBlockedBy = void 0, re(n, r), !0;
  return !1;
}
async function K(n, r) {
  n.reset();
  let a = r?.dir,
    g = r?.lockIdentity ?? Y(),
    k = await we(a);
  if (!k || k.sessionId !== g) return;
  try {
    await Se(J(a)), t("[ScheduledTasks] released scheduler lock");
  } catch {}
}
class se {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.lastBlockedBy = void 0;
  }
}
var ve = import.meta.require("B:/~BUN/root/chunk-hjpb3cxt.js"),
  Ce = 1000,
  stabilityThreshold = 300,
  Me = 5000;
function ze(n, r, a) {
  if (a === 0) return !1;
  return Boolean(n.recurring && !n.permanent && r - n.createdAt >= a);
}
async function Ue(n, r, a) {
  let g = gu(a),
    k = ce(),
    l = new Set(),
    h = new Set();
  for (let {
    createdBySessionId: createdBySessionId
  } of n) if (createdBySessionId !== void 0 && createdBySessionId !== r) h.add(createdBySessionId);
  if (await Promise.all(Array.from(h, async w => {
    if (WI(w) === null) return;
    if (await k.lstat(Ne(g, `${w}.jsonl`)).then(j => j.isFile(), j => {
      let x = v(j);
      if (x !== "ENOENT" && x !== "ENOTDIR") t(`[ScheduledTasks] could not look for a transcript of task creator ${w} (${x}); treating it as not found`);
      return !1;
    })) l.add(w);
  })), l.size < h.size) t(`[ScheduledTasks] found no transcript in ${g} for ${h.size - l.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return l;
}
function MXn(n) {
  let {
      onFire: onFire,
      isLoading: isLoading,
      assistantMode = !1,
      onFireTask: onFireTask,
      onMissed: onMissed,
      dir: dir,
      lockIdentity: lockIdentity,
      getJitterConfig: getJitterConfig,
      isKilled: isKilled,
      filter: filter,
      getExtraTasks: getExtraTasks
    } = n,
    N = dir || lockIdentity ? {
      dir: dir,
      lockIdentity: lockIdentity
    } : void 0,
    D = new se(),
    W = dir !== void 0 ? lockIdentity : Y(),
    X = [],
    ie = [],
    I = new Map(),
    ae = new Set(),
    M = new Set(),
    L = null,
    z = null,
    O = null,
    A = null,
    R = !1,
    P = !1,
    de = new Set(),
    le = "",
    V = new Map();
  function Ee(s, y) {
    if (!ua(s)) return V.delete(s), !0;
    if (y === void 0) return !1;
    let at = Date.now(),
      C = V.get(s);
    if (!C || at - C.at >= 60000) C = {
      at: at,
      token: QRe(s)
    }, V.set(s, C);
    return C.token !== void 0 && C.token !== y;
  }
  function ue(s) {
    return exe(s, VUe());
  }
  function Fe(s) {
    if (s.createdInProject !== void 0) return ue(s.createdInProject) === le;
    return s.createdBySessionId !== void 0 && de.has(s.createdBySessionId);
  }
  function fe(s) {
    if (s.createdBySessionId === void 0) return P;
    if (s.createdBySessionId === W) return !0;
    return P && Fe(s) && (s.createdByPid === void 0 || Ee(s.createdByPid, s.createdByProcStart));
  }
  async function Q(s) {
    let y = oPr(dir) ? [] : await F0t(dir),
      S = getExtraTasks ? await getExtraTasks().catch(c => {
        if (Ga().claim("cron_extra_tasks_load_bad")) m("routine_register_trigger", "extra_tasks_load_failed");
        return t(`[ScheduledTasks] getExtraTasks failed: ${c}`), [];
      }) : [],
      C = dir ?? kr(),
      U = await Ue(y.filter(item => item.createdInProject === void 0), W, C);
    if (R) return;
    if (X = y, ie = S, de = U, le = ue(C), !s) return;
    let e = !1;
    for (let c of y) if (W !== void 0 && c.createdBySessionId === W && c.createdByPid !== process.pid) c.createdByPid = process.pid, c.createdByProcStart = _J(), e = !0;
    if (e) await iin(y, dir).catch(c => t(`[ScheduledTasks] failed to refresh task pids: ${c}`));
    let q = Date.now(),
      T = BTo(y, q).filter(item => !item.recurring && !ae.has(item.id) && (!filter || filter(item)) && fe(item));
    if (T.length > 0) {
      for (let c of T) ae.add(c.id), I.set(c.id, 1 / 0);
      i("tengu_scheduled_task_missed", {
        count: T.length,
        taskIds: omt(T.map(item => item.id))
      });
      try {
        if (onMissed) onMissed(T);else onFire(qe(T));
      } catch (error) {
        t(`[ScheduledTasks] could not surface ${T.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, {
          level: "error"
        }), d(Ie(error, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return;
      }
      Vae(T.map(item => item.id), dir).catch(c => t(`[ScheduledTasks] failed to remove missed tasks: ${c}`)), t(`[ScheduledTasks] surfaced ${T.length} missed one-shot task(s)`);
    }
  }
  function Z() {
    if (isKilled?.()) return;
    if (isLoading() && !assistantMode) return;
    let s = Date.now(),
      y = new Set(),
      S = [],
      C = getJitterConfig?.() ?? $V;
    function U(e, q) {
      if (filter && !filter(e)) return;
      if (y.add(e.id), M.has(e.id)) return;
      let T = I.get(e.id);
      if (T === void 0) {
        let F = e.recurring ? U0t(e.cron, e.lastFiredAt ?? e.createdAt, e.id, C) : ain(e.cron, e.createdAt, e.id, C);
        if (F === null) m("cron_task_fire", "next_fire_unresolvable", {
          recurring: e.recurring ?? !1
        });
        T = F ?? 1 / 0, I.set(e.id, T), t(`[ScheduledTasks] scheduled ${e.id} for ${T === 1 / 0 ? "never" : new Date(T).toISOString()}`);
      }
      if (s < T) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
      let taskId = e.id.startsWith("routine:") ? pn(e.id) : _e(e.id);
      i("tengu_scheduled_task_fire", {
        recurring: e.recurring ?? !1,
        taskId: taskId,
        autonomousLoopDefault: ve.isLoopDefaultSentinel(e.prompt)
      });
      let me = {
        recurring: e.recurring ?? !1,
        permanent: e.permanent ?? !1
      };
      try {
        if (onFireTask) onFireTask(e);else onFire(e.prompt);
        _("cron_task_fire", me);
      } catch (error) {
        let H = !q && !e.recurring;
        if (H) I.set(e.id, 1 / 0);
        if (t(H ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, {
          level: "error"
        }), m("cron_task_fire", "handler_threw", me), d(Ie(error, "scheduled task fire handler threw (message not reported: it may contain user text)")), H) return;
      }
      let he = ze(e, s, C.recurringMaxAgeMs);
      if (he) {
        let ageHours = Math.floor((s - e.createdAt) / 1000 / 60 / 60);
        t(`[ScheduledTasks] recurring task ${e.id} aged out (${ageHours}h since creation), deleting after final fire`), i("tengu_scheduled_task_expired", {
          taskId: taskId,
          ageHours: ageHours
        });
      }
      if (e.recurring && !he) {
        let F = U0t(e.cron, s, e.id, C);
        if (F === null) p("cron_task_fire", "reschedule_unresolvable");
        let H = F ?? 1 / 0;
        if (I.set(e.id, H), !q) S.push(e.id);
      } else if (q) $2([e.id]), I.delete(e.id);else M.add(e.id), I.set(e.id, 1 / 0), Vae([e.id], dir).catch(F => t(`[ScheduledTasks] failed to remove task ${e.id}: ${F}`)).finally(() => M.delete(e.id));
    }
    for (let e of X) if (fe(e)) U(e, !1);
    if (S.length > 0) {
      for (let e of S) M.add(e);
      UTo(S, s, dir).catch(e => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of S) M.delete(e);
      });
    }
    if (dir === void 0) for (let e of U_().slice()) U(e, !0);
    for (let e of ie) U(e, !0);
    if (y.size === 0) {
      I.clear();
      return;
    }
    for (let e of I.keys()) if (!y.has(e)) I.delete(e);
  }
  async function ee() {
    if (R) return;
    if (L) clearInterval(L), L = null;
    let {
      default: s
    } = await import("B:/~BUN/root/chunk-9xg95pb8.js");
    if (R) return;
    if (P = await oe(D, N).catch(() => !1), R) {
      if (P) P = !1, K(D, N);
      return;
    }
    if (!P) O = setInterval(() => {
      oe(D, N).then(S => {
        if (R) {
          if (S) K(D, N);
          return;
        }
        if (S) {
          if (P = !0, O) clearInterval(O), O = null;
        }
      }).catch(S => t(String(S), {
        level: "error"
      }));
    }, Me), O.unref?.();
    Q(!0).then(Z);
    let y = xge(dir);
    A = s.watch(y, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: {
        stabilityThreshold: stabilityThreshold
      },
      ignorePermissionErrors: !0
    }), A.on("error", S => t(`[ScheduledTasks] watcher error: ${S}`, {
      level: "warn"
    })), A.on("add", () => void Q(!1)), A.on("change", () => void Q(!1)), A.on("unlink", () => {
      if (!R) X = [], I.clear();
    }), z = setInterval(Z, Ce), z.unref?.();
  }
  return {
    start() {
      if (R = !1, dir !== void 0) {
        t(`[ScheduledTasks] scheduler start() \u2014 dir=${dir}, hasTasks=${wjn(dir)}`), ee();
        return;
      }
      if (t(`[ScheduledTasks] scheduler start() \u2014 enabled=${_jt()}, hasTasks=${wjn()}`), !_jt() && (assistantMode || getExtraTasks !== void 0 || wjn())) VY(!0);
      if (_jt()) {
        ee();
        return;
      }
      L = setInterval(s => {
        if (_jt()) s();
      }, Ce, ee), L.unref?.();
    },
    stop() {
      if (R = !0, L) clearInterval(L), L = null;
      if (z) clearInterval(z), z = null;
      if (O) clearInterval(O), O = null;
      if (A?.close(), A = null, P) P = !1, K(D, N);
    },
    getNextFireTime() {
      let s = 1 / 0;
      for (let y of I.values()) if (y < s) s = y;
      return s === 1 / 0 ? null : s;
    },
    checkNow() {
      Z();
    }
  };
}
function qe(n) {
  let r = n.length > 1,
    a = `The following one-shot scheduled task${r ? "s were" : " was"} missed while Claude was not running. ${r ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${r ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${r ? "each one" : "it"} now. Only execute if the user confirms.`,
    g = n.map(item => `${`[${Ck(item.cron)}, created ${new Date(item.createdAt).toLocaleString()}]`}
${eyn(item.prompt)}`);
  return `${a}

${g.join(`

`)}`;
}
function Ie(cause, r) {
  let a = () => st(Error("scheduled task handler threw (message not reported: it may contain user text)", {
    cause: cause
  }), r);
  try {
    let g = st(te(cause), r);
    return hQ(g) === r ? g : a();
  } catch {
    return a();
  }
}
export { MXn };