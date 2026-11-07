// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function C4e() {
  return !1;
}
var s = /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function kd() {
  {
    let argv = process.argv;
    if (argv[2] !== "mcp" || argv[3] !== "serve") return !1;
    let [,, t, ...r] = argv.slice(2),
      n = t === "--transport=http" ? r : t === "--transport" && r[0] === "http" ? r.slice(1) : void 0;
    return C4e() && n !== void 0 && n.every(item => s.test(item));
  }
  return !1;
}
export { C4e, kd };