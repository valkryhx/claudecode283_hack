// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ps } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Gr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _N } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { J2s } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { d3n } from "B:/~BUN/root/chunk-kad4nq7y.js";
var t = "(value set by your organization)";
function cqe(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: J2s(r.url) ?? t,
    ...(r.headers && {
      headers: Gr(r.headers, () => t)
    })
  };
}
function drt(r) {
  return r === "cached" ? "pending" : r;
}
function Fkn(r) {
  return r.map(item => {
    let config;
    if (item.config.type === "sse" || item.config.type === "http") config = cqe({
      type: item.config.type,
      url: item.config.url,
      headers: item.config.headers
    }, item.config.scope);else if (item.config.type === "claudeai-proxy") config = {
      type: "claudeai-proxy",
      url: item.config.url,
      id: item.config.id
    };else if (item.config.type === "stdio" || item.config.type === void 0) config = {
      type: "stdio",
      command: item.config.command,
      args: item.config.args
    };
    return {
      name: item.name,
      status: drt(item.type),
      config: config,
      scope: item.config.scope,
      source: _N(item.name, item.config),
      serverInfo: Ps(item) ? item.serverInfo : void 0,
      error: item.type === "failed" ? item.error : void 0,
      error_code: d3n(item)
    };
  });
}
export { cqe, drt, Fkn };