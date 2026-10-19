// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  C$
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  lstat as p,
  readdir as N,
  readlink as x,
  realpath as w,
  rmdir as P,
  unlink as F
} from "fs/promises";
import {
  basename as b,
  dirname as m,
  isAbsolute as T,
  join as h,
  normalize as g,
  sep as z
} from "path";

function pp(n) {
  return n.toLowerCase().replace(/\u0131/g, "i").replace(/\u017F/g, "s")
}

function BOr(n) {
  let e = "";
  for (let o of n) e += o.toLowerCase();
  return pp(e).replace(/\u03C2/g, "\u03C3")
}

function jOr(n) {
  let e = I();
  return e === "windows" || e === "macos" ? pp(n) : n
}

function UFs(n, e) {
  let o = null,
    s = 0,
    r = [];
  for (let a of n.split("\x00\x00")) {
    let u = a.split("\x00"),
      c = u.find((C) => C.startsWith("worktree "));
    if (c === void 0) continue;
    let f = c.slice(9);
    if (!XNt(f)) return null;
    let y = g(f);
    if (r.push(DX(y)), u.includes(`branch refs/heads/${e}`)) s++, o ??= y
  }
  if (o === null || s !== 1) return null;
  let l = DX(o),
    i = 0;
  for (let a of r)
    if (a === l) i++;
  return i === 1 ? o : null
}

function WOr(n) {
  return I() === "windows" ? n.replaceAll("\\", "/") : n
}

function Pd(n) {
  let e = n.replace(I() === "windows" ? /[\\/]+$/ : /\/+$/, "");
  return e === "" ? n : e
}

function DX(n) {
  let e = Pd(n);
  return jOr(I() === "macos" ? e.normalize("NFC") : e)
}

function umt(n, e) {
  let o = d(n);
  return e.some((s) => d(g(s)) === o)
}

function Xsn(n, e) {
  let o = DX(n);
  return e.find((s) => DX(g(s)) === o) ?? null
}

function d(n) {
  let e = Pd(n);
  return I() === "macos" ? e.normalize("NFC") : e
}
var E = /\p{Cc}/u;

function XNt(n) {
  if (E.test(n) || !T(n) || C$(n)) return !1;
  return I() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n)
}

function YAo(n) {
  let e = new Set;
  for (let o of n.split("\x00\x00")) {
    let s = o.split("\x00").find((a) => a.startsWith("worktree "));
    if (s === void 0) continue;
    let r = s.slice(9);
    if (!XNt(r)) return !1;
    let l = g(r),
      i = Pd(I() === "macos" ? l.normalize("NFC") : l);
    if (e.has(i)) return !1;
    e.add(i)
  }
  return !0
}

function zOr(n, e) {
  if (!YAo(n)) return null;
  let o = (r, l) => I() === "macos" ? r.normalize("NFC") === l.normalize("NFC") : r === l,
    s = null;
  for (let r of n.split("\x00\x00")) {
    let l = r.split("\x00").find((a) => a.startsWith("worktree "));
    if (l === void 0) continue;
    let i = g(l.slice(9));
    if (s === null && e.some((a) => o(Pd(i), Pd(g(a))))) s = i
  }
  return s
}
async function PH(n, e) {
  return (await XAo(n, e)).verdict
}
async function XAo(n, e) {
  let o = [];
  for (let l = Pd(n); m(l) !== l && l !== e; l = m(l)) o.push(l);
  if (o.length === 0) return {
    verdict: "unknown"
  };
  let s = I() === "windows",
    r = null;
  for (let l of o.reverse()) {
    let i = Pd(l),
      a = await x(i).then(() => "link", (u) => {
        let c = k(u);
        return c === "EINVAL" ? "clear" : c === "ENOENT" || c === "ENOTDIR" ? "missing" : "unknown"
      });
    if (a === "clear") {
      if (s) {
        let u = await p(i).catch(() => null);
        if (u === null || !u.isDirectory()) return {
          verdict: "unknown",
          at: i
        };
        let c = r ?? await w(m(i)).catch(() => null),
          f = await w(i).catch(() => null);
        if (c === null || f === null || BOr(Pd(f)) !== BOr(h(Pd(c), b(i)))) return {
          verdict: "unknown",
          at: i
        };
        r = f
      }
      continue
    }
    if (a === "missing" && !await JAo(i)) return {
      verdict: "unknown",
      at: i
    };
    return {
      verdict: a,
      at: i
    }
  }
  return {
    verdict: "clear"
  }
}
async function JAo(n) {
  if (I() !== "windows") return !0;
  return p(`${n}.lnk`).then(() => !1, (e) => G(e))
}
async function fqn(n, e) {
  return await PH(n, e) === "clear"
}
async function Jsn(n, e, o) {
  if (!await fqn(n, o)) return !1;
  let s = await w(n).catch(() => null);
  if (s === null || d(s) !== d(e)) return !1;
  let r = await p(Pd(n)).catch(() => null);
  if (r === null || !r.isDirectory()) return !1;
  return G1e(n)
}
async function G1e(n) {
  if (I() !== "windows") return !0;
  let e = await w(m(n)).catch(() => null);
  return !await v(n, e == null ? null : pp(h(e, b(n))))
}
async function v(n, e) {
  try {
    return await F(n), t(`[worktree] unlinked reparse point before removal: ${n}`), !1
  } catch {}
  try {
    return await P(n), t(`[worktree] removed reparse point or empty directory before removal: ${n}`), !1
  } catch (r) {
    if (G(r)) return !1;
    if (k(r) !== "ENOTEMPTY") {
      let i = await x(n).then(() => "link", (a) => k(a) === "EINVAL" || G(a) ? "not-link" : "unknown") !== "not-link" || e == null ? null : await w(n).then((a) => pp(a)).catch(() => null);
      if (i == null || i !== e && !i.startsWith(e + z)) return t(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, {
        level: "warn"
      }), !0
    }
  }
  let o = await N(n, {
    withFileTypes: !0
  }).catch((r) => G(r) ? [] : null);
  if (o == null) return t(`[worktree] could not enumerate ${n} before removal; not certifying`, {
    level: "warn"
  }), !0;
  let s = !1;
  for (let r of o)
    if (r.isSymbolicLink() || r.isDirectory()) s = await v(h(n, r.name), e) || s;
  return s
}
export {
  pp,
  BOr,
  jOr,
  UFs,
  WOr,
  Pd,
  DX,
  umt,
  Xsn,
  XNt,
  YAo,
  zOr,
  PH,
  XAo,
  JAo,
  fqn,
  Jsn,
  G1e
};
