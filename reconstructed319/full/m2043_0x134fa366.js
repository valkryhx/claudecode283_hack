// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  dn
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  jxt
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  _ve,
  epi
} from "B:/~BUN/root/chunk-6ecdk6hr.js";
import {
  o,
  hN,
  C,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var r = "",
  s = "",
  N8r = "mcp",
  Tor = "mcp-display-only";
var c = p(() => u({}).passthrough()),
  $8o = p(() => Be([o(), C(u({
    type: o()
  }).passthrough()), hN()]).describe("MCP tool execution result"));

function i(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map((t) => a(t) ? {
    ...t,
    source: {
      ...t.source,
      data: ""
    }
  } : t)
}

function m(e) {
  return Array.isArray(e) && e.some(n) ? e.filter((t) => !n(t)) : e
}

function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === ""
}

function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== ""
}
var _3e = dn({
  isMcp: !0,
  isOpenWorld() {
    return !1
  },
  name: "mcp",
  uiTableKey: N8r,
  backgrounding: "self",
  maxResultSizeChars: 1e5,
  async description() {
    return s
  },
  async prompt() {
    return r
  },
  get inputSchema() {
    return c()
  },
  get outputSchema() {
    return $8o()
  },
  create() {
    return {
      async call() {
        return {
          data: ""
        }
      },
      async checkPermissions() {
        return {
          behavior: "passthrough",
          message: "MCPTool requires permission."
        }
      }
    }
  },
  renderToolUseMessage(e, {
    verbose: t
  }) {
    return jxt(e, {
      verbose: t
    })
  },
  userFacingName: () => "mcp",
  stripForCreation: (e) => epi(i(e)),
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: _ve(m(e))
    }
  }
});
export {
  N8r,
  Tor,
  $8o,
  _3e
};
