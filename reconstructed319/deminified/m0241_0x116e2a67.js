// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $p } from "B:/~BUN/root/chunk-xrwdh0g4.js";
var FTs = "remote-control-device-report",
  SE = `<${FTs}/>`,
  w3 = [$p, SE];
function PRr(e) {
  let r = e;
  for (let t of w3) if (r.startsWith(`${t}
`)) r = r.slice(t.length + 1);
  return r;
}
export { FTs, SE, w3, PRr };