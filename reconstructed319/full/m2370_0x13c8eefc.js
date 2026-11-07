// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nu
} from "B:/~BUN/root/chunk-vs3bcjd7.js";
import {
  OS,
  $g
} from "B:/~BUN/root/chunk-kgvnwy91.js";

function Xle(e, t) {
  return `${nu(e)??""}/${nu(t)??""}`
}

function tpi(e) {
  return nu(e) ?? ""
}

function Jsr({
  serverName: e,
  toolName: t,
  mcpTaskId: o,
  toolUseId: s,
  pollIntervalMs: a,
  abortController: n,
  backgroundedToDeliverMessage: i,
  protocol: p,
  driveAbortController: c,
  ttlExpiresAt: l
}) {
  let r = OS("mcp_task");
  return {
    ...$g(r, "mcp_task", Xle(e, t), s),
    type: "mcp_task",
    status: "running",
    serverName: e,
    toolName: t,
    mcpTaskId: o ?? r,
    mcpStatus: "working",
    pollIntervalMs: a,
    abortController: n,
    backgroundedToDeliverMessage: i,
    protocol: p,
    driveAbortController: c,
    ttlExpiresAt: l
  }
}
export {
  Xle,
  tpi,
  Jsr
};
