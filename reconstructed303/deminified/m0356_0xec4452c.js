// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Sc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { oo, Tu, er, H4 } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Wl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { P_, zMe } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { W$t, j6n } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { BKn, jKn } from "B:/~BUN/root/chunk-7z3ndmqr.js";
function u(e, r) {
  let dropSenderWriterByHandle = oo().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = dropSenderWriterByHandle.get(e);
    if (o) jKn(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = dropSenderWriterByHandle.get(r);
    if (!o) o = s => {
      r.writeSdkMessages([s]);
    }, dropSenderWriterByHandle.set(r, o);
    BKn(o);
  }
}
function Wrn(e, r) {
  let n = oo(),
    o = p(e),
    sdkHostedHandle = n.sdkHostedHandle;
  n.sdkHostedHandle = o, j6n(o ? Tu(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(sdkHostedHandle, o);
}
function ev() {
  return oo().sdkHostedHandle;
}
function SGn(e, r) {
  let n = oo(),
    o = p(e),
    replHandle = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(replHandle, o);
  let i = o ? Tu(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  j6n(i ?? null, r).catch(() => {});
}
function Rd() {
  return oo().replHandle;
}
function cxr(e, r) {
  let n = oo();
  if (n.retiredHandles.add(e), n.replHandle === e) SGn(null, r);
  if (n.sdkHostedHandle === e) Wrn(null, r);
}
function qBe(e, is_ultraplan_mode) {
  let n = oo(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let permission_mode = Wl(e);
  if (n.lastReportedPermissionMode === permission_mode) return;
  n.lastReportedPermissionMode = permission_mode, o.reportMetadata({
    permission_mode: permission_mode,
    ...(is_ultraplan_mode !== void 0 && {
      is_ultraplan_mode: is_ultraplan_mode
    })
  });
}
function ATo() {
  let e = oo();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) qBe(e.lastKnownPermissionMode);
}
function xTo() {
  return oo().lastKnownPermissionMode;
}
function PTo(bridgeSessionId, storageV5, owner) {
  let o = H4(bridgeSessionId);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  oo().supervisedBridgeSession = o ? {
    bridgeSessionId: bridgeSessionId,
    owner: owner,
    storageV5: storageV5,
    selfTitle: void 0
  } : null, j6n(o ? Tu(bridgeSessionId) : null, storageV5).catch(() => {});
}
function zrn() {
  return oo().supervisedBridgeSession?.bridgeSessionId;
}
function OTo(e) {
  let supervisedBridgeSession = oo().supervisedBridgeSession;
  if (supervisedBridgeSession === null || Rd() !== null || ev() !== null) return;
  if (supervisedBridgeSession.selfTitle = a(e), supervisedBridgeSession.selfTitle !== void 0) W$t(supervisedBridgeSession.selfTitle, supervisedBridgeSession.storageV5).catch(l);
}
function a(e) {
  return typeof e === "string" && P_(e) !== "" ? e : void 0;
}
function d(host) {
  let credential = TJs(),
    n = oo(),
    peerIdentityKey = n.peerIdentityKey;
  if (peerIdentityKey !== null && peerIdentityKey.host === host && peerIdentityKey.credential === credential) return peerIdentityKey;
  let s = {
    host: host,
    credential: credential
  };
  return n.peerIdentityKey = s, s;
}
function TJs() {
  let {
      sameOwnerAccount: sameOwnerAccount
    } = import.meta.require("B:/~BUN/root/chunk-nnhd4yzs.js"),
    owner_2 = m(),
    n = oo(),
    walkCredentialKey = n.walkCredentialKey;
  if (walkCredentialKey !== null && sameOwnerAccount(walkCredentialKey.owner, owner_2)) return walkCredentialKey;
  let s = {
    owner: owner_2
  };
  return n.walkCredentialKey = s, s;
}
function m() {
  let {
      sessionsApiBearerFingerprint: sessionsApiBearerFingerprint,
      isConsoleProfileSessionsCredential: isConsoleProfileSessionsCredential
    } = import.meta.require("B:/~BUN/root/chunk-268y702m.js"),
    {
      getStoredOauthAccountInfo: getStoredOauthAccountInfo
    } = import.meta.require("B:/~BUN/root/chunk-nnhd4yzs.js"),
    {
      getWIFAccountInfo: getWIFAccountInfo
    } = import.meta.require("B:/~BUN/root/chunk-1j2s7ajq.js"),
    {
      env: env
    } = import.meta.require("B:/~BUN/root/chunk-qfkntjr5.js"),
    i = sessionsApiBearerFingerprint();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: isConsoleProfileSessionsCredential() ? getWIFAccountInfo()?.organizationUuid?.trim() || void 0 : env.CLAUDE_CODE_ORGANIZATION_UUID || getStoredOauthAccountInfo()?.organizationUuid
  };
}
async function ITo({
  refresh: refresh,
  credentials: credentials
}) {
  let {
    isCrossSessionMessagingEnabled: isCrossSessionMessagingEnabled
  } = import.meta.require("B:/~BUN/root/chunk-e0qgtmxs.js");
  if (!isCrossSessionMessagingEnabled()) return;
  if (!(Rd() !== null || ev() !== null || oo().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-ckxj8mfp.js");
    if (!hasCloudPeerAccess()) return;
  }
  let {
      primeSessionsApiBearer: primeSessionsApiBearer
    } = import.meta.require("B:/~BUN/root/chunk-268y702m.js"),
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
  } = import.meta.require("B:/~BUN/root/chunk-k3t3758w.js");
  await withDeadline(i, S);
}
var S = 750;
function rft() {
  let e = Rd() ?? ev();
  if (e) return {
    key: d(e),
    bridgeSessionId: e.bridgeSessionId,
    selfTitle: e.selfTitle,
    live: Sc()
  };
  let supervisedBridgeSession_2 = oo().supervisedBridgeSession;
  return supervisedBridgeSession_2 ? {
    key: d(supervisedBridgeSession_2),
    bridgeSessionId: supervisedBridgeSession_2.bridgeSessionId,
    selfTitle: supervisedBridgeSession_2.selfTitle,
    live: !0
  } : null;
}
function sLt(e) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let cross_session_inbound = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === cross_session_inbound) return;
  r.lastReportedCrossSessionInbound = cross_session_inbound, n.reportMetadata({
    cross_session_inbound: cross_session_inbound
  });
}
function MTo() {
  let e = oo();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) sLt(e.lastKnownCrossSessionInbound);
}
function f(post_turn_summary) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle,
    remoteEgressSuppressed = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || remoteEgressSuppressed === null || remoteEgressSuppressed()) return;
  r.lastKnownPostTurnSummary = post_turn_summary, n.reportMetadata({
    post_turn_summary: post_turn_summary
  });
}
function KBe(e, post_turn_summary_2, n) {
  let o = {
    post_turn_summary: post_turn_summary_2
  };
  if (n) e?.notifyMetadataChanged(o, n);else e?.notifyMetadataChanged(o);
  if (e?.onMetadataChanged) return;
  try {
    f(post_turn_summary_2);
  } catch (error) {
    l(error);
  }
}
function DTo() {
  oo().lastKnownPostTurnSummary = null;
}
function LTo() {
  let lastKnownPostTurnSummary = oo().lastKnownPostTurnSummary;
  if (lastKnownPostTurnSummary) f(lastKnownPostTurnSummary);
}
function Xfe(model) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = model, r.lastReportedModel === model) return;
  r.lastReportedModel = model, n.reportMetadata({
    model: model
  });
}
function NTo() {
  let e = oo();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Xfe(e.lastKnownModel);
}
function FTo() {
  oo().contextUsageMirror?.resend();
}
function uxr(e, r) {
  let n = oo(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  });
}
function HTo() {
  let e = oo();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) uxr(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function wGn() {
  let e = rft();
  return e ? Tu(e.bridgeSessionId) : void 0;
}
function Grn() {
  let e = wGn();
  return e ? zMe(e) : void 0;
}
function Vrn() {
  let e = Rd();
  return e && !e.outboundOnly ? Tu(e.bridgeSessionId) : void 0;
}
function $To() {
  return rft()?.selfTitle;
}
function YBe(e, r) {
  let n = Rd() ?? ev();
  if (n && er(n.bridgeSessionId) === er(e)) n.selfTitle = a(r);
}
function p(e) {
  return e !== null && oo().retiredHandles.has(e) ? null : e;
}
export { Wrn, ev, SGn, Rd, cxr, qBe, ATo, xTo, PTo, zrn, OTo, TJs, ITo, rft, sLt, MTo, KBe, DTo, LTo, Xfe, NTo, FTo, uxr, HTo, wGn, Grn, Vrn, $To, YBe };