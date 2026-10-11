// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q,
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  hN,
  BFe,
  Ee
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  DTt,
  pgr,
  slo,
  WOn,
  y8
} from "B:/~BUN/root/chunk-at7axhcd.js";
var mWo = 1500,
  gWo = 86400000,
  hWo = 14400000;

function X4o() {
  return DTt() !== void 0
}

function vXt() {
  let r = WOn();
  if (r !== void 0) return {
    capabilities: r.roster.capabilities,
    source: r.source
  };
  return {
    capabilities: void 0,
    source: DTt() === void 0 ? "cold_no_identity" : "cold"
  }
}

function dgr() {
  return vXt().capabilities === void 0
}

function J4o(r = mWo) {
  let e = ee();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !dgr()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(),
    n = e.accountEpoch;
  return e.rosterWait = Ht(e.rosterHeard, r, "artifact-roster").then((i) => {
    _("artifact_roster_wait", {
      wait_ms: Date.now() - o,
      heard: i,
      cold: dgr()
    })
  }, () => {
    p("artifact_roster_wait", "timeout", {
      wait_ms: Date.now() - o,
      cold: dgr()
    })
  }).catch((i) => {
    t(`Artifact roster wait: recording its outcome failed: ${l(i)}`)
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = !0
  }), e.rosterWait
}
async function Q4o(r) {
  let e = Date.now() + r;
  for (;;) {
    let o = ee(),
      n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return !0;
    let i = new AbortController,
      s = await Promise.race([n.then(() => !0, () => !0), Q(Math.max(0, e - Date.now()), i.signal, {
        unref: !0
      }).then(() => !1)]);
    if (i.abort(), !s) return !1;
    if (ee().rosterHeard === n) return !0
  }
}

function Z4o(r = Date.now()) {
  let e = pgr();
  if (e === void 0) return !1;
  let o = r - e.fetchedAt;
  return o >= 0 && o < gWo
}

function e3o(r = Date.now()) {
  let e = slo();
  if (e === void 0) return !1;
  let o = r - e.deniedAt;
  return o >= 0 && o < hWo && BFe() === e.tokenExpiresAt && !hN(e.tokenExpiresAt, r)
}

function ugr(r) {
  let e = ee(),
    o;
  return e.rosterHeard = new Promise((n) => {
    o = n
  }), h(e, r, o)
}
async function h(r, e, o) {
  try {
    let n = r.accountEpoch,
      i = BFe(),
      s = Date.now(),
      a = await y8({
        ...e,
        recoverOAuth401: !0
      }),
      d = Date.now() - s;
    if ("err" in a) {
      p("artifact_roster_refresh", a.cause, {
        duration_ms: d,
        ...a.status !== void 0 && {
          status: a.status
        }
      }), t(`Artifact roster refresh failed (${a.cause}): ${a.err}`);
      let c = BFe(),
        {
          cause: m,
          status: f
        } = a;
      if (o(!1), m === "http_4xx" && (f === 403 || f === 401 && c !== i) && c !== null && ee() === r) await u(r, n, e.storageV5, (A) => ({
        artifactRosterDenied: {
          ...A,
          status: f,
          deniedAt: Date.now(),
          tokenExpiresAt: c
        }
      }));
      return !1
    }
    if (_("artifact_roster_refresh", {
        duration_ms: d,
        schema_frozen: r.frozenAssets !== void 0
      }), ee() !== r || r.accountEpoch !== n) return !0;
    if (r.roster = a, a.capabilities.includes("assets")) r.assetsOnRoster = !0;
    return o(!0), await u(r, n, e.storageV5, (c) => ({
      cachedArtifactRoster: {
        ...c,
        version: a.version,
        capabilities: [...a.capabilities],
        fetchedAt: Date.now()
      },
      artifactRosterDenied: void 0
    })), !0
  } catch (n) {
    return t(`Artifact roster refresh: ${l(n)}`), !1
  } finally {
    o(!1)
  }
}
async function u(r, e, o, n) {
  let i = DTt();
  if (i === void 0 || r.accountEpoch !== e) return;
  await Ee((s) => r.accountEpoch === e && DTt()?.accountUuid === i.accountUuid ? {
    ...s,
    ...n(i)
  } : s, o)
}
export {
  mWo,
  gWo,
  hWo,
  X4o,
  vXt,
  dgr,
  J4o,
  Q4o,
  Z4o,
  e3o,
  ugr
};
