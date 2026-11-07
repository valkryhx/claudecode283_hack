// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  Yn
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  It,
  lf,
  k,
  mqn,
  Oj
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Qp
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Cy
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  id
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  VR
} from "B:/~BUN/root/chunk-67erjrg5.js";
import {
  hG
} from "B:/~BUN/root/chunk-99vcrndq.js";
var S = /\s/;

function T(e) {
  var t = e.length;
  while (t-- && S.test(e.charAt(t)));
  return t
}
var c = T;
var A = /^\s+/;

function C(e) {
  return e ? e.slice(0, c(e) + 1).replace(A, "") : e
}
var E = C;
var d = NaN,
  N = /^[-+]0x[0-9a-f]+$/i,
  O = /^0b[01]+$/i,
  I = /^0o[0-7]+$/i,
  h = parseInt;

function g(e) {
  if (typeof e == "number") return e;
  if (hG(e)) return d;
  if (VR(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = VR(t) ? t + "" : t
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = E(e);
  var r = O.test(e);
  return r || I.test(e) ? h(e.slice(2), r ? 2 : 8) : N.test(e) ? d : +e
}
var Ejn = g;
var f = 1 / 0,
  y = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

function D(e) {
  if (!e) return e === 0 ? e : 0;
  if (e = Ejn(e), e === f || e === -f) {
    var t = e < 0 ? -1 : 1;
    return t * y
  }
  return e === e ? e : 0
}
var l = D;

function x(e) {
  var t = l(e),
    r = t % 1;
  return t === t ? r ? t - r : t : 0
}
var mTo = x;
var P = "Expected a function";

function w(e, t) {
  var r;
  if (typeof t != "function") throw TypeError(P);
  return e = mTo(e),
    function() {
      if (--e > 0) r = t.apply(this, arguments);
      if (e <= 1) t = void 0;
      return r
    }
}
var _ = w;

function L(e) {
  return _(2, e)
}
var Am = L;
import {
  STATUS_CODES as M
} from "http";
var U = 500,
  MDs = 0.25;

function AU(e, t, r = 32000, s = Math.random, n = U) {
  let o = Math.round(Cy({
    attempt: e,
    baseMs: n,
    capMs: r,
    jitter: {
      kind: "proportional",
      ratio: MDs
    },
    random: s
  }));
  if (t) {
    let i = parseInt(t, 10);
    if (!isNaN(i)) return Math.max(i * 1000, o)
  }
  return o
}
var iXi = 600000;

function rTo(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs
}
class Win extends Error {
  deadline;
  sleptMs;
  code = "StreamNoResponse";
  constructor(e, t) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = t;
    this.name = "StreamNoResponseError"
  }
}

function wjn(e) {
  let t = Oj(e, (r) => r instanceof Win);
  return t instanceof Win ? t : void 0
}
var gd = "API Error",
  UVe = 1000,
  xU = "Prompt is too long";

function bJ(e) {
  if (!e.isApiErrorMessage) return !1;
  let t = e.message.content;
  if (!Array.isArray(t)) return !1;
  return t.some((r) => r.type === "text" && r.text.startsWith(xU))
}

function SJ(e) {
  if (!(e instanceof It)) return !1;
  let t = e.message ?? "";
  return e.status === 403 && t.includes("OAuth token has been revoked") || e.status === 401 && t.includes("OAuth access token has been revoked")
}

function BVe(e) {
  if (!(e instanceof It) || e.status !== 403) return !1;
  let t = e.message ?? "";
  return (e.type === "permission_error" || t.includes('"type":"permission_error"')) && t.includes("model:")
}

function oTo(e) {
  return e.type === "not_found_error" || (e.message?.includes('"type":"not_found_error"') ?? !1)
}

function sTo(e) {
  return e instanceof It && e.status === 404 && oTo(e)
}

function jVe(e) {
  if (!(e instanceof It) || e.status !== 404) return !1;
  return oTo(e) && (e.message ?? "").includes("model:")
}

function aXi(e) {
  if (!(e instanceof It) || e.status !== 404 || !a(e)) return !1;
  return e.error?.error?.code === "DeploymentNotFound"
}

function tj(e) {
  if (!(e instanceof It)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1)
}

function iTo(e) {
  return e instanceof It && e.status === 503 && e.headers?.get("x-should-retry") === "false"
}

function aTo(e) {
  return iTo(e) ? b("headerless_decline") : b("headerless_retryable_503")
}

function lTo(e) {
  return iTo(e) ? 0 : AU(1)
}

function F(e) {
  if (!(e instanceof It)) return !1;
  return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1)
}

function dTo(e) {
  return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451
}
var WVe = "dlp_request_denied";

function m_t(e) {
  return sAe(e) === WVe
}
var H = "extra_usage_out_of_credits";

function lXi(e) {
  return sAe(e) === H
}
var v = "tool_use_block_cut_off";

function fUt(e) {
  return sAe(e) === v
}

function dXi(e) {
  if (!(e instanceof It) || e.status !== 400 || !a(e)) return !1;
  return e.error?.error?.type === "policy_blocked"
}
var pUt = "claude_code_version_too_old";

function cTo(e) {
  return sAe(e) === pUt
}
var B = /\bClaude Code \S+ (?:does not support this model; version \S+ or newer is required|is older than the minimum version required by your organization's policy|or later is required for your organization)/;

function ZMr(e) {
  if (cTo(e)) return !0;
  if (!(e instanceof It) || e.status !== 400) return !1;
  return B.test(Vin(e) ?? e.message)
}
var G = "program_use_case_not_held";

function zin(e) {
  return e instanceof It && e.status === 400 && sAe(e) === G
}
var rpe = "safety_monitor_blocked",
  uTo = "ccs_no_request_token";

function Let(e) {
  return !1
}

function Gin(e) {
  return !1
}

function cXi(e) {
  return W(e, "The requested features are not available for HIPAA-") && e.status === 400 && sAe(e) === void 0
}

function W(e, t) {
  if (!(e instanceof It) || !a(e)) return !1;
  let s = e.error?.error;
  return s?.type === "invalid_request_error" && typeof s.message === "string" && s.message.startsWith(t)
}

function sAe(e) {
  if (!(e instanceof It) || !a(e)) return;
  return e.error?.error?.details?.error_code
}
var Y = /^[a-z][a-z0-9_]{0,63}$/;

function fTo(e) {
  let t = sAe(e);
  return typeof t === "string" && Y.test(t) ? t : void 0
}

function eDr(e) {
  if (typeof e.status === "number") return e.status;
  if (tj(e)) return 529;
  if (F(e)) return 429;
  return
}
var iAe = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "CERT_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CERT_REVOKED", "CERT_REJECTED", "CERT_UNTRUSTED", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_CHAIN_TOO_LONG", "PATH_LENGTH_EXCEEDED", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  uXi = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN"]),
  q = new Set([...iAe, "ERR_TLS_HANDSHAKE_TIMEOUT", "ERR_SSL_WRONG_VERSION_NUMBER", "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"]),
  Uz = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL"]),
  kjn = new Set(["ECONNRESET", "EPIPE", "ConnectionClosed", "ERR_SOCKET_CLOSED"]),
  O4 = new Set([...kjn, "UND_ERR_SOCKET", "ETIMEDOUT", "ECONNABORTED", "StreamSuspended", "StreamTruncated"]);

function tDr(e) {
  return O4.has(e) || Uz.has(e) ? Yn(e) : b("other")
}

function mUt(e) {
  return Uz.has(e) || O4.has(e) || iAe.has(e) ? Yn(e) : void 0
}

function h_t(e, t) {
  let r = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return Yn(`API error: type=${r} status=${typeof t==="number"?t:"none"}`)
}
var p = "Failed to resolve AWS credentials from the credential provider chain.",
  nDr = "Failed to acquire Google OAuth credentials.";

function Gm(e) {
  if (!e || typeof e !== "object") return null;
  let t = e,
    r = 5,
    s = 0;
  while (t && s < r) {
    if (t instanceof Error) {
      if ("code" in t && typeof t.code === "string") {
        let n = t.code,
          o = q.has(n);
        return {
          code: n,
          message: t.message,
          isSSLError: o
        }
      }
      if (t.message.startsWith(mqn)) return {
        code: "ConnectionClosed",
        message: t.message,
        isSSLError: !1
      }
    }
    if (t instanceof Error && "cause" in t && t.cause !== t) t = t.cause, s++;
    else break
  }
  return null
}

function X(e) {
  let t = Gm(e);
  return t !== null && Uz.has(t.code)
}
var z = new Set(["ENOTFOUND", "EAI_AGAIN", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "EHOSTDOWN", "FailedToOpenSocket", "ECONNREFUSED", "ConnectionRefused"]);

function DDs(e) {
  return Oj(e, (t) => k(t) === "ERR_PROXY_TUNNEL")
}

function rDr(e) {
  if (!(e instanceof lf)) return !1;
  let t = Gm(e)?.code;
  if (t !== "ERR_PROXY_TUNNEL") return t !== void 0 && z.has(t);
  let r = DDs(e),
    s = r !== void 0 && "status" in r ? r.status : void 0;
  return s === 502 || s === 503
}

function g_t(e) {
  return Gm(e)?.code === "StreamSuspended"
}

function oDr(e) {
  let t = Gm(e);
  return t !== null && t.code !== "StreamSuspended" && (Uz.has(t.code) || O4.has(t.code))
}

function vie(e) {
  let t = Gm(e);
  if (!t?.isSSLError) return null;
  return `SSL certificate error (${t.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`
}

function m(e, t) {
  return id() ? t : e
}

function u(e) {
  if (/<!DOCTYPE html|<html\b/i.test(e)) {
    let t = e.match(/<title>([^<]+)<\/title>/i);
    if (t && t[1]) return t[1].trim();
    return ""
  }
  return e
}

function LDs(e) {
  let t = e.message;
  if (!t) return "";
  return u(t)
}

function a(e) {
  return typeof e === "object" && e !== null && "error" in e && typeof e.error === "object" && e.error !== null
}

function Vin(e) {
  if (!a(e)) return null;
  let r = e.error,
    s = r?.error?.message;
  if (typeof s === "string" && s.length > 0) {
    let o = u(s);
    if (o.length > 0) return o
  }
  let n = r?.message;
  if (typeof n === "string" && n.length > 0) {
    let o = u(n);
    if (o.length > 0) return o
  }
  return null
}
var NDs = "Connection dropped";

function SSe(e) {
  let t = Gm(e);
  if (t) {
    let {
      code: n,
      isSSLError: o
    } = t;
    if (n === "StreamSuspended") return Qp() ? "Connection lost" : "Connection lost while your computer was asleep";
    if (n === "StreamTruncated") return "Connection closed before the response finished";
    if (n === "StreamNoResponse") return "No response from API";
    if (n === "RouteTurnedAway") return "The API is temporarily unavailable";
    if (n === "BedrockUnexpectedContentType") return t.message;
    if (n === "ETIMEDOUT") return Qp() ? "Request timed out" : "Request timed out. Check your internet connection and proxy settings";
    if (o) {
      let i = m("set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xB7 see https://code.claude.com/docs/en/network-config", "ask your IT team to add that CA to this computer's certificate store or to the CA file that your organization configured."),
        R = `(${n}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: ${i}`;
      switch (n) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return `Unable to connect to API: SSL certificate verification failed (${n}). The certificates the server sent don't lead to a trusted authority. If the server leaves out an intermediate certificate, which browsers fetch by themselves, whoever runs it must have it send its full chain. If it is a TLS-inspecting corporate proxy or a gateway signed by a private CA, ${i}`;
        case "UNABLE_TO_GET_ISSUER_CERT":
          return `Unable to connect to API: SSL certificate verification failed (${n}). The certificates this computer trusts include a CA certificate whose own issuer is missing, often a leftover from a renewal: ${m("remove it from the system certificate store or the NODE_EXTRA_CA_CERTS file, or add its issuer there.","ask your IT team to remove it from this computer's certificate store or the CA file that your organization configured, or to add its issuer there.")}`;
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return `Unable to connect to API: Self-signed certificate detected ${R}`;
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${n})`
      }
    }
  }
  if (e.message === p || e.message === nDr) {
    let n = Oj(e.cause, (o) => o.message.trim().length > 0 && o.message !== p && o.message !== nDr);
    if (n) {
      let o = u(n.message.trim());
      if (o.length > 0) return o
    }
  }
  if (e.message === "Connection error.") {
    let n = t?.code;
    if (Qp()) return n === void 0 ? "Unable to connect to API" : `Unable to connect to API (${n})`;
    if (n === void 0) return "Unable to connect to API. Check your internet connection";
    switch (n) {
      case "ECONNRESET":
      case "EPIPE":
      case "ECONNABORTED":
      case "ConnectionClosed":
      case "ERR_SOCKET_CLOSED":
      case "UND_ERR_SOCKET":
        return `${NDs} (${n})`;
      case "ECONNREFUSED":
      case "ConnectionRefused":
        return `Connection refused \u2014 a firewall or proxy may be blocking it (${n})`;
      case "ENOTFOUND":
      case "EAI_AGAIN":
      case "FailedToOpenSocket":
        return `Can't reach the API server \u2014 check your internet or DNS (${n})`;
      case "ENETUNREACH":
      case "ENETDOWN":
      case "EHOSTUNREACH":
      case "EHOSTDOWN":
        return `No internet route \u2014 check your connection or VPN (${n})`;
      case "ERR_PROXY_TUNNEL":
        return `Couldn't connect through your proxy (${n}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;
      default:
        return `Unable to connect to API (${n})`
    }
  }
  if (!e.message) return Vin(e) ?? `API error (status ${e.status??"unknown"})`;
  if (e.message.includes('{"')) {
    let n = Vin(e);
    if (n) return e.status ? `${e.status} ${n}` : n
  }
  let r = LDs(e),
    s = /^(\d+ )?\s*</.test(e.message);
  if (r.length === 0 && s) {
    if (!e.status) return "API error (status unknown)";
    let n = M[e.status];
    return n ? `${e.status} ${n}` : String(e.status)
  }
  if (r !== e.message && r.length > 0) {
    let n = e.status ? String(e.status) : void 0;
    return n && !r.match(/\d+/g)?.includes(n) ? `${n} ${r}` : r
  }
  return e.message.trimEnd()
}

function sDr(e) {
  let t = (i) => e.headers?.get?.(i) ?? void 0,
    r = t("anthropic-ratelimit-unified-representative-claim"),
    s = t("anthropic-ratelimit-unified-reset"),
    n = t("anthropic-ratelimit-unified-overage-status"),
    o = wjn(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: SSe(e),
    connection: Gm(e),
    isNetworkDown: X(e),
    rateLimits: r || n ? {
      ...r && {
        rateLimitType: r
      },
      ...s && {
        resetsAt: Math.round(Number(s))
      }
    } : null,
    noResponse: o ? {
      waitedMs: rTo(o.deadline),
      retryWaitMs: o.deadline.retryWindowMs
    } : null
  }
}
class vjn extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError"
  }
}
class ope extends Error {
  blockState;
  constructor(e) {
    super("Content block not found");
    if (this.name = "StreamMalformedEventError", this.blockState = e, e === "closed") this.message = "Content block already closed";
    if (e === "unreadable") this.message = "Stream event unreadable"
  }
}
class pTo extends Error {
  code = "StreamTruncated";
  constructor() {
    super("Stream ended before the response was complete");
    this.name = "StreamTruncatedError"
  }
}

function fXi({
  connDetails: e,
  isStaleConnection: t,
  isContextHintSse: r,
  streamIdleAborted: s,
  noEvents: n,
  malformedStream: o
}) {
  if (e?.code === "StreamSuspended") return "stream_suspended";
  if (e?.code === "StreamTruncated") return "stream_truncated";
  if (t) return "stale_connection";
  if (r) return "context_hint_sse";
  if (s) return "watchdog";
  if (n) return "no_events";
  if (o) return "malformed_stream";
  return "other"
}
export {
  MDs,
  AU,
  iXi,
  rTo,
  Win,
  wjn,
  gd,
  UVe,
  xU,
  bJ,
  SJ,
  BVe,
  oTo,
  sTo,
  jVe,
  aXi,
  tj,
  iTo,
  aTo,
  lTo,
  dTo,
  WVe,
  m_t,
  lXi,
  fUt,
  dXi,
  pUt,
  cTo,
  ZMr,
  zin,
  rpe,
  uTo,
  Let,
  Gin,
  cXi,
  sAe,
  fTo,
  eDr,
  iAe,
  uXi,
  Uz,
  kjn,
  O4,
  tDr,
  mUt,
  h_t,
  nDr,
  Gm,
  DDs,
  rDr,
  g_t,
  oDr,
  vie,
  LDs,
  Vin,
  NDs,
  SSe,
  sDr,
  vjn,
  ope,
  pTo,
  fXi,
  Ejn,
  mTo,
  Am
};
