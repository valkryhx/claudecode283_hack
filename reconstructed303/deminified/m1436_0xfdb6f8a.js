// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { o, v, oe, u, _t } from "B:/~BUN/root/chunk-g3snhg6n.js";
var rtb_protocol_version = 2,
  X8o = '{"type":"hb"}',
  IKr = 15000,
  m = 1000,
  l = 30000,
  J8o = 100,
  Q8o = 1e4,
  Z8o = 4000,
  _ = 5000,
  T = 20000,
  b = 300000,
  c = 0.2,
  M = "device",
  Swn = {
    tools_settled: 250,
    tools_changed: 5000,
    connected_stale: 250
  },
  MKr = {
    hbIntervalMs: 1e4,
    stalenessMs: 25000,
    rpcTimeoutMs: 60000
  },
  d = {
    hbIntervalMs: {
      min: 2000,
      max: 120000
    },
    stalenessMs: {
      min: 5000,
      max: 600000
    },
    rpcTimeoutMs: {
      min: 5000,
      max: 600000
    }
  },
  g = 6000,
  E = 1000,
  R = Object.freeze(["no_credential", "user_mismatch", "upstream_401", "upstream_403", "upstream_4xx", "upstream_529", "upstream_error", "network_error", "malformed_response", "duplicate_device_id", "device_name_in_use", "device_session_limit"]);
function h(e) {
  if (typeof e !== "string" || e.length === 0) return;
  return R.includes(e) ? e : "unknown";
}
function e9o(e) {
  return e === "duplicate_device_id" || e === "device_name_in_use" || e === "device_session_limit";
}
var h1 = {
  searchHint: "anthropic/searchHint",
  alwaysLoad: "anthropic/alwaysLoad",
  maxResultSizeChars: "anthropic/maxResultSizeChars",
  requiresUserInteraction: "anthropic/requiresUserInteraction"
};
function t9o(e) {
  let n = e.deviceId !== void 0 && e.deviceId !== "";
  return {
    type: "connect",
    oauth_token: e.oauthToken,
    tools: e.tools,
    rtb_protocol_version: rtb_protocol_version,
    hb_capable: !0,
    cancel_capable: !0,
    ...(n && {
      device_id: e.deviceId
    }),
    ...(n && e.sessionId !== void 0 && e.sessionId !== "" && {
      session_id: e.sessionId
    })
  };
}
var N = 64,
  x = 1024,
  I = f(() => _t({
    type: o().optional()
  })),
  O = f(() => u({
    rtb_protocol_version: oe().optional(),
    hb_supported: oe().optional(),
    timings: oe().optional()
  }).transform(e => ({
    protocolVersion: k(e.rtb_protocol_version, e.hb_supported),
    timings: y(e.timings)
  }))),
  S = f(() => u({
    reason: o().optional().catch(void 0),
    status: v().optional().catch(void 0),
    error: o().optional().catch(void 0)
  }));
function n9o(e) {
  let n;
  try {
    n = J(e);
  } catch {
    return {
      kind: "ignored"
    };
  }
  if (typeof n === "object" && n !== null) {
    if (Object.prototype.hasOwnProperty.call(n, "__proto__")) delete n.__proto__;
  }
  let r = I().safeParse(n);
  if (!r.success) return {
    kind: "ignored"
  };
  let message = r.data,
    s = message.type;
  if (s === void 0) return {
    kind: "rpc",
    message: message
  };
  if (typeof s !== "string") return {
    kind: "ignored"
  };
  switch (s) {
    case "connected":
      return {
        kind: "connected",
        ...O().parse(message)
      };
    case "hb_ack":
      return {
        kind: "hb_ack"
      };
    case "error":
      {
        let i = S().parse(message);
        return {
          kind: "error",
          reason: h(i.reason),
          status: i.status,
          detail: i.error === void 0 ? void 0 : ne(i.error, x)
        };
      }
    default:
      return {
        kind: "unknown",
        frameType: ne(s, N)
      };
  }
}
function k(e, n) {
  let r = typeof e === "number" && Number.isInteger(e) && e >= 0 ? e : 0;
  return Math.max(r, n === !0 ? 1 : 0);
}
function y(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
  return {
    hbIntervalMs: a(n.hb_interval_ms, "hbIntervalMs"),
    stalenessMs: a(n.staleness_ms, "stalenessMs"),
    rpcTimeoutMs: a(n.rpc_timeout_ms, "rpcTimeoutMs")
  };
}
function a(e, n) {
  if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) return MKr[n];
  let {
    min: min,
    max: max
  } = d[n];
  return Math.round(Math.min(Math.max(e, min), max));
}
function DKr(e) {
  let keepaliveIntervalMs = Math.min(e.hbIntervalMs, Math.max(Math.floor(e.stalenessMs / 2), d.hbIntervalMs.min));
  return {
    keepaliveIntervalMs: keepaliveIntervalMs,
    pongTimeoutMs: Math.max(2 * keepaliveIntervalMs + g, e.stalenessMs + E),
    rotateDrainMaxMs: e.rpcTimeoutMs,
    slotContentionFastAttempts: Math.ceil((e.stalenessMs + T) / _)
  };
}
function snr(e, n, r, t = Math.random) {
  if (n > 0) {
    let s = n <= r ? _ : b,
      i = 1 - c + t() * (2 * c);
    return Math.round(s * i);
  }
  return Math.round(Math.min(m * 1.5 ** e, l) * (0.5 + t() * 0.5));
}
function LKr(e, n) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").slice(0, n).replace(/-+$/, "");
}
function _nt(e, n = 48) {
  return LKr(e, n) || M;
}
export { X8o, IKr, J8o, Q8o, Z8o, Swn, MKr, e9o, h1, t9o, n9o, DKr, snr, LKr, _nt };