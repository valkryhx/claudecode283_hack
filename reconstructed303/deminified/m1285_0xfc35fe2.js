// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Wf, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { n$ } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { Tx, HH } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { jh, Dl } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { Fae } from "B:/~BUN/root/chunk-rsxy354n.js";
import { ift, hxr } from "B:/~BUN/root/chunk-rnh5g2g4.js";
import { $1 } from "B:/~BUN/root/chunk-atk141qr.js";
var yit = /^file_[A-Za-z0-9_]{8,80}$/,
  I = 8000,
  S = 16000,
  y = 64,
  A = 512,
  E = 40,
  D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;
function h(e, r) {
  let n = Wf(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}
function OAe(e) {
  return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "");
}
function jFe(e) {
  return e === "rc_owner" ? "your user \xB7 Remote Control" : "third-party";
}
async function Uso(e) {
  let {
    sessionId: sessionId,
    fileId: fileId,
    baseUrl: baseUrl,
    getAccessToken: getAccessToken,
    getTrustedDeviceToken: getTrustedDeviceToken
  } = e;
  if (!yit.test(fileId)) return m("bridge_inbox_fetch", "malformed_id"), {
    ok: !1,
    reason: "malformed",
    detail: "file_id must be a Files API id (file_\u2026)"
  };
  try {
    jh(sessionId, "session id");
  } catch {
    return m("bridge_inbox_fetch", "malformed_session_id"), {
      ok: !1,
      reason: "malformed",
      detail: "session id contains unsafe characters"
    };
  }
  let accessToken = getAccessToken();
  if (!accessToken) return t("[bridge] No access token for inbox fetch"), m("bridge_inbox_fetch", "no_token"), {
    ok: !1,
    reason: "no_token"
  };
  let l = `${baseUrl}/v1/code/sessions/${Dl(sessionId)}/inbox/${fileId}`,
    o;
  try {
    o = await Ct.get(l, {
      headers: hxr(accessToken, {
        trustedDeviceToken: await getTrustedDeviceToken?.()
      }),
      timeout: 1e4,
      maxContentLength: 262144,
      validateStatus: a => a < 500
    });
  } catch (error) {
    return t(`[bridge] inbox fetch request failed: ${d(error)}`), m("bridge_inbox_fetch", "request_failed"), {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (o.status !== 200) {
    let a = ift(o.data),
      f = Tx(o.data);
    t(`[bridge] inbox fetch failed ${o.status}${a ? ` [${a}]` : ""}${f ? `: ${f}` : ""}`);
    let _ = o.status === 403 ? Fae(o.data) : void 0,
      reason = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : a === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return m("bridge_inbox_fetch", reason), {
      ok: !1,
      reason: reason,
      detail: HH(o.data)
    };
  }
  let u = N(o.data, sessionId, fileId);
  if (u === "wrong_session") return t("[bridge] inbox fetch: the message names another session \u2014 refusing to relay it"), m("bridge_inbox_fetch", "wrong_session"), {
    ok: !1,
    reason: "wrong_session",
    detail: "that inbox message is not addressed to this session"
  };
  if (!u) return t("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)"), m("bridge_inbox_fetch", "malformed_response"), {
    ok: !1,
    reason: "malformed",
    detail: "unexpected response shape"
  };
  return g("bridge_inbox_fetch"), {
    ok: !0,
    message: u.message,
    envelopedText: xMn(u.message),
    download: {
      baseUrl: baseUrl,
      accessToken: accessToken
    }
  };
}
function xMn(e, r) {
  let n = {
    message_id: e.messageId,
    source: e.source,
    sender_kind: e.senderKind,
    body: e.body
  };
  if (e.senderDisplay) n.sender_display = e.senderDisplay;
  if (e.slackPermalink) n.slack_permalink = e.slackPermalink;
  if (e.createdAt) n.received_at = e.createdAt;
  if (r) n.attachments = r;
  let p = S,
    c = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`,
    s = `
</event>`,
    i = n$("event", JSON.stringify(n));
  if (c.length + i.length + s.length > p) {
    let l = I;
    do l = Math.floor(l / 2), n.body = w(e.bodyHead, l, e.bodyDroppedAtIngest), i = n$("event", JSON.stringify(n)); while (l > 64 && c.length + i.length + s.length > p);
  }
  return `${c}${i}${s}`;
}
function w(e, r, n = 0) {
  return e.length > r ? `${ne(e, r)} [\u2026truncated ${e.length - r + n} chars]` : n > 0 ? `${e} [\u2026truncated ${n} chars]` : e;
}
function N(e, r, n) {
  if (!e || typeof e !== "object") return null;
  let c = e.message;
  if (!c || typeof c !== "object") return null;
  let s = c;
  if (s.file_id !== n || typeof s.message_id !== "string" || Vt(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    jh(s.session_id, "session id"), i = Dl(s.session_id);
  } catch {
    return null;
  }
  if (i !== Dl(r)) return "wrong_session";
  let messageId = s.message_id.toLowerCase(),
    senderKind = C(s.sender_kind),
    attachments = senderKind === "rc_owner" ? $1({
      file_attachments: s.attachments
    }) : [],
    a = s.slack && typeof s.slack === "object" ? s.slack : void 0,
    f = a && typeof a.permalink === "string" ? h(a.permalink, !1) : void 0,
    _ = typeof s.created_at === "string" ? s.created_at : void 0,
    b = typeof s.sender_display === "string" ? OAe(h(s.sender_display, !1)) : "",
    x = b.length > y ? `${ne(b, y)}\u2026` : b;
  return {
    message: {
      messageId: messageId,
      senderKind: senderKind,
      senderDisplay: x || void 0,
      ...(attachments.length > 0 && {
        attachments: attachments
      }),
      source: k(s.source, "SESSION_INBOX_SOURCE_"),
      ...P(h(s.body, !0)),
      slackPermalink: f && f.length <= A && D.test(f) ? f : void 0,
      createdAt: _ && _.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(_) ? _ : void 0
    }
  };
}
var R = ["slack_user", "account", "rc_owner"];
function C(e) {
  let r = k(e, "SESSION_INBOX_SENDER_KIND_");
  return R.find(item => item === r) ?? "unknown";
}
function k(e, r) {
  if (typeof e !== "string") return "";
  let n = e.startsWith(r) ? e.slice(r.length) : e;
  return /^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED") ? n.toLowerCase() : "";
}
function P(e) {
  if (e.length <= I) return {
    body: e,
    bodyHead: e,
    bodyDroppedAtIngest: 0
  };
  let bodyHead = ne(e, I),
    bodyDroppedAtIngest = e.length - bodyHead.length;
  return {
    body: `${bodyHead} [\u2026truncated ${bodyDroppedAtIngest} chars]`,
    bodyHead: bodyHead,
    bodyDroppedAtIngest: bodyDroppedAtIngest
  };
}
export { yit, OAe, jFe, Uso, xMn };