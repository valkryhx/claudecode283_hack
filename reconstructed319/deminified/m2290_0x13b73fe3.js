// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { U1 } from "B:/~BUN/root/chunk-zhjjesee.js";
import { sxr } from "B:/~BUN/root/chunk-164n2nz2.js";
import { UL } from "B:/~BUN/root/chunk-cyskrr8y.js";
import { Wy } from "B:/~BUN/root/chunk-6mhfab6x.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var S = Oe(Wy()),
  m = Oe(U1());
var D = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
var y = Oe(UL());
var d = Oe(Wy()),
  F = Oe(U1()),
  tryNextLink = !1,
  O = async ({
    ssoStartUrl: ssoStartUrl,
    ssoSession: ssoSession,
    ssoAccountId: s,
    ssoRegion: ssoRegion,
    ssoRoleName: r,
    ssoClient: ssoClient,
    clientConfig: clientConfig,
    parentClientConfig: parentClientConfig,
    profile: profile,
    filepath: filepath,
    configFilepath: configFilepath,
    ignoreCache: ignoreCache,
    logger: logger
  }) => {
    let g,
      N = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (ssoSession) try {
      let c = await sxr({
        profile: profile,
        filepath: filepath,
        configFilepath: configFilepath,
        ignoreCache: ignoreCache
      })();
      g = {
        accessToken: c.token,
        expiresAt: new Date(c.expiration).toISOString()
      };
    } catch (error) {
      throw new d.CredentialsProviderError(error.message, {
        tryNextLink: tryNextLink,
        logger: logger
      });
    } else try {
      g = await F.getSSOTokenFromFile(ssoStartUrl);
    } catch (error) {
      throw new d.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
        tryNextLink: tryNextLink,
        logger: logger
      });
    }
    if (new Date(g.expiresAt).getTime() - Date.now() <= 0) throw new d.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
      tryNextLink: tryNextLink,
      logger: logger
    });
    let {
        accessToken: accessToken
      } = g,
      {
        SSOClient: SSOClient,
        GetRoleCredentialsCommand: GetRoleCredentialsCommand
      } = await import("B:/~BUN/root/chunk-yw3qcpxe.js"),
      w = ssoClient || new SSOClient(Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId: clientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
      })),
      I;
    try {
      I = await w.send(new GetRoleCredentialsCommand({
        accountId: s,
        roleName: r,
        accessToken: accessToken
      }));
    } catch (error) {
      throw new d.CredentialsProviderError(error, {
        tryNextLink: tryNextLink,
        logger: logger
      });
    }
    let {
      roleCredentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        sessionToken: sessionToken,
        expiration: expiration,
        credentialScope: credentialScope,
        accountId: accountId
      } = {}
    } = I;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) throw new d.CredentialsProviderError("SSO returns an invalid temporary credential.", {
      tryNextLink: tryNextLink,
      logger: logger
    });
    let x = {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      sessionToken: sessionToken,
      expiration: new Date(expiration),
      ...(credentialScope && {
        credentialScope: credentialScope
      }),
      ...(accountId && {
        accountId: accountId
      })
    };
    if (ssoSession) y.setCredentialFeature(x, "CREDENTIALS_SSO", "s");else y.setCredentialFeature(x, "CREDENTIALS_SSO_LEGACY", "u");
    return x;
  };
var M = Oe(Wy()),
  U = (e, logger_2) => {
    let {
      sso_start_url: sso_start_url,
      sso_account_id: sso_account_id,
      sso_region: sso_region,
      sso_role_name: sso_role_name
    } = e;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) throw new M.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
      tryNextLink: !1,
      logger: logger_2
    });
    return e;
  };
var Y = (e = {}) => async ({
  callerClientConfig: callerClientConfig
} = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
  let {
      ssoStartUrl: ssoStartUrl_2,
      ssoAccountId: ssoAccountId,
      ssoRegion: ssoRegion_2,
      ssoRoleName: ssoRoleName,
      ssoSession: ssoSession_2
    } = e,
    {
      ssoClient: ssoClient_2
    } = e,
    profile_2 = m.getProfileName({
      profile: e.profile ?? callerClientConfig?.profile
    });
  if (!ssoStartUrl_2 && !ssoAccountId && !ssoRegion_2 && !ssoRoleName && !ssoSession_2) {
    let o = (await m.parseKnownFiles(e))[profile_2];
    if (!o) throw new S.CredentialsProviderError(`Profile ${profile_2} was not found.`, {
      logger: e.logger
    });
    if (!D(o)) throw new S.CredentialsProviderError(`Profile ${profile_2} is not configured with SSO credentials.`, {
      logger: e.logger
    });
    if (o?.sso_session) {
      let p = (await m.loadSsoSessionData(e))[o.sso_session],
        w = ` configurations in profile ${profile_2} and sso-session ${o.sso_session}`;
      if (ssoRegion_2 && ssoRegion_2 !== p.sso_region) throw new S.CredentialsProviderError("Conflicting SSO region" + w, {
        tryNextLink: !1,
        logger: e.logger
      });
      if (ssoStartUrl_2 && ssoStartUrl_2 !== p.sso_start_url) throw new S.CredentialsProviderError("Conflicting SSO start_url" + w, {
        tryNextLink: !1,
        logger: e.logger
      });
      o.sso_region = p.sso_region, o.sso_start_url = p.sso_start_url;
    }
    let {
      sso_start_url: u,
      sso_account_id: l,
      sso_region: g,
      sso_role_name: N,
      sso_session: C
    } = U(o, e.logger);
    return O({
      ssoStartUrl: u,
      ssoSession: C,
      ssoAccountId: l,
      ssoRegion: g,
      ssoRoleName: N,
      ssoClient: ssoClient_2,
      clientConfig: e.clientConfig,
      parentClientConfig: e.parentClientConfig,
      profile: profile_2,
      filepath: e.filepath,
      configFilepath: e.configFilepath,
      ignoreCache: e.ignoreCache,
      logger: e.logger
    });
  } else if (!ssoStartUrl_2 || !ssoAccountId || !ssoRegion_2 || !ssoRoleName) throw new S.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
    tryNextLink: !1,
    logger: e.logger
  });else return O({
    ssoStartUrl: ssoStartUrl_2,
    ssoSession: ssoSession_2,
    ssoAccountId: ssoAccountId,
    ssoRegion: ssoRegion_2,
    ssoRoleName: ssoRoleName,
    ssoClient: ssoClient_2,
    clientConfig: e.clientConfig,
    parentClientConfig: e.parentClientConfig,
    profile: profile_2,
    filepath: e.filepath,
    configFilepath: e.configFilepath,
    ignoreCache: e.ignoreCache,
    logger: e.logger
  });
};
export { Y as fromSSO };