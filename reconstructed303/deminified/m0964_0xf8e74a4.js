// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { HS } from "B:/~BUN/root/chunk-r9g5axec.js";
import { e4n } from "B:/~BUN/root/chunk-8ge06773.js";
import { RXe } from "B:/~BUN/root/chunk-fcp3ccp8.js";
import { xO } from "B:/~BUN/root/chunk-b3v0tc9c.js";
import { pg } from "B:/~BUN/root/chunk-s9jfqk01.js";
import { bg } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var a = ve(xO());
var c = bg(),
  d = HS(),
  l = pg(),
  u = xO(),
  S = RXe();
var g = e => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = ve(pg()),
  JKn = ({
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
var i = ve(pg());
var QKn = (e = {}) => i.memoize(i.chain(e4n(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", !1);
}), n => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000, n => n.expiration !== void 0);
export { JKn, QKn };