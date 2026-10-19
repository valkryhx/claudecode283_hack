// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { randomBytes as be } from "crypto";
import { closeSync as S, constants as p, fchmodSync as re, fstatSync as K, ftruncateSync as _e, lstatSync as J, openSync as X, readFileSync as Re, renameSync as Pe, unlinkSync as ie, writeFileSync as V } from "fs";
import { lstat as L, open as C, rename as j, stat as Fe, unlink as P, writeFile as oe } from "fs/promises";
import { basename as Ce, join as ve } from "path";
import { constants as b, createWriteStream as Z } from "fs";
import { copyFile as Ee, lstat as U, open as D, readlink as ge } from "fs/promises";
import { join as Se } from "path";
import { pipeline as ee } from "stream/promises";
async function fGe(e, t, n) {
  let O_NOFOLLOW = b.O_NOFOLLOW;
  if (O_NOFOLLOW === void 0 || I() === "windows") {
    if (!(await U(e)).isFile()) throw IBr(e);
    await Ee(e, t, n?.exclusive ? b.COPYFILE_EXCL : 0);
    return;
  }
  let o = await D(e, b.O_RDONLY | O_NOFOLLOW | (n?.nonBlocking ? b.O_NONBLOCK ?? 0 : 0));
  try {
    let i = await o.stat();
    if (!i.isFile()) throw IBr(e);
    if (n?.exactMode) {
      let a = await D(t, n.exclusive ? "wx" : "w", i.mode);
      try {
        await ee(o.createReadStream(), Z(t, {
          fd: a.fd,
          autoClose: !1
        })), await a.chmod(i.mode & 4095);
      } finally {
        await a.close();
      }
    } else await ee(o.createReadStream(), Z(t, {
      mode: i.mode,
      flags: n?.exclusive ? "wx" : "w"
    }));
  } finally {
    await o.close();
  }
}
function IBr(e) {
  return new x(`Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy");
}
var Ne = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function bZe(e, t, n) {
  let r = s => {
      let E = k(s);
      if (n?.throwTransient && (E === void 0 || !Ne.has(E))) throw s;
      return null;
    },
    o = I() === "windows",
    i = o ? void 0 : b.O_NOFOLLOW,
    a = o ? 0 : b.O_NONBLOCK ?? 0;
  if (i === void 0) {
    let s = await U(e).catch(r);
    if (s === null || !s.isFile()) return null;
  }
  let f;
  try {
    f = await D(e, b.O_RDONLY | (i ?? 0) | a);
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
async function GB(e, t) {
  let n = Se(e, t);
  try {
    return await ge(n), !1;
  } catch (error) {
    if (k(error) === "EINVAL") return !(await U(n)).isSymbolicLink();
    throw error;
  }
}
var te = !1;
function RYs() {
  te = !0;
}
function ne() {
  return te;
}
function Te() {
  return !1;
}
function MBr({
  served: served
}) {
  if (!ne()) return !1;
  return served ? !1 : Te();
}
var VB = ".cc-writes",
  xA = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);
function wXn() {
  return MBr({
    served: !1
  });
}
function Djo(e, t) {
  return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function ae(path, t) {
  return Object.assign(new x(Djo(path, t), "in-place write refused: the target has other names (a hard link)"), {
    code: "EMLINK",
    path: path
  });
}
var qB = new Set(["EPERM", "EBUSY", "EACCES"]);
function tP(e) {
  return `${e}.tmp.${be(4).toString("hex")}`;
}
function dI(e, t) {
  let n = `${t}.tmp.`;
  return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length));
}
function vXn(e) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e);
}
var se = 4,
  ce = 50,
  Ae = Array.from({
    length: se - 1
  }, () => ce),
  DBr = [100, 500, 2000],
  int32Array = new Int32Array(new SharedArrayBuffer(4));
function xe(e) {
  Atomics.wait(int32Array, 0, 0, e);
}
function le(e, t, n = se - 1) {
  let r = k(e);
  return r !== void 0 && qB.has(r) && t < n;
}
var fe = 128;
async function Le(e) {
  try {
    return ((await L(e)).mode & fe) === 0;
  } catch {
    return !1;
  }
}
async function i0(e, t, n = Ae) {
  let r = !1;
  for (let o = 0;; o++) try {
    return await e(), r;
  } catch (error) {
    if (le(error, o, n.length)) {
      if (o === 0 && t !== void 0 && (await Le(t))) throw error;
      r = !0, await Y(n[o]);
      continue;
    }
    throw error;
  }
}
function ns(e, t, n = j) {
  return i0(() => n(e, t), t);
}
function lDe(e, t, n = j) {
  return i0(() => n(e, t), t, DBr);
}
function Ie(e) {
  try {
    return (J(e).mode & fe) === 0;
  } catch {
    return !1;
  }
}
function ymn(e, t, n = Pe) {
  let r = !1;
  for (let o = 0;; o++) try {
    return n(e, t), r;
  } catch (error) {
    if (le(error, o)) {
      if (o === 0 && Ie(t)) throw error;
      r = !0, xe(ce);
      continue;
    }
    throw error;
  }
}
var AYs = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  ue = 67108864,
  kXn = 0;
async function de(e, t, n = "win32") {
  return (await We(e, t, n)).kind === "pass";
}
async function We(e, t, n = "win32") {
  if (n !== "win32") return {
    kind: "pass"
  };
  try {
    return {
      kind: (await L(e)).isFile() ? "pass" : "refuse"
    };
  } catch (error_2) {
    if (k(error_2) === "ENOENT") return {
      kind: t ? "pass" : "refuse"
    };
    return {
      kind: "failed",
      error: error_2
    };
  }
}
function we(e, t, n = "win32") {
  if (n !== "win32") return !0;
  try {
    return J(e).isFile();
  } catch (error) {
    return t && k(error) === "ENOENT";
  }
}
async function Me(e, t = !1) {
  if (!t && !(await de(e, !0))) return {
    kind: "unavailable"
  };
  let n;
  try {
    n = await C(e, p.O_RDONLY);
  } catch (error) {
    return k(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
  }
  try {
    let r = await n.stat();
    if (!r.isFile() || r.size > ue) return {
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
async function Be(e, t, n = !1) {
  if (!n && !(await de(e, !0))) return !1;
  let r;
  try {
    r = await C(e, "w", t.mode);
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
function _(e, preservedTmp, targetOutcome) {
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
function mGe(e) {
  let t = k(e);
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
async function Ye(e, t) {
  return e;
  try {
    await (await C(t, p.O_RDONLY | p.O_DIRECTORY | p.O_NOFOLLOW)).close();
  } catch (error) {
    switch (k(error)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return e;
      case "EACCES":
      case "EPERM":
        if (await De(t)) return e;
        throw error;
      default:
        throw error;
    }
  }
}
async function De(e) {
  let t = process.getuid?.();
  if (t === void 0) return !1;
  try {
    return (await L(e)).uid !== t;
  } catch {
    return !1;
  }
}
var A = 3;
async function me(e, t) {
  if (t !== "win32") return !1;
  try {
    return await L(e), !0;
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
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
async function G(e, t, n) {
  for (let r = 1;; r++) {
    let o = tP(e),
      i = await me(o, t);
    if (i !== !1) {
      if (r < A) continue;
      throw W(o, i);
    }
    try {
      return await n(o);
    } catch (error) {
      if (k(error) === "EEXIST" && r < A) continue;
      throw error;
    }
  }
}
async function cF(e, t, mode, r = "win32") {
  return G(e, r, async o => {
    try {
      return await oe(o, t, {
        encoding: "utf8",
        mode: mode,
        flag: "wx"
      }), o;
    } catch (error) {
      if (k(error) !== "EEXIST") await P(o).catch(() => {});
      throw error;
    }
  });
}
var he = {
  exclusive: !0,
  exactMode: !1,
  nonBlocking: !0
};
async function xYs(e, t, n = "win32") {
  return G(t, n, async r => {
    try {
      return await fGe(e, r, he), r;
    } catch (error) {
      if (k(error) !== "EEXIST") await P(r).catch(() => {});
      throw error;
    }
  });
}
async function Ue(e, t, n = "win32") {
  return G(e, n, async tmp => ({
    fh: await C(tmp, n === "win32" ? "wx" : p.O_WRONLY | p.O_CREAT | p.O_EXCL, t),
    tmp: tmp
  }));
}
async function KB(e, t, mode_2, r = "win32") {
  await YB(e, r), await oe(e, t, {
    encoding: "utf8",
    mode: mode_2,
    flag: "wx"
  });
}
async function PYs(e, t, n = "win32") {
  await YB(t, n), await fGe(e, t, he);
}
async function YB(e, t = "win32") {
  let n = await me(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
async function An(e, t, mode_3, renameFn) {
  return Uhe(e, t, {
    mode: mode_3,
    renameFn: renameFn
  });
}
async function Uhe(path_3, t, n) {
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
    R = mode_4 ?? createMode,
    F = () => {
      if (beforePublish !== void 0 && !beforePublish()) throw new PublishRefusedError(path_3);
    },
    O = await Ye(path_3, stagingDir),
    v = 0,
    w,
    N = !1,
    M = !1,
    z = async h => {
      let c = await Me(path_3, followSymlinks === !0),
        m = c.kind === "snapshot" ? c : void 0;
      F();
      let l = await C(path_3, p.O_WRONLY | p.O_CREAT, exactMode ?? R),
        g;
      try {
        g = await l.stat();
      } catch (error) {
        throw await l.close().catch(() => {}), N = h !== void 0, _(error, h, "untouched");
      }
      let u = g.isCharacterDevice();
      if (!g.isFile() && !u) throw await l.close().catch(() => {}), Object.assign(Error("refusing the in-place arm on a non-regular target"), {
        code: "ENXIO",
        path: path_3
      });
      if (!u && g.nlink > 1 && wXn()) throw await l.close().catch(() => {}), ae(path_3, g.nlink);
      if (beforePublish !== void 0 && !beforePublish()) {
        if (await l.close().catch(() => {}), c.kind === "absent" && g.size === 0 && !u) await P(path_3).catch(() => {});
        throw new PublishRefusedError(path_3);
      }
      let Q = !1;
      try {
        if (!u) await l.truncate(0), Q = !0;
        await l.writeFile(t, {
          encoding: "utf8"
        });
        let T = u ? void 0 : exactMode ?? (c.kind !== "absent" ? mode_4 : void 0);
        if (T !== void 0) await l.chmod(T).catch(() => {});
        if (flush === !0) try {
          await l.sync();
        } catch (error) {
          if (!mGe(error)) throw error;
        }
        await l.close();
      } catch (error) {
        if (await l.close().catch(() => {}), !Q) throw N = h !== void 0, _(error, h, "untouched");
        N = h !== void 0;
        let Oe = m !== void 0 && (await Be(path_3, m, followSymlinks === !0)) ? "restored" : (await P(path_3).then(() => !0, ye => k(ye) === "ENOENT")) ? "removed" : "partial";
        throw _(error, h, Oe);
      }
      let q = h ?? w;
      if (q !== void 0) await P(q).catch(() => {});
    };
  try {
    try {
      if (exactMode !== void 0 || flush === !0) {
        let c = await Ue(O, exactMode ?? R),
          fh = c.fh;
        w = c.tmp;
        let l = !1,
          g;
        try {
          if (await fh.writeFile(t, {
            encoding: "utf8"
          }), exactMode !== void 0) try {
            await fh.chmod(exactMode);
          } catch (error) {
            if (!mGe(error)) throw error;
          }
          if (flush === !0) try {
            await fh.sync();
          } catch (error) {
            if (!mGe(error)) throw error;
          }
        } catch (error) {
          l = !0, g = error;
        }
        if (!l) M = !0;
        try {
          await fh.close();
        } catch (error) {
          if (!l) throw N = !0, _(error, w, "untouched");
        }
        if (l) throw g;
      } else w = await cF(O, t, R), M = !0;
    } catch (error) {
      if (inPlaceOnTempCreateRefused !== !0) throw error;
      if (M) throw error;
      if (k(error) !== "EACCES") throw error;
      if (!(await Fe(path_3).then(() => !0, () => !1))) throw error;
      await z(void 0);
      return;
    }
    if (w === void 0) throw Error("staging block exited without a staging file");
    let h = w;
    try {
      let c = renameFn_2 ?? j;
      await ns(h, path_3, (m, l) => (F(), c(m, l)));
    } catch (error) {
      let m = k(error);
      if (m === void 0 || !xA.has(m)) throw error;
      await z(h);
    }
  } catch (error) {
    if (w !== void 0 && !N) await P(w).catch(() => {});
    throw error;
  }
}
function H(e) {
  try {
    ie(e);
  } catch {}
}
function He(e) {
  if (!we(e, !0)) return {
    kind: "unavailable"
  };
  let t;
  try {
    t = X(e, p.O_RDONLY);
  } catch (error) {
    return k(error) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    };
  }
  try {
    let n = K(t);
    if (!n.isFile() || n.size > ue) return {
      kind: "unavailable"
    };
    return {
      kind: "snapshot",
      bytes: new Uint8Array(Re(t)),
      mode: n.mode & 4095
    };
  } catch {
    return {
      kind: "unavailable"
    };
  } finally {
    try {
      S(t);
    } catch {}
  }
}
function Ke(e, t) {
  if (!we(e, !0)) return !1;
  let n;
  try {
    n = X(e, "w", t.mode);
  } catch {
    return !1;
  }
  let r = !1;
  try {
    if (!K(n).isFile()) return r = !0, S(n), !1;
    V(n, t.bytes);
    try {
      re(n, t.mode);
    } catch {}
    return r = !0, S(n), !0;
  } catch {
    if (!r) try {
      S(n);
    } catch {}
    return !1;
  }
}
function pe(e, t) {
  if (t !== "win32") return !1;
  try {
    return J(e), !0;
  } catch (n) {
    return k(n) === "ENOENT" ? !1 : {
      cause: n
    };
  }
}
function OYs(e, t = "win32") {
  let n = pe(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
function Je(e, t, mode_5, r = "win32") {
  for (let o = 1;; o++) {
    let i = tP(e),
      a = pe(i, r);
    if (a !== !1) {
      if (o < A) continue;
      throw W(i, a);
    }
    try {
      return V(i, t, {
        encoding: "utf8",
        mode: mode_5,
        flag: "wx"
      }), i;
    } catch (error) {
      if (k(error) === "EEXIST") {
        if (o < A) continue;
        throw error;
      }
      throw H(i), error;
    }
  }
}
function dL(path_4, t, n, r) {
  let o = !1,
    i;
  try {
    i = Je(path_4, t, n);
    try {
      ymn(i, path_4, r);
    } catch (error) {
      let f = k(error);
      if (f === void 0 || !xA.has(f)) throw error;
      let s = He(path_4),
        E = s.kind === "snapshot" ? s : void 0,
        d = X(path_4, p.O_WRONLY | p.O_CREAT, n),
        y = !1;
      {
        let O;
        try {
          O = K(d);
        } catch (error) {
          try {
            S(d);
          } catch {}
          throw o = !0, _(error, i, "untouched");
        }
        if (y = O.isCharacterDevice(), !O.isFile() && !y) {
          try {
            S(d);
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: path_4
          });
        }
        if (!y && O.nlink > 1 && wXn()) {
          try {
            S(d);
          } catch {}
          throw ae(path_4, O.nlink);
        }
      }
      let R = !1,
        F = !1;
      try {
        if (!y) _e(d, 0), F = !0;
        if (V(d, t, {
          encoding: "utf8"
        }), n !== void 0 && s.kind !== "absent" && !y) try {
          re(d, n);
        } catch {}
        R = !0, S(d);
      } catch (error) {
        if (!R) try {
          S(d);
        } catch {}
        if (!F) throw o = !0, _(error, i, "untouched");
        o = !0;
        let v = E !== void 0 && Ke(path_4, E),
          w = "partial";
        if (v) w = "restored";else try {
          ie(path_4), w = "removed";
        } catch (error) {
          w = k(error) === "ENOENT" ? "removed" : "partial";
        }
        throw _(error, i, w);
      }
      H(i);
    }
  } catch (error) {
    if (i !== void 0 && !o) H(i);
    throw error;
  }
}
export { fGe, IBr, bZe, GB, RYs, MBr, VB, xA, wXn, Djo, qB, tP, dI, vXn, DBr, i0, ns, lDe, ymn, AYs, kXn, mGe, PublishRefusedError as EXn, cF, xYs, KB, PYs, YB, An, Uhe, OYs, dL };