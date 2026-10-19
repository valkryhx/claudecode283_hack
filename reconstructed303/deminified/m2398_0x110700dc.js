// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { vo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { vi, IW } from "B:/~BUN/root/chunk-8z3a373v.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { _, ZB, z_ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { o, M, T, u, De, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as w } from "crypto";
import { realpath as A, stat as P } from "fs/promises";
var RWt = "anthropic/permissionAsks";
function BZs() {
  return {
    experimental: {
      [RWt]: {
        v: 1
      }
    }
  };
}
var W = f(() => u({
    experimental: u({
      [RWt]: u({
        v: C(1)
      })
    })
  })),
  x = "anthropic/permissionQuestion",
  k = 32,
  b = 2000,
  O = 1024,
  regExp = new RegExp(`[${z_}]+`, "gu");
function p2e(n) {
  return ZB(n.replace(regExp, "\uFFFD"));
}
var R = f(() => o().regex(/^[0-9a-f]{64}$/)),
  z = f(() => De({
    v: C(1),
    approved: De({
      ask_digest: R(),
      attested: M()
    }).optional()
  })),
  Z = f(() => De({
    v: C(1),
    outcome: C("needs_approval"),
    ask_digest: R(),
    reasons: T(De({
      reason: o().min(1).max(b),
      classifier_approvable: M(),
      circuit_breaker: o().max(64).optional(),
      also: T(o().max(64)).max(k).optional()
    })).min(1).max(k)
  }));
function BQn(n) {
  let e = Dn(n) ? n[RWt] : void 0;
  if (e === void 0) return {
    kind: "absent"
  };
  if (typeof e !== "string" || e.length > O) return {
    kind: "unreadable"
  };
  let r = z().safeParse(pt(e, !1)).data;
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
function jQn(n, e) {
  return {
    reason: p2e(n.reason),
    classifier_approvable: e && !IW(n),
    ...(n.circuitBreaker !== void 0 && {
      circuit_breaker: n.circuitBreaker
    }),
    ...(n.also !== void 0 && {
      also: [...n.also]
    })
  };
}
function Khn(n) {
  if (n?.type === "safetyCheck") return [n];
  return n?.type === "subcommandResults" ? [...n.reasons.values()].flatMap(item => Khn(item.decisionReason)) : [];
}
function v({
  matchedAskRule: matchedAskRule,
  decisionReason: decisionReason
}) {
  return [...(matchedAskRule?.ruleBehavior === "ask" ? [g(matchedAskRule)] : []), ...(decisionReason?.type === "rule" && decisionReason.rule.ruleBehavior === "ask" ? [g(decisionReason.rule)] : []), ...(decisionReason?.type === "other" ? [S(decisionReason.reason)] : []), ...(decisionReason?.type === "subcommandResults" ? [...decisionReason.reasons.values()].flatMap(item => item.behavior === "ask" ? v(item) : []) : [])];
}
function g(n) {
  return S(`A permission rule says to ask a person before a call like this one: '${Sn(n.ruleValue)}'`);
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
}, s) {
  return w("sha256").update(_([n, e, path, identity ?? null, s])).digest("hex");
}
function Q(n, e, r, c) {
  let s = a => jQn(a, a.classifierApprovable),
    t = Khn(r.decisionReason).map(s),
    d = v(r).map(s),
    m = d.length === 0 ? t : [...t.toSorted((a, y) => Number(a.classifier_approvable) - Number(y.classifier_approvable)), ...d].map(item => ({
      ...item,
      classifier_approvable: !1
    })),
    reasons = vi(m, _);
  if (reasons.length === 0 || reasons.length > k) return;
  if (reasons.some(item => item.reason.length > b)) return;
  return {
    v: 1,
    outcome: "needs_approval",
    ask_digest: j(n.name, e, c, reasons),
    reasons: reasons
  };
}
async function KWr(n, e, r, c, s) {
  let t = BQn(n);
  if (t.kind === "absent") return "as_without_the_key";
  if (s === void 0) return t.kind === "approved" ? l(e, "question_changed", h) : "as_without_the_key";
  if (t.kind === "unreadable") return l(e, "asks_key_unreadable", `${s.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`);
  let d = vo(c).cwd,
    m = {
      path: d,
      identity: await Promise.all([A(d), P(d, {
        bigint: !0
      })]).then(([a, y]) => a === d ? `${y.dev}:${y.ino}` : void 0, () => {
        return;
      })
    };
  if (m.identity === void 0) return t.kind === "approved" ? l(e, "question_changed", h) : l(e, "start_folder_unconfirmed", `${s.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`);
  let i = Q(e, r, s, m);
  if (i === void 0) return l(e, "question_too_large", `${s.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`);
  switch (t.kind) {
    case "can_ask":
      return p("mcp_serve_plain_call", "asked"), {
        rejection: `${e.name} was not run: ${s.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`,
        meta: {
          [x]: i
        }
      };
    case "approved":
      if (!t.attested) return l(e, "approval_not_from_person", "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why.");
      return i.ask_digest === t.askDigest ? "run" : l(e, "question_changed", h);
  }
}
var h = "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function l(n, e, r) {
  return p("mcp_serve_plain_call", e), {
    rejection: `${n.name} was not run: ${r}`
  };
}
export { RWt, BZs, p2e, BQn, jQn, Khn, KWr };