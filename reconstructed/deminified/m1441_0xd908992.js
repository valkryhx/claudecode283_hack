// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { $at, APr, Uee } from "B:/~BUN/root/chunk-wefm1yd9.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Dj } from "B:/~BUN/root/chunk-ekzfyp3g.js";
import { J0 } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Ty, OFt, lh } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Pi } from "B:/~BUN/root/chunk-xky3bazf.js";
import { UC, y5 } from "B:/~BUN/root/chunk-bj3tjz4y.js";
import { GPe, Pj, rO } from "B:/~BUN/root/chunk-sxndssgg.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
var k = "</cross-session-message>",
  fallbackLabel = "peer";
function v(i) {
  let a = Uee.find(item => i.startsWith(item)),
    l = (a ? i.slice(a.length) : i).match(/^<cross-session-message\b([^>]*)>/)?.[1] ?? "",
    g = l.match(/\bfrom="([^"]+)"/)?.[1],
    c = l.match(/\bfrom-name="([^"]+)"/)?.[1];
  return J(c, g);
}
function J(i, a) {
  return i && Ty(i) || a && Ty(oe(a)) || fallbackLabel;
}
function T(i, a) {
  let o = i,
    l = Uee.find(item => o.startsWith(item));
  if (l) o = o.slice(l.length);
  let g = o.lastIndexOf(k) + k.length;
  if (g > k.length - 1) {
    let c = o.slice(g);
    if ($at.includes(c) || a && APr.includes(c)) o = o.slice(0, g);
  }
  return o.replace(/^<cross-session-message[^>]*>\n/, "").replace(/\n<\/cross-session-message>$/, "");
}
function f7n(i, a) {
  let o = T(i, a),
    l = J0(o, " ", {
      keepEmojiJoiners: !0
    }).replace(/\s+/g, " ").trim();
  return OFt(o) !== l;
}
function F1o(i) {
  let m = w(22),
    {
      addMargin: addMargin,
      param: param,
      hostInjected: hostInjected,
      verbose: verbose,
      isTranscriptMode: isTranscriptMode,
      messageId: messageId,
      origin: t,
      followsSpeakerLabel: followsSpeakerLabel
    } = i,
    {
      text: text
    } = param,
    followsSpeakerLabel_2 = followsSpeakerLabel === void 0 ? !1 : followsSpeakerLabel,
    expanded = Dj(verbose, isTranscriptMode),
    x;
  if (m[0] !== text) x = v(text), m[0] = text, m[1] = x;else x = m[1];
  let b = x,
    W;
  if (m[2] !== t) W = t?.kind === "peer" && t.plugin !== void 0 ? Ty(t.plugin) : "", m[2] = t, m[3] = W;else W = m[3];
  let senderPlugin = W;
  const _ = hostInjected === !0;
  let text_2;
  if (m[4] !== _ || m[5] !== text) text_2 = T(text, _), m[4] = _, m[5] = text, m[6] = text_2;else text_2 = m[6];
  const isExpanded = expanded || followsSpeakerLabel_2;
  let sender;
  if (m[7] !== b) sender = {
    name: b
  }, m[7] = b, m[8] = sender;else sender = m[8];
  let draw;
  if (m[9] !== addMargin || m[10] !== b || m[11] !== expanded || m[12] !== followsSpeakerLabel_2 || m[13] !== senderPlugin) draw = body => e(R, {
    addMargin: addMargin,
    displayName: b,
    senderPlugin: senderPlugin,
    expanded: expanded,
    followsSpeakerLabel: followsSpeakerLabel_2,
    body: body
  }), m[9] = addMargin, m[10] = b, m[11] = expanded, m[12] = followsSpeakerLabel_2, m[13] = senderPlugin, m[14] = draw;else draw = m[14];
  let F;
  if (m[15] !== messageId || m[16] !== t || m[17] !== text_2 || m[18] !== isExpanded || m[19] !== sender || m[20] !== draw) F = {
    messageId: messageId,
    stored: t,
    text: text_2,
    isExpanded: isExpanded,
    sender: sender,
    draw: draw
  }, m[15] = messageId, m[16] = t, m[17] = text_2, m[18] = isExpanded, m[19] = sender, m[20] = draw, m[21] = F;else F = m[21];
  return Pj.useUserMessageSite(F);
}
function R(i) {
  let t = w(19),
    {
      addMargin: addMargin_2,
      displayName: displayName,
      senderPlugin: senderPlugin_2,
      expanded: expanded_2,
      followsSpeakerLabel: followsSpeakerLabel_3,
      body: d
    } = i;
  if (followsSpeakerLabel_3) {
    let p;
    if (t[0] !== d) p = e(rO, {
      text: d
    }), t[0] = d, t[1] = p;else p = t[1];
    return p;
  }
  if (!expanded_2) {
    let p;
    if (t[2] !== addMargin_2 || t[3] !== d || t[4] !== displayName) p = e(y5, {
      displayName: displayName,
      addMargin: addMargin_2,
      fallbackLabel: fallbackLabel,
      body: d
    }), t[2] = addMargin_2, t[3] = d, t[4] = displayName, t[5] = p;else p = t[5];
    return p;
  }
  const marginTop = addMargin_2 ? 1 : 0;
  let color;
  if (t[6] === S) color = UC(void 0), t[6] = color;else color = t[6];
  let u;
  if (t[7] !== senderPlugin_2) u = senderPlugin_2 ? r(n, {
    dimColor: !0,
    children: [" <", senderPlugin_2, " plugin", ">"]
  }) : null, t[7] = senderPlugin_2, t[8] = u;else u = t[8];
  let y;
  if (t[9] === S) y = e(n, {
    "aria-hidden": !0,
    children: Z.pointer
  }), t[9] = y;else y = t[9];
  let m;
  if (t[10] !== displayName || t[11] !== u) m = r(n, {
    color: color,
    children: ["@ ", displayName, u, y]
  }), t[10] = displayName, t[11] = u, t[12] = m;else m = t[12];
  let x;
  if (t[13] !== d) x = e(s, {
    paddingLeft: 2,
    children: e(Pi, {
      stripPromptTags: !1,
      children: d
    })
  }), t[13] = d, t[14] = x;else x = t[14];
  let b;
  if (t[15] !== marginTop || t[16] !== m || t[17] !== x) b = r(s, {
    flexDirection: "column",
    marginTop: marginTop,
    width: "100%",
    children: [m, x]
  }), t[15] = marginTop, t[16] = m, t[17] = x, t[18] = b;else b = t[18];
  return b;
}
function oe(i) {
  let {
    scheme: scheme,
    target: target
  } = lh(i);
  switch (scheme) {
    case "uds":
      return target.slice(Math.max(target.lastIndexOf("/"), target.lastIndexOf("\\")) + 1).replace(/\.sock$/, "");
    case "bridge":
      return "(untitled)";
    case "did":
    case "other":
      return i;
  }
}
export { f7n, F1o };