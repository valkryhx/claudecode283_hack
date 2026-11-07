// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  vp
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  Tee,
  Q_
} from "B:/~BUN/root/chunk-esnm3r09.js";

function Ztn() {
  let r = !1;
  try {
    r = vp()
  } catch (o) {
    a(o)
  }
  if (!r) return !1;
  try {
    return Tee()
  } catch (o) {
    return a(o), !0
  }
}

function Qb() {
  if (!Ztn()) return !1;
  try {
    return Q_() === "unanswered"
  } catch (r) {
    return a(r), !0
  }
}

function UNt() {
  try {
    Ae().organizationAsk.hasHeld = !0
  } catch (r) {
    a(r)
  }
}
export {
  Ztn,
  Qb,
  UNt
};
