// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { KR, KVn, Nd } from "B:/~BUN/root/chunk-game8aqv.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { JP, cLe } from "B:/~BUN/root/chunk-j6ahtce9.js";
import { Xbe, URe, JZe, cIr, uIr, gsn, Jbe, fvo, pvo, mvo, x$t, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { v5, nwt } from "B:/~BUN/root/chunk-65j2302z.js";
import { _i } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Xl } from "B:/~BUN/root/chunk-44q965xg.js";
import { xMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { uAe, yDr, pAe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { FL, pQe, Mnn } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { _Lt } from "B:/~BUN/root/chunk-2htsebsg.js";
import { zg } from "B:/~BUN/root/chunk-hdtrfvjw.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, C, u, Be, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
function P$i(e, n) {
  try {
    let r = Xl(e.trim());
    Nd().record([r, n]);
  } catch (error) {
    a(error);
  }
}
function O$i(e) {
  try {
    let n = [];
    for (let r of e.message.content) if (r.type === "server_tool_use" || r.type === "mcp_tool_use") n.push(Mnn(r));
    if (n.length > 0) Nd().record(n);
  } catch (error) {
    a(error);
  }
}
function lc(e) {
  try {
    Nd().record([e]);
  } catch (error) {
    a(error);
  }
}
function IJe(e) {
  if (!cLe(e)) return !1;
  return lc(zg), !0;
}
function I$i(e) {
  let n = D(e) ? e.request : void 0,
    r = D(n) && Array.isArray(n.messages) ? n.messages : [];
  for (let i of r.slice(0, j)) if (IJe(i)) return !0;
  return !1;
}
var j = 200;
function Bfo(e) {
  if (!pQe(e.type)) return;
  let n = typeof e.name === "string" ? Mnn({
    type: e.type,
    name: e.name,
    server_name: e.server_name
  }) : "";
  lc(n === "" ? KR : n);
}
function z0n(e) {
  let n = D(e) ? e.request : void 0,
    r = D(n) && Array.isArray(n.messages) ? n.messages : [];
  if ([e, ...r].some(item => D(item) && item.earlier_tools_unknown !== void 0 && item.earlier_tools_unknown !== null && item.earlier_tools_unknown !== !1) && Nd().record([KR])) g("api_tools_used_unknown_mark");
}
function J_s(e) {
  try {
    if (Nd().record(FL(e, void 0, !1)), Q_s(e)) Nd().record([zg]);
  } catch (error) {
    a(error);
  }
}
var K = "CrossSessionMessage";
function nX() {
  if (v("tengu_lively_plover", !0)) lc(K);
}
function Jze(e) {
  if (e?.kind === "peer" && (e.from !== "unknown" || !W.has(e.inbound_origin ?? "")) && e.senderTaskId === void 0 && e.selfSent !== !0 || e?.kind === "task-notification" && (e.subkind === "peer-send-message" || e.subkind === "projects-relay")) nX();
}
var W = new Set([URe, cIr, uIr, gsn, Jbe, fvo, pvo, x$t, mvo, "email_human"]);
function Q_s(e) {
  return e.some(item => item.type === "user" && item.fromConnector === !0 || item.type === "attachment" && item.attachment?.type === "queued_command" && item.attachment.fromConnector === !0);
}
var Y = 64;
function vZt(e) {
  return KVn(e);
}
function M$i(e) {
  let n = e?.internal?.tools_kept_by_clear;
  if (Array.isArray(n)) Nd().record(n.slice(0, Y).filter(vZt));
}
function z() {
  let e = Nd().names().filter(vZt);
  return {
    tools_kept_by_clear: e.length > 0 ? e : null
  };
}
function D$i(e) {
  try {
    e?.notifyInternalMetadataChanged(z());
  } catch (error) {
    a(error);
  }
}
var Q = p(() => C(Be([o(), C(Be([u({
    type: T("text"),
    text: o()
  }), u({
    type: o()
  })]))]))),
  h = 1000;
function jfo(e) {
  if (e == null) return {
    texts: []
  };
  if (Array.isArray(e)) {
    let s = e.length;
    for (let d = 0; d < e.length && s <= h; d++) {
      let _ = e[d];
      if (Array.isArray(_)) s += _.length;
    }
    if (s > h) return {
      texts: [],
      problem: "too_many_items"
    };
  }
  let n = Q().safeParse(e);
  if (!n.success) return {
    texts: [],
    problem: "malformed"
  };
  let r = !1,
    texts = n.data.map(item => {
      if (typeof item === "string") return item;
      let d = [];
      for (let _ of item) if (_.type === "text" && "text" in _ && typeof _.text === "string") d.push(_.text);else r = !0;
      return d.join(`
`);
    }).filter(item => item.trim() !== "");
  return r ? {
    texts: texts,
    problem: "non_text_ignored"
  } : {
    texts: texts
  };
}
var q = 100;
function L$i(e) {
  if (e == null) return {
    texts: []
  };
  if (!Array.isArray(e)) return {
    texts: [],
    problem: "malformed_inline_pastes"
  };
  let texts_2 = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (typeof i !== "string") return {
      texts: [],
      problem: "malformed_inline_pastes"
    };
    if (i.trim() === "") continue;
    if (texts_2.length === q) return {
      texts: texts_2,
      problem: "inline_pastes_cut"
    };
    texts_2.push(i);
  }
  return {
    texts: texts_2
  };
}
var B = new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function R(e) {
  return B.has(e) || !1;
}
function rX(e) {
  return e !== void 0 && B.has(e);
}
function qpt(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function Z_s(e, n) {
  if (n) return;
  return qpt(e) ? {
    kind: "human"
  } : void 0;
}
var L = new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]),
  V = new Set(["trigger_fire"]);
function G0n(e) {
  return e !== void 0 && V.has(e);
}
var U0t = "session_inbox",
  P = new Set(["github_webhook", "pr_steward", "signal_subscription"]);
function N$i(e) {
  return e !== void 0 && (P.has(e) || e === U0t);
}
var subkind = "projects-relay";
function ebs({
  relayMessageIds: relayMessageIds,
  isSynthetic: isSynthetic,
  coordinatorNote: coordinatorNote
}) {
  return relayMessageIds !== void 0 || isSynthetic !== !0 || coordinatorNote;
}
var J = "triggerFireReason";
function F$i(e, n) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let fireReason = EZt(n);
  return fireReason === void 0 ? e : {
    ...e,
    fireReason: fireReason
  };
}
function N(e) {
  if (G0n(e)) return {
    kind: "task-notification",
    subkind: "scheduled-trigger"
  };
  if (e === U0t) return {
    kind: "task-notification",
    subkind: "session-inbox"
  };
  if (e === Xbe) nX();
  return {
    kind: "task-notification"
  };
}
var Z = new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function EZt(e) {
  return k(e, J);
}
function V0n(e, n, r, i) {
  if (e === "now") return e;
  let s = r !== void 0 && te.has(r) && (r !== "trigger_fire" || i !== void 0);
  return n && Z.has(n) || s ? "later" : e;
}
var w = new Set(["claude-in-slack", "claude_in_slack"]),
  U = new Set([URe]),
  b = "claude-in-teams",
  TZt = "email_human",
  ee = "email_turn_text",
  ne = ["sender_only", "sender_reply"];
function K0n(e) {
  if (e.inbound_origin !== TZt) return;
  let n = k(e, ee);
  return ne.find(item => item === n);
}
function Ckr(e) {
  return e === Jbe;
}
function q0n(e) {
  return e === Jbe || e === JZe;
}
function re(e) {
  if (e === Jbe || e === JZe) return !0;
  return e !== void 0 && e.startsWith("hearth");
}
var te = new Set(["trigger_fire", "plugin_fire"]),
  oe = "receiver_grouping_id";
function tbs(e) {
  return k(e, oe);
}
function k(e, n) {
  let r = e[n];
  return typeof r === "string" ? r : void 0;
}
var ie = "activity_observation";
function nbs(e) {
  return k(e, ie);
}
function G() {
  return v5();
}
function se() {
  return nwt();
}
function ae(e, n) {
  return e !== void 0 && w.has(e) && n === cIr && G();
}
function ue(e, n) {
  return e === b && n === uIr && se();
}
function oCe(e, n) {
  return ae(e, n) || ue(e, n);
}
function O(e, n) {
  return n === void 0 && e !== void 0 && R(e) || oCe(e, n);
}
function Rkr(e, n, r) {
  return e ? e.kind === "human" : O(n, r);
}
function H$i(e, n, r, i) {
  if (e) return e.kind === "human";
  if (!n) return !0;
  return O(r, i) || Z_s(r, i) !== void 0;
}
function CZt(e, n, r = !1) {
  let i;
  try {
    i = Qpt(e);
  } catch {
    return !1;
  }
  if (!i || RZt(i.content)) return !1;
  let {
    clientPlatform: clientPlatform,
    inboundOrigin: inboundOrigin
  } = i;
  if (inboundOrigin !== void 0) return n === "bridge" ? oCe(clientPlatform, inboundOrigin) : Ypt(inboundOrigin, r);
  return O(clientPlatform, void 0) || n === "remote-worker" && qpt(clientPlatform);
}
function Ypt(e, n = !1, r = !1) {
  return e === cIr || e === uIr || e === gsn || n && e === Jbe || r && e === TZt;
}
var de = new Set([fvo, pvo, mvo, x$t]);
function $$i(e) {
  return Ypt(e, !0, !0) || de.has(e);
}
function Akr({
  isRelayHuman: isRelayHuman,
  isSynthetic: isSynthetic_2,
  ccrTurnId: ccrTurnId,
  isProjectsUser = !1,
  emailSenderTurn: emailSenderTurn,
  turnEffortCap: turnEffortCap
}) {
  if (!isRelayHuman) return {};
  let turnEffortCap_2 = _i.find(item => item === turnEffortCap);
  if (turnEffortCap !== void 0 && turnEffortCap_2 === void 0) t("[relay] turn_effort_cap is not an effort level, so it was ignored");
  return {
    ...(!isSynthetic_2 && {
      verifiedSlackHumanTurn: !0
    }),
    ...(!isSynthetic_2 && isProjectsUser && {
      projectsUserTurn: !0
    }),
    ...(!isSynthetic_2 && emailSenderTurn !== void 0 && {
      emailSenderTurn: emailSenderTurn
    }),
    ...(ccrTurnId !== void 0 && {
      ccrTurnId: ccrTurnId
    }),
    ...(turnEffortCap_2 !== void 0 && {
      turnEffortCap: turnEffortCap_2
    })
  };
}
function Y0n(e, n, inbound_origin, i, s, activityObservation, plugin) {
  let m = RZt(e);
  if (m) return {
    kind: "peer",
    from: m,
    inbound_origin: inbound_origin,
    ...(plugin !== void 0 && {
      plugin: plugin
    }),
    ...pAe(e)
  };
  if (inbound_origin === U0t) return N(inbound_origin);
  if (inbound_origin && P.has(inbound_origin)) return N(inbound_origin);
  let y = re(inbound_origin);
  if (!y && inbound_origin === void 0 && n && R(n)) return {
    kind: "human"
  };
  if (!y && oCe(n, inbound_origin)) return {
    kind: "human"
  };
  if (!y && n && L.has(n)) return N(inbound_origin);
  if (inbound_origin === Xbe && i) return {
    kind: "task-notification",
    subkind: "peer-send-message"
  };
  t(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`, {
    level: "warn"
  });
  let I = !n ? "absent" : n.startsWith("claude_code") ? "claude_code" : w.has(n) ? inbound_origin === URe && G() ? "slack_bot_observation" : "slack_relay" : n === b ? "teams_relay" : "other";
  return l("tengu_bridge_ingress_demoted", {
    platform_class: f(I)
  }), {
    kind: "peer",
    from: "unknown",
    inbound_origin: inbound_origin,
    ...pAe(e),
    ...(activityObservation !== void 0 && inbound_origin !== void 0 && U.has(inbound_origin) && {
      activityObservation: activityObservation
    })
  };
}
function Xpt(e, n, r) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (n && L.has(n)) return N(r);
  if (n && R(n)) return {
    kind: "human"
  };
  return;
}
function rbs(e, n, inbound_origin_2, i, s, d = !1, _ = !1, plugin_2, y = !1) {
  let I = RZt(e);
  if (I) return {
    kind: "peer",
    from: I,
    inbound_origin: inbound_origin_2,
    ...pAe(e),
    ...(plugin_2 !== void 0 && {
      plugin: plugin_2
    })
  };
  if (inbound_origin_2 && !U.has(inbound_origin_2)) {
    if (inbound_origin_2 === Jbe) if (d) g("bridge_projects_human_origin");else c("bridge_projects_human_origin", "disabled_by_flag");
    if (Ypt(inbound_origin_2, d, y)) return {
      kind: "human"
    };
    if (inbound_origin_2 === JZe && _) return {
      kind: "task-notification",
      subkind: subkind
    };
    if (inbound_origin_2 === Xbe && i) return {
      kind: "task-notification",
      subkind: "peer-send-message"
    };
    return N(inbound_origin_2);
  }
  if (qpt(n)) return {
    kind: "human"
  };
  if (n?.startsWith("claude_code")) return;
  return Y0n(e, n, inbound_origin_2, i, void 0, s, plugin_2);
}
function Jpt(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority !== "now";
}
function U$i(e, n) {
  if (e === "now") return e;
  return n ? "later" : e;
}
function oue(e) {
  let i = e.trimStart(),
    s = !1;
  while (i.startsWith("<system-reminder>")) {
    let _ = i.indexOf("</system-reminder>");
    if (_ < 0) break;
    i = i.slice(_ + 18).trimStart(), s = !0;
  }
  let d = (s ? i : e).trimEnd();
  while (d.endsWith("</system-reminder>")) {
    let _ = d.lastIndexOf(`
`);
    if (!(_ < 0 ? d : d.slice(_ + 1)).startsWith("<system-reminder>")) break;
    d = (_ < 0 ? "" : d.slice(0, _)).trimEnd(), s = !0;
  }
  if (!s) return e;
  return d === "" ? e : d;
}
function obs(e) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i.type !== "text") continue;
    let text = oue(i.text);
    if (text === i.text) continue;
    n ??= [...e], n[r] = {
      ...i,
      text: text
    };
  }
  return n ?? e;
}
function Qpt(e) {
  if (e.type !== "user") return;
  let pastedContent = "pasted_content" in e ? e.pasted_content : void 0,
    inlinePastes = "inline_pastes" in e ? e.inline_pastes : void 0,
    i = JP(e).length > 0 || jfo(pastedContent).texts.length > 0,
    s = e.message?.content;
  if (!s && !i) return;
  if (Array.isArray(s) && s.length === 0 && !i) return;
  let uuid = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
    clientPlatform_2 = k(e, "client_platform"),
    inboundOrigin_2 = k(e, "inbound_origin"),
    wakeEnvelope = "wake_envelope" in e ? e.wake_envelope : void 0,
    receiverGroupingId = tbs(e),
    activityObservation_2 = nbs(e),
    fromPlugin = uAe("from_plugin" in e ? e.from_plugin : void 0),
    slackOrigin,
    content = Array.isArray(s) ? sbs(obs(fe(s))) : oue(s ?? "");
  if (Array.isArray(content) && content.length === 0 && !i) return;
  return {
    content: content,
    uuid: uuid,
    clientPlatform: clientPlatform_2,
    inboundOrigin: inboundOrigin_2,
    wakeEnvelope: wakeEnvelope,
    receiverGroupingId: receiverGroupingId,
    slackOrigin: slackOrigin,
    activityObservation: activityObservation_2,
    pastedContent: pastedContent,
    inlinePastes: inlinePastes,
    fromPlugin: fromPlugin
  };
}
function RZt(e) {
  if (typeof e !== "string") return;
  return e.match(yDr)?.[1];
}
function aLe(e) {
  if (typeof e === "string") return RZt(e) !== void 0;
  if (!Array.isArray(e)) return !1;
  return e.some(item => typeof item === "object" && item !== null && "type" in item && item.type === "text" && "text" in item && typeof item.text === "string" && RZt(item.text) !== void 0);
}
function sbs(e) {
  if (!e.some(x)) return e;
  return e.filter(item => !x(item));
}
function x(e) {
  if (e.type !== "text") return !1;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function fe(e) {
  if (!e.some(M)) return e;
  return e.map(item => {
    if (!M(item)) return item;
    let source = item.source,
      media_type = typeof source.mediaType === "string" && source.mediaType ? source.mediaType : _Lt(item.source.data);
    return {
      ...item,
      source: {
        type: "base64",
        media_type: media_type,
        data: item.source.data
      }
    };
  });
}
function M(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return !1;
  return !e.source.media_type;
}
function iLe(e, n) {
  let onCommandLifecycle = e.onCommandLifecycle;
  e.onCommandLifecycle = (...i) => {
    onCommandLifecycle?.(...i), n(...i);
  };
}
function Tkr(e, n) {
  return n || xMr(e) ? "cancelled" : "completed";
}
export { P$i, O$i, lc, IJe, I$i, Bfo, z0n, J_s, nX, Jze, Q_s, vZt, M$i, D$i, iLe, Tkr, jfo, L$i, rX, qpt, Z_s, G0n, U0t, N$i, ebs, F$i, EZt, V0n, TZt, K0n, Ckr, q0n, tbs, nbs, oCe, Rkr, H$i, CZt, Ypt, $$i, Akr, Y0n, Xpt, rbs, Jpt, U$i, oue, obs, Qpt, RZt, aLe, sbs };