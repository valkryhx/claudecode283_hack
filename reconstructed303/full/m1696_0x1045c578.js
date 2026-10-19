// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ke
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  zg
} from "B:/~BUN/root/chunk-7ybsx93y.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Ua
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  BWe,
  il
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  Oin,
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  Dz,
  z8,
  KI,
  qY,
  OR,
  Oc
} from "B:/~BUN/root/chunk-neajqqs3.js";
import {
  Hh
} from "B:/~BUN/root/chunk-gt1x0gdb.js";
import {
  lu
} from "B:/~BUN/root/chunk-p64g0hj8.js";
import {
  Iae
} from "B:/~BUN/root/chunk-ydtn2zrk.js";
import {
  Vst
} from "B:/~BUN/root/chunk-3cvce3jg.js";
import {
  T3
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  rQr
} from "B:/~BUN/root/chunk-93pyppxk.js";
import {
  Rss
} from "B:/~BUN/root/chunk-4bgwjb4z.js";
import {
  pRe,
  Ykn
} from "B:/~BUN/root/chunk-gnpxyyvv.js";
import {
  fr
} from "B:/~BUN/root/chunk-c6mbjdcy.js";

function Jor() {
  return T3() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${Vst(!0)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one)."
}

function w3r() {
  return fr() && !KI()
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
    source: t.source === "tool" ? b("tool") : b("dialog"),
    route: s === "relay" ? b("relay") : b("direct"),
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
async function qkn(t, n, s) {
  let f = () => w3r() ? Promise.resolve(A) : Oc.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
      refreshOAuth: !0,
      headers: lu(),
      timeout: 15000,
      maxContentLength: R,
      signal: s.signal,
      credentials: n
    }),
    e, d = !1;
  try {
    if (e = await f(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let r = e.response.headers?.["retry-after"],
        i = Math.min(zg(typeof r === "string" ? r : void 0) ?? w, S);
      await Y(i, s.signal, {
        abortError: () => new Ke
      }), d = !0, e = await f()
    }
  } catch (r) {
    if (Ua(r) || r instanceof Ke || s.signal?.aborted) throw r;
    let i = OR(r);
    return m("artifact_delete", "request_error", h(s, d, i ? "relay" : "direct")), {
      err: i ? u("no answer") : "Couldn't delete the Artifact (network error)",
      reason: "request_error"
    }
  }
  let o = h(s, d, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return m("artifact_delete", e.reason.replace(/-/g, "_"), {
      ...o,
      status: e.status
    }), {
      err: Jor(),
      reason: "unavailable"
    };
    return m("artifact_delete", e.reason, o), {
      err: e.reason === "no-auth" ? Hh(e.detail) : `Artifact delete unavailable: ${e.reason}`,
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
    if (!z8(e.data)) return m("artifact_delete", "not_found_foreign", {
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
    if (r.startsWith(Dz)) return m("artifact_delete", "ccr_credential_refused", o), {
      err: Jor(),
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
  if (e.status !== 204 || e.route === "relay" && !qY(e)) return m("artifact_delete", "ok_foreign", {
    ...o,
    status: e.status
  }), {
    err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
    reason: "http_failed",
    status: e.status
  };
  return g("artifact_delete", o), {
    err: null,
    alreadyGone: !1
  }
}

function F(t, n) {
  let s = Object.keys(t.frameUrls),
    f = s.filter((c) => il(t.frameUrls[c].url) !== n),
    e = t.artifactRefs?.filter((c) => c.slug !== n),
    d = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0),
    o = t.artifactReadVersions !== void 0 && n in t.artifactReadVersions,
    r = t.artifactReadObservers !== void 0 && n in t.artifactReadObservers;
  if (f.length === s.length && !d && !o && !r) return t;
  let {
    [n]: i, ...y
  } = t.artifactReadVersions ?? {}, {
    [n]: D,
    ..._
  } = t.artifactReadObservers ?? {};
  return {
    ...t,
    frameUrls: Object.fromEntries(f.map((c) => [c, t.frameUrls[c]])),
    ...d && {
      artifactRefs: e
    },
    ...o && {
      artifactReadVersions: y
    },
    ...r && {
      artifactReadObservers: _
    }
  }
}

function Ukt(t, n) {
  n.updateAppState((r) => F(r, t));
  let {
    shareStatus: s,
    createdFromType: f,
    deferredSurface: e,
    remoteControlSkippedSlugs: d,
    coordinatorEditors: o
  } = ee();
  for (let [r, i] of s.filePathToSlug)
    if (i === t) Iae(r);
  for (let [r, i] of f)
    if (i.slug === t) f.delete(r);
  if (e.delete(t), d.delete(t), Oin(t, "page_gone"), o.delete(t), rQr(t, n.context), ee().liveDocWatch.stop?.(t), Rss(t), a.CLAUDE_CODE_REMOTE || pRe(t) !== void 0) Ykn({
    slug: t,
    context: n.context
  }).catch(l)
}

function v3r(t) {
  return `<${BWe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`
}
export {
  Jor,
  w3r,
  qkn,
  Ukt,
  v3r
};
