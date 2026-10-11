// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { xn, Nd } from "B:/~BUN/root/chunk-54p0h65d.js";
import { q, IC, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { pg, oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { w5n } from "B:/~BUN/root/chunk-e7p62566.js";
import { zI } from "B:/~BUN/root/chunk-tndjj29v.js";
import { homedir as c } from "os";
import { dirname as h, extname as d, isAbsolute as P, join as b, normalize as u, posix as A, relative as w, resolve as v, sep as S, win32 as x } from "path";
import * as s from "path/win32";
class f {
  shellConfig = null;
  powerShellProvider = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  gitBashPath = void 0;
  windowsShellLauncherUsable = null;
  warnedShortTmpDir = !1;
}
var g = new q(() => new f());
function wAe() {
  return g.of(j().host);
}
function mmn() {
  if (O() === "windows") {
    let e = Vq();
    if (e) process.env.SHELL = e, t(`Using bash path: "${e}"`);else t("Git Bash not found; BashTool will be unavailable");
  }
}
function Vq() {
  let e = wAe();
  if (e.gitBashPath === void 0) e.gitBashPath = p();
  return e.gitBashPath;
}
function p() {
  let {
    existsSync: existsSync
  } = ce();
  if (a.CLAUDE_CODE_GIT_BASH_PATH) {
    let n = s.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      o = ["bash.exe", "sh.exe", "bash", "sh"].includes(n);
    if (o && existsSync(a.CLAUDE_CODE_GIT_BASH_PATH)) return a.CLAUDE_CODE_GIT_BASH_PATH;
    t(`CLAUDE_CODE_GIT_BASH_PATH "${a.CLAUDE_CODE_GIT_BASH_PATH}" ${o ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`, {
      level: "warn"
    });
  }
  let r = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (let n of r) if (existsSync(n)) return n;
  let i = w5n("git");
  if (i) {
    let n = s.join(i, "..", "..", "bin", "bash.exe");
    if (existsSync(n)) return n;
  }
  return null;
}
function gmn(e, r) {
  if (!s.isAbsolute(r)) return;
  let i = s.dirname(r),
    n = Object.keys(e).find(item => item.toUpperCase() === "PATH") ?? "PATH",
    o = e[n];
  e[n] = o ? i + s.delimiter + o : i;
}
function hmn(e) {
  let r = e.trim(),
    i = "",
    n = 0;
  while (n < r.length) {
    let o = r[n];
    if (o === '"' || o === "'") {
      let l = r.indexOf(o, n + 1);
      if (l === -1) {
        i += r.slice(n + 1), n = r.length;
        break;
      }
      i += r.slice(n + 1, l), n = l + 1;
    } else if (o === "\\" && n + 1 < r.length) i += r[n + 1], n += 2;else if (/\s/.test(o)) break;else i += o, n++;
  }
  return i.endsWith(".sh") ? `bash ${e}` : e;
}
var VR = zI(e => {
    if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
    let r = e.match(/^([A-Za-z]):[/\\]/);
    if (r) return "/" + r[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
    return e.replaceAll("\\", "/");
  }, e => e, 500),
  nde = zI(e => {
    if (e.startsWith("//")) return e.replaceAll("/", "\\");
    let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
    if (r) {
      let n = r[1].toUpperCase(),
        o = e.slice(("/cygdrive/" + r[1]).length);
      return n + ":" + (o || "\\").replaceAll("/", "\\");
    }
    let i = e.match(/^\/([A-Za-z])(\/|$)/);
    if (i) {
      let n = i[1].toUpperCase(),
        o = e.slice(2);
      return n + ":" + (o || "\\").replaceAll("/", "\\");
    }
    return e.replaceAll("/", "\\");
  }, e => e, 500);
class NullBytePathError extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError";
  }
}
function sUt(e) {
  if (e.includes("\x00")) throw new NullBytePathError();
}
function Ye(e, r) {
  let i = r ?? pg();
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (i !== null && typeof i !== "string") throw TypeError(`Base directory must be a string, received ${typeof i}`);
  if (sUt(e), i !== null) sUt(i);
  let n = e.trim();
  if (!n) {
    if (i === null) throw new IC();
    return xn(u(i));
  }
  if (n === "~") return xn(c());
  if (n.startsWith("~/")) return xn(b(c(), n.slice(2)));
  let o = n;
  if (O() === "windows" && n.match(/^\/[a-z]\//i)) try {
    o = nde(n);
  } catch {
    o = n;
  }
  if (P(o)) return xn(u(o));
  if (i === null) throw new IC();
  return xn(v(i, o));
}
function V$e(e, r) {
  try {
    return Ye(e, r);
  } catch {
    return null;
  }
}
function Upt(e) {
  let r = w(oe(), e);
  return r.startsWith("..") ? e : r;
}
function W1(e) {
  let r = Ye(e);
  if (Nd(r)) return h(r);
  try {
    if (ce().statSync(r).isDirectory()) return r;
  } catch {}
  return h(r);
}
function z1(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function xa(e) {
  let r = c();
  if (e === r) return "~";
  if (e.startsWith(r + S)) return "~" + e.slice(r.length);
  return e;
}
function h$(e) {
  let r = u(e);
  if (O() === "windows") return r.replaceAll("\\", "/");
  return r;
}
function y$(e) {
  return d(e).toLowerCase() === ".ipynb";
}
function Q3n(e, r = "win32") {
  if ((r === "win32" ? x.isAbsolute : A.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || r === "win32" && e.startsWith("~\\")) return m(c(), e.slice(2), r);
  if (r === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return m(oe(), e, r);
}
function m(e, r, i) {
  if (r === "") return e;
  if (i === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + r;
  return e + (i === "win32" ? "\\" : "/") + r;
}
export { wAe, mmn, Vq, gmn, hmn, VR, nde, NullBytePathError as rde, sUt, Ye, V$e, Upt, W1, z1, xa, h$, y$, Q3n };