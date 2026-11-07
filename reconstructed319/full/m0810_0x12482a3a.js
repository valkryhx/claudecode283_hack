// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  TD
} from "B:/~BUN/root/chunk-wxhfn3za.js";
import {
  VZ
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  bZ,
  UOi,
  BOi,
  jOi
} from "B:/~BUN/root/chunk-cxcakgnv.js";

function VXn(o, r = o) {
  let m = TD() && VZ() && r.some((e) => e.mcpInfo?.serverName === bZ && e.mcpInfo.toolName === Me);
  return jOi(BOi(o)).filter((e) => !m || e.mcpInfo?.serverName !== bZ || e.mcpInfo.toolName !== UOi)
}
export {
  VXn
};
