// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Hwo, W1, eOr, $wo, hPs, Aon, f4 } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Kln, x1t, Utt, eae } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { ebe } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
import { createServer as U } from "http";
var P = 200;
class _ {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  codeReceived = !1;
  constructor(e = "/callback") {
    this.localServer = U(), this.callbackPath = e;
  }
  async start(e) {
    return new Promise((r, i) => {
      this.localServer.once("error", cause => {
        m("oauth_callback_listener", "oauth_callback_server_start_failed"), i(Error(`Failed to start OAuth callback server: ${cause.message}`, {
          cause: cause
        }));
      }), this.localServer.listen(e ?? 0, "127.0.0.1", () => {
        let o = this.localServer.address();
        this.port = o.port, r(this.port);
      });
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, r) {
    return new Promise((i, o) => {
      this.promiseResolver = i, this.promiseRejecter = o, this.expectedState = e, this.startLocalListener(r);
    });
  }
  handleSuccessRedirect(e, r) {
    if (!this.pendingResponse) return;
    if (r) {
      r(this.pendingResponse, e), this.pendingResponse = null, l("tengu_oauth_automatic_redirect", {
        custom_handler: !0
      });
      return;
    }
    let Location = W1(e) ? nn().CLAUDEAI_SUCCESS_URL : nn().CONSOLE_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: Location
    }), this.pendingResponse.end(), this.pendingResponse = null, l("tengu_oauth_automatic_redirect", {});
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = nn().CLAUDEAI_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: e
    }), this.pendingResponse.end(), this.pendingResponse = null, l("tengu_oauth_automatic_redirect_error", {});
  }
  startLocalListener(e) {
    this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), e();
  }
  handleRedirect(e, res) {
    let i = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (i.pathname !== this.callbackPath) {
      res.writeHead(404), res.end();
      return;
    }
    let o = i.searchParams.get("code") ?? void 0,
      state = i.searchParams.get("state") ?? void 0,
      error = i.searchParams.get("error") ?? void 0;
    if (!o && error && Kln()) {
      this.respondToErrorCallback({
        error: error,
        errorDescription: i.searchParams.get("error_description") ?? void 0,
        errorUri: i.searchParams.get("error_uri") ?? void 0,
        state: state,
        res: res
      });
      return;
    }
    this.validateAndRespond(o, state, res);
  }
  validateAndRespond(e, r, i) {
    if (r === this.expectedState && this.answerIfCodeReceived(i)) return;
    if (!e) {
      m("oauth_callback_listener", "oauth_callback_no_code"), i.writeHead(400), i.end("Authorization code not found"), this.reject(Error("No authorization code received"));
      return;
    }
    if (this.rejectOnStateMismatch(r, i)) return;
    this.codeReceived = !0, this.pendingResponse = i, g("oauth_callback_listener"), this.resolve(e);
  }
  respondToErrorCallback({
    error: error_2,
    errorDescription: errorDescription,
    errorUri: errorUri,
    state: state_2,
    res: res_2
  }) {
    if (this.rejectOnStateMismatch(state_2, res_2)) return;
    if (this.answerIfCodeReceived(res_2)) return;
    let s = errorDescription === x1t;
    m("oauth_callback_listener", s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error"), res_2.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), res_2.end(s ? "Your account is on hold. You can close this window." : "Sign-in was canceled or failed. You can close this window."), this.reject(new eae(S(error_2), errorDescription === void 0 ? void 0 : S(errorDescription), s ? Utt(errorUri) : void 0));
  }
  answerIfCodeReceived(e) {
    if (!this.codeReceived) return !1;
    return e.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), e.end("Sign-in is already finishing. You can close this window."), !0;
  }
  rejectOnStateMismatch(e, r) {
    if (e === this.expectedState) return !1;
    return m("oauth_callback_listener", "oauth_callback_state_mismatch"), r.writeHead(400), r.end("Invalid state parameter"), this.reject(Error("Invalid state parameter")), !0;
  }
  handleError(e) {
    m("oauth_callback_listener", "oauth_callback_server_error"), a(e), this.close(), this.reject(e);
  }
  resolve(e) {
    if (this.promiseResolver) this.promiseResolver(e), this.promiseResolver = null, this.promiseRejecter = null;
  }
  reject(e) {
    if (this.promiseRejecter) this.promiseRejecter(e), this.promiseResolver = null, this.promiseRejecter = null;
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) this.localServer.removeAllListeners(), this.localServer.close();
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function S(e) {
  return Q(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), P);
}
class AuthCodeRefusedError extends Error {
  constructor() {
    super("That code wasn't accepted. It may be incomplete, expired, already used, or from an earlier sign-in attempt. Sign in again to get a new code.");
    this.name = "AuthCodeRefusedError";
  }
}
import { createHash as T, randomBytes as E } from "crypto";
function A(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function L() {
  return A(E(32));
}
function O(e) {
  let r = T("sha256");
  return r.update(e), A(r.digest());
}
function y() {
  return A(E(32));
}
class CallbackListenerUnavailableError extends Error {
  constructor(cause_2) {
    super("Couldn't start the local listener that receives the browser sign-in. Try again.", {
      cause: cause_2
    });
    this.name = "CallbackListenerUnavailableError";
  }
}
var aAr = "The browser can't return the sign-in to Claude Code automatically. After you sign in, paste the code shown.",
  lAr = "Paste code here > ";
class pz {
  codeVerifier;
  authCodeListener = null;
  manualAuthCodeResolver = null;
  authorizationCodeReceived = !1;
  constructor() {
    this.codeVerifier = L();
  }
  async startOAuthFlow(e, r) {
    this.authorizationCodeReceived = !1;
    let i = null;
    this.authCodeListener = new _();
    try {
      i = await this.authCodeListener.start();
    } catch (error) {
      this.authCodeListener = null, t(`OAuth callback listener could not start: ${d(error)}`, {
        level: "error"
      });
      let h = error instanceof Error ? k(error.cause) : void 0;
      if (!r?.onCallbackListenerUnavailable || h === "EMFILE" || h === "ENFILE") throw new CallbackListenerUnavailableError(error);
      r.onCallbackListenerUnavailable();
    }
    let codeChallenge = O(this.codeVerifier),
      state_3 = y(),
      s = {
        codeChallenge: codeChallenge,
        state: state_3,
        port: i ?? 0,
        loginWithClaudeAi: r?.loginWithClaudeAi,
        inferenceOnly: r?.inferenceOnly,
        orgUUID: r?.orgUUID,
        loginHint: r?.loginHint,
        loginMethod: r?.loginMethod,
        oauthClient: r?.oauthClient,
        alsoRequestScope: r?.settingsOnlyGrant?.scope
      },
      v = $wo({
        ...s,
        isManual: !0
      }),
      C = i === null ? void 0 : $wo({
        ...s,
        isManual: !1
      }),
      I = await this.waitForAuthorizationCode(state_3, async () => {
        if (C === void 0) await e(v);else if (r?.skipBrowserOpen) await e(v, C);else await e(v), await Zi(C);
      }),
      automatic = this.authCodeListener?.hasPendingResponse() ?? !1;
    l("tengu_oauth_auth_code_received", {
      automatic: automatic
    });
    try {
      let u = await hPs(I, {
        state: state_3,
        codeVerifier: this.codeVerifier,
        port: s.port,
        useManualRedirect: !automatic,
        expiresIn: r?.expiresIn,
        clientId: r?.oauthClient?.clientId
      });
      if (automatic) {
        let f = eOr(u.scope),
          R = r?.settingsOnlyGrant,
          Location_2 = R && f.includes(R.scope) && !W1(f) ? R.successRedirectUrl : r?.successRedirectUrl;
        if (Location_2) this.authCodeListener?.handleSuccessRedirect(f, w => {
          w.writeHead(302, {
            Location: Location_2
          }), w.end();
        });else this.authCodeListener?.handleSuccessRedirect(f);
      }
      let h = r?.skipProfileFetch ? null : await Aon(u.access_token);
      if (i === null) c("oauth_login", "callback_listener_unavailable");else g("oauth_login");
      return this.formatTokens(u, {
        subscriptionType: h?.subscriptionType ?? null,
        unconfirmedPlan: h?.originStamped !== !0,
        rateLimitTier: h?.rateLimitTier ?? null,
        profile: h?.rawProfile,
        clientId: r?.oauthClient?.clientId
      });
    } catch (error_3) {
      let h = !automatic && f4(error_3);
      if (m("oauth_login", h ? "oauth_pasted_code_refused" : "oauth_login_failed"), automatic) this.authCodeListener?.handleErrorRedirect();
      if (!r?.inferenceOnly && !r?.oauthClient) ebe({
        action: "login",
        success: !1,
        authMethod: "oauth",
        error: error_3
      });
      throw h ? new AuthCodeRefusedError() : error_3;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, r) {
    return new Promise((i, o) => {
      if (this.manualAuthCodeResolver = i, !this.authCodeListener) {
        r().catch(n => {
          this.manualAuthCodeResolver = null, o(n);
        });
        return;
      }
      this.authCodeListener.waitForAuthorization(e, r).then(n => {
        this.manualAuthCodeResolver = null, this.authorizationCodeReceived = !0, i(n);
      }).catch(n => {
        this.manualAuthCodeResolver = null, o(n);
      });
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver) this.authorizationCodeReceived = !0, this.manualAuthCodeResolver(e.authorizationCode), this.manualAuthCodeResolver = null, this.authCodeListener?.close();
  }
  formatTokens(e, {
    subscriptionType: subscriptionType,
    unconfirmedPlan: unconfirmedPlan,
    rateLimitTier: rateLimitTier,
    profile: profile,
    clientId: clientId
  }) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1000,
      refreshTokenExpiresAt: Hwo(e.refresh_token_expires_in, !0),
      scopes: eOr(e.scope),
      subscriptionType: subscriptionType,
      ...(subscriptionType !== null && {
        subscriptionTypeSource: unconfirmedPlan ? "profile" : "sign_in"
      }),
      rateLimitTier: rateLimitTier,
      profile: profile,
      clientId: clientId,
      tokenAccount: e.account ? {
        uuid: e.account.uuid,
        emailAddress: e.account.email_address,
        organizationUuid: e.organization?.uuid,
        organizationName: e.organization?.name,
        workspaceId: e.workspace?.id,
        workspaceName: e.workspace?.name
      } : void 0
    };
  }
  hasReceivedAuthorizationCode() {
    return this.authorizationCodeReceived;
  }
  cleanup() {
    this.authCodeListener?.close(), this.manualAuthCodeResolver = null;
  }
}
export { AuthCodeRefusedError as bNe, CallbackListenerUnavailableError as iAr, aAr, lAr, pz };