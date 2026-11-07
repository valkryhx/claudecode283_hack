// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { kzn, Jz, Q0r, mHe, Wan, OBt, Z0r, vzn, eLr, zan, ctt, Gan, Epe, vp, NKe, Ezn, DLr, Mpe, YLr, MHs, sAo, KKe, z4, XLr, iAo, r1t, Yp, HHs, o1t, s1t, jHs, WHs, Pte, JLr, Jy, QLr, vln, qHs, bC, Obt, Ibt, Ote, Mbt, jU, ZLr, Dbt, Lbt, eNr, Nbt, Pw, Ubt, YKe, Mte, u1t } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, K, Ai, Ime } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Kee, Owo, Cz, aPs, VHt, Eon, GNe, KPr, qPr, YPr, Ton, wRe, DYi, Vk, $3, nsn, g$t, La, Wm, WBn, zBn, Ln, iie, Tm, YBn, XBn, Syt, fC, dsn, csn, qbe, Rt, Yd as readStoredAccount, K1, psn, uVe, fVe, lJ, f1n, p1n, vIr, EIr, v, fJ } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { H, Xr, $wt, w0, b$r, b$e, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { Jc, nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { vt, t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { IN } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { wnt, EN, iHr, aHr, knt } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { Te, Yc, yzn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { IO, UCo, G7i, uHe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { vee, $go, Ugo, jgo } from "B:/~BUN/root/chunk-fzefftbw.js";
import { YV, CUs, RUs } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { AU } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { zF } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { A$n, xAr, OQe, IQe, x$n, MQe, TNe, JKi, Nse, G_o, O$n, V_o, PAr, K_o, q_o, Y_o, WFt } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { cAr } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { J1i, Zmo, gks, MNn, yks, Fi, Pji, Oji } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { xBe } from "B:/~BUN/root/chunk-wv4xq162.js";
import { p2e, t_o, Dee, sKi, oAr, Rb, n_o, lKi } from "B:/~BUN/root/chunk-1zzrbtzr.js";
import { f1 } from "B:/~BUN/root/chunk-63btkzab.js";
import { H4o, U4o, z4o, G4o, K4o } from "B:/~BUN/root/chunk-83f94s4f.js";
import { jne } from "B:/~BUN/root/chunk-vj4qhrtm.js";
import { ali } from "B:/~BUN/root/chunk-3namn0f2.js";
import { L$n, GFt } from "B:/~BUN/root/chunk-sjvfdrzm.js";
import { dRe as readOrgPin } from "B:/~BUN/root/chunk-n9ctns18.js";
import { o, oe, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { ui } from "B:/~BUN/root/chunk-xwsv2hvn.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { createHash as rt } from "crypto";
import { hostname as Ie } from "os";
import { readFile as it, rm as ot, unlink as st } from "fs/promises";
var et = "tengu_managed_config_prefetch_off";
function stillWanted() {
  let CLAUDE_CODE_MANAGED_CONFIG_PREFETCH = i.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
  if (CLAUDE_CODE_MANAGED_CONFIG_PREFETCH !== void 0) return CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
  if (Te() !== "firstParty" || !Yc() && zF() === void 0) return !1;
  return !v(et, !1);
}
function Pe({
  jws: jws,
  settings: settings,
  bodySent: bodySent,
  authType: authType,
  fetchedAs: fetchedAs,
  cachePath: cachePath
}) {
  let orgUuid = fetchedAs?.organizationUuid;
  if (authType !== "oauth" || orgUuid === void 0 || jne() !== orgUuid || !bodySent && kzn(settings)) return;
  try {
    if (oAr().kind === "profile") return;
  } catch (error) {
    t(`Remote settings: could not read the profile store: ${d(error)}`, {
      level: "error"
    });
    return;
  }
  return () => {
    try {
      if (jne() !== orgUuid) return !1;
      if (xBe.get().kind === "unavailable") return !1;
    } catch (error) {
      return a(error), c("remote_managed_settings_trusted_source", "error"), !1;
    }
    let pinnedOrgs;
    try {
      pinnedOrgs = readOrgPin();
    } catch (error) {
      return t(`Remote settings: the organization pin could not be read: ${d(error)}`, {
        level: "error"
      }), c("remote_managed_settings_trusted_source", "org_pin_unknown"), !1;
    }
    if (pinnedOrgs !== void 0 && !pinnedOrgs.includes(orgUuid)) return c("remote_managed_settings_trusted_source", "org_pin_mismatch"), !1;
    if (pinnedOrgs !== void 0) try {
      if (mHe({
        jws: jws,
        kind: "managed-settings",
        orgUuid: orgUuid,
        unanchoredClaims: "accept",
        bodySha: Jz(KKe(settings)),
        nowMs: Date.now(),
        roots: Epe()
      }).result === "aud_mismatch") return c("remote_managed_settings_trusted_source", "org_pin_aud_mismatch"), !1;
    } catch (error) {
      return a(error), c("remote_managed_settings_trusted_source", "error"), !1;
    }
    return tt({
      jws: jws,
      settings: settings,
      cachePath: cachePath,
      pinnedOrgs: pinnedOrgs
    }), !0;
  };
}
function tt({
  jws: jws_2,
  settings: settings_2,
  cachePath: cachePath_2,
  pinnedOrgs: pinnedOrgs_2
}) {
  try {
    let body = KKe(settings_2),
      S = Gan({
        kind: "managed-settings",
        cachePath: cachePath_2,
        live: {
          jws: jws_2
        },
        body: body,
        bodySha: Jz(body),
        account: readStoredAccount(),
        pinnedOrgs: pinnedOrgs_2,
        nowMs: Date.now(),
        roots: Epe()
      });
    if (S.trusted) g("remote_managed_settings_trusted_source");else c("remote_managed_settings_trusted_source", S.reason);
  } catch (error) {
    a(error), c("remote_managed_settings_trusted_source", "error");
  }
}
var Fe = p(() => u({
  uuid: o(),
  checksum: o(),
  settings: me(o(), oe())
}));
var timeout = 1e4,
  at = 5,
  dt = 3600000,
  ct = 30000;
class Le {
  poller = null;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  fetchSettledPromise = null;
  fetchSettledResolve = null;
  signedCacheShadowChecked = !1;
  storedCopyShadow = void 0;
  storedCopyReported = !1;
  storedCopyAtStart = void 0;
  liveAnswer = void 0;
  livePrincipalChecked = !1;
  backstopReleased = !1;
  refreshesHybridToken = !0;
  prefetch = new PAr();
  oauthRefreshLatch = {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
  createBarrier(e) {
    this.fetchSettledPromise = new Promise(n => {
      this.fetchSettledResolve = n, e?.(n);
    }), this.loadingCompletePromise = new Promise(n => {
      this.loadingCompleteResolve = n;
    });
  }
  releaseLoadBarrier() {
    this.loadingCompleteResolve?.(), this.loadingCompleteResolve = null;
  }
  releaseBarrier() {
    this.releaseLoadBarrier(), this.fetchSettledResolve?.(), this.fetchSettledResolve = null;
  }
  detachBarrier() {
    let loadingCompleteResolve = this.loadingCompleteResolve,
      fetchSettledResolve = this.fetchSettledResolve;
    if (this.loadingCompleteResolve = null, this.loadingCompletePromise = null, this.fetchSettledResolve = null, this.fetchSettledPromise = null, !loadingCompleteResolve && !fetchSettledResolve) return null;
    return () => {
      loadingCompleteResolve?.(), fetchSettledResolve?.();
    };
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    this.poller?.[Symbol.dispose](), this.poller = null;
  }
}
var ut = new W(() => new Le());
function L() {
  return ut.of(H().host);
}
function yqt() {
  Be();
  let e = L();
  if (e.loadingCompletePromise) return;
  if (Rb()) e.createBarrier(n => {
    setTimeout((h, r) => {
      if (r.fetchSettledResolve === h) {
        if (H4o()) {
          t("Remote settings: Loading promise timeout deferred \u2014 consent dialog pending");
          return;
        }
        t("Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)"), r.backstopReleased = !0, qHs(), r.releaseBarrier();
      }
    }, ct, n, e);
  });
}
function I4o() {}
function M4o(e) {
  if (Xr() || !Rb() || !1 || bC() || Obt() || ZLr() !== void 0) return;
  if (Ln()?.refreshToken && readStoredAccount() === void 0) return;
  let n = Nbt(),
    checksum = n ? Jz(n) : void 0,
    r = L(),
    {
      oauthRefreshLatch: oauthRefreshLatch
    } = r;
  r.prefetch.set({
    checksum: checksum,
    epoch: z4(),
    endpoint: le(),
    principal: xe()
  }, async S => Ce(lJ() ? f1n(checksum, await yks(n !== null, await MNn())) : checksum, !1, e, S, oauthRefreshLatch), S => S.success);
}
function S6r() {
  let e = L();
  e.prefetch.clear(), e.oauthRefreshLatch = {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
}
function xe() {
  if (Xr()) return "gateway";
  let e = Ln(),
    n = readStoredAccount(),
    h = nsn();
  return nt(_([Rt() && n_o(), e?.accessToken === void 0 ? null : e.refreshToken ? [n?.organizationUuid ?? "", n?.accountUuid ?? "", nt(e.accessToken)] : nt(e.accessToken), WBn().fingerprint, g$t() ? YV()?.organizationUuid ?? "" : null, h === void 0 ? null : nt(h)]));
}
function lt() {
  let e = K1({
    ownEntrypoint: !0
  });
  if (!iHr()) return e;
  let n = `, ${i.CLAUDE_CODE_ENTRYPOINT ?? "cli"}`,
    h = e.indexOf(n);
  return h === -1 ? e : e.slice(0, h + n.length) + `, ${aHr}` + e.slice(h + n.length);
}
function le() {
  let e = vp() ? null : Xr();
  if (e) return `${e.url}/managed/settings`;
  return `${nn().BASE_API_URL}/api/claude_code/settings`;
}
function ge(e) {
  if (!e) return e;
  return YKe(e, "remote managed settings").settings ?? {};
}
function Ue(e, n) {
  let settings_3 = sAo(e),
    r = YKe(settings_3, n),
    y = settings_3,
    S = Object.keys(y);
  if (!r.settings && S.length > 0 && !S.every(item => r.removed.includes(item)) && !gt(y)) return t(`Remote settings: ruled_empty - no key in the payload could be applied as written (${r.errors.length} rulings); nothing of it applies`), {
    ruledEmpty: {
      success: !1,
      error: "No setting in the payload could be applied as written",
      errorKind: "ruled_empty",
      rulings: r.errors,
      skipRetry: !0
    }
  };
  if (r.errors.length > 0) t(`Remote settings: Payload contains ${r.errors.length} invalid entries; applying the salvaged subset`);
  return {
    settings: settings_3,
    salvagedSettings: ht(y, r)
  };
}
function gt(e) {
  let n = Object.keys(e);
  return n.length > 0 && n.every(item => u1t.some(r => r === item));
}
function Ne(e, n, h) {
  let r = [...u1t.filter(item => item in n && !(item in e)), ...(h.onlySubstitutes ? h.errors.filter(item => item.onlySubstitutes).map(item => item.path) : [])].filter(item => item in n);
  if (r.length === 0) return e;
  return {
    ...e,
    ...Object.fromEntries(r.map(item => [item, n[item]]))
  };
}
function ft(e) {
  let n = YKe(e, "remote managed settings");
  return Ne(n.settings ?? {}, e, n);
}
function ht(e, n) {
  let h = n.errors.length > 0 ? n.settings ?? {} : void 0;
  return h === void 0 ? void 0 : Ne(h, e, n);
}
async function pt(e) {
  let n = ZLr();
  if (n === void 0) return null;
  if (n === "fail") return {
    success: !1,
    error: "mocked fetch failure",
    errorKind: "unknown_error",
    skipRetry: !0
  };
  if (n === "empty") return {
    success: !0,
    settings: {},
    checksum: void 0,
    consentIdentity: await Se(e)
  };
  try {
    let h = Dbt(),
      r = h !== void 0 ? await it(h, "utf-8") : n,
      y = ee(r);
    if (!y || typeof y !== "object" || Array.isArray(y)) return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0
    };
    let S = Ue(y, "mock remote settings");
    if ("ruledEmpty" in S) return S.ruledEmpty;
    return {
      success: !0,
      ...S,
      checksum: "mock",
      consentIdentity: await Se(e)
    };
  } catch {
    return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0
    };
  }
}
function w6r() {
  return Rb();
}
async function xB() {
  if (NKe()) return;
  let e = L();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}
function D4o() {
  let e = L(),
    storedCopyAtStart = e.storedCopyAtStart;
  return {
    storedCopy: storedCopyAtStart === void 0 || storedCopyAtStart === "not_read" ? "not_read" : zan(storedCopyAtStart, e.storedCopyShadow),
    liveSigned: K_o({
      kind: "managed-settings",
      answer: e.liveAnswer,
      account: readStoredAccount()
    })
  };
}
async function RP() {
  let e = L();
  if (e.fetchSettledPromise) await e.fetchSettledPromise;
}
DYi(RP, lKi);
f1.wait = RP;
f1.ask = () => qe();
f1.fetches = Rb;
function _qt() {
  return L().backstopReleased;
}
function jOe() {
  return Mbt(Rb());
}
function ver() {
  return !wnt() && Rb() && eNr();
}
function Be() {
  ali(async () => {
    if (ver()) await RP();else if (jOe()) await xB();
  });
}
async function mt(e, n) {
  if (vp()) {
    let S = L$n();
    if (S === null || GFt()) return {
      headers: {},
      error: S === null ? "No credential from the host that launched this session" : "The settings endpoint was moved after this session was launched",
      authType: "none"
    };
    let url = le();
    return S.kind === "bearer" ? {
      headers: {
        Authorization: `Bearer ${S.token}`,
        "anthropic-beta": Jc
      },
      authType: "oauth",
      credentialOrigin: "injected_token",
      url: url
    } : {
      headers: {
        "x-api-key": S.key
      },
      authType: "api_key",
      url: url
    };
  }
  let h = Xr();
  if (h) {
    let pinnedFingerprint = w0(h) ? await je(h, e) : void 0;
    return {
      headers: {
        Authorization: `Bearer ${h.jwt}`
      },
      authType: "gateway_jwt",
      consentIdentity: ze(h, pinnedFingerprint),
      pinnedFingerprint: pinnedFingerprint
    };
  }
  let r = oAr();
  if (r.kind === "org_login") {
    let S = Ln();
    if (S?.accessToken) return {
      headers: {
        Authorization: `Bearer ${S.accessToken}`,
        "anthropic-beta": Jc
      },
      authType: "oauth",
      accessToken: S.accessToken,
      ...(await ye(e))
    };
  }
  if (r.kind === "api_key") {
    if (Kee(r.key) === null) return t("Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host"), {
      headers: {},
      error: "Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host",
      authType: "api_key"
    };
    return {
      headers: {
        "x-api-key": r.key
      },
      authType: "api_key"
    };
  }
  if (r.kind === "host_bearer") return {
    headers: {
      Authorization: `Bearer ${r.bearer}`
    },
    authType: "oauth",
    credentialOrigin: "injected_token"
  };
  if (r.kind === "profile") {
    if (CUs()) return t("Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart"), {
      headers: {},
      error: "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
      authType: "profile",
      profileError: !0
    };
    try {
      let {
          getWIFCredentials: getWIFCredentials,
          getWIFTokenCache: getWIFTokenCache
        } = await import("B:/~BUN/root/chunk-vn0bed84.js"),
        [R, k] = await Promise.all([getWIFTokenCache(), getWIFCredentials()]);
      if (R !== null) {
        if (!t_o(k?.baseURL)) {
          let error_2 = `Remote settings: profile base URL ${k?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
          return t(error_2), {
            headers: {},
            error: error_2,
            authType: "profile",
            profileError: !0
          };
        }
        let accessToken = await R.getToken();
        return {
          headers: {
            ...k?.extraHeaders,
            Authorization: `Bearer ${accessToken}`
          },
          authType: "profile",
          accessToken: accessToken,
          profileBearer: !0,
          consentIdentity: Ke()
        };
      }
    } catch (S) {
      let error_3 = `Remote settings: profile credential unavailable: ${d(S)}`;
      t(error_3, {
        level: "error"
      });
      let {
        isWIFTransientExchangeError: isWIFTransientExchangeError
      } = await import("B:/~BUN/root/chunk-vn0bed84.js");
      return {
        headers: {},
        error: error_3,
        authType: "profile",
        profileError: !0,
        retryable: isWIFTransientExchangeError(S)
      };
    }
  }
  let y = Ln();
  if (y?.accessToken) return {
    headers: {
      Authorization: `Bearer ${y.accessToken}`,
      "anthropic-beta": Jc
    },
    authType: "oauth",
    accessToken: y.accessToken,
    ...(await ye(e))
  };
  return {
    headers: {},
    error: "No authentication available",
    authType: "none"
  };
}
async function yt(e) {
  return (await ye(e)).consentIdentity;
}
async function ye(e) {
  let n = readStoredAccount(),
    h = await Tm(e),
    credentialOrigin = h === "store" ? "stored_login" : h === "env" || h === "fd" ? "injected_token" : void 0;
  if (h !== "store") return {
    credentialOrigin: credentialOrigin
  };
  return {
    credentialOrigin: credentialOrigin,
    consentIdentity: n?.organizationUuid ? {
      organizationUuid: n.organizationUuid,
      accountUuid: n.accountUuid
    } : void 0
  };
}
function Ke() {
  let e = YV(),
    n = readStoredAccount();
  return e?.organizationUuid && e.accountEmail && n?.organizationUuid === e.organizationUuid && n.emailAddress === e.accountEmail && n.accountUuid ? {
    organizationUuid: e.organizationUuid,
    accountUuid: n.accountUuid
  } : void 0;
}
var $e = "gateway:",
  St = "hybrid:";
async function _t(e) {
  return;
}
var wt = 256;
function ze(e, n) {
  if (!w0(e) || !n || n === aPs) return;
  let h;
  try {
    h = new URL(e.url);
  } catch {
    return;
  }
  if (h.protocol !== "https:") return;
  let r = `${h.origin}${h.pathname === "/" ? "" : h.pathname}`,
    y = cAr(e) ?? "";
  return {
    organizationUuid: `${$e}${r}#${n}`,
    accountUuid: y.length > wt ? `sha256:${rt("sha256").update(y).digest("hex")}` : y
  };
}
async function je(e, n) {
  return GNe(Cz(new URL(e.url)), n);
}
async function Se(e) {
  let n = Xr();
  if (n) return ze(n, await je(n, e).catch(() => {
    return;
  }));
  if (Wm({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key === null && g$t()) return Ke();
  return yt(e);
}
async function fe(e, n, h, r) {
  if (!e) return;
  let y = e.organizationUuid.startsWith($e) ? await Se(r) : e.organizationUuid.startsWith(St) ? await _t(r) : readStoredAccount();
  if (y?.organizationUuid !== e.organizationUuid || y.accountUuid !== e.accountUuid) {
    t("Remote settings: consent identity no longer matches the fetch identity; not recording org consent");
    return;
  }
  await Oji(e, n, h);
}
function G(e) {
  if (z4() === e) return !1;
  return t("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result"), c("remote_managed_settings_pull", "reset_during_fetch"), !0;
}
function se(e) {
  return e.httpStatus !== void 0 ? `${e.errorKind}/${e.httpStatus}` : e.errorKind;
}
async function Ct(e, n) {
  let h = await pt(n.credentials);
  if (h) return h;
  let r = null,
    y = Xr() && !n.background || n.singleAttempt ? 0 : n.maxRetries ?? at,
    S = stillWanted(),
    C = S && n.startupAwaited === !0 && !n.background && !Xr(),
    R = S ? n.oauthRefreshLatch : void 0,
    send = E => Ce(e, !1, n.credentials, E, R, n.hybridOrganizationUuid),
    prefetched = n.prefetched,
    O = !1;
  for (let E = 1; E <= y + 1; E++) {
    let first = prefetched ?? O$n(send);
    if (prefetched = void 0, C && E === 1) {
      let M = await V_o({
        first: first,
        send: send,
        isAnswer: (w, B) => w.success || w.skipRetry === !0 && !(B && w.errorKind === "http_401"),
        stillWanted: stillWanted,
        retryFollows: y > 0
      });
      r = M.result, O ||= M.hedged;
    } else r = await first.attempt;
    if (r.attempts = E, O) r.hedged = !0;
    if (r.success) return r;
    if (r.skipRetry) return r;
    if (E > y) return r;
    let P = AU(E);
    t(`Remote settings: Retry ${E}/${y} after ${P}ms (${se({
      errorKind: r.errorKind ?? "unknown_error",
      ...(r.httpStatus !== void 0 && {
        httpStatus: r.httpStatus
      })
    })})`), await J(P);
  }
  return r;
}
var kt = Date.now();
function Me(e) {
  let errorCode = (() => {
      switch (e.errorKind) {
        case "http_401":
        case "http_403":
          return "auth_failed";
        case "timeout":
          return "timeout";
        case "network_error":
          return "network_error";
        case "parse_error":
        case "ruled_empty":
          return "parse_failed";
        case "http_4xx":
        case "http_5xx":
        case "unknown_error":
        case "gateway_cert_mismatch":
        case "gateway_public_address":
        case "gateway_pin_refused":
        case "gateway_pin_unreadable":
          return "request_failed";
        case "no_auth_available":
        case "profile_credential_error":
        case "api_key_not_sent":
        case void 0:
          return;
      }
    })(),
    httpStatus = e.errorKind === "http_401" ? 401 : e.errorKind === "http_403" ? 403 : e.httpStatus,
    authType_2 = e.authType === "oauth" ? "oauth" : e.authType === "api_key" ? "api_key" : e.authType === "profile" ? "wif" : void 0;
  return p1n({
    errorCode: errorCode,
    httpStatus: httpStatus,
    serverErrorType: e.serverErrorType,
    serverErrorCode: e.serverErrorCode,
    serverAuthDenial: e.serverAuthDenial,
    tokenRefreshOutcome: e.tokenRefreshOutcome,
    forcedRefreshOutcome: e.forcedRefreshOutcome,
    authType: authType_2,
    credentialOrigin: e.authType === "api_key" ? "static_key" : e.credentialOrigin,
    injectedTokenRecovery: e.credentialOrigin === "injected_token" ? dsn() : void 0,
    noResponse: e.noResponse
  });
}
async function Ce(checksum_2, n = !1, credentials, signal, y, S = null) {
  let C = y && uVe(y.recoveries),
    R,
    k = !1,
    T = !1,
    O,
    consentIdentity,
    A = !1,
    P = {},
    M = w => (t(`Remote settings: Fetch attempt failed (${se({
      errorKind: w.errorKind ?? "unknown_error",
      ...(w.httpStatus !== void 0 && {
        httpStatus: w.httpStatus
      })
    })})`), {
      ...P,
      ...w
    });
  try {
    if (O = S !== null ? "not_needed" : await qbe({
      credentials: credentials
    }), S === null) await $3(credentials);
    let w = await mt(credentials, S);
    if (R = w.accessToken, k = w.profileBearer === !0, T = w.accessToken !== void 0 && w.credentialOrigin === "stored_login", consentIdentity = w.consentIdentity, P = {
      authType: w.authType,
      credentialOrigin: w.credentialOrigin,
      tokenRefreshOutcome: w.authType === "oauth" ? O : void 0
    }, w.error) return M({
      success: !1,
      error: w.profileError ? w.error : "Authentication required for remote settings",
      errorKind: w.profileError ? "profile_credential_error" : w.authType === "api_key" ? "api_key_not_sent" : w.retryable ? "network_error" : "no_auth_available",
      skipRetry: !w.retryable
    });
    let B = w.url ?? le();
    A = w.url !== void 0;
    let headers = {
        ...w.headers,
        "User-Agent": EN() ? lt() : ui(),
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
      },
      F = NKe() || S !== null ? void 0 : checksum_2;
    if (F) headers["If-None-Match"] = `"${F}"`;
    let Y = Xr()?.hostVerdict,
      httpsAgent = wRe(w.pinnedFingerprint, B) ?? (Y && "verified" in Y && Y.verified && !("vouched" in Y) ? qPr(B, Y.network) : void 0),
      x = {
        headers: headers,
        timeout: timeout,
        ...(vp() && {
          proxy: !1
        }),
        ...(A && {
          maxRedirects: 0,
          adapter: "http"
        }),
        validateStatus: z => z === 200 || z === 204 || z === 304 || z === 404,
        signal: signal
      },
      I = await Wt.get(B, {
        ...x,
        ...(httpsAgent && {
          httpsAgent: httpsAgent
        })
      });
    if (Owo(I.headers?.["x-cc-gateway-version"]), I.status === 304) {
      if (!F) return t("Remote settings: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorKind: "unknown_error",
        httpStatus: 304,
        skipRetry: !0,
        ...P,
        ...IQe(I.headers)
      };
      return t("Remote settings: Using cached settings (304)"), {
        success: !0,
        settings: null,
        checksum: checksum_2,
        signature: Wan(I.headers),
        consentIdentity: consentIdentity,
        ...P,
        responseKind: "not_modified",
        ...IQe(I.headers)
      };
    }
    if (I.status === 204 || I.status === 404) {
      if (lJ() && P.authType !== "gateway_jwt" && !OQe(I.headers)) return t(`Remote settings: ${I.status} without Anthropic's request id \u2014 an intermediary's answer, keeping cached settings`), {
        success: !1,
        error: `${I.status} from an intermediary (no Anthropic request id)`,
        errorKind: "http_4xx",
        httpStatus: I.status,
        skipRetry: !0,
        ...P,
        ...IQe(I.headers)
      };
      return t(`Remote settings: No settings found (${I.status})`), {
        success: !0,
        settings: {},
        checksum: void 0,
        signature: Wan(I.headers),
        consentIdentity: consentIdentity,
        ...P,
        responseKind: "none_configured",
        ...IQe(I.headers)
      };
    }
    jgo(I.data);
    let N = Fe().safeParse(I.data);
    if (!N.success) return t(`Remote settings: Invalid response format - ${N.error.message}`), {
      success: !1,
      error: "Invalid remote settings format",
      errorKind: "parse_error",
      skipRetry: !0,
      ...P,
      ...IQe(I.headers)
    };
    let Z = Ue(NKe() ? Ezn(N.data.settings) : N.data.settings, "remote managed settings");
    if ("ruledEmpty" in Z) return {
      ...Z.ruledEmpty,
      ...P
    };
    if (y && N.data.checksum) fVe(y, C);
    return t("Remote settings: Fetched successfully"), {
      success: !0,
      ...Z,
      checksum: N.data.checksum,
      isAnsweredEmpty: Object.keys(N.data.settings).length === 0,
      signature: NKe() ? void 0 : Wan(I.headers),
      consentIdentity: consentIdentity,
      ...P
    };
  } catch (w) {
    let B = d(w?.cause);
    if (d(w).includes(VHt)) return M({
      success: !1,
      error: "Cloud gateway TLS pin is in a symlinked credentials file",
      errorKind: "gateway_pin_refused",
      skipRetry: !0
    });
    if (d(w).includes(Eon)) return M({
      success: !1,
      error: "Cloud gateway TLS pin could not be read from the credentials file",
      errorKind: "gateway_pin_unreadable"
    });
    if (d(w).includes(YPr) || B.includes(YPr)) {
      let gatewayPinMismatch = Ton(w);
      return M({
        success: !1,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        ...(gatewayPinMismatch && {
          gatewayPinMismatch: gatewayPinMismatch
        }),
        skipRetry: !0
      });
    }
    if (d(w).includes(KPr) || B.includes(KPr)) return M({
      success: !1,
      error: "Cloud gateway connection outside the network it was checked on",
      errorKind: "gateway_public_address",
      skipRetry: !0
    });
    let {
      kind: kind,
      status: F,
      message: Y
    } = Ai(w);
    if (F === 404 && S === null) {
      if (lJ() && P.authType !== "gateway_jwt" && !OQe(Wt.isAxiosError(w) ? w.response?.headers : void 0)) return M({
        success: !1,
        error: "404 from an intermediary (no Anthropic request id)",
        errorKind: "http_4xx",
        httpStatus: 404,
        skipRetry: !0,
        ...x$n(w)
      });
      return {
        success: !0,
        settings: {},
        checksum: "",
        consentIdentity: consentIdentity,
        ...P,
        responseKind: "none_configured",
        ...x$n(w)
      };
    }
    let Q = {
      ...MQe(w),
      ...x$n(w)
    };
    switch (kind) {
      case "auth":
        {
          let x = {
            success: !1,
            error: "Not authorized for remote settings",
            errorKind: F === 401 ? "http_401" : "http_403",
            skipRetry: !0,
            ...Q
          };
          if (signal?.aborted) return M(x);
          let I;
          if (F === 401 && R && !n && !y?.attempted) {
            let N = R,
              z = await psn(y, async () => {
                if (k) {
                  if (y) y.attempted = !0;
                  let {
                    getWIFTokenCache: getWIFTokenCache_2,
                    invalidateWIFToken: invalidateWIFToken
                  } = await import("B:/~BUN/root/chunk-vn0bed84.js");
                  return await invalidateWIFToken(N), getWIFTokenCache_2().then(U => U?.getToken()).catch(() => {
                    return;
                  });
                }
                return I = {
                  outcome: void 0
                }, await fC(N, credentials, void 0, {
                  onForcedRefreshOutcome: outcome => {
                    if (I = {
                      outcome: outcome
                    }, x.forcedRefreshOutcome = outcome, y) y.attempted = !0, y.lastOutcome = outcome;
                  }
                }), Ln()?.accessToken;
              });
            if (z && z !== R) {
              M(x), l("tengu_remote_settings_401_force_refresh_retry", {});
              let j = await Ce(checksum_2, !0, credentials, signal, y);
              return {
                ...j,
                retriedAfter401: !0,
                forcedRefreshOutcome: j.forcedRefreshOutcome ?? x.forcedRefreshOutcome
              };
            }
          }
          if (F === 401 && T && csn(O, I)) x.skipRetry = !1;
          if (F === 401 && k && n) RUs(!0);
          if (F === 401 && x.forcedRefreshOutcome === void 0 && y?.attempted) x.forcedRefreshOutcome = y.lastOutcome;
          return M(x);
        }
      case "timeout":
        return M({
          success: !1,
          error: "Remote settings request timeout",
          errorKind: "timeout",
          errno: WFt(w)
        });
      case "network":
        return M({
          success: !1,
          error: "Cannot connect to server",
          errorKind: "network_error",
          errno: WFt(w)
        });
      default:
        return M({
          success: !1,
          error: Y,
          errorKind: F !== void 0 && F >= 500 ? "http_5xx" : F !== void 0 && F >= 400 ? "http_4xx" : "unknown_error",
          ...(F !== void 0 && F >= 300 && {
            httpStatus: F
          }),
          ...(kind === "http" && F === void 0 && {
            noResponse: !0,
            errno: WFt(w)
          }),
          ...Q,
          ...((Ime(F) || A && F !== void 0 && F >= 300 && F < 400) && {
            skipRetry: !0
          })
        });
    }
  }
}
var _e = Symbol("keep the stored statement"),
  ae = Symbol("the server sent the body now");
async function De(e, n, h, r, y) {
  if (Ote()) return;
  let S = _(s1t() ? KKe(e) : e, null, 2),
    C = MHs(e);
  if (q() && X() && n !== void 0 && !bC()) {
    let R = await n.write(Ve.state("remote-settings"), S, {
      publishDiscipline: "inPlace",
      mode: 384,
      flush: !0
    });
    if (!R.ok) {
      t(`Remote settings: Failed to save - ${Ht(R.error)}`);
      return;
    }
    if (t("Remote settings: Saved via storage backend"), Lbt("cache", S), h !== _e) await OBt(jU(), h);
    if (await Zmo(y === ae ? void 0 : y), C !== void 0) {
      let k = await n.write(Ve.state(Mpe), C, {
        publishDiscipline: "inPlace",
        mode: 384
      });
      if (t(k.ok ? "Remote settings: Saved helper consent via storage backend" : `Remote settings: Failed to save helper consent - ${Ht(k.error)}`), k.ok) Lbt("helperConsent", C);
    }
    return;
  }
  if (q()) {
    IO("remote_settings", "remote-settings.json");
    return;
  }
  try {
    let R = jU();
    await Q0r(R, S), t(`Remote settings: Saved to ${R}`);
  } catch (error) {
    t(`Remote settings: Failed to save - ${error instanceof Error ? error.message : "unknown error"}`);
    return;
  }
  if (X() && !bC()) Lbt("cache", S);
  if (h !== _e) await OBt(jU(), h);
  if (await Zmo(y === ae ? void 0 : y), C === void 0) return;
  try {
    if (await Q0r(YLr(), C), X() && !bC()) Lbt("helperConsent", C);
  } catch (error) {
    t(`Remote settings: Failed to save helper consent - ${d(error)}`);
  }
}
async function fSn(e) {
  if (Cer(), Dee(), ir(), S6r(), L().detachBarrier()?.(), fJ(e)) return;
  if (vp()) return;
  let n = X() && e !== void 0 ? await e.delete(Ve.state(Mpe)).then(h => h.ok ? void 0 : Ht(h.error)) : await ot(YLr(), {
    force: !0
  }).then(() => {
    return;
  }, d);
  if (n !== void 0) {
    t(`Remote settings: Failed to remove helper consent - ${n}`);
    return;
  }
  if (X() && !bC()) Lbt("helperConsent", null);
  if (bC()) return;
  if (await vzn(jU()), await gks(), X() && e !== void 0) {
    if ((await e.delete(Ve.state("remote-settings"))).ok) Lbt("cache", null);
    return;
  }
  try {
    let h = jU();
    await st(h);
  } catch (error) {
    if (X() && !K(error)) return;
  }
  if (X()) Lbt("cache", null);
}
var ke;
async function be(e = {}) {
  try {
    return await bt(e);
  } finally {
    let n = () => Mte().settings;
    G7i(n), UCo(n);
  }
}
async function bt(e) {
  if (!Rb()) return L().prefetch.clear(), {
    settings: null,
    fetchSucceeded: !0,
    resolution: "ineligible"
  };
  let hybridOrganizationUuid = null,
    h = bC();
  if (h || Obt()) return L().prefetch.clear(), t(h ? `Remote settings: Using override file ${h} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch` : "Remote settings: confined evaluation child \u2014 serving the harness-written policy snapshot, no fetch"), {
    settings: Pw(),
    fetchSucceeded: !0,
    resolution: "local"
  };
  if (hybridOrganizationUuid === null) sKi();
  let settings_4 = Nbt(),
    y = Yp(),
    S = vee.get(),
    gateAnswer = jHs(),
    R = WHs(),
    k = settings_4 ? Jz(settings_4) : void 0,
    T = z4(),
    O = L();
  if (!O.signedCacheShadowChecked) {
    if (O.signedCacheShadowChecked = !0, O.storedCopyAtStart = Ote() || vp() || hybridOrganizationUuid !== null ? "not_read" : {
      enforced: o1t(),
      gateAnswer: gateAnswer,
      hadCopy: settings_4 !== null
    }, settings_4 && !vp() && hybridOrganizationUuid === null) q_o({
      kind: "managed-settings",
      cachePath: jU(),
      bodySha: s1t() ? Jz(KKe(settings_4)) : Jz(settings_4),
      readStoredAccount: readStoredAccount,
      readOrgPin: readOrgPin,
      onJudged: A => {
        O.storedCopyShadow = A;
      }
    });
  }
  if (!e.background && O.prefetch.pending) {
    let A = await Tm(e.credentials);
    if (A !== "store" || i.CLAUDE_CODE_OAUTH_TOKEN) iie();
    if (XBn(A)) await Syt(H().host, e.credentials);
  }
  let prefetched_2 = e.background ? void 0 : O.prefetch.take(A => A.checksum === k && A.epoch === T && A.endpoint === le() && A.principal === xe());
  try {
    let A = Date.now(),
      P = hybridOrganizationUuid === null ? await MNn(A) : void 0,
      M = lJ() && hybridOrganizationUuid === null ? await yks(settings_4 !== null, P, A) : void 0,
      w = lJ() ? f1n(k, M) : k,
      B = Date.now(),
      s = await Ct(w, {
        ...e,
        prefetched: prefetched_2,
        oauthRefreshLatch: e.background ? void 0 : O.oauthRefreshLatch,
        hybridOrganizationUuid: hybridOrganizationUuid
      }),
      duration_ms = Date.now() - B;
    if (e.cycleFacts) e.cycleFacts.hadCache = settings_4 !== null, e.cycleFacts.fetchMs = duration_ms;
    let Y = B + duration_ms;
    if (s.success && s.responseKind !== "not_modified") J1i(Y);
    let Q = s.authType === "oauth",
      credentialState = s.success ? void 0 : Me(s),
      I = vIr(s.success ? {
        succeeded: !0,
        responseKind: s.responseKind ?? "body"
      } : {
        succeeded: !1,
        failure: s.errorKind === "no_auth_available" || s.errorKind === "api_key_not_sent" ? "no_credentials" : s.errorKind === "profile_credential_error" ? "credential_exchange" : s.errorKind === "timeout" ? "timeout" : s.errorKind === "network_error" || s.errorKind === "gateway_public_address" || s.noResponse ? "network" : s.errorKind === "gateway_cert_mismatch" || s.errorKind === "gateway_pin_refused" || s.errorKind === "gateway_pin_unreadable" ? "tls" : s.errorKind === "parse_error" || s.errorKind === "ruled_empty" ? "parse" : s.httpStatus !== void 0 || s.errorKind === "http_401" || s.errorKind === "http_403" ? "http" : "other",
        httpStatus: s.httpStatus ?? (s.errorKind === "http_401" ? 401 : s.errorKind === "http_403" ? 403 : void 0),
        serverErrorType: s.serverErrorType,
        serverErrorCode: s.serverErrorCode,
        serverAuthDenial: s.serverAuthDenial,
        credentialState: credentialState,
        tokenRefreshOutcome: s.tokenRefreshOutcome,
        forcedRefreshOutcome: s.forcedRefreshOutcome,
        errno: s.errno,
        responseContentType: s.responseContentType,
        requestIdPresent: s.requestIdPresent,
        exchangeFinal: s.errorKind === "profile_credential_error" ? s.skipRetry === !0 : void 0
      });
    if (e.cycleFacts) e.cycleFacts.outcomeReason = I;
    let enforced = o1t(),
      Z = Ote() ? "not_read" : zan({
        enforced: enforced,
        gateAnswer: gateAnswer,
        hadCopy: settings_4 !== null
      }, O.storedCopyShadow),
      z = s.success ? s.settings : void 0;
    O.liveAnswer = s.success ? {
      jws: s.signature,
      bodySha: () => {
        if (z !== null && z !== void 0) return Jz(KKe(z));
        return settings_4 !== null && s1t() ? Jz(KKe(settings_4)) : s.checksum ?? "";
      }
    } : void 0;
    let j = !O.storedCopyReported && hybridOrganizationUuid === null;
    O.storedCopyReported = !0;
    let trustedPrincipal = enforced ? R : ctt(O.storedCopyShadow);
    if (s.success && s.signature !== void 0 && trustedPrincipal !== void 0 && !O.livePrincipalChecked) O.livePrincipalChecked = !0, Y_o({
      kind: "managed-settings",
      jws: s.signature,
      trustedPrincipal: trustedPrincipal,
      gate: enforced ? "enforced" : "shadow"
    });
    if (l("tengu_remote_settings_fetch", {
      duration_ms: duration_ms,
      ms_since_startup: Y - kt,
      success: s.success,
      error_kind: de(s.errorKind),
      http_status: s.httpStatus,
      attempts: s.attempts,
      had_cache: settings_4 !== null,
      cache_age_ms: settings_4 !== null ? P : void 0,
      stored_copy: j ? f(Z) : void 0,
      stored_copy_gate: j ? f(enforced ? "enforced" : "shadow") : void 0,
      is_load: !e.background,
      awaited: e.startupAwaited === !0,
      auth_type: de(s.authType),
      token_source: f(La().source),
      credential_road: f(A$n()),
      credential_origin: de(s.credentialOrigin),
      api_key_prefix: s.authType === "api_key" ? f(zBn()) : void 0,
      has_custom_base_url: yzn(),
      token_refresh_outcome: Q ? de(s.tokenRefreshOutcome) : void 0,
      forced_refresh_outcome: Q ? de(s.forcedRefreshOutcome) : void 0,
      retried_after_401: s.retriedAfter401 ?? !1,
      server_error_type: de(s.serverErrorType),
      server_error_code: de(s.serverErrorCode),
      server_auth_denial: de(s.serverAuthDenial),
      injected_token_recovery: de(!s.success && s.credentialOrigin === "injected_token" ? dsn() : void 0),
      credential_state: de(credentialState),
      error_errno: de(s.errno),
      outcome_reason: f(I),
      response_kind: de(s.success ? s.responseKind ?? "body" : void 0),
      request_id_present: s.requestIdPresent,
      response_content_type: de(s.responseContentType),
      prefetched: prefetched_2 !== void 0,
      hedged: s.hedged === !0
    }), s.success && s.responseKind === "none_configured") $go();
    if (G(T)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    if (!s.success && s.errorKind === "ruled_empty") {
      if (settings_4) r1t(settings_4);
      if (settings_4 !== null && Object.keys(settings_4).length > 0) c("remote_managed_settings_pull", "ruled_empty_kept_previous"), t("Remote settings: ruled_empty_kept_previous - the previously accepted settings stay in force");else m("remote_managed_settings_pull", "ruled_empty_nothing_kept"), t("Remote settings: ruled_empty_nothing_kept - no previously accepted settings to keep; nothing applied");
      return {
        settings: settings_4,
        fetchSucceeded: !1,
        failure: {
          errorKind: "ruled_empty",
          message: s.error ?? "ruled empty",
          rulings: s.rulings ?? []
        },
        resolution: "ruled_empty"
      };
    }
    if (!s.success) {
      m("remote_managed_settings_pull", s.errorKind ?? "remote_managed_settings_fetch_failed");
      let failure = {
        errorKind: s.errorKind ?? "unknown_error",
        message: s.error ?? "Unknown error",
        ...(s.httpStatus !== void 0 && {
          httpStatus: s.httpStatus
        }),
        ...(s.noResponse === !0 && {
          noResponse: !0
        }),
        ...(s.errno !== void 0 && {
          errno: s.errno
        }),
        ...(TNe(s) !== void 0 && {
          serverErrorType: TNe(s),
          ...(s.serverErrorCode !== void 0 && {
            serverErrorCode: s.serverErrorCode
          }),
          ...(s.serverAuthDenial !== void 0 && {
            serverAuthDenial: s.serverAuthDenial
          })
        }),
        ...((s.errorKind === "http_401" || s.errorKind === "http_403") && {
          credentialState: Me(s.serverErrorStamped === !0 || !lJ() ? s : {
            ...s,
            serverErrorType: void 0,
            serverErrorCode: void 0,
            serverAuthDenial: s.errorKind === "http_401" ? s.serverAuthDenial : void 0
          })
        }),
        ...(s.gatewayPinMismatch && {
          gatewayPinMismatch: s.gatewayPinMismatch
        })
      };
      if (settings_4) return t(`Remote settings: Using stale cache after fetch failure (${se(failure)})`), r1t(settings_4), {
        settings: settings_4,
        fetchSucceeded: !1,
        failure: failure,
        resolution: "failed"
      };
      return t(`Remote settings: Fetch failed (${se(failure)}) and no cached settings`), {
        settings: null,
        fetchSucceeded: !1,
        failure: failure,
        resolution: "failed"
      };
    }
    if (s.settings === null && settings_4 && settings_4 === XLr()) {
      if (t("Remote settings: Cache still valid (304 Not Modified)"), r1t(settings_4, {
        verified: !0
      }), !Ote()) {
        await Z0r(jU(), s.signature, {
          keptVerifiable: s1t()
        });
        let V = G(T);
        if (await eLr(jU(), V)) await gks();else if (!lJ()) await Zmo();
        if (V) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
      }
      if (!y) {
        if (await he(), G(T)) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
        if (settings_4 === XLr()) {
          if (await fe(s.consentIdentity, ge(settings_4), e.storageV5, e.credentials), G(T)) return {
            settings: null,
            fetchSucceeded: !1,
            resolution: "reset"
          };
        }
      }
      return g("remote_managed_settings_pull", {
        status: b("not_modified")
      }), {
        settings: settings_4,
        fetchSucceeded: !0,
        resolution: "applied"
      };
    }
    let settings_5 = s.settings ?? settings_4 ?? {};
    if (Object.keys(settings_5).length > 0) {
      let dangerousSettingsHash = s.consentIdentity ? await Pji(s.consentIdentity, e.storageV5) : null,
        Oe = ge(XLr()),
        Ze = dangerousSettingsHash !== null ? {
          source: "org_record",
          dangerousSettingsHash: dangerousSettingsHash,
          consentedPayload: Oe
        } : {
          source: "consented_payload",
          settings: Oe
        },
        Ae = ge(settings_5),
        ne = await G4o(Ze, Ae, e.showSecurityDialog, Pe({
          jws: s.signature,
          settings: settings_5,
          bodySent: s.settings !== null,
          authType: s.authType,
          fetchedAs: s.consentIdentity,
          cachePath: jU()
        }));
      if (G(T)) return {
        settings: null,
        fetchSucceeded: !1,
        resolution: "reset"
      };
      if (!K4o(ne)) {
        if (ne === "superseded") return t("Remote settings: A newer fetch took over the pending consent review; leaving the decision to it"), {
          settings: settings_4,
          fetchSucceeded: !0,
          resolution: "consent_superseded"
        };
        if (ne === "deferred_no_consent_surface") {
          let re = z4o();
          if (re) t("Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline"), c("remote_managed_settings_pull", "consent_deferred_no_surface");else t("Remote settings: No consent surface in this interactive session; keeping the consented baseline"), m("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface");
          return {
            settings: settings_4,
            fetchSucceeded: !1,
            resolution: re ? "deferred" : "no_consent_surface"
          };
        }
        return t("Remote settings: User rejected new settings, using cached settings"), {
          settings: settings_4,
          fetchSucceeded: !0,
          resolution: "rejected"
        };
      }
      if (r1t(settings_5, {
        verified: !0,
        consentDeferred: ne === "deferred_non_interactive"
      }), !y) {
        if (await he(), G(T)) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
      }
      switch (ne) {
        case "approved":
        case "first_party_silent":
        case "no_check_needed":
          if (iAo(settings_5), await fe(s.consentIdentity, Ae, e.storageV5, e.credentials), G(T)) return {
            settings: null,
            fetchSucceeded: !1,
            resolution: "reset"
          };
          let re = s1t() && s.settings !== null && s.signature !== void 0,
            Ee = s1t() && s.settings === null;
          await De(re || Ee ? settings_5 : s.salvagedSettings ?? (s.settings === null ? ft(settings_5) : settings_5), e.storageV5, re || s.salvagedSettings === void 0 && s.settings !== null ? s.signature : Ee ? s.signature ?? _e : void 0, hybridOrganizationUuid, s.settings !== null || !lJ() ? ae : M === void 0 ? 0 : A - M), t("Remote settings: Applied new settings successfully"), g("remote_managed_settings_pull", {
            status: b("updated")
          });
          break;
        case "deferred_non_interactive":
          t("Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented"), g("remote_managed_settings_pull", {
            status: b("applied_consent_deferred")
          });
          break;
        case "rejected":
        case "deferred_no_consent_surface":
        case "superseded":
          break;
      }
      return {
        settings: settings_5,
        fetchSucceeded: !0,
        resolution: "applied"
      };
    }
    if (s.isAnsweredEmpty === !0 && !G(T)) Ugo();
    let changesNothing = s.responseKind === "none_configured" && vp() && Nbt() === null && vee.get() === S;
    if (r1t(settings_5, {
      verified: !0
    }), !y && !changesNothing) {
      if (await he(), G(T)) return {
        settings: null,
        fetchSucceeded: !1,
        resolution: "reset"
      };
    }
    if (iAo(settings_5), await fe(s.consentIdentity, settings_5, e.storageV5, e.credentials), G(T)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    return await De(s.settings ?? {}, e.storageV5, s.signature, hybridOrganizationUuid, ae), t("Remote settings: Saved empty sentinel (404 response)"), g("remote_managed_settings_pull", {
      status: b("no_content")
    }), {
      settings: settings_5,
      fetchSucceeded: !0,
      resolution: "none",
      changesNothing: changesNothing
    };
  } catch {
    if (G(T)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    m("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let failure_2 = {
      errorKind: "unknown_error",
      message: "Unexpected error while applying remote settings"
    };
    if (settings_4) return t("Remote settings: Using stale cache after error"), r1t(settings_4), {
      settings: settings_4,
      fetchSucceeded: !1,
      failure: failure_2,
      resolution: "failed"
    };
    return {
      settings: null,
      fetchSucceeded: !1,
      failure: failure_2,
      resolution: "failed"
    };
  }
}
function ce(e) {
  if (!Rb()) {
    let reason = Pte();
    if (reason) JLr({
      state: "ineligible",
      reason: reason
    });
    return;
  }
  let n = Ge() !== void 0;
  if (e.fetchSucceeded) {
    if (JLr({
      state: "ok",
      hasSettings: e.settings !== null && Object.keys(e.settings).length > 0
    }), n) ir();
    return;
  }
  if (e.failure) {
    let r = e.settings !== null && Object.keys(e.settings).length > 0;
    if (JLr(r ? {
      state: "stale_cache",
      failure: e.failure,
      transportEnvWithheld: !Yp()
    } : {
      state: "failed",
      failure: e.failure,
      ...(r && uHe().settings !== null && {
        restrictionsOnly: !0
      })
    }), n || e.failure.rulings !== void 0) ir();
  }
}
function Ge() {
  let e = Jy();
  return e?.state === "failed" || e?.state === "stale_cache" ? e.failure.rulings : void 0;
}
async function x6e(showSecurityDialog, storageV5, h) {
  vln(), Be(), JKi(Ot);
  let r = L(),
    asks = Rb();
  if (vp()) try {
    if (l("tengu_cowork_cloud_launch_credential", {
      credential_road: f(A$n()),
      asks: asks
    }), DLr()) c("cowork_cloud_launch", "name_on_wsl_kernel", {
      container_launch: knt()
    });
  } catch (error) {
    a(error);
  }
  if (asks && !r.loadingCompletePromise) r.createBarrier();
  let fetchSettledResolve_2 = r.fetchSettledResolve,
    C = z4(),
    hadCache = Pw() !== null;
  if (hadCache && r.loadingCompleteResolve) r.releaseLoadBarrier();
  let awaited = h?.startupAwaited === !0;
  if (hadCache && !awaited) Nse("settings", {
    source: "cache",
    hadCache: hadCache,
    awaited: awaited
  });
  let cycleFacts = {},
    source = "error",
    E = awaited ? G_o("settings") : null;
  try {
    let A = await be({
        ...h,
        showSecurityDialog: showSecurityDialog,
        storageV5: storageV5,
        cycleFacts: cycleFacts
      }),
      {
        settings: settings_6,
        fetchSucceeded: fetchSucceeded
      } = A;
    if (source = Ye(A), z4() === C) ce(A);
    if (z4() === C && Rb() && !bC() && !Obt()) Xe(showSecurityDialog, storageV5, h?.credentials);
    if (settings_6 !== null && A.changesNothing !== !0) ue();
    return fetchSucceeded;
  } finally {
    if (We(fetchSettledResolve_2), z4() === C) QLr();
    if (cycleFacts.outcomeReason !== void 0) ke = cycleFacts.outcomeReason;
    Nse("settings", {
      source: source,
      hadCache: hadCache,
      awaited: awaited,
      fetchMs: cycleFacts.fetchMs
    }), E?.("completed");
  }
}
function Ot() {
  let e = Pte(),
    n = Rb() ? ke : EIr(YBn(e));
  return {
    settings_outcome_reason: de(n),
    settings_ineligible_reason: de(e)
  };
}
function Ye({
  resolution: resolution,
  settings: settings_7
}) {
  switch (resolution) {
    case "applied":
      return settings_7 !== null && Object.keys(settings_7).length > 0 ? "fetch" : "none";
    case "none":
      return "none";
    case "local":
      return "cache";
    case "failed":
    case "ruled_empty":
    case "no_consent_surface":
      return "error";
    case "reset":
    case "consent_superseded":
      return "superseded";
    case "rejected":
      return "rejected";
    case "deferred":
      return "deferred";
    case "ineligible":
      return "ineligible";
  }
}
function We(e) {
  let n = L();
  if (n.fetchSettledResolve && n.fetchSettledResolve === e) n.releaseBarrier();
}
async function Bne(e, n, h, r) {
  return (await Eer(e, n, h, r)).fetchSucceeded;
}
var At = 5000;
async function L4o(e, n, h) {
  let r,
    promise = new Promise(R => {
      r = U4o(() => R("consent_pending"));
    }),
    S = G_o("settings", {
      supersede: !0
    }),
    C = Eer(e, n, h, {
      startupAwaited: !0,
      callerRecordsBarrier: !0
    }).then(({
      fetchSucceeded: fetchSucceeded_2
    }) => fetchSucceeded_2 ? "refreshed" : "failed", R => (a(R), "failed"));
  try {
    let R = await we(Promise.race([C, promise]), At);
    if (S(R === void 0 ? "timed_out" : "completed"), R === void 0) return c("remote_managed_settings_startup_await", "deadline_expired"), "timed_out";
    return R;
  } finally {
    r?.(), S("completed");
  }
}
async function N4o(e, {
  timeoutMs: n = timeout
} = {}) {
  let h = await Wt.get(`${nn().BASE_API_URL}/api/claude_code/settings`, {
      headers: {
        "User-Agent": ui(),
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Authorization: `Bearer ${e}`,
        "anthropic-beta": Jc
      },
      timeout: n,
      signal: AbortSignal.timeout(n),
      maxRedirects: 0,
      adapter: "http",
      validateStatus: S => S === 200 || S === 204 || S === 304 || S === 404
    }),
    r = h.headers ?? {},
    y = r["content-type"];
  return {
    status: h.status,
    contentType: typeof y === "string" ? y : "",
    requestIdPresent: OQe(r)
  };
}
async function Eer(showSecurityDialog_2, storageV5_2, credentials_2, r) {
  let y = r?.startupAwaited === !0;
  Cer(), Dee(), vln();
  let S = z4(),
    C = L(),
    R = C.detachBarrier();
  if (!Rb()) return C.prefetch.clear(), R?.(), ce({
    settings: null,
    fetchSucceeded: !0,
    resolution: "ineligible"
  }), QLr(), Nse("settings", {
    source: "ineligible",
    hadCache: !1,
    awaited: y
  }), ue(), UCo(() => Mte().settings), {
    fetchSucceeded: !0
  };
  yqt();
  let fetchSettledResolve_3 = C.fetchSettledResolve;
  if (R) if (C.fetchSettledPromise) C.fetchSettledPromise.then(R);else R();
  let T,
    O,
    cycleFacts_2 = {},
    source_2 = "error",
    P = y && !r?.callerRecordsBarrier ? G_o("settings", {
      supersede: !0
    }) : null;
  try {
    O = await be({
      showSecurityDialog: showSecurityDialog_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      startupAwaited: y,
      maxRetries: r?.maxRetries,
      cycleFacts: cycleFacts_2
    }), source_2 = Ye(O), T = {
      fetchSucceeded: O.fetchSucceeded,
      ...(O.failure && {
        failure: O.failure
      })
    };
  } finally {
    if (We(fetchSettledResolve_3), z4() === S) QLr();
    if (cycleFacts_2.outcomeReason !== void 0) ke = cycleFacts_2.outcomeReason;
    Nse("settings", {
      source: source_2,
      hadCache: cycleFacts_2.hadCache === !0,
      awaited: y,
      fetchMs: cycleFacts_2.fetchMs
    }), P?.("completed");
  }
  if (t("Remote settings: Refreshed after auth change"), z4() !== S) return t("Remote settings: Refresh superseded by a login/logout reset; not notifying"), T;
  if (ce(O), !bC()) Xe(showSecurityDialog_2, storageV5_2, credentials_2);
  return ue(), T;
}
function ue() {
  try {
    HHs(), Fi.notifyChange("policySettings");
  } catch (error) {
    a(error);
  }
}
async function he() {
  if (q()) return;
  try {
    let n = [];
    using h = {
      [Symbol.dispose]: () => {}
    };
    let [{
        applyConfigEnvironmentVariables: applyConfigEnvironmentVariables,
        applySafeConfigEnvironmentVariables: applySafeConfigEnvironmentVariables
      }, {
        checkHasTrustDialogAccepted: checkHasTrustDialogAccepted
      }, {
        captureAdmin3PSteeringSnapshot: captureAdmin3PSteeringSnapshot
      }, {
        providerBoundRoute: providerBoundRoute,
        resetProviderBoundCachesIfMoved: resetProviderBoundCachesIfMoved
      }] = await Promise.all([import("B:/~BUN/root/chunk-gmwfm73y.js"), import("B:/~BUN/root/chunk-9tp6zqq1.js"), import("B:/~BUN/root/chunk-73v9xgwn.js"), import("B:/~BUN/root/chunk-6cavcmpg.js")]),
      O = null;
    if (checkHasTrustDialogAccepted()) applyConfigEnvironmentVariables();else {
      applySafeConfigEnvironmentVariables();
      let [{
        clearProxyCache: clearProxyCache,
        configureGlobalAgents: configureGlobalAgents
      }, {
        clearCACertsCache: clearCACertsCache,
        loadExtraCACerts: loadExtraCACerts
      }, {
        clearMTLSCache: clearMTLSCache,
        loadMTLSClientMaterial: loadMTLSClientMaterial
      }] = await Promise.all([import("B:/~BUN/root/chunk-hm55wvr0.js"), import("B:/~BUN/root/chunk-5atyn919.js"), import("B:/~BUN/root/chunk-tbs1z5mb.js")]);
      clearProxyCache(), clearCACertsCache(), clearMTLSCache(), await Promise.all([loadExtraCACerts(), loadMTLSClientMaterial()]), configureGlobalAgents();
    }
    if (captureAdmin3PSteeringSnapshot(), O !== null) resetProviderBoundCachesIfMoved(O);
  } catch (error) {
    a(error);
  }
}
function Ter(e) {
  let [n] = Ubt(e?.slice(0, 1) ?? []);
  if (!n || !e) return "";
  let h = e.length - 1;
  return ` (${n.path}: ${n.message}${h > 0 ? `, and ${h} more` : ""})`;
}
function Re(e) {
  let {
    origin: origin,
    pathname: pathname
  } = new URL(e);
  return `${origin}${pathname.replace(/\/$/, "")}`;
}
function ie(e) {
  return `Claude Desktop runs Claude Code under your organization's policy from the gateway at ${Re(e)}, but`;
}
function F4o(e) {
  let n = Xr(),
    h = n?.hostVerdict;
  if (!n || !h) return;
  if ("unresolvedReason" in h) return `${ie(n.url)} it could not be checked. ${h.unresolvedReason} If this keeps happening, contact your administrator.`;
  if (h.verified) return;
  let r = h.reason ?? "it is not Anthropic-operated or inside your organization's network.";
  if (e) return `Your organization requires managed settings, but the gateway at ${Re(n.url)} is not an accepted source for them: ${r} Contact your administrator.`;
  if (h.codeTabRulesUnanswered !== void 0) return `${ie(n.url)} Claude Code couldn't ask that gateway whether it has rules for this session (${h.codeTabRulesUnanswered}). Send your message again. This check runs because Claude Code on ${Ie()} doesn't take settings from that gateway: ${r}`;
  if (h.hasCodeTabRules) return `${ie(n.url)} Claude Code on ${Ie()} doesn't take settings from that gateway: ${r}`;
  if (h.hasCodeTabRules === !1) {
    t(`[gateway] ${Re(n.url)} is not accepted as a source of managed settings. It says that it has no Code tab rules for this person, so no warning is shown`);
    return;
  }
  Je(`the gateway at ${n.url} is not an accepted source for them: ${r.replace(/\.\s*$/, "")}`);
  return;
}
function k6r(e) {
  let n = Xr();
  if (!n || !b$r(n)) return;
  let h = ie(n.url),
    r = Jy(),
    y = r?.state === "failed" || r?.state === "stale_cache" ? r.failure : void 0;
  if (y?.errorKind === "gateway_public_address") return `${h} this machine is no longer reaching it from inside your organization's network (it may have left that network or VPN, or the gateway's name now resolves elsewhere), so the policy was not fetched. Reconnect to that network and start again, or contact your administrator.`;
  if (y?.errorKind === "ruled_empty") return `${h} none of the settings it served could be applied as written${Ter(y.rulings)}. Ask your administrator to fix them.`;
  if (!e || y) {
    let S = y ? `: ${p2e(y.errorKind, y.httpStatus)}` : "";
    return `${h} the policy could not be loaded from it${S}. Check your network connection, or contact your administrator.`;
  }
  v6r();
  return;
}
function v6r() {
  let e = Xr();
  if (!e || !b$r(e)) return;
  let n = Jy();
  if (n?.state === "ok" && !n.hasSettings) Je(`the gateway at ${e.url} has no Claude Code policy for this Desktop session (self-hosted gateway admins: set \`serve_to_desktop: true\` on this user's policy, or change \`cli\` to \`code\` in every policy)`);
}
function Je(e) {
  let n = `Starting without your organization's managed settings: ${e}.`;
  t(`Remote settings: ${n}`, {
    level: "warn"
  }), IN(`${n}
`);
}
var pe = "Your organization requires remote managed settings to load, but they could not be loaded.";
function E6r(e) {
  return e?.errno === "CERT_ERROR" ? "Could not verify the gateway's TLS certificate. Check your connection, and join your organization's network if the gateway needs it." : "Check your connection, and join your organization's network if the gateway needs it. If it still fails, try again in a few minutes.";
}
async function pSn(e, n) {
  try {
    if (await e()) {
      let R = n();
      return R === void 0 ? {
        valid: !0
      } : {
        valid: !1,
        message: `${pe} ${R}`
      };
    }
  } catch (error) {
    a(error);
  }
  let h = Ge();
  if (h !== void 0) return {
    valid: !1,
    message: `${pe} None of the settings the server returned could be applied as written${Ter(h)}; ask your administrator to fix them.`
  };
  let r = "claude auth login",
    y = Jy(),
    S = y?.state === "failed" || y?.state === "stale_cache" ? y.failure : void 0,
    C = Vk() ? "You can check your network connection or contact your admin." : b$e() && S?.errorKind !== "http_401" && S?.errorKind !== "http_403" ? E6r(S) : `Run \`${r}\` to re-authenticate, check your network connection, or contact your administrator.`;
  return {
    valid: !1,
    message: `${pe} ${C}`
  };
}
async function qe(showSecurityDialog_3, storageV5_3, credentials_3) {
  if (!Rb()) return;
  if (L().refreshesHybridToken = !0, !vp() && Ibt() === null) {
    if (await $3(credentials_3), $wt()) {
      t("Remote settings: Background poll skipped because the gateway sign-in has expired");
      return;
    }
  }
  let r = Pw(),
    y = r ? _(r) : null,
    S = Yp(),
    C = vee.get() === "served",
    R = z4();
  try {
    let k = await be({
      background: !0,
      showSecurityDialog: showSecurityDialog_3,
      storageV5: storageV5_3,
      credentials: credentials_3
    });
    if (z4() !== R) {
      t("Remote settings: Background poll superseded by a login/logout reset; not notifying");
      return;
    }
    if (k.fetchSucceeded || k.failure?.errorKind === "ruled_empty") ce(k);
    let T = Pw(),
      E = (T ? _(T) : null) !== y,
      A = !S && Yp(),
      P = vp() && !C && vee.get() === "served";
    if (E || A || P) t(E ? "Remote settings: Changed during background poll" : "Remote settings: Confirmed by a background poll"), ue();
  } catch {}
}
function Xe(e, n, h) {
  let r = L();
  if (r.poller !== null) return;
  if (!Rb()) return;
  let S = xAr(() => void qe(e, n, h), dt, {
    unref: !0
  });
  r.startPoller(S), vt(S);
}
function Cer() {
  L().stopPoller();
}
export { stillWanted as uSn, yqt, I4o, M4o, S6r, w6r, xB, D4o, RP, _qt, jOe, ver, fSn, x6e, Bne, L4o, N4o, Eer, Ter, F4o, k6r, v6r, E6r, pSn, Cer };