// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  hre
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  Y,
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
import {
  lstatSync as x,
  readFileSync as S,
  rmSync as b,
  unlinkSync as P,
  writeFileSync as p
} from "fs";
import {
  join as c
} from "path";
var y = "exit-cause",
  Qmn = "session_in_use",
  m = "exit-detail",
  _ = 200;

function V_(e, t) {
  let n = t ?? process.env.CLAUDE_JOB_DIR;
  if (!n) return;
  try {
    p(c(n, y), e)
  } catch {}
}

function Uai(e, t, n) {
  let r = n ?? process.env.CLAUDE_JOB_DIR,
    o = t.trim();
  if (!r || !o) return;
  try {
    p(c(r, m), `${e}
${o.slice(0,_)}`)
  } catch {}
}

function nzo(e) {
  return E(c(e, y))
}

function rzo(e, t) {
  let n = E(c(e, m));
  if (!n) return;
  let r = n.indexOf(`
`);
  return r !== -1 && n.slice(0, r) === t ? n.slice(r + 1) : void 0
}

function E(e) {
  try {
    let t = x(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        b(e, {
          recursive: !0,
          force: !0
        })
      } catch {}
      return
    }
    let n = S(e, "utf8");
    return P(e), n
  } catch {
    return
  }
}
var bJn = new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]),
  D = new Set(["EISDIR", "ENOTCONN", "ECONNRESET"]);

function kjt(e) {
  let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : void 0;
  return t !== void 0 && (D.has(t) || bJn.has(t))
}

function Yhe(e, t) {
  e.on("error", (n) => {
    if (n.code !== void 0 && bJn.has(n.code)) {
      try {
        e.destroy?.()
      } catch {}
      t?.(n.code)
    }
  })
}

function ozo(e) {
  Yhe(process.stdin, (t) => e("stdin", t)), Yhe(process.stdout, (t) => e("stdout", t)), process.stdout.on("error", () => {
    i.markErrored()
  }), Yhe(process.stderr), process.stderr.on("error", () => {
    h.giveUpOnUnflushed()
  })
}

function g(e, t, n) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, n) === !1 ? "backed-up" : "accepted"
}
class a {
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
    this.everWritten = !0
  }
  recordQueued(e) {
    this.bytesQueued += e
  }
  recordFlushed(e) {
    this.bytesFlushed += e, this.notifyFlushProgress?.()
  }
  markErrored() {
    this.errored = !0, this.notifyFlushProgress?.()
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let e = process.stdout;
      if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise((t) => e.end(t))
    }
    return this.drainPromise
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0) this.flushConfirmedPromise = new Promise((e) => {
      let t = () => {
        if (this.outstandingBytes() <= 0) this.notifyFlushProgress = void 0, e()
      };
      this.notifyFlushProgress = t, this.flushCloseListener = t, process.stdout.once("close", t), t()
    });
    return this.flushConfirmedPromise
  }
  isExternallyClocked() {
    return this.externallyClocked
  }
  ensureExternallyClockedPromise() {
    return this.externallyClockedPromise ??= new Promise((e) => {
      this.notifyExternallyClocked = e
    })
  }
  markExternallyClocked() {
    this.externallyClocked = !0, this.ensureExternallyClockedPromise(), this.notifyExternallyClocked?.(), this.notifyExternallyClocked = void 0
  }
  reset() {
    if (this.flushCloseListener !== void 0) process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new a)
  }
}
var i = new a;

function Ir(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (g(process.stdout, e, () => {
      i.recordFlushed(t)
    }) !== "dropped") i.recordQueued(t)
}
async function Ejt(e = 2000, {
  scaleBudgetToQueue: t = !0
} = {}) {
  let n = i.endStdoutOnce();
  if (n === void 0) return;
  let r = Promise.all([n, i.fullyFlushed()]);
  await Nt(t ? Promise.race([r, T(e)]) : r, t ? y1r(e) : e, "stdout drain timeout (exit)").catch(() => {})
}

function Jne() {
  i.markExternallyClocked()
}

function szo() {
  return i.isExternallyClocked()
}

function T(e) {
  return i.ensureExternallyClockedPromise().then(() => Y(e))
}
var k = 262144,
  w = 30000;

function h1r() {
  return i.outstandingBytes()
}

function y1r(e = 2000) {
  return Math.min(w, Math.max(e, Math.ceil(h1r() * 1000 / k)))
}
var v = 1048576,
  A = 1e4,
  O = hre((e) => e());
class f {
  unflushed = {
    length: 0,
    since: 0
  };
  droppedCount = 0;
  droppedTotal = 0;
  write(e, t) {
    let n = this.unflushed;
    if (t && n.length >= v && (this.droppedCount > 0 || Date.now() - n.since >= A)) {
      this.droppedCount++, this.droppedTotal++;
      return
    }
    let r = "writing",
      o = () => {
        let d = r === "unflushed";
        if (r = "flushed", d) n.length -= e.length, this.reportDropped()
      };
    if (O(() => g(process.stderr, e, o)) === "backed-up" && r === "writing") {
      if (r = "unflushed", n.length === 0) n.since = Date.now();
      n.length += e.length
    }
  }
  giveUpOnUnflushed() {
    this.unflushed = {
      length: 0,
      since: 0
    }, this.reportDropped()
  }
  getDroppedTotal() {
    return this.droppedTotal
  }
  reset() {
    Object.assign(this, new f)
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < v) {
      let e = this.droppedCount;
      this.droppedCount = 0, this.write(`[stderr messages dropped before this line: ${e}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]
`, !1)
    }
  }
}
var h = He(new f, (e) => e.reset());

function XW(e, {
  mayDrop: t = !1
} = {}) {
  h.write(e, t)
}

function izo() {
  return h.getDroppedTotal()
}

function GZe(e) {
  console.error(e), V_("exit_with_error"), process.exit(1)
}

function Zmn(e, t) {
  let n = e;
  if (n.readableEnded || n.destroyed) return Promise.resolve(!1);
  return new Promise((r) => {
    let o = (u) => {
        clearTimeout(l), e.off("end", s), e.off("close", s), e.off("data", d), r(u)
      },
      s = () => o(!1),
      d = () => {
        if (clearTimeout(l), n.readableEnded || n.destroyed) o(!1)
      },
      l = setTimeout(o, t, !0);
    e.once("end", s), e.once("close", s), e.once("data", d)
  })
}
async function* egn(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"),
    n = !1,
    r = null,
    o = () => {
      n = !0, r?.()
    };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!n) {
      let d = s.next();
      d.catch(() => {});
      let l = new Promise((C) => {
          r = () => C(t)
        }),
        u = await Promise.race([d, l]);
      if (r = null, u === t || u.done) return;
      yield String(u.value)
    }
  } finally {
    e.off("close", o), s.return?.().catch(() => {})
  }
}
export {
  Qmn,
  V_,
  Uai,
  nzo,
  rzo,
  bJn,
  kjt,
  Yhe,
  ozo,
  Ir,
  Ejt,
  Jne,
  szo,
  h1r,
  y1r,
  XW,
  izo,
  GZe,
  Zmn,
  egn
};
