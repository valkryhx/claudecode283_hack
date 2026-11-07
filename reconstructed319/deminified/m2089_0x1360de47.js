// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { $yi, Uyi } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var cge = Wo({
  kind: "mcp_url_elicitation",
  payload: p(() => Ep(e => typeof e === "object" && e !== null && "serverName" in e && "params" in e)),
  result: p(() => Ep(e => typeof e === "object" && e !== null)),
  default: {
    action: "cancel"
  }
});
function yIe() {
  if (Uyi()) return;
  let e = !1,
    t;
  $yi(() => {
    if (!e) e = !0, t = v("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t;
  });
}
export { cge, yIe };