// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pc, DC } from "B:/~BUN/root/chunk-game8aqv.js";
import { lL } from "B:/~BUN/root/chunk-4vcs773m.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { D_ } from "B:/~BUN/root/chunk-sxvr9rzb.js";
function btr(fastMode, n) {
  let o = D_("--fast-mode");
  if (o !== "on" && o !== "off") return;
  DC({
    ...(Pc() ?? {}),
    fastMode: fastMode
  }), ir(), lL("--fast-mode", [], fastMode ? "on" : "off", void 0, n);
}
export { btr };