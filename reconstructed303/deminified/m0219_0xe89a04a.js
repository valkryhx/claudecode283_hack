// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { xdn, vEe, nUt, Mx, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Xy, me, In } from "B:/~BUN/root/chunk-1gpjpba6.js";
var Ike = ["theme", "editorMode", "verbose", "preferredNotifChannel", "autoCompactEnabled", "autoScrollEnabled", "fileCheckpointingEnabled", "showTurnDuration", "showMessageTimestamps", "terminalProgressBarEnabled", "todoFeatureEnabled", "teammateMode", "remoteControlAtStartup", "autoUploadSessions", "inputNeededNotifEnabled", "agentPushNotifEnabled"];
function bs(n, value_3) {
  let o = Wo(),
    r = o.includes("userSettings") && Xy();
  for (let e = o.length - 1; e >= 0; e--) {
    let source = o[e];
    if (source === "projectSettings" && r) continue;
    let value = me(source)?.[n];
    if (value !== void 0) return {
      value: value,
      source: source
    };
  }
  if (Ike.includes(n)) {
    let e = n,
      t = ue()[e];
    if (t !== void 0 && t !== Mx[e]) {
      let value_2 = xdn(e) ? nUt(e, t) : vEe(e, t);
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
function HK(n, i, o) {
  In("userSettings", {
    [n]: i
  }, void 0, o);
}
export { Ike, bs, HK };