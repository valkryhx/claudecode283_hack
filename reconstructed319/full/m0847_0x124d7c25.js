// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  pjs
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  zte
} from "B:/~BUN/root/chunk-f9dwrymq.js";
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function G5o() {
  let e = pjs();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return zte() ? "ignored" : "used"
}

function o() {
  return G5o() === "used" ? pjs() : void 0
}

function V5o() {
  let e = o();
  return e === void 0 ? {
    key: z(),
    fromHost: !1
  } : {
    key: e,
    fromHost: !0
  }
}

function skn() {
  return V5o().key
}
export {
  G5o,
  V5o,
  skn
};
