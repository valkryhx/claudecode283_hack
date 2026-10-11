// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _I } from "B:/~BUN/root/chunk-ger4wyq2.js";
import { tC } from "B:/~BUN/root/chunk-ywvtswng.js";
import { Ef } from "B:/~BUN/root/chunk-ydt4z4fm.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var p = be(tC()),
  E = be(Ef()),
  YDr = "AWS_ACCESS_KEY_ID",
  XDr = "AWS_SECRET_ACCESS_KEY",
  u = "AWS_SESSION_TOKEN",
  _ = "AWS_CREDENTIAL_EXPIRATION",
  C = "AWS_CREDENTIAL_SCOPE",
  w = "AWS_ACCOUNT_ID",
  PIo = e => async () => {
    e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
    let accessKeyId = process.env[YDr],
      secretAccessKey = process.env[XDr],
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
var c = be(Ef()),
  m = be(_I());
var i = be(Ef()),
  f = "AWS_EC2_METADATA_DISABLED",
  S = async e => {
    let {
      ENV_CMDS_FULL_URI: ENV_CMDS_FULL_URI,
      ENV_CMDS_RELATIVE_URI: ENV_CMDS_RELATIVE_URI,
      fromContainerMetadata: fromContainerMetadata,
      fromInstanceMetadata: fromInstanceMetadata
    } = await import("B:/~BUN/root/chunk-0807cyz5.js");
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
      e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
      let {
        fromHttp: fromHttp
      } = await import("B:/~BUN/root/chunk-rdrjh6xt.js");
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
  Rte = (e = {}) => g([async () => {
    if (e.profile ?? process.env[m.ENV_PROFILE]) {
      if (process.env[YDr] && process.env[XDr]) {
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
    return e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), PIo(e)();
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
    } = await import("B:/~BUN/root/chunk-fcef31x7.js");
    return fromSSO(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
    let {
      fromIni: fromIni
    } = await import("B:/~BUN/root/chunk-s1s1p4h0.js");
    return fromIni(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
    let {
      fromProcess: fromProcess
    } = await import("B:/~BUN/root/chunk-jt4bqaqv.js");
    return fromProcess(e)(o);
  }, async o => {
    e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
    let {
      fromTokenFile: fromTokenFile
    } = await import("B:/~BUN/root/chunk-j900jjw1.js");
    return fromTokenFile(e)(o);
  }, async () => (e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await S(e))()), async () => {
    throw new c.CredentialsProviderError("Could not load credentials from any providers", {
      tryNextLink: !1,
      logger: e.logger
    });
  }], I);
var I = e => e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 300000;
export { YDr, XDr, PIo, Rte };