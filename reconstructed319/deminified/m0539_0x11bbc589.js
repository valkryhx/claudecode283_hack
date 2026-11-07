// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
class n {
  endpoint = void 0;
  set(e) {
    this.endpoint = e;
  }
}
var t = new W(() => new n());
function d() {
  return t.of(H().host);
}
function Kvr(e) {
  d().set(e);
}
function a1i() {
  return d().endpoint;
}
export { Kvr, a1i };