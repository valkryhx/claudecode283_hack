// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import { ye, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
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
      return !ye();
    },
    isEnabled: () => ye() || xn(),
    load: () => import("B:/~BUN/root/chunk-fdjnxddw.js")
  },
  n = e;
export { n as default, o as goalNonInteractive };