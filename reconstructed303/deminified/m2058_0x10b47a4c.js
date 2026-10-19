// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nr, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { fo, Ka, ES } from "B:/~BUN/root/chunk-00v9f07q.js";
import { Xt } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { HF, Pc } from "B:/~BUN/root/chunk-jpmkaw37.js";
var a = new Set(["INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
function itr(e) {
  let o = HF(e.name, e.config, {
      detail: "origin"
    }),
    errorCode = e.errorCode,
    s = r => Pc(e.name, e.config, r);
  if (errorCode !== void 0 && a.has(errorCode)) return e.error !== void 0 ? s(e.error) : errorCode;
  if (errorCode) {
    let r = u(errorCode);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}
function u(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e;
}
function t5o(e) {
  let {
      errorCode: errorCode_2,
      displayDetail: displayDetail
    } = e,
    s = i => ES(Pc(e.name, e.config, i));
  if (errorCode_2 && !a.has(errorCode_2)) {
    let i = u(errorCode_2),
      f = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return s(displayDetail ? `${f} ${displayDetail}` : f);
  }
  let r = e.error ?? errorCode_2 ?? "",
    c = displayDetail ? `${r} ${displayDetail}`.trim() : r;
  return c === "" ? c : s(c);
}
function Jwt(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected) return {
        message: `Reconnected to ${fo(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
        success: !1
      };
      if (e.client.toolsListError) {
        if (n.persistsOffBox) return t(`mcp reconnect tools/list failed for ${Xt(o)}: ${Pc(o, e.client.config, e.client.toolsListError)}`, {
          level: "error"
        }), {
          message: `Reconnected to ${fo(o)}, but fetching tools failed (detail withheld on this connection).`,
          success: !1
        };
        return {
          message: `Reconnected to ${fo(o)}, but fetching tools failed: ${Ka(Pc(o, e.client.config, e.client.toolsListError))}`,
          success: !1
        };
      }
      return {
        message: `Reconnected to ${fo(o)}.`,
        success: !0
      };
    case "needs-auth":
      return {
        message: s?.hasHeadersHelper ? `${fo(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${fo(o)} requires authentication. Use the 'Authenticate' option.`,
        success: !1
      };
    case "failed":
      {
        let r = itr(e.client);
        if (n.persistsOffBox) {
          if (r) t(`mcp reconnect failed for ${Xt(o)}: ${r}`, {
            level: "error"
          });
          return {
            message: `Failed to reconnect to ${fo(o)}${r ? " (detail withheld on this connection)" : ""}.`,
            success: !1
          };
        }
        return {
          message: r ? `Failed to reconnect to ${fo(o)}: ${Ka(r)}` : `Failed to reconnect to ${fo(o)}.`,
          success: !1
        };
      }
    default:
      return {
        message: `Unknown result when reconnecting to ${fo(o)}.`,
        success: !1
      };
  }
}
function jtt(e, o, n) {
  let s = n.config ? Pc(o, n.config, d(e)) : d(e);
  if (e instanceof Nr) return Ka(d(e), void 0, "none");
  if (n.persistsOffBox) return t(`mcp reconnect error for ${Xt(o)}: ${s}`, {
    level: "error"
  }), `Error reconnecting to ${fo(o)} (detail withheld on this connection).`;
  return `Error reconnecting to ${fo(o)}: ${Ka(s)}`;
}
function bLe(e, o, n, s) {
  let r = s.config ? Pc(o, s.config, d(e)) : d(e);
  if (e instanceof Nr) return Ka(d(e), void 0, "none");
  if (s.persistsOffBox) return t(`mcp ${n} failed for ${Xt(o)}: ${r}`, {
    level: "error"
  }), `Failed to ${n} MCP server "${fo(o)}" (detail withheld on this connection).`;
  return `Failed to ${n} MCP server "${fo(o)}": ${Ka(r)}`;
}
export { itr, t5o, Jwt, jtt, bLe };