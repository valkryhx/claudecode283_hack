// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var n = he({
  accepted: !1
}, (e) => {
  e.accepted = !1
});

function le() {
  return n.accepted
}

function fc() {
  return n.accepted
}

function FR() {
  return fc()
}

function Htt() {
  return le()
}
var t = {
  isOn: void 0
};

function uea(e) {
  t.isOn = e
}

function qJ() {
  if (n.accepted) try {
    return t.isOn?.() === !0
  } catch {
    return !1
  }
  return !1
}

function fea(e) {
  n.accepted = e
}
export {
  le,
  fc,
  FR,
  Htt,
  uea,
  qJ,
  fea
};
