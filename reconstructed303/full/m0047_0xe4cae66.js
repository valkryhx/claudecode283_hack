// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vhe,
  _o,
  se,
  J2,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  isUtf8 as p
} from "buffer";
import {
  open as E
} from "fs/promises";

function F(n, e, r) {
  let i = n.statSync(e);
  return aDe(i, e, r), i
}

function aDe(n, e, r) {
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

function CYs(n, e) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), {
    code: "ERR_MULTIPLE_LINKS",
    path: e
  })
}

function PBr(n, e, r) {
  if (r === void 0) return;
  if (n > r) throw Object.assign(Error("File exceeds maxBytes limit"), {
    code: "ERR_FILE_TOO_LARGE",
    path: e,
    size: n,
    maxBytes: r
  })
}

function hQ(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE"
}

function WW(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE"
}

function hde(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le"
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8"
}
var f = 4096,
  b = 8000;

function Pjo(n) {
  return n.subarray(0, b).includes(0)
}

function Abt(n) {
  let e = hde(n.subarray(0, f));
  if (e !== "utf8") return {
    encoding: e
  };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return {
    encoding: e,
    notText: "utf16be"
  };
  if (Pjo(n)) return {
    encoding: e,
    notText: "nul"
  };
  return p(n) ? {
    encoding: e
  } : {
    encoding: e,
    notText: "not_utf8"
  }
}

function OBr(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e
}

function Hne(n) {
  let e = hde(n.subarray(0, f));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`)
}

function Ojo(n) {
  let {
    buffer: e,
    bytesRead: r
  } = se().readSync(n, {
    length: f
  });
  return hde(e.subarray(0, r))
}

function xbt(n) {
  let e = 0,
    r = 0;
  for (let i = 0; i < n.length; i++)
    if (n[i] === `
`)
      if (i > 0 && n[i - 1] === "\r") e++;
      else r++;
  return e > r ? "CRLF" : "LF"
}

function Ijo(n, e, r) {
  let i = se(),
    {
      resolvedPath: o,
      isSymlink: s
    } = _o(i, n);
  if (s) t(`Reading through symlink: ${n} -> ${o}`);
  let u = F(i, n, e);
  r?.(u);
  let a = Ojo(n),
    c;
  if (e === void 0) c = i.readFileSync(n, {
    encoding: a
  });
  else {
    let {
      buffer: g,
      bytesRead: d
    } = i.readSync(n, {
      length: e + 1
    });
    PBr(d, n, e), c = g.subarray(0, d).toString(a)
  }
  let l = xbt(c.slice(0, 4096));
  return {
    content: c.replaceAll(`\r
`, `
`),
    encoding: a,
    lineEndings: l
  }
}

function g$(n, e, r) {
  return Ijo(n, e, r).content
}
async function _y(n, e) {
  let r = se(),
    {
      resolvedPath: i,
      isSymlink: o
    } = _o(r, n);
  if (o) t(`Reading through symlink: ${n} -> ${i}`);
  aDe(await r.stat(n), n, e);
  await using s = await E(n, Vhe());
  return await RTe(s, n, e)
}
async function RTe(n, e, r) {
  aDe(await n.stat(), e, r);
  let i = r === void 0 ? await n.readFile() : await J2(n, r + 1, "file");
  PBr(i.length, e, r);
  let {
    encoding: o,
    notText: s
  } = Abt(i), u = i.toString(o), a = xbt(u.slice(0, 4096));
  return {
    content: u.replaceAll(`\r
`, `
`),
    encoding: o,
    lineEndings: a,
    ...s && {
      notText: s
    }
  }
}
export {
  aDe,
  CYs,
  PBr,
  hQ,
  WW,
  hde,
  Pjo,
  Abt,
  OBr,
  Hne,
  Ojo,
  xbt,
  Ijo,
  g$,
  _y,
  RTe
};
