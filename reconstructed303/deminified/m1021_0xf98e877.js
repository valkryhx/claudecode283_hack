// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { bI } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { pJ, vs, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a, or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { $s } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { bh, ar, Yt, sp, XC, Ple, Sb } from "B:/~BUN/root/chunk-qp0344nb.js";
import { BT, Kj, gh } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { $Hs, Z9e, Wv, Pme } from "B:/~BUN/root/chunk-66hg7026.js";
import { kt, Ime, Vj, qj, IH, Id, Mme, Yxo } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { _ue } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { SS } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { Goe } from "B:/~BUN/root/chunk-wx6mfrph.js";
import { ZPn } from "B:/~BUN/root/chunk-5bdzgv0s.js";
import { jg, Fh, le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { HY, His } from "B:/~BUN/root/chunk-93gzx7c6.js";
import { OPn } from "B:/~BUN/root/chunk-nhpmg5h2.js";
import { o, M, u, $e, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
function R(e, t) {
  return typeof e === "string" || typeof t === "string" ? e === t : bI(e, t);
}
var I = 64;
function k(e) {
  let t = e.url;
  return typeof t === "string" ? Yt(t) ?? void 0 : void 0;
}
async function zcr(e, t) {
  let typeCapabilityReads = ee().typeCapabilityReads,
    r = typeCapabilityReads.get(e);
  if (r !== void 0 && (!t.toolUseId || r.toolUseId === t.toolUseId)) return r.capabilities;
  let s = Date.now(),
    d = await Goe(e, {
      signal: t.abortController.signal,
      credentials: t.credentials
    }),
    c = d.err === null ? d.detail : null,
    capabilities = c === null || c.declaration === "malformed" ? null : c.capabilities,
    whole = capabilities !== null && (c?.declaration === void 0 || Object.keys(c.declaration).length === capabilities.length);
  if (IH(s)) return null;
  if (!typeCapabilityReads.has(e) && typeCapabilityReads.size >= I) {
    let _ = typeCapabilityReads.keys().next().value;
    if (_ !== void 0) typeCapabilityReads.delete(_);
  }
  return typeCapabilityReads.set(e, {
    toolUseId: t.toolUseId,
    capabilities: capabilities,
    whole: whole
  }), capabilities;
}
function YZr(e) {
  return ee().typeCapabilityReads.get(e)?.whole === !0;
}
function FCt(e) {
  return ee().typeCapabilityReads.get(e)?.capabilities?.includes("room") === !0;
}
function Gcr(e, t) {
  if (vs(t.agentContext)) return;
  if (FY(e, t)) t.setAppState(n => p(n, t, r => r.artifactWatchApproved ? r : {
    ...r,
    artifactWatchApproved: !0
  }));
}
var XZr = {
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
function JZr(e, t) {
  if (vs(e.agentContext)) return;
  e.setAppState(n => p(n, e, r => r.artifactReadPageDataApproved && (!t || r.artifactReadPageDataHumanApproved) ? r : {
    ...r,
    artifactReadPageDataApproved: !0,
    ...(t && {
      artifactReadPageDataHumanApproved: !0
    })
  }));
}
function FY(e, t) {
  return Reflect.get(e, Wp) === !0 && jg(t) && !CPn(t);
}
function QZr(e) {
  if (e.toolUseId === void 0) return;
  let t = ee(),
    {
      consentCheckScopes: consentCheckScopes
    } = t;
  if (consentCheckScopes.delete(e.toolUseId), consentCheckScopes.size >= x) {
    let r = consentCheckScopes.keys().next().value;
    if (r !== void 0) consentCheckScopes.delete(r), t.consentCheckScopesEvicted = !0;
  }
  consentCheckScopes.set(e.toolUseId, Z9e());
}
var x = 256;
function CPn(e) {
  if (e.toolUseId === void 0) return !1;
  let t = ee(),
    n = t.consentCheckScopes.get(e.toolUseId);
  return n === void 0 ? t.consentCheckScopesEvicted : n !== Z9e();
}
function $6t(e) {
  return jg(e) && !$s(le(e).mode);
}
function uFe(e, t) {
  return (e[Ah] ?? !1) && le(t).mode === "plan" || D(e);
}
function D(e) {
  return Reflect.get(e, jI) === !0;
}
function p(e, t, n) {
  if (CPn(t)) return e;
  let {
    accountEpoch: r
  } = ee();
  if ((e.artifactConsentEpoch ?? 0) === r) return n(e);
  return n({
    ...e,
    ...Object.fromEntries($Hs.map(item => [item, ZPn[item]])),
    artifactConsentEpoch: r
  });
}
function ZZr(e, t, n, slug) {
  return p(e, t, s => ({
    ...s,
    artifactPlanPublishConsentPaths: {
      ...s.artifactPlanPublishConsentPaths,
      [n]: {
        slug: slug
      }
    }
  }));
}
function m(e, t, n, r, s = () => !0) {
  return p(e, t, d => {
    if (n.every(item => N(d[item]?.[r], s(d[item]?.[r])))) return d;
    let c = {
      ...d
    };
    for (let l of n) c[l] = {
      ...c[l],
      [r]: s(d[l]?.[r])
    };
    return {
      ...d,
      ...c
    };
  });
}
function N(e, t) {
  return e === void 0 || e === !0 || e === "script" || t === !0 || t === "script" ? e === t : R(e, t);
}
function y(e, t) {
  return t ? [`${e}ConsentSlugs`, `${e}HumanConsentSlugs`] : [`${e}ConsentSlugs`];
}
function eeo(e, t, n) {
  if (vs(t.agentContext)) return;
  if (!FY(e, t) || Id(kt(n))) return;
  t.setAppState(r => m(r, t, y("artifactDbRead", uFe(e, t)), n));
}
function Vcr(e, t) {
  if (vs(t.agentContext)) return;
  if (!FY(e, t)) return;
  let n = uFe(e, t);
  t.setAppState(r => p(r, t, s => s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved) ? s : {
    ...s,
    artifactDbWriteApproved: !0,
    ...(n && {
      artifactDbWriteHumanApproved: !0
    })
  }));
}
function P1(e) {
  return e?.cowritten === !0 || e?.artifactKind === BT;
}
function D8(e) {
  return e?.typeLocked === !0 || e?.typeLock != null;
}
function X$(e, t = Id(e)) {
  return t && D8(e) && e?.artifactKind !== BT;
}
function HCt(e, t = Id(e)) {
  let n = Vj(e);
  return X$(e, t) && n !== void 0 && SS(n) === "first_party_type";
}
function teo(e) {
  return e !== void 0 && e.typeLock != null && HCt(e) && !Mme(e) && e.capabilitiesUnknown !== !0 && e.capsReadNotFound !== !0 && Ime(e) && Kj(e.capabilities);
}
function zKe() {
  let e = ee();
  if (e.inheritedTypeGrantLatch === null) e.inheritedTypeGrantLatch = or.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? E("tengu_swirling_squid", !1) === !0, i("tengu_artifact_inherited_type_grant", {
    on: e.inheritedTypeGrantLatch
  });
  return e.inheritedTypeGrantLatch;
}
function GKe(e, t, n, r = !1) {
  if (vs(t.agentContext)) return;
  let s = kt(n),
    d = Reflect.get(e, L0),
    c = S => typeof d === "object" && d !== null && Reflect.get(d, S) === !0,
    l = c("classifier") || le(t).mode === "auto" && !c("userOnly");
  if (!P(e, t) || c("once") || l || Id(s) && !P1(s) && !D8(s)) return;
  let A = F(e, t) || r && lAe(t),
    _ = r && !tue(t);
  t.setAppState(S => m(S, t, [...y("artifactAssetRead", A), ...(_ ? ["artifactOutsideOrgConsentSlugs"] : [])], n));
}
function neo(e, t) {
  if (t.length === 0 || vs(e.agentContext)) return;
  e.setAppState(n => t.reduce((acc, item) => m(acc, e, ["artifactOutsideOrgConsentSlugs"], item), n));
}
function reo(e, t, n) {
  if (vs(t.agentContext)) return;
  if (!P(e, t) || tue(t) || le(t).mode === "auto" && !Wv(k(e)) && !Pme(n) || Id(kt(n))) return;
  t.setAppState(r => m(r, t, ["artifactReadConsentSlugs"], n));
}
function $Ct(e, t, n, r) {
  if (vs(t.agentContext)) return;
  if (!FY(e, t) || le(t).mode === "auto") return;
  Yxo(n, r), t.setAppState(s => m(s, t, y("artifactAssetUpload", uFe(e, t)), n));
}
function RPn(e, t) {
  return Reflect.get(e, L7) === "auto" && !lAe(t);
}
function VKe(e, t) {
  return e === "auto" && !ee().roomStoppedByUser.has(t);
}
function T(e) {
  let queryTracking = e.queryTracking;
  return queryTracking === void 0 ? void 0 : `${queryTracking.chainId}:${queryTracking.depth}`;
}
function oeo(e, t, n) {
  let {
    roomArmAsked: roomArmAsked
  } = ee();
  if (n === void 0) roomArmAsked.delete(t);else roomArmAsked.set(t, {
    ...n,
    at: T(e)
  });
}
function seo(e, t) {
  for (let [n, r] of ee().roomArmAsked) {
    if (n === t) continue;
    if (e.keys.includes(r.key) || e.slug !== void 0 && r.slug === e.slug) return !0;
  }
  return !1;
}
function ieo(e) {
  if (e !== void 0) ee().roomArmAsked.delete(e);
}
var APn = "path:*";
function qcr(e) {
  let t = ee(),
    n = T(e);
  for (let [r, s] of t.roomArmAsked) {
    if (r === e.toolUseId) continue;
    let d = w(e.messages, r);
    if (d === void 0 && s.at !== void 0 && s.at === n) continue;
    t.roomArmAsked.delete(r);
    let c = d?.toolDenialKind;
    if (d === void 0 || c === "user-rejected" || c === "permission-rule") {
      if (t.roomArmRefusedByUser.add(s.key), t.roomArmRefusedByUser.add(APn), s.slug !== void 0) t.roomStoppedByUser.add(s.slug);
    }
  }
}
function w(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "user" && Array.isArray(r.message.content) && r.message.content.some(item => item.type === "tool_result" && item.tool_use_id === t)) return r;
  }
  return;
}
function Kcr(e, t, n) {
  if (vs(t.agentContext)) return;
  let r = Reflect.get(e, L7);
  if (r !== !0 && r !== "auto" || Fh(t)) return;
  let s = RPn(e, t) ? "classifier" : !0;
  if (s === "classifier" && !VKe(le(t).mode, n)) return;
  t.setAppState(d => p(d, t, c => c.artifactRoomJoinConsentSlugs?.[n] === s || c.artifactRoomJoinConsentSlugs?.[n] === !0 ? c : {
    ...c,
    artifactRoomJoinConsentSlugs: {
      ...c.artifactRoomJoinConsentSlugs,
      [n]: s
    }
  }));
}
function Rz(e) {
  let threadId = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0,
    replyText = "text" in e && typeof e.text === "string" ? e.text : void 0,
    cursor = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return {
    threadId: threadId,
    replyText: replyText,
    cursor: cursor
  };
}
function aeo(e, t) {
  let tid = t !== void 0 && ar.test(t) ? t : "(invalid)",
    audience = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let s = kt(e.slug);
    if (s !== void 0 && s.probeFailed !== !0) audience = s.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${qj(s)} (the artifact is shared)`;
  }
  return {
    tid: tid,
    audience: audience
  };
}
function Loe(e) {
  let t = n => {
    let r = e[n];
    return typeof r === "string" ? r : void 0;
  };
  return {
    assetId: t("asset_id"),
    outDir: t("out_dir"),
    after: t("after")
  };
}
function U6t(e, max = 1024) {
  return XC(sp(gh(e, {
    max: max
  })) ?? "").replace(Sb, " ").replace(Ple, " ");
}
function Sbe(e, t = 1024) {
  return `"${U6t(e, t).replace(/\\$/, "\\ ")}"`;
}
function leo(e, t) {
  let n = e.trimEnd().replace(/\.$/, "");
  if (n === "") {
    let r = t.replace(/^[\s;,\u2014-]+/, "");
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  return `${n}${t}`;
}
function wbe(e) {
  if (e.behavior !== "ask") return -1;
  let decisionReason = e.decisionReason;
  switch (decisionReason?.type) {
    case "rule":
      return 4;
    case "safetyCheck":
      return decisionReason.classifierApprovable ? 1 : 3;
    case "mode":
      return 2;
    default:
      return 0;
  }
}
var Wp = "__artifactConsentAskCanReachUser",
  UCt = "__artifactWatchWouldArmReplies",
  Ah = "__artifactPlanConsentAsk",
  jI = "__artifactUserOnlyConsentAsk",
  xPn = "__artifactVerifyTargetPinned";
function cst(e) {
  return typeof e.url === "string" ? Yt(e.url) : ee().verify.lastPublish ?? null;
}
var L8 = "__artifactPublishTarget",
  qKe = "__artifactRoutineUnaskedFirstPublish",
  B6t = "__artifactPublishSourcePin",
  h = f(() => u({
    path: o(),
    kind: U(["file", "absent", "network"]),
    redirected: M(),
    sha256: o().optional(),
    root: u({
      spelling: o(),
      base: o(),
      redirected: M().optional()
    }).optional(),
    copies: o().optional(),
    minted: o().optional(),
    type: $e([o(), C(!1)]),
    shim: M().optional()
  }));
function Ycr(e) {
  let t = Reflect.get(e, B6t);
  if (t === void 0) return;
  let n = h().safeParse(t);
  return n.success ? n.data : null;
}
var v = f(() => h().omit({
  type: !0
}));
function Xcr(e) {
  let t = Reflect.get(e, B6t);
  if (t === void 0) return "source_pin_missing";
  return typeof t === "object" && t !== null && Reflect.get(t, "type") === void 0 && v().safeParse(t).success ? "source_pin_stale_build" : "source_pin_unreadable";
}
var L7 = "__artifactRoomJoinDisclosed",
  pFe = "__artifactTypeCreatePin",
  fFe = "__artifactAssetUploadPin",
  KKe = "__artifactRoomSendTarget",
  L0 = "__artifactAssetTargetPin",
  j6t = "__artifactReadTargetPin",
  BCt = "__artifactDeletePin",
  jCt = "__artifactDeleteTarget",
  vE = "__artifactDisplayTarget",
  O = "__artifactEndpointBodyFile",
  g = "__artifactConsentPin",
  Jcr = "__artifactSyncTargetPin";
function nw(action, t) {
  return {
    [g]: t === null ? null : {
      action: action,
      slug: t.slug
    }
  };
}
var b = [L8, fFe, KKe, L0, j6t, BCt, g, Jcr];
function N8(e, t) {
  return b.some(item => item !== t && Reflect.get(e, item) !== void 0);
}
function ust(e) {
  return b.some(item => Reflect.get(e, item) !== void 0);
}
function N7(e, t, n) {
  let r = Reflect.get(e, g);
  return typeof r === "object" && r !== null && Reflect.get(r, "action") === t && Reflect.get(r, "slug") === n;
}
function XV(e, t, n) {
  return N8(e, g) || Reflect.get(e, g) !== void 0 && !N7(e, t, n);
}
var W6t = "__artifactDbReadTargetPin",
  z6t = "__artifactDbWriteSourcePin",
  G = "__artifactHandlersPin",
  L = "__artifactLiveDocStandIn",
  WCt = "__artifactAsk",
  j = [Wp, L, Ah, jI, UCt, ...b, L7, pFe, xPn, B6t, W6t, z6t, G, jCt, vE, O, OPn, WCt, qKe];
function deo(e) {
  return typeof e === "object" && e !== null && j.some(item => Reflect.get(e, item) !== void 0);
}
function F7(e, t, n, r, s = !1) {
  if (t.toolUseId !== void 0) ee().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || jg(t)));
}
function eue(e, t, n, r) {
  return t.toolUseId === void 0 ? r : ee().shareStatus.noticeReadSights[e].take(t.toolUseId, n) === !0;
}
function ceo(e, t) {
  if (vs(t.agentContext)) return !1;
  return (e[Ah] ?? !1) && le(t).mode === "plan" && jg(t);
}
function Az(e) {
  return _ue({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession
  });
}
function pst(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) || HY(Az(e).publishContext);
}
function lAe(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId)?.source;
  return t === "user_temporary" || t === "user_permanent";
}
function tue(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId);
  return t !== void 0 && t.decision !== "reject" && t.source !== "user_temporary" && t.source !== "user_permanent";
}
function P(e, t) {
  return FY(e, t) && !Fh(t);
}
function F(e, t) {
  return uFe(e, t) && !tue(t);
}
function PPn(e) {
  return pst(e) && !vs(e.agentContext) ? His : void 0;
}
function Qcr(e) {
  return pJ(e) && !bh(e);
}
export { zcr, YZr, FCt, Gcr, XZr, JZr, FY, QZr, CPn, $6t, uFe, ZZr, eeo, Vcr, P1, D8, X$, HCt, teo, zKe, GKe, neo, reo, $Ct, RPn, VKe, oeo, seo, ieo, APn, qcr, Kcr, Rz, aeo, Loe, U6t, Sbe, leo, wbe, Wp, UCt, Ah, jI, xPn, cst, L8, qKe, B6t, Ycr, Xcr, L7, pFe, fFe, KKe, L0, j6t, BCt, jCt, vE, Jcr, nw, N8, ust, N7, XV, W6t, z6t, WCt, deo, F7, eue, ceo, Az, pst, lAe, tue, PPn, Qcr };