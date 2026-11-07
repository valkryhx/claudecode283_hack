// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  En,
  Sl
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  YA,
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  ol,
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  t,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  RPo
} from "B:/~BUN/root/chunk-83p1z1q5.js";
import {
  uG
} from "B:/~BUN/root/chunk-4hj5k2m3.js";
import {
  homedir as u
} from "os";
import {
  dirname as f,
  extname as w,
  isAbsolute as g,
  join as v,
  normalize as h,
  parse as A,
  posix as p,
  relative as _,
  resolve as y,
  sep as m,
  win32 as E
} from "path";
import * as l from "path/win32";
class c {
  shellConfig = null;
  bashToolShellPath = null;
  resolvedBashToolShellPath = void 0;
  powerShellProvider = null;
  powerShellPluginBinPaths = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  organizationsPowerShellPath = null;
  gitBashPath = void 0;
  windowsShellLauncherUsable = null;
  warnedShortTmpDir = !1
}
var b = new W(() => new c);

function Sae() {
  return b.of(H().host)
}

function FFr() {
  return Sae().resolvedBashToolShellPath
}

function HFr() {
  if (x() === "windows") {
    let e = wae();
    if (e) process.env.SHELL = e, t(`Using bash path: "${e}"`);
    else t("Git Bash not found; BashTool will be unavailable")
  }
}

function wae() {
  let e = Sae();
  if (e.gitBashPath === void 0) e.gitBashPath = S();
  return e.gitBashPath
}

function S() {
  let {
    existsSync: e
  } = ie();
  if (i.CLAUDE_CODE_GIT_BASH_PATH) {
    let o = l.basename(i.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      s = ["bash.exe", "sh.exe", "bash", "sh"].includes(o);
    if (s && e(i.CLAUDE_CODE_GIT_BASH_PATH)) return i.CLAUDE_CODE_GIT_BASH_PATH;
    t(`CLAUDE_CODE_GIT_BASH_PATH "${i.CLAUDE_CODE_GIT_BASH_PATH}" ${s?"not found":"is not a bash/sh binary"}; falling back to auto-detection`, {
      level: "warn"
    })
  }
  let r = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (let o of r)
    if (e(o)) return o;
  let n = RPo("git");
  if (n) {
    let o = l.join(n, "..", "..", "bin", "bash.exe");
    if (e(o)) return o
  }
  return null
}

function $Fr(e, r) {
  if (!l.isAbsolute(r)) return;
  let n = l.dirname(r),
    o = Object.keys(e).find((a) => a.toUpperCase() === "PATH") ?? "PATH",
    s = e[o];
  e[o] = s ? n + l.delimiter + s : n
}

function UFr(e) {
  let r = e.trim(),
    n = "",
    o = 0;
  while (o < r.length) {
    let s = r[o];
    if (s === '"' || s === "'") {
      let a = r.indexOf(s, o + 1);
      if (a === -1) {
        n += r.slice(o + 1);
        break
      }
      n += r.slice(o + 1, a), o = a + 1
    } else if (s === "\\" && o + 1 < r.length) n += r[o + 1], o += 2;
    else if (/\s/.test(s)) break;
    else n += s, o++
  }
  return n.endsWith(".sh") ? `bash ${e}` : e
}
var xH = uG((e) => {
    if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
    let r = e.match(/^([A-Za-z]):[/\\]/);
    if (r) return "/" + r[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
    return e.replaceAll("\\", "/")
  }, (e) => e, 500),
  s7 = uG((e) => {
    if (e.startsWith("//")) return e.replaceAll("/", "\\");
    let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
    if (r) {
      let o = r[1].toUpperCase(),
        s = e.slice(("/cygdrive/" + r[1]).length);
      return o + ":" + (s || "\\").replaceAll("/", "\\")
    }
    let n = e.match(/^\/([A-Za-z])(\/|$)/);
    if (n) {
      let o = n[1].toUpperCase(),
        s = e.slice(2);
      return o + ":" + (s || "\\").replaceAll("/", "\\")
    }
    return e.replaceAll("/", "\\")
  }, (e) => e, 500);
class qte extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError"
  }
}

function Q2n(e) {
  if (e.includes("\x00")) throw new qte
}

function mt(e, r) {
  let n = P(e, r ?? ol());
  if (n === null) throw new YA;
  return n
}

function P(e, r) {
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (r !== null && typeof r !== "string") throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if (Q2n(e), r !== null) Q2n(r);
  let n = e.trim();
  if (!n) return r === null ? null : En(h(r));
  if (n === "~") return En(u());
  if (n.startsWith("~/")) return En(v(u(), n.slice(2)));
  let o = n;
  if (x() === "windows" && n.match(/^\/[a-z]\//i)) try {
    o = s7(n)
  } catch {
    o = n
  }
  if (g(o)) return En(h(o));
  return r === null ? null : En(y(r, o))
}
class ime extends Error {
  constructor() {
    super('Path ends in white space once its "." and ".." are resolved');
    this.name = "UnstablePathError"
  }
}

function O_(e, r) {
  let n = mt(e, r);
  if (mt(n, r) !== n) throw new ime;
  return n
}

function ame(e) {
  return g(e) && (m === p.sep || A(e).root.length > 1)
}

function Ac(e, r) {
  try {
    return P(e, r ?? ol())
  } catch {
    return null
  }
}

function Wdn(e) {
  let r = _(pe(), e);
  return r.startsWith("..") ? e : r
}

function i7(e) {
  let r = mt(e);
  if (Sl(r)) return f(r);
  try {
    if (ie().statSync(r).isDirectory()) return r
  } catch {}
  return f(r)
}

function bN(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e)
}

function ks(e) {
  let r = u();
  if (e === r) return "~";
  if (e.startsWith(r + m)) return "~" + e.slice(r.length);
  return e
}

function k5(e) {
  let r = h(e);
  if (x() === "windows") return r.replaceAll("\\", "/");
  return r
}

function wM(e) {
  return w(e).toLowerCase() === ".ipynb"
}

function hPo(e, r = "win32") {
  if ((r === "win32" ? E.isAbsolute : p.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || r === "win32" && e.startsWith("~\\")) return d(u(), e.slice(2), r);
  if (r === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return d(pe(), e, r)
}

function d(e, r, n) {
  if (r === "") return e;
  if (n === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + r;
  return e + (n === "win32" ? "\\" : "/") + r
}
export {
  Sae,
  FFr,
  HFr,
  wae,
  $Fr,
  UFr,
  xH,
  s7,
  qte,
  Q2n,
  mt,
  ime,
  O_,
  ame,
  Ac,
  Wdn,
  i7,
  bN,
  ks,
  k5,
  wM,
  hPo
};
