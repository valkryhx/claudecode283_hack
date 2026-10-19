// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
var a = /^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/,
  c = "0".repeat(32),
  i = "0".repeat(16),
  u = 8;
function d(n) {
  if (typeof n !== "string") return !1;
  let t = a.exec(n);
  return t !== null && t[1] !== c && t[2] !== i;
}
function Nes(n, {
  isCrossSession: isCrossSession
}) {
  if (isCrossSession || typeof n !== "object" || n === null) return;
  if (!("trace_context" in n) || !("uuid" in n)) return;
  let r = n.trace_context,
    eventUuid = Vt(n.uuid);
  if (!d(r) || !eventUuid) return;
  return {
    traceparent: r,
    eventUuid: eventUuid
  };
}
function Fes(n) {
  let parent = n.findLast(e => e.traceContext)?.traceContext;
  if (!parent) return {
    parent: void 0,
    linked: []
  };
  let r = new Set([parent.traceparent]),
    o = [];
  for (let {
    traceContext: traceContext
  } of n) if (traceContext && !r.has(traceContext.traceparent)) r.add(traceContext.traceparent), o.push(traceContext);
  return {
    parent: parent,
    linked: o.slice(-u)
  };
}
var s = "anthropic/ccr-turn-event-uuid",
  T = "anthropic/ccr-turn-linked-event-uuids";
function WTn(n) {
  let t = Vt(n?.parent?.eventUuid);
  if (!n || !t) return {};
  let r = n.linked.flatMap(item => {
    let e = Vt(item.eventUuid);
    return e ? [e] : [];
  });
  return {
    [s]: t,
    ...(r.length > 0 && {
      [T]: r
    })
  };
}
export { Nes, Fes, WTn };