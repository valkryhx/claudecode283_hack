// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { H, q, er } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { EM, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { u$i, f$i, p$i, SZt } from "B:/~BUN/root/chunk-wdfwarp2.js";
import { Z$r } from "B:/~BUN/root/chunk-dxwyqd26.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { bqn, Sqn } from "B:/~BUN/root/chunk-k5mszhcg.js";
import { xVi } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { oHt, axr, wgt, Prn } from "B:/~BUN/root/chunk-z4janqzm.js";
import { bSe } from "B:/~BUN/root/chunk-5g14jzvf.js";
import { no } from "B:/~BUN/root/chunk-qszgzq5m.js";
import { NH, XHr, N5, SG } from "B:/~BUN/root/chunk-nxckfnqx.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { readFileSync as Oe } from "fs";
import { readdir as Ne, readFile as De } from "fs/promises";
var le = 10,
  Ue = 16,
  pe = 64,
  Le = /^[A-Za-z0-9_-]{1,128}$/;
function Ie(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ESRCH" ? "gone" : "unknown";
}
function ze(e, n) {
  let s = NH(e);
  if (s === void 0 || s === "") return "unknown";
  if (s !== n || SG(N5(e))) return "gone";
  return "running";
}
async function uas(e) {
  let n = new Map();
  if (e.size === 0) return n;
  let s = (await Ne("/proc")).filter(item => /^[0-9]+$/.test(item));
  for (let r = 0; r < s.length; r += pe) {
    let o = await Promise.all(s.slice(r, r + pe).map(item => De(`/proc/${item}/stat`, "utf8").catch(() => "")));
    for (let [u, c] of o.entries()) {
      let p = XHr(c),
        f = NH(c);
      if (p === void 0 || !e.has(p) || f === void 0 || f === "" || SG(N5(c))) continue;
      let P = n.get(p) ?? [];
      if (P.length < Ue) P.push([Number(s[r + u]), f]), n.set(p, P);
    }
  }
  return n;
}
function fas(e) {
  try {
    return process.kill(-e, 0), !0;
  } catch (error) {
    return k(error) === "EPERM";
  }
}
class _e {
  #e;
  #t = [];
  #n = new Set();
  enableCounting() {
    this.#e = Symbol("following");
  }
  isFollowing() {
    return this.#e !== void 0;
  }
  follows(e) {
    return (e === "turn" || e === "agent") && this.isFollowing();
  }
  countRunning(e = this.followedSessions()) {
    return Math.min(e.size, le);
  }
  followedSessions() {
    return new Set([...this.#n, ...this.#t.filter(fe).map(item => item.pgid)]);
  }
  noteCommandLeftProcesses(pgid, tool_use_id) {
    if (!this.isFollowing() || !Le.test(tool_use_id)) return Promise.resolve();
    let s = this.#e;
    return this.#n.add(pgid), uas(new Set([pgid])).then(r => {
      let processes = r.get(pgid);
      if (processes?.some(([u]) => u === pgid)) return;
      if (processes !== void 0 && this.#e === s) this.#s({
        tool_use_id: tool_use_id,
        pgid: pgid,
        processes: processes
      });
    }).catch(() => {}).finally(() => this.#n.delete(pgid));
  }
  #s(e) {
    this.#t = [...this.#t.filter(item => item.tool_use_id !== e.tool_use_id && fe(item)), e].slice(-le);
  }
  reset() {
    this.#t = [], this.#e = void 0, this.#n.clear();
  }
}
function fe({
  processes: processes_2
}) {
  return processes_2.some(([n, s]) => {
    try {
      let r = Oe(`/proc/${n}/stat`, "utf8");
      return ze(r, s) !== "gone";
    } catch (error) {
      return Ie(error) !== "gone";
    }
  });
}
var Zct = he(new _e(), e => e.reset());
import { readFileSync as Ve } from "fs";
import { posix as ge } from "path";
import { mkdirSync as He, readFileSync as Ge } from "fs";
import { posix as $e } from "path";
import { posix as je } from "path";
var be = "cc-shell",
  D = he({
    dir: void 0,
    joinCommand: void 0
  }, e => {
    e.dir = void 0, e.joinCommand = void 0;
  });
function ePn(e) {
  D.dir = e, D.joinCommand = e === void 0 ? void 0 : `{ { \\builtin echo 0 >| ${no([je.join(e, "tasks")])}; } 2>/dev/null || :; }`;
}
function ITi() {
  return D.joinCommand;
}
function _so() {
  return D.dir;
}
var tPn = "/sys/fs/cgroup/cpuacct";
function mmr(e) {
  for (let n of e.split(`
`)) {
    let [, s, ...r] = n.split(":");
    if (s === "cpuacct" && r.length > 0) return r.join(":");
  }
  return;
}
function hmr(e, n = He) {
  let s = e.split("/").filter(Boolean);
  if (s.length < 2 || s.at(-1)?.startsWith("cc-") || s.includes("..")) return;
  let r = $e.join(tPn, e, be);
  try {
    n(r);
  } catch (error) {
    if (k(error) !== "EEXIST") {
      t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${k(error) ?? d(error)})`);
      return;
    }
  }
  return r;
}
function vye(e) {
  try {
    let n = Ge(e, "utf8").trim(),
      s = n === "" ? Number.NaN : Number(n);
    return Number.isFinite(s) ? s / 1e6 : void 0;
  } catch {
    return;
  }
}
var h = he({
  open: 0,
  opened: 0,
  noWindowSince: void 0,
  noWindow: {
    cpuMs: 0,
    wallMs: 0
  }
}, e => {
  e.open = 0, e.opened = 0, e.noWindowSince = void 0, e.noWindow = {
    cpuMs: 0,
    wallMs: 0
  };
});
function Me(e, n) {
  if (e !== void 0 && h.noWindowSince !== void 0) h.noWindow.cpuMs += Math.max(0, e.cpuMs - h.noWindowSince.cpuMs), h.noWindow.wallMs += Math.max(0, e.atMs - h.noWindowSince.atMs);
  h.noWindowSince = n ? e : void 0;
}
function pas(cpuMs, atMs) {
  if (h.open === 0) Me(cpuMs === void 0 ? void 0 : {
    cpuMs: cpuMs,
    atMs: atMs
  }, !0);
  let noWindow = h.noWindow;
  return h.noWindow = {
    cpuMs: 0,
    wallMs: 0
  }, noWindow;
}
function X() {
  return er() ? void 0 : _so();
}
function MTi(e) {
  let n = X();
  if (n === void 0) return;
  let usageFile = ge.join(n, "cpuacct.usage"),
    cpuMs_2 = vye(usageFile),
    o;
  try {
    o = Ve(ge.join(n, "tasks"), "utf8") === "";
  } catch {}
  if (h.open === 0) Me(cpuMs_2 === void 0 ? void 0 : {
    cpuMs: cpuMs_2,
    atMs: performance.now()
  }, !1);
  return h.open++, h.opened++, {
    usageFile: usageFile,
    join: cpuMs_2 === void 0 ? "uncertain" : e,
    openedAtMs: cpuMs_2 ?? 0,
    sharedAtOpen: h.open > 1 || o !== !0,
    onlyLeftRunningAtOpen: h.open === 1 && o === !1,
    sequence: h.opened,
    closed: !1,
    held: !1,
    released: !1
  };
}
function DTi(e) {
  e.held = !0;
}
function mas(e, n) {
  if (e.held = !1, !e.closed || e.released) return;
  if (e.released = !0, h.open--, h.open === 0) {
    let cpuMs_3 = n ?? vye(e.usageFile);
    h.noWindowSince = cpuMs_3 === void 0 ? void 0 : {
      cpuMs: cpuMs_3,
      atMs: performance.now()
    };
  }
}
function bso(e) {
  if (e.closed) return;
  e.closed = !0;
  let n = e.join === "certain" ? vye(e.usageFile) : void 0,
    s = h.opened !== e.sequence;
  if (!e.held) mas(e, n);
  return n === void 0 ? void 0 : {
    cpuMs: Math.max(0, n - e.openedAtMs),
    shared: e.sharedAtOpen || s,
    sharedWithLeftRunningOnly: e.onlyLeftRunningAtOpen && !s
  };
}
import { posix as Ye } from "path";
import { AsyncLocalStorage as Xe } from "async_hooks";
var Se = ["setup", "prompt_producers", "ambient_start", "ambient_wait", "render"],
  Te = ["size_under_25_kb", "size_25_to_50_kb", "size_50_to_256_kb", "size_over_256_kb"],
  Z = 1024;
class K {
  begun = 0;
  ms = 0;
  #e = 0;
  #t = 0;
  begin() {
    if (this.begun++, this.#e++ === 0) this.#t = performance.now();
    let e = !1;
    return () => {
      if (e) return;
      if (e = !0, this.#e > 0 && --this.#e === 0) this.ms += performance.now() - this.#t;
    };
  }
  stop() {
    if (this.#e > 0) this.#e = 0, this.ms += performance.now() - this.#t;
  }
}
class has {
  beganAt = performance.now();
  #e = this.beganAt;
  #t = 0;
  #n = {};
  #s = {
    token_count: new K(),
    changed_file_read: new K()
  };
  #r = {};
  #i = !1;
  get markedAt() {
    return this.#e;
  }
  mark(e) {
    if (this.#i) return;
    let n = performance.now();
    this.#n[e] = (this.#n[e] ?? 0) + n - this.#e, this.#e = n;
  }
  producerBegan() {
    if (!this.#i) this.#t++;
  }
  begin(e) {
    return this.#i ? () => {} : this.#s[e].begin();
  }
  noteDiffersFile(e, n) {
    if (this.#i) return;
    let s = e < 25 * Z ? "size_under_25_kb" : e < 50 * Z ? "size_25_to_50_kb" : e <= 256 * Z ? "size_50_to_256_kb" : "size_over_256_kb";
    if (this.#r[s] = (this.#r[s] ?? 0) + 1, n) this.#r.hash_only = (this.#r.hash_only ?? 0) + 1;
  }
  finish() {
    if (this.#n.setup !== void 0) this.mark("render");
    return this.#s.token_count.stop(), this.#s.changed_file_read.stop(), this.#i = !0, {
      beganAt: this.beganAt,
      partMs: this.#n,
      producers: this.#t,
      tokenCounts: this.#s.token_count.begun,
      tokenCountMs: this.#s.token_count.ms,
      changedFileReadMs: this.#s.changed_file_read.begun > 0 ? this.#s.changed_file_read.ms : void 0,
      differsFiles: this.#r
    };
  }
}
var Y = new Xe();
function LTi(e, n) {
  return Y.run(e, n);
}
function Sso() {
  return Y.getStore();
}
function wso(e, n) {
  let s = Y.getStore();
  if (s === void 0) return n();
  let r = s.begin(e);
  try {
    let o = n();
    return o.then(r, r), o;
  } catch (error) {
    throw r(), error;
  }
}
import { readFileSync as Ze } from "fs";
function kso() {
  try {
    let e = Ze("/proc/self/status", "utf8"),
      rssMib = J(e, "VmRSS");
    return rssMib === void 0 ? void 0 : {
      rssMib: rssMib,
      anonMib: J(e, "RssAnon"),
      peakRssMib: J(e, "VmHWM")
    };
  } catch {
    return;
  }
}
function J(e, n) {
  let s = new RegExp(`^${n}:\\s+(\\d+) kB$`, "m").exec(e),
    r = Math.round(Number(s?.[1]) / 1024);
  return Number.isSafeInteger(r) ? r : void 0;
}
var Pe = ["main_stream", "side_stream", "tool", "agent_tool", "first_event_wait"],
  Ke = [...Pe, "before_first_request", "between_requests", "after_last_request"],
  Q = () => ({
    cpuMs: 0,
    wallMs: 0,
    entries: 0,
    threads: void 0
  });
class ee {
  last;
  read;
  open = new Map();
  sums = new Map();
  unnamed = {
    ...Q(),
    entries: 1
  };
  hasSentMainRequest = !1;
  inForce = void 0;
  isUnmeasured = !1;
  lacksThreads = !1;
  hasEnded = !1;
  constructor(e, n) {
    this.last = e;
    this.read = n;
  }
  sumOf(e) {
    let n = this.sums.get(e);
    if (n === void 0) n = Q(), this.sums.set(e, n);
    return n;
  }
  book(e) {
    if (e === void 0) {
      this.isUnmeasured = !0;
      return;
    }
    let n = this.inForce === void 0 ? this.unnamed : this.sumOf(this.inForce);
    if (n.cpuMs += e.cpuMs - this.last.cpuMs, n.wallMs += e.atMs - this.last.atMs, this.last.threads === void 0 || e.threads === void 0) this.lacksThreads = !0;else n.threads = axr(n.threads, oHt(this.last.threads, e.threads));
    this.last = e;
  }
  nameUnnamed(e) {
    if (this.unnamed.entries > 0) {
      let n = this.sumOf(e);
      if (n.cpuMs += this.unnamed.cpuMs, n.wallMs += this.unnamed.wallMs, n.entries += this.unnamed.entries, this.unnamed.threads !== void 0) n.threads = axr(n.threads, this.unnamed.threads);
    }
    this.unnamed = Q();
  }
  settle(e) {
    let n = Pe.find(item => (this.open.get(item) ?? 0) > 0);
    if (n === this.inForce) return;
    this.book(e === void 0 ? this.read() : e.reading), this.inForce = n;
    let s = n === void 0 ? this.unnamed : this.sumOf(n);
    s.entries++;
  }
  openWindow(e, n) {
    if (this.hasEnded) return () => {};
    this.open.set(e, (this.open.get(e) ?? 0) + 1), this.settle(n);
    let s = !1;
    return r => {
      if (s || this.hasEnded) return;
      s = !0, this.open.set(e, (this.open.get(e) ?? 1) - 1), this.settle(r);
    };
  }
  openFirstEventWait(e) {
    let n = this.openWindow("first_event_wait");
    if (e && !this.hasEnded) this.nameUnnamed(this.hasSentMainRequest ? "between_requests" : "before_first_request"), this.hasSentMainRequest = !0;
    return n;
  }
  end(e) {
    if (this.hasEnded) return;
    if (this.book(e), this.hasEnded = !0, this.nameUnnamed(this.hasSentMainRequest ? "after_last_request" : "before_first_request"), this.isUnmeasured) return;
    let n = {},
      s = {
        cpuMs: 0,
        wallMs: 0
      },
      r = {
        cpuMs: 0,
        wallMs: 0
      };
    for (let o of Ke) {
      let u = this.sums.get(o);
      if (u === void 0) continue;
      s.cpuMs += u.cpuMs, s.wallMs += u.wallMs;
      let cpu_ms = Math.round(s.cpuMs) - r.cpuMs,
        wall_ms = Math.round(s.wallMs) - r.wallMs;
      if (r.cpuMs += cpu_ms, r.wallMs += wall_ms, ![cpu_ms, wall_ms].every(item => Number.isSafeInteger(item) && item >= 0)) return;
      n[o] = {
        cpu_ms: cpu_ms,
        wall_ms: wall_ms,
        entries: u.entries
      };
    }
    return n;
  }
  threads() {
    if (!this.hasEnded || this.isUnmeasured || this.lacksThreads) return;
    let e = void 0,
      n = 0,
      s = {};
    for (let [r, o] of this.sums) {
      let u = o.threads && wgt(o.threads, 1 / 0);
      if (o.threads === void 0 || u === void 0) return;
      s[r] = u, e = axr(e, o.threads), n += o.wallMs;
    }
    return e && wgt(e, n) ? s : void 0;
  }
}
class y {
  #e;
  #t = 0;
  #n = 0;
  constructor(e) {
    this.#e = e;
  }
  next(e) {
    this.#t += e ?? 0;
    let n = Math.min(Math.round(this.#t), this.#e),
      s = n - this.#n;
    return this.#n = n, s;
  }
  rest() {
    return this.#e - this.#n;
  }
}
class te {
  #e = {};
  #t = {};
  #n = {};
  #s = {};
  #r = void 0;
  #i = void 0;
  #u = void 0;
  #a = {};
  markToolSchemaBuild(e, n) {
    this.#o("tool_schema_build", this.#e, e, n);
  }
  markMessageNormalization(e, n) {
    this.#o("message_normalization", this.#t, e, n);
  }
  markRequestBuild(e, n) {
    this.#o("request_build", this.#n, e, n);
  }
  #o(e, n, s, r) {
    let o = performance.now(),
      u = Math.max(r, this.#a[e] ?? 0);
    this.#a[e] = o, n[s] = (n[s] ?? 0) + o - u;
  }
  noteSentBuildSpan(e, n) {
    this.#s[e] = (this.#s[e] ?? 0) + performance.now() - n;
  }
  noteToolSchemaBuildStart(e) {
    this.#r = e;
  }
  noteToolSchemaBuildEnd(tools, n) {
    if (this.#r !== void 0) this.#i = {
      tools: tools,
      newSchemas: Math.max(0, n - this.#r)
    };
  }
  noteMessageNormalizationCounts(messages, wireMessages) {
    this.#u = {
      messages: messages,
      wireMessages: wireMessages
    };
  }
  wireDetails(e) {
    let toolSchemaBuild;
    if (e.tool_schema_build !== void 0 && Object.keys(this.#e).length > 0) {
      let o = this.#e,
        u = this.#i,
        c = new y(e.tool_schema_build);
      toolSchemaBuild = {
        betas_ms: c.next(o.betas),
        waits_ms: c.next(o.waits),
        placement_ms: c.next(o.placement),
        render_ms: c.next(o.render),
        after_ms: c.next(o.after),
        other_ms: c.rest(),
        ...(u && {
          tools: u.tools,
          new_schemas: u.newSchemas
        })
      };
    }
    let messageNormalization;
    if (e.message_normalization !== void 0 && Object.keys(this.#t).length > 0) {
      let o = this.#t,
        u = this.#u,
        c = new y(e.message_normalization);
      messageNormalization = {
        before_ms: c.next(o.before),
        normalize_ms: c.next(o.normalize),
        images_ms: c.next(o.images),
        post_process_ms: c.next(o.post_process),
        after_ms: c.next(o.after),
        other_ms: c.rest(),
        ...(u && {
          messages: u.messages,
          wire_messages: u.wireMessages
        })
      };
    }
    let requestBuild;
    if (e.request_build !== void 0 && Object.keys(this.#n).length > 0) {
      let o = this.#n,
        u = this.#s,
        c = new y(e.request_build),
        p = {
          records_ms: c.next(o.records),
          system_ms: c.next(o.system),
          headers_ms: c.next(o.headers),
          cache_break_record_ms: c.next(o.cache_break_record),
          plans_ms: c.next(o.plans),
          retry_setup_ms: c.next(o.retry_setup),
          sent_build_ms: c.next(o.sent_build),
          record_attempt_ms: c.next(o.record_attempt),
          other_ms: c.rest()
        },
        f = new y(p.sent_build_ms);
      requestBuild = {
        ...p,
        ...(u.safety_context !== void 0 && {
          sent_build_safety_context_ms: f.next(u.safety_context)
        }),
        ...(u.cache_breakpoints !== void 0 && {
          sent_build_cache_breakpoints_ms: f.next(u.cache_breakpoints)
        }),
        ...(u.surrogate_scan !== void 0 && {
          sent_build_surrogate_scan_ms: f.next(u.surrogate_scan)
        })
      };
    }
    return {
      toolSchemaBuild: toolSchemaBuild,
      messageNormalization: messageNormalization,
      requestBuild: requestBuild
    };
  }
}
var Je = ["same", "differs", "partial_view", "already_compared", "link_on_path", "leaf_link", "nlink", "not_regular", "oversize", "enoent", "other"],
  Qe = [...Je, "via_outputs_link"],
  et = [...Te, "hash_only"],
  we = 50,
  tt = 120000;
function se() {
  try {
    if (q()) return;
    let e = process.resourceUsage();
    return {
      cpuMs: (e.userCPUTime + e.systemCPUTime) / 1000,
      majorFaults: e.majorPageFault
    };
  } catch {
    return;
  }
}
function Re() {
  try {
    return !b() || q() || x() !== "linux" ? void 0 : kso();
  } catch {
    return;
  }
}
function E() {
  let resources = se();
  return resources && {
    resources: resources,
    atMs: performance.now(),
    threads: Prn(),
    shellMs: void 0
  };
}
function A(e) {
  return e && {
    cpuMs: e.resources.cpuMs,
    atMs: e.atMs,
    threads: e.threads
  };
}
function ve() {
  let e = E();
  if (e === void 0) return;
  let n = X(),
    s = n === void 0 ? void 0 : vye(Ye.join(n, "cpuacct.usage"));
  return {
    ...e,
    shellMs: s === void 0 ? void 0 : Math.floor(s)
  };
}
function T(e) {
  return Math.max(0, Math.floor(e));
}
function ne(e) {
  return e !== void 0 && e >= 0 && Number.isSafeInteger(e);
}
function Ce(e, n) {
  if (e === void 0 || n === void 0) return;
  let cpuMs_4 = Math.max(0, Math.round(n.resources.cpuMs - e.resources.cpuMs)),
    wallMs = Math.max(0, Math.round(n.atMs - e.atMs));
  return Number.isSafeInteger(cpuMs_4) && Number.isSafeInteger(wallMs) ? {
    cpuMs: cpuMs_4,
    wallMs: wallMs
  } : void 0;
}
function nt(e, n) {
  return e?.threads && n?.threads ? wgt(oHt(e.threads, n.threads), n.atMs - e.atMs) : void 0;
}
function st(e, n) {
  let s = Object.values(n ?? {});
  return s.reduce((acc, item) => acc + item.cpu_ms, 0) === e.cpuMs && s.reduce((acc, item) => acc + item.wall_ms, 0) === e.wallMs ? n : void 0;
}
function rt(e) {
  let n = {
    ...e,
    cpuMs: Math.max(0, Math.round(e.cpuMs)),
    wallMs: Math.max(0, Math.round(e.wallMs))
  };
  return [n.cpuMs, n.wallMs, n.streams, n.events, n.chunks ?? 0].every(Number.isSafeInteger) ? n : void 0;
}
function ye(e) {
  let n = e && se();
  if (e === void 0 || n === void 0) return;
  let cpuMs_5 = Math.max(0, Math.round(n.cpuMs - e.cpuMs)),
    majorFaults = Math.max(0, Math.round(n.majorFaults - e.majorFaults));
  return Number.isFinite(cpuMs_5) && Number.isFinite(majorFaults) ? {
    cpuMs: cpuMs_5,
    majorFaults: majorFaults
  } : void 0;
}
function it() {
  return Boolean(i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_EMIT_STARTUP_TIMING);
}
function b() {
  try {
    return tn() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && !EM() && !bSe();
  } catch {
    return !1;
  }
}
function gmr() {
  try {
    let process_start_tuning = bqn();
    if (process_start_tuning === void 0 || !b() || q()) return;
    let process_start_purge_delay_ms = Sqn();
    return {
      process_start_tuning: process_start_tuning,
      ...(process_start_purge_delay_ms !== void 0 && {
        process_start_purge_delay_ms: process_start_purge_delay_ms
      })
    };
  } catch (error) {
    a(F(error));
    return;
  }
}
function NTi() {
  try {
    let process_garbage_collections = Z$r();
    return process_garbage_collections !== void 0 && b() && !q() ? {
      process_garbage_collections: process_garbage_collections
    } : void 0;
  } catch (error) {
    a(F(error));
    return;
  }
}
class ke {
  begun = !1;
  open = !1;
  phases = {};
  starts = {};
  closedTurns = 0;
  beganAt = void 0;
  lastTurnEndedAt = void 0;
  shellCountedTo = void 0;
  betweenTurns = void 0;
  betweenTurnsThreads = void 0;
  memoryAtBegin = void 0;
  window = void 0;
  lagTimer = void 0;
  lagStartedAt = 0;
  lagExpectedAt = 0;
  maxLagMs = 0;
  firstDispatchAtMs = void 0;
  redriveCause = void 0;
  endedUnconsumed = void 0;
  unconsumedTaken = !1;
  attachments = void 0;
  storeConfirm = void 0;
  parts = void 0;
  streamsOpen = 0;
  streamsOpenSince = void 0;
  streaming = void 0;
  isStreamingUnmeasured = !1;
  states = void 0;
  endStoreConfirmWatch = void 0;
  reset() {
    this.begun = !1, this.open = !1, this.phases = {}, this.starts = {}, this.beganAt = void 0, this.betweenTurns = void 0, this.betweenTurnsThreads = void 0, this.memoryAtBegin = void 0, this.window = void 0, this.stopLagProbe(), this.maxLagMs = 0, this.firstDispatchAtMs = void 0, this.redriveCause = void 0, this.attachments = void 0, this.storeConfirm = void 0, this.parts = void 0, this.streamsOpen = 0, this.streamsOpenSince = void 0, this.streaming = void 0, this.isStreamingUnmeasured = !1, this.states = void 0;
    let endStoreConfirmWatch = this.endStoreConfirmWatch;
    this.endStoreConfirmWatch = void 0, endStoreConfirmWatch?.();
  }
  begin() {
    this.reset(), this.endedUnconsumed = void 0, this.unconsumedTaken = !1, this.begun = it(), this.open = this.begun;
    let {
      lastTurnEndedAt: lastTurnEndedAt
    } = this;
    if (this.lastTurnEndedAt = void 0, this.open) {
      if (xVi(b), !b()) this.shellCountedTo = void 0;
      this.beganAt = ve();
      let n = b() ? A(this.beganAt) : void 0;
      this.states = n && new ee(n, () => A(E())), this.betweenTurns = Ce(lastTurnEndedAt, this.beganAt), this.betweenTurnsThreads = nt(lastTurnEndedAt, this.beganAt), this.memoryAtBegin = Re(), this.startLagProbe();
    }
  }
  startLagProbe() {
    let e = performance.now(),
      n = () => {
        if (!this.open || this.lagStartedAt !== e) return;
        try {
          let s = performance.now();
          if (this.noteLag(s), s - e > tt) {
            this.lagTimer = void 0;
            return;
          }
          this.armLagTick(n, s);
        } catch (error) {
          this.lagTimer = void 0, a(error);
        }
      };
    this.lagStartedAt = e, this.armLagTick(n, e);
  }
  noteLag(e) {
    let n = e - this.lagExpectedAt;
    if (n > this.maxLagMs) this.maxLagMs = n;
  }
  armLagTick(e, n) {
    this.lagExpectedAt = n + we, this.lagTimer = setTimeout(e, we), this.lagTimer?.unref?.();
  }
  stopLagProbe() {
    if (this.lagTimer === void 0) return;
    clearTimeout(this.lagTimer), this.lagTimer = void 0, this.noteLag(performance.now());
  }
  add(e, n) {
    if (!this.open) return;
    this.phases[e] = (this.phases[e] ?? 0) + n;
  }
  startPhase(e) {
    if (!this.open) return;
    this.starts[e] = performance.now();
  }
  endPhase(e) {
    if (!this.open) return;
    let n = this.starts[e];
    if (n === void 0) return;
    delete this.starts[e], this.add(e, performance.now() - n);
  }
  startPhaseWithin(e, n) {
    if (!this.open) return;
    let s = this.starts[e];
    if (s === void 0) return;
    let r = performance.now();
    if (delete this.starts[e], this.add(e, r - s), this.starts[n] = r, n === "input_attachments") {
      if (this.attachments ??= {
        slowest: void 0,
        slowestMs: 0,
        used: {
          cpuMs: 0,
          majorFaults: 0
        },
        stretchFrom: void 0,
        changedFilesReread: void 0,
        touchCompare: void 0,
        passes: void 0
      }, this.attachments.stretchFrom = se(), this.attachments.stretchFrom === void 0) this.attachments.used = void 0;
    }
  }
  noteAttachmentProducer(e, n, s) {
    let attachments = this.attachments,
      input_attachments = this.starts.input_attachments;
    if (!this.open || attachments === void 0 || input_attachments === void 0 || n < input_attachments) return;
    let u = performance.now() - Math.max(n, s ?? n);
    if (attachments.slowest === void 0 || u > attachments.slowestMs) attachments.slowest = e, attachments.slowestMs = u;
  }
  noteChangedFilesReread(e) {
    let attachments_2 = this.attachments;
    if (this.open && attachments_2 !== void 0 && this.starts.input_attachments !== void 0) attachments_2.changedFilesReread = (attachments_2.changedFilesReread ?? 0) + e;
  }
  noteChangedFilesCompared(e) {
    let attachments_3 = this.attachments;
    if (!this.open || attachments_3 === void 0 || this.starts.input_attachments === void 0) return;
    for (let s of Qe) {
      let r = e[s];
      if (r !== void 0 && r > 0) attachments_3.touchCompare ??= {}, attachments_3.touchCompare[s] = (attachments_3.touchCompare[s] ?? 0) + r;
    }
  }
  noteAttachmentPass(e) {
    let attachments_4 = this.attachments,
      input_attachments_2 = this.starts.input_attachments;
    if (!this.open || attachments_4 === void 0 || input_attachments_2 === void 0 || e.beganAt < input_attachments_2 || e.partMs.setup === void 0) return;
    let r = attachments_4.passes ??= {
      partMs: {},
      producers: 0,
      tokenCounts: 0,
      tokenCountMs: 0,
      changedFileReadMs: void 0,
      differsFiles: {}
    };
    for (let o of Se) {
      let u = e.partMs[o];
      if (u !== void 0) r.partMs[o] = (r.partMs[o] ?? 0) + u;
    }
    if (r.producers += e.producers, r.tokenCounts += e.tokenCounts, r.tokenCountMs += e.tokenCountMs, e.changedFileReadMs !== void 0) r.changedFileReadMs = (r.changedFileReadMs ?? 0) + e.changedFileReadMs;
    for (let o of et) {
      let u = e.differsFiles[o];
      if (u !== void 0 && u > 0) r.differsFiles[o] = (r.differsFiles[o] ?? 0) + u;
    }
  }
  noteStoreConfirmWrite(writeMs) {
    if (this.open && this.starts.resume_store_confirm !== void 0) this.storeConfirm = {
      writeMs: writeMs,
      posts: this.storeConfirm?.posts
    };
  }
  holdStoreConfirmWatch(e) {
    this.endStoreConfirmWatch = e;
  }
  noteStoreConfirmPosts(posts) {
    if (this.open && this.starts.resume_store_confirm !== void 0) this.storeConfirm = {
      writeMs: this.storeConfirm?.writeMs ?? 0,
      posts: posts
    };
  }
  runningSince(e) {
    return this.open ? this.starts[e] : void 0;
  }
  markToolSchemaBuildPart(e) {
    let n = this.runningSince("tool_schema_build");
    if (n !== void 0) this.keptParts().markToolSchemaBuild(e, n);
  }
  markMessageNormalizationPart(e) {
    let n = this.runningSince("message_normalization");
    if (n !== void 0) this.keptParts().markMessageNormalization(e, n);
  }
  markRequestBuildPart(e) {
    let n = this.runningSince("request_build");
    if (n !== void 0) this.keptParts().markRequestBuild(e, n);
  }
  noteSentBuildSpan(e, n) {
    if (this.runningSince("request_build") !== void 0) this.keptParts().noteSentBuildSpan(e, n);
  }
  noteToolSchemaBuildStart(e) {
    if (this.runningSince("tool_schema_build") !== void 0) this.keptParts().noteToolSchemaBuildStart(e);
  }
  noteToolSchemaBuildEnd(e, n) {
    if (this.runningSince("tool_schema_build") !== void 0) this.keptParts().noteToolSchemaBuildEnd(e, n);
  }
  noteMessageNormalizationCounts(e, n) {
    if (this.runningSince("message_normalization") !== void 0) this.keptParts().noteMessageNormalizationCounts(e, n);
  }
  keptParts() {
    return this.parts ??= new te();
  }
  endPhaseWithin(e, n) {
    if (!this.open) return;
    let s = this.starts[n];
    if (s === void 0) return;
    let r = performance.now();
    delete this.starts[n], this.add(n, r - s), this.starts[e] = r;
    let attachments_5 = this.attachments;
    if (n === "input_attachments" && attachments_5 !== void 0) {
      let u = ye(attachments_5.stretchFrom);
      attachments_5.stretchFrom = void 0, attachments_5.used = u === void 0 || attachments_5.used === void 0 ? void 0 : {
        cpuMs: attachments_5.used.cpuMs + u.cpuMs,
        majorFaults: attachments_5.used.majorFaults + u.majorFaults
      };
    }
  }
  noteRedrive(e) {
    if (!this.begun || this.open) return;
    this.redriveCause ??= e;
  }
  end() {
    if (this.endedUnconsumed ??= this.unconsumed(), this.begun || this.lastTurnEndedAt !== void 0) this.lastTurnEndedAt = E();
    this.reset();
  }
  unconsumed() {
    if (!this.begun) return;
    if (!this.open) return {
      dispatched: !0,
      dispatchedAtMs: this.firstDispatchAtMs,
      runningPhase: void 0
    };
    let runningPhase,
      n = -1 / 0;
    for (let s of xe) {
      let r = this.starts[s];
      if (r !== void 0 && r >= n) runningPhase = s, n = r;
    }
    return {
      dispatched: !1,
      runningPhase: runningPhase
    };
  }
  takeUnconsumed() {
    if (this.unconsumedTaken) return;
    this.unconsumedTaken = !0;
    let e = this.endedUnconsumed ?? this.unconsumed();
    return this.endedUnconsumed = void 0, e;
  }
  close(e) {
    if (!this.open) return !1;
    this.open = !1, this.firstDispatchAtMs = e;
    let resources_2 = ye(this.beganAt?.resources);
    return this.stopLagProbe(), this.window = {
      processTurnIndex: this.closedTurns++,
      loopLagMs: Math.round(this.maxLagMs),
      resources: resources_2
    }, !0;
  }
  turnIndex() {
    return this.begun && b() ? this.window?.processTurnIndex ?? this.closedTurns : void 0;
  }
  openStream() {
    if (!this.begun || !b()) return () => {};
    let e = this.streaming ??= {
      cpuMs: 0,
      wallMs: 0,
      streams: 0,
      events: 0,
      chunks: 0
    };
    e.streams++;
    let n = this.streamsOpen++ === 0;
    if (n) this.streamsOpenSince = E();
    let s = this.states?.openWindow("main_stream", n ? {
        reading: A(this.streamsOpenSince)
      } : void 0),
      r = !1;
    return (o, u) => {
      if (r || this.streaming !== e) return;
      r = !0, e.events += o, e.chunks = e.chunks === void 0 || u === void 0 ? void 0 : e.chunks + u;
      let c = --this.streamsOpen === 0,
        p = c ? this.endStreamWindow() : void 0;
      s?.(c ? {
        reading: A(p)
      } : void 0);
    };
  }
  openWindow(e) {
    return this.states?.openWindow(e) ?? (() => {});
  }
  openFirstEventWait(e) {
    return this.states?.openFirstEventWait(e) ?? (() => {});
  }
  endStreamWindow() {
    let streamsOpenSince = this.streamsOpenSince,
      n = streamsOpenSince && E();
    if (this.streamsOpenSince = void 0, this.streaming === void 0) return n;
    if (streamsOpenSince === void 0 || n === void 0) return this.isStreamingUnmeasured = !0, n;
    return this.streaming.cpuMs += n.resources.cpuMs - streamsOpenSince.resources.cpuMs, this.streaming.wallMs += n.atMs - streamsOpenSince.atMs, n;
  }
  consume(e, n) {
    if (this.streamsOpen > 0) {
      if (this.endStreamWindow(), this.streaming !== void 0) this.streaming.chunks = void 0;
    }
    let {
        phases: phases,
        begun: begun,
        window: window,
        firstDispatchAtMs: firstDispatchAtMs,
        redriveCause: redriveCause
      } = this,
      {
        beganAt: beganAt,
        betweenTurns: betweenTurns,
        streaming: streaming,
        isStreamingUnmeasured: isStreamingUnmeasured
      } = this,
      {
        betweenTurnsThreads: re
      } = this,
      states = this.states,
      atBegin = window && this.memoryAtBegin,
      attachments_6 = this.attachments,
      storeConfirm = this.storeConfirm,
      {
        parts: parts
      } = this;
    if (this.reset(), !begun) return;
    let M = ve();
    if (this.lastTurnEndedAt = M, firstDispatchAtMs !== void 0 && n > firstDispatchAtMs) phases[`redrive_${redriveCause ?? "other"}`] = n - firstDispatchAtMs;
    let phases_2 = {
        other: 0
      },
      oe = 0,
      L = 0;
    for (let S of xe) {
      let v = phases[S];
      if (v === void 0) continue;
      oe += v;
      let C = Math.round(oe) - L;
      L += C, phases_2[S] = C;
    }
    phases_2.other = Math.round(e) - L;
    let I = attachments_6?.stretchFrom === void 0 ? attachments_6?.used : void 0,
      l = attachments_6?.passes,
      z = attachments_6 && {
        ...(attachments_6.slowest !== void 0 && {
          slowest_producer: attachments_6.slowest,
          slowest_producer_ms: Math.round(attachments_6.slowestMs)
        }),
        ...(I && {
          cpu_ms: I.cpuMs,
          major_faults: I.majorFaults
        }),
        ...(attachments_6.changedFilesReread !== void 0 && {
          changed_files_reread: attachments_6.changedFilesReread
        }),
        ...(attachments_6.touchCompare !== void 0 && {
          touch_compare: attachments_6.touchCompare
        }),
        ...(l?.partMs.setup !== void 0 && {
          setup_ms: T(l.partMs.setup)
        }),
        ...(l?.partMs.prompt_producers !== void 0 && {
          prompt_producers_ms: T(l.partMs.prompt_producers)
        }),
        ...(l?.partMs.ambient_start !== void 0 && {
          ambient_start_ms: T(l.partMs.ambient_start)
        }),
        ...(l?.partMs.ambient_wait !== void 0 && {
          ambient_wait_ms: T(l.partMs.ambient_wait)
        }),
        ...(l?.partMs.render !== void 0 && {
          render_ms: T(l.partMs.render)
        }),
        ...(l && {
          producers: l.producers,
          token_counts: l.tokenCounts
        }),
        ...(l !== void 0 && l.tokenCounts > 0 && {
          token_count_ms: T(l.tokenCountMs)
        }),
        ...(l?.changedFileReadMs !== void 0 && {
          changed_files_read_ms: T(l.changedFileReadMs)
        }),
        ...(l !== void 0 && Object.keys(l.differsFiles).length > 0 && {
          differs_files: l.differsFiles
        })
      },
      inputAttachments = z && Object.keys(z).length > 0 ? z : void 0,
      O = phases_2.resume_store_confirm ?? 0,
      write_ms = Math.min(Math.floor(storeConfirm?.writeMs ?? 0), O),
      ahead_ms = Math.min(Math.floor(storeConfirm?.posts?.aheadMs ?? 0), O - write_ms),
      post_ms = Math.min(Math.floor(storeConfirm?.posts?.postMs ?? 0), O - write_ms - ahead_ms),
      storeConfirm_2 = storeConfirm?.posts === void 0 || phases_2.resume_store_confirm === void 0 ? void 0 : {
        write_ms: write_ms,
        ahead_ms: ahead_ms,
        post_ms: post_ms,
        other_ms: O - write_ms - ahead_ms - post_ms,
        posts: storeConfirm.posts.posts,
        failed_posts: storeConfirm.posts.failedPosts,
        rows_ahead: storeConfirm.posts.rowsAhead,
        rows: storeConfirm.posts.rows
      },
      G = parts?.wireDetails(phases_2),
      atConsume = atBegin && Re(),
      turn = window && b() ? Ce(beganAt, M) : void 0,
      states_2 = turn && st(turn, states?.end(A(M))),
      ce = states_2 && states?.threads(),
      shellCpu;
    if (turn === void 0) this.shellCountedTo = void 0;else if (beganAt?.shellMs !== void 0 && M?.shellMs !== void 0) {
      let shellCountedTo = this.shellCountedTo,
        turnMs = M.shellMs - beganAt.shellMs,
        cpuMs_6 = shellCountedTo && beganAt.shellMs - shellCountedTo.shellMs,
        wallMs_2 = shellCountedTo && Math.round(beganAt.atMs - shellCountedTo.atMs);
      shellCpu = ne(turnMs) ? {
        turnMs: turnMs,
        sinceLastResult: ne(cpuMs_6) && ne(wallMs_2) ? {
          cpuMs: cpuMs_6,
          wallMs: wallMs_2
        } : void 0
      } : void 0, this.shellCountedTo = shellCpu && {
        shellMs: M.shellMs,
        atMs: M.atMs
      };
    }
    return {
      phases: phases_2,
      window: window,
      inputAttachments: inputAttachments,
      storeConfirm: storeConfirm_2,
      toolSchemaBuild: G?.toolSchemaBuild,
      messageNormalization: G?.messageNormalization,
      requestBuild: G?.requestBuild,
      memory: atBegin && atConsume && {
        atBegin: atBegin,
        atConsume: atConsume
      },
      betweenTurns: turn && betweenTurns,
      turn: turn,
      streaming: turn && streaming && !isStreamingUnmeasured ? rt(streaming) : void 0,
      states: states_2,
      threads: ce && {
        ...ce,
        ...(betweenTurns && re && {
          between_turns: re
        })
      },
      shellCpu: shellCpu
    };
  }
}
var xe = ["system_prompt", "resume_other", "resume_store_confirm", "resume_staged_files_wait", "resume_connector_wait", "turn_start_tool_run", "process_user_input", "input_images", "input_attachments", "input_command", "input_hooks", "conversation_append", "transcript_persist", "tool_pool_refresh", "system_prompt_rebuild", "init_message", "init_frame_send", "engine_pickup", "loop_entry", "memory_recall_wait", "memory_context_wait", "message_prep", "model_config_wait", "autocompact", "request_announcements", "query_setup", "auto_mode_context_wait", "model_gates", "tool_schema_build", "message_normalization", "client_creation", "request_build", "redrive_reactive_compact", "redrive_fallback_model", "redrive_non_streaming", "redrive_other"],
  B = {
    system_prompt: "open",
    resume_other: "open",
    resume_store_confirm: "open",
    resume_staged_files_wait: "open",
    resume_connector_wait: "open",
    turn_start_tool_run: "open",
    process_user_input: "open",
    input_images: "open",
    input_attachments: "attachments",
    input_command: "open",
    input_hooks: "open",
    conversation_append: "open",
    transcript_persist: "open",
    tool_pool_refresh: "open",
    system_prompt_rebuild: "open",
    init_message: "open",
    init_frame_send: "open",
    engine_pickup: "prepare",
    loop_entry: "prepare",
    memory_recall_wait: "prepare",
    memory_context_wait: "prepare",
    message_prep: "prepare",
    model_config_wait: "prepare",
    autocompact: "prepare",
    request_announcements: "prepare",
    query_setup: "prepare",
    auto_mode_context_wait: "prepare",
    model_gates: "prepare",
    tool_schema_build: "schemas",
    message_normalization: "normalize",
    client_creation: "build",
    request_build: "build",
    redrive_reactive_compact: "prepare",
    redrive_fallback_model: "prepare",
    redrive_non_streaming: "prepare",
    redrive_other: "prepare"
  },
  ot = {
    side_stream: void 0,
    tool: "tool",
    agent_tool: "tool",
    first_event_wait: "send"
  },
  ut = new W(() => new ke());
function m(e) {
  try {
    return e(ut.of(H().host));
  } catch (error) {
    a(error);
    return;
  }
}
function FTi() {
  m(e => e.begin());
}
function Fk(e) {
  u$i(B[e]), m(n => n.startPhase(e));
}
function Hk(e) {
  m(n => n.endPhase(e));
}
function q9t(e, n) {
  f$i(B[e], B[n]), m(s => s.startPhaseWithin(e, n));
}
function gas(e, n, s) {
  m(r => r.noteAttachmentProducer(e, n, s));
}
function HTi(e) {
  m(n => n.noteAttachmentPass(e));
}
function $Ti(e) {
  m(n => n.noteChangedFilesReread(e));
}
function UTi(e) {
  m(n => n.noteChangedFilesCompared(e));
}
function nPn(e) {
  m(n => n.markToolSchemaBuildPart(e));
}
function yas(e) {
  m(n => n.markMessageNormalizationPart(e));
}
function eut(e) {
  m(n => n.markRequestBuildPart(e));
}
function vso(e, n) {
  m(s => s.noteSentBuildSpan(e, n));
}
function BTi(e) {
  m(n => n.noteToolSchemaBuildStart(e.size));
}
function jTi(e, n) {
  m(s => s.noteToolSchemaBuildEnd(e, n.size));
}
function WTi(e, n) {
  m(s => s.noteMessageNormalizationCounts(e, n));
}
function zTi(e) {
  m(n => n.noteStoreConfirmWrite(e));
}
function at(e) {
  m(n => n.noteStoreConfirmPosts(e));
}
function GTi(e) {
  let n = Ae(e),
    s = n !== void 0,
    r = o => {
      if (n === void 0 || !s) return;
      return s = !1, Ae(() => n(o));
    };
  return m(o => o.holdStoreConfirmWatch(() => {
    r(performance.now());
  })), o => {
    let u = r(o);
    if (u) at(u);
  };
}
function Ae(e) {
  try {
    return e();
  } catch (error) {
    a(error);
    return;
  }
}
function Y9t(e, n) {
  p$i(B[e], B[n]), m(s => s.endPhaseWithin(e, n));
}
async function rPn(e, n, s) {
  q9t(e, n);
  try {
    return await s();
  } finally {
    Y9t(e, n);
  }
}
function VTi(e) {
  return m(n => n.close(e)) === !0;
}
function KTi() {
  let e = m(s => s.openStream()),
    n = e && SZt("stream");
  return e && ((s, r) => {
    n?.();
    try {
      e(s, r);
    } catch (error) {
      a(F(error));
    }
  });
}
function qe(e, n) {
  return () => {
    n?.();
    try {
      e?.();
    } catch (error) {
      a(F(error));
    }
  };
}
function Eso(e) {
  let n = ot[e];
  return qe(m(s => s.openWindow(e)), n && SZt(n));
}
function _as(e) {
  return qe(m(n => n.openFirstEventWait(e)), SZt("send"));
}
function X9t(e) {
  m(n => n.noteRedrive(e));
}
function qTi(e, n) {
  return m(s => s.consume(e, n));
}
function YTi() {
  return m(e => e.turnIndex());
}
function XTi() {
  m(e => e.end());
}
export { uas, fas, Zct, ePn, ITi, _so, tPn, mmr, hmr, vye, pas, MTi, DTi, mas, bso, has, LTi, Sso, wso, kso, gmr, NTi, FTi, Fk, Hk, q9t, gas, HTi, $Ti, UTi, nPn, yas, eut, vso, BTi, jTi, WTi, zTi, GTi, Y9t, rPn, VTi, KTi, Eso, _as, X9t, qTi, YTi, XTi };