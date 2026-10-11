// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { yL, iw, rse } from "B:/~BUN/root/chunk-0mn860zt.js";
import { Rw } from "B:/~BUN/root/chunk-0b2y1gsk.js";
function MH(e) {
  let o = iw(),
    s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${rse()}`);
  return s;
}
function dSt(e) {
  return !!e.isBypassPermissionsModeAvailable && !Rw();
}
function uSt(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (dSt(e)) return "bypassPermissions";
      if (MH(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (MH(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function xor(e, o, s) {
  let nextMode = uSt(e, o);
  return {
    nextMode: nextMode,
    context: yL(e.mode, nextMode, e, s)
  };
}
export { MH, dSt, uSt, xor };