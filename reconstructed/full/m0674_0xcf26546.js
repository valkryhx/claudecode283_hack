// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v,
  ao
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  sc
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  jNe
} from "B:/~BUN/root/chunk-ewjenbzd.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  d5
} from "B:/~BUN/root/chunk-ph71ebz0.js";
import {
  YHe
} from "B:/~BUN/root/chunk-dqm1wqrw.js";
import {
  promises as n
} from "fs";
import * as g from "os";
import * as o from "path";
var E = "com.anthropic.claude-code-url-handler",
  p = "Claude Code URL Handler",
  w = "claude-code-url-handler.desktop",
  P = "Claude Code URL Handler.app",
  c = o.join(g.homedir(), "Applications", P),
  l = o.join(c, "Contents", "MacOS", "claude");

function d() {
  return o.join(YHe(), "applications", w)
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${d5}`,
  h = `${u}\\shell\\open\\command`,
  f = 86400000;

function k(e) {
  return `Exec="${e}" --handle-uri %u`
}

function y(e) {
  return `"${e}" --handle-uri "%1"`
}
async function D(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, {
      recursive: !0
    })
  } catch (s) {
    if (v(s) !== "ENOENT") throw s
  }
  await n.mkdir(o.dirname(l), {
    recursive: !0
  });
  let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${E}</string>
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
        <string>${d5}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await n.writeFile(o.join(r, "Info.plist"), i), await n.symlink(e, l), await tt("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", ["-R", c], {
    useCwd: !1
  }), t(`Registered ${d5}:// protocol handler at ${c}`)
}
async function F(e) {
  await n.mkdir(o.dirname(d()), {
    recursive: !0
  });
  let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${d5}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${d5};
`;
  await n.writeFile(d(), r);
  let i = await sc("xdg-mime");
  if (i) {
    let {
      code: a
    } = await tt(i, ["default", w, `x-scheme-handler/${d5}`], {
      useCwd: !1
    });
    if (a !== 0) throw Object.assign(Error(`xdg-mime exited with code ${a}`), {
      code: "XDG_MIME_FAILED"
    })
  }
  t(`Registered ${d5}:// protocol handler at ${d()}`)
}
async function L(e) {
  for (let r of [
      ["add", u, "/ve", "/d", `URL:${p}`, "/f"],
      ["add", u, "/v", "URL Protocol", "/d", "", "/f"],
      ["add", h, "/ve", "/d", y(e), "/f"]
    ]) {
    let {
      code: i
    } = await tt("reg", r, {
      useCwd: !1
    });
    if (i !== 0) throw Object.assign(Error(`reg add exited with code ${i}`), {
      code: "REG_FAILED"
    })
  }
  t(`Registered ${d5}:// protocol handler in Windows registry`)
}
async function S(e) {
  let r = e ?? await C();
  switch ("win32") {
    case "darwin":
      await D(r);
      break;
    case "linux":
      await F(r);
      break;
    case "win32":
      await L(r);
      break;
    default:
      throw Error("Unsupported platform: win32")
  }
}
async function C() {
  let e = jNe();
  try {
    return await n.realpath(e), e
  } catch {
    return process.execPath
  }
}
async function x(e) {
  try {
    switch ("win32") {
      case "darwin":
        return await n.readlink(l) === e;
      case "linux":
        return (await n.readFile(d(), "utf8")).includes(k(e));
      case "win32": {
        let {
          stdout: r,
          code: i
        } = await tt("reg", ["query", h, "/ve"], {
          useCwd: !1
        });
        return i === 0 && r.includes(y(e))
      }
      default:
        return !1
    }
  } catch {
    return !1
  }
}
async function G3r(e) {
  if (Je().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("win32")) return;
  let r = await C();
  if (await x(r)) return;
  let i = o.join(Se(), ".deep-link-register-failed");
  if (H() && e !== void 0) {
    let a = await e.stat(Ae.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return
  } else try {
    let a = await n.stat(i);
    if (Date.now() - a.mtimeMs < f) return
  } catch {}
  try {
    if (await S(r), _("deep_link_register"), t("Auto-registered claude-cli:// deep link protocol handler"), H() && e !== void 0) await e.delete(Ae.state("deep-link-register-failed"));
    else await n.rm(i, {
      force: !0
    }).catch(() => {})
  } catch (a) {
    let s = ao(a);
    if (m("deep_link_register", s ?? "register_failed"), t(`Failed to auto-register deep link protocol handler: ${a instanceof Error?a.message:String(a)}`, {
        level: "warn"
      }), s === "EACCES" || s === "ENOSPC")
      if (H() && e !== void 0) await e.write(Ae.state("deep-link-register-failed"), "", {
        publishDiscipline: "inPlace"
      });
      else await n.writeFile(i, "").catch(() => {})
  }
}
export {
  G3r
};
