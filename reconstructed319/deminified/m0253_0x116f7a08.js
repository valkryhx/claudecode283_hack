// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H1n, kFe, ein, FD, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ym, be, qn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
var uNe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function Ei(n, value_3) {
  let o = $o();
  for (let e = o.length - 1; e >= 0; e--) {
    let source = o[e],
      value = be(source)?.[n];
    if (value === void 0) continue;
    if (source === "projectSettings" && o.includes("userSettings") && Ym()) continue;
    return {
      value: value,
      source: source
    };
  }
  if (uNe.includes(n)) {
    let e = n,
      t = fe()[e];
    if (t !== void 0 && t !== FD[e]) {
      let value_2 = H1n(e) ? ein(e, t) : kFe(e, t);
      if (value_2 !== void 0) return {
        value: value_2,
        source: "legacyGlobalConfig"
      };
    }
  }
  return {
    value: value_3,
    source: "default"
  };
}
function IX(n, i, o) {
  qn("userSettings", {
    [n]: i
  }, void 0, o);
}
export { uNe, Ei, IX };