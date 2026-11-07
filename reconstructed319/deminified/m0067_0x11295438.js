// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { fY } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { randomBytes as ee } from "crypto";
import * as Et from "fs";
import * as gt from "fs/promises";
import { closeSync as S, constants as w, fchmodSync as yt, fstatSync as et, ftruncateSync as ne, lstatSync as B, openSync as H, readFileSync as re, readSync as oe, realpathSync as ie, renameSync as Ot, unlinkSync as St, writeFileSync as nt } from "fs";
import { lstat as L, open as I, realpath as se, rename as X, stat as ae, unlink as P, writeFile as Nt } from "fs/promises";
import { basename as rt, dirname as U, isAbsolute as bt, join as ot } from "path";
import { constants as F, createWriteStream as ut } from "fs";
import { copyFile as Gt, lstat as Z, open as q, readlink as zt } from "fs/promises";
import { join as Qt } from "path";
import { pipeline as dt } from "stream/promises";
async function bnt(t, e, n) {
  let O_NOFOLLOW = F.O_NOFOLLOW;
  if (O_NOFOLLOW === void 0 || x() === "windows") {
    if (!(await Z(t)).isFile()) throw kPo(t);
    await Gt(t, e, n?.exclusive ? F.COPYFILE_EXCL : 0);
    return;
  }
  let i = await q(t, F.O_RDONLY | O_NOFOLLOW | (n?.nonBlocking ? F.O_NONBLOCK ?? 0 : 0));
  try {
    let o = await i.stat();
    if (!o.isFile()) throw kPo(t);
    if (n?.exactMode) {
      let s = await q(e, n.exclusive ? "wx" : "w", o.mode);
      try {
        await dt(i.createReadStream(), ut(e, {
          fd: s.fd,
          autoClose: !1
        })), await s.chmod(o.mode & 4095);
      } finally {
        await s.close();
      }
    } else await dt(i.createReadStream(), ut(e, {
      mode: o.mode,
      flags: n?.exclusive ? "wx" : "w"
    }));
  } finally {
    await i.close();
  }
}
function kPo(t) {
  return new R(`Refusing to copy ${t}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy");
}
var qt = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function cme(t, e, n) {
  let r = c => {
      let f = k(c);
      if (n?.throwTransient && (f === void 0 || !qt.has(f))) throw c;
      return null;
    },
    i = x() === "windows",
    o = i ? void 0 : F.O_NOFOLLOW,
    s = i ? 0 : F.O_NONBLOCK ?? 0;
  if (o === void 0) {
    let c = await Z(t).catch(r);
    if (c === null || !c.isFile()) return null;
  }
  let a;
  try {
    a = await q(t, F.O_RDONLY | (o ?? 0) | s);
  } catch (error) {
    return r(error);
  }
  try {
    let c = await a.stat();
    if (!c.isFile() || c.size > e || n?.oneName && c.nlink > 1) return null;
    let {
      buffer: buffer,
      bytesRead: bytesRead
    } = await a.read(Buffer.alloc(e + 1), 0, e + 1, 0);
    if (bytesRead > e) return null;
    return buffer.subarray(0, bytesRead).toString("utf-8");
  } catch (error) {
    return r(error);
  } finally {
    await a.close();
  }
}
async function ZV(t, e) {
  let n = Qt(t, e);
  try {
    return await zt(n), !1;
  } catch (error) {
    if (k(error) === "EINVAL") return !(await Z(n)).isSymbolicLink();
    throw error;
  }
}
var mt = !1;
function Rna() {
  mt = !0;
}
function wt() {
  return mt;
}
function Zt() {
  return !1;
}
function vPo({
  served: served
}) {
  if (!wt()) return !1;
  return served ? !1 : Zt();
}
var ro = 0,
  vxe = 0,
  u0 = 0,
  Ana = 0;
var pt = new Set("drvfs 9p virtiofs cifs smb3 smbfs nfs nfs4 ntfs ntfs3 fuseblk vfat exfat msdos".split(" ")),
  te = new Set(["ext2 ext3 ext4 xfs btrfs zfs f2fs jfs reiserfs nilfs2 bcachefs tmpfs ramfs rootfs squashfs erofs", "proc sysfs devtmpfs devpts mqueue hugetlbfs cgroup cgroup2 pstore bpf debugfs tracefs securityfs", "configfs fusectl binfmt_misc nsfs rpc_pipefs efivarfs selinuxfs nfsd"].flatMap(item => item.split(" ")));
function xna(t) {
  let e = tt(t.fstype, "."),
    n = o$e(t.source ?? "");
  return pt.has(t.fstype) || pt.has(e) || e === "fuse" || !te.has(t.fstype) || /^[A-Za-z]:/.test(n) || /^(\\\\|\/\/)/.test(n) || /^[^/\s]+:\//.test(n) || /(^|,)aname=drvfs/.test(t.options ?? "");
}
function Pna(t, e) {
  return t === "drvfs" || t === "9p" && /(^|,)aname=drvfs(?=[,;]|$)/.test(e);
}
function o$e(t) {
  return t.replace(/\\([0-7]{3})/g, (e, n) => String.fromCharCode(parseInt(n, 8)));
}
function hjt(t, e) {
  return t === e || t.startsWith(e === "/" ? "/" : `${e}/`);
}
var KO = ".cc-writes",
  kM = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);
function zFr() {
  return vPo({
    served: !1
  });
}
function G1s(t, e) {
  return `Could not rewrite ${t} in place: this file has other names on disk (it is hard-linked, ${e} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function _t(path, e) {
  return Object.assign(new R(G1s(path, e), "in-place write refused: the target has other names (a hard link)"), {
    code: "EMLINK",
    path: path
  });
}
var OH = new Set(["EPERM", "EBUSY", "EACCES"]);
function fP(t) {
  return `${t}.tmp.${ee(4).toString("hex")}`;
}
function jA(t, e) {
  let n = `${e}.tmp.`;
  return t.startsWith(n) && /^[0-9a-f]{8}$/.test(t.slice(n.length));
}
function GFr(t) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(t);
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
  j = he(new Set(), t => t.clear()),
  Ft = 26985,
  Pt = 50,
  xt = "/proc/self/mounts",
  vt = 1048576,
  Ct = he(new Set(), t => t.clear()),
  int32Array = new Int32Array(new SharedArrayBuffer(4));
function D(t) {
  Atomics.wait(int32Array, 0, 0, t);
}
function W(t, e, n = Tt - 1) {
  let r = k(t);
  return r !== void 0 && OH.has(r) && e < n;
}
var G = 128;
async function le(t) {
  try {
    return ((await L(t)).mode & G) === 0;
  } catch {
    return !1;
  }
}
async function AC(t, e, n = Rt) {
  let r = !1;
  for (let i = 0;; i++) try {
    return await t(), r;
  } catch (error) {
    if (W(error, i, n.length)) {
      if (i === 0 && e !== void 0 && (await le(e))) throw error;
      r = !0, await J(n[i]);
      continue;
    }
    throw error;
  }
}
function Is(t, e, n = X) {
  return AC(() => n(t, e), e);
}
function Bqe(t, e, n = X) {
  return AC(() => n(t, e), e, EPo);
}
function Lt(t, e) {
  let n = k(t);
  if (n !== void 0 && OH.has(n) && bt(e)) j.add(e);
}
async function V1s(t, e, n = X, r = !1) {
  let i = async () => n(t, e),
    o = !r && !j.has(e);
  try {
    return await i(), !1;
  } catch (error) {
    if (!W(error, 0)) throw error;
    try {
      if (((await L(e)).mode & G) === 0) throw error;
    } catch (a) {
      if (a === error) throw error;
      o &&= k(a) !== "ENOENT";
    }
  }
  await J(V);
  try {
    return await AC(i, void 0, o ? it : At), !0;
  } catch (error) {
    if (o) Lt(error, e);
    throw error;
  }
}
function fe(t) {
  try {
    return (B(t).mode & G) === 0;
  } catch {
    return !1;
  }
}
function Ona(t, e, n = Ot) {
  let r = !1;
  for (let i = 0;; i++) try {
    return n(t, e), r;
  } catch (error) {
    if (W(error, i)) {
      if (i === 0 && fe(e)) throw error;
      r = !0, D(V);
      continue;
    }
    throw error;
  }
}
function K1s(t, e, n = Ot) {
  let r = !j.has(e);
  try {
    return n(t, e), !1;
  } catch (error) {
    if (!W(error, 0)) throw error;
    try {
      if ((B(e).mode & G) === 0) throw error;
    } catch (s) {
      if (s === error) throw error;
      r &&= k(s) !== "ENOENT";
    }
  }
  D(V);
  let i = r ? it : At;
  for (let o = 0;; o++) try {
    return n(t, e), !0;
  } catch (error) {
    if (!W(error, o, i.length)) {
      if (r) Lt(error, e);
      throw error;
    }
    D(i[o]);
  }
}
var q1s = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  VFr = new Set([...q1s, "EROFS", "ENOENT"]),
  aVn = 67108864,
  KFr = 0;
async function kt(t, e, n = "win32") {
  return (await Y1s(t, e, n)).kind === "pass";
}
async function Y1s(t, e, n = "win32") {
  if (n !== "win32") return {
    kind: "pass"
  };
  try {
    return {
      kind: (await L(t)).isFile() ? "pass" : "refuse"
    };
  } catch (error_2) {
    if (k(error_2) === "ENOENT") return {
      kind: e ? "pass" : "refuse"
    };
    return {
      kind: "failed",
      error: error_2
    };
  }
}
function It(t, e, n = "win32") {
  if (n !== "win32") return !0;
  try {
    return B(t).isFile();
  } catch (error) {
    return e && k(error) === "ENOENT";
  }
}
async function Mt(t, e = !1) {
  if (!e && !(await kt(t, !0))) return {
    kind: "unavailable"
  };
  let n;
  try {
    n = await I(t, w.O_RDONLY);
  } catch (error) {
    return k(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
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
    };
  } catch {
    return {
      kind: "unavailable"
    };
  } finally {
    await n.close().catch(() => {});
  }
}
async function ue(t, e, n = !1) {
  if (!n && !(await kt(t, !0))) return !1;
  let r;
  try {
    r = await I(t, "w", e.mode);
  } catch {
    return !1;
  }
  try {
    if (!(await r.stat()).isFile()) return await r.close().catch(() => {}), !1;
    return await r.writeFile(e.bytes), await r.chmod(e.mode).catch(() => {}), await r.close(), !0;
  } catch {
    return await r.close().catch(() => {}), !1;
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
    return o.kind === "snapshot" && !Wt(o.bytes, n);
  } catch {
    return !1;
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
    return o.kind === "snapshot" && !Wt(o.bytes, n);
  } catch {
    return !1;
  }
}
function Wt(t, e) {
  let n = typeof e === "string" ? Buffer.from(e) : e;
  return t.length <= n.length && Buffer.compare(t, n.subarray(0, t.length)) === 0;
}
var de = {
  restored: "original target restored",
  removed: "partial target removed",
  partial: "target left partial \u2014 treat contents as torn",
  untouched: "target untouched",
  replaced: "another writer's file left at the target"
};
function _(t, preservedTmp, targetOutcome) {
  try {
    if (t instanceof Error) t.message = `${t.message}; ${preservedTmp !== void 0 ? `new contents preserved at ${preservedTmp}; ` : ""}${de[targetOutcome]}`, Object.assign(t, {
      ...(preservedTmp !== void 0 && {
        preservedTmp: preservedTmp
      }),
      targetOutcome: targetOutcome
    });
  } catch {}
  return t;
}
function a7(t) {
  let e = k(t);
  return e === "EINVAL" || e === "ENOTSUP" || e === "EPERM" || e === "ENOSYS";
}
async function ht(t, e) {
  try {
    await t.sync();
  } catch (error) {
    if (!a7(error) && !(e && k(error) === "EBADF")) throw error;
  }
}
class PublishRefusedError extends Error {
  target;
  constructor(t) {
    super("beforePublish refused the write; nothing was published");
    this.target = t;
    this.name = "PublishRefusedError";
  }
}
async function me(t, e) {
  return t;
  try {
    await (await I(e, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close();
  } catch (error) {
    switch (k(error)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return t;
      case "EACCES":
      case "EPERM":
        if (await we(e)) return t;
        throw error;
      default:
        throw error;
    }
  }
}
async function we(t) {
  let e = process.getuid?.();
  if (e === void 0) return !1;
  try {
    return (await L(t)).uid !== e;
  } catch {
    return !1;
  }
}
var Y = 3;
async function Bt(t, e) {
  if (e !== "win32") return !1;
  try {
    return await L(t), !0;
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
      cause: n
    };
  }
}
function z(path_2, e) {
  return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof e === "object" ? {
    cause: e.cause
  } : void 0), {
    code: "EEXIST",
    syscall: "lstat",
    path: path_2
  });
}
async function st(t, e, n) {
  for (let r = 1;; r++) {
    let i = fP(t),
      o = await Bt(i, e);
    if (o !== !1) {
      if (r < Y) continue;
      throw z(i, o);
    }
    try {
      return await n(i);
    } catch (error) {
      if (k(error) === "EEXIST" && r < Y) continue;
      throw error;
    }
  }
}
async function qO(t, e, mode, r = "win32") {
  return st(t, r, async i => {
    try {
      return await Nt(i, e, {
        encoding: "utf8",
        mode: mode,
        flag: "wx"
      }), i;
    } catch (error) {
      if (k(error) !== "EEXIST") await P(i).catch(() => {});
      throw error;
    }
  });
}
var Ut = {
  exclusive: !0,
  exactMode: !1,
  nonBlocking: !0
};
async function X1s(t, e, n = "win32") {
  return st(e, n, async r => {
    try {
      return await bnt(t, r, Ut), r;
    } catch (error) {
      if (k(error) !== "EEXIST") await P(r).catch(() => {});
      throw error;
    }
  });
}
async function pe(t, e, n = "win32") {
  return st(t, n, async tmp => ({
    fh: await I(tmp, n === "win32" ? "wx" : w.O_WRONLY | w.O_CREAT | w.O_EXCL, e),
    tmp: tmp
  }));
}
async function SN(t, e, mode_2, r = "win32") {
  await f0(t, r), await Nt(t, e, {
    encoding: "utf8",
    mode: mode_2,
    flag: "wx"
  });
}
async function J1s(t, e, n = "win32") {
  await f0(e, n), await bnt(t, e, Ut);
}
async function f0(t, e = "win32") {
  let n = await Bt(t, e);
  if (n === !0) throw z(t, n);
  if (n !== !1) throw n.cause;
}
function at(t) {
  if (bt(t) && !t.startsWith("/proc/")) Ct.add(t);
}
function YFr(t) {
  Ct.delete(t), j.delete(t);
}
function Dt(t, e, n, r) {
  return !1;
}
function Yt(t, e) {
  return t.split(`
`).some(item => o$e(item.split(" ")[1] ?? "") === e);
}
async function Q1s(t, e, n, r) {
  if (!Dt(t, e, n, r)) return !1;
  try {
    if ((await gt.statfs(U(n))).type !== Ft) return !1;
  } catch {
    return !1;
  }
  let i = !1;
  try {
    let o = await I(xt, w.O_RDONLY | ro);
    try {
      let s = Buffer.allocUnsafe(vt),
        a = 0;
      while (a < s.length) {
        let {
          bytesRead: bytesRead_2
        } = await o.read(s, a, s.length - a, null);
        if (bytesRead_2 === 0) break;
        a += bytesRead_2;
      }
      let c = ot(await se(U(n)), rt(n));
      i = Yt(s.toString("utf8", 0, a), c);
    } finally {
      await o.close();
    }
  } catch {}
  if (i) return at(n), !1;
  return await P(e).catch(() => {}), await J(Pt), !0;
}
async function zn(t, e, mode_3, renameFn) {
  return eK(t, e, {
    mode: mode_3,
    renameFn: renameFn
  });
}
function eK(t, e, n) {
  return Kt(t, e, n, !1);
}
async function Kt(path_3, e, n, r) {
  let {
      mode: mode_4,
      createMode: createMode,
      exactMode: exactMode,
      flush: flush,
      flushForgivesEbadf: flushForgivesEbadf,
      followSymlinks: followSymlinks,
      inPlaceOnTempCreateRefused: inPlaceOnTempCreateRefused,
      stagingDir: stagingDir,
      renameFn: renameFn_2,
      beforePublish: beforePublish
    } = n,
    v = mode_4 ?? createMode,
    C = () => {
      if (beforePublish !== void 0 && !beforePublish()) throw new PublishRefusedError(path_3);
    },
    N = await me(path_3, stagingDir),
    ct = 0,
    g,
    y = !1,
    M = !1,
    lt = async d => {
      let l = await Mt(path_3, followSymlinks === !0),
        m = l.kind === "snapshot" ? l : void 0;
      C();
      let u = await I(path_3, w.O_WRONLY | w.O_CREAT, exactMode ?? v),
        O;
      try {
        O = await u.stat({
          bigint: !0
        });
      } catch (error) {
        throw await u.close().catch(() => {}), y = d !== void 0, _(error, d, "untouched");
      }
      let p = O.isCharacterDevice();
      if (!O.isFile() && !p) throw await u.close().catch(() => {}), Object.assign(Error("refusing the in-place arm on a non-regular target"), {
        code: "ENXIO",
        path: path_3
      });
      if (!p && O.nlink > 1n && zFr()) throw await u.close().catch(() => {}), _t(path_3, Number(O.nlink));
      if (beforePublish !== void 0 && !beforePublish()) {
        if (await u.close().catch(() => {}), l.kind === "absent" && O.size === 0n && !p) await P(path_3).catch(() => {});
        throw new PublishRefusedError(path_3);
      }
      let Q = !1;
      try {
        if (!p) await u.truncate(0), Q = !0;
        await u.writeFile(e, {
          encoding: "utf8"
        });
        let b = p ? void 0 : exactMode ?? (l.kind !== "absent" ? mode_4 : void 0);
        if (b !== void 0) await u.chmod(b).catch(() => {});
        if (flush === !0) await ht(u, flushForgivesEbadf === !0);
        await u.close();
      } catch (error) {
        let $t = Q && (await TPo(path_3, O, e, error));
        if (await u.close().catch(() => {}), !Q) throw y = d !== void 0, _(error, d, "untouched");
        if (y = d !== void 0, $t) throw _(error, d, "replaced");
        let Vt = m !== void 0 && (await ue(path_3, m, followSymlinks === !0)) ? "restored" : (await P(path_3).then(() => !0, jt => k(jt) === "ENOENT")) ? "removed" : "partial";
        throw _(error, d, Vt);
      }
      let ft = d ?? g;
      if (ft !== void 0) await P(ft).catch(() => {});
    };
  try {
    try {
      if (exactMode !== void 0 || flush === !0) {
        let l = await pe(N, exactMode ?? v),
          fh = l.fh;
        g = l.tmp;
        let u = !1,
          O;
        try {
          if (await fh.writeFile(e, {
            encoding: "utf8"
          }), exactMode !== void 0) try {
            await fh.chmod(exactMode);
          } catch (error) {
            if (!a7(error)) throw error;
          }
          if (flush === !0) await ht(fh, flushForgivesEbadf === !0);
        } catch (error) {
          u = !0, O = error;
        }
        if (!u) M = !0;
        try {
          await fh.close();
        } catch (error) {
          if (!u) throw y = !0, _(error, g, "untouched");
        }
        if (u) throw O;
      } else g = await qO(N, e, v), M = !0;
    } catch (error) {
      if (inPlaceOnTempCreateRefused !== !0) throw error;
      if (M) throw error;
      if (k(error) !== "EACCES") throw error;
      if (!(await ae(path_3).then(() => !0, () => !1))) throw error;
      await lt(void 0);
      return;
    }
    if (g === void 0) throw Error("staging block exited without a staging file");
    let d = g;
    try {
      let l = renameFn_2 ?? X;
      await V1s(d, path_3, (m, u) => (C(), l(m, u))), YFr(path_3);
    } catch (error) {
      let m = k(error);
      if (m === void 0 || !(kM.has(m) || r && !VFr.has(m))) throw error;
      if (await Q1s(error, d, path_3, r)) {
        g = void 0, await Kt(path_3, e, n, !0);
        return;
      }
      await lt(d);
    }
  } catch (error) {
    if (g !== void 0 && !y) await P(g).catch(() => {});
    throw error;
  }
}
function K(t) {
  try {
    St(t);
  } catch {}
}
function Z1s(t, e, n, r) {
  if (!Dt(t, e, n, r)) return !1;
  try {
    if (Et.statfsSync(U(n)).type !== Ft) return !1;
  } catch {
    return !1;
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
        a += f;
      }
      let c = ot(ie(U(n)), rt(n));
      i = Yt(s.toString("utf8", 0, a), c);
    } finally {
      S(o);
    }
  } catch {}
  if (i) return at(n), !1;
  return K(e), D(Pt), !0;
}
function Ht(t) {
  if (!It(t, !0)) return {
    kind: "unavailable"
  };
  let e;
  try {
    e = H(t, w.O_RDONLY);
  } catch (error) {
    return k(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
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
    };
  } catch {
    return {
      kind: "unavailable"
    };
  } finally {
    try {
      S(e);
    } catch {}
  }
}
function Ee(t, e) {
  if (!It(t, !0)) return !1;
  let n;
  try {
    n = H(t, "w", e.mode);
  } catch {
    return !1;
  }
  let r = !1;
  try {
    if (!et(n).isFile()) return r = !0, S(n), !1;
    nt(n, e.bytes);
    try {
      yt(n, e.mode);
    } catch {}
    return r = !0, S(n), !0;
  } catch {
    if (!r) try {
      S(n);
    } catch {}
    return !1;
  }
}
function Xt(t, e) {
  if (e !== "win32") return !1;
  try {
    return B(t), !0;
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
      cause: n
    };
  }
}
function Ina(t, e = "win32") {
  let n = Xt(t, e);
  if (n === !0) throw z(t, n);
  if (n !== !1) throw n.cause;
}
function ge(t, e, mode_5, r = "win32") {
  for (let i = 1;; i++) {
    let o = fP(t),
      s = Xt(o, r);
    if (s !== !1) {
      if (i < Y) continue;
      throw z(o, s);
    }
    try {
      return nt(o, e, {
        encoding: "utf8",
        mode: mode_5,
        flag: "wx"
      }), o;
    } catch (error) {
      if (k(error) === "EEXIST") {
        if (i < Y) continue;
        throw error;
      }
      throw K(o), error;
    }
  }
}
function ZU(t, e, n, r) {
  Jt(t, e, n, r, !1);
}
function Jt(path_4, e, n, r, i) {
  let o = !1,
    s;
  try {
    s = ge(path_4, e, n);
    try {
      K1s(s, path_4, r), YFr(path_4);
    } catch (error) {
      let c = k(error);
      if (c === void 0 || !(kM.has(c) || i && !VFr.has(c))) throw error;
      if (Z1s(error, s, path_4, i)) {
        s = void 0, Jt(path_4, e, n, r, !0);
        return;
      }
      let f = Ht(path_4),
        T = f.kind === "snapshot" ? f : void 0,
        h = H(path_4, w.O_WRONLY | w.O_CREAT, n),
        A = !1,
        E;
      {
        try {
          E = et(h, {
            bigint: !0
          });
        } catch (error) {
          try {
            S(h);
          } catch {}
          throw o = !0, _(error, s, "untouched");
        }
        if (A = E.isCharacterDevice(), !E.isFile() && !A) {
          try {
            S(h);
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: path_4
          });
        }
        if (!A && E.nlink > 1n && zFr()) {
          try {
            S(h);
          } catch {}
          throw _t(path_4, Number(E.nlink));
        }
      }
      let v = !1,
        C = !1;
      try {
        if (!A) ne(h, 0), C = !0;
        if (nt(h, e, {
          encoding: "utf8"
        }), n !== void 0 && f.kind !== "absent" && !A) try {
          yt(h, n);
        } catch {}
        v = !0, S(h);
      } catch (error) {
        let ct = C && CPo(path_4, E, e, error);
        if (!v) try {
          S(h);
        } catch {}
        if (!C) throw o = !0, _(error, s, "untouched");
        if (o = !0, ct) throw _(error, s, "replaced");
        let g = T !== void 0 && Ee(path_4, T),
          y = "partial";
        if (g) y = "restored";else try {
          St(path_4), y = "removed";
        } catch (error) {
          y = k(error) === "ENOENT" ? "removed" : "partial";
        }
        throw _(error, s, y);
      }
      K(s);
    }
  } catch (error) {
    if (s !== void 0 && !o) K(s);
    throw error;
  }
}
export { bnt, kPo, cme, ZV, Rna, vPo, ro, vxe, u0, Ana, xna, Pna, o$e, hjt, KO, kM, zFr, G1s, OH, fP, jA, GFr, EPo, AC, Is, Bqe, V1s, Ona, K1s, q1s, VFr, aVn, KFr, Y1s, TPo, CPo, a7, PublishRefusedError as qFr, qO, X1s, SN, J1s, f0, YFr, Q1s, zn, eK, Z1s, Ina, ZU };