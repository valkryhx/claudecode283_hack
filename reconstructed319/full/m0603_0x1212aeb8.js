// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  k,
  tr,
  db
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  ro
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  closeSync as N,
  constants as m,
  fstatSync as v,
  openSync as A,
  writeSync as F
} from "fs";
import {
  isatty as O
} from "tty";
var Q = 4194304,
  L = 25,
  I = Buffer.from("\x1B[0m"),
  d = new WeakMap,
  b = he(new Set, (e) => e.clear());

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
    case "macos": {
      let i = Y(e);
      if (i === void 0) return {
        reason: "ttyname_unavailable"
      };
      n = i;
      break
    }
    default:
      return {
        reason: "unsupported_platform"
      }
  }
  let o;
  try {
    o = A(n, m.O_WRONLY | m.O_NONBLOCK | m.O_NOCTTY | ro)
  } catch (i) {
    return {
      reason: "open_failed",
      errno: k(i)
    }
  }
  let r = {
    reason: "not_same_tty"
  };
  try {
    let i = v(o),
      u = v(e);
    if (i.rdev === u.rdev && i.ino === u.ino) return {
      fd: o
    }
  } catch (i) {
    r = {
      reason: "fstat_failed",
      errno: k(i)
    }
  }
  try {
    N(o)
  } catch {}
  return r
}

function S(e, n, o) {
  if (l("tengu_nonblocking_stdout", {
      result: f(e),
      reason: n === void 0 ? void 0 : f(n),
      errno: o
    }), e === "installed") g("terminal_nonblocking_stdout");
  else if (n !== "not_a_tty" && n !== "unsupported_platform") c("terminal_nonblocking_stdout", n ?? "write_failed", o === void 0 ? void 0 : {
    errno: o
  })
}

function Y(e) {
  try {
    return Bun.ant.ttyName(e) ?? void 0
  } catch {
    return
  }
}

function Moi(e, n = bVo) {
  let o = d.get(process.stdout);
  if (o?.installedWrite !== void 0) return o.onEpisodeEnd = e, w(o);
  let r = n();
  if (r.fd === void 0) {
    if (t(`nonBlockingStdout: not installed (${r.reason}${r.errno?`, ${r.errno}`:""})`), !b.has(r.reason)) b.add(r.reason), S("skipped", r.reason, db(r.errno));
    return null
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
      onEpisodeEnd: e,
      onExit: () => y(i)
    },
    u = (s, p, R) => {
      let q = typeof p === "string" ? p : void 0,
        E = typeof p === "function" ? p : R;
      if (i.installedWrite === void 0) return i.originalWrite.call(process.stdout, s, q, E);
      return C(i, typeof s === "string" ? Buffer.from(s, q) : Buffer.from(s)), E?.(), !0
    };
  return i.installedWrite = u, process.stdout.write = u, d.set(process.stdout, i), process.on("exit", i.onExit), t("nonBlockingStdout: active"), S("installed"), w(i)
}

function w(e) {
  return {
    flush: () => y(e),
    restore: () => _(e),
    isActive: () => e.installedWrite !== void 0,
    queuedBytes: () => e.queuedBytes
  }
}

function Doi({
  envOverride: e,
  isAnt: n,
  remoteFlag: o
}) {
  return e ?? (n || o())
}

function bQn() {
  return d.get(process.stdout)?.installedWrite !== void 0
}

function SQn() {
  let e = d.get(process.stdout);
  if (e?.installedWrite !== void 0) _(e)
}

function wQn() {
  let e = d.get(process.stdout);
  if (e?.installedWrite !== void 0) y(e)
}

function W(e, n) {
  try {
    return F(e, n)
  } catch (o) {
    if (k(o) === "EAGAIN") return 0;
    throw o
  }
}

function C(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = W(e.fd, n)
    } catch (r) {
      h(e, r), process.stdout.write(n);
      return
    }
    if (o === n.length) return;
    e.episode = {
      startedMs: performance.now(),
      peakQueuedBytes: 0,
      droppedBytes: 0
    }, B(e, n.subarray(o)), T(e, o > 0);
    return
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return
  }
  if (e.queuedBytes + n.length > Q) {
    e.episode.droppedBytes += e.queuedBytes + n.length, e.queue = [], e.queuedBytes = 0, e.dropping = !0, t(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, {
      level: "warn"
    }), B(e, I);
    return
  }
  B(e, n)
}

function B(e, n) {
  if (e.queue.push(n), e.queuedBytes += n.length, e.queuedBytes > e.episode.peakQueuedBytes) e.episode.peakQueuedBytes = e.queuedBytes
}

function T(e, n) {
  e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), L), e.timer = setTimeout(D, e.retryMs, e), e.timer.unref()
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
        return
      }
      if (n = !0, e.queuedBytes -= r, r < o.length) e.queue[0] = o.subarray(r);
      else e.queue.shift()
    }
  } catch (o) {
    h(e, o);
    return
  }
  M(e, "drain")
}

function M(e, n) {
  e.dropping = !1, e.retryMs = 0;
  try {
    e.onEpisodeEnd({
      durationMs: Math.round(performance.now() - e.episode.startedMs),
      peakQueuedBytes: e.episode.peakQueuedBytes,
      droppedBytes: e.episode.droppedBytes,
      endedBy: n
    })
  } catch (o) {
    a(o)
  }
}

function y(e) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  if (e.queue.length === 0) return;
  let n = e.queue;
  e.queue = [], e.queuedBytes = 0;
  try {
    for (let o of n) e.originalWrite.call(process.stdout, o)
  } catch (o) {
    h(e, o);
    return
  }
  M(e, "flush")
}

function h(e, n) {
  t(`nonBlockingStdout: uninstalling (${n})`), e.queue = [], e.queuedBytes = 0, _(e), S("abandoned", void 0, tr(n))
}

function _(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  e.installedWrite = void 0, d.delete(process.stdout), process.off("exit", e.onExit);
  try {
    N(e.fd)
  } catch {}
  y(e)
}
export {
  bVo,
  Moi,
  Doi,
  bQn,
  SQn,
  wQn
};
