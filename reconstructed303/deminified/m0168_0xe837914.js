// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { PUt } from "B:/~BUN/root/chunk-qd9ks09p.js";
import { MB as code_2, o0e as code } from "B:/~BUN/root/chunk-cr3jjat9.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var S6r = {};
Mr(S6r, {
  default: () => S6r,
  endsInARowOf: () => I5s,
  unsettledBy: () => por,
  workerEndingOf: () => M5s
});
function I5s(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var por = e => ({
  reason: `Error: ${d(e)}`,
  kind: e instanceof PUt ? "passing" : "lasting"
});
var o = 5,
  m = `It did not pass in ${o} tries`,
  p = "it is held for good, or refused to this process",
  t = "Start the daemon again once this is mended.",
  a = `${m}: ${p}. ${t}`;
function M5s(e, n) {
  let r = e.kind === "passing",
    s = r && n + 1 < o,
    i = r ? a : t;
  return s ? {
    code: code,
    said: `${e.reason}
`
  } : {
    code: code_2,
    said: `${e.reason}
${i}
`
  };
}
export { I5s, por, M5s, S6r };