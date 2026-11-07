// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  yb,
  nL
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  c$
} from "B:/~BUN/root/chunk-x12sgt91.js";
import {
  EA
} from "B:/~BUN/root/chunk-eyvtcj15.js";

function BY(e) {
  let o = yb(),
    s = !!e.isAutoModeAvailable && o;
  if (!s) t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${nL()}`);
  return s
}

function D_n(e) {
  return !!e.isBypassPermissionsModeAvailable && !EA()
}

function L_n(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (D_n(e)) return "bypassPermissions";
      if (BY(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (BY(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default"
  }
}

function q2o(e, o, s) {
  let n = L_n(e, o);
  return {
    nextMode: n,
    context: c$(e.mode, n, e, s)
  }
}
export {
  BY,
  D_n,
  L_n,
  q2o
};
