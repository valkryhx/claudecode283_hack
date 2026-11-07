// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { $Rs, URs } from "B:/~BUN/root/chunk-f0zgv0ya.js";
function bZs(e) {
  let feedbackRefusedByServer = URs(e);
  if (feedbackRefusedByServer === null) {
    c("feedback_refusal_memory", "no_principal");
    return;
  }
  g("feedback_refusal_memory"), Le(o => ({
    ...o,
    feedbackRefusedByServer: feedbackRefusedByServer
  }));
}
function SZs() {
  let feedbackRefusedByServer_2 = fe().feedbackRefusedByServer;
  if (typeof feedbackRefusedByServer_2?.principal === "string" && typeof feedbackRefusedByServer_2.at === "number") $Rs(feedbackRefusedByServer_2);
}
export { bZs, SZs };