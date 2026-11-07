// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ome } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { sa } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { c5 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { close as D, constants as a, fstat as W, read as j, write as G } from "fs";
import { lstat as I, mkdir as q, open as P } from "fs/promises";
import { basename as J, dirname as Q, join as F } from "path";
import { promisify as w } from "util";
var C6o = "tengu_moonlit_locket",
  z = 1048576;
async function Ktr(t, h) {
  let p = F(t, "info"),
    m = F(p, "exclude"),
    l = _t(C6o, {
      safe: !0
    }),
    g = x() === "windows",
    E,
    s,
    y,
    r;
  try {
    let A = a.O_RDWR | a.O_APPEND | c5() | ro,
      C = g || !l ? void 0 : globalThis.Bun?.ant?.posixFsAt,
      d = typeof C?.openat === "function" && typeof C.mkdirat === "function" && typeof C.lstatat === "function" ? C : void 0,
      B = a.O_RDONLY | a.O_DIRECTORY | c5() | ro,
      f,
      O = [a.O_CREAT];
    if (d !== void 0) {
      try {
        E = await P(t, B);
      } catch (error) {
        let n = k(error);
        if (n === "ELOOP" || n === "ENOTDIR") return {
          kind: "skipped",
          reason: "the git folder is a link or not a folder"
        };
        throw error;
      }
      try {
        d.mkdirat(E.fd, "info");
      } catch (error) {
        if (k(error) !== "EEXIST") throw error;
      }
      try {
        s = d.openat(E.fd, "info", B);
      } catch (error) {
        let n = k(error);
        if (n === "ELOOP" || n === "ENOTDIR") return {
          kind: "skipped",
          reason: "its parent folder is a link or not a folder"
        };
        throw error;
      }
    } else {
      let e = null;
      if (l && g) {
        let [n, u] = await Promise.all([Ome(t), Ome(Q(t))]);
        if (u === null || !H(n, F(u, J(t)))) return {
          kind: "skipped",
          reason: "the git folder is a link or could not be resolved"
        };
        e = n;
      }
      if (await q(p).catch(n => {
        if (k(n) !== "EEXIST") throw n;
      }), f = await I(p, {
        bigint: !0
      }), !f.isDirectory() || e !== null && !H(await Ome(p), F(e, "info"))) return {
        kind: "skipped",
        reason: "its parent folder is a link or not a folder"
      };
      if (l && sa(f.ino)) return {
        kind: "skipped",
        reason: "this drive gives folders no file id, so Claude Code cannot confirm afterwards that the info folder was not swapped"
      };
      try {
        let n = await I(m);
        if (!n.isFile()) return {
          kind: "skipped",
          reason: n.isSymbolicLink() ? "it is a symlink" : "it is not a regular file"
        };
        O = [0];
      } catch (error) {
        if (!K(error)) return {
          kind: "skipped",
          reason: `Claude Code could not check it (${k(error) ?? String(error)})`
        };
        O = [a.O_CREAT | a.O_EXCL, 0];
      }
    }
    for (let [e, n] of O.entries()) try {
      if (d !== void 0 && s !== void 0) r = d.openat(s, "exclude", A | n, 420);else y = await P(m, A | n, 420), r = y.fd;
      break;
    } catch (error) {
      let i = k(error);
      if (i === "EEXIST" && e < O.length - 1) continue;
      if (i === "ELOOP") return {
        kind: "skipped",
        reason: "it is a symlink"
      };
      if (i === "EISDIR" || i === "ENXIO") return {
        kind: "skipped",
        reason: "it is not a regular file"
      };
      if (i === "EEXIST" || i === "ENOENT") return {
        kind: "skipped",
        reason: "it was replaced or removed while Claude Code was opening it"
      };
      if (i === "EACCES" || i === "EPERM" || i === "EROFS") {
        let v = await P(m, a.O_RDONLY | c5() | ro);
        try {
          let R = await v.stat();
          if (!R.isFile() || R.nlink > 1 || R.size > z) return {
            kind: "skipped",
            reason: "it cannot be written to"
          };
          let L = Buffer.alloc(R.size),
            {
              bytesRead: bytesRead
            } = await v.read(L, 0, L.length, 0);
          return h(L.subarray(0, bytesRead)) === null ? {
            kind: "present"
          } : {
            kind: "skipped",
            reason: "it cannot be written to"
          };
        } finally {
          await v.close();
        }
      }
      throw error;
    }
    if (r === void 0) return {
      kind: "skipped",
      reason: "it was replaced or removed while Claude Code was opening it"
    };
    let o = await w(W)(r, {
        bigint: !0
      }),
      c;
    try {
      c = d !== void 0 && s !== void 0 ? d.lstatat(s, "exclude") : await I(m, {
        bigint: !0
      });
    } catch (error) {
      if (!K(error)) throw error;
      return {
        kind: "skipped",
        reason: "it was replaced or removed while Claude Code was opening it"
      };
    }
    if (!o.isFile() || !c.isFile()) return {
      kind: "skipped",
      reason: "it is not a regular file"
    };
    if (l && sa(o.ino)) return {
      kind: "skipped",
      reason: "this drive gives files no id, so Claude Code cannot confirm it is writing to the file it checked"
    };
    if ((l || g) && (c.dev !== o.dev || c.ino !== o.ino)) return {
      kind: "skipped",
      reason: "it was replaced or removed while Claude Code was opening it"
    };
    if (o.nlink > 1n || c.nlink > 1n) return {
      kind: "skipped",
      reason: "it has more than one hard link"
    };
    if (o.size > z) return {
      kind: "skipped",
      reason: "it is larger than 1 MiB"
    };
    if (l && f !== void 0) {
      let e = await I(p, {
        bigint: !0
      });
      if (!e.isDirectory() || e.dev !== f.dev || e.ino !== f.ino) return {
        kind: "skipped",
        reason: "its parent folder was replaced while Claude Code was opening it"
      };
    }
    let _ = Buffer.alloc(Number(o.size)),
      {
        bytesRead: bytesRead_2
      } = await w(j)(r, _, 0, _.length, 0),
      N = _.subarray(0, bytesRead_2),
      X = h(N);
    if (X === null) return {
      kind: "present"
    };
    let M = N.length > 0 && N.at(-1) !== 10 ? `
` : "",
      S = Buffer.from(M + X),
      T = g ? Number(o.size) : null,
      b = 0;
    while (b < S.length) {
      let {
        bytesWritten: bytesWritten
      } = await w(G)(r, S, b, S.length - b, T);
      if (bytesWritten <= 0) throw Error("info/exclude: the write stopped making progress");
      if (b += bytesWritten, T !== null) T += bytesWritten;
    }
    return {
      kind: "written"
    };
  } finally {
    await Promise.all([E?.close(), s !== void 0 ? w(D)(s) : void 0, y !== void 0 ? y.close() : r !== void 0 ? w(D)(r) : void 0]).catch(() => {});
  }
}
function H(t, h) {
  return t !== null && t === h;
}
export { C6o, Ktr };