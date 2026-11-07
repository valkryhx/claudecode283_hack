// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { uz } from "B:/~BUN/root/chunk-2fbpqb1a.js";
import { o, E, oe, u, xt } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var rtb_protocol_version = 2,
  GGi = '{"type":"hb"}',
  JEs = 15000,
  M = 1000,
  O = 30000,
  VGi = 100,
  KGi = 1e4,
  qGi = 4000,
  _ = 5000,
  x = 20000,
  N = 300000,
  d = 0.2,
  R = "device",
  QCr = {
    tools_settled: 250,
    tools_changed: 5000,
    connected_stale: 250
  },
  QEs = {
    hbIntervalMs: 1e4,
    stalenessMs: 25000,
    rpcTimeoutMs: 60000
  },
  l = {
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
  S = 6000,
  I = 1000,
  y = Object.freeze(["no_credential", "user_mismatch", "upstream_401", "upstream_403", "upstream_4xx", "upstream_529", "upstream_error", "network_error", "malformed_response", "duplicate_device_id", "device_name_in_use", "device_session_limit"]);
function C(e) {
  if (typeof e !== "string" || e.length === 0) return;
  return y.includes(e) ? e : "unknown";
}
function YGi(e) {
  return e === "duplicate_device_id" || e === "device_name_in_use" || e === "device_session_limit";
}
var Qq = {
  searchHint: "anthropic/searchHint",
  alwaysLoad: "anthropic/alwaysLoad",
  maxResultSizeChars: "anthropic/maxResultSizeChars",
  requiresUserInteraction: "anthropic/requiresUserInteraction"
};
function XGi(e) {
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
var k = 64,
  L = 1024,
  A = p(() => xt({
    type: o().optional()
  })),
  v = p(() => u({
    rtb_protocol_version: oe().optional(),
    hb_supported: oe().optional(),
    timings: oe().optional()
  }).transform(e => ({
    protocolVersion: w(e.rtb_protocol_version, e.hb_supported),
    timings: F(e.timings)
  }))),
  H = p(() => u({
    reason: o().optional().catch(void 0),
    status: E().optional().catch(void 0),
    error: o().optional().catch(void 0)
  }));
function JGi(e) {
  let n;
  try {
    n = ee(e);
  } catch {
    return {
      kind: "ignored"
    };
  }
  if (typeof n === "object" && n !== null) {
    if (Object.prototype.hasOwnProperty.call(n, "__proto__")) delete n.__proto__;
  }
  let t = A().safeParse(n);
  if (!t.success) return {
    kind: "ignored"
  };
  let message = t.data,
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
        ...v().parse(message)
      };
    case "hb_ack":
      return {
        kind: "hb_ack"
      };
    case "error":
      {
        let a = H().parse(message);
        return {
          kind: "error",
          reason: C(a.reason),
          status: a.status,
          detail: a.error === void 0 ? void 0 : Q(a.error, L)
        };
      }
    default:
      return {
        kind: "unknown",
        frameType: Q(s, k)
      };
  }
}
function w(e, n) {
  let t = typeof e === "number" && Number.isInteger(e) && e >= 0 ? e : 0;
  return Math.max(t, n === !0 ? 1 : 0);
}
function F(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
  return {
    hbIntervalMs: c(n.hb_interval_ms, "hbIntervalMs"),
    stalenessMs: c(n.staleness_ms, "stalenessMs"),
    rpcTimeoutMs: c(n.rpc_timeout_ms, "rpcTimeoutMs")
  };
}
function c(e, n) {
  if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) return QEs[n];
  let {
    min: min,
    max: max
  } = l[n];
  return Math.round(Math.min(Math.max(e, min), max));
}
function ZEs(e) {
  let keepaliveIntervalMs = Math.min(e.hbIntervalMs, Math.max(Math.floor(e.stalenessMs / 2), l.hbIntervalMs.min));
  return {
    keepaliveIntervalMs: keepaliveIntervalMs,
    pongTimeoutMs: Math.max(2 * keepaliveIntervalMs + S, e.stalenessMs + I),
    rotateDrainMaxMs: e.rpcTimeoutMs,
    slotContentionFastAttempts: Math.ceil((e.stalenessMs + x) / _)
  };
}
function hyo(e, n, t, r = Math.random) {
  if (n > 0) {
    let s = n <= t ? _ : N,
      a = 1 - d + r() * (2 * d);
    return Math.round(s * a);
  }
  return Math.round(Math.min(M * 1.5 ** e, O) * (0.5 + r() * 0.5));
}
function ZCr(e, n) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").slice(0, n).replace(/-+$/, "");
}
function rFt(e, n = 48) {
  return ZCr(e, n) || R;
}
function dNe() {
  return i.CLAUDE_CODE_REMOTE_TOOLS_FORWARD === !0;
}
function TD() {
  return dNe();
}
function CD() {
  return TD();
}
var cr = "_host",
  gyo = "_host_context",
  weakMap = new WeakMap();
function QGi(e, n) {
  return weakMap.set(e, n), e;
}
function ZGe(e) {
  let n = weakMap.get(e);
  return n === void 0 ? {} : {
    [gyo]: n
  };
}
var z_e = "device",
  D = ["container", "this-machine"],
  tQe = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/,
  eTs = 40;
function b3(e) {
  return !DL(e) && tQe.test(e);
}
var m = " (offline)";
function T(e) {
  return /^[\x20-\x7e]+$/.test(e);
}
function eRr(e) {
  let n = e.trim();
  if (!T(n)) return;
  let t = n.toLowerCase().endsWith(m) ? n.slice(0, -m.length) : n,
    r = ZCr(tt(t, "."), eTs);
  return r === "" ? void 0 : r;
}
function que(e, n) {
  let t = e.trim();
  if (!T(t)) return !1;
  let r = t.toLowerCase();
  if (DL(r)) return !1;
  if (r === n) return !0;
  if (b3(r)) return !1;
  let s = eRr(t);
  return s !== void 0 && !DL(s) && s === eRr(n);
}
function e2e(e) {
  let n = eRr(e);
  return DL(e.trim().toLowerCase()) || n !== void 0 && DL(n);
}
function Zq() {
  return i.CLAUDE_CODE_REMOTE ? "container" : "this-machine";
}
function DL(e) {
  return D.some(item => item === e);
}
function AX() {
  return CD() ? {
    [cr]: o().optional().describe("Optional. Name of an attached machine to run this tool call on; omit it to run in this session's own environment (the default). Use only a name this session listed as attached; the result says where it ran. Choose per call by which machine the command or file path concerns; the attached-machines note says what lives where and which are reachable now.")
  } : {};
}
var j = 40;
function e4(input) {
  let {
    [cr]: n,
    ...input_2
  } = input;
  if (typeof n !== "string") return {
    requested: void 0,
    input: input
  };
  let r = n.trim();
  return {
    requested: r === "" || DL(r) ? void 0 : r,
    input: input_2
  };
}
function yyo(e) {
  let n = e4(e).requested;
  return {
    requestedMachine: n,
    runsOnMachine: CD() && n !== void 0 && b3(n) ? n : void 0
  };
}
function rC(e) {
  return Q(uz(e), j);
}
function t4() {
  return `This call named a machine ("${cr}") but was not forwarded to it; omit the field to run here.`;
}
function tRr() {
  return `Running tool calls on an attached machine is not enabled in this session; omit "${cr}" to run here.`;
}
function zf(e) {
  return h(e) !== void 0;
}
function yHn(e) {
  let n = h(e);
  return n === void 0 ? void 0 : rC(n) || void 0;
}
function h(e) {
  if (typeof e !== "object" || e === null || !(cr in e)) return;
  let n = e[cr];
  if (typeof n !== "string") return;
  let t = n.trim();
  return t === "" || DL(t) ? void 0 : t;
}
export { dNe, TD, CD, GGi, JEs, VGi, KGi, qGi, QCr, QEs, YGi, Qq, XGi, JGi, ZEs, hyo, ZCr, rFt, cr, gyo, QGi, ZGe, z_e, tQe, eTs, b3, eRr, que, e2e, Zq, DL, AX, e4, yyo, rC, t4, tRr, zf, yHn };