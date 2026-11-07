// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
class uii {
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
var Nia = new Je(() => new uii);

function n() {
  return Nia.of(H())
}

function CP() {
  return n().state
}

function qKo(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = !1
}

function _Be(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated" || e === "account_memory_withdrawn") V("info", "cli_teleport_relay_ended", {
      reason: e
    });
    else if (e !== "direct_served") c("upgrade_teleport_cache", e), l(e);
    if (e !== "direct_served") s(r, e);
    a.relayThinkingStripOwed = !0
  }
  a.state = {
    status: "reverted",
    reason: e,
    detail: o
  }
}

function YKo(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return o.set(e, r), "not_repeat";
  return !!r && r === o.get(e) ? "not_repeat" : "repeat"
}

function kya(e) {
  n().chromeSwitchedOn = e
}

function XKo() {
  return n().chromeSwitchedOn
}
var i = new WeakMap;

function JKo(e, r) {
  i.set(e, r)
}

function vya(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip"
}

function Eya(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main"
}

function QKo(e) {
  n().openBootVerdict = e
}

function _Zn() {
  return n().openBootVerdict !== void 0
}

function dYr() {
  n().bootSettled = !0
}

function Tya() {
  return !n().bootSettled || CP().status === "active" || _Zn()
}

function bZn() {
  let e = n(),
    r = e.openBootVerdict;
  return e.openBootVerdict = void 0, r
}

function Oit(e) {
  n().handoffMarkerStep = e
}

function ZKo() {
  let e = n(),
    r = e.handoffMarkerStep;
  return e.handoffMarkerStep = void 0, r
}

function Nbn() {
  let e = bZn();
  if (e === void 0) return;
  c("upgrade_teleport_cache", e), V("warn", "cli_teleport_arm_verdict", {
    outcome: "refused",
    error_code: e
  }), t(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`)
}

function eqo() {
  n().relayThinkingStripOwed = !0
}

function tqo() {
  return n().relayThinkingStripOwed
}

function nqo() {
  return !n().relayRefusedGzip
}

function rqo() {
  let e = n();
  if (e.relayRefusedGzip) return;
  e.relayRefusedGzip = !0, V("warn", "cli_teleport_relay_gzip_refused")
}

function oqo(e) {
  let r = n();
  r.lastDispatchRelayed = e, r.lastDispatchFallback = void 0
}

function sqo(e, r) {
  n().lastDispatchFallback = {
    cause: e,
    httpStatus: r
  }
}

function Cya() {
  return n().lastDispatchFallback
}

function Rya() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed
}

function Aya(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = !1, V("info", "cli_teleport_relay_thinking_settled", {
    outcome: e
  })
}

function iqo(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), c("upgrade_teleport_cache", e), l(e)
}

function aqo(e, r) {
  if (n().state.status !== "active") return;
  l("direct_served", e), s(r, `direct_served_${e}`), _Be("direct_served", r, e)
}

function lqo(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  c("upgrade_relay_fork_direct", r)
}

function dqo(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some((o) => r.has(o))
}

function s(e, r) {
  c("upgrade_relay_end", `${e}_${r}`)
}

function l(e, r) {
  V("warn", "cli_teleport_relay_fallback", {
    reason: e,
    ...r !== void 0 && {
      cause: r
    }
  })
}

function cqo(e) {
  let r = d(e);
  if (r === void 0) return CP().status === "active";
  return _Be("context_reduced", "main", r), !1
}

function uqo(e) {
  return CP().status === "active" && d(e) === void 0
}

function d(e) {
  let r = CP();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++)
    if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return
}

function fqo(e, r) {
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
  return _Be("tools_changed", "main", a.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : r === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), !1
}

function pqo(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed"
}
export {
  uii,
  Nia,
  CP,
  qKo,
  _Be,
  YKo,
  kya,
  XKo,
  JKo,
  vya,
  Eya,
  QKo,
  _Zn,
  dYr,
  Tya,
  bZn,
  Oit,
  ZKo,
  Nbn,
  eqo,
  tqo,
  nqo,
  rqo,
  oqo,
  sqo,
  Cya,
  Rya,
  Aya,
  iqo,
  aqo,
  lqo,
  dqo,
  cqo,
  uqo,
  fqo,
  pqo
};
