// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y,
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  zT,
  yEe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  L5t,
  Loo,
  Uds,
  efr,
  Vbe,
  Noo,
  Yoe
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
var B8s = 1500,
  j8s = 86400000,
  W8s = 14400000;

function $ri() {
  return L5t() !== void 0
}

function QIn() {
  let r = efr();
  if (r !== void 0) return {
    capabilities: r.roster.capabilities,
    source: r.source
  };
  return {
    capabilities: void 0,
    source: L5t() === void 0 ? "cold_no_identity" : "cold"
  }
}

function Moo() {
  return QIn().capabilities === void 0
}

function Uri(r = B8s) {
  let e = ee();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !Moo()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(),
    n = e.accountEpoch;
  return e.rosterWait = Nt(e.rosterHeard, r, "artifact-roster").then((a) => {
    g("artifact_roster_wait", {
      wait_ms: Date.now() - o,
      heard: a,
      cold: Moo()
    })
  }, () => {
    p("artifact_roster_wait", "timeout", {
      wait_ms: Date.now() - o,
      cold: Moo()
    })
  }).catch((a) => {
    t(`Artifact roster wait: recording its outcome failed: ${d(a)}`)
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = !0
  }), e.rosterWait
}
async function Bri(r) {
  let e = Date.now() + r;
  for (;;) {
    let o = ee(),
      n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return !0;
    let a = new AbortController,
      i = await Promise.race([n.then(() => !0, () => !0), Y(Math.max(0, e - Date.now()), a.signal, {
        unref: !0
      }).then(() => !1)]);
    if (a.abort(), !i) return !1;
    if (ee().rosterHeard === n) return !0
  }
}

function jri(r = Date.now()) {
  let e = Loo();
  if (e === void 0) return !1;
  let o = r - e.fetchedAt;
  return o >= 0 && o < j8s
}

function Wri(r = Date.now()) {
  let e = Uds();
  if (e === void 0) return !1;
  let o = r - e.deniedAt;
  return o >= 0 && o < W8s && yEe() === e.tokenExpiresAt && !zT(e.tokenExpiresAt, r)
}

function Doo(r) {
  let e = ee(),
    o;
  return e.rosterHeard = new Promise((n) => {
    o = n
  }), R(e, r, o)
}
async function R(r, e, o) {
  try {
    let n = r.accountEpoch,
      a = yEe(),
      i = Date.now(),
      s = await Yoe({
        ...e,
        recoverOAuth401: !0
      }),
      u = Date.now() - i;
    if ("err" in s) {
      p("artifact_roster_refresh", s.cause, {
        duration_ms: u,
        ...s.status !== void 0 && {
          status: s.status
        }
      }), t(`Artifact roster refresh failed (${s.cause}): ${s.err}`);
      let c = yEe(),
        {
          cause: A,
          status: f
        } = s;
      if (o(!1), A === "http_4xx" && (f === 403 || f === 401 && c !== a) && c !== null && ee() === r) await Noo(r, n, e.storageV5, (h) => ({
        artifactRosterDenied: {
          ...h,
          status: f,
          deniedAt: Date.now(),
          tokenExpiresAt: c
        }
      }));
      return !1
    }
    g("artifact_roster_refresh", {
      duration_ms: u,
      schema_frozen: r.frozenAssets !== void 0
    });
    let {
      adopted: l,
      persisted: m
    } = Vbe({
      session: r,
      epoch: n,
      roster: s,
      storageV5: e.storageV5
    });
    if (l) o(!0), await m;
    return !0
  } catch (n) {
    return t(`Artifact roster refresh: ${d(n)}`), !1
  } finally {
    o(!1)
  }
}
export {
  B8s,
  j8s,
  W8s,
  $ri,
  QIn,
  Moo,
  Uri,
  Bri,
  jri,
  Wri,
  Doo
};
