// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  ce,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  jm,
  EC
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  rl
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  $ee,
  PNe,
  s3e
} from "B:/~BUN/root/chunk-kk0ky5aa.js";
import {
  v_,
  p3e
} from "B:/~BUN/root/chunk-07stbc6s.js";
import {
  HNe
} from "B:/~BUN/root/chunk-dkswey4x.js";
import {
  Yr
} from "B:/~BUN/root/chunk-n0832wgz.js";
import {
  randomBytes as x
} from "crypto";
import {
  basename as C,
  dirname as v,
  isAbsolute as F,
  join as h
} from "path";
var o8 = 800,
  f = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"]
  };

function W() {
  let o = rl(),
    r = "claude_cli_latest_screenshot.png",
    s = {
      darwin: h(o, "claude_cli_latest_screenshot.png"),
      linux: h(o, "claude_cli_latest_screenshot.png"),
      win32: h(o, "claude_cli_latest_screenshot.png")
    },
    i = s.win32 || s.linux,
    n = Yr([i]),
    g = `set fp to open for access POSIX file ${`"${i.replace(/\\/g,"\\\\").replace(/"/g,"\\\"")}"`} with write permission`,
    c = s3e(i, "the screenshot temp path (override with CLAUDE_CODE_TMPDIR)"),
    l = !1,
    w = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    S = "",
    D = "",
    b = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${Yr([g])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: f.darwin,
        deleteFile: `rm -f -- ${n}`
      },
      linux: {
        checkImage: 'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"',
        saveImage: `xclip -selection clipboard -t image/png -o > ${n} 2>/dev/null || wl-paste --type image/png > ${n} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${n} 2>/dev/null || wl-paste --type image/bmp > ${n}`,
        getPath: f.linux,
        deleteFile: `rm -f -- ${n}`
      },
      win32: {
        checkImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"],
        saveImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", `Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(${c}, [System.Drawing.Imaging.ImageFormat]::Png)`],
        getPath: f.win32,
        deleteFile: ["powershell", "-NoProfile", "-Command", `Remove-Item -Force -LiteralPath ${c}`]
      }
    };
  return {
    commands: b.win32 || b.linux,
    screenshotPath: i
  }
}
async function u(e) {
  if (typeof e === "string") return EC(e, {
    reject: !1
  });
  let [o, ...r] = e;
  return jm(o, r, {
    reject: !1
  })
}
async function eio() {
  return !1
}
async function E7(e) {
  let o;
  try {
    o = W()
  } catch (i) {
    return d(i), m("clipboard_read", "construct_failed"), null
  }
  let {
    commands: r,
    screenshotPath: s
  } = o;
  try {
    if ((await u(r.checkImage)).exitCode !== 0) return null;
    if (await ce().mkdir(v(s), {
        mode: 448
      }), (await u(r.saveImage)).exitCode !== 0) return m("clipboard_read", "save_failed"), null;
    let p = await ce().readFileBytes(s);
    if (p.length >= 2 && p[0] === 66 && p[1] === 77) p = await (await $ee())(p).png().toBuffer();
    let g = await PNe(p, p.length, "png", e),
      c = g.buffer.toString("base64"),
      l = p3e(c);
    return u(r.deleteFile), _("clipboard_read"), {
      base64: c,
      mediaType: l,
      dimensions: g.dimensions
    }
  } catch {
    return m("clipboard_read", "read_failed"), null
  }
}
async function E() {
  try {
    let o = f.win32 || f.linux,
      r = await u(o);
    if (r.exitCode !== 0 || !r.stdout) return null;
    return r.stdout.trim()
  } catch (e) {
    return t(`Failed to read image path from clipboard: ${e instanceof Error?e.message:String(e)}`, {
      level: "error"
    }), null
  }
}
var bet = /\.(png|jpe?g|gif|webp)$/i;

function y(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e
}
var I = /^(?:[A-Za-z]:\\|\\\\)/;

function P(e) {
  return e
}

function tio(e) {
  let o = y(e.trim()),
    r = P(o);
  return bet.test(r)
}

function T(e) {
  let o = y(e.trim()),
    r = P(o);
  if (bet.test(r)) return r;
  return null
}
async function nio(e, o) {
  let r = T(e);
  if (!r) return null;
  let s = r;
  if (O() === "wsl" && I.test(s)) s = await new HNe(a.WSL_DISTRO_NAME).toLocalPath(s);
  let i;
  try {
    if (F(s)) i = await ce().readFileBytes(s);
    else {
      let l = await E();
      if (l && s === C(l)) i = await ce().readFileBytes(l)
    }
  } catch (l) {
    return t(`Failed to read pasted image file ${s}: ${l instanceof Error?l.message:String(l)}`, {
      level: "error"
    }), null
  }
  if (!i) return null;
  if (i.length === 0) return t(`Image file is empty: ${s}`, {
    level: "warn"
  }), null;
  if (i.length >= 2 && i[0] === 66 && i[1] === 77) i = await (await $ee())(i).png().toBuffer();
  let n = v_(i);
  if (n === null) return t(`Pasted path has image extension but content is not a supported image: ${s}`, {
    level: "warn"
  }), null;
  let p = n.split("/")[1] || "png",
    g = await PNe(i, i.length, p, o),
    c = g.buffer.toString("base64");
  return {
    path: s,
    base64: c,
    mediaType: `image/${g.mediaType}`,
    dimensions: g.dimensions
  }
}

function zur(e) {
  if (e.includes("\x00")) return !0;
  let o = e.slice(0, 4096);
  if (o.length < 32) return !1;
  let r = 0;
  for (let s of o)
    if (s === "\uFFFD") r++;
  return r / o.length > 0.05
}
export {
  o8,
  eio,
  E7,
  bet,
  tio,
  nio,
  zur
};
