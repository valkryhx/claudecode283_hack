// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
var s = null;
function dfi(e) {
  let n = s;
  return s = e, n;
}
function Tsr() {
  return s;
}
var r = null;
function cfi(e) {
  let n = r;
  return r = e, n;
}
async function qle(e) {
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
function ufi(e) {
  let n = t;
  return t = e, n;
}
function alt() {
  return t;
}
function Csr(e) {
  let n = bt();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = !0, n.pendingScopeExpansionNotice = e;
}
function l9o() {
  let e = bt(),
    pendingScopeExpansionNotice = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, pendingScopeExpansionNotice;
}
function ffi() {
  let e = l9o();
  if (e) process.stderr.write(`${e}
`);
}
export { dfi, Tsr, cfi, qle, FirstPartyDesignNeedsConsentError as O3e, ufi, alt, Csr, l9o, ffi };