// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  P,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  $_,
  WI,
  d5n
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  eA
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  Ff,
  dv
} from "B:/~BUN/root/chunk-esqb9g1a.js";
import {
  li
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  G
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  o,
  M,
  u,
  ut,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  QUe
} from "B:/~BUN/root/chunk-81280fc2.js";
var tae = "2025-11-25",
  Rme = "2026-07-28",
  c9 = "reopen_refetch",
  n_o = 2048,
  vst = "The tool call was interrupted before a result was received. It may or may not have completed on the server \u2014 verify before assuming it succeeded, and retry if needed.",
  $ke = 16777216,
  d9 = 5;

function kst(e) {
  return Math.min(1000 * 2 ** (e - 1), 30000)
}
var UPt = "inode/directory";

function _3(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32)
}
import {
  constants as w
} from "fs";
import {
  open as g,
  readdir as re,
  rm as oe,
  stat as ie
} from "fs/promises";
async function r_o(e, t, i) {
  if (H() && i !== void 0) return E(i, t);
  let n;
  try {
    n = await g(e, w.O_WRONLY | w.O_APPEND)
  } catch (r) {
    let s = v(r);
    if (s === "ENOENT" || s === "ENOTDIR") return !1;
    throw r
  }
  try {
    let {
      size: r
    } = await n.stat();
    if (r === 0) return !1;
    let s = r,
      c = Buffer.from(t, "utf8"),
      a = 0;
    while (a < c.length) {
      let {
        bytesWritten: d
      } = await n.write(c, a, c.length - a, s);
      if (d <= 0) throw new P(`tryAppend: short write to ${e} stalled with ${c.length-a} bytes remaining`, "tryAppend: zero-progress short write");
      if (a += d, s !== void 0) s += d
    }
    return !0
  } finally {
    await n.close()
  }
}
async function E({
  backend: e,
  key: t
}, i) {
  let n = await e.append(t, [{
    data: i
  }], {
    precondition: {
      type: "ifExists",
      nonEmpty: !0
    }
  });
  if (!n.ok) {
    if (n.error.code === "NotFound") return !1;
    throw Error("Session append: transcript not writable via storage", {
      cause: n.error
    })
  }
  return !0
}
import {
  constants as _
} from "fs";
import {
  lstat as O,
  open as R
} from "fs/promises";
import {
  dirname as b,
  join as C
} from "path";
var y = '"type":"continued-in"',
  I = f(() => ut({
    type: A("continued-in"),
    continuedInSessionId: o()
  })),
  j = f(() => ut({
    type: A("assistant"),
    isApiErrorMessage: M().optional(),
    message: ut({
      stop_reason: o().nullish()
    }).optional()
  }));

function Rtn(e) {
  return e.provable ? `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.` : `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session, or add --fork-session to branch off a copy.`
}

function o_o(e, t) {
  return {
    type: "continued-in",
    timestamp: new Date().toISOString(),
    sessionId: e,
    continuedInSessionId: t
  }
}

function s_o(e) {
  if (!e.includes(y)) return;
  let t = e.length;
  while (t > 0) {
    let i = e.lastIndexOf(`
`, t - 1),
      n = e.slice(i + 1, t);
    t = i;
    let r = n.includes(y),
      s = n.includes('"type":"user"') || n.includes('"type":"assistant"');
    if (r || s) try {
      let c = JSON.parse(n);
      if (r) {
        let a = I().safeParse(c);
        if (a.success) return WI(a.data.continuedInSessionId) ?? void 0
      }
      if (s && N(c)) return
    } catch {}
    if (i < 0) break
  }
  return
}

function N(e) {
  let t = j().safeParse(e);
  if (t.success) return t.data.isApiErrorMessage !== !0 && typeof t.data.message?.stop_reason === "string";
  return G(e) && QUe(e, {
    commandFallback: ""
  }) !== void 0
}
async function i_o(e, t, i) {
  let n = C(b(e), `${t}.jsonl`),
    r = await d5n(n, dv(Ff(n, i)));
  return r !== null && await gEr(n, r.head, r.tail, r.size, i)
}
var l = '"parentUuid":',
  k = 16777216,
  h = 1048576;
async function gEr(e, t, i, n, r) {
  if (t.includes(l) || i.includes(l)) return !0;
  if (n <= $_) return !1;
  if (Ff(e, r) !== void 0) return !0;
  try {
    if (!(await O(e)).isFile()) return !1;
    let c = await R(e, _.O_RDONLY);
    try {
      if (!(await c.stat()).isFile()) return !1;
      let a = Buffer.allocUnsafe(h + l.length),
        d = 0,
        m = 0;
      while (m < k) {
        let {
          bytesRead: S
        } = await c.read(a, d, h, m);
        if (S === 0) return !1;
        let p = d + S;
        if (a.subarray(0, p).includes(l)) return !0;
        d = Math.min(l.length, p), a.copyWithin(0, p - d, p), m += S
      }
      return !0
    } finally {
      await c.close()
    }
  } catch {
    return !1
  }
}
import {
  readFile as D
} from "fs/promises";
import {
  dirname as x,
  join as F
} from "path";
var z = f(() => u({
  customTitle: o()
}));

function Atn(e, t) {
  return F(x(e), t, "custom-title.json")
}
async function a_o(e, t, i) {
  let n = await B(Atn(e, t), i);
  if (n === void 0) return;
  let r;
  try {
    r = JSON.parse(n)
  } catch {
    return
  }
  let s = z().safeParse(r);
  if (!s.success) return;
  return li(s.data.customTitle) || void 0
}
async function B(e, t) {
  if (H() && t !== void 0) try {
    let i = eA(e);
    if (i !== void 0) {
      let n = await t.readText([i]);
      if (!n.ok) return;
      let r = n.value.items[0];
      return r.found ? r.value : void 0
    }
  } catch {
    return
  }
  try {
    return await D(e, "utf8")
  } catch {
    return
  }
}
class wS {
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
    return new Promise((e, t) => {
      this.readResolve = e, this.readReject = t
    })
  }
  enqueue(e) {
    if (this.readResolve) {
      let t = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, t({
        done: !1,
        value: e
      })
    } else this.queue.push(e)
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
      let t = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, t(e)
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
export {
  tae,
  Rme,
  c9,
  n_o,
  vst,
  $ke,
  d9,
  kst,
  UPt,
  _3,
  r_o,
  Rtn,
  o_o,
  s_o,
  i_o,
  gEr,
  Atn,
  a_o,
  wS
};
