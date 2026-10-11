// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { lstat as d, readdir as C, readlink as y, realpath as w, rmdir as P, unlink as E } from "fs/promises";
import { basename as b, dirname as m, isAbsolute as T, join as k, normalize as g, sep as F } from "path";
function Am(n) {
  return n.toLowerCase().replace(/\u0131/g, "i").replace(/\u017F/g, "s");
}
function Qzn(n) {
  let e = "";
  for (let o of n) e += o.toLowerCase();
  return Am(e).replace(/\u03C2/g, "\u03C3");
}
function Zzn(n) {
  let e = O();
  return e === "windows" || e === "macos" ? Am(n) : n;
}
function jAo(n, e) {
  let o = null,
    s = 0,
    r = [];
  for (let a of n.split("\x00\x00")) {
    let u = a.split("\x00"),
      c = u.find(item => item.startsWith("worktree "));
    if (c === void 0) continue;
    let f = c.slice(9);
    if (!_ln(f)) return null;
    let h = g(f);
    if (r.push(lct(h)), u.includes(`branch refs/heads/${e}`)) s++, o ??= h;
  }
  if (o === null || s !== 1) return null;
  let i = lct(o),
    l = 0;
  for (let a of r) if (a === i) l++;
  return l === 1 ? o : null;
}
function Wf(n) {
  let e = n.replace(O() === "windows" ? /[\\/]+$/ : /\/+$/, "");
  return e === "" ? n : e;
}
function lct(n) {
  let e = Wf(n);
  return Zzn(O() === "macos" ? e.normalize("NFC") : e);
}
function WAo(n, e) {
  let o = p(n);
  return e.some(item => p(g(item)) === o);
}
function cct(n, e) {
  let o = lct(n);
  return e.find(item => lct(g(item)) === o) ?? null;
}
function p(n) {
  let e = Wf(n);
  return O() === "macos" ? e.normalize("NFC") : e;
}
var z = /\p{Cc}/u;
function _ln(n) {
  if (z.test(n) || !T(n)) return !1;
  return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n);
}
function w0r(n) {
  let e = new Set();
  for (let o of n.split("\x00\x00")) {
    let s = o.split("\x00").find(item => item.startsWith("worktree "));
    if (s === void 0) continue;
    let r = s.slice(9);
    if (!_ln(r)) return !1;
    let i = g(r),
      l = Wf(O() === "macos" ? i.normalize("NFC") : i);
    if (e.has(l)) return !1;
    e.add(l);
  }
  return !0;
}
function bln(n, e) {
  if (!w0r(n)) return null;
  let o = (r, i) => O() === "macos" ? r.normalize("NFC") === i.normalize("NFC") : r === i,
    s = null;
  for (let r of n.split("\x00\x00")) {
    let i = r.split("\x00").find(item => item.startsWith("worktree "));
    if (i === void 0) continue;
    let l = g(i.slice(9));
    if (s === null && e.some(item => o(Wf(l), Wf(g(item))))) s = l;
  }
  return s;
}
async function eD(n, e) {
  let o = [];
  for (let i = Wf(n); m(i) !== i && i !== e; i = m(i)) o.push(i);
  if (o.length === 0) return "unknown";
  let s = O() === "windows",
    r = null;
  for (let i of o.reverse()) {
    let l = Wf(i),
      a = await y(l).then(() => "link", u => {
        let c = v(u);
        return c === "EINVAL" ? "clear" : c === "ENOENT" || c === "ENOTDIR" ? "missing" : "unknown";
      });
    if (a === "clear") {
      if (s) {
        let u = await d(l).catch(() => null);
        if (u === null || !u.isDirectory()) return "unknown";
        let c = r ?? (await w(m(l)).catch(() => null)),
          f = await w(l).catch(() => null);
        if (c === null || f === null || Qzn(Wf(f)) !== Qzn(k(Wf(c), b(l)))) return "unknown";
        r = f;
      }
      continue;
    }
    if (a === "missing" && s) {
      if ((await d(`${l}.lnk`).then(() => "present", c => v(c) === "ENOENT" ? "absent" : "unknown")) !== "absent") return "unknown";
    }
    return a;
  }
  return "clear";
}
async function e2n(n, e) {
  return (await eD(n, e)) === "clear";
}
async function dct(n, e, o) {
  if (!(await e2n(n, o))) return !1;
  let s = await w(n).catch(() => null);
  if (s === null || p(s) !== p(e)) return !1;
  let r = await d(Wf(n)).catch(() => null);
  if (r === null || !r.isDirectory()) return !1;
  return r6(n);
}
async function r6(n) {
  if (O() !== "windows") return !0;
  let e = await w(m(n)).catch(() => null);
  return !(await x(n, e == null ? null : Am(k(e, b(n)))));
}
async function x(n, e) {
  try {
    return await E(n), t(`[worktree] unlinked reparse point before removal: ${n}`), !1;
  } catch {}
  try {
    return await P(n), t(`[worktree] removed reparse point or empty directory before removal: ${n}`), !1;
  } catch (error) {
    if (B(error)) return !1;
    if (v(error) !== "ENOTEMPTY") {
      let l = (await y(n).then(() => "link", a => v(a) === "EINVAL" || B(a) ? "not-link" : "unknown")) !== "not-link" || e == null ? null : await w(n).then(a => Am(a)).catch(() => null);
      if (l == null || l !== e && !l.startsWith(e + F)) return t(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, {
        level: "warn"
      }), !0;
    }
  }
  let o = await C(n, {
    withFileTypes: !0
  }).catch(r => B(r) ? [] : null);
  if (o == null) return t(`[worktree] could not enumerate ${n} before removal; not certifying`, {
    level: "warn"
  }), !0;
  let s = !1;
  for (let r of o) if (r.isSymbolicLink() || r.isDirectory()) s = (await x(k(n, r.name), e)) || s;
  return s;
}
export { Am, Qzn, Zzn, jAo, Wf, lct, WAo, cct, _ln, w0r, bln, eD, e2n, dct, r6 };