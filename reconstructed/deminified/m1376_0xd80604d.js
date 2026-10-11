// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { We, st, te, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Wg, fj, fK, Au, sH, lBe, x_e, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { GL, $Ke, hko, Xko } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { STe, Uee, Bee } from "B:/~BUN/root/chunk-wefm1yd9.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { k8, hDe } from "B:/~BUN/root/chunk-3jyp964r.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { NHt, Jun, kut, Cv, Hw, CYe, opn, KFe, HHr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { jd, ts } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { rp } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { hR, Qie, Wyo, zyo } from "B:/~BUN/root/chunk-y39emrp9.js";
import { aFe } from "B:/~BUN/root/chunk-9qtz41py.js";
import { fq, gy, Vle } from "B:/~BUN/root/chunk-hjery5bx.js";
import { WF } from "B:/~BUN/root/chunk-ztbv79md.js";
import { jje } from "B:/~BUN/root/chunk-6q0mnrxy.js";
import { Nre } from "B:/~BUN/root/chunk-wnwck3ar.js";
import { fSt } from "B:/~BUN/root/chunk-1hwaphpm.js";
import { hSe } from "B:/~BUN/root/chunk-435bh2r7.js";
import { PU } from "B:/~BUN/root/chunk-hjew1zqw.js";
import { o, E, M, ae, C, u, ut, fe, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { $a, jg } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { randomUUID as Se } from "crypto";
var K = f(() => {
  let input = fe(o(), ae()),
    text = ut({
      type: A("text"),
      text: o()
    }),
    assistantByType = new Map(),
    r = {
      text: text,
      tool_use: ut({
        type: A("tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      thinking: ut({
        type: A("thinking"),
        thinking: o(),
        signature: o().optional()
      }),
      redacted_thinking: ut({
        type: A("redacted_thinking"),
        data: o()
      }),
      server_tool_use: ut({
        type: A("server_tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      mcp_tool_use: ut({
        type: A("mcp_tool_use"),
        id: o(),
        name: o(),
        server_name: o(),
        input: input
      })
    };
  for (let [h, g] of Object.entries(r)) assistantByType.set(h, g);
  let a = E().finite();
  return {
    text: text,
    assistantByType: assistantByType,
    usage: ut({
      input_tokens: a,
      output_tokens: a,
      cache_creation_input_tokens: a.nullish(),
      cache_read_input_tokens: a.nullish(),
      iterations: C(ut({})).nullish()
    }),
    generic: ut({
      type: o()
    }),
    toolResultLike: ut({
      type: o(),
      tool_use_id: o()
    }),
    toolResult: ut({
      type: A("tool_result"),
      tool_use_id: o(),
      is_error: M().optional()
    })
  };
});
function T(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var G = 256,
  Ye = "[truncated: too deep]";
function _e(value) {
  let n = [];
  if (typeof value === "object" && value !== null) n.push({
    value: value,
    depth: 1
  });
  while (n.length > 0) {
    let {
      value: value_2,
      depth: depth
    } = n.pop();
    if (depth > G) return !0;
    for (let value_3 of Object.values(value_2)) if (typeof value_3 === "object" && value_3 !== null) n.push({
      value: value_3,
      depth: depth + 1
    });
  }
  return !1;
}
function Xe(value_4) {
  let n = 0,
    s = [{
      value: value_4,
      depth: 1
    }];
  while (s.length > 0) {
    let {
        value: value_5,
        depth: depth_2
      } = s.pop(),
      h = Array.isArray(value_5) ? value_5 : T(value_5) ? value_5 : null;
    if (h === null) continue;
    for (let g of Object.keys(h)) {
      let value_6 = Reflect.get(h, g);
      if (typeof value_6 !== "object" || value_6 === null) continue;
      if (depth_2 + 1 > G) Reflect.set(h, g, Ye), n++;else s.push({
        value: value_6,
        depth: depth_2 + 1
      });
    }
  }
  return n;
}
function z(e) {
  return T(e) && typeof e.type === "string" ? e.type : null;
}
function Qe(e) {
  let n = z(e);
  if (n !== null) return n;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Je(e) {
  let n = z(e);
  if (n === null) return !1;
  let s = K();
  return (s.assistantByType.get(n) ?? (n.endsWith("_tool_result") ? s.toolResultLike : s.generic)).safeParse(e).success;
}
function Ze(e) {
  let content = e.content;
  if (content === void 0 || typeof content === "string") return !0;
  if (Array.isArray(content)) {
    let s = content.filter(item => {
      let a = z(item);
      if (a === null) return !1;
      return a === "text" ? K().text.safeParse(item).success : K().generic.safeParse(item).success;
    });
    if (s.length !== content.length) e.content = s;
    return !0;
  }
  if (!T(content)) return e.content = String(content), !0;
  try {
    return e.content = b(content), !0;
  } catch {
    return !1;
  }
}
function et(e) {
  let n = z(e);
  if (n === null || !T(e)) return !1;
  let s = K();
  if (n === "text") return s.text.safeParse(e).success;
  if (n === "tool_result") {
    if (!s.toolResult.safeParse(e).success) return !1;
    return Ze(e);
  }
  return s.generic.safeParse(e).success;
}
function q(e, n, s) {
  t(`[wireFrameShape] ${e} frame ${typeof n === "string" ? n : "(no uuid)"}: ${s}`, {
    level: "error"
  });
}
function ye(e, n, s, r) {
  let a = [],
    h = e.filter(item => {
      try {
        if (n(item)) return !0;
      } catch (error) {
        return a.push(`unreadable block (${l(error)})`), !1;
      }
      return a.push(Qe(item)), !1;
    });
  if (a.length === 0) return e;
  return q(s, r, `dropped ${a.length} malformed content block(s): ${a.join(", ")}`), h;
}
function tt(e) {
  let n;
  if (typeof e.uuid === "string" && e.uuid !== "") n = e.uuid;else q("assistant", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), n = Se(), e.uuid = n;
  let s = e.message;
  if (!T(s)) return q("assistant", e.uuid, "dropped \u2014 message is not an object"), !1;
  if (s.id !== void 0 && typeof s.id !== "string") s.id = typeof s.id === "number" && Number.isFinite(s.id) ? String(s.id) : e.uuid, q("assistant", e.uuid, "coerced a non-string message.id");
  if (typeof s.content === "string") s.content = [{
    type: "text",
    text: s.content
  }];
  let content_2 = s.content;
  if (!Array.isArray(content_2)) return q("assistant", e.uuid, "dropped \u2014 message.content is not an array"), !1;
  let a = ye(content_2, Je, "assistant", e.uuid);
  if (a.length === 0 && content_2.length > 0) return q("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (a !== content_2) s.content = a;
  return ot(s, n), !0;
}
function ot(e, n) {
  let s = [];
  if (e.model !== void 0 && typeof e.model !== "string") delete e.model, s.push("model");
  if (e.stop_reason !== void 0 && e.stop_reason !== null && typeof e.stop_reason !== "string") e.stop_reason = null, s.push("stop_reason");
  if (e.usage !== void 0 && !K().usage.safeParse(e.usage).success) delete e.usage, s.push("usage");
  if (s.length > 0) q("assistant", n, `removed malformed envelope field(s): ${s.join(", ")}`);
}
function rt(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === "")) q("user", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), e.uuid = Se();
  let n = e.message;
  if (!T(n)) return q("user", e.uuid, "dropped \u2014 message is not an object"), !1;
  let content_3 = n.content;
  if (typeof content_3 === "string") return !0;
  if (!Array.isArray(content_3)) return q("user", e.uuid, "dropped \u2014 message.content is neither string nor array"), !1;
  let r = ye(content_3, et, "user", e.uuid);
  if (r.length === 0 && content_3.length > 0) return q("user", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (r !== content_3) n.content = r;
  return !0;
}
function re(e) {
  if (!T(e)) return !1;
  switch (e.type) {
    case "message_start":
      return T(e.message) && typeof e.message.id === "string";
    case "content_block_start":
      {
        let content_block = e.content_block;
        if (!T(content_block) || typeof content_block.type !== "string") return !1;
        switch (content_block.type) {
          case "tool_use":
          case "server_tool_use":
            return typeof content_block.id === "string" && typeof content_block.name === "string";
          case "text":
            return typeof content_block.text === "string";
          case "thinking":
            return typeof content_block.thinking === "string";
          default:
            return !0;
        }
      }
    case "content_block_delta":
      {
        let delta = e.delta;
        if (!T(delta)) return !1;
        switch (delta.type) {
          case "text_delta":
            return typeof delta.text === "string";
          case "input_json_delta":
            return typeof delta.partial_json === "string";
          case "signature_delta":
            return typeof delta.signature === "string";
          case "thinking_delta":
            return typeof delta.thinking === "string";
          default:
            return !0;
        }
      }
    default:
      return !0;
  }
}
function sbe(e) {
  if (!T(e)) return !0;
  try {
    let n = !0;
    try {
      let r = Xe(e);
      if (r > 0) q(typeof e.type === "string" ? e.type : "unknown", e.uuid, `replaced ${r} subtree(s) nested deeper than ${G} levels with a marker`);
    } catch {
      n = !1;
    }
    let s;
    switch (e.type) {
      case "assistant":
        s = tt(e);
        break;
      case "user":
        s = rt(e);
        break;
      case "stream_event":
        if (s = re(e.event), !s) q("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        s = !0;
        break;
    }
    if (s && !n && _e(e)) return q(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 nested deeper than ${G} levels`), !1;
    return s;
  } catch (error) {
    return q(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 conformance threw: ${l(error)}`), !1;
  }
}
var it = ["blocked_path", "decision_reason", "decision_reason_type", "decision_reason_code", "title", "display_name", "description", "agent_id", "tool_kind", "server_prompt"],
  at = ["classifier_approvable", "suppress_always_allow_rule", "default_to_no", "requires_user_interaction"];
function U3r(e) {
  if (!T(e)) return !1;
  try {
    if (typeof e.tool_name !== "string" || typeof e.tool_use_id !== "string" || !T(e.input) || _e(e)) return t("[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep", {
      level: "error"
    }), !1;
    let n = [];
    for (let s of it) if (e[s] !== void 0 && typeof e[s] !== "string") delete e[s], n.push(s);
    for (let s of at) if (e[s] !== void 0 && typeof e[s] !== "boolean") delete e[s], n.push(s);
    if (e.permission_suggestions !== void 0) {
      let permission_suggestions = e.permission_suggestions,
        r = Array.isArray(permission_suggestions) ? permission_suggestions.filter(item => GL().safeParse(item).success) : [];
      if (!Array.isArray(permission_suggestions) || r.length !== permission_suggestions.length) if (n.push(`permission_suggestions (${Array.isArray(permission_suggestions) ? `${permission_suggestions.length - r.length} of ${permission_suggestions.length} entries` : "not an array"})`), r.length > 0) e.permission_suggestions = r;else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let matched_ask_rule = e.matched_ask_rule;
      if (!T(matched_ask_rule) || typeof matched_ask_rule.source !== "string" || typeof matched_ask_rule.tool_name !== "string" || matched_ask_rule.rule_content !== void 0 && typeof matched_ask_rule.rule_content !== "string") delete e.matched_ask_rule, n.push("matched_ask_rule");
    }
    if (e.mcp_server !== void 0) {
      let mcp_server = e.mcp_server;
      if (!T(mcp_server) || typeof mcp_server.name !== "string" || typeof mcp_server.source !== "string") delete e.mcp_server, n.push("mcp_server");
    }
    if (e.computer_folder !== void 0) {
      let computer_folder = e.computer_folder;
      if (!T(computer_folder) || typeof computer_folder.path !== "string" || typeof computer_folder.computer_name !== "string") delete e.computer_folder, n.push("computer_folder");
    }
    if (n.length > 0) t(`[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${n.join(", ")}`, {
      level: "error"
    });
    return !0;
  } catch (error) {
    return t(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${l(error)}`, {
      level: "error"
    }), !1;
  }
}
function Ezt(e) {
  let worker_epoch = e.worker_epoch;
  return typeof worker_epoch === "number" && Number.isSafeInteger(worker_epoch) && worker_epoch > 0 ? worker_epoch : void 0;
}
var regExp = new RegExp(`<${fK}[\\s>]`, "i"),
  regExp_2 = new RegExp(`</${fK}>`, "i");
function ct(e) {
  return regExp.test(e) && regExp_2.test(e);
}
var ubn = new Set(["user", "env_manager_log"]),
  pt = new Map([["thinking_tokens", ["estimated_tokens", "estimated_tokens_delta", "user_message_uuid"]], ["post_turn_summary", ["summarizes_uuid", "status_category", "status_detail", "needs_action"]], ["task_summary", ["detail"]], ["commands_changed", ["commands"]]]);
function we(e) {
  let subtype = e.subtype;
  if (e.type !== "system" || typeof subtype !== "string") return null;
  let s = pt.get(subtype);
  if (!s) return null;
  let r = {
    type: "system",
    subtype: subtype,
    uuid: e.uuid,
    session_id: e.session_id
  };
  for (let a of s) if (a in e) r[a] = e[a];
  return r;
}
var ke = 500;
function Re(e) {
  if (e.startsWith("<bash-stdout") || e.startsWith("<bash-stderr") || e.startsWith("<local-command-stdout") || e.startsWith("<local-command-stderr") || e.startsWith(lBe) || e.startsWith(`<${sH} `) || e.startsWith(`<${sH}>`)) return !0;
  if (Bee(e)) return !0;
  if ((e.startsWith(k8) || e.startsWith(STe)) && e.startsWith("<", e.indexOf(`
`) + 1)) return !0;
  let n = Uee.find(item => e.startsWith(item));
  if (n !== void 0 && e.startsWith("<", n.length)) return !0;
  if (ct(e)) return !0;
  return e.includes("<bash-input>") || e.includes(`<${Wg}>`) || e.includes("<user-memory-input>") || e.includes(`<${Au}`) || e.includes("<mcp-resource-update") || e.includes("<mcp-polling-update") || e.includes(`<${x_e}>`) || e.includes(`<${fj}>`);
}
function lPe(e) {
  if (e.tool_use_result !== void 0) return !0;
  let n = e.message?.content;
  if (typeof n === "string") return Re(n);
  return Array.isArray(n) && n.some(item => typeof item === "object" && item !== null && "type" in item && (item.type === "tool_result" || item.type === "text" && "text" in item && typeof item.text === "string" && Re(item.text)));
}
function EXe(e) {
  let n = e.message?.content;
  return Array.isArray(n) && !n.every(item => typeof item === "object" && item !== null && (item.type !== "text" || typeof item.text === "string"));
}
function pJn(e) {
  return lPe(e) || EXe(e);
}
function fJn(e) {
  if (pJn(e)) return !0;
  let n = e.message?.content;
  return (typeof n === "string" ? [n] : Array.isArray(n) ? n.flatMap(item => typeof item === "object" && item !== null && item.type === "text" && typeof item.text === "string" ? [item.text] : []) : []).some(ht);
}
function ht(e) {
  let n = e.indexOf(`
`);
  return (n === -1 || n === e.length - 1) && (e.startsWith(k8) || e.startsWith(STe) || Uee.some(item => e.startsWith(item.trimEnd())));
}
import { randomUUID as qt } from "crypto";
import { isDeepStrictEqual as Pt } from "util";
function be(e, n) {
  if (n !== void 0) return n;
  return e === "side_question" ? 600000 : 75000;
}
import { appendFile as ft } from "fs/promises";
function P(e, n, s) {
  return;
}
import { randomUUID as B } from "crypto";
var gt = 1000,
  Ce = 30000,
  N = 5,
  vt = 45000,
  Ee = 5000,
  Te = 30000,
  St = 30000,
  _t = new Set([401, 403, 404]),
  ie = 4096,
  yt = {
    verified: "verified",
    verified_by_gate: "verified",
    verified_keyless_device: "verified",
    service_vouched: "verified",
    absent: "unverified",
    invalid: "unverified"
  };
function x(e) {
  return String(e).slice(0, 64).replace(/[^\x20-\x7e]/g, "?");
}
function Rt(e) {
  if (typeof e !== "string") return "unknown";
  let n = e.startsWith("DEVICE_ATTESTATION_STATUS_") ? e.slice(26).toLowerCase() : e;
  return yt[n] ?? "unknown";
}
var wt = 2000;
function Me(e, n, s) {
  let sentAt = typeof e.created_at === "string" ? Date.parse(e.created_at) : NaN;
  if (Number.isNaN(sentAt)) return {
    replayed: !0
  };
  return {
    sentAt: sentAt,
    replayed: sentAt < n + wt,
    ...(s !== void 0 && {
      ageMs: bt(s, sentAt) - sentAt
    })
  };
}
function kt(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0,
    s = typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0,
    device_attestation_status = e.device_attestation_status;
  if (!(s === "hook_callback" || hSe.some(item => item === s))) return {};
  let remote_tool_gate = e.payload.remote_tool_gate,
    modeStamp = remote_tool_gate === void 0 || remote_tool_gate === null ? void 0 : remote_tool_gate === "caller_reauthored" ? "present" : "other";
  return {
    ...(device_attestation_status !== void 0 && device_attestation_status !== null && {
      attestationStatus: aFe(typeof device_attestation_status === "string" ? device_attestation_status.toUpperCase() : device_attestation_status)
    }),
    ...(modeStamp !== void 0 && {
      modeStamp: modeStamp
    })
  };
}
function bt(e, n) {
  let s = Date.now(),
    r = performance.now(),
    a = e.serviceMs + Math.max(s - e.wallMs, r - e.monotonicMs);
  if (n > a) return e.serviceMs = n, e.wallMs = s, e.monotonicMs = r, n;
  return a;
}
var Ct = f(() => u({
    error: u({
      type: A("session_not_active")
    })
  })),
  Et = "tool_host_ended";
function de(e) {
  return typeof e === "object" && e !== null && "type" in e && typeof e.type === "string";
}
class ue {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  onAuth401;
  state = "idle";
  abortController = null;
  reconnectAttempts = 0;
  exhaustedBudget = !1;
  reconnectTimer = null;
  livenessTimer = null;
  driftTimer = null;
  lastDriftCheck = 0;
  lastSequenceNum = 0;
  issuedRequestIds = new Set();
  ownRequestUuids = new Map();
  trustedDeviceToken;
  deviceProofRenewed = !1;
  sendsInFlight;
  servesSession;
  rediallingPastBudget = !1;
  connectedSince = 0;
  serviceClock = void 0;
  eventSigner;
  controlOnly;
  constructor(e, n, s, r, a, h, {
    trackSends = !1,
    keepRedialling: keepRedialling,
    eventSigner: eventSigner,
    controlOnly = !1
  } = {}) {
    this.sessionId = e;
    this.orgUuid = n;
    this.getAccessToken = s;
    this.callbacks = r;
    this.onAuth401 = a;
    if (h !== void 0 && h > 0) this.lastSequenceNum = h;
    this.sendsInFlight = trackSends ? new Set() : null, this.servesSession = keepRedialling ?? (() => !1), this.eventSigner = eventSigner, this.controlOnly = controlOnly;
  }
  get keepRedialling() {
    try {
      return this.servesSession();
    } catch {
      return !1;
    }
  }
  async flushSends(e) {
    if (this.sendsInFlight === null || this.sendsInFlight.size === 0) return;
    await nt(Promise.allSettled([...this.sendsInFlight]), e);
  }
  async connect() {
    if (this.state === "connecting" || this.state === "connected") {
      t("[SessionsV2Client] Already connecting/connected");
      return;
    }
    this.state = "connecting", this.connectedSince = Date.now();
    let e = new URL(`${an().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`);
    if (this.lastSequenceNum > 0) e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.controlOnly) e.searchParams.set("control_only", "1");
    let abortController = new AbortController();
    this.abortController = abortController;
    let s;
    try {
      s = await this.authHeaders();
    } catch (error) {
      if (this.abortController !== abortController) return;
      t(`[SessionsV2Client] Could not build the stream's credentials: ${l(error)}`, {
        level: "error"
      }), this.abortController = null, this.handleStreamEnd();
      return;
    }
    let r = {
      ...s,
      Accept: "text/event-stream"
    };
    if (abortController.signal.aborted || this.abortController !== abortController) return;
    if (this.lastSequenceNum > 0) r["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`), this.readStream(e, r, abortController);
  }
  loadTrustedDeviceToken() {
    let e = void 0,
      n = () => {
        if (this.trustedDeviceToken === e) this.trustedDeviceToken = void 0;
      },
      s = (async () => {
        try {
          let r = (await jd()) ? (await gy()) ?? "" : "";
          if (!r) n();
          return r;
        } catch (error) {
          return n(), t(`[SessionsV2Client] trusted-device token unavailable, sending no td-v1 header: ${l(error)}`), "";
        }
      })();
    return e = s, s;
  }
  renewDeviceProof() {
    if (this.deviceProofRenewed) return;
    this.deviceProofRenewed = !0;
    let trustedDeviceToken = this.trustedDeviceToken,
      n = void 0,
      s = () => {
        if (this.trustedDeviceToken === n) this.trustedDeviceToken = void 0;
      },
      r = (async () => {
        let a = trustedDeviceToken === void 0 ? "" : await trustedDeviceToken.catch(() => "");
        try {
          let g = (await jd()) ? await Vle(a || void 0) : void 0;
          if (g) return g;
        } catch (error) {
          t(`[SessionsV2Client] trusted-device re-enrollment failed: ${l(error)}`);
        }
        let h = await this.loadTrustedDeviceToken();
        if (!h) s();
        return h;
      })().catch(a => (s(), t(`[SessionsV2Client] device proof renewal failed: ${l(a)}`), ""));
    n = r, this.trustedDeviceToken = r;
  }
  async recoverTrustedDeviceToken(e) {
    try {
      if (!(await jd())) return !1;
      let n = await Vle(e || void 0);
      if (!n) return !1;
      return this.trustedDeviceToken = Promise.resolve(n), !0;
    } catch (error) {
      return t(`[SessionsV2Client] trusted-device re-enrollment failed: ${l(error)}`), !1;
    }
  }
  async postEvents(url, n, headers, r = St) {
    let a = await fetch(url, {
      method: "POST",
      headers: headers,
      body: b(n),
      signal: AbortSignal.timeout(r),
      ...yi({
        url: url
      })
    });
    if (a.ok) {
      let S = (await a.json()).results?.[0],
        y = S ? parseInt(String(S.sequence_num), 10) : NaN;
      return {
        ok: !0,
        sequence_num: isNaN(y) ? 0 : y
      };
    }
    let refusal,
      inactive = !1;
    if (a.status === 403 && ts()) refusal = await Pe(a);else if (a.status === 409) inactive = await Tt(a);else await PU(a);
    return {
      ok: !1,
      status: a.status,
      refusal: refusal,
      inactive: inactive,
      sentDeviceToken: headers["X-Trusted-Device-Token"]
    };
  }
  async readStream(e, headers_2, s) {
    let r,
      a = !1,
      h = setTimeout(() => {
        a = !0, s.abort();
      }, Te);
    try {
      r = await fetch(e.href, {
        method: "GET",
        headers: headers_2,
        signal: s.signal,
        ...yi({
          url: e.href
        })
      });
    } catch (error) {
      if (clearTimeout(h), a) {
        t(`[SessionsV2Client] Connect timed out after ${Te}ms, reconnecting`, {
          level: "error"
        }), p("remote_connect", "remote_connect_timeout"), this.handleStreamEnd();
        return;
      }
      if (s.signal.aborted) return;
      t(`[SessionsV2Client] Connect error: ${l(error)}`, {
        level: "error"
      }), p("remote_connect", "remote_connect_request_failed"), this.callbacks.onError?.(te(error)), this.handleStreamEnd();
      return;
    }
    if (!r.ok || !r.body) {
      t(`[SessionsV2Client] HTTP ${r.status} on SSE connect`, {
        level: "error"
      });
      let y;
      if (r.status === 403) y = await Pe(r);else await PU(r);
      if (clearTimeout(h), this.abortController !== s) return;
      if (r.status === 401 && this.onAuth401) {
        t("[SessionsV2Client] 401 on SSE connect \u2014 refreshing"), m("remote_connect", "remote_connect_auth_401");
        let R = await this.onAuth401(qe(headers_2) ?? this.getAccessToken());
        if (this.abortController !== s) return;
        if (!R && this.reconnectAttempts >= N && this.keepRedialling) {
          m("remote_connect", "remote_connect_reconnect_exhausted"), this.state = "closed", this.exhaustedBudget = !0, this.callbacks.onClose?.();
          return;
        }
        this.handleStreamEnd();
        return;
      }
      if (y === "untrusted_device") {
        let R = await this.recoverTrustedDeviceToken(headers_2["X-Trusted-Device-Token"]);
        if (this.abortController !== s) return;
        if (R) {
          t("[SessionsV2Client] untrusted_device on SSE connect \u2014 re-enrolled, reconnecting"), p("remote_connect", "remote_connect_untrusted_device"), this.handleStreamEnd();
          return;
        }
      }
      if (_t.has(r.status)) {
        m("remote_connect", "remote_connect_permanent_failure"), this.state = "closed", this.callbacks.onClose?.(y);
        return;
      }
      p("remote_connect", "remote_connect_http_error"), this.handleStreamEnd();
      return;
    }
    clearTimeout(h);
    let serviceMs = Date.parse(r.headers.get("date") ?? "");
    if (Number.isNaN(serviceMs)) this.serviceClock = void 0, t("[SessionsV2Client] The stream answered without a Date header: frames on it cannot be dated against the service clock", {
      level: "warn"
    });else this.connectedSince = serviceMs, this.serviceClock = {
      serviceMs: serviceMs,
      wallMs: Date.now(),
      monotonicMs: performance.now()
    };
    this.state = "connected", this.reconnectAttempts = 0, this.rediallingPastBudget = !1, this.resetLivenessTimer(), this.startDriftWatch(), t("[SessionsV2Client] Connected"), _("remote_connect"), this.callbacks.onConnected?.();
    let v = r.body.getReader(),
      S = new fSt();
    try {
      while (!0) {
        let {
          done: done,
          value: value_7
        } = await v.read();
        if (done) break;
        for (let k of S.push(value_7)) if (this.resetLivenessTimer(), k.event && k.data) this.handleFrame(k.event, k.id, k.data);
      }
    } catch (error) {
      if (s.signal.aborted) return;
      t(`[SessionsV2Client] Stream read error: ${l(error)}`, {
        level: "error"
      }), p("remote_connect", "remote_connect_stream_error");
    } finally {
      v.releaseLock();
    }
    if (!s.signal.aborted) t("[SessionsV2Client] Stream ended"), this.handleStreamEnd();
  }
  handleFrame(e, n, s) {
    let r;
    try {
      r = J(s);
    } catch (error) {
      d(st(Error(`[SessionsV2Client] Failed to parse ${e} frame: ${l(error)}`), "SessionsV2Client: failed to parse event frame")), p("remote_connect", "remote_connect_frame_parse_failed");
      return;
    }
    switch (e) {
      case "client_event":
        {
          let a = r,
            h = parseInt(n ?? String(a.sequence_num), 10);
          if (!isNaN(h) && h > this.lastSequenceNum) this.lastSequenceNum = h;
          if (!de(a.payload)) {
            t(`[SessionsV2Client] Dropping client_event with no payload.type (event_type=${a.event_type})`);
            return;
          }
          if (a.payload.type === "control_response") {
            let {
              response: response
            } = a.payload;
            if (!response || typeof response !== "object" || typeof response.request_id !== "string") {
              t(`[SessionsV2Client] Dropping malformed control_response from source=${a.source}`, {
                level: "warn"
              });
              return;
            }
          }
          if (a.payload.type === "user") {
            if (a.source !== "worker" && lPe(a.payload)) {
              t(`[SessionsV2Client] Dropping worker-output-shaped user frame from source=${a.source} \u2014 only the worker produces tool results and execution output`, {
                level: "warn"
              });
              return;
            }
            if (EXe(a.payload)) {
              t(`[SessionsV2Client] Dropping user frame with malformed content from source=${a.source}`, {
                level: "warn"
              });
              return;
            }
          }
          if (a.source !== "worker") {
            if (a.payload.type === "control_response") {
              if (this.issuedRequestIds.has(a.payload.response.request_id)) {
                t(`[SessionsV2Client] Dropping control_response for this client's request_id from source=${a.source} \u2014 only the worker may answer our RPCs`, {
                  level: "warn"
                });
                return;
              }
              if (a.payload.response.pending_user_dialog_requests || a.payload.response.pending_permission_requests) {
                t(`[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${a.source}`);
                let {
                  pending_user_dialog_requests: pending_user_dialog_requests,
                  pending_permission_requests: pending_permission_requests,
                  ...response_2
                } = a.payload.response;
                this.deliver({
                  ...a.payload,
                  response: response_2
                }, {
                  source: a.source,
                  ...Me(a, this.connectedSince, this.serviceClock)
                });
                return;
              }
            } else if (!ubn.has(a.payload.type)) {
              if (a.payload.type === "control_request" && typeof a.payload.request_id === "string" && this.issuedRequestIds.has(a.payload.request_id)) {
                let g = "uuid" in a.payload ? a.payload.uuid : void 0;
                if (typeof g !== "string" || g !== this.ownRequestUuids.get(a.payload.request_id)) {
                  t(`[SessionsV2Client] A copy of own request ${x(a.payload.request_id)} from source=${x(a.source)} under another event uuid \u2014 ignored`);
                  return;
                }
                let v = Rt(a.device_attestation_status);
                if (t(`[SessionsV2Client] Own request ${x(a.payload.request_id)} echoed from source=${x(a.source)}: device proof ${x(a.device_attestation_status)} (${v})`), v === "unverified") this.renewDeviceProof();
                this.callbacks.onOwnRequestEchoed?.(a.payload.request_id, v);
                return;
              }
              t(`[SessionsV2Client] Dropping ${a.payload.type} from source=${a.source}`);
              return;
            }
          } else if (a.payload.type === "control_response") this.issuedRequestIds.delete(a.payload.response.request_id), this.ownRequestUuids.delete(a.payload.response.request_id);
          this.deliver(a.payload, {
            source: a.source,
            ...Me(a, this.connectedSince, this.serviceClock),
            ...(a.source === "worker" && kt(a))
          });
          return;
        }
      case "ephemeral_event":
        {
          let a = r;
          if (a?.event_type === Et) {
            let g = typeof a.payload === "object" && a.payload !== null ? a.payload : {},
              {
                work_id: work_id,
                reason: reason
              } = g;
            try {
              this.callbacks.onToolHostEnded?.({
                workId: typeof work_id === "string" ? work_id : void 0,
                reason: typeof reason === "string" ? reason : void 0
              });
            } catch (error) {
              t(`[SessionsV2Client] tool_host_ended handler threw: ${l(error)}`, {
                level: "error"
              });
            }
            return;
          }
          let payload = a.payload;
          if (de(a.payload)) {
            let g = we(payload);
            if (g && de(g)) {
              this.deliver(g, {});
              return;
            }
            if (a.payload.type !== "stream_event") {
              t(`[SessionsV2Client] Dropping ${a.payload.type} on ephemeral channel`);
              return;
            }
            if (!re(a.payload.event)) {
              t("[SessionsV2Client] Dropping malformed stream_event on ephemeral channel", {
                level: "warn"
              });
              return;
            }
            this.deliver(a.payload, {});
          }
          return;
        }
      case "catch_up_truncated":
        t("[SessionsV2Client] catch_up_truncated \u2014 transcript gap"), p("remote_connect", "remote_catch_up_truncated"), this.callbacks.onCatchUpTruncated?.();
        return;
      case "session_update":
        {
          let a = r?.connection_status;
          if (typeof a === "string") try {
            this.callbacks.onWorkerConnectionStatus?.(a);
          } catch (error) {
            t(`[SessionsV2Client] worker connection status handler threw: ${l(error)}`, {
              level: "error"
            });
          } else t("[SessionsV2Client] Ignoring session_update frame");
          return;
        }
      case "security_update":
        {
          let a = r?.security_tier;
          if (t(`[SessionsV2Client] security_update: tier ${typeof a === "string" ? x(a) : typeof a}`), a === "elevated") try {
            this.callbacks.onSecurityTierRaised?.();
          } catch (error) {
            t(`[SessionsV2Client] security tier handler threw: ${l(error)}`, {
              level: "error"
            });
          }
          return;
        }
      case "delivery_update":
        t(`[SessionsV2Client] Ignoring ${e} frame`);
        return;
      default:
        t(`[SessionsV2Client] Unknown SSE event type '${e}'`, {
          level: "warn"
        });
        return;
    }
  }
  deliver(e, n) {
    if (!Jun(s => this.callbacks.onMessage(s, n), e, "SessionsV2Client")) p("remote_connect", "remote_connect_frame_handler_threw");
  }
  handleStreamEnd() {
    if (this.clearLivenessTimer(), this.clearDriftWatch(), this.state === "closed") return;
    this.abortController = null;
    let e = this.reconnectAttempts >= N;
    if (e && !this.keepRedialling) {
      t(`[SessionsV2Client] Reconnect budget exhausted (${N}), closing`), m("remote_connect", "remote_connect_reconnect_exhausted"), this.state = "closed", this.exhaustedBudget = !0, this.callbacks.onClose?.();
      return;
    }
    if (!e) this.reconnectAttempts++;else if (!this.rediallingPastBudget) this.rediallingPastBudget = !0, p("remote_connect", "remote_connect_redialling_past_budget");
    this.state = "idle";
    let n = e ? Ce : Math.min(gt * 2 ** (this.reconnectAttempts - 1), Ce);
    if (t(`[SessionsV2Client] Reconnecting in ${n}ms (attempt ${this.reconnectAttempts}/${this.keepRedialling ? "\u221E" : N}, from_sequence_num=${this.lastSequenceNum})`), !e) this.callbacks.onReconnecting?.();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, n);
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null, t("[SessionsV2Client] Liveness timeout, reconnecting", {
      level: "warn"
    }), this.abortController?.abort(), this.abortController = null, this.handleStreamEnd();
  };
  resetLivenessTimer() {
    this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, vt);
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null;
  }
  startDriftWatch() {
    this.clearDriftWatch(), this.lastDriftCheck = Date.now(), this.driftTimer = setInterval(() => {
      let e = Date.now(),
        n = e - this.lastDriftCheck;
      if (this.lastDriftCheck = e, n > Ee * 2 && this.state === "connected") t(`[SessionsV2Client] Wall-clock drift ${n}ms \u2014 reconnecting after suspend`), this.reconnect();
    }, Ee);
  }
  clearDriftWatch() {
    if (this.driftTimer) clearInterval(this.driftTimer), this.driftTimer = null;
  }
  sendEvent(e) {
    return this.trackSend(this.postEvent(e).then(n => n.outcome === "accepted" ? {
      sequence_num: n.sequence_num
    } : null));
  }
  trackSend(e) {
    if (this.sendsInFlight !== null) {
      let sendsInFlight = this.sendsInFlight;
      sendsInFlight.add(e);
      let s = () => {
        sendsInFlight.delete(e);
      };
      e.then(s, s);
    }
    return e;
  }
  async postEvent(e, n = {}) {
    if (this.state === "closed") return t("[SessionsV2Client] Cannot send: closed", {
      level: "warn"
    }), m("remote_send_event", "remote_send_event_closed"), {
      outcome: "failed",
      cause: "closed"
    };
    let s = `${an().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`;
    try {
      let r = performance.now(),
        a = await NHt(this.eventSigner, this.sessionId, e),
        h = performance.now(),
        g = {
          session_id: this.sessionId,
          events: [a]
        },
        v = await this.authHeaders(),
        S = await this.postEvents(s, g, v, n.timeoutMs);
      if (!S.ok && S.status === 401 && this.onAuth401) {
        if (t("[SessionsV2Client] 401 on POST \u2014 refreshing + retry"), await this.onAuth401(qe(v) ?? this.getAccessToken())) S = await this.postEvents(s, g, await this.authHeaders(), n.timeoutMs);
      }
      let y = !1;
      if (!S.ok && S.refusal === "untrusted_device" && (await this.recoverTrustedDeviceToken(S.sentDeviceToken))) t("[SessionsV2Client] untrusted_device on POST \u2014 re-enrolled, retrying"), S = await this.postEvents(s, g, await this.authHeaders(), n.timeoutMs), y = !0;
      if (!S.ok) {
        if (t(`[SessionsV2Client] POST /events returned ${S.status}${S.inactive ? " (session not active)" : ""}`, {
          level: "warn"
        }), S.inactive) return p("remote_send_event", "remote_send_event_session_inactive"), {
          outcome: "session_inactive"
        };
        return m("remote_send_event", "remote_send_event_http_error"), {
          outcome: "failed",
          cause: "http",
          status: S.status
        };
      }
      if (y) p("remote_send_event", "remote_send_event_untrusted_device");else _("remote_send_event");
      return {
        outcome: "accepted",
        sequence_num: S.sequence_num,
        signMs: Math.round(h - r),
        postMs: Math.round(performance.now() - h)
      };
    } catch (error) {
      return t(`[SessionsV2Client] POST /events failed: ${l(error)}`, {
        level: "warn"
      }), m("remote_send_event", "remote_send_event_request_failed"), {
        outcome: "failed",
        cause: Mt(error) ? "timeout" : "network"
      };
    }
  }
  sendControlResponse(e, uuid = B(), s = {}) {
    return t("[SessionsV2Client] Sending control_response"), this.trackSend(this.postEvent({
      ...e,
      uuid: uuid
    }, s));
  }
  sendControlRequest(e, n) {
    return this.postControlRequest(e, n)?.requestId ?? null;
  }
  postControlRequest(request, n) {
    if (this.state === "closed") return t("[SessionsV2Client] Cannot send control_request: closed", {
      level: "warn"
    }), null;
    let s = B();
    if (this.issuedRequestIds.add(s), this.issuedRequestIds.size > ke) {
      t("[SessionsV2Client] issuedRequestIds overflow \u2014 evicting oldest unanswered request_id", {
        level: "warn"
      });
      let h = this.issuedRequestIds.values().next().value;
      if (h !== void 0) this.issuedRequestIds.delete(h), this.ownRequestUuids.delete(h);
    }
    let r = {
      type: "control_request",
      request_id: s,
      request: request,
      uuid: B()
    };
    this.ownRequestUuids.set(s, r.uuid), t(`[SessionsV2Client] Sending control_request: ${request.subtype}`);
    let posted = this.trackSend(this.postEvent(r).then(h => {
      if (h.outcome === "session_inactive" || h.outcome === "failed" && h.cause === "http") n?.(s);
      return h;
    }));
    return {
      requestId: s,
      posted: posted
    };
  }
  sendControlCancelRequest(request_id) {
    if (this.state === "closed") return;
    t(`[SessionsV2Client] Sending control_cancel_request: ${request_id}`), this.sendEvent({
      type: "control_cancel_request",
      request_id: request_id,
      uuid: B()
    });
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (t("[SessionsV2Client] Closing"), this.state = "closed", this.exhaustedBudget = !1, this.clearLivenessTimer(), this.clearDriftWatch(), this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.abortController?.abort(), this.abortController = null;
  }
  reconnect() {
    if (t("[SessionsV2Client] Force reconnect"), this.reconnectAttempts = 0, this.exhaustedBudget = !1, this.clearLivenessTimer(), this.clearDriftWatch(), this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.abortController?.abort(), this.abortController = null, this.state = "idle", this.connect();
  }
  isRevivable() {
    return this.state === "closed" && this.exhaustedBudget;
  }
  reviveAfterExhaustion() {
    if (!(this.keepRedialling && this.state === "idle" && this.reconnectAttempts >= N && this.reconnectTimer !== null) && (this.state !== "closed" || !this.exhaustedBudget)) return !1;
    return p("remote_connect", "remote_connect_revived_by_user_send"), this.reconnect(), !0;
  }
  async authHeaders() {
    let e = await (this.trustedDeviceToken ??= this.loadTrustedDeviceToken());
    return {
      Authorization: `${le}${this.getAccessToken()}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": jg(),
      "x-organization-uuid": this.orgUuid,
      "User-Agent": $a(),
      ...(e && {
        "X-Trusted-Device-Token": e
      })
    };
  }
}
var le = "Bearer ";
function qe(e) {
  let Authorization = e.Authorization;
  return Authorization?.startsWith(le) ? Authorization.slice(le.length) : void 0;
}
async function Pe(e) {
  let n = await Ae(e);
  return WF(n, rp(n));
}
async function Tt(e) {
  return Ct().safeParse(await Ae(e)).success;
}
async function Ae(e) {
  let n = e.body?.getReader();
  if (!n) return;
  try {
    let uint8Array = new Uint8Array(ie),
      r = 0;
    for (;;) {
      let {
        done: done_2,
        value: value_8
      } = await n.read();
      if (done_2 || !value_8) break;
      let g = Math.min(value_8.length, ie - r);
      if (uint8Array.set(value_8.subarray(0, g), r), r += g, r >= ie) break;
    }
    return J(new TextDecoder().decode(uint8Array.subarray(0, r)));
  } catch {
    return;
  } finally {
    n.cancel().catch(() => {});
  }
}
function Mt(e) {
  return e instanceof Error && e.name === "TimeoutError";
}
var At = 1000,
  Ke = 200,
  Dt = 64,
  It = 128,
  Ot = {
    can_use_tool: f(() => u({
      request_id: o(),
      request: ut({
        subtype: A("can_use_tool"),
        tool_name: o(),
        input: fe(o(), ae()),
        tool_use_id: o()
      })
    })),
    request_user_dialog: f(() => u({
      request_id: o(),
      request: ut({
        subtype: A("request_user_dialog"),
        dialog_kind: o(),
        payload: fe(o(), ae())
      })
    }))
  };
function Ut(e, n) {
  let s = Ot[n]().safeParse(e);
  if (!s.success) return null;
  return {
    type: "control_request",
    request_id: s.data.request_id,
    request: s.data.request
  };
}
function De(e, n) {
  try {
    return Pt(e, n);
  } catch {
    return !1;
  }
}
function I(e, n) {
  if (e.add(n), e.size > At) {
    let s = e.values().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function Ie(e, n, s) {
  if (e.set(n, s), e.size > Ke) {
    let r = e.keys().next().value;
    if (r !== void 0) e.delete(r);
  }
}
var B3r = ["can_use_tool", "request_user_dialog"];
function lE(e) {
  return e.length > 80 ? `${e.slice(0, 80).replace(/[^\x20-\x7e]/g, "?")}\u2026(+${e.length - 80})` : e.replace(/[^\x20-\x7e]/g, "?");
}
var L = 256,
  $t = 3,
  Ft = 750,
  xt = 35000;
function X(e) {
  if (e.withheld) return "withheld";
  if (e.status === 429) return "http_429";
  if (e.status !== void 0) return "http_4xx";
  return e.cause ?? "unknown";
}
function Ht(e) {
  return e === "http_429" || e === "server" || e === "timeout" || e === "network";
}
var reason_3 = "cancelled",
  reason_2 = "withdrawn",
  Oe = {
    outcome: "failed",
    cause: "closed"
  },
  Kt = 1500,
  Ne = [1000, 5000, 15000, 45000],
  Ue = Ne.length,
  timeoutMs_2 = 120000;
function Tzt(e, n) {
  switch (e) {
    case "permission":
      return "A permission answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "dialog":
      return "A dialog answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "hook":
      return n === "overtaken" ? "A hook's decision from this machine did not reach the cloud session before it stopped waiting for it: if the hook's deadline passed the tool call it was judging may have run without it; if the turn was interrupted, nothing ran." : "A hook's decision from this machine could not be delivered to the cloud session, which waits for it until the hook's deadline and then proceeds without it. Interrupt the session if that tool call must not run.";
    case "tool":
      return n === "overtaken" ? "The result of work this machine did for the cloud session (a command it ran, or files it synced) did not reach the session before it stopped waiting for it." : "The result of work this machine did for the cloud session (a command it ran, or files it synced) could not be delivered; the session waits for it until its deadline and then carries on without it.";
  }
}
class dPe {
  config;
  callbacks;
  client = null;
  pendingPermissionRequests = new Map();
  undeliveredResponses = new Map();
  undeliveredHookIds = new Set();
  hookGiveUpsTold = new Set();
  pendingDialogRequests = new Set();
  pendingForwardedHooks = new Set();
  settledForwardedHookIds = new Set();
  workerSeenThisConnection = !1;
  securityTierRaiseSeen = !1;
  pendingServedRequests = new Map();
  settledServedRequestIds = new Set();
  errorShapedControlResponseIds = new Set();
  seenControlResponseIds = new Set();
  retiredPermissionRequestIds = new Set();
  reinstatablePermissionRequests = new Map();
  reinstatableDialogIds = new Set();
  pendingControlRequests = new Map();
  pendingModelSwitchIds = new Set();
  sendGates = new Set();
  heldSends = new Set();
  withholdableHeldTold = !1;
  chainedSends = 0;
  lifetime = new AbortController();
  serving = !1;
  firstSendReleased = !1;
  exitFlushRequested = !1;
  withheldPromptInFlight = null;
  sentAMessage = !1;
  lastHeld = {
    issued: Promise.resolve(),
    posted: Promise.resolve()
  };
  pendingInterrupt = null;
  constructor(e, n) {
    this.config = e;
    this.callbacks = n;
    if (e.homeSeed !== void 0 && e.homeSeedHoldsFirstSend !== !1) this.gateSendsOnSettings(e.homeSeed);
    if (e.withheldInitialPrompt !== void 0) {
      let withheldInitialPrompt = e.withheldInitialPrompt;
      queueMicrotask(() => void this.sendWithheldInitialPrompt(withheldInitialPrompt));
    } else if (e.initialPromptUuid !== void 0) e.dirSync?.sync.messageSent(e.initialPromptUuid);
  }
  connect() {
    t(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let e = {
      onMessage: (n, s) => this.handleMessage(n, s),
      onConnected: () => {
        t("[RemoteSessionManager] Connected"), this.config.dirSync?.sync.afterConnect();
        for (let n of this.undeliveredResponses.values()) if (n.failures = 0, n.giveUpOnSettle === "undelivered") n.giveUpOnSettle = null;
        if (this.resendUndeliveredResponses(), this.workerSeenThisConnection = !1, this.securityTierRaiseSeen) try {
          this.config.rebindEventSigner?.();
        } catch (error) {
          t(`[RemoteSessionManager] rebindEventSigner threw: ${l(error)}`, {
            level: "error"
          });
        }
        this.callbacks.onConnected?.();
      },
      onClose: n => {
        if (t("[RemoteSessionManager] Disconnected"), this.client?.isRevivable()) this.giveUpUndeliveredResponses();else this.dropUndeliveredResponses();
        this.callbacks.onDisconnected?.(n);
      },
      onReconnecting: () => {
        this.workerSeenThisConnection = !1, t("[RemoteSessionManager] Reconnecting"), this.callbacks.onReconnecting?.();
      },
      onOwnRequestEchoed: (n, s) => {
        let r = this.pendingControlRequests.get(n);
        if (r?.onEchoed) this.pendingControlRequests.set(n, {
          ...r,
          onEchoed: void 0
        }), r.onEchoed(s);
      },
      onWorkerConnectionStatus: n => {
        if (t(`[RemoteSessionManager] The service reports the worker ${n === "connected" || n === "disconnected" ? n : "in an unknown state"}`), n === "connected") this.noteWorkerLive();else if (n === "disconnected") this.workerSeenThisConnection = !1, this.callbacks.onWorkerGone?.();
      },
      onSecurityTierRaised: () => {
        this.securityTierRaiseSeen = !0;
      },
      onToolHostEnded: n => {
        t("[RemoteSessionManager] The service ended this session's connection to a computer serving its tools"), this.callbacks.onToolHostEnded?.(n);
      },
      onCatchUpTruncated: () => {
        t("[RemoteSessionManager] Catch-up truncated"), this.callbacks.onCatchUpTruncated?.();
      },
      onError: n => {
        t(`[RemoteSessionManager] Stream error: ${n.message}`, {
          level: "error"
        }), this.callbacks.onError?.(n);
      }
    };
    this.client = new ue(this.config.sessionId, this.config.orgUuid, this.config.getAccessToken, e, this.config.onAuth401, this.config.initialSequenceNum, {
      trackSends: this.config.trackSendsInFlight === !0,
      controlOnly: this.config.controlOnly === !0,
      keepRedialling: () => this.config.keepStreamRedialling === !0 || this.serving,
      ...this.signedOpts({})
    }), this.client.connect();
  }
  handleMessage(e, n = {}) {
    if (P("in", e, n), n.source === "worker" && n.replayed !== !0) this.noteWorkerLive();
    if (e.type === "control_request") {
      this.handleControlRequest(e, n);
      return;
    }
    if (e.type === "control_cancel_request") {
      let {
        request_id: request_id_2
      } = e;
      this.reinstatablePermissionRequests.delete(request_id_2), this.reinstatableDialogIds.delete(request_id_2);
      let a = this.undeliveredResponses.get(request_id_2);
      if (a?.kind === "hook" || a?.kind === "tool") this.giveUp(a, "overtaken");else if (a) this.dropKept(a);else if (this.config.keepUndeliveredResponses === !0 && this.settledForwardedHookIds.has(request_id_2) && !this.hookGiveUpsTold.has(request_id_2)) I(this.hookGiveUpsTold, request_id_2), m("remote_control_response", "overtaken"), this.callbacks.onResponseUndelivered?.(request_id_2, "hook", "overtaken");
      if (this.pendingForwardedHooks.delete(request_id_2)) {
        t(`[RemoteSessionManager] Forwarded hook request cancelled by the worker: ${lE(request_id_2)}`), this.callbacks.onForwardedHookCancelled?.(request_id_2, "worker");
        return;
      }
      if (this.retireServedRequest(request_id_2, "worker")) return;
      if (this.pendingDialogRequests.delete(request_id_2)) {
        t(`[RemoteSessionManager] User dialog request cancelled: ${request_id_2}`), this.callbacks.onUserDialogCancelled?.(request_id_2);
        return;
      }
      let h = this.pendingPermissionRequests.get(request_id_2);
      if (!h) {
        t(`[RemoteSessionManager] control_cancel_request for unknown request ${request_id_2} \u2014 nothing pending, ignoring`);
        return;
      }
      t(`[RemoteSessionManager] Permission request cancelled: ${request_id_2}`), this.retirePermissionRequest(request_id_2), this.callbacks.onPermissionCancelled?.(request_id_2, h.tool_use_id);
      return;
    }
    if (e.type === "system" && e.subtype === "control_request_progress") {
      let r = this.pendingControlRequests.get(e.request_id);
      if (!r) {
        t(`[RemoteSessionManager] control_request_progress for unknown request ${e.request_id} \u2014 ignoring`);
        return;
      }
      clearTimeout(r.timer);
      let timer = setTimeout(this.onControlRequestTimeout, r.timeoutMs, e.request_id, r.subtype, r.timeoutMs);
      this.pendingControlRequests.set(e.request_id, {
        ...r,
        timer: timer
      }), r.onProgress?.(e);
      return;
    }
    if (e.type === "control_response") {
      let {
          request_id: request_id_3
        } = e.response,
        a = this.config.ignoreErrorShapedDialogReplies === !0 && e.response.subtype === "error";
      if (a) I(this.errorShapedControlResponseIds, request_id_3);else this.recordSeenControlResponseId(request_id_3);
      let h = this.undeliveredResponses.get(request_id_3);
      if (h !== void 0 && "uuid" in e && e.uuid === h.uuid && h.giveUpOnSettle !== "overtaken") if (this.dropKept(h), h.failures > 0) p("remote_control_response", "recovered");else _("remote_control_response");
      this.pendingModelSwitchIds.delete(request_id_3);
      let g = this.pendingControlRequests.get(request_id_3);
      if (g) {
        if (this.pendingControlRequests.delete(request_id_3), clearTimeout(g.timer), g.removeAbortListener?.(), e.response.subtype === "success") g.resolve(e.response.response);else g.reject(zyo(e.response));
      } else {
        let v = this.pendingPermissionRequests.get(request_id_3);
        if (v) {
          let S = e.response.subtype === "success" ? e.response.response?.toolName : void 0;
          if (typeof S === "string" && S !== v.tool_name) {
            t(`[RemoteSessionManager] Permission response ${request_id_3} has mismatched toolName \u2014 worker will drop it, keeping prompt`), this.seenControlResponseIds.delete(request_id_3);
            return;
          }
          this.retirePermissionRequest(request_id_3), t(`[RemoteSessionManager] Permission request ${request_id_3} answered elsewhere \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(request_id_3, v.tool_use_id);
        } else if (this.pendingDialogRequests.has(request_id_3)) {
          if (a) t(`[RemoteSessionManager] User dialog request ${request_id_3} got an error-shaped reply elsewhere \u2014 worker still waiting, keeping it`);else this.pendingDialogRequests.delete(request_id_3), t(`[RemoteSessionManager] User dialog request ${request_id_3} answered elsewhere \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(request_id_3);
        } else if (this.pendingForwardedHooks.has(request_id_3)) t(`[RemoteSessionManager] Ignoring a peer control_response (${e.response.subtype}) for forwarded hook request ${lE(request_id_3)} \u2014 still answering it here`);else if (!this.settledServedRequestIds.has(request_id_3)) t(`[RemoteSessionManager] Unmatched control_response ${request_id_3} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`);
      }
      if (this.config.rearmRedeliveredPermissionRequests === !0) this.rearmRedelivered(e.response.pending_permission_requests, "can_use_tool", this.pendingPermissionRequests);
      this.rearmRedelivered(e.response.pending_user_dialog_requests, "request_user_dialog", this.pendingDialogRequests);
      return;
    }
    if (this.config.keepOwnModelSwitchBreadcrumb !== !0 && this.pendingModelSwitchIds.size > 0 && e.type === "user" && "isReplay" in e && e.isReplay === !0 && typeof e.message?.content === "string" && e.message.content.startsWith(hDe)) {
      let [r] = this.pendingModelSwitchIds;
      this.pendingModelSwitchIds.delete(r), t("[RemoteSessionManager] Dropped own set_model breadcrumb echo");
      return;
    }
    let s = Lt(e);
    if (s !== null && n.source === "worker") this.config.dirSync?.sync.laneChanged(s);
    if (e.type === "result") {
      let userMessageUuids = n.source === "client" ? void 0 : Vt(e);
      if (this.config.dirSync?.sync.afterResult({
        replayed: n.replayed === !0,
        ...(userMessageUuids !== void 0 && {
          userMessageUuids: userMessageUuids
        })
      }), this.sentAMessage || this.config.homeSeedHoldsFirstSend !== !1 || this.config.initialPromptUuid !== void 0) this.config.homeSeed?.afterFirstReply(this.lifetime.signal);
      for (let [a, h] of this.pendingPermissionRequests) t(`[RemoteSessionManager] Turn ended with permission request ${a} unresolved \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(a, h.tool_use_id), this.retiredPermissionRequestIds.add(a), Ie(this.reinstatablePermissionRequests, a, h);
      this.pendingPermissionRequests.clear();
      for (let a of this.pendingDialogRequests) t(`[RemoteSessionManager] Turn ended with user dialog request ${a} unresolved \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(a), I(this.reinstatableDialogIds, a);
      this.pendingDialogRequests.clear();
    }
    this.callbacks.onMessage(e, n);
  }
  retirePermissionRequest(e) {
    this.pendingPermissionRequests.delete(e), this.retiredPermissionRequestIds.add(e);
  }
  rearmRedelivered(e, n, s) {
    if (!Array.isArray(e)) return;
    e.slice(0, Ke).forEach(item => {
      let a = Ut(item, n);
      if (a === null) return;
      if (this.seenControlResponseIds.has(a.request_id) || n === "can_use_tool" && this.errorShapedControlResponseIds.has(a.request_id)) {
        t(`[RemoteSessionManager] Redelivered ${n} ${lE(a.request_id)} already answered \u2014 skipping`);
        return;
      }
      let reinstated = !1;
      if (n === "can_use_tool" && this.retiredPermissionRequestIds.has(a.request_id)) {
        let v = this.reinstatablePermissionRequests.get(a.request_id);
        if (v === void 0) {
          t(`[RemoteSessionManager] Redelivered can_use_tool ${lE(a.request_id)} already retired here \u2014 skipping`);
          return;
        }
        if (this.reinstatablePermissionRequests.delete(a.request_id), !De(v, a.request)) {
          m("remote_permission_request", "redelivered_mismatch"), t(`[RemoteSessionManager] Redelivered can_use_tool ${lE(a.request_id)} differs from the request first shown under that id \u2014 not arming it`, {
            level: "warn"
          });
          return;
        }
        this.retiredPermissionRequestIds.delete(a.request_id), reinstated = !0;
      } else if (n === "request_user_dialog") reinstated = this.reinstatableDialogIds.has(a.request_id);
      let g = s.has(a.request_id);
      if (this.handleControlRequest(a, {}, {
        reinstated: reinstated
      }), !g && s.has(a.request_id)) this.reinstatableDialogIds.delete(a.request_id), _(n === "can_use_tool" ? "remote_permission_redelivery" : "remote_dialog_redelivery");
    });
  }
  recordSeenControlResponseId(e) {
    I(this.seenControlResponseIds, e);
  }
  recordSettledForwardedHookId(e) {
    I(this.settledForwardedHookIds, e);
  }
  handleControlRequest(e, {
    ageMs: ageMs,
    attestationStatus: attestationStatus,
    modeStamp: modeStamp_2
  }, a) {
    let {
      request_id: h,
      request: request_2
    } = e;
    if (request_2.subtype === "can_use_tool") {
      t(`[RemoteSessionManager] Permission request for tool: ${request_2.tool_name}`);
      let v = this.pendingPermissionRequests.get(h);
      if (v !== void 0) {
        if (De(v, request_2)) t(`[RemoteSessionManager] Duplicate permission request ${lE(String(h))} \u2014 already pending, skipping`);else m("remote_permission_request", "redelivered_mismatch"), t(`[RemoteSessionManager] Permission request ${lE(String(h))} redelivered with a different body (${lE(String(request_2.tool_name))}) \u2014 keeping the one first shown (${lE(v.tool_name)})`, {
          level: "warn"
        });
        return;
      }
      if (this.retiredPermissionRequestIds.has(h)) {
        m("remote_permission_request", "retired_id_rearmed"), t(`[RemoteSessionManager] Permission request ${lE(String(h))} arrived again after it was retired here \u2014 not arming it`, {
          level: "warn"
        });
        return;
      }
      let S = request_2;
      try {
        S = structuredClone(request_2);
      } catch {
        S = request_2;
      }
      this.pendingPermissionRequests.set(h, S), this.callbacks.onPermissionRequest(request_2, h, a);
      return;
    }
    if (request_2.subtype === "request_user_dialog") {
      if (this.pendingDialogRequests.has(h)) {
        t(`[RemoteSessionManager] Duplicate user dialog request ${h} \u2014 already pending, skipping`);
        return;
      }
      t(`[RemoteSessionManager] User dialog request: ${request_2.dialog_kind}`), this.pendingDialogRequests.add(h), this.callbacks.onUserDialogRequest(request_2, h, a);
      return;
    }
    if (request_2.subtype === "hook_callback" && jt(request_2)) {
      let onForwardedHookCallback = this.callbacks.onForwardedHookCallback;
      if (!onForwardedHookCallback) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${lE(h)} \u2014 not serving device hooks here, leaving it unanswered`);
        return;
      }
      if (h.length > L || request_2.callback_id.length > L) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${lE(h)} \u2014 an id longer than ${L} characters, leaving it unanswered`);
        return;
      }
      let S = {
          requestId: h,
          callbackId: request_2.callback_id,
          input: request_2.input,
          ...(typeof request_2.issued_at === "number" && {
            issuedAt: request_2.issued_at
          }),
          ...(typeof request_2.deadline_ms === "number" && {
            deadlineMs: request_2.deadline_ms
          }),
          ageMs: ageMs,
          ...(attestationStatus !== void 0 && {
            attestationStatus: attestationStatus
          })
        },
        onUndeliveredHookReplayed = this.callbacks.onUndeliveredHookReplayed;
      if (onUndeliveredHookReplayed && this.undeliveredHookIds.delete(h)) {
        this.hookGiveUpsTold.delete(h), this.pendingForwardedHooks.add(h), onUndeliveredHookReplayed(S);
        return;
      }
      if (this.settledForwardedHookIds.has(h) || this.pendingForwardedHooks.has(h)) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${lE(h)} already answered or in hand \u2014 skipping`);
        return;
      }
      this.pendingForwardedHooks.add(h), onForwardedHookCallback(S);
      return;
    }
    if (Wt(request_2)) {
      let onServedChannelRequest = this.callbacks.onServedChannelRequest;
      if (!onServedChannelRequest) {
        t(`[RemoteSessionManager] ${request_2.subtype} ${lE(h)} \u2014 not serving tools here, leaving it unanswered`);
        return;
      }
      if (h.length > L) {
        t(`[RemoteSessionManager] ${request_2.subtype} ${lE(h)} \u2014 an id longer than ${L} characters, leaving it unanswered`);
        return;
      }
      if (this.settledServedRequestIds.has(h) || this.pendingServedRequests.has(h)) {
        t(`[RemoteSessionManager] ${request_2.subtype} ${lE(h)} already answered or in hand \u2014 skipping`);
        return;
      }
      let S = new AbortController();
      this.pendingServedRequests.set(h, {
        abort: S,
        subtype: request_2.subtype
      }), onServedChannelRequest({
        requestId: h,
        subtype: request_2.subtype,
        request: request_2,
        signal: S.signal,
        ageMs: ageMs,
        ...(attestationStatus !== void 0 && {
          attestationStatus: attestationStatus
        }),
        ...(modeStamp_2 !== void 0 && {
          modeStamp: modeStamp_2
        })
      });
      return;
    }
    if (this.config.controlOnly === !0) {
      t(`[RemoteSessionManager] ${request_2.subtype} ${lE(h)} \u2014 not a request this serve-only client answers, leaving it unanswered`);
      return;
    }
    t(`[RemoteSessionManager] Unsupported control request subtype: ${request_2.subtype}`), this.sendResponse({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: h,
        error: `Unsupported control request subtype: ${request_2.subtype}`
      }
    }, null);
  }
  signedOpts(e) {
    return {
      ...(e ?? {}),
      ...(this.config.eventSigner && {
        eventSigner: this.config.eventSigner
      })
    };
  }
  async sendMessage(e, n, s) {
    return this.send(e, n, (r, a) => KFe(this.config.sessionId, r, this.signedOpts(a)), !1, s);
  }
  async sendMessageVia(e, n, s) {
    return this.send(e, n, s, !0);
  }
  async send(content_4, opts, s, r, a) {
    t(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`), this.reviveStreamForUserSend(), P("out", {
      kind: "sendMessage",
      content: content_4,
      opts: opts
    });
    let h = this.currentSendGates(),
      g = !r && h.length === 0 && this.chainedSends === 0,
      v;
    try {
      v = await (g ? s(content_4, opts) : this.sendBehindGates(h, content_4, opts, s, a));
    } catch (error) {
      throw t(`[RemoteSessionManager] Send to session ${this.config.sessionId} threw: ${l(error)}`, {
        level: "error"
      }), m("remote_send_message", "remote_send_message_threw"), error;
    }
    if (!v.ok && v.withheld) t(`[RemoteSessionManager] Message withheld by a send gate: ${v.reason}`), p("remote_send_message", v.reason === reason_3 ? "remote_send_message_cancelled" : v.reason === reason_2 ? "remote_send_message_withdrawn" : "remote_send_message_withheld");else if (!v.ok) t(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${v.reason}`, {
      level: "error"
    }), m("remote_send_message", "remote_send_message_failed");else if (_("remote_send_message"), this.sentAMessage = !0, opts?.uuid !== void 0) this.config.dirSync?.sync.messageSent(opts.uuid);
    return v;
  }
  addSendGate(gate, n = {}) {
    let s = {
      gate: gate,
      onRelease: n.onRelease ?? "send",
      onExit: n.onExit ?? "as_release"
    };
    return this.sendGates.add(s), () => {
      this.sendGates.delete(s);
    };
  }
  gateSendsOnSettings(e) {
    let n = () => {},
      s = Xko(e, {
        retire: () => n(),
        noticeAfterMs: this.config.homeSeedWaitNoticeMs,
        typedAheadGraceMs: this.config.homeSeedTypedAheadGraceMs
      });
    if (s === null) return;
    n = this.addSendGate(r => (r.released.then(() => {
      if (!r.exiting()) this.firstSendReleased = !0;
    }), s(r)), {
      onRelease: "withhold",
      onExit: "await"
    });
  }
  async sendWithheldInitialPrompt(e) {
    if (e.sent) return;
    e.sent = !0;
    let n = Date.now(),
      s = this.config.withheldPromptBackoffMs ?? Ft,
      attempts = 0,
      a,
      h = async (k, O) => {
        attempts += 1, a ??= Date.now();
        let F = await KFe(this.config.sessionId, k, this.signedOpts(O));
        if (F.ok || attempts >= $t || !Ht(X(F)) || this.firstSendReleased || Date.now() - a > (this.config.withheldPromptRetryWindowMs ?? xt)) return F;
        if (await Q(s * attempts, this.lifetime.signal), this.exitFlushRequested && !this.firstSendReleased) return attempts += 1, KFe(this.config.sessionId, k, this.signedOpts(O));
        return this.lifetime.signal.aborted || this.firstSendReleased ? F : h(k, O);
      },
      g = this.send(e.content, {
        uuid: e.uuid
      }, h, !0, 0).catch(k => ({
        ok: !1,
        reason: l(k)
      }));
    this.withheldPromptInFlight = g.then(() => {
      return;
    }, () => {
      return;
    });
    let v = await g;
    this.withheldPromptInFlight = null;
    let S = this.lifetime.signal.aborted && !v.ok;
    if (i("tengu_home_seed_prompt_resequenced", {
      success: v.ok,
      withheld_for: c(e.followsPermissionMode ? "signed_send" : this.config.homeSeed !== void 0 ? this.config.dirSync !== void 0 ? "both" : "home_seed" : "file_sync"),
      attempts: attempts,
      reason: c(v.ok ? "ok" : S ? "aborted" : X(v)),
      duration_ms: Date.now() - n
    }), v.ok) e.sent = !0, this.callbacks.onWithheldPromptSent?.();
    if (S || v.ok) return;
    let y = X(v),
      R = y === "timeout" || y === "network" || y === "unknown";
    if (this.callbacks.onWithheldPromptFailed) this.callbacks.onWithheldPromptFailed(v.reason, R);else this.config.homeSeed?.status.publish(R ? `Your first message may not have reached the cloud session (${v.reason}) \u2014 if Claude does not respond to it shortly, please send it again` : `Your first message could not be delivered to the cloud session (${v.reason}) \u2014 please send it again`, "warning");
  }
  currentSendGates() {
    let dirSync = this.config.dirSync;
    return [...(dirSync === void 0 ? [] : [{
      gate: ({
        messageUuid: messageUuid
      }) => dirSync.sync.beforeSend(messageUuid),
      onRelease: "send",
      onExit: "as_release"
    }]), ...this.sendGates];
  }
  async sendBehindGates(e, n, s, r, submittedAtMs) {
    this.chainedSends++;
    let h = !1,
      g = !1,
      v = !1,
      S = () => {},
      y = new Promise(w => {
        S = w;
      }),
      release = (w, D) => {
        h = w, g = D, v = !0, S(), this.tellWithholdableHeld();
      },
      k = () => {},
      O = new Promise(w => {
        k = w;
      }),
      F = () => {},
      Ge = new Promise(w => {
        F = w;
      }),
      ze = {
        messageUuid: s?.uuid,
        ...(submittedAtMs !== void 0 && {
          submittedAtMs: submittedAtMs
        }),
        released: y,
        withdrawn: O,
        exiting: () => h,
        final: () => g,
        decided: Ge
      },
      V = () => {},
      ce = new Promise(w => {
        V = w;
      }),
      lastHeld = this.lastHeld,
      Z = () => {},
      he = !1,
      me = !1,
      ee = e.map(() => {
        return;
      }),
      ne = new Set(e),
      se = e.map((item, index) => zt(item.gate, ze).then(H => (ee[index] = H, ne.delete(item), this.tellWithholdableHeld(), H))),
      promise = new Promise(w => {
        for (let D of se) D.then(H => {
          if (H !== void 0) w(H);
        });
      }),
      oe = Promise.race([Promise.all(se).then(Y), promise, y.then(() => Y(ee) ?? He(ne, h) ?? Promise.all(se.filter((item, index) => h && e[index]?.onExit === "await")).then(Y)), O.then(() => xe(!0))]),
      ge = () => {
        v = !0, F(), this.tellWithholdableHeld();
      };
    oe.then(ge, ge);
    let posted_2 = oe.then(w => Promise.race([lastHeld.posted, y.then(() => lastHeld.issued)]).then(() => w)).then(w => {
        let D = w ?? xe(he);
        if (Z(), me = !0, V(), D !== void 0) return Fe(D);
        return this.reviveStreamForUserSend(), r(n, s);
      }),
      W = {
        messageUuid: s?.uuid,
        release: release,
        issuedYet: () => me,
        settledYet: () => v,
        withheldOnRelease: () => Y(ee) !== void 0 || He(ne, !1) !== void 0,
        withdraw: () => {
          he = !0, Z(), k();
        },
        issued: ce,
        posted: posted_2
      };
    return this.lastHeld = {
      issued: ce,
      posted: posted_2.then(() => {
        return;
      }, () => {
        return;
      })
    }, this.heldSends.add(W), Z = () => {
      this.heldSends.delete(W), this.tellWithholdableHeld();
    }, Q(0, this.lifetime.signal).then(() => this.tellWithholdableHeld()), posted_2.then(() => this.leaveChain(W, V), () => this.leaveChain(W, V)), oe.then(w => w === void 0 ? posted_2 : Fe(w));
  }
  withdrawHeldSend(e) {
    let n = [...this.heldSends].filter(item => item.messageUuid === e && !item.issuedYet());
    return n.forEach(item => item.withdraw()), n.length > 0;
  }
  heldSendUuids() {
    return [...this.heldSends].flatMap(item => item.messageUuid !== void 0 && !item.issuedYet() ? [item.messageUuid] : []);
  }
  leaveChain(e, n) {
    this.chainedSends--, this.heldSends.delete(e), this.tellWithholdableHeld(), n();
  }
  hasWithholdableHeldSend() {
    return this.withholdableHeldSends().length > 0;
  }
  cancelHeldSends() {
    let e = this.withholdableHeldSends();
    return e.forEach(item => item.release(!1, !1)), e.length;
  }
  withholdableHeldSends() {
    return [...this.heldSends].filter(item => !item.issuedYet() && !item.settledYet() && item.withheldOnRelease());
  }
  tellWithholdableHeld() {
    let e = this.hasWithholdableHeldSend();
    if (e === this.withholdableHeldTold) return;
    this.withholdableHeldTold = e;
    try {
      this.callbacks.onWithholdableHeldChanged?.(e);
    } catch (error) {
      d(Error(`[RemoteSessionManager] onWithholdableHeldChanged listener failed: ${l(error)}`));
    }
  }
  async releaseHeldSends(e = Kt, {
    exiting = !1,
    final = !1,
    keepWithheld = !1
  } = {}) {
    if (exiting) this.exitFlushRequested = !0;
    let a = [...this.heldSends].filter(item => !(keepWithheld && item.withheldOnRelease()));
    a.forEach(item => item.release(exiting, final));
    let h = a.map(() => ({
      kind: "waiting"
    }));
    return await nt(Promise.allSettled([...a.map((item, index) => item.posted.then(S => {
      h[index] = Yt(S);
    }, () => {
      h[index] = {
        kind: "unconfirmed"
      };
    })), ...(this.withheldPromptInFlight ? [this.withheldPromptInFlight] : [])]), e), a.forEach((item, index) => {
      if (h[index]?.kind !== "waiting") return;
      if (item.issuedYet()) h[index] = {
        kind: "unconfirmed"
      };else if (final) item.withdraw(), h[index] = {
        kind: "unsent"
      };
    }), {
      unsent: U(h, g => g.kind === "unsent"),
      refused: h.flatMap(item => item.kind === "refused" ? [item.reason] : []),
      unconfirmed: U(h, g => g.kind === "unconfirmed"),
      stillHeld: U(h, g => g.kind === "waiting")
    };
  }
  async sendBashCommand(e, n) {
    t(`[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`), this.reviveStreamForUserSend();
    let s = await HHr(this.config.sessionId, e, this.signedOpts(n));
    if (!s.ok) t(`[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${s.reason}`, {
      level: "error"
    }), m("remote_send_bash", "remote_send_bash_failed");else _("remote_send_bash");
    return s;
  }
  reviveStreamForUserSend() {
    if (this.client?.reviveAfterExhaustion()) this.callbacks.onReconnecting?.();
  }
  sendResponse(response_3, kind, s, r) {
    let client = this.client;
    if (!client) return;
    let h = performance.now(),
      g = r === void 0 ? void 0 : R => {
        try {
          r(R, Math.round(performance.now() - h));
        } catch (error) {
          t(`[RemoteSessionManager] An answer's post listener threw; the answer's fate is unchanged: ${l(error)}`, {
            level: "warn"
          });
        }
        return R;
      };
    if (kind === null || this.config.keepUndeliveredResponses !== !0) {
      let R = client.sendControlResponse(response_3, void 0, $e(kind));
      g === void 0 || R.then(g);
      return;
    }
    let request_id_4 = response_3.response.request_id,
      y = this.undeliveredResponses.get(request_id_4) ?? {
        response: response_3,
        kind: kind,
        uuid: qt(),
        failures: 0,
        inFlight: !1,
        giveUpOnSettle: null,
        timer: null,
        told: !1
      };
    if (y.response = response_3, s !== void 0) y.request = s;
    this.undeliveredResponses.set(request_id_4, y), this.postKeptResponse(client, y, g);
  }
  postKeptResponse(e, n, s) {
    n.inFlight = !0;
    let r = e.sendControlResponse(n.response, n.uuid, $e(n.kind));
    (s === void 0 ? r : r.then(s)).then(a => this.settleResponsePost(n, a), a => {
      t(`[RemoteSessionManager] Posting an answer threw: ${l(a)}`, {
        level: "warn"
      }), this.settleResponsePost(n, {
        outcome: "failed",
        cause: "network"
      });
    });
  }
  settleResponsePost(e, n) {
    e.inFlight = !1;
    let request_id_5 = e.response.response.request_id;
    if (this.undeliveredResponses.get(request_id_5) !== e) return;
    if (n.outcome === "accepted") {
      if (e.giveUpOnSettle === "overtaken") {
        this.giveUp(e, "overtaken");
        return;
      }
      if (this.dropKept(e), e.failures > 0 || e.giveUpOnSettle !== null) p("remote_control_response", "recovered");else _("remote_control_response");
      return;
    }
    if (e.giveUpOnSettle !== null) {
      this.giveUp(e, e.giveUpOnSettle);
      return;
    }
    if (n.outcome === "session_inactive" || n.outcome === "failed" && n.cause === "http" && n.status === 404) {
      this.dropKept(e), t(`[RemoteSessionManager] Answer for ${lE(request_id_5)} has no session to go to (${n.outcome === "failed" && n.cause === "http" ? `http ${n.status}` : "session not active"}); dropped`), p("remote_control_response", "session_gone");
      return;
    }
    if (n.outcome === "failed" && n.cause === "closed") {
      if (!this.client?.isRevivable()) this.giveUp(e);
      return;
    }
    if (n.outcome === "failed" && n.cause === "http" && n.status < 500 && n.status !== 408 && n.status !== 429) {
      t(`[RemoteSessionManager] Answer for ${lE(request_id_5)} was refused by the service (http ${n.status}); not re-sending`, {
        level: "warn"
      }), this.giveUp(e, "undelivered", "refused");
      return;
    }
    if (!this.client?.isConnected()) {
      t(`[RemoteSessionManager] Answer for ${lE(request_id_5)} did not reach the session while the stream is down; it goes again at reconnect`);
      return;
    }
    if (e.failures += 1, e.failures > Ue) {
      t(`[RemoteSessionManager] Answer for ${lE(request_id_5)} could not be delivered after ${e.failures} attempts; giving up`, {
        level: "warn"
      }), this.giveUp(e);
      return;
    }
    if (e.failures === 1) p("remote_control_response", "resend");
    this.scheduleResponseResend(e);
  }
  dropKept(e) {
    this.clearResendTimer(e), this.undeliveredResponses.delete(e.response.response.request_id);
  }
  giveUp(e, n = "undelivered", s = n) {
    let request_id_6 = e.response.response.request_id;
    if (e.inFlight) {
      if (e.giveUpOnSettle !== "overtaken") e.giveUpOnSettle = n;
      return;
    }
    if (this.dropKept(e), e.kind === "hook") I(this.hookGiveUpsTold, request_id_6);
    if (n === "undelivered" && (e.kind === "dialog" || e.kind === "permission")) if (this.seenControlResponseIds.delete(request_id_6), e.kind === "permission") {
      if (e.request !== void 0) Ie(this.reinstatablePermissionRequests, request_id_6, e.request);
    } else I(this.reinstatableDialogIds, request_id_6);
    if (n === "undelivered" && e.kind === "hook" && s !== "refused") I(this.undeliveredHookIds, request_id_6);
    if (m("remote_control_response", s), e.told) return;
    e.told = !0, this.callbacks.onResponseUndelivered?.(request_id_6, e.kind, n);
  }
  scheduleResponseResend(e) {
    this.clearResendTimer(e);
    let n = Ne[Math.min(e.failures, Ue) - 1] ?? 45000;
    e.timer = setTimeout(this.resendOnTimer, n, e.response.response.request_id);
  }
  resendOnTimer = e => {
    let n = this.undeliveredResponses.get(e),
      client_2 = this.client;
    if (!n || !client_2) return;
    if (n.timer = null, !n.inFlight) P("out", n.response), this.postKeptResponse(client_2, n);
  };
  clearResendTimer(e) {
    if (e.timer !== null) clearTimeout(e.timer), e.timer = null;
  }
  resendUndeliveredResponses() {
    let client_3 = this.client;
    if (!client_3) return;
    for (let n of this.undeliveredResponses.values()) if (this.clearResendTimer(n), !n.inFlight) P("out", n.response), this.postKeptResponse(client_3, n);
  }
  giveUpUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) this.giveUp(e);
  }
  giveUpKeptServedResults() {
    for (let e of [...this.undeliveredResponses.values()]) if (e.kind === "tool") e.inFlight = !1, this.giveUp(e, e.giveUpOnSettle ?? "undelivered");
  }
  dropUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) {
      if (e.giveUpOnSettle === "overtaken") {
        e.inFlight = !1, this.giveUp(e, "overtaken");
        continue;
      }
      this.dropKept(e), p("remote_control_response", "session_gone");
    }
  }
  respondToPermissionRequest(e, n) {
    let s = this.pendingPermissionRequests.get(e);
    if (!s) {
      d(Error(`[RemoteSessionManager] No pending permission request with ID: ${e}`)), m("remote_permission_respond", "remote_permission_respond_no_pending");
      return;
    }
    this.retirePermissionRequest(e), this.recordSeenControlResponseId(e), this.reviveStreamForUserSend();
    let r = this.config.nameRepositoryTrustAnswers === !0 && jje(s.tool_name),
      a = r && n.behavior === "allow" ? {
        behavior: "allow",
        updatedInput: s.input,
        ...(n.toolUseID !== void 0 && {
          toolUseID: n.toolUseID
        })
      } : n,
      h = kut(e, a, this.config.nameToolOnPermissionAllow === !0 || r ? s.tool_name : void 0, r && n.behavior === "deny" && n.decisionClassification === "user_reject");
    t(`[RemoteSessionManager] Sending permission response: ${n.behavior}`), P("out", h), this.sendResponse(h, "permission", s), _("remote_permission_respond");
  }
  respondToUserDialogRequest(request_id_7, response_4) {
    if (!this.pendingDialogRequests.delete(request_id_7)) {
      d(Error(`[RemoteSessionManager] No pending user dialog request with ID: ${request_id_7}`)), m("remote_dialog_respond", "remote_dialog_respond_no_pending");
      return;
    }
    this.recordSeenControlResponseId(request_id_7), this.reviveStreamForUserSend();
    let s = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_7,
        response: response_4
      }
    };
    t(`[RemoteSessionManager] Sending user dialog response: ${response_4.behavior}`), P("out", s), this.sendResponse(s, "dialog"), _("remote_dialog_respond");
  }
  releaseForwardedHook(e) {
    if (this.pendingForwardedHooks.delete(e), this.settledForwardedHookIds.has(e)) I(this.hookGiveUpsTold, e);
  }
  respondToForwardedHook(request_id_8, response_5) {
    if (!this.pendingForwardedHooks.delete(request_id_8)) return t(`[RemoteSessionManager] Forwarded hook request ${lE(request_id_8)} is no longer pending \u2014 answer not sent`), !1;
    if (!this.client) return !1;
    this.recordSeenControlResponseId(request_id_8), this.recordSettledForwardedHookId(request_id_8), this.reviveStreamForUserSend();
    let r = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_8,
        response: response_5
      }
    };
    return P("out", r), this.sendResponse(r, "hook"), !0;
  }
  respondToServedChannelRequest(request_id_9, n, s) {
    let r = this.pendingServedRequests.get(request_id_9);
    if (!r) return t(`[RemoteSessionManager] served request ${lE(request_id_9)} is no longer pending \u2014 result not sent`), !1;
    if (this.pendingServedRequests.delete(request_id_9), !this.client) return !1;
    this.recordSeenControlResponseId(request_id_9), I(this.settledServedRequestIds, request_id_9), this.reviveStreamForUserSend();
    let h = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_9,
        response: Gt(n)
      }
    };
    return P("out", h), this.sendResponse(h, r.subtype === "remote_tools_probe" ? null : "tool", void 0, s), !0;
  }
  releaseServedChannelRequest(e) {
    this.pendingServedRequests.delete(e);
  }
  retireServedRequest(e, n) {
    let s = this.pendingServedRequests.get(e);
    if (!s) return !1;
    return this.pendingServedRequests.delete(e), t(`[RemoteSessionManager] served request ${lE(e)} ${n === "worker" ? "cancelled by the worker" : "dropped with the stream"}`), s.abort.abort(), this.callbacks.onServedChannelRequestCancelled?.(e, n), !0;
  }
  isConnected() {
    return this.client?.isConnected() ?? !1;
  }
  noteWorkerLive() {
    if (this.workerSeenThisConnection) return;
    this.workerSeenThisConnection = !0, this.callbacks.onWorkerLive?.();
  }
  markServing(e) {
    this.serving = e;
  }
  workerLive() {
    return this.isConnected() && this.workerSeenThisConnection;
  }
  flushSends(e) {
    return this.client?.flushSends(e) ?? Promise.resolve();
  }
  cancelSession() {
    t("[RemoteSessionManager] Sending interrupt signal"), this.firstSendReleased = !0, this.reviveStreamForUserSend();
    let e = () => {
      P("out", {
        kind: "control_request",
        subtype: "interrupt"
      }), this.client?.sendControlRequest({
        subtype: "interrupt"
      });
    };
    if (this.heldSends.size === 0) {
      e();
      return;
    }
    let n = () => {
      if (this.pendingInterrupt === n) this.pendingInterrupt = null, e();
    };
    this.pendingInterrupt = n, this.releaseHeldSends().then(n, n);
  }
  sendControlRequest(e, n) {
    return this.postControlRequest(e, n).response;
  }
  postControlRequest(e, n) {
    let {
        promise: s,
        resolve: resolve
      } = Promise.withResolvers(),
      a = async () => {
        let g = null;
        try {
          if (n?.signal?.aborted) throw new We();
          if (!n?.background) this.reviveStreamForUserSend();
          if (P("out", {
            kind: "control_request",
            ...e
          }), g = this.client?.postControlRequest(e, this.onControlRequestPostFailed) ?? null, g === null) throw Error("[RemoteSessionManager] Cannot send: not connected");
        } finally {
          if (g === null) resolve(Oe);
        }
        return g.posted.then(resolve, () => resolve(Oe)), this.awaitControlResponse(g.requestId, e, n);
      },
      response_6 = n?.answerExpected === !1 ? a() : Wyo("remote_control_rpc", a);
    return {
      posted: s,
      response: response_6
    };
  }
  awaitControlResponse(e, n, s) {
    if (n.subtype === "set_model") this.pendingModelSwitchIds.add(e);
    let timeoutMs = be(n.subtype, s?.timeoutMs);
    return new Promise((a, reject) => {
      let timer_2 = setTimeout(this.onControlRequestTimeout, timeoutMs, e, n.subtype, timeoutMs),
        v = s?.signal,
        S = v ? () => this.cancelControlRequest(e) : void 0;
      if (v && S) v.addEventListener("abort", S, {
        once: !0
      });
      this.pendingControlRequests.set(e, {
        resolve: y => a(y),
        reject: reject,
        timer: timer_2,
        timeoutMs: timeoutMs,
        subtype: n.subtype,
        onProgress: s?.onProgress,
        removeAbortListener: v && S ? () => v.removeEventListener("abort", S) : void 0,
        ...(s?.background && {
          background: !0
        }),
        ...(s?.onEchoed && {
          onEchoed: s.onEchoed
        })
      });
    });
  }
  onControlRequestPostFailed = e => {
    this.pendingModelSwitchIds.delete(e);
    let n = this.pendingControlRequests.get(e);
    if (!n) return;
    this.pendingControlRequests.delete(e), clearTimeout(n.timer), n.removeAbortListener?.(), t(`[RemoteSessionManager] control_request ${e} (${n.subtype}) was not delivered \u2014 failing it`, {
      level: "warn"
    }), n.reject(new Qie(n.subtype));
  };
  onControlRequestTimeout = (e, n, s) => {
    this.pendingModelSwitchIds.delete(e);
    let r = this.pendingControlRequests.get(e);
    if (!r) return;
    this.pendingControlRequests.delete(e), r.removeAbortListener?.(), r.reject(new hR(n, s));
  };
  cancelControlRequest(requestId) {
    let n = this.pendingControlRequests.get(requestId);
    if (!n) return;
    if (!n.background) this.reviveStreamForUserSend();
    this.pendingControlRequests.delete(requestId), this.pendingModelSwitchIds.delete(requestId), clearTimeout(n.timer), t(`[RemoteSessionManager] Cancelling control request ${requestId} (${n.subtype})`), P("out", {
      kind: "control_cancel_request",
      requestId: requestId
    }), this.client?.sendControlCancelRequest(requestId), n.reject(new We());
  }
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    t("[RemoteSessionManager] Disconnecting");
    let withheldInitialPrompt_2 = this.config.withheldInitialPrompt;
    if (withheldInitialPrompt_2 !== void 0 && this.withheldPromptInFlight !== null && !this.firstSendReleased) withheldInitialPrompt_2.sent = !1;
    this.lifetime.abort(), this.pendingInterrupt?.(), this.client?.close(), this.client = null;
    for (let n of [...this.undeliveredResponses.values()]) if (this.clearResendTimer(n), n.giveUpOnSettle !== null) n.inFlight = !1, this.giveUp(n, n.giveUpOnSettle);
    this.undeliveredResponses.clear(), this.undeliveredHookIds.clear(), this.hookGiveUpsTold.clear(), this.config.dirSync?.sync.afterDisconnect(), this.pendingPermissionRequests.clear(), this.pendingDialogRequests.clear();
    for (let n of this.pendingForwardedHooks) this.callbacks.onForwardedHookCancelled?.(n, "disconnected");
    this.pendingForwardedHooks.clear();
    for (let n of [...this.pendingServedRequests.keys()]) this.retireServedRequest(n, "disconnected");
    this.workerSeenThisConnection = !1;
    for (let n of this.pendingControlRequests.values()) clearTimeout(n.timer), n.removeAbortListener?.(), n.reject(Error("[RemoteSessionManager] Disconnected"));
    this.pendingControlRequests.clear(), this.pendingModelSwitchIds.clear();
  }
  reconnect() {
    t("[RemoteSessionManager] Reconnecting SSE stream"), this.client?.reconnect();
  }
}
function Lt(e) {
  if (typeof e !== "object" || e === null || !("type" in e) || e.type !== "synced_file_changed") return null;
  let n = "path" in e ? e.path : void 0;
  if (typeof n !== "string") return {
    path: null
  };
  let path = hko(n);
  return path === null ? null : {
    path: path
  };
}
function Vt(e) {
  let n = "user_message_uuids" in e ? e.user_message_uuids : void 0,
    s = h => typeof h === "string" && h.length > 0 && h.length <= It,
    r = Array.isArray(n) ? n.filter(s).slice(0, Dt) : [];
  if (r.length > 0) return r;
  let a = "user_message_uuid" in e ? e.user_message_uuid : void 0;
  return s(a) ? [a] : void 0;
}
function jt(e) {
  return typeof e.callback_id === "string" && (typeof e.issued_at === "number" || typeof e.deadline_ms === "number" || Nre(e.callback_id) !== null);
}
function Wt(e) {
  return hSe.includes(e.subtype);
}
function $e(e) {
  return e === "tool" ? {
    timeoutMs: timeoutMs_2
  } : {};
}
function Gt(e) {
  let n = Buffer.byteLength(b(e), "utf8");
  if (n <= $Ke) return e;
  return {
    result: {
      content: [{
        type: "text",
        text: `(the result was too large to return: ${n} bytes, over the ${$Ke}-byte limit)`
      }],
      isError: !0
    }
  };
}
function zt(e, n) {
  let s = r => {
    t(`[RemoteSessionManager] send gate failed, message goes anyway: ${l(r)}`, {
      level: "warn"
    });
    return;
  };
  try {
    return e(n).then(r => Bt(r) ? r : void 0, s);
  } catch (error) {
    return Promise.resolve(s(error));
  }
}
function Bt(e) {
  return typeof e === "object" && e !== null && e.go === !1 && typeof e.reason === "string";
}
function Y(e) {
  return e.find(item => item !== void 0);
}
function Fe(e) {
  return {
    ok: !1,
    reason: e.reason,
    withheld: !0
  };
}
function Yt(e) {
  if (e.ok) return {
    kind: "sent"
  };
  switch (X(e)) {
    case "withheld":
      return e.reason === reason_3 || e.reason === reason_2 ? {
        kind: "unsent"
      } : {
        kind: "refused",
        reason: e.reason
      };
    case "http_4xx":
    case "http_429":
    case "not_first_party":
      return {
        kind: "refused",
        reason: e.reason
      };
    case "server":
    case "timeout":
    case "network":
    case "unknown":
      return {
        kind: "unconfirmed"
      };
  }
}
function xe(e) {
  return e ? {
    go: !1,
    reason: reason_2
  } : void 0;
}
function He(e, n) {
  return [...e].some(({
    onRelease: onRelease,
    onExit: onExit
  }) => onRelease === "withhold" && !(n && onExit === "await")) ? {
    go: !1,
    reason: reason_3
  } : void 0;
}
var Ygt = 100,
  j3r = 500;
function pbn(e) {
  let n = e?.sequence_num === void 0 ? void 0 : parseInt(String(e.sequence_num), 10);
  return n !== void 0 && !isNaN(n) ? n : void 0;
}
class Czt extends Error {}
var Ve = "X-Trusted-Device-Token";
async function EQ(e, n, {
  recoverDeviceProof = !1
} = {}) {
  let {
      accessToken: accessToken
    } = await Cv(n),
    a = {
      sessionUrl: `${an().BASE_API_URL}/v1/code/sessions/${e}`,
      headers: await CYe(accessToken)
    };
  if (!recoverDeviceProof) return a;
  return {
    ...a,
    headersForRenewedDeviceToken: async h => ({
      ...Hw((await Cv(n)).accessToken),
      [Ve]: h
    })
  };
}
function Le(e, headers_3, params, r) {
  return mt.get(`${e}/events`, {
    headers: headers_3,
    params: params,
    timeout: 15000,
    validateStatus: () => !0,
    maxContentLength: r ?? -1
  }).catch(() => null);
}
async function je(e, n, s, r) {
  let a = await Le(e.sessionUrl, e.headers, n, r),
    headersForRenewedDeviceToken = e.headersForRenewedDeviceToken;
  if (a?.status === 403 && headersForRenewedDeviceToken !== void 0) {
    let y = !1,
      R = await opn(a, e.headers[Ve], async k => {
        let O = await headersForRenewedDeviceToken(k).then(F => Le(e.sessionUrl, F, n, r), () => null);
        if (O === null) throw y = !0, Error("no answer");
        return O;
      });
    if (y) return t(`[${s}] no answer after renewing the device token`), null;
    if (R.status === 403 && fq() && WF(R.data, rp(R.data)) === "untrusted_device") throw t(`[${s}] HTTP 403 untrusted_device`), new Czt("the service does not accept a trusted-device token from this computer");
    a = R;
  }
  if (!a || a.status !== 200) return t(`[${s}] HTTP ${a?.status ?? "error"}`), null;
  if (a.data === null || typeof a.data !== "object") return t(`[${s}] non-object 200 body`), null;
  let g = Array.isArray(a.data.data) ? a.data.data : [],
    events = [];
  for (let y = g.length - 1; y >= 0; y--) {
    let R = g[y];
    if (R?.payload) events.push({
      payload: R.payload,
      createdAt: R.created_at,
      source: R.source,
      sequenceNum: pbn(R)
    });
  }
  let firstId = a.data.next_cursor ?? null;
  return {
    events: events,
    firstId: firstId,
    hasMore: firstId !== null,
    droppedRows: g.length - events.length,
    newestSequenceNum: pbn(g[0])
  };
}
async function uPe(e, limit = Ygt, s) {
  let r = await je(e, {
    limit: limit,
    sort_order: "desc"
  }, "fetchLatestEvents");
  if (s?.reportFeatureHealth !== !1) if (r === null) m("assistant_history_load", "http_error");else _("assistant_history_load");
  return r;
}
async function l1e(e, cursor, limit_2 = Ygt, r) {
  return je(e, {
    limit: limit_2,
    sort_order: "desc",
    cursor: cursor
  }, "fetchOlderEvents", r);
}
export { sbe, U3r, Ezt, ubn, lPe, EXe, pJn, fJn, B3r, lE, reason_3 as cPe, reason_2 as Kgt, Tzt, dPe, Ygt, j3r, pbn, Czt, EQ, uPe, l1e };