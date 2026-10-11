// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j,
  Wo
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  P,
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  createHash as D
} from "crypto";
var uj = /^[0-9a-f]{64}$/;

function Kt(e) {
  return D("sha256").update(e).digest("hex")
}
import {
  createHash as _,
  randomUUID as y
} from "crypto";
import {
  closeSync as E,
  constants as m,
  fchmodSync as w,
  fstatSync as S,
  lstatSync as R,
  mkdirSync as s,
  openSync as C
} from "fs";
import {
  tmpdir as p
} from "os";
import {
  join as d
} from "path";

function Iy() {
  let e = a.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return p()
}
var nhn = "claude-pdf-";

function m_e(e) {
  let r = process.getuid?.();
  if (r === void 0) return;
  let n = e.replace(/[\/]+$/, "") || e,
    o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    i;
  try {
    i = C(n, m.O_RDONLY | m.O_DIRECTORY | m.O_NOFOLLOW)
  } catch (t) {
    let c = v(t);
    if (c === "ELOOP" || c === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (c === "EACCES") {
      let u;
      try {
        let f = R(n);
        if (f.uid !== r) u = f.uid
      } catch {}
      if (u !== void 0) throw new P(`Temp directory ${e} is owned by uid ${u}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new P(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it")
    }
    throw t
  }
  try {
    let t = S(i);
    if (t.uid !== r) {
      if (r === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
        K("warn", "tempdir_owner_mismatch", {
          observed_uid: t.uid
        });
        return
      }
      throw Error(`Temp directory ${e} is owned by uid ${t.uid}, expected ${r}. Refusing to use it \u2014 another user may have pre-created it. ${o}`)
    }
    if ((t.mode & 511) !== 448) w(i, 448)
  } finally {
    E(i)
  }
}
class l {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e
  }
}
var h = new q(() => new l);

function g() {
  return "claude"
}

function rl() {
  return T(h.of(j().host))
}

function T(e) {
  if (Wo()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let r = d(Iy(), g());
  if (r !== e.ensured) {
    if (typeof process.getuid === "function") s(r, {
      recursive: !0,
      mode: 448
    }), m_e(r);
    else try {
      s(r, {
        recursive: !0,
        mode: 448
      })
    } catch {}
    e.markEnsured(r)
  }
  return r
}

function V8e() {
  let e = rl();
  s(e, {
    recursive: !0,
    mode: 448
  }), m_e(e);
  let r = d(e, "plugin-tool-staging");
  return s(r, {
    recursive: !0,
    mode: 448
  }), m_e(r), r
}

function g_e() {
  let e = h.of(j().host),
    r = T(e);
  return r
}

function U$o() {
  return Iy()
}

function BJ(e = "claude-prompt", r = ".md", n) {
  let o = n?.contentHash ? _("sha256").update(n.contentHash).digest("hex").slice(0, 16) : y();
  return d(rl(), `${e}-${o}${r}`)
}
export {
  uj,
  Kt,
  Iy,
  nhn,
  m_e,
  rl,
  V8e,
  g_e,
  U$o,
  BJ
};
