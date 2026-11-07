// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Du
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  _o,
  Jf,
  jn,
  bj
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Md
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  KS,
  XVe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Bsn,
  XIr
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  kAr,
  vAr
} from "B:/~BUN/root/chunk-teehnwdh.js";

function l(e, r) {
  let n = _o().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) vAr(o)
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = (s) => {
      r.writeSdkMessages([s])
    }, n.set(r, o);
    kAr(o)
  }
}

function nNn(e, r) {
  let n = _o(),
    o = p(e),
    s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, XIr(o ? Jf(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, l(s, o)
}

function rk() {
  return _o().sdkHostedHandle
}

function Xvr(e, r) {
  let n = _o(),
    o = p(e),
    s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, l(s, o);
  let i = o ? Jf(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  XIr(i ?? null, r).catch(() => {})
}

function Ad() {
  return _o().replHandle
}

function gmo(e, r) {
  let n = _o();
  if (n.retiredHandles.add(e), n.replHandle === e) Xvr(null, r);
  if (n.sdkHostedHandle === e) nNn(null, r)
}

function t7e(e, r) {
  let n = _o(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = Md(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({
    permission_mode: s,
    ...r !== void 0 && {
      is_ultraplan_mode: r
    }
  })
}

function yws() {
  let e = _o();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) t7e(e.lastKnownPermissionMode)
}

function _ws() {
  return _o().lastKnownPermissionMode
}

function bws(e, r, n) {
  let o = bj(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  _o().supervisedBridgeSession = o ? {
    bridgeSessionId: e,
    owner: n,
    storageV5: r,
    selfTitle: void 0
  } : null, XIr(o ? Jf(e) : null, r).catch(() => {})
}

function rNn() {
  return _o().supervisedBridgeSession?.bridgeSessionId
}

function Sws(e) {
  let r = _o().supervisedBridgeSession;
  if (r === null || Ad() !== null || rk() !== null) return;
  if (r.selfTitle = u(e), r.selfTitle !== void 0) Bsn(r.selfTitle, r.storageV5).catch(a)
}

function u(e) {
  return typeof e === "string" && KS(e) !== "" ? e : void 0
}

function d(e) {
  let r = Aca(),
    n = _o(),
    o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = {
    host: e,
    credential: r
  };
  return n.peerIdentityKey = s, s
}

function Aca() {
  let {
    sameOwnerAccount: e
  } = import.meta.require("B:/~BUN/root/chunk-zcjq31as.js"), r = m(), n = _o(), o = n.walkCredentialKey;
  if (o !== null && e(o.owner, r)) return o;
  let s = {
    owner: r
  };
  return n.walkCredentialKey = s, s
}

function m() {
  let {
    sessionsApiBearerFingerprint: e,
    isConsoleProfileSessionsCredential: r
  } = import.meta.require("B:/~BUN/root/chunk-xc64vz5b.js"), {
    getStoredOauthAccountInfo: n
  } = import.meta.require("B:/~BUN/root/chunk-zcjq31as.js"), {
    getWIFAccountInfo: o
  } = import.meta.require("B:/~BUN/root/chunk-1e09mbfr.js"), {
    env: s
  } = import.meta.require("B:/~BUN/root/chunk-c6w54kxt.js"), i = e();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: r() ? o()?.organizationUuid?.trim() || void 0 : s.CLAUDE_CODE_ORGANIZATION_UUID || n()?.organizationUuid
  }
}
async function wws({
  refresh: e,
  credentials: r
}) {
  let {
    isCrossSessionMessagingEnabled: n
  } = import.meta.require("B:/~BUN/root/chunk-tdxwex0x.js");
  if (!n()) return;
  if (!(Ad() !== null || rk() !== null || _o().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: g
    } = import.meta.require("B:/~BUN/root/chunk-2zzr6yqg.js");
    if (!g()) return
  }
  let {
    primeSessionsApiBearer: s
  } = import.meta.require("B:/~BUN/root/chunk-xc64vz5b.js"), i = s({
    refresh: e,
    credentials: r
  }).catch(() => {});
  if (e) {
    await i;
    return
  }
  let {
    withDeadline: c
  } = import.meta.require("B:/~BUN/root/chunk-ce9va9r2.js");
  await c(i, S)
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
  let r = _o().supervisedBridgeSession;
  return r ? {
    key: d(r),
    bridgeSessionId: r.bridgeSessionId,
    selfTitle: r.selfTitle,
    live: !0
  } : null
}

function gen(e) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({
    cross_session_inbound: o
  })
}

function kws() {
  let e = _o();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) gen(e.lastKnownCrossSessionInbound)
}

function f(e) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle,
    o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({
    post_turn_summary: e
  })
}

function n7e(e, r) {
  if (e?.notifyMetadataChanged({
      post_turn_summary: r
    }), e?.onMetadataChanged) return;
  try {
    f(r)
  } catch (n) {
    a(n)
  }
}

function vws() {
  _o().lastKnownPostTurnSummary = null
}

function Ews() {
  let e = _o().lastKnownPostTurnSummary;
  if (e) f(e)
}

function hCe(e) {
  let r = _o(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({
    model: e
  })
}

function Tws() {
  let e = _o();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) hCe(e.lastKnownModel)
}

function Cws() {
  _o().contextUsageMirror?.resend()
}

function ymo(e, r) {
  let n = _o(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  })
}

function Rws() {
  let e = _o();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) ymo(e.lastKnownArtifacts, e.artifactsEgressSuppressed)
}

function Jvr() {
  let e = uGe();
  return e ? Jf(e.bridgeSessionId) : void 0
}

function oNn() {
  let e = Jvr();
  return e ? XVe(e) : void 0
}

function sNn() {
  let e = Ad();
  return e && !e.outboundOnly ? Jf(e.bridgeSessionId) : void 0
}

function Aws() {
  return uGe()?.selfTitle
}

function r7e(e, r) {
  let n = Ad() ?? rk();
  if (n && jn(n.bridgeSessionId) === jn(e)) n.selfTitle = u(r)
}

function p(e) {
  return e !== null && _o().retiredHandles.has(e) ? null : e
}
export {
  nNn,
  rk,
  Xvr,
  Ad,
  gmo,
  t7e,
  yws,
  _ws,
  bws,
  rNn,
  Sws,
  Aca,
  wws,
  uGe,
  gen,
  kws,
  n7e,
  vws,
  Ews,
  hCe,
  Tws,
  Cws,
  ymo,
  Rws,
  Jvr,
  oNn,
  sNn,
  Aws,
  r7e
};
