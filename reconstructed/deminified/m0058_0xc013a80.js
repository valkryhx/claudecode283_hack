// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { P, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { constants as _, createWriteStream as q } from "fs";
import { copyFile as ye, lstat as U, open as M, readlink as Ee } from "fs/promises";
import { join as ge } from "path";
import { pipeline as Z } from "stream/promises";
async function sxe(e, t, n) {
  let O_NOFOLLOW = _.O_NOFOLLOW;
  if (O_NOFOLLOW === void 0 || O() === "windows") {
    if (!(await U(e)).isFile()) throw h5n(e);
    await ye(e, t, n?.exclusive ? _.COPYFILE_EXCL : 0);
    return;
  }
  let o = await M(e, _.O_RDONLY | O_NOFOLLOW | (n?.nonBlocking ? _.O_NONBLOCK ?? 0 : 0));
  try {
    let i = await o.stat();
    if (!i.isFile()) throw h5n(e);
    if (n?.exactMode) {
      let a = await M(t, n.exclusive ? "wx" : "w", i.mode);
      try {
        await Z(o.createReadStream(), q(t, {
          fd: a.fd,
          autoClose: !1
        })), await a.chmod(i.mode & 4095);
      } finally {
        await a.close();
      }
    } else await Z(o.createReadStream(), q(t, {
      mode: i.mode,
      flags: n?.exclusive ? "wx" : "w"
    }));
  } finally {
    await o.close();
  }
}
function h5n(e) {
  return new P(`Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy");
}
var Se = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function JUe(e, t, n) {
  let r = s => {
      let g = v(s);
      if (n?.throwTransient && (g === void 0 || !Se.has(g))) throw s;
      return null;
    },
    o = O() === "windows",
    i = o ? void 0 : _.O_NOFOLLOW,
    a = o ? 0 : _.O_NONBLOCK ?? 0;
  if (i === void 0) {
    let s = await U(e).catch(r);
    if (s === null || !s.isFile()) return null;
  }
  let f;
  try {
    f = await M(e, _.O_RDONLY | (i ?? 0) | a);
  } catch (error) {
    return r(error);
  }
  try {
    let s = await f.stat();
    if (!s.isFile() || s.size > t) return null;
    let {
      buffer: buffer,
      bytesRead: bytesRead
    } = await f.read(Buffer.alloc(t + 1), 0, t + 1, 0);
    if (bytesRead > t) return null;
    return buffer.subarray(0, bytesRead).toString("utf-8");
  } catch (error) {
    return r(error);
  } finally {
    await f.close();
  }
}
async function zJ(e, t) {
  let n = ge(e, t);
  try {
    return await Ee(n), !1;
  } catch (error) {
    if (v(error) === "EINVAL") return !(await U(n)).isSymbolicLink();
    throw error;
  }
}
var ee = !1;
function gUo() {
  ee = !0;
}
function te() {
  return ee;
}
import { randomBytes as Te } from "crypto";
import { closeSync as N, constants as p, fchmodSync as ne, fstatSync as H, ftruncateSync as be, lstatSync as J, openSync as K, readFileSync as _e, renameSync as Re, unlinkSync as re, writeFileSync as X } from "fs";
import { lstat as I, open as x, rename as ie, stat as Pe, unlink as F, writeFile as oe } from "fs/promises";
import { basename as Ce, join as Fe } from "path";
function Ne() {
  return !1;
}
function y5n({
  served: served
}) {
  if (!te()) return !1;
  return served ? !1 : Ne();
}
var ND = ".cc-writes",
  XS = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);
function hhn() {
  return y5n({
    served: !1
  });
}
function vzr(e, t) {
  return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function ae(path, t) {
  return Object.assign(new P(vzr(path, t), "in-place write refused: the target has other names (a hard link)"), {
    code: "EMLINK",
    path: path
  });
}
var nT = new Set(["EPERM", "EBUSY", "EACCES"]);
function Yx(e) {
  return `${e}.tmp.${Te(4).toString("hex")}`;
}
function TC(e, t) {
  let n = `${t}.tmp.`;
  return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length));
}
function yhn(e) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e);
}
var ve = 4,
  se = 50,
  int32Array = new Int32Array(new SharedArrayBuffer(4));
function xe(e) {
  Atomics.wait(int32Array, 0, 0, e);
}
function ce(e, t) {
  let n = v(e);
  return n !== void 0 && nT.has(n) && t < ve - 1;
}
var le = 128;
async function Ae(e) {
  try {
    return ((await I(e)).mode & le) === 0;
  } catch {
    return !1;
  }
}
async function E2(e, t) {
  let n = !1;
  for (let r = 0;; r++) try {
    return await e(), n;
  } catch (error) {
    if (ce(error, r)) {
      if (r === 0 && t !== void 0 && (await Ae(t))) throw error;
      n = !0, await Q(se);
      continue;
    }
    throw error;
  }
}
function Bo(e, t, n = ie) {
  return E2(() => n(e, t), t);
}
function Le(e) {
  try {
    return (J(e).mode & le) === 0;
  } catch {
    return !1;
  }
}
function kzr(e, t, n = Re) {
  let r = !1;
  for (let o = 0;; o++) try {
    return n(e, t), r;
  } catch (error) {
    if (ce(error, o)) {
      if (o === 0 && Le(t)) throw error;
      r = !0, xe(se);
      continue;
    }
    throw error;
  }
}
var hUo = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  fe = 67108864,
  _hn = 0;
async function ue(e, t, n = "win32") {
  return (await Ie(e, t, n)).kind === "pass";
}
async function Ie(e, t, n = "win32") {
  if (n !== "win32") return {
    kind: "pass"
  };
  try {
    return {
      kind: (await I(e)).isFile() ? "pass" : "refuse"
    };
  } catch (error_2) {
    if (v(error_2) === "ENOENT") return {
      kind: t ? "pass" : "refuse"
    };
    return {
      kind: "failed",
      error: error_2
    };
  }
}
function de(e, t, n = "win32") {
  if (n !== "win32") return !0;
  try {
    return J(e).isFile();
  } catch (error) {
    return t && v(error) === "ENOENT";
  }
}
async function We(e, t = !1) {
  if (!t && !(await ue(e, !0))) return {
    kind: "unavailable"
  };
  let n;
  try {
    n = await x(e, p.O_RDONLY);
  } catch (error) {
    return v(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
  }
  try {
    let r = await n.stat();
    if (!r.isFile() || r.size > fe) return {
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
async function Ye(e, t, n = !1) {
  if (!n && !(await ue(e, !0))) return !1;
  let r;
  try {
    r = await x(e, "w", t.mode);
  } catch {
    return !1;
  }
  try {
    if (!(await r.stat()).isFile()) return await r.close().catch(() => {}), !1;
    return await r.writeFile(t.bytes), await r.chmod(t.mode).catch(() => {}), await r.close(), !0;
  } catch {
    return await r.close().catch(() => {}), !1;
  }
}
function R(e, preservedTmp, targetOutcome) {
  try {
    if (e instanceof Error) e.message = `${e.message}; ${preservedTmp !== void 0 ? `new contents preserved at ${preservedTmp}; ` : ""}${targetOutcome === "restored" ? "original target restored" : targetOutcome === "removed" ? "partial target removed" : targetOutcome === "untouched" ? "target untouched" : "target left partial \u2014 treat contents as torn"}`, Object.assign(e, {
      ...(preservedTmp !== void 0 && {
        preservedTmp: preservedTmp
      }),
      targetOutcome: targetOutcome
    });
  } catch {}
  return e;
}
function ixe(e) {
  let t = v(e);
  return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS";
}
class PublishRefusedError extends Error {
  target;
  constructor(e) {
    super("beforePublish refused the write; nothing was published");
    this.target = e;
    this.name = "PublishRefusedError";
  }
}
async function Be(e, t) {
  return e;
  try {
    await (await x(t, p.O_RDONLY | p.O_DIRECTORY | p.O_NOFOLLOW)).close();
  } catch (error) {
    switch (v(error)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return e;
      case "EACCES":
      case "EPERM":
        if (await Me(t)) return e;
        throw error;
      default:
        throw error;
    }
  }
}
async function Me(e) {
  let t = process.getuid?.();
  if (t === void 0) return !1;
  try {
    return (await I(e)).uid !== t;
  } catch {
    return !1;
  }
}
var L = 3;
async function we(e, t) {
  if (t !== "win32") return !1;
  try {
    return await I(e), !0;
  } catch (n) {
    return v(n) === "ENOENT" ? !1 : {
      cause: n
    };
  }
}
function W(path_2, t) {
  return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof t === "object" ? {
    cause: t.cause
  } : void 0), {
    code: "EEXIST",
    syscall: "lstat",
    path: path_2
  });
}
async function V(e, t, n) {
  for (let r = 1;; r++) {
    let o = Yx(e),
      i = await we(o, t);
    if (i !== !1) {
      if (r < L) continue;
      throw W(o, i);
    }
    try {
      return await n(o);
    } catch (error) {
      if (v(error) === "EEXIST" && r < L) continue;
      throw error;
    }
  }
}
async function ZN(e, t, mode, r = "win32") {
  return V(e, r, async o => {
    try {
      return await oe(o, t, {
        encoding: "utf8",
        mode: mode,
        flag: "wx"
      }), o;
    } catch (error) {
      if (v(error) !== "EEXIST") await F(o).catch(() => {});
      throw error;
    }
  });
}
var me = {
  exclusive: !0,
  exactMode: !1,
  nonBlocking: !0
};
async function yUo(e, t, n = "win32") {
  return V(t, n, async r => {
    try {
      return await sxe(e, r, me), r;
    } catch (error) {
      if (v(error) !== "EEXIST") await F(r).catch(() => {});
      throw error;
    }
  });
}
async function Ue(e, t, n = "win32") {
  return V(e, n, async tmp => ({
    fh: await x(tmp, n === "win32" ? "wx" : p.O_WRONLY | p.O_CREAT | p.O_EXCL, t),
    tmp: tmp
  }));
}
async function A$(e, t, mode_2, r = "win32") {
  await x$(e, r), await oe(e, t, {
    encoding: "utf8",
    mode: mode_2,
    flag: "wx"
  });
}
async function _Uo(e, t, n = "win32") {
  await x$(t, n), await sxe(e, t, me);
}
async function x$(e, t = "win32") {
  let n = await we(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
async function Cn(e, t, mode_3, renameFn) {
  return nre(e, t, {
    mode: mode_3,
    renameFn: renameFn
  });
}
async function nre(path_3, t, n) {
  let {
      mode: mode_4,
      createMode: createMode,
      exactMode: exactMode,
      flush: flush,
      followSymlinks: followSymlinks,
      inPlaceOnTempCreateRefused: inPlaceOnTempCreateRefused,
      stagingDir: stagingDir,
      renameFn: renameFn_2,
      beforePublish: beforePublish
    } = n,
    C = mode_4 ?? createMode,
    k = () => {
      if (beforePublish !== void 0 && !beforePublish()) throw new PublishRefusedError(path_3);
    },
    y = await Be(path_3, stagingDir),
    A = 0,
    w,
    T = !1,
    Y = !1,
    j = async h => {
      let c = await We(path_3, followSymlinks === !0),
        m = c.kind === "snapshot" ? c : void 0;
      k();
      let l = await x(path_3, p.O_WRONLY | p.O_CREAT, exactMode ?? C),
        S;
      try {
        S = await l.stat();
      } catch (error) {
        throw await l.close().catch(() => {}), T = h !== void 0, R(error, h, "untouched");
      }
      let u = S.isCharacterDevice();
      if (!S.isFile() && !u) throw await l.close().catch(() => {}), Object.assign(Error("refusing the in-place arm on a non-regular target"), {
        code: "ENXIO",
        path: path_3
      });
      if (!u && S.nlink > 1 && hhn()) throw await l.close().catch(() => {}), ae(path_3, S.nlink);
      if (beforePublish !== void 0 && !beforePublish()) {
        if (await l.close().catch(() => {}), c.kind === "absent" && S.size === 0 && !u) await F(path_3).catch(() => {});
        throw new PublishRefusedError(path_3);
      }
      let G = !1;
      try {
        if (!u) await l.truncate(0), G = !0;
        await l.writeFile(t, {
          encoding: "utf8"
        });
        let b = u ? void 0 : exactMode ?? (c.kind !== "absent" ? mode_4 : void 0);
        if (b !== void 0) await l.chmod(b).catch(() => {});
        if (flush === !0) try {
          await l.sync();
        } catch (error) {
          if (!ixe(error)) throw error;
        }
        await l.close();
      } catch (error) {
        if (await l.close().catch(() => {}), !G) throw T = h !== void 0, R(error, h, "untouched");
        T = h !== void 0;
        let pe = m !== void 0 && (await Ye(path_3, m, followSymlinks === !0)) ? "restored" : (await F(path_3).then(() => !0, Oe => v(Oe) === "ENOENT")) ? "removed" : "partial";
        throw R(error, h, pe);
      }
      let z = h ?? w;
      if (z !== void 0) await F(z).catch(() => {});
    };
  try {
    try {
      if (exactMode !== void 0 || flush === !0) {
        let c = await Ue(y, exactMode ?? C),
          fh = c.fh;
        w = c.tmp;
        let l = !1,
          S;
        try {
          if (await fh.writeFile(t, {
            encoding: "utf8"
          }), exactMode !== void 0) try {
            await fh.chmod(exactMode);
          } catch (error) {
            if (!ixe(error)) throw error;
          }
          if (flush === !0) try {
            await fh.sync();
          } catch (error) {
            if (!ixe(error)) throw error;
          }
        } catch (error) {
          l = !0, S = error;
        }
        if (!l) Y = !0;
        try {
          await fh.close();
        } catch (error) {
          if (!l) throw T = !0, R(error, w, "untouched");
        }
        if (l) throw S;
      } else w = await ZN(y, t, C), Y = !0;
    } catch (error) {
      if (inPlaceOnTempCreateRefused !== !0) throw error;
      if (Y) throw error;
      if (v(error) !== "EACCES") throw error;
      if (!(await Pe(path_3).then(() => !0, () => !1))) throw error;
      await j(void 0);
      return;
    }
    if (w === void 0) throw Error("staging block exited without a staging file");
    let h = w;
    try {
      let c = renameFn_2 ?? ie;
      await Bo(h, path_3, (m, l) => (k(), c(m, l)));
    } catch (error) {
      let m = v(error);
      if (m === void 0 || !XS.has(m)) throw error;
      await j(h);
    }
  } catch (error) {
    if (w !== void 0 && !T) await F(w).catch(() => {});
    throw error;
  }
}
function D(e) {
  try {
    re(e);
  } catch {}
}
function De(e) {
  if (!de(e, !0)) return {
    kind: "unavailable"
  };
  let t;
  try {
    t = K(e, p.O_RDONLY);
  } catch (error) {
    return v(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
  }
  try {
    let n = H(t);
    if (!n.isFile() || n.size > fe) return {
      kind: "unavailable"
    };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(_e(t)),
      mode: n.mode & 4095
    };
  } catch {
    return {
      kind: "unavailable"
    };
  } finally {
    try {
      N(t);
    } catch {}
  }
}
function He(e, t) {
  if (!de(e, !0)) return !1;
  let n;
  try {
    n = K(e, "w", t.mode);
  } catch {
    return !1;
  }
  let r = !1;
  try {
    if (!H(n).isFile()) return r = !0, N(n), !1;
    X(n, t.bytes);
    try {
      ne(n, t.mode);
    } catch {}
    return r = !0, N(n), !0;
  } catch {
    if (!r) try {
      N(n);
    } catch {}
    return !1;
  }
}
function he(e, t) {
  if (t !== "win32") return !1;
  try {
    return J(e), !0;
  } catch (n) {
    return v(n) === "ENOENT" ? !1 : {
      cause: n
    };
  }
}
function bUo(e, t = "win32") {
  let n = he(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
function Je(e, t, mode_5, r = "win32") {
  for (let o = 1;; o++) {
    let i = Yx(e),
      a = he(i, r);
    if (a !== !1) {
      if (o < L) continue;
      throw W(i, a);
    }
    try {
      return X(i, t, {
        encoding: "utf8",
        mode: mode_5,
        flag: "wx"
      }), i;
    } catch (error) {
      if (v(error) === "EEXIST") {
        if (o < L) continue;
        throw error;
      }
      throw D(i), error;
    }
  }
}
function eH(path_4, t, n, r) {
  let o = !1,
    i;
  try {
    i = Je(path_4, t, n);
    try {
      kzr(i, path_4, r);
    } catch (error) {
      let f = v(error);
      if (f === void 0 || !XS.has(f)) throw error;
      let s = De(path_4),
        g = s.kind === "snapshot" ? s : void 0,
        d = K(path_4, p.O_WRONLY | p.O_CREAT, n),
        E = !1;
      {
        let y;
        try {
          y = H(d);
        } catch (error) {
          try {
            N(d);
          } catch {}
          throw o = !0, R(error, i, "untouched");
        }
        if (E = y.isCharacterDevice(), !y.isFile() && !E) {
          try {
            N(d);
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: path_4
          });
        }
        if (!E && y.nlink > 1 && hhn()) {
          try {
            N(d);
          } catch {}
          throw ae(path_4, y.nlink);
        }
      }
      let C = !1,
        k = !1;
      try {
        if (!E) be(d, 0), k = !0;
        if (X(d, t, {
          encoding: "utf8"
        }), n !== void 0 && s.kind !== "absent" && !E) try {
          ne(d, n);
        } catch {}
        C = !0, N(d);
      } catch (error) {
        if (!C) try {
          N(d);
        } catch {}
        if (!k) throw o = !0, R(error, i, "untouched");
        o = !0;
        let A = g !== void 0 && He(path_4, g),
          w = "partial";
        if (A) w = "restored";else try {
          re(path_4), w = "removed";
        } catch (error) {
          w = v(error) === "ENOENT" ? "removed" : "partial";
        }
        throw R(error, i, w);
      }
      D(i);
    }
  } catch (error) {
    if (i !== void 0 && !o) D(i);
    throw error;
  }
}
export { sxe, h5n, JUe, zJ, gUo, y5n, ND, XS, hhn, vzr, nT, Yx, TC, yhn, E2, Bo, kzr, hUo, _hn, ixe, PublishRefusedError as bhn, ZN, yUo, A$, _Uo, x$, Cn, nre, bUo, eH };