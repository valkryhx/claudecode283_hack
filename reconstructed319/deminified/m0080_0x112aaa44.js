// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, k, qae } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, Ba, ad, Ks, jH } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, Og, io, _me, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { n4e, Mwe, ycn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { r7, jr, GO, fo } from "B:/~BUN/root/chunk-46ahshhq.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { Uqe, SPo, _j } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function cxe(e) {
  let n = GO(e);
  return fo(n) ? jr : n;
}
function C2n(e) {
  let n = ycn(e);
  return n.includes("\\") || /%[0-9A-Fa-f]{2}/.test(n) || n.split(/[/?#]/).some(item => item === "." || item === "..");
}
function a1s(e) {
  let n = e.trimStart(),
    r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return n4e(n);
  return n4e(r[0] + ycn(n.slice(r[0].length)));
}
function Bte(e) {
  if (e.includes("%00") || e.includes("\x00")) return !0;
  if (r7(e)) return !0;
  let n = [Mwe(e)?.host, Mwe(e, {
    asRewritten: !0
  })?.host];
  if (e.includes("://")) n.push(n4e(e.trimStart())?.hostname || void 0, a1s(e)?.hostname || void 0);
  let r = n.map(item => item === void 0 ? null : cxe(item));
  return r.some(item => item !== r[0]);
}
import { closeSync as y, constants as m, fstatSync as O, lstatSync as h, openSync as S, readlinkSync as F, readSync as Z, statSync as J } from "fs";
import { open as ee } from "fs/promises";
import { dirname as _, resolve as ne } from "path";
var q1t = 536870912,
  f = he({
    noFollowAny: "untried",
    localVolumes: void 0
  }, e => {
    e.noFollowAny = "untried", e.localVolumes = void 0;
  }),
  te = ["/", "/System/Volumes/Data"];
function v() {
  if (f.localVolumes !== void 0) return f.localVolumes;
  let e = !0,
    n = te.flatMap(item => {
      try {
        return [J(item).dev];
      } catch (error) {
        if (k(error) !== "ENOENT") e = !1;
        return [];
      }
    }),
    r = new Set(n);
  if (e) f.localVolumes = r;
  return r;
}
function P(e) {
  if (re() === "rejected") return "unsupported";
  let n;
  try {
    n = A(_(e));
  } catch (error) {
    let o = k(error);
    if (o === "ELOOP") return "link";
    if (o === "EINVAL") return "elsewhere";
    if (o === "EACCES" || o === "EPERM") return x(_(e));
    throw error;
  }
  try {
    return v().has(O(n).dev) ? "local" : "elsewhere";
  } finally {
    y(n);
  }
}
function x(e) {
  let n = v(),
    r = _(e);
  if (r === e) return "elsewhere";
  let o;
  try {
    o = A(r);
  } catch (error) {
    let c = k(error);
    if (c === "ELOOP") return "link";
    if (c === "EACCES" || c === "EPERM") {
      let u = x(r);
      return u === "local" && !n.has(I(e)) ? "elsewhere" : u;
    }
    if (c === "EINVAL") return "elsewhere";
    throw error;
  }
  try {
    let dev = O(o).dev;
    return n.has(dev) && n.has(I(e)) ? "local" : "elsewhere";
  } finally {
    y(o);
  }
}
function I(e) {
  try {
    return h(e).dev;
  } catch {
    return Number.NaN;
  }
}
function A(e) {
  return S(e, m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | q1t | ro);
}
async function SFr() {
  if (f.noFollowAny === "untried") try {
    await (await ee("/", m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | q1t | ro)).close(), f.noFollowAny = "works";
  } catch (error) {
    f.noFollowAny = k(error) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected";
}
function re() {
  if (f.noFollowAny === "untried") try {
    y(A("/")), f.noFollowAny = "works";
  } catch (error) {
    f.noFollowAny = k(error) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected" ? "rejected" : "works";
}
function Y1t(e, n) {
  return n === "windows" && or(e) && !ad(e) || Ba(e);
}
function HHe(e) {
  return jH(e) || Ba(e);
}
function E(e) {
  let n = ie();
  return !Ks(e) && !Ba(e) && Og(n, e, {
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0,
    launchAncestry: _me(n)
  }) === void 0;
}
function oe() {
  return "windows";
}
var se = 65536;
function MSt(e, n, r, o, s) {
  let c = oe(),
    u = ro | (c === "windows" ? m.O_RDONLY : m.O_RDONLY | m.O_NONBLOCK | m.O_NOCTTY),
    d = !n && Y1t(e, c) ? ae(e, u, c, r) : de(e, n, o, u, c, r);
  if (d === null) return null;
  try {
    if (s === void 0) Uqe(O(d), e, r);else {
      let a = O(d, {
        bigint: !0
      });
      if (a.ino !== s.ino || a.ctimeNs !== s.ctimeNs || c !== "windows" && a.dev !== s.dev) return p(e, "the file was replaced or changed after its path was checked");
      Uqe({
        isDirectory: () => a.isDirectory(),
        isFile: () => a.isFile(),
        size: Number(a.size)
      }, e, r);
    }
    return _j(ce(d, e, r));
  } finally {
    y(d);
  }
}
function ce(e, n, r) {
  let o = [],
    s = 0;
  while (s <= r) {
    let c = Buffer.allocUnsafe(Math.min(se, r + 1 - s)),
      u = Z(e, c, 0, c.length, s);
    if (u === 0) break;
    o.push(c.subarray(0, u)), s += u;
  }
  return SPo(s, n, r), Buffer.concat(o, s);
}
function U(e, n, r) {
  if (r === "macos" && f.noFollowAny !== "rejected") return {
    fd: S(e, n | q1t),
    everyComponent: !0
  };
  return {
    fd: S(e, r === "windows" ? n : n | m.O_NOFOLLOW),
    everyComponent: !1
  };
}
var b = Symbol("no procfs"),
  ue = Symbol("descriptor path unreadable");
function M(e, n) {
  if (n !== "linux") return b;
  try {
    return F(`/proc/self/fd/${e}`);
  } catch {
    try {
      h("/proc/self/fd");
    } catch {
      return b;
    }
    return ue;
  }
}
function ae(e, n, r, o) {
  if (r === "macos" && P(e) === "link") return p(e, "a link stands above the spelled name");
  let s = h(e);
  if (s.isSymbolicLink()) return B(e), p(e, "a link stands at the spelled name");
  Uqe(s, e, o);
  let c;
  try {
    c = U(e, n, r).fd;
  } catch (error) {
    if (k(error) !== "ELOOP") throw error;
    return p(e, "a link stands on the spelled route");
  }
  let u = M(c, r);
  return u === b || u === e ? c : w(c, e, `the descriptor is on ${String(u)}`);
}
function de(e, n, r, o, s, c) {
  if (!n && !E(e)) return p(e, "its route could not be examined");
  let u = !1;
  if (s === "macos") {
    let l = P(e);
    if (l === "link") return N(e, n);
    u = l === "local" && !r;
  }
  if (!u) {
    let l = h(e);
    if (!l.isSymbolicLink()) Uqe(l, e, c);else if (s === "windows") return N(e, n);
  }
  let d;
  try {
    d = U(e, o, s);
  } catch (error) {
    if (k(error) !== "ELOOP") throw error;
    return N(e, n);
  }
  let {
    fd: fd,
    everyComponent: everyComponent
  } = d;
  try {
    if (everyComponent) return fd;
    let l = M(fd, s);
    if (l !== b) return l === e ? fd : w(fd, e, `the descriptor is on ${String(l)}`);
    let T = io(ie(), e);
    return !T.isSymlink && T.resolvedPath === e && (T.isCanonical || !n && E(e)) ? fd : w(fd, e, "the route no longer resolves to it");
  } catch (error) {
    throw w(fd, e, "the binding check threw"), error;
  }
}
function N(e, n) {
  if (!n && E(e)) B(e);
  return p(e, "a link appeared on the route");
}
function B(e) {
  if (!h(e).isSymbolicLink()) return;
  let n = ne(_(e), F(e));
  if (!E(n)) return;
  try {
    h(n);
  } catch (error) {
    let o = k(error);
    if ((o === "ENOENT" || o === "ENOTDIR") && typeof error === "object" && error !== null) Object.defineProperty(error, j, {
      value: !0
    });
    throw error;
  }
}
var j = Symbol("boundRead.linkToNothing");
function xta(e) {
  return typeof e === "object" && e !== null && j in e;
}
function w(e, n, r) {
  return y(e), p(n, r);
}
function p(e, n) {
  return t(`boundRead: not reading ${e}: ${n}`, {
    level: "warn"
  }), null;
}
import { createHash as G, randomUUID as le } from "crypto";
import { closeSync as fe, constants as L, fchmodSync as me, fstatSync as pe, lstatSync as ye, mkdirSync as g, openSync as ge } from "fs";
import { tmpdir as C } from "os";
import { join as D } from "path";
function xf() {
  let CLAUDE_CODE_TMPDIR = i.CLAUDE_CODE_TMPDIR;
  if (CLAUDE_CODE_TMPDIR) return CLAUDE_CODE_TMPDIR;
  return C();
}
var R2n = "claude-pdf-",
  A2n = "claude-preview-";
function e7(e) {
  let n = process.getuid?.();
  if (n === void 0) return;
  let r = e.replace(/[\/]+$/, "") || e,
    o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    s;
  try {
    s = ge(r, L.O_RDONLY | L.O_DIRECTORY | L.O_NOFOLLOW);
  } catch (error) {
    let u = k(error);
    if (u === "ELOOP" || u === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (u === "EACCES") {
      let d;
      try {
        let a = ye(r);
        if (a.uid !== n) d = a.uid;
      } catch {}
      if (d !== void 0) throw new R(`Temp directory ${e} is owned by uid ${d}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new R(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
    }
    throw error;
  }
  try {
    let c = pe(s);
    if (c.uid !== n) {
      if (n === 0 && i.CLAUDE_CODE_CONTAINER_ID) {
        V("warn", "tempdir_owner_mismatch", {
          observed_uid: c.uid
        });
        return;
      }
      throw Error(`Temp directory ${e} is owned by uid ${c.uid}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`);
    }
    if ((c.mode & 511) !== 448) me(s, 448);
  } finally {
    fe(s);
  }
}
class Y {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var K = new W(() => new Y()),
  Gxo = "temp_root_volume_full";
function Cqe() {
  return "claude";
}
function X(e) {
  return G("sha256").update(e.toLowerCase()).digest("hex").slice(0, 16);
}
function Vxo() {
  return i.CLAUDE_CODE_HOST_SHORT_TEMP_DIRS ?? !id();
}
function x2n(e) {
  return Vxo() ? X(e) : e;
}
function P2n(e) {
  return [X(e), e];
}
function Mu() {
  return z(K.of(H().host));
}
function z(e) {
  if (q()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let n = xf(),
    r = D(n, Cqe());
  if (r !== e.ensured) {
    if (typeof process.getuid === "function") {
      try {
        g(r, {
          recursive: !0,
          mode: 448
        });
      } catch (error) {
        if (qae(error)) {
          let s = k(error),
            c = s === "EDQUOT" ? `your disk quota on the volume holding ${n} is used up (${s})` : `the volume holding ${n} is full (${s})`;
          throw new R(`Claude Code's temporary directory ${r} could not be created: ${c}. Free space on that volume, or set CLAUDE_CODE_TMPDIR to a directory on another one, then try again.`, "claude temp dir not created: volume full (ENOSPC/EDQUOT)", Gxo);
        }
        throw error;
      }
      e7(r);
    } else try {
      g(r, {
        recursive: !0,
        mode: 448
      });
    } catch {}
    e.markEnsured(r);
  }
  return r;
}
var Kxo = "plugin-tool-staging",
  O2n = "bot_protected_tengu_graceful_dream";
function $He() {
  let e = Mu();
  g(e, {
    recursive: !0,
    mode: 448
  }), e7(e);
  let n = D(e, Kxo);
  return g(n, {
    recursive: !0,
    mode: 448
  }), e7(n), n;
}
function UHe() {
  let e = K.of(H().host),
    n = z(e);
  return n;
}
function l1s() {
  return xf();
}
function BHe(e = "claude-prompt", n = ".md", r) {
  let o = r?.contentHash ? G("sha256").update(r.contentHash).digest("hex").slice(0, 16) : le();
  return D(Mu(), `${e}-${o}${n}`);
}
export { cxe, C2n, a1s, Bte, q1t, SFr, Y1t, HHe, MSt, xta, xf, R2n, A2n, e7, Gxo, Cqe, Vxo, x2n, P2n, Mu, Kxo, O2n, $He, UHe, l1s, BHe };