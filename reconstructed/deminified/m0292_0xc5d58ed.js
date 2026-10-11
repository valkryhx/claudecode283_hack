// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ia } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Rt } from "B:/~BUN/root/chunk-54p0h65d.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
class f {
  latched = void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}
var d = Rt(new f(), e => e.reset());
function lx() {
  {
    if (d.latched !== void 0) return d.latched;
    let MCP_SDK_GENERATION = a.MCP_SDK_GENERATION,
      o = MCP_SDK_GENERATION === "v1" || MCP_SDK_GENERATION === "v2" ? MCP_SDK_GENERATION : void 0;
    if (MCP_SDK_GENERATION !== void 0 && o === void 0) t(`MCP_SDK_GENERATION=${MCP_SDK_GENERATION} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, {
      level: "warn"
    });
    let n = o === void 0 ? ia("tengu_brindle_causeway", !0) : void 0,
      r = o ?? (n?.value === !1 ? "v1" : "v2"),
      u = n === void 0 ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
    return d.latch(r), t(`mcp runtime arm: ${r} (source: ${u})`), i("tengu_mcp_sdk_generation", {
      generation: c(r),
      source: c(u)
    }), r;
  }
  return "v1";
}
export { lx };