// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { rFt, Mce, zut, BR, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { fs } from "B:/~BUN/root/chunk-290k5gh5.js";
import { mC, he, ln } from "B:/~BUN/root/chunk-3rzkfay5.js";
var SCe = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function Mo(n, value_3) {
  let o = fs(),
    r = o.includes("userSettings") && mC();
  for (let e = o.length - 1; e >= 0; e--) {
    let source = o[e];
    if (source === "projectSettings" && r) continue;
    let value = he(source)?.[n];
    if (value !== void 0) return {
      value: value,
      source: source
    };
  }
  if (SCe.includes(n)) {
    let e = n,
      t = le()[e];
    if (t !== void 0 && t !== BR[e]) {
      let value_2 = rFt(e) ? zut(e, t) : Mce(e, t);
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
function s1(n, i, o) {
  ln("userSettings", {
    [n]: i
  }, void 0, o);
}
export { SCe, Mo, s1 };