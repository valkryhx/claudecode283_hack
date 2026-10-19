// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { a6 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { _ue, Xoo } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { BNe } from "B:/~BUN/root/chunk-93pyppxk.js";
import { HY } from "B:/~BUN/root/chunk-93gzx7c6.js";
var u = 32;
function YJr(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {
    publishContext: publishContext
  } = _ue({
    agentId: void 0,
    isNonInteractiveSession: we()
  });
  return HY(publishContext) ? publishContext : null;
}
function Plr(n, e) {
  let pendingSubagentArms = ee().live.pendingSubagentArms,
    s = pendingSubagentArms.get(n) ?? [],
    i = s.findIndex(item => item.slug === e.slug);
  if (i === -1) s.push(e);else s[i] = e;
  pendingSubagentArms.delete(n), pendingSubagentArms.set(n, s);
  let r = 0;
  for (let o of pendingSubagentArms.values()) r += o.length;
  while (r > u) {
    let [o, a] = pendingSubagentArms.entries().next().value;
    if (a.shift(), a.length === 0) pendingSubagentArms.delete(o);
    r--, p("artifact_live_subscribe", "subagent_arm_evicted");
  }
}
function l(n) {
  let pendingSubagentArms_2 = ee().live.pendingSubagentArms,
    t = pendingSubagentArms_2.get(n) ?? [];
  return pendingSubagentArms_2.delete(n), t;
}
var d = 256;
function m(n) {
  let finishedSubagentAdopters = ee().live.finishedSubagentAdopters;
  finishedSubagentAdopters.delete(n), finishedSubagentAdopters.add(n);
  while (finishedSubagentAdopters.size > d) finishedSubagentAdopters.delete(finishedSubagentAdopters.values().next().value);
}
function Gni(n) {
  let {
    agentId: agentId,
    context: context
  } = n;
  m(agentId);
  let s = l(agentId);
  if (s.length === 0) return;
  let {
    publishContext: publishContext_2
  } = _ue({
    agentId: context.agentId,
    agentType: context.agentContext?.agentType,
    isNonInteractiveSession: context.options.isNonInteractiveSession
  });
  if (publishContext_2 === "subagent" && context.agentId !== void 0) {
    let o = a6(context.agentId, context.taskRegistry) === context.agentId || !ee().live.finishedSubagentAdopters.has(context.agentId);
    for (let a of s) if (o) Plr(context.agentId, a);else p("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!HY(publishContext_2)) return;
  let context_2 = {
    ...context,
    abortController: new AbortController()
  };
  for (let o of s) BNe({
    ...o,
    publishContext: publishContext_2,
    getKnownVer: Xoo(context.getArtifactReadObservation, o.slug),
    context: context_2,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: c(publishContext_2)
  });
}
export { YJr, Plr, Gni };