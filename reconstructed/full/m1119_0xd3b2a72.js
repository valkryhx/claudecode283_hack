// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  mt
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  af
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  SJ
} from "B:/~BUN/root/chunk-9xz983aj.js";
import {
  rp
} from "B:/~BUN/root/chunk-skjrk8s1.js";
import {
  lf,
  ci
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  WF
} from "B:/~BUN/root/chunk-ztbv79md.js";
import {
  rlt,
  UWn
} from "B:/~BUN/root/chunk-06rekkgz.js";
import {
  T7
} from "B:/~BUN/root/chunk-0p35j9y3.js";
var wet = /^file_[A-Za-z0-9_]{8,80}$/,
  I = 8000,
  S = 16000,
  y = 64,
  A = 512,
  E = 40,
  w = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;

function h(e, r) {
  let n = af(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim()
}

function Npe(e) {
  return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "")
}

function uwe(e) {
  return e === "rc_owner" ? "your user \xB7 Remote Control" : "third-party"
}
async function Jur(e) {
  let {
    sessionId: r,
    fileId: n,
    baseUrl: p,
    getAccessToken: a,
    getTrustedDeviceToken: s
  } = e;
  if (!wet.test(n)) return m("bridge_inbox_fetch", "malformed_id"), {
    ok: !1,
    reason: "malformed",
    detail: "file_id must be a Files API id (file_\u2026)"
  };
  try {
    lf(r, "session id")
  } catch {
    return m("bridge_inbox_fetch", "malformed_session_id"), {
      ok: !1,
      reason: "malformed",
      detail: "session id contains unsafe characters"
    }
  }
  let i = a();
  if (!i) return t("[bridge] No access token for inbox fetch"), m("bridge_inbox_fetch", "no_token"), {
    ok: !1,
    reason: "no_token"
  };
  let g = `${p}/v1/code/sessions/${ci(r)}/inbox/${n}`,
    o;
  try {
    o = await mt.get(g, {
      headers: UWn(i, {
        trustedDeviceToken: await s?.()
      }),
      timeout: 1e4,
      maxContentLength: 262144,
      validateStatus: (d) => d < 500
    })
  } catch (d) {
    return t(`[bridge] inbox fetch request failed: ${l(d)}`), m("bridge_inbox_fetch", "request_failed"), {
      ok: !1,
      reason: "request_failed"
    }
  }
  if (o.status !== 200) {
    let d = rlt(o.data),
      c = rp(o.data);
    t(`[bridge] inbox fetch failed ${o.status}${d?` [${d}]`:""}${c?`: ${c}`:""}`);
    let f = o.status === 403 ? WF(o.data, c) : void 0,
      b = o.status === 404 ? "not_found" : f === "untrusted_device" ? "untrusted_device" : f === "session_stale_relogin" ? "relogin" : d === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return m("bridge_inbox_fetch", b), {
      ok: !1,
      reason: b,
      detail: c
    }
  }
  let u = N(o.data, r, n);
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
  return _("bridge_inbox_fetch"), {
    ok: !0,
    message: u.message,
    envelopedText: Pxn(u.message),
    download: {
      baseUrl: p,
      accessToken: i
    }
  }
}

function Pxn(e, r) {
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
    a = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`,
    s = `
</event>`,
    i = SJ("event", JSON.stringify(n));
  if (a.length + i.length + s.length > p) {
    let g = I;
    do g = Math.floor(g / 2), n.body = D(e.bodyHead, g, e.bodyDroppedAtIngest), i = SJ("event", JSON.stringify(n)); while (g > 64 && a.length + i.length + s.length > p)
  }
  return `${a}${i}${s}`
}

function D(e, r, n = 0) {
  return e.length > r ? `${re(e,r)} [\u2026truncated ${e.length-r+n} chars]` : n > 0 ? `${e} [\u2026truncated ${n} chars]` : e
}

function N(e, r, n) {
  if (!e || typeof e !== "object") return null;
  let a = e.message;
  if (!a || typeof a !== "object") return null;
  let s = a;
  if (s.file_id !== n || typeof s.message_id !== "string" || en(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    lf(s.session_id, "session id"), i = ci(s.session_id)
  } catch {
    return null
  }
  if (i !== ci(r)) return "wrong_session";
  let g = s.message_id.toLowerCase(),
    o = C(s.sender_kind),
    u = o === "rc_owner" ? T7({
      file_attachments: s.attachments
    }) : [],
    d = s.slack && typeof s.slack === "object" ? s.slack : void 0,
    c = d && typeof d.permalink === "string" ? h(d.permalink, !1) : void 0,
    f = typeof s.created_at === "string" ? s.created_at : void 0,
    b = typeof s.sender_display === "string" ? Npe(h(s.sender_display, !1)) : "",
    x = b.length > y ? `${re(b,y)}\u2026` : b;
  return {
    message: {
      messageId: g,
      senderKind: o,
      senderDisplay: x || void 0,
      ...u.length > 0 && {
        attachments: u
      },
      source: k(s.source, "SESSION_INBOX_SOURCE_"),
      ...P(h(s.body, !0)),
      slackPermalink: c && c.length <= A && w.test(c) ? c : void 0,
      createdAt: f && f.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(f) ? f : void 0
    }
  }
}
var R = ["slack_user", "account", "rc_owner"];

function C(e) {
  let r = k(e, "SESSION_INBOX_SENDER_KIND_");
  return R.find((n) => n === r) ?? "unknown"
}

function k(e, r) {
  if (typeof e !== "string") return "";
  let n = e.startsWith(r) ? e.slice(r.length) : e;
  return /^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED") ? n.toLowerCase() : ""
}

function P(e) {
  if (e.length <= I) return {
    body: e,
    bodyHead: e,
    bodyDroppedAtIngest: 0
  };
  let r = re(e, I),
    n = e.length - r.length;
  return {
    body: `${r} [\u2026truncated ${n} chars]`,
    bodyHead: r,
    bodyDroppedAtIngest: n
  }
}
export {
  wet,
  Npe,
  uwe,
  Jur,
  Pxn
};
