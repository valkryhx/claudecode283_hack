// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  $Rs,
  URs
} from "B:/~BUN/root/chunk-f0zgv0ya.js";

function bZs(e) {
  let r = URs(e);
  if (r === null) {
    c("feedback_refusal_memory", "no_principal");
    return
  }
  g("feedback_refusal_memory"), Le((o) => ({
    ...o,
    feedbackRefusedByServer: r
  }))
}

function SZs() {
  let e = fe().feedbackRefusedByServer;
  if (typeof e?.principal === "string" && typeof e.at === "number") $Rs(e)
}
export {
  bZs,
  SZs
};
