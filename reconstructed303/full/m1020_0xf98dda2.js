// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  has
} from "B:/~BUN/root/chunk-nnnnp9q9.js";
import {
  Oeo
} from "B:/~BUN/root/chunk-7amxvs8z.js";
import {
  rOn,
  oOn,
  sOn,
  t3t,
  n3t,
  r3t,
  o3t,
  iOn,
  aOn,
  lOn,
  dOn,
  cOn,
  uOn,
  _st
} from "B:/~BUN/root/chunk-w6w8tkbb.js";
var o = Object.freeze({}),
  i = Object.freeze({}),
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
    artifactDbReadConsentSlugs: oOn,
    artifactDbReadHumanConsentSlugs: sOn,
    artifactReadConsentSlugs: t3t,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: iOn,
    artifactAssetUploadHumanConsentSlugs: aOn,
    artifactAssetReadConsentSlugs: n3t,
    artifactAssetReadHumanConsentSlugs: r3t,
    artifactOutsideOrgConsentSlugs: o3t,
    artifactHandlersReadConsentSlugs: lOn,
    artifactHandlersReadHumanConsentSlugs: dOn,
    artifactHandlersWriteConsentSlugs: cOn,
    artifactHandlersWriteHumanConsentSlugs: uOn,
    artifactRoomJoinConsentSlugs: _st,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: rOn,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: o,
    artifactReadObservers: i
  },
  s = {
    artifactReadConsentSlugs: t3t,
    artifactAssetReadConsentSlugs: n3t,
    artifactAssetReadHumanConsentSlugs: r3t,
    artifactOutsideOrgConsentSlugs: o3t
  },
  _ = Object.keys(s);

function eOn(e) {
  return _.every((t) => e[t] === s[t]) ? e : {
    ...e,
    ...s
  }
}
var T = Object.keys(ZPn);

function tOn(e) {
  let t = e.webBrowser,
    r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0,
    n = has(e.workshopTelemetry),
    S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && n === e.workshopTelemetry && S && T.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === ZPn[a])) return e;
  return {
    ...e,
    ...ZPn,
    ...n !== e.workshopTelemetry && {
      workshopTelemetry: n
    },
    webBrowser: r ? t : {
      ...Oeo(),
      cleanupRegistered: t.cleanupRegistered
    }
  }
}

function nOn(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), !0;
  return !1
}
export {
  ZPn,
  eOn,
  tOn,
  nOn
};
