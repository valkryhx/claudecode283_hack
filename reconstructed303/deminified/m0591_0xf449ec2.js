// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ve } from "B:/~BUN/root/chunk-3aez4b53.js";
import { qs } from "B:/~BUN/root/chunk-nggrknsv.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ar, qM, ZH, SW, XC, uyt, pyt, Ple, Sb } from "B:/~BUN/root/chunk-qp0344nb.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { xke } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { zF } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { Z$, TRt, Dg, xFe, Ube } from "B:/~BUN/root/chunk-khznyweq.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { As } from "B:/~BUN/root/chunk-xnas864x.js";
var OPn = "__artifactCommentTarget",
  g = 120,
  timeoutMs = 4000,
  T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function G6t(e) {
  return xFe(e).replace(/[\n\t]/g, " ").replace(SW, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(qM, "'").replace(ZH, "'").trim();
}
function A(e, t) {
  let o = G6t(e);
  return Array.from(o).length > t ? `${zF(qs(o, t))}\u2026` : o;
}
function E(e, thread_id, o) {
  let r = e.find(item => item.id === thread_id),
    n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let excerpt = XC(A(n.text.replace(Sb, " "), g)).replace(Ple, " ").replace(uyt, pyt).replace(/ {2,}/g, " ").trim();
  if (excerpt === "") return;
  let i = Z$(n.account, o),
    c = Dg(n),
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
function ueo(e) {
  let t = le(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0;
}
async function peo(e, t, o) {
  if (!ar.test(t)) return;
  let r = _(e.slug, t),
    commentTargets = ee().commentTargets,
    accountEpoch = ee().accountEpoch,
    i = commentTargets.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let {
    signal: signal,
    cleanup: cleanup
  } = As(o.abortController.signal, {
    timeoutMs: timeoutMs,
    refTimer: !0
  });
  try {
    let [s, f] = await Promise.all([Ube(e, signal, o.credentials, "artifact_comment_consent_read", {
      skipBootProbe: !0
    }), xke(o.credentials)]);
    if (s.err !== null) {
      commentTargets.delete(r);
      return;
    }
    let target = E(s.threads, t, {
      account: f?.accountUuid?.toLowerCase(),
      tokens: TRt()
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
    p("artifact_comment_consent_read", Ve(error) ? "deadline" : "read_threw");
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
function feo({
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
function $is({
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
function meo(e, t) {
  if (t === void 0 && !(OPn in e)) return;
  let {
    [OPn]: o,
    ...r
  } = e;
  return t === void 0 ? r : {
    ...r,
    [OPn]: t
  };
}
export { OPn, G6t, ueo, peo, feo, $is, meo };