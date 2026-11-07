// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
var s = new W(() => ({
  alreadyReported: new Set
}));

function Oq(r) {
  try {
    let e = s.of(H().host);
    if (!e.alreadyReported.has(r)) e.alreadyReported.add(r), e.listener?.(r)
  } catch (e) {
    a(e)
  }
}
export {
  Oq
};
