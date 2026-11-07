// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
function uu(e, o, r = {}, level = "debug") {
  let n = e === void 0 ? "[remote-tools]" : `[remote-tools call=${e}]`,
    g = Object.entries(r).flatMap(([d, i]) => i === void 0 ? [] : [`${d}=${i}`]).join(" ");
  t(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, {
    level: level
  });
}
function _Sn(e) {
  return e === "outcome_of" ? "verbose" : "debug";
}
export { uu, _Sn };