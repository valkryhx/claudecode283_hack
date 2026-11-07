// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  E5,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  kd
} from "B:/~BUN/root/chunk-jbjsy1k0.js";
var hQt = (o) => o.mcpInfo?.effectiveMaxPermission === "ask" ? {
  ceiling: "ask"
} : {};
var B$ = (o) => ({
  tool: o.name,
  ceiling: hQt(o).ceiling
});

function upt(o) {
  return o.hook.type === "callback" && o.hook.internal === !0
}

function YLi(o, n) {
  if (kd()) {
    let r = o.filter(upt),
      e = o.length - r.length;
    if (e > 0) t(`Hooks: ${e} ${n} ${P(e,"hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`, {
      level: "warn"
    }), c(E5(n), "not_run_in_tool_server_daemon", {
      num_dropped: e
    });
    return r
  }
  return o
}
export {
  hQt,
  B$,
  upt,
  YLi
};
