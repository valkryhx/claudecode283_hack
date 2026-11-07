// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { vf as v, WFn, Igo, Yq } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { xg } from "B:/~BUN/root/chunk-3xdsa4p8.js";
var bke = "request_reauthored",
  n = 5000;
function AXs(o, e) {
  if (e.gate_mark !== bke || o.tool_use_id !== e.tool_use_id) return {
    ok: !1,
    why: "malformed"
  };
  let i = {
      v: v,
      call_id: o.tool_use_id,
      expires_in_ms: Yq(e.deadline_ms - n)
    },
    caller = {
      kind: "ccr_container",
      tool_host_interface: o.tool_host_interface
    };
  switch (o.step) {
    case "check":
      return {
        ok: !1,
        why: "malformed"
      };
    case "run":
      return Igo({
        ...i,
        caller: {
          ...caller,
          permission_mode: o.permission_context.mode,
          model: o.main_loop_model,
          ...xg(o, [WFn, "conversation_id", "compaction_id"])
        },
        ...(o.approval !== void 0 && {
          approval: {
            ask_id: o.approval.ask_digest,
            decision: "allow",
            ...xg(o.approval, ["attested", "permission_updates"])
          }
        })
      });
    case "decline":
      return Igo({
        ...i,
        caller: caller,
        approval: {
          ask_id: o.ask_digest,
          decision: "deny"
        }
      });
  }
}
export { bke, AXs };