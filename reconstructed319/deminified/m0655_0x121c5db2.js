// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { DPn } from "B:/~BUN/root/chunk-fc7k1zas.js";
import { yA, nue } from "B:/~BUN/root/chunk-8qv1t8b3.js";
import { Vu as proto, Vls, Kls } from "B:/~BUN/root/chunk-4vcs773m.js";
import { pmn } from "B:/~BUN/root/chunk-c2g8hj42.js";
import { Wwr } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { connect as y } from "net";
import { StringDecoder as S } from "string_decoder";
async function t_(g, m) {
  let s;
  try {
    s = y(nue());
  } catch (r) {
    return {
      ok: !1,
      code: "ENOCONN",
      error: yA(d(r)),
      errno: k(r)
    };
  }
  let p = m?.timeoutMs ?? 5000,
    o,
    promise = new Promise(r => {
      o = r;
    }),
    c = !1,
    connected = !1,
    u = r => {
      if (c) return;
      c = !0, s.destroy(), o(r);
    };
  s.setTimeout(p, () => u({
    ok: !1,
    code: "ETIMEOUT",
    error: "control socket timeout",
    connected: connected
  })), s.on("error", r => u({
    ok: !1,
    code: "ENOCONN",
    error: yA(d(r)),
    connected: connected,
    errno: k(r)
  })), s.once("connect", () => {
    connected = !0, s.write(_(g) + `
`);
  });
  let e = new S("utf8"),
    n = "";
  return s.on("data", r => {
    n += e.write(r);
    let E = n.indexOf(`
`);
    if (E < 0) return;
    let C = n.slice(0, E);
    try {
      u(ee(C));
    } catch (N) {
      u({
        ok: !1,
        code: "ENOCONN",
        error: yA(d(N)),
        connected: connected
      });
    }
  }), s.once("close", () => {
    if (!c) u({
      ok: !1,
      code: "ENOCONN",
      error: "connection dropped mid-request \u2014 it may have restarted; retry",
      connected: connected
    });
  }), promise;
}
var v = 4,
  O = new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function fmn(label) {
  return w({
    label: label,
    cwd: pe(),
    pid: process.pid
  });
}
function w(client, m) {
  let s = !1,
    p = null,
    o = null,
    a = !0,
    c = v,
    i = async e => {
      if (e || !m || !a || c === 0) {
        o = setTimeout(u, 1000), o.unref();
        return;
      }
      let n = !1;
      try {
        n = (await m.ensureDaemon()) === "started";
      } catch (error) {
        t(`daemon lease: ensureDaemon failed: ${yA(d(error))}`, {
          level: "error"
        });
      }
      if (a = n, c -= n ? 1 : 0, c === 0) l("tengu_bg_cloud_lease", {
        transition: b("starts_used_up")
      }), t(`daemon lease: started a daemon ${v} times; from here it only reconnects`, {
        level: "warn"
      });
      u();
    },
    u = () => {
      if (s) return;
      let e;
      try {
        e = y(nue());
      } catch {
        p = null, i(!1);
        return;
      }
      p = e;
      let n = !1;
      if (e.on("error", () => e.destroy()), e.once("connect", () => {
        let r = process.getuid?.();
        if (m && r !== void 0 && Wwr(e) !== r) {
          if (a) a = !1, l("tengu_bg_cloud_lease", {
            transition: b("server_not_this_user")
          }), t("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", {
            level: "warn"
          });
          e.destroy();
          return;
        }
        e.write(_({
          proto: proto,
          op: "lease",
          client: client
        }) + `
`);
      }), m) pmn(e, r => {
        if (s) return;
        let E = et(r, !1),
          C = Kls().safeParse(E).data?.closing;
        if (C !== void 0) {
          if (O.has(C)) a = !1;
          l("tengu_bg_cloud_lease", {
            transition: b("daemon_closing"),
            cause: f(C)
          }), m.onClosing(C);
        } else if (!n && Vls().safeParse(E).success) n = !0, a = !0, m.onAcknowledged();
      });else e.on("data", () => {});
      e.once("close", () => {
        if (p = null, s) return;
        i(n);
      }), e.unref();
    };
  return u(), () => {
    if (s = !0, o) clearTimeout(o);
    p?.destroy();
  };
}
function DFo(short, tail, s, p) {
  let o;
  try {
    o = y(nue());
  } catch (error) {
    return queueMicrotask(() => p(yA(d(error)))), () => {};
  }
  let a = !1,
    c = !1,
    i = e => {
      if (a) return;
      a = !0, p(e);
    };
  o.setTimeout(1e4, () => {
    if (!c) i(DPn()), o.destroy();
  }), o.on("error", e => i(yA(d(e)))), o.on("close", () => i("control socket closed")), o.on("connect", () => o.write(_({
    proto: proto,
    op: "subscribe",
    short: short,
    tail: tail
  }) + `
`));
  let u = pmn(o, e => {
    if (!c) c = !0, o.setTimeout(0);
    try {
      let n = ee(e);
      if ("ok" in n && n.ok === !1) i(n.error);else s(n);
    } catch {}
  });
  return () => {
    a = !0, u(), o.destroy();
  };
}
export { t_, fmn, DFo };