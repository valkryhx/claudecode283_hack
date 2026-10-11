// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { Cce, kI, vq, yMo, kq, Xo, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a, Nn } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Aa } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { pC, Bn, Bt, N1, dd, Mv, yJ, ch } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { AS, ww } from "B:/~BUN/root/chunk-j36yaq51.js";
import { RS, eHe, AF, fOr, Qee, mOr, ezn, jTe, tHe, mlt, gOr, wz, nHe, ld, ft, ale, ZL, YB, pI, hl, ete, vOr } from "B:/~BUN/root/chunk-faawr4jv.js";
import { zf, fy, b6e, Pm, me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { vL, Sm } from "B:/~BUN/root/chunk-r1ja2che.js";
import { HE, Sz, Gy, uI, V3, yv } from "B:/~BUN/root/chunk-7d9qjs8x.js";
import { j7 } from "B:/~BUN/root/chunk-at7axhcd.js";
import { wg, jao } from "B:/~BUN/root/chunk-7z8vew74.js";
import { yse } from "B:/~BUN/root/chunk-pv8vnm5m.js";
import { rYt } from "B:/~BUN/root/chunk-y19pnsxj.js";
import { Txn } from "B:/~BUN/root/chunk-5yefzev8.js";
import { iW, Uoo } from "B:/~BUN/root/chunk-zqd621xt.js";
import { hYt } from "B:/~BUN/root/chunk-whn8zvh7.js";
import { o, M, u, $e, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { Z0 } from "B:/~BUN/root/chunk-z1enakv9.js";
function L(e, n) {
  return typeof e === "string" || typeof n === "string" ? e === n : Z0(e, n);
}
var le = 64;
function fe(e) {
  let n = e.url;
  return typeof n === "string" ? Bt(n) ?? void 0 : void 0;
}
async function hoo(e, n) {
  let typeCapabilityReads = ee().typeCapabilityReads,
    s = typeCapabilityReads.get(e);
  if (s !== void 0 && (!n.toolUseId || s.toolUseId === n.toolUseId)) return s.capabilities;
  let r = Date.now(),
    l = await yse(e, {
      signal: n.abortController.signal,
      credentials: n.credentials
    }),
    capabilities = l.err === null ? l.detail.capabilities : null;
  if (pI(r)) return null;
  if (!typeCapabilityReads.has(e) && typeCapabilityReads.size >= le) {
    let g = typeCapabilityReads.keys().next().value;
    if (g !== void 0) typeCapabilityReads.delete(g);
  }
  return typeCapabilityReads.set(e, {
    toolUseId: n.toolUseId,
    capabilities: capabilities
  }), capabilities;
}
function Dvt(e) {
  return ee().typeCapabilityReads.get(e)?.capabilities?.includes("room") === !0;
}
function Lcr(e, n) {
  if (Xo(n.agentContext)) return;
  if (m4(e, n)) n.setAppState(t => P(t, n, s => s.artifactWatchApproved ? s : {
    ...s,
    artifactWatchApproved: !0
  }));
}
var yoo = {
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
function _oo(e, n) {
  if (Xo(e.agentContext)) return;
  e.setAppState(t => P(t, e, s => s.artifactReadPageDataApproved && (!n || s.artifactReadPageDataHumanApproved) ? s : {
    ...s,
    artifactReadPageDataApproved: !0,
    ...(n && {
      artifactReadPageDataHumanApproved: !0
    })
  }));
}
function m4(e, n) {
  return Reflect.get(e, tu) === !0 && zf(n) && !dAn(n);
}
function boo(e) {
  if (e.toolUseId === void 0) return;
  let n = ee(),
    {
      consentCheckScopes: consentCheckScopes
    } = n;
  if (consentCheckScopes.delete(e.toolUseId), consentCheckScopes.size >= pe) {
    let s = consentCheckScopes.keys().next().value;
    if (s !== void 0) consentCheckScopes.delete(s), n.consentCheckScopesEvicted = !0;
  }
  consentCheckScopes.set(e.toolUseId, nHe());
}
var pe = 256;
function dAn(e) {
  if (e.toolUseId === void 0) return !1;
  let n = ee(),
    t = n.consentCheckScopes.get(e.toolUseId);
  return t === void 0 ? n.consentCheckScopesEvicted : t !== nHe();
}
function z6t(e) {
  return zf(e) && !Aa(me(e).mode);
}
function Dze(e, n) {
  return (e[am] ?? !1) && me(n).mode === "plan" || ge(e);
}
function ge(e) {
  return Reflect.get(e, RA) === !0;
}
function P(e, n, t) {
  if (dAn(n)) return e;
  let {
    accountEpoch: s
  } = ee();
  if ((e.artifactConsentEpoch ?? 0) === s) return t(e);
  return t({
    ...e,
    ...Object.fromEntries(gOr.map(item => [item, rYt[item]])),
    artifactConsentEpoch: s
  });
}
function Soo(e, n, t, slug) {
  return P(e, n, r => ({
    ...r,
    artifactPlanPublishConsentPaths: {
      ...r.artifactPlanPublishConsentPaths,
      [t]: {
        slug: slug
      }
    }
  }));
}
function v(e, n, t, s, r = () => !0) {
  return P(e, n, l => {
    if (t.every(item => Ce(l[item]?.[s], r(l[item]?.[s])))) return l;
    let p = {
      ...l
    };
    for (let g of t) p[g] = {
      ...p[g],
      [s]: r(l[g]?.[s])
    };
    return {
      ...l,
      ...p
    };
  });
}
function Ce(e, n) {
  return e === void 0 || e === !0 || e === "script" || n === !0 || n === "script" ? e === n : L(e, n);
}
function W(e, n) {
  return n ? [`${e}ConsentSlugs`, `${e}HumanConsentSlugs`] : [`${e}ConsentSlugs`];
}
function woo(e, n, t) {
  if (Xo(n.agentContext)) return;
  if (!m4(e, n) || hl(ft(t))) return;
  n.setAppState(s => v(s, n, W("artifactDbRead", Dze(e, n)), t));
}
function Ncr(e, n) {
  if (Xo(n.agentContext)) return;
  if (!m4(e, n)) return;
  let t = Dze(e, n);
  n.setAppState(s => P(s, n, r => r.artifactDbWriteApproved && (!t || r.artifactDbWriteHumanApproved) ? r : {
    ...r,
    artifactDbWriteApproved: !0,
    ...(t && {
      artifactDbWriteHumanApproved: !0
    })
  }));
}
function zH(e) {
  return e?.cowritten === !0 || e?.artifactKind === ww;
}
function q5(e) {
  return e?.typeLocked === !0 || e?.typeLock != null;
}
function mL(e, n = hl(e)) {
  return n && q5(e) && e?.artifactKind !== ww;
}
function Lze(e, n = hl(e)) {
  let t = ZL(e);
  return mL(e, n) && t !== void 0 && wg(t) === "first_party_type";
}
function voo(e) {
  return e !== void 0 && e.typeLock != null && Lze(e) && !ete(e) && e.capabilitiesUnknown !== !0 && e.capsReadNotFound !== !0 && ale(e) && vL(e.capabilities);
}
function Nze() {
  let e = ee();
  if (e.inheritedTypeGrantLatch === null) e.inheritedTypeGrantLatch = Nn.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? x("tengu_swirling_squid", !1) === !0, i("tengu_artifact_inherited_type_grant", {
    on: e.inheritedTypeGrantLatch
  });
  return e.inheritedTypeGrantLatch;
}
function Hze(e, n, t, s = !1) {
  if (Xo(n.agentContext)) return;
  let r = ft(t),
    l = Reflect.get(e, yO),
    p = C => typeof l === "object" && l !== null && Reflect.get(l, C) === !0,
    g = p("classifier") || me(n).mode === "auto" && !p("userOnly");
  if (!J(e, n) || p("once") || g || hl(r) && !zH(r) && !q5(r)) return;
  let m = Re(e, n) || s && LOe(n),
    y = s && !NOe(n);
  n.setAppState(C => v(C, n, [...W("artifactAssetRead", m), ...(y ? ["artifactOutsideOrgConsentSlugs"] : [])], t));
}
function koo(e, n) {
  if (n.length === 0 || Xo(e.agentContext)) return;
  e.setAppState(t => n.reduce((acc, item) => v(acc, e, ["artifactOutsideOrgConsentSlugs"], item), t));
}
function Eoo(e, n, t) {
  if (Xo(n.agentContext)) return;
  if (!J(e, n) || NOe(n) || me(n).mode === "auto" && !Gy(fe(e)) && !V3(t) || hl(ft(t))) return;
  n.setAppState(s => v(s, n, ["artifactReadConsentSlugs"], t));
}
function Lvt(e, n, t, s) {
  if (Xo(n.agentContext)) return;
  if (!m4(e, n) || me(n).mode === "auto") return;
  vOr(t, s), n.setAppState(r => v(r, n, W("artifactAssetUpload", Dze(e, n)), t));
}
function uAn(e, n) {
  return Reflect.get(e, y7) === "auto" && !LOe(n);
}
function Fze(e, n) {
  return e === "auto" && !ee().roomStoppedByUser.has(n);
}
function Y(e) {
  let queryTracking = e.queryTracking;
  return queryTracking === void 0 ? void 0 : `${queryTracking.chainId}:${queryTracking.depth}`;
}
function Too(e, n, t) {
  let {
    roomArmAsked: roomArmAsked
  } = ee();
  if (t === void 0) roomArmAsked.delete(n);else roomArmAsked.set(n, {
    ...t,
    at: Y(e)
  });
}
function Coo(e, n) {
  for (let [t, s] of ee().roomArmAsked) {
    if (t === n) continue;
    if (e.keys.includes(s.key) || e.slug !== void 0 && s.slug === e.slug) return !0;
  }
  return !1;
}
function Roo(e) {
  if (e !== void 0) ee().roomArmAsked.delete(e);
}
var pAn = "path:*";
function Hcr(e) {
  let n = ee(),
    t = Y(e);
  for (let [s, r] of n.roomArmAsked) {
    if (s === e.toolUseId) continue;
    let l = Ae(e.messages, s);
    if (l === void 0 && r.at !== void 0 && r.at === t) continue;
    n.roomArmAsked.delete(s);
    let p = l?.toolDenialKind;
    if (l === void 0 || p === "user-rejected" || p === "permission-rule") {
      if (n.roomArmRefusedByUser.add(r.key), n.roomArmRefusedByUser.add(pAn), r.slug !== void 0) n.roomStoppedByUser.add(r.slug);
    }
  }
}
function Ae(e, n) {
  for (let t = e.length - 1; t >= 0; t--) {
    let s = e[t];
    if (s?.type === "user" && Array.isArray(s.message.content) && s.message.content.some(item => item.type === "tool_result" && item.tool_use_id === n)) return s;
  }
  return;
}
function Fcr(e, n, t) {
  if (Xo(n.agentContext)) return;
  let s = Reflect.get(e, y7);
  if (s !== !0 && s !== "auto" || Pm(n)) return;
  let r = uAn(e, n) ? "classifier" : !0;
  if (r === "classifier" && !Fze(me(n).mode, t)) return;
  n.setAppState(l => P(l, n, p => p.artifactRoomJoinConsentSlugs?.[t] === r || p.artifactRoomJoinConsentSlugs?.[t] === !0 ? p : {
    ...p,
    artifactRoomJoinConsentSlugs: {
      ...p.artifactRoomJoinConsentSlugs,
      [t]: r
    }
  }));
}
function RU(e) {
  let threadId = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0,
    replyText = "text" in e && typeof e.text === "string" ? e.text : void 0,
    cursor = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return {
    threadId: threadId,
    replyText: replyText,
    cursor: cursor
  };
}
function Aoo(e, n) {
  let tid = n !== void 0 && Bn.test(n) ? n : "(invalid)",
    audience = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let r = ft(e.slug);
    if (r !== void 0 && r.probeFailed !== !0) audience = r.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${YB(r)} (the artifact is shared)`;
  }
  return {
    tid: tid,
    audience: audience
  };
}
function h7(e) {
  let n = t => {
    let s = e[t];
    return typeof s === "string" ? s : void 0;
  };
  return {
    assetId: n("asset_id"),
    outDir: n("out_dir"),
    after: n("after")
  };
}
function G6t(e, max = 1024) {
  return Mv(dd(Sm(e, {
    max: max
  })) ?? "").replace(ch, " ").replace(yJ, " ");
}
function kpe(e, n = 1024) {
  return `"${G6t(e, n).replace(/\\$/, "\\ ")}"`;
}
function xoo(e, n) {
  let t = e.trimEnd().replace(/\.$/, "");
  if (t === "") {
    let s = n.replace(/^[\s;,\u2014-]+/, "");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return `${t}${n}`;
}
function Epe(e) {
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
var tu = "__artifactConsentAskCanReachUser",
  Nvt = "__artifactWatchWouldArmReplies",
  am = "__artifactPlanConsentAsk",
  RA = "__artifactUserOnlyConsentAsk",
  fAn = "__artifactVerifyTargetPinned";
function PZe(e) {
  return typeof e.url === "string" ? Bt(e.url) : ee().verify.lastPublish ?? null;
}
var K5 = "__artifactPublishTarget",
  V6t = "__artifactPublishSourcePin",
  V = f(() => u({
    path: o(),
    kind: z(["file", "absent", "network"]),
    redirected: M(),
    sha256: o().optional(),
    root: u({
      spelling: o(),
      base: o(),
      redirected: M().optional()
    }).optional(),
    copies: o().optional(),
    minted: o().optional(),
    type: $e([o(), A(!1)]),
    shim: M().optional()
  }));
function $cr(e) {
  let n = Reflect.get(e, V6t);
  if (n === void 0) return;
  let t = V().safeParse(n);
  return t.success ? t.data : null;
}
var he = f(() => V().omit({
  type: !0
}));
function Ucr(e) {
  let n = Reflect.get(e, V6t);
  if (n === void 0) return "source_pin_missing";
  return typeof n === "object" && n !== null && Reflect.get(n, "type") === void 0 && he().safeParse(n).success ? "source_pin_stale_build" : "source_pin_unreadable";
}
var y7 = "__artifactRoomJoinDisclosed",
  $ze = "__artifactTypeCreatePin",
  DOe = "__artifactAssetUploadPin",
  Uze = "__artifactRoomSendTarget",
  yO = "__artifactAssetTargetPin",
  q6t = "__artifactReadTargetPin",
  IZe = "__artifactDeletePin",
  OZe = "__artifactDeleteTarget",
  ok = "__artifactDisplayTarget",
  ye = "__artifactEndpointBodyFile",
  U = "__artifactConsentPin",
  Bcr = "__artifactSyncTargetPin";
function X_(action, n) {
  return {
    [U]: n === null ? null : {
      action: action,
      slug: n.slug
    }
  };
}
var H = [K5, DOe, Uze, yO, q6t, IZe, U, Bcr];
function g4(e, n) {
  return H.some(item => item !== n && Reflect.get(e, item) !== void 0);
}
function MZe(e) {
  return H.some(item => Reflect.get(e, item) !== void 0);
}
function Voe(e, n, t) {
  let s = Reflect.get(e, U);
  return typeof s === "object" && s !== null && Reflect.get(s, "action") === n && Reflect.get(s, "slug") === t;
}
function h4(e, n, t) {
  return g4(e, U) || Reflect.get(e, U) !== void 0 && !Voe(e, n, t);
}
var K6t = "__artifactDbReadTargetPin",
  Y6t = "__artifactDbWriteSourcePin",
  be = "__artifactHandlersPin",
  ke = "__artifactLiveDocStandIn",
  X6t = "__artifactAsk",
  Se = [tu, ke, am, RA, Nvt, ...H, y7, $ze, fAn, V6t, K6t, Y6t, be, OZe, ok, ye, hYt, X6t];
function Poo(e) {
  return typeof e === "object" && e !== null && Se.some(item => Reflect.get(e, item) !== void 0);
}
function Y5(e, n, t, s, r = !1) {
  if (n.toolUseId !== void 0) ee().shareStatus.noticeReadSights[e].note(n.toolUseId, t, s && (r || zf(n)));
}
function qoe(e, n, t, s) {
  return n.toolUseId === void 0 ? s : ee().shareStatus.noticeReadSights[e].take(n.toolUseId, t) === !0;
}
function Ioo(e, n) {
  if (Xo(n.agentContext)) return !1;
  return (e[am] ?? !1) && me(n).mode === "plan" && zf(n);
}
function oW(e) {
  return j7({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession
  });
}
function DZe(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) || iW(oW(e).publishContext);
}
function LOe(e) {
  if (e.toolUseId === void 0) return !1;
  let n = e.toolDecisions?.get(e.toolUseId)?.source;
  return n === "user_temporary" || n === "user_permanent";
}
function NOe(e) {
  if (e.toolUseId === void 0) return !1;
  let n = e.toolDecisions?.get(e.toolUseId);
  return n !== void 0 && n.decision !== "reject" && n.source !== "user_temporary" && n.source !== "user_permanent";
}
function J(e, n) {
  return m4(e, n) && !Pm(n);
}
function Re(e, n) {
  return Dze(e, n) && !NOe(n);
}
function mAn(e) {
  return DZe(e) && !Xo(e.agentContext) ? Uoo : void 0;
}
function jcr(e) {
  return kq(e) && !pC(e);
}
var we = "__artifactAsk",
  Te = ["Claude wants to upload a file to this artifact.", "Claude wants to copy files from another artifact into this one.", "Claude wants to edit this artifact's data."],
  Pe = 64,
  Ooo = 3;
function Ee(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
var Z = /"[^"]*"/g,
  X = "Let Claude read the comments on ";
function Moo(e) {
  return `${X}${e ? `"${e}"` : "this artifact"}?`;
}
function Ie(e) {
  if (!e.startsWith(X)) return;
  for (let n of e.matchAll(new RegExp(`${Z.source}|\\?(?=\\s)`, "g"))) if (n[0] === "?") return n.index + 1;
  return;
}
function N(e) {
  try {
    return e === void 0 ? void 0 : Txn(e);
  } catch {
    return;
  }
}
function J6t(e, n, t) {
  let s = ee().askCards.get(n);
  if (s === void 0 || s.reason !== t || N(e) !== s.input) return;
  return s.card;
}
function Doo(e, n = t => t) {
  let {
      request: request,
      script: script,
      text: text,
      documents: documents,
      files: files,
      file: file,
      source: source
    } = e,
    y = [];
  if (G(request) && typeof request.method === "string" && typeof request.path === "string") {
    let C = G(request.query) ? new URLSearchParams(Object.entries(request.query).flatMap(([_, d]) => {
        let S = typeof d === "string" ? d : b(d);
        return S === void 0 ? [] : [[_, S]];
      })).toString() : "",
      h = n(C === "" ? request.path : `${request.path}?${C}`);
    if (/^[A-Za-z]{1,16}$/.test(request.method) && /^[^\s\p{Cc}]+$/u.test(h)) {
      if (y.push(`${request.method.toUpperCase()} ${h}`), request.body !== void 0) y.push(`Request body \xB7 ${Q(ne(request.body))}`);
    }
  }
  for (let C of [script, text]) if (typeof C === "string" && C.trim() !== "") {
    let [h = "", ..._] = te(C.trim());
    y.push(`${Q(_.length + 1)} \xB7 ${h}`);
  }
  if (documents !== void 0) y.push(`${documents} ${I(documents, "document")}`);
  if (files !== void 0) {
    let C = files.count - files.names.length,
      h = files.names.map(item => `"${item}"`),
      _ = Ee(C > 0 ? [...h, `${C} more`] : h);
    y.push(`${files.count} ${I(files.count, "file")} \xB7 ${_}`);
  }
  if (source !== void 0) y.push(`source: ${source}`);
  if (file !== void 0) y.push(`file: ${file}`);
  return y;
}
function ne(e, n = new WeakSet()) {
  if (typeof e === "string") return te(e).length;
  if (typeof e !== "object" || e === null || n.has(e)) return 1;
  n.add(e);
  let t = Array.isArray(e) ? e : Object.values(e);
  return t.length === 0 ? 1 : t.reduce((acc, item) => acc + (typeof item === "string" ? 1 : ne(item, n)), 2);
}
function te(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/);
}
function Q(e) {
  return `${e} ${e === 1 ? "line" : "lines"}`;
}
function Oe(e, n, t, s = ee().askCardFacts.get(e)) {
  let r = ee(),
    l = r.askClassCards.get(e),
    p = s?.target,
    g = s?.values ?? [],
    m = s?.audience ?? "";
  if (r.askClassCards.delete(e), r.askCardFacts.delete(e), s === void 0 || s.generic === !0 || n.behavior !== "ask" || n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other" || n.decisionReason.reason.trim() === "") return;
  let reason = n.decisionReason.reason,
    C = reason.indexOf(`

`),
    h = C === -1 ? reason : reason.slice(0, C),
    _ = C === -1 ? [] : reason.slice(C + 2).split(`
`).filter(item => item !== ""),
    d = n.updatedInput ?? t,
    S = G(d) ? d[we] : void 0,
    card;
  if (S === void 0) {
    let w = Te.find(item => h.startsWith(item))?.length ?? Ie(h),
      question = w === void 0 ? h : h.slice(0, w),
      B = w === void 0 ? "" : h.slice(w).trim(),
      K = p?.title ?? "",
      j = K !== "" ? `"${K}"` : p?.url,
      lines = [],
      q = F => _.some(item => item.endsWith(F));
    if (j !== void 0 && !question.includes(j) && !q(j)) lines.push(j);
    let D = p?.url;
    if (s?.foreign === !0 && D !== void 0 && !question.includes(D) && !lines.includes(D) && !q(D)) lines.push(D);
    if (B !== "") lines.push(B);
    let ue = m === "" || h.replace(Z, "").includes(m);
    card = {
      question: question,
      lines: lines,
      values: [..._, ...(ue ? g : [...g, m])]
    };
  } else if (l !== void 0 && l.reason === h && N(S) === l.stamp) {
    let [question_2, ...lines_2] = l.parts,
      T = m === "" || l.saysPublic;
    card = question_2 === void 0 ? void 0 : {
      question: question_2,
      lines: lines_2,
      values: T ? g : [...g, m]
    };
  }
  let input = N(d);
  if (input !== void 0 && card !== void 0) _7(r.askCards, e, {
    input: input,
    card: card,
    reason: reason
  });
}
function Loo(e, n) {
  let checkPermissions = e.checkPermissions;
  return gAn(e, {
    async checkPermissions(s, r) {
      let l = await checkPermissions.call(this, s, r),
        toolUseId = r.toolUseId,
        g = l.behavior === "ask" ? l.updatedInput ?? s : null;
      if (toolUseId !== void 0 && G(g)) {
        let m;
        try {
          m = n(g, r);
        } catch {
          m = {
            values: [],
            generic: !0
          };
        }
        _7(ee().askCardFacts, toolUseId, m);
      }
      return l;
    }
  });
}
function Q6t(e) {
  let checkPermissions_2 = e.checkPermissions;
  return gAn(e, {
    async checkPermissions(t, s) {
      let toolUseId_2 = s.toolUseId;
      if (toolUseId_2 !== void 0) {
        let p = ee();
        p.askCards.delete(toolUseId_2), p.askClassCards.delete(toolUseId_2), p.askCardFacts.delete(toolUseId_2);
      }
      let l = await checkPermissions_2.call(this, t, s);
      if (toolUseId_2 !== void 0) Oe(toolUseId_2, l, t);
      return l;
    }
  });
}
function _7(e, n, t) {
  if (e.delete(n), e.set(n, t), e.size > Pe) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function gAn(e, n) {
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(n));
}
function De(e, n) {
  let t = ft(e);
  return n.toolUseId !== void 0 && t?.lastProbeToolUseId === n.toolUseId ? LZe(t) : {
    owned: void 0,
    public: void 0,
    outsideOrg: uI(t) || se(),
    invitedByOtherOrg: t?.external === !0
  };
}
function LZe(e) {
  let invitedByOtherOrg = e?.external === !0;
  if (e === void 0 || e.probeFailed === !0) return {
    owned: void 0,
    public: void 0,
    outsideOrg: uI(e) || se(),
    invitedByOtherOrg: invitedByOtherOrg
  };
  let t = e.mode === "unknown" ? void 0 : e.mode === "public",
    outsideOrg = uI(e);
  if (e.role === void 0) return {
    owned: t === !0 ? !1 : void 0,
    public: t,
    outsideOrg: outsideOrg,
    invitedByOtherOrg: invitedByOtherOrg
  };
  return {
    owned: e.role === "unknown" ? void 0 : e.role === "owner",
    public: t,
    outsideOrg: outsideOrg,
    invitedByOtherOrg: invitedByOtherOrg,
    ...((e.role === "owner" || e.role === "writer") && {
      canWrite: !0
    })
  };
}
function se() {
  return AS() ? void 0 : !1;
}
function nR(operation, n, t) {
  let s = De(n.slug, t);
  return {
    operation: operation,
    artifactId: n.slug,
    owned: s.owned,
    public: s.public,
    outsideOrg: s.outsideOrg,
    invitedByOtherOrg: s.invitedByOtherOrg,
    networkOff: NZe(n),
    turnStartedByHuman: kI(t.messages),
    ...(s.canWrite === !0 && {
      canWrite: !0
    })
  };
}
var Ue = new Set(["scheduled", "retry", "catch_up", "manual"]);
function oe(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== void 0 && Ue.has(e.fireReason);
}
function Hvt(e) {
  let {
    mode: mode,
    modeBeforeRewrite: modeBeforeRewrite
  } = me(e);
  if (Aa(mode) || modeBeforeRewrite !== void 0 && Aa(modeBeforeRewrite)) return !1;
  if (!oe(vq(e.messages).decider?.origin)) return !1;
  let s = ee();
  if (!s.routineRunTainted && !yMo(e.messages, (r, l) => Cce(l) || oe(r))) s.routineRunTainted = !0;
  return !s.routineRunTainted;
}
var nwe = !0;
function sW(e, n) {
  return e.ask && e.basis === "unattended" || nwe && me(n).mode === "plan";
}
var hAn = !0;
function gL(e) {
  return hAn && me(e).mode === "plan";
}
function Tpe(e, n, t, s, r = () => RS(nR("read", n, e))) {
  return !t && s && ld() && !gL(e) ? r() : null;
}
function re(e) {
  return HE() && Pm(e);
}
function X5(e, n, t) {
  let s = re(e) && !kI(e.messages);
  if (!s && !fy(e)) return null;
  let r = t.endsWith(".") ? t : `${t}.`;
  return {
    behavior: "deny",
    message: `${n}. This needs a yes to: ${r} ${s ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
    decisionReason: {
      type: "safetyCheck",
      reason: s ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
      classifierApprovable: !1
    }
  };
}
function Koe(e, n, t) {
  if (!Z6t(e, t)) return null;
  return {
    behavior: "deny",
    message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
      classifierApprovable: !1
    }
  };
}
function Z6t(e, n) {
  return Pm(e) && (HE() || n);
}
function NZe(e) {
  return jao(e?.env);
}
var ie = "this artifact",
  ve = "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked",
  xe = "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here",
  Ne = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";
function Bze(e, n, t, s) {
  if (We(n, t)) return !0;
  if (wz(b6e(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)) return !0;
  if (Pm(n) || NOe(n)) return !1;
  return Dze(e, n) || !Aa(me(n).mode) && !je(e) && m4(e, n);
}
function ae(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject";
}
function HZe(e, n = !1, t) {
  let s = ae(e),
    r = n ? !zf(e) || Pm(e) && !Aa(me(e).mode) : Pm(e);
  if (!n) return `this turned out to be a public artifact from outside your organization, and ${r ? xe : s ? Ne : ve}`;
  let l = t === void 0 ? "nothing was copied" : "nothing was published",
    p = t === void 0 ? "Retry the same action so that question is asked." : t.retryUrl !== void 0 ? `Retry publishing with url: ${b(t.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
  return r ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${l}. Don't retry it here.` : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${l}. ${p}`;
}
function eYt(e, n, t) {
  return yv(ft(n)) && (t || yAn(e, n));
}
function yAn(e, n) {
  return ezn(n) || wz(b6e(e), "artifactOutsideOrgConsentSlugs", n);
}
function je(e) {
  let n = Reflect.get(e, yO);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === !0;
}
var tYt = "This artifact was created outside your organization.";
function nYt(e, n, t) {
  let s = N1(n),
    r = s ? `"${s}"` : ie,
    l = s ? `"${s}"` : "This artifact",
    p = `Let Claude read it${t ? ` and ${t}` : ""}?`;
  switch (e) {
    case "someone_else":
      return `${l} was made by someone else. ${p}`;
    case "unknown":
      return `Claude couldn't check who made ${r}. ${p}`;
    case "cowritten":
      return `Other people can edit ${r}. ${p}`;
    case "from_type":
      return `${l} was made from someone else's artifact type. ${p}`;
  }
}
function Wcr(e) {
  return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}
function Fe(e, n, t) {
  let s = Le(e, n, t);
  if (e.remember !== "artifact") return s;
  let r = Sz() ? "task" : "conversation";
  return s.replace(/\?$/, ` for the rest of this ${r}?`);
}
function de(e) {
  return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.missing !== "public";
}
function Le(e, n, t) {
  let s = N1(n),
    r = s ? `"${s}"` : ie,
    l = s ? `"${s}"` : "This artifact";
  switch (e.class) {
    case "delete":
      return `Permanently delete ${s || t === void 0 ? r : t}?`;
    case "public_change":
      if (de(e)) return `${l} is public. Allow Claude to change it?`;
      if (e.basis === "unattended") return `Allow Claude to change ${r}?`;
      if (e.about === "someone_else") return e.missing === "owned" ? `Claude couldn't check who made ${r}. Allow Claude to change it?` : `${l} was made by someone else. Allow Claude to change it?`;
      return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;
    case "access_change":
      return `Allow Claude to change who can open or edit ${r}?`;
    case "standing_job":
      return `Allow Claude to keep replying to comments on ${r}?`;
    case "foreign_read":
      return nYt(e.missing === "owned" ? "unknown" : "someone_else", n);
  }
}
function Me(e) {
  return e.about === "outside_org" ? tYt : void 0;
}
function GH(e) {
  return HOe(e.input, e.context, [e]);
}
function HOe(e, n, t) {
  if (n.toolUseId !== void 0) ee().askClassPending.delete(n.toolUseId), ee().askClassCards.delete(n.toolUseId);
  let s = [];
  for (let d of t) if (!d.ruling.ask) {
    if (d.ruling.foreignRead) FZe(d.action, d.slug, d.ownerAccountId, d.ruling.attested);
  } else if (d.ruling.remember !== "artifact" || !(d.consentHeld ?? Qee(d.ruling, d.slug)) || d.heldYesDoesNotCover === !0) s.push({
    ...d,
    ruling: d.ruling
  });
  if (s.length === 0) return {
    behavior: "allow",
    updatedInput: {
      ...e,
      [tu]: !1
    }
  };
  let r = d => d.ruling.answeredBy === "person" || d.userOnly === !0;
  s.sort((itemA, itemB) => Number(r(itemB)) - Number(r(itemA)));
  let l = s.some(r),
    p = s.map(item => ({
      display: item.display,
      question: Fe(item.ruling, item.display.title, item.display.url),
      note: Me(item.ruling),
      linked: item.ruling.class === "foreign_read" || item.ruling.about === "someone_else" || item.ruling.missing === "owned",
      reach: item.note
    })),
    g = p.flatMap(item => item.reach === void 0 ? [item.question] : [item.question, item.reach]).join(" ");
  if (l ? Pm(n) : fy(n) || s.some(item => item.ruling.class === "foreign_read") && re(n)) return {
    behavior: "deny",
    message: `Nothing was done. This needs a yes to: ${p.map(item => item.question).join(" ")} No one can answer in this session.`,
    decisionReason: {
      type: "safetyCheck",
      reason: `Artifact ${s.map(item => item.ruling.class).join(", ")} ask has no one to answer it`,
      classifierApprovable: !1
    }
  };
  let reachable = zf(n),
    askedIn = nHe(),
    h = s.map(item => ({
      class: item.ruling.class,
      remember: item.ruling.remember,
      ...(item.ruling.endpoint && {
        endpoint: !0
      }),
      slug: item.slug,
      url: item.display.url,
      ...(item.display.title !== void 0 && {
        title: item.display.title
      }),
      reachable: reachable,
      askedIn: askedIn
    }));
  jTe(n, s.filter(item => "about" in item.ruling && item.ruling.about === "outside_org" && !item.ruling.endpoint).map(item => item.slug), reachable);
  let _ = h.length === 1 ? h[0] : h;
  if (n.toolUseId !== void 0) {
    if (_7(ee().askClassPending, n.toolUseId, h), l) _7(ee().askClassPersonAsked, n.toolUseId, !0);else ee().askClassPersonAsked.delete(n.toolUseId);
    if (Aa(me(n).mode)) ee().askClassNoClassifier.delete(n.toolUseId);else _7(ee().askClassNoClassifier, n.toolUseId, !0);
    let stamp = N(_);
    if (stamp !== void 0) {
      let parts = p.flatMap(({
        display: display,
        question: question_3,
        note: note,
        linked: linked,
        reach: reach
      }) => [question_3, ...(note === void 0 ? [] : [note]), ...(question_3.includes(display.url) || !linked && N1(display.title) ? [] : [display.url]), ...(reach === void 0 ? [] : [reach])]);
      _7(ee().askClassCards, n.toolUseId, {
        stamp: stamp,
        parts: parts,
        saysPublic: s.some(item => de(item.ruling)),
        reason: g
      });
    }
  }
  return {
    behavior: "ask",
    message: g,
    updatedInput: {
      ...e,
      [tu]: !1,
      [X6t]: _
    },
    ...(s.some(item => item.ruling.class === "delete") && {
      defaultToNo: !0
    }),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: g,
      classifierApprovable: !l
    }
  };
}
function zcr(e) {
  if (e.toolUseId === void 0) return;
  let n = ee(),
    askClassPending = n.askClassPending,
    s = askClassPending.get(e.toolUseId) ?? [];
  askClassPending.delete(e.toolUseId);
  let r = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let l = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId);
  let p = LOe(e),
    g = !Pm(e) && !NOe(e) && (p || r === !0 || l === !0 && !Aa(me(e).mode));
  if (s[0]?.reachable !== !0 || s[0].askedIn !== nHe() || !zf(e)) return;
  if (_7(n.askClassTaken, e.toolUseId, s), g) _7(n.askClassTakenByPerson, e.toolUseId, !0);
  if (Xo(e.agentContext)) return;
  for (let m of s) if (m.remember === "artifact" && (p || !m.endpoint)) {
    if (fOr(eHe(m), m.slug, g), !m.endpoint && tHe(e, m.slug) && (g || r !== !0 && !ae(e))) mOr(m.slug);
  }
}
function Gcr(e, n, t) {
  return Ge(e, n, t);
}
function Ge(e, n, t) {
  let s = e.toolUseId === void 0 ? void 0 : ee().askClassTaken.get(e.toolUseId);
  return s !== void 0 && s.some(item => eHe(item) === n && item.slug === t && item.remember === "artifact") && AF(n, t);
}
function We(e, n) {
  let t = ee();
  return e.toolUseId !== void 0 && t.askClassTakenByPerson.get(e.toolUseId) === !0 && (t.askClassTaken.get(e.toolUseId)?.some(r => eHe(r) === "foreign_read" && r.slug === n) ?? !1) || LOe(e) || mlt("foreign_read", n);
}
function QKo(e, slug_2, url) {
  if (e.toolUseId === void 0) return;
  let s = ee();
  _7(s.askClassPending, e.toolUseId, [{
    class: "foreign_read",
    remember: "this_call",
    slug: slug_2,
    url: url,
    reachable: zf(e),
    askedIn: nHe()
  }]), _7(s.askClassPersonAsked, e.toolUseId, !0);
}
function Vcr(e, n) {
  i("tengu_artifact_routine_write_unasked", {
    db_op: c(e),
    artifact_id: _e(n)
  });
}
function qcr(e) {
  ee().routineRepublishedPaths.add(e);
}
function Kcr(e) {
  i("tengu_artifact_routine_publish_unasked", {
    artifact_id: _e(e)
  });
}
function FZe(e, n, t, s) {
  i("tengu_artifact_foreign_read_unasked", {
    action: c(e),
    artifact_id: _e(n),
    ...(t !== void 0 && {
      owner_account_id: _e(t)
    }),
    ...(s && {
      attested: !0
    })
  });
}
export { hoo, Dvt, Lcr, yoo, _oo, m4, boo, dAn, z6t, Dze, Soo, woo, Ncr, zH, q5, mL, Lze, voo, Nze, Hze, koo, Eoo, Lvt, uAn, Fze, Too, Coo, Roo, pAn, Hcr, Fcr, RU, Aoo, h7, G6t, kpe, xoo, Epe, tu, Nvt, am, RA, fAn, PZe, K5, V6t, $cr, Ucr, y7, $ze, DOe, Uze, yO, q6t, IZe, OZe, ok, Bcr, X_, g4, MZe, Voe, h4, K6t, Y6t, X6t, Poo, Y5, qoe, Ioo, oW, DZe, LOe, NOe, mAn, jcr, Ooo, Moo, J6t, Doo, Loo, Q6t, _7, gAn, LZe, nR, Hvt, nwe, sW, hAn, gL, Tpe, X5, Koe, Z6t, NZe, Bze, HZe, eYt, yAn, tYt, nYt, Wcr, GH, HOe, zcr, Gcr, QKo, Vcr, qcr, Kcr, FZe };