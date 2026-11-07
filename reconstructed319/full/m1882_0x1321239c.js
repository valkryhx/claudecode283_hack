// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  OJs
} from "B:/~BUN/root/chunk-50dw6yg4.js";
import {
  _s
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  pg,
  np
} from "B:/~BUN/root/chunk-wznngf8b.js";

function SBo(n, t) {
  let o = Array.isArray(n?.questions) && typeof n.questions[0]?.question === "string" ? n.questions[0].question : void 0,
    r = typeof n?.description === "string" ? n.description : "",
    e = o ?? OJs(r)?.running ?? (r || (t() ?? ""));
  return e ? np(_s(e).replace(/\s+/g, " ").trim(), pg) : ""
}
export {
  SBo
};
