// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  el,
  Ie
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  co
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  randomUUID as a
} from "crypto";
var u = "repl-error-";

function vVt(e, {
  clientsDrawCalls: t,
  shownOnCall: s,
  stoppedBy: o,
  withheldScriptToolUseId: r
}) {
  let n = `${u}${a()}`,
    i = t && {
      visibleToRemoteClients: !0
    };
  return [{
    ...el({
      content: [{
        type: "tool_use",
        id: n,
        name: co,
        input: {}
      }],
      isVirtual: !0
    }),
    ...i,
    ...s && {
      scriptErrorCopy: !0
    }
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
        ...o !== void 0 && {
          stoppedBy: o
        },
        ...s && {
          shownOnCall: !0
        }
      },
      isVirtual: !0
    }),
    turnCompanion: !0,
    ...i,
    ...t && {
      remoteToolResult: {
        kind: "stored",
        text: e
      }
    },
    ...r !== void 0 && {
      withheldScriptToolUseId: r
    }
  }]
}
export {
  vVt
};
