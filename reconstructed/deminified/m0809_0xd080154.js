// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { nC } from "B:/~BUN/root/chunk-bs1tcxg8.js";
import { Rte } from "B:/~BUN/root/chunk-5zwpgr2q.js";
import "B:/~BUN/root/chunk-ger4wyq2.js";
import { GDr } from "B:/~BUN/root/chunk-a58dssg9.js";
import { Ow } from "B:/~BUN/root/chunk-6gdgzyty.js";
import { hy } from "B:/~BUN/root/chunk-1kg6h1n1.js";
import "B:/~BUN/root/chunk-t2es1wgh.js";
import { Ef } from "B:/~BUN/root/chunk-ydt4z4fm.js";
import "B:/~BUN/root/chunk-ne7hcw7b.js";
import "B:/~BUN/root/chunk-kbd7ddta.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var h = (e = {}) => GDr({
  ...e
});
var x = (e = {}) => Rte({
  ...e
});
var A = be(Ow()),
  v = be(nC());
var T = be(hy()),
  g = be(Ef()),
  P = "us-east-1",
  y = (e, o, l) => {
    let f;
    return async (I = {}) => {
      let {
          callerClientConfig: callerClientConfig
        } = I,
        profile = e.clientConfig?.profile ?? callerClientConfig?.profile,
        logger = e.logger ?? callerClientConfig?.logger;
      logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
      let s = {
        ...e.params,
        RoleSessionName: e.params.RoleSessionName ?? "aws-sdk-js-" + Date.now()
      };
      if (s?.SerialNumber) {
        if (!e.mfaCodeProvider) throw new g.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", {
          tryNextLink: !1,
          logger: logger
        });
        s.TokenCode = await e.mfaCodeProvider(s?.SerialNumber);
      }
      let {
        AssumeRoleCommand: AssumeRoleCommand,
        STSClient: STSClient
      } = await import("B:/~BUN/root/chunk-r4nxgzks.js");
      if (!f) {
        let u = typeof o === "function" ? o() : void 0,
          i = [e.masterCredentials, e.clientConfig?.credentials, void callerClientConfig?.credentials, callerClientConfig?.credentialDefaultProvider?.(), u],
          n = "STS client default credentials";
        if (i[0]) n = "options.masterCredentials";else if (i[1]) n = "options.clientConfig.credentials";else if (i[2]) throw n = "caller client's credentials", Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");else if (i[3]) n = "caller client's credentialDefaultProvider";else if (i[4]) n = "AWS SDK default credentials";
        let c = [e.clientConfig?.region, callerClientConfig?.region, await l?.({
            profile: profile
          }), P],
          d = "default partition's default region";
        if (c[0]) d = "options.clientConfig.region";else if (c[1]) d = "caller client's region";else if (c[2]) d = "file or env region";
        let p = [w(e.clientConfig?.requestHandler), w(callerClientConfig?.requestHandler)],
          S = "STS default requestHandler";
        if (p[0]) S = "options.clientConfig.requestHandler";else if (p[1]) S = "caller client's requestHandler";
        logger?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${d}=${await T.normalizeProvider(m(c))()}, ${n}, ${S}.`), f = new STSClient({
          userAgentAppId: callerClientConfig?.userAgentAppId,
          ...e.clientConfig,
          credentials: m(i),
          logger: logger,
          profile: profile,
          region: m(c),
          requestHandler: m(p)
        });
      }
      if (e.clientPlugins) for (let u of e.clientPlugins) f.middlewareStack.use(u);
      let {
        Credentials: Credentials
      } = await f.send(new AssumeRoleCommand(s));
      if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) throw new g.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${s.RoleArn}`, {
        logger: logger
      });
      return {
        accessKeyId: Credentials.AccessKeyId,
        secretAccessKey: Credentials.SecretAccessKey,
        sessionToken: Credentials.SessionToken,
        expiration: Credentials.Expiration,
        credentialScope: Credentials.CredentialScope
      };
    };
  },
  w = e => e?.metadata?.handlerProtocol === "h2" ? void 0 : e,
  m = e => {
    for (let o of e) if (o !== void 0) return o;
  };
var K = e => y(e, x, async ({
  profile: profile_2 = process.env.AWS_PROFILE
}) => v.loadConfig({
  environmentVariableSelector: l => l.AWS_REGION,
  configFileSelector: l => l.region,
  default: () => {
    return;
  }
}, {
  ...A.NODE_REGION_CONFIG_FILE_OPTIONS,
  profile: profile_2
})());
export { h as fromIni, x as fromNodeProviderChain, K as fromTemporaryCredentials };