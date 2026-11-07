// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ui
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  MF
} from "B:/~BUN/root/chunk-s9vv4h32.js";
import {
  dJi
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  PMr
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Er
} from "B:/~BUN/root/chunk-pc24rkga.js";
var t = "(value set by your organization)";

function Dst(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: dJi(r.url) ?? t,
    ...r.headers && {
      headers: Er(r.headers, () => t)
    }
  }
}

function tTt(r) {
  return r === "cached" ? "pending" : r
}

function uXn(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = Dst({
      type: e.config.type,
      url: e.config.url,
      headers: e.config.headers
    }, e.config.scope);
    else if (e.config.type === "claudeai-proxy") o = {
      type: "claudeai-proxy",
      url: e.config.url,
      id: e.config.id
    };
    else if (e.config.type === "stdio" || e.config.type === void 0) o = {
      type: "stdio",
      command: e.config.command,
      args: e.config.args
    };
    return {
      name: e.name,
      status: tTt(e.type),
      config: o,
      scope: e.config.scope,
      source: MF(e.name, e.config),
      serverInfo: Ui(e) ? e.serverInfo : void 0,
      error: e.type === "failed" ? e.error : void 0,
      error_code: PMr(e)
    }
  })
}
export {
  Dst,
  tTt,
  uXn
};
