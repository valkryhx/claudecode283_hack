// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Cs } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { io } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { HNo } from "B:/~BUN/root/chunk-dv435n4g.js";
import { XU } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Npn } from "B:/~BUN/root/chunk-bt3h0syz.js";
var t = "(value set by your organization)";
function TPe(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: HNo(r.url) ?? t,
    ...(r.headers && {
      headers: io(r.headers, () => t)
    })
  };
}
function T1e(r) {
  return r === "cached" ? "pending" : r;
}
function f2t(r) {
  return r.map(item => {
    let config;
    if (item.config.type === "sse" || item.config.type === "http") config = TPe({
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
      status: T1e(item.type),
      config: config,
      scope: item.config.scope,
      source: XU(item.name, item.config),
      serverInfo: Cs(item) ? item.serverInfo : void 0,
      error: item.type === "failed" ? item.error : void 0,
      error_code: Npn(item)
    };
  });
}
export { TPe, T1e, f2t };