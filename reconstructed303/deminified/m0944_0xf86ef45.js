// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zN } from "B:/~BUN/root/chunk-zsggna52.js";
import { xO } from "B:/~BUN/root/chunk-b3v0tc9c.js";
import { pg } from "B:/~BUN/root/chunk-s9jfqk01.js";
import { bg } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var k = ve(zN());
var ne = ve(pg());
var I = ve(xO()),
  P = ve(pg()),
  N = ve(zN());
var L = ve(xO()),
  _ = ve(pg()),
  O = (e, r, logger) => {
    let o = {
      EcsContainer: async s => {
        let {
            fromHttp: fromHttp
          } = await import("B:/~BUN/root/chunk-t4w408yb.js"),
          {
            fromContainerMetadata: fromContainerMetadata
          } = await import("B:/~BUN/root/chunk-q74qp6vk.js");
        return logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => _.chain(fromHttp(s ?? {}), fromContainerMetadata(s))().then(S);
      },
      Ec2InstanceMetadata: async s => {
        logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
        let {
          fromInstanceMetadata: fromInstanceMetadata
        } = await import("B:/~BUN/root/chunk-q74qp6vk.js");
        return async () => fromInstanceMetadata(s)().then(S);
      },
      Environment: async s => {
        logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
        let {
          fromEnv: fromEnv
        } = await import("B:/~BUN/root/chunk-hrc5b1ha.js");
        return async () => fromEnv(s)().then(S);
      }
    };
    if (e in o) return o[e];else throw new _.CredentialsProviderError(`Unsupported credential source in profile ${r}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
      logger: logger
    });
  },
  S = e => L.setCredentialFeature(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
var K = (e, {
    profile = "default",
    logger: logger_2
  } = {}) => Boolean(e) && typeof e === "object" && typeof e.role_arn === "string" && ["undefined", "string"].indexOf(typeof e.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof e.external_id) > -1 && ["undefined", "string"].indexOf(typeof e.mfa_serial) > -1 && (se(e, {
    profile: profile,
    logger: logger_2
  }) || ie(e, {
    profile: profile,
    logger: logger_2
  })),
  se = (e, {
    profile: profile_2,
    logger: logger_3
  }) => {
    let o = typeof e.source_profile === "string" && typeof e.credential_source > "u";
    if (o) logger_3?.debug?.(`    ${profile_2} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`);
    return o;
  },
  ie = (e, {
    profile: profile_3,
    logger: logger_4
  }) => {
    let o = typeof e.credential_source === "string" && typeof e.source_profile > "u";
    if (o) logger_4?.debug?.(`    ${profile_3} isCredentialSourceProfile credential_source=${e.credential_source}`);
    return o;
  },
  B = async (e, r, t, o = {}, s) => {
    t.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
    let n = r[e],
      {
        source_profile: source_profile,
        region: region
      } = n;
    if (!t.roleAssumer) {
      let {
        getDefaultRoleAssumer: getDefaultRoleAssumer
      } = await import("B:/~BUN/root/chunk-8fwvh20d.js").then(m => ve(m.default));
      t.roleAssumer = getDefaultRoleAssumer({
        ...t.clientConfig,
        credentialProviderLogger: t.logger,
        parentClientConfig: {
          ...t?.parentClientConfig,
          region: region ?? t?.parentClientConfig?.region
        }
      }, t.clientPlugins);
    }
    if (source_profile && source_profile in o) throw new P.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${N.getProfileName(t)}. Profiles visited: ` + Object.keys(o).join(", "), {
      logger: t.logger
    });
    t.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${e}]`}`);
    let g = source_profile ? s(source_profile, r, t, {
      ...o,
      [source_profile]: !0
    }, F(r[source_profile] ?? {})) : (await O(n.credential_source, e, t.logger)(t))();
    if (F(n)) return g.then(l => I.setCredentialFeature(l, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));else {
      let l = {
          RoleArn: n.role_arn,
          RoleSessionName: n.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: n.external_id,
          DurationSeconds: parseInt(n.duration_seconds || "3600", 10)
        },
        {
          mfa_serial: mfa_serial
        } = n;
      if (mfa_serial) {
        if (!t.mfaCodeProvider) throw new P.CredentialsProviderError(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`, {
          logger: t.logger,
          tryNextLink: !1
        });
        l.SerialNumber = mfa_serial, l.TokenCode = await t.mfaCodeProvider(mfa_serial);
      }
      let d = await g;
      return t.roleAssumer(d, l).then(c => I.setCredentialFeature(c, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    }
  },
  F = e => !e.role_arn && !!e.credential_source;
var G = ve(xO());
var q = ve(xO()),
  M = ve(pg()),
  C = ve(zN());
var f = ve(pg()),
  j = ve(bg()),
  W = ve(zN());
import { createHash as ae, createPrivateKey as ce, createPublicKey as le, sign as de } from "crypto";
import { promises as T } from "fs";
import { homedir as fe } from "os";
import { dirname as ue, join as H } from "path";
class w {
  profileData;
  init;
  callerClientConfig;
  static REFRESH_THRESHOLD = 300000;
  constructor(e, r, t) {
    this.profileData = e, this.init = r, this.callerClientConfig = t;
  }
  async loadCredentials() {
    let e = await this.loadToken();
    if (!e) throw new f.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, {
      tryNextLink: !1,
      logger: this.logger
    });
    let accessToken = e.accessToken,
      t = Date.now();
    if (new Date(accessToken.expiresAt).getTime() - t <= w.REFRESH_THRESHOLD) return this.refresh(e);
    return {
      accessKeyId: accessToken.accessKeyId,
      secretAccessKey: accessToken.secretAccessKey,
      sessionToken: accessToken.sessionToken,
      accountId: accessToken.accountId,
      expiration: new Date(accessToken.expiresAt)
    };
  }
  get logger() {
    return this.init?.logger;
  }
  get loginSession() {
    return this.profileData.login_session;
  }
  async refresh(e) {
    let {
        SigninClient: SigninClient,
        CreateOAuth2TokenCommand: CreateOAuth2TokenCommand
      } = await import("B:/~BUN/root/chunk-p2been74.js").then(m => ve(m.default)),
      {
        logger: logger_5,
        userAgentAppId: userAgentAppId
      } = this.callerClientConfig ?? {},
      requestHandler = (a => a?.metadata?.handlerProtocol === "h2")(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler,
      region_2 = this.profileData.region ?? (await this.callerClientConfig?.region?.()) ?? process.env.AWS_REGION,
      g = new SigninClient({
        credentials: {
          accessKeyId: "",
          secretAccessKey: ""
        },
        region: region_2,
        requestHandler: requestHandler,
        logger: logger_5,
        userAgentAppId: userAgentAppId,
        ...this.init?.clientConfig
      });
    this.createDPoPInterceptor(g.middlewareStack);
    let l = {
      tokenInput: {
        clientId: e.clientId,
        refreshToken: e.refreshToken,
        grantType: "refresh_token"
      }
    };
    try {
      let a = await g.send(new CreateOAuth2TokenCommand(l)),
        {
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey,
          sessionToken: sessionToken
        } = a.tokenOutput?.accessToken ?? {},
        {
          refreshToken: refreshToken,
          expiresIn: expiresIn
        } = a.tokenOutput ?? {};
      if (!accessKeyId || !secretAccessKey || !sessionToken || !refreshToken) throw new f.CredentialsProviderError("Token refresh response missing required fields", {
        logger: this.logger,
        tryNextLink: !1
      });
      let E = (expiresIn ?? 900) * 1000,
        p = new Date(Date.now() + E),
        D = {
          ...e,
          accessToken: {
            ...e.accessToken,
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            sessionToken: sessionToken,
            expiresAt: p.toISOString()
          },
          refreshToken: refreshToken
        };
      await this.saveToken(D);
      let accessToken_2 = D.accessToken;
      return {
        accessKeyId: accessToken_2.accessKeyId,
        secretAccessKey: accessToken_2.secretAccessKey,
        sessionToken: accessToken_2.sessionToken,
        accountId: accessToken_2.accountId,
        expiration: p
      };
    } catch (a) {
      if (a.name === "AccessDeniedException") {
        let d = a.error,
          c;
        switch (d) {
          case "TOKEN_EXPIRED":
            c = "Your session has expired. Please reauthenticate.";
            break;
          case "USER_CREDENTIALS_CHANGED":
            c = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
            break;
          case "INSUFFICIENT_PERMISSIONS":
            c = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
            break;
          default:
            c = `Failed to refresh token: ${String(a)}. Please re-authenticate using \`aws login\``;
        }
        throw new f.CredentialsProviderError(c, {
          logger: this.logger,
          tryNextLink: !1
        });
      }
      throw new f.CredentialsProviderError(`Failed to refresh token: ${String(a)}. Please re-authenticate using aws login`, {
        logger: this.logger
      });
    }
  }
  async loadToken() {
    let e = this.getTokenFilePath();
    try {
      let r;
      try {
        r = await W.readFile(e, {
          ignoreCache: this.init?.ignoreCache
        });
      } catch {
        r = await T.readFile(e, "utf8");
      }
      let t = JSON.parse(r),
        o = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter(item => !t[item]);
      if (!t.accessToken?.accountId) o.push("accountId");
      if (o.length > 0) throw new f.CredentialsProviderError(`Token validation failed, missing fields: ${o.join(", ")}`, {
        logger: this.logger,
        tryNextLink: !1
      });
      return t;
    } catch (error) {
      throw new f.CredentialsProviderError(`Failed to load token from ${e}: ${String(error)}`, {
        logger: this.logger,
        tryNextLink: !1
      });
    }
  }
  async saveToken(e) {
    let r = this.getTokenFilePath(),
      t = ue(r);
    try {
      await T.mkdir(t, {
        recursive: !0
      });
    } catch (error) {}
    await T.writeFile(r, JSON.stringify(e, null, 2), "utf8");
  }
  getTokenFilePath() {
    let e = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? H(fe(), ".aws", "login", "cache"),
      r = Buffer.from(this.loginSession, "utf8"),
      t = ae("sha256").update(r).digest("hex");
    return H(e, `${t}.json`);
  }
  derToRawSignature(e) {
    let r = 2;
    if (e[r] !== 2) throw Error("Invalid DER signature");
    r++;
    let t = e[r++],
      o = e.subarray(r, r + t);
    if (r += t, e[r] !== 2) throw Error("Invalid DER signature");
    r++;
    let s = e[r++],
      n = e.subarray(r, r + s);
    o = o[0] === 0 ? o.subarray(1) : o, n = n[0] === 0 ? n.subarray(1) : n;
    let i = Buffer.concat([Buffer.alloc(32 - o.length), o]),
      u = Buffer.concat([Buffer.alloc(32 - n.length), n]);
    return Buffer.concat([i, u]);
  }
  createDPoPInterceptor(e) {
    e.add(r => async t => {
      if (j.HttpRequest.isInstance(t.request)) {
        let request = t.request,
          s = `${request.protocol}//${request.hostname}${request.port ? `:${request.port}` : ""}${request.path}`,
          DPoP = await this.generateDpop(request.method, s);
        request.headers = {
          ...request.headers,
          DPoP: DPoP
        };
      }
      return r(t);
    }, {
      step: "finalizeRequest",
      name: "dpopInterceptor",
      override: !0
    });
  }
  async generateDpop(htm = "POST", htu) {
    let t = await this.loadToken();
    try {
      let o = ce({
          key: t.dpopKey,
          format: "pem",
          type: "sec1"
        }),
        n = le(o).export({
          format: "der",
          type: "spki"
        }),
        i = -1;
      for (let p = 0; p < n.length; p++) if (n[p] === 4) {
        i = p;
        break;
      }
      let u = n.slice(i + 1, i + 33),
        g = n.slice(i + 33, i + 65),
        l = {
          alg: "ES256",
          typ: "dpop+jwt",
          jwk: {
            kty: "EC",
            crv: "P-256",
            x: u.toString("base64url"),
            y: g.toString("base64url")
          }
        },
        a = {
          jti: crypto.randomUUID(),
          htm: htm,
          htu: htu,
          iat: Math.floor(Date.now() / 1000)
        },
        d = Buffer.from(JSON.stringify(l)).toString("base64url"),
        c = Buffer.from(JSON.stringify(a)).toString("base64url"),
        m = `${d}.${c}`,
        h = de("sha256", Buffer.from(m), o),
        E = this.derToRawSignature(h).toString("base64url");
      return `${m}.${E}`;
    } catch (error) {
      throw new f.CredentialsProviderError(`Failed to generate Dpop proof: ${error instanceof Error ? error.message : String(error)}`, {
        logger: this.logger,
        tryNextLink: !1
      });
    }
  }
}
var U = e => async ({
  callerClientConfig: callerClientConfig
} = {}) => {
  e?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
  let t = await C.parseKnownFiles(e || {}),
    o = C.getProfileName({
      profile: e?.profile ?? callerClientConfig?.profile
    }),
    s = t[o];
  if (!s?.login_session) throw new M.CredentialsProviderError(`Profile ${o} does not contain login_session.`, {
    tryNextLink: !0,
    logger: e?.logger
  });
  let i = await new w(s, e, callerClientConfig).loadCredentials();
  return q.setCredentialFeature(i, "CREDENTIALS_LOGIN", "AD");
};
var J = e => Boolean(e && e.login_session),
  Y = async (profile_4, r) => {
    let t = await U({
      ...r,
      profile: profile_4
    })();
    return G.setCredentialFeature(t, "CREDENTIALS_PROFILE_LOGIN", "AC");
  };
var z = ve(xO()),
  V = e => Boolean(e) && typeof e === "object" && typeof e.credential_process === "string",
  X = async (e, profile_5) => import("B:/~BUN/root/chunk-9tk9e4n2.js").then(({
    fromProcess: fromProcess
  }) => fromProcess({
    ...e,
    profile: profile_5
  })().then(o => z.setCredentialFeature(o, "CREDENTIALS_PROFILE_PROCESS", "v")));
var v = ve(xO()),
  Q = async (profile_6, r, t = {}) => {
    let {
      fromSSO: fromSSO
    } = await import("B:/~BUN/root/chunk-mq341dex.js");
    return fromSSO({
      profile: profile_6,
      logger: t.logger,
      parentClientConfig: t.parentClientConfig,
      clientConfig: t.clientConfig
    })().then(s => {
      if (r.sso_session) return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO", "r");else return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
    });
  },
  Z = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
var ee = ve(xO()),
  x = e => Boolean(e) && typeof e === "object" && typeof e.aws_access_key_id === "string" && typeof e.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof e.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof e.aws_account_id) > -1,
  R = async (e, r) => {
    r?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    let t = {
      accessKeyId: e.aws_access_key_id,
      secretAccessKey: e.aws_secret_access_key,
      sessionToken: e.aws_session_token,
      ...(e.aws_credential_scope && {
        credentialScope: e.aws_credential_scope
      }),
      ...(e.aws_account_id && {
        accountId: e.aws_account_id
      })
    };
    return ee.setCredentialFeature(t, "CREDENTIALS_PROFILE", "n");
  };
var te = ve(xO()),
  re = e => Boolean(e) && typeof e === "object" && typeof e.web_identity_token_file === "string" && typeof e.role_arn === "string" && ["undefined", "string"].indexOf(typeof e.role_session_name) > -1,
  oe = async (e, r) => import("B:/~BUN/root/chunk-vs2a2k29.js").then(({
    fromTokenFile: fromTokenFile
  }) => fromTokenFile({
    webIdentityTokenFile: e.web_identity_token_file,
    roleArn: e.role_arn,
    roleSessionName: e.role_session_name,
    roleAssumerWithWebIdentity: r.roleAssumerWithWebIdentity,
    logger: r.logger,
    parentClientConfig: r.parentClientConfig
  })().then(o => te.setCredentialFeature(o, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
var A = async (profile_7, r, t, o = {}, s = !1) => {
  let n = r[profile_7];
  if (Object.keys(o).length > 0 && x(n)) return R(n, t);
  if (s || K(n, {
    profile: profile_7,
    logger: t.logger
  })) return B(profile_7, r, t, o, A);
  if (x(n)) return R(n, t);
  if (re(n)) return oe(n, t);
  if (V(n)) return X(t, profile_7);
  if (Z(n)) return await Q(profile_7, n, t);
  if (J(n)) return Y(profile_7, t);
  throw new ne.CredentialsProviderError(`Could not resolve credentials using profile: [${profile_7}] in configuration/credentials file(s).`, {
    logger: t.logger
  });
};
var qOo = (e = {}) => async ({
  callerClientConfig: callerClientConfig_2
} = {}) => {
  let t = {
    ...e,
    parentClientConfig: {
      ...callerClientConfig_2,
      ...e.parentClientConfig
    }
  };
  t.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
  let o = await k.parseKnownFiles(t);
  return A(k.getProfileName({
    profile: e.profile ?? callerClientConfig_2?.profile
  }), o, t);
};
export { qOo };