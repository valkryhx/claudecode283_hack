// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ki
} from "B:/~BUN/root/chunk-p4t63p2q.js";

function wes(e) {
  return () => {
    let n = e(),
      t = ki();
    return t.disconnectedAnswerCount++, t.disconnectedAnswerTexts.add(n), n
  }
}

function y9r() {
  return ki().disconnectedAnswerCount
}

function fTn(e) {
  return ki().disconnectedAnswerTexts.has(e)
}

function TKt() {
  let e = ki();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker
}

function ves() {
  ki().notConnectedSeenByPriorWorker = !0
}
export {
  wes,
  y9r,
  fTn,
  TKt,
  ves
};
