// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ft
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  j8t
} from "B:/~BUN/root/chunk-twyx844h.js";
import {
  wse
} from "B:/~BUN/root/chunk-6tpkhtzg.js";
import {
  o,
  Wne,
  C,
  u,
  $e
} from "B:/~BUN/root/chunk-n8qdr73v.js";
var r = "",
  s = "",
  wIn = "mcp",
  U8t = "mcp-display-only";
var p = f(() => u({}).passthrough()),
  jpr = f(() => $e([o(), C(u({
    type: o()
  }).passthrough()), Wne()]).describe("MCP tool execution result")),
  Swe = Ft({
    isMcp: !0,
    isOpenWorld() {
      return !1
    },
    name: "mcp",
    uiTableKey: wIn,
    backgrounding: "self",
    maxResultSizeChars: 1e5,
    async description() {
      return s
    },
    async prompt() {
      return r
    },
    get inputSchema() {
      return p()
    },
    get outputSchema() {
      return jpr()
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
      return j8t(e, {
        verbose: t
      })
    },
    userFacingName: () => "mcp",
    mapToolResultToToolResultBlockParam(e, t) {
      return {
        tool_use_id: t,
        type: "tool_result",
        content: wse(e)
      }
    }
  });
export {
  wIn,
  U8t,
  jpr,
  Swe
};
