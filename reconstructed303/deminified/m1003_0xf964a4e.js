// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nwe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { PO } from "B:/~BUN/root/chunk-zjz6e5je.js";
import { WT } from "B:/~BUN/root/chunk-7q18tptd.js";
import "B:/~BUN/root/chunk-h938nwmq.js";
import { RFt as sha256 } from "B:/~BUN/root/chunk-3535h231.js";
import "B:/~BUN/root/chunk-ypm4v5fq.js";
import { jC } from "B:/~BUN/root/chunk-j4qesy5s.js";
import { RXe } from "B:/~BUN/root/chunk-fcp3ccp8.js";
import "B:/~BUN/root/chunk-ckxm3hbs.js";
import "B:/~BUN/root/chunk-zsggna52.js";
import { bg } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { PTe } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { Zn, zu } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var d = e => (d = Array.isArray, d(e)),
  A = d;
var I = Symbol.for("brand.privateNullableHeaders");
function* M(e) {
  if (!e) return;
  if (I in e) {
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
      if (t && !s) s = !0, yield [o, w];
      yield [o, a];
    }
  }
}
var w = Symbol("clear"),
  Q = new Set(["x-stainless-helper"]),
  J = (e, t) => {
    let r = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let n of t.split(",").map(item => item.trim())) if (n && !r.includes(n)) r.push(n);
    return r.join(", ");
  },
  E = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let n of e) {
      let o = new Set();
      for (let [i, s] of M(n)) {
        let a = i.toLowerCase();
        if (Q.has(a)) {
          if (s === w) continue;
          if (s === null) t.delete(i), nulls_2.add(a);else t.set(i, J(t.get(i), s)), nulls_2.delete(a);
          continue;
        }
        if (s === w || !o.has(a)) {
          if (t.delete(i), o.add(a), s === w) continue;
        }
        if (s === null) t.delete(i), nulls_2.add(a);else t.append(i, s), nulls_2.delete(a);
      }
    }
    return {
      [I]: !0,
      values: t,
      nulls: nulls_2
    };
  };
var f = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var T = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};
function p() {}
function b(e, t, r) {
  if (!t || T[e] > T[r]) return p;else return t[e].bind(t);
}
var Y = {
    error: p,
    warn: p,
    info: p,
    debug: p
  },
  weakMap = new WeakMap();
function X(e, t) {
  let r = weakMap.get(e);
  if (r && r[0] === t) return r[1];
  let n = {
    error: b("error", e, t),
    warn: b("warn", e, t),
    info: b("info", e, t),
    debug: b("debug", e, t)
  };
  return weakMap.set(e, [t, n]), n;
}
function _(e) {
  let logger = e.logger,
    r = e.logLevel ?? "off";
  if (!logger) return Y;
  return X(logger, r);
}
var H = ve(PO(), 1),
  g = ve(WT(), 1);
var k = ve(PTe(), 1),
  N = ve(bg(), 1),
  D = ve(RXe(), 1);
import ee from "assert";
var j = e => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      let t = Object.prototype.toString.call(e);
      if (t === "[object Error]" || t === "[object DOMException]") {
        let r = Error(e.message, e.cause ? {
          cause: e.cause
        } : {});
        if (e.stack) r.stack = e.stack;
        if (e.cause && !r.cause) r.cause = e.cause;
        if (e.name) r.name = e.name;
        return r;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};
var te = (profile, logger_2) => import("B:/~BUN/root/chunk-p2g0ykxb.js").then(({
    createCredentialChain: createCredentialChain,
    fromEnv: fromEnv,
    fromNodeProviderChain: fromNodeProviderChain
  }) => {
    let i = fromNodeProviderChain({
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
          requestInit: s => ({
            ...s
          })
        })
      }
    });
    if (profile != null) return i;
    return createCredentialChain(fromEnv(logger_2 != null ? {
      logger: logger_2
    } : {}), i);
  }).catch(r => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
  }),
  F = async (e, t) => {
    ee(e.method, "Expected request method property to be set");
    let credentials;
    if (t.awsAccessKey && t.awsSecretAccessKey) credentials = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretAccessKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else {
      let c = await (t.providerChainResolver ? t.providerChainResolver() : te(t.awsProfile, t.logger));
      try {
        credentials = await c();
      } catch (error) {
        throw new zu({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: j(error)
        });
      }
    }
    let n = new D.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials: credentials,
        sha256: sha256
      }),
      o = new URL(t.url),
      headers = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(item => [...item])) : {
        ...e.headers
      };
    delete headers.connection, headers.host = o.host;
    let query = Object.fromEntries([...new Set(o.searchParams.keys())].map(item => [item, o.searchParams.getAll(item)])),
      a = new N.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: o.protocol,
        path: o.pathname,
        query: query,
        headers: headers,
        body: e.body
      });
    return (await n.sign(a)).headers;
  };
var re = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  S,
  L,
  serviceName = "aws-external-anthropic",
  P = () => new Zn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, configure a `region` for your profile in `~/.aws/config`, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.");
class U extends Nwe {
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
    credentials: credentials_2,
    config: config,
    profile: profile_2,
    ...O
  } = {}) {
    let h = awsRegion ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION"),
      baseURL_3 = baseURL ?? f("ANTHROPIC_AWS_BASE_URL"),
      baseURL_2;
    if (baseURL_3) baseURL_2 = baseURL_3;else if (h) baseURL_2 = `https://aws-external-anthropic.${h}.api.aws`;else baseURL_2 = void 0;
    let W = apiKey != null;
    if (awsAccessKey != null !== (awsSecretAccessKey != null)) throw new Zn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
    let G = awsAccessKey != null && awsSecretAccessKey != null,
      V = awsProfile != null,
      u;
    if (W) u = apiKey;else if (!G && !V) u = f("ANTHROPIC_AWS_API_KEY") ?? void 0;
    let workspaceId_2 = workspaceId ?? f("ANTHROPIC_AWS_WORKSPACE_ID");
    if (!workspaceId_2 && !skipAuth) throw new Zn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.");
    super({
      apiKey: u ?? null,
      authToken: null,
      baseURL: baseURL_2,
      ...O,
      defaultHeaders: E([O.defaultHeaders, {
        "anthropic-workspace-id": workspaceId_2
      }])
    });
    if (S.add(this), this.skipAuth = !1, credentials_2 != null || config != null || profile_2 != null) _(this).warn("`credentials`, `config`, and `profile` are not supported by the AWS client and were ignored. Authenticate with `apiKey` or AWS credentials (SigV4) instead.");
    this._baseURLIsExplicit = !!baseURL_3, this.awsRegion = h, this.awsAccessKey = awsAccessKey, this.awsSecretAccessKey = awsSecretAccessKey, this.awsSessionToken = awsSessionToken, this.awsProfile = awsProfile ?? null, this.providerChainResolver = providerChainResolver, this.workspaceId = workspaceId_2, this.skipAuth = skipAuth, this._useSigV4 = u == null;
    let q = {
      ...this._options,
      apiKey: u ?? null,
      baseURL: baseURL_3,
      awsRegion: awsRegion,
      awsAccessKey: awsAccessKey,
      awsSecretAccessKey: awsSecretAccessKey,
      awsSessionToken: awsSessionToken,
      awsProfile: awsProfile,
      providerChainResolver: providerChainResolver,
      workspaceId: workspaceId_2,
      skipAuth: skipAuth
    };
    if (this._options = q, h || baseURL_3 || skipAuth) this.ready = Promise.resolve();else this.ready = this._resolveRegionFromConfig(awsProfile).then(C => {
      this.awsRegion = C, this.baseURL = `https://aws-external-anthropic.${C}.api.aws`;
    }), this.ready.catch(() => {});
  }
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  withOptions(e) {
    return super.withOptions({
      awsRegion: this.awsRegion,
      ...e
    });
  }
  _resolveRegionFromConfig(profile_3) {
    return H.loadConfig({
      ...g.NODE_REGION_CONFIG_OPTIONS,
      default: () => {
        throw P();
      }
    }, {
      ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...(profile_3 && {
        profile: profile_3
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
  getUserAgent() {
    return `AnthropicAws/JS ${jC}`;
  }
  backendMiddleware() {
    return [async (e, t) => t(await re(this, S, "m", L).call(this, e))];
  }
}
S = new WeakSet(), L = async function (t) {
  if (this.skipAuth || !this._useSigV4) return t;
  if (!this.awsRegion) throw P();
  let r = await F(t, {
    url: t.url,
    regionName: this.awsRegion,
    serviceName: serviceName,
    awsAccessKey: this.awsAccessKey,
    awsSecretAccessKey: this.awsSecretAccessKey,
    awsSessionToken: this.awsSessionToken,
    awsProfile: this.awsProfile,
    providerChainResolver: this.providerChainResolver,
    logger: _(this)
  });
  return {
    ...t,
    headers: E([t.headers, r]).values
  };
};
export { U as AnthropicAws };