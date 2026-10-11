// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  P,
  l,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  BN
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  M_,
  _J
} from "B:/~BUN/root/chunk-83yxmdy5.js";
import {
  Jo,
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  LB,
  $V,
  U0t
} from "B:/~BUN/root/chunk-5a1m1kxy.js";
import {
  Eu
} from "B:/~BUN/root/chunk-y00rw36h.js";
import {
  Hu
} from "B:/~BUN/root/chunk-ewjenbzd.js";
import {
  sJ
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  XC
} from "B:/~BUN/root/chunk-wp4rvaf5.js";
import {
  o,
  E,
  M,
  C,
  u,
  z
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var hIe = 1048576;
async function dQe(s) {
  let r;
  try {
    r = await Z(s)
  } catch (n) {
    return {
      kind: "threw",
      error: n
    }
  }
  if (!r.ok) {
    let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
    if (n === "ENXIO" || n === "EISDIR" || n === "EFBIG") return {
      kind: "refused"
    };
    return {
      kind: "failed",
      error: r.error
    }
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
  }
}

function Z(s) {
  return s.read([{
    key: Ae.state("daemon-config"),
    offset: 0,
    length: hIe + 1
  }])
}
import {
  readFile as ne
} from "fs/promises";
import {
  join as se
} from "path";
import {
  readFile as ee,
  stat as te
} from "fs/promises";
import {
  dirname as re
} from "path";
async function D(s, r) {
  let e = s ?? XC(),
    n;
  if (H() && r !== void 0 && e === XC()) n = await oe(r, e);
  else try {
    let c = await te(e);
    if (!c.isFile() || c.size > hIe) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8")
  } catch (c) {
    if (!B(c)) throw c
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(Jo(n))
  } catch {
    throw Error(`daemon.json is malformed: ${e}`)
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {}
}
async function oe(s, r) {
  let e = await dQe(s);
  switch (e.kind) {
    case "text":
      return e.text;
    case "absent":
      return;
    case "refused": {
      let n = `${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
      throw Error(n)
    }
    case "failed":
      throw Object.assign(new P(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
        cause: "cause" in e.error ? e.error.cause : e.error
      });
    case "threw":
      throw e.error
  }
}
async function $_t(s, r, e) {
  let n = r ?? XC(),
    a = await D(n, e);
  if (await s(a) === !1) return;
  if (H() && e !== void 0 && n === XC()) {
    let m = await e.write(Ae.state("daemon-config"), b(a, null, 2) + `
`, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!m.ok) throw Object.assign(new P(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
      cause: "cause" in m.error ? m.error.cause : m.error
    });
    return
  }
  await Qt().mkdir(re(n)), await Cn(n, b(a, null, 2) + `
`)
}

function ptr(s) {
  if (Array.isArray(s)) return s.filter((r) => !!r && typeof r.dir === "string");
  if (s && typeof s.dir === "string") return [s];
  return []
}
var ie = 1000,
  O = 10080,
  xje = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"],
  j = f(() => u({
    id: o().min(1),
    cron: o().refine((s) => LB(s) !== null, {
      message: "invalid 5-field cron expression"
    }),
    prompt: o().min(1),
    directory: o().min(1),
    enabled: M().default(!0),
    permissionMode: z([...xje, BN]).transform((s) => s === BN ? "default" : s).default("dontAsk"),
    model: o().optional(),
    runTimeoutMinutes: E().positive().max(O).default(30),
    maxQueued: E().int().positive().default(1)
  }).strict()),
  ftr = f(() => u({
    tasks: C(j()).default([]).refine((s) => new Set(s.map((r) => r.id)).size === s.length, {
      message: "task ids must be unique"
    }),
    maxConcurrent: E().int().positive().default(1)
  }).strict());

function N() {
  return se(Se(), "daemon.scheduled.status.json")
}

function L() {
  return Ae.state("scheduled-status")
}
async function ae(s, r) {
  let e = {
    workerPid: process.pid,
    workerProcStart: _J(),
    writtenAt: Date.now(),
    tasks: s
  };
  if (H() && r) {
    try {
      let n = await r.write(L(), b(e), {
        mode: 438 & ~process.umask()
      });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`)
    } catch (n) {
      t(`writeScheduledStatus: ${l(n)}`)
    }
    return
  }
  try {
    await Cn(N(), b(e))
  } catch {}
}
async function E9r(s) {
  let r;
  if (H() && s !== void 0) {
    let a;
    try {
      a = await s.readText([L()])
    } catch {
      return null
    }
    if (!a.ok) return null;
    let c = a.value.items[0];
    if (!c.found) return null;
    r = c.value
  } else try {
    r = await ne(N(), "utf8")
  } catch {
    return null
  }
  let e = ct(r, !1);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0)
  } catch {
    return null
  }
  if (!await M_(n.workerPid, n.workerProcStart)) return null;
  return e
}
var T9r = async (s, r, e, n, a) => {
  let {
    tasks: c,
    maxConcurrent: m
  } = ftr().parse(s), {
    initializeErrorLogSink: y
  } = await import("B:/~BUN/root/chunk-pd2exn23.js"), {
    initializeAnalyticsSink: q
  } = await import("B:/~BUN/root/chunk-b3g73ft3.js");
  if (y(), q(), !n.getAccessToken()) e("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1);
  let {
    awaitPolicyLimitsColdStart: Q,
    stopPolicyLimits: U
  } = await import("B:/~BUN/root/chunk-mjxpcxa7.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => U(), {
      once: !0
    }), await Q(), r.aborted) return;
  let {
    query: J
  } = await import("B:/~BUN/root/chunk-29sw1kqr.js");
  if (e(`scheduled worker started tasks=${c.length} maxConcurrent=${m}`), c.length === 0) {
    let d = setInterval(() => {}, 60000);
    await new Promise((i) => {
      if (r.aborted) {
        i();
        return
      }
      r.addEventListener("abort", () => i(), {
        once: !0
      })
    }), clearInterval(d);
    return
  }
  let T = [],
    v = new Set,
    S = null;

  function K(d) {
    let i = T.reduce((p, k) => k.task.id === d.id ? p + 1 : p, 0);
    if (i >= d.maxQueued) {
      e(`task=${d.id} dropped (queue full: ${i}/${d.maxQueued})`);
      return
    }
    T.push({
      task: d
    }), S?.(), S = null
  }
  let _ = new Map,
    F = new Set,
    G = Date.now();

  function R() {
    let d = {};
    for (let i of c) {
      let p = _.get(i.id);
      d[i.id] = {
        running: F.has(i.id),
        ...p !== void 0 && {
          lastFiredAt: p
        }
      }
    }
    ae(d, a)
  }
  R();

  function V(d) {
    let i = _.get(d.id) ?? G;
    return U0t(d.cron, i, d.id, $V)
  }
  let X = setInterval((d, i, p, k) => {
    let A = Date.now();
    for (let h of d) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= A) p.set(h.id, A), k(h)
    }
  }, ie, c, V, _, K);
  r.addEventListener("abort", () => {
    clearInterval(X);
    for (let d of v) d.abort();
    S?.(), S = null
  });
  let x = new Set;
  async function Y(d) {
    let {
      task: i
    } = d, p = Eu();
    if (p) {
      e(`task=${i.id} refused: ${p}`);
      return
    }
    let k = new AbortController;
    v.add(k), F.add(i.id), R();
    let A = setTimeout((w) => w.abort(), Math.min(i.runTimeoutMinutes, O) * 60000, k);
    e(`task=${i.id} start cron='${i.cron}' dir='${i.directory}'`);
    let h = Hu({
      pinToCurrentBinary: !0
    });
    try {
      let w = J({
        prompt: i.prompt,
        options: {
          cwd: i.directory,
          permissionMode: i.permissionMode,
          ...i.permissionMode === "bypassPermissions" && {
            allowDangerouslySkipPermissions: !0
          },
          ...i.model && {
            model: i.model
          },
          systemPrompt: {
            type: "preset",
            preset: "claude_code"
          },
          settingSources: ["user", "project", "local"],
          pathToClaudeCodeExecutable: h.cmd,
          executableArgs: h.prefixArgs,
          abortController: k,
          stderr: (g) => e(`[${i.id}] ${g.trimEnd()}`),
          workload: sJ
        }
      });
      for await (let g of w) if (g.type === "result") e(`task=${i.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`)
    } catch (w) {
      e(`task=${i.id} threw: ${w}`)
    } finally {
      clearTimeout(A), v.delete(k), F.delete(i.id), R()
    }
  }
  while (!r.aborted) {
    while (x.size < m && T.length > 0 && !r.aborted) {
      let d = T.shift(),
        i = Y(d).finally(() => {
          x.delete(i), S?.(), S = null
        });
      x.add(i)
    }
    if (r.aborted) break;
    if (T.length === 0 || x.size >= m) await new Promise((d) => {
      S = d
    })
  }
  await Promise.allSettled(Array.from(x))
};

function I(s) {
  let r = s.scheduled,
    e = {};
  if (Array.isArray(r) && r.length > 0 && typeof r[0] === "object") e = r[0] ?? {};
  else if (r && typeof r === "object" && !Array.isArray(r)) e = r;
  let n = Array.isArray(e.tasks) ? e.tasks : [];
  return {
    ...e,
    tasks: n
  }
}

function W(s, r) {
  let e = s.scheduled;
  if (Array.isArray(e)) {
    let n = e.slice();
    n[0] = r, s.scheduled = n
  } else s.scheduled = r
}
async function Pje(s, r, e) {
  return Or("daemon_scheduled_add", async () => {
    j().parse(s), await $_t((n) => {
      let a = I(n),
        c = a.tasks.filter((m) => !(m && typeof m === "object" && m.id === s.id));
      c.push(s), W(n, {
        ...a,
        tasks: c
      })
    }, r, e)
  })
}
async function Ije(s, r, e) {
  return Or("daemon_scheduled_remove", async () => {
    let n = !1;
    return await $_t((a) => {
      if (!("scheduled" in a)) return !1;
      let c = I(a),
        m = c.tasks.filter((y) => !(y && typeof y === "object" && y.id === s));
      if (m.length === c.tasks.length) return !1;
      if (m.length === 0) {
        let y = a.scheduled;
        if (Array.isArray(y) && y.length > 1) a.scheduled = y.slice(1);
        else delete a.scheduled
      } else W(a, {
        ...c,
        tasks: m
      });
      n = !0
    }, r, e), n
  })
}
async function uQe(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = I(e),
    a = [];
  for (let c of n.tasks) {
    let m = j().safeParse(c);
    if (m.success) a.push(m.data)
  }
  return a
}
export {
  hIe,
  dQe,
  $_t,
  ptr,
  xje,
  ftr,
  E9r,
  T9r,
  Pje,
  Ije,
  uQe
};
