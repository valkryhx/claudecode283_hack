// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { lB, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ii } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { bQn } from "B:/~BUN/root/chunk-dsgmffrq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { afe, zFt, lqi } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { Sar, war } from "B:/~BUN/root/chunk-mvd8n96a.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { closeSync as R, constants as I, openSync as x, readSync as D } from "fs";
var C = 48,
  F = 10;
class b {
  fd;
  buffer = Buffer.alloc(32);
  constructor(e) {
    this.fd = e;
  }
  static open(e = "/proc/self/timerslack_ns") {
    let s;
    try {
      s = x(e, I.O_RDONLY | ro);
    } catch (error) {
      let r = k(error);
      if (r !== "ENOENT" && r !== "ENOTDIR") t(`[event-loop-stall] could not open ${e} (${r ?? d(error)}); stalls will be reported without allowing for timer slack`);
      return null;
    }
    let o = new b(s);
    if (o.readMs() !== null) return o;
    return o.close(), null;
  }
  readMs() {
    try {
      let s = D(this.fd, this.buffer, 0, this.buffer.length, 0) - 1;
      if (s < 1 || this.buffer[s] !== F) return null;
      let o = 0;
      for (let n = 0; n < s; n++) {
        let r = this.buffer[n] - C;
        if (r < 0 || r > 9) return null;
        o = o * 10 + r;
      }
      return s > 15 ? Number(this.buffer.toString("latin1", 0, s)) / 1e6 : o / 1e6;
    } catch {
      return null;
    }
  }
  close() {
    try {
      R(this.fd);
    } catch {}
  }
}
var g = 200,
  O = 1000,
  intervalMs_3 = 1e4,
  afterQuietMs = 30000,
  S = 500,
  P = 1e4,
  y = 5000,
  E = 50,
  w = 300000;
function ryn() {
  try {
    let e = process.resourceUsage();
    return {
      cpuTimeMs: (e.userCPUTime + e.systemCPUTime) / 1000,
      majorPageFaults: e.majorPageFault
    };
  } catch (error) {
    return t(`[event-loop-stall] process.resourceUsage() failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
}
function B() {
  try {
    let e = process.memoryUsage();
    return {
      rss_mb: Math.round(e.rss / 1024 / 1024),
      heap_used_mb: Math.round(e.heapUsed / 1024 / 1024),
      ext_mb: Math.round(e.external / 1024 / 1024)
    };
  } catch (error) {
    return t(`[event-loop-stall] process.memoryUsage() failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
}
function j({
  prevWallMs: prevWallMs,
  prevMonotonicMs: prevMonotonicMs,
  nowWallMs: nowWallMs,
  nowMonotonicMs: nowMonotonicMs,
  intervalMs: intervalMs,
  timerSlackMs: timerSlackMs,
  cpuMs: cpuMs
}) {
  let wallElapsedMs = nowWallMs - prevWallMs,
    h = nowMonotonicMs - prevMonotonicMs,
    wallDriftMs = wallElapsedMs - intervalMs,
    monotonicStallMs = Math.round(h - intervalMs),
    clockJumpMs = wallDriftMs - monotonicStallMs,
    p = Math.min(timerSlackMs ?? 0, P, Math.max(monotonicStallMs - cpuMs, 0)),
    isMonotonicStall = monotonicStallMs - p > S,
    isStall = wallDriftMs - p > S || isMonotonicStall;
  return {
    wallElapsedMs: wallElapsedMs,
    wallDriftMs: wallDriftMs,
    monotonicStallMs: monotonicStallMs,
    clockJumpMs: clockJumpMs,
    timerSlackMs: timerSlackMs,
    isStall: isStall,
    isLateWithinTimerSlack: !isStall && (wallDriftMs > S || monotonicStallMs > S),
    isMonotonicStall: isMonotonicStall,
    likelySleep: wallDriftMs > y
  };
}
function U({
  write: write,
  isMonotonicStall: isMonotonicStall_2,
  prevMonotonicMs: prevMonotonicMs_2,
  nowMonotonicMs: nowMonotonicMs_2,
  intervalMs: intervalMs_2
}) {
  if (!isMonotonicStall_2 || write === void 0 || write.endedMs < prevMonotonicMs_2) return {
    blocked_write: !1
  };
  let u = prevMonotonicMs_2 + intervalMs_2;
  return {
    blocked_write: write.startedMs <= u + E && write.endedMs >= nowMonotonicMs_2 - E,
    last_write_ms: Math.round(write.endedMs - write.startedMs),
    last_write_bytes: write.bytes
  };
}
function fga(e, s) {
  let o = H.of(e),
    n = i.CLAUDE_CODE_REMOTE ? i.CLAUDE_CODE_REMOTE_STALL_CHECK_INTERVAL_MS ?? O : g,
    r = i.CLAUDE_CODE_REMOTE ? {
      intervalMs: intervalMs_3,
      afterQuietMs: afterQuietMs
    } : void 0;
  if (s === void 0) o.start(n, r);else o.start(n, r, s);
}
class L {
  timer = null;
  intervalMs = g;
  activeIntervalMs = g;
  rest = void 0;
  quietMs = 0;
  stopListeningForWork = () => {};
  stopListeningForInput = () => {};
  inputSeen = !1;
  rssSampleTicks = w / g;
  lastTickMs = 0;
  lastTickMonotonicMs = 0;
  totalStalls = 0;
  totalStallDurationMs = 0;
  totalMonotonicStallMs = 0;
  tickCount = 0;
  lastResourceSample = null;
  timerSlack = null;
  lastTimerSlackMs = null;
  largestTimerSlackMs = 0;
  totalLateWithinTimerSlack = 0;
  sigcontSeen = !1;
  listensForSigcont = !1;
  onSigcont = () => {
    this.sigcontSeen = !0;
  };
  afterTick = (e, s, o, n, expected_interval_ms) => {
    let sigcont = this.listensForSigcont ? this.sigcontSeen : void 0;
    if (this.sigcontSeen = !1, !e.isStall || s === null) return;
    if (t(`[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${expected_interval_ms}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` + (s.last_write_ms !== void 0 ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B` : "") + ` sigcont=${sigcont ?? "n/a"} timer_slack=${e.timerSlackMs === void 0 ? "n/a" : `${e.timerSlackMs}ms`}` + (o ? ` cpu=${o.cpu_delta_ms}ms majflt=${o.major_fault_delta}` : "") + (n ? ` rss=${n.rss_mb}MB heap=${n.heap_used_mb}MB ext=${n.ext_mb}MB` : ""), {
      level: "warn"
    }), e.clockJumpMs > y && !s.blocked_write && !war()) return;
    l("tengu_event_loop_stall", {
      stall_duration_ms: e.wallDriftMs,
      expected_interval_ms: expected_interval_ms,
      actual_interval_ms: e.wallElapsedMs,
      monotonic_stall_ms: e.monotonicStallMs,
      clock_jump_ms: e.clockJumpMs,
      total_stalls: this.totalStalls,
      total_late_within_timer_slack: q() ? void 0 : this.totalLateWithinTimerSlack,
      cumulative_stall_ms: this.totalStallDurationMs,
      cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
      likely_sleep: e.likelySleep,
      timer_slack_ms: e.timerSlackMs === void 0 || q() ? void 0 : Math.round(e.timerSlackMs),
      ...o,
      ...n,
      ...s,
      sigcont: sigcont,
      nonblocking_stdout: bQn()
    });
  };
  start(e, s, o = {
    attributeSigcont: !0
  }) {
    if (this.timer !== null) return;
    if (this.activeIntervalMs = e, this.rest = s, this.timerSlack = b.open(), this.openWindow(), o.attributeSigcont) this.listensForSigcont = !0, process.on("SIGCONT", this.onSigcont);
    if (t(`[event-loop-stall] detector started (interval=${e}ms${s ? `, at rest ${s.intervalMs}ms` : ""}, threshold=${S}ms)`), s !== void 0) this.stopListeningForInput = lB(() => {
      this.inputSeen = !0;
    }), this.stopListeningForWork = zFt(() => {
      if (this.intervalMs === this.activeIntervalMs) this.quietMs = 0;else try {
        this.tick();
      } catch (error) {
        a(error), this.openWindow(), this.arm(this.activeIntervalMs);
      }
    });
    this.arm(e);
  }
  stop() {
    if (this.stopListeningForWork(), this.stopListeningForInput(), this.listensForSigcont) process.off("SIGCONT", this.onSigcont), this.listensForSigcont = !1, this.sigcontSeen = !1;
    if (this.timer !== null) clearInterval(this.timer), this.timer = null;
    this.timerSlack?.close(), this.timerSlack = null;
  }
  [Symbol.dispose]() {
    this.stop();
  }
  openWindow() {
    this.lastTickMs = Date.now(), this.lastTickMonotonicMs = performance.now(), this.lastResourceSample = ryn(), this.lastTimerSlackMs = this.timerSlack?.readMs() ?? null;
  }
  arm(e) {
    if (this.quietMs = 0, this.timer !== null) {
      if (this.intervalMs === e) return;
      clearInterval(this.timer);
    }
    this.intervalMs = e, this.rssSampleTicks = Math.round(w / e), this.timer = setInterval(this.tick, e), this.timer.unref();
  }
  tick = () => {
    let intervalMs_4 = this.intervalMs,
      nowWallMs_2 = Date.now(),
      nowMonotonicMs_3 = performance.now(),
      n = this.timerSlack?.readMs() ?? null,
      r = Math.max(n ?? 0, this.lastTimerSlackMs ?? 0);
    this.largestTimerSlackMs = Math.max(this.largestTimerSlackMs, r);
    let v = intervalMs_4 === this.rest?.intervalMs && !this.inputSeen ? this.largestTimerSlackMs : r,
      m = ryn(),
      intervalMs_5 = Math.min(intervalMs_4, Math.round(nowMonotonicMs_3 - this.lastTickMonotonicMs)),
      c = j({
        prevWallMs: this.lastTickMs,
        prevMonotonicMs: this.lastTickMonotonicMs,
        nowWallMs: nowWallMs_2,
        nowMonotonicMs: nowMonotonicMs_3,
        intervalMs: intervalMs_5,
        timerSlackMs: n === null && this.lastTimerSlackMs === null ? void 0 : v,
        cpuMs: m && this.lastResourceSample ? m.cpuTimeMs - this.lastResourceSample.cpuTimeMs : Number.POSITIVE_INFINITY
      });
    this.tickCount++;
    let write_2 = Ii().get(process.stdout)?.takeSlowestFrameWrite();
    if (c.isStall) {
      if (this.totalStalls++, this.totalStallDurationMs += Math.max(c.wallDriftMs, 0), c.isMonotonicStall) this.totalMonotonicStallMs += c.monotonicStallMs;
      let p = B(),
        f = m && this.lastResourceSample ? {
          cpu_delta_ms: Math.round(m.cpuTimeMs - this.lastResourceSample.cpuTimeMs),
          major_fault_delta: m.majorPageFaults - this.lastResourceSample.majorPageFaults
        } : null,
        T = U({
          write: write_2,
          isMonotonicStall: c.isMonotonicStall,
          prevMonotonicMs: this.lastTickMonotonicMs,
          nowMonotonicMs: nowMonotonicMs_3,
          intervalMs: intervalMs_5
        });
      setImmediate(this.afterTick, c, T, f, p, intervalMs_4);
    }
    if (!c.isStall && this.listensForSigcont) setImmediate(this.afterTick, c, null, null, null, intervalMs_4);
    if (c.isLateWithinTimerSlack) this.totalLateWithinTimerSlack++;
    if (c.likelySleep) Ii().get(process.stdout)?.reassertTerminalModes();
    this.lastTickMs = nowWallMs_2, this.lastTickMonotonicMs = nowMonotonicMs_3, this.lastResourceSample = m, this.lastTimerSlackMs = n, this.inputSeen = !1, this.choosePeriod();
    let _ = Math.max(c.wallDriftMs, c.monotonicStallMs) - Math.min(c.timerSlackMs ?? 0, Math.max(c.monotonicStallMs, 0));
    if (_ > Sar) try {
      lqi(_);
    } catch (error) {
      a(error);
    }
  };
  choosePeriod() {
    if (this.rest === void 0) return;
    if (afe()) {
      this.arm(this.activeIntervalMs);
      return;
    }
    if (this.quietMs += this.intervalMs, this.quietMs >= this.rest.afterQuietMs) this.arm(this.rest.intervalMs);
  }
}
var H = new W(() => new L());
export { ryn, fga };