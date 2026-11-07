// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ey, D5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
var n = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu,
  o = /[\u001b\u0080-\u009f]/g,
  c = 8;
function eA(u) {
  let e = u.replace(o, "").replace(D5, "").replace(/[\v\f\r]/g, "");
  for (let r = 0; r < c; r++) {
    let t = Ey(e.replace(n, ""));
    if (t === e) return e;
    e = t;
  }
  return e.replace(/[\ud800-\udfff]/g, "").replace(n, "");
}
export { eA };