// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
class u {
  latched = void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}
var d = he(new u(), e => e.reset());
function EL() {
  {
    if (d.latched !== void 0) return d.latched;
    let MCP_SDK_GENERATION = i.MCP_SDK_GENERATION,
      o = MCP_SDK_GENERATION === "v1" || MCP_SDK_GENERATION === "v2" ? MCP_SDK_GENERATION : void 0;
    if (MCP_SDK_GENERATION !== void 0 && o === void 0) t(`MCP_SDK_GENERATION=${MCP_SDK_GENERATION} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, {
      level: "warn"
    });
    let n = o === void 0 ? pn("tengu_brindle_causeway", !0) : void 0,
      r = o ?? (n?.value === !1 ? "v1" : "v2"),
      a = n === void 0 ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
    return d.latch(r), t(`mcp runtime arm: ${r} (source: ${a})`), l("tengu_mcp_sdk_generation", {
      generation: f(r),
      source: f(a)
    }), r;
  }
  return "v1";
}
export { EL };