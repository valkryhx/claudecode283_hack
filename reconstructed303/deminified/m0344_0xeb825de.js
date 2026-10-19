// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ay } from "B:/~BUN/root/chunk-89mss1tj.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { hv, lI, uGe } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { cR } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Vp, vC } from "B:/~BUN/root/chunk-k798mzph.js";
import { lH } from "B:/~BUN/root/chunk-0g1grf6f.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, M, u, _t, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { _Ze } from "B:/~BUN/root/chunk-bp5d1azq.js";
async function* e3e(e) {
  let n = [];
  for await (let r of e) {
    if (typeof r !== "string") throw TypeError("transcriptLines takes text: open the stream with an encoding");
    let t = 0;
    for (let i = r.indexOf(`
`); i !== -1; i = r.indexOf(`
`, t)) n.push(r.slice(t, i)), yield y(n.join("")), n = [], t = i + 1;
    if (t < r.length) n.push(r.slice(t));
  }
  if (n.length > 0) yield y(n.join(""));
}
function y(e) {
  return e.endsWith("\r") ? e.slice(0, -1) : e;
}
var _It = 600000;
function M9(e) {
  if (e?.kind !== "task-notification") return e;
  let runId = lH(e.runId);
  return {
    kind: "task-notification",
    ...(e.subkind !== void 0 && {
      subkind: e.subkind
    }),
    ...(e.fireReason !== void 0 && {
      fireReason: e.fireReason
    }),
    ...(e.producer !== void 0 && {
      producer: e.producer
    }),
    ...(runId !== void 0 && {
      runId: runId
    }),
    ...(e.taskKind === "mcp-task" && {
      taskKind: e.taskKind
    })
  };
}
function aG(e, n, r) {
  let t = M9(e) ?? (n === "task-notification" ? {
      kind: "task-notification"
    } : void 0),
    runId_2 = lH(r);
  return runId_2 !== void 0 && t?.kind === "task-notification" && t.runId === void 0 ? {
    ...t,
    runId: runId_2
  } : t;
}
function tie(e) {
  return e?.kind === "task-notification" && e.producer === "session-task";
}
function P6(e) {
  return e?.kind === "task-notification" && Object.keys(e).every(item => item === "kind" || item === "producer" || item === "runId" || item === "taskKind");
}
function yIt(e, n) {
  return P6(e) && (tie(e) || n === !0);
}
function iH(e, n) {
  return E(e, {
    udsInboxEnabled: typeof n === "boolean" ? n : !0
  });
}
function E(e, {
  udsInboxEnabled: udsInboxEnabled
}) {
  if (e?.kind === "channel") return !0;
  if (e?.kind === "observer") return !0;
  if (e?.kind === "observer-activity") return !0;
  if (e?.kind === "slack-ping") return !0;
  if (e?.kind === "peer") {
    if (e.senderTaskId !== void 0) return !0;
    if (udsInboxEnabled) return !0;
  }
  return !1;
}
import { constants as g } from "fs";
import { open as h, readdir as me, rm as Se, stat as ye } from "fs/promises";
async function QSs(e, n, r) {
  if (W() && r !== void 0) return O(r, n);
  let t;
  try {
    t = await h(e, g.O_WRONLY | g.O_APPEND);
  } catch (error) {
    let s = k(error);
    if (s === "ENOENT" || s === "ENOTDIR") return !1;
    throw error;
  }
  try {
    let {
      size: size
    } = await t.stat();
    if (size === 0) return !1;
    let s = size,
      d = Buffer.from(n, "utf8"),
      a = 0;
    while (a < d.length) {
      let {
        bytesWritten: bytesWritten
      } = await t.write(d, a, d.length - a, s);
      if (bytesWritten <= 0) throw new x(`tryAppend: short write to ${e} stalled with ${d.length - a} bytes remaining`, "tryAppend: zero-progress short write");
      if (a += bytesWritten, s !== void 0) s += bytesWritten;
    }
    return !0;
  } finally {
    await t.close();
  }
}
async function O({
  backend: backend,
  key: key
}, data) {
  let t = await backend.append(key, [{
    data: data
  }], {
    precondition: {
      type: "ifExists",
      nonEmpty: !0
    }
  });
  if (!t.ok) {
    if (t.error.code === "NotFound") return !1;
    throw Error("Session append: transcript not writable via storage", {
      cause: t.error
    });
  }
  return !0;
}
import { constants as b } from "fs";
import { lstat as R, open as P } from "fs/promises";
import { dirname as v, join as I } from "path";
var _ = '"type":"continued-in"',
  A = f(() => _t({
    type: C("continued-in"),
    continuedInSessionId: o()
  })),
  D = f(() => _t({
    type: C("assistant"),
    isApiErrorMessage: M().optional(),
    message: _t({
      stop_reason: o().nullish()
    }).optional()
  }));
function Mdt(e, {
  canFork: canFork
} = {
  canFork: !0
}) {
  if (e.provable) return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
  let r = canFork ? ", or add --fork-session to branch off a copy" : "";
  return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${r}.`;
}
function ZSs(sessionId, continuedInSessionId) {
  return {
    type: "continued-in",
    timestamp: new Date().toISOString(),
    sessionId: sessionId,
    continuedInSessionId: continuedInSessionId
  };
}
function h$n(e) {
  if (!e.includes(_)) return;
  let n = e.length;
  while (n > 0) {
    let r = e.lastIndexOf(`
`, n - 1),
      t = e.slice(r + 1, n);
    n = r;
    let i = t.includes(_),
      s = t.includes('"type":"user"') || t.includes('"type":"assistant"');
    if (i || s) try {
      let d = JSON.parse(t);
      if (i) {
        let a = A().safeParse(d);
        if (a.success) return lI(a.data.continuedInSessionId) ?? void 0;
      }
      if (s && j(d)) return;
    } catch {}
    if (r < 0) break;
  }
  return;
}
function j(e) {
  let n = D().safeParse(e);
  if (n.success) return n.data.isApiErrorMessage !== !0 && typeof n.data.message?.stop_reason === "string";
  return N(e) && _Ze(e, {
    commandFallback: ""
  }) !== void 0;
}
async function ews(e, n, r) {
  let t = I(v(e), `${n}.jsonl`),
    i = await uGe(t, vC(Vp(t, r)));
  return i !== null && (await L7t(t, i.head, i.tail, i.size, r));
}
var l = '"parentUuid":',
  U = 16777216,
  w = 1048576;
async function L7t(e, n, r, t, i) {
  if (n.includes(l) || r.includes(l)) return !0;
  if (t <= hv) return !1;
  if (Vp(e, i) !== void 0) return !0;
  try {
    if (!(await R(e)).isFile()) return !1;
    let d = await P(e, b.O_RDONLY);
    try {
      if (!(await d.stat()).isFile()) return !1;
      let a = Buffer.allocUnsafe(w + l.length),
        c = 0,
        m = 0;
      while (m < U) {
        let {
          bytesRead: bytesRead
        } = await d.read(a, c, w, m);
        if (bytesRead === 0) return !1;
        let p = c + bytesRead;
        if (a.subarray(0, p).includes(l)) return !0;
        c = Math.min(l.length, p), a.copyWithin(0, p - c, p), m += bytesRead;
      }
      return !0;
    } finally {
      await d.close();
    }
  } catch {
    return !1;
  }
}
import { readFile as L } from "fs/promises";
import { dirname as F, join as B } from "path";
var z = f(() => u({
  customTitle: o()
}));
function y$n(e, n) {
  return B(F(e), n, "custom-title.json");
}
async function tws(e, n, r) {
  let t = await K(y$n(e, n), r);
  if (t === void 0) return;
  let i;
  try {
    i = JSON.parse(t);
  } catch {
    return;
  }
  let s = z().safeParse(i);
  if (!s.success) return;
  return Ti(s.data.customTitle) || void 0;
}
async function K(e, n) {
  if (W() && n !== void 0) try {
    let r = cR(e);
    if (r !== void 0) {
      let t = await n.readText([r]);
      if (!t.ok) return;
      let i = t.value.items[0];
      return i.found ? i.value : void 0;
    }
  } catch {
    return;
  }
  if (de()) return;
  try {
    return await L(e, "utf8");
  } catch {
    return;
  }
}
var Twe = "2025-11-25",
  Npe = "2026-07-28",
  eie = "reopen_refetch",
  Z6e = "before_handler",
  p$n = 4096,
  VSs = 16384,
  hIt = "The tool call was interrupted before a result was received. It may or may not have completed on the server \u2014 verify before assuming it succeeded, and retry if needed.",
  qSs = 1000,
  vvr = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";
function f$n(e, n) {
  return `MCP server "${e}" never answered tool "${n}". ${vvr}`;
}
var KSs = "mcp_answer_stream_ended",
  YSs = "mcp_call_not_sent_again",
  m$n = "mcp_call_unanswered",
  x6 = 16777216,
  HZ = 5,
  baseMs = 1000,
  capMs = 30000,
  XSs = 1e4;
function Idt(attempt) {
  return Ay({
    attempt: attempt,
    baseMs: baseMs,
    capMs: capMs
  });
}
var g$n = 8,
  ngo = 30000,
  JSs = 300000,
  D7t = "inode/directory";
function Cwe(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}
var t3e = "Tool permission request failed",
  rgo = "Tool permission stream closed before response received",
  kvr = "Stream closed",
  Ke = [`${t3e}: AbortError: ${rgo}`, `${t3e}: AbortError: ${kvr}`, t3e];
class xE {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = !1;
  hasError;
  started = !1;
  constructor(e) {
    this.returned = e;
  }
  get ended() {
    return this.isDone;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return this.started = !0, this;
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
      this.readResolve = e, this.readReject = n;
    });
  }
  enqueue(value) {
    if (this.readResolve) {
      let readResolve = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, readResolve({
        done: !1,
        value: value
      });
    } else this.queue.push(value);
  }
  done() {
    if (this.isDone = !0, this.readResolve) {
      let readResolve_2 = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, readResolve_2({
        done: !0,
        value: void 0
      });
    }
  }
  error(e) {
    if (this.hasError = e, this.readReject) {
      let readReject = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, readReject(e);
    }
  }
  return() {
    if (this.isDone = !0, this.returned) this.returned();
    return Promise.resolve({
      done: !0,
      value: void 0
    });
  }
}
function V(e, n) {
  let r = e.type === "attachment" ? e.attachment : void 0;
  if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "queued_command") return;
  let t = Reflect.get(r, n);
  return typeof t === "string" && t ? t : void 0;
}
function N7t(e) {
  return V(e, "source_uuid");
}
function Zxe(e) {
  let {
      submitUuid: submitUuid
    } = e,
    r = N7t(e) ?? (e.type === "system" && typeof submitUuid === "string" ? submitUuid : void 0);
  return r ? [e.uuid, r] : [e.uuid];
}
function _$n(e) {
  return e.type === "user" ? F7t(e.droppedPromptUuids) : [];
}
function F7t(e) {
  return Array.isArray(e) ? e.filter(item => typeof item === "string" && item !== "") : [];
}
function ogo(e, n) {
  let r = e.findIndex(item => item.uuid === n);
  return r !== -1 ? r : e.findIndex(item => N7t(item) === n);
}
export { Twe, Npe, eie, Z6e, p$n, VSs, hIt, qSs, vvr, f$n, KSs, YSs, m$n, x6, HZ, XSs, Idt, g$n, ngo, JSs, D7t, Cwe, M9, aG, tie, P6, yIt, _It, QSs, e3e, Mdt, ZSs, h$n, ews, L7t, y$n, tws, t3e, rgo, kvr, xE, N7t, Zxe, _$n, F7t, ogo, iH };