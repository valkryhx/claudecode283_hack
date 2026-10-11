// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { hxe, jo, ce, ymt, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { open as l } from "fs/promises";
function u(n, e, i) {
  Sft(n.statSync(e), e, i);
}
function Sft(n, path, maxBytes) {
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
function FFo(n, path_2) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), {
    code: "ERR_MULTIPLE_LINKS",
    path: path_2
  });
}
function dYn(size, path_3, maxBytes_2) {
  if (maxBytes_2 === void 0) return;
  if (size > maxBytes_2) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: path_3,
    size: size,
    maxBytes: maxBytes_2
  });
}
function Fne(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function h2(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function Pgn(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le";
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8";
}
function r_e(n) {
  let e = Pgn(n.subarray(0, 4096));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function Wjr(n) {
  let {
    buffer: buffer,
    bytesRead: bytesRead
  } = ce().readSync(n, {
    length: 4096
  });
  return Pgn(buffer.subarray(0, bytesRead));
}
function Ign(n) {
  let e = 0,
    i = 0;
  for (let r = 0; r < n.length; r++) if (n[r] === `
`) if (r > 0 && n[r - 1] === "\r") e++;else i++;
  return e > i ? "CRLF" : "LF";
}
function zjr(n, e) {
  let i = ce(),
    {
      resolvedPath: resolvedPath,
      isSymlink: isSymlink
    } = jo(i, n);
  if (isSymlink) t(`Reading through symlink: ${n} -> ${resolvedPath}`);
  u(i, n, e);
  let encoding = Wjr(n),
    c;
  if (e === void 0) c = i.readFileSync(n, {
    encoding: encoding
  });else {
    let {
      buffer: buffer_2,
      bytesRead: bytesRead_2
    } = i.readSync(n, {
      length: e + 1
    });
    dYn(bytesRead_2, n, e), c = buffer_2.subarray(0, bytesRead_2).toString(encoding);
  }
  let lineEndings = Ign(c.slice(0, 4096));
  return {
    content: c.replaceAll(`\r
`, `
`),
    encoding: encoding,
    lineEndings: lineEndings
  };
}
function tj(n, e) {
  return zjr(n, e).content;
}
async function ug(n, e) {
  let i = ce(),
    {
      resolvedPath: resolvedPath_2,
      isSymlink: isSymlink_2
    } = jo(i, n);
  if (isSymlink_2) t(`Reading through symlink: ${n} -> ${resolvedPath_2}`);
  Sft(await i.stat(n), n, e);
  await using o = await l(n, hxe());
  return await ude(o, n, e);
}
async function ude(n, e, i) {
  Sft(await n.stat(), e, i);
  let r = i === void 0 ? await n.readFile() : await ymt(n, i + 1, "file");
  dYn(r.length, e, i);
  let encoding_2 = Pgn(r.subarray(0, 4096)),
    o = r.toString(encoding_2),
    lineEndings_2 = Ign(o.slice(0, 4096));
  return {
    content: o.replaceAll(`\r
`, `
`),
    encoding: encoding_2,
    lineEndings: lineEndings_2
  };
}
export { Sft, FFo, dYn, Fne, h2, Pgn, r_e, Wjr, Ign, zjr, tj, ug, ude };