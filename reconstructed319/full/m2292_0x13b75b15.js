// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  U1
} from "B:/~BUN/root/chunk-zhjjesee.js";
import {
  UL
} from "B:/~BUN/root/chunk-cyskrr8y.js";
import {
  Wy
} from "B:/~BUN/root/chunk-6mhfab6x.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var d = Oe(UL()),
  a = Oe(Wy()),
  m = Oe(U1());
import {
  readFileSync as _
} from "fs";
var l = (e) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  let {
    roleArn: o,
    roleSessionName: r,
    webIdentityToken: s,
    providerId: n,
    policyArns: g,
    policy: p,
    durationSeconds: E
  } = e, {
    roleAssumerWithWebIdentity: i
  } = e;
  if (!i) {
    let {
      getDefaultRoleAssumerWithWebIdentity: f
    } = await import("B:/~BUN/root/chunk-dm2d57k7.js").then((m) => Oe(m.default));
    i = f({
      ...e.clientConfig,
      credentialProviderLogger: e.logger,
      parentClientConfig: {
        ...t?.callerClientConfig,
        ...e.parentClientConfig
      }
    }, e.clientPlugins)
  }
  return i({
    RoleArn: o,
    RoleSessionName: r ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: s,
    ProviderId: n,
    PolicyArns: g,
    Policy: p,
    DurationSeconds: E
  })
};
var c = "AWS_WEB_IDENTITY_TOKEN_FILE",
  S = "AWS_ROLE_ARN",
  N = "AWS_ROLE_SESSION_NAME",
  A = (e = {}) => async (t) => {
    e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
    let o = e?.webIdentityTokenFile ?? process.env[c],
      r = e?.roleArn ?? process.env[S],
      s = e?.roleSessionName ?? process.env[N];
    if (!o || !r) throw new a.CredentialsProviderError("Web identity configuration not specified", {
      logger: e.logger
    });
    let n = await l({
      ...e,
      webIdentityToken: m.externalDataInterceptor?.getTokenRecord?.()[o] ?? _(o, {
        encoding: "ascii"
      }),
      roleArn: r,
      roleSessionName: s
    })(t);
    if (o === process.env[c]) d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
    return n
  };
export {
  A as fromTokenFile, l as fromWebToken
};
