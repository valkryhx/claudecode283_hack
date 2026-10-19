// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { xK } from "B:/~BUN/root/chunk-b4xxgr0r.js";
var k = /^\d{1,12}-[0-9a-f]{1,32}$/;
function YCt(e) {
  return ar.test(e) ? xn(e) : b("nonconforming");
}
function p(e) {
  return k.test(e) ? xn(e) : b("nonconforming");
}
var h = {
    startedSeen: [],
    completedSeen: [],
    startedPublishes: {},
    invokeT0: null
  },
  mas = xK("workshopTelemetry", h);
function gas(e) {
  e.set(t => ({
    ...t,
    invokeT0: performance.now()
  }));
}
function has(e) {
  if (e === void 0 || e.invokeT0 === null) return e;
  return {
    ...e,
    invokeT0: null
  };
}
function S(e, t) {
  if (e.startedSeen.includes(t)) return e;
  return {
    ...e,
    startedSeen: [...e.startedSeen, t]
  };
}
function f(e, t) {
  if (e.completedSeen.includes(t)) return e;
  return {
    ...e,
    completedSeen: [...e.completedSeen, t]
  };
}
function yas(e, t, l, i, decisions_total, decisions_resolved) {
  if (g("workshop_turn", {
    artifact_slug: YCt(t),
    artifact_version: p(l),
    decisions_total: decisions_total,
    decisions_resolved: decisions_resolved,
    state: c(i)
  }), i !== "started") return;
  let s = !0;
  if (e.set(n => (s = n.startedSeen.includes(t), S(n, t))), !s) g("workshop_build_started", {
    artifact_slug: YCt(t)
  });
}
function Meo(e, t, l, i, o, d) {
  let s;
  e.set(prev => {
    let next = prev;
    if (next.invokeT0 !== null) next = {
      ...next,
      invokeT0: null
    };
    if (i === "started") next = S(next, t);
    if (o.n > 0) next = f(next, t);else if (i === "started" && !next.completedSeen.includes(t)) {
      let m = (next.startedPublishes[t] ?? 0) + 1;
      if (next = {
        ...next,
        startedPublishes: {
          ...next.startedPublishes,
          [t]: m
        }
      }, m >= 2) next = f(next, t);
    }
    return s = {
      prev: prev,
      next: next
    }, next;
  });
  let {
    prev: prev_2,
    next: next_2
  } = s;
  if (prev_2.invokeT0 !== null && d) g("workshop_first_page", {
    invoke_to_publish_ms: Math.round(performance.now() - prev_2.invokeT0),
    first_publish_state: c(i)
  });
  if (!prev_2.startedSeen.includes(t) && next_2.startedSeen.includes(t)) g("workshop_build_started", {
    artifact_slug: YCt(t)
  });
  if (!prev_2.completedSeen.includes(t) && next_2.completedSeen.includes(t)) {
    let a = o.n > 0 ? "structural" : "post_kickoff_republish";
    g("workshop_build_completed", {
      artifact_slug: YCt(t),
      artifact_version: p(l),
      source: c(a),
      deliverables_n: o.n,
      deliverables_pr: o.pr,
      deliverables_artifact: o.artifact,
      deliverables_other: o.other
    });
  }
}
export { YCt, mas, gas, has, yas, Meo };