// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  OZ
} from "B:/~BUN/root/chunk-vke7wtay.js";
import {
  vm
} from "B:/~BUN/root/chunk-78gy49b7.js";

function SZ(o) {
  return o.hookCaller === void 0 && o.pluginUnnamed === !0 && (Ae().loadedModules.some((n) => !vm(n)) || OZ())
}
var Nyr = "A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
export {
  SZ,
  Nyr
};
