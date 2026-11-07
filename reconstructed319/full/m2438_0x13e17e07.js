// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  YSe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";

function yMo(t, n) {
  let e = Nn(t),
    r = n.map(Nn).sort(),
    s = YSe(e, r.map((d) => ({
      name: d
    })), {
      maxEditDistance: 2
    });
  if (s) return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8,
    a = r.slice(0, o).join(", "),
    i = r.length > o ? ` (and ${r.length-o} more \u2014 run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`
}

function Uqn(t, n, e) {
  if (e && n.length === 0) return `No MCP server named "${Nn(t)}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;
  return yMo(t, n) + (e ? ` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})` : "")
}
export {
  yMo,
  Uqn
};
