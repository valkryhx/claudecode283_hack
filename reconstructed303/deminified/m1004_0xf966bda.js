// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nwe } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { qKn } from "B:/~BUN/root/chunk-rt8rx4y9.js";
import { jC } from "B:/~BUN/root/chunk-j4qesy5s.js";
import { Zn } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var p = e => (p = Array.isArray, p(e)),
  O = p;
var R = Symbol.for("brand.privateNullableHeaders");
function* F(e) {
  if (!e) return;
  if (R in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let s of nulls) yield [s, null];
    return;
  }
  let o = !1,
    t;
  if (e instanceof Headers) t = e.entries();else if (O(e)) t = e;else o = !0, t = Object.entries(e ?? {});
  for (let r of t) {
    let n = r[0];
    if (typeof n !== "string") throw TypeError("expected header name to be a string");
    let s = O(r[1]) ? r[1] : [r[1]],
      i = !1;
    for (let f of s) {
      if (f === void 0) continue;
      if (o && !i) i = !0, yield [n, m];
      yield [n, f];
    }
  }
}
var m = Symbol("clear"),
  G = new Set(["x-stainless-helper"]),
  H = (e, o) => {
    let t = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let r of o.split(",").map(item => item.trim())) if (r && !t.includes(r)) t.push(r);
    return t.join(", ");
  },
  E = e => {
    let o = new Headers(),
      nulls_2 = new Set();
    for (let r of e) {
      let n = new Set();
      for (let [s, i] of F(r)) {
        let f = s.toLowerCase();
        if (G.has(f)) {
          if (i === m) continue;
          if (i === null) o.delete(s), nulls_2.add(f);else o.set(s, H(o.get(s), i)), nulls_2.delete(f);
          continue;
        }
        if (i === m || !n.has(f)) {
          if (o.delete(s), n.add(f), i === m) continue;
        }
        if (i === null) o.delete(s), nulls_2.add(f);else o.append(s, i), nulls_2.delete(f);
      }
    }
    return {
      [R]: !0,
      values: o,
      nulls: nulls_2
    };
  };
var l = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var A = ve(qKn(), 1),
  c = function (e, o, t, r, n) {
    if (r === "m") throw TypeError("Private method is not writable");
    if (r === "a" && !n) throw TypeError("Private accessor was defined without a setter");
    if (typeof o === "function" ? e !== o || !n : !o.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
    return r === "a" ? n.call(e, t) : n ? n.value = t : o.set(e, t), t;
  },
  a = function (e, o, t, r) {
    if (t === "a" && !r) throw TypeError("Private accessor was defined without a getter");
    if (typeof o === "function" ? e !== o || !r : !o.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
    return t === "m" ? r : t === "a" ? r.call(e) : r ? r.value : o.get(e);
  },
  C,
  d,
  b,
  g,
  u,
  w,
  v,
  scopes = "https://www.googleapis.com/auth/cloud-platform",
  W = "global",
  L = (e, o, t) => `https://claude.googleapis.com/v1alpha/projects/${e}/locations/${o}/workspaces/${t}/invoke`,
  D = "Set `project` or the `ANTHROPIC_GOOGLE_CLOUD_PROJECT` environment variable (or provide `baseURL`).",
  z = ["apiKey", "authToken", "credentials", "config", "profile"];
class I extends Nwe {
  get completions() {
    throw new Zn("The deprecated text Completions API is not available on Claude Platform on Google Cloud");
  }
  set completions(e) {}
  constructor({
    baseURL = l("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"),
    project = l("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ?? l("GOOGLE_CLOUD_PROJECT"),
    location = l("ANTHROPIC_GOOGLE_CLOUD_LOCATION"),
    workspaceId = l("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"),
    bearerTokenProvider: bearerTokenProvider,
    googleAuth: googleAuth,
    authClient: authClient,
    skipAuth = !1,
    ...T
  } = {}) {
    if (authClient && googleAuth) throw new Zn("The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.");
    if (skipAuth && (bearerTokenProvider || googleAuth || authClient)) throw new Zn("The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.");
    for (let h of z) if (T[h] != null) throw new Zn(`The \`${h}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`);
    if (location = location || W, !workspaceId && !(skipAuth && baseURL)) throw new Zn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.");
    let x = baseURL,
      k = !1;
    if (!x) if (project) x = L(project, location, workspaceId);else if (skipAuth) throw new Zn(`No project was given. ${D}`);else k = !0;
    super({
      baseURL: x ?? null,
      ...T,
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
    C.add(this), d.set(this, void 0), b.set(this, void 0), g.set(this, void 0), u.set(this, void 0), w.set(this, void 0), this.project = project ?? null, this.location = location ?? null, this.workspaceId = workspaceId, this.skipAuth = skipAuth, c(this, d, bearerTokenProvider, "f"), c(this, b, googleAuth ?? null, "f"), c(this, g, authClient ?? null, "f"), c(this, w, !!baseURL, "f");
    let _;
    if (!skipAuth && !bearerTokenProvider) if (authClient) c(this, u, Promise.resolve(authClient), "f");else _ = googleAuth ?? new A.GoogleAuth({
      scopes: scopes
    }), c(this, u, _.getClient(), "f"), a(this, u, "f").catch(() => {});
    if (!k) this.ready = Promise.resolve();else {
      let h = _ ?? googleAuth ?? new A.GoogleAuth({
          scopes: scopes,
          ...(authClient ? {
            authClient: authClient
          } : {})
        }),
        P = location,
        N = workspaceId;
      this.baseURL = "https://unresolved.invalid", this.ready = h.getProjectId().then(y => {
        this.project = y, this.baseURL = L(y, P, N);
      }, y => {
        let j = new Zn(`No project was given and it could not be resolved from Google credentials. ${D}`);
        throw j.cause = y, j;
      }), this.ready.catch(() => {});
    }
  }
  withOptions(e) {
    return super.withOptions({
      project: this.project ?? void 0,
      location: this.location ?? void 0,
      workspaceId: this.workspaceId,
      bearerTokenProvider: a(this, d, "f"),
      googleAuth: a(this, b, "f") ?? void 0,
      authClient: a(this, g, "f") ?? void 0,
      skipAuth: this.skipAuth,
      baseURL: a(this, w, "f") ? this.baseURL : void 0,
      ...e
    });
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await this.ready;
  }
  async buildRequest(e, o = {}) {
    return await this.ready, await super.buildRequest(e, o);
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    let o = E([this._options.defaultHeaders, e.headers]);
    if (o.values.get("authorization") || o.nulls.has("authorization")) return;
    let t = await a(this, C, "m", v).call(this);
    return E([{
      Authorization: `Bearer ${t}`
    }]);
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicGoogleCloud/JS ${jC}`;
  }
}
d = new WeakMap(), b = new WeakMap(), g = new WeakMap(), u = new WeakMap(), w = new WeakMap(), C = new WeakSet(), v = async function () {
  if (a(this, d, "f")) return await a(this, d, "f").call(this);
  let o = await a(this, u, "f"),
    {
      token: token
    } = await o.getAccessToken();
  if (!token) throw new Zn("Failed to obtain a Google access token from Application Default Credentials.");
  return token;
};
export { I as AnthropicGoogleCloud };