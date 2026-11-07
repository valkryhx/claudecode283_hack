// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { tDt } from "B:/~BUN/root/chunk-wjxjrbnh.js";
import { Ume } from "B:/~BUN/root/chunk-cbbfqbjt.js";
import { sQn } from "B:/~BUN/root/chunk-6ybsmb5s.js";
async function kNo(e, a) {
  e();
  let o = tDt();
  if (o !== null) return o.close(), null;
  return await sQn("stop_command", a.storageV5, Ume()), null;
}
export { kNo };