// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { r$r } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { pa } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { So } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { ma, MA, sZ, wfe, bc, Ce, IL, on } from "B:/~BUN/root/chunk-3jyp964r.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { dRe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { wt, po, oBt as maxCodeUnits, xgn as drop } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Ga } from "B:/~BUN/root/chunk-fszjvjk0.js";
import { Iv, uu } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { DLe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Ik } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { xlr, LRn, zno, Gno, Vno } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { sbe, Ezt } from "B:/~BUN/root/chunk-s4yxevxn.js";
import { aJn } from "B:/~BUN/root/chunk-2s3j0xxc.js";
import { ht } from "B:/~BUN/root/chunk-zmeajjrz.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { randomUUID as k } from "crypto";
function a3r(e) {
  return e.type !== "control_request" && e.type !== "control_response" && e.type !== "keep_alive" && e.type !== "control_cancel_request" && e.type !== "transcript_mirror" && !(e.type === "system" && (e.subtype === "task_summary" || e.subtype === "session_metadata"));
}
function D(e) {
  return {
    type: "assistant",
    message: e.error === "verification_required" ? xlr(e.message) : e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: e.timestamp ?? new Date().toISOString(),
    remoteSourced: !0,
    error: e.error,
    ...(e.is_api_error_message && {
      isApiErrorMessage: !0
    }),
    ...(e.api_error !== void 0 && {
      apiError: e.api_error
    }),
    ...(e.api_error_params !== void 0 && {
      apiErrorParams: e.api_error_params
    }),
    ...(e.api_error_code !== void 0 && {
      apiErrorCode: e.api_error_code
    })
  };
}
function I(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...(e.ttft_ms !== void 0 && {
      ttftMs: e.ttft_ms
    })
  };
}
function R(e, r) {
  return typeof e === "string" ? wt(e) : r;
}
function _(e) {
  let r = e;
  if (typeof r === "string" && r !== "" && e !== void 0) return e;
  return t("[sdkMessageAdapter] frame uuid missing or not a string \u2014 minting one", {
    level: "error"
  }), k();
}
function h(e) {
  if (typeof e.content === "string") return !0;
  return t(`[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`, {
    level: "error"
  }), !1;
}
function x(e) {
  if (e.subtype === "success") return {
    type: "system",
    subtype: "informational",
    content: "Session completed successfully",
    level: "info",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString()
  };
  let errors = e.errors;
  if (!Array.isArray(errors)) return t(`[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`), null;
  let o = errors.filter(item => typeof item === "string" && !item.startsWith("[ede_diagnostic]") && !item.startsWith("[session_crash]"));
  if (o.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: wt(o.join(", ")),
    level: "warning",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function T(e) {
  return {
    type: "system",
    subtype: "informational",
    content: `Cloud session initialized (model: ${R(e.model, "unknown")})`,
    level: "info",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function E(e) {
  let r = e.status;
  if (typeof r !== "string" || r === "") return null;
  return {
    type: "system",
    subtype: "informational",
    content: r === "compacting" ? "Compacting conversation\u2026" : `Status: ${wt(r)}`,
    level: "info",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString()
  };
}
function C(e) {
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
    content: `Tool ${wt(tool_name)} running for ${elapsed_time_seconds}s\u2026`,
    level: "info",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString(),
    toolUseID: e.tool_use_id
  };
}
function K(e) {
  let compact_metadata = e.compact_metadata;
  if (typeof compact_metadata !== "object" || compact_metadata === null) return t("[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: _(e.uuid),
    timestamp: new Date().toISOString(),
    compactMetadata: LRn(e.compact_metadata)
  };
}
function Dgt(e) {
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
    workerEpoch: Ezt(e)
  };
}
function cXe(e) {
  if (!e) return;
  if (typeof e.condition !== "string" || !Number.isSafeInteger(e.iterations) || e.iterations < 0 || !Number.isSafeInteger(e.set_at) || e.set_at < 0 || !Number.isSafeInteger(e.tokens_at_start) || e.tokens_at_start < 0 || e.last_reason !== void 0 && typeof e.last_reason !== "string") return;
  return {
    condition: po(e.condition, {
      maxCodeUnits: 4000
    }),
    iterations: e.iterations,
    setAt: e.set_at,
    tokensAtStart: e.tokens_at_start,
    ...(e.last_reason !== void 0 && {
      lastReason: po(e.last_reason, {
        maxCodeUnits: 512
      })
    })
  };
}
var P = {
    env: !0,
    settings: !0,
    clientdata: !0,
    experiment: !0,
    "model-default": !0,
    "unknown-model": !0,
    auto: !0
  },
  L = new Set(Object.keys(P));
function UXn(e) {
  if (typeof e !== "object" || e === null || typeof e.enabled !== "boolean" || typeof e.enforced !== "boolean" || !Number.isSafeInteger(e.effective_window) || e.effective_window <= 0 || !Number.isSafeInteger(e.threshold) || e.threshold <= 0 || !L.has(e.source)) {
    if (Ga().claim("remote_autocompact_frame_drop")) t("[sdkMessageAdapter] Dropping malformed autocompact_state frame"), p("remote_autocompact_sync", "invalid_frame");
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
function F_n(e, r, via) {
  let remoteAutocompactState = UXn(r);
  if (remoteAutocompactState === void 0) {
    e(u => u.remoteAutocompactState === void 0 ? u : {
      ...u,
      remoteAutocompactState: void 0
    });
    return;
  }
  let a = !1;
  if (e(u => {
    if (u.remoteAutocompactState !== void 0 && aJn(u.remoteAutocompactState, remoteAutocompactState)) return u;
    return a = !0, {
      ...u,
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
var O = (e, r) => So(pa(e, o => o === void 0), pa(r, o => o === void 0));
function $_n(e, r) {
  let o = [],
    n = MA(),
    a = !1,
    u = !1,
    l = frames => {
      if (!e()) return;
      i("tengu_remote_rate_limits_dropped", {
        via: c(r),
        reason: y("account_switched"),
        frames: frames
      });
    },
    f = (m, g) => {
      if (!e()) return;
      let M = Vno(m);
      if (M === void 0) return;
      if ((g === "seed" || g === "history") && (Gno(M.info) || M.info.resetsAt === void 0 && M.info.overageResetsAt === void 0)) return;
      let A = ma(),
        b = {
          ...zno(M.info, {
            unifiedRateLimitFallbackAvailable: A.unifiedRateLimitFallbackAvailable,
            upgradePaths: A.upgradePaths
          }),
          ...(A.lowPriorityOffer !== void 0 && {
            lowPriorityOffer: A.lowPriorityOffer
          }),
          ...(A.lowPriorityRetryAfterSeconds !== void 0 && {
            lowPriorityRetryAfterSeconds: A.lowPriorityRetryAfterSeconds
          }),
          ...(A.lowPriorityMaxWaitSeconds !== void 0 && {
            lowPriorityMaxWaitSeconds: A.lowPriorityMaxWaitSeconds
          })
        };
      if (sZ() && O(b, A)) return;
      wfe(b), i("tengu_remote_rate_limits_adopted", {
        via: c(g),
        status: c(M.info.status),
        degradation: c(M.degradation),
        frames: m.length
      });
    },
    s = (m, g) => {
      if (u) return;
      try {
        f(m, g);
      } catch (error) {
        d(error);
      }
    },
    S = (m = r) => {
      a = !1;
      let g = o;
      if (o = [], g.length === 0) return;
      if (n !== MA()) {
        l(g.length);
        return;
      }
      s(g, m);
    },
    v = m => {
      let g = MA();
      if (o.length > 0 && g !== n) l(o.length), o = [];
      n = g, o.push(m);
    };
  return {
    adopt(m, g) {
      S(), s(m, g);
    },
    push(m) {
      if (u) return;
      if (v(m), !a) a = !0, queueMicrotask(() => {
        if (a) S();
      });
    },
    hold(m) {
      if (u) return;
      v(m);
    },
    settle(m) {
      if (!a) S(m);
    },
    hasHeld: () => o.length > 0 && !a,
    flush: () => S(),
    dispose() {
      u = !0, o = [];
    }
  };
}
function nbe(e, r) {
  if (!sbe(e)) return {
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
        message: D(e)
      };
    case "user":
      {
        let content = e.message?.content;
        if (Array.isArray(content) && content.some(item => item.type === "tool_result")) return {
          type: "message",
          message: {
            ...Ce({
              content: content,
              toolUseResult: e.tool_use_result,
              uuid: e.uuid,
              timestamp: e.timestamp
            }),
            remoteSourced: !0
          }
        };
        if (e.parent_tool_use_id) return {
          type: "ignored"
        };
        if (e.isSynthetic && !IL(e.origin)) return {
          type: "ignored"
        };
        let u = content === Iv || Array.isArray(content) && content.some(item => item.type === "text" && (item.text === Iv || item.text === uu));
        if (r?.convertUserTextMessages || u) {
          if (typeof content === "string" || Array.isArray(content)) return {
            type: "message",
            message: Ce({
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
        event: I(e)
      };
    case "result":
      {
        if (e.subtype === "success") return {
          type: "ignored"
        };
        let message = x(e);
        return message ? {
          type: "message",
          message: message
        } : {
          type: "ignored"
        };
      }
    case "system":
      if (e.subtype === "init") return {
        type: "message",
        message: T(e)
      };
      if (e.subtype === "status") {
        if (e.status === "requesting") return {
          type: "stream_event",
          event: {
            type: "stream_request_start"
          }
        };
        let message_2 = E(e);
        return message_2 ? {
          type: "message",
          message: message_2
        } : {
          type: "ignored"
        };
      }
      if (e.subtype === "compact_boundary") {
        let message_3 = K(e);
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
          content: e.direction === "retry" && e.scope !== "local" && typeof e.original_model === "string" && typeof e.fallback_model === "string" ? DLe(e.original_model, e.fallback_model, e.api_refusal_category ?? null) : po(typeof e.content === "string" ? e.content : "", {
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
          uuid: _(e.uuid),
          timestamp: new Date().toISOString()
        }
      };
      if (e.subtype === "model_fallback") {
        if (!h(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_fallback",
            content: wt(e.content),
            level: "warning",
            trigger: e.trigger,
            originalModel: e.original_model,
            fallbackModel: e.fallback_model,
            isMeta: !1,
            uuid: _(e.uuid),
            timestamp: new Date().toISOString()
          }
        };
      }
      if (e.subtype === "model_consent_fallback") {
        if (!h(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "model_consent_fallback",
            content: wt(e.content),
            level: "warning",
            choice: e.choice,
            originalModel: e.original_model,
            originalModelName: dRe(e.original_model_name) ? e.original_model_name : void 0,
            fallbackModel: e.fallback_model,
            persistedAsDefault: e.persisted_as_default,
            isMeta: !1,
            uuid: _(e.uuid),
            timestamp: new Date().toISOString()
          }
        };
      }
      if (e.subtype === "informational") {
        if (!h(e)) return {
          type: "ignored"
        };
        return {
          type: "message",
          message: {
            type: "system",
            subtype: "informational",
            content: wt(e.content),
            level: e.level,
            isMeta: !1,
            uuid: _(e.uuid),
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
        let lines = Array.isArray(e.lines) ? e.lines.filter(item => typeof item === "string").slice(0, 32).map(item => po(item, {
            maxCodeUnits: 2100
          })).filter(item => item.trim() !== "") : [],
          label = typeof e.label === "string" ? po(e.label, {
            maxCodeUnits: 320
          }) : void 0,
          u = e.unverified === !0 && label !== void 0 && label.trim() !== "";
        if (typeof e.tool_use_id !== "string" || lines.length === 0 && !u) return {
          type: "ignored"
        };
        let l = _(e.uuid);
        return {
          type: "message",
          message: on({
            type: "tool_host_result_lines",
            toolUseID: e.tool_use_id,
            host: Ik(typeof e.host?.name === "string" ? e.host.name : ""),
            lines: lines,
            ...(label !== void 0 && {
              label: label
            }),
            ...(u && {
              unverified: !0
            })
          }, {
            now: () => new Date().toISOString(),
            uuid: () => l
          })
        };
      }
      if (e.subtype === "permission_denied") return {
        type: "ignored"
      };
      if (e.subtype === "local_command_output") {
        if (!h(e)) return {
          type: "ignored"
        };
        let n = _(e.uuid);
        return {
          type: "message",
          message: bc({
            content: wt(e.content),
            uuid: () => n
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
      let message_4 = C(e);
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
        let n = typeof e.data?.content === "string" ? e.data.content : null;
        if (n === null) return t("[sdkMessageAdapter] env_manager_log without data.content \u2014 orchestrator wire change?", {
          level: "warn"
        }), {
          type: "env_log",
          message: ""
        };
        let a = n.split(/\r\n?|\n/),
          message_5 = "";
        for (let l = a.length - 1; l >= 0; l--) if (message_5 = po(a[l], {
          maxCodeUnits: 512
        }), message_5 !== "") break;
        return {
          type: "env_log",
          message: message_5
        };
      }
    case "conversation_reset":
      {
        let n = e.new_conversation_id;
        if (typeof n !== "string" || n === "") return t("[sdkMessageAdapter] Dropping conversation_reset frame without a string new_conversation_id", {
          level: "error"
        }), {
          type: "ignored"
        };
        return {
          type: "conversation_reset",
          newConversationId: n
        };
      }
    default:
      return t(`[sdkMessageAdapter] Unknown message type: ${e.type}`), {
        type: "ignored"
      };
  }
}
function U_n(e) {
  return e.type === "result";
}
function dXe(e) {
  let r = r$r(),
    o = new Map(Object.entries(r.shape)),
    n = typeof e === "object" && e !== null && !Array.isArray(e) ? Qr(e, (u, l) => l === "status" || (o.get(l)?.safeParse(u).success ?? !1)) : e,
    a = r.safeParse(n);
  if (a.success) return a.data;
  if (Ga().claim("remote_rate_limit_frame_drop")) i("tengu_remote_rate_limits_dropped", {
    reason: y("invalid_frame"),
    frames: 1
  });
  return;
}
function B_n() {
  return {
    retracted: new Set(),
    inProgressToolUses: new Map(),
    evictedToolUses: new Set(),
    nestedUuidAliases: new Map()
  };
}
function j_n(e, r, o) {
  let n = o.filter(item => item !== r);
  if (n.length > 0) e.nestedUuidAliases.set(r, n);
}
function rPe(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = e,
    o = typeof r.uuid === "string" ? r.uuid : null;
  if (r.type === "system" && r.subtype === "model_refusal_fallback") {
    let uuids = w(r.retracted_message_uuids, o);
    return uuids ? {
      uuids: uuids,
      source: "retraction_banner"
    } : null;
  }
  if (r.type === "assistant") {
    let uuids_2 = w(r.supersedes, o);
    return uuids_2 ? {
      uuids: uuids_2,
      source: "supersedes"
    } : null;
  }
  return null;
}
function w(e, r) {
  if (!Array.isArray(e)) return null;
  let o = e.filter(item => typeof item === "string" && item !== r);
  return o.length > 0 ? o : null;
}
function j(e, r) {
  if (r.size === 0) return e;
  let o = e.filter(item => !r.has(item.uuid));
  return o.length === e.length ? e : o;
}
function W_n(e, r, o) {
  for (let n of o) e.inProgressToolUses.set(n, r);
}
function OWt(e, r) {
  for (let o of r) e.inProgressToolUses.delete(o);
}
function MWt(e) {
  let {
      index: index,
      signal: signal,
      surface: surface,
      setMessages: setMessages,
      setInProgressToolUseIDs: setInProgressToolUseIDs
    } = e,
    newly_retracted_count = U(signal.uuids, s => !index.retracted.has(s));
  for (let s of signal.uuids) {
    index.retracted.add(s);
    for (let S of index.nestedUuidAliases.get(s) ?? []) index.retracted.add(S);
  }
  let ids = [...index.inProgressToolUses].filter(([, s]) => index.retracted.has(s)).map(([s]) => s);
  OWt(index, ids);
  for (let s of ids) index.evictedToolUses.add(s);
  if (ids.length > 0 && setInProgressToolUseIDs) setInProgressToolUseIDs({
    action: "remove",
    ids: ids
  });
  setMessages(s => j(s, index.retracted)), i("tengu_refusal_retraction_evicted", {
    surface: c(surface),
    source: c(signal.source),
    uuid_count: signal.uuids.length,
    newly_retracted_count: newly_retracted_count,
    tool_use_cleared_count: ids.length
  });
}
function z_n(e, r, o, n) {
  if (n !== null && e.retracted.has(n)) return 0;
  let count = U(r, u => e.evictedToolUses.has(u));
  if (count > 0) i("tengu_refusal_retraction_orphan_tool_result", {
    surface: c(o),
    count: count
  });
  return count;
}
function l3r(e) {
  let {
      index: index_2,
      events: events,
      surface: surface_2,
      setMessages: setMessages_2,
      setInProgressToolUseIDs: setInProgressToolUseIDs_2
    } = e,
    l = 0,
    count_2 = 0,
    count_3 = 0;
  for (let S of events) {
    if (S.source !== "worker") {
      if (rPe(S.payload)) if (S.source === void 0) count_3++;else count_2++;
      continue;
    }
    let signal_2 = rPe(S.payload);
    if (signal_2) l++, MWt({
      index: index_2,
      signal: signal_2,
      surface: surface_2,
      setMessages: setMessages_2,
      setInProgressToolUseIDs: setInProgressToolUseIDs_2
    });
  }
  if (count_2 > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(surface_2),
    reason: y("source_mismatch"),
    count: count_2
  });
  if (count_3 > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(surface_2),
    reason: y("source_missing"),
    count: count_3
  });
  return l;
}
function Lgt(e, r, o) {
  if (!e.retracted.has(r)) return !1;
  return i("tengu_refusal_retraction_late_drop", {
    surface: c(o)
  }), !0;
}
export { a3r, Dgt, cXe, UXn, F_n, $_n, nbe, U_n, dXe, B_n, j_n, rPe, W_n, OWt, MWt, z_n, l3r, Lgt };