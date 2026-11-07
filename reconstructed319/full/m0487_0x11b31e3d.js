// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Jae
} from "B:/~BUN/root/chunk-q78ga0zw.js";
var n = 1;

function r() {
  return Jae()
}
var s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function B0t(t) {
  return typeof t === "string" && s.test(t)
}

function qZ() {
  return {
    msgV: n,
    msg_id: r()
  }
}
export {
  B0t,
  qZ
};
