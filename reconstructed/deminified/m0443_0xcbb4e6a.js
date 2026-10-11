// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, ao, pA } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ip } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { closeSync as N, constants as y, fstatSync as q, openSync as R, writeSync as A } from "fs";
var F = 4194304,
  Q = 25,
  L = Buffer.from("\x1B[0m"),
  weakMap = new WeakMap(),
  E = Rt(new Set(), e => e.clear());
function D() {
  if (!process.stdout.isTTY) return {
    reason: "not_a_tty"
  };
  let e;
  switch (O()) {
    case "linux":
    case "wsl":
      e = "/proc/self/fd/1";
      break;
    case "macos":
      {
        let r = I();
        if (r === void 0) return {
          reason: "ttyname_unavailable"
        };
        e = r;
        break;
      }
    default:
      return {
        reason: "unsupported_platform"
      };
  }
  let fd;
  try {
    fd = R(e, y.O_WRONLY | y.O_NONBLOCK | y.O_NOCTTY | Ip);
  } catch (error) {
    return {
      reason: "open_failed",
      errno: v(error)
    };
  }
  let o = {
    reason: "not_same_tty"
  };
  try {
    let r = q(fd),
      u = q(1);
    if (r.rdev === u.rdev && r.ino === u.ino) return {
      fd: fd
    };
  } catch (error) {
    o = {
      reason: "fstat_failed",
      errno: v(error)
    };
  }
  try {
    N(fd);
  } catch {}
  return o;
}
function g(e, n, errno) {
  if (i("tengu_nonblocking_stdout", {
    result: c(e),
    reason: n === void 0 ? void 0 : c(n),
    errno: errno
  }), e === "installed") _("terminal_nonblocking_stdout");else if (n !== "not_a_tty" && n !== "unsupported_platform") p("terminal_nonblocking_stdout", n ?? "write_failed", errno === void 0 ? void 0 : {
    errno: errno
  });
}
function I() {
  try {
    let e = Re("bun:ffi"),
      n = e.dlopen("/usr/lib/libSystem.B.dylib", {
        ttyname_r: {
          args: ["i32", "ptr", "u64"],
          returns: "i32"
        }
      });
    try {
      let uint8Array = new Uint8Array(256);
      if (n.symbols.ttyname_r(1, uint8Array, uint8Array.length) !== 0) return;
      return new TextDecoder().decode(uint8Array.subarray(0, uint8Array.indexOf(0)));
    } finally {
      n.close();
    }
  } catch {
    return;
  }
}
function D7r(onEpisodeEnd, n = D) {
  let o = weakMap.get(process.stdout);
  if (o?.installedWrite !== void 0) return o.onEpisodeEnd = onEpisodeEnd, w(o);
  let r = n();
  if (r.fd === void 0) {
    if (t(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`), !E.has(r.reason)) E.add(r.reason), g("skipped", r.reason, pA(r.errno));
    return null;
  }
  let u = {
      fd: r.fd,
      originalWrite: process.stdout.write,
      installedWrite: void 0,
      queue: [],
      queuedBytes: 0,
      dropping: !1,
      timer: void 0,
      retryMs: 0,
      episode: {
        startedMs: 0,
        peakQueuedBytes: 0,
        droppedBytes: 0
      },
      onEpisodeEnd: onEpisodeEnd,
      onExit: () => a(u)
    },
    k = (l, f, M) => {
      let h = typeof f === "string" ? f : void 0,
        b = typeof f === "function" ? f : M;
      if (u.installedWrite === void 0) return u.originalWrite.call(process.stdout, l, h, b);
      return U(u, typeof l === "string" ? Buffer.from(l, h) : Buffer.from(l)), b?.(), !0;
    };
  return u.installedWrite = k, process.stdout.write = k, weakMap.set(process.stdout, u), process.on("exit", u.onExit), t("nonBlockingStdout: active"), g("installed"), w(u);
}
function w(e) {
  return {
    flush: () => a(e),
    restore: () => S(e),
    isActive: () => e.installedWrite !== void 0,
    queuedBytes: () => e.queuedBytes
  };
}
function L7r({
  envOverride: envOverride,
  isAnt: isAnt,
  remoteFlag: remoteFlag
}) {
  return envOverride ?? (isAnt || remoteFlag());
}
function PKt() {
  return weakMap.get(process.stdout)?.installedWrite !== void 0;
}
function IKt() {
  let e = weakMap.get(process.stdout);
  if (e?.installedWrite !== void 0) S(e);
}
function OKt() {
  let e = weakMap.get(process.stdout);
  if (e?.installedWrite !== void 0) a(e);
}
function x(e, n) {
  try {
    return A(e, n);
  } catch (error) {
    if (v(error) === "EAGAIN") return 0;
    throw error;
  }
}
function U(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = x(e.fd, n);
    } catch (error) {
      B(e, error), process.stdout.write(n);
      return;
    }
    if (o === n.length) return;
    e.episode = {
      startedMs: performance.now(),
      peakQueuedBytes: 0,
      droppedBytes: 0
    }, m(e, n.subarray(o)), W(e, o > 0);
    return;
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return;
  }
  if (e.queuedBytes + n.length > F) {
    e.episode.droppedBytes += e.queuedBytes + n.length, e.queue = [], e.queuedBytes = 0, e.dropping = !0, t(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, {
      level: "warn"
    }), m(e, L);
    return;
  }
  m(e, n);
}
function m(e, n) {
  if (e.queue.push(n), e.queuedBytes += n.length, e.queuedBytes > e.episode.peakQueuedBytes) e.episode.peakQueuedBytes = e.queuedBytes;
}
function W(e, n) {
  e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), Q), e.timer = setTimeout(Y, e.retryMs, e), e.timer.unref();
}
function Y(e) {
  e.timer = void 0;
  let n = !1;
  try {
    while (e.queue.length > 0) {
      if (n && e.queue.length > 1) e.queue = [Buffer.concat(e.queue, e.queuedBytes)];
      let o = e.queue[0],
        r = x(e.fd, o);
      if (r === 0) {
        W(e, n);
        return;
      }
      if (n = !0, e.queuedBytes -= r, r < o.length) e.queue[0] = o.subarray(r);else e.queue.shift();
    }
  } catch (error) {
    B(e, error);
    return;
  }
  T(e, "drain");
}
function T(e, endedBy) {
  e.dropping = !1, e.retryMs = 0;
  try {
    e.onEpisodeEnd({
      durationMs: Math.round(performance.now() - e.episode.startedMs),
      peakQueuedBytes: e.episode.peakQueuedBytes,
      droppedBytes: e.episode.droppedBytes,
      endedBy: endedBy
    });
  } catch (error) {
    d(error);
  }
}
function a(e) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  if (e.queue.length === 0) return;
  let queue = e.queue;
  e.queue = [], e.queuedBytes = 0;
  try {
    for (let o of queue) e.originalWrite.call(process.stdout, o);
  } catch (error) {
    B(e, error);
    return;
  }
  T(e, "flush");
}
function B(e, n) {
  t(`nonBlockingStdout: uninstalling (${n})`), e.queue = [], e.queuedBytes = 0, S(e), g("abandoned", void 0, ao(n));
}
function S(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  e.installedWrite = void 0, weakMap.delete(process.stdout), process.off("exit", e.onExit);
  try {
    N(e.fd);
  } catch {}
  a(e);
}
export { D7r, L7r, PKt, IKt, OKt };