// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var Lhe = Wo({
  kind: "remote_callout",
  payload: p(() => u({})),
  result: p(() => B(["enable", "dismiss", "cancelled"])),
  default: "cancelled",
  hideWhile: ["panel", "draft"]
});
export { Lhe };