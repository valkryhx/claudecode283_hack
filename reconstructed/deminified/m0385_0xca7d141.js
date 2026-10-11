// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Op } from "B:/~BUN/root/chunk-1f9marcm.js";
var r = "self_hosted_runner_";
function e(n) {
  return n.startsWith(r);
}
function JVo(n) {
  return Op([...n]).some(e);
}
function s(n) {
  return Op([n]).filter(item => !e(item)).join(",");
}
function C_n(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return Op([t]).some(e);
}
function IXn(n) {
  let tools = n.tools;
  if (tools === void 0) return n;
  let tools_2 = typeof tools === "string" ? tools : String(tools);
  if (!C_n(tools_2)) return typeof tools === "string" ? n : {
    ...n,
    tools: tools_2
  };
  return {
    ...n,
    tools: s(tools_2)
  };
}
export { JVo, C_n, IXn };