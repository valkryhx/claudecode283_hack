// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { Bn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Qs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Mt, $I, Pu, mD, Dy, j2 } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { bv, ppi } from "B:/~BUN/root/chunk-gjq813eb.js";
import { p$ } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { Gg, dk, WNt, sh, se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { w1i as answeredBy, ZE, pX, ven, lse, xv, ZT, fGe, A1, i7e, HI } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { BK, jK, n2, W4t, lge, p3e } from "B:/~BUN/root/chunk-p383h22f.js";
import { BM, c8r, ive, H4t, f8r } from "B:/~BUN/root/chunk-e2g6ph6a.js";
import { Vn } from "B:/~BUN/root/chunk-tacrdmts.js";
function TBe() {
  return te().frozenMultiFile ?? p$();
}
function RB(t) {
  return xv() && sh(t);
}
function Uit() {
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
function tSn(t, e = "file_path") {
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
function CBe(t, e, n) {
  if (Ole(t, e.slug) || W4t(Mt(e.slug), n)) return !0;
  if (!(c8r && se(t).mode === "plan")) {
    let o = Mt(e.slug);
    if (A1(o)) return ven("foreign_read", e.slug) || lse(WNt(t), "artifactAssetReadHumanConsentSlugs", e.slug);
    return n || mD(o) && H4t(e) === !1 || (fGe(n, e) ? ven("foreign_read", e.slug) : pX("foreign_read", e.slug));
  }
  return lse(WNt(t), se(t).mode === "plan" || fGe(n, e) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug);
}
function Vhe(t, e, n, s = "copy") {
  let o = Mt(e.slug);
  if (s === "copy" && HI(o)) return f8r(t, e.slug);
  let i = Pu(o);
  return i && (!BK(o) || n2(o)) && !(n === "files" && jK(o)) || CBe(t, e, i);
}
function Ole(t, e) {
  return g(se(t).mode, e);
}
function g(t, e) {
  return t !== "plan" && f(e);
}
function f(t) {
  let e = Mt(t);
  return mD(e) && !A1(e) && e?.lastProbeIssuedAt !== void 0 && !$I(e.lastProbeIssuedAt) && ppi(t);
}
function Bit(t, e) {
  return n6r(se(t).mode, e);
}
function n6r(t, e) {
  return t !== "plan" && der(e);
}
function der(t) {
  return p(t) && f(t);
}
function p(t) {
  let e = Mt(t);
  return e !== void 0 && e.probeFailed !== !0 && e.mode === "org";
}
function m(t, e) {
  let n = Mt(e);
  return se(t).mode !== "plan" && n?.probeFailed === !0 && n.probeGone === !0 && n.lastProbeIssuedAt !== void 0 && !$I(n.lastProbeIssuedAt) && bv(e) === "first_party_type";
}
function Ile(t, e, n = !1) {
  let s = BM("read", t, e);
  return (n ? Bit(e, t.slug) : Ole(e, t.slug) || m(e, t.slug)) ? {
    ask: !1,
    foreignRead: !0,
    attested: !0
  } : ZE(s);
}
function cer(t, e) {
  let n = Mt(t.slug),
    s = HI(n) ? ZE({
      ...BM("read", t, e),
      owned: !1,
      outsideOrg: !0
    }) : Ile(t, e);
  return s.ask && s.about === "outside_org" ? {
    ...s,
    answeredBy: answeredBy,
    informedOnly: !0
  } : s;
}
function g4o(t, e) {
  if (dk(t) || RB(t)) return () => "none";
  let n = ZT(e) || i7e(e.slug);
  if (!Gg(t)) return a => n && !a ? "none" : "save";
  let s = se(t),
    o = s.mode === "auto",
    i = s.shouldAvoidPermissionPrompts === !0;
  return a => o && !(n && !a) ? "save" : i ? "none" : "ask";
}
function Lya(t, e, n) {
  if (!(Dy(e.slug) && !Qs(t.agentContext))) return lge("webfetch", t, e.slug, !1), null;
  let o = n(),
    i = Bn(e);
  return ({
    forcedBy: forcedBy,
    personOnly: personOnly
  }) => {
    let matchedAskRule = forcedBy ?? o;
    lge("webfetch", t, e.slug, !0, matchedAskRule !== null);
    let l = `${personOnly?.lead ?? `Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (matchedAskRule === null) {
      let c = ive(t, "Nothing was fetched", l);
      if (c !== null) return c;
    }
    let d = matchedAskRule === null ? l : `${l} \u2014 your ${matchedAskRule.ruleValue.toolName} ask rule covers ${matchedAskRule.ruleValue.toolName !== Vn && matchedAskRule.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
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
function Nya(t, e) {
  if (p3e("webfetch", t, e.slug, !1) && !Qs(t.agentContext)) j2(e.slug);
}
export { TBe, RB, Uit, tSn, CBe, Vhe, Ole, Bit, n6r, der, Ile, cer, g4o, Lya, Nya };