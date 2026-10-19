// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ps
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Gr
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  _N
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  J2s
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  d3n
} from "B:/~BUN/root/chunk-kad4nq7y.js";
var t = "(value set by your organization)";

function cqe(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: J2s(r.url) ?? t,
    ...r.headers && {
      headers: Gr(r.headers, () => t)
    }
  }
}

function drt(r) {
  return r === "cached" ? "pending" : r
}

function Fkn(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = cqe({
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
      status: drt(e.type),
      config: o,
      scope: e.config.scope,
      source: _N(e.name, e.config),
      serverInfo: Ps(e) ? e.serverInfo : void 0,
      error: e.type === "failed" ? e.error : void 0,
      error_code: d3n(e)
    }
  })
}
export {
  cqe,
  drt,
  Fkn
};
