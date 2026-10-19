// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { has } from "B:/~BUN/root/chunk-nnnnp9q9.js";
import { Oeo } from "B:/~BUN/root/chunk-7amxvs8z.js";
import { rOn as artifactPlanPublishConsentPaths, oOn as artifactDbReadConsentSlugs, sOn as artifactDbReadHumanConsentSlugs, t3t as artifactReadConsentSlugs, n3t as artifactAssetReadConsentSlugs, r3t as artifactAssetReadHumanConsentSlugs, o3t as artifactOutsideOrgConsentSlugs, iOn as artifactAssetUploadConsentSlugs, aOn as artifactAssetUploadHumanConsentSlugs, lOn as artifactHandlersReadConsentSlugs, dOn as artifactHandlersReadHumanConsentSlugs, cOn as artifactHandlersWriteConsentSlugs, uOn as artifactHandlersWriteHumanConsentSlugs, _st as artifactRoomJoinConsentSlugs } from "B:/~BUN/root/chunk-w6w8tkbb.js";
var artifactReadVersions = Object.freeze({}),
  artifactReadObservers = Object.freeze({}),
  ZPn = {
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
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: artifactPlanPublishConsentPaths,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: artifactReadVersions,
    artifactReadObservers: artifactReadObservers
  },
  s = {
    artifactReadConsentSlugs: artifactReadConsentSlugs,
    artifactAssetReadConsentSlugs: artifactAssetReadConsentSlugs,
    artifactAssetReadHumanConsentSlugs: artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: artifactOutsideOrgConsentSlugs
  },
  _ = Object.keys(s);
function eOn(e) {
  return _.every(item => e[item] === s[item]) ? e : {
    ...e,
    ...s
  };
}
var T = Object.keys(ZPn);
function tOn(e) {
  let webBrowser = e.webBrowser,
    r = webBrowser.view === void 0 && webBrowser.logs.length === 0 && webBrowser.unreadErrors === 0 && webBrowser.unreadWarnings === 0,
    workshopTelemetry = has(e.workshopTelemetry),
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && workshopTelemetry === e.workshopTelemetry && S && T.every(item => item === "artifactReadVersions" || item === "artifactReadObservers" || e[item] === ZPn[item])) return e;
  return {
    ...e,
    ...ZPn,
    ...(workshopTelemetry !== e.workshopTelemetry && {
      workshopTelemetry: workshopTelemetry
    }),
    webBrowser: r ? webBrowser : {
      ...Oeo(),
      cleanupRegistered: webBrowser.cleanupRegistered
    }
  };
}
function nOn(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1;
}
export { ZPn, eOn, tOn, nOn };