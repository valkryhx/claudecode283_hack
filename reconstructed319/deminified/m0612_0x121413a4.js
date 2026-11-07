// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Eu } from "B:/~BUN/root/chunk-44q965xg.js";
var e = "self_hosted_runner_";
function $yn(n) {
  return n.startsWith(e);
}
function xJn(n) {
  return Eu([...n]).some($yn);
}
function Bzo(n) {
  return Eu([n]).filter(item => !$yn(item)).join(",");
}
function jzo(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return Eu([t]).some($yn);
}
function Oti(n) {
  let tools = n.tools;
  if (tools === void 0) return n;
  let tools_2 = typeof tools === "string" ? tools : String(tools);
  if (!jzo(tools_2)) return typeof tools === "string" ? n : {
    ...n,
    tools: tools_2
  };
  return {
    ...n,
    tools: Bzo(tools_2)
  };
}
export { $yn, xJn, Bzo, jzo, Oti };