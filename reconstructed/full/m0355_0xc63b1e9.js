// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
var bMt = "io.modelcontextprotocol/skills";

function TS() {
  return x("tengu_mcp_skills", !1)
}

function Jin(e) {
  return TS() && !!e?.resources && _Ir(e)
}

function _Ir(e) {
  return e?.extensions?.[bMt] !== void 0
}
export {
  bMt,
  TS,
  Jin,
  _Ir
};
