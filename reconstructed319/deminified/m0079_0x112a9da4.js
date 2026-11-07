// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Zjs, t, xae, io, ie, h0 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { isUtf8 as l } from "buffer";
import { open as p } from "fs/promises";
function d(n, e) {
  if (!Zjs()) return;
  let {
    resolvedPath: resolvedPath,
    isSymlink: isSymlink
  } = io(n, e);
  if (isSymlink) t(`Reading through symlink: ${e} -> ${resolvedPath}`);
}
function F(n, e, r) {
  let i = n.statSync(e);
  return Uqe(i, e, r), i;
}
function Uqe(n, path, maxBytes) {
  if (n.isDirectory()) throw Object.assign(Error("EISDIR: illegal operation on a directory, read"), {
    code: "EISDIR",
    errno: -21,
    syscall: "read",
    path: path
  });
  if (!n.isFile()) throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"), {
    code: "ERR_NOT_REGULAR_FILE",
    path: path
  });
  if (maxBytes !== void 0 && n.size > maxBytes) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: path,
    size: n.size,
    maxBytes: maxBytes
  });
}
function Cna(n, path_2) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), {
    code: "ERR_MULTIPLE_LINKS",
    path: path_2
  });
}
function SPo(size, path_3, maxBytes_2) {
  if (maxBytes_2 === void 0) return;
  if (size > maxBytes_2) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: path_3,
    size: size,
    maxBytes: maxBytes_2
  });
}
function lme(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function cG(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function Ewe(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le";
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8";
}
var length = 4096,
  E = 8000;
function $1s(n) {
  return n.subarray(0, E).includes(0);
}
function cjt(n) {
  let encoding = Ewe(n.subarray(0, length));
  if (encoding !== "utf8") return {
    encoding: encoding
  };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return {
    encoding: encoding,
    notText: "utf16be"
  };
  if ($1s(n)) return {
    encoding: encoding,
    notText: "nul"
  };
  return l(n) ? {
    encoding: encoding
  } : {
    encoding: encoding,
    notText: "not_utf8"
  };
}
function WFr(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e;
}
function _j(n) {
  let e = Ewe(n.subarray(0, length));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function U1s(n) {
  let {
    buffer: buffer,
    bytesRead: bytesRead
  } = ie().readSync(n, {
    length: length
  });
  return Ewe(buffer.subarray(0, bytesRead));
}
function ujt(n) {
  let e = 0,
    r = 0;
  for (let i = 0; i < n.length; i++) if (n[i] === `
`) if (i > 0 && n[i - 1] === "\r") e++;else r++;
  return e > r ? "CRLF" : "LF";
}
function B1s(n, e, r) {
  let i = ie();
  d(i, n);
  let a = F(i, n, e);
  r?.(a);
  let encoding_2 = U1s(n),
    o;
  if (e === void 0) o = i.readFileSync(n, {
    encoding: encoding_2
  });else {
    let {
      buffer: buffer_2,
      bytesRead: bytesRead_2
    } = i.readSync(n, {
      length: e + 1
    });
    SPo(bytesRead_2, n, e), o = buffer_2.subarray(0, bytesRead_2).toString(encoding_2);
  }
  let lineEndings = ujt(o.slice(0, 4096));
  return {
    content: o.replaceAll(`\r
`, `
`),
    encoding: encoding_2,
    lineEndings: lineEndings
  };
}
function PH(n, e, r) {
  return B1s(n, e, r).content;
}
async function mS(n, e) {
  let r = ie();
  d(r, n), Uqe(await r.stat(n), n, e);
  await using i = await p(n, xae());
  return await t$e(i, n, e);
}
async function t$e(n, e, r) {
  Uqe(await n.stat(), e, r);
  let i = r === void 0 ? await n.readFile() : await h0(n, r + 1, "file");
  SPo(i.length, e, r);
  let {
      encoding: encoding_3,
      notText: notText
    } = cjt(i),
    o = i.toString(encoding_3),
    lineEndings_2 = ujt(o.slice(0, 4096));
  return {
    content: o.replaceAll(`\r
`, `
`),
    encoding: encoding_3,
    lineEndings: lineEndings_2,
    ...(notText && {
      notText: notText
    })
  };
}
export { Uqe, Cna, SPo, lme, cG, Ewe, $1s, cjt, WFr, _j, U1s, ujt, B1s, PH, mS, t$e };