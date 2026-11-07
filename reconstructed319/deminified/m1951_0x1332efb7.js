// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { u9 } from "B:/~BUN/root/chunk-27h4st9h.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { vve, EJo } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { hBe } from "B:/~BUN/root/chunk-vdr4jpe1.js";
import { wQ } from "B:/~BUN/root/chunk-fmk5s6jw.js";
var u = 32;
function eKo(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {
    publishContext: publishContext
  } = vve({
    agentId: void 0,
    isNonInteractiveSession: ye()
  });
  return wQ(publishContext) ? publishContext : null;
}
function L4r(n, e) {
  let pendingSubagentArms = te().live.pendingSubagentArms,
    o = pendingSubagentArms.get(n) ?? [],
    i = o.findIndex(item => item.slug === e.slug);
  if (i === -1) o.push(e);else o[i] = {
    ...e,
    title: e.title ?? o[i]?.title
  };
  pendingSubagentArms.delete(n), pendingSubagentArms.set(n, o);
  let r = 0;
  for (let s of pendingSubagentArms.values()) r += s.length;
  while (r > u) {
    let [s, a] = pendingSubagentArms.entries().next().value;
    if (a.shift(), a.length === 0) pendingSubagentArms.delete(s);
    r--, c("artifact_live_subscribe", "subagent_arm_evicted");
  }
}
function l(n) {
  let pendingSubagentArms_2 = te().live.pendingSubagentArms,
    t = pendingSubagentArms_2.get(n) ?? [];
  return pendingSubagentArms_2.delete(n), t;
}
var d = 256;
function m(n) {
  let finishedSubagentAdopters = te().live.finishedSubagentAdopters;
  finishedSubagentAdopters.delete(n), finishedSubagentAdopters.add(n);
  while (finishedSubagentAdopters.size > d) finishedSubagentAdopters.delete(finishedSubagentAdopters.values().next().value);
}
function mya(n) {
  let {
    agentId: agentId,
    context: context
  } = n;
  m(agentId);
  let o = l(agentId);
  if (o.length === 0) return;
  let {
    publishContext: publishContext_2
  } = vve({
    agentId: context.agentId,
    agentType: context.agentContext?.agentType,
    isNonInteractiveSession: context.options.isNonInteractiveSession
  });
  if (publishContext_2 === "subagent" && context.agentId !== void 0) {
    let s = u9(context.agentId, context.taskRegistry) === context.agentId || !te().live.finishedSubagentAdopters.has(context.agentId);
    for (let a of o) if (s) L4r(context.agentId, a);else c("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!wQ(publishContext_2)) return;
  let context_2 = {
    ...context,
    abortController: new AbortController()
  };
  for (let s of o) hBe({
    ...s,
    publishContext: publishContext_2,
    getKnownVer: EJo(context.getArtifactReadObservation, s.slug),
    context: context_2,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: o.length,
    publish_context: f(publishContext_2)
  });
}
export { eKo, L4r, mya };