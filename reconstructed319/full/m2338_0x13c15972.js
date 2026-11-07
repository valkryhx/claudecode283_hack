// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wa,
  Dc
} from "B:/~BUN/root/chunk-w089myk0.js";
import "B:/~BUN/root/chunk-47qakrcr.js";
var n = new Set([-32002, Wa.InvalidParams]);

function e(o) {
  return o instanceof Dc ? o.code : void 0
}

function t(o) {
  return o instanceof Dc && o.code === Wa.MethodNotFound
}

function c(o) {
  return o instanceof Dc && (o.code === Wa.MethodNotFound || o.code === Wa.InvalidParams)
}

function i(o) {
  return o instanceof Dc && n.has(o.code)
}

function u(o) {
  return o instanceof Dc && o.code === Wa.InvalidParams
}

function d(o) {
  return o instanceof Dc && o.code === Wa.UrlElicitationRequired
}
export {
  e as getMcpErrorCode, t as isMcpMethodNotFoundError, u as isMcpNotADirectoryError, i as isMcpResourceNotFoundError, c as isMcpUnknownMethodError, d as isUrlElicitationRequiredMcpError
};
