// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Hcn } from "B:/~BUN/root/chunk-game8aqv.js";
import { vk, Ek } from "B:/~BUN/root/chunk-65j2302z.js";
import { Fte, F1t, JGn, IE, qU } from "B:/~BUN/root/chunk-pwj77283.js";
import { Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { uM } from "B:/~BUN/root/chunk-zpne314q.js";
var o = null;
function cqi(n) {
  o = n;
}
function L$n() {
  return o?.credential() ?? null;
}
function uqi() {
  return o?.road() ?? "none_at_claim";
}
function fqi(n, e) {
  if (e === null) return "none_at_claim";
  let t = e.kind === "bearer",
    i = t ? "CLAUDE_CODE_OAUTH_TOKEN" : "ANTHROPIC_API_KEY",
    u = t ? "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" : "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR";
  return r(n[i]) === void 0 ? Hcn(u) ?? "none" : "env_var";
}
function pqi(n) {
  if (_(n)) {
    let token = r(JGn(Fte, "OAuth token")),
      s = r(JGn(F1t, "API key"));
    if (token !== void 0 && s !== void 0) return null;
    return token === void 0 ? c(s) : {
      kind: "bearer",
      token: token
    };
  }
  let e = a(n, "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"),
    t = a(n, "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR"),
    token_2 = r(n.CLAUDE_CODE_OAUTH_TOKEN) ?? (e ? r(IE()) : void 0),
    key = r(n.ANTHROPIC_API_KEY) ?? (t ? r(qU()) : void 0);
  if (token_2 !== void 0) return {
    kind: "bearer",
    token: token_2
  };
  if (key !== void 0) return {
    kind: "key",
    key: key
  };
  if (e || t) return null;
  let token_3 = r(IE());
  if (token_3 !== void 0) return {
    kind: "bearer",
    token: token_3
  };
  return c(r(qU()));
}
function gRs() {
  let n = o?.env();
  if (n === void 0) return "no_auth";
  if ([...uM, "CLAUDE_CODE_USE_GATEWAY"].some(item => Pe(n[item]))) return "third_party_provider";
  let t = r(n.ANTHROPIC_BASE_URL);
  if (t !== void 0 && !Od(t)) return "custom_base_url";
  return L$n() === null ? "no_auth" : null;
}
var E = ["USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];
function GFt() {
  let n = o?.env() ?? {};
  return E.some(item => process.env[item] !== n[item]);
}
function mqi() {
  let n = o?.env();
  return n === void 0 || _(n) ? void 0 : r(n.CLAUDE_CODE_SUBSCRIPTION_TYPE);
}
function _(n) {
  return vk() || Ek() || a(n, "CLAUDE_CODE_CHILD_SESSION") || a(n, "CLAUDECODE");
}
function a(n, e) {
  return r(n[e]) !== void 0;
}
function c(key_2) {
  return key_2 === void 0 ? null : {
    kind: "key",
    key: key_2
  };
}
function r(n) {
  let e = n?.trim() ?? "";
  return e === "" ? void 0 : e;
}
export { cqi, L$n, uqi, fqi, pqi, gRs, GFt, mqi };