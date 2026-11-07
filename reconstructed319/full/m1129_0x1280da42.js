// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q5r
} from "B:/~BUN/root/chunk-8b9g5aw6.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  vi
} from "B:/~BUN/root/chunk-knfpag6d.js";

function Xga(e) {
  let r = vi(),
    d = r.lastSentPreferredDeviceId,
    i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && d !== void 0 && e.preferredDeviceId === d;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? {
    ...e,
    preferredDeviceId: void 0
  } : e, t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0,8)??"none"} local=${e.localDeviceIds.length}${i?" (re-send; in-session pick stands)":""}`);
  let n = r.bridgeBinding;
  if (n && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== d && n.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) Q5r(n.socketClient)
}

function B2o(e) {
  let r = vi(),
    d = r.browserHints;
  if (!d || d.preferredDeviceId === void 0 || d.preferredDeviceId === e) return;
  r.browserHints = {
    ...d,
    preferredDeviceId: void 0
  }
}

function j2o(e) {
  return vi().browserHints?.preferredDeviceId ?? e()
}

function W2o() {
  let e = vi().browserHints;
  if (!e) return;
  return new Map(e.localDeviceIds.map((r) => [r, "live"]))
}

function z2o() {
  return vi().browserHints?.hostPlatform
}
export {
  Xga,
  B2o,
  j2o,
  W2o,
  z2o
};
