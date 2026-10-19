// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  xps,
  Pps
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Zo
} from "B:/~BUN/root/chunk-f2a36mfn.js";
import {
  Jc
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var uoe = Zo({
  kind: "mcp_url_elicitation",
  payload: f(() => Jc((e) => typeof e === "object" && e !== null && ("serverName" in e) && ("params" in e))),
  result: f(() => Jc((e) => typeof e === "object" && e !== null)),
  default: {
    action: "cancel"
  }
});

function O_e() {
  if (Pps()) return;
  let e = !1,
    t;
  xps(() => {
    if (!e) e = !0, t = E("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t
  })
}
export {
  uoe,
  O_e
};
