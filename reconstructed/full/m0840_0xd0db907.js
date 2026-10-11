// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Foo
} from "B:/~BUN/root/chunk-d3dc4x7w.js";
import {
  Xcr
} from "B:/~BUN/root/chunk-t90pe00y.js";
import {
  aYt,
  lYt,
  cYt,
  Fvt,
  $vt,
  Uvt,
  Bvt,
  dYt,
  uYt,
  pYt,
  fYt,
  mYt,
  gYt,
  jze
} from "B:/~BUN/root/chunk-6yjt7rfc.js";
var o = Object.freeze({}),
  i = Object.freeze({}),
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
    artifactDbReadConsentSlugs: lYt,
    artifactDbReadHumanConsentSlugs: cYt,
    artifactReadConsentSlugs: Fvt,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: dYt,
    artifactAssetUploadHumanConsentSlugs: uYt,
    artifactAssetReadConsentSlugs: $vt,
    artifactAssetReadHumanConsentSlugs: Uvt,
    artifactOutsideOrgConsentSlugs: Bvt,
    artifactHandlersReadConsentSlugs: pYt,
    artifactHandlersReadHumanConsentSlugs: fYt,
    artifactHandlersWriteConsentSlugs: mYt,
    artifactHandlersWriteHumanConsentSlugs: gYt,
    artifactRoomJoinConsentSlugs: jze,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: aYt,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: o,
    artifactReadObservers: i
  },
  s = {
    artifactReadConsentSlugs: Fvt,
    artifactAssetReadConsentSlugs: $vt,
    artifactAssetReadHumanConsentSlugs: Uvt,
    artifactOutsideOrgConsentSlugs: Bvt
  },
  _ = Object.keys(s);

function oYt(e) {
  return _.every((t) => e[t] === s[t]) ? e : {
    ...e,
    ...s
  }
}
var T = Object.keys(rYt);

function sYt(e) {
  let t = e.webBrowser,
    r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0,
    n = Foo(e.workshopTelemetry),
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && n === e.workshopTelemetry && S && T.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === rYt[a])) return e;
  return {
    ...e,
    ...rYt,
    ...n !== e.workshopTelemetry && {
      workshopTelemetry: n
    },
    webBrowser: r ? t : {
      ...Xcr(),
      cleanupRegistered: t.cleanupRegistered
    }
  }
}

function iYt(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1
}
export {
  rYt,
  oYt,
  sYt,
  iYt
};
