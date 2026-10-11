// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function ji(argument, reason) {
  return {
    code: "InvalidArgument",
    argument: argument,
    ...(reason !== void 0 && {
      reason: reason
    })
  };
}
var R1t = "OtherNames";
var A1t = "LeafMoved",
  CBo = "HardeningUnavailable",
  b2r = "RemoteLink",
  RBo = "AsideStranded";
var X5n = "Unsupported";
function y9e(e) {
  return fBe(e) && e.code === "Failed" && e.telemetryCode === X5n;
}
var n = "ByteViewUnsupported";
function Smt(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n;
}
var r = "StoreFenced";
function S2r(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r;
}
var ABo = "SourceNotRegular",
  xBo = "SourceTooLarge",
  PBo = "SourceShared",
  IBo = "SourceOutside";
var o = new Set(["InvalidArgument", "NotFound", "AlreadyExists", "PreconditionFailed", "LeaseHeld", "Unavailable", "Failed", "ScopeNotFound"]);
function fBe(e) {
  return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code);
}
var w2r = "AbsentParent";
function mBe(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === w2r;
}
function gf(e) {
  if (mBe(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
var OBo = "TooLarge";
function rt(e) {
  return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "");
}
function i(e) {
  return e instanceof Error ? e.message : String(e);
}
export { ji, R1t, A1t, CBo, b2r, RBo, X5n, y9e, Smt, S2r, ABo, xBo, PBo, IBo, fBe, w2r, mBe, gf, OBo, rt };