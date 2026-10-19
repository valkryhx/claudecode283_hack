// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { hDr, nW, Q4n, yDr, hMo, _Dr } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { g1t, Z_t, Lze, XJ } from "B:/~BUN/root/chunk-pej55jax.js";
import { xae } from "B:/~BUN/root/chunk-yjayxywk.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
import { createServer as k } from "http";
var L = 200;
class u {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  codeReceived = !1;
  constructor(e = "/callback") {
    this.localServer = k(), this.callbackPath = e;
  }
  async start(e) {
    return new Promise((t, r) => {
      this.localServer.once("error", o => {
        m("oauth_callback_listener", "oauth_callback_server_start_failed"), r(Error(`Failed to start OAuth callback server: ${o.message}`));
      }), this.localServer.listen(e ?? 0, "127.0.0.1", () => {
        let o = this.localServer.address();
        this.port = o.port, t(this.port);
      });
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, t) {
    return new Promise((r, o) => {
      this.promiseResolver = r, this.promiseRejecter = o, this.expectedState = e, this.startLocalListener(t);
    });
  }
  handleSuccessRedirect(e, t) {
    if (!this.pendingResponse) return;
    if (t) {
      t(this.pendingResponse, e), this.pendingResponse = null, i("tengu_oauth_automatic_redirect", {
        custom_handler: !0
      });
      return;
    }
    let Location = nW(e) ? ln().CLAUDEAI_SUCCESS_URL : ln().CONSOLE_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: Location
    }), this.pendingResponse.end(), this.pendingResponse = null, i("tengu_oauth_automatic_redirect", {});
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = ln().CLAUDEAI_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: e
    }), this.pendingResponse.end(), this.pendingResponse = null, i("tengu_oauth_automatic_redirect_error", {});
  }
  startLocalListener(e) {
    this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), e();
  }
  handleRedirect(e, res) {
    let r = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (r.pathname !== this.callbackPath) {
      res.writeHead(404), res.end();
      return;
    }
    let o = r.searchParams.get("code") ?? void 0,
      state = r.searchParams.get("state") ?? void 0,
      error = r.searchParams.get("error") ?? void 0;
    if (!o && error && g1t()) {
      this.respondToErrorCallback({
        error: error,
        errorDescription: r.searchParams.get("error_description") ?? void 0,
        errorUri: r.searchParams.get("error_uri") ?? void 0,
        state: state,
        res: res
      });
      return;
    }
    this.validateAndRespond(o, state, res);
  }
  validateAndRespond(e, t, r) {
    if (t === this.expectedState && this.answerIfCodeReceived(r)) return;
    if (!e) {
      m("oauth_callback_listener", "oauth_callback_no_code"), r.writeHead(400), r.end("Authorization code not found"), this.reject(Error("No authorization code received"));
      return;
    }
    if (this.rejectOnStateMismatch(t, r)) return;
    this.codeReceived = !0, this.pendingResponse = r, g("oauth_callback_listener"), this.resolve(e);
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
    let s = errorDescription === Z_t;
    m("oauth_callback_listener", s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error"), res_2.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), res_2.end(s ? "Your account is on hold. You can close this window." : "Sign-in was canceled or failed. You can close this window."), this.reject(new XJ(C(error_2), errorDescription === void 0 ? void 0 : C(errorDescription), s ? Lze(errorUri) : void 0));
  }
  answerIfCodeReceived(e) {
    if (!this.codeReceived) return !1;
    return e.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), e.end("Sign-in is already finishing. You can close this window."), !0;
  }
  rejectOnStateMismatch(e, t) {
    if (e === this.expectedState) return !1;
    return m("oauth_callback_listener", "oauth_callback_state_mismatch"), t.writeHead(400), t.end("Invalid state parameter"), this.reject(Error("Invalid state parameter")), !0;
  }
  handleError(e) {
    m("oauth_callback_listener", "oauth_callback_server_error"), l(e), this.close(), this.reject(e);
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
function C(e) {
  return ne(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), L);
}
import { createHash as E, randomBytes as _ } from "crypto";
function h(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function A() {
  return h(_(32));
}
function S(e) {
  let t = E("sha256");
  return t.update(e), h(t.digest());
}
function w() {
  return h(_(32));
}
class $N {
  codeVerifier;
  authCodeListener = null;
  port = null;
  manualAuthCodeResolver = null;
  authorizationCodeReceived = !1;
  constructor() {
    this.codeVerifier = A();
  }
  async startOAuthFlow(e, t) {
    this.authorizationCodeReceived = !1, this.authCodeListener = new u(), this.port = await this.authCodeListener.start();
    let codeChallenge = S(this.codeVerifier),
      state_3 = w(),
      n = {
        codeChallenge: codeChallenge,
        state: state_3,
        port: this.port,
        loginWithClaudeAi: t?.loginWithClaudeAi,
        inferenceOnly: t?.inferenceOnly,
        orgUUID: t?.orgUUID,
        loginHint: t?.loginHint,
        loginMethod: t?.loginMethod,
        oauthClient: t?.oauthClient
      },
      s = yDr({
        ...n,
        isManual: !0
      }),
      p = yDr({
        ...n,
        isManual: !1
      }),
      b = await this.waitForAuthorizationCode(state_3, async () => {
        if (t?.skipBrowserOpen) await e(s, p);else await e(s), await Hs(p);
      }),
      automatic = this.authCodeListener?.hasPendingResponse() ?? !1;
    i("tengu_oauth_auth_code_received", {
      automatic: automatic
    });
    try {
      let a = await hMo(b, {
          state: state_3,
          codeVerifier: this.codeVerifier,
          port: this.port,
          useManualRedirect: !automatic,
          expiresIn: t?.expiresIn,
          clientId: t?.oauthClient?.clientId
        }),
        d = t?.skipProfileFetch ? null : await _Dr(a.access_token);
      if (automatic) {
        let f = Q4n(a.scope),
          Location_2 = t?.successRedirectUrl;
        if (Location_2) this.authCodeListener?.handleSuccessRedirect(f, R => {
          R.writeHead(302, {
            Location: Location_2
          }), R.end();
        });else this.authCodeListener?.handleSuccessRedirect(f);
      }
      return g("oauth_login"), this.formatTokens(a, {
        subscriptionType: d?.subscriptionType ?? null,
        rateLimitTier: d?.rateLimitTier ?? null,
        profile: d?.rawProfile,
        clientId: t?.oauthClient?.clientId
      });
    } catch (error_3) {
      if (m("oauth_login", "oauth_login_failed"), automatic) this.authCodeListener?.handleErrorRedirect();
      if (!t?.inferenceOnly && !t?.oauthClient) xae({
        action: "login",
        success: !1,
        authMethod: "oauth",
        error: error_3
      });
      throw error_3;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, t) {
    return new Promise((r, o) => {
      this.manualAuthCodeResolver = r, this.authCodeListener?.waitForAuthorization(e, t).then(n => {
        this.manualAuthCodeResolver = null, this.authorizationCodeReceived = !0, r(n);
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
    rateLimitTier: rateLimitTier,
    profile: profile,
    clientId: clientId
  }) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1000,
      refreshTokenExpiresAt: hDr(e.refresh_token_expires_in, !0),
      scopes: Q4n(e.scope),
      subscriptionType: subscriptionType,
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
export { $N };