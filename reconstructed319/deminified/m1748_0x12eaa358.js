// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Ik } from "B:/~BUN/root/chunk-4w2c6jye.js";
import { createInterface as b } from "readline";
var E = 5,
  $Ue = 250,
  GUo = "That answer arrived too quickly after the question to count. Please answer again.";
async function iOe(e, input = process.stdin, {
  ignoreAnswersWithinMs = 0,
  reaskPreamble = "",
  signal: signal
} = {}) {
  if (ignoreAnswersWithinMs > 0) {
    if (await R(input, ignoreAnswersWithinMs)) return !1;
  }
  if (signal?.aborted === !0) return !1;
  let o = () => {},
    promise = new Promise(d => {
      o = d;
    }),
    t = b({
      input: input,
      output: process.stdout
    }),
    f = 0,
    l = () => {
      let d = performance.now();
      t.question(`${e} [y/N] `, m => {
        if (ignoreAnswersWithinMs > 0 && performance.now() - d < ignoreAnswersWithinMs) {
          if (++f > E) {
            o(!1), t.close();
            return;
          }
          process.stdout.write(`${reaskPreamble}${GUo}
`), l();
          return;
        }
        let i = m.trim().toLowerCase();
        o(i === "y" || i === "yes"), t.close();
      });
    };
  return l(), t.once("close", () => o(!1)), signal?.addEventListener("abort", () => t.close(), {
    once: !0
  }), promise;
}
async function R(e, a) {
  let r = "isTTY" in e && e.isTTY === !0,
    c = "isRaw" in e && e.isRaw === !0,
    s = !1,
    o = () => {
      s = !0;
    },
    n = () => {};
  if (e.once("end", o), e.once("close", o), e.on("data", n), r) Ik(e, !0);
  try {
    e.resume(), await J(a);
  } finally {
    if (e.removeListener("data", n), e.removeListener("end", o), e.removeListener("close", o), e.pause(), r) Ik(e, c);
  }
  return s || "readableEnded" in e && e.readableEnded === !0 || "destroyed" in e && e.destroyed === !0;
}
export { $Ue, GUo, iOe };