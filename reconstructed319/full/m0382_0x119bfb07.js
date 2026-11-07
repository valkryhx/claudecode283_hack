// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";

function ed() {
  let _ = i.MCP_TIMEOUT;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 30000
}

function XTe() {
  let _ = i.MCP_CONNECT_TIMEOUT_MS;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 5000
}
var zZ = 2000,
  mHi = 8000,
  hHi = 500;
export {
  ed,
  XTe,
  zZ,
  mHi,
  hHi
};
