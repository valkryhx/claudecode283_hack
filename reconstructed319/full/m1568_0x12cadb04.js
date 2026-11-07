// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  TN
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  nd,
  zS,
  TR
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  pCe
} from "B:/~BUN/root/chunk-0q69tvcp.js";
import {
  sh
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
class t {
  read = null;
  register(s) {
    this.read = s
  }
  loaded() {
    if (this.read === null) pCe.loadWriters?.();
    return this.read
  }
}
var a8r = new t;

function lui(s) {
  a8r.register(s)
}
var fkn = {
  suppressAlwaysAllowRule: !0,
  personOnly: !0,
  defaultToNo: !0,
  localDisplayOnly: !0
};

function pkn(s) {
  let {
    decider: e,
    scheduledTrigger: i,
    replacedTurnStart: o
  } = TR(s.messages), r = e === null ? void 0 : s.messages[e.index], n = e === null ? o?.bySessionUsersOwnWords === !0 : r !== void 0 && nd(e.origin) && zS(r);
  return sh(s) || i && !n || e?.origin?.kind === "channel" || e?.origin?.kind === "peer" && e.origin.senderTaskId === void 0 && e.origin.selfSent !== !0 || nd(e?.origin) && !n || o?.byHuman === !0 && !o.byHumanHere ? {
    behavior: "deny",
    message: "The user's organization requires a person to approve each new artifact, and nobody can be asked here: permission prompts are off or bypassed, or a schedule or a message from outside this session started this turn. Nothing was created or published. Tell the user they can ask for it themselves in a session that shows permission prompts, and don't retry in this turn.",
    decisionReason: {
      type: "safetyCheck",
      reason: "Creating an artifact needs a person to approve it",
      classifierApprovable: !1
    }
  } : void 0
}

function Err(s) {
  let e = s.toolUseId === void 0 ? void 0 : s.toolDecisions?.get(s.toolUseId)?.source;
  return e === void 0 ? TN() : e === "user_temporary" || e === "user_permanent"
}
export {
  fkn,
  pkn,
  Err,
  a8r,
  lui
};
