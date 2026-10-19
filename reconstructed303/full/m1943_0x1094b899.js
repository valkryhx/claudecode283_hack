// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  jp
} from "B:/~BUN/root/chunk-9pv2t2x4.js";
import {
  AE,
  tb
} from "B:/~BUN/root/chunk-c2nm18xm.js";

function g7(t, r) {
  return `${jp(t)??""}/${jp(r)??""}`
}

function ots(t) {
  return jp(t) ?? ""
}

function LCn({
  serverName: t,
  toolName: r,
  mcpTaskId: o,
  toolUseId: s,
  pollIntervalMs: a,
  abortController: n,
  protocol: i,
  driveAbortController: p,
  ttlExpiresAt: c
}) {
  let e = AE("mcp_task");
  return {
    ...tb(e, "mcp_task", g7(t, r), s),
    type: "mcp_task",
    status: "running",
    serverName: t,
    toolName: r,
    mcpTaskId: o ?? e,
    mcpStatus: "working",
    pollIntervalMs: a,
    abortController: n,
    protocol: i,
    driveAbortController: p,
    ttlExpiresAt: c
  }
}
export {
  g7,
  ots,
  LCn
};
