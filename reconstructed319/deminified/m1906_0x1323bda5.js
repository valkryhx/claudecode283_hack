// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { el, Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
import { co as name } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { randomUUID as a } from "crypto";
var u = "repl-error-";
function vVt(e, {
  clientsDrawCalls: clientsDrawCalls,
  shownOnCall: shownOnCall,
  stoppedBy: stoppedBy,
  withheldScriptToolUseId: withheldScriptToolUseId
}) {
  let n = `${u}${a()}`,
    i = clientsDrawCalls && {
      visibleToRemoteClients: !0
    };
  return [{
    ...el({
      content: [{
        type: "tool_use",
        id: n,
        name: name,
        input: {}
      }],
      isVirtual: !0
    }),
    ...i,
    ...(shownOnCall && {
      scriptErrorCopy: !0
    })
  }, {
    ...Ie({
      content: [{
        type: "tool_result",
        tool_use_id: n,
        content: e,
        is_error: !0
      }],
      toolUseResult: {
        error: e,
        ...(stoppedBy !== void 0 && {
          stoppedBy: stoppedBy
        }),
        ...(shownOnCall && {
          shownOnCall: !0
        })
      },
      isVirtual: !0
    }),
    turnCompanion: !0,
    ...i,
    ...(clientsDrawCalls && {
      remoteToolResult: {
        kind: "stored",
        text: e
      }
    }),
    ...(withheldScriptToolUseId !== void 0 && {
      withheldScriptToolUseId: withheldScriptToolUseId
    })
  }];
}
export { vVt };