// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ui } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { MF } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { dJi } from "B:/~BUN/root/chunk-grwykqvw.js";
import { PMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
var t = "(value set by your organization)";
function Dst(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: dJi(r.url) ?? t,
    ...(r.headers && {
      headers: Er(r.headers, () => t)
    })
  };
}
function tTt(r) {
  return r === "cached" ? "pending" : r;
}
function uXn(r) {
  return r.map(item => {
    let config;
    if (item.config.type === "sse" || item.config.type === "http") config = Dst({
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
      status: tTt(item.type),
      config: config,
      scope: item.config.scope,
      source: MF(item.name, item.config),
      serverInfo: Ui(item) ? item.serverInfo : void 0,
      error: item.type === "failed" ? item.error : void 0,
      error_code: PMr(item)
    };
  });
}
export { Dst, tTt, uXn };