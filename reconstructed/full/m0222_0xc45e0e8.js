// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
var o = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: !1,
  seedStarted: !1,
  toolCallCount: 0
};
class e {
  autoDenyPresence = Me();
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
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = Me();
  feedbackNotice = Hs(o);
  clawdEntranceTaken = !1;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = !1;
  orgMemoryReadRowSeen = !1;
  remoteHomeSettingsRowSeen = !1
}
var Ji = new e;
export {
  Ji
};
