// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
var _7e = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function xKt() {
  let {
    columns: columns,
    rows: rows
  } = process.stdout;
  if (!columns || !rows) return {};
  return {
    [_7e]: `${columns}x${rows}`
  };
}
function M7r() {
  let CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE = a.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if (delete process.env[_7e], CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE === void 0 || !process.stdout.isTTY) return;
  let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE);
  if (!e) return;
  process.stdout.columns ||= Number(e[1]), process.stdout.rows ||= Number(e[2]);
}
export { _7e, xKt, M7r };