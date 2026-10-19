// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  tu
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
var a = 120000,
  i = 600000;

function Die(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = tu(e);
    if (!isNaN(t) && t > 0) return t
  }
  return a
}

function XPe(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = tu(e);
    if (!isNaN(t) && t > 0) return Math.max(t, Die(n))
  }
  return Math.max(i, Die(n))
}
var s = 1800000;

function Ofe() {
  return Math.min(Math.max(7200000, XPe()), 2147483647)
}

function DPs(n) {
  return Math.max(s, Die(n))
}

function Wjn(n, e) {
  return n !== void 0 && n > 0 ? e : void 0
}
var _ = 2000;

function zjn({
  requestedTimeoutMs: n,
  isMainAgent: e,
  canAutoBackground: t,
  env: u = process.env
}) {
  if (!e || !t) return n;
  let o = u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!o) return n;
  let r = tu(o);
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, _))
}
export {
  Die,
  XPe,
  Ofe,
  DPs,
  Wjn,
  zjn
};
