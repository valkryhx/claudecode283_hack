// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { fDn } from "B:/~BUN/root/chunk-zny2eqw3.js";
import { vm } from "B:/~BUN/root/chunk-78gy49b7.js";
import { LKe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
var $ce = o => o.name === LKe && vm(o);
var XT = o => {
  let t = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ae().loadedModules.filter(item => !(t && $ce(item)) && !(o === "tool.check" && item.name === fDn && vm(item)));
};
export { $ce, XT };