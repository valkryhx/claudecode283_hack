// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { VN } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { nC } from "B:/~BUN/root/chunk-bs1tcxg8.js";
import { Ow } from "B:/~BUN/root/chunk-6gdgzyty.js";
import "B:/~BUN/root/chunk-cs7ggjv6.js";
import { Lct as sha256 } from "B:/~BUN/root/chunk-fgkv30g2.js";
import "B:/~BUN/root/chunk-1tqc51sz.js";
import { cFe } from "B:/~BUN/root/chunk-qyj6hmh7.js";
import "B:/~BUN/root/chunk-ger4wyq2.js";
import "B:/~BUN/root/chunk-ne7hcw7b.js";
import { cf } from "B:/~BUN/root/chunk-2ppgegpr.js";
import "B:/~BUN/root/chunk-g1mh72ry.js";
import { mde } from "B:/~BUN/root/chunk-kbd7ddta.js";
import { Wn, Np } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var u = e => (u = Array.isArray, u(e)),
  A = u;
var O = Symbol.for("brand.privateNullableHeaders");
function* G(e) {
  if (!e) return;
  if (O in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let i of nulls) yield [i, null];
    return;
  }
  let t = !1,
    r;
  if (e instanceof Headers) r = e.entries();else if (A(e)) r = e;else t = !0, r = Object.entries(e ?? {});
  for (let n of r) {
    let o = n[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = A(n[1]) ? n[1] : [n[1]],
      s = !1;
    for (let a of i) {
      if (a === void 0) continue;
      if (t && !s) s = !0, yield [o, m];
      yield [o, a];
    }
  }
}
var m = Symbol("clear"),
  V = new Set(["x-stainless-helper"]),
  z = (e, t) => {
    let r = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let n of t.split(",").map(item => item.trim())) if (n && !r.includes(n)) r.push(n);
    return r.join(", ");
  },
  E = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let n of e) {
      let o = new Set();
      for (let [i, s] of G(n)) {
        let a = i.toLowerCase();
        if (V.has(a)) {
          if (s === m) continue;
          if (s === null) t.delete(i), nulls_2.add(a);else t.set(i, z(t.get(i), s)), nulls_2.delete(a);
          continue;
        }
        if (s === m || !o.has(a)) {
          if (t.delete(i), o.add(a), s === m) continue;
        }
        if (s === null) t.delete(i), nulls_2.add(a);else t.append(i, s), nulls_2.delete(a);
      }
    }
    return {
      [O]: !0,
      values: t,
      nulls: nulls_2
    };
  };
var c = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var C = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};
function d() {}
function w(e, t, r) {
  if (!t || C[e] > C[r]) return d;else return t[e].bind(t);
}
var q = {
    error: d,
    warn: d,
    info: d,
    debug: d
  },
  weakMap = new WeakMap();
function M(e, t) {
  let r = weakMap.get(e);
  if (r && r[0] === t) return r[1];
  let n = {
    error: w("error", e, t),
    warn: w("warn", e, t),
    info: w("info", e, t),
    debug: w("debug", e, t)
  };
  return weakMap.set(e, [t, n]), n;
}
function v(e) {
  let logger = e.logger,
    r = e.logLevel ?? "off";
  if (!logger) return q;
  return M(logger, r);
}
var H = be(nC(), 1),
  b = be(Ow(), 1);
var k = be(mde(), 1),
  j = be(cf(), 1),
  N = be(cFe(), 1);
import J from "assert";
var I = e => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      if (Object.prototype.toString.call(e) === "[object Error]") {
        let t = Error(e.message, e.cause ? {
          cause: e.cause
        } : {});
        if (e.stack) t.stack = e.stack;
        if (e.cause && !t.cause) t.cause = e.cause;
        if (e.name) t.name = e.name;
        return t;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};
var Y = (profile, logger_2) => import("B:/~BUN/root/chunk-dyaykyf3.js").then(({
    fromNodeProviderChain: fromNodeProviderChain
  }) => fromNodeProviderChain({
    ...(profile != null ? {
      profile: profile
    } : {}),
    ...(logger_2 != null ? {
      logger: logger_2
    } : {}),
    clientConfig: {
      ...(logger_2 != null ? {
        logger: logger_2
      } : {}),
      requestHandler: new k.FetchHttpHandler({
        requestInit: n => ({
          ...n
        })
      })
    }
  })).catch(r => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
  }),
  F = async (e, t) => {
    J(e.method, "Expected request method property to be set");
    let credentials;
    if (t.awsAccessKey && t.awsSecretAccessKey) credentials = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretAccessKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else {
      let f = await (t.providerChainResolver ? t.providerChainResolver() : Y(t.awsProfile, t.logger));
      try {
        credentials = await f();
      } catch (error) {
        throw new Np({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: I(error)
        });
      }
    }
    let n = new N.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials: credentials,
        sha256: sha256
      }),
      o = new URL(t.url),
      headers = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(item => [...item])) : {
        ...e.headers
      };
    delete headers.connection, headers.host = o.hostname;
    let query = {};
    o.searchParams.forEach((item, index) => {
      query[index] = item;
    });
    let a = new j.HttpRequest({
      method: e.method.toUpperCase(),
      protocol: o.protocol,
      path: o.pathname,
      query: query,
      headers: headers,
      body: e.body
    });
    return (await n.sign(a)).headers;
  };
var X = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  _,
  D,
  serviceName = "aws-external-anthropic",
  L = () => new Wn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, configure a `region` for your profile in `~/.aws/config`, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.");
class P extends VN {
  constructor({
    awsRegion: awsRegion,
    baseURL: baseURL,
    apiKey: apiKey,
    awsAccessKey = null,
    awsSecretAccessKey = null,
    awsSessionToken = null,
    awsProfile: awsProfile,
    providerChainResolver = null,
    workspaceId: workspaceId,
    skipAuth = !1,
    ...l
  } = {}) {
    let p = awsRegion ?? c("AWS_REGION") ?? c("AWS_DEFAULT_REGION"),
      g = baseURL ?? c("ANTHROPIC_AWS_BASE_URL"),
      baseURL_2;
    if (g) baseURL_2 = g;else if (p) baseURL_2 = `https://aws-external-anthropic.${p}.api.aws`;else baseURL_2 = void 0;
    let U = apiKey != null;
    if (awsAccessKey != null !== (awsSecretAccessKey != null)) throw new Wn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
    let B = awsAccessKey != null && awsSecretAccessKey != null,
      K = awsProfile != null,
      apiKey_2;
    if (U) apiKey_2 = apiKey;else if (!B && !K) apiKey_2 = c("ANTHROPIC_AWS_API_KEY") ?? void 0;
    let x = workspaceId ?? c("ANTHROPIC_AWS_WORKSPACE_ID");
    if (!x && !skipAuth) throw new Wn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.");
    super({
      apiKey: apiKey_2,
      baseURL: baseURL_2,
      ...l,
      defaultHeaders: E([{
        "anthropic-workspace-id": x
      }, l.defaultHeaders])
    });
    if (_.add(this), this.skipAuth = !1, this.awsRegion = p, this.awsAccessKey = awsAccessKey, this.awsSecretAccessKey = awsSecretAccessKey, this.awsSessionToken = awsSessionToken, this.awsProfile = awsProfile ?? null, this.providerChainResolver = providerChainResolver, this.workspaceId = x, this.skipAuth = skipAuth, this._useSigV4 = apiKey_2 == null, p || g || skipAuth) this.ready = Promise.resolve();else this.ready = this._resolveRegionFromConfig(awsProfile).then(R => {
      this.awsRegion = R, this.baseURL = `https://aws-external-anthropic.${R}.api.aws`;
    }), this.ready.catch(() => {});
  }
  _resolveRegionFromConfig(profile_2) {
    return H.loadConfig({
      ...b.NODE_REGION_CONFIG_OPTIONS,
      default: () => {
        throw L();
      }
    }, {
      ...b.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...(profile_2 && {
        profile: profile_2
      })
    })();
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await this.ready;
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    if (!this._useSigV4) return super.authHeaders(e);
    return;
  }
  validateHeaders() {}
  backendMiddleware() {
    return [async (e, t) => t(await X(this, _, "m", D).call(this, e))];
  }
}
_ = new WeakSet(), D = async function (t) {
  if (this.skipAuth || !this._useSigV4) return t;
  if (!this.awsRegion) throw L();
  let r = await F(t, {
    url: t.url,
    regionName: this.awsRegion,
    serviceName: serviceName,
    awsAccessKey: this.awsAccessKey,
    awsSecretAccessKey: this.awsSecretAccessKey,
    awsSessionToken: this.awsSessionToken,
    awsProfile: this.awsProfile,
    providerChainResolver: this.providerChainResolver,
    logger: v(this)
  });
  return {
    ...t,
    headers: E([t.headers, r]).values
  };
};
export { P as AnthropicAws };