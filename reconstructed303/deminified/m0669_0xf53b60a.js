// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { eWo } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { HIe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function g9r() {
  let e = eWo();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return HIe() ? "ignored" : "used";
}
function o() {
  return g9r() === "used" ? eWo() : void 0;
}
function h9r() {
  let key = o();
  return key === void 0 ? {
    key: K(),
    fromHost: !1
  } : {
    key: key,
    fromHost: !0
  };
}
function EKt() {
  return h9r().key;
}
export { g9r, h9r, EKt };