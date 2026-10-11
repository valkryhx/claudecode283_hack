// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Jn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Hzn, Fzn } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
var p = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];
function s(l) {
  if (l === Ue) return Ue;
  if (l === St) return St;
  return null;
}
function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === Ue ? Hzn(o, e) : Fzn(o, e)) ? "dangerous_prefix" : "scoped";
}
function y(l) {
  let e = {},
    o = 0;
  for (let r of p) for (let t of l[r] ?? []) {
    let {
        toolName: toolName,
        ruleContent: ruleContent
      } = Jn(t),
      n = s(toolName);
    if (n === null) continue;
    let u = m(n, ruleContent);
    if (u === null) continue;
    let a = `${r}_${n}_${u}`;
    e[a] = (e[a] ?? 0) + 1, o++;
  }
  return e.total_shell_allow_rules = o, e;
}
function BJr(l) {
  i("tengu_shell_allow_rules_at_init", y(l));
}
function mEn(l) {
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
      });
    }
  }
}
export { BJr, mEn };