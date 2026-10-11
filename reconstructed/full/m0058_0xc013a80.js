// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  P,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  constants as _,
  createWriteStream as q
} from "fs";
import {
  copyFile as ye,
  lstat as U,
  open as M,
  readlink as Ee
} from "fs/promises";
import {
  join as ge
} from "path";
import {
  pipeline as Z
} from "stream/promises";
async function sxe(e, t, n) {
  let r = _.O_NOFOLLOW;
  if (r === void 0 || O() === "windows") {
    if (!(await U(e)).isFile()) throw h5n(e);
    await ye(e, t, n?.exclusive ? _.COPYFILE_EXCL : 0);
    return
  }
  let o = await M(e, _.O_RDONLY | r | (n?.nonBlocking ? _.O_NONBLOCK ?? 0 : 0));
  try {
    let i = await o.stat();
    if (!i.isFile()) throw h5n(e);
    if (n?.exactMode) {
      let a = await M(t, n.exclusive ? "wx" : "w", i.mode);
      try {
        await Z(o.createReadStream(), q(t, {
          fd: a.fd,
          autoClose: !1
        })), await a.chmod(i.mode & 4095)
      } finally {
        await a.close()
      }
    } else await Z(o.createReadStream(), q(t, {
      mode: i.mode,
      flags: n?.exclusive ? "wx" : "w"
    }))
  } finally {
    await o.close()
  }
}

function h5n(e) {
  return new P(`Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`, "plugin copy source swapped for a non-regular file mid-copy")
}
var Se = new Set(["ENOENT", "ENOTDIR", "ELOOP", "EMLINK", "EFTYPE", "EISDIR", "ENAMETOOLONG", "EINVAL"]);
async function JUe(e, t, n) {
  let r = (s) => {
      let g = v(s);
      if (n?.throwTransient && (g === void 0 || !Se.has(g))) throw s;
      return null
    },
    o = O() === "windows",
    i = o ? void 0 : _.O_NOFOLLOW,
    a = o ? 0 : _.O_NONBLOCK ?? 0;
  if (i === void 0) {
    let s = await U(e).catch(r);
    if (s === null || !s.isFile()) return null
  }
  let f;
  try {
    f = await M(e, _.O_RDONLY | (i ?? 0) | a)
  } catch (s) {
    return r(s)
  }
  try {
    let s = await f.stat();
    if (!s.isFile() || s.size > t) return null;
    let {
      buffer: g,
      bytesRead: d
    } = await f.read(Buffer.alloc(t + 1), 0, t + 1, 0);
    if (d > t) return null;
    return g.subarray(0, d).toString("utf-8")
  } catch (s) {
    return r(s)
  } finally {
    await f.close()
  }
}
async function zJ(e, t) {
  let n = ge(e, t);
  try {
    return await Ee(n), !1
  } catch (r) {
    if (v(r) === "EINVAL") return !(await U(n)).isSymbolicLink();
    throw r
  }
}
var ee = !1;

function gUo() {
  ee = !0
}

function te() {
  return ee
}
import {
  randomBytes as Te
} from "crypto";
import {
  closeSync as N,
  constants as p,
  fchmodSync as ne,
  fstatSync as H,
  ftruncateSync as be,
  lstatSync as J,
  openSync as K,
  readFileSync as _e,
  renameSync as Re,
  unlinkSync as re,
  writeFileSync as X
} from "fs";
import {
  lstat as I,
  open as x,
  rename as ie,
  stat as Pe,
  unlink as F,
  writeFile as oe
} from "fs/promises";
import {
  basename as Ce,
  join as Fe
} from "path";

function Ne() {
  return !1
}

function y5n({
  served: e
}) {
  if (!te()) return !1;
  return e ? !1 : Ne()
}
var ND = ".cc-writes",
  XS = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);

function hhn() {
  return y5n({
    served: !1
  })
}

function vzr(e, t) {
  return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`
}

function ae(e, t) {
  return Object.assign(new P(vzr(e, t), "in-place write refused: the target has other names (a hard link)"), {
    code: "EMLINK",
    path: e
  })
}
var nT = new Set(["EPERM", "EBUSY", "EACCES"]);

function Yx(e) {
  return `${e}.tmp.${Te(4).toString("hex")}`
}

function TC(e, t) {
  let n = `${t}.tmp.`;
  return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length))
}

function yhn(e) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e)
}
var ve = 4,
  se = 50,
  ke = new Int32Array(new SharedArrayBuffer(4));

function xe(e) {
  Atomics.wait(ke, 0, 0, e)
}

function ce(e, t) {
  let n = v(e);
  return n !== void 0 && nT.has(n) && t < ve - 1
}
var le = 128;
async function Ae(e) {
  try {
    return ((await I(e)).mode & le) === 0
  } catch {
    return !1
  }
}
async function E2(e, t) {
  let n = !1;
  for (let r = 0;; r++) try {
    return await e(), n
  } catch (o) {
    if (ce(o, r)) {
      if (r === 0 && t !== void 0 && await Ae(t)) throw o;
      n = !0, await Q(se);
      continue
    }
    throw o
  }
}

function Bo(e, t, n = ie) {
  return E2(() => n(e, t), t)
}

function Le(e) {
  try {
    return (J(e).mode & le) === 0
  } catch {
    return !1
  }
}

function kzr(e, t, n = Re) {
  let r = !1;
  for (let o = 0;; o++) try {
    return n(e, t), r
  } catch (i) {
    if (ce(i, o)) {
      if (o === 0 && Le(t)) throw i;
      r = !0, xe(se);
      continue
    }
    throw i
  }
}
var hUo = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  fe = 67108864,
  _hn = 0;
async function ue(e, t, n = "win32") {
  return (await Ie(e, t, n)).kind === "pass"
}
async function Ie(e, t, n = "win32") {
  if (n !== "win32") return {
    kind: "pass"
  };
  try {
    return {
      kind: (await I(e)).isFile() ? "pass" : "refuse"
    }
  } catch (r) {
    if (v(r) === "ENOENT") return {
      kind: t ? "pass" : "refuse"
    };
    return {
      kind: "failed",
      error: r
    }
  }
}

function de(e, t, n = "win32") {
  if (n !== "win32") return !0;
  try {
    return J(e).isFile()
  } catch (r) {
    return t && v(r) === "ENOENT"
  }
}
async function We(e, t = !1) {
  if (!t && !await ue(e, !0)) return {
    kind: "unavailable"
  };
  let n;
  try {
    n = await x(e, p.O_RDONLY)
  } catch (r) {
    return v(r) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    }
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
    }
  } catch {
    return {
      kind: "unavailable"
    }
  } finally {
    await n.close().catch(() => {})
  }
}
async function Ye(e, t, n = !1) {
  if (!n && !await ue(e, !0)) return !1;
  let r;
  try {
    r = await x(e, "w", t.mode)
  } catch {
    return !1
  }
  try {
    if (!(await r.stat()).isFile()) return await r.close().catch(() => {}), !1;
    return await r.writeFile(t.bytes), await r.chmod(t.mode).catch(() => {}), await r.close(), !0
  } catch {
    return await r.close().catch(() => {}), !1
  }
}

function R(e, t, n) {
  try {
    if (e instanceof Error) e.message = `${e.message}; ${t!==void 0?`new contents preserved at ${t}; `:""}${n==="restored"?"original target restored":n==="removed"?"partial target removed":n==="untouched"?"target untouched":"target left partial \u2014 treat contents as torn"}`, Object.assign(e, {
      ...t !== void 0 && {
        preservedTmp: t
      },
      targetOutcome: n
    })
  } catch {}
  return e
}

function ixe(e) {
  let t = v(e);
  return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS"
}
class bhn extends Error {
  target;
  constructor(e) {
    super("beforePublish refused the write; nothing was published");
    this.target = e;
    this.name = "PublishRefusedError"
  }
}
async function Be(e, t) {
  return e;
  try {
    await (await x(t, p.O_RDONLY | p.O_DIRECTORY | p.O_NOFOLLOW)).close()
  } catch (n) {
    switch (v(n)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return e;
      case "EACCES":
      case "EPERM":
        if (await Me(t)) return e;
        throw n;
      default:
        throw n
    }
  }
}
async function Me(e) {
  let t = process.getuid?.();
  if (t === void 0) return !1;
  try {
    return (await I(e)).uid !== t
  } catch {
    return !1
  }
}
var L = 3;
async function we(e, t) {
  if (t !== "win32") return !1;
  try {
    return await I(e), !0
  } catch (n) {
    return v(n) === "ENOENT" ? !1 : {
      cause: n
    }
  }
}

function W(e, t) {
  return Object.assign(Error("EEXIST: name already taken (exclusive create)", typeof t === "object" ? {
    cause: t.cause
  } : void 0), {
    code: "EEXIST",
    syscall: "lstat",
    path: e
  })
}
async function V(e, t, n) {
  for (let r = 1;; r++) {
    let o = Yx(e),
      i = await we(o, t);
    if (i !== !1) {
      if (r < L) continue;
      throw W(o, i)
    }
    try {
      return await n(o)
    } catch (a) {
      if (v(a) === "EEXIST" && r < L) continue;
      throw a
    }
  }
}
async function ZN(e, t, n, r = "win32") {
  return V(e, r, async (o) => {
    try {
      return await oe(o, t, {
        encoding: "utf8",
        mode: n,
        flag: "wx"
      }), o
    } catch (i) {
      if (v(i) !== "EEXIST") await F(o).catch(() => {});
      throw i
    }
  })
}
var me = {
  exclusive: !0,
  exactMode: !1,
  nonBlocking: !0
};
async function yUo(e, t, n = "win32") {
  return V(t, n, async (r) => {
    try {
      return await sxe(e, r, me), r
    } catch (o) {
      if (v(o) !== "EEXIST") await F(r).catch(() => {});
      throw o
    }
  })
}
async function Ue(e, t, n = "win32") {
  return V(e, n, async (r) => ({
    fh: await x(r, n === "win32" ? "wx" : p.O_WRONLY | p.O_CREAT | p.O_EXCL, t),
    tmp: r
  }))
}
async function A$(e, t, n, r = "win32") {
  await x$(e, r), await oe(e, t, {
    encoding: "utf8",
    mode: n,
    flag: "wx"
  })
}
async function _Uo(e, t, n = "win32") {
  await x$(t, n), await sxe(e, t, me)
}
async function x$(e, t = "win32") {
  let n = await we(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause
}
async function Cn(e, t, n, r) {
  return nre(e, t, {
    mode: n,
    renameFn: r
  })
}
async function nre(e, t, n) {
  let {
    mode: r,
    createMode: o,
    exactMode: i,
    flush: a,
    followSymlinks: f,
    inPlaceOnTempCreateRefused: s,
    stagingDir: g,
    renameFn: d,
    beforePublish: E
  } = n, C = r ?? o, k = () => {
    if (E !== void 0 && !E()) throw new bhn(e)
  }, y = await Be(e, g), A = 0, w, T = !1, Y = !1, j = async (h) => {
    let c = await We(e, f === !0),
      m = c.kind === "snapshot" ? c : void 0;
    k();
    let l = await x(e, p.O_WRONLY | p.O_CREAT, i ?? C),
      S;
    try {
      S = await l.stat()
    } catch (b) {
      throw await l.close().catch(() => {}), T = h !== void 0, R(b, h, "untouched")
    }
    let u = S.isCharacterDevice();
    if (!S.isFile() && !u) throw await l.close().catch(() => {}), Object.assign(Error("refusing the in-place arm on a non-regular target"), {
      code: "ENXIO",
      path: e
    });
    if (!u && S.nlink > 1 && hhn()) throw await l.close().catch(() => {}), ae(e, S.nlink);
    if (E !== void 0 && !E()) {
      if (await l.close().catch(() => {}), c.kind === "absent" && S.size === 0 && !u) await F(e).catch(() => {});
      throw new bhn(e)
    }
    let G = !1;
    try {
      if (!u) await l.truncate(0), G = !0;
      await l.writeFile(t, {
        encoding: "utf8"
      });
      let b = u ? void 0 : i ?? (c.kind !== "absent" ? r : void 0);
      if (b !== void 0) await l.chmod(b).catch(() => {});
      if (a === !0) try {
        await l.sync()
      } catch (B) {
        if (!ixe(B)) throw B
      }
      await l.close()
    } catch (b) {
      if (await l.close().catch(() => {}), !G) throw T = h !== void 0, R(b, h, "untouched");
      T = h !== void 0;
      let pe = m !== void 0 && await Ye(e, m, f === !0) ? "restored" : await F(e).then(() => !0, (Oe) => v(Oe) === "ENOENT") ? "removed" : "partial";
      throw R(b, h, pe)
    }
    let z = h ?? w;
    if (z !== void 0) await F(z).catch(() => {})
  };
  try {
    try {
      if (i !== void 0 || a === !0) {
        let c = await Ue(y, i ?? C),
          m = c.fh;
        w = c.tmp;
        let l = !1,
          S;
        try {
          if (await m.writeFile(t, {
              encoding: "utf8"
            }), i !== void 0) try {
            await m.chmod(i)
          } catch (u) {
            if (!ixe(u)) throw u
          }
          if (a === !0) try {
            await m.sync()
          } catch (u) {
            if (!ixe(u)) throw u
          }
        } catch (u) {
          l = !0, S = u
        }
        if (!l) Y = !0;
        try {
          await m.close()
        } catch (u) {
          if (!l) throw T = !0, R(u, w, "untouched")
        }
        if (l) throw S
      } else w = await ZN(y, t, C), Y = !0
    } catch (c) {
      if (s !== !0) throw c;
      if (Y) throw c;
      if (v(c) !== "EACCES") throw c;
      if (!await Pe(e).then(() => !0, () => !1)) throw c;
      await j(void 0);
      return
    }
    if (w === void 0) throw Error("staging block exited without a staging file");
    let h = w;
    try {
      let c = d ?? ie;
      await Bo(h, e, (m, l) => (k(), c(m, l)))
    } catch (c) {
      let m = v(c);
      if (m === void 0 || !XS.has(m)) throw c;
      await j(h)
    }
  } catch (h) {
    if (w !== void 0 && !T) await F(w).catch(() => {});
    throw h
  }
}

function D(e) {
  try {
    re(e)
  } catch {}
}

function De(e) {
  if (!de(e, !0)) return {
    kind: "unavailable"
  };
  let t;
  try {
    t = K(e, p.O_RDONLY)
  } catch (n) {
    return v(n) === "ENOENT" ? {
      kind: "absent"
    } : {
      kind: "unavailable"
    }
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
    }
  } catch {
    return {
      kind: "unavailable"
    }
  } finally {
    try {
      N(t)
    } catch {}
  }
}

function He(e, t) {
  if (!de(e, !0)) return !1;
  let n;
  try {
    n = K(e, "w", t.mode)
  } catch {
    return !1
  }
  let r = !1;
  try {
    if (!H(n).isFile()) return r = !0, N(n), !1;
    X(n, t.bytes);
    try {
      ne(n, t.mode)
    } catch {}
    return r = !0, N(n), !0
  } catch {
    if (!r) try {
      N(n)
    } catch {}
    return !1
  }
}

function he(e, t) {
  if (t !== "win32") return !1;
  try {
    return J(e), !0
  } catch (n) {
    return v(n) === "ENOENT" ? !1 : {
      cause: n
    }
  }
}

function bUo(e, t = "win32") {
  let n = he(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause
}

function Je(e, t, n, r = "win32") {
  for (let o = 1;; o++) {
    let i = Yx(e),
      a = he(i, r);
    if (a !== !1) {
      if (o < L) continue;
      throw W(i, a)
    }
    try {
      return X(i, t, {
        encoding: "utf8",
        mode: n,
        flag: "wx"
      }), i
    } catch (f) {
      if (v(f) === "EEXIST") {
        if (o < L) continue;
        throw f
      }
      throw D(i), f
    }
  }
}

function eH(e, t, n, r) {
  let o = !1,
    i;
  try {
    i = Je(e, t, n);
    try {
      kzr(i, e, r)
    } catch (a) {
      let f = v(a);
      if (f === void 0 || !XS.has(f)) throw a;
      let s = De(e),
        g = s.kind === "snapshot" ? s : void 0,
        d = K(e, p.O_WRONLY | p.O_CREAT, n),
        E = !1;
      {
        let y;
        try {
          y = H(d)
        } catch (A) {
          try {
            N(d)
          } catch {}
          throw o = !0, R(A, i, "untouched")
        }
        if (E = y.isCharacterDevice(), !y.isFile() && !E) {
          try {
            N(d)
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: e
          })
        }
        if (!E && y.nlink > 1 && hhn()) {
          try {
            N(d)
          } catch {}
          throw ae(e, y.nlink)
        }
      }
      let C = !1,
        k = !1;
      try {
        if (!E) be(d, 0), k = !0;
        if (X(d, t, {
            encoding: "utf8"
          }), n !== void 0 && s.kind !== "absent" && !E) try {
          ne(d, n)
        } catch {}
        C = !0, N(d)
      } catch (y) {
        if (!C) try {
          N(d)
        } catch {}
        if (!k) throw o = !0, R(y, i, "untouched");
        o = !0;
        let A = g !== void 0 && He(e, g),
          w = "partial";
        if (A) w = "restored";
        else try {
          re(e), w = "removed"
        } catch (T) {
          w = v(T) === "ENOENT" ? "removed" : "partial"
        }
        throw R(y, i, w)
      }
      D(i)
    }
  } catch (a) {
    if (i !== void 0 && !o) D(i);
    throw a
  }
}
export {
  sxe,
  h5n,
  JUe,
  zJ,
  gUo,
  y5n,
  ND,
  XS,
  hhn,
  vzr,
  nT,
  Yx,
  TC,
  yhn,
  E2,
  Bo,
  kzr,
  hUo,
  _hn,
  ixe,
  bhn,
  ZN,
  yUo,
  A$,
  _Uo,
  x$,
  Cn,
  nre,
  bUo,
  eH
};
