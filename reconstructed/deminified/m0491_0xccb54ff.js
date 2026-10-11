// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ke } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { qr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Bn, Ox, ED, zR, Mv, h5e, y5e, yJ, ch } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { O3e } from "B:/~BUN/root/chunk-j36yaq51.js";
import { RO } from "B:/~BUN/root/chunk-7z8vew74.js";
import { HU, Qet, lm, Awe, bse } from "B:/~BUN/root/chunk-dty6td52.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
var hYt = "__artifactCommentTarget",
  g = 120,
  timeoutMs = 4000,
  T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function jvt(e) {
  return Awe(e).replace(/[\n\t]/g, " ").replace(zR, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(Ox, "'").replace(ED, "'").trim();
}
function A(e, t) {
  let o = jvt(e);
  return Array.from(o).length > t ? `${RO(qr(o, t))}\u2026` : o;
}
function E(e, thread_id, o) {
  let r = e.find(item => item.id === thread_id),
    n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let excerpt = Mv(A(n.text.replace(ch, " "), g)).replace(yJ, " ").replace(h5e, y5e).replace(/ {2,}/g, " ").trim();
  if (excerpt === "") return;
  let i = HU(n.account, o),
    c = lm(n),
    by = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return {
    display: {
      thread_id: thread_id,
      by: by,
      excerpt: excerpt,
      replies: r.comments.length - 1,
      resolved: r.resolved && r.resolvedDegraded !== !0
    },
    ...(by === "viewer" && n.access !== void 0 && {
      access: n.access
    })
  };
}
function Qcr(e) {
  let t = me(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0;
}
async function Zcr(e, t, o) {
  if (!Bn.test(t)) return;
  let r = _(e.slug, t),
    commentTargets = ee().commentTargets,
    accountEpoch = ee().accountEpoch,
    i = commentTargets.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let {
    signal: signal,
    cleanup: cleanup
  } = Ao(o.abortController.signal, {
    timeoutMs: timeoutMs,
    refTimer: !0
  });
  try {
    let [s, f] = await Promise.all([bse(e, signal, o.credentials, "artifact_comment_consent_read", {
      skipBootProbe: !0
    }), O3e(o.credentials)]);
    if (s.err !== null) {
      commentTargets.delete(r);
      return;
    }
    let target = E(s.threads, t, {
      account: f?.accountUuid?.toLowerCase(),
      tokens: Qet()
    });
    if (target === void 0) {
      p("artifact_comment_consent_read", "no_opening_comment"), commentTargets.delete(r);
      return;
    }
    if (ee().accountEpoch !== accountEpoch) return;
    commentTargets.delete(r), commentTargets.set(r, {
      target: target,
      toolUseId: o.toolUseId
    });
    while (commentTargets.size > T) {
      let u = commentTargets.keys().next().value;
      if (u === void 0) break;
      commentTargets.delete(u);
    }
    return target;
  } catch (error) {
    if (o.abortController.signal.aborted) throw error;
    p("artifact_comment_consent_read", Ke(error) ? "deadline" : "read_threw");
    return;
  } finally {
    cleanup();
  }
}
function l(e) {
  switch (e) {
    case "owner":
      return "the owner's";
    case "editor":
      return "an editor's";
    case "commenter":
      return "a commenter's";
    case void 0:
      return "a viewer's";
  }
}
function edr({
  display: display,
  access: access
}) {
  switch (display.by) {
    case "user":
      return `your comment "${display.excerpt}"`;
    case "claude":
      return `Claude's comment "${display.excerpt}"`;
    case "viewer":
      return `${l(access)} comment "${display.excerpt}"`;
    case "unknown":
      return `the comment "${display.excerpt}"`;
  }
}
function Boo({
  display: display_2,
  access: access_2
}) {
  switch (display_2.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${l(access_2)} comment thread`;
    case "unknown":
      return "a comment thread";
  }
}
function tdr(e, t) {
  if (t === void 0 && !(hYt in e)) return;
  let {
    [hYt]: o,
    ...r
  } = e;
  return t === void 0 ? r : {
    ...r,
    [hYt]: t
  };
}
export { hYt, jvt, Qcr, Zcr, edr, Boo, tdr };