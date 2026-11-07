// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { lK, Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { SC } from "B:/~BUN/root/chunk-sy1h8mf0.js";
function aGe(e) {
  if (!lK(e)) return !1;
  if (Nt(e)) return !0;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && SC(e) !== void 0;
}
function wvr(e, o = {}) {
  return o.acceptCustomIds ? lK(e) : aGe(e);
}
function jJe(adoptedSessionId, o, n = {}) {
  if (o) return {
    adoptedSessionId: null,
    effectiveFork: !0
  };
  if (adoptedSessionId === void 0) return {
    adoptedSessionId: null,
    effectiveFork: !1
  };
  if (wvr(adoptedSessionId, n)) return {
    adoptedSessionId: adoptedSessionId,
    effectiveFork: !1
  };
  return t(`resume: transcript session id (${typeof adoptedSessionId}) rejected by the adoption gate; continuing as a fork under the fresh session id`), c("session_resume", "unadoptable_session_id"), {
    adoptedSessionId: null,
    effectiveFork: !0
  };
}
export { aGe, wvr, jJe };