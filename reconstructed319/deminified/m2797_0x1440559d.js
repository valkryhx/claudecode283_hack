// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Zct, ePn, tPn, mmr, hmr, vye, kso, gmr } from "B:/~BUN/root/chunk-rhdsefgz.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { hAs } from "B:/~BUN/root/chunk-2zcbqmk2.js";
import { jKs } from "B:/~BUN/root/chunk-k5mszhcg.js";
import { Jqn } from "B:/~BUN/root/chunk-v4wwr1t7.js";
import { Svn } from "B:/~BUN/root/chunk-kr1v6gnh.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { Ujt, N5, SG } from "B:/~BUN/root/chunk-nxckfnqx.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { readFileSync as re } from "fs";
import { posix as j } from "path";
import { open as Y, readdir as x, readFile as v, readlink as G } from "fs/promises";
var L = 10,
  N = 10,
  K = 50,
  y = 64,
  O = 262144;
function U(pid, n) {
  let o = Ujt(n);
  return o === void 0 ? void 0 : {
    pid: pid,
    ppid: o.ppid,
    session: o.session,
    starttime: o.starttime,
    hasExited: SG(N5(n))
  };
}
function Z(e, n, o) {
  let r = new Set([0, n.session, ...o]);
  for (let d of e) if (d.starttime <= n.starttime || !d.hasExited && d.ppid === n.pid && d.pid === d.session) r.add(d.session);
  let s = new Set();
  for (let d of e) if (!d.hasExited && !r.has(d.session)) s.add(d.session);
  return s;
}
var V = "0A";
function E(e) {
  let n = [];
  for (let o of e.split(`
`)) {
    let [, r,, s,,,,,, inode] = o.trim().split(/\s+/);
    if (s !== V || r === void 0 || inode === void 0) continue;
    let port = Number.parseInt(r.slice(r.lastIndexOf(":") + 1), 16);
    if (!Number.isNaN(port)) n.push({
      port: port,
      inode: inode
    });
  }
  return n;
}
function z(e, n, o) {
  return new Set(e.filter(({
    port: port_2,
    inode: inode_2
  }) => !n.has(port_2) && !o.has(inode_2)).map(({
    port: port_3
  }) => port_3));
}
class p extends Error {}
function g(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ESRCH";
}
async function J(e = 1 / 0, n = "/proc") {
  let o = (await x(n)).filter(item => /^[0-9]+$/.test(item)),
    r = [];
  for (let s = 0; s < o.length; s += y) {
    if (performance.now() > e) throw new p("the pass over /proc ran out of time");
    let d = await Promise.all(o.slice(s, s + y).map(async item => {
      let c;
      try {
        c = await v(`${n}/${item}/stat`, "utf8");
      } catch (error) {
        if (g(error)) return [];
        throw error;
      }
      let m = U(Number(item), c);
      if (m === void 0) throw new p("a stat line could not be parsed");
      return [m];
    }));
    r.push(...d.flat());
  }
  return r;
}
async function T(e) {
  let n = await Y(e, "r");
  try {
    let o = Buffer.allocUnsafe(O + 1),
      r = 0;
    for (;;) {
      let {
        bytesRead: bytesRead
      } = await n.read(o, r, o.length - r, null);
      if (bytesRead === 0) return o.toString("latin1", 0, r);
      if (r += bytesRead, r > O) throw new p("a socket table is too long to count from");
    }
  } finally {
    await n.close();
  }
}
async function q(e = "/proc") {
  let n = E(await T(`${e}/net/tcp`)),
    o;
  try {
    o = await T(`${e}/net/tcp6`);
  } catch (error) {
    if (g(error)) return n;
    throw error;
  }
  return [...n, ...E(o)];
}
async function Q(e = "/proc") {
  let n = await Promise.all((await x(`${e}/self/fd`)).map(async item => {
      try {
        return await G(`${e}/self/fd/${item}`);
      } catch (error) {
        if (g(error)) return "";
        throw error;
      }
    })),
    o = new Set();
  for (let r of n) {
    let s = /^socket:\[([0-9]+)\]$/.exec(r)?.[1];
    if (s !== void 0) o.add(s);
  }
  return o;
}
var ee = {
    readOwnStat: () => v("/proc/self/stat", "utf8"),
    readProcessRows: e => J(e),
    readListeningSockets: () => q(),
    readOwnSocketInodes: () => Q()
  },
  A = "an unexpected error";
class I {
  #o;
  #t = new Map();
  #e;
  constructor(e = ee) {
    this.#e = e;
  }
  enableCounting() {
    this.reset(), this.#o = Promise.all([this.#n("other_process_sessions", async () => {
      let e = await this.#e.readOwnStat();
      if (Number.parseInt(e, 10) !== process.pid) throw new p("/proc/self/stat names another pid");
      let n = U(process.pid, e);
      if (n === void 0) throw new p("a stat line could not be parsed");
      return n;
    }), this.#n("listening_ports", async () => new Set((await this.#e.readListeningSockets()).map(({
      port: port_4
    }) => port_4)))]).then(([self, ports]) => ({
      self: self,
      ports: ports
    }), () => ({
      self: void 0,
      ports: void 0
    }));
  }
  async look() {
    let e = await this.#o;
    if (e === void 0) return;
    let {
        self: self_2,
        ports: ports_2
      } = e,
      [rows, newPorts] = await Promise.all([self_2 === void 0 ? void 0 : this.#n("other_process_sessions", async () => {
        if (self_2.pid === 1) throw new p("process 1 cannot tell its own children from orphans");
        let d = await this.#e.readProcessRows(performance.now() + K);
        if (!d.some(({
          pid: pid_2
        }) => pid_2 === self_2.pid)) throw new p("/proc does not list this process");
        return d;
      }), ports_2 === void 0 ? void 0 : this.#n("listening_ports", async () => {
        let d = await this.#e.readListeningSockets(),
          u = await this.#e.readOwnSocketInodes();
        return z(d, ports_2, u).size;
      })]);
    return {
      ...(self_2 !== void 0 && rows !== void 0 && {
        self: self_2,
        rows: rows
      }),
      ...(newPorts !== void 0 && {
        newPorts: newPorts
      })
    };
  }
  count(e, n) {
    return {
      ...(e?.self !== void 0 && e.rows !== void 0 && {
        other_process_sessions: Math.min(Z(e.rows, e.self, n).size, L)
      }),
      ...(e?.newPorts !== void 0 && {
        listening_ports: Math.min(e.newPorts, N)
      })
    };
  }
  reset() {
    this.#o = void 0, this.#t.clear();
  }
  async #n(e, n) {
    let o;
    try {
      return await n();
    } catch (error) {
      if (o = error instanceof p ? error.message : k(error) ?? A, o === A && this.#t.get(e) !== o) a(error);
      return;
    } finally {
      if (this.#t.get(e) !== o) this.#t.set(e, o), t(o === void 0 ? `mcp serve: ${e} is on the CPU report again` : `mcp serve: ${e} is left off the CPU report: ${o}`, {
        level: o === void 0 ? "info" : "warn"
      });
    }
  }
}
var _ = he(new I(), e => e.reset());
var w = `${Svn}toolContainerCpu`,
  D = "anthropic/toolContainerCpu",
  te = 1,
  ne = `${Svn}toolContainerOtherPrograms`,
  oe = 86400000,
  Oe = 31 * oe;
function P(e) {
  return it(e) && e[w] === te;
}
function F(e) {
  return P(e) && it(e) && e[ne] === !0;
}
var se = 1000,
  ie = 5000,
  b = new W(() => ({}));
function OMo(e, n) {
  if (n !== "tool-container" || !tn() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let o;
  try {
    o = re("/proc/self/cgroup", "utf8");
  } catch {
    return;
  }
  let r = mmr(o);
  if (r === void 0) return;
  let s = h(0),
    d = hmr(r);
  if (s !== void 0) {
    let usageFile = d === void 0 ? void 0 : j.join(d, "cpuacct.usage"),
      msAtZero = usageFile === void 0 ? void 0 : vye(usageFile),
      m = {
        machineMsAtZero: s.cpuMs - s.daemonCpuMs,
        callsBeingServed: 0,
        atCallsStart: void 0,
        inCallMs: 0,
        inCallCpuMs: 0,
        shell: usageFile === void 0 || msAtZero === void 0 ? void 0 : {
          usageFile: usageFile,
          msAtZero: msAtZero
        },
        lastLoopTickMs: performance.now(),
        loopStallMs: 0
      };
    b.of(e).meter = m, Zct.enableCounting(), _.enableCounting(), setInterval(ae, se, m).unref();
  }
  ePn(d);
}
function ae(e) {
  let n = performance.now();
  if (n - e.lastLoopTickMs >= ie) e.loopStallMs += n - e.lastLoopTickMs;
  e.lastLoopTickMs = n;
}
function rma(e) {
  let {
    meter: meter
  } = b.of(e);
  if (meter === void 0) return;
  if (meter.callsBeingServed++ === 0) meter.atCallsStart = h(meter.machineMsAtZero);
  return {
    [Symbol.dispose]() {
      if (--meter.callsBeingServed === 0) {
        let o = X(meter, h(meter.machineMsAtZero));
        meter.inCallMs = o.ms, meter.inCallCpuMs = o.cpuMs, meter.atCallsStart = void 0;
      }
    }
  };
}
var de = 100;
async function oma(e, n) {
  return b.of(e).meter === void 0 || !F(n) ? void 0 : we(_.look().catch(() => {
    return;
  }), de);
}
function sma(e, n, o, r) {
  let {
    meter: meter_2
  } = b.of(n);
  if (meter_2 === void 0 || !P(o)) return e;
  let d = meter_2.shell === void 0 ? void 0 : vye(meter_2.shell.usageFile),
    u = h(meter_2.machineMsAtZero);
  if (u === void 0) return e;
  let c = kso(),
    start_tuning = gmr()?.process_start_tuning,
    jit_policy = hAs(),
    S = jKs(),
    M = X(meter_2, u),
    cpu_ms = Math.floor(u.cpuMs),
    shell_cpu_ms = meter_2.shell === void 0 || d === void 0 ? void 0 : Math.floor(d - meter_2.shell.msAtZero),
    C = Zct.followedSessions(),
    B = {
      start_time_unix_ms: Math.floor(performance.timeOrigin),
      up_ms: Math.floor(u.upMs),
      cpu_ms: cpu_ms,
      daemon_cpu_ms: Math.floor(u.daemonCpuMs),
      in_call_ms: Math.floor(M.ms),
      in_call_cpu_ms: Math.floor(M.cpuMs),
      ...(shell_cpu_ms !== void 0 && shell_cpu_ms >= 1 && shell_cpu_ms <= cpu_ms && {
        shell_cpu_ms: shell_cpu_ms
      }),
      left_running_programs: Zct.countRunning(C),
      ..._.count(r, C),
      started_mcp_servers: Jqn.of(n).size,
      loop_stall_ms: Math.floor(meter_2.loopStallMs),
      ...(c !== void 0 && {
        daemon_rss_mib: c.rssMib,
        ...(c.anonMib !== void 0 && {
          daemon_anon_mib: c.anonMib
        }),
        ...(c.peakRssMib !== void 0 && {
          daemon_peak_rss_mib: c.peakRssMib
        })
      }),
      ...(start_tuning !== void 0 && {
        ...(jit_policy !== void 0 && {
          jit_policy: jit_policy
        }),
        ...(S !== void 0 && {
          collection_timer_off: S ? 1 : 0
        }),
        start_tuning: start_tuning
      })
    },
    H = e.isError === !0 ? D : w;
  return {
    ...e,
    _meta: {
      ...e._meta,
      [H]: B
    }
  };
}
function X({
  atCallsStart: atCallsStart,
  inCallMs: n,
  inCallCpuMs: o
}, r) {
  return atCallsStart === void 0 || r === void 0 ? {
    ms: n,
    cpuMs: o
  } : {
    ms: n + r.upMs - atCallsStart.upMs,
    cpuMs: o + Math.max(0, r.cpuMs - atCallsStart.cpuMs)
  };
}
function h(e) {
  let n = vye(j.join(tPn, "cpuacct.usage"));
  if (n === void 0) return;
  try {
    let {
      user: user,
      system: system
    } = process.cpuUsage();
    return {
      cpuMs: Math.max(0, n - e),
      daemonCpuMs: (user + system) / 1000,
      upMs: performance.now()
    };
  } catch {
    return;
  }
}
export { OMo, rma, oma, sma };