// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
var s = null;
function qns(e) {
  let n = s;
  return s = e, n;
}
function YRn() {
  return s;
}
var r = null;
function Kns(e) {
  let n = r;
  return r = e, n;
}
async function v7(e) {
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
function Yns(e) {
  let n = t;
  return t = e, n;
}
function lKe() {
  return t;
}
function XRn(e) {
  let n = Ft();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = !0, n.pendingScopeExpansionNotice = e;
}
function OJr() {
  let e = Ft(),
    pendingScopeExpansionNotice = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, pendingScopeExpansionNotice;
}
function Xns() {
  let e = OJr();
  if (e) process.stderr.write(`${e}
`);
}
export { qns, YRn, Kns, v7, FirstPartyDesignNeedsConsentError as NNe, Yns, lKe, XRn, OJr, Xns };