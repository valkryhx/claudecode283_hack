// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var ATr = ["mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__"];
var _vs = "mcp__claude-device__chrome_",
  Lue = ["mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...ATr];
function r(_) {
  if (!_.startsWith("mcp__claude-device__chrome_")) return null;
  let e = _.slice(27);
  return e === "" || e.startsWith("_") || e.includes("__") ? null : e;
}
function bvs(_) {
  let e = r(_);
  return e === null ? _ : "mcp__claude-in-chrome__" + e;
}
function yWi(_, e) {
  let n = r(_);
  return n !== null && e === "chrome_" + n ? n : e;
}
var regExp = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");
function Qho(_) {
  return _.replace(regExp, e => e === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : bvs(e));
}
function Ov(_) {
  return Lue.some(item => _.startsWith(item));
}
function vNt(_) {
  return ATr.some(item => _.startsWith(item));
}
export { ATr, _vs, Lue, bvs, yWi, Qho, Ov, vNt };