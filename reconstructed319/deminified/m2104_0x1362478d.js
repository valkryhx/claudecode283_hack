// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { kre as serverName, o9 } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ri } from "B:/~BUN/root/chunk-3xdsa4p8.js";
var r = [{
  pluginSource: `${o9}@${ri}`,
  serverName: serverName,
  title: "Claude Test (built into Claude Code)",
  personOnly: !0
}];
function n9o(e, n) {
  return r.find(item => item.pluginSource === n && item.serverName === e)?.title;
}
function JRt(e, n) {
  return n9o(e, n) !== void 0;
}
function fsr(e, n) {
  return r.some(item => item.personOnly && item.serverName === e && (!n || item.pluginSource === n));
}
function evn(e, n, i, t) {
  return i === "password" && t.type === "string" && !("format" in t && t.format !== void 0) && !("enum" in t) && !("oneOf" in t) && JRt(e, n);
}
export { n9o, JRt, fsr, evn };