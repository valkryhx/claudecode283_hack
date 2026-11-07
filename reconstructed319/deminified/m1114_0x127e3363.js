// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { eW } from "B:/~BUN/root/chunk-ahv8vexc.js";
class P_n {
  append(e) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
  }
  readMessage() {
    if (!this._buffer) return null;
    let e = this._buffer.indexOf(`
`);
    if (e === -1) return null;
    let r = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(e + 1), U2o(r);
  }
  clear() {
    this._buffer = void 0;
  }
}
function U2o(e) {
  return eW.parse(JSON.parse(e));
}
function Y7n(e) {
  return JSON.stringify(e) + `
`;
}
export { P_n, U2o, Y7n };