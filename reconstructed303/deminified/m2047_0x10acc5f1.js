// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-28dw3zbk.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-07c8fw5z.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import { _r } from "B:/~BUN/root/chunk-ta5er8n7.js";
import { closeSync as ie, fstatSync as j, openSync as G, readSync as le, writeSync as D } from "fs";
var Y = "[This Claude apps gateway is in load-test mode. This is a canned reply and your request was not sent to a model. If you did not expect this, tell your gateway administrator.] ",
  model = "load-test",
  ce = 3,
  X = "load test   ",
  ue = 20,
  C = 65536,
  de = 32,
  fe = 1e4,
  usage = {
    input_tokens: 0,
    output_tokens: 0
  };
function J(t) {
  return Math.max(1, Math.ceil(t / ce));
}
function pe(t) {
  let length = J(t);
  return [{
    type: "message_start",
    message: {
      id: "msg_loadtest",
      type: "message",
      role: "assistant",
      model: model,
      content: [],
      stop_reason: null,
      stop_sequence: null,
      usage: usage
    }
  }, {
    type: "content_block_start",
    index: 0,
    content_block: {
      type: "text",
      text: ""
    }
  }, ...Array.from({
    length: length
  }, (n, o) => ({
    type: "content_block_delta",
    index: 0,
    delta: {
      type: "text_delta",
      text: o === 0 ? Y : X
    }
  })), {
    type: "content_block_stop",
    index: 0
  }, {
    type: "message_delta",
    delta: {
      stop_reason: "end_turn",
      stop_sequence: null
    },
    usage: {
      output_tokens: 0
    }
  }, {
    type: "message_stop"
  }];
}
function he(t) {
  let r = Buffer.concat([[":message-type", "event"], [":event-type", "chunk"], [":content-type", "application/json"]].map(([o, c]) => Buffer.concat([Buffer.from([o.length]), Buffer.from(o), Buffer.from([7, c.length >> 8, c.length & 255]), Buffer.from(c)]))),
    n = Buffer.alloc(12 + r.length + t.length + 4);
  return n.writeUInt32BE(n.length, 0), n.writeUInt32BE(r.length, 4), n.writeUInt32BE(Bun.hash.crc32(n.subarray(0, 8)), 8), r.copy(n, 12), n.set(t, 12 + r.length), n.writeUInt32BE(Bun.hash.crc32(n.subarray(0, n.length - 4)), n.length - 4), n;
}
async function Se(t, r) {
  if ((await r`SELECT 1 FROM spend WHERE cents > 0 LIMIT 1`).length > 0) throw Error("load_test_mode is on, but the database at store.postgres_url already holds real spend (a spend row above 0 cents). A load test writes made-up developers into it, so it must not share a database with real developers. Point store.postgres_url at its own empty database.");
  return me(t);
}
function m(t, r, n = `${r}s`) {
  return `${t} ${t === 1 ? r : n}`;
}
function me(t, r = fe) {
  let n = pe(t.reply_tokens),
    o = t.reply_seconds * 1000,
    c = ye(),
    s = n.map(item => he(Buffer.from(_({
      bytes: Buffer.from(_(item)).toString("base64")
    })))),
    i = n.map(item => Buffer.from(`event: ${item.type}
data: ${_(item)}

`)),
    p = _({
      id: "msg_loadtest",
      type: "message",
      role: "assistant",
      model: model,
      content: [{
        type: "text",
        text: Y + X.repeat(Math.max(0, J(t.reply_tokens) - 1))
      }],
      stop_reason: "end_turn",
      stop_sequence: null,
      usage: usage
    }),
    S = Buffer.from(p),
    d = new Set(),
    y,
    h = !1,
    E = 0,
    k = 0,
    w = 0,
    T = 0,
    L = new Set(),
    v = 0,
    M = 0,
    A = 0,
    x = 0,
    U = 0,
    B = 0,
    O = {
      since: 0,
      lastBusyAt: 0,
      arrivals: 0,
      bodies: 0,
      finished: 0,
      hungUp: 0,
      checkFaults: 0,
      writeFaults: 0,
      peakArrivalsPerS: 0,
      peakOpen: 0,
      worstLateMs: 0
    },
    u = {
      ...O
    };
  function R(e) {
    if (h) return;
    if (!y) E = e, y = setInterval(se, ue);
    if (u.since === 0) u.since = e;
  }
  function F(e) {
    if (h) return;
    R(performance.now()), v++, U += e, B = Math.max(B, e);
  }
  function I() {
    if (!h) M++;
  }
  function arrived() {
    if (h) return;
    R(performance.now()), k++;
  }
  function bodyRead(e, l) {
    if (h) return;
    w++, T += e, L.add(l);
  }
  function spendFault(e) {
    if (h) return;
    if (R(performance.now()), e === "check") A++;else x++;
  }
  function P(e, l) {
    return `${m(e, "spend check")} failed, ${m(l, "spend write")} failed`;
  }
  function q(e) {
    let l = Math.max(1, (e - E) / 1000),
      f = k + v + M + A + x + d.size > 0;
    if (f) {
      let g = w > 0 ? T / w / 1000 : 0;
      _r("info", `load test, last ${Math.round(l)} s: ${(k / l).toFixed(1)} requests/s arrived` + (w > 0 ? `, ${(w / l).toFixed(1)}/s with their body read (mean body ${g < 10 ? g.toFixed(1) : Math.round(g)} KB, from ${m(L.size, "developer")})` : "") + `, ${(v / l).toFixed(1)} replies/s finished, ${m(d.size, "reply", "replies")} open now, ${m(M, "client")} hung up early, ${P(A, x)}` + (v > 0 ? `; replies ended ${Math.round(U / v)} ms past reply_seconds on average (worst ${Math.round(B)} ms)` : "")), u.lastBusyAt = e;
    }
    return u.arrivals += k, u.bodies += w, u.finished += v, u.hungUp += M, u.checkFaults += A, u.writeFaults += x, u.peakArrivalsPerS = Math.max(u.peakArrivalsPerS, k / l), u.worstLateMs = Math.max(u.worstLateMs, B), E = e, k = 0, w = 0, T = 0, L.clear(), v = 0, M = 0, A = 0, x = 0, U = 0, B = 0, f;
  }
  function z() {
    if (h) return;
    let e = u;
    if (e.arrivals + e.finished + e.hungUp + e.checkFaults + e.writeFaults > 0) {
      let l = Math.max(0, e.arrivals - e.bodies);
      _r("info", `load test summary, over ${Math.max(1, Math.round((e.lastBusyAt - e.since) / 1000))} s: ${m(e.arrivals, "request")} arrived${l > 0 ? ` (${l} refused before their body was read)` : ""}, ${m(e.finished, "reply", "replies")} finished, ${m(e.hungUp, "client")} hung up early, ${P(e.checkFaults, e.writeFaults)}. Peaks: ${e.peakArrivalsPerS.toFixed(1)} requests/s in the busiest window, ${m(e.peakOpen, "reply", "replies")} open at once.` + (d.size > 0 ? ` ${m(d.size, "reply", "replies")} still open.` : "") + (e.finished > 0 ? ` The worst reply ended ${Math.round(e.worstLateMs)} ms past reply_seconds.` : ""));
    }
    u = {
      ...O
    };
  }
  function close() {
    if (h) return;
    q(performance.now()), z(), h = !0, clearInterval(y), y = void 0;
  }
  function se() {
    let e = performance.now();
    if (d.size === 0) y?.unref?.();
    if (e - E >= r) {
      if (!q(e)) z(), clearInterval(y), y = void 0;
    }
  }
  function N(frames, l, f) {
    let headers = {
      "content-type": l
    };
    if (o === 0) {
      let b = Buffer.concat(frames);
      return c.receive(b), F(0), new Response(b, {
        headers: headers
      });
    }
    let a,
      W = () => {
        if (!d.has(a)) return;
        let b = Math.max(a.sent + 1, Math.min(frames.length, Math.floor((performance.now() - a.startedAt) / o * frames.length)));
        try {
          while (a.sent < b) {
            let K = frames[a.sent++];
            a.ctrl.enqueue(K), c.receive(K);
          }
        } catch {
          if (d.delete(a)) I();
          return;
        }
        if (a.sent === frames.length) {
          d.delete(a);
          try {
            a.ctrl.close();
          } catch {}
          F(Math.max(0, performance.now() - a.startedAt - o));
          return;
        }
        let ae = a.startedAt + (a.sent + 1) * o / frames.length;
        a.timer = setTimeout(W, Math.ceil(Math.max(0, ae - performance.now())));
      },
      readableStream = new ReadableStream({
        start(ctrl) {
          if (a = {
            ctrl: ctrl,
            frames: frames,
            sent: 0,
            startedAt: performance.now()
          }, d.add(a), !h) u.peakOpen = Math.max(u.peakOpen, d.size);
          R(a.startedAt), y?.ref?.(), a.timer = setTimeout(W, Math.ceil(o / frames.length)), f?.addEventListener("abort", () => {
            if (d.delete(a)) clearTimeout(a.timer), I(), ctrl.error(f.reason);
          }, {
            once: !0
          });
        },
        cancel() {
          if (d.delete(a)) clearTimeout(a.timer), I();
        }
      });
    return new Response(readableStream, {
      headers: headers
    });
  }
  return {
    fetch: async (e, l) => {
      l?.signal?.throwIfAborted(), c.send(l?.body);
      let pathname = new URL(e instanceof Request ? e.url : String(e)).pathname;
      if (pathname.endsWith("/count_tokens") || pathname.includes("count-tokens")) return Response.json({
        input_tokens: 0
      });
      if (pathname.endsWith("/invoke-with-response-stream")) return N(s, "application/vnd.amazon.eventstream", l?.signal);
      let g = pathname.endsWith("/invoke") || pathname.endsWith(":rawPredict");
      if (pathname.endsWith(":streamRawPredict") || !g && we(l?.body)) return N(i, "text/event-stream", l?.signal);
      return c.receive(S), F(0), new Response(p, {
        headers: {
          "content-type": "application/json"
        }
      });
    },
    arrived: arrived,
    bodyRead: bodyRead,
    spendFault: spendFault,
    close: close,
    socketCostSimulated: c.real
  };
}
function ye() {
  let t = -1,
    r = -1;
  try {
    if (t = G("/dev/null", "r+"), r = G("/dev/zero", "r"), ![j(t), j(r)].every(item => item.isCharacterDevice())) throw Error("not a character device");
  } catch {
    for (let s of [t, r]) if (s >= 0) ie(s);
    return _r("warn", "load_test_mode: this host has no /dev/null or /dev/zero, so CPU per replica will read about a quarter to a third lower than in production. The load test still runs."), {
      real: !1,
      send() {},
      receive() {}
    };
  }
  let uint8Array = new Uint8Array(C),
    o = !1,
    c = (s, i, p) => {
      if (o) return;
      try {
        D(t, s, i, p), le(r, uint8Array, 0, Math.min(p, uint8Array.length), null);
      } catch (error) {
        o = !0, _r("warn", `load_test_mode: simulating a connection's kernel work failed (${error instanceof Error ? error.message : String(error)}), so it stops here and CPU per replica will read lower than in production. The load test still runs.`);
      }
    };
  return {
    real: !0,
    send(s) {
      let i = typeof s === "string" ? Buffer.from(s) : s instanceof ArrayBuffer ? new Uint8Array(s) : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : null;
      if (!i) return;
      for (let p = 0; p < i.length; p += C) c(i, p, Math.min(C, i.length - p));
    },
    receive(s) {
      c(s, 0, s.length);
      for (let i = 0; i < de && !o; i++) try {
        D(t, s, 0, 1);
      } catch {
        o = !0;
      }
    }
  };
}
var V = 34,
  ge = 92;
function Q(t, r, n) {
  let o = 0,
    c = !1;
  for (let s = r; s < n; s++) {
    let i = t.charCodeAt(s);
    if (c) {
      if (i === ge) s++;else if (i === V) c = !1;
    } else if (i === V) c = !0;else if (i === 123 || i === 91) o++;else if (i === 125 || i === 93) o--;
  }
  return o;
}
function we(t) {
  let r = typeof t === "string" ? t : ArrayBuffer.isView(t) ? Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("latin1") : t instanceof ArrayBuffer ? Buffer.from(t).toString("latin1") : "";
  for (let n of r.matchAll(/"stream"\s*:\s*true/g)) {
    let o = n.index + n[0].length;
    if (n.index < r.length - o ? Q(r, 0, n.index) === 1 : Q(r, o, r.length) === -1) return !0;
  }
  return !1;
}
export { Se as startLoadTest };