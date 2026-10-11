// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  tuo,
  nuo
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  uo
} from "B:/~BUN/root/chunk-6pbxcdg3.js";
import {
  lp
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var i8 = uo({
  kind: "mcp_url_elicitation",
  payload: f(() => lp((e) => typeof e === "object" && e !== null && ("serverName" in e) && ("params" in e))),
  result: f(() => lp((e) => typeof e === "object" && e !== null)),
  default: {
    action: "cancel"
  }
});

function cse() {
  if (nuo()) return;
  let e = !1,
    t;
  tuo(() => {
    if (!e) e = !0, t = x("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t
  })
}
export {
  i8,
  cse
};
