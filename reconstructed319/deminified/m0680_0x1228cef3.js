// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qi, pn, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
function eXs() {
  try {
    let {
      value: value,
      source: source
    } = pn("tengu_radiant_heron", !1);
    switch (source) {
      case "payload":
      case "override":
        return value === !0;
      case "disabled":
        return !1;
      case "fallback":
        return qi() ? !1 : "unknown";
      case "disk":
        return "unknown";
    }
  } catch {
    return "unknown";
  }
}
function tXs() {
  return v("tengu_radiant_heron", !1);
}
export { eXs, tXs };