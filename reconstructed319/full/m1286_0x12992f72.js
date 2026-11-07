// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  T8o
} from "B:/~BUN/root/chunk-w9jsv3qz.js";
import {
  Vrr,
  Krr,
  qrr,
  wkn,
  kkn,
  vkn,
  Ekn,
  Yrr,
  Xrr,
  Jrr,
  Qrr,
  Zrr,
  eor,
  $Rt
} from "B:/~BUN/root/chunk-w5e3m3tb.js";
var r = Object.freeze({}),
  i = Object.freeze({}),
  jrr = {
    bagelActive: void 0,
    bagelUrl: void 0,
    bagelPanelVisible: void 0,
    computerUseMcpState: void 0,
    denialTracking: void 0,
    activeGoal: void 0,
    remoteAutocompactState: void 0,
    queuedGoalOrigin: void 0,
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: Krr,
    artifactDbReadHumanConsentSlugs: qrr,
    artifactReadConsentSlugs: wkn,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: Yrr,
    artifactAssetUploadHumanConsentSlugs: Xrr,
    artifactAssetReadConsentSlugs: kkn,
    artifactAssetReadHumanConsentSlugs: vkn,
    artifactOutsideOrgConsentSlugs: Ekn,
    artifactHandlersReadConsentSlugs: Jrr,
    artifactHandlersReadHumanConsentSlugs: Qrr,
    artifactHandlersWriteConsentSlugs: Zrr,
    artifactHandlersWriteHumanConsentSlugs: eor,
    artifactRoomJoinConsentSlugs: $Rt,
    artifactPlanPublishConsentPaths: Vrr,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: r,
    artifactReadObservers: i
  },
  n = {
    artifactReadConsentSlugs: wkn,
    artifactAssetReadConsentSlugs: kkn,
    artifactAssetReadHumanConsentSlugs: vkn,
    artifactOutsideOrgConsentSlugs: Ekn
  },
  _ = Object.keys(n);

function Wrr(e) {
  return _.every((t) => e[t] === n[t]) ? e : {
    ...e,
    ...n
  }
}
var o = Object.keys(jrr);

function zrr(e) {
  let t = e.webBrowser,
    s = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0,
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (s && S && o.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === jrr[a])) return e;
  return {
    ...e,
    ...jrr,
    webBrowser: s ? t : {
      ...T8o(),
      cleanupRegistered: t.cleanupRegistered
    }
  }
}

function Grr(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1
}
export {
  jrr,
  Wrr,
  zrr,
  Grr
};
