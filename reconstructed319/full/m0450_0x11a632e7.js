// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nU
} from "B:/~BUN/root/chunk-50p1vzkm.js";

function see(n) {
  if (n?.kind !== "task-notification") return n;
  let e = nU(n.runId);
  return {
    kind: "task-notification",
    ...n.subkind !== void 0 && {
      subkind: n.subkind
    },
    ...n.fireReason !== void 0 && {
      fireReason: n.fireReason
    },
    ...n.producer !== void 0 && {
      producer: n.producer
    },
    ...e !== void 0 && {
      runId: e
    },
    ...n.taskKind === "mcp-task" && {
      taskKind: n.taskKind
    }
  }
}

function ez(n, e, t) {
  let i = see(n) ?? (e === "task-notification" ? {
      kind: "task-notification"
    } : void 0),
    d = nU(t);
  return d !== void 0 && i?.kind === "task-notification" && i.runId === void 0 ? {
    ...i,
    runId: d
  } : i
}

function fX(n) {
  return n?.kind === "task-notification" && n.producer === "session-task"
}

function n3(n) {
  return n?.kind === "task-notification" && Object.keys(n).every((e) => e === "kind" || e === "producer" || e === "runId" || e === "taskKind")
}

function gCe(n, e) {
  return n3(n) && (fX(n) || e === !0)
}
export {
  see,
  ez,
  fX,
  n3,
  gCe
};
