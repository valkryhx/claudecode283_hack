// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  u9
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  vve,
  EJo
} from "B:/~BUN/root/chunk-gvv6aaq0.js";
import {
  hBe
} from "B:/~BUN/root/chunk-vdr4jpe1.js";
import {
  wQ
} from "B:/~BUN/root/chunk-fmk5s6jw.js";
var u = 32;

function eKo(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {
    publishContext: e
  } = vve({
    agentId: void 0,
    isNonInteractiveSession: ye()
  });
  return wQ(e) ? e : null
}

function L4r(n, e) {
  let t = te().live.pendingSubagentArms,
    o = t.get(n) ?? [],
    i = o.findIndex((s) => s.slug === e.slug);
  if (i === -1) o.push(e);
  else o[i] = {
    ...e,
    title: e.title ?? o[i]?.title
  };
  t.delete(n), t.set(n, o);
  let r = 0;
  for (let s of t.values()) r += s.length;
  while (r > u) {
    let [s, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(s);
    r--, c("artifact_live_subscribe", "subagent_arm_evicted")
  }
}

function l(n) {
  let e = te().live.pendingSubagentArms,
    t = e.get(n) ?? [];
  return e.delete(n), t
}
var d = 256;

function m(n) {
  let e = te().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > d) e.delete(e.values().next().value)
}

function mya(n) {
  let {
    agentId: e,
    context: t
  } = n;
  m(e);
  let o = l(e);
  if (o.length === 0) return;
  let {
    publishContext: i
  } = vve({
    agentId: t.agentId,
    agentType: t.agentContext?.agentType,
    isNonInteractiveSession: t.options.isNonInteractiveSession
  });
  if (i === "subagent" && t.agentId !== void 0) {
    let s = u9(t.agentId, t.taskRegistry) === t.agentId || !te().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of o)
      if (s) L4r(t.agentId, a);
      else c("artifact_live_subscribe", "subagent_arm_orphaned");
    return
  }
  if (!wQ(i)) return;
  let r = {
    ...t,
    abortController: new AbortController
  };
  for (let s of o) hBe({
    ...s,
    publishContext: i,
    getKnownVer: EJo(t.getArtifactReadObservation, s.slug),
    context: r,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: o.length,
    publish_context: f(i)
  })
}
export {
  eKo,
  L4r,
  mya
};
