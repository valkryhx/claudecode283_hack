// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k, Fr } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Wd } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { $3e } from "B:/~BUN/root/chunk-c0j3f8cc.js";
import { toe } from "B:/~BUN/root/chunk-31v320n9.js";
import { lje } from "B:/~BUN/root/chunk-asrchj7k.js";
import { promises as n } from "fs";
import * as w from "os";
import * as o from "path";
var D = "com.anthropic.claude-code-url-handler",
  p = "Claude Code URL Handler",
  h = "claude-code-url-handler.desktop",
  _ = "Claude Code URL Handler.app",
  c = o.join(w.homedir(), "Applications", _),
  l = o.join(c, "Contents", "MacOS", "claude");
function d() {
  return o.join(lje(), "applications", h);
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${toe}`,
  y = `${u}\\shell\\open\\command`,
  f = 86400000;
function C(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function E(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function F(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, {
      recursive: !0
    });
  } catch (error) {
    if (k(error) !== "ENOENT") throw error;
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
        <string>${toe}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await n.writeFile(o.join(r, "Info.plist"), i), await n.symlink(e, l), await lt("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", ["-R", c], {
    useCwd: !1
  }), t(`Registered ${toe}:// protocol handler at ${c}`);
}
async function L(e) {
  await n.mkdir(o.dirname(d()), {
    recursive: !0
  });
  let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${toe}:// deep links for Claude Code
${C(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${toe};
`;
  await n.writeFile(d(), r);
  let i = await Wd("xdg-mime");
  if (i) {
    let {
      code: code
    } = await lt(i, ["default", h, `x-scheme-handler/${toe}`], {
      useCwd: !1
    });
    if (code !== 0) throw Object.assign(Error(`xdg-mime exited with code ${code}`), {
      code: "XDG_MIME_FAILED"
    });
  }
  t(`Registered ${toe}:// protocol handler at ${d()}`);
}
async function S(e) {
  for (let r of [["add", u, "/ve", "/d", `URL:${p}`, "/f"], ["add", u, "/v", "URL Protocol", "/d", "", "/f"], ["add", y, "/ve", "/d", E(e), "/f"]]) {
    let {
      code: code_2
    } = await lt("reg", r, {
      useCwd: !1
    });
    if (code_2 !== 0) throw Object.assign(Error(`reg add exited with code ${code_2}`), {
      code: "REG_FAILED"
    });
  }
  t(`Registered ${toe}:// protocol handler in Windows registry`);
}
async function x(e) {
  let r = e ?? (await P());
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
      throw Error("Unsupported platform: win32");
  }
}
async function P() {
  let e = $3e();
  try {
    return await n.realpath(e), e;
  } catch {
    return process.execPath;
  }
}
async function v(e) {
  try {
    switch ("win32") {
      case "darwin":
        return (await n.readlink(l)) === e;
      case "linux":
        return (await n.readFile(d(), "utf8")).includes(C(e));
      case "win32":
        {
          let {
            stdout: stdout,
            code: code_3
          } = await lt("reg", ["query", y, "/ve"], {
            useCwd: !1
          });
          return code_3 === 0 && stdout.includes(E(e));
        }
      default:
        return !1;
    }
  } catch {
    return !1;
  }
}
async function N4o(e) {
  if (ut().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("win32")) return;
  let r = await P();
  if (await v(r)) return;
  let i = o.join(Pe(), ".deep-link-register-failed");
  if (W() && e !== void 0) {
    let a = await e.stat(Be.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return;
  } else try {
    let a = await n.stat(i);
    if (Date.now() - a.mtimeMs < f) return;
  } catch {}
  try {
    if (await x(r), g("deep_link_register"), t("Auto-registered claude-cli:// deep link protocol handler"), W() && e !== void 0) await e.delete(Be.state("deep-link-register-failed"));else await n.rm(i, {
      force: !0
    }).catch(() => {});
  } catch (error) {
    let s = Fr(error);
    if (m("deep_link_register", s ?? "register_failed"), t(`Failed to auto-register deep link protocol handler: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), s === "EACCES" || s === "ENOSPC") if (W() && e !== void 0) await e.write(Be.state("deep-link-register-failed"), "", {
      publishDiscipline: "inPlace"
    });else await n.writeFile(i, "").catch(() => {});
  }
}
export { N4o };