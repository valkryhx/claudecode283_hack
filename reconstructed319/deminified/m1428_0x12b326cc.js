// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var n = new Je(() => ({
  current: void 0
}));
function Yqt(e) {
  return n.peek(e)?.current;
}
function fQ(e, o) {
  n.of(e).current = o;
}
export { Yqt, fQ };