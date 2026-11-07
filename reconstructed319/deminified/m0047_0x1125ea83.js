// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Mme } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { $oa } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { J, zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { lstatSync as C, readFileSync as x, rmSync as S, unlinkSync as b, writeFileSync as E } from "fs";
import { join as u } from "path";
var f = "exit-cause",
  BVn = "session_in_use",
  p = "exit-detail",
  P = 200;
function Yv(e, t) {
  let r = t ?? process.env.CLAUDE_JOB_DIR;
  if (!r) return;
  try {
    E(u(r, f), e);
  } catch {}
}
function xva(e, t, r) {
  let n = r ?? process.env.CLAUDE_JOB_DIR,
    o = t.trim();
  if (!n || !o) return;
  try {
    E(u(n, p), `${e}
${o.slice(0, P)}`);
  } catch {}
}
function iOo(e) {
  a(u(e, f)), a(u(e, p));
}
function EWs(e) {
  return a(u(e, f));
}
function TWs(e, t) {
  let r = a(u(e, p));
  if (!r) return;
  let n = r.indexOf(`
`);
  return n !== -1 && r.slice(0, n) === t ? r.slice(n + 1) : void 0;
}
function a(e) {
  try {
    let t = C(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        S(e, {
          recursive: !0,
          force: !0
        });
      } catch {}
      return;
    }
    let r = x(e, "utf8");
    return b(e), r;
  } catch {
    return;
  }
}
var qHr = new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]),
  _ = new Set(["EISDIR", "ENOTCONN", "ECONNRESET"]);
function wcn(e) {
  let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : void 0;
  return t !== void 0 && (_.has(t) || qHr.has(t));
}
function Pxe(e, t) {
  e.on("error", r => {
    if (r.code !== void 0 && qHr.has(r.code)) {
      try {
        e.destroy?.();
      } catch {}
      t?.(r.code);
    }
  });
}
function CWs(e) {
  Pxe(process.stdin, t => e("stdin", t)), Pxe(process.stdout, t => e("stdout", t)), process.stdout.on("error", () => {
    i.markErrored();
  }), Pxe(process.stderr), process.stderr.on("error", () => {
    y.giveUpOnUnflushed();
  });
}
function YHr(e, t, r) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, r) === !1 ? "backed-up" : "accepted";
}
class h {
  everWritten = !1;
  drainPromise = void 0;
  bytesQueued = 0;
  bytesFlushed = 0;
  notifyFlushProgress = void 0;
  notifyExternallyClocked = void 0;
  externallyClockedPromise = void 0;
  externallyClocked = !1;
  errored = !1;
  flushConfirmedPromise = void 0;
  flushCloseListener = void 0;
  markEverWritten() {
    this.everWritten = !0;
  }
  recordQueued(e) {
    this.bytesQueued += e;
  }
  recordFlushed(e) {
    this.bytesFlushed += e, this.notifyFlushProgress?.();
  }
  markErrored() {
    this.errored = !0, this.notifyFlushProgress?.();
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed;
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let stdout = process.stdout;
      if (stdout.isTTY || stdout.destroyed || stdout.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise(t => stdout.end(t));
    }
    return this.drainPromise;
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0) this.flushConfirmedPromise = new Promise(e => {
      let t = () => {
        if (this.outstandingBytes() <= 0) this.notifyFlushProgress = void 0, e();
      };
      this.notifyFlushProgress = t, this.flushCloseListener = t, process.stdout.once("close", t), t();
    });
    return this.flushConfirmedPromise;
  }
  isExternallyClocked() {
    return this.externallyClocked;
  }
  ensureExternallyClockedPromise() {
    return this.externallyClockedPromise ??= new Promise(e => {
      this.notifyExternallyClocked = e;
    });
  }
  markExternallyClocked() {
    this.externallyClocked = !0, this.ensureExternallyClockedPromise(), this.notifyExternallyClocked?.(), this.notifyExternallyClocked = void 0;
  }
  reset() {
    if (this.flushCloseListener !== void 0) process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new h());
  }
}
var i = new h();
function oo(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (YHr(process.stdout, e, () => {
    i.recordFlushed(t);
  }) !== "dropped") i.recordQueued(t);
}
async function kcn(e = 2000, {
  scaleBudgetToQueue = !0
} = {}) {
  let r = i.endStdoutOnce();
  if (r === void 0) return;
  let n = Promise.all([r, i.fullyFlushed()]);
  await zt(scaleBudgetToQueue ? Promise.race([n, T(e)]) : n, scaleBudgetToQueue ? lOo(e) : e, "stdout drain timeout (exit)").catch(() => {});
}
function g7() {
  i.markExternallyClocked();
}
function RWs() {
  return i.isExternallyClocked();
}
function T(e) {
  return i.ensureExternallyClockedPromise().then(() => J(e));
}
var k = 262144,
  w = 30000;
function aOo() {
  return i.outstandingBytes();
}
function lOo(e = 2000) {
  return Math.min(w, Math.max(e, Math.ceil(aOo() * 1000 / k)));
}
var v = 1048576,
  D = 1e4,
  A = Mme(e => e());
class m {
  unflushed = {
    length: 0,
    since: 0
  };
  droppedCount = 0;
  droppedTotal = 0;
  write(e, t) {
    let unflushed = this.unflushed;
    if (t && unflushed.length >= v && (this.droppedCount > 0 || Date.now() - unflushed.since >= D)) {
      this.droppedCount++, this.droppedTotal++;
      return;
    }
    let n = "writing",
      o = () => {
        let d = n === "unflushed";
        if (n = "flushed", d) unflushed.length -= e.length, this.reportDropped();
      };
    if (A(() => YHr(process.stderr, e, o)) === "backed-up" && n === "writing") {
      if (n = "unflushed", unflushed.length === 0) unflushed.since = Date.now();
      unflushed.length += e.length;
    }
  }
  giveUpOnUnflushed() {
    this.unflushed = {
      length: 0,
      since: 0
    }, this.reportDropped();
  }
  getDroppedTotal() {
    return this.droppedTotal;
  }
  reset() {
    Object.assign(this, new m());
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < v) {
      let droppedCount = this.droppedCount;
      this.droppedCount = 0, this.write(`[stderr messages dropped before this line: ${droppedCount}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]
`, !1);
    }
  }
}
var y = he(new m(), e => e.reset());
function IN(e, {
  mayDrop = !1
} = {}) {
  y.write(e, mayDrop);
}
function AWs() {
  return y.getDroppedTotal();
}
function Cwt(e) {
  if (console.error(e), !$oa()) Yv("exit_with_error");
  process.exit(1);
}
function jVn(e, t) {
  let r = e;
  if (r.readableEnded || r.destroyed) return Promise.resolve(!1);
  return new Promise(n => {
    let o = l => {
        clearTimeout(c), e.off("end", s), e.off("close", s), e.off("data", d), n(l);
      },
      s = () => o(!1),
      d = () => {
        if (clearTimeout(c), r.readableEnded || r.destroyed) o(!1);
      },
      c = setTimeout(o, t, !0);
    e.once("end", s), e.once("close", s), e.once("data", d);
  });
}
async function* WVn(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"),
    r = !1,
    n = null,
    o = () => {
      r = !0, n?.();
    };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!r) {
      let d = s.next();
      d.catch(() => {});
      let promise = new Promise(g => {
          n = () => g(t);
        }),
        l = await Promise.race([d, promise]);
      if (n = null, l === t || l.done) return;
      yield String(l.value);
    }
  } finally {
    e.off("close", o), s.return?.().catch(() => {});
  }
}
export { BVn, Yv, xva, iOo, EWs, TWs, qHr, wcn, Pxe, CWs, YHr, oo, kcn, g7, RWs, aOo, lOo, IN, AWs, Cwt, jVn, WVn };