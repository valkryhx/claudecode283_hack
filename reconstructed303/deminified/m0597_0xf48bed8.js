// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { we, dP, Qgn, T$, J4, SF, t_ } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { vt, Qt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Wl, kA } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { wt, cB } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { TB, K3n } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { eS, id, Zd, Bcn } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { ht, VU } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { as } from "B:/~BUN/root/chunk-j97yjp75.js";
import { Wy, eRo, Bk, v9e } from "B:/~BUN/root/chunk-9w4ppz44.js";
import { ga } from "B:/~BUN/root/chunk-vqar0j99.js";
import { Zw, Hnn, $nn } from "B:/~BUN/root/chunk-74f4ssah.js";
import { Aae } from "B:/~BUN/root/chunk-yjayxywk.js";
import { HAt, Xit, pq, Zh } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { xp } from "B:/~BUN/root/chunk-k382hx6g.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { wRr } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
import { rv } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { Fu as name } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { o, M, T, u, De, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
function O(r, e) {
  for (let n of Object.values(e.tasks)) if (xp(n) && n.identity.agentName === r) return n.id;
  return;
}
function I(r, e, n) {
  e.update(r, a => ({
    ...a,
    awaitingPlanApproval: n !== null,
    pendingPlanApproval: n ? {
      requestId: n.requestId,
      answered: !1
    } : void 0
  }));
}
function tss(r, e, n, a) {
  let s = n.get(r);
  if (!s || !xp(s) || !s.awaitingPlanApproval) return null;
  switch (Hnn(s.pendingPlanApproval, e)) {
    case "mismatch":
      return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`, {
        level: "warn"
      }), p("plan_approval", "request_binding_mismatch"), I(r, n, null), $nn(e);
    case "unbound":
      p("plan_approval", "verdict_unbound");
      break;
    case "bound":
      g("plan_approval");
      break;
    case "already_answered":
      return null;
  }
  if (!e.approved) return I(r, n, null), e;
  let permissionMode = z(e.permissionMode);
  return n.update(r, d => ({
    ...d,
    awaitingPlanApproval: !1,
    pendingPlanApproval: void 0,
    permissionMode: permissionMode
  })), wRr(s.identity.teamName, s.identity.agentName, permissionMode, a), e;
}
function z(r) {
  let e = Wl(kA(r ?? "default"));
  if (e === "bypassPermissions" && $E()) return "default";
  if (e === "auto" && !Zh()) return "default";
  return e;
}
class PlanPreconditionError extends Error {
  constructor(r) {
    super(r);
    this.name = "PlanPreconditionError";
  }
}
function Sxn(r) {
  if (!r || cB() !== "default") return "";
  return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ht} tool (pass a \`name\`) to parallelize the work.`;
}
var N = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${Xo} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${Xo} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${Xo} first, then use exit plan mode tool after clarifying the approach.
`;
var q = f(() => u({
    tool: U(["Bash"]).describe("The tool this prompt applies to"),
    prompt: o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')
  })),
  R = f(() => De({
    allowedPrompts: T(q()).optional().describe("Deprecated: no longer used.")
  }).passthrough()),
  Me = f(() => R().extend({
    plan: o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),
    planFilePath: o().optional().describe("The plan file path (injected by normalizeToolInput)")
  })),
  j = f(() => u({
    plan: o().nullable().describe("The plan that was presented to the user"),
    isAgent: M(),
    filePath: o().optional().describe("The file path where the plan was saved"),
    hasTaskTool: M().optional().describe("Whether the Agent tool is available in the current context"),
    planWasEdited: M().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),
    awaitingLeaderApproval: M().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),
    requestId: o().optional().describe("Unique identifier for the plan approval request")
  })),
  IY = Qt({
    name: name,
    searchHint: "present plan for approval and start coding (plan mode only)",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Prompts the user to exit plan mode and start coding";
    },
    async prompt() {
      return N;
    },
    get inputSchema() {
      return R();
    },
    get outputSchema() {
      return j();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      if (t_().length > 0 && we()) return !1;
      if (we() && !HAt(dP())) return !1;
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !1;
    },
    requiresUserInteraction() {
      if (Zd()) return !1;
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create(r) {
      return {
        async validateInput(e) {
          let n = r;
          if (n.agentContext.agentType === "subagent" && n.agentContext.isBuiltIn === !0 && n.agentContext.subagentName === VU && (Zd() || n.permissions().mode === "plan")) return {
            result: !1,
            message: "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",
            errorCode: 2
          };
          if (Zd()) return {
            result: !0
          };
          let mode = n.permissions().mode;
          if (mode !== "plan") return i("tengu_exit_plan_mode_called_outside_plan", {
            model: wt(n.mainLoopModel()),
            mode: c(mode),
            hasExitedPlanModeInSession: Qgn()
          }), {
            result: !1,
            message: `You are not in plan mode. To enter plan mode, call the ${rv} tool first. If your plan was already approved, continue with implementation.`,
            errorCode: 1
          };
          return {
            result: !0
          };
        },
        async checkPermissions(updatedInput) {
          if (Zd()) return {
            behavior: "allow",
            updatedInput: pq(name, updatedInput)
          };
          return {
            behavior: "ask",
            message: "Exit plan mode?",
            updatedInput: updatedInput
          };
        },
        async call(e, {
          onProgress: onProgress
        }) {
          let a = r,
            s = null,
            m = null;
          [s, m] = await Promise.all([import("B:/~BUN/root/chunk-td5tng5p.js"), import("B:/~BUN/root/chunk-frjvph5p.js")]);
          let isAgent = !!a.agentId,
            d = Bk(a.agentId),
            b = "plan" in e && typeof e.plan === "string" ? e.plan : void 0;
          Wy(d);
          let w = b ?? (await v9e(a.agentId, a.storageV5));
          if (b !== void 0 && d) await eRo(d, b, a.storageV5), Xit(a.storageV5);
          if (Zd() && Bcn()) {
            if (!w) throw new PlanPreconditionError(`No plan file found at ${d}. Please write your plan to this file before calling ExitPlanMode.`);
            let l = eS() || "unknown",
              y = id(),
              requestId = K3n("plan_approval", TB(l, y || "default")),
              k = {
                type: "plan_approval_request",
                from: l,
                timestamp: new Date().toISOString(),
                planFilePath: d,
                planContent: w,
                requestId: requestId
              };
            if ((await Zw("team-lead", {
              from: l,
              text: _(k),
              timestamp: new Date().toISOString()
            }, y, a.storageV5)) === void 0) throw new PlanPreconditionError("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");
            let E = O(l, {
              tasks: a.tasks() ?? {}
            });
            if (E) I(E, a.taskRegistry, {
              requestId: requestId
            });else ga().swarmPermissions.pendingPlanApproval = {
              requestId: requestId,
              answered: !1
            };
            return {
              data: {
                plan: w,
                isAgent: !0,
                filePath: d,
                awaitingLeaderApproval: !0,
                requestId: requestId
              }
            };
          }
          let x = null;
          {
            let l = a.permissions().prePlanMode ?? "default";
            if (l === "auto" && !(m?.isAutoModeGateEnabled() ?? !1)) {
              let y = m?.getAutoModeUnavailableReason() ?? "circuit-breaker";
              x = m?.getAutoModeUnavailableNotification(y) ?? "auto mode unavailable", t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${y}) \u2014 falling back to default on plan exit`, {
                level: "warn"
              });
            }
          }
          if (x) onProgress?.({
            type: "notification",
            notification: {
              key: "auto-mode-gate-plan-exit-fallback",
              text: `plan exit \u2192 default \xB7 ${x}`,
              priority: "immediate",
              color: "warning",
              timeoutMs: 1e4
            }
          });
          let S = a.permissions();
          if (S.mode === "plan") {
            T$(!0), J4(!0);
            let l = S.prePlanMode ?? "default";
            {
              if (l === "auto" && !(m?.isAutoModeGateEnabled() ?? !1)) l = "default";
              let k = l === "auto",
                h = s?.isAutoModeActive() ?? !1;
              if (s?.setAutoModeActive(k), h && !k) SF(!0);
            }
            Aae({
              from: "plan",
              to: l,
              trigger: "exit_plan_mode"
            });
            let y = l === "auto",
              strippedDangerousRules = S.strippedDangerousRules;
            a.setToolPermissionContext(k => {
              let h = k;
              if (y) h = m?.stripDangerousPermissionsForAutoMode(h) ?? h;else if (strippedDangerousRules) h = m?.restoreDangerousPermissions(h) ?? h;
              return {
                ...h,
                mode: l,
                prePlanMode: void 0
              };
            });
          }
          let C = as() && a.tools.some(item => vt(item, ht));
          return {
            data: {
              plan: w,
              isAgent: isAgent,
              filePath: d,
              hasTaskTool: C || void 0,
              planWasEdited: b !== void 0 || void 0
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      isAgent: isAgent_2,
      plan: plan,
      filePath: filePath,
      hasTaskTool: hasTaskTool,
      planWasEdited: planWasEdited,
      awaitingLeaderApproval: awaitingLeaderApproval,
      requestId: requestId_2
    }, tool_use_id) {
      if (awaitingLeaderApproval) return {
        type: "tool_result",
        content: `Your plan has been submitted to the team lead for approval.

Plan file: ${filePath}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${requestId_2}`,
        tool_use_id: tool_use_id
      };
      if (isAgent_2) return {
        type: "tool_result",
        content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
        tool_use_id: tool_use_id
      };
      if (!plan || plan.trim() === "") return {
        type: "tool_result",
        content: "User has approved exiting plan mode. You can now proceed.",
        tool_use_id: tool_use_id
      };
      let b = Sxn(Boolean(hasTaskTool));
      return {
        type: "tool_result",
        content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${filePath}
You can refer back to it if needed during implementation.${b}

## ${planWasEdited ? "Approved Plan (edited by user)" : "Approved Plan"}:
${plan}`,
        tool_use_id: tool_use_id
      };
    }
  });
export { tss, Sxn, IY };