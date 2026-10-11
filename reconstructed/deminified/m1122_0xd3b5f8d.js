// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { CC, rBe } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { ZYe, ifn, URe } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { T7 } from "B:/~BUN/root/chunk-0p35j9y3.js";
import { p3e } from "B:/~BUN/root/chunk-07stbc6s.js";
import { zte, wYe, zFe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { o, C, ut, $e, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var U = f(() => C($e([o(), C($e([ut({
  type: A("text"),
  text: o()
}), ut({
  type: o()
})]))])));
function Ixn(e) {
  if (e == null) return {
    texts: []
  };
  let n = U().safeParse(e);
  if (!n.success) return {
    texts: [],
    problem: "malformed"
  };
  let r = !1,
    texts = n.data.map(item => {
      if (typeof item === "string") return item;
      let u = [];
      for (let d of item) if (d.type === "text" && "text" in d && typeof d.text === "string") u.push(d.text);else r = !0;
      return u.join(`
`);
    }).filter(item => item.trim() !== "");
  return r ? {
    texts: texts,
    problem: "non_text_ignored"
  } : {
    texts: texts
  };
}
var N = 100,
  H = f(() => C(o()));
function oio(e) {
  if (e == null) return {
    texts: []
  };
  let n = H().safeParse(e);
  if (!n.success) return {
    texts: [],
    problem: "malformed_inline_pastes"
  };
  let texts_2 = n.data.filter(item => item.trim() !== "");
  return texts_2.length > N ? {
    texts: texts_2.slice(0, N),
    problem: "inline_pastes_cut"
  } : {
    texts: texts_2
  };
}
var k = new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function jkt(e) {
  return e !== void 0 && k.has(e);
}
function v5t(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function Qur(e, n) {
  if (n) return;
  return v5t(e) ? {
    kind: "human"
  } : void 0;
}
var P = new Set(["scheduled_trigger", "force_run_trigger", "github_webhook_trigger", "fire_routine", "pr_steward"]),
  F = new Set(["trigger_fire"]),
  k5t = "session_inbox",
  B = new Set(["github_webhook", "pr_steward", "signal_subscription"]);
function sio(e) {
  return e !== void 0 && (B.has(e) || e === k5t);
}
var subkind = "projects-relay";
function Zur({
  relayMessageIds: relayMessageIds,
  isSynthetic: isSynthetic
}) {
  return relayMessageIds !== void 0 || isSynthetic !== !0;
}
var K = "triggerFireReason";
function iio(e, n) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let fireReason = y(n, K);
  return fireReason === void 0 ? e : {
    ...e,
    fireReason: fireReason
  };
}
function m(e) {
  if (e && F.has(e)) return {
    kind: "task-notification",
    subkind: "scheduled-trigger"
  };
  if (e === k5t) return {
    kind: "task-notification",
    subkind: "session-inbox"
  };
  return {
    kind: "task-notification"
  };
}
var W = new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function Wkt(e, n, r) {
  if (e === "now") return e;
  return n && W.has(n) || r && Q.has(r) ? "later" : e;
}
var b = new Set(["claude-in-slack", "claude_in_slack"]),
  w = "slack_human",
  L = new Set([wYe]),
  M = "claude-in-teams",
  D = "teams_human",
  z = "owner_relay",
  I = "hearth_human";
function Oxn(e) {
  return e === I;
}
function E5t(e) {
  return e === I || e === zFe;
}
function Y(e) {
  if (e === I || e === zFe) return !0;
  return e !== void 0 && e.startsWith("hearth");
}
var Q = new Set(["trigger_fire", "plugin_fire"]),
  V = "receiver_grouping_id";
function epr(e) {
  return y(e, V);
}
function y(e, n) {
  let r = e[n];
  return typeof r === "string" ? r : void 0;
}
var X = "activity_observation";
function tpr(e) {
  return y(e, X);
}
function v() {
  return CC();
}
function q() {
  return rBe();
}
function J(e, n) {
  return e !== void 0 && b.has(e) && n === w && v();
}
function Z(e, n) {
  return e === M && n === D && q();
}
function pwe(e, n) {
  return J(e, n) || Z(e, n);
}
function x(e, n) {
  return n === void 0 && e !== void 0 && k.has(e) || pwe(e, n);
}
function T5t(e, n, r) {
  return e ? e.kind === "human" : x(n, r);
}
function aio(e, n, r, s) {
  if (e) return e.kind === "human";
  if (!n) return !0;
  return x(r, s) || Qur(r, s) !== void 0;
}
function C5t(e, n, r = !1) {
  let s;
  try {
    s = Vkt(e);
  } catch {
    return !1;
  }
  if (!s || vet(s.content)) return !1;
  let {
    clientPlatform: clientPlatform,
    inboundOrigin: inboundOrigin
  } = s;
  if (inboundOrigin !== void 0) return n === "bridge" ? pwe(clientPlatform, inboundOrigin) : zkt(inboundOrigin, r);
  return x(clientPlatform, void 0) || n === "remote-worker" && v5t(clientPlatform);
}
function zkt(e, n = !1) {
  return e === w || e === D || e === z || n && e === I;
}
function Mxn({
  isRelayHuman: isRelayHuman,
  isSynthetic: isSynthetic_2,
  ccrTurnId: ccrTurnId,
  isProjectsUser = !1
}) {
  if (!isRelayHuman) return {};
  return {
    ...(!isSynthetic_2 && {
      verifiedSlackHumanTurn: !0
    }),
    ...(!isSynthetic_2 && isProjectsUser && {
      projectsUserTurn: !0
    }),
    ...(ccrTurnId !== void 0 && {
      ccrTurnId: ccrTurnId
    })
  };
}
function Gkt(e, n, inbound_origin, s, a, activityObservation, plugin) {
  let l = vet(e);
  if (l) return {
    kind: "peer",
    from: l,
    inbound_origin: inbound_origin,
    ...(plugin !== void 0 && {
      plugin: plugin
    }),
    ...URe(e)
  };
  if (inbound_origin === k5t) return m(inbound_origin);
  if (inbound_origin && B.has(inbound_origin)) return m(inbound_origin);
  let g = Y(inbound_origin);
  if (!g && inbound_origin === void 0 && n && k.has(n)) return {
    kind: "human"
  };
  if (!g && pwe(n, inbound_origin)) return {
    kind: "human"
  };
  if (!g && n && P.has(n)) return m(inbound_origin);
  if (inbound_origin === zte && s) return {
    kind: "task-notification",
    subkind: "peer-send-message"
  };
  t(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`, {
    level: "warn"
  });
  let S = !n ? "absent" : n.startsWith("claude_code") ? "claude_code" : b.has(n) ? inbound_origin === wYe && v() ? "slack_bot_observation" : "slack_relay" : n === M ? "teams_relay" : "other";
  return i("tengu_bridge_ingress_demoted", {
    platform_class: c(S)
  }), {
    kind: "peer",
    from: "unknown",
    inbound_origin: inbound_origin,
    ...URe(e),
    ...(activityObservation !== void 0 && inbound_origin !== void 0 && L.has(inbound_origin) && {
      activityObservation: activityObservation
    })
  };
}
function l2e(e, n, r) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (n && P.has(n)) return m(r);
  if (n && k.has(n)) return {
    kind: "human"
  };
  return;
}
function npr(e, n, inbound_origin_2, s, a, u = !1, d = !1, plugin_2) {
  let g = vet(e);
  if (g) return {
    kind: "peer",
    from: g,
    inbound_origin: inbound_origin_2,
    ...URe(e),
    ...(plugin_2 !== void 0 && {
      plugin: plugin_2
    })
  };
  if (inbound_origin_2 && !L.has(inbound_origin_2)) {
    if (inbound_origin_2 === I) if (u) _("bridge_projects_human_origin");else p("bridge_projects_human_origin", "disabled_by_flag");
    if (zkt(inbound_origin_2, u)) return {
      kind: "human"
    };
    if (inbound_origin_2 === zFe && d) return {
      kind: "task-notification",
      subkind: subkind
    };
    if (inbound_origin_2 === zte && s) return {
      kind: "task-notification",
      subkind: "peer-send-message"
    };
    return m(inbound_origin_2);
  }
  if (v5t(n)) return {
    kind: "human"
  };
  if (n?.startsWith("claude_code")) return;
  return Gkt(e, n, inbound_origin_2, s, void 0, a, plugin_2);
}
function t0e(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority !== "now";
}
function lio(e, n) {
  if (e === "now") return e;
  return n ? "later" : e;
}
function n0e(e) {
  let s = e.trimStart(),
    a = !1;
  while (s.startsWith("<system-reminder>")) {
    let d = s.indexOf("</system-reminder>");
    if (d < 0) break;
    s = s.slice(d + 18).trimStart(), a = !0;
  }
  let u = (a ? s : e).trimEnd();
  while (u.endsWith("</system-reminder>")) {
    let d = u.lastIndexOf(`
`);
    if (!(d < 0 ? u : u.slice(d + 1)).startsWith("<system-reminder>")) break;
    u = (d < 0 ? "" : u.slice(0, d)).trimEnd(), a = !0;
  }
  if (!a) return e;
  return u === "" ? e : u;
}
function rpr(e) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s.type !== "text") continue;
    let text = n0e(s.text);
    if (text === s.text) continue;
    n ??= [...e], n[r] = {
      ...s,
      text: text
    };
  }
  return n ?? e;
}
function Vkt(e) {
  if (e.type !== "user") return;
  let pastedContent = "pasted_content" in e ? e.pasted_content : void 0,
    inlinePastes = "inline_pastes" in e ? e.inline_pastes : void 0,
    s = T7(e).length > 0 || Ixn(pastedContent).texts.length > 0,
    a = e.message?.content;
  if (!a && !s) return;
  if (Array.isArray(a) && a.length === 0 && !s) return;
  let uuid = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
    clientPlatform_2 = y(e, "client_platform"),
    inboundOrigin_2 = y(e, "inbound_origin"),
    receiverGroupingId = epr(e),
    activityObservation_2 = tpr(e),
    fromPlugin = ZYe("from_plugin" in e ? e.from_plugin : void 0),
    slackOrigin,
    content = Array.isArray(a) ? opr(rpr(ee(a))) : n0e(a ?? "");
  if (Array.isArray(content) && content.length === 0 && !s) return;
  return {
    content: content,
    uuid: uuid,
    clientPlatform: clientPlatform_2,
    inboundOrigin: inboundOrigin_2,
    receiverGroupingId: receiverGroupingId,
    slackOrigin: slackOrigin,
    activityObservation: activityObservation_2,
    pastedContent: pastedContent,
    inlinePastes: inlinePastes,
    fromPlugin: fromPlugin
  };
}
function vet(e) {
  if (typeof e !== "string") return;
  return e.match(ifn)?.[1];
}
function qkt(e) {
  if (typeof e === "string") return vet(e) !== void 0;
  if (!Array.isArray(e)) return !1;
  return e.some(item => typeof item === "object" && item !== null && "type" in item && item.type === "text" && "text" in item && typeof item.text === "string" && vet(item.text) !== void 0);
}
function opr(e) {
  if (!e.some(O)) return e;
  return e.filter(item => !O(item));
}
function O(e) {
  if (e.type !== "text") return !1;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function ee(e) {
  if (!e.some(T)) return e;
  return e.map(item => {
    if (!T(item)) return item;
    let source = item.source,
      media_type = typeof source.mediaType === "string" && source.mediaType ? source.mediaType : p3e(item.source.data);
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
function T(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return !1;
  return !e.source.media_type;
}
export { Ixn, oio, jkt, v5t, Qur, k5t, sio, Zur, iio, Wkt, Oxn, E5t, epr, tpr, pwe, T5t, aio, C5t, zkt, Mxn, Gkt, l2e, npr, t0e, lio, n0e, rpr, Vkt, vet, qkt, opr };