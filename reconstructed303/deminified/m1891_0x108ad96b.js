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
var i = ve(zN());
var c = ve(pg()),
  f = ve(zN());
import { exec as w } from "child_process";
import { promisify as m } from "util";
var p = ve(xO()),
  a = (r, e, o) => {
    if (e.Version !== 1) throw Error(`Profile ${r} credential_process did not return Version 1.`);
    if (e.AccessKeyId === void 0 || e.SecretAccessKey === void 0) throw Error(`Profile ${r} credential_process returned invalid credentials.`);
    if (e.Expiration) {
      let date = new Date();
      if (new Date(e.Expiration) < date) throw Error(`Profile ${r} credential_process returned expired credentials.`);
    }
    let s = e.AccountId;
    if (!s && o?.[r]?.aws_account_id) s = o[r].aws_account_id;
    let t = {
      accessKeyId: e.AccessKeyId,
      secretAccessKey: e.SecretAccessKey,
      ...(e.SessionToken && {
        sessionToken: e.SessionToken
      }),
      ...(e.Expiration && {
        expiration: new Date(e.Expiration)
      }),
      ...(e.CredentialScope && {
        credentialScope: e.CredentialScope
      }),
      ...(s && {
        accountId: s
      })
    };
    return p.setCredentialFeature(t, "CREDENTIALS_PROCESS", "w"), t;
  };
var u = async (r, e, logger) => {
  let s = e[r];
  if (e[r]) {
    let credential_process = s.credential_process;
    if (credential_process !== void 0) {
      let d = m(f.externalDataInterceptor?.getTokenRecord?.().exec ?? w);
      try {
        let {
            stdout: stdout
          } = await d(credential_process),
          l;
        try {
          l = JSON.parse(stdout.trim());
        } catch {
          throw Error(`Profile ${r} credential_process returned invalid JSON.`);
        }
        return a(r, l, e);
      } catch (error) {
        throw new c.CredentialsProviderError(error.message, {
          logger: logger
        });
      }
    } else throw new c.CredentialsProviderError(`Profile ${r} did not contain credential_process.`, {
      logger: logger
    });
  } else throw new c.CredentialsProviderError(`Profile ${r} could not be found in shared credentials file.`, {
    logger: logger
  });
};
var h = (r = {}) => async ({
  callerClientConfig: callerClientConfig
} = {}) => {
  r.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
  let o = await i.parseKnownFiles(r);
  return u(i.getProfileName({
    profile: r.profile ?? callerClientConfig?.profile
  }), o, r.logger);
};
export { h as fromProcess };