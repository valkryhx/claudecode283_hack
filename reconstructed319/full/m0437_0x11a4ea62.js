// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  sv,
  QU,
  kae
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  YSt
} from "B:/~BUN/root/chunk-0w2htvr6.js";
import {
  jR
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Vp,
  wb
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  ta
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  o,
  I,
  u,
  xt,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
async function* M9e(e) {
  let n = [];
  for await (let t of e) {
    if (typeof t !== "string") throw TypeError("transcriptLines takes text: open the stream with an encoding");
    let r = 0;
    for (let i = t.indexOf(`
`); i !== -1; i = t.indexOf(`
`, r)) n.push(t.slice(r, i)), yield S(n.join("")), n = [], r = i + 1;
    if (r < t.length) n.push(t.slice(r))
  }
  if (n.length > 0) yield S(n.join(""))
}

function S(e) {
  return e.endsWith("\r") ? e.slice(0, -1) : e
}

function EW(e, n) {
  return O(e, {
    udsInboxEnabled: typeof n === "boolean" ? n : !0
  })
}

function O(e, {
  udsInboxEnabled: n
}) {
  if (e?.kind === "channel") return !0;
  if (e?.kind === "observer") return !0;
  if (e?.kind === "observer-activity") return !0;
  if (e?.kind === "slack-ping") return !0;
  if (e?.kind === "voice-call") return !0;
  if (e?.kind === "peer") {
    if (e.senderTaskId !== void 0) return !0;
    if (n) return !0
  }
  return !1
}
import {
  constants as g
} from "fs";
import {
  open as b,
  readdir as ce,
  rm as fe,
  stat as le
} from "fs/promises";
async function NRi(e, n, t) {
  if (X() && t !== void 0) return _(t, n);
  let r;
  try {
    r = await b(e, g.O_WRONLY | g.O_APPEND)
  } catch (i) {
    let s = k(i);
    if (s === "ENOENT" || s === "ENOTDIR") return !1;
    throw i
  }
  try {
    let {
      size: i
    } = await r.stat();
    if (i === 0) return !1;
    let s = i,
      d = Buffer.from(n, "utf8"),
      a = 0;
    while (a < d.length) {
      let {
        bytesWritten: c
      } = await r.write(d, a, d.length - a, s);
      if (c <= 0) throw new R(`tryAppend: short write to ${e} stalled with ${d.length-a} bytes remaining`, "tryAppend: zero-progress short write");
      if (a += c, s !== void 0) s += c
    }
    return !0
  } finally {
    await r.close()
  }
}
async function _({
  backend: e,
  key: n
}, t) {
  let r = await e.append(n, [{
    data: t
  }], {
    precondition: {
      type: "ifExists",
      nonEmpty: !0
    }
  });
  if (!r.ok) {
    if (r.error.code === "NotFound") return !1;
    throw Error("Session append: transcript not writable via storage", {
      cause: r.error
    })
  }
  return !0
}
import {
  constants as M
} from "fs";
import {
  lstat as U,
  open as j
} from "fs/promises";
import {
  dirname as x,
  join as P
} from "path";
var w = '"type":"continued-in"',
  A = p(() => xt({
    type: T("continued-in"),
    continuedInSessionId: o()
  })),
  N = p(() => xt({
    type: T("assistant"),
    isApiErrorMessage: I().optional(),
    message: xt({
      stop_reason: o().nullish()
    }).optional()
  }));

function HIt(e, {
  canFork: n
} = {
  canFork: !0
}) {
  if (e.provable) return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
  let t = n ? ", or add --fork-session to branch off a copy" : "";
  return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${t}.`
}

function FRi(e, n) {
  return {
    type: "continued-in",
    timestamp: new Date().toISOString(),
    sessionId: e,
    continuedInSessionId: n
  }
}

function chr(e) {
  if (!e.includes(w)) return;
  let n = e.length;
  while (n > 0) {
    let t = e.lastIndexOf(`
`, n - 1),
      r = e.slice(t + 1, n);
    n = t;
    let i = r.includes(w),
      s = r.includes('"type":"user"') || r.includes('"type":"assistant"');
    if (i || s) try {
      let d = JSON.parse(r);
      if (i) {
        let a = A().safeParse(d);
        if (a.success) return QU(a.data.continuedInSessionId) ?? void 0
      }
      if (s && L(d)) return
    } catch {}
    if (t < 0) break
  }
  return
}

function L(e) {
  let n = N().safeParse(e);
  if (n.success) return n.data.isApiErrorMessage !== !0 && typeof n.data.message?.stop_reason === "string";
  return D(e) && YSt(e, {
    commandFallback: ""
  }) !== void 0
}
async function HRi(e, n, t) {
  let r = P(x(e), `${n}.jsonl`),
    i = await kae(r, wb(Vp(r, t)));
  return i !== null && await PPn(r, i.head, i.tail, i.size, t)
}
var f = '"parentUuid":',
  C = 16777216,
  h = 1048576;
async function PPn(e, n, t, r, i) {
  if (n.includes(f) || t.includes(f)) return !0;
  if (r <= sv) return !1;
  if (Vp(e, i) !== void 0) return !0;
  try {
    if (!(await U(e)).isFile()) return !1;
    let d = await j(e, M.O_RDONLY);
    try {
      if (!(await d.stat()).isFile()) return !1;
      let a = Buffer.allocUnsafe(h + f.length),
        c = 0,
        m = 0;
      while (m < C) {
        let {
          bytesRead: y
        } = await d.read(a, c, h, m);
        if (y === 0) return !1;
        let l = c + y;
        if (a.subarray(0, l).includes(f)) return !0;
        c = Math.min(f.length, l), a.copyWithin(0, l - c, l), m += y
      }
      return !0
    } finally {
      await d.close()
    }
  } catch {
    return !1
  }
}
import {
  readFile as F
} from "fs/promises";
import {
  dirname as W,
  join as z
} from "path";
var B = p(() => u({
  customTitle: o()
}));

function uhr(e, n) {
  return z(W(e), n, "custom-title.json")
}
async function $Ri(e, n, t) {
  let r = await H(uhr(e, n), t);
  if (r === void 0) return;
  let i;
  try {
    i = JSON.parse(r)
  } catch {
    return
  }
  let s = B().safeParse(i);
  if (!s.success) return;
  return ta(s.data.customTitle) || void 0
}
async function H(e, n) {
  if (X() && n !== void 0) try {
    let t = jR(e);
    if (t !== void 0) {
      let r = await n.readText([t]);
      if (!r.ok) return;
      let i = r.value.items[0];
      return i.found ? i.value : void 0
    }
  } catch {
    return
  }
  if (q()) return;
  try {
    return await F(e, "utf8")
  } catch {
    return
  }
}
var gut = "Tool permission request failed",
  bls = "Tool permission stream closed before response received",
  _io = "Stream closed",
  Fe = [`${gut}: AbortError: ${bls}`, `${gut}: AbortError: ${_io}`, gut];
var fu = 600000,
  URi = ["SessionStart", "Setup"],
  Sls = 30000,
  OPn = 6000,
  wls = 30000,
  BRi = 5000;
class uA {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = !1;
  hasError;
  started = !1;
  constructor(e) {
    this.returned = e
  }
  get ended() {
    return this.isDone
  } [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return this.started = !0, this
  }
  next() {
    if (this.queue.length > 0) return Promise.resolve({
      done: !1,
      value: this.queue.shift()
    });
    if (this.isDone) return Promise.resolve({
      done: !0,
      value: void 0
    });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((e, n) => {
      this.readResolve = e, this.readReject = n
    })
  }
  get readerIsWaiting() {
    return this.readResolve !== void 0 && !this.isDone
  }
  enqueue(e) {
    if (this.readResolve) {
      let n = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, n({
        done: !1,
        value: e
      })
    } else this.queue.push(e)
  }
  dropNewestQueued(e) {
    let n = this.queue.findLastIndex(e);
    if (n !== -1) this.queue.splice(n, 1)
  }
  done() {
    if (this.isDone = !0, this.readResolve) {
      let e = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, e({
        done: !0,
        value: void 0
      })
    }
  }
  error(e) {
    if (this.hasError = e, this.readReject) {
      let n = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, n(e)
    }
  }
  return () {
    if (this.isDone = !0, this.returned) this.returned();
    return Promise.resolve({
      done: !0,
      value: void 0
    })
  }
}

function E(e, n) {
  let t = e.type === "attachment" ? e.attachment : void 0;
  if (typeof t !== "object" || t === null || !("type" in t) || t.type !== "queued_command") return;
  let r = Reflect.get(t, n);
  return typeof r === "string" && r ? r : void 0
}

function $It(e) {
  return E(e, "source_uuid")
}

function kls(e) {
  return E(e, "delivery_id")
}

function EWe(e) {
  let {
    submitUuid: n
  } = e, t = $It(e) ?? (e.type === "system" && typeof n === "string" ? n : void 0);
  return t ? [e.uuid, t] : [e.uuid]
}

function fhr(e) {
  return e.type === "user" ? IPn(e.droppedPromptUuids) : []
}

function IPn(e) {
  return Array.isArray(e) ? e.filter((n) => typeof n === "string" && n !== "") : []
}

function vls(e, n) {
  let t = e.findIndex((r) => r.uuid === n);
  return t !== -1 ? t : e.findIndex((r) => $It(r) === n)
}
export {
  NRi,
  M9e,
  HIt,
  FRi,
  chr,
  HRi,
  PPn,
  uhr,
  $Ri,
  gut,
  bls,
  _io,
  fu,
  URi,
  Sls,
  OPn,
  wls,
  BRi,
  uA,
  $It,
  kls,
  EWe,
  fhr,
  IPn,
  vls,
  EW
};
