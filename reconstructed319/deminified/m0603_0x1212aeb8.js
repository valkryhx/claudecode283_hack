// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, tr, db } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { closeSync as N, constants as m, fstatSync as v, openSync as A, writeSync as F } from "fs";
import { isatty as O } from "tty";
var Q = 4194304,
  L = 25,
  I = Buffer.from("\x1B[0m"),
  weakMap = new WeakMap(),
  b = he(new Set(), e => e.clear());
function bVo(e = 1) {
  if (!(e === 1 ? process.stdout.isTTY : O(e))) return {
    reason: "not_a_tty"
  };
  let n;
  switch (x()) {
    case "linux":
    case "wsl":
      n = `/proc/self/fd/${e}`;
      break;
    case "macos":
      {
        let i = Y(e);
        if (i === void 0) return {
          reason: "ttyname_unavailable"
        };
        n = i;
        break;
      }
    default:
      return {
        reason: "unsupported_platform"
      };
  }
  let fd;
  try {
    fd = A(n, m.O_WRONLY | m.O_NONBLOCK | m.O_NOCTTY | ro);
  } catch (error) {
    return {
      reason: "open_failed",
      errno: k(error)
    };
  }
  let r = {
    reason: "not_same_tty"
  };
  try {
    let i = v(fd),
      u = v(e);
    if (i.rdev === u.rdev && i.ino === u.ino) return {
      fd: fd
    };
  } catch (error) {
    r = {
      reason: "fstat_failed",
      errno: k(error)
    };
  }
  try {
    N(fd);
  } catch {}
  return r;
}
function S(e, n, errno) {
  if (l("tengu_nonblocking_stdout", {
    result: f(e),
    reason: n === void 0 ? void 0 : f(n),
    errno: errno
  }), e === "installed") g("terminal_nonblocking_stdout");else if (n !== "not_a_tty" && n !== "unsupported_platform") c("terminal_nonblocking_stdout", n ?? "write_failed", errno === void 0 ? void 0 : {
    errno: errno
  });
}
function Y(e) {
  try {
    return Bun.ant.ttyName(e) ?? void 0;
  } catch {
    return;
  }
}
function Moi(onEpisodeEnd, n = bVo) {
  let o = weakMap.get(process.stdout);
  if (o?.installedWrite !== void 0) return o.onEpisodeEnd = onEpisodeEnd, w(o);
  let r = n();
  if (r.fd === void 0) {
    if (t(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`), !b.has(r.reason)) b.add(r.reason), S("skipped", r.reason, db(r.errno));
    return null;
  }
  let i = {
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
      onExit: () => y(i)
    },
    u = (s, p, R) => {
      let q = typeof p === "string" ? p : void 0,
        E = typeof p === "function" ? p : R;
      if (i.installedWrite === void 0) return i.originalWrite.call(process.stdout, s, q, E);
      return C(i, typeof s === "string" ? Buffer.from(s, q) : Buffer.from(s)), E?.(), !0;
    };
  return i.installedWrite = u, process.stdout.write = u, weakMap.set(process.stdout, i), process.on("exit", i.onExit), t("nonBlockingStdout: active"), S("installed"), w(i);
}
function w(e) {
  return {
    flush: () => y(e),
    restore: () => _(e),
    isActive: () => e.installedWrite !== void 0,
    queuedBytes: () => e.queuedBytes
  };
}
function Doi({
  envOverride: envOverride,
  isAnt: isAnt,
  remoteFlag: remoteFlag
}) {
  return envOverride ?? (isAnt || remoteFlag());
}
function bQn() {
  return weakMap.get(process.stdout)?.installedWrite !== void 0;
}
function SQn() {
  let e = weakMap.get(process.stdout);
  if (e?.installedWrite !== void 0) _(e);
}
function wQn() {
  let e = weakMap.get(process.stdout);
  if (e?.installedWrite !== void 0) y(e);
}
function W(e, n) {
  try {
    return F(e, n);
  } catch (error) {
    if (k(error) === "EAGAIN") return 0;
    throw error;
  }
}
function C(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = W(e.fd, n);
    } catch (error) {
      h(e, error), process.stdout.write(n);
      return;
    }
    if (o === n.length) return;
    e.episode = {
      startedMs: performance.now(),
      peakQueuedBytes: 0,
      droppedBytes: 0
    }, B(e, n.subarray(o)), T(e, o > 0);
    return;
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return;
  }
  if (e.queuedBytes + n.length > Q) {
    e.episode.droppedBytes += e.queuedBytes + n.length, e.queue = [], e.queuedBytes = 0, e.dropping = !0, t(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, {
      level: "warn"
    }), B(e, I);
    return;
  }
  B(e, n);
}
function B(e, n) {
  if (e.queue.push(n), e.queuedBytes += n.length, e.queuedBytes > e.episode.peakQueuedBytes) e.episode.peakQueuedBytes = e.queuedBytes;
}
function T(e, n) {
  e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), L), e.timer = setTimeout(D, e.retryMs, e), e.timer.unref();
}
function D(e) {
  e.timer = void 0;
  let n = !1;
  try {
    while (e.queue.length > 0) {
      if (n && e.queue.length > 1) e.queue = [Buffer.concat(e.queue, e.queuedBytes)];
      let o = e.queue[0],
        r = W(e.fd, o);
      if (r === 0) {
        T(e, n);
        return;
      }
      if (n = !0, e.queuedBytes -= r, r < o.length) e.queue[0] = o.subarray(r);else e.queue.shift();
    }
  } catch (error) {
    h(e, error);
    return;
  }
  M(e, "drain");
}
function M(e, endedBy) {
  e.dropping = !1, e.retryMs = 0;
  try {
    e.onEpisodeEnd({
      durationMs: Math.round(performance.now() - e.episode.startedMs),
      peakQueuedBytes: e.episode.peakQueuedBytes,
      droppedBytes: e.episode.droppedBytes,
      endedBy: endedBy
    });
  } catch (error) {
    a(error);
  }
}
function y(e) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  if (e.queue.length === 0) return;
  let queue = e.queue;
  e.queue = [], e.queuedBytes = 0;
  try {
    for (let o of queue) e.originalWrite.call(process.stdout, o);
  } catch (error) {
    h(e, error);
    return;
  }
  M(e, "flush");
}
function h(e, n) {
  t(`nonBlockingStdout: uninstalling (${n})`), e.queue = [], e.queuedBytes = 0, _(e), S("abandoned", void 0, tr(n));
}
function _(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  e.installedWrite = void 0, weakMap.delete(process.stdout), process.off("exit", e.onExit);
  try {
    N(e.fd);
  } catch {}
  y(e);
}
export { bVo, Moi, Doi, bQn, SQn, wQn };