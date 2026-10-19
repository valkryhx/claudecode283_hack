// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { yv, EZe } from "B:/~BUN/root/chunk-5ygt6t95.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { d0 } from "B:/~BUN/root/chunk-3m71dqxd.js";
var i = 1000;
function UBr(e = process.argv.slice(2)) {
  return EZe(e) && yv("--output-format", e) === "stream-json";
}
function yGe() {
  return Fe(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function BBr(e, t = process.argv.slice(2)) {
  let r = yv("--session-id", t);
  return (yv("--sdk-url", t) === void 0 ? Vt(r) : r) || e;
}
function tjt({
  sessionId: sessionId,
  message: message,
  reason: r,
  resultIndex: n = 0
}) {
  return {
    ...d0(sessionId, [message]),
    ...(r !== void 0 && {
      startup_failure_reason: r
    }),
    ...(n !== null && {
      result_index: n
    })
  };
}
async function jne(e) {
  if (yGe()) await jBr([tjt({
    ...e,
    sessionId: BBr(e.sessionId)
  })]);
}
async function jBr(e) {
  let stdout = process.stdout;
  if (!UBr() || stdout.writableEnded || stdout.destroyed) return !1;
  let r = e.map(item => JSON.stringify(item) + `
`).join(""),
    n = s => {},
    promise = new Promise(s => {
      n = s;
    });
  stdout.once("error", () => n(!1));
  try {
    stdout.write(r, s => n(!s));
  } catch {
    return !1;
  }
  return (await je(promise, i)) ?? !1;
}
export { UBr, yGe, BBr, tjt, jne, jBr };