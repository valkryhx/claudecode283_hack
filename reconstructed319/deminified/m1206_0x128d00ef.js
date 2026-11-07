// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { M, je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var G$n = M(function (s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.execAsync = void 0;
  var e = je("child_process"),
    r = je("util");
  s.execAsync = r.promisify(e.exec);
});
export { G$n };