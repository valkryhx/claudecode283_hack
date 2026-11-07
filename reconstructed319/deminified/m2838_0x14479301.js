// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Lgo, VFn, NNt, GGe } from "B:/~BUN/root/chunk-pdtjaehv.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ev } from "B:/~BUN/root/chunk-z31ebsm2.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { o, oe, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var f = "anthropic/toolHostInterface";
function zqn() {
  return Pun();
}
function Pun() {
  let {
    version: version
  } = VFn;
  return {
    version: version,
    min_version: Lgo(ev.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, version)
  };
}
function tma() {
  let e = zqn(),
    n = ev.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (n !== void 0 && e?.min_version !== n) c("mcp_serve_tool_output", "launch_min_version_ignored", {
    launch_min_version: n,
    ...(e && {
      daemon_interface_version: e.version,
      daemon_interface_min_version: e.min_version
    })
  });
  return {
    experimental: e === void 0 ? {} : {
      [f]: e
    }
  };
}
var l = 100;
function nma(e, n) {
  let i = it(n) ? n[f] : void 0;
  if (i === void 0) return;
  let range = zqn();
  if (range === void 0) return;
  let s = typeof i === "string" && i.length <= l ? NNt(et(i, !1)) : void 0,
    refused = s === void 0 ? "unreadable" : {
      peer_too_old: "session_too_old",
      self_too_old: "daemon_too_old",
      agreed: void 0
    }[GGe(range, s).kind];
  if (refused === void 0) return;
  let text = `${e} was not run: ${s === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : refused === "session_too_old" ? `this session speaks version ${s.version} of the interface to this server, which works with version ${range.min_version} or later` : `this session works with version ${s.min_version} or later of the interface to this server, which speaks version ${range.version}`}. Retrying won't help: tell the user.`;
  return t(`MCP server: ${text}`, {
    level: "warn"
  }), c("mcp_serve_tool_output", `caller_interface_${refused}`, {
    daemon_interface_min_version: range.min_version
  }), {
    isError: !0,
    content: [{
      type: "text",
      text: text
    }],
    _meta: {
      [f]: {
        refused: refused,
        range: range
      }
    }
  };
}
var O = p(() => u({
  refused: o(),
  range: oe().optional()
}));
export { zqn, Pun, tma, nma };