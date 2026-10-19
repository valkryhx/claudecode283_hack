// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  _I,
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
var r = new z(() => Me());

function i() {
  return r.of(j().host)
}
var pUe = _I(i);

function cUn(e) {
  return {
    setMode(t) {
      pUe.emit({
        kind: "agent-mode",
        agentId: e,
        mode: t
      })
    },
    setRetryStatus(t) {
      pUe.emit({
        kind: "agent-retry-status",
        agentId: e,
        retryStatus: t
      })
    },
    setTurnEffort(t, n = null) {
      pUe.emit({
        kind: "agent-turn-effort",
        agentId: e,
        turnEffort: t,
        turnModel: n
      })
    }
  }
}
var uUn = "Running SessionStart hooks\u2026",
  fUe = {
    setSpinnerMessage(e) {
      pUe.emit({
        kind: "main-message",
        message: e
      })
    },
    setSpinnerColors(e, t) {
      pUe.emit({
        kind: "main-colors",
        color: e,
        shimmerColor: t
      })
    }
  };
export {
  pUe,
  cUn,
  uUn,
  fUe
};
