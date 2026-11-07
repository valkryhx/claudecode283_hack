// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  We
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Oi
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  hr,
  rN,
  sj,
  M4,
  L4,
  Oie,
  W_t,
  KUt,
  qUt,
  z_t,
  _k
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  DLe
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  HB
} from "B:/~BUN/root/chunk-gjq813eb.js";
import {
  QW,
  YJe
} from "B:/~BUN/root/chunk-cejfpzdt.js";
import {
  xy,
  H3e,
  NIe
} from "B:/~BUN/root/chunk-eahns82c.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  os
} from "B:/~BUN/root/chunk-kj33sgq2.js";
var Urr = "__artifactCommentTarget",
  g = 120,
  C = 4000,
  T = 32;

function _(e, t) {
  return `${e}/${t}`
}

function bkn(e) {
  return H3e(e).replace(/[\n\t]/g, " ").replace(M4, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(rN, "'").replace(sj, "'").trim()
}

function A(e, t) {
  let o = bkn(e);
  return Array.from(o).length > t ? `${HB(Oi(o,t))}\u2026` : o
}

function E(e, t, o) {
  let r = e.find((s) => s.id === t),
    n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = L4(z_t(Oie(A(n.text.replace(_k, " "), g))).replace(qUt, " ").replace(W_t, KUt).replace(/ {2,}/g, " ").trim());
  if (a === "") return;
  let i = QW(n.account, o),
    d = xy(n),
    m = n.postedByArtifact || d === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : d === "agent" ? "unknown" : i ? "user" : "viewer";
  return {
    display: {
      thread_id: t,
      by: m,
      excerpt: a,
      replies: r.comments.length - 1,
      resolved: r.resolved && r.resolvedDegraded !== !0
    },
    ...m === "viewer" && n.access !== void 0 && {
      access: n.access
    }
  }
}

function C8r(e) {
  let t = se(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0
}
async function R8r(e, t, o) {
  if (!hr.test(t)) return;
  let r = _(e.slug, t),
    n = te().commentTargets,
    a = te().accountEpoch,
    i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let {
    signal: d,
    cleanup: m
  } = os(o.abortController.signal, {
    timeoutMs: C,
    refTimer: !0
  });
  try {
    let [s, p] = await Promise.all([NIe(e, d, o.credentials, "artifact_comment_consent_read", {
      skipBootProbe: !0
    }), DLe(o.credentials)]);
    if (s.err !== null) {
      n.delete(r);
      return
    }
    let u = E(s.threads, t, {
      account: p?.accountUuid?.toLowerCase(),
      tokens: YJe()
    });
    if (u === void 0) {
      c("artifact_comment_consent_read", "no_opening_comment"), n.delete(r);
      return
    }
    if (te().accountEpoch !== a) return;
    n.delete(r), n.set(r, {
      target: u,
      toolUseId: o.toolUseId
    });
    while (n.size > T) {
      let l = n.keys().next().value;
      if (l === void 0) break;
      n.delete(l)
    }
    return u
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    c("artifact_comment_consent_read", We(s) ? "deadline" : "read_threw");
    return
  } finally {
    m()
  }
}

function f(e) {
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

function A8r({
  display: e,
  access: t
}) {
  switch (e.by) {
    case "user":
      return `your comment "${e.excerpt}"`;
    case "claude":
      return `Claude's comment "${e.excerpt}"`;
    case "viewer":
      return `${f(t)} comment "${e.excerpt}"`;
    case "unknown":
      return `the comment "${e.excerpt}"`
  }
}

function yui({
  display: e,
  access: t
}) {
  switch (e.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${f(t)} comment thread`;
    case "unknown":
      return "a comment thread"
  }
}

function k8o(e, t) {
  if (t === void 0 && !(Urr in e)) return;
  let {
    [Urr]: o, ...r
  } = e;
  return t === void 0 ? r : {
    ...r,
    [Urr]: t
  }
}
export {
  Urr,
  bkn,
  C8r,
  R8r,
  A8r,
  yui,
  k8o
};
