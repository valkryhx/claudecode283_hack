// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Sr,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  on
} from "B:/~BUN/root/chunk-09sn55yf.js";
import {
  wo,
  Zl,
  Ev
} from "B:/~BUN/root/chunk-1tbewxs3.js";
import {
  lF,
  Cu
} from "B:/~BUN/root/chunk-2d2hmxhb.js";
var u = new Set(["INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "CONNECT_SUSPENDED", "CREDENTIAL_STORE_UNAVAILABLE", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);

function lWr(e) {
  let o = lF(e.name, e.config, {
      detail: "origin"
    }),
    n = e.errorCode,
    s = (r) => Cu(e.name, e.config, r);
  if (n !== void 0 && u.has(n)) return e.error !== void 0 ? s(e.error) : n;
  if (n) {
    let r = l(n);
    return o ? `${r} at ${o}` : r
  }
  return e.error !== void 0 ? s(e.error) : ""
}

function l(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e
}

function s8s(e) {
  let {
    errorCode: o,
    displayDetail: n
  } = e, s = (i) => Ev(Cu(e.name, e.config, i));
  if (o && !u.has(o)) {
    let i = l(o),
      c = e.error,
      a = c === void 0 ? i : c === i || c.startsWith(`${i}: `) ? c : `${i}: ${c}`;
    return s(n ? `${a} ${n}` : a)
  }
  let r = e.error ?? o ?? "",
    f = n ? `${r} ${n}`.trim() : r;
  return f === "" ? f : s(f)
}

function xvt(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected) return {
        message: `Reconnected to ${wo(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
        success: !1
      };
      if (e.client.toolsListError) {
        if (n.persistsOffBox) return t(`mcp reconnect tools/list failed for ${on(o)}: ${Cu(o,e.client.config,e.client.toolsListError)}`, {
          level: "error"
        }), {
          message: `Reconnected to ${wo(o)}, but fetching tools failed (detail withheld on this connection).`,
          success: !1
        };
        return {
          message: `Reconnected to ${wo(o)}, but fetching tools failed: ${Zl(Cu(o,e.client.config,e.client.toolsListError))}`,
          success: !1
        }
      }
      return {
        message: `Reconnected to ${wo(o)}.`, success: !0
      };
    case "needs-auth":
      return {
        message: s?.hasHeadersHelper ? `${wo(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${wo(o)} requires authentication. Use the 'Authenticate' option.`, success: !1
      };
    case "failed": {
      let r = lWr(e.client);
      if (n.persistsOffBox) {
        if (r) t(`mcp reconnect failed for ${on(o)}: ${r}`, {
          level: "error"
        });
        return {
          message: `Failed to reconnect to ${wo(o)}${r?" (detail withheld on this connection)":""}.`,
          success: !1
        }
      }
      return {
        message: r ? `Failed to reconnect to ${wo(o)}: ${Zl(r)}` : `Failed to reconnect to ${wo(o)}.`,
        success: !1
      }
    }
    default:
      return {
        message: `Unknown result when reconnecting to ${wo(o)}.`, success: !1
      }
  }
}

function Iot(e, o, n) {
  let s = n.config ? Cu(o, n.config, d(e)) : d(e);
  if (e instanceof Sr) return Zl(d(e), void 0, "none");
  if (n.persistsOffBox) return t(`mcp reconnect error for ${on(o)}: ${s}`, {
    level: "error"
  }), `Error reconnecting to ${wo(o)} (detail withheld on this connection).`;
  return `Error reconnecting to ${wo(o)}: ${Zl(s)}`
}

function fYe(e, o, n, s) {
  let r = s.config ? Cu(o, s.config, d(e)) : d(e);
  if (e instanceof Sr) return Zl(d(e), void 0, "none");
  if (s.persistsOffBox) return t(`mcp ${n} failed for ${on(o)}: ${r}`, {
    level: "error"
  }), `Failed to ${n} MCP server "${wo(o)}" (detail withheld on this connection).`;
  return `Failed to ${n} MCP server "${wo(o)}": ${Zl(r)}`
}
export {
  lWr,
  s8s,
  xvt,
  Iot,
  fYe
};
