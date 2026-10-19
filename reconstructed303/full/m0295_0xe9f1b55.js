// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  $gn,
  Bgn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  P_t,
  fhe
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  XBr
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  ha
} from "B:/~BUN/root/chunk-rsysgs10.js";
var uh = 1e6;
import {
  constants as m
} from "fs";

function iu() {
  return m.O_RDONLY | aOe()
}

function aOe() {
  if (I() === "windows") return 0;
  return m.O_NOFOLLOW | m.O_NONBLOCK
}
var _Os = ["aarch64-apple-darwin", "x86_64-apple-darwin", "aarch64-unknown-linux-musl", "x86_64-unknown-linux-musl"];

function O(t, n) {
  let e = n === "arm64" ? "aarch64" : n === "x64" ? "x86_64" : void 0;
  if (e === void 0) return;
  switch (t) {
    case "macos":
      return `${e}-apple-darwin`;
    case "linux":
    case "wsl":
      return `${e}-unknown-linux-musl`;
    case "windows":
    case "unknown":
      return
  }
}
var cRr = 268435456;

function uRr() {
  return O(I(), "x64")
}

function spt(t, n) {
  if (t.endsWith(`-${n}`)) {
    let e = t.slice(0, -(n.length + 1));
    return P_t.test(e) ? e : void 0
  }
  if (t.endsWith(`-${n}.exe`)) {
    let e = t.slice(0, -(n.length + 5));
    return P_t.test(e) ? `${e}.exe` : void 0
  }
  return
}
class u {
  texts = new Map;
  readingForCalls = new Map;
  lastReadForCalls = Promise.resolve(void 0)
}
class _ {
  syncPromise = null;
  firstSyncPromise = null;
  firstListDeferred = null;
  firstRoundSettled = !1;
  firstRoundEmitted = !1;
  resyncTimer = null;
  resyncRunRound = null;
  resyncArmed = null;
  stopAwaitingActivity = null;
  consecutiveFailedRounds = 0;
  lostRowsRecheckMs = 100;
  bucketGeneration = null;
  pendingDownloads = new Map;
  placeholders = new Map;
  listedSkills = new Map;
  listedOwnerships = new Map;
  listedSkillsAnswer = "none_yet";
  listNeverStarted = !1;
  hostMountKinds = new Map;
  hostMountWorkOutstanding = null;
  hostMountWorkStartedAt = 0;
  hostMountWorkIsCatalogs = !1;
  hostCatalog = new u;
  missingSkillResyncAt = -1 / 0;
  missingSkillResync = null;
  reset() {
    if (this.syncPromise = null, this.firstSyncPromise = null, this.firstListDeferred = null, this.firstRoundEmitted = !1, this.firstRoundSettled = !1, Bgn(!1), $gn(!1), this.resyncTimer) clearTimeout(this.resyncTimer), this.resyncTimer = null;
    this.resyncRunRound = null, this.resyncArmed = null, this.stopAwaitingActivity?.(), this.consecutiveFailedRounds = 0, this.lostRowsRecheckMs = 100, this.bucketGeneration = null, this.listedSkills.clear(), this.listedOwnerships.clear(), this.listedSkillsAnswer = "none_yet", this.listNeverStarted = !1, this.hostMountKinds.clear(), this.hostMountWorkOutstanding = null, this.hostMountWorkStartedAt = 0, this.hostMountWorkIsCatalogs = !1, this.hostCatalog = new u, this.pendingDownloads.clear(), this.placeholders.clear(), this.missingSkillResyncAt = -1 / 0, this.missingSkillResync = null
  }
}
var P = new z(() => new _);

function cp() {
  return P.of(j().host)
}
import {
  lstat as h,
  open as R,
  realpath as w
} from "fs/promises";
import {
  join as c
} from "path";

function pRr(t) {
  return t.length >= 2 && t[0] === 80 && t[1] === 75
}
var hnn = "/mnt/skills",
  f = {
    public: "anthropic",
    examples: "anthropic-example"
  },
  Q0t = "public",
  M = 3000,
  C = 33554432,
  N = 600000,
  A = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;

function jvo(t, n, e) {
  e.set(n.reason, (e.get(n.reason) ?? 0) + 1), X("info", "skills_sync_host_mount_miss", {
    kind: t,
    ...n
  })
}

function RWn(t) {
  return Object.fromEntries(Array.from(t, ([n, e]) => [`mount_miss_${n}`, e]))
}

function v(t) {
  if (t.creator_type !== "anthropic" || t.id !== t.name || !fhe(t.name)) return;
  if (t.source === f.public) return "public";
  return t.source === f.examples && t.is_public_provisioned === !0 ? "examples" : void 0
}

function bOs(t) {
  let {
    hostMountKinds: n
  } = cp();
  n.clear();
  for (let e of t) {
    let o = v(e);
    if (o !== void 0) n.set(e.id, o)
  }
}

function y() {
  return XBr() && aOe() !== 0
}

function SOs(t) {
  let n = cp().hostMountKinds.get(t.skillId);
  return n !== void 0 && y() && t.name === t.skillId && t.source === f[n] && t.requestedVersion === void 0 ? n : void 0
}
async function wOs(t, n) {
  if (!y()) return null;
  let e = {
      deadline: performance.now() + M,
      spentMs: 0,
      waitedMs: 0
    },
    o = await g(e, () => T(t)),
    i = ha(1, (s, r, a) => g(e, () => F(s, r, a)));
  return {
    async readZip(s, r) {
      let a = "reason" in o ? o : o.get(s) ?? d,
        l = "reason" in a ? a : await i(c(hnn, s, `${r.name}.skill`), r.updatedAt, a.device);
      if ("zip" in l) return l.zip;
      jvo(s, l, n);
      return
    },
    spentMs: () => Math.round(e.spentMs),
    waitedMs: () => Math.round(e.waitedMs)
  }
}
async function g(t, n) {
  let e = cp();
  while (e.hostMountWorkOutstanding !== null && e.hostMountWorkIsCatalogs) {
    let r = e.hostMountWorkOutstanding,
      a = performance.now(),
      l = Math.min(t.deadline, e.hostMountWorkStartedAt + M) - a;
    if (l > 0) await je(r.catch(() => {}), l), t.waitedMs += performance.now() - a;
    if (e.hostMountWorkOutstanding === r) break
  }
  let o = performance.now();
  if (e.hostMountWorkOutstanding !== null) return {
    reason: "earlier_work_outstanding"
  };
  if (o >= t.deadline) return {
    reason: "budget_spent"
  };
  let i = x(e, n, o, !1),
    s = await je(i, t.deadline - o);
  return t.spentMs += performance.now() - o, s ?? {
    reason: "timed_out"
  }
}
async function Wvo(t) {
  let n = cp();
  while (n.hostMountWorkOutstanding !== null) {
    let e = n.hostMountWorkOutstanding;
    if (await e.catch(() => {}), n.hostMountWorkOutstanding === e) n.hostMountWorkOutstanding = null
  }
  return x(n, t, performance.now(), !0)
}

function vOs() {
  let t = cp();
  return t.hostMountWorkOutstanding !== null && performance.now() - t.hostMountWorkStartedAt >= M
}

function x(t, n, e, o) {
  let i = n();
  t.hostMountWorkOutstanding = i, t.hostMountWorkStartedAt = e, t.hostMountWorkIsCatalogs = o;
  let s = () => {
    if (t.hostMountWorkOutstanding === i) t.hostMountWorkOutstanding = null
  };
  return i.then(s, s), i
}
var d = {
  reason: "not_a_mount"
};
async function T(t) {
  let n = await h(hnn).catch(p),
    e = "reason" in n || n.isDirectory() ? n : d,
    o = new Map;
  for (let i of t) {
    if ("reason" in e) {
      o.set(i, e);
      continue
    }
    let s = await h(c(hnn, i)).catch(p);
    o.set(i, "reason" in s ? s : s.isDirectory() && s.dev !== e.dev ? {
      device: s.dev
    } : d)
  }
  return o
}

function p(t) {
  let n = k(t);
  return n === "ENOENT" ? {
    reason: "no_mount"
  } : {
    reason: "probe_failed",
    code: n ?? "unknown"
  }
}

function F(t, n, e) {
  return b(t, e, C, async (o, i) => {
    let s = n !== null && A.test(n) ? Date.parse(n) : Number.NaN;
    if (Number.isNaN(s)) return {
      reason: "row_date_unreadable"
    };
    if (i.mtimeMs <= s + N) return {
      reason: "not_newer_than_row"
    };
    let r = await o.readFile();
    return pRr(r) ? {
      zip: r
    } : {
      reason: "not_zip"
    }
  })
}
async function zvo(t) {
  return (await T(new Set([t]))).get(t) ?? d
}
async function kOs() {
  let t = await zvo(Q0t),
    n = "reason" in t ? t : await w(c(hnn, Q0t)).then((e) => ({
      device: t.device,
      root: e
    }), p);
  if ("reason" in n) X("warn", "skill_host_catalog_not_read", n);
  return n
}
async function EOs(t, n, e) {
  let o = c(t, n, "SKILL.md"),
    i = await S(o) ?? await Gvo(o, e, uh);
  return "reason" in i ? i : await S(o) ?? {
    text: i.text,
    filePath: o
  }
}
async function S(t) {
  try {
    return await w(t) === t ? void 0 : {
      reason: "file_is_link"
    }
  } catch (n) {
    return H(n)
  }
}

function Gvo(t, n, e) {
  return b(t, n, e, async (o) => ({
    text: await o.readFile({
      encoding: "utf-8"
    })
  }))
}
async function b(t, n, e, o) {
  let i;
  try {
    i = await R(t, iu());
    let s = await i.stat();
    if (s.dev !== n) return {
      reason: "file_on_other_device"
    };
    if (!s.isFile()) return {
      reason: "not_a_file"
    };
    if (s.size > e) return {
      reason: "too_large"
    };
    return await o(i, s)
  } catch (s) {
    return H(s)
  } finally {
    await i?.close().catch(() => {})
  }
}

function H(t) {
  let n = k(t);
  switch (n) {
    case "ENOENT":
      return {
        reason: "file_absent"
      };
    case "ELOOP":
      return {
        reason: "file_is_link"
      };
    default:
      return {
        reason: "read_failed", code: n ?? "unknown"
      }
  }
}
export {
  uh,
  iu,
  aOe,
  _Os,
  cRr,
  uRr,
  spt,
  pRr,
  cp,
  hnn,
  Q0t,
  jvo,
  RWn,
  bOs,
  SOs,
  wOs,
  Wvo,
  vOs,
  zvo,
  kOs,
  EOs,
  Gvo
};
