// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { Hae } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { es } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Ut } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { Ei } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { YC } from "B:/~BUN/root/chunk-qp0344nb.js";
function Bve(e) {
  for (let n of [e?.request_id, e?.suppressed_request_id]) if (typeof n === "string" && n.length > 0) return n;
  return;
}
var g = 32;
function p(e) {
  let {
    display_tool_name: display_tool_name,
    raw_command: raw_command
  } = e;
  return {
    tool_name: e.tool_name,
    ...(display_tool_name === void 0 ? {} : {
      display_tool_name: display_tool_name
    }),
    action_description: es(e.action_description, YC),
    ...(raw_command === void 0 ? {} : {
      raw_command: es(raw_command, YC)
    }),
    tool_use_id: e.tool_use_id,
    request_id: e.request_id,
    ...(e.suppressed_request_id === void 0 ? {} : {
      suppressed_request_id: e.suppressed_request_id
    }),
    ...(e.decision_reason_type === void 0 ? {} : {
      decision_reason_type: e.decision_reason_type
    }),
    ...(e.decision_reason_code === void 0 ? {} : {
      decision_reason_code: e.decision_reason_code
    })
  };
}
function UEo(e, n) {
  return [e, ...n.slice(0, g - 1).map(p)];
}
function Kzn(e) {
  switch (e?.cross_session_inbound) {
    case "unavailable":
      return {
        acceptsPeerMessages: !1
      };
    case "available":
      return {
        acceptsPeerMessages: !0
      };
    default:
      return;
  }
}
var qAr = 60000;
class Rrn {
  stateChanged = Me();
  userDecisionPendingChanged = Me();
  userDecisionsPending = 0;
  onStateChanged;
  getPendingActionDetails;
  heldRequiresAction;
  onWaitingOnUserChanged;
  onTurnStarting;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState = "idle";
  hasPendingAction = !1;
  hasTaskSummary = !1;
  hasTerminalGoalSnapshot = !1;
  mainLoopRefcount = 0;
  nestedBlockedChains = Object.create(null);
  nestedBlockedChainCount = 0;
  droppedChainAgentIds = Object.create(null);
  nestedChainUnparks = Object.create(null);
  lastWaitingOnUser = !1;
  chainExcessLogged = !1;
  beginUserDecision() {
    if (this.userDecisionsPending += 1, this.userDecisionsPending === 1) d(this.userDecisionPendingChanged, !0);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (this.userDecisionsPending -= 1, this.userDecisionsPending === 0) d(this.userDecisionPendingChanged, !1);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    this.mainLoopRefcount = e, this.emitIfWaitingChanged();
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let waitingOnUser = this.waitingOnUser;
    if (waitingOnUser !== this.lastWaitingOnUser) this.lastWaitingOnUser = waitingOnUser, this.onWaitingOnUserChanged?.(waitingOnUser);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged) this.chainExcessLogged = !0, X("warn", "nested_chain_count_exceeds_refcount", {
        nested_blocked_chain_count: this.nestedBlockedChainCount,
        main_loop_refcount: this.mainLoopRefcount,
        session_state: this.currentState
      });
    } else this.chainExcessLogged = !1;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    if (a.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let n = this.nestedBlockedChains[e] ?? 0;
    if (this.nestedBlockedChains[e] = n + 1, n === 0) {
      if (this.nestedBlockedChainCount++, this.nestedBlockedChainCount <= this.mainLoopRefcount) this.nestedChainUnparks[e] = Hae();
    }
    this.emitIfWaitingChanged();
  }
  notifyNestedPromptUnblocking(e) {
    let n = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (n > 0) this.nestedBlockedChains[e] = n;else if (this.nestedBlockedChains[e] !== void 0) this.removeChain(e);
    this.emitIfWaitingChanged();
  }
  removeChain(e) {
    delete this.nestedBlockedChains[e], this.nestedBlockedChainCount--, this.nestedChainUnparks[e]?.(), delete this.nestedChainUnparks[e];
  }
  dropNestedBlockedChain(e) {
    if (this.droppedChainAgentIds[e] = !0, this.nestedBlockedChains[e] !== void 0) this.removeChain(e), this.emitIfWaitingChanged();
  }
  notifyTurnStarting(e, n) {
    this.onTurnStarting?.(e, n);
  }
  notifyStateChanged(state, n) {
    if (this.currentState = state, this.lastWaitingOnUser = this.waitingOnUser, this.onStateChanged?.(state, n), d(this.stateChanged, state, n), state === "requires_action" && n) this.hasPendingAction = !0, this.onMetadataChanged?.(this.pendingActionPatch(n));else if (this.hasPendingAction) this.hasPendingAction = !1, this.onMetadataChanged?.({
      pending_action: null,
      pending_actions: null
    });
    if (state === "running") this.wipeTurnScopedMetadata();
    if (state === "idle" && this.hasTaskSummary) this.hasTaskSummary = !1, this.notifyMetadataChanged({
      task_summary: null
    });
    if (a.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) Ei({
      type: "system",
      subtype: "session_state_changed",
      state: state
    });else if (a.CLAUDE_CODE_SDK_READS_SESSION_STATE) Ei({
      type: "system",
      subtype: "session_state_changed",
      state: state,
      sdk_host_only: !0
    });
  }
  republishPendingAction(e) {
    this.hasPendingAction = !0, this.onMetadataChanged?.(this.pendingActionPatch(e));
  }
  pendingTurnEndSummary;
  holdTurnEndSummary(promise, deadlineAt) {
    let t = {
        promise: promise,
        deadlineAt: deadlineAt,
        settled: !1,
        superseded: !1
      },
      i = () => {
        t.settled = !0;
      };
    return promise.then(i, i), this.pendingTurnEndSummary = t, t;
  }
  turnEndSummaryOutstanding(e = performance.now()) {
    let pendingTurnEndSummary = this.pendingTurnEndSummary;
    return pendingTurnEndSummary !== void 0 && !pendingTurnEndSummary.settled && e < pendingTurnEndSummary.deadlineAt;
  }
  supersedeTurnEndSummary() {
    let pendingTurnEndSummary_2 = this.pendingTurnEndSummary;
    if (pendingTurnEndSummary_2 !== void 0 && !pendingTurnEndSummary_2.settled) pendingTurnEndSummary_2.superseded = !0;
  }
  waitForTurnEndSummary() {
    let pendingTurnEndSummary_3 = this.pendingTurnEndSummary;
    if (pendingTurnEndSummary_3 === void 0 || !this.turnEndSummaryOutstanding()) return;
    let abortController = new AbortController();
    return Promise.race([pendingTurnEndSummary_3.promise.catch(() => {}), Y(Math.max(0, Math.ceil(pendingTurnEndSummary_3.deadlineAt - performance.now()) + 1), abortController.signal)]).finally(() => abortController.abort());
  }
  wipeTurnScopedMetadata() {
    if (this.supersedeTurnEndSummary(), this.onMetadataChanged?.({
      post_turn_summary: null,
      recap: null
    }), this.hasTerminalGoalSnapshot) this.hasTerminalGoalSnapshot = !1, this.onMetadataChanged?.({
      goal: null
    });
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = !0;
  }
  pendingActionPatch(pending_action) {
    let t = (this.getPendingActionDetails?.(pending_action.request_id) ?? []).filter(item => item !== pending_action).reverse();
    return {
      pending_action: pending_action,
      pending_actions: UEo(pending_action, t)
    };
  }
  notifyMetadataChanged(e, n) {
    if ("post_turn_summary" in e && n?.turnEndVerdict !== !0) this.supersedeTurnEndSummary();
    if (this.onMetadataChanged?.(e), "is_ultracode_active" in e && this.onMetadataChanged) this.ultracodeActiveSent = e.is_ultracode_active === !0, this.ultracodeActiveWritten = !0;
    if ("goal" in e) this.hasTerminalGoalSnapshot = e.goal?.met === !0;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = !0;
      Ei({
        type: "system",
        subtype: "task_summary",
        detail: e.task_summary ?? null
      });
    }
    if ("artifacts" in e) Ei({
      type: "system",
      subtype: "session_metadata",
      metadata: {
        artifacts: e.artifacts
      }
    });
  }
  ultracodeActiveSent = !1;
  ultracodeActiveWritten = !1;
  ultracodeActivePatch(e) {
    return e === this.ultracodeActiveSent ? {} : {
      is_ultracode_active: e || null
    };
  }
  notifyUltracodeActive(e) {
    let n = this.ultracodeActivePatch(e);
    if ("is_ultracode_active" in n) this.notifyMetadataChanged(n);
  }
  settleUltracodeActive(e, n) {
    if (!this.ultracodeActiveWritten) this.ultracodeActiveSent = n?.readFailed === !0 ? void 0 : n?.external?.is_ultracode_active === !0;
    this.notifyUltracodeActive(e);
  }
  workerPermissionModeRecordEnabled = !1;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = !0;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}
function BEo(e, n, t) {
  let i = [];
  if (e.length > 0) {
    let r = e.map(item => `- ${Ut(item.description || "(no description)")} (task ${Ut(item.task_id)})`);
    i.push(`The following background tasks were running and are now stopped:
${r.join(`
`)}
${t ? `${t} Re-create anything else` : "Re-create them"} if still needed.`);
  }
  if (n.length > 0) {
    let r = n.map(item => de() ? void 0 : item.output_file),
      o = n.map((item, index) => {
        let u = r[index],
          h = u ? `output: ${Ut(u)}` : "no output file";
        return `- ${Ut(item.description || "(no description)")} (task ${Ut(item.task_id)}), status ${Ut(item.status)}, ${h}`;
      }),
      c = r.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
    i.push(`These background tasks finished before the restart, but their results were not delivered to you:
${o.join(`
`)}
${c}`);
  }
  return `<system-reminder>
The container was restarted. ${i.join(`
`)}
</system-reminder>`;
}
function d(e, ...n) {
  try {
    e.emit(...n);
  } catch (error) {
    l(error);
  }
}
export { Bve, UEo, Kzn, qAr, Rrn, BEo };