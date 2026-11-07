// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { D_, Rwt } from "B:/~BUN/root/chunk-sxvr9rzb.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { gU } from "B:/~BUN/root/chunk-cbv74thb.js";
var l = 1000;
function Orn(e = process.argv.slice(2)) {
  return Rwt(e) && D_("--output-format", e) === "stream-json";
}
function fRe() {
  return Pe(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
var d = new Set(["org_config_required_unavailable", "org_config_refused", "config_file_invalid"]);
function c(e) {
  return d.has(e) || fRe();
}
function Irn(e, t = process.argv.slice(2)) {
  let r = D_("--session-id", t);
  return (D_("--sdk-url", t) === void 0 ? Nt(r) : r) || e;
}
function T2e({
  sessionId: sessionId,
  message: message,
  reason: r,
  resultIndex: n = 0
}) {
  return {
    ...gU(sessionId, [message]),
    ...(r !== void 0 && {
      startup_failure_reason: r
    }),
    ...(n !== null && {
      result_index: n
    })
  };
}
async function A3(e) {
  if (c(e.reason)) await kgt([T2e({
    ...e,
    sessionId: Irn(e.sessionId)
  })]);
}
async function kgt(e, {
  goesOn = !1
} = {}) {
  let stdout = process.stdout;
  if (!Orn() || stdout.writableEnded || stdout.destroyed) return !1;
  let n = e.map(item => JSON.stringify(item) + `
`).join(""),
    s = o => {},
    promise = new Promise(o => {
      s = o;
    }),
    i = () => s(!1);
  stdout.once("error", i);
  try {
    stdout.write(n, o => s(!o));
  } catch {
    return !1;
  }
  let a = (await we(promise, l)) ?? !1;
  if (goesOn && a) stdout.off("error", i);
  return a;
}
export { Orn, fRe, Irn, T2e, A3, kgt };