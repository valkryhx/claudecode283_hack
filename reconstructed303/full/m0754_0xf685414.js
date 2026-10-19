// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  zn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  Qxr,
  Zxr
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  We,
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];

function s(l) {
  if (l === We) return We;
  if (l === xt) return xt;
  return null
}

function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === We ? Qxr(o, e) : Zxr(o, e)) ? "dangerous_prefix" : "scoped"
}

function y(l) {
  let e = {},
    o = 0;
  for (let r of p)
    for (let t of l[r] ?? []) {
      let {
        toolName: f,
        ruleContent: S
      } = zn(t), n = s(f);
      if (n === null) continue;
      let u = m(n, S);
      if (u === null) continue;
      let a = `${r}_${n}_${u}`;
      e[a] = (e[a] ?? 0) + 1, o++
    }
  return e.total_shell_allow_rules = o, e
}

function M7o(l) {
  i("tengu_shell_allow_rules_at_init", y(l))
}

function Bsr(l) {
  for (let e of l) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let r = s(o.toolName);
      if (r === null) continue;
      let t = m(o.toolName, o.ruleContent);
      if (t === null) continue;
      i("tengu_shell_allow_rule_added", {
        toolName: c(r),
        category: c(t),
        destination: c(e.destination)
      })
    }
  }
}
export {
  M7o,
  Bsr
};
