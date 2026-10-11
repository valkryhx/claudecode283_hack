// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ide
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
var n = 1;

function r() {
  return Ide()
}
var s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function j4e(t) {
  return typeof t === "string" && s.test(t)
}

function pz() {
  return {
    msgV: n,
    msg_id: r()
  }
}
export {
  j4e,
  pz
};
