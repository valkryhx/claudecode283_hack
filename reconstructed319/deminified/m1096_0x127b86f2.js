// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import { K5 } from "B:/~BUN/root/chunk-eev762xg.js";
import { Yv } from "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ZU } from "B:/~BUN/root/chunk-nsneqfcc.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-0ye1geyg.js";
import { AUt, OU } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { Mx, X$, Koe } from "B:/~BUN/root/chunk-8qv1t8b3.js";
import { P9s } from "B:/~BUN/root/chunk-cb46xt0k.js";
import { Mar } from "B:/~BUN/root/chunk-3d92p18g.js";
import { nMt, Fhr, tOn, TWe, rOn, CW, Hhr } from "B:/~BUN/root/chunk-pgm29tvd.js";
import "B:/~BUN/root/chunk-xdzcgcjh.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import { appendFileSync as Z, createWriteStream as ee, mkdirSync as te } from "fs";
import { appendFile as re, mkdir as ne, unlink as N, writeFile as ie } from "fs/promises";
import { createServer as oe } from "net";
import { getPriority as se, setPriority as ce } from "os";
import { dirname as Q } from "path";
var ae = 1048576,
  le = 5000;
async function Le(o) {
  let t = o.indexOf("--"),
    n = o.includes("--bg-spare", t + 1);
  if (!n) await P9s();
  if (i.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH"), Mar(), t < 3 || t === o.length - 1) return R(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let s = o[0];
  process.on("uncaughtException", e => R(s, `uncaught: ${e?.stack ?? String(e)}`)), process.on("unhandledRejection", e => R(s, `unhandledRejection: ${e?.stack ?? String(e)}`));
  let cols = Number(o[1]) || 200,
    rows = Number(o[2]) || 50,
    h = o[t + 1],
    p = o.slice(t + 2),
    a = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let CLAUDE_BG_PTY_AUTH = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let CLAUDE_BG_SOCKET_TOKENS_PATH = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (CLAUDE_BG_SOCKET_TOKENS_PATH) {
    let e = await AUt(CLAUDE_BG_SOCKET_TOKENS_PATH);
    if (e?.ptyAuth) CLAUDE_BG_PTY_AUTH = e.ptyAuth;else if (!CLAUDE_BG_PTY_AUTH) await z(s, "tokens-file unreadable; DATA gate fail-open");
    if (a) delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, await N(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(() => {});
  }
  let X = i.CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS === "1";
  if (a) i.unset("CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS");
  let V = X || !CLAUDE_BG_PTY_AUTH && !CLAUDE_BG_SOCKET_TOKENS_PATH,
    j = i.CLAUDE_BG_SILENT_PEER_TIMEOUT_MS || le;
  if (x() !== "windows") try {
    ce(0, Math.min(se(0) + 5, 19));
  } catch {}
  let L = ue(tOn),
    u = new Set(),
    weakMap = new WeakMap(),
    weakSet = new WeakSet(),
    weakSet_2 = new WeakSet(),
    m = !1,
    O,
    g = !1,
    B = !1,
    ppid = process.ppid,
    U = 0,
    P = null,
    W = pe(process.env.CLAUDE_PTY_RECORD, cols, rows);
  function Y(e) {
    for (let r of u) {
      if (r.destroyed) {
        u.delete(r);
        continue;
      }
      if (r.writableLength > ae) {
        r.destroy(), u.delete(r);
        continue;
      }
      r.write(e);
    }
  }
  let terminal, f;
  try {
    terminal = new Bun.Terminal({
      cols: cols,
      rows: rows,
      data(e, r) {
        B = !0;
        let c = Buffer.from(r);
        if (L.push(c), W?.write(c), u.size) Y(rOn(c));
      }
    }), f = Bun.spawn([h, ...p], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        TERM: "xterm-256color"
      },
      terminal: terminal,
      windowsHide: !0,
      detached: !1,
      ...(n && {
        argv0: "claude bg-spare"
      })
    });
  } catch (error) {
    R(s, `spawn failed: ${String(error)}`);
  }
  function w(e, r) {
    if (!e.destroyed) e.write(r);
  }
  function q(e) {
    switch (e.t) {
      case "resize":
        {
          let r = Number(e.cols),
            c = Number(e.rows);
          if (r > 0 && r <= TWe && c > 0 && c <= TWe && !m && !g) {
            if (terminal.resize(r, c), x() !== "windows") {
              try {
                process.kill(-process.pid, "SIGWINCH");
              } catch {}
              try {
                f.kill("SIGWINCH");
              } catch {}
            }
          }
          return;
        }
      case "kill":
        {
          let r = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
          try {
            g = fe(r, f, terminal) || g;
          } catch {}
          if (r === "SIGTERM") setTimeout(() => {
            if (!m) try {
              f.kill("SIGKILL");
            } catch {}
          }, 5000).unref();
          return;
        }
      default:
        return;
    }
  }
  await N(s).catch(() => {});
  let k = oe(e => {
    e.on("error", () => e.destroy()), e.once("close", () => u.delete(e));
    let r = !1,
      c = !1;
    function E() {
      if (r || e.destroyed) return;
      r = !0, c = m, e.setTimeout(0), w(e, CW({
        t: "hello",
        replPid: f.pid,
        version: typeof {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        } < "u" ? {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION : void 0
      }));
      for (let l of L.chunks) w(e, rOn(l));
      if (w(e, CW({
        t: "live"
      })), u.add(e), U = 0, weakMap.set(e, {
        armed: !1,
        missed: 0
      }), w(e, CW({
        t: "ping"
      })), m) w(e, CW({
        t: "exit",
        code: code,
        signal: signal
      })), e.end(), O?.();
    }
    if (V) {
      if (E(), m) return;
    } else e.setTimeout(j, () => e.destroy());
    let I = Hhr(l => {
      if (!r) E();
      if (c) return;
      if (l.kind === nMt) {
        if (CLAUDE_BG_PTY_AUTH && !weakSet.has(e)) {
          if (!weakSet_2.has(e)) weakSet_2.add(e), w(e, CW({
            t: "auth-required"
          }));
          return;
        }
        if (!m && !g) {
          if (terminal.write(l.payload), a && x() !== "windows") {
            let T = l.payload.includes(3) ? "SIGINT" : l.payload.includes(28) ? "SIGQUIT" : null;
            if (T) {
              P = T;
              try {
                process.kill(-process.pid, T);
              } catch {}
              setImmediate(() => {
                P = null;
              });
            }
          }
        }
      } else if (l.kind === Fhr) if (l.ctrl.t === "pong") {
        let T = weakMap.get(e);
        if (T) T.armed = !0, T.missed = 0;
      } else if (l.ctrl.t === "auth") {
        if (OU(l.ctrl.token, CLAUDE_BG_PTY_AUTH)) weakSet.add(e);
      } else q(l.ctrl);
    }, () => e.destroy());
    e.on("data", I);
  });
  k.on("error", e => {
    try {
      f.kill("SIGTERM");
    } catch {}
    R(s, `server error: ${String(e)}`);
  }), k.listen(s), k.unref();
  let v, A;
  if (x() !== "windows") {
    let e = K5(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 60000,
      r = 3;
    A = setInterval(() => {
      if (m) return;
      for (let I of u) {
        let l = weakMap.get(I);
        if (!l?.armed) continue;
        if (l.missed++, l.missed >= 3) I.destroy(), u.delete(I);else w(I, CW({
          t: "ping"
        }));
      }
    }, e), A.unref();
    let c = K5(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2000,
      E = 30;
    v = setInterval(() => {
      if (m) return;
      if (process.ppid === ppid || u.size > 0) {
        U = 0;
        return;
      }
      if (++U < E) return;
      clearInterval(v), clearInterval(A), z(s, `orphan watchdog: ppid ${ppid}\u2192${process.ppid}, no client for ${E * c}ms`), Yv("ptyhost_orphan_watchdog");
      try {
        f.kill("SIGTERM");
      } catch {}
      setTimeout(() => {
        if (!m) try {
          f.kill("SIGKILL");
        } catch {}
      }, 5000).unref();
    }, c), v.unref();
  }
  for (let e of ["SIGTERM", "SIGINT", "SIGHUP"]) process.on(e, () => {
    if (P === e) return;
    try {
      f.kill(e === "SIGHUP" ? "SIGTERM" : e);
    } catch {}
  });
  if (a && x() !== "windows") process.on("SIGQUIT", () => {
    if (P === "SIGQUIT") return;
    try {
      f.kill("SIGQUIT");
    } catch {}
  });
  let code = 0;
  code = await f.exited;
  let F = 0;
  for (let e = 0; e < 20; e++) if (B = !1, await J(5), B) F = 0;else if (++F >= 2) break;
  let signal = f.signalCode ?? void 0;
  if (m = !0, a) try {
    let e = Koe(s),
      r = Buffer.concat(L.chunks).subarray(-4096),
      c = 0;
    while (c < 3 && c < r.length && (r[c] & 192) === 128) c++;
    let tail = r.subarray(c).toString("utf8");
    ZU(e, JSON.stringify({
      code: code,
      signal: signal,
      tail: tail
    }), 384);
  } catch {}
  if (v) clearInterval(v);
  if (A) clearInterval(A);
  if (!g) terminal.close();
  if (W?.close(), a && x() !== "windows") {
    P = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {}
  }
  if (Y(CW({
    t: "exit",
    code: code,
    signal: signal
  })), u.size === 0) {
    let promise = new Promise(r => {
      O = r;
    });
    await de(promise, a ? () => ie(X$(s), Buffer.concat(L.chunks)) : void 0);
  }
  for (let e of u) e.end();
  if (await Promise.race([new Promise(e => k.close(() => e())), J(2000, void 0, {
    unref: !0
  })]), x() !== "windows") await N(s).catch(() => {});
  process.exit(code);
}
async function de(o, t, n = 5000) {
  let s = (t ? t().catch(() => {}) : Promise.resolve()).then(() => J(n));
  await Promise.race([o, s]);
}
function fe(o, t, n) {
  if (o === "SIGTERM" && x() === "windows") return n.close(), !0;
  return t.kill(o), !1;
}
function ue(o) {
  let t = [],
    n = 0,
    s = 0;
  function d() {
    if (n > 0) t = t.slice(n), n = 0;
  }
  return {
    get chunks() {
      return d(), t;
    },
    push(S) {
      t.push(S), s += S.length;
      while (s > o && t.length - n > 1) {
        s -= t[n++].length;
        for (let h = 0; h < 3;) {
          let p = t[n],
            a = 0;
          while (h + a < 3 && a < p.length && (p[a] & 192) === 128) a++;
          if (a > 0) t[n] = p.subarray(a), s -= a, h += a;
          if (t[n].length > 0 || t.length - n === 1) break;
          n++;
        }
      }
      if (n >= t.length - n) d();
    }
  };
}
function pe(o, t, n) {
  if (!o) return;
  let s = process.hrtime.bigint(),
    d;
  try {
    d = ee(o, {
      flags: "w"
    });
  } catch {
    return;
  }
  d.on("error", () => {
    d?.destroy(), d = void 0;
  });
  let S = Buffer.allocUnsafe(8);
  return S.writeUInt32BE(t, 0), S.writeUInt32BE(n, 4), d.write(S), {
    write(h) {
      if (!d) return;
      let p = Buffer.allocUnsafe(8 + h.length),
        a = Number((process.hrtime.bigint() - s) / 1000n);
      p.writeUInt32BE(a >>> 0, 0), p.writeUInt32BE(h.length, 4), h.copy(p, 8), d.write(p);
    },
    close() {
      d?.end();
    }
  };
}
async function z(o, t) {
  try {
    let n = Mx(o);
    await ne(Q(n), {
      recursive: !0
    }), await re(n, `${new Date().toISOString()} ${t}
`);
  } catch {}
}
function R(o, t) {
  if (o) try {
    let n = Mx(o);
    te(Q(n), {
      recursive: !0
    }), Z(n, `${new Date().toISOString()} ${t}
`);
  } catch {}
  process.exit(1);
}
export { Le as runPtyHost };