// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ke, F, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { sa, xae } from "B:/~BUN/root/chunk-2pp12te6.js";
import { SFr } from "B:/~BUN/root/chunk-x1xft50h.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { cP } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Oq } from "B:/~BUN/root/chunk-trf406sb.js";
import { MX as product, Zue as attach } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { PL, f3, ak } from "B:/~BUN/root/chunk-xbhv3nhf.js";
import { iG, CSt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Ewe, cjt, mS } from "B:/~BUN/root/chunk-x3gsqe09.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { StringDecoder as L } from "string_decoder";
import { Readable as R } from "stream";
import { createReadStream as C, fstat as T } from "fs";
import { stat as I, readFile as v } from "fs/promises";
var A = 10485760,
  Lys = 134217728;
class FileTooLargeError extends Error {
  sizeInBytes;
  maxSizeBytes;
  constructor(n, e, t = "") {
    super(`File content (${en(n)}) exceeds maximum allowed size (${en(e)}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${t}`);
    this.sizeInBytes = n;
    this.maxSizeBytes = e;
    this.name = "FileTooLargeError";
  }
}
class SelectedRangeTooLargeError extends Error {
  selectedBytes;
  maxSelectedBytes;
  constructor(n, e, t = "") {
    super(`The requested line range contains over ${en(e)} of text, more than a read can return. Use a smaller limit \u2014 or, if a single line is this large, no limit will fit it: search for specific content instead.${t}`);
    this.selectedBytes = n;
    this.maxSelectedBytes = e;
    this.name = "SelectedRangeTooLargeError";
  }
}
async function X0e(path, e = 0, t, i, signal, u) {
  signal?.throwIfAborted();
  let a = u?.truncateOnByteLimit ?? !1,
    r = u?.maxSelectedBytes,
    handle = u?.handle,
    d = handle ? u?.handleStats ?? (await handle.stat()) : await I(path);
  if (r !== void 0 && d.isFile() && d.size <= r) r = void 0;
  if (d.isDirectory()) throw Object.assign(Error(`EISDIR: illegal operation on a directory, read '${path}'`), {
    code: "EISDIR",
    errno: -21,
    syscall: "read",
    path: path
  });
  if (d.isFile() && d.size < A) {
    if (!a && i !== void 0 && d.size > i) throw new FileTooLargeError(d.size, i);
    let c = handle ? await handle.readFile({
      signal: signal
    }) : await v(path, {
      signal: signal
    });
    if (!a && i !== void 0) {
      if (c.length > i) throw new FileTooLargeError(c.length, i);
    }
    let {
      encoding: encoding,
      notText: notText
    } = cjt(c);
    return {
      ...Nys(c.toString(encoding), d.size, d.mtimeMs, e, t, a ? i : void 0, r),
      ...(notText && {
        notText: notText
      })
    };
  }
  return H(path, e, t, i, r, d.isFile() ? void 0 : Lys, a, signal, handle ? {
    handle: handle,
    mtimeMs: d.mtimeMs,
    positional: d.isFile()
  } : void 0);
}
function Nys(n, totalBytes, mtimeMs, i, o, u, a) {
  let r = n.charCodeAt(0) === 65279;
  if (r) totalBytes -= 3;
  let s = r ? n.slice(1) : n;
  if (i === 0 && o === void 0 && u === void 0 && a === void 0) {
    let content = s.includes("\r") ? s.replaceAll(`\r
`, `
`) : s;
    if (content.endsWith("\r")) content = content.slice(0, -1);
    let p = 1,
      B = content.indexOf(`
`);
    while (B !== -1) p++, B = content.indexOf(`
`, B + 1);
    return {
      content: content,
      lineCount: p,
      totalLines: p,
      totalBytes: totalBytes,
      readBytes: Buffer.byteLength(content, "utf8"),
      mtimeMs: mtimeMs,
      truncatedByBytes: !1
    };
  }
  let d = o !== void 0 ? i + o : 1 / 0,
    c = [],
    totalLines = 0,
    h = 0,
    m,
    y = 0,
    truncatedByBytes = !1;
  function b(f) {
    if (a !== void 0 || u !== void 0) {
      let p = c.length > 0 ? 1 : 0,
        B = y + p + Buffer.byteLength(f);
      if (u !== void 0 && B > u) return truncatedByBytes = !0, !1;
      if (a !== void 0 && B > a) throw new SelectedRangeTooLargeError(B, a);
      y = B;
    }
    return c.push(f), !0;
  }
  while ((m = s.indexOf(`
`, h)) !== -1) {
    if (totalLines >= i && totalLines < d && !truncatedByBytes) {
      let f = s.slice(h, m);
      if (f.endsWith("\r")) f = f.slice(0, -1);
      b(f);
    }
    totalLines++, h = m + 1;
  }
  if (totalLines >= i && totalLines < d && !truncatedByBytes) {
    let f = s.slice(h);
    if (f.endsWith("\r")) f = f.slice(0, -1);
    b(f);
  }
  totalLines++;
  let content_2 = c.join(`
`);
  return {
    content: content_2,
    lineCount: c.length,
    totalLines: totalLines,
    totalBytes: totalBytes,
    readBytes: Buffer.byteLength(content_2, "utf8"),
    mtimeMs: mtimeMs,
    truncatedByBytes: truncatedByBytes
  };
}
function E(n) {
  T(n, (e, t) => {
    this.resolveMtime(e ? 0 : t.mtimeMs);
  });
}
function M(n) {
  if (this.isFirstChunk && Ewe(n) === "utf16le") this.decoder = new L("utf16le");
  let e = this.decoder.write(n);
  if (e.length > 0) O.call(this, e);
}
function O(n) {
  let e = n;
  if (this.isFirstChunk) {
    if (this.isFirstChunk = !1, e.charCodeAt(0) === 65279) e = e.slice(1);
  }
  let t = Buffer.byteLength(e);
  if (this.totalBytesRead += t, this.hardCapBytes !== void 0 && this.totalBytesRead > this.hardCapBytes) {
    this.stream.destroy(new FileTooLargeError(this.totalBytesRead, this.hardCapBytes));
    return;
  }
  if (!this.truncateOnByteLimit && this.maxBytes !== void 0 && this.totalBytesRead > this.maxBytes) {
    this.stream.destroy(new FileTooLargeError(this.totalBytesRead, this.maxBytes));
    return;
  }
  let i = this.partial.length > 0 ? this.partial + e : e,
    o = this.partialBytes + t;
  this.partial = "", this.partialBytes = 0;
  let u = 0,
    a;
  while ((a = i.indexOf(`
`, u)) !== -1) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let r = i.slice(u, a);
      if (r.endsWith("\r")) r = r.slice(0, -1);
      let s = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (s || this.maxSelectedBytes !== void 0) {
        let d = this.selectedLines.length > 0 ? 1 : 0,
          c = this.selectedBytes + d + Buffer.byteLength(r);
        if (s && c > this.maxBytes) this.truncatedByBytes = !0, this.endLine = this.currentLineIndex;else if (this.maxSelectedBytes !== void 0 && c > this.maxSelectedBytes) {
          this.stream.destroy(new SelectedRangeTooLargeError(c, this.maxSelectedBytes));
          return;
        } else this.selectedBytes = c, this.selectedLines.push(r);
      } else this.selectedLines.push(r);
    }
    this.currentLineIndex++, u = a + 1;
  }
  if (u < i.length) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let r = i.slice(u),
        s = u === 0 ? o : Buffer.byteLength(r),
        d = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (d || this.maxSelectedBytes !== void 0) {
        let c = this.selectedLines.length > 0 ? 1 : 0,
          l = this.selectedBytes + c + s;
        if (d && l > this.maxBytes) {
          this.truncatedByBytes = !0, this.endLine = this.currentLineIndex;
          return;
        }
        if (this.maxSelectedBytes !== void 0 && l > this.maxSelectedBytes) {
          this.stream.destroy(new SelectedRangeTooLargeError(l, this.maxSelectedBytes));
          return;
        }
      }
      this.partial = r, this.partialBytes = s;
    }
  }
}
function _() {
  let n = this.decoder.end();
  if (n.length > 0) {
    if (O.call(this, n), this.stream.destroyed) return;
  }
  let partial = this.partial;
  if (partial.endsWith("\r")) partial = partial.slice(0, -1);
  if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
    let o = this.selectedLines.length > 0 ? 1 : 0;
    if (this.selectedBytes + o + Buffer.byteLength(partial) > this.maxBytes) this.truncatedByBytes = !0;else this.selectedLines.push(partial);
  } else this.selectedLines.push(partial);
  this.currentLineIndex++;
  let content_3 = this.selectedLines.join(`
`),
    truncatedByBytes_2 = this.truncatedByBytes;
  this.mtimeReady.then(mtimeMs_2 => {
    this.resolve({
      content: content_3,
      lineCount: this.selectedLines.length,
      totalLines: this.currentLineIndex,
      totalBytes: this.totalBytesRead,
      readBytes: Buffer.byteLength(content_3, "utf8"),
      mtimeMs: mtimeMs_2,
      truncatedByBytes: truncatedByBytes_2
    });
  });
}
function H(n, offset, t, maxBytes, maxSelectedBytes, hardCapBytes, truncateOnByteLimit, signal_2, s) {
  return new Promise((resolve, c) => {
    let l = {
      stream: s ? Fys(s.handle, s.positional, signal_2) : C(n, {
        highWaterMark: 524288,
        ...(signal_2 ? {
          signal: signal_2
        } : void 0)
      }),
      decoder: new L("utf8"),
      offset: offset,
      endLine: t !== void 0 ? offset + t : 1 / 0,
      maxBytes: maxBytes,
      maxSelectedBytes: maxSelectedBytes,
      hardCapBytes: hardCapBytes,
      truncateOnByteLimit: truncateOnByteLimit,
      resolve: resolve,
      totalBytesRead: 0,
      selectedBytes: 0,
      truncatedByBytes: !1,
      currentLineIndex: 0,
      selectedLines: [],
      partial: "",
      partialBytes: 0,
      isFirstChunk: !0,
      resolveMtime: () => {},
      mtimeReady: null
    };
    if (l.mtimeReady = new Promise(h => {
      l.resolveMtime = h;
    }), s) l.resolveMtime(s.mtimeMs);else l.stream.once("open", E.bind(l));
    l.stream.on("data", z.bind(l)), l.stream.once("end", N.bind(l)), l.stream.once("error", c);
  });
}
function w(n) {
  return function (...e) {
    try {
      n.apply(this, e);
    } catch (error) {
      this.stream.destroy(F(error));
    }
  };
}
var z = w(M),
  N = w(_);
function Fys(n, e, t) {
  let o = Buffer.allocUnsafe(524288),
    u = e ? 0 : null,
    a = !1,
    r = new R({
      read() {
        if (a) return;
        a = !0, n.read(o, 0, 524288, u).then(({
          bytesRead: bytesRead
        }) => {
          if (a = !1, r.destroyed) return;
          if (bytesRead === 0) {
            r.push(null);
            return;
          }
          if (u !== null) u += bytesRead;
          r.push(Buffer.from(o.subarray(0, bytesRead)));
        }).catch(s => {
          a = !1, r.destroy(F(s));
        });
      }
    });
  if (t) {
    let s = () => {
      r.destroy(t.reason instanceof Error ? t.reason : new Ke());
    };
    if (t.aborted) s();else t.addEventListener("abort", s, {
      once: !0
    }), r.once("close", () => t.removeEventListener("abort", s));
  }
  return r;
}
import { constants as D } from "fs";
import { open as W, readlink as U } from "fs/promises";
async function nZt(n, e, t = {}) {
  if (q()) {
    if (n.has(e)) Oq("file_state_resync");
    return null;
  }
  let i = j(n, e);
  if (!i) return null;
  try {
    let o = await cP(e);
    if (o <= i.timestamp) return null;
    let u = ak((await mS(e)).content);
    if (n.get(e) !== i) return null;
    return P(n, e, i, o, u, t.requireReadBeforeWrite === !0);
  } catch {
    return null;
  }
}
function j(n, e) {
  let t = n.get(e);
  if (!t) return null;
  let i = t.isPartialView === !0 && (t.offset ?? 1) <= 1 && t.limit === void 0;
  return PL(t) || i ? t : null;
}
function P(n, e, t, timestamp, content_4, u) {
  let a = f3(t, content_4);
  return n.set(e, {
    content: content_4,
    timestamp: timestamp,
    offset: void 0,
    limit: void 0,
    ...((!a || t.contentNotInModelContext) && {
      contentNotInModelContext: !0
    }),
    ...((t.isPartialView || u && !a) && {
      isPartialView: !0
    }),
    ...((u && !a || t.refreshedBehindModel) && {
      refreshedBehindModel: !0
    }),
    ...(t.startupMemorySeed && {
      startupMemorySeed: !0
    }),
    ...(a && t.seededFromContext && {
      seededFromContext: !0
    })
  }), a ? "unchanged" : "changed";
}
function V(n, e) {
  if (n.content === "" && n.contentHash !== void 0) {
    let o = n.contentLength ?? 0;
    return e < o || e > o * 4 + 3;
  }
  let t = Buffer.byteLength(n.content),
    i = 0;
  for (let o = n.content.indexOf(`
`); o !== -1;) i++, o = n.content.indexOf(`
`, o + 1);
  return e < t || e > t + i + 3;
}
function m0n() {
  return tn() ? {
    product: product,
    attach: attach
  } : void 0;
}
function Jce(n, e, t) {
  let i = `${t.product}/`;
  if (!n.startsWith(i)) return !1;
  let o = n.slice(i.length);
  return o.split("/").every(item => item !== "" && item !== "." && item !== "..") && e === `${t.attach}/${o}`;
}
function gfo(n, e, t) {
  let i = m0n();
  if (i === void 0) return !1;
  return Jce(n, e, i) || t?.orTheLinkItself === !0 && n === i.product && e === i.attach;
}
async function pHi(n, e, t, i, o, u = {}) {
  let a = !1,
    r = (s, d, c) => {
      if (!a && !o.aborted) a = !0, u.onOutcome?.(s, d, c);
    };
  try {
    return await G(n, e, t, i, o, u, r);
  } catch (error) {
    throw r("other", !1), error;
  }
}
async function G(n, e, t, i, o, u, a) {
  let r = m => (a(m, !1), !1);
  if (!PL(t)) return r("partial_view");
  if (t.touchCompared) return r("already_compared");
  o.throwIfAborted();
  let s = xae(),
    d = x(),
    c = d === "linux" || d === "wsl",
    l = typeof s === "number" && (c || d === "macos" && !(await SFr())),
    handle_2;
  try {
    if (!l && (await CSt(e)) === void 0) return r("other");
    handle_2 = typeof s === "number" ? await iG(e, s | D.O_NOFOLLOW, d) : await W(e, s);
  } catch (error) {
    let y = k(error);
    if (y === "ENOENT" || y === "ELOOP") return r(y === "ENOENT" ? "enoent" : "leaf_link");
    throw error;
  }
  try {
    let handleStats = await handle_2.stat(),
      y = c ? await U(`/proc/self/fd/${handle_2.fd}`).catch(() => {
        return;
      }) : e,
      g = y !== e && y !== void 0 && u.outputsLink !== void 0 && Jce(e, y, u.outputsLink) && u.isLandingJudged?.(y) === !0;
    if (!handleStats.isFile()) return r("not_regular");
    if (handleStats.size > i) return r("oversize");
    if (handleStats.nlink > 1) return r("nlink");
    if (y === void 0) return r("other");
    if (y !== e && !g) return r("link_on_path");
    if (!l) {
      let f = await handle_2.stat({
          bigint: !0
        }),
        p = await CSt(e);
      if (p === void 0 || p.dev !== f.dev || p.ino !== f.ino || sa(p.ino)) return r("link_on_path");
    }
    let b = !1,
      S = !1;
    try {
      b = !V(t, handleStats.size) && f3(t, (await X0e(e, 0, void 0, i, o, {
        handle: handle_2,
        handleStats: handleStats
      })).content), S = !0;
    } finally {
      if (!o.aborted && n.get(e) === t) {
        if (n.set(e, {
          ...t,
          ...(b && {
            timestamp: Math.floor(handleStats.mtimeMs)
          }),
          touchCompared: !0
        }), S) a(b ? "same" : "differs", g, handleStats.size);
      } else b = !1, a("other", !1);
    }
    return b;
  } finally {
    let m = handle_2.close();
    if (o.aborted) m.catch(() => {});else await m;
  }
}
export { Lys, FileTooLargeError as kJe, SelectedRangeTooLargeError as Npt, X0e, Nys, Fys, nZt, m0n, Jce, gfo, pHi };