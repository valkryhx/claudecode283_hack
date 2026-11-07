// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q4
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  hg,
  _Lt
} from "B:/~BUN/root/chunk-2htsebsg.js";
import {
  e3,
  gmt,
  FLn
} from "B:/~BUN/root/chunk-7vfy9z2g.js";
import {
  t,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  pS,
  _N
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  Ct
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  Mu
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  vze
} from "B:/~BUN/root/chunk-zz0hj0zg.js";
import {
  Cpt
} from "B:/~BUN/root/chunk-ea8gze25.js";
import {
  no
} from "B:/~BUN/root/chunk-qszgzq5m.js";
import {
  randomBytes as W
} from "crypto";
import {
  basename as v,
  dirname as E,
  isAbsolute as _,
  join as w
} from "path";
var hQ = 800,
  h = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"]
  };

function B() {
  let n = Mu(),
    o = "claude_cli_latest_screenshot.png",
    l = {
      darwin: w(n, "claude_cli_latest_screenshot.png"),
      linux: w(n, "claude_cli_latest_screenshot.png"),
      win32: w(n, "claude_cli_latest_screenshot.png")
    },
    s = l.win32 || l.linux,
    r = no([s]),
    f = `set fp to open for access POSIX file ${`"${s.replace(/\\/g,"\\\\").replace(/"/g,"\\\"")}"`} with write permission`,
    c = vze(s, "the screenshot temp path (override with CLAUDE_CODE_TMPDIR)"),
    u = !1,
    d = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    F = "",
    T = "",
    y = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${no([f])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: h.darwin,
        deleteFile: `rm -f -- ${r}`
      },
      linux: {
        checkImage: 'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"',
        saveImage: `xclip -selection clipboard -t image/png -o > ${r} 2>/dev/null || wl-paste --type image/png > ${r} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${r} 2>/dev/null || wl-paste --type image/bmp > ${r}`,
        getPath: h.linux,
        deleteFile: `rm -f -- ${r}`
      },
      win32: {
        checkImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"],
        saveImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", `Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(${c}, [System.Drawing.Imaging.ImageFormat]::Png)`],
        getPath: h.win32,
        deleteFile: ["powershell", "-NoProfile", "-Command", `Remove-Item -Force -LiteralPath ${c}`]
      }
    };
  return {
    commands: y.win32 || y.linux,
    screenshotPath: s
  }
}
async function b(e) {
  if (typeof e === "string") return _N(e, {
    reject: !1
  });
  let [n, ...o] = e;
  return pS(n, o, {
    reject: !1
  })
}
async function _ci() {
  return !1
}
async function Qke(e) {
  let n;
  try {
    n = B()
  } catch (s) {
    return a(s), m("clipboard_read", "construct_failed"), null
  }
  let {
    commands: o,
    screenshotPath: l
  } = n;
  try {
    if ((await b(o.checkImage)).exitCode !== 0) return null;
    if (await ie().mkdir(E(l), {
        mode: 448
      }), (await b(o.saveImage)).exitCode !== 0) return m("clipboard_read", "save_failed"), null;
    let p = await ie().readFileBytes(l);
    if (p.length >= 2 && p[0] === 66 && p[1] === 77) p = await (await e3())(p).png().toBuffer();
    let f = await gmt(p, p.length, "png", e, {
        directWebpMaxBytes: C()
      }),
      c = f.buffer.toString("base64"),
      u = _Lt(c);
    return b(o.deleteFile), g("clipboard_read"), {
      base64: c,
      mediaType: u,
      dimensions: f.dimensions
    }
  } catch {
    return m("clipboard_read", "read_failed"), null
  }
}
async function D() {
  try {
    let n = h.win32 || h.linux,
      o = await b(n);
    if (o.exitCode !== 0 || !o.stdout) return null;
    return o.stdout.trim()
  } catch (e) {
    return t(`Failed to read image path from clipboard: ${e instanceof Error?e.message:String(e)}`, {
      level: "error"
    }), null
  }
}
var p4t = /\.(png|jpe?g|gif|webp)$/i;

function I(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e
}
var P = /^(?:[A-Za-z]:\\|\\\\)/;

function S(e) {
  return e
}

function H3o(e) {
  let n = I(e.trim()),
    o = S(n);
  return p4t.test(o)
}

function $3o(e) {
  let n = I(e.trim()),
    o = S(n);
  if (p4t.test(o)) return o;
  return null
}
async function bci(e, n, o) {
  let l = $3o(e);
  if (!l) return null;
  let s = l;
  if (x() === "wsl" && P.test(s)) s = await new Cpt(i.WSL_DISTRO_NAME).toLocalPath(s);
  let r;
  try {
    if (_(s)) r = await o(s);
    else {
      let d = await D();
      if (d && s === v(d)) r = await o(d)
    }
  } catch (d) {
    return t(`Failed to read pasted image file ${s}: ${d instanceof Error?d.message:String(d)}`, {
      level: "error"
    }), null
  }
  if (r === "refused") return "refused";
  if (!r || r === "absent") return null;
  if (r.length === 0) return t(`Image file is empty: ${s}`, {
    level: "warn"
  }), null;
  if (r.length >= 2 && r[0] === 66 && r[1] === 77) r = await (await e3())(r).png().toBuffer();
  let p = hg(r);
  if (p === null) return t(`Pasted path has image extension but content is not a supported image: ${s}`, {
    level: "warn"
  }), null;
  let f = p.split("/")[1] || "png",
    c = await gmt(r, r.length, f, n, {
      directWebpMaxBytes: C()
    }),
    u = c.buffer.toString("base64");
  return {
    path: s,
    base64: u,
    mediaType: `image/${c.mediaType}`,
    dimensions: c.dimensions
  }
}

function U3o(e) {
  if (e.includes("\x00")) return !0;
  let n = e.slice(0, 4096);
  if (n.length < 32) return !1;
  let o = 0;
  for (let l of n)
    if (l === "\uFFFD") o++;
  return o / n.length > 0.05
}

function C() {
  return Ct() ? void 0 : FLn(Q4)
}
export {
  hQ,
  _ci,
  Qke,
  p4t,
  H3o,
  $3o,
  bci,
  U3o
};
