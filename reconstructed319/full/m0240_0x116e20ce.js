// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
class t {
  bridgeBinding = void 0;
  chromeTabGroupTitle = void 0;
  browserHints = void 0;
  lastSentPreferredDeviceId = void 0;
  resolvedHostByToolUseId = new Map;
  shouldAutoEnable = void 0;
  wiredThisSession = !1;
  systemPromptSection = "";
  attachedInstructions = "";
  hasSentOwedPrompt = !1;
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
  browserRosterChanged = De();
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
    this.bridgeBinding = void 0, this.chromeTabGroupTitle = void 0, this.browserHints = void 0, this.lastSentPreferredDeviceId = void 0, this.resolvedHostByToolUseId = new Map, this.shouldAutoEnable = void 0, this.wiredThisSession = !1, this.systemPromptSection = "", this.attachedInstructions = "", this.hasSentOwedPrompt = !1, this.installUpsellResolution = void 0, this.installUpsellBypassSuppressionCounted = !1, this.trackedTabIds = new Set, this.tabGroupCleanupRegistered = !1, this.unsubscribeSessionSwitch?.(), this.unsubscribeSessionSwitch = void 0, this.unregisterExitCleanup?.(), this.unregisterExitCleanup = void 0, this.closesInFlight = new Map, this.lastExecutedTabUrlByScope = new Map, this.resolvedUrlByToolUseId = new Map, this.browserRosterVersion++, this.noBrowserFound = void 0, this.relayConnectFailed = void 0, this.disconnectedAnswerCount = 0, this.notConnectedSeenByPriorWorker = !1, this.notConnectedMirrored = !1, this.chromeSetupOfferArm = void 0, this.chromeSetupOfferArmMirrored = !1, this.chromeSetupOfferStateUnread = !1, this.lastTurnClientPlatform = void 0, this.disconnectedAnswerTexts = new Set
  }
}

function $Fn(e) {
  return e === "ios" || e === "android"
}
var fgo = new W(() => new t);

function vi() {
  return fgo.of(H().host)
}

function vzi(e) {
  let n = vi().resolvedHostByToolUseId.get(e);
  if (n !== void 0) n.keepHostPin = !0
}
export {
  $Fn,
  fgo,
  vi,
  vzi
};
