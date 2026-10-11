// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Mr, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Nr, ga, iy } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { tn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { vO, Mc } from "B:/~BUN/root/chunk-s08gcgdz.js";
var a = new Set(["INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
function dSn(e) {
  let o = vO(e.name, e.config, {
      detail: "origin"
    }),
    errorCode = e.errorCode,
    s = r => Mc(e.name, e.config, r);
  if (errorCode !== void 0 && a.has(errorCode)) return e.error !== void 0 ? s(e.error) : errorCode;
  if (errorCode) {
    let r = d(errorCode);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}
function d(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e;
}
function MYr(e) {
  let {
      errorCode: errorCode_2,
      displayDetail: displayDetail
    } = e,
    s = i => iy(Mc(e.name, e.config, i));
  if (errorCode_2 && !a.has(errorCode_2)) {
    let i = d(errorCode_2),
      f = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return s(displayDetail ? `${f} ${displayDetail}` : f);
  }
  let r = e.error ?? errorCode_2 ?? "",
    c = displayDetail ? `${r} ${displayDetail}`.trim() : r;
  return c === "" ? c : s(c);
}
function uSn(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected) return {
        message: `Reconnected to ${Nr(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
        success: !1
      };
      if (e.client.toolsListError) {
        if (n.persistsOffBox) return t(`mcp reconnect tools/list failed for ${tn(o)}: ${Mc(o, e.client.config, e.client.toolsListError)}`, {
          level: "error"
        }), {
          message: `Reconnected to ${Nr(o)}, but fetching tools failed (detail withheld on this connection).`,
          success: !1
        };
        return {
          message: `Reconnected to ${Nr(o)}, but fetching tools failed: ${ga(Mc(o, e.client.config, e.client.toolsListError))}`,
          success: !1
        };
      }
      return {
        message: `Reconnected to ${Nr(o)}.`,
        success: !0
      };
    case "needs-auth":
      return {
        message: s?.hasHeadersHelper ? `${Nr(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${Nr(o)} requires authentication. Use the 'Authenticate' option.`,
        success: !1
      };
    case "failed":
      {
        let r = dSn(e.client);
        if (n.persistsOffBox) {
          if (r) t(`mcp reconnect failed for ${tn(o)}: ${r}`, {
            level: "error"
          });
          return {
            message: `Failed to reconnect to ${Nr(o)}${r ? " (detail withheld on this connection)" : ""}.`,
            success: !1
          };
        }
        return {
          message: r ? `Failed to reconnect to ${Nr(o)}: ${ga(r)}` : `Failed to reconnect to ${Nr(o)}.`,
          success: !1
        };
      }
    default:
      return {
        message: `Unknown result when reconnecting to ${Nr(o)}.`,
        success: !1
      };
  }
}
function u2t(e, o, n) {
  let s = n.config ? Mc(o, n.config, l(e)) : l(e);
  if (e instanceof Mr) return ga(l(e), void 0, "none");
  if (n.persistsOffBox) return t(`mcp reconnect error for ${tn(o)}: ${s}`, {
    level: "error"
  }), `Error reconnecting to ${Nr(o)} (detail withheld on this connection).`;
  return `Error reconnecting to ${Nr(o)}: ${ga(s)}`;
}
function _be(e, o, n, s) {
  let r = s.config ? Mc(o, s.config, l(e)) : l(e);
  if (e instanceof Mr) return ga(l(e), void 0, "none");
  if (s.persistsOffBox) return t(`mcp ${n} failed for ${tn(o)}: ${r}`, {
    level: "error"
  }), `Failed to ${n} MCP server "${Nr(o)}" (detail withheld on this connection).`;
  return `Failed to ${n} MCP server "${Nr(o)}": ${ga(r)}`;
}
export { dSn, MYr, uSn, u2t, _be };