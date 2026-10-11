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
import { P, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { nz } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { ZN, A$ } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Kk, Mx, $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { lstat as l, readFile as f, rename as m, rm as p, unlink as d } from "fs/promises";
import { uptime as g } from "os";
import { join as w } from "path";
async function Ayt(e, r = {}) {
  try {
    process.kill(e, "SIGTERM");
  } catch (error) {
    if (v(error) === "EPERM") return "eperm";
    return "exited";
  }
  let o = Date.now() + (r.gracefulMs ?? 2000);
  while (Date.now() < o) {
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    await Q(50);
  }
  return "timed-out";
}
var L = "daemon.lock";
function bA() {
  return w(Se(), L);
}
function YPe() {
  return Ae.state("daemon-lock");
}
function h(e) {
  return e === "EISDIR" || e === "ENXIO";
}
class k {
  logged = !1;
  markLogged() {
    if (this.logged) return !1;
    return this.logged = !0, !0;
  }
}
var D = new q(() => new k());
function E() {
  return D.of(j().host);
}
async function S() {
  let e = await l(bA()).catch(() => {
    return;
  });
  return e !== void 0 && e.isSymbolicLink();
}
async function y(e) {
  let r = bA(),
    o = await l(r).catch(() => {
      return;
    });
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
  if (E().markLogged()) t(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, {
    level: "warn"
  });
  await p(r, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}
var I = 65536;
async function h8r(e, r) {
  if (H() && r !== void 0) {
    let o = () => r.write(YPe(), b(e, null, 2), {
        precondition: {
          type: "ifAbsent"
        },
        mode: 438 & ~process.umask()
      }),
      n = await o();
    for (let i of [0, 1]) {
      if (n.ok) return !0;
      if (n.error.code === "AlreadyExists") return !1;
      let a = "telemetryCode" in n.error ? n.error.telemetryCode : void 0;
      if (n.error.code !== "Failed" || !nz(a)) break;
      if (a === "ELOOP") {
        if (await S()) return !1;
        break;
      }
      if (i === 1) break;
      await y(a), n = await o();
    }
    if (n.ok) return !0;
    throw new P(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 acquire write failed");
  }
  try {
    return await A$(bA(), b(e, null, 2)), !0;
  } catch (error) {
    if (v(error) === "EEXIST") return !1;
    throw error;
  }
}
async function y8r(e, r) {
  let o = await Oj(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await Twn({
    ...o,
    bgDisabled: !0
  }, r);
}
async function Oj(e) {
  let r;
  if (e) {
    let n = await e.read([YPe()]);
    if (!n.ok) {
      if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) throw new P(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock read failed");
      let c = await e.delete(YPe());
      if (!c.ok && c.error.code === "Failed") {
        let u = "telemetryCode" in c.error ? c.error.telemetryCode : void 0;
        if (h(u)) await y(u);
      }
      return null;
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > I) return await e.delete(YPe()), null;
    r = Buffer.from(i.value).toString("utf8");
    let a = ct(r, !1);
    if (a && typeof a === "object") {
      let s = a;
      if (typeof s.pid === "number" && typeof s.version === "string") return a;
    }
    return null;
  }
  try {
    let n = await l(bA());
    if (!n.isFile() || n.size > 65536) return await p(bA(), {
      recursive: !0,
      force: !0
    }).catch(() => {}), null;
    r = await f(bA(), "utf8");
  } catch (error) {
    if (B(error)) return null;
    throw error;
  }
  let o = ct(r, !1);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o;
  }
  return null;
}
async function Twn(e, r) {
  if (r) {
    let i = await r.write(YPe(), b(e, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!i.ok) {
      let s = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (s === "LockContended" || s === "LockSuspect") {
        let c = await Oj(r);
        if (c?.pid !== e.pid || c?.startedAt !== e.startedAt) return !1;
        i = await r.write(YPe(), b(e, null, 2), {
          mode: 438 & ~process.umask()
        });
      }
      if (!i.ok) throw new P(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`, "[DaemonLock] v5 replace write failed");
    }
    let a = await Oj(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let o = await ZN(bA(), b(e, null, 2));
  try {
    await m(o, bA());
  } catch (error) {
    let a = v(error);
    if (a === "EEXIST" || a === "EPERM") {
      await d(bA()).catch(() => {});
      try {
        await m(o, bA());
      } catch (error) {
        await d(o).catch(() => {});
        let c = v(error);
        if (c === "EEXIST" || c === "EPERM") return !1;
        throw error;
      }
    } else throw await d(o).catch(() => {}), error;
  }
  let n = await Oj(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function _8r(e) {
  if (e) {
    let r = await e.delete(YPe());
    if (!r.ok) throw new P(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock delete failed");
    return;
  }
  try {
    await d(bA());
  } catch (error) {
    if (!B(error)) throw error;
  }
}
async function dGt(e) {
  let r;
  try {
    r = await f(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return !0;
  }
  let o = r.split("\x00");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}
var rje = 2,
  Cwn = 250;
async function xyt(e, r, o) {
  if (r === void 0) return !0;
  for (let n = 0; n < o; n++) {
    if (n > 0) await Q(Cwn);
    let i = await $c(e, {
      skipCache: n > 0
    });
    if (i !== void 0) return i === r;
  }
  return !1;
}
var C = 120000;
function x(e, r = Date.now(), o = g()) {
  return e.startedAt < r - o * 1000 - C;
}
async function uGt(e) {
  let r = Mx(e);
  if (r !== void 0) {
    let o = await Kk(e.pid, r);
    if (o === !0) return null;
    if (o === !1) return "pid_recycled";
  }
  return x(e) ? "predates_boot" : null;
}
function RJe(e) {
  return Mx(e) !== void 0;
}
function b8r() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${bA()}`;
}
async function j_(e = 1, r) {
  let o = await Oj(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0);
  } catch {
    return null;
  }
  if (!(await dGt(o.pid))) return null;
  if (!(await xyt(o.pid, Mx(o), e))) return null;
  return o;
}
async function Pyt(e) {
  let lock = await j_(1, e).catch(() => null);
  if (!lock) return {
    kind: "none"
  };
  switch (lock.origin) {
    case "service":
      return {
        kind: "service",
        lock: lock
      };
    case "foreground":
      return {
        kind: "foreground",
        lock: lock
      };
    case "transient":
    case void 0:
      {
        if (!RJe(lock)) return {
          kind: "not-stopped",
          pid: lock.pid,
          outcome: "unverified"
        };
        let outcome = await Ayt(lock.pid);
        return outcome === "exited" ? {
          kind: "stopped",
          pid: lock.pid
        } : {
          kind: "not-stopped",
          pid: lock.pid,
          outcome: outcome
        };
      }
    default:
      return lock.origin, {
        kind: "unknown-origin",
        lock: lock
      };
  }
}
function Ibe(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}
function pGt(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}
async function S8r(e, r) {
  let o = await j_(1, r).catch(() => null);
  return !!o && o.version !== e;
}
export { Ayt, bA, YPe, h8r, y8r, Oj, Twn, _8r, dGt, rje, Cwn, xyt, uGt, RJe, b8r, j_, Pyt, Ibe, pGt, S8r };