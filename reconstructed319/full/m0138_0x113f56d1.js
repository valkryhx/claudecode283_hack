// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  createHash as c
} from "crypto";
import {
  homedir as o,
  userInfo as l
} from "os";
import {
  join as u
} from "path";
var Zet = "-credentials";

function FU() {
  let e = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (e !== void 0) return (e || u(o(), ".claude")).normalize("NFC");
  return Ue()
}

function rHe() {
  return q() ? null : FU()
}

function gpe(e = "") {
  let n = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR,
    t = n !== void 0 ? !n : !process.env.CLAUDE_CONFIG_DIR,
    r = n !== void 0 ? n.normalize("NFC") : Ue(),
    a = t ? "" : `-${c("sha256").update(r).digest("hex").substring(0,8)}`;
  return `Claude Code${nn().OAUTH_FILE_SUFFIX}${e}${a}`
}
var s = /^[a-zA-Z0-9._-]+$/;

function NV() {
  return "claude-code-user"
}
var NWn = 30000;
class i {
  cache = {
    data: null,
    cachedAt: 0
  };
  generation = 0;
  readInFlight = null;
  lastReadFailure = null;
  keychainHoldsItem = !1;
  lastKnown = null;
  legacyApiKeyPrefetch = null
}
var d = new W(() => new i);

function F4() {
  return d.of(H().host)
}

function g7i() {
  let e = F4();
  e.cache = {
    data: e.cache.data,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null
}

function HU() {
  let e = F4();
  e.cache = {
    data: null,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null
}

function $Ls(e, n, t = F4()) {
  if (t.cache.cachedAt !== 0 || t.generation !== n) return;
  let r = null;
  if (e) try {
    r = JSON.parse(e)
  } catch {
    return
  }
  t.cache = {
    data: r,
    cachedAt: Date.now()
  }
}

function y7i(e, n, t) {
  if (e.generation === t) e.keychainHoldsItem = n
}

function _7i(e) {
  if (!e) return "empty";
  let n = e.toLowerCase();
  if (n.includes("errsecduplicateitem") || n.includes("already exists")) return "duplicate_item";
  if (n.includes("unable to open") || n.includes("could not open")) return "keychain_unavailable";
  if (n.includes("errsecnodefaultkeychain") || n.includes("default keychain") || n.includes("no keychain")) return "no_keychain";
  if (n.includes("errsecitemnotfound") || n.includes("item could not be found")) return "item_not_found";
  if (n.includes("errsecinteractionnotallowed") || n.includes("interaction is not allowed") || n.includes("no user interaction")) return "interaction_not_allowed";
  if (n.includes("errsecusercanceled") || n.includes("cancel")) return "user_canceled";
  if (n.includes("errsecauthfailed") || n.includes("authorization") || n.includes("authentication") || n.includes("name or passphrase")) return "auth_failed";
  if (n.includes("locked") || n.includes("unlock")) return "keychain_locked";
  return "other"
}
export {
  Zet,
  FU,
  rHe,
  gpe,
  NV,
  NWn,
  F4,
  g7i,
  HU,
  $Ls,
  y7i,
  _7i
};
