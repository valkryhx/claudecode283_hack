// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t, _, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Uy } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { Hee } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { QSt, Mna, Ydn } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { Ti, zyt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Os } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Xt } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { Wv } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { dirname as b, join as A, posix as S, relative as w, sep as C } from "path";
var R = 1024,
  T = "";
function _kr(e) {
  return zyt() ? void 0 : e;
}
function K_s(e) {
  let n = QSt(),
    s = e === void 0 ? void 0 : g(e, Ydn(e)),
    r = n === void 0 ? void 0 : g(n, Mna());
  return s === void 0 || r === void 0 ? void 0 : w(s, r).split(C).join("/") || ".";
}
function m$i(e) {
  return typeof e?.shell === "string" && e.directory !== void 0 ? S.relative(e.directory.path, e.shell) || "." : void 0;
}
function Hfo(e) {
  if (e === void 0) return;
  return typeof e === "string" && e.length <= R ? e : T;
}
function h$i(e, n) {
  if (n === ".") return e;
  let s = n.split("/");
  return s.every(item => item !== "" && item !== "." && item !== ".." && !item.includes("\\") && !P(item)) ? A(e, ...s) : void 0;
}
function g$i(e, n) {
  let s = QSt();
  if (s === void 0 || K_s(e) !== n) return !1;
  try {
    if (n === ".") return ie().statSync(s).isDirectory();
    let r = s;
    for (let o = Dt(n, "/") + 1; o > 0; o--) {
      if (!ie().lstatSync(r).isDirectory()) return !1;
      r = b(r);
    }
    return !0;
  } catch (error) {
    let o = k(error);
    if (o === void 0) a(error);else t(`Late-approved call not run: could not examine its directory ${s} (${o}), so a symbolic link in it cannot be ruled out`, {
      level: "warn"
    });
    return !1;
  }
}
function g(e, n) {
  if (n === void 0) return e;
  return n ? En(n) : void 0;
}
function P(e) {
  for (let n = 0; n < e.length; n++) {
    let s = e.charCodeAt(n);
    if (s < 32 || s === 127) return !0;
  }
  return !1;
}
function $2(e) {
  for (let n of [e?.request_id, e?.suppressed_request_id]) if (typeof n === "string" && n.length > 0) return n;
  return;
}
var bkr = 32,
  E = 4096,
  D = 32768,
  weakMap = new WeakMap();
function p(e, n) {
  let {
      display_tool_name: display_tool_name,
      raw_command: raw_command
    } = e,
    input = n ? e.input : void 0;
  return {
    tool_name: e.tool_name,
    ...(display_tool_name === void 0 ? {} : {
      display_tool_name: display_tool_name
    }),
    action_description: Os(e.action_description, Wv),
    ...(raw_command === void 0 ? {} : {
      raw_command: input === void 0 ? Os(raw_command, Wv) : raw_command
    }),
    tool_use_id: e.tool_use_id,
    ...(input === void 0 ? {} : {
      input: input
    }),
    request_id: e.request_id,
    ...(e.suppressed_request_id === void 0 ? {} : {
      suppressed_request_id: e.suppressed_request_id
    }),
    ...(e.decision_reason_type === void 0 ? {} : {
      decision_reason_type: e.decision_reason_type
    }),
    ...(e.decision_reason_code === void 0 ? {} : {
      decision_reason_code: e.decision_reason_code
    }),
    ...(e.agent_id === void 0 ? {} : {
      agent_id: e.agent_id
    }),
    ...(e.chrome_site === void 0 ? {} : {
      chrome_site: e.chrome_site
    }),
    ...(e.asked_in_directory === void 0 ? {} : {
      asked_in_directory: Hfo(e.asked_in_directory)
    })
  };
}
function j0n(e, n) {
  let s = D;
  return [e, ...n.slice(0, bkr - 1).map(item => {
    if (item.input === void 0) return p(item, !1);
    let o = weakMap.get(item);
    if (o === void 0) o = Buffer.byteLength(_(item.input), "utf8"), weakMap.set(item, o);
    let d = o + Buffer.byteLength(item.raw_command ?? "", "utf8"),
      c = o <= E && d <= s;
    if (c) s -= d;
    return p(item, c);
  })];
}
function f(e) {
  let n = Os(e, Wv);
  return n.length <= 4 * Wv ? n : `${Q(n, 4 * Wv - 1)}\u2026`;
}
function Skr(e) {
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
var $fo = 60000;
class W0n {
  stateChanged = De();
  pendingActionWritten = De();
  userDecisionPendingChanged = De();
  userDecisionsPending = 0;
  onStateChanged;
  getPendingActionDetails;
  leadsWithOldestCard = !1;
  slimsRefusedLead = !1;
  storedAnswerStands = new WeakSet();
  slimLeads = new WeakSet();
  writtenLead;
  pendingActionLeadRequestId;
  heldRequiresAction;
  onWaitingOnUserChanged;
  onTurnStarting;
  onTurnBeganBeforeInit;
  onMetadataChanged;
  onInternalMetadataChanged;
  keepsSessionRules;
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
    if (this.userDecisionsPending += 1, this.userDecisionsPending === 1) l(this.userDecisionPendingChanged, !0);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (this.userDecisionsPending -= 1, this.userDecisionsPending === 0) l(this.userDecisionPendingChanged, !1);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    if (this.mainLoopRefcount = e, e > 0 && this.resumableOrphanedAgents.length > 0) this.restartNoticeShown = !0;
    this.emitIfWaitingChanged();
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let waitingOnUser = this.waitingOnUser;
    if (waitingOnUser !== this.lastWaitingOnUser) this.lastWaitingOnUser = waitingOnUser, this.onWaitingOnUserChanged?.(waitingOnUser);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged) this.chainExcessLogged = !0, V("warn", "nested_chain_count_exceeds_refcount", {
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
    if (i.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let n = this.nestedBlockedChains[e] ?? 0;
    if (this.nestedBlockedChains[e] = n + 1, n === 0) {
      if (this.nestedBlockedChainCount++, this.nestedBlockedChainCount <= this.mainLoopRefcount) this.nestedChainUnparks[e] = Hee();
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
  notifyTurnBeganBeforeInit() {
    this.onTurnBeganBeforeInit?.();
  }
  notifyStateChanged(state, n) {
    if (this.currentState = state, this.lastWaitingOnUser = this.waitingOnUser, this.onStateChanged?.(state, n), l(this.stateChanged, state, n), state === "requires_action" && n) this.republishPendingAction(n);else if (this.hasPendingAction) this.hasPendingAction = !1, this.pendingActionLeadRequestId = void 0, this.writtenLead = void 0, this.onMetadataChanged?.({
      pending_action: null,
      pending_actions: null
    }), l(this.pendingActionWritten, null);
    if (state === "running") this.wipeTurnScopedMetadata();
    if (state === "idle" && this.hasTaskSummary) this.hasTaskSummary = !1, this.notifyMetadataChanged({
      task_summary: null
    });
    if (i.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) Ti({
      type: "system",
      subtype: "session_state_changed",
      state: state
    });else if (i.CLAUDE_CODE_SDK_READS_SESSION_STATE) Ti({
      type: "system",
      subtype: "session_state_changed",
      state: state,
      sdk_host_only: !0
    });
  }
  republishPendingAction(e) {
    this.hasPendingAction = !0;
    let {
      lead: lead,
      patch: patch
    } = this.pendingActionPatch(e);
    this.onMetadataChanged?.(patch), l(this.pendingActionWritten, lead);
  }
  leadRecordRefused(e) {
    let writtenLead = this.writtenLead,
      slimsRefusedLead = this.slimsRefusedLead;
    if (writtenLead === void 0 || e.tool_use_id !== writtenLead.tool_use_id || $2(e) !== $2(writtenLead)) return !1;
    if (this.storedAnswerStands.delete(writtenLead), !(typeof slimsRefusedLead === "function" ? slimsRefusedLead(writtenLead) : slimsRefusedLead) || this.slimLeads.has(writtenLead) || writtenLead.tool_name.startsWith("dialog:")) return !1;
    return this.slimLeads.add(writtenLead), this.republishPendingAction(writtenLead), !0;
  }
  forgetWrittenLead() {
    this.writtenLead = void 0;
  }
  noteStoredAnswerStands(e) {
    this.storedAnswerStands.add(e);
  }
  doesStoredAnswerStand(e) {
    return this.storedAnswerStands.has(e);
  }
  isWrittenSlim(e) {
    return this.slimLeads.has(e);
  }
  pendingTurnEndSummary;
  holdTurnEndSummary(promise, deadlineAt) {
    let s = {
        promise: promise,
        deadlineAt: deadlineAt,
        settled: !1,
        superseded: !1,
        endedAt: void 0,
        ended: Promise.withResolvers()
      },
      r = () => {
        s.settled = !0;
      };
    return promise.then(r, r), this.pendingTurnEndSummary = s, s;
  }
  turnEndSummaryOutstanding(e = performance.now()) {
    let pendingTurnEndSummary = this.pendingTurnEndSummary;
    return pendingTurnEndSummary !== void 0 && !pendingTurnEndSummary.settled && pendingTurnEndSummary.endedAt === void 0 && e < pendingTurnEndSummary.deadlineAt;
  }
  endTurnEndSummaryHold() {
    let pendingTurnEndSummary_2 = this.pendingTurnEndSummary;
    if (pendingTurnEndSummary_2 !== void 0 && this.turnEndSummaryOutstanding()) pendingTurnEndSummary_2.superseded = !0, pendingTurnEndSummary_2.endedAt = performance.now(), pendingTurnEndSummary_2.ended.resolve();
  }
  supersedeTurnEndSummary() {
    let pendingTurnEndSummary_3 = this.pendingTurnEndSummary;
    if (pendingTurnEndSummary_3 !== void 0 && !pendingTurnEndSummary_3.settled) pendingTurnEndSummary_3.superseded = !0;
  }
  waitForTurnEndSummary() {
    let pendingTurnEndSummary_4 = this.pendingTurnEndSummary;
    if (pendingTurnEndSummary_4 === void 0 || !this.turnEndSummaryOutstanding()) return;
    let abortController = new AbortController();
    return Promise.race([pendingTurnEndSummary_4.promise.catch(() => {}), pendingTurnEndSummary_4.ended.promise, J(Math.max(0, Math.ceil(pendingTurnEndSummary_4.deadlineAt - performance.now()) + 1), abortController.signal)]).finally(() => abortController.abort());
  }
  wipeTurnScopedMetadata() {
    if (this.supersedeTurnEndSummary(), this.onMetadataChanged?.({
      post_turn_summary: null,
      recap: null
    }), this.hasTerminalGoalSnapshot) this.hasTerminalGoalSnapshot = !1, this.onMetadataChanged?.({
      goal: null
    });
  }
  adoptRestoredGoalSnapshot() {
    this.hasTerminalGoalSnapshot = !0;
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = !0;
  }
  pendingActionPatch(e) {
    let n = this.getPendingActionDetails?.($2(e) ?? e.request_id) ?? [],
      lead_2 = (this.leadsWithOldestCard && n.includes(e) ? n.find(item => item.agent_id === void 0 && !item.tool_name.startsWith("dialog:")) : void 0) ?? e;
    this.pendingActionLeadRequestId = $2(lead_2), this.writtenLead = lead_2;
    let r = n.filter(item => item !== lead_2).reverse(),
      pending_action = this.slimLeads.has(lead_2) ? {
        ...p(lead_2, !1),
        ...(lead_2.display_tool_name !== void 0 && {
          display_tool_name: f(lead_2.display_tool_name)
        }),
        action_description: f(lead_2.action_description),
        raw_command: void 0,
        input: void 0,
        ...(lead_2.request_id && {
          request_id: "",
          suppressed_request_id: lead_2.request_id,
          blanked_for_size: !0
        })
      } : lead_2;
    return {
      lead: lead_2,
      patch: {
        pending_action: pending_action,
        pending_actions: j0n(pending_action, pending_action === lead_2 ? r : r.map(item => ({
          ...item,
          input: void 0
        })))
      }
    };
  }
  notifyMetadataChanged(e) {
    if ("post_turn_summary" in e) this.supersedeTurnEndSummary();
    if (this.onMetadataChanged?.(e), "is_ultracode_active" in e && this.onMetadataChanged) this.ultracodeActiveSent = e.is_ultracode_active === !0, this.ultracodeActiveWritten = !0;
    if ("goal" in e) this.hasTerminalGoalSnapshot = e.goal?.met === !0;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = !0;
      Ti({
        type: "system",
        subtype: "task_summary",
        detail: e.task_summary ?? null
      });
    }
    if ("artifacts" in e) Ti({
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
  resumableOrphanedAgents = [];
  picturesToHide;
  restartNoticeShown = !1;
  markResumableOrphanedAgentsToldAtTurnEnd() {
    if (this.restartNoticeShown && this.resumableOrphanedAgents.some(item => item.told !== !0)) {
      let resumable_orphaned_agents = this.resumableOrphanedAgents.map(item => ({
        ...item,
        told: !0
      }));
      this.resumableOrphanedAgents = resumable_orphaned_agents, this.notifyInternalMetadataChanged({
        resumable_orphaned_agents: resumable_orphaned_agents
      });
    }
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
var M = new Set(["local_bash", "monitor_mcp", "monitor_ws"]),
  x = "In this session every process left running is likely stopped a few minutes after each reply, so a command you re-create now will likely be stopped after your next reply too: run in the foreground, with a long enough `timeout`, any that must finish and can finish within the foreground maximum, and otherwise tell the user it will likely be stopped a few minutes after your reply.";
function q_s(e, n, s) {
  let r = [];
  if (e.length > 0) {
    let o = e.map(item => `- ${Xt(item.description || "(no description)")} (task ${Xt(item.task_id)})`);
    r.push(`The following background tasks were running and are now stopped:
${o.join(`
`)}
${s ? `${s} Re-create anything else` : "Re-create them"} if still needed.${Uy() && e.some(item => M.has(item.task_type ?? "")) ? ` ${x}` : ""}`);
  }
  if (n.length > 0) {
    let o = n.map(item => q() ? void 0 : item.output_file),
      d = n.map((item, index) => {
        let h = o[index],
          v = h ? `output: ${Xt(h)}` : "no output file";
        return `- ${Xt(item.description || "(no description)")} (task ${Xt(item.task_id)}), status ${Xt(item.status)}, ${v}`;
      }),
      c = o.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
    r.push(`These background tasks finished before the restart, but their results were not delivered to you:
${d.join(`
`)}
${c}`);
  }
  return `<system-reminder>
The container was restarted. ${r.join(`
`)}
</system-reminder>`;
}
function l(e, ...n) {
  try {
    e.emit(...n);
  } catch (error) {
    a(error);
  }
}
export { _kr, K_s, m$i, Hfo, h$i, g$i, $2, bkr, j0n, Skr, $fo, W0n, q_s };