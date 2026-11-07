// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  aJ,
  Qs,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i,
  Ar
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  yo
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Vm,
  hr,
  fn,
  Xet,
  gWn,
  pKe,
  L4
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  fR,
  $q,
  NS
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  Mt,
  _Ce,
  Fq,
  Hq,
  $I,
  Pu,
  hX,
  wNn
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  T1i,
  xmt,
  ZT,
  i7e
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  vve
} from "B:/~BUN/root/chunk-gvv6aaq0.js";
import {
  bv
} from "B:/~BUN/root/chunk-gjq813eb.js";
import {
  gge
} from "B:/~BUN/root/chunk-z8zg5v1y.js";
import {
  jrr
} from "B:/~BUN/root/chunk-jn1nhjzk.js";
import {
  Gg,
  sh,
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  wQ,
  gui
} from "B:/~BUN/root/chunk-fmk5s6jw.js";
import {
  Urr
} from "B:/~BUN/root/chunk-7da681ce.js";
import {
  o,
  I,
  u,
  Be,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Fw
} from "B:/~BUN/root/chunk-5ha2avah.js";

function b(e, t) {
  return typeof e === "string" || typeof t === "string" ? e === t : Fw(e, t)
}
var E = 64;

function k(e) {
  let t = e.url;
  return typeof t === "string" ? fn(t) ?? void 0 : void 0
}
async function h8r(e, t) {
  let n = te().typeCapabilityReads,
    r = n.get(e);
  if (r !== void 0 && (!t.toolUseId || r.toolUseId === t.toolUseId)) return r.capabilities;
  let s = Date.now(),
    c = await gge(e, {
      signal: t.abortController.signal,
      credentials: t.credentials
    }),
    a = c.err === null ? c.detail : null,
    d = a === null || a.declaration === "malformed" ? null : a.capabilities,
    _ = d !== null && (a?.declaration === void 0 || Object.keys(a.declaration).length === d.length);
  if ($I(s)) return null;
  if (!n.has(e) && n.size >= E) {
    let m = n.keys().next().value;
    if (m !== void 0) n.delete(m)
  }
  return n.set(e, {
    toolUseId: t.toolUseId,
    capabilities: d,
    whole: _
  }), d
}

function a8o(e) {
  return te().typeCapabilityReads.get(e)?.whole === !0
}

function B4t(e) {
  return te().typeCapabilityReads.get(e)?.capabilities?.includes("room") === !0
}

function g8r(e, t) {
  if (Qs(t.agentContext)) return;
  if (Qne(e, t)) t.setAppState((n) => g(n, t, (r) => r.artifactWatchApproved ? r : {
    ...r,
    artifactWatchApproved: !0
  }))
}
var l8o = {
  get: {
    pages: !1,
    cursor: "",
    none: ""
  },
  list: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "a smaller read is the only way to see them"
  },
  query: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "narrow with a `query.where`"
  },
  replayed: {
    pages: !1,
    cursor: "",
    none: ""
  }
};

function Qne(e, t) {
  return Reflect.get(e, lg) === !0 && Gg(t) && !Lrr(t)
}

function d8o(e) {
  if (e.toolUseId === void 0) return;
  let t = te(),
    {
      consentCheckScopes: n
    } = t;
  if (n.delete(e.toolUseId), n.size >= x) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r), t.consentCheckScopesEvicted = !0
  }
  n.set(e.toolUseId, xmt())
}
var x = 256;

function Lrr(e) {
  if (e.toolUseId === void 0) return !1;
  let t = te(),
    n = t.consentCheckScopes.get(e.toolUseId);
  return n === void 0 ? t.consentCheckScopesEvicted : n !== xmt()
}

function mkn(e) {
  return Gg(e) && !yo(se(e).mode)
}

function j4t(e, t) {
  return (e[jw] ?? !1) && se(t).mode === "plan" || y8r(e)
}

function y8r(e) {
  return Reflect.get(e, OB) === !0
}

function g(e, t, n) {
  if (Lrr(t)) return e;
  let {
    accountEpoch: r
  } = te();
  if ((e.artifactConsentEpoch ?? 0) === r) return n(e);
  return n({
    ...e,
    ...Object.fromEntries(T1i.map((s) => [s, jrr[s]])),
    artifactConsentEpoch: r
  })
}

function c8o(e, t, n, r) {
  return g(e, t, (s) => ({
    ...s,
    artifactPlanPublishConsentPaths: {
      ...s.artifactPlanPublishConsentPaths,
      [n]: {
        slug: r
      }
    }
  }))
}

function C(e, t, n, r, s = () => !0) {
  return g(e, t, (c) => {
    if (n.every((d) => D(c[d]?.[r], s(c[d]?.[r])))) return c;
    let a = {
      ...c
    };
    for (let d of n) a[d] = {
      ...a[d],
      [r]: s(c[d]?.[r])
    };
    return {
      ...c,
      ...a
    }
  })
}

function D(e, t) {
  return e === void 0 || e === !0 || e === "script" || t === !0 || t === "script" ? e === t : b(e, t)
}

function A(e, t) {
  return t ? [`${e}ConsentSlugs`, `${e}HumanConsentSlugs`] : [`${e}ConsentSlugs`]
}

function u8o(e, t, n) {
  if (Qs(t.agentContext)) return;
  if (!Qne(e, t) || Pu(Mt(n))) return;
  t.setAppState((r) => C(r, t, A("artifactDbRead", j4t(e, t)), n))
}

function _8r(e, t) {
  if (Qs(t.agentContext) || te().routineSourceWriteRefused) return;
  if (!Qne(e, t)) return;
  let n = j4t(e, t);
  t.setAppState((r) => g(r, t, (s) => s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved) ? s : {
    ...s,
    artifactDbWriteApproved: !0,
    ...n && {
      artifactDbWriteHumanApproved: !0
    }
  }))
}

function BK(e) {
  return e?.cowritten === !0 || e?.artifactKind === fR
}

function jK(e) {
  return e?.typeLocked === !0 || e?.typeLock != null
}

function n2(e, t = Pu(e)) {
  return t && jK(e) && e?.artifactKind !== fR
}

function W4t(e, t = Pu(e)) {
  let n = Fq(e);
  return n2(e, t) && n !== void 0 && bv(n) === "first_party_type"
}

function f8o(e) {
  return e !== void 0 && e.typeLock != null && W4t(e) && !hX(e) && e.capabilitiesUnknown !== !0 && e.capsReadNotFound !== !0 && _Ce(e) && $q(e.capabilities)
}

function Iat() {
  let e = te();
  if (e.inheritedTypeGrantLatch === null) e.inheritedTypeGrantLatch = Ar.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? v("tengu_swirling_squid", !1) === !0, l("tengu_artifact_inherited_type_grant", {
    on: e.inheritedTypeGrantLatch
  });
  return e.inheritedTypeGrantLatch
}

function Mat(e, t, n, r = !1) {
  if (Qs(t.agentContext)) return;
  let s = Mt(n),
    c = Reflect.get(e, f$),
    a = (S) => typeof c === "object" && c !== null && Reflect.get(c, S) === !0,
    d = a("classifier") || se(t).mode === "auto" && !a("userOnly");
  if (!P(e, t) || a("once") || d || Pu(s) && !BK(s) && !jK(s)) return;
  let _ = j(e, t) || r && u1e(t),
    m = r && !lve(t);
  t.setAppState((S) => C(S, t, [...A("artifactAssetRead", _), ...m ? ["artifactOutsideOrgConsentSlugs"] : []], n))
}

function p8o(e, t) {
  if (t.length === 0 || Qs(e.agentContext)) return;
  e.setAppState((n) => t.reduce((r, s) => C(r, e, ["artifactOutsideOrgConsentSlugs"], s), n))
}

function m8o(e, t, n) {
  if (Qs(t.agentContext)) return;
  if (!P(e, t) || lve(t) || se(t).mode === "auto" && !ZT(k(e)) && !i7e(n) || Pu(Mt(n))) return;
  t.setAppState((r) => C(r, t, ["artifactReadConsentSlugs"], n))
}

function z4t(e, t, n, r) {
  if (Qs(t.agentContext)) return;
  if (!Qne(e, t) || se(t).mode === "auto") return;
  wNn(n, r), t.setAppState((s) => C(s, t, A("artifactAssetUpload", j4t(e, t)), n))
}

function Nrr(e, t) {
  return Reflect.get(e, Vle) === "auto" && !u1e(t)
}

function Dat(e, t) {
  return e === "auto" && !te().roomStoppedByUser.has(t)
}

function R(e) {
  let t = e.queryTracking;
  return t === void 0 ? void 0 : `${t.chainId}:${t.depth}`
}

function h8o(e, t, n) {
  let {
    roomArmAsked: r
  } = te();
  if (n === void 0) r.delete(t);
  else r.set(t, {
    ...n,
    at: R(e)
  })
}

function g8o(e, t) {
  for (let [n, r] of te().roomArmAsked) {
    if (n === t) continue;
    if (e.keys.includes(r.key) || e.slug !== void 0 && r.slug === e.slug) return !0
  }
  return !1
}

function y8o(e) {
  if (e !== void 0) te().roomArmAsked.delete(e)
}
var Frr = "path:*";

function b8r(e) {
  let t = te(),
    n = R(e);
  for (let [r, s] of t.roomArmAsked) {
    if (r === e.toolUseId) continue;
    let c = N(e.messages, r);
    if (c === void 0 && s.at !== void 0 && s.at === n) continue;
    t.roomArmAsked.delete(r);
    let a = c?.toolDenialKind;
    if (c === void 0 || a === "user-rejected" || a === "permission-rule") {
      if (t.roomArmRefusedByUser.add(s.key), t.roomArmRefusedByUser.add(Frr), s.slug !== void 0) t.roomStoppedByUser.add(s.slug)
    }
  }
}

function N(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "user" && Array.isArray(r.message.content) && r.message.content.some((s) => s.type === "tool_result" && s.tool_use_id === t)) return r
  }
  return
}

function S8r(e, t, n) {
  if (Qs(t.agentContext)) return;
  let r = Reflect.get(e, Vle);
  if (r !== !0 && r !== "auto" || sh(t)) return;
  let s = Nrr(e, t) ? "classifier" : !0;
  if (s === "classifier" && !Dat(se(t).mode, n)) return;
  t.setAppState((c) => g(c, t, (a) => a.artifactRoomJoinConsentSlugs?.[n] === s || a.artifactRoomJoinConsentSlugs?.[n] === !0 ? a : {
    ...a,
    artifactRoomJoinConsentSlugs: {
      ...a.artifactRoomJoinConsentSlugs,
      [n]: s
    }
  }))
}

function YY(e) {
  let t = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0,
    n = "text" in e && typeof e.text === "string" ? e.text : void 0,
    r = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return {
    threadId: t,
    replyText: n,
    cursor: r
  }
}

function _8o(e, t) {
  let n = t !== void 0 && hr.test(t) ? t : "(invalid)",
    r = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let s = Mt(e.slug);
    if (s !== void 0 && s.probeFailed !== !0) r = s.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${Hq(s)} (the artifact is shared)`
  }
  return {
    tid: n,
    audience: r
  }
}

function age(e) {
  let t = (n) => {
    let r = e[n];
    return typeof r === "string" ? r : void 0
  };
  return {
    assetId: t("asset_id"),
    outDir: t("out_dir"),
    after: t("after")
  }
}

function Lat(e, t = 1024) {
  return gWn(NS(e, {
    max: t
  }))
}

function ORt(e, t = 1024) {
  return `"${L4(Lat(e,t))}"`
}

function IRt(e) {
  return `"${L4(Xet(Lat(pKe(e))))}"`
}

function b8o(e, t) {
  let n = e.trimEnd().replace(/\.$/, "");
  if (n === "") {
    let r = t.replace(/^[\s;,\u2014-]+/, "");
    return r.charAt(0).toUpperCase() + r.slice(1)
  }
  return `${n}${t}`
}

function hIe(e) {
  if (e.behavior !== "ask") return -1;
  let t = e.decisionReason;
  switch (t?.type) {
    case "rule":
      return 4;
    case "safetyCheck":
      return t.classifierApprovable ? 1 : 3;
    case "mode":
      return 2;
    default:
      return 0
  }
}
var lg = "__artifactConsentAskCanReachUser",
  G4t = "__artifactWatchWouldArmReplies",
  jw = "__artifactPlanConsentAsk",
  OB = "__artifactUserOnlyConsentAsk",
  Hrr = "__artifactVerifyTargetPinned";

function MRt(e) {
  return typeof e.url === "string" ? fn(e.url) : te().verify.lastPublish ?? null
}
var Zne = "__artifactPublishTarget",
  Nat = "__artifactRoutineUnaskedFirstPublish",
  hkn = "__artifactPublishSourcePin",
  h = p(() => u({
    path: o(),
    kind: B(["file", "absent", "network"]),
    redirected: I(),
    sha256: o().optional(),
    root: u({
      spelling: o(),
      base: o(),
      redirected: I().optional()
    }).optional(),
    copies: o().optional(),
    minted: o().optional(),
    type: Be([o(), T(!1)]),
    shim: I().optional()
  }));

function w8r(e) {
  let t = Reflect.get(e, hkn);
  if (t === void 0) return;
  let n = h().safeParse(t);
  return n.success ? n.data : null
}
var U = p(() => h().omit({
  type: !0
}));

function k8r(e) {
  let t = Reflect.get(e, hkn);
  if (t === void 0) return "source_pin_missing";
  return typeof t === "object" && t !== null && Reflect.get(t, "type") === void 0 && U().safeParse(t).success ? "source_pin_stale_build" : "source_pin_unreadable"
}
var Vle = "__artifactRoomJoinDisclosed",
  u3e = "__artifactTypeCreatePin",
  f3e = "__artifactAssetUploadPin",
  Fat = "__artifactRoomSendTarget",
  f$ = "__artifactAssetTargetPin",
  gkn = "__artifactReadTargetPin",
  V4t = "__artifactDeletePin",
  K4t = "__artifactDeleteTarget",
  tA = "__artifactDisplayTarget",
  w = "__artifactEndpointBodyFile",
  f = "__artifactConsentPin",
  v8r = "__artifactSyncTargetPin";

function ux(e, t) {
  return {
    [f]: t === null ? null : {
      action: e,
      slug: t.slug
    }
  }
}
var y = [Zne, f3e, Fat, f$, gkn, V4t, f, v8r];

function ere(e, t) {
  return y.some((n) => n !== t && Reflect.get(e, n) !== void 0)
}

function DRt(e) {
  return y.some((t) => Reflect.get(e, t) !== void 0)
}

function ave(e, t, n) {
  let r = Reflect.get(e, f);
  return typeof r === "object" && r !== null && Reflect.get(r, "action") === t && Reflect.get(r, "slug") === n
}

function SQ(e, t, n) {
  return ere(e, f) || Reflect.get(e, f) !== void 0 && !ave(e, t, n)
}
var ykn = "__artifactDbReadTargetPin",
  _kn = "__artifactDbWriteSourcePin",
  O = "__artifactHandlersPin",
  G = "__artifactLiveDocStandIn",
  q4t = "__artifactAsk",
  L = [lg, G, jw, OB, G4t, ...y, Vle, u3e, Hrr, hkn, ykn, _kn, O, K4t, tA, w, Urr, q4t, Nat];

function S8o(e) {
  return typeof e === "object" && e !== null && L.some((t) => Reflect.get(e, t) !== void 0)
}

function lge(e, t, n, r, s = !1) {
  if (t.toolUseId !== void 0) te().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || Gg(t)))
}

function E8r(e, t, n) {
  return te().shareStatus.noticeReadSights[e].take(t, n)
}

function p3e(e, t, n, r) {
  return t.toolUseId === void 0 ? r : E8r(e, t.toolUseId, n) === !0
}

function w8o(e, t) {
  if (Qs(t.agentContext)) return !1;
  return (e[jw] ?? !1) && se(t).mode === "plan" && Gg(t)
}

function IB(e) {
  return vve({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession
  })
}

function LRt(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || wQ(IB(e).publishContext)
}

function u1e(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId)?.source;
  return t === "user_temporary" || t === "user_permanent"
}

function lve(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId);
  return t !== void 0 && t.decision !== "reject" && t.source !== "user_temporary" && t.source !== "user_permanent"
}

function P(e, t) {
  return Qne(e, t) && !sh(t)
}

function j(e, t) {
  return j4t(e, t) && !lve(t)
}

function $rr(e) {
  return LRt(e) && !Qs(e.agentContext) ? gui : void 0
}

function T8r(e) {
  return aJ(e) && !Vm(e)
}
export {
  h8r,
  a8o,
  B4t,
  g8r,
  l8o,
  Qne,
  d8o,
  Lrr,
  mkn,
  j4t,
  y8r,
  c8o,
  u8o,
  _8r,
  BK,
  jK,
  n2,
  W4t,
  f8o,
  Iat,
  Mat,
  p8o,
  m8o,
  z4t,
  Nrr,
  Dat,
  h8o,
  g8o,
  y8o,
  Frr,
  b8r,
  S8r,
  YY,
  _8o,
  age,
  Lat,
  ORt,
  IRt,
  b8o,
  hIe,
  lg,
  G4t,
  jw,
  OB,
  Hrr,
  MRt,
  Zne,
  Nat,
  hkn,
  w8r,
  k8r,
  Vle,
  u3e,
  f3e,
  Fat,
  f$,
  gkn,
  V4t,
  K4t,
  tA,
  v8r,
  ux,
  ere,
  DRt,
  ave,
  SQ,
  ykn,
  _kn,
  q4t,
  S8o,
  lge,
  E8r,
  p3e,
  w8o,
  IB,
  LRt,
  u1e,
  lve,
  $rr,
  T8r
};
