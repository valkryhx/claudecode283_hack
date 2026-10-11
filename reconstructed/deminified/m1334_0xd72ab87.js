// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { tyn, Y, Pxe, Ixe, Sj, B$ } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { gt, J, _K, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tr } from "B:/~BUN/root/chunk-0fnha6bz.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { C5t } from "B:/~BUN/root/chunk-5hv9qec2.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { lC, tc, ro, $r, qd, x, gye } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { G, tn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ct, wn, ipt, Ue } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { aFe, KGn, vIo, N6e, rNt, kIo, Vcn, qcn, edt, tdt, lFe, ndt, JGn, Xcn, CIo } from "B:/~BUN/root/chunk-9qtz41py.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { Tye } from "B:/~BUN/root/chunk-dv435n4g.js";
import { nH } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { Rpt as oauthTokenPath, pne as sessionIngressTokenPath, xye, RD as getAuthHeaders_3, Wfn } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { yn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { pSe } from "B:/~BUN/root/chunk-yt1webj1.js";
import { Ran } from "B:/~BUN/root/chunk-mc8ranwc.js";
import { Gle } from "B:/~BUN/root/chunk-hjery5bx.js";
import { Xee } from "B:/~BUN/root/chunk-mmnpv22v.js";
import { vJt, TCt, _a, WAt, bSr, zAt, ISr, tHn, jrt, Kn, on } from "B:/~BUN/root/chunk-3jyp964r.js";
import { _n } from "B:/~BUN/root/chunk-msy8grqx.js";
import { jyo } from "B:/~BUN/root/chunk-y39emrp9.js";
import { es, RPo } from "B:/~BUN/root/chunk-8qv35yd7.js";
import { rg, ZP, KTr as servedCallRequestsJumpQueue, Sf as v_2, FKe, iz, mEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { mv } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { oDr, sDr, Hle } from "B:/~BUN/root/chunk-gksrzz5s.js";
import { Pre } from "B:/~BUN/root/chunk-47pxp3w7.js";
import { kze } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { Tkt } from "B:/~BUN/root/chunk-034wrpcd.js";
import { kkt } from "B:/~BUN/root/chunk-xzrasdyk.js";
import { Ekt } from "B:/~BUN/root/chunk-n8hjy42p.js";
import { g7e, gSe, p7r, _Kt, Por, oTn, lL, bKt, Oor, pSt } from "B:/~BUN/root/chunk-qmvd6qn9.js";
import { xXn } from "B:/~BUN/root/chunk-hej04jhr.js";
import { uue } from "B:/~BUN/root/chunk-7dcxj0fe.js";
import { jre } from "B:/~BUN/root/chunk-n67wqpnd.js";
import { SKt } from "B:/~BUN/root/chunk-egpv5jmj.js";
import { Al as name_2, og } from "B:/~BUN/root/chunk-rcz149rn.js";
import { Dr } from "B:/~BUN/root/chunk-c4gqp24s.js";
import { ht } from "B:/~BUN/root/chunk-zmeajjrz.js";
import { i1 } from "B:/~BUN/root/chunk-995m8a2a.js";
import { F0 } from "B:/~BUN/root/chunk-73hzyafy.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { jg } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { T2 } from "B:/~BUN/root/chunk-zw7d3y39.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { createWriteStream as Ve, fstatSync as ze } from "fs";
import { PassThrough as Xe } from "stream";
import { URL as Ae } from "url";
function se(e, n) {
  if (!n) return e;
  return {
    ...(G(e) ? e : {}),
    envelope: !0
  };
}
function V4r() {
  return x("tengu_ccr_subagent_skip_on_delta", !1);
}
function q4r() {
  return a.CLAUDE_CODE_TRANSCRIPT_LOCAL_GC ?? x("tengu_transcript_local_gc", !1);
}
import { randomUUID as De } from "crypto";
var tools = [Ue, wn, Ct, at, ro, $r, ht, tc, Dr, mv, og, kkt, Ekt, Tkt, yn];
function b_n(e) {
  if (!e.sdkUrl || !e.remoteSessionId || e.environmentKind !== void 0) return {
    admitted: !1,
    reason: "not_managed_cloud_worker"
  };
  if (e.disabled) return {
    admitted: !1,
    reason: "disabled"
  };
  return {
    admitted: !0
  };
}
function S_n(e) {
  return e.admission.admitted && e.relayConfigured && e.persistsTranscript && !e.sharedBackend;
}
function w_n(e, worker_epoch, r) {
  if (e.admitted) return {
    turn_handoff: {
      v: 1,
      tools: tools,
      worker_epoch: worker_epoch,
      staged_files: !0,
      no_query_first: !0,
      ...(r && {
        relay_marker: !0
      })
    }
  };
  return e.reason === "disabled" ? {
    turn_handoff: null
  } : void 0;
}
function de(e, session_id) {
  let r = e?.turn_handoff;
  if (!r) return;
  return {
    type: "system",
    subtype: "turn_handoff_available",
    v: r.v,
    tools: [...r.tools],
    worker_epoch: r.worker_epoch,
    staged_files: r.staged_files,
    no_query_first: r.no_query_first,
    uuid: De(),
    session_id: session_id,
    ...(r.relay_marker && {
      relay_marker: !0
    })
  };
}
var error = "recovered_by_restart: this worker restarted after the turn was appended and its recovery set the turn's unrun calls aside";
function K4r(e, n) {
  let {
      relay_marker: relay_marker,
      memory_context: memory_context,
      ...f
    } = e,
    c = ipt().safeParse(f);
  if (!c.success) return {
    kind: "error",
    error: `invalid_handoff: ${Fe(c.error.issues[0]?.path)} ${c.error.issues[0]?.message ?? "unparseable"}`
  };
  let {
    messages: messages,
    tool_use_ids: v
  } = e;
  if (new Set(v).size !== v.length) return {
    kind: "error",
    error: "invalid_handoff: tool_use_ids repeat"
  };
  if (new Set(messages.map(item => item.uuid)).size !== messages.length) return {
    kind: "error",
    error: "invalid_handoff: message uuids repeat"
  };
  for (let [o, h] of messages.entries()) {
    if (typeof h.uuid !== "string") return {
      kind: "error",
      error: "invalid_handoff: every message needs a uuid"
    };
    if (h.type === "user" && (h.isSynthetic === !0 || h.is_virtual) || h.type === "assistant" && (h.is_meta === !0 || h.is_virtual)) return {
      kind: "error",
      error: `invalid_handoff: messages.${o} is not a plain conversation line`
    };
  }
  let messages_3 = kze(messages.map(item => item.type === "user" ? {
      type: "user",
      uuid: item.uuid,
      session_id: item.session_id,
      parent_tool_use_id: null,
      message: item.message,
      timestamp: item.timestamp
    } : {
      type: "assistant",
      uuid: item.uuid,
      session_id: item.session_id,
      parent_tool_use_id: null,
      message: item.message
    })).map(item => item.type === "assistant" || item.type === "user" ? {
      ...item,
      handedOff: !0
    } : item),
    A = messages_3.at(-1);
  if (messages_3.length !== messages.length || A?.type !== "assistant") return {
    kind: "error",
    error: "invalid_handoff: the last message is not an assistant message"
  };
  for (let o of messages_3) if (o.type === "user" && Array.isArray(o.message.content) && o.message.content.some(item => item.type === "tool_use")) return {
    kind: "error",
    error: `invalid_handoff: user message ${tn(o.uuid)} holds a tool_use block`
  };
  let R = new Map();
  if (Array.isArray(A.message.content)) for (let o of A.message.content) {
    if (o.type !== "tool_use") continue;
    if (R.has(o.id)) return {
      kind: "error",
      error: `invalid_handoff: tool_use ${tn(o.id)} repeats`
    };
    R.set(o.id, o);
  }
  let kind;
  if (v.length > 0) {
    if (e.stopped) return {
      kind: "error",
      error: "invalid_handoff: a stopped turn names no calls to run"
    };
    kind = "run";
  } else if (e.stopped) {
    if (R.size === 0) return {
      kind: "error",
      error: "invalid_handoff: a stopped turn ends with calls that have not run"
    };
    kind = "stopped";
  } else kind = "history";
  for (let o of v) {
    let h = R.get(o);
    if (h === void 0) return {
      kind: "error",
      error: `invalid_handoff: tool_use ${tn(o)} is not in the last message`
    };
    if (!tools.includes(h.name)) return {
      kind: "error",
      error: `unsupported_tool: ${tn(h.name)}`
    };
    if (!_n(n.tools, h.name, n.toolAliases)) return {
      kind: "error",
      error: `unknown_tool: ${tn(h.name)}`
    };
  }
  let O = new Set(),
    C = new Set();
  for (let o of n.messages) {
    if (o.type !== "user" && o.type !== "assistant" || !Array.isArray(o.message.content)) continue;
    for (let h of o.message.content) if (o.type === "assistant" && h.type === "tool_use") O.add(h.id);else if (o.type === "user" && h.type === "tool_result") C.add(h.tool_use_id);
  }
  let B = new Set(n.messages.map(item => item.uuid)),
    S = 0,
    F = !1;
  if (kind === "run") {
    if (v.every(item => n.recoveredToolUseIds.has(item)) && !v.every(item => C.has(item))) return {
      kind: "error",
      error: error
    };
    let o = U(v, h => n.handledToolUseIds.has(h) || C.has(h));
    if (o === v.length) return {
      kind: "duplicate"
    };
    if (o > 0) return {
      kind: "error",
      error: "invalid_handoff: some of the named calls are already taken or answered"
    };
    if (n.pendingHandoff) return {
      kind: "error",
      error: "invalid_handoff: another handed-off turn is still queued"
    };
    if (n.runningHandoff) return {
      kind: "error",
      error: "invalid_handoff: another handed-off turn is still running"
    };
    if (messages_3.some(item => B.has(item.uuid))) return {
      kind: "error",
      error: "invalid_handoff: the turn carries messages the conversation already holds"
    };
  } else {
    let o = TCt(messages_3),
      h = u => TCt(u.messages)?.uuid === o.uuid;
    if (n.runningHandoff && h(n.runningHandoff)) return {
      kind: "duplicate",
      ...(kind === "stopped" && n.runningHandoff.kind === "run" && {
        stopRunning: !0
      })
    };
    if (n.pendingHandoff && h(n.pendingHandoff)) {
      if (n.pendingHandoff.kind === kind || n.pendingHandoff.kind === "stopped") return {
        kind: "duplicate"
      };
      let messages_2 = n.pendingHandoff.messages,
        _ = messages_2.findIndex(item => item.uuid === o.uuid) + 1 || messages_2.length;
      if (messages_3.length < _ || messages_2.slice(0, _).some((item, index) => messages_3[index].uuid !== item.uuid || messages_3[index].type !== item.type || !ie(j(messages_3[index]), j(item)))) return {
        kind: "error",
        error: "invalid_handoff: the turn does not carry the lines of its pending delivery"
      };
      F = !0;
    }
    let E = new Map(n.messages.map(item => [item.uuid, item]));
    while (S < messages_3.length && E.has(messages_3[S].uuid)) {
      let u = messages_3[S],
        _ = E.get(u.uuid);
      if (_.type !== u.type || !ie(j(_), j(u))) return {
        kind: "error",
        error: "invalid_handoff: the turn carries messages the conversation already holds"
      };
      S++;
    }
    if (messages_3.some((item, index) => index > S && B.has(item.uuid))) return {
      kind: "error",
      error: "invalid_handoff: the turn carries messages the conversation already holds out of order"
    };
    let H = new Set();
    for (let u of n.messages) if (u.type === "user" && Array.isArray(u.message.content) && !messages_3.some((item, index) => index < S && item.uuid === u.uuid)) {
      for (let _ of u.message.content) if (_.type === "tool_result") H.add(_.tool_use_id);
    }
    let L = j(o),
      i = U(L, u => H.has(u));
    if (L.length > 0 && i === L.length) return {
      kind: "duplicate"
    };
    if (i > 0) return {
      kind: "error",
      error: "invalid_handoff: some of the calls are already answered"
    };
    if (S < messages_3.length && L.length > 0 && L.every(item => n.recoveredToolUseIds.has(item))) return {
      kind: "error",
      error: error
    };
    for (let u of messages_3.slice(0, S)) {
      let _ = E.get(u.uuid);
      if (_.type !== "assistant" && _.type !== "user" || _.handedOff !== !0) return {
        kind: "error",
        error: "invalid_handoff: the turn carries messages the conversation already holds"
      };
    }
    if (S > 0 && !(kind === "history" && S === messages_3.length) && vJt(n.messages)?.uuid !== messages_3[S - 1].uuid) return {
      kind: "error",
      error: "invalid_handoff: the conversation has moved on past the part of the turn it holds"
    };
    if (n.pendingHandoff && !F) return {
      kind: "error",
      error: "invalid_handoff: another handed-off turn is still queued"
    };
    if (n.runningHandoff) return {
      kind: "error",
      error: "invalid_handoff: another handed-off turn is still running"
    };
  }
  let w = messages_3.slice(S),
    T = new Set(F ? n.pendingHandoff.messages.flatMap(j) : []),
    I = new Set();
  for (let o of n.messages) if (o.type === "assistant" && typeof o.message.id === "string") I.add(o.message.id);
  for (let o of w) {
    if (o.type !== "assistant") continue;
    if (I.has(o.message.id)) return {
      kind: "error",
      error: `invalid_handoff: assistant message id ${tn(o.message.id)} repeats or is already in the conversation`
    };
    I.add(o.message.id);
  }
  let P = new Set(),
    D = new Set();
  for (let [o, h] of messages_3.entries()) {
    if (h.type !== "user" && h.type !== "assistant" || !Array.isArray(h.message.content)) continue;
    for (let E of h.message.content) if (h.type === "assistant" && E.type === "tool_use") {
      if (o >= S && (O.has(E.id) || n.handledToolUseIds.has(E.id) && !T.has(E.id))) return {
        kind: "error",
        error: `invalid_handoff: tool_use ${tn(E.id)} is already in the conversation or taken`
      };
      if (P.has(E.id)) return {
        kind: "error",
        error: `invalid_handoff: tool_use ${tn(E.id)} repeats`
      };
      if (P.add(E.id), !(h === A && (kind === "stopped" || v.includes(E.id)))) D.add(E.id);
    } else if (h.type === "user" && E.type === "tool_result") {
      if (!P.has(E.tool_use_id)) return {
        kind: "error",
        error: `invalid_handoff: tool_result ${tn(E.tool_use_id)} answers no earlier tool_use in the turn`
      };
      if (o >= S && C.has(E.tool_use_id)) return {
        kind: "error",
        error: `invalid_handoff: tool_result ${tn(E.tool_use_id)} answers a call the conversation already answers`
      };
      D.delete(E.tool_use_id);
    }
  }
  for (let o of D) return {
    kind: "error",
    error: R.has(o) ? `invalid_handoff: tool_use ${tn(o)} in the last message is not named` : `invalid_handoff: tool_use ${tn(o)} has no result`
  };
  let relayMarker;
  if (kind === "run" && relay_marker !== void 0 && relay_marker !== null) {
    let o = ipt().shape.relay_marker.unwrap().safeParse(relay_marker);
    relayMarker = o.success ? {
      uuid: o.data.uuid,
      content: o.data.content
    } : "malformed";
  }
  let memoryLine;
  if (kind === "run" && memory_context !== void 0 && memory_context !== null) {
    let o = ipt().shape.memory_context.unwrap().safeParse(memory_context);
    if (!o.success) t(`turn_handoff: ${["memory_context", ...(o.error.issues[0]?.path ?? [])].map(String).join(".")}: ${o.error.issues[0]?.message ?? "unparseable"}; the turn runs without it`, {
      level: "warn"
    });else if (o.data.version === null !== (o.data.content === null)) t(`turn_handoff: memory_context has ${o.data.version === null ? "content but no version" : "a version but no content"}; the turn runs without it`, {
      level: "warn"
    });else if (B.has(o.data.uuid) || messages_3.some(item => item.uuid === o.data.uuid) || o.data.uuid === relay_marker?.uuid) t("turn_handoff: memory_context.uuid is already used in the request or the conversation; the turn runs without it", {
      level: "warn"
    });else {
      let {
        uuid: uuid,
        version: version,
        content: content
      } = o.data;
      memoryLine = on({
        type: "cowork_memory_context",
        version: version,
        content: content
      }, {
        now: () => new Date().toISOString(),
        uuid: () => uuid
      });
    }
  }
  let taken = [...P].filter(item => !O.has(item) && (!n.handledToolUseIds.has(item) || T.has(item)));
  for (let o of P) n.handledToolUseIds.add(o);
  return {
    kind: F ? "converted" : "accepted",
    handedOffTurn: {
      kind: kind,
      messages: messages_3,
      toolUseIDs: v,
      ...(relayMarker !== void 0 && {
        relayMarker: relayMarker
      }),
      ...(memoryLine && {
        memoryLine: memoryLine
      }),
      ...(S > 0 && {
        continues: !0
      })
    },
    taken: taken
  };
}
function j(e) {
  return (e.type === "user" || e.type === "assistant") && Array.isArray(e.message.content) ? e.message.content.flatMap(item => item.type === "tool_use" ? [item.id] : item.type === "tool_result" ? [item.tool_use_id] : []) : [];
}
function ie(e, n) {
  return e.length === n.length && e.every((item, index) => item === n[index]);
}
function Fe(e) {
  return e !== void 0 && e.length > 0 ? e.map(String).join(".") : "request";
}
var Pe = "VERIFIED_BY_GATE",
  Me = "refuse";
function le(e, {
  floor = Pe,
  unstamped = Me
} = {}) {
  let status = aFe(e.device_attestation_status);
  if (KGn(status, floor)) return {
    verdict: "pass",
    status: status
  };
  if (status === "UNSPECIFIED" && unstamped === "pass") return {
    verdict: "pass",
    status: status
  };
  return {
    verdict: "drop",
    status: status
  };
}
var Le = new Set(["remote_tools_announce", "register_device_hooks", "upload_device_hook_template", "apply_flag_settings"]);
function ue(e) {
  let n = e.type === "control_request" ? e.request : void 0;
  if (typeof n !== "object" || n === null) return;
  let subtype = n.subtype;
  if (typeof subtype !== "string" || !Le.has(subtype)) return;
  if (subtype === "apply_flag_settings") {
    let settings = n.settings;
    return typeof settings === "object" && settings !== null && !Array.isArray(settings) && Object.hasOwn(settings, jre) ? "apply_flag_settings" : void 0;
  }
  return subtype;
}
function ce(e) {
  let n = e.type === "control_response" ? e.response : void 0;
  return typeof n === "object" && n !== null ? ndt(n) : void 0;
}
function pe(e, n, r = fe) {
  let s = ue(e);
  if (s !== void 0) return r[he(s)];
  let f = ce(e),
    c = f === void 0 ? void 0 : n(f);
  return c !== void 0 && r[me(c)];
}
var fe = {
  remoteTools: !0,
  hooks: !0,
  plugins: !0
};
function he(e) {
  switch (e) {
    case "remote_tools_announce":
      return "remoteTools";
    case "register_device_hooks":
    case "upload_device_hook_template":
      return "hooks";
    case "apply_flag_settings":
      return "plugins";
  }
}
function me(e) {
  return e === "served_call" ? "remoteTools" : "hooks";
}
function _e(e, n, r = fe) {
  let payload = e.payload,
    subtype_2 = ue(payload);
  if (subtype_2 !== void 0) {
    if (!r[he(subtype_2)]) return {
      kind: "pass"
    };
    let {
      verdict: verdict,
      status: status_2
    } = le(e);
    if (verdict === "pass") return {
      kind: "pass"
    };
    let remainder = subtype_2 === "apply_flag_settings" ? He(payload) : void 0;
    return remainder !== void 0 ? {
      kind: "strip_forwarded_plugins",
      requestId: ndt(payload),
      status: status_2,
      remainder: remainder
    } : {
      kind: "refuse_request",
      subtype: subtype_2,
      status: status_2
    };
  }
  let requestId = ce(payload),
    answers = requestId === void 0 ? void 0 : n(requestId);
  if (requestId === void 0 || answers === void 0 || !r[me(answers)]) return {
    kind: "pass"
  };
  let {
    verdict: verdict_2,
    status: status_3
  } = le(e);
  if (verdict_2 === "pass") {
    let R = q(q(payload.response)?.response);
    if (R !== void 0 && FKe in R) delete R[FKe];
    return {
      kind: "pass"
    };
  }
  let result = answers === "served_call" ? qe(payload) : void 0;
  return result === void 0 ? {
    kind: "drop_answer",
    requestId: requestId,
    answers: answers,
    status: status_3
  } : {
    kind: "admit_refusal",
    requestId: requestId,
    status: status_3,
    result: result
  };
}
function He(e) {
  let n = q(q(e.request)?.settings);
  if (n === void 0) return;
  let {
    [jre]: r,
    ...s
  } = n;
  return Object.keys(s).length > 0 ? s : void 0;
}
function ye(e) {}
function ge(e, settings_2) {
  let r = q(e.request) ?? {};
  e.request = {
    ...r,
    settings: settings_2
  };
}
function ve(e, request_id, result_2) {
  e.response = {
    subtype: "success",
    request_id: request_id,
    response: {
      result: result_2,
      [FKe]: !0
    }
  };
}
function b(e) {
  return `reported refused \u2014 ${e} \u2014 by a sender this session could not verify; whether anything ran there is not confirmed. Check its effect before re-running it.`;
}
var xe = {
    no_approval: "reported refused \u2014 no person's approval matching this call was found \u2014 by a sender this session could not verify; whether anything ran there is not confirmed. Ask the user to approve it again if it is still wanted.",
    unbound: b("this session is not bound to that machine"),
    unsupported_protocol: b("the call's protocol version was not accepted"),
    invalid_request: b("the call was not acceptable as sent"),
    not_served: b("that machine does not serve this tool to the session"),
    no_session: b("that machine could not tell which session the call came from"),
    session_mismatch: b("that machine is connected on behalf of a different session"),
    too_many_in_flight: b("that machine already has as many calls under way, or keeps state for as many cloud sessions, as it accepts"),
    refused_field: b("one of the call's input fields is not accepted on that machine"),
    sandbox_unavailable: b("that machine serves no tools while its sandbox is off or not fully confining"),
    unknown_call: b("that machine has no record of the call asked about"),
    stale: b("the call, or the answer to its permission question, reached that machine after its delivery window"),
    unattested_request: b("the call arrived without a valid device signature"),
    queue_full: b("that machine was at one of its capacity limits"),
    rate_limited: b("that machine's call budget for this session was spent"),
    duplicate_call: b("that machine had already received a call with this id"),
    withdrawn: b("the permission request the call was waiting on there ended unanswered"),
    result_lost: b("that machine no longer holds the result of the call"),
    unrecognized: "reported refused, without a reason this session recognises, by a sender this session could not verify; whether anything ran there is not confirmed. Check its effect before re-running it."
  },
  name = "unverified-sender";
function qe(e) {
  let n = q(e.response),
    r = q(n?.response);
  if (n?.subtype !== "success" || r === void 0) return;
  let s;
  try {
    s = iz(r.result);
  } catch {
    return;
  }
  if (s.envelope.status !== "present" || s.envelope.envelope.outcome !== "refused") return;
  let envelope = s.envelope.envelope,
    c = xe[envelope.code];
  return mEe({
    envelope: {
      v: v_2,
      outcome: "refused",
      ...(envelope.call_id !== void 0 && {
        call_id: envelope.call_id
      }),
      target: {
        name: name,
        working_dir: ""
      },
      code: envelope.code,
      message: c
    },
    content: c
  });
}
function q(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) ? e : void 0;
}
var rXe = new Set(["remote", "remote_projects", "remote_desktop", "sdk-cli", ""]);
function Y4r(e) {
  if (e.disabled) return {
    start: !1,
    reason: "disabled"
  };
  if (e.entrypoint !== void 0 && !rXe.has(e.entrypoint)) return {
    start: !1,
    reason: "entrypoint"
  };
  return {
    start: !0,
    engines: {
      git: e.gitSwitch
    }
  };
}
var Be = rXe;
function v_n(e) {
  if (!e.sdkUrl || !e.remoteSessionId || e.environmentKind !== void 0) return {
    admitted: !1,
    reason: "not_managed_cloud_worker"
  };
  if (e.entrypoint !== void 0 && !Be.has(e.entrypoint)) return {
    admitted: !1,
    reason: "entrypoint"
  };
  if (e.disabled) return {
    admitted: !1,
    reason: "disabled"
  };
  if (e.hermetic) return {
    admitted: !1,
    reason: "hermetic"
  };
  return {
    admitted: !0
  };
}
function k_n(e) {
  if (!e.sdkUrl || !e.remoteSessionId || e.environmentKind !== void 0) return {
    admitted: !1,
    reason: "not_managed_cloud_worker"
  };
  if (e.entrypoint !== void 0 && !rXe.has(e.entrypoint)) return {
    admitted: !1,
    reason: "entrypoint"
  };
  if (e.disabled) return {
    admitted: !1,
    reason: "disabled"
  };
  if (e.hermetic) return {
    admitted: !1,
    reason: "hermetic"
  };
  return {
    admitted: !0
  };
}
var Se = {
  sessionIngressTokenPath: sessionIngressTokenPath,
  oauthTokenPath: oauthTokenPath
};
async function je(e = Se) {
  let [n, r] = await Promise.all([cl(e.sessionIngressTokenPath, xye), cl(e.oauthTokenPath, xye)]),
    sessionIngressToken = n?.trim() ?? "",
    oauthToken = r?.trim() ?? "";
  if (!sessionIngressToken || !oauthToken) return t("CCR auth refresh: token-file pair unreadable or incomplete, keeping current credentials", {
    level: "warn"
  }), null;
  return {
    sessionIngressToken: sessionIngressToken,
    oauthToken: oauthToken
  };
}
var $e = 300,
  Ke = /^ANTHROPIC_SECRET_PLACEHOLDER_[0-9a-f]{32}$/;
function Ee(e) {
  return Ke.test(e);
}
var ke = /^[\w.~+/-]+=*$/;
async function Ge(e, n = Se) {
  if (!a.CLAUDE_CODE_REMOTE) return {
    adopted: !1,
    reason: "not_remote"
  };
  if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) return {
    adopted: !1,
    reason: "no_advertised_ttl"
  };
  let r = await je(n);
  if (!r) return {
    adopted: !1,
    reason: "read_failed"
  };
  if (!ke.test(r.oauthToken)) return t("CCR auth refresh: delivered OAuth token is not a well-formed bearer token, keeping current credentials", {
    level: "warn"
  }), {
    adopted: !1,
    reason: "oauth_malformed"
  };
  let s = a.CLAUDE_CODE_SESSION_ACCESS_TOKEN || Pxe(),
    f = ke.test(r.sessionIngressToken) ? F0(r.sessionIngressToken) : null,
    session_token;
  if (f !== null) {
    if (s === r.sessionIngressToken) return {
      adopted: !1,
      reason: "unchanged"
    };
    let y = Date.now() / 1000 + e;
    if (Math.abs(f - y) > $e) return t("CCR auth refresh: delivered token expiry does not match the advertised lifetime, keeping current credentials", {
      level: "warn"
    }), {
      adopted: !1,
      reason: "exp_mismatch"
    };
    let v = s ? F0(s) : null;
    if (v !== null && f <= v) return t("CCR auth refresh: delivered token does not extend expiry, keeping current credentials", {
      level: "warn"
    }), {
      adopted: !1,
      reason: "not_newer"
    };
    session_token = "jwt";
  } else if (!Ee(r.sessionIngressToken)) return t("CCR auth refresh: delivered session token is neither a well-formed decodable JWT nor a gateway placeholder, keeping current credentials", {
    level: "warn"
  }), {
    adopted: !1,
    reason: "not_a_jwt"
  };else if (s === r.sessionIngressToken) {
    if (r.oauthToken === (a.CLAUDE_CODE_OAUTH_TOKEN || Sj())) return {
      adopted: !1,
      reason: "unchanged"
    };
    session_token = "placeholder_unchanged";
  } else if (s && F0(s) !== null) session_token = "placeholder_sealed";else return t("CCR auth refresh: delivered gateway placeholder is neither the session token held in process nor replacing a decodable JWT, keeping current credentials", {
    level: "warn"
  }), {
    adopted: !1,
    reason: s && Ee(s) ? "placeholder_mismatch" : "placeholder_current_unknown"
  };
  if (session_token !== "placeholder_unchanged") {
    if (a.CLAUDE_CODE_SESSION_ACCESS_TOKEN) Wfn(r.sessionIngressToken);
    Ixe(r.sessionIngressToken);
  }
  if (B$(r.oauthToken), a.CLAUDE_CODE_OAUTH_TOKEN) a.set("CLAUDE_CODE_OAUTH_TOKEN", r.oauthToken);
  return lC(), K("info", "cli_worker_auth_refresh_adopted", {
    session_token: session_token,
    seconds_until_expiry: f === null ? void 0 : Math.max(0, Math.floor(f - Date.now() / 1000))
  }), {
    adopted: !0
  };
}
function Re(e) {
  return e === null ? Ge : void 0;
}
async function Ce({
  getAuthHeaders: getAuthHeaders,
  rereadMiss: rereadMiss,
  onDiagnostic: onDiagnostic,
  delaysMs = xXn
}) {
  if (Object.keys(getAuthHeaders()).length > 0) return !0;
  onDiagnostic?.(`no session auth headers yet, re-reading up to ${delaysMs.length} times`, "warn");
  let f = {};
  for (let [c, y] of delaysMs.entries()) {
    let attempts = c + 1;
    if (t(`[remote-io] no auth headers, re-reading in ${y}ms (attempt ${attempts}/${delaysMs.length})`, {
      level: "warn"
    }), await Q(y), f = rereadMiss().diag, Object.keys(getAuthHeaders()).length > 0) return onDiagnostic?.(`session auth headers present after ${attempts} re-read(s)`, "info"), K("info", "cli_worker_lifecycle_init_auth_retried", {
      attempts: attempts,
      ...f
    }), !0;
  }
  return t(`[remote-io] auth headers still missing after ${delaysMs.length} re-reads`, {
    level: "error"
  }), onDiagnostic?.(`session auth headers still missing after ${delaysMs.length} re-reads`, "warn"), K("error", "cli_worker_lifecycle_init_auth_retry_exhausted", {
    attempts: delaysMs.length,
    ...f
  }), !1;
}
import { URL as Ye } from "url";
function be(e, n = {}, r = {}) {
  let s = Tye(new Ye(e.href));
  return s.pathname = s.pathname.replace(/\/$/, "") + "/worker/events/stream", new pSt(s, n, r);
}
var Z = import.meta.require("B:/~BUN/root/chunk-datpqxnh.js"),
  Je = new Set(["set_chrome_browser_hints"]);
function Ze(e) {
  if (typeof e !== "object" || e === null) return;
  let request = e.request;
  if (typeof request !== "object" || request === null) return;
  let subtype_3 = request.subtype;
  return typeof subtype_3 === "string" ? subtype_3 : void 0;
}
function et(e) {
  let r = e.split(`
`).flatMap(item => {
    let f;
    try {
      f = J(Jo(item));
    } catch {
      return [item];
    }
    let payload_type = typeof f === "object" && f !== null ? f.type : void 0;
    if (typeof payload_type === "string" && Oor.has(payload_type)) return K("warn", "cli_stdin_server_only_type_dropped", {
      payload_type: payload_type
    }), t(`[remote-io] dropped a ${payload_type} frame from the stdin lane (server-authored-only type; SSE is its only ingress)`, {
      level: "warn"
    }), [];
    if (payload_type === "control_request") {
      let subtype_4 = Ze(f);
      if (subtype_4 !== void 0 && Je.has(subtype_4)) return K("warn", "cli_stdin_host_forwarded_subtype_dropped", {
        subtype: subtype_4
      }), t(`[remote-io] dropped a ${subtype_4} control_request from the stdin lane (host-forwarded-only subtype; SSE is its only ingress)`, {
        level: "warn"
      }), [];
    }
    return [item];
  });
  return r.length === 0 ? void 0 : r.join(`
`);
}
var tt = 256,
  nt = {
    remote_tools_announce: "remote_tools_announce",
    register_device_hooks: "device_hooks_register",
    upload_device_hook_template: "device_hooks_register",
    apply_flag_settings: "ccr_cloud_plugins_forward"
  };
class PK extends Pre {
  isRemoteTransport() {
    return !0;
  }
  takeUserFrameReceivedWallMs(e) {
    let n = this.userFrameReceivedWallMs.get(e);
    return this.userFrameReceivedWallMs.delete(e), n;
  }
  hostOwnsStdinOrigin = !1;
  persistsOutboundFrames = !0;
  get isHostedWorker() {
    return this.hosting.kind === "hosted";
  }
  url;
  transport;
  inputStream;
  workerAttestationPolicy;
  isBridge = !1;
  isDebug = !1;
  teeStdout = !1;
  activityFd;
  ccrClient;
  idleTracker;
  keepAliveTimer = null;
  inboundLanesDroppedAfterClose = new Set();
  userFrameReceivedWallMs = new Map();
  unsubscribeGrowthBookRefresh;
  attestationDropSenderWriter = e => {
    this.ccrClient.writeEvent(e).catch(n => {
      t(`[remote-io] drop sender-notice write failed: ${l(n)}`, {
        level: "warn"
      });
    });
  };
  attestationDropNotifier = e => {
    if (this.isBridge) process.stderr.write(edt + tdt(e) + `
`);
    if (e.payloadType === "control_request" && e.requestId) this.ccrClient.writeEvent(T2(e.requestId, lFe(e))).catch(n => {
      t(`[remote-io] refusal write failed: ${l(n)}`, {
        level: "warn"
      });
    });
  };
  permanentCloseCode;
  closeCause;
  hosting;
  endedByHost = !1;
  constructor({
    streamUrl: streamUrl,
    initialPrompt: initialPrompt,
    stdinLane: stdinLane,
    replayUserMessages: replayUserMessages,
    sessionState: sessionState,
    storageV5: storageV5,
    getAuthHeaders: getAuthHeaders_2,
    rereadMissingAuthHeaders: v,
    sessionId: sessionId,
    workerEpoch: workerEpoch,
    environmentKind: environmentKind,
    isResume: isResume,
    earlyHydrateReads: earlyHydrateReads,
    earlyRemoteLink: earlyRemoteLink,
    reportParkAtInit: reportParkAtInit,
    initExternalMetadata: initExternalMetadata,
    initialWorkerStatus: initialWorkerStatus,
    hosting: hosting
  }) {
    let T = new Xe({
      encoding: "utf8"
    });
    super(T, replayUserMessages, sessionState);
    this.inputStream = T, this.hosting = hosting, this.url = Tye(new Ae(streamUrl));
    let I = getAuthHeaders_2();
    if (Object.keys(I).length === 0) t(v ? "[remote-io] No session ingress token available yet, will re-read" : "[remote-io] No session ingress token available", {
      level: "error"
    });
    this.isBridge = environmentKind === "bridge", this.isDebug = _K(), this.teeStdout = Ne(process.env.CLAUDE_CODE_TEE_SDK_STDOUT);
    let CLAUDE_RUNNER_ACTIVITY_FD = process.env.CLAUDE_RUNNER_ACTIVITY_FD,
      fd = CLAUDE_RUNNER_ACTIVITY_FD ? Number.parseInt(CLAUDE_RUNNER_ACTIVITY_FD, 10) : NaN;
    if (Number.isInteger(fd) && fd > 2) try {
      let i = ze(fd);
      if (!i.isFIFO() && !i.isSocket()) throw Error("not a pipe");
      let u = Ve("", {
        fd: fd,
        autoClose: !1
      });
      u.on("error", _ => {
        t(`[remote-io] activity fd ${fd} write error (${l(_)}); falling back to stdout`), this.activityFd = void 0;
      }), this.activityFd = u;
    } catch (error) {
      t(`[remote-io] activity fd ${fd} unavailable (${l(error)}); falling back to stdout`);
    }
    if (earlyRemoteLink && hosting.kind !== "owns-process") throw Error("earlyRemoteLink is only valid for an owns-process RemoteIO");
    if (earlyRemoteLink) earlyRemoteLink.ccrClient.setFeatureGatedOptions(Te()), earlyRemoteLink.ccrClient.setStreamEventFlushIntervalMs(ee()), earlyRemoteLink.ccrClient.setStreamEventFirstFlushMs(te()), earlyRemoteLink.ccrClient.setNoSubscriberStreamEventFlushIntervalMs(ne()), earlyRemoteLink.ccrClient.setDropUnwatchedStreamEvents(re());
    let N = earlyRemoteLink ?? Ie({
        url: this.url,
        getAuthHeaders: getAuthHeaders_2,
        sessionId: sessionId,
        environmentKind: environmentKind,
        storageV5: storageV5,
        hosting: hosting,
        onEpochMismatch: hosting.kind === "hosted" ? i => {
          throw this.stopFor(st(i)), Error("terminal request-path condition");
        } : void 0,
        reportParkAtInit: reportParkAtInit,
        initExternalMetadata: initExternalMetadata,
        initialWorkerStatus: initialWorkerStatus,
        deferDelivery: !1
      }),
      onDiagnostic_2 = N.onDiagnostic;
    this.transport = N.transport, this.ccrClient = N.ccrClient, this.idleTracker = N.idleTracker;
    let V = rg();
    if (V) this.ccrClient.onDurableEventsDropped = (i, u) => {
      let _ = we(i);
      if (_.length > 0) this.rejectUndeliveredRequests(_, u);
    }, this.ccrClient.onDurableEventsUpload = (i, u) => {
      let _ = we(i);
      if (_.length > 0) this.noteRequestsUpload(_, u);
    };
    this.tracksRequestDelivery = V, this.transport.setOnData(i => {
      if (this.writeInbound(i, "sse"), this.isBridge && this.isDebug) tr(i.endsWith(`
`) ? i : i + `
`);
    }), this.transport.setOnUserFrameReceived((i, u) => {
      if (this.userFrameReceivedWallMs.has(i)) return;
      if (this.userFrameReceivedWallMs.size >= tt) {
        let _ = this.userFrameReceivedWallMs.keys().next().value;
        if (_ !== void 0) this.userFrameReceivedWallMs.delete(_);
      }
      this.userFrameReceivedWallMs.set(i, u);
    }), this.transport.setOnClose(closeCode => {
      if (closeCode !== void 0) {
        switch (this.permanentCloseCode = closeCode, hosting.kind) {
          case "owns-process":
            process.stderr.write(`RemoteIO: transport closed permanently (code ${closeCode})
`);
            break;
          case "hosted":
            hosting.onDiagnostic(`transport closed permanently (code ${closeCode})`, "warn");
            break;
        }
        this.stopFor({
          kind: "stream-rejected",
          closeCode: closeCode
        });
      }
      this.inputStream.end();
    }), this.transport.setOnEventVetoed(i => {
      this.ccrClient.reportDelivery(i.event_id, "received"), this.ccrClient.reportDelivery(i.event_id, "processed");
    }), this.unsubscribeGrowthBookRefresh = qd(() => {
      this.ccrClient.setStreamEventFlushIntervalMs(ee()), this.ccrClient.setStreamEventFirstFlushMs(te()), this.ccrClient.setNoSubscriberStreamEventFlushIntervalMs(ne()), this.ccrClient.setDropUnwatchedStreamEvents(re());
    });
    let o = v && Object.keys(I).length === 0 ? Ce({
        getAuthHeaders: getAuthHeaders_2,
        rereadMiss: v,
        onDiagnostic: onDiagnostic_2
      }) : null,
      h = earlyRemoteLink?.initialized ?? (o ? o.then(() => this.ccrClient.initialize(workerEpoch)) : this.ccrClient.initialize(workerEpoch));
    if (this.restoredWorkerState = h.catch(() => null), h.then(() => {
      onDiagnostic_2?.("worker registered", "info");
      let i = de(N.initExternalMetadata, sessionId);
      if (i) this.write(i);
    }, i => {
      let u = i instanceof gSe ? i.reason : l(i);
      K("error", "cli_worker_lifecycle_init_failed", {
        reason: i instanceof gSe ? i.reason : "unknown"
      });
      let _ = `CCRClient initialization failed: ${l(i)}`;
      if (p7r(i)) t(_, {
        level: "error"
      });else d(Error(_));
      switch (hosting.kind) {
        case "owns-process":
          onDiagnostic_2?.(`worker registration failed (${u}), exiting`, "warn"), Kn(1, "other");
          return;
        case "hosted":
          onDiagnostic_2?.(`worker registration failed (${u}), stopping`, "warn"), this.stopFor({
            kind: "registration-failed",
            reason: i instanceof gSe ? i.reason : "unknown",
            httpStatus: i instanceof gSe ? i.httpStatus : void 0,
            closeCode: 4091
          });
          return;
      }
    }), WAt((i, u, _) => this.ccrClient.writeInternalEvent(i, u, _)), zAt(i => this.ccrClient.readInternalEvents(i), () => this.ccrClient.readSubagentInternalEvents(), isResume ? (i, u) => this.ccrClient.readAgentInternalEvents(i, u) : void 0), this.ccrClient.onInternalBatchAcked = i => ISr(i, storageV5), this.ccrClient.onInternalEventLaneClosed = bSr, isResume) {
      let i = performance.now(),
        ccrClient = this.ccrClient;
      this.hydratePrefetch = (async () => {
        if (o) await o, i = performance.now();
        return (o ? void 0 : await earlyHydrateReads) ?? (await Oe(_ => ccrClient.readInternalEvents(_), () => ccrClient.readSubagentInternalEvents(), storageV5));
      })().catch(_ => (d(_), null)), this.hydratePrefetch.then(() => {
        es("resume_hydrate_fetch_ms", performance.now() - i, i), RPo();
      });
    }
    let E = {
      started: "processing",
      completed: "processed",
      cancelled: "processed"
    };
    if (this.onCommandLifecycle = (i, u) => {
      if (!Object.hasOwn(E, u)) return;
      let _ = E[u];
      if (_ === void 0) return;
      this.ccrClient.reportDelivery(i, _);
    }, Vcn(this.attestationDropSenderWriter), rNt(this.attestationDropNotifier), this.isBridge) N6e(Gle), this.transport.setEventFilter(i => {
      this.markAndStripSessionChannelFrame(i, {
        listedOnly: !1
      });
      let u = Xcn(i);
      if (u) this.ccrClient.reportDelivery(i.event_id, "received"), this.ccrClient.reportDelivery(i.event_id, "processed");
      return u;
    });else {
      this.transport.setWorkerAttestationPolicySink(u => this.takeWorkerAttestationPolicy(u));
      let i = a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
      this.transport.setEventFilter(u => {
        let _ = this.judgeInboundFrame(u, i);
        if (_) this.ccrClient.reportDelivery(u.event_id, "received"), this.ccrClient.reportDelivery(u.event_id, "processed");
        return _;
      });
    }
    let H = state => {
      if (this.teeStdout && !this.isBridge) try {
        this.teeActivity(uue({
          type: "system",
          subtype: "session_state_changed",
          state: state,
          waiting_on_user: this.sessionState.waitingOnUser
        }) + `
`);
      } catch {}
    };
    if (this.sessionState.onStateChanged = (i, u) => {
      this.ccrClient.reportState(i, u), H(i);
    }, this.sessionState.onWaitingOnUserChanged = () => {
      H(this.sessionState.getState());
    }, this.sessionState.onTurnStarting = (mode, u) => {
      if (this.teeStdout && !this.isBridge) try {
        this.teeActivity(uue({
          type: "system",
          subtype: "turn_starting",
          mode: mode,
          ...(mode === "task-notification" && {
            task_id: u ?? null
          })
        }) + `
`);
      } catch {}
    }, oDr(i => this.sessionState.setMainLoopRefcount(i)), this.sessionState.setMainLoopRefcount(Hle()), sDr(i => this.sessionState.dropNestedBlockedChain(i)), this.sessionState.onMetadataChanged = i => {
      this.ccrClient.reportMetadata(i);
    }, this.sessionState.onInternalMetadataChanged = i => {
      this.ccrClient.reportInternalMetadata(i);
    }, jyo(i => this.sessionState.notifyMetadataChanged(i)), earlyRemoteLink) this.transport.startDelivery();else if (o) o.then(() => this.transport.connect(), () => {});else this.transport.connect();
    let session_keepalive_interval_v2_ms = pSe().session_keepalive_interval_v2_ms;
    if (this.isBridge && session_keepalive_interval_v2_ms > 0) this.keepAliveTimer = setInterval(() => {
      t("[remote-io] keep_alive sent"), this.write({
        type: "keep_alive"
      }).catch(i => {
        t(`[remote-io] keep_alive write failed: ${l(i)}`);
      });
    }, session_keepalive_interval_v2_ms), this.keepAliveTimer.unref?.();
    if (hosting.kind === "owns-process") gt(async () => this.close());
    if (initialPrompt) this.writeInbound(initialPrompt.replace(/\n$/, "") + `
`, "stdin");
    if (stdinLane) if (environmentKind === "bridge" || environmentKind === "byoc") this.pumpStdinLane(stdinLane);else this.discardStdinLane(stdinLane, environmentKind);
  }
  pumpStdinLane(e) {
    (async () => {
      for await (let n of e) {
        let r = et(String(n).replace(/\n$/, ""));
        if (r !== void 0) this.writeInbound(r + `
`, "stdin");
      }
    })();
  }
  discardStdinLane(e, n) {
    (async () => {
      let r = !1;
      for await (let s of e) if (!r && String(s).trim() !== "") r = !0, K("warn", "cli_remote_io_stdin_ignored"), t(`[remote-io] ignored data on process stdin (host kind ${n === null ? "unset" : `'${n}'`}): only a 'bridge' or 'byoc' host's stdin is an input lane, so control input comes from the session stream only`, {
        level: "warn"
      });
    })();
  }
  markAndStripSessionChannelFrame(e, {
    listedOnly: listedOnly
  }) {
    ye(e);
  }
  sessionChannelFloorVerdict(e) {
    let n = this.guardedFamilies();
    if (!n.remoteTools && !n.hooks && !n.plugins) return "passed";
    if (!pe(e.payload, s => this.liveDeviceRequestKind(s), n)) return "passed";
    try {
      let s = _e(e, f => this.liveDeviceRequestKind(f), n);
      return s.kind === "pass" ? "passed" : this.applySessionChannelVerdict(e, s);
    } catch (error) {
      return t(`[remote-io] a guarded session-channel frame could not be judged or handled; dropped: ${l(error)}`, {
        level: "warn"
      }), "dropped";
    }
  }
  takeWorkerAttestationPolicy(e) {
    if (this.workerAttestationPolicy = e.policy, e.fault !== void 0) vIo(e.fault);
  }
  judgeInboundFrame(e, n) {
    if (rg()) {
      let r = n ? this.sessionChannelFloorVerdict(e) : "passed";
      if (r === "dropped") return !0;
      if (r === "refusal_rebuilt") return !1;
    }
    if (this.workerAttestationPolicy === void 0) return JGn(e), !1;
    return CIo(e, this.workerAttestationPolicy) ? "attestation_policy" : !1;
  }
  guardedFamilies() {
    let remoteTools = rg() && !ZP();
    return {
      remoteTools: remoteTools,
      hooks: !1,
      plugins: !1
    };
  }
  applySessionChannelVerdict(e, n) {
    let r = n.status.toLowerCase();
    switch (n.kind) {
      case "refuse_request":
        return m(nt[n.subtype], `unverified_sender_${r}`), t(`[remote-io] dropped a below-floor ${n.subtype} (attestation ${r}) unanswered`), "dropped";
      case "drop_answer":
        return m(n.answers === "hook" ? "device_hooks_serve" : "remote_tool_forward", `unverified_answer_dropped_${r}`), t(`[remote-io] dropped a below-floor reply to ${n.answers === "hook" ? "forwarded-hook" : "served-call"} request ${n.requestId} (attestation ${r}); the request keeps waiting for the machine's own answer`), "dropped";
      case "strip_forwarded_plugins":
        return ge(e.payload, n.remainder), p("ccr_cloud_plugins_forward", `unverified_patch_stripped_${r}`), t(`[remote-io] stripped below-floor forwarded plugin choices from an apply_flag_settings (attestation ${r}); its other keys go on`), "passed";
      case "admit_refusal":
        return ve(e.payload, n.requestId, n.result), p("remote_tool_forward", `unverified_refusal_admitted_${r}`), t(`[remote-io] admitted a below-floor refusal of served-call request ${n.requestId} (attestation ${r}) rebuilt and marked unverified: the machine is asked what became of the call`), "refusal_rebuilt";
    }
  }
  flushInternalEvents() {
    return this.ccrClient.flushInternalEvents();
  }
  withdrawQueuedRequest(e) {
    return this.ccrClient.withdrawQueuedControlRequest(e) > 0;
  }
  droppedInternalEventBatches() {
    return this.droppedInternalBatches;
  }
  async flushInternalEventsConfirmed() {
    let droppedInternalBatches = this.ccrClient.droppedInternalBatches;
    return await this.ccrClient.flushInternalEvents(), this.ccrClient.droppedInternalBatches === droppedInternalBatches;
  }
  flushDeliveryAcks() {
    return this.ccrClient.flushDeliveryAcks();
  }
  setOnOwnerPresent(e) {
    this.transport.setOnOwnerPresent(e);
  }
  rereadWorkerState() {
    return this.ccrClient.readWorkerState();
  }
  readProjectsBinding() {
    return this.ccrClient.readProjectsBinding();
  }
  workerEpoch() {
    return this.ccrClient.currentWorkerEpoch;
  }
  async flushClientEvents() {
    let droppedDurableBatches = this.ccrClient.droppedDurableBatches;
    return await this.ccrClient.flush(), this.ccrClient.droppedDurableBatches === droppedDurableBatches;
  }
  async flushSessionState() {
    let droppedWorkerStatePatches = this.ccrClient.droppedWorkerStatePatches;
    return (await this.ccrClient.flushWorkerState()) && this.ccrClient.droppedWorkerStatePatches === droppedWorkerStatePatches;
  }
  get internalEventsPending() {
    return this.ccrClient.internalEventsPending;
  }
  get droppedInternalBatches() {
    return this.ccrClient.droppedInternalBatches;
  }
  hasInternalEventRoom(e) {
    return this.ccrClient.hasInternalEventRoom(e);
  }
  readInternalEvents(e) {
    return this.ccrClient.readInternalEvents(void 0, e);
  }
  teeActivity(e) {
    if (this.activityFd !== void 0) {
      this.activityFd.write(e);
      return;
    }
    tr(e);
  }
  writeInbound(e, lane) {
    if (this.inputStream.destroyed || this.inputStream.writableEnded) {
      if (!this.inboundLanesDroppedAfterClose.has(lane)) this.inboundLanesDroppedAfterClose.add(lane), K("info", "cli_remote_io_inbound_dropped_after_close", {
        lane: lane
      });
      return;
    }
    this.inputStream.write(e);
  }
  writeActivityLine(e) {
    this.teeActivity(e);
  }
  acceptsInboundEnvUpdates() {
    switch (this.hosting.kind) {
      case "owns-process":
        return this.hosting.trustsInboundEnvUpdates;
      case "hosted":
        return !1;
    }
  }
  exitOnFatalInput(e) {
    switch (this.hosting.kind) {
      case "owns-process":
        return super.exitOnFatalInput(e);
      case "hosted":
        return t(`[remote-io] ${e}`, {
          level: "error"
        }), this.stopFor({
          kind: "unreadable-input"
        }), Promise.reject(Error("stream-json input could not be read"));
    }
  }
  recordUserDrivenInbound(e) {
    switch (super.recordUserDrivenInbound(e), e.type) {
      case "user":
        if (C5t(e, "remote-worker", Xee())) this.idleTracker.noteActivity();
        return;
      case "control_response":
        if (e.response.subtype === "success") this.idleTracker.noteActivity();
        return;
      case "control_request":
        if (SKt(e)) this.idleTracker.noteActivity();
        return;
      case "bash_command":
        this.idleTracker.noteActivity();
        return;
      default:
        return;
    }
  }
  async write(e) {
    if (e.type === "transcript_mirror") return;
    let n = this.trackWrite(e);
    if (this.teeStdout && !this.isBridge) {
      let r = ot(n);
      if (r !== void 0) try {
        this.teeActivity(uue(r) + `
`);
      } catch {}
    }
    if (await this.ccrClient.writeEvent(n), this.isBridge) {
      if (n.type === "control_request" || this.isDebug) tr(uue(n) + `
`);
    }
  }
  trackFirstFrameUpload(e) {
    return this.ccrClient.trackFirstFrameUpload(e);
  }
  trackFirstTextFrameUpload(e) {
    return this.ccrClient.trackFirstTextFrameUpload(e);
  }
  trackFirstBlockFrameUpload(e) {
    return this.ccrClient.trackFirstBlockFrameUpload(e);
  }
  close() {
    switch (this.endedByHost = !0, this.closeConnections(), this.hosting.kind) {
      case "owns-process":
        return;
      case "hosted":
        this.ccrClient.close({
          goodbye: !1
        });
        return;
    }
  }
  async goodbye() {
    this.endedByHost = !0, this.ccrClient.beginShutdown(), this.closeConnections(), await this.ccrClient.finishShutdown();
  }
  stopFor(e) {
    if (this.closeCause !== void 0 || this.endedByHost) return;
    if (this.closeCause = e, e.kind !== "unreadable-input") this.permanentCloseCode = e.closeCode;
    switch (this.hosting.kind) {
      case "owns-process":
        return;
      case "hosted":
        this.ccrClient.close({
          goodbye: !1
        }), this.closeConnections();
        try {
          this.hosting.onFatal(e);
        } catch (error) {
          d(error);
        }
        return;
    }
  }
  closeConnections() {
    if (oDr(null), sDr(null), qcn(this.attestationDropSenderWriter), kIo(this.attestationDropNotifier), this.keepAliveTimer) clearInterval(this.keepAliveTimer), this.keepAliveTimer = null;
    this.unsubscribeGrowthBookRefresh(), this.transport.close(), this.inputStream.end();
  }
}
function rt(e) {
  switch (e.kind) {
    case "owns-process":
      return e.adoptRefreshedAuth;
    case "hosted":
      return;
  }
}
function st(cause) {
  let closeCode_2 = _Kt[cause];
  switch (closeCode_2) {
    case 4090:
      return {
        kind: "lease-superseded",
        cause: cause,
        closeCode: closeCode_2
      };
    case 4094:
      return {
        kind: "auth-rejected",
        cause: cause,
        closeCode: closeCode_2
      };
  }
}
function ee() {
  return x("tengu_ccr_stream_event_flush_ms", g7e);
}
function te() {
  return x("tengu_ccr_stream_first_flush_ms", 0);
}
function ne() {
  return x("tengu_ccr_no_subscriber_flush_ms", 0);
}
function Te() {
  return {
    advertiseHeartbeatProbeSupport: x("tengu_ccr_idle_heartbeat", !1),
    beatOnStaleReconnect: x("tengu_ccr_reconnect_beat", !1),
    beatOnReactivation: x("tengu_ccr_reactivation_beat", !1),
    skipRedundantHeartbeats: x("tengu_ccr_skip_redundant_heartbeat", !1)
  };
}
function re() {
  return x("tengu_ccr_drop_unwatched_stream_events", !1);
}
function ot(e) {
  let n = e,
    subtype_5 = n.subtype;
  if (e.type === "result" || e.type === "system" && subtype_5 === "init") return e.type === "result" ? {
    ...e,
    result: void 0,
    permission_denials: void 0,
    structured_output: void 0,
    deferred_tool_use: void 0,
    errors: void 0,
    subagent_stats: void 0
  } : e;
  if (e.type === "system" && subtype_5 === "task_started") return {
    type: "system",
    subtype: subtype_5,
    task_id: n.task_id,
    task_type: n.task_type,
    owned_by_subagent: n.owned_by_subagent
  };
  if (e.type === "system" && subtype_5 === "task_updated") {
    let patch = n.patch;
    return {
      type: "system",
      subtype: subtype_5,
      task_id: n.task_id,
      patch: {
        status: patch?.status,
        is_backgrounded: patch?.is_backgrounded
      }
    };
  }
  if (e.type === "system" && subtype_5 === "task_notification") return {
    type: "system",
    subtype: subtype_5,
    task_id: n.task_id,
    status: n.status
  };
  if (e.type === "system" && subtype_5 === "background_tasks_changed") {
    let tasks = n.tasks;
    return {
      type: "system",
      subtype: subtype_5,
      tasks: Array.isArray(tasks) ? tasks.map(item => ({
        task_id: item?.task_id
      })) : []
    };
  }
  if (e.type === "system" && subtype_5 === "hook_response") return {
    type: "system",
    subtype: subtype_5,
    hook_event: n.hook_event,
    outcome: n.outcome
  };
  if (e.type === "user") return {
    type: e.type,
    subtype: subtype_5,
    ...X(n)
  };
  if (e.type === "assistant") {
    let s = n.message?.content;
    if (Array.isArray(s)) {
      let f = s.find(item => item && typeof item === "object" && item.type === "tool_use" && item.name === name_2);
      if (f) {
        let input = f.input;
        return {
          type: "assistant",
          subtype: subtype_5,
          ...X(n),
          message: {
            content: [{
              type: "tool_use",
              name: name_2,
              input: {
                delaySeconds: input?.delaySeconds
              }
            }]
          }
        };
      }
    }
    return {
      type: e.type,
      subtype: subtype_5,
      ...X(n)
    };
  }
  return;
}
function X(e) {
  return e.parent_tool_use_id != null ? {
    from_subagent: !0
  } : {};
}
function we(e) {
  return e.flatMap(item => item.payload.type === "control_request" && typeof item.payload.request_id === "string" ? [item.payload.request_id] : []);
}
function AXn(e) {
  for (let n of e) {
    if (n === "--") return !1;
    if (n === "--resume" || n === "-r" || n.startsWith("--resume=")) return !0;
  }
  return !1;
}
async function Oe(e, n, r) {
  let s = tyn(),
    f = s ? await jrt(s, r) : void 0,
    c = s ? await tHn(s, f, r) : void 0,
    [y, v] = await Promise.all([e(c?.eventId), f === null || c?.eventId !== void 0 ? void 0 : n()]);
  return [y, v, c];
}
function qVo(e, n, {
  hydrate: hydrate,
  connect: connect
}) {
  if (Object.keys(getAuthHeaders_3()).length === 0) return {
    hydrateReads: void 0,
    link: void 0
  };
  let f = Tye(new Ae(e));
  return nH({
    ...(hydrate && {
      early_hydrate_prefetch: 1
    }),
    ...(connect && {
      early_remote_connect: 1
    })
  }), {
    hydrateReads: hydrate ? it(f, n) : void 0,
    link: connect ? dt(f, n) : void 0
  };
}
function it(e, n) {
  return (async () => {
    let r = !1,
      s = {
        ...oTn(e, getAuthHeaders_3),
        onConflict: () => {
          r = !0;
        }
      },
      f = await Oe(c => lL.readInternalEventsFrom(s, c), () => lL.readSubagentInternalEventsFrom(s), n);
    return r ? void 0 : f;
  })().catch(r => {
    d(r);
    return;
  });
}
function dt(url, storageV5_2) {
  let inputs = E_n(),
    admission = b_n({
      sdkUrl: !0,
      remoteSessionId: a.CLAUDE_CODE_REMOTE_SESSION_ID,
      environmentKind: a.CLAUDE_CODE_ENVIRONMENT_KIND,
      disabled: a.CLAUDE_CODE_DISABLE_TURN_HANDOFF
    }),
    usesRelayMarker = S_n({
      admission: admission,
      relayConfigured: Z !== null && Z.getTeleportRelayEnvConfig() !== null,
      persistsTranscript: !_a(),
      sharedBackend: gye()
    }),
    c = Ie({
      url: url,
      getAuthHeaders: getAuthHeaders_3,
      sessionId: Y(),
      environmentKind: inputs.environmentKind,
      storageV5: storageV5_2,
      hosting: inputs.hosting,
      onEpochMismatch: void 0,
      reportParkAtInit: inputs.reportParkAtInit,
      initExternalMetadata: w_n(admission, inputs.workerEpoch, usesRelayMarker),
      initialWorkerStatus: void 0,
      deferDelivery: !0
    }),
    initialized = c.ccrClient.initialize(inputs.workerEpoch);
  if (initialized.catch(() => {}), inputs.environmentKind !== "bridge") c.transport.setWorkerAttestationPolicySink(() => {});
  return c.transport.connect(), {
    ...c,
    initialized: initialized,
    inputs: inputs,
    usesRelayMarker: usesRelayMarker
  };
}
function E_n() {
  let environmentKind_2 = process.env.CLAUDE_CODE_ENVIRONMENT_KIND ?? null;
  return {
    environmentKind: environmentKind_2,
    workerEpoch: Por(),
    hosting: {
      kind: "owns-process",
      trustsInboundEnvUpdates: !0,
      adoptRefreshedAuth: Re(environmentKind_2)
    },
    reportParkAtInit: a.CLAUDE_CODE_HOLD_REPORT_PARK_AT_INIT && a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN
  };
}
function Ie({
  url: url_2,
  getAuthHeaders: getAuthHeaders_4,
  sessionId: sessionId_2,
  environmentKind: environmentKind_3,
  storageV5: storageV5_3,
  hosting: hosting_2,
  onEpochMismatch: onEpochMismatch,
  reportParkAtInit: reportParkAtInit_2,
  initExternalMetadata: initExternalMetadata_2,
  initialWorkerStatus: initialWorkerStatus_2,
  deferDelivery: deferDelivery
}) {
  let onDiagnostic_3 = environmentKind_3 === "bridge" ? void 0 : hosting_2.kind === "hosted" ? (T, I) => {
      hosting_2.onDiagnostic(T.replace(/\bexiting$/, "stopping"), I);
    } : T => {
      process.stderr.write(`SDKStartup: ${T}
`);
    },
    O = {
      "anthropic-client-platform": jg(),
      ...getAuthHeaders_4()
    },
    CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
  if (CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION) O["x-environment-runner-version"] = CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
  let transport = be(url_2, O, {
    sessionId: sessionId_2,
    refreshHeaders: () => {
      let T = {
          ...getAuthHeaders_4()
        },
        CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION_2 = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION_2) T["x-environment-runner-version"] = CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION_2;
      return T;
    },
    getAuthHeaders: getAuthHeaders_4,
    deferDelivery: deferDelivery,
    sseKeepaliveMaxIntervalSeconds: () => x("tengu_ccr_sse_keepalive_max_interval_s", 0)
  });
  if (onDiagnostic_3) transport.setOnDiagnostic?.(onDiagnostic_3);
  let idleTracker = bKt(),
    ccrClient_2 = new lL(transport, url_2, {
      onDiagnostic: onDiagnostic_3,
      ...(onEpochMismatch && {
        onEpochMismatch: onEpochMismatch
      }),
      ...Te(),
      streamEventFlushIntervalMs: ee(),
      streamEventFirstFlushMs: te(),
      noSubscriberStreamEventFlushIntervalMs: ne(),
      dropUnwatchedStreamEvents: re(),
      ...(rg() && {
        servedCallRequestsJumpQueue: servedCallRequestsJumpQueue
      }),
      idleTracker: idleTracker,
      uploadTrim: () => se(x("tengu_ccr_upload_trim", {}), hosting_2.kind === "hosted"),
      uploadHoldMarker: () => x("tengu_ccr_upload_hold_marker", !1),
      eventHoldEnabled: () => x("tengu_ccr_event_hold_enabled", !0),
      adoptRefreshedAuth: rt(hosting_2),
      gzipRequestBodyFetch: Ran("ccr_worker", storageV5_3),
      getAuthHeaders: getAuthHeaders_4,
      reportParkAtInit: reportParkAtInit_2,
      initExternalMetadata: initExternalMetadata_2,
      initialWorkerStatus: initialWorkerStatus_2
    });
  switch (hosting_2.kind) {
    case "owns-process":
      ccrClient_2.registerShutdownCleanup(), gt(async () => transport.close());
      break;
    case "hosted":
      break;
  }
  return {
    transport: transport,
    ccrClient: ccrClient_2,
    idleTracker: idleTracker,
    onDiagnostic: onDiagnostic_3,
    initExternalMetadata: initExternalMetadata_2
  };
}
export { V4r, q4r, b_n, S_n, w_n, K4r, rXe, Y4r, v_n, k_n, PK, AXn, qVo, E_n };