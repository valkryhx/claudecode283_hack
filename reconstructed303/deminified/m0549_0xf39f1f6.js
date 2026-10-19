// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { xne } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ih, sft } from "B:/~BUN/root/chunk-3tj0rd0x.js";
import { kG, K8e, qrn, oft } from "B:/~BUN/root/chunk-gk5jpppj.js";
import { se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { by, cI } from "B:/~BUN/root/chunk-j8w5f307.js";
import { Tt } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { wd } from "B:/~BUN/root/chunk-wegca9zh.js";
import { P8e } from "B:/~BUN/root/chunk-cc0we03s.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
import { randomBytes as W } from "crypto";
import { basename as v, dirname as E, isAbsolute as _, join as w } from "path";
var VY = 800,
  h = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"]
  };
function B() {
  let s = wd(),
    r = "claude_cli_latest_screenshot.png",
    n = {
      darwin: w(s, "claude_cli_latest_screenshot.png"),
      linux: w(s, "claude_cli_latest_screenshot.png"),
      win32: w(s, "claude_cli_latest_screenshot.png")
    },
    screenshotPath = n.win32 || n.linux,
    i = ho([screenshotPath]),
    f = `set fp to open for access POSIX file ${`"${screenshotPath.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`} with write permission`,
    c = oft(screenshotPath, "the screenshot temp path (override with CLAUDE_CODE_TMPDIR)"),
    u = !1,
    d = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    F = "",
    T = "",
    y = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${ho([f])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: h.darwin,
        deleteFile: `rm -f -- ${i}`
      },
      linux: {
        checkImage: 'xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"',
        saveImage: `xclip -selection clipboard -t image/png -o > ${i} 2>/dev/null || wl-paste --type image/png > ${i} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${i} 2>/dev/null || wl-paste --type image/bmp > ${i}`,
        getPath: h.linux,
        deleteFile: `rm -f -- ${i}`
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
    screenshotPath: screenshotPath
  };
}
async function b(e) {
  if (typeof e === "string") return cI(e, {
    reject: !1
  });
  let [s, ...r] = e;
  return by(s, r, {
    reject: !1
  });
}
async function xds() {
  return !1;
}
async function mue(e) {
  let s;
  try {
    s = B();
  } catch (error) {
    return l(error), m("clipboard_read", "construct_failed"), null;
  }
  let {
    commands: commands,
    screenshotPath: screenshotPath_2
  } = s;
  try {
    if ((await b(commands.checkImage)).exitCode !== 0) return null;
    if (await se().mkdir(E(screenshotPath_2), {
      mode: 448
    }), (await b(commands.saveImage)).exitCode !== 0) return m("clipboard_read", "save_failed"), null;
    let p = await se().readFileBytes(screenshotPath_2);
    if (p.length >= 2 && p[0] === 66 && p[1] === 77) p = await (await kG())(p).png().toBuffer();
    let f = await K8e(p, p.length, "png", e, {
        directWebpMaxBytes: C()
      }),
      base64 = f.buffer.toString("base64"),
      mediaType = sft(base64);
    return b(commands.deleteFile), g("clipboard_read"), {
      base64: base64,
      mediaType: mediaType,
      dimensions: f.dimensions
    };
  } catch {
    return m("clipboard_read", "read_failed"), null;
  }
}
async function D() {
  try {
    let s = h.win32 || h.linux,
      r = await b(s);
    if (r.exitCode !== 0 || !r.stdout) return null;
    return r.stdout.trim();
  } catch (error) {
    return t(`Failed to read image path from clipboard: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
}
var WRt = /\.(png|jpe?g|gif|webp)$/i;
function P(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e;
}
var S = /^(?:[A-Za-z]:\\|\\\\)/;
function x(e) {
  return e;
}
function Pds(e) {
  let s = P(e.trim()),
    r = x(s);
  return WRt.test(r);
}
function _oo(e) {
  let s = P(e.trim()),
    r = x(s);
  if (WRt.test(r)) return r;
  return null;
}
async function Ods(e, s, r) {
  let n = _oo(e);
  if (!n) return null;
  let path = n;
  if (I() === "wsl" && S.test(path)) path = await new P8e(a.WSL_DISTRO_NAME).toLocalPath(path);
  let i;
  try {
    if (_(path)) i = await r(path);else {
      let d = await D();
      if (d && path === v(d)) i = await r(d);
    }
  } catch (error) {
    return t(`Failed to read pasted image file ${path}: ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), null;
  }
  if (i === "refused") return "refused";
  if (!i || i === "absent") return null;
  if (i.length === 0) return t(`Image file is empty: ${path}`, {
    level: "warn"
  }), null;
  if (i.length >= 2 && i[0] === 66 && i[1] === 77) i = await (await kG())(i).png().toBuffer();
  let p = Ih(i);
  if (p === null) return t(`Pasted path has image extension but content is not a supported image: ${path}`, {
    level: "warn"
  }), null;
  let f = p.split("/")[1] || "png",
    c = await K8e(i, i.length, f, s, {
      directWebpMaxBytes: C()
    }),
    base64_2 = c.buffer.toString("base64");
  return {
    path: path,
    base64: base64_2,
    mediaType: `image/${c.mediaType}`,
    dimensions: c.dimensions
  };
}
function boo(e) {
  if (e.includes("\x00")) return !0;
  let s = e.slice(0, 4096);
  if (s.length < 32) return !1;
  let r = 0;
  for (let n of s) if (n === "\uFFFD") r++;
  return r / s.length > 0.05;
}
function C() {
  return Tt() ? void 0 : qrn(xne);
}
export { VY, xds, mue, WRt, Pds, _oo, Ods, boo };