// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  XG
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  j7,
  Tgr
} from "B:/~BUN/root/chunk-at7axhcd.js";
import {
  zSe
} from "B:/~BUN/root/chunk-m6mzmc8p.js";
import {
  iW
} from "B:/~BUN/root/chunk-zqd621xt.js";
var u = 32;

function War(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {
    publishContext: e
  } = j7({
    agentId: void 0,
    isNonInteractiveSession: Te()
  });
  return iW(e) ? e : null
}

function eRn(n, e) {
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

function g(n) {
  let e = ee().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > d) e.delete(e.values().next().value)
}

function BKo(n) {
  let {
    agentId: e,
    context: t
  } = n;
  g(e);
  let s = l(e);
  if (s.length === 0) return;
  let {
    publishContext: i
  } = j7({
    agentId: t.agentId,
    agentType: t.agentContext?.agentType,
    isNonInteractiveSession: t.options.isNonInteractiveSession
  });
  if (i === "subagent" && t.agentId !== void 0) {
    let o = XG(t.agentId, t.taskRegistry) === t.agentId || !ee().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s)
      if (o) eRn(t.agentId, a);
      else p("artifact_live_subscribe", "subagent_arm_orphaned");
    return
  }
  if (!iW(i)) return;
  let r = {
    ...t,
    abortController: new AbortController
  };
  for (let o of s) zSe({
    ...o,
    publishContext: i,
    getKnownVer: Tgr(t.getArtifactReadObservation, o.slug),
    context: r,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  _("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: c(i)
  })
}
export {
  War,
  eRn,
  BKo
};
