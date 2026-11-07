// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";

function jCt() {
  return bt().reconnect
}

function gli() {
  return bt().toggle
}

function zOe() {
  return bt().isDisabled
}

function yli() {
  return bt().dialBlockCause
}

function nYo(e, n, r, c) {
  let o = bt();
  o.reconnect = e, o.toggle = n, o.isDisabled = r, o.dialBlockCause = c
}

function rYo() {
  let e = bt();
  e.reconnect = null, e.toggle = null, e.isDisabled = null, e.dialBlockCause = null
}
export {
  jCt,
  gli,
  zOe,
  yli,
  nYo,
  rYo
};
