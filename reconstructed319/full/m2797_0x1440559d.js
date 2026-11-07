// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Zct,
  ePn,
  tPn,
  mmr,
  hmr,
  vye,
  kso,
  gmr
} from "B:/~BUN/root/chunk-rhdsefgz.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  hAs
} from "B:/~BUN/root/chunk-2zcbqmk2.js";
import {
  jKs
} from "B:/~BUN/root/chunk-k5mszhcg.js";
import {
  Jqn
} from "B:/~BUN/root/chunk-v4wwr1t7.js";
import {
  Svn
} from "B:/~BUN/root/chunk-kr1v6gnh.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  Ujt,
  N5,
  SG
} from "B:/~BUN/root/chunk-nxckfnqx.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  readFileSync as re
} from "fs";
import {
  posix as j
} from "path";
import {
  open as Y,
  readdir as x,
  readFile as v,
  readlink as G
} from "fs/promises";
var L = 10,
  N = 10,
  K = 50,
  y = 64,
  O = 262144;

function U(e, n) {
  let o = Ujt(n);
  return o === void 0 ? void 0 : {
    pid: e,
    ppid: o.ppid,
    session: o.session,
    starttime: o.starttime,
    hasExited: SG(N5(n))
  }
}

function Z(e, n, o) {
  let r = new Set([0, n.session, ...o]);
  for (let d of e)
    if (d.starttime <= n.starttime || !d.hasExited && d.ppid === n.pid && d.pid === d.session) r.add(d.session);
  let s = new Set;
  for (let d of e)
    if (!d.hasExited && !r.has(d.session)) s.add(d.session);
  return s
}
var V = "0A";

function E(e) {
  let n = [];
  for (let o of e.split(`
`)) {
    let [, r, , s, , , , , , d] = o.trim().split(/\s+/);
    if (s !== V || r === void 0 || d === void 0) continue;
    let u = Number.parseInt(r.slice(r.lastIndexOf(":") + 1), 16);
    if (!Number.isNaN(u)) n.push({
      port: u,
      inode: d
    })
  }
  return n
}

function z(e, n, o) {
  return new Set(e.filter(({
    port: r,
    inode: s
  }) => !n.has(r) && !o.has(s)).map(({
    port: r
  }) => r))
}
class p extends Error {}

function g(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ESRCH"
}
async function J(e = 1 / 0, n = "/proc") {
  let o = (await x(n)).filter((s) => /^[0-9]+$/.test(s)),
    r = [];
  for (let s = 0; s < o.length; s += y) {
    if (performance.now() > e) throw new p("the pass over /proc ran out of time");
    let d = await Promise.all(o.slice(s, s + y).map(async (u) => {
      let c;
      try {
        c = await v(`${n}/${u}/stat`, "utf8")
      } catch (l) {
        if (g(l)) return [];
        throw l
      }
      let m = U(Number(u), c);
      if (m === void 0) throw new p("a stat line could not be parsed");
      return [m]
    }));
    r.push(...d.flat())
  }
  return r
}
async function T(e) {
  let n = await Y(e, "r");
  try {
    let o = Buffer.allocUnsafe(O + 1),
      r = 0;
    for (;;) {
      let {
        bytesRead: s
      } = await n.read(o, r, o.length - r, null);
      if (s === 0) return o.toString("latin1", 0, r);
      if (r += s, r > O) throw new p("a socket table is too long to count from")
    }
  } finally {
    await n.close()
  }
}
async function q(e = "/proc") {
  let n = E(await T(`${e}/net/tcp`)),
    o;
  try {
    o = await T(`${e}/net/tcp6`)
  } catch (r) {
    if (g(r)) return n;
    throw r
  }
  return [...n, ...E(o)]
}
async function Q(e = "/proc") {
  let n = await Promise.all((await x(`${e}/self/fd`)).map(async (r) => {
      try {
        return await G(`${e}/self/fd/${r}`)
      } catch (s) {
        if (g(s)) return "";
        throw s
      }
    })),
    o = new Set;
  for (let r of n) {
    let s = /^socket:\[([0-9]+)\]$/.exec(r)?.[1];
    if (s !== void 0) o.add(s)
  }
  return o
}
var ee = {
    readOwnStat: () => v("/proc/self/stat", "utf8"),
    readProcessRows: (e) => J(e),
    readListeningSockets: () => q(),
    readOwnSocketInodes: () => Q()
  },
  A = "an unexpected error";
class I {
  #o;
  #t = new Map;
  #e;
  constructor(e = ee) {
    this.#e = e
  }
  enableCounting() {
    this.reset(), this.#o = Promise.all([this.#n("other_process_sessions", async () => {
      let e = await this.#e.readOwnStat();
      if (Number.parseInt(e, 10) !== process.pid) throw new p("/proc/self/stat names another pid");
      let n = U(process.pid, e);
      if (n === void 0) throw new p("a stat line could not be parsed");
      return n
    }), this.#n("listening_ports", async () => new Set((await this.#e.readListeningSockets()).map(({
      port: e
    }) => e)))]).then(([e, n]) => ({
      self: e,
      ports: n
    }), () => ({
      self: void 0,
      ports: void 0
    }))
  }
  async look() {
    let e = await this.#o;
    if (e === void 0) return;
    let {
      self: n,
      ports: o
    } = e, [r, s] = await Promise.all([n === void 0 ? void 0 : this.#n("other_process_sessions", async () => {
      if (n.pid === 1) throw new p("process 1 cannot tell its own children from orphans");
      let d = await this.#e.readProcessRows(performance.now() + K);
      if (!d.some(({
          pid: u
        }) => u === n.pid)) throw new p("/proc does not list this process");
      return d
    }), o === void 0 ? void 0 : this.#n("listening_ports", async () => {
      let d = await this.#e.readListeningSockets(),
        u = await this.#e.readOwnSocketInodes();
      return z(d, o, u).size
    })]);
    return {
      ...n !== void 0 && r !== void 0 && {
        self: n,
        rows: r
      },
      ...s !== void 0 && {
        newPorts: s
      }
    }
  }
  count(e, n) {
    return {
      ...e?.self !== void 0 && e.rows !== void 0 && {
        other_process_sessions: Math.min(Z(e.rows, e.self, n).size, L)
      },
      ...e?.newPorts !== void 0 && {
        listening_ports: Math.min(e.newPorts, N)
      }
    }
  }
  reset() {
    this.#o = void 0, this.#t.clear()
  }
  async #n(e, n) {
    let o;
    try {
      return await n()
    } catch (r) {
      if (o = r instanceof p ? r.message : k(r) ?? A, o === A && this.#t.get(e) !== o) a(r);
      return
    } finally {
      if (this.#t.get(e) !== o) this.#t.set(e, o), t(o === void 0 ? `mcp serve: ${e} is on the CPU report again` : `mcp serve: ${e} is left off the CPU report: ${o}`, {
        level: o === void 0 ? "info" : "warn"
      })
    }
  }
}
var _ = he(new I, (e) => e.reset());
var w = `${Svn}toolContainerCpu`,
  D = "anthropic/toolContainerCpu",
  te = 1,
  ne = `${Svn}toolContainerOtherPrograms`,
  oe = 86400000,
  Oe = 31 * oe;

function P(e) {
  return it(e) && e[w] === te
}

function F(e) {
  return P(e) && it(e) && e[ne] === !0
}
var se = 1000,
  ie = 5000,
  b = new W(() => ({}));

function OMo(e, n) {
  if (n !== "tool-container" || !tn() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let o;
  try {
    o = re("/proc/self/cgroup", "utf8")
  } catch {
    return
  }
  let r = mmr(o);
  if (r === void 0) return;
  let s = h(0),
    d = hmr(r);
  if (s !== void 0) {
    let u = d === void 0 ? void 0 : j.join(d, "cpuacct.usage"),
      c = u === void 0 ? void 0 : vye(u),
      m = {
        machineMsAtZero: s.cpuMs - s.daemonCpuMs,
        callsBeingServed: 0,
        atCallsStart: void 0,
        inCallMs: 0,
        inCallCpuMs: 0,
        shell: u === void 0 || c === void 0 ? void 0 : {
          usageFile: u,
          msAtZero: c
        },
        lastLoopTickMs: performance.now(),
        loopStallMs: 0
      };
    b.of(e).meter = m, Zct.enableCounting(), _.enableCounting(), setInterval(ae, se, m).unref()
  }
  ePn(d)
}

function ae(e) {
  let n = performance.now();
  if (n - e.lastLoopTickMs >= ie) e.loopStallMs += n - e.lastLoopTickMs;
  e.lastLoopTickMs = n
}

function rma(e) {
  let {
    meter: n
  } = b.of(e);
  if (n === void 0) return;
  if (n.callsBeingServed++ === 0) n.atCallsStart = h(n.machineMsAtZero);
  return {
    [Symbol.dispose]() {
      if (--n.callsBeingServed === 0) {
        let o = X(n, h(n.machineMsAtZero));
        n.inCallMs = o.ms, n.inCallCpuMs = o.cpuMs, n.atCallsStart = void 0
      }
    }
  }
}
var de = 100;
async function oma(e, n) {
  return b.of(e).meter === void 0 || !F(n) ? void 0 : we(_.look().catch(() => {
    return
  }), de)
}

function sma(e, n, o, r) {
  let {
    meter: s
  } = b.of(n);
  if (s === void 0 || !P(o)) return e;
  let d = s.shell === void 0 ? void 0 : vye(s.shell.usageFile),
    u = h(s.machineMsAtZero);
  if (u === void 0) return e;
  let c = kso(),
    m = gmr()?.process_start_tuning,
    l = hAs(),
    S = jKs(),
    M = X(s, u),
    R = Math.floor(u.cpuMs),
    f = s.shell === void 0 || d === void 0 ? void 0 : Math.floor(d - s.shell.msAtZero),
    C = Zct.followedSessions(),
    B = {
      start_time_unix_ms: Math.floor(performance.timeOrigin),
      up_ms: Math.floor(u.upMs),
      cpu_ms: R,
      daemon_cpu_ms: Math.floor(u.daemonCpuMs),
      in_call_ms: Math.floor(M.ms),
      in_call_cpu_ms: Math.floor(M.cpuMs),
      ...f !== void 0 && f >= 1 && f <= R && {
        shell_cpu_ms: f
      },
      left_running_programs: Zct.countRunning(C),
      ..._.count(r, C),
      started_mcp_servers: Jqn.of(n).size,
      loop_stall_ms: Math.floor(s.loopStallMs),
      ...c !== void 0 && {
        daemon_rss_mib: c.rssMib,
        ...c.anonMib !== void 0 && {
          daemon_anon_mib: c.anonMib
        },
        ...c.peakRssMib !== void 0 && {
          daemon_peak_rss_mib: c.peakRssMib
        }
      },
      ...m !== void 0 && {
        ...l !== void 0 && {
          jit_policy: l
        },
        ...S !== void 0 && {
          collection_timer_off: S ? 1 : 0
        },
        start_tuning: m
      }
    },
    H = e.isError === !0 ? D : w;
  return {
    ...e,
    _meta: {
      ...e._meta,
      [H]: B
    }
  }
}

function X({
  atCallsStart: e,
  inCallMs: n,
  inCallCpuMs: o
}, r) {
  return e === void 0 || r === void 0 ? {
    ms: n,
    cpuMs: o
  } : {
    ms: n + r.upMs - e.upMs,
    cpuMs: o + Math.max(0, r.cpuMs - e.cpuMs)
  }
}

function h(e) {
  let n = vye(j.join(tPn, "cpuacct.usage"));
  if (n === void 0) return;
  try {
    let {
      user: o,
      system: r
    } = process.cpuUsage();
    return {
      cpuMs: Math.max(0, n - e),
      daemonCpuMs: (o + r) / 1000,
      upMs: performance.now()
    }
  } catch {
    return
  }
}
export {
  OMo,
  rma,
  oma,
  sma
};
