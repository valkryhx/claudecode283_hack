// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { I, u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var zVt = Wo({
  kind: "it2_setup",
  payload: p(() => u({
    tmuxAvailable: I()
  })),
  result: p(() => B(["installed", "use-tmux", "cancelled"])),
  default: "cancelled"
});
export { zVt };