// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function wd(e, t) {
  return {
    code: "InvalidArgument",
    argument: e,
    ...t !== void 0 && {
      reason: t
    }
  }
}

function NVn(e = "unknown", t) {
  return {
    code: "Unavailable",
    failureClass: e,
    ...t?.key !== void 0 && {
      key: t.key
    },
    ...t?.retryAfterMs !== void 0 && {
      retryAfterMs: t.retryAfterMs
    },
    ...t?.telemetryCode !== void 0 && {
      telemetryCode: t.telemetryCode
    }
  }
}
var WHr = "OtherNames";
var zHr = "LeafMoved",
  Jra = "HardeningUnavailable",
  bWs = "RemoteLink",
  Qra = "AsideStranded";
var oOo = "Unsupported";

function Fjt(e) {
  return f$e(e) && e.code === "Failed" && e.telemetryCode === oOo
}
var n = "ByteViewUnsupported";

function bcn(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n
}
var r = "StoreFenced";

function SWs(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r
}
var Zra = "SourceNotRegular",
  eoa = "SourceTooLarge",
  toa = "SourceShared",
  noa = "SourceOutside";
var o = new Set(["InvalidArgument", "NotFound", "AlreadyExists", "PreconditionFailed", "LeaseHeld", "Unavailable", "Failed", "ScopeNotFound"]);

function f$e(e) {
  return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code)
}
var wWs = "AbsentParent";

function FVn(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === wWs
}

function Qm(e) {
  if (FVn(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0
}
var roa = "TooLarge";

function Ht(e) {
  return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "")
}

function i(e) {
  return e instanceof Error ? e.message : String(e)
}
export {
  wd,
  NVn,
  WHr,
  zHr,
  Jra,
  bWs,
  Qra,
  oOo,
  Fjt,
  bcn,
  SWs,
  Zra,
  eoa,
  toa,
  noa,
  f$e,
  wWs,
  FVn,
  Qm,
  roa,
  Ht
};
