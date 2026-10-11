// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { kp, nae } from "B:/~BUN/root/chunk-8b53pnky.js";
import { yw, RB } from "B:/~BUN/root/chunk-30zp50p7.js";
import { Sc as proto } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { oGt } from "B:/~BUN/root/chunk-1tq9wbjk.js";
import { connect as m } from "net";
import { StringDecoder as N } from "string_decoder";
async function hg(f, a) {
  let r;
  try {
    r = m(RB());
  } catch (t) {
    return {
      ok: !1,
      code: "ENOCONN",
      error: yw(l(t)),
      errno: v(t)
    };
  }
  let o = a?.timeoutMs ?? 5000,
    e,
    promise = new Promise(t => {
      e = t;
    }),
    u = !1,
    connected = !1,
    d = t => {
      if (u) return;
      u = !0, r.destroy(), e(t);
    };
  r.setTimeout(o, () => d({
    ok: !1,
    code: "ETIMEOUT",
    error: "control socket timeout",
    connected: connected
  })), r.on("error", t => d({
    ok: !1,
    code: "ENOCONN",
    error: yw(l(t)),
    connected: connected,
    errno: v(t)
  })), r.once("connect", () => {
    connected = !0, r.write(b(f) + `
`);
  });
  let c = new N("utf8"),
    i = "";
  return r.on("data", t => {
    i += c.write(t);
    let p = i.indexOf(`
`);
    if (p < 0) return;
    let C = i.slice(0, p);
    try {
      d(J(C));
    } catch (y) {
      d({
        ok: !1,
        code: "ENOCONN",
        error: yw(l(y)),
        connected: connected
      });
    }
  }), r.once("close", () => {
    if (!u) d({
      ok: !1,
      code: "ENOCONN",
      error: "connection dropped mid-request \u2014 it may have restarted; retry",
      connected: connected
    });
  }), promise;
}
function Cyt(label) {
  let client = {
      label: label,
      cwd: oe(),
      pid: process.pid
    },
    r = !1,
    o = null,
    e = null,
    s = () => {
      if (r) return;
      try {
        o = m(RB());
      } catch {
        o = null, e = setTimeout(s, 1000), e.unref();
        return;
      }
      o.on("error", () => o?.destroy()), o.once("connect", () => o?.write(b({
        proto: proto,
        op: "lease",
        client: client
      }) + `
`)), o.on("data", () => {}), o.once("close", () => {
        if (o = null, r) return;
        e = setTimeout(s, 1000), e.unref();
      }), o.unref();
    };
  return s(), () => {
    if (r = !0, e) clearTimeout(e);
    o?.destroy();
  };
}
function fZn(short, tail, r, o) {
  let e;
  try {
    e = m(RB());
  } catch (error) {
    return queueMicrotask(() => o(yw(l(error)))), () => {};
  }
  let s = !1,
    u = !1,
    n = c => {
      if (s) return;
      s = !0, o(c);
    };
  e.setTimeout(1e4, () => {
    if (!u) n(`${kp()} did not respond \u2014 it may be stalled${nae("restart")}`), e.destroy();
  }), e.on("error", c => n(yw(l(c)))), e.on("close", () => n("control socket closed")), e.on("connect", () => e.write(b({
    proto: proto,
    op: "subscribe",
    short: short,
    tail: tail
  }) + `
`));
  let d = oGt(e, c => {
    if (!u) u = !0, e.setTimeout(0);
    try {
      let i = J(c);
      if ("ok" in i && i.ok === !1) n(i.error);else r(i);
    } catch {}
  });
  return () => {
    s = !0, d(), e.destroy();
  };
}
export { hg, Cyt, fZn };