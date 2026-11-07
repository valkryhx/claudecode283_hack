// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { y_ } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { nl } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Ket, _d } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { ENn, te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { xu } from "B:/~BUN/root/chunk-17caj8fw.js";
import { Dq, oee, xL, dX, ZP, Au } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { Tb } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { A_e } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { gAt } from "B:/~BUN/root/chunk-ksrrpr8r.js";
import { iee } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { mKo } from "B:/~BUN/root/chunk-vdr4jpe1.js";
import { sai } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { Ike, TJn } from "B:/~BUN/root/chunk-6a66azcg.js";
import { JG } from "B:/~BUN/root/chunk-f61vm6d0.js";
function wKr() {
  return iee() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${gAt(!0)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}
function Dzo() {
  return tn() && !xL();
}
var A = {
  ok: !1,
  reason: "relay-unavailable",
  status: 0,
  route: "relay",
  fromFrame: !1
};
function p(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`;
}
var maxContentLength = 65536,
  w = 1000,
  S = 1e4;
function C(t) {
  return typeof t === "string" ? t.trim() : "";
}
function y(t, n, s) {
  return {
    source: t.source === "tool" ? b("tool") : b("dialog"),
    route: s === "relay" ? b("relay") : b("direct"),
    ...(t.sessionMinted !== void 0 && {
      session_minted: t.sessionMinted
    }),
    ...(t.ageSeconds !== void 0 && {
      age_s: t.ageSeconds
    }),
    ...(t.sinceUpdateSeconds !== void 0 && {
      since_update_s: t.sinceUpdateSeconds
    }),
    ...(n && {
      retried: !0
    })
  };
}
async function vJn(t, credentials, s) {
  let u = () => Dzo() ? Promise.resolve(A) : Au.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
      refreshOAuth: !0,
      headers: xu(),
      timeout: 15000,
      maxContentLength: maxContentLength,
      signal: s.signal,
      credentials: credentials
    }),
    e,
    d = !1;
  try {
    if (e = await u(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let o = e.response.headers?.["retry-after"],
        l = Math.min(y_(typeof o === "string" ? o : void 0) ?? w, S);
      await J(l, s.signal, {
        abortError: () => new Ke()
      }), d = !0, e = await u();
    }
  } catch (error) {
    if (nl(error) || error instanceof Ke || s.signal?.aborted) throw error;
    let l = ZP(error);
    return m("artifact_delete", "request_error", y(s, d, l ? "relay" : "direct")), {
      err: l ? p("no answer") : "Couldn't delete the Artifact (network error)",
      reason: "request_error"
    };
  }
  let r = y(s, d, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return m("artifact_delete", e.reason.replace(/-/g, "_"), {
      ...r,
      status: e.status
    }), {
      err: wKr(),
      reason: "unavailable"
    };
    return m("artifact_delete", e.reason, r), {
      err: e.reason === "no-auth" ? Tb(e.detail) : `Artifact delete unavailable: ${e.reason}`,
      reason: "unavailable"
    };
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300)) return m("artifact_delete", "relay_error", {
    ...r,
    status: e.status
  }), {
    err: p(`HTTP ${e.status}`),
    reason: "http_failed",
    status: e.status
  };
  if (e.status === 404) {
    if (!oee(e.data)) return m("artifact_delete", "not_found_foreign", {
      ...r,
      status: 404
    }), {
      err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
      reason: "http_failed",
      status: 404
    };
    return c("artifact_delete", "not_found", r), {
      err: null,
      alreadyGone: !0
    };
  }
  if (e.status === 403) {
    let o = C(e.data);
    if (/^not owner\b/.test(o)) return c("artifact_delete", "not_owner", r), {
      err: "Only the Artifact's owner can delete it.",
      reason: "not_owner",
      status: 403
    };
    if (o.startsWith(Dq)) return m("artifact_delete", "ccr_credential_refused", r), {
      err: wKr(),
      reason: "unavailable",
      status: 403
    };
  }
  if (e.status < 200 || e.status >= 300) return m("artifact_delete", "http_failed", {
    ...r,
    status: e.status
  }), {
    err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`,
    reason: "http_failed",
    status: e.status
  };
  if (e.status !== 204 || e.route === "relay" && !dX(e)) return m("artifact_delete", "ok_foreign", {
    ...r,
    status: e.status
  }), {
    err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
    reason: "http_failed",
    status: e.status
  };
  return g("artifact_delete", r), {
    err: null,
    alreadyGone: !1
  };
}
function F(t, n) {
  let s = Object.keys(t.frameUrls),
    u = s.filter(item => _d(t.frameUrls[item].url) !== n),
    artifactRefs = t.artifactRefs?.filter(h => h.slug !== n),
    d = (artifactRefs?.length ?? 0) !== (t.artifactRefs?.length ?? 0),
    r = t.artifactReadVersions !== void 0 && n in t.artifactReadVersions,
    o = t.artifactReadObservers !== void 0 && n in t.artifactReadObservers;
  if (u.length === s.length && !d && !r && !o) return t;
  let {
      [n]: l,
      ...artifactReadVersions
    } = t.artifactReadVersions ?? {},
    {
      [n]: D,
      ...artifactReadObservers
    } = t.artifactReadObservers ?? {};
  return {
    ...t,
    frameUrls: Object.fromEntries(u.map(item => [item, t.frameUrls[item]])),
    ...(d && {
      artifactRefs: artifactRefs
    }),
    ...(r && {
      artifactReadVersions: artifactReadVersions
    }),
    ...(o && {
      artifactReadObservers: artifactReadObservers
    })
  };
}
function t6e(slug, n) {
  let s;
  if (n.updateAppState(l => {
    let f = F(l, slug);
    return s = f === l ? void 0 : f.frameUrls, f;
  }), s !== void 0) JG(s);
  let {
    shareStatus: shareStatus,
    createdFromType: createdFromType,
    deferredSurface: deferredSurface,
    remoteControlSkippedSlugs: remoteControlSkippedSlugs,
    coordinatorEditors: coordinatorEditors
  } = te();
  for (let [l, f] of shareStatus.filePathToSlug) if (f === slug) A_e(l);
  for (let [l, f] of createdFromType) if (f.slug === slug) createdFromType.delete(l);
  if (deferredSurface.delete(slug), remoteControlSkippedSlugs.delete(slug), ENn(slug, "page_gone"), coordinatorEditors.delete(slug), mKo(slug, n.context), te().liveDocWatch.stop?.(slug), sai(slug), i.CLAUDE_CODE_REMOTE || Ike(slug) !== void 0) TJn({
    slug: slug,
    context: n.context
  }).catch(a);
}
function Lzo(t) {
  return `<${Ket} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`;
}
export { wKr, Dzo, vJn, t6e, Lzo };