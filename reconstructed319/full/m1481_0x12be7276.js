// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  h$,
  kde,
  XK,
  qB
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Zhe
} from "B:/~BUN/root/chunk-er9gv3xw.js";
async function hat() {
  h$(), qB(), kde(), XK.emit();
  try {
    await Zhe.rehome(), g("skill_directory_reload")
  } catch (r) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`, {
      level: "error"
    }), c("skill_directory_reload", "rehome_failed")
  }
}
export {
  hat
};
