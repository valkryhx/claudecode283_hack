// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  z,
  $n,
  Ja
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  f0,
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ll,
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  $Br
} from "B:/~BUN/root/chunk-j704adqd.js";
import {
  a0
} from "B:/~BUN/root/chunk-eya7pdzx.js";
import {
  homedir as u
} from "os";
import {
  dirname as f,
  extname as w,
  isAbsolute as d,
  join as A,
  normalize as c,
  parse as S,
  posix as p,
  relative as v,
  resolve as _,
  sep as m,
  win32 as y
} from "path";
import * as s from "path/win32";
class h {
  shellConfig = null;
  powerShellProvider = null;
  powerShellPluginBinPaths = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  organizationsPowerShellPath = null;
  gitBashPath = void 0;
  windowsShellLauncherUsable = null;
  warnedShortTmpDir = !1
}
var b = new z(() => new h);

function ETe() {
  return b.of(j().host)
}

function yXn() {
  if (I() === "windows") {
    let e = gQ();
    if (e) process.env.SHELL = e, t(`Using bash path: "${e}"`);
    else t("Git Bash not found; BashTool will be unavailable")
  }
}

function gQ() {
  let e = ETe();
  if (e.gitBashPath === void 0) e.gitBashPath = x();
  return e.gitBashPath
}

function x() {
  let {
    existsSync: e
  } = se();
  if (a.CLAUDE_CODE_GIT_BASH_PATH) {
    let i = s.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      o = ["bash.exe", "sh.exe", "bash", "sh"].includes(i);
    if (o && e(a.CLAUDE_CODE_GIT_BASH_PATH)) return a.CLAUDE_CODE_GIT_BASH_PATH;
    t(`CLAUDE_CODE_GIT_BASH_PATH "${a.CLAUDE_CODE_GIT_BASH_PATH}" ${o?"not found":"is not a bash/sh binary"}; falling back to auto-detection`, {
      level: "warn"
    })
  }
  let r = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (let i of r)
    if (e(i)) return i;
  let n = $Br("git");
  if (n) {
    let i = s.join(n, "..", "..", "bin", "bash.exe");
    if (e(i)) return i
  }
  return null
}

function _Xn(e, r) {
  if (!s.isAbsolute(r)) return;
  let n = s.dirname(r),
    i = Object.keys(e).find((l) => l.toUpperCase() === "PATH") ?? "PATH",
    o = e[i];
  e[i] = o ? n + s.delimiter + o : n
}

function bXn(e) {
  let r = e.trim(),
    n = "",
    i = 0;
  while (i < r.length) {
    let o = r[i];
    if (o === '"' || o === "'") {
      let l = r.indexOf(o, i + 1);
      if (l === -1) {
        n += r.slice(i + 1), i = r.length;
        break
      }
      n += r.slice(i + 1, l), i = l + 1
    } else if (o === "\\" && i + 1 < r.length) n += r[i + 1], i += 2;
    else if (/\s/.test(o)) break;
    else n += o, i++
  }
  return n.endsWith(".sh") ? `bash ${e}` : e
}
var o0 = a0((e) => {
    if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
    let r = e.match(/^([A-Za-z]):[/\\]/);
    if (r) return "/" + r[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
    return e.replaceAll("\\", "/")
  }, (e) => e, 500),
  Lne = a0((e) => {
    if (e.startsWith("//")) return e.replaceAll("/", "\\");
    let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
    if (r) {
      let i = r[1].toUpperCase(),
        o = e.slice(("/cygdrive/" + r[1]).length);
      return i + ":" + (o || "\\").replaceAll("/", "\\")
    }
    let n = e.match(/^\/([A-Za-z])(\/|$)/);
    if (n) {
      let i = n[1].toUpperCase(),
        o = e.slice(2);
      return i + ":" + (o || "\\").replaceAll("/", "\\")
    }
    return e.replaceAll("/", "\\")
  }, (e) => e, 500);
class Nne extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError"
  }
}

function umn(e) {
  if (e.includes("\x00")) throw new Nne
}

function it(e, r) {
  let n = P(e, r ?? Ll());
  if (n === null) throw new f0;
  return n
}

function P(e, r) {
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (r !== null && typeof r !== "string") throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if (umn(e), r !== null) umn(r);
  let n = e.trim();
  if (!n) return r === null ? null : $n(c(r));
  if (n === "~") return $n(u());
  if (n.startsWith("~/")) return $n(A(u(), n.slice(2)));
  let i = n;
  if (I() === "windows" && n.match(/^\/[a-z]\//i)) try {
    i = Lne(n)
  } catch {
    i = n
  }
  if (d(i)) return $n(c(i));
  return r === null ? null : $n(_(r, i))
}
class lGe extends Error {
  constructor() {
    super('Path ends in white space once its "." and ".." are resolved');
    this.name = "UnstablePathError"
  }
}

function Iw(e, r) {
  let n = it(e, r);
  if (it(n, r) !== n) throw new lGe;
  return n
}

function Dai(e) {
  return d(e) && (m === p.sep || S(e).root.length > 1)
}

function uk(e, r) {
  try {
    return P(e, r ?? Ll())
  } catch {
    return null
  }
}

function K1t(e) {
  let r = v(ce(), e);
  return r.startsWith("..") ? e : r
}

function L4(e) {
  let r = it(e);
  if (Ja(r)) return f(r);
  try {
    if (se().statSync(r).isDirectory()) return r
  } catch {}
  return f(r)
}

function lL(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e)
}

function Es(e) {
  let r = u();
  if (e === r) return "~";
  if (e.startsWith(r + m)) return "~" + e.slice(r.length);
  return e
}

function j2(e) {
  let r = c(e);
  if (I() === "windows") return r.replaceAll("\\", "/");
  return r
}

function AA(e) {
  return w(e).toLowerCase() === ".ipynb"
}

function kBr(e, r = "win32") {
  if ((r === "win32" ? y.isAbsolute : p.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || r === "win32" && e.startsWith("~\\")) return g(u(), e.slice(2), r);
  if (r === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return g(ce(), e, r)
}

function g(e, r, n) {
  if (r === "") return e;
  if (n === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + r;
  return e + (n === "win32" ? "\\" : "/") + r
}
export {
  ETe,
  yXn,
  gQ,
  _Xn,
  bXn,
  o0,
  Lne,
  Nne,
  umn,
  it,
  lGe,
  Iw,
  Dai,
  uk,
  K1t,
  L4,
  lL,
  Es,
  j2,
  AA,
  kBr
};
