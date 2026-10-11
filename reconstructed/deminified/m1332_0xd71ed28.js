// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f9n, f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { jhe, lC, Tx, eDo, Gte, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y, Y8n } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { We, ul, Ke, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Fv, ode, SUt, r1r, vUt, s1r, Z5e as decisionReason_2 } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { b, J, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tr, bmt } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { wt, po } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { K, y_e } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { fo } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { LN } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { d$e, tLo, nLo, i$r, wFt, a$r, l$r, c$r, d$r, Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Pv } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { zs } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { pee, GL, P9 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { px, SHe, LF } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Nxo, H2n, Hxo } from "B:/~BUN/root/chunk-msy8grqx.js";
import { lN } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { XH, xMn, BG, xfe, Apo, die, xpo, c_r, xDn, d_r, pZ, fZ, IRt, Pfe, L8 as tool_name_3, PW, IW, hVe, Bp, N8, JDn, LA, yp, WRt, vfo, cLn, UMe, $ve, FO } from "B:/~BUN/root/chunk-3jyp964r.js";
import { js } from "B:/~BUN/root/chunk-5nfpvvfh.js";
import { hz, wTe, Ge } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { Eo, fb } from "B:/~BUN/root/chunk-8zp66ckr.js";
import { _Ke as tool_name_2, Ann } from "B:/~BUN/root/chunk-90zbw58x.js";
import { wS } from "B:/~BUN/root/chunk-aa7kpy4p.js";
import { Zct, Kcn, EIo, TIo, Ycn } from "B:/~BUN/root/chunk-9qtz41py.js";
import { Jho, BFn } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { vze, u4 } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { W8t } from "B:/~BUN/root/chunk-m1w9mh9e.js";
import { uue } from "B:/~BUN/root/chunk-7dcxj0fe.js";
import { f7r, Mor, YIe } from "B:/~BUN/root/chunk-egpv5jmj.js";
import { FSt, $St, Psr, USt } from "B:/~BUN/root/chunk-dxbqhx2r.js";
import { iIt } from "B:/~BUN/root/chunk-467d5w8j.js";
import { Q4e } from "B:/~BUN/root/chunk-1c4bpcdy.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { Dr as toolName } from "B:/~BUN/root/chunk-c4gqp24s.js";
import { IS } from "B:/~BUN/root/chunk-xvp1x16p.js";
import { Ug } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { QR, o, M, eK, ae, C, u, $e, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var ft = f(() => u({
    tool_name: o().describe("The name of the tool requesting permission"),
    input: fe(o(), ae()).describe("The input for the tool"),
    tool_use_id: o().optional().describe("The unique tool use request ID")
  })),
  ue = f(() => z(["user_temporary", "user_permanent", "user_reject"]).optional().catch(void 0)),
  ve = f(() => u({
    behavior: A("allow"),
    updatedInput: fe(o(), ae()).optional(),
    updatedPermissions: C(GL()).optional().catch(s => {
      t(`Malformed updatedPermissions from SDK host ignored: ${s.error.issues[0]?.message ?? "unknown"}`, {
        level: "warn"
      });
      return;
    }),
    toolUseID: o().optional(),
    decisionClassification: ue()
  })),
  qe = f(() => u({
    behavior: A("deny"),
    message: o(),
    interrupt: M().optional(),
    toolUseID: o().optional(),
    decisionClassification: ue()
  })),
  xre = f(() => $e([ve(), qe()])),
  T_n = "Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}.";
function B(s, e, n, r, p) {
  if (r.forRemoteExecution === !0 || Tx(r)) return;
  if (s && e.suppressesAllPermissionUpdates?.(n) === !0) {
    let h = IW(s);
    return h.length > 0 ? h : void 0;
  }
  return s && (e.suppressesAlwaysAllowRule?.(n) === !0 || p) ? PW(s, e, me(r)) : s;
}
function W(s, e, n, r, p, h) {
  switch (s.kind) {
    case "launcher":
      {
        let m = B(e, n, r, p, h);
        if (m?.length) p.setSessionToolPermissionContext(R => px(R, m)), LF(m, p.storageV5).catch(d);
        return m ?? [];
      }
    case "strict":
      return xDn(s, e, {
        vetoed: () => !1,
        strip: m => B(m, n, r, p, h) ?? [],
        toolName: Ug(n),
        setContext: p.setSessionToolPermissionContext
      });
  }
}
function oXe(s, toolResult, n, r, p, h = n, m = !1) {
  let decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: n.name,
    toolResult: toolResult
  };
  if (toolResult.behavior === "allow") {
    let g = toolResult.updatedPermissions?.findLast(_ => _.type === "setMode")?.mode;
    if (g === "default" || g === "acceptEdits") d$e(g);
    switch (s.kind) {
      case "launcher":
        {
          W(s, toolResult.updatedPermissions, h, r, p, m);
          let updatedInput = toolResult.updatedInput && Object.keys(toolResult.updatedInput).length > 0 ? toolResult.updatedInput : BG(h.name, r);
          return {
            ...toolResult,
            updatedInput: updatedInput,
            decisionReason: decisionReason
          };
        }
      case "strict":
        {
          let updatedInput_2 = Apo(toolResult.updatedInput, r, h);
          if (updatedInput_2 === void 0) return die(h.name, toolResult.toolUseID);
          return W(s, toolResult.updatedPermissions, h, r, p, m), {
            ...toolResult,
            updatedInput: updatedInput_2,
            decisionReason: decisionReason
          };
        }
    }
  } else if (toolResult.behavior === "deny" && toolResult.interrupt) t(`SDK permission prompt deny+interrupt: tool=${n.name} message=${toolResult.message}`), lN(p.abortController).abort();
  return {
    ...toolResult,
    decisionReason: decisionReason,
    decideLocation: "ask-path"
  };
}
import { randomUUID as Ae } from "crypto";
function Q(s, e, n) {
  if (a.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let r = setTimeout((p, storageV5, credentials) => {
    FO(XH(), {
      message: `Claude needs your permission to use ${p}`,
      notificationType: "permission_prompt"
    }, {
      storageV5: storageV5,
      credentials: credentials
    }).catch(() => {});
  }, WRt, s, e, n);
  return r.unref(), () => clearTimeout(r);
}
var we = "tengu_cinder_swift";
function G() {
  return x(we, "off") === "interrupt";
}
function Z(s, e) {
  try {
    return s.getToolUseSummary?.(e) ?? s.getActivityDescription?.(e) ?? "";
  } catch (error) {
    return t(`describeToolUseForPush failed: ${error}`, {
      level: "error"
    }), "";
  }
}
function Pe(s, e) {
  if (!s.requiresUserInteraction?.()) return;
  switch (s.name) {
    case js:
      {
        let n = Array.isArray(e?.questions) ? e.questions : [],
          r = n[0],
          p = r?.header || r?.question,
          h = n.length > 1 ? ` (+${n.length - 1} more)` : "";
        return {
          label: "Question",
          body: p ? p + h : "Tap to answer"
        };
      }
    case IS:
      return {
        label: "Plan",
        body: "Plan ready for review"
      };
    case Q4e:
      return {
        label: u4(s.name),
        body: ""
      };
    default:
      return {
        label: u4(s.name),
        body: ""
      };
  }
}
function de(s, input, tool_use_id, suppressed_request_id, p) {
  let h = Pe(s, input);
  if (h) return {
    tool_name: s.name,
    display_tool_name: h.label,
    action_description: h.body,
    raw_command: void 0,
    tool_use_id: tool_use_id,
    request_id: "",
    ...(suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input
  };
  let raw_command = (s.name === Ue || s.name === St) && typeof input.command === "string" ? qo(input.command) : void 0,
    action_description = raw_command !== void 0 ? typeof input.description === "string" && input.description ? qo(input.description) : fo(raw_command, Pv) : qo(Z(s, input));
  return {
    tool_name: s.name,
    display_tool_name: u4(s.name),
    action_description: action_description,
    raw_command: raw_command,
    tool_use_id: tool_use_id,
    request_id: p?.localDisplayOnly === !0 ? "" : suppressed_request_id,
    ...(p?.localDisplayOnly === !0 && suppressed_request_id && {
      suppressed_request_id: suppressed_request_id
    }),
    input: input
  };
}
function le(s, e) {
  return async (tool, r, p, h, m, R) => {
    let g;
    switch (s.kind) {
      case "launcher":
        g = R ?? (await Bp(tool, r, p, h, m));
        break;
      case "strict":
        g = R ?? (await N8(tool, r, p, h, m, s, void 0));
        break;
    }
    if (g.behavior === "allow") return g;
    if (g.behavior === "deny") {
      if (Eo() && !p.abortController.signal.aborted) return fb();
      return e.emitPermissionDenied(tool.name, m, p.agentId, g), g;
    }
    if (p.abortController.signal.aborted) return {
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: m,
      decisionReason: decisionReason_2,
      decideLocation: "ask-path"
    };
    if (Eo()) return fb();
    let input_2 = g.updatedInput ?? r,
      k = g.suggestions;
    if (tool.name === Ue && typeof input_2.command === "string" && k?.length && !k.some(item => item.destination !== "session")) k = [...IRt(input_2.command), ...k];
    let abortController = new AbortController(),
      q = p.abortController.signal,
      v = !1,
      w = () => {
        if (!Eo()) v = !0;
        abortController.abort();
      };
    q.addEventListener("abort", w, {
      once: !0
    });
    let S = Ae(),
      U = eDo(p.agentContext),
      N,
      P,
      V = !1;
    try {
      let L = (g.personOnly === !0 ? Promise.resolve(void 0) : SWt(s, tool, m, input_2, p, k, g.suppressAlwaysAllowRule === !0, () => V || q.aborted)).then(outcome => ({
        source: "hook",
        outcome: outcome
      }));
      if (L.catch(() => {}), e.promptShown) {
        let O = de(tool, input_2, m, S, {
          localDisplayOnly: g.localDisplayOnly === !0
        });
        N = U, e.promptShown(S, O, U, Gte(p.agentContext));
      }
      let decisionReason_3 = g.decisionReason,
        F = yp(decisionReason_3),
        Se = tool.name === Ue || tool.name === St,
        ee = (g.metadata && "command" in g.metadata ? g.metadata.command.description : void 0) || (Se && typeof input_2.command === "string" ? typeof input_2.description === "string" && input_2.description ? qo(input_2.description) : fo(qo(input_2.command), Pv) : Z(tool, input_2)) || void 0,
        decision_reason = $ve(decisionReason_3) ?? (decisionReason_3?.type === "subcommandResults" && F ? yp(decisionReason_3, O => !O.classifierApprovable && O.circuitBreaker !== "outsideReadsBlocked")?.reason ?? (F.circuitBreaker === "outsideReadsBlocked" ? void 0 : F.reason) : void 0),
        description = g.localDisplayOnly ? zs(wt(decision_reason ?? "")) || ee : ee,
        be = Pfe(Ug(tool)),
        ne = Q(u4(tool.name), p.storageV5, p.credentials),
        j = e.request({
          subtype: "can_use_tool",
          tool_name: tool.name,
          ...(tool.mcpInfo && {
            mcp_server: xMn(tool.mcpInfo)
          }),
          display_name: u4(tool.name),
          input: input_2,
          ...(description && {
            description: description
          }),
          ...(be && {
            tool_kind: "browser"
          }),
          permission_suggestions: k,
          blocked_path: g.blockedPath,
          decision_reason: decision_reason,
          decision_reason_type: decisionReason_3?.type,
          decision_reason_code: ode(decisionReason_3),
          ...(g.matchedAskRule && {
            matched_ask_rule: {
              source: g.matchedAskRule.source,
              tool_name: g.matchedAskRule.ruleValue.toolName,
              ...(g.matchedAskRule.ruleValue.ruleContent !== void 0 && {
                rule_content: g.matchedAskRule.ruleValue.ruleContent
              })
            }
          }),
          classifier_approvable: F ? !yp(decisionReason_3, O => !O.classifierApprovable) : void 0,
          tool_use_id: m,
          agent_id: p.agentId,
          suppress_always_allow_rule: g.suppressAlwaysAllowRule || void 0,
          default_to_no: g.defaultToNo || void 0,
          requires_user_interaction: tool.requiresUserInteraction?.() || g.localDisplayOnly || void 0
        }, abortController.signal, S).then(result => ({
          source: "sdk",
          result: result
        }));
      if (j.catch(() => {}), j.then(() => {
        V = !0;
      }, () => {
        V = !0;
      }), e.isPending(S)) P = {
        logContext: {
          tool: tool,
          input: input_2,
          messageId: h.message.id,
          toolUseID: m,
          permissionMode: me(p).mode,
          agentContext: p.agentContext,
          mcpClients: p.options.mcpClients,
          appliedAllowUpdates: O => {
            switch (s.kind) {
              case "launcher":
                return B(O, tool, input_2, p, g.suppressAlwaysAllowRule === !0);
              case "strict":
                return;
            }
          }
        },
        shownAtMs: Date.now()
      }, vfo(P.logContext, decisionReason_3?.type);
      j.then(ne, ne);
      let I = await Promise.race([L, j]);
      if (I.source === "hook") {
        if (I.outcome) {
          if (Eo() && !v) await fb();
          if (abortController.abort(), P) cLn(P.logContext, {
            kind: "hook",
            behavior: I.outcome.decision.behavior === "allow" ? "allow" : "deny",
            permanent: I.outcome.permanent
          }, P.shownAtMs);
          if (I.outcome.interrupt) t(`Hook interrupt: tool=${tool.name} hookMessage=${I.outcome.decision.message}`), lN(p.abortController).abort();
          return I.outcome.decision;
        }
      }
      let answer = I.source === "hook" ? (await j).result : I.result;
      if (P) cLn(P.logContext, {
        kind: "host_answer",
        answer: answer
      }, P.shownAtMs);
      let X = oXe(s, answer, tool, input_2, p, tool, g.suppressAlwaysAllowRule === !0);
      if (X.behavior === "allow" && e.answeredAtHostDialog(S) && p.forRemoteExecution !== !0 && H2n()) Hxo(p.session, m, {
        toolName: tool.name,
        input: X.updatedInput ?? input_2
      });
      return X;
    } catch (error) {
      if (Eo() && e.isPending(S)) await fb();
      if (e.interruptedAtStreamClose(S) && G()) {
        try {
          i("tengu_auq_park_interrupted_at_stream_close", {
            stream_closed: error instanceof ul
          }), t(`Interrupting parked AskUserQuestion toolUseID=${m} at stream close (deny skipped; turn aborts as shutdown)`);
        } catch {}
        throw error;
      }
      let message = xpo(s, error, tool.name),
        decisionReason_4 = s1r;
      if (error instanceof QR) t(`canUseTool returned a schema-invalid permission result for ${tool.name}: ${error.message.slice(0, 2000)}`, {
        level: "error"
      }), message = `The canUseTool callback returned an invalid permission result. ${T_n}`, decisionReason_4 = vUt;else if (error instanceof ul) decisionReason_4 = r1r;else if (Ke(error) && q.aborted) {
        if (message = "Tool permission request aborted", decisionReason_4 = decisionReason_2, P) cLn(P.logContext, {
          kind: "turn_aborted"
        }, P.shownAtMs);
      }
      return {
        behavior: "deny",
        message: message,
        toolUseID: m,
        decisionReason: decisionReason_4,
        decideLocation: "ask-path"
      };
    } finally {
      e.promptSettled(S, N), q.removeEventListener("abort", w);
    }
  };
}
async function SWt(s, e, toolUseId, r, p, h, m, R) {
  if (p.forRemoteExecution === !0) return;
  let mode = me(p).mode,
    _ = UMe(e.name, toolUseId, r, p, mode, h, p.abortController.signal);
  for await (let k of _) if (k.permissionRequestResult && (k.permissionRequestResult.behavior === "allow" || k.permissionRequestResult.behavior === "deny")) {
    let permissionRequestResult = k.permissionRequestResult;
    if (permissionRequestResult.behavior === "allow") {
      let q = permissionRequestResult.updatedInput;
      switch (s.kind) {
        case "launcher":
          break;
        case "strict":
          if (!xfe(q, r)) return {
            decision: die(e.name, toolUseId),
            interrupt: !1,
            permanent: !1
          };
          q = void 0;
          break;
      }
      if (pZ(e, r, q, !0)) return {
        decision: fZ(e, "PermissionRequest"),
        interrupt: !1,
        permanent: !1
      };
      let updatedInput_3 = q || r;
      if (q) {
        let S = hVe(await LA(e, updatedInput_3, {
          ...p,
          toolUseId: toolUseId
        }, {
          hookUpdatedInput: q
        }), e.name);
        if (S) return {
          decision: S.behavior === "ask" ? {
            behavior: "deny",
            message: S.message,
            decisionReason: S.decisionReason ?? SUt,
            decideLocation: "ask-path"
          } : {
            ...S,
            decideLocation: "ask-path"
          },
          interrupt: !1,
          permanent: !1
        };
      }
      if (!JDn(e, q) && e.requiresUserInteraction?.()) return;
      let w = R() ? [] : W(s, permissionRequestResult.updatedPermissions, e, r, p, m);
      return {
        decision: {
          behavior: "allow",
          updatedInput: updatedInput_3,
          userModified: !1,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        },
        interrupt: !1,
        permanent: w.some(item => SHe(item.destination))
      };
    } else return {
      decision: {
        behavior: "deny",
        message: permissionRequestResult.message || "Permission denied by PermissionRequest hook",
        decisionReason: {
          type: "hook",
          hookName: "PermissionRequest"
        },
        decideLocation: "ask-path"
      },
      interrupt: permissionRequestResult.interrupt === !0,
      permanent: !1
    };
  }
  return;
}
var De = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function Z_e(s) {
  return typeof s === "string" && De.test(s) ? s : void 0;
}
var Ce = ["interrupt", "can_use_tool", "initialize", "set_permission_mode", "set_model", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_status", "get_context_usage", "get_session_cost", "list_models", "get_usage", "get_memory_dialog", "get_skills_dialog", "get_chrome_dialog", "get_chrome_browsers", "select_chrome_browser", "get_sandbox_dialog", "get_status", "export_conversation", "get_binary_version", "mcp_call", "file_suggestions", "hook_callback", "mcp_message", "rewind_files", "cancel_async_message", "read_file", "get_workspace_diff", "get_plan", "seed_read_state", "mcp_set_servers", "register_repo_root", "reload_plugins", "reload_skills", "reload_output_styles", "mcp_reconnect", "mcp_toggle", "set_mcp_permission_mode_override", "set_chrome_browser_hints", "set_prompt_suggestions_paused", "set_cwd", "claim_session", "register_device_hooks", "upload_device_hook_template", "message_rated", "oauth_token_refresh", "host_auth_token_refresh", "stop_task", "background_tasks", "apply_flag_settings", "get_settings", "get_hooks_listing", "update_settings", "elicitation", "request_user_dialog", "submit_feedback", "remote_tools_announce", "remote_tool_call", "remote_plumbing_call", "remote_tools_probe", "remote_tools_reannounce", "remote_control_work_secret", "turn_handoff", "list_permission_rules", "mcp_read_resource"],
  Te = new Set(Ce);
function Tgt(s) {
  return typeof s === "string" && Te.has(s) ? s : void 0;
}
function Zxe(s) {
  return Math.round(performance.now() - s);
}
import { randomUUID as H } from "crypto";
var Oe = 30000,
  Ee = 30000,
  Ie = 45000,
  ce = new Set(["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN"]),
  Me = 300000,
  He = 70000,
  Le = 0.01,
  Ne = 262144,
  je = 1000,
  xe = f(() => Jho(d$r())),
  Fe = 268435456;
function pe(s) {
  return `Error: stream-json input carried over ${Math.round(s / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}
var Be = 64,
  ze = 1048576,
  he = 512;
function ge(s) {
  let e = P9().safeParse(s);
  if (!e.success) return null;
  return (typeof s === "object" && s !== null ? Object.keys(s).length : 0) > 0 && Object.keys(e.data).length === 0 ? null : e.data;
}
function _e(s) {
  let e = po(re(s, 4096), {
    maxCodeUnits: 512
  });
  return s.length > 512 ? `${e}\u2026 [${s.length} chars total]` : e;
}
function ye(s) {
  return typeof s === "string" ? po(re(s, 4096), {
    maxCodeUnits: 200
  }) : "a non-string error field";
}
function Ye(s, e) {
  if (s === "delivered" || e === "accepted") return "delivered";
  if (s === "indeterminate" || e === "indeterminate") return "indeterminate";
  return e === "sending" ? "sending" : "queued";
}
function Je(s) {
  switch (s) {
    case "delivered":
      return "delivered";
    case "queued":
      return "queued";
    case "sending":
      return "in_flight";
    case "indeterminate":
      return "indeterminate";
  }
}
class Pre {
  input;
  replayUserMessages;
  maxLineChars;
  isRemoteTransport() {
    return !1;
  }
  structuredInput;
  pendingRequests = new Map();
  sdkHostHookGeneration = 0;
  retiredHostHookAnswer;
  deviceRequests = new Map();
  publishedPendingActionDetails = new Map();
  backgroundPromptIds = new Set();
  flipBackLeftToUnpublishedAsk = !1;
  streamCloseInterruptRequestIds = new Set();
  hostDialogAttestations = new Map();
  timedOutUserDialogs = new Map();
  unansweredSettleHandlers = new Map();
  restoredWorkerState = Promise.resolve(null);
  rereadWorkerState() {
    return Promise.resolve(null);
  }
  readProjectsBinding() {
    return Promise.resolve({
      read: !0,
      assertion: void 0
    });
  }
  workerEpoch() {
    return 0;
  }
  hydratePrefetch = Promise.resolve(null);
  inputClosed = !1;
  hasUnconsumedInput = !1;
  tracksRequestDelivery = !1;
  unexpectedResponseCallback;
  unknownResponseDeferral;
  resolvedToolUseIds = new Set();
  prependedLines = [];
  parsingPrependedLine = !1;
  prependYielded = !1;
  locallyPrependedMessages = new WeakSet();
  prependWaker = null;
  stallTimer;
  stallFired = !1;
  sdkSchemaStretchSampled;
  sdkSchemaKept = new Map();
  sdkSchemaResultWritten = !1;
  sdkSchemaCheckTimer;
  createdAt = Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onStreamClosedWithParkedQuestion;
  onUserDialogParked;
  hostAnswersElicitations = !0;
  onCommandLifecycle;
  resultDelivery;
  commandLifecycleForwarderInstalled = !1;
  hostOwnsStdinOrigin = !0;
  persistsOutboundFrames = !1;
  get isHostedWorker() {
    return !1;
  }
  sessionState;
  outbound = new wS();
  constructor(s, e, n, r = Fe) {
    this.input = s;
    this.replayUserMessages = e;
    this.maxLineChars = r;
    this.input = s, this.sessionState = n ?? new iIt(), this.sessionState.getPendingActionDetails = p => {
      let h = [];
      for (let [m, R] of this.publishedPendingActionDetails) if (this.pendingRequests.has(m) || m === p) h.push(R);
      return h;
    }, this.sessionState.stateChanged.subscribe(p => {
      if (p !== "requires_action") this.flipBackLeftToUnpublishedAsk = !1;
      if (p === "idle") this.endSdkSchemaStretch();
    }), this.structuredInput = this.read();
  }
  trackResolvedToolUseId(s) {
    if (s.request.subtype === "can_use_tool") this.resolvedToolUseIds.add(s.request.tool_use_id);
    if (YIe(s)) Ycn(s.request_id);
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  droppedInternalEventBatches() {
    return 0;
  }
  withdrawQueuedRequest(s) {
    return !1;
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushClientEvents() {
    return Promise.resolve(!0);
  }
  flushInternalEventsConfirmed() {
    return Promise.resolve(!0);
  }
  flushSessionState() {
    return Promise.resolve(!0);
  }
  get internalEventsPending() {
    return 0;
  }
  repliesLeftForNextProcess = 0;
  prependUserMessage(content) {
    this.prependedLines.push(b({
      type: "user",
      session_id: "",
      message: {
        role: "user",
        content: content
      },
      parent_tool_use_id: null
    })), this.prependWaker?.();
  }
  isLocallyPrependedMessage(s) {
    return this.locallyPrependedMessages.has(s);
  }
  prependState() {
    if (this.prependedLines.length > 0 || this.parsingPrependedLine) return "unread";
    return this.prependYielded ? "yielded" : "none";
  }
  takeUserFrameReceivedWallMs(s) {
    return;
  }
  async *read() {
    let s = "",
      e = [],
      n = 0,
      r = !1,
      p = 0,
      h = 0,
      m = !1;
    function R(v) {
      if (p++, h += v.length, m) return;
      m = !0, Fv().then(() => {
        p = 0, h = 0, m = !1;
      });
    }
    let g = async function* () {
        for (;;) {
          if (p >= Be || h >= ze) await Fv(), p = 0, h = 0;
          let v = !1;
          while (this.prependedLines.length > 0) {
            let N = this.prependedLines.shift();
            v = !0, R(N), this.parsingPrependedLine = !0;
            let P;
            try {
              P = await this.processLine(N);
            } finally {
              this.parsingPrependedLine = !1;
            }
            if (P) {
              this.locallyPrependedMessages.add(P), K("info", "cli_stdin_message_parsed", ke(P)), this.prependYielded = !0;
              try {
                yield P;
              } finally {
                this.prependYielded = !1;
              }
            }
          }
          if (v) continue;
          let w = s.indexOf(`
`);
          if (w === -1) break;
          let S = s.slice(0, w);
          s = s.slice(w + 1), R(S);
          let U = await this.processLine(S);
          if (U) K("info", "cli_stdin_message_parsed", ke(U)), this.hasUnconsumedInput = s.trim().length > 0, yield U;
        }
        this.hasUnconsumedInput = s.trim().length > 0;
      }.bind(this),
      _ = this.input[Symbol.asyncIterator](),
      k = null,
      D = !1;
    try {
      for (;;) {
        if (r || this.prependedLines.length > 0) {
          if (e.length > 0) s += e.join(""), e = [];
          if (yield* g(), n = s.length, n > this.maxLineChars) K("warn", "cli_stream_json_line_budget", {
            at: "tail"
          }), await this.exitOnFatalInput(pe(this.maxLineChars));
          r = !1;
        }
        k ??= _.next();
        let v = await Promise.race([k.then(() => !1), new Promise(U => {
          this.prependWaker = () => U(!0);
        })]);
        if (this.prependWaker = null, v) continue;
        let w = await k;
        if (k = null, w.done) {
          D = !0;
          break;
        }
        n += w.value.length;
        let S = w.value.includes(`
`);
        if (!S && n > this.maxLineChars) K("warn", "cli_stream_json_line_budget", {
          at: "block"
        }), await this.exitOnFatalInput(pe(this.maxLineChars));
        if (e.push(w.value), S) r = !0;else if (!this.hasUnconsumedInput && /\S/.test(w.value)) this.hasUnconsumedInput = !0;
      }
    } finally {
      if (this.prependWaker = null, !D) await _.return?.();
    }
    if (e.length > 0) s += e.join(""), e = [];
    if (s) {
      let v = await this.processLine(s);
      if (v) yield v;
    }
    this.inputClosed = !0;
    let q = Eo();
    if (!q && G()) {
      for (let [v, w] of this.pendingRequests.entries()) if (!w.forwarded && w.request.request.subtype === "can_use_tool" && w.request.request.tool_name === js) this.streamCloseInterruptRequestIds.add(v);
      if (this.streamCloseInterruptRequestIds.size > 0) this.onStreamClosedWithParkedQuestion?.();
    }
    for (let v of this.pendingRequests.values()) {
      if (q && this.asksOurHuman(v)) continue;
      v.reject(new ul("Tool permission stream closed before response received"));
    }
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map(item => item.request).filter(item => item.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values()).map(item => item.request).filter(item => item.request.subtype === "request_user_dialog");
  }
  hasPendingPrompt() {
    for (let {
      request: request
    } of this.pendingRequests.values()) if (YIe(request)) return !0;
    return !1;
  }
  hasStandingPrompt() {
    if (this.sessionState.getState() !== "requires_action") return !1;
    if (this.flipBackLeftToUnpublishedAsk) return this.hasPendingPrompt();
    for (let s of this.publishedPendingActionDetails.keys()) if (this.pendingRequests.has(s)) return !0;
    return !1;
  }
  hasTurnPrompt() {
    for (let s of this.publishedPendingActionDetails.keys()) if (!this.backgroundPromptIds.has(s)) return !0;
    return !1;
  }
  retireSdkHostHookCallbacks(s) {
    this.sdkHostHookGeneration++, this.retiredHostHookAnswer = s;
    let e = 0;
    for (let [n, r] of Array.from(this.pendingRequests)) {
      let request_2 = r.request.request;
      if (request_2.subtype !== "hook_callback") continue;
      let h = s(request_2.input),
        m = r.schema ? r.schema.parse(h) : h;
      this.pendingRequests.delete(n), this.enqueueCancelRequest(n), r.resolve(m), e++;
    }
    return e;
  }
  republishSurvivingPendingAction() {
    let s;
    for (let [e, n] of this.publishedPendingActionDetails) if (this.pendingRequests.has(e)) s = n;
    if (!s) {
      this.flipBackLeftToUnpublishedAsk = this.sessionState.getState() === "requires_action";
      return;
    }
    this.sessionState.republishPendingAction(s), i("tengu_pending_action_republished", {
      survivor_kind: c(s.tool_name === tool_name_2 ? "elicitation" : s.tool_name.startsWith("dialog:") ? "dialog" : "permission"),
      pending_permission_requests: this.getPendingPermissionRequests().length,
      pending_dialog_requests: this.getPendingUserDialogRequests().length
    });
  }
  cancelPendingUserDialogs(s, e) {
    let n = 0;
    for (let {
      request: request_3
    } of Array.from(this.pendingRequests.values())) {
      if (request_3.request.subtype !== "request_user_dialog" || request_3.request.dialog_kind !== s) continue;
      if (!this.cancelDialogByMachine(request_3.request_id, "moved_on")) continue;
      i("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: pn(s),
        reason: c(e)
      }), n += 1;
    }
    return n;
  }
  cancelDialogByMachine(request_id, e) {
    if (!this.pendingRequests.has(request_id) || Eo()) return !1;
    let n = this.injectControlResponse({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id,
        response: {
          behavior: "cancelled"
        }
      }
    });
    if (n) this.unansweredSettleHandlers.get(request_id)?.(e);
    return n;
  }
  setUnexpectedResponseCallback(s) {
    this.unexpectedResponseCallback = s;
  }
  setUnknownResponseDeferral(s) {
    this.unknownResponseDeferral = s;
  }
  setMainLoopLiveness(s) {
    this.mainLoopLiveness = s;
  }
  mainLoopLiveness;
  ignoresErrorShapedDialogResponse(s, e) {
    if (e.subtype !== "error" || s.request.request.subtype !== "request_user_dialog" || s.forwarded) return !1;
    return i("tengu_request_user_dialog_response_ignored", {
      shape: c("error"),
      dialog_kind: pn(s.request.request.dialog_kind)
    }), t(`Ignoring error-shaped control_response for parked request_user_dialog request_id=${e.request_id} \u2014 not a human choice; dialog stays parked (error: ${ye(e.error)})`), !0;
  }
  asksOurHuman(s) {
    return !s.forwarded && YIe(s.request);
  }
  get pendingHumanRequestCount() {
    let s = 0;
    for (let e of this.pendingRequests.values()) if (this.asksOurHuman(e)) s++;
    return s;
  }
  ignoresResponseAtShutdown(s, e) {
    if (!this.asksOurHuman(s) || !Eo()) return !1;
    return t(`Leaving control_response for request_id=${e.request_id} to the next process \u2014 this one is shutting down and settles no question`), this.repliesLeftForNextProcess++, !0;
  }
  ignoresUnsettlingDeviceResponse(s, e) {
    let n = this.deviceRequests.get(e.request_id);
    if (!n) return !1;
    let subtype = s.request.request.subtype;
    if (e.subtype === "error") return n.errorRepliesIgnored += 1, t(`Ignoring error-shaped control_response for device ${subtype} request_id=${e.request_id} \u2014 not the device's answer; still waiting (error: ${ye(e.error)})`), !0;
    if (!n.accepts(e.response)) return n.malformedRepliesIgnored += 1, t(`Ignoring malformed control_response for device ${subtype} request_id=${e.request_id} \u2014 not an answer to it; still waiting`), !0;
    return !1;
  }
  hasCanUseToolNameMismatch(s, e) {
    let request_4 = s.request.request;
    if (request_4.subtype !== "can_use_tool" || e.subtype !== "success") return !1;
    return vze(e.response?.toolName, request_4.tool_name, e.request_id);
  }
  injectControlResponse(s) {
    let request_id_2 = s.response?.request_id;
    if (!request_id_2) return !1;
    let n = this.pendingRequests.get(request_id_2);
    if (!n) return i("tengu_inject_control_response_unknown_id", {
      pending_control_requests: this.pendingRequests.size
    }), !1;
    if (this.ignoresErrorShapedDialogResponse(n, s.response)) return !1;
    if (this.ignoresResponseAtShutdown(n, s.response)) return !1;
    if (this.ignoresUnsettlingDeviceResponse(n, s.response)) return !1;
    if (this.hasCanUseToolNameMismatch(n, s.response)) return !1;
    if (this.trackResolvedToolUseId(n.request), this.pendingRequests.delete(request_id_2), this.outbound.ended) this.write({
      type: "control_cancel_request",
      request_id: request_id_2
    }).catch(r => {
      t(`control_cancel_request for request_id=${request_id_2} not written: ${l(r)}`, {
        level: "error"
      });
    });else this.enqueueCancelRequest(request_id_2);
    if (s.response.subtype === "error") n.reject(Error(s.response.error));else {
      let response = s.response.response;
      if (n.schema) try {
        n.resolve(n.schema.parse(response));
      } catch (error) {
        n.reject(error);
      } else n.resolve({});
    }
    return !0;
  }
  setOnControlRequestSent(s) {
    this.onControlRequestSent = s;
  }
  setOnControlRequestResolved(s) {
    this.onControlRequestResolved = s;
  }
  setOnStreamClosedWithParkedQuestion(s) {
    this.onStreamClosedWithParkedQuestion = s;
  }
  async processLine(s) {
    if (!s.trim()) return;
    s = Jo(s);
    try {
      let e = Zct(J(s));
      if (e.type === "keep_alive") return;
      if (e.type === "update_environment_variables") {
        if (!this.acceptsInboundEnvUpdates()) {
          let variables = e.variables,
            m = typeof variables === "object" && variables !== null ? Object.keys(variables) : [],
            R = m.filter(item => ce.has(item)),
            g = m.length - R.length,
            _ = g > 0 ? R.concat(`${g} other`) : R;
          t(`[structuredIO] refused update_environment_variables: this worker does not take environment updates from its inbound stream (keys: ${_.join(", ") || "none"})`, {
            level: "warn"
          }), this.retireDroppedFrame("uuid" in e ? e.uuid : void 0);
          return;
        }
        let variables_2 = e.variables;
        if (typeof variables_2 !== "object" || variables_2 === null || Array.isArray(variables_2) || Object.values(variables_2).some(item => typeof item !== "string")) {
          if (t("[structuredIO] dropped update_environment_variables: variables must be an object of string values"), typeof e.request_id === "string" && e.request_id) this.writeActivityLine(b({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "update_environment_variables: variables must be an object of string values"
            }
          }) + `
`);
          return;
        }
        let r = [],
          p = [];
        for (let [h, m] of Object.entries(e.variables)) {
          if (!ce.has(h)) {
            p.push(h);
            continue;
          }
          process.env[h] = m, r.push(h);
        }
        if (p.length > 0) t(`[structuredIO] refused update_environment_variables for non-allowlisted keys: ${p.join(", ")}`);
        if (r.includes("CLAUDE_CODE_OAUTH_TOKEN")) lC();else jhe();
        if (t(`[structuredIO] applied update_environment_variables: ${r.join(", ")}`), typeof e.request_id === "string" && e.request_id) this.writeActivityLine(b({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        }) + `
`);
        return;
      }
      if (e.type === "control_response") {
        let n = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
          response_2 = e.response;
        if (typeof response_2 !== "object" || response_2 === null || Array.isArray(response_2)) {
          if (n) this.onCommandLifecycle?.(n, "completed");
          t("[structuredIO] dropped control_response with malformed response payload");
          return;
        }
        let p = this.pendingRequests.get(e.response.request_id);
        if (!p) {
          if (this.unknownResponseDeferral?.(() => this.settleTakenUnknownResponse(e, n, s)) === !0) return;
          let m = this.settleUnknownResponse(e, n);
          if (m !== void 0) await m;
          return;
        }
        if (Eo() && this.asksOurHuman(p)) {
          t(`Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`), this.repliesLeftForNextProcess++;
          return;
        }
        if (n) this.onCommandLifecycle?.(n, "completed");
        if (this.ignoresErrorShapedDialogResponse(p, e.response)) return;
        if (this.ignoresUnsettlingDeviceResponse(p, e.response)) return;
        if (this.hasCanUseToolNameMismatch(p, e.response)) return;
        if (this.trackResolvedToolUseId(p.request), this.pendingRequests.delete(e.response.request_id), this.hostOwnsStdinOrigin && !p.forwarded && this.hostDialogAttestations.has(e.response.request_id) && p.request.request.subtype === "can_use_tool" && e.response.subtype === "success" && Nxo(e.response.response)) this.hostDialogAttestations.set(e.response.request_id, !0);
        if (p.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(e.response.request_id);
        if (YIe(p.request) && !(p.forwarded && e.response.subtype === "error")) this.recordUserDrivenInbound(e);
        if (e.response.subtype === "error") {
          p.reject(Error(e.response.error));
          return;
        }
        let response_3 = e.response.response;
        if (p.schema) try {
          p.resolve(p.schema.parse(response_3));
        } catch (error) {
          p.reject(error);
        } else p.resolve({});
        if (this.replayUserMessages) return e;
        return;
      }
      if (e.type !== "workflow_launch" && e.type !== "user" && Mor(e, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(e);
      if (e.type !== "user" && e.type !== "bash_command" && e.type !== "control_request" && e.type !== "control_cancel_request" && e.type !== "assistant" && e.type !== "system" && e.type !== "queued_notification" && e.type !== "session_notice" && e.type !== "workflow_launch") {
        let n = e.type;
        t(`Ignoring unknown message type: ${typeof n === "string" ? _e(n) : `(a value of JSON type ${typeof n})`}`, {
          level: "warn"
        }), this.retireDroppedFrame(typeof e === "object" && e !== null && "uuid" in e ? e.uuid : void 0);
        return;
      }
      if (e.type === "workflow_launch") return e;
      if (e.type === "control_request") {
        if (this.isRemoteTransport()) {
          let request_5 = e.request,
            r = typeof request_5 !== "object" || request_5 === null || Array.isArray(request_5);
          if (r || !("subtype" in request_5) || typeof request_5.subtype !== "string") {
            i("tengu_sdk_malformed_input", {
              message_type: y("control_request"),
              reason: c(r ? "missing_request" : "subtype_not_string"),
              transport: y("remote"),
              outcome: y("dropped"),
              has_event_uuid: "uuid" in e && en(e.uuid) !== null
            }), t("Dropping control_request: missing request object or non-string subtype", {
              level: "warn"
            }), this.retireDroppedFrame("uuid" in e ? e.uuid : void 0);
            return;
          }
        } else if (!e.request) return this.exitOnFatalInput("Error: Missing request on control_request");
        return e;
      }
      if (e.type === "control_cancel_request") return typeof e.request_id === "string" ? e : void 0;
      if (e.type === "assistant" || e.type === "system") return e;
      if (e.type === "bash_command") return e;
      if (e.type === "queued_notification") return e;
      if (e.type === "session_notice") return e;
      if (e.message?.role !== "user") {
        if (!this.isRemoteTransport()) return this.exitOnFatalInput(`Error: Expected message role 'user', got '${_e(String(e.message?.role))}'`);
        let n = et(e.message),
          outcome_2 = n === void 0 ? "dropped" : !n.plain ? "unwrap_refused" : a.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR ? "repair_disabled" : "repaired",
          wire_shape = Ze(e.message),
          has_event_uuid = en(e.uuid) !== null;
        if (i("tengu_sdk_malformed_input", {
          message_type: y("user"),
          reason: y("invalid_message_role"),
          transport: y("remote"),
          outcome: c(outcome_2),
          wire_shape: c(wire_shape),
          has_event_uuid: has_event_uuid
        }), K("warn", "cli_malformed_user_message", {
          outcome: outcome_2,
          wire_shape: wire_shape,
          has_event_uuid: has_event_uuid
        }), n === void 0 || outcome_2 !== "repaired") {
          t(`Dropping malformed user message (${outcome_2}, ${wire_shape}, event uuid ${has_event_uuid ? "present" : "absent"}): expected message role 'user'`, {
            level: "warn"
          }), this.retireDroppedFrame(e.uuid);
          return;
        }
        let m = e;
        m.message = n.inner, t("Repaired a nested user message (one level)");
      }
      if (Mor(e, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(e);
      return e;
    } catch (error) {
      return this.exitOnFatalInput(Re(s, error));
    }
  }
  async settleTakenUnknownResponse(s, e, n) {
    try {
      await this.settleUnknownResponse(s, e);
    } catch (error) {
      await this.exitOnFatalInput(Re(n, error));
    }
  }
  settleUnknownResponse(s, e) {
    if (Eo()) {
      t(`Leaving control_response for request_id=${s.response.request_id} to the next process \u2014 this one is shutting down and settles no question`);
      return;
    }
    if (e) this.onCommandLifecycle?.(e, "completed");
    let n = this.timedOutUserDialogs.get(s.response.request_id);
    if (n) {
      this.timedOutUserDialogs.delete(s.response.request_id);
      let h = s.response.subtype === "success" ? s.response.response?.behavior : void 0,
        subtype_2 = s.response.subtype;
      i("tengu_request_user_dialog_late_answer", {
        dialog_kind: pn(n.dialogKind),
        lateness_ms: Date.now() - n.timedOutAt,
        response_subtype: c(subtype_2 === "success" || subtype_2 === "error" ? subtype_2 : "other"),
        behavior: c(h === "completed" || h === "cancelled" ? h : h === void 0 ? "absent" : "other")
      }), t(`Ignoring late request_user_dialog answer for request_id=${s.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - n.timedOutAt}ms ago`);
      return;
    }
    let p = (s.response.subtype === "success" ? s.response.response : void 0)?.toolUseID;
    if (typeof p === "string" && this.resolvedToolUseIds.has(p)) {
      t(`Ignoring duplicate control_response for already-resolved toolUseID=${p} request_id=${s.response.request_id}`);
      return;
    }
    return this.unexpectedResponseCallback?.(s);
  }
  resetStallWatchdog() {
    this.stallFired = !1;
  }
  recordUserDrivenInbound(s) {
    f7r();
  }
  retireDroppedFrame(s) {
    let e = en(s);
    if (e) this.onCommandLifecycle?.(e, "completed");
  }
  trackWrite(s) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (s.type !== "result" && !this.stallFired) this.stallTimer = setTimeout(n => {
      if (this.sessionState.getState() !== "running") return;
      this.stallFired = !0, i("tengu_sdk_stall", {
        session_age_ms: Date.now() - this.createdAt,
        session_state: c(this.sessionState.getState()),
        last_message_type: c(n),
        pending_control_requests: this.pendingRequests.size
      });
    }, Me, s.type), this.stallTimer.unref();
    let e = s.type === "result" && this.resultDelivery ? this.resultDelivery.stamp(s) : s;
    if (e.type !== "system") this.sampleForSdkSchemaCheck(e);
    if (e.type === "result") this.sdkSchemaResultWritten = !0, this.armSdkSchemaCheck();
    return e;
  }
  sampleForSdkSchemaCheck(s) {
    if (this.sdkSchemaStretchSampled ??= Math.random() < Le, !this.sdkSchemaStretchSampled) return;
    let e = this.sdkSchemaKept.get(s.type) ?? {
      frames: 0,
      json: void 0
    };
    if (e.frames += 1, this.sdkSchemaKept.set(s.type, e), Math.random() >= 1 / e.frames) return;
    try {
      let n = b(s);
      if (n.length <= Ne) e.json = n;
    } catch {}
  }
  sdkSchemaFramesKept() {
    for (let s of this.sdkSchemaKept.values()) if (s.json !== void 0) return !0;
    return !1;
  }
  endSdkSchemaStretch() {
    if (this.sdkSchemaFramesKept()) {
      this.armSdkSchemaCheck();
      return;
    }
    this.sdkSchemaStretchSampled = void 0, this.sdkSchemaKept.clear();
  }
  armSdkSchemaCheck() {
    if (!this.sdkSchemaFramesKept() || !this.sdkSchemaResultWritten) return;
    clearTimeout(this.sdkSchemaCheckTimer), this.sdkSchemaCheckTimer = setTimeout(() => {
      if (this.sessionState.getState() !== "idle" || this.inputClosed || Eo()) return;
      let s = [...this.sdkSchemaKept.entries()];
      this.sdkSchemaKept.clear(), this.sdkSchemaStretchSampled = void 0;
      let e = f9n.builtCount();
      try {
        let n = d$r();
        for (let [r, {
          json: json
        }] of s) {
          if (json === void 0) continue;
          let h = J(json),
            m = n.safeParse(h);
          if (!m.success) i("tengu_sdk_schema_violation", {
            message_type: c(r),
            error_path: BFn(m.error.issues[0]?.path, xe)
          });
        }
      } catch (error) {
        t(`Could not check the sampled frames against the SDK output schema; they are dropped: ${l(error)}`);
      } finally {
        f9n.releaseBuiltSince(e);
      }
    }, je), this.sdkSchemaCheckTimer.unref();
  }
  writeActivityLine(s) {
    tr(s);
  }
  acceptsInboundEnvUpdates() {
    return !0;
  }
  exitOnFatalInput(s) {
    return Qe(s);
  }
  async write(s) {
    let e = this.trackWrite(s);
    tr(uue(e) + `
`);
  }
  passControlRequestToHost(s, {
    requestId: requestId,
    schema: schema,
    signal: signal
  }) {
    if (this.pendingRequests.has(requestId)) return Promise.reject(new We("a control request with this request_id is already pending"));
    return this.sendRequest(s, schema, signal, {
      requestId: requestId,
      forwarded: !0
    });
  }
  async sendRequest(request_6, schema_2, n, {
    requestId: r = H(),
    forwarded = !1,
    deviceHook = !1
  } = {}) {
    let m = {
        type: "control_request",
        request_id: r,
        request: request_6
      },
      R = !forwarded && YIe(m);
    if (R && Eo() && !n?.aborted) return fb();
    if (request_6.subtype === "elicitation" && !forwarded) TIo(r);else if (!forwarded && !deviceHook) Kcn(r, {
      automated: !R
    });else if (deviceHook) EIo(r);
    if (this.inputClosed) throw new ul("Stream closed");
    if (n?.aborted) throw new We("Request aborted");
    if (this.outbound.enqueue(m), request_6.subtype === "can_use_tool" && this.onControlRequestSent) this.onControlRequestSent(m);
    if (R) this.sessionState.beginUserDecision();
    let g = () => {
      if (R && Eo()) return;
      this.enqueueCancelRequest(r);
      let k = this.pendingRequests.get(r);
      if (k) {
        if (this.trackResolvedToolUseId(k.request), k.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(r);
        this.pendingRequests.delete(r), k.reject(new We());
      }
    };
    if (n) n.addEventListener("abort", g, {
      once: !0
    });
    let _;
    try {
      return await new Promise((k, reject) => {
        _ = {
          request: {
            type: "control_request",
            request_id: r,
            request: request_6
          },
          resolve: q => {
            k(q);
          },
          reject: reject,
          schema: schema_2,
          ...(forwarded && {
            forwarded: forwarded
          })
        }, this.pendingRequests.set(r, _);
      });
    } finally {
      if (n) n.removeEventListener("abort", g);
      if (this.pendingRequests.get(r) === _) this.pendingRequests.delete(r);
      if (R) this.sessionState.endUserDecision();
    }
  }
  emitPermissionDenied(tool_name, tool_use_id_2, agent_id, r) {
    let decisionReason_5 = r.decisionReason;
    this.outbound.enqueue({
      type: "system",
      subtype: "permission_denied",
      tool_name: tool_name,
      tool_use_id: tool_use_id_2,
      agent_id: agent_id,
      decision_reason_type: decisionReason_5?.type,
      decision_reason_code: ode(decisionReason_5),
      decision_reason: $ve(decisionReason_5),
      message: r.message,
      uuid: H(),
      session_id: Y()
    });
  }
  createCanUseTool(s, e) {
    return le(s, this.permissionPromptHost(e));
  }
  permissionPromptHost(s) {
    return {
      request: (e, n, requestId_2) => (this.hostDialogAttestations.set(requestId_2, !1), this.sendRequest(e, xre(), n, {
        requestId: requestId_2
      })),
      isPending: e => this.pendingRequests.has(e),
      interruptedAtStreamClose: e => this.streamCloseInterruptRequestIds.has(e),
      answeredAtHostDialog: e => {
        let n = this.hostDialogAttestations.get(e) === !0;
        if (n) this.hostDialogAttestations.set(e, !1);
        return n;
      },
      emitPermissionDenied: (e, n, r, p) => this.emitPermissionDenied(e, n, r, p),
      promptShown: s && ((e, n, r, p) => {
        if (this.publishedPendingActionDetails.set(e, n), p !== void 0) this.backgroundPromptIds.add(e);
        if (r !== void 0) this.sessionState.notifyNestedPromptBlocking(r);
        s(n);
      }),
      promptSettled: (e, n) => this.settlePermissionPrompt(e, n)
    };
  }
  settlePermissionPrompt(s, e) {
    if (e !== void 0) this.sessionState.notifyNestedPromptUnblocking(e);
    this.hostDialogAttestations.delete(s), this.settlePublishedPrompt(s, !0);
  }
  settlePublishedPrompt(s, e) {
    if (this.publishedPendingActionDetails.delete(s), this.backgroundPromptIds.delete(s), !this.hasPendingPrompt()) {
      this.flipBackFromRequiresAction();
      return;
    }
    if (e) this.sessionState.reteeWaitingOnUser();
    this.republishSurvivingPendingAction();
  }
  flipBackFromRequiresAction() {
    if (Eo()) return;
    let s = this.sessionState.heldRequiresAction?.();
    if (s) {
      this.flipBackLeftToUnpublishedAsk = !1, this.sessionState.notifyStateChanged("requires_action", s);
      return;
    }
    this.sessionState.notifyStateChanged(this.mainLoopLiveness?.() === !1 ? "idle" : "running");
  }
  createHookCallback(callback_id, timeout) {
    let sdkHostHookGeneration = this.sdkHostHookGeneration;
    return {
      type: "callback",
      timeout: timeout,
      callback: async (input_3, p, h) => {
        if (sdkHostHookGeneration !== this.sdkHostHookGeneration && this.retiredHostHookAnswer) return this.retiredHostHookAnswer(input_3);
        try {
          let m = await this.sendRequest({
            subtype: "hook_callback",
            callback_id: callback_id,
            input: input_3,
            tool_use_id: p || void 0
          }, P9(), h);
          return Y8n(), m;
        } catch (m) {
          if (Ke(m)) throw m;
          return Y8n(), console.error(`Error in hook callback ${callback_id}:`, m), {};
        }
      }
    };
  }
  sendDeviceHookCallback(s) {
    let requestId_3 = H(),
      n = this.trackDeviceRequest(requestId_3, "hook", m => ge(m) !== null),
      abortController_2 = new AbortController(),
      p = s.signal ? AbortSignal.any([s.signal, abortController_2.signal]) : abortController_2.signal,
      reply = this.sendRequest({
        subtype: "hook_callback",
        callback_id: s.callbackId,
        input: s.input,
        tool_use_id: s.toolUseID || void 0,
        issued_at: Math.trunc(s.issuedAt),
        deadline_ms: Math.max(1, Math.ceil(s.deadlineMs))
      }, ae(), p, {
        requestId: requestId_3,
        deviceHook: !0
      }).then(m => {
        let answer_2 = ge(m);
        return answer_2 === null ? {
          malformed: !0
        } : {
          answer: answer_2
        };
      }, m => {
        if (Ke(m)) throw m;
        return t(`Device hook_callback request_id=${requestId_3} settled with a non-answer; treating as no opinion`, {
          level: "warn"
        }), {
          malformed: !0
        };
      }).finally(() => {
        this.deviceRequests.delete(requestId_3);
      });
    return {
      requestId: requestId_3,
      reply: reply,
      cancel: () => abortController_2.abort(),
      errorRepliesIgnored: () => n.errorRepliesIgnored,
      malformedRepliesIgnored: () => n.malformedRepliesIgnored
    };
  }
  trackDeviceRequest(s, kind, accepts, instanceId, onUpload) {
    if (this.deviceRequests.size >= he) t(`Device request bookkeeping past its expected ceiling (${he} live requests); keeping all of them`, {
      level: "warn"
    });
    let h = {
      kind: kind,
      errorRepliesIgnored: 0,
      malformedRepliesIgnored: 0,
      delivery: "queued",
      instanceId: instanceId,
      accepts: accepts,
      onUpload: onUpload
    };
    return this.deviceRequests.set(s, h), h;
  }
  liveDeviceRequestKind(s) {
    return this.deviceRequests.get(s)?.kind;
  }
  abandonServedCalls(s, e) {
    let n = 0;
    for (let [r, p] of this.deviceRequests) {
      if (p.kind !== "served_call" || p.instanceId !== s) continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.enqueueCancelRequest(r), this.pendingRequests.delete(r), h.reject(new FSt(e)), n++;
    }
    return n;
  }
  withdrawStandingServedCall(s) {
    if (this.pendingRequests.has(s)) return !1;
    return this.enqueueCancelRequest(s), !0;
  }
  noteRequestsUpload(s, e) {
    let n = 0;
    for (let r of s) {
      let p = this.deviceRequests.get(r);
      if (p === void 0) continue;
      let h = Ye(p.delivery, e);
      if (h !== p.delivery) p.delivery = h, n++;
      try {
        p.onUpload?.(e);
      } catch (error) {
        t(`A served call's upload listener threw (${e}); the delivery ledger is unaffected: ${l(error)}`, {
          level: "warn"
        });
      }
    }
    return n;
  }
  rejectUndeliveredRequests(s, e) {
    let n = 0;
    for (let r of s) {
      let p = this.deviceRequests.get(r);
      if (p?.kind !== "served_call") continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.pendingRequests.delete(r), h.reject(this.tracksRequestDelivery && p.delivery === "queued" ? new USt(e) : new $St(e)), n++;
    }
    return n;
  }
  sendServedCallRequest(s) {
    let requestId_4 = H();
    if (this.inputClosed) {
      let reply_2 = Promise.reject(new ul("Stream closed"));
      return reply_2.catch(() => {}), {
        requestId: requestId_4,
        sent: !1,
        delivery: () => "queued",
        withdraw: () => !1,
        reply: reply_2,
        cancel: () => {},
        errorRepliesIgnored: () => 0
      };
    }
    let n = this.trackDeviceRequest(requestId_4, "served_call", s.accepts, s.request.instance_id, s.onUpload),
      abortController_3 = new AbortController(),
      p = s.signal ? AbortSignal.any([s.signal, abortController_3.signal]) : abortController_3.signal,
      reply_3 = this.sendRequest(s.request, ae(), p, {
        requestId: requestId_4,
        deviceHook: !0
      }).finally(() => {
        this.deviceRequests.delete(requestId_4);
      });
    return {
      requestId: requestId_4,
      sent: !0,
      delivery: () => this.tracksRequestDelivery ? Je(n.delivery) : "untracked",
      withdraw: () => this.withdrawUnsentServedCall(requestId_4),
      reply: reply_3,
      cancel: () => {
        if (this.pendingRequests.has(requestId_4)) {
          abortController_3.abort();
          return;
        }
        this.enqueueCancelRequest(requestId_4);
      },
      errorRepliesIgnored: () => n.errorRepliesIgnored
    };
  }
  askToAnnounce(s, e) {
    this.sendRequest(s, ae(), e, {
      deviceHook: !0
    }).catch(() => {});
  }
  withdrawUnsentServedCall(s) {
    let e = this.deviceRequests.get(s),
      n = this.pendingRequests.get(s);
    if (!this.tracksRequestDelivery || n === void 0 || e?.kind !== "served_call" || e.delivery !== "queued") return !1;
    if (!this.withdrawQueuedRequest(s)) return !1;
    return this.pendingRequests.delete(s), n.reject(new Psr()), !0;
  }
  async handleElicitation(mcp_server_name, message_2, requested_schema, r, mode_2, url, elicitation_id, R, g = !1) {
    if (!this.hostAnswersElicitations) return {
      action: "cancel"
    };
    if (Eo()) {
      if (r?.aborted) return {
        action: "cancel"
      };
      return fb();
    }
    if (this.inputClosed || r?.aborted) return {
      action: "cancel"
    };
    let _ = H(),
      k = {
        tool_name: tool_name_2,
        display_tool_name: "Claude needs your input",
        action_description: "Answer the MCP server's question to continue",
        tool_use_id: "",
        request_id: _
      };
    if (this.publishedPendingActionDetails.set(_, k), g) this.backgroundPromptIds.add(_);
    this.sessionState.notifyStateChanged("requires_action", k), this.onUserDialogParked?.(k);
    try {
      return await this.sendRequest({
        subtype: "elicitation",
        mcp_server_name: mcp_server_name,
        message: message_2,
        mode: mode_2,
        url: url,
        elicitation_id: elicitation_id,
        requested_schema: requested_schema,
        title: R?.title,
        display_name: R?.displayName,
        description: R?.description
      }, i$r(), r, {
        requestId: _
      });
    } catch {
      return {
        action: "cancel"
      };
    } finally {
      this.settlePublishedPrompt(_, !r?.aborted);
    }
  }
  async requestUserDialog(dialog_kind, payload, n) {
    if (Eo()) {
      if (n?.signal?.aborted) return {
        behavior: "cancelled"
      };
      return fb();
    }
    let requestId_5 = H(),
      p = Ann(dialog_kind, payload, requestId_5, n?.toolUseId);
    if (this.publishedPendingActionDetails.set(requestId_5, p), this.sessionState.notifyStateChanged("requires_action", p), this.onUserDialogParked?.(p), i("tengu_request_user_dialog_requires_action", {
      dialog_kind: pn(dialog_kind)
    }), n?.onSettledUnanswered) this.unansweredSettleHandlers.set(requestId_5, n.onSettledUnanswered);
    let h = pee(),
      m;
    if (h > 0) m = setTimeout((R, dialogKind, timeout_ms) => {
      if (this.timedOutUserDialogs.set(R, {
        dialogKind: dialogKind,
        timedOutAt: Date.now()
      }), !this.cancelDialogByMachine(R, "deadline")) {
        this.timedOutUserDialogs.delete(R);
        return;
      }
      i("tengu_request_user_dialog_timeout", {
        dialog_kind: pn(dialogKind),
        timeout_ms: timeout_ms
      });
    }, h, requestId_5, dialog_kind, h), m.unref();
    try {
      return await this.sendRequest({
        subtype: "request_user_dialog",
        dialog_kind: dialog_kind,
        payload: payload,
        tool_use_id: n?.toolUseId
      }, wFt(), n?.signal, {
        requestId: requestId_5
      });
    } catch {
      return {
        behavior: "cancelled"
      };
    } finally {
      if (m !== void 0) clearTimeout(m);
      this.unansweredSettleHandlers.delete(requestId_5), this.settlePublishedPrompt(requestId_5, !this.timedOutUserDialogs.has(requestId_5));
    }
  }
  createSandboxAskCallback(s, e, n, r) {
    let p = new Map(),
      h = async host => {
        if (hz(host)) return t(`[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${b(host)}`, {
          level: "warn"
        }), !1;
        try {
          let R = {
              type: "addRules",
              rules: [{
                toolName: toolName,
                ruleContent: `domain:${wTe(host)}`
              }],
              behavior: "allow",
              destination: "localSettings"
            },
            g = Q(u4(tool_name_3), n, r),
            _;
          try {
            _ = await this.sendRequest({
              subtype: "can_use_tool",
              tool_name: tool_name_3,
              display_name: u4(tool_name_3),
              input: {
                host: host
              },
              permission_suggestions: [R],
              tool_use_id: H(),
              description: `Allow network connection to ${host}?`
            }, xre());
          } finally {
            if (g(), this.flipBackLeftToUnpublishedAsk && !this.hasPendingPrompt()) this.flipBackFromRequiresAction();
          }
          if (_.behavior !== "allow") return !1;
          let updatedPermissions = _.updatedPermissions;
          switch (s.kind) {
            case "launcher":
              if (updatedPermissions && updatedPermissions.length > 0) e?.(D => px(D, updatedPermissions)), await LF(updatedPermissions, n);
              break;
            case "strict":
              if (e) d_r(s, c_r(updatedPermissions, s.limits), tool_name_3, e);
              break;
          }
          return Ge.addSessionAllowedHost(host), !0;
        } catch {
          return !1;
        }
      };
    return m => {
      let R = m.host,
        g = p.get(R);
      if (g) return g;
      let _ = h(R).finally(() => {
        p.delete(R);
      });
      return p.set(R, _), _;
    };
  }
  async sendMcpMessage(server_name, message_3, timeoutMs = He) {
    let p = W8t(message_3) ? void 0 : Ao(void 0, {
      timeoutMs: timeoutMs,
      refTimer: !0
    });
    try {
      return (await this.sendRequest({
        subtype: "mcp_message",
        server_name: server_name,
        message: message_3
      }, u({
        mcp_response: eK().optional()
      }), p?.signal)).mcp_response;
    } finally {
      p?.cleanup();
    }
  }
  async requestOAuthTokenRefresh() {
    let s = Date.now(),
      e;
    try {
      e = await this.sendRequest({
        subtype: "oauth_token_refresh"
      }, l$r(), AbortSignal.timeout(Oe));
    } catch (error) {
      throw i("tengu_sdk_oauth_refresh_unfulfilled", {
        outcome: c(error instanceof ul ? "stream_closed" : Ke(error) ? "timeout" : error instanceof QR ? "invalid_response" : "error"),
        reason: c("none"),
        duration_ms: Date.now() - s
      }), error;
    }
    if (typeof e.accessToken === "string" && e.accessToken) return nLo(), e.accessToken;
    let reason = e.reason;
    if (reason !== void 0) tLo(reason);
    return i("tengu_sdk_oauth_refresh_unfulfilled", {
      outcome: c(reason !== void 0 ? "declined" : "null"),
      reason: c(reason ?? "none"),
      duration_ms: Date.now() - s
    }), null;
  }
  async requestRemoteControlWorkSecret(session_id) {
    try {
      return (await this.sendRequest({
        subtype: "remote_control_work_secret",
        session_id: session_id
      }, a$r(), AbortSignal.timeout(Ie))).work_secret || null;
    } catch (error) {
      return t(`[bridge:work-secret] host work-secret request failed (${error instanceof Error ? error.name : "unknown"})`, {
        level: "warn"
      }), null;
    }
  }
  async requestHostAuthTokenRefresh(s = Ee) {
    return this.sendRequest({
      subtype: "host_auth_token_refresh"
    }, c$r(), AbortSignal.timeout(s));
  }
  enqueueCancelRequest(request_id_3) {
    this.outbound.enqueue({
      type: "control_cancel_request",
      request_id: request_id_3
    });
  }
}
async function Qe(s) {
  console.error(s);
  let e = Date.now() + 2000;
  await Ht(LN(), 2000, "write queue drain timeout (exit)").catch(() => {}), await Ht(y_e(), Math.max(0, e - Date.now()), "diagnostic log flush timeout (exit)").catch(() => {}), await bmt(Math.max(0, e - Date.now()), {
    scaleBudgetToQueue: !1
  }), process.exit(1);
}
var Ve = new Set(["type", "message", "uuid", "session_id", "parent_tool_use_id", "timestamp"]);
function Xe([s, e]) {
  return Ve.has(s) || s === "isSynthetic" && e === !1 || s === "shouldQuery" && e === !0;
}
function Ze(s) {
  if (s === void 0 || s === null) return "no_message";
  if (typeof s !== "object" || Array.isArray(s)) return "non_object_message";
  if (!("role" in s)) return "no_role";
  let role = s.role;
  if (role === void 0) return "no_role";
  if (role === null) return "role_null";
  if (Array.isArray(role)) return "role_array";
  switch (typeof role) {
    case "object":
      return "role_object";
    case "string":
      return "role_string";
    default:
      return "role_other";
  }
}
function et(s) {
  if (typeof s !== "object" || s === null || !("message" in s)) return;
  let inner = s.message;
  if (typeof inner !== "object" || inner === null || !("role" in inner) || inner.role !== "user" || !("content" in inner) || typeof inner.content !== "string" && !Array.isArray(inner.content)) return;
  return {
    inner: inner,
    plain: (!("type" in s) || s.type === "user") && Object.entries(s).every(Xe)
  };
}
function Re(s, e) {
  return `Error parsing streaming input line (type=${/"type"\s*:\s*"([\w-]{1,40})"/.exec(s)?.[1] ?? "unknown"}, ${s.length} chars): ${e instanceof Error ? e.name : typeof e}`;
}
function ke(s) {
  return () => ({
    type: s.type,
    ...(s.type === "user" && {
      uuid: Z_e(s.uuid)
    }),
    ...(s.type === "control_request" && {
      subtype: Tgt(s.request.subtype)
    })
  });
}
export { xre, T_n, oXe, SWt, Z_e, Tgt, Zxe, Pre };