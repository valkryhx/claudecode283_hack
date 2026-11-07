// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Zjs,
  t,
  xae,
  io,
  ie,
  h0
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  isUtf8 as l
} from "buffer";
import {
  open as p
} from "fs/promises";

function d(n, e) {
  if (!Zjs()) return;
  let {
    resolvedPath: r,
    isSymlink: i
  } = io(n, e);
  if (i) t(`Reading through symlink: ${e} -> ${r}`)
}

function F(n, e, r) {
  let i = n.statSync(e);
  return Uqe(i, e, r), i
}

function Uqe(n, e, r) {
  if (n.isDirectory()) throw Object.assign(Error("EISDIR: illegal operation on a directory, read"), {
    code: "EISDIR",
    errno: -21,
    syscall: "read",
    path: e
  });
  if (!n.isFile()) throw Object.assign(Error("Not a regular file (device, FIFO, or socket)"), {
    code: "ERR_NOT_REGULAR_FILE",
    path: e
  });
  if (r !== void 0 && n.size > r) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: e,
    size: n.size,
    maxBytes: r
  })
}

function Cna(n, e) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), {
    code: "ERR_MULTIPLE_LINKS",
    path: e
  })
}

function SPo(n, e, r) {
  if (r === void 0) return;
  if (n > r) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: e,
    size: n,
    maxBytes: r
  })
}

function lme(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE"
}

function cG(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE"
}

function Ewe(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le"
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8"
}
var c = 4096,
  E = 8000;

function $1s(n) {
  return n.subarray(0, E).includes(0)
}

function cjt(n) {
  let e = Ewe(n.subarray(0, c));
  if (e !== "utf8") return {
    encoding: e
  };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return {
    encoding: e,
    notText: "utf16be"
  };
  if ($1s(n)) return {
    encoding: e,
    notText: "nul"
  };
  return l(n) ? {
    encoding: e
  } : {
    encoding: e,
    notText: "not_utf8"
  }
}

function WFr(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e
}

function _j(n) {
  let e = Ewe(n.subarray(0, c));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`)
}

function U1s(n) {
  let {
    buffer: e,
    bytesRead: r
  } = ie().readSync(n, {
    length: c
  });
  return Ewe(e.subarray(0, r))
}

function ujt(n) {
  let e = 0,
    r = 0;
  for (let i = 0; i < n.length; i++)
    if (n[i] === `
`)
      if (i > 0 && n[i - 1] === "\r") e++;
      else r++;
  return e > r ? "CRLF" : "LF"
}

function B1s(n, e, r) {
  let i = ie();
  d(i, n);
  let a = F(i, n, e);
  r?.(a);
  let s = U1s(n),
    o;
  if (e === void 0) o = i.readFileSync(n, {
    encoding: s
  });
  else {
    let {
      buffer: g,
      bytesRead: f
    } = i.readSync(n, {
      length: e + 1
    });
    SPo(f, n, e), o = g.subarray(0, f).toString(s)
  }
  let u = ujt(o.slice(0, 4096));
  return {
    content: o.replaceAll(`\r
`, `
`),
    encoding: s,
    lineEndings: u
  }
}

function PH(n, e, r) {
  return B1s(n, e, r).content
}
async function mS(n, e) {
  let r = ie();
  d(r, n), Uqe(await r.stat(n), n, e);
  await using i = await p(n, xae());
  return await t$e(i, n, e)
}
async function t$e(n, e, r) {
  Uqe(await n.stat(), e, r);
  let i = r === void 0 ? await n.readFile() : await h0(n, r + 1, "file");
  SPo(i.length, e, r);
  let {
    encoding: a,
    notText: s
  } = cjt(i), o = i.toString(a), u = ujt(o.slice(0, 4096));
  return {
    content: o.replaceAll(`\r
`, `
`),
    encoding: a,
    lineEndings: u,
    ...s && {
      notText: s
    }
  }
}
export {
  Uqe,
  Cna,
  SPo,
  lme,
  cG,
  Ewe,
  $1s,
  cjt,
  WFr,
  _j,
  U1s,
  ujt,
  B1s,
  PH,
  mS,
  t$e
};
