// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Djt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { vCi, ECi, TCi, CCi, aPn, Ias, RCi, Smr, ACi as content_2, xCi, PCi, Nas, UCi, BCi, Fas, v9e, jCi } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { Joo, Ie, Bt } from "B:/~BUN/root/chunk-27h4st9h.js";
var I = "tengu_lantern_wick_release",
  S = "tengu_lantern_wick_braid",
  y = "tengu_lantern_wick_braid_text",
  L = "tengu_lantern_wick_braid_release",
  w = "tengu_lantern_wick_text_by_model",
  b = "tengu_lantern_wick_release_by_model";
function P(t, n, e) {
  return p6o(t, e) ?? v(n, "");
}
function p6o(t, n) {
  let e = v(t, {});
  if (typeof e !== "object" || e === null) return;
  let p = e;
  return [n, rt(n), "default"].map(item => p[item]).find(item => typeof item === "string");
}
function W(t) {
  if (aPn()) {
    let e = Djt(t);
    if (e === null) {
      if (typeof t === "string" && t.trim() !== "") c("usage_limit_served_text_rejected", "release_text");
      return "";
    }
    if (typeof t === "string" && e !== t.trim()) c("usage_limit_served_text_altered", "release_text");
    return `[${e}]`;
  }
  let n = typeof t === "string" ? t.trim() : "";
  return n ? `[${n}]` : "";
}
function u(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let e = t[n];
    if (e?.type === "user" && e.usageLimitNote !== void 0) return e.usageLimitNote;
  }
  return;
}
function* udi(t, {
  resumeActive: resumeActive,
  isMainLoop: isMainLoop,
  querySource: querySource,
  depth: depth,
  continuesInterruptedWork: continuesInterruptedWork,
  model: model,
  toolUseContext: toolUseContext,
  now: now,
  uuid: f
}) {
  let {
      agentContext: agentContext
    } = toolUseContext,
    C = !isMainLoop && querySource.startsWith("agent:") && agentContext.agentType !== "teammate" && !(agentContext.agentType === "subagent" && agentContext.workflowRunId);
  if (resumeActive || !(isMainLoop || C)) return t;
  let o = [];
  try {
    let i = isMainLoop && depth === 0 && Joo(t),
      E = i && Fas();
    if (isMainLoop && depth === 0 && !E) Nas();
    let R = !1,
      U = !1;
    if (isMainLoop && (depth > 0 || E)) {
      if (U = UCi(), E && !U) {
        let r = u(t);
        if (r !== "wrap_up" && r !== "near_limit") Nas();
      }
    }
    if (isMainLoop ? U : Fas() && v(S, !1) === !0 && u(t) !== "wrap_up") {
      let r = (isMainLoop ? null : Ias(v(y, ""))) ?? Ias(P(w, CCi, model)),
        _ = r !== null ? "custom" : TCi(v(ECi, "off"));
      if (_ !== "off") {
        if (o.push(Ie({
          content: r ?? (_ === "next-steps" ? RCi : vCi),
          isMeta: !0,
          turnCompanion: !0,
          usageLimitNote: "wrap_up",
          now: now,
          uuidFn: f
        })), g(isMainLoop ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", {
          next_steps: _ === "next-steps",
          custom: _ === "custom"
        }), R = !0, isMainLoop) BCi();
      }
    }
    let T = !isMainLoop || i ? v9e() : null,
      G = T !== null && T.extraUsageStatus === void 0,
      N;
    if (isMainLoop) {
      let r = depth === 0 ? u(t) : void 0;
      N = !G && !continuesInterruptedWork && (r === "wrap_up" || r === "near_limit");
    } else N = !G && u(t) === "wrap_up" && v(S, !1) === !0;
    if (N) {
      let content = (isMainLoop ? "" : W(v(L, ""))) || W(P(b, I, model));
      if (content) o.push(Ie({
        content: content,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "release",
        now: now,
        uuidFn: f
      })), g(isMainLoop ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent");
    }
    if (isMainLoop && depth > 0 && jCi() && v(Smr, !1)) {
      if (o.push(Bt(xCi, PCi)), !R) o.push(Ie({
        content: content_2,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "near_limit",
        now: now,
        uuidFn: f
      }));
      if (g("usage_limit_near_wrapup"), !ye()) import("B:/~BUN/root/chunk-abtphr42.js").then(({
        performRateLimitCheckpoint: performRateLimitCheckpoint
      }) => performRateLimitCheckpoint({
        todos: toolUseContext.getAppState().todos[toolUseContext.agentId ?? z()] ?? [],
        trigger: "near_limit"
      })).catch(() => {});
    }
  } catch (error) {
    a(error);
  }
  let A = [];
  for (let i of o) if (yield i, i.type === "user") A.push(i);
  return A.length === 0 ? t : [...t, ...A];
}
export { p6o, udi };