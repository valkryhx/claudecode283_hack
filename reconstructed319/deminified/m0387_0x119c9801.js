// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { zn, ZU } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Uet } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { createHash as _, randomBytes as g } from "crypto";
import { lstatSync as I, mkdirSync as A, readFileSync as L, rmSync as j, writeFileSync as V } from "fs";
import { chmod as l, lstat as f, mkdir as d, readdir as p, readFile as U, rm as b, utimes as W } from "fs/promises";
import { connect as z } from "net";
import { basename as X, dirname as N, join as r, resolve as H } from "path";
import { readFile as h } from "fs/promises";
var m = 65534;
async function T() {
  return;
}
function S(e) {
  let t = [];
  for (let n of e.split(`
`)) {
    if (n.trim() === "") continue;
    let s = n.trim().split(/\s+/),
      innerStart = Number(s[0]),
      hostStart = Number(s[1]),
      count = Number(s[2]);
    if (s.length !== 3 || !Number.isSafeInteger(innerStart) || innerStart < 0 || !Number.isSafeInteger(hostStart) || hostStart < 0 || !Number.isSafeInteger(count) || count <= 0) return;
    t.push({
      innerStart: innerStart,
      hostStart: hostStart,
      count: count
    });
  }
  return t;
}
function E(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function C() {
  try {
    return v(await h("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function v(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return;
  let n = Number(t);
  return Number.isSafeInteger(n) ? n : void 0;
}
async function xHi() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e;
}
function Rfo() {
  return Uet.uidsCollapse ??= M(ie()), Uet.uidsCollapse;
}
function M(e) {
  return !1;
}
function u(e) {
  return e === void 0 ? r(Ue(), "daemon") : r(e, "daemon");
}
function J() {
  return _("sha256").update(H(Ue())).digest("hex").slice(0, 8);
}
function zze() {
  let e = process.getuid?.() ?? 0,
    t = i.TERMUX_VERSION && i.PREFIX ? r(i.PREFIX, "tmp") : "/tmp";
  return r(t, `cc-daemon-${e}`, J());
}
var B = /^[a-f0-9]{16}$/;
function b_s(e) {
  return r(u(e), "pipe.key");
}
var Y = po(() => {
  let e = b_s();
  for (let t = 0; t < 8; t++) {
    let n;
    try {
      let o = I(e);
      if (!o.isFile() || o.size > 4096) {
        try {
          j(e, {
            recursive: !0,
            force: !0
          });
        } catch {}
        n = "invalid";
      } else n = L(e, "utf8").trim();
    } catch (error) {
      if (!K(error)) throw error;
    }
    if (n !== void 0) {
      if (B.test(n)) return n;
      if (n === "" && t < 3) continue;
      let o = g(8).toString("hex");
      return ZU(e, o, 384), o;
    }
    let s = g(8).toString("hex");
    A(u(), {
      recursive: !0,
      mode: 448
    });
    try {
      return V(e, s, {
        flag: "wx",
        mode: 384
      }), s;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  }
  throw Error("daemon pipe.key is not a valid nonce");
}, () => Ue());
function w(e) {
  return `\\\\.\\pipe\\cc-daemon-${Y()}-${e}`;
}
function yA(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function dZt(e) {
  if (e instanceof Error) {
    if (e.message = yA(e.message), typeof e.stack === "string") e.stack = yA(e.stack);
  }
  return e;
}
function Xwr(e) {
  return r(u(e), "control.key");
}
async function PHi() {
  let e = Xwr();
  try {
    let n = await f(e);
    if (n.isFile() && n.size <= 4096) {
      let s = (await U(e, "utf8")).trim();
      if (s) return s;
    } else await b(e, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  } catch (error) {
    if (!K(error)) throw error;
  }
  let t = g(16).toString("hex");
  return await d(u(), {
    recursive: !0,
    mode: 448
  }), await zn(e, t, 384), t;
}
async function Gze() {
  try {
    let e = await f(Xwr());
    if (!e.isFile() || e.size > 4096) return;
    return (await U(Xwr(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function OHi() {
  let e = u();
  if (x() === "windows") {
    await d(e, {
      recursive: !0
    }), await l(e, 448).catch(() => {});
    return;
  }
  await d(e, {
    recursive: !0,
    mode: 448
  }), y();
  let t = process.getuid?.(),
    n = await f(e);
  if (t !== void 0 && n.uid !== t) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await l(e, 448);
}
async function P0n() {
  if (x() === "windows") return;
  let e = zze();
  await d(e, {
    recursive: !0,
    mode: 448
  });
  let date = new Date();
  await W(e, date, date).catch(() => {}), await P([N(e), e]);
}
var code = "ENOTOWNED";
async function P(e) {
  let t = process.getuid?.();
  y();
  for (let n of e) {
    let s = await f(n);
    if (t !== void 0 && s.uid !== t) throw Object.assign(Error(`refusing to bind: ${n} is owned by uid ${s.uid}`), {
      code: code
    });
    if ((s.mode & 511) !== 448) await l(n, 448);
  }
}
var S_s = "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function y() {
  if (Rfo()) throw Object.assign(Error(S_s), {
    code: code
  });
}
async function IHi(e) {
  if (x() === "windows") {
    await d(e, {
      recursive: !0
    }).catch(() => {});
    return;
  }
  await P0n();
  let t = [D0t(), xfo()];
  for (let n of t) await d(n, {
    recursive: !0,
    mode: 448
  });
  if (!t.includes(e)) {
    if (await d(e, {
      recursive: !0,
      mode: 448
    }).then(() => !0, () => !1)) t.push(e);
  }
  await P(t);
}
function MHi() {
  if (x() === "windows") return;
  let e = zze(),
    t = N(e),
    n = X(e);
  p(t, {
    withFileTypes: !0
  }).then(async s => {
    for (let o of s) {
      if (!o.isDirectory() || o.name === n) continue;
      let a = r(t, o.name);
      if (!(await q(r(a, "control.sock")))) continue;
      let c = await f(a).catch(() => null);
      if (!c || Date.now() - c.mtimeMs < 1e4) continue;
      let O = await p(r(a, "rv")).catch(() => []),
        D = await p(r(a, "pty")).catch(() => []),
        R = await p(r(a, "spare")).catch(() => []);
      if (O.length || D.length || R.length) continue;
      await b(a, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }).catch(() => {});
}
function w_s(e) {
  return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK";
}
function q(e) {
  let t,
    promise = new Promise(o => {
      t = o;
    }),
    s = z(e);
  return s.setTimeout(1000, () => {
    s.destroy(), t(!1);
  }), s.on("error", o => {
    t(w_s(k(o)));
  }), s.once("connect", () => {
    s.end(`{"op":"ping"}
`), t(!1);
  }), promise;
}
function eCe(e) {
  return r(u(e), "dispatch");
}
function k_s() {
  return r(u(), "dispatch", "rejected");
}
function tX(e) {
  return r(u(e), "roster.json");
}
var Jwr = "attach-journal";
function tCe() {
  return r(u(), Jwr);
}
function xfo() {
  return r(zze(), "rv");
}
function O0t(e) {
  return r(u(e), "auth");
}
function I0t(e) {
  return r(O0t(), `${e}.json`);
}
function O0n() {
  return r(u(), "host-managed");
}
function rLe(e) {
  return r(O0n(), e);
}
function v_s() {
  return r(u(), "gateway-routed");
}
function Upt(e) {
  return r(v_s(), e);
}
function M0t(e) {
  return r(O0t(), `${e}.tokens.json`);
}
function I0n(e) {
  if (x() === "windows") return w(`rv-${e}`);
  return r(xfo(), `${e}.sock`);
}
function D0t() {
  return r(zze(), "pty");
}
function _A(e) {
  if (x() === "windows") return w(`pty-${e}`);
  return r(D0t(), `${e}.sock`);
}
function __e() {
  return r(zze(), "spare");
}
function DHi(e) {
  return r(__e(), `${e}.pty.sock`);
}
function LHi(e) {
  return r(__e(), `${e}.claim.sock`);
}
function Bpt() {
  return r(u(), "pty-pids");
}
function nCe(e) {
  return r(Bpt(), `${e}.pid`);
}
function Mx(e) {
  return F(e, "err");
}
function X$(e) {
  return F(e, "late");
}
function F(e, t) {
  if (x() === "windows") return r(Bpt(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}
function Koe(e) {
  if (x() === "windows") return r(Bpt(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function nue() {
  if (x() === "windows") return w("control");
  return y(), r(zze(), "control.sock");
}
export { xHi, Rfo, zze, b_s, yA, dZt, Xwr, PHi, Gze, OHi, P0n, code as Afo, S_s, IHi, MHi, w_s, eCe, k_s, tX, Jwr, tCe, xfo, O0t, I0t, O0n, rLe, v_s, Upt, M0t, I0n, D0t, _A, __e, DHi, LHi, Bpt, nCe, Mx, X$, Koe, nue };