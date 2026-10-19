// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ZA,
  l9
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  nr
} from "B:/~BUN/root/chunk-1gpjpba6.js";

function Toe(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom"
}

function bKe() {
  let e = nr()?.outputStyle ?? ZA;
  if (e === ZA) return "repl_main_thread";
  return Object.hasOwn(l9, e) ? `repl_main_thread:outputStyle:${e}` : "repl_main_thread:outputStyle:custom"
}
export {
  Toe,
  bKe
};
