// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ja, Ea } from "B:/~BUN/root/chunk-ahv8vexc.js";
var o = new Set([-32002, ja.InvalidParams]);
function e(n) {
  return n instanceof Ea ? n.code : void 0;
}
function t(n) {
  return n instanceof Ea && n.code === ja.MethodNotFound;
}
function i(n) {
  return n instanceof Ea && (n.code === ja.MethodNotFound || n.code === ja.InvalidParams);
}
function c(n) {
  return n instanceof Ea && o.has(n.code);
}
function u(n) {
  return n instanceof Ea && n.code === ja.InvalidParams;
}
function d(n) {
  return n instanceof Ea && n.code === ja.UrlElicitationRequired;
}
export { e as getMcpErrorCode, t as isMcpMethodNotFoundError, u as isMcpNotADirectoryError, c as isMcpResourceNotFoundError, i as isMcpUnknownMethodError, d as isUrlElicitationRequiredMcpError };