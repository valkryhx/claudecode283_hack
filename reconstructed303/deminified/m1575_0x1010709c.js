// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { lFr } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Nn, F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { pn, ti, jZe as maxCodeUnits_2, jmn as maxCodeUnits, uJn as drop, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { en, yd, Re } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Da } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Bs } from "B:/~BUN/root/chunk-yw21pggd.js";
import { z3e, fa, ob, rfe, vPe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { QE, Lp, Yt, Hn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { ht } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { xrn } from "B:/~BUN/root/chunk-fb07w30y.js";
import { iH } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { lG } from "B:/~BUN/root/chunk-n0e205s6.js";
import { sxn, Rdr, qTt, Adr, xdr, y7r, _7r, Pdr, Got, Fos, Hos, $os } from "B:/~BUN/root/chunk-fbgs9vjp.js";
import { JDe, R_n } from "B:/~BUN/root/chunk-tzmjp0wf.js";
import { gGr } from "B:/~BUN/root/chunk-6nvxe80s.js";
import { UT } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { randomUUID as O } from "crypto";
function e4o(e) {
  return e.type !== "control_request" && e.type !== "control_response" && e.type !== "keep_alive" && e.type !== "control_cancel_request" && e.type !== "transcript_mirror" && !(e.type === "system" && (e.subtype === "task_summary" || e.subtype === "session_metadata"));
}
function P(e) {
  let n = sxn(e);
  return {
    type: "assistant",
    message: e.error === "verification_required" ? _7r(e.message) : n ? {
      ...e.message,
      content: Adr(e.message.content)
    } : e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: e.timestamp ?? new Date().toISOString(),
    remoteSourced: !0,
    error: e.error,
    ...(Rdr(e) && {
      isApiErrorMessage: !0
    }),
    ...(n && {
      sessionFailureNotice: !0
    }),
    ...(y7r(e.api_error_status) && {
      apiErrorStatus: e.api_error_status
    }),
    ...(e.api_error !== void 0 && {
      apiError: e.api_error
    }),
    ...(e.api_error_params !== void 0 && {
      apiErrorParams: e.api_error_params
    }),
    ...(e.api_error_code !== void 0 && {
      apiErrorCode: e.api_error_code
    }),
    ...!1
  };
}
function L(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...(e.ttft_ms !== void 0 && {
      ttftMs: e.ttft_ms
    })
  };
}
function h(e) {
  let n = e;
  if (typeof n === "string" && n !== "" && e !== void 0) return e;
  return t("[sdkMessageAdapter] frame uuid missing or not a string \u2014 minting one", {
    level: "error"
  }), O();
}
function R(e) {
  if (typeof e.content === "string") return !0;
  return t(`[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`, {
    level: "error"
  }), !1;
}
function Wzr(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "string" && !item.startsWith("[ede_diagnostic]") && !item.startsWith("[session_crash]"));
}
function j(e) {
  if (e.subtype === "success") return {
    type: "system",
    subtype: "informational",
    content: "Session completed successfully",
    level: "info",
    uuid: h(e.uuid),
    timestamp: new Date().toISOString()
  };
  let errors = e.errors;
  if (!Array.isArray(errors)) return t(`[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`), null;
  let s = Wzr(errors);
  if (s.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: qTt(s.join(", ")),
    level: "warning",
    fromRemoteErrorResult: !0,
    uuid: h(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function N(e) {
  let n = e.status;
  if (typeof n !== "string" || n === "") return null;
  return {
    type: "system",
    subtype: "informational",
    content: n === "compacting" ? "Compacting conversation\u2026" : `Status: ${pn(n)}`,
    level: "info",
    uuid: h(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function W(e) {
  let {
    tool_name: tool_name,
    elapsed_time_seconds: elapsed_time_seconds,
    tool_use_id: tool_use_id
  } = e;
  if (typeof tool_name !== "string" || typeof elapsed_time_seconds !== "number" || !Number.isFinite(elapsed_time_seconds) || typeof tool_use_id !== "string") return t("[sdkMessageAdapter] Dropping tool_progress frame with a non-string tool_name/tool_use_id or non-finite elapsed_time_seconds", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "informational",
    content: `Tool ${pn(tool_name)} running for ${elapsed_time_seconds}s\u2026`,
    level: "info",
    uuid: h(e.uuid),
    timestamp: new Date().toISOString(),
    toolUseID: e.tool_use_id
  };
}
function B(e) {
  let compact_metadata = e.compact_metadata;
  if (typeof compact_metadata !== "object" || compact_metadata === null) return t("[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: h(e.uuid),
    timestamp: new Date().toISOString(),
    compactMetadata: Pdr(e.compact_metadata),
    remoteSourced: !0
  };
}
function YWt(e) {
  let model = typeof e.model === "string" ? e.model : void 0;
  if (e.model !== void 0 && model === void 0) t(`[sdkMessageAdapter] init frame model is ${e.model === null ? "null" : typeof e.model}, not a string \u2014 keeping the current model`, {
    level: "error"
  });
  let cwd = typeof e.cwd === "string" ? e.cwd : void 0;
  if (e.cwd !== void 0 && cwd === void 0) t("[sdkMessageAdapter] init frame cwd is not a string \u2014 not adopting", {
    level: "error"
  });
  let slashCommands;
  if (Array.isArray(e.slash_commands)) slashCommands = e.slash_commands.filter(item => typeof item === "string");else if (e.slash_commands !== void 0) t("[sdkMessageAdapter] init frame slash_commands is not an array \u2014 keeping the local command list", {
    level: "error"
  });
  let mcpServers;
  if (Array.isArray(e.mcp_servers)) mcpServers = e.mcp_servers.flatMap(item => typeof item === "object" && item !== null && typeof item.name === "string" && (item.status === void 0 || typeof item.status === "string") ? [item.status === void 0 ? {
    name: item.name
  } : {
    name: item.name,
    status: item.status
  }] : []);else if (e.mcp_servers !== void 0) t("[sdkMessageAdapter] init frame mcp_servers is not an array \u2014 ignoring", {
    level: "error"
  });
  let skills;
  if (Array.isArray(e.skills)) skills = e.skills.filter(item => typeof item === "string");else if (e.skills !== void 0) t("[sdkMessageAdapter] init frame skills is not an array \u2014 ignoring", {
    level: "error"
  });
  let plugins;
  if (Array.isArray(e.plugins)) plugins = e.plugins.flatMap(item => typeof item === "object" && item !== null && typeof item.name === "string" ? [item.name] : []);else if (e.plugins !== void 0) t("[sdkMessageAdapter] init frame plugins is not an array \u2014 ignoring", {
    level: "error"
  });
  let tools;
  if (Array.isArray(e.tools)) tools = e.tools.filter(item => typeof item === "string");else if (e.tools !== void 0) t("[sdkMessageAdapter] init frame tools is not an array \u2014 ignoring", {
    level: "error"
  });
  return {
    model: model,
    cwd: cwd,
    slashCommands: slashCommands,
    skills: skills,
    plugins: plugins,
    mcpServers: mcpServers,
    tools: tools,
    workerEpoch: R_n(e)
  };
}
function VSt(e) {
  if (!e) return;
  if (typeof e.condition !== "string" || !Number.isSafeInteger(e.iterations) || e.iterations < 0 || !Number.isSafeInteger(e.set_at) || e.set_at < 0 || !Number.isSafeInteger(e.tokens_at_start) || e.tokens_at_start < 0 || e.last_reason !== void 0 && typeof e.last_reason !== "string") return;
  return {
    condition: ti(e.condition, {
      maxCodeUnits: 4000
    }),
    iterations: e.iterations,
    setAt: e.set_at,
    tokensAtStart: e.tokens_at_start,
    ...(e.last_reason !== void 0 && {
      lastReason: ti(e.last_reason, {
        maxCodeUnits: 512
      })
    })
  };
}
var q = {
    env: !0,
    settings: !0,
    clientdata: !0,
    experiment: !0,
    "model-default": !0,
    "unknown-model": !0,
    auto: !0
  },
  G = new Set(Object.keys(q));
function zzr(e) {
  if (typeof e !== "object" || e === null || typeof e.enabled !== "boolean" || typeof e.enforced !== "boolean" || !Number.isSafeInteger(e.effective_window) || e.effective_window <= 0 || !Number.isSafeInteger(e.threshold) || e.threshold <= 0 || !G.has(e.source)) {
    if (ea().claim("remote_autocompact_frame_drop")) t("[sdkMessageAdapter] Dropping malformed autocompact_state frame"), p("remote_autocompact_sync", "invalid_frame");
    return;
  }
  return {
    enabled: e.enabled,
    effectiveWindow: e.effective_window,
    threshold: e.threshold,
    enforced: e.enforced,
    source: e.source
  };
}
function y7n(e, n, via) {
  let remoteAutocompactState = zzr(n);
  if (remoteAutocompactState === void 0) {
    e(y => y.remoteAutocompactState === void 0 ? y : {
      ...y,
      remoteAutocompactState: void 0
    });
    return;
  }
  let a = !1;
  if (e(y => {
    if (y.remoteAutocompactState !== void 0 && gGr(y.remoteAutocompactState, remoteAutocompactState)) return y;
    return a = !0, {
      ...y,
      remoteAutocompactState: remoteAutocompactState
    };
  }), !a) return;
  i("tengu_remote_autocompact_state_adopted", {
    via: via,
    enabled: remoteAutocompactState.enabled,
    enforced: remoteAutocompactState.enforced,
    source: c(remoteAutocompactState.source)
  });
}
var V = (e, n) => Nn(Da(e, s => s === void 0), Da(n, s => s === void 0));
function _7n(e, n) {
  let s = [],
    r = ob(),
    a = !1,
    y = !1,
    g = frames => {
      if (!e()) return;
      i("tengu_remote_rate_limits_dropped", {
        via: c(n),
        reason: b("account_switched"),
        frames: frames
      });
    },
    m = (S, k) => {
      if (!e()) return;
      let A = $os(S);
      if (A === void 0) return;
      if ((k === "seed" || k === "history") && (Hos(A.info) || A.info.resetsAt === void 0 && A.info.overageResetsAt === void 0)) return;
      let M = fa(),
        v = {
          ...Fos(A.info, {
            unifiedRateLimitFallbackAvailable: M.unifiedRateLimitFallbackAvailable,
            upgradePaths: M.upgradePaths
          }),
          ...(M.lowPriorityOffer !== void 0 && {
            lowPriorityOffer: M.lowPriorityOffer
          }),
          ...(M.lowPriorityRetryAfterSeconds !== void 0 && {
            lowPriorityRetryAfterSeconds: M.lowPriorityRetryAfterSeconds
          }),
          ...(M.lowPriorityMaxWaitSeconds !== void 0 && {
            lowPriorityMaxWaitSeconds: M.lowPriorityMaxWaitSeconds
          })
        };
      if (rfe() && V(v, M)) return;
      vPe(v), i("tengu_remote_rate_limits_adopted", {
        via: c(k),
        status: c(A.info.status),
        degradation: c(A.degradation),
        frames: S.length
      });
    },
    d = (S, k) => {
      if (y) return;
      try {
        m(S, k);
      } catch (error) {
        l(error);
      }
    },
    _ = (S = n) => {
      a = !1;
      let k = s;
      if (s = [], k.length === 0) return;
      if (r !== ob()) {
        g(k.length);
        return;
      }
      d(k, S);
    },
    w = S => {
      let k = ob();
      if (s.length > 0 && k !== r) g(s.length), s = [];
      r = k, s.push(S);
    };
  return {
    adopt(S, k) {
      _(), d(S, k);
    },
    push(S) {
      if (y) return;
      if (w(S), !a) a = !0, queueMicrotask(() => {
        if (a) _();
      });
    },
    hold(S) {
      if (y) return;
      w(S);
    },
    settle(S) {
      if (!a) _(S);
    },
    hasHeld: () => s.length > 0 && !a,
    flush: () => _(),
    dispose() {
      y = !0, s = [];
    }
  };
}
function YDe(e, n) {
  if (!JDe(e)) return {
    type: "ignored"
  };
  switch (e.type) {
    case "control_request":
    case "control_response":
    case "control_cancel_request":
      return {
        type: "ignored"
      };
    case "assistant":
      return {
        type: "message",
        message: P(e)
      };
    case "user":
      {
        let content = e.message?.content;
        if (Array.isArray(content) && content.some(item => item.type === "tool_result")) {
          let remoteToolDenialKind = xdr(e.tool_result_meta, content);
          return {
            type: "message",
            message: {
              ...Re({
                content: content,
                toolUseResult: xrn(e.tool_use_result, e.message),
                uuid: e.uuid,
                timestamp: e.timestamp
              }),
              remoteSourced: !0,
              ...!1,
              ...(remoteToolDenialKind !== void 0 && {
                remoteToolDenialKind: remoteToolDenialKind
              })
            }
          };
        }
        if (e.parent_tool_use_id) return {
          type: "ignored"
        };
        if (e.isSynthetic && !iH(e.origin)) return {
          type: "ignored"
        };
        let y = content === QE || Array.isArray(content) && content.some(item => item.type === "text" && (item.text === QE || item.text === Lp));
        if (n?.convertUserTextMessages || y) {
          if (typeof content === "string" || Array.isArray(content)) return {
            type: "message",
            message: Re({
              content: content,
              toolUseResult: e.tool_use_result,
              uuid: e.uuid,
              timestamp: e.timestamp
            })
          };
        }
        return {
          type: "ignored"
        };
      }
    case "stream_event":
      return {
        type: "stream_event",
        event: L(e)
      };
    case "result":
      {
        if (e.subtype === "success") return {
          type: "ignored"
        };
        let message = j(e);
        return message ? {
          type: "message",
          message: message
        } : {
          type: "ignored"
        };
      }
    case "system":
      if (e.subtype === "init") return {
        type: "ignored"
      };
      if (e.subtype === "status") {
        if (e.status === "requesting") return {
          type: "stream_event",
          event: {
            type: "stream_request_start"
          }
        };
        let message_2 = N(e);
        return message_2 ? {
          type: "message",
          message: message_2
        } : {
          type: "ignored"
        };
      }
      if (e.subtype === "compact_boundary") {
        let message_3 = B(e);
        return message_3 ? {
          type: "message",
          message: message_3
        } : {
          type: "ignored"
        };
      }
      if (e.subtype === "model_refusal_fallback") return {
        type: "message",
        message: {
          type: "system",
          subtype: "model_refusal_fallback",
          content: e.direction === "retry" && e.scope !== "local" && typeof e.original_model === "string" && typeof e.fallback_model === "string" ? z3e(e.original_model, e.fallback_model, e.api_refusal_category ?? null) : ti(typeof e.content === "string" ? e.content : "", {
            drop: drop,
            maxCodeUnits: maxCodeUnits
          }),
          level: "warning",
          trigger: e.trigger,
          direction: e.direction,
          ...(e.scope !== void 0 && {
            scope: e.scope
          }),
          originalModel: e.original_model,
          fallbackModel: e.fallback_model,
          requestId: e.request_id,
          apiRefusalCategory: e.api_refusal_category ?? null,
          apiRefusalExplanation: e.api_refusal_explanation ?? null,
          ...(e.retracted_message_uuids !== void 0 && {
            retractedMessageUuids: e.retracted_message_uuids
          }),
          ...(e.refused_user_message_uuid !== void 0 && {
            refusedUserMessageUuid: e.refused_user_message_uuid
          }),
          isMeta: !1,
          uuid: h(e.uuid),
          timestamp: new Date().toISOString()
        }
      };
      if (e.subtype === "model_fallback") {
        if (!R(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: pn(e.content),
            level: "warning",
            trigger: e.trigger,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            isMeta: !1,
            uuid: h(e.uuid),
            timestamp: new Date().toISOString()
          }
        };
      }
      if (e.subtype === "model_consent_fallback") {
        if (!R(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: Got({
            ...e,
            content: pn(e.content),
            uuid: h(e.uuid)
          })
        };
      }
      if (e.subtype === "informational") {
        if (!R(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: pn(e.content),
            level: e.level,
            isMeta: !1,
            uuid: h(e.uuid),
            timestamp: new Date().toISOString(),
            ...(e.tool_use_id && {
              toolUseID: e.tool_use_id
            }),
            ...(e.prevent_continuation && {
              preventContinuation: e.prevent_continuation
            })
          }
        };
      }
      if (e.subtype === "tool_host_result") {
        let lines = Array.isArray(e.lines) ? e.lines.filter(item => typeof item === "string").slice(0, 32).map(item => ti(item, {
            maxCodeUnits: 2100
          })).filter(item => item.trim() !== "") : [],
          label = typeof e.label === "string" ? ti(e.label, {
            maxCodeUnits: 320
          }) : void 0,
          y = e.unverified === !0 && label !== void 0 && label.trim() !== "";
        if (typeof e.tool_use_id !== "string" || lines.length === 0 && !y) return {
          type: "ignored"
        };
        let g = h(e.uuid);
        return {
          type: "message",
          message: en({
            type: "tool_host_result_lines",
            toolUseID: e.tool_use_id,
            host: UT(typeof e.host?.name === "string" ? e.host.name : ""),
            lines: lines,
            ...(label !== void 0 && {
              label: label
            }),
            ...(y && {
              unverified: !0
            })
          }, {
            now: () => new Date().toISOString(),
            uuid: () => g
          })
        };
      }
      if (e.subtype === "permission_denied") return {
        type: "ignored"
      };
      if (e.subtype === "local_command_output") {
        if (!R(e)) return {
          type: "ignored"
        };
        let r = h(e.uuid);
        return {
          type: "message",
          message: yd({
            content: pn(e.content),
            uuid: () => r
          })
        };
      }
      return t(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`), {
        type: "ignored"
      };
    case "tool_progress":
      if (e.heartbeat === !0 || e.subagent_retry !== void 0 || e.tool_name === ht) return t("[sdkMessageAdapter] Ignoring heartbeat/subagent-retry tool_progress frame"), {
        type: "ignored"
      };
      let message_4 = W(e);
      return message_4 ? {
        type: "message",
        message: message_4
      } : {
        type: "ignored"
      };
    case "auth_status":
      return t("[sdkMessageAdapter] Ignoring auth_status message"), {
        type: "ignored"
      };
    case "tool_use_summary":
      return t("[sdkMessageAdapter] Ignoring tool_use_summary message"), {
        type: "ignored"
      };
    case "rate_limit_event":
      return t("[sdkMessageAdapter] Ignoring rate_limit_event message"), {
        type: "ignored"
      };
    case "active_goal":
      return {
        type: "ignored"
      };
    case "autocompact_state":
      return {
        type: "ignored"
      };
    case "env_manager_log":
      {
        let r = typeof e.data?.content === "string" ? e.data.content : null;
        if (r === null) return t("[sdkMessageAdapter] env_manager_log without data.content \u2014 orchestrator wire change?", {
          level: "warn"
        }), {
          type: "env_log",
          message: ""
        };
        let a = r.split(/\r\n?|\n/),
          message_5 = "";
        for (let g = a.length - 1; g >= 0; g--) if (message_5 = ti(a[g], {
          maxCodeUnits: 512
        }), message_5 !== "") break;
        return {
          type: "env_log",
          message: message_5
        };
      }
    case "conversation_reset":
      {
        let r = e.new_conversation_id;
        if (typeof r !== "string" || r === "") return t("[sdkMessageAdapter] Dropping conversation_reset frame without a string new_conversation_id", {
          level: "error"
        }), {
          type: "ignored"
        };
        return {
          type: "conversation_reset",
          newConversationId: r
        };
      }
    default:
      return t(`[sdkMessageAdapter] Unknown message type: ${e.type}`), {
        type: "ignored"
      };
  }
}
function b7n(e) {
  return e.type === "result";
}
var H = 64,
  z = 128;
function T(e) {
  return typeof e === "string" && e.length > 0 && e.length <= z;
}
function X(e) {
  let n = "user_message_uuids" in e ? e.user_message_uuids : null,
    s = Array.isArray(n) ? n.filter(T).slice(0, H) : [];
  if (s.length > 0) return s;
  let r = "user_message_uuid" in e ? e.user_message_uuid : void 0;
  return T(r) ? [r] : void 0;
}
function t4o(e, n, s) {
  let r = X(e);
  return s.taskWake || (r === void 0 ? s.sent : r.some(item => n.has(item)));
}
function qSt(e) {
  let n = lFr(),
    s = new Map(Object.entries(n.shape)),
    r = typeof e === "object" && e !== null && !Array.isArray(e) ? Bs(e, (y, g) => g === "status" || (s.get(g)?.safeParse(y).success ?? !1)) : e,
    a = n.safeParse(r);
  if (a.success) return a.data;
  if (ea().claim("remote_rate_limit_frame_drop")) i("tengu_remote_rate_limits_dropped", {
    reason: b("invalid_frame"),
    frames: 1
  });
  return;
}
function S7n() {
  return {
    retracted: new Set(),
    inProgressToolUses: new Map(),
    evictedToolUses: new Set(),
    nestedUuidAliases: new Map()
  };
}
function w7n(e, n, s) {
  let r = s.filter(item => item !== n);
  if (r.length > 0) e.nestedUuidAliases.set(n, r);
}
function y2e(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = e,
    s = typeof n.uuid === "string" ? n.uuid : null;
  if (n.type === "system" && n.subtype === "model_refusal_fallback") {
    let uuids = I(n.retracted_message_uuids, s);
    return uuids ? {
      uuids: uuids,
      source: "retraction_banner"
    } : null;
  }
  if (n.type === "assistant") {
    let uuids_2 = I(n.supersedes, s);
    return uuids_2 ? {
      uuids: uuids_2,
      source: "supersedes"
    } : null;
  }
  return null;
}
function I(e, n) {
  if (!Array.isArray(e)) return null;
  let s = e.filter(item => typeof item === "string" && item !== n);
  return s.length > 0 ? s : null;
}
function Y(e, n) {
  if (n.size === 0) return e;
  let s = e.filter(item => !n.has(item.uuid));
  return s.length === e.length ? e : s;
}
function v7n(e, n, s) {
  for (let r of s) e.inProgressToolUses.set(r, n);
}
function kyn(e, n) {
  for (let s of n) e.inProgressToolUses.delete(s);
}
function Eyn(e) {
  let {
      index: index,
      signal: signal,
      surface: surface,
      setMessages: setMessages,
      setInProgressToolUseIDs: setInProgressToolUseIDs
    } = e,
    newly_retracted_count = F(signal.uuids, d => !index.retracted.has(d));
  for (let d of signal.uuids) {
    index.retracted.add(d);
    for (let _ of index.nestedUuidAliases.get(d) ?? []) index.retracted.add(_);
  }
  let ids = [...index.inProgressToolUses].filter(([, d]) => index.retracted.has(d)).map(([d]) => d);
  kyn(index, ids);
  for (let d of ids) index.evictedToolUses.add(d);
  if (ids.length > 0 && setInProgressToolUseIDs) setInProgressToolUseIDs({
    action: "remove",
    ids: ids
  });
  setMessages(d => Y(d, index.retracted)), i("tengu_refusal_retraction_evicted", {
    surface: c(surface),
    source: c(signal.source),
    uuid_count: signal.uuids.length,
    newly_retracted_count: newly_retracted_count,
    tool_use_cleared_count: ids.length
  });
}
function k7n(e, n, s, r) {
  if (r !== null && e.retracted.has(r)) return 0;
  let count = F(n, y => e.evictedToolUses.has(y));
  if (count > 0) i("tengu_refusal_retraction_orphan_tool_result", {
    surface: c(s),
    count: count
  });
  return count;
}
function n4o(e) {
  let {
      index: index_2,
      events: events,
      surface: surface_2,
      setMessages: setMessages_2,
      setInProgressToolUseIDs: setInProgressToolUseIDs_2
    } = e,
    g = 0,
    count_2 = 0,
    count_3 = 0;
  for (let _ of events) {
    if (_.source !== "worker") {
      if (y2e(_.payload)) if (_.source === void 0) count_3++;else count_2++;
      continue;
    }
    let signal_2 = y2e(_.payload);
    if (signal_2) g++, Eyn({
      index: index_2,
      signal: signal_2,
      surface: surface_2,
      setMessages: setMessages_2,
      setInProgressToolUseIDs: setInProgressToolUseIDs_2
    });
  }
  if (count_2 > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(surface_2),
    reason: b("source_mismatch"),
    count: count_2
  });
  if (count_3 > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(surface_2),
    reason: b("source_missing"),
    count: count_3
  });
  return g;
}
function XWt(e, n, s) {
  if (!e.retracted.has(n)) return !1;
  return i("tengu_refusal_retraction_late_drop", {
    surface: c(s)
  }), !0;
}
function Gzr(e, n) {
  if (n.type !== "system") return !1;
  switch (n.subtype) {
    case "background_tasks_changed":
      if (Array.isArray(n.tasks)) {
        e.clear();
        for (let s of n.tasks) if (typeof s?.task_id === "string") e.set(s.task_id, E(s.task_id, s, s.subagent_type));
      }
      return !0;
    case "task_started":
      if (typeof n.task_id === "string" && n.is_backgrounded !== !1) e.set(n.task_id, E(n.task_id, n, e.get(n.task_id)?.subagentType));
      return !0;
    case "task_notification":
      if (typeof n.task_id === "string") e.delete(n.task_id);
      return !0;
    case "task_progress":
    case "task_updated":
      return !0;
    default:
      return !1;
  }
}
var Q = 256;
function J(e, n) {
  if (n.type !== "system") return;
  switch (n.subtype) {
    case "background_tasks_changed":
      if (Array.isArray(n.tasks)) {
        for (let s of n.tasks) if (s?.awaited !== !0) D(e, s?.task_id, s?.ambient);
      }
      return;
    case "task_started":
      if (n.is_backgrounded !== !1 && n.awaited !== !0) D(e, n.task_id, n.ambient);
      return;
    case "task_updated":
      if (n.patch?.is_backgrounded === !0) D(e, n.task_id);
      return;
    default:
      return;
  }
}
function D(e, n, s) {
  if (typeof n !== "string" || s === !0 || e.has(n)) return;
  if (e.size >= Q) {
    let r = e.values().next().value;
    if (r !== void 0) e.delete(r);
  }
  e.add(n);
}
function Z(e, n) {
  return n.type === "system" && n.subtype === "task_notification" && typeof n.task_id === "string" && e.delete(n.task_id);
}
function Tyn(e, n) {
  return J(e.awaitingFinish, n), {
    backgroundTaskEnded: Z(e.awaitingFinish, n),
    isTaskLifecycleFrame: Gzr(e.running, n)
  };
}
function E(id, n, s) {
  let r = a => typeof a === "string" ? ti(a, {
    maxCodeUnits: maxCodeUnits_2
  }) : void 0;
  return {
    id: id,
    taskType: r(n.task_type),
    subagentType: r(s),
    description: r(n.description) ?? "",
    ambient: n.ambient === !0
  };
}
function E7n(e, n) {
  return e.length === n.length && e.every((item, index) => item.id === n[index]?.id && item.taskType === n[index]?.taskType && item.subagentType === n[index]?.subagentType && item.description === n[index]?.description && item.ambient === n[index]?.ambient);
}
var ee = 100,
  te = 256;
function Cyn(e) {
  if (e.type !== "system" || e.subtype !== "session_metadata") return;
  let {
    metadata: metadata
  } = e;
  if (typeof metadata !== "object" || metadata === null) return;
  let s = "artifacts" in metadata ? metadata.artifacts : void 0;
  return s === null || Array.isArray(s) ? s : void 0;
}
function Vzr(e, n) {
  let s = oe(n ?? []),
    r = Object.entries(e.frameUrls).filter(([, _]) => _.fromCloudSession !== !0);
  if (s.length === 0 && r.length === Object.keys(e.frameUrls).length) return e;
  let a = new Set(r.map(([_]) => _)),
    frameUrls = Object.fromEntries([...r, ...s.filter(([_]) => !a.has(_))]),
    g = Object.entries(e.frameUrls),
    m = Object.entries(frameUrls);
  return g.length === m.length && g.every(([_, w], index) => {
    let [k, A] = m[index],
      M = Object.entries(w),
      v = Object.entries(A);
    return _ === k && M.length === v.length && M.every(([U, x]) => v.some(([C, K]) => C === U && K === x));
  }) ? e : {
    ...e,
    frameUrls: frameUrls
  };
}
var re = f(() => u({
  url: o(),
  title: o().optional().catch(void 0),
  updated_at: o().optional().catch(void 0)
}));
function oe(e) {
  let n = new Map();
  for (let s of e) {
    let r = re().safeParse(s);
    if (!r.success) continue;
    let {
        url: url,
        title: title,
        updated_at: updated_at
      } = r.data,
      m = Yt(url);
    if (m === null) continue;
    let d = updated_at !== void 0 ? Date.parse(updated_at) : NaN,
      _ = {
        url: Hn(m),
        updatedAt: Number.isFinite(d) ? d : 0,
        ...(title !== void 0 && title !== "" && {
          title: ne(title, te)
        }),
        fromCloudSession: !0
      },
      w = n.get(m.slug);
    if (w === void 0 || _.updatedAt >= w.updatedAt) n.set(m.slug, _);
  }
  return [...n].sort(([, s], [, r]) => s.updatedAt - r.updatedAt).slice(-ee).map(([s, r]) => [`${lG}${s}`, r]);
}
function Ryn(e, n) {
  if (n.skills === void 0 && n.plugins === void 0) return e;
  let tools_2 = n.tools ?? e?.tools,
    commands = n.slashCommands ?? e?.commands;
  return {
    skills: n.skills ?? [],
    plugins: n.plugins ?? [],
    ...(tools_2 !== void 0 && {
      tools: tools_2
    }),
    ...(commands !== void 0 && {
      commands: commands
    })
  };
}
export { e4o, Wzr, YWt, VSt, zzr, y7n, _7n, YDe, b7n, t4o, qSt, S7n, w7n, y2e, v7n, kyn, Eyn, k7n, n4o, XWt, Gzr, Tyn, E7n, Cyn, Vzr, Ryn };