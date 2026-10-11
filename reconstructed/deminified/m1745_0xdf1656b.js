// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-gyysn9h9.js";
import { Ns, fl } from "B:/~BUN/root/chunk-mj5a0y0g.js";
import "B:/~BUN/root/chunk-3q3x5rmb.js";
var n = new Set([-32002, Ns.InvalidParams]);
function e(o) {
  return o instanceof fl ? o.code : void 0;
}
function t(o) {
  return o instanceof fl && o.code === Ns.MethodNotFound;
}
function c(o) {
  return o instanceof fl && (o.code === Ns.MethodNotFound || o.code === Ns.InvalidParams);
}
function i(o) {
  return o instanceof fl && n.has(o.code);
}
function u(o) {
  return o instanceof fl && o.code === Ns.InvalidParams;
}
function d(o) {
  return o instanceof fl && o.code === Ns.UrlElicitationRequired;
}
export { e as getMcpErrorCode, t as isMcpMethodNotFoundError, u as isMcpNotADirectoryError, i as isMcpResourceNotFoundError, c as isMcpUnknownMethodError, d as isUrlElicitationRequiredMcpError };