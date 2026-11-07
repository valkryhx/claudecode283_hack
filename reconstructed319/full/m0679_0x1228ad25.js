// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R,
  d,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  Dn
} from "B:/~BUN/root/chunk-9jpwd6f1.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  ao
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  nG
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  cT,
  ESe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  gs,
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  Ybe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  U9,
  DZ,
  yMn
} from "B:/~BUN/root/chunk-0jhmwh3q.js";
import {
  Mp
} from "B:/~BUN/root/chunk-ht2sp6s6.js";
import {
  zc
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  BG
} from "B:/~BUN/root/chunk-gn3x9avq.js";
import {
  o,
  E,
  I,
  C,
  u,
  B
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readFile as ee,
  stat as te
} from "fs/promises";
import {
  dirname as re
} from "path";
var Vhn = 1048576;
async function dGr(s) {
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
  if (e.totalBytes > Vhn) return {
    kind: "refused"
  };
  return {
    kind: "text",
    text: Buffer.from(e.value).toString("utf8")
  }
}

function Z(s) {
  return s.read([{
    key: Ve.state("daemon-config"),
    offset: 0,
    length: Vhn + 1
  }])
}
async function D(s, r) {
  let e = s ?? BG(),
    n;
  if (X() && r !== void 0 && e === BG()) n = await oe(r, e);
  else try {
    let l = await te(e);
    if (!l.isFile() || l.size > Vhn) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8")
  } catch (l) {
    if (!K(l)) throw l
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(gs(n))
  } catch {
    throw Error(`daemon.json is malformed: ${e}`)
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {}
}
async function oe(s, r) {
  let e = await dGr(s);
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
      throw Object.assign(new R(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
        cause: "cause" in e.error ? e.error.cause : e.error
      });
    case "threw":
      throw e.error
  }
}
async function Khn(s, r, e) {
  let n = r ?? BG(),
    a = await D(n, e);
  if (await s(a) === !1) return;
  if (X() && e !== void 0 && n === BG()) {
    let m = await e.write(Ve.state("daemon-config"), _(a, null, 2) + `
`, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!m.ok) throw Object.assign(new R(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
      cause: "cause" in m.error ? m.error.cause : m.error
    });
    return
  }
  await Dn().mkdir(re(n)), await zn(n, _(a, null, 2) + `
`)
}

function nUo(s) {
  if (Array.isArray(s)) return s.filter((r) => !!r && typeof r.dir === "string");
  if (s && typeof s.dir === "string") return [s];
  return []
}
import {
  readFile as ne
} from "fs/promises";
import {
  join as se
} from "path";
var ie = 1000,
  M = 10080,
  wEt = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"],
  j = p(() => u({
    id: o().min(1),
    cron: o().refine((s) => U9(s) !== null, {
      message: "invalid 5-field cron expression"
    }),
    prompt: o().min(1),
    directory: o().min(1),
    enabled: I().default(!0),
    permissionMode: B([...wEt, nG]).transform((s) => s === nG ? "default" : s).default("dontAsk"),
    model: o().optional(),
    runTimeoutMinutes: E().positive().max(M).default(30),
    maxQueued: E().int().positive().default(1)
  }).strict()),
  rUo = p(() => u({
    tasks: C(j()).default([]).refine((s) => new Set(s.map((r) => r.id)).size === s.length, {
      message: "task ids must be unique"
    }),
    maxConcurrent: E().int().positive().default(1)
  }).strict());

function z() {
  return se(Ue(), "daemon.scheduled.status.json")
}

function N() {
  return Ve.state("scheduled-status")
}
async function ae(s, r) {
  let e = {
    workerPid: process.pid,
    workerProcStart: ESe(),
    writtenAt: Date.now(),
    tasks: s
  };
  if (X() && r) {
    try {
      let n = await r.write(N(), _(e), {
        mode: 438 & ~process.umask()
      });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`)
    } catch (n) {
      t(`writeScheduledStatus: ${d(n)}`)
    }
    return
  }
  try {
    await zn(z(), _(e))
  } catch {}
}
async function Q9s(s) {
  let r;
  if (X() && s !== void 0) {
    let a;
    try {
      a = await s.readText([N()])
    } catch {
      return null
    }
    if (!a.ok) return null;
    let l = a.value.items[0];
    if (!l.found) return null;
    r = l.value
  } else try {
    r = await ne(z(), "utf8")
  } catch {
    return null
  }
  let e = et(r, !1);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0)
  } catch {
    return null
  }
  if (!await cT(n.workerPid, n.workerProcStart)) return null;
  return e
}
var Z9s = async (s, r, e, n, a) => {
  let {
    tasks: l,
    maxConcurrent: m
  } = rUo().parse(s), {
    initializeErrorLogSink: y
  } = await import("B:/~BUN/root/chunk-q47tk7v6.js"), {
    initializeAnalyticsSink: W
  } = await import("B:/~BUN/root/chunk-7ycrq79c.js");
  if (y(), W(), !n.getAccessToken()) e("scheduled worker: not authed \u2014 run `claude auth login`"), process.exit(1);
  let {
    awaitPolicyLimitsColdStart: q,
    stopPolicyLimits: Q
  } = await import("B:/~BUN/root/chunk-4gnegddh.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => Q(), {
      once: !0
    }), await q(), r.aborted) return;
  let {
    query: U
  } = await import("B:/~BUN/root/chunk-8xa9t7rt.js");
  if (e(`scheduled worker started tasks=${l.length} maxConcurrent=${m}`), l.length === 0) {
    let c = setInterval(() => {}, 60000);
    await new Promise((i) => {
      if (r.aborted) {
        i();
        return
      }
      r.addEventListener("abort", () => i(), {
        once: !0
      })
    }), clearInterval(c);
    return
  }
  let b = [],
    x = new Set,
    S = null;

  function H(c) {
    let i = b.reduce((f, k) => k.task.id === c.id ? f + 1 : f, 0);
    if (i >= c.maxQueued) {
      e(`task=${c.id} dropped (queue full: ${i}/${c.maxQueued})`);
      return
    }
    b.push({
      task: c
    }), S?.(), S = null
  }
  let A = new Map,
    v = new Set,
    J = Date.now();

  function F() {
    let c = {};
    for (let i of l) {
      let f = A.get(i.id);
      c[i.id] = {
        running: v.has(i.id),
        ...f !== void 0 && {
          lastFiredAt: f
        }
      }
    }
    ae(c, a)
  }
  F();

  function G(c) {
    let i = A.get(c.id) ?? J;
    return yMn(c.cron, i, c.id, DZ)
  }
  let V = setInterval((c, i, f, k) => {
    let P = Date.now();
    for (let h of c) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= P) f.set(h.id, P), k(h)
    }
  }, ie, l, G, A, H);
  r.addEventListener("abort", () => {
    clearInterval(V);
    for (let c of x) c.abort();
    S?.(), S = null
  });
  let T = new Set;
  async function Y(c) {
    let {
      task: i
    } = c, f = Mp();
    if (f) {
      e(`task=${i.id} refused: ${f}`);
      return
    }
    let k = new AbortController;
    x.add(k), v.add(i.id), F();
    let P = setTimeout((w) => w.abort(), Math.min(i.runTimeoutMinutes, M) * 60000, k);
    e(`task=${i.id} start cron='${i.cron}' dir='${i.directory}'`);
    let h = zc({
      pinToCurrentBinary: !0
    });
    try {
      let w = U({
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
          workload: Ybe
        }
      });
      for await (let g of w) if (g.type === "result") e(`task=${i.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`)
    } catch (w) {
      e(`task=${i.id} threw: ${w}`)
    } finally {
      clearTimeout(P), x.delete(k), v.delete(i.id), F()
    }
  }
  while (!r.aborted) {
    while (T.size < m && b.length > 0 && !r.aborted) {
      let c = b.shift(),
        i = Y(c).finally(() => {
          T.delete(i), S?.(), S = null
        });
      T.add(i)
    }
    if (r.aborted) break;
    if (b.length === 0 || T.size >= m) await new Promise((c) => {
      S = c
    })
  }
  await Promise.allSettled(Array.from(T))
};

function O(s) {
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

function L(s, r) {
  let e = s.scheduled;
  if (Array.isArray(e)) {
    let n = e.slice();
    n[0] = r, s.scheduled = n
  } else s.scheduled = r
}
async function kEt(s, r, e) {
  return ao("daemon_scheduled_add", async () => {
    j().parse(s), await Khn((n) => {
      let a = O(n),
        l = a.tasks.filter((m) => !(m && typeof m === "object" && m.id === s.id));
      l.push(s), L(n, {
        ...a,
        tasks: l
      })
    }, r, e)
  })
}
async function vEt(s, r, e) {
  return ao("daemon_scheduled_remove", async () => {
    let n = !1;
    return await Khn((a) => {
      if (!("scheduled" in a)) return !1;
      let l = O(a),
        m = l.tasks.filter((y) => !(y && typeof y === "object" && y.id === s));
      if (m.length === l.tasks.length) return !1;
      if (m.length === 0) {
        let y = a.scheduled;
        if (Array.isArray(y) && y.length > 1) a.scheduled = y.slice(1);
        else delete a.scheduled
      } else L(a, {
        ...l,
        tasks: m
      });
      n = !0
    }, r, e), n
  })
}
async function b2t(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = O(e),
    a = [];
  for (let l of n.tasks) {
    let m = j().safeParse(l);
    if (m.success) a.push(m.data)
  }
  return a
}
export {
  Vhn,
  dGr,
  Khn,
  nUo,
  wEt,
  rUo,
  Q9s,
  Z9s,
  kEt,
  vEt,
  b2t
};
