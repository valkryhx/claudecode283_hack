// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, ci, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { AEn, xEn } from "B:/~BUN/root/chunk-t8dpb5qp.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
import { Am } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { close as an, constants as A, fchmod as sn, fchown as ln, fstat as dn, fsync as cn, open as un, writeFile as fn } from "fs";
import { lstat as mn, mkdtemp as Ve, rm as Xe, symlink as hn } from "fs/promises";
import { tmpdir as Je } from "os";
import { getSystemErrorName as yn, promisify as Q } from "util";
class l7o extends Error {
  code;
  constructor(cause) {
    super("the new file could not be given its owner", {
      cause: cause
    });
    this.code = k(cause);
  }
}
var Paa = ["unsupported_platform", "no_procfs", "no_ffi", "nofollow_any_unenforced", "remote_volume", "unstable_identity", "bring_up_failed", "no_hard_links"];
function rba(e) {
  return Paa.includes(e);
}
function wn(e) {
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
function gn() {
  let e = Error("tree anchor root is not a canonical path");
  return e.code = "WORKING_ROOT_NOT_CANONICAL", e;
}
function z(e) {
  let o = wn(e);
  return o.code = e, o;
}
var qe = Symbol("createsInHeldDirectoryCheckedByPath"),
  _e = 536870912,
  Dn = 2097152,
  Y = A.O_RDONLY | A.O_DIRECTORY | A.O_NOFOLLOW | ro,
  ae = A.O_WRONLY | A.O_CREAT | A.O_EXCL | ro,
  bn = 511,
  pn = 1e7,
  Pn = 512,
  kn = 3,
  On = 16,
  Ke = Error("removeTree stopped after a failure");
function ce(e, o) {
  let l = e.split("/");
  if (e.includes("\x00") || l.some(item => item === "" || item === "." || item === ".." || o !== "/" && item.includes(o))) throw Error("anchored path must be relative, of plain segments");
  return l;
}
function he(e, o) {
  let l = ce(e, o);
  return {
    dirs: l.slice(0, -1),
    leaf: l.at(-1) ?? ""
  };
}
function Ye(e) {
  if ((e & A.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}
function q(e) {
  let o = k(e);
  return o === "ENOTDIR" || o === "ELOOP" ? z("WORKING_PARENT_NOT_DIRECTORY") : e;
}
var oe = {
  found: "same"
};
function we(e, o) {
  return e.ino !== 0n && e.dev === o.dev && e.ino === o.ino;
}
async function vn(e, o, l, c, w) {
  let n = null;
  try {
    for (let [m, P] of c.entries()) {
      let g = n ?? e.getHeldDir(l),
        d = await (m < c.length - 1 && e.openDirToPass !== void 0 ? e.openDirToPass(g, P, w) : e.openDir(g, P, w));
      if (n !== null) await e.closeDir(n);
      n = d;
    }
  } catch {
    if (n !== null) await e.closeDir(n);
    return null;
  } finally {
    await l.close();
  }
  return n === null ? null : e.holdOpenedDir(n, o.path.join(l.realPath, ...c));
}
function LXr(backend, o, l, c, realRoot, n, m = [], P) {
  let {
      sep: sep
    } = o.path,
    d = void 0,
    h = void 0,
    O = void 0,
    v = void 0,
    j = !1,
    Z = !1,
    {
      renameNoReplace: renameNoReplace,
      renameInNoReplace: renameInNoReplace
    } = n,
    V = null,
    close_2 = () => V ??= l.close(),
    weakMap = new WeakMap(),
    holdOutside = async (r, i, s = !1) => {
      let f = i === "" ? [] : ce(i, sep),
        D = await n.hold(r),
        p = D === null || f.length === 0 ? D : await vn(n, o, D, f, s);
      if (p === null) return null;
      let E = null,
        close = () => E ??= p.close(),
        H = {
          realPath: p.realPath,
          get closed() {
            return E !== null;
          },
          stat: async () => {
            if (E !== null) throw Error("held directory is closed");
            return p.stat();
          },
          close: close,
          [Symbol.asyncDispose]: close
        };
      return weakMap.set(H, p), H;
    },
    b = r => {
      let i = weakMap.get(r);
      if (i === void 0) throw Error("held directory belongs to another anchor");
      if (r.closed) throw Error("held directory is closed");
      return i;
    },
    I = r => r === c ? Promise.resolve() : n.closeDir(r),
    G = async (dir, i, s, dirs) => {
      try {
        return await n.openDir(dir, i);
      } catch (error) {
        if (s === null || !K(error)) throw q(error);
        if (await n.mkdir(dir, i, s).then(() => !0, E => {
          if (k(E) !== "EEXIST") throw E;
          return !1;
        })) await ee("mkdir", {
          to: {
            dir: dir,
            dirs: dirs
          }
        }, () => n.rmdir(dir, i));
        return n.openDir(dir, i).catch(E => {
          throw q(E);
        });
      }
    },
    F = () => {
      if (V !== null) throw Error("tree anchor is closed");
    },
    se = async (r, i) => {
      if (n.list === void 0) throw z("WORKING_LIST_UNSUPPORTED");
      let s = typeof i === "object" ? i.first : i,
        f = await n.list(r, s);
      if (s !== void 0 && !(f.length <= s)) {
        if (typeof i === "object" && s >= 0) return Ge(f.slice(0, s), sep);
        throw z("WORKING_LIST_TOO_LONG");
      }
      return Ge(f, sep);
    },
    X = async (r, i) => {
      F();
      let s = c;
      try {
        for (let [f, D] of r.entries()) {
          F();
          let p = await G(s, D, i, r.slice(0, f));
          await I(s), s = p;
        }
        return s;
      } catch (error) {
        throw await I(s), error;
      }
    },
    B = async (r, i) => {
      let {
          dirs: dirs_2,
          leaf: leaf
        } = he(r, sep),
        D = await X(dirs_2, null);
      try {
        return F(), await i(D, leaf, dirs_2);
      } finally {
        await I(D);
      }
    },
    De = async (r, i, s) => {
      let f = he(i, sep);
      return he(r, sep).dirs.join("/") === f.dirs.join("/") ? B(r, (dir_2, leaf_2, dirs_3) => s({
        dir: dir_2,
        leaf: leaf_2,
        dirs: dirs_3
      }, {
        dir: dir_2,
        leaf: f.leaf,
        dirs: dirs_3
      })) : B(r, (dir_3, leaf_3, dirs_4) => B(i, (dir_4, leaf_4, dirs_5) => s({
        dir: dir_3,
        leaf: leaf_3,
        dirs: dirs_4
      }, {
        dir: dir_4,
        leaf: leaf_4,
        dirs: dirs_5
      })));
    },
    be = checkError => K(checkError) ? {
      found: "missing"
    } : k(checkError) === "WORKING_PARENT_NOT_DIRECTORY" ? {
      found: "replaced"
    } : {
      found: "check_failed",
      checkError: checkError
    },
    Ne = async (r, i) => {
      let s = await X(r, null).then(now => ({
        now: now
      }), be);
      if (!("now" in s)) return s;
      try {
        return await i(s.now);
      } catch (error) {
        return be(error);
      } finally {
        await I(s.now).catch(() => {});
      }
    },
    pe = r => n.holdOpenedDir(r, "").stat(),
    Re = (r, i) => r.dev !== i.dev ? {
      found: "replaced",
      differs: "device"
    } : r.ino !== i.ino ? {
      found: "replaced",
      differs: "inode"
    } : oe,
    Be = async ({
      dir: dir_5,
      dirs: dirs_6
    }) => dirs_6.length === 0 ? oe : Ne(dirs_6, async s => Re(await pe(dir_5), await pe(s))),
    Ae = async ({
      dir: dir_6,
      dirs: dirs_7
    }) => oe,
    fe = null,
    Pe = async ({
      to: to,
      from: i
    }) => null,
    me = (operation, i, s) => {
      try {
        (void 0)?.({
          operation: operation,
          ...i,
          outcome: s ? "undone" : "not_undone"
        });
      } catch (error) {
        a(error);
      }
      return z(s ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
    },
    Un = async r => {
      return;
    },
    ee = async (r, i, s) => {
      let f = await Pe(i);
      if (f === null) return;
      throw me(r, f, s !== void 0 && (await s(f.side).then(() => !0, () => !1)));
    },
    He = async ({
      dir: dir_7,
      leaf: leaf_5
    }, s) => {
      if (!we(await n.lstat(dir_7, leaf_5), await s())) throw Error("another file has the name");
      await n.unlink(dir_7, leaf_5);
    },
    Ce = (r, i, s, f, D) => B(r, async (dir_8, E, dirs_8) => {
      let H = null,
        J = !1,
        ke = async ne => {
          let le = async te => ne !== null && we(ne, await n.lstat(te, E));
          if (fe !== null && !(await fe())) throw H = {
            found: "replaced",
            side: "destination",
            rel: dirs_8.join("/")
          }, J = await le(dir_8).catch(() => !1), Error("the root is not in its place");
          let re = oe,
            de = re.found === "same" || (await Ne(dirs_8, async te => ({
              found: (await le(te)) ? "same" : "replaced"
            }))).found === "same" ? await Ae({
              dir: dir_8,
              dirs: dirs_8
            }) : re;
          if (de.found === "same") return;
          throw H = {
            ...de,
            side: "destination",
            rel: dirs_8.join("/")
          }, J = await le(dir_8).catch(() => !1), Error("the file is not at its name");
        };
      await n.create(dir_8, E, [...m, ...dirs_8], i, s, f, D, void 0).catch(async ne => {
        throw H === null ? ne : me("create", H, J && (await n.lstat(dir_8, E).then(() => !1, K)));
      });
    }),
    Te = r => async (i, to_2) => {
      await n.link(i.dir, i.leaf, to_2.dir, to_2.leaf), await ee("link", {
        to: to_2,
        from: i
      }, async f => {
        let D = He(to_2, () => n.lstat(i.dir, i.leaf));
        if (await D.catch(() => {}), r && f !== "destination") await n.unlink(i.dir, i.leaf);
        await D;
      });
    },
    linkIn = (r, i, s) => B(s, async (dir_9, leaf_6, dirs_9) => {
      await n.linkIn(b(r), U(i), dir_9, leaf_6), await ee("link", {
        to: {
          dir: dir_9,
          dirs: dirs_9
        }
      }, () => He({
        dir: dir_9,
        leaf: leaf_6,
        dirs: dirs_9
      }, () => n.statIn(b(r), U(i))));
    }),
    rn = async (r, to_3) => {
      await n.rename(r.dir, r.leaf, to_3.dir, to_3.leaf), await ee("rename", {
        to: to_3,
        from: r
      });
    },
    Se = async (r, i, s) => s();
  return {
    backend: backend,
    realRoot: realRoot,
    createsInHeldDirectory: n.createsInHeldDirectory !== !1,
    heldCreateRefusal: n.heldCreateRefusal ?? null,
    ...!1,
    checksCreatedFiles: !1,
    mkdirp: async (r, i = bn) => I(await X(ce(r, sep), i)),
    create: (r, i, s) => Ce(r, i, s, !1),
    createSynced: (r, i, s, f) => Ce(r, i, s, !0, f),
    createAndOpen: (r, i) => B(r, (s, f, D) => n.createAndOpen(s, f, [...m, ...D], i)),
    link: (r, i) => De(r, i, Te(!1)),
    rename: (r, i) => De(r, i, rn),
    placeCreated: (r, i) => De(r, i, renameNoReplace === void 0 ? Te(!0) : (s, to_4) => Se({
      to: to_4,
      from: s
    }, to_4, D => renameNoReplace(s.dir, s.leaf, to_4.dir, to_4.leaf, D))),
    symlink: (r, i) => B(i, (s, f) => n.symlink(r, s, f)),
    readlink: r => B(r, n.readlink),
    unlink: r => B(r, n.unlink),
    rmdir: r => B(r, n.rmdir),
    list: async (r, i) => {
      let s = r === "" ? [] : ce(r, sep),
        f = await X(s, null);
      try {
        return F(), await se(f, i);
      } finally {
        await I(f);
      }
    },
    removeTree: (r, {
      keep: keep,
      onDeleted: onDeleted
    } = {}) => B(r, async (f, D, p) => {
      if (keep !== void 0) U(keep);
      let E = keep === void 0 ? null : Buffer.from(keep),
        T = _ => E !== null && (typeof _ === "string" ? _ === keep : _.equals(E)),
        {
          bytes: bytes
        } = n,
        J = (_, C) => typeof C === "string" ? n.unlink(_, C) : bytes.unlink(_, C),
        ke = (_, C) => typeof C === "string" ? n.rmdir(_, C) : bytes.rmdir(_, C),
        ne = (_, C) => typeof C === "string" ? n.openDir(_, C) : bytes.openDir(_, C),
        le = async _ => bytes === void 0 ? se(_) : In(await bytes.list(_), sep),
        re = async (_, C) => {
          try {
            await J(_, C);
          } catch (error) {
            let ie = k(error);
            if (ie === "ENOENT") return "gone";
            if (ie === "EISDIR" || ie === "EPERM") return "directory";
            throw error;
          }
          return onDeleted?.(), "gone";
        },
        de = pn,
        te = async (_, C, W, ie, Le = !1) => {
          for (let Me = 0;; Me++) {
            F();
            let ve = (await le(W)).filter(item => !(Le && T(item)));
            if (de -= ve.length, de < 0) throw Object.assign(Error("directory too large to remove: too many entries"), {
              code: "E2BIG"
            });
            if (ie.length >= Pn) throw Object.assign(Error("directory too deep to remove"), {
              code: "ENAMETOOLONG"
            });
            let xe = !1,
              tn = Ja(On, async R => {
                if (xe) throw Ke;
                F();
                try {
                  return await re(W, R);
                } catch (error) {
                  throw xe = !0, error;
                }
              }),
              We = await Promise.allSettled(ve.map(item => tn(item))),
              Ie = We.filter(item => item.status === "rejected");
            if (Ie.length > 0) throw (Ie.find(item => item.reason !== Ke) ?? Ie[0]).reason;
            let on = ve.filter((item, index) => {
              let Ue = We[index];
              return Ue?.status === "fulfilled" && Ue.value === "directory";
            });
            for (let R of on) {
              let M = await ne(W, R).catch(() => null);
              if (M === null) {
                if ((await re(W, R)) === "directory") await ke(W, R), onDeleted?.();
                continue;
              }
              try {
                await te(W, R, M, [...ie, R]);
              } finally {
                await n.closeDir(M);
              }
            }
            if (Le && E !== null) return;
            try {
              await ke(_, C), onDeleted?.();
              return;
            } catch (error) {
              let M = k(error);
              if (M === "ENOENT") return;
              if (M !== "ENOTEMPTY" || Me >= kn) throw error;
            }
          }
        },
        Oe = await n.openDir(f, D).catch(async _ => {
          if (K(_)) return null;
          if (E !== null) throw q(_);
          if ((await re(f, D)) === "gone") return null;
          throw q(_);
        });
      if (Oe === null) return;
      try {
        await te(f, D, Oe, [...p, D], !0);
      } finally {
        await n.closeDir(Oe);
      }
    }),
    lstat: async r => {
      if (r !== "") return B(r, n.lstat);
      return F(), l.stat();
    },
    open: async (r, i) => {
      let s = Ye(i);
      if (n.openBeneath !== void 0) {
        let {
          dirs: dirs_10,
          leaf: leaf_7
        } = he(r, sep);
        return F(), n.openBeneath([...m, ...dirs_10], leaf_7, s);
      }
      return B(r, (f, D, p) => n.open(f, D, [...m, ...p], s));
    },
    anchorBeneath: async r => {
      let i = ce(r, sep),
        s = n.holdOpenedDir(await X(i, null), o.path.join(realRoot, ...i));
      return LXr(backend, o, s, n.getHeldDir(s), s.realPath, n.forAnchorBeneath ?? n, [...m, ...i], P);
    },
    holdOutside: holdOutside,
    moveOut: (r, i, s) => B(r, async (dir_10, D, dirs_11) => {
      await n.renameOut(dir_10, D, b(i), U(s)), await ee("rename", {
        from: {
          dir: dir_10,
          dirs: dirs_11
        }
      });
    }),
    moveIn: (r, i, s) => B(s, async (dir_11, D, dirs_12) => {
      await n.renameIn(b(r), U(i), dir_11, D), await ee("rename", {
        to: {
          dir: dir_11,
          dirs: dirs_12
        }
      });
    }),
    linkIn: linkIn,
    placeCreatedIn: (r, i, s) => renameInNoReplace === void 0 ? linkIn(r, i, s) : B(s, (dir_12, leaf_8, dirs_13) => Se({
      to: {
        dir: dir_12,
        dirs: dirs_13
      }
    }, {
      dir: dir_12,
      leaf: leaf_8,
      dirs: dirs_13
    }, E => renameInNoReplace(b(r), U(i), dir_12, leaf_8, E))),
    statIn: async (r, i) => n.statIn(b(r), U(i)),
    openIn: async (r, i, s) => n.openIn(b(r), U(i), Ye(s)),
    unlinkIn: async (r, i) => n.unlinkIn(b(r), U(i)),
    close: close_2,
    [Symbol.asyncDispose]: close_2
  };
}
function Ge(e, o) {
  return e.filter(item => ze(item, o));
}
function In(e, o) {
  return e.filter(item => ze(item.toString("latin1"), o));
}
function ze(e, o) {
  return e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(o) && !e.includes("\x00");
}
function U(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\x00")) throw Error("a held-directory leaf must be one plain name");
  return e;
}
async function Qe(e, o) {
  let {
      fs: fs
    } = e,
    realPath = await fs.realpath(o).catch(() => null);
  if (realPath === null) return null;
  let dir_13 = await fs.open(realPath, Y).catch(() => null);
  if (dir_13 === null) return null;
  try {
    let [n, m] = await Promise.all([dir_13.stat({
      bigint: !0
    }), fs.lstat(realPath, {
      bigint: !0
    })]);
    if (!n.isDirectory() || !m.isDirectory() || n.ino === 0n || n.dev !== m.dev || n.ino !== m.ino) return await dir_13.close().catch(() => {}), null;
  } catch {
    return await dir_13.close().catch(() => {}), null;
  }
  return {
    realPath: realPath,
    dir: dir_13,
    stat: () => dir_13.stat({
      bigint: !0
    }),
    close: () => dir_13.close()
  };
}
function Ze(e) {
  return {
    stat: () => e.stat({
      bigint: !0
    }),
    close: () => e.close()
  };
}
async function En(e, o, l, c, w, n, m) {
  let P = (g, d) => e.chown(g, d).catch(h => {
    throw new l7o(h);
  });
  try {
    if (await e.writeFile(o), n !== void 0 && n.to.gid !== n.from.gid) await P(n.from.uid, n.to.gid);
    if (await e.chmod(l), n !== void 0 && n.to.uid !== n.from.uid) await P(n.to.uid, n.to.gid);
    if (c) await e.sync();
    await m();
  } catch (error) {
    throw await w().catch(() => {}), await e.close().catch(() => {}), error;
  }
  try {
    await e.close();
  } catch (error) {
    throw await w().catch(() => {}), error;
  }
}
var en = (e, o) => o === void 0 ? e : e & 448;
async function Jpi(e, o, l, c, w, n = !1, m, P = () => Promise.resolve()) {
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
      let v = await c();
      if (made !== null && made.ino !== 0n && v !== null && v.dev === made.dev && v.ino === made.ino) await w();
    };
  if (m !== void 0 && made === null) throw await e.close().catch(() => {}), new l7o(lookError);
  let O = made && {
    uid: Number(made.uid),
    gid: Number(made.gid)
  };
  return En(e, o, l, n, h, m === void 0 || O === null ? void 0 : {
    from: O,
    to: {
      ...O,
      ...m
    }
  }, () => P(made));
}
async function je(e, o, l) {
  let [c, w] = await Promise.all([e.fs.lstat(l, {
    bigint: !0
  }), o.stat({
    bigint: !0
  })]);
  return c.dev === w.dev && c.ino === w.ino && w.ino !== 0n;
}
async function _n(e, o) {
  try {
    let [l, c] = await Promise.all([e.fs.lstat(`/proc/self/fd/${o.fd}/.`, {
      bigint: !0
    }), o.stat({
      bigint: !0
    })]);
    return l.dev === c.dev && l.ino === c.ino && c.ino !== 0n;
  } catch (error) {
    let c = k(error);
    if (c === "ENOENT" || c === "EACCES" || c === "EPERM") return !1;
    throw error;
  }
}
function Nn(e, o, {
  realRoot: realRoot_2,
  directoryCheck: directoryCheck
}, w) {
  let {
      fs: fs_2
    } = e,
    m = (d, h) => `/proc/self/fd/${d.fd}/${h}`,
    P = (d, h) => Buffer.concat([Buffer.from(`/proc/self/fd/${d.fd}/`), h]),
    g = {
      openDir: (d, h) => fs_2.open(m(d, h), Y),
      mkdir: async (d, h, mode) => {
        await fs_2.mkdir(m(d, h), {
          mode: mode
        });
      },
      closeDir: d => d.close(),
      ...{},
      create: async (d, h, O, v, j, Z, x, L) => {
        if (await Jpi(await fs_2.open(m(d, h), ae | A.O_NOFOLLOW, en(j, x)), v, j, () => fs_2.lstat(m(d, h), {
          bigint: !0
        }).catch(() => null), () => fs_2.unlink(m(d, h)), Z, x, L), Z) await d.sync().catch(() => {});
      },
      createAndOpen: (d, h, O, v) => fs_2.open(m(d, h), ae | A.O_NOFOLLOW, v),
      link: (d, h, O, v) => fs_2.link(m(d, h), m(O, v)),
      rename: (d, h, O, v) => fs_2.rename(m(d, h), m(O, v)),
      symlink: (d, h, O) => fs_2.symlink(d, m(h, O)),
      readlink: (d, h) => fs_2.readlink(m(d, h)),
      unlink: (d, h) => fs_2.unlink(m(d, h)),
      rmdir: (d, h) => fs_2.rmdir(m(d, h)),
      list: async (d, h) => {
        if (h === void 0) return fs_2.readdir(`/proc/self/fd/${d.fd}`);
        throw z("WORKING_LIST_UNSUPPORTED");
      },
      bytes: {
        list: d => fs_2.readdir(`/proc/self/fd/${d.fd}`, {
          encoding: "buffer"
        }),
        openDir: (d, h) => fs_2.open(P(d, h), Y),
        unlink: (d, h) => fs_2.unlink(P(d, h)),
        rmdir: (d, h) => fs_2.rmdir(P(d, h))
      },
      lstat: (d, h) => fs_2.lstat(m(d, h), {
        bigint: !0
      }),
      open: (d, h, O, v) => fs_2.open(m(d, h), v | A.O_NOFOLLOW | ro),
      hold: d => Qe(e, d),
      getHeldDir: d => d.dir,
      holdOpenedDir: (dir_14, realPath_2) => ({
        realPath: realPath_2,
        dir: dir_14,
        stat: () => dir_14.stat({
          bigint: !0
        }),
        close: () => dir_14.close()
      }),
      renameOut: (d, h, O, v) => fs_2.rename(m(d, h), m(O.dir, v)),
      renameIn: (d, h, O, v) => fs_2.rename(m(d.dir, h), m(O, v)),
      linkIn: (d, h, O, v) => fs_2.link(m(d.dir, h), m(O, v)),
      statIn: (d, h) => fs_2.lstat(m(d.dir, h), {
        bigint: !0
      }),
      openIn: (d, h, O) => fs_2.open(m(d.dir, h), O | A.O_NOFOLLOW | ro),
      unlinkIn: (d, h) => fs_2.unlink(m(d.dir, h))
    };
  return LXr("linux_procfd", e, Ze(o), o, realRoot_2, g, [], directoryCheck);
}
function Rn() {
  let e = globalThis.Bun?.ant?.posixFsAt;
  return null;
}
function Bn(e, o, l) {
  return l >= 0 ? e.readdirat(o, {
    maxNames: Math.min(Math.floor(l), Number.MAX_SAFE_INTEGER)
  }) : [];
}
var ge = Q(dn),
  ue = Q(an),
  $e = Q(un),
  nn = Q(cn),
  An = Q(sn),
  Hn = Q(ln),
  Cn = Q(fn);
function Tn(e) {
  return {
    stat: o => ge(e, o),
    writeFile: o => Cn(e, o),
    chown: (o, l) => Hn(e, o, l),
    chmod: o => An(e, o),
    sync: () => nn(e),
    close: () => ue(e)
  };
}
var ye,
  Fn = Am(() => t("anchor: this runtime has no Bun.ant.posixFsAt, so the macOS backend cannot come up", {
    level: "warn"
  }));
function Oaa() {
  let e = Rn();
  if (e === null) return Fn(), null;
  if (ye !== void 0) return ye;
  let getBeneath = Am(() => {
      return;
    }),
    l = (c, w) => {
      try {
        return w();
      } catch (error) {
        let m = Error("a file call failed (see the code and syscall properties)");
        throw m.errno = ci(error) && error.errno !== void 0 ? Math.abs(error.errno) : 0, m.code = m.errno === 0 ? k(error) ?? "EUNKNOWN" : yn(-m.errno), m.syscall = c, m;
      }
    };
  return ye = {
    openat: (c, w, n) => l("openat", () => e.openat(c, w, n)),
    getBeneath: getBeneath,
    mkdirat: (c, w, n) => l("mkdirat", () => e.mkdirat(c, w, n)),
    renameat: (c, w, n, m) => l("renameat", () => e.renameat(c, w, n, m)),
    linkat: (c, w, n, m) => l("linkat", () => e.linkat(c, w, n, m)),
    symlinkat: (c, w, n) => l("symlinkat", () => e.symlinkat(c, w, n)),
    readlinkat: (c, w) => l("readlinkat", () => e.readlinkat(c, w)),
    unlinkat: (c, w) => l("unlinkat", () => e.unlinkat(c, w)),
    rmdirat: (c, w) => l("unlinkat", () => e.unlinkat(c, w, {
      removeDir: !0
    })),
    listDirectory: (c, w) => l("readdir", () => w === void 0 ? e.readdirat(c) : Bn(e, c, w)),
    listDirectoryBytes: c => l("readdir", () => e.readdirat(c, {
      encoding: "buffer"
    })),
    ...{}
  }, ye;
}
function Iaa(e) {
  return e.noFollowAnyEnforced ??= Sn(e);
}
async function Sn(e) {
  let {
      fs: fs_3,
      path: path
    } = e,
    c = null;
  try {
    c = await fs_3.realpath(await Ve(path.join(Je(), "claude-nfa-"))), await fs_3.mkdir(path.join(c, "d")), await hn(path.join(c, "d"), path.join(c, "l"));
    let w = ae | _e;
    try {
      await (await fs_3.open(path.join(c, "d", "control"), w, 384)).close();
    } catch (error) {
      if (k(error) === "EINVAL") return !1;
      throw error;
    }
    try {
      return await (await fs_3.open(path.join(c, "l", "probe"), w, 384)).close(), !1;
    } catch (error) {
      if (k(error) === "ELOOP") return !0;
      throw error;
    }
  } catch (error) {
    return t(`anchor: O_NOFOLLOW_ANY probe not run (${k(error) ?? "not an errno"})`), !0;
  } finally {
    if (c !== null) await Xe(c, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
async function Ln(e, o) {
  let l = o.getBeneath?.();
  if (l === void 0) return "not_bound";
  return (await Maa(e, l)) ?? ((c, w, n) => l.create(c, [w], n & 511));
}
function Maa(e, o) {
  return e.heldCreateProbed ??= Mn(o).then(l => {
    if (l === "probe_not_run" || l === "probe_create_failed") e.heldCreateProbed = void 0;
    return l;
  });
}
async function Mn(e) {
  let o = (n, m) => t(`anchor: the probe of the create in a held directory ${n}, so this ${m} creates by full path`),
    l = null,
    c = [],
    w = n => (c.push(n), ge(n, {
      bigint: !0
    }));
  try {
    l = await Ve(`${Je()}/claude-held-`);
    let n = await $e(l, Y);
    c.push(n);
    let m = await w(await $e(`${l}/by-path`, ae, 384)),
      P;
    try {
      P = await w(e.create(n, ["held"], 384));
    } catch (error) {
      return o(`failed (${k(error) ?? "not an errno"})`, "anchor"), "probe_create_failed";
    }
    if (P.mode !== m.mode) return o(`made a file of mode ${P.mode.toString(8)} where node made one of ${m.mode.toString(8)}`, "host"), "probe_wrong_mode";
    let g = await mn(`${l}/held`, {
      bigint: !0
    }).catch(d => {
      if (K(d)) return null;
      throw d;
    });
    if (g === null || !we(P, g)) return o("made a file that is not seen at its name", "host"), "probe_wrong_place";
    return null;
  } catch (error) {
    return o(`could not be staged (${k(error) ?? "not an errno"})`, "anchor"), "probe_not_run";
  } finally {
    if (await Promise.all(c.map(item => ue(item).catch(() => {}))), l !== null) await Xe(l, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}
var Ee = A.O_RDONLY | Dn | A.O_NONBLOCK;
function xn(e, o, l, {
  realRoot: realRoot_3,
  directoryCheck: directoryCheck_2
}, heldCreateRefusal, m, P) {
  let {
      fs: fs_4,
      path: path_2
    } = e,
    h = (N, u, y, b) => fs_4.open(path_2.join(realRoot_3, ...N, u), y & ~A.O_NOFOLLOW | _e | ro, b),
    lstat = async (N, u) => {
      let y = o.fstatat?.(N, u);
      return y !== void 0 && y.dev >= 0n && y.ino < 2n ** 63n ? y : v(N, u, Ee);
    },
    v = async (N, u, y) => {
      let b = o.openat(N, u, y | ro);
      try {
        return await ge(b, {
          bigint: !0
        });
      } finally {
        await ue(b);
      }
    },
    j = async (N, u, y) => {
      try {
        let [b, I] = await Promise.all([N.stat({
          bigint: !0
        }), u()]);
        if (b.dev !== I.dev || b.ino !== I.ino) throw y?.(), Object.assign(Error("not the file the held directory names"), {
          code: "ELOOP"
        });
        return N;
      } catch (error) {
        throw await N.close().catch(() => {}), error;
      }
    },
    Z = async (N, u, y, b, I) => {
      try {
        return N === null ? await h(b, y, ae, I) : Tn(N(u, y, I));
      } catch (error) {
        throw q(error);
      }
    },
    {
      listDirectory: listDirectory,
      listDirectoryBytes: listDirectoryBytes
    } = o,
    V = N => ({
      ...(listDirectoryBytes !== void 0 && {
        bytes: {
          list: async u => listDirectoryBytes(u),
          openDir: async (u, y) => o.openat(u, y, Y),
          unlink: async (u, y) => o.unlinkat(u, y),
          rmdir: async (u, y) => o.rmdirat(u, y)
        }
      }),
      openDir: async (u, y) => o.openat(u, y, Y),
      mkdir: async (u, y, b) => o.mkdirat(u, y, b),
      closeDir: u => ue(u),
      createsInHeldDirectory: N !== null,
      ...(N !== null && {
        statDirectoryByPath: async u => {
          let y = await h(u, "", Y | A.O_NONBLOCK).catch(b => {
            throw q(b);
          });
          try {
            return await y.stat({
              bigint: !0
            });
          } finally {
            await y.close();
          }
        }
      }),
      create: async (u, y, b, I, G, F, se, X) => {
        if (await Jpi(await Z(N, u, y, b, en(G, se)), I, G, () => v(u, y, Ee).catch(() => null), () => o.unlinkat(u, y), F, se, X), F) await nn(u).catch(() => {});
      },
      createAndOpen: (u, y, b, I) => h(b, y, ae, I).catch(G => {
        throw q(G);
      }),
      link: async (u, y, b, I) => o.linkat(u, y, b, I),
      rename: async (u, y, b, I) => o.renameat(u, y, b, I),
      symlink: async (u, y, b) => {
        if (o.symlinkat === void 0) throw z("WORKING_LINK_UNSUPPORTED");
        o.symlinkat(u, y, b);
      },
      readlink: async (u, y) => {
        if (o.readlinkat === void 0) throw z("WORKING_LINK_UNSUPPORTED");
        return o.readlinkat(u, y);
      },
      unlink: async (u, y) => o.unlinkat(u, y),
      rmdir: async (u, y) => o.rmdirat(u, y),
      ...(listDirectory !== void 0 && {
        list: async (u, y) => listDirectory(u, y)
      }),
      lstat: lstat,
      open: async (u, y, b, I) => j(await h(b, y, I), () => lstat(u, y), () => P?.([...b, y].join("/"))),
      ...(P === null && {
        openBeneath: (u, y, b) => h(u, y, b)
      }),
      hold: u => Qe(e, u),
      getHeldDir: u => u.dir.fd,
      holdOpenedDir: (fd, realPath_3) => ({
        realPath: realPath_3,
        dir: {
          fd: fd
        },
        stat: () => ge(fd, {
          bigint: !0
        }),
        close: () => ue(fd)
      }),
      renameOut: async (u, y, b, I) => o.renameat(u, y, b.dir.fd, I),
      renameIn: async (u, y, b, I) => o.renameat(u.dir.fd, y, b, I),
      linkIn: async (u, y, b, I) => o.linkat(u.dir.fd, y, b, I),
      statIn: (u, y) => lstat(u.dir.fd, y),
      openIn: async (u, y, b) => j(await fs_4.open(path_2.join(u.realPath, y), b & ~A.O_NOFOLLOW | _e | ro), () => v(u.dir.fd, y, Ee)),
      unlinkIn: async (u, y) => o.unlinkat(u.dir.fd, y)
    });
  return LXr("darwin_at", e, Ze(l), l.fd, realRoot_3, {
    ...V(typeof heldCreateRefusal === "function" ? heldCreateRefusal : null),
    ...(typeof heldCreateRefusal === "string" && {
      heldCreateRefusal: heldCreateRefusal
    }),
    ...(!m && {
      forAnchorBeneath: V(null)
    })
  }, [], directoryCheck_2);
}
function oba(e, o, {
  createsInHeldDirectoryCheckedByPath = !1
} = {}) {
  return Yir(e, {
    gitRoot: o,
    realRoot: o,
    isRootNameExchangeable: !0,
    ...(createsInHeldDirectoryCheckedByPath && {
      [qe]: !0
    })
  });
}
async function Yir(e, o) {
  let {
      [qe]: l,
      ...c
    } = o,
    w = void 0,
    n = !1,
    m = {
      ...c,
      directoryCheck: void 0
    };
  switch (e.platform()) {
    case "windows":
      {
        let {
            loadNt: loadNt
          } = await import("B:/~BUN/root/chunk-q3ss7d76.js"),
          g = loadNt();
        if (g === null) return {
          unavailable: "no_ffi"
        };
        let {
            openWin32Backend: openWin32Backend
          } = await import("B:/~BUN/root/chunk-w2w9fwqf.js"),
          h = await openWin32Backend(e, g, m);
        return "unanchored" in h ? {
          unavailable: h.unanchored
        } : LXr("win32_handle", e, h.root, h.held, m.realRoot, h.ops, [], (void 0)?.reachesWindows?.() === !0 ? void 0 : void 0);
      }
    case "linux":
    case "wsl":
      {
        let P = await e.fs.open(m.realRoot, Y);
        try {
          if (!(await je(e, P, m.realRoot))) return await P.close(), {
            unavailable: "unstable_identity"
          };
          if (await _n(e, P)) {
            let g = (void 0)?.createsInHeldDirectory === !0 || !1;
            return Nn(e, P, m, g);
          }
          return await P.close(), {
            unavailable: "no_procfs"
          };
        } catch (error) {
          throw await P.close().catch(() => {}), error;
        }
      }
    case "macos":
      {
        let P = e.darwinAt ?? Oaa();
        if (P === null) return {
          unavailable: "no_ffi"
        };
        if (!(await Iaa(e))) return {
          unavailable: "nofollow_any_unenforced"
        };
        let g = await e.fs.open(m.realRoot, Y);
        try {
          if ((await xEn(e, m)) !== m.realRoot) throw gn();
          if (!(await je(e, g, m.realRoot))) return await g.close(), {
            unavailable: "unstable_identity"
          };
          return xn(e, P, g, m, (void 0)?.createsInHeldDirectory === !0 ? await Ln(e, P) : null, !1, null);
        } catch (error) {
          throw await g.close().catch(() => {}), error;
        }
      }
    case "unknown":
      return {
        unavailable: "unsupported_platform"
      };
  }
}
function sba(e) {
  return e.kind === "unavailable" ? e.reason : null;
}
async function iba(e, {
  host = AEn(),
  now: now_2 = () => performance.now()
} = {}) {
  let c = now_2();
  return {
    ...(await Wn(host, e).catch(n => ({
      kind: "threw"
    }))),
    elapsedMs: Math.round(now_2() - c)
  };
}
async function Wn(e, gitRoot) {
  let l = await Yir(e, {
    gitRoot: gitRoot,
    realRoot: await e.fs.realpath(gitRoot)
  });
  if ("unavailable" in l) return {
    kind: "unavailable",
    reason: l.unavailable
  };
  return await l.close().catch(() => {}), {
    kind: "available"
  };
}
export { l7o, Paa, rba, LXr, Jpi, Oaa, Iaa, Maa, oba, Yir, sba, iba };