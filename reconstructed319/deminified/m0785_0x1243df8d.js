// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { KM, jre } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
function jhe(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom";
}
function Mit() {
  let e = Cr()?.outputStyle ?? KM;
  if (e === KM) return "repl_main_thread";
  return Object.hasOwn(jre, e) ? `repl_main_thread:outputStyle:${e}` : "repl_main_thread:outputStyle:custom";
}
export { jhe, Mit };