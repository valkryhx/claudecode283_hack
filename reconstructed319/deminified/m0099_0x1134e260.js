// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { m$e, H, Qp, ZKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, d, k, K, WH, qt, H_ } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { eB, pe, ZSt, ewt, Nna } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { t, Hb, io, Ha, ps, Int, ie, h0 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { kM, zFr, G1s, AC, V1s, K1s, VFr, aVn, TPo, CPo, a7, SN, f0, YFr, Q1s, Z1s, Ina } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Ac } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { U1s } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { randomBytes as Ie } from "crypto";
import { closeSync as L, fchmodSync as Ve, constants as F, fstatSync as D, writeFileSync as Se, fsyncSync as Ee, ftruncateSync as ke, lstatSync as Fe, openSync as B, readSync as Ze } from "fs";
import { lstat as oe, open as G, readlink as Qe, realpath as Re, stat as _e } from "fs/promises";
import { homedir as Le } from "os";
import { basename as V, dirname as E, extname as re, isAbsolute as se, join as T, normalize as qe, parse as Je, relative as Q, resolve as q, sep as U } from "path";
import { closeSync as Be, fstatSync as Ue, fsyncSync as Me, ftruncateSync as Ye, openSync as He, readSync as ze, unlinkSync as Ke, writeSync as je } from "fs";
import { open as Xe, unlink as Ge } from "fs/promises";
function j(e) {
  return a7(e) || k(e) === "EBADF";
}
function X(e) {
  switch (e) {
    case "replaced":
      return "another writer has replaced the file";
    case "torn":
      return "the file may be damaged, or hold another writer's save";
    case "unflushed":
      return "its old content is back but may not have reached the disk";
  }
}
async function fe(e, n, r) {
  let c = ge(n, r);
  if (c !== void 0) return c;
  try {
    let s = Buffer.allocUnsafe(Number(n.size)),
      l = await we(e, s);
    return {
      kind: "putBack",
      oldBytes: s.subarray(0, l),
      dev: n.dev,
      ino: n.ino
    };
  } catch (error) {
    return t(`In-place fallback has no copy of the file: ${error}`), {
      kind: "none"
    };
  }
}
async function de(e, n, r, c, s, l) {
  if (e.kind !== "putBack") {
    let o = e.kind === "remove" && (await TPo(r, e, s, l));
    switch (await te(n), e.kind) {
      case "nothing":
        return "clear";
      case "none":
        return "torn";
      case "remove":
        if (o) return "replaced";
        try {
          return await Ge(r), "clear";
        } catch (error) {
          return K(error) ? "clear" : "torn";
        }
    }
  }
  if (n !== void 0) try {
    return (await TPo(r, e, s, void 0)) ? "replaced" : await ce(n, e.oldBytes, s);
  } catch (error) {
    t(`In-place fallback could not put the file back: ${error}`);
  } finally {
    await te(n);
  }
  try {
    let o = await Xe(r, c);
    try {
      return he(await o.stat({
        bigint: !0
      }), e) ? await ce(o, e.oldBytes, s) : "torn";
    } finally {
      await te(o);
    }
  } catch (error) {
    return t(`In-place fallback could not put the file back: ${error}`, {
      level: "error"
    }), "torn";
  }
}
function ue(e, n, r) {
  let c = ge(n, r);
  if (c !== void 0) return c;
  try {
    let s = Buffer.allocUnsafe(Number(n.size)),
      l = Oe(e, s);
    return {
      kind: "putBack",
      oldBytes: s.subarray(0, l),
      dev: n.dev,
      ino: n.ino
    };
  } catch (error) {
    return t(`In-place fallback has no copy of the file: ${error}`), {
      kind: "none"
    };
  }
}
function me(e, n, r, c, s, l) {
  if (e.kind !== "putBack") {
    let o = e.kind === "remove" && CPo(r, e, s, l);
    switch (ne(n), e.kind) {
      case "nothing":
        return "clear";
      case "none":
        return "torn";
      case "remove":
        if (o) return "replaced";
        try {
          return Ke(r), "clear";
        } catch (error) {
          return K(error) ? "clear" : "torn";
        }
    }
  }
  if (n !== void 0) try {
    return CPo(r, e, s, void 0) ? "replaced" : le(n, e.oldBytes, s);
  } catch (error) {
    t(`In-place fallback could not put the file back: ${error}`);
  } finally {
    ne(n);
  }
  try {
    let o = He(r, c);
    try {
      return he(Ue(o, {
        bigint: !0
      }), e) ? le(o, e.oldBytes, s) : "torn";
    } finally {
      ne(o);
    }
  } catch (error) {
    return t(`In-place fallback could not put the file back: ${error}`, {
      level: "error"
    }), "torn";
  }
}
function he(e, n) {
  return e.dev === n.dev && e.ino === n.ino;
}
function ge(e, n) {
  if (!e.isFile()) return {
    kind: "nothing"
  };
  if (n && e.size === 0n) return {
    kind: "remove",
    ino: e.ino
  };
  return e.size > BigInt(aVn) ? {
    kind: "none"
  } : void 0;
}
async function te(e) {
  try {
    await e?.close();
  } catch (error) {
    t(`Failed to close the file: ${error}`);
  }
}
async function we(e, n) {
  let r = 0;
  while (r < n.length) {
    let {
      bytesRead: bytesRead
    } = await e.read(n, r, n.length - r, r);
    if (bytesRead === 0) break;
    r += bytesRead;
  }
  return r;
}
function ye(e, n) {
  return Buffer.allocUnsafe(Math.max(e.length, n.length) + 1);
}
function be(e, n, r) {
  if (r.equals(e)) return "clear";
  return r.some((item, index) => item !== 0 && item !== e[index] && item !== n[index]) ? "torn" : void 0;
}
async function ce(e, n, r) {
  let c = ye(n, r),
    s;
  try {
    s = await we(e, c);
    let o = be(n, r, c.subarray(0, s));
    if (o !== void 0) return o;
  } catch (error) {
    t(`In-place fallback could not read the file back: ${error}`);
  }
  let l = 0;
  while (l < n.length) {
    let {
      bytesWritten: bytesWritten
    } = await e.write(n, l, n.length - l, l);
    if (bytesWritten === 0) throw Error("write made no progress");
    l += bytesWritten;
  }
  if (s === void 0 || s > n.length) await e.truncate(n.length);
  try {
    return await e.sync(), "clear";
  } catch (error) {
    return t(`fsync of the restored file failed: ${error}`), j(error) ? "clear" : "unflushed";
  }
}
function ne(e) {
  if (e === void 0) return;
  try {
    Be(e);
  } catch (error) {
    t(`Failed to close the file: ${error}`);
  }
}
function Oe(e, n) {
  let r = 0;
  while (r < n.length) {
    let c = ze(e, n, r, n.length - r, r);
    if (c === 0) break;
    r += c;
  }
  return r;
}
function le(e, n, r) {
  let c = ye(n, r),
    s;
  try {
    s = Oe(e, c);
    let o = be(n, r, c.subarray(0, s));
    if (o !== void 0) return o;
  } catch (error) {
    t(`In-place fallback could not read the file back: ${error}`);
  }
  let l = 0;
  while (l < n.length) {
    let o = je(e, n, l, n.length - l, l);
    if (o === 0) throw Error("write made no progress");
    l += o;
  }
  if (s === void 0 || s > n.length) Ye(e, n.length);
  try {
    return Me(e), "clear";
  } catch (error) {
    return t(`fsync of the restored file failed: ${error}`), j(error) ? "clear" : "unflushed";
  }
}
class ve {
  identities = new Map();
  record(e, dev, ino, fd) {
    let s = $e(e),
      l = this.identities.get(s);
    if (l) try {
      L(l.fd);
    } catch {}
    this.identities.set(s, {
      dev: dev,
      ino: ino,
      fd: fd
    });
  }
  identity(e) {
    return this.identities.get($e(e));
  }
  reset() {
    for (let {
      fd: fd_2
    } of this.identities.values()) try {
      L(fd_2);
    } catch {}
    this.identities.clear();
  }
}
var et = new W(() => new ve());
function ae() {
  return et.of(H().host);
}
function $e(e) {
  return q(e);
}
function gna(e, n, r, c) {
  ae().record(e, n, r, c);
}
function Udn(e) {
  return;
}
function uPo(e, n, r, c) {
  let s = `${n}${r}`;
  return s;
}
class SymlinkWriteRefusedError extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}
class HardLinkWriteRefusedError extends SymlinkWriteRefusedError {
  constructor(e, n) {
    super(G1s(e, n));
    this.name = "HardLinkWriteRefusedError";
  }
}
function xe(e, n) {
  return {
    flags: "r+",
    flagsIfMissing: "wx",
    flagsIfRefused: void 0,
    flagsToReopen: "r+"
  };
}
function Ne(e) {
  return e !== void 0 && (e & F.S_IFMT) === F.S_IFREG;
}
class SymlinkReadRefusedError extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}
async function ijt(e, n) {
  let r = Q(e, n);
  if (r === "" || r.startsWith("..") || se(r)) throw new R(`assertDirChainReal: dir must be strictly inside base (rel: ${r})`, "assertDirChainReal: dir must be strictly inside base");
  let c = e;
  for (let s of r.split(U)) {
    c = T(c, s);
    try {
      let l = await oe(c);
      if (l.isSymbolicLink() || !l.isDirectory()) throw new SymlinkWriteRefusedError(`Refusing to write under symlinked or non-directory path: ${c}`);
    } catch (error) {
      if (error instanceof SymlinkWriteRefusedError) throw error;
      let o = k(error);
      if (o === "ENOTDIR") throw new SymlinkWriteRefusedError(`Refusing to write under symlinked or non-directory path: ${c}`);
      if (o === "ENOENT") return;
      throw error;
    }
    continue;
  }
}
class StagingDirTamperedError extends Error {
  constructor(e) {
    super(e);
    this.name = "StagingDirTamperedError";
  }
}
function ajt(e) {
  throw m("sandbox_exec", "atomic_write_staging_dir_tampered"), new StagingDirTamperedError(e);
}
function wwe(e, n, r = "write") {
  return Ce(e, n, r) ?? ps(n);
}
function Ce(e, n, r) {
  let c = e.session.writePermissionStash.consume(e.toolUseId, n, r);
  if (c === m$e) throw new (r === "read" ? SymlinkReadRefusedError : SymlinkWriteRefusedError)(`Refusing to ${r === "read" ? "read" : "write"} ${n}: its permission check expired before it ran (too many concurrent file operations). Retry.`);
  if (c !== void 0) return c;
  if (e.toolUseId) t(`takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`);
  return;
}
function Bdn(e, n) {
  return wwe(e, n, "read");
}
function yna(e, n) {
  let spellings = Ce(e, n, "read");
  if (spellings !== void 0) return {
    spellings: spellings,
    unresolved: !1
  };
  let c = Ha(n);
  return {
    spellings: Int(c),
    unresolved: c.unresolved
  };
}
async function gf(e) {
  try {
    return await _e(e), !0;
  } catch {
    return !1;
  }
}
async function JU(e) {
  return oe(e).then(() => "present", n => K(n) || k(n) === "ENOTDIR" ? "gone" : "unreadable");
}
var ljt = 262144;
function YHe(e, {
  maxBytes: maxBytes,
  symlinkAtPath = "follow",
  regularFileOnly = symlinkAtPath === "refuse"
}) {
  using s = Hb`fs.readBoundedSync(${e}, max ${maxBytes} bytes)`;
  let l = "r";
  if (symlinkAtPath === "refuse") {
    if (Fe(e).isSymbolicLink()) throw Object.assign(Error("ELOOP: refusing a symbolic link"), {
      code: "ELOOP"
    });
  }
  let o = B(e, l);
  try {
    if (regularFileOnly) {
      if (!D(o).isFile()) throw Object.assign(Error("EINVAL: not a regular file"), {
        code: "EINVAL"
      });
    }
    if (symlinkAtPath === "refuse") {
      let f = D(o, {
          bigint: !0
        }),
        h = Fe(e, {
          bigint: !0
        });
      if (h.isSymbolicLink() || h.ino !== f.ino || h.dev !== f.dev) throw Object.assign(Error("ELOOP: refusing a symbolic link"), {
        code: "ELOOP"
      });
    }
    return Te(o, e, maxBytes);
  } finally {
    L(o);
  }
}
function _na(e, {
  maxBytes: maxBytes_2
}) {
  using r = Hb`fs.readInheritedFdSync(fd ${e}, max ${maxBytes_2} bytes)`;
  let c = D(e);
  if (!c.isSocket() && !c.isFIFO()) throw new R(`refusing to read fd ${e}: not a pipe or socket`, "readInheritedFdSync: descriptor is not a pipe or socket");
  return tt(e, maxBytes_2);
}
function pPo(e) {
  try {
    return D(e).isSocket();
  } catch {
    return !1;
  }
}
function tt(e, n) {
  try {
    return Te(e, `fd ${e}`, n, {
      untilNewline: !0
    });
  } finally {
    L(e);
  }
}
function Te(e, n, r, {
  untilNewline = !1
} = {}) {
  let s = [],
    l = 0,
    o = Buffer.alloc(8192);
  while (!0) {
    let f = Ze(e, o, 0, o.length, null);
    if (f === 0) return Buffer.concat(s).toString("utf8");
    if (l += f, l > r) throw new R(`refusing to read ${n}: content exceeds ${r} byte limit`, "readBoundedSync: content exceeds byte limit");
    let h = untilNewline ? o.subarray(0, f).indexOf(10) : -1;
    if (s.push(Buffer.from(o.subarray(0, h === -1 ? f : h + 1))), h !== -1) return Buffer.concat(s).toString("utf8");
  }
}
function bna(e) {
  let n = ie();
  return Math.floor(n.statSync(e).mtimeMs);
}
async function cP(e) {
  let n = await ie().stat(e);
  return Math.floor(n.mtimeMs);
}
function M1s() {
  return Pe(i.CLAUDE_CODE_PERFORCE_MODE);
}
var zSt = "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function GSt(e) {
  return M1s() && (e & 128) === 0;
}
var nt = Qy();
function oY(e, n) {
  return nt.run(e, n);
}
function XHe(e, n) {
  if (n !== "CRLF") return e;
  return e.replaceAll(`\r
`, `
`).split(`
`).join(`\r
`);
}
async function VSt(e, n, encoding, c) {
  let s = XHe(n, c),
    l = await uP(e, s, {
      encoding: encoding
    }),
    o = Buffer.byteLength(s, encoding),
    f = await ie().stat(e);
  if (f.size !== o) throw new R(`Write verification failed: ${e} is ${f.size} bytes on disk, expected ${o}. The filesystem may have silently truncated the write (network drive / cloud sync).`, "writeTextContent: on-disk size mismatch after write");
  if (l === "inPlace" && f.isFile() && o <= aVn) {
    let h;
    try {
      await using S = await G(e, F.O_RDONLY | Go);
      h = await h0(S, o + 1, "file");
    } catch (error) {
      t(`Could not read the file back after saving it: ${error}`);
    }
    if (h !== void 0 && !h.equals(Buffer.from(s, encoding))) throw new R(`Write verification failed: ${e} does not hold what was written. The filesystem may have silently kept only part of the write, or another process may have changed the file.`, "writeTextContent: on-disk bytes differ after write", "write_bytes_differ");
  }
  return Math.floor(f.mtimeMs);
}
function Sna(e) {
  try {
    let n = ie(),
      {
        resolvedPath: resolvedPath
      } = io(n, e);
    return U1s(resolvedPath);
  } catch (error) {
    if (qt(error) || WH(error) || H_(error)) t(`detectFileEncoding failed for expected reason: ${k(error)}`, {
      level: "debug"
    });else a(error);
    return "utf8";
  }
}
function bae(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, n => "  ".repeat(n.length));
}
function rt(e) {
  let n = e ? Nna() ?? void 0 : void 0,
    absolutePath = e ? Ac(e, n) ?? void 0 : void 0,
    relativePath = absolutePath && n !== void 0 ? Q(n, absolutePath) : void 0;
  return {
    absolutePath: absolutePath,
    relativePath: relativePath
  };
}
var djt = "Path hidden (unsupported characters)";
function zs(e) {
  if (e.includes("\x00")) return djt;
  let {
    relativePath: relativePath_2
  } = rt(e);
  if (relativePath_2 && !relativePath_2.startsWith("..")) return relativePath_2;
  if (Qp()) return e;
  let r = Le();
  if (e.startsWith(r + U)) return "~" + e.slice(r.length);
  return e;
}
function jdn(e, n) {
  let r = n === void 0 ? ewt() : ZSt(n),
    c = (n !== void 0 || !eB()) && r === ZKn();
  return Q(r, c ? q(r, e) : e);
}
var it = /^(\.[\p{L}\p{N}_+~#-]{1,32})?$/u;
async function Dqe(e) {
  let n = ie();
  try {
    let r = E(e),
      c = V(e, re(e)),
      o = (await n.readdir(r)).filter(item => it.test(re(item.name).normalize("NFC")) && V(item.name, re(item.name)) === c && T(r, item.name) !== e)[0];
    if (o) return o.name;
    return;
  } catch (error) {
    if (!K(error)) t(`findSimilarFile failed for ${e}: ${error}`, {
      level: "error"
    });
    return;
  }
}
var sY = "Note: your current working directory is";
async function kwe(e) {
  let n = pe(),
    r = E(n),
    c = e;
  try {
    let w = await Re(E(e));
    c = T(w, V(e));
  } catch {}
  let s = r === U ? U : r + U,
    o = x() === "windows" ? w => w.toLowerCase() : w => w,
    f = o(c);
  if (!f.startsWith(o(s)) || f.startsWith(o(n + U)) || f === o(n)) return;
  let h = Q(r, c),
    S = T(n, h);
  try {
    return await _e(S), S;
  } catch {
    return;
  }
}
function Lqe({
  content: content,
  startLine: startLine,
  tabAwareSeparator = !1
}) {
  if (!content) return "";
  let c = tabAwareSeparator && (content.startsWith("\t") || content.includes(`
	`)) ? ":" : "\t",
    s = [],
    l = startLine,
    o = 0,
    f = content.indexOf(`
`);
  while (f !== -1) s.push(mPo(content.slice(o, f), l++, c)), o = f + 1, f = content.indexOf(`
`, o);
  return s.push(mPo(content.slice(o), l, c)), s.join(`
`);
}
function mPo(e, n, r) {
  let c = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${n}${r}${c}`;
}
function LFr(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function Z(e, value, r = "") {
  if (e instanceof Error && !(e instanceof SymlinkWriteRefusedError) && e !== value) try {
    if (e.cause === void 0) e.message += `${r} (atomic write failed first: ${d(value)})`, Object.defineProperty(e, "cause", {
      value: value,
      writable: !0,
      configurable: !0,
      enumerable: !1
    });
  } catch {}
  throw e;
}
function De(e) {
  return;
}
function J2n(e, n, r = {
  encoding: "utf-8"
}) {
  Ae(e, n, r, !1);
}
function Ae(e, n, r, c) {
  let s = ie(),
    l = (r.allowSymlink, 0),
    o = e,
    f,
    h = !1;
  if (r.allowSymlink) try {
    let u = s.readlinkSync(e);
    o = se(u) ? u : q(io(s, E(e)).resolvedPath, u), t(`Writing through symlink: ${e} -> ${o}`);
  } catch {} else {
    r.checkParentDir;
    try {
      let u = s.lstatSync(e);
      if (u.isSymbolicLink()) throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      f = u.mode, h = !0;
    } catch (error) {
      if (!K(error)) throw error;
    }
  }
  let S = `.tmp.${process.pid}.${Ie(6).toString("hex")}`,
    w = uPo(r.stagingDir, o, S, r.allowSymlink ?? !1),
    v = !1,
    A = !1;
  if (r.allowSymlink && !h) try {
    f = s.statSync(o).mode, h = !0;
  } catch (error) {
    if (!K(error)) throw error;
  }
  if (h && f !== void 0) t(`Preserving file permissions: ${f.toString(8)}`);else if (r.mode !== void 0) f = r.mode, t(`Setting permissions for new file: ${f.toString(8)}`);
  try {
    t(`Writing to temp file: ${w}`);
    let u = B(w, "wx", h ? De(f) : r.mode),
      O = !1,
      P;
    try {
      if (E(w) !== E(o)) Udn(r.stagingDir);
      if (Se(u, n, {
        encoding: r.encoding
      }), h && f !== void 0) try {
        Ve(u, f), t("Applied original permissions to temp file");
      } catch (error) {
        if (!a7(error)) throw error;
        t(`fchmod unsupported on this filesystem: ${error}`);
      }
      try {
        Ee(u);
      } catch (error) {
        if (!a7(error)) throw error;
        t(`fsync unsupported on this filesystem: ${error}`);
      }
      v = !0;
    } catch (error) {
      O = !0, P = error;
    }
    try {
      L(u);
    } catch (error) {
      if (!O) throw error;
      t(`closeSync also failed after temp write error: ${error}`, {
        level: "error"
      });
    }
    if (O) throw P;
    if (t(`Temp file written successfully, size: ${n.length} bytes`), E(w) !== E(o)) Udn(r.stagingDir);
    t(`Renaming ${w} to ${o}`), A = !0, K1s(w, o, (g, I) => s.renameSync(g, I)), YFr(o), t(`File ${o} written atomically`);
  } catch (error) {
    if (t(`Failed to write file atomically: ${error}`, {
      level: "error"
    }), A && Z1s(error, w, o, c)) {
      t(`EBUSY in an NFS folder: saving ${o} once more`), Ae(e, n, r, !0);
      return;
    }
    let O = k(error);
    if (v && O !== void 0 && (kM.has(O) || c && A && !VFr.has(O)) || !v && h && O === "EACCES") {
      let {
          flags: flags,
          flagsIfMissing: flagsIfMissing,
          flagsIfRefused: flagsIfRefused,
          flagsToReopen: flagsToReopen
        } = xe(l, !h || Ne(f)),
        Y = !h && r.mode !== void 0 ? r.mode : void 0,
        y;
      try {
        try {
          y = B(o, flags, Y);
        } catch (error) {
          let b = flagsIfMissing !== void 0 && K(error),
            C = b ? flagsIfMissing : flagsIfRefused;
          if (C === void 0) throw error;
          if (b) Ina(o);
          y = B(o, C, Y);
        }
      } catch (p) {
        try {
          s.unlinkSync(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        if (k(p) === "ELOOP") throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw error;
      }
      let N, _;
      try {
        let p = D(y, {
          bigint: !0
        });
        if (p.nlink > 1n && (r.refuseHardLinkedInPlace ?? zFr())) throw new HardLinkWriteRefusedError(o, Number(p.nlink));
        if (_ = Buffer.from(n, r.encoding), N = ue(y, p, !h), N.kind === "none") ke(y, 0);
      } catch (p) {
        try {
          L(y);
        } catch {}
        try {
          s.unlinkSync(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        Z(p, error);
      }
      let z = !0;
      try {
        if (Se(y, _), N.kind === "putBack" && D(y).size > _.length) ke(y, _.length);
        try {
          Ee(y);
        } catch (error) {
          if (!j(error)) throw error;
          t(`fsync failed, and the write stands: ${error}`);
        }
        z = !1, L(y);
        try {
          s.unlinkSync(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        t(`File ${o} written via in-place fallback`);
        return;
      } catch (p) {
        let b = me(N, z ? y : void 0, o, flagsToReopen, _, p);
        if (b !== "clear" && v) throw Object.assign(new R(`Write to ${o} failed (${k(p) ?? p}); ${X(b)}. The new content was preserved at ${w}.`, "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path"), {
          code: k(p)
        });
        try {
          s.unlinkSync(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        Z(p, error, b === "clear" ? "" : `; ${X(b)}`);
      }
    }
    try {
      s.unlinkSync(w);
    } catch (error) {
      t(`Failed to clean up temp file: ${error}`);
    }
    throw error;
  }
}
function uP(e, n, r = {
  encoding: "utf-8"
}) {
  return We(e, n, r, !1);
}
async function We(e, n, r, c) {
  let s = ie(),
    l = (r.allowSymlink, 0),
    o = e,
    f,
    h = !1;
  if (r.allowSymlink) try {
    let u = await Qe(e);
    o = se(u) ? u : q(await Re(E(e)), u), t(`Writing through symlink: ${e} -> ${o}`);
  } catch {} else {
    r.checkParentDir;
    try {
      let u = await oe(e);
      if (u.isSymbolicLink()) throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      f = u.mode, h = !0;
    } catch (error) {
      if (!K(error)) throw error;
    }
  }
  let S = `.tmp.${process.pid}.${Ie(6).toString("hex")}`,
    w = uPo(r.stagingDir, o, S, r.allowSymlink ?? !1),
    v = !1,
    A = !1;
  if (r.allowSymlink && !h) try {
    f = (await s.stat(o)).mode, h = !0;
  } catch (error) {
    if (!K(error)) throw error;
  }
  if (h && f !== void 0) t(`Preserving file permissions: ${f.toString(8)}`);else if (r.mode !== void 0) f = r.mode, t(`Setting permissions for new file: ${f.toString(8)}`);
  try {
    t(`Writing to temp file: ${w}`);
    let u = await G(w, "wx", h ? De(f) : r.mode),
      O = !1,
      P;
    try {
      if (E(w) !== E(o)) Udn(r.stagingDir);
      if (await u.writeFile(n, {
        encoding: r.encoding
      }), h && f !== void 0) try {
        await u.chmod(f), t("Applied original permissions to temp file");
      } catch (error) {
        if (!a7(error)) throw error;
        t(`fchmod unsupported on this filesystem: ${error}`);
      }
      try {
        await u.sync();
      } catch (error) {
        if (!a7(error)) throw error;
        t(`fsync unsupported on this filesystem: ${error}`);
      }
      v = !0;
    } catch (error) {
      O = !0, P = error;
    }
    try {
      await u.close();
    } catch (error) {
      if (!O) throw error;
      t(`close also failed after temp write error: ${error}`, {
        level: "error"
      });
    }
    if (O) throw P;
    if (t(`Temp file written successfully, size: ${n.length} bytes`), E(w) !== E(o)) Udn(r.stagingDir);
    if (r.createOnly) {
      r.beforeRename?.();
      try {
        await AC(() => s.link(w, o), o);
      } catch (error) {
        if (k(error) === "EEXIST") throw error;
        await SN(o, n, r.mode);
      }
      await s.unlink(w).catch(g => {
        t(`Failed to clean up temp file: ${g}`);
      }), t(`Created ${o}`);
      return;
    }
    t(`Renaming ${w} to ${o}`), await V1s(w, o, (g, I) => (r.beforeRename?.(), A = !0, s.rename(g, I)), r.shortRenameWaits), YFr(o), t(`File ${o} written atomically`);
  } catch (error) {
    let O = k(error);
    if (!r.createOnly || O !== "EEXIST") t(`Failed to write file atomically: ${error}`, {
      level: "error"
    });
    if (A && (await Q1s(error, w, o, c))) return t(`EBUSY in an NFS folder: saving ${o} once more`), We(e, n, r, !0);
    let P = v && O !== void 0 && (kM.has(O) || c && A && !VFr.has(O)) && !r.createOnly,
      g = !v && h && O === "EACCES" && !r.createOnly;
    if (P) try {
      r.beforeRename?.();
    } catch (error) {
      throw await s.unlink(w).catch(() => {}), error;
    }
    if (P || g) {
      let {
          flags: flags_2,
          flagsIfMissing: flagsIfMissing_2,
          flagsIfRefused: flagsIfRefused_2,
          flagsToReopen: flagsToReopen_2
        } = xe(l, !h || Ne(f)),
        Y = !h && r.mode !== void 0 ? r.mode : void 0,
        y;
      try {
        try {
          y = await G(o, flags_2, Y);
        } catch (error) {
          let b = flagsIfMissing_2 !== void 0 && K(error),
            C = b ? flagsIfMissing_2 : flagsIfRefused_2;
          if (C === void 0) throw error;
          if (b) await f0(o);
          y = await G(o, C, Y);
        }
      } catch (p) {
        try {
          await s.unlink(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        if (k(p) === "ELOOP") throw new SymlinkWriteRefusedError(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw error;
      }
      let N, _;
      try {
        let p = await y.stat({
          bigint: !0
        });
        if (p.nlink > 1n && (r.refuseHardLinkedInPlace ?? zFr())) throw new HardLinkWriteRefusedError(o, Number(p.nlink));
        if (_ = Buffer.from(n, r.encoding), N = await fe(y, p, !h), N.kind === "none") await y.truncate(0);
      } catch (p) {
        await y.close().catch(() => {});
        try {
          await s.unlink(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        Z(p, error);
      }
      let z = !0;
      try {
        if (await y.writeFile(_), N.kind === "putBack" && (await y.stat()).size > _.length) await y.truncate(_.length);
        try {
          await y.sync();
        } catch (error) {
          if (!j(error)) throw error;
          t(`fsync failed, and the write stands: ${error}`);
        }
        z = !1, await y.close();
        try {
          await s.unlink(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        return t(`File ${o} written via in-place fallback`), "inPlace";
      } catch (p) {
        let b = await de(N, z ? y : void 0, o, flagsToReopen_2, _, p);
        if (b !== "clear" && v) throw Object.assign(new R(`Write to ${o} failed (${k(p) ?? p}); ${X(b)}. The new content was preserved at ${w}.`, "writeFileAndFlush: in-place fallback write failed; content preserved at temp path"), {
          code: k(p)
        });
        try {
          await s.unlink(w);
        } catch (error) {
          t(`Failed to clean up temp file: ${error}`);
        }
        Z(p, error, b === "clear" ? "" : `; ${X(b)}`);
      }
    }
    try {
      await s.unlink(w);
    } catch (error) {
      t(`Failed to clean up temp file: ${error}`);
    }
    throw error;
  }
}
var ot = new Set(["Public", "Default", "Default User", "All Users"]);
async function wna() {
  let e = x(),
    n = Le(),
    r = ie();
  if (e === "macos") return T(n, "Desktop");
  if (e === "windows") {
    let s = i.USERPROFILE ? i.USERPROFILE.replaceAll("\\", "/") : null;
    if (s) {
      let o = `/mnt/c${s.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await gf(o)) return o;
    }
    try {
      let o = await r.readdir("/mnt/c/Users");
      for (let f of o) {
        if (ot.has(f.name)) continue;
        let h = T("/mnt/c/Users", f.name, "Desktop");
        if (await gf(h)) return h;
      }
    } catch (error) {
      t(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${error}`, {
        level: "error"
      });
    }
  }
  let c = T(n, "Desktop");
  if (await gf(c)) return c;
  return n;
}
async function NFr(e, n = ljt) {
  try {
    return (await ie().stat(e)).size <= n;
  } catch {
    return !1;
  }
}
function Cp(e) {
  let n = x() === "windows",
    r = qe(e),
    c = n ? /[\\/]+$/ : /\/+$/,
    s = r.length > Je(r).root.length ? r.replace(c, "") : r;
  return n ? s.replaceAll("/", "\\").toLowerCase() : s;
}
function xT(e, n) {
  return Cp(e) === Cp(n);
}
export { gna, Udn, uPo, SymlinkWriteRefusedError as hh, HardLinkWriteRefusedError as DFr, SymlinkReadRefusedError as VO, ijt, StagingDirTamperedError as fPo, ajt, wwe, Bdn, yna, gf, JU, ljt, YHe, _na, pPo, bna, cP, M1s, zSt, GSt, oY, XHe, VSt, Sna, bae, djt, zs, jdn, Dqe, sY, kwe, Lqe, mPo, LFr, J2n, uP, wna, NFr, Cp, xT };