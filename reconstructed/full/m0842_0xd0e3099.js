// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  En
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  Xo
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  uOr,
  RS,
  AF,
  mlt,
  wz,
  ld,
  ft,
  pI,
  hl,
  QM,
  qp,
  f0
} from "B:/~BUN/root/chunk-faawr4jv.js";
import {
  wg,
  Bao
} from "B:/~BUN/root/chunk-7z8vew74.js";
import {
  PA
} from "B:/~BUN/root/chunk-at7axhcd.js";
import {
  zf,
  fy,
  b6e,
  Pm,
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  HE,
  Gy,
  uI,
  V3,
  yv
} from "B:/~BUN/root/chunk-7d9qjs8x.js";
import {
  zH,
  q5,
  mL,
  Lze,
  Y5,
  qoe,
  nR,
  hAn,
  X5,
  NZe,
  yAn
} from "B:/~BUN/root/chunk-h9ex720v.js";
import {
  Dr
} from "B:/~BUN/root/chunk-c4gqp24s.js";

function Mze() {
  return ee().frozenMultiFile ?? PA()
}

function wP(t) {
  return HE() && Pm(t)
}

function MOe() {
  return {
    behavior: "deny",
    message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.",
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  }
}

function Mvt(t, e = "file_path") {
  return {
    behavior: "deny",
    message: `cannot read ${e} (${t}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  }
}

function g7(t, e, n) {
  if (yG(t, e.slug) || Lze(ft(e.slug), n)) return !0;
  let s = hAn && me(t).mode === "plan";
  if (ld() && !s) {
    let o = ft(e.slug);
    if (uI(o)) return mlt("foreign_read", e.slug) || wz(b6e(t), "artifactAssetReadHumanConsentSlugs", e.slug);
    return n || QM(o) && NZe(e) === !1 || AF("foreign_read", e.slug)
  }
  return wz(b6e(t), me(t).mode === "plan" || !n && (Gy(e) || V3(e.slug)) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug)
}

function G5(t, e, n, s = "copy") {
  let o = ft(e.slug);
  if (s === "copy" && yv(o)) return yAn(t, e.slug);
  let i = hl(o);
  return i && (!zH(o) || mL(o)) && !(n === "files" && q5(o)) || g7(t, e, i)
}

function yG(t, e) {
  return g(me(t).mode, e)
}

function g(t, e) {
  return t !== "plan" && f(e)
}

function f(t) {
  let e = ft(t);
  return QM(e) && !uI(e) && e?.lastProbeIssuedAt !== void 0 && !pI(e.lastProbeIssuedAt) && Bao(t)
}

function twe(t, e) {
  return cAn(me(t).mode, e)
}

function cAn(t, e) {
  return t !== "plan" && j6t(e)
}

function j6t(t) {
  return p(t) && f(t)
}

function p(t) {
  let e = ft(t);
  return e !== void 0 && e.probeFailed !== !0 && e.mode === "org"
}

function m(t, e) {
  let n = ft(e);
  return me(t).mode !== "plan" && n?.probeFailed === !0 && n.probeGone === !0 && n.lastProbeIssuedAt !== void 0 && !pI(n.lastProbeIssuedAt) && wg(e) === "first_party_type"
}

function V5(t, e, n = !1) {
  let s = nR("read", t, e);
  return (n ? twe(e, t.slug) : yG(e, t.slug) || m(e, t.slug)) ? {
    ask: !1,
    foreignRead: !0,
    attested: !0
  } : RS(s)
}

function W6t(t, e) {
  let n = ft(t.slug),
    s = yv(n) ? RS({
      ...nR("read", t, e),
      owned: !1,
      outsideOrg: !0
    }) : V5(t, e);
  return s.ask && s.about === "outside_org" ? {
    ...s,
    answeredBy: uOr,
    informedOnly: !0
  } : s
}

function Dcr(t, e) {
  if (fy(t) || wP(t)) return () => "none";
  let n = Gy(e) || V3(e.slug);
  if (!zf(t)) return (a) => n && !a ? "none" : "save";
  let s = me(t),
    o = s.mode === "auto",
    i = s.shouldAvoidPermissionPrompts === !0;
  return (a) => o && !(n && !a) ? "save" : i ? "none" : "ask"
}

function XKo(t, e, n) {
  if (!(qp(e.slug) && !Xo(t.agentContext))) return Y5("webfetch", t, e.slug, !1), null;
  let o = n(),
    i = En(e);
  return ({
    forcedBy: a,
    personOnly: u
  }) => {
    let r = a ?? o;
    Y5("webfetch", t, e.slug, !0, r !== null);
    let l = `${u?.lead??`Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (r === null) {
      let c = X5(t, "Nothing was fetched", l);
      if (c !== null) return c
    }
    let d = r === null ? l : `${l} \u2014 your ${r.ruleValue.toolName} ask rule covers ${r.ruleValue.toolName!==Dr&&r.ruleValue.ruleContent?.startsWith("url:")?"this url":"artifact reads"}`;
    return {
      behavior: "ask",
      message: d,
      decisionReason: {
        type: "safetyCheck",
        reason: d,
        classifierApprovable: r === null && u === void 0
      },
      ...r !== null && {
        matchedAskRule: r
      },
      suppressAlwaysAllowRule: !0,
      localDisplayOnly: !0
    }
  }
}

function JKo(t, e) {
  if (qoe("webfetch", t, e.slug, !1) && !Xo(t.agentContext)) f0(e.slug)
}
export {
  Mze,
  wP,
  MOe,
  Mvt,
  g7,
  G5,
  yG,
  twe,
  cAn,
  j6t,
  V5,
  W6t,
  Dcr,
  XKo,
  JKo
};
