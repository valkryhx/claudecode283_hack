// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { le, fc } from "B:/~BUN/root/chunk-begxsvab.js";
import { $Me } from "B:/~BUN/root/chunk-27h4st9h.js";
function oVt(e, o) {
  if (le() || e.replMode === !0 || e.sdkUrlWorker === !0) {
    let r = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    return r.planCodeModeFromSession(e, o);
  }
  return {
    pin: void 0,
    switched: !1
  };
}
function sVt(source) {
  return (o, sessionId) => {
    if (!le() && o.replMode === !0) $Me(oVt({
      replMode: !0,
      messages: [],
      source: source,
      sessionId: sessionId
    }, () => {}));
  };
}
function vgn(e) {
  if ($Me(e), le()) {
    let o = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    o.applyCodeModePlan(e);
  }
}
function Egn(e, o) {
  let r = oVt(e, o);
  return vgn(r), r;
}
function d8(e = !1) {
  if (le()) {
    let o = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    o.recordCodeMode(e);
  }
}
function p7s() {
  {
    let e = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    e.recordCodeMode(!0);
  }
}
function y2r() {
  if (fc()) {
    let e = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    return e.cloudMoveRefusal();
  }
  return;
}
function Tgn(e) {
  if (le()) {
    let o = import.meta.require("B:/~BUN/root/chunk-yc7mgthb.js");
    return o.resumeSourceOfTranscriptPath(e);
  }
  return "file";
}
export { oVt, sVt, vgn, Egn, d8, p7s, y2r, Tgn };