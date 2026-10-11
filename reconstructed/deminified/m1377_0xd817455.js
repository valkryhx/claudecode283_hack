// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { NJ } from "B:/~BUN/root/chunk-rwwxddqq.js";
var m = {
    reason: 2000,
    stopReason: 2000,
    systemMessage: 4000,
    additionalContext: 8000,
    permissionDecisionReason: 2000
  },
  additionalContext = 200,
  S = {
    reason: 20,
    stopReason: 20,
    systemMessage: 20,
    additionalContext: additionalContext,
    permissionDecisionReason: 20
  };
function UQn(n, e, i = additionalContext) {
  let o = n.replace(/\r\n?/g, `
`).split(`
`),
    s = o.slice(0, i).map(item => NJ(item.replace(/\t/g, " "))).join(`
`);
  return {
    text: re(s, e).replace(/\n+$/, ""),
    truncated: o.length > i || s.length > e
  };
}
function d(n, e, i) {
  if (typeof i !== "string") return;
  let {
    text: text,
    truncated: truncated
  } = UQn(i, m[e], S[e]);
  if (truncated) n.report.truncated.push(e);
  return text.trim() === "" ? void 0 : text;
}
function t(n, e, i) {
  if (i && !n.report.dropped.includes(e)) n.report.dropped.push(e);
}
function r(n, hookEventName, i) {
  let additionalContext_2 = d(n, "additionalContext", i.additionalContext);
  return {
    hookEventName: hookEventName,
    ...(additionalContext_2 !== void 0 && {
      additionalContext: additionalContext_2
    })
  };
}
function k(n, e, i) {
  if (e.hookEventName !== i) {
    t(n, "hookSpecificOutput_event_mismatch", !0);
    return;
  }
  switch (e.hookEventName) {
    case "PreToolUse":
      {
        let o = e.permissionDecision === "deny" || e.permissionDecision === "ask";
        t(n, "allow", e.permissionDecision === "allow"), t(n, "defer", e.permissionDecision === "defer"), t(n, "updatedInput", e.updatedInput !== void 0), t(n, "permissionDecisionReason", !o && e.permissionDecisionReason !== void 0);
        let permissionDecisionReason = o ? d(n, "permissionDecisionReason", e.permissionDecisionReason) : void 0,
          additionalContext_3 = d(n, "additionalContext", e.additionalContext);
        return {
          hookEventName: "PreToolUse",
          ...(o && {
            permissionDecision: e.permissionDecision
          }),
          ...(permissionDecisionReason !== void 0 && {
            permissionDecisionReason: permissionDecisionReason
          }),
          ...(additionalContext_3 !== void 0 && {
            additionalContext: additionalContext_3
          })
        };
      }
    case "UserPromptSubmit":
      return t(n, "sessionTitle", e.sessionTitle !== void 0), {
        ...r(n, "UserPromptSubmit", e),
        ...(e.suppressOriginalPrompt === !0 && {
          suppressOriginalPrompt: !0
        })
      };
    case "PostToolUse":
      return t(n, "updatedToolOutput", e.updatedToolOutput !== void 0), t(n, "updatedMCPToolOutput", e.updatedMCPToolOutput !== void 0), t(n, "classifierContext", e.classifierContext !== void 0), r(n, "PostToolUse", e);
    case "UserPromptExpansion":
      return {
        ...r(n, "UserPromptExpansion", e),
        ...(e.suppressOriginalPrompt === !0 && {
          suppressOriginalPrompt: !0
        })
      };
    case "PostToolUseFailure":
      return r(n, "PostToolUseFailure", e);
    case "PostToolBatch":
      return r(n, "PostToolBatch", e);
    case "Stop":
      return r(n, "Stop", e);
    case "SubagentStop":
      return r(n, "SubagentStop", e);
    case "SubagentStart":
      return r(n, "SubagentStart", e);
    case "PermissionDenied":
      return t(n, "retry", e.retry !== void 0), {
        hookEventName: "PermissionDenied"
      };
    default:
      t(n, "hookSpecificOutput_unsupported_event", !0);
      return;
  }
}
function RPe(n, e) {
  let i = {
    report: {
      dropped: [],
      truncated: []
    }
  };
  if ("async" in n) return t(i, "async", !0), {
    answer: {},
    report: i.report
  };
  let o = n;
  t(i, "approve", o.decision === "approve"), t(i, "reason", o.decision === "approve" && o.reason !== void 0), t(i, "terminalSequence", o.terminalSequence !== void 0), t(i, "metrics", o.metrics !== void 0), t(i, "rewakeSummary", o.rewakeSummary !== void 0);
  let stopReason = d(i, "stopReason", o.stopReason),
    reason = o.decision === "approve" ? void 0 : d(i, "reason", o.reason),
    systemMessage = d(i, "systemMessage", o.systemMessage),
    hookSpecificOutput = o.hookSpecificOutput,
    c = typeof hookSpecificOutput === "object" && hookSpecificOutput !== null && !Array.isArray(hookSpecificOutput);
  t(i, "hookSpecificOutput_not_object", hookSpecificOutput !== void 0 && !c);
  let hookSpecificOutput_2 = c ? k(i, hookSpecificOutput, e) : void 0;
  return {
    answer: {
      ...(o.continue === !1 && {
        continue: !1
      }),
      ...(o.suppressOutput === !0 && {
        suppressOutput: !0
      }),
      ...(stopReason !== void 0 && {
        stopReason: stopReason
      }),
      ...(o.decision === "block" && {
        decision: "block"
      }),
      ...(systemMessage !== void 0 && {
        systemMessage: systemMessage
      }),
      ...(reason !== void 0 && {
        reason: reason
      }),
      ...(hookSpecificOutput_2 !== void 0 && {
        hookSpecificOutput: hookSpecificOutput_2
      })
    },
    report: i.report
  };
}
function Ly(n) {
  if ("decision" in n && n.decision === "block") return !0;
  if ("continue" in n && n.continue === !1) return !0;
  let e = "hookSpecificOutput" in n ? n.hookSpecificOutput : void 0;
  return e !== void 0 && typeof e === "object" && e !== null && "permissionDecision" in e && (e.permissionDecision === "deny" || e.permissionDecision === "ask");
}
function BQn(n) {
  if ("decision" in n && n.decision === "block") return !0;
  let e = "hookSpecificOutput" in n ? n.hookSpecificOutput : void 0;
  return e !== void 0 && typeof e === "object" && e !== null && "permissionDecision" in e && e.permissionDecision === "deny";
}
export { UQn, RPe, Ly, BQn };