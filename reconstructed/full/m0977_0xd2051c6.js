// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l,
  v,
  B,
  Et
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  nT
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  AEe
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Ip
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Re
} from "B:/~BUN/root/chunk-yv67t8hr.js";
import {
  close as Ae,
  constants as N,
  fstat as Ie
} from "fs";
import {
  mkdtemp as be,
  rm as Pe,
  symlink as Te
} from "fs/promises";
import {
  tmpdir as De
} from "os";
import {
  getSystemErrorName as ve,
  promisify as ne
} from "util";
import * as le from "fs/promises";
import * as ce from "path";

function bh(e = {}) {
  return {
    fs: le,
    path: ce,
    platform: () => O(),
    ...e
  }
}
import {
  constants as ue
} from "fs";
var _3t = "claude-cloud-trash",
  a4 = ".claude-cloud-trash";

function de(e) {
  switch (e) {
    case "ELOOP":
      return Error("not the regular file the name was screened as");
    case "WORKING_PARENT_ESCAPE":
      return Error("destination ancestor resolves outside the tree root");
    case "WORKING_DEST_IGNORED":
      return Error("destination resolves into an ignored path");
    case "WORKING_DEST_SYMLINK":
      return Error("destination is a symlink");
    case "WORKING_DEST_REFUSED":
      return Error("destination resolves onto a name the caller refuses");
    case "WORKING_TMP_TAKEN":
      return Error("sibling tempfile name already taken");
    case "WORKING_TMP_STUCK":
      return Error("staged tempfile could not be removed, so the new file was taken back from its name (or the name was no longer that file, and left)");
    case "WORKING_NAME_TWINNED":
      return Error("staged tempfile could not be removed, nor the new file taken back: it may still stand at its name with a second link")
  }
}

function A(e) {
  let n = de(e);
  return n.code = e, n
}

function Gwt(e, n) {
  let {
    path: o,
    platform: i
  } = e, r = i() === "windows";
  return o.isAbsolute(n) || (r ? n.split(/[\\/]/) : n.split(o.sep)).includes("..") || r && /^(?:[\\/]|[a-zA-Z]:)/.test(n)
}

function W(e, n) {
  return n.split(e.path.sep).some((o) => o.startsWith(".") || o.endsWith("~") || o.endsWith(".swp") || o.endsWith(".tmp"))
}

function _ar(e, n, o) {
  let {
    isAbsolute: i,
    normalize: r,
    relative: s
  } = e.path;
  if (!i(n)) throw Error("tree root must be absolute");
  if (o.includes("\x00")) throw Error("path contains null bytes");
  if (!i(o)) throw Error("path must be absolute");
  let c = s(r(n), r(o));
  if (c === "" || c === "." || Gwt(e, c)) throw Error("path must be under the tree root");
  return c
}

function nZe(e, n) {
  return e.path.sep === "/" ? n : n.split(e.path.sep).join("/")
}
var bar = ue.O_RDONLY;
async function Sar(e, n, o) {
  let i = await n.lstat(o);
  if (!i.isFile() || i.nlink > 1n) throw A("ELOOP");
  if (n.backend === "by_name" && await U(e, n.realRoot, o)) throw A("ELOOP");
  let r = await n.open(o, bar);
  try {
    let s = await r.stat({
      bigint: !0
    });
    if (!s.isFile() || s.nlink > 1n || s.dev !== i.dev || s.ino !== i.ino) throw A("ELOOP");
    return {
      handle: r,
      stats: s
    }
  } catch (s) {
    throw await r.close(), s
  }
}
async function U(e, n, o) {
  let {
    fs: i,
    path: r
  } = e, s = o.split("/"), c = r.relative(n, await i.realpath(r.join(n, ...s)));
  return Gwt(e, c) || W(e, c) || c !== r.join(...s)
}
async function me(e, n, o, i) {
  let {
    fs: r,
    path: s
  } = e, {
    basename: c,
    dirname: d,
    join: m,
    relative: u
  } = s, f = u(n, await r.realpath(d(o)));
  if (Gwt(e, f)) throw A("WORKING_PARENT_ESCAPE");
  let g = f === "" ? c(o) : m(f, c(o));
  if (W(e, g)) throw A("WORKING_DEST_IGNORED");
  if (i?.(nZe(e, g)) === !0) throw A("WORKING_DEST_REFUSED");
  try {
    if ((await r.lstat(o)).isSymbolicLink()) throw A("WORKING_DEST_SYMLINK")
  } catch (h) {
    if (!B(h)) throw h
  }
}
async function fe(e, n, o, i) {
  let {
    fs: r,
    path: s
  } = e, c = async (d) => {
    try {
      let m = s.relative(n, await r.realpath(d));
      if (Gwt(e, m)) throw A("WORKING_PARENT_ESCAPE");
      if (W(e, m)) throw A("WORKING_DEST_IGNORED");
      if (i?.(nZe(e, s.join(m, s.relative(d, o)))) === !0) throw A("WORKING_DEST_REFUSED")
    } catch (m) {
      if (!B(m) && v(m) !== "ENOTDIR") throw m;
      let u = s.dirname(d);
      if (u !== d) await c(u)
    }
  };
  await c(s.dirname(o))
}

function pe(e) {
  return v(e) === "EEXIST" ? A("WORKING_TMP_TAKEN") : e
}
async function ato(e, n, o, i, r, s, c = AEe, d = null) {
  let m = _ar(e, o, i);
  if (W(e, m)) throw A("WORKING_DEST_IGNORED");
  let u = nZe(e, m),
    f = e.path.posix.dirname(u),
    g = e.path.join(o, m);
  if (n.backend === "by_name") await fe(e, n.realRoot, g, s);
  if (f !== ".") await n.mkdirp(f);
  if (n.backend === "by_name") await me(e, n.realRoot, g, s);
  else if (await _e(n, u)) throw A("WORKING_DEST_SYMLINK");
  let h = await kar(n, d, f),
    R = h === null ? null : await we(n, h, r, c);
  if (R === null) {
    await V(n, u, r, c);
    return
  }
  try {
    await X(n, R, u)
  } catch (I) {
    if (v(I) !== "EXDEV") throw I;
    await V(n, u, r, c)
  }
}
async function V(e, n, o, i) {
  let r = `${n}.${q()}.tmp`;
  try {
    await e.create(r, o, i)
  } catch (s) {
    if (v(s) !== "EEXIST") await rZe(e, r);
    throw pe(s)
  }
  await X(e, r, n)
}
async function we(e, n, o, i) {
  let r = war(n, "tmp");
  try {
    return await e.create(r, o, i), r
  } catch (s) {
    if (v(s) !== "EEXIST") await rZe(e, r);
    return null
  }
}
async function X(e, n, o) {
  try {
    await J(e, n, o)
  } catch (r) {
    throw await rZe(e, n), r
  }
  if (await rZe(e, n)) return;
  if (e.backend === "by_name") throw t("dirSync pull: the staged file would not go; by name the name it was given is left as it is, the staged file its twin"), A("WORKING_NAME_TWINNED");
  let i = await z(e, o, () => he(e, n, o));
  throw t(`dirSync pull: the name it was given is ${i.outcome==="gone"?"taken back":i.outcome==="kept"?`kept with a second link (${i.code??"no error"})`:"no longer this file, and left where it is"}`), A(i.outcome === "kept" ? "WORKING_NAME_TWINNED" : "WORKING_TMP_STUCK")
}
async function rZe(e, n) {
  let o = await z(e, n);
  if (o.outcome !== "gone" || o.tries > 1) t(`dirSync pull: staged file ${o.outcome} after ${String(o.tries)} tries (${o.code??"no error"})`);
  return o.outcome === "gone"
}
var YCn = [50, 100, 200],
  ge = new Set([...nT, "WORKING_FILE_HELD"]);
async function J(e, n, o, i = YCn) {
  try {
    await e.placeCreated(n, o)
  } catch (r) {
    let [s, ...c] = i;
    if (s === void 0 || v(r) !== "WORKING_FILE_HELD") throw r;
    await Q(s), await J(e, n, o, c)
  }
}
async function z(e, n, o = () => Promise.resolve(!0)) {
  let i = 0,
    r = null;
  for (let s of [0, ...YCn]) {
    if (s > 0) await Q(s);
    if (!await o()) return {
      outcome: "unwanted",
      tries: i,
      code: r
    };
    i += 1;
    try {
      return await e.unlink(n), {
        outcome: "gone",
        tries: i,
        code: null
      }
    } catch (c) {
      if (B(c)) return {
        outcome: "gone",
        tries: i,
        code: null
      };
      if (r = v(c) ?? "unknown", !ge.has(r)) break
    }
  }
  return {
    outcome: "kept",
    tries: i,
    code: r
  }
}
async function he(e, n, o) {
  try {
    let [i, r] = await Promise.all([e.lstat(n), e.lstat(o)]);
    return i.isFile() && i.ino !== 0n && i.dev === r.dev && i.ino === r.ino
  } catch {
    return !1
  }
}

function q() {
  return process.hrtime.bigint().toString(36)
}
var Ee = ".staging",
  ye = 448,
  Oe = /^[0-9a-z]+\.(?:tmp|incoming)$/;
async function lto(e, n, o, i) {
  if (n.backend === "by_name") return null;
  let r = `${o}${Ee}`;
  if (await n.mkdirp(r, ye), r.startsWith(a4 + "/")) await n.create(a4 + "/.gitignore", Buffer.from(`*
`), 384).catch(() => {});
  let s = await n.lstat(r);
  if (!s.isDirectory()) return null;
  if (i) {
    let c = await e.fs.readdir(e.path.join(n.realRoot, ...r.split("/"))).catch(() => []);
    await Promise.all(c.filter((d) => Oe.test(d)).map((d) => n.unlink(`${r}/${d}`).catch(() => {})))
  }
  return {
    rel: r,
    dev: s.dev
  }
}

function war(e, n) {
  return `${e.rel}/${q()}.${n}`
}
async function kar(e, n, o) {
  if (n === null) return null;
  try {
    return (await e.lstat(o === "." ? "" : o)).dev === n.dev ? n : null
  } catch (i) {
    if (!Et(i)) throw i;
    return null
  }
}
async function _e(e, n) {
  try {
    return (await e.lstat(n)).isSymbolicLink()
  } catch (o) {
    if (B(o) || Ne.has(v(o) ?? "")) return !1;
    throw o
  }
}
var Ne = new Set(["EACCES", "EPERM", "ENXIO", "EOPNOTSUPP", "ENOTSUP"]);
var Ljo = ["unsupported_platform", "no_procfs", "no_ffi", "nofollow_any_unenforced", "remote_volume", "unstable_identity", "bring_up_failed"];

function Ear(e) {
  return Ljo.includes(e)
}

function Le(e) {
  switch (e) {
    case "WORKING_PARENT_NOT_DIRECTORY":
      return Error("a destination ancestor is a symlink or not a directory");
    case "WORKING_ANCHOR_UNAVAILABLE":
      return Error("staging files outside the project needs directory anchoring, which CLAUDE_CODE_DIR_SYNC_DISABLE_ANCHORING has switched off");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file")
  }
}

function ke() {
  let e = Error("tree anchor root is not a canonical path");
  return e.code = "WORKING_ROOT_NOT_CANONICAL", e
}

function P(e) {
  let n = Le(e);
  return n.code = e, n
}
var M = 536870912,
  Se = 2097152,
  He = 128,
  S = N.O_RDONLY | N.O_DIRECTORY | N.O_NOFOLLOW | Ip,
  G = N.O_WRONLY | N.O_CREAT | N.O_EXCL | Ip,
  re = 511;

function K(e, n) {
  let o = e.split("/");
  if (e.includes("\x00") || o.some((i) => i === "" || i === "." || i === ".." || n !== "/" && i.includes(n))) throw Error("anchored path must be relative, of plain segments");
  return o
}

function C(e, n) {
  let o = K(e, n);
  return {
    dirs: o.slice(0, -1),
    leaf: o.at(-1) ?? ""
  }
}

function Y(e) {
  if ((e & N.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e
}

function j(e) {
  let n = v(e);
  return n === "ENOTDIR" || n === "ELOOP" ? P("WORKING_PARENT_NOT_DIRECTORY") : e
}

function Tar(e, n, o, i, r, s) {
  let {
    sep: c
  } = n.path, d = null, m = () => d ??= o.close(), u = new WeakMap, f = async (p) => {
    let w = await s.hold(p);
    if (w === null) return null;
    let E = null,
      _ = () => E ??= w.close(),
      y = {
        realPath: w.realPath,
        get closed() {
          return E !== null
        },
        stat: async () => {
          if (E !== null) throw Error("held directory is closed");
          return w.stat()
        },
        close: _,
        [Symbol.asyncDispose]: _
      };
    return u.set(y, w), y
  }, g = (p) => {
    let w = u.get(p);
    if (w === void 0) throw Error("held directory belongs to another anchor");
    if (p.closed) throw Error("held directory is closed");
    return w
  }, h = (p) => p === i ? Promise.resolve() : s.closeDir(p), R = async (p, w, E) => {
    try {
      return await s.openDir(p, w)
    } catch (_) {
      if (E === null || !B(_)) throw j(_);
      return await s.mkdir(p, w, E).catch((y) => {
        if (v(y) !== "EEXIST") throw y
      }), s.openDir(p, w).catch((y) => {
        throw j(y)
      })
    }
  }, I = () => {
    if (d !== null) throw Error("tree anchor is closed")
  }, H = async (p, w) => {
    I();
    let E = i;
    try {
      for (let _ of p) {
        I();
        let y = await R(E, _, w);
        await h(E), E = y
      }
      return E
    } catch (_) {
      throw await h(E), _
    }
  }, b = async (p, w) => {
    let {
      dirs: E,
      leaf: _
    } = C(p, c), y = await H(E, null);
    try {
      return I(), await w(y, _, E)
    } finally {
      await h(y)
    }
  }, x = async (p, w, E) => {
    let _ = C(w, c);
    return C(p, c).dirs.join("/") === _.dirs.join("/") ? b(p, (y, D) => E(y, D, y, _.leaf)) : b(p, (y, D) => b(w, (ae, se) => E(y, D, ae, se)))
  };
  return {
    backend: e,
    byNameReason: null,
    realRoot: r,
    mkdirp: async (p, w = re) => h(await H(K(p, c), w)),
    create: (p, w, E) => b(p, (_, y, D) => s.create(_, y, D, w, E)),
    link: (p, w) => x(p, w, s.link),
    rename: (p, w) => x(p, w, s.rename),
    placeCreated: (p, w) => x(p, w, s.renameNoReplace ?? s.link),
    unlink: (p) => b(p, s.unlink),
    rmdir: (p) => b(p, s.rmdir),
    lstat: async (p) => {
      if (p !== "") return b(p, s.lstat);
      return I(), o.stat()
    },
    open: async (p, w) => {
      let E = Y(w);
      if (s.openBeneath !== void 0) {
        let {
          dirs: _,
          leaf: y
        } = C(p, c);
        return I(), s.openBeneath(_, y, E)
      }
      return b(p, (_, y, D) => s.open(_, y, D, E))
    },
    holdOutside: f,
    moveOut: (p, w, E) => b(p, (_, y) => s.renameOut(_, y, g(w), L(E))),
    moveIn: (p, w, E) => b(E, (_, y) => s.renameIn(g(p), L(w), _, y)),
    linkIn: (p, w, E) => b(E, (_, y) => s.linkIn(g(p), L(w), _, y)),
    statIn: async (p, w) => s.statIn(g(p), L(w)),
    openIn: async (p, w, E) => s.openIn(g(p), L(w), Y(E)),
    unlinkIn: async (p, w) => s.unlinkIn(g(p), L(w)),
    close: m,
    [Symbol.asyncDispose]: m
  }
}

function L(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\x00")) throw Error("a held-directory leaf must be one plain name");
  return e
}
async function oe(e, n) {
  let {
    fs: o
  } = e, i = await o.realpath(n).catch(() => null);
  if (i === null) return null;
  let r = await o.open(i, S).catch(() => null);
  if (r === null) return null;
  try {
    let [s, c] = await Promise.all([r.stat({
      bigint: !0
    }), o.lstat(i, {
      bigint: !0
    })]);
    if (!s.isDirectory() || !c.isDirectory() || s.ino === 0n || s.dev !== c.dev || s.ino !== c.ino) return await r.close().catch(() => {}), null
  } catch {
    return await r.close().catch(() => {}), null
  }
  return {
    realPath: i,
    dir: r,
    stat: () => r.stat({
      bigint: !0
    }),
    close: () => r.close()
  }
}

function ie(e) {
  return {
    stat: () => e.stat({
      bigint: !0
    }),
    close: () => e.close()
  }
}
async function We(e, n, o, i) {
  try {
    await e.writeFile(n), await e.chmod(o)
  } catch (r) {
    throw await i().catch(() => {}), await e.close().catch(() => {}), r
  }
  try {
    await e.close()
  } catch (r) {
    throw await i().catch(() => {}), r
  }
}
async function Car(e, n, o, i, r) {
  let s = await e.stat({
    bigint: !0
  }).catch(() => null);
  return We(e, n, o, async () => {
    let c = await i();
    if (s !== null && s.ino !== 0n && c !== null && c.dev === s.dev && c.ino === s.ino) await r()
  })
}
async function Z(e, n, o) {
  let [i, r] = await Promise.all([e.fs.lstat(o, {
    bigint: !0
  }), n.stat({
    bigint: !0
  })]);
  return i.dev === r.dev && i.ino === r.ino && r.ino !== 0n
}
async function Ce(e, n) {
  try {
    let [o, i] = await Promise.all([e.fs.lstat(`/proc/self/fd/${n.fd}/.`, {
      bigint: !0
    }), n.stat({
      bigint: !0
    })]);
    return o.dev === i.dev && o.ino === i.ino && i.ino !== 0n
  } catch (o) {
    let i = v(o);
    if (i === "ENOENT" || i === "EACCES" || i === "EPERM") return !1;
    throw o
  }
}

function Fe(e, n, o) {
  let {
    fs: i
  } = e, r = (c, d) => `/proc/self/fd/${c.fd}/${d}`, s = {
    openDir: (c, d) => i.open(r(c, d), S),
    mkdir: async (c, d, m) => {
      await i.mkdir(r(c, d), {
        mode: m
      })
    },
    closeDir: (c) => c.close(),
    create: async (c, d, m, u, f) => Car(await i.open(r(c, d), G | N.O_NOFOLLOW, f), u, f, () => i.lstat(r(c, d), {
      bigint: !0
    }).catch(() => null), () => i.unlink(r(c, d))),
    link: (c, d, m, u) => i.link(r(c, d), r(m, u)),
    rename: (c, d, m, u) => i.rename(r(c, d), r(m, u)),
    unlink: (c, d) => i.unlink(r(c, d)),
    rmdir: (c, d) => i.rmdir(r(c, d)),
    lstat: (c, d) => i.lstat(r(c, d), {
      bigint: !0
    }),
    open: (c, d, m, u) => i.open(r(c, d), u | N.O_NOFOLLOW | Ip),
    hold: (c) => oe(e, c),
    renameOut: (c, d, m, u) => i.rename(r(c, d), r(m.dir, u)),
    renameIn: (c, d, m, u) => i.rename(r(c.dir, d), r(m, u)),
    linkIn: (c, d, m, u) => i.link(r(c.dir, d), r(m, u)),
    statIn: (c, d) => i.lstat(r(c.dir, d), {
      bigint: !0
    }),
    openIn: (c, d, m) => i.open(r(c.dir, d), m | N.O_NOFOLLOW | Ip),
    unlinkIn: (c, d) => i.unlink(r(c.dir, d))
  };
  return Tar("linux_procfd", e, ie(n), n, o, s)
}
var Ke = ne(Ie),
  ee = ne(Ae),
  k;

function T(e) {
  return Buffer.from(e + "\x00")
}

function Njo() {
  if (k !== void 0) return k;
  try {
    let e = Re("bun:ffi"),
      o = e.dlopen("/usr/lib/libSystem.B.dylib", {
        openat: {
          args: ["i32", "ptr", "i32"],
          returns: "i32"
        },
        mkdirat: {
          args: ["i32", "ptr", "u32"],
          returns: "i32"
        },
        renameat: {
          args: ["i32", "ptr", "i32", "ptr"],
          returns: "i32"
        },
        linkat: {
          args: ["i32", "ptr", "i32", "ptr", "i32"],
          returns: "i32"
        },
        unlinkat: {
          args: ["i32", "ptr", "i32"],
          returns: "i32"
        },
        __error: {
          args: [],
          returns: "ptr"
        }
      }).symbols,
      i = (r, s) => {
        if (s >= 0) return s;
        let c = o.__error(),
          d = c === null ? 0 : e.read.i32(c, 0),
          m = Error("libSystem call failed");
        throw m.errno = d, m.code = d === 0 ? "EUNKNOWN" : ve(-d), m.syscall = r, m
      };
    k = {
      openat: (r, s, c) => i("openat", o.openat(r, T(s), c)),
      mkdirat: (r, s, c) => {
        i("mkdirat", o.mkdirat(r, T(s), c))
      },
      renameat: (r, s, c, d) => {
        i("renameat", o.renameat(r, T(s), c, T(d)))
      },
      linkat: (r, s, c, d) => {
        i("linkat", o.linkat(r, T(s), c, T(d), 0))
      },
      unlinkat: (r, s) => {
        i("unlinkat", o.unlinkat(r, T(s), 0))
      },
      rmdirat: (r, s) => {
        i("unlinkat", o.unlinkat(r, T(s), He))
      }
    }, t("dirSync anchor: libSystem *at loaded through bun:ffi")
  } catch (e) {
    t(`dirSync anchor: bun:ffi unavailable (${l(e)})`, {
      level: "warn"
    }), k = null
  }
  return k
}

function Hjo(e) {
  return e.noFollowAnyEnforced ??= Ge(e)
}
async function Ge(e) {
  let {
    fs: n,
    path: o
  } = e, i = null;
  try {
    i = await n.realpath(await be(o.join(De(), "claude-nfa-"))), await n.mkdir(o.join(i, "d")), await Te(o.join(i, "d"), o.join(i, "l"));
    let r = G | M;
    try {
      await (await n.open(o.join(i, "d", "control"), r, 384)).close()
    } catch (s) {
      if (v(s) === "EINVAL") return !1;
      throw s
    }
    try {
      return await (await n.open(o.join(i, "l", "probe"), r, 384)).close(), !1
    } catch (s) {
      if (v(s) === "ELOOP") return !0;
      throw s
    }
  } catch (r) {
    return t(`dirSync anchor: O_NOFOLLOW_ANY probe not run (${v(r)??"not an errno"})`), !0
  } finally {
    if (i !== null) await Pe(i, {
      recursive: !0,
      force: !0
    }).catch(() => {})
  }
}
var F = N.O_RDONLY | Se | N.O_NONBLOCK;

function xe(e, n, o, i) {
  let {
    fs: r,
    path: s
  } = e, c = (u, f, g, h) => r.open(s.join(i, ...u, f), g & ~N.O_NOFOLLOW | M | Ip, h), d = async (u, f, g) => {
    let h = n.openat(u, f, g | Ip);
    try {
      return await Ke(h, {
        bigint: !0
      })
    } finally {
      await ee(h)
    }
  }, m = {
    openDir: async (u, f) => n.openat(u, f, S),
    mkdir: async (u, f, g) => n.mkdirat(u, f, g),
    closeDir: (u) => ee(u),
    create: async (u, f, g, h, R) => {
      let I = await c(g, f, G, R).catch((H) => {
        throw j(H)
      });
      return Car(I, h, R, () => d(u, f, F).catch(() => null), () => n.unlinkat(u, f))
    },
    link: async (u, f, g, h) => n.linkat(u, f, g, h),
    rename: async (u, f, g, h) => n.renameat(u, f, g, h),
    unlink: async (u, f) => n.unlinkat(u, f),
    rmdir: async (u, f) => n.rmdirat(u, f),
    lstat: (u, f) => d(u, f, F),
    open: (u, f, g, h) => c(g, f, h),
    openBeneath: (u, f, g) => c(u, f, g),
    hold: (u) => oe(e, u),
    renameOut: async (u, f, g, h) => n.renameat(u, f, g.dir.fd, h),
    renameIn: async (u, f, g, h) => n.renameat(u.dir.fd, f, g, h),
    linkIn: async (u, f, g, h) => n.linkat(u.dir.fd, f, g, h),
    statIn: (u, f) => d(u.dir.fd, f, F),
    openIn: async (u, f, g) => {
      let h = await r.open(s.join(u.realPath, f), g & ~N.O_NOFOLLOW | M | Ip);
      try {
        let [R, I] = await Promise.all([h.stat({
          bigint: !0
        }), d(u.dir.fd, f, F)]);
        if (R.dev !== I.dev || R.ino !== I.ino) throw Object.assign(Error("not the file the held directory names"), {
          code: "ELOOP"
        });
        return h
      } catch (R) {
        throw await h.close().catch(() => {}), R
      }
    },
    unlinkIn: async (u, f) => n.unlinkat(u.dir.fd, f)
  };
  return Tar("darwin_at", e, ie(o), o.fd, i, m)
}
var te = 0,
  Be = (N.O_NOFOLLOW ?? 0) | (N.O_NONBLOCK ?? 0);
async function Ue(e, {
  gitRoot: n,
  realRoot: o
}, i) {
  let {
    fs: r,
    path: s
  } = e, c = await r.lstat(o, {
    bigint: !0
  }), d = (m) => s.join(n, ...K(m, s.sep));
  return {
    backend: "by_name",
    byNameReason: i,
    realRoot: o,
    mkdirp: async (m, u = re) => {
      await r.mkdir(d(m), {
        recursive: !0,
        mode: u
      }).catch((f) => {
        let g = v(f);
        throw g === "EEXIST" || g === "ENOTDIR" ? P("WORKING_PARENT_NOT_DIRECTORY") : f
      })
    },
    create: async (m, u, f) => Car(await r.open(d(m), G | te, f), u, f, () => r.lstat(d(m), {
      bigint: !0
    }).catch(() => null), () => r.unlink(d(m))),
    link: async (m, u) => r.link(d(m), d(u)),
    rename: async (m, u) => r.rename(d(m), d(u)),
    placeCreated: async (m, u) => r.link(d(m), d(u)),
    unlink: async (m) => r.unlink(d(m)),
    rmdir: async (m) => {
      let u = d(m),
        f = K(m, s.sep).slice(0, -1).join("/"),
        g = (h) => {
          let R = v(h);
          throw R === "ENOTDIR" || R === "ELOOP" ? P("WORKING_PARENT_NOT_DIRECTORY") : h
        };
      if (f !== "" && await U(e, o, f).catch(g)) throw P("WORKING_PARENT_NOT_DIRECTORY");
      if (!(await r.lstat(u).catch(g)).isDirectory()) {
        let h = Error("not a directory");
        throw h.code = "ENOTDIR", h
      }
      await r.rmdir(u)
    },
    lstat: async (m) => m === "" ? c : r.lstat(d(m), {
      bigint: !0
    }),
    open: async (m, u) => {
      let f = Y(u);
      return r.open(d(m), f & ~Be | te | Ip)
    },
    holdOutside: async () => null,
    moveOut: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    moveIn: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    linkIn: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    statIn: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    openIn: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    unlinkIn: async () => {
      throw P("WORKING_ANCHOR_UNAVAILABLE")
    },
    close: async () => {},
    [Symbol.asyncDispose]: async () => {}
  }
}
async function gO(e, n) {
  if (a.CLAUDE_CODE_DIR_SYNC_DISABLE_ANCHORING) return Ue(e, n, "switched_off");
  switch (e.platform()) {
    case "windows": {
      let {
        loadNt: o
      } = await import("B:/~BUN/root/chunk-wsakm3sp.js"), i = o();
      if (i === null) return {
        unavailable: "no_ffi"
      };
      let {
        openWin32Backend: r
      } = await import("B:/~BUN/root/chunk-vec0d8rg.js"), s = await r(e, i, n);
      return "unanchored" in s ? {
        unavailable: s.unanchored
      } : Tar("win32_handle", e, s.root, s.held, n.realRoot, s.ops)
    }
    case "linux":
    case "wsl": {
      let o = await e.fs.open(n.realRoot, S);
      try {
        if (!await Z(e, o, n.realRoot)) return await o.close(), {
          unavailable: "unstable_identity"
        };
        if (await Ce(e, o)) return Fe(e, o, n.realRoot);
        return await o.close(), {
          unavailable: "no_procfs"
        }
      } catch (i) {
        throw await o.close().catch(() => {}), i
      }
    }
    case "macos": {
      let o = Njo();
      if (o === null) return {
        unavailable: "no_ffi"
      };
      if (!await Hjo(e)) return {
        unavailable: "nofollow_any_unenforced"
      };
      let i = await e.fs.open(n.realRoot, S);
      try {
        if (await e.fs.realpath(n.realRoot) !== n.realRoot) throw ke();
        if (!await Z(e, i, n.realRoot)) return await i.close(), {
          unavailable: "unstable_identity"
        };
        return xe(e, o, i, n.realRoot)
      } catch (r) {
        throw await i.close().catch(() => {}), r
      }
    }
    case "unknown":
      return {
        unavailable: "unsupported_platform"
      }
  }
}
async function oZe(e, n = bh()) {
  return (async () => Me(n, {
    gitRoot: e,
    realRoot: await n.fs.realpath(e)
  }))().catch(() => null)
}
async function Me(e, n) {
  let o = await gO(e, n);
  if ("unavailable" in o) return o.unavailable;
  return await o.close().catch(() => {}), null
}
export {
  bh,
  _3t,
  a4,
  Gwt,
  _ar,
  nZe,
  bar,
  Sar,
  ato,
  rZe,
  YCn,
  lto,
  war,
  kar,
  Ljo,
  Ear,
  Tar,
  Car,
  Njo,
  Hjo,
  gO,
  oZe
};
