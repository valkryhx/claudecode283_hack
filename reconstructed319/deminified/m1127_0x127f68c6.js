// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { M3e, Afi, n9r, xfi } from "B:/~BUN/root/chunk-44wgxs8c.js";
function L4t(e, t, n) {
  if (e.length === 0) return {
    kind: "none"
  };
  if (t) {
    let extension = e.find(item => item.deviceId === t);
    if (extension) return {
      kind: "select",
      extension: extension,
      reason: "persisted"
    };
  }
  if (e.length === 1) return {
    kind: "select",
    extension: e[0],
    reason: "only"
  };
  let r = n ? e.filter(item => n.has(item.deviceId)) : [],
    [extension_2, s] = r;
  if (extension_2 && !s && n?.get(extension_2.deviceId) === "live") return {
    kind: "select",
    extension: extension_2,
    reason: "local"
  };
  return {
    kind: "ask",
    candidates: [...r, ...e.filter(item => !r.includes(item))],
    localCount: r.length
  };
}
function RRt(e) {
  let t;
  try {
    t = e?.();
  } catch {
    return Promise.resolve(void 0);
  }
  if (!t) return Promise.resolve(void 0);
  return new Promise(n => {
    let r = setTimeout(() => n(void 0), Afi);
    t.then(i => {
      clearTimeout(r), n(i);
    }, () => {
      clearTimeout(r), n(void 0);
    });
  });
}
import { randomUUID as C } from "crypto";
import { promises as Xe } from "fs";
import { createConnection as an } from "net";
import { platform as cn } from "os";
import { dirname as ln } from "path";
var ct = ["permission_denied_user", "permission_prompt_timed_out", "permission_prompt_unavailable", "permission_handler_missing", "plan_rejected_user", "authentication_failed", "session_expired", "no_tabs_available", "domain_blocked", "category_lookup_error", "navigation_blocked", "navigation_blocked_mid_call", "tab_not_found", "security_check_failed", "site_not_permitted", "input_invalid", "coordinate_out_of_bounds", "ref_stale", "element_unsupported", "upload_caller_outdated", "injected_script_failed", "chrome_protected_page", "page_loading", "chrome_refused_page_access", "cdp_timeout", "debugger_attach_failed", "debugger_detached", "page_navigated_or_closed", "blocked_by_other_extension", "js_result_not_serializable", "js_permission_denied", "js_timeout", "js_execution_error", "js_exception", "computer_permission_denied", "computer_element_not_found", "computer_action_failed", "computer_exception", "get_page_text_permission_denied", "get_page_text_no_content", "get_page_text_script_error", "get_page_text_exception", "screenshot_bytes_unavailable", "find_permission_denied", "find_no_match", "find_exception", "navigate_permission_denied", "navigate_beforeunload_blocked", "navigate_exception", "tab_create_no_group", "tab_create_group_gone", "tab_create_exception", "tab_close_invalid_params", "tab_close_no_group", "tab_close_group_gone", "tab_close_not_found", "tab_close_not_in_group", "tab_close_beforeunload_blocked", "tab_close_still_open", "tab_close_exception", "batch_disabled", "batch_invalid_input", "batch_no_tools_context", "batch_tab_outside_group", "batch_cancelled", "batch_domain_blocked", "batch_navigation_blocked", "batch_unknown_tool", "batch_permission_required", "batch_exception", "batch_subaction_failed", "tabs_context_exception", "tool_execution_exception", "execution_error"],
  lt = new Map([["page_zoom_shortcut_unsupported", "computer_zoom_shortcut_unsupported"], ["navigate_blocked_domain", "domain_blocked"], ["navigate_category_lookup_error", "category_lookup_error"]]),
  dt = new Map([...ct.map(item => [item, item]), ...lt]),
  ut = new Set(["tool_execution_exception", "execution_error", "navigation_blocked_mid_call", "find_exception", "navigate_exception", "tab_create_exception", "tab_close_exception", "tabs_context_exception", "js_exception", "computer_action_failed", "computer_exception", "get_page_text_exception"]),
  P = String.raw`(?:No tab with id: \d+|Tab \d+ (?:no longer exists|is not in the same group))`,
  pt = [{
    pattern: /^Permission denied for JavaScript execution/,
    errorType: "js_permission_denied"
  }, {
    pattern: /^JavaScript execution error: Execution timeout: Code exceeded \d+-second limit$/,
    errorType: "js_timeout"
  }, {
    pattern: /^JavaScript execution error:/,
    errorType: "js_execution_error"
  }, {
    pattern: new RegExp(`^Failed to execute JavaScript: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to execute JavaScript:/,
    errorType: "js_exception"
  }],
  ft = [{
    pattern: /^Permission denied for this action/,
    errorType: "computer_permission_denied"
  }, {
    pattern: /^No element found with reference|^Error getting element coordinates|^Failed to (execute script to get|get) element coordinates/,
    errorType: "computer_element_not_found"
  }, {
    pattern: /^Error (clicking|hovering|scrolling|pressing key|performing drag|capturing)|^Failed to (type|scroll to element)/,
    errorType: "computer_action_failed"
  }, {
    pattern: /^"[^"]*" was not pressed: page zoom keyboard shortcuts are not supported/,
    errorType: "computer_zoom_shortcut_unsupported"
  }, {
    pattern: new RegExp(`^Failed to execute action: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to execute action:/,
    errorType: "computer_exception"
  }],
  gt = [{
    pattern: /^Permission denied for reading page content/,
    errorType: "get_page_text_permission_denied"
  }, {
    pattern: /^No semantic content element found|^Output exceeds \d+ character limit/,
    errorType: "get_page_text_too_large"
  }, {
    pattern: /^No text content found/,
    errorType: "get_page_text_no_content"
  }, {
    pattern: /^Failed to extract page text: No main text content found/,
    errorType: "get_page_text_no_content"
  }, {
    pattern: /^Failed to extract page text: (Script execution failed|Page script returned empty result)/,
    errorType: "get_page_text_script_error"
  }, {
    pattern: new RegExp(`^Failed to extract page text: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to extract page text:/,
    errorType: "get_page_text_exception"
  }],
  ht = [{
    pattern: /^Permission denied for reading pages on this domain/,
    errorType: "find_permission_denied"
  }, {
    pattern: /^No matching elements found$/,
    errorType: "find_no_match"
  }, {
    pattern: new RegExp(`^Failed to find element: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to find element:/,
    errorType: "find_exception"
  }],
  mt = [{
    pattern: /^Navigation to this domain is not allowed/,
    errorType: "navigate_permission_denied"
  }, {
    pattern: /^Navigation was blocked by a "Leave site\?" dialog/,
    errorType: "navigate_beforeunload_blocked"
  }, {
    pattern: new RegExp(`^Failed to navigate: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to navigate:/,
    errorType: "navigate_exception"
  }],
  pattern = /^This session has no tab group of its own|^No MCP tab group exists/,
  pattern_2 = /^(This session's|The MCP) tab group no longer exists/,
  yt = [{
    pattern: pattern,
    errorType: "tab_create_no_group"
  }, {
    pattern: pattern_2,
    errorType: "tab_create_group_gone"
  }, {
    pattern: new RegExp(`^Failed to create tab: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to create tab:/,
    errorType: "tab_create_exception"
  }],
  _t = [{
    pattern: /^Expected an object with a tabId integer parameter|^Missing required parameter tabId|^tabId must be an integer/,
    errorType: "tab_close_invalid_params"
  }, {
    pattern: pattern,
    errorType: "tab_close_no_group"
  }, {
    pattern: pattern_2,
    errorType: "tab_close_group_gone"
  }, {
    pattern: /^Tab \d+ does not exist/,
    errorType: "tab_close_not_found"
  }, {
    pattern: /^Tab \d+ is not in this session's tab group/,
    errorType: "tab_close_not_in_group"
  }, {
    pattern: /^Tab \d+ was not closed because its page asked/,
    errorType: "tab_close_beforeunload_blocked"
  }, {
    pattern: /^Tab \d+ is still open/,
    errorType: "tab_close_still_open"
  }, {
    pattern: new RegExp(`^Failed to close tab: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to close tab:/,
    errorType: "tab_close_exception"
  }],
  wt = [{
    pattern: new RegExp(`^Failed to query tabs: ${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Failed to query tabs:/,
    errorType: "tabs_context_exception"
  }],
  bt = [{
    pattern: /^Permission denied by user\. Domain transition denied/,
    errorType: "navigation_blocked"
  }, {
    pattern: /^Cannot access this page\. Claude cannot assist/,
    errorType: "navigation_blocked"
  }, {
    pattern: /^Permission denied by user/,
    errorType: "permission_denied_user"
  }, {
    pattern: /^No response to the Claude in Chrome permission prompt/,
    errorType: "permission_prompt_timed_out"
  }, {
    pattern: /^The Claude in Chrome permission prompt window couldn't be opened/,
    errorType: "permission_prompt_unavailable"
  }, {
    pattern: /^Permission required but no handler/,
    errorType: "permission_handler_missing"
  }, {
    pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Please check your login status/,
    errorType: "authentication_failed"
  }, {
    pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Open the Claude in Chrome side panel/,
    errorType: "session_expired"
  }, {
    pattern: /^Authentication failed\. The extension may need to be re-authenticated/,
    errorType: "authentication_failed"
  }, {
    pattern: /^No tabs? available/,
    errorType: "no_tabs_available"
  }, {
    pattern: /^This site is blocked/,
    errorType: "domain_blocked"
  }, {
    pattern: /^This site is not allowed due to safety restrictions/,
    errorType: "domain_blocked"
  }, {
    pattern: /^Could not verify this site's safety category\. Blocking as a precaution/,
    errorType: "category_lookup_error"
  }, {
    pattern: /^Claude in Chrome is turned off/,
    errorType: "domain_blocked"
  }, {
    pattern: new RegExp(`^Tab \\d+ (?:no longer exists|is not in Claude's tab group for this session)|^${P}`),
    errorType: "tab_not_found"
  }, {
    pattern: /^Security check failed|^Unable to verify current URL for security check|^Origin mismatch:/,
    errorType: "security_check_failed"
  }],
  kt = new Map([["javascript_tool", pt], ["computer", ft], ["get_page_text", gt], ["find", ht], ["navigate", mt], ["tabs_create_mcp", yt], ["tabs_close_mcp", _t], ["tabs_context_mcp", wt]]);
function akn(e, t) {
  let n = kt.get(e);
  if (n) {
    for (let {
      pattern: pattern_3,
      errorType: errorType
    } of n) if (pattern_3.test(t)) return errorType;
  }
  for (let {
    pattern: pattern_4,
    errorType: errorType_2
  } of bt) if (pattern_4.test(t)) return errorType_2;
  return "unclassified_tool_error";
}
function sui(e, t, n) {
  let r = typeof n === "string" ? dt.get(n) : void 0;
  if (r && !ut.has(r)) return r;
  let i = akn(e, t);
  return i === "unclassified_tool_error" ? r ?? i : i;
}
function M4t(e) {
  let t = e?.content;
  if (typeof t === "string" && t) return t;
  if (Array.isArray(t)) for (let n of t) {
    let r = n?.text;
    if (typeof r === "string" && r) return r;
  }
  return "Unknown error";
}
import { randomUUID as xt } from "crypto";
class SocketConnectionError extends Error {
  constructor(e) {
    super(e);
    this.name = "SocketConnectionError";
  }
}
class ToolCallLostError extends Error {
  constructor(e) {
    super(e);
    this.name = "ToolCallLostError";
  }
}
var ae = ["no_target", "send_failed", "timeout"],
  lkn = "toolCallFailureCause",
  dkn = /^[A-Za-z0-9-]{1,64}$/;
function Z5r(e = "win32") {
  return e === "darwin" ? "macOS" : e === "win32" ? "Windows" : "Linux";
}
var Pt = 30000;
function vt(e) {
  return Math.min(typeof e === "number" && Number.isFinite(e) && e > 0 ? e : n9r, xfi);
}
function Et(e) {
  let t = typeof e === "object" && e !== null ? e : {};
  if (t.ok === !0) return {
    ok: !0,
    response: t.response
  };
  let error = ae.find(item => item === t.error) ?? "send_failed";
  return {
    ok: !1,
    error: error,
    ...(error === "no_target" && t.detail === "not_allowlisted" && {
      detail: "not_allowlisted"
    })
  };
}
function yrr(e, t) {
  if (t) return t;
  if (!e.getExternalRelayConfig) return;
  return e.getExternalRelayConfig() ?? {
    extensionIds: []
  };
}
class RelayNotSentError extends Error {
  constructor(cause) {
    super(cause instanceof Error ? cause.message : String(cause), {
      cause: cause
    });
    this.name = "RelayNotSentError";
  }
}
class _rr {
  pending = new Map();
  begin(e, t, n) {
    return new Promise(resolve => {
      let i = t + Pt,
        timer = setTimeout(() => {
          if (this.pending.delete(e)) n?.(), resolve({
            ok: !1,
            error: "timeout"
          });
        }, i);
      this.pending.set(e, {
        resolve: resolve,
        timer: timer,
        deadline: Date.now() + i
      });
    });
  }
  has(e) {
    return this.pending.has(e);
  }
  get size() {
    return this.pending.size;
  }
  msUntilDrained() {
    let e = 0;
    for (let {
      deadline: deadline
    } of this.pending.values()) e = Math.max(e, deadline);
    return Math.max(0, e - Date.now());
  }
  settle(e, t) {
    return this.finish(e, Et(t));
  }
  fail(e, error_2, detail) {
    return this.finish(e, {
      ok: !1,
      error: error_2,
      ...(detail !== void 0 && {
        detail: detail
      })
    });
  }
  drain(e) {
    let t = [...this.pending.keys()];
    for (let n of t) this.fail(n, e);
    return t.length;
  }
  finish(e, t) {
    let n = this.pending.get(e);
    if (!n) return !1;
    return this.pending.delete(e), clearTimeout(n.timer), n.resolve(t), !0;
  }
}
async function e8r(e, t, n, r, payload, s) {
  let {
    logger: logger,
    serverName: serverName
  } = n;
  e.assertOpen();
  let c = e.refuse();
  if (c !== void 0) return logger.info(`[${serverName}] external_message refused: ${c.reason}`), {
    ok: !1,
    error: c.error,
    ...(c.detail !== void 0 && {
      detail: c.detail
    })
  };
  try {
    e.pushConfig();
  } catch {}
  let requestId = xt(),
    timeoutMs = vt(s?.timeoutMs),
    u = f => f instanceof Error ? f.message : String(f),
    m;
  try {
    let f = e.prepare({
      requestId: requestId,
      extensionIds: [...r],
      payload: payload,
      timeoutMs: timeoutMs
    });
    m = f instanceof Promise ? await f : f;
  } catch (f) {
    if (f instanceof SocketConnectionError) throw f;
    return logger.warn(`[${serverName}] external_message not sent: ${u(f)}`), {
      ok: !1,
      error: "no_target",
      detail: "not_sent"
    };
  }
  let h = t.begin(requestId, timeoutMs, () => logger.warn(`[${serverName}] external_message timed out locally (${requestId.slice(0, 8)})`));
  logger.debug(`[${serverName}] Sending external_message (${requestId.slice(0, 8)})`);
  try {
    e.send(m);
  } catch (error) {
    let _ = error instanceof RelayNotSentError;
    if (logger.warn(`[${serverName}] external_message ${_ ? "not sent" : "send failed"}: ${u(error)}`), _) t.fail(requestId, "no_target", "not_sent");else t.fail(requestId, "send_failed");
  }
  return h;
}
var Rt = ["pairing_disabled", "not_signed_in", "managed_org_missing", "malformed", "unknown_kid", "jwks_unavailable", "bad_signature", "wrong_issuer_or_audience", "expired", "not_yet_valid", "wrong_peer_kind", "key_binding_mismatch", "account_mismatch", "org_mismatch", "org_not_permitted", "bad_key_confirmation", "attest_failed", "rate_limited", "unsupported_peer", "unknown_pairing"],
  Tt = new Set(Rt);
class PairingError extends Error {
  code;
  httpStatus;
  peerOrg;
  constructor(e, t, n = {}) {
    super(t ? `${e}: ${t}` : e, {
      cause: n.cause
    });
    this.name = "PairingError", this.code = e, this.httpStatus = n.httpStatus, this.peerOrg = n.peerOrg;
  }
  wireCode() {
    return this.code === "attest_failed" && this.httpStatus !== void 0 ? `attest_failed:${this.httpStatus}` : this.code;
  }
}
function ce(e) {
  if (typeof e !== "string") return "malformed";
  let t = e.startsWith("attest_failed:") ? "attest_failed" : e;
  return Tt.has(t) ? t : "malformed";
}
function g(e) {
  return new PairingError("malformed", e);
}
class v {
  wall;
  mono;
  constructor(e = {}) {
    this.wall = e.now ?? (() => Date.now() / 1000), this.mono = e.monotonicNow ?? (() => globalThis.performance.now() / 1000);
  }
  stamp() {
    return {
      wall: this.wall(),
      mono: this.mono()
    };
  }
  since(e) {
    return Math.max(0, this.wall() - e.wall, this.mono() - e.mono);
  }
}
var St = new Set(["localhost", "127.0.0.1", "[::1]"]);
function B(e, t = !1) {
  let n;
  try {
    n = new URL(e);
  } catch {
    throw TypeError(`pairing apiOrigin is not a URL: ${e}`);
  }
  if (!(n.protocol === "https:" || t && n.protocol === "http:" && St.has(n.hostname)) || n.username || n.password || n.pathname !== "/" && n.pathname !== "" || n.search || n.hash) throw TypeError(`pairing apiOrigin must be a bare https origin: ${e}`);
  let issuer = `${n.origin}/api/oauth/local_pairing`;
  return {
    issuer: issuer,
    attest: `${issuer}/attest`,
    jwks: `${issuer}/jwks.json`
  };
}
var O = "claude-local-pairing/v1",
  textEncoder = new TextEncoder(),
  textDecoder = new TextDecoder("utf-8", {
    fatal: !0
  });
function w(e) {
  return textEncoder.encode(e);
}
function N(e) {
  return textDecoder.decode(e);
}
function S(...e) {
  return J(e);
}
function J(e) {
  let t = 0;
  for (let i of e) t += i.length;
  let uint8Array = new Uint8Array(t),
    r = 0;
  for (let i of e) uint8Array.set(i, r), r += i.length;
  return uint8Array;
}
function k(e) {
  let t = typeof e === "string" ? w(e) : e,
    uint8Array_2 = new Uint8Array(4 + t.length);
  return new DataView(uint8Array_2.buffer).setUint32(0, t.length, !1), uint8Array_2.set(t, 4), uint8Array_2;
}
function E(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function M(e) {
  if (!E(e)) throw RangeError("u64be: not a non-negative safe integer");
  let uint8Array_3 = new Uint8Array(8);
  return new DataView(uint8Array_3.buffer).setBigUint64(0, BigInt(e), !1), uint8Array_3;
}
var It = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  Ot = /^[A-Za-z0-9_-]*$/;
function x(e) {
  let t = e.length % 4;
  if (!Ot.test(e) || t === 1) throw SyntaxError("not unpadded base64url");
  if (t !== 0) {
    if ((It.indexOf(e.charAt(e.length - 1)) & (t === 2 ? 15 : 3)) !== 0) throw SyntaxError("non-canonical base64url");
  }
  let n = e.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((e.length + 3) % 4),
    r = atob(n),
    uint8Array_4 = new Uint8Array(r.length);
  for (let s = 0; s < r.length; s++) uint8Array_4[s] = r.charCodeAt(s);
  return uint8Array_4;
}
function b(e) {
  let t = "";
  for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode.apply(null, e.subarray(n, n + 32768));
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function le(e, t) {
  if (e.length !== t.length) return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++) n |= (e[r] ?? 0) ^ (t[r] ?? 0);
  return n === 0;
}
function de(e) {
  let uint8Array_5 = new Uint8Array(e);
  return globalThis.crypto.getRandomValues(uint8Array_5), uint8Array_5;
}
function y(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}
async function L(e) {
  return new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", y(e)));
}
var Nt = 87;
function ue(e) {
  if (typeof e !== "string" || e.length !== Nt) throw g("public_key must be 87 base64url chars");
  let t;
  try {
    t = x(e);
  } catch {
    throw g("public_key is not base64url");
  }
  if (t.length !== 65 || t[0] !== 4) throw g("public_key must be an uncompressed P-256 point");
  return t;
}
function Mt(e) {
  let t = b(e.subarray(1, 33)),
    n = b(e.subarray(33, 65));
  return `{"crv":"P-256","kty":"EC","x":"${t}","y":"${n}"}`;
}
async function K(e) {
  return b(await L(w(Mt(e))));
}
async function pe(e) {
  try {
    return await globalThis.crypto.subtle.importKey("raw", y(e), {
      name: "ECDH",
      namedCurve: "P-256"
    }, !1, []);
  } catch {
    throw g("public_key is not a point on P-256");
  }
}
async function fe(x_2, y_2) {
  return globalThis.crypto.subtle.importKey("jwk", {
    kty: "EC",
    crv: "P-256",
    x: x_2,
    y: y_2,
    ext: !0
  }, {
    name: "ECDSA",
    namedCurve: "P-256"
  }, !1, ["verify"]);
}
async function ge() {
  let keyPair = await globalThis.crypto.subtle.generateKey({
      name: "ECDH",
      namedCurve: "P-256"
    }, !1, ["deriveBits"]),
    uint8Array_6 = new Uint8Array(await globalThis.crypto.subtle.exportKey("raw", keyPair.publicKey));
  return {
    keyPair: keyPair,
    publicKey: b(uint8Array_6),
    jkt: await K(uint8Array_6)
  };
}
var H = 10;
function W(e, t, n) {
  let r,
    promise = new Promise((s, o) => {
      r = setTimeout(() => o(n()), t * 1000), r.unref?.();
    });
  return Promise.race([e, promise]).finally(() => clearTimeout(r));
}
var $t = 60,
  he = 300,
  me = 3600;
function ye(e, t, n) {
  let r = new RegExp(`(?:^|,)\\s*${t}=(\\d+)`).exec(e ?? "");
  return r ? Number(r[1]) : n;
}
function T(e, cause_2) {
  return new PairingError("jwks_unavailable", e, {
    cause: cause_2
  });
}
class G {
  opts;
  keys = new Map();
  fetchedAt;
  maxAge = he;
  staleIfError = me;
  flooredAt;
  inflight;
  clock;
  floor;
  timeoutSec;
  url;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.floor = $t, this.timeoutSec = e.timeoutSec ?? H, this.url = B(e.apiOrigin, e.allowLoopbackHttp).jwks;
  }
  async getKey(e) {
    let t = this.lookup(e);
    if (!t || this.age() > this.maxAge) {
      if (!this.inflight && !this.floored()) {
        if (!t) this.flooredAt = this.clock.stamp();
        this.inflight = this.fetch().finally(() => {
          this.inflight = void 0;
        });
      }
      await this.inflight, t = this.lookup(e);
    }
    if (t) return t;
    if (this.keys.size === 0) throw T("no verification keys");
    throw new PairingError("unknown_kid", e.slice(0, 32));
  }
  lookup(e) {
    return this.servable().get(e);
  }
  servable() {
    if (this.age() > this.maxAge + this.staleIfError) this.keys = new Map();
    return this.keys;
  }
  age() {
    return this.fetchedAt ? this.clock.since(this.fetchedAt) : 1 / 0;
  }
  floored() {
    return this.flooredAt !== void 0 && this.clock.since(this.flooredAt) < this.floor;
  }
  async fetch() {
    try {
      await this.load();
    } catch (error) {
      if (this.flooredAt = this.clock.stamp(), this.servable().size > 0) return;
      throw error instanceof PairingError ? error : T("fetch failed", error);
    }
  }
  async load() {
    let e = await W(this.get(), this.timeoutSec, () => T("timed out"));
    if (e.status !== 200) throw T(`HTTP ${e.status}`);
    let t;
    try {
      t = JSON.parse(e.text);
    } catch {
      throw T("not JSON");
    }
    let n = t?.keys;
    if (!Array.isArray(n)) throw T("no keys array");
    let r = new Map();
    for (let i of n) {
      if (i?.kty !== "EC" || i.crv !== "P-256" || typeof i.kid !== "string" || typeof i.x !== "string" || typeof i.y !== "string" || i.alg !== void 0 && i.alg !== "ES256" || i.use !== void 0 && i.use !== "sig") continue;
      try {
        r.set(i.kid, await fe(i.x, i.y));
      } catch {}
    }
    if (r.size === 0) throw T("no usable EC P-256 keys");
    this.maxAge = Math.max(ye(e.cacheControl, "max-age", he), this.floor), this.staleIfError = ye(e.cacheControl, "stale-if-error", me), this.keys = r, this.fetchedAt = this.clock.stamp();
  }
  async get() {
    let e = await this.opts.fetchImpl(this.url, {
        method: "GET",
        headers: {
          accept: "application/json",
          "cache-control": "no-cache"
        }
      }),
      status = e.status,
      cacheControl = e.headers.get("cache-control");
    return {
      status: status,
      cacheControl: cacheControl,
      text: status === 200 ? await e.text() : ""
    };
  }
}
function R(e) {
  if (e === null || typeof e === "boolean" || typeof e === "string") return JSON.stringify(e);
  if (typeof e === "number") {
    if (!Number.isFinite(e)) throw TypeError("canonicalJson: non-finite number");
    return JSON.stringify(e);
  }
  if (Array.isArray(e)) return "[" + e.map(item => R(item)).join(",") + "]";
  if (typeof e === "object") {
    let t = e;
    return "{" + Object.keys(t).filter(item => t[item] !== void 0).sort().map(item => JSON.stringify(item) + ":" + R(t[item])).join(",") + "}";
  }
  throw TypeError(`canonicalJson: unsupported ${typeof e}`);
}
function z(e) {
  let t = 0,
    n = a => {
      throw SyntaxError(`strict JSON: ${a} at ${t}`);
    },
    r = () => {
      while (t < e.length && ` 	
\r`.includes(e.charAt(t))) t++;
    },
    i = () => {
      let a = t;
      if (e[t] !== '"') n("expected string");
      t++;
      while (t < e.length && e[t] !== '"') {
        if (e[t] === "\\") t++;
        t++;
      }
      if (t >= e.length) n("unterminated string");
      return t++, JSON.parse(e.slice(a, t));
    },
    s = () => {
      r();
      let a = e[t];
      if (a === "{") {
        t++;
        let l = {},
          d = new Set();
        if (r(), e[t] === "}") return t++, l;
        for (;;) {
          r();
          let u = i();
          if (d.has(u)) n(`duplicate key ${JSON.stringify(u)}`);
          if (d.add(u), r(), e[t] !== ":") n("expected ':'");
          if (t++, Object.defineProperty(l, u, {
            value: s(),
            enumerable: !0,
            writable: !0,
            configurable: !0
          }), r(), e[t] === ",") {
            t++;
            continue;
          }
          if (e[t] === "}") return t++, l;
          n("expected ',' or '}'");
        }
      }
      if (a === "[") {
        t++;
        let l = [];
        if (r(), e[t] === "]") return t++, l;
        for (;;) {
          if (l.push(s()), r(), e[t] === ",") {
            t++;
            continue;
          }
          if (e[t] === "]") return t++, l;
          n("expected ',' or ']'");
        }
      }
      if (a === '"') return i();
      let c = /^(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/.exec(e.slice(t));
      if (!c) n("unexpected token");
      return t += c[0].length, JSON.parse(c[0]);
    },
    o = s();
  if (r(), t !== e.length) n("trailing data");
  return o;
}
var Ut = "local-pairing+jwt",
  Dt = 4096,
  Bt = 256;
function X(e) {
  if (typeof e !== "string" || e.length === 0 || e.length > Dt) throw g("assertion missing or too long");
  let t = e.split("."),
    [n, r, i] = t;
  if (t.length !== 3 || n === void 0 || r === void 0 || i === void 0) throw g("assertion is not a compact JWS");
  let s, payload_2, signature;
  try {
    s = z(N(x(n))), payload_2 = z(N(x(r))), signature = x(i);
  } catch (error) {
    throw g(`assertion does not decode: ${String(error)}`);
  }
  if (s === null || typeof s !== "object" || Array.isArray(s) || payload_2 === null || typeof payload_2 !== "object" || Array.isArray(payload_2)) throw g("assertion header/payload are not objects");
  let c = s;
  if (c.alg !== "ES256") throw new PairingError("bad_signature", `alg ${JSON.stringify(c.alg)} is not ES256`);
  if ("crit" in c) throw g("crit header is not accepted");
  if (c.typ !== Ut) throw new PairingError("wrong_issuer_or_audience", `typ ${JSON.stringify(c.typ)}`);
  if (typeof c.kid !== "string" || c.kid.length === 0 || c.kid.length > Bt) throw g("kid missing or too long");
  if (signature.length !== 64) throw new PairingError("bad_signature", "ES256 signature must be exactly 64 bytes");
  return {
    header: {
      kid: c.kid
    },
    payload: payload_2,
    signingInput: w(`${n}.${r}`),
    signature: signature
  };
}
async function _e(e, t) {
  if (!(await globalThis.crypto.subtle.verify({
    name: "ECDSA",
    hash: "SHA-256"
  }, t, y(e.signature), y(e.signingInput)))) throw new PairingError("bad_signature");
}
var Lt = ["desktop", "chrome_extension"];
function qt(e) {
  return Lt.includes(e);
}
var we = "claude-local-pairing/v1",
  be = 60,
  ke = 301,
  Ft = 30;
function q(e, t) {
  let n = e[t];
  if (typeof n !== "string" || n.length === 0) throw g(`claim ${t} missing`);
  return n;
}
function xe(e, t) {
  let n = e[t];
  if (typeof n !== "number" || !Number.isFinite(n)) throw g(`claim ${t} missing`);
  return n;
}
function Pe(e) {
  let client_kind = q(e, "client_kind");
  if (!qt(client_kind)) throw new PairingError("wrong_peer_kind", client_kind);
  let cnf = e.cnf;
  if (!cnf || typeof cnf !== "object" || Array.isArray(cnf) || typeof cnf.jkt !== "string") throw g("cnf.jkt missing");
  return {
    iss: q(e, "iss"),
    sub: q(e, "sub"),
    org: q(e, "org"),
    azp: typeof e.azp === "string" ? e.azp : void 0,
    client_kind: client_kind,
    hybrid: e.hybrid === !0,
    cnf: {
      jkt: cnf.jkt
    },
    iat: xe(e, "iat"),
    exp: xe(e, "exp"),
    jti: typeof e.jti === "string" ? e.jti : void 0
  };
}
async function ve(e, t, n) {
  let r = X(e),
    peerRaw = ue(t),
    s = await n.jwks.getKey(r.header.kid);
  await _e(r, s);
  let claims = Pe(r.payload),
    aud = r.payload.aud,
    c = aud === we || Array.isArray(aud) && aud.includes(we);
  if (claims.iss !== n.expectedIssuer || !c) throw new PairingError("wrong_issuer_or_audience");
  if (claims.exp - claims.iat > ke) throw new PairingError("expired", `assertion lifetime exceeds ${ke} s`);
  if (claims.client_kind !== n.expectedKind) throw new PairingError("wrong_peer_kind", claims.client_kind);
  if ((await K(peerRaw)) !== claims.cnf.jkt) throw new PairingError("key_binding_mismatch");
  return {
    claims: claims,
    peerRaw: peerRaw
  };
}
function Ee(e, t) {
  if (e.iat > t + be) throw new PairingError("not_yet_valid");
  if (e.exp + be <= t) throw new PairingError("expired");
}
var jt = 5,
  Jt = 60;
class V {
  opts;
  current;
  minting;
  lastFailure;
  epoch = 0;
  clock;
  timeoutSec;
  urls;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.timeoutSec = e.timeoutSec ?? H, this.urls = B(e.apiOrigin, e.allowLoopbackHttp);
  }
  get issuer() {
    return this.urls.issuer;
  }
  serverNow(e) {
    return e.claims.iat + this.clock.since(e.minted);
  }
  async get() {
    let current = this.current;
    if (current && current.claims.exp - Ft > this.serverNow(current)) return current;
    let lastFailure = this.lastFailure;
    if (lastFailure && this.clock.since(lastFailure.at) < lastFailure.floor) throw lastFailure.error;
    let n = this.minting ??= this.mint().finally(() => {
      if (this.minting === n) this.minting = void 0;
    });
    return n;
  }
  isCurrent(e) {
    return e.epoch === this.epoch;
  }
  clear() {
    this.epoch += 1, this.current = void 0, this.minting = void 0, this.lastFailure = void 0;
  }
  async mint() {
    let epoch = this.epoch;
    try {
      let t = await W(this.attest(epoch), this.timeoutSec, () => new PairingError("attest_failed", "timed out", {
        httpStatus: 0
      }));
      if (epoch !== this.epoch) throw new PairingError("not_signed_in", "identity changed during attest");
      return this.current = t, this.lastFailure = void 0, t;
    } catch (t) {
      let error_3 = t instanceof PairingError ? t : new PairingError("attest_failed", "unexpected", {
        cause: t
      });
      if (epoch === this.epoch && error_3.code !== "not_signed_in") {
        let r = error_3.code === "rate_limited" || error_3.code === "pairing_disabled";
        this.lastFailure = {
          error: error_3,
          at: this.clock.stamp(),
          floor: r ? Jt : jt
        };
      }
      throw error_3;
    }
  }
  async attest(epoch_2) {
    let t;
    try {
      t = await this.opts.getBearer();
    } catch (c) {
      throw new PairingError("not_signed_in", "bearer unavailable", {
        cause: c
      });
    }
    if (!t) throw new PairingError("not_signed_in");
    let eph = await ge(),
      minted = this.clock.stamp(),
      i;
    try {
      i = await this.opts.fetchImpl(this.urls.attest, {
        method: "POST",
        headers: {
          authorization: `Bearer ${t}`,
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          public_key: eph.publicKey
        })
      });
    } catch (c) {
      throw new PairingError("attest_failed", "fetch failed", {
        httpStatus: 0,
        cause: c
      });
    }
    if (i.status === 404) throw new PairingError("pairing_disabled", "attest is not enabled", {
      httpStatus: 404
    });
    if (i.status === 429) throw new PairingError("rate_limited", void 0, {
      httpStatus: 429
    });
    if (i.status !== 200) throw new PairingError("attest_failed", `HTTP ${i.status}`, {
      httpStatus: i.status
    });
    let s;
    try {
      s = JSON.parse(await i.text());
    } catch {
      throw new PairingError("attest_failed", "response is not JSON", {
        httpStatus: 200
      });
    }
    let assertion = s?.assertion;
    if (typeof assertion !== "string") throw new PairingError("attest_failed", "response lacks assertion", {
      httpStatus: 200
    });
    let claims_2 = Pe(X(assertion).payload);
    if (claims_2.cnf.jkt !== eph.jkt) throw new PairingError("key_binding_mismatch", "server bound a different key");
    return {
      assertion: assertion,
      claims: claims_2,
      eph: eph,
      minted: minted,
      epoch: epoch_2
    };
  }
}
async function Re(e, t) {
  let {
    mac: mac,
    ...r
  } = t;
  return L(S(k(O), k(w(R(e))), k(w(R(r)))));
}
async function Te(e, t) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
    name: "ECDH",
    public: t
  }, e, 256));
}
async function U(e, t, n, r) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
    name: "HKDF",
    hash: "SHA-256",
    salt: y(t),
    info: y(w(`${O} ${n}`))
  }, e, r * 8));
}
async function Se(e, th) {
  let n = await globalThis.crypto.subtle.importKey("raw", y(e), "HKDF", !1, ["deriveBits"]),
    [kcD, kcE, kD2e, kE2d, sid] = await Promise.all([U(n, th, "confirm d", 32), U(n, th, "confirm e", 32), U(n, th, "aead d2e", 32), U(n, th, "aead e2d", 32), U(n, th, "sid", 16)]);
  return {
    th: th,
    kcD: kcD,
    kcE: kcE,
    kD2e: kD2e,
    kE2d: kE2d,
    sid: sid
  };
}
async function Y(e, t) {
  let n = await globalThis.crypto.subtle.importKey("raw", y(e), {
    name: "HMAC",
    hash: "SHA-256"
  }, !1, ["sign"]);
  return new Uint8Array(await globalThis.crypto.subtle.sign("HMAC", n, y(t)));
}
function Ce(e) {
  return Y(e.kcE, e.th);
}
function Ae(e) {
  return Y(e.kcD, e.th);
}
function Ie(e) {
  return Y(e.kcE, S(e.th, w("done")));
}
var Kt = ["execute_tool", "tool_response", "notification:permission_request", "notification:sealed_broadcast", "notification:inference_request", "notification:inference_response"],
  Ht = 3,
  Wt = 33554432,
  Gt = 60,
  zt = /\p{Surrogate}/u,
  Xt = new Set(Kt);
function Oe(e) {
  return typeof e === "string" && Xt.has(e);
}
function Ne(e) {
  return e === void 0 || typeof e === "string" && e !== "" && !zt.test(e);
}
function Vt(e) {
  if (e === void 0) return !0;
  let t = e;
  return !!t && typeof t === "object" && E(t.n) && t.n >= 1 && E(t.i) && t.i < t.n;
}
function Me(e, t, n, r, i, s, o) {
  let a = M(n);
  return {
    name: "AES-GCM",
    iv: y(S(new Uint8Array(4), a)),
    additionalData: y(S(k(O), k(e), k(t), a, k(r), k(i ?? ""), M(s), ...(o ? [k("chunk"), M(o.i), M(o.n)] : []))),
    tagLength: 128
  };
}
function $e(e) {
  try {
    let t = Math.floor(e());
    return E(t) ? t : Number.NaN;
  } catch {
    return Number.NaN;
  }
}
async function Ue(e, t) {
  return globalThis.crypto.subtle.importKey("raw", y(e), {
    name: "AES-GCM"
  }, !1, [t]);
}
var De = () => {
  return;
};
function Be(e) {
  try {
    return {
      ok: !0,
      inner: JSON.parse(N(e))
    };
  } catch {
    return {
      ok: !1,
      reason: "malformed"
    };
  }
}
class F {
  sid;
  dirOut;
  kOut;
  kIn;
  clock;
  sidB64;
  ctrOut = 0;
  ctrIn = -1;
  tagFailures = 0;
  tornDown = !1;
  q = {
    send: Promise.resolve(),
    recv: Promise.resolve()
  };
  partial;
  stats = {
    gaps: 0,
    replays: 0,
    stale: 0,
    badTags: 0
  };
  born;
  constructor(e, t, n, r, i) {
    this.sid = e;
    this.dirOut = t;
    this.kOut = n;
    this.kIn = r;
    this.clock = i;
    this.sidB64 = b(e), this.born = i.stamp();
  }
  static async create(e, t, n = {}) {
    let [r, i, s] = e === "desktop" ? [t.kD2e, t.kE2d, "d2e"] : [t.kE2d, t.kD2e, "e2d"];
    return new F(t.sid, s, await Ue(r, "encrypt"), await Ue(i, "decrypt"), n.clock ?? new v());
  }
  ownSeconds() {
    return $e(() => this.born.wall + this.clock.since(this.born));
  }
  get dirIn() {
    return this.dirOut === "d2e" ? "e2d" : "d2e";
  }
  get isTornDown() {
    return this.tornDown;
  }
  enqueue(e, t) {
    let n = this.q[e].then(t, t);
    return this.q[e] = n.then(De, De), n;
  }
  seal(e, t, n) {
    return this.sealFrames(e, t, n, void 0).then(([r]) => {
      if (r === void 0) throw Error("seal: no envelope produced");
      return r;
    });
  }
  sealChunked(e, t, n, r) {
    if (!Number.isSafeInteger(r) || r < 1) return Promise.reject(RangeError("sealChunked: maxChunkBytes must be a positive integer"));
    return this.sealFrames(e, t, n, r);
  }
  sealFrames(e, t, n, r) {
    if (this.tornDown) return Promise.reject(Error("sealed channel torn down"));
    if (!Oe(e)) return Promise.reject(TypeError("seal: unknown frame kind"));
    if (!Ne(t)) return Promise.reject(TypeError("seal: toolUseId must be a non-empty well-formed string"));
    let i;
    try {
      let d = JSON.stringify(n);
      if (typeof d !== "string") throw TypeError("not JSON-serialisable");
      i = w(d);
    } catch (d) {
      return Promise.reject(TypeError("seal: inner is not JSON-serialisable", {
        cause: d
      }));
    }
    let s = r !== void 0,
      o = r ?? i.length,
      n_2 = Math.ceil(i.length / o),
      t_2 = $e(this.clock.wall);
    if (!E(t_2)) return Promise.reject(Error("seal: clock is not a usable time"));
    let ctrOut = this.ctrOut;
    if (this.ctrOut = ctrOut + n_2, !Number.isSafeInteger(this.ctrOut)) return this.tornDown = !0, Promise.reject(Error("sealed channel counter exhausted"));
    return this.enqueue("send", async () => {
      let d = [];
      for (let i_2 = 0; i_2 < n_2; i_2++) {
        let chunk = s ? {
            i: i_2,
            n: n_2
          } : void 0,
          uint8Array_7 = new Uint8Array(await globalThis.crypto.subtle.encrypt(Me(this.dirOut, this.sid, ctrOut + i_2, e, t, t_2, chunk), this.kOut, y(i.subarray(i_2 * o, (i_2 + 1) * o))));
        if (this.tornDown) throw Error("sealed channel torn down");
        d.push({
          sid: this.sidB64,
          ctr: ctrOut + i_2,
          t: t_2,
          ct: b(uint8Array_7),
          ...(chunk && {
            chunk: chunk
          })
        });
      }
      return d;
    });
  }
  open(e, t, n) {
    return this.enqueue("recv", () => this.openNow(e, t, n));
  }
  async openNow(e, t, n) {
    if (this.tornDown) return {
      ok: !1,
      reason: "torn_down"
    };
    let r = n;
    if (!r || typeof r !== "object" || typeof r.sid !== "string" || typeof r.ct !== "string" || !E(r.t) || !Oe(e) || !Ne(t) || !Vt(r.chunk)) return {
      ok: !1,
      reason: "malformed"
    };
    let {
      t: t_3,
      chunk: chunk_2
    } = r;
    if (r.sid !== this.sidB64) return {
      ok: !1,
      reason: "foreign_sid"
    };
    let ctr = r.ctr;
    if (!E(ctr)) return {
      ok: !1,
      reason: "malformed"
    };
    if (ctr <= this.ctrIn) return this.stats.replays += 1, {
      ok: !1,
      reason: "replay"
    };
    if (!(Math.abs(this.ownSeconds() - t_3) <= Gt)) return this.stats.stale += 1, {
      ok: !1,
      reason: "stale"
    };
    let c;
    try {
      c = x(r.ct);
    } catch {
      return {
        ok: !1,
        reason: "malformed"
      };
    }
    if (c.length < 16) return {
      ok: !1,
      reason: "malformed"
    };
    let l;
    try {
      l = await globalThis.crypto.subtle.decrypt(Me(this.dirIn, this.sid, ctr, e, t, t_3, chunk_2), this.kIn, y(c));
    } catch {
      if (this.stats.badTags += 1, ++this.tagFailures >= Ht) this.tearDown();
      return {
        ok: !1,
        reason: "bad_tag"
      };
    }
    if (this.tornDown) return {
      ok: !1,
      reason: "torn_down"
    };
    if (ctr > this.ctrIn + 1) this.stats.gaps += ctr - this.ctrIn - 1;
    this.ctrIn = ctr;
    let uint8Array_8 = new Uint8Array(l);
    if (!chunk_2) return this.partial = void 0, Be(uint8Array_8);
    return this.reassemble(ctr, chunk_2, uint8Array_8);
  }
  reassemble(firstCtr, t, n) {
    let partial = this.partial;
    if (this.partial = void 0, t.i === 0) partial = {
      firstCtr: firstCtr,
      n: t.n,
      parts: [],
      bytes: 0
    };else if (!partial || firstCtr !== partial.firstCtr + partial.parts.length) return {
      ok: !1,
      reason: "bad_chunk"
    };
    if (partial.bytes + n.length > Wt) return {
      ok: !1,
      reason: "bad_chunk"
    };
    if (partial.parts.push(n), partial.bytes += n.length, partial.parts.length < partial.n) return this.partial = partial, {
      ok: !1,
      reason: "partial"
    };
    return Be(J(partial.parts));
  }
  tearDown() {
    this.tornDown = !0, this.partial = void 0;
  }
}
var v_2 = 1,
  Yt = 30,
  Fe = {
    offer: "instance_hint",
    accept: "instance"
  },
  je = 32;
function Z(e, t) {
  return e.toLowerCase() === t.toLowerCase();
}
function Zt(e, t, n) {
  if (t.sub !== e.sub) throw new PairingError("account_mismatch");
  if (n.requiredOrg !== void 0) {
    if (!Z(e.org, n.requiredOrg)) throw new PairingError("org_not_permitted", "own sign-in is not in the configured org");
  }
  let r = t.hybrid && t.client_kind === "desktop",
    i = !n.allowedOrgs || n.allowedOrgs.some(item => Z(item, t.org));
  if (r && !i) throw new PairingError("org_not_permitted", "the managing Desktop's org is outside the configured list");
  if ((n.requiredOrg !== void 0 || r || n.hybridSignIn) && !Z(t.org, e.org)) throw new PairingError("org_mismatch", void 0, i ? {
    peerOrg: t.org
  } : {});
}
function ee(e, t, n) {
  if (typeof e !== "string") throw g(`${t} missing`);
  let r;
  try {
    r = x(e);
  } catch {
    throw g(`${t} not base64url`);
  }
  if (n !== void 0 && r.length !== n) throw g(`${t} must be ${n} bytes`);
  return r;
}
function Je(e, t) {
  let n = e;
  if (!n || typeof n !== "object" || n.msg !== t) throw g(`pair_${t} malformed`);
  if (n.v !== v_2) {
    let r = typeof n.v === "number" ? String(n.v) : typeof n.v;
    throw g(`unsupported v ${r}`);
  }
  return n;
}
function Ke(e, t) {
  if (e === void 0) return;
  if (!e || typeof e !== "object" || Array.isArray(e) || R(e).length > 1024) throw g(`${t} must be a small object`);
  return e;
}
function Qt(e, t) {
  let n = Fe[t],
    hello = Je(e, t);
  try {
    R(hello);
  } catch {
    throw g(`pair_${t} is not canonical JSON`);
  }
  ee(hello.nonce, "nonce", je);
  let instance = Ke(hello[n], n);
  return {
    hello: hello,
    instance: instance
  };
}
function en(msg, t, n) {
  let r = {
    msg: msg,
    v: v_2,
    assertion: t.assertion,
    public_key: t.eph.publicKey,
    nonce: b(de(je))
  };
  if (n) r[Fe[msg]] = n;
  return r;
}
function tn(e, t) {
  let n = Je(e, t);
  if (typeof n.sid !== "string") throw g(`pair_${t} sid missing`);
  return {
    sid: n.sid,
    mac: ee(n.mac, `pair_${t} mac`)
  };
}
function nn(e, t) {
  if (e === void 0) return;
  try {
    return Ke(JSON.parse(JSON.stringify(e)), t);
  } catch (n) {
    throw TypeError(`${t} must be a small JSON object`, {
      cause: n
    });
  }
}
function He(e, t) {
  if (!e.isCurrent(t)) throw new PairingError("not_signed_in", "identity changed during the handshake");
}
function Le(e, t, n) {
  if (!le(e, t)) throw new PairingError("bad_key_confirmation", n);
}
function qe(e, t, n) {
  if (e.since(t) > Yt) throw new PairingError("expired", `${n} took too long`);
}
async function rn(e, t, clock, r) {
  let channel = await F.create(e, r.secrets, {
    clock: clock
  });
  return He(t, r.own), {
    sidB64: channel.sidB64,
    channel: channel,
    own: r.own.claims,
    peer: r.peer,
    peerInstance: r.peerInstance,
    establishedAt: clock.wall()
  };
}
class te {
  opts;
  phase = {
    is: "fresh"
  };
  clock;
  instanceHint;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.instanceHint = nn(e.instanceHint, "instanceHint");
  }
  enter(e, t) {
    let phase = this.phase;
    if (phase.is !== e) throw g(t);
    return this.phase = {
      is: "busy"
    }, phase;
  }
  async step(e) {
    try {
      let {
        next: next,
        out: out
      } = await e();
      return this.phase = next, out;
    } catch (error) {
      throw this.phase = {
        is: "spent"
      }, error;
    }
  }
  async createOffer() {
    return this.enter("fresh", "createOffer already called; use a new Initiator"), this.step(async () => {
      let own = await this.opts.source.get(),
        t = en("offer", own, this.instanceHint);
      return {
        next: {
          is: "offered",
          offer: t,
          own: own,
          at: this.clock.stamp()
        },
        out: t
      };
    });
  }
  async onAccept(e) {
    let t = this.enter("offered", "no offer outstanding");
    return this.step(async () => {
      qe(this.clock, t.at, "pair_accept");
      let {
          hello: hello_2,
          instance: r
        } = Qt(e, "accept"),
        i = ee(hello_2.mac, "pair_accept mac"),
        {
          source: source,
          jwks: jwks,
          policy: policy
        } = this.opts,
        {
          claims: c,
          peerRaw: peerRaw_2
        } = await ve(hello_2.assertion, hello_2.public_key, {
          jwks: jwks,
          expectedIssuer: source.issuer,
          expectedKind: "chrome_extension"
        });
      Ee(c, source.serverNow(t.own)), Zt(t.own.claims, c, policy);
      let d = await pe(peerRaw_2),
        u = await Te(t.own.eph.keyPair.privateKey, d),
        m = await Re(t.offer, hello_2),
        secrets = await Se(u, m);
      Le(i, await Ce(secrets));
      let f = await Ae(secrets);
      He(source, t.own);
      let _ = b(secrets.sid);
      return {
        next: {
          is: "finishing",
          own: t.own,
          secrets: secrets,
          sidB64: _,
          peer: c,
          peerInstance: r,
          at: this.clock.stamp()
        },
        out: {
          msg: "finish",
          v: v_2,
          sid: _,
          mac: b(f)
        }
      };
    });
  }
  async onDone(e) {
    let t = this.enter("finishing", "no finish outstanding");
    return this.step(async () => {
      qe(this.clock, t.at, "pair_done");
      let n = tn(e, "done");
      if (n.sid !== t.sidB64) throw new PairingError("bad_key_confirmation", "pair_done sid differs");
      Le(n.mac, await Ie(t.secrets), "pair_done mac");
      let out_2 = await rn("desktop", this.opts.source, this.clock, t);
      return {
        next: {
          is: "spent"
        },
        out: out_2
      };
    });
  }
}
function We(e) {
  let t = e;
  if (!t || typeof t !== "object" || t.msg !== "refuse") return;
  return ce(t.code);
}
var weakMap = new WeakMap();
function Ge(e) {
  return weakMap.get(e);
}
function ze(e) {
  let t = weakMap.get(e);
  if (!t) t = {
    source: new V(e),
    jwks: new G(e)
  }, weakMap.set(e, t);
  return t;
}
function on(e) {
  return typeof e === "string" && /^category[0-9a-z_]{1,32}$/.test(e) ? e : void 0;
}
function sn(e) {
  let {
    _perActionOnly: _perActionOnly,
    _privateHostReadAlwaysOffer: _privateHostReadAlwaysOffer,
    _privateHostReadAlways: _privateHostReadAlways,
    ...i
  } = e;
  return i;
}
function t8r(e, t) {
  return {
    toolUseId: t.toolUseId,
    requestId: t.requestId,
    toolType: typeof e.tool_type === "string" ? e.tool_type : "unknown",
    url: typeof e.url === "string" ? e.url : "",
    actionData: e.action_data && typeof e.action_data === "object" ? sn(e.action_data) : void 0,
    category: on(e.category)
  };
}
function n8r(e) {
  return {
    ...(e?.permissionMode ? {
      permission_mode: e.permissionMode
    } : {}),
    ...(e?.allowedDomains?.length ? {
      allowed_domains: e.allowedDomains
    } : {}),
    ...(e?.onPermissionRequest ? {
      handle_permission_prompts: !0
    } : {}),
    ...(e?.sessionScope ? {
      session_scope: e.sessionScope
    } : {})
  };
}
function $K(e, t = 64) {
  return JSON.stringify(String(e).slice(0, t));
}
class ToolCallSupersededError extends Error {
  constructor(e) {
    super(e);
    this.name = "ToolCallSupersededError";
  }
}
class NoExtensionConnectedError extends Error {
  constructor(e) {
    super(e);
    this.name = "NoExtensionConnectedError";
  }
}
class ToolCallTimeoutError extends Error {
  routingAckReceived;
  constructor(e, t) {
    super(e);
    this.name = "ToolCallTimeoutError", this.routingAckReceived = t?.routingAckReceived;
  }
}
class ExtensionDisconnectedMidCallError extends Error {
  routingAckReceived;
  constructor(e, t) {
    super(e);
    this.name = "ExtensionDisconnectedMidCallError", this.routingAckReceived = t?.routingAckReceived;
  }
}
class BrowserChangedError extends Error {
  constructor(e) {
    super(e);
    this.name = "BrowserChangedError";
  }
}
class RequestTooLargeError extends Error {
  constructor(e) {
    super(e);
    this.name = "RequestTooLargeError";
  }
}
function Ve(e) {
  return "result" in e || "error" in e;
}
function Ye(e) {
  return "method" in e && typeof e.method === "string";
}
var j = 5000,
  dn = 15000,
  un = 15000,
  Ze = 28800000,
  Qe = 1000,
  et = 20000,
  tt = 5000,
  pn = 1e4,
  I = 1032192,
  fn = 1024,
  re = Math.floor((I - fn) * 3 / 4) - 16;
class PeerRefusedPairing extends PairingError {
  constructor(e, httpStatus) {
    super(e, "peer-reported", {
      httpStatus: httpStatus
    });
    this.name = "PeerRefusedPairing";
  }
}
class HandshakeTimeout extends Error {
  which;
  constructor(e) {
    super(e === "reply" ? "No reply to a pairing message" : "Our attest/JWKS step overran while pairing");
    this.which = e;
    this.name = "HandshakeTimeout";
  }
}
function nt(e, t) {
  let result = e.result;
  if (result && typeof result === "object" && result.local_pairing) {
    if (result.local_pairing.msg === t) return result.local_pairing;
    throw new PairingError("malformed", `expected ${t}`);
  }
  let r = e.error;
  if (r && typeof r === "object" && r.local_pairing) {
    let i = We(r.local_pairing),
      s = r.local_pairing.code,
      o = typeof s === "string" && /^attest_failed:\d{1,3}$/.test(s) ? Number(s.slice(14)) : void 0;
    throw new PeerRefusedPairing(i ?? "malformed", o);
  }
  if (t === "accept" && it(e)) throw new PeerRefusedPairing("unsupported_peer");
  throw new PairingError("malformed", "unrecognised reply to a pairing message");
}
function gn(e) {
  return e === void 0 || e < 400 || e >= 500;
}
var rt = e => e === "ENOENT" || e === "ECONNREFUSED";
function iui(e, t) {
  switch (e) {
    case "pairing_disabled":
    case "org_not_permitted":
    case "unsupported_peer":
    case "wrong_peer_kind":
      return "durable";
    case "account_mismatch":
    case "org_mismatch":
      return "peer_may_move";
    case "not_signed_in":
      return t ? "peer_not_ready" : "awaits_token";
    case "managed_org_missing":
      return "peer_not_ready";
    case "attest_failed":
      return "awaits_token";
    default:
      return "retry";
  }
}
function hn(e) {
  if (!(e instanceof PairingError)) return !1;
  switch (e.code) {
    case "jwks_unavailable":
      return !0;
    case "attest_failed":
      return gn(e.httpStatus);
    case "not_signed_in":
      return !(e instanceof PeerRefusedPairing) && e.cause !== void 0;
    default:
      return !1;
  }
}
function it(e) {
  let t = e.error?.content;
  if (!Array.isArray(t) || t.length !== 1) return !1;
  let n = t[0];
  return n?.type === "text" && n.text === "No tool specified";
}
function ie(e, t = I) {
  return new RequestTooLargeError(`Request too large for the local browser connection (${e} bytes; limit ${t}). Send smaller inputs or fewer files per call.`);
}
function mn(e) {
  let t = e.peerInstance?.max_reassembly_bytes;
  return typeof t === "number" && Number.isSafeInteger(t) && t > 0 ? t : void 0;
}
function yn(e) {
  let t = e;
  return !!t && typeof t === "object" && typeof t.max_tokens === "number" && Array.isArray(t.messages);
}
class ot {
  socket = null;
  connected = !1;
  connecting = !1;
  connectEpoch = 0;
  pending = null;
  externalRelays = new _rr();
  currentPath;
  handshaking = !1;
  pairing = null;
  pairingWaiter = null;
  pairingExpired = !1;
  pairingAgeTimer = null;
  pairingGraceTimer = null;
  lastPairingRefuse;
  loggedRefusal;
  forcedTeardownAt = 0;
  notificationHandler = null;
  responseBuffer = Buffer.alloc(0);
  responseChunks = [];
  responseChunkBytes = 0;
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  reconnectDelay = 1000;
  reconnectTimer = null;
  connectTimer = null;
  context;
  disableAutoReconnect = !1;
  onRedialWanted;
  pairingProbeTimer = null;
  probeToolUseId;
  probeMissedDuringRelay = !1;
  probesAnswered = 0;
  identityProbe = null;
  constructor(e) {
    this.context = e;
  }
  probeBridgeIdentity(e) {
    if (this.context.localPairing || !this.connected || !this.socket || this.socket.destroyed) return Promise.resolve(void 0);
    return this.settleIdentityProbe(void 0), new Promise(resolve_2 => {
      let echo = C(),
        r = C(),
        timer_2 = setTimeout(() => this.settleIdentityProbe(void 0), e);
      timer_2.unref?.(), this.identityProbe = {
        echo: echo,
        toolUseId: r,
        resolve: resolve_2,
        timer: timer_2
      }, this.writeFrame({
        method: "get_bridge_identity",
        params: {
          echo: echo,
          tool_use_id: r
        }
      });
    });
  }
  settleIdentityProbe(e) {
    let identityProbe = this.identityProbe;
    if (!identityProbe) return;
    this.identityProbe = null, clearTimeout(identityProbe.timer), identityProbe.resolve(e);
  }
  takeIdentityReply(e) {
    let result_2 = e.result;
    if (!(typeof result_2 === "object" && result_2 !== null && "bridge_device_id" in result_2)) {
      if (this.identityProbe && e.tool_use_id === this.identityProbe.toolUseId) return this.settleIdentityProbe(void 0), !0;
      return !1;
    }
    let {
      bridge_device_id: bridge_device_id,
      echo: echo_2
    } = result_2;
    if (this.identityProbe && echo_2 === this.identityProbe.echo) this.settleIdentityProbe(typeof bridge_device_id === "string" && dkn.test(bridge_device_id) ? bridge_device_id : void 0);
    return !0;
  }
  async connect() {
    let {
      serverName: serverName_2,
      logger: logger_2
    } = this.context;
    if (this.connecting) {
      logger_2.info(`[${serverName_2}] Already connecting, skipping duplicate attempt`);
      return;
    }
    this.closeSocket(), this.connecting = !0, this.lastPairingRefuse = void 0;
    let connectEpoch = this.connectEpoch,
      r = this.context.getSocketPath?.() ?? this.context.socketPath;
    this.currentPath = r, this.logDial(`[${serverName_2}] Attempting to connect to: ${r}`);
    let i;
    try {
      i = await this.validateSocketSecurity(r);
    } catch (error) {
      if (connectEpoch === this.connectEpoch) this.connecting = !1;
      logger_2.info(`[${serverName_2}] Security validation failed:`, error);
      return;
    }
    if (!i) {
      if (connectEpoch === this.connectEpoch) this.connecting = !1, this.scheduleReconnect("dead");
      return;
    }
    if (connectEpoch !== this.connectEpoch) return;
    let localPairing = this.context.localPairing;
    if (localPairing && !(await this.ownIdentityPresent(localPairing, connectEpoch))) return;
    let o,
      {
        connectVerified: connectVerified
      } = this.context;
    if (connectVerified) {
      try {
        o = await connectVerified(r);
      } catch (error) {
        if (connectEpoch !== this.connectEpoch) return;
        this.connecting = !1;
        let d = error.code;
        if (rt(d)) logger_2.info(`[${serverName_2}] Socket not found; not dialing`), this.scheduleReconnect("dead");else if (d === "EPERM" || d === "EACCES" || d === "EPEERCRED" || !d) logger_2.info(`[${serverName_2}] Security validation failed:`, error);else logger_2.info(`[${serverName_2}] Verified dial failed:`, error), this.scheduleReconnect();
        return;
      }
      if (connectEpoch !== this.connectEpoch) {
        o.destroy();
        return;
      }
    } else o = an(r);
    this.socket = o;
    let c = () => {
      if (this.clearConnectTimer(), this.clearReconnectTimer(), localPairing) {
        this.reconnectAttempts = Math.min(this.reconnectAttempts, this.maxReconnectAttempts), this.pair(connectEpoch, localPairing);
        return;
      }
      this.connected = !0, this.connecting = !1, this.reconnectAttempts = 0, logger_2.info(`[${serverName_2}] Successfully connected to bridge server`);
    };
    if (o.on("data", l => {
      let responseBuffer = this.responseBuffer,
        u = responseBuffer.length + this.responseChunkBytes + l.length;
      if (responseBuffer.length >= 4 && u < 4 + responseBuffer.readUInt32LE(0)) {
        this.responseChunks.push(l), this.responseChunkBytes += l.length;
        return;
      }
      if (this.responseChunks.length > 0) this.responseBuffer = Buffer.concat([responseBuffer, ...this.responseChunks, l], u), this.responseChunks = [], this.responseChunkBytes = 0;else this.responseBuffer = responseBuffer.length === 0 ? l : Buffer.concat([responseBuffer, l], u);
      while (this.responseBuffer.length >= 4) {
        let m = this.responseBuffer.readUInt32LE(0);
        if (this.responseBuffer.length < 4 + m) break;
        let h = this.responseBuffer.slice(4, 4 + m);
        this.responseBuffer = this.responseBuffer.slice(4 + m);
        try {
          let f = JSON.parse(h.toString("utf-8"));
          if (localPairing) {
            this.dispatchPairingRail(f, connectEpoch);
            continue;
          }
          if (Ye(f)) {
            if (logger_2.info(`[${serverName_2}] Received notification: ${$K(f.method)}`), !(f.method === "permission_request" && this.claimPermissionRequest(f.params))) this.notificationHandler?.(f);
          } else if (Ve(f)) {
            if (this.takeIdentityReply(f)) continue;
            logger_2.info(`[${serverName_2}] Received tool response for ${$K(f.tool_use_id ?? "(untagged)")}`), this.handleResponse(f, m);
          } else logger_2.info(`[${serverName_2}] Received a message of unknown shape`);
        } catch (error) {
          logger_2.info(`[${serverName_2}] Failed to parse message:`, error);
        }
      }
    }), o.on("error", l => {
      logger_2.info(`[${serverName_2}] Socket error (code: ${l.code}):`, l), this.closeSocket(), this.scheduleReconnect(rt(l.code) ? "dead" : "transport");
    }), o.on("close", () => {
      this.closeSocket(), this.scheduleReconnect();
    }), connectVerified) {
      c();
      return;
    }
    this.connectTimer = setTimeout(() => {
      if (!this.connected) logger_2.info(`[${serverName_2}] Connection attempt timed out after ${j}ms`), this.closeSocket(), this.scheduleReconnect();
    }, j), o.on("connect", c);
  }
  scheduleReconnect(e = "transport") {
    let {
      serverName: serverName_3,
      logger: logger_3
    } = this.context;
    if (this.disableAutoReconnect) {
      this.onRedialWanted?.(e);
      return;
    }
    if (this.reconnectTimer) {
      logger_3.info(`[${serverName_3}] Reconnect already scheduled, skipping`);
      return;
    }
    this.reconnectAttempts++;
    let r = 100;
    if (this.reconnectAttempts > r) {
      logger_3.info(`[${serverName_3}] Giving up after ${r} attempts. Will retry on next tool call.`), this.reconnectAttempts = 0;
      return;
    }
    let i = Math.min(this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= this.maxReconnectAttempts) logger_3.info(`[${serverName_3}] Reconnecting in ${Math.round(i)}ms (attempt ${this.reconnectAttempts})`);else if (this.reconnectAttempts % 10 === 0) logger_3.info(`[${serverName_3}] Still polling for native host (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, i);
  }
  dispatchPairingRail(e, t) {
    let {
      serverName: serverName_4,
      logger: logger_4
    } = this.context;
    if (!e || typeof e !== "object") {
      logger_4.info(`[${serverName_4}] Dropping a non-object frame`);
      return;
    }
    if (!this.connected) {
      if (this.pairingWaiter && Ve(e) && (e.tool_use_id === this.pairingWaiter.toolUseId || e.tool_use_id === void 0 && this.pairingWaiter.acceptsUntagged && it(e))) {
        let pairingWaiter = this.pairingWaiter;
        this.pairingWaiter = null, clearTimeout(pairingWaiter.timer), pairingWaiter.resolve(e);
        return;
      }
      logger_4.info(`[${serverName_4}] Dropping frame received before the connection was admitted`);
      return;
    }
    this.dispatchSealed(e, t);
  }
  async pair(e, t) {
    let {
        serverName: serverName_5,
        logger: logger_5
      } = this.context,
      socketPath = this.currentPath ?? this.context.socketPath;
    this.handshaking = !0, this.reportPairingState(t, {
      state: "pairing",
      socketPath: socketPath
    });
    try {
      let {
          source: source_2,
          jwks: jwks_2
        } = ze(t),
        a = new te({
          source: source_2,
          jwks: jwks_2,
          policy: {
            requiredOrg: t.requiredOrg
          },
          instanceHint: t.instanceHint
        }),
        c = Math.min(Qe, this.forcedTeardownAt + Qe - Date.now());
      if (c > 0) {
        if (await new Promise(f => setTimeout(f, c).unref?.()), e !== this.connectEpoch) return;
      }
      let l = await this.withPairingStepDeadline(a.createOffer());
      if (e !== this.connectEpoch) return;
      let d = nt(await this.exchangePairing({
        ...l
      }, !0), "accept");
      if (e !== this.connectEpoch) return;
      let u = await this.withPairingStepDeadline(a.onAccept(d));
      if (e !== this.connectEpoch) return;
      let m = nt(await this.exchangePairing({
        ...u
      }, !1), "done");
      if (e !== this.connectEpoch) return;
      let h = await a.onDone(m);
      if (e !== this.connectEpoch) {
        h.channel.tearDown();
        return;
      }
      if (!this.socket || this.socket.destroyed) {
        h.channel.tearDown(), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      this.pairing = h, this.pairingExpired = !1, this.pairingAgeTimer = setTimeout(() => {
        if (this.pairing !== h) return;
        if (this.pairingExpired = !0, !this.hasInflight()) {
          this.expirePairing();
          return;
        }
        this.startAgeGrace();
      }, Ze), this.pairingAgeTimer.unref?.(), this.handshaking = !1, this.connected = !0, this.connecting = !1, this.reconnectAttempts = 0, this.probesAnswered = 0, this.schedulePairingProbe(), this.loggedRefusal = void 0, logger_5.info(`[${serverName_5}] Local pairing established with ${socketPath} (peer ${h.peer.client_kind} ${$K(h.peerInstance?.extension_version ?? "?", 16)}, external relay ${this.peerCanRelayExternal() ? "supported" : "unsupported"}, sid ${h.sidB64.slice(0, 8)}\u2026)`), this.reportPairingState(t, {
        state: "established",
        socketPath: socketPath,
        peerKind: h.peer.client_kind,
        peerInstance: h.peerInstance,
        assertionExp: h.peer.exp
      }), this.pushExternalConfig();
    } catch (error) {
      if (e !== this.connectEpoch) return;
      if (this.handshaking = !1, error instanceof HandshakeTimeout) {
        logger_5.warn(`[${serverName_5}] ${error.message} (${socketPath}); reconnecting`), this.lastPairingRefuse = {
          code: "timeout",
          peerReported: !1
        }, this.reportPairingState(t, {
          state: "refused",
          socketPath: socketPath,
          code: "timeout",
          wire: "timeout",
          peerReported: !1
        }), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      let peerReported = error instanceof PeerRefusedPairing,
        a = error instanceof PairingError ? error : void 0,
        code = a?.code ?? "malformed",
        wire = a?.wireCode() ?? code;
      if (this.logRefusal(`[${serverName_5}] Local pairing with ${socketPath} refused: ${wire}${peerReported ? " (peer-reported, unauthenticated)" : ""}`, a ? void 0 : error), this.lastPairingRefuse = {
        code: code,
        peerReported: peerReported
      }, this.reportPairingState(t, {
        state: "refused",
        socketPath: socketPath,
        code: code,
        wire: wire,
        ...(a?.httpStatus !== void 0 && {
          httpStatus: a.httpStatus
        }),
        peerReported: peerReported
      }), this.closeSocket(), hn(error)) this.scheduleReconnect();
    }
  }
  async ownIdentityPresent(e, t) {
    let {
        serverName: serverName_6
      } = this.context,
      socketPath_2 = this.currentPath ?? this.context.socketPath,
      i,
      s = !1;
    try {
      i = await this.withPairingStepDeadline(e.getBearer());
    } catch {
      s = !0;
    }
    if (t !== this.connectEpoch) return !1;
    if (i) return !0;
    if (this.connecting = !1, this.lastPairingRefuse = {
      code: "not_signed_in",
      peerReported: !1
    }, this.logRefusal(`[${serverName_6}] Local pairing with ${socketPath_2} refused: not_signed_in (no bearer of our own${s ? "; token source failed" : ""}; not dialing)`), this.reportPairingState(e, {
      state: "refused",
      socketPath: socketPath_2,
      code: "not_signed_in",
      wire: "not_signed_in",
      peerReported: !1
    }), s) this.scheduleReconnect();
    return !1;
  }
  logRefusal(e, ...t) {
    if (e === this.loggedRefusal) {
      this.context.logger.debug(e, ...t);
      return;
    }
    this.loggedRefusal = e, this.context.logger.warn(e, ...t);
  }
  logDial(e) {
    if (this.loggedRefusal === void 0) this.context.logger.info(e);else this.context.logger.debug(e);
  }
  withPairingStepDeadline(e) {
    let t,
      promise_2 = new Promise((r, i) => {
        t = setTimeout(() => i(new HandshakeTimeout("step")), un), t.unref?.();
      });
    return Promise.race([e, promise_2]).finally(() => clearTimeout(t));
  }
  reportPairingState(e, t) {
    try {
      e.onPairingState?.(t);
    } catch (error) {
      this.context.logger.warn(`[${this.context.serverName}] onPairingState handler threw:`, error);
    }
  }
  exchangePairing(local_pairing, acceptsUntagged) {
    return new Promise((resolve_3, reject) => {
      let i = C(),
        timer_3 = setTimeout(() => {
          if (this.pairingWaiter?.toolUseId === i) this.pairingWaiter = null, reject(new HandshakeTimeout("reply"));
        }, dn);
      if (this.pairingWaiter) clearTimeout(this.pairingWaiter.timer), this.pairingWaiter.reject(new HandshakeTimeout("reply"));
      this.pairingWaiter = {
        toolUseId: i,
        acceptsUntagged: acceptsUntagged,
        resolve: resolve_3,
        reject: reject,
        timer: timer_3
      }, this.writeRaw({
        method: "execute_tool",
        params: {
          client_id: this.context.clientTypeId,
          tool_use_id: i,
          local_pairing: local_pairing
        }
      });
    });
  }
  async writeSealed(e, t) {
    this.writeFrames(await this.sealFrames(e, t));
  }
  async sealFrames(tool_use_id, t) {
    let pairing = this.pairing;
    if (!pairing || !this.connected) throw new SocketConnectionError(`[${this.context.serverName}] Cannot send request: not paired`);
    let r = Buffer.byteLength(JSON.stringify(t), "utf-8"),
      i = mn(pairing),
      s = r > re && i !== void 0;
    if (s && r > i) throw ie(r, i);
    if (!s && Math.ceil(r * 4 / 3) > I) throw ie(Math.ceil(r * 4 / 3));
    let o;
    try {
      o = s ? await pairing.channel.sealChunked("execute_tool", tool_use_id, t, re) : [await pairing.channel.seal("execute_tool", tool_use_id, t)];
    } catch (error) {
      if (this.pairing !== pairing || pairing.channel.isTornDown) throw new SocketConnectionError(`[${this.context.serverName}] Pairing changed while sealing`);
      throw error;
    }
    if (this.pairing !== pairing) throw new SocketConnectionError(`[${this.context.serverName}] Pairing changed while sealing`);
    if (s) this.context.logger.info(`[${this.context.serverName}] Sealed request sliced into ${o.length} frames (${r} bytes, max ${re} per slice)`);
    return o.map(a => {
      let frame = {
          method: "execute_tool",
          params: {
            tool_use_id: tool_use_id,
            sealed: a
          }
        },
        bytes = Buffer.from(JSON.stringify(frame), "utf-8");
      if (bytes.length > I) throw ie(bytes.length);
      return {
        frame: frame,
        bytes: bytes
      };
    });
  }
  writeFrames(e) {
    if (!this.socket || this.socket.destroyed) throw new SocketConnectionError(`[${this.context.serverName}] Socket closed before the request was written`);
    for (let {
      frame: frame_2,
      bytes: bytes_2
    } of e) this.writeRaw(frame_2, bytes_2);
  }
  async answerInferenceRequest(request_id, t, n) {
    let {
        serverName: serverName_7,
        logger: logger_6,
        localPairing: localPairing_2
      } = this.context,
      result_3;
    try {
      if (!request_id || !yn(t)) result_3 = {
        ok: !1,
        error: "malformed"
      };else if (this.context.isDisabled?.() || !localPairing_2?.onInferenceRequest) result_3 = {
        ok: !1,
        error: "not_supported"
      };else result_3 = await localPairing_2.onInferenceRequest(t);
      let c = Math.ceil(Buffer.byteLength(JSON.stringify(result_3), "utf-8") * 4 / 3);
      if (c > I) logger_6.warn(`[${serverName_7}] inference_response too large (${c} bytes); answering too_large`), result_3 = {
        ok: !1,
        error: "too_large"
      };
    } catch (c) {
      logger_6.warn(`[${serverName_7}] inference seam failed:`, c), result_3 = {
        ok: !1,
        error: "handler_error"
      };
    }
    let pairing_2 = this.pairing;
    if (n !== this.connectEpoch || !pairing_2) return;
    try {
      let sealed = await pairing_2.channel.seal("notification:inference_response", request_id, {
        method: "inference_response",
        params: {
          request_id: request_id,
          result: result_3
        }
      });
      if (n !== this.connectEpoch || this.pairing !== pairing_2) return;
      let l = {
          method: "inference_response",
          params: {
            request_id: request_id,
            sealed: sealed
          }
        },
        d = Buffer.from(JSON.stringify(l), "utf-8");
      if (d.length > I) {
        logger_6.warn(`[${serverName_7}] inference_response frame oversized after seal (${d.length} bytes); dropped`);
        return;
      }
      this.writeRaw(l, d);
    } catch (error) {
      logger_6.warn(`[${serverName_7}] Failed to seal inference_response:`, error);
    }
  }
  peerCanRelayExternal() {
    return this.pairing?.peerInstance?.can_relay_external === !0;
  }
  hasCallInFlight() {
    return this.pending !== null;
  }
  hasActiveSelection() {
    return this.isPaired();
  }
  pushExternalConfig(e) {
    if (!this.isPaired() || !this.peerCanRelayExternal() || this.pairingAgedOut()) return !1;
    let t = yrr(this.context, e);
    if (!t) return !1;
    return this.writeExternalConfig(t).catch(n => {
      this.context.logger.warn(`[${this.context.serverName}] external_config not sent: ${n instanceof Error ? n.message : String(n)}`);
    }), !0;
  }
  writeExternalConfig(e) {
    let tool_use_id_2 = C();
    return this.writeSealed(tool_use_id_2, {
      method: "external_config",
      params: {
        tool_use_id: tool_use_id_2,
        extension_ids: e.extensionIds,
        ...(e.hooks !== void 0 && {
          hooks: e.hooks
        })
      }
    });
  }
  sendExternalMessage(e, t, n) {
    let {
      serverName: serverName_8
    } = this.context;
    if (n?.requireDeviceId !== void 0) return Promise.resolve({
      ok: !1,
      error: "no_target",
      detail: "not_sent"
    });
    let s = e8r({
      assertOpen: () => {
        if (this.pairingAgedOut()) throw this.expireIfAgedAndIdle(), new SocketConnectionError(`[${serverName_8}] Cannot relay: the pairing reached its maximum age and is re-pairing`);
        if (!this.isPaired()) throw new SocketConnectionError(`[${serverName_8}] Cannot relay: not paired with the extension`);
      },
      refuse: () => this.peerCanRelayExternal() ? void 0 : {
        error: "unsupported",
        reason: `the paired extension (${$K(this.pairing?.peerInstance?.extension_version ?? "?", 16)}) does not relay external messages`
      },
      pushConfig: () => {
        this.pushExternalConfig();
      },
      prepare: ({
        requestId: o,
        extensionIds: a,
        payload: payload_3,
        timeoutMs: l
      }) => this.sealFrames(o, {
        method: "external_message",
        params: {
          tool_use_id: o,
          extension_ids: a,
          payload: payload_3,
          timeout_ms: l
        }
      }),
      send: o => {
        try {
          this.writeFrames(o);
        } catch (error) {
          throw new RelayNotSentError(error);
        }
      }
    }, this.externalRelays, this.context, e, t, n);
    return s.then(() => this.expireIfAgedAndIdle(), () => {
      return;
    }), s;
  }
  takeRelayResponse(e, t) {
    if ("result" in t) this.externalRelays.settle(e, t.result);else this.context.logger.info(`[${this.context.serverName}] external_message answered with an error; treating as not relayed (${e.slice(0, 8)})`), this.externalRelays.fail(e, "no_target", "not_sent");
  }
  lastPairingRefuseCode() {
    return this.lastPairingRefuse?.code;
  }
  lastPairingRefusePeerReported() {
    return this.lastPairingRefuse?.peerReported ?? !1;
  }
  isPaired() {
    return this.connected && this.pairing !== null;
  }
  pairingAgedOut() {
    if (!this.pairing) return !1;
    if (Date.now() / 1000 - this.pairing.establishedAt > Ze / 1000) this.pairingExpired = !0;
    if (this.pairingExpired && this.hasInflight()) this.startAgeGrace();
    return this.pairingExpired;
  }
  pendingCall() {
    return this.pending !== null && this.pending.toolUseId !== this.probeToolUseId ? this.pending : null;
  }
  hasInflight() {
    return this.pendingCall() !== null || this.externalRelays.size > 0;
  }
  startAgeGrace() {
    if (this.pairingGraceTimer) return;
    let e = Math.max(this.pending?.timeoutMs ?? 0, this.externalRelays.msUntilDrained()),
      pairing_3 = this.pairing;
    this.pairingGraceTimer = setTimeout(() => {
      if (this.pairing === pairing_3) this.expirePairing();
    }, e), this.pairingGraceTimer.unref?.();
  }
  forceRepair(e, t = !1) {
    this.forcedTeardownAt = Date.now(), this.failPending(e), this.closeSocket(), this.scheduleReconnect(t ? "peer_dropped" : "transport");
  }
  schedulePairingProbe() {
    this.clearPairingProbe(), this.pairingProbeTimer = setTimeout(() => {
      if (this.pairingProbeTimer = null, !this.connected || !this.pairing) return;
      if (this.pending) {
        this.schedulePairingProbe();
        return;
      }
      if (this.pairingAgedOut()) {
        this.expireIfAgedAndIdle();
        return;
      }
      let e = {
        method: "execute_tool",
        params: {
          client_id: this.context.clientTypeId,
          tool_use_id: C()
        }
      };
      this.probeToolUseId = e.params.tool_use_id;
      let t = () => {
        if (this.probeToolUseId = void 0, this.connected && this.pairing) this.schedulePairingProbe();
      };
      this.sendRequest(e, this.context.localPairing?.probeTimeoutMs ?? pn).then(() => {
        if (this.probesAnswered += 1, this.probeMissedDuringRelay = !1, this.probesAnswered === 1) this.context.logger.info(`[${this.context.serverName}] Local pairing liveness probe answered; probing every ${(this.context.localPairing?.probeIntervalMs ?? tt) / 1000} s while idle`);else this.context.logger.debug(`[${this.context.serverName}] Local pairing liveness probe ${this.probesAnswered} answered`);
        t();
      }, t);
    }, this.context.localPairing?.probeIntervalMs ?? tt), this.pairingProbeTimer.unref?.();
  }
  probesAnsweredCount() {
    return this.probesAnswered;
  }
  clearPairingProbe() {
    if (this.pairingProbeTimer) clearTimeout(this.pairingProbeTimer), this.pairingProbeTimer = null;
  }
  expirePairing() {
    this.context.logger.info(`[${this.context.serverName}] Local pairing reached its maximum age; re-pairing`), this.closeSocket(), this.scheduleReconnect();
  }
  clearPairing(e, t = !1) {
    if (this.pairingWaiter) {
      clearTimeout(this.pairingWaiter.timer);
      let pairingWaiter_2 = this.pairingWaiter;
      this.pairingWaiter = null, pairingWaiter_2.reject(new HandshakeTimeout("reply"));
    }
    if (this.pairingAgeTimer) clearTimeout(this.pairingAgeTimer), this.pairingAgeTimer = null;
    if (this.pairingGraceTimer) clearTimeout(this.pairingGraceTimer), this.pairingGraceTimer = null;
    let pairing_4 = this.pairing,
      reason = !pairing_4 ? "handshake_aborted" : pairing_4.channel.isTornDown ? "forged_frames" : this.pairingExpired ? "expired" : "connection_closed";
    this.pairing?.channel.tearDown(), this.pairing = null, this.pairingExpired = !1, this.probeMissedDuringRelay = !1;
    let i = this.externalRelays.drain("send_failed");
    if (i > 0) this.context.logger.warn(`[${this.context.serverName}] ${i} external relay(s) failed: the pairing closed (${reason})`);
    if ((pairing_4 || e) && this.context.localPairing) this.reportPairingState(this.context.localPairing, {
      state: "closed",
      socketPath: this.currentPath ?? this.context.socketPath,
      reason: reason
    });
    if (pairing_4 && !t) this.context.onPeerDisconnected?.({
      wasSelected: !0
    });
  }
  async dispatchSealed(e, t) {
    let {
        serverName: serverName_9,
        logger: logger_7
      } = this.context,
      pairing_5 = this.pairing;
    if (!pairing_5) return;
    let s, tool_use_id_3, a;
    if (Ye(e)) {
      if (e.method === "permission_request") {
        s = "notification:permission_request";
        let u = e.params?.tool_use_id;
        tool_use_id_3 = typeof u === "string" ? u : void 0;
      } else if (e.method === "sealed_broadcast") s = "notification:sealed_broadcast", tool_use_id_3 = void 0;else if (e.method === "inference_request") {
        s = "notification:inference_request";
        let u = e.params?.request_id;
        tool_use_id_3 = typeof u === "string" ? u : void 0;
      } else {
        logger_7.info(`[${serverName_9}] Dropping unsealed notification on a paired connection`);
        return;
      }
      a = e.params?.sealed;
    } else {
      let u = e;
      if (typeof u.tool_use_id !== "string") {
        logger_7.info(`[${serverName_9}] Dropping a response without a routing id on a paired connection`);
        return;
      }
      if (s = "tool_response", tool_use_id_3 = u.tool_use_id, a = u.sealed, a === void 0 && (tool_use_id_3 === this.pending?.toolUseId || this.externalRelays.has(tool_use_id_3)) && u.error?.local_pairing) {
        logger_7.warn(`[${serverName_9}] Peer reports the pairing is unknown to it${tool_use_id_3 === this.probeToolUseId ? " (it dropped the pairing; found by the liveness probe)" : ""}; re-pairing`), this.forceRepair(new ExtensionDisconnectedMidCallError(`[${serverName_9}] Peer reports the pairing is unknown; re-pairing`), !0);
        return;
      }
    }
    if (a === void 0) {
      logger_7.info(`[${serverName_9}] Dropping clear-text ${s} on a paired connection`);
      return;
    }
    let c = s === "tool_response" && tool_use_id_3 !== void 0 && (tool_use_id_3 === this.pending?.toolUseId || this.externalRelays.has(tool_use_id_3));
    if (this.pairingAgedOut() && !c) {
      let u = this.pendingCall();
      if (u !== null && s === "notification:permission_request" && u.onPermissionRequest !== void 0 && tool_use_id_3 === u.toolUseId) this.failAgedPending("the call needed a permission prompt");else if (u !== null && s === "notification:inference_request") this.failAgedPending("the call needed a host inference");else if (this.hasInflight()) logger_7.info(`[${serverName_9}] Dropping sealed ${s} past the pairing's maximum age`);else this.expirePairing();
      return;
    }
    let l = await pairing_5.channel.open(s, tool_use_id_3, a);
    if (t !== this.connectEpoch || this.pairing !== pairing_5) return;
    if (!l.ok) {
      if (l.reason !== "foreign_sid") logger_7.warn(`[${serverName_9}] Sealed ${s} rejected: ${l.reason}`);
      if (pairing_5.channel.isTornDown) logger_7.warn(`[${serverName_9}] Sealed channel torn down; re-pairing`), this.forceRepair(new ExtensionDisconnectedMidCallError(`[${serverName_9}] Sealed channel to the extension was torn down`));
      return;
    }
    let inner = l.inner;
    if (!inner || typeof inner !== "object") return;
    try {
      if (s === "tool_response" && tool_use_id_3 !== void 0 && this.externalRelays.has(tool_use_id_3)) this.takeRelayResponse(tool_use_id_3, inner);else if (s === "tool_response") this.handleResponse({
        ...("result" in inner && {
          result: inner.result
        }),
        ...("error" in inner && {
          error: inner.error
        }),
        tool_use_id: tool_use_id_3
      }, Buffer.byteLength(JSON.stringify(inner), "utf-8"));else if (s === "notification:permission_request") {
        let u = inner.params ?? {};
        if (inner.method !== "permission_request" || u.tool_use_id !== tool_use_id_3) {
          logger_7.warn(`[${serverName_9}] Sealed permission_request mislabelled; dropped`);
          return;
        }
        this.claimPermissionRequest(u);
      } else if (s === "notification:inference_request") {
        let u = inner.params ?? {};
        if (inner.method !== "inference_request" || u.request_id !== tool_use_id_3) {
          logger_7.warn(`[${serverName_9}] Sealed inference_request mislabelled; dropped`);
          return;
        }
        this.answerInferenceRequest(tool_use_id_3, u.body, t);
      } else if (this.notificationHandler && typeof inner.method === "string") this.notificationHandler({
        method: inner.method,
        params: inner.params ?? void 0
      });
    } catch (u) {
      logger_7.error(`[${serverName_9}] Error handling a sealed ${s}:`, u);
    }
  }
  handleResponse(e, t) {
    let pending = this.pending;
    if (!pending || typeof e.tool_use_id === "string" && e.tool_use_id !== pending.toolUseId) return;
    this.pending = null, clearTimeout(pending.timer), pending.resolve(e, t), this.expireIfAgedAndIdle();
  }
  failAgedPending(e) {
    this.failPending(new ExtensionDisconnectedMidCallError(`[${this.context.serverName}] The pairing reached its maximum age while ${e}`)), this.expireIfAgedAndIdle();
  }
  expireIfAgedAndIdle() {
    if (this.pairingAgedOut() && !this.hasInflight()) return this.expirePairing(), !0;
    return !1;
  }
  claimPermissionRequest(e) {
    let pending_2 = this.pending,
      n = e?.request_id;
    if (!pending_2?.onPermissionRequest || typeof n !== "string" || e?.tool_use_id !== pending_2.toolUseId) return !1;
    return this.answerPermissionRequest(pending_2, pending_2.onPermissionRequest, n, e), !0;
  }
  async answerPermissionRequest(e, t, n, r) {
    let i = t8r(r, {
      toolUseId: e.toolUseId,
      requestId: n
    });
    clearTimeout(e.timer);
    let allowed = !1;
    try {
      allowed = await t(i);
    } catch (a) {
      this.context.logger.error(`[${this.context.serverName}] Error handling permission request:`, a);
    }
    if (this.pending !== e) return;
    if (this.pairingAgedOut()) {
      this.failAgedPending("a permission prompt was open");
      return;
    }
    let o = {
      method: "permission_response",
      params: {
        request_id: n,
        allowed: allowed
      }
    };
    if (this.context.localPairing) {
      let a = {
        ...o,
        params: {
          ...o.params,
          tool_use_id: e.toolUseId
        }
      };
      if (await this.writeSealed(e.toolUseId, a).catch(c => {
        this.context.logger.warn(`[${this.context.serverName}] Could not send permission_response:`, c);
      }), this.pending !== e) return;
    } else this.writeFrame(o);
    this.armTimeout(e);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async ensureConnected() {
    let {
      serverName: serverName_10
    } = this.context;
    if (this.connected && this.socket) return !0;
    if (!this.socket && !this.connecting) await this.connect();
    return new Promise((t, n) => {
      let r = null,
        i = j,
        s = () => {
          if (this.connected) {
            if (r) clearTimeout(r);
            t(!0);
            return;
          }
          if (this.context.localPairing && (this.handshaking || this.lastPairingRefuse?.code === "timeout") && i < et) {
            i = et, o = setTimeout(s, i - j);
            return;
          }
          if (r) clearTimeout(r);
          n(new SocketConnectionError(`[${serverName_10}] Connection attempt timed out after ${i}ms`));
        },
        o = setTimeout(s, i),
        a = () => {
          if (this.connected) clearTimeout(o), t(!0);else if (!this.socket && !this.connecting && (!this.reconnectTimer || this.context.localPairing && this.lastPairingRefuse !== void 0 && this.lastPairingRefuse.code !== "timeout")) clearTimeout(o), t(!1);else r = setTimeout(a, 500);
        };
      a();
    });
  }
  armTimeout(e) {
    let {
      logger: logger_8,
      serverName: serverName_11
    } = this.context;
    clearTimeout(e.timer), e.timer = setTimeout(() => {
      if (this.pending !== e) return;
      let r = e.toolUseId === this.probeToolUseId && this.externalRelays.size > 0;
      if (this.failPending(new ToolCallTimeoutError(`[${serverName_11}] Tool request timed out after ${e.timeoutMs}ms`)), r && !this.probeMissedDuringRelay) {
        this.probeMissedDuringRelay = !0, logger_8.info(`[${serverName_11}] Liveness probe unanswered while an external relay is in flight; probing once more before re-pairing`);
        return;
      }
      this.closeSocket(), this.scheduleReconnect();
    }, e.timeoutMs);
  }
  writeRaw(e, t) {
    if (!this.socket || this.socket.destroyed) return;
    let n = t ?? Buffer.from(JSON.stringify(e), "utf-8"),
      r = Buffer.allocUnsafe(4);
    r.writeUInt32LE(n.length, 0), this.socket.write(Buffer.concat([r, n]));
  }
  writeFrame(e) {
    if (this.context.localPairing) throw Error("clear-text frames are disabled when local pairing is configured");
    this.writeRaw(e);
  }
  async sendRequest(e, timeoutMs_2, onPermissionRequest) {
    let {
      serverName: serverName_12
    } = this.context;
    if (this.pairingAgedOut()) this.closeSocket();
    if (!this.socket || this.socket.destroyed || this.context.localPairing && !this.connected) throw new SocketConnectionError(`[${serverName_12}] Cannot send request: not connected`);
    return new Promise((i, reject_2) => {
      this.failPending(new ToolCallSupersededError(`[${serverName_12}] Superseded by a newer tool request on the same connection`));
      let sentAt = Date.now(),
        a = {
          toolUseId: e.params.tool_use_id,
          resolve: (response, responseBytes) => i({
            response: response,
            responseBytes: responseBytes,
            sentAt: sentAt
          }),
          reject: reject_2,
          timeoutMs: timeoutMs_2,
          onPermissionRequest: onPermissionRequest
        };
      if (this.armTimeout(a), this.pending = a, this.context.localPairing) this.writeSealed(a.toolUseId, e).catch(c => {
        if (this.pending === a) this.failPending(c instanceof Error ? c : new SocketConnectionError(String(c)));
      });else this.writeFrame(e);
    });
  }
  async callTool(tool, args, n, r) {
    if (r?.requireDeviceId !== void 0) throw new BrowserChangedError(`[${this.context.serverName}] ${tool} not sent: its tab's browser can't be confirmed`);
    let i = {
        method: "execute_tool",
        params: {
          client_id: this.context.clientTypeId,
          tool: tool,
          args: args,
          tool_use_id: C(),
          ...n8r(n)
        }
      },
      {
        trackEvent: trackEvent
      } = this.context,
      timeout_ms = this.context.getToolCallTimeoutMs?.(tool) ?? M3e,
      a = n?.sessionScope,
      c = Date.now(),
      l = {
        tool_name: `browser:${tool}`,
        tool_use_id: i.params.tool_use_id,
        session_id: a?.sessionId,
        user_message_uuid: a?.userMessageUuid,
        transport: "native"
      };
    trackEvent?.("chrome_bridge_tool_call_started", {
      ...l,
      timeout_ms: timeout_ms,
      request_bytes: Buffer.byteLength(JSON.stringify(i), "utf-8")
    });
    let d = (_, st, at) => {
        trackEvent?.("chrome_bridge_tool_call_error", {
          ...l,
          duration_ms: Date.now() - st,
          error_type: at ?? akn(tool, _)
        });
      },
      u;
    try {
      u = await this.sendRequestWithRetry(i, timeout_ms, n?.onPermissionRequest);
    } catch (error) {
      if (error instanceof ToolCallTimeoutError) trackEvent?.("chrome_bridge_tool_call_timeout", {
        ...l,
        duration_ms: Date.now() - c,
        timeout_ms: timeout_ms
      });else d(error instanceof Error ? error.message : String(error), c, error instanceof RequestTooLargeError ? "request_too_large" : void 0);
      throw error;
    }
    let {
      response: response_2,
      responseBytes: h,
      sentAt: sentAt_2
    } = u;
    if ("error" in response_2) d(M4t(response_2.error), sentAt_2);else trackEvent?.("chrome_bridge_tool_call_completed", {
      ...l,
      duration_ms: Date.now() - sentAt_2,
      response_bytes: h
    });
    return response_2;
  }
  async sendRequestWithRetry(e, t, n) {
    let {
      serverName: serverName_13,
      logger: logger_9
    } = this.context;
    try {
      return await this.sendRequest(e, t, n);
    } catch (error) {
      if (!(error instanceof SocketConnectionError)) throw error;
      if (logger_9.info(`[${serverName_13}] Connection error, forcing reconnect and retrying: ${error.message}`), !this.connecting) this.closeSocket();
      let o;
      try {
        o = await this.ensureConnected();
      } catch (error) {
        if (!(this.context.localPairing && this.lastPairingRefuse)) throw error;
        o = !1;
      }
      let lastPairingRefuse = this.lastPairingRefuse;
      if (!o && this.context.localPairing && lastPairingRefuse) {
        let c = lastPairingRefuse.peerReported ? `reported by the extension, unverified: ${lastPairingRefuse.code}` : lastPairingRefuse.code;
        throw new SocketConnectionError(`[${serverName_13}] Claude in Chrome isn't paired with your browser (${c})`);
      }
      return await this.sendRequest(e, t, n);
    }
  }
  isConnected() {
    return this.connected;
  }
  isConnecting() {
    return this.connecting;
  }
  clearConnectTimer() {
    if (this.connectTimer) clearTimeout(this.connectTimer), this.connectTimer = null;
  }
  closeSocket(e = !1) {
    this.connectEpoch += 1, this.clearConnectTimer(), this.clearPairingProbe();
    let handshaking = this.handshaking;
    if (this.handshaking = !1, this.socket) this.socket.removeAllListeners(), this.socket.end(), this.socket.destroy(), this.socket = null;
    this.responseBuffer = Buffer.alloc(0), this.responseChunks = [], this.responseChunkBytes = 0, this.connected = !1, this.connecting = !1, this.clearPairing(handshaking, e), this.settleIdentityProbe(void 0), this.failPending(new ExtensionDisconnectedMidCallError(`[${this.context.serverName}] Native host connection closed before the tool responded`));
  }
  clearReconnectTimer() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
  }
  failPending(e) {
    let pending_3 = this.pending;
    if (!pending_3) return;
    this.pending = null, clearTimeout(pending_3.timer), pending_3.reject(e);
  }
  disconnect() {
    this.clearReconnectTimer(), this.failPending(new ExtensionDisconnectedMidCallError(`[${this.context.serverName}] Socket client disconnected`)), this.closeSocket(!0), this.reconnectAttempts = 0;
  }
  async validateSocketSecurity(e) {
    let {
      serverName: serverName_14,
      logger: logger_10
    } = this.context;
    if (cn() === "win32" || this.context.connectVerified) return !0;
    try {
      let r = ln(e);
      if ((r.split("/").pop() || "").startsWith("claude-mcp-browser-bridge-")) try {
        let l = await Xe.lstat(r);
        if (l.isSymbolicLink()) throw Error(`[${serverName_14}] Socket directory is a symlink: ${r}. Directory may have been tampered with.`);
        if (l.isDirectory()) {
          let d = l.mode & 511;
          if (d !== 448) throw Error(`[${serverName_14}] Insecure socket directory permissions: ${d.toString(8)} (expected 0700). Directory may have been tampered with.`);
          let u = process.getuid?.();
          if (u !== void 0 && l.uid !== u) throw Error(`Socket directory not owned by current user (uid: ${u}, dir uid: ${l.uid}). Potential security risk.`);
        }
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        return logger_10.info(`[${serverName_14}] Socket directory not found; not dialing`), !1;
      }
      let o = await Xe.lstat(e);
      if (!o.isSocket()) throw Error(`[${serverName_14}] Path exists but it's not a socket: ${e}`);
      let a = o.mode & 511;
      if (a !== 384) throw Error(`[${serverName_14}] Insecure socket permissions: ${a.toString(8)} (expected 0600). Socket may have been tampered with.`);
      let c = process.getuid?.();
      if (c !== void 0 && o.uid !== c) throw Error(`Socket not owned by current user (uid: ${c}, socket uid: ${o.uid}). Potential security risk.`);
      return this.logDial(`[${serverName_14}] Socket security validation passed`), !0;
    } catch (error) {
      if (error.code === "ENOENT") return logger_10.info(`[${serverName_14}] Socket not found; not dialing`), !1;
      throw error;
    }
  }
}
function l3e(e) {
  return new ot(e);
}
function gaa(e) {
  let t = Ge(e);
  if (!t) return !1;
  return t.source.clear(), !0;
}
export { akn, sui, M4t, SocketConnectionError as jE, ToolCallLostError as s1e, lkn, dkn, Z5r, yrr, RelayNotSentError as ckn, _rr, e8r, t8r, n8r, $K, ToolCallSupersededError as ukn, NoExtensionConnectedError as i1e, ToolCallTimeoutError as a1e, ExtensionDisconnectedMidCallError as P8, BrowserChangedError as a3e, RequestTooLargeError as D4t, iui, l3e, gaa, L4t, RRt };