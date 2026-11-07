// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bo } from "B:/~BUN/root/chunk-game8aqv.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Xi, KV } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Cj, ib } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { o, I, C, u, He, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { createHash as w } from "crypto";
import { realpath as A, stat as P } from "fs/promises";
var xun = "anthropic/permissionAsks";
function ema() {
  return {
    experimental: {
      [xun]: {
        v: 1
      }
    }
  };
}
var W = p(() => u({
    experimental: u({
      [xun]: u({
        v: T(1)
      })
    })
  })),
  x = "anthropic/permissionQuestion",
  k = 32,
  b = 2000,
  O = 1024,
  regExp = new RegExp(`[${ib}]+`, "gu");
function brt(n) {
  return Cj(n.replace(regExp, "\uFFFD"));
}
var R = p(() => o().regex(/^[0-9a-f]{64}$/)),
  z = p(() => He({
    v: T(1),
    approved: He({
      ask_digest: R(),
      attested: I()
    }).optional()
  })),
  Z = p(() => He({
    v: T(1),
    outcome: T("needs_approval"),
    ask_digest: R(),
    reasons: C(He({
      reason: o().min(1).max(b),
      classifier_approvable: I(),
      circuit_breaker: o().max(64).optional(),
      also: C(o().max(64)).max(k).optional()
    })).min(1).max(k)
  }));
function kUr(n) {
  let e = it(n) ? n[xun] : void 0;
  if (e === void 0) return {
    kind: "absent"
  };
  if (typeof e !== "string" || e.length > O) return {
    kind: "unreadable"
  };
  let r = z().safeParse(et(e, !1)).data;
  if (r === void 0) return {
    kind: "unreadable"
  };
  return r.approved === void 0 ? {
    kind: "can_ask"
  } : {
    kind: "approved",
    askDigest: r.approved.ask_digest,
    attested: r.approved.attested
  };
}
function vUr(n, e, r = !0) {
  return {
    reason: brt(n.reason),
    classifier_approvable: e && !(r && KV(n)),
    ...(n.circuitBreaker !== void 0 && {
      circuit_breaker: n.circuitBreaker
    }),
    ...(n.also !== void 0 && {
      also: [...n.also]
    })
  };
}
function Wqn(n) {
  if (n?.type === "safetyCheck") return [n];
  return n?.type === "subcommandResults" ? [...n.reasons.values()].flatMap(item => Wqn(item.decisionReason)) : [];
}
function v({
  matchedAskRule: matchedAskRule,
  decisionReason: decisionReason
}) {
  return [...(matchedAskRule?.ruleBehavior === "ask" ? [g(matchedAskRule)] : []), ...(decisionReason?.type === "rule" && decisionReason.rule.ruleBehavior === "ask" ? [g(decisionReason.rule)] : []), ...(decisionReason?.type === "other" ? [S(decisionReason.reason)] : []), ...(decisionReason?.type === "subcommandResults" ? [...decisionReason.reasons.values()].flatMap(item => item.behavior === "ask" ? v(item) : []) : [])];
}
function g(n) {
  return S(`A permission rule says to ask a person before a call like this one: '${mn(n.ruleValue)}'`);
}
function S(reason) {
  return {
    type: "safetyCheck",
    reason: reason,
    classifierApprovable: !1
  };
}
function j(n, e, {
  path: path,
  identity: identity
}, t) {
  return w("sha256").update(_([n, e, path, identity ?? null, t])).digest("hex");
}
function Q(n, e, r, f) {
  let t = a => vUr(a, a.classifierApprovable),
    s = Wqn(r.decisionReason).map(t),
    d = v(r).map(t),
    m = d.length === 0 ? s : [...s.toSorted((a, y) => Number(a.classifier_approvable) - Number(y.classifier_approvable)), ...d].map(item => ({
      ...item,
      classifier_approvable: !1
    })),
    reasons = Xi(m, _);
  if (reasons.length === 0 || reasons.length > k) return;
  if (reasons.some(item => item.reason.length > b)) return;
  return {
    v: 1,
    outcome: "needs_approval",
    ask_digest: j(n.name, e, f, reasons),
    reasons: reasons
  };
}
async function PMo(n, e, r, f, t) {
  let s = kUr(n);
  if (s.kind === "absent") return "as_without_the_key";
  if (t === void 0) return s.kind === "approved" ? l(e, "question_changed", h) : "as_without_the_key";
  if (s.kind === "unreadable") return l(e, "asks_key_unreadable", `${t.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`);
  let d = Bo(f).cwd,
    m = {
      path: d,
      identity: await Promise.all([A(d), P(d, {
        bigint: !0
      })]).then(([a, y]) => a === d ? `${y.dev}:${y.ino}` : void 0, () => {
        return;
      })
    };
  if (m.identity === void 0) return s.kind === "approved" ? l(e, "question_changed", h) : l(e, "start_folder_unconfirmed", `${t.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`);
  let i = Q(e, r, t, m);
  if (i === void 0) return l(e, "question_too_large", `${t.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`);
  switch (s.kind) {
    case "can_ask":
      return c("mcp_serve_plain_call", "asked"), {
        rejection: `${e.name} was not run: ${t.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`,
        meta: {
          [x]: i
        }
      };
    case "approved":
      if (!s.attested) return l(e, "approval_not_from_person", "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why.");
      return i.ask_digest === s.askDigest ? "run" : l(e, "question_changed", h);
  }
}
var h = "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function l(n, e, r) {
  return c("mcp_serve_plain_call", e), {
    rejection: `${n.name} was not run: ${r}`
  };
}
export { xun, ema, brt, kUr, vUr, Wqn, PMo };