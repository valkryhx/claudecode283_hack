// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { Hn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { vs } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { kt, IH, Id, TD, dg, MH } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { SS, mds } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { F0 } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { jg, MS, amt, Fh, le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { LHs as answeredBy, ov, MK, aFt, UX, $C, Wv, aIe, UN, Pme, sA } from "B:/~BUN/root/chunk-66hg7026.js";
import { P1, D8, X$, HCt, F7, eue } from "B:/~BUN/root/chunk-cfst22ma.js";
import { KA, Ucr, Doe, MCt, jcr } from "B:/~BUN/root/chunk-r4yejzt5.js";
import { pr } from "B:/~BUN/root/chunk-j1zjtkgf.js";
function sAe() {
  return ee().frozenMultiFile ?? F0();
}
function UL(t) {
  return $C() && Fh(t);
}
function BKe() {
  return {
    behavior: "deny",
    message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.",
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}
function H6t(t, e = "file_path") {
  return {
    behavior: "deny",
    message: `cannot read ${e} (${t}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}
function iAe(t, e, n) {
  if (M7(t, e.slug) || HCt(kt(e.slug), n)) return !0;
  if (!(Ucr && le(t).mode === "plan")) {
    let o = kt(e.slug);
    if (UN(o)) return aFt("foreign_read", e.slug) || UX(amt(t), "artifactAssetReadHumanConsentSlugs", e.slug);
    return n || TD(o) && MCt(e) === !1 || (aIe(n, e) ? aFt("foreign_read", e.slug) : MK("foreign_read", e.slug));
  }
  return UX(amt(t), le(t).mode === "plan" || aIe(n, e) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug);
}
function Moe(t, e, n, s = "copy") {
  let o = kt(e.slug);
  if (s === "copy" && sA(o)) return jcr(t, e.slug);
  let i = Id(o);
  return i && (!P1(o) || X$(o)) && !(n === "files" && D8(o)) || iAe(t, e, i);
}
function M7(t, e) {
  return g(le(t).mode, e);
}
function g(t, e) {
  return t !== "plan" && f(e);
}
function f(t) {
  let e = kt(t);
  return TD(e) && !UN(e) && e?.lastProbeIssuedAt !== void 0 && !IH(e.lastProbeIssuedAt) && mds(t);
}
function jKe(t, e) {
  return Ncr(le(t).mode, e);
}
function Ncr(t, e) {
  return t !== "plan" && bPn(e);
}
function bPn(t) {
  return p(t) && f(t);
}
function p(t) {
  let e = kt(t);
  return e !== void 0 && e.probeFailed !== !0 && e.mode === "org";
}
function m(t, e) {
  let n = kt(e);
  return le(t).mode !== "plan" && n?.probeFailed === !0 && n.probeGone === !0 && n.lastProbeIssuedAt !== void 0 && !IH(n.lastProbeIssuedAt) && SS(e) === "first_party_type";
}
function D7(t, e, n = !1) {
  let s = KA("read", t, e);
  return (n ? jKe(e, t.slug) : M7(e, t.slug) || m(e, t.slug)) ? {
    ask: !1,
    foreignRead: !0,
    attested: !0
  } : ov(s);
}
function SPn(t, e) {
  let n = kt(t.slug),
    s = sA(n) ? ov({
      ...KA("read", t, e),
      owned: !1,
      outsideOrg: !0
    }) : D7(t, e);
  return s.ask && s.about === "outside_org" ? {
    ...s,
    answeredBy: answeredBy,
    informedOnly: !0
  } : s;
}
function HZr(t, e) {
  if (MS(t) || UL(t)) return () => "none";
  let n = Wv(e) || Pme(e.slug);
  if (!jg(t)) return a => n && !a ? "none" : "save";
  let s = le(t),
    o = s.mode === "auto",
    i = s.shouldAvoidPermissionPrompts === !0;
  return a => o && !(n && !a) ? "save" : i ? "none" : "ask";
}
function cri(t, e, n) {
  if (!(dg(e.slug) && !vs(t.agentContext))) return F7("webfetch", t, e.slug, !1), null;
  let o = n(),
    i = Hn(e);
  return ({
    forcedBy: forcedBy,
    personOnly: personOnly
  }) => {
    let matchedAskRule = forcedBy ?? o;
    F7("webfetch", t, e.slug, !0, matchedAskRule !== null);
    let l = `${personOnly?.lead ?? `Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (matchedAskRule === null) {
      let c = Doe(t, "Nothing was fetched", l);
      if (c !== null) return c;
    }
    let d = matchedAskRule === null ? l : `${l} \u2014 your ${matchedAskRule.ruleValue.toolName} ask rule covers ${matchedAskRule.ruleValue.toolName !== pr && matchedAskRule.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
    return {
      behavior: "ask",
      message: d,
      decisionReason: {
        type: "safetyCheck",
        reason: d,
        classifierApprovable: matchedAskRule === null && personOnly === void 0
      },
      ...(matchedAskRule !== null && {
        matchedAskRule: matchedAskRule
      }),
      suppressAlwaysAllowRule: !0,
      localDisplayOnly: !0
    };
  };
}
function uri(t, e) {
  if (eue("webfetch", t, e.slug, !1) && !vs(t.agentContext)) MH(e.slug);
}
export { sAe, UL, BKe, H6t, iAe, Moe, M7, jKe, Ncr, bPn, D7, SPn, HZr, cri, uri };