// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  yr
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  Gho,
  Vho
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];

function i(r) {
  if (r === Me) return Me;
  if (r === kt) return kt;
  return null
}

function m(r, e) {
  let o = i(r);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === Me ? Gho(o, e) : Vho(o, e)) ? "dangerous_prefix" : "scoped"
}

function y(r) {
  let e = {},
    o = 0;
  for (let t of p)
    for (let n of r[t] ?? []) {
      let {
        toolName: c,
        ruleContent: S
      } = yr(n), s = i(c);
      if (s === null) continue;
      let u = m(s, S);
      if (u === null) continue;
      let a = `${t}_${s}_${u}`;
      e[a] = (e[a] ?? 0) + 1, o++
    }
  return e.total_shell_allow_rules = o, e
}

function zti(r) {
  l("tengu_shell_allow_rules_at_init", y(r))
}

function xKr(r) {
  for (let e of r) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let t = i(o.toolName);
      if (t === null) continue;
      let n = m(o.toolName, o.ruleContent);
      if (n === null) continue;
      l("tengu_shell_allow_rule_added", {
        toolName: f(t),
        category: f(n),
        destination: f(e.destination)
      })
    }
  }
}
export {
  zti,
  xKr
};
