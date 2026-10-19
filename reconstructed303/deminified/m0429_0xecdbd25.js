// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { En } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
class f {
  latched = void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}
var d = He(new f(), e => e.reset());
function cO() {
  {
    if (d.latched !== void 0) return d.latched;
    let MCP_SDK_GENERATION = a.MCP_SDK_GENERATION,
      o = MCP_SDK_GENERATION === "v1" || MCP_SDK_GENERATION === "v2" ? MCP_SDK_GENERATION : void 0;
    if (MCP_SDK_GENERATION !== void 0 && o === void 0) t(`MCP_SDK_GENERATION=${MCP_SDK_GENERATION} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, {
      level: "warn"
    });
    let n = o === void 0 ? En("tengu_brindle_causeway", !0) : void 0,
      r = o ?? (n?.value === !1 ? "v1" : "v2"),
      u = n === void 0 ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
    return d.latch(r), t(`mcp runtime arm: ${r} (source: ${u})`), i("tengu_mcp_sdk_generation", {
      generation: c(r),
      source: c(u)
    }), r;
  }
  return "v1";
}
export { cO };