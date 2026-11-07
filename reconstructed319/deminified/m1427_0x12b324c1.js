// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { o, I, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var $le = Wo({
  kind: "goal_proposal",
  payload: p(() => u({
    condition: o()
  })),
  result: p(() => u({
    approved: I(),
    explicit: I().optional()
  })),
  default: {
    approved: !1
  },
  hideWhile: ["panel", "draft"]
});
export { $le };