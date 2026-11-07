// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { XEo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { bi, HHr, $Hr, h7 as maxCodeUnits_2, Njt as maxCodeUnits, UHr as drop } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { rC } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ln, Yi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { xa, fIr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { lmt } from "B:/~BUN/root/chunk-yhafkw66.js";
import { fT, Su, fn, Bn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { c9, an, el, Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
import { F0n } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { mi, fg, aoe, k9e } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { EW } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { MZn, CYr, XKt, RYr, AYr, xqo, Pqo, xYr, vCt, Cii, Rii, Aii } from "B:/~BUN/root/chunk-ra105wwp.js";
import { U4e, UYn, hzt } from "B:/~BUN/root/chunk-vtkyrfcm.js";
import { k0o } from "B:/~BUN/root/chunk-sfr2jk11.js";
import { Ofn, jYs, Ifn, Akt, OYn } from "B:/~BUN/root/chunk-413qp4zy.js";
import { tXn } from "B:/~BUN/root/chunk-k6bjzjkg.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { o, E, I, u, Dr, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as W } from "crypto";
var V = null;
function Q4s(e) {
  return e.type !== "control_request" && e.type !== "control_response" && e.type !== "keep_alive" && e.type !== "control_cancel_request" && e.type !== "transcript_mirror" && !(e.type === "system" && (e.subtype === "task_summary" || e.subtype === "session_metadata"));
}
function G(e) {
  let n = MZn(e),
    cloudMemoryToolUseIds = V?.cloudMemoryToolUseIds(e.tool_use_meta) ?? [];
  return {
    type: "assistant",
    message: e.error === "verification_required" ? Pqo(e.message) : n ? {
      ...e.message,
      content: RYr(e.message.content)
    } : e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: e.timestamp ?? new Date().toISOString(),
    remoteSourced: !0,
    error: e.error,
    ...(CYr(e) && {
      isApiErrorMessage: !0
    }),
    ...(n && {
      sessionFailureNotice: !0
    }),
    ...(xqo(e.api_error_status) && {
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
    ...!1,
    ...(cloudMemoryToolUseIds.length > 0 && {
      cloudMemoryToolUseIds: cloudMemoryToolUseIds
    })
  };
}
function H(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...(e.ttft_ms !== void 0 && {
      ttftMs: e.ttft_ms
    })
  };
}
function M(e) {
  let n = e;
  if (typeof n === "string" && n !== "" && e !== void 0) return e;
  return t("[sdkMessageAdapter] frame uuid missing or not a string \u2014 minting one", {
    level: "error"
  }), W();
}
function D(e) {
  if (typeof e.content === "string") return !0;
  return t(`[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`, {
    level: "error"
  }), !1;
}
function UDo(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "string" && !item.startsWith("[ede_diagnostic]") && !item.startsWith("[session_crash]"));
}
function X(e) {
  if (e.subtype === "success") return {
    type: "system",
    subtype: "informational",
    content: "Session completed successfully",
    level: "info",
    uuid: M(e.uuid),
    timestamp: new Date().toISOString()
  };
  let errors = e.errors;
  if (!Array.isArray(errors)) return t(`[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`), null;
  let s = UDo(errors);
  if (s.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: XKt(s.join(", ")),
    level: "warning",
    fromRemoteErrorResult: !0,
    uuid: M(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function Y(e) {
  let n = e.status;
  if (typeof n !== "string" || n === "") return null;
  return {
    type: "system",
    subtype: "informational",
    content: n === "compacting" ? "Compacting conversation\u2026" : `Status: ${Zn(n)}`,
    level: "info",
    uuid: M(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function Z(e) {
  let compact_metadata = e.compact_metadata;
  if (typeof compact_metadata !== "object" || compact_metadata === null) return t("[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: M(e.uuid),
    timestamp: new Date().toISOString(),
    compactMetadata: xYr(e.compact_metadata),
    remoteSourced: !0
  };
}
function sfn(e) {
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
    workerEpoch: UYn(e)
  };
}
function VWt(e) {
  if (!e) return;
  if (typeof e.condition !== "string" || !Number.isSafeInteger(e.iterations) || e.iterations < 0 || !Number.isSafeInteger(e.set_at) || e.set_at < 0 || !Number.isSafeInteger(e.tokens_at_start) || e.tokens_at_start < 0 || e.last_reason !== void 0 && typeof e.last_reason !== "string") return;
  return {
    condition: bi(e.condition, {
      maxCodeUnits: 4000
    }),
    iterations: e.iterations,
    setAt: e.set_at,
    tokensAtStart: e.tokens_at_start,
    ...(e.last_reason !== void 0 && {
      lastReason: bi(e.last_reason, {
        maxCodeUnits: 512
      })
    })
  };
}
var J = {
    env: !0,
    settings: !0,
    clientdata: !0,
    experiment: !0,
    "model-default": !0,
    "unknown-model": !0,
    auto: !0
  },
  ee = new Set(Object.keys(J));
function BDo(e) {
  if (typeof e !== "object" || e === null || typeof e.enabled !== "boolean" || typeof e.enforced !== "boolean" || !Number.isSafeInteger(e.effective_window) || e.effective_window <= 0 || !Number.isSafeInteger(e.threshold) || e.threshold <= 0 || !ee.has(e.source)) {
    if (xa().claim("remote_autocompact_frame_drop")) t("[sdkMessageAdapter] Dropping malformed autocompact_state frame"), c("remote_autocompact_sync", "invalid_frame");
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
function k4n(e, n, via) {
  let remoteAutocompactState = BDo(n);
  if (remoteAutocompactState === void 0) {
    e(y => y.remoteAutocompactState === void 0 ? y : {
      ...y,
      remoteAutocompactState: void 0
    });
    return;
  }
  let i = !1;
  if (e(y => {
    if (y.remoteAutocompactState !== void 0 && k0o(y.remoteAutocompactState, remoteAutocompactState)) return y;
    return i = !0, {
      ...y,
      remoteAutocompactState: remoteAutocompactState
    };
  }), !i) return;
  l("tengu_remote_autocompact_state_adopted", {
    via: via,
    enabled: remoteAutocompactState.enabled,
    enforced: remoteAutocompactState.enforced,
    source: f(remoteAutocompactState.source)
  });
}
var te = (e, n) => ln(Yi(e, s => s === void 0), Yi(n, s => s === void 0));
function uBr(e, n) {
  let s = [],
    r = fg(),
    i = !1,
    y = !1,
    g = frames => {
      if (!e()) return;
      l("tengu_remote_rate_limits_dropped", {
        via: f(n),
        reason: b("account_switched"),
        frames: frames
      });
    },
    d = (_, w) => {
      if (!e()) return;
      let A = Aii(_);
      if (A === void 0) return;
      if ((w === "seed" || w === "history") && (Rii(A.info) || A.info.resetsAt === void 0 && A.info.overageResetsAt === void 0)) return;
      let R = mi(),
        v = {
          ...Cii(A.info, {
            unifiedRateLimitFallbackAvailable: R.unifiedRateLimitFallbackAvailable,
            upgradePaths: R.upgradePaths
          }),
          ...(R.lowPriorityOffer !== void 0 && {
            lowPriorityOffer: R.lowPriorityOffer
          }),
          ...(R.lowPriorityRetryAfterSeconds !== void 0 && {
            lowPriorityRetryAfterSeconds: R.lowPriorityRetryAfterSeconds
          }),
          ...(R.lowPriorityMaxWaitSeconds !== void 0 && {
            lowPriorityMaxWaitSeconds: R.lowPriorityMaxWaitSeconds
          })
        };
      if (aoe() && te(v, R)) return;
      k9e(v), l("tengu_remote_rate_limits_adopted", {
        via: f(w),
        status: f(A.info.status),
        degradation: f(A.degradation),
        frames: _.length
      });
    },
    m = (_, w) => {
      if (y) return;
      try {
        d(_, w);
      } catch (error) {
        a(error);
      }
    },
    S = (_ = n) => {
      i = !1;
      let w = s;
      if (s = [], w.length === 0) return;
      if (r !== fg()) {
        g(w.length);
        return;
      }
      m(w, _);
    },
    h = _ => {
      let w = fg();
      if (s.length > 0 && w !== r) g(s.length), s = [];
      r = w, s.push(_);
    };
  return {
    adopt(_, w) {
      S(), m(_, w);
    },
    push(_) {
      if (y) return;
      if (h(_), !i) i = !0, queueMicrotask(() => {
        if (i) S();
      });
    },
    hold(_) {
      if (y) return;
      h(_);
    },
    settle(_) {
      if (!i) S(_);
    },
    hasHeld: () => s.length > 0 && !i,
    flush: () => S(),
    dispose() {
      y = !0, s = [];
    }
  };
}
function D4e(e, n) {
  if (!U4e(e)) return {
    type: "ignored"
  };
  let s = Akt(e);
  if (s === null && e.type === Ifn) return {
    type: "ignored"
  };
  if (s !== null) return {
    type: "message",
    message: {
      type: "system",
      subtype: "informational",
      content: OYn(s, n?.sessionUrl, n?.orgUuid),
      level: "warning",
      uuid: Nt(e.uuid) ?? W(),
      timestamp: new Date().toISOString()
    }
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
        message: G(e)
      };
    case "user":
      {
        let content = e.message?.content;
        if (Array.isArray(content) && content.some(item => item.type === "tool_result")) {
          let remoteToolDenialKind = AYr(e.tool_result_meta, content);
          return {
            type: "message",
            message: {
              ...Ie({
                content: content,
                toolUseResult: F0n(e.tool_use_result, e.message),
                uuid: e.uuid,
                timestamp: e.timestamp
              }),
              remoteSourced: !0,
              ...!1,
              ...void 0,
              ...(remoteToolDenialKind !== void 0 && {
                remoteToolDenialKind: remoteToolDenialKind
              })
            }
          };
        }
        if (e.parent_tool_use_id) return {
          type: "ignored"
        };
        let y = e.inbound_origin === fIr && tXn(e, content);
        if (e.isSynthetic && !y && (e.origin?.kind === "voice-call" || !EW(e.origin))) return {
          type: "ignored"
        };
        if (y) return n?.convertUserTextMessages && (typeof content === "string" || Array.isArray(content)) ? {
          type: "message",
          message: Ie({
            content: content,
            uuid: e.uuid,
            timestamp: e.timestamp,
            origin: {
              kind: "voice-call"
            },
            isMeta: !0
          })
        } : {
          type: "ignored"
        };
        let g = content === fT || Array.isArray(content) && content.some(item => item.type === "text" && (item.text === fT || item.text === Su));
        if (n?.convertUserTextMessages || g) {
          if (typeof content === "string" || Array.isArray(content)) return {
            type: "message",
            message: Ie({
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
        event: H(e)
      };
    case "result":
      {
        if (e.subtype === "success") return {
          type: "ignored"
        };
        let message = X(e);
        return message ? {
          type: "message",
          message: message
        } : {
          type: "ignored"
        };
      }
    case "system":
      if (hzt(e)) return {
        type: "stream_event",
        event: {
          type: "stream_request_start"
        }
      };
      if (e.subtype === "init") return {
        type: "ignored"
      };
      if (e.subtype === "status") {
        let message_2 = Y(e);
        return message_2 ? {
          type: "message",
          message: message_2
        } : {
          type: "ignored"
        };
      }
      if (e.subtype === "compact_boundary") {
        let message_3 = Z(e);
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
          content: e.direction === "retry" && e.scope !== "local" && typeof e.original_model === "string" && typeof e.fallback_model === "string" ? lmt(e.original_model, e.fallback_model, e.api_refusal_category ?? null) : bi(typeof e.content === "string" ? e.content : "", {
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
          uuid: M(e.uuid),
          timestamp: new Date().toISOString()
        }
      };
      if (e.subtype === "model_fallback") {
        if (!D(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: Zn(e.content),
            level: "warning",
            trigger: e.trigger,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            isMeta: !1,
            uuid: M(e.uuid),
            timestamp: new Date().toISOString()
          }
        };
      }
      if (e.subtype === "model_consent_fallback") {
        if (!D(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: vCt({
            ...e,
            content: Zn(e.content),
            uuid: M(e.uuid)
          })
        };
      }
      if (e.subtype === "informational") {
        if (!D(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: Zn(e.content),
            level: e.level,
            isMeta: !1,
            uuid: M(e.uuid),
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
        let lines = Array.isArray(e.lines) ? e.lines.filter(item => typeof item === "string").slice(0, 32).map(item => bi(item, {
            maxCodeUnits: 2100
          })).filter(item => item.trim() !== "") : [],
          label = typeof e.label === "string" ? bi(e.label, {
            maxCodeUnits: 320
          }) : void 0,
          y = e.unverified === !0 && label !== void 0 && label.trim() !== "";
        if (typeof e.tool_use_id !== "string" || lines.length === 0 && !y) return {
          type: "ignored"
        };
        let g = M(e.uuid);
        return {
          type: "message",
          message: an({
            type: "tool_host_result_lines",
            toolUseID: e.tool_use_id,
            host: rC(typeof e.host?.name === "string" ? e.host.name : ""),
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
        if (!D(e)) return {
          type: "ignored"
        };
        let r = M(e.uuid);
        return {
          type: "message",
          message: el({
            content: Zn(e.content),
            uuid: () => r
          })
        };
      }
      return t(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`), {
        type: "ignored"
      };
    case "tool_progress":
      return t("[sdkMessageAdapter] Ignoring tool_progress frame"), {
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
        return {
          type: "env_log",
          message: $Hr(r, 1)[0] ?? ""
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
function fBr(e) {
  return e.type === "result";
}
var ne = 64,
  oe = 128;
function P(e) {
  return typeof e === "string" && e.length > 0 && e.length <= oe;
}
function ifn(e) {
  let n = "user_message_uuids" in e ? e.user_message_uuids : null,
    s = Array.isArray(n) ? n.filter(P).slice(0, ne) : [];
  if (s.length > 0) return s;
  let r = "user_message_uuid" in e ? e.user_message_uuid : void 0;
  return P(r) ? [r] : void 0;
}
function Z4s(e, n, s) {
  let r = ifn(e);
  return s.taskWake || (r === void 0 ? s.sent : r.some(item => n.has(item)));
}
function KWt(e) {
  let n = XEo(),
    s = new Map(Object.entries(n.shape)),
    r = typeof e === "object" && e !== null && !Array.isArray(e) ? Ro(e, (y, g) => g === "status" || (s.get(g)?.safeParse(y).success ?? !1)) : e,
    i = n.safeParse(r);
  if (i.success) return i.data;
  if (xa().claim("remote_rate_limit_frame_drop")) l("tengu_remote_rate_limits_dropped", {
    reason: b("invalid_frame"),
    frames: 1
  });
  return;
}
function pBr() {
  return {
    retracted: new Set(),
    inProgressToolUses: new Map(),
    evictedToolUses: new Set(),
    nestedUuidAliases: new Map()
  };
}
function mBr(e, n, s) {
  let r = s.filter(item => item !== n);
  if (r.length > 0) e.nestedUuidAliases.set(n, r);
}
function xrt(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = e,
    s = typeof n.uuid === "string" ? n.uuid : null;
  if (n.type === "system" && n.subtype === "model_refusal_fallback") {
    let uuids = L(n.retracted_message_uuids, s);
    return uuids ? {
      uuids: uuids,
      source: "retraction_banner"
    } : null;
  }
  if (n.type === "assistant") {
    let uuids_2 = L(n.supersedes, s);
    return uuids_2 ? {
      uuids: uuids_2,
      source: "supersedes"
    } : null;
  }
  return null;
}
function L(e, n) {
  if (!Array.isArray(e)) return null;
  let s = e.filter(item => typeof item === "string" && item !== n);
  return s.length > 0 ? s : null;
}
function re(e, n) {
  if (n.size === 0) return e;
  let s = e.filter(item => !n.has(item.uuid));
  return s.length === e.length ? e : s;
}
function hBr(e, n, s) {
  for (let r of s) e.inProgressToolUses.set(r, n);
}
function v4n(e, n) {
  for (let s of n) e.inProgressToolUses.delete(s);
}
function E4n(e) {
  let {
      index: index,
      signal: signal,
      surface: surface,
      setMessages: setMessages,
      setInProgressToolUseIDs: setInProgressToolUseIDs
    } = e,
    newly_retracted_count = U(signal.uuids, m => !index.retracted.has(m));
  for (let m of signal.uuids) {
    index.retracted.add(m);
    for (let S of index.nestedUuidAliases.get(m) ?? []) index.retracted.add(S);
  }
  let ids = [...index.inProgressToolUses].filter(([, m]) => index.retracted.has(m)).map(([m]) => m);
  v4n(index, ids);
  for (let m of ids) index.evictedToolUses.add(m);
  if (ids.length > 0 && setInProgressToolUseIDs) setInProgressToolUseIDs({
    action: "remove",
    ids: ids
  });
  setMessages(m => re(m, index.retracted)), l("tengu_refusal_retraction_evicted", {
    surface: f(surface),
    source: f(signal.source),
    uuid_count: signal.uuids.length,
    newly_retracted_count: newly_retracted_count,
    tool_use_cleared_count: ids.length
  });
}
function gBr(e, n, s, r) {
  if (r !== null && e.retracted.has(r)) return 0;
  let count = U(n, y => e.evictedToolUses.has(y));
  if (count > 0) l("tengu_refusal_retraction_orphan_tool_result", {
    surface: f(s),
    count: count
  });
  return count;
}
function eYs(e) {
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
  for (let S of events) {
    if (S.source !== "worker") {
      if (xrt(S.payload)) if (S.source === void 0) count_3++;else count_2++;
      continue;
    }
    let signal_2 = xrt(S.payload);
    if (signal_2) g++, E4n({
      index: index_2,
      signal: signal_2,
      surface: surface_2,
      setMessages: setMessages_2,
      setInProgressToolUseIDs: setInProgressToolUseIDs_2
    });
  }
  if (count_2 > 0) l("tengu_refusal_retraction_unauthenticated_signal", {
    surface: f(surface_2),
    reason: b("source_mismatch"),
    count: count_2
  });
  if (count_3 > 0) l("tengu_refusal_retraction_unauthenticated_signal", {
    surface: f(surface_2),
    reason: b("source_missing"),
    count: count_3
  });
  return g;
}
function afn(e, n, s) {
  if (!e.retracted.has(n)) return !1;
  return l("tengu_refusal_retraction_late_drop", {
    surface: f(s)
  }), !0;
}
var x = "local_workflow",
  O = 20,
  ie = 2592000000,
  maxLines = 40;
function zWt(e, n, s) {
  if (n.type !== "system") return;
  switch (n.subtype) {
    case "task_started":
      {
        if (typeof n.task_id !== "string" || n.task_type !== x) return;
        let r = e.get(n.task_id),
          i = r !== void 0 && !Ko(r.status) ? r : C(n.task_id, s);
        e.set(i.id, {
          ...i,
          runId: typeof n.run_id === "string" ? n.run_id : i.runId,
          description: Ofn(n.description) || i.description,
          workflowName: Ofn(n.workflow_name) || i.workflowName
        });
        return;
      }
    case "task_progress":
      {
        if (typeof n.task_id !== "string" || !Array.isArray(n.workflow_progress)) return;
        let r = e.get(n.task_id);
        if (r !== void 0 && Ko(r.status)) return;
        let i = r ?? {
          ...C(n.task_id, s),
          presence: "reported"
        };
        e.set(i.id, {
          ...K(i, n.usage, s),
          runId: i.runId ?? (typeof n.run_id === "string" ? n.run_id : void 0),
          wireProgress: n.workflow_progress,
          presence: i.presence === "unlisted" ? "reported" : i.presence
        });
        return;
      }
    case "background_tasks_changed":
      {
        if (!Array.isArray(n.tasks)) return;
        let r = new Set(n.tasks.map(item => item?.task_id));
        for (let i of e.values()) if (i.presence === "reported" && !r.has(i.id)) e.set(i.id, {
          ...i,
          presence: "unlisted"
        });
        return;
      }
    case "task_updated":
      {
        let r = typeof n.task_id === "string" ? e.get(n.task_id) : void 0,
          status = le().safeParse(n.patch?.status).data;
        if (r === void 0 || status === void 0 || Ko(r.status)) return;
        e.set(r.id, {
          ...r,
          status: status,
          endTime: Ko(status) ? s : r.endTime
        });
        return;
      }
    case "task_notification":
      {
        let r = typeof n.task_id === "string" ? e.get(n.task_id) : void 0;
        if (r === void 0) return;
        let status_2 = n.status === "completed" ? "completed" : n.status === "failed" ? "failed" : n.status === "stopped" ? "killed" : void 0,
          y = Ko(r.status);
        if (status_2 === void 0) {
          if (!y) e.delete(r.id);
          return;
        }
        if (y && r.status !== status_2) return;
        e.set(r.id, {
          ...K(r, n.usage, s),
          status: status_2,
          endTime: r.endTime ?? s
        });
        return;
      }
    default:
      return;
  }
}
function dBr(e, n, s) {
  for (let d of n.values()) {
    if (d.taskType !== x) continue;
    let m = e.get(d.id);
    if (m === void 0) e.set(d.id, {
      ...C(d.id, s),
      description: d.description
    });else if (m.description === "" && d.description !== "") e.set(d.id, {
      ...m,
      description: d.description
    });
  }
  let r = [],
    i = [],
    y = [];
  for (let d of e.values()) {
    let m = n.get(d.id),
      S = Ko(d.status);
    if (!S && m?.taskType !== void 0 && m.taskType !== x) {
      e.delete(d.id);
      continue;
    }
    let presence = m !== void 0 ? "listed" : d.presence === "listed" ? "unlisted" : d.presence,
      _ = S || presence === d.presence ? d : {
        ...d,
        presence: presence
      };
    if (_ !== d) e.set(_.id, _);
    if (S) i.push(_);else if (_.presence === "unlisted") {
      y.push(_);
      continue;
    }
    r.push(_);
  }
  let g = new Set([...i.toSorted((d, m) => (d.endTime ?? 0) - (m.endTime ?? 0)).slice(0, Math.max(0, i.length - O)), ...y.slice(0, Math.max(0, y.length - O))]);
  for (let d of g) e.delete(d.id);
  return g.size === 0 ? r : r.filter(item => !g.has(item));
}
function cBr(e, n, s, remoteForegroundTask) {
  let i = jYs(e.remoteBackgroundTasks, n),
    y = e.remoteWorkflowRuns.length === s.length && s.every((item, index) => item === e.remoteWorkflowRuns[index]);
  return i && y && e.remoteForegroundTask === remoteForegroundTask ? e : {
    ...e,
    remoteForegroundTask: remoteForegroundTask,
    remoteBackgroundTasks: i ? e.remoteBackgroundTasks : n,
    remoteWorkflowRuns: y ? e.remoteWorkflowRuns : s
  };
}
function rfn(e) {
  for (let n of e.values()) if (!Ko(n.status) && n.presence !== "unlisted") e.set(n.id, {
    ...n,
    presence: "unlisted"
  });
}
function ue(e) {
  return e.flatMap(item => {
    let s = ce().safeParse(item);
    return s.success ? [s.data] : [];
  });
}
class GWt {
  snapshots = new WeakMap();
  of(e) {
    let n = this.snapshots.get(e);
    if (n !== void 0) return n;
    let s = ue(e);
    return this.snapshots.set(e, s), s;
  }
}
function ofn(e, workflowProgress, s) {
  let r = s !== void 0 && e.status === "running";
  return {
    id: e.id,
    type: "local_workflow",
    description: e.description || "Dynamic workflow",
    status: r ? "killed" : e.status,
    startTime: e.startTime,
    endTime: r ? s : e.endTime,
    outputFile: "",
    outputOffset: 0,
    notified: !0,
    script: "",
    prompt: "",
    workflowName: e.workflowName,
    workflowProgress: workflowProgress,
    progressVersion: 0,
    agentCount: U(workflowProgress, i => i.type === "workflow_agent"),
    totalTokens: e.totalTokens,
    totalToolCalls: e.totalToolCalls,
    logs: []
  };
}
function C(id, startTime) {
  return {
    id: id,
    runId: void 0,
    status: "running",
    presence: "listed",
    description: "",
    workflowName: void 0,
    wireProgress: [],
    totalTokens: 0,
    totalToolCalls: 0,
    startTime: startTime,
    endTime: void 0
  };
}
function K(e, n, s) {
  let r = de().safeParse(n).data;
  if (r === void 0) return e;
  return {
    ...e,
    totalTokens: r.total_tokens,
    totalToolCalls: r.tool_uses,
    startTime: Math.min(e.startTime, s - r.duration_ms)
  };
}
function k(e) {
  return e.optional().catch(void 0);
}
var de = p(() => u({
    total_tokens: E(),
    tool_uses: E(),
    duration_ms: E().nonnegative().max(ie).catch(0)
  })),
  le = p(() => B(["pending", "running", "completed", "failed", "killed", "paused"])),
  ce = p(() => {
    let e = o().transform(s => bi(s, {
        maxCodeUnits: maxCodeUnits_2
      })),
      n = o().transform(s => HHr(s, {
        maxCodeUnits: maxCodeUnits,
        maxLines: maxLines
      }).text);
    return Dr("type", [u({
      type: T("workflow_agent"),
      index: E().int(),
      label: e,
      state: B(["start", "progress", "done", "error"]),
      phaseIndex: k(E().int()),
      phaseTitle: k(e),
      agentId: k(e),
      agentType: k(e),
      isolation: k(B(["worktree", "remote"])),
      remoteSessionId: k(e),
      model: k(e),
      fallbackModel: k(e),
      tokens: k(E()),
      toolCalls: k(E()),
      durationMs: k(E()),
      error: k(n),
      startedAt: k(E()),
      lastProgressAt: k(E()),
      queuedAt: k(E()),
      attempt: k(E()),
      lastAttemptReason: k(B(["stalled", "throttled", "user-retry"])),
      skipped: k(I()),
      blocked: k(I()),
      endedWithRun: k(B(["completed", "failed", "stopped"])),
      cached: k(I()),
      lastToolName: k(e),
      lastToolSummary: k(e),
      resultPreview: k(n),
      promptPreview: k(n),
      promptFramed: k(I())
    }), u({
      type: T("workflow_phase"),
      index: E().int(),
      title: e,
      kind: k(T("child"))
    })]);
  });
var pe = 100,
  fe = 256;
function T4n(e) {
  if (e.type !== "system" || e.subtype !== "session_metadata") return;
  let {
    metadata: metadata
  } = e;
  if (typeof metadata !== "object" || metadata === null) return;
  let s = "artifacts" in metadata ? metadata.artifacts : void 0;
  return s === null || Array.isArray(s) ? s : void 0;
}
function jDo(e, n) {
  let s = ye(n ?? []),
    r = Object.entries(e.frameUrls).filter(([, S]) => S.fromCloudSession !== !0);
  if (s.length === 0 && r.length === Object.keys(e.frameUrls).length) return e;
  let i = new Set(r.map(([S]) => S)),
    frameUrls = Object.fromEntries([...r, ...s.filter(([S]) => !i.has(S))]),
    g = Object.entries(e.frameUrls),
    d = Object.entries(frameUrls);
  return g.length === d.length && g.every(([S, h], index) => {
    let [w, A] = d[index],
      R = Object.entries(h),
      v = Object.entries(A);
    return S === w && R.length === v.length && R.every(([N, z]) => v.some(([F, j]) => F === N && j === z));
  }) ? e : {
    ...e,
    frameUrls: frameUrls
  };
}
var me = p(() => u({
  url: o(),
  title: o().optional().catch(void 0),
  updated_at: o().optional().catch(void 0)
}));
function ye(e) {
  let n = new Map();
  for (let s of e) {
    let r = me().safeParse(s);
    if (!r.success) continue;
    let {
        url: url,
        title: title,
        updated_at: updated_at
      } = r.data,
      d = fn(url);
    if (d === null) continue;
    let m = updated_at !== void 0 ? Date.parse(updated_at) : NaN,
      S = {
        url: Bn(d),
        updatedAt: Number.isFinite(m) ? m : 0,
        ...(title !== void 0 && title !== "" && {
          title: Q(title, fe)
        }),
        fromCloudSession: !0
      },
      h = n.get(d.slug);
    if (h === void 0 || S.updatedAt >= h.updatedAt) n.set(d.slug, S);
  }
  return [...n].sort(([, s], [, r]) => s.updatedAt - r.updatedAt).slice(-pe).map(([s, r]) => [`${c9}${s}`, r]);
}
function C4n(e, n) {
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
export { zWt, dBr, cBr, rfn, GWt, ofn, Q4s, UDo, sfn, VWt, BDo, k4n, uBr, D4e, fBr, ifn, Z4s, KWt, pBr, mBr, xrt, hBr, v4n, E4n, gBr, eYs, afn, T4n, jDo, C4n };