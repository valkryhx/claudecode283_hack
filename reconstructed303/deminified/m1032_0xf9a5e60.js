// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { D0 } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { Zh, KP } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
function _z(e) {
  let o = Zh(),
    s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${KP()}`);
  return s;
}
function c4t(e) {
  return !!e.isBypassPermissionsModeAvailable && !$E();
}
function u4t(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (c4t(e)) return "bypassPermissions";
      if (_z(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (_z(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function Y9r(e, o, s) {
  let nextMode = u4t(e, o);
  return {
    nextMode: nextMode,
    context: D0(e.mode, nextMode, e, s)
  };
}
export { _z, c4t, u4t, Y9r };