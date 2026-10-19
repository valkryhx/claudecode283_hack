// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { XZ, pct, JZ, fct } from "B:/~BUN/root/chunk-8w42v0dp.js";
import "B:/~BUN/root/chunk-h938nwmq.js";
import { RFt as sha256 } from "B:/~BUN/root/chunk-3535h231.js";
import "B:/~BUN/root/chunk-ypm4v5fq.js";
import { KKn, JU, oHt, sHt, iHt, aHt, lHt, dHt } from "B:/~BUN/root/chunk-fp5pkgt8.js";
import "B:/~BUN/root/chunk-7q18tptd.js";
import "B:/~BUN/root/chunk-r9g5axec.js";
import "B:/~BUN/root/chunk-6etjgqgz.js";
import "B:/~BUN/root/chunk-zsggna52.js";
import "B:/~BUN/root/chunk-wtj2nxpk.js";
import "B:/~BUN/root/chunk-8ge06773.js";
import "B:/~BUN/root/chunk-zjz6e5je.js";
import { jC } from "B:/~BUN/root/chunk-j4qesy5s.js";
import "B:/~BUN/root/chunk-caya68ws.js";
import { RXe } from "B:/~BUN/root/chunk-fcp3ccp8.js";
import { Vc } from "B:/~BUN/root/chunk-bsy8eq8a.js";
import "B:/~BUN/root/chunk-w57yz5h3.js";
import "B:/~BUN/root/chunk-ckxm3hbs.js";
import { bg } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { rP, PTe } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { Zn, zu } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var D = ve(PTe(), 1),
  K = ve(bg(), 1),
  M = ve(RXe(), 1);
import de from "assert";
function j(e) {
  return typeof e === "object" && e !== null && ("name" in e && e.name === "AbortError" || "message" in e && String(e.message).includes("FetchRequestCanceledException"));
}
var x = e => {
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
var ue = logger => import("B:/~BUN/root/chunk-p2g0ykxb.js").then(({
    createCredentialChain: createCredentialChain,
    fromEnv: fromEnv,
    fromNodeProviderChain: fromNodeProviderChain
  }) => createCredentialChain(fromEnv(logger != null ? {
    logger: logger
  } : {}), fromNodeProviderChain({
    ...(logger != null ? {
      logger: logger
    } : {}),
    clientConfig: {
      ...(logger != null ? {
        logger: logger
      } : {}),
      requestHandler: new D.FetchHttpHandler({
        requestInit: s => ({
          ...s
        })
      })
    }
  }))).catch(t => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${t.message}`);
  }),
  U = async (e, t) => {
    de(e.method, "Expected request method property to be set");
    let credentials;
    if (t.awsAccessKey && t.awsSecretKey) credentials = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else {
      let l = await (t.providerChainResolver ? t.providerChainResolver() : ue(t.logger));
      try {
        credentials = await l();
      } catch (error) {
        throw new zu({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: x(error)
        });
      }
    }
    let n = new M.SignatureV4({
        service: "bedrock",
        region: t.regionName,
        credentials: credentials,
        sha256: sha256
      }),
      s = new URL(t.url),
      headers = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(item => [...item])) : {
        ...e.headers
      };
    delete headers.connection, headers.host = s.host;
    let query = Object.fromEntries([...new Set(s.searchParams.keys())].map(item => [item, s.searchParams.getAll(item)])),
      a = new K.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: query,
        headers: headers,
        body: e.body
      });
    return (await n.sign(a)).headers;
  };
var k = ve(rP(), 1),
  J = ve(PTe(), 1);
var c = ve(Vc(), 1);
var he = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString
      });
    Object.assign(r, s);
    let o = new oHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  pe = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString,
        originalMessage: c.expectString,
        originalStatusCode: c.expectInt32
      });
    Object.assign(r, s);
    let o = new dHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  fe = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString
      });
    Object.assign(r, s);
    let o = new lHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  me = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString
      });
    Object.assign(r, s);
    let o = new aHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  ye = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString
      });
    Object.assign(r, s);
    let o = new sHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  we = async (e, t) => {
    let r = c.map({}),
      n = e.body,
      s = c.take(n, {
        message: c.expectString
      });
    Object.assign(r, s);
    let o = new iHt({
      $metadata: b(e),
      ...r
    });
    return c.decorateServiceException(o, e.body);
  },
  F = ($unknown, t) => t.eventStreamMarshaller.deserialize($unknown, async r => {
    if (r.chunk != null) return {
      chunk: await Se(r.chunk, t)
    };
    if (r.internalServerException != null) return {
      internalServerException: await be(r.internalServerException, t)
    };
    if (r.modelStreamErrorException != null) return {
      modelStreamErrorException: await ge(r.modelStreamErrorException, t)
    };
    if (r.validationException != null) return {
      validationException: await Re(r.validationException, t)
    };
    if (r.throttlingException != null) return {
      throttlingException: await Ae(r.throttlingException, t)
    };
    if (r.modelTimeoutException != null) return {
      modelTimeoutException: await Ee(r.modelTimeoutException, t)
    };
    if (r.serviceUnavailableException != null) return {
      serviceUnavailableException: await xe(r.serviceUnavailableException, t)
    };
    return {
      $unknown: $unknown
    };
  }),
  be = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return he(r, t);
  },
  ge = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return pe(r, t);
  },
  Ee = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return fe(r, t);
  },
  Se = async (e, t) => {
    let r = {},
      n = await w(e.body, t);
    return Object.assign(r, _e(n, t)), r;
  },
  xe = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return me(r, t);
  },
  Ae = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return ye(r, t);
  },
  Re = async (e, t) => {
    let r = {
      ...e,
      body: await w(e.body, t)
    };
    return we(r, t);
  },
  _e = (e, t) => c.take(e, {
    bytes: t.base64Decoder
  }),
  b = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"] ?? "",
    extendedRequestId: e.headers["x-amz-id-2"] ?? "",
    cfId: e.headers["x-amz-cf-id"] ?? ""
  }),
  ke = (e, t) => c.collectBody(e, t).then(r => t.utf8Encoder(r)),
  w = (e, t) => ke(e, t).then(r => {
    if (r.length) return JSON.parse(r);
    return {};
  });
function Oe(...e) {
  let ReadableStream = globalThis.ReadableStream;
  if (typeof ReadableStream > "u") throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  return new ReadableStream(...e);
}
function W(e) {
  let t = Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator]();
  return Oe({
    start() {},
    async pull(r) {
      let {
        done: done,
        value: value
      } = await t.next();
      if (done) r.close();else r.enqueue(value);
    },
    async cancel() {
      await t.return?.();
    }
  });
}
function z(e) {
  if (e[Symbol.asyncIterator]) return e;
  let t = e.getReader();
  return {
    async next() {
      try {
        let r = await t.read();
        if (r?.done) t.releaseLock();
        return r;
      } catch (error) {
        throw t.releaseLock(), error;
      }
    },
    async return() {
      let r = t.cancel();
      return t.releaseLock(), await r, {
        done: !0,
        value: void 0
      };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
var N = e => (N = Array.isArray, N(e)),
  P = N;
function A(e) {
  return e != null && typeof e === "object" && !Array.isArray(e);
}
var R = e => {
  try {
    return JSON.parse(e);
  } catch (error) {
    return;
  }
};
var utf8Encoder = e => new TextDecoder("utf-8").decode(e),
  utf8Decoder = e => new TextEncoder().encode(e),
  Ce = () => {
    let eventStreamMarshaller = new KKn({
      utf8Encoder: utf8Encoder,
      utf8Decoder: utf8Decoder
    });
    return {
      base64Decoder: k.fromBase64,
      base64Encoder: k.toBase64,
      utf8Decoder: utf8Decoder,
      utf8Encoder: utf8Encoder,
      eventStreamMarshaller: eventStreamMarshaller,
      streamCollector: J.streamCollector
    };
  };
function G(e) {
  let t = e.body;
  if (!t) return e;
  async function* r() {
    let o = F(z(t), Ce());
    try {
      for await (let i of o) if (i.chunk && i.chunk.bytes) {
        let a = utf8Encoder(i.chunk.bytes),
          d = R(a);
        if (d === void 0) throw new Zn(`Could not parse a Bedrock chunk into JSON: ${a}`);
        let l = A(d) && typeof d.type === "string" ? d.type : null;
        if (l != null) yield utf8Decoder(`event: ${l}
data: ${JSON.stringify(d)}

`);
      }
    } catch (i) {
      let error_2 = Te(i);
      if (!error_2) throw i;
      yield utf8Decoder(`event: error
data: ${JSON.stringify({
        type: "error",
        error: error_2
      })}

`);
    }
  }
  let headers_2 = new Headers(e.headers);
  headers_2.set("content-type", "text/event-stream; charset=utf-8"), headers_2.delete("content-length");
  let response = new Response(W(r()), {
    status: e.status,
    statusText: e.statusText,
    headers: headers_2
  });
  return Object.defineProperty(response, "url", {
    value: e.url
  }), response;
}
function Te(e) {
  if (e instanceof JU) return {
    type: e.name.charAt(0).toLowerCase() + e.name.slice(1),
    message: e.message
  };
  if (e instanceof Error && Object.getPrototypeOf(e) === Error.prototype && e.name !== "Error" && !j(e)) return {
    type: e.name,
    message: e.message
  };
  return;
}
var f = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var V = Symbol.for("brand.privateNullableHeaders");
function* Ie(e) {
  if (!e) return;
  if (V in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let o of nulls) yield [o, null];
    return;
  }
  let t = !1,
    r;
  if (e instanceof Headers) r = e.entries();else if (P(e)) r = e;else t = !0, r = Object.entries(e ?? {});
  for (let n of r) {
    let s = n[0];
    if (typeof s !== "string") throw TypeError("expected header name to be a string");
    let o = P(n[1]) ? n[1] : [n[1]],
      i = !1;
    for (let a of o) {
      if (a === void 0) continue;
      if (t && !i) i = !0, yield [s, O];
      yield [s, a];
    }
  }
}
var O = Symbol("clear"),
  Ne = new Set(["x-stainless-helper"]),
  Pe = (e, t) => {
    let r = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let n of t.split(",").map(item => item.trim())) if (n && !r.includes(n)) r.push(n);
    return r.join(", ");
  },
  g = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let n of e) {
      let s = new Set();
      for (let [o, i] of Ie(n)) {
        let a = o.toLowerCase();
        if (Ne.has(a)) {
          if (i === O) continue;
          if (i === null) t.delete(o), nulls_2.add(a);else t.set(o, Pe(t.get(o), i)), nulls_2.delete(a);
          continue;
        }
        if (i === O || !s.has(a)) {
          if (t.delete(o), s.add(a), i === O) continue;
        }
        if (i === null) t.delete(o), nulls_2.add(a);else t.append(o, i), nulls_2.delete(a);
      }
    }
    return {
      [V]: !0,
      values: t,
      nulls: nulls_2
    };
  };
function Y(e) {
  return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var q = Object.freeze(Object.create(null)),
  Be = (e = Y) => function (r, ...n) {
    if (r.length === 1) return r[0];
    let s = !1,
      o = [],
      i = r.reduce((acc, item, m) => {
        if (/[?#]/.test(item)) s = !0;
        let h = n[m],
          y = (s ? encodeURIComponent : e)("" + h);
        if (m !== n.length && (h == null || typeof h === "object" && h.toString === Object.getPrototypeOf(Object.getPrototypeOf(h.hasOwnProperty ?? q) ?? q)?.toString)) y = h + "", o.push({
          start: acc.length + item.length,
          length: y.length,
          error: `Value of type ${Object.prototype.toString.call(h).slice(8, -1)} is not a valid path parameter`
        });
        return acc + item + (m === n.length ? "" : y);
      }, ""),
      a = i.split(/[?#]/, 1)[0],
      d = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
      l;
    while ((l = d.exec(a)) !== null) o.push({
      start: l.index,
      length: l[0].length,
      error: `Value "${l[0]}" can't be safely passed as a path parameter`
    });
    if (o.sort((itemA, itemB) => itemA.start - itemB.start), o.length > 0) {
      let u = 0,
        p = o.reduce((acc, item) => {
          let y = " ".repeat(item.start - u),
            I = "^".repeat(item.length);
          return u = item.start + item.length, acc + y + I;
        }, "");
      throw new Zn(`Path parameters result in path with invalid segments:
${o.map(item => item.error).join(`
`)}
${i}
${p}`);
    }
    return i;
  },
  L = Be(Y);
var Z = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};
function E() {}
function C(e, t, r) {
  if (!t || Z[e] > Z[r]) return E;else return t[e].bind(t);
}
var Le = {
    error: E,
    warn: E,
    info: E,
    debug: E
  },
  weakMap = new WeakMap();
function He(e, t) {
  let r = weakMap.get(e);
  if (r && r[0] === t) return r[1];
  let n = {
    error: C("error", e, t),
    warn: C("warn", e, t),
    info: C("info", e, t),
    debug: C("debug", e, t)
  };
  return weakMap.set(e, [t, n]), n;
}
function S(e) {
  let logger_2 = e.logger,
    r = e.logLevel ?? "off";
  if (!logger_2) return Le;
  return He(logger_2, r);
}
var X = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  T,
  ee,
  te,
  $e = "bedrock-2023-05-31",
  De = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
class re extends fct {
  constructor({
    awsRegion = f("AWS_REGION") ?? "us-east-1",
    baseURL = f("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${awsRegion}.amazonaws.com`,
    apiKey = f("AWS_BEARER_TOKEN_BEDROCK"),
    awsSecretKey = null,
    awsAccessKey = null,
    awsSessionToken = null,
    providerChainResolver = null,
    ...a
  } = {}) {
    super({
      baseURL: baseURL,
      authToken: apiKey ?? null,
      apiKey: null,
      ...a
    });
    T.add(this), this.skipAuth = !1, this.messages = Ke(this), this.completions = new pct(this), this.beta = Me(this);
    let d = awsAccessKey != null,
      l = awsSecretKey != null;
    if (d !== l) S(this).warn("Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. Please provide both keys, or provide neither and rely on the AWS credential provider chain.");
    this.awsSecretKey = awsSecretKey, this.awsAccessKey = awsAccessKey, this.awsRegion = awsRegion, this.awsSessionToken = awsSessionToken, this.skipAuth = a.skipAuth ?? !1, this.providerChainResolver = providerChainResolver;
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  getUserAgent() {
    return `AnthropicBedrock/JS ${jC}`;
  }
  async authHeaders(e) {
    return this.skipAuth ? void 0 : super.authHeaders(e);
  }
  backendMiddleware() {
    return [async (e, t, r) => {
      let n = await t(await X(this, T, "m", ee).call(this, e, r.options));
      return X(this, T, "m", te).call(this, n);
    }];
  }
}
T = new WeakSet(), ee = async function (t, r) {
  let n = new URL(t.url),
    headers_3 = new Headers(t.headers),
    o;
  if (typeof t.body === "string") {
    let a = R(t.body);
    if (A(a)) o = a;
  }
  if (o) {
    if (!o.anthropic_version) o.anthropic_version = $e;
    let a = headers_3.get("anthropic-beta");
    if (a != null && !o.anthropic_beta) o.anthropic_beta = a.split(",").map(item => item.trim());
  }
  if (r && De.has(r.path) && r.method === "post") {
    let a = r.path.split("?")[0];
    if (n.pathname.endsWith(a)) {
      if (!o) throw Error(`Expected request body to be a JSON object for post ${a}`);
      let model = o.model;
      delete o.model;
      let stream = o.stream;
      delete o.stream;
      let u = n.pathname.slice(0, n.pathname.length - a.length);
      n.pathname = u + (stream ? L`/model/${model}/invoke-with-response-stream` : L`/model/${model}/invoke`), n.searchParams.delete("beta");
    }
  }
  let i = {
    ...t,
    url: n.toString(),
    headers: headers_3
  };
  if (o) i.body = JSON.stringify(o);
  if (!this.skipAuth && !this.authToken) {
    let a = this.awsRegion;
    if (!a) throw Error("Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present");
    let d = await U(i, {
      url: i.url,
      regionName: a,
      awsAccessKey: this.awsAccessKey,
      awsSecretKey: this.awsSecretKey,
      awsSessionToken: this.awsSessionToken,
      fetchOptions: this.fetchOptions,
      providerChainResolver: this.providerChainResolver,
      logger: S(this)
    });
    i.headers = g([i.headers, d]).values;
  }
  return i;
}, te = function (t) {
  if (t.body && t.headers.get("content-type")?.includes("application/vnd.amazon.eventstream")) return G(t);
  return t;
};
function Ke(e) {
  let t = new JZ(e);
  return delete t.batches, delete t.countTokens, t;
}
function Me(e) {
  let t = new XZ(e);
  return delete t.promptCaching, delete t.messages.batches, delete t.messages.countTokens, t;
}
var ne = ve(PTe(), 1),
  oe = ve(bg(), 1),
  se = ve(RXe(), 1);
import Ue from "assert";
var Fe = (profile, logger_3) => import("B:/~BUN/root/chunk-p2g0ykxb.js").then(({
    createCredentialChain: createCredentialChain_2,
    fromEnv: fromEnv_2,
    fromNodeProviderChain: fromNodeProviderChain_2
  }) => {
    let o = fromNodeProviderChain_2({
      ...(profile != null ? {
        profile: profile
      } : {}),
      ...(logger_3 != null ? {
        logger: logger_3
      } : {}),
      clientConfig: {
        ...(logger_3 != null ? {
          logger: logger_3
        } : {}),
        requestHandler: new ne.FetchHttpHandler({
          requestInit: i => ({
            ...i
          })
        })
      }
    });
    if (profile != null) return o;
    return createCredentialChain_2(fromEnv_2(logger_3 != null ? {
      logger: logger_3
    } : {}), o);
  }).catch(r => {
    throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
  }),
  ae = async (e, t) => {
    Ue(e.method, "Expected request method property to be set");
    let credentials_2;
    if (t.awsAccessKey && t.awsSecretAccessKey) credentials_2 = {
      accessKeyId: t.awsAccessKey,
      secretAccessKey: t.awsSecretAccessKey,
      ...(t.awsSessionToken != null && {
        sessionToken: t.awsSessionToken
      })
    };else {
      let l = await (t.providerChainResolver ? t.providerChainResolver() : Fe(t.awsProfile, t.logger));
      try {
        credentials_2 = await l();
      } catch (error) {
        throw new zu({
          message: "Failed to resolve AWS credentials from the credential provider chain.",
          cause: x(error)
        });
      }
    }
    let n = new se.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials: credentials_2,
        sha256: sha256
      }),
      s = new URL(t.url),
      headers_4 = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(item => [...item])) : {
        ...e.headers
      };
    delete headers_4.connection, headers_4.host = s.host;
    let query_2 = Object.fromEntries([...new Set(s.searchParams.keys())].map(item => [item, s.searchParams.getAll(item)])),
      a = new oe.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: query_2,
        headers: headers_4,
        body: e.body
      });
    return (await n.sign(a)).headers;
  };
var We = function (e, t, r, n) {
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
  },
  H,
  ie,
  serviceName = "bedrock-mantle";
class ce extends fct {
  constructor({
    awsRegion: awsRegion_2,
    baseURL: baseURL_2,
    apiKey: apiKey_2,
    awsAccessKey: awsAccessKey_2 = null,
    awsSecretAccessKey = null,
    awsSessionToken: awsSessionToken_2 = null,
    awsProfile: awsProfile,
    providerChainResolver: providerChainResolver_2 = null,
    skipAuth = !1,
    ...l
  } = {}) {
    let u = awsRegion_2 ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION"),
      baseURL_3 = baseURL_2 ?? f("ANTHROPIC_BEDROCK_MANTLE_BASE_URL") ?? (u ? `https://bedrock-mantle.${u}.api.aws/anthropic` : void 0);
    if (!baseURL_3) throw new Zn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` environment variable.");
    let m = apiKey_2 != null;
    if (awsAccessKey_2 != null !== (awsSecretAccessKey != null)) throw new Zn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
    let y = awsAccessKey_2 != null && awsSecretAccessKey != null,
      I = awsProfile != null,
      v;
    if (m) v = apiKey_2;else if (!y && !I) v = f("AWS_BEARER_TOKEN_BEDROCK") ?? void 0;
    super({
      apiKey: v ?? null,
      authToken: null,
      baseURL: baseURL_3,
      ...l
    });
    H.add(this), this.messages = new JZ(this), this.beta = Je(this), this.skipAuth = !1, this.awsRegion = u, this.awsAccessKey = awsAccessKey_2, this.awsSecretAccessKey = awsSecretAccessKey, this.awsSessionToken = awsSessionToken_2, this.awsProfile = awsProfile ?? null, this.providerChainResolver = providerChainResolver_2, this.skipAuth = skipAuth, this._useSigV4 = v == null;
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    if (!this._useSigV4) return g([{
      Authorization: `Bearer ${this.apiKey}`
    }]);
    return;
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  getUserAgent() {
    return `AnthropicBedrockMantle/JS ${jC}`;
  }
  backendMiddleware() {
    return [async (e, t) => t(await We(this, H, "m", ie).call(this, e))];
  }
}
H = new WeakSet(), ie = async function (t) {
  if (this.skipAuth || !this._useSigV4) return t;
  let r = this.awsRegion;
  if (!r) throw new Zn("No AWS region found. Set `awsRegion` in the constructor or the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable.");
  let n = await ae(t, {
    url: t.url,
    regionName: r,
    serviceName: serviceName,
    awsAccessKey: this.awsAccessKey,
    awsSecretAccessKey: this.awsSecretAccessKey,
    awsSessionToken: this.awsSessionToken,
    awsProfile: this.awsProfile,
    providerChainResolver: this.providerChainResolver,
    logger: S(this)
  });
  return {
    ...t,
    headers: g([t.headers, n]).values
  };
};
function Je(e) {
  let {
    messages: messages
  } = new XZ(e);
  return {
    messages: messages
  };
}
export { re as AnthropicBedrock, ce as AnthropicBedrockMantle };