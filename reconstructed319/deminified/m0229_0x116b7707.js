// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Gy, pn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { P1s } from "B:/~BUN/root/chunk-dzqsqewb.js";
function _t(e, {
  safe: safe
}) {
  try {
    let {
        value: value,
        source: source
      } = pn(e, safe),
      defaultHost = !Gy();
    return P1s({
      value: value,
      source: source,
      defaultHost: defaultHost
    }, safe);
  } catch {
    return safe;
  }
}
function YKi(e, {
  safe: safe_2,
  others: others
}) {
  try {
    let {
        value: value_2,
        source: source_2
      } = pn(e, safe_2),
      a = others.find(item => item === value_2);
    return a !== void 0 && source_2 === "payload" && !Gy() ? a : safe_2;
  } catch {
    return safe_2;
  }
}
export { _t, YKi };