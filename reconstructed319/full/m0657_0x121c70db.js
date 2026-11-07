// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R,
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  J,
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  lAe,
  Cie,
  Xy,
  PU,
  tc
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  yZ
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  qO,
  SN
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  zc
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
async function rit(e, r = {}) {
  if (!Cie(e)) return "eperm";
  try {
    process.kill(e, r.signal ?? "SIGTERM")
  } catch (n) {
    if (k(n) === "EPERM") return "eperm";
    return "exited"
  }
  let o = Date.now() + (r.gracefulMs ?? 2000);
  while (!0) {
    let n = Date.now() >= o;
    try {
      process.kill(e, 0)
    } catch {
      return "exited"
    }
    if (await lAe(e)) return "exited";
    if (n) return "timed-out";
    await J(50)
  }
}
import {
  lstat as l,
  readFile as u,
  rename as f,
  rm as g,
  unlink as d
} from "fs/promises";
import {
  uptime as b
} from "os";
import {
  join as h
} from "path";
var L = "daemon.lock";

function eF() {
  return h(Ue(), L)
}

function oit() {
  return Ve.state("daemon-lock")
}

function D(e) {
  return e === "EISDIR" || e === "ENXIO"
}
class w {
  logged = !1;
  markLogged() {
    if (this.logged) return !1;
    return this.logged = !0, !0
  }
}
var S = new W(() => new w);

function I() {
  return S.of(H().host)
}
async function E() {
  let e = await l(eF()).catch(() => {
    return
  });
  return e !== void 0 && e.isSymbolicLink()
}
async function y(e) {
  let r = eF(),
    o = await l(r).catch(() => {
      return
    });
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
  if (I().markLogged()) t(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, {
    level: "warn"
  });
  await g(r, {
    recursive: !0,
    force: !0
  }).catch(() => {})
}
var C = 65536;
async function mni(e, r) {
  if (X() && r !== void 0) {
    let o = () => r.write(oit(), _(e, null, 2), {
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
      if (n.error.code !== "Failed" || !yZ(a)) break;
      if (a === "ELOOP") {
        if (await E()) return !1;
        break
      }
      if (i === 1) break;
      await y(a), n = await o()
    }
    if (n.ok) return !0;
    throw new R(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode"in n.error&&n.error.telemetryCode?` (${n.error.telemetryCode})`:""}`, "[DaemonLock] v5 acquire write failed")
  }
  try {
    return await SN(eF(), _(e, null, 2)), !0
  } catch (o) {
    if (k(o) === "EEXIST") return !1;
    throw o
  }
}
async function hni(e, r) {
  let o = await eQ(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await JKr({
    ...o,
    bgDisabled: !0
  }, r)
}
async function eQ(e) {
  let r;
  if (e) {
    let n = await e.read([oit()]);
    if (!n.ok) {
      if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) throw new R(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode"in n.error&&n.error.telemetryCode?` (${n.error.telemetryCode})`:""}`, "[DaemonLock] v5 lock read failed");
      let s = await e.delete(oit());
      if (!s.ok && s.error.code === "Failed") {
        let m = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (D(m)) await y(m)
      }
      return null
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > C) return await e.delete(oit()), null;
    r = Buffer.from(i.value).toString("utf8");
    let a = et(r, !1);
    if (a && typeof a === "object") {
      let c = a;
      if (typeof c.pid === "number" && typeof c.version === "string") return a
    }
    return null
  }
  try {
    let n = await l(eF());
    if (!n.isFile() || n.size > 65536) return await g(eF(), {
      recursive: !0,
      force: !0
    }).catch(() => {}), null;
    r = await u(eF(), "utf8")
  } catch (n) {
    if (K(n)) return null;
    throw n
  }
  let o = et(r, !1);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o
  }
  return null
}
async function JKr(e, r) {
  if (r) {
    let i = await r.write(oit(), _(e, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!i.ok) {
      let c = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (c === "LockContended" || c === "LockSuspect") {
        let s = await eQ(r);
        if (s?.pid !== e.pid || s?.startedAt !== e.startedAt) return !1;
        i = await r.write(oit(), _(e, null, 2), {
          mode: 438 & ~process.umask()
        })
      }
      if (!i.ok) throw new R(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode"in i.error&&i.error.telemetryCode?` (${i.error.telemetryCode})`:""}`, "[DaemonLock] v5 replace write failed")
    }
    let a = await eQ(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt
  }
  let o = await qO(eF(), _(e, null, 2));
  try {
    await f(o, eF())
  } catch (i) {
    let a = k(i);
    if (a === "EEXIST" || a === "EPERM") {
      await d(eF()).catch(() => {});
      try {
        await f(o, eF())
      } catch (c) {
        await d(o).catch(() => {});
        let s = k(c);
        if (s === "EEXIST" || s === "EPERM") return !1;
        throw c
      }
    } else throw await d(o).catch(() => {}), i
  }
  let n = await eQ(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt
}
async function gni(e) {
  if (e) {
    let r = await e.delete(oit());
    if (!r.ok) throw new R(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode"in r.error&&r.error.telemetryCode?` (${r.error.telemetryCode})`:""}`, "[DaemonLock] v5 lock delete failed");
    return
  }
  try {
    await d(eF())
  } catch (r) {
    if (!K(r)) throw r
  }
}
async function VJn(e) {
  let r;
  try {
    r = await u(`/proc/${e}/cmdline`, "utf8")
  } catch {
    return !0
  }
  let o = r.split("\x00");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon")
}

function p(e) {
  return e !== void 0 && (/(^|\/)claude(\.exe)?$|\/claude-code\/cli\.js$|\/claude\/versions\/[^/\s]+$/.test(e) || e === zc().target)
}
async function yni(e) {
  let r = await we(u(`/proc/${e}/cmdline`, "utf8").catch(() => {
    return
  }), 1000);
  if (r !== void 0) {
    let n = r.split("\x00"),
      i = /(^|\/)(node|bun)$/.test(n[0]) ? 1 : 0;
    return n[0] === "claude daemon" || p(n[i]) && /^daemon\0(run\0|--json-path\0[^\0]+\0--log-file\0[^\0]+\0--origin\0service\0$)/.test(n.slice(i + 1).join("\x00"))
  }
  let o = await ut("ps", ["-ww", "-o", "args=", "-p", String(e)], {
    timeout: 1000,
    useCwd: !1
  });
  return p(/^(?:(?:\S*\/)?(?:node|bun)\s+)?(\/\S+)\sdaemon\s(?:run(?:\s|$)|--json-path\s\S+\s--log-file\s\S+\s--origin\sservice\s*$)/.exec(o.code === 0 ? o.stdout : "")?.[1])
}
var PTt = 2,
  QKr = 250;
async function r_n(e, r, o) {
  if (r === void 0) return !0;
  for (let n = 0; n < o; n++) {
    if (n > 0) await J(QKr);
    let i = await tc(e, {
      skipCache: n > 0
    });
    if (i !== void 0) return i === r
  }
  return !1
}
var v = 120000;

function x(e, r = Date.now(), o = b()) {
  return e.startedAt < r - o * 1000 - v
}
async function KJn(e) {
  let r = PU(e);
  if (r !== void 0) {
    let o = await Xy(e.pid, r);
    if (o === !0) return null;
    if (o === !1) return "pid_recycled"
  }
  return x(e) ? "predates_boot" : null
}

function nKt(e) {
  return PU(e) !== void 0
}

function _ni() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${eF()}`
}
async function FT(e = 1, r) {
  let o = await eQ(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0)
  } catch {
    return null
  }
  if (!await VJn(o.pid)) return null;
  if (!await r_n(o.pid, PU(o), e)) return null;
  return o
}
async function o_n(e) {
  let r = await FT(1, e).catch(() => null);
  if (!r) return {
    kind: "none"
  };
  switch (r.origin) {
    case "service":
      return {
        kind: "service", lock: r
      };
    case "foreground":
      return {
        kind: "foreground", lock: r
      };
    case "transient":
    case void 0: {
      if (!nKt(r)) return {
        kind: "not-stopped",
        pid: r.pid,
        outcome: "unverified"
      };
      let o = await rit(r.pid);
      return o === "exited" ? {
        kind: "stopped",
        pid: r.pid
      } : {
        kind: "not-stopped",
        pid: r.pid,
        outcome: o
      }
    }
    default:
      return r.origin, {
        kind: "unknown-origin",
        lock: r
      }
  }
}

function o6e(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`
  }
}

function qJn(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`
}
async function bni(e, r) {
  let o = await FT(1, r).catch(() => null);
  return !!o && o.version !== e
}
export {
  rit,
  eF,
  oit,
  mni,
  hni,
  eQ,
  JKr,
  gni,
  VJn,
  yni,
  PTt,
  QKr,
  r_n,
  KJn,
  nKt,
  _ni,
  FT,
  o_n,
  o6e,
  qJn,
  bni
};
