// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Qf
} from "B:/~BUN/root/chunk-eev762xg.js";
var a = 120000,
  s = 600000;

function P2(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = Qf(e);
    if (!isNaN(t) && t > 0) return t
  }
  return a
}

function $9(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = Qf(e);
    if (!isNaN(t) && t > 0) return Math.max(t, P2(n))
  }
  return Math.max(s, P2(n))
}
var b0i = 1800000,
  jdo = 7200000;

function S0i(n) {
  return Math.min(Math.max(n, $9()), 2147483647)
}

function w0i(n, e) {
  return Math.max(n, P2(e))
}

function $ft(n, e) {
  return n !== void 0 && n > 0 ? e : void 0
}
var i = 2000;

function pbr({
  requestedTimeoutMs: n,
  isMainAgent: e,
  canAutoBackground: t,
  subagentCapMs: o = 0,
  env: u = process.env
}) {
  if (!t) return n;
  let r = e ? Qf(u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS) : o;
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, i))
}
export {
  P2,
  $9,
  b0i,
  jdo,
  S0i,
  w0i,
  $ft,
  pbr
};
