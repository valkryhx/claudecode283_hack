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
var d = be(tC()),
  a = be(Ef()),
  m = be(_I());
import { readFileSync as _ } from "fs";
var l = e => async t => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  let {
      roleArn: o,
      roleSessionName: roleSessionName,
      webIdentityToken: s,
      providerId: n,
      policyArns: g,
      policy: p,
      durationSeconds: E
    } = e,
    {
      roleAssumerWithWebIdentity: roleAssumerWithWebIdentity
    } = e;
  if (!roleAssumerWithWebIdentity) {
    let {
      getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity
    } = await import("B:/~BUN/root/chunk-bbb1nmtw.js").then(m => be(m.default));
    roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
      ...e.clientConfig,
      credentialProviderLogger: e.logger,
      parentClientConfig: {
        ...t?.callerClientConfig,
        ...e.parentClientConfig
      }
    }, e.clientPlugins);
  }
  return roleAssumerWithWebIdentity({
    RoleArn: o,
    RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
    WebIdentityToken: s,
    ProviderId: n,
    PolicyArns: g,
    Policy: p,
    DurationSeconds: E
  });
};
var c = "AWS_WEB_IDENTITY_TOKEN_FILE",
  S = "AWS_ROLE_ARN",
  N = "AWS_ROLE_SESSION_NAME",
  A = (e = {}) => async t => {
    e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
    let o = e?.webIdentityTokenFile ?? process.env[c],
      roleArn = e?.roleArn ?? process.env[S],
      roleSessionName_2 = e?.roleSessionName ?? process.env[N];
    if (!o || !roleArn) throw new a.CredentialsProviderError("Web identity configuration not specified", {
      logger: e.logger
    });
    let n = await l({
      ...e,
      webIdentityToken: m.externalDataInterceptor?.getTokenRecord?.()[o] ?? _(o, {
        encoding: "ascii"
      }),
      roleArn: roleArn,
      roleSessionName: roleSessionName_2
    })(t);
    if (o === process.env[c]) d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
    return n;
  };
export { A as fromTokenFile, l as fromWebToken };