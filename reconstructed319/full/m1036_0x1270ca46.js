// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ut
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  stat as s
} from "fs/promises";
import {
  homedir as l
} from "os";
import {
  join as c
} from "path";
async function u(e, n) {
  await Le((r) => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: e
  }), n)
}
async function Ign(e) {
  await Le((n) => ({
    ...n,
    appleTerminalSetupInProgress: !1
  }), e)
}

function p() {
  let e = fe();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  }
}

function Mgn() {
  return c(l(), "Library", "Preferences", "com.apple.Terminal.plist")
}
async function D7s(e) {
  let n = Mgn(),
    r = `${n}.bak`;
  try {
    let {
      code: o
    } = await ut("defaults", ["export", "com.apple.Terminal", n]);
    if (o !== 0) return null;
    try {
      await s(n)
    } catch {
      return null
    }
    return await ut("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r
  } catch (o) {
    if (qt(o)) return t(`backupTerminalPreferences: fs inaccessible: ${o}`), null;
    return a(o), null
  }
}
async function V9n(e) {
  let {
    inProgress: n,
    backupPath: r
  } = p();
  if (!n) return {
    status: "no_backup"
  };
  if (!r) return await Ign(e), {
    status: "no_backup"
  };
  try {
    await s(r)
  } catch {
    return await Ign(e), {
      status: "no_backup"
    }
  }
  let o = !1;
  try {
    let {
      code: i
    } = await ut("defaults", ["import", "com.apple.Terminal", r]);
    if (i !== 0) return {
      status: "failed",
      backupPath: r
    };
    return o = !0, await ut("killall", ["cfprefsd"]), await Ign(e), {
      status: "restored"
    }
  } catch (i) {
    if (qt(i)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${i}`);
    else a(i);
    return await Ign(e), o ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: r
    }
  }
}
export {
  Ign,
  Mgn,
  D7s,
  V9n
};
