// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jt } from "B:/~BUN/root/chunk-dv435n4g.js";
var s = null;
function Nio(e) {
  let n = s;
  return s = e, n;
}
function X8t() {
  return s;
}
var r = null;
function Hio(e) {
  let n = r;
  return r = e, n;
}
async function C4(e) {
  return (await r?.(e)) ?? !1;
}
class FirstPartyDesignNeedsConsentError extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function Fio(e) {
  let n = t;
  return t = e, n;
}
function w0e() {
  return t;
}
function J8t(e) {
  let n = jt();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = !0, n.pendingScopeExpansionNotice = e;
}
function Ypr() {
  let e = jt(),
    pendingScopeExpansionNotice = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, pendingScopeExpansionNotice;
}
function $io() {
  let e = Ypr();
  if (e) process.stderr.write(`${e}
`);
}
export { Nio, X8t, Hio, C4, FirstPartyDesignNeedsConsentError as Twe, Fio, w0e, J8t, Ypr, $io };