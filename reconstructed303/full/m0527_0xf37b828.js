// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  K,
  we
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  qe,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  hEs,
  yEs,
  _Es,
  bEs,
  Ryo,
  SEs,
  BUn,
  wEs,
  vEs,
  kEs,
  Pyo,
  DEs,
  LEs,
  Oyo,
  xct,
  NEs
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  cwr,
  Re,
  Bt
} from "B:/~BUN/root/chunk-9grc6xh0.js";
var k = "tengu_lantern_wick_release",
  P = "tengu_lantern_wick_braid",
  I = "tengu_lantern_wick_braid_text",
  w = "tengu_lantern_wick_braid_release",
  y = "tengu_lantern_wick_text_by_model",
  L = "tengu_lantern_wick_release_by_model";

function S(t, n, e) {
  return SZr(t, e) ?? E(n, "")
}

function SZr(t, n) {
  let e = E(t, {});
  if (typeof e !== "object" || e === null) return;
  let u = e;
  return [n, qe(n), "default"].map((a) => u[a]).find((a) => typeof a === "string")
}

function W(t) {
  let n = typeof t === "string" ? t.trim() : "";
  return n ? `[${n}]` : ""
}

function _(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let e = t[n];
    if (e?.type === "user" && e.usageLimitNote !== void 0) return e.usageLimitNote
  }
  return
}

function* gis(t, {
  resumeActive: n,
  isMainLoop: e,
  querySource: u,
  depth: a,
  model: R,
  toolUseContext: p,
  now: c,
  uuid: m
}) {
  let {
    agentContext: f
  } = p, C = !e && u.startsWith("agent:") && f.agentType !== "teammate" && !(f.agentType === "subagent" && f.workflowRunId);
  if (n || !(e || C)) return t;
  let o = [];
  try {
    let s = e && a === 0 && cwr(t),
      d = s && Oyo();
    if (e && a === 0 && !d) Pyo();
    let G = !1,
      U = !1;
    if (e && (a > 0 || d)) {
      if (U = DEs(), d && !U) {
        let r = _(t);
        if (r !== "wrap_up" && r !== "near_limit") Pyo()
      }
    }
    if (e ? U : Oyo() && E(P, !1) === !0 && _(t) !== "wrap_up") {
      let r = (e ? null : Ryo(E(I, ""))) ?? Ryo(S(y, bEs, R)),
        i = r !== null ? "custom" : _Es(E(yEs, "off"));
      if (i !== "off") {
        if (o.push(Re({
            content: r ?? (i === "next-steps" ? SEs : hEs),
            isMeta: !0,
            turnCompanion: !0,
            usageLimitNote: "wrap_up",
            now: c,
            uuidFn: m
          })), g(e ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", {
            next_steps: i === "next-steps",
            custom: i === "custom"
          }), G = !0, e) LEs()
      }
    }
    let T = !e || s ? xct() : null,
      x = T !== null && T.extraUsageStatus === void 0,
      N;
    if (e) {
      let r = a === 0 ? _(t) : void 0;
      N = !x && (r === "wrap_up" || r === "near_limit")
    } else N = !x && _(t) === "wrap_up" && E(P, !1) === !0;
    if (N) {
      let r = (e ? "" : W(E(w, ""))) || W(S(L, k, R));
      if (r) o.push(Re({
        content: r,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "release",
        now: c,
        uuidFn: m
      })), g(e ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent")
    }
    if (e && a > 0 && NEs() && E(BUn, !1)) {
      if (o.push(Bt(vEs, kEs)), !G) o.push(Re({
        content: wEs,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "near_limit",
        now: c,
        uuidFn: m
      }));
      if (g("usage_limit_near_wrapup"), !we()) import("B:/~BUN/root/chunk-z3pbh6te.js").then(({
        performRateLimitCheckpoint: r
      }) => r({
        todos: p.getAppState().todos[p.agentId ?? K()] ?? [],
        trigger: "near_limit"
      })).catch(() => {})
    }
  } catch (s) {
    l(s)
  }
  let A = [];
  for (let s of o)
    if (yield s, s.type === "user") A.push(s);
  return A.length === 0 ? t : [...t, ...A]
}
export {
  SZr,
  gis
};
