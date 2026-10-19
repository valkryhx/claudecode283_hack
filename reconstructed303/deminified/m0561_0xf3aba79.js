// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { tP, ns } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { Hp, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { rRn } from "B:/~BUN/root/chunk-a6sd6she.js";
import { lje } from "B:/~BUN/root/chunk-asrchj7k.js";
import { link as c, mkdir as l, stat as s, unlink as p, writeFile as d } from "fs/promises";
import { join as r, sep as u } from "path";
async function m() {
  let o = r(lje(), "claude");
  if (!Dqr()) return null;
  let e = r(o, "ClaudeCode.app", "Contents", "MacOS"),
    n = r(e, "claude");
  try {
    let ino = (await s(process.execPath)).ino;
    await l(e, {
      recursive: !0
    }), await d(r(e, "..", "Info.plist"), `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string><key>NSLocalNetworkUsageDescription</key><string>Claude Code connects to servers and devices on your local network when commands you run need to reach them.</string></dict></plist>
`);
    try {
      if ((await s(n)).ino === ino) return n;
    } catch {}
    let t = tP(n);
    await c(process.execPath, t);
    try {
      await ns(t, n);
    } finally {
      await p(t).catch(() => {});
    }
    return n;
  } catch {
    return null;
  }
}
async function h5o() {
  if (I() !== "macos") return;
  if (a.CLAUDE_BG_TCC_DISCLAIMED) {
    delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
    return;
  }
  let e = (a.CLAUDE_PTY_HOST_NO_STABLE_PATH === "1" || a.CLAUDE_CODE_DISABLE_BG_STABLE_PATH ? null : await m()) ?? process.execPath,
    i = [...(Hp() ? [e] : [e, process.argv[1]]), ...process.argv.slice(2)],
    t = rRn(process.env);
  t.CLAUDE_BG_TCC_DISCLAIMED = "1", delete t.CLAUDE_PTY_HOST_NO_STABLE_PATH;
  try {
    process.execve(e, i, t, {
      macDisclaimResponsibility: !0
    });
  } catch {}
}
function Dqr() {
  return process.execPath.startsWith(r(lje(), "claude", "versions") + u);
}
export { h5o, Dqr };