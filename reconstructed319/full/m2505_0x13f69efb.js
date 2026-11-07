// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  WMt
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  z6r,
  IBe
} from "B:/~BUN/root/chunk-6rnaxy3c.js";
var fWr = (t) => (e) => {
    if (!WMt(e)) return {
      error: Error("Theme takes the name of a theme")
    };
    t(e);
    return
  },
  pWr = (t, e, r) => IBe(z6r(e), t, fWr(e.setTheme), r);
export {
  fWr,
  pWr
};
