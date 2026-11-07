// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  k,
  tr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  $c
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  I0e
} from "B:/~BUN/root/chunk-wt8tyqt4.js";
import {
  She
} from "B:/~BUN/root/chunk-q3hkf2kh.js";
import {
  SQe
} from "B:/~BUN/root/chunk-xdzcgcjh.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  promises as n
} from "fs";
import * as w from "os";
import * as o from "path";
var D = "com.anthropic.claude-code-url-handler",
  p = "Claude Code URL Handler",
  h = "claude-code-url-handler.desktop",
  _ = "Claude Code URL Handler.app",
  c = o.join(w.homedir(), "Applications", _),
  l = o.join(c, "Contents", "MacOS", "claude");

function d() {
  return o.join(SQe(), "applications", h)
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${She}`,
  y = `${u}\\shell\\open\\command`,
  f = 86400000;

function C(e) {
  return `Exec="${e}" --handle-uri %u`
}

function E(e) {
  return `"${e}" --handle-uri "%1"`
}
async function F(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, {
      recursive: !0
    })
  } catch (s) {
    if (k(s) !== "ENOENT") throw s
  }
  await n.mkdir(o.dirname(l), {
    recursive: !0
  });
  let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${D}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${She}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await n.writeFile(o.join(r, "Info.plist"), i), await n.symlink(e, l), await ut("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", ["-R", c], {
    useCwd: !1
  }), t(`Registered ${She}:// protocol handler at ${c}`)
}
async function L(e) {
  await n.mkdir(o.dirname(d()), {
    recursive: !0
  });
  let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${She}:// deep links for Claude Code
${C(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${She};
`;
  await n.writeFile(d(), r);
  let i = await $c("xdg-mime");
  if (i) {
    let {
      code: a
    } = await ut(i, ["default", h, `x-scheme-handler/${She}`], {
      useCwd: !1
    });
    if (a !== 0) throw Object.assign(Error(`xdg-mime exited with code ${a}`), {
      code: "XDG_MIME_FAILED"
    })
  }
  t(`Registered ${She}:// protocol handler at ${d()}`)
}
async function S(e) {
  for (let r of [
      ["add", u, "/ve", "/d", `URL:${p}`, "/f"],
      ["add", u, "/v", "URL Protocol", "/d", "", "/f"],
      ["add", y, "/ve", "/d", E(e), "/f"]
    ]) {
    let {
      code: i
    } = await ut("reg", r, {
      useCwd: !1
    });
    if (i !== 0) throw Object.assign(Error(`reg add exited with code ${i}`), {
      code: "REG_FAILED"
    })
  }
  t(`Registered ${She}:// protocol handler in Windows registry`)
}
async function x(e) {
  let r = e ?? await P();
  switch ("win32") {
    case "darwin":
      await F(r);
      break;
    case "linux":
      await L(r);
      break;
    case "win32":
      await S(r);
      break;
    default:
      throw Error("Unsupported platform: win32")
  }
}
async function P() {
  let e = I0e();
  try {
    return await n.realpath(e), e
  } catch {
    return process.execPath
  }
}
async function v(e) {
  try {
    switch ("win32") {
      case "darwin":
        return await n.readlink(l) === e;
      case "linux":
        return (await n.readFile(d(), "utf8")).includes(C(e));
      case "win32": {
        let {
          stdout: r,
          code: i
        } = await ut("reg", ["query", y, "/ve"], {
          useCwd: !1
        });
        return i === 0 && r.includes(E(e))
      }
      default:
        return !1
    }
  } catch {
    return !1
  }
}
async function c6s(e) {
  if (yt().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("win32")) return;
  let r = await P();
  if (await v(r)) return;
  let i = o.join(Ue(), ".deep-link-register-failed");
  if (X() && e !== void 0) {
    let a = await e.stat(Ve.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return
  } else try {
    let a = await n.stat(i);
    if (Date.now() - a.mtimeMs < f) return
  } catch {}
  try {
    if (await x(r), g("deep_link_register"), t("Auto-registered claude-cli:// deep link protocol handler"), X() && e !== void 0) await e.delete(Ve.state("deep-link-register-failed"));
    else await n.rm(i, {
      force: !0
    }).catch(() => {})
  } catch (a) {
    let s = tr(a);
    if (m("deep_link_register", s ?? "register_failed"), t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`, {
        level: "warn"
      }), s === "EACCES" || s === "ENOSPC")
      if (X() && e !== void 0) await e.write(Ve.state("deep-link-register-failed"), "", {
        publishDiscipline: "inPlace"
      });
      else await n.writeFile(i, "").catch(() => {})
  }
}
export {
  c6s
};
