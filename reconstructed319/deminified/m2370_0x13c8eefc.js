// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nu } from "B:/~BUN/root/chunk-vs3bcjd7.js";
import { OS, $g } from "B:/~BUN/root/chunk-kgvnwy91.js";
function Xle(e, t) {
  return `${nu(e) ?? ""}/${nu(t) ?? ""}`;
}
function tpi(e) {
  return nu(e) ?? "";
}
function Jsr({
  serverName: serverName,
  toolName: toolName,
  mcpTaskId: mcpTaskId,
  toolUseId: toolUseId,
  pollIntervalMs: pollIntervalMs,
  abortController: abortController,
  backgroundedToDeliverMessage: backgroundedToDeliverMessage,
  protocol: protocol,
  driveAbortController: driveAbortController,
  ttlExpiresAt: ttlExpiresAt
}) {
  let r = OS("mcp_task");
  return {
    ...$g(r, "mcp_task", Xle(serverName, toolName), toolUseId),
    type: "mcp_task",
    status: "running",
    serverName: serverName,
    toolName: toolName,
    mcpTaskId: mcpTaskId ?? r,
    mcpStatus: "working",
    pollIntervalMs: pollIntervalMs,
    abortController: abortController,
    backgroundedToDeliverMessage: backgroundedToDeliverMessage,
    protocol: protocol,
    driveAbortController: driveAbortController,
    ttlExpiresAt: ttlExpiresAt
  };
}
export { Xle, tpi, Jsr };