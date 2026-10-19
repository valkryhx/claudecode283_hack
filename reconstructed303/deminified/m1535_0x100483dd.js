// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Qt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { KTn } from "B:/~BUN/root/chunk-78kr43tp.js";
import { Mce, rts } from "B:/~BUN/root/chunk-27fak1kn.js";
import { o, sI, T, u, $e } from "B:/~BUN/root/chunk-g3snhg6n.js";
var r = "",
  s = "",
  uiTableKey = "mcp",
  VTn = "mcp-display-only";
var p = f(() => u({}).passthrough()),
  R9r = f(() => $e([o(), T(u({
    type: o()
  }).passthrough()), sI()]).describe("MCP tool execution result"));
function c(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map(item => a(item) ? {
    ...item,
    source: {
      ...item.source,
      data: ""
    }
  } : item);
}
function i(e) {
  return Array.isArray(e) && e.some(n) ? e.filter(item => !n(item)) : e;
}
function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
var cNe = Qt({
  isMcp: !0,
  isOpenWorld() {
    return !1;
  },
  name: "mcp",
  uiTableKey: uiTableKey,
  backgrounding: "self",
  maxResultSizeChars: 1e5,
  async description() {
    return s;
  },
  async prompt() {
    return r;
  },
  get inputSchema() {
    return p();
  },
  get outputSchema() {
    return R9r();
  },
  create() {
    return {
      async call() {
        return {
          data: ""
        };
      },
      async checkPermissions() {
        return {
          behavior: "passthrough",
          message: "MCPTool requires permission."
        };
      }
    };
  },
  renderToolUseMessage(e, {
    verbose: verbose
  }) {
    return KTn(e, {
      verbose: verbose
    });
  },
  userFacingName: () => "mcp",
  stripForCreation: e => rts(c(e)),
  mapToolResultToToolResultBlockParam(e, tool_use_id) {
    return {
      tool_use_id: tool_use_id,
      type: "tool_result",
      content: Mce(i(e))
    };
  }
});
export { uiTableKey as Bir, VTn, R9r, cNe };