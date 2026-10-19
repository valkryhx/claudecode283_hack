// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ll } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { fo } from "B:/~BUN/root/chunk-00v9f07q.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var hosts = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
function i(e) {
  return e.toLowerCase().replace(/\.$/, "");
}
function u() {
  let e = E("tengu_mcp_local_oauth_blocked_hosts", {
      hosts: hosts
    }),
    t = hosts;
  if (e !== null && typeof e === "object" && "hosts" in e && Array.isArray(e.hosts)) {
    let o = e.hosts.filter(item => typeof item === "string");
    if (o.length > 0) t = o;
  }
  return new Set(t.map(i));
}
function c(e) {
  if (!e) return !1;
  try {
    let t = i(new URL(e).hostname);
    return u().has(t);
  } catch {
    return !1;
  }
}
function a(e, t = {}) {
  let o = `"${fo(e)}" is Anthropic-hosted and doesn't support local OAuth. ` + "Connect it via Settings \u2192 Connectors on claude.ai (requires " + "`claude login`), then it'll be available here automatically.",
    r = t.scope === "local" || t.scope === "project" || t.scope === "user" ? ll("mcp remove", e) : null,
    s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
  return r && [...s].length <= 1024 ? s : o;
}
function NV(e, config) {
  if (config.type === "claudeai-proxy") return {
    kind: "claudeai-proxy",
    config: config
  };
  if (config.type !== "sse" && config.type !== "http") return {
    kind: "unsupported-transport",
    transport: config.type ?? "stdio"
  };
  if (c(config.url)) return {
    kind: "anthropic-hosted",
    config: config,
    message: a(e, {
      scope: config.scope
    })
  };
  return {
    kind: "oauth",
    config: config
  };
}
export { NV };