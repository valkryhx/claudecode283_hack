// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { c$ } from "B:/~BUN/root/chunk-8z3a373v.js";
import { ek, Hle } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { Bo, pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { nK, Z6, tnn } from "B:/~BUN/root/chunk-89m6ef17.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Of } from "B:/~BUN/root/chunk-7qeqkjr8.js";
import { Bc } from "B:/~BUN/root/chunk-c0j3f8cc.js";
import { Sle as workload } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { HI } from "B:/~BUN/root/chunk-szr0ry4b.js";
import { o, v, M, T, u, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { readFile as ee, stat as te } from "fs/promises";
import { dirname as re } from "path";
var xVe = 1048576;
async function Svt(s) {
  let r;
  try {
    r = await Z(s);
  } catch (error) {
    return {
      kind: "threw",
      error: error
    };
  }
  if (!r.ok) {
    let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
    if (n === "ENXIO" || n === "EISDIR" || n === "EFBIG") return {
      kind: "refused"
    };
    return {
      kind: "failed",
      error: r.error
    };
  }
  let e = r.value.items[0];
  if (!e.found) return {
    kind: "absent"
  };
  if (e.totalBytes > xVe) return {
    kind: "refused"
  };
  return {
    kind: "text",
    text: Buffer.from(e.value).toString("utf8")
  };
}
function Z(s) {
  return s.read([{
    key: Be.state("daemon-config"),
    offset: 0,
    length: xVe + 1
  }]);
}
async function D(s, r) {
  let e = s ?? HI(),
    n;
  if (W() && r !== void 0 && e === HI()) n = await oe(r, e);else try {
    let l = await te(e);
    if (!l.isFile() || l.size > xVe) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8");
  } catch (error) {
    if (!G(error)) throw error;
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(Bo(n));
  } catch {
    throw Error(`daemon.json is malformed: ${e}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}
async function oe(s, r) {
  let e = await Svt(s);
  switch (e.kind) {
    case "text":
      return e.text;
    case "absent":
      return;
    case "refused":
      {
        let n = `${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
        throw Error(n);
      }
    case "failed":
      throw Object.assign(new x(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
        cause: "cause" in e.error ? e.error.cause : e.error
      });
    case "threw":
      throw e.error;
  }
}
async function _2t(s, r, e) {
  let n = r ?? HI(),
    a = await D(n, e);
  if ((await s(a)) === !1) return;
  if (W() && e !== void 0 && n === HI()) {
    let m = await e.write(Be.state("daemon-config"), _(a, null, 2) + `
`, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!m.ok) throw Object.assign(new x(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
      cause: "cause" in m.error ? m.error.cause : m.error
    });
    return;
  }
  await gn().mkdir(re(n)), await An(n, _(a, null, 2) + `
`);
}
function aKr(s) {
  if (Array.isArray(s)) return s.filter(item => !!item && typeof item.dir === "string");
  if (s && typeof s.dir === "string") return [s];
  return [];
}
import { readFile as ne } from "fs/promises";
import { join as se } from "path";
var ie = 1000,
  O = 10080,
  int = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"],
  j = f(() => u({
    id: o().min(1),
    cron: o().refine(s => nK(s) !== null, {
      message: "invalid 5-field cron expression"
    }),
    prompt: o().min(1),
    directory: o().min(1),
    enabled: M().default(!0),
    permissionMode: U([...int, c$]).transform(s => s === c$ ? "default" : s).default("dontAsk"),
    model: o().optional(),
    runTimeoutMinutes: v().positive().max(O).default(30),
    maxQueued: v().int().positive().default(1)
  }).strict()),
  lKr = f(() => u({
    tasks: T(j()).default([]).refine(s => new Set(s.map(item => item.id)).size === s.length, {
      message: "task ids must be unique"
    }),
    maxConcurrent: v().int().positive().default(1)
  }).strict());
function B() {
  return se(Pe(), "daemon.scheduled.status.json");
}
function z() {
  return Be.state("scheduled-status");
}
async function ae(tasks, r) {
  let e = {
    workerPid: process.pid,
    workerProcStart: Hle(),
    writtenAt: Date.now(),
    tasks: tasks
  };
  if (W() && r) {
    try {
      let n = await r.write(z(), _(e), {
        mode: 438 & ~process.umask()
      });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`);
    } catch (error) {
      t(`writeScheduledStatus: ${d(error)}`);
    }
    return;
  }
  try {
    await An(B(), _(e));
  } catch {}
}
async function $5o(s) {
  let r;
  if (W() && s !== void 0) {
    let a;
    try {
      a = await s.readText([z()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let l = a.value.items[0];
    if (!l.found) return null;
    r = l.value;
  } else try {
    r = await ne(B(), "utf8");
  } catch {
    return null;
  }
  let e = pt(r, !1);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0);
  } catch {
    return null;
  }
  if (!(await ek(n.workerPid, n.workerProcStart))) return null;
  return e;
}
var U5o = async (s, r, e, n, a) => {
  let {
      tasks: tasks_2,
      maxConcurrent: maxConcurrent
    } = lKr().parse(s),
    {
      initializeErrorLogSink: initializeErrorLogSink
    } = await import("B:/~BUN/root/chunk-tzpwhh2w.js"),
    {
      initializeAnalyticsSink: initializeAnalyticsSink
    } = await import("B:/~BUN/root/chunk-hb1d7xvw.js");
  if (initializeErrorLogSink(), initializeAnalyticsSink(), !n.getAccessToken()) e("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1);
  let {
    awaitPolicyLimitsColdStart: awaitPolicyLimitsColdStart,
    stopPolicyLimits: stopPolicyLimits
  } = await import("B:/~BUN/root/chunk-v3zcvmws.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => stopPolicyLimits(), {
    once: !0
  }), await awaitPolicyLimitsColdStart(), r.aborted) return;
  let {
    query: query
  } = await import("B:/~BUN/root/chunk-s6w7tj2h.js");
  if (e(`scheduled worker started tasks=${tasks_2.length} maxConcurrent=${maxConcurrent}`), tasks_2.length === 0) {
    let c = setInterval(() => {}, 60000);
    await new Promise(i => {
      if (r.aborted) {
        i();
        return;
      }
      r.addEventListener("abort", () => i(), {
        once: !0
      });
    }), clearInterval(c);
    return;
  }
  let b = [],
    A = new Set(),
    S = null;
  function J(task) {
    let i = b.reduce((acc, item) => item.task.id === task.id ? acc + 1 : acc, 0);
    if (i >= task.maxQueued) {
      e(`task=${task.id} dropped (queue full: ${i}/${task.maxQueued})`);
      return;
    }
    b.push({
      task: task
    }), S?.(), S = null;
  }
  let C = new Map(),
    F = new Set(),
    K = Date.now();
  function R() {
    let c = {};
    for (let i of tasks_2) {
      let lastFiredAt = C.get(i.id);
      c[i.id] = {
        running: F.has(i.id),
        ...(lastFiredAt !== void 0 && {
          lastFiredAt: lastFiredAt
        })
      };
    }
    ae(c, a);
  }
  R();
  function V(c) {
    let i = C.get(c.id) ?? K;
    return tnn(c.cron, i, c.id, Z6);
  }
  let X = setInterval((c, i, p, k) => {
    let P = Date.now();
    for (let h of c) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= P) p.set(h.id, P), k(h);
    }
  }, ie, tasks_2, V, C, J);
  r.addEventListener("abort", () => {
    clearInterval(X);
    for (let c of A) c.abort();
    S?.(), S = null;
  });
  let E = new Set();
  async function Y(c) {
    let {
        task: task_2
      } = c,
      p = Of();
    if (p) {
      e(`task=${task_2.id} refused: ${p}`);
      return;
    }
    let abortController = new AbortController();
    A.add(abortController), F.add(task_2.id), R();
    let P = setTimeout(w => w.abort(), Math.min(task_2.runTimeoutMinutes, O) * 60000, abortController);
    e(`task=${task_2.id} start cron='${task_2.cron}' dir='${task_2.directory}'`);
    let h = Bc({
      pinToCurrentBinary: !0
    });
    try {
      let w = query({
        prompt: task_2.prompt,
        options: {
          cwd: task_2.directory,
          permissionMode: task_2.permissionMode,
          ...(task_2.permissionMode === "bypassPermissions" && {
            allowDangerouslySkipPermissions: !0
          }),
          ...(task_2.model && {
            model: task_2.model
          }),
          systemPrompt: {
            type: "preset",
            preset: "claude_code"
          },
          settingSources: ["user", "project", "local"],
          pathToClaudeCodeExecutable: h.cmd,
          executableArgs: h.prefixArgs,
          abortController: abortController,
          stderr: g => e(`[${task_2.id}] ${g.trimEnd()}`),
          workload: workload
        }
      });
      for await (let g of w) if (g.type === "result") e(`task=${task_2.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`);
    } catch (error) {
      e(`task=${task_2.id} threw: ${error}`);
    } finally {
      clearTimeout(P), A.delete(abortController), F.delete(task_2.id), R();
    }
  }
  while (!r.aborted) {
    while (E.size < maxConcurrent && b.length > 0 && !r.aborted) {
      let c = b.shift(),
        i = Y(c).finally(() => {
          E.delete(i), S?.(), S = null;
        });
      E.add(i);
    }
    if (r.aborted) break;
    if (b.length === 0 || E.size >= maxConcurrent) await new Promise(c => {
      S = c;
    });
  }
  await Promise.allSettled(Array.from(E));
};
function I(s) {
  let scheduled = s.scheduled,
    e = {};
  if (Array.isArray(scheduled) && scheduled.length > 0 && typeof scheduled[0] === "object") e = scheduled[0] ?? {};else if (scheduled && typeof scheduled === "object" && !Array.isArray(scheduled)) e = scheduled;
  let tasks_3 = Array.isArray(e.tasks) ? e.tasks : [];
  return {
    ...e,
    tasks: tasks_3
  };
}
function N(s, r) {
  let scheduled_2 = s.scheduled;
  if (Array.isArray(scheduled_2)) {
    let n = scheduled_2.slice();
    n[0] = r, s.scheduled = n;
  } else s.scheduled = r;
}
async function ant(s, r, e) {
  return po("daemon_scheduled_add", async () => {
    j().parse(s), await _2t(n => {
      let a = I(n),
        tasks_4 = a.tasks.filter(item => !(item && typeof item === "object" && item.id === s.id));
      tasks_4.push(s), N(n, {
        ...a,
        tasks: tasks_4
      });
    }, r, e);
  });
}
async function lnt(s, r, e) {
  return po("daemon_scheduled_remove", async () => {
    let n = !1;
    return await _2t(a => {
      if (!("scheduled" in a)) return !1;
      let l = I(a),
        tasks_5 = l.tasks.filter(item => !(item && typeof item === "object" && item.id === s));
      if (tasks_5.length === l.tasks.length) return !1;
      if (tasks_5.length === 0) {
        let scheduled_3 = a.scheduled;
        if (Array.isArray(scheduled_3) && scheduled_3.length > 1) a.scheduled = scheduled_3.slice(1);else delete a.scheduled;
      } else N(a, {
        ...l,
        tasks: tasks_5
      });
      n = !0;
    }, r, e), n;
  });
}
async function wvt(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = I(e),
    a = [];
  for (let l of n.tasks) {
    let m = j().safeParse(l);
    if (m.success) a.push(m.data);
  }
  return a;
}
export { xVe, Svt, _2t, aKr, int, lKr, $5o, U5o, ant, lnt, wvt };