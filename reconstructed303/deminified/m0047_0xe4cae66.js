// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vhe, _o, se, J2, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { isUtf8 as p } from "buffer";
import { open as E } from "fs/promises";
function F(n, e, r) {
  let i = n.statSync(e);
  return aDe(i, e, r), i;
}
function aDe(n, path, maxBytes) {
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
function CYs(n, path_2) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), {
    code: "ERR_MULTIPLE_LINKS",
    path: path_2
  });
}
function PBr(size, path_3, maxBytes_2) {
  if (maxBytes_2 === void 0) return;
  if (size > maxBytes_2) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: path_3,
    size: size,
    maxBytes: maxBytes_2
  });
}
function hQ(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function WW(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function hde(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le";
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8";
}
var length = 4096,
  b = 8000;
function Pjo(n) {
  return n.subarray(0, b).includes(0);
}
function Abt(n) {
  let encoding = hde(n.subarray(0, length));
  if (encoding !== "utf8") return {
    encoding: encoding
  };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return {
    encoding: encoding,
    notText: "utf16be"
  };
  if (Pjo(n)) return {
    encoding: encoding,
    notText: "nul"
  };
  return p(n) ? {
    encoding: encoding
  } : {
    encoding: encoding,
    notText: "not_utf8"
  };
}
function OBr(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e;
}
function Hne(n) {
  let e = hde(n.subarray(0, length));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function Ojo(n) {
  let {
    buffer: buffer,
    bytesRead: bytesRead
  } = se().readSync(n, {
    length: length
  });
  return hde(buffer.subarray(0, bytesRead));
}
function xbt(n) {
  let e = 0,
    r = 0;
  for (let i = 0; i < n.length; i++) if (n[i] === `
`) if (i > 0 && n[i - 1] === "\r") e++;else r++;
  return e > r ? "CRLF" : "LF";
}
function Ijo(n, e, r) {
  let i = se(),
    {
      resolvedPath: resolvedPath,
      isSymlink: isSymlink
    } = _o(i, n);
  if (isSymlink) t(`Reading through symlink: ${n} -> ${resolvedPath}`);
  let u = F(i, n, e);
  r?.(u);
  let encoding_2 = Ojo(n),
    c;
  if (e === void 0) c = i.readFileSync(n, {
    encoding: encoding_2
  });else {
    let {
      buffer: buffer_2,
      bytesRead: bytesRead_2
    } = i.readSync(n, {
      length: e + 1
    });
    PBr(bytesRead_2, n, e), c = buffer_2.subarray(0, bytesRead_2).toString(encoding_2);
  }
  let lineEndings = xbt(c.slice(0, 4096));
  return {
    content: c.replaceAll(`\r
`, `
`),
    encoding: encoding_2,
    lineEndings: lineEndings
  };
}
function g$(n, e, r) {
  return Ijo(n, e, r).content;
}
async function _y(n, e) {
  let r = se(),
    {
      resolvedPath: resolvedPath_2,
      isSymlink: isSymlink_2
    } = _o(r, n);
  if (isSymlink_2) t(`Reading through symlink: ${n} -> ${resolvedPath_2}`);
  aDe(await r.stat(n), n, e);
  await using s = await E(n, Vhe());
  return await RTe(s, n, e);
}
async function RTe(n, e, r) {
  aDe(await n.stat(), e, r);
  let i = r === void 0 ? await n.readFile() : await J2(n, r + 1, "file");
  PBr(i.length, e, r);
  let {
      encoding: encoding_3,
      notText: notText
    } = Abt(i),
    u = i.toString(encoding_3),
    lineEndings_2 = xbt(u.slice(0, 4096));
  return {
    content: u.replaceAll(`\r
`, `
`),
    encoding: encoding_3,
    lineEndings: lineEndings_2,
    ...(notText && {
      notText: notText
    })
  };
}
export { aDe, CYs, PBr, hQ, WW, hde, Pjo, Abt, OBr, Hne, Ojo, xbt, Ijo, g$, _y, RTe };