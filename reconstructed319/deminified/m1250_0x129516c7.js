// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { uLe } from "B:/~BUN/root/chunk-yhafkw66.js";
import { ZAr } from "B:/~BUN/root/chunk-jkzpa2b5.js";
import { gO } from "B:/~BUN/root/chunk-1012essb.js";
import { xr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var M = /^[a-z][a-z0-9+.-]*:/i,
  D = e => M.test(e),
  y = e => (y = Array.isArray, y(e)),
  C = y;
var U = Symbol.for("brand.privateNullableHeaders");
function* q(e) {
  if (!e) return;
  if (U in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let s of nulls) yield [s, null];
    return;
  }
  let t = !1,
    o;
  if (e instanceof Headers) o = e.entries();else if (C(e)) o = e;else t = !0, o = Object.entries(e ?? {});
  for (let r of o) {
    let n = r[0];
    if (typeof n !== "string") throw TypeError("expected header name to be a string");
    let s = C(r[1]) ? r[1] : [r[1]],
      i = !1;
    for (let l of s) {
      if (l === void 0) continue;
      if (t && !i) i = !0, yield [n, _];
      yield [n, l];
    }
  }
}
var _ = Symbol("clear"),
  J = new Set(["x-stainless-helper"]),
  V = (e, t) => {
    let o = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let r of t.split(",").map(item => item.trim())) if (r && !o.includes(r)) o.push(r);
    return o.join(", ");
  },
  R = e => {
    let t = new Headers(),
      nulls_2 = new Set();
    for (let r of e) {
      let n = new Set();
      for (let [s, i] of q(r)) {
        let l = s.toLowerCase();
        if (J.has(l)) {
          if (i === _) continue;
          if (i === null) t.delete(s), nulls_2.add(l);else t.set(s, V(t.get(s), i)), nulls_2.delete(l);
          continue;
        }
        if (i === _ || !n.has(l)) {
          if (t.delete(s), n.add(l), i === _) continue;
        }
        if (i === null) t.delete(s), nulls_2.add(l);else t.append(s, i), nulls_2.delete(l);
      }
    }
    return {
      [U]: !0,
      values: t,
      nulls: nulls_2
    };
  };
var u = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var version = "0.2.0";
var L = Oe(ZAr(), 1),
  a = function (e, t, o, r, n) {
    if (r === "m") throw TypeError("Private method is not writable");
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a setter");
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? n.call(e, o) : n ? n.value = o : t.set(e, o), o;
  },
  f = function (e, t, o, r) {
    if (o === "a" && !r) throw TypeError("Private accessor was defined without a getter");
    if (typeof t === "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? r : o === "a" ? r.call(e) : r ? r.value : t.get(e);
  },
  c,
  p,
  O,
  E,
  d,
  b,
  m,
  g,
  T,
  B,
  scopes = "https://www.googleapis.com/auth/cloud-platform",
  X = "global",
  z = (e, t) => `https://claude.googleapis.com/v1/projects/${e}/locations/${t}`,
  N = (e, t, o) => `${z(e, t)}/workspaces/${o}/invoke`,
  G = (e, t) => `${z(e, t)}/claudeOrganization/invoke`,
  Z = "/v1/organizations/",
  F = "https://unresolved.invalid",
  H = "Set `project` or the `ANTHROPIC_GOOGLE_CLOUD_PROJECT` environment variable (or provide `baseURL`).",
  Y = ["apiKey", "authToken", "credentials", "config", "profile"];
class W extends uLe {
  _instrumentationScope() {
    return {
      platform: "google-cloud",
      version: version
    };
  }
  get completions() {
    throw new xr("The deprecated text Completions API is not available on Claude Platform on Google Cloud");
  }
  set completions(e) {}
  constructor({
    baseURL = u("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"),
    project = u("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ?? u("GOOGLE_CLOUD_PROJECT"),
    location = u("ANTHROPIC_GOOGLE_CLOUD_LOCATION"),
    workspaceId = u("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"),
    bearerTokenProvider: bearerTokenProvider,
    googleAuth: googleAuth,
    authClient: authClient,
    skipAuth = !1,
    ...k
  } = {}) {
    if (authClient && googleAuth) throw new xr("The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.");
    if (skipAuth && (bearerTokenProvider || googleAuth || authClient)) throw new xr("The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.");
    for (let x of Y) if (k[x] != null) throw new xr(`The \`${x}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`);
    location = location || X;
    let w = baseURL,
      S = !1;
    if (!w) if (project) {
      if (workspaceId) w = N(project, location, workspaceId);
    } else if (skipAuth) throw new xr(`No project was given. ${H}`);else S = !0;
    super({
      baseURL: w ?? null,
      ...k,
      apiKey: null,
      authToken: null,
      ...{
        __auth: {
          provider: null,
          tokenCache: null,
          resolution: null,
          error: null,
          extraHeaders: {}
        }
      }
    });
    if (c.add(this), p.set(this, void 0), O.set(this, void 0), E.set(this, void 0), d.set(this, void 0), b.set(this, void 0), m.set(this, F), this.project = project ?? null, this.location = location ?? null, this.workspaceId = workspaceId, this.skipAuth = skipAuth, a(this, p, bearerTokenProvider, "f"), a(this, O, googleAuth ?? null, "f"), a(this, E, authClient ?? null, "f"), !baseURL) {
      if (a(this, b, this.baseURL = w ?? F, "f"), project) a(this, m, G(project, location), "f");
    }
    let A;
    if (!skipAuth && !bearerTokenProvider) if (authClient) a(this, d, Promise.resolve(authClient), "f");else A = googleAuth ?? new L.GoogleAuth({
      scopes: scopes
    }), a(this, d, A.getClient(), "f"), f(this, d, "f").catch(() => {});
    if (!S) this.ready = Promise.resolve();else {
      let x = A ?? googleAuth ?? new L.GoogleAuth({
          scopes: scopes,
          ...(authClient ? {
            authClient: authClient
          } : {})
        }),
        v = location;
      this.ready = x.getProjectId().then(h => {
        if (this.project = h, f(this, c, "m", g).call(this)) return;
        if (a(this, m, G(h, v), "f"), workspaceId) a(this, b, this.baseURL = N(h, v, workspaceId), "f");
      }, h => {
        let j = new xr(`No project was given and it could not be resolved from Google credentials. ${H}`);
        throw j.cause = h, j;
      }), this.ready.catch(() => {});
    }
  }
  withOptions(e) {
    return super.withOptions({
      project: this.project ?? void 0,
      location: this.location ?? void 0,
      workspaceId: this.workspaceId,
      bearerTokenProvider: f(this, p, "f"),
      googleAuth: f(this, O, "f") ?? void 0,
      authClient: f(this, E, "f") ?? void 0,
      skipAuth: this.skipAuth,
      baseURL: f(this, c, "m", g).call(this) ? this.baseURL : void 0,
      ...e
    });
  }
  buildURL(e, t, o) {
    if (f(this, c, "m", g).call(this) || D(e)) return super.buildURL(e, t, o);
    if (e.startsWith(Z)) return super.buildURL(f(this, m, "f") + e, t, o);
    if (!this.workspaceId) throw new xr("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.");
    return super.buildURL(e, t, o);
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await f(this, c, "m", T).call(this);
  }
  async buildRequest(e, t = {}) {
    return await f(this, c, "m", T).call(this), await super.buildRequest(e, t);
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    let t = R([this._options.defaultHeaders, e.headers]);
    if (t.values.get("authorization") || t.nulls.has("authorization")) return;
    let o = await f(this, c, "m", B).call(this);
    return R([{
      Authorization: `Bearer ${o}`
    }]);
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicGoogleCloud/JS ${gO}`;
  }
}
p = new WeakMap(), O = new WeakMap(), E = new WeakMap(), d = new WeakMap(), b = new WeakMap(), m = new WeakMap(), c = new WeakSet(), g = function () {
  return this.baseURL !== f(this, b, "f");
}, T = async function () {
  if (!f(this, c, "m", g).call(this)) await this.ready;
}, B = async function () {
  if (f(this, p, "f")) return await f(this, p, "f").call(this);
  let t = await f(this, d, "f"),
    {
      token: token
    } = await t.getAccessToken();
  if (!token) throw new xr("Failed to obtain a Google access token from Application Default Credentials.");
  return token;
};
export { W as AnthropicGoogleCloud };