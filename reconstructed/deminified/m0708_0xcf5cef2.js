// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { stat as i } from "fs/promises";
import { homedir as s } from "os";
import { join as l } from "path";
async function c(appleTerminalBackupPath, a) {
  await Ee(r => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: appleTerminalBackupPath
  }), a);
}
async function s_t(e) {
  await Ee(a => ({
    ...a,
    appleTerminalSetupInProgress: !1
  }), e);
}
function u() {
  let e = le();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  };
}
function i_t() {
  return l(s(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function D8r(e) {
  let a = i_t(),
    r = `${a}.bak`;
  try {
    let {
      code: code
    } = await tt("defaults", ["export", "com.apple.Terminal", a]);
    if (code !== 0) return null;
    try {
      await i(a);
    } catch {
      return null;
    }
    return await tt("defaults", ["export", "com.apple.Terminal", r]), await c(r, e), r;
  } catch (error) {
    if (Et(error)) return t(`backupTerminalPreferences: fs inaccessible: ${error}`), null;
    return d(error), null;
  }
}
async function nVt(e) {
  let {
    inProgress: inProgress,
    backupPath: backupPath
  } = u();
  if (!inProgress) return {
    status: "no_backup"
  };
  if (!backupPath) return await s_t(e), {
    status: "no_backup"
  };
  try {
    await i(backupPath);
  } catch {
    return await s_t(e), {
      status: "no_backup"
    };
  }
  let n = !1;
  try {
    let {
      code: code_2
    } = await tt("defaults", ["import", "com.apple.Terminal", backupPath]);
    if (code_2 !== 0) return {
      status: "failed",
      backupPath: backupPath
    };
    return n = !0, await tt("killall", ["cfprefsd"]), await s_t(e), {
      status: "restored"
    };
  } catch (error) {
    if (Et(error)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${error}`);else d(error);
    return await s_t(e), n ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: backupPath
    };
  }
}
export { s_t, i_t, D8r, nVt };