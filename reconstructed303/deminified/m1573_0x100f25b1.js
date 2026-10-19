// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ke, Ye, H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ay, Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Lkn, Nkn, iQo } from "B:/~BUN/root/chunk-w4ekna5h.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { qS, K2, $5, Nc, qW, IZe, MZe, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { Yq, nBe, mG } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ZPr } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { ddn, M$t, D$t, Qv, Ix, xht, Pht, SEe, fDo } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ra } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { eIe, Sme, wme } from "B:/~BUN/root/chunk-f25646gd.js";
import { rse, $Ot } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Kot } from "B:/~BUN/root/chunk-708tgcbz.js";
import { tHt, rm } from "B:/~BUN/root/chunk-r4y1700s.js";
import { Jpt } from "B:/~BUN/root/chunk-ks7h6f0s.js";
import { X0, vwe, MSs, DSs } from "B:/~BUN/root/chunk-k382hx6g.js";
import { $ke } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { VX, FS, jae, UH, _Ie } from "B:/~BUN/root/chunk-gygbhz84.js";
import { J6r } from "B:/~BUN/root/chunk-f9ac1atx.js";
import { Fae, Dme, Uin } from "B:/~BUN/root/chunk-rsxy354n.js";
import { rY as error_2 } from "B:/~BUN/root/chunk-d2ck46b0.js";
import { P2e, tbn as baseMs } from "B:/~BUN/root/chunk-1cdad8zr.js";
import { Nye } from "B:/~BUN/root/chunk-znfad60d.js";
import { kvt, z5o } from "B:/~BUN/root/chunk-bx7p4dm0.js";
import { P0 } from "B:/~BUN/root/chunk-a7fam7pz.js";
import { Ias } from "B:/~BUN/root/chunk-zqb056nq.js";
import { V4e } from "B:/~BUN/root/chunk-j6ad53eq.js";
import { Qbe } from "B:/~BUN/root/chunk-7mxk79br.js";
import { Nz } from "B:/~BUN/root/chunk-050gfc4p.js";
import { o, v, M, oe, T, u, _t, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { hs, kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
import { randomUUID as Ae } from "crypto";
var de = f(() => {
  let input = fe(o(), oe()),
    text = _t({
      type: C("text"),
      text: o()
    }),
    assistantByType = new Map(),
    a = {
      text: text,
      tool_use: _t({
        type: C("tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      thinking: _t({
        type: C("thinking"),
        thinking: o(),
        signature: o().optional()
      }),
      redacted_thinking: _t({
        type: C("redacted_thinking"),
        data: o()
      }),
      server_tool_use: _t({
        type: C("server_tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      mcp_tool_use: _t({
        type: C("mcp_tool_use"),
        id: o(),
        name: o(),
        server_name: o(),
        input: input
      })
    };
  for (let [S, h] of Object.entries(a)) assistantByType.set(S, h);
  let r = v().finite();
  return {
    text: text,
    assistantByType: assistantByType,
    usage: _t({
      input_tokens: r,
      output_tokens: r,
      cache_creation_input_tokens: r.nullish(),
      cache_read_input_tokens: r.nullish(),
      iterations: T(_t({})).nullish()
    }),
    generic: _t({
      type: o()
    }),
    toolResultLike: _t({
      type: o(),
      tool_use_id: o()
    }),
    toolResult: _t({
      type: C("tool_result"),
      tool_use_id: o(),
      is_error: M().optional()
    })
  };
});
function A(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var pe = 256,
  mt = "[truncated: too deep]";
function De(value) {
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
    if (depth > pe) return !0;
    for (let value_3 of Object.values(value_2)) if (typeof value_3 === "object" && value_3 !== null) n.push({
      value: value_3,
      depth: depth + 1
    });
  }
  return !1;
}
function gt(value_4) {
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
      S = Array.isArray(value_5) ? value_5 : A(value_5) ? value_5 : null;
    if (S === null) continue;
    for (let h of Object.keys(S)) {
      let value_6 = Reflect.get(S, h);
      if (typeof value_6 !== "object" || value_6 === null) continue;
      if (depth_2 + 1 > pe) Reflect.set(S, h, mt), n++;else s.push({
        value: value_6,
        depth: depth_2 + 1
      });
    }
  }
  return n;
}
function he(e) {
  return A(e) && typeof e.type === "string" ? e.type : null;
}
function St(e) {
  let n = he(e);
  if (n !== null) return n;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function vt(e) {
  let n = he(e);
  if (n === null) return !1;
  let s = de();
  return (s.assistantByType.get(n) ?? (n.endsWith("_tool_result") ? s.toolResultLike : s.generic)).safeParse(e).success;
}
function yt(e) {
  let content = e.content;
  if (content === void 0 || typeof content === "string") return !0;
  if (Array.isArray(content)) {
    let s = content.filter(item => {
      let r = he(item);
      if (r === null) return !1;
      return r === "text" ? de().text.safeParse(item).success : de().generic.safeParse(item).success;
    });
    if (s.length !== content.length) e.content = s;
    return !0;
  }
  if (!A(content)) return e.content = String(content), !0;
  try {
    return e.content = _(content), !0;
  } catch {
    return !1;
  }
}
function Rt(e) {
  let n = he(e);
  if (n === null || !A(e)) return !1;
  let s = de();
  if (n === "text") return s.text.safeParse(e).success;
  if (n === "tool_result") {
    if (!s.toolResult.safeParse(e).success) return !1;
    return yt(e);
  }
  return s.generic.safeParse(e).success;
}
function D(e, n, s) {
  t(`[wireFrameShape] ${e} frame ${typeof n === "string" ? n : "(no uuid)"}: ${s}`, {
    level: "error"
  });
}
function Oe(e, n, s, a) {
  let r = [],
    S = e.filter(item => {
      try {
        if (n(item)) return !0;
      } catch (error) {
        return r.push(`unreadable block (${d(error)})`), !1;
      }
      return r.push(St(item)), !1;
    });
  if (r.length === 0) return e;
  return D(s, a, `dropped ${r.length} malformed content block(s): ${r.join(", ")}`), S;
}
function wt(e) {
  let n;
  if (typeof e.uuid === "string" && e.uuid !== "") n = e.uuid;else D("assistant", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), n = Ae(), e.uuid = n;
  let s = e.message;
  if (!A(s)) return D("assistant", e.uuid, "dropped \u2014 message is not an object"), !1;
  if (s.id !== void 0 && typeof s.id !== "string") s.id = typeof s.id === "number" && Number.isFinite(s.id) ? String(s.id) : e.uuid, D("assistant", e.uuid, "coerced a non-string message.id");
  if (typeof s.content === "string") s.content = [{
    type: "text",
    text: s.content
  }];
  let content_2 = s.content;
  if (!Array.isArray(content_2)) return D("assistant", e.uuid, "dropped \u2014 message.content is not an array"), !1;
  let r = Oe(content_2, vt, "assistant", e.uuid);
  if (r.length === 0 && content_2.length > 0) return D("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (r !== content_2) s.content = r;
  return kt(s, n), !0;
}
function kt(e, n) {
  let s = [];
  if (e.model !== void 0 && typeof e.model !== "string") delete e.model, s.push("model");
  if (e.stop_reason !== void 0 && e.stop_reason !== null && typeof e.stop_reason !== "string") e.stop_reason = null, s.push("stop_reason");
  if (e.usage !== void 0 && !de().usage.safeParse(e.usage).success) delete e.usage, s.push("usage");
  if (s.length > 0) D("assistant", n, `removed malformed envelope field(s): ${s.join(", ")}`);
}
function bt(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === "")) D("user", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), e.uuid = Ae();
  let n = e.message;
  if (!A(n)) return D("user", e.uuid, "dropped \u2014 message is not an object"), !1;
  let content_3 = n.content;
  if (typeof content_3 === "string") return !0;
  if (!Array.isArray(content_3)) return D("user", e.uuid, "dropped \u2014 message.content is neither string nor array"), !1;
  let a = Oe(content_3, Rt, "user", e.uuid);
  if (a.length === 0 && content_3.length > 0) return D("user", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (a !== content_3) n.content = a;
  return !0;
}
function we(e) {
  if (!A(e)) return !1;
  switch (e.type) {
    case "message_start":
      return A(e.message) && typeof e.message.id === "string";
    case "content_block_start":
      {
        let content_block = e.content_block;
        if (!A(content_block) || typeof content_block.type !== "string") return !1;
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
        if (!A(delta)) return !1;
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
function JDe(e) {
  if (!A(e)) return !0;
  try {
    let n = !0;
    try {
      let a = gt(e);
      if (a > 0) D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `replaced ${a} subtree(s) nested deeper than ${pe} levels with a marker`);
    } catch {
      n = !1;
    }
    let s;
    switch (e.type) {
      case "assistant":
        s = wt(e);
        break;
      case "user":
        s = bt(e);
        break;
      case "stream_event":
        if (s = we(e.event), !s) D("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        s = !0;
        break;
    }
    if (s && !n && De(e)) return D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 nested deeper than ${pe} levels`), !1;
    return s;
  } catch (error) {
    return D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 conformance threw: ${d(error)}`), !1;
  }
}
var Et = ["blocked_path", "decision_reason", "decision_reason_type", "decision_reason_code", "decision_reason_rule_source", "title", "display_name", "description", "agent_id", "tool_kind", "server_prompt", "provenance_prompt_line"],
  Tt = [["decision_reason_hook_event", iQo], ["decision_reason_hook_source", Lkn], ["decision_reason_hook_plugin_id", Nkn]],
  Mt = ["classifier_approvable", "suppress_always_allow_rule", "default_to_no", "requires_user_interaction", "server_policy_ask_only"];
function Pye(e) {
  return typeof e.agent_id === "string" && e.agent_id !== "" && !nBe(String(e.tool_name)) && !mG(String(e.tool_name));
}
function C_n(e) {
  if (!A(e)) return !1;
  try {
    if (typeof e.tool_name !== "string" || typeof e.tool_use_id !== "string" || !A(e.input) || De(e)) return t("[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep", {
      level: "error"
    }), !1;
    let n = [];
    for (let s of Et) if (e[s] !== void 0 && typeof e[s] !== "string") delete e[s], n.push(s);
    for (let [s, a] of Tt) if (e[s] !== void 0 && a(e[s]) === void 0) delete e[s], n.push(s);
    for (let s of Mt) if (e[s] !== void 0 && typeof e[s] !== "boolean") delete e[s], n.push(s);
    if (e.permission_suggestions !== void 0) {
      let permission_suggestions = e.permission_suggestions,
        a = Array.isArray(permission_suggestions) ? permission_suggestions.filter(item => Yq().safeParse(item).success) : [];
      if (!Array.isArray(permission_suggestions) || a.length !== permission_suggestions.length) if (n.push(`permission_suggestions (${Array.isArray(permission_suggestions) ? `${permission_suggestions.length - a.length} of ${permission_suggestions.length} entries` : "not an array"})`), a.length > 0) e.permission_suggestions = a;else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let matched_ask_rule = e.matched_ask_rule;
      if (!A(matched_ask_rule) || typeof matched_ask_rule.source !== "string" || typeof matched_ask_rule.tool_name !== "string" || matched_ask_rule.rule_content !== void 0 && typeof matched_ask_rule.rule_content !== "string") delete e.matched_ask_rule, n.push("matched_ask_rule");
    }
    if (e.mcp_server !== void 0) {
      let mcp_server = e.mcp_server;
      if (!A(mcp_server) || typeof mcp_server.name !== "string" || typeof mcp_server.source !== "string") delete e.mcp_server, n.push("mcp_server");
    }
    if (e.computer_folder !== void 0) {
      let computer_folder = e.computer_folder;
      if (!A(computer_folder) || typeof computer_folder.path !== "string" || typeof computer_folder.computer_name !== "string") delete e.computer_folder, n.push("computer_folder");
    }
    if (n.length > 0) t(`[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${n.join(", ")}`, {
      level: "error"
    });
    return !0;
  } catch (error) {
    return t(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${d(error)}`, {
      level: "error"
    }), !1;
  }
}
function lwt(e) {
  let toolUseID = "tool_use_id" in e ? e.tool_use_id : void 0;
  return {
    behavior: "deny",
    message: "Malformed permission request from worker",
    ...(typeof toolUseID === "string" && {
      toolUseID: toolUseID
    })
  };
}
function R_n(e) {
  let worker_epoch = e.worker_epoch;
  return typeof worker_epoch === "number" && Number.isSafeInteger(worker_epoch) && worker_epoch > 0 ? worker_epoch : void 0;
}
var Pt = 2000,
  qt = 1e4,
  Ue = 2000,
  H4o = Ue,
  At = "Sending this machine's settings \u2014 Esc cancels the message\u2026",
  Dt = e => `Still sending this machine's settings (${Math.round(e / 1000)} s)\u2026`,
  Ot = "That message was not sent; this machine's settings are still on their way to the cloud session, and your next message waits for them too.",
  reason = "you stopped waiting for this machine's settings to reach the cloud session; they are still uploading, and a message sent now waits for them again",
  reason_2 = "withdrawn before it was sent",
  reason_3 = `this machine's settings were not sent (see above); send it again to run it ${Ias}`,
  reason_4 = "this machine's settings may not have reached the cloud session (see above); send it again to run it anyway";
function Fe(e, {
  retire: retire,
  noticeAfterMs = Pt,
  progressEveryMs = qt,
  typedAheadGraceMs = Ue,
  now = Date.now
}) {
  let h = P => e.failureAnsweredAtMs !== void 0 && P - e.failureAnsweredAtMs >= typedAheadGraceMs,
    y = e.outcome();
  if (y !== void 0 && (me(y) === void 0 || h(now()))) {
    if (me(y) !== void 0) ge(be(y) === "hold_unsure" ? "ungated_after_timeout" : "ungated_after_failure");
    return null;
  }
  let w = !1,
    R = 0,
    k,
    b = !1;
  e.completion.then(P => {
    if (me(P) !== void 0) e.failureAnsweredAtMs ??= now();
  }, () => {});
  let E = (P, W, I, Q, ie) => {
      let X = P === void 0 ? void 0 : me(P);
      if (X !== void 0 && (W || !h(I))) return e.failureAnsweredAtMs ??= now(), w = !0, ge(Q ? "came_back_at_exit" : W ? "came_back_waited" : now() - (e.settledAtMs() ?? now()) < typedAheadGraceMs ? "came_back_early" : "came_back_late"), X;
      ge(Ie(P, w ? "resent" : "unasked")), retire();
      return;
    },
    O = async P => {
      let W = now();
      await Y(noticeAfterMs, P);
      for (let I = !1; !P.aborted; I = !0) e.status.publish(I ? Dt(now() - W) : At, "progress"), await Y(progressEveryMs, P);
    },
    K = () => {
      if (R += 1, k === void 0) {
        let abortController = new AbortController();
        k = abortController, e.completion.then(() => abortController.abort(), () => abortController.abort()), O(abortController.signal);
      }
      return () => {
        if (R -= 1, R === 0 && e.outcome() === void 0) k?.abort(), k = void 0;
      };
    },
    ye = P => {
      let W = P.then(I => I ? K() : void 0);
      return () => void W.then(I => I?.());
    };
  return async P => {
    let {
        released: released,
        withdrawn: withdrawn,
        exiting: exiting,
        final: final,
        decided: decided
      } = P,
      Z = now(),
      te = e.outcome();
    if (te !== void 0) {
      let V = E(te, !1, Z, !1, !1);
      if (V !== void 0) se(0, "upload_failed", !1);
      return V;
    }
    let ee = void 0,
      z = ee !== void 0,
      B = () => now() - Z,
      ae = e.completion.then(settled => ({
        settled: settled
      }), () => ({
        settled: void 0
      })),
      ne = ee === void 0 ? K() : ye(ee.passed),
      N = await Promise.race([ae, released.then(() => "released"), withdrawn.then(() => "withdrawn"), decided.then(() => "decided")]);
    ne();
    let q = N === "released" && exiting();
    if (q) {
      if (N = await Promise.race([ae, withdrawn.then(() => "withdrawn"), decided.then(() => "decided")]), typeof N === "object" && !final()) {
        se(B(), "upload_settled", z), ge(Ie(N.settled, "handover")), retire();
        return;
      }
    }
    if (N === "decided") {
      se(B(), "decided", z);
      return;
    }
    if (N === "released") {
      if (!b && !z) b = !0, setTimeout(() => {
        b = !1;
      }, 0), e.status.publish(Ot, "info");
      return se(B(), "released", z), {
        go: !1,
        reason: reason
      };
    }
    if (N === "withdrawn") return se(B(), "withdrawn", z), {
      go: !1,
      reason: reason_2
    };
    let x = E(N.settled, !0, Z, q, z);
    return se(B(), x === void 0 ? "upload_settled" : "upload_failed", z), x;
  };
}
function be(e) {
  if (e.kind !== "uploaded") return "go";
  switch (e.outcome) {
    case "failed":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
      return "hold_failed";
    case "deadline":
      return "hold_unsure";
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "aborted":
      return "go";
  }
}
function me(e) {
  switch (be(e)) {
    case "go":
      return;
    case "hold_failed":
      return {
        go: !1,
        reason: reason_3
      };
    case "hold_unsure":
      return {
        go: !1,
        reason: reason_4
      };
  }
}
function Ie(e, n) {
  if (e === void 0) return "upload_rejected";
  switch (be(e)) {
    case "go":
      return "went";
    case "hold_failed":
      return `ran_without_settings_${n}`;
    case "hold_unsure":
      return `ran_unsure_${n}`;
  }
}
function ge(e) {
  if (e === "went") g("ccr_home_seed_first_message");else if (e === "upload_rejected") m("ccr_home_seed_first_message", e);else p("ccr_home_seed_first_message", e);
}
function se(held_ms, n, s) {
  i("tengu_home_seed_first_send_wait", {
    held_ms: held_ms,
    release: c(n),
    ...{}
  });
}
import { randomUUID as et } from "crypto";
import { isDeepStrictEqual as an } from "util";
var Y7n = 300000;
function Ne(e, n) {
  if (n !== void 0) return n;
  return e === "side_question" ? 600000 : 75000;
}
import { appendFile as $t } from "fs/promises";
function L(e, n, s) {
  return;
}
var xt = f(() => u({
  send_now: U(["stopped", "delivering", "nothing_waiting"]).optional().catch(void 0)
}));
function X7n(e) {
  return Array.isArray(e.capabilities) && e.capabilities.includes(J6r);
}
async function $4o(e, message_uuid) {
  try {
    let s = await e({
      subtype: "interrupt",
      send_now: !0,
      ...(message_uuid !== void 0 && {
        message_uuid: message_uuid
      })
    });
    return P0("interrupt", xt(), s ?? {})?.send_now ?? "stopped";
  } catch (error) {
    return t(`[thin-client] send-now request failed: ${d(error)}`, {
      level: "error"
    }), "failed";
  }
}
var $e = ["can_use_tool", "request_user_dialog", "hook_callback", ...Qbe],
  xe = ["elicitation", "mcp_message", "oauth_token_refresh", "host_auth_token_refresh", "remote_control_work_secret"];
import { randomUUID as _e } from "crypto";
var regExp = new RegExp(`<${$5}[\\s>]`, "i"),
  regExp_2 = new RegExp(`</${$5}>`, "i");
function Kt(e) {
  return regExp.test(e) && regExp_2.test(e);
}
var J7n = new Set(["user", "env_manager_log"]),
  Wt = new Map([["thinking_tokens", ["estimated_tokens", "estimated_tokens_delta", "user_message_uuid"]], ["post_turn_summary", ["summarizes_uuid", "status_category", "status_detail", "needs_action"]], ["task_summary", ["detail"]], ["commands_changed", ["commands"]]]);
function Le(e) {
  let subtype = e.subtype;
  if (e.type !== "system" || typeof subtype !== "string") return null;
  let s = Wt.get(subtype);
  if (!s) return null;
  let a = {
    type: "system",
    subtype: subtype,
    uuid: e.uuid,
    session_id: e.session_id
  };
  for (let r of s) if (r in e) a[r] = e[r];
  return a;
}
var We = 500;
function He(e) {
  if (e.startsWith("<bash-stdout") || e.startsWith("<bash-stderr") || e.startsWith("<local-command-stdout") || e.startsWith("<local-command-stderr") || e.startsWith(IZe) || e.startsWith(`<${qW} `) || e.startsWith(`<${qW}>`)) return !0;
  if (wme(e)) return !0;
  if ((e.startsWith(rse) || e.startsWith(eIe)) && e.startsWith("<", e.indexOf(`
`) + 1)) return !0;
  let n = Sme.find(item => e.startsWith(item));
  if (n !== void 0 && e.startsWith("<", n.length)) return !0;
  if (Kt(e)) return !0;
  return e.includes("<bash-input>") || e.includes(`<${qS}>`) || e.includes("<user-memory-input>") || e.includes(`<${Nc}`) || e.includes("<mcp-resource-update") || e.includes("<mcp-polling-update") || e.includes(`<${MZe}>`) || e.includes(`<${K2}>`);
}
function QDe(e) {
  if (e.tool_use_result !== void 0) return !0;
  let n = e.message?.content;
  if (typeof n === "string") return He(n);
  return Array.isArray(n) && n.some(item => typeof item === "object" && item !== null && "type" in item && (item.type === "tool_result" || item.type === "text" && "text" in item && typeof item.text === "string" && He(item.text)));
}
function dwt(e) {
  let n = e.message?.content;
  return Array.isArray(n) && !n.every(item => typeof item === "object" && item !== null && (item.type !== "text" || typeof item.text === "string"));
}
function xGr(e) {
  return QDe(e) || dwt(e);
}
function PGr(e) {
  if (xGr(e)) return !0;
  let n = e.message?.content;
  return (typeof n === "string" ? [n] : Array.isArray(n) ? n.flatMap(item => typeof item === "object" && item !== null && item.type === "text" && typeof item.text === "string" ? [item.text] : []) : []).some(jt);
}
function jt(e) {
  let n = e.indexOf(`
`);
  return (n === -1 || n === e.length - 1) && (e.startsWith(rse) || e.startsWith(eIe) || Sme.some(item => e.startsWith(item.trimEnd())));
}
var Ge = null,
  capMs = 30000,
  le = 5,
  Se = 5000,
  Vt = 30000,
  Be = 30000,
  Gt = 30000,
  zt = new Set([401, 403, 404]),
  Ce = 4096,
  Bt = {
    verified: "verified",
    verified_by_gate: "verified",
    verified_keyless_device: "verified",
    service_vouched: "verified",
    absent: "unverified",
    invalid: "unverified"
  };
function re(e) {
  return String(e).slice(0, 64).replace(/[^\x20-\x7e]/g, "?");
}
function Yt(e) {
  if (typeof e !== "string") return "unknown";
  let n = e.startsWith("DEVICE_ATTESTATION_STATUS_") ? e.slice(26).toLowerCase() : e;
  return Bt[n] ?? "unknown";
}
var Xt = 2000;
function Xe(e, n, s) {
  let sentAt = typeof e.created_at === "string" ? Date.parse(e.created_at) : NaN;
  if (Number.isNaN(sentAt)) return {
    replayed: !0
  };
  return {
    sentAt: sentAt,
    replayed: sentAt < n + Xt,
    ...(s !== void 0 && {
      ageMs: Jt(s, sentAt) - sentAt
    })
  };
}
function Qt(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0,
    s = typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0,
    device_attestation_status = e.device_attestation_status;
  if (!(s === "hook_callback" || Qbe.some(item => item === s))) return {};
  let remote_tool_gate = e.payload.remote_tool_gate,
    modeStamp = remote_tool_gate === void 0 || remote_tool_gate === null ? void 0 : remote_tool_gate === "caller_reauthored" ? "present" : "other";
  return {
    ...(device_attestation_status !== void 0 && device_attestation_status !== null && {
      attestationStatus: $ke(typeof device_attestation_status === "string" ? device_attestation_status.toUpperCase() : device_attestation_status)
    }),
    ...(modeStamp !== void 0 && {
      modeStamp: modeStamp
    })
  };
}
function Jt(e, n) {
  let s = Date.now(),
    a = performance.now(),
    r = e.serviceMs + Math.max(s - e.wallMs, a - e.monotonicMs);
  if (n > r) return e.serviceMs = n, e.wallMs = s, e.monotonicMs = a, n;
  return r;
}
var Zt = Jpt("ccr_worker", void 0),
  en = "remote_tool_result_too_large",
  tn = f(() => u({
    error: u({
      type: C("session_not_active")
    })
  })),
  nn = "tool_host_ended";
function Ee(e) {
  return typeof e === "object" && e !== null && "type" in e && typeof e.type === "string";
}
class Me {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  onAuth401;
  state = "idle";
  abortController = null;
  reconnectAttempts = 0;
  reconnectTimer = null;
  livenessTimer = null;
  driftTimer = null;
  closedCause = null;
  lastDriftCheck = 0;
  lastHealthyAt;
  downSince;
  driftRedial = !1;
  dialsSinceUp = 0;
  lastSequenceNum = 0;
  issuedRequestIds = new Set();
  liveOnlyRequestIds = new Set();
  ownRequestUuids = new Map();
  trustedDeviceToken;
  trackedSends;
  servesSession;
  rediallingPastBudget = !1;
  connectedSince = 0;
  resumed = !1;
  serviceClock = void 0;
  eventSigner;
  controlOnly;
  admitProjectPersonMessages;
  withholdTrustedDeviceToken;
  constructor(e, n, s, a, r, S, {
    trackSends = !1,
    keepRedialling: keepRedialling,
    eventSigner: eventSigner,
    controlOnly = !1,
    admitProjectPersonMessages = !1,
    withholdTrustedDeviceToken = !1
  } = {}) {
    this.sessionId = e;
    this.orgUuid = n;
    this.getAccessToken = s;
    this.callbacks = a;
    this.onAuth401 = r;
    if (S !== void 0 && S > 0) this.lastSequenceNum = S;
    this.trackedSends = trackSends ? new Set() : null, this.servesSession = keepRedialling ?? (() => !1), this.eventSigner = eventSigner, this.controlOnly = controlOnly, this.admitProjectPersonMessages = admitProjectPersonMessages, this.withholdTrustedDeviceToken = withholdTrustedDeviceToken;
  }
  get keepRedialling() {
    try {
      return this.servesSession();
    } catch {
      return !1;
    }
  }
  sendsInFlight() {
    let e = [...(this.trackedSends ?? [])];
    return {
      count: e.length,
      settled: Promise.allSettled(e).then(() => {})
    };
  }
  async flushSends(e) {
    let {
      count: count,
      settled: settled_2
    } = this.sendsInFlight();
    if (count > 0) await je(settled_2, e);
  }
  async connect() {
    if (this.state === "connecting" || this.state === "connected") {
      t("[SessionsV2Client] Already connecting/connected");
      return;
    }
    if (this.closedCause === "deliberate") {
      t("[SessionsV2Client] Ignoring connect() \u2014 deliberately closed");
      return;
    }
    this.state = "connecting", this.closedCause = null, this.dialsSinceUp++, this.connectedSince = Date.now(), this.resumed = this.lastSequenceNum > 0;
    let e = new URL(`${ln().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`);
    if (this.lastSequenceNum > 0) e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.controlOnly) e.searchParams.set("control_only", "1");
    let abortController_2 = new AbortController();
    this.abortController = abortController_2;
    let s;
    try {
      s = await this.authHeaders();
    } catch (error) {
      if (this.abortController !== abortController_2) return;
      t(`[SessionsV2Client] Could not build the stream's credentials: ${d(error)}`, {
        level: "error"
      }), this.abortController = null, this.handleStreamEnd();
      return;
    }
    let a = {
      ...s,
      Accept: "text/event-stream"
    };
    if (abortController_2.signal.aborted || this.abortController !== abortController_2) return;
    if (this.lastSequenceNum > 0) a["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`), this.readStream(e, a, abortController_2);
  }
  loadTrustedDeviceToken() {
    if (this.withholdTrustedDeviceToken) return Promise.resolve("");
    let e = void 0,
      n = () => {
        if (this.trustedDeviceToken === e) this.trustedDeviceToken = void 0;
      },
      s = (async () => {
        try {
          let a = (await FS()) ?? "";
          if (!a) n();
          return a;
        } catch (error) {
          return n(), t(`[SessionsV2Client] trusted-device token unavailable, sending no td-v1 header: ${d(error)}`), "";
        }
      })();
    return e = s, s;
  }
  rereadTrustedDeviceToken() {
    if (this.trustedDeviceToken = void 0, rm()) UH();
  }
  async recoverTrustedDeviceToken(e, n) {
    try {
      if (this.withholdTrustedDeviceToken) return !1;
      if (!(await tHt())) return !1;
      if (!Uin(e)) return jae("[SessionsV2Client]", e), this.rereadTrustedDeviceToken(), !1;
      let s = await _Ie(n || void 0);
      if (!s) return !1;
      return this.trustedDeviceToken = Promise.resolve(s), !0;
    } catch (error) {
      return t(`[SessionsV2Client] trusted-device re-enrollment failed: ${d(error)}`), !1;
    }
  }
  async postEvents(url, n, headers, a = Gt) {
    let r = await Zt(url, {
      method: "POST",
      headers: headers,
      body: _(n),
      signal: AbortSignal.timeout(a),
      ...ra({
        url: url
      })
    }, w => fetch(url, w));
    if (r.ok) {
      let R = (await r.json()).results?.[0],
        k = R ? parseInt(String(R.sequence_num), 10) : NaN;
      return {
        ok: !0,
        sequence_num: isNaN(k) ? 0 : k
      };
    }
    let refusal,
      inactive = !1,
      tooLarge = r.status === 413;
    if (r.status === 403 && rm()) {
      let w = await Ze(r);
      refusal = w.reason === "untrusted_device" ? w.about : void 0;
    } else if (r.status === 409) inactive = await on(r);else if (r.status === 400) tooLarge = sn(await Pe(r));else await Nz(r);
    return {
      ok: !1,
      status: r.status,
      refusal: refusal,
      inactive: inactive,
      tooLarge: tooLarge,
      sentDeviceToken: headers["X-Trusted-Device-Token"]
    };
  }
  async readStream(e, headers_2, s) {
    let a,
      r = !1,
      S = setTimeout(() => {
        r = !0, s.abort();
      }, Be);
    try {
      a = await fetch(e.href, {
        method: "GET",
        headers: headers_2,
        signal: s.signal,
        ...ra({
          url: e.href
        })
      });
    } catch (error) {
      if (clearTimeout(S), this.abortController !== s) return;
      if (r) {
        t(`[SessionsV2Client] Connect timed out after ${Be}ms, reconnecting`, {
          level: "error"
        }), p("remote_connect", "remote_connect_timeout"), this.handleStreamEnd();
        return;
      }
      if (s.signal.aborted) return;
      if (t(`[SessionsV2Client] Connect error: ${d(error)}`, {
        level: "error"
      }), p("remote_connect", "remote_connect_request_failed"), this.callbacks.onError?.(H(error)), this.abortController !== s) return;
      this.handleStreamEnd();
      return;
    }
    if (!a.ok || !a.body) {
      t(`[SessionsV2Client] HTTP ${a.status} on SSE connect`, {
        level: "error"
      });
      let k = a.status === 403 ? await Ze(a) : void 0;
      if (k === void 0) await Nz(a);
      let b = k?.reason;
      if (clearTimeout(S), this.abortController !== s) return;
      if (a.status === 401 && this.onAuth401) {
        t("[SessionsV2Client] 401 on SSE connect \u2014 refreshing"), m("remote_connect", "remote_connect_auth_401");
        let E = await this.onAuth401(Je(headers_2) ?? this.getAccessToken()).catch(() => !1);
        if (this.abortController !== s) return;
        if (!E && this.reconnectAttempts >= le && this.keepRedialling) {
          m("remote_connect", "remote_connect_reconnect_exhausted"), this.state = "closed", this.closedCause = "exhausted", this.callbacks.onClose?.();
          return;
        }
        this.handleStreamEnd();
        return;
      }
      if (k?.reason === "untrusted_device") {
        let E = await this.recoverTrustedDeviceToken(k.about, headers_2["X-Trusted-Device-Token"]);
        if (this.abortController !== s) return;
        if (E) {
          t("[SessionsV2Client] untrusted_device on SSE connect \u2014 re-enrolled, reconnecting"), p("remote_connect", "remote_connect_untrusted_device"), this.handleStreamEnd();
          return;
        }
      }
      if (zt.has(a.status)) {
        m("remote_connect", k?.reason === "untrusted_device" && k.about.kind === "unrecognized" ? "remote_connect_unknown_sub_reason" : "remote_connect_permanent_failure", Qe(headers_2)), this.state = "closed", this.closedCause = "permanentHttp", this.callbacks.onClose?.(b);
        return;
      }
      p("remote_connect", "remote_connect_http_error"), this.handleStreamEnd();
      return;
    }
    if (clearTimeout(S), this.abortController !== s) {
      a.body.cancel().catch(() => {});
      return;
    }
    let serviceMs = Date.parse(a.headers.get("date") ?? "");
    if (Number.isNaN(serviceMs)) this.serviceClock = void 0, t("[SessionsV2Client] The stream answered without a Date header: frames on it cannot be dated against the service clock", {
      level: "warn"
    });else this.connectedSince = serviceMs, this.serviceClock = {
      serviceMs: serviceMs,
      wallMs: Date.now(),
      monotonicMs: performance.now()
    };
    this.state = "connected", this.reconnectAttempts = 0, this.rediallingPastBudget = !1;
    let y = {
      gapMs: this.downSince === void 0 ? 0 : Date.now() - this.downSince,
      driftRedial: this.driftRedial
    };
    if (this.downSince !== void 0) i("tengu_remote_stream_regained", {
      gap_ms: y.gapMs,
      attempts: this.dialsSinceUp,
      drift_redial: y.driftRedial,
      keeps_redialling: this.keepRedialling
    });
    this.downSince = void 0, this.driftRedial = !1, this.dialsSinceUp = 0, this.resetLivenessTimer(), this.startDriftWatch(), t("[SessionsV2Client] Connected"), g("remote_connect", Qe(headers_2)), this.callbacks.onConnected?.(y);
    let w = a.body.getReader(),
      R = new V4e();
    try {
      while (!0) {
        let {
          done: done,
          value: value_7
        } = await w.read();
        if (this.abortController !== s) return;
        if (done) break;
        for (let E of R.push(value_7)) {
          if (this.abortController !== s) return;
          if (this.resetLivenessTimer(), E.event && E.data) this.handleFrame(E.event, E.id, E.data);
        }
      }
    } catch (error) {
      if (s.signal.aborted) return;
      t(`[SessionsV2Client] Stream read error: ${d(error)}`, {
        level: "error"
      }), p("remote_connect", "remote_connect_stream_error");
    } finally {
      w.releaseLock();
    }
    if (!s.signal.aborted) t("[SessionsV2Client] Stream ended"), this.handleStreamEnd();
  }
  handleFrame(e, n, s) {
    let a;
    try {
      a = J(s);
    } catch (error) {
      l(Ye(Error(`[SessionsV2Client] Failed to parse ${e} frame: ${d(error)}`), "SessionsV2Client: failed to parse event frame")), p("remote_connect", "remote_connect_frame_parse_failed");
      return;
    }
    switch (e) {
      case "client_event":
        {
          let r = a,
            sequenceNum = parseInt(n ?? String(r.sequence_num), 10);
          if (!isNaN(sequenceNum) && sequenceNum > this.lastSequenceNum) this.lastSequenceNum = sequenceNum;
          if (!Ee(r.payload)) {
            t(`[SessionsV2Client] Dropping client_event with no payload.type (event_type=${r.event_type})`);
            return;
          }
          if (r.payload.type === "control_response") {
            let {
              response: response
            } = r.payload;
            if (!response || typeof response !== "object" || typeof response.request_id !== "string") {
              t(`[SessionsV2Client] Dropping malformed control_response from source=${r.source}`, {
                level: "warn"
              });
              return;
            }
          }
          if (r.payload.type === "user") {
            if (r.source !== "worker" && QDe(r.payload) && !(this.admitProjectPersonMessages && Ge !== null && Ge.isProjectPersonEvent(r.payload, r.source))) {
              t(`[SessionsV2Client] Dropping worker-output-shaped user frame from source=${r.source} \u2014 only the worker produces tool results and execution output`, {
                level: "warn"
              });
              return;
            }
            if (dwt(r.payload)) {
              t(`[SessionsV2Client] Dropping user frame with malformed content from source=${r.source}`, {
                level: "warn"
              });
              return;
            }
          }
          if (r.source !== "worker") {
            if (r.payload.type === "control_response") {
              if (this.issuedRequestIds.has(r.payload.response.request_id)) {
                t(`[SessionsV2Client] Dropping control_response for this client's request_id from source=${r.source} \u2014 only the worker may answer our RPCs`, {
                  level: "warn"
                });
                return;
              }
              if (r.payload.response.pending_user_dialog_requests || r.payload.response.pending_permission_requests) {
                t(`[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${r.source}`);
                let {
                  pending_user_dialog_requests: pending_user_dialog_requests,
                  pending_permission_requests: pending_permission_requests,
                  ...response_2
                } = r.payload.response;
                this.deliver({
                  ...r.payload,
                  response: response_2
                }, {
                  source: r.source,
                  ...(!isNaN(sequenceNum) && {
                    sequenceNum: sequenceNum
                  }),
                  ...Xe(r, this.connectedSince, this.serviceClock),
                  ...(this.resumed && {
                    resumed: !0
                  })
                });
                return;
              }
            } else if (!J7n.has(r.payload.type)) {
              if (r.payload.type === "control_request" && typeof r.payload.request_id === "string" && this.issuedRequestIds.has(r.payload.request_id)) {
                let h = "uuid" in r.payload ? r.payload.uuid : void 0;
                if (typeof h !== "string" || h !== this.ownRequestUuids.get(r.payload.request_id)) {
                  t(`[SessionsV2Client] A copy of own request ${re(r.payload.request_id)} from source=${re(r.source)} under another event uuid \u2014 ignored`);
                  return;
                }
                let y = Yt(r.device_attestation_status);
                if (t(`[SessionsV2Client] Own request ${re(r.payload.request_id)} echoed from source=${re(r.source)}: device proof ${re(r.device_attestation_status)} (${y})`), y === "unverified") this.rereadTrustedDeviceToken();
                this.callbacks.onOwnRequestEchoed?.(r.payload.request_id, y);
                return;
              }
              t(`[SessionsV2Client] Dropping ${r.payload.type} from source=${r.source}`);
              return;
            }
          } else if (r.payload.type === "control_response") this.issuedRequestIds.delete(r.payload.response.request_id), this.liveOnlyRequestIds.delete(r.payload.response.request_id), this.ownRequestUuids.delete(r.payload.response.request_id);
          this.deliver(r.payload, {
            source: r.source,
            ...(!isNaN(sequenceNum) && {
              sequenceNum: sequenceNum
            }),
            ...Xe(r, this.connectedSince, this.serviceClock),
            ...(this.resumed && {
              resumed: !0
            }),
            ...(r.source === "worker" && Qt(r))
          });
          return;
        }
      case "ephemeral_event":
        {
          let r = a;
          if (r?.event_type === nn) {
            let h = typeof r.payload === "object" && r.payload !== null ? r.payload : {},
              {
                work_id: work_id,
                reason: reason_5
              } = h;
            try {
              this.callbacks.onToolHostEnded?.({
                workId: typeof work_id === "string" ? work_id : void 0,
                reason: typeof reason_5 === "string" ? reason_5 : void 0
              });
            } catch (error) {
              t(`[SessionsV2Client] tool_host_ended handler threw: ${d(error)}`, {
                level: "error"
              });
            }
            return;
          }
          let payload = r.payload;
          if (Ee(r.payload)) {
            if (r.payload.type === "control_response" && typeof r.payload.response?.request_id === "string" && this.liveOnlyRequestIds.delete(r.payload.response.request_id)) {
              this.issuedRequestIds.delete(r.payload.response.request_id), this.ownRequestUuids.delete(r.payload.response.request_id);
              let {
                pending_user_dialog_requests: pending_user_dialog_requests_2,
                pending_permission_requests: pending_permission_requests_2,
                ...response_3
              } = r.payload.response;
              this.deliver({
                ...r.payload,
                response: response_3
              }, {
                source: "worker"
              });
              return;
            }
            let h = Le(payload);
            if (h && Ee(h)) {
              this.deliver(h, {});
              return;
            }
            if (r.payload.type !== "stream_event") {
              t(`[SessionsV2Client] Dropping ${r.payload.type} on ephemeral channel`);
              return;
            }
            if (!we(r.payload.event)) {
              t("[SessionsV2Client] Dropping malformed stream_event on ephemeral channel", {
                level: "warn"
              });
              return;
            }
            this.deliver(r.payload, {});
          }
          return;
        }
      case "catch_up_truncated":
        t("[SessionsV2Client] catch_up_truncated \u2014 transcript gap"), p("remote_connect", "remote_catch_up_truncated"), this.callbacks.onCatchUpTruncated?.();
        return;
      case "session_update":
        {
          let r = a?.connection_status;
          if (typeof r === "string") try {
            this.callbacks.onWorkerConnectionStatus?.(r);
          } catch (error) {
            t(`[SessionsV2Client] worker connection status handler threw: ${d(error)}`, {
              level: "error"
            });
          } else t("[SessionsV2Client] Ignoring session_update frame");
          return;
        }
      case "security_update":
        {
          let r = a?.security_tier;
          if (t(`[SessionsV2Client] security_update: tier ${typeof r === "string" ? re(r) : typeof r}`), r === "elevated") try {
            this.callbacks.onSecurityTierRaised?.();
          } catch (error) {
            t(`[SessionsV2Client] security tier handler threw: ${d(error)}`, {
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
    if (!M$t(s => this.callbacks.onMessage(s, n), e, "SessionsV2Client")) p("remote_connect", "remote_connect_frame_handler_threw");
  }
  handleStreamEnd() {
    if (this.markDown(), this.clearLivenessTimer(), this.clearDriftWatch(), this.state === "closed") return;
    this.abortController = null;
    let e = this.reconnectAttempts >= le;
    if (e && !this.keepRedialling) {
      t(`[SessionsV2Client] Reconnect budget exhausted (${le}), closing`), m("remote_connect", "remote_connect_reconnect_exhausted"), this.state = "closed", this.closedCause = "exhausted", this.callbacks.onClose?.();
      return;
    }
    if (!e) this.reconnectAttempts++;else if (!this.rediallingPastBudget) this.rediallingPastBudget = !0, p("remote_connect", "remote_connect_redialling_past_budget");
    this.state = "idle";
    let n = e ? capMs : Ay({
      attempt: this.reconnectAttempts,
      baseMs: baseMs,
      capMs: capMs
    });
    if (t(`[SessionsV2Client] Reconnecting in ${n}ms (attempt ${this.reconnectAttempts}/${this.keepRedialling ? "\u221E" : le}, from_sequence_num=${this.lastSequenceNum})`), this.reconnectTimer = setTimeout(() => {
      if (this.reconnectTimer = null, this.state === "closed") return;
      this.connect();
    }, n), !e) this.callbacks.onReconnecting?.();
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null, t("[SessionsV2Client] Liveness timeout, reconnecting", {
      level: "warn"
    });
    try {
      let e = Date.now();
      this.callbacks.onStreamSilent?.({
        suspended: e - this.lastDriftCheck > Se * 2 || e - (this.lastHealthyAt ?? e) > P2e + Se * 2
      });
    } catch (error) {
      let n = error instanceof Error ? error : Error("not an Error");
      l(n);
    }
    this.abortController?.abort(), this.abortController = null, this.handleStreamEnd();
  };
  markDown() {
    let e = Date.now();
    this.downSince ??= this.lastHealthyAt !== void 0 && e - this.lastHealthyAt >= Vt ? this.lastHealthyAt : e;
  }
  resetLivenessTimer() {
    this.lastHealthyAt = Date.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, P2e);
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null;
  }
  startDriftWatch() {
    this.clearDriftWatch(), this.lastDriftCheck = Date.now(), this.driftTimer = setInterval(() => {
      let e = Date.now(),
        n = e - this.lastDriftCheck;
      if (this.lastDriftCheck = e, n > Se * 2 && this.state === "connected") t(`[SessionsV2Client] Wall-clock drift ${n}ms \u2014 reconnecting after suspend`), this.reconnectAfterSuspend();
    }, Se);
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
    if (this.trackedSends !== null) {
      let trackedSends = this.trackedSends;
      trackedSends.add(e);
      let s = () => {
        trackedSends.delete(e);
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
    let s = `${ln().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`;
    try {
      let a = performance.now(),
        r = await ddn(this.eventSigner, this.sessionId, e),
        S = performance.now(),
        h = {
          session_id: this.sessionId,
          events: [r]
        },
        y = await this.authHeaders(),
        w = await this.postEvents(s, h, y, n.timeoutMs);
      if (!w.ok && w.status === 401 && this.onAuth401) {
        if (t("[SessionsV2Client] 401 on POST \u2014 refreshing + retry"), await this.onAuth401(Je(y) ?? this.getAccessToken())) w = await this.postEvents(s, h, await this.authHeaders(), n.timeoutMs);
      }
      let R = !1;
      if (!w.ok && w.refusal !== void 0 && (await this.recoverTrustedDeviceToken(w.refusal, w.sentDeviceToken))) {
        t("[SessionsV2Client] untrusted_device on POST \u2014 re-enrolled, retrying");
        let k = await this.authHeaders();
        w = await this.postEvents(s, h, k, n.timeoutMs), R = !0;
      }
      if (!w.ok) {
        if (t(`[SessionsV2Client] POST /events returned ${w.status}${w.inactive ? " (session not active)" : ""}${w.tooLarge ? " (too large)" : ""}`, {
          level: "warn"
        }), w.inactive) return p("remote_send_event", "remote_send_event_session_inactive"), {
          outcome: "session_inactive"
        };
        return m("remote_send_event", w.tooLarge ? "remote_send_event_too_large" : w.refusal?.kind === "signature_wanted" ? "remote_send_event_signature_wanted" : w.refusal?.kind === "unrecognized" ? "remote_send_event_unknown_sub_reason" : "remote_send_event_http_error"), {
          outcome: "failed",
          cause: "http",
          status: w.status,
          ...(w.tooLarge && {
            tooLarge: !0
          })
        };
      }
      if (R) p("remote_send_event", "remote_send_event_untrusted_device");else g("remote_send_event");
      return {
        outcome: "accepted",
        sequence_num: w.sequence_num,
        signMs: Math.round(S - a),
        postMs: Math.round(performance.now() - S)
      };
    } catch (error) {
      return t(`[SessionsV2Client] POST /events failed: ${d(error)}`, {
        level: "warn"
      }), m("remote_send_event", "remote_send_event_request_failed"), {
        outcome: "failed",
        cause: rn(error) ? "timeout" : "network"
      };
    }
  }
  sendControlResponse(e, uuid = _e(), s = {}) {
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
    let s = _e();
    if (this.issuedRequestIds.add(s), this.issuedRequestIds.size > We) {
      t("[SessionsV2Client] issuedRequestIds overflow \u2014 evicting oldest unanswered request_id", {
        level: "warn"
      });
      let S = this.issuedRequestIds.values().next().value;
      if (S !== void 0) this.issuedRequestIds.delete(S), this.liveOnlyRequestIds.delete(S), this.ownRequestUuids.delete(S);
    }
    let a = {
      type: "control_request",
      request_id: s,
      request: request,
      uuid: _e()
    };
    this.ownRequestUuids.set(s, a.uuid), t(`[SessionsV2Client] Sending control_request: ${request.subtype}`);
    let posted = this.trackSend(this.postEvent(a).then(S => {
      if (S.outcome === "session_inactive" || S.outcome === "failed" && S.cause === "http") n?.(s);
      return S;
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
      uuid: _e()
    });
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (t("[SessionsV2Client] Closing"), this.state = "closed", this.closedCause = "deliberate", this.clearLivenessTimer(), this.clearDriftWatch(), this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.abortController?.abort(), this.abortController = null;
  }
  reconnect() {
    if (this.closedCause === "deliberate") {
      t("[SessionsV2Client] Ignoring reconnect() \u2014 deliberately closed");
      return;
    }
    if (t("[SessionsV2Client] Force reconnect"), this.markDown(), this.reconnectAttempts = 0, this.clearLivenessTimer(), this.clearDriftWatch(), this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.abortController?.abort(), this.abortController = null, this.state = "idle", this.connect();
  }
  reconnectAfterSuspend() {
    if (this.state === "closed" || this.driftRedial && this.state === "connecting") return;
    this.driftRedial = !0, this.reconnect();
  }
  isRevivable() {
    return this.closedCause === "exhausted";
  }
  reviveAfterExhaustion() {
    if (!(this.keepRedialling && this.state === "idle" && this.reconnectAttempts >= le && this.reconnectTimer !== null) && this.closedCause !== "exhausted") return !1;
    return p("remote_connect", "remote_connect_revived_by_user_send"), this.reconnect(), !0;
  }
  async authHeaders() {
    let e = await (this.trustedDeviceToken ??= this.loadTrustedDeviceToken());
    return {
      Authorization: `${Te}${this.getAccessToken()}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": kh(),
      "x-organization-uuid": this.orgUuid,
      "User-Agent": hs(),
      ...(e && {
        "X-Trusted-Device-Token": e
      })
    };
  }
}
var Te = "Bearer ";
function Qe(e) {
  return {
    trusted_device_token_sent: e["X-Trusted-Device-Token"] !== void 0,
    device_identity_flag_on: rm()
  };
}
function Je(e) {
  let Authorization = e.Authorization;
  return Authorization?.startsWith(Te) ? Authorization.slice(Te.length) : void 0;
}
async function Ze(e) {
  let n = await Pe(e),
    about = Dme(n);
  return about !== void 0 ? {
    reason: "untrusted_device",
    about: about
  } : {
    reason: Fae(n) === "session_stale_relogin" ? "session_stale_relogin" : void 0
  };
}
function sn(e) {
  return e !== void 0 && _(e).includes(en);
}
async function on(e) {
  return tn().safeParse(await Pe(e)).success;
}
async function Pe(e) {
  let n = e.body?.getReader();
  if (!n) return;
  try {
    let uint8Array = new Uint8Array(Ce),
      a = 0;
    for (;;) {
      let {
        done: done_2,
        value: value_8
      } = await n.read();
      if (done_2 || !value_8) break;
      let h = Math.min(value_8.length, Ce - a);
      if (uint8Array.set(value_8.subarray(0, h), a), a += h, a >= Ce) break;
    }
    return J(new TextDecoder().decode(uint8Array.subarray(0, a)));
  } catch {
    return;
  } finally {
    n.cancel().catch(() => {});
  }
}
function rn(e) {
  return e instanceof Error && e.name === "TimeoutError";
}
var dt = 1000,
  dn = 8,
  Q7n = 200;
var un = {
  can_use_tool: f(() => u({
    request_id: o(),
    request: _t({
      subtype: C("can_use_tool"),
      tool_name: o(),
      input: fe(o(), oe()),
      tool_use_id: o()
    })
  })),
  request_user_dialog: f(() => u({
    request_id: o(),
    request: _t({
      subtype: C("request_user_dialog"),
      dialog_kind: o(),
      payload: fe(o(), oe())
    })
  }))
};
function OGr(e, n) {
  let s = un[n]().safeParse(e);
  if (!s.success) return null;
  return {
    type: "control_request",
    request_id: s.data.request_id,
    request: s.data.request
  };
}
var cn = f(() => u({
  subtype: C("success"),
  response: u({
    toolName: o()
  })
}));
function lt(e) {
  return cn().safeParse(e).data?.response.toolName;
}
function IGr(e, n) {
  return typeof n === "string" && Kot(lt(e), n);
}
function tt(e, n) {
  try {
    return an(e, n);
  } catch {
    return !1;
  }
}
function G(e, n) {
  if (e.add(n), e.size > dt) {
    let s = e.values().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function qe(e, n, s, a = Q7n) {
  if (e.set(n, s), e.size > a) {
    let r = e.keys().next().value;
    if (r !== void 0) e.delete(r);
  }
}
var U4o = ["can_use_tool", "request_user_dialog"],
  pn = 30000,
  hn = 16;
function yk(e) {
  return e.length > 80 ? `${e.slice(0, 80).replace(/[^\x20-\x7e]/g, "?")}\u2026(+${e.length - 80})` : e.replace(/[^\x20-\x7e]/g, "?");
}
var ue = 256,
  fn = 3,
  mn = 750,
  gn = 35000;
function ce(e) {
  if (e.withheld) return "withheld";
  if (e.status === 429) return "http_429";
  if (e.status !== void 0) return "http_4xx";
  return e.cause ?? "unknown";
}
function _n(e) {
  return e === "http_429" || e === "server" || e === "timeout" || e === "network";
}
var ut = {
  timeout: "the service took too long to answer",
  network: "the connection failed"
};
function B4o(e) {
  let n = ce(e);
  return n === "timeout" || n === "network" ? ut[n] : void 0;
}
var reason_7 = "cancelled",
  reason_6 = "withdrawn",
  nt = {
    outcome: "failed",
    cause: "closed"
  },
  Sn = 1500,
  ct = [1000, 5000, 15000, 45000],
  st = ct.length,
  timeoutMs_2 = 120000;
function A_n(e, n) {
  switch (e) {
    case "permission":
      return "A permission answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "dialog":
      return "A dialog answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "hook":
      return n === "overtaken" ? "A hook's decision from this machine did not reach the cloud session before it stopped waiting for it: if the hook's deadline passed the tool call it was judging may have run without it; if the turn was interrupted, nothing ran." : "A hook's decision from this machine could not be delivered to the cloud session, which waits for it until the hook's deadline and then proceeds without it. Interrupt the session if that tool call must not run.";
    case "tool":
      return n === "overtaken" ? "The result of work this machine did for the cloud session (such as a command it ran) did not reach the session before it stopped waiting for it." : "The result of work this machine did for the cloud session (such as a command it ran) could not be delivered; the session waits for it until its deadline and then carries on without it.";
  }
}
class T2e {
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
  replayedRefusalsAnswered = 0;
  seedRequestsArmed = !1;
  securityTierRaiseSeen = !1;
  pendingServedRequests = new Map();
  settledServedRequestIds = new Set();
  errorShapedControlResponseIds = new Set();
  seenControlResponseIds = new Set();
  seenSuccessToolNames = new Map();
  retiredPermissionRequestIds = new Set();
  reinstatablePermissionRequests = new Map();
  reinstatableDialogIds = new Set();
  pendingControlRequests = new Map();
  workerStarting = !1;
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
  sendsNow;
  connections = 0;
  newestOwnMessageSequence = null;
  lastHeld = {
    issued: Promise.resolve(),
    posted: Promise.resolve()
  };
  pendingInterrupt = null;
  constructor(e, n) {
    this.config = e;
    this.callbacks = n;
    if (this.sendsNow = e.seedWorkerSendsNow, e.homeSeed !== void 0 && e.homeSeedHoldsFirstSend !== !1) this.gateSendsOnSettings(e.homeSeed);
    if (e.withheldInitialPrompt !== void 0) {
      let withheldInitialPrompt = e.withheldInitialPrompt;
      queueMicrotask(() => void this.sendWithheldInitialPrompt(withheldInitialPrompt));
    }
  }
  connect() {
    t(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let e = {
      onMessage: (n, s) => this.handleMessage(n, s),
      onConnected: n => {
        t("[RemoteSessionManager] Connected"), this.replayedRefusalsAnswered = 0;
        for (let s of this.undeliveredResponses.values()) if (s.failures = 0, s.giveUpOnSettle === "undelivered") s.giveUpOnSettle = null;
        if (this.resendUndeliveredResponses(), this.workerSeenThisConnection = !1, this.securityTierRaiseSeen) try {
          this.config.rebindEventSigner?.();
        } catch (error) {
          t(`[RemoteSessionManager] rebindEventSigner threw: ${d(error)}`, {
            level: "error"
          });
        }
        if (this.callbacks.onConnected?.(n), !this.seedRequestsArmed && !this.lifetime.signal.aborted) {
          this.seedRequestsArmed = !0;
          let s = this.pendingPermissionRequests.size,
            a = (this.config.seedSubagentRequests ?? []).map(item => M$t(h => this.handleControlRequest(h, {}), item, "RemoteSessionManager, attach seed"));
          if (a.length > 0 && !a.includes(!0)) m("remote_permission_seed_adoption", "handler_threw");else if (a.includes(!1)) p("remote_permission_seed_adoption", "handler_threw");else if (a.length > 0) g("remote_permission_seed_adoption");
          let count_2 = this.pendingPermissionRequests.size - s;
          if (count_2 > 0) i("tengu_remote_subagent_requests_adopted", {
            count: count_2,
            subagents_asking_at_a_turn_end: this.config.seedAskersPastATurn?.length ?? 0
          });
        }
      },
      onClose: n => {
        if (t("[RemoteSessionManager] Disconnected"), this.client?.isRevivable()) this.giveUpUndeliveredResponses();else this.dropUndeliveredResponses();
        this.endWorkerStart(), this.callbacks.onDisconnected?.(n);
      },
      onReconnecting: () => {
        this.workerSeenThisConnection = !1, t("[RemoteSessionManager] Reconnecting"), this.callbacks.onReconnecting?.();
      },
      onStreamSilent: n => this.callbacks.onStreamSilent?.(n),
      onOwnRequestEchoed: (n, s) => {
        let a = this.pendingControlRequests.get(n);
        if (a?.onEchoed) this.pendingControlRequests.set(n, {
          ...a,
          onEchoed: void 0
        }), a.onEchoed(s);
      },
      onWorkerConnectionStatus: n => {
        if (t(`[RemoteSessionManager] The service reports the worker ${n === "connected" || n === "disconnected" ? n : "in an unknown state"}`), n === "connected") this.noteWorkerLive(), this.callbacks.onWorkerConnectionStatus?.(n);else if (n === "disconnected") {
          if (this.workerSeenThisConnection) this.endWorkerStart();
          this.workerSeenThisConnection = !1, this.callbacks.onWorkerGone?.(), this.callbacks.onWorkerConnectionStatus?.(n);
        }
      },
      onSecurityTierRaised: () => {
        this.securityTierRaiseSeen = !0;
      },
      onToolHostEnded: n => {
        t("[RemoteSessionManager] The service ended this session's connection to a computer serving its tools"), this.callbacks.onToolHostEnded?.(n);
      },
      ...{},
      onCatchUpTruncated: () => {
        t("[RemoteSessionManager] Catch-up truncated"), this.callbacks.onCatchUpTruncated?.();
      },
      onError: n => {
        t(`[RemoteSessionManager] Stream error: ${n.message}`, {
          level: "error"
        }), this.callbacks.onError?.(n);
      }
    };
    this.client = new Me(this.config.sessionId, this.config.orgUuid, this.config.getAccessToken, e, this.config.onAuth401, this.config.initialSequenceNum, {
      trackSends: this.config.trackSendsInFlight === !0,
      controlOnly: this.config.controlOnly === !0,
      admitProjectPersonMessages: this.config.admitProjectPersonMessages === !0,
      keepRedialling: () => this.config.keepStreamRedialling === !0 || this.serving,
      withholdTrustedDeviceToken: this.config.consoleProfileBearer === !0,
      ...this.signedOpts({})
    }), this.client.connect();
  }
  handleMessage(e, n = {}) {
    if (L("in", e, n), n.source === "worker" && n.replayed !== !0) this.noteWorkerLive();
    if (n.source === "worker" && e.type === "system" && e.subtype === "init") this.sendsNow = X7n(e);
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
      if (a?.kind === "hook" || a?.kind === "tool") this.giveUp(a, "overtaken");else if (a) this.dropKept(a);else if (this.config.keepUndeliveredResponses === !0 && this.settledForwardedHookIds.has(request_id_2) && !this.hookGiveUpsTold.has(request_id_2)) G(this.hookGiveUpsTold, request_id_2), m("remote_control_response", "overtaken"), this.callbacks.onResponseUndelivered?.(request_id_2, "hook", "overtaken");
      if (this.pendingForwardedHooks.delete(request_id_2)) {
        t(`[RemoteSessionManager] Forwarded hook request cancelled by the worker: ${yk(request_id_2)}`), this.callbacks.onForwardedHookCancelled?.(request_id_2, "worker");
        return;
      }
      if (this.retireServedRequest(request_id_2, "worker")) return;
      if (this.pendingDialogRequests.delete(request_id_2)) {
        t(`[RemoteSessionManager] User dialog request cancelled: ${request_id_2}`), this.callbacks.onUserDialogCancelled?.(request_id_2);
        return;
      }
      let r = this.pendingPermissionRequests.get(request_id_2);
      if (!r) {
        t(`[RemoteSessionManager] control_cancel_request for unknown request ${request_id_2} \u2014 nothing pending, ignoring`);
        return;
      }
      t(`[RemoteSessionManager] Permission request cancelled: ${request_id_2}`), this.retirePermissionRequest(request_id_2), this.callbacks.onPermissionCancelled?.(request_id_2, r.tool_use_id);
      return;
    }
    if (e.type === "system" && e.subtype === "control_request_progress") {
      if (this.pendingControlRequests.has(e.request_id)) this.endWorkerStart();
      let s = this.pendingControlRequests.get(e.request_id);
      if (!s) {
        t(`[RemoteSessionManager] control_request_progress for unknown request ${e.request_id} \u2014 ignoring`);
        return;
      }
      clearTimeout(s.timer);
      let timer = setTimeout(this.onControlRequestTimeout, s.timeoutMs, e.request_id, s.subtype, s.timeoutMs);
      this.pendingControlRequests.set(e.request_id, {
        ...s,
        timer: timer
      }), s.onProgress?.(e);
      return;
    }
    if (e.type === "control_response") {
      let {
          request_id: request_id_3
        } = e.response,
        a = this.config.ignoreErrorShapedDialogReplies === !0 && e.response.subtype === "error",
        r = lt(e.response),
        S = this.seenSuccessToolNames.get(request_id_3) ?? [],
        h = this.pendingPermissionRequests.get(request_id_3),
        y = h !== void 0 && Kot(r, h.tool_name);
      if (a) G(this.errorShapedControlResponseIds, request_id_3);else if (r !== void 0 && S.length < dn && !y) qe(this.seenSuccessToolNames, request_id_3, [...S, r], dt);else if (!y) this.recordSeenControlResponseId(request_id_3);
      let w = this.undeliveredResponses.get(request_id_3);
      if (w !== void 0 && "uuid" in e && e.uuid === w.uuid && w.giveUpOnSettle !== "overtaken") if (this.dropKept(w), w.failures > 0) p("remote_control_response", "recovered");else g("remote_control_response");
      this.pendingModelSwitchIds.delete(request_id_3);
      let R = this.pendingControlRequests.get(request_id_3);
      if (R) {
        if (this.pendingControlRequests.delete(request_id_3), clearTimeout(R.timer), R.removeAbortListener?.(), this.endWorkerStart(), e.response.subtype === "success") R.resolve(e.response.response);else R.reject(DSs(e.response));
      } else {
        let k = this.pendingPermissionRequests.get(request_id_3);
        if (k) {
          if (y) {
            t(`[RemoteSessionManager] Permission response ${request_id_3} has mismatched toolName \u2014 worker will drop it, keeping prompt`);
            return;
          }
          this.retirePermissionRequest(request_id_3), t(`[RemoteSessionManager] Permission request ${request_id_3} answered elsewhere \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(request_id_3, k.tool_use_id);
        } else if (this.pendingDialogRequests.has(request_id_3)) {
          if (a) t(`[RemoteSessionManager] User dialog request ${request_id_3} got an error-shaped reply elsewhere \u2014 worker still waiting, keeping it`);else this.pendingDialogRequests.delete(request_id_3), t(`[RemoteSessionManager] User dialog request ${request_id_3} answered elsewhere \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(request_id_3);
        } else if (this.pendingForwardedHooks.has(request_id_3)) t(`[RemoteSessionManager] Ignoring a peer control_response (${e.response.subtype}) for forwarded hook request ${yk(request_id_3)} \u2014 still answering it here`);else if (!this.settledServedRequestIds.has(request_id_3)) t(`[RemoteSessionManager] Unmatched control_response ${request_id_3} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`);
      }
      if (this.config.rearmRedeliveredPermissionRequests === !0) this.rearmRedelivered(e.response.pending_permission_requests, "can_use_tool", this.pendingPermissionRequests);
      this.rearmRedelivered(e.response.pending_user_dialog_requests, "request_user_dialog", this.pendingDialogRequests);
      return;
    }
    if (this.config.keepOwnModelSwitchBreadcrumb !== !0 && this.pendingModelSwitchIds.size > 0 && e.type === "user" && "isReplay" in e && e.isReplay === !0 && typeof e.message?.content === "string" && e.message.content.startsWith($Ot)) {
      let [s] = this.pendingModelSwitchIds;
      this.pendingModelSwitchIds.delete(s), t("[RemoteSessionManager] Dropped own set_model breadcrumb echo");
      return;
    }
    if (e.type === "result") {
      if (this.sentAMessage || this.config.homeSeedHoldsFirstSend !== !1 || this.config.initialPromptUuid !== void 0) this.config.homeSeed?.afterFirstReply(this.lifetime.signal);
      let s = [...this.pendingPermissionRequests],
        r = this.config.subagentRequestsOutliveTheTurn === !0 ? s.filter(([, S]) => !Pye(S)) : s;
      for (let [S, h] of r) t(`[RemoteSessionManager] Turn ended with permission request ${S} unresolved \u2014 dismissing`), this.callbacks.onPermissionCancelled?.(S, h.tool_use_id), this.retirePermissionRequest(S), qe(this.reinstatablePermissionRequests, S, h);
      if (s.length > 0 && n.replayed !== !0) {
        let from_subagents = F(s, ([, h]) => Pye(h));
        i("tengu_remote_turn_ended_with_open_permission_requests", {
          from_main_thread: s.length - from_subagents,
          from_subagents: from_subagents,
          kept_open: s.length - r.length
        });
      }
      for (let S of this.pendingDialogRequests) t(`[RemoteSessionManager] Turn ended with user dialog request ${S} unresolved \u2014 dismissing`), this.callbacks.onUserDialogCancelled?.(S), G(this.reinstatableDialogIds, S);
      this.pendingDialogRequests.clear();
    }
    this.callbacks.onMessage(e, n);
  }
  retirePermissionRequest(e) {
    this.pendingPermissionRequests.delete(e), this.retiredPermissionRequestIds.add(e);
  }
  rearmRedelivered(e, n, s) {
    if (!Array.isArray(e)) return;
    e.slice(0, Q7n).forEach(item => {
      let r = OGr(item, n);
      if (r === null) return;
      let S = this.seenSuccessToolNames.get(r.request_id),
        {
          request: request_2
        } = r;
      if (this.seenControlResponseIds.has(r.request_id) || n === "can_use_tool" && this.errorShapedControlResponseIds.has(r.request_id) || S !== void 0 && !(request_2.subtype === "can_use_tool" && S.every(item => Kot(item, request_2.tool_name)))) {
        t(`[RemoteSessionManager] Redelivered ${n} ${yk(r.request_id)} already answered \u2014 skipping`);
        return;
      }
      let reinstated = !1;
      if (n === "can_use_tool" && this.retiredPermissionRequestIds.has(r.request_id)) {
        let R = this.reinstatablePermissionRequests.get(r.request_id);
        if (R === void 0) {
          t(`[RemoteSessionManager] Redelivered can_use_tool ${yk(r.request_id)} already retired here \u2014 skipping`);
          return;
        }
        if (this.reinstatablePermissionRequests.delete(r.request_id), !tt(R, r.request)) {
          m("remote_permission_request", "redelivered_mismatch"), t(`[RemoteSessionManager] Redelivered can_use_tool ${yk(r.request_id)} differs from the request first shown under that id \u2014 not arming it`, {
            level: "warn"
          });
          return;
        }
        this.retiredPermissionRequestIds.delete(r.request_id), reinstated = !0;
      } else if (n === "request_user_dialog") reinstated = this.reinstatableDialogIds.has(r.request_id);
      let w = s.has(r.request_id);
      if (this.handleControlRequest(r, {}, {
        reinstated: reinstated
      }), !w && s.has(r.request_id)) this.reinstatableDialogIds.delete(r.request_id), g(n === "can_use_tool" ? "remote_permission_redelivery" : "remote_dialog_redelivery");
    });
  }
  recordSeenControlResponseId(e) {
    G(this.seenControlResponseIds, e);
  }
  recordSettledForwardedHookId(e) {
    G(this.settledForwardedHookIds, e);
  }
  handleControlRequest(e, {
    ageMs: ageMs,
    attestationStatus: attestationStatus,
    modeStamp: modeStamp_2,
    replayed: replayed
  }, S) {
    let {
        request_id: h,
        request: request_3
      } = e,
      w = {
        replayed: replayed,
        ageMs: ageMs
      },
      R = typeof request_3 === "object" && request_3 !== null && Object.hasOwn(request_3, "subtype") ? request_3.subtype : void 0,
      k = ZPr(R, $e);
    if (k !== void 0) {
      let b = xe.find(item => item === R);
      if (this.refuseControlRequest(h, b !== void 0 ? `${b}, which another client answers,` : `a control request of a kind no client of this build handles (${k.length} characters, sha12 ${k.hash}${k.variantOfListed ? ", a variant of a listed kind" : ""})`, w), b === void 0) this.callbacks.onControlRequestRefused?.(k);
      return;
    }
    if (typeof h !== "string") {
      this.refuseControlRequest(h, `${request_3.subtype} with an id that is not a string`, w);
      return;
    }
    if (request_3.subtype === "can_use_tool") {
      t(`[RemoteSessionManager] Permission request for tool: ${request_3.tool_name}`);
      let b = this.pendingPermissionRequests.get(h);
      if (b !== void 0) {
        if (tt(b, request_3)) t(`[RemoteSessionManager] Duplicate permission request ${yk(String(h))} \u2014 already pending, skipping`);else m("remote_permission_request", "redelivered_mismatch"), t(`[RemoteSessionManager] Permission request ${yk(String(h))} redelivered with a different body (${yk(String(request_3.tool_name))}) \u2014 keeping the one first shown (${yk(b.tool_name)})`, {
          level: "warn"
        });
        return;
      }
      if (this.retiredPermissionRequestIds.has(h)) {
        if (this.config.seedSubagentRequests?.some(K => K.request_id === h) !== !0) m("remote_permission_request", "retired_id_rearmed");
        t(`[RemoteSessionManager] Permission request ${yk(String(h))} arrived again after it was retired here \u2014 not arming it`, {
          level: "warn"
        });
        return;
      }
      let E = request_3;
      try {
        E = structuredClone(request_3);
      } catch {
        E = request_3;
      }
      this.pendingPermissionRequests.set(h, E), this.callbacks.onPermissionRequest(request_3, h, S);
      return;
    }
    if (request_3.subtype === "request_user_dialog") {
      if (this.pendingDialogRequests.has(h)) {
        t(`[RemoteSessionManager] Duplicate user dialog request ${h} \u2014 already pending, skipping`);
        return;
      }
      t(`[RemoteSessionManager] User dialog request: ${request_3.dialog_kind}`), this.pendingDialogRequests.add(h), this.callbacks.onUserDialogRequest(request_3, h, S);
      return;
    }
    if (request_3.subtype === "hook_callback" && yn(request_3)) {
      let onForwardedHookCallback = this.callbacks.onForwardedHookCallback;
      if (!onForwardedHookCallback) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${yk(h)} \u2014 not serving device hooks here, leaving it unanswered`);
        return;
      }
      if (h.length > ue || request_3.callback_id.length > ue) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${yk(h)} \u2014 an id longer than ${ue} characters, leaving it unanswered`);
        return;
      }
      let E = {
          requestId: h,
          callbackId: request_3.callback_id,
          input: request_3.input,
          ...(typeof request_3.issued_at === "number" && {
            issuedAt: request_3.issued_at
          }),
          ...(typeof request_3.deadline_ms === "number" && {
            deadlineMs: request_3.deadline_ms
          }),
          ageMs: ageMs,
          ...(attestationStatus !== void 0 && {
            attestationStatus: attestationStatus
          })
        },
        onUndeliveredHookReplayed = this.callbacks.onUndeliveredHookReplayed;
      if (onUndeliveredHookReplayed && this.undeliveredHookIds.delete(h)) {
        this.hookGiveUpsTold.delete(h), this.pendingForwardedHooks.add(h), onUndeliveredHookReplayed(E);
        return;
      }
      if (this.settledForwardedHookIds.has(h) || this.pendingForwardedHooks.has(h)) {
        t(`[RemoteSessionManager] Forwarded hook_callback ${yk(h)} already answered or in hand \u2014 skipping`);
        return;
      }
      this.pendingForwardedHooks.add(h), onForwardedHookCallback(E);
      return;
    }
    if (Rn(request_3)) {
      let onServedChannelRequest = this.callbacks.onServedChannelRequest;
      if (!onServedChannelRequest) {
        t(`[RemoteSessionManager] ${request_3.subtype} ${yk(h)} \u2014 not serving tools here, leaving it unanswered`);
        return;
      }
      if (h.length > ue) {
        t(`[RemoteSessionManager] ${request_3.subtype} ${yk(h)} \u2014 an id longer than ${ue} characters, leaving it unanswered`);
        return;
      }
      if (this.settledServedRequestIds.has(h) || this.pendingServedRequests.has(h)) {
        t(`[RemoteSessionManager] ${request_3.subtype} ${yk(h)} already answered or in hand \u2014 skipping`);
        return;
      }
      let E = new AbortController();
      this.pendingServedRequests.set(h, {
        abort: E,
        subtype: request_3.subtype
      }), onServedChannelRequest({
        requestId: h,
        subtype: request_3.subtype,
        request: request_3,
        signal: E.signal,
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
    this.refuseControlRequest(h, `${request_3.subtype} in a shape this client has no handler for`, w);
  }
  refuseControlRequest(request_id_4, n, {
    replayed: replayed_2,
    ageMs: ageMs_2
  }) {
    let r = replayed_2 === !0 && (ageMs_2 === void 0 || ageMs_2 > pn || this.replayedRefusalsAnswered >= hn);
    if (this.config.controlOnly === !0 || typeof request_id_4 !== "string" || r) {
      t(`[RemoteSessionManager] ${n}${typeof request_id_4 === "string" ? ` ${yk(request_id_4)}` : ""} \u2014 leaving it unanswered`);
      return;
    }
    if (replayed_2 === !0) this.replayedRefusalsAnswered++;
    t(`[RemoteSessionManager] ${n} ${yk(request_id_4)} \u2014 answering that it is not supported`), this.sendResponse({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: request_id_4,
        error: error_2
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
    return this.send(e, n, (a, r) => SEe(this.config.sessionId, a, this.signedOpts(r)), !1, s);
  }
  async sendMessageVia(e, n, s) {
    return this.send(e, n, s, !0);
  }
  async send(content_4, opts, s, a, r) {
    t(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`), this.reviveStreamForUserSend(), L("out", {
      kind: "sendMessage",
      content: content_4,
      opts: opts
    });
    let S = this.currentSendGates(),
      h = !a && S.length === 0 && this.chainedSends === 0,
      y = null,
      w = s,
      R;
    try {
      R = await (h ? w(content_4, opts) : this.sendBehindGates(S, content_4, opts, w, r));
    } catch (error) {
      throw t(`[RemoteSessionManager] Send to session ${this.config.sessionId} threw: ${d(error)}`, {
        level: "error"
      }), m("remote_send_message", "remote_send_message_threw"), error;
    }
    if (!R.ok && R.withheld) t(`[RemoteSessionManager] Message withheld by a send gate: ${R.reason}`), p("remote_send_message", R.reason === reason_7 ? "remote_send_message_cancelled" : R.reason === reason_6 ? "remote_send_message_withdrawn" : "remote_send_message_withheld");else if (!R.ok) t(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${R.reason}`, {
      level: "error"
    }), m("remote_send_message", "remote_send_message_failed");else g("remote_send_message"), this.sentAMessage = !0;
    return R;
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
      s = Fe(e, {
        retire: () => n(),
        noticeAfterMs: this.config.homeSeedWaitNoticeMs,
        typedAheadGraceMs: this.config.homeSeedTypedAheadGraceMs
      });
    if (s === null) return;
    n = this.addSendGate(a => (a.released.then(() => {
      if (!a.exiting()) this.firstSendReleased = !0;
    }), s(a)), {
      onRelease: "withhold",
      onExit: "await"
    });
  }
  async sendWithheldInitialPrompt(e) {
    if (e.sent) return;
    e.sent = !0;
    let n = Date.now(),
      s = this.config.withheldPromptBackoffMs ?? mn,
      attempts = 0,
      r,
      S = async (E, O) => {
        attempts += 1, r ??= Date.now();
        let K = await SEe(this.config.sessionId, E, this.signedOpts(O));
        if (K.ok || attempts >= fn || !_n(ce(K)) || this.firstSendReleased || Date.now() - r > (this.config.withheldPromptRetryWindowMs ?? gn)) return K;
        if (await Y(s * attempts, this.lifetime.signal), this.exitFlushRequested && !this.firstSendReleased) return attempts += 1, SEe(this.config.sessionId, E, this.signedOpts(O));
        return this.lifetime.signal.aborted || this.firstSendReleased ? K : S(E, O);
      },
      h = this.send(e.content, {
        uuid: e.uuid
      }, S, !0, 0).catch(E => ({
        ok: !1,
        reason: d(E)
      }));
    this.withheldPromptInFlight = h.then(() => {
      return;
    }, () => {
      return;
    });
    let y = await h;
    this.withheldPromptInFlight = null;
    let w = this.lifetime.signal.aborted && !y.ok;
    if (i("tengu_home_seed_prompt_resequenced", {
      success: y.ok,
      withheld_for: c(e.followsPermissionMode ? "signed_send" : e.heldOnlyForToolsCheck ? "tools_check" : this.config.homeSeed !== void 0 ? "home_seed" : "other"),
      attempts: attempts,
      reason: c(y.ok ? "ok" : w ? "aborted" : ce(y)),
      duration_ms: Date.now() - n
    }), y.ok) e.sent = !0, this.callbacks.onWithheldPromptSent?.();
    if (w || y.ok) return;
    let R = ce(y),
      k = R === "timeout" || R === "network" || R === "unknown",
      b;
    switch (R) {
      case "withheld":
      case "not_first_party":
        b = y.reason;
        break;
      case "http_429":
        b = "the service is busy";
        break;
      case "http_4xx":
        b = y.advice ?? `the service refused it, HTTP ${String(y.status)}`;
        break;
      case "server":
        b = "the service had an error";
        break;
      case "timeout":
      case "network":
        b = ut[R];
        break;
      case "unknown":
        b = y.advice ?? "";
        break;
    }
    if (this.callbacks.onWithheldPromptFailed) this.callbacks.onWithheldPromptFailed(b, k);else {
      let E = b === "" ? "" : `: ${b.replace(/\.+$/, "")}`;
      this.config.homeSeed?.status.publish(k ? `Your first message may not have reached the cloud session${E}. If Claude doesn't respond to it soon, send it again` : `Couldn't send your first message${E}`, "warning");
    }
  }
  currentSendGates() {
    return [...[], ...this.sendGates];
  }
  async sendBehindGates(e, n, s, a, submittedAtMs) {
    this.chainedSends++;
    let S = !1,
      h = !1,
      y = !1,
      w = () => {},
      R = new Promise(q => {
        w = q;
      }),
      release = (q, x) => {
        S = q, h = x, y = !0, w(), this.tellWithholdableHeld();
      },
      b = () => {},
      E = new Promise(q => {
        b = q;
      }),
      O = () => {},
      K = new Promise(q => {
        O = q;
      }),
      ye = {
        messageUuid: s?.uuid,
        ...(submittedAtMs !== void 0 && {
          submittedAtMs: submittedAtMs
        }),
        released: R,
        withdrawn: E,
        exiting: () => S,
        final: () => h,
        decided: K
      },
      P = () => {},
      W = new Promise(q => {
        P = q;
      }),
      lastHeld = this.lastHeld,
      Q = () => {},
      ie = !1,
      X = !1,
      Z = e.map(() => {
        return;
      }),
      te = new Set(e),
      ee = e.map((item, index) => kn(item.gate, ye).then(V => (Z[index] = V, te.delete(item), this.tellWithholdableHeld(), V))),
      promise = new Promise(q => {
        for (let x of ee) x.then(V => {
          if (V !== void 0) q(V);
        });
      }),
      B = Promise.race([Promise.all(ee).then(ve), promise, R.then(() => ve(Z) ?? at(te, S) ?? Promise.all(ee.filter((item, index) => S && e[index]?.onExit === "await")).then(ve)), E.then(() => it(!0))]),
      ae = () => {
        y = !0, O(), this.tellWithholdableHeld();
      };
    B.then(ae, ae);
    let posted_2 = B.then(q => Promise.race([lastHeld.posted, R.then(() => lastHeld.issued)]).then(() => q)).then(q => {
        let x = q ?? it(ie);
        if (Q(), X = !0, P(), x !== void 0) return rt(x);
        return this.reviveStreamForUserSend(), a(n, s);
      }),
      N = {
        messageUuid: s?.uuid,
        release: release,
        issuedYet: () => X,
        settledYet: () => y,
        withheldOnRelease: () => ve(Z) !== void 0 || at(te, !1) !== void 0,
        withdraw: () => {
          ie = !0, Q(), b();
        },
        issued: W,
        posted: posted_2
      };
    return this.lastHeld = {
      issued: W,
      posted: posted_2.then(() => {
        return;
      }, () => {
        return;
      })
    }, this.heldSends.add(N), Q = () => {
      this.heldSends.delete(N), this.tellWithholdableHeld();
    }, Y(0, this.lifetime.signal).then(() => this.tellWithholdableHeld()), posted_2.then(() => this.leaveChain(N, P), () => this.leaveChain(N, P)), B.then(q => q === void 0 ? posted_2 : rt(q));
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
  countWithholdableHeldSends() {
    return this.withholdableHeldSends().length;
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
      l(Error(`[RemoteSessionManager] onWithholdableHeldChanged listener failed: ${d(error)}`));
    }
  }
  async releaseHeldSends(e = Sn, {
    exiting: exiting_2 = !1,
    final: final_2 = !1,
    keepWithheld = !1
  } = {}) {
    if (exiting_2) this.exitFlushRequested = !0;
    let r = [...this.heldSends].filter(item => !(keepWithheld && item.withheldOnRelease()));
    r.forEach(item => item.release(exiting_2, final_2));
    let S = r.map(() => ({
      kind: "waiting"
    }));
    return await je(Promise.allSettled([...r.map((item, index) => item.posted.then(w => {
      S[index] = Cn(w);
    }, () => {
      S[index] = {
        kind: "unconfirmed"
      };
    })), ...(this.withheldPromptInFlight ? [this.withheldPromptInFlight] : [])]), e), r.forEach((item, index) => {
      if (S[index]?.kind !== "waiting") return;
      if (item.issuedYet()) S[index] = {
        kind: "unconfirmed"
      };else if (final_2) item.withdraw(), S[index] = {
        kind: "unsent"
      };
    }), {
      unsent: F(S, h => h.kind === "unsent"),
      refused: S.flatMap(item => item.kind === "refused" ? [item.reason] : []),
      unconfirmed: F(S, h => h.kind === "unconfirmed"),
      stillHeld: F(S, h => h.kind === "waiting")
    };
  }
  async sendBashCommand(e, n) {
    t(`[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`), this.reviveStreamForUserSend();
    let s = await fDo(this.config.sessionId, e, this.signedOpts(n));
    if (!s.ok) t(`[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${s.reason}`, {
      level: "error"
    }), m("remote_send_bash", "remote_send_bash_failed");else g("remote_send_bash");
    return s;
  }
  reviveStreamForUserSend() {
    if (this.client?.reviveAfterExhaustion()) this.callbacks.onReconnecting?.();
  }
  sendResponse(response_4, kind, s, a) {
    let client = this.client;
    if (!client) return;
    let S = performance.now(),
      h = a === void 0 ? void 0 : k => {
        try {
          a(k, Math.round(performance.now() - S));
        } catch (error) {
          t(`[RemoteSessionManager] An answer's post listener threw; the answer's fate is unchanged: ${d(error)}`, {
            level: "warn"
          });
        }
        return k;
      };
    if (kind === null || this.config.keepUndeliveredResponses !== !0) {
      let k = client.sendControlResponse(response_4, void 0, ot(kind));
      h === void 0 || k.then(h);
      return;
    }
    let request_id_5 = response_4.response.request_id,
      R = this.undeliveredResponses.get(request_id_5) ?? {
        response: response_4,
        kind: kind,
        uuid: et(),
        failures: 0,
        inFlight: !1,
        giveUpOnSettle: null,
        timer: null,
        told: !1
      };
    if (R.response = response_4, s !== void 0) R.request = s;
    this.undeliveredResponses.set(request_id_5, R), this.postKeptResponse(client, R, h);
  }
  postKeptResponse(e, n, s) {
    n.inFlight = !0;
    let a = e.sendControlResponse(n.response, n.uuid, ot(n.kind));
    (s === void 0 ? a : a.then(s)).then(r => this.settleResponsePost(n, r), r => {
      t(`[RemoteSessionManager] Posting an answer threw: ${d(r)}`, {
        level: "warn"
      }), this.settleResponsePost(n, {
        outcome: "failed",
        cause: "network"
      });
    });
  }
  settleResponsePost(e, n) {
    e.inFlight = !1;
    let request_id_6 = e.response.response.request_id;
    if (this.undeliveredResponses.get(request_id_6) !== e) return;
    if (n.outcome === "accepted") {
      if (e.giveUpOnSettle === "overtaken") {
        this.giveUp(e, "overtaken");
        return;
      }
      if (this.dropKept(e), e.standIn) return;
      if (e.failures > 0 || e.giveUpOnSettle !== null) p("remote_control_response", "recovered");else g("remote_control_response");
      return;
    }
    if (e.giveUpOnSettle !== null) {
      this.giveUp(e, e.giveUpOnSettle);
      return;
    }
    if (n.outcome === "session_inactive" || n.outcome === "failed" && n.cause === "http" && n.status === 404) {
      this.dropKept(e), t(`[RemoteSessionManager] Answer for ${yk(request_id_6)} has no session to go to (${n.outcome === "failed" && n.cause === "http" ? `http ${n.status}` : "session not active"}); dropped`), p("remote_control_response", "session_gone");
      return;
    }
    if (n.outcome === "failed" && n.cause === "closed") {
      if (!this.client?.isRevivable()) this.giveUp(e);
      return;
    }
    if (n.outcome === "failed" && n.cause === "http" && n.status < 500 && n.status !== 408 && n.status !== 429) {
      if (this.postRefusalStandIn(e, n)) return;
      t(`[RemoteSessionManager] Answer for ${yk(request_id_6)} was refused by the service (http ${n.status}); not re-sending`, {
        level: "warn"
      }), this.giveUp(e, "undelivered", "refused");
      return;
    }
    if (!this.client?.isConnected()) {
      t(`[RemoteSessionManager] Answer for ${yk(request_id_6)} did not reach the session while the stream is down; it goes again at reconnect`);
      return;
    }
    if (e.failures += 1, e.failures > st) {
      t(`[RemoteSessionManager] Answer for ${yk(request_id_6)} could not be delivered after ${e.failures} attempts; giving up`, {
        level: "warn"
      }), this.giveUp(e);
      return;
    }
    if (e.failures === 1) p("remote_control_response", "resend");
    this.scheduleResponseResend(e);
  }
  postRefusalStandIn(e, n) {
    let client_2 = this.client,
      response_5 = e.response.response;
    if (e.kind !== "tool" || e.standIn || client_2 === null || response_5.subtype !== "success" || n.status === 401 || n.status === 403) return !1;
    let bytes = Buffer.byteLength(_(response_5.response), "utf8");
    return t(`[RemoteSessionManager] Answer for ${yk(response_5.request_id)} was refused by the service (http ${n.status}${n.tooLarge ? `, too large: this machine's configured limit is ${kvt()} bytes, so the service's is lower` : ""}, ${bytes} bytes); sending an error in its place`, {
      level: "warn"
    }), p("remote_control_response", n.tooLarge ? "refused_too_large" : "refused_stand_in"), e.response = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: response_5.request_id,
        response: {
          result: z5o({
            answer: response_5.response,
            bytes: bytes,
            status: n.status,
            tooLarge: n.tooLarge === !0
          })
        }
      }
    }, e.uuid = et(), e.standIn = !0, e.failures = 0, L("out", e.response), this.postKeptResponse(client_2, e), !0;
  }
  dropKept(e) {
    this.clearResendTimer(e), this.undeliveredResponses.delete(e.response.response.request_id);
  }
  giveUp(e, n = "undelivered", s = n) {
    let request_id_7 = e.response.response.request_id;
    if (e.inFlight) {
      if (e.giveUpOnSettle !== "overtaken") e.giveUpOnSettle = n;
      return;
    }
    if (this.dropKept(e), e.kind === "hook") G(this.hookGiveUpsTold, request_id_7);
    if (n === "undelivered" && (e.kind === "dialog" || e.kind === "permission")) if (this.seenControlResponseIds.delete(request_id_7), e.kind === "permission") {
      if (e.request !== void 0) qe(this.reinstatablePermissionRequests, request_id_7, e.request);
    } else G(this.reinstatableDialogIds, request_id_7);
    if (n === "undelivered" && e.kind === "hook" && s !== "refused") G(this.undeliveredHookIds, request_id_7);
    if (m("remote_control_response", s), e.told) return;
    e.told = !0, this.callbacks.onResponseUndelivered?.(request_id_7, e.kind, n);
  }
  scheduleResponseResend(e) {
    this.clearResendTimer(e);
    let n = ct[Math.min(e.failures, st) - 1] ?? 45000;
    e.timer = setTimeout(this.resendOnTimer, n, e.response.response.request_id);
  }
  resendOnTimer = e => {
    let n = this.undeliveredResponses.get(e),
      client_3 = this.client;
    if (!n || !client_3) return;
    if (n.timer = null, !n.inFlight) L("out", n.response), this.postKeptResponse(client_3, n);
  };
  clearResendTimer(e) {
    if (e.timer !== null) clearTimeout(e.timer), e.timer = null;
  }
  resendUndeliveredResponses() {
    let client_4 = this.client;
    if (!client_4) return;
    for (let n of this.undeliveredResponses.values()) if (this.clearResendTimer(n), !n.inFlight) L("out", n.response), this.postKeptResponse(client_4, n);
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
      l(Error(`[RemoteSessionManager] No pending permission request with ID: ${e}`)), m("remote_permission_respond", "remote_permission_respond_no_pending");
      return;
    }
    this.retirePermissionRequest(e), this.recordSeenControlResponseId(e), this.reviveStreamForUserSend();
    let a = this.config.nameRepositoryTrustAnswers === !0 && nBe(s.tool_name),
      r = this.config.pinComputerFolderAllow?.() === !0 && mG(s.tool_name),
      S = (a || r) && n.behavior === "allow" ? {
        behavior: "allow",
        updatedInput: s.input,
        ...(n.toolUseID !== void 0 && {
          toolUseID: n.toolUseID
        })
      } : n,
      h = D$t(e, S, this.config.nameToolOnPermissionAllow === !0 || a ? s.tool_name : void 0, a && n.behavior === "deny" && n.decisionClassification === "user_reject");
    t(`[RemoteSessionManager] Sending permission response: ${n.behavior}`), L("out", h), this.sendResponse(h, "permission", s), g("remote_permission_respond");
  }
  respondToUserDialogRequest(request_id_8, response_6) {
    if (!this.pendingDialogRequests.delete(request_id_8)) {
      l(Error(`[RemoteSessionManager] No pending user dialog request with ID: ${request_id_8}`)), m("remote_dialog_respond", "remote_dialog_respond_no_pending");
      return;
    }
    this.recordSeenControlResponseId(request_id_8), this.reviveStreamForUserSend();
    let s = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_8,
        response: response_6
      }
    };
    t(`[RemoteSessionManager] Sending user dialog response: ${response_6.behavior}`), L("out", s), this.sendResponse(s, "dialog"), g("remote_dialog_respond");
  }
  releaseForwardedHook(e) {
    if (this.pendingForwardedHooks.delete(e), this.settledForwardedHookIds.has(e)) G(this.hookGiveUpsTold, e);
  }
  respondToForwardedHook(request_id_9, response_7) {
    if (!this.pendingForwardedHooks.delete(request_id_9)) return t(`[RemoteSessionManager] Forwarded hook request ${yk(request_id_9)} is no longer pending \u2014 answer not sent`), !1;
    if (!this.client) return !1;
    this.recordSeenControlResponseId(request_id_9), this.recordSettledForwardedHookId(request_id_9), this.reviveStreamForUserSend();
    let a = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_9,
        response: response_7
      }
    };
    return L("out", a), this.sendResponse(a, "hook"), !0;
  }
  respondToServedChannelRequest(request_id_10, n, s) {
    let a = this.pendingServedRequests.get(request_id_10);
    if (!a) return t(`[RemoteSessionManager] served request ${yk(request_id_10)} is no longer pending \u2014 result not sent`), !1;
    if (this.pendingServedRequests.delete(request_id_10), !this.client) return !1;
    this.recordSeenControlResponseId(request_id_10), G(this.settledServedRequestIds, request_id_10), this.reviveStreamForUserSend();
    let S = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: request_id_10,
        response: wn(n)
      }
    };
    return L("out", S), this.sendResponse(S, a.subtype === "remote_tools_probe" ? null : "tool", void 0, s), !0;
  }
  releaseServedChannelRequest(e) {
    this.pendingServedRequests.delete(e);
  }
  retireServedRequest(e, n) {
    let s = this.pendingServedRequests.get(e);
    if (!s) return !1;
    return this.pendingServedRequests.delete(e), t(`[RemoteSessionManager] served request ${yk(e)} ${n === "worker" ? "cancelled by the worker" : "dropped with the stream"}`), s.abort.abort(), this.callbacks.onServedChannelRequestCancelled?.(e, n), !0;
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
  sendsInFlight() {
    return this.client?.sendsInFlight() ?? {
      count: 0,
      settled: Promise.resolve()
    };
  }
  flushSends(e) {
    return this.client?.flushSends(e) ?? Promise.resolve();
  }
  cancelSession() {
    t("[RemoteSessionManager] Sending interrupt signal"), this.firstSendReleased = !0, this.reviveStreamForUserSend();
    let e = () => {
      L("out", {
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
      r = async () => {
        let h = null;
        try {
          if (n?.signal?.aborted) throw new Ke();
          if (!n?.background) this.reviveStreamForUserSend();
          if (L("out", {
            kind: "control_request",
            ...e
          }), h = this.client?.postControlRequest(e, this.onControlRequestPostFailed) ?? null, h === null) throw Error("[RemoteSessionManager] Cannot send: not connected");
        } finally {
          if (h === null) resolve(nt);
        }
        return h.posted.then(resolve, () => resolve(nt)), this.awaitControlResponse(h.requestId, e, n);
      },
      response_8 = n?.answerExpected === !1 ? r() : MSs("remote_control_rpc", r);
    return {
      posted: s,
      response: response_8
    };
  }
  awaitControlResponse(e, n, s) {
    if (n.subtype === "set_model") this.pendingModelSwitchIds.add(e);
    let timeoutMs = Ne(n.subtype, s?.timeoutMs),
      awaitingWorker = this.workerStarting ? s?.awaitWorkerStart : void 0,
      S = awaitingWorker ? Math.max(Y7n, timeoutMs) : timeoutMs;
    return new Promise((h, reject) => {
      let timer_2 = setTimeout(this.onControlRequestTimeout, S, e, n.subtype, S),
        R = s?.signal,
        k = R ? () => this.cancelControlRequest(e) : void 0;
      if (R && k) R.addEventListener("abort", k, {
        once: !0
      });
      if (this.pendingControlRequests.set(e, {
        resolve: b => h(b),
        reject: reject,
        timer: timer_2,
        timeoutMs: timeoutMs,
        subtype: n.subtype,
        onProgress: s?.onProgress,
        removeAbortListener: R && k ? () => R.removeEventListener("abort", k) : void 0,
        ...(s?.background && {
          background: !0
        }),
        ...(s?.onEchoed && {
          onEchoed: s.onEchoed
        }),
        ...(awaitingWorker && {
          awaitingWorker: awaitingWorker
        })
      }), awaitingWorker) t(`[RemoteSessionManager] control_request ${e} (${n.subtype}) waits for the worker; its ${timeoutMs / 1000}s limit starts when that wait ends`), this.tellAwaitingWorker(awaitingWorker, !0);
    });
  }
  workerSendsNow() {
    return this.sendsNow;
  }
  hasPostedMessage() {
    return this.sentAMessage;
  }
  beginWorkerStart() {
    this.workerStarting = !0;
  }
  endWorkerStart() {
    if (!this.workerStarting) return;
    this.workerStarting = !1;
    let e = [];
    for (let [n, s] of this.pendingControlRequests) {
      if (s.awaitingWorker === void 0) continue;
      clearTimeout(s.timer);
      let timer_3 = setTimeout(this.onControlRequestTimeout, s.timeoutMs, n, s.subtype, s.timeoutMs);
      this.pendingControlRequests.set(n, {
        ...s,
        timer: timer_3,
        awaitingWorker: void 0
      }), e.push(s.awaitingWorker);
    }
    t(`[RemoteSessionManager] The wait for the worker ended; ${e.length} waiting control request(s) start their own limit`);
    for (let n of e) this.tellAwaitingWorker(n, !1);
  }
  tellAwaitingWorker(e, n) {
    try {
      e.onChange(n);
    } catch (error) {
      l(error);
    }
  }
  onControlRequestPostFailed = e => {
    this.pendingModelSwitchIds.delete(e);
    let n = this.pendingControlRequests.get(e);
    if (!n) return;
    this.pendingControlRequests.delete(e), clearTimeout(n.timer), n.removeAbortListener?.(), t(`[RemoteSessionManager] control_request ${e} (${n.subtype}) was not delivered \u2014 failing it`, {
      level: "warn"
    }), n.reject(new vwe(n.subtype));
  };
  onControlRequestTimeout = (e, n, s) => {
    this.pendingModelSwitchIds.delete(e);
    let a = this.pendingControlRequests.get(e);
    if (!a) return;
    if (this.pendingControlRequests.delete(e), a.removeAbortListener?.(), a.awaitingWorker !== void 0) this.endWorkerStart();
    a.reject(new X0(n, s));
  };
  cancelControlRequest(requestId) {
    let n = this.pendingControlRequests.get(requestId);
    if (!n) return;
    if (!n.background) this.reviveStreamForUserSend();
    this.pendingControlRequests.delete(requestId), this.pendingModelSwitchIds.delete(requestId), clearTimeout(n.timer), t(`[RemoteSessionManager] Cancelling control request ${requestId} (${n.subtype})`), L("out", {
      kind: "control_cancel_request",
      requestId: requestId
    }), this.client?.sendControlCancelRequest(requestId), n.reject(new Ke());
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
    this.undeliveredResponses.clear(), this.undeliveredHookIds.clear(), this.hookGiveUpsTold.clear(), this.pendingPermissionRequests.clear(), this.pendingDialogRequests.clear();
    for (let n of this.pendingForwardedHooks) this.callbacks.onForwardedHookCancelled?.(n, "disconnected");
    this.pendingForwardedHooks.clear();
    for (let n of [...this.pendingServedRequests.keys()]) this.retireServedRequest(n, "disconnected");
    this.workerSeenThisConnection = !1, this.workerStarting = !1;
    for (let n of this.pendingControlRequests.values()) clearTimeout(n.timer), n.removeAbortListener?.(), n.reject(Error("[RemoteSessionManager] Disconnected"));
    this.pendingControlRequests.clear(), this.pendingModelSwitchIds.clear();
  }
  reconnect() {
    t("[RemoteSessionManager] Reconnecting SSE stream"), this.client?.reconnect();
  }
  reconnectAfterSuspend() {
    this.client?.reconnectAfterSuspend();
  }
}
function yn(e) {
  return typeof e.callback_id === "string" && (typeof e.issued_at === "number" || typeof e.deadline_ms === "number" || Nye(e.callback_id) !== null);
}
function Rn(e) {
  return Qbe.includes(e.subtype);
}
function ot(e) {
  return e === "tool" ? {
    timeoutMs: timeoutMs_2
  } : {};
}
function wn(e) {
  let n = Buffer.byteLength(_(e), "utf8"),
    s = kvt();
  if (n <= s) return e;
  return {
    result: {
      content: [{
        type: "text",
        text: `(the result was too large to return: ${n} bytes, over the ${s}-byte limit)`
      }],
      isError: !0
    }
  };
}
function kn(e, n) {
  let s = a => {
    t(`[RemoteSessionManager] send gate failed, message goes anyway: ${d(a)}`, {
      level: "warn"
    });
    return;
  };
  try {
    return e(n).then(a => bn(a) ? a : void 0, s);
  } catch (error) {
    return Promise.resolve(s(error));
  }
}
function bn(e) {
  return typeof e === "object" && e !== null && e.go === !1 && typeof e.reason === "string";
}
function ve(e) {
  return e.find(item => item !== void 0);
}
function rt(e) {
  return {
    ok: !1,
    reason: e.reason,
    withheld: !0
  };
}
function Cn(e) {
  if (e.ok) return {
    kind: "sent"
  };
  switch (ce(e)) {
    case "withheld":
      return e.reason === reason_7 || e.reason === reason_6 ? {
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
function it(e) {
  return e ? {
    go: !1,
    reason: reason_6
  } : void 0;
}
function at(e, n) {
  return [...e].some(({
    onRelease: onRelease,
    onExit: onExit
  }) => onRelease === "withhold" && !(n && onExit === "await")) ? {
    go: !1,
    reason: reason_7
  } : void 0;
}
var mzt = 100,
  j4o = 500;
function Z7n(e) {
  let n = e?.sequence_num === void 0 ? void 0 : parseInt(String(e.sequence_num), 10);
  return n !== void 0 && !isNaN(n) ? n : void 0;
}
class x_n extends Error {}
var ht = "X-Trusted-Device-Token";
async function Xde(e, n, {
  recoverDeviceProof = !1
} = {}) {
  let {
      accessToken: accessToken,
      profile: profile
    } = await Qv(n),
    S = {
      sessionUrl: `${ln().BASE_API_URL}/v1/code/sessions/${e}`,
      headers: await xht(accessToken, profile)
    };
  if (!recoverDeviceProof) return S;
  return {
    ...S,
    headersForRenewedDeviceToken: async h => ({
      ...Ix((await Qv(n)).accessToken),
      [ht]: h
    })
  };
}
function pt(e, headers_3, params, a) {
  return Ct.get(`${e}/events`, {
    headers: headers_3,
    params: params,
    timeout: 15000,
    validateStatus: () => !0,
    maxContentLength: a ?? -1
  }).catch(() => null);
}
async function ft(e, n, s, a) {
  let r = await pt(e.sessionUrl, e.headers, n, a),
    headersForRenewedDeviceToken = e.headersForRenewedDeviceToken;
  if (r?.status === 403 && headersForRenewedDeviceToken !== void 0) {
    let R = !1,
      k = await Pht(r, e.headers[ht], async b => {
        let E = await headersForRenewedDeviceToken(b).then(O => pt(e.sessionUrl, O, n, a), () => null);
        if (E === null) throw R = !0, Error("no answer");
        return E;
      }, "cloud_session");
    if (R) return t(`[${s}] no answer after renewing the device token`), null;
    if (k.status === 403 && VX() && Fae(k.data) === "untrusted_device") throw t(`[${s}] HTTP 403 untrusted_device`), new x_n("the service does not accept a trusted-device token from this computer");
    r = k;
  }
  if (!r || r.status !== 200) return t(`[${s}] HTTP ${r?.status ?? "error"}`), null;
  if (r.data === null || typeof r.data !== "object") return t(`[${s}] non-object 200 body`), null;
  let h = Array.isArray(r.data.data) ? r.data.data : [],
    events = [];
  for (let R = h.length - 1; R >= 0; R--) {
    let k = h[R];
    if (k?.payload) events.push({
      payload: k.payload,
      createdAt: k.created_at,
      source: k.source,
      sequenceNum: Z7n(k)
    });
  }
  let firstId = r.data.next_cursor ?? null;
  return {
    events: events,
    firstId: firstId,
    hasMore: firstId !== null,
    droppedRows: h.length - events.length,
    newestSequenceNum: Z7n(h[0])
  };
}
async function C2e(e, limit = mzt, s) {
  let a = await ft(e, {
    limit: limit,
    sort_order: "desc"
  }, "fetchLatestEvents");
  if (s?.reportFeatureHealth !== !1) if (a === null) m("assistant_history_load", "http_error");else g("assistant_history_load");
  return a;
}
async function Ket(e, cursor, limit_2 = mzt, a) {
  return ft(e, {
    limit: limit_2,
    sort_order: "desc",
    cursor: cursor
  }, "fetchOlderEvents", a);
}
export { JDe, Pye, C_n, lwt, R_n, H4o, Y7n, X7n, $4o, J7n, QDe, dwt, xGr, PGr, Q7n, OGr, IGr, U4o, yk, B4o, reason_7 as E2e, reason_6 as fzt, A_n, T2e, mzt, j4o, Z7n, x_n, Xde, C2e, Ket };