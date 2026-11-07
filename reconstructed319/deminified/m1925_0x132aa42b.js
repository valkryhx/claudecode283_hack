// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { H5i } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Cn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { _c } from "B:/~BUN/root/chunk-kd0f2gn5.js";
function TVt(e, t, s) {
  return () => {
    if (s?.aborted === !0) return;
    let n = t();
    return e.getCommandQueueSnapshot().some(o) || e.someSubmissionInFlight(r => u(r, n)) || (s === void 0 ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand(r => u(r, n)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(o)) ? void 0 : n;
  };
}
function u(e, t) {
  return o(e) && (e.uuid === void 0 || t.findLast(s => s.uuid === e.uuid) === void 0);
}
function o(e) {
  if (!_c(e)) return !1;
  switch (e.mode) {
    case "task-notification":
      return !1;
    case "poll-event":
      {
        let t = e.pollEvent?.provenance?.authority;
        return t !== void 0 && t !== "peer-agent" && t !== "world-event";
      }
    case "prompt":
    case "bash":
      return H5i(e);
    case "orphaned-permission":
      return !0;
  }
  return !0;
}
var d = () => {};
function QXn(agentId, t, s) {
  let n = () => {
      let i = t.get(agentId);
      return Cn(i) ? i : void 0;
    },
    r = () => n()?.status === "running",
    a = () => m(n(), s);
  return {
    turn: {
      agentId: agentId,
      guard: {
        get isActive() {
          return r();
        },
        get isRunning() {
          return r();
        },
        isDispatchingForModel: !1,
        subscribe: () => d
      },
      get abortController() {
        return n()?.abortController ?? null;
      },
      readEvidence: () => ({
        isHeldByDialog: !1,
        isToolCallStarting: (t.getTranscript(agentId)?.inProgressToolUseIDs.size ?? 0) > 0,
        isCompacting: !1,
        isMainRequestAnnounced: !1
      }),
      interruptForSubmit: void 0,
      endsUnmovableShells: !1
    },
    messageQueue: {
      getCommandQueueSnapshot: a,
      getCommandQueue: a,
      subscribe: () => d,
      isFoldInFlight: () => !1,
      isMidTurnFoldSuspended: () => !1,
      promoteToNow: () => !1,
      demoteFromNow: () => !1
    },
    transcript: {
      getSnapshot: () => g(t.getTranscript(agentId)?.messages ?? [], m(n()))
    }
  };
}
function m(e, t) {
  if (e === void 0) return [];
  let s = [];
  for (let n of e.pendingMessages) {
    let uuid = t !== void 0 ? t.get(n) : n.origin?.kind === "human" ? n.shownAs : void 0;
    if (uuid !== void 0) s.push({
      value: n.text,
      mode: "prompt",
      uuid: uuid,
      agentId: Pr(e.agentId),
      origin: n.origin
    });
  }
  return s;
}
function g(e, t) {
  if (t.length === 0) return e;
  let s = new Set(t.map(item => item.uuid));
  return e.filter(item => !s.has(item.uuid));
}
export { TVt, QXn };