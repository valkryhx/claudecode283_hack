// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ai } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { sRn } from "B:/~BUN/root/chunk-mxxcv7nt.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { SKn, wKn } from "B:/~BUN/root/chunk-8pqw0dhk.js";
var M = 200,
  b = 1000,
  intervalMs_3 = 1e4,
  afterQuietMs = 30000,
  _ = 500,
  k = 5000,
  d = 50,
  f = 300000;
function ZVt() {
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
function E() {
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
function w({
  prevWallMs: prevWallMs,
  prevMonotonicMs: prevMonotonicMs,
  nowWallMs: nowWallMs,
  nowMonotonicMs: nowMonotonicMs,
  intervalMs: intervalMs
}) {
  let wallElapsedMs = nowWallMs - prevWallMs,
    p = nowMonotonicMs - prevMonotonicMs,
    wallDriftMs = wallElapsedMs - intervalMs,
    monotonicStallMs = Math.round(p - intervalMs),
    clockJumpMs = wallDriftMs - monotonicStallMs,
    isMonotonicStall = monotonicStallMs > _;
  return {
    wallElapsedMs: wallElapsedMs,
    wallDriftMs: wallDriftMs,
    monotonicStallMs: monotonicStallMs,
    clockJumpMs: clockJumpMs,
    isStall: wallDriftMs > _ || isMonotonicStall,
    isMonotonicStall: isMonotonicStall,
    likelySleep: wallDriftMs > k
  };
}
function y({
  write: write,
  isMonotonicStall: isMonotonicStall_2,
  prevMonotonicMs: prevMonotonicMs_2,
  nowMonotonicMs: nowMonotonicMs_2,
  intervalMs: intervalMs_2
}) {
  if (!isMonotonicStall_2 || write === void 0 || write.endedMs < prevMonotonicMs_2) return {
    blocked_write: !1
  };
  let c = prevMonotonicMs_2 + intervalMs_2;
  return {
    blocked_write: write.startedMs <= c + d && write.endedMs >= nowMonotonicMs_2 - d,
    last_write_ms: Math.round(write.endedMs - write.startedMs),
    last_write_bytes: write.bytes
  };
}
function Pti(e, s) {
  let n = R.of(e),
    r = a.CLAUDE_CODE_REMOTE ? b : M,
    o = a.CLAUDE_CODE_REMOTE ? {
      intervalMs: intervalMs_3,
      afterQuietMs: afterQuietMs
    } : void 0;
  if (s === void 0) n.start(r, o);else n.start(r, o, s);
}
class v {
  timer = null;
  intervalMs = M;
  activeIntervalMs = M;
  rest = void 0;
  quietMs = 0;
  stopListeningForWork = () => {};
  rssSampleTicks = f / M;
  lastTickMs = 0;
  lastTickMonotonicMs = 0;
  totalStalls = 0;
  totalStallDurationMs = 0;
  totalMonotonicStallMs = 0;
  tickCount = 0;
  lastResourceSample = null;
  sigcontSeen = !1;
  listensForSigcont = !1;
  onSigcont = () => {
    this.sigcontSeen = !0;
  };
  afterTick = (e, s, n, r, expected_interval_ms) => {
    let sigcont = this.listensForSigcont ? this.sigcontSeen : void 0;
    if (this.sigcontSeen = !1, !e.isStall || s === null) return;
    t(`[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${expected_interval_ms}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` + (s.last_write_ms !== void 0 ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B` : "") + ` sigcont=${sigcont ?? "n/a"}` + (n ? ` cpu=${n.cpu_delta_ms}ms majflt=${n.major_fault_delta}` : "") + (r ? ` rss=${r.rss_mb}MB heap=${r.heap_used_mb}MB ext=${r.ext_mb}MB` : ""), {
      level: "warn"
    }), i("tengu_event_loop_stall", {
      stall_duration_ms: e.wallDriftMs,
      expected_interval_ms: expected_interval_ms,
      actual_interval_ms: e.wallElapsedMs,
      monotonic_stall_ms: e.monotonicStallMs,
      clock_jump_ms: e.clockJumpMs,
      total_stalls: this.totalStalls,
      cumulative_stall_ms: this.totalStallDurationMs,
      cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
      likely_sleep: e.likelySleep,
      ...n,
      ...r,
      ...s,
      sigcont: sigcont,
      nonblocking_stdout: sRn()
    });
  };
  start(e, s, n = {
    attributeSigcont: !0
  }) {
    if (this.timer !== null) return;
    if (this.activeIntervalMs = e, this.rest = s, this.openWindow(), n.attributeSigcont) this.listensForSigcont = !0, process.on("SIGCONT", this.onSigcont);
    if (t(`[event-loop-stall] detector started (interval=${e}ms${s ? `, at rest ${s.intervalMs}ms` : ""}, threshold=${_}ms)`), s !== void 0) this.stopListeningForWork = wKn(() => {
      if (this.intervalMs === this.activeIntervalMs) this.quietMs = 0;else try {
        this.tick();
      } catch (error) {
        l(error), this.openWindow(), this.arm(this.activeIntervalMs);
      }
    });
    this.arm(e);
  }
  stop() {
    if (this.stopListeningForWork(), this.listensForSigcont) process.off("SIGCONT", this.onSigcont), this.listensForSigcont = !1, this.sigcontSeen = !1;
    if (this.timer !== null) clearInterval(this.timer), this.timer = null;
  }
  [Symbol.dispose]() {
    this.stop();
  }
  openWindow() {
    this.lastTickMs = Date.now(), this.lastTickMonotonicMs = performance.now(), this.lastResourceSample = ZVt();
  }
  arm(e) {
    if (this.quietMs = 0, this.timer !== null) {
      if (this.intervalMs === e) return;
      clearInterval(this.timer);
    }
    this.intervalMs = e, this.rssSampleTicks = Math.round(f / e), this.timer = setInterval(this.tick, e), this.timer.unref();
  }
  tick = () => {
    let intervalMs_4 = this.intervalMs,
      nowWallMs_2 = Date.now(),
      nowMonotonicMs_3 = performance.now(),
      intervalMs_5 = Math.min(intervalMs_4, Math.round(nowMonotonicMs_3 - this.lastTickMonotonicMs)),
      o = w({
        prevWallMs: this.lastTickMs,
        prevMonotonicMs: this.lastTickMonotonicMs,
        nowWallMs: nowWallMs_2,
        nowMonotonicMs: nowMonotonicMs_3,
        intervalMs: intervalMs_5
      });
    this.tickCount++;
    let c = ZVt(),
      write_2 = ai().get(process.stdout)?.takeSlowestFrameWrite();
    if (o.isStall) {
      if (this.totalStalls++, this.totalStallDurationMs += Math.max(o.wallDriftMs, 0), o.isMonotonicStall) this.totalMonotonicStallMs += o.monotonicStallMs;
      let m = E(),
        u = c && this.lastResourceSample ? {
          cpu_delta_ms: Math.round(c.cpuTimeMs - this.lastResourceSample.cpuTimeMs),
          major_fault_delta: c.majorPageFaults - this.lastResourceSample.majorPageFaults
        } : null,
        S = y({
          write: write_2,
          isMonotonicStall: o.isMonotonicStall,
          prevMonotonicMs: this.lastTickMonotonicMs,
          nowMonotonicMs: nowMonotonicMs_3,
          intervalMs: intervalMs_5
        });
      if (setImmediate(this.afterTick, o, S, u, m, intervalMs_4), o.likelySleep) ai().get(process.stdout)?.reassertTerminalModes();
    }
    if (!o.isStall) setImmediate(this.afterTick, o, null, null, null, intervalMs_4);
    this.lastTickMs = nowWallMs_2, this.lastTickMonotonicMs = nowMonotonicMs_3, this.lastResourceSample = c, this.choosePeriod();
  };
  choosePeriod() {
    if (this.rest === void 0) return;
    if (SKn()) {
      this.arm(this.activeIntervalMs);
      return;
    }
    if (this.quietMs += this.intervalMs, this.quietMs >= this.rest.afterQuietMs) this.arm(this.rest.intervalMs);
  }
}
var R = new z(() => new v());
export { ZVt, Pti };