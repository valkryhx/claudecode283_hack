// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
var wqt = "CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE";
function Per() {
  let {
    columns: columns,
    rows: rows
  } = process.stdout;
  if (!columns || !rows) return {};
  return {
    [wqt]: `${columns}x${rows}`
  };
}
function ili() {
  let CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE = i.CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE;
  if (delete process.env[wqt], CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE === void 0 || !process.stdout.isTTY) return;
  let e = /^([1-9]\d{0,3})x([1-9]\d{0,3})$/.exec(CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE);
  if (!e) return;
  process.stdout.columns ||= Number(e[1]), process.stdout.rows ||= Number(e[2]);
}
export { wqt, Per, ili };