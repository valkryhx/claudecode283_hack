// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
class _os {
  state = {
    status: "inactive"
  };
  fallbackSadEmitted = new Set;
  toolsBaseline = {
    captured: !1
  };
  relayThinkingStripOwed = !1;
  lastDispatchRelayed = !1;
  lastDispatchFallback = void 0;
  openBootVerdict = void 0;
  bootSettled = !1;
  handoffMarkerStep = void 0;
  enableStubsCalled = new Map;
  chromeSwitchedOn = void 0;
  forkDirectLines = new Set;
  relayRefusedGzip = !1
}
var _8s = new at(() => new _os);

function n() {
  return _8s.of(j())
}

function UI() {
  return n().state
}

function YQr(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = !1
}

function qNe(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated") X("info", "cli_teleport_relay_ended", {
      reason: e
    });
    else if (e !== "direct_served") p("upgrade_teleport_cache", e), l(e);
    if (e !== "direct_served") s(r, e);
    a.relayThinkingStripOwed = !0
  }
  a.state = {
    status: "reverted",
    reason: e,
    detail: o
  }
}

function XQr(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return o.set(e, r), "not_repeat";
  return !!r && r === o.get(e) ? "not_repeat" : "repeat"
}

function Xni(e) {
  n().chromeSwitchedOn = e
}

function JQr() {
  return n().chromeSwitchedOn
}
var i = new WeakMap;

function QQr(e, r) {
  i.set(e, r)
}

function Jni(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip"
}

function Qni(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main"
}

function ZQr(e) {
  n().openBootVerdict = e
}

function XAn() {
  return n().openBootVerdict !== void 0
}

function bdr() {
  n().bootSettled = !0
}

function Zni() {
  return !n().bootSettled || UI().status === "active" || XAn()
}

function JAn() {
  let e = n(),
    r = e.openBootVerdict;
  return e.openBootVerdict = void 0, r
}

function vKe(e) {
  n().handoffMarkerStep = e
}

function e7r() {
  let e = n(),
    r = e.handoffMarkerStep;
  return e.handoffMarkerStep = void 0, r
}

function jYt() {
  let e = JAn();
  if (e === void 0) return;
  p("upgrade_teleport_cache", e), X("warn", "cli_teleport_arm_verdict", {
    outcome: "refused",
    error_code: e
  }), t(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`)
}

function t7r() {
  n().relayThinkingStripOwed = !0
}

function n7r() {
  return n().relayThinkingStripOwed
}

function r7r() {
  return !n().relayRefusedGzip
}

function o7r() {
  let e = n();
  if (e.relayRefusedGzip) return;
  e.relayRefusedGzip = !0, X("warn", "cli_teleport_relay_gzip_refused")
}

function s7r(e) {
  let r = n();
  r.lastDispatchRelayed = e, r.lastDispatchFallback = void 0
}

function i7r(e, r) {
  n().lastDispatchFallback = {
    cause: e,
    httpStatus: r
  }
}

function eri() {
  return n().lastDispatchFallback
}

function tri() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed
}

function nri(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = !1, X("info", "cli_teleport_relay_thinking_settled", {
    outcome: e
  })
}

function a7r(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), p("upgrade_teleport_cache", e), l(e)
}

function l7r(e, r) {
  if (n().state.status !== "active") return;
  l("direct_served", e), s(r, `direct_served_${e}`), qNe("direct_served", r, e)
}

function d7r(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  p("upgrade_relay_fork_direct", r)
}

function c7r(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some((o) => r.has(o))
}

function s(e, r) {
  p("upgrade_relay_end", `${e}_${r}`)
}

function l(e, r) {
  X("warn", "cli_teleport_relay_fallback", {
    reason: e,
    ...r !== void 0 && {
      cause: r
    }
  })
}

function u7r(e) {
  let r = d(e);
  if (r === void 0) return UI().status === "active";
  return qNe("context_reduced", "main", r), !1
}

function p7r(e) {
  return UI().status === "active" && d(e) === void 0
}

function d(e) {
  let r = UI();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++)
    if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return
}

function f7r(e, r) {
  let o = n();
  if (o.state.status !== "active") return !1;
  let a = o.toolsBaseline;
  if (!a.captured) return o.toolsBaseline = {
    captured: !0,
    model: e,
    fingerprint: r
  }, !0;
  if (e !== a.model) return !1;
  if (a.fingerprint === r) return !0;
  return qNe("tools_changed", "main", a.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : r === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), !1
}

function m7r(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed"
}
export {
  _os,
  _8s,
  UI,
  YQr,
  qNe,
  XQr,
  Xni,
  JQr,
  QQr,
  Jni,
  Qni,
  ZQr,
  XAn,
  bdr,
  Zni,
  JAn,
  vKe,
  e7r,
  jYt,
  t7r,
  n7r,
  r7r,
  o7r,
  s7r,
  i7r,
  eri,
  tri,
  nri,
  a7r,
  l7r,
  d7r,
  c7r,
  u7r,
  p7r,
  f7r,
  m7r
};
