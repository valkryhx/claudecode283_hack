// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { createHash as c } from "crypto";
import { homedir as o, userInfo as l } from "os";
import { join as u } from "path";
var nze = "-credentials";
function jx() {
  let CLAUDE_SECURESTORAGE_CONFIG_DIR = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (CLAUDE_SECURESTORAGE_CONFIG_DIR !== void 0) return (CLAUDE_SECURESTORAGE_CONFIG_DIR || u(o(), ".claude")).normalize("NFC");
  return Pe();
}
function OQe() {
  return de() ? null : jx();
}
function ine(e = "") {
  let CLAUDE_SECURESTORAGE_CONFIG_DIR_2 = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR,
    t = CLAUDE_SECURESTORAGE_CONFIG_DIR_2 !== void 0 ? !CLAUDE_SECURESTORAGE_CONFIG_DIR_2 : !process.env.CLAUDE_CONFIG_DIR,
    r = CLAUDE_SECURESTORAGE_CONFIG_DIR_2 !== void 0 ? CLAUDE_SECURESTORAGE_CONFIG_DIR_2.normalize("NFC") : Pe(),
    a = t ? "" : `-${c("sha256").update(r).digest("hex").substring(0, 8)}`;
  return `Claude Code${ln().OAUTH_FILE_SUFFIX}${e}${a}`;
}
var s = /^[a-zA-Z0-9._-]+$/;
function xB() {
  return "claude-code-user";
}
var mun = 30000;
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
  legacyApiKeyPrefetch = null;
}
var d = new z(() => new i());
function DJ() {
  return d.of(j().host);
}
function SVs() {
  let e = DJ();
  e.cache = {
    data: e.cache.data,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}
function GD() {
  let e = DJ();
  e.cache = {
    data: null,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}
function WFo(e, n, t = DJ()) {
  if (t.cache.cachedAt !== 0 || t.generation !== n) return;
  let data = null;
  if (e) try {
    data = JSON.parse(e);
  } catch {
    return;
  }
  t.cache = {
    data: data,
    cachedAt: Date.now()
  };
}
function wVs(e, n, t) {
  if (e.generation === t) e.keychainHoldsItem = n;
}
function vVs(e) {
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
  return "other";
}
export { nze, jx, OQe, ine, xB, mun, DJ, SVs, GD, WFo, wVs, vVs };