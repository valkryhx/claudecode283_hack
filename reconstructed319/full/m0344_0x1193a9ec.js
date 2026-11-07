// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Kt
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  qg,
  JHn,
  NX
} from "B:/~BUN/root/chunk-m749kjym.js";

function i() {
  return c(NX(JHn(), "globalConfig"), Kt("userSettings") ? NX(be("userSettings")?.env, "userSettings") : {}, NX(be("flagSettings")?.env, "flagSettings"), NX(be("policySettings")?.env, "policySettings"))
}

function oX() {
  return g(qg(), i())
}

function g(s, n) {
  let r = new Set(Object.keys(n).map((e) => e.toUpperCase())),
    t = {
      ...s
    };
  for (let e of Object.keys(t))
    if (!(e in n) && r.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, n)
}

function c(...s) {
  let n = new Map;
  for (let t of s)
    for (let [e, o] of Object.entries(t)) n.set(e.toUpperCase(), {
      key: e,
      value: o
    });
  let r = {};
  for (let {
      key: t,
      value: e
    }
    of n.values()) r[t] = e;
  return r
}
export {
  oX
};
