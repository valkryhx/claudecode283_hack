// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
var EIr = 1500,
  c = 3000;

function RTe() {
  return a.CLAUDE_CODE_REMOTE && Te()
}

function oRo({
  eventLoggingEnabled: e,
  growthBookEnabled: t,
  cacheEmpty: o,
  relaunches: n
}) {
  let i = e && o ? EIr : 0,
    s = t && n ? a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? c : 0,
    r = Math.max(i, s);
  return r > 0 ? r : void 0
}
async function sRo({
  initialize: e,
  budgetMs: t
}) {
  let o = performance.now(),
    n = await nt(e().then(() => !0, () => !0), t);
  return {
    waitMs: performance.now() - o,
    timedOut: n === void 0
  }
}
export {
  EIr,
  RTe,
  oRo,
  sRo
};
