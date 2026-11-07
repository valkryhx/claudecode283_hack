// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  o4r
} from "B:/~BUN/root/chunk-hkhajqhb.js";
class _gn extends o4r {
  constructor(t, e) {
    super(t, e);
    let o = this._ondata;
    this._ondata = (r) => o(typeof r === "string" ? Buffer.from(r, "utf8") : r)
  }
}
export {
  _gn
};
