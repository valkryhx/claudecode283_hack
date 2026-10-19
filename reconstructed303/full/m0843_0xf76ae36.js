// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Ce,
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  lt
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  stat as i
} from "fs/promises";
import {
  homedir as s
} from "os";
import {
  join as c
} from "path";
async function u(e, a) {
  await Ce((r) => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: e
  }), a)
}
async function WVt(e) {
  await Ce((a) => ({
    ...a,
    appleTerminalSetupInProgress: !1
  }), e)
}

function p() {
  let e = ue();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  }
}

function zVt() {
  return c(s(), "Library", "Preferences", "com.apple.Terminal.plist")
}
async function SJo(e) {
  let a = zVt(),
    r = `${a}.bak`;
  try {
    let {
      code: n
    } = await lt("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await i(a)
    } catch {
      return null
    }
    return await lt("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r
  } catch (n) {
    if (Wt(n)) return t(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return l(n), null
  }
}
async function Skn(e) {
  let {
    inProgress: a,
    backupPath: r
  } = p();
  if (!a) return {
    status: "no_backup"
  };
  if (!r) return await WVt(e), {
    status: "no_backup"
  };
  try {
    await i(r)
  } catch {
    return await WVt(e), {
      status: "no_backup"
    }
  }
  let n = !1;
  try {
    let {
      code: o
    } = await lt("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return {
      status: "failed",
      backupPath: r
    };
    return n = !0, await lt("killall", ["cfprefsd"]), await WVt(e), {
      status: "restored"
    }
  } catch (o) {
    if (Wt(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else l(o);
    return await WVt(e), n ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: r
    }
  }
}
export {
  WVt,
  zVt,
  SJo,
  Skn
};
