// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, Po, lB, dne, pm, Hcn, Qp } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, F, d, k, K, Ai, Ime } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, zt, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { vt, t, _, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { dT } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Jc, nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { xon, Pon, QYi, Wwo, ZYi, md, tsn, Sc, Tg, La, zBn, Vx, vOs, uh, Ln, iie, kE, Tm, YBn, XBn, Syt, dsn, Kl, csn, qbe, Rt, Yd as readStoredAccount_2, gV, uVe, fVe, vE, lJ, f1n, p1n, vIr, EIr, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { l, pi } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Te, Yc, yzn } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { kFs, vpe, yRo, SQi, jan, Jz, vFs as bodySha_3, mHe, Wan, CFs, OBt, Z0r, vzn, eLr, AQi, IBt, zan, ctt, RFs, Epe, vp } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { b5, cm, ey } from "B:/~BUN/root/chunk-wthaftk0.js";
import { l7i, hs, d7i } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Yz } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { YFe } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { AU } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { Fse } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { VFt, Q_o, FQe, gqi, yqi, IAr, MAr, sRe, Hse, N$n, Z_o, DAr, cgt, bRs, bqi, ebo, tbo, Sqi, rbo, obo, sbo, F$n, wRs, kRs, LAr, ibo, qFt, vRs, urn, ERs, abo, fbe, TRs, ANe, NAr, FAr, mU, H$n, ugt, HAr, $Ar, XI, zF, RRs, UAr, By, Sz, prn, dbo, $ee, ARs, cbo, ubo, fbo, mrn, pbo, xRs, BAr, PRs, jAr, hbo, fgt, IRs, MRs, hrn, WAr, U$n, pgt, gbo, BRs, GAr, _bo, GRs, Nv } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { yRs } from "B:/~BUN/root/chunk-mwy4xyee.js";
import { uqi } from "B:/~BUN/root/chunk-sjvfdrzm.js";
import { dRe as readOrgPin_4 } from "B:/~BUN/root/chunk-n9ctns18.js";
import { cS } from "B:/~BUN/root/chunk-44b8s34m.js";
import { wWs, Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { ui } from "B:/~BUN/root/chunk-xwsv2hvn.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
class ht {
  run = null;
}
var Yt = new W(() => new ht());
function ft() {
  return Yt.of(H().host);
}
async function tRs() {
  await ft().run?.();
}
function mt(e) {
  let r = ft();
  return r.run = e, () => {
    if (r.run === e) r.run = null;
  };
}
import { statSync as ci } from "fs";
import { unlink as hi, writeFile as fi } from "fs/promises";
function A$n() {
  if (vp()) return uqi();
  if (i.CLAUDE_CODE_OAUTH_TOKEN) return "env_var";
  let e = Hcn("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
  if (e !== void 0) return e;
  if (i.ANTHROPIC_API_KEY) return "env_var";
  return Hcn("CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR") ?? "none";
}
function Be(e, r, n = {}) {
  let o = setInterval(e, r);
  if (n.unref) o.unref?.();
  return {
    [Symbol.dispose]: () => clearInterval(o)
  };
}
var Jt = 3;
function Xt() {
  let e = v("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function eRs(e) {
  let r = Math.max(pm(), dne() ?? 0);
  return !Fse() && Date.now() - r > e;
}
function xAr(e, r, n = {}) {
  let o = 0,
    u = null,
    p = null,
    h = Be(P, r, n);
  function y() {
    if (u?.(), u = null, p !== null) clearTimeout(p), p = null;
  }
  function S() {
    o = 0, y(), e();
  }
  function P() {
    let C = Xt();
    if (!(C > 0 && eRs(C)) || o >= Jt) {
      S();
      return;
    }
    o++, u ??= lB(() => {
      p ??= setTimeout(() => {
        h[Symbol.dispose](), h = Be(P, r, n), S();
      }, 0);
    });
  }
  return {
    [Symbol.dispose]: () => {
      h[Symbol.dispose](), y();
    }
  };
}
var Qt = [["text/html", "html"], ["application/json", "json"], ["text/json", "json"], ["text/", "text"]];
function Ge(e) {
  let r = e.toLowerCase();
  return Qt.find(([n]) => r.includes(n))?.[1] ?? "other";
}
function OQe(e) {
  if (!e || typeof e !== "object") return !1;
  return Yz(e["request-id"]);
}
function IQe(e) {
  if (!e || typeof e !== "object") return {};
  let r = e;
  return {
    requestIdPresent: OQe(r),
    responseContentType: Ge(String(r["content-type"] ?? ""))
  };
}
function x$n(e) {
  let r = e?.response;
  if (!r || typeof r !== "object") return {};
  return IQe(r.headers);
}
function MQe(e) {
  let r = e?.response,
    n = r?.data?.error;
  if (!n || typeof n !== "object") return {};
  let o = typeof n.type === "string" ? n.type : void 0,
    u = n.details?.error_code,
    p = typeof u === "string" ? u : typeof n.error_code === "string" ? n.error_code : typeof n.code === "string" ? n.code : void 0,
    h = typeof n.message === "string" ? n.message : void 0,
    serverAuthDenial = p === void 0 && h !== void 0 && (o === "authentication_error" || o === "permission_error") ? Zt(h) : void 0;
  return {
    serverErrorType: o === void 0 ? void 0 : yqi.includes(o) ? o : "other",
    serverErrorCode: p === void 0 ? void 0 : IAr.includes(p) ? p : "other",
    ...(serverAuthDenial !== void 0 && {
      serverAuthDenial: serverAuthDenial
    }),
    ...(OQe(r?.headers) && {
      serverErrorStamped: !0
    })
  };
}
function TNe(e) {
  return e.serverErrorStamped === !0 && e.serverErrorType !== "other" ? e.serverErrorType : void 0;
}
function Zt(e) {
  if (e.startsWith("Organization access has been revoked")) return "org_access_revoked";
  if (e.startsWith("Workspace access has been revoked")) return "workspace_revoked";
  if (/^OAuth (?:access )?token has been revoked\b/.test(e)) return "token_revoked";
  if (/^OAuth (?:access )?token has expired\b/.test(e)) return "token_expired";
  if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token")) return "token_invalid";
  if (e.startsWith("OAuth token application has been deactivated")) return "application_deactivated";
  if (e.startsWith("Account is no longer a member of the organization")) return "account_not_member";
  if (e.startsWith("Token lacks associated organization")) return "token_no_organization";
  if (e.startsWith("Token lacks associated account")) return "token_no_account";
  if (e.startsWith("Credential is invalid")) return "credential_invalid";
  return "other";
}
var ei = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function YI(e) {
  if (e instanceof Error) return ei.test(e.name) ? e.name : "Error";
  return e === null ? "null" : typeof e;
}
class Ct {
  settings = void 0;
  policy = void 0;
  settingsBarrier = void 0;
  policyBarrier = void 0;
  isDefaultCommand = void 0;
  openStartupBlocks = 0;
  policyGate = void 0;
  settingsReader = void 0;
  orgGateShadow = void 0;
  orgGateShadowSettle = void 0;
  orgGateShadowLogged = !1;
  unregisterOrgGateShadowExitFlush = void 0;
  logged = !1;
  unregisterExitFlush = void 0;
}
var ti = new W(() => new Ct());
function Ke(e = performance.now()) {
  return Qp() ? void 0 : Math.round(e);
}
function gt(e, r) {
  return e === void 0 || r === void 0 ? void 0 : Math.max(e, r);
}
function Z(e) {
  try {
    let r = Po(ti);
    if (r.logged) return;
    r.unregisterExitFlush ??= vt(() => Z(n => $e(n, "exit"))), e(r);
  } catch (error) {
    a(F(error));
  }
}
function XKi(e) {
  Z(r => {
    r.isDefaultCommand ??= e;
  });
}
function Ue(e) {
  Z(r => {
    r.policyGate ??= e;
  });
}
function JKi(e) {
  Z(r => {
    r.settingsReader ??= e;
  });
}
function QKi(e, r) {
  Z(n => {
    n.orgGateShadow ??= e, n.orgGateShadowSettle ??= r;
  });
}
var We = new Set(["ineligible", "superseded"]);
function Nse(e, r) {
  Z(n => {
    let o = n[e];
    if (o !== void 0 && !We.has(o.source)) return;
    n[e] = {
      ...r,
      settledMs: Ke()
    }, Ne(n);
  });
}
function agt(e, r, {
  since: since,
  supersede = !1
} = {}) {
  Z(u => {
    St(u, e, r, since, supersede), Ne(u);
  });
}
function G_o(e, {
  supersede: supersede_2 = !1
} = {}) {
  let n = performance.now(),
    o = !1;
  return Z(u => {
    u.openStartupBlocks++, o = !0;
  }), u => Z(p => {
    if (!o) return;
    o = !1, p.openStartupBlocks--, St(p, e, u, n, supersede_2), Ne(p);
  });
}
function St(e, r, n, o, u) {
  let p = r === "settings" ? "settingsBarrier" : "policyBarrier";
  if (e[p] !== void 0 && !u) return;
  let h = performance.now();
  e[p] = {
    result: typeof n === "function" ? n() : n,
    waitMs: o === void 0 ? 0 : Math.round(h - o),
    crossedMs: Ke(h)
  };
}
function P$n() {
  let e = Promise.resolve();
  return Z(r => {
    let n = me(r.policyGate);
    e = pi(Et, kt(r, "exit", n)).catch(o => {
      a(F(o));
    }), Pt(r, n, "exit");
  }), e;
}
function ZKi() {
  Z(e => $e(e, "first_prompt"));
}
function Ne(e) {
  if (e.settings && e.policy && e.settingsBarrier && e.policyBarrier && !We.has(e.settings.source) && !We.has(e.policy.source) && e.openStartupBlocks === 0) $e(e, "both_resolved");
}
var Et = "tengu_managed_config_ready",
  ii = "tengu_org_config_gate_shadow";
function $e(e, r) {
  let n = me(e.policyGate);
  l(Et, kt(e, r, n)), Pt(e, n, r);
}
function Pt(e, r, n) {
  if (e.orgGateShadow === void 0 || e.orgGateShadowLogged) return;
  if (n !== "exit" && e.orgGateShadowSettle !== void 0) {
    if (e.unregisterOrgGateShadowExitFlush !== void 0) return;
    e.unregisterOrgGateShadowExitFlush = vt(async () => He(e, me(e.policyGate), "exit")), e.orgGateShadowSettle().catch(() => {}).then(() => He(e, me(e.policyGate), "settled"));
    return;
  }
  He(e, r, n);
}
function He(e, policyGateFields, n) {
  if (e.orgGateShadow === void 0 || e.orgGateShadowLogged) return;
  e.orgGateShadowLogged = !0, e.unregisterOrgGateShadowExitFlush?.();
  try {
    l(ii, {
      ...e.orgGateShadow({
        settings: e.settings,
        policy: e.policy,
        policyGateFields: policyGateFields
      }),
      shadow_trigger: f(n)
    });
  } catch (error) {
    a(new R(`org-config gate: the shadow verdict readers threw (${YI(error)})`, "org-config gate: the shadow verdict readers threw"));
  }
}
function kt(e, r, n) {
  e.logged = !0, e.unregisterExitFlush?.();
  let {
    settings: settings,
    policy: policy,
    settingsBarrier: settingsBarrier,
    policyBarrier: policyBarrier
  } = e;
  return {
    trigger: f(r),
    emitted_ms: Ke(),
    is_default_command: e.isDefaultCommand,
    settled_ms: gt(settings?.settledMs, policy?.settledMs),
    barrier_crossed_ms: gt(settingsBarrier?.crossedMs, policyBarrier?.crossedMs),
    ...yt("settings", settings),
    ..._t("settings", settingsBarrier),
    ...me(e.settingsReader),
    ...yt("policy", policy),
    ..._t("policy", policyBarrier),
    ...n
  };
}
function me(e) {
  if (e === void 0) return {};
  try {
    return e();
  } catch (error) {
    return a(new R(`org-config gate: a registered gate-field reader threw (${YI(error)})`, "org-config gate: a registered gate-field reader threw")), {};
  }
}
function yt(e, r) {
  return {
    [`${e}_source`]: r ? f(r.source) : f("pending"),
    [`${e}_had_cache`]: r?.hadCache,
    [`${e}_awaited`]: r?.awaited,
    [`${e}_fetch_ms`]: r?.fetchMs,
    [`${e}_settled_ms`]: r?.settledMs
  };
}
function _t(e, r) {
  return {
    [`${e}_barrier`]: r ? f(r.result) : f("not_reached"),
    [`${e}_barrier_wait_ms`]: r?.waitMs
  };
}
function O$n(e) {
  let abortController = new AbortController();
  return {
    attempt: e(abortController.signal),
    abort: () => abortController.abort()
  };
}
function V_o({
  first: first,
  send: send,
  isAnswer: isAnswer,
  delayMs = 3000,
  stillWanted = () => !0,
  retryFollows = !0
}) {
  return new Promise((h, y) => {
    let S = !1,
      P,
      C = 1,
      V,
      T,
      w = E => {
        if (S = !0, clearTimeout(G), first.abort(), P?.abort(), E.ok) h({
          result: E.value,
          hedged: P !== void 0
        });else y(E.error);
      },
      A = E => {
        E.then(value => M({
          ok: !0,
          value: value
        }), error_2 => M({
          ok: !1,
          error: error_2
        }));
      },
      M = E => {
        if (S) return;
        C--;
        let I = C > 0;
        if (E.ok && isAnswer(E.value, I)) {
          w(T && !isAnswer(E.value, !0) ? T : E);
          return;
        }
        if (I) {
          if (E.ok && isAnswer(E.value, !1)) V ??= {
            value: E.value
          };else if (E.ok && retryFollows) T ??= E;
          return;
        }
        w(V && !(E.ok && retryFollows) ? {
          ok: !0,
          value: V.value
        } : E);
      },
      G = setTimeout(() => {
        if (S || !stillWanted()) return;
        C++, P = O$n(send), A(P.attempt);
      }, delayMs);
    A(first.attempt);
  });
}
class PAr {
  entry = null;
  set(key, r, n = () => !0) {
    this.clear();
    let inFlight = O$n(r),
      u = {
        key: key,
        inFlight: inFlight,
        sentAtMs: Date.now(),
        failed: !1
      };
    inFlight.attempt.then(p => {
      u.failed = !n(p);
    }, () => {
      u.failed = !0;
    }), this.entry = u;
  }
  get pending() {
    return this.entry !== null;
  }
  take(e) {
    let entry = this.entry;
    if (this.entry = null, entry === null) return;
    let n = Math.abs(Date.now() - entry.sentAtMs) <= 60000;
    if (!entry.failed && n && e(entry.key)) return entry.inFlight;
    entry.inFlight.abort();
    return;
  }
  clear() {
    this.entry?.inFlight.abort(), this.entry = null;
  }
}
function K_o({
  kind: kind,
  answer: answer,
  account: account
}) {
  if (answer === void 0) return "no_answer";
  try {
    let {
      result: result
    } = mHe({
      jws: answer.jws,
      kind: kind,
      orgUuid: account?.organizationUuid || void 0,
      accountUuid: account?.accountUuid || void 0,
      workspaceUuid: account?.workspaceUuid || void 0,
      unanchoredClaims: "accept",
      bodySha: answer.bodySha(),
      nowMs: Date.now(),
      roots: Epe()
    });
    return result === "valid" || result === "unsigned" ? result : "invalid";
  } catch {
    return "invalid";
  }
}
async function wt({
  kind: kind_2,
  cachePath: cachePath,
  bodySha: bodySha,
  orgUuid: orgUuid,
  accountUuid: accountUuid,
  workspaceUuid: workspaceUuid,
  readOrgPin: readOrgPin,
  onJudged: onJudged
}) {
  try {
    let S = await AQi(cachePath),
      nowMs = Date.now(),
      C = performance.now(),
      V = {
        jws: S?.jws,
        kind: kind_2,
        orgUuid: orgUuid,
        accountUuid: accountUuid,
        workspaceUuid: workspaceUuid,
        bodySha: bodySha,
        nowMs: nowMs,
        roots: Epe()
      },
      T = mHe({
        ...V,
        unanchoredClaims: "refuse"
      }),
      verification = T.result === "aud_mismatch" && orgUuid === void 0 || T.result === "sub_mismatch" && accountUuid === void 0 ? mHe({
        ...V,
        unanchoredClaims: "accept"
      }) : T,
      verify_micros = Math.round((performance.now() - C) * 1000),
      M = ri({
        held: {
          orgUuid: orgUuid,
          accountUuid: accountUuid,
          workspaceUuid: workspaceUuid
        },
        readOrgPin: readOrgPin,
        verification: verification
      });
    try {
      onJudged(M);
    } catch (error) {
      t(`signed-cache: telling the loader failed: ${d(error)}`, {
        level: "error"
      });
    }
    l("tengu_signed_cache_shadow", {
      cache: f(kind_2),
      result: f(T.result),
      age_s: T.ageSeconds,
      cert_hours_left: T.certHoursLeft,
      verify_micros: verify_micros,
      has_org_uuid: orgUuid !== void 0,
      has_account_uuid: accountUuid !== void 0,
      has_workspace_uuid: workspaceUuid !== void 0,
      ws_unanchored: T.wsUnanchored === !0,
      absence: T.absence === !0,
      states_lifetime: T.statesLifetime === !0,
      stored_copy: f(IBt(M))
    });
  } catch (error) {
    t(`Signed cache: shadow check failed (${kind_2}) - ${d(error)}`);
  }
}
function ri({
  held: held,
  readOrgPin: readOrgPin_2,
  verification: verification_2
}) {
  try {
    return RFs({
      verification: verification_2,
      held: held,
      pinnedOrgs: readOrgPin_2()
    });
  } catch (error) {
    return t(`signed-cache: the organization pin could not be read: ${d(error)}`, {
      level: "error"
    }), {
      trusted: !1,
      reason: "org_pin_unknown"
    };
  }
}
function q_o({
  kind: kind_3,
  cachePath: cachePath_2,
  bodySha: bodySha_2,
  readStoredAccount: readStoredAccount,
  readOrgPin: readOrgPin_3,
  onJudged: onJudged_2
}) {
  try {
    let h = readStoredAccount();
    wt({
      kind: kind_3,
      cachePath: cachePath_2,
      bodySha: bodySha_2,
      orgUuid: h?.organizationUuid || void 0,
      accountUuid: h?.accountUuid || void 0,
      workspaceUuid: h?.workspaceUuid || void 0,
      readOrgPin: readOrgPin_3,
      onJudged: onJudged_2
    }).catch(() => {});
  } catch {}
}
function Y_o({
  kind: kind_4,
  jws: jws,
  trustedPrincipal: trustedPrincipal,
  gate: gate
}) {
  try {
    if (jws === void 0) return;
    let {
      result: result_2
    } = mHe({
      jws: jws,
      kind: kind_4,
      orgUuid: trustedPrincipal.orgUuid,
      accountUuid: trustedPrincipal.accountUuid,
      workspaceUuid: trustedPrincipal.workspaceUuid,
      unanchoredClaims: "refuse",
      bodySha: bodySha_3,
      nowMs: Date.now(),
      roots: Epe()
    });
    if (result_2 !== "aud_mismatch" && result_2 !== "sub_mismatch") return;
    l("tengu_signed_cache_principal_change", {
      cache: f(kind_4),
      differs: f(result_2 === "aud_mismatch" ? "aud" : "sub"),
      stored_copy_gate: f(gate)
    });
  } catch (error) {
    t(`signed-cache: live principal check failed: ${d(error)}`);
  }
}
var ni = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache"
};
function X_o(e) {
  return `${e}${YFe}`;
}
async function OAr(e) {
  let r = await Wt.get(e.endpoint, {
      headers: {
        "User-Agent": ui(),
        ...ni,
        ...(e.ifNoneMatch !== void 0 && {
          "If-None-Match": `"${e.ifNoneMatch}"`
        }),
        ...e.authHeaders
      },
      timeout: e.timeoutMs,
      maxRedirects: 0,
      adapter: "http",
      validateStatus: e.acceptAny2xx ? h => h >= 200 && h < 300 || h === 304 : h => h === 200 || h === 304,
      ...(e.socketPath !== void 0 && {
        socketPath: e.socketPath
      }),
      ...(e.signal !== void 0 && {
        signal: e.signal
      })
    }).catch(h => {
      if (Wt.isAxiosError(h) && h.code === "ECONNABORTED" && h.request?.res) h.code = "ERR_BAD_RESPONSE";
      throw h;
    }),
    n = r.headers ?? {},
    signature = Wan(n),
    u = n[Pon],
    tunnelCredentialEpoch = Wwo(typeof u === "string" ? u : void 0);
  if (r.status === 304) return {
    kind: "not_modified",
    signature: signature,
    requestIdPresent: OQe(n),
    tunnelCredentialEpoch: tunnelCredentialEpoch
  };
  return {
    kind: "ok",
    data: r.data,
    signature: signature,
    contentType: String(n["content-type"] ?? "").toLowerCase(),
    requestIdPresent: OQe(n),
    tunnelCredentialEpoch: tunnelCredentialEpoch
  };
}
function At(e) {
  if (!Wt.isAxiosError(e)) return;
  let r = e.response?.headers?.[Pon];
  return Wwo(typeof r === "string" ? r : void 0);
}
var oi = new Set(gqi);
function si(e) {
  return oi.has(e);
}
var ai = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "SELF_SIGNED_CERT_IN_CHAIN", "DEPTH_ZERO_SELF_SIGNED_CERT", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID", "CERT_UNTRUSTED", "CERT_REJECTED", "CERT_SIGNATURE_FAILURE", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  di = new Set(["ECONNABORTED", "ERR_CANCELED"]);
function Lt(e) {
  if (e === void 0) return;
  if (si(e)) return e;
  if (ai.has(e)) return "CERT_ERROR";
  if (di.has(e)) return "ABORTED";
  return;
}
function WFt(e) {
  let r = e !== null && typeof e === "object" && "cause" in e ? e.cause : void 0;
  return Lt(k(e)) ?? Lt(k(r)) ?? "OTHER";
}
var li = new W(() => De());
function bt() {
  return li.of(H().host);
}
function J_o() {
  bt().emit();
}
function Tt(e) {
  return bt().subscribe(e);
}
var stillWanted_2 = () => i.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH === !0;
function nRs(e) {
  stillWanted_2 = e;
}
var timeoutMs = 1e4,
  swa = timeoutMs + 2000,
  xt = 5,
  mi = 3600000,
  Ot = [15000, 15000, 30000, 60000, 180000, 600000],
  Ft = 0.2,
  gi = 60000;
function Je() {
  return v("tengu_shimmying_stardust", !1);
}
var eqi = 60000;
function yi(e) {
  return e === "load" ? "other" : e;
}
function Mt(e) {
  return e === "accelerated_retry" || e === "api_success_trigger" || e === "api_refusal_trigger";
}
var _i = 30000,
  DQe = 5000,
  Uca = 86400000;
function Bca(e, r) {
  let n = e || void 0;
  if (!lJ()) return n;
  return f1n(n, r ?? (FAr() ? vi() : be()));
}
function be() {
  if (FAr()) return;
  let e = MRs();
  if (e !== null) {
    let r = Date.now() - e;
    return r >= 0 ? r : void 0;
  }
  try {
    let r = Date.now() - Math.trunc(ci(XI()).mtimeMs);
    return r >= 0 ? r : void 0;
  } catch {
    return;
  }
}
function vi() {
  let e = kRs();
  if (e === null) return;
  let r = Date.now() - e;
  return r >= 0 ? r : void 0;
}
var je = Date.now();
function It(e) {
  let r = mU();
  if (!r) return e;
  ERs(e.compliance_taints);
  let compliance_taints = L([...r.compliance_taints, ...e.compliance_taints.filter(item => !l7i(item))]).slice(0, VFt);
  if (compliance_taints.length === r.compliance_taints.length) return r;
  return {
    ...r,
    compliance_taints: compliance_taints
  };
}
function Bt() {
  return X_o(zF() ? "http://localhost" : nn().BASE_API_URL);
}
function it() {
  return Bt();
}
function ge() {
  if (zF()) return "local machine (via claude ssh tunnel)";
  try {
    return new URL(it()).host;
  } catch {
    return "unknown host";
  }
}
function ne(e) {
  return Jz(pgt(e));
}
function S2e() {
  return By() && prn() === null;
}
function Ci() {
  if (zF()) return {
    authType: i.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key",
    apiKeyFromHelper: !1
  };
  let e = null,
    r = "none";
  try {
    let u = Vx({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    e = u.key, r = u.source;
  } catch {}
  let apiKeyFromHelper = r === "apiKeyHelper",
    o = Boolean(e) || apiKeyFromHelper;
  if (!o && Sc()) return {
    authType: "wif",
    apiKeyFromHelper: !1
  };
  if (Rt() && Ln()?.accessToken) return {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
  return o ? {
    authType: "api_key",
    apiKeyFromHelper: apiKeyFromHelper
  } : {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
}
function Si(e, r) {
  if (zF()) return "proxy";
  switch (e.authType) {
    case "api_key":
      return e.apiKeyFromHelper ? "helper_key" : "static_key";
    case "oauth":
      return r.sentStoredLogin === void 0 ? void 0 : r.sentStoredLogin ? "stored_login" : "injected_token";
    case "wif":
      return;
  }
}
function Dt() {
  if (zF()) return i.CLAUDE_CODE_OAUTH_TOKEN ? "CLAUDE_CODE_OAUTH_TOKEN" : "none";
  return La().source;
}
function Ei() {
  if (zF()) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let e,
    r = !1;
  try {
    e = cm(), r = e !== void 0 && ey(it());
  } catch {
    return {
      proxy_in_use: !1,
      proxy_is_loopback: !1
    };
  }
  if (e === void 0 || r) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let n = b5(e);
  return {
    proxy_in_use: !0,
    proxy_is_loopback: n !== void 0 && cS(n.hostname)
  };
}
async function Pi(e, r, n, o, u, p, h, y = xt, {
  hedge = !1,
  prefetched: prefetched
} = {}) {
  let C = null,
    V = (w, A = !1) => Gt(e, r, n, o, h, w, A),
    T = !1;
  for (let w = 1; w <= y + 1; w++) {
    let first_2 = prefetched ?? O$n(V);
    if (prefetched = void 0, hedge && w === 1) {
      let G = await V_o({
        first: first_2,
        send: E => V(E, !0),
        isAnswer: (E, I) => E.success || E.skipRetry === !0 && !(I && E.errorCode === "auth_failed" && E.httpStatus === 401),
        stillWanted: stillWanted_2,
        retryFollows: y > 0
      });
      C = G.result, T ||= G.hedged;
    } else C = await first_2.attempt;
    if (C.attempts = w, T) C.hedged = !0;
    if (C.success || C.skipRetry || w > y) return C;
    p(C);
    let M = AU(w);
    if (t(`Policy limits: Retry ${w}/${y} after ${M}ms`), await J(M, u), u?.aborted) return C;
  }
  return C;
}
async function Gt(etag, r, credentials, o, oauthRefreshLatch, signal, h = !1) {
  let tokenRefreshOutcome,
    S,
    sentStoredLogin = !1,
    C = 0,
    V = uVe(oauthRefreshLatch.recoveries),
    socketPath = zF(),
    principalKeyAtWire = null,
    askedKeyAtWire = null,
    principalMovedAtWire = !1,
    sentEnvBearerDigest = null,
    stampAtWire;
  try {
    let I = it(),
      Y = {},
      O = async () => {
        await cbo(o, credentials);
        let N = Ze(),
          j = await gV(jan() ? {} : {
            envBearerFallbackFor: I
          }),
          te = Tg();
        if (sentEnvBearerDigest = te !== void 0 && j.headers.Authorization === `Bearer ${te}` ? Hse(te) : null, j.error) return principalMovedAtWire = !0, principalKeyAtWire = null, askedKeyAtWire = null, j;
        ARs();
        let le = $ee();
        stampAtWire = GAr();
        let s = le === null ? null : oe(le);
        return principalMovedAtWire = N !== s, principalKeyAtWire = principalMovedAtWire ? null : s, askedKeyAtWire = principalKeyAtWire !== null && ye(le) ? Oe(le) : sentEnvBearerDigest !== null && md() ? Vt(sentEnvBearerDigest) : null, j;
      };
    if (!socketPath) {
      tokenRefreshOutcome = await qbe({
        credentials: credentials
      });
      let N = await O();
      if (N.error) return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: N.reasonCode,
        tokenRefreshOutcome: tokenRefreshOutcome,
        skipRetry: !csn(tokenRefreshOutcome, void 0)
      };
      Y = N.headers;
      let j = Ln();
      sentStoredLogin = Boolean(j?.accessToken && j.refreshToken && Y.Authorization === `Bearer ${j.accessToken}`);
    }
    let ifNoneMatch = Bca(etag, r),
      ae = async () => {
        if (C++, C > 1) V = uVe(oauthRefreshLatch.recoveries);
        let authHeaders = C === 1 || socketPath ? Y : (await O()).headers;
        return OAr({
          endpoint: I,
          authHeaders: authHeaders,
          ifNoneMatch: ifNoneMatch,
          timeoutMs: timeoutMs,
          socketPath: socketPath,
          signal: signal
        });
      },
      D = socketPath ? await ae() : await vE(ae, {
        credentials: credentials,
        gateToSessionOAuthCredential: !0,
        oauthRefreshLatch: oauthRefreshLatch,
        signal: signal,
        onForcedRefreshOutcome: outcome => {
          S = {
            outcome: outcome
          }, oauthRefreshLatch.lastOutcome = outcome;
        }
      });
    if (D.kind === "not_modified") {
      if (!ifNoneMatch || !etag) return t("Policy limits: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorCode: "request_failed",
        httpStatus: 304,
        skipRetry: !0,
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        stampAtWire: stampAtWire,
        retriedAfter401: C > 1
      };
      if (!D.requestIdPresent && lJ()) return t("Policy limits: 304 without Anthropic's request id \u2014 an intermediary's answer, keeping cached restrictions"), {
        success: !1,
        error: "304 from an intermediary (no Anthropic request id)",
        errorCode: "request_failed",
        httpStatus: 304,
        skipRetry: !0,
        requestIdPresent: !1,
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        stampAtWire: stampAtWire,
        retriedAfter401: C > 1
      };
      if (C === 1 && !h) fVe(oauthRefreshLatch, V);
      return t("Policy limits: Using cached restrictions (304)"), {
        success: !0,
        response: null,
        etag: etag,
        signature: D.signature,
        requestIdPresent: !0,
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        stampAtWire: stampAtWire,
        retriedAfter401: C > 1,
        ...(sentEnvBearerDigest !== null && C === 1 && {
          sentEnvBearerDigest: sentEnvBearerDigest
        }),
        ...(D.tunnelCredentialEpoch !== void 0 && {
          tunnelCredentialEpoch: D.tunnelCredentialEpoch
        })
      };
    }
    let z = U$n(D.data);
    if (!z.success) {
      let parseErrorField = Ri(z.error.issues[0]?.path[0]),
        j = Ge(D.contentType);
      return t(`Policy limits: Invalid response format - field=${parseErrorField} ct=${j} - ${z.error.message}`), {
        success: !1,
        error: "Invalid policy limits format",
        errorCode: "parse_failed",
        parseErrorField: parseErrorField,
        parseErrorContentType: j,
        responseContentType: j,
        requestIdPresent: D.requestIdPresent,
        skipRetry: Je(),
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        stampAtWire: stampAtWire,
        retriedAfter401: C > 1
      };
    }
    fVe(oauthRefreshLatch, V);
    let q = Q_o(D.data);
    if (q > 0) return t(`Policy limits: Fetched with ${q} malformed compliance_taints element(s) dropped`), {
      success: !0,
      response: z.data,
      parseErrorField: "compliance_taints",
      lossyComplianceTaints: !0,
      signature: D.signature,
      principalKeyAtWire: principalKeyAtWire,
      askedKeyAtWire: askedKeyAtWire,
      principalMovedAtWire: principalMovedAtWire,
      stampAtWire: stampAtWire,
      retriedAfter401: C > 1,
      ...(sentEnvBearerDigest !== null && {
        sentEnvBearerDigest: sentEnvBearerDigest
      }),
      ...(D.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: D.tunnelCredentialEpoch
      })
    };
    return t("Policy limits: Fetched successfully"), {
      success: !0,
      response: z.data,
      signature: D.signature,
      principalKeyAtWire: principalKeyAtWire,
      askedKeyAtWire: askedKeyAtWire,
      principalMovedAtWire: principalMovedAtWire,
      stampAtWire: stampAtWire,
      retriedAfter401: C > 1,
      ...(sentEnvBearerDigest !== null && {
        sentEnvBearerDigest: sentEnvBearerDigest
      }),
      ...(D.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: D.tunnelCredentialEpoch
      })
    };
  } catch (I) {
    let {
        kind: kind_5,
        status: O,
        message: se
      } = Ai(I),
      ae = {
        ...MQe(I),
        ...x$n(I)
      },
      forcedRefreshOutcome = S !== void 0 ? S.outcome : sentStoredLogin && oauthRefreshLatch.attempted ? oauthRefreshLatch.lastOutcome : void 0,
      tunnelCredentialEpoch_2 = At(I),
      q = {
        ...(C > 0 && {
          principalKeyAtWire: principalKeyAtWire,
          askedKeyAtWire: askedKeyAtWire,
          principalMovedAtWire: principalMovedAtWire,
          stampAtWire: stampAtWire
        }),
        ...(tunnelCredentialEpoch_2 !== void 0 && {
          tunnelCredentialEpoch: tunnelCredentialEpoch_2
        })
      };
    switch (t(`Policy limits: fetch failed (${kind_5}${O ? ` ${O}` : ""}) from ${ge()} \u2014 ${se}`), kind_5) {
      case "auth":
        return {
          success: !1,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: O,
          tokenRefreshOutcome: tokenRefreshOutcome,
          skipRetry: !(O === 401 && sentStoredLogin && csn(tokenRefreshOutcome, S)),
          retriedAfter401: C > 1,
          forcedRefreshOutcome: forcedRefreshOutcome,
          sentStoredLogin: sentStoredLogin,
          ...ae,
          ...q
        };
      case "timeout":
        return {
          success: !1,
          error: "Policy limits request timeout",
          errorCode: "timeout",
          errno: WFt(I),
          retriedAfter401: C > 1,
          ...q
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorCode: "network_error",
          errno: WFt(I),
          retriedAfter401: C > 1,
          ...q
        };
      default:
        return {
          success: !1,
          error: se,
          errorCode: "request_failed",
          httpStatus: O,
          skipRetry: Ime(O),
          retriedAfter401: C > 1,
          forcedRefreshOutcome: forcedRefreshOutcome,
          ...(kind_5 === "http" && O === void 0 && {
            noResponse: !0,
            errno: WFt(I)
          }),
          ...ae,
          ...q
        };
    }
  }
}
async function rRs(e, {
  timeoutMs: timeoutMs_2 = timeoutMs
} = {}) {
  if (Te() !== "firstParty" || !Yc()) return null;
  try {
    let n = await OAr({
      endpoint: Bt(),
      authHeaders: {
        Authorization: `Bearer ${e}`,
        "anthropic-beta": Jc
      },
      timeoutMs: timeoutMs_2,
      acceptAny2xx: !0
    });
    if (n.kind === "not_modified") return t("Policy limits (bearer read): 304 to an unconditional request"), null;
    let o = U$n(n.data);
    if (!o.success) return t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`), null;
    return o.data;
  } catch (error) {
    let {
      kind: kind_6,
      status: status,
      message: message
    } = Ai(error);
    return t(`Policy limits (bearer read): fetch failed (${kind_6}${status ? ` ${status}` : ""}) \u2014 ${message}`), null;
  }
}
function Ri(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other";
}
function qe() {
  return {
    has_custom_base_url: yzn(),
    via_unix_socket: zF() !== void 0,
    has_unix_socket: i.ANTHROPIC_UNIX_SOCKET !== void 0,
    has_auth_token: Boolean(Tg()),
    has_api_key_helper: Boolean(uh()),
    api_key_prefix: f(zBn())
  };
}
var ki = ["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOENT", "ENOTDIR", "EISDIR", "EMFILE", "ENFILE", "EBUSY"];
function Kt(e) {
  return e !== void 0 && ki.includes(e) ? e : "other";
}
function Le(e) {
  return Kt(k(e));
}
function wi(e) {
  let r = "telemetryCode" in e ? e.telemetryCode : void 0;
  return Kt(r === "UnexpectedAbsent" || r === wWs ? "ENOENT" : r);
}
function Xe() {
  return Ve.state("policy-limits");
}
var Qe = 1048576;
async function oRs(e) {
  if (!X() || e === void 0 || !By() || ANe()) return;
  try {
    let r = obo(),
      n = await e.read([{
        key: Xe(),
        offset: 0,
        length: Qe + 1
      }]);
    if (!n.ok) {
      t(`Policy limits: prime read failed: ${n.error.code}; raw cache read stays`);
      return;
    }
    let o = n.value.items[0];
    if (!o.found) {
      gbo(e, null);
      return;
    }
    if (o.totalBytes > Qe) {
      t("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    let u = WAr(Buffer.from(o.value).toString("utf-8"));
    gbo(e, u === null ? null : dbo(u, sbo(r)));
  } catch (error) {
    t(`Policy limits: prime failed: ${d(error)}`);
  }
}
class sRs {
  storageV5;
  credentials;
  used = !1;
  constructor(e = {}) {
    this.storageV5 = e.storageV5, this.credentials = e.credentials;
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return this.storageV5 = e.storageV5, this.credentials = e.credentials, "adopted";
  }
  oauthRefreshLatch = {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
  prefetchSlot = new PAr();
  renewOAuthRefreshLatch() {
    this.oauthRefreshLatch = {
      attempted: !1,
      lastOutcome: this.oauthRefreshLatch.lastOutcome,
      recoveries: {
        begun: 0,
        running: 0
      }
    };
  }
  prefetch() {
    if (!By()) return;
    let principalKey = Ze();
    if (principalKey === null) return;
    let r = $Ar() ? null : prn(),
      n = r === FQe ? null : r,
      checksum = n ? ne(n) : void 0,
      {
        credentials: credentials_2,
        storageV5: storageV5,
        oauthRefreshLatch: oauthRefreshLatch_2
      } = this;
    this.prefetchSlot.set({
      checksum: checksum,
      generation: this.sessionGeneration,
      diskEpoch: ugt(),
      endpointHost: ge(),
      storageV5: storageV5,
      credentials: credentials_2,
      principalKey: principalKey
    }, y => Gt(checksum, lJ() ? be() : void 0, credentials_2, storageV5, oauthRefreshLatch_2, y), y => y.success || y.httpStatus === 404);
  }
  poller = null;
  cleanupRegistered = !1;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  abortController = new AbortController();
  firstPromptStateLogged = !1;
  cacheWriteFailureLogged = !1;
  sessionGeneration = 0;
  serverConfirmedGeneration = -1;
  verdictPrincipalIdentity = null;
  verdictKey = null;
  verdictPrincipalKind = null;
  askedKey = null;
  cyclesInFlight = 0;
  unsettledCycles = new Set();
  principalCheckOwed = !1;
  unclassifiedRecheckTimer = null;
  stopCredentialWatch = null;
  stopTunnelEpochWatch = null;
  stopRegimeRefusalWatch = null;
  stopKeyApprovalWatch = null;
  regimeRefusalRefetch = null;
  regimeRefusalRefetchStartedAtMs = void 0;
  tunnelEpochSeen = void 0;
  tunnelVerdictEpoch = void 0;
  tunnelRepolledForEpoch = void 0;
  principalCheckQueued = !1;
  signedCacheShadowChecked = !1;
  storedCopyShadow = void 0;
  storedCopyReported = !1;
  storedCopyAtStart = void 0;
  liveAnswer = void 0;
  livePrincipalChecked = !1;
  cacheClearEpoch = 0;
  verdictlessRetry = null;
  verdictlessRetryStep = 0;
  stopNetworkWatch = null;
  verdictlessEpisode = null;
  startupLoadState = "not_started";
  startupLoadClaimed = !1;
  startupLoadGeneration = 0;
  prefetchAdmittedGeneration = -1;
  startupLoadErrorCode;
  startupLoadCredentialState;
  startupLoadOutcomeReason;
  startupLoadHttpStatus;
  startupLoadServerErrorType;
  startupLoadServerErrorCode;
  startupLoadServerAuthDenial;
  startupLoadLastAttempt;
  latestLoad;
  startupAwaitResult = "not_awaited";
  gateSnapshotThisRun;
  coldStartFirstWaitAtMs = void 0;
  coldStartWaitedMs = 0;
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  get coldStartTimedOut() {
    return this.startupAwaitResult === "timed_out";
  }
  async awaitColdStartVerdict() {
    let e = performance.now();
    this.coldStartFirstWaitAtMs ??= e;
    let r = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + DQe - e)),
      n;
    try {
      await zt(this.waitForLoad(), r, "policy_limits_cold_await"), n = "completed";
    } catch {
      n = "timed_out";
    }
    if (this.coldStartWaitedMs += performance.now() - e, this.startupAwaitResult !== "timed_out") this.recordStartupAwaitResult(n);
    return n;
  }
  get coldStartVerdictWait() {
    return this.coldStartFirstWaitAtMs === void 0 ? null : {
      waitedMs: this.coldStartWaitedMs,
      firstAtMs: this.coldStartFirstWaitAtMs
    };
  }
  async admitPrefetched(e) {
    let r = refused => (t(`Policy limits: host prefetch not admitted (${refused})`), {
      admitted: !1,
      refused: refused
    });
    try {
      if (!By()) return r("ineligible");
      if (this.startupLoadClaimed || this.cyclesInFlight > 0 || this.serverConfirmedGeneration === this.sessionGeneration) return r("already_loading");
      if (this.prefetchAdmittedGeneration === this.sessionGeneration) return r("already_admitted");
      let n = $ee();
      if (n === null || n.kind !== "org" || n.unclassified === !0 || n.descriptor !== `org:${e.orgUuid.toLowerCase()}` || n.bearerDigest === void 0 || n.bearerDigest !== e.bearerDigest) return r("principal_mismatch");
      let o = ge();
      if (e.endpointHost !== o) return r("endpoint_mismatch");
      let u = Date.now() - e.fetchedAtMs;
      if (!Number.isFinite(e.fetchedAtMs) || u < -eqi || u > eqi) return r("stale");
      let p = U$n(e.data);
      if (!p.success) return r("unparseable");
      if (Q_o(e.data) > 0) return r("lossy_taints");
      let h = p.data,
        sessionGeneration = this.sessionGeneration,
        hadCache = mU() !== null;
      this.used = !0, this.prefetchAdmittedGeneration = sessionGeneration, Ue(() => this.managedConfigPolicyGateFields()), LAr(h), this.recordVerdictPrincipal(n);
      let P = ugt(),
        C = await this.saveCachedResponse(h, sessionGeneration, CFs(e.signature), n, "prior_evidence");
      if (this.sessionGeneration !== sessionGeneration) {
        if (Nse("policy", {
          source: "superseded",
          hadCache: hadCache,
          awaited: !1
        }), C !== "stale" && C !== "skipped") await this.deleteCacheFile(), H$n();
        return this.dropUnconfirmedSessionCache(), r("superseded");
      }
      if (Nse("policy", {
        source: "cache",
        hadCache: hadCache,
        awaited: !1
      }), C === "saved" && ugt() === P) HAr();
      return t(`Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(h.restrictions).length} restriction(s), ${h.compliance_taints?.length ?? 0} taint(s), persisted=${C})`), {
        admitted: !0
      };
    } catch (error) {
      return a(error), r("error");
    }
  }
  ensureLoadRequested(e) {
    let r = this.startupLoadClaimed && this.startupLoadState === "not_started" && !this.loadingCompletePromise && By();
    if (this.startupLoadClaimed && !r) return !1;
    return this.initializeLoadingPromise(), this.load(e).catch(n => a(n)), !0;
  }
  stop() {
    if (this.sessionGeneration++, this.latestLoad = void 0, this.gateSnapshotThisRun = void 0, this.prefetchSlot.clear(), this.verdictPrincipalIdentity = null, this.verdictPrincipalKind = null, this.verdictKey = null, this.askedKey = null, this.cyclesInFlight = 0, this.principalCheckOwed = !1, this.unclassifiedRecheckTimer !== null) clearTimeout(this.unclassifiedRecheckTimer), this.unclassifiedRecheckTimer = null;
    this.stopCredentialWatch?.(), this.stopCredentialWatch = null, this.stopTunnelEpochWatch?.(), this.stopTunnelEpochWatch = null, this.stopRegimeRefusalWatch?.(), this.stopRegimeRefusalWatch = null, this.stopKeyApprovalWatch?.(), this.stopKeyApprovalWatch = null, this.regimeRefusalRefetchStartedAtMs = void 0, this.renewOAuthRefreshLatch(), H$n(), hrn(), this.stopBackgroundPolling(), this.abortController.abort(), this.abortController = new AbortController(), F$n(null), abo(null), TRs(), this.releaseLoadingPromise();
  }
  releaseLoadingPromise() {
    if (this.loadingCompleteResolve?.(), this.loadingCompletePromise = null, this.loadingCompleteResolve = null, this.loadingTimeoutId !== null) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null;
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (By()) this.loadingCompletePromise = new Promise(e => {
      this.loadingCompleteResolve = e, this.loadingTimeoutId = setTimeout(r => {
        if (this.loadingCompleteResolve === r) t("Policy limits: Loading promise timed out, resolving anyway"), this.loadingCompleteResolve(), this.loadingCompleteResolve = null;
      }, _i, e);
    });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e, r, n, o, u) {
    if (this.sessionGeneration !== r) return t("Policy limits: skipped saving a fetch that outlived the account session"), "stale";
    if (ANe()) return "skipped";
    if (!MAr(o)) return t("Policy limits: no server-attributable principal for this credential; the verdict is used for the session and not persisted"), "skipped";
    let p;
    try {
      p = await this.writeStampForSave(e, o, u);
    } catch (error) {
      return this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Le(error)), "failed";
    }
    if (p === null) return "failed";
    let h = ne(e);
    if (X() && this.storageV5 !== void 0) {
      let y, S;
      try {
        let P = await this.storageV5.write(Xe(), _(pgt(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384
        });
        if (P.ok) return t(`Policy limits: Saved to ${XI()}`), await OBt(XI(), n), await this.sealSavedBody(p, h);
        y = Ht(P.error), S = wi(P.error);
      } catch (error) {
        y = d(error), S = Le(error);
      }
      return hrn(), this.recordCacheWriteFailure(y, S), "failed";
    }
    try {
      let y = XI();
      await fi(y, _(pgt(e), null, 2), {
        encoding: "utf-8",
        mode: 384
      }), t(`Policy limits: Saved to ${y}`), await OBt(y, n);
    } catch (error) {
      return hrn(), this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Le(error)), "failed";
    }
    return this.sealSavedBody(p, h);
  }
  async sealSavedBody(e, r) {
    try {
      await e.rewrite();
    } catch (error) {
      let o = await cgt(XI());
      if (fgt(o), o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== r) {
        if (o.kind !== "ok") {
          let u = await this.readDiskBody();
          if ((u.kind === "unreadable" || u.kind === "body" && u.checksum === r) && !(await this.removeBodyLeavingStamp())) {
            let h = await cgt(XI());
            if (fgt(h), h.kind !== "ok") await e.vouch();
          }
        }
        return this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", Le(error)), "failed";
      }
    }
    return hbo(r, e.evidence, e.confirmedAt), "saved";
  }
  async readDiskBody() {
    let e = !1,
      r;
    try {
      r = await dT(ie(), XI(), Qe, o => {
        e = o.isFile();
      });
    } catch (error) {
      return {
        kind: K(error) ? "none" : "unreadable"
      };
    }
    if (e) return {
      kind: "unreadable"
    };
    let n = r === null ? null : WAr(r);
    return n === null ? {
      kind: "none"
    } : {
      kind: "body",
      checksum: ne(n)
    };
  }
  async removeBodyLeavingStamp() {
    if (hrn(), await vzn(XI()), X() && this.storageV5 !== void 0) try {
      await this.storageV5.delete(Xe());
    } catch {}
    try {
      return await hi(XI()), !0;
    } catch (error) {
      return K(error);
    }
  }
  async removeUnstampedBody() {
    if (ANe()) return;
    let e = await cgt(XI());
    if (fgt(e), e.kind === "absent") await this.removeBodyLeavingStamp();
  }
  async removeSupersededLegacyBody(e, r) {
    if (!BRs(e)) return;
    let n = await cgt(XI());
    if (fgt(n), n.kind !== "absent") return;
    let o = await this.readDiskBody();
    if (o.kind !== "body" || o.checksum !== r) return;
    t("Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it"), await this.removeBodyLeavingStamp();
  }
  async writeStampForSave(e, principal, authority) {
    let o = XI(),
      u = await cgt(o);
    if (fgt(u), DAr(u)) return t(`Policy limits: the cache stamp could not be read just now (${u.code}); nothing persisted this cycle`), null;
    let p = bRs({
      principal: principal,
      bodySha: ne(e),
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: Z_o(u, jAr()),
      authority: authority
    });
    return await ebo(o, p), {
      identity: p.identity,
      evidence: N$n(p),
      confirmedAt: p.confirmed_at,
      rewrite: () => ebo(o, p),
      vouch: async () => {
        await tbo(o, p);
      }
    };
  }
  async restampConfirmedCache(e, bodySha_4, principal_2, o, authority_2, p) {
    if (this.sessionGeneration !== o || !MAr(principal_2) || bodySha_4 === void 0 || IRs() !== bodySha_4) return;
    let cacheClearEpoch = this.cacheClearEpoch,
      y = await cgt(XI());
    if (fgt(y), y.kind !== "absent" && !(y.kind === "ok" && y.stamp.sha === bodySha_4)) return;
    let S = bRs({
      principal: principal_2,
      bodySha: bodySha_4,
      confirmedAt: !lJ() ? Date.now() : y.kind === "ok" ? y.stamp.confirmed_at : p,
      bodyTaints: e.compliance_taints,
      previous: Z_o(y, jAr()),
      authority: authority_2
    });
    if (await tbo(XI(), S), this.cacheClearEpoch !== cacheClearEpoch) {
      await this.deleteCacheFile();
      return;
    }
    if (this.sessionGeneration !== o) return;
    hbo(bodySha_4, N$n(S), S.confirmed_at);
  }
  recordCacheWriteFailure(e, r) {
    if (t(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged) this.cacheWriteFailureLogged = !0, l("tengu_policy_limits_cache_write_failed", {
      errno: f(r)
    });
  }
  async fetchAndLoad(e, r, n = !1) {
    let sessionGeneration_2 = this.sessionGeneration;
    this.cyclesInFlight++;
    let u = this.runFetchCycle(e, r, n);
    this.unsettledCycles.add(u);
    try {
      return await u;
    } finally {
      this.unsettledCycles.delete(u), this.endCycle(sessionGeneration_2);
    }
  }
  async _settleCyclesForTesting() {
    while (this.unsettledCycles.size > 0) await Promise.allSettled([...this.unsettledCycles]);
  }
  endCycle(e) {
    if (this.sessionGeneration !== e) return;
    if (this.cyclesInFlight--, this.cyclesInFlight === 0 && this.principalCheckOwed) this.principalCheckOwed = !1, this.onCredentialMayHaveChanged();
  }
  async runFetchCycle(e, r, awaited) {
    this.used = !0;
    let o = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (o) this.startupLoadClaimed = !0, this.startupLoadGeneration = this.sessionGeneration;
    if (Ue(() => this.managedConfigPolicyGateFields()), !By()) return this.prefetchSlot.clear(), Nse("policy", {
      source: "ineligible",
      hadCache: !1,
      awaited: awaited
    }), null;
    if (o) this.startupLoadState = "in_flight";
    let u = $Ar() ? null : prn(),
      p = u === FQe ? null : u,
      h = u === null ? void 0 : xRs(),
      y = ugt(),
      cache_age_ms = be(),
      P = Date.now(),
      C = $ee(),
      V = C === null ? "" : sRe(C),
      T = !Mt(r);
    if (p && !mU()) urn(p);
    let w = mU();
    if (p && w !== null && this.verdictPrincipalIdentity === null && this.serverConfirmedGeneration !== this.sessionGeneration) if (ye(C) && BAr() === "match" && PRs() === sRe(C) && ne(w) === ne(p)) this.recordVerdictPrincipal(C);else this.ensureCredentialWatch();
    if (p) Nse("policy", {
      source: "cache",
      hadCache: !0,
      awaited: awaited
    });
    let bodySha_5 = p ? ne(p) : void 0,
      cacheClearEpoch_2 = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (this.signedCacheShadowChecked = !0, this.storedCopyAtStart = ANe() ? "not_read" : {
        enforced: vpe(),
        gateAnswer: pbo(),
        hadCopy: p !== null
      }, bodySha_5 !== void 0 && !ANe()) q_o({
        kind: "policy-limits",
        cachePath: XI(),
        bodySha: bodySha_5,
        readStoredAccount: readStoredAccount_2,
        readOrgPin: readOrgPin_4,
        onJudged: s => {
          this.storedCopyShadow = s;
        }
      });
    }
    let G = Ci(),
      authType = G.authType,
      I = Date.now(),
      Y = this.abortController.signal,
      sessionGeneration_3 = this.sessionGeneration,
      se = fbe(),
      ae = () => {
        let s = fbe();
        return s !== null && s.success && s !== se;
      },
      D = !1,
      z = !1,
      q = s => {
        if (D = !0, !s.success && ae()) return;
        this.recordFetchOutcome(sessionGeneration_3, cacheClearEpoch_2, s, V, T);
      },
      N = () => q({
        success: !1,
        errorCode: "request_failed",
        httpStatus: null,
        host: ge(),
        retrying: !1
      });
    if (e === "policy_limits_load" && this.prefetchSlot.pending) {
      let s = await Tm(this.credentials);
      if (s !== "store" || i.CLAUDE_CODE_OAUTH_TOKEN) iie();
      if (XBn(s)) await Syt(H().host, this.credentials);
      C = $ee();
    }
    let j = C === null ? null : oe(C),
      host = ge(),
      prefetched_2 = e === "policy_limits_load" ? this.prefetchSlot.take(s => s.checksum === bodySha_5 && s.generation === sessionGeneration_3 && s.diskEpoch === y && s.endpointHost === host && s.storageV5 === this.storageV5 && s.credentials === this.credentials && s.principalKey === j) : void 0;
    try {
      let s = await Pi(bodySha_5, cache_age_ms, this.credentials, this.storageV5, Y, b => {
        if (o && this.startupLoadState === "in_flight") this.startupLoadLastAttempt = {
          errorCode: b.errorCode ?? "request_failed",
          httpStatus: b.httpStatus ?? void 0,
          serverErrorType: TNe(b),
          serverErrorCode: Ye(b),
          serverAuthDenial: ze(b)
        };
        if (fbe()?.success) return;
        this.recordFetchOutcome(sessionGeneration_3, cacheClearEpoch_2, {
          success: !1,
          host: host,
          httpStatus: b.httpStatus ?? null,
          errorCode: b.errorCode ?? "request_failed",
          retrying: !0
        }, V, T);
      }, this.oauthRefreshLatch, Mt(r) ? 0 : xt, {
        hedge: awaited && stillWanted_2(),
        prefetched: prefetched_2
      });
      if (this.sessionGeneration !== sessionGeneration_3 || Y.aborted) {
        if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", this.startupLoadErrorCode = "session_changed", this.startupLoadCredentialState = void 0, this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0, this.startupLoadServerErrorCode = void 0, this.startupLoadServerAuthDenial = void 0, this.startupLoadLastAttempt = void 0;
        return Nse("policy", {
          source: "superseded",
          hadCache: p !== null,
          awaited: awaited
        }), t("Policy limits: Discarding a fetch that outlived the account session"), c(e, "cycle_aborted"), mU();
      }
      let ce = $ee(),
        ue = ce === null ? null : oe(ce),
        ve = s.principalKeyAtWire === void 0 ? ue : s.principalKeyAtWire,
        Fe = s.success && this.isStaleTunnelCredentialEpoch(s.tunnelCredentialEpoch);
      if (Fe) t("Policy limits: this answer came back under an older claude ssh credential epoch than one already seen; not installing it");
      let Q = s.principalMovedAtWire === !0 || ve !== ue;
      if (!Q && s.askedKeyAtWire !== void 0 && s.askedKeyAtWire !== null) this.askedKey = s.askedKeyAtWire;
      if (Q) t("Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed"), C = null;else if (j !== ue) t("Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as"), C = ce;
      if (ugt() !== y) t("Policy limits: the disk snapshot predates an account-boundary hold; not installable"), p = null;
      let Ce = s.success && s.response === null && !p,
        success = s.success && !Ce && !Fe;
      if (!success) this.observeTunnelCredentialEpoch(s.tunnelCredentialEpoch, s.success ? "a stale policy answer" : "a refused policy request", !1);
      let errorCode = Fe ? "stale_tunnel_credential" : Ce ? "spurious_304" : s.errorCode ?? "request_failed",
        errorCode_2 = success ? void 0 : errorCode,
        credentialOrigin = Si(G, s),
        injectedTokenRecovery = credentialOrigin === "injected_token" ? dsn() : void 0,
        ot = {
          errorCode: errorCode,
          httpStatus: s.httpStatus,
          serverErrorType: s.serverErrorType,
          serverErrorCode: s.serverErrorCode,
          serverAuthDenial: s.serverAuthDenial,
          tokenRefreshOutcome: s.tokenRefreshOutcome,
          forcedRefreshOutcome: s.forcedRefreshOutcome,
          authUnavailableReason: s.authUnavailableReason,
          authType: authType,
          credentialOrigin: credentialOrigin,
          injectedTokenRecovery: injectedTokenRecovery,
          noResponse: s.noResponse
        },
        credentialState_3 = p1n(ot),
        credentialState = success ? void 0 : credentialState_3,
        credentialState_2 = success || s.serverErrorStamped === !0 || !lJ() ? credentialState : p1n({
          ...ot,
          serverErrorType: void 0,
          serverErrorCode: void 0,
          serverAuthDenial: s.httpStatus === 401 ? s.serverAuthDenial : void 0
        }),
        at = vIr(success ? {
          succeeded: !0,
          responseKind: s.response === null ? "not_modified" : "body"
        } : {
          succeeded: !1,
          failure: s.authUnavailableReason !== void 0 ? "no_credentials" : errorCode === "timeout" ? "timeout" : errorCode === "network_error" || s.noResponse ? "network" : errorCode === "parse_failed" ? "parse" : s.httpStatus !== void 0 ? "http" : "other",
          httpStatus: s.httpStatus,
          serverErrorType: s.serverErrorType,
          serverErrorCode: s.serverErrorCode,
          serverAuthDenial: s.serverAuthDenial,
          credentialState: credentialState,
          tokenRefreshOutcome: s.tokenRefreshOutcome,
          forcedRefreshOutcome: s.forcedRefreshOutcome,
          errno: s.errno,
          responseContentType: s.responseContentType ?? s.parseErrorContentType,
          requestIdPresent: s.requestIdPresent
        }),
        Se = Date.now(),
        Nt = BAr(),
        enforced = vpe(),
        gateAnswer = pbo(),
        trustedPrincipal_2 = enforced ? h : ctt(this.storedCopyShadow),
        jt = zan({
          enforced: enforced,
          gateAnswer: gateAnswer,
          hadCopy: p !== null
        }, this.storedCopyShadow),
        lt = !this.storedCopyReported;
      if (this.storedCopyReported = !0, z = success, o) this.startupLoadState = success ? "succeeded" : "failed", this.startupLoadErrorCode = errorCode_2, this.startupLoadCredentialState = credentialState_2, this.startupLoadOutcomeReason = at, this.startupLoadHttpStatus = success ? void 0 : s.httpStatus ?? void 0, this.startupLoadServerErrorType = success ? void 0 : TNe(s), this.startupLoadServerErrorCode = success ? void 0 : Ye(s), this.startupLoadServerAuthDenial = success ? void 0 : ze(s), this.startupLoadLastAttempt = void 0;
      if (e === "policy_limits_load" && this.sessionGeneration === sessionGeneration_3) this.latestLoad = success ? {
        succeeded: !0
      } : {
        succeeded: !1,
        errorCode: errorCode_2,
        credentialState: credentialState_2,
        httpStatus: s.httpStatus ?? void 0,
        serverErrorType: TNe(s),
        serverErrorCode: Ye(s),
        serverAuthDenial: ze(s)
      };
      let Pe = {
        source: success ? "fetch" : "error",
        hadCache: p !== null,
        awaited: awaited,
        fetchMs: Se - I
      };
      if (!success) Nse("policy", Pe);
      let Re,
        verdictless_retry_scheduled = !1;
      if (!s.success && (!s.skipRetry || s.errorCode === "parse_failed") && r !== "api_refusal_trigger" && Je()) {
        Re = this.staleFallbackSource();
        let b = r !== "api_success_trigger";
        if (Re === null) {
          if (verdictless_retry_scheduled = this.armVerdictlessRetry(), b) this.armNetworkKick();
        } else if (!this.hasLiveVerdict() && b) this.armNetworkKick();
      }
      let pe = success ? s.response ?? p : null;
      if (this.liveAnswer = pe === null ? void 0 : {
        jws: s.signature,
        bodySha: () => ne(pe)
      }, success && s.signature !== void 0 && trustedPrincipal_2 !== void 0 && !this.livePrincipalChecked) this.livePrincipalChecked = !0, Y_o({
        kind: "policy-limits",
        jws: s.signature,
        trustedPrincipal: trustedPrincipal_2,
        gate: enforced ? "enforced" : "shadow"
      });
      if (l("tengu_policy_limits_fetch", {
        duration_ms: Se - I,
        ms_since_startup: Se - je,
        success: success,
        had_cache: p !== null,
        cache_stamp: f(Nt),
        stored_copy: lt ? f(jt) : void 0,
        stored_copy_gate: lt ? f(enforced ? "enforced" : "shadow") : void 0,
        cache_age_ms: cache_age_ms,
        attempts: s.attempts,
        prefetched: prefetched_2 !== void 0,
        hedged: s.hedged === !0,
        restrictions_denied_count: pe ? U(Object.values(pe.restrictions), b => !b.allowed) : void 0,
        compliance_taint_count: pe ? pe.compliance_taints?.length ?? 0 : void 0,
        is_load: e === "policy_limits_load",
        awaited: awaited,
        auth_type: f(authType),
        error_code: de(errorCode_2),
        token_source: f(Dt()),
        credential_road: f(A$n()),
        ...qe(),
        auth_unavailable_reason: de(s.authUnavailableReason),
        token_refresh_outcome: authType === "oauth" ? de(s.tokenRefreshOutcome) : void 0,
        forced_refresh_outcome: authType === "oauth" ? de(s.forcedRefreshOutcome) : void 0,
        retried_after_401: s.retriedAfter401 ?? !1,
        http_status: s.httpStatus,
        parse_error_field: de(s.parseErrorField),
        parse_error_content_type: de(s.parseErrorContentType),
        server_error_type: de(s.serverErrorType),
        server_error_code: de(s.serverErrorCode),
        server_auth_denial: de(s.serverAuthDenial),
        injected_token_recovery: de(success ? void 0 : injectedTokenRecovery),
        credential_state: de(credentialState),
        outcome_reason: f(at),
        response_kind: success ? f(s.response === null ? "not_modified" : "body") : void 0,
        request_id_present: s.requestIdPresent,
        response_content_type: de(s.responseContentType),
        fetch_trigger: f(r),
        verdictless_retry_scheduled: verdictless_retry_scheduled,
        error_errno: de(s.errno),
        ...Ei()
      }), !success) {
        q({
          success: !1,
          host: host,
          httpStatus: s.httpStatus ?? null,
          errorCode: errorCode,
          retrying: !1,
          credentialState: credentialState_3,
          ...(s.serverErrorCode !== void 0 && {
            serverErrorCode: s.serverErrorCode
          })
        });
        let b = Re !== void 0 ? Re : this.staleFallbackSource();
        if (b) {
          t(Ce ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache" : "Policy limits: Using stale cache after fetch failure");
          let fe = It(b);
          if (urn(fe), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle(errorCode, !0);
          return c(e, Ce ? "spurious_304" : "stale_cache_used", {
            credential_state: f(credentialState_3)
          }), fe;
        }
        if ((s.httpStatus === 404 || s.httpStatus === 304) && mU() === null && !NAr() && !v("tengu_rustling_orbit", !1)) return t(`Policy limits: ${s.httpStatus} with no cache, no restrictions for this session (not persisted)`), mrn(), vRs(), this.serverConfirmedGeneration = sessionGeneration_3, this.disposeVerdictlessRetryTimer(), this.disarmNetworkKick(), this.recordVerdictPrincipal(C), c(e, s.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
          credential_state: f(credentialState_3)
        }), FQe;
        return this.noteUnverifiedCycle(errorCode, !1), m(e, errorCode, {
          credential_state: f(credentialState_3)
        }), null;
      }
      let response = s.response;
      if (response === null || response === void 0) {
        if (!p) return N(), Nse("policy", {
          ...Pe,
          source: "error"
        }), m(e, "unexpected_error"), null;
        t("Policy limits: Cache still valid (304 Not Modified)");
        let b = p,
          compliance_taints_2 = p.compliance_taints,
          ut = this.serverConfirmedGeneration === sessionGeneration_3 ? mU()?.compliance_taints ?? [] : [],
          xe = Q_o(pgt(p)) > 0;
        if (xe && ut.some(item => !compliance_taints_2.includes(item))) b = {
          ...p,
          compliance_taints: L([...ut, ...compliance_taints_2]).slice(0, VFt)
        }, t("Policy limits: lossy cached compliance_taints \u2014 kept the session taint set");
        if (Q) mrn();else fbo(s.stampAtWire);
        if (Q || xe) LAr(b);else F$n(b);
        if (ibo(Q ? null : s.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(s.tunnelCredentialEpoch), this.serverConfirmedGeneration = sessionGeneration_3, this.onLiveVerdict(r), this.recordVerdictPrincipal(C), q({
          success: !0,
          host: host
        }), !ANe() && MAr(C)) try {
          if (await Z0r(XI(), s.signature, {
            keptVerifiable: yRo()
          }), !(await eLr(XI(), this.cacheClearEpoch !== cacheClearEpoch_2)) && !Q) await this.restampConfirmedCache(b, bodySha_5, C, sessionGeneration_3, xe ? "prior_evidence" : "confirmed", cache_age_ms === void 0 ? 0 : Math.floor(P - cache_age_ms));
        } catch {}
        return Nse("policy", Pe), g(e), b;
      }
      let ee = response;
      if (s.lossyComplianceTaints) {
        let b = [...(mU()?.compliance_taints ?? []), ...(p?.compliance_taints ?? [])];
        if (b.length > 0) ee = {
          ...ee,
          compliance_taints: L([...ee.compliance_taints, ...b]).slice(0, VFt)
        }, t("Policy limits: lossy compliance_taints \u2014 kept the known taint set");
      }
      if (Q) mrn();else fbo(s.stampAtWire);
      if (Q || s.lossyComplianceTaints) LAr(ee);else F$n(ee);
      wRs(Se), ibo(Q ? null : s.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(s.tunnelCredentialEpoch), this.serverConfirmedGeneration = sessionGeneration_3, this.onLiveVerdict(r), this.recordVerdictPrincipal(C), q({
        success: !0,
        host: host
      });
      let qt = ugt(),
        Ae = Q ? "stale" : await this.saveCachedResponse(ee, sessionGeneration_3, ee === response ? s.signature : void 0, C, s.lossyComplianceTaints ? "prior_evidence" : "confirmed");
      if (Nse("policy", Pe), Ae === "skipped" && !MAr(C) && !Q && !ANe() && p !== null && bodySha_5 !== void 0 && BAr() === "legacy" && bodySha_5 !== ne(ee)) await this.removeSupersededLegacyBody(p, bodySha_5);
      if (this.sessionGeneration !== sessionGeneration_3) {
        if (Ae !== "stale" && Ae !== "skipped") {
          let b = await this.deleteCacheFile();
          if (H$n(), !b) t("Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save");
        }
        if (this.dropUnconfirmedSessionCache(), o && this.startupLoadState === "succeeded") this.startupLoadState = "failed", this.startupLoadErrorCode = "session_changed", this.startupLoadCredentialState = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0, this.startupLoadServerErrorCode = void 0, this.startupLoadServerAuthDenial = void 0, this.startupLoadLastAttempt = void 0;
        return c(e, "cycle_aborted"), mU();
      }
      if (Ae === "saved" && ugt() === qt) HAr();
      if (t(Object.keys(ee.restrictions).length > 0 ? "Policy limits: Applied new restrictions successfully" : "Policy limits: No restrictions (cached empty)"), s.lossyComplianceTaints) c(e, "lossy_compliance_taints");else g(e);
      return ee;
    } catch {
      let s = this.sessionGeneration !== sessionGeneration_3,
        ce = z && !D;
      if (ce && e === "policy_limits_load" && !s) this.latestLoad = {
        succeeded: !1,
        errorCode: void 0,
        credentialState: void 0,
        httpStatus: void 0,
        serverErrorType: void 0,
        serverErrorCode: void 0,
        serverAuthDenial: void 0
      };
      if (o && (this.startupLoadState === "in_flight" || ce)) this.startupLoadState = "failed", this.startupLoadErrorCode = s ? "session_changed" : "unexpected_error", this.startupLoadCredentialState = void 0, this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0, this.startupLoadServerErrorCode = void 0, this.startupLoadServerAuthDenial = void 0, this.startupLoadLastAttempt = void 0;
      if (Nse("policy", {
        source: s ? "superseded" : "error",
        hadCache: p !== null,
        awaited: awaited
      }), s || Y.aborted) return c(e, "cycle_aborted"), mU();
      if (!D) N();
      let ue = this.staleFallbackSource();
      if (ue) {
        t("Policy limits: Using stale cache after error");
        let ve = It(ue);
        if (urn(ve), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle("unexpected_error", !0);
        return c(e, "stale_cache_used"), ve;
      }
      return this.noteUnverifiedCycle("unexpected_error", !1), m(e, "unexpected_error"), null;
    }
  }
  hasLiveVerdict() {
    let e = mU();
    return e !== null && e !== FQe && this.serverConfirmedGeneration === this.sessionGeneration;
  }
  armVerdictlessRetry() {
    if (this.verdictlessRetry !== null) return !0;
    let verdictlessRetryStep = this.verdictlessRetryStep,
      r = Ot[verdictlessRetryStep];
    if (r === void 0 || !By()) return !1;
    this.verdictlessRetryStep = verdictlessRetryStep + 1;
    let n = Math.round(r * (1 - Ft + 2 * Ft * Math.random())),
      sessionGeneration_4 = this.sessionGeneration;
    t(`Policy limits: no verdict \u2014 accelerated retry ${verdictlessRetryStep + 1}/${Ot.length} in ${Math.round(n / 1000)}s`);
    let u = xAr(() => {
      if (u[Symbol.dispose](), this.verdictlessRetry === u) this.verdictlessRetry = null;
      if (this.sessionGeneration !== sessionGeneration_4) return;
      if (mU() !== null) return;
      this.poll("accelerated_retry").catch(p => a(p));
    }, n, {
      unref: !0
    });
    return this.verdictlessRetry = u, !0;
  }
  disposeVerdictlessRetryTimer() {
    this.verdictlessRetry?.[Symbol.dispose](), this.verdictlessRetry = null;
  }
  armNetworkKick() {
    if (this.stopNetworkWatch !== null) return;
    let sessionGeneration_5 = this.sessionGeneration,
      r = Tt(() => {
        queueMicrotask(() => {
          if (this.stopNetworkWatch !== r) return;
          try {
            this.kickOnNetworkSuccess(sessionGeneration_5);
          } catch (error) {
            a(error);
          }
        });
      });
    this.stopNetworkWatch = r;
  }
  disarmNetworkKick() {
    this.stopNetworkWatch?.(), this.stopNetworkWatch = null;
  }
  kickOnNetworkSuccess(e) {
    if (this.sessionGeneration !== e) {
      this.disarmNetworkKick();
      return;
    }
    if (this.cyclesInFlight > 0) return;
    if (this.disarmNetworkKick(), !By() || this.hasLiveVerdict()) return;
    t("Policy limits: the API answered a request \u2014 re-fetching the org policy now"), this.poll("api_success_trigger").catch(r => a(r));
  }
  resetAcceleratedRecovery() {
    this.disposeVerdictlessRetryTimer(), this.verdictlessRetryStep = 0, this.disarmNetworkKick();
  }
  noteUnverifiedCycle(errorCode_3, staleServed) {
    if (this.verdictlessEpisode === null) this.verdictlessEpisode = {
      sinceMs: Date.now(),
      errorCode: errorCode_3,
      failedCycles: 1,
      staleServed: staleServed
    };else this.verdictlessEpisode.failedCycles++;
  }
  onLiveVerdict(e) {
    this.resetAcceleratedRecovery();
    let verdictlessEpisode = this.verdictlessEpisode;
    if (verdictlessEpisode === null) return;
    this.verdictlessEpisode = null;
    let n = Date.now(),
      o = yi(e),
      errorCode_4 = verdictlessEpisode.errorCode;
    l("tengu_policy_limits_verdict_recovered", {
      ms_since_startup: n - je,
      ms_verdictless: n - verdictlessEpisode.sinceMs,
      recovered_by: f(o),
      startup_error_code: f(errorCode_4),
      attempts_before_recovery: verdictlessEpisode.failedCycles,
      was_stale_served: verdictlessEpisode.staleServed,
      fast_retry_enabled: Je()
    });
  }
  gateSnapshot() {
    return this.policyGateSnapshot();
  }
  policyGateSnapshot() {
    if (this.gateSnapshotThisRun !== void 0) return this.gateSnapshotThisRun;
    let ineligibleReason = Sz(),
      eligible = ineligibleReason === void 0,
      eligibleIfBaseUrlGateRemoved = ineligibleReason === "custom_base_url" ? Sz({
        skipBaseUrlCheck: !0
      }) === void 0 : eligible,
      hasCache = Nv() !== null,
      cacheAgeMs = eligible ? be() : void 0,
      liveVerdict = this.hasLiveVerdict(),
      h = {
        ineligibleReason: ineligibleReason,
        eligible: eligible,
        eligibleIfBaseUrlGateRemoved: eligibleIfBaseUrlGateRemoved,
        hasCache: hasCache,
        cacheAgeMs: cacheAgeMs,
        liveVerdict: liveVerdict,
        wouldFailClosed: eligible && !liveVerdict && (!hasCache || zF() === void 0 && (cacheAgeMs ?? 1 / 0) > Uca),
        loadState: this.startupLoadState,
        loadFromEarlierGeneration: this.startupLoadClaimed && this.startupLoadGeneration !== this.sessionGeneration,
        loadErrorCode: this.startupLoadErrorCode,
        loadCredentialState: this.startupLoadCredentialState,
        loadOutcomeReason: eligible ? this.startupLoadOutcomeReason : EIr(YBn(ineligibleReason)),
        loadHttpStatus: this.startupLoadHttpStatus,
        loadLastAttempt: this.startupLoadLastAttempt,
        latestLoad: this.latestLoad,
        loadServerErrorType: this.startupLoadServerErrorType,
        loadServerErrorCode: this.startupLoadServerErrorCode,
        loadServerAuthDenial: this.startupLoadServerAuthDenial,
        awaitResult: this.startupAwaitResult
      };
    return this.gateSnapshotThisRun = h, queueMicrotask(() => {
      this.gateSnapshotThisRun = void 0;
    }), h;
  }
  signatureFacts() {
    let storedCopyAtStart = this.storedCopyAtStart;
    return {
      storedCopy: storedCopyAtStart === void 0 || storedCopyAtStart === "not_read" ? "not_read" : zan(storedCopyAtStart, this.storedCopyShadow),
      liveSigned: K_o({
        kind: "policy-limits",
        answer: this.liveAnswer,
        account: readStoredAccount_2()
      })
    };
  }
  managedConfigPolicyGateFields() {
    let e = this.policyGateSnapshot(),
      r = qe();
    return {
      policy_ineligible_reason: de(e.ineligibleReason),
      policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      policy_cache_age_ms: e.cacheAgeMs,
      policy_would_fail_closed: e.wouldFailClosed,
      policy_live_verdict: e.liveVerdict,
      policy_load_state: f(e.loadState),
      policy_error_code: de(e.loadErrorCode),
      policy_credential_state: de(e.loadCredentialState),
      policy_outcome_reason: de(e.loadOutcomeReason),
      policy_has_auth_token: r.has_auth_token,
      policy_has_api_key_helper: r.has_api_key_helper,
      policy_has_custom_base_url: r.has_custom_base_url,
      policy_api_provider: f(Te()),
      policy_http_status: e.loadHttpStatus,
      policy_server_error_type: de(e.loadServerErrorType),
      policy_server_error_code: de(e.loadServerErrorCode),
      policy_server_auth_denial: de(e.loadServerAuthDenial)
    };
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = this.policyGateSnapshot(),
      error_reporting_gate = f(yRs());
    l("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: e.eligible,
      ineligible_reason: de(e.ineligibleReason),
      eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      has_cache: e.hasCache,
      cache_age_ms: e.cacheAgeMs,
      would_fail_closed: e.wouldFailClosed,
      live_verdict: e.liveVerdict,
      token_source: f(Dt()),
      credential_road: f(A$n()),
      ...qe(),
      ms_since_startup: Date.now() - je,
      load_state: f(e.loadState),
      startup_fetch_error_code: de(e.loadErrorCode),
      startup_credential_state: de(e.loadCredentialState),
      outcome_reason: de(e.loadOutcomeReason),
      startup_await_result: f(e.awaitResult),
      error_reporting_gate: error_reporting_gate
    });
  }
  async load({
    startupAwaited = !1,
    singleAttempt = !1
  } = {}) {
    if (singleAttempt && this.cyclesInFlight > 0) {
      await Promise.allSettled([...this.unsettledCycles]);
      return;
    }
    return this.loadFor(singleAttempt ? "accelerated_retry" : "load", startupAwaited);
  }
  async loadFor(e, r = !1) {
    if (this.used = !0, this.ensureCredentialWatch(), By() && !this.loadingCompletePromise) this.loadingCompletePromise = new Promise(o => {
      this.loadingCompleteResolve = o;
    });
    let loadingCompleteResolve = this.loadingCompleteResolve;
    try {
      if (await this.fetchAndLoad("policy_limits_load", e, r), By()) this.startBackgroundPolling();
    } finally {
      if (loadingCompleteResolve) {
        if (loadingCompleteResolve(), this.loadingCompleteResolve === loadingCompleteResolve) {
          if (this.loadingCompleteResolve = null, this.loadingTimeoutId) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null;
        }
      }
    }
  }
  async refresh({
    observedBoundary = !1
  } = {}) {
    this.used = !0, this.stop(), this.ensureCredentialWatch(), this.initializeLoadingPromise();
    let r = By();
    if (observedBoundary) await this.removeUnstampedBody();else if (!(await this.deleteCacheFile())) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    if (this.dropUnconfirmedSessionCache(), !r) return;
    await this.loadFor("login_refresh"), t("Policy limits: Refreshed after auth change");
  }
  async clearCache() {
    if (this.used = !0, this.stop(), this.verdictlessEpisode = null, this.ensureCredentialWatch(), !(await this.deleteCacheFile())) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    this.dropUnconfirmedSessionCache();
  }
  recordFetchOutcome(e, r, n, o, u) {
    if (this.sessionGeneration === e && this.cacheClearEpoch === r) abo(n, o, u);
  }
  staleFallbackSource() {
    if ($Ar()) return mU();
    return prn() ?? mU();
  }
  dropUnconfirmedSessionCache() {
    if (mU() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) F$n(null);
  }
  async deleteCacheFile() {
    if (this.cacheClearEpoch++, ANe()) return !1;
    if (fgt(await cgt(XI())), !(await this.removeBodyLeavingStamp())) return !1;
    let r = await cgt(XI());
    if (r.kind === "unusable") return !0;
    let n = Z_o(r, jAr());
    if (n.seen.length === 0 && !n.incomplete) await Sqi(XI());else await tbo(XI(), bqi(n));
    return !0;
  }
  recordVerdictPrincipal(e) {
    if (e === null || ye(e)) {
      if (this.verdictPrincipalIdentity = e === null ? null : sRe(e), this.verdictPrincipalKind = e === null ? null : e.kind, this.verdictKey = e === null ? null : oe(e), e !== null) this.askedKey = null;
    } else this.verdictKey = oe(e);
    this.ensureCredentialWatch(), this.onCredentialMayHaveChanged();
  }
  isVerdictOfLiveCredential() {
    return this.verdictKey !== null && Ze() === this.verdictKey;
  }
  ensureCredentialWatch() {
    if (this.stopCredentialWatch === null) this.stopCredentialWatch = xon(this.onCredentialMayHaveChanged);
    if (this.stopTunnelEpochWatch === null) this.stopTunnelEpochWatch = QYi(this.onTunnelCredentialEpoch);
    if (this.stopRegimeRefusalWatch === null) this.stopRegimeRefusalWatch = mt(this.refetchAfterRegimeRefusal);
    if (this.stopKeyApprovalWatch === null) this.stopKeyApprovalWatch = vOs(this.onCredentialMayHaveChanged);
  }
  refetchAfterRegimeRefusal = () => {
    if (hs("hipaa")) return Promise.resolve();
    if (this.regimeRefusalRefetch !== null) return this.regimeRefusalRefetch;
    let e = Date.now(),
      r = this.regimeRefusalRefetchStartedAtMs === void 0 ? void 0 : e - this.regimeRefusalRefetchStartedAtMs,
      n = r === void 0 || r < 0 || r >= gi;
    if (n) this.regimeRefusalRefetchStartedAtMs = e, t("Policy limits: the API refused a request for an organization policy this session has not loaded \u2014 re-fetching it now");
    return this.regimeRefusalRefetch = we((n ? this.poll("api_refusal_trigger") : Promise.resolve()).then(() => Promise.allSettled([...this.unsettledCycles])), DQe).catch(o => a(o)).then(() => {
      this.regimeRefusalRefetch = null;
    }), this.regimeRefusalRefetch;
  };
  onTunnelCredentialEpoch = e => {
    this.observeTunnelCredentialEpoch(e, "a model response", !0);
  };
  observeTunnelCredentialEpoch(e, r, n) {
    if (e === void 0 || zF() === void 0) return;
    let o = this.tunnelEpochSeen !== void 0;
    if (this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e, _bo(e);
    if (this.tunnelVerdictEpoch !== void 0 && e <= this.tunnelVerdictEpoch) return;
    if (!o && this.tunnelVerdictEpoch === void 0) return;
    let u = mU() !== null,
      p = n && this.tunnelRepolledForEpoch !== this.tunnelEpochSeen && this.cyclesInFlight === 0;
    if (!u && !p) return;
    if (t(`Policy limits: the claude ssh launcher injects a different credential than the one this policy was fetched with (${r}); ${u ? "withholding client-only keys" : "no verdict held"}${p ? ", re-polling" : ""}`), u) mrn();
    if (p) this.tunnelRepolledForEpoch = this.tunnelEpochSeen, l("tengu_policy_limits_principal_changed", {
      next_kind: f("none"),
      reason: f("tunnel_credential")
    }), this.fetchAndLoad("policy_limits_poll", "credential_change").catch(h => a(h));
  }
  settleTunnelCredentialEpoch(e) {
    if (e === void 0 || zF() === void 0) return;
    if (this.tunnelVerdictEpoch = e, this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e, _bo(e);
  }
  isStaleTunnelCredentialEpoch(e) {
    return e !== void 0 && this.tunnelEpochSeen !== void 0 && e < this.tunnelEpochSeen && zF() !== void 0;
  }
  onCredentialMayHaveChanged = () => {
    if (this.principalCheckQueued) return;
    this.principalCheckQueued = !0, queueMicrotask(() => {
      this.checkPrincipal().catch(e => {
        a(e);
      });
    });
  };
  async checkPrincipal(e = "credential_change") {
    let sessionGeneration_6 = this.sessionGeneration;
    try {
      if (this.verdictPrincipalIdentity === null && mU() === null && UAr() !== void 0) return "unchanged";
      try {
        await Kl(this.credentials);
      } catch {}
      if (ubo() && kE() === "store") try {
        await cbo(this.storageV5, this.credentials);
      } catch (error) {
        t(`Policy limits: stored login origin or account record unreadable (${d(error)})`);
      }
    } finally {
      this.principalCheckQueued = !1;
    }
    if (this.sessionGeneration !== sessionGeneration_6) return "superseded";
    let n = qFt();
    if (n === "replaced" && md()) return this.askAsHostManagedEnvBearer(e);
    if (n === "replaced" || n === "gone") return t("Policy limits: the env bearer the loaded policy was fetched with is no longer the wire credential; reloading as an account change"), l("tengu_policy_limits_principal_changed", {
      next_kind: f("none"),
      reason: f("env_bearer")
    }), this.refresh({
      observedBoundary: !0
    }).catch(S => a(S)), "changed";
    let o = $ee();
    if (o !== null && !ye(o)) this.scheduleUnclassifiedRecheck();
    if (!ye(o)) {
      if (o !== null && mU() !== null && oe(o) !== this.verdictKey && kE() === "store") {
        if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
        let S = Oe(o);
        if (S !== this.askedKey) return t("Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)"), this.repollFor(o, S, "unattributed", e);
      }
      if (o === null && n === null && tsn() && By()) return this.askAsHostManagedEnvBearer(e);
      return "unchanged";
    }
    let u = sRe(o),
      p = this.verdictPrincipalKind === "token" && o.kind === "token";
    if (this.verdictPrincipalIdentity !== null && u !== this.verdictPrincipalIdentity && !p) {
      if (SQi()) {
        let S = Oe(o),
          P = this.cyclesInFlight > 0;
        if (P && S === this.askedKey) return this.principalCheckOwed = !0, "unchanged";
        if (!P && S !== this.askedKey) return t(`Policy limits: the credential now belongs to a different principal than the loaded policy; ${kFs} keeps the loaded verdict while the new principal's policy is fetched`), l("tengu_policy_limits_principal_changed", {
          next_kind: f(o.kind),
          reason: f("identity_kept")
        }), this.askedKey = S, this.fetchAcrossBoundaryKeepingVerdict(e).catch(C => a(C)), "changed";
      }
      return t("Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change"), l("tengu_policy_limits_principal_changed", {
        next_kind: f(o.kind),
        reason: f("identity")
      }), this.refresh({
        observedBoundary: !0
      }).catch(S => a(S)), "changed";
    }
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let h = oe(o),
      y = Oe(o);
    if (y === this.askedKey) return "unchanged";
    if (this.verdictPrincipalIdentity === null) {
      if (mU() === null) {
        if (!By() || this.loadingCompleteResolve !== null) return "unchanged";
        return this.askedKey = y, this.releaseLoadingPromise(), this.initializeLoadingPromise(), this.loadFor(e).catch(S => a(S)), "started";
      }
      return this.repollFor(o, y, "unattributed", e);
    }
    if (h !== this.verdictKey) {
      let S = o.admitsOnly === !0 !== (this.verdictKey?.endsWith(Ut) ?? !1),
        P = S ? o.admitsOnly === !0 ? "snapshot_fallback" : "store_restored" : o.bearerDigest !== void 0 || p ? "bearer" : "reclassified";
      return t(S ? `Policy limits: the login moved between the credential store and the daemon's snapshot of it (${P}); keeping the verdict and re-polling` : "Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling"), this.repollFor(o, y, P, e);
    }
    return "unchanged";
  }
  scheduleUnclassifiedRecheck() {
    if (this.unclassifiedRecheckTimer !== null) return;
    this.unclassifiedRecheckTimer = setTimeout(() => {
      this.unclassifiedRecheckTimer = null, this.onCredentialMayHaveChanged();
    }, Li), this.unclassifiedRecheckTimer.unref?.();
  }
  askAsHostManagedEnvBearer(e) {
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let r = Vt(Hse(Tg() ?? ""));
    if (r === this.askedKey) return "unchanged";
    if (mU() !== null) return this.askedKey = r, l("tengu_policy_limits_principal_changed", {
      next_kind: f("none"),
      reason: f("bearer")
    }), this.fetchAndLoad("policy_limits_poll", e).catch(n => a(n)), "repolled";
    if (this.loadingCompleteResolve !== null) return "unchanged";
    return this.askedKey = r, this.releaseLoadingPromise(), this.initializeLoadingPromise(), this.loadFor(e).catch(n => a(n)), "started";
  }
  repollFor(e, r, n, o) {
    return this.askedKey = r, l("tengu_policy_limits_principal_changed", {
      next_kind: f(e.kind),
      reason: f(n)
    }), this.fetchAndLoad("policy_limits_poll", o).catch(u => a(u)), "repolled";
  }
  async fetchAcrossBoundaryKeepingVerdict(e) {
    let sessionGeneration_7 = this.sessionGeneration,
      verdictPrincipalIdentity = this.verdictPrincipalIdentity;
    H$n(), hrn(), mrn(), this.prefetchSlot.clear(), this.renewOAuthRefreshLatch(), this.cyclesInFlight++;
    try {
      if (await this.removeUnstampedBody().catch(o => a(o)), this.sessionGeneration === sessionGeneration_7) await this.fetchAndLoad("policy_limits_poll", e).catch(o => a(o));
    } finally {
      this.endCycle(sessionGeneration_7);
    }
    if (this.sessionGeneration !== sessionGeneration_7 || this.verdictPrincipalIdentity !== verdictPrincipalIdentity) return;
    t("Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change"), await this.refresh({
      observedBoundary: !0
    });
  }
  async poll(e = "hourly_poll") {
    if (!By()) return;
    let r = mU(),
      n = r ? _(r) : null;
    try {
      if ((await this.checkPrincipal(e)) !== "unchanged") return;
      if (this.cyclesInFlight > 0) return;
      await this.fetchAndLoad("policy_limits_poll", e);
      let o = mU();
      if ((o ? _(o) : null) !== n) t("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (this.used = !0, this.poller !== null) return;
    if (!By()) return;
    if (this.poller = xAr(() => void this.poll(), mi, {
      unref: !0
    }), !this.cleanupRegistered) this.cleanupRegistered = !0, vt(() => this.stopBackgroundPolling());
  }
  stopBackgroundPolling() {
    this.poller?.[Symbol.dispose](), this.poller = null, this.resetAcceleratedRecovery();
  }
}
class tqi {
  client = void 0;
}
var jca = new W(() => new tqi());
function _e() {
  return jca.of(H().host);
}
function B() {
  let e = _e();
  return e.client ??= new sRs(), e.client;
}
function iRs(e) {
  let r = _e();
  if (r.client === void 0) {
    r.client = new sRs(e);
    return;
  }
  let n = r.client.adoptStartupServices(e);
  switch (n) {
    case "nothing to adopt":
      t("Policy limits: default client already constructed; start-up composition skipped");
      return;
    case "already used":
      t("Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store", {
        level: "warn"
      }), l("tengu_policy_limits_late_composition", {});
      return;
    case "already composed":
      t("Policy limits: default client already composed; later start-up composition skipped");
      return;
    case "adopted":
      t("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}
function iwa(e) {
  B().recordStartupAwaitResult(e);
}
async function crn() {
  let since_2 = performance.now(),
    r;
  try {
    let n = B();
    n.ensureLoadRequested({
      startupAwaited: !0
    }), r = await n.awaitColdStartVerdict();
  } catch (error) {
    a(error), r = "timed_out";
  }
  return agt("policy", r, {
    since: since_2
  }), r;
}
function I$n() {
  return B().coldStartTimedOut;
}
function aRs() {
  return B().gateSnapshot();
}
function lRs() {
  return B().coldStartVerdictWait;
}
function LQe() {
  agt("policy", "not_awaited");
  try {
    if (By()) B().ensureLoadRequested({
      startupAwaited: !1
    });
  } catch (error) {
    a(error);
  }
}
async function lgt() {
  let since_3 = performance.now();
  try {
    if (!S2e()) return LQe(), "skipped";
  } catch (error) {
    return a(error), agt("policy", "timed_out", {
      since: since_3
    }), "timed_out";
  }
  return crn();
}
function awa() {
  return B();
}
async function lwa() {
  let client = _e().client;
  if (client !== void 0) await client._settleCyclesForTesting();
}
function dwa() {
  B().stop(), HAr(), _e().client = void 0, d7i(), GRs(), ZYi(), RRs();
}
function M$n() {
  B().initializeLoadingPromise();
}
function Ye(e) {
  return TNe(e) !== void 0 ? e.serverErrorCode : void 0;
}
function ze(e) {
  return TNe(e) !== void 0 ? e.serverAuthDenial : void 0;
}
function dRs() {
  return B().signatureFacts();
}
function dh() {
  return B().waitForLoad();
}
function cRs() {
  B().logCacheStateAtFirstPrompt();
}
function cwa(e) {
  return B().admitPrefetched(e);
}
function uRs() {
  return _e().client?.isVerdictOfLiveCredential() ?? !1;
}
function D$n(e = {}) {
  return B().load(e);
}
function fRs() {
  B().prefetch();
}
function CNe() {
  return B().refresh();
}
function pRs() {
  return B().clearCache();
}
function uwa() {
  B().startBackgroundPolling();
}
function fwa() {
  B().stopBackgroundPolling();
}
function pwa() {
  B().stop();
}
var Li = rbo + 1000;
function ye(e) {
  return e !== null && e.unclassified !== !0;
}
var Ut = ":admits-only";
function oe(e) {
  let r = sRe(e),
    n = e.bearerDigest === void 0 ? r : `${r}:${e.bearerDigest}`;
  return e.admitsOnly === !0 ? `${n}${Ut}` : n;
}
function Ze() {
  let e = $ee();
  return e === null ? null : oe(e);
}
function Vt(e) {
  return `env-bearer:${e}`;
}
function Oe(e) {
  let r = Ln()?.accessToken;
  return `${oe(e)}#${r ? Hse(r) : ""}`;
}
export { A$n, eRs, xAr, OQe, IQe, x$n, MQe, TNe, YI, XKi, JKi, QKi, Nse, agt, G_o, P$n, ZKi, O$n, V_o, PAr, K_o, q_o, Y_o, X_o, OAr, WFt, J_o, tRs, nRs, swa, eqi, DQe, Uca, Bca, S2e, rRs, oRs, sRs, tqi, jca, iRs, iwa, crn, I$n, aRs, lRs, LQe, lgt, awa, lwa, dwa, M$n, dRs, dh, cRs, cwa, uRs, D$n, fRs, CNe, pRs, uwa, fwa, pwa };