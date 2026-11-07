// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Du } from "B:/~BUN/root/chunk-game8aqv.js";
import { _o, Jf, jn, bj } from "B:/~BUN/root/chunk-rr294jrm.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Md } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { KS, XVe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Bsn, XIr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { kAr, vAr } from "B:/~BUN/root/chunk-teehnwdh.js";
function l(e, r) {
  let dropSenderWriterByHandle = _o().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = dropSenderWriterByHandle.get(e);
    if (o) vAr(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = dropSenderWriterByHandle.get(r);
    if (!o) o = s => {
      r.writeSdkMessages([s]);
    }, dropSenderWriterByHandle.set(r, o);
    kAr(o);
  }
}
function nNn(e, r) {
  let n = _o(),
    o = p(e),
    sdkHostedHandle = n.sdkHostedHandle;
  n.sdkHostedHandle = o, XIr(o ? Jf(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, l(sdkHostedHandle, o);
}
function rk() {
  return _o().sdkHostedHandle;
}
function Xvr(e, r) {
  let n = _o(),
    o = p(e),
    replHandle = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, l(replHandle, o);
  let i = o ? Jf(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  XIr(i ?? null, r).catch(() => {});
}
function Ad() {
  return _o().replHandle;
}
function gmo(e, r) {
  let n = _o();
  if (n.retiredHandles.add(e), n.replHandle === e) Xvr(null, r);
  if (n.sdkHostedHandle === e) nNn(null, r);
}
function t7e(e, is_ultraplan_mode) {
  let n = _o(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let permission_mode = Md(e);
  if (n.lastReportedPermissionMode === permission_mode) return;
  n.lastReportedPermissionMode = permission_mode, o.reportMetadata({
    permission_mode: permission_mode,
    ...(is_ultraplan_mode !== void 0 && {
      is_ultraplan_mode: is_ultraplan_mode
    })
  });
}
function yws() {
  let e = _o();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) t7e(e.lastKnownPermissionMode);
}
function _ws() {
  return _o().lastKnownPermissionMode;
}
function bws(bridgeSessionId, storageV5, owner) {
  let o = bj(bridgeSessionId);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  _o().supervisedBridgeSession = o ? {
    bridgeSessionId: bridgeSessionId,
    owner: owner,
    storageV5: storageV5,
    selfTitle: void 0
  } : null, XIr(o ? Jf(bridgeSessionId) : null, storageV5).catch(() => {});
}
function rNn() {
  return _o().supervisedBridgeSession?.bridgeSessionId;
}
function Sws(e) {
  let supervisedBridgeSession = _o().supervisedBridgeSession;
  if (supervisedBridgeSession === null || Ad() !== null || rk() !== null) return;
  if (supervisedBridgeSession.selfTitle = u(e), supervisedBridgeSession.selfTitle !== void 0) Bsn(supervisedBridgeSession.selfTitle, supervisedBridgeSession.storageV5).catch(a);
}
function u(e) {
  return typeof e === "string" && KS(e) !== "" ? e : void 0;
}
function d(host) {
  let credential = Aca(),
    n = _o(),
    peerIdentityKey = n.peerIdentityKey;
  if (peerIdentityKey !== null && peerIdentityKey.host === host && peerIdentityKey.credential === credential) return peerIdentityKey;
  let s = {
    host: host,
    credential: credential
  };
  return n.peerIdentityKey = s, s;
}
function Aca() {
  let {
      sameOwnerAccount: sameOwnerAccount
    } = import.meta.require("B:/~BUN/root/chunk-zcjq31as.js"),
    owner_2 = m(),
    n = _o(),
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
    } = import.meta.require("B:/~BUN/root/chunk-xc64vz5b.js"),
    {
      getStoredOauthAccountInfo: getStoredOauthAccountInfo
    } = import.meta.require("B:/~BUN/root/chunk-zcjq31as.js"),
    {
      getWIFAccountInfo: getWIFAccountInfo
    } = import.meta.require("B:/~BUN/root/chunk-1e09mbfr.js"),
    {
      env: env
    } = import.meta.require("B:/~BUN/root/chunk-c6w54kxt.js"),
    i = sessionsApiBearerFingerprint();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: isConsoleProfileSessionsCredential() ? getWIFAccountInfo()?.organizationUuid?.trim() || void 0 : env.CLAUDE_CODE_ORGANIZATION_UUID || getStoredOauthAccountInfo()?.organizationUuid
  };
}
async function wws({
  refresh: refresh,
  credentials: credentials
}) {
  let {
    isCrossSessionMessagingEnabled: isCrossSessionMessagingEnabled
  } = import.meta.require("B:/~BUN/root/chunk-tdxwex0x.js");
  if (!isCrossSessionMessagingEnabled()) return;
  if (!(Ad() !== null || rk() !== null || _o().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: hasCloudPeerAccess
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!hasCloudPeerAccess()) return;
  }
  let {
      primeSessionsApiBearer: primeSessionsApiBearer
    } = import.meta.require("B:/~BUN/root/chunk-xc64vz5b.js"),
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
  } = import.meta.require("B:/~BUN/root/chunk-ce9va9r2.js");
  await withDeadline(i, S);
}
var S = 750;
function uGe() {
  let e = Ad() ?? rk();
  if (e) return {
    key: d(e),
    bridgeSessionId: e.bridgeSessionId,
    selfTitle: e.selfTitle,
    live: Du()
  };
  let supervisedBridgeSession_2 = _o().supervisedBridgeSession;
  return supervisedBridgeSession_2 ? {
    key: d(supervisedBridgeSession_2),
    bridgeSessionId: supervisedBridgeSession_2.bridgeSessionId,
    selfTitle: supervisedBridgeSession_2.selfTitle,
    live: !0
  } : null;
}
function gen(e) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let cross_session_inbound = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === cross_session_inbound) return;
  r.lastReportedCrossSessionInbound = cross_session_inbound, n.reportMetadata({
    cross_session_inbound: cross_session_inbound
  });
}
function kws() {
  let e = _o();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) gen(e.lastKnownCrossSessionInbound);
}
function f(post_turn_summary) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle,
    remoteEgressSuppressed = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || remoteEgressSuppressed === null || remoteEgressSuppressed()) return;
  r.lastKnownPostTurnSummary = post_turn_summary, n.reportMetadata({
    post_turn_summary: post_turn_summary
  });
}
function n7e(e, post_turn_summary_2) {
  if (e?.notifyMetadataChanged({
    post_turn_summary: post_turn_summary_2
  }), e?.onMetadataChanged) return;
  try {
    f(post_turn_summary_2);
  } catch (error) {
    a(error);
  }
}
function vws() {
  _o().lastKnownPostTurnSummary = null;
}
function Ews() {
  let lastKnownPostTurnSummary = _o().lastKnownPostTurnSummary;
  if (lastKnownPostTurnSummary) f(lastKnownPostTurnSummary);
}
function hCe(model) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = model, r.lastReportedModel === model) return;
  r.lastReportedModel = model, n.reportMetadata({
    model: model
  });
}
function Tws() {
  let e = _o();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) hCe(e.lastKnownModel);
}
function Cws() {
  _o().contextUsageMirror?.resend();
}
function ymo(e, r) {
  let n = _o(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  });
}
function Rws() {
  let e = _o();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) ymo(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}
function Jvr() {
  let e = uGe();
  return e ? Jf(e.bridgeSessionId) : void 0;
}
function oNn() {
  let e = Jvr();
  return e ? XVe(e) : void 0;
}
function sNn() {
  let e = Ad();
  return e && !e.outboundOnly ? Jf(e.bridgeSessionId) : void 0;
}
function Aws() {
  return uGe()?.selfTitle;
}
function r7e(e, r) {
  let n = Ad() ?? rk();
  if (n && jn(n.bridgeSessionId) === jn(e)) n.selfTitle = u(r);
}
function p(e) {
  return e !== null && _o().retiredHandles.has(e) ? null : e;
}
export { nNn, rk, Xvr, Ad, gmo, t7e, yws, _ws, bws, rNn, Sws, Aca, wws, uGe, gen, kws, n7e, vws, Ews, hCe, Tws, Cws, ymo, Rws, Jvr, oNn, sNn, Aws, r7e };