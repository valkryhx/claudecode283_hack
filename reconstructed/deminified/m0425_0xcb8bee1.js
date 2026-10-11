// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { P, l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { BN } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { M_, _J } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { Jo, ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { LB, $V, U0t } from "B:/~BUN/root/chunk-5a1m1kxy.js";
import { Eu } from "B:/~BUN/root/chunk-y00rw36h.js";
import { Hu } from "B:/~BUN/root/chunk-ewjenbzd.js";
import { sJ as workload } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { XC } from "B:/~BUN/root/chunk-wp4rvaf5.js";
import { o, E, M, C, u, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
var hIe = 1048576;
async function dQe(s) {
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
  if (e.totalBytes > hIe) return {
    kind: "refused"
  };
  return {
    kind: "text",
    text: Buffer.from(e.value).toString("utf8")
  };
}
function Z(s) {
  return s.read([{
    key: Ae.state("daemon-config"),
    offset: 0,
    length: hIe + 1
  }]);
}
import { readFile as ne } from "fs/promises";
import { join as se } from "path";
import { readFile as ee, stat as te } from "fs/promises";
import { dirname as re } from "path";
async function D(s, r) {
  let e = s ?? XC(),
    n;
  if (H() && r !== void 0 && e === XC()) n = await oe(r, e);else try {
    let c = await te(e);
    if (!c.isFile() || c.size > hIe) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8");
  } catch (error) {
    if (!B(error)) throw error;
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(Jo(n));
  } catch {
    throw Error(`daemon.json is malformed: ${e}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}
async function oe(s, r) {
  let e = await dQe(s);
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
      throw Object.assign(new P(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
        cause: "cause" in e.error ? e.error.cause : e.error
      });
    case "threw":
      throw e.error;
  }
}
async function $_t(s, r, e) {
  let n = r ?? XC(),
    a = await D(n, e);
  if ((await s(a)) === !1) return;
  if (H() && e !== void 0 && n === XC()) {
    let m = await e.write(Ae.state("daemon-config"), b(a, null, 2) + `
`, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!m.ok) throw Object.assign(new P(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
      cause: "cause" in m.error ? m.error.cause : m.error
    });
    return;
  }
  await Qt().mkdir(re(n)), await Cn(n, b(a, null, 2) + `
`);
}
function ptr(s) {
  if (Array.isArray(s)) return s.filter(item => !!item && typeof item.dir === "string");
  if (s && typeof s.dir === "string") return [s];
  return [];
}
var ie = 1000,
  O = 10080,
  xje = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"],
  j = f(() => u({
    id: o().min(1),
    cron: o().refine(s => LB(s) !== null, {
      message: "invalid 5-field cron expression"
    }),
    prompt: o().min(1),
    directory: o().min(1),
    enabled: M().default(!0),
    permissionMode: z([...xje, BN]).transform(s => s === BN ? "default" : s).default("dontAsk"),
    model: o().optional(),
    runTimeoutMinutes: E().positive().max(O).default(30),
    maxQueued: E().int().positive().default(1)
  }).strict()),
  ftr = f(() => u({
    tasks: C(j()).default([]).refine(s => new Set(s.map(item => item.id)).size === s.length, {
      message: "task ids must be unique"
    }),
    maxConcurrent: E().int().positive().default(1)
  }).strict());
function N() {
  return se(Se(), "daemon.scheduled.status.json");
}
function L() {
  return Ae.state("scheduled-status");
}
async function ae(tasks, r) {
  let e = {
    workerPid: process.pid,
    workerProcStart: _J(),
    writtenAt: Date.now(),
    tasks: tasks
  };
  if (H() && r) {
    try {
      let n = await r.write(L(), b(e), {
        mode: 438 & ~process.umask()
      });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`);
    } catch (error) {
      t(`writeScheduledStatus: ${l(error)}`);
    }
    return;
  }
  try {
    await Cn(N(), b(e));
  } catch {}
}
async function E9r(s) {
  let r;
  if (H() && s !== void 0) {
    let a;
    try {
      a = await s.readText([L()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let c = a.value.items[0];
    if (!c.found) return null;
    r = c.value;
  } else try {
    r = await ne(N(), "utf8");
  } catch {
    return null;
  }
  let e = ct(r, !1);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0);
  } catch {
    return null;
  }
  if (!(await M_(n.workerPid, n.workerProcStart))) return null;
  return e;
}
var T9r = async (s, r, e, n, a) => {
  let {
      tasks: tasks_2,
      maxConcurrent: maxConcurrent
    } = ftr().parse(s),
    {
      initializeErrorLogSink: initializeErrorLogSink
    } = await import("B:/~BUN/root/chunk-pd2exn23.js"),
    {
      initializeAnalyticsSink: initializeAnalyticsSink
    } = await import("B:/~BUN/root/chunk-b3g73ft3.js");
  if (initializeErrorLogSink(), initializeAnalyticsSink(), !n.getAccessToken()) e("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1);
  let {
    awaitPolicyLimitsColdStart: awaitPolicyLimitsColdStart,
    stopPolicyLimits: stopPolicyLimits
  } = await import("B:/~BUN/root/chunk-mjxpcxa7.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => stopPolicyLimits(), {
    once: !0
  }), await awaitPolicyLimitsColdStart(), r.aborted) return;
  let {
    query: query
  } = await import("B:/~BUN/root/chunk-29sw1kqr.js");
  if (e(`scheduled worker started tasks=${tasks_2.length} maxConcurrent=${maxConcurrent}`), tasks_2.length === 0) {
    let d = setInterval(() => {}, 60000);
    await new Promise(i => {
      if (r.aborted) {
        i();
        return;
      }
      r.addEventListener("abort", () => i(), {
        once: !0
      });
    }), clearInterval(d);
    return;
  }
  let T = [],
    v = new Set(),
    S = null;
  function K(task) {
    let i = T.reduce((acc, item) => item.task.id === task.id ? acc + 1 : acc, 0);
    if (i >= task.maxQueued) {
      e(`task=${task.id} dropped (queue full: ${i}/${task.maxQueued})`);
      return;
    }
    T.push({
      task: task
    }), S?.(), S = null;
  }
  let _ = new Map(),
    F = new Set(),
    G = Date.now();
  function R() {
    let d = {};
    for (let i of tasks_2) {
      let lastFiredAt = _.get(i.id);
      d[i.id] = {
        running: F.has(i.id),
        ...(lastFiredAt !== void 0 && {
          lastFiredAt: lastFiredAt
        })
      };
    }
    ae(d, a);
  }
  R();
  function V(d) {
    let i = _.get(d.id) ?? G;
    return U0t(d.cron, i, d.id, $V);
  }
  let X = setInterval((d, i, p, k) => {
    let A = Date.now();
    for (let h of d) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= A) p.set(h.id, A), k(h);
    }
  }, ie, tasks_2, V, _, K);
  r.addEventListener("abort", () => {
    clearInterval(X);
    for (let d of v) d.abort();
    S?.(), S = null;
  });
  let x = new Set();
  async function Y(d) {
    let {
        task: task_2
      } = d,
      p = Eu();
    if (p) {
      e(`task=${task_2.id} refused: ${p}`);
      return;
    }
    let abortController = new AbortController();
    v.add(abortController), F.add(task_2.id), R();
    let A = setTimeout(w => w.abort(), Math.min(task_2.runTimeoutMinutes, O) * 60000, abortController);
    e(`task=${task_2.id} start cron='${task_2.cron}' dir='${task_2.directory}'`);
    let h = Hu({
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
      clearTimeout(A), v.delete(abortController), F.delete(task_2.id), R();
    }
  }
  while (!r.aborted) {
    while (x.size < maxConcurrent && T.length > 0 && !r.aborted) {
      let d = T.shift(),
        i = Y(d).finally(() => {
          x.delete(i), S?.(), S = null;
        });
      x.add(i);
    }
    if (r.aborted) break;
    if (T.length === 0 || x.size >= maxConcurrent) await new Promise(d => {
      S = d;
    });
  }
  await Promise.allSettled(Array.from(x));
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
function W(s, r) {
  let scheduled_2 = s.scheduled;
  if (Array.isArray(scheduled_2)) {
    let n = scheduled_2.slice();
    n[0] = r, s.scheduled = n;
  } else s.scheduled = r;
}
async function Pje(s, r, e) {
  return Or("daemon_scheduled_add", async () => {
    j().parse(s), await $_t(n => {
      let a = I(n),
        tasks_4 = a.tasks.filter(item => !(item && typeof item === "object" && item.id === s.id));
      tasks_4.push(s), W(n, {
        ...a,
        tasks: tasks_4
      });
    }, r, e);
  });
}
async function Ije(s, r, e) {
  return Or("daemon_scheduled_remove", async () => {
    let n = !1;
    return await $_t(a => {
      if (!("scheduled" in a)) return !1;
      let c = I(a),
        tasks_5 = c.tasks.filter(item => !(item && typeof item === "object" && item.id === s));
      if (tasks_5.length === c.tasks.length) return !1;
      if (tasks_5.length === 0) {
        let scheduled_3 = a.scheduled;
        if (Array.isArray(scheduled_3) && scheduled_3.length > 1) a.scheduled = scheduled_3.slice(1);else delete a.scheduled;
      } else W(a, {
        ...c,
        tasks: tasks_5
      });
      n = !0;
    }, r, e), n;
  });
}
async function uQe(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = I(e),
    a = [];
  for (let c of n.tasks) {
    let m = j().safeParse(c);
    if (m.success) a.push(m.data);
  }
  return a;
}
export { hIe, dQe, $_t, ptr, xje, ftr, E9r, T9r, Pje, Ije, uQe };