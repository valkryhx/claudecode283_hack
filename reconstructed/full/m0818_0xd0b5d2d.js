// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  hy
} from "B:/~BUN/root/chunk-1kg6h1n1.js";
import {
  sdn
} from "B:/~BUN/root/chunk-szv5cfen.js";
import {
  cFe
} from "B:/~BUN/root/chunk-qyj6hmh7.js";
import {
  tC
} from "B:/~BUN/root/chunk-ywvtswng.js";
import {
  Ef
} from "B:/~BUN/root/chunk-ydt4z4fm.js";
import {
  cf
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  be
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var a = be(tC());
var c = cf(),
  d = hy(),
  l = Ef(),
  u = tC(),
  S = cFe();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g,"_").toUpperCase()}`;
var r = g;
var s = be(Ef()),
  rdn = ({
    logger: e,
    signingName: n
  } = {}) => async () => {
    if (e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
      logger: e
    });
    let t = r(n);
    if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, {
      logger: e
    });
    let o = {
      token: process.env[t]
    };
    return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o
  };
var i = be(Ef());
var odn = (e = {}) => i.memoize(i.chain(sdn(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", !1)
}), (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000, (n) => n.expiration !== void 0);
export {
  rdn,
  odn
};
