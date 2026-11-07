// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { T8o } from "B:/~BUN/root/chunk-w9jsv3qz.js";
import { Vrr as artifactPlanPublishConsentPaths, Krr as artifactDbReadConsentSlugs, qrr as artifactDbReadHumanConsentSlugs, wkn as artifactReadConsentSlugs, kkn as artifactAssetReadConsentSlugs, vkn as artifactAssetReadHumanConsentSlugs, Ekn as artifactOutsideOrgConsentSlugs, Yrr as artifactAssetUploadConsentSlugs, Xrr as artifactAssetUploadHumanConsentSlugs, Jrr as artifactHandlersReadConsentSlugs, Qrr as artifactHandlersReadHumanConsentSlugs, Zrr as artifactHandlersWriteConsentSlugs, eor as artifactHandlersWriteHumanConsentSlugs, $Rt as artifactRoomJoinConsentSlugs } from "B:/~BUN/root/chunk-w5e3m3tb.js";
var artifactReadVersions = Object.freeze({}),
  artifactReadObservers = Object.freeze({}),
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
    artifactDbReadConsentSlugs: artifactDbReadConsentSlugs,
    artifactDbReadHumanConsentSlugs: artifactDbReadHumanConsentSlugs,
    artifactReadConsentSlugs: artifactReadConsentSlugs,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: artifactAssetUploadConsentSlugs,
    artifactAssetUploadHumanConsentSlugs: artifactAssetUploadHumanConsentSlugs,
    artifactAssetReadConsentSlugs: artifactAssetReadConsentSlugs,
    artifactAssetReadHumanConsentSlugs: artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: artifactOutsideOrgConsentSlugs,
    artifactHandlersReadConsentSlugs: artifactHandlersReadConsentSlugs,
    artifactHandlersReadHumanConsentSlugs: artifactHandlersReadHumanConsentSlugs,
    artifactHandlersWriteConsentSlugs: artifactHandlersWriteConsentSlugs,
    artifactHandlersWriteHumanConsentSlugs: artifactHandlersWriteHumanConsentSlugs,
    artifactRoomJoinConsentSlugs: artifactRoomJoinConsentSlugs,
    artifactPlanPublishConsentPaths: artifactPlanPublishConsentPaths,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: artifactReadVersions,
    artifactReadObservers: artifactReadObservers
  },
  n = {
    artifactReadConsentSlugs: artifactReadConsentSlugs,
    artifactAssetReadConsentSlugs: artifactAssetReadConsentSlugs,
    artifactAssetReadHumanConsentSlugs: artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: artifactOutsideOrgConsentSlugs
  },
  _ = Object.keys(n);
function Wrr(e) {
  return _.every(item => e[item] === n[item]) ? e : {
    ...e,
    ...n
  };
}
var o = Object.keys(jrr);
function zrr(e) {
  let webBrowser = e.webBrowser,
    s = webBrowser.view === void 0 && webBrowser.logs.length === 0 && webBrowser.unreadErrors === 0 && webBrowser.unreadWarnings === 0,
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (s && S && o.every(item => item === "artifactReadVersions" || item === "artifactReadObservers" || e[item] === jrr[item])) return e;
  return {
    ...e,
    ...jrr,
    webBrowser: s ? webBrowser : {
      ...T8o(),
      cleanupRegistered: webBrowser.cleanupRegistered
    }
  };
}
function Grr(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1;
}
export { jrr, Wrr, zrr, Grr };