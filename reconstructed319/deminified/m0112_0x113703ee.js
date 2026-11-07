// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { AsyncLocalStorage as f } from "async_hooks";
import { constants as p } from "fs";
import { appendFile as y, copyFile as b, lstat as w, mkdir as P, open as u, readdir as d, readFile as l, stat as S, unlink as h, writeFile as o } from "fs/promises";
class Jxo {
  read(r) {
    return l(r, "utf8");
  }
  readBytes(r) {
    return l(r);
  }
  write(r, e, mode) {
    return o(r, e, {
      encoding: "utf8",
      mode: mode
    });
  }
  async mkdir(r, mode_2) {
    try {
      await P(r, {
        recursive: !0,
        mode: mode_2
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  }
  atomicWrite(r, e, t) {
    return zn(r, e, t);
  }
  delete(r) {
    return h(r);
  }
  list(r) {
    return d(r);
  }
  append(r, e, mode_3) {
    return y(r, e, {
      encoding: "utf8",
      mode: mode_3
    });
  }
  writeExclusive(r, e, mode_4) {
    return o(r, e, {
      encoding: "utf8",
      flag: "wx",
      mode: mode_4
    });
  }
  writeBytesExclusive(r, e, mode_5) {
    return o(r, e, {
      flag: "wx",
      mode: mode_5
    });
  }
  copy(r, e) {
    return b(r, e);
  }
  async stat(r) {
    return {
      mtimeMs: (await S(r)).mtimeMs
    };
  }
  async lstat(r) {
    try {
      let e = await w(r);
      return {
        isSymbolicLink: e.isSymbolicLink(),
        isFile: e.isFile(),
        isDirectory: e.isDirectory(),
        mtimeMs: e.mtimeMs,
        nlink: e.nlink
      };
    } catch (error) {
      if (k(error) === "ENOENT") return;
      throw error;
    }
  }
  async listEntries(r) {
    return (await d(r, {
      withFileTypes: !0
    })).map(item => ({
      name: item.name,
      isDirectory: item.isDirectory(),
      isFile: item.isFile()
    }));
  }
  async readRange(r, e, t) {
    a("readRange", "offset", e), a("readRange", "length", t);
    let n = await u(r, "r");
    try {
      return await c(n, e, t);
    } finally {
      await n.close();
    }
  }
  async readTail(path, e, t) {
    a("readTail", "maxBytes", e);
    let n = t?.noFollow ? p.O_RDONLY | Go : "r",
      i = await u(path, n);
    try {
      let s = await i.stat();
      if (t?.noFollow && !s.isFile()) throw Object.assign(Error("ENXIO: not a regular file"), {
        code: "ENXIO",
        path: path
      });
      let {
          size: size
        } = s,
        g = Math.min(e, size);
      return await c(i, size - g, g);
    } finally {
      await i.close();
    }
  }
}
function a(r, e, t) {
  if (!Number.isInteger(t) || t < 0) throw RangeError(`${r}: ${e} must be a non-negative integer, got ${t}`);
}
async function c(r, e, t) {
  if (t === 0) return Buffer.alloc(0);
  let n = Buffer.alloc(t),
    i = 0;
  while (i < t) {
    let {
      bytesRead: bytesRead
    } = await r.read(n, i, t - i, e + i);
    if (bytesRead === 0) break;
    i += bytesRead;
  }
  return i === t ? n : Buffer.from(n.subarray(0, i));
}
var B = new f();
function Dn() {
  return B.getStore() ?? new Jxo();
}
export { Jxo, Dn };