// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { nn } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { zE, Fin, I3 } from "B:/~BUN/root/chunk-429xgjya.js";
function i() {
  return c(I3(Fin(), "globalConfig"), nn("userSettings") ? I3(me("userSettings")?.env, "userSettings") : {}, I3(me("flagSettings")?.env, "flagSettings"), I3(me("policySettings")?.env, "policySettings"));
}
function kMt() {
  return g(zE(), i());
}
function g(s, n) {
  let r = new Set(Object.keys(n).map(item => item.toUpperCase())),
    t = {
      ...s
    };
  for (let e of Object.keys(t)) if (!(e in n) && r.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, n);
}
function c(...s) {
  let n = new Map();
  for (let t of s) for (let [key, value] of Object.entries(t)) n.set(key.toUpperCase(), {
    key: key,
    value: value
  });
  let r = {};
  for (let {
    key: key_2,
    value: value_2
  } of n.values()) r[key_2] = value_2;
  return r;
}
export { kMt };