// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Hv } from "B:/~BUN/root/chunk-42c1jwrj.js";
import { sxr } from "B:/~BUN/root/chunk-164n2nz2.js";
import { bgt } from "B:/~BUN/root/chunk-e511v8pd.js";
import { UL } from "B:/~BUN/root/chunk-cyskrr8y.js";
import { Wy } from "B:/~BUN/root/chunk-6mhfab6x.js";
import { Zg } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var a = Oe(UL());
var c = Zg(),
  d = Hv(),
  l = Wy(),
  u = UL(),
  S = bgt();
var g = e => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = Oe(Wy()),
  rxr = ({
    logger: logger,
    signingName: signingName
  } = {}) => async () => {
    if (logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !signingName) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
      logger: logger
    });
    let t = r(signingName);
    if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, {
      logger: logger
    });
    let o = {
      token: process.env[t]
    };
    return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
  };
var i = Oe(Wy());
var oxr = (e = {}) => i.memoize(i.chain(sxr(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", !1);
}), n => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000, n => n.expiration !== void 0);
export { rxr, oxr };