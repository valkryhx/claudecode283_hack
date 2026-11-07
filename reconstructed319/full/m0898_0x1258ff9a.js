// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J,
  zt
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  zx,
  mFe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  tEn,
  pJo,
  Tpi,
  nXr,
  jIe,
  mJo,
  wge
} from "B:/~BUN/root/chunk-gvv6aaq0.js";
var _aa = 1500,
  baa = 86400000,
  Saa = 14400000;

function T_a() {
  return tEn() !== void 0
}

function Srr() {
  let r = nXr();
  if (r !== void 0) return {
    capabilities: r.roster.capabilities,
    source: r.source
  };
  return {
    capabilities: void 0,
    source: tEn() === void 0 ? "cold_no_identity" : "cold"
  }
}

function K5o() {
  return Srr().capabilities === void 0
}

function C_a(r = _aa) {
  let e = te();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !K5o()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(),
    n = e.accountEpoch;
  return e.rosterWait = zt(e.rosterHeard, r, "artifact-roster").then((a) => {
    g("artifact_roster_wait", {
      wait_ms: Date.now() - o,
      heard: a,
      cold: K5o()
    })
  }, () => {
    c("artifact_roster_wait", "timeout", {
      wait_ms: Date.now() - o,
      cold: K5o()
    })
  }).catch((a) => {
    t(`Artifact roster wait: recording its outcome failed: ${d(a)}`)
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = !0
  }), e.rosterWait
}
async function R_a(r) {
  let e = Date.now() + r;
  for (;;) {
    let o = te(),
      n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return !0;
    let a = new AbortController,
      i = await Promise.race([n.then(() => !0, () => !0), J(Math.max(0, e - Date.now()), a.signal, {
        unref: !0
      }).then(() => !1)]);
    if (a.abort(), !i) return !1;
    if (te().rosterHeard === n) return !0
  }
}

function A_a(r = Date.now()) {
  let e = pJo();
  if (e === void 0) return !1;
  let o = r - e.fetchedAt;
  return o >= 0 && o < baa
}

function x_a(r = Date.now()) {
  let e = Tpi();
  if (e === void 0) return !1;
  let o = r - e.deniedAt;
  return o >= 0 && o < Saa && mFe() === e.tokenExpiresAt && !zx(e.tokenExpiresAt, r)
}

function q5o(r) {
  let e = te(),
    o;
  return e.rosterHeard = new Promise((n) => {
    o = n
  }), R(e, r, o)
}
async function R(r, e, o) {
  try {
    let n = r.accountEpoch,
      a = mFe(),
      i = Date.now(),
      s = await wge({
        ...e,
        recoverOAuth401: !0
      }),
      l = Date.now() - i;
    if ("err" in s) {
      c("artifact_roster_refresh", s.cause, {
        duration_ms: l,
        ...s.status !== void 0 && {
          status: s.status
        }
      }), t(`Artifact roster refresh failed (${s.cause}): ${s.err}`);
      let f = mFe(),
        {
          cause: A,
          status: u
        } = s;
      if (o(!1), A === "http_4xx" && (u === 403 || u === 401 && f !== a) && f !== null && te() === r) await mJo(r, n, e.storageV5, (h) => ({
        artifactRosterDenied: {
          ...h,
          status: u,
          deniedAt: Date.now(),
          tokenExpiresAt: f
        }
      }));
      return !1
    }
    g("artifact_roster_refresh", {
      duration_ms: l,
      schema_frozen: r.frozenAssets !== void 0
    });
    let {
      adopted: p,
      persisted: m
    } = jIe({
      session: r,
      epoch: n,
      roster: s,
      storageV5: e.storageV5
    });
    if (p) o(!0), await m;
    return !0
  } catch (n) {
    return t(`Artifact roster refresh: ${d(n)}`), !1
  } finally {
    o(!1)
  }
}
export {
  _aa,
  baa,
  Saa,
  T_a,
  Srr,
  K5o,
  C_a,
  R_a,
  A_a,
  x_a,
  q5o
};
