// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H1n,
  kFe,
  ein,
  FD,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  $o
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Ym,
  be,
  qn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
var uNe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];

function Ei(n, i) {
  let o = $o();
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e],
      s = be(t)?.[n];
    if (s === void 0) continue;
    if (t === "projectSettings" && o.includes("userSettings") && Ym()) continue;
    return {
      value: s,
      source: t
    }
  }
  if (uNe.includes(n)) {
    let e = n,
      t = fe()[e];
    if (t !== void 0 && t !== FD[e]) {
      let s = H1n(e) ? ein(e, t) : kFe(e, t);
      if (s !== void 0) return {
        value: s,
        source: "legacyGlobalConfig"
      }
    }
  }
  return {
    value: i,
    source: "default"
  }
}

function IX(n, i, o) {
  qn("userSettings", {
    [n]: i
  }, void 0, o)
}
export {
  uNe,
  Ei,
  IX
};
