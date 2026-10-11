// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Bl } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Kr, Wc, pr, aBt } from "B:/~BUN/root/chunk-1rjcv085.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { oc } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ty, _ye } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Mut, upn } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Vcn, qcn } from "B:/~BUN/root/chunk-9qtz41py.js";
function u(e, r) {
  let dropSenderWriterByHandle = Kr().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = dropSenderWriterByHandle.get(e);
    if (o) qcn(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = dropSenderWriterByHandle.get(r);
    if (!o) o = s => {
      r.writeSdkMessages([s]);
    }, dropSenderWriterByHandle.set(r, o);
    Vcn(o);
  }
}
function RMt(e, r) {
  let n = Kr(),
    o = p(e),
    sdkHostedHandle = n.sdkHostedHandle;
  n.sdkHostedHandle = o, upn(o ? Wc(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(sdkHostedHandle, o);
}
function db() {
  return Kr().sdkHostedHandle;
}
function san(e, r) {
  let n = Kr(),
    o = p(e),
    replHandle = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(replHandle, o);
  let i = o ? Wc(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  upn(i ?? null, r).catch(() => {});
}
function Vl() {
  return Kr().replHandle;
}
function FWn(e, r) {
  let n = Kr();
  if (n.retiredHandles.add(e), n.replHandle === e) san(null, r);
  if (n.sdkHostedHandle === e) RMt(null, r);
}
function MTe(e, is_ultraplan_mode) {
  let n = Kr(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let permission_mode = oc(e);
  if (n.lastReportedPermissionMode === permission_mode) return;
  n.lastReportedPermissionMode = permission_mode, o.reportMetadata({
    permission_mode: permission_mode,
    ...(is_ultraplan_mode !== void 0 && {
      is_ultraplan_mode: is_ultraplan_mode
    })
  });
}
function PIr() {
  let e = Kr();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) MTe(e.lastKnownPermissionMode);
}
function IIr(bridgeSessionId, storageV5, owner) {
  let o = aBt(bridgeSessionId);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  Kr().supervisedBridgeSession = o ? {
    bridgeSessionId: bridgeSessionId,
    owner: owner,
    storageV5: storageV5,
    selfTitle: void 0
  } : null, upn(o ? Wc(bridgeSessionId) : null, storageV5).catch(() => {});
}
function AMt() {
  return Kr().supervisedBridgeSession?.bridgeSessionId;
}
function OIr(e) {
  let supervisedBridgeSession = Kr().supervisedBridgeSession;
  if (supervisedBridgeSession === null || Vl() !== null || db() !== null) return;
  if (supervisedBridgeSession.selfTitle = a(e), supervisedBridgeSession.selfTitle !== void 0) Mut(supervisedBridgeSession.selfTitle, supervisedBridgeSession.storageV5).catch(d);
}
function a(e) {
  return typeof e === "string" && Ty(e) !== "" ? e : void 0;
}
function l(host) {
  let credential = u2o(),
    n = Kr(),
    peerIdentityKey = n.peerIdentityKey;
  if (peerIdentityKey !== null && peerIdentityKey.host === host && peerIdentityKey.credential === credential) return peerIdentityKey;
  let s = {
    host: host,
    credential: credential
  };
  return n.peerIdentityKey = s, s;
}
function u2o() {
  let {
      sameOwnerAccount: sameOwnerAccount
    } = import.meta.require("B:/~BUN/root/chunk-3vayk698.js"),
    owner_2 = m(),
    n = Kr(),
    walkCredentialKey = n.walkCredentialKey;
  if (walkCredentialKey !== null && sameOwnerAccount(walkCredentialKey.owner, owner_2)) return walkCredentialKey;
  let s = {
    owner: owner_2
  };
  return n.walkCredentialKey = s, s;
}
function m() {
  let {
      sessionsApiBearerFingerprint: sessionsApiBearerFingerprint
    } = import.meta.require("B:/~BUN/root/chunk-an75r2wp.js"),
    {
      getStoredOauthAccountInfo: getStoredOauthAccountInfo
    } = import.meta.require("B:/~BUN/root/chunk-3vayk698.js"),
    {
      env: env
    } = import.meta.require("B:/~BUN/root/chunk-tk3cwcan.js"),
    o = sessionsApiBearerFingerprint();
  return {
    accountUuid: o ? `bearer:${o}` : void 0,
    organizationUuid: env.CLAUDE_CODE_ORGANIZATION_UUID || getStoredOauthAccountInfo()?.organizationUuid
  };
}
async function MIr({
  refresh: refresh,
  credentials: credentials
}) {
  let {
    isCrossSessionMessagingEnabled: isCrossSessionMessagingEnabled
  } = import.meta.require("B:/~BUN/root/chunk-3fbyy6v5.js");
  if (!isCrossSessionMessagingEnabled()) return;
  if (!(Vl() !== null || db() !== null || Kr().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-7g24s31w.js");
    if (!hasCloudPeerAccess()) return;
  }
  let {
      primeSessionsApiBearer: primeSessionsApiBearer
    } = import.meta.require("B:/~BUN/root/chunk-an75r2wp.js"),
    i = primeSessionsApiBearer({
      refresh: refresh,
      credentials: credentials
    }).catch(() => {});
  if (refresh) {
    await i;
    return;
  }
  let {
    withDeadline: withDeadline
  } = import.meta.require("B:/~BUN/root/chunk-bcqh7a5d.js");
  await withDeadline(i, S);
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
  let supervisedBridgeSession_2 = Kr().supervisedBridgeSession;
  return supervisedBridgeSession_2 ? {
    key: l(supervisedBridgeSession_2),
    bridgeSessionId: supervisedBridgeSession_2.bridgeSessionId,
    selfTitle: supervisedBridgeSession_2.selfTitle,
    live: !0
  } : null;
}
function tlt(e) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let cross_session_inbound = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === cross_session_inbound) return;
  r.lastReportedCrossSessionInbound = cross_session_inbound, n.reportMetadata({
    cross_session_inbound: cross_session_inbound
  });
}
function DIr() {
  let e = Kr();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) tlt(e.lastKnownCrossSessionInbound);
}
function f(post_turn_summary) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle,
    remoteEgressSuppressed = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || remoteEgressSuppressed === null || remoteEgressSuppressed()) return;
  r.lastKnownPostTurnSummary = post_turn_summary, n.reportMetadata({
    post_turn_summary: post_turn_summary
  });
}
function DTe(e, post_turn_summary_2) {
  if (e?.notifyMetadataChanged({
    post_turn_summary: post_turn_summary_2
  }), e?.onMetadataChanged) return;
  try {
    f(post_turn_summary_2);
  } catch (error) {
    d(error);
  }
}
function LIr() {
  Kr().lastKnownPostTurnSummary = null;
}
function NIr() {
  let lastKnownPostTurnSummary = Kr().lastKnownPostTurnSummary;
  if (lastKnownPostTurnSummary) f(lastKnownPostTurnSummary);
}
function Kee(model) {
  let r = Kr(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = model, r.lastReportedModel === model) return;
  r.lastReportedModel = model, n.reportMetadata({
    model: model
  });
}
function HIr() {
  let e = Kr();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Kee(e.lastKnownModel);
}
function FIr() {
  Kr().contextUsageMirror?.resend();
}
function $Wn(e, r) {
  let n = Kr(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = b(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  });
}
function $Ir() {
  let e = Kr();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) $Wn(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function ian() {
  let e = S3e();
  return e ? Wc(e.bridgeSessionId) : void 0;
}
function xMt() {
  let e = ian();
  return e ? _ye(e) : void 0;
}
function PMt() {
  let e = Vl();
  return e && !e.outboundOnly ? Wc(e.bridgeSessionId) : void 0;
}
function UIr() {
  return S3e()?.selfTitle;
}
function LTe(e, r) {
  let n = Vl() ?? db();
  if (n && pr(n.bridgeSessionId) === pr(e)) n.selfTitle = a(r);
}
function p(e) {
  return e !== null && Kr().retiredHandles.has(e) ? null : e;
}
export { RMt, db, san, Vl, FWn, MTe, PIr, IIr, AMt, OIr, u2o, MIr, S3e, tlt, DIr, DTe, LIr, NIr, Kee, HIr, FIr, $Wn, $Ir, ian, xMt, PMt, UIr, LTe };