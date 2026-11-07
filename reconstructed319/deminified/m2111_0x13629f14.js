// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wo } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { bd } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { xSe } from "B:/~BUN/root/chunk-grwykqvw.js";
var hosts = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
function p(t) {
  return t.toLowerCase().replace(/\.$/, "");
}
function u() {
  let t = v("tengu_mcp_local_oauth_blocked_hosts", {
      hosts: hosts
    }),
    e = hosts;
  if (t !== null && typeof t === "object" && "hosts" in t && Array.isArray(t.hosts)) {
    let o = t.hosts.filter(item => typeof item === "string");
    if (o.length > 0) e = o;
  }
  return new Set(e.map(p));
}
function c(t) {
  if (!t) return !1;
  try {
    let e = p(new URL(t).hostname);
    return u().has(e);
  } catch {
    return !1;
  }
}
function a(t, e = {}) {
  let o = `"${wo(t)}" is Anthropic-hosted and doesn't support local OAuth. ` + "Connect it via Settings \u2192 Connectors on claude.ai (requires " + "`claude login`), then it'll be available here automatically.",
    r = e.scope === "local" || e.scope === "project" || e.scope === "user" ? bd("mcp remove", t) : null,
    s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
  return r && [...s].length <= 1024 ? s : o;
}
function M8(t, config) {
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
    message: a(t, {
      scope: config.scope
    })
  };
  if (xSe(t, config)) return {
    kind: "anthropic-hosted",
    config: config,
    message: `"${wo(t)}" is provided to this session by Claude Code's cloud service, which holds its sign-in, so it can't be signed in to from here. If it is one of your claude.ai connectors, reconnect it under Settings \u2192 Connectors on claude.ai and then start a new session.`
  };
  return {
    kind: "oauth",
    config: config
  };
}
export { M8 };