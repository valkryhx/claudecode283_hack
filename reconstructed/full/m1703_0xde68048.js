// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import {
  JS
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  E2
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  nk,
  zCn,
  har,
  cze,
  Ioe,
  mO,
  GCn,
  VCn,
  USe,
  qCn
} from "B:/~BUN/root/chunk-h89qcw37.js";
import {
  VRr,
  D9
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  constants as L
} from "fs";
var B = nk.FILE_LIST_DIRECTORY | nk.FILE_TRAVERSE | nk.FILE_READ_ATTRIBUTES | nk.SYNCHRONIZE,
  A = Ioe.FILE_DIRECTORY_FILE | Ioe.FILE_OPEN_REPARSE_POINT | Ioe.FILE_SYNCHRONOUS_IO_NONALERT,
  g = Ioe.FILE_OPEN_REPARSE_POINT | Ioe.FILE_SYNCHRONOUS_IO_NONALERT,
  ee = 4096,
  te = 4194304,
  ne = new Set([2147483693, 3221226763]);

function q(r) {
  return (r & te) !== 0 || (r & ee) !== 0 && (r & mO.REPARSE_POINT) !== 0
}
var re = /[. ]+$/,
  F = nk.FILE_READ_ATTRIBUTES | nk.SYNCHRONIZE,
  W = 1048576,
  z = 262144,
  ie = L.O_WRONLY | L.O_RDWR | L.O_APPEND | L.O_TRUNC,
  oe = (L.O_NOFOLLOW ?? 0) | (L.O_NONBLOCK ?? 0),
  se = 116444736000000000n;

function ae(r) {
  switch (r) {
    case "EBADF":
      return Error("the file is closed");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "ELOOP":
      return Error("a link stands at the name");
    case "EISDIR":
      return Error("a directory stands at the name");
    case "ENOTDIR":
      return Error("a link stands where a directory should be");
    case "WORKING_ROOT_NOT_CANONICAL":
      return Error("tree anchor root is not a canonical path");
    case "WORKING_FILE_NOT_SERVED":
      return Error("this file is stored through a Windows storage feature (cloud sync, deduplication) and could not be reopened to read its real contents; it is skipped this round");
    case "WORKING_FILE_OFFLINE":
      return Error("this file is online-only (its data is not on this machine); sync does not download it, so it is skipped this round")
  }
}

function I(r) {
  let e = ae(r);
  return e.code = r, e
}

function b(r) {
  if (r === "" || r === "." || r === ".." || /[\\/:*?"<>|\x00-\x1f]/.test(r) || re.test(r) || JS(r) || VRr(r) || D9(r)) throw I("WORKING_NAME_NOT_PLAIN");
  return r
}

function P(r) {
  return (r - se) * 100n
}

function ce(r, e, c, R) {
  let N = (e.attributes & mO.REPARSE_POINT) !== 0 && VCn(e.reparseTag),
    u = !N && (e.attributes & mO.DIRECTORY) !== 0,
    O = N ? 0o120000n : u ? 0o040000n : 0o100000n,
    T = (e.attributes & mO.READONLY) !== 0 ? 0o444n : 0o666n,
    _ = (S) => S / 1000000n,
    f = (S) => new Date(Number(S / 1000000n));
  return {
    dev: r,
    ino: e.ino,
    mode: O | T,
    nlink: e.nlink,
    uid: 0n,
    gid: 0n,
    rdev: 0n,
    size: u ? 0n : e.size,
    blksize: 4096n,
    blocks: R / 512n,
    atimeMs: _(c.atimeNs),
    mtimeMs: _(e.mtimeNs),
    ctimeMs: _(e.ctimeNs),
    birthtimeMs: _(c.birthtimeNs),
    atimeNs: c.atimeNs,
    mtimeNs: e.mtimeNs,
    ctimeNs: e.ctimeNs,
    birthtimeNs: c.birthtimeNs,
    atime: f(c.atimeNs),
    mtime: f(e.mtimeNs),
    ctime: f(e.ctimeNs),
    birthtime: f(c.birthtimeNs),
    isFile: () => !N && !u,
    isDirectory: () => u,
    isSymbolicLink: () => N,
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  }
}

function le(r) {
  let e = (c) => Number(c);
  return {
    dev: e(r.dev),
    ino: e(r.ino),
    mode: e(r.mode),
    nlink: e(r.nlink),
    uid: 0,
    gid: 0,
    rdev: 0,
    size: e(r.size),
    blksize: e(r.blksize),
    blocks: e(r.blocks),
    atimeMs: e(r.atimeNs) / 1e6,
    mtimeMs: e(r.mtimeNs) / 1e6,
    ctimeMs: e(r.ctimeNs) / 1e6,
    birthtimeMs: e(r.birthtimeNs) / 1e6,
    atime: r.atime,
    mtime: r.mtime,
    ctime: r.ctime,
    birthtime: r.birthtime,
    isFile: () => r.isFile(),
    isDirectory: () => r.isDirectory(),
    isSymbolicLink: () => r.isSymbolicLink(),
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  }
}

function p(r, e) {
  let c = r.queryInformation(e),
    R = (c.attributes & mO.REPARSE_POINT) !== 0 ? r.queryAttributeTag(e).reparseTag : 0,
    N = r.queryId(e),
    u = r.queryVolume(e),
    O = {
      dev32: BigInt(u.serialNumber),
      dev64: N?.volumeSerialNumber ?? null,
      ino: c.indexNumber,
      size: c.size,
      nlink: BigInt(c.numberOfLinks),
      mtimeNs: P(c.lastWriteTime),
      ctimeNs: P(c.changeTime),
      attributes: c.attributes,
      reparseTag: R
    },
    T = {
      atimeNs: P(c.lastAccessTime),
      birthtimeNs: P(c.creationTime)
    };
  return {
    ...O,
    stats: (_) => ce(_ === "serial64" && O.dev64 !== null ? O.dev64 : O.dev32, O, T, c.allocationSize)
  }
}

function y(r) {
  return (r.attributes & mO.REPARSE_POINT) !== 0 && VCn(r.reparseTag)
}

function w(r, e) {
  let c = r.queryAttributes(e);
  return (c & mO.REPARSE_POINT) !== 0 ? r.queryAttributeTag(e) : {
    attributes: c,
    reparseTag: 0
  }
}

function de(r, e) {
  let c = (N) => N !== null && e.ino !== 0n && e.dev === N && e.ino === r.ino,
    R = c(r.dev32) ? "serial32" : c(r.dev64) ? "serial64" : null;
  return t(`dirSync anchor (win32): identity bridge ${R??"none"} \u2014 bun dev=${e.dev} ino=${e.ino}; nt serial32=${r.dev32} serial64=${r.dev64??"n/a"} index=${r.ino}`), R
}

function V(r) {
  return /^\\\\\?\\UNC\\/i.test(r) || r.startsWith("\\\\") && !r.startsWith("\\\\?\\") && !r.startsWith("\\\\.\\")
}
async function Re(r, e, c) {
  let {
    fs: R
  } = r, {
    realRoot: N
  } = c;
  if (V(N)) return t("dirSync anchor (win32): the root is on a network share: no anchored backend here"), {
    unanchored: "remote_volume"
  };
  let u = 0,
    O;
  try {
    if (u = e.open(0, qCn(N), {
        access: B,
        disposition: cze.FILE_OPEN,
        options: A
      }), (e.queryDevice(u).characteristics & GCn) !== 0) return e.close(u), t("dirSync anchor (win32): the root is on a remote volume: no anchored backend here"), {
      unanchored: "remote_volume"
    };
    let i = p(e, u);
    if (y(i)) throw I("ELOOP");
    if (await R.realpath(N) !== N) throw I("WORKING_ROOT_NOT_CANONICAL");
    let n = de(i, await R.lstat(N, {
      bigint: !0
    }));
    if (n === null) return e.close(u), {
      unanchored: "unstable_identity"
    };
    O = n
  } catch (i) {
    if (u !== 0) e.close(u);
    let n = v(i);
    if (n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "EPERM" || n === "WORKING_ROOT_NOT_CANONICAL" || n === "EBUSY" || n === "EMFILE" || n === "ENFILE" || n === "ENOMEM" || n === "EAGAIN" || n === "ETIMEDOUT" || n === "EIO") throw i;
    return t(`dirSync anchor (win32): bring-up failed (${n??"no code"}, status 0x${(USe(i)??0).toString(16)}): no anchored backend here`, {
      level: "warn"
    }), {
      unanchored: "bring_up_failed"
    }
  }
  let T = (i, n, o, s) => e.open(i, b(n), {
      access: o,
      disposition: cze.FILE_OPEN,
      options: s
    }),
    _ = async (i, n, o, s, a) => {
      let l = T(i, n, o, s);
      try {
        return await a(l)
      } finally {
        e.close(l)
      }
    }, f = (i, n) => _(i, n, F, g, (o) => p(e, o).stats(O)), S = async (i, n, o) => {
      if ((o & ~oe & ie) !== 0) throw Error("anchored open never writes on this backend");
      let s = G(i, n, g, !1);
      try {
        let a = w(e, s);
        if (y(a)) throw I("ELOOP");
        if ((a.attributes & mO.DIRECTORY) !== 0) throw I("EISDIR");
        if (q(a.attributes)) throw I("WORKING_FILE_OFFLINE");
        if ((a.attributes & mO.REPARSE_POINT) === 0) return U(s)
      } catch (a) {
        throw e.close(s), a
      }
      return U(j(i, n, s))
    }, G = (i, n, o, s) => {
      let a = (l) => e.open(i, b(n), {
        access: l,
        disposition: cze.FILE_OPEN,
        options: o,
        dontReparse: s
      });
      try {
        return a(zCn | nk.FILE_WRITE_ATTRIBUTES)
      } catch (l) {
        let E = v(l);
        if (E !== "EPERM" && E !== "EROFS") throw l;
        return a(zCn)
      }
    }, j = (i, n, o) => {
      try {
        let s;
        try {
          s = G(i, n, Ioe.FILE_SYNCHRONOUS_IO_NONALERT, !0)
        } catch (a) {
          if (ne.has(USe(a) ?? 0)) throw t(`dirSync anchor (win32): a filter-served file's second open met a link refusal (status 0x${(USe(a)??0).toString(16)}); reported as a link`), a;
          throw t(`dirSync anchor (win32): a filter-served file could not be reopened for its bytes (${v(a)??"no code"}, status 0x${(USe(a)??0).toString(16)}); unreadable this round`), I("WORKING_FILE_NOT_SERVED")
        }
        try {
          let a = e.queryInformation(s);
          if (q(a.attributes)) throw I("WORKING_FILE_OFFLINE");
          if (a.indexNumber !== e.queryInformation(o).indexNumber || e.queryVolume(s).serialNumber !== e.queryVolume(o).serialNumber) throw t("dirSync anchor (win32): a filter-served file reopened as another file; unreadable this round"), I("WORKING_FILE_NOT_SERVED");
          return s
        } catch (a) {
          throw e.close(s), a
        }
      } finally {
        e.close(o)
      }
    }, U = (i) => {
      let n = !1,
        o = () => {
          if (n) throw I("EBADF");
          return i
        },
        s = () => p(e, o()).stats(O);
      async function a(d) {
        return d?.bigint === !0 ? s() : le(s())
      }
      let l = (d, m) => e.read(o(), d, BigInt(m));
      async function* E() {
        for (let d = 0;;) {
          let m = Buffer.allocUnsafe(z),
            h = l(m, d);
          if (h === 0) return;
          d += h, yield m.subarray(0, h), await new Promise((k) => setImmediate(k))
        }
      }
      return {
        stat: a,
        read: async (d, m, h, k) => {
          let X = l(d.subarray(m, m + Math.min(h, z)), k);
          return await new Promise((Q) => setImmediate(Q)), {
            bytesRead: X
          }
        },
        readFile: async () => {
          let d = [];
          for await (let m of E()) d.push(m);
          return Buffer.concat(d)
        },
        createReadStream: () => E(),
        chmod: async (d) => {
          let m = e.queryAttributes(o()),
            h = (d & 128) === 0 ? m | mO.READONLY : m & ~mO.READONLY;
          if (h !== m) e.setAttributes(o(), h === 0 ? mO.NORMAL : h)
        },
        close: async () => {
          if (!n) n = !0, e.close(i)
        }
      }
    }, M = async (i) => {
      try {
        await i()
      } catch (n) {
        throw v(n) === "EBUSY" ? Object.assign(I("WORKING_FILE_HELD"), {
          cause: n
        }) : n
      }
    }, H = (i) => M(async () => {
      await E2(i)
    }), D = (i, n, o, s, a) => (a ? M : H)(() => _(i, n, nk.DELETE | F, g, (l) => e.renameByHandle(l, o, b(s), a))), x = (i, n, o, s) => H(() => _(i, n, nk.FILE_WRITE_ATTRIBUTES | nk.SYNCHRONIZE, g, (a) => e.linkByHandle(a, o, b(s)))), Y = nk.DELETE | nk.FILE_WRITE_ATTRIBUTES | F, K = (i, n) => H(() => _(i, n, Y, g, (o) => {
      let s = w(e, o);
      if ((s.attributes & mO.DIRECTORY) !== 0 && !y(s)) throw I("EISDIR");
      e.deleteByHandle(o)
    })), Z = {
      openDir: async (i, n) => {
        let o = T(i, n, B, A);
        try {
          if (y(w(e, o))) throw I("ENOTDIR");
          return o
        } catch (s) {
          throw e.close(o), s
        }
      },
      mkdir: async (i, n) => {
        e.close(e.open(i, b(n), {
          access: F,
          disposition: cze.FILE_CREATE,
          options: A,
          attributes: mO.NORMAL
        }))
      },
      closeDir: async (i) => e.close(i),
      create: async (i, n, o, s, a) => {
        let l = e.open(i, b(n), {
          access: har | nk.FILE_READ_ATTRIBUTES | nk.DELETE,
          disposition: cze.FILE_CREATE,
          options: Ioe.FILE_NON_DIRECTORY_FILE | Ioe.FILE_OPEN_REPARSE_POINT | Ioe.FILE_SYNCHRONOUS_IO_NONALERT,
          attributes: (a & 128) === 0 ? mO.READONLY : mO.NORMAL
        });
        try {
          for (let E = 0; E < s.length; E += W)
            if (e.write(l, s.subarray(E, E + W), BigInt(E)), E + W < s.length) await new Promise((d) => setImmediate(d))
        } catch (E) {
          try {
            e.deleteByHandle(l)
          } catch {}
          throw e.close(l), E
        }
        e.close(l)
      },
      link: x,
      rename: (i, n, o, s) => D(i, n, o, s, !0),
      renameNoReplace: (i, n, o, s) => D(i, n, o, s, !1),
      unlink: K,
      rmdir: (i, n) => _(i, n, Y, A, (o) => {
        if (y(w(e, o))) throw I("ENOTDIR");
        e.deleteByHandle(o)
      }),
      lstat: f,
      open: (i, n, o, s) => S(i, n, s),
      hold: async (i) => {
        let n = await R.realpath(i).catch(() => null);
        if (n === null || V(n)) return null;
        let o;
        try {
          o = e.open(0, qCn(n), {
            access: B,
            disposition: cze.FILE_OPEN,
            options: A
          })
        } catch {
          return null
        }
        try {
          if ((e.queryDevice(o).characteristics & GCn) !== 0) return e.close(o), null;
          let [l, E] = await Promise.all([p(e, o), R.lstat(n, {
            bigint: !0
          })]), d = l.stats(O);
          if (y(l) || !d.isDirectory() || !E.isDirectory() || d.ino === 0n || d.dev !== E.dev || d.ino !== E.ino) return e.close(o), null
        } catch {
          return e.close(o), null
        }
        let s = !1;
        return {
          realPath: n,
          dir: o,
          stat: async () => p(e, o).stats(O),
          close: async () => {
            if (!s) s = !0, e.close(o)
          }
        }
      },
      renameOut: (i, n, o, s) => D(i, n, o.dir, s, !0),
      renameIn: (i, n, o, s) => D(i.dir, n, o, s, !0),
      linkIn: (i, n, o, s) => x(i.dir, n, o, s),
      statIn: (i, n) => f(i.dir, n),
      openIn: (i, n, o) => S(i.dir, n, o),
      unlinkIn: (i, n) => K(i.dir, n)
    }, C = !1, J = {
      stat: async () => {
        if (C) throw I("EBADF");
        return p(e, u).stats(O)
      },
      close: async () => {
        if (!C) C = !0, e.close(u)
      }
    };
  return t("dirSync anchor (win32): held-handle backend up"), {
    root: J,
    held: u,
    ops: Z
  }
}
export {
  Re as openWin32Backend
};
