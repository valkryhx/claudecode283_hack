// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Up
} from "B:/~BUN/root/chunk-xek40d46.js";
import {
  _S,
  vm
} from "B:/~BUN/root/chunk-tzzvaz2j.js";

function Hwe(t, r) {
  return `${Up(t)??""}/${Up(r)??""}`
}

function mao({
  serverName: t,
  toolName: r,
  mcpTaskId: o,
  toolUseId: s,
  pollIntervalMs: n,
  abortController: a,
  protocol: i,
  driveAbortController: p,
  ttlExpiresAt: c
}) {
  let e = _S("mcp_task");
  return {
    ...vm(e, "mcp_task", Hwe(t, r), s),
    type: "mcp_task",
    status: "running",
    serverName: t,
    toolName: r,
    mcpTaskId: o ?? e,
    mcpStatus: "working",
    pollIntervalMs: n,
    abortController: a,
    protocol: i,
    driveAbortController: p,
    ttlExpiresAt: c
  }
}
export {
  Hwe,
  mao
};
