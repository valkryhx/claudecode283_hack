// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
function ali(t) {
  bt().policyColdStartWaiter = t;
}
async function GC() {
  let policyColdStartWaiter = bt().policyColdStartWaiter;
  if (policyColdStartWaiter) await policyColdStartWaiter();
}
export { ali, GC };