// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { fQt, xhs, UTe } from "B:/~BUN/root/chunk-6g8w5kyh.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { MG } from "B:/~BUN/root/chunk-206ebgh5.js";
import { VA } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { KS, Ijn, iS } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Vl } from "B:/~BUN/root/chunk-apcs0eny.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { jN, ehe } from "B:/~BUN/root/chunk-j4fnmshq.js";
import { Oot, F7, vP } from "B:/~BUN/root/chunk-t6j81pca.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { $a } from "B:/~BUN/root/chunk-12nc74pv.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var k = "</cross-session-message>",
  fallbackLabel = "peer";
function B(i) {
  let a = UTe.find(item => i.startsWith(item)),
    l = (a ? i.slice(a.length) : i).match(/^<cross-session-message\b([^>]*)>/)?.[1] ?? "",
    g = l.match(/\bfrom="([^"]+)"/)?.[1],
    c = l.match(/\bfrom-name="([^"]+)"/)?.[1];
  return J(c, g);
}
function J(i, a) {
  return i && KS(i) || a && KS(ee(a)) || fallbackLabel;
}
function T(i, a) {
  let o = i,
    l = UTe.find(item => o.startsWith(item));
  if (l) o = o.slice(l.length);
  let g = o.lastIndexOf(k) + k.length;
  if (g > k.length - 1) {
    let c = o.slice(g);
    if (fQt.includes(c) || a && xhs.includes(c)) o = o.slice(0, g);
  }
  return o.replace(/^<cross-session-message[^>]*>\n/, "").replace(/\n<\/cross-session-message>$/, "");
}
function wNo(i, a) {
  let o = T(i, a),
    l = VA($a(o.replace(/\p{Cs}/gu, "\u200B")), " ", {
      keepEmojiJoiners: !0
    }).replace(/\s+/g, " ").trim();
  return Ijn(o) !== l;
}
function Rsa(i) {
  let m = S(22),
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
    expanded = MG(verbose, isTranscriptMode),
    x;
  if (m[0] !== text) x = B(text), m[0] = text, m[1] = x;else x = m[1];
  let b = x,
    W;
  if (m[2] !== t) W = t?.kind === "peer" && t.plugin !== void 0 ? KS(t.plugin) : "", m[2] = t, m[3] = W;else W = m[3];
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
  return F7.useUserMessageSite(F);
}
function R(i) {
  let t = S(19),
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
    if (t[0] !== d) p = e(vP, {
      text: d
    }), t[0] = d, t[1] = p;else p = t[1];
    return p;
  }
  if (!expanded_2) {
    let p;
    if (t[2] !== addMargin_2 || t[3] !== d || t[4] !== displayName) p = e(ehe, {
      displayName: displayName,
      addMargin: addMargin_2,
      fallbackLabel: fallbackLabel,
      body: d
    }), t[2] = addMargin_2, t[3] = d, t[4] = displayName, t[5] = p;else p = t[5];
    return p;
  }
  const marginTop = addMargin_2 ? 1 : 0;
  let color;
  if (t[6] === w) color = jN(void 0), t[6] = color;else color = t[6];
  let u;
  if (t[7] !== senderPlugin_2) u = senderPlugin_2 ? r(n, {
    dimColor: !0,
    children: [" <", senderPlugin_2, " plugin", ">"]
  }) : null, t[7] = senderPlugin_2, t[8] = u;else u = t[8];
  let y;
  if (t[9] === w) y = e(n, {
    "aria-hidden": !0,
    children: re.pointer
  }), t[9] = y;else y = t[9];
  let m;
  if (t[10] !== displayName || t[11] !== u) m = r(n, {
    color: color,
    children: ["@ ", displayName, u, y]
  }), t[10] = displayName, t[11] = u, t[12] = m;else m = t[12];
  let x;
  if (t[13] !== d) x = e(s, {
    paddingLeft: 2,
    children: e(Vl, {
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
function ee(i) {
  let {
    scheme: scheme,
    target: target
  } = iS(i);
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
export { wNo, Rsa };