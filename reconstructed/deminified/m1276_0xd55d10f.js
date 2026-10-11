// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Mo } from "B:/~BUN/root/chunk-4py062qg.js";
import { mbo } from "B:/~BUN/root/chunk-cn8bxjex.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { join as A } from "path";
var y = "active-time.json";
var w = 31536000000,
  m = 10;
function d() {
  return {
    version: 1,
    windows: []
  };
}
function f() {
  return A(Se(), y);
}
function g() {
  return Ae.state("active-time-ledger");
}
async function M(e) {
  let i;
  if (H() && e !== void 0) {
    let r = await e.readText([g()]);
    if (!r.ok) throw t(`Failed to read active-time ledger: ${rt(r.error)}`), Error("active-time ledger read failed");
    let n = r.value.items[0];
    if (!n.found) return d();
    i = n.value;
  } else try {
    i = await Qt().read(f());
  } catch (error) {
    if (B(error)) return d();
    throw t(`Failed to read active-time ledger: ${l(error)}`), error;
  }
  try {
    let r = J(i);
    if (r.version !== 1 || !Array.isArray(r.windows)) return d();
    return {
      version: 1,
      windows: r.windows.filter(item => typeof item?.start === "number" && typeof item?.end === "number" && typeof item?.userSeconds === "number" && item.end >= item.start)
    };
  } catch {
    return d();
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
    let r = Mo("breakReminder", {
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
      let S = e - w;
      if (s.windows = s.windows.filter(item => item.end >= S), H() && i !== void 0) {
        let a = await i.write(g(), b(s), {
          mode: 384
        });
        if (!a.ok) {
          t(`Failed to flush active-time ledger: ${rt(a.error)}`);
          return;
        }
      } else {
        let a = Se();
        await Qt().mkdir(a), await Qt().atomicWrite(f(), b(s), 384);
      }
      this.pendingSeconds -= pendingSeconds;
    } catch (error) {
      t(`Failed to flush active-time ledger: ${l(error)}`);
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
var K = new q(() => new p());
class c {
  activeOperations = new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime;
  isCLIActive = !1;
  USER_ACTIVITY_TIMEOUT_MS = 5000;
  getNow;
  getActiveTimeCounter;
  constructor(e) {
    this.getNow = e?.getNow ?? (() => Date.now()), this.getActiveTimeCounter = e?.getActiveTimeCounter ?? mbo, this.lastCLIRecordedTime = this.getNow();
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
  async trackOperation(e, i) {
    this.startCLIActivity(e);
    try {
      return await i();
    } finally {
      this.endCLIActivity(e);
    }
  }
  getLastUserActivityTime() {
    return this.lastUserActivityTime;
  }
  getActivityStates() {
    return {
      isUserActive: (this.getNow() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size
    };
  }
}
class T {
  current = null;
}
var I = new q(() => new T());
function h() {
  return I.of(j().host);
}
var aU = {
  recordUserActivity: () => c.getInstance().recordUserActivity(),
  startCLIActivity: e => c.getInstance().startCLIActivity(e),
  endCLIActivity: e => c.getInstance().endCLIActivity(e)
};
export { aU };