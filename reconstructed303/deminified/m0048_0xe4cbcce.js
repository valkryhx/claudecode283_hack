// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z, jn, Na, Qa, Ds, SL, mre } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { jf, _o, NTe, se, TDe, Rde, _jt, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { N4, ur, PA, ro } from "B:/~BUN/root/chunk-fsp20me0.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { aDe, PBr, Hne } from "B:/~BUN/root/chunk-3rzwkd15.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
function Ihe(e) {
  let n = PA(e);
  return ro(n) ? ur : n;
}
function Qfn(e) {
  let n = _jt(e);
  return n.includes("\\") || /%[0-9A-Fa-f]{2}/.test(n) || n.split(/[/?#]/).some(item => item === "." || item === "..");
}
function ojo(e) {
  let n = e.trimStart(),
    r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return TDe(n);
  return TDe(r[0] + _jt(n.slice(r[0].length)));
}
function A5(e) {
  if (e.includes("%00") || e.includes("\x00")) return !0;
  if (N4(e)) return !0;
  let n = [Rde(e)?.host, Rde(e, {
    asRewritten: !0
  })?.host];
  if (e.includes("://")) n.push(TDe(e.trimStart())?.hostname || void 0, ojo(e)?.hostname || void 0);
  let r = n.map(item => item === void 0 ? null : Ihe(item));
  return r.some(item => item !== r[0]);
}
var Zs = 0,
  Z7e = 0,
  Pne = 0;
import { closeSync as y, constants as m, fstatSync as O, lstatSync as h, openSync as R, readlinkSync as F, readSync as W, statSync as Z } from "fs";
import { open as J } from "fs/promises";
import { dirname as b, resolve as q } from "path";
var gbt = 536870912,
  f = He({
    noFollowAny: "untried",
    localVolumes: void 0
  }, e => {
    e.noFollowAny = "untried", e.localVolumes = void 0;
  }),
  Q = ["/", "/System/Volumes/Data"];
function I() {
  if (f.localVolumes !== void 0) return f.localVolumes;
  let e = !0,
    n = Q.flatMap(item => {
      try {
        return [Z(item).dev];
      } catch (error) {
        if (k(error) !== "ENOENT") e = !1;
        return [];
      }
    }),
    r = new Set(n);
  if (e) f.localVolumes = r;
  return r;
}
function v(e) {
  if (ee() === "rejected") return "unsupported";
  let n;
  try {
    n = S(b(e));
  } catch (error) {
    let o = k(error);
    if (o === "ELOOP") return "link";
    if (o === "EINVAL") return "elsewhere";
    if (o === "EACCES" || o === "EPERM") return P(b(e));
    throw error;
  }
  try {
    return I().has(O(n).dev) ? "local" : "elsewhere";
  } finally {
    y(n);
  }
}
function P(e) {
  let n = I(),
    r = b(e);
  if (r === e) return "elsewhere";
  let o;
  try {
    o = S(r);
  } catch (error) {
    let s = k(error);
    if (s === "ELOOP") return "link";
    if (s === "EACCES" || s === "EPERM") {
      let c = P(r);
      return c === "local" && !n.has(C(e)) ? "elsewhere" : c;
    }
    if (s === "EINVAL") return "elsewhere";
    throw error;
  }
  try {
    let dev = O(o).dev;
    return n.has(dev) && n.has(C(e)) ? "local" : "elsewhere";
  } finally {
    y(o);
  }
}
function C(e) {
  try {
    return h(e).dev;
  } catch {
    return Number.NaN;
  }
}
function S(e) {
  return R(e, m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | gbt | Zs);
}
async function Z9n() {
  if (f.noFollowAny === "untried") try {
    await (await J("/", m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | gbt | Zs)).close(), f.noFollowAny = "works";
  } catch (error) {
    f.noFollowAny = k(error) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected";
}
function ee() {
  if (f.noFollowAny === "untried") try {
    y(S("/")), f.noFollowAny = "works";
  } catch (error) {
    f.noFollowAny = k(error) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected" ? "rejected" : "works";
}
function hbt(e, n) {
  return n === "windows" && jn(e) && !Qa(e) || Na(e);
}
function eZe(e) {
  return SL(e) || Na(e);
}
function E(e) {
  let n = se();
  return !Ds(e) && !Na(e) && jf(n, e, {
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0,
    launchAncestry: NTe(n)
  }) === void 0;
}
function ne() {
  return "windows";
}
var re = 65536;
function Zfn(e, n, r, o, i) {
  let s = ne(),
    c = Zs | (s === "windows" ? m.O_RDONLY : m.O_RDONLY | m.O_NONBLOCK | m.O_NOCTTY),
    d = !n && hbt(e, s) ? ie(e, c, s, r) : ce(e, n, o, c, s, r);
  if (d === null) return null;
  try {
    if (i === void 0) aDe(O(d), e, r);else {
      let u = O(d, {
        bigint: !0
      });
      if (u.ino !== i.ino || u.ctimeNs !== i.ctimeNs || s !== "windows" && u.dev !== i.dev) return p(e, "the file was replaced or changed after its path was checked");
      aDe({
        isDirectory: () => u.isDirectory(),
        isFile: () => u.isFile(),
        size: Number(u.size)
      }, e, r);
    }
    return Hne(te(d, e, r));
  } finally {
    y(d);
  }
}
function te(e, n, r) {
  let o = [],
    i = 0;
  while (i <= r) {
    let s = Buffer.allocUnsafe(Math.min(re, r + 1 - i)),
      c = W(e, s, 0, s.length, i);
    if (c === 0) break;
    o.push(s.subarray(0, c)), i += c;
  }
  return PBr(i, n, r), Buffer.concat(o, i);
}
function M(e, n, r) {
  if (r === "macos" && f.noFollowAny !== "rejected") return {
    fd: R(e, n | gbt),
    everyComponent: !0
  };
  return {
    fd: R(e, r === "windows" ? n : n | m.O_NOFOLLOW),
    everyComponent: !1
  };
}
var _ = Symbol("no procfs"),
  oe = Symbol("descriptor path unreadable");
function B(e, n) {
  if (n !== "linux") return _;
  try {
    return F(`/proc/self/fd/${e}`);
  } catch {
    try {
      h("/proc/self/fd");
    } catch {
      return _;
    }
    return oe;
  }
}
function ie(e, n, r, o) {
  if (r === "macos" && v(e) === "link") return p(e, "a link stands above the spelled name");
  let i = h(e);
  if (i.isSymbolicLink()) return H(e), p(e, "a link stands at the spelled name");
  aDe(i, e, o);
  let s;
  try {
    s = M(e, n, r).fd;
  } catch (error) {
    if (k(error) !== "ELOOP") throw error;
    return p(e, "a link stands on the spelled route");
  }
  let c = B(s, r);
  return c === _ || c === e ? s : w(s, e, `the descriptor is on ${String(c)}`);
}
function ce(e, n, r, o, i, s) {
  if (!n && !E(e)) return p(e, "its route could not be examined");
  let c = !1;
  if (i === "macos") {
    let l = v(e);
    if (l === "link") return A(e, n);
    c = l === "local" && !r;
  }
  if (!c) {
    let l = h(e);
    if (!l.isSymbolicLink()) aDe(l, e, s);else if (i === "windows") return A(e, n);
  }
  let d;
  try {
    d = M(e, o, i);
  } catch (error) {
    if (k(error) !== "ELOOP") throw error;
    return A(e, n);
  }
  let {
    fd: fd,
    everyComponent: everyComponent
  } = d;
  try {
    if (everyComponent) return fd;
    let l = B(fd, i);
    if (l !== _) return l === e ? fd : w(fd, e, `the descriptor is on ${String(l)}`);
    let D = _o(se(), e);
    return !D.isSymlink && D.resolvedPath === e && (D.isCanonical || !n && E(e)) ? fd : w(fd, e, "the route no longer resolves to it");
  } catch (error) {
    throw w(fd, e, "the binding check threw"), error;
  }
}
function A(e, n) {
  if (!n && E(e)) H(e);
  return p(e, "a link appeared on the route");
}
function H(e) {
  if (!h(e).isSymbolicLink()) return;
  let n = q(b(e), F(e));
  if (!E(n)) return;
  try {
    h(n);
  } catch (error) {
    let o = k(error);
    if ((o === "ENOENT" || o === "ENOTDIR") && typeof error === "object" && error !== null) Object.defineProperty(error, U, {
      value: !0
    });
    throw error;
  }
}
var U = Symbol("boundRead.linkToNothing");
function U4s(e) {
  return typeof e === "object" && e !== null && U in e;
}
function w(e, n, r) {
  return y(e), p(n, r);
}
function p(e, n) {
  return t(`boundRead: not reading ${e}: ${n}`, {
    level: "warn"
  }), null;
}
import { createHash as ue, randomUUID as ae } from "crypto";
import { closeSync as le, constants as T, fchmodSync as fe, fstatSync as me, lstatSync as pe, mkdirSync as g, openSync as he } from "fs";
import { tmpdir as L } from "os";
import { join as N } from "path";
function Hf() {
  mre("temp_root");
  let CLAUDE_CODE_TMPDIR = a.CLAUDE_CODE_TMPDIR;
  if (CLAUDE_CODE_TMPDIR) return CLAUDE_CODE_TMPDIR;
  return L();
}
var eXn = "claude-pdf-",
  tXn = "claude-preview-";
function q0e(e) {
  let n = process.getuid?.();
  if (n === void 0) return;
  let r = e.replace(/[\/]+$/, "") || e,
    o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    i;
  try {
    i = he(r, T.O_RDONLY | T.O_DIRECTORY | T.O_NOFOLLOW);
  } catch (error) {
    let c = k(error);
    if (c === "ELOOP" || c === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (c === "EACCES") {
      let d;
      try {
        let u = pe(r);
        if (u.uid !== n) d = u.uid;
      } catch {}
      if (d !== void 0) throw new x(`Temp directory ${e} is owned by uid ${d}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new x(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
    }
    throw error;
  }
  try {
    let s = me(i);
    if (s.uid !== n) {
      if (n === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
        X("warn", "tempdir_owner_mismatch", {
          observed_uid: s.uid
        });
        return;
      }
      throw Error(`Temp directory ${e} is owned by uid ${s.uid}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`);
    }
    if ((s.mode & 511) !== 448) fe(i, 448);
  } finally {
    le(i);
  }
}
class V {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var Y = new z(() => new V());
function nXn() {
  return "claude";
}
function wd() {
  return G(Y.of(j().host));
}
function G(e) {
  if (de()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let n = N(Hf(), nXn());
  if (n !== e.ensured) {
    if (typeof process.getuid === "function") g(n, {
      recursive: !0,
      mode: 448
    }), q0e(n);else try {
      g(n, {
        recursive: !0,
        mode: 448
      });
    } catch {}
    e.markEnsured(n);
  }
  return n;
}
function K0e() {
  let e = wd();
  g(e, {
    recursive: !0,
    mode: 448
  }), q0e(e);
  let n = N(e, "plugin-tool-staging");
  return g(n, {
    recursive: !0,
    mode: 448
  }), q0e(n), n;
}
function Y0e() {
  let e = Y.of(j().host),
    n = G(e);
  return n;
}
function B4s() {
  return Hf();
}
function X0e(e = "claude-prompt", n = ".md", r) {
  let o = r?.contentHash ? ue("sha256").update(r.contentHash).digest("hex").slice(0, 16) : ae();
  return N(wd(), `${e}-${o}${n}`);
}
export { Ihe, Qfn, ojo, A5, Zs, Z7e, Pne, gbt, Z9n, hbt, eZe, Zfn, U4s, Hf, eXn, tXn, q0e, nXn, wd, K0e, Y0e, B4s, X0e };