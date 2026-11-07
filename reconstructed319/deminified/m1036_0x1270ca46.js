// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { stat as s } from "fs/promises";
import { homedir as l } from "os";
import { join as c } from "path";
async function u(appleTerminalBackupPath, n) {
  await Le(r => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: appleTerminalBackupPath
  }), n);
}
async function Ign(e) {
  await Le(n => ({
    ...n,
    appleTerminalSetupInProgress: !1
  }), e);
}
function p() {
  let e = fe();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  };
}
function Mgn() {
  return c(l(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function D7s(e) {
  let n = Mgn(),
    r = `${n}.bak`;
  try {
    let {
      code: code
    } = await ut("defaults", ["export", "com.apple.Terminal", n]);
    if (code !== 0) return null;
    try {
      await s(n);
    } catch {
      return null;
    }
    return await ut("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r;
  } catch (error) {
    if (qt(error)) return t(`backupTerminalPreferences: fs inaccessible: ${error}`), null;
    return a(error), null;
  }
}
async function V9n(e) {
  let {
    inProgress: inProgress,
    backupPath: backupPath
  } = p();
  if (!inProgress) return {
    status: "no_backup"
  };
  if (!backupPath) return await Ign(e), {
    status: "no_backup"
  };
  try {
    await s(backupPath);
  } catch {
    return await Ign(e), {
      status: "no_backup"
    };
  }
  let o = !1;
  try {
    let {
      code: code_2
    } = await ut("defaults", ["import", "com.apple.Terminal", backupPath]);
    if (code_2 !== 0) return {
      status: "failed",
      backupPath: backupPath
    };
    return o = !0, await ut("killall", ["cfprefsd"]), await Ign(e), {
      status: "restored"
    };
  } catch (error) {
    if (qt(error)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${error}`);else a(error);
    return await Ign(e), o ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: backupPath
    };
  }
}
export { Ign, Mgn, D7s, V9n };