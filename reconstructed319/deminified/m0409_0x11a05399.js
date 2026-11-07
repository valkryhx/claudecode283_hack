// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Mi as model_3, z } from "B:/~BUN/root/chunk-game8aqv.js";
import { We, Sr, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { on } from "B:/~BUN/root/chunk-09sn55yf.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { _n, vMr, sDs, NVe, cH } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Pg, JAe as error_5 } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { mwt } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ff } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { Xbe as inbound_origin, xb, eSe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { _o } from "B:/~BUN/root/chunk-rr294jrm.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { _2e, YCs } from "B:/~BUN/root/chunk-d1t1tzcz.js";
import { ch, C2e, a4, wz } from "B:/~BUN/root/chunk-cbv74thb.js";
import { _i } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { o, E, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var E_o = 32;
function ibe(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "string" && item.length > 0 && item.length <= 64).slice(0, 32);
}
import { randomUUID as M } from "crypto";
var h$n = 8000;
async function ge({
  verdict: verdict,
  respond: respond,
  inform: inform
}) {
  let s = verdict.then(f => f ?? {
      ok: !0
    }),
    i;
  try {
    i = await s;
  } catch (f) {
    return t(`set_model verdict rejected: ${d(f)}`, {
      level: "error"
    }), respond({
      subtype: "error",
      error: "set_model failed",
      error_code: "internal_error"
    });
  }
  let model = typeof i.model === "string" ? on(i.model) : void 0;
  if (i.ok) {
    if (Array.isArray(i.notices)) inform(i.notices.filter(item => typeof item === "string").map(on));
    return respond(model === void 0 ? {
      subtype: "success"
    } : {
      subtype: "success",
      response: {
        model: model
      }
    });
  }
  let v = i.code,
    error_code = sDs.find(item => item === v);
  return respond({
    subtype: "error",
    error: Oe(i.error).map(on).join(`
`),
    ...(error_code !== void 0 && {
      error_code: error_code
    }),
    ...(model !== void 0 && {
      model: model
    })
  });
}
function Oe(e) {
  return typeof e === "string" ? e.split(`
`) : [""];
}
var W = "live_only",
  g$n = 57344,
  error = "The reply is too large to be sent without storing it";
function _Ar(e, r) {
  return {
    ...a4(e, r),
    [W]: !0
  };
}
function y$n(e) {
  return e.type === "control_response" && e[W] === !0;
}
function AKi(e) {
  if (!(W in e)) return e;
  let {
    [W]: r,
    ...n
  } = e;
  return n;
}
function xKi(e, r) {
  if (!y$n(e) || Buffer.byteLength(_(e)) <= r) return e;
  let response = e.response;
  return {
    type: "control_response",
    [W]: !0,
    ...(typeof e.uuid === "string" && {
      uuid: e.uuid
    }),
    response: {
      subtype: "error",
      request_id: response?.request_id,
      error: error
    }
  };
}
function w_o(toolUseId) {
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
function v_o(e) {
  return {
    mcpInstructions: void 0,
    agents: e.agents.map(({
      path: path,
      pluginId: pluginId,
      ...s
    }) => s),
    skills: e.skills && {
      ...e.skills,
      skillFrontmatter: e.skills.skillFrontmatter.map(({
        path: path_2,
        pluginId: pluginId_2,
        ...s
      }) => s)
    }
  };
}
class sfe extends Sr {
  errorCode;
  constructor(e, r, n) {
    super(e, r);
    this.errorCode = n;
  }
}
function nrn(e) {
  return Pe().safeParse(e).success;
}
var Pe = p(() => u({
    max_thinking_tokens: E().refine(e => Number.isInteger(e)).nullable().optional(),
    thinking_display: B(NVe).nullable().optional()
  })),
  error_4 = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${NVe.map(item => `"${item}"`).join(", ")}, or null`;
var jCs = "display_only";
function C_o(e) {
  return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === !0 && e.display_only === !0;
}
function R_o(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function Me(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}
function Le(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}
function PKi(e) {
  _o().bridgeStateFramesGate = e;
}
function abe(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) {
    if (!(le() && e.visibleToRemoteClients === !0)) return !1;
  }
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && xb(e.attachment.origin);
  }
  return e.type === "user" || e.type === "assistant" || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && (_o().bridgeStateFramesGate?.() ?? !0));
}
function _$n(e) {
  if (le() && e.type === "user" && e.isVirtual) return !1;
  return e.type === "user" && !e.isCompactSummary && !vMr(e);
}
function A_o(e) {
  if (le() && (e.type === "user" || e.type === "assistant") && e.isVirtual === !0) return !0;
  return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}
function bAr(e) {
  return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed" || e.subtype === "file_attachments_missing";
}
function SAr(e) {
  if (!eSe(e)) return;
  let content = e.message.content,
    n;
  if (typeof content === "string") n = content;else for (let i of content) if (i.type === "text") {
    n = i.text;
    break;
  }
  if (!n) return;
  return mwt(n) || void 0;
}
function OKi(e, r, n, s, i, b, v, A) {
  try {
    let f = _2e(ee(e));
    if (Me(f)) {
      t("[bridge:repl] Ingress message type=control_response"), i?.(f);
      return;
    }
    if (Le(f)) {
      t(`[bridge:repl] Inbound control_request subtype=${f.request.subtype}`), b?.(f);
      return;
    }
    if (R_o(f) && f.type === "control_cancel_request" && "request_id" in f && typeof f.request_id === "string") {
      t(`[bridge:repl] Inbound control_cancel_request request_id=${f.request_id}`), v?.(f.request_id);
      return;
    }
    if (tt(f)) {
      let R = et(f.notification);
      if (R === void 0) {
        if (A) t("[bridge:repl] Ingress message type=queued_notification"), A({
          type: "queued_notification",
          notification: f.notification
        });else t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      t("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"), f = R;
    }
    if (!R_o(f)) return;
    let I = "uuid" in f && typeof f.uuid === "string" ? f.uuid : void 0;
    if (I && r.has(I)) {
      t(`[bridge:repl] Ignoring echo: type=${f.type} uuid=${I}`);
      return;
    }
    if (le()) {
      let R = import.meta.require("B:/~BUN/root/chunk-r2dd10bp.js");
      if (I !== void 0 && R.isScriptRowUUID(r, I) || f.type === "user" && "is_virtual" in f && f.is_virtual === !0) {
        t(`[bridge:repl] Ignoring a script call's row at ingress: type=${f.type} uuid=${I ?? "none"}`);
        return;
      }
    }
    if (I && n.has(I)) {
      t(`[bridge:repl] Ignoring re-delivered inbound: type=${f.type} uuid=${I}`);
      return;
    }
    if (t(`[bridge:repl] Ingress message type=${f.type}${I ? ` uuid=${I}` : ""}`), f.type === "user") {
      if ("isReplay" in f && f.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${I ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in f && f.parent_tool_use_id != null) {
        t(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${I}`);
        return;
      }
      if (C_o(f)) {
        t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${I ?? "none"}`);
        return;
      }
      if (I) n.add(I);
      l("tengu_bridge_message_received", {
        is_repl: !0
      }), g("bridge_message_receive"), s?.(f);
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${f.type}`);
  } catch (error) {
    t(`[bridge:repl] Failed to parse ingress message: ${d(error)}`), m("bridge_message_receive", "bridge_message_receive_parse_failed");
  }
}
var Ue = new Set(["effortLevel", "ultracode"]),
  $e = 5,
  Fe = 40,
  error_3 = "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  Ve = 8000,
  error_6 = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  WCs = 660000,
  rrn = "side_question timed out: the host did not answer in time",
  response_2 = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function zCs(e) {
  return e.response !== null && e.synthetic !== !1 ? {
    ...e,
    response: response_2,
    synthetic: !0
  } : e;
}
var je = p(() => u({
    question: o(),
    history: C(u({
      question: o(),
      response: o(),
      fallback_notice: o().optional()
    })).optional()
  })),
  error_2 = "This session is shutting down.",
  Ye = new Set(["initialize", "file_suggestions", "read_file", "get_workspace_diff", "get_context_usage", "get_usage", "mcp_status"]);
function me(e, r) {
  if (r instanceof Sr) return on(d(r));
  if (We(r)) return on(d(r));
  return t(`${e} failed: ${d(r)}`, {
    level: "error"
  }), `${e} failed`;
}
function IKi(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, {
      level: "error"
    });
    throw new Sr("Connection failed");
  }
  throw new Sr(`Server status: ${e.type}`);
}
function P(e, r, n, s) {
  J(e, r, n, s.then(i => ({
    subtype: "success",
    response: i ?? {}
  })));
}
function be(e, r) {
  let request = e.request;
  if (request.subtype === "mcp_status") return request.liveReply === !0;
  return request.subtype === "mcp_authenticate" && request.liveReply === !0 && r?.callbackExpected === !0;
}
function J(e, r, session_id, s) {
  s.catch(i => ({
    subtype: "error",
    error: me(e.request.subtype, i),
    ...(i instanceof sfe && {
      error_code: i.errorCode
    })
  })).then(i => {
    let v = {
      ...(i.subtype === "error" ? wz(e.request_id, i.error, i.error_code) : be(e, i.response) ? _Ar(e.request_id, i.response ?? {}) : a4(e.request_id, i.response ?? {})),
      session_id: session_id
    };
    r(v), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${i.subtype}`);
  });
}
function ye(request_id, r) {
  if (r && r.ok === !1) return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: request_id,
      error: on(r.error)
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
function MKi(e, r) {
  let {
    transport: transport,
    sessionId: s,
    outboundOnly: outboundOnly,
    getInitializeState: getInitializeState,
    claudeCodeVersion: v,
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
  let q = r.writeFrame ?? (a => {
      transport.write(a);
    }),
    S;
  if (_n() && !Ye.has(e.request.subtype)) {
    t(`[bridge] refusing ${e.request.subtype}: this process is exiting`), S = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_2
      }
    };
    let a = {
      ...S,
      session_id: s
    };
    transport.write(a);
    return;
  }
  if (outboundOnly && e.request.subtype !== "initialize") {
    S = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: error_3
      }
    };
    let a = {
      ...S,
      session_id: s
    };
    transport.write(a), t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
    return;
  }
  let O = r.answerSharedControlRequest?.(e.request);
  if (O instanceof Promise) {
    J(e, q, s, O);
    return;
  }
  if (O !== void 0) {
    let y = {
      ...(O.subtype === "error" ? wz(e.request_id, O.error, O.error_code) : be(e, O.response) ? _Ar(e.request_id, O.response) : {
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
    transport.write(y), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${O.subtype}`);
    return;
  }
  switch (e.request.subtype) {
    case "initialize":
      {
        try {
          let D = ibe(e.request.supportedDialogKinds);
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
        let y = getPendingPrompts?.() ?? [],
          pending_permission_requests = y.filter(item => item.request.subtype === "can_use_tool"),
          pending_user_dialog_requests = y.filter(item => item.request.subtype === "request_user_dialog");
        S = {
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
              ...(v !== void 0 && {
                claude_code_version: v
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
        let model_2 = e.request.model;
        if (model_2 != null && typeof model_2 !== "string") {
          m("model_switch", "invalid_model_type"), S = {
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
          m("model_switch", "only_if_model_is_current_unserved"), S = {
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
          ge({
            verdict: verdict_2,
            respond: h => {
              let xe = {
                ...{
                  type: "control_response",
                  response: {
                    ...h,
                    request_id: e.request_id
                  }
                },
                session_id: s
              };
              q(xe), t(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${h.subtype}`);
            },
            inform: h => {
              for (let content_2 of h) q({
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
        if (verdict_2 && !verdict_2.ok) S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: on(verdict_2.error)
          }
        };else S = {
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
        if (!nrn(e.request)) {
          S = {
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
          a.then(h => ye(request_id_2, h), h => ({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: request_id_2,
              error: me(subtype, h)
            }
          })).then(h => {
            let D = {
              ...h,
              session_id: s
            };
            q(D), t(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${request_id_2} result=${h.response.subtype}`);
          });
          return;
        }
        S = ye(e.request_id, a);
        break;
      }
    case "set_permission_mode":
      {
        let a = Pg(e.request.mode),
          y = a === void 0 ? {
            ok: !1,
            error: error_5,
            code: "invalid_mode"
          } : onSetPermissionMode?.(a) ?? {
            ok: !1,
            error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
          };
        if (y.ok) S = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: on(y.error),
            ...(y.code !== void 0 && {
              error_code: y.code
            })
          }
        };
        break;
      }
    case "rename_session":
      {
        if (typeof e.request.title !== "string") {
          S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "rename_session: title must be a string"
            }
          };
          break;
        }
        let y = onRenameSession?.(e.request.title) ?? {
          ok: !1,
          error: "rename_session is not supported in this context (onRenameSession callback not registered)"
        };
        if (y.ok) S = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: on(y.error)
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
        if (a.ok) S = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: on(a.error)
          }
        };
        break;
      }
    case "file_suggestions":
      {
        if (!onFileSuggestions) {
          S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
            }
          };
          break;
        }
        P(e, q, s, onFileSuggestions(e.request.query).then(suggestions => ({
          suggestions: suggestions
        })));
        return;
      }
    case "read_file":
      {
        if (!onReadFile) {
          S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "read_file is not supported in this context (onReadFile callback not registered)"
            }
          };
          break;
        }
        P(e, q, s, onReadFile(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor).then((absPath => y => ({
          ...y,
          absPath: absPath
        }))(e.request.path)));
        return;
      }
    case "get_workspace_diff":
      {
        if (!onGetWorkspaceDiff) {
          S = {
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
        J(e, q, s, zt(onGetWorkspaceDiff(abortController.signal), Ve, error_6).then(response_3 => ({
          subtype: "success",
          response: response_3
        }), y => {
          if (abortController.abort(), d(y) === error_6) return {
            subtype: "error",
            error: error_6,
            error_code: "workspace_diff_pending"
          };
          throw y;
        }));
        return;
      }
    case "get_context_usage":
      {
        if (!onGetContextUsage) {
          S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
            }
          };
          break;
        }
        P(e, q, s, onGetContextUsage({
          detail: e.request.detail
        }).then(a => ({
          ...a,
          memoryFiles: [],
          ...v_o(a)
        })));
        return;
      }
    case "get_usage":
      S = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: "get_usage is not supported in this context"
        }
      };
      break;
    case "mcp_status":
      S = {
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
        let request_2 = e.request,
          {
            subtype: subtype_2,
            serverName: serverName
          } = request_2,
          h = request_2.subtype === "mcp_authenticate" ? onMcpAuthenticate && (D => onMcpAuthenticate(D, request_2.redirectUri, request_2.redirectUriOnly)) : request_2.subtype === "mcp_oauth_callback_url" ? onMcpOauthCallbackUrl && (D => onMcpOauthCallbackUrl(D, request_2.callbackUrl)) : onMcpReconnect;
        if (!h) {
          S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: `${subtype_2} is not supported in this context (callback not registered)`
            }
          };
          break;
        }
        P(e, q, s, h(serverName));
        return;
      }
    case "interrupt":
      onInterrupt?.(), S = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      };
      break;
    case "apply_flag_settings":
      {
        let a = Qe(e.request.settings),
          y;
        if (!a.ok) y = a;else if (!onApplyFlagSettings) m("bridge_flag_settings", "not_registered"), y = {
          ok: !1,
          error: "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
        };else y = onApplyFlagSettings(a.settings, e.request_id);
        if (y.ok) g("bridge_flag_settings"), S = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id
          }
        };else S = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: y.error
          }
        };
        break;
      }
    case "mcp_set_servers":
      {
        let servers = e.request.servers,
          y = "hint" in e.request ? e.request.hint : void 0,
          k;
        if (servers === void 0 && typeof y === "string") t("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"), k = {
          ok: !0,
          added: [],
          removed: [],
          errors: {},
          unknownServerCount: 0
        };else if (!Se(servers)) k = {
          ok: !1,
          error: "mcp_set_servers: servers must be an object"
        };else if (!onMcpSetServers) k = {
          ok: !1,
          error: "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)"
        };else try {
          k = onMcpSetServers(servers);
        } catch (h) {
          t(`[bridge:repl] mcp_set_servers handler threw: ${d(h)}`, {
            level: "error"
          }), k = {
            ok: !1,
            error: "mcp_set_servers failed to apply"
          };
        }
        S = k.ok ? {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: {
              added: k.added,
              removed: k.removed,
              errors: He(k.errors, k.unknownServerCount)
            }
          }
        } : {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: on(k.error)
          }
        };
        break;
      }
    case "stop_task":
      {
        let task_id = e.request.task_id;
        if (typeof task_id !== "string") {
          m("task_stop_user", "invalid_task_id"), S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string"
            }
          };
          break;
        }
        let y = task_id;
        if (!onStopTask) {
          m("task_stop_user", "not_supported"), S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        P(e, q, s, onStopTask(y));
        return;
      }
    case "background_tasks":
      {
        let a = w_o(e.request.tool_use_id);
        if (!a.valid) {
          m("task_local_shell_background_all", "invalid_tool_use_id"), S = {
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
          m("task_local_shell_background_all", "not_supported"), S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "background_tasks is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        if (ff()) {
          m("task_local_shell_background_all", "disabled"), S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: error_8
            }
          };
          break;
        }
        P(e, q, s, Promise.resolve().then(() => onBackgroundTasks(toolUseId_2)).then(backgrounded => toolUseId_2 === void 0 ? {} : {
          backgrounded: backgrounded
        }));
        return;
      }
    case "cancel_async_message":
      {
        let message_uuid = e.request.message_uuid;
        if (typeof message_uuid !== "string") {
          m("bridge_cancel_queued_message", "invalid_message_uuid"), S = {
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
          m("bridge_cancel_queued_message", "not_supported"), S = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message is not supported in this context (callback not registered)"
            }
          };
          break;
        }
        P(e, q, s, Promise.resolve().then(() => onCancelAsyncMessage(message_uuid)).then(cancelled => {
          if (cancelled) g("bridge_cancel_queued_message");else c("bridge_cancel_queued_message", "not_queued");
          return {
            cancelled: cancelled
          };
        }, y => {
          throw m("bridge_cancel_queued_message", "failed"), y;
        }));
        return;
      }
    case "side_question":
      {
        let a = je().safeParse(e.request);
        if (!a.success) {
          m("bridge_side_question", "invalid_request"), S = {
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
          m("bridge_side_question", "not_registered"), S = {
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
        let k = Promise.resolve().then(() => onSideQuestion(a.data, {
          signal: abortController_2.signal,
          onProgress: h => {
            q({
              type: "system",
              subtype: "control_request_progress",
              request_id: e.request_id,
              ...h,
              uuid: M(),
              session_id: s
            });
          }
        }));
        P(e, q, s, zt(k, r.sideQuestionDeadlineMs ?? WCs, rrn).then(h => {
          if (h.response === null) c("bridge_side_question", "no_response");else if (h.synthetic !== !1) c("bridge_side_question", "synthetic");else g("bridge_side_question");
          return zCs(h);
        }, h => {
          if (d(h) === rrn) throw abortController_2.abort(), m("bridge_side_question", "deadline"), new Sr(rrn);
          if (We(h)) c("bridge_side_question", "cancelled");else m("bridge_side_question", "failed");
          throw h;
        }).finally(() => {
          if (cancellableRequests?.get(e.request_id) === abortController_2) cancellableRequests.delete(e.request_id);
        }));
        return;
      }
    case "fork_conversation":
      {
        if (onForkConversation) {
          P(e, q, s, onForkConversation(e.request, {
            promptPending: hasPendingPrompts?.() ?? !1,
            requestId: e.request_id
          }));
          return;
        }
        let response_4 = {
          forked: !1,
          error: "unsupported",
          reason: "requires_remote_control_server"
        };
        S = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: response_4
          }
        };
        break;
      }
    default:
      S = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: `REPL bridge does not handle control_request subtype: ${on(String(e.request.subtype))}`
        }
      };
  }
  let qe = {
    ...S,
    session_id: s
  };
  transport.write(qe), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${S.response.subtype}`);
}
function Se(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var ze = "(servers not adopted)";
function He(e, r) {
  if (r <= 0) return e;
  return {
    ...e,
    [ze]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
  };
}
function Qe(e) {
  if (!Se(e)) return m("bridge_flag_settings", "invalid_shape"), {
    ok: !1,
    error: "apply_flag_settings: settings must be an object"
  };
  let r = Object.keys(e).filter(item => !Ue.has(item));
  if (r.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let s = r.slice(0, $e).map(item => Et(item, Fe)),
      i = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${i} cannot be changed over Remote Control (only effortLevel and ultracode can)`
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
function Xe(e) {
  return !cH(e.terminal_reason);
}
function b$n({
  userMessageUuid: userMessageUuid,
  outcome: outcome,
  aborted: aborted
}) {
  let s = outcome?.terminal_reason,
    terminalReason = cH(s) ? s : aborted?.guess,
    b = terminalReason === void 0 ? void 0 : {
      userMessageUuid: userMessageUuid,
      terminalReason: terminalReason,
      ...(outcome?.stopped_by_permission_check && {
        stoppedByPermissionCheck: !0
      })
    };
  if (aborted === void 0) return outcome === void 0 || Xe(outcome) ? {
    userMessageUuid: userMessageUuid,
    outcome: outcome
  } : b;
  if (aborted.sendRunsAgain) return;
  switch (aborted.by) {
    case "stop":
      return b;
    case "send-now":
      return {
        userMessageUuid: userMessageUuid,
        sendNowCut: !0
      };
    case "other":
      return;
  }
}
function wAr(session_id_2, r) {
  let n = r?.outcome,
    s = {
      type: "result",
      ...(r?.userMessageUuid && {
        user_message_uuid: r.userMessageUuid
      }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: {
        ...ch
      },
      modelUsage: {},
      permission_denials: [],
      session_id: session_id_2,
      uuid: M()
    };
  if (n === void 0) return {
    ...s,
    subtype: "success",
    is_error: !1,
    num_turns: 0,
    result: "",
    stop_reason: null,
    ...(r?.terminalReason !== void 0 && {
      terminal_reason: r.terminalReason
    }),
    ...(r?.stoppedByPermissionCheck && {
      stopped_by_permission_check: !0
    })
  };
  let i = {
    is_error: n.is_error,
    num_turns: n.num_turns,
    stop_reason: n.stop_reason,
    ...(n.terminal_reason !== void 0 && {
      terminal_reason: n.terminal_reason
    })
  };
  if (n.subtype === "success") return {
    ...s,
    ...i,
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
    ...s,
    ...i,
    subtype: n.subtype,
    errors: []
  };
}
function GCs(session_id_3, reason) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: reason,
    session_id: session_id_3,
    uuid: M()
  };
}
var name = "PushNotification";
function DKi(message, session_id_4) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: model_3,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: {
        ...ch
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
function x_o(text, session_id_5) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: model_3,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        ...ch
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
class T3 {
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
var Je = p(() => u({
  notification_id: o().min(1),
  origin: T(inbound_origin),
  content: o()
}));
function et(e) {
  let r = Je().safeParse(e);
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
function tt(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
var rt = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED", "VERIFIED_KEYLESS_DEVICE", "SERVICE_VOUCHED", "SERVER_AUTHORED", "SERVER_REPLAYED", "TRANSITIVELY_VOUCHED"],
  Ee = "DEVICE_ATTESTATION_STATUS_",
  nt = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"];
function lbe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return nt[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(Ee) ? e.slice(Ee.length) : e;
  return rt.find(item => item === r) ?? "UNSPECIFIED";
}
var j = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function LKi(e, r) {
  return j.indexOf(e) <= j.indexOf(r) ? e : r;
}
function P_o(e, r) {
  if (e === "SERVICE_VOUCHED") return !0;
  let n = j.findIndex(item => item === e);
  return n !== -1 && n <= j.indexOf(r);
}
var O_o = {
    enforce: !1,
    acceptLevel: "VERIFIED",
    acceptStatuses: new Set()
  },
  ot = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  st = p(() => u({
    accept_level: B(j).default("VERIFIED"),
    accept_statuses: C(B(ot)).default([])
  }));
function I_o(e) {
  let attestation = _o().attestation,
    n = st().safeParse(e);
  if (!n.success && !attestation.malformedConfigReported) {
    attestation.malformedConfigReported = !0;
    try {
      t(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${n.error.message}`, {
        level: "error"
      }), c("bridge_event_attestation", "malformed_config");
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
function NKi(e) {
  try {
    let reportedCloudWorkerCodes = _o().attestation.reportedCloudWorkerCodes;
    if (reportedCloudWorkerCodes.has(e)) return;
    reportedCloudWorkerCodes.add(e), t(`${x(!0)} the attestation policy header could not be read whole (${e})`, {
      level: "error"
    }), c("ccr_worker_attestation_policy", e);
  } catch (error) {
    t(`${x(!0)} policy-fault report threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function $Ft(e) {
  _o().attestation.filterPolicy = e;
}
function S$n(e) {
  _o().attestation.dropNotifier = e;
}
function FKi(e) {
  let attestation_2 = _o().attestation;
  if (attestation_2.dropNotifier === e) attestation_2.dropNotifier = void 0;
}
function kAr(e) {
  _o().attestation.senderDropWriter = e;
}
function vAr(e) {
  let attestation_3 = _o().attestation;
  if (attestation_3.senderDropWriter === e) attestation_3.senderDropWriter = void 0;
}
var orn = "[remote-io] warning: ";
function M_o({
  status: status,
  payloadType: payloadType,
  subtype: subtype_3,
  isCloud: isCloud
}) {
  let i = isCloud ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what: payloadType === "control_response" ? "permission response" : payloadType === "control_request" ? `remote command (${subtype_3})` : "message",
    hint: isCloud && status === "ABSENT" ? "If you sent it, try again or sign in again." : isCloud && status === "VERIFIED_BY_GATE" ? "If you sent it, signing in again may fix this." : status === "ABSENT" || status === "INVALID" ? "Re-pair the sending device in Trusted Devices." : status === "VERIFIED_BY_GATE" || status === "VERIFIED_KEYLESS_DEVICE" ? i : status === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : void 0
  };
}
function srn(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped) return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let {
    what: what,
    hint: hint
  } = M_o(e);
  return `${r} ignored a ${what} that arrived without a valid device signature (attestation: ${e.status}).${hint ? ` ${hint}` : ""}`;
}
function sgt(e) {
  let {
    what: what_2,
    hint: hint_2
  } = M_o(e);
  return `This ${what_2} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${hint_2 ? ` ${hint_2}` : ""}`;
}
function it(e) {
  if (e.payloadType === "control_request") return;
  return x_o(e.windowCapped ? srn(e) : sgt(e), z());
}
var at = new Set(["set_model", "set_permission_mode", "interrupt", "stop_task", "background_tasks", "cancel_async_message", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_authenticate", "mcp_oauth_callback_url", "mcp_reconnect", "apply_flag_settings", "side_question", "reload_plugins"]);
function g2e(e) {
  let r = YCs(e);
  return typeof r === "string" ? r : void 0;
}
function Re(e) {
  let subtype_4 = ne(e);
  if (subtype_4 === void 0 || !at.has(subtype_4)) return;
  return {
    subtype: subtype_4,
    requestId: e.payload ? g2e(e.payload) : void 0
  };
}
function ne(e) {
  let r = e.payload?.request,
    n = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : void 0;
  return typeof n === "string" ? n : void 0;
}
var dt = new Set(["interrupt", "end_session"]),
  ut = 128;
function VCs(e) {
  let r = ne(e),
    n = e.payload ? g2e(e.payload) : void 0;
  return lbe(e.device_attestation_status) === "SERVICE_VOUCHED" && e.payload?.type === "control_request" && (r === "set_model" || r === "apply_flag_settings") && typeof n === "string" && n.length <= ut ? n : void 0;
}
function pt(e, r) {
  if (typeof e !== "object" || e === null) return !1;
  let n = "subtype" in e ? e.subtype : void 0,
    s = Object.keys(e).sort().join();
  if (n === "set_model") {
    let v = "model" in e ? e.model : void 0;
    return s === "model,subtype" && typeof v === "string" && r(v);
  }
  let i = "settings" in e ? e.settings : void 0;
  if (n !== "apply_flag_settings" || s !== "settings,subtype" || typeof i !== "object" || i === null) return !1;
  let b = Object.entries(i);
  return b.every(([v, A]) => v === "effortLevel" && _i.some(item => item === A) || v === "ultracode" && A === !1) && b.some(([v]) => v === "effortLevel");
}
var lt = 2000,
  Q = 200,
  De = 128,
  ct = 256;
function U(e, r, n) {
  if (e.delete(n), e.add(n), e.size > r) for (let s of e) {
    e.delete(s);
    break;
  }
}
function irn(e) {
  let attestation_4 = _o().attestation;
  return e.length > De || attestation_4.knownInboundRequestIds.has(e) || attestation_4.knownOutboundRequestIds.has(e) || attestation_4.elicitationOutboundRequestIds.has(e) || attestation_4.hostAskOutboundRequestIds.has(e);
}
function HKi(e) {
  let attestation_5 = _o().attestation;
  return attestation_5.knownOutboundRequestIds.has(e) || attestation_5.elicitationOutboundRequestIds.has(e);
}
function EAr(e, {
  automated: automated
}) {
  let attestation_6 = _o().attestation;
  if (U(attestation_6.knownOutboundRequestIds, Q, e), automated) U(attestation_6.automatedOutboundRequestIds, Q, e);
}
var _t = 512;
function $Ki(e) {
  U(_o().attestation.deviceOutboundRequestIds, _t, e);
}
function UKi(e) {
  U(_o().attestation.elicitationOutboundRequestIds, Q, e);
}
function BKi(e) {
  U(_o().attestation.hostAskOutboundRequestIds, Q, e);
}
function gt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = g2e(r),
    attestation_7 = _o().attestation;
  return n !== void 0 && (attestation_7.automatedOutboundRequestIds.has(n) || attestation_7.deviceOutboundRequestIds.has(n) || attestation_7.hostAskOutboundRequestIds.has(n));
}
function ft(e) {
  return e.payload?.inbound_origin === "tool_host_ended_reminder";
}
var yt = 200;
function TAr(e) {
  U(_o().attestation.resolvedPromptRequestIds, yt, e);
}
function mt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = g2e(r);
  return n !== void 0 && _o().attestation.resolvedPromptRequestIds.has(n);
}
var bt = 60000,
  ke = 10;
function he(e, r) {
  let attestation_8 = _o().attestation;
  if (attestation_8.dropNotifier === void 0 && attestation_8.senderDropWriter === void 0) return;
  if (attestation_8.recentDropEventIds.has(r)) return;
  U(attestation_8.recentDropEventIds, ct, r);
  let s = e.payloadType === "control_request" ? attestation_8.commandDropNoticeWindow : attestation_8.messageDropNoticeWindow,
    i = Date.now();
  if (i - s.start >= bt) s.start = i, s.count = 0;
  if (s.count++, s.count <= ke) ve(e);else if (s.count === ke + 1) ve({
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
function ve(e) {
  let attestation_9 = _o().attestation;
  if (attestation_9.dropNotifier !== void 0) try {
    attestation_9.dropNotifier(e);
  } catch (error) {
    t(`${x(e.isCloud === !0)} drop notifier threw: ${d(error)}`, {
      level: "error"
    });
  }
  if (attestation_9.senderDropWriter !== void 0) try {
    let n = it(e);
    if (n) attestation_9.senderDropWriter(n);
  } catch (error) {
    t(`${x(e.isCloud === !0)} drop sender writer threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function D_o(e) {
  let n = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? g2e(e.payload) : void 0;
  if (n !== void 0 && n.length <= De) U(_o().attestation.knownInboundRequestIds, lt, n);
}
function re(e, r, n) {
  if (r !== "control_request") return;
  if (D_o(e), Re(e) !== void 0) g(n ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}
var St = new Set(["bash_command", "update_environment_variables", "assistant", "system"]);
function kt(e, r, n, s) {
  try {
    let attestation_10 = _o().attestation,
      b = s ? attestation_10.reportedCloudWorkerCodes : attestation_10.reportedStrayDropCodes,
      v = n === "control_request" ? "control_request_other" : St.has(n) ? n : "other_payload_type",
      A = `${r.toLowerCase()}_${v}`;
    if (b.has(A)) return;
    b.add(A), t(`${x(s)} DROPPING unverified ${n} event_id=${e.event_id} status=${r} (stray payload class ${A}; counted once per process)`, {
      level: "warn"
    }), m(s ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", A);
  } catch (error) {
    t(`${x(s)} stray-drop report threw: ${d(error)}`, {
      level: "error"
    });
  }
}
function x(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function UFt(e, r, {
  isCloudWorker: isCloudWorker,
  vouchWithheld = !1
}) {
  let status_2 = !isCloudWorker && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e,
    b = status_2 === "TRANSITIVELY_VOUCHED" && P_o("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !vouchWithheld;
  return {
    status: status_2,
    meetsLevel: b || P_o(status_2, r.acceptLevel),
    configException: r.acceptStatuses.has(status_2) || status_2 === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")
  };
}
function Ie(e, r, isCloudWorker_2, s, i) {
  let payloadType_2 = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    v = payloadType_2 === "user" || payloadType_2 === "control_response",
    A = lbe(e.device_attestation_status),
    f = A === "TRANSITIVELY_VOUCHED" && payloadType_2 === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""),
    I = isCloudWorker_2 && A === "TRANSITIVELY_VOUCHED" && (payloadType_2 !== "user" && payloadType_2 !== "queued_notification" || e.payload?.priority === "now" || !s),
    {
      status: status_3,
      meetsLevel: meetsLevel,
      configException: configException
    } = UFt(A, r, {
      isCloudWorker: isCloudWorker_2,
      vouchWithheld: f || I
    }),
    K = `${status_3.toLowerCase()}_${payloadType_2}${f ? "_unstamped" : ""}`,
    F = e.payload?.request,
    X = isCloudWorker_2 && status_3 === "SERVICE_VOUCHED" && payloadType_2 === "control_request" && (!dt.has(ne(e) ?? "") && (i === void 0 || VCs(e) === void 0 || !pt(F, i)) || typeof F === "object" && F !== null && C2e(F));
  if (meetsLevel && !X) {
    if (v) g(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return re(e, payloadType_2, isCloudWorker_2), !1;
  }
  if (!r.enforce) {
    if (re(e, payloadType_2, isCloudWorker_2), status_3 === "UNSPECIFIED") return !1;
    if (v) t(`${x(isCloudWorker_2)} accepting unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: "info"
    }), c(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", K);
    return !1;
  }
  let N = configException,
    L = !1;
  if (v) {
    let w = K;
    if (t(`${x(isCloudWorker_2)} ${N ? "accepting (config exception)" : "DROPPING"} unverified ${payloadType_2} event_id=${e.event_id} status=${status_3}`, {
      level: N ? "info" : "warn"
    }), N) c(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);else if (payloadType_2 === "control_response" && gt(e)) L = !0, t(`${x(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} answers an automated outbound request; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${w}_automated_reply`);else if (payloadType_2 === "control_response" && mt(e)) L = !0, t(`${x(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} is a duplicate answer to an already-resolved prompt; notice suppressed`, {
      level: "info"
    }), m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${w}_resolved_duplicate`);else if (isCloudWorker_2 && payloadType_2 === "user" && ft(e)) L = !0, t(`${x(isCloudWorker_2)} dropped ${payloadType_2} event_id=${e.event_id} status=${status_3} is the service's own linked-computer line; notice suppressed`, {
      level: "info"
    }), m("ccr_worker_event_attestation", `${w}_service_line`);else L = !0, m(isCloudWorker_2 ? "ccr_worker_event_attestation" : "bridge_event_attestation", w), he({
      status: status_3,
      payloadType: payloadType_2,
      ...(isCloudWorker_2 && {
        isCloud: !0
      })
    }, e.event_id);
  } else if (payloadType_2 === "control_request" && !N) {
    let w = Re(e);
    if (w) {
      L = !0;
      let requestId = w.requestId !== void 0 && irn(w.requestId) ? void 0 : w.requestId;
      t(`${x(isCloudWorker_2)} DROPPING unverified control_request subtype=${w.subtype} event_id=${e.event_id} status=${status_3}${requestId === void 0 && w.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`, {
        level: "warn"
      }), m(isCloudWorker_2 ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation", `${status_3.toLowerCase()}_${w.subtype}`), he({
        status: status_3,
        payloadType: payloadType_2,
        subtype: w.subtype,
        requestId: requestId,
        ...(isCloudWorker_2 && {
          isCloud: !0
        })
      }, e.event_id);
    }
  }
  if (!N && !L) kt(e, status_3, payloadType_2, isCloudWorker_2);
  if (N) re(e, payloadType_2, isCloudWorker_2);
  return !N;
}
function CAr(e) {
  return Ie(e, _o().attestation.filterPolicy?.() ?? O_o, !1, !0);
}
function jKi(e, r, n = !1, s) {
  if (e.source !== "client") {
    try {
      let reportedCloudWorkerCodes_2 = _o().attestation.reportedCloudWorkerCodes;
      if (!reportedCloudWorkerCodes_2.has("source_not_client")) reportedCloudWorkerCodes_2.add("source_not_client"), t(`${x(!0)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, {
        level: "warn"
      }), m("ccr_worker_stray_event_attestation", "source_not_client");
    } catch (error) {
      t(`${x(!0)} source-drop report threw: ${d(error)}`, {
        level: "error"
      });
    }
    if (!r.enforce) D_o(e);
    return r.enforce;
  }
  return Ie(e, r, !0, n, s);
}
export { h$n, g$n, _Ar, y$n, AKi, xKi, w_o, error_8 as HFt, error_7 as k_o, v_o, E_o, ibe, sfe, nrn, error_4 as T_o, jCs, C_o, R_o, PKi, abe, _$n, A_o, bAr, SAr, OKi, WCs, rrn, zCs, IKi, MKi, b$n, wAr, GCs, DKi, x_o, T3, lbe, LKi, P_o, O_o, I_o, NKi, $Ft, S$n, FKi, kAr, vAr, orn, M_o, srn, sgt, g2e, VCs, irn, HKi, EAr, $Ki, UKi, BKi, TAr, D_o, UFt, CAr, jKi };