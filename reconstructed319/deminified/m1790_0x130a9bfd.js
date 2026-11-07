// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Ei } from "B:/~BUN/root/chunk-sgy380eg.js";
import { kDi } from "B:/~BUN/root/chunk-4xx5w1am.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { join as A } from "path";
var y = "active-time.json";
var w = 31536000000,
  m = 10;
function l() {
  return {
    version: 1,
    windows: []
  };
}
function f() {
  return A(Ue(), y);
}
function g() {
  return Ve.state("active-time-ledger");
}
async function M(e) {
  let i;
  if (X() && e !== void 0) {
    let r = await e.readText([g()]);
    if (!r.ok) throw t(`Failed to read active-time ledger: ${Ht(r.error)}`), Error("active-time ledger read failed");
    let n = r.value.items[0];
    if (!n.found) return l();
    i = n.value;
  } else try {
    i = await Dn().read(f());
  } catch (error) {
    if (K(error)) return l();
    throw t(`Failed to read active-time ledger: ${d(error)}`), error;
  }
  try {
    let r = ee(i);
    if (r.version !== 1 || !Array.isArray(r.windows)) return l();
    return {
      version: 1,
      windows: r.windows.filter(item => typeof item?.start === "number" && typeof item?.end === "number" && typeof item?.userSeconds === "number" && item.end >= item.start)
    };
  } catch {
    return l();
  }
}
class p {
  pendingSeconds = 0;
  activeStretch = null;
  cachedBreakThresholdMs = m * 60000;
  flushTimer = null;
  cleanupHandle = null;
  flushInFlight = null;
  #t = void 0;
  noteUserActivity(e, lastActivityMs) {
    if (e <= 0) return;
    if (this.activeStretch === null || lastActivityMs - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) this.activeStretch = {
      windowStartMs: lastActivityMs - e * 1000,
      lastActivityMs: lastActivityMs
    };else this.activeStretch.lastActivityMs = lastActivityMs;
    this.pendingSeconds += e, this.ensureFlushTimer();
  }
  getCurrentContinuousUse(e) {
    if (this.activeStretch === null) return null;
    if (e - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) return null;
    return {
      startMs: this.activeStretch.windowStartMs,
      durationMs: Math.max(0, e - this.activeStretch.windowStartMs)
    };
  }
  armStorage(e) {
    this.#t ??= e;
  }
  flush(e, i) {
    if (this.flushInFlight) return this.flushInFlight;
    return this.flushInFlight = this.doFlush(e, i).finally(() => {
      this.flushInFlight = null;
    }), this.flushInFlight;
  }
  async doFlush(e, i) {
    let r = Ei("breakReminder", {
      enabled: !1
    }).value;
    if (this.cachedBreakThresholdMs = (r.breakThresholdMinutes ?? m) * 60000, this.pendingSeconds <= 0) return;
    let pendingSeconds = this.pendingSeconds;
    try {
      let s = await M(i),
        o = s.windows.at(-1);
      if (o && e - o.end < this.cachedBreakThresholdMs) {
        if (o.end = Math.max(o.end, e), o.userSeconds = Math.min(o.userSeconds + pendingSeconds, (o.end - o.start) / 1000), this.activeStretch) this.activeStretch.windowStartMs = o.start;
      } else {
        let a = this.activeStretch?.windowStartMs ?? e - pendingSeconds * 1000,
          start = o ? Math.max(a, o.end) : a,
          end = Math.max(start, e);
        if (s.windows.push({
          start: start,
          end: end,
          userSeconds: Math.min(pendingSeconds, (end - start) / 1000)
        }), this.activeStretch) this.activeStretch.windowStartMs = start;
      }
      let T = e - w;
      if (s.windows = s.windows.filter(item => item.end >= T), X() && i !== void 0) {
        let a = await i.write(g(), _(s), {
          mode: 384
        });
        if (!a.ok) {
          t(`Failed to flush active-time ledger: ${Ht(a.error)}`);
          return;
        }
      } else {
        let a = Ue();
        await Dn().mkdir(a), await Dn().atomicWrite(f(), _(s), 384);
      }
      this.pendingSeconds -= pendingSeconds;
    } catch (error) {
      t(`Failed to flush active-time ledger: ${d(error)}`);
    }
  }
  ensureFlushTimer() {
    if (this.flushTimer) return;
  }
  reset() {
    if (this.pendingSeconds = 0, this.activeStretch = null, this.cachedBreakThresholdMs = m * 60000, this.flushTimer) clearInterval(this.flushTimer), this.flushTimer = null;
    this.cleanupHandle?.(), this.cleanupHandle = null, this.flushInFlight = null, this.#t = void 0;
  }
}
var j = new W(() => new p());
class c {
  activeOperations = new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime;
  isCLIActive = !1;
  USER_ACTIVITY_TIMEOUT_MS = 5000;
  getNow;
  getActiveTimeCounter;
  constructor(e) {
    this.getNow = e?.getNow ?? (() => Date.now()), this.getActiveTimeCounter = e?.getActiveTimeCounter ?? kDi, this.lastCLIRecordedTime = this.getNow();
  }
  static getInstance() {
    let e = h();
    return e.current ??= new c(), e.current;
  }
  static resetInstance() {
    h().current = null;
  }
  static createInstance(e) {
    let i = new c(e);
    return h().current = i, i;
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let i = (this.getNow() - this.lastUserActivityTime) / 1000;
      if (i > 0) {
        let r = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
        if (i < r) {
          let n = this.getActiveTimeCounter();
          if (n) n.add(i, {
            type: "user"
          });
        }
      }
    }
    this.lastUserActivityTime = this.getNow();
  }
  startCLIActivity(e) {
    if (this.activeOperations.has(e)) this.endCLIActivity(e);
    let i = this.activeOperations.size === 0;
    if (this.activeOperations.add(e), i) this.isCLIActive = !0, this.lastCLIRecordedTime = this.getNow();
  }
  endCLIActivity(e) {
    if (this.activeOperations.delete(e), this.activeOperations.size === 0) {
      let i = this.getNow(),
        r = (i - this.lastCLIRecordedTime) / 1000;
      if (r > 0) {
        let n = this.getActiveTimeCounter();
        if (n) n.add(r, {
          type: "cli"
        });
      }
      this.lastCLIRecordedTime = i, this.isCLIActive = !1;
    }
  }
  getActivityStates() {
    return {
      isUserActive: (this.getNow() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size
    };
  }
}
class S {
  current = null;
}
var I = new W(() => new S());
function h() {
  return I.of(H().host);
}
var XH = {
  recordUserActivity: () => c.getInstance().recordUserActivity(),
  startCLIActivity: e => c.getInstance().startCLIActivity(e),
  endCLIActivity: e => c.getInstance().endCLIActivity(e)
};
export { XH };