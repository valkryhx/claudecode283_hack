// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Knt,
  DN,
  Fae,
  Qnt,
  h4e
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  d,
  k,
  H_
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  hYi,
  Lwo,
  Tw,
  _3i,
  V1,
  yOs,
  U3,
  AOs,
  iie,
  gu,
  Yd,
  Oz,
  v1n,
  Gt,
  ND,
  Jk,
  rin,
  TEo,
  QRe,
  A4,
  sin
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  pr,
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  oAe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Bs,
  cBt,
  m7i,
  bKe,
  Kn,
  kCo
} from "B:/~BUN/root/chunk-gvasf6q6.js";
import {
  pUi,
  VW
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  gz
} from "B:/~BUN/root/chunk-w0nyevkg.js";
import {
  mJr,
  iA
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  dxi
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Cue
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  dco
} from "B:/~BUN/root/chunk-nk59bmc9.js";
import {
  ebe
} from "B:/~BUN/root/chunk-64qg3pvz.js";
import {
  TLt,
  Cs
} from "B:/~BUN/root/chunk-kpr2et3s.js";
import {
  V1i,
  K1i
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  vmr,
  FCi,
  HCi
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  pRs
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  M1i
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  wli
} from "B:/~BUN/root/chunk-0d7anwa7.js";
import {
  S8,
  Une
} from "B:/~BUN/root/chunk-xf5c537t.js";
import {
  kpi
} from "B:/~BUN/root/chunk-x29v5gdt.js";
import {
  Jai
} from "B:/~BUN/root/chunk-xj85wdtk.js";
import {
  XG
} from "B:/~BUN/root/chunk-dqprk713.js";
import {
  fSn
} from "B:/~BUN/root/chunk-7e6w46ha.js";
import {
  Wne
} from "B:/~BUN/root/chunk-0yg1pq2n.js";
import {
  gqt
} from "B:/~BUN/root/chunk-gdetqceq.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
var _ = null;

function ker(e) {
  return e.oauthAccount = void 0, e.managedSettingsNoticeSeenOrg = void 0, e.additionalModelOptionsCache = void 0, e.additionalModelOptionsAnsweredAt = void 0, e.additionalModelCostsCache = void 0, e.modelAccessCache = void 0, e.orgModelDefaultCache = void 0, e.cachedArtifactRoster = void 0, e.artifactRosterDenied = void 0, e.lastSeenOrgDefaultUpdatedAt = void 0, e.clientDataCache = void 0, e.clientDataCacheSlots = void 0, e.autoCompactWindowsCache = void 0, e.cachedUsageUtilization = void 0, e.metricsStatusCache = void 0, e.metricsStatusCacheByPrincipal = void 0, e.githubWebConnectionStatusCache = void 0, e.unusedLimitResetStatusCache = void 0, e.startupPrefetchedAt = void 0, e
}
async function P4o(e) {
  let n = await Jk((l) => ker({
    ...l
  }), e);
  return Knt(void 0), n || await rin(e) === void 0
}

function O(e) {
  let n = {
    ...e
  };
  return delete n.claudeAiOauth, delete n.organizationUuid, delete n.trustedDeviceToken, delete n.trustedDeviceEnrolledAfterRefusalAtMs, delete n.enterpriseGateway, delete n.designOauth, delete n.cloudSessionsOauth, n
}
async function P(e) {
  await cBt(async () => {
    let n = !1;
    if (await e.mutate((l) => {
        let u = O(l),
          f = Object.keys(u).length;
        return n = f === 0 && Object.keys(l).length > 0, f === Object.keys(l).length || n ? l : u
      }), n) await e.delete()
  })
}
var LCt = "Your account or API key may still be in the config file. Run claude auth logout.",
  T = 500;
async function ABe({
  clearOnboarding: e = !1,
  preserveInProcessTokens: n = !1,
  preserveNonAnthropicAuth: l = !1,
  keepStoredLogin: u = !1,
  storageV5: f,
  preserveQuotaAutoResume: p = !1,
  artifactAccount: S = "signed_out",
  incomingIdentity: v,
  credentials: y
}) {
  let {
    flushTelemetry: E
  } = await import("B:/~BUN/root/chunk-60ybc9d1.js");
  if (await E(), await K1i(S), Gt()) {
    await cSn(f, {
      preserveQuotaAutoResume: p,
      artifactAccount: S,
      incomingIdentity: v
    });
    return
  }
  if (!n && Te() === "firstParty") {
    let r = Kn();
    r.invalidateCache?.();
    let o = await r.readAsync(y),
      s = o?.claudeAiOauth;
    if (s?.refreshToken) await Tw(s.refreshToken, s.clientId);
    let m = o?.designOauth;
    if (m?.refreshToken) await Tw(m.refreshToken, m.clientId);
    let h = o?.cloudSessionsOauth;
    if (h?.refreshToken) await Tw(h.refreshToken, h.clientId)
  }
  if (Te() === "gateway") {
    let r = Date.now() + 5000;
    for (let m = h4e(); m && Date.now() < r; m = h4e()) await we(m.catch(() => {}), r - Date.now());
    let o = Kn();
    o.invalidateCache?.();
    let s = (await o.readAsync(y))?.enterpriseGateway;
    if (s) await yOs(s, y)
  }
  if (!n) i.unset("CLAUDE_CODE_OAUTH_TOKEN"), DN(null);
  await AOs(f), await Jai({
    revoke: !n && Te() === "firstParty" ? ({
      refreshToken: r,
      clientId: o
    }) => Tw(r, o) : void 0
  }), v1n();
  let w = Kn(),
    L, C = !1;
  if (l) {
    if (Te() === "firstParty") {
      w.invalidateCache?.();
      let r = (await w.readAsync(y))?.designOauth;
      if (r?.refreshToken) await Tw(r.refreshToken, r.clientId)
    }
    C = await cBt(async () => {
      let r = u;
      if (u) {
        let s = await we(QRe(f).catch(() => {
            return
          }), T),
          m = Yd();
        if (r = (m === void 0 || gu(m, v)) && (s === void 0 || gu(TEo(s), v)), !r) t("[performLogout] re-login: the account entry no longer names the account the sign-in judged it by; removing the stored login")
      }
      return (await w.mutate((s) => {
        let m = O(s);
        if (!r || !s.claudeAiOauth) return m;
        let h = {
          ...m,
          claudeAiOauth: s.claudeAiOauth
        };
        return Object.keys(h).length === Object.keys(s).length ? s : h
      }, y)).success ? r : u
    }).catch((r) => {
      let o = k(r);
      if (o === "EPERM" || o === "ENOENT" || H_(r)) t(`[performLogout] re-login secure-storage prune failed (${o}): ${d(r)}`, {
        level: "error"
      });
      else a(r);
      return u
    });
    for (let r of kCo()) await P(r).catch((o) => {
      t(`[performLogout] re-login prune of ${r.name} failed: ${d(o)}`, {
        level: "error"
      })
    })
  } else {
    let r = !1,
      o = async () => {
        r = !0;
        let m = (await I(w, y))?.coworkRemoteDevice;
        if (await w.delete(y), m && Object.keys(m).length > 0) await N(w, m, y);
        for (let h of kCo()) await h.delete()
      };
    await cBt(o).catch((s) => {
      if (r) throw s;
      return a(s), m7i(o)
    })
  }
  Fae(null), Qnt(null), oAe(null), await cSn(f, {
    preserveQuotaAutoResume: p,
    artifactAccount: S,
    incomingIdentity: v,
    keepStoredLogin: C,
    credentials: y
  });
  let b = await Jk((r) => {
    let o = {
      ...r
    };
    if (o.primaryApiKey = void 0, e) {
      if (o.hasCompletedOnboarding = !1, o.subscriptionNoticeCount = 0, o.hasAvailableSubscription = !1, o.customApiKeyResponses !== void 0) o.customApiKeyResponses = {
        approved: [],
        rejected: A4(o).rejected
      };
      let s = gqt;
      if (o.seenNotifications?.[s] !== void 0) {
        let {
          [s]: m, ...h
        } = o.seenNotifications;
        o.seenNotifications = h
      }
    }
    return ker(o), o
  }, f);
  await D(), Knt(void 0);
  let A = b ? void 0 : await rin(f);
  if (A !== void 0) return c("oauth_logout", "config_not_saved"), A === "key" ? "key_on_file" : "account_on_file";
  g("oauth_logout");
  return
}
async function D() {}
async function cSn(e, {
  preserveQuotaAutoResume: n = !1,
  artifactAccount: l = "signed_out",
  incomingIdentity: u,
  keepStoredLogin: f = !1,
  credentials: p
} = {}) {
  if (iie(), X() && p === void 0) bKe();
  gz(), sin(), pr().providerCache.clientDataFetches.clear(), V1(), pr().providerCache.modelConfigs.clear(), pr().providerCache.validatedModels.clear(), _3i(), hYi(), U3(), Lwo(), TLt(Cs().gzipRequestBody.blockStore), Cue();
  let S = H();
  if (dxi(S.host), _?.forgetClaudeCodeKeyHeard(), _?.recordServerAccountMemoryWord(void 0), kpi(S.host), V1i(l, u), l !== "same_account") {
    if (M1i(S), !(Gt() && l === "signed_out")) mJr("account_change"), dco("account_change")
  }
  if (Wne.of(S.host).clear(), Oz(), iA(S, "account_change"), !f) ND();
  if (Une.cache?.clear?.(), S8.cache?.clear?.(), await fSn(e), await pRs(), wli(), FCi(), HCi(), !n) XG("account_switch"), VW("account_switch"), pUi();
  vmr()
}
async function Hya({
  exit: e,
  setError: n,
  setInfo: l,
  storageV5: u,
  credentials: f
}) {
  l("Signing out\u2026"), ebe({
    action: "logout",
    success: !0,
    authMethod: "oauth"
  });
  try {
    if (await ABe({
        clearOnboarding: !0,
        storageV5: u,
        credentials: f
      }) !== void 0) throw new R(LCt, "logout could not save the config file");
    e()
  } catch (p) {
    a(p), n(`Couldn't sign out \u2014 ${p instanceof Error?p.message:String(p)}`)
  }
}
async function N(e, n, l) {
  let u;
  for (let f = 0; f < 2; f++) try {
    let p = await e.mutate(() => ({
      coworkRemoteDevice: n
    }), l);
    if (p.success) return;
    if (u = Error("logout: the device identity could not be written back after the credential wipe"), !p.transient) break
  } catch (p) {
    u = p
  }
  a(u)
}
async function I(e, n) {
  for (let l = 0; l < 2; l++) {
    let u = await (e.readAsyncStrict?.(n) ?? e.readAsync(n));
    if (u !== Bs) return u
  }
  a(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return
}
export {
  ker,
  P4o,
  LCt,
  ABe,
  cSn,
  Hya
};
