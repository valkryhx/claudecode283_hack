// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, di } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
async function b6() {
  try {
    let s = t();
    if (s.length > 0) await Promise.race([Promise.allSettled(s), Q(200)]), s.length = 0;
    let [{
        settle1PEventLoggingBeforeExit: settle1PEventLoggingBeforeExit,
        shutdown1PEventLogging: shutdown1PEventLogging
      }, {
        shutdownDatadog: shutdownDatadog
      }, {
        shutdownErrorTracking: shutdownErrorTracking
      }] = await Promise.all([import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-a8x2gs0b.js"), import("B:/~BUN/root/chunk-ywvjgd2f.js")]),
      a = settle1PEventLoggingBeforeExit(),
      l = [shutdown1PEventLogging(), shutdownDatadog(), shutdownErrorTracking()];
    await Promise.race([Promise.all(l), Q(500)]), await a;
  } catch {}
}
class o {
  tasks = [];
}
var c = new q(() => new o());
function t() {
  return di(c).tasks;
}
function zMr(s) {
  t().push(s.catch(() => {}));
}
export { b6, zMr };