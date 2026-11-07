// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  fY
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  randomBytes as ee
} from "crypto";
import * as Et from "fs";
import * as gt from "fs/promises";
import {
  closeSync as S,
  constants as w,
  fchmodSync as yt,
  fstatSync as et,
  ftruncateSync as ne,
  lstatSync as B,
  openSync as H,
  readFileSync as re,
  readSync as oe,
  realpathSync as ie,
  renameSync as Ot,
  unlinkSync as St,
  writeFileSync as nt
} from "fs";
import {
  lstat as L,
  open as I,
  realpath as se,
  rename as X,
  stat as ae,
  unlink as P,
  writeFile as Nt
} from "fs/promises";
import {
  basename as rt,
  dirname as U,
  isAbsolute as bt,
  join as ot
} from "path";
import {
  constants as F,
  createWriteStream as ut
} from "fs";
import {
  copyFile as Gt,
  lstat as Z,
  open as q,
  readlink as zt
} from "fs/promises";
import {
  join as Qt
} from "path";
import {
  pipeline as dt
} from "stream/promises";
async function bnt(t, e, n) {
  let r = F.O_NOFOLLOW;
  if (r === void 0 || x() === "windows") {
    if (!(await Z(t)).isFile()) throw kPo(t);
    await Gt(t, e, n?.exclusive ? F.COPYFILE_EXCL : 0);
    return
  }
  let i = await q(t, F.O_RDONLY | r | (n?.nonBlocking ? F.O_NONBLOCK ?? 0 : 0));
  try {
    let o = await i.stat();
    if (!o.isFile()) throw kPo(t);
    if (n?.exactMode) {
      let s = await q(e, n.exclusive ? "wx" : "w", o.mode);
      try {
        await dt(i.createReadStream(), ut(e, {
          fd: s.fd,
          autoClose: !1
        })), await s.chmod(o.mode & 4095)
      } finally {
        await s.close()
      }
    } else await dt(i.createReadStream(), ut(e, {
      mode: o.mode,
      flags: n?.exclusive ? "wx" : "w"
    }))
  } finally {
    await i.close()
  }
}

function kPo(t) {
  return new R(`Refusing to copy ${t}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy")
}
var qt = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function cme(t, e, n) {
  let r = (c) => {
      let f = k(c);
      if (n?.throwTransient && (f === void 0 || !qt.has(f))) throw c;
      return null
    },
    i = x() === "windows",
    o = i ? void 0 : F.O_NOFOLLOW,
    s = i ? 0 : F.O_NONBLOCK ?? 0;
  if (o === void 0) {
    let c = await Z(t).catch(r);
    if (c === null || !c.isFile()) return null
  }
  let a;
  try {
    a = await q(t, F.O_RDONLY | (o ?? 0) | s)
  } catch (c) {
    return r(c)
  }
  try {
    let c = await a.stat();
    if (!c.isFile() || c.size > e || n?.oneName && c.nlink > 1) return null;
    let {
      buffer: f,
      bytesRead: T
    } = await a.read(Buffer.alloc(e + 1), 0, e + 1, 0);
    if (T > e) return null;
    return f.subarray(0, T).toString("utf-8")
  } catch (c) {
    return r(c)
  } finally {
    await a.close()
  }
}
async function ZV(t, e) {
  let n = Qt(t, e);
  try {
    return await zt(n), !1
  } catch (r) {
    if (k(r) === "EINVAL") return !(await Z(n)).isSymbolicLink();
    throw r
  }
}
var mt = !1;

function Rna() {
  mt = !0
}

function wt() {
  return mt
}

function Zt() {
  return !1
}

function vPo({
  served: t
}) {
  if (!wt()) return !1;
  return t ? !1 : Zt()
}
var ro = 0,
  vxe = 0,
  u0 = 0,
  Ana = 0;
var pt = new Set("drvfs 9p virtiofs cifs smb3 smbfs nfs nfs4 ntfs ntfs3 fuseblk vfat exfat msdos".split(" ")),
  te = new Set(["ext2 ext3 ext4 xfs btrfs zfs f2fs jfs reiserfs nilfs2 bcachefs tmpfs ramfs rootfs squashfs erofs", "proc sysfs devtmpfs devpts mqueue hugetlbfs cgroup cgroup2 pstore bpf debugfs tracefs securityfs", "configfs fusectl binfmt_misc nsfs rpc_pipefs efivarfs selinuxfs nfsd"].flatMap((t) => t.split(" ")));

function xna(t) {
  let e = tt(t.fstype, "."),
    n = o$e(t.source ?? "");
  return pt.has(t.fstype) || pt.has(e) || e === "fuse" || !te.has(t.fstype) || /^[A-Za-z]:/.test(n) || /^(\\\\|\/\/)/.test(n) || /^[^/\s]+:\//.test(n) || /(^|,)aname=drvfs/.test(t.options ?? "")
}

function Pna(t, e) {
  return t === "drvfs" || t === "9p" && /(^|,)aname=drvfs(?=[,;]|$)/.test(e)
}

function o$e(t) {
  return t.replace(/\\([0-7]{3})/g, (e, n) => String.fromCharCode(parseInt(n, 8)))
}

function hjt(t, e) {
  return t === e || t.startsWith(e === "/" ? "/" : `${e}/`)
}
var KO = ".cc-writes",
  kM = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);

function zFr() {
  return vPo({
    served: !1
  })
}

function G1s(t, e) {
  return `Could not rewrite ${t} in place: this file has other names on disk (it is hard-linked, ${e} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`
}

function _t(t, e) {
  return Object.assign(new R(G1s(t, e), "in-place write refused: the target has other names (a hard link)"), {
    code: "EMLINK",
    path: t
  })
}
var OH = new Set(["EPERM", "EBUSY", "EACCES"]);

function fP(t) {
  return `${t}.tmp.${ee(4).toString("hex")}`
}

function jA(t, e) {
  let n = `${e}.tmp.`;
  return t.startsWith(n) && /^[0-9a-f]{8}$/.test(t.slice(n.length))
}

function GFr(t) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(t)
}
var Tt = 4,
  V = 50,
  Rt = Array.from({
    length: Tt - 1
  }, () => V),
  EPo = [100, 500, 2000],
  it = [100, 200, 400],
  Ve = it.length + 2,
  At = Rt.slice(1),
  j = he(new Set, (t) => t.clear()),
  Ft = 26985,
  Pt = 50,
  xt = "/proc/self/mounts",
  vt = 1048576,
  Ct = he(new Set, (t) => t.clear()),
  ce = new Int32Array(new SharedArrayBuffer(4));

function D(t) {
  Atomics.wait(ce, 0, 0, t)
}

function W(t, e, n = Tt - 1) {
  let r = k(t);
  return r !== void 0 && OH.has(r) && e < n
}
var G = 128;
async function le(t) {
  try {
    return ((await L(t)).mode & G) === 0
  } catch {
    return !1
  }
}
async function AC(t, e, n = Rt) {
  let r = !1;
  for (let i = 0;; i++) try {
    return await t(), r
  } catch (o) {
    if (W(o, i, n.length)) {
      if (i === 0 && e !== void 0 && await le(e)) throw o;
      r = !0, await J(n[i]);
      continue
    }
    throw o
  }
}

function Is(t, e, n = X) {
  return AC(() => n(t, e), e)
}

function Bqe(t, e, n = X) {
  return AC(() => n(t, e), e, EPo)
}

function Lt(t, e) {
  let n = k(t);
  if (n !== void 0 && OH.has(n) && bt(e)) j.add(e)
}
async function V1s(t, e, n = X, r = !1) {
  let i = async () => n(t, e), o = !r && !j.has(e);
  try {
    return await i(), !1
  } catch (s) {
    if (!W(s, 0)) throw s;
    try {
      if (((await L(e)).mode & G) === 0) throw s
    } catch (a) {
      if (a === s) throw s;
      o &&= k(a) !== "ENOENT"
    }
  }
  await J(V);
  try {
    return await AC(i, void 0, o ? it : At), !0
  } catch (s) {
    if (o) Lt(s, e);
    throw s
  }
}

function fe(t) {
  try {
    return (B(t).mode & G) === 0
  } catch {
    return !1
  }
}

function Ona(t, e, n = Ot) {
  let r = !1;
  for (let i = 0;; i++) try {
    return n(t, e), r
  } catch (o) {
    if (W(o, i)) {
      if (i === 0 && fe(e)) throw o;
      r = !0, D(V);
      continue
    }
    throw o
  }
}

function K1s(t, e, n = Ot) {
  let r = !j.has(e);
  try {
    return n(t, e), !1
  } catch (o) {
    if (!W(o, 0)) throw o;
    try {
      if ((B(e).mode & G) === 0) throw o
    } catch (s) {
      if (s === o) throw o;
      r &&= k(s) !== "ENOENT"
    }
  }
  D(V);
  let i = r ? it : At;
  for (let o = 0;; o++) try {
    return n(t, e), !0
  } catch (s) {
    if (!W(s, o, i.length)) {
      if (r) Lt(s, e);
      throw s
    }
    D(i[o])
  }
}
var q1s = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  VFr = new Set([...q1s, "EROFS", "ENOENT"]),
  aVn = 67108864,
  KFr = 0;
async function kt(t, e, n = "win32") {
  return (await Y1s(t, e, n)).kind === "pass"
}
async function Y1s(t, e, n = "win32") {
  if (n !== "win32") return {
    kind: "pass"
  };
  try {
    return {
      kind: (await L(t)).isFile() ? "pass" : "refuse"
    }
  } catch (r) {
    if (k(r) === "ENOENT") return {
      kind: e ? "pass" : "refuse"
    };
    return {
      kind: "failed",
      error: r
    }
  }
}

function It(t, e, n = "win32") {
  if (n !== "win32") return !0;
  try {
    return B(t).isFile()
  } catch (r) {
    return e && k(r) === "ENOENT"
  }
}
async function Mt(t, e = !1) {
  if (!e && !await kt(t, !0)) return {
    kind: "unavailable"
  };
  let n;
  try {
    n = await I(t, w.O_RDONLY)
  } catch (r) {
    return k(r) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    }
  }
  try {
    let r = await n.stat();
    if (!r.isFile() || r.size > aVn) return {
      kind: "unavailable"
    };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(await n.readFile()),
      mode: r.mode & 4095
    }
  } catch {
    return {
      kind: "unavailable"
    }
  } finally {
    await n.close().catch(() => {})
  }
}
async function ue(t, e, n = !1) {
  if (!n && !await kt(t, !0)) return !1;
  let r;
  try {
    r = await I(t, "w", e.mode)
  } catch {
    return !1
  }
  try {
    if (!(await r.stat()).isFile()) return await r.close().catch(() => {}), !1;
    return await r.writeFile(e.bytes), await r.chmod(e.mode).catch(() => {}), await r.close(), !0
  } catch {
    return await r.close().catch(() => {}), !1
  }
}
async function TPo(t, e, n, r) {
  try {
    let i = await L(t, {
      bigint: !0
    });
    if (!i.isFile()) return !1;
    if (fY(i, e)) return !0;
    if (k(r) !== "ESTALE") return !1;
    let o = await Mt(t);
    return o.kind === "snapshot" && !Wt(o.bytes, n)
  } catch {
    return !1
  }
}

function CPo(t, e, n, r) {
  try {
    let i = B(t, {
      bigint: !0
    });
    if (!i.isFile()) return !1;
    if (fY(i, e)) return !0;
    if (k(r) !== "ESTALE") return !1;
    let o = Ht(t);
    return o.kind === "snapshot" && !Wt(o.bytes, n)
  } catch {
    return !1
  }
}

function Wt(t, e) {
  let n = typeof e === "string" ? Buffer.from(e) : e;
  return t.length <= n.length && Buffer.compare(t, n.subarray(0, t.length)) === 0
}
var de = {
  restored: "original target restored",
  removed: "partial target removed",
  partial: "target left partial \u2014 treat contents as torn",
  untouched: "target untouched",
  replaced: "another writer's file left at the target"
};

function _(t, e, n) {
  try {
    if (t instanceof Error) t.message = `${t.message}; ${e!==void 0?`new contents preserved at ${e}; `:""}${de[n]}`, Object.assign(t, {
      ...e !== void 0 && {
        preservedTmp: e
      },
      targetOutcome: n
    })
  } catch {}
  return t
}

function a7(t) {
  let e = k(t);
  return e === "EINVAL" || e === "ENOTSUP" || e === "EPERM" || e === "ENOSYS"
}
async function ht(t, e) {
  try {
    await t.sync()
  } catch (n) {
    if (!a7(n) && !(e && k(n) === "EBADF")) throw n
  }
}
class qFr extends Error {
  target;
  constructor(t) {
    super("beforePublish refused the write; nothing was published");
    this.target = t;
    this.name = "PublishRefusedError"
  }
}
async function me(t, e) {
  return t;
  try {
    await (await I(e, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close()
  } catch (n) {
    switch (k(n)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return t;
      case "EACCES":
      case "EPERM":
        if (await we(e)) return t;
        throw n;
      default:
        throw n
    }
  }
}
async function we(t) {
  let e = process.getuid?.();
  if (e === void 0) return !1;
  try {
    return (await L(t)).uid !== e
  } catch {
    return !1
  }
}
var Y = 3;
async function Bt(t, e) {
  if (e !== "win32") return !1;
  try {
    return await L(t), !0
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
      cause: n
    }
  }
}

function z(t, e) {
  return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof e === "object" ? {
    cause: e.cause
  } : void 0), {
    code: "EEXIST",
    syscall: "lstat",
    path: t
  })
}
async function st(t, e, n) {
  for (let r = 1;; r++) {
    let i = fP(t),
      o = await Bt(i, e);
    if (o !== !1) {
      if (r < Y) continue;
      throw z(i, o)
    }
    try {
      return await n(i)
    } catch (s) {
      if (k(s) === "EEXIST" && r < Y) continue;
      throw s
    }
  }
}
async function qO(t, e, n, r = "win32") {
  return st(t, r, async (i) => {
    try {
      return await Nt(i, e, {
        encoding: "utf8",
        mode: n,
        flag: "wx"
      }), i
    } catch (o) {
      if (k(o) !== "EEXIST") await P(i).catch(() => {});
      throw o
    }
  })
}
var Ut = {
  exclusive: !0,
  exactMode: !1,
  nonBlocking: !0
};
async function X1s(t, e, n = "win32") {
  return st(e, n, async (r) => {
    try {
      return await bnt(t, r, Ut), r
    } catch (i) {
      if (k(i) !== "EEXIST") await P(r).catch(() => {});
      throw i
    }
  })
}
async function pe(t, e, n = "win32") {
  return st(t, n, async (r) => ({
    fh: await I(r, n === "win32" ? "wx" : w.O_WRONLY | w.O_CREAT | w.O_EXCL, e),
    tmp: r
  }))
}
async function SN(t, e, n, r = "win32") {
  await f0(t, r), await Nt(t, e, {
    encoding: "utf8",
    mode: n,
    flag: "wx"
  })
}
async function J1s(t, e, n = "win32") {
  await f0(e, n), await bnt(t, e, Ut)
}
async function f0(t, e = "win32") {
  let n = await Bt(t, e);
  if (n === !0) throw z(t, n);
  if (n !== !1) throw n.cause
}

function at(t) {
  if (bt(t) && !t.startsWith("/proc/")) Ct.add(t)
}

function YFr(t) {
  Ct.delete(t), j.delete(t)
}

function Dt(t, e, n, r) {
  return !1
}

function Yt(t, e) {
  return t.split(`
`).some((n) => o$e(n.split(" ")[1] ?? "") === e)
}
async function Q1s(t, e, n, r) {
  if (!Dt(t, e, n, r)) return !1;
  try {
    if ((await gt.statfs(U(n))).type !== Ft) return !1
  } catch {
    return !1
  }
  let i = !1;
  try {
    let o = await I(xt, w.O_RDONLY | ro);
    try {
      let s = Buffer.allocUnsafe(vt),
        a = 0;
      while (a < s.length) {
        let {
          bytesRead: f
        } = await o.read(s, a, s.length - a, null);
        if (f === 0) break;
        a += f
      }
      let c = ot(await se(U(n)), rt(n));
      i = Yt(s.toString("utf8", 0, a), c)
    } finally {
      await o.close()
    }
  } catch {}
  if (i) return at(n), !1;
  return await P(e).catch(() => {}), await J(Pt), !0
}
async function zn(t, e, n, r) {
  return eK(t, e, {
    mode: n,
    renameFn: r
  })
}

function eK(t, e, n) {
  return Kt(t, e, n, !1)
}
async function Kt(t, e, n, r) {
  let {
    mode: i,
    createMode: o,
    exactMode: s,
    flush: a,
    flushForgivesEbadf: c,
    followSymlinks: f,
    inPlaceOnTempCreateRefused: T,
    stagingDir: h,
    renameFn: A,
    beforePublish: E
  } = n, v = i ?? o, C = () => {
    if (E !== void 0 && !E()) throw new qFr(t)
  }, N = await me(t, h), ct = 0, g, y = !1, M = !1, lt = async (d) => {
    let l = await Mt(t, f === !0),
      m = l.kind === "snapshot" ? l : void 0;
    C();
    let u = await I(t, w.O_WRONLY | w.O_CREAT, s ?? v),
      O;
    try {
      O = await u.stat({
        bigint: !0
      })
    } catch (b) {
      throw await u.close().catch(() => {}), y = d !== void 0, _(b, d, "untouched")
    }
    let p = O.isCharacterDevice();
    if (!O.isFile() && !p) throw await u.close().catch(() => {}), Object.assign(Error("refusing the in-place arm on a non-regular target"), {
      code: "ENXIO",
      path: t
    });
    if (!p && O.nlink > 1n && zFr()) throw await u.close().catch(() => {}), _t(t, Number(O.nlink));
    if (E !== void 0 && !E()) {
      if (await u.close().catch(() => {}), l.kind === "absent" && O.size === 0n && !p) await P(t).catch(() => {});
      throw new qFr(t)
    }
    let Q = !1;
    try {
      if (!p) await u.truncate(0), Q = !0;
      await u.writeFile(e, {
        encoding: "utf8"
      });
      let b = p ? void 0 : s ?? (l.kind !== "absent" ? i : void 0);
      if (b !== void 0) await u.chmod(b).catch(() => {});
      if (a === !0) await ht(u, c === !0);
      await u.close()
    } catch (b) {
      let $t = Q && await TPo(t, O, e, b);
      if (await u.close().catch(() => {}), !Q) throw y = d !== void 0, _(b, d, "untouched");
      if (y = d !== void 0, $t) throw _(b, d, "replaced");
      let Vt = m !== void 0 && await ue(t, m, f === !0) ? "restored" : await P(t).then(() => !0, (jt) => k(jt) === "ENOENT") ? "removed" : "partial";
      throw _(b, d, Vt)
    }
    let ft = d ?? g;
    if (ft !== void 0) await P(ft).catch(() => {})
  };
  try {
    try {
      if (s !== void 0 || a === !0) {
        let l = await pe(N, s ?? v),
          m = l.fh;
        g = l.tmp;
        let u = !1,
          O;
        try {
          if (await m.writeFile(e, {
              encoding: "utf8"
            }), s !== void 0) try {
            await m.chmod(s)
          } catch (p) {
            if (!a7(p)) throw p
          }
          if (a === !0) await ht(m, c === !0)
        } catch (p) {
          u = !0, O = p
        }
        if (!u) M = !0;
        try {
          await m.close()
        } catch (p) {
          if (!u) throw y = !0, _(p, g, "untouched")
        }
        if (u) throw O
      } else g = await qO(N, e, v), M = !0
    } catch (l) {
      if (T !== !0) throw l;
      if (M) throw l;
      if (k(l) !== "EACCES") throw l;
      if (!await ae(t).then(() => !0, () => !1)) throw l;
      await lt(void 0);
      return
    }
    if (g === void 0) throw Error("staging block exited without a staging file");
    let d = g;
    try {
      let l = A ?? X;
      await V1s(d, t, (m, u) => (C(), l(m, u))), YFr(t)
    } catch (l) {
      let m = k(l);
      if (m === void 0 || !(kM.has(m) || r && !VFr.has(m))) throw l;
      if (await Q1s(l, d, t, r)) {
        g = void 0, await Kt(t, e, n, !0);
        return
      }
      await lt(d)
    }
  } catch (d) {
    if (g !== void 0 && !y) await P(g).catch(() => {});
    throw d
  }
}

function K(t) {
  try {
    St(t)
  } catch {}
}

function Z1s(t, e, n, r) {
  if (!Dt(t, e, n, r)) return !1;
  try {
    if (Et.statfsSync(U(n)).type !== Ft) return !1
  } catch {
    return !1
  }
  let i = !1;
  try {
    let o = H(xt, w.O_RDONLY | ro);
    try {
      let s = Buffer.allocUnsafe(vt),
        a = 0;
      while (a < s.length) {
        let f = oe(o, s, a, s.length - a, null);
        if (f === 0) break;
        a += f
      }
      let c = ot(ie(U(n)), rt(n));
      i = Yt(s.toString("utf8", 0, a), c)
    } finally {
      S(o)
    }
  } catch {}
  if (i) return at(n), !1;
  return K(e), D(Pt), !0
}

function Ht(t) {
  if (!It(t, !0)) return {
    kind: "unavailable"
  };
  let e;
  try {
    e = H(t, w.O_RDONLY)
  } catch (n) {
    return k(n) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    }
  }
  try {
    let n = et(e);
    if (!n.isFile() || n.size > aVn) return {
      kind: "unavailable"
    };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(re(e)),
      mode: n.mode & 4095
    }
  } catch {
    return {
      kind: "unavailable"
    }
  } finally {
    try {
      S(e)
    } catch {}
  }
}

function Ee(t, e) {
  if (!It(t, !0)) return !1;
  let n;
  try {
    n = H(t, "w", e.mode)
  } catch {
    return !1
  }
  let r = !1;
  try {
    if (!et(n).isFile()) return r = !0, S(n), !1;
    nt(n, e.bytes);
    try {
      yt(n, e.mode)
    } catch {}
    return r = !0, S(n), !0
  } catch {
    if (!r) try {
      S(n)
    } catch {}
    return !1
  }
}

function Xt(t, e) {
  if (e !== "win32") return !1;
  try {
    return B(t), !0
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
      cause: n
    }
  }
}

function Ina(t, e = "win32") {
  let n = Xt(t, e);
  if (n === !0) throw z(t, n);
  if (n !== !1) throw n.cause
}

function ge(t, e, n, r = "win32") {
  for (let i = 1;; i++) {
    let o = fP(t),
      s = Xt(o, r);
    if (s !== !1) {
      if (i < Y) continue;
      throw z(o, s)
    }
    try {
      return nt(o, e, {
        encoding: "utf8",
        mode: n,
        flag: "wx"
      }), o
    } catch (a) {
      if (k(a) === "EEXIST") {
        if (i < Y) continue;
        throw a
      }
      throw K(o), a
    }
  }
}

function ZU(t, e, n, r) {
  Jt(t, e, n, r, !1)
}

function Jt(t, e, n, r, i) {
  let o = !1,
    s;
  try {
    s = ge(t, e, n);
    try {
      K1s(s, t, r), YFr(t)
    } catch (a) {
      let c = k(a);
      if (c === void 0 || !(kM.has(c) || i && !VFr.has(c))) throw a;
      if (Z1s(a, s, t, i)) {
        s = void 0, Jt(t, e, n, r, !0);
        return
      }
      let f = Ht(t),
        T = f.kind === "snapshot" ? f : void 0,
        h = H(t, w.O_WRONLY | w.O_CREAT, n),
        A = !1,
        E;
      {
        try {
          E = et(h, {
            bigint: !0
          })
        } catch (N) {
          try {
            S(h)
          } catch {}
          throw o = !0, _(N, s, "untouched")
        }
        if (A = E.isCharacterDevice(), !E.isFile() && !A) {
          try {
            S(h)
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: t
          })
        }
        if (!A && E.nlink > 1n && zFr()) {
          try {
            S(h)
          } catch {}
          throw _t(t, Number(E.nlink))
        }
      }
      let v = !1,
        C = !1;
      try {
        if (!A) ne(h, 0), C = !0;
        if (nt(h, e, {
            encoding: "utf8"
          }), n !== void 0 && f.kind !== "absent" && !A) try {
          yt(h, n)
        } catch {}
        v = !0, S(h)
      } catch (N) {
        let ct = C && CPo(t, E, e, N);
        if (!v) try {
          S(h)
        } catch {}
        if (!C) throw o = !0, _(N, s, "untouched");
        if (o = !0, ct) throw _(N, s, "replaced");
        let g = T !== void 0 && Ee(t, T),
          y = "partial";
        if (g) y = "restored";
        else try {
          St(t), y = "removed"
        } catch (M) {
          y = k(M) === "ENOENT" ? "removed" : "partial"
        }
        throw _(N, s, y)
      }
      K(s)
    }
  } catch (a) {
    if (s !== void 0 && !o) K(s);
    throw a
  }
}
export {
  bnt,
  kPo,
  cme,
  ZV,
  Rna,
  vPo,
  ro,
  vxe,
  u0,
  Ana,
  xna,
  Pna,
  o$e,
  hjt,
  KO,
  kM,
  zFr,
  G1s,
  OH,
  fP,
  jA,
  GFr,
  EPo,
  AC,
  Is,
  Bqe,
  V1s,
  Ona,
  K1s,
  q1s,
  VFr,
  aVn,
  KFr,
  Y1s,
  TPo,
  CPo,
  a7,
  qFr,
  qO,
  X1s,
  SN,
  J1s,
  f0,
  YFr,
  Q1s,
  zn,
  eK,
  Z1s,
  Ina,
  ZU
};
