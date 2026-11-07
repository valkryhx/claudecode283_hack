// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { kVn, bHr as scopes, nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { yR } from "B:/~BUN/root/chunk-rmd6bs96.js";
import { Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Cfe, Tw, zx, f4, l8i } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { YV } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { FX, hgt } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { znn, sAr } from "B:/~BUN/root/chunk-2r8nxr60.js";
import { pz } from "B:/~BUN/root/chunk-3yw7hnm6.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { createInterface as L } from "readline";
var U = ".cloud_sessions_oauth_refresh.lock",
  z = 300000;
async function F(e) {
  try {
    return (await Kn().readAsync(e))?.cloudSessionsOauth ?? null;
  } catch (error) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(error)}`, {
      level: "error"
    }), "unreadable";
  }
}
function hasStored(e) {
  try {
    let s = Kn().read()?.cloudSessionsOauth;
    return s !== void 0 && s.organizationUuid === e && Boolean(s.accessToken);
  } catch (error) {
    return t(`Failed to read the cloud-sessions OAuth tokens: ${d(error)}`, {
      level: "error"
    }), !1;
  }
}
async function x(cloudSessionsOauth, s) {
  try {
    let k = !1,
      l = await Kn().mutate(r => {
        if (s?.onlyIf && !s.onlyIf(r.cloudSessionsOauth)) return k = !0, r;
        return {
          ...r,
          cloudSessionsOauth: cloudSessionsOauth
        };
      });
    return k ? {
      ...l,
      raced: !0
    } : l;
  } catch (error) {
    return t(`Failed to save the cloud-sessions OAuth tokens: ${d(error)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save the cloud-sessions OAuth tokens"
    };
  }
}
async function v(e) {
  try {
    await Kn().mutate(s => {
      if (!s.cloudSessionsOauth || !e(s.cloudSessionsOauth)) return s;
      let k = {
        ...s
      };
      return delete k.cloudSessionsOauth, k;
    });
  } catch (error) {
    t(`Failed to clear the cloud-sessions OAuth tokens: ${d(error)}`, {
      level: "error"
    });
  }
}
async function O() {
  let e = Kn();
  return e.invalidateCache?.(), (await e.readAsync())?.cloudSessionsOauth ?? null;
}
async function getValid({
  organizationUuid: organizationUuid,
  refusedAccessToken: refusedAccessToken,
  credentials: credentials
}) {
  let l = await F(credentials);
  if (l === "unreadable") return {
    ok: !1,
    reason: "refresh_failed",
    detail: "the credential store could not be read"
  };
  if (!l?.accessToken || l.organizationUuid !== organizationUuid) return {
    ok: !1,
    reason: "needs_sign_in"
  };
  if (!zx(l.expiresAt) && l.accessToken !== refusedAccessToken) return {
    ok: !0,
    accessToken: l.accessToken
  };
  if (q()) return m("oauth_token_refresh", "cloud_sessions_oauth_refresh_diskless"), {
    ok: !1,
    reason: "needs_sign_in"
  };
  try {
    return await sAr(U, async r => {
      let o = await O();
      if (!o?.accessToken || o.organizationUuid !== organizationUuid) return {
        ok: !1,
        reason: "needs_sign_in"
      };
      if (!zx(o.expiresAt) && o.accessToken !== refusedAccessToken) return {
        ok: !0,
        accessToken: o.accessToken
      };
      if (!o.refreshToken || !Array.isArray(o.scopes) || o.scopes.length === 0) {
        let refreshToken = o.refreshToken;
        return await v(f => f.refreshToken === refreshToken), {
          ok: !1,
          reason: "needs_sign_in"
        };
      }
      if (r.isCompromised()) return c("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised"), {
        ok: !1,
        reason: "refresh_failed",
        detail: "another Claude Code process is renewing it right now"
      };
      let refreshToken_2 = o.refreshToken;
      try {
        let n = await Cfe(refreshToken_2, {
          clientId: o.clientId,
          scopes: o.scopes,
          skipProfileFetch: !0
        });
        if (!n.refreshToken || !n.expiresAt) {
          if (n.refreshToken && n.refreshToken !== refreshToken_2) await Tw(n.refreshToken, o.clientId);
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "the server's reply had no refresh token or expiry"
          };
        }
        if (!n.scopes.includes(kVn)) return await Tw(n.refreshToken, o.clientId), await v(h => h.refreshToken === refreshToken_2), {
          ok: !1,
          reason: "needs_sign_in",
          detail: "refresh response missing the sessions scope"
        };
        let f = await x({
          accessToken: n.accessToken,
          refreshToken: n.refreshToken,
          expiresAt: n.expiresAt,
          scopes: n.scopes.filter(item => scopes.some(p => p === item)),
          clientId: o.clientId,
          organizationUuid: o.organizationUuid
        }, {
          onlyIf: h => h?.refreshToken === refreshToken_2
        });
        if (f.raced) {
          await Tw(n.refreshToken, o.clientId);
          let h = await O();
          return h?.accessToken && h.organizationUuid === organizationUuid && !zx(h.expiresAt) ? {
            ok: !0,
            accessToken: h.accessToken
          } : {
            ok: !1,
            reason: "needs_sign_in"
          };
        }
        if (!f.success) t("Cloud-sessions OAuth refresh succeeded but the new token could not be saved; using it for this session only.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: n.accessToken
        };
      } catch (error) {
        if (r.isCompromised()) {
          let f = await O();
          if (f?.accessToken && f.organizationUuid === organizationUuid && !zx(f.expiresAt)) return {
            ok: !0,
            accessToken: f.accessToken
          };
          if (!f4(error)) c("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "another Claude Code process is renewing it right now"
          };
        }
        if (f4(error)) return await v(f => f.refreshToken === refreshToken_2), {
          ok: !1,
          reason: "needs_sign_in",
          detail: "cloud-sessions authorization expired"
        };
        return t(`Cloud-sessions OAuth refresh failed: ${d(error)}`, {
          level: "error"
        }), {
          ok: !1,
          reason: "refresh_failed",
          detail: "the renewal request failed"
        };
      }
    });
  } catch (error) {
    if (error instanceof znn) c("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_contention");else a(error), m("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_error");
    return {
      ok: !1,
      reason: "refresh_failed",
      detail: "the renewal could not run; wait a moment"
    };
  }
}
function canSignInHere() {
  return !ye() && i.CLAUDE_CODE_REMOTE !== !0;
}
var prompt = "Paste code here if prompted > ";
function H(e, {
  expectedState: expectedState,
  onCode: onCode,
  onCancel: onCancel
}) {
  if (!e.input.isTTY || !e.output.isTTY) return;
  yR();
  let r = !1,
    o = !1,
    u = L({
      input: e.input,
      output: e.output,
      prompt: prompt
    });
  return u.on("SIGINT", () => onCancel()), u.on("close", () => {
    if (!r) onCancel();
  }), u.on("line", n => {
    let f = n.trim();
    if (!f) {
      u.prompt();
      return;
    }
    let [authorizationCode, state] = f.split("#");
    if (!authorizationCode || !state) {
      e.output.write(`Invalid code. Please make sure the full code was copied.
`), u.prompt();
      return;
    }
    if (expectedState !== void 0 && state !== expectedState) {
      e.output.write(`That code is not from this sign-in. Paste the code shown after opening the address above.
`), u.prompt();
      return;
    }
    o = !0, onCode({
      authorizationCode: authorizationCode,
      state: state
    });
  }), u.prompt(), {
    close: () => {
      if (r) return;
      if (r = !0, !o) e.output.write(`
`);
      u.close();
    }
  };
}
async function signIn({
  organizationUuid: e,
  onBrowserOpening: onBrowserOpening,
  terminal = {
    input: process.stdin,
    output: process.stdout
  }
}) {
  let l = nn().CLIENT_ID,
    loginHint = YV()?.accountEmail,
    o = new pz(),
    u = !1,
    n = !1,
    f = !1,
    h,
    p,
    S,
    y = !1,
    I = () => {},
    promise = new Promise((C, A) => {
      I = A;
    });
  promise.catch(() => {});
  try {
    let C = o.startOAuthFlow(async (T, E) => {
      onBrowserOpening?.(T), p = H(terminal, {
        expectedState: Y(T),
        onCode: P => o.handleManualAuthCodeInput(P),
        onCancel: () => {
          if (y) return;
          n = !0, f = !0, I(Error("cloud-sessions sign-in cancelled"));
        }
      }), await Zi(E ?? T);
    }, {
      loginWithClaudeAi: !1,
      oauthClient: {
        clientId: l,
        scopes: scopes
      },
      orgUUID: e,
      loginHint: loginHint,
      skipBrowserOpen: !0,
      successRedirectUrl: nn().CLAUDEAI_SUCCESS_URL
    });
    C.then(T => {
      if (f && T.refreshToken) Tw(T.refreshToken, l);
    }).catch(() => {}), h = setTimeout(() => {
      u = !0, f = !0, I(Error("cloud-sessions sign-in timed out"));
    }, z);
    let A = await Promise.race([C, promise]);
    y = !0, p?.close();
    let _ = await G(A, l, e, loginHint);
    if (!_.ok) return m("cloud_sessions_console_sign_in", _.reason), _;
    S = _.slot;
    let w = await O();
    if (w?.refreshToken && w.refreshToken !== _.slot.refreshToken) await Tw(w.refreshToken, w.clientId);
    if (!(await x(_.slot)).success) return await Tw(_.slot.refreshToken, l), m("cloud_sessions_console_sign_in", "save_failed"), {
      ok: !1,
      reason: "save_failed",
      message: "Could not save the cloud-sessions credential to secure storage. Try again."
    };
    return S = void 0, g("cloud_sessions_console_sign_in"), {
      ok: !0,
      accessToken: _.slot.accessToken
    };
  } catch (error) {
    if (y = !0, f = !0, S !== void 0) await Tw(S.refreshToken, S.clientId);
    if (u) return m("cloud_sessions_console_sign_in", "timed_out"), {
      ok: !1,
      reason: "timed_out",
      message: "The browser sign-in for cloud sessions timed out after 5 minutes. Try again."
    };
    if (n) return c("cloud_sessions_console_sign_in", "cancelled"), {
      ok: !1,
      reason: "cancelled",
      message: "The sign-in for cloud sessions was cancelled."
    };
    return t(`Cloud-sessions sign-in failed: ${d(error)}`, {
      level: "error"
    }), m("cloud_sessions_console_sign_in", "failed"), {
      ok: !1,
      reason: "failed",
      message: "The browser sign-in for cloud sessions failed. Try again."
    };
  } finally {
    if (h !== void 0) clearTimeout(h);
    p?.close(), o.cleanup();
  }
}
function Y(e) {
  try {
    return new URL(e).searchParams.get("state") ?? void 0;
  } catch {
    return;
  }
}
async function G(e, clientId, organizationUuid_2, l) {
  let r = async () => {
    if (e.refreshToken) await Tw(e.refreshToken, clientId);
  };
  if (!e.scopes.includes(kVn)) return await r(), {
    ok: !1,
    reason: "scope_not_granted",
    message: "Your Console organization doesn't allow cloud sessions from Claude Code, so the sign-in didn't grant that permission. Cloud sessions stay unavailable with this sign-in."
  };
  let o = e.tokenAccount?.organizationUuid ?? e.profile?.organization.uuid;
  if (o === void 0) return await r(), {
    ok: !1,
    reason: "invalid",
    message: "The sign-in didn't say which organization it was for, so it can't be used. Try again."
  };
  if (o.toLowerCase() !== organizationUuid_2.toLowerCase()) return await r(), {
    ok: !1,
    reason: "other_organization",
    message: "The sign-in was for a different organization than your Console sign-in. Sign in again and choose the same organization."
  };
  if (l !== void 0) {
    let u = (e.tokenAccount?.emailAddress || e.profile?.account.email)?.trim() || void 0;
    if (u === void 0) return await r(), {
      ok: !1,
      reason: "invalid",
      message: "The sign-in didn't say which account it was for, so it can't be used. Try again."
    };
    if (u.trim().toLowerCase() !== l.trim().toLowerCase()) return await r(), {
      ok: !1,
      reason: "other_account",
      message: `The sign-in was for ${u}, but your Console sign-in is ${l}. Sign in again as ${l}.`
    };
  }
  if (!e.refreshToken || !e.expiresAt) return await r(), {
    ok: !1,
    reason: "invalid",
    message: "The sign-in came back without a refresh token or an expiry, so it could not be stored. Try again."
  };
  return {
    ok: !0,
    slot: {
      accessToken: e.accessToken,
      refreshToken: e.refreshToken,
      expiresAt: e.expiresAt,
      scopes: e.scopes.filter(item => scopes.some(n => n === item)),
      clientId: clientId,
      organizationUuid: organizationUuid_2
    }
  };
}
function organizationLabel() {
  if (!FX() || hgt()) return "unknown";
  return hs("ldr") ? "ldr" : "not_ldr";
}
l8i({
  organizationLabel: organizationLabel,
  hasStored: hasStored,
  canSignInHere: canSignInHere,
  getValid: getValid,
  signIn: signIn
});