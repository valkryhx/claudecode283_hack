// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Et
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  stat as i
} from "fs/promises";
import {
  homedir as s
} from "os";
import {
  join as l
} from "path";
async function c(e, a) {
  await Ee((r) => ({
    ...r,
    appleTerminalSetupInProgress: !0,
    appleTerminalBackupPath: e
  }), a)
}
async function s_t(e) {
  await Ee((a) => ({
    ...a,
    appleTerminalSetupInProgress: !1
  }), e)
}

function u() {
  let e = le();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  }
}

function i_t() {
  return l(s(), "Library", "Preferences", "com.apple.Terminal.plist")
}
async function D8r(e) {
  let a = i_t(),
    r = `${a}.bak`;
  try {
    let {
      code: n
    } = await tt("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await i(a)
    } catch {
      return null
    }
    return await tt("defaults", ["export", "com.apple.Terminal", r]), await c(r, e), r
  } catch (n) {
    if (Et(n)) return t(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return d(n), null
  }
}
async function nVt(e) {
  let {
    inProgress: a,
    backupPath: r
  } = u();
  if (!a) return {
    status: "no_backup"
  };
  if (!r) return await s_t(e), {
    status: "no_backup"
  };
  try {
    await i(r)
  } catch {
    return await s_t(e), {
      status: "no_backup"
    }
  }
  let n = !1;
  try {
    let {
      code: o
    } = await tt("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return {
      status: "failed",
      backupPath: r
    };
    return n = !0, await tt("killall", ["cfprefsd"]), await s_t(e), {
      status: "restored"
    }
  } catch (o) {
    if (Et(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else d(o);
    return await s_t(e), n ? {
      status: "restored"
    } : {
      status: "failed",
      backupPath: r
    }
  }
}
export {
  s_t,
  i_t,
  D8r,
  nVt
};
