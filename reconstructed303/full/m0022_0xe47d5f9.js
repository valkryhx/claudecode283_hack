// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
function cl(e, t) {
  return {
    code: "InvalidArgument",
    argument: e,
    ...t !== void 0 && {
      reason: t
    }
  }
}

function qmn(e = "unknown", t) {
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
var Kmn = "OtherNames";
var Ymn = "LeafMoved",
  Y6s = "HardeningUnavailable",
  QWo = "RemoteLink",
  X6s = "AsideStranded";
var m1r = "Unsupported";

function Zbt(e) {
  return HTe(e) && e.code === "Failed" && e.telemetryCode === m1r
}
var n = "ByteViewUnsupported";

function Sjt(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n
}
var r = "StoreFenced";

function ZWo(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r
}
var J6s = "SourceNotRegular",
  Q6s = "SourceTooLarge",
  Z6s = "SourceShared",
  e3s = "SourceOutside";
var o = new Set(["InvalidArgument", "NotFound", "AlreadyExists", "PreconditionFailed", "LeaseHeld", "Unavailable", "Failed", "ScopeNotFound"]);

function HTe(e) {
  return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code)
}
var ezo = "AbsentParent";

function zZe(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === ezo
}

function um(e) {
  if (zZe(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0
}
var t3s = "TooLarge";

function yt(e) {
  return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "")
}

function i(e) {
  return e instanceof Error ? e.message : String(e)
}
export {
  cl,
  qmn,
  Kmn,
  Ymn,
  Y6s,
  QWo,
  X6s,
  m1r,
  Zbt,
  Sjt,
  ZWo,
  J6s,
  Q6s,
  Z6s,
  e3s,
  HTe,
  ezo,
  zZe,
  um,
  t3s,
  yt
};
