// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ke
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  qr
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Bn,
  Ox,
  ED,
  zR,
  Mv,
  h5e,
  y5e,
  yJ,
  ch
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  O3e
} from "B:/~BUN/root/chunk-j36yaq51.js";
import {
  RO
} from "B:/~BUN/root/chunk-7z8vew74.js";
import {
  HU,
  Qet,
  lm,
  Awe,
  bse
} from "B:/~BUN/root/chunk-dty6td52.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Ao
} from "B:/~BUN/root/chunk-9sajt7dp.js";
var hYt = "__artifactCommentTarget",
  g = 120,
  C = 4000,
  T = 32;

function _(e, t) {
  return `${e}/${t}`
}

function jvt(e) {
  return Awe(e).replace(/[\n\t]/g, " ").replace(zR, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(Ox, "'").replace(ED, "'").trim()
}

function A(e, t) {
  let o = jvt(e);
  return Array.from(o).length > t ? `${RO(qr(o,t))}\u2026` : o
}

function E(e, t, o) {
  let r = e.find((s) => s.id === t),
    n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = Mv(A(n.text.replace(ch, " "), g)).replace(yJ, " ").replace(h5e, y5e).replace(/ {2,}/g, " ").trim();
  if (a === "") return;
  let i = HU(n.account, o),
    c = lm(n),
    d = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
  return {
    display: {
      thread_id: t,
      by: d,
      excerpt: a,
      replies: r.comments.length - 1,
      resolved: r.resolved && r.resolvedDegraded !== !0
    },
    ...d === "viewer" && n.access !== void 0 && {
      access: n.access
    }
  }
}

function Qcr(e) {
  let t = me(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0
}
async function Zcr(e, t, o) {
  if (!Bn.test(t)) return;
  let r = _(e.slug, t),
    n = ee().commentTargets,
    a = ee().accountEpoch,
    i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let {
    signal: c,
    cleanup: d
  } = Ao(o.abortController.signal, {
    timeoutMs: C,
    refTimer: !0
  });
  try {
    let [s, f] = await Promise.all([bse(e, c, o.credentials, "artifact_comment_consent_read", {
      skipBootProbe: !0
    }), O3e(o.credentials)]);
    if (s.err !== null) {
      n.delete(r);
      return
    }
    let m = E(s.threads, t, {
      account: f?.accountUuid?.toLowerCase(),
      tokens: Qet()
    });
    if (m === void 0) {
      p("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
      return
    }
    if (ee().accountEpoch !== a) return;
    n.delete(r), n.set(r, {
      target: m,
      toolUseId: o.toolUseId
    });
    while (n.size > T) {
      let u = n.keys().next().value;
      if (u === void 0) break;
      n.delete(u)
    }
    return m
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    p("artifact_comment_consent_read", Ke(s) ? "deadline" : "read_threw");
    return
  } finally {
    d()
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
      return "a viewer's"
  }
}

function edr({
  display: e,
  access: t
}) {
  switch (e.by) {
    case "user":
      return `your comment "${e.excerpt}"`;
    case "claude":
      return `Claude's comment "${e.excerpt}"`;
    case "viewer":
      return `${l(t)} comment "${e.excerpt}"`;
    case "unknown":
      return `the comment "${e.excerpt}"`
  }
}

function Boo({
  display: e,
  access: t
}) {
  switch (e.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${l(t)} comment thread`;
    case "unknown":
      return "a comment thread"
  }
}

function tdr(e, t) {
  if (t === void 0 && !(hYt in e)) return;
  let {
    [hYt]: o, ...r
  } = e;
  return t === void 0 ? r : {
    ...r,
    [hYt]: t
  }
}
export {
  hYt,
  jvt,
  Qcr,
  Zcr,
  edr,
  Boo,
  tdr
};
