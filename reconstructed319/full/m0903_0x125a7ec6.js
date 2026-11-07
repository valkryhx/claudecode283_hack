// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ui
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  CDr
} from "B:/~BUN/root/chunk-grwykqvw.js";

function llt(t) {
  let r = [];
  for (let o of t) {
    if (!Ui(o)) continue;
    let {
      config: e
    } = o, n = e && typeof e === "object" && "url" in e && typeof e.url === "string" ? e.url : null;
    if (n !== null && CDr(n)) r.push(o)
  }
  return r.length === 1 ? r[0] : null
}
export {
  llt
};
