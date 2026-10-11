// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Bl
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Kr,
  Wc,
  pr,
  aBt
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  oc
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Ty,
  _ye
} from "B:/~BUN/root/chunk-3wnb3s8p.js";
import {
  Mut,
  upn
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Vcn,
  qcn
} from "B:/~BUN/root/chunk-9qtz41py.js";

function u(e, r) {
  let n = Kr().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) qcn(o)
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = (s) => {
      r.writeSdkMessages([s])
    }, n.set(r, o);
    Vcn(o)
  }
}

function RMt(e, r) {
  let n = Kr(),
    o = p(e),
    s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, upn(o ? Wc(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o)
}

function db() {
  return Kr().sdkHostedHandle
}

function san(e, r) {
  let n = Kr(),
    o = p(e),
    s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
  let i = o ? Wc(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  upn(i ?? null, r).catch(() => {})
}

function Vl() {
  return Kr().replHandle
}

function FWn(e, r) {
  let n = Kr();
  if (n.retiredHandles.add(e), n.replHandle === e) san(null, r);
  if (n.sdkHostedHandle === e) RMt(null, r)
}

function MTe(e, r) {
  let n = Kr(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = oc(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({
    permission_mode: s,
    ...r !== void 0 && {
      is_ultraplan_mode: r
    }
  })
}

function PIr() {
  let e = Kr();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) MTe(e.lastKnownPermissionMode)
}

function IIr(e, r, n) {
  let o = aBt(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  Kr().supervisedBridgeSession = o ? {
    bridgeSessionId: e,
    owner: n,
    storageV5: r,
    selfTitle: void 0
  } : null, upn(o ? Wc(e) : null, r).catch(() => {})
}

function AMt() {
  return Kr().supervisedBridgeSession?.bridgeSessionId
}

function OIr(e) {
  let r = Kr().supervisedBridgeSession;
  if (r === null || Vl() !== null || db() !== null) return;
  if (r.selfTitle = a(e), r.selfTitle !== void 0) Mut(r.selfTitle, r.storageV5).catch(d)
}

function a(e) {
  return typeof e === "string" && Ty(e) !== "" ? e : void 0
}

function l(e) {
  let r = u2o(),
    n = Kr(),
    o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = {
    host: e,
    credential: r
  };
  return n.peerIdentityKey = s, s
}

function u2o() {
  let {
    sameOwnerAccount: e
  } = import.meta.require("B:/~BUN/root/chunk-3vayk698.js"), r = m(), n = Kr(), o = n.walkCredentialKey;
  if (o !== null && e(o.owner, r)) return o;
  let s = {
    owner: r
  };
  return n.walkCredentialKey = s, s
}

function m() {
  let {
    sessionsApiBearerFingerprint: e
  } = import.meta.require("B:/~BUN/root/chunk-an75r2wp.js"), {
    getStoredOauthAccountInfo: r
  } = import.meta.require("B:/~BUN/root/chunk-3vayk698.js"), {
    env: n
  } = import.meta.require("B:/~BUN/root/chunk-tk3cwcan.js"), o = e();
  return {
    accountUuid: o ? `bearer:${o}` : void 0,
    organizationUuid: n.CLAUDE_CODE_ORGANIZATION_UUID || r()?.organizationUuid
  }
}
async function MIr({
  refresh: e,
  credentials: r
}) {
  let {
    isCrossSessionMessagingEnabled: n
  } = import.meta.require("B:/~BUN/root/chunk-3fbyy6v5.js");
  if (!n()) return;
  if (!(Vl() !== null || db() !== null || Kr().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: g
    } = import.meta.require("B:/~BUN/root/chunk-7g24s31w.js");
    if (!g()) return
  }
  let {
    primeSessionsApiBearer: s
  } = import.meta.require("B:/~BUN/root/chunk-an75r2wp.js"), i = s({
    refresh: e,
    credentials: r
  }).catch(() => {});
  if (e) {
    await i;
    return
  }
  let {
    withDeadline: c
  } = import.meta.require("B:/~BUN/root/chunk-bcqh7a5d.js");
  await c(i, S)
}
var S = 750;

function S3e() {
  let e = Vl() ?? db();
  if (e) return {
    key: l(e),
    bridgeSessionId: e.bridgeSessionId,
    selfTitle: e.selfTitle,
    live: Bl()
  };
  let r = Kr().supervisedBridgeSession;
  return r ? {
    key: l(r),
    bridgeSessionId: r.bridgeSessionId,
    selfTitle: r.selfTitle,
    live: !0
  } : null
}

function tlt(e) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({
    cross_session_inbound: o
  })
}

function DIr() {
  let e = Kr();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) tlt(e.lastKnownCrossSessionInbound)
}

function f(e) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle,
    o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({
    post_turn_summary: e
  })
}

function DTe(e, r) {
  if (e?.notifyMetadataChanged({
      post_turn_summary: r
    }), e?.onMetadataChanged) return;
  try {
    f(r)
  } catch (n) {
    d(n)
  }
}

function LIr() {
  Kr().lastKnownPostTurnSummary = null
}

function NIr() {
  let e = Kr().lastKnownPostTurnSummary;
  if (e) f(e)
}

function Kee(e) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({
    model: e
  })
}

function HIr() {
  let e = Kr();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Kee(e.lastKnownModel)
}

function FIr() {
  Kr().contextUsageMirror?.resend()
}

function $Wn(e, r) {
  let n = Kr(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = b(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  })
}

function $Ir() {
  let e = Kr();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) $Wn(e.lastKnownArtifacts, e.artifactsEgressSuppressed)
}

function ian() {
  let e = S3e();
  return e ? Wc(e.bridgeSessionId) : void 0
}

function xMt() {
  let e = ian();
  return e ? _ye(e) : void 0
}

function PMt() {
  let e = Vl();
  return e && !e.outboundOnly ? Wc(e.bridgeSessionId) : void 0
}

function UIr() {
  return S3e()?.selfTitle
}

function LTe(e, r) {
  let n = Vl() ?? db();
  if (n && pr(n.bridgeSessionId) === pr(e)) n.selfTitle = a(r)
}

function p(e) {
  return e !== null && Kr().retiredHandles.has(e) ? null : e
}
export {
  RMt,
  db,
  san,
  Vl,
  FWn,
  MTe,
  PIr,
  IIr,
  AMt,
  OIr,
  u2o,
  MIr,
  S3e,
  tlt,
  DIr,
  DTe,
  LIr,
  NIr,
  Kee,
  HIr,
  FIr,
  $Wn,
  $Ir,
  ian,
  xMt,
  PMt,
  UIr,
  LTe
};
