// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
function KKo({
  toolUseID: n,
  parentToolUseID: s,
  data: data,
  withheldInput: withheldInput
}) {
  if (data.scriptHelper === !0) return;
  let t = withheldInput ?? (D(data.toolInput) ? data.toolInput : {});
  return {
    type: "tool_progress",
    tool_use_id: n,
    tool_name: data.toolName,
    parent_tool_use_id: s,
    elapsed_time_seconds: 0,
    inner_call: {
      tool_name: data.toolName,
      tool_input: t,
      tool_use_id: data.toolUseId,
      phase: data.phase,
      ...(withheldInput !== void 0 && {
        input_withheld: !0
      })
    },
    repl_call: {
      inner_tool_name: data.toolName,
      inner_tool_input: t,
      inner_tool_use_id: data.toolUseId,
      phase: data.phase
    }
  };
}
export { KKo };