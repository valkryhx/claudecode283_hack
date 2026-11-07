// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var t = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: !1,
  seedStarted: !1,
  toolCallCount: 0
};
class n {
  autoDenyPresence = De();
  mainLoopBusy = Hs({
    busy: !1
  });
  blockingToolProgress = Hs({
    active: !1
  });
  dialogHostUnmounted = Hs({
    unmounted: !1
  });
  onScreenBlockingDialog = Hs({
    surfaceMounted: !1,
    kind: null
  });
  headerGauge = Hs({
    mounts: 0
  });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = De();
  feedbackNotice = Hs(t);
  promptDigitCaptures = Hs({
    count: 0
  });
  clawdEntranceTaken = !1;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = !1;
  orgMemoryReadRowSeen = !1;
  remoteHomeSettingsRowSeen = !1;
  configRowsSeen = new Set();
  configRowNotices = new Map();
}
var Va = he(new n(), o => {
  o.configRowsSeen.clear(), o.configRowNotices.clear(), o.mainLoopBusy.setState(e => e.busy ? {
    busy: !1
  } : e), o.headerGauge.setState(e => e.mounts === 0 ? e : {
    mounts: 0
  });
});
export { Va };