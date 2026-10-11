// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  y
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  We
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  oh
} from "B:/~BUN/root/chunk-skjrk8s1.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Fa
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  uc
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  XRe,
  ha
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  dX
} from "B:/~BUN/root/chunk-faawr4jv.js";
import {
  sDt,
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  Ch,
  q3,
  XV,
  m0,
  tte,
  cx,
  Ud
} from "B:/~BUN/root/chunk-j36yaq51.js";
import {
  $d
} from "B:/~BUN/root/chunk-1zdknz5q.js";
import {
  X2e
} from "B:/~BUN/root/chunk-0mrty9z0.js";
import {
  Sz
} from "B:/~BUN/root/chunk-7d9qjs8x.js";
import {
  Jar
} from "B:/~BUN/root/chunk-m6mzmc8p.js";
import {
  Wro
} from "B:/~BUN/root/chunk-1mdmjaqt.js";
import {
  Gje,
  pqt
} from "B:/~BUN/root/chunk-4w0hpk1s.js";

function qkn() {
  return Sz() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${X2e(!0)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one)."
}

function Gtr() {
  return uc() && !m0()
}
var A = {
  ok: !1,
  reason: "relay-unavailable",
  status: 0,
  route: "relay",
  fromFrame: !1
};

function u(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`
}
var R = 65536,
  w = 1000,
  S = 1e4;

function C(t) {
  return typeof t === "string" ? t.trim() : ""
}

function h(t, n, s) {
  return {
    source: t.source === "tool" ? y("tool") : y("dialog"),
    route: s === "relay" ? y("relay") : y("direct"),
    ...t.sessionMinted !== void 0 && {
      session_minted: t.sessionMinted
    },
    ...t.ageSeconds !== void 0 && {
      age_s: t.ageSeconds
    },
    ...t.sinceUpdateSeconds !== void 0 && {
      since_update_s: t.sinceUpdateSeconds
    },
    ...n && {
      retried: !0
    }
  }
}
async function uqt(t, n, s) {
  let l = () => Gtr() ? Promise.resolve(A) : Ud.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
      refreshOAuth: !0,
      headers: $d(),
      timeout: 15000,
      maxContentLength: R,
      signal: s.signal,
      credentials: n
    }),
    e, f = !1;
  try {
    if (e = await l(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let r = e.response.headers?.["retry-after"],
        i = Math.min(oh(typeof r === "string" ? r : void 0) ?? w, S);
      await Q(i, s.signal, {
        abortError: () => new We
      }), f = !0, e = await l()
    }
  } catch (r) {
    if (Fa(r) || r instanceof We || s.signal?.aborted) throw r;
    let i = cx(r);
    return m("artifact_delete", "request_error", h(s, f, i ? "relay" : "direct")), {
      err: i ? u("no answer") : "Couldn't delete the Artifact (network error)",
      reason: "request_error"
    }
  }
  let o = h(s, f, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return m("artifact_delete", e.reason.replace(/-/g, "_"), {
      ...o,
      status: e.status
    }), {
      err: qkn(),
      reason: "unavailable"
    };
    return m("artifact_delete", e.reason, o), {
      err: e.reason === "no-auth" ? Ch(e.detail) : `Artifact delete unavailable: ${e.reason}`,
      reason: "unavailable"
    }
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300)) return m("artifact_delete", "relay_error", {
    ...o,
    status: e.status
  }), {
    err: u(`HTTP ${e.status}`),
    reason: "http_failed",
    status: e.status
  };
  if (e.status === 404) {
    if (!XV(e.data)) return m("artifact_delete", "not_found_foreign", {
      ...o,
      status: 404
    }), {
      err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
      reason: "http_failed",
      status: 404
    };
    return p("artifact_delete", "not_found", o), {
      err: null,
      alreadyGone: !0
    }
  }
  if (e.status === 403) {
    let r = C(e.data);
    if (/^not owner\b/.test(r)) return p("artifact_delete", "not_owner", o), {
      err: "Only the Artifact's owner can delete it.",
      reason: "not_owner",
      status: 403
    };
    if (r.startsWith(q3)) return m("artifact_delete", "ccr_credential_refused", o), {
      err: qkn(),
      reason: "unavailable",
      status: 403
    }
  }
  if (e.status < 200 || e.status >= 300) return m("artifact_delete", "http_failed", {
    ...o,
    status: e.status
  }), {
    err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`,
    reason: "http_failed",
    status: e.status
  };
  if (e.status !== 204 || e.route === "relay" && !tte(e)) return m("artifact_delete", "ok_foreign", {
    ...o,
    status: e.status
  }), {
    err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
    reason: "http_failed",
    status: e.status
  };
  return _("artifact_delete", o), {
    err: null,
    alreadyGone: !1
  }
}

function F(t, n) {
  let s = Object.keys(t.frameUrls),
    l = s.filter((c) => ha(t.frameUrls[c].url) !== n),
    e = t.artifactRefs?.filter((c) => c.slug !== n),
    f = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0),
    o = t.artifactReadVersions !== void 0 && n in t.artifactReadVersions,
    r = t.artifactReadObservers !== void 0 && n in t.artifactReadObservers;
  if (l.length === s.length && !f && !o && !r) return t;
  let {
    [n]: i, ...g
  } = t.artifactReadVersions ?? {}, {
    [n]: D,
    ...b
  } = t.artifactReadObservers ?? {};
  return {
    ...t,
    frameUrls: Object.fromEntries(l.map((c) => [c, t.frameUrls[c]])),
    ...f && {
      artifactRefs: e
    },
    ...o && {
      artifactReadVersions: g
    },
    ...r && {
      artifactReadObservers: b
    }
  }
}

function EQe(t, n) {
  n.updateAppState((r) => F(r, t));
  let {
    shareStatus: s,
    createdFromType: l,
    deferredSurface: e,
    remoteControlSkippedSlugs: f,
    coordinatorEditors: o
  } = ee();
  for (let [r, i] of s.filePathToSlug)
    if (i === t) dX(r);
  for (let [r, i] of l)
    if (i.slug === t) l.delete(r);
  if (e.delete(t), f.delete(t), sDt(t, "page_gone"), o.delete(t), Jar(t, n.context), ee().liveDocWatch.stop?.(t), Wro(t), a.CLAUDE_CODE_REMOTE || Gje(t) !== void 0) pqt({
    slug: t,
    context: n.context
  }).catch(d)
}

function Vtr(t) {
  return `<${XRe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`
}
export {
  qkn,
  Gtr,
  uqt,
  EQe,
  Vtr
};
