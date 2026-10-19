// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ui as model_2, K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ve, Nr, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { bn, nGs, RLo, zJe, HD } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { _g, whe as error_5 } from "B:/~BUN/root/chunk-8z3a373v.js";
import { jbt } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { mge as inbound_origin, $h, wle } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { oo } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { Zu } from "B:/~BUN/root/chunk-q56gve2c.js";
import { ugt, NOo } from "B:/~BUN/root/chunk-jmms813f.js";
import { Xt } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { o, v, T, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { $f, kZe, Wne, XB } from "B:/~BUN/root/chunk-3m71dqxd.js";
var HMr = 32;
function Wae(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "string" && item.length > 0 && item.length <= 64).slice(0, 32);
}
import { randomUUID as M } from "crypto";
var DMr = 8000;
async function ue({
  verdict: verdict,
  deadlineMs: deadlineMs,
  respond: respond,
  inform: inform
}) {
  let l = b => {
      if (Array.isArray(b)) inform(b.filter(item => typeof item === "string").map(Xt));
    },
    h = verdict.then(b => b ?? {
      ok: !0
    }),
    I;
  try {
    I = await je(h, deadlineMs);
  } catch (b) {
    return t(`set_model verdict rejected: ${d(b)}`, {
      level: "error"
    }), respond({
      subtype: "error",
      error: "set_model failed"
    });
  }
  if (I === void 0) return h.then(b => l(b.ok ? [...(Array.isArray(b.notices) ? b.notices : []), "The pending model switch was applied"] : de(b.error)), b => {
    t(`set_model verdict rejected after the deadline reply: ${d(b)}`, {
      level: "error"
    }), l(["The pending model switch failed"]);
  }), respond({
    subtype: "error",
    error: "This model switch is still pending (an earlier model request or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused"
  });
  if (I.ok) {
    if (I.notices) l(I.notices);
    return respond({
      subtype: "success"
    });
  }
  let k = I.code,
    error_code = RLo.find(item => item === k);
  return respond({
    subtype: "error",
    error: de(I.error).map(Xt).join(`
`),
    ...(error_code !== void 0 && {
      error_code: error_code
    })
  });
}
function de(e) {
  return typeof e === "string" ? e.split(`
`) : [""];
}
function LMr(toolUseId) {
  if (toolUseId == null || toolUseId === "") return {
    valid: !0,
    toolUseId: void 0
  };
  if (typeof toolUseId === "string") return {
    valid: !0,
    toolUseId: toolUseId
  };
  return {
    valid: !1
  };
}
var error_8 = "Background tasks are disabled in this session.",
  error_7 = "background_tasks: tool_use_id must be a string";
function YFt(e) {
  return Te().safeParse(e).success;
}
var Te = f(() => u({
    max_thinking_tokens: v().refine(e => Number.isInteger(e)).nullable().optional(),
    thinking_display: U(zJe).nullable().optional()
  })),
  error_4 = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${zJe.map(item => `"${item}"`).join(", ")}, or null`;
var IOo = "display_only";
function UMr(e) {
  return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === !0 && e.display_only === !0;
}
function BMr(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function we(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}
function xe(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}
function AUs(e) {
  oo().bridgeStateFramesGate = e;
}
function zae(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return !1;
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && $h(e.attachment.origin);
  }
  return e.type === "user" || e.type === "assistant" || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && (oo().bridgeStateFramesGate?.() ?? !0));
}
function can(e) {
  return e.type === "user" && !e.isCompactSummary && !nGs(e);
}
function jMr(e) {
  return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}
function HKn(e) {
  return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed" || e.subtype === "file_attachments_missing";
}
function $Kn(e) {
  if (!wle(e)) return;
  let content = e.message.content,
    n;
  if (typeof content === "string") n = content;else for (let l of content) if (l.type === "text") {
    n = l.text;
    break;
  }
  if (!n) return;
  return jbt(n) || void 0;
}
function xUs(e, r, n, s, l, h, I, k) {
  try {
    let y = ugt(J(e));
    if (we(y)) {
      t("[bridge:repl] Ingress message type=control_response"), l?.(y);
      return;
    }
    if (xe(y)) {
      t(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`), h?.(y);
      return;
    }
    if (BMr(y) && y.type === "control_cancel_request" && "request_id" in y && typeof y.request_id === "string") {
      t(`[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`), I?.(y.request_id);
      return;
    }
    if (Qe(y)) {
      let w = He(y.notification);
      if (w === void 0) {
        if (k) t("[bridge:repl] Ingress message type=queued_notification"), k({
          type: "queued_notification",
          notification: y.notification
        });else t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      t("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"), y = w;
    }
    if (!BMr(y)) return;
    let b = "uuid" in y && typeof y.uuid === "string" ? y.uuid : void 0;
    if (b && r.has(b)) {
      t(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${b}`);
      return;
    }
    if (b && n.has(b)) {
      t(`[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${b}`);
      return;
    }
    if (t(`[bridge:repl] Ingress message type=${y.type}${b ? ` uuid=${b}` : ""}`), y.type === "user") {
      if ("isReplay" in y && y.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${b ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
        t(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${b}`);
        return;
      }
      if (UMr(y)) {
        t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${b ?? "none"}`);
        return;
      }
      if (b) n.add(b);
      i("tengu_bridge_message_received", {
        is_repl: !0
      }), g("bridge_message_receive"), s?.(y);
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
  } catch (error) {
    t(`[bridge:repl] Failed to parse ingress message: ${d(error)}`), m("bridge_message_receive", "bridge_message_receive_parse_failed");
  }
}
var Ne = new Set(["effortLevel", "ultracode"]),
  Me = 5,
  Oe = 40,
  error_3 = "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  Ue = 8000,
  error_6 = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  MOo = 660000,
  XFt = "side_question timed out: the host did not answer in time",
  response = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function DOo(e) {
  return e.response !== null && e.synthetic !== !1 ? {
    ...e,
    response: response,
    synthetic: !0
  } : e;
}
var Fe = f(() => u({
    question: o(),
    history: T(u({
      question: o(),
      response: o(),
      fallback_notice: o().optional()
    })).optional()
  })),
  error_2 = "This session is shutting down.",
  Ke = new Set(["initialize", "file_suggestions", "read_file", "get_workspace_diff", "get_context_usage", "get_usage", "mcp_status"]);
function ce(e, r) {
  if (r instanceof Nr) return Xt(d(r));
  if (Ve(r)) return Xt(d(r));
  return t(`${e} failed: ${d(r)}`, {
    level: "error"
  }), `${e} failed`;
}
function PUs(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, {
      level: "error"
    });
    throw new Nr("Connection failed");
  }
  throw new Nr(`Server status: ${e.type}`);
}
function N(e, r, n, s) {
  z(e, r, n, s.then(l => ({
    subtype: "success",
    response: l ?? {}
  })));
}
function z(e, r, session_id, s) {
  s.catch(l => ({
    subtype: "error",
    error: ce(e.request.subtype, l)
  })).then(l => {
    let I = {
      ...(l.subtype === "error" ? XB(e.request_id, l.error, "error_code" in l ? l.error_code : void 0) : Wne(e.request_id, l.response ?? {})),
      session_id: session_id
    };
    r(I), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${l.subtype}`);
  });
}
function le(request_id, r) {
  if (r && r.ok === !1) return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: request_id,
      error: Xt(r.error)
    }
  };
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: request_id
    }
  };
}
function OUs(e, r) {
  let {
    transport: transport,
    sessionId: s,
    outboundOnly: outboundOnly,
    getInitializeState: getInitializeState,
    claudeCodeVersion: I,
    getCommands: getCommands,
    reportsInboundReadReceipts: reportsInboundReadReceipts,
    getPendingPrompts: getPendingPrompts,
    onInterrupt: onInterrupt,
    onStopTask: onStopTask,
    onBackgroundTasks: onBackgroundTasks,
    onCancelAsyncMessage: onCancelAsyncMessage,
    onDialogKindsDeclared: onDialogKindsDeclared,
    onClientInitialize: onClientInitialize,
    onSetModel: onSetModel,
    onSetMaxThinkingTokens: onSetMaxThinkingTokens,
    onSetPermissionMode: onSetPermissionMode,
    onApplyFlagSettings: onApplyFlagSettings,
    onRenameSession: onRenameSession,
    onSetColor: onSetColor,
    onFileSuggestions: onFileSuggestions,
    onReadFile: onReadFile,
    onGetWorkspaceDiff: onGetWorkspaceDiff,
    onGetContextUsage: onGetContextUsage,
    onMcpAuthenticate: onMcpAuthenticate,
    onMcpOauthCallbackUrl: onMcpOauthCallbackUrl,
    onMcpReconnect: onMcpReconnect,
    onMcpSetServers: onMcpSetServers,
    onForkConversation: onForkConversation,
    hasPendingPrompts: hasPendingPrompts,
    onSideQuestion: onSideQuestion,
    cancellableRequests: cancellableRequests
  } = r;
  if (!transport) {
    t("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let A = r.writeFrame ?? (a => {
      transport.write(a);
    }),
    _;
  if (bn() && !Ke.has(e.request.subtype)) {
    t(`[bridge] refusing ${e.request.subtype}: this process is exiting`), _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_2
      }
    };
    let a = {
      ..._,
      session_id: s
    };
    transport.write(a);
    return;
  }
  if (outboundOnly && e.request.subtype !== "initialize") {
    _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_3
      }
    };
    let a = {
      ..._,
      session_id: s
    };
    transport.write(a), t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
    return;
  }
  let O = r.answerSharedControlRequest?.(e.request);
  if (O instanceof Promise) {
    z(e, A, s, O);
    return;
  }
  if (O !== void 0) {
    let c = {
      ...(O.subtype === "error" ? {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: O.error
        }
      } : {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          ...(O.response !== void 0 && {
            response: O.response
          })
        }
      }),
      session_id: s
    };
    transport.write(c), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${O.subtype}`);
    return;
  }
  switch (e.request.subtype) {
    case "initialize":
      {
        try {
          let D = Wae(e.request.supportedDialogKinds);
          if (D.length > 0) onDialogKindsDeclared?.(D);
        } catch (error) {
          t(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${d(error)}`);
        }
        let commands = [];
        if (!outboundOnly) try {
          commands = getCommands?.() ?? [];
        } catch (error) {
          m("bridge_initialize_commands", "get_commands_threw"), t(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${d(error)}`);
        }
        let c = getPendingPrompts?.() ?? [],
          pending_permission_requests = c.filter(item => item.request.subtype === "can_use_tool"),
          pending_user_dialog_requests = c.filter(item => item.request.subtype === "request_user_dialog");
        _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: {
              commands: commands,
              agents: [],
              output_style: "normal",
              available_output_styles: ["normal"],
              models: [],
              account: {},
              pid: process.pid,
              ...(I !== void 0 && {
                claude_code_version: I
              }),
              ...(!outboundOnly && reportsInboundReadReceipts?.() === !0 && {
                inbound_read_receipts: !0
              }),
              ...getInitializeState?.()
            },
            pending_permission_requests: pending_permission_requests,
            pending_user_dialog_requests: pending_user_dialog_requests
          }
        };
        try {
          onClientInitialize?.();
        } catch (error) {
          t(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${d(error)}`);
        }
        break;
      }
    case "set_model":
      {
        let model = e.request.model;
        if (model != null && typeof model !== "string") {
          m("model_switch", "invalid_model_type"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: model must be a string"
            }
          };
          break;
        }
        let only_if_model_is_current = e.request.only_if_model_is_current;
        if (only_if_model_is_current !== void 0 && only_if_model_is_current !== !1) {
          m("model_switch", "only_if_model_is_current_unserved"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing."
            }
          };
          break;
        }
        let verdict_2 = onSetModel?.(e.request.model ?? void 0);
        if (verdict_2 && "then" in verdict_2) {
          ue({
            verdict: verdict_2,
            deadlineMs: r.setModelVerdictDeadlineMs ?? DMr,
            respond: E => {
              let qe = {
                ...{
                  type: "control_response",
                  response: {
                    ...E,
                    request_id: e.request_id
                  }
                },
                session_id: s
              };
              A(qe), t(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${E.subtype}`);
            },
            inform: E => {
              for (let content_2 of E) A({
                type: "system",
                subtype: "informational",
                content: content_2,
                level: "notice",
                uuid: M(),
                session_id: s
              });
            }
          });
          return;
        }
        if (verdict_2 && !verdict_2.ok) _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: Xt(verdict_2.error)
          }
        };else _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };
        break;
      }
    case "set_max_thinking_tokens":
      {
        if (!YFt(e.request)) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_4
            }
          };
          break;
        }
        let a = onSetMaxThinkingTokens?.(e.request.max_thinking_tokens, e.request.thinking_display);
        if (a && "then" in a) {
          let request_id_2 = e.request_id,
            subtype = e.request.subtype;
          a.then(E => le(request_id_2, E), E => ({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: request_id_2,
              error: ce(subtype, E)
            }
          })).then(E => {
            let D = {
              ...E,
              session_id: s
            };
            A(D), t(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${request_id_2} result=${E.response.subtype}`);
          });
          return;
        }
        _ = le(e.request_id, a);
        break;
      }
    case "set_permission_mode":
      {
        let a = _g(e.request.mode),
          c = a === void 0 ? {
            ok: !1,
            error: error_5
          } : onSetPermissionMode?.(a) ?? {
            ok: !1,
            error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
          };
        if (c.ok) _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: Xt(c.error)
          }
        };
        break;
      }
    case "rename_session":
      {
        if (typeof e.request.title !== "string") {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "rename_session: title must be a string"
            }
          };
          break;
        }
        let c = onRenameSession?.(e.request.title) ?? {
          ok: !1,
          error: "rename_session is not supported in this context (onRenameSession callback not registered)"
        };
        if (c.ok) _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: Xt(c.error)
          }
        };
        break;
      }
    case "set_color":
      {
        let a = onSetColor?.(e.request.color) ?? {
          ok: !1,
          error: "set_color is not supported in this context (onSetColor callback not registered)"
        };
        if (a.ok) _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: Xt(a.error)
          }
        };
        break;
      }
    case "file_suggestions":
      {
        if (!onFileSuggestions) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
            }
          };
          break;
        }
        N(e, A, s, onFileSuggestions(e.request.query).then(suggestions => ({
          suggestions: suggestions
        })));
        return;
      }
    case "read_file":
      {
        if (!onReadFile) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "read_file is not supported in this context (onReadFile callback not registered)"
            }
          };
          break;
        }
        N(e, A, s, onReadFile(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor).then((absPath => c => ({
          ...c,
          absPath: absPath
        }))(e.request.path)));
        return;
      }
    case "get_workspace_diff":
      {
        if (!onGetWorkspaceDiff) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)"
            }
          };
          break;
        }
        let abortController = new AbortController();
        z(e, A, s, Nt(onGetWorkspaceDiff(abortController.signal), Ue, error_6).then(response_2 => ({
          subtype: "success",
          response: response_2
        }), c => {
          if (abortController.abort(), d(c) === error_6) return {
            subtype: "error",
            error: error_6,
            error_code: "workspace_diff_pending"
          };
          throw c;
        }));
        return;
      }
    case "get_context_usage":
      {
        if (!onGetContextUsage) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
            }
          };
          break;
        }
        N(e, A, s, onGetContextUsage({
          detail: e.request.detail
        }).then(a => ({
          ...a,
          memoryFiles: []
        })));
        return;
      }
    case "get_usage":
      _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: "get_usage is not supported in this context"
        }
      };
      break;
    case "mcp_status":
      _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            mcpServers: []
          }
        }
      };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect":
      {
        let request = e.request,
          {
            subtype: subtype_2,
            serverName: serverName
          } = request,
          E = request.subtype === "mcp_authenticate" ? onMcpAuthenticate && (D => onMcpAuthenticate(D, request.redirectUri)) : request.subtype === "mcp_oauth_callback_url" ? onMcpOauthCallbackUrl && (D => onMcpOauthCallbackUrl(D, request.callbackUrl)) : onMcpReconnect;
        if (!E) {
          _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: `${subtype_2} is not supported in this context (callback not registered)`
            }
          };
          break;
        }
        N(e, A, s, E(serverName));
        return;
      }
    case "interrupt":
      onInterrupt?.(), _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      };
      break;
    case "apply_flag_settings":
      {
        let a = Ge(e.request.settings),
          c;
        if (!a.ok) c = a;else if (!onApplyFlagSettings) m("bridge_flag_settings", "not_registered"), c = {
          ok: !1,
          error: "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
        };else c = onApplyFlagSettings(a.settings, e.request_id);
        if (c.ok) g("bridge_flag_settings"), _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: c.error
          }
        };
        break;
      }
    case "mcp_set_servers":
      {
        let servers = e.request.servers,
          c = "hint" in e.request ? e.request.hint : void 0,
          S;
        if (servers === void 0 && typeof c === "string") t("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"), S = {
          ok: !0,
          added: [],
          removed: [],
          errors: {},
          unknownServerCount: 0
        };else if (!_e(servers)) S = {
          ok: !1,
          error: "mcp_set_servers: servers must be an object"
        };else if (!onMcpSetServers) S = {
          ok: !1,
          error: "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)"
        };else try {
          S = onMcpSetServers(servers);
        } catch (E) {
          t(`[bridge:repl] mcp_set_servers handler threw: ${d(E)}`, {
            level: "error"
          }), S = {
            ok: !1,
            error: "mcp_set_servers failed to apply"
          };
        }
        _ = S.ok ? {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: {
              added: S.added,
              removed: S.removed,
              errors: We(S.errors, S.unknownServerCount)
            }
          }
        } : {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: Xt(S.error)
          }
        };
        break;
      }
    case "stop_task":
      {
        let task_id = e.request.task_id;
        if (typeof task_id !== "string") {
          m("task_stop_user", "invalid_task_id"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string"
            }
          };
          break;
        }
        let c = task_id;
        if (!onStopTask) {
          m("task_stop_user", "not_supported"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        N(e, A, s, onStopTask(c));
        return;
      }
    case "background_tasks":
      {
        let a = LMr(e.request.tool_use_id);
        if (!a.valid) {
          m("task_local_shell_background_all", "invalid_tool_use_id"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_7
            }
          };
          break;
        }
        let {
          toolUseId: toolUseId_2
        } = a;
        if (!onBackgroundTasks) {
          m("task_local_shell_background_all", "not_supported"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "background_tasks is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        if (Zu()) {
          m("task_local_shell_background_all", "disabled"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_8
            }
          };
          break;
        }
        N(e, A, s, Promise.resolve().then(() => onBackgroundTasks(toolUseId_2)).then(backgrounded => toolUseId_2 === void 0 ? {} : {
          backgrounded: backgrounded
        }));
        return;
      }
    case "cancel_async_message":
      {
        let message_uuid = e.request.message_uuid;
        if (typeof message_uuid !== "string") {
          m("bridge_cancel_queued_message", "invalid_message_uuid"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message: message_uuid must be a string"
            }
          };
          break;
        }
        if (!onCancelAsyncMessage) {
          m("bridge_cancel_queued_message", "not_supported"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        N(e, A, s, Promise.resolve().then(() => onCancelAsyncMessage(message_uuid)).then(cancelled => {
          if (cancelled) g("bridge_cancel_queued_message");else p("bridge_cancel_queued_message", "not_queued");
          return {
            cancelled: cancelled
          };
        }, c => {
          throw m("bridge_cancel_queued_message", "failed"), c;
        }));
        return;
      }
    case "side_question":
      {
        let a = Fe().safeParse(e.request);
        if (!a.success) {
          m("bridge_side_question", "invalid_request"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "side_question: question must be a string and history an array of {question, response} strings"
            }
          };
          break;
        }
        if (!onSideQuestion) {
          m("bridge_side_question", "not_registered"), _ = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "side_question is not supported in this context (onSideQuestion callback not registered)"
            }
          };
          break;
        }
        if (cancellableRequests?.has(e.request_id)) {
          t(`[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`);
          return;
        }
        let abortController_2 = new AbortController();
        cancellableRequests?.set(e.request_id, abortController_2);
        let S = Promise.resolve().then(() => onSideQuestion(a.data, {
          signal: abortController_2.signal,
          onProgress: E => {
            A({
              type: "system",
              subtype: "control_request_progress",
              request_id: e.request_id,
              ...E,
              uuid: M(),
              session_id: s
            });
          }
        }));
        N(e, A, s, Nt(S, r.sideQuestionDeadlineMs ?? MOo, XFt).then(E => {
          if (E.response === null) p("bridge_side_question", "no_response");else if (E.synthetic !== !1) p("bridge_side_question", "synthetic");else g("bridge_side_question");
          return DOo(E);
        }, E => {
          if (d(E) === XFt) throw abortController_2.abort(), m("bridge_side_question", "deadline"), new Nr(XFt);
          if (Ve(E)) p("bridge_side_question", "cancelled");else m("bridge_side_question", "failed");
          throw E;
        }).finally(() => {
          if (cancellableRequests?.get(e.request_id) === abortController_2) cancellableRequests.delete(e.request_id);
        }));
        return;
      }
    case "fork_conversation":
      {
        if (onForkConversation) {
          N(e, A, s, onForkConversation(e.request, {
            promptPending: hasPendingPrompts?.() ?? !1,
            requestId: e.request_id
          }));
          return;
        }
        let response_3 = {
          forked: !1,
          error: "unsupported",
          reason: "requires_remote_control_server"
        };
        _ = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: response_3
          }
        };
        break;
      }
    default:
      _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: `REPL bridge does not handle control_request subtype: ${Xt(String(e.request.subtype))}`
        }
      };
  }
  let Ce = {
    ..._,
    session_id: s
  };
  transport.write(Ce), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${_.response.subtype}`);
}
function _e(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Be = "(servers not adopted)";
function We(e, r) {
  if (r <= 0) return e;
  return {
    ...e,
    [Be]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
  };
}
function Ge(e) {
  if (!_e(e)) return m("bridge_flag_settings", "invalid_shape"), {
    ok: !1,
    error: "apply_flag_settings: settings must be an object"
  };
  let r = Object.keys(e).filter(item => !Ne.has(item));
  if (r.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let s = r.slice(0, Me).map(item => Rt(item, Oe)),
      l = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${l} cannot be changed over Remote Control (only effortLevel and ultracode can)`
    };
  }
  let settings = {};
  if ("effortLevel" in e) {
    let effortLevel = e.effortLevel;
    if (effortLevel !== null && typeof effortLevel !== "string") return m("bridge_flag_settings", "invalid_type"), {
      ok: !1,
      error: "apply_flag_settings: effortLevel must be a string or null"
    };
    settings.effortLevel = effortLevel;
  }
  if ("ultracode" in e) {
    let ultracode = e.ultracode;
    if (typeof ultracode !== "boolean") return m("bridge_flag_settings", "invalid_type"), {
      ok: !1,
      error: "apply_flag_settings: ultracode must be a boolean"
    };
    settings.ultracode = ultracode;
  }
  if (!("effortLevel" in settings) && !("ultracode" in settings)) return m("bridge_flag_settings", "nothing_to_apply"), {
    ok: !1,
    error: "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control"
  };
  return {
    ok: !0,
    settings: settings
  };
}
function UKn(session_id_2, r) {
  let n = r?.outcome,
    s = n !== void 0 && HD(n.terminal_reason),
    l = {
      type: "result",
      ...(!s && r?.userMessageUuid && {
        user_message_uuid: r.userMessageUuid
      }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: {
        ...$f
      },
      modelUsage: {},
      permission_denials: [],
      session_id: session_id_2,
      uuid: M()
    };
  if (n === void 0 || s) return {
    ...l,
    subtype: "success",
    is_error: !1,
    num_turns: 0,
    result: "",
    stop_reason: null
  };
  let h = {
    is_error: n.is_error,
    num_turns: n.num_turns,
    stop_reason: n.stop_reason,
    ...(n.terminal_reason !== void 0 && {
      terminal_reason: n.terminal_reason
    })
  };
  if (n.subtype === "success") return {
    ...l,
    ...h,
    subtype: "success",
    result: n.is_error && n.structured_output === void 0 ? n.result ?? "" : "",
    ...(n.api_error_status != null && {
      api_error_status: n.api_error_status
    }),
    ...(n.api_error_code !== void 0 && {
      api_error_code: n.api_error_code
    }),
    ...(n.api_error_origin !== void 0 && {
      api_error_origin: n.api_error_origin
    }),
    ...(n.api_error !== void 0 && {
      api_error: n.api_error
    })
  };
  return {
    ...l,
    ...h,
    subtype: n.subtype,
    errors: []
  };
}
function LOo(session_id_3, reason) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: reason,
    session_id: session_id_3,
    uuid: M()
  };
}
var name = "PushNotification";
function IUs(message, session_id_4) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: model_2,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: {
        ...$f
      },
      content: [{
        type: "tool_use",
        id: M(),
        name: name,
        input: {
          message: message,
          status: "proactive"
        }
      }],
      context_management: null
    },
    parent_tool_use_id: null,
    is_meta: !0,
    session_id: session_id_4,
    uuid: M()
  };
}
function WMr(text, session_id_5) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: model_2,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        ...$f
      },
      content: [{
        type: "text",
        text: text,
        citations: null
      }],
      context_management: null
    },
    parent_tool_use_id: null,
    session_id: session_id_5,
    uuid: M(),
    timestamp: new Date().toISOString()
  };
}
class qX {
  capacity;
  ring;
  set = new Set();
  writeIdx = 0;
  constructor(e) {
    this.capacity = e, this.ring = Array(e);
  }
  add(e) {
    if (this.set.has(e)) return;
    let r = this.ring[this.writeIdx];
    if (r !== void 0) this.set.delete(r);
    this.ring[this.writeIdx] = e, this.set.add(e), this.writeIdx = (this.writeIdx + 1) % this.capacity;
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    this.set.clear(), this.ring.fill(void 0), this.writeIdx = 0;
  }
}
var ze = f(() => u({
  notification_id: o().min(1),
  origin: C(inbound_origin),
  content: o()
}));
function He(e) {
  let r = ze().safeParse(e);
  if (!r.success) return;
  return {
    type: "user",
    uuid: r.data.notification_id,
    message: {
      role: "user",
      content: r.data.content
    },
    parent_tool_use_id: null,
    isSynthetic: !0,
    inbound_origin: inbound_origin
  };
}
function Qe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
var Xe = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED", "VERIFIED_KEYLESS_DEVICE", "SERVICE_VOUCHED", "SERVER_AUTHORED", "SERVER_REPLAYED", "TRANSITIVELY_VOUCHED"],
  ge = "DEVICE_ATTESTATION_STATUS_",
  Ze = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"];
function $ke(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return Ze[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(ge) ? e.slice(ge.length) : e;
  return Xe.find(item => item === r) ?? "UNSPECIFIED";
}
var V = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function MUs(e, r) {
  return V.indexOf(e) <= V.indexOf(r) ? e : r;
}
function zMr(e, r) {
  if (e === "SERVICE_VOUCHED") return !0;
  let n = V.findIndex(item => item === e);
  return n !== -1 && n <= V.indexOf(r);
}
var GMr = {
    enforce: !1,
    acceptLevel: "VERIFIED",
    acceptStatuses: new Set()
  },
  Je = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  et = f(() => u({
    accept_level: U(V).default("VERIFIED"),
    accept_statuses: T(U(Je)).default([])
  }));
function VMr(e) {
  let attestation = oo().attestation,
    n = et().safeParse(e);
  if (!n.success && !attestation.malformedConfigReported) {
    attestation.malformedConfigReported = !0;
    try {
      t(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${n.error.message}`, {
        level: "error"
      }), p("bridge_event_attestation", "malformed_config");
    } catch (error) {
      t(`[bridge:attestation] malformed-config report threw: ${d(error)}`, {
        level: "error"
      });
    }
  }
  return {
    enforce: !0,
    acceptLevel: n.success ? n.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(n.success ? n.data.accept_statuses : [])
  };
}
function DUs(e) {
  try {
    let reportedCloudWorkerCodes = oo().attestation.reportedCloudWorkerCodes;
    if (reportedCloudWorkerCodes.has(e)) return;
    reportedCloudWorkerCodes.add(e), t(`${q(!0)} the attestation policy header could not be read whole (${e})`, {
      level: "error"
    }), p("ccr_worker_attestation_policy", e);
  } catch (error) {
    t(`${q(!0)} policy-fault report threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function igt(e) {
  oo().attestation.filterPolicy = e;
}
function uan(e) {
  oo().attestation.dropNotifier = e;
}
function LUs(e) {
  let attestation_2 = oo().attestation;
  if (attestation_2.dropNotifier === e) attestation_2.dropNotifier = void 0;
}
function BKn(e) {
  oo().attestation.senderDropWriter = e;
}
function jKn(e) {
  let attestation_3 = oo().attestation;
  if (attestation_3.senderDropWriter === e) attestation_3.senderDropWriter = void 0;
}
var JFt = "[remote-io] warning: ";
function qMr({
  status: status,
  payloadType: payloadType,
  subtype: subtype_3,
  isCloud: isCloud
}) {
  let l = isCloud ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what: payloadType === "control_response" ? "permission response" : payloadType === "control_request" ? `remote command (${subtype_3})` : "message",
    hint: isCloud && status === "ABSENT" ? "If you sent it, try again or sign in again." : isCloud && status === "VERIFIED_BY_GATE" ? "If you sent it, signing in again may fix this." : status === "ABSENT" || status === "INVALID" ? "Re-pair the sending device in Trusted Devices." : status === "VERIFIED_BY_GATE" || status === "VERIFIED_KEYLESS_DEVICE" ? l : status === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : void 0
  };
}
function QFt(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped) return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let {
    what: what,
    hint: hint
  } = qMr(e);
  return `${r} ignored a ${what} that arrived without a valid device signature (attestation: ${e.status}).${hint ? ` ${hint}` : ""}`;
}
function TXe(e) {
  let {
    what: what_2,
    hint: hint_2
  } = qMr(e);
  return `This ${what_2} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${hint_2 ? ` ${hint_2}` : ""}`;
}
function tt(e) {
  if (e.payloadType === "control_request") return;
  return WMr(e.windowCapped ? QFt(e) : TXe(e), K());
}
var rt = new Set(["set_model", "set_permission_mode", "interrupt", "stop_task", "background_tasks", "cancel_async_message", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_authenticate", "mcp_oauth_callback_url", "mcp_reconnect", "apply_flag_settings", "side_question", "reload_plugins"]);
function _je(e) {
  let r = NOo(e);
  return typeof r === "string" ? r : void 0;
}
function be(e) {
  let subtype_4 = Se(e);
  if (subtype_4 === void 0 || !rt.has(subtype_4)) return;
  return {
    subtype: subtype_4,
    requestId: e.payload ? _je(e.payload) : void 0
  };
}
function Se(e) {
  let r = e.payload?.request,
    n = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : void 0;
  return typeof n === "string" ? n : void 0;
}
var ot = new Set(["interrupt", "end_session"]),
  nt = 2000,
  j = 200,
  Ee = 128,
  st = 256;
function P(e, r, n) {
  if (e.delete(n), e.add(n), e.size > r) for (let s of e) {
    e.delete(s);
    break;
  }
}
function pan(e) {
  let attestation_4 = oo().attestation;
  return e.length > Ee || attestation_4.knownInboundRequestIds.has(e) || attestation_4.knownOutboundRequestIds.has(e) || attestation_4.elicitationOutboundRequestIds.has(e) || attestation_4.hostAskOutboundRequestIds.has(e);
}
function NUs(e) {
  let attestation_5 = oo().attestation;
  return attestation_5.knownOutboundRequestIds.has(e) || attestation_5.elicitationOutboundRequestIds.has(e);
}
function WKn(e, {
  automated: automated
}) {
  let attestation_6 = oo().attestation;
  if (P(attestation_6.knownOutboundRequestIds, j, e), automated) P(attestation_6.automatedOutboundRequestIds, j, e);
}
var it = 512;
function FUs(e) {
  P(oo().attestation.deviceOutboundRequestIds, it, e);
}
function HUs(e) {
  P(oo().attestation.elicitationOutboundRequestIds, j, e);
}
function $Us(e) {
  P(oo().attestation.hostAskOutboundRequestIds, j, e);
}
function at(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = _je(r),
    attestation_7 = oo().attestation;
  return n !== void 0 && (attestation_7.automatedOutboundRequestIds.has(n) || attestation_7.deviceOutboundRequestIds.has(n) || attestation_7.hostAskOutboundRequestIds.has(n));
}
var dt = 200;
function zKn(e) {
  P(oo().attestation.resolvedPromptRequestIds, dt, e);
}
function ut(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = _je(r);
  return n !== void 0 && oo().attestation.resolvedPromptRequestIds.has(n);
}
var pt = 60000,
  fe = 10;
function ye(e, r) {
  let attestation_8 = oo().attestation;
  if (attestation_8.dropNotifier === void 0 && attestation_8.senderDropWriter === void 0) return;
  if (attestation_8.recentDropEventIds.has(r)) return;
  P(attestation_8.recentDropEventIds, st, r);
  let s = e.payloadType === "control_request" ? attestation_8.commandDropNoticeWindow : attestation_8.messageDropNoticeWindow,
    l = Date.now();
  if (l - s.start >= pt) s.start = l, s.count = 0;
  if (s.count++, s.count <= fe) me(e);else if (s.count === fe + 1) me({
    status: e.status,
    payloadType: e.payloadType,
    ...(e.subtype !== void 0 && {
      subtype: e.subtype
    }),
    windowCapped: !0,
    ...(e.isCloud && {
      isCloud: !0
    })
  });
}
function me(e) {
  let attestation_9 = oo().attestation;
  if (attestation_9.dropNotifier !== void 0) try {
    attestation_9.dropNotifier(e);
  } catch (error) {
    t(`${q(e.isCloud === !0)} drop notifier threw: ${d(error)}`, {
      level: "error"
    });
  }
  if (attestation_9.senderDropWriter !== void 0) try {
    let n = tt(e);
    if (n) attestation_9.senderDropWriter(n);
  } catch (error) {
    t(`${q(e.isCloud === !0)} drop sender writer threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function KMr(e) {
  let n = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? _je(e.payload) : void 0;
  if (n !== void 0 && n.length <= Ee) P(oo().attestation.knownInboundRequestIds, nt, n);
}
function Q(e, r, n) {
  if (r !== "control_request") return;
  if (KMr(e), be(e) !== void 0) g(n ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}
var lt = new Set(["bash_command", "update_environment_variables", "assistant", "system"]);
function ct(e, r, n, s) {
  try {
    let attestation_10 = oo().attestation,
      h = s ? attestation_10.reportedCloudWorkerCodes : attestation_10.reportedStrayDropCodes,
      I = n === "control_request" ? "control_request_other" : lt.has(n) ? n : "other_payload_type",
      k = `${r.toLowerCase()}_${I}`;
    if (h.has(k)) return;
    h.add(k), t(`${q(s)} DROPPING unverified ${n} event_id=${e.event_id} status=${r} (stray payload class ${k}; counted once per process)`, {
      level: "warn"
    }), m(s ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", k);
  } catch (error) {
    t(`${q(s)} stray-drop report threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function q(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function agt(e, r, {
  isCloudWorker: isCloudWorker,
  vouchWithheld = !1
}) {
  let status_2 = !isCloudWorker && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e,
    h = !isCloudWorker && status_2 === "TRANSITIVELY_VOUCHED" && zMr("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !vouchWithheld;
  return {
    status: status_2,
    meetsLevel: h || zMr(status_2, r.acceptLevel),
    configException: r.acceptStatuses.has(status_2) || status_2 === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")
  };
}
function ke(e, r, isCloudWorker_2) {
  let payloadType_2 = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    l = payloadType_2 === "user" || payloadType_2 === "control_response",
    h = $ke(e.device_attestation_status),
    vouchWithheld_2 = h === "TRANSITIVELY_VOUCHED" && payloadType_2 === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""),
    {
      status: status_3,
      meetsLevel: meetsLevel,
      configException: configException
    } = agt(h, r, {
      isCloudWorker: isCloudWorker_2,
      vouchWithheld: vouchWithheld_2
    }),
    w = `${status_3.toLowerCase()}_${payloadType_2}${vouchWithheld_2 ? "_unstamped" : ""}`,
    L = e.payload?.request,
    B = isCloudWorker_2 && status_3 === "SERVICE_VOUCHED" && payloadType_2 === "control_request" && (!ot.has(Se(e) ?? "") || typeof L === "object" && L !== null && kZe(L));
  if (meetsLevel && !B) {
    if (l) g(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return Q(e, payloadType_2, isCloudWorker_2), !1;
  }
  if (!r.enforce) {
    if (Q(e, payloadType_2, isCloudWorker_2), status_3 === "UNSPECIFIED") return !1;
    if (l) t(`${q(isCloudWorker_2)} accepting unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: "info"
    }), p(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);
    return !1;
  }
  let x = configException,
    F = !1;
  if (l) {
    let R = w;
    if (t(`${q(isCloudWorker_2)} ${x ? "accepting (config exception)" : "DROPPING"} unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: x ? "info" : "warn"
    }), x) p(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", R);else if (payloadType_2 === "control_response" && at(e)) F = !0, t(`${q(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} answers an automated outbound request; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_automated_reply`);else if (payloadType_2 === "control_response" && ut(e)) F = !0, t(`${q(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} is a duplicate answer to an already-resolved prompt; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_resolved_duplicate`);else F = !0, m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", R), ye({
      status: status_3,
      payloadType: payloadType_2,
      ...(isCloudWorker_2 && {
        isCloud: !0
      })
    }, e.event_id);
  } else if (payloadType_2 === "control_request" && !x) {
    let R = be(e);
    if (R) {
      F = !0;
      let requestId = R.requestId !== void 0 && pan(R.requestId) ? void 0 : R.requestId;
      t(`${q(isCloudWorker_2)} DROPPING unverified control_request subtype=${R.subtype} event_id=${e.event_id} status=${status_3}${requestId === void 0 && R.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`, {
        level: "warn"
      }), m(isCloudWorker_2 ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation", `${status_3.toLowerCase()}_${R.subtype}`), ye({
        status: status_3,
        payloadType: payloadType_2,
        subtype: R.subtype,
        requestId: requestId,
        ...(isCloudWorker_2 && {
          isCloud: !0
        })
      }, e.event_id);
    }
  }
  if (!x && !F) ct(e, status_3, payloadType_2, isCloudWorker_2);
  if (x) Q(e, payloadType_2, isCloudWorker_2);
  return !x;
}
function GKn(e) {
  return ke(e, oo().attestation.filterPolicy?.() ?? GMr, !1);
}
function UUs(e, r) {
  if (e.source !== "client") {
    try {
      let reportedCloudWorkerCodes_2 = oo().attestation.reportedCloudWorkerCodes;
      if (!reportedCloudWorkerCodes_2.has("source_not_client")) reportedCloudWorkerCodes_2.add("source_not_client"), t(`${q(!0)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, {
        level: "warn"
      }), m("ccr_worker_stray_event_attestation", "source_not_client");
    } catch (error) {
      t(`${q(!0)} source-drop report threw: ${d(error)}`, {
        level: "error"
      });
    }
    if (!r.enforce) KMr(e);
    return r.enforce;
  }
  return ke(e, r, !0);
}
export { DMr, LMr, error_8 as NMr, error_7 as FMr, HMr, Wae, YFt, error_4 as $Mr, IOo, UMr, BMr, AUs, zae, can, jMr, HKn, $Kn, xUs, MOo, XFt, DOo, PUs, OUs, UKn, LOo, IUs, WMr, qX, $ke, MUs, zMr, GMr, VMr, DUs, igt, uan, LUs, BKn, jKn, JFt, qMr, QFt, TXe, _je, pan, NUs, WKn, FUs, HUs, $Us, zKn, KMr, agt, GKn, UUs };