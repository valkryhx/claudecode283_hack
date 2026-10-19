// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { wOr, Asn, jVn, WVn } from "B:/~BUN/root/chunk-z84amwaw.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { tR } from "B:/~BUN/root/chunk-bsjrnca2.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { o, oe, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var _ = "anthropic/toolHostInterface";
function zhn() {
  return Ghn();
}
function Ghn() {
  let {
    version: version
  } = Asn;
  return {
    version: version,
    min_version: wOr(tR.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, version)
  };
}
function HZs() {
  let e = zhn(),
    n = tR.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (n !== void 0 && e?.min_version !== n) p("mcp_serve_tool_output", "launch_min_version_ignored", {
    launch_min_version: n,
    ...(e && {
      daemon_interface_version: e.version,
      daemon_interface_min_version: e.min_version
    })
  });
  return {
    experimental: e === void 0 ? {} : {
      [_]: e
    }
  };
}
var l = 100;
function $Zs(e, n) {
  let i = Dn(n) ? n[_] : void 0;
  if (i === void 0) return;
  let range = zhn();
  if (range === void 0) return;
  let s = typeof i === "string" && i.length <= l ? jVn(pt(i, !1)) : void 0,
    refused = s === void 0 ? "unreadable" : {
      peer_too_old: "session_too_old",
      self_too_old: "daemon_too_old",
      agreed: void 0
    }[WVn(range, s).kind];
  if (refused === void 0) return;
  let text = `${e} was not run: ${s === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : refused === "session_too_old" ? `this session speaks version ${s.version} of the interface to this server, which works with version ${range.min_version} or later` : `this session works with version ${s.min_version} or later of the interface to this server, which speaks version ${range.version}`}. Retrying won't help: tell the user.`;
  return t(`MCP server: ${text}`, {
    level: "warn"
  }), p("mcp_serve_tool_output", `caller_interface_${refused}`, {
    daemon_interface_min_version: range.min_version
  }), {
    isError: !0,
    content: [{
      type: "text",
      text: text
    }],
    _meta: {
      [_]: {
        refused: refused,
        range: range
      }
    }
  };
}
var O = f(() => u({
  refused: o(),
  range: oe().optional()
}));
export { zhn, Ghn, HZs, $Zs };