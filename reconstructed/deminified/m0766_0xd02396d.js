// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ffr } from "B:/~BUN/root/chunk-y69xbd21.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { ou } from "B:/~BUN/root/chunk-tgk1nfes.js";
function d4o(e) {
  let r = ou(),
    lastSentPreferredDeviceId = r.lastSentPreferredDeviceId,
    i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && lastSentPreferredDeviceId !== void 0 && e.preferredDeviceId === lastSentPreferredDeviceId;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? {
    ...e,
    preferredDeviceId: void 0
  } : e, t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
  let bridgeBinding = r.bridgeBinding;
  if (bridgeBinding && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== lastSentPreferredDeviceId && bridgeBinding.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) Ffr(bridgeBinding.socketClient);
}
function ipr(e) {
  let r = ou(),
    browserHints = r.browserHints;
  if (!browserHints || browserHints.preferredDeviceId === void 0 || browserHints.preferredDeviceId === e) return;
  r.browserHints = {
    ...browserHints,
    preferredDeviceId: void 0
  };
}
function apr(e) {
  return ou().browserHints?.preferredDeviceId ?? e();
}
function lpr() {
  let browserHints_2 = ou().browserHints;
  if (!browserHints_2) return;
  return new Map(browserHints_2.localDeviceIds.map(item => [item, "live"]));
}
function cpr() {
  return ou().browserHints?.hostPlatform;
}
export { d4o, ipr, apr, lpr, cpr };