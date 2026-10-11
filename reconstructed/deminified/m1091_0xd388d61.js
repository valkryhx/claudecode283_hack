// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
class goo {
  state = {
    status: "inactive"
  };
  fallbackSadEmitted = new Set();
  toolsBaseline = {
    captured: !1
  };
  relayThinkingStripOwed = !1;
  lastDispatchRelayed = !1;
  openBootVerdict = void 0;
  enableStubsCalled = new Map();
  forkDirectLines = new Set();
}
var Bjo = new Nt(() => new goo());
function a() {
  return Bjo.of(j());
}
function fL() {
  return a().state;
}
function hcr(e) {
  let r = a();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = !1;
}
function ZSe(reason, r, detail) {
  let o = a();
  if (o.state.status === "reverted") return;
  if (o.state.status === "active") {
    if (reason === "device_tool_requested" || reason === "device_tool_request_repeated") K("info", "cli_teleport_relay_ended", {
      reason: reason
    });else if (reason !== "direct_served") p("upgrade_teleport_cache", reason), l(reason);
    if (reason !== "direct_served") s(r, reason);
    o.relayThinkingStripOwed = !0;
  }
  o.state = {
    status: "reverted",
    reason: reason,
    detail: detail
  };
}
function ycr(e, r) {
  let enableStubsCalled = a().enableStubsCalled;
  if (!enableStubsCalled.has(e)) return enableStubsCalled.set(e, r), "not_repeat";
  return !!r && r === enableStubsCalled.get(e) ? "not_repeat" : "repeat";
}
var weakMap = new WeakMap();
function _cr(e, r) {
  weakMap.set(e, r);
}
function VKo(e) {
  let r = a();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && weakMap.has(e.fetch) ? "keep" : "strip";
}
function qKo(e) {
  return a().state.status === "active" && e !== void 0 && weakMap.get(e) === "main";
}
function bcr(e) {
  a().openBootVerdict = e;
}
function aAn() {
  return a().openBootVerdict !== void 0;
}
function $6t() {
  let e = a(),
    openBootVerdict = e.openBootVerdict;
  return e.openBootVerdict = void 0, openBootVerdict;
}
function Ovt() {
  let error_code = $6t();
  if (error_code === void 0) return;
  p("upgrade_teleport_cache", error_code), K("warn", "cli_teleport_arm_verdict", {
    outcome: "refused",
    error_code: error_code
  }), t(`prompt-cache relay stays off: boot had no marker (${error_code}) and no hand-off brought one`);
}
function Scr() {
  a().relayThinkingStripOwed = !0;
}
function wcr() {
  return a().relayThinkingStripOwed;
}
function vcr(e) {
  a().lastDispatchRelayed = e;
}
function KKo() {
  let e = a();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}
function YKo(outcome) {
  let r = a();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = !1, K("info", "cli_teleport_relay_thinking_settled", {
    outcome: outcome
  });
}
function kcr(e) {
  let r = a();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), p("upgrade_teleport_cache", e), l(e);
}
function Ecr(e, r) {
  if (a().state.status !== "active") return;
  l("direct_served", e), s(r, `direct_served_${e}`), ZSe("direct_served", r, e);
}
function Tcr(e, r) {
  let n = a();
  if (n.state.status !== "active") return;
  let o = e.at(-1);
  if (o !== void 0) n.forkDirectLines.add(o);
  p("upgrade_relay_fork_direct", r);
}
function Ccr(e) {
  let forkDirectLines = a().forkDirectLines;
  return forkDirectLines.size > 0 && e.some(item => forkDirectLines.has(item));
}
function s(e, r) {
  p("upgrade_relay_end", `${e}_${r}`);
}
function l(reason_2, cause) {
  K("warn", "cli_teleport_relay_fallback", {
    reason: reason_2,
    ...(cause !== void 0 && {
      cause: cause
    })
  });
}
function Rcr(e) {
  let r = c(e);
  if (r === void 0) return fL().status === "active";
  return ZSe("context_reduced", "main", r), !1;
}
function Acr(e) {
  return fL().status === "active" && c(e) === void 0;
}
function c(e) {
  let r = fL();
  if (r.status !== "active") return;
  let preAnchorLineUuids = r.preAnchorLineUuids;
  if (e.length < preAnchorLineUuids.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${preAnchorLineUuids.length}`;
  for (let o = 0; o < preAnchorLineUuids.length; o++) if (e[o] !== preAnchorLineUuids[o]) return `pre-anchor line ${o} changed since arm`;
  return;
}
function xcr(model, fingerprint) {
  let n = a();
  if (n.state.status !== "active") return !1;
  let toolsBaseline = n.toolsBaseline;
  if (!toolsBaseline.captured) return n.toolsBaseline = {
    captured: !0,
    model: model,
    fingerprint: fingerprint
  }, !0;
  if (model !== toolsBaseline.model) return !1;
  if (toolsBaseline.fingerprint === fingerprint) return !0;
  return ZSe("tools_changed", "main", toolsBaseline.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : fingerprint === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), !1;
}
function Pcr(e, r) {
  let n = a();
  if (n.state.status !== "active") return "not_comparable";
  let toolsBaseline_2 = n.toolsBaseline;
  if (!toolsBaseline_2.captured) return "intact";
  if (e !== toolsBaseline_2.model) return "not_comparable";
  return toolsBaseline_2.fingerprint === r ? "intact" : "changed";
}
export { goo, Bjo, fL, hcr, ZSe, ycr, _cr, VKo, qKo, bcr, aAn, $6t, Ovt, Scr, wcr, vcr, KKo, YKo, kcr, Ecr, Tcr, Ccr, Rcr, Acr, xcr, Pcr };