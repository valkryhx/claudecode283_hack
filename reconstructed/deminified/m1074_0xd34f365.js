// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Te, Yn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
var e = {
    type: "local-jsx",
    name: "goal",
    description: "Set a goal Claude checks before stopping",
    argumentHint: "[<condition> | clear]",
    immediate: !0
  },
  o = {
    type: "local",
    name: "goal",
    supportsNonInteractive: !0,
    thinClientDispatch: "post-text",
    description: "Set a goal \u2014 keep working until the condition is met",
    get isHidden() {
      return !Te();
    },
    isEnabled: () => Te() || Yn(),
    load: () => import("B:/~BUN/root/chunk-zgh25df5.js")
  },
  n = e;
export { n as default, o as goalNonInteractive };