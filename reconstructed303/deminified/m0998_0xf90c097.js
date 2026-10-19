// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k, Ts, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { P3t, O3t } from "B:/~BUN/root/chunk-2wkdz964.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { Jk } from "B:/~BUN/root/chunk-j2tkftkw.js";
import { Zs } from "B:/~BUN/root/chunk-wegca9zh.js";
import { close as Qe, constants as A, fchmod as Ze, fchown as en, fstat as nn, fsync as rn, open as tn, writeFile as on } from "fs";
import { lstat as an, mkdtemp as We, rm as Ue, symlink as sn } from "fs/promises";
import { tmpdir as Ke } from "os";
import { getSystemErrorName as ln, promisify as q } from "util";
class jto extends Error {
  code;
  constructor(cause) {
    super("the new file could not be given its owner", {
      cause: cause
    });
    this.code = k(cause);
  }
}
var D8s = ["unsupported_platform", "no_procfs", "no_ffi", "nofollow_any_unenforced", "remote_volume", "unstable_identity", "bring_up_failed"];
function Tri(e) {
  return D8s.includes(e);
}
function cn(e) {
  switch (e) {
    case "WORKING_PARENT_NOT_DIRECTORY":
      return Error("a destination ancestor is a symlink or not a directory");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "WORKING_LIST_UNSUPPORTED":
      return Error("this backend cannot list a held directory, or cannot stop at the bound that was set");
    case "WORKING_LIST_TOO_LONG":
      return Error("the directory holds more names than may be listed");
    case "WORKING_DIRECTORY_MOVED":
      return Error("the operation succeeded, but a directory that it used may have been moved meanwhile: what it made or moved may lie outside the tree, or have come from outside it");
    case "WORKING_DIRECTORY_MOVED_UNDONE":
      return Error("a directory may have been moved, so the operation made nothing, or what it made was removed again");
    case "WORKING_LINK_UNSUPPORTED":
      return Error("this backend cannot make or read a symbolic link in a held directory");
  }
}
function dn() {
  let e = Error("tree anchor root is not a canonical path");
  return e.code = "WORKING_ROOT_NOT_CANONICAL", e;
}
function J(e) {
  let o = cn(e);
  return o.code = e, o;
}
var Ye = Symbol("createsInHeldDirectoryCheckedByPath"),
  Pe = 536870912,
  un = 2097152,
  Y = A.O_RDONLY | A.O_DIRECTORY | A.O_NOFOLLOW | Zs,
  oe = A.O_WRONLY | A.O_CREAT | A.O_EXCL | Zs,
  fn = 511,
  mn = 1e7,
  hn = 512,
  yn = 3,
  gn = 16,
  Se = Error("removeTree stopped after a failure");
function se(e, o) {
  let a = e.split("/");
  if (e.includes("\x00") || a.some(item => item === "" || item === "." || item === ".." || o !== "/" && item.includes(o))) throw Error("anchored path must be relative, of plain segments");
  return a;
}
function fe(e, o) {
  let a = se(e, o);
  return {
    dirs: a.slice(0, -1),
    leaf: a.at(-1) ?? ""
  };
}
function Le(e) {
  if ((e & A.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}
function X(e) {
  let o = k(e);
  return o === "ENOTDIR" || o === "ELOOP" ? J("WORKING_PARENT_NOT_DIRECTORY") : e;
}
var ie = {
  found: "same"
};
function Oe(e, o) {
  return e.ino !== 0n && e.dev === o.dev && e.ino === o.ino;
}
async function wn(e, o, a, d, g) {
  let n = null;
  try {
    for (let [f, b] of d.entries()) {
      let w = n ?? e.getHeldDir(a),
        c = await (f < d.length - 1 && e.openDirToPass !== void 0 ? e.openDirToPass(w, b, g) : e.openDir(w, b, g));
      if (n !== null) await e.closeDir(n);
      n = c;
    }
  } catch {
    if (n !== null) await e.closeDir(n);
    return null;
  } finally {
    await a.close();
  }
  return n === null ? null : e.holdOpenedDir(n, o.path.join(a.realPath, ...d));
}
function Iur(backend, o, a, d, realRoot, n, f = [], b) {
  let {
      sep: sep
    } = o.path,
    c = void 0,
    h = void 0,
    O = void 0,
    v = !1,
    M = null,
    close_2 = () => M ??= a.close(),
    weakMap = new WeakMap(),
    holdOutside = async (r, i, s = !1) => {
      let y = i === "" ? [] : se(i, sep),
        p = await n.hold(r),
        P = p === null || y.length === 0 ? p : await wn(n, o, p, y, s);
      if (P === null) return null;
      let R = null,
        close = () => R ??= P.close(),
        C = {
          realPath: P.realPath,
          get closed() {
            return R !== null;
          },
          stat: async () => {
            if (R !== null) throw Error("held directory is closed");
            return P.stat();
          },
          close: close,
          [Symbol.asyncDispose]: close
        };
      return weakMap.set(C, P), C;
    },
    T = r => {
      let i = weakMap.get(r);
      if (i === void 0) throw Error("held directory belongs to another anchor");
      if (r.closed) throw Error("held directory is closed");
      return i;
    },
    _ = r => r === d ? Promise.resolve() : n.closeDir(r),
    m = async (dir, i, s, dirs) => {
      try {
        return await n.openDir(dir, i);
      } catch (error) {
        if (s === null || !G(error)) throw X(error);
        if (await n.mkdir(dir, i, s).then(() => !0, R => {
          if (k(R) !== "EEXIST") throw R;
          return !1;
        })) await V("mkdir", {
          to: {
            dir: dir,
            dirs: dirs
          }
        }, () => n.rmdir(dir, i));
        return n.openDir(dir, i).catch(R => {
          throw X(R);
        });
      }
    },
    u = () => {
      if (M !== null) throw Error("tree anchor is closed");
    },
    D = async (r, i) => {
      if (n.list === void 0) throw J("WORKING_LIST_UNSUPPORTED");
      let s = await n.list(r, i);
      if (i !== void 0 && !(s.length <= i)) throw J("WORKING_LIST_TOO_LONG");
      return Dn(s, sep);
    },
    E = async (r, i) => {
      u();
      let s = d;
      try {
        for (let [y, p] of r.entries()) {
          u();
          let P = await m(s, p, i, r.slice(0, y));
          await _(s), s = P;
        }
        return s;
      } catch (error) {
        throw await _(s), error;
      }
    },
    I = async (r, i) => {
      let {
          dirs: dirs_2,
          leaf: leaf
        } = fe(r, sep),
        p = await E(dirs_2, null);
      try {
        return u(), await i(p, leaf, dirs_2);
      } finally {
        await _(p);
      }
    },
    z = async (r, i, s) => {
      let y = fe(i, sep);
      return fe(r, sep).dirs.join("/") === y.dirs.join("/") ? I(r, (dir_2, leaf_2, dirs_3) => s({
        dir: dir_2,
        leaf: leaf_2,
        dirs: dirs_3
      }, {
        dir: dir_2,
        leaf: y.leaf,
        dirs: dirs_3
      })) : I(r, (dir_3, leaf_3, dirs_4) => I(i, (dir_4, leaf_4, dirs_5) => s({
        dir: dir_3,
        leaf: leaf_3,
        dirs: dirs_4
      }, {
        dir: dir_4,
        leaf: leaf_4,
        dirs: dirs_5
      })));
    },
    Q = checkError => G(checkError) ? {
      found: "missing"
    } : k(checkError) === "WORKING_PARENT_NOT_DIRECTORY" ? {
      found: "replaced"
    } : {
      found: "check_failed",
      checkError: checkError
    },
    ce = async (r, i) => {
      let s = await E(r, null).then(now => ({
        now: now
      }), Q);
      if (!("now" in s)) return s;
      try {
        return await i(s.now);
      } catch (error) {
        return Q(error);
      } finally {
        await _(s.now).catch(() => {});
      }
    },
    ye = r => n.holdOpenedDir(r, "").stat(),
    ke = (r, i) => r.dev !== i.dev ? {
      found: "replaced",
      differs: "device"
    } : r.ino !== i.ino ? {
      found: "replaced",
      differs: "inode"
    } : ie,
    ve = async ({
      dir: dir_5,
      dirs: dirs_6
    }) => dirs_6.length === 0 ? ie : ce(dirs_6, async s => ke(await ye(dir_5), await ye(s))),
    Ee = async ({
      dir: dir_6,
      dirs: dirs_7
    }) => ie,
    Je = async ({
      to: to,
      from: i
    }) => null,
    ge = (operation, i, s) => {
      try {
        (void 0)?.({
          operation: operation,
          ...i,
          outcome: s ? "undone" : "not_undone"
        });
      } catch (error) {
        l(error);
      }
      return J(s ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
    },
    Sn = async r => {
      return;
    },
    V = async (r, i, s) => {
      let y = await Je(i);
      if (y === null) return;
      throw ge(r, y, s !== void 0 && (await s(y.side).then(() => !0, () => !1)));
    },
    _e = async ({
      dir: dir_7,
      leaf: leaf_5
    }, s) => {
      if (!Oe(await n.lstat(dir_7, leaf_5), await s())) throw Error("another file has the name");
      await n.unlink(dir_7, leaf_5);
    },
    Ie = (r, i, s, y, p) => I(r, async (P, R, F) => {
      let C = null,
        Z = !1,
        de = async ee => {
          return;
        };
      await n.create(P, R, [...f, ...F], i, s, y, p, de).catch(async ee => {
        throw C === null ? ee : ge("create", C, Z && (await n.lstat(P, R).then(() => !1, G)));
      });
    }),
    Ne = r => async (i, to_2) => {
      await n.link(i.dir, i.leaf, to_2.dir, to_2.leaf), await V("link", {
        to: to_2,
        from: i
      }, async y => {
        let p = _e(to_2, () => n.lstat(i.dir, i.leaf));
        if (await p.catch(() => {}), r && y !== "destination") await n.unlink(i.dir, i.leaf);
        await p;
      });
    },
    linkIn = (r, i, s) => I(s, async (dir_8, leaf_6, dirs_8) => {
      await n.linkIn(T(r), K(i), dir_8, leaf_6), await V("link", {
        to: {
          dir: dir_8,
          dirs: dirs_8
        }
      }, () => _e({
        dir: dir_8,
        leaf: leaf_6,
        dirs: dirs_8
      }, () => n.statIn(T(r), K(i))));
    }),
    Be = r => async (i, to_3) => {
      await r(i.dir, i.leaf, to_3.dir, to_3.leaf), await V("rename", {
        to: to_3,
        from: i
      });
    };
  return {
    backend: backend,
    realRoot: realRoot,
    createsInHeldDirectory: n.createsInHeldDirectory !== !1,
    heldCreateRefusal: n.heldCreateRefusal ?? null,
    mkdirp: async (r, i = fn) => _(await E(se(r, sep), i)),
    create: (r, i, s) => Ie(r, i, s, !1),
    createSynced: (r, i, s, y) => Ie(r, i, s, !0, y),
    createAndOpen: (r, i) => I(r, (s, y, p) => n.createAndOpen(s, y, [...f, ...p], i)),
    link: (r, i) => z(r, i, Ne(!1)),
    rename: (r, i) => z(r, i, Be(n.rename)),
    placeCreated: (r, i) => z(r, i, n.renameNoReplace === void 0 ? Ne(!0) : Be(n.renameNoReplace)),
    symlink: (r, i) => I(i, (s, y) => n.symlink(r, s, y)),
    readlink: r => I(r, n.readlink),
    unlink: r => I(r, n.unlink),
    rmdir: r => I(r, n.rmdir),
    list: async (r, i) => {
      let s = r === "" ? [] : se(r, sep),
        y = await E(s, null);
      try {
        return u(), await D(y, i);
      } finally {
        await _(y);
      }
    },
    removeTree: (r, {
      keep: keep,
      onDeleted: onDeleted
    } = {}) => I(r, async (y, p, P) => {
      if (keep !== void 0) K(keep);
      let R = keep === void 0 ? null : Buffer.from(keep),
        F = N => R !== null && (typeof N === "string" ? N === keep : N.equals(R)),
        {
          bytes: bytes
        } = n,
        Z = (N, H) => typeof H === "string" ? n.unlink(N, H) : bytes.unlink(N, H),
        de = (N, H) => typeof H === "string" ? n.rmdir(N, H) : bytes.rmdir(N, H),
        ee = (N, H) => typeof H === "string" ? n.openDir(N, H) : bytes.openDir(N, H),
        ue = async N => bytes === void 0 ? D(N) : pn(await bytes.list(N), sep),
        ne = async (N, H) => {
          try {
            await Z(N, H);
          } catch (error) {
            let te = k(error);
            if (te === "ENOENT") return "gone";
            if (te === "EISDIR" || te === "EPERM") return "directory";
            throw error;
          }
          return onDeleted?.(), "gone";
        },
        ae = mn,
        re = async (N, H, U, te, Ae = !1) => {
          for (let He = 0;; He++) {
            u();
            let De = (await ue(U)).filter(item => !(Ae && F(item)));
            if (ae -= De.length, ae < 0) throw Object.assign(Error("directory too large to remove: too many entries"), {
              code: "E2BIG"
            });
            if (te.length >= hn) throw Object.assign(Error("directory too deep to remove"), {
              code: "ENAMETOOLONG"
            });
            let Ce = !1,
              qe = ha(gn, async B => {
                if (Ce) throw Se;
                u();
                try {
                  return await ne(U, B);
                } catch (error) {
                  throw Ce = !0, error;
                }
              }),
              Te = await Promise.allSettled(De.map(item => qe(item))),
              pe = Te.filter(item => item.status === "rejected");
            if (pe.length > 0) throw (pe.find(item => item.reason !== Se) ?? pe[0]).reason;
            let ze = De.filter((item, index) => {
              let Fe = Te[index];
              return Fe?.status === "fulfilled" && Fe.value === "directory";
            });
            for (let B of ze) {
              let L = await ee(U, B).catch(() => null);
              if (L === null) {
                if ((await ne(U, B)) === "directory") await de(U, B), onDeleted?.();
                continue;
              }
              try {
                await re(U, B, L, [...te, B]);
              } finally {
                await n.closeDir(L);
              }
            }
            if (Ae && R !== null) return;
            try {
              await de(N, H), onDeleted?.();
              return;
            } catch (error) {
              let L = k(error);
              if (L === "ENOENT") return;
              if (L !== "ENOTEMPTY" || He >= yn) throw error;
            }
          }
        },
        we = await n.openDir(y, p).catch(async N => {
          if (G(N)) return null;
          if (R !== null) throw X(N);
          if ((await ne(y, p)) === "gone") return null;
          throw X(N);
        });
      if (we === null) return;
      try {
        await re(y, p, we, [...P, p], !0);
      } finally {
        await n.closeDir(we);
      }
    }),
    lstat: async r => {
      if (r !== "") return I(r, n.lstat);
      return u(), a.stat();
    },
    open: async (r, i) => {
      let s = Le(i);
      if (n.openBeneath !== void 0) {
        let {
          dirs: dirs_9,
          leaf: leaf_7
        } = fe(r, sep);
        return u(), n.openBeneath([...f, ...dirs_9], leaf_7, s);
      }
      return I(r, (y, p, P) => n.open(y, p, [...f, ...P], s));
    },
    anchorBeneath: async r => {
      let i = se(r, sep),
        s = n.holdOpenedDir(await E(i, null), o.path.join(realRoot, ...i));
      return Iur(backend, o, s, n.getHeldDir(s), s.realPath, n.forAnchorBeneath ?? n, [...f, ...i], b);
    },
    holdOutside: holdOutside,
    moveOut: (r, i, s) => I(r, async (dir_9, p, dirs_10) => {
      await n.renameOut(dir_9, p, T(i), K(s)), await V("rename", {
        from: {
          dir: dir_9,
          dirs: dirs_10
        }
      });
    }),
    moveIn: (r, i, s) => I(s, async (dir_10, p, dirs_11) => {
      await n.renameIn(T(r), K(i), dir_10, p), await V("rename", {
        to: {
          dir: dir_10,
          dirs: dirs_11
        }
      });
    }),
    linkIn: linkIn,
    placeCreatedIn: (r, i, s) => n.renameInNoReplace === void 0 ? linkIn(r, i, s) : I(s, async (dir_11, p, dirs_12) => {
      await n.renameInNoReplace(T(r), K(i), dir_11, p), await V("rename", {
        to: {
          dir: dir_11,
          dirs: dirs_12
        }
      });
    }),
    statIn: async (r, i) => n.statIn(T(r), K(i)),
    openIn: async (r, i, s) => n.openIn(T(r), K(i), Le(s)),
    unlinkIn: async (r, i) => n.unlinkIn(T(r), K(i)),
    close: close_2,
    [Symbol.asyncDispose]: close_2
  };
}
function Dn(e, o) {
  return e.filter(item => Ge(item, o));
}
function pn(e, o) {
  return e.filter(item => Ge(item.toString("latin1"), o));
}
function Ge(e, o) {
  return e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(o) && !e.includes("\x00");
}
function K(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\x00")) throw Error("a held-directory leaf must be one plain name");
  return e;
}
async function je(e, o) {
  let {
      fs: fs
    } = e,
    realPath = await fs.realpath(o).catch(() => null);
  if (realPath === null) return null;
  let dir_12 = await fs.open(realPath, Y).catch(() => null);
  if (dir_12 === null) return null;
  try {
    let [n, f] = await Promise.all([dir_12.stat({
      bigint: !0
    }), fs.lstat(realPath, {
      bigint: !0
    })]);
    if (!n.isDirectory() || !f.isDirectory() || n.ino === 0n || n.dev !== f.dev || n.ino !== f.ino) return await dir_12.close().catch(() => {}), null;
  } catch {
    return await dir_12.close().catch(() => {}), null;
  }
  return {
    realPath: realPath,
    dir: dir_12,
    stat: () => dir_12.stat({
      bigint: !0
    }),
    close: () => dir_12.close()
  };
}
function $e(e) {
  return {
    stat: () => e.stat({
      bigint: !0
    }),
    close: () => e.close()
  };
}
async function bn(e, o, a, d, g, n, f) {
  let b = (w, c) => e.chown(w, c).catch(h => {
    throw new jto(h);
  });
  try {
    if (await e.writeFile(o), n !== void 0 && n.to.gid !== n.from.gid) await b(n.from.uid, n.to.gid);
    if (await e.chmod(a), n !== void 0 && n.to.uid !== n.from.uid) await b(n.to.uid, n.to.gid);
    if (d) await e.sync();
    await f();
  } catch (error) {
    throw await g().catch(() => {}), await e.close().catch(() => {}), error;
  }
  try {
    await e.close();
  } catch (error) {
    throw await g().catch(() => {}), error;
  }
}
var Ve = (e, o) => o === void 0 ? e : e & 448;
async function els(e, o, a, d, g, n = !1, f, b = () => Promise.resolve()) {
  let {
      made: made,
      lookError: lookError
    } = await e.stat({
      bigint: !0
    }).then(made_2 => ({
      made: made_2,
      lookError: void 0
    }), lookError_2 => ({
      made: null,
      lookError: lookError_2
    })),
    h = async () => {
      let v = await d();
      if (made !== null && made.ino !== 0n && v !== null && v.dev === made.dev && v.ino === made.ino) await g();
    };
  if (f !== void 0 && made === null) throw await e.close().catch(() => {}), new jto(lookError);
  let O = made && {
    uid: Number(made.uid),
    gid: Number(made.gid)
  };
  return bn(e, o, a, n, h, f === void 0 || O === null ? void 0 : {
    from: O,
    to: {
      ...O,
      ...f
    }
  }, () => b(made));
}
async function Me(e, o, a) {
  let [d, g] = await Promise.all([e.fs.lstat(a, {
    bigint: !0
  }), o.stat({
    bigint: !0
  })]);
  return d.dev === g.dev && d.ino === g.ino && g.ino !== 0n;
}
async function Pn(e, o) {
  try {
    let [a, d] = await Promise.all([e.fs.lstat(`/proc/self/fd/${o.fd}/.`, {
      bigint: !0
    }), o.stat({
      bigint: !0
    })]);
    return a.dev === d.dev && a.ino === d.ino && d.ino !== 0n;
  } catch (error) {
    let d = k(error);
    if (d === "ENOENT" || d === "EACCES" || d === "EPERM") return !1;
    throw error;
  }
}
function On(e, o, {
  realRoot: realRoot_2,
  directoryCheck: directoryCheck
}, g) {
  let {
      fs: fs_2
    } = e,
    f = (c, h) => `/proc/self/fd/${c.fd}/${h}`,
    b = (c, h) => Buffer.concat([Buffer.from(`/proc/self/fd/${c.fd}/`), h]),
    w = {
      openDir: (c, h) => fs_2.open(f(c, h), Y),
      mkdir: async (c, h, mode) => {
        await fs_2.mkdir(f(c, h), {
          mode: mode
        });
      },
      closeDir: c => c.close(),
      ...{},
      create: async (c, h, O, v, M, j, x, W) => {
        if (await els(await fs_2.open(f(c, h), oe | A.O_NOFOLLOW, Ve(M, x)), v, M, () => fs_2.lstat(f(c, h), {
          bigint: !0
        }).catch(() => null), () => fs_2.unlink(f(c, h)), j, x, W), j) await c.sync().catch(() => {});
      },
      createAndOpen: (c, h, O, v) => fs_2.open(f(c, h), oe | A.O_NOFOLLOW, v),
      link: (c, h, O, v) => fs_2.link(f(c, h), f(O, v)),
      rename: (c, h, O, v) => fs_2.rename(f(c, h), f(O, v)),
      symlink: (c, h, O) => fs_2.symlink(c, f(h, O)),
      readlink: (c, h) => fs_2.readlink(f(c, h)),
      unlink: (c, h) => fs_2.unlink(f(c, h)),
      rmdir: (c, h) => fs_2.rmdir(f(c, h)),
      list: async (c, h) => {
        if (h === void 0) return fs_2.readdir(`/proc/self/fd/${c.fd}`);
        throw J("WORKING_LIST_UNSUPPORTED");
      },
      bytes: {
        list: c => fs_2.readdir(`/proc/self/fd/${c.fd}`, {
          encoding: "buffer"
        }),
        openDir: (c, h) => fs_2.open(b(c, h), Y),
        unlink: (c, h) => fs_2.unlink(b(c, h)),
        rmdir: (c, h) => fs_2.rmdir(b(c, h))
      },
      lstat: (c, h) => fs_2.lstat(f(c, h), {
        bigint: !0
      }),
      open: (c, h, O, v) => fs_2.open(f(c, h), v | A.O_NOFOLLOW | Zs),
      hold: c => je(e, c),
      getHeldDir: c => c.dir,
      holdOpenedDir: (dir_13, realPath_2) => ({
        realPath: realPath_2,
        dir: dir_13,
        stat: () => dir_13.stat({
          bigint: !0
        }),
        close: () => dir_13.close()
      }),
      renameOut: (c, h, O, v) => fs_2.rename(f(c, h), f(O.dir, v)),
      renameIn: (c, h, O, v) => fs_2.rename(f(c.dir, h), f(O, v)),
      linkIn: (c, h, O, v) => fs_2.link(f(c.dir, h), f(O, v)),
      statIn: (c, h) => fs_2.lstat(f(c.dir, h), {
        bigint: !0
      }),
      openIn: (c, h, O) => fs_2.open(f(c.dir, h), O | A.O_NOFOLLOW | Zs),
      unlinkIn: (c, h) => fs_2.unlink(f(c.dir, h))
    };
  return Iur("linux_procfd", e, $e(o), o, realRoot_2, w, [], directoryCheck);
}
function kn() {
  let e = globalThis.Bun?.ant?.posixFsAt;
  return null;
}
function vn(e, o, a) {
  return a >= 0 ? e.readdirat(o, {
    maxNames: Math.min(Math.floor(a), Number.MAX_SAFE_INTEGER)
  }) : [];
}
var En = /^\S+ ..x. \S+ \S+ \S+ +(\/.*\/(?:libc\.so\.6|libc-2\.\d+\.so|ld-musl-\w+\.so\.1))$/;
function Cri(e) {
  let [o, ...a] = new Set(e.split(`
`).flatMap(item => En.exec(item)?.[1] ?? []));
  return o === void 0 || a.length > 0 ? null : o;
}
var he = q(nn),
  le = q(Qe),
  xe = q(tn),
  Xe = q(rn),
  _n = q(Ze),
  In = q(en),
  Nn = q(on);
function Rn(e) {
  return {
    stat: o => he(e, o),
    writeFile: o => Nn(e, o),
    chown: (o, a) => In(e, o, a),
    chmod: o => _n(e, o),
    sync: () => Xe(e),
    close: () => le(e)
  };
}
var me,
  Bn = Jk(() => t("anchor: this runtime has no Bun.ant.posixFsAt, so the macOS backend cannot come up", {
    level: "warn"
  }));
function L8s() {
  let e = kn();
  if (e === null) return Bn(), null;
  if (me !== void 0) return me;
  let getBeneath = Jk(() => {
      return;
    }),
    a = (d, g) => {
      try {
        return g();
      } catch (error) {
        let f = Error("a file call failed (see the code and syscall properties)");
        throw f.errno = Ts(error) && error.errno !== void 0 ? Math.abs(error.errno) : 0, f.code = f.errno === 0 ? k(error) ?? "EUNKNOWN" : ln(-f.errno), f.syscall = d, f;
      }
    };
  return me = {
    openat: (d, g, n) => a("openat", () => e.openat(d, g, n)),
    getBeneath: getBeneath,
    mkdirat: (d, g, n) => a("mkdirat", () => e.mkdirat(d, g, n)),
    renameat: (d, g, n, f) => a("renameat", () => e.renameat(d, g, n, f)),
    linkat: (d, g, n, f) => a("linkat", () => e.linkat(d, g, n, f)),
    symlinkat: (d, g, n) => a("symlinkat", () => e.symlinkat(d, g, n)),
    readlinkat: (d, g) => a("readlinkat", () => e.readlinkat(d, g)),
    unlinkat: (d, g) => a("unlinkat", () => e.unlinkat(d, g)),
    rmdirat: (d, g) => a("unlinkat", () => e.unlinkat(d, g, {
      removeDir: !0
    })),
    listDirectory: (d, g) => a("readdir", () => g === void 0 ? e.readdirat(d) : vn(e, d, g)),
    listDirectoryBytes: d => a("readdir", () => e.readdirat(d, {
      encoding: "buffer"
    })),
    ...{}
  }, me;
}
function N8s(e) {
  return e.noFollowAnyEnforced ??= An(e);
}
async function An(e) {
  let {
      fs: fs_3,
      path: path
    } = e,
    d = null;
  try {
    d = await fs_3.realpath(await We(path.join(Ke(), "claude-nfa-"))), await fs_3.mkdir(path.join(d, "d")), await sn(path.join(d, "d"), path.join(d, "l"));
    let g = oe | Pe;
    try {
      await (await fs_3.open(path.join(d, "d", "control"), g, 384)).close();
    } catch (error) {
      if (k(error) === "EINVAL") return !1;
      throw error;
    }
    try {
      return await (await fs_3.open(path.join(d, "l", "probe"), g, 384)).close(), !1;
    } catch (error) {
      if (k(error) === "ELOOP") return !0;
      throw error;
    }
  } catch (error) {
    return t(`anchor: O_NOFOLLOW_ANY probe not run (${k(error) ?? "not an errno"})`), !0;
  } finally {
    if (d !== null) await Ue(d, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
async function Hn(e, o) {
  let a = o.getBeneath?.();
  if (a === void 0) return "not_bound";
  return (await F8s(e, a)) ?? ((d, g, n) => a.create(d, [g], n & 511));
}
function F8s(e, o) {
  return e.heldCreateProbed ??= Cn(o).then(a => {
    if (a === "probe_not_run" || a === "probe_create_failed") e.heldCreateProbed = void 0;
    return a;
  });
}
async function Cn(e) {
  let o = (n, f) => t(`anchor: the probe of the create in a held directory ${n}, so this ${f} creates by full path`),
    a = null,
    d = [],
    g = n => (d.push(n), he(n, {
      bigint: !0
    }));
  try {
    a = await We(`${Ke()}/claude-held-`);
    let n = await xe(a, Y);
    d.push(n);
    let f = await g(await xe(`${a}/by-path`, oe, 384)),
      b;
    try {
      b = await g(e.create(n, ["held"], 384));
    } catch (error) {
      return o(`failed (${k(error) ?? "not an errno"})`, "anchor"), "probe_create_failed";
    }
    if (b.mode !== f.mode) return o(`made a file of mode ${b.mode.toString(8)} where node made one of ${f.mode.toString(8)}`, "host"), "probe_wrong_mode";
    let w = await an(`${a}/held`, {
      bigint: !0
    }).catch(c => {
      if (G(c)) return null;
      throw c;
    });
    if (w === null || !Oe(b, w)) return o("made a file that is not seen at its name", "host"), "probe_wrong_place";
    return null;
  } catch (error) {
    return o(`could not be staged (${k(error) ?? "not an errno"})`, "anchor"), "probe_not_run";
  } finally {
    if (await Promise.all(d.map(item => le(item).catch(() => {}))), a !== null) await Ue(a, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var be = A.O_RDONLY | un | A.O_NONBLOCK;
function Tn(e, o, a, {
  realRoot: realRoot_3,
  directoryCheck: directoryCheck_2
}, heldCreateRefusal, f, b) {
  let {
      fs: fs_4,
      path: path_2
    } = e,
    h = (_, m, u, D) => fs_4.open(path_2.join(realRoot_3, ..._, m), u & ~A.O_NOFOLLOW | Pe | Zs, D),
    lstat = async (_, m) => {
      let u = o.fstatat?.(_, m);
      return u !== void 0 && u.dev >= 0n && u.ino < 2n ** 63n ? u : v(_, m, be);
    },
    v = async (_, m, u) => {
      let D = o.openat(_, m, u | Zs);
      try {
        return await he(D, {
          bigint: !0
        });
      } finally {
        await le(D);
      }
    },
    M = async (_, m, u) => {
      try {
        let [D, E] = await Promise.all([_.stat({
          bigint: !0
        }), m()]);
        if (D.dev !== E.dev || D.ino !== E.ino) throw u?.(), Object.assign(Error("not the file the held directory names"), {
          code: "ELOOP"
        });
        return _;
      } catch (error) {
        throw await _.close().catch(() => {}), error;
      }
    },
    j = async (_, m, u, D, E) => {
      try {
        return _ === null ? await h(D, u, oe, E) : Rn(_(m, u, E));
      } catch (error) {
        throw X(error);
      }
    },
    {
      listDirectory: listDirectory,
      listDirectoryBytes: listDirectoryBytes
    } = o,
    T = _ => ({
      ...(listDirectoryBytes !== void 0 && {
        bytes: {
          list: async m => listDirectoryBytes(m),
          openDir: async (m, u) => o.openat(m, u, Y),
          unlink: async (m, u) => o.unlinkat(m, u),
          rmdir: async (m, u) => o.rmdirat(m, u)
        }
      }),
      openDir: async (m, u) => o.openat(m, u, Y),
      mkdir: async (m, u, D) => o.mkdirat(m, u, D),
      closeDir: m => le(m),
      createsInHeldDirectory: _ !== null,
      ...(_ !== null && {
        statDirectoryByPath: async m => {
          let u = await h(m, "", Y | A.O_NONBLOCK).catch(D => {
            throw X(D);
          });
          try {
            return await u.stat({
              bigint: !0
            });
          } finally {
            await u.close();
          }
        }
      }),
      create: async (m, u, D, E, I, z, Q, ce) => {
        if (await els(await j(_, m, u, D, Ve(I, Q)), E, I, () => v(m, u, be).catch(() => null), () => o.unlinkat(m, u), z, Q, ce), z) await Xe(m).catch(() => {});
      },
      createAndOpen: (m, u, D, E) => h(D, u, oe, E).catch(I => {
        throw X(I);
      }),
      link: async (m, u, D, E) => o.linkat(m, u, D, E),
      rename: async (m, u, D, E) => o.renameat(m, u, D, E),
      symlink: async (m, u, D) => {
        if (o.symlinkat === void 0) throw J("WORKING_LINK_UNSUPPORTED");
        o.symlinkat(m, u, D);
      },
      readlink: async (m, u) => {
        if (o.readlinkat === void 0) throw J("WORKING_LINK_UNSUPPORTED");
        return o.readlinkat(m, u);
      },
      unlink: async (m, u) => o.unlinkat(m, u),
      rmdir: async (m, u) => o.rmdirat(m, u),
      ...(listDirectory !== void 0 && {
        list: async (m, u) => listDirectory(m, u)
      }),
      lstat: lstat,
      open: async (m, u, D, E) => M(await h(D, u, E), () => lstat(m, u), () => b?.([...D, u].join("/"))),
      ...(b === null && {
        openBeneath: (m, u, D) => h(m, u, D)
      }),
      hold: m => je(e, m),
      getHeldDir: m => m.dir.fd,
      holdOpenedDir: (fd, realPath_3) => ({
        realPath: realPath_3,
        dir: {
          fd: fd
        },
        stat: () => he(fd, {
          bigint: !0
        }),
        close: () => le(fd)
      }),
      renameOut: async (m, u, D, E) => o.renameat(m, u, D.dir.fd, E),
      renameIn: async (m, u, D, E) => o.renameat(m.dir.fd, u, D, E),
      linkIn: async (m, u, D, E) => o.linkat(m.dir.fd, u, D, E),
      statIn: (m, u) => lstat(m.dir.fd, u),
      openIn: async (m, u, D) => M(await fs_4.open(path_2.join(m.realPath, u), D & ~A.O_NOFOLLOW | Pe | Zs), () => v(m.dir.fd, u, be)),
      unlinkIn: async (m, u) => o.unlinkat(m.dir.fd, u)
    });
  return Iur("darwin_at", e, $e(a), a.fd, realRoot_3, {
    ...T(typeof heldCreateRefusal === "function" ? heldCreateRefusal : null),
    ...(typeof heldCreateRefusal === "string" && {
      heldCreateRefusal: heldCreateRefusal
    }),
    ...(!f && {
      forAnchorBeneath: T(null)
    })
  }, [], directoryCheck_2);
}
function Rri(e, o, {
  createsInHeldDirectoryCheckedByPath = !1
} = {}) {
  return jOn(e, {
    gitRoot: o,
    realRoot: o,
    isRootNameExchangeable: !0,
    ...(createsInHeldDirectoryCheckedByPath && {
      [Ye]: !0
    })
  });
}
async function jOn(e, o) {
  let {
      [Ye]: a,
      ...d
    } = o,
    g = void 0,
    n = !1,
    f = {
      ...d,
      directoryCheck: void 0
    };
  switch (e.platform()) {
    case "windows":
      {
        let {
            loadNt: loadNt
          } = await import("B:/~BUN/root/chunk-09wcdzfw.js"),
          w = loadNt();
        if (w === null) return {
          unavailable: "no_ffi"
        };
        let {
            openWin32Backend: openWin32Backend
          } = await import("B:/~BUN/root/chunk-x20fwh1s.js"),
          h = await openWin32Backend(e, w, f);
        return "unanchored" in h ? {
          unavailable: h.unanchored
        } : Iur("win32_handle", e, h.root, h.held, f.realRoot, h.ops);
      }
    case "linux":
    case "wsl":
      {
        let b = await e.fs.open(f.realRoot, Y);
        try {
          if (!(await Me(e, b, f.realRoot))) return await b.close(), {
            unavailable: "unstable_identity"
          };
          if (await Pn(e, b)) {
            let w = (void 0)?.createsInHeldDirectory === !0 || !1;
            return On(e, b, f, w);
          }
          return await b.close(), {
            unavailable: "no_procfs"
          };
        } catch (error) {
          throw await b.close().catch(() => {}), error;
        }
      }
    case "macos":
      {
        let b = e.darwinAt ?? L8s();
        if (b === null) return {
          unavailable: "no_ffi"
        };
        if (!(await N8s(e))) return {
          unavailable: "nofollow_any_unenforced"
        };
        let w = await e.fs.open(f.realRoot, Y);
        try {
          if ((await O3t(e, f)) !== f.realRoot) throw dn();
          if (!(await Me(e, w, f.realRoot))) return await w.close(), {
            unavailable: "unstable_identity"
          };
          return Tn(e, b, w, f, (void 0)?.createsInHeldDirectory === !0 ? await Hn(e, b) : null, !1, null);
        } catch (error) {
          throw await w.close().catch(() => {}), error;
        }
      }
    case "unknown":
      return {
        unavailable: "unsupported_platform"
      };
  }
}
function Ari(e) {
  return e.kind === "unavailable" ? e.reason : null;
}
async function xri(e, {
  host = P3t(),
  now: now_2 = () => performance.now()
} = {}) {
  let d = now_2();
  return {
    ...(await Fn(host, e).catch(n => ({
      kind: "threw"
    }))),
    elapsedMs: Math.round(now_2() - d)
  };
}
async function Fn(e, gitRoot) {
  let a = await jOn(e, {
    gitRoot: gitRoot,
    realRoot: await e.fs.realpath(gitRoot)
  });
  if ("unavailable" in a) return {
    kind: "unavailable",
    reason: a.unavailable
  };
  return await a.close().catch(() => {}), {
    kind: "available"
  };
}
export { jto, D8s, Tri, Iur, els, Cri, L8s, N8s, F8s, Rri, jOn, Ari, xri };