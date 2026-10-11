// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ke, Mr, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Hg, kne as error_5, tn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { mmt } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Eo } from "B:/~BUN/root/chunk-8zp66ckr.js";
import { zte as inbound_origin, Pl as model_2, e_, vYe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { QDo, u$e, SD } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Kr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { _l, Jcn as error_7 } from "B:/~BUN/root/chunk-gmsn86f4.js";
import { cn } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, E, C, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Mp } from "B:/~BUN/root/chunk-504tqm4f.js";
var jGn = 32;
function DX(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "string" && item.length > 0 && item.length <= 64).slice(0, 32);
}
var NDr = "display_only";
function jcn(e) {
  return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === !0 && e.display_only === !0;
}
import { randomUUID as N } from "crypto";
var ae = 8000;
async function de({
  verdict: verdict,
  deadlineMs: deadlineMs,
  respond: respond,
  inform: inform
}) {
  let c = b => {
      if (Array.isArray(b)) inform(b.filter(item => typeof item === "string").map(tn));
    },
    h = verdict.then(b => b ?? {
      ok: !0
    }),
    D;
  try {
    D = await nt(h, deadlineMs);
  } catch (b) {
    return t(`set_model verdict rejected: ${l(b)}`, {
      level: "error"
    }), respond({
      subtype: "error",
      error: "set_model failed"
    });
  }
  if (D === void 0) return h.then(b => c(b.ok ? [...(Array.isArray(b.notices) ? b.notices : []), "The pending model switch was applied"] : ie(b.error)), b => {
    t(`set_model verdict rejected after the deadline reply: ${l(b)}`, {
      level: "error"
    }), c(["The pending model switch failed"]);
  }), respond({
    subtype: "error",
    error: "This model switch is still pending (an earlier model request or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused"
  });
  if (D.ok) {
    if (D.notices) c(D.notices);
    return respond({
      subtype: "success"
    });
  }
  return respond({
    subtype: "error",
    error: ie(D.error).map(tn).join(`
`)
  });
}
function ie(e) {
  return typeof e === "string" ? e.split(`
`) : [""];
}
function UGn(toolUseId) {
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
var error_6 = "background_tasks: tool_use_id must be a string";
function Zct(e) {
  if (e === null || typeof e !== "object") return e;
  let r = e;
  if ("requestId" in r && !("request_id" in r)) r.request_id = r.requestId, delete r.requestId;
  if ("response" in r && r.response !== null && typeof r.response === "object") {
    let response = r.response;
    if ("requestId" in response && !("request_id" in response)) response.request_id = response.requestId, delete response.requestId;
  }
  return e;
}
function WGn(e) {
  return Ae().safeParse(e).success;
}
var Ae = f(() => u({
    max_thinking_tokens: E().refine(e => Number.isInteger(e)).nullable().optional(),
    thinking_display: z(u$e).nullable().optional()
  })),
  error_4 = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${u$e.map(item => `"${item}"`).join(", ")}, or null`;
function GGn(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function qe(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}
function Te(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}
function hIo(e) {
  Kr().bridgeStateFramesGate = e;
}
function LX(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return !1;
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && e_(e.attachment.origin);
  }
  return e.type === "user" || e.type === "assistant" || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && (Kr().bridgeStateFramesGate?.() ?? !0));
}
function nNt(e) {
  return e.type === "user" && !e.isCompactSummary && !QDo(e);
}
function VGn(e) {
  return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}
function Wcn(e) {
  return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed";
}
function zcn(e) {
  if (!vYe(e)) return;
  let content = e.message.content,
    s;
  if (typeof content === "string") s = content;else for (let c of content) if (c.type === "text") {
    s = c.text;
    break;
  }
  if (!s) return;
  return mmt(s) || void 0;
}
function yIo(e, r, s, n, c, h, D, b) {
  try {
    let y = Zct(J(e));
    if (qe(y)) {
      t("[bridge:repl] Ingress message type=control_response"), c?.(y);
      return;
    }
    if (Te(y)) {
      t(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`), h?.(y);
      return;
    }
    if (GGn(y) && y.type === "control_cancel_request" && "request_id" in y && typeof y.request_id === "string") {
      t(`[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`), D?.(y.request_id);
      return;
    }
    if (ze(y)) {
      let x = Ge(y.notification);
      if (x === void 0) {
        if (b) t("[bridge:repl] Ingress message type=queued_notification"), b({
          type: "queued_notification",
          notification: y.notification
        });else t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      t("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"), y = x;
    }
    if (!GGn(y)) return;
    let I = "uuid" in y && typeof y.uuid === "string" ? y.uuid : void 0;
    if (I && r.has(I)) {
      t(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${I}`);
      return;
    }
    if (I && s.has(I)) {
      t(`[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${I}`);
      return;
    }
    if (t(`[bridge:repl] Ingress message type=${y.type}${I ? ` uuid=${I}` : ""}`), y.type === "user") {
      if ("isReplay" in y && y.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${I ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
        t(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${I}`);
        return;
      }
      if (jcn(y)) {
        t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${I ?? "none"}`);
        return;
      }
      if (I) s.add(I);
      i("tengu_bridge_message_received", {
        is_repl: !0
      }), _("bridge_message_receive"), n?.(y);
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
  } catch (error) {
    t(`[bridge:repl] Failed to parse ingress message: ${l(error)}`), m("bridge_message_receive", "bridge_message_receive_parse_failed");
  }
}
var we = new Set(["effortLevel", "ultracode"]),
  Ce = 5,
  xe = 40,
  error_3 = "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  Ne = 8000,
  V = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  Me = 660000,
  B = "side_question timed out: the host did not answer in time",
  response_2 = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function HDr(e) {
  return e.response !== null && e.synthetic !== !1 ? {
    ...e,
    response: response_2,
    synthetic: !0
  } : e;
}
var Ue = f(() => u({
    question: o(),
    history: C(u({
      question: o(),
      response: o(),
      fallback_notice: o().optional()
    })).optional()
  })),
  error_2 = "This session is shutting down.",
  Fe = new Set(["initialize", "file_suggestions", "read_file", "get_workspace_diff", "get_context_usage", "get_usage", "mcp_status"]);
function le(e, r) {
  if (r instanceof Mr) return tn(l(r));
  if (Ke(r)) return tn(l(r));
  return t(`${e} failed: ${l(r)}`, {
    level: "error"
  }), `${e} failed`;
}
function _Io(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, {
      level: "error"
    });
    throw new Mr("Connection failed");
  }
  throw new Mr(`Server status: ${e.type}`);
}
function w(e, r, s, n) {
  ce(e, r, s, n.then(c => ({
    subtype: "success",
    response: c ?? {}
  })));
}
function ce(e, r, session_id, n) {
  n.catch(c => ({
    subtype: "error",
    error: le(e.request.subtype, c)
  })).then(c => {
    let D = {
      ...(c.subtype === "error" ? {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: c.error
        }
      } : {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: c.response ?? {}
        }
      }),
      session_id: session_id
    };
    r(D), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${c.subtype}`);
  });
}
function pe(request_id, r) {
  if (r && r.ok === !1) return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: request_id,
      error: tn(r.error)
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
function bIo(e, r) {
  let {
    transport: transport,
    sessionId: n,
    outboundOnly: outboundOnly,
    getInitializeState: getInitializeState,
    getCommands: getCommands,
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
  let q = r.writeFrame ?? (a => {
      transport.write(a);
    }),
    g;
  if (Eo() && !Fe.has(e.request.subtype)) {
    t(`[bridge] refusing ${e.request.subtype}: this process is exiting`), g = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_2
      }
    };
    let a = {
      ...g,
      session_id: n
    };
    transport.write(a);
    return;
  }
  if (outboundOnly && e.request.subtype !== "initialize") {
    g = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_3
      }
    };
    let a = {
      ...g,
      session_id: n
    };
    transport.write(a), t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
    return;
  }
  let M = r.answerSharedControlRequest?.(e.request);
  if (M instanceof Promise) {
    ce(e, q, n, M);
    return;
  }
  if (M !== void 0) {
    let d = {
      ...(M.subtype === "error" ? {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: M.error
        }
      } : {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          ...(M.response !== void 0 && {
            response: M.response
          })
        }
      }),
      session_id: n
    };
    transport.write(d), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${M.subtype}`);
    return;
  }
  switch (e.request.subtype) {
    case "initialize":
      {
        try {
          let v = DX(e.request.supportedDialogKinds);
          if (v.length > 0) onDialogKindsDeclared?.(v);
        } catch (error) {
          t(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${l(error)}`);
        }
        let commands = [];
        if (!outboundOnly) try {
          commands = getCommands?.() ?? [];
        } catch (error) {
          m("bridge_initialize_commands", "get_commands_threw"), t(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${l(error)}`);
        }
        let d = getPendingPrompts?.() ?? [],
          pending_permission_requests = d.filter(item => item.request.subtype === "can_use_tool"),
          pending_user_dialog_requests = d.filter(item => item.request.subtype === "request_user_dialog");
        g = {
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
              ...getInitializeState?.()
            },
            pending_permission_requests: pending_permission_requests,
            pending_user_dialog_requests: pending_user_dialog_requests
          }
        };
        try {
          onClientInitialize?.();
        } catch (error) {
          t(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${l(error)}`);
        }
        break;
      }
    case "set_model":
      {
        let model = e.request.model;
        if (model != null && typeof model !== "string") {
          m("model_switch", "invalid_model_type"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: model must be a string"
            }
          };
          break;
        }
        let verdict_2 = onSetModel?.(e.request.model ?? void 0);
        if (verdict_2 && "then" in verdict_2) {
          de({
            verdict: verdict_2,
            deadlineMs: r.setModelVerdictDeadlineMs ?? ae,
            respond: S => {
              let v = {
                ...{
                  type: "control_response",
                  response: {
                    ...S,
                    request_id: e.request_id
                  }
                },
                session_id: n
              };
              q(v), t(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${S.subtype}`);
            },
            inform: S => {
              for (let content_2 of S) q({
                type: "system",
                subtype: "informational",
                content: content_2,
                level: "notice",
                uuid: N(),
                session_id: n
              });
            }
          });
          return;
        }
        if (verdict_2 && !verdict_2.ok) g = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: tn(verdict_2.error)
          }
        };else g = {
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
        if (!WGn(e.request)) {
          g = {
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
          a.then(k => pe(request_id_2, k), k => ({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: request_id_2,
              error: le(subtype, k)
            }
          })).then(k => {
            let v = {
              ...k,
              session_id: n
            };
            q(v), t(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${request_id_2} result=${k.response.subtype}`);
          });
          return;
        }
        g = pe(e.request_id, a);
        break;
      }
    case "set_permission_mode":
      {
        let a = Hg(e.request.mode),
          d = a === void 0 ? {
            ok: !1,
            error: error_5
          } : onSetPermissionMode?.(a) ?? {
            ok: !1,
            error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
          };
        if (d.ok) g = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else g = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: tn(d.error)
          }
        };
        break;
      }
    case "rename_session":
      {
        if (typeof e.request.title !== "string") {
          g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "rename_session: title must be a string"
            }
          };
          break;
        }
        let d = onRenameSession?.(e.request.title) ?? {
          ok: !1,
          error: "rename_session is not supported in this context (onRenameSession callback not registered)"
        };
        if (d.ok) g = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else g = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: tn(d.error)
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
        if (a.ok) g = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else g = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: tn(a.error)
          }
        };
        break;
      }
    case "file_suggestions":
      {
        if (!onFileSuggestions) {
          g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
            }
          };
          break;
        }
        w(e, q, n, onFileSuggestions(e.request.query).then(suggestions => ({
          suggestions: suggestions
        })));
        return;
      }
    case "read_file":
      {
        if (!onReadFile) {
          g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "read_file is not supported in this context (onReadFile callback not registered)"
            }
          };
          break;
        }
        w(e, q, n, onReadFile(e.request.path, e.request.max_bytes, e.request.encoding).then((absPath => d => ({
          ...d,
          absPath: absPath
        }))(e.request.path)));
        return;
      }
    case "get_workspace_diff":
      {
        if (!onGetWorkspaceDiff) {
          g = {
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
        w(e, q, n, Ht(onGetWorkspaceDiff(abortController.signal), Ne, V).catch(d => {
          if (abortController.abort(), l(d) === V) throw new Mr(V);
          throw d;
        }));
        return;
      }
    case "get_context_usage":
      {
        if (!onGetContextUsage) {
          g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
            }
          };
          break;
        }
        w(e, q, n, onGetContextUsage({
          detail: e.request.detail
        }).then(a => ({
          ...a,
          memoryFiles: []
        })));
        return;
      }
    case "get_usage":
      g = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: "get_usage is not supported in this context"
        }
      };
      break;
    case "mcp_status":
      g = {
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
          k = request.subtype === "mcp_authenticate" ? onMcpAuthenticate && (v => onMcpAuthenticate(v, request.redirectUri)) : request.subtype === "mcp_oauth_callback_url" ? onMcpOauthCallbackUrl && (v => onMcpOauthCallbackUrl(v, request.callbackUrl)) : onMcpReconnect;
        if (!k) {
          g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: `${subtype_2} is not supported in this context (callback not registered)`
            }
          };
          break;
        }
        w(e, q, n, k(serverName));
        return;
      }
    case "interrupt":
      onInterrupt?.(), g = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      };
      break;
    case "apply_flag_settings":
      {
        let a = Be(e.request.settings),
          d;
        if (!a.ok) d = a;else if (!onApplyFlagSettings) m("bridge_flag_settings", "not_registered"), d = {
          ok: !1,
          error: "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
        };else d = onApplyFlagSettings(a.settings);
        if (d.ok) _("bridge_flag_settings"), g = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else g = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: d.error
          }
        };
        break;
      }
    case "mcp_set_servers":
      {
        let servers = e.request.servers,
          d = "hint" in e.request ? e.request.hint : void 0,
          S;
        if (servers === void 0 && typeof d === "string") t("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"), S = {
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
        } catch (k) {
          t(`[bridge:repl] mcp_set_servers handler threw: ${l(k)}`, {
            level: "error"
          }), S = {
            ok: !1,
            error: "mcp_set_servers failed to apply"
          };
        }
        g = S.ok ? {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: {
              added: S.added,
              removed: S.removed,
              errors: Ve(S.errors, S.unknownServerCount)
            }
          }
        } : {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: tn(S.error)
          }
        };
        break;
      }
    case "stop_task":
      {
        let task_id = e.request.task_id;
        if (typeof task_id !== "string") {
          m("task_stop_user", "invalid_task_id"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string"
            }
          };
          break;
        }
        let d = task_id;
        if (!onStopTask) {
          m("task_stop_user", "not_supported"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        w(e, q, n, onStopTask(d));
        return;
      }
    case "background_tasks":
      {
        let a = UGn(e.request.tool_use_id);
        if (!a.valid) {
          m("task_local_shell_background_all", "invalid_tool_use_id"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_6
            }
          };
          break;
        }
        let {
          toolUseId: toolUseId_2
        } = a;
        if (!onBackgroundTasks) {
          m("task_local_shell_background_all", "not_supported"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "background_tasks is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        if (_l()) {
          m("task_local_shell_background_all", "disabled"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_7
            }
          };
          break;
        }
        w(e, q, n, Promise.resolve().then(() => onBackgroundTasks(toolUseId_2)).then(backgrounded => toolUseId_2 === void 0 ? {} : {
          backgrounded: backgrounded
        }));
        return;
      }
    case "cancel_async_message":
      {
        let message_uuid = e.request.message_uuid;
        if (typeof message_uuid !== "string") {
          m("bridge_cancel_queued_message", "invalid_message_uuid"), g = {
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
          m("bridge_cancel_queued_message", "not_supported"), g = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        w(e, q, n, Promise.resolve().then(() => onCancelAsyncMessage(message_uuid)).then(cancelled => {
          if (cancelled) _("bridge_cancel_queued_message");else p("bridge_cancel_queued_message", "not_queued");
          return {
            cancelled: cancelled
          };
        }, d => {
          throw m("bridge_cancel_queued_message", "failed"), d;
        }));
        return;
      }
    case "side_question":
      {
        let a = Ue().safeParse(e.request);
        if (!a.success) {
          m("bridge_side_question", "invalid_request"), g = {
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
          m("bridge_side_question", "not_registered"), g = {
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
          onProgress: k => {
            q({
              type: "system",
              subtype: "control_request_progress",
              request_id: e.request_id,
              ...k,
              uuid: N(),
              session_id: n
            });
          }
        }));
        w(e, q, n, Ht(S, r.sideQuestionDeadlineMs ?? Me, B).then(k => {
          if (k.response === null) p("bridge_side_question", "no_response");else if (k.synthetic !== !1) p("bridge_side_question", "synthetic");else _("bridge_side_question");
          return HDr(k);
        }, k => {
          if (l(k) === B) throw abortController_2.abort(), m("bridge_side_question", "deadline"), new Mr(B);
          if (Ke(k)) p("bridge_side_question", "cancelled");else m("bridge_side_question", "failed");
          throw k;
        }).finally(() => {
          if (cancellableRequests?.get(e.request_id) === abortController_2) cancellableRequests.delete(e.request_id);
        }));
        return;
      }
    case "fork_conversation":
      {
        if (onForkConversation) {
          w(e, q, n, onForkConversation(e.request, {
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
        g = {
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
      g = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: `REPL bridge does not handle control_request subtype: ${tn(String(e.request.subtype))}`
        }
      };
  }
  let Re = {
    ...g,
    session_id: n
  };
  transport.write(Re), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${g.response.subtype}`);
}
function _e(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var Le = "(servers not adopted)";
function Ve(e, r) {
  if (r <= 0) return e;
  return {
    ...e,
    [Le]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
  };
}
function Be(e) {
  if (!_e(e)) return m("bridge_flag_settings", "invalid_shape"), {
    ok: !1,
    error: "apply_flag_settings: settings must be an object"
  };
  let r = Object.keys(e).filter(item => !we.has(item));
  if (r.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let n = r.slice(0, Ce).map(item => cn(item, xe)),
      c = r.length > n.length ? ` (+${r.length - n.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${n.join(", ")}${c} cannot be changed over Remote Control (only effortLevel and ultracode can)`
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
function Gcn(session_id_2, r) {
  let s = r?.outcome,
    n = s !== void 0 && SD(s.terminal_reason),
    c = {
      type: "result",
      ...(!n && r?.userMessageUuid && {
        user_message_uuid: r.userMessageUuid
      }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: {
        ...Mp
      },
      modelUsage: {},
      permission_denials: [],
      session_id: session_id_2,
      uuid: N()
    };
  if (s === void 0 || n) return {
    ...c,
    subtype: "success",
    is_error: !1,
    num_turns: 0,
    result: "",
    stop_reason: null
  };
  let h = {
    is_error: s.is_error,
    num_turns: s.num_turns,
    stop_reason: s.stop_reason,
    ...(s.terminal_reason !== void 0 && {
      terminal_reason: s.terminal_reason
    })
  };
  if (s.subtype === "success") return {
    ...c,
    ...h,
    subtype: "success",
    result: s.is_error && s.structured_output === void 0 ? s.result ?? "" : "",
    ...(s.api_error_status != null && {
      api_error_status: s.api_error_status
    }),
    ...(s.api_error_code !== void 0 && {
      api_error_code: s.api_error_code
    })
  };
  return {
    ...c,
    ...h,
    subtype: s.subtype,
    errors: []
  };
}
function FDr(session_id_3, reason) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: reason,
    session_id: session_id_3,
    uuid: N()
  };
}
var name = "PushNotification";
function SIo(message, session_id_4) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: N(),
      container: null,
      model: model_2,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: {
        ...Mp
      },
      content: [{
        type: "tool_use",
        id: N(),
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
    uuid: N()
  };
}
function qGn(text, session_id_5) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: N(),
      container: null,
      model: model_2,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        ...Mp
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
    uuid: N(),
    timestamp: new Date().toISOString()
  };
}
class kte {
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
var Ye = f(() => u({
  notification_id: o().min(1),
  origin: A(inbound_origin),
  content: o()
}));
function Ge(e) {
  let r = Ye().safeParse(e);
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
function ze(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
var je = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED", "VERIFIED_KEYLESS_DEVICE", "SERVICE_VOUCHED", "SERVER_AUTHORED", "SERVER_REPLAYED", "TRANSITIVELY_VOUCHED"],
  ge = "DEVICE_ATTESTATION_STATUS_",
  He = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"];
function aFe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return He[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(ge) ? e.slice(ge.length) : e;
  return je.find(item => item === r) ?? "UNSPECIFIED";
}
var G = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function KGn(e, r) {
  if (e === "SERVICE_VOUCHED") return !0;
  let s = G.findIndex(item => item === e);
  return s !== -1 && s <= G.indexOf(r);
}
var YGn = {
    enforce: !1,
    acceptLevel: "VERIFIED",
    acceptStatuses: new Set()
  },
  Qe = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  Xe = f(() => u({
    accept_level: z(G).default("VERIFIED"),
    accept_statuses: C(z(Qe)).default([])
  }));
function wIo(e) {
  let attestation = Kr().attestation,
    s = Xe().safeParse(e);
  if (!s.success && !attestation.malformedConfigReported) {
    attestation.malformedConfigReported = !0;
    try {
      t(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${s.error.message}`, {
        level: "error"
      }), p("bridge_event_attestation", "malformed_config");
    } catch (error) {
      t(`[bridge:attestation] malformed-config report threw: ${l(error)}`, {
        level: "error"
      });
    }
  }
  return {
    enforce: !0,
    acceptLevel: s.success ? s.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(s.success ? s.data.accept_statuses : [])
  };
}
function vIo(e) {
  try {
    let reportedCloudWorkerCodes = Kr().attestation.reportedCloudWorkerCodes;
    if (reportedCloudWorkerCodes.has(e)) return;
    reportedCloudWorkerCodes.add(e), t(`${T(!0)} the attestation policy header could not be read whole (${e})`, {
      level: "error"
    }), p("ccr_worker_attestation_policy", e);
  } catch (error) {
    t(`${T(!0)} policy-fault report threw: ${l(error)}`, {
      level: "error"
    });
  }
}
function N6e(e) {
  Kr().attestation.filterPolicy = e;
}
function rNt(e) {
  Kr().attestation.dropNotifier = e;
}
function kIo(e) {
  let attestation_2 = Kr().attestation;
  if (attestation_2.dropNotifier === e) attestation_2.dropNotifier = void 0;
}
function Vcn(e) {
  Kr().attestation.senderDropWriter = e;
}
function qcn(e) {
  let attestation_3 = Kr().attestation;
  if (attestation_3.senderDropWriter === e) attestation_3.senderDropWriter = void 0;
}
var edt = "[remote-io] warning: ";
function XGn({
  status: status,
  payloadType: payloadType,
  subtype: subtype_3,
  isCloud: isCloud
}) {
  let c = isCloud ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what: payloadType === "control_response" ? "permission response" : payloadType === "control_request" ? `remote command (${subtype_3})` : "message",
    hint: status === "ABSENT" || status === "INVALID" ? "Re-pair the sending device in Trusted Devices." : status === "VERIFIED_BY_GATE" || status === "VERIFIED_KEYLESS_DEVICE" ? c : status === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : void 0
  };
}
function tdt(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped) return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let {
    what: what,
    hint: hint
  } = XGn(e);
  return `${r} ignored a ${what} that arrived without a valid device signature (attestation: ${e.status}).${hint ? ` ${hint}` : ""}`;
}
function lFe(e) {
  let {
    what: what_2,
    hint: hint_2
  } = XGn(e);
  return `This ${what_2} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${hint_2 ? ` ${hint_2}` : ""}`;
}
function Ze(e) {
  if (e.payloadType === "control_request") return;
  return qGn(e.windowCapped ? tdt(e) : lFe(e), Y());
}
var Je = new Set(["set_model", "set_permission_mode", "interrupt", "stop_task", "background_tasks", "cancel_async_message", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_authenticate", "mcp_oauth_callback_url", "mcp_reconnect", "apply_flag_settings", "side_question", "reload_plugins"]);
function ndt(e) {
  let r = "request_id" in e ? e.request_id : "requestId" in e ? e.requestId : void 0;
  return typeof r === "string" ? r : void 0;
}
function be(e) {
  let subtype_4 = Se(e);
  if (subtype_4 === void 0 || !Je.has(subtype_4)) return;
  return {
    subtype: subtype_4,
    requestId: e.payload ? ndt(e.payload) : void 0
  };
}
function Se(e) {
  let r = e.payload?.request,
    s = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : void 0;
  return typeof s === "string" ? s : void 0;
}
var et = new Set(["interrupt"]),
  tt = 2000,
  j = 200,
  rt = 256;
function U(e, r, s) {
  if (e.delete(s), e.add(s), e.size > r) for (let n of e) {
    e.delete(n);
    break;
  }
}
function st(e) {
  let attestation_4 = Kr().attestation;
  return attestation_4.knownInboundRequestIds.has(e) || attestation_4.knownOutboundRequestIds.has(e) || attestation_4.elicitationOutboundRequestIds.has(e);
}
function Kcn(e, {
  automated: automated
}) {
  let attestation_5 = Kr().attestation;
  if (U(attestation_5.knownOutboundRequestIds, j, e), automated) U(attestation_5.automatedOutboundRequestIds, j, e);
}
var ot = 512;
function EIo(e) {
  U(Kr().attestation.deviceOutboundRequestIds, ot, e);
}
function TIo(e) {
  U(Kr().attestation.elicitationOutboundRequestIds, j, e);
}
function it(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let s = ndt(r),
    attestation_6 = Kr().attestation;
  return s !== void 0 && (attestation_6.automatedOutboundRequestIds.has(s) || attestation_6.deviceOutboundRequestIds.has(s));
}
var at = 200;
function Ycn(e) {
  U(Kr().attestation.resolvedPromptRequestIds, at, e);
}
function dt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let s = ndt(r);
  return s !== void 0 && Kr().attestation.resolvedPromptRequestIds.has(s);
}
var ut = 60000,
  fe = 10;
function ye(e, r) {
  let attestation_7 = Kr().attestation;
  if (attestation_7.dropNotifier === void 0 && attestation_7.senderDropWriter === void 0) return;
  if (attestation_7.recentDropEventIds.has(r)) return;
  U(attestation_7.recentDropEventIds, rt, r);
  let n = e.payloadType === "control_request" ? attestation_7.commandDropNoticeWindow : attestation_7.messageDropNoticeWindow,
    c = Date.now();
  if (c - n.start >= ut) n.start = c, n.count = 0;
  if (n.count++, n.count <= fe) me(e);else if (n.count === fe + 1) me({
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
  let attestation_8 = Kr().attestation;
  if (attestation_8.dropNotifier !== void 0) try {
    attestation_8.dropNotifier(e);
  } catch (error) {
    t(`${T(e.isCloud === !0)} drop notifier threw: ${l(error)}`, {
      level: "error"
    });
  }
  if (attestation_8.senderDropWriter !== void 0) try {
    let s = Ze(e);
    if (s) attestation_8.senderDropWriter(s);
  } catch (error) {
    t(`${T(e.isCloud === !0)} drop sender writer threw: ${l(error)}`, {
      level: "error"
    });
  }
}
function JGn(e) {
  let s = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? ndt(e.payload) : void 0;
  if (s !== void 0) U(Kr().attestation.knownInboundRequestIds, tt, s);
}
function W(e, r, s) {
  if (r !== "control_request") return;
  if (JGn(e), be(e) !== void 0) _(s ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}
var pt = new Set(["bash_command", "update_environment_variables", "assistant", "system"]);
function lt(e, r, s, n) {
  try {
    let attestation_9 = Kr().attestation,
      h = n ? attestation_9.reportedCloudWorkerCodes : attestation_9.reportedStrayDropCodes,
      D = s === "control_request" ? "control_request_other" : pt.has(s) ? s : "other_payload_type",
      b = `${r.toLowerCase()}_${D}`;
    if (h.has(b)) return;
    h.add(b), t(`${T(n)} DROPPING unverified ${s} event_id=${e.event_id} status=${r} (stray payload class ${b}; counted once per process)`, {
      level: "warn"
    }), m(n ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", b);
  } catch (error) {
    t(`${T(n)} stray-drop report threw: ${l(error)}`, {
      level: "error"
    });
  }
}
function T(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function $Dr(e, r, {
  isCloudWorker: isCloudWorker,
  vouchWithheld = !1
}) {
  let status_2 = !isCloudWorker && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e,
    h = !isCloudWorker && status_2 === "TRANSITIVELY_VOUCHED" && KGn("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !vouchWithheld;
  return {
    status: status_2,
    meetsLevel: h || KGn(status_2, r.acceptLevel),
    configException: r.acceptStatuses.has(status_2) || status_2 === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")
  };
}
function ke(e, r, isCloudWorker_2) {
  let payloadType_2 = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    c = payloadType_2 === "user" || payloadType_2 === "control_response",
    h = aFe(e.device_attestation_status),
    vouchWithheld_2 = h === "TRANSITIVELY_VOUCHED" && payloadType_2 === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""),
    {
      status: status_3,
      meetsLevel: meetsLevel,
      configException: configException
    } = $Dr(h, r, {
      isCloudWorker: isCloudWorker_2,
      vouchWithheld: vouchWithheld_2
    }),
    x = `${status_3.toLowerCase()}_${payloadType_2}${vouchWithheld_2 ? "_unstamped" : ""}`,
    F = isCloudWorker_2 && status_3 === "SERVICE_VOUCHED" && payloadType_2 === "control_request" && !et.has(Se(e) ?? "");
  if (meetsLevel && !F) {
    if (c) _(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return W(e, payloadType_2, isCloudWorker_2), !1;
  }
  if (!r.enforce) {
    if (W(e, payloadType_2, isCloudWorker_2), status_3 === "UNSPECIFIED") return !1;
    if (c) t(`${T(isCloudWorker_2)} accepting unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: "info"
    }), p(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", x);
    return !1;
  }
  let P = configException,
    O = !1;
  if (c) {
    let R = x;
    if (t(`${T(isCloudWorker_2)} ${P ? "accepting (config exception)" : "DROPPING"} unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: P ? "info" : "warn"
    }), P) p(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", R);else if (payloadType_2 === "control_response" && it(e)) O = !0, t(`${T(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} answers an automated outbound request; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_automated_reply`);else if (payloadType_2 === "control_response" && dt(e)) O = !0, t(`${T(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} is a duplicate answer to an already-resolved prompt; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_resolved_duplicate`);else O = !0, m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", R), ye({
      status: status_3,
      payloadType: payloadType_2,
      ...(isCloudWorker_2 && {
        isCloud: !0
      })
    }, e.event_id);
  } else if (payloadType_2 === "control_request" && !P) {
    let R = be(e);
    if (R) {
      O = !0;
      let requestId = R.requestId !== void 0 && st(R.requestId) ? void 0 : R.requestId;
      t(`${T(isCloudWorker_2)} DROPPING unverified control_request subtype=${R.subtype} event_id=${e.event_id} status=${status_3}${requestId === void 0 && R.requestId !== void 0 ? " (forged-id refusal suppressed)" : ""}`, {
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
  if (!P && !O) lt(e, status_3, payloadType_2, isCloudWorker_2);
  if (P) W(e, payloadType_2, isCloudWorker_2);
  return !P;
}
function Xcn(e) {
  return ke(e, Kr().attestation.filterPolicy?.() ?? YGn, !1);
}
function CIo(e, r) {
  if (e.source !== "client") {
    try {
      let reportedCloudWorkerCodes_2 = Kr().attestation.reportedCloudWorkerCodes;
      if (!reportedCloudWorkerCodes_2.has("source_not_client")) reportedCloudWorkerCodes_2.add("source_not_client"), t(`${T(!0)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, {
        level: "warn"
      }), m("ccr_worker_stray_event_attestation", "source_not_client");
    } catch (error) {
      t(`${T(!0)} source-drop report threw: ${l(error)}`, {
        level: "error"
      });
    }
    if (!r.enforce) JGn(e);
    return r.enforce;
  }
  return ke(e, r, !0);
}
export { UGn, error_6 as BGn, Zct, jGn, DX, WGn, error_4 as zGn, NDr, jcn, GGn, hIo, LX, nNt, VGn, Wcn, zcn, yIo, HDr, _Io, bIo, Gcn, FDr, SIo, qGn, kte, aFe, KGn, YGn, wIo, vIo, N6e, rNt, kIo, Vcn, qcn, edt, XGn, tdt, lFe, ndt, Kcn, EIo, TIo, Ycn, JGn, $Dr, Xcn, CIo };