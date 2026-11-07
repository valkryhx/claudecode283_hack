// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q5r } from "B:/~BUN/root/chunk-8b9g5aw6.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { vi } from "B:/~BUN/root/chunk-knfpag6d.js";
function Xga(e) {
  let r = vi(),
    lastSentPreferredDeviceId = r.lastSentPreferredDeviceId,
    i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && lastSentPreferredDeviceId !== void 0 && e.preferredDeviceId === lastSentPreferredDeviceId;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? {
    ...e,
    preferredDeviceId: void 0
  } : e, t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
  let bridgeBinding = r.bridgeBinding;
  if (bridgeBinding && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== lastSentPreferredDeviceId && bridgeBinding.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) Q5r(bridgeBinding.socketClient);
}
function B2o(e) {
  let r = vi(),
    browserHints = r.browserHints;
  if (!browserHints || browserHints.preferredDeviceId === void 0 || browserHints.preferredDeviceId === e) return;
  r.browserHints = {
    ...browserHints,
    preferredDeviceId: void 0
  };
}
function j2o(e) {
  return vi().browserHints?.preferredDeviceId ?? e();
}
function W2o() {
  let browserHints_2 = vi().browserHints;
  if (!browserHints_2) return;
  return new Map(browserHints_2.localDeviceIds.map(item => [item, "live"]));
}
function z2o() {
  return vi().browserHints?.hostPlatform;
}
export { Xga, B2o, j2o, W2o, z2o };