// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Sc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  oo,
  Tu,
  er,
  H4
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Wl
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  P_,
  zMe
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  W$t,
  j6n
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  BKn,
  jKn
} from "B:/~BUN/root/chunk-7z3ndmqr.js";

function u(e, r) {
  let n = oo().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) jKn(o)
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = (s) => {
      r.writeSdkMessages([s])
    }, n.set(r, o);
    BKn(o)
  }
}

function Wrn(e, r) {
  let n = oo(),
    o = p(e),
    s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, j6n(o ? Tu(o.bridgeSessionId) : null, r).catch(() => {}), n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o)
}

function ev() {
  return oo().sdkHostedHandle
}

function SGn(e, r) {
  let n = oo(),
    o = p(e),
    s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, n.lastKnownEffortRequestId = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, u(s, o);
  let i = o ? Tu(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
  else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  j6n(i ?? null, r).catch(() => {})
}

function Rd() {
  return oo().replHandle
}

function cxr(e, r) {
  let n = oo();
  if (n.retiredHandles.add(e), n.replHandle === e) SGn(null, r);
  if (n.sdkHostedHandle === e) Wrn(null, r)
}

function qBe(e, r) {
  let n = oo(),
    o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = Wl(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({
    permission_mode: s,
    ...r !== void 0 && {
      is_ultraplan_mode: r
    }
  })
}

function ATo() {
  let e = oo();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) qBe(e.lastKnownPermissionMode)
}

function xTo() {
  return oo().lastKnownPermissionMode
}

function PTo(e, r, n) {
  let o = H4(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  oo().supervisedBridgeSession = o ? {
    bridgeSessionId: e,
    owner: n,
    storageV5: r,
    selfTitle: void 0
  } : null, j6n(o ? Tu(e) : null, r).catch(() => {})
}

function zrn() {
  return oo().supervisedBridgeSession?.bridgeSessionId
}

function OTo(e) {
  let r = oo().supervisedBridgeSession;
  if (r === null || Rd() !== null || ev() !== null) return;
  if (r.selfTitle = a(e), r.selfTitle !== void 0) W$t(r.selfTitle, r.storageV5).catch(l)
}

function a(e) {
  return typeof e === "string" && P_(e) !== "" ? e : void 0
}

function d(e) {
  let r = TJs(),
    n = oo(),
    o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = {
    host: e,
    credential: r
  };
  return n.peerIdentityKey = s, s
}

function TJs() {
  let {
    sameOwnerAccount: e
  } = import.meta.require("B:/~BUN/root/chunk-nnhd4yzs.js"), r = m(), n = oo(), o = n.walkCredentialKey;
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
  } = import.meta.require("B:/~BUN/root/chunk-268y702m.js"), {
    getStoredOauthAccountInfo: n
  } = import.meta.require("B:/~BUN/root/chunk-nnhd4yzs.js"), {
    getWIFAccountInfo: o
  } = import.meta.require("B:/~BUN/root/chunk-1j2s7ajq.js"), {
    env: s
  } = import.meta.require("B:/~BUN/root/chunk-qfkntjr5.js"), i = e();
  return {
    accountUuid: i ? `bearer:${i}` : void 0,
    organizationUuid: r() ? o()?.organizationUuid?.trim() || void 0 : s.CLAUDE_CODE_ORGANIZATION_UUID || n()?.organizationUuid
  }
}
async function ITo({
  refresh: e,
  credentials: r
}) {
  let {
    isCrossSessionMessagingEnabled: n
  } = import.meta.require("B:/~BUN/root/chunk-e0qgtmxs.js");
  if (!n()) return;
  if (!(Rd() !== null || ev() !== null || oo().supervisedBridgeSession !== null)) {
    let {
      hasCloudPeerAccess: g
    } = import.meta.require("B:/~BUN/root/chunk-ckxj8mfp.js");
    if (!g()) return
  }
  let {
    primeSessionsApiBearer: s
  } = import.meta.require("B:/~BUN/root/chunk-268y702m.js"), i = s({
    refresh: e,
    credentials: r
  }).catch(() => {});
  if (e) {
    await i;
    return
  }
  let {
    withDeadline: c
  } = import.meta.require("B:/~BUN/root/chunk-k3t3758w.js");
  await c(i, S)
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
  let r = oo().supervisedBridgeSession;
  return r ? {
    key: d(r),
    bridgeSessionId: r.bridgeSessionId,
    selfTitle: r.selfTitle,
    live: !0
  } : null
}

function sLt(e) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({
    cross_session_inbound: o
  })
}

function MTo() {
  let e = oo();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) sLt(e.lastKnownCrossSessionInbound)
}

function f(e) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle,
    o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({
    post_turn_summary: e
  })
}

function KBe(e, r, n) {
  let o = {
    post_turn_summary: r
  };
  if (n) e?.notifyMetadataChanged(o, n);
  else e?.notifyMetadataChanged(o);
  if (e?.onMetadataChanged) return;
  try {
    f(r)
  } catch (s) {
    l(s)
  }
}

function DTo() {
  oo().lastKnownPostTurnSummary = null
}

function LTo() {
  let e = oo().lastKnownPostTurnSummary;
  if (e) f(e)
}

function Xfe(e) {
  let r = oo(),
    n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({
    model: e
  })
}

function NTo() {
  let e = oo();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Xfe(e.lastKnownModel)
}

function FTo() {
  oo().contextUsageMirror?.resend()
}

function uxr(e, r) {
  let n = oo(),
    o = n.replHandle ?? n.sdkHostedHandle,
    s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  })
}

function HTo() {
  let e = oo();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) uxr(e.lastKnownArtifacts, e.artifactsEgressSuppressed)
}

function wGn() {
  let e = rft();
  return e ? Tu(e.bridgeSessionId) : void 0
}

function Grn() {
  let e = wGn();
  return e ? zMe(e) : void 0
}

function Vrn() {
  let e = Rd();
  return e && !e.outboundOnly ? Tu(e.bridgeSessionId) : void 0
}

function $To() {
  return rft()?.selfTitle
}

function YBe(e, r) {
  let n = Rd() ?? ev();
  if (n && er(n.bridgeSessionId) === er(e)) n.selfTitle = a(r)
}

function p(e) {
  return e !== null && oo().retiredHandles.has(e) ? null : e
}
export {
  Wrn,
  ev,
  SGn,
  Rd,
  cxr,
  qBe,
  ATo,
  xTo,
  PTo,
  zrn,
  OTo,
  TJs,
  ITo,
  rft,
  sLt,
  MTo,
  KBe,
  DTo,
  LTo,
  Xfe,
  NTo,
  FTo,
  uxr,
  HTo,
  wGn,
  Grn,
  Vrn,
  $To,
  YBe
};
