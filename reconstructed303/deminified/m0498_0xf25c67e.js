// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { uf, Rwe } from "B:/~BUN/root/chunk-78zw0pmb.js";
import { DE, lK } from "B:/~BUN/root/chunk-7qatwz9y.js";
import { ac as proto, Rgo, Ago } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { GGt } from "B:/~BUN/root/chunk-yty9fh0d.js";
import { jzn } from "B:/~BUN/root/chunk-pwz0pnkt.js";
import { connect as E } from "net";
import { StringDecoder as O } from "string_decoder";
async function Rg(g, m) {
  let s;
  try {
    s = E(lK());
  } catch (r) {
    return {
      ok: !1,
      code: "ENOCONN",
      error: DE(d(r)),
      errno: k(r)
    };
  }
  let p = m?.timeoutMs ?? 5000,
    o,
    promise = new Promise(r => {
      o = r;
    }),
    u = !1,
    connected = !1,
    f = r => {
      if (u) return;
      u = !0, s.destroy(), o(r);
    };
  s.setTimeout(p, () => f({
    ok: !1,
    code: "ETIMEOUT",
    error: "control socket timeout",
    connected: connected
  })), s.on("error", r => f({
    ok: !1,
    code: "ENOCONN",
    error: DE(d(r)),
    connected: connected,
    errno: k(r)
  })), s.once("connect", () => {
    connected = !0, s.write(_(g) + `
`);
  });
  let e = new O("utf8"),
    n = "";
  return s.on("data", r => {
    n += e.write(r);
    let y = n.indexOf(`
`);
    if (y < 0) return;
    let C = n.slice(0, y);
    try {
      f(J(C));
    } catch (N) {
      f({
        ok: !1,
        code: "ENOCONN",
        error: DE(d(N)),
        connected: connected
      });
    }
  }), s.once("close", () => {
    if (!u) f({
      ok: !1,
      code: "ENOCONN",
      error: "connection dropped mid-request \u2014 it may have restarted; retry",
      connected: connected
    });
  }), promise;
}
var v = 4,
  S = new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function zGt(label) {
  return w({
    label: label,
    cwd: ce(),
    pid: process.pid
  });
}
function w(client, m) {
  let s = !1,
    p = null,
    o = null,
    l = !0,
    u = v,
    a = async e => {
      if (e || !m || !l || u === 0) {
        o = setTimeout(f, 1000), o.unref();
        return;
      }
      let n = !1;
      try {
        n = (await m.ensureDaemon()) === "started";
      } catch (error) {
        t(`daemon lease: ensureDaemon failed: ${DE(d(error))}`, {
          level: "error"
        });
      }
      if (l = n, u -= n ? 1 : 0, u === 0) i("tengu_bg_cloud_lease", {
        transition: b("starts_used_up")
      }), t(`daemon lease: started a daemon ${v} times; from here it only reconnects`, {
        level: "warn"
      });
      f();
    },
    f = () => {
      if (s) return;
      let e;
      try {
        e = E(lK());
      } catch {
        p = null, a(!1);
        return;
      }
      p = e;
      let n = !1;
      if (e.on("error", () => e.destroy()), e.once("connect", () => {
        let r = process.getuid?.();
        if (m && r !== void 0 && jzn(e) !== r) {
          if (l) l = !1, i("tengu_bg_cloud_lease", {
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
      }), m) GGt(e, r => {
        if (s) return;
        let y = pt(r, !1),
          C = Ago().safeParse(y).data?.closing;
        if (C !== void 0) {
          if (S.has(C)) l = !1;
          i("tengu_bg_cloud_lease", {
            transition: b("daemon_closing"),
            cause: c(C)
          }), m.onClosing(C);
        } else if (!n && Rgo().safeParse(y).success) n = !0, l = !0, m.onAcknowledged();
      });else e.on("data", () => {});
      e.once("close", () => {
        if (p = null, s) return;
        a(n);
      }), e.unref();
    };
  return f(), () => {
    if (s = !0, o) clearTimeout(o);
    p?.destroy();
  };
}
function cqr(short, tail, s, p) {
  let o;
  try {
    o = E(lK());
  } catch (error) {
    return queueMicrotask(() => p(DE(d(error)))), () => {};
  }
  let l = !1,
    u = !1,
    a = e => {
      if (l) return;
      l = !0, p(e);
    };
  o.setTimeout(1e4, () => {
    if (!u) a(`${uf()} did not respond \u2014 it may be stalled${Rwe("restart")}`), o.destroy();
  }), o.on("error", e => a(DE(d(e)))), o.on("close", () => a("control socket closed")), o.on("connect", () => o.write(_({
    proto: proto,
    op: "subscribe",
    short: short,
    tail: tail
  }) + `
`));
  let f = GGt(o, e => {
    if (!u) u = !0, o.setTimeout(0);
    try {
      let n = J(e);
      if ("ok" in n && n.ok === !1) a(n.error);else s(n);
    } catch {}
  });
  return () => {
    l = !0, f(), o.destroy();
  };
}
export { Rg, zGt, cqr };