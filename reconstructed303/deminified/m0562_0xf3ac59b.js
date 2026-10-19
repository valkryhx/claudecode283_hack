// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k, Fr, pS, Cm, Sqo, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Fe, Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { FA } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { m, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, pn, ps, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { lre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Qmn, V_, nzo, rzo } from "B:/~BUN/root/chunk-xf0m410v.js";
import { zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Vv, jT, dXe, ff, Of, BN } from "B:/~BUN/root/chunk-7qeqkjr8.js";
import { v4, NB, VQe, mze, FB, y8n, RBt, ABt, S8n, KQe, xBt, HJ } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { cGe, sDe, gde } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { vd, FYs } from "B:/~BUN/root/chunk-j8w5f307.js";
import { W1t, z1t } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { Bc } from "B:/~BUN/root/chunk-c0j3f8cc.js";
import { qgo, zZ } from "B:/~BUN/root/chunk-ks90p42g.js";
import { zi, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { KFr, zEe, Nge, YWe, t5n, ad, Fge } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { Cyt } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { _p } from "B:/~BUN/root/chunk-htbmes7q.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { p8, DCe, JQ, Ntr, _vt, D5o, Ftr, L5o, AVe, oKr } from "B:/~BUN/root/chunk-qz3jjjax.js";
import { Yf, su } from "B:/~BUN/root/chunk-2wpqgvtg.js";
import { kRr, HOs, upt, ppt, fpt, Onn, LE, Bie, UOs, BOs, Lfe, OT, cD, gpt, Inn, Mnn, Dnn, bH, UWn } from "B:/~BUN/root/chunk-7qatwz9y.js";
import { ac as proto, $Z, Hdt, Pvr, kgo, nie, tUe, DIt, Ovr, jR, io, $l, rie, Zr, Hb, HIt, h_, Ta, Kdt } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { Rtt, $wt, ber, SGt, Q2e, jbn } from "B:/~BUN/root/chunk-eh8e5tst.js";
import { Hye } from "B:/~BUN/root/chunk-2p3wmm62.js";
import { Ihn, Mhn } from "B:/~BUN/root/chunk-4dcjqx1y.js";
import { GGt } from "B:/~BUN/root/chunk-yty9fh0d.js";
import { Dqr } from "B:/~BUN/root/chunk-e8ecq68c.js";
import { $Le } from "B:/~BUN/root/chunk-0gf60ae8.js";
import { xV } from "B:/~BUN/root/chunk-brmpd59q.js";
import { nj, vC } from "B:/~BUN/root/chunk-k798mzph.js";
import { EOe } from "B:/~BUN/root/chunk-6bmmxtvh.js";
import { Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { Bne } from "B:/~BUN/root/chunk-7j1crw74.js";
import { randomBytes as Re } from "crypto";
import { unlinkSync as Nt } from "fs";
import { mkdir as Mt, open as xt, readdir as Vt, unlink as X } from "fs/promises";
import { connect as be } from "net";
import { join as ue } from "path";
import { randomBytes as de } from "crypto";
import { statSync as Be } from "fs";
import { access as ft, mkdir as tt, unlink as ce, writeFile as Ee } from "fs/promises";
import { basename as gt, dirname as mt, isAbsolute as _t } from "path";
var Pe = 2000,
  ne = Yf,
  nt = /\x1b\[\d*D/g;
function ke(e, r) {
  let s = "",
    h = "",
    n = !0,
    p = 0,
    o = "",
    u = !1;
  function g(state, tempo) {
    let detail = su(ps(h), ne),
      y = `${state}|${tempo}|${detail}`;
    if (y === o) return;
    o = y, Zr(e, r).then(R => R && !u ? $l(e, {
      ...R,
      state: state,
      tempo: tempo,
      detail: detail,
      updatedAt: new Date().toISOString()
    }, r) : void 0).catch(l);
  }
  let f = setInterval(() => {
    if (p > 0 && Date.now() - p < Pe) g("working", "active");else if (!n && h) g("blocked", "blocked");else g("working", "idle");
  }, Pe);
  return f.unref(), {
    feed(v) {
      let A = pn(v.replace(nt, "\x00")).replace(/\r\n?/g, `
`).replace(/\0+$/, "").replace(/\0/g, `
`);
      if (!A) return;
      p = Date.now(), s += A;
      let S = s.split(`
`);
      if (s = S.pop() ?? "", n = s === "", h = s.trim() || S.findLast(R => R.trim())?.trim() || h, s.length > ne * 2) s = s.slice(-ne);
      if (o.startsWith("blocked|")) g("working", "active");
    },
    dispose() {
      u = !0, clearInterval(f);
    },
    get lastLine() {
      return su(ps(h), ne);
    }
  };
}
import { rename as ot, unlink as oe } from "fs/promises";
import { Socket as at } from "net";
import { StringDecoder as dt } from "string_decoder";
var Ie = [50, 100, 250, 500, 1000, 2000],
  Oe = 30,
  ct = 4,
  ht = 1e4,
  Le = 8 * Mnn,
  lt = 50;
function ae(e, pid, s) {
  let {
      procStart: procStart,
      short: short,
      hostProc: hostProc,
      auth: o,
      onAuthRequired: onAuthRequired
    } = s ?? {},
    g = Me(),
    f = Me(),
    v,
    A = new dt("utf8"),
    S,
    y = !1,
    R = !1,
    L = 0,
    O = 0,
    x,
    B,
    D,
    T,
    C = 0,
    H,
    K,
    z,
    hadHello = !1,
    se = !1,
    fe = !1,
    ee = "",
    Te = !1,
    Q = procStart;
  if (Q === void 0) ad(pid, {
    skipCache: !0
  }).then(w => {
    Q = w;
  });
  let Ce = [],
    ge = 0;
  function Z(w) {
    if (S) {
      if (S.destroyed) return !1;
      if (!S.write(w)) {
        if (!D) D = setTimeout(() => {
          D = void 0, S?.destroy();
        }, ht), D.unref();
        if (!T && S.writableLength > Le) T = setTimeout(() => {
          if (T = void 0, S && !S.destroyed && S.writableLength > Le) ie(), S.destroy();
        }, lt), T.unref();
      }
      return !0;
    }
    if (ge < 2 * Mnn) Ce.push(w), ge += w.length;
    return !1;
  }
  function ie() {
    if (D) clearTimeout(D), D = void 0;
    if (T) clearTimeout(T), T = void 0;
  }
  function j(exitCode, signal, hostStderr) {
    if (R) return;
    if (R = !0, y = !0, B) clearTimeout(B), B = void 0;
    ie(), S?.destroy(), S = void 0;
    let M = A.end();
    if (M) g.emit(M);
    f.emit({
      exitCode: exitCode,
      signal: signal,
      hostStderr: hostStderr
    });
  }
  function me(w) {
    let P = al(OT(e), 1048576).then(V => V ?? "").catch(() => "");
    P.then(V => {
      let U = V.slice(0, 2000).trim();
      if (U.length > 0) t(`[bg-pty] host crash: ${U}`, {
        level: "warn"
      });
      let q = [...U.matchAll(/\bE[A-Z]{2,14}\b/g)].find(item => !"/\\".includes(U[item.index - 1] ?? "."))?.[0];
      i("tengu_bg_ptyhost_crash", {
        hadBreadcrumb: U.length > 0,
        hadHello: hadHello,
        via: c(w),
        short: short === void 0 ? void 0 : jR(short),
        stderr_errno: pS(q)
      });
    }), zEe(C ? [-pid, C] : [-pid], w !== "hung" ? void 0 : Q), Nge(C, H);
    let N = ff().length > 0,
      M = N ? (V, U) => void P.then(q => j(V, U, Ne(q)), () => j(V, U)) : j;
    if (hostProc) {
      let V = null;
      hostProc.exited.then(code => {
        V = {
          code: code,
          signal: hostProc.signalCode ?? void 0
        }, M(code, V.signal);
      }, () => M(-1)), setTimeout(() => j(V ? V.code : -1, V?.signal), 1000).unref();
      return;
    }
    if (M(-1), N) setTimeout(j, 1000, -1).unref();
  }
  function st(w) {
    if (w.kind === gpt) {
      if (!se) {
        let P = A.write(w.payload);
        if (fe) g.emit(P);else if (P.length > 0) {
          let N = (ee + P).replaceAll($Z, ""),
            M = pt(N);
          ee = M > 0 ? N.slice(N.length - M) : "";
          let V = M > 0 ? N.slice(0, N.length - M) : N;
          if (V.length > 0) g.emit(V);
        }
      }
    } else if (w.ctrl.t === "hello") {
      if (hadHello) se = !0, A.end(), ee = "";else oe(cD(e)).catch(() => {});
      if (hadHello = !0, C = w.ctrl.replPid, z = w.ctrl.version, H = void 0, C > 1 && I() !== "windows") {
        let P = C;
        Fge(P).then(N => {
          if (C !== P || R || y || N === void 0) return;
          H = N, K?.(C, N);
        });
      }
    } else if (w.ctrl.t === "live") {
      if (!fe) {
        if (fe = !0, ee.length > 0) g.emit(ee), ee = "";
      }
      if (se) se = !1, v?.();
    } else if (w.ctrl.t === "exit") j(w.ctrl.code, w.ctrl.signal);else if (w.ctrl.t === "ping") Z(bH({
      t: "pong"
    }));else if (w.ctrl.t === "auth-required") if (o) t(`[bg-pty] ${short ?? e}: host rejected auth token \u2014 roster ptyAuth poisoned; input is dead until the worker is re-keyed`, {
      level: "warn"
    }), onAuthRequired?.();else t(`[bg-pty] ${short ?? e}: host dropped input \u2014 DATA auth token missing (version skew; respawn the worker to re-key)`, {
      level: "warn"
    });
  }
  function De() {
    if (y) return;
    let w = new at(),
      P = !1;
    w.on("error", N => {
      Te = k(N) === "ENOENT", _e();
    }), w.once("close", () => {
      if (S === w) S = void 0, ie();
      if (y) return;
      if (P && !R) {
        try {
          process.kill(pid, 0), t("[bg-pty] dropped by host; reconnecting", {
            level: "debug"
          }), O = ct, L = 0, _e();
          return;
        } catch {}
        me("close");
        return;
      }
      _e();
    }), w.once("connect", () => {
      P = !0, L = 0, O = 0, S = w, w.on("drain", ie);
      let N = OT(e),
        M = `${N}.read`;
      if (ot(N, M).then(() => al(M, 1048576)).then(U => {
        let q = (U ?? "").slice(0, 2000).trim();
        if (q.length > 0) t(`[bg-pty] pre-connect stderr:
${q}`, {
          level: "warn"
        });
      }).catch(() => {}).finally(() => oe(M).catch(() => {})), Z(bH({
        t: "pong"
      })), o) Z(bH({
        t: "auth",
        token: o
      }));
      for (let U of Ce.splice(0)) Z(U);
      ge = 0;
      let V = UWn(st, U => {
        t(`[bg-pty] frame error: ${U}`, {
          level: "warn"
        }), w.destroy();
      });
      w.on("data", V);
    }), w.connect(e);
  }
  function _e() {
    if (y || x) return;
    try {
      process.kill(pid, 0);
    } catch {
      y = !0, al(cD(e), 8388608).then(P => P ?? "").then(P => {
        if (!hadHello && P.length > 0) g.emit(P.replaceAll($Z, ""));
        oe(cD(e)).catch(() => {}), me("connect");
      });
      return;
    }
    if (O > 0 && --O === 0) {
      me("hung");
      return;
    }
    if (procStart !== void 0 && Te && L >= 3) t(`[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`, {
      level: "warn"
    }), i("tengu_bg_adopt_sock_unlinked", {}), L = Oe;
    if (L >= Oe) {
      t(`[bg-pty] ${e}: ${L} connect attempts failed; treating host as dead`, {
        level: "warn"
      });
      let P = Q && YWe(pid);
      if (pid > 1 && (!Q || !P || Q === P)) try {
        process.kill(-pid, "SIGKILL");
      } catch {
        try {
          process.kill(pid, "SIGKILL");
        } catch {}
      }
      y = !0, al(cD(e), 8388608).then(N => N ?? "").then(N => {
        if (!hadHello && N.length > 0) g.emit(N.replaceAll($Z, ""));
        oe(cD(e)).catch(() => {});
        let M = ff().length > 0,
          V = (U, q) => {
            if (!M) {
              j(U, q);
              return;
            }
            al(OT(e), 1048576).then(Se => j(U, q, Ne(Se ?? "")), () => j(U, q));
          };
        if (hostProc) {
          let U = null;
          hostProc.exited.then(code_2 => {
            U = {
              code: code_2,
              signal: hostProc.signalCode ?? void 0
            }, V(code_2, U.signal);
          }, () => V(-1)), setTimeout(() => j(U ? U.code : -1, U?.signal), 1000).unref();
        } else if (V(-1), M) setTimeout(j, 1000, -1).unref();
      });
      return;
    }
    let w = Ie[Math.min(L, Ie.length - 1)];
    L++, x = setTimeout(() => {
      x = void 0, De();
    }, w), x.unref();
  }
  return De(), {
    pid: pid,
    replPid: () => C,
    replVersion: () => z,
    onRepl: w => {
      if (K = w, C > 1 && H !== void 0) w(C, H);
    },
    onResume: w => {
      v = w;
    },
    write: w => {
      if (R) return;
      let P = Buffer.from(w, "utf8"),
        N = Mnn - 1;
      for (let M = 0; M < P.length; M += N) Z(Dnn(P.subarray(M, M + N)));
    },
    resize: (cols, rows) => Z(bH({
      t: "resize",
      cols: cols,
      rows: rows
    })),
    kill: w => {
      let sig = w === "SIGKILL" ? "SIGKILL" : "SIGTERM",
        N = Z(bH({
          t: "kill",
          sig: sig
        }));
      if (pid <= 1) return;
      if (I() === "windows" && sig === "SIGTERM" && N) {
        if (B) clearTimeout(B);
        B = setTimeout((M, V) => {
          if (!t5n(M, Q)) {
            V(-1);
            return;
          }
          try {
            process.kill(M, "SIGKILL");
          } catch {
            V(-1);
          }
        }, 5000, pid, j), B.unref();
        return;
      }
      try {
        process.kill(-pid, sig);
      } catch {
        try {
          process.kill(pid, sig);
        } catch {
          j(-1);
        }
      }
      if (Nge(C, H, sig), sig === "SIGTERM" && !R) {
        if (B) clearTimeout(B);
        B = setTimeout((M, V) => {
          if (!t5n(M, Q)) {
            V(-1);
            return;
          }
          Nge(C, H, "SIGKILL");
          try {
            process.kill(-M, "SIGKILL");
          } catch {
            try {
              process.kill(M, "SIGKILL");
            } catch {
              V(-1);
            }
          }
        }, 5000, pid, j), B.unref();
      }
    },
    dispose: () => {
      if (y = !0, x) clearTimeout(x), x = void 0;
      if (B) clearTimeout(B), B = void 0;
      ie(), S?.destroy(), S = void 0;
    },
    onData: w => ({
      dispose: g.subscribe(w)
    }),
    onExit: w => ({
      dispose: f.subscribe(w)
    })
  };
}
function Ne(e) {
  return e.slice(0, 2000).split(/\r?\n/).map(item => item.trim()).find(item => item.length > 0);
}
function pt(e) {
  let r = Math.min($Z.length - 1, e.length);
  for (let s = r; s > 0; s--) if (e.endsWith($Z.slice(0, s))) return s;
  return 0;
}
import { Socket as ut } from "net";
var xe = [100, 250, 500, 1000, 2000],
  Ve = 30;
function Ue(e, r, s, h, auth) {
  let p,
    o = !1,
    attempts = 0,
    g = !1,
    f;
  function v() {
    if (o) return;
    let S = new ut(),
      y = !1;
    S.on("error", () => A()), S.once("close", () => {
      if (p === S) p = void 0;
      if (o) return;
      if (y) s();
      A();
    }), S.once("connect", () => {
      y = !0, attempts = 0, g = !1, p = S, S.write(_({
        proto: proto,
        role: "supervisor",
        supervisorPid: process.pid,
        auth: auth
      }) + `
`), h?.(), GGt(S, R => {
        let L;
        try {
          L = J(R);
        } catch {
          return;
        }
        if (L && typeof L === "object" && "type" in L) r(L);
      });
    }), S.connect(e);
  }
  function A() {
    if (o || f || g) return;
    if (attempts >= Ve) {
      g = !0, t(`[bg-rv] ${e}: ${attempts} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`, {
        level: "warn"
      }), i("tengu_bg_rv_connect_exhausted", {
        attempts: attempts
      });
      return;
    }
    let S = xe[Math.min(attempts, xe.length - 1)];
    attempts++, f = setTimeout(() => {
      f = void 0, v();
    }, S), f.unref();
  }
  return v(), {
    send(S) {
      if (!p || p.destroyed) {
        if (attempts >= Ve) attempts = 0, g = !1, A();
        return !1;
      }
      try {
        return p.write(_(S) + `
`), !0;
      } catch (error) {
        return t(`[bg-rv] send failed: ${String(error)}`), !1;
      }
    },
    close() {
      if (o = !0, f) clearTimeout(f);
      p?.destroy(), p = void 0;
    }
  };
}
var St = 1e4,
  He = 20,
  kt = new Set([129, 143]);
function $e() {
  return E("tengu_bg_revival_guard", !0);
}
function vt() {
  return E("tengu_greedy_crane", !0) !== !1;
}
function Et() {
  return E("tengu_cosmic_cookie", !1) === !0;
}
var At = "Continue from where you left off. Note: this session was automatically restarted after its process exited unexpectedly; the user has not sent a new message since the restart. Re-verify anything time-sensitive (branch state, running processes, prior partial work) before continuing.",
  wt = 3600000,
  yt = 3,
  Ge = 5000,
  Rt = 300000,
  bt = 60000,
  he = 200,
  detail_8 = "session ID already belongs to another conversation \u2014 open again to start with a new ID";
function uWr(e) {
  return `working directory no longer exists or is not accessible: ${e}`;
}
var ve = 5000,
  Ke = ve * 3,
  Tt = 120000,
  ze = 120000,
  pWr = 1000,
  Ct = 300000,
  Je = {
    release: "2.1.213",
    commitMs: Date.UTC(2026, 6, 16, 18, 0, 5)
  },
  Dt = {
    release: "2.1.287",
    commitMs: Date.UTC(2026, 8, 30, 14, 52, 7)
  },
  it = ["local_bash", "in_process_teammate", "dream", "auto_mode_scan", "local_memory_import"],
  Pt = 3600000,
  Ye = 4096;
function fWr() {
  return (e, r, s) => {
    let {
        cmd: cmd,
        prefixArgs: prefixArgs
      } = Bc({
        pinToCurrentBinary: !0
      }),
      p = [cmd, ...prefixArgs, "--bg-pty-host", s.ptySock, String(s.cols), String(s.rows), "--", e, ...r],
      o = {
        cwd: s.cwd,
        env: s.env,
        detached: !0,
        windowsHide: !0,
        ...vd("agent"),
        ...(I() !== "windows" && {
          argv0: "claude bg-pty-host"
        })
      },
      hostProc_2;
    try {
      hostProc_2 = Bun.spawn(p, {
        ...o,
        stdio: ["ignore", "ignore", Bun.file(OT(s.ptySock))]
      });
    } catch (error) {
      let f = k(error);
      if (f !== "ENOENT" && f !== "ENOSPC" && f !== "EACCES" && f !== "EROFS") throw error;
      t(`bg: ptyHost stderr breadcrumb open failed (${f}) at ${OT(s.ptySock)} \u2014 spawning with stderr discarded (crash diagnostics degraded): ${d(error)}`, {
        level: "warn"
      });
      let {
        cgroup: cgroup,
        ...A
      } = o;
      if (cgroup !== void 0) t(`bg: retrying ptyHost spawn without tool cgroup placement (${cgroup})`, {
        level: "warn"
      });
      hostProc_2 = Bun.spawn(p, {
        ...A,
        stdio: ["ignore", "ignore", "ignore"]
      });
    }
    return hostProc_2.unref(), ae(s.ptySock, hostProc_2.pid, {
      short: s.short,
      hostProc: hostProc_2,
      auth: s.ptyAuth
    });
  };
}
function qe(e, r, s, h, n, p) {
  if (e.launch.mode === "exec") return e.launch.args.map(FA);
  if (r > 1 && s) return zZ(["--resume", n ?? h, ...Kdt(p)]);
  if (r > 1 && h !== e.sessionId) return zZ(["--session-id", h, ...Kdt(p)]);
  if (e.launch.mode === "resume") return zZ([...(e.launch.fork ? ["--session-id", e.sessionId, "--fork-session"] : []), "--resume", e.launch.transcriptPath ?? e.launch.sessionId, ...Kdt(e.launch.flagArgs)]);
  return zZ(Kdt(e.launch.args));
}
function Xe(e, CLAUDE_JOB_DIR, CLAUDE_BG_AUTH_SNAPSHOT_PATH, CLAUDE_BG_RENDEZVOUS_SOCK, n) {
  let p = {
    ...process.env
  };
  if (te(p), e.env) te(e.env);
  let o = {
      ...p,
      ...(CLAUDE_BG_AUTH_SNAPSHOT_PATH && {
        CLAUDE_BG_AUTH_SNAPSHOT_PATH: CLAUDE_BG_AUTH_SNAPSHOT_PATH
      }),
      ...(W() && E("tengu_hover_rest", !1) && {
        CLAUDE_CODE_HOVER_REST: "1"
      }),
      ...(I() === "windows" && {
        CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1"
      }),
      ...e.env,
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      CLAUDE_BG_SOURCE: e.source,
      CLAUDE_JOB_DIR: CLAUDE_JOB_DIR,
      CLAUDE_CODE_SESSION_NAME: Ti(e.seed?.name || e.seed?.intent || e.short),
      CLAUDE_BG_RENDEZVOUS_SOCK: CLAUDE_BG_RENDEZVOUS_SOCK,
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true"
    },
    u = Object.hasOwn(p, "PATH") ? "PATH" : Object.keys(p).find(item => item.toUpperCase() === "PATH"),
    g = e.env?.PATH || (u ? p[u] : void 0);
  for (let f of Object.keys(o)) if (f.toUpperCase() === "PATH") delete o[f];
  if (g) o[u ?? "PATH"] = g;
  if (process.env.CLAUDE_CONFIG_DIR) o.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR;else if (o.CLAUDE_CONFIG_DIR !== void 0 && (!_t(o.CLAUDE_CONFIG_DIR) || o.CLAUDE_CONFIG_DIR.split(/[\\/]/).includes("..") || !lre(o.CLAUDE_CONFIG_DIR))) t(`bg spawn ${e.short}: dropped dispatch CLAUDE_CONFIG_DIR \u2014 not an absolute, dot-dot-free spelling of this daemon's config home`, {
    level: "warn"
  }), delete o.CLAUDE_CONFIG_DIR;
  for (let f of DCe) if (!e.env?.[f]) delete o[f];
  if (JQ(o), _vt(o), D5o(o, p), !e.env?.CLAUDE_CODE_ENTRYPOINT) p8(o);
  if (e.isolation === "worktree") o.CLAUDE_BG_ISOLATION = "worktree";
  for (let f of le) if (!e.env?.[f]) delete o[f];
  for (let f of Object.keys(o)) if (S8n.some(item => f.startsWith(item)) && !e.env?.[f]) delete o[f];
  if (xBt(p) || i2e(e)) {
    for (let A of FB) delete o[A];
    if (i2e(e) || Fe(p.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) ABt(o, e.env);
    let f = HJ(p);
    if (f) te(o, [f]), delete o[f];
    let v = e.env?.CLAUDE_CODE_HOST_CREDS_FILE ?? (i2e(e) ? p.CLAUDE_CODE_HOST_CREDS_FILE : void 0);
    if (v) o.CLAUDE_CODE_HOST_CREDS_FILE = v;
    for (let A of mze) delete o[A];
  } else {
    let f = new Set(),
      v = new Set(),
      A = new Set(),
      S = !1,
      y = !1;
    for (let R of VQe) {
      let L = R.selection === void 0 || Fe(o[R.selection]);
      if (o[R.endpoint] === p[R.endpoint] && (!o[R.endpoint] || L) && R.companions.every(item => !y8n.includes(item) || Fe(o[item]) === Fe(p[item]))) {
        if (o[R.endpoint]) {
          for (let x of R.companions) f.add(x);
          S ||= re(p, R);
        }
        continue;
      }
      for (let x of [R.endpoint, ...R.companions]) if (v.add(x), o[R.endpoint] && o[x] !== p[x]) A.add(x);
      if (R.endpoint === "ANTHROPIC_BASE_URL" && p.ANTHROPIC_BASE_URL) delete o.ANTHROPIC_AUTH_TOKEN;else y ||= re(p, R);
    }
    for (let R of v) if (!f.has(R) || A.has(R)) delete o[R];
    if (y && !S) delete o.ANTHROPIC_AUTH_TOKEN;
  }
  if (n) o.CLAUDE_BG_RV_AUTH = n.rvAuth, o.CLAUDE_BG_PTY_AUTH = n.ptyAuth;
  if (CLAUDE_BG_AUTH_SNAPSHOT_PATH) delete o.CLAUDE_CODE_OAUTH_TOKEN;
  if (e.launch.mode === "exec") {
    let f = VQe.some(item => re(o, item));
    for (let v of Object.keys(o)) if (v.startsWith("CLAUDE_") && v !== "CLAUDE_JOB_DIR" && v !== "CLAUDE_CONFIG_DIR" && v !== "CLAUDE_BG_PTY_AUTH" || v.startsWith("OTEL_")) delete o[v];
    if (delete o.BROWSER, f) delete o.ANTHROPIC_AUTH_TOKEN;
    for (let v of mze) delete o[v];
    o.CLAUDE_PTY_HOST_EXEC = "1";
  }
  return o;
}
function Qe(e, r) {
  let s = process.env[jT];
  if (r.launch.mode === "exec" || s === void 0) delete e[jT];else e[jT] = s;
}
async function Ae(e, r) {
  if (!r || I() !== "macos") return;
  let s = ppt(e);
  try {
    return await tt(upt(), {
      recursive: !0,
      mode: 448
    }), await Ee(s, JSON.stringify(r), {
      mode: 384
    }), s;
  } catch (error) {
    t(`writeAuthSnapshot failed: ${d(error)}`, {
      level: "warn"
    });
    return;
  }
}
async function we(e, r) {
  if (I() === "windows") return;
  let s = fpt(e);
  try {
    return await tt(upt(), {
      recursive: !0,
      mode: 448
    }), await Ee(s, JSON.stringify(r), {
      mode: 384
    }), s;
  } catch (error) {
    t(`writeSocketTokensFile failed: ${d(error)}`, {
      level: "warn"
    });
    return;
  }
}
var le = [...qgo, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", "CLAUDE_CODE_REMOVE_PROMPT_STRINGS", ...v4, "CLAUDE_CODE_EXTRA_BODY", "CLAUDE_CODE_AUTO_MODE_MODEL", ...NB, ...y8n, "ANTHROPIC_CUSTOM_HEADERS", ...KQe, "CLAUDE_CODE_HOST_GATEWAY_LINEAGE", "CLAUDE_CODE_HOST_CREDS_FILE"],
  i2e = e => Fe(e.env?.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
  Ohn = e => e.launch.mode !== "exec" && !i2e(e),
  It = new Map(["CLAUDE_CONFIG_DIR", ...DCe, ...Ntr, ...le, ...mze, ...FB, ...RBt].map(item => [item.toUpperCase(), item]));
function te(e, r = []) {
  if (I() !== "windows") return;
  let s = new Map(r.map(item => [item.toUpperCase(), item]));
  for (let h of Object.keys(e)) {
    let n = h.toUpperCase(),
      p = It.get(n) ?? s.get(n);
    if (p === void 0 || p === h) continue;
    if (e[p] === void 0) e[p] = e[h];
    delete e[h];
  }
}
function re(e, r) {
  return !!e[r.endpoint] && (r.endpoint === "ANTHROPIC_BASE_URL" || r.companions.some(item => y8n.includes(item) && Fe(e[item])));
}
function ye(e) {
  let r = (e.inFlight?.kinds ?? []).filter(item => item !== "artifact_watch" || !(e.inFlight?.drainableMonitors ?? 0)),
    s = Ta(e) && r.length > 0 && r.every(item => it.includes(item)),
    h = (e.inFlight?.tasks ?? 0) - (e.inFlight?.drainableMonitors ?? 0);
  return (e.inFlight?.queued ?? 0) > 0 || h > 0 && !s || r.includes("session_cron");
}
function Ot(e) {
  if (!e) return null;
  if (Ta(e)) return "settled";
  if (e.tempo === "active") return "active";
  if (ye(e)) return "inflight";
  return null;
}
function Ze(e, r) {
  let s = Ot(e);
  if (s === "settled" && r !== "missing-at-adopt") return e && ye(e) ? "inflight" : null;
  return s;
}
function et(e) {
  return e.kind === "retiring" ? `retiring:${e.reason}` : e.kind === "retired" ? `retired:${e.outcome}` : e.kind;
}
function Lt(e, r) {
  if (e.kind === "retired") return !1;
  switch (r.kind) {
    case "spawning":
      return e.kind === "upgrading" || e.kind === "running";
    case "running":
      return e.kind === "spawning";
    case "upgrading":
      return e.kind === "running";
    case "retiring":
      return !0;
    case "retired":
      return !0;
  }
}
class Wde {
  dispatch;
  spawnPty;
  getAuthSnapshot;
  via;
  storageV5;
  credentials;
  record;
  onStream = Me();
  onState = Me();
  onSettle = Me();
  onRepaintDone = Me();
  attachers = new Map();
  lastInputAttacher;
  pty;
  procStart;
  replPid = 0;
  replProcStart;
  ptyCols = 200;
  ptyRows = 50;
  decModes = SGt();
  execTracker;
  execLastLine;
  offData;
  offExit;
  ring = [];
  ringBytes = 0;
  ringSpawnMark = 0;
  attempt = 0;
  lastSpawnAt = 0;
  fastCrashStreak = 0;
  lastExitCause;
  lastExitExternalStop = !1;
  effectiveCwd;
  liveTranscriptPath;
  hostWokeAt;
  backoffTimer = null;
  pidPoll = null;
  rv;
  rvRejected = !1;
  rvSockPath;
  ptySockPath;
  rvAuth = de(16).toString("hex");
  ptyAuth = de(16).toString("hex");
  authRekeyFired = !1;
  authRekeyCount = 0;
  pendingAuthRekey;
  rosterExtras = {};
  unverifiedSock;
  phase = {
    kind: "spawning"
  };
  workerReady = !1;
  sessionIdTakenLatch = !1;
  firedInteractiveMarks = [];
  bootedViaResume = !1;
  resizeDeferred = !1;
  lastInputAt;
  downgradeRefusalLogged = !1;
  deleteJobDirOnSettle = !1;
  get shouldDeleteJobDir() {
    return this.deleteJobDirOnSettle;
  }
  adoptedAt;
  lastRvHeartbeat;
  stalledLogged = !1;
  lastCheckPidAt = Date.now();
  replyChain = Promise.resolve();
  killOutcome = "killed";
  handoffKill = !1;
  get isKilling() {
    return this.phase.kind === "retiring" && this.phase.reason === "reap";
  }
  get isHandoffKill() {
    return this.handoffKill;
  }
  get isRetiring() {
    return this.phase.kind === "retiring" && this.phase.reason === "grace";
  }
  get isUpgrading() {
    return this.phase.kind === "upgrading";
  }
  get isBooting() {
    return !this.record.outcome && (this.phase.kind === "upgrading" || !this.workerReady);
  }
  get isSpawnPending() {
    return this.phase.kind === "spawning";
  }
  get isReplyQueueOnly() {
    return this.dispatch.launch.mode !== "exec" && vt() && ber(this.record.cliVersion, Dt, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION);
  }
  replayInteractiveMarksTo(e) {
    let r = this.attachers.get(e);
    if (!r || r.caps?.imark !== !0) return;
    for (let s of this.firedInteractiveMarks) r.deliver(Pvr({
      ...s,
      nonce: r.imarkNonce
    }));
  }
  get isVersionStale() {
    return !!this.record.cliVersion && this.record.cliVersion !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION;
  }
  get marksCapable() {
    if (this.isVersionStale) return !1;
    return this.bootedViaResume || this.firedInteractiveMarks.length > 0;
  }
  get bootingForAttachMetrics() {
    return this.isBooting || this.marksCapable && this.firedInteractiveMarks.length === 0;
  }
  get isUnverified() {
    return this.unverifiedSock !== void 0;
  }
  getPhase() {
    return this.phase;
  }
  get isTransitioning() {
    return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
  }
  get isDetached() {
    return this.phase.kind === "retiring" && this.phase.reason === "stop";
  }
  transitionTo(e) {
    if (!Lt(this.phase, e)) return t(`[bg] illegal worker-phase transition ${et(this.phase)} \u2192 ${et(e)} for ${this.record.short}`, {
      level: "warn"
    }), i("tengu_bg_phase_illegal", {}), !1;
    return this.phase = e, !0;
  }
  shutdownWorker() {
    let e = this.rv?.send({
      type: "shutdown"
    }) ?? !1;
    if (!e) this.sigtermWorker();else setTimeout(r => {
      let phase = r.phase;
      if ((phase.kind === "upgrading" || phase.kind === "retiring" && phase.reason === "grace") && !r.record.outcome) r.sigtermWorker();
    }, 5000, this).unref();
    return e;
  }
  noteDowngradeRefused(e) {
    if (this.downgradeRefusalLogged || !this.record.cliVersion) return;
    this.downgradeRefusalLogged = !0, i("tengu_bg_respawn_downgrade_refused", {
      short: jR(this.dispatch.short),
      trigger: c(e),
      worker_cli_version: zi(this.record.cliVersion)
    });
  }
  async respawnIfIdleStale(e, r = "sweep") {
    if (this.dispatch.launch.mode === "exec") return {
      respawned: !1,
      reason: "not-stale"
    };
    if (this.isTransitioning) return {
      respawned: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      respawned: !1,
      reason: "no-state"
    };
    if (this.record.cliVersion && $wt(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)) return this.noteDowngradeRefused(r), {
      respawned: !1,
      reason: "not-stale"
    };
    if (Rtt(this.record.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)) return {
      respawned: !1,
      reason: "not-stale"
    };
    if (this.attachers.size > 0) return {
      respawned: !1,
      reason: "attached"
    };
    if (!this.isVersionStale) return {
      respawned: !1,
      reason: "not-stale"
    };
    if (r !== "attach" && this.lastInputAt && Date.now() - this.lastInputAt < Pt) return {
      respawned: !1,
      reason: "busy"
    };
    let s = Date.now(),
      h = await Zr(io(this.dispatch.short), this.storageV5);
    if (this.isTransitioning) return {
      respawned: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      respawned: !1,
      reason: "no-state"
    };
    if (this.attachers.size > 0) return {
      respawned: !1,
      reason: "attached"
    };
    if (this.lastInputAt && this.lastInputAt >= s) return {
      respawned: !1,
      reason: "busy"
    };
    if (!h) return {
      respawned: !1,
      reason: "no-state"
    };
    if (r !== "attach" && !Ta(h) && this.adoptedAt && Date.now() - this.adoptedAt < ze) return {
      respawned: !1,
      reason: "busy"
    };
    if (Ta(h) && r === "sweep" && !e?.has(this.dispatch.short)) return {
      respawned: !1,
      reason: "settled"
    };
    if (!Ta(h) && h.tempo !== "idle" && !(this.isParkedIdleFork(h) && h.inFlight !== void 0)) return {
      respawned: !1,
      reason: "busy"
    };
    if (ye(h)) return {
      respawned: !1,
      reason: "inflight"
    };
    if (!this.transitionTo({
      kind: "upgrading"
    })) return {
      respawned: !1,
      reason: "in-progress"
    };
    return this.onState.emit({
      pid: this.record.pid
    }), i("tengu_bg_respawn_stale", {
      short: jR(this.dispatch.short),
      rvSent: this.shutdownWorker(),
      trigger: c(r),
      worker_cli_version: zi(this.record.cliVersion)
    }), {
      respawned: !0
    };
  }
  isParkedIdleFork(e) {
    return (ber(this.record.cliVersion, Je, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION) || e.inFlight?.drainableMonitors !== void 0) && e.state === "working" && e.tempo === "blocked" && e.needs === Hb && e.interactiveLineage === !0;
  }
  async retireIfSettled(e, r, s = e, {
    shedMonitoringOnly = !1
  } = {}) {
    if (this.isTransitioning) return {
      retired: !1,
      reason: "in-progress"
    };
    if (this.record.outcome) return {
      retired: !1,
      reason: "no-state"
    };
    if (this.attachers.size > 0) return {
      retired: !1,
      reason: "attached"
    };
    if (i2e(this.dispatch)) return {
      retired: !1,
      reason: "host-managed"
    };
    if (r?.has(this.dispatch.short)) return {
      retired: !1,
      reason: "pinned"
    };
    if (this.adoptedAt && Date.now() - this.adoptedAt < ze) return {
      retired: !1,
      reason: "recent-adopt"
    };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e) return {
      retired: !1,
      reason: "recent-input"
    };
    let n = await Zr(io(this.dispatch.short), this.storageV5);
    if (this.isTransitioning || this.attachers.size > 0) return {
      retired: !1,
      reason: "in-progress"
    };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e) return {
      retired: !1,
      reason: "recent-input"
    };
    if (!n) {
      if (this.dispatch.source === "spare" && Date.now() - this.dispatch.createdAt > e) {
        if (!this.transitionTo({
          kind: "retiring",
          reason: "grace"
        })) return {
          retired: !1,
          reason: "in-progress"
        };
        let D = Date.now() - this.dispatch.createdAt;
        return i("tengu_bg_retired", {
          short: jR(this.dispatch.short),
          rvSent: this.shutdownWorker(),
          settledForMs: D,
          state: b("stale-spare"),
          cause: b("stale-spare"),
          worker_cli_version: zi(this.record.cliVersion)
        }), {
          retired: !0,
          cause: "stale-spare",
          idleMs: D
        };
      }
      return {
        retired: !1,
        reason: "no-state"
      };
    }
    if (this.dispatch.source !== "shell" && !EOe() && !n.name && !n.intent && !n.worktreePath && n.template === "bg" && n.state === "working" && n.tempo === "blocked" && !((n.inFlight?.tasks ?? 0) > 0)) {
      let D = Date.parse(n.createdAt),
        T = Date.parse(n.updatedAt),
        C = Date.now() - (T > D ? T : D);
      if (C < Ct) return {
        retired: !1,
        reason: "empty-idle-grace"
      };
      if (!this.transitionTo({
        kind: "retiring",
        reason: "grace"
      })) return {
        retired: !1,
        reason: "in-progress"
      };
      return this.deleteJobDirOnSettle = !0, i("tengu_bg_retired", {
        short: jR(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        settledForMs: C,
        state: b("empty-idle"),
        cause: b("empty-idle"),
        worker_cli_version: zi(this.record.cliVersion)
      }), {
        retired: !0,
        cause: "empty-idle",
        idleMs: C
      };
    }
    let p = this.isParkedIdleFork(n),
      o = Ta(n) || this.dispatch.launch.mode !== "exec" && (n.tempo === "idle" || n.state === "blocked" && n.tempo === "blocked" || p),
      u = Date.parse(n.updatedAt),
      g = n.tempo === "blocked" && n.state !== "blocked" && n.needs !== void 0 && n.needs !== Hb,
      f = this.isVersionStale && !(this.record.cliVersion && $wt(this.record.cliVersion, {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION)) && !Rtt(this.record.cliVersion, {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION) && this.dispatch.launch.mode !== "exec" && n.tempo !== "active" && !g && !n.routine && (n.inFlight?.tasks ?? 0) - (n.inFlight?.drainableMonitors ?? 0) === 0 && (n.inFlight?.queued ?? 0) === 0 && !(n.inFlight?.kinds ?? []).includes("session_cron") && u < Date.now() - HIt;
    if (!o && !f) return {
      retired: !1,
      reason: "not-settled"
    };
    let v = shedMonitoringOnly || f ? n.inFlight?.drainableMonitors ?? 0 : 0,
      A = (n.inFlight?.kinds ?? []).filter(item => item !== "artifact_watch" || v === 0),
      detritusOnly = Ta(n) && A.length > 0 && A.every(item => it.includes(item)),
      y = n.interactiveLineage === !0 && ber(this.record.cliVersion, Je, {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION),
      R = f && !y ? 0 : 1;
    if ((n.inFlight?.queued ?? R) > 0 || (n.inFlight?.tasks ?? R) - v > 0 && !detritusOnly) return {
      retired: !1,
      reason: "inflight"
    };
    if (A.includes("session_cron")) return {
      retired: !1,
      reason: "session-cron"
    };
    if (n.routine) return {
      retired: !1,
      reason: "routine"
    };
    let L = n.bridgeSessionId ? Math.max(e, s) : e,
      O = n.updatedAt && Date.now() - Date.parse(n.updatedAt);
    if (!O || O < L) return {
      retired: !1,
      reason: "grace"
    };
    if (!this.transitionTo({
      kind: "retiring",
      reason: "grace"
    })) return {
      retired: !1,
      reason: "in-progress"
    };
    let x = n.inFlight?.tasks !== void 0 && n.inFlight.queued !== void 0,
      cause = !o || !x || !shedMonitoringOnly && v > 0 ? "abandoned-stale" : Ta(n) ? "settled" : "idle-prompt";
    return i("tengu_bg_retired", {
      short: jR(this.dispatch.short),
      rvSent: this.shutdownWorker(),
      settledForMs: O,
      bridged: !!n.bridgeSessionId,
      detritusOnly: detritusOnly,
      state: xV(n.state),
      cause: c(cause),
      worker_cli_version: zi(this.record.cliVersion)
    }), {
      retired: !0,
      cause: cause,
      idleMs: O
    };
  }
  sigtermWorker() {
    try {
      this.pty?.kill("SIGTERM");
    } catch {}
  }
  onPtyAuthRequired() {
    let mode = this.dispatch.launch.mode;
    if (i("tengu_bg_pty_auth_mismatch", {
      mode: c(mode)
    }), mode === "exec") {
      t(`[bg] exec worker ${this.dispatch.short}: ptyHost rejected auth token \u2014 roster ptyAuth poisoned; input is dead until re-dispatch (exec workers are never auto-respawned)`, {
        level: "warn"
      });
      return;
    }
    this.rekeyForAuthMismatch("pty-auth-required");
  }
  rekeyForAuthMismatch(e) {
    if (this.authRekeyFired || this.authRekeyCount >= yt || this.phase.kind !== "running" || this.record.outcome || this.dispatch.launch.mode === "exec") {
      t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 not re-keying ` + `(via=${this.via} phase=${this.phase.kind} mode=${this.dispatch.launch.mode} fired=${this.authRekeyFired} count=${this.authRekeyCount})`, {
        level: "warn"
      });
      return;
    }
    this.authRekeyFired = !0, Zr(io(this.dispatch.short), this.storageV5).then(r => {
      let s = Ze(r, e);
      if (s === "settled") {
        this.authRekeyFired = !1, i("tengu_bg_adopt_token_lost_respawn", {
          source: c(e),
          deferred: !1,
          skipped: b("settled")
        }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 worker already settled; leaving to retireIfSettled`, {
          level: "warn"
        });
        return;
      }
      if (s !== null) {
        i("tengu_bg_adopt_token_lost_respawn", {
          source: c(e),
          deferred: !0,
          reason: c(s)
        }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 ` + (s === "active" ? "worker is mid-turn" : "worker has non-resumable in-flight work") + "; deferring re-key respawn until safe", {
          level: "warn"
        }), this.pendingAuthRekey = e;
        return;
      }
      i("tengu_bg_adopt_token_lost_respawn", {
        source: c(e),
        deferred: !1
      }), t(`[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 respawning to re-key (--resume preserves the session)`, {
        level: "warn"
      }), this.fireAuthRekey();
    });
  }
  fireAuthRekey() {
    if (this.pendingAuthRekey = void 0, this.phase.kind !== "running" || this.record.outcome) return;
    if (!this.transitionTo({
      kind: "upgrading"
    })) return;
    this.authRekeyCount++, this.onState.emit({
      pid: this.record.pid
    }), this.sigtermWorker();
  }
  constructor(e, r, s, h, n, p, o) {
    this.dispatch = e;
    this.spawnPty = r;
    this.getAuthSnapshot = s;
    this.via = h;
    this.storageV5 = p;
    this.credentials = o;
    if (this.record = {
      short: e.short,
      nonce: e.nonce,
      sessionId: e.sessionId,
      pid: 0,
      attempt: 0,
      startedAt: Date.now(),
      createdAt: e.createdAt,
      cwd: e.cwd,
      backend: "daemon",
      tempo: "active",
      state: "starting",
      detail: "",
      intent: e.seed?.intent ?? "",
      name: e.seed?.name,
      agent: e.agent,
      routine: e.routine,
      worktreePath: e.worktree?.path,
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      source: e.source,
      ...n
    }, e.cols) this.ptyCols = e.cols;
    if (e.rows) this.ptyRows = e.rows;
  }
  static spawn(e, r, s, h, n, p) {
    let o = new Wde(e, r ?? fWr(), s, "cold", void 0, n, p);
    if (h?.afterUpgrade) return o.attempt = 1, o.buildBridgeReattachEnvFromState().then(u => o.doSpawn(u, !0)).catch(l), o;
    return o.doSpawn(e.reattachEnv).catch(l), o;
  }
  static claim(e, r) {
    let s = new Wde(e, r.spawnPty, r.getAuthSnapshot, "spare", {
      pid: r.pid,
      attempt: 1,
      state: "running",
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }, r.storageV5, r.credentials);
    if (s.attempt = 1, s.bootedViaResume = e.launch.mode !== "exec" && (e.launch.restoresTranscript ?? e.launch.mode === "resume"), s.ptySockPath = r.ptySockPath, s.rvSockPath = Onn(e.short), r.ptyAuth) s.ptyAuth = r.ptyAuth;
    return s.wirePty(ae(r.ptySockPath, r.pid, {
      short: e.short,
      auth: s.ptyAuth
    })), s.resize(e.cols ?? 200, e.rows ?? 50), s.connectRv(), ad(r.pid, {
      skipCache: !0
    }).then(h => {
      if (s.record.pid !== r.pid || s.isDetached || s.record.outcome) return;
      if (h) s.procStart = h;
      s.patch({
        pid: r.pid
      });
    }), s;
  }
  socketAuth() {
    return this.rvAuth ??= de(16).toString("hex"), this.ptyAuth ??= de(16).toString("hex"), {
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth
    };
  }
  static buildClaimFrame(e, r, s) {
    let h = io(e.short),
      env = Xe(e, h, r, Onn(e.short), s);
    delete env.CLAUDE_BG_PTY_AUTH, oKr(env, e.reattachEnv), JQ(env), Qe(env, e), delete env.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    let argv = qe(e, 1, !1, e.sessionId, void 0, e.respawnFlags);
    return {
      env: env,
      argv: argv
    };
  }
  static async adopt(e, r, s, h, n, p) {
    if (r.dispatch.env) r.dispatch.env = AVe(r.dispatch.env, L5o);
    if (delete r.dispatch.reattachEnv, !Ia(r.pid)) return null;
    let o = await je(ad(r.pid, {
      skipCache: !0
    }), pWr);
    if (o && r.procStart !== o) return null;
    let u = new Wde(r.dispatch, s, h, "adopted", {
      pid: r.pid,
      attempt: r.attempt,
      startedAt: r.startedAt,
      messagingSock: r.messagingSock,
      state: "adopted",
      detail: "adopted from previous supervisor",
      cliVersion: r.cliVersion,
      ...(r.ptySock ? {} : {
        legacy: !0
      })
    }, n, p);
    if (u.attempt = r.attempt, u.procStart = r.procStart, u.rosterExtras = Ovr(r), u.workerReady = !0, u.adoptedAt = Date.now(), u.rvSockPath = r.rendezvousSock, u.ptySockPath = r.ptySock, u.rvAuth = r.rvAuth, u.ptyAuth = r.ptyAuth, u.dispatch.launch.mode === "exec") u.execTracker = ke(io(u.dispatch.short), u.storageV5), u.workerReady = !0;
    if (r.ptySock) u.wirePty(ae(r.ptySock, r.pid, {
      procStart: u.procStart,
      short: u.dispatch.short,
      auth: u.ptyAuth,
      onAuthRequired: () => u.onPtyAuthRequired()
    })), u.ptyCols = 0, u.seedFocus(!1);
    if (r.decModes) u.decModes.seed(r.decModes);
    if (r.firedInteractiveMarks) u.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    if (u.replPid = r.replPid ?? 0, u.replProcStart = r.replProcStart, u.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume"), u.connectRv(), r.pendingRespawn === "upgrade" && !(r.cliVersion && $wt(r.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)) && !Rtt(r.cliVersion, {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)) u.transitionTo({
      kind: "upgrading"
    }), setTimeout(g => {
      if (g.phase.kind === "upgrading" && !g.record.outcome) g.sigtermWorker();
    }, 5000, u).unref();
    if (u.dispatch.launch.mode !== "exec" && r.ptySock && r.cliVersion && (r.rvAuth === void 0 || r.ptyAuth === void 0)) return t(`[bg] adopt ${u.dispatch.short}: roster rvAuth/ptyAuth missing for token-era worker \u2014 schema-skewed daemon stripped them`, {
      level: "warn"
    }), u.rekeyForAuthMismatch("missing-at-adopt"), u;
    return u;
  }
  static unverified(e, r, s, h) {
    let n = new Wde(r.dispatch, void 0, void 0, "adopted", {
      pid: r.pid,
      attempt: r.attempt,
      startedAt: r.startedAt,
      messagingSock: r.messagingSock,
      state: "adopted",
      detail: "adopted (pid unverifiable; tracking via pty.sock)",
      cliVersion: r.cliVersion
    }, s, h);
    if (n.attempt = r.attempt, n.procStart = r.procStart, n.rosterExtras = Ovr(r), r.firedInteractiveMarks) n.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    return n.replPid = r.replPid ?? 0, n.replProcStart = r.replProcStart, n.bootedViaResume = r.dispatch.launch.mode !== "exec" && (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume"), n.rvSockPath = r.rendezvousSock, n.ptySockPath = r.ptySock, n.rvAuth = r.rvAuth, n.ptyAuth = r.ptyAuth, n.unverifiedSock = r.ptySock, n.lastInputAt = Date.now(), n.pidPoll = setInterval(p => {
      if (p.record.outcome || !p.unverifiedSock) return;
      jbn(p.unverifiedSock).then(o => {
        if (o || p.record.outcome || p.phase.kind !== "spawning") return;
        p.settle("crashed");
      });
    }, ve, n), n.pidPoll.unref(), i("tengu_bg_adopt_unverified", {
      short: jR(e)
    }), n;
  }
  tail(e) {
    return e > 0 ? this.ring.slice(-e) : [];
  }
  ringSnapshot() {
    return this.ring;
  }
  get sessionIdTaken() {
    return this.sessionIdTakenLatch;
  }
  preInitErrorTail() {
    let e = pn(this.ring.slice(this.ringSpawnMark).join("")).replace(/\s+/g, " ").trim();
    if (!e) return;
    return e.length > he ? `\u2026${e.slice(-he)}` : e;
  }
  decModeSnapshot() {
    return this.decModes.snapshot();
  }
  write(e) {
    this.lastInputAt = Date.now(), this.pty?.write(e);
  }
  noteActivity() {
    this.lastInputAt = Date.now();
  }
  shiftGraceClocksForward(e) {
    if (e <= 0) return;
    if (this.hostWokeAt = Date.now(), this.adoptedAt !== void 0) this.adoptedAt += e;
    if (this.lastInputAt !== void 0) this.lastInputAt += e;
  }
  seedFocus(e) {
    if (this.dispatch.launch.mode === "exec") return;
    this.pty?.write(e ? W1t : z1t);
  }
  resize(e, r) {
    if (this.ptyCols = e, this.ptyRows = r, I() === "windows" && !this.workerReady) {
      this.resizeDeferred = !0;
      return;
    }
    try {
      this.pty?.resize(e, r);
    } catch {}
  }
  signalPtyPgrp() {
    if (I() === "windows" || !this.record.pid) return;
    setTimeout(e => {
      try {
        process.kill(-e, "SIGWINCH");
      } catch {}
    }, 15, this.record.pid);
  }
  resizeForRepaint(e, r) {
    if (e !== this.ptyCols || r !== this.ptyRows) return this.resize(e, r), this.signalPtyPgrp(), this.rv?.send({
      type: "repaint"
    }), () => {};
    let s = this.rv?.send({
        type: "repaint"
      }) === !0,
      h = () => {},
      n = setTimeout((p, o) => {
        if (h(), this.ptyCols !== p || this.ptyRows !== o) return;
        let u = Math.max(2, p - 1);
        this.resize(u, o), this.signalPtyPgrp(), setTimeout((g, f, v) => {
          if (this.ptyCols === v && this.ptyRows === f) this.resize(g, f), this.signalPtyPgrp();
        }, 30, p, o, u);
      }, s ? 50 : 0, e, r);
    if (s) h = this.onRepaintDone.subscribe(() => {
      h(), clearTimeout(n);
    });
    return () => {
      h(), clearTimeout(n);
    };
  }
  rosterEntry() {
    return {
      ...this.rosterExtras,
      pid: this.record.pid,
      procStart: this.procStart,
      sessionId: this.record.sessionId,
      rendezvousSock: this.rvSockPath ?? Onn(this.dispatch.short),
      ptySock: this.record.legacy ? void 0 : this.ptySockPath ?? LE(this.dispatch.short),
      messagingSock: this.record.messagingSock,
      cliVersion: this.record.cliVersion,
      startedAt: this.record.startedAt,
      attempt: this.attempt,
      cwd: this.dispatch.cwd,
      worktreePath: this.dispatch.worktree?.path,
      dispatch: this.cappedDispatch(),
      pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : void 0,
      decModes: this.decModes.snapshot(),
      firedInteractiveMarks: this.firedInteractiveMarks.length > 0 ? this.firedInteractiveMarks.slice(0, 2) : void 0,
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
      replPid: this.replPid > 1 ? this.replPid : void 0,
      replProcStart: this.replPid > 1 ? this.replProcStart : void 0
    };
  }
  cappedDispatch() {
    return JSON.parse(JSON.stringify(this.dispatch, (e, r) => {
      let s = e.toUpperCase();
      if (e === "reattachEnv" || e === "attachStallRespawns" || Ftr.includes(s === "PATH" ? e : s)) return;
      if (typeof r === "string" && r.length > Ye) return r.slice(0, Ye);
      return r;
    }));
  }
  async reply(text, {
    nextTurn = !1
  } = {}) {
    if (this.lastInputAt = Date.now(), this.lastInputAttacher = void 0, this.isReplyQueueOnly) {
      let p;
      if (this.rvRejected) p = "the worker rejected the rendezvous token";else if (!this.rv) p = "no rendezvous client";else if (!this.rv.send({
        type: "reply",
        text: text,
        ...(nextTurn && {
          nextTurn: nextTurn
        })
      })) p = "the rendezvous is not connected";
      if (p) t(`[bg] ${this.record.short}: reply refused: ${p}`);
      return !p;
    }
    let s = await Zr(io(this.dispatch.short), this.storageV5),
      n = s?.tempo === "blocked" || (await this.isReplWaiting()) || this.record.tempo === "blocked";
    if ((!s || n || nextTurn) && this.rv?.send({
      type: "reply",
      text: text,
      ...(nextTurn && {
        nextTurn: nextTurn
      })
    })) return !0;
    if (nextTurn || n && this.dispatch.launch.mode !== "exec") return !1;
    if (this.pty) {
      let p = this.dispatch.launch.mode !== "exec";
      return this.replyChain = this.replyChain.then(() => new Promise(o => {
        this.pty?.write(p ? `\x1B[200~${text}\x1B[201~` : text), setTimeout(u => {
          this.pty?.write("\r"), u();
        }, 10, o);
      })), !0;
    }
    return this.rv?.send({
      type: "reply",
      text: text
    }) ?? !1;
  }
  async isReplWaiting() {
    if (this.replPid <= 1 || this.dispatch.launch.mode === "exec") return !1;
    try {
      let {
        liveStatusOfJob: liveStatusOfJob
      } = await import("B:/~BUN/root/chunk-epbwnycc.js");
      return (await liveStatusOfJob(this.replPid, this.dispatch.short)) === "waiting";
    } catch (error) {
      return t(`[bg] ${this.dispatch.short}: live status unreadable (${k(error) ?? d(error)}), treating as waiting`), !0;
    }
  }
  sendAttacherCaps(caps) {
    return this.rv?.send({
      type: "attacher-caps",
      caps: caps
    }) ?? !1;
  }
  kill(e = "SIGTERM", r = "killed", detail_2) {
    if (this.phase.kind === "retired") return;
    if (this.killOutcome = r === "failed" ? "failed" : "killed", this.handoffKill = this.handoffKill || r === "handoff", detail_2) this.patch({
      detail: detail_2
    });
    if (this.transitionTo({
      kind: "retiring",
      reason: "reap"
    }), this.backoffTimer) clearTimeout(this.backoffTimer), this.backoffTimer = null;
    if (this.unverifiedSock) {
      Q2e(this.unverifiedSock, this.storageV5).finally(() => this.settle(this.killOutcome));
      return;
    }
    if (this.pty) try {
      this.pty.kill(e);
    } catch {} else if (this.record.pid && !this.pidRecycled()) try {
      process.kill(-this.record.pid, e);
    } catch {
      try {
        process.kill(this.record.pid, e);
      } catch {}
    }
    if (!this.pty) this.settle(this.killOutcome);
  }
  stop() {
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") this.settle(this.killOutcome);else if (this.phase.kind === "retiring" && this.phase.reason === "grace") this.settle("done");else if (this.phase.kind !== "retired") this.transitionTo({
      kind: "retiring",
      reason: "stop"
    });
    if (this.backoffTimer) clearTimeout(this.backoffTimer), this.backoffTimer = null;
    this.clearLiveness(), this.offData?.dispose(), this.offExit?.dispose(), this.execTracker?.dispose(), this.execTracker = void 0, this.pty?.dispose(), this.pty = void 0;
  }
  async doSpawn(e, r = !1) {
    if (this.attempt++, this.authRekeyFired = !1, this.pendingAuthRekey = void 0, this.workerReady = !1, this.firedInteractiveMarks = [], this.attempt > 1) this.liveTranscriptPath = null;
    this.resizeDeferred = !1, this.ringSpawnMark = this.ring.length, this.lastSpawnAt = Date.now(), this.lastExitExternalStop = !1;
    let dispatch = this.dispatch,
      h = io(dispatch.short);
    await $Le(dispatch.short, this.storageV5).catch(() => {});
    let detail_3 = Of();
    if (detail_3) {
      i("tengu_bg_launcher_worker_refused", {
        attempt: this.attempt
      }), m("agent_launcher", "worker_refused"), this.patch({
        state: "crashed",
        detail: detail_3
      });
      let T = this.dimNotice(detail_3);
      return this.pushRing(T), this.onStream.emit(T), this.settle("crashed");
    }
    let p = Ohn(dispatch) ? await Ae(dispatch.short, this.getAuthSnapshot?.()) : void 0,
      o = await we(dispatch.short, dispatch.launch.mode === "exec" ? {
        ptyAuth: this.socketAuth().ptyAuth
      } : this.socketAuth());
    try {
      await HOs(mt(OT(this.ptySockPath ?? LE(dispatch.short))));
    } catch (error) {
      if (this.credentials) await Promise.all([o ? this.credentials.discardSpentCredentialFile(o).catch(() => {}) : void 0, p ? this.credentials.discardSpentCredentialFile(p).catch(() => {}) : void 0]);else await Promise.all([o ? ce(o).catch(() => {}) : void 0, p ? ce(p).catch(() => {}) : void 0]);
      if (this.record.outcome) return;
      if (k(error) === kRr) {
        let detail_4 = `worker socket directory is not owned by this user \u2014 ${d(error)}`;
        this.patch({
          state: "crashed",
          detail: detail_4
        });
        let H = this.dimNotice(detail_4);
        return this.pushRing(H), this.onStream.emit(H), this.settle("crashed");
      }
      return this.scheduleRespawn(d(error));
    }
    await ce(OT(this.ptySockPath ?? LE(dispatch.short))).catch(() => {});
    let u = dispatch.launch.mode === "resume" ? dispatch.launch.sessionId : void 0,
      g = !1,
      f = !1,
      sessionId = dispatch.sessionId,
      A,
      {
        respawnFlags: respawnFlags,
        cwd: cwd
      } = dispatch,
      R = !1;
    if (this.attempt > 1) {
      let T = await Zr(h, this.storageV5);
      sessionId = T?.resumeSessionId ?? dispatch.sessionId, respawnFlags = T?.respawnFlags ?? dispatch.respawnFlags, cwd = T?.cwd ?? dispatch.cwd, R = T?.interactiveLineage === !0;
      let C = vC(nj(this.storageV5)),
        H = await gde(sessionId, cwd, T?.linkScanPath, void 0, C);
      if (g = H.hasMessages, g) A = H.path, this.liveTranscriptPath = H.path;
      let K = u !== void 0 && sDe(u);
      if (f = !g && u !== void 0 && !(await gde(K ? gt(u, ".jsonl") : u, cwd, K ? u : void 0, void 0, C)).hasMessages, !g) await cGe(H.path, C);
    }
    if (this.effectiveCwd = cwd, this.phase.kind === "retiring" || this.phase.kind === "retired" || this.record.outcome) {
      if (o) if (this.credentials) this.credentials.discardSpentCredentialFile(o).catch(() => {});else ce(o).catch(() => {});
      return;
    }
    if (f) return this.patch({
      state: "crashed",
      detail: `source session ${u} not found`
    }), this.settle("crashed");
    if (!this.spawnPty) return this.patch({
      state: "crashed",
      detail: "Bun.Terminal unavailable (running under Node?)"
    }), i("tengu_bg_pty_unavailable", {
      short: jR(this.dispatch.short)
    }), this.settle("crashed");
    let L = qe(dispatch, this.attempt, g, sessionId, A, respawnFlags);
    this.bootedViaResume = (dispatch.launch.mode === "prompt" || dispatch.launch.mode === "resume") && (this.attempt === 1 || !g && sessionId === dispatch.sessionId) ? dispatch.launch.restoresTranscript ?? L.includes("--resume") : L.includes("--resume");
    let env_2 = Xe(dispatch, h, p, this.rvSockPath ?? Onn(dispatch.short), this.socketAuth());
    if (this.attempt > 1 && g && !r) {
      if (env_2.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1", $e()) {
        if (env_2.CLAUDE_CODE_RESUME_PROMPT ??= At, R) env_2.CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS ??= String(wt);
      }
    }
    if (this.attempt > 1 && !g && sessionId !== dispatch.sessionId) env_2.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
    if (oKr(env_2, e), o) delete env_2.CLAUDE_BG_RV_AUTH, delete env_2.CLAUDE_BG_PTY_AUTH, env_2.CLAUDE_BG_SOCKET_TOKENS_PATH = o;
    if (JQ(env_2), Qe(env_2, dispatch), I() === "macos" && Dqr() && Et()) env_2.CLAUDE_PTY_HOST_NO_STABLE_PATH = "1";else delete env_2.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    delete env_2.CLAUDE_CODE_DISABLE_BG_STABLE_PATH;
    let cols_2 = this.ptyCols || (dispatch.cols ?? 200),
      rows_2 = this.ptyRows || (dispatch.rows ?? 50),
      D;
    try {
      let {
        cmd: cmd_2,
        prefixArgs: prefixArgs_2
      } = dispatch.launch.mode === "exec" ? {
        cmd: FA(dispatch.launch.cmd),
        prefixArgs: []
      } : Bc({
        pinToCurrentBinary: !0
      });
      D = this.spawnPty(cmd_2, [...prefixArgs_2, ...L], {
        cols: cols_2,
        rows: rows_2,
        cwd: cwd,
        env: env_2,
        ptySock: this.ptySockPath ?? LE(dispatch.short),
        short: dispatch.short,
        ptyAuth: this.ptyAuth
      });
    } catch (error) {
      let C = k(error),
        H = ff()[0];
      if (G(error)) {
        let K = await ft(cwd).then(() => !0, () => !1);
        if (this.record.outcome) return;
        if (!K) return this.settleCwdGone("cold", cwd);
        let detail_5 = H ? `launcher \`${H}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER, then run your command again` : dispatch.launch.mode === "exec" ? `${dispatch.launch.cmd}: command not found` : "daemon binary was deleted (upgrade in progress) \u2014 run your command again to use the new version";
        if (H) i("tengu_bg_launcher_worker_refused", {
          attempt: this.attempt
        }), m("agent_launcher", "worker_launcher_enoent");else i("tengu_bg_spawn_binary_gone", {
          short: jR(this.dispatch.short),
          attempt: this.attempt
        });
        this.patch({
          state: "crashed",
          detail: detail_5
        });
        let F = this.dimNotice(detail_5);
        return this.pushRing(F), this.onStream.emit(F), this.settle("crashed");
      }
      if (H && (C === "EACCES" || C === "EPERM")) {
        if (this.record.outcome) return;
        let detail_6 = `launcher \`${H}\` could not be executed (${C})`;
        i("tengu_bg_launcher_worker_refused", {
          attempt: this.attempt
        }), m("agent_launcher", C === "EACCES" ? "worker_launcher_eacces" : "worker_launcher_eperm"), this.patch({
          state: "crashed",
          detail: detail_6
        });
        let z = this.dimNotice(detail_6);
        return this.pushRing(z), this.onStream.emit(z), this.settle("crashed");
      }
      return this.scheduleRespawn(d(error));
    }
    if (dispatch.launch.mode === "exec") this.execTracker?.dispose(), this.execTracker = ke(h, this.storageV5), this.workerReady = !0;
    if (I() === "windows") Ee(Lfe(dispatch.short), String(D.pid)).catch(() => {});
    this.wirePty(D), this.rv?.close(), this.rv = void 0, this.lastRvHeartbeat = void 0, this.stalledLogged = !1, this.connectRv(), this.patch({
      pid: D.pid,
      attempt: this.attempt,
      state: this.attempt > 1 ? "resuming" : "running",
      detail: "",
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }), i("tengu_bg_worker_spawn", {
      short: jR(this.dispatch.short),
      attempt: this.attempt,
      source: c(this.dispatch.source),
      launch_mode: c(this.dispatch.launch.mode)
    }), ad(D.pid, {
      skipCache: !0
    }).then(T => {
      if (!T || this.record.pid !== D.pid || this.isDetached || this.record.outcome) return;
      this.procStart = T, this.patch({
        pid: D.pid
      });
    });
  }
  wirePty(e) {
    this.pty = e, this.transitionTo({
      kind: "running"
    }), this.decModes = SGt(), e.onResume?.(() => {
      this.rv?.send({
        type: "repaint"
      });
    }), e.onRepl?.((s, h) => {
      if (!this.record.pid || this.record.outcome || this.isDetached) return;
      this.replPid = s, this.replProcStart = h, this.onState.emit({
        pid: this.record.pid
      });
    }), this.offData = e.onData(s => {
      if (this.decModes.feed(s) && this.record.pid) this.onState.emit({
        pid: this.record.pid
      });
      this.execTracker?.feed(s), this.pushRing(s.includes($Z) ? s.replaceAll($Z, "") : s), this.onStream.emit(s);
    });
    let r = !1;
    this.offExit = e.onExit(({
      exitCode: exitCode_2,
      signal: signal_2,
      hostStderr: hostStderr_2
    }) => {
      if (r) return;
      r = !0, this.offData?.dispose(), this.execLastLine = this.execTracker?.lastLine, this.execTracker?.dispose(), this.execTracker = void 0, this.pty = void 0, this.onExit(exitCode_2, signal_2, hostStderr_2);
    });
  }
  dimNotice(e) {
    return Hdt(`\r
\x1B[2m[${e}]\x1B[0m\r
`);
  }
  pushRing(e) {
    if (this.ring.push(e), this.ringBytes += e.length, this.ringBytes > Inn * 1.25 && this.ring.length > 1) {
      let r = 0,
        s = 0;
      while (this.ringBytes - s > Inn && r < this.ring.length - 1) s += this.ring[r].length, r++;
      this.ring.splice(0, r), this.ringBytes -= s, this.ringSpawnMark = Math.max(0, this.ringSpawnMark - r);
    }
  }
  patch(e) {
    if (Object.assign(this.record, e), this.onState.emit(e), this.pendingAuthRekey !== void 0 && e.tempo !== void 0 && e.tempo !== "active") {
      let pendingAuthRekey = this.pendingAuthRekey;
      Zr(io(this.dispatch.short), this.storageV5).then(s => {
        if (this.pendingAuthRekey !== pendingAuthRekey) return;
        let h = Ze(s, pendingAuthRekey);
        if (h === "settled") {
          this.pendingAuthRekey = void 0, this.authRekeyFired = !1, t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${pendingAuthRekey}) dropped \u2014 worker settled; leaving to retireIfSettled`, {
            level: "warn"
          });
          return;
        }
        if (h !== null) return;
        t(`[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${pendingAuthRekey}) firing on tempo='${e.tempo}'`, {
          level: "warn"
        }), this.fireAuthRekey();
      });
    }
  }
  onExit(e, r, s) {
    if (this.isDetached) return;
    if (this.phase.kind === "retired") return;
    let procUptimeMs = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : void 0;
    if (Date.now() - this.lastCheckPidAt > Ke) this.hostWokeAt = Date.now();
    let n = this.hostWokeAt !== void 0 && Date.now() - this.hostWokeAt < bt,
      p = !n && procUptimeMs !== void 0 && procUptimeMs < Ge && e !== 0;
    if (p) this.fastCrashStreak++;else this.fastCrashStreak = 0;
    let o = this.fastCrashStreak >= 3,
      u = this.workerReady && procUptimeMs !== void 0 && procUptimeMs >= Rt;
    this.lastExitExternalStop = (r !== void 0 || kt.has(e ?? -1)) && !n;
    let g = this.workerReady ? void 0 : this.preInitErrorTail(),
      f = ff()[0],
      v = s ? su(zr(pn(s)), he) || void 0 : void 0,
      A = f && !this.workerReady && !g && v ? `(launch command: \`${f}\` \u2026): ${v}` : void 0,
      S = !!f && e === 0 && !this.workerReady && procUptimeMs !== void 0 && procUptimeMs < dXe,
      y = e !== 0 ? nzo(io(this.dispatch.short)) : void 0,
      R = y ? rzo(io(this.dispatch.short), y) : void 0,
      L = R ? su(zr(pn(R)), he) || void 0 : void 0,
      O = !g && L ? `: ${L}` : "",
      x = p && !!y && y === this.lastExitCause;
    this.lastExitCause = p ? y : void 0;
    let B = !this.workerReady && y === Qmn,
      D = g ? ` \u2014 ${g}` : A ? ` \u2014 ${A}` : y ? ` \u2014 ${y}` : "",
      T = this.effectiveCwd ?? this.dispatch.cwd,
      C = !1;
    if (y === "setcwd") try {
      C = !Be(T).isDirectory();
    } catch {
      C = !0;
    }
    let H = this.dispatch.launch.mode === "exec" && (r === "SIGINT" || r === "SIGQUIT"),
      K;
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") K = this.killOutcome;else if (this.phase.kind === "retiring" && this.phase.reason === "grace") K = "done";else if (this.phase.kind === "upgrading") K = void 0;else if (S) K = "crashed";else if (e === 0) K = "done";else if (this.dispatch.launch.mode === "exec") K = H ? "killed" : "crashed";else if (C || B || !this.workerReady && (this.attempt >= 2 || g || A) || o || x || !u && this.attempt >= He) K = "crashed";
    if (i("tengu_bg_worker_exit", {
      short: jR(this.dispatch.short),
      code: e ?? void 0,
      signal: pe(r),
      attempt: this.attempt,
      procUptimeMs: procUptimeMs,
      source: c(this.dispatch.source),
      launch_mode: c(this.dispatch.launch.mode),
      outcome: pe(K),
      exitCause: Sqo(y),
      worker_cli_version: zi(this.record.cliVersion),
      worker_stale: this.isVersionStale
    }), this.phase.kind === "retiring") return this.settle(this.phase.reason === "reap" ? this.killOutcome : "done");
    if (this.phase.kind === "upgrading") {
      this.transitionTo({
        kind: "spawning"
      }), this.attempt = 1, this.fastCrashStreak = 0, this.lastExitCause = void 0, this.patch({
        pid: 0,
        state: "starting",
        detail: "upgrading"
      }), this.procStart = void 0, this.buildBridgeReattachEnvFromState().then(F => this.doSpawn(F, !0)).catch(l);
      return;
    }
    if (S) {
      let detail_7 = `the launcher exited before Claude Code started \u2014 \`${f}\` must exec, not daemonize${A ? ` \u2014 ${A}` : ""}`;
      return i("tengu_bg_launcher_fork_and_exit", {
        attempt: this.attempt
      }), m("agent_launcher", "worker_fork_and_exit"), this.patch({
        state: "crashed",
        detail: detail_7
      }), this.settle("crashed");
    }
    if (e === 0) {
      if (this.dispatch.launch.mode === "exec") {
        if (!this.execLastLine && this.ringBytes > 0) i("tengu_bg_exec_no_lastline", {
          ring_bytes: this.ringBytes
        });
        this.patch({
          detail: this.execLastLine || "(no output)"
        });
      }
      return this.settle("done");
    }
    let z = r ? `${r} (${e})` : `exit ${e}`;
    if (this.dispatch.launch.mode === "exec") {
      let execLastLine = this.execLastLine;
      return this.patch({
        state: H ? "stopped" : "crashed",
        detail: execLastLine ? `${z} \u2014 ${execLastLine}` : `${z}${D}`
      }), this.settle(H ? "killed" : "crashed");
    }
    if (B) {
      this.sessionIdTakenLatch = !0, i("tengu_bg_session_id_taken", {
        short: jR(this.dispatch.short),
        attempt: this.attempt,
        via: c(this.via),
        launch_mode: c(this.dispatch.launch.mode)
      }), this.patch({
        state: "crashed",
        detail: detail_8
      });
      let F = this.dimNotice(detail_8);
      return this.pushRing(F), this.onStream.emit(F), this.settle("crashed");
    }
    if (!this.workerReady && y?.startsWith("spare_postclaim:")) try {
      if (!Be(this.dispatch.cwd).isDirectory()) return this.settleCwdGone("spare");
    } catch {
      return this.settleCwdGone("spare");
    }
    if (C) return this.settleCwdGone("boot", T);
    if (!this.workerReady && (this.attempt >= 2 || g || A)) {
      let F = !r && Hye() ? " \u2014 possibly low memory \u2014 free some up and retry" : "";
      return this.patch({
        state: "crashed",
        detail: `${z} before init${D || F}`
      }), this.settle("crashed");
    }
    if (o || x) return this.patch({
      state: "crashed",
      detail: x ? `${z} \xD7${this.attempt}${D}${O}` : `${z} within ${Ge / 1000}s of spawn \xD7${this.fastCrashStreak}${D}${O}`
    }), this.settle("crashed");
    if (u) this.attempt = 1;
    this.scheduleRespawn(`${z}${D}${O}`);
  }
  async doSpawnUnlessSettledOnDisk() {
    let e = $e() ? await Zr(io(this.dispatch.short), this.storageV5).catch(() => {
      return;
    }) : void 0;
    if (this.record.outcome || this.phase.kind === "retiring" || this.phase.kind === "retired") return;
    if (e && Ta(e) && !e.queuedPrompt) {
      i("tengu_bg_respawn_suppressed", {
        short: jR(this.dispatch.short),
        reason: b("settled_on_disk")
      });
      let r = h_(e.state);
      return this.settle(r === "success" ? "done" : r === "failure" ? "failed" : "killed");
    }
    if (e?.interactiveLineage && this.lastExitExternalStop) return i("tengu_bg_respawn_suppressed", {
      short: jR(this.dispatch.short),
      reason: b("no_task_contract")
    }), this.patch({
      state: "stopped",
      detail: "stopped by an external signal"
    }), this.settle("killed");
    return this.doSpawn();
  }
  settleCwdGone(e, r = this.dispatch.cwd) {
    let detail_9 = uWr(r);
    i("tengu_bg_spawn_cwd_gone", {
      short: jR(this.dispatch.short),
      attempt: this.attempt,
      via: c(e)
    }), this.patch({
      state: "crashed",
      detail: detail_9
    });
    let h = this.dimNotice(`${detail_9} \u2014 this job cannot be respawned`);
    this.pushRing(h), this.onStream.emit(h), this.settle("crashed");
  }
  async buildBridgeReattachEnvFromState() {
    let e = await Zr(io(this.dispatch.short), this.storageV5).catch(() => null);
    if (!e) return;
    return rie(e.bridgeSessionId, e.bridgeSessionSeq, e.bridgeOutboundOnly, e.bridgeSessionGroupingId, {
      ownerAccountUuid: e.bridgeOwnerAccountUuid,
      ownerOrganizationUuid: e.bridgeOwnerOrganizationUuid,
      noHistoryBackfill: e.bridgeNoHistoryBackfill
    });
  }
  scheduleRespawn(detail_10) {
    if (this.attempt >= He) return i("tengu_bg_respawn_exhausted", {
      short: jR(this.dispatch.short),
      attempts: this.attempt
    }), this.patch({
      state: "crashed",
      detail: detail_10
    }), this.settle("crashed");
    if (this.phase.kind === "running") this.transitionTo({
      kind: "spawning"
    });
    this.patch({
      pid: 0,
      state: "crashed",
      detail: `${detail_10}; respawning`
    }), this.procStart = void 0;
    let r = this.dimNotice(`worker crashed (${detail_10}) \u2014 respawning\u2026`);
    this.pushRing(r), this.onStream.emit(r), this.backoffTimer = setTimeout(() => {
      if (this.backoffTimer = null, this.phase.kind !== "retiring" && this.phase.kind !== "retired") this.doSpawnUnlessSettledOnDisk().catch(l);
    }, St), this.backoffTimer.unref();
  }
  settle(outcome) {
    if (this.record.outcome) return;
    i("tengu_bg_settle", {
      short: jR(this.dispatch.short),
      outcome: c(outcome),
      uptimeMs: Date.now() - this.record.startedAt,
      attempt: this.attempt,
      worker_cli_version: zi(this.record.cliVersion),
      worker_stale: this.isVersionStale
    }), this.transitionTo({
      kind: "retired",
      outcome: outcome
    }), this.clearLiveness(), this.patch({
      outcome: outcome,
      settledAt: Date.now(),
      tempo: "idle"
    }), this.onSettle.emit(outcome);
  }
  connectRv() {
    if (this.rv || this.isDetached || this.record.outcome) return;
    if (this.dispatch.launch.mode === "exec") {
      this.startPidPoll();
      return;
    }
    this.rv = Ue(this.rvSockPath ?? Onn(this.dispatch.short), e => {
      if (e.type === "heartbeat") this.lastRvHeartbeat = Date.now();else if (e.type === "auth-rejected" || e.type === "reply-rejected") this.rvRejected = !0, i(e.type === "auth-rejected" ? "tengu_bg_rv_auth_mismatch" : "tengu_bg_rv_reply_rejected", {}), this.rekeyForAuthMismatch(e.type === "auth-rejected" ? "rv-auth-rejected" : "rv-reply-rejected");else if (e.type === "done") this.settle(e.outcome);else if (e.type === "state") this.patch(e.patch);else if (e.type === "detach-request") {
        let r = nie(e.msg),
          s = this.attachers.get(this.lastInputAttacher);
        if (!e.broadcast && s) s.deliver(r);else if (this.attachers.size > 0) for (let h of this.attachers.values()) h.deliver(r);else this.onStream.emit(r);
      } else if (e.type === "repaint-done") this.onRepaintDone.emit();else if (e.type === "interactive-mark") {
        let r = kgo(e);
        if (!r) {
          t(`[bg ${this.record.short}] dropped malformed rv interactive-mark frame`, {
            level: "warn"
          }), i("tengu_bg_imark_malformed", {});
          return;
        }
        if (this.firedInteractiveMarks.length < 2 && !this.firedInteractiveMarks.some(item => item.kind === r.kind)) {
          if (this.firedInteractiveMarks.push(r), this.record.pid) this.onState.emit({
            pid: this.record.pid
          });
        }
        for (let s of this.attachers.values()) if (s.caps?.imark === !0) s.deliver(Pvr({
          ...r,
          nonce: s.imarkNonce
        }));
      }
    }, () => void this.checkPid(), () => {
      if (this.workerReady = !0, this.rvRejected = !1, this.resizeDeferred) this.resizeDeferred = !1, this.resize(this.ptyCols, this.ptyRows);
      if (this.attachers.size > 0) {
        let e = [...this.attachers.values()].at(-1);
        this.sendAttacherCaps(e.caps ?? null);
      } else this.sendAttacherCaps(null);
    }, this.rvAuth), this.startPidPoll();
  }
  startPidPoll() {
    if (this.pidPoll) return;
    this.lastCheckPidAt = Date.now(), this.pidPoll = setInterval(() => void this.checkPid(!0), ve), this.pidPoll.unref();
  }
  pidRecycled() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = YWe(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async pidRecycledAsync() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = await ad(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async failIfHostExited(e) {
    let pid_2 = this.record.pid;
    if (!pid_2 || this.record.outcome || this.isKilling || !this.pty) return !1;
    let s = await KFr(pid_2);
    if (!Bne(s)) return !1;
    if (this.record.outcome || this.isKilling || !this.pty || this.record.pid !== pid_2) return !1;
    return t(`bg: ${this.dispatch.short} pty host pid=${pid_2} has exited but is unreaped (state ${s}) via=${e} \u2014 reaping it and marking the session failed`, {
      level: "warn"
    }), i("tengu_bg_ptyhost_zombie", {
      short: jR(this.dispatch.short),
      via: c(e),
      state: c(s === "Z" ? "Z" : "X"),
      uptimeMs: Date.now() - this.record.startedAt,
      attachers: this.attachers.size
    }), this.kill("SIGKILL", "failed", this.dispatch.launch.mode === "exec" ? DIt : tUe), !0;
  }
  pidPollTick = 0;
  async checkPid(e = !1) {
    let r = Date.now() - this.lastCheckPidAt;
    this.lastCheckPidAt = Date.now();
    let s = r > Ke;
    if (s) this.hostWokeAt = Date.now();
    if (this.record.outcome || !this.record.pid) return;
    if (s && this.lastRvHeartbeat !== void 0) this.lastRvHeartbeat = Date.now();
    if (!this.pty) try {
      process.kill(this.record.pid, 0);
    } catch (error) {
      let p = k(error);
      if (p === "ESRCH" || p === "EPERM") this.logVanished(!1, e), this.settle(this.isKilling ? "killed" : "crashed");
      return;
    }
    let lastRvHeartbeat = this.lastRvHeartbeat;
    if (!s && !this.stalledLogged && lastRvHeartbeat !== void 0 && Date.now() - lastRvHeartbeat > Tt) {
      let n = await Zr(io(this.dispatch.short), this.storageV5);
      if (!this.stalledLogged && (n?.tempo ?? this.record.tempo) === "active") this.stalledLogged = !0, i("tengu_bg_worker_stalled", {
        short: jR(this.dispatch.short),
        sinceMs: Date.now() - lastRvHeartbeat
      });
    }
    if (this.pty) {
      await this.failIfHostExited("poll");
      return;
    }
    if (e && this.pidPollTick++ % 12 !== 0) return;
    if (await this.pidRecycledAsync()) {
      if (this.record.outcome || this.pty) return;
      this.logVanished(!0, e), this.settle(this.isKilling ? "killed" : "crashed");
    }
  }
  logVanished(recycled, fromPoll) {
    if (this.isKilling) return;
    i("tengu_bg_worker_vanished", {
      short: jR(this.dispatch.short),
      recycled: recycled,
      fromPoll: fromPoll,
      uptimeMs: Date.now() - this.record.startedAt,
      worker_cli_version: zi(this.record.cliVersion),
      worker_stale: this.isVersionStale
    });
  }
  clearLiveness() {
    if (this.pidPoll) clearInterval(this.pidPoll), this.pidPoll = null;
    this.rv?.close(), this.rv = void 0, this.lastRvHeartbeat = void 0, this.stalledLogged = !1;
  }
}
async function cZs(e) {
  let r = e[0];
  if (!r) process.stderr.write(`[bg-spare] missing claim sock path
`), process.exit(2);
  let s = await Ut(),
    h = import("B:/~BUN/root/chunk-3nejkfsm.js");
  import("B:/~BUN/root/chunk-929y4z83.js").catch(() => {}), import("B:/~BUN/root/chunk-0t5bdb7r.js").catch(() => {});
  let n = () => {
      try {
        Nt(r);
      } catch {}
    },
    p = () => {
      n(), process.exit(0);
    },
    o = A => {
      n(), process.stderr.write(`[bg-spare] uncaughtException: ${d(A)}
`), V_("spare_uncaught"), process.exit(1);
    },
    ppid = process.ppid,
    g = setInterval((A, S) => {
      if (process.ppid !== A) S(), process.exit(0);
    }, 2000, ppid, n);
  g.unref();
  for (let A of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(A, p);
  process.on("uncaughtException", o);
  let f = () => {
      clearInterval(g);
      for (let A of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(A, p);
      process.off("uncaughtException", o);
    },
    v;
  try {
    v = await Ihn(r, void 0, s);
  } catch (error) {
    n(), process.stderr.write(`[bg-spare] claim recv failed: ${d(error)}
`), V_("spare_claim_recv"), process.exit(1);
  }
  f();
  try {
    await h, await Mhn(v, h);
  } catch (error) {
    let S = Fr(error) ?? Cm(error) ?? "Error";
    throw V_("spare_postclaim:" + S, v.env.CLAUDE_JOB_DIR), process.stderr.write(`[bg-spare] post-claim init failed: ${d(error)}
`), error;
  }
}
async function Ut() {
  let CLAUDE_BG_CLAIM_AUTH = a.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let CLAUDE_BG_SOCKET_TOKENS_PATH = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !CLAUDE_BG_SOCKET_TOKENS_PATH) return CLAUDE_BG_CLAIM_AUTH;
  let s = await Cyt(CLAUDE_BG_SOCKET_TOKENS_PATH);
  if (await X(CLAUDE_BG_SOCKET_TOKENS_PATH).catch(() => {}), !s?.claimAuth) t("[bg-spare] tokens file unreadable; claim gate degraded", {
    level: "warn"
  });
  return s?.claimAuth ?? CLAUDE_BG_CLAIM_AUTH;
}
var Bt = 2000;
async function mWr(e) {
  if (I() === "windows") return null;
  if (Of()) return null;
  if (!(await BN())) {
    if (!e.launcherNotRunnableEpisode.logged) e.launcherNotRunnableEpisode.logged = !0, m("agent_launcher", "spare_launcher_not_runnable"), t(`bg spare: launcher \`${ff()[0]}\` was deleted or is not executable \u2014 not minting a warm spare until it is restored`, {
      level: "warn"
    });
    return null;
  }
  return e.launcherNotRunnableEpisode.logged = !1, po("daemon_bg_spare_refill", async () => {
    let r = Re(4).toString("hex"),
      ptySock = UOs(r),
      claimSock = BOs(r),
      ptyAuth = Re(16).toString("hex"),
      claimAuth = Re(16).toString("hex");
    await Mt(Bie(), {
      recursive: !0,
      mode: 448
    }).catch(() => {});
    let tokensPath = await we(`spare-${r}`, {
      ptyAuth: ptyAuth,
      claimAuth: claimAuth
    });
    await X(ptySock).catch(() => {}), await X(claimSock).catch(() => {});
    let {
        cmd: cmd_3,
        prefixArgs: prefixArgs_3
      } = Bc({
        pinToCurrentBinary: !0
      }),
      f = await xt(OT(ptySock), "w").catch(() => null),
      v = FYs("agent"),
      A = v?.(),
      S;
    try {
      S = Bun.spawn([cmd_3, ...prefixArgs_3, "--bg-pty-host", ptySock, "200", "50", "--", cmd_3, ...prefixArgs_3, "--bg-spare", claimSock], {
        cwd: Bie(),
        env: Ht(tokensPath ? {
          tokensPath: tokensPath
        } : {
          ptyAuth: ptyAuth,
          claimAuth: claimAuth
        }),
        stdio: ["ignore", "ignore", f?.fd ?? "ignore"],
        detached: !0,
        windowsHide: !0,
        ...vd("agent"),
        argv0: "claude bg-pty-host"
      }), S.unref();
    } catch (error) {
      if (tokensPath) if (W() && e.credentials !== void 0) e.credentials.discardSpentCredentialFile(tokensPath).catch(() => {});else X(tokensPath).catch(() => {});
      throw error;
    } finally {
      await f?.close().catch(() => {});
    }
    let y = {
        hostPid: S.pid,
        ptySock: ptySock,
        claimSock: claimSock,
        ptyAuth: ptyAuth,
        claimAuth: claimAuth,
        startedAt: Date.now(),
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.303",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-18T20:20:57Z",
          GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION,
        claimed: !1,
        dispose() {
          R = !0;
          try {
            S.kill("SIGTERM");
          } catch {}
        }
      },
      R = !1;
    return S.exited.then(async L => {
      let O = Date.now(),
        x = v?.(),
        B = L !== 0 && A !== void 0 && x !== void 0 && x > A;
      if (X(ptySock).catch(() => {}), X(claimSock).catch(() => {}), tokensPath) if (W() && e.credentials !== void 0) e.credentials.discardSpentCredentialFile(tokensPath).catch(() => {});else X(tokensPath).catch(() => {});
      let D = ((await al(OT(ptySock), 1048576)) ?? "").slice(0, 2000).trim();
      if (D.length > 0) t(`bg spare host pid=${S.pid} exit stderr:
${D}`, {
        level: "warn"
      });
      X(OT(ptySock)).catch(() => {}), X(cD(ptySock)).catch(() => {});
      let T = O - y.startedAt,
        C = !R && !y.claimed && !B && ff().length > 0 && (T < Bt || L === 0 && T < dXe);
      if (B && !y.claimed && !R) t(`bg spare: host pid=${S.pid} died ${T}ms after spawn while the tool memory cgroup OOM-killed a member \u2014 not attributed to the launcher`, {
        level: "warn"
      });
      if (C) zEe([-S.pid]), m("agent_launcher", "spare_fork_or_crash"), t(`bg spare: launcher \`${ff()[0]}\` exited ${T}ms after spawn \u2014 it either daemonized instead of calling \`exec\` (launcher contract #1) or crashed at startup. Warm spares are disabled until the background service restarts; sessions still start, without the warm-attach shortcut.`, {
        level: "warn"
      });
      e.onExit(C);
    }), e.log(`bg spare spawned host pid=${S.pid}`), y;
  });
}
function Ht(e) {
  let r = Vv(() => ({
    ...process.env
  }));
  te(r);
  for (let s of DCe) delete r[s];
  if (JQ(r), _vt(r), p8(r), xBt(r)) {
    let s = HJ(r);
    if (s) te(r, [s]), delete r[s];
    for (let h of FB) delete r[h];
    if (Fe(r.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) ABt(r);
  } else if (VQe.some(item => re(r, item))) delete r.ANTHROPIC_AUTH_TOKEN;
  for (let s of le) delete r[s];
  for (let s of Object.keys(r)) if (S8n.some(item => s.startsWith(item))) delete r[s];
  if (I() === "macos") delete r.CLAUDE_CODE_OAUTH_TOKEN;
  return Object.assign(r, {
    CLAUDE_CODE_SESSION_KIND: "bg",
    CLAUDE_BG_BACKEND: "daemon",
    FORCE_COLOR: "3",
    COLORTERM: "truecolor",
    BROWSER: "true",
    ...("tokensPath" in e ? {
      CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath
    } : {
      CLAUDE_BG_PTY_AUTH: e.ptyAuth,
      CLAUDE_BG_CLAIM_AUTH: e.claimAuth
    })
  }), r;
}
function gWr(e, r, spawnPty, getAuthSnapshot, storageV5, credentials) {
  r.claimed = !0;
  let o = Wde.claim(e, {
    pid: r.hostPid,
    ptySockPath: r.ptySock,
    spawnPty: spawnPty,
    getAuthSnapshot: getAuthSnapshot,
    ptyAuth: r.ptyAuth,
    storageV5: storageV5,
    credentials: credentials
  });
  return Ae(e.short, Ohn(e) ? getAuthSnapshot?.() : void 0).then(u => $t(r.claimSock, Ft(e, u, o.socketAuth(), r.claimAuth))).catch(u => {
    i("tengu_bg_sendclaim_failed", {
      short: jR(e.short),
      errno: Fr(u),
      ..._p(u)
    }), t(`[bg-spare] send-claim failed: ${d(u)}`, {
      level: "warn"
    });
    let g = be(r.ptySock);
    g.on("error", () => {}), g.once("connect", () => {
      g.write(bH({
        t: "kill",
        sig: "SIGTERM"
      })), g.end();
    });
  }), o;
}
function Ft(e, r, s, auth_2) {
  let {
    env: env_3,
    argv: argv_2
  } = Wde.buildClaimFrame(e, r, s);
  return {
    cwd: e.cwd,
    env: env_3,
    argv: argv_2,
    sessionId: e.sessionId,
    auth: auth_2
  };
}
var rt = [50, 100, 150, 200, 250, 300, 400, 500, 500, 500];
async function $t(e, r) {
  let s = Date.now(),
    h = 5000;
  for (let n = 0;; n++) {
    if (Date.now() - s > 5000) throw Error("send-claim timeout");
    try {
      await Gt(e, r);
      return;
    } catch (error) {
      let o = k(error);
      if (!(o === "ENOENT" || o === "ECONNREFUSED") || n >= rt.length) throw error;
      await Y(rt[n] ?? 500);
    }
  }
}
function Gt(e, r) {
  return new Promise((s, h) => {
    let n = be(e);
    n.once("error", h), n.once("connect", () => {
      n.end(_(r) + `
`, () => s());
    });
  });
}
async function hWr(e, r) {
  if (I() === "windows") return;
  let s = new Set();
  for (let p of e.values()) {
    let ptySock_2 = p.rosterEntry().ptySock;
    if (ptySock_2) s.add(ptySock_2);
  }
  let h = await Vt(Bie()).catch(() => []),
    n = 0;
  for (let p of h) {
    if (!p.endsWith(".pty.sock")) continue;
    let o = ue(Bie(), p);
    if (s.has(o)) continue;
    n++;
    let u = be(o);
    u.on("error", () => {
      X(o).catch(() => {});
    }), u.once("connect", () => {
      u.resume(), u.write(bH({
        t: "kill",
        sig: "SIGTERM"
      })), u.end(), setTimeout(g => g.destroy(), 2000, u).unref();
    });
  }
  for (let p of h) {
    let o = [".err", ".late", ".err.read"].find(item => p.endsWith(`.pty.sock${item}`));
    if (o) {
      let u = p.slice(0, -o.length);
      if (!h.includes(u)) X(ue(Bie(), p)).catch(() => {});
    }
    if (p.endsWith(".claim.sock")) {
      let u = ue(Bie(), `${p.slice(0, -11)}.pty.sock`);
      if (!s.has(u)) X(ue(Bie(), p)).catch(() => {});
    }
  }
  if (n) r(`bg orphan-spare reap: ${n}`);
}
export { uWr, pWr, fWr, i2e, Ohn, Wde, cZs, mWr, gWr, hWr };