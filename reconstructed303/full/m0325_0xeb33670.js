// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
class n {
  bridgeBinding = void 0;
  browserHints = void 0;
  lastSentPreferredDeviceId = void 0;
  resolvedHostByToolUseId = new Map;
  shouldAutoEnable = void 0;
  wiredThisSession = !1;
  systemPromptSection = "";
  attachedInstructions = "";
  installUpsellResolution = void 0;
  installUpsellBypassSuppressionCounted = !1;
  trackedTabIds = new Set;
  tabGroupCleanupRegistered = !1;
  unsubscribeSessionSwitch = void 0;
  unregisterExitCleanup = void 0;
  closesInFlight = new Map;
  lastExecutedTabUrlByScope = new Map;
  resolvedUrlByToolUseId = new Map;
  browserRosterVersion = 0;
  browserRosterChanged = Me();
  noBrowserFound = void 0;
  relayConnectFailed = void 0;
  disconnectedAnswerCount = 0;
  disconnectedAnswerTexts = new Set;
  notConnectedSeenByPriorWorker = !1;
  notConnectedMirrored = !1;
  chromeSetupOfferArm = void 0;
  chromeSetupOfferArmMirrored = !1;
  chromeSetupOfferStateUnread = !1;
  lastTurnClientPlatform = void 0;
  reset() {
    this.bridgeBinding = void 0, this.browserHints = void 0, this.lastSentPreferredDeviceId = void 0, this.resolvedHostByToolUseId = new Map, this.shouldAutoEnable = void 0, this.wiredThisSession = !1, this.systemPromptSection = "", this.attachedInstructions = "", this.installUpsellResolution = void 0, this.installUpsellBypassSuppressionCounted = !1, this.trackedTabIds = new Set, this.tabGroupCleanupRegistered = !1, this.unsubscribeSessionSwitch?.(), this.unsubscribeSessionSwitch = void 0, this.unregisterExitCleanup?.(), this.unregisterExitCleanup = void 0, this.closesInFlight = new Map, this.lastExecutedTabUrlByScope = new Map, this.resolvedUrlByToolUseId = new Map, this.browserRosterVersion++, this.noBrowserFound = void 0, this.relayConnectFailed = void 0, this.disconnectedAnswerCount = 0, this.notConnectedSeenByPriorWorker = !1, this.notConnectedMirrored = !1, this.chromeSetupOfferArm = void 0, this.chromeSetupOfferArmMirrored = !1, this.chromeSetupOfferStateUnread = !1, this.lastTurnClientPlatform = void 0, this.disconnectedAnswerTexts = new Set
  }
}
var QCr = new z(() => new n);

function ki() {
  return QCr.of(j().host)
}

function sOs(t) {
  let e = ki().resolvedHostByToolUseId.get(t);
  if (e !== void 0) e.keepHostPin = !0
}
export {
  QCr,
  ki,
  sOs
};
