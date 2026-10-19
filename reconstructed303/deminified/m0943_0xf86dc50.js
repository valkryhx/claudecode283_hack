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
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var p = ve(xO()),
  E = ve(pg()),
  KOo = "AWS_ACCESS_KEY_ID",
  YOo = "AWS_SECRET_ACCESS_KEY",
  u = "AWS_SESSION_TOKEN",
  _ = "AWS_CREDENTIAL_EXPIRATION",
  C = "AWS_CREDENTIAL_SCOPE",
  w = "AWS_ACCOUNT_ID",
  ZKn = e => async () => {
    e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
    let accessKeyId = process.env[KOo],
      secretAccessKey = process.env[YOo],
      sessionToken = process.env[u],
      s = process.env[_],
      credentialScope = process.env[C],
      accountId = process.env[w];
    if (accessKeyId && secretAccessKey) {
      let a = {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        ...(sessionToken && {
          sessionToken: sessionToken
        }),
        ...(s && {
          expiration: new Date(s)
        }),
        ...(credentialScope && {
          credentialScope: credentialScope
        }),
        ...(accountId && {
          accountId: accountId
        })
      };
      return p.setCredentialFeature(a, "CREDENTIALS_ENV_VARS", "g"), a;
    }
    throw new E.CredentialsProviderError("Unable to find environment variable credentials.", {
      logger: e?.logger
    });
  };
var c = ve(pg()),
  m = ve(zN());
var i = ve(pg()),
  f = "AWS_EC2_METADATA_DISABLED",
  S = async e => {
    let {
      ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI,
      ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI,
      fromContainerMetadata: fromContainerMetadata,
      fromInstanceMetadata: fromInstanceMetadata
    } = await import("B:/~BUN/root/chunk-q74qp6vk.js");
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
      e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
      let {
        fromHttp: fromHttp
      } = await import("B:/~BUN/root/chunk-t4w408yb.js");
      return i.chain(fromHttp(e), fromContainerMetadata(e));
    }
    if (process.env[f] && process.env[f] !== "false") return async () => {
      throw new i.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
        logger: e.logger
      });
    };
    return e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), fromInstanceMetadata(e);
  };
function g(e, o) {
  let r = A(e),
    n,
    s,
    t,
    d = async a => {
      if (a?.forceRefresh) return await r(a);
      if (t?.expiration) {
        if (t?.expiration?.getTime() < Date.now()) t = void 0;
      }
      if (n) await n;else if (!t || o?.(t)) if (t) {
        if (!s) s = r(a).then(l => {
          t = l, s = void 0;
        });
      } else return n = r(a).then(l => {
        t = l, n = void 0;
      }), d(a);
      return t;
    };
  return d;
}
var A = e => async o => {
  let r;
  for (let n of e) try {
    return await n(o);
  } catch (error) {
    if (r = error, error?.tryNextLink) continue;
    throw error;
  }
  throw r;
};
var v = !1,
  Gme = (e = {}) => g([async () => {
    if (e.profile ?? process.env[m.ENV_PROFILE]) {
      if (process.env[KOo] && process.env[YOo]) {
        if (!v) (e.logger?.warn && e.logger?.constructor?.name !== "NoOpLogger" ? e.logger.warn.bind(e.logger) : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), v = !0;
      }
      throw new c.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
        logger: e.logger,
        tryNextLink: !0
      });
    }
    return e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), ZKn(e)();
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
    let {
      ssoStartUrl: ssoStartUrl,
      ssoAccountId: ssoAccountId,
      ssoRegion: ssoRegion,
      ssoRoleName: ssoRoleName,
      ssoSession: ssoSession
    } = e;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) throw new c.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
      logger: e.logger
    });
    let {
      fromSSO: fromSSO
    } = await import("B:/~BUN/root/chunk-mq341dex.js");
    return fromSSO(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
    let {
      fromIni: fromIni
    } = await import("B:/~BUN/root/chunk-60bazny4.js");
    return fromIni(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
    let {
      fromProcess: fromProcess
    } = await import("B:/~BUN/root/chunk-9tk9e4n2.js");
    return fromProcess(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
    let {
      fromTokenFile: fromTokenFile
    } = await import("B:/~BUN/root/chunk-vs2a2k29.js");
    return fromTokenFile(e)(o);
  }, async () => (e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await S(e))()), async () => {
    throw new c.CredentialsProviderError("Could not load credentials from any providers", {
      tryNextLink: !1,
      logger: e.logger
    });
  }], I);
var I = e => e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 300000;
export { KOo, YOo, ZKn, Gme };