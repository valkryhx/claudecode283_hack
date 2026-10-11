// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Foo } from "B:/~BUN/root/chunk-d3dc4x7w.js";
import { Xcr } from "B:/~BUN/root/chunk-t90pe00y.js";
import { aYt as artifactPlanPublishConsentPaths, lYt as artifactDbReadConsentSlugs, cYt as artifactDbReadHumanConsentSlugs, Fvt as artifactReadConsentSlugs, $vt as artifactAssetReadConsentSlugs, Uvt as artifactAssetReadHumanConsentSlugs, Bvt as artifactOutsideOrgConsentSlugs, dYt as artifactAssetUploadConsentSlugs, uYt as artifactAssetUploadHumanConsentSlugs, pYt as artifactHandlersReadConsentSlugs, fYt as artifactHandlersReadHumanConsentSlugs, mYt as artifactHandlersWriteConsentSlugs, gYt as artifactHandlersWriteHumanConsentSlugs, jze as artifactRoomJoinConsentSlugs } from "B:/~BUN/root/chunk-6yjt7rfc.js";
var artifactReadVersions = Object.freeze({}),
  artifactReadObservers = Object.freeze({}),
  rYt = {
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
function oYt(e) {
  return _.every(item => e[item] === s[item]) ? e : {
    ...e,
    ...s
  };
}
var T = Object.keys(rYt);
function sYt(e) {
  let webBrowser = e.webBrowser,
    r = webBrowser.view === void 0 && webBrowser.logs.length === 0 && webBrowser.unreadErrors === 0 && webBrowser.unreadWarnings === 0,
    workshopTelemetry = Foo(e.workshopTelemetry),
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && workshopTelemetry === e.workshopTelemetry && S && T.every(item => item === "artifactReadVersions" || item === "artifactReadObservers" || e[item] === rYt[item])) return e;
  return {
    ...e,
    ...rYt,
    ...(workshopTelemetry !== e.workshopTelemetry && {
      workshopTelemetry: workshopTelemetry
    }),
    webBrowser: r ? webBrowser : {
      ...Xcr(),
      cleanupRegistered: webBrowser.cleanupRegistered
    }
  };
}
function iYt(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1;
}
export { rYt, oYt, sYt, iYt };