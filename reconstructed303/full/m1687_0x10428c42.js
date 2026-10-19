// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  a6
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  _ue,
  Xoo
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
import {
  BNe
} from "B:/~BUN/root/chunk-93pyppxk.js";
import {
  HY
} from "B:/~BUN/root/chunk-93gzx7c6.js";
var u = 32;

function YJr(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {
    publishContext: e
  } = _ue({
    agentId: void 0,
    isNonInteractiveSession: we()
  });
  return HY(e) ? e : null
}

function Plr(n, e) {
  let t = ee().live.pendingSubagentArms,
    s = t.get(n) ?? [],
    i = s.findIndex((o) => o.slug === e.slug);
  if (i === -1) s.push(e);
  else s[i] = e;
  t.delete(n), t.set(n, s);
  let r = 0;
  for (let o of t.values()) r += o.length;
  while (r > u) {
    let [o, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(o);
    r--, p("artifact_live_subscribe", "subagent_arm_evicted")
  }
}

function l(n) {
  let e = ee().live.pendingSubagentArms,
    t = e.get(n) ?? [];
  return e.delete(n), t
}
var d = 256;

function m(n) {
  let e = ee().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > d) e.delete(e.values().next().value)
}

function Gni(n) {
  let {
    agentId: e,
    context: t
  } = n;
  m(e);
  let s = l(e);
  if (s.length === 0) return;
  let {
    publishContext: i
  } = _ue({
    agentId: t.agentId,
    agentType: t.agentContext?.agentType,
    isNonInteractiveSession: t.options.isNonInteractiveSession
  });
  if (i === "subagent" && t.agentId !== void 0) {
    let o = a6(t.agentId, t.taskRegistry) === t.agentId || !ee().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s)
      if (o) Plr(t.agentId, a);
      else p("artifact_live_subscribe", "subagent_arm_orphaned");
    return
  }
  if (!HY(i)) return;
  let r = {
    ...t,
    abortController: new AbortController
  };
  for (let o of s) BNe({
    ...o,
    publishContext: i,
    getKnownVer: Xoo(t.getArtifactReadObservation, o.slug),
    context: r,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: c(i)
  })
}
export {
  YJr,
  Plr,
  Gni
};
