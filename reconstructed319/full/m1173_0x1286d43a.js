// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _qe
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  M
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var BL = M(function(s) {
  var r = _qe(),
    o = (e) => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}),
    i = (e) => {
      if (typeof e === "function") return e;
      let t = Promise.resolve(e);
      return () => t
    };
  s.getSmithyContext = o;
  s.normalizeProvider = i
});
export {
  BL
};
