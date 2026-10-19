// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Eu } from "B:/~BUN/root/chunk-a0k8qg0d.js";
var e = "self_hosted_runner_";
function TVt(n) {
  return n.startsWith(e);
}
function RXo(n) {
  return Eu([...n]).some(TVt);
}
function r(n) {
  return Eu([n]).filter(item => !TVt(item)).join(",");
}
function EYr(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return Eu([t]).some(TVt);
}
function AXo(n) {
  let tools = n.tools;
  if (tools === void 0) return n;
  let tools_2 = typeof tools === "string" ? tools : String(tools);
  if (!EYr(tools_2)) return typeof tools === "string" ? n : {
    ...n,
    tools: tools_2
  };
  return {
    ...n,
    tools: r(tools_2)
  };
}
export { TVt, RXo, EYr, AXo };